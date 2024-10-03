import os from "os";

const osFunc = async (args) => {
  const arg = args[0];

  switch (arg) {
    case "--EOL":
      console.log(os.EOL);
      break;
    case "--cpus":
      const cpuCount = os.cpus().length;
      const cpusInfoArr = os.cpus().map((cpu) => ({
        Model: cpu.model,
        ["Clock Rate (GHz)"]: cpu.speed / 1000,
      }));
      console.log(`Amount of CPUS: ${cpuCount}`);
      console.table(cpusInfoArr);
      break;
    case "--homedir":
      console.log(os.homedir());
      break;
    case "--username":
      console.log(os.userInfo().username);
      break;
    case "--architecture":
      console.log(os.arch());
      break;

    default:
      console.error("Invalid input");
  }
};

export { osFunc };
