import express from "express";
import { config } from "dotenv";
import { graphqlHTTP } from "express-graphql";

config({ path: "./.env" });
connectDB();

import schema from "./schema/schema.js";
import connectDB from "./helpers/db.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
