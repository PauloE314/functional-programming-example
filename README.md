# Functional programming example

This is a simple example of funcional programming. It's a really basic permission system for educational purposes.

To run this, just install NodeJs and the npm dependencies (I'm using `yarn`, but you can use `npm` if you want to):

```bash
yarn install
yarn dev
```

Endpoints:

`/actions/user`

- send `x-identifier-token` header with `userToken`
- or send `x-identifier-token` header with `adminToken`
- or send `x-time` with current time (i.e `10:00`).

`/actions/admin`

- send `x-identifier-token` header with `adminToken`
- or send `x-identifier-token` header with `userToken` and send `x-time` with current time (i.e `10:00`).
