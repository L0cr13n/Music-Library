var mytrack = document.getElementById('mytrack');
var source = mytrack.getElementsByTagName('source');;
var track = document.getElementById('track');
var count = 0;
var playButton = document.getElementById('playButton');
var duration = document.getElementById('fullDuration');
var currentTime = document.getElementById('currentTime');
var plistWin = document.getElementById('playlistWindow');
var test = mytrack.duration;
var trackWin = document.getElementById("liTrack");
var barSize = 100;
var progBar = document.getElementById('progressBar');
var randomize = [];
var musicFolder = "Music/Besnine/";
var plist = "";
var playlist = [
		"Av.i & Besnine - Way To Heaven.mp3", 
		"Besnine - A New Era.mp3", 
		"Besnine - All Night Long.mp3", 
		"Besnine - Early Morning.mp3", 
		"Besnine - Feel Alive.mp3", 
		"Besnine - How To Love.mp3",
		"Besnine - Le Groove 1 Aliens  Friends.mp3",
		"Besnine - The Crash.mp3"
		];

addPlayList(playlist);

playButton.addEventListener('click', playPause, false);
muteButton.addEventListener('click', muteBtn, false);
nextButton.addEventListener('click', nextTrack, false);
prevButton.addEventListener('click', prevTrack, false);
randomButton.addEventListener('click', random, false);

// waits for the track to load before it grabs the duration
// fixes missing zero on 20.. 30.. etc..
mytrack.onloadeddata = function(){
	var minutes = parseInt(mytrack.duration/60);
	var seconds = parseInt(mytrack.duration%60);
	var checkSeconds = seconds.toString().length;
	document.getElementById('songTitle').innerHTML = "Track Name: " + playlist[count];
	if (checkSeconds == 1){
		return duration.innerHTML = minutes + ":" + seconds + "0";
	}
	else{
		return duration.innerHTML = minutes + ":" + seconds;
	}
};
function setTrack(){
	track.src = playlist[1];
	mytrack.load();
}
function highLightTrack(){
	
}
function playPause(){
	if(!mytrack.paused && !mytrack.ended){
		mytrack.pause();
		window.clearInterval(updateTime);
	}
	else{
		mytrack.play();
		updateTime = setInterval(update, 500);
	}
}
function muteBtn(){
	if(mytrack.muted == true){
		mytrack.muted = false;
	}
	else{
		mytrack.muted = true;
	}
}
function nextTrack(){
	if (count < 1){count = 0;};	
	count++;
	track.src = musicFolder + playlist[count];
	mytrack.load();
	mytrack.play();
	console.log(count);
}
function prevTrack(){
	if(count > playlist.length){count = playlist.length};
	count--;
	track.src = musicFolder + playlist[count];
	console.log(count);
	mytrack.load();
	mytrack.play();
	
}
function random(){
	randNum = Math.floor(Math.random() * playlist.length);
	console.log("count before " + count);
	console.log("random number" + randNum);
	if (count == randNum){
		randNum = Math.floor(Math.random() * playlist.length);
		console.log("randNum after" + randNum);
		count == randNum;
		return count;
	}
	else {
		count = randNum;
	}
	
	track.src = musicFolder + playlist[count];
	mytrack.load();
	mytrack.play();
}
function betterRandom(){
	
}
function buildPlist(){
	for(i = 1; i < (playlist.length) ; i++){
		plistWin = playlist[i];
		console.log(playlist[i])
	}
}
function update(){
	if(!mytrack.ended){
		var playedMinutes = parseInt(mytrack.currentTime/60);
		var playedSeconds = parseInt(mytrack.currentTime%60);
		var size = parseInt(mytrack.currentTime * barSize / mytrack.duration);
		progBar.style.width = size + "%";
		if(playedSeconds < 10){
			currentTime.innerHTML = playedMinutes + ":0" + playedSeconds;
		}
		else{
			currentTime.innerHTML = playedMinutes + ":" + playedSeconds;
		}
	}
	else{
		currentTime.innerHTML = "0.00";
		progBar.style.width = "0px";
		window.clearInterval(updateTime);
	}
}
function addPlayList(array){
	for(var i = 0; i < array.length; i++){
	plist += '<li id = "pListTrack">' + playlist[i] + '</li>';
	}
	trackWin.innerHTML = plist;
}