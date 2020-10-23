 let createEmployeeRecord = function(dbRow){
    return { 
		firstName: dbRow[0],
        familyName: dbRow[1],
        title: dbRow[2],
        payPerHour: dbRow[3],
        timeInEvents: [],
        timeOutEvents: []
    }
        
      
}

let createEmployeeRecords = function(dbRow){
    let  newArr = []
    for ( let i = 0; i < dbRow.length; i++ ){
       
        newArr.push(createEmployeeRecord(dbRow[i]))
    }
    return newArr
}

let createTimeInEvent = function(createEmployeeRecord, timeStamp){
    return {
        type: TimeIn
        hour: 
        date:
    }

}