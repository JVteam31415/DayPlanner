for(var i=0;i<9;i++){
    if(null==localStorage.getItem('dayPlannerValues'+i)){
        
        localStorage.setItem('dayPlannerValues'+i,"                     ");
    }
}





//insert clock into the today's date
    //day of week, month, date
    var day = $('#currentDay');
    day.text(moment().format("dddd, MMMM Do") );


//When the page loads, generate all the blocks
    //filled from local storage
    //add css class based on past, present, future
    //add to container
var loadSchedule = function(){
    var timesMorning = ["09","10","11","12","13","14","15","16","17"];
    var schedule = $('#timeblock');
    var number = moment().format("HH");
    var past = (number>="09"); 

    for (var i=0;i<timesMorning.length;i++){

        var scheduleSlot = $('<div>');
        scheduleSlot.addClass("time-block");
        scheduleSlot.addClass("row");

        var timeSlot = $('<p>'+moment(timesMorning[i], "hh").format('LT')+'</p>');
        timeSlot.addClass("hour");

        var scheduleText = $("<div contenteditable='true'>");
        scheduleText.addClass("textClass");
        const dpv = localStorage.getItem("dayPlannerValues"+i);
        var text = dpv;
        //Can be edited somehow
        if(timesMorning[i]==number){
            past = false;
            scheduleText.addClass('present').text(text);
        }
        else if(past){
            scheduleText.addClass('past').text(text);
            //it's past
        }
        else{
            scheduleText.addClass('future').text(text);
            //future
        }
        var saveButton = $('<a>');
        saveButton.addClass('saveBtn').text("SAVE");
       
        //saveButton.addEventListener("click", function(){
            //save to local storage
        //})
        // Add them all
        var index = $('<p hidden>');
        index.text(""+i);
        scheduleSlot.append(timeSlot);
        scheduleSlot.append(scheduleText);
        scheduleSlot.append(saveButton);
        scheduleSlot.append(index);
         // saves text to local storage
        scheduleSlot.on("click",'a',function(){
            var inputText = this.parentNode.childNodes[1].childNodes[0].nodeValue;
            var ind = this.parentNode.childNodes[3].childNodes[0].nodeValue;
            localStorage.removeItem("dayPlannerValues"+ind);
            localStorage.setItem("dayPlannerValues"+ind,inputText );
        });

        schedule.append(scheduleSlot);


    }

}

loadSchedule();



//enter text into a time block, saved in local storage
    //clickable button to save it
