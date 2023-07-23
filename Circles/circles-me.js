let circularProgressM = document.querySelector(".circular-progress-me"),
    progressValueM = document.querySelector(".percentage-me");
let progressStartValueM = 0,    
    progressEndValueM = 59,    
    speedM = 20;
    
let progressM = setInterval(() => {
    progressStartValueM++;
    progressValueM.textContent = `${progressStartValueM}%`
    circularProgressM.style.background = `conic-gradient(#66D3AC ${progressStartValueM * 3.6}deg, #ededed 0deg)`
    if(progressStartValueM == progressEndValueM){
        clearInterval(progressM);
    }    
}, speedM);


