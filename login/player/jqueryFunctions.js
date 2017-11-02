//All globals are declared in .js file
$(document).ready(function(){
	
	//  Makes the playlist sortable
	$("#liTrack").sortable({
		start: function(e, ui) {
			playlist.length = 0;
		},
		update: function(event, ui) {
			$('.pListTrack').each(function(){
			updatedList.push($(this).html());
			updatedList = playlist;
		})
		},
		stop : function(e, ui){
		//	console.log(playlist);
			console.log($.map($(this).find('li'), function(el) {
                return $(el).index();
            }));
		},
		axis: "y",
		cursor: "move",
		opacity: 0.5,
		change: function (event, ui){}
	});
	$("#pListWin")
	$("#dragButtonOn").click(function(){
		$("#wrapper").draggable({disabled: false});
		$("#playlistWindow").draggable({disabled: false});
		$("#libraryWindow").draggable({disabled: false});
		$(".slideBtnLight").draggable({disabled: false});
		$("#dragButtonOn").css("display", "none")
		$("#dragButtonOff").css("display", "inline-block")
	});
	$("#dragButtonOff").click(function(){
		$("#wrapper").draggable({disabled: true});
		$("#playlistWindow").draggable({disabled: true});
		$("#libraryWindow").draggable({disabled: true});
		$(".slideBtnLight").draggable({disabled: true});
		$("#dragButtonOff").css("display", "none")
		$("#dragButtonOn").css("display", "inline-block")
	});

//  Highlight correct track when track change
	$( "#nextButton").click(function() {
	  pListTrackHighlight();
	});
	$( "#prevButton" ).click(function() {
	  pListTrackHighlight();
	});
	$( "#randomButton").click(function() {
	 			var nthCountPlaying = count + 1;
			if($("nav").hasClass("navDark")){	
				$("li.pListTrack").animate({ backgroundColor: "black" }, 700);
				$("li.pListTrack:nth-child(" + nthCountPlaying + ")").animate({ backgroundColor: "white" }, 1);			
				}
		else{
				$("li.pListTrack").animate({ backgroundColor: "red" }, 700);
				$("li.pListTrack:nth-child(" + nthCountPlaying + ")").animate({ backgroundColor: "white" }, 1);
			}
	});
//  Seek bar function	
	$("#defaultBar").mousemove(function(e){
		var perc = e.offsetX/ $(this).width();
		$("#defaultBar").click(function(){
			mytrack.currentTime = perc * mytrack.duration;
		});
	});
	
// Theme changer button
	$(".pressBtn").click(function(){
		fixTrackColors();
		$(this).toggleClass('btnPressed', 700)
		$('.darkTheme').toggleClass('lightTheme', 700)
		$('.slideBtnLight').toggleClass('slideBtnDark', 700)
		$('.nav').toggleClass('navDark', 700)
		$('.playlistWindow').toggleClass('plistDark', 700)
		$('.navBtn').toggleClass('navBtnDark', 700)
		$('.songTitle, .currentTime, .fullDuration').toggleClass('songTitleDark', 700)
		$('.pListTrack').toggleClass('pListTrackDark', 700)
		$('.libTrk').toggleClass('libTrkDark', 700)
		$('.libWin').toggleClass('libWinDark', 700)
		$('.libData').toggleClass('libDataDark', 700)	
	});
// Click artist to populate albums and tracks
	$("#libArtOl .libData").click(function(){
		var checkArtist = this.innerHTML.toLowerCase();
		if(checkArtist in asocLibrary){
			// objectStart is the beginning of the database of the music object library
			var objectStart =(asocLibrary[checkArtist]);
			$("#libArtOl .libData").dblclick(function(){
					console.log();			
			})
			if($("nav").hasClass("navDark")){
				addTrackList(objectStart.tracks);	
				$( "li" ).addClass( "libDataDark" );
			}
			else{
				addTrackList(objectStart.tracks);
			}
		} //Add the track to the Plist. Fixes color issues on theme change.
		$(".addTrackPlist").click(function(){
			var checkTrack = this.innerHTML;
			plist = [];
			playlist.push(checkArtist + "/" + checkTrack);
			displayList.push(checkTrack);
		
			if($("nav").hasClass("navDark")){
				addPlayList(playlist);
				$(".pListTrack").addClass("pListTrackDark")
			}
			else{
				addPlayList(playlist);
			}
		});
	});
// double click to add whole album

			
}); // End doc.ready
//  Functions to call
function pListTrackHighlight(){
		var nthCountPlaying = count + 1;
		
		if($("nav").hasClass("navDark")){
			$(".pListTrack").css("background-color", "black");
		}else{
			$(".pListTrack").css("background-color", "red");
		}	
		$("li.pListTrack:nth-child(" + nthCountPlaying + ")").css("background-color", "white");
};
// Fix the track color on theme switch. 700ms delay makes theme button think class is still on.
function fixTrackColors(){
			var nthCountPlaying = count + 1;
			
			if(!($("nav").hasClass("navDark"))){	
				$("li").animate({ backgroundColor: "black" }, 700);
				$("li.pListTrack:nth-child(" + nthCountPlaying + ")").animate({ backgroundColor: "white" }, 1);			
			}
		else{
				$("li").animate({ backgroundColor: "red" }, 700);
				$("li.pListTrack:nth-child(" + nthCountPlaying + ")").animate({ backgroundColor: "white" }, 1);
			}
}


