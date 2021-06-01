const Customer = require("../models/Customer");

module.exports = {
  async listAll(req, res) {
    const customers = await Customer.findAll();

    return res.json(customers);
  },

  async listOne(req, res) {
    const customer = await Customer.findByPk(req.params.id);

    if (!customer) {
      return res.status(400).json({ error: "Customer not found" });
    }

    return res.json(customer);
  },

  async add(req, res) {
    const { name, cpf, phone, email } = req.body;

    const customer = await Customer.create({
      name,
      cpf,
      phone,
      email,
    });

    return res.status(201).json(customer);
  },

  async edit(req, res) {
    const customer = await Customer.findByPk(req.params.id);

    if (!customer) {
      return res.status(400).json({ error: "Customer not found" });
    }

    customer.name = req.body.name;
    customer.cpf = req.body.cpf;
    customer.phone = req.body.phone;
    customer.email = req.body.email;

    await customer.save();

    return res.status(200).json(customer);
  },

  async remove(req, res) {
    const customer = await Customer.findByPk(req.params.id);

    if (!customer) {
      return res.status(400).json({ error: "Customer not found" });
    }

    await customer.destroy();

    return res.status(200).send();
  },
};
