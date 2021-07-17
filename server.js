const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const appName = process.env.APP || "testApp";
const morganOption = process.env.MORGAN_OPTIONS;
const debug = require('debug')(appName);
const port = process.env.PORT || 3000;

const app = express();

debug(" booting");
app.use(morgan(morganOption));

app.get("/", (req, res) => {
   res.send("this is project"); 
});

app.listen(port, () => {
    debug(`server running on port ${chalk.green(port)}`)
});
