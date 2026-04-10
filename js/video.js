var video;

function updateVolumeDisplay() {
  document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
}

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function () {
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
    video.playbackRate = video.playbackRate * 0.9;
    console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
    video.playbackRate = video.playbackRate / 0.9;
    console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
    if (video.currentTime + 10 >= video.duration) {
      video.currentTime = 0;
    } else {
      video.currentTime = video.currentTime + 10;
    }
    console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
    video.muted = !video.muted;
    if (video.muted) {
      this.textContent = "Unmute";
    } else {
      this.textContent = "Mute";
    }
});

document.querySelector("#slider").addEventListener("input", function () {
    video.volume = this.value / 100;
    updateVolumeDisplay();
});

document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
});
