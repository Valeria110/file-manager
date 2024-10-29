import { printWorkingDir } from "./printWorkingDir.js";

const greetUser = (userName) => {
  console.log(`Welcome to the File Manager, ${userName}!`);
  printWorkingDir();
};

export { greetUser };
