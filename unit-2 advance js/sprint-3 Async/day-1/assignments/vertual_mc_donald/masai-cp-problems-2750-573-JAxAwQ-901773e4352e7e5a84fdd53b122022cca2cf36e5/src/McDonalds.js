const getSelectedItems = () => {
  // code here
let arr=[]
const selectedItems = document.querySelectorAll('.food:checked');
selectedItems.forEach(item => {
  arr.push(item.value);
});
orderFood(arr)
}

// accepts selected items from the menu as an array
const orderFood = async (items) => {
let  order_item=document.getElementById('ordered-items')

order_item.innerHTML=''
items.forEach((ele)=>{
  let itemName=document.createElement('p')
  itemName.id='food-item'

  itemName.textContent="you ordered : "+ele
  order_item.appendChild(itemName)

})

};



window.onload = function () {
let order_id=document.getElementById('order-id')
let random_id_gen=Math.floor(Math.random()*900000000+1)
let randomdelayTime=Math.random()*4+1
  //  get the buttons here and add click event

  let btn=document.querySelector('button')
  btn.addEventListener('click',()=>{


    setTimeout(() => {
      order_id.textContent="your order id is  :  "+random_id_gen
      getSelectedItems()
    }, 1000*randomdelayTime);

  })

};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    orderFood
  };
}
