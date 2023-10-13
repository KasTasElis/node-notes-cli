import * as fs from "node:fs/promises";

export const initialiseDb = async () => {
  const initialData = {
    notes: [],
  };

  await fs.writeFile("./db/data.json", JSON.stringify(initialData, null, 2));
};

export const getDb = async () => {
  const db = await fs.readFile("./data.json", "utf8");
  return JSON.parse(db);
};

export const updateDb = async (newData) => {
  await fs.writeFile("./data.json", JSON.stringify(newData, null, 2));
};
