import fs from "fs";

const ls = async () => {
  try {
    const files = [];
    const folders = [];
    const filesArr = await fs.promises.readdir(process.cwd());

    await Promise.all(
      filesArr.map(async (file) => {
        const fileStat = await fs.promises.stat(file);
        if (fileStat.isFile()) {
          files.push(file);
        } else {
          folders.push(file);
        }
      })
    );

    const tableDatafolders = folders.sort().map((folder) => ({
      Name: folder,
      Type: "directory",
    }));
    const tableDataFiles = files.sort().map((file) => ({
      Name: file,
      Type: "file",
    }));

    console.table([...tableDatafolders, ...tableDataFiles]);
  } catch {
    throw new Error("Operation failed");
  }
};

export { ls };
