
// Dependencies
var express = require("express"),
    methodOverride = require("method-override"),
    bodyParser = require("body-parser");

var port = process.env.PORT || 8080;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers");

app.use("/", routes);

app.listen(port);