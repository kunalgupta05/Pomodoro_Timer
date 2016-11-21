// EventListeners added to selected DOM elements for triggering

document.addEventListener('DOMContentLoaded',notifyPermission,false);
document.addEventListener('keydown',keyboardInputHandler,false);
startPomodoro.addEventListener('click', pomodoroTimer, false);
shortBreak.addEventListener('click', shortBreakTimer, false);
longBreak.addEventListener('click', longBreakTimer, false);
startButton.addEventListener('click', startTimer, false);
stopButton.addEventListener('click', stopTimer, false);
resetButton.addEventListener('click', resetTimer, false);
decrementPomodoro.addEventListener('click', decrementPomodoroTimer, false);
incrementPomodoro.addEventListener('click', incrementPomodoroTimer, false);
decrementShortBreak.addEventListener('click', decrementShortBreakTimer, false);
incrementShortBreak.addEventListener('click', incrementShortBreakTimer, false);
decrementLongBreak.addEventListener('click', decrementLongBreakTimer, false);
incrementLongBreak.addEventListener('click', incrementLongBreakTimer, false);
aboutButton.addEventListener('click',showAppInfo,false);
settingsButton.addEventListener('click',showSettings,false);
disclaimerButton.addEventListener('click',showDisclaimer,false);
enableNotifications.addEventListener('click',notifyPermission,false);