//define functions here
function getIt() {
 $('p').on("click", function() {
    alert("Hey!")
});
}

function pressIt(){
  $('input').on('keydown', function (key) {
  if(key.which == 71){
      alert('g was pressed');
  }
});
}

function frameIt(){
$('img').addClass("tasty");
}

$(document).ready(function(){

// call functions here

});
