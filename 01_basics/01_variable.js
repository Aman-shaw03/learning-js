const employeeId = 214425
let employee_mail = "aman@google.com"
var employee_password ="12345"
employee_city = "kolkata"

let employeeEducation;

// employeeId = 5 not allowed to change const values
employee_mail = "aman@gmail.com"
employee_password = "4414139"
employee_city = "Hoogly"

console.log(employeeId);
console.table([employeeId,employee_mail,employee_password, employee_city, employeeEducation])
// basically we are checking whter we can change different variable values and with console.table we can we see it in the form of a table

/*
    prefer not to use var
    because of issue in block scope and functional scope
*/ 