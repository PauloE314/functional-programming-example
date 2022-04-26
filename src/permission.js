const moment = require("moment");
const { andCompose, orCompose } = require("./lib");

const secretKeys = {
  ADMIN: "e055214a-5116-4da6-8419-0e85c88609a6",
  USER: "cf798a4f-2d8c-48ed-b56f-ae19c786c3be",
};

const makePermission =
  (...permissions) =>
  async (req, res, next) => {
    const checker = orCompose(...permissions);
    const result = await checker(req, res, next);

    if (result) return next();
    return res.status(401).send();
  };

const isUser = async (req) =>
  req.headers["x-identifier-token"] === secretKeys.USER;

const isAdmin = async (req) =>
  req.headers["x-identifier-token"] === secretKeys.ADMIN;

const isRightTime = async (req) =>
  req.headers["x-time"] === moment().format("HH:mm");

module.exports = {
  userPermission: makePermission(isUser, isAdmin, isRightTime),
  adminPermission: makePermission(isAdmin, andCompose(isUser, isRightTime)),
};
