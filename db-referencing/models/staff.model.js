const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const staffSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
 email:{
  type:String
 }
},
{
  timestamps:true
});
module.exports =  mongoose.model("staff", staffSchema, "staffs");
