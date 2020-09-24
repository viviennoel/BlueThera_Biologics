playVideo();

function playVideo() {
    document.getElementById("playVideo").addEventListener('click', startVideo);
}

function startVideo() {
    event.preventDefault();
    let vid = document.getElementById("homeVideo");
    let vidDiv = document.getElementById("homeVideo_div");
    let play = document.getElementById("playVideo");
    let bandeHome = document.getElementById('bande_home');
    vidDiv.style.opacity = "1";
    play.style.opacity = "0";
    bandeHome.style.opacity = "0";
    vid.play();
}

function videoEnded() {
    let vidDiv = document.getElementById("homeVideo_div");
    let play = document.getElementById("playVideo");
    let bandeHome = document.getElementById('bande_home');
    bandeHome.style.opacity = "1";
    play.style.opacity = "1";
    play.innerHTML = "Go back to the future";
    vidDiv.style.opacity = "0";
}