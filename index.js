// Your code here
const createEmployeeRecord = (record) => {
    return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []

    }
}


const createEmployeeRecords = (data) => {
    return data.map(record =>  createEmployeeRecord(record))
}

const createTimeInEvent = (worker, dateStamp) => {
  //dateStamp = [date, hour]
  let [date, hour] = dateStamp.split(' ')
  worker.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10), date    
  })  
  return worker
}

const createTimeOutEvent = (worker, dateStamp) => {

    let [date, hour] = dateStamp.split(' ')
    worker.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10), 
        date
    })

    return worker
}

const hoursWorkedOnDate = (worker,day) => {
    //need to take the hours worked between in time to out time
    let inTime = worker.timeInEvents.find((event) => {
        return event.date === day
    })

    let outTime = worker.timeOutEvents.find((event) => {
        return event.date === day
    })

    return (outTime.hour - inTime.hour) / 100

}

const wagesEarnedOnDate = (worker, day) => {
    let grossWage = hoursWorkedOnDate(worker, day) * worker.payPerHour
    return parseFloat(grossWage.toString())
}

const allWagesFor = (worker) => {
    let applicableDates = worker.timeInEvents.map( x => x.date )

    let pay = applicableDates.reduce((x,y) => {
        return x + wagesEarnedOnDate(worker, y)
    }, 0)

    return pay
}


const calculatePayroll = (array) => {
    return array.reduce((memo,rec) => {
     return memo + allWagesFor(rec)
    },0)
}



const findEmployeeByFirstName = (array,firstName) => {
    return array.find( name => name['firstName'] === firstName)
}