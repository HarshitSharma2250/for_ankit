const imageUrls = [
    'https://placekitten.com/200/300',
    'https://images.unsplash.com/file-1672938986796-3784922b755fimage?dpr=2&w=416&auto=format&fit=crop&q=60',
    'https://plus.unsplash.com/premium_photo-1664360971620-fa24e4edb9c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGljfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1558001767-18747c366202?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGljfGVufDB8fDB8fHww0',
    'https://plus.unsplash.com/premium_photo-1666383426394-7d91762bbc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGljfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1556830609-6eb291676a5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGljfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1595261669521-11d7ee05804a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1444312645910-ffa973656eba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1604671095434-eb44eb340d63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1664536582095-ac12efcad17b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1573847792062-9292df56ebb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1606587013317-cc43fa98a123?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661759090544-41197bd55d33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1488381397757-59d6261610f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1616501998639-04447c1dd713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBpY3xlbnwwfHwwfHx8MA%3D%3D',
  ];
  

let slider=document.getElementById('slider')
let leftbtn=document.getElementById('leftbtn')
let rightbtn=document.getElementById('rightbtn')


 let count=0;
slider.src=imageUrls[count]
function ContentSlide(){
 timer=setInterval(() => {
    slider.src=imageUrls[count]
    count=(count+1)%imageUrls.length
    
}, 3000);
}

leftbtn.addEventListener('click',()=>{
    clearInterval(timer)
    count=(count+imageUrls.length-1)%imageUrls.length
    slider.src=imageUrls[count]
})
rightbtn.addEventListener('click',()=>{
    clearInterval(timer)
    count=(count+1)%imageUrls.length
    slider.src=imageUrls[count]
})


console.log(imageUrls.length)

window.onload=ContentSlide;
