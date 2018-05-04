mep-feature-playlist -  A playplist plugin for MediaElementjs (DEPRICATED)
====================



**Please consider using the built-in [playlist plugin](https://github.com/mediaelement/mediaelement-plugins/blob/master/docs/playlist.md) for MediaelEmentjs.**



Usage:
----------
1-
Download **[mediaElemntjs] (http://github.com/johndyer/mediaelement/zipball/master)**

2-
Download **[mep-feature-playlist] (https://github.com/JeyKeu/mep-feature-playlist/zipball/master)**

3- Include 

- **mediaelement-and-player.js**

- **mep-feature-playlist.js**

4- Add this script to your page:

    <script>
    $(function(){
    
            $('audio,video').mediaelementplayer({
            alwaysShowControls:false, 
            features: ['playpause', 'playlist', 'progress', 'volume', 'sourcechooser']
            });
    
    });
    </script>

5- Add the audio tag and your tracks as follows:

    <audio id="player2" controls="controls">
        <source src="media/AirReview-Landmarks-02-ChasingCorporate.mp3" type="audio/mp3"/>
        <source src="media/framing.mp3" type="audio/mp3"/>
    </audio>
    
    
You will also need to replace the controls.png with the on included with this plugin. 

Screenshots
=========================

**Default Collapsed**

When the player is loaded with the **playist** feature, it will add playlist toggle button along with **next** and **previous** buttons.

![MEjs Collapsed playlist](http://projects.junaidqadir.com/mep-feature-playlist/img/playlist_collapsed.jpg "MEjs Collapsed playlist")


**Playlist Expanded**

![MEjs Expanded playlist](http://projects.junaidqadir.com/mep-feature-playlist/img/playlist_expanded.jpg "MEjs Expanded playlist")

**While Playing**

![MEjs Playing](http://projects.junaidqadir.com/mep-feature-playlist/img/playlist_expanded_playing.jpg "MEjs Playing")


More options and installation instructions related to MediaElementjs itself can be found [here] (http://mediaelementjs.com/#installation).

###[Demo] (http://projects.junaidqadir.com/mep-feature-playlist/)

