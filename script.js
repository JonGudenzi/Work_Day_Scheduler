$(function(){
debugger;
var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do YYYY, h:mm A"));

var currentHour = parseInt(moment().format("H"));

// debugger;
for (i = 0; i < 8; i++){
   var plannerRow = $("<div>").addClass("row");
   var time = $("<div>").text((i+9)+":00").addClass("col-1").attr("id", "times");

   var text = $("<textarea>").each(function(){
      $(this).attr("id", "id_" + i);
   }).addClass("col-10");

   var save = $("<button>").text("save").addClass("col-1 btn btn-success");
   plannerRow.append(time, text, save);
   $(".container").append(plannerRow);
}

times = time[0].innerText;
console.log(times);

text.each(function(){
if (currentHour < times){
   $(this).addClass("past");
}

else if (currentHour > times){
   $(this).addClass("future");
}

else (currentHour == times)
   $(this).addClass("present");
})

// console.log("time: ", time[0].innerText);

$("button").on("click", saveNote);
function saveNote(){
   var textInput = $(this).siblings("textarea").val();
   var textHistory = JSON.parse(localStorage.getItem("text")) || [];
   textHistory.push(textInput);
localStorage.setItem("text", JSON.stringify(textHistory));
}

for (let i = 0; i < localStorage.length; i++){
   var retrieveData = localStorage.getItem("text");
   var schedules = JSON.parse(retrieveData);
   //alert(schedules.length);

   for (let i=0; i < schedules.length; i++);
   textArea.val = schedules.join("");
}



})
 