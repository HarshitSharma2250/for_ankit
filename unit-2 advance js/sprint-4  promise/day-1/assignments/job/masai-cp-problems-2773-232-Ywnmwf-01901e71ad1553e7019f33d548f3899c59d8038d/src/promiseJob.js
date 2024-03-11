function job(delay, value) {
  return new Promise((res)=>{
        setTimeout(()=>{
res(value)
        },delay)
    })
 
}


var results=Promise.all([job(1000, 10), job(3000, 20), job(500, 30), job(1500, 40)])


export { job, results }