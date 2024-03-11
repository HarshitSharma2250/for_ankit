let books_render=document.getElementById('books')



function Author(name, birthYear,nationality ){
this.name=name;
this.birthYear=birthYear;
this.nationality=nationality
}


function Book( title, author,genre, price){
    this.title=title;
    this.author=author
this.genre=genre;
this.price=price
}
Book.prototype.getBookInfo =function() {
return (`the book ${this.title} is written by ${this.author} and its genre is ${this.genre} and price of this book is : ${this.price}`)
}

let autherinfo=new Author('me',1997,'indian')

let p1=new Book('herry poter',autherinfo.name,3324,2000)
let p2=new Book('herry poter',autherinfo.name,3324,2000)
// p1.getBookInfo()



let arr=[p1,p2]
let totalinfo=[p1.getBookInfo()]

arr.forEach((ele)=>{
    let div=document.createElement('div')
    let title=document.createElement('p')
    let auther=document.createElement('p')
    let genre=document.createElement('p')
    let price=document.createElement('p')
  
title.innerHTML=  `<span>title</span> : ${ele.title}`;
auther.innerHTML=`<span>auther</span> :  ${ele.author}`;
genre.innerHTML= `<span>genre</span>  : ${ele.genre}`;
price.innerHTML=`<span>price</span>  : ${ele.price}`

div.append(title,auther,genre,price)
books_render.appendChild(div)


})