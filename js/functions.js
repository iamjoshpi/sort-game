//START//////////////////////////////////////////////////////////////////
var points=0;
$(document).ready(function(){
$("#canzone").hide();
    $("#start").on("click", function(){
        $("#canzone").show();
        $(this).hide();
        $(".board").show();
        $("#resultpopup").show();
document.getElementById("points").innerHTML = points;
startTimer(45);
imgpicker();
 });//end on click
 //timer at zero
});//end document ready


//TIMER//////////////////////////////////////////////////////////////////
function startTimer(settime) {
    var i = settime;
    var countdownTimer = setInterval(function() {
        document.getElementById("clock").innerHTML = i;
        i = i - 1;
        if (i <= -1) {
            clearInterval(countdownTimer);
        }//end if
         if(i<1){$(".board").hide();$("#imgbox").hide();$("#canzone").hide();$(".item").hide();$(".itemname").hide();$("#resultpopup").hide();
         if(points>=35){var result="<h2 style='text-shadow: 2px 2px #e67300;'>Master Recycler</h2>";}
if(points<=34){var result="<h2 style='text-shadow: 2px 2px #e67300;'>Great Recycler</h2>";}
if(points<=29){var result="<h2 style='text-shadow: 2px 2px #e67300;'>Good Recycler</h2>";}
if(points<=19){var result="<h2 style='text-shadow: 2px 2px #e67300;'>Almost- you can do better</h2>";}
if(points<=10){var result="<h2 style='text-shadow: 2px 2px #e67300;'>Beginner - Keep trying</h2>";}
         document.getElementById("imagezone").innerHTML = '<h1 style="color:red;font-size:40pt;margin-top:-50px;text-shadow: 2px 2px #e67300;" id="gameoverhdr">Game Over</h1>'+result+"<br>"+'<br><div style="border-radius:5px;width:70%;margin-left:15%;margin-right:15%;height:55px;line-height:50px;background-color:#666;color:#fff;padding-left:5px;padding-right:5px;box-shadow: 0px 3px #e67300;"><strong>Your Score Was</strong> <span style="margin-top:-20px;">'+points+'</span></div><br><a href="index.php"><div id="retry"><span class="glyphicon glyphicon-refresh"></span>Retry</div></a><br><img src="images/recycle_pile.png" class="mobile-hide" style="width:200px;"><p class="endcopy">Thank you for playing, Charleston County has 9 convenience locations where you can dispose of your electronic waste and household hazardous material. Please contact Charleston County Recycling Department for more information. </p>';
         }
    }, 1000);//end countdown function 
}//end start time function

//IMAGE PICKER/////////////////////////////////////////////////////////////
var picked=["blank"];
function  imgpicker(){
 //var rand = images[Math.floor(Math.random() * images.length)];
//document.getElementById("imagebox").innerHTML = rand;
//testing
var loop=false;
while(loop==false){
var rand = images[Math.floor(Math.random() * images.length)];
var checker=picked.indexOf(rand);
if(checker>0){

}
else{
document.getElementById("imagebox").innerHTML = rand;
$( "#innerimgbox" ).draggable({ containment: ".gameboard",revert: "valid" });
var reset=picked.length;
var imglength=images.length;
if(reset==imglength){picked=[];}
else{
picked.push(rand);
}
loop=true;
}}
}
//PICK ITEM//////////////////////////////////////////////////////////////////PICK ITEM
$(document).ready(function(){
//trash drop function
    $( "#trash" ).droppable({
      drop: function( ) {
	dropreaction("trash");
      }
    });
//recycle drop function
    $( "#recycle" ).droppable({
      drop: function( ) {
     dropreaction("recycle");
      }
    });

});//end document read
function dropreaction (dispose){
$(".item").hide();
$(".itemname").hide();
var imagebox=$( "#picked" ).hasClass(dispose);
$("#resultpopup").show();
if(imagebox==true){points=points+1;document.getElementById("points").innerHTML = points;
document.getElementById("resultpopup").innerHTML = '<strong style="color:green;font-size:25pt;">Correct!!</strong>';
$( "#resultpopup" ).fadeOut( 400 );
}
else{document.getElementById("resultpopup").innerHTML = '<strong style="color:red;font-size:25pt;">Wrong!!</strong>';$( "#resultpopup" ).fadeOut( 400 );}
imgpicker();
}
//PICK DISPOSAL////////////////////////////////////////////////////////////
function  filterset(filter){
if ( $( "#picked" ).hasClass( filter ) ) {
	    points=points+1;
	    document.getElementById("points").innerHTML = points;
	    $("#resultpopup").show();
	    document.getElementById("resultpopup").innerHTML = '<strong style="color:green;font-size:25pt;">Correct!!</strong>';
	  	 $( "#resultpopup" ).fadeOut( 400 );
    }
    else{$("#resultpopup").show();document.getElementById("resultpopup").innerHTML = '<strong style="color:red;font-size:25pt;">Wrong!!</strong>';$( "#resultpopup" ).fadeOut( 400 );}

}
