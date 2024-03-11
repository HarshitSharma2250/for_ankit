let form=document.querySelector('form')
let renderdatahere=document.getElementById('renderdatahere')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let input=document.getElementById('input')

        FetchApiData(input.value)
})

async function FetchApiData(cityName){
    try {
        let res=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=40&appid=537833f6b43f0d4715d1b101a7aef937`)
        let data=await res.json()
        RenderApiData(data)
        
    } catch (error) {
        console.log(error)
    }
}

function RenderApiData(data){
    console.log(data)
    renderdatahere.innerHTML=null
    let days=['sun','mon','tue','wed','thu','fri','sat']
 


    let days_8_details=data.list.slice(0,  7);
  




days_8_details.map((ele,index)=>{
    let div=document.createElement('div')
    div.id='RenderDataDiv'

    //----------------------------------------------create elements--------------------------------
let cdays=document.createElement('p')
let icons=document.createElement('p')
let tempMax=document.createElement('p')
let tempMin=document.createElement('p')


// convert temp in celcius-------------------------------------------------------------------------------------
let temphereMax = (ele.main.temp_max - 273.15).toFixed(0);
let temphereMin = (ele.main.temp_min - 273.15).toFixed(0);

//--------------days---------------------------------------------------------

let dayOfWeek = days[index];

//icons------------------------------------------------------------------------------
if(temphereMax<0){
    icons.innerHTML='&#x2603;'

}
else if(temphereMax>0 && temphereMax<=10){
icons.innerHTML='&#x1F32A'


}else if(temphereMax>10 && temphereMax<=20){
    icons.innerHTML='&#x26C5;'


    }
else if(temphereMax>20 && temphereMax<=25){
    icons.innerHTML='&#x2601;'

    }
else if(temphereMax>25 && temphereMax<=30){
    icons.innerHTML='&#x2609;'
    }
else if(temphereMax>30 && temphereMax<=35){
    icons.innerHTML='&#x2600;'
 
    }
else if(temphereMax>35 && temphereMax<=240){
    icons.innerHTML='&#x263C;'
  
    }




cdays.textContent=dayOfWeek
tempMax.textContent=temphereMax+'°'
tempMin.textContent=temphereMin+'°'

div.append(cdays,icons,tempMax,tempMin)

renderdatahere.appendChild(div)
})

}