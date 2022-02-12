let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
}

var load=document.querySelector(".load");
/*...........scroll............*/

var arrows = document.querySelectorAll(".arrow");
var scroll = document.querySelector(".scroll");
arrows.forEach(arrow => {
    arrow.onclick = function () {
        if (arrow.classList.contains("arrow1")) {
            scroll.scrollLeft -= 35;
        } else {
            scroll.scrollLeft += 35;
        }
    }
});
var arrs = document.querySelectorAll(".arr2");
var scr2=document.querySelector(".scr2");
arrs.forEach(arr => {
    arr.onclick = function () {
        if (arr.classList.contains("arr1")) {
            scr2.scrollLeft -= 35;
        } else {
            scr2.scrollLeft += 35;
        }
    }
});

var alls = document.querySelectorAll(".arr4");
var scr3=document.querySelector(".scr3");
alls.forEach(all => {
    all.onclick = function () {
        if (all.classList.contains("arr3")) {
            scr3.scrollLeft -= 35;
        } else {
            scr3.scrollLeft += 35;
        }
    }
});



//counter
let vvs=document.querySelectorAll(".vvv");
let number=document.querySelector(".vvn");
console.log(vvs)
vvs.forEach((vv)=>{
    vv.onclick=function () {
        if (vv.classList.contains("vv2")) {
            number.innerHTML=Number(number.innerText) + Number(1);
    
        } else {
            if ( number.innerHTML>1) {
                number.innerHTML-=1;
            }
            else{
                number.innerHTML=1;
            }
        }
    }
 
})

