function createEmployeeRecord(empArray) {
    return {
        firstName: empArray[0],
        familyName: empArray[1],
        title: empArray[2],
        payPerHour: empArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
};

function createEmployeeRecords(empArray) {
    return empArray.map(emp => createEmployeeRecord(emp))
};

function createTimeInEvent(emp, dateStamp) {
   let[date, hour] = dateStamp.split(" ")
   emp.timeInEvents.push({
       type: "TimeIn",
       hour: parseInt(hour, 10),
       date: date
   }); 
   return emp
};

function createTimeOutEvent(emp, dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    emp.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return emp
};

function hoursWorkedOnDate(emp, dateWorked) {
    let hourIn = emp.timeInEvents.find(e => e.date === dateWorked)
    let hourOut = emp.timeOutEvents.find(e => e.date === dateWorked)
    return (hourOut.hour - hourIn.hour)/100 
};

function wagesEarnedOnDate(emp, dateWorked) {
    let pay = hoursWorkedOnDate(emp, dateWorked) * emp.payPerHour
    return parseFloat(pay.toString())
};

function allWagesFor(emp) {
    let datesWorked = emp.timeInEvents.map(e => e.date)
    let pay = datesWorked.reduce((memo, dw) => { 
        return memo + wagesEarnedOnDate(emp, dw)
    }, 0)
    return pay
};

function findEmployeeByFirstName(array, firstName) {
    return array.find(name => name.firstName === firstName)
};

function calculatePayroll(emp) {
    return emp.reduce((memo, r) => {
        return memo + allWagesFor(r)
    }, 0)
};