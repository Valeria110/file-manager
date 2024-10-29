import path from "path";
import fs from "fs/promises";
import { processArgsToPath } from "../utils/processArgsToPath.js";

const cd = async (args) => {
  if (!args.length) {
    console.error("Invalid input");
  } else {
    try {
      const newCWD = path.resolve(process.cwd(), processArgsToPath(args));
      await fs.access(newCWD, fs.constants.R_OK);
      process.chdir(newCWD);
    } catch {
      throw new Error("Operation failed");
    }
  }
};

export { cd };
