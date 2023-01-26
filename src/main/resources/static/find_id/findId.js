
    let name = document.getElementById('fname').value;
    let mail = document.getElementById('fmail').value;
    let msg1 = document.getElementById('Msg1');
    let msg2 = document.getElementById('Msg2');
// alert(name, mail);

function button_click() {
    let name = document.getElementById('fname').value;
    let mail = document.getElementById('fmail').value;
    let msg1 = document.getElementById('Msg1');
    let msg2 = document.getElementById('Msg2');


    // DB와 확인하여 맞는지 여부 체크해야 함
    if(name == '' && mail == '') {
        // console.log('둘다 null');
        msg1.style.display = 'block';
        msg2.style.display = 'block';
        Swal.fire({
            title : '필수 입력칸을 모두 채워주세요.',
            icon : 'warning',
            showConfirmButton : false,
            timer : 1000,
        })
    } else if(name != '' && mail == '') {
        // console.log('pwd가 null');
        msg1.style.display = 'none';
        msg2.style.display = 'block';
        Swal.fire({
            title : '필수 입력칸을 모두 채워주세요.',
            icon : 'warning',
            showConfirmButton : false,
            timer : 1000,
        })
    } else if(name == '' && mail != '') {
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
    //DB와 입력된 name & mail 대조
    let name_ex = '수진';
    let mail_ex = 'soojin_0503@naver.com';
    let name = document.getElementById('fname').value;
    let mail = document.getElementById('fmail').value;
    // console.log(id);
    // console.log(pwd);

    if(name_ex == name && mail_ex == mail) {
        // 아이디가 나와 있는 페이지와 연결하기
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
            title: '아이디 찾기 성공'
          })
        setTimeout(function() {
            location.href = "success_id/index.html";
        }, 2000);
        // location.href = "https://www.naver.com/";
    } else {
        // 아이디 또는 비밀번호가 일치하지 않을 경우
        // swal('아이디 또는 비밀번호를 다시 한번 확인해 주세요.');
        Swal.fire({
            title : '이름 또는 이메일을 다시 한번 확인해 주세요.',
            icon : 'warning',
            showConfirmButton : false,
            timer : 1000,
        })
    }

}