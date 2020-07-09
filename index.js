/* Your Code Here */

const employee =["Gray", "Worm","Security",1]
function createEmployeeRecord (employee){
return { firstName :employee[0],
          familyName:employee [1],
          title :employee[2],
          payPerHour :employee[3],
          timeInEvents:[],
          timeOutEvents:[]
}
}

let twoRows = [
        ["moe", "sizlak", "barkeep", 2],
        ["bartholomew", "simpson", "scamp", 3]
      ]

function createEmployeeRecords(twoRows){
  return  twoRows.map(row => createEmployeeRecord(row))
  }

function createTimeInEvent(employee ,Date){
  let [date , hour]= Date.split(' ')
  
  employee.timeInEvents.push({
    type:"TimeIn",
    date:date,
    hour:parseInt(hour,10)
    
  })
  return employee
}


function createTimeOutEvent(employee ,Date){
  let [date , hour]= Date.split(' ')
  
  employee.timeOutEvents.push({
    type:"TimeOut",
    date:date,
    hour:parseInt(hour,10)
    
  })
  return employee
}


function hoursWorkedOnDate(employee,reqDate){
  let timeIn = employee.timeInEvents.find(event=>event.date===reqDate)
 let timeOut = employee.timeOutEvents.find(event=>event.date===reqDate)
 
 return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(employee,reqDate){
  return hoursWorkedOnDate(employee,reqDate)*employee.payPerHour
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