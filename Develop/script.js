// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const first_Name = document.querySelector('#add-employee-btn')
const last_Name = document.querySelector('#add-employee-btn')
const salary = document.querySelector('#add-employee-btn')

// Collect employee data
// Collect employee data
const collectEmployees = function() {
  const employees = []
  let moreEmployees = true;

  while (moreEmployees){
    const first_name = prompt ('First Name');
    const last_Name = prompt ('Last Name');
    const salary = prompt ('Salary');
    const namecharacters = ('abcdefghijklmnopqrstuvwxyz'.split(''));
   if (namecharacters.includes(firstname, lastName)){
      console.log('Please use letters only')
    }
    
  
const employee = {firstName, lastName, salary};
employees.push(employee);
moreEmployees = confirm('Would you like to add another employee?');
  }
return employees
}

  // TODO: Get user input to create and return an array of employee objects


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = totalSalary/employeesArray.length;

  console.log(`Average Salary = `${averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })});
}
  // TODO: Calculate and display the average salary
}
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log('Random Employee:', randomEmployee)
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
