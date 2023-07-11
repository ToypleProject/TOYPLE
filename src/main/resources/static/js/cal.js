let nowMonth_start = new Date();  // 현재 달을 페이지를 로드한 날의 달로 초기화
let today_start = new Date();     // 페이지를 로드한 날짜를 저장
today_start.setHours(0,0,0,0);    // 비교 편의를 위해 today의 시간을 초기화

let nowMonth_end = new Date();  // 현재 달을 페이지를 로드한 날의 달로 초기화
let today_end = new Date();     // 페이지를 로드한 날짜를 저장
today_end.setHours(0,0,0,0);    // 비교 편의를 위해 today의 시간을 초기화

// 달력 생성 : 해당 달에 맞춰 테이블을 만들고, 날짜를 채워 넣는다.
function buildCalendar_start() {

    let firstDate = new Date(nowMonth_start.getFullYear(), nowMonth_start.getMonth(), 1);     // 이번달 1일
    let lastDate = new Date(nowMonth_start.getFullYear(), nowMonth_start.getMonth() + 1, 0);  // 이번달 마지막날

    let tbody_Calendar_start = document.querySelector(".Calendar_start > tbody");
    document.getElementById("calYear_start").innerText = nowMonth_start.getFullYear();             // 연도 숫자 갱신
    document.getElementById("calMonth_start").innerText = leftPad(nowMonth_start.getMonth() + 1);  // 월 숫자 갱신

    while (tbody_Calendar_start.rows.length > 0) {                        // 이전 출력결과가 남아있는 경우 초기화
        tbody_Calendar_start.deleteRow(tbody_Calendar_start.rows.length - 1);
    }

    let nowRow = tbody_Calendar_start.insertRow();        // 첫번째 행 추가           

    for (let j = 0; j < firstDate.getDay(); j++) {  // 이번달 1일의 요일만큼
        let nowColumn = nowRow.insertCell();        // 열 추가
    }

    for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {   // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복  

        let nowColumn = nowRow.insertCell();        // 새 열을 추가하고
        nowColumn.innerText = leftPad(nowDay.getDate());      // 추가한 열에 날짜 입력

    
        if (nowDay.getDay() == 0) {                 // 일요일인 경우 글자색 빨강으로
            nowColumn.style.color = "#DC143C";
        }
        if (nowDay.getDay() == 6) {                 // 토요일인 경우 글자색 파랑으로 하고
            nowColumn.style.color = "#0000CD";
            nowRow = tbody_Calendar_start.insertRow();    // 새로운 행 추가
        }


        if (nowDay < today_start) {                       // 지난날인 경우
            nowColumn.className = "pastDay_start";
        }
        else if (nowDay.getFullYear() == today_start.getFullYear() && nowDay.getMonth() == today_start.getMonth() && nowDay.getDate() == today_start.getDate()) { // 오늘인 경우           
            nowColumn.className = "today_start";
            let proj_req_start = document.getElementById("proj_req_start");
            proj_req_start.value = today_start.getFullYear() + "-" + leftPad(nowMonth_start.getMonth() + 1) + "-" + leftPad(nowMonth_start.getDate());
            nowColumn.onclick = function () { choiceDate_start(this); }
        }
        else {                                      // 미래인 경우
            nowColumn.className = "futureDay_start";
            nowColumn.onclick = function () { choiceDate_start(this); }
        }
    }
}

// 날짜 선택
function choiceDate_start(nowColumn) {
    if (document.getElementsByClassName("choiceDay_start")[0]) {                              // 기존에 선택한 날짜가 있으면
        document.getElementsByClassName("choiceDay_start")[0].classList.remove("choiceDay_start");  // 해당 날짜의 "choiceDay" class 제거
    }
    nowColumn.classList.add("choiceDay_start");           // 선택된 날짜에 "choiceDay" class 추가
    let proj_req_start = document.getElementById("proj_req_start");
    proj_req_start.value = nowMonth_start.getFullYear() + "-" + leftPad(nowMonth_start.getMonth() + 1) + "-" + document.getElementsByClassName("choiceDay_start")[0].innerHTML;
}

// 이전달 버튼 클릭
function prevCalendar_start() {
    nowMonth_start = new Date(nowMonth_start.getFullYear(), nowMonth_start.getMonth() - 1, nowMonth_start.getDate());   // 현재 달을 1 감소
    buildCalendar_start();    // 달력 다시 생성
}
// 다음달 버튼 클릭
function nextCalendar_start() {
    nowMonth_start = new Date(nowMonth_start.getFullYear(), nowMonth_start.getMonth() + 1, nowMonth_start.getDate());   // 현재 달을 1 증가
    buildCalendar_start();    // 달력 다시 생성
}






// 달력 생성 : 해당 달에 맞춰 테이블을 만들고, 날짜를 채워 넣는다.
function buildCalendar_end() {

    let firstDate_end = new Date(nowMonth_end.getFullYear(), nowMonth_end.getMonth(), 1);     // 이번달 1일
    let lastDate_end = new Date(nowMonth_end.getFullYear(), nowMonth_end.getMonth() + 1, 0);  // 이번달 마지막날

    let tbody_Calendar_end = document.querySelector(".Calendar_end > tbody");
    document.getElementById("calYear_end").innerText = nowMonth_end.getFullYear();             // 연도 숫자 갱신
    document.getElementById("calMonth_end").innerText = leftPad(nowMonth_end.getMonth() + 1);  // 월 숫자 갱신

    while (tbody_Calendar_end.rows.length > 0) {                        // 이전 출력결과가 남아있는 경우 초기화
        tbody_Calendar_end.deleteRow(tbody_Calendar_end.rows.length - 1);
    }

    let nowRow = tbody_Calendar_end.insertRow();        // 첫번째 행 추가           

    for (let j = 0; j < firstDate_end.getDay(); j++) {  // 이번달 1일의 요일만큼
        let nowColumn = nowRow.insertCell();        // 열 추가
    }

    for (let nowDay = firstDate_end; nowDay <= lastDate_end; nowDay.setDate(nowDay.getDate() + 1)) {   // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복  

        let nowColumn = nowRow.insertCell();        // 새 열을 추가하고
        nowColumn.innerText = leftPad(nowDay.getDate());      // 추가한 열에 날짜 입력

    
        if (nowDay.getDay() == 0) {                 // 일요일인 경우 글자색 빨강으로
            nowColumn.style.color = "#DC143C";
        }
        if (nowDay.getDay() == 6) {                 // 토요일인 경우 글자색 파랑으로 하고
            nowColumn.style.color = "#0000CD";
            nowRow = tbody_Calendar_end.insertRow();    // 새로운 행 추가
        }


        if (nowDay < today_end) {                       // 지난날인 경우
            nowColumn.className = "pastDay_end";
        }
        else if (nowDay.getFullYear() == today_end.getFullYear() && nowDay.getMonth() == today_end.getMonth() && nowDay.getDate() == today_end.getDate()) { // 오늘인 경우           
            nowColumn.className = "today_end";
            let proj_req_end = document.getElementById("proj_req_end");
            proj_req_end.value = today_end.getFullYear() + "-" + leftPad(nowMonth_end.getMonth() + 1) + "-" + leftPad(nowMonth_end.getDate());
            nowColumn.onclick = function () { choiceDate(this); }
        }
        else {                                      // 미래인 경우
            nowColumn.className = "futureDay_end";
            nowColumn.onclick = function () { choiceDate(this); }
        }
    }
}

// 날짜 선택
function choiceDate(nowColumn) {
    if (document.getElementsByClassName("choiceDay_end")[0]) {                              // 기존에 선택한 날짜가 있으면
        document.getElementsByClassName("choiceDay_end")[0].classList.remove("choiceDay_end");  // 해당 날짜의 "choiceDay" class 제거
    }
    nowColumn.classList.add("choiceDay_end");           // 선택된 날짜에 "choiceDay" class 추가
    let proj_req_end = document.getElementById("proj_req_end");
    proj_req_end.value = nowMonth_end.getFullYear() + "-" + leftPad(nowMonth_end.getMonth() + 1) + "-" + document.getElementsByClassName("choiceDay_end")[0].innerHTML;
}

// 이전달 버튼 클릭
function prevCalendar_end() {
    nowMonth_end = new Date(nowMonth_end.getFullYear(), nowMonth_end.getMonth() - 1, nowMonth_end.getDate());   // 현재 달을 1 감소
    buildCalendar_end();    // 달력 다시 생성
}
// 다음달 버튼 클릭
function nextCalendar_end() {
    nowMonth_end = new Date(nowMonth_end.getFullYear(), nowMonth_end.getMonth() + 1, nowMonth_end.getDate());   // 현재 달을 1 증가
    buildCalendar_end();    // 달력 다시 생성
}




// input값이 한자리 숫자인 경우 앞에 '0' 붙혀주는 함수
function leftPad(value) {
    if (value < 10) {
        value = "0" + value;
        return value;
    }
    return value;
}