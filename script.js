





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
    var past = true;
    var schedule = $('#container')
    for (var i=0;i<timesMorning.length;i++){
        var number = moment().format("hh");
        console.log(".."+number+".."+timesMorning[i]);

        var scheduleSlot = $('<div>');
        scheduleSlot.addClass("time-block");

        var timeSlot = $('<p>');
        timeSlot.addClass("hour").text(timesMorning[i]);

        if(timesMorning[i]==number){
            past = false;
            scheduleSlot.addClass('present');
        }
        else if(past){
            scheduleSlot.addClass('past');
            //it's past
        }
        else{
            scheduleSlot.addClass('future');
            //future
        }


    }

}

loadSchedule();



//enter text into a time block, saved in local storage
    //clickable button to save it
