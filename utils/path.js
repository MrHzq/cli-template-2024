const os = require("os");
const path = require("path");

// 获取不同操作系统的根目录
const root = () => os.homedir();

// 获取当前工作目录
const currCwdPath = process.cwd();

// 判断是否在当前目录
const isInCurrCwd = (path) => currCwdPath === path;

// 获取当前运行命令的目录
const currCmdPath = __dirname;

// 获取完整路径
const getFullPathBy = (p, type = 1) => {
  const firstPath = type === 1 ? currCwdPath : currCmdPath;
  if (p.includes(firstPath)) return p;
  else return path.join(firstPath, p);
};

// 获取文件[名称, 后缀]
const getFileName = (filePath) => {
  const extname = path.extname(filePath).toLowerCase();
  const filename = path.basename(filePath, extname);
  return [filename, extname];
};

// 基于当前运行命令的目录，获取相对路径。默认基于 utils/path.js
const getDirRePath = (dirname, ...args) => path.join(dirname, ...args);

// 基于当前工作目录，获取相对路径
const getCwdRePath = (...args) => path.join(currCwdPath, ...args);

// 获取当前文件夹名称
const getDirName = (dirname = __dirname) => path.basename(dirname);

module.exports = {
  root,
  currCwdPath,
  isInCurrCwd,
  currCmdPath,
  getFullPathBy,
  getFileName,
  getDirRePath,
  getCwdRePath,
  getDirName,
};
