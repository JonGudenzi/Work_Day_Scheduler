$(function(){


var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do YYYY, h:mm a"));


var currentHour = parseInt(moment().format("H"));

for (i = 0; i < 8; i++){
   var plannerRow = $("<div>").addClass("row")
   var time = $("<div>").text((i+9)+":00").addClass("col-1")
   var text = $("<textarea>").addClass("col-10", "input")
   var save = $("<button>").text("save").addClass("col-1 btn btn-success")
   plannerRow.append(time, text, save)
   $(".container").append(plannerRow)
}

$("button").on("click", saveNote)
function saveNote(){
   // console.log($(this).siblings("textarea").val())
   var textInput = $(this).siblings("textarea").val()
localStorage.setItem("text", textInput);
}


   if (currentHour > time){
      $("text").addClass("past");
   }




// <=> the hour loop   if / else if  / else  (past,presnt, or future)
})

