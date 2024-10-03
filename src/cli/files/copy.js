import path from "path";
import fs from "fs";

const copy = async (args) => {
  try {
    const originalFilePath = path.join(process.cwd(), args[0]);
    const fileName = path.basename(originalFilePath);
    const fileCopyPath = path.join(process.cwd(), args[1], fileName);

    await fs.promises.access(originalFilePath, fs.constants.F_OK);
    const readable = fs.createReadStream(originalFilePath, {
      encoding: "utf-8",
    });
    const writable = fs.createWriteStream(fileCopyPath, { encoding: "utf-8" });
    readable.on("error", () => console.error("Operation failed"));
    writable.on("error", () => console.error("Operation failed"));

    readable.pipe(writable);
    return originalFilePath;
  } catch {
    console.error("Operation failed");
  }
};

export { copy };
