import fs from 'node:fs'
import { argv, exit } from 'node:process'

// 读取输入文件
const inputFile = argv[2]
const outputFile = argv[3]

if (!inputFile || !outputFile) {
  console.log(`使用方法: node process_markdown.js 输入文件 输出文件`)
  exit(1)
}

try {
  // 读取文件内容
  const content = fs.readFileSync(inputFile, `utf8`)

  // 使用正则表达式移除font标签，但保留其中的文本
  const processedContent = content.replace(/<font[^>]*>(.*?)<\/font>/g, `$1`)

  // 写入新文件
  fs.writeFileSync(outputFile, processedContent, `utf8`)

  console.log(`处理完成！输出文件：${outputFile}`)
}
catch (error) {
  console.error(`处理文件时出错：`, error.message)
  exit(1)
}
