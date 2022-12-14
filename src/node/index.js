const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { Issuer } = require('openid-client');
const jwks = require('jwks-rsa');
const jwt = require('jsonwebtoken');

app.get('/', async (req, res) => {
    const idToken = req.query.token;

    if (!idToken || idToken == '') {
        res.send('No token provided via <code>?token=x</code> query paramter.');
        return;
    }

    let validationStatus = 'N/A';

    const decodedToken = jwt.decode(idToken, { complete: true });
    const { kid: tokenKid } = decodedToken.header;
    const { iss: issuerUrl } = decodedToken.payload;

    const issuer = await Issuer.discover(issuerUrl);
    const jwksUri = issuer.jwks_uri;

    const client = jwks({ jwksUri });

    const key = await client.getSigningKey(tokenKid);
    const signingKey = key.getPublicKey();

    let user = {}
    try {
        const verified = jwt.verify(idToken, signingKey, {
            issuer: [
                'https://api.consensus-connect.com',
                'https://api.dev.consensus-connect.com',
                'https://api.staging.consensus-connect.com',
                'https://api.novo-connect.com',
                'https://api.uat.novo-connect.com',
                'https://api.novo-connect.eu',
                'https://api.uat.novo-connect.eu'
            ],
            algorithms: ['RS256', 'RS512']
        });
        if (!!verified) {
            validationStatus = 'VALID';
            user = verified;
        }
    } catch (_) {
        validationStatus = 'INVALID';
    }

    res.send(`ID Token:<br><pre style="max-width: 75vw;word-wrap:break-word;white-space:pre-wrap;">${idToken}</pre><br>Validation: <code>${validationStatus}</code><br><pre>${JSON.stringify(user)}</pre>`);
});

app.listen(port, () => console.log(`App listening on port ${port}`));

/*
 * Not necessary for OIDC, but nice to have when accepting messages through the postMessage() API,
 * if you want to avoid accepting messages from '*'.
 */
const postMessageOriginWhitelist = [
    'https://www.consensus-connect.com',
    'https://dev.consensus-connect.com',
    'https://staging.consensus-connect.com',
    'https://www.novo-connect.com',
    'https://uat.novo-connect.com',
    'https://www.novo-connect.eu',
    'https://uat.novo-connect.eu'
];
