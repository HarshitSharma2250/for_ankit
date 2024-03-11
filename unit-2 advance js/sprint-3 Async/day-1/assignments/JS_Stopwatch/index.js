let hour=document.getElementById('hour')
let minutes=document.getElementById('minutes')
let sec=document.getElementById('sec')
let milsec=document.getElementById('milsec')
let start=document.getElementById('start')
let stop=document.getElementById('stop')
let reset=document.getElementById('reset')

let time_milsec=0
let time_sec=1;
let time_min=0
let time_hour=0
let istrue=true;

start.addEventListener('click',()=>{
    if(istrue){
        timer=setInterval(()=>{
milsec.textContent=time_milsec;
time_milsec++
if(time_milsec==99){
SecondTime()
time_sec++
    time_milsec=0
}
        },100)
    }
    istrue=false
})


function SecondTime(){

    sec.textContent=time_sec+'s'
    if(time_sec===59){
        time_min++;
        MinuteTime()
        time_sec=0

    }
}
function MinuteTime(){
   
    minutes.textContent=time_min+'m'
    if(time_min===59){
        time_hour++;
        hour.textContent=time_hour+'hr'
        time_min=0
    }
}


stop.addEventListener('click',()=>{
    clearInterval(timer)
    istrue=true;
})
reset.addEventListener('click',()=>{
    clearInterval(timer)
    istrue=true;
    time_milsec=0
     time_sec=1;
     time_min=0
     time_hour=0
     milsec.textContent=time_milsec;
     sec.textContent=0
     minutes.textContent=''
     hour.textContent=''
})