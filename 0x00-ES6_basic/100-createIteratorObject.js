export default function createItaratorObject(report) {
  const { allEmployees } = report;
  const employees = [];

  for (const department in allEmployees) {
    if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
      const departmentEmployees = allEmployees[department];
      for (const employee of departmentEmployees) {
        employees.push(employee);
      }
    }
  }

  let currentIndex = 0;

  return {
    next() {
      const value = currentIndex < employees.length ? employees[currentIndex] : undefined;
      const done = currentIndex >= employees.length;
      currentIndex += 1;
      return { value, done };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
