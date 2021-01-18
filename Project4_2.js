function showInput() {
  document.getElementById("details").innerHTML = 
             "Name: " +document.getElementById("fname").value +" "+document.getElementById("lname").value +"<br>"
             +"Email Id: " + document.getElementById("e-mail").value + "<br>" 
             + "Contact Number: " + document.getElementById("cnt.num").value;
}


  $(document).ready(function(){
    $(".btn").click(function(){
      $("#div1").fadeIn("5000");
  });
});


function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 190) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}