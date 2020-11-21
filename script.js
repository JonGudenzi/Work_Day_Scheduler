$(function(){

   var today = moment();
   $("#currentDay").text(today.format("dddd MMMM Do YYYY, h:mm A"));
   
   var currentHour = parseInt(moment().format("H"));
   
   // debugger;

   //added if else statements here in an attempt to correct the military time issue I was getting from using a loop for my time
   for (i = 0; i < 8; i++) {
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

   //BSC told me that I was trying to compare two differnt kinds of data on these if/elses.  
   // trying to correct this by comparing the i itorator to currentHour instead of comparing my time variable.
   // my time variable has a text result that can't be used to compair with a number.
   text.each(function(){
      if (i + 9 < currentHour) {
         $(this).addClass("past");
      }
      else if (i + 9 > currentHour) {
         $(this).addClass("future");
      }
      else if (i + 9 === currentHour)
         $(this).addClass("present");
   })
   
   
   
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
   
   
      for (let i=0; i < schedules.length; i++);
      textArea.val = schedules.join("");
   }
   
}
   
   })
    