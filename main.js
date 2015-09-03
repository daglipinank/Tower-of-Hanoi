$(document).ready(init);
function init(){
  var isPegSelected=false;
  var $selectedPeg;
  $('.col').click(function(event){
    event.stopPropagation();
    var $base = $(this).children();
    if(!isPegSelected){
      $selectedPeg = $base.children().first();
      isPegSelected = true;
      ($base).children().first().remove();
    } 
    else if($base.children().length){
      if(($selectedPeg.attr('id') < $base.children().attr('id'))){
        $base.prepend($selectedPeg);
        console.log("child is added!!!")
        isPegSelected=false;
        win();
      } else {
       console.log("you cannot move the peg here!!");
     }
   } 
   else {
    $base.prepend($selectedPeg);
    isPegSelected=false;
  }
});
}
function win(){
  if($('.col3').children().children().length===4){
            alert('Congratulations!!!!!!!!!!You Won the Game');
        }
}