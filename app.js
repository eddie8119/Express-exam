const express = require("express");
const app = express();
const port = 3000;

const exphbs = require("express-handlebars");

//設定模板引擎
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("mainPage-index");
});

//個別明細-about
app.get("/about", (req, res) => {
  res.render("about-index");
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio-index");
});

app.get("/contact", (req, res) => {
  res.render("contact-index");
});


//監聽伺服器
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});

