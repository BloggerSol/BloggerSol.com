var timeLeft=20;function updateTimer(){var e=timeLeft<10?"0"+timeLeft:timeLeft;document.getElementById("timer").innerHTML=e,--timeLeft<0&&(clearInterval(x),document.getElementById("timer").classList.add("hidden"),document.getElementById("download").classList.remove("hidden"))}var x=setInterval(updateTimer,1e3);
function refreshPage(){window.location.reload();} 
