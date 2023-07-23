let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".percentage");
let progressStartValue = 0,    
    progressEndValue = 78,    
    speed = 20;
    
let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#66D3AC ${progressStartValue * 3.6}deg, #ededed 0deg)`
    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);


