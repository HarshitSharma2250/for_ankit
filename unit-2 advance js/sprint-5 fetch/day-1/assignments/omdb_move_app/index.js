let movie_data = document.getElementById('movie_data')
let searchmovie = document.getElementById('searchmovie')
let searchbtn = document.getElementById('searchbtn')
let recentsearchbtn = document.getElementById('recentsearchbtn')

let key = 'a2f9dc94'


let arr = []


searchbtn.addEventListener('click', GetMovieData)
recentsearchbtn.addEventListener('click', () => {
    RenderData(arr, 'history')
    
})




// show data---------------------------------------------------------------------------------------------

function GetMovieData() {
    fetch(`https://www.omdbapi.com/?apikey=${key}&s=${searchmovie.value}`)
        .then((res) => res.json())
        .then((data) => {
            arr.push(searchmovie.value)
            RenderData(data.Search, 'render')
        })
        .catch((err) => console.log(err))
    movie_data.innerHTML = 'loding data...........'
}


function RenderData(data, flag) {
    movie_data.innerHTML = ''

    //checking flat--------------------------------

    if (flag === 'render') {
        data.forEach(ele => {
            let div = document.createElement('div')

            let pic = document.createElement('img')
            let title = document.createElement('p')
            let year = document.createElement('p')
            let btn = document.createElement('button')
            btn.textContent = 'more details'
            btn.className='more_details'
            btn.addEventListener('click', () => {
                SinglePage(ele)
            })
            pic.src = ele.Poster
            title.innerHTML = `<strong>title :</strong>  ${ele.Title}`
            year.innerHTML = `<strong>year  :</strong>  ${ele.Year}`
            div.append(pic, title, year, btn)
            movie_data.appendChild(div)
        });
    }
    // checking flag------------------------------------------------------------------------------

    else if (flag === 'history') {
        let ol = document.createElement('ol')
        arr=arr.splice(0,4)
        arr.forEach((ele) => {
            let listname = document.createElement('li')
            listname.textContent = ele

            ol.append(listname)
        })
        movie_data.appendChild(ol)

    }
}

//single page data--------------------------
function SinglePage(ele) {
    window.location.href = 'singlePage.html'
    localStorage.setItem('imdbid', ele.imdbID)

}

