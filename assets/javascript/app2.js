var ans=$(".ans");
var intervalId;
var sec=0;
var right =0;
var wrong =0;
var correct=0;
var userChoice;


// array of questions and answers. made all the correct answers the 3rd index in the array
    var qAndA = [
        ["Who is the face of the mission impossible franchise?", "Laurence Fishburne", "Jerry Seinfeld", 'Tom Cruise', 'Tom Hanks'],
        ["Which actress has been in both Scarface and Cat Woman?", "Gywneth Paltrow", "Sally Field", "Michelle Pfieffer", "Whoopi       Goldberg"],
        ["Which of the below is a streaming service?", "ABC", "AMC", "HULU", "NBA"],
        ["Which show is called the show about nothing?", "Modern Family", "Blackish", "Seinfeld", "The Walking Dead"]

    ];

displayQuestions();
// displayed questions and specific arrays individually as I could not figure out how to loop the array within the array
function displayQuestions() {

	$('#questions').html(qAndA[0][0]);
	//correct answer-this points out the specific array index the correct choice is held in.
    correctAns = qAndA[0][3]; 

    $('#ans1').html(qAndA[0][1]);	
    $('#ans2').html(qAndA[0][2]);
    $('#ans3').html(qAndA[0][3]);
    $('#ans4').html(qAndA[0][4]);

    $('#questions1').html(qAndA[1][0]);
    
    correctAns = qAndA[1][3];

    $('#ans5').html(qAndA[1][1]);	
    $('#ans6').html(qAndA[1][2]);
    $('#ans7').html(qAndA[1][3]);
    $('#ans8').html(qAndA[1][4]);


    $('#questions2').html(qAndA[2][0]);

    correctAns = qAndA[2][3];

    $('#ans9').html(qAndA[2][1]);	
    $('#ans10').html(qAndA[2][2]);
    $('#ans11').html(qAndA[2][3]);
    $('#ans12').html(qAndA[2][4]);

    $('#questions3').html(qAndA[3][0]);

    correctAns = qAndA[3][3];

    $('#ans13').html(qAndA[3][1]);	
    $('#ans14').html(qAndA[3][2]);
    $('#ans15').html(qAndA[3][3]);
    $('#ans16').html(qAndA[3][4]);
	
	
	timer();
};






function timer() {
    var sec = 15
        // clearInterval(intervalId);   
        intervalId= setInterval(decrement, 1000);
     
  }

function decrement(){
    sec++;
    $("#count").html(sec);
    if(sec === 15){
        alert("GAME OVER: you are out of time")
        clearInterval(intervalId);
        // nextQuestion();
       
    }

}
$(".ans0").click(function(){
       if(right++){
        $("#won").text(right);
       }else{
        (userChoice !== right);
            wrong++;
      $("#wrong").text(wrong);

       }
      
  });

