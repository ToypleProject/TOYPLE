function button_click() {

    let ex_code = 'QWER';
    let code = document.getElementById('code').value;
    let msg = document.getElementById('Msg1')
    // alert(code);

    if(code == ex_code) {
        msg.style.display = 'none';
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
            title: '비밀번호 변경 페이지로 이동'
        })
        setTimeout(function() {
            location.href = "../../change_userInfor/changeUserInfor.html";
        }, 2000);
    } else if(code == '') {
        msg.style.display = 'block';
    } else {
        Swal.fire({
            title : '다시 한번 확인해 주세요.',
            icon : 'warning',
            showConfirmButton : false,
            timer : 1000,
        })
    }

    
}

function agin_send() {
    //이메일로 전송코드 다시 보내기
    Swal.fire({
        title : '이메일을 확인해주세요.',
        icon : 'success',
        showConfirmButton : false,
        timer : 1000,
        // confirmButtonColor : '#F5EBE1',
    })
}