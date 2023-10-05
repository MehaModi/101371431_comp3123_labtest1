const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

// Check if the Logs directory exists
if (fs.existsSync(logsDirectory)) {
  // List the files in the Logs directory
  const filesToRemove = fs.readdirSync(logsDirectory);

  // Output the file names to delete
  console.log('Files to delete:');
  filesToRemove.forEach((file) => {
    console.log(file);
    // Remove each file
    fs.unlinkSync(path.join(logsDirectory, file));
  });

  // Remove the Logs directory
  fs.rmdirSync(logsDirectory);
} else {
  console.log('Logs directory does not exist.');
}
