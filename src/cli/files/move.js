import fs from "fs";
import { copy } from "./copy.js";

const move = async (args) => {
  if (args.length < 2) {
    console.error("Invalid input");
  } else {
    try {
      const originalFilePath = await copy(args);
      await fs.promises.unlink(originalFilePath);
    } catch {
      console.error("Operation failed");
    }
  }
};

export { move };
