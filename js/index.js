let  start =document.getElementById('starts');
let moon =document.getElementById('moon');
let mountains3 =document.getElementById('mountains3');
let mountains4 =document.getElementById('mountains4');
let river=document.getElementById('river');
let boat=document.getElementById('boat');
let close=document.querySelector('.close');
let open=document.querySelector('.open');
let nav =document.querySelector('header');
let body=document.querySelector('body')


window.onscroll=function(){
    let values=scrollY;
    start.style.left=values +'px';
    moon.style.top=values *2 + 'px';
    mountains3.style.top=values * 2 +'px';
    mountains4.style.top=values * 1.5 + 'px';
    river.style.top=values +'px';
    boat.style.top =values + 'px';
    boat.style.left=values  +'px';
    if(scrollY>=127){
        document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)'
    }
    else{
        document.querySelector('.main').style.background= 'linear-gradient(#200016,#10001f)'
    }
}
open.addEventListener('click',()=>{
    nav.classList.add('active')
})
body.addEventListener('click',(e)=>{
    let clicked=e.target
    if(! clicked.classList.contains('open') && !clicked.classList.contains('menu')){
        nav.classList.remove('active')
    }
});
close.addEventListener('click',()=>{
    nav.classList.remove('active')
})



    



