function checking() {
    console.log('checking start');
    let check_pw = document.getElementById('pswd2').value;
    let pw = document.getElementById('pswd1').value;
    let check_comment = document.getElementById('pswd2Msg');
    // console.log('check_pw : ' + check_pw);
    // console.log('pw : ' + pw);
    if(check_pw != pw) {
        check_comment.style.display='block';
    } else {
        check_comment.style.display='none';
    }
}

function input_ing() {
    let check_comment = document.getElementById('pswd2Msg');
    check_comment.style.display = 'none';
}