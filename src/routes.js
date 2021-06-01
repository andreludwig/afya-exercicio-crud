const express = require("express");

const CustomerController = require("./app/controllers/CustomerController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ message: "Bem vindo ao sistema de cadastro de clientes!" });
});

// Customer
routes.get("/customers", CustomerController.listAll);
routes.get("/customer/:id", CustomerController.listOne);
routes.post("/customers", CustomerController.add);
routes.put("/customer/:id", CustomerController.edit);
routes.delete("/customer/:id", CustomerController.remove);

module.exports = routes;
