function submitAnswers() {
    var totalQue = 5;
    var score = 0;
   
    //get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    //validation for submit button
    

    for (i=1;i<=totalQue;i++) {
        if(eval('q' + i) == null || eval('q' + i) == '') {
            alert('You missed question ' + i);
            return false;
        }
    }

    //set correct answers
    var answers = ["b","b","a","d","b"];

    //check answers
 /*   if(q1 == answers[0]) {
        score++;
    }
    if(q2 == answers[1]) {
        score++;
    }
    if(q3 == answers[2]) {
        score++;
    }
    if(q4 == answers[3]) {
        score++;
    }
    if(q5 == answers[4]) {
        score++;
    }
    */
    
    for (i=1;i<=totalQue;i++) {
        if(eval('q' + i) == answers[i -1]) {
            score++;
          }
    }


// calculate "possible score" integer
    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }

    //display result
   


    var result = document.getElementById('result');
    result.innerHTML = '<h3>You Scored <span>' + score + '</span> out of <span>' + totalQue + '</span></h3>';

    alert('You scored ' + score + ' out of ' + totalQue);
    

    return false;
}