let createEmployeeRecord = function (arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
};

let createEmployeeRecords = function (arr) {
  return arr.map(createEmployeeRecord);
};

let createTimeInEvent = function (employee, timeStamp) {
  let [date, hour] = timeStamp.split(" ");

  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  });
  return employee;
};


let createTimeOutEvent = function(employee,timeStamp){
    let [date, hour] = timeStamp.split(" ");

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
      });
      return employee;
}

let hoursWorkedOnDate = function (employee, date){
  let timeIn = employee.timeInEvents.find(e => e.date === date)
  let timeOut = employee.timeOutEvents.find(e => e.date === date)
  return (timeOut.hour - timeIn.hour)/100
}

let wagesEarnedOnDate = function (employee, date){
  let hoursWorked = hoursWorkedOnDate(employee,date)
  return employee.payPerHour * hoursWorked
}

let allWagesFor = function (employee){
  let dates = employee.timeInEvents.map(event => event.date)
  let wages = dates.map(function(date){
    return wagesEarnedOnDate(employee,date)
  })
  return wages.reduce(function (acc,curr){
    return acc + curr
  }, 0)
}

let calculatePayroll = function (arr){
  let payroll = arr.map(emp => allWagesFor(emp))
  return payroll.reduce(function (acc,curr){
      return acc + curr
  }, 0)
}

let findEmployeeByFirstName = function(arr, firstName){
  let emp = arr.find(e => e.firstName === firstName)
  return emp
}