import path from "path";
import fs from "fs";
import { pipeline } from "stream";
import { createBrotliCompress, createBrotliDecompress } from "zlib";

const compress = async (args) => {
  if (args.length < 2) {
    console.error("Invalid input");
  } else {
    try {
      const pathToFile = path.join(process.cwd(), args[0]);
      const fileName = path.basename(pathToFile);
      const destinationPath = path.join(
        process.cwd(),
        args[1],
        `${fileName}.br`
      );

      await fs.promises.access(pathToFile, fs.constants.F_OK);
      const readable = fs.createReadStream(pathToFile);
      const writable = fs.createWriteStream(destinationPath);

      pipeline(readable, createBrotliCompress(), writable, (err) => {
        if (err) console.error("Operation failed");
      });
    } catch {
      console.error("Operation failed");
    }
  }
};

const decompress = async (args) => {
  if (args.length < 2) {
    console.error("Invalid input");
  } else {
    try {
      const pathToFile = path.join(process.cwd(), args[0]);
      const decompressedfileName = path
        .basename(pathToFile)
        .split(".")
        .slice(0, -1)
        .join(".");

      const destinationPath = path.join(
        process.cwd(),
        args[1],
        decompressedfileName
      );

      await fs.promises.access(pathToFile, fs.constants.F_OK);
      const readable = fs.createReadStream(pathToFile);
      const writable = fs.createWriteStream(destinationPath);

      pipeline(readable, createBrotliDecompress(), writable, (err) => {
        if (err) console.error("Operation failed");
      });
    } catch {
      console.error("Operation failed");
    }
  }
};

export { compress, decompress };
