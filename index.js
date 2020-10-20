function createEmployeeRecord(theArray) {
    let newEmployee = {};
    newEmployee.firstName = theArray[0];
    newEmployee.familyName = theArray[1];
    newEmployee.title = theArray[2];
    newEmployee.payPerHour = theArray[3];
    newEmployee.timeInEvents = [];
    newEmployee.timeOutEvents = [];
    return newEmployee;
}

function createEmployeeRecords(theArrays) {
    return theArrays.map( x => createEmployeeRecord(x) );
}

function createTimeInEvent(employee, timeStamp) {
 let timeObject = {};
 timeObject.type = "TimeIn";
 timeObject.hour = parseInt(timeStamp.split(" ")[1], 10);
 timeObject.date = timeStamp.split(" ")[0];
 employee.timeInEvents.push(timeObject);
 return employee;
}

function createTimeOutEvent(employee, timeStamp) {
 let timeObject = {};
 timeObject.type = "TimeOut";
 timeObject.hour = parseInt(timeStamp.split(" ")[1], 10);
 timeObject.date = timeStamp.split(" ")[0];
 employee.timeOutEvents.push(timeObject);
 return employee;
}

function hoursWorkedOnDate(employee, timeStamp) {
 let timeOut = employee.timeOutEvents.find(element => element.date === timeStamp);
 let timeIn = employee.timeInEvents.find(element => element.date === timeStamp);
 return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(employee, timeStamp) {
    let hoursWorked = hoursWorkedOnDate(employee, timeStamp);
    return hoursWorked * employee.payPerHour;
}

function allWagesFor(employee) {
    let theDates = employee.timeInEvents.map( x => x.date )
    let payArray = theDates.map( x => wagesEarnedOnDate(employee, x) );
    return payArray.reduce((x,y) => x+y, 0);
}

function calculatePayroll(employeeArray) {
    let allWages = employeeArray.map(x => allWagesFor(x));
    return allWages.reduce((x,y) => x+y, 0);
}

function findEmployeeByFirstName(employeeArray, firstName) {
    return employeeArray.find(x => x.firstName === firstName);
}