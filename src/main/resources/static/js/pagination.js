
let currentPage = 1;
let currentPageNumber = document.getElementById('currentPageNumber')

function movePageGroup(obj){
    console.log(obj.id)     // previous? next?
    let currentPageGroup = Math.ceil(currentPage / 5)
    console.log('이동 전 페이지 그룹 : ' + currentPageGroup)
    if(obj.id == "previous"){
        if(currentPageGroup == 1){
            let pageLink = document.getElementsByClassName('page-link')
            let ifrm = document.getElementById('ifrm')
            ifrm.src = pageLink[1].href
            pageLink[1].focus()
            return;
        }
        currentPageGroup -= 1
        currentPage = (currentPageGroup-1)*5+1
        console.log('currentPage = ' + currentPage)
    } else if (obj.id == "next"){
        currentPageGroup += 1
        currentPage = (currentPageGroup-1)*5+1
        console.log('currentPage = ' + currentPage)
    }
    let pagination = document.getElementById('pagination')
    console.log('이동 후 페이지그룹 : ' + currentPageGroup)

    pagination.innerHTML = '<li class="page-item">    <a class="page-link" onclick="movePageGroup(this)" id="previous" aria-label="Previous">    <span aria-hidden="true">&laquo;</span>    </a></li>'
    for (let i = (currentPageGroup-1)*5;i<currentPageGroup*5; i++){
        pagination.innerHTML += `<li class="page-item"><a class="page-link" id="page_${i+1}" onclick="movePage(this)" href="./proj_list.html" target="pages">${i+1}</a></li>`
    }
    pagination.innerHTML += '<li class="page-item">    <a class="page-link" onclick="movePageGroup(this)" id="next" aria-label="Next">    <span aria-hidden="true">&raquo;</span>    </a></li>'

    let pageLink = document.getElementsByClassName('page-link')
    let ifrm = document.getElementById('ifrm')
    ifrm.src = pageLink[1].href
    pageLink[1].focus()
    pageLink[1].classList.add('currentPage')
    pageLink[1].style.backgroundColor = '#eee'
}

function movePage(obj){
    let currentPageNumber = document.getElementById('currentPageNumber')
    currentPageNumber.innerHTML = obj.innerHTML
    console.log('currentPage = ' + obj.innerHTML)
    let pageLink = document.getElementsByClassName('page-link')
    for(let i = 0; i<pageLink.length;i++){
        pageLink[i].style.backgroundColor='#fff'
        pageLink[i].classList.remove('currentPage')
    }
    
    obj.style.backgroundColor = '#eee'
    obj.classList.add('currentPage')
    
    console.log(currentPage)
    console.log('RcurrentPage = ' + currentPageNumber.innerHTML)
    alert_currentPage(currentPageNumber.innerHTML)
}
