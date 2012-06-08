mep-feature-playlist -  A playplist plugin for MediaElementjs
====================

Usage:
----------
<ol>
<li>
Download [mediaElemntjs] (http://github.com/johndyer/mediaelement/zipball/master)

</li>
<li>
Download [mep-feature-playlist] (https://github.com/JeyKeu/mep-feature-playlist/zipball/master)

</li>
<li>Include mediaelement-and-player.js</li>
<li>Include mep-feature-playlist.js</li>
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

For more option and installation [instructions] (http://mediaelementjs.com/#installation)

###[Demo] (http://jq.thebrandcrew.com/garage/mep-feature-playlist/)

