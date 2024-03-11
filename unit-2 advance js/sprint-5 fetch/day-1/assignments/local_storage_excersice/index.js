let form=document.querySelector('form')
let Name=document.getElementById('Name')
let age=document.getElementById('age')
let show_data=document.getElementById('show_data')
let tbody=document.querySelector('tbody')

let storeArr=[]

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let obj={
        Name:Name.value,
        age:age.value
    }
storeArr.push(obj)
localStorage.setItem('storeData',JSON.stringify(storeArr))
Name.value=''
age.value=''
})

show_data.addEventListener('click',DataRender)

function DataRender(){
    let getData=JSON.parse(localStorage.getItem('storeData'))
    tbody.innerHTML=null
getData.forEach(ele => {

    let tr=document.createElement('tr')
    let Name=document.createElement('td')
    let age=document.createElement('td')

Name.textContent=ele.Name;
age.textContent=ele.age

tr.append(Name,age)
tbody.appendChild(tr)
});

}