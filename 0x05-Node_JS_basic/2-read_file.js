const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const students = {};

    for (const line of lines) {
      const [firstname, lastname, age, field] = line.split(',');
      if (field !== 'field' && field && firstname && lastname && age) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      }
    }

    const totalStudents = Object.values(students).reduce(
      (total, fieldStudents) => total + fieldStudents.length, 0,
    );

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, fieldStudents] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(',')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
