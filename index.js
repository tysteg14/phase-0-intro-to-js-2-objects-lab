const employee = {
    name: "Sam"
}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}

const updatedemployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway" );

console.log(employee);

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

const destructEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway" );

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });


  function deleteFromEmployeeByKey(employee, key) {
    let clonedEmployees = { ...employee };
    delete clonedEmployees[key];
    return clonedEmployees;
}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}




  








