import readline from "readline";
import { getUserName } from "./utils/getUserName.js";
import os from "os";
import { greetUser } from "./utils/greetUser.js";
import { printWorkingDir } from "./utils/printWorkingDir.js";
import { up } from "./cli/up.js";
import { cd } from "./cli/cd.js";
import { ls } from "./cli/ls.js";
import { cat } from "./cli/files/cat.js";
import { add } from "./cli/files/add.js";
import { rename } from "./cli/files/rename.js";
import { copy } from "./cli/files/copy.js";
import { move } from "./cli/files/move.js";
import { deleteFile } from "./cli/files/deleteFile.js";
import { osFunc } from "./cli/os/os.js";

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
      case "cat":
        await cat(args);
        break;
      case "add":
        await add(args);
        break;
      case "rn":
        await rename(args);
        break;
      case "cp":
        await copy(args);
        break;
      case "mv":
        await move(args);
        break;
      case "rm":
        await deleteFile(args);
        break;
      case "os":
        await osFunc(args);
        break;

      default:
        console.error("Invalid input", err);
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
