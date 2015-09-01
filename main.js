$(document).ready(init);
function init(){
  var isPegSelected=false;
  var $selectedPeg;
  var $selectTarget;
  $('.col').click(function(event){
    event.stopPropagation();
    var $tower = $(this);
    if(!isPegSelected){
      $selectedPeg = $tower.children().children().first();
      isPegSelected = true;
      ($tower.children()).children().first().remove();
    } 
    else if($tower.children().children().length){
      if(($selectedPeg.attr('id') < $tower.children().children().attr('id'))){
        $tower.children().prepend($selectedPeg);
        console.log("child is added!!!")
        isPegSelected=false;
        if($('.col3').children().children().length===3){
            alert('Congratulations!!!!!!!!!!You Won the Game');
        }
      } else {
       console.log("you cannot move the peg here!!");
     }
   } 
   else {
    $tower.children().prepend($selectedPeg);
    isPegSelected=false;
    
  }

});

}