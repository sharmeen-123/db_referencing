const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const rightSchema = new Schema({
  staff_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'staff',
  },
 right:{
  type:String
 }
},
{
  timestamps:true
});
module.exports =  mongoose.model("right", rightSchema, "rights");
