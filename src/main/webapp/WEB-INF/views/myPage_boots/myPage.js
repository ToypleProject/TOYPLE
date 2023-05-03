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





// 후기 관련 js
// 현재 슬라이드에서 보여지고 있는 프로젝트 번호 -> 프로젝트를 넘기면 후기도 자동으로 바뀔 수 있게...!
// 슬라이드에 있는 프로젝트들과 연결하기
let pj001 = "1";
let pj002 = "2";
let pj003 = "3";




// 정리!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// value는 input 속성이기에 div의 value는 attribute로 가져와야 한다!
// console.log(pj.getAttribute('value'));

// div value의 type을 확인함 -> string
// console.log(typeof pj.getAttribute('value'));
// console.log(pj.value);


// DB에서 값을 배열로 가져오기 -> 프로젝트별로 후기를 배열로 가져오기
let pj001_ = [["1홍길동1", "1 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.5], ["홍길동12", "12 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.1], ["홍길동123", "123 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.1], ["홍길동1234", "1234 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.1], ["홍길동12345", "12345 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.1], ["홍길동123456", "123456 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.1]];
let pj002_ = [["2홍길동1", "1 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.5], ["홍길동12", "12 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.1], ["홍길동123", "123 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.1], ["홍길동1234", "1234 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.1], ["홍길동12345", "12345 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.1], ["홍길동123456", "123456 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.1]];
let pj003_ = [["3홍길동1", "1 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.5], ["홍길동12", "12 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.1], ["홍길동123", "123 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.1], ["홍길동1234", "1234 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.1], ["홍길동12345", "12345 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.1], ["홍길동123456", "123456 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem", 4.1]];





// 현재 보여지는 슬라이드가 어떤 프로젝트인지 확인하고
// 프로젝트 별로 후기를 보여주기 -> table 태그 아래에 tr & th 생성해서!
function change(obj) {

    //연결하기!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // 현재 보여지고 있는 프로젝트 번호
    let pj = document.getElementsByClassName("active")[0];


    // 여러번 눌렀을 때 아래로 같은 내용이 추가되는 것이 아니라 기존의 데이터는
    // 삭제하고 다시 만들기!
    $("#li_table").empty();

    // 현재 보여지는 프로젝트의 번호를 연결해주기
    let pjnum = Number(pj.getAttribute("value"));
    // let pjnum = pj.getAttribute("value");

    // 슬라이드를 누르는 버튼이 왼쪽(pre)인지, 오른쪽(nex)인지에 따라 프로젝트 번호를 다르게 매겨야함.
    if(obj == "pre") {
        // console.log(obj);
        pjnum = pjnum==1 ? 3 : --pjnum;
        // console.log(obj + pjnum);

    }else if(obj == "nex") {
        // console.log(pjnum);
        pjnum = pjnum==3 ? 1 : ++pjnum;
        // console.log(obj + pjnum);

    }
    

    if(pjnum == "1") {
        // (5개의) tr 만들기 => 평가를 한 사람의 수만큼 tr 만들기
        var tabId = document.getElementById('li_table');
        for(var i = 0; i < pj001_.length; i++) {
            // test
            // eval(`var tr${i} = document.createElement('tr')`);
            // eval(`var th${i} = document.createElement('th')`);
            // eval(`th${i}.setAttribute('class', "lists__item js-load")`)
            // eval(`console.log(tr${i})`);
            // eval(`console.log(th${i})`);
    
            
    
            eval(`var tr${i} = document.createElement('tr')`);
            eval(`tr${i}.setAttribute('class', "lists__item js-load")`);
            // eval(`tabId.appendChild(tr${i})`);
            document.querySelector('#li_table').append(eval(`tr${i}`));
            // console.log('아래에 tabId 출력될거임' + tabId);
            // console.log('#li_table');
            // eval(`console.log(tabId)`);
            for(var j = 0; j < pj001_[i].length; j++) { 
                eval(`var th${j} = document.createElement('th')`);
                eval(`th${j}.style.cssText = 'border:1px solid gray;'`);
                eval(`th${j}.innerHTML = pj001_[${i}][${j}]`);
                // js를 통해 만든 html 태그들을 화면에 보일 수 있게 함.
                document.querySelector('.lists__item').append(eval(`th${j}`));
                eval(`tr${i}.appendChild(th${j})`);
            }
        }
    }
    else if(pjnum == "2") {
        // (5개의) tr 만들기 => 평가를 한 사람의 수만큼 tr 만들기
        var tabId = document.getElementById('li_table');
        for(var i = 0; i < pj002_.length; i++) {
            // test
            // eval(`var tr${i} = document.createElement('tr')`);
            // eval(`var th${i} = document.createElement('th')`);
            // eval(`th${i}.setAttribute('class', "lists__item js-load")`)
            // eval(`console.log(tr${i})`);
            // eval(`console.log(th${i})`);

            

            eval(`var tr${i} = document.createElement('tr')`);
            eval(`tr${i}.setAttribute('class', "lists__item js-load")`);
            // eval(`tabId.appendChild(tr${i})`);
            document.querySelector('#li_table').append(eval(`tr${i}`));
            // console.log('아래에 tabId 출력될거임' + tabId);
            // console.log('#li_table');
            // eval(`console.log(tabId)`);
            for(var j = 0; j < pj002_[i].length; j++) { 
                eval(`var th${j} = document.createElement('th')`);
                eval(`th${j}.style.cssText = 'border:1px solid orange;'`);
                eval(`th${j}.innerHTML = pj002_[${i}][${j}]`);
                // js를 통해 만든 html 태그들을 화면에 보일 수 있게 함.
                document.querySelector('.lists__item').append(eval(`th${j}`));
                eval(`tr${i}.appendChild(th${j})`);
            }
        }
    }
    else if(pjnum == "3") {
        // (5개의) tr 만들기 => 평가를 한 사람의 수만큼 tr 만들기
        var tabId = document.getElementById('li_table');
        for(var i = 0; i < pj003_.length; i++) {
            // test
            // eval(`var tr${i} = document.createElement('tr')`);
            // eval(`var th${i} = document.createElement('th')`);
            // eval(`th${i}.setAttribute('class', "lists__item js-load")`)
            // eval(`console.log(tr${i})`);
            // eval(`console.log(th${i})`);
    
            
    
            eval(`var tr${i} = document.createElement('tr')`);
            eval(`tr${i}.setAttribute('class', "lists__item js-load")`);
            // eval(`tabId.appendChild(tr${i})`);
            document.querySelector('#li_table').append(eval(`tr${i}`));
            // console.log('아래에 tabId 출력될거임' + tabId);
            // console.log('#li_table');
            // eval(`console.log(tabId)`);
            for(var j = 0; j < pj003_[i].length; j++) { 
                eval(`var th${j} = document.createElement('th')`);
                eval(`th${j}.style.cssText = 'border:1px solid orange;'`);
                eval(`th${j}.innerHTML = pj003_[${i}][${j}]`);
                // js를 통해 만든 html 태그들을 화면에 보일 수 있게 함.
                document.querySelector('.lists__item').append(eval(`th${j}`));
                eval(`tr${i}.appendChild(th${j})`);
            }
        }

    }
}