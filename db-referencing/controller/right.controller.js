const Right = require("../models/rights.model");



const rightController = {
  async create(req, res) {

   const right = await Right.create({
    staff_id : req.body.staff_id,
    right: req.body.right
   })
   const rightData = await right.save()
   return res.send(rightData)
  },

  async staffByRight(req,res) {
    const rightData = await Right.find({_id: req.body.right_id}).populate("staff_id")
    return res.send(rightData)
  }

};

module.exports = rightController;

