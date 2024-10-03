import fs from "fs";
import { copy } from "./copy.js";

const move = async (args) => {
  try {
    const originalFilePath = await copy(args);
    await fs.promises.unlink(originalFilePath);
  } catch {
    console.error("Operation failed");
  }
};

export { move };
