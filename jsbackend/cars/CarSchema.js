import mongoose from "mongoose";
const Schema = mongoose.Schema;

export default new Schema({
  make: { 
      type: String, 
      enum: ["honda", "ford", "skoda", "volvo"], 
      required: true, 
    },
  model: { 
      type: String,
      required: true,
    },
  comment: { type: String },
});
