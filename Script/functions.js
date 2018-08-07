var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var curr_month = 0;
var curr_year = 0;
var d = new Date();

curr_month = d.getMonth();
curr_year = d.getFullYear();


/**
 * Initializing the Date based on Current Date.
 */
function initialize()
{
   curr_month; 
    document.getElementById('curr_month').innerHTML = months[curr_month]+", "+curr_year;
    // display_cal(); 
}


/**
 * Action Taken when you click the next arrow.
 * This will Move to the next Month and year.
 */
function cal_next()
{
    if(curr_month < 11 )
    {
        curr_month = curr_month + 1;
        document.getElementById('curr_month').innerHTML = months[curr_month]+", "+curr_year;
    }
    else if(curr_month === 11)
    {
        curr_month = 0;
        curr_year = curr_year + 1;
        document.getElementById('curr_month').innerHTML = months[curr_month]+", "+curr_year;
    }
    //  display_cal();
}

/**
 * Action taken when clicked the previous arrow.
 * This will move the date and calender to the previous date and year
 */
function cal_prev()
{
    if(curr_month === 0 )
    {
        curr_month = 11;
        curr_year = curr_year - 1;
        document.getElementById('curr_month').innerHTML = months[curr_month]+", "+curr_year;
    }
    else if(curr_month > 0 )
    {
        curr_month = curr_month -1 ;
        document.getElementById('curr_month').innerHTML = months[curr_month]+", "+curr_year;
        //display_cal();
    }
}

