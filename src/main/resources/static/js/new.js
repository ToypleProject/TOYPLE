const addReq = () => {
    location.href = "/project/add"
}
function newproject() {
    let proj_name = document.getElementById('proj_name')
    let response_area = document.getElementById('response_area')
    if(proj_name.value == "") {
        proj_name.focus();

        // input area 진동
        proj_name.classList.add("vibration");
        setTimeout(function() {
            proj_name.classList.remove("vibration");
        }, 400);

        proj_name.style.borderColor = 'rgb(225,10,10)'
        // 안내문
        response_area.style.visibility = 'visible'
    } else {
        if( confirm('프로젝트 이름 : ' + proj_name.value + '\n글을 등록하시겠습니까?')) {
            alert('추가되었습니다.')
            location.href='../banner/banner_in.html'    //글 추가 후 홈으로 이동
        } else {
            alert('취소되었습니다.')
        }
    }
    return
}
function buttonover(obj) {
    obj.style.backgroundColor = "rgb(180, 150, 110)"
}
function buttonout(obj) {
    obj.style.backgroundColor = "tan"
}

function reset(obj) {
    if (obj.id == 'reset_place'){
        let places = document.getElementsByClassName('places')
        let selected_places = document.getElementById('selected_places')
        while(selected_places.firstChild) {
            selected_places.removeChild(selected_places.firstChild);
        }
        for(let i = 0 ;i<places.length;i++){
            if (places[i].classList.contains('place_selected')){
                places[i].classList.remove('place_selected')
            }
        }
    } else if (obj.id == 'reset_work') {
        let works = document.getElementsByClassName('works')
        let selected_works = document.getElementById('selected_works')
        while(selected_works.firstChild) {
            selected_works.removeChild(selected_works.firstChild);
        }
        for(let i = 0 ;i<works.length;i++){
            if (works[i].classList.contains('work_selected')){
                works[i].classList.remove('work_selected')
            }
        }
        let langdivs = document.getElementById('choose_langs')
        langdivs.innerHTML = ''
        //직무 초기화 시 언어도 같이 초기화됨
        let langs = document.getElementsByClassName('langs')
        let selected_langs = document.getElementById('selected_langs')
        while(selected_langs.firstChild) {
            selected_langs.removeChild(selected_langs.firstChild);
        }
        for(let i = 0 ;i<langs.length;i++){
            if (langs[i].classList.contains('lang_selected')){
                langs[i].classList.remove('lang_selected')
            }
        }
    } else if (obj.id == 'reset_lang') {
        let langs = document.getElementsByClassName('langs')
        let selected_langs = document.getElementById('selected_langs')
        while(selected_langs.firstChild) {
            selected_langs.removeChild(selected_langs.firstChild);
        }
        for(let i = 0 ;i<langs.length;i++){
            if (langs[i].classList.contains('lang_selected')){
                langs[i].classList.remove('lang_selected')
            }
        }
    }
}

function add_place(a) {
    let classes = a.classList
    let xx = String.fromCharCode(0x00d7)
    const newDiv = document.createElement('div');
    const newText = document.createTextNode(a.innerHTML);
    let selected_places = document.getElementById('selected_places')
    if (classes.contains('place_selected')){
        a.classList.remove("place_selected")

        let placeList = document.getElementsByClassName('place_list')
        for(let i = 0; i < placeList.length; i++){
            if (String(a.innerHTML + '\n' + xx) == String(placeList[i].innerText)){
                selected_places.removeChild(placeList[i]);
            }
        }
    } else {
        a.classList.add("place_selected");
        newDiv.appendChild(newText);
        selected_places.appendChild(newDiv);
        newDiv.classList.add('place_list')
        const x = document.createElement('div')
        const xText = document.createTextNode(xx)
        x.appendChild(xText)
        newDiv.appendChild(x)
        x.classList.add('x')
    }
}

function add_work(a) {
    let classes = a.classList
    let xx = String.fromCharCode(0x00d7)
    let langdiv = document.getElementById('choose_langs')
    const newDiv = document.createElement('div');
    const newText = document.createTextNode(a.innerHTML);
    let selected_works = document.getElementById('selected_works')
    let work_selected = document.getElementsByClassName('work_selected')

    if (!classes.contains('work_selected')) {
        a.classList.add("work_selected");
        newDiv.appendChild(newText);
        selected_works.appendChild(newDiv);
        newDiv.classList.add('work_list')
        const x = document.createElement('div')
        const xText = document.createTextNode(xx)
        x.appendChild(xText)
        newDiv.appendChild(x)
        x.classList.add('x')
        langdiv.innerHTML = ''
        for (let i = 0 ; i<work_selected.length;i++){
            if (work_selected[i].innerHTML == '프론트엔드') {
                langdiv.innerHTML += '<div id="langs_front"><div class="langs front_lang" onclick="add_lang(this)">JavaScript</div><div class="langs front_lang" onclick="add_lang(this)">TypeScript</div><div class="langs front_lang" onclick="add_lang(this)">React</div><div class="langs front_lang" onclick="add_lang(this)">Vue</div><div class="langs front_lang" onclick="add_lang(this)">Svelte</div><div class="langs front_lang" onclick="add_lang(this)">Nextjs</div></div>'
            }
            else if (work_selected[i]=='백엔드' && work_selected[i]=='모바일'){
                langdiv.innerHTML += '<div id="langs_back"><div class="langs back_lang" onclick="add_lang(this)">Java</div><div class="langs back_lang" onclick="add_lang(this)">Spring</div><div class="langs back_lang" onclick="add_lang(this)">Nodejs</div><div class="langs back_lang" onclick="add_lang(this)">Nestjs</div><div class="langs back_lang" onclick="add_lang(this)">Go</div><div class="langs back_lang" onclick="add_lang(this)">Kotlin</div><div class="langs back_lang" onclick="add_lang(this)">Express</div><div class="langs back_lang" onclick="add_lang(this)">MySQL</div><div class="langs back_lang" onclick="add_lang(this)">MongoDB</div><div class="langs back_lang" onclick="add_lang(this)">Python</div><div class="langs back_lang" onclick="add_lang(this)">Django</div><div class="langs back_lang" onclick="add_lang(this)">php</div><div class="langs back_lang" onclick="add_lang(this)">GraphQL</div><div class="langs back_lang" onclick="add_lang(this)">Firebase</div></div> <div id="langs_mob"><div class="langs mob_lang" onclick="add_lang(this)">Flutter</div><div class="langs mob_lang" onclick="add_lang(this)">Swift</div><div class="langs mob_lang" onclick="add_lang(this)">Kotlin</div><div class="langs mob_lang" onclick="add_lang(this)">ReactNative</div><div class="langs mob_lang" onclick="add_lang(this)">Unity</div></div>'
            } else if (work_selected[i].innerHTML == '백엔드'){
                langdiv.innerHTML += '<div id="langs_back"><div class="langs back_lang" onclick="add_lang(this)">Java</div><div class="langs back_lang" onclick="add_lang(this)">Spring</div><div class="langs back_lang" onclick="add_lang(this)">Nodejs</div><div class="langs back_lang" onclick="add_lang(this)">Nestjs</div><div class="langs back_lang" onclick="add_lang(this)">Go</div><div class="langs back_lang" onclick="add_lang(this)">Kotlin</div><div class="langs back_lang" onclick="add_lang(this)">Express</div><div class="langs back_lang" onclick="add_lang(this)">MySQL</div><div class="langs back_lang" onclick="add_lang(this)">MongoDB</div><div class="langs back_lang" onclick="add_lang(this)">Python</div><div class="langs back_lang" onclick="add_lang(this)">Django</div><div class="langs back_lang" onclick="add_lang(this)">php</div><div class="langs back_lang" onclick="add_lang(this)">GraphQL</div><div class="langs back_lang" onclick="add_lang(this)">Firebase</div></div>'
            }
            else if (work_selected[i].innerHTML == '모바일') {
                langdiv.innerHTML += '<div id="langs_mob"><div class="langs mob_lang" onclick="add_lang(this)">Flutter</div><div class="langs mob_lang" onclick="add_lang(this)">Swift</div><div class="langs mob_lang" onclick="add_lang(this)">Kotlin</div><div class="langs mob_lang" onclick="add_lang(this)">ReactNative</div><div class="langs" onclick="add_lang(this)">Unity</div></div>'
            }
            else if (work_selected[i].innerHTML == '기타') {
                langdiv.innerHTML += '<div id="langs_etc"><div class="langs etc_lang" onclick="add_lang(this)">AWS</div><div class="langs etc_lang" onclick="add_lang(this)">Kubernetes</div><div class="langs etc_lang" onclick="add_lang(this)">Docker</div><div class="langs etc_lang" onclick="add_lang(this)">Git</div><div class="langs etc_lang" onclick="add_lang(this)">Figma</div><div class="langs etc_lang" onclick="add_lang(this)">Zeplin</div><div class="langs etc_lang" onclick="add_lang(this)">Jest</div><div class="langs etc_lang" onclick="add_lang(this)">C</div></div>'
            } 
        }

        //추가 시 언어 영역 설정 유지
        let langs = document.getElementsByClassName('langs')
        let lang_list = document.getElementsByClassName('lang_list')
        for( let j = 0 ; j<lang_list.length;j++){
            for (let i = 0 ; i<langs.length;i++){
                if (String(langs[i].innerHTML + '\n' + xx)==String(lang_list[j].innerText)) {
                    console.log(true)
                    langs[i].classList.add('lang_selected')
                    break
                }
            }
        }
        
        //변경할 때 취소되는 것만 없어지도록.
    } else {
        let lang_list = document.getElementsByClassName('lang_list')
        a.classList.remove("work_selected")
        let work_list = document.getElementsByClassName('work_list')
        for(let i = 0; i < work_list.length; i++){
            if(String(a.innerHTML + '\n' + xx) == String(work_list[i].innerText)){
                selected_works.removeChild(work_list[i]);
            }
        }

        if (a.id == 'fornt_end'){
            console.log('romove!')
            document.getElementById("langs_front").remove()
            let front_langList = document.getElementsByClassName('front_langList')
            while(front_langList[0]) {
                front_langList[0].remove()
            }
        } else if (a.id == 'back_end'){
            console.log('romove!')
            document.getElementById("langs_back").remove();
            let back_langList = document.getElementsByClassName('back_langList')
            while(back_langList[0]) {
                back_langList[0].remove()
            }
        } else if (a.id == 'work_mobile'){
            console.log('romove!')
            document.getElementById("langs_mob").remove();
            let mob_langList = document.getElementsByClassName('mob_langList')
            while(mob_langList[0]) {
                mob_langList[0].remove()
            }
        } else if (a.id == 'work_etc'){
            console.log('romove!')
            document.getElementById("langs_etc").remove();
            let etc_langList = document.getElementsByClassName('etc_langList')
            while(etc_langList[0]) {
                etc_langList[0].remove()
            }
        }
    }
}

function add_lang(a) {
    let classes = a.classList
    let xx = String.fromCharCode(0x00d7)
    const newDiv = document.createElement('div');
    const newText = document.createTextNode(a.innerHTML);
    let selected_langs = document.getElementById('selected_langs')
    if (classes.contains('lang_selected')){
        a.classList.remove("lang_selected")
        let lang_list = document.getElementsByClassName('lang_list')
        for(let i = 0; i < lang_list.length; i++){
            if (String(a.innerHTML + '\n' + xx) == String(lang_list[i].innerText)){
                selected_langs.removeChild(lang_list[i]);
            }
        }
    } else {
        a.classList.add("lang_selected");
        newDiv.appendChild(newText);
        selected_langs.appendChild(newDiv);
        newDiv.classList.add('lang_list')
        const x = document.createElement('div')
        const xText = document.createTextNode(xx)
        x.appendChild(xText)
        newDiv.appendChild(x)
        x.classList.add('x')

        let langs = document.getElementsByClassName('langs')
        for (let i = 0; i < langs.length; i++) {
            if (a.classList.contains('front_lang')){
                newDiv.classList.add('front_langList')
            } else if (a.classList.contains('back_lang')){
                newDiv.classList.add('back_langList')
            } else if (a.classList.contains('mob_lang')){
                newDiv.classList.add('mob_langList')
            } else if (a.classList.contains('etc_lang')){
                newDiv.classList.add('etc_langList')
            }
        }
    }
}

