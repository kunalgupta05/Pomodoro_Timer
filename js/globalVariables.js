'use strict'


var timeString = "";
var timeElapsedAtStop;
var pomodoroCount=0;
var timerStarted = false;
var spacebarPressedCount=0;
var tabStatus = {
    pomodoro: true,
    shortBreak: false,
    longBreak: false
};