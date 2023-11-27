import { Schema, model } from "mongoose";

const MoviesSchema = new Schema(
  {
    id: String,
    title: String,
    description: String,
    year: Number,
    directorId: String,
  },
  {
    collection: "Movies",
    versionKey: false,
  }
);

const Movies = model("Movies", MoviesSchema);
export default Movies;
