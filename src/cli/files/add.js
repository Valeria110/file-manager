import fs from "fs/promises";
import path from "path";

const add = async (args) => {
  if (!args.length) {
    console.error("Invalid input");
  } else {
    try {
      const fileName = args.length === 1 ? args[0] : args.join("-");
      const filePath = path.join(process.cwd(), fileName);
      await fs.writeFile(filePath, "");
    } catch {
      console.error("Operation failed");
    }
  }
};

export { add };
