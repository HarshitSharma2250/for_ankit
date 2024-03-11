let input=document.querySelectorAll('input')
let render_items=document.getElementById('render_items')
let your_order_item=document.getElementById('your_order_item')
let order_id=document.getElementById('orderId')
let your_orders=document.getElementById('your_orders')
let back=document.getElementById('back')


const items = [
    {id: 1,
        pic: "https://dummyimage.com/150x150/burger.jpg",
        name: "Burger 1",
        price: 5.99,
        category: "Burger",
    },
    {id: 2,
        pic: "https://dummyimage.com/150x150/burger.jpg",
        name: "Burger 2",
        price: 6.49,
        category: "Burger",
    },
    {id: 3,
        pic: "https://dummyimage.com/150x150/burger.jpg",
        name: "Burger 3",
        price: 5.79,
        category: "Burger",
    },
    {
        id: 30,
        pic: "https://dummyimage.com/150x150/burger.jpg",
        name: "Burger 4",
        price: 7.99,
        category: "Burger",
    },
    {id: 4,
        pic: "https://dummyimage.com/150x150/burger.jpg",
        name: "Burger 5",
        price: 6.29,
        category: "Burger",
    },
    {id: 5,
        pic: "https://dummyimage.com/150x150/burger.jpg",
        name: "Burger 6",
        price: 8.49,
        category: "Burger",
    },
    {id: 6,
        pic: "https://dummyimage.com/150x150/mcPuff.jpg",
        name: "McPuff 1",
        price: 3.49,
        category: "mcPuff",
    },
    {id: 7,
        pic: "https://dummyimage.com/150x150/mcPuff.jpg",
        name: "McPuff 2",
        price: 3.99,
        category: "mcPuff",
    },
    {id: 8,
        pic: "https://dummyimage.com/150x150/mcPuff.jpg",
        name: "McPuff 3",
        price: 4.29,
        category: "mcPuff",
    },
    {id: 9,
        pic: "https://dummyimage.com/150x150/mcPuff.jpg",
        name: "McPuff 4",
        price: 3.79,
        category: "mcPuff",
    },
    {id: 10,
        pic: "https://dummyimage.com/150x150/mcPuff.jpg",
        name: "McPuff 5",
        price: 4.49,
        category: "mcPuff",
    },
    {id: 11,
        pic: "https://dummyimage.com/150x150/mcPuff.jpg",
        name: "McPuff 6",
        price: 3.29,
        category: "mcPuff",
    },
    {id: 12,
        pic: "https://dummyimage.com/150x150/wrap.jpg",
        name: "wrap 1",
        price: 6.99,
        category: "wrap"
    },
    {id: 13,
        pic: "https://dummyimage.com/150x150/wrap.jpg",
        name: "Wrap 2",
        price: 7.49,
        category: "wrap"
    },
    {id: 14,
        pic: "https://dummyimage.com/150x150/wrap.jpg",
        name: "Wrap 3",
        price: 6.79,
        category: "wrap"
    },
    {id: 15,
        pic: "https://dummyimage.com/150x150/wrap.jpg",
        name: "Wrap 4",
        price: 8.99,
        category: "wrap"
    },
    {id: 16,
        pic: "https://dummyimage.com/150x150/wrap.jpg",
        name: "Wrap 5",
        price: 7.29,
        category: "wrap"
    },
    {id: 17,
        pic: "https://dummyimage.com/150x150/wrap.jpg",
        name: "Wrap 6",
        price: 9.49,
        category: "wrap"
    },
    {id: 18,
        pic: "https://dummyimage.com/150x150/cold_drink.jpg",
        name: "Cold Drink 1",
        price: 1.99,
        category: "cold_drink"
    },
    {id: 19,
        pic: "https://dummyimage.com/150x150/cold_drink.jpg",
        name: "Cold Drink 2",
        price: 2.49,
        category: "cold_drink"
    },
    {id: 20,
        pic: "https://dummyimage.com/150x150/cold_drink.jpg",
        name: "Cold Drink 3",
        price: 1.79,
        category: "cold_drink"
    },
    {id: 21,
        pic: "https://dummyimage.com/150x150/cold_drink.jpg",
        name: "Cold Drink 4",
        price: 2.99,
        category: "cold_drink"
    },
    {id: 22,
        pic: "https://dummyimage.com/150x150/cold_drink.jpg",
        name: "Cold Drink 5",
        price: 2.29,
        category: "cold_drink"
    },
    {id: 23,
        pic: "https://dummyimage.com/150x150/cold_drink.jpg",
        name: "Cold Drink 6",
        price: 3.49,
        category: "cold_drink"
    },
    {id: 24,
        pic: "https://dummyimage.com/150x150/coffee.jpg",
        name: "Coffee 1",
        price: 2.99,
        category: "coffee"
    },
    {id: 25,
        pic: "https://dummyimage.com/150x150/coffee.jpg",
        name: "Coffee 2",
        price: 3.49,
        category: "coffee"
    },
    {id: 26,
        pic: "https://dummyimage.com/150x150/coffee.jpg",
        name: "Coffee 3",
        price: 2.79,
        category: "coffee"
    },
    {id: 27,
        pic: "https://dummyimage.com/150x150/coffee.jpg",
        name: "Coffee 4",
        price: 3.99,
        category: "coffee"
    },
    {id: 28,
        pic: "https://dummyimage.com/150x150/coffee.jpg",
        name: "Coffee 5",
        price: 3.29,
        category: "coffee"
    },
    {id: 29,
        pic: "https://dummyimage.com/150x150/coffee.jpg",
        name: "Coffee 6",
        price: 4.49,
        category: "coffee"
    },
    
];

let filteredItems = items;

input.forEach((ele) => {
    ele.addEventListener("change", function () {
        let checkedCategories = Array.from(input)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.name);

        if (checkedCategories.length > 0) {
            filteredItems = items.filter((element) => checkedCategories.includes(element.category));
        } else {
            filteredItems = items;
        }

        renderItems();git add .
    });
});

function renderItems() {
    render_items.innerHTML = '';
    filteredItems.forEach((ele,index) => {
        let div = document.createElement('div');
        let pic = document.createElement('img');
        let name = document.createElement('p');
        let price = document.createElement('p');

        pic.src = ele.pic;
        name.innerHTML = `<span>Name :  </span>` + ele.name;
        price.innerHTML = `<span>Price :  </span>` + ele.price;

        let btn = document.createElement('button');
        btn.textContent = 'Order food';

        btn.addEventListener('click', () => {
            let orderTakingPromise = new Promise((resolve) => {
                let orderTakingTime = Math.random() * 4 + 1;
                setTimeout(() => {
                    resolve();
                }, 1000 * orderTakingTime);
            });
            orderTakingPromise.then(() => {
                OrderBtn(ele);
            });
        });

        div.append(pic, name, price, btn);
        render_items.appendChild(div);
    });
}


// display order-----------------------------------------------
 your_orders.style.display='none'
back.addEventListener('click',()=>{
    your_orders.style.display='none' 
})


function OrderBtn(ele){
    your_orders.style.display='block'
    your_order_item.innerHTML=''

// generating order id----------------------------------------------
let orderId=Math.floor(Math.random()*8000000+1)
order_id.innerHTML=`<span>Order ID :  </span>`+orderId


    let Filter=items.filter((items)=>items.id===ele.id)
Filter.forEach((items)=>{
    let div = document.createElement('div');
    let pic = document.createElement('img');
    let name = document.createElement('p');
    let price = document.createElement('p');
    pic.src = items.pic;
    name.innerHTML = `<span>Name :  </span>` + items.name;
    price.innerHTML = `<span>Price :  </span>` + items.price;
    div.append(pic, name, price);
    your_order_item.appendChild(div);

})
}












renderItems();

