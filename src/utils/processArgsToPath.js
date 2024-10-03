const processArgsToPath = (args) => {
  return `${args.length === 1 ? args[0] : args.join(" ")}`;
};

export { processArgsToPath };
