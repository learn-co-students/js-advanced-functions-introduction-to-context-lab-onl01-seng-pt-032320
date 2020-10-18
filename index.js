// Your code here

function createEmployeeRecord(arr){
    const obj ={}
    obj['firstName'] = arr[0]
    obj['familyName'] = arr[1]
    obj['title'] = arr[2]
    obj['payPerHour'] = arr[3]
    obj['timeInEvents'] = []
    obj['timeOutEvents'] = []
    return obj 
}

function createEmployeeRecords(arr1){
    console.log(arr1);
    const arrayObject = []
    for(let i=0; i < arr1.length; i++){
        arrayObject.push(createEmployeeRecord(arr1[i]))
    }
    return arrayObject

}

function createTimeInEvent(obj,dateValue){
    const newObj = {}
    const value = dateValue.split(" ")
    newObj['type'] = 'TimeIn'
    newObj['hour'] = parseInt(value[1])
    newObj['date'] = value[0]
    obj['timeInEvents'].push(newObj)
    return obj 
}

function createTimeOutEvent(obj, dateValue){
    const newObj = {}
    const value = dateValue.split(" ")
    newObj['type'] = 'TimeOut'
    newObj['hour'] = parseInt(value[1])
    newObj['date'] = value[0]
    obj['timeOutEvents'].push(newObj)
    return obj 
}

function hoursWorkedOnDate(employee,date){
    const len = employee['timeInEvents'].length
    const c = employee['timeInEvents'][0]['date']
    let timeInHour;
    let timeOutHour;
    let timeElapse;


    for(let i=0;i<len;i++){
        if (date === employee['timeInEvents'][i]['date']) {
            timeInHour = employee['timeInEvents'][i]['hour']
            
        }
    }
    for(let i=0;i<len;i++){
       if (date === employee['timeOutEvents'][i]['date']) {
            timeOutHour = employee['timeOutEvents'][i]['hour']
            
        }
    }

    timeElapse = timeOutHour - timeInHour
    return timeElapse/100
}

function wagesEarnedOnDate(obj, date){
    const hours = hoursWorkedOnDate(obj,date)
    const payRate = obj['payPerHour']
    const wages = hours * payRate
    return wages
   
}

function allWagesFor(employee){
 const len = employee['timeInEvents'].length
 const timeInHours = employee['timeInEvents']
 const dates = []
 let total =0
 for(let i=0;i<len;i++){
     dates.push(timeInHours[i].date)
 }

 for(let i=0;i<dates.length;i++){
     total+= wagesEarnedOnDate(employee, dates[i])
}
 return total
}

// 0044-03-14 0900 

function findEmployeeByFirstName(srcArray,fname){
    let obj;
    

    for(let i=0;i<srcArray.length;i++){
        if(srcArray[i]['firstName'] === fname){
            obj = srcArray[i]
            break 
        }
    }
    return obj
}

function calculatePayroll(employees){
    let total =0
    for(let i=0;i<employees.length;i++){
     total+=allWagesFor(employees[i])
 }
 return total
}

// obj {
//    timeInEvents: [
//        newobj {
//            type: 'timeine'
//            date: ''
//            hour: ''
//        }
//    ] 
// }

// obj['timeinEvents']