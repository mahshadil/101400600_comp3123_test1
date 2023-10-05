const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

function removeAndCreateLogFiles() {
  // Remove existing log files and the Logs directory
  if (fs.existsSync(logsDirectory)) {
    const files = fs.readdirSync(logsDirectory);
    console.log('Files to delete:', files);

    files.forEach(file => {
      const filePath = path.join(logsDirectory, file);
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${file}`);
    });

    fs.rmdirSync(logsDirectory);
    console.log(`Deleted directory: ${logsDirectory}`);
  } else {
    console.log(`The Logs directory doesn't exist.`);
  }

  // Create a new Logs directory
  fs.mkdirSync(logsDirectory);
  console.log(`Created directory: ${logsDirectory}`);

  // Change the current working directory to the new Logs directory
  process.chdir(logsDirectory);

  // Create 10 log files and write some text into each file
  for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `Log file ${i} content.`);
    console.log(`Created file: ${fileName}`);
  }
}

removeAndCreateLogFiles();
