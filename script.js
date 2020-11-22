$(function () {
//   currrent time 
   var today = moment();
   $("#currentDay").text(today.format("dddd MMMM Do YYYY, h:mm A"));

   var currentHour = parseInt(moment().format("H"));

   // loop for time slots and jquery to create html elements
   for (i = 0; i < 9; i++) {
      var plannerRow = $("<div>").addClass("row");
      
      if (i <= 3) {
         var time = $("<div>").each(function () {
            $(this).attr("id", "divArea" + i)
         }).text((i + 9) + ":00").addClass("col-1");
      }
      else {
         var time = $("<div>").each(function () {
            $(this).attr("id", "divArea" + i)
         }).text((i - 3) + ":00").addClass("col-1");
      }

      var text = $("<textarea>").each(function () {
         $(this).attr("id", "textArea_" + i);
      }).addClass("col-10");

      var save = $("<button>").text("save").addClass("col-1 btn btn-success");
      plannerRow.append(time, text, save);
      $(".container").append(plannerRow);

      // if statments to determine color blocks for each time compared to current time
      text.each(function () {
         
         if (i + 9 < currentHour) {
            $(this).addClass("past");
         }
         else if (i + 9 > currentHour) {
            $(this).addClass("future");
         }
         else if (i + 9 === currentHour)
            $(this).addClass("present");
      })
   }
// process to save the user imput to local storage
   $("button").on("click", saveNote);
   function saveNote() {
      var textInput = $(this).siblings("textarea").val();
      var textHistory = JSON.parse(localStorage.getItem("text")) || [];
      textHistory.push(textInput);
      localStorage.setItem("text", JSON.stringify(textHistory));
   }

   for (let i = 0; i < localStorage.length; i++) {
      var retrieveData = localStorage.getItem("text");
      var schedules = JSON.parse(retrieveData);

      for (let j = 0; j < schedules.length; j++) {
        
         var element = [];
         element.push(schedules);
         var area = [];
         area = "#textArea_" + j;
         $(area).html(JSON.parse(retrieveData));
      }
   }
})
