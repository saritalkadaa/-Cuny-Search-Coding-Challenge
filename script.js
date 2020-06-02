* This code outputs the current date and time, and determines whether a school is open based on that time. 
The value of the 'status' variable changes according to the school that was inputted and the time that it was inputted.
*/

var d=new Date();
let h=d.getHours();
let m=d.getMinutes();
if (m<=10){
    m='0' + m;
}
let dd="AM";
if(h>=12){
    h=h-12;
    dd="PM";
}
document.getElementById('time').innerHTML=d.toDateString()+ ', ' + h + ':' + m + ' ' + dd; //this outputs the current date and time
let time=d.getHours();
let day=d.getDay();
let status=document.getElementById('status');
var school=document.getElementById('cuny');

function openTime(school){ //determines the time that each school opens
    switch(school){
        case "Brooklyn":
            return 6;
        case "Lehman":
            return 6;
        case "John Jay":
            return 7;
        case "Hunter":
            return 6;
        case "Baruch":
            return 6;
        case "Queens":
            return 8;
        case "Medgar Evers":
            return 7;
        case "City College":
            return 9;
        case "Staten Island":
            return 9;
        case "City Tech":
            return 8;
    }

}
 

function closingTime(school){ //determines the time that each school opens on weekdays
    switch(school){
        case "Brooklyn":
            return 22;
        case "Lehman":
            return 22;
        case "John Jay":
            return 22;
        case "Hunter":
            return 22;
        case "Baruch":
            return 22;
        case "Queens":
            return 21;
        case "Medgar Evers":
            return 22;
        case "City College":
            return 17;
        case "Staten Island":
            return 16;
        case "City Tech":
            return 22;
    }

}
function determineDay(school){ //determines the time that each school closes on weekends
    switch(school){
        case "Brooklyn":
            return 17;
        case "Lehman":
            return 17;
        case "John Jay":
            return 17;
        case "Hunter":
            return 18;
        case "Baruch":
            return 18;
        case "Queens":
            return 18;
        case "Medgar Evers":
            return 18;
        case "City College":
            return 16;
        case "Staten Island":
            return 16;
        case "City Tech":
            return 18;
    }
 }

 function open(day,time, weekdaysClose,weekdaysOpen, weekends){ //changes the text inside the 'status' variable to display whether the school is open or not
        if (day===6 || day===5){
            if (time>=weekends || time<weekdaysOpen)
                status.innerHTML='The school is now closed';
            else 
                status.innerHTML='The school is now open ';
        }
        else{
            if (time>=weekdaysClose || time<weekdaysOpen)
                status.innerHTML='The school is now closed';
            else 
                status.innerHTML='The school is now open';
        }
         

 }


 
status.onclick=function() { //calls the open() function whenever the 'status' variable is clicked 
    var school=document.getElementById('cuny').value;
    if(!school){
        status.innerHTML='Please pick a school';
        return;
    }
    let weekdaysOpen=openTime(school);
    let weekdaysClose=closingTime(school);
    let weekends=determineDay(school);
    open(day,time, weekdaysClose, weekdaysOpen, weekends)
};
