// 버튼을 누르지 않은 상태에서는 4개를 보이게 하고,
// [더보기] 버튼을 클릭했을 때 2개씩 보이도록..
// $(window).on('load', function () {
//     load('#js-load', '4');
//     $("#js-btn-wrap .button").on("click", function () {
//         load('#js-load', '2', '#js-btn-wrap');
//     })
// });

// a태그 안에 텍스트 가져옴 -> 초기에는 더보기, 후기에는 감추기
// let btnText = document.getElementById('btnText');
// console.log(btnText.innerText);
// tr의 개수 파악을 위해서..
// let total = 0;
 
// function load(id, cnt) {
//     var girls_list = id + " .js-load:not(.active)";
//     var girls_length = $(girls_list).length;
//     var girls_total_cnt;
//     // html이 load 되자마자 1번 실행이 됨. 그때 girls_length에 tr의 개수가 들어감.
//     // [더보기] 버튼을 누르면 1번 더 실행이 됨. 그때 girls_length에는 tr의 원래 개수 - 초기에 보여준 개수의 연산값이 나옴
//     // console.log(girls_length);

//     // cnt에는 보여주고 있는, active 상태로 전환해줄 tr의 개수가 들어가 있음
//     // 예> 초기에 cnt = 4, [더보기] 클릭시 cnt = 2
//     // console.log(cnt);

//     // 애초에 tr의 개수가 4개거나 4개보다 적을 때에는 더 보여줄 게 없기 때문에
//     // 버튼을 삭제
//     let trcnt = document.getElementsByTagName("tr").length;
//     // console.log(trcnt);
//     if(trcnt <= 4) {
//         $('.button').hide()
//     }

//     if(btnText.innerText == "더보기") {
//         if (cnt < girls_length) {
//             girls_total_cnt = cnt;
//             // console.log("1 : " + total);
//             total += parseInt(girls_total_cnt);
//             // console.log("girls" + girls_total_cnt);
//             // console.log("2 : " + total);
//         } else {
//             girls_total_cnt = girls_length;
//             btnText.innerText = "감추기";
//             total += parseInt(girls_total_cnt);
//             // console.log("last : " + total);
//             // 보여줄 tr이 없을 때, 버튼을 사라지게 함.
//             // $('.button').hide()

//             // 마지막에 활성화시킨 개수 예) tr이 5개라면 초기에 4개를 보여주니,
//             //1개만 추가적으로 보여지고나서 "감추기"로 텍스트가 바뀜.
//             //따라서 girls_total_cnt == 1
//             // console.log(girls_total_cnt);
//         }
//     }else if(btnText.innerText == "감추기") {
//         // test
//         // 참고 사이트 : https://www.w3schools.com/howto/howto_js_remove_class.asp
//         let actives = [];
//         actives = new Array(document.getElementsByClassName("active"));

//         // console.log(actives);
//         let ii = actives[0].length-1;
//         while(actives[0].length > 4) {
//             actives[0][ii].classList.remove("active");
//             // console.log(actives[0][ii]);
//             ii--;
//         }
//         btnText.innerText = "더보기";
//         // console.log(actives);
//         // console.log(actives[0]);

//         // console.log(actives[0][0]);
//         // actives[0][0].classList.remove("active");
//         // console.log(actives[0][0]);
        
//         // console.log(actives[0][1]);
//         // actives[0][1].classList.remove("active");
//         // console.log(actives[0][1]);


//     }
//     // girls_total_cnt 개수만큼 tr의 class에 active를 추가해줌
//     $(girls_list + ":lt(" + girls_total_cnt + ")").addClass("active");
// }

// 현재 슬라이드에서 보여지고 있는 프로젝트 번호 -> 프로젝트를 넘기면 후기도 자동으로 바뀔 수 있게...!
// 슬라이드에 있는 프로젝트들과 연결하기
let pj001 = "1";
let pj002 = "2";
let pj003 = "3";

//연결하기!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 현재 보여지고 있는 프로젝트 번호
let pj = document.getElementById("test_thisIsSlides");
// console.log(pj);



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
function change() {

    // 여러번 눌렀을 때 아래로 같은 내용이 추가되는 것이 아니라 기존의 데이터는
    // 삭제하고 다시 만들기!
    $("#li_table").empty();

    // 현재 보여지는 프로젝트의 번호를 연결해주기
    let pjnum = pj.getAttribute("value");

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
                eval(`th${j}.style.cssText = 'border:1px solid orange;'`);
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

    // 5개의 변수 만들기
    // for(var i = 0; i < 5; i++) {
    //     eval(`var variable_${i} = ${i}`);
    //     eval(`console.log(variable_${i})`);
    // }



    // if(pjnum == "1") {
    //     console.log("1");
    //     for(let i=0; i<pj001_.length; i++) {
    //         let tabId = document.getElementById('li_table');
    //         let newTr = document.createElement('tr');
    //         let newTh = document.createElement('th');
    //         // console.log(pj001_[i]);
    //         let test = newTr;
    //         // console.log(i);
    //         test.setAttribute('class', "lists__item js-load");
    //         for(let j=0; j<3; j++) {
    //             // console.log(pj001_[i][j]);
    //             let ttest = newTh;
    //             if(j == 1){
    //                 ttest.setAttribute("id", j);
    //                 ttest.innerHTML = pj001_[i][j];
    //                 test.appendChild(ttest);
    //                 continue;
    //             }
    //             ttest.setAttribute("id", j);
    //             ttest.style.cssText = "border: 1px soli orange; width: 20%;";
    //             // newTh.classList.add('border:1px solid orange;width:20%');
    //             ttest.innerHTML = pj001_[i][j];
    //             test.appendChild(ttest);
    //         }
    //         tabId.appendChild(newTr);
    //     }



    // }
    // else if(pjnum == "2") {
    //     console.log("2");
        
    // }
    // else if(pjnum == "3") {
    //     console.log("3");

    // }
    // let add = document.getElementById("addtest");
    // let div = document.createElement('div');

    // div.style.cssText = "border: 10px solid red; width: 100px";
    // div.innerHTML = "TTTTTTTTTTTTTTTTTTTTTTTTT";
    // div.setAttribute("id", ii);
    // ii++;
    // add.appendChild(div);
    // div.style.cssText = "border: 10px solid red; width: 100px";
    // div.innerHTML = "1111111111111111111";
    // add.appendChild(div);
    // div.setAttribute("id", ii);
    // ii++;
}





















// 슬라이드 변화 상관없이 모든 후기들 가져오기
// DB로 부터 값 가져오기
// let user1 = "홍길동1";
// let user2 = "홍길동2";
// let user3 = "홍길동3";
// let user4 = "홍길동4";
// let user5 = "홍길동5";
// let user6 = "홍길동6";
// let user7 = "홍길동7";
// let user8 = "홍길동8";
// let user9 = "홍길동9";
// let user10 = "홍길동10";

// let star1 = 5;
// let star2 = 3.7;
// let star3 = 4;
// let star4 = 0.1;
// let star5 = 4.6;
// let star6 = 2.1;
// let star7 = 4.9;
// let star8 = 3.1;
// let star9 = 1.9;
// let star10 = 5.0;

// let text1 = "1 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
// let text2 = "2 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
// let text3 = "3 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
// let text4 = "4 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
// let text5 = "5 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
// let text6 = "6 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
// let text7 = "7 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
// let text8 = "8 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
// let text9 = "9 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
// let text10 = "10 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"



