const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const idToken = req.query.token;

    if (!idToken || idToken == '') {
        res.send('No token provided via <code>?token=x</code> query paramter.');
    }

    const validationStatus = 'NOT IMPLEMENTED';
    res.send(`ID Token:<br><pre>${idToken}</pre><br>Validation: <code>${validationStatus}</code>`);
});

app.listen(port, () => console.log(`App listening on port ${port}`));
