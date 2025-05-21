const fs = require('fs');
const path = require('path');

const mdDir = path.join(__dirname, '../docs/md');
const outFile = path.join(mdDir, 'mdlist.json');

const files = fs.readdirSync(mdDir).filter(f => f.endsWith('.md'));

const list = files.map(file => {
  const content = fs.readFileSync(path.join(mdDir, file), 'utf8');
  const lines = content.split('\n');
  let title = file, desc = '';
  if (lines[0]) title = lines[0].trim();
  if (lines[1]) desc = lines[1].trim();
  return { file, title, desc };
});

fs.writeFileSync(outFile, JSON.stringify(list, null, 2), 'utf8');
console.log('mdlist.json 已生成');