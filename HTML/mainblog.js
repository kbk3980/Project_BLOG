
let openmenu =document.getElementById("openmenu");
let menuicon = document.getElementById("menuicon");
var count= 0;
openmenu.onclick = function (){
    if(count%2==1){
        openmenu.src="openmenu.png";
    }
    else{
        openmenu.src="cancel.png";
    }
    count++;
    }

let search = document.querySelector(".search");
let clear = document.querySelector(".clear");

search.onclick=function(){
{
    document.querySelector(".area_search").classList.toggle('active');
}
clear.onclick=function(){
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