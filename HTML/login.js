let eyeicon =document.getElementById("eyeicon");
let password = document.getElementById("user-pw");

eyeicon.onclick = function(){
    if(password.type=="password"){
        password.type="text";
        eyeicon.src="eye-open.png";
    }
    else {
        password.type="password";
        eyeicon.src="eye-close.png";
    }
}
/*
window.onload=function(){

    const pw_show_hide = document.querySelector('.pw_show_hide')
    const input_id=document.querySelector('input[type=text]')
    const input_pw=document.querySelector('input[type=password]')
    const id_error= document.querySelector('.id_error')
    const pw_error= document.querySelector('.pw_error')
    console.log(pw_show_hide, input_id, input_pw, id_error, pw_error)
    
    input_id.addEventListener('click',function(){
        id_error.style.display= 'block'
    })
    input_pw.addEventListener('click',function(){
        pw_error.style.display= 'block'
    })
    
    let i=true
   
    pw_show_hide.addEventListener('click',function()
    {
        if(i==true){
            pw_show_hide.style.backgroundPosition='0'
            i=false
        }else{
            pw_show_hide.style.backgroundPosition='0'
            i=true
        }

    })
}
*/

var id = document.querySelector("#user-id")
var id_pattern = new RegExp("^[a-z0-9][a-z0-9!-]{5,14}$")


var pw_compare = document.querySelector("#user-pwcheck")

id.onchange = checkid;

function checkid() 
{
  if (!id_pattern.test(id.value)) {
    alert('6~15자리의 영문 소문자 , 숫자와 특수기호 (!),(-)만 사용가능합니다.')
	id.focus(); 
  } 
}

var pw = document.querySelector("#user-pw")
var pw_pattern = new RegExp("^[a-zA-Z](?=.*[a-zA-Z])(?=.*[0-9]).{7,14}$")
/*       ("^(?=.*[0-9]+)[a-z][a-z0-9]{5,14}$") /*정규식 찾아봐도 안보여서 참고하면서 제작중  */
pw.onchange = checkpw;
function checkpw() 
{
  if (!pw_pattern.test(pw.value)) {
    alert('8~15자리 영문 대,소문자 숫자를 사용하여 다시 입력해주세요.')
	pw.focus(); 
  } 
}
