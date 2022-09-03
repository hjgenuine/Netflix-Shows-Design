window.onscroll = function () {
    scrollFunction();
};
//Navbar scroll effect
function scrollFunction() {
    if (
        document.body.scrollTop >= 70 ||
        document.documentElement.scrollTop >= 70
    ) {
        document.getElementById("top_navbar").style.background = "black";
    } else {
        document.getElementById("top_navbar").style.background = "transparent";
    }
}

window.audio_element = undefined;

// Song
function playSong(song_id) {
    if (window.audio_element != undefined) {
        window.audio_element.currentTime = 0;
        window.audio_element.pause();
        window.audio_element = undefined;
    }

    window.audio_element = document.getElementById(song_id);
    window.audio_element.play();
}
function pauseSong(song_id) {
    window.audio_element = document.getElementById(song_id);
    window.audio_element.currentTime = 0;
    window.audio_element.pause();
    window.audio_element = undefined;
}
// Trailer
function playTrailer(index, video_id, button_id) {
    const trailerContainer = document.getElementsByClassName("trailerContainer")[index];
    const video = document.getElementById(video_id);
    const closeBtn = document.getElementById(button_id);
    trailerContainer.style.visibility = "visible";
    video.play();
    closeBtn.addEventListener("click", closeTrailer);
    function closeTrailer() {
        trailerContainer.style.visibility = "hidden";
        video.currentTime = 0;
        video.pause();
        closeBtn.removeEventListener("click", closeTrailer);
    }
}