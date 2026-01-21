import fs from "fs/promises";
import path from "path";

const dbPath = path.resolve("data/db.json");

export const readTodos = async () => {
  const data = await fs.readFile(dbPath, "utf-8");
  return JSON.parse(data).todos;
};

export const writeTodos = async (todos) => {
  await fs.writeFile(
    dbPath,
    JSON.stringify({ todos }, null, 2)
  );
};
