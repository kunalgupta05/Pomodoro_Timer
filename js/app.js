'use strict'

//Variables
var startPomodoro=document.getElementById('startPomodoro');
var shortBreak=document.getElementById('shortBreak');
var longBreak=document.getElementById('longBreak');
var startButton=document.getElementById('startButton');
var stopButton=document.getElementById('stopButton');
var resetButton=document.getElementById('resetButton');
var timerStarted=false;


// EventListeners
startPomodoro.addEventListener('click',pomodoroTimer,false);
shortBreak.addEventListener('click',shortBreakTimer,false);
longBreak.addEventListener('click',longBreakTimer,false);
startButton.addEventListener('click',startTimer,false);
stopButton.addEventListener('click',stopTimer,false);


// Common utility function which sets the timer according to timings set by the user
function setupTimer(timeElapsed,timerDuration){
    timerStarted=true;
    t.TIME_ELAPSED=timeElapsed;
    t.TIMER_DURATION=timerDuration;
    t.lastRender=Date.now();
    t.timerRun();
}


// function which runs the timer when pomodoro or start button is clicked
function pomodoroTimer()
{    
    setupTimer(0,60000);   
}

// function which resets the timer to short break
function shortBreakTimer()
{
    setupTimer(0,300000);
}

// function which resets the timer to long break
function longBreakTimer()
{
    setupTimer(0,600000);
}


//function which starts of the pomodoro on click of start button
function startTimer(){
    if(!timerStarted){
        var timeArray=timeString.split(':');
        var totalMilliseconds=((parseInt(timeArray[0])*60) + (parseInt(timeArray[1]))) * 1000;
        console.log(totalMilliseconds);
        setupTimer(0,totalMilliseconds);
    }
}

//function which will stop the timer as soon as user clicks on the stop button
function stopTimer(){
    t.TIME_ELAPSED=t.TIMER_DURATION;
    timerStarted=false;
}