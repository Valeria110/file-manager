const getUserName = () => {
  const args = process.argv.slice(2);
  const userNameArg = args.find((arg) => arg.startsWith("--username"));
  const userName = userNameArg ? userNameArg.split("=")[1] : "user";

  return userName;
};

export { getUserName };
