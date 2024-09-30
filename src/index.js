import readline from "readline";

const greetUser = () => {
  const args = process.argv.slice(2);
  const UserNameArg = args.find((arg) => arg.startsWith("--username"));
  const userName = UserNameArg ? UserNameArg.split("=")[1] : "user";
  console.log(`Welcome to the File Manager, ${userName}!`);

  printWorkingDir();
};

const printWorkingDir = () => {
  console.log(`You are currently in ${process.cwd()}`);
};

greetUser();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

rl.on("resume", () => {
  //some code
});
rl.prompt();

rl.on("line", (data) => {
  console.log("Input: ", data);
  printWorkingDir();
  rl.prompt();
});
rl.on("close", () => console.log("The programm was finished"));
