let input=document.getElementById('input')
let output=document.getElementById('output')
let timer;
async function GetApi(inputdata){
    try {
       let res=await fetch(`http://www.omdbapi.com/?s=${inputdata}&apikey=a2f9dc94`) 

let data=await res.json()
return data

    } catch (error) {
        console.log(error)
    }
}
function RenderData(data){
    output.innerHTML=null
    
    data.forEach(movie => {
        let movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
    
        let poster = document.createElement('img');
        poster.src = movie.Poster;
        poster.alt = movie.Title;
    
        let title = document.createElement('h2');
        title.textContent = movie.Title;
    
        let releaseDate = document.createElement('p');
        releaseDate.textContent = `Released: ${movie.Year}`;
    
    
        let imdbRating = document.createElement('p');
        imdbRating.textContent = `IMDb Rating: ${movie.imdbID}`;
    
        movieContainer.append(poster, title, releaseDate,   imdbRating);
        output.appendChild(movieContainer);
    });
    
    }
    async function controller(iputdata){
    if(iputdata.length>=3){
        let data= await GetApi(iputdata)
        RenderData(data.Search)    
    }  
}
    
function Debouncing(calfuc,delay){
    return function(inputtag){
        if(timer){
            clearTimeout(timer)
        }
timer=setTimeout(() => {
    calfuc(inputtag)
}, delay);
    }
}

let debouncingg=Debouncing(controller,2000)

input.addEventListener('input',()=>{
    debouncingg(input.value)
})