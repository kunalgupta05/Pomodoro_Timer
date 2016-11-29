'use strict'

function keyboardInputHandler(event) {
    if (event.which === 32) {
        if (!spacebarPressedCount) {
            startTimer();
        } else {
            stopTimer();
        }
    }
    if (event.altKey) {
        if (event.which === 80) {
            pomodoroTimer();
        }
        if (event.which === 83) {
            shortBreakTimer();
        }
        if (event.which === 76) {
            longBreakTimer();
        }
        if (event.which === 82) {
            resetTimer();
        }
    }
}


// Common utility function which sets the timer according to timings set by the user
function setupTimer(timeElapsed, timerDuration) {
    timerStarted = true;
    spacebarPressedCount = 1;
    t.TIME_ELAPSED = timeElapsed;
    t.TIMER_DURATION = timerDuration;
    t.lastRender = Date.now();
    t.timerRun();
}


// function which runs the timer when pomodoro or start button is clicked
function pomodoroTimer() {
    if (!arguments[0]) {
        console.log('Reset');
        pomodoroCount = 0;
    }
    tabStatus.pomodoro = true;
    tabStatus.shortBreak = false;
    tabStatus.longBreak = false;
    setupTimer(0, setPomodoroTimer);
}

// function which resets the timer to short break
function shortBreakTimer() {
    if (!arguments[0]) {
        console.log('Reset');
        pomodoroCount = 0;
    }
    tabStatus.pomodoro = false;
    tabStatus.shortBreak = true;
    tabStatus.longBreak = false;
    setupTimer(0, setShortBreakTimer);
}

// function which resets the timer to long break
function longBreakTimer() {
    if (!arguments[0]) {
        console.log('Reset');
        pomodoroCount = 0;
    }
    tabStatus.pomodoro = false;
    tabStatus.shortBreak = false;
    tabStatus.longBreak = true;
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
    spacebarPressedCount = 0;
}

// Render the new timer after resetting the original timer values
function renderResettedTimer(timerValue) {
    t.TIME_ELAPSED = 0;
    t.TIMER_DURATION = timerValue * 60000;
    t.render();
}


// Checking the pomodoro timer value for increment/decrement timer
function checkPomodoroTimerValue(pomoInput) {
    return pomoInput >= 1 && pomoInput < 120 ? true : false;
}

// decrement pomodoro timer value
function decrementPomodoroTimer() {
    var pomoInput = parseInt(setPomodoroInput.innerHTML);
    if (checkPomodoroTimerValue(pomoInput) && pomoInput !== 1) {
        pomoInput--;
        setPomodoroInput.innerHTML = pomoInput;
        setPomodoroTimer = pomoInput * 60000;
        if (tabStatus.pomodoro) {
            renderResettedTimer(pomoInput);
        }
    } else {
        alert("Pomodoro timer can't be less than 1 minute");
    }
}

// increment pomodoro timer value
function incrementPomodoroTimer() {
    var pomoInput = parseInt(setPomodoroInput.innerHTML);
    if (checkPomodoroTimerValue(pomoInput)) {
        pomoInput++;
        setPomodoroInput.innerHTML = pomoInput;
        setPomodoroTimer = pomoInput * 60000;
        if (tabStatus.pomodoro) {
            renderResettedTimer(pomoInput);
        }
    } else {
        alert("Concentrating for more than 2 hours is tough. You should take some break as well!");
    }
}

// Checking the short break timer value for increment/decrement timer
function checkShortBreakTimerValue(shortBreakInput) {
    return shortBreakInput >= 1 && shortBreakInput < 9 ? true : false;
}

// decrementing short break timer value
function decrementShortBreakTimer() {
    var shortBreakInput = parseInt(setShortBreakTimerInput.innerHTML);
    if (checkShortBreakTimerValue(shortBreakInput) && shortBreakInput !== 1) {
        shortBreakInput--;
        setShortBreakTimerInput.innerHTML = shortBreakInput;
        setShortBreakTimer = shortBreakInput * 60000;
        if (tabStatus.shortBreak) {
            renderResettedTimer(shortBreakInput);
        }
    } else {
        alert("Short Break timer can't be less than 1 minute.");
    }
}

// increment short break timer value
function incrementShortBreakTimer() {
    var shortBreakInput = parseInt(setShortBreakTimerInput.innerHTML);
    if (checkShortBreakTimerValue(shortBreakInput)) {
        shortBreakInput++;
        setShortBreakTimerInput.innerHTML = shortBreakInput;
        setShortBreakTimer = shortBreakInput * 60000;
        if (tabStatus.shortBreak) {
            renderResettedTimer(shortBreakInput);
        }
    } else {
        alert("Too long for a short break isn't it? Try setting timer for long break.");
    }
}

// Checking the long break timer value for incrementing/decrementing timer
function checkLongBreakTimerValue(longBreakInput) {
    return longBreakInput >= 10 && longBreakInput < 60 ? true : false;
}

// decrement long break timer value 
function decrementLongBreakTimer() {
    var longBreakInput = parseInt(setLongBreakTimerInput.innerHTML);
    if (checkLongBreakTimerValue(longBreakInput) && longBreakInput !== 10) {
        longBreakInput--;
        setLongBreakTimerInput.innerHTML = longBreakInput;
        setLongBreakTimer = longBreakInput * 60000;
        if (tabStatus.longBreak) {
            renderResettedTimer(longBreakInput);
        }
    } else {
        alert("Long Break timer can't be less than 10 minutes.");
    }
}

// increment long break timer value
function incrementLongBreakTimer() {
    var longBreakInput = parseInt(setLongBreakTimerInput.innerHTML);
    if (checkLongBreakTimerValue(longBreakInput)) {
        longBreakInput++;
        setLongBreakTimerInput.innerHTML = longBreakInput;
        setLongBreakTimer = longBreakInput * 60000;
        if (tabStatus.longBreak) {
            renderResettedTimer(longBreakInput);
        }
    } else {
        alert("Taking a break this long will break your concentration.");
    }
}

// function which will open the modal, which will eventually reset the timers according to user's preference
function resetTimer() {
    stopTimer();
    $('#resetTimerModal').modal('show');
}

// function which will open the about modal
function showAppInfo() {
    stopTimer();
    $('#aboutInfoModal').modal('show');
}

// function which will open the sound settings modal
function showSettings() {
    stopTimer();
    $('#settingsModal').modal('show');
}

// function which will open the disclaimer Modal
function showDisclaimer() {
    stopTimer();
    $('#disclaimerModal').modal('show');
}

// function which asks for permission to enable desktop notifications
function notifyPermission() {
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }    
}

// function which will reset the sound settings to default state
function resetSoundSettings(){
    alarmSound.value = 'ding';
    volume.value = '0.5';
}