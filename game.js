var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red", "blue", "green", "yellow" ];

$(".btn").click(function(){
    //select id of button that user pressed 
    var userChosenColour=$(this).attr("id");

    //pushes to the useClickedPattern so that we can check later if its correct or not by comparing with gamePattern
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
});


function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}


 