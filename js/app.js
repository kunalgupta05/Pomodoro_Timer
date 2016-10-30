var startPomodoro=document.getElementById('startPomodoro');

startPomodoro.addEventListener('click',check,false);

function check()
{
        t.TIME_ELAPSED=0;
        t.timerRun();         
}