

function button_click() {
    let id = document.getElementById('id').value;
    let pwd = document.getElementById('pswd1').value;
    let msg1 = document.getElementById('Msg1');
    let msg2 = document.getElementById('Msg2');


    // DB와 확인하여 맞는지 여부 체크해야 함
    if(id == '' && pwd == '') {
        // console.log('둘다 null');
        msg1.style.display = 'block';
        msg2.style.display = 'block';
        Swal.fire({
            title : '필수 입력칸을 모두 채워주세요.',
            icon : 'warning',
            showConfirmButton : false,
            timer : 1000,
        })
    } else if(id != '' && pwd == '') {
        // console.log('pwd가 null');
        msg1.style.display = 'none';
        msg2.style.display = 'block';
        Swal.fire({
            title : '필수 입력칸을 모두 채워주세요.',
            icon : 'warning',
            showConfirmButton : false,
            timer : 1000,
        })
    } else if(id == '' && pwd != '') {
        // console.log('id가 null');
        msg1.style.display = 'block';
        msg2.style.display = 'none';
        Swal.fire({
            title : '필수 입력칸을 모두 채워주세요.',
            icon : 'warning',
            showConfirmButton : false,
            timer : 1000,
        })
    } else {
        // console.log('else');
        msg1.style.display = 'none';
        msg2.style.display = 'none';
        checkting();
    }
}

function checkting() {
    //DB와 입력된 id & password 대조
    let id_ex = 'soojin';
    let pwd_ex = '123';
    let id = document.getElementById('id').value;
    let pwd = document.getElementById('pswd1').value;
    // console.log(id);
    // console.log(pwd);

    if(id_ex == id && pwd_ex == pwd) {
        // 로그인된 메인 페이지와 연결하기
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
            title: '로그인 성공',
            text : '메인 화면으로 이동합니다.'
          })
        setTimeout(function() {
            location.href = "https://www.naver.com/";
        }, 2000);
        // location.href = "https://www.naver.com/";
    } else {
        // 아이디 또는 비밀번호가 일치하지 않을 경우
        // swal('아이디 또는 비밀번호를 다시 한번 확인해 주세요.');
        Swal.fire({
            title : '아이디 또는 비밀번호를 다시 한번 확인해 주세요.',
            icon : 'warning',
            showConfirmButton : false,
            timer : 1000,
        })
    }

}