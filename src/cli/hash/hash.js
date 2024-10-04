import path from "path";
import fs from "fs";
import crypto from "crypto";

const calcHash = async (args) => {
  if (!args.length) {
    console.error("Invalid input");
  } else {
    try {
      const filePath = path.join(process.cwd(), args[0]);
      await fs.promises.access(filePath, fs.constants.F_OK);
      const readable = fs.createReadStream(filePath);
      const hash = crypto.createHash("sha256");
      readable.pipe(hash).setEncoding("hex").pipe(process.stdout);
    } catch {
      console.error("Operation failed");
    }
  }
};

export { calcHash };
