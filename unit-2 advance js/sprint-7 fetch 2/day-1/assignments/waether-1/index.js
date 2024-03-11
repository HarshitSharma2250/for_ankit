let form =document.querySelector('form')
let left_side_container=document.getElementById('left_side_container')

form.addEventListener('submit',(e)=>{
e.preventDefault()
    let input=document.getElementById('input')
    let iframe=document.querySelector('iframe')
    iframe.src=`https://maps.google.com/maps?q=${input.value}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    GetWeatherInfo(input.value)
})


async function GetWeatherInfo(inputdata){

    try {
        let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputdata}&appid=537833f6b43f0d4715d1b101a7aef937`)

        let data=await res.json()
        RenderApiData(data)

    } catch (error) {
        console.log(error)
    }
}



function RenderApiData(data){
left_side_container.innerHTML=null;

// time stamp----------------------------------------
let Time_date=document.createElement('div')
Time_date.id='Time_data'
Time_date.textContent=timeData()

let cityname=document.createElement('div')
cityname.id='city_Name'
cityname.textContent=data.name

// weather logo with diff temp with temp----------
let celciusTemp = (data.main.temp - 273.15).toFixed(2);


let temp_logo=document.createElement('div')
temp_logo.id='temp_logo'
let logo=document.createElement('span')
let strwether=''

if(celciusTemp<0){
    logo.innerHTML='&#x2603;'
    strwether='Snowman Snowy '
}
else if(celciusTemp>0 && celciusTemp<=10){
logo.innerHTML='&#x1F32A'
strwether='	Cloud With Tornado Twister '

}else if(celciusTemp>10 && celciusTemp<=20){
    logo.innerHTML='&#x26C5;'

    strwether='Sun Behind Cloud Partly Cloudy'
    }
else if(celciusTemp>20 && celciusTemp<=25){
    logo.innerHTML='&#x2601;'
    strwether='Cloudy Weather'
    }
else if(celciusTemp>25 && celciusTemp<=30){
    logo.innerHTML='&#x2609;'
    }
else if(celciusTemp>30 && celciusTemp<=35){
    logo.innerHTML='&#x2600;'
    strwether='	Black Sun Clear Weather'
    }
else if(celciusTemp>35 && celciusTemp<=240){
    logo.innerHTML='&#x263C;'
    strwether='White Sun Sunny'
    }

let tempdetail=document.createElement('span')
tempdetail.textContent=celciusTemp + "°C";
temp_logo.append(logo,tempdetail)

// h3 for more information ----------------------------------------------
let feeling=document.createElement('h2')
feeling.textContent=` feels like ${(data.main.feels_like-273.15).toFixed(2)}°C. ${strwether} `


//now give speed and direction -------------------------------------

let wspeed_pressure=document.createElement('div')

let speedwind=document.createElement('span')
let atmpressure=document.createElement('span')
speedwind.textContent=`${data.wind.speed}m/s  ${degreesToCardinal(data.wind.deg)}`

atmpressure.textContent=`${data.main.pressure} hpa`

wspeed_pressure.append(speedwind,atmpressure)

// humidity an dUV data-------------------------------------------------------
let humidity=document.createElement('div')
humidity.textContent=`Humidity  :   ${data.main.humidity}%     UV:4`


//dew point---------------------------------------------------------------------------
let dewpoint_visivility=document.createElement('div')

let dewPoint=document.createElement('span')
let visibility=document.createElement('span')

dewPoint.textContent=`due piont  :  ${((data.main.temp) - ((100 - (data.main.humidity)) / 5)-273.15).toFixed(2)}°C`
visibility.textContent=` visibility ${(data.visibility)/1000} km`

dewpoint_visivility.append(dewPoint,visibility)

left_side_container.append(Time_date,cityname,temp_logo,feeling,wspeed_pressure,humidity,dewpoint_visivility)
}



function degreesToCardinal(degrees) {
    const cardinals = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
    const index = Math.round((degrees % 360) / 45);
    return cardinals[index];
}

function timeData(){
    let date=new Date()
    let month=['jan','feb','march','april','may','june','july','aug','sept','oct','nov','dec']
    
    let cmonth=month[date.getMonth()]
    let cdate=date.getDate()
    let chours=date.getHours()
    let cminutes=date.getMinutes()
    let str='AM'
    if(chours>=12){
    str='PM'
    chours=24-chours;
    }

    return `${cmonth}  ${cdate} ,  ${chours} : ${cminutes} ${str}`
}
