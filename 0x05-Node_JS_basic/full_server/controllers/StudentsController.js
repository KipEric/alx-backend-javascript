import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const database = await readDatabase('./database.csv');

    if (!database) {
      res.status(500).send('Cannot load the database');
      return;
    }

    res.status(200).send(`This is the list of our students\n${
      Object.keys(database)
        .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
        .map((field) => {
          const students = database[field].sort().join(', ');
          return `Number of students in ${field}: ${database[field].length}. List: ${students}`;
        })
        .join('\n')}`);
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const database = await readDatabase('./database.csv');

    if (!database) {
      res.status(500).send('Cannot load the database');
      return;
    }

    if (database[major]) {
      res.status(200).send(`List: ${database[major].sort().join(', ')}`);
    } else {
      res.status(500).send(`No data found for major: ${major}`);
    }
  }
}

export default StudentsController;
