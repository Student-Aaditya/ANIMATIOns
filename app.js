// let d=document.querySelector('input');
// d.addEventListener("keydown",function(event){
//     if(event.code=="ArrowUp"){
//         console.log("up");
//         d.style.backgroundColor='red';
//     }
// })


// let form=document.querySelector('form');
// form.addEventListener("submit",function(event){
//     alert("form submit");
//     event.preventDefault();
   
   
// })
// let inp=document.querySelector('input');
// // console.log(inp.value);
// inp.addEventListener("change",function(){
//     p.innerText=inp.value;
// })

// let div=document.querySelector('#div1');
// div.addEventListener("click",function(){
//     let di=document.querySelector('.di');
//     di.style.backgroundColor='grey';
// })
// let p=document.querySelector('p');

let inp=document.querySelector('input');
let btn=document.querySelector('button');
let ul=document.querySelector('ul');
// btn.addEventListener("click",(event)=>{
//     event.preventDefault();
//     let item=document.createElement('li');
//     item.innerText=inp.value;
//     ul.appendChild(item);
//     inp.value="";
// })

//event delogation

// ul.addEventListener("click",(event)=>{
//     if(event.target.nodeName=='BUTTON'){
//     console.log("btn click");
//     }else if(event.target.nodeName=='LI'){
//         // console.log("click");
//         inp.style.backgroundColor='red';
//         alert("click on register btn");
//     }
// });

// let p=document.createElement('p');
// p.innerText="i am aaditya";
// ul.appendChild(p);

let input=document.querySelector('input');
let btns=document.querySelector('button');
btn.addEventListener("click",()=>{
    h.innerText=input.value;
})

let h=document.querySelector('.h1');
let c=(color,delay)=>{
    setInterval(()=>{
        h.style.color=color;
    },delay);
}
c("red",1000);
c("blue",2000);
c("green",3000);
c("aqua",4000);