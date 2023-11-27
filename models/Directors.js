import { Schema, model } from "mongoose";

const DirectorsSchema = new Schema(
  {
    id: String,
    name: String,
    birth: Number,
  },
  {
    collection: "Directors",
    versionKey: false,
  }
);

const Directors = model("Directors", DirectorsSchema);
export default Directors;
