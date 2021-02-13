





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
        console.log(".."+number+".."+timesMorning[i]);

        var scheduleSlot = $('<div>');
        scheduleSlot.addClass("time-block");
        scheduleSlot.addClass("row");

        var timeSlot = $('<p>'+moment(timesMorning[i], "hh").format('LT')+'</p>');
        timeSlot.addClass("hour");

        var scheduleText = $("<p contenteditable='true'>");
        var text = " PLACEHOLDER ";
        //Can be edited somehow
        if(timesMorning[i]==number){
            console.log("present");
            past = false;
            scheduleText.addClass('present').text(text);
        }
        else if(past){
            console.log("past");
            scheduleText.addClass('past').text(text);
            //it's past
        }
        else{
            console.log("future");
            scheduleText.addClass('future').text(text);
            //future
        }
        var saveButton = $('<div>');
        saveButton.addClass('saveBtn').text("SAVE");
        // saves text to local storage
        saveButton.on("click",function(){
            console.log("Button clicked "+scheduleText.text());
        });
        //saveButton.addEventListener("click", function(){
            //save to local storage
        //})

        // Add them all
        scheduleSlot.append(timeSlot);
        scheduleSlot.append(scheduleText);
        scheduleSlot.append(saveButton);
        schedule.append(scheduleSlot);


    }

}

loadSchedule();



//enter text into a time block, saved in local storage
    //clickable button to save it
