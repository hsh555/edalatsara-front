// Set the date we're counting down to
var countDownDate = new Date("08/19/2023 20:50:12").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(days < 10) {
        days = '0' + days;
    }

    if(hours < 10) {
        hours = '0' + hours;
    }
    if(minutes < 10) {
        minutes = '0' + minutes;
    }

    if(seconds < 10) {
        seconds = '0' + seconds;
    }

    // Output the result in an element with id="demo"
    // document.getElementById("demo").innerHTML ='<span id="day">'+ days + '</span>' +  '<span id="hours">'+ hours + '</span>'
    // + '<span id="minutes">'+ minutes + '</span>' + '<span id="seconds">'+ seconds + '</span>';
    var z = document.getElementsByClassName("count-down-timer__inner");
    for (var i = 0; i < z.length; i++) {
        z[i].innerHTML =
            '<span class="day">' +
            days +
            "</span>" +
            '<span class="hours">' +
            hours +
            "</span>" +
            '<span class="minutes">' +
            minutes +
            "</span>" +
            '<span class="seconds">' +
            seconds +
            "</span>";
    }

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        // document.getElementById("demo").innerHTML = "";
        var y = document.getElementsByClassName("count-down-timer__inner");
        for (var i = 0; i < z.length; i++) {
            y[i].innerHTML = "پایان";
        }

        // document.getElementById("after-expire").setAttribute("id","offer-expire-text");
        // var g = document.getElementsByClassName("count-down-timer__after-expire");
        // for (var i = 0; i < z.length; i++) {
        //     g[i].classList.add("offer-expire-text");
        // }

        // document.getElementById("offer-expire-text-inner").innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده!";
        // var d = document.getElementsByClassName("offer-expire-text-inner");
        // for (var i = 0; i < z.length; i++) {
        //     d[i].innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده!";
        // }

        // document.getElementById("offer-blur").style.filter = "blur(2px)";
        // var t = document.getElementsByClassName("offer-blur");
        // for (var i = 0; i < z.length; i++) {
        //     t[i].style.filter = "blur(2px)";
        // }
    }
}, 1000);