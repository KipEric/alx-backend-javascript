const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const students = await readDatabase(process.argv[2].toString());
      const output = ['This is the list of our students'];
      const sortedFields = Object.keys(students).sort();
      
      for (const field of sortedFields) {
        output.push(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
      
      response.status(200).send(output.join('\n'));
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    try {
      const students = await readDatabase(process.argv[2].toString());

      if (!(major in students)) {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        response.status(200).send(`List: ${students[major].join(', ')}`);
      }
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
