//"use strict"

let dd = 8
let hh = 12
let mm = 44
let ss = 28
let mile = 1000

function contagem() {
    setInterval(() => {    ss--
    
        if(ss == 0){
            ss = 60
            mm--
        }
        if(mm == 0){
            mm = 60
            hh--
        }
        if(hh == 0){
            hh = 24
            if(dd > 0){
                dd--
            }
        }
        
        
        
        let formato = (dd < 10 ? '0' + dd : dd) + ':' + (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss )    
        document.getElementById('tempo').innerHTML = formato
     }, mile)
}

