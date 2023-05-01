function newproject() {
    let proj_name = document.getElementById('proj_name');
    let response_area = document.getElementById('response_area');
    if(proj_name.value == "") {
        proj_name.focus();

        // input area 진동
        proj_name.classList.add("vibration");
        setTimeout(function() {
            proj_name.classList.remove("vibration");
        }, 400);

        proj_name.style.borderColor = 'rgb(225,10,10)';
        // 안내문
        response_area.style.visibility = 'visible';
    } else {
        if( confirm('프로젝트 이름 : ' + proj_name.value + '\n글을 등록하시겠습니까?')) {
            alert('추가되었습니다.')
            location.href('../main/main.html')    //글 추가 후 홈으로 이동
            // window.open('../main/main.html')

        } else {
            alert('취소되었습니다.')
        }
    }
    return;
}

function buttonover(obj) {
    obj.style.backgroundColor = "rgb(180, 150, 110)";
}

function buttonout(obj) {
    obj.style.backgroundColor = "tan";
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
            places[i].firstChild.checked = false
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
            works[i].firstChild.checked = false
        }
        

        //직무 초기화 시 언어도 같이 초기화됨
        let langs = document.getElementsByClassName('langs')
        let selected_langs = document.getElementById('selected_langs')
        let langsDiv = document.getElementsByClassName('langsDiv')
        for(let i=0; i<langsDiv.length;i++){
            langsDiv[i].style.display='none'
        }
        for(let i = 0 ;i<langs.length;i++){
            if (langs[i].classList.contains('lang_selected')){
                langs[i].classList.remove('lang_selected')
            }
            langs[i].firstChild.checked = false
        }
        while(selected_langs.firstChild) {
            selected_langs.removeChild(selected_langs.firstChild);
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
            langs[i].firstChild.checked = false
        }
    }
    
}



function add_place(a) {
    // console.log(a)
    let selected_places = document.getElementById('selected_places');
    if(a.checked == true){
        let place = document.getElementsByClassName(a.classList);
        const newDiv = document.createElement('div');
        const newText = document.createTextNode(a.value);
        newDiv.appendChild(newText);
        selected_places.appendChild(newDiv);
        newDiv.classList.add('place_list');
        place[0].classList.add('place_selected');
    } else {
        let place_list = document.getElementsByClassName('place_list');
        for(let i = 0; i < place_list.length; i++){
            if (String(a.value) == String(place_list[i].innerText)){
                selected_places.removeChild(place_list[i]);
            }
        }
        let place = document.getElementsByClassName(a.classList);
        place[0].classList.remove('place_selected');
    }
    
    
}

function add_work(a) {
    let selected_works = document.getElementById('selected_works');
    let work_list = document.getElementsByClassName('work_list');
    
    if(a.checked == true){
        let work = document.getElementsByClassName(a.classList);
        const newDiv = document.createElement('div');
        const newText = document.createTextNode(a.value);
        newDiv.appendChild(newText);
        selected_works.appendChild(newDiv);
        newDiv.classList.add('work_list');
        work[0].classList.add('work_selected');
        // console.log(a.classList)
    
        if (a.value == "프론트엔드"){
            let langs_front = document.getElementById('langs_front')
            langs_front.style.display = "block";
        } else if (a.value == "백엔드"){
            let langs_back = document.getElementById('langs_back')
            langs_back.style.display="block";
            let langs_kotlin = document.getElementById('langs_kotlin')
            langs_kotlin.style.display="block";
        } else if (a.value == "모바일"){
            let langs_mob_nokot = document.getElementById('langs_mob_nokot')
            langs_mob_nokot.style.display="block";
            let langs_kotlin = document.getElementById('langs_kotlin')
            langs_kotlin.style.display="block";
        } else if (a.value == "기타") {
            let langs_etc = document.getElementById('langs_etc')
            langs_etc.style.display="block";
        }
        
    } else {
        let work_list = document.getElementsByClassName('work_list');
        a.checked = false;
        for(let i = 0; i < work_list.length; i++){
            if (String(a.value) == String(work_list[i].innerText)){
                selected_works.removeChild(work_list[i]);
            }
        }
        
        if (a.value=="프론트엔드"){
            let langs_front = document.getElementById('langs_front')
            langs_front.style.display = "none";

            let front_lang = document.getElementsByClassName('front_lang lang_selected');
            while(front_lang[0]){
                front_lang[0].firstChild.checked = false;
                front_lang[0].classList.remove('lang_selected')
            }
            let lang_list_front = document.getElementsByClassName('lang_list front_lang');
            let selected_langs = document.getElementById('selected_langs')
            while(lang_list_front[0]){
                selected_langs.removeChild(lang_list_front[0])
            }

        } else if (a.value=="백엔드"){
            let langs_back = document.getElementById('langs_back')
            langs_back.style.display="none";

            let back_lang = document.getElementsByClassName('back_lang lang_selected');
            while(back_lang[0]){
                back_lang[0].firstChild.checked = false;
                back_lang[0].classList.remove('lang_selected')
            }
            let lang_list_back = document.getElementsByClassName('lang_list back_lang');
            let selected_langs = document.getElementById('selected_langs')
            while(lang_list_back[0]){
                selected_langs.removeChild(lang_list_back[0])
            }

            let work_selected = document.getElementsByClassName('w2 work_selected')
            work_selected[0].classList.remove('work_selected')

            work_selected = document.getElementsByClassName('work_selected')
            let langs_kotlin = document.getElementById('langs_kotlin')
            langs_kotlin.style.display="none";

            let kotlin_langs = document.getElementsByClassName('kotlin lang_selected')
            let langs_kotlin_TF = 0;
            for(let i = 0; i<work_selected.length;i++){
                work_selected[i].classList.remove('lang_selected');
                if (work_selected[i].firstChild.value == "모바일") { 
                    langs_kotlin_TF=1;
                }
            }

            if (langs_kotlin_TF == 1) {
                langs_kotlin.style.display="block";
            } else {
                kotlin_langs[0].firstChild.checked = false;
                let lang_list_kot = document.getElementsByClassName('lang_list kotlin');
                selected_langs.removeChild(lang_list_kot[0])
                kotlin_langs[0].classList.remove('lang_selected')
            }

        } else if (a.value=="모바일"){
            let langs_mob_nokot = document.getElementById('langs_mob_nokot');
            let langs_kotlin = document.getElementById('langs_kotlin')
            langs_mob_nokot.style.display = 'none';
            langs_kotlin.style.display="none";

            let work_selected = document.getElementsByClassName('w3 work_selected')
            work_selected[0].classList.remove('work_selected')

            let mob_lang = document.getElementsByClassName('mob_lang lang_selected');
            while(mob_lang[0]){
                mob_lang[0].firstChild.checked = false;
                mob_lang[0].classList.remove('lang_selected')
            }
            let lang_list_mob = document.getElementsByClassName('lang_list mob_lang');
            let selected_langs = document.getElementById('selected_langs')
            while(lang_list_mob[0]){
                selected_langs.removeChild(lang_list_mob[0])
            }

            work_selected = document.getElementsByClassName('work_selected')
            let langs_kotlin_TF = 0;
            for(let i = 0; i<work_selected.length;i++){
                work_selected[i].classList.remove('lang_selected');
                if (work_selected[i].firstChild.value == "백엔드"){
                    langs_kotlin_TF = 1;
                }
            }
            let kotlin_langs = document.getElementsByClassName('kotlin lang_selected')

            if(langs_kotlin_TF==1) {
                langs_kotlin.style.display="block";
            } else {
                kotlin_langs[0].firstChild.checked=false;
                let lang_list_kot = document.getElementsByClassName('lang_list kotlin');
                selected_langs.removeChild(lang_list_kot[0])
                kotlin_langs[0].classList.remove('lang_selected')
            }

        } else if (a.value=="기타") {
            console.log(a.value)
            let langs_etc = document.getElementById('langs_etc')
            langs_etc.style.display="none";

            let etc_lang = document.getElementsByClassName('etc_lang lang_selected');
            while(etc_lang[0]){
                etc_lang[0].firstChild.checked = false;
                etc_lang[0].classList.remove('lang_selected')
            }
            let lang_list_etc = document.getElementsByClassName('lang_list etc_lang');
            let selected_langs = document.getElementById('selected_langs')
            while(lang_list_etc[0]){
                selected_langs.removeChild(lang_list_etc[0])
            }
        }

        let clickwork = document.getElementsByClassName(a.classList[1]);
        clickwork[0].classList.remove('work_selected')
        
        let selected_langs = document.getElementById('selected_langs');
        
    }

}


function add_lang(a) {
    let selected_langs = document.getElementById('selected_langs')
    let lang = document.getElementsByClassName(a.classList)
    if(a.checked == true){
        const newDiv = document.createElement('div');
        const newText = document.createTextNode(a.value);
        newDiv.appendChild(newText);
        selected_langs.appendChild(newDiv);
        newDiv.classList.add('lang_list')
        lang[0].classList.add('lang_selected')
        if(a.classList.contains('front_lang')){
            newDiv.classList.add('front_lang')
        } else if(a.classList.contains('back_lang')){
            newDiv.classList.add('back_lang')
        } else if(a.classList.contains('mob_lang')){
            newDiv.classList.add('mob_lang')
        } else if(a.classList.contains('kotlin')){
            newDiv.classList.add('kotlin')
        } else if(a.classList.contains('etc_lang')){
            newDiv.classList.add('etc_lang')
        }
    } else {
        let lang_list = document.getElementsByClassName('lang_list')
        for(let i = 0; i < lang_list.length; i++){
            if (String(a.value) == String(lang_list[i].innerText)){
                selected_langs.removeChild(lang_list[i]);
            }
        }
        // console.log(lang[0])
        lang[0].classList.remove('lang_selected')
    }
}

