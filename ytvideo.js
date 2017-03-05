// Youtube Variables
var firstPlay0 = true, firstPlay1 = true, firstPlay2 = true, firstPlay3 = true, pauseVideo;
var currVid;
var ytp0, ytplayer0Ended;
var ytp1, ytplayer1Ended;
var ytp2, ytplayer2Ended;
var ytp3, ytplayer3Ended;
var videoUrl = ['https://youtu.be/nAI7dR_VJZI','https://youtu.be/Q32UUzzdbBk','https://youtu.be/FZeC7CR64jo','https://youtu.be/nAI7dR_VJZI'];
/* ----------- Youtube Player ----------- */
//    Enabler.addEventListener(studio.events.StudioEvent.EXIT, stopVideo);
/* ----------- Video 0 ----------- */
function creatytp0(containerId) {
    if (!ytp0) {
        
        ytplayer0Ended = false;
        ytp0 = document.createElement('gwd-youtube');

        ytp0.setAttribute('id'               , 'ytp-0');
        ytp0.setAttribute('video-url'        , videoUrl[0]);
        ytp0.setAttribute('autoplay'         , 'standard'); // none, standard, preview, intro.
        // ytp0.setAttribute('muted'         , 'false');
        // Adformat parameter for YT autoplay in a lightbox.
        ytp0.setAttribute('width'            , '100%');             
        ytp0.setAttribute('height'           , '100%');
        ytp0.setAttribute('adformat'         , '2_9');
        // Fullscreen for lightboxes.
        ytp0.setAttribute('allowfullscreen'  , 'true');
        ytp0.setAttribute('suggestedQuality' , 'high');
        ytp0.setAttribute('extra-player-args', 'fs=1');
        ytp0.setAttribute('extra-player-args', 'playsinline=1');
        ytp0.setAttribute('controls'         , 'autohide'); // none, show, autohide.
        ytp0.setAttribute('preview-duration' , '15'); // Only for &#39;preview&#39; autoplay mode.
        //ytp0.setAttribute('muted', 'true');

        containerId.appendChild(ytp0);


        ytp0.addEventListener('ready', function(){

        })
        ytp0.addEventListener('playpressed', function() {
        if (ytp0.a.isMuted()) {
            ytp0.toggleMute();
        }
          if (ytplayer0Ended) {
            ytplayer0Ended = false;
            // Enabler.counter('ytp0 0 replay', true);
          }
          // Enabler.counter('ytp0 0 play pressed', true);
        }, false);

        ytp0.addEventListener('playing', function() {
            // Enabler.counter('ytp0 0 paused', true);
            Enabler.startTimer('YTVideo0 Timer');
            pauseVideo = false;
        }, false);
        ytp0.addEventListener('paused', function() {
            Enabler.stopTimer('YTVideo0 Timer');
            pauseVideo = true;
        }, false);
        ytp0.addEventListener('ended', function() {
            Enabler.stopTimer('YTVideo0 Timer');
            ytplayer0Ended = true;
            pauseVideo = true;
            TweenMax.set(['.video-container0','.back-btn'], { display: 'none' });     //<----- HIDE VIDEO CONTAINER ON COMPLETE
            
        }, false);
        ytp0.addEventListener('viewed0percent', function() {
            Enabler.counter('YTVideo0 Percent 0');
        }, false);
        ytp0.addEventListener('viewed25percent', function() {
            Enabler.counter('YTVideo0 Percent 25');
        }, false);
        ytp0.addEventListener('viewed50percent', function() {
            Enabler.counter('YTVideo0 Percent 50');
        }, false);
        ytp0.addEventListener('viewed75percent', function() {
            Enabler.counter('YTVideo0 Percent 75');
        }, false);
        ytp0.addEventListener('viewed100percent', function() {
            Enabler.counter('YTVideo0 Percent 100');
        }, false);
        ytp0.addEventListener('previewed0percent', function() {
          // _('.blocker').style.display = 'none';
          // Enabler.counter('YT_VIDEO_AUTOPLAY_0%');
          // if (!ytp0.a.isMuted()) {
          //   ytp0.toggleMute();
          // }
        }, false);
        ytp0.addEventListener('previewed25percent', function() {
          // Enabler.counter('ytp0 0 previewed 25%');
        }, false);
        ytp0.addEventListener('previewed50percent', function() {
          // Enabler.counter('YT_VIDEO_AUTOPLAY_50%');
        }, false);
        ytp0.addEventListener('previewed75percent', function() {
          // Enabler.counter('ytp0 0 previewed 75%');
        }, false);
        ytp0.addEventListener('previewed100percent', function() {
          // Enabler.counter('YT_VIDEO_AUTOPLAY_100%');
        }, false);
    }
}
/* ----------- Video 1 ----------- */
function creatytp1(containerId) {
    if (!ytp1) {
        
        ytplayer1Ended = false;
        ytp1 = document.createElement('gwd-youtube');

        ytp1.setAttribute('id'               , 'ytp-1');
        ytp1.setAttribute('video-url'        , videoUrl[1]);
        ytp1.setAttribute('autoplay'         , 'standard'); // none, standard, preview, intro.
        // ytp1.setAttribute('muted'         , 'false');
        // Adformat parameter for YT autoplay in a lightbox.
        ytp1.setAttribute('width'            , '100%');             
        ytp1.setAttribute('height'           , '100%');
        ytp1.setAttribute('adformat'         , '2_9');
        // Fullscreen for lightboxes.
        ytp1.setAttribute('allowfullscreen'  , 'true');
        ytp1.setAttribute('suggestedQuality' , 'high');
        ytp1.setAttribute('extra-player-args', 'fs=1');
        ytp1.setAttribute('extra-player-args', 'playsinline=1');
        ytp1.setAttribute('controls'         , 'autohide'); // none, show, autohide.
        ytp1.setAttribute('preview-duration' , '15'); // Only for &#39;preview&#39; autoplay mode.
        //ytp1.setAttribute('muted', 'true');

        containerId.appendChild(ytp1);


        ytp1.addEventListener('ready', function(){

        })
        ytp1.addEventListener('playpressed', function() {
        if (ytp1.a.isMuted()) {
            ytp1.toggleMute();
        }
          if (ytplayer1Ended) {
            ytplayer1Ended = false;
            // Enabler.counter('ytp1 0 replay', true);
          }
          // Enabler.counter('ytp1 0 play pressed', true);
        }, false);

        ytp1.addEventListener('playing', function() {
            // Enabler.counter('ytp1 0 paused', true);
            Enabler.startTimer('YTVideo1 Timer');
            pauseVideo = false;
        }, false);
        ytp1.addEventListener('paused', function() {
            Enabler.stopTimer('YTVideo1 Timer');
            pauseVideo = true;
        }, false);
        ytp1.addEventListener('ended', function() {
            Enabler.stopTimer('YTVideo1 Timer');
            ytplayer1Ended = true;
            pauseVideo = true;
            TweenMax.set(['.video-container1','.back-btn'], { display: 'none' });     //<----- HIDE VIDEO CONTAINER ON COMPLETE
        }, false);
        ytp1.addEventListener('viewed0percent', function() {
            Enabler.counter('YTVideo1 Percent 0');
        }, false);
        ytp1.addEventListener('viewed25percent', function() {
            Enabler.counter('YTVideo1 Percent 25');
        }, false);
        ytp1.addEventListener('viewed50percent', function() {
            Enabler.counter('YTVideo1 Percent 50');
        }, false);
        ytp1.addEventListener('viewed75percent', function() {
            Enabler.counter('YTVideo1 Percent 75');
        }, false);
        ytp1.addEventListener('viewed100percent', function() {
            Enabler.counter('YTVideo1 Percent 100');
        }, false);
        ytp1.addEventListener('previewed0percent', function() {
          // _('.blocker').style.display = 'none';
          // Enabler.counter('YT_VIDEO_AUTOPLAY_0%');
          // if (!ytp1.a.isMuted()) {
          //   ytp1.toggleMute();
          // }
        }, false);
        ytp1.addEventListener('previewed25percent', function() {
          // Enabler.counter('ytp1 0 previewed 25%');
        }, false);
        ytp1.addEventListener('previewed50percent', function() {
          // Enabler.counter('YT_VIDEO_AUTOPLAY_50%');
        }, false);
        ytp1.addEventListener('previewed75percent', function() {
          // Enabler.counter('ytp1 0 previewed 75%');
        }, false);
        ytp1.addEventListener('previewed100percent', function() {
          // Enabler.counter('YT_VIDEO_AUTOPLAY_100%');
        }, false);
    }
}
/* ----------- Video 2 ----------- */
function creatytp2(containerId) {
    if (!ytp2) {

        ytplayer2Ended = false;
        ytp2 = document.createElement('gwd-youtube');

        ytp2.setAttribute('id'               , 'ytp-2');
        ytp2.setAttribute('video-url'        , videoUrl[2]);
        ytp2.setAttribute('autoplay'         , 'standard'); // none, standard, preview, intro.
        // ytp2.setAttribute('muted'         , 'false');
        // Adformat parameter for YT autoplay in a lightbox.
        ytp2.setAttribute('width'            , '100%');             
        ytp2.setAttribute('height'           , '100%');
        ytp2.setAttribute('adformat'         , '2_9');
        // Fullscreen for lightboxes.
        ytp2.setAttribute('allowfullscreen'  , 'true');
        ytp2.setAttribute('suggestedQuality' , 'high');
        ytp2.setAttribute('extra-player-args', 'fs=1');
        ytp2.setAttribute('extra-player-args', 'playsinline=1');
        ytp2.setAttribute('controls'         , 'autohide'); // none, show, autohide.
        ytp2.setAttribute('preview-duration' , '15'); // Only for &#39;preview&#39; autoplay mode.
        //ytp2.setAttribute('muted', 'true');

        containerId.appendChild(ytp2);


        ytp2.addEventListener('ready', function(){

        })
        ytp2.addEventListener('playpressed', function() {
        if (ytp2.a.isMuted()) {
            ytp2.toggleMute();
        }
          if (ytplayer2Ended) {
            ytplayer2Ended = false;
            // Enabler.counter('ytp2 0 replay', true);
          }
          // Enabler.counter('ytp2 0 play pressed', true);
        }, false);

        ytp2.addEventListener('playing', function() {
            // Enabler.counter('ytp2 0 paused', true);
            Enabler.startTimer('YTVideo2 Timer');
            pauseVideo = false;
        }, false);
        ytp2.addEventListener('paused', function() {
            Enabler.stopTimer('YTVideo2 Timer');
            pauseVideo = true;
        }, false);
        ytp2.addEventListener('ended', function() {
            Enabler.stopTimer('YTVideo2 Timer');
            ytplayer2Ended = true;
            pauseVideo = true;
            TweenMax.set(['.video-container2','.back-btn'], { display: 'none' });     //<----- HIDE VIDEO CONTAINER ON COMPLETE
            
        }, false);
        ytp2.addEventListener('viewed0percent', function() {
            Enabler.counter('YTVideo2 Percent 0');
        }, false);
        ytp2.addEventListener('viewed25percent', function() {
            Enabler.counter('YTVideo2 Percent 25');
        }, false);
        ytp2.addEventListener('viewed50percent', function() {
            Enabler.counter('YTVideo2 Percent 50');
        }, false);
        ytp2.addEventListener('viewed75percent', function() {
            Enabler.counter('YTVideo2 Percent 75');
        }, false);
        ytp2.addEventListener('viewed100percent', function() {
            Enabler.counter('YTVideo2 Percent 100');
        }, false);
        ytp2.addEventListener('previewed0percent', function() {
          // _('.blocker').style.display = 'none';
          // Enabler.counter('YT_VIDEO_AUTOPLAY_0%');
          // if (!ytp2.a.isMuted()) {
          //   ytp2.toggleMute();
          // }
        }, false);
        ytp2.addEventListener('previewed25percent', function() {
          // Enabler.counter('ytp2 0 previewed 25%');
        }, false);
        ytp2.addEventListener('previewed50percent', function() {
          // Enabler.counter('YT_VIDEO_AUTOPLAY_50%');
        }, false);
        ytp2.addEventListener('previewed75percent', function() {
          // Enabler.counter('ytp2 0 previewed 75%');
        }, false);
        ytp2.addEventListener('previewed100percent', function() {
          // Enabler.counter('YT_VIDEO_AUTOPLAY_100%');
        }, false);
    }
}
/* ----------- Video 3 ----------- */
function creatytp3(containerId) {
    if (!ytp3) {

        ytplayer3Ended = false;
        ytp3 = document.createElement('gwd-youtube');

        ytp3.setAttribute('id'               , 'ytp-3');
        ytp3.setAttribute('video-url'        , videoUrl[3]);
        ytp3.setAttribute('autoplay'         , 'standard'); // none, standard, preview, intro.
        // ytp3.setAttribute('muted'         , 'false');
        // Adformat parameter for YT autoplay in a lightbox.
        ytp3.setAttribute('width'            , '100%');             
        ytp3.setAttribute('height'           , '100%');
        ytp3.setAttribute('adformat'         , '2_9');
        // Fullscreen for lightboxes.
        ytp3.setAttribute('allowfullscreen'  , 'true');
        ytp3.setAttribute('suggestedQuality' , 'high');
        ytp3.setAttribute('extra-player-args', 'fs=1');
        ytp3.setAttribute('extra-player-args', 'playsinline=1');
        ytp3.setAttribute('controls'         , 'autohide'); // none, show, autohide.
        ytp3.setAttribute('preview-duration' , '15'); // Only for &#39;preview&#39; autoplay mode.
        //ytp3.setAttribute('muted', 'true');

        containerId.appendChild(ytp3);


        ytp3.addEventListener('ready', function(){

        })
        ytp3.addEventListener('playpressed', function() {
        if (ytp3.a.isMuted()) {
            ytp3.toggleMute();
        }
          if (ytplayer3Ended) {
            ytplayer3Ended = false;
            // Enabler.counter('ytp3 0 replay', true);
          }
          // Enabler.counter('ytp3 0 play pressed', true);
        }, false);

        ytp3.addEventListener('playing', function() {
            // Enabler.counter('ytp3 0 paused', true);
            Enabler.startTimer('YTVideo3 Timer');
            pauseVideo = false;
        }, false);
        ytp3.addEventListener('paused', function() {
            Enabler.stopTimer('YTVideo3 Timer');
            pauseVideo = true;
        }, false);
        ytp3.addEventListener('ended', function() {
            Enabler.stopTimer('YTVideo3 Timer');
            ytplayer3Ended = true;
            pauseVideo = true;
            TweenMax.set(['.video-container3','.back-btn'], { display: 'none' });     //<----- HIDE VIDEO CONTAINER ON COMPLETE
        }, false);
        ytp3.addEventListener('viewed0percent', function() {
            Enabler.counter('YTVideo3 Percent 0');
        }, false);
        ytp3.addEventListener('viewed25percent', function() {
            Enabler.counter('YTVideo3 Percent 25');
        }, false);
        ytp3.addEventListener('viewed50percent', function() {
            Enabler.counter('YTVideo3 Percent 50');
        }, false);
        ytp3.addEventListener('viewed75percent', function() {
            Enabler.counter('YTVideo3 Percent 75');
        }, false);
        ytp3.addEventListener('viewed100percent', function() {
            Enabler.counter('YTVideo3 Percent 100');
        }, false);
        ytp3.addEventListener('previewed0percent', function() {
          // _('.blocker').style.display = 'none';
          // Enabler.counter('YT_VIDEO_AUTOPLAY_0%');
          // if (!ytp3.a.isMuted()) {
          //   ytp3.toggleMute();
          // }
        }, false);
        ytp3.addEventListener('previewed25percent', function() {
          // Enabler.counter('ytp3 0 previewed 25%');
        }, false);
        ytp3.addEventListener('previewed50percent', function() {
          // Enabler.counter('YT_VIDEO_AUTOPLAY_50%');
        }, false);
        ytp3.addEventListener('previewed75percent', function() {
          // Enabler.counter('ytp3 0 previewed 75%');
        }, false);
        ytp3.addEventListener('previewed100percent', function() {
          // Enabler.counter('YT_VIDEO_AUTOPLAY_100%');
        }, false);
    }
}
//CREATE VIDEO
function adVideo0() {
    creatytp0(_('#ytPlayer0').c);
}
function adVideo1() {
    creatytp1(_('#ytPlayer1').c);
}
function adVideo2() {
    creatytp2(_('#ytPlayer2').c);
}
function adVideo3() {
    creatytp3(_('#ytPlayer3').c);
}

function stopVideo() {
    if(!pauseVideo) {
//                    ytp0.pause();
    }
}