var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video= document.querySelector("#player1");
    volume = document.querySelector("#volume");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = video.volume *100 +"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*0.95;
  	console.log("Video speed now is:" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*(100/95);
  	console.log("Video speed now is:" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.duration - video.currentTime <= 15) {
		video.currentTime = 0;
	console.log("Going back to the beginning")
	} else {
		video.currentTime += 15;
	}
	console.log("Current time is:" + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		this.innerHTML = "Mute";
		console.log("Unmuted");
	} else {
		video.muted = true;
		this.innerHTML = "Unmute";
		console.log("Muted");

	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log(this.value / 100);
	document.getElementById("volume").innerHTML = this.value + "%";
	video.volume = this.value/100;
	console.log("Volume:" + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
	console.log("OldSchool style now");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
	console.log("Original style now");
});

