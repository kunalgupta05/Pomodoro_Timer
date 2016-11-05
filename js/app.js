'use strict'

//Variables
var timerStarted = false;
var startPomodoro = document.getElementById('startPomodoro');
var shortBreak = document.getElementById('shortBreak');
var longBreak = document.getElementById('longBreak');
var startButton = document.getElementById('startButton');
var stopButton = document.getElementById('stopButton');
var resetButton = document.getElementById('resetButton');
var resetTimerModal = document.getElementById('resetTimerModal');
var setPomodoroInput= document.getElementById('Reset__Pomodoro__Timer__input');
var setShortBreakTimerInput=document.getElementById('Reset__shortBreak__Timer__input');
var setLongBreakTimerInput= document.getElementById('Reset__longBreak__Timer__input');
var setPomodoroTimer = parseInt(setPomodoroInput.innerHTML) * 60000;
var setShortBreakTimer = parseInt(setShortBreakTimerInput.innerHTML) * 60000;
var setLongBreakTimer = parseInt(setLongBreakTimerInput.innerHTML) * 60000;
var decrementPomodoro = document.getElementById('Reset__Pomodoro__Timer__decrement');
var incrementPomodoro = document.getElementById('Reset__Pomodoro__Timer__increment');
var decrementShortBreak = document.getElementById('Reset__shortBreak__Timer__decrement');
var incrementShortBreak = document.getElementById('Reset__shortBreak__Timer__increment');
var decrementLongBreak = document.getElementById('Reset__longBreak__Timer__decrement');
var incrementLongBreak = document.getElementById('Reset__longBreak__Timer__increment');



// EventListeners
startPomodoro.addEventListener('click', pomodoroTimer, false);
shortBreak.addEventListener('click', shortBreakTimer, false);
longBreak.addEventListener('click', longBreakTimer, false);
startButton.addEventListener('click', startTimer, false);
stopButton.addEventListener('click', stopTimer, false);
resetButton.addEventListener('click', resetTimer, false);
decrementPomodoro.addEventListener('click', decrementPomodoroTimer, false);
incrementPomodoro.addEventListener('click', incrementPomodoroTimer, false);
// decrementShortBreak.addEventListener('click', decrementShortBreakTimer, false);
// incrementShortBreak.addEventListener('click', incrementShortBreakTimer, false);
// decrementLongBreak.addEventListener('click', decrementLongBreakTimer, false);
// incrementLongBreak.addEventListener('click', incrementLongBreakTimer, false);


// Common utility function which sets the timer according to timings set by the user
function setupTimer(timeElapsed, timerDuration) {
    timerStarted = true;
    t.TIME_ELAPSED = timeElapsed;
    t.TIMER_DURATION = timerDuration;
    t.lastRender = Date.now();
    t.timerRun();
}


// function which runs the timer when pomodoro or start button is clicked
function pomodoroTimer() {
    setupTimer(0, setPomodoroTimer);
}

// function which resets the timer to short break
function shortBreakTimer() {
    setupTimer(0, setShortBreakTimer);
}

// function which resets the timer to long break
function longBreakTimer() {
    setupTimer(0, setLongBreakTimer);
}


//function which starts of the pomodoro on click of start button
function startTimer() {
    if (!timerStarted) {
        var timeArray = timeString.split(':');
        var totalMilliseconds = ((parseInt(timeArray[0]) * 60) + (parseInt(timeArray[1]))) * 1000;        
        setupTimer(0, totalMilliseconds);
    }
}

//function which will stop the timer as soon as user clicks on the stop button
function stopTimer() {
    t.TIME_ELAPSED = t.TIMER_DURATION;
    timerStarted = false;
}

// function which will open the modal, which will eventually reset the timers according to user's preference
function resetTimer() {
    $('#resetTimerModal').modal('show');
}

// Checking the pomodoro timer value for increment/decrement timer
function checkPomodoroTimerValue(pomoInput) {    
    return pomoInput >= 1  && pomoInput < 120 ? true : false;
}

// decrement pomodoro timer value
function decrementPomodoroTimer() {    
    var pomoInput=parseInt(setPomodoroInput.innerHTML);
    if (checkPomodoroTimerValue(pomoInput) && pomoInput!==1) {
        pomoInput--;
        setPomodoroInput.innerHTML = pomoInput;
    }
    else {
        alert("Pomodoro timer can't be less than 1 minute");
    }
}

// increment pomodoro timer value
function incrementPomodoroTimer() {
    var pomoInput=parseInt(setPomodoroInput.innerHTML);
    if (checkPomodoroTimerValue(pomoInput)) {
        pomoInput++;
        setPomodoroInput.innerHTML = pomoInput;
    }
    else {
        alert("Concentrating for more than 2 hours is tough. You should take some break as well!");
    }
}