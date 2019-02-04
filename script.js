function printdate() {
var date = new Date() ;
var hour = date.getHours() + '';
var min = date.getMinutes() + '';
var sec = date.getSeconds()+ '';
var day = date.getDay() ;
var dayname = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'] ;
if(hour.length <2)
    hour='0'+hour ;
if(min.length <2)
    min='0'+min ;
if(sec.length <2)
    sec='0'+sec ;
var clock = dayname[day] +' '+ hour + ' : ' + min + ' : ' + sec ;
document.getElementById('viewdate').innerHTML = clock ;
    console.log(clock);
}
//printdate() ;
setInterval(printdate, 1000) ;