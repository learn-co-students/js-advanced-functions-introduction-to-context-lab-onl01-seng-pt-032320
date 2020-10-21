function createEmployeeRecord(array) {
    let employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee;
}

function createEmployeeRecords(arrays) {
    let records = [];
    arrays.map( function(array) {
        records.push(createEmployeeRecord(array));
    });
    return records;
}

function createTimeInEvent(record, date) {
    let dayTime = date.split(' ')
    record.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dayTime[1], 10),
        date: dayTime[0]
    })
    return record;
}

function createTimeOutEvent(record, date) {
    let dayTime = date.split(' ')
    record.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dayTime[1], 10),
        date: dayTime[0]
    })
    return record;
}

function hoursWorkedOnDate(record, day) {
    let timeIn = record.timeInEvents.filter( function(event) {
        return event.date === day;
    })
    let timeOut = record.timeOutEvents.filter( function(event) {
        return event.date === day;
    })
    return (timeOut[0].hour - timeIn[0].hour) / 100
}

function wagesEarnedOnDate(record, date) {
    return (hoursWorkedOnDate(record, date) * record.payPerHour)
}

function allWagesFor(record) {
    let totalPay = 0;
    let daysWorked = [];
    record.timeInEvents.map( function(day) {
        daysWorked.push(day.date);
    });
    daysWorked.map( function(date) {
        totalPay += wagesEarnedOnDate(record, date)
    });
    return totalPay;
}

function findEmployeeByFirstName(records, name) {
    let record = records.filter( function(employee) {
        return employee.firstName === name;
    })
    return record[0];
}

function calculatePayroll(records) {
    let totalPay = 0;
    records.map( function(employee) {
        totalPay += allWagesFor(employee);
    })
    return totalPay;
}