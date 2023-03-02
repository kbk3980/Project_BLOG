let id = document.querySelector("#user-id")
let id_pattern = new RegExp("^[a-z0-9][a-z0-9!-]{5,14}$")

let pw_compare = document.querySelector("#user-pwcheck")

id.onchange = checkid;

pw_compare.onchange = compw;


function compw() {						
	if(pw.value != pw_compare.value) {
		alert("암호가 다릅니다. 다시 입력하세요.");
			pw_compare.value = "";  // ‘비밀번호 확인’ 필드 지움
			pw_compare.focus();   // 비밀번호를 다시 입력할 수 있게 포커싱
		}
	}
function checkid() 
{
  if (!id_pattern.test(id.value)) {
    alert('6~15자리의 영문 소문자 , 숫자와 특수기호 (!),(-)만 사용가능합니다.')
	id.focus(); 
  } 
}

let pw = document.querySelector("#user-pw")
let pw_pattern = new RegExp("^[a-zA-Z](?=.*[a-zA-Z])(?=.*[0-9]).{7,14}$")
/*       ("^(?=.*[0-9]+)[a-z][a-z0-9]{5,14}$") /*정규식 찾아봐도 안보여서 참고하면서 제작중  */
pw.onchange = checkpw;
function checkpw() 
{
  if (!pw_pattern.test(pw.value)) {
    alert('8~15자리 영문 대,소문자 숫자를 사용하여 다시 입력해주세요.')
	pw.focus(); 
  } 
}

let nickname = document.querySelector("#user-name")
let nickname_pattern= new RegExp("^[가-힣]{1,9}$")
nickname.onchange= checkname;
function checkname(){
	 if (!nickname_pattern.test(nickname.value)) {
    alert('2~10자리의 한글로 입력해주세요.')
	nickname.focus(); 
  } 
}