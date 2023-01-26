

function button_click() {
    let id = document.getElementById('userId').value;
    let pwd = document.getElementById('password').value;
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
        document.getElementById('login_form').submit();
    }
}

// id의 input 값이 바뀔때마다 호출해서 검사하기
function id_repeat() {
    let id = document.getElementById('userId').value;
    // 아이디에는 영어와 숫자만 입력가능하게 조건 걸기
    const regex = /^[a-z|A-Z|0-9|]+$/;
    if(regex.test(id)) {

    } else {
        Swal.fire({
            title : '아이디에는 영어 또는 숫자만 입력해주세요.',
            icon : 'warning',
            showConfirmButton : false,
            timer : 1000,
        })
    }
}
