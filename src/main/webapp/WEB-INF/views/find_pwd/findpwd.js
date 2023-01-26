let id = document.getElementById('fid');
let name = document.getElementById('fname');
let mail = document.getElementById('fmail');
let msg2 = document.getElementById('Msg1');
let msg3 = document.getElementById('Msg2');
let msg1 = document.getElementById('Msg3');
// id = msg1, name = msg2, mail = msg3

function button_click() {
    // alert(id);
    // alert(id.value);
    // alert(name);
    // alert(name.value);
    // alert(mail);
    // alert(mail.value);

    // DB와 확인하여 맞는지 여부 체크해야 함
    if(id.value == '' || name.value == '' || mail.value == '') {
        if(id.value != '') {
            msg1.style.display = 'none';
            if(name.value == '' && mail.value == '') {
                msg1.style.display = 'none';
                msg2.style.display = 'block';
                msg3.style.display = 'block';
                Swal.fire({
                    title : '필수 입력칸을 모두 채워주세요.',
                    icon : 'warning',
                    showConfirmButton : false,
                    timer : 1000,
                })
            } else if(name.value == '') {
                msg1.style.display = 'none';
                msg2.style.display = 'block';
                msg3.style.display = 'none';
                Swal.fire({
                    title : '필수 입력칸을 모두 채워주세요.',
                    icon : 'warning',
                    showConfirmButton : false,
                    timer : 1000,
                })
            } else {
                msg1.style.display = 'none';
                msg2.style.display = 'none';
                msg3. style.display = 'block';
                Swal.fire({
                    title : '필수 입력칸을 모두 채워주세요.',
                    icon : 'warning',
                    showConfirmButton : false,
                    timer : 1000,
                })
            }
        } else if(name.value != '') {
            msg1.style.display = 'block';
            msg2.style.display = 'none';
            if(mail.value == '') {
                msg1.style.display = 'block';
                msg2.style.display = 'none';
                msg3.style.display = 'block';
                Swal.fire({
                    title : '필수 입력칸을 모두 채워주세요.',
                    icon : 'warning',
                    showConfirmButton : false,
                    timer : 1000,
                })
            } else {
                msg1.style.display = 'block';
                msg2.style.display = 'none';
                msg3.style.display = 'none';
                Swal.fire({
                    title : '필수 입력칸을 모두 채워주세요.',
                    icon : 'warning',
                    showConfirmButton : false,
                    timer : 1000,
                })
            }
        } else {
            msg1.style.display = 'block';
            msg2.style.display = 'block';
            msg3.style.display = 'block';
            Swal.fire({
                title : '필수 입력칸을 모두 채워주세요.',
                icon : 'warning',
                showConfirmButton : false,
                timer : 1000,
            })
        }
    } else {
        msg1.style.display = 'none';
        msg2.style.display = 'none';
        msg3.style.display = 'none';
        checkting();
    }
}


function checkting() {
    //DB와 입력된 id & name & mail 대조
    let id_ex = 'soojin';
    let name_ex = '수진';
    let mail_ex = 'soojin_0503@naver.com';
    // let id = document.getElementById('fid').value;
    // let name = document.getElementById('fname').value;
    // let mail = document.getElementById('fmail').value;
    // console.log(id);
    // console.log(pwd);

    if(id_ex == id.value && name_ex == name.value && mail_ex == mail.value) {
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
            title: '이메일 함을 확인해주세요!'
          })
        setTimeout(function() {
            location.href = "success_pwd/index.html";
        }, 2000);
        // location.href = "https://www.naver.com/";
    } else {
        // 아이디 또는 비밀번호가 일치하지 않을 경우
        // swal('아이디 또는 비밀번호를 다시 한번 확인해 주세요.');
        Swal.fire({
            title : '다시 한번 확인해 주세요.',
            icon : 'warning',
            showConfirmButton : false,
            timer : 1000,
        })
    }
}