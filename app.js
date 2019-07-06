const express = require("express");
const app = express();

var PORT = process.env.PORT || 3000;

var db = require("./models");

const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");

var exphbs = require("express-handlebars");

app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(htmlRoutes);
app.use(apiRoutes);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
