# ID Token Display

A simple website which displays token contents after validating the token issuer and RS256 signature using OIDC standards.

You can check out the implementation here:

- [Node.JS](src/node)

___

## Valid Consensus issuers
The issuer **must** be validated to ensure that the token comes from a trusted Consensus source.

```
[
    'https://api.consensus-connect.com',
    'https://api.dev.consensus-connect.com',
    'https://api.staging.consensus-connect.com',
    'https://api.novo-connect.com',
    'https://api.uat.novo-connect.com',
    'https://api.novo-connect.eu',
    'https://api.uat.novo-connect.eu'
]
```

## Valid Consensus `postMessage()` origins
If you accept our ID tokens through the `postMessage()` api, you may want to control which origins you want to accept messages from. 

These Consensus origins can be whitelisted:

```
[
    'https://www.consensus-connect.com',
    'https://dev.consensus-connect.com',
    'https://staging.consensus-connect.com',
    'https://www.novo-connect.com',
    'https://uat.novo-connect.com',
    'https://www.novo-connect.eu',
    'https://uat.novo-connect.eu'
]
```