var quiz= document.getElementById ('quiz');
var answersContainer =document.getElementById ('answers');
var submitButton=document.getElementById ('submit');
var button =$("#button");
var showQuestiions= $("showQuestions");


var index = 0;
var countdownTimer = {
    time : 30,
    reset: function() {
        this.time = 30;
        $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
    },
    start: function() {
        counter = setInterval(countdownTimer.count, 1000);	
    },
    stop: function() {
        clearInterval(counter);
    },
    count: function() {
            countdownTimer.time--;
            console.log(countdownTimer.time);
            ''
        if (countdownTimer.time >= 0) {
            $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
        }
        else {
            index++;
            answerWrong();
            countdownTimer.reset();
            if (index < questionArray.length) {
                loadQuestion(index);
            } else {
                $(".answerchoice").hide();
                showScore();
            }
        }
    }
};


// var myQuestions =[
// {
//     question: "Who is the face of the mission impossible franchise?",
//     answers: {
//         a:"Laurence Fishburn", 
//         b:"Jerry Seinfeld",
//         c:"Tom Cruise", 
//         d:"Tom Hanks"
//     },

//     correctAnswer: 'c'

// },

// {
//     question: "What is the Halloween movie that features Michael Myers?",
//     answers: {
//         a:"Scary Movie",
//         b:"Friday the 13th",
//         c:"Halloween", 
//         d:"Strangers"
// },

// correctAnswer: 'c'

// }
// ];


// function generateQuiz (questions, quizContainer, answersContainer, submitButton){

//     function showQuestions(questions, quizContainer){

//         showQuestions(questions, quizContainer);
//             // var to store output and answer choices
//             var output =[];
//             var answers;
//             // for each question
//             for(var i=0; i<questions.length; i++){
//                 // first reset the list of answers
//                 answers = [];
//                 // for each available answer to the question 
//                 for (letter in questions[i].answers){
//                     // add a radio button
//                     answers.push(
//                         '<label>'
//                         + '<input type= "radio" name = "question '+i+' " value= " '+letter+'">'
//                         + letter + ':'
//                         + questions [i].answers[letter]
//                         +'</label>'
    
//                     );
//                 }
//                 // add this question and answer to it's answers output
//                 output.push(
//                     '<div class="questions">' + questions [i].question + '</div>'
//                     + '<div class="answers">' + answers.join('') + '</div>'
//                 );
//             }   
//             // finally combine our output list into one string of html and put it on the page
//             quizContainer.innerHTML = output.join('');
//         }
//     }

//     showQuestiions();


//     function showAnswers(questions, quizContainer,answersContainer){
//         // gather answer containers from quiz
//         var answersContainer = quizContainer.querySelectorAll('.answers');
//         // keep track of answers
//         var userAnswer = '';
//         var numCorrect = 0;

//         // for each question
//         for(var i= 0; i< questions.length; i++){
//             // find selected answer
//             userAnswer = (answersContainer[i].querySelectorAll('input[name=question'+i+']:checked')||{}).value;
//             // if answer is right
//             if(userAnswer===questions[i].correctAnswer){
//                 // add to the number correct
//                 numCorrect++;
//                 // color the answers green
//                 answersContainer[i].css("color", "green");
//             }
//             // if answer is wrong or blank
//             else{
//                 // color the answers red
//                 nswersContainer[i].css("color", "red");
//             }
//     }
 
//     // show number of correct answers out of total
//     answersContainer.innerHTML = numCorrect + 'out of' + questions.length;


//     // show the questions
//     sumbitButton.onclick = function(){
//         showAnswers(questions, quizContainer, answersContainer);
//     }

//     generateQuiz(myQuestions, quizContainer, answersContainer, submitButton);
// }




