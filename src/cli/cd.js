import path from "path";
import fs from "fs/promises";

const cd = async (args) => {
  const newCWD = path.resolve(
    process.cwd(),
    `${args.length === 1 ? args[0] : args.join(" ")}`
  );

  try {
    await fs.access(newCWD, fs.constants.R_OK);
    process.chdir(newCWD);
  } catch {
    throw new Error("Operation failed");
  }
};

export { cd };
