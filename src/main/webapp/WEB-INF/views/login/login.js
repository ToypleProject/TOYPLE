

function button_click() {
    let id = document.getElementById('id').value;
    let pwd = document.getElementById('pswd1').value;
    let msg1 = document.getElementById('Msg1');
    let msg2 = document.getElementById('Msg2');
    // console.log(id);
    // console.log(pwd);


    // DB와 확인하여 맞는지 여부 체크해야 함
    if(id == null && pwd == null) {
        msg1.style.display = 'block';
        msg2.style.display = 'block';
    } else if(id != null && pwd == null) {
        msg1.style.display = 'none';
        msg2.style.display = 'block';
    } else if(id == null && pwd != null) {
        msg1.style.display = 'block';
        msg2.style.display = 'null';
    } else {
        msg1.style.display = 'none';
        msg2.style.display = 'none';
    }
}