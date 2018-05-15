//define functions here
function getIt() {
 $('p').on("click", function() {
    alert("Hey!")
});
}


  $('input').on('keydown', function pressIt(key) {
  if(key.which == 71){
      alert('g was pressed');
  }
});
  

function frameIt(){
$('img').addClass("tasty");
}

$(document).ready(function(){

// call functions here

});
