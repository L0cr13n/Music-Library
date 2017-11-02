<!DOCTYPE html>

<html lang="en">
	<head>
		<title>HTML 5 web music player</title>
		<script type="text/javascript" src="js.js" defer></script>
		<script type="text/javascript" src="jquery-3.2.1.min.js"></script>
		 <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
		<script type="text/javascript" src="jqueryFunctions.js"></script>
		<link rel="stylesheet" href="style.css"/>
	</head>	
	
	<body>
		<div id="wrapper">
			<audio id="mytrack">
				<source id="track" type="audio/mp3"/>
			</audio>
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
					<span id="currentTime" class="currentTime">0:00</span>/<span id="fullDuration" class="fullDuration">0:00</span>
					<span id="songTitle" class="songTitle"></span>
					<button type="button" id= "dragButtonOn" class="navBtn">UI Drag</button>
					<button type="button" id= "dragButtonOff" class="navBtn">UI Drag off</button>
					<div class="slideBtnLight"> 
						<div class="pressBtn"></div>
					</div>		
				</div>
			</nav>
		</div>
			<!--- track spans id = pListTrack --->
			<div id="playlistWindow" class="playlistWindow"> 
				<ol id="liTrack"></ol>
			</div>		
	</body>
</html>


