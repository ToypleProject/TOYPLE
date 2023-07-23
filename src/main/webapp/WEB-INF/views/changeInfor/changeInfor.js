let id = document.getElementById('id');
let pwd = document.getElementById('pswd1');
let name = document.getElementById('name');
let mail = document.getElementById('email');
let check_comment = document.getElementById('pswd2Msg');
// id - 필수 입력 값입니다.
let msg1 = document.getElementById('Msg1');
// pwd - 필수 입력 값입니다.
let msg2 = document.getElementById('Msg2');
// name - 필수 입력 값입니다.
let msg3 = document.getElementById('Msg3');
// mail - 필수 입력 값입니다.
let msg4 = document.getElementById('Msg4');

// 오류가 왜 날까....??????
// 근데 작동에는 문제가 없음.......뭐지????
//name을 나는 let으로 선언했는데 const가 됨...왜????
let array = [id.value, pwd.value, mail.value, name.value];
let outvalue = [msg1, msg2, msg3, msg4];


// 비밀번호와 비밀번호 확인이 일치하는지 확인
function checking() {
    // console.log('checking start');
    let check_pw = document.getElementById('pswd2').value;
    let pw = document.getElementById('pswd1').value;
    let check_comment = document.getElementById('pswd2Msg');
    // console.log('check_pw : ' + check_pw);
    // console.log('pw : ' + pw);
    if(check_pw != pw) {
        check_comment.value = "0";
        check_comment.style.display='block';
    } else {
        check_comment.value = "1";
        check_comment.style.display='none';
    }
}

function input_ing() {
    let check_comment = document.getElementById('pswd2Msg');
    check_comment.style.display = 'none';
}

// 아이디와 비번, 이메일을 입력하지 않고 가입버튼을 눌렀을 때 '필수 입력란입니다.' 출력
function membership() {
    while(true) {
        // 필수 입력란이 비었는지 확인
        let checkvalue = 0;
        for(i = 0; i<array.length; i++) {
            if(outvalue[i].value != "0") {
                outvalue[i].style.display = 'block';
            } else {
                checkvalue += 1
                outvalue[i].style.display = 'none';
            }
        }
        if(checkvalue == (array.length)) {
            // 비밀번호 확인을 했는지 확인
            if(check_comment.value =="1") {
                // alert('회원가입에 성공하셨습니다!');
                // (로그인 안된)메인 페이지와 연결하기 or 로그인 화면으로 연결하기
                // setTimeout(function() {
                //     location.href = "../login/index.html";
                // }, 1500);
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: '회원가입 성공',
                    text : '로그인 화면으로 이동합니다.'
                  })
                setTimeout(function() {
                    location.href = "../login/index.html";
                }, 2000);
                // Swal.fire('회원가입이 완료되었습니다.', '', 'success');
            } else {
                // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@회원을 생성해야 함@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                // alert('비밀번호 확인 부탁드립니다.');
                Swal.fire({
                    title : '비밀번호 확인 부탁드립니다.',
                    icon : 'warning',
                    showConfirmButton : false,
                    timer : 1000,
                })
            }
        } else {
            // alert('필수 입력칸을 모두 채워주세요.');
            Swal.fire({
                title : '필수 입력칸을 모두 채워주세요.',
                icon : 'warning',
                showConfirmButton : false,
                timer : 1000,
            })
        }
        break;
    }
}

// 아이디 중복여부 검사 & 공백 검사
function id_repeat() {
    // 임시 변수 id_sample >> DB와 연동해서 값 가져오기??
    let id_sample = "aa";
    let msg1_2 = document.getElementById('Msg1_2');
    // 아이디에는 영어와 숫자만 입력가능하게 조건 걸기
    const regex = /^[a-z|A-Z|0-9|]+$/;
    if(regex.test(id.value)) {
        if(id_sample != id.value) {
            // console.log(id + sample);
            msg1_2.style.display = 'none';
            Swal.fire({
                title : '사용 가능한 아이디입니다.',
                icon : 'success',
                showConfirmButton : false,
                timer : 1000,
                // confirmButtonColor : '#F5EBE1',
            })
        } else if(id.value != '') {
            msg1_2.style.display = 'block';
            // alert('사용 중인 아이디 입니다.');
            Swal.fire({
                title : '사용중인 아이디입니다.',
                icon : 'warning',
                showConfirmButton : false,
                timer : 1000,
            })
        }

    } else {
        Swal.fire({
            title : '아이디에는 영어 또는 숫자만 입력해주세요.',
            icon : 'warning',
            showConfirmButton : false,
            timer : 1000,
        })
    }

    if(id.value == '') {
        outvalue[0].value = "1";
        // console.log('null');
    }
}

// 이메일 중복여부 검사 & 공백인지 체크
function mail_repeat() {
        // 임시 변수 m_sample >> DB와 연동해서 값 가져오기??
    let m_sample = "soojin_0503@naver.com";
    let msg4_2 = document.getElementById('Msg4_2');

    if(m_sample == mail.value) {
        // alert('가입 이력이 있는 이메일입니다.');
        Swal.fire({
            title : '가입 이력이 있는 이메일입니다.',
            text : '아이디 혹은 비밀번호 찾기를 이용해보세요.',
            icon : 'warning',
            showConfirmButton : false,
            timer : 1000,
        })
        msg4_2.style.display = 'block';
    } else if(mail != '') {
        msg4_2.style.display = 'none';
    }

    // email의 input값이 비었을 때 필수입력~~~ 문구 출력될 수 있게
    // console.log(mail.value);
    if(mail.value === '') {
        outvalue[3].value = "1";
        // console.log('mail.value');
    }
}

//이름 공백인지 체크
function name_repeat() {
    if(name.value == '') {
        outvalue[2].value = "1";
    }
}







// 비밀번호에 키보드로 입력되면 그걸 인식해서 "필수입력~~"이라는 문구를 출력안 시킴
function isnotnullcheck(str) {
    let num = parseInt(str);
    // console.log(obj.value);
    outvalue[num].value = "0";
    outvalue[num].style.display = 'none';
}



// id, name, email 정보 채우기


// DB에서 가져올 사용자 정보
let originalId = "ssssjjjj";
let originalEmail = "sssjjj@naver.com";
let originalName = "용수진";

function userInformation() {
    console.log(id.value);
    console.log(name.value);
    console.log(mail.value);

    id.value = originalId;
    name.value = originalName;
    mail.value = originalEmail;

    console.log(originalEmail);
    console.log(originalId);
    console.log(originalName);

    outvalue[0].value = "0";
    outvalue[2].value = "0";
    outvalue[3].value = "0";
    
}

