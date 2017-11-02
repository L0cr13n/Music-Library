<!DOCTYPE html>

<html lang="en">
	<head>
		<title>HTML 5 web music player</title>
		<script type="text/javascript" src="player/js.js" defer></script>
		<script type="text/javascript" src="player/jquery-3.2.1.min.js"></script>
		 <script type="text/javascript" src="player/jquery-ui.js"></script>
		<script type="text/javascript" src="player/jqueryFunctions.js"></script>
		<link rel="stylesheet" href="player/style.css"/>
	</head>	
		<div class="slideBtnLight"> 
			<div class="pressBtn"></div>
		</div>
	<body>
		<div id="wrapper">
			<audio id="mytrack" autoplay="0">
				<source id="track" type="audio/mp3"/>
			</audio>
				<div id="trackTimeBar" class="libWin">	
					<span id="currentTime" class="currentTime">0:00</span>/<span id="fullDuration" class="fullDuration">0:00</span>
					<span id="songTitle" class="songTitle">Track Name:</span>
				</div>	
			<nav class="nav">
				<div id="defaultBar">
					<div id="progressBar"></div>
					<div id="slider"></div>
				</div>
				<div id="buttons">
					<button type="button" id= "playButton" class="navBtn">></button>
					<button type="button" id= "muteButton" class="navBtn">mute</button>
					<button type="button" id= "prevButton" class="navBtn">prev</button>
					<button type="button" id= "nextButton" class="navBtn">next</button>
					<button type="button" id= "randomButton" class="navBtn">random</button>					
					<br>
					<button type="button" id= "ctrlPanel" class="navBtn">Ctrl PNL</button>
					<button type="button" id= "dragButtonOff" class="navBtn">Drag Off</button>
					<button type="button" id= "dragButtonOn" class="navBtn">UI Drag</button>
							
				</div>
			</nav>
		</div>
			<div id="libraryWindow">
				<div id="libArt" class="libWin">
					<ol id= "libArtOl">
					</ol>
				</div>
				<div id="libAlb" class="libWin">
					<ul id= "libAlbUl">
						<li class="libData"></li>
					</ul>				
				</div>
				<div id="libTrk" class="libWin">
					<ol id= "libTrkOl">
						<li class="libData"> Choose an artist to see their tracks</li>
					</ol>				
				</div>
			</div>
			<!--- track spans id = pListTrack --->
			<div id="playlistWindow" class="playlistWindow"> 
				<ol id="liTrack">
					<li class="pListTrack">What?! You gunna play some music?</li>
				</ol>
			</div>		
	</body>
</html>


