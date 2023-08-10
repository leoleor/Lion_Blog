// node fs模块
import fs from 'fs'
// node path模块
import path from 'path'

export function getFileName(dirPath) {
  let arr:string[] = [];
  const filePath = path.resolve(dirPath);
  // const files = fs.readdirSync(filePath)方法用于[同步读取]给定目录的内容
  // fs.readdir(filePath, function (err, files) {})[异步]
  const files = fs.readdirSync(filePath); 
  // 去掉index.md
  const tempFiles = files.filter((item) => { return item !== 'index.md' })
  tempFiles.forEach((filename) => {
    // 获取当前文件的绝对路径
    const filedir = path.join(filePath, filename);
    // 返回文件类型
    const fsStats = fs.statSync(filedir);
    // 是否是文件
    const isFile = fsStats.isFile();
    // 是否是文件夹
    const isDir = fsStats.isDirectory();
    // 如果是文件
    if (isFile) {
      arr.push(filename)
    }
    // 如果是文件夹
    if (isDir) {
      getFileName(filedir);
    }
  });
  return arr
}