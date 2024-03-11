const input = document.getElementById("query");
const DefaulttableRow = document.getElementById("DefaulttableRow");
const DebouncetableRow = document.getElementById("DebouncetableRow");
const ThrotteltableRow = document.getElementById("ThrotteltableRow");

const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

// write your js code here

input.addEventListener("input",()=>{
    defaultText.innerHTML = input.value;
    console.log(input.value);
    if(input.value == ""){
        clearInterval(timer);
        DefaulttableRow.innerHTML = ""
        DebouncetableRow.innerHTML = ""
        ThrotteltableRow.innerHTML = ""
        debounceText.innerHTML = ""
    }
    else{
        dataFetch(input.value,DefaulttableRow);
        debounce(input.value,500,DebouncetableRow);
        throttleInput(input.value,ThrotteltableRow);
    }
})



let dataFetch = async (value,container)=>{
    try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${value}`)
        let data = await res.json();
        console.log(data);
        displayData(data,container);
    } catch (error) {
        console.log(error);
    }
}

 


let timer; 

let debounce = (value,delay,container)=>{
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{
        debounceText.innerHTML = value;
        dataFetch(value,container);
    },delay);
}

let flag = true;
let throttleInput = (input,tableName)=>{
    if(flag == true){
        throttleText.innerHTML = input;
        dataFetch(input,tableName);
        flag = false;
        setTimeout(()=>{
            flag = true;
        },500)
    }else{
        return;
    }
}



let displayData = (data,container)=>{
    container.innerHTML = "";
    data.forEach(ele => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = ele.id;
        let td2 = document.createElement("td");
        td2.innerHTML = ele.name
        let td3 = document.createElement("td");
        td3.innerHTML = ele.username
        tr.append(td1,td2,td3);
        container.append(tr);
    });
} 
