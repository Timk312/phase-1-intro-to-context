
function createEmployeeRecord(fourEleArray){
let employeeRecord = 
    {
        firstName: fourEleArray[0],
        familyName: fourEleArray[1],
        title: fourEleArray[2],
        payPerHour: fourEleArray[3],
        timeInEvents:[],
        timeOutEvents:[]
    }

return employeeRecord
}

function createEmployeeRecords(arrayOfArrays){
let newArray=[]
arrayOfArrays.forEach((n)=>{
newArray.push(createEmployeeRecord(n))
})
return newArray
}

function createTimeInEvent(record,date){
let dateArray=date.split(" ");
record.timeInEvents.push({type:"TimeIn",date:dateArray[0],hour:parseInt(dateArray[1])})
return record
}

function createTimeOutEvent(record,date){
    let dateArray=date.split(" ");
    record.timeOutEvents.push({type:"TimeOut",date:dateArray[0],hour:parseInt(dateArray[1])})
    return record
    }

function hoursWorkedOnDate(record,date){
for(let i=0;i<record.timeInEvents.length;i++){
    if(date==record.timeInEvents[i].date){
        let diff=record.timeOutEvents[i].hour-record.timeInEvents[i].hour
        diff/=100
        return diff
}
}
}
function wagesEarnedOnDate(record,date){
let hours=hoursWorkedOnDate(record,date)
let pay=hours*(record.payPerHour)
return pay
}

function allWagesFor(record){
let c=0
let a=0
//how many days
for(let i=0;i<record.timeInEvents.length;i++){
c+=1
console.log(c)
}
//wages for each day
for(let j=0;j<c;j++){
a+=wagesEarnedOnDate(record,record.timeInEvents[j].date)
console.log(a)
}
return a

}

function calculatePayroll(array){
    let x=0
for(let i=0;i<array.length;i++){
x+=allWagesFor(array[i])
}
return x;
}

let tim=createEmployeeRecord(["Tim","Kingston","Driver",21])
createTimeInEvent(tim,"2014-01-28 1400")
createTimeOutEvent(tim,"2014-01-28 1600")
createTimeInEvent(tim,"2014-02-28 1300")
createTimeOutEvent(tim,"2014-02-28 1600")
createTimeInEvent(tim,"2014-03-28 1400")
createTimeOutEvent(tim,"2014-03-28 1600")
console.log(tim)
//console.log(hoursWorkedOnDate(tim,"2014-02-28"))
//console.log(wagesEarnedOnDate(tim,"2014-02-28"))
//console.log(tim.timeInEvents[1].date)
console.log(tim.timeInEvents[0].date)
console.log(tim.timeInEvents[1].date)
console.log(tim.timeInEvents[2].date)
console.log(wagesEarnedOnDate(tim,tim.timeInEvents[0].date))
console.log(wagesEarnedOnDate(tim,tim.timeInEvents[1].date))
console.log(wagesEarnedOnDate(tim,tim.timeInEvents[2].date))
console.log(allWagesFor(tim))


