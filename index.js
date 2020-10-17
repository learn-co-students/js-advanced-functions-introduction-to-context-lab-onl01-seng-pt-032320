// Your code here
const createEmployeeRecord = function(empArray) {
    return {
        firstName: empArray[0],
        familyName: empArray[1],
        title: empArray[2],
        payPerHour: empArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function(employeeInfo) {
    return employeeInfo.map(function(empArray) {
        return createEmployeeRecord(empArray)
    }) 
}

const createTimeInEvent = function(employee, dateTime) {
    const [date, hour] = dateTime.split(' ')
    employee.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date,
    })
    return employee
}

const createTimeOutEvent = function(employee, dateTime) {
    const [date, hour] = dateTime.split(' ')
    employee.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date,
    })
    return employee
}

const hoursWorkedOnDate = function(employee, specificDate) {
    const inEvent = employee.timeInEvents.find(function(e) {
        return e.date === specificDate
    })

    const outEvent = employee.timeOutEvents.find(function(e) {
        return e.date === specificDate
    })

    return (outEvent.hour - inEvent.hour) / 100; 
}

const wagesEarnedOnDate = function(employee, specificDate) {
    const rawWage = hoursWorkedOnDate(employee, specificDate) * employee.payPerHour
    return rawWage 
}

const allWagesFor = function(employee) {
    const daysWorked = employee.timeInEvents.map(function(e) {
        return e.date
    })

    const payable = daysWorked.reduce(function(memo, d) {
        return memo + wagesEarnedOnDate(employee, d)
    }, 0)
    return payable
}   

const calculatePayroll = function(records) {
    return records.reduce(function(memo, rec) {
        return memo + allWagesFor(rec)
    }, 0)
}

const findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(function(rec) {
        return rec.firstName === firstName
    })
}