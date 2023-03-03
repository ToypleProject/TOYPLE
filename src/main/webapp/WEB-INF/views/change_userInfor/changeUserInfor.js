function change_pwd() {
    let pswd1 = document.getElementById('pswd1').value;
    let pswd2 = document.getElementById('pswd2').value;
    let msg = document.getElementById('Msg');
    let pswdMsg = document.getElementById('pswdMsg');

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

    if(pswd1 == '') {
        msg.style.display = 'block';
        
        Swal.fire({
            title : '필수 입력칸을 모두 채워주세요.',
            icon : 'warning',
            showConfirmButton : false,
            timer : 1000,
        })
    } else {
        msg.style.display = 'none';
        if(pswd1 == pswd2) {
            pswdMsg.style.display = 'none';
            Toast.fire({
                icon: 'success',
                title: '비밀번호 변경 완료',
                text : '로그인 화면으로 이동합니다.'
              })
            setTimeout(function() {
                location.href = "../../../login/index.html";
            }, 2000);
        } else {
            pswdMsg.style.display = 'block';
            Swal.fire({
                title : '비밀번호 확인 부탁드립니다.',
                icon : 'warning',
                showConfirmButton : false,
                timer : 1000,
            })
        }
    }
}