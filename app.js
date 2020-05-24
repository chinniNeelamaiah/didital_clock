var date=new Date();
var day = date.getDay();
console.log(day);
var hours = date.getHours();
console.log(hours);
var min = date.getMinutes();
console.log(min);

var daysInWeek=["sunday","monday","tueday","wednsday","thursday","friday","saturday"]

var today = daysInWeek[day];

var meridian="am";

var wish=(hours<12)? "gm":((hours>=12 && hours<16)? "ga":"ge");
console.log(wish)

if(hours>12){
    hours=hours%12;
    meridian="pm"

}

document.getElementById("time").innerText='${hours}:${min}  ${meridian}';
document.getElementById("day").innerText='today is ${today}' ;



