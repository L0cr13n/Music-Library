//Javascript Globals
var mytrack = document.getElementById('mytrack');
var source = mytrack.getElementsByTagName('source');;
var track = document.getElementById('track');
var playButton = document.getElementById('playButton');
var duration = document.getElementById('fullDuration');
var currentTime = document.getElementById('currentTime');
var plistWin = document.getElementById('playlistWindow');
var libArtOl = document.getElementById("libArtOl");
var trackWin = document.getElementById("liTrack");
var progBar = document.getElementById('progressBar');
var libTrackOl = document.getElementById('libTrkOl');
var test = mytrack.duration;
var barSize = 100;
var checkArtist = "test";
var count = 0;
var randomize = [];
var artist = ["Bastion","Besnine", "Breakbot", "C2C", "Camo & krooked", 
				"Caravan Palace" , "Carpenter Brut", "Clone3", "Cma", "Crystal Bear",
				"Daft Punk", "Dakat", "Darude", "Data", "DeadMou5", "DJmehdi", "DJ's From Mars",
				"Droid Bishop", "Else", "Enferno", "Espen Kraft", "Exclusion", "Exobolt",
				"Filterkat", "Formless Voyager", "Futurisma", "Giorgio MoroDer", "Gloom Influx",
				"Gorillaz", "Gramatik", "Griz", "GrizMatik", "Horalion", "Jaques Lu Cont", 
				"Justice", "K_D", "Kavinsky", "Khamsin", "Kreo", "Lacuna", "Lazerhawk", 
				"Les Loups", "Libano", "Lindsey Sterling", "Luca Lush", "Luminous Sound",
				"Madeon", "Midranger", "Moustache Machine", "MrSuicideSheep", "Night Cock",
				"No Mana", "Otis Macdonald"];
var musicFolder = "player/Music/" //+ artist[1] + "/";
var plist = "";
var playlist = [];
var displayList = []; 
// Music Object Library
var asocLibrary = {
	"bastion": {
		artist: "Bastion",		
		album: ["Crystal EP"],
		art: "player/Music/Bastion/z Crystal EP.jpg",
		dir: "player/Music/Bastion/",
		tracks: ["Another Universe ( Feat. Katelyn Tarver ).mp3", 
				"DatA & Sacha Sieff - Mélodie.mp3", 
				"Greg Kozo - You ( BASTION Remix ).mp3", 
				"New World ( Feat. Whitemary )mp3", 
				"Opale.mp3", 
				"Palace.mp3",
				"Radium ( Feat. Pink Feathers ).mp3",
				"Twisted Love ( Feat. Bobby Saint ).mp3"]
	},
	"besnine": {
		artist: "Besnine",		
		album: ["Besnine"],
		dir: "player/Music/Besnine/",
		tracks: ["Avi & Besnine - Way To Heaven.mp3", 
				"Besnine - A New Era.mp3", 
				"Besnine - All Night Long.mp3", 
				"Besnine - Early Morning.mp3", 
				"Besnine - Feel Alive.mp3", 
				"Besnine - How To Love.mp3",
				"Besnine - Le Groove 1 Aliens  Friends.mp3",
				"Besnine - The Crash.mp3"]
	}
};
//Jquery function variables
var  updatedList = [];

//Run functions
addPlayList(playlist);
addArtistList(artist);


//Listen events
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
	document.getElementById('songTitle').innerHTML = "Track Name: " + displayList[count];
	if (checkSeconds == 1){
		return duration.innerHTML = minutes + ":" + seconds + "0";
	}
	else{
		return duration.innerHTML = minutes + ":" + seconds;
	}
};
function setTrack(){
	track.src = musicFolder + playlist[0];	
	setTimeout(function(){mytrack.pause()}, 220);

}
//Button functions
function playPause(){
	if(!mytrack.paused && !mytrack.ended){
		mytrack.pause();
		window.clearInterval(updateTime);
		playButton.innerHTML = ">";
	}
	else{
		mytrack.play();
		updateTime = setInterval(update, 500);
		playButton.innerHTML = "||";
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
	count++;
	if(count > playlist.length - 1){
		count = playlist.length -1;
	}
	track.src = musicFolder + playlist[count];
	mytrack.load();
	mytrack.play();
}
function prevTrack(){
	count--;
	//fixes var Count going into - values for playlist array
	if(count < 0){
		count = 0;
	}
	track.src = musicFolder + playlist[count];
	mytrack.load();
	mytrack.play();	
}
function random(){
	randNum = Math.floor(Math.random() * playlist.length);
	while (count == randNum){
		randNum = Math.floor(Math.random() * playlist.length);
		count == randNum;
		return count;
	}	
	count = randNum;		
	track.src = musicFolder + playlist[count];
	mytrack.load();
	mytrack.play();
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
		var size = mytrack.currentTime * barSize / mytrack.duration;
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
		count++
		pListTrackHighlight();
		mytrack.load();
		mytrack.play();
	}
}
function addPlayList(array){
	for(var i = 0; i < array.length; i++){
			plist += '<li class = "pListTrack">' + displayList[i] + '</li>';
			trackWin.innerHTML = plist;
	}
	
}
function addArtistList(array){
	var artistToAdd =  "";
	for(var i = 0; i < array.length; i++){	
	artistToAdd += '<li class = "libData">' + artist[i] + '</li>';
	}
	libArtOl.innerHTML = artistToAdd;
}
function addTrackList(array){
	var tracksToAdd = "";
	for(var i = 0; i < array.length; i++){
			tracksToAdd += '<li class = "libData addTrackPlist">' + array[i] + '</li>';
	}
	libTrkOl.innerHTML = tracksToAdd;
}

