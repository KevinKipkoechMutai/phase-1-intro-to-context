// Your code here

//creating employee record
function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}


//creating employee records
function createEmployeeRecords(array) {
    return array.map((employee) => createEmployeeRecord(employee));
}

//create time-in event
function createTimeInEvent(employee, dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    });
    return employee;
}

//create time-out event
function createTimeOutEvent(employee, dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return employee
}

//hours worked
function hoursWorkedOnDate(employee, date) {
    let timeIn = employee.timeInEvents.find((e) => e.date === date);
    let timeOut = employee.timeOutEvents.find((e) => e.date === date);
    return (timeOut.hour - timeIn.hour)/100;
}

//wages earned
function wagesEarnedOnDate(employee, date) {
    return hoursWorkedOnDate(employee, date) * employee.payPerHour;
}

//Total wages
function allWagesFor(employee) {
    let dates = employee.timeInEvents.map((e) => e.date);
    return dates.reduce((totalWages, date) => totalWages + wagesEarnedOnDate(employee, date), 0);
}

//Payroll
function findEmployee(arrayS, firstName) {
    return arrayS.find(employee => employee.firstName === firstName);
}

function calculatePayroll(array) {
    return array.reduce((totalWages, employee) => totalWages + allWagesFor(employee), 0);
}