let Name = document.getElementById("userName");
let Email = document.getElementById("userEmail");
let Intro = document.getElementById("intro");
let btn = document.getElementById("change");
let Pub = document.getElementById("public");

// 프로젝트
//T => 프로젝트 title
//C => 프로젝트 content
let Tpj1 = document.getElementById("pj1_h1");
let Cpj1 = document.getElementById("pj1_text");
let Tpj2 = document.getElementById("pj2_h1");
let Cpj2 = document.getElementById("pj2_text");
let Tpj3 = document.getElementById("pj3_h1");
let Cpj3 = document.getElementById("pj3_text");


//DB에서 가져올 사용자 데이터
let uName = "용수진";
let uEmail = "sj@naver.com";
let uIntro = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perferendis!";

// DB에서 가져올 공개여부 data
let uPub = false;

// DB에서 가져올 정보
// 클릭된 프로젝트별로 설명 & 평점 페이지 url
let upj1 = "https://naver.com";
let upj2 = "https://www.google.com/";
let upj3 = "https://www.youtube.com/";

// DB에서 가져올 정보
// 프로젝트 제목 & 설명
let uTpj1 = "이건 첫번째 프로젝트의 타이틀이다.";
let uCpj1 = "이건 첫번쨰 프로젝트의 설명이다~";
let uTpj2 = "이건 두번쨰";
let uCpj2 = "lorem이 쌍따옴표 안에서는 안돼...그래서 슬퍼";
let uTpj3 = "세...번쨰";
let uCpj3 = "하아..끝났다~~~~";

// console.log(Name.value);
// console.log(Email.value);
// console.log(Intro.value);

Name.value = uName;
Email.value = uEmail;
Intro.value = uIntro;

// console.log(Name.value);
// console.log(Email.value);
// console.log(Intro.value);




//정보수정 버튼을 눌렀을 때 이름 & 이메일 & 자기소개 & 공개여부 정보를 수정할 수 있게 한다.
function ch_click() {
    if(btn.innerHTML == "정보수정") {
        // Name.disabled = false;
        // Email.disabled = false;
        Intro.disabled = false;
        Pub.disabled = false;
        btn.innerHTML = "수정완료"

    } else if(btn.innerHTML == "수정완료") {  
        // DB에 변경된 내용 저장
        // uName = Name.value;
        // uEmail = Email.value;
        uIntro = Intro.value;
        uPub = Pub.checked;

        // Name.disabled = true;
        // Email.disabled = true;
        Intro.disabled = true;
        Pub.disabled = true;
        btn.innerHTML = "정보수정"

        // 변경된 정보
        // console.log(Name.value);
        // console.log(Email.value);
        // console.log(Intro.value);
        // console.log(Pub.checked);
        
        // console.log("끝2");  

    }
}


// 프로젝트가 클릭됐을 때
// 프로젝트 설명 & 평점이 부여된 페이지로 이동
function project(obj) {

    // 현재 창에서 이동
    // location.href="https://naver.com";

    // 새창으로 이동된 페이지 띄우기
    // window.open("https://naver.com");

    if(obj == 'pj1') {
        window.open(upj1);
    }else if(obj == 'pj2') {
        window.open(upj2);
    }else if(obj == 'pj3') {
        window.open(upj3);
    }else {
        alert("문제가 발생하였습니다. 관리자에게 연락주시기 바랍니다.");
    }
}



// 공개여부 데이터를 DB에서 가져와서 체크박스에 적용하기
if(uPub) {
    Pub.checked = true;
} else {
    Pub.checked = false;
}

// 프로젝트명 & 소개 DB에서 데이터 가져와서 적용하기

Tpj1.innerText = uTpj1;
Cpj1.innerText = uCpj1;
Tpj2.innerText = uTpj2;
Cpj2.innerText = uCpj2;
Tpj3.innerText = uTpj3;
Cpj3.innerText = uCpj3;


