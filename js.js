function clock() {
    let hour = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    // date( )method use to get the todays time and itssub- functions getHHours(),getMinutes(),getYear() 
    let h = new Date().getHours();
    let m = new Date().getMinutes();

    let s = new Date().getSeconds();
    var am = 'AM';
    //cinvert 24 hours to 12 hours format
    if (h > 12) {
        h = h - 12;
        var am = 'PM';
    }
    // add zero tto begning of the number when number is less than 10
    if (s < 10) {
        s = '0' + s;
    }
    // using ternary operator

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
}
var interval = setInterval(clock, 1000);