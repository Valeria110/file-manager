import path from "path";
import fs from "fs/promises";

const deleteFile = async (args) => {
  if (!args.length) {
    console.error("Invalid input");
  } else {
    try {
      const pathToFile = path.join(process.cwd(), args[0]);
      await fs.access(pathToFile, fs.constants.F_OK);
      await fs.unlink(pathToFile);
    } catch {
      console.error("Operation failed");
    }
  }
};

export { deleteFile };
