function Listing(name, category, imageUrl, price) {
this.name=name;
this.category=category;
this.imageUrl=imageUrl;
this.price=price;
this.sold=false
}
let newarr=JSON.parse(localStorage.getItem('Products'))||[]

function getFormData() {
  let name=document.getElementById('name')
  let category=document.getElementById('category')
  let imageUrl=document.getElementById('image')
  let price=document.getElementById('price')

  addListing(name.value,category.value,imageUrl.value,price.value)
}

function addListing(input, category, image, price) {
  let data=new Listing(input, category, image, price)
  newarr.push(data)
localStorage.setItem('Products',JSON.stringify(newarr))
}

window.onload = function () {
  let form=document.getElementById('form')
  form.addEventListener('submit',(e)=>{
e.preventDefault()
getFormData()
})
  //  get the form here and add submit event and handle the preventDefault
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
