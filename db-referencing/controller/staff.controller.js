const Staff = require("../models/staff.model");



const staffController = {
  async create(req, res) {
   const {name, email} = req.body
   const staff = await Staff.create({
    name,
    email
   })
   return res.send(staff)
  },

};

module.exports = staffController;

