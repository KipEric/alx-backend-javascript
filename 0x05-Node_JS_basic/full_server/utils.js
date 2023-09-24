import { promises as fs } from 'fs';

const readDatabase = async (filePath) => {
  const data = await fs.readFile(filePath, 'utf8');
  const lines = data.trim().split('\n');
  const database = {};

  lines.forEach((line) => {
    const [field, firstName] = line.split(',');
    if (!database[field]) {
      database[field] = [];
    }
    database[field].push(firstName);
  });

  return database;
};

export default readDatabase;
