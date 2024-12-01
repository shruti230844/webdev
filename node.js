fs.append
const fs = require('fs');
const os = require('os');
const filePath = 'abc.txt';
const initialContent = `hello
today we learnt different modules available in node.js: os, fs, and paths
`;
fs.writeFile(filePath, initialContent, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('Initial content written to abc.txt');
  const systemInfo = `This line must print the operating system and architecture of your machine:
Operating System: ${os.type()}
Architecture: ${os.arch()}
`;
  fs.appendFile(filePath, systemInfo, (err) => {
    if (err) {
      console.error('Error appending to file:', err);
      return;
    }
    console.log('System information appended to abc.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }
      console.log('\nFinal content of abc.txt:\n');
      console.log(data);
    });
  });
});
