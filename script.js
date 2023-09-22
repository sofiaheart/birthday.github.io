//Sets the date and time  the clock is counting down to
var countDownDate = new Date("September 22, 2023 23:00:00").getTime();

//Updates the counter every second
var x = setInterval(function() {

  //Get today's date and time
  var now = new Date().getTime();

  // Finding the length of time between now and count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance/ (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *      60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % ( 1000 * 60)) / 1000);

  //Output the result in an element with an id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h " +     minutes + "m " + seconds + "s ";

  // if the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
      var m = document.getElementsByClassName("image");
      m[0].src = "destination.jpg";
  }
}, 1000);
