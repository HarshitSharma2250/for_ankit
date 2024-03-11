let renderData=document.getElementById('renderData')
let shrt_databyd=document.getElementById('shrt_databyd')
let input=document.getElementById('input')
let form=document.querySelector('form')

let istrue=false






shrt_databyd.addEventListener('change',()=>{
istrue=true;
RenderData(shrt_databyd.value)
})

async function RenderData(select_value){
    try {

        let res=istrue ? await  fetch( `https://fakestoreapi.com/products?sort=${select_value}`) : await fetch(`https://fakestoreapi.com/products`)
let data=await res.json()

form.addEventListener('submit',(e)=>{
    e.preventDefault()
        let filterdata=data.filter((ele)=>ele.title===input.value)
        DataOnUi(filterdata)
})


DataOnUi(data)

    } catch (error) {
        console.log(error)
    }
}
RenderData()
function DataOnUi(data){
    renderData.innerHTML=null

    data.forEach(ele => {
        let div = document.createElement('div');

        let idParagraph = document.createElement('p');
        idParagraph.textContent = 'ID: ' + ele.id;
      
        let titleParagraph = document.createElement('p');
        titleParagraph.textContent = 'Title: ' + ele.title;
      
        let priceParagraph = document.createElement('p');
        priceParagraph.textContent = 'Price: ' + ele.price;
      
        let categoryParagraph = document.createElement('p');
        categoryParagraph.textContent = 'Category: ' + ele.category;
      
        let descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = 'Description: ' + ele.description;
      
        let imageParagraph = document.createElement('img');
        imageParagraph.src = ele.image;

        div.append(imageParagraph,idParagraph,titleParagraph,priceParagraph,categoryParagraph,descriptionParagraph)

        renderData.appendChild(div)
    });
}