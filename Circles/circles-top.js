let circularProgressT = document.querySelector(".circular-progress-top"),
    progressValueT = document.querySelector(".percentage-top");
let progressStartValueT = 0,    
    progressEndValueT = 95,    
    speedT = 20;
    
let progressT = setInterval(() => {
    progressStartValueT++;
    progressValueT.textContent = `${progressStartValueT}%`
    circularProgressT.style.background = `conic-gradient(#66D3AC ${progressStartValueT * 3.6}deg, #ededed 0deg)`
    if(progressStartValueT == progressEndValueT){
        clearInterval(progressT);
    }    
}, speedT);


