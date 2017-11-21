$(document).ready(function() {
  var animal = prompt("which is your favourite animal?");

  if (animal === "all") {
    $('#animal').show();
    }
    else if (animal==="lion"||animal==="leopard"){
      alert("I love both cats");
      $('#animal').show();
        }
    else {
      $('#none').show();
    }
});
