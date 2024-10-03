import path from "path";

const up = () => {
  const newCWD = path.resolve(process.cwd(), "..");
  process.chdir(newCWD);
};

export { up };
