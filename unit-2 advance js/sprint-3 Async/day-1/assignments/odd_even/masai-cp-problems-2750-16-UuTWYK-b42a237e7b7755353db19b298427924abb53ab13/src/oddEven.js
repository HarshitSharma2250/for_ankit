function getData(data) {
    
return new Promise((res,rej)=>{
    if(typeof(data)==='string'){
        rej('error')
    }else if(data%2!==0) {
        setTimeout(() => {
            res('odd')
        }, 2000);
    }else if(data%2==0){
        setTimeout(() => {
            res('even')
        }, 4000);
    }
})
}


export default getData
