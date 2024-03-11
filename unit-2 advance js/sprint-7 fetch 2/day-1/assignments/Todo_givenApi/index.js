let tbody=document.querySelector('tbody')


const TableFetchApi=async()=>{

    try {
        let res=await fetch(`https://jsonplaceholder.typicode.com/todos`)
        let data=await res.json()
        RnderApiData(data)
    } catch (error) {
        console.log(error)
    }
}

function RnderApiData(data){
   

data.forEach((ele,index)=>{
    let tr=document.createElement('tr')
    let id=document.createElement('td')
    let title=document.createElement('td')
    let status=document.createElement('td')


id.textContent=ele.id;
title.textContent=ele.title;
status.textContent=ele.completed


tr.append(id,title,status)
tbody.appendChild(tr)

})

}

TableFetchApi()