let backtoHome=document.getElementById('backtoHome')
let rendersingle_data=document.getElementById('rendersingle_data')


backtoHome.addEventListener('click',()=>{
    window.location.href='index.html'
})
let imdbid=localStorage.getItem('imdbid')
let key='a2f9dc94'


fetch(`https://www.omdbapi.com/?apikey=${key}&i=${imdbid}`)
.then((res)=>res.json())
.then((data)=>RenderData(data))
.catch((err)=>console.log(err))
rendersingle_data.innerHTML = 'loding data...........'

function RenderData(data){
    rendersingle_data.innerHTML=''

   
    let div=document.createElement('div')
    let pic=document.createElement('img')
let title=document.createElement('p')
let year=document.createElement('p')
let Type=document.createElement('p')
let Released=document.createElement('p')
let Genre=document.createElement('p')
let Actors=document.createElement('p')
let Plot=document.createElement('p')

pic.src=data.Poster;
title.innerHTML=`<strong>title  :</strong>  ${data.Title}`
year.innerHTML=`<strong>year  :</strong>  ${data.Year}`
Type.innerHTML=`<strong>type  :</strong>  ${data.Type}`
Released.innerHTML=`<strong>Released  :</strong>  ${data.Released}`
Genre.innerHTML=`<strong>Genre  :</strong>  ${data.Genre}`
Actors.innerHTML=`<strong>Actors  :</strong>  ${data.Actors}`
Plot.innerHTML=`<strong>Plot  :</strong>  ${data.Plot}`



div.append(pic,title,year,Type,Released,Genre,Actors,Plot)
rendersingle_data.appendChild(div)
}
