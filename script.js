//current hour of the day
var time = moment().format("H");

//so we can display the date on the website
var currentDate = moment().format("MMMM Do, YYYY");
$("#currentDay").html(currentDate);

//lets us save the text into the local storage
$(document).ready(function () {
    $(".saveBtn").on("click", function() {
        var currentTask = $(this).siblings(".task").val();
        var currentTime = $(this).parent().attr("id");
        localStorage.setItem(currentTime, currentTask);
    })
    
    //applies a class to the timeblocks which allows for the coloration
    function checkTime() {
        $(".time-block").each(function() {
            var hour = parseInt($(this).attr("id")); //makes a variable for timeblocks
    
            if(hour < time) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (hour > time) {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
            else {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
        })
    };

    //so we can keep the text we save in the local storage in the timeblocks
    $("#9 .task").val(localStorage.getItem("9"));
    $("#10 .task").val(localStorage.getItem("10"));
    $("#11 .task").val(localStorage.getItem("11"));
    $("#12 .task").val(localStorage.getItem("12"));
    $("#13 .task").val(localStorage.getItem("13"));
    $("#14 .task").val(localStorage.getItem("14"));
    $("#15 .task").val(localStorage.getItem("15"));
    $("#16 .task").val(localStorage.getItem("16"));
    $("#17 .task").val(localStorage.getItem("17"));

    checkTime();
})

//confirm that hour time variable logs the hour of the day in military time 
console.log(time)