let cate = document.querySelector(".cate-show");
let btn = document.querySelector(".cate-btn");

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let down = document.getElementsByClassName('fas')[0];
let down1 = document.getElementsByClassName("fas")[1];

let neig = document.getElementsByClassName("neig-show")[0];
let neigbtn = document.getElementsByClassName("neig-btn")[0];
/*btn.addEventListener('click',function(){
  if(sidebar.contains('open')){
    
  }
})*/
neigbtn.addEventListener("click",function(){
  if(sidebar.classList.contains("open")){
   {
     
      neig.classList.toggle("show");
      down1.classList.toggle("rotate");
    }
  }

})
btn.addEventListener("click",function(){
  if(sidebar.classList.contains("open")){
   {
     
      cate.classList.toggle("show");
      down.classList.toggle("rotate");
    }
  }

})

let up =document.querySelector(".cate-show show");

closeBtn.addEventListener("click", ()=>{   //메뉴버튼을 누르면
  sidebar.classList.toggle("open");  // 사이드바가 펼쳐짐
  down.style.display= "block";
  down1.style.display="block";
   if(!sidebar.classList.contains("open")){
   {
      down1.classList.remove("rotate");
      down.classList.remove("rotate");
      cate.classList.remove("show");
      neig.classList.remove("show");
      down.style.display= "none";
      down1.style.display="none";
    }
  }
  /* if(sidebar.classList.contains('open')){  //사이드바에 open class 가 포함이 되면
    $('.cate-btn').click(function(){  //카테고리 버튼을 누르면 함수 실행
      $('.cate-show').toggleClass("show");  // 스위치 온오프 왔다리 갔다리
      $('.first').toggleClass("rotate");  // 이건 화살표 방향이라 신경x
      
    });
  }
  else{    //사이드바에 open class가 포함이 안되면
   
  }*/
  menuBtnChange();
});


searchBtn.addEventListener("click", ()=>{ 
  sidebar.classList.toggle("open");
  menuBtnChange(); 
});


function menuBtnChange() {
  if(sidebar.classList.contains("open")){
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right","first");
  
   }else {
    
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu","first");
   }
}



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
$('.friend-btn').click(function(){
    $('ul .show').toggleClass("show1");
    $('ul .second').toggleClass("rotate");
    
});

*/