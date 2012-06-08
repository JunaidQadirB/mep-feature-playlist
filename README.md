mep-feature-playlist -  A playplist plugin for MediaElementjs
====================

Usage:
----------
<ol>
<li>
Download [mediaElemntjs] (http://github.com/johndyer/mediaelement/zipball/master)

</li>
<li>
Download 

**[mep-feature-playlist] (https://github.com/JeyKeu/mep-feature-playlist/zipball/master)**

</li>
<li>Include 

**mediaelement-and-player.js**

</li>
<li>Include 

**mep-feature-playlist.js**

</li>
<li>Add this script to your page:


    <code>
    <script>
    $(function(){
    
            $('audio,video').mediaelementplayer({
            alwaysShowControls:false, 
            features: ['playpause', 'playlist', 'progress', 'volume', 'sourcechooser']
            });
    
    });
    </script>
    </code>
</li>
</ol>

Screenshots
=========================

**Default Collapsed**

When the player is loaded with the **playist** feature, it will add playlist toggle button along with **next** and **previous** buttons.

![MEjs Collapsed playlist](http://jq.thebrandcrew.com/garage/mep-feature-playlist/img/playlist_collapsed.jpg "MEjs Collapsed playlist")


**Playlist Expanded**

![MEjs Expanded playlist](http://jq.thebrandcrew.com/garage/mep-feature-playlist/img/playlist_expanded.jpg "MEjs Expanded playlist")


For more options and installation [instructions] (http://mediaelementjs.com/#installation)

###[Demo] (http://jq.thebrandcrew.com/garage/mep-feature-playlist/)

