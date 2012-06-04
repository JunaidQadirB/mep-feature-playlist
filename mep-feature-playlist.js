/**
 * MediaElement Playlist Feature (plugin). 
 * @author Junaid Qadir Baloch <shekhanzai.baloch@gmail.com>
 * Twitter handle: jeykeu
*/
(function($) {
    $.extend(mejs.MepDefaults, {
        playlistText: 'Show/Hide Playlist',
        nextText: 'Next Track',
        prevText: 'Previous Track'
    });
    
    // PLAYLIST WINDOW
    $.extend(MediaElementPlayer.prototype, {        
        buildplaylist: function(player, controls, layers, media) {            
            var 
            t = this,
            playlistWindow = 
            $('<div class="mejs-layer mejs-playlistWindow">' +
                '<ul class="mejs"></ul>' +
                '</div>').appendTo(layers).hide(),
            // PLAYLIST BUTTON
            playlistButton = 
            $('<div class="mejs-button mejs-playlist-button mejs-show-playlist" >' +
                '<button type="button" aria-controls="' + t.id + '" title="' + t.options.playlistText + '"></button>' +
                '</div>')
            .appendTo(controls)
            .click(function(e) {
                e.preventDefault();
                if(typeof media.playlist == "undefined"){
                    media.playlist = false;
                }
                if (media.playlist) {
                    playlistWindow.hide();
                    playlistButton.removeClass("mejs-hide-playlist").addClass("mejs-show-playlist");
                    media.playlist = false;
                } else {
                    media.playlist = true;
                    playlistWindow.show();
                    playlistButton.removeClass("mejs-show-playlist").addClass("mejs-hide-playlist");
                }
                return false;
            }),
            // PREVIOUS TRACK BUTTON
            prevButton = $('<div class="mejs-button mejs-prev-button mejs-prev">' +
                '<button type="button" aria-controls="' + t.id + '" title="' + t.options.prevText + '"></button>' +
                '</div>')
            .appendTo(controls)
            .click(function(e){
                e.preventDefault();
                loadPrevTrack();
                
            }),
            // NEXT TRACK BUTTON
            nextButton = $('<div class="mejs-button mejs-next-button mejs-next">' +
                '<button type="button" aria-controls="' + t.id + '" title="' + t.options.nextText + '"></button>' +
                '</div>')
            .appendTo(controls)
            .click(function(e){
                e.preventDefault();
                loadNextTrack();
            });
            
            getTrackName = function(trackUrl){
                if($.trim(trackUrl) == "" ){
                    return;
                }
                var trackUrlParts = trackUrl.split("/");
                if(trackUrlParts.length > 0){
                    return trackUrlParts[trackUrlParts.length-1];
                }else{
                    return;
                }
            };
            var tracks = [];
            
            $(".mejs-mediaelement audio source, .mejs-mediaelement video source").each(function(){
                if($.trim(this.src) != ""){
                    var track = {
                        source: this.src, 
                        name: ''
                    };
                    tracks.push(track);
                }
            });
            
            for(var track in tracks){                
                var trackFile = getTrackName(tracks[track].source);
                tracks[track].name = trackFile;
                tracks[track].name = decodeURIComponent(tracks[track].name);
                $(".mejs-layers .mejs-playlistWindow > ul").append('<li><a href="javascript:;" data-url="' + tracks[track].source + '" title="' + tracks[track].name + '">' + tracks[track].name + '</a></li>');
            };
            
            var loadNextTrack = function (){
             
                var nxt = $(".mejs-layers .mejs-playlistWindow > ul > li > a.current").parent().next();
                if(nxt.length <1){
                    nxt = $(".mejs-layers .mejs-playlistWindow > ul > li:first-child > a").parent();
                }
                var url =nxt.children("a").attr("data-url");
                $(".mejs-layers .mejs-playlistWindow > ul li a").removeClass("current");
                nxt.children("a").addClass("current");
                loadTrack(media, url);
            };
            
            var loadPrevTrack = function (){
                var prev = $(".mejs-layers .mejs-playlistWindow > ul > li > a.current").parent().prev();
                if(prev.length <1){
                    prev = $(".mejs-layers .mejs-playlistWindow > ul > li:last-child > a").parent();
                }
                var url = prev.children("a").attr("data-url");
                $(".mejs-layers .mejs-playlistWindow > ul li a").removeClass("current");
                prev.children("a").addClass("current");
                loadTrack(media, url);
            };
            var loadTrack = function(media, url){
                if(media.src != url){
                    media.pause();
                    media.setSrc(url);
                    media.play();
                }else{
                    if(media.paused){
                        media.play();
                    }    
                }
            };
            
            /**
             * When play is clicked, highlight the track being played in the 
             * playlist window
             */
            media.addEventListener("play",function(e){
                $(".mejs-layers .mejs-playlistWindow > ul li a").removeClass("current");
                $(".mejs-layers .mejs-playlistWindow > ul li a").each(function(){
                    if(media.src == $(this).attr("data-url")){
                        $(this).addClass("current");
                        return;
                    }
                });
                
                
            }, true);
            
            $(".mejs-layers .mejs-playlistWindow > ul li a").on("click",function(){                
                try{                   
                    loadTrack(media, $(this).attr("data-url"));
                    
                    $(".mejs-layers .mejs-playlistWindow > ul li a").removeClass("current");
                    $(this).addClass("current");
                }
                catch(e){
                    console.log(e);
                }
                return;
            });
        }
    });
	
})(mejs.$);