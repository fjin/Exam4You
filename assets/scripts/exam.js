var numberOfQuestions = questions_set.length;

var all_questions;
$( document ).ready(function() {
    init();
});


start = function(){
    console.log("start");
    loadQuestion(0);

};

clickBtn = function(btn_name){
    var questionNo = parseInt($(".question_number").html());

    loadQuestion(questionNo+1);
}

loadQuestion = function(question_no){
    console.log("questions:   " + questions_set);
    var question_title = questions_set[question_no].question;
    var answers = questions_set[question_no].answers;
    var id = questions_set[question_no].id;
    var results = questions_set[question_no].results;
    var isMultple = false;
    if(results.length > 1){
        isMultple = true;
    }

    $(".question_number").html(id);

    $("#question").load("pages/question.html", function(){
        $(".question_title").html(question_title);

        var answerHtml = "<form>";
        $.each(answers, function(i, answer){
            if(isMultple)
            {
                answerHtml += "<input type='checkbox' name='answer' value='" + i + "'>" + answer + "<br>";
            }
            else {
                answerHtml += "<input type='radio' name='answer' value='" + i + "'>" + answer + "<br>";
            }
        });

        answerHtml += "</form>";

        $(".answers").html(answerHtml);
    });

    var questionNo = parseInt($(".question_number").html());
    if(questionNo == 0){
        $(".prev").hide();
        $(".next").show();
    }
    else if(questionNo == numberOfQuestions-1){
        $(".prev").show();
        $(".next").hide();
    }
    else{
        $(".prev").show();
        $(".next").show();
    }




};


loadAllQuestions = function (file_name) {
    console.log(file_name);
    $.getJSON(file_name, function(data) {
        console.log(data);
        all_questions = data;
        setupQuestions(all_questions);
    });
};

setupQuestions = function (questions) {

    $.each(questions, function(i, item) {
        console.log(i + "  " + item.question);
    });


}


init = function () {
    console.log( "ready!" );
    $("#question").load("pages/start.html");

}



