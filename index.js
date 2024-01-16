let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isTimerRunning = false; //By default - false

//once we click on start button, timer's boolean value gets true and timer will start running.
function start() {
    isTimerRunning = true;
    runStopwatch();
}
// Once we click on reset button, timer will set defualt value to false and it will reset everything
function reset() {
    isTimerRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
// On reset position, display String value as "00"
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";
    document.getElementById("milisecond").innerHTML = "00";
}

function stop() {
    isTimerRunning = false;
}

function runStopwatch() 
{
    // if timer gets true then increase mili seconds by 1
    if (isTimerRunning) 
    {
        milliseconds += 1;
        // once mili seconds reach to 100, increasing the seconds value and reset the mili seconds value at 0
        if (milliseconds == 100) 
        {
            seconds += 1;
            milliseconds = 0;
        }
        // once seconds reach to 60, increasing the minutes value and reset the seconds value at 0
        if (seconds == 60) 
        {
            minutes += 1;
            seconds = 0;
        }
        // once minutes reach to 60, increasing the hours value and reset the minutes and seconds value at 0
        if (minutes == 60) 
        {
            hours += 1;
            minutes = 0;
            seconds = 0;
        }

        let hoursString = hours;
        let minutesString = minutes;
        let secondsString = seconds;
        let millisecondsString = milliseconds;


        // This condition is checking if the value of hoursString (hours) is less than 10. 
        //If it is, the code adds a leading "0" to the string representation of hoursString. 
        //The purpose of this is to ensure that the displayed hours always have two digits. 
        //For example, instead of displaying "1" for an hour, it will display "01". 
        //This formatting ensures a consistent and visually appealing display for the time.
        
        //the condition is part of the code that formats the time values to have leading zeros for a better visual representation on the HTML page.
        if (hoursString < 10) 
        {
            hoursString = "0" + hoursString;
        }

        if (minutesString < 10) 
        {
            minutesString = "0" + minutesString;
        }

        if (secondsString < 10) 
        {
            secondsString = "0" + secondsString;
        }

        if (millisecondsString < 10) 
        {
            millisecondsString = "0" + millisecondsString;
        }

        document.getElementById("hour").innerHTML = hoursString;
        document.getElementById("minute").innerHTML = minutesString;
        document.getElementById("second").innerHTML = secondsString;
        document.getElementById("milisecond").innerHTML = millisecondsString;

        setTimeout(runStopwatch, 10);
    }
}