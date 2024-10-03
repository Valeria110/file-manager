import path from "path";
import fs from "fs";
import { processArgsToPath } from "../../utils/processArgsToPath.js";

const cat = async (pathToFile) => {
  try {
    const readableFilePath = path.join(
      process.cwd(),
      processArgsToPath(pathToFile)
    );
    await fs.promises.access(readableFilePath, fs.constants.R_OK);
    const readableStream = fs.createReadStream(readableFilePath, {
      encoding: "utf-8",
    });
    readableStream.pipe(process.stdout);
  } catch {
    console.error("Operation failed");
  }
};

export { cat };
