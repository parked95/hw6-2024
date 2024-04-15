var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	console.log("Autoplay is set to", video.autoplay)
	video.loop = false
	console.log("Loop is set to", video.loop)

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
	video.play();

});

document.querySelector("#slider").addEventListener("change", function() {
	var vol = document.getElementById('slider').value;
	document.querySelector('#volume').innerHTML = vol + "%";
	video.volume = vol/100
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down Video")
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video")
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.seekable.end(0)) {
		video.currentTime = video.seekable.start(0);
	}
	else {
		video.currentTime += 10
	}
	console.log("Skip ahead")
	console.log("Video current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {
		video.muted = true;
		document.getElementById('mute').innerHTML = "Unmute"
	}
	else {
		video.muted = false;
		document.getElementById('mute').innerHTML = "Mute"
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.getElementById('player1').classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	document.getElementById('player1').classList.remove("oldSchool")
});