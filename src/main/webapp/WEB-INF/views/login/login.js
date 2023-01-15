

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
    } else if(id != '' && pwd == '') {
        // console.log('pwd가 null');
        msg1.style.display = 'none';
        msg2.style.display = 'block';
    } else if(id == '' && pwd != '') {
        // console.log('id가 null');
        msg1.style.display = 'block';
        msg2.style.display = 'none';
    } else {
        // console.log('else');
        msg1.style.display = 'none';
        msg2.style.display = 'none';
        checkting();
    }
}

function checkting() {
    //DB와 입력된 id & password 대조
    let id = document.getElementById('id').value;
    let pwd = document.getElementById('pswd1').value;
    console.log(id);
    console.log(pwd);

    // 아이디 또는 비밀번호가 일치하지 않을 경우
    swal('아이디 또는 비밀번호를 다시 한번 확인해 주세요.');
}