import * as fs from "node:fs/promises";

const dbPath = "./db/data.json";

export const initialiseDb = async () => {
  const initialData = {
    notes: [],
  };

  await fs.writeFile(dbPath, JSON.stringify(initialData, null, 2));
};

export const getDb = async () => {
  const db = await fs.readFile(dbPath, "utf8");
  return JSON.parse(db);
};

export const updateDb = async (newData) => {
  await fs.writeFile(dbPath, JSON.stringify(newData, null, 2));
};
