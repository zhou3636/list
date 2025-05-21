const fs = require('fs');
const path = require('path');

const mdDir = path.join(__dirname, '../docs/md');
const outFile = path.join(mdDir, 'mdlist.json');

function findMdFiles(dir) {
  let mdFiles = [];
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const fullPath = path.join(dir, f);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      mdFiles = mdFiles.concat(findMdFiles(fullPath));
    } else if (f.endsWith('.md')) {
      mdFiles.push(fullPath);
    }
  });
  return mdFiles;
}

const files = findMdFiles(mdDir);

const list = files.map(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  let title = path.basename(filePath), desc = '';
  if (lines[0]) title = lines[0].trim();
  if (lines[1]) desc = lines[1].trim();
  // 文件路径相对于 mdDir
  const file = path.relative(mdDir, filePath).replace(/\\/g, '/');
  return { file, title, desc };
});

fs.writeFileSync(outFile, JSON.stringify(list, null, 2), 'utf8');
console.log('mdlist.json 已生成');