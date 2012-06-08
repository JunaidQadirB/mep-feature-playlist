mep-feature-playlist -  A playplist plugin for MediaElementjs
====================

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

You will also need to replace the controls.png with the on included with this plugin. 

Screenshots
=========================

**Default Collapsed**

When the player is loaded with the **playist** feature, it will add playlist toggle button along with **next** and **previous** buttons.

![MEjs Collapsed playlist](http://jq.thebrandcrew.com/garage/mep-feature-playlist/img/playlist_collapsed.jpg "MEjs Collapsed playlist")


**Playlist Expanded**

![MEjs Expanded playlist](http://jq.thebrandcrew.com/garage/mep-feature-playlist/img/playlist_expanded.jpg "MEjs Expanded playlist")


For more options and installation [instructions] (http://mediaelementjs.com/#installation) related to MediaElementjs itself.

###[Demo] (http://jq.thebrandcrew.com/garage/mep-feature-playlist/)

