let hours=document.getElementById('hours')
let minutes=document.getElementById('minutes')
let seconds=document.getElementById('seconds')

let timer=document.getElementById('timer')
 let hr_display=document.getElementById('hr_display')



// for buttons ------------------------------------------
let start=document.getElementById('start')
let stop=document.getElementById('stop')
let reset=document.getElementById('reset')

let intervalId ;
let onloadtimer;

//when hour input is empty -----------------------------
if(hours.value===''){
    hr_display.style.display='none'
}
timer.addEventListener('click',()=>{
    hr_display.style.display='inline-block'
    clearInterval(onloadtimer)

})

// flag for start button click only once------------------------
let istrue=true;

// when click on reset then should come initial value------------
let time_sec =0
let time_min = 5


function StartTimer(){

            onloadtimer=setInterval(()=>{
  if(time_sec>0 ){
    time_sec--
    seconds.value=time_sec
  }else if(time_min>0){
      --time_sec
      time_min-=1
    time_sec=60;
    minutes.value=time_min
  }
            },1000)
        }

// Function to start the timer
function startTimer() {

    intervalId = setInterval(() => {
        if (seconds.value > 0) {
            seconds.value--;
        } else if (minutes.value > 0) {
            seconds.value=59
            minutes.value--;
        } else if (hours.value > 0) {
            seconds.value = 59;
            minutes.value = 59;
            hours.value--;

        }
    }, 1000);
   
}
// Event listener for start button
start.addEventListener('click', () => {
    if(hours.value===''||hours.value==0){
        hr_display.style.display='none'
    }
    if(istrue){
        startTimer();
    }
   istrue=false
});

// Event listener for stop button
stop.addEventListener('click', () => {
    clearInterval(intervalId);
    clearInterval(onloadtimer)
    istrue=true;
});

// Event listener for reset button
reset.addEventListener('click', () => {
    istrue=true;
    clearInterval(intervalId);
    clearInterval(onloadtimer)
    seconds.value =0
    minutes.value = 5
    hours.value=0
    hr_display.style.display='none'
});


window.onload=StartTimer;

