'use strict'

//Variables
var startPomodoro=document.getElementById('startPomodoro');
var shortBreak=document.getElementById('shortBreak');
var longBreak=document.getElementById('longBreak');


// EventListeners
startPomodoro.addEventListener('click',pomodoroTimer,false);
shortBreak.addEventListener('click',shortBreakTimer,false);
longBreak.addEventListener('click',longBreakTimer,false);


// Common utility function which sets the timer according to timings set by the user
function setupTimer(timeElapsed,timerDuration){
    t.TIME_ELAPSED=timeElapsed;
    t.TIMER_DURATION=timerDuration;
    t.timerRun();
}


// function which runs the timer when pomodoro or start button is clicked
function pomodoroTimer()
{
    setupTimer(0,1500000);   
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