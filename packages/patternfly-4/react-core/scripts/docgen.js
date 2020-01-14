const path = require('path');
const fs = require('fs');
const glob = require('glob');
const docgen = require('react-docgen');

const srcDir = path.join('./src');
const output = path.join('./docgen.json');

const files = glob.sync('**/*.tsx', {
  cwd: srcDir
});

console.log()

const componentInfo = docgen.parse(files);

try {
  fs.writeFileSync(output, JSON.stringify(componentInfo))
} catch (err) {
  console.error(err)
}