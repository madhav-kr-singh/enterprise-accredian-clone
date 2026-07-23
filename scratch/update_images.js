const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/ADMIN/Desktop/accredian/src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Replace standalone "fill" inside <Image> tags with "fill sizes=\"...\""
  // We can just find lines that just have "fill" or "fill\r\n" inside the components and replace them if they don't already have sizes nearby.
  // Actually, simpler: replace all lines that just have spaces followed by "fill" with "fill sizes=\"(max-width: 768px) 100vw, 50vw\""
  // Let's do it safely:
  let newContent = content.replace(/^(\s+)fill$/gm, '$1fill\n$1sizes="(max-width: 768px) 100vw, 50vw"');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log('Updated ' + file);
  }
});
