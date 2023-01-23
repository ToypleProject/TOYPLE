
let offering = ['A','B','C','D','1','2','3','4','5']


window.onresize = function(event){
    let offers = document.getElementById('offers')
    console.log(offers)
    if (window.innerWidth >= 1200 ){
        offering_table.innerHTML = '<table id="offering_table">'
        let a = offering.length/4
        for(let j = 0;j<a;j++){
            const newTr = document.createElement('tr');
                offering_table.appendChild(newTr);
            for(let i = 0;i<4;i++){
                const newTd = document.createElement('td')
                newTr.appendChild(newTd)
                newTd.classList.add('offer')
            }
            sort();
        } 
    } else if (window.innerWidth >= 900 ){
        offering_table.innerHTML = '<table id="offering_table">'
        let a = offering.length/3
            
        for(let j = 0;j<a;j++){
            const newTr = document.createElement('tr');
                offering_table.appendChild(newTr);
            for(let i = 0;i<3;i++){
                const newTd = document.createElement('td')
                newTr.appendChild(newTd)
                newTd.classList.add('offer')
            }
            sort();
        } 
    } else if (window.innerWidth >= 600 ){
        offering_table.innerHTML = '<table id="offering_table">'
        let a = offering.length/2
            
        for(let j = 0;j<a;j++){
            const newTr = document.createElement('tr');
                offering_table.appendChild(newTr);
            for(let i = 0;i<2;i++){
                const newTd = document.createElement('td')
                newTr.appendChild(newTd)
                newTd.classList.add('offer')
            }
            sort();
        } 
    }
}
function sort() {
    let offering_table = document.getElementById('offering_table')
    // console.log(offering_table.rows.length)
    // console.log(offering_table.rows[0].cells.length)
    let j = 0
    let offer = document.getElementsByClassName('offer')
    for(let k=0;k<offering_table.rows.length;k++){
        for(let i=0;i<offering_table.rows[0].cells.length;i++){
            if(j == offering.length){
                break
            }
            offering_table.rows[k].cells[i].innerHTML = offering[j]
            // offer[j].classList.add('offer')
            j++
        }
    }
}
function resize() {
    // let offers = document.getElementById('offers')
    // let offering_table = document.getElementById('offering_table')
    // console.log(offers)
    // if (window.innerWidth >= 1200 ){
    //     offering_table.innerHTML = '<table id="offering_table">'
    //     for(let i = 0;i<4;i++){
    //         offering_table.innerHTML += '<tr>'
    //         for (let j =0;j<offering.length+1;j++){
    //             offering_table.innerHTML += '<td class="offer"></td>'
    //         }
    //         offering_table.innerHTML += '</tr>'
    //     }
    //     offering_table.innerHTML += '</table>'
        
    // } else if (window.innerWidth >= 900 ){
    //     offering_table.innerHTML = '<table id="offering_table">'
    //     for(let i = 0;i<3;i++){
    //         offering_table.innerHTML += '<tr>'
    //         for (let j =0;j<offering.length+1;j++){
    //             offering_table.innerHTML += '<td class="offer"></td>'
    //         }
    //         offering_table.innerHTML += '</tr>'
    //     }
    //     offering_table.innerHTML += '</table>'
        
    // } else if (window.innerWidth >= 600 ){
    //     offering_table.innerHTML = '<table id="offering_table">'
    //     for(let i = 0;i<2;i++){
    //         offering_table.innerHTML += '<tr>'
    //         for (let j =0;j<offering.length+1;j++){
    //             offering_table.innerHTML += '<td class="offer"></td>'
    //         }
    //         offering_table.innerHTML += '</tr>'
    //     }
    //     offering_table.innerHTML += '</table>'
        
    // }
    // sort()
}