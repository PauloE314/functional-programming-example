const andCompose =
  (...funcs) =>
  (value) =>
    funcs.reduce(
      (acc, func) =>
        Promise.resolve(acc).then((result) => result && func(value)),
      true
    );

const orCompose =
  (...funcs) =>
  (value) =>
    funcs.reduce(
      (acc, func) =>
        Promise.resolve(acc).then((result) => result || func(value)),
      false
    );

module.exports = { andCompose, orCompose };
