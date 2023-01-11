function newproject() {
    let proj_name = document.getElementById('proj_name')
    if(proj_name.value == "") {
        proj_name.focus();
        proj_name.classList.add("vibration");
        setTimeout(function() {
            proj_name.classList.remove("vibration");
        }, 400);
        proj_name.style.borderColor = 'rgb(225,10,10)'
        // alert('프로젝트 제목은 필수항목입니다.')
    } else {
        if( confirm('프로젝트 이름 : ' + proj_name.value + '\n글을 등록하시겠습니까?')) {
            alert('추가되었습니다.')
            location.href='../banner/banner_in.html'    //글 추가 후 홈으로 이동
        } else {
            alert('취소되었습니다.')
        }
    }
    
}
function buttonover(obj) {
    obj.style.backgroundColor = "rgb(180, 150, 110)"
}
function buttonout(obj) {
    obj.style.backgroundColor = "tan"
}