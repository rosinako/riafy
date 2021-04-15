// index.js

/**
 * Required External Modules
 */
//const {  success, notFound } = require('./response/index.js')   ; 

const express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    bodymen = require("bodymen"),
    mongoose = require('mongoose');
//import User, { schema } from './model'

// Connect to the db
mongoose.Promise = global.Promise;


mongoose.connect(process.env.MONGODB_URI||'mongodb://127.0.0.1:27017/riafy_db', {
    useMongoClient: true
}).then(
    () => { console.log("------------------Db is connected") },
    err => { console.log("Db connection error") }
);
/**
* App Variables
*/

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/web'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/web/'}),
);

const port = process.env.PORT || "8000";
const host = "0.0.0.0";
app.use(cors());
// middleware
app.use(express.json());
app.use(express.urlencoded());

/**
*  App Configuration
*/

/**
* Routes Definitions
*/

app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
});


var nameSchema = new mongoose.Schema({
    name: String,
    market_cap: String,
    curr_price: String,
    stock_pe: String,
    roe: String,
    dividend: String,
    roce: String,
    eqDebit: String,
    eps: String,
    reserves: String,
    debt: String
});

var User = mongoose.model("Stock", nameSchema);


app.get('/stock', (req, res) => {

    User.find(function (err, apis) {

        if (err) return console.error(err);

        res.send(apis);

    });

});
app.post("/stock", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

/**
* Server Activation
*/
app.listen(port, host);
console.log("server up running");
console.log("listening to:" + host + ":" + port);