const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

// Create the Logs directory if it doesn't exist
if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

// Change the current working directory to the Logs directory
process.chdir(logsDirectory);

// Create 10 log files and write some text into each file
for (let i = 1; i <= 10; i++) {
  const fileName = `log${i}.txt`;
  const fileContent = `This is log file ${i}.`;

  fs.writeFileSync(fileName, fileContent);

  console.log(`Created file: ${fileName}`);
}
