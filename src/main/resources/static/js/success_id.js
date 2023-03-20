function showId() {
    let id = document.getElementById('id');
    /** DB에서 해당하는 user의 아이디를 찾고 그걸로 연동! */
    let ex_id_value = "soojin";

    id.innerHTML = ex_id_value;
}

function button_click() {
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
        title: '로그인으로 이동'
      })
    setTimeout(function() {
        location.href = "/user/login";
    }, 2000);
}