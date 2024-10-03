import readline from "readline";
import { getUserName } from "./utils/getUserName.js";
import os from "os";
import { greetUser } from "./utils/greetUser.js";
import { printWorkingDir } from "./utils/printWorkingDir.js";
import { up } from "./cli/up.js";
import { cd } from "./cli/cd.js";
import { ls } from "./cli/ls.js";

const userName = getUserName();
process.chdir(os.homedir());

greetUser(userName);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

rl.on("resume", () => {
  //some code
});
rl.prompt();

rl.on("line", async (data) => {
  try {
    const [operation, ...args] = data.trim().split(" ");

    switch (operation) {
      case "up":
        up();
        break;
      case "cd":
        await cd(args);
        break;
      case "ls":
        await ls();
        break;
    }
  } catch (err) {
    console.error("Invalid input", err);
  }

  printWorkingDir();
  rl.prompt();
});
rl.on("close", () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
});
