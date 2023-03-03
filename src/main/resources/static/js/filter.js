function workFltr(obj) {
    console.log(obj.id)
    let filter_work = document.getElementsByClassName('filter_work')
    for(let i = 0; i<filter_work.length;i++){
        filter_work[i].style.borderBottom=''
    }
    obj.style.borderBottom='3px solid tan'
    let lang_filter = document.getElementById('lang_filter')
    if (obj.id == 'lang_fornt_end'){
        lang_filter.innerHTML = '<label class="langs front_lang f_lang1"><input class="front_lang f_lang1" id="JavaScript" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="JavaScript">JavaScript</label><label class="langs front_lang f_lang2"><input class="front_lang f_lang2" id="TypeScript" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="TypeScript">TypeScript</label><label class="langs front_lang f_lang3"><input class="front_lang f_lang3" id="React" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="React">React</label><label class="langs front_lang f_lang4"><input class="front_lang f_lang4" id="Vue" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Vue">Vue</label><label class="langs front_lang f_lang5"><input class="front_lang f_lang5" id="Svelte" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Svelte">Svelte</label><label class="langs front_lang f_lang6"><input class="front_lang f_lang6" id="Nextjs" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Nextjs">Nextjs</label>'
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
        lang_filter.innerHTML = '<label class="langs back_lang b_lang1"><input class="back_lang b_lang1" id="Java" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Java">Java</label><label class="langs back_lang b_lang2"><input class="back_lang b_lang2" id="Spring" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Spring">Spring</label><label class="langs back_lang b_lang3"><input class="back_lang b_lang3" id="Nodejs" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Nodejs">Nodejs</label><label class="langs back_lang b_lang4"><input class="back_lang b_lang4" id="Nestjs" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Nestjs">Nestjs</label><label class="langs back_lang b_lang5"><input class="back_lang b_lang5" id="Go" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Go">Go</label><label class="langs back_lang b_lang6"><input class="back_lang b_lang6" id="Kotlin" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Kotlin">Kotlin</label><label class="langs back_lang b_lang7"><input class="back_lang b_lang7" id="Express" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Express">Express</label><label class="langs back_lang b_lang8"><input class="back_lang b_lang8" id="MySQL" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="MySQL">MySQL</label><label class="langs back_lang b_lang9"><input class="back_lang b_lang9" id="MongoDB" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="MongoDB">MongoDB</label><label class="langs back_lang b_lang10"><input class="back_lang b_lang10" id="Python" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Python">Python</label><label class="langs back_lang b_lang11"><input class="back_lang b_lang11" id="Django" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Django">Django</label><label class="langs back_lang b_lang12"><input class="back_lang b_lang12" id="php" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="php">php</label><label class="langs back_lang b_lang13"><input class="back_lang b_lang13" id="GraphQL" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="GraphQL">GraphQL</label><label class="langs back_lang b_lang14"><input class="back_lang b_lang14" id="Firebase" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Firebase">Firebase</label>'
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
        lang_filter.innerHTML = '<label class="langs mob_lang m_lang1"><input class="mob_lang m_lang1" id="Flutter" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Flutter">Flutter</label><label class="langs mob_lang m_lang2"><input class="mob_lang m_lang2" id="Swift" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Swift">Swift</label><label class="langs back_lang b_lang6"><input class="back_lang b_lang6" id="Kotlin" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Kotlin">Kotlin</label><label class="langs mob_lang m_lang4"><input class="mob_lang m_lang4" id="ReactNative" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="ReactNative">ReactNative</label><label class="langs mob_lang m_lang5"><input class="mob_lang m_lang5" id="Unity" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Unity">Unity</label>'
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
        lang_filter.innerHTML = '<label class="langs etc_lang e_lang1"><input class="etc_lang e_lang1" id="AWS" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="AWS">AWS</label><label class="langs etc_lang e_lang2"><input class="etc_lang e_lang2" id="Kubernetes" onclick="add_lang(this)" type="checkbox" value="Kubernetes">Kubernetes</label><label class="langs etc_lang e_lang3"><input class="etc_lang e_lang3" id="Docker" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Docker">Docker</label><label class="langs etc_lang e_lang4"><input class="etc_lang e_lang4" id="Git" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Git">Git</label><label class="langs etc_lang e_lang5"><input class="etc_lang e_lang5" id="Figma" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Figma">Figma</label><label class="langs etc_lang e_lang6"><input class="etc_lang e_lang3" id="Zeplin" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Zeplin">Zeplin</label><label class="langs etc_lang e_lang7"><input class="etc_lang e_lang4" id="Jest" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="Jest">Jest</label><label class="langs etc_lang e_lang8"><input class="etc_lang e_lang5" id="C" onclick="add_lang(this)" type="checkbox" name="slt_lang" value="C">C</label>'
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
    showreset()
}

function add_lang(obj){
    let label_lang = document.getElementsByClassName(obj.classList)

    if(obj.classList.contains('lang_selected')){
        obj.classList.remove('lang_selected')
        let lang_list = document.getElementById('selected_lang_list')
        let selected_list = document.getElementsByClassName(obj.id)
        console.log(selected_list[0].parentNode)
        lang_list.removeChild(selected_list[0].parentNode)
    }else {
        label_lang[0].classList.add('lang_selected')
        let selected_lang_list = document.getElementById('selected_lang_list')
        selected_lang_list.innerHTML += `<label class="lang_selected selected_list"><input class="${obj.id}" type="checkbox" name="slt_lang" value="${obj.id}" checked onclick="uncheck(this)">${obj.id}<img class="delete_icon" src="../img/delete.svg"></label>`
    }

    showreset()
}

function uncheck(obj){
    let lang_list = document.getElementById('selected_lang_list')
    lang_list.removeChild(obj.parentNode)
    let label_lang = document.getElementById(obj.value)
    label_lang.parentNode.classList.remove('lang_selected')
    showreset()
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
    showreset()
}

function showreset() {
    let lang_list = document.getElementById('selected_lang_list')
    let filter_reset_area = document.getElementById('filter_reset_area')
    if(lang_list.childNodes.length > 0){
        filter_reset_area.style.visibility= 'visible';
    } else {
        filter_reset_area.style.visibility='hidden'
    }
}