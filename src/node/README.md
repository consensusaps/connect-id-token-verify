# Node Express

This is a Node.JS Express project that will receive and parse a JWT token from a query parameter.

To start the application:

```console
# npm i
# npm start
```

You can access the application on <http://localhost:3000>, unless you've set `PORT` environment variable to something else.

Give it the query paramter `?token=X` to pass along the identity token, i.e.: `http://localhost:3000?token=eyJhbg...`.
