$(document).ready(function(){

    var userScore = 0;
    var randomNumber = Math.ceil(Math.random()*100);
    var Crystal1Value;
    var Crystal2Value;
    var Crystal3Value;
    var Crystal4Value; 

    var wins = 0; 
    var losses = 0; 

    // print socres onto the page
    $("#wins").text(wins);
    console.log(wins);
    $("#losses").text(losses);
    console.log(losses);

    //what happens when user presses ach button
    $("#Crystal1Button").on('click', function(){userScore += Crystal1Value; checkUserScore();})
    $("#Crystal2Button").on('click', function(){userScore += Crystal2Value; checkUserScore();})
    $("#Crystal3Button").on('click', function(){userScore += Crystal3Value; checkUserScore();})
    $("#Crystal4Button").on('click', function(){userScore += Crystal4Value; checkUserScore();})

    function checkUserScore(){
        if(userScore > randomNumber){
            losses++;
            randomNumber = math.ceil(math.random*100);
            userScore = 0;
        }
        else if (userScore == randomNumber){
            wins++;
            randomNumber = math.ceil(math.random*100);
            userScore = 0;
        }
    }

})

