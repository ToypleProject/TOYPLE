let Name = document.getElementById("userName");
let Email = document.getElementById("userEmail");
let btn = document.getElementById("change");

//DB에서 가져올 사용자 데이터
let uName = "용수진";
let uEmail = "sj@naver.com";

console.log(Name.value);
console.log(Email.value);

Name.value = uName;
Email.value = uEmail;

// console.log(Name.value);
// console.log(Email.value);


//정보수정 버튼을 눌렀을 때 이름 & 이메일 정보를 수정할 수 있게 한다.
function ch_click() {
    if(btn.innerHTML == "정보수정") {
        Name.disabled = false;
        Email.disabled = false;
        btn.innerHTML = "수정완료"

        // 변경된 정보
        // console.log(Name.value);
        // console.log(Email.value);

        // console.log("끝1");

    } else if(btn.innerHTML == "수정완료") {  
        Name.disabled = true;
        Email.disabled = true;
        btn.innerHTML = "수정 완료"

        // 변경된 정보
        // console.log(Name.value);
        // console.log(Email.value);
        
        // console.log("끝2");  

    }
}