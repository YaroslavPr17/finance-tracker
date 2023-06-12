const express = require('express');
const bodyParser = require('body-parser')
const spendingsRouter = require('./routes/spendings.js');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log(`Got request ${req.method} ${req.path}`);

    next();
})

app.use(bodyParser.json())
app.use('/', spendingsRouter);

app.listen(PORT, () => {
    console.log('App successfully started! Running on', PORT);
});