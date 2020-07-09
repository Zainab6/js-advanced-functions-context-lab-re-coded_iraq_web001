/* Your Code Here */

function createEmployeeRecord(employee){
return { firstName :employee[0],
          familyName:employee [1],
          title :employee[2],
          payPerHour :employee[3],
          timeInEvents:[],
          timeOutEvents:[]
}
}

function createEmployeeRecords(twoRows){
  return  twoRows.map(row => createEmployeeRecord(row))
  }
  
  
function createTimeInEvent(Date){
 let [date , hour] = Date.split(' ')
  
  this.timeInEvents.push({
    type:"TimeIn",
    date:date,
    hour:parseInt(hour,10)
    
  })
  return this
}

function createTimeOutEvent(Date){
 let [date , hour]= Date.split(' ')
  
  this.timeOutEvents.push({
    type:"TimeOut",
    date:date,
    hour:parseInt(hour,10)
    
  })
  return this
}

function hoursWorkedOnDate(reqDate){
  let timeIn = this.timeInEvents.find(event=>event.date===reqDate)
 let timeOut = this.timeOutEvents.find(event=>event.date===reqDate)
 
 return (timeOut.hour - timeIn.hour)/100
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}