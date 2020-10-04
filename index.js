//array = ["first name", "family name", "title", 15 (pay rate per hour)]
function createEmployeeRecord(employee) {
    return {
        firstName: employee[0], 
        familyName: employee[1], 
        title: employee[2], 
        payPerHour: employee[3], 
        timeInEvents: [], 
        timeOutEvents: []
    }

}

function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(employee, dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    employee["timeInEvents"].push({
        type: "TimeIn", 
        hour: parseInt(hour), 
        date: date
    })
    return employee;
}


function createTimeOutEvent(employee, dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    employee["timeOutEvents"].push({
        type: "TimeOut", 
        hour: parseInt(hour), 
        date: date
    })
    return employee;
}

function hoursWorkedOnDate(employee, day) {
    let timeIn = employee.timeInEvents.find(function(e) {return e.date === day}).hour
    let timeOut = employee.timeOutEvents.find(function(e) {return e.date === day}).hour
    let hours = parseInt(timeOut - timeIn)/100
    return hours
}

function wagesEarnedOnDate(employee, day) {
    let payRate = employee.payPerHour
    return (hoursWorkedOnDate(employee, day) * payRate)
}

function allWagesFor(employee) {
    let dates = employee.timeInEvents.map(timeInEvent => timeInEvent.date)
    let wages = dates.reduce(function(accumulator, day){return accumulator + wagesEarnedOnDate(employee, day)}, 0)
    return wages
}

function findEmployeeByFirstName(employees, name) {
    return employees.find(employee => employee.firstName === name)
}

function calculatePayroll(employees) {
    return employees.reduce(function(accumulator,employee) {
        return accumulator + allWagesFor(employee)
    }, 0) 
     
}
