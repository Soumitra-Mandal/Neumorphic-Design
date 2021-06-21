$(document).ready(function(){
    $("#bt").click(function(){
      $("#bt").toggleClass("btn_active");
    });

    $("#wifi").click(function(){
        $("#wifi").toggleClass("btn_active");
      });


    $("#silent").click(function(){
        $("#silent").toggleClass("btn_active");
      });


    $("#location").click(function(){
        $("#location").toggleClass("btn_active");
      });

    
      
  });

  function slider(value) {
    document.getElementById("text").innerHTML = value;
  }


  setInterval(showTime, 60000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
  
    let currentTime = hour + ":" 
            + min + " " + am_pm;
  
    document.getElementById("time")
            .innerHTML = currentTime;
}
showTime();