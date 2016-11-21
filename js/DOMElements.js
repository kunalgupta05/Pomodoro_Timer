// DOM Elements selected for adding interactivity through js

var startPomodoro = document.getElementById('startPomodoro');
var shortBreak = document.getElementById('shortBreak');
var longBreak = document.getElementById('longBreak');
var startButton = document.getElementById('startButton');
var stopButton = document.getElementById('stopButton');
var resetButton = document.getElementById('resetButton');
var setPomodoroInput = document.getElementById('Reset__Pomodoro__Timer__input');
var setShortBreakTimerInput = document.getElementById('Reset__shortBreak__Timer__input');
var setLongBreakTimerInput = document.getElementById('Reset__longBreak__Timer__input');
var setPomodoroTimer = parseInt(setPomodoroInput.innerHTML) * 60000;
var setShortBreakTimer = parseInt(setShortBreakTimerInput.innerHTML) * 60000;
var setLongBreakTimer = parseInt(setLongBreakTimerInput.innerHTML) * 60000;
var decrementPomodoro = document.getElementById('Reset__Pomodoro__Timer__decrement');
var incrementPomodoro = document.getElementById('Reset__Pomodoro__Timer__increment');
var decrementShortBreak = document.getElementById('Reset__shortBreak__Timer__decrement');
var incrementShortBreak = document.getElementById('Reset__shortBreak__Timer__increment');
var decrementLongBreak = document.getElementById('Reset__longBreak__Timer__decrement');
var incrementLongBreak = document.getElementById('Reset__longBreak__Timer__increment');
var aboutButton=document.getElementById('aboutButton');
var settingsButton=document.getElementById('settingsButton');
var disclaimerButton=document.getElementById('disclaimerButton');
var enableNotifications=document.getElementById('enableNotifications');