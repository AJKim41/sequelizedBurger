const Burger = require("../models/burger");
const db = require("../models/");

exports.burgerHome = (req, res) => {
  db.burger.findAll({ where: { devoured: false } }).then(burgers => {
    db.burger.findAll({ where: { devoured: true } }).then(devBurgers => {
      res.render("index", {
        burgers: burgers,
        devBurgers: devBurgers,
        pageTitle: "Burger2",
        path: "/"
      });
    });
  });
};

exports.postBurger = (req, res) => {
  db.burger.create(req.body).then(dbBurger => {
    console.log(dbBurger);
    res.redirect("/");
  });
};

exports.devourBurger = (req, res) => {
  db.burger
    .update({ devoured: 1 }, { where: { id: req.body.id } })
    .then(updatedBurger => {
      console.log(req.body.id);
      res.json(updatedBurger);
      res.redirect("/");
    });
  /*   Burger.find({ where: { id: req.body } }).on("success", burger => {
    if (burger) {
      burger
        .update({
          devoured: true
        })
        .success(() => {});
    }
  }); */
};
