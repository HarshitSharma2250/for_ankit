let input=document.getElementById('input')
let output=document.getElementById('output')


async function GetApi(inputdata){
    try {
       let res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputdata}`) 

let data=await res.json()
return data

    } catch (error) {
        console.log(error)
    }
}

function RenderData(data){
output.innerHTML=null

data.forEach(meal => {
    let mealContainer = document.createElement('div');
        mealContainer.classList.add('meal-container'); 

        let img = document.createElement('img');
        img.src = meal.strMealThumb;
        img.alt = meal.strMeal;

        let heading = document.createElement('h2');
        heading.textContent = meal.strMeal;

        let instructions = document.createElement('p');
        instructions.textContent = meal.strInstructions;

       
        let tags = document.createElement('p');
        tags.textContent = `Tags: ${meal.strTags || 'N/A'}`;

       
       

        mealContainer.append(img, heading,tags, instructions);
        output.appendChild(mealContainer);
});

}


 async function controller(iputdata){

        let data= await GetApi(iputdata)
        RenderData(data.meals)      
}

function throttling(controller, delayTime) {
    let timer = false

    return function (valueinput) {
        if (timer===false) {
            timer=true
            setTimeout(() => {
                controller(valueinput);
                timer = false;
            }, delayTime);
        }
    };
}

const throttledController = throttling(controller, 600);
input.addEventListener('input',()=>{
    let valueinput=input.value
    throttledController(valueinput);
})