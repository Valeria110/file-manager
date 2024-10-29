import fs from "fs/promises";
import path from "path";

const rename = async (args) => {
  if (args.length < 2) {
    console.error("Invalid input");
  } else {
    try {
      const oldFilePath = path.join(process.cwd(), args[0]);
      const newFilePath = path.join(process.cwd(), args[1]);

      await fs.access(oldFilePath);
      await fs.rename(oldFilePath, newFilePath);
    } catch {
      console.error("Operation failed");
    }
  }
};

export { rename };
