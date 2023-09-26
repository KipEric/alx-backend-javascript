const { readFile } = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = {};
        const lines = data.trim().split('\n').slice(1);

        lines.forEach((line) => {
          const [firstname, , , field] = line.split(',').map((item) => item.trim());

          if (!students[field]) {
            students[field] = [];
          }

          students[field].push(firstname);
        });

        resolve(students);
      }
    });
  });
}

module.exports = readDatabase;
