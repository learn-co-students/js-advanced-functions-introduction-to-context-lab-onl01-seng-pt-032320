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

function createTimeInEvent(obj,date){
    obj['TimeIn'] = []
    date.split(" ")

}

function createTimeOutEvent(obj, date){
    obj['TimeOut'] = []
}

function hoursWorkedOnDate(obj,date){
 
}

function wagesEarnedOnDate(obj, date){

}

function allWagesFor(obj){


}

function findEmployeeByFirstName(srcArray,fname){

}