let datashowing=document.getElementById('datashowing')
let btn=document.querySelector('button')

btn.addEventListener('click',DataFetching)

function DataFetching(){
    fetch(`https://reqres.in/api/users`)
    .then((res)=>res.json())
    .then((data)=>DisplayData(data.data))
    .catch((err)=>console.log(err))
    datashowing.innerHTML='data is loding......'
}

function DisplayData(data){
    datashowing.innerHTML=null

data.forEach(ele => {
    let div=document.createElement('div')

    let avatar=document.createElement('img')
    let email=document.createElement('p')
    let first_name=document.createElement('p')

    

 avatar.src=ele.avatar;
 email.innerHTML=`<strong>Email :  </strong>`+ele.email;
 first_name.innerHTML=`<strong>Name :</strong>`+ele.first_name+' ' +ele.last_name;


 div.append(avatar,email,first_name)
 datashowing.appendChild(div)

});

}