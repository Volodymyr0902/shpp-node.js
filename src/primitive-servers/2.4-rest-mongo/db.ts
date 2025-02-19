import { MongoClient } from "mongodb";

const dbURI = "mongodb://localhost:27017";

export const getLibDB = async () => {
  const client = new MongoClient(dbURI);
  await client.connect();
  return client.db("library");
};