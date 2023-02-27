function placeFltr(obj) {
    let label_place = document.getElementsByClassName(obj.classList)

    if(label_place[0].classList.contains('place_selected')){
        label_place[0].classList.remove('place_selected')
        // label_place[0].firstChild .checked = flase
    }else {
        label_place[0].classList.add('place_selected')
    }
    showreset('place')
}

function workFltr(obj) {
    console.log(obj.id)
    let filter_work = document.getElementsByClassName('filter_work')
    for(let i = 0; i<filter_work.length;i++){
        filter_work[i].style.borderBottom=''
    }
    obj.style.borderBottom='3px solid tan' 
    let lang_filter = document.getElementById('lang_filter')
    if (obj.id == 'lang_fornt_end'){
        lang_filter.innerHTML = '<div class="langs front_lang f_lang1" onclick="add_lang(this) " onclick="add_lang(this)"><div class="front_lang f_lang1" id="JavaScript" name="slt_lang">JavaScript</div></div><div class="langs front_lang f_lang2 " onclick="add_lang(this)"><div class="front_lang f_lang2" id="TypeScript" name="slt_lang">TypeScript</div></div><div class="langs front_lang f_lang3 " onclick="add_lang(this)"><div class="front_lang f_lang3" id="React" name="slt_lang">React</div></div><div class="langs front_lang f_lang4 " onclick="add_lang(this)"><div class="front_lang f_lang4" id="Vue" name="slt_lang">Vue</div></div><div class="langs front_lang f_lang5 " onclick="add_lang(this)"><div class="front_lang f_lang5" id="Svelte" name="slt_lang">Svelte</div></div><div class="langs front_lang f_lang6 " onclick="add_lang(this)"><div class="front_lang f_lang6" id="Nextjs" name="slt_lang">Nextjs</div></div>'
        let langs = document.getElementsByClassName('langs front_lang')
        let lang_list = document.getElementsByClassName('lang_selected selected_list')
        for(let i = 0; i<langs.length;i++){
            for(let j=0;j<lang_list.length;j++){
                console.log(lang_list[j].childNodes[0].id)
                if(String(langs[i].childNodes[0].id) == String(lang_list[j].childNodes[0].value)){
                    langs[i].classList.add('lang_selected')
                }
            }
        }
    }else if (obj.id == 'lang_back_end') {
        lang_filter.innerHTML = '<div class="langs back_lang b_lang1 " onclick="add_lang(this)"><div class="back_lang b_lang1" id="Java" name="slt_lang" value="Java">Java</div></div><div class="langs back_lang b_lang2 " onclick="add_lang(this)"><div class="back_lang b_lang2" id="Spring" name="slt_lang" value="Spring">Spring</div></div><div class="langs back_lang b_lang3 " onclick="add_lang(this)"><div class="back_lang b_lang3" id="Nodejs" name="slt_lang" value="Nodejs">Nodejs</div></div><div class="langs back_lang b_lang4 " onclick="add_lang(this)"><div class="back_lang b_lang4" id="Nestjs" name="slt_lang" value="Nestjs">Nestjs</div></div><div class="langs back_lang b_lang5 " onclick="add_lang(this)"><div class="back_lang b_lang5" id="Go" name="slt_lang" value="Go">Go</div></div><div class="langs back_lang b_lang6 " onclick="add_lang(this)"><div class="back_lang b_lang6" id="Kotlin" name="slt_lang" value="Kotlin">Kotlin</div></div><div class="langs back_lang b_lang7 " onclick="add_lang(this)"><div class="back_lang b_lang7" id="Express" name="slt_lang" value="Express">Express</div></div><div class="langs back_lang b_lang8 " onclick="add_lang(this)"><div class="back_lang b_lang8" id="MySQL" name="slt_lang" value="MySQL">MySQL</div></div><div class="langs back_lang b_lang9 " onclick="add_lang(this)"><div class="back_lang b_lang9" id="MongoDB" name="slt_lang" value="MongoDB">MongoDB</div></div><div class="langs back_lang b_lang10 " onclick="add_lang(this)"><div class="back_lang b_lang10" id="Python" name="slt_lang" value="Python">Python</div></div><div class="langs back_lang b_lang11 " onclick="add_lang(this)"><div class="back_lang b_lang11" id="Django" name="slt_lang" value="Django">Django</div></div><div class="langs back_lang b_lang12 " onclick="add_lang(this)"><div class="back_lang b_lang12" id="php" name="slt_lang" value="php">php</div></div><div class="langs back_lang b_lang13 " onclick="add_lang(this)"><div class="back_lang b_lang13" id="GraphQL" name="slt_lang" value="GraphQL">GraphQL</div></div><div class="langs back_lang b_lang14 " onclick="add_lang(this)"><div class="back_lang b_lang14" id="Firebase" name="slt_lang" value="Firebase">Firebase</div></div>' 
        let langs = document.getElementsByClassName('langs back_lang')
        let lang_list = document.getElementsByClassName('lang_selected selected_list')
        for(let i = 0; i<langs.length;i++){
            for(let j=0;j<lang_list.length;j++){
                console.log(lang_list[j].childNodes[0].id)
                if(String(langs[i].childNodes[0].id) == String(lang_list[j].childNodes[0].value)){
                    langs[i].classList.add('lang_selected')
                }
            }
        }
    }else if (obj.id == 'lang_mobile'){
        lang_filter.innerHTML = '<div class="langs mob_lang m_lang1 " onclick="add_lang(this)"><div class="mob_lang m_lang1" id="Flutter" name="slt_lang" value="Flutter">Flutter</div></div><div class="langs mob_lang m_lang2 " onclick="add_lang(this)"><div class="mob_lang m_lang2" id="Swift" name="slt_lang" value="Swift">Swift</div></div><div class="langs back_lang b_lang6 " onclick="add_lang(this)"><div class="back_lang b_lang6" id="Kotlin" name="slt_lang" value="Kotlin">Kotlin</div></div><div class="langs mob_lang m_lang4 " onclick="add_lang(this)"><div class="mob_lang m_lang4" id="ReactNative" name="slt_lang" value="ReactNative">ReactNative</div></div><div class="langs mob_lang m_lang5 " onclick="add_lang(this)"><div class="mob_lang m_lang5" id="Unity"     name="slt_lang" value="Unity">Unity</div></div>'
        let langs = document.getElementsByClassName('langs mob_lang')
        let lang_list = document.getElementsByClassName('lang_selected selected_list')
        for(let i = 0; i<langs.length;i++){
            for(let j=0;j<lang_list.length;j++){
                console.log(lang_list[j].childNodes[0].id)
                if(String(langs[i].childNodes[0].id) == String(lang_list[j].childNodes[0].value)){
                    langs[i].classList.add('lang_selected')
                }
                if(String(lang_list[j].childNodes[0].value) == 'Kotlin'){
                    let Kotlin = document.getElementById('Kotlin')
                    Kotlin.parentNode.classList.add('lang_selected')
                }
            }
        }
    }else if (obj.id == 'lang_etc'){
        lang_filter.innerHTML = '<div class="langs etc_lang e_lang1 " onclick="add_lang(this)"><div class="etc_lang e_lang1" id="AWS" name="slt_lang" value="AWS">AWS</div></div><div class="langs etc_lang e_lang2 " onclick="add_lang(this)"><div class="etc_lang e_lang2" id="Kubernetes" value="Kubernetes">Kubernetes</div></div><div class="langs etc_lang e_lang3 " onclick="add_lang(this)"><div class="etc_lang e_lang3" id="Docker" name="slt_lang" value="Docker">Docker</div></div><div class="langs etc_lang e_lang4 " onclick="add_lang(this)"><div class="etc_lang e_lang4" id="Git" name="slt_lang" value="Git">Git</div></div><div class="langs etc_lang e_lang5 " onclick="add_lang(this)"><div class="etc_lang e_lang5" id="Figma" name="slt_lang" value="Figma">Figma</div></div><div class="langs etc_lang e_lang6 " onclick="add_lang(this)"><div class="etc_lang e_lang3" id="Zeplin" name="slt_lang" value="Zeplin">Zeplin</div></div><div class="langs etc_lang e_lang7 " onclick="add_lang(this)"><div class="etc_lang e_lang4" id="Jest" name="slt_lang" value="Jest">Jest</div></div><div class="langs etc_lang e_lang8 " onclick="add_lang(this)"><div class="etc_lang e_lang5" id="C" name="slt_lang" value="C">C</div></div>'
        let langs = document.getElementsByClassName('langs etc_lang')
        let lang_list = document.getElementsByClassName('lang_selected selected_list')
        for(let i = 0; i<langs.length;i++){
            for(let j=0;j<lang_list.length;j++){
                console.log(lang_list[j].childNodes[0].id)
                if(String(langs[i].childNodes[0].id) == String(lang_list[j].childNodes[0].value)){
                    langs[i].classList.add('lang_selected')
                }
            }
        }
    }
    showreset('work')
}

function add_lang(obj){

    if(obj.classList.contains('lang_selected')){
        obj.classList.remove('lang_selected')
        let lang_list = document.getElementById('selected_lang_list')
        let selected_list = document.getElementsByClassName(obj.childNodes[0].id)
        console.log(selected_list[0].parentNode)
        lang_list.removeChild(selected_list[0].parentNode)
    }else {
        obj.classList.add('lang_selected')
        let selected_lang_list = document.getElementById('selected_lang_list')
        selected_lang_list.innerHTML += `<label class="lang_selected selected_list"><input class="${obj.childNodes[0].id}" type="checkbox" name="slt_lang" value="${obj.childNodes[0].id}" checked onclick="uncheck(this)">${obj.childNodes[0].id}<img class="delete_icon" src="../img/delete.svg"></label>`
    }
    
    showreset('work')
}

function uncheck(obj){
    let lang_list = document.getElementById('selected_lang_list')
    lang_list.removeChild(obj.parentNode)
    let label_lang = document.getElementById(obj.value)
    label_lang.parentNode.classList.remove('lang_selected')
    showreset('work')
}

function reset_filter() {
    let lang_list = document.getElementById('selected_lang_list')
    while(lang_list.childNodes.length > 0){
        lang_list.removeChild(lang_list.childNodes[0])
    }
    let lang_selected = document.getElementsByClassName('lang_selected')
    while(lang_selected.length>0){
        lang_selected[0].classList.remove('lang_selected')
    }
    showreset('work')
}

function reset_place_filter() {
    let place_selected = document.getElementsByClassName('place_selected')
    while(place_selected.length > 0){
        place_selected[0].firstChild.checked = false
        place_selected[0].classList.remove('place_selected')
    }
    showreset('place')
}

function showreset(a) {
    if(a=='work'){
        let lang_list = document.getElementById('selected_lang_list')
        let filter_reset_area = document.getElementById('filter_reset_area')
        if(lang_list.childNodes.length > 0){
            filter_reset_area.style.visibility= 'visible';
        } else {
            filter_reset_area.style.visibility='hidden'
        }
    }
    if(a=='place'){
        let place_selected = document.getElementsByClassName('place_selected')
        let filter_place_reset_area = document.getElementById('filter_place_reset_area')
        if(place_selected.length > 0){
            filter_place_reset_area.style.visibility='visible'
        } else {
            filter_place_reset_area.style.visibility='hidden'
        }
    }
}