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
<<<<<<< HEAD
        let langdivs = document.getElementById('choose_langs')
        langdivs.innerHTML = '<div id="langs_front"></div><div id="langs_back"></div><div id="langs_mob"></div><div id="langs_etc"></div>'
        //직무 초기화 시 language도 같이 초기화됨
=======
        

        //직무 초기화 시 언어도 같이 초기화됨
>>>>>>> de7f9b36978e327f4dc5cb8805427caa1c1407c0
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
        
<<<<<<< HEAD
        let selected_langs = document.getElementById('selected_langs');
        //직무 취소 시 language리스트 반영
        if(a.value == '프론트엔드'){
            let lang_list = document.getElementsByClassName('lang_list front_lang');
            while(lang_list[0]){
                selected_langs.removeChild(lang_list[0]);
=======
        if (a.value=="프론트엔드"){
            let langs_front = document.getElementById('langs_front')
            langs_front.style.display = "none";

            let front_lang = document.getElementsByClassName('front_lang lang_selected');
            while(front_lang[0]){
                front_lang[0].firstChild.checked = false;
                front_lang[0].classList.remove('lang_selected')
>>>>>>> de7f9b36978e327f4dc5cb8805427caa1c1407c0
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
<<<<<<< HEAD
        }
        
    }
    
    // let work_list = document.getElementsByClassName('work_list')
    
    for (let j = 0;j < work_list.length;j++){
        if (work_list[j].innerHTML == '프론트엔드'){
            let langs_front = document.getElementById('langs_front')

            langs_front.innerHTML = '<label class="langs front_lang f_lang1">' +
                '<input class="front_lang f_lang1" id="JavaScript" onclick="add_lang(this)" type="checkbox" name="language" value="JavaScript">JavaScript</label><label class="langs front_lang f_lang2">' +
                '<input class="front_lang f_lang2" id="TypeScript" onclick="add_lang(this)" type="checkbox" name="language" value="TypeScript">TypeScript</label><label class="langs front_lang f_lang3">' +
                '<input class="front_lang f_lang3" id="React" onclick="add_lang(this)" type="checkbox" name="language" value="React">React</label><label class="langs front_lang f_lang4">' +
                '<input class="front_lang f_lang4" id="Vue" onclick="add_lang(this)" type="checkbox" name="language" value="Vue">Vue</label><label class="langs front_lang f_lang5">' +
                '<input class="front_lang f_lang5" id="Svelte" onclick="add_lang(this)" type="checkbox" name="language" value="Svelte">Svelte</label><label class="langs front_lang f_lang6">' +
                '<input class="front_lang f_lang6" id="Nextjs" onclick="add_lang(this)" type="checkbox" name="language" value="Nextjs">Nextjs</label>'
        }
        else if (work_list[j].innerHTML == '백엔드'){
            let k = 0
            for (let i = 0 ;i<work_list.length;i++){
                if (work_list[i].innerHTML == '모바일'){        
                    let langs_back = document.getElementById('langs_back')

                    langs_back.innerHTML ='<label class="langs back_lang b_lang1"><input class="back_lang b_lang1" id="Java" onclick="add_lang(this)" type="checkbox" name="language" value="Java">Java</label><label class="langs back_lang b_lang2">' +
                        '<input class="back_lang b_lang2" id="Spring" onclick="add_lang(this)" type="checkbox" name="language" value="Spring">Spring</label><label class="langs back_lang b_lang3">' +
                        '<input class="back_lang b_lang3" id="Nodejs" onclick="add_lang(this)" type="checkbox" name="language" value="Nodejs">Nodejs</label><label class="langs back_lang b_lang4">' +
                        '<input class="back_lang b_lang4" id="Nestjs" onclick="add_lang(this)" type="checkbox" name="language" value="Nestjs">Nestjs</label><label class="langs back_lang b_lang5">' +
                        '<input class="back_lang b_lang5" id="Go" onclick="add_lang(this)" type="checkbox" name="language" value="Go">Go</label><label class="langs back_lang b_lang6">' +
                        '<input class="back_lang b_lang6" id="Kotlin" onclick="add_lang(this)" type="checkbox" name="language" value="Kotlin">Kotlin</label><label class="langs back_lang b_lang7">' +
                        '<input class="back_lang b_lang7" id="Express" onclick="add_lang(this)" type="checkbox" name="language" value="Express">Express</label><label class="langs back_lang b_lang8">' +
                        '<input class="back_lang b_lang8" id="MySQL" onclick="add_lang(this)" type="checkbox" name="language" value="MySQL">MySQL</label><label class="langs back_lang b_lang9">' +
                        '<input class="back_lang b_lang9" id="MongoDB" onclick="add_lang(this)" type="checkbox" name="language" value="MongoDB">MongoDB</label><label class="langs back_lang b_lang10">' +
                        '<input class="back_lang b_lang10" id="Python" onclick="add_lang(this)" type="checkbox" name="language" value="Python">Python</label><label class="langs back_lang b_lang11">' +
                        '<input class="back_lang b_lang11" id="Django" onclick="add_lang(this)" type="checkbox" name="language" value="Django">Django</label><label class="langs back_lang b_lang12">' +
                        '<input class="back_lang b_lang12" id="php" onclick="add_lang(this)" type="checkbox" name="language" value="php">php</label><label class="langs back_lang b_lang13">' +
                        '<input class="back_lang b_lang13" id="GraphQL" onclick="add_lang(this)" type="checkbox" name="language" value="GraphQL">GraphQL</label><label class="langs back_lang b_lang14">' +
                        '<input class="back_lang b_lang14" id="Firebase" onclick="add_lang(this)" type="checkbox" name="language" value="Firebase">Firebase</label>'
                    //Kotlin 중복 제거
                    let langs_mob = document.getElementById('langs_mob')
                    langs_mob.innerHTML = '<label class="langs mob_lang m_lang1">' +
                        '<input class="mob_lang m_lang1" id="Flutter" onclick="add_lang(this)" type="checkbox" name="language" value="Flutter">Flutter</label><label class="langs mob_lang m_lang2">' +
                        '<input class="mob_lang m_lang2" id="Swift" onclick="add_lang(this)" type="checkbox" name="language" value="Swift">Swift</label><label class="langs mob_lang m_lang4">' +
                        '<input class="mob_lang m_lang4" id="ReactNative" onclick="add_lang(this)" type="checkbox" name="language" value="ReactNative">ReactNative</label><label class="langs mob_lang m_lang5">' +
                        '<input class="mob_lang m_lang5" id="Unity" onclick="add_lang(this)" type="checkbox" name="language" value="Unity">Unity</label>'
                    k = 1
                    break;
                }
            }
            if (k==0){
                let langs_back = document.getElementById('langs_back')

                langs_back.innerHTML ='<label class="langs back_lang b_lang1">' +
                    '<input class="back_lang b_lang1" id="Java" onclick="add_lang(this)" type="checkbox" name="language" value="Java">Java</label><label class="langs back_lang b_lang2">' +
                    '<input class="back_lang b_lang2" id="Spring" onclick="add_lang(this)" type="checkbox" name="language" value="Spring">Spring</label><label class="langs back_lang b_lang3">' +
                    '<input class="back_lang b_lang3" id="Nodejs" onclick="add_lang(this)" type="checkbox" name="language" value="Nodejs">Nodejs</label><label class="langs back_lang b_lang4">' +
                    '<input class="back_lang b_lang4" id="Nestjs" onclick="add_lang(this)" type="checkbox" name="language" value="Nestjs">Nestjs</label><label class="langs back_lang b_lang5">' +
                    '<input class="back_lang b_lang5" id="Go" onclick="add_lang(this)" type="checkbox" name="language" value="Go">Go</label><label class="langs back_lang b_lang6">' +
                    '<input class="back_lang b_lang6" id="Kotlin" onclick="add_lang(this)" type="checkbox" name="language" value="Kotlin">Kotlin</label><label class="langs back_lang b_lang7">' +
                    '<input class="back_lang b_lang7" id="Express" onclick="add_lang(this)" type="checkbox" name="language" value="Express">Express</label><label class="langs back_lang b_lang8">' +
                    '<input class="back_lang b_lang8" id="MySQL" onclick="add_lang(this)" type="checkbox" name="language" value="MySQL">MySQL</label><label class="langs back_lang b_lang9">' +
                    '<input class="back_lang b_lang9" id="MongoDB" onclick="add_lang(this)" type="checkbox" name="language" value="MongoDB">MongoDB</label><label class="langs back_lang b_lang10">' +
                    '<input class="back_lang b_lang10" id="Python" onclick="add_lang(this)" type="checkbox" name="language" value="Python">Python</label><label class="langs back_lang b_lang11">' +
                    '<input class="back_lang b_lang11" id="Django" onclick="add_lang(this)" type="checkbox" name="language" value="Django">Django</label><label class="langs back_lang b_lang12">' +
                    '<input class="back_lang b_lang12" id="php" onclick="add_lang(this)" type="checkbox" name="language" value="php">php</label><label class="langs back_lang b_lang13">' +
                    '<input class="back_lang b_lang13" id="GraphQL" onclick="add_lang(this)" type="checkbox" name="language" value="GraphQL">GraphQL</label><label class="langs back_lang b_lang14">' +
                    '<input class="back_lang b_lang14" id="Firebase" onclick="add_lang(this)" type="checkbox" name="language" value="Firebase">Firebase</label>'
            }
        } else if (work_list[j].innerHTML == '모바일'){
            let k = 0;
            for (let i = 0 ;i<work_list.length;i++){
                if (work_list[i].innerHTML == '백엔드'){
                    let langs_back = document.getElementById('langs_back')

                    langs_back.innerHTML ='<label class="langs back_lang b_lang1">' +
                        '<input class="back_lang b_lang1" id="Java" onclick="add_lang(this)" type="checkbox" name="language" value="Java">Java</label><label class="langs back_lang b_lang2">' +
                        '<input class="back_lang b_lang2" id="Spring" onclick="add_lang(this)" type="checkbox" name="language" value="Spring">Spring</label><label class="langs back_lang b_lang3">' +
                        '<input class="back_lang b_lang3" id="Nodejs" onclick="add_lang(this)" type="checkbox" name="language" value="Nodejs">Nodejs</label><label class="langs back_lang b_lang4">' +
                        '<input class="back_lang b_lang4" id="Nestjs" onclick="add_lang(this)" type="checkbox" name="language" value="Nestjs">Nestjs</label><label class="langs back_lang b_lang5">' +
                        '<input class="back_lang b_lang5" id="Go" onclick="add_lang(this)" type="checkbox" name="language" value="Go">Go</label><label class="langs back_lang b_lang6">' +
                        '<input class="back_lang b_lang6" id="Kotlin" onclick="add_lang(this)" type="checkbox" name="language" value="Kotlin">Kotlin</label><label class="langs back_lang b_lang7">' +
                        '<input class="back_lang b_lang7" id="Express" onclick="add_lang(this)" type="checkbox" name="language" value="Express">Express</label><label class="langs back_lang b_lang8">' +
                        '<input class="back_lang b_lang8" id="MySQL" onclick="add_lang(this)" type="checkbox" name="language" value="MySQL">MySQL</label><label class="langs back_lang b_lang9">' +
                        '<input class="back_lang b_lang9" id="MongoDB" onclick="add_lang(this)" type="checkbox" name="language" value="MongoDB">MongoDB</label><label class="langs back_lang b_lang10">' +
                        '<input class="back_lang b_lang10" id="Python" onclick="add_lang(this)" type="checkbox" name="language" value="Python">Python</label><label class="langs back_lang b_lang11">' +
                        '<input class="back_lang b_lang11" id="Django" onclick="add_lang(this)" type="checkbox" name="language" value="Django">Django</label><label class="langs back_lang b_lang12">' +
                        '<input class="back_lang b_lang12" id="php" onclick="add_lang(this)" type="checkbox" name="language" value="php">php</label><label class="langs back_lang b_lang13">' +
                        '<input class="back_lang b_lang13" id="GraphQL" onclick="add_lang(this)" type="checkbox" name="language" value="GraphQL">GraphQL</label><label class="langs back_lang b_lang14">' +
                        '<input class="back_lang b_lang14" id="Firebase" onclick="add_lang(this)" type="checkbox" name="language" value="Firebase">Firebase</label>'
                    //Kotlin 중복 제거
                    let langs_mob = document.getElementById('langs_mob')
                    langs_mob.innerHTML = '<label class="langs mob_lang m_lang1">' +
                        '<input class="mob_lang m_lang1" id="Flutter" onclick="add_lang(this)" type="checkbox" name="language" value="Flutter">Flutter</label><label class="langs mob_lang m_lang2">' +
                        '<input class="mob_lang m_lang2" id="Swift" onclick="add_lang(this)" type="checkbox" name="language" value="Swift">Swift</label><label class="langs mob_lang m_lang4">' +
                        '<input class="mob_lang m_lang4" id="ReactNative" onclick="add_lang(this)" type="checkbox" name="language" value="ReactNative">ReactNative</label><label class="langs mob_lang m_lang5">' +
                        '<input class="mob_lang m_lang5" id="Unity" onclick="add_lang(this)" type="checkbox" name="language" value="Unity">Unity</label>'
                    k = 1
                    break;
                }
            }
            if (k!=1){
                let langs_mob = document.getElementById('langs_mob')

                langs_mob.innerHTML = '<label class="langs mob_lang m_lang1">' +
                    '<input class="mob_lang m_lang1" id="Flutter" onclick="add_lang(this)" type="checkbox" name="language" value="Flutter">Flutter</label><label class="langs mob_lang m_lang2">' +
                    '<input class="mob_lang m_lang2" id="Swift" onclick="add_lang(this)" type="checkbox" name="language" value="Swift">Swift</label><label class="langs back_lang b_lang6">' +
                    '<input class="back_lang b_lang6" id="Kotlin" onclick="add_lang(this)" type="checkbox" name="language" value="Kotlin">Kotlin</label><label class="langs mob_lang m_lang4">' +
                    '<input class="mob_lang m_lang4" id="ReactNative" onclick="add_lang(this)" type="checkbox" name="language" value="ReactNative">ReactNative</label><label class="langs mob_lang m_lang5">' +
                    '<input class="mob_lang m_lang5" id="Unity" onclick="add_lang(this)" type="checkbox" name="language" value="Unity">Unity</label>'
=======

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
>>>>>>> de7f9b36978e327f4dc5cb8805427caa1c1407c0
            }

        } else if (a.value=="기타") {
            console.log(a.value)
            let langs_etc = document.getElementById('langs_etc')
<<<<<<< HEAD
            langs_etc.innerHTML = '<label class="langs etc_lang e_lang1"><input class="etc_lang e_lang1" id="AWS" onclick="add_lang(this)" type="checkbox" name="language" value="AWS">AWS</label><label class="langs etc_lang e_lang2">' +
                '<input class="etc_lang e_lang2" id="Kubernetes" onclick="add_lang(this)" type="checkbox" name="language" value="Kubernetes">Kubernetes</label><label class="langs etc_lang e_lang3">' +
                '<input class="etc_lang e_lang3" id="Docker" onclick="add_lang(this)" type="checkbox" name="language" value="Docker">Docker</label><label class="langs etc_lang e_lang4">' +
                '<input class="etc_lang e_lang4" id="Git" onclick="add_lang(this)" type="checkbox" name="language" value="Git">Git</label><label class="langs etc_lang e_lang5">' +
                '<input class="etc_lang e_lang5" id="Figma" onclick="add_lang(this)" type="checkbox" name="language" value="Figma">Figma</label><label class="langs etc_lang e_lang6">' +
                '<input class="etc_lang e_lang3" id="Zeplin" onclick="add_lang(this)" type="checkbox" name="language" value="Zeplin">Zeplin</label><label class="langs etc_lang e_lang7">' +
                '<input class="etc_lang e_lang4" id="Jest" onclick="add_lang(this)" type="checkbox" name="language" value="Jest">Jest</label><label class="langs etc_lang e_lang8">' +
                '<input class="etc_lang e_lang5" id="C" onclick="add_lang(this)" type="checkbox" name="language" value="C">C</label>'
        }
    }

    // 추가 시 language 영역 설정 유지
=======
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
>>>>>>> de7f9b36978e327f4dc5cb8805427caa1c1407c0

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

// document.querySelector("#start_date").value = new Date().toISOString().substring(0, 10);
// document.querySelector("#finish_date").value = new Date().toISOString().substring(0, 10);
