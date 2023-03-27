const openmenu =document.getElementById("openmenu");
const menuicon = document.getElementById("menuicon");
let count= 0;


openmenu.onclick = function (){
    if(count%2==1){
        openmenu.src="openmenu.png";
    }
    else{
        openmenu.src="cancel.png";
    }
    count++;
    }

let btn_search = document.querySelector(".search");
let btn_clear = document.querySelector(".clear");

btn_search.onclick=function(){
{
    document.querySelector(".area_search").classList.toggle('active');
}
btn_clear.onclick=function(){
    {
        document.getElementById("search").value = "";
    }

}
}
/*
if(openmenu.src="openmenu.png")
{
    openmenu.src="cancel.png";
}
else if(openmenu.src="cancel.png")
{
    openmenu.src="openmenu.png";
}
*/

const openbutton= document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal_overlay");
const closebtn = modal.querySelector(".asd");

const openModal =() => {
    modal.classList.remove("hidden");
}

const closeModal= () => {
    modal.classList.add("hidden");
}
openbutton.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
closebtn.addEventListener("click", closeModal);












