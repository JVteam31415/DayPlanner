





//insert clock into the today's date
    //day of week, month, date
    var day = $('#currentDay');
    day.text(moment().format("dddd, MMMM Do") );


//When the page loads, generate all the blocks
    //filled from local storage
    //add css class based on past, present, future
    //add to container
var loadSchedule = function(){
    var timesMorning = ["09","10","11","12","01","02","03","04","05"];
    var past = true; //only if day already started, fix
    var schedule = $('#timeblock');
    for (var i=0;i<timesMorning.length;i++){
        var number = moment().format("hh");
        console.log(".."+number+".."+timesMorning[i]);

        var scheduleSlot = $('<div>');
        scheduleSlot.addClass("time-block");
        scheduleSlot.addClass("row");

        var timeSlot = $('<p>'+timesMorning[i]+'</p>');
        timeSlot.addClass("hour");

        var scheduleText = $('<p>');
        var text = " PLACEHOLDER ";
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
        var saveButton = $('<p>');
        saveButton.addClass('saveBtn').text("X");
        scheduleSlot.append(timeSlot);
        scheduleSlot.append(scheduleText);
        scheduleSlot.append(saveButton);
        schedule.append(scheduleSlot);


    }

}

loadSchedule();



//enter text into a time block, saved in local storage
    //clickable button to save it
