# Node Express

This is a Node.JS Express version that will receive and parse a JWT token from a querry parameter.

To start the application, you need [pnpm](https://pnpm.io/installation), then

```console
# pnpm i
# pnpm start
```

You can access the application on <http://localhost:3000>, unless you've set `PORT` environment variable to something else.

Give it the query paramter `?token=X` to pass along the identity token, i.e.: `http://localhost:3000?token=eyJhbg...`.

## Install PNPM

```console
# npm install -g pnpm
```

Or check out other options here [here](https://pnpm.io/installation).
