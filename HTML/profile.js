let nickname = document.querySelector("#user-name")
let nickname_pattern= new RegExp("^[가-힣]{2,10}$")
nickname.onchange= checkname;
function checkname(){
	 if (!nickname_pattern.test(nickname.value)) {
    alert('2~10자리의 한글로 입력해주세요.')
	nickname.focus(); 
  } 
}



let introduce = document.getElementById(introduce)
let introduce_pattern = new RegExp("")
