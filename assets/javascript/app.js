function buildQuiz(){
        // store the HTML output
        var output = [];
      
        myQuestions.forEach((currentQuestion, questionNumber) => {
      
            // store the list of answer choices
           var answers = [];
      
            for(letter in currentQuestion.answers){
      
              // HTML radio button
              answers.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
              );
            }
            // add this question and its answers to the output
            output.push(
              `<div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join('')} </div>`
            );
          })
        quizContainer.innerHTML = output.join('');
      }

      var numCorrect = 0;
    //   var correctAnswer = "c";
      
function showResults(){
  //user's answers?????
        
    var selector = "c:checked";
    var userAnswer = answerContainers
    
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // if answer is correct
        if(userAnswer === myQuestions.correctAnswer){
      // add to the number of correct answers
        numCorrect++;
    }
    // if answer is wrong or blank
    else{
      numCorrect--;
    }
// show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;

  }
  
    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");
    var myQuestions = [

    {
        question: "Who is the face of the mission impossible franchise?",
        answers: {
            a:"Laurence Fishburne", 
            b:"Jerry Seinfeld",
            c:"Tom Cruise", 
            d:"Tom Hanks"
        },
        correctAnswer: 'c'
    },

    {
        question: "What is the Halloween movie that features Michael Myers?",
        answers: {
            a:"Scary Movie",
            b:"Friday the 13th",
            c:"Halloween", 
            d:"Strangers"
         },
        correctAnswer: 'c'
    },

    {  question: "Which actress has been in both Scarface and Cat Woman?",
        answers: {
            a:"Gywneth Paltrow",
            b:"Sally Field",
            c:"Michelle Pfieffer", 
            d:"Whoopi Goldberg"
    },
        correctAnswer: 'c'
   },

   {
        question: "Which of the below is a streaming service?",
        answers: {
            a:"ABC",
            b:"AMC",
            c:"HULU", 
            d:"NBA"
    },
        correctAnswer: 'c'
   },

    {   question: "Which show is called the show about nothing?",
        answers: {
            a:"Modern Family",
            b:"Blackish",
            c:"Seinfeld", 
            d:"The Walking Dead"
    },
        correctAnswer: 'c'
}
    ];


buildQuiz();

  // on submit, show results
  $("#submit").on("click", showResults);


  var sec = 15
  var timer = setInterval(function() { 
     $('#count').text(sec--);
     if (sec == -1) {
        clearInterval(timer);   
     } 
  }, 1500);

        
  
  
  
  
  
  // could not get submit button to coincide w/5 or the correct answer



        




