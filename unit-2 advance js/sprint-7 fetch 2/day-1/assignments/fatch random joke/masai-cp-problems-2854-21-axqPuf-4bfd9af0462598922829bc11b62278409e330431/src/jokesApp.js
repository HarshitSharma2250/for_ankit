function setJokes(data) {
  // get the joke-container div
  // craete a div and add a p tag in it with class as joke-text
  // append the div to joke-container div
let joke_container=document.getElementById('joke-container')

let div=document.createElement('div')
let ptag=document.createElement('p')
ptag.className='joke-text'
ptag.textContent=data.value
div.append(ptag)
joke_container.append(div)
}

let getRandomJoke = async () => {
  // fetch request to get a random joke
  // return the data ona successfull request
  // return error text on failure
try {
  let res=await fetch(`https://api.chucknorris.io/jokes/random`)
  let data=await res.json()

  console.log(data.value)
  return data
} catch (error) {
  return `something went wrong`
}


};
let getJokeByCategory = async (event) => {
  // // fetch request to get a random joke by category
  // return the data ona successfull request
  // return error text on failure

try {
  let res = await fetch(`https://api.chucknorris.io/jokes/random?category=${event.target.value}`)
  let data=await res.json()
  return data ;
  
} catch (error) {
  return `something went wrong`
}


};
window.onload = function () {
  // add click event to button
  // add change event to select tag
let get_jokes_data=document.getElementById('get-jokes-data')
let get_category=document.getElementById('get-category')

get_jokes_data.addEventListener('click',()=>{
  getRandomJoke()
})
get_category.addEventListener('change',()=>{
  getJokeByCategory(get_category.value)
})

};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getRandomJoke,
    setJokes,
    getJokeByCategory,
  };
}
