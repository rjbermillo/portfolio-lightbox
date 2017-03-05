//CB Core
"use strict";
var CB = (function(SCOPE){

    var device = function() {
        var that = this;

        this.getPlatformType = function() {
            var ua = that.getNavigatorUserAgent();
            return ua.match(/GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i) ? 'tv' : ua.match(/Xbox|PLAYSTATION.3|PLAYSTATION.4|Wii/i) ? 'tv' : ua.match(/iPad/i) || ua.match(/tablet/i) && !ua.match(/RX-34/i) || ua.match(/FOLIO/i) ? 'tablet' : ua.match(/Linux/i) && ua.match(/Android/i) && !ua.match(/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i) ? 'tablet' : ua.match(/Kindle/i) || ua.match(/Mac.OS/i) && ua.match(/Silk/i) ? 'tablet' : ua.match(/Opera/i) && ua.match(/Windows.NT.5/i) && ua.match(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i) ? 'mobile' : ua.match(/Windows.(NT|XP|ME|9)/) && !ua.match(/Phone/i) || ua.match(/Win(9|.9|NT)/i) ? 'desktop' : ua.match(/Macintosh|PowerPC/i) && !ua.match(/Silk/i) ? 'desktop' : ua.match(/Linux/i) && ua.match(/X11/i) ? 'desktop' : ua.match(/Solaris|SunOS|BSD/i) ? 'desktop' : 'mobile'
        };
        this.getNavigatorUserAgent = function() {
            return navigator.userAgent;
        };   
        this.getDeviceOrientation = function(height,width) {
            var deviceHeight = (height==null) ? window.innerHeight : height,
                deviceWidth = (width==null) ? window.innerWidth : width;
                //aspectRatio = 1.3; //
            return (deviceHeight > deviceWidth) ? 'Portrait' : 'Landscape';
        };
        this.isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
            },
            any: function() {
                return (that.isMobile.Android() || that.isMobile.BlackBerry() || that.isMobile.iOS() || that.isMobile.Opera() || that.isMobile.Windows());
            }
        };
    }
    
    SCOPE.device = new device();
    SCOPE.vers = 'v1.2';
    return SCOPE;
})(CB || {});




(function(SCOPE){
    var _ = function(x){return document.querySelector(x);}
    window.onload = function(){
        _('body').setAttribute('platform-type',(SCOPE.device.isMobile.any())?SCOPE.device.getPlatformType():"desktop")
    }
    function resize() {
      var vw   = window.innerWidth / 100;
      var vh   = window.innerHeight / 100;
      var vmin = Math.min(vw, vh);
      var vmax = Math.max(vw, vh);
      function getVmax(n){
        return n*vmax;
      }
      function getVmin(n){
        return n*vmin;
      }
//        _('body').style.fontSize = (( vmin * 2 ) + ( vmax * 1.3 ) + ( vh * 2 ))  + "px";
        TweenMax.set('.font-responsive', { fontSize: (( vmin * 2 ) + ( vmax * 1.3 ) + ( vh * 2 )) + "px"})
        _('body').setAttribute('orientation',SCOPE.device.getDeviceOrientation())
        
    }
    resize();
    window.addEventListener("resize", resize);
}(CB));

// inprogress //do not touch XD :D

//sources
//http://stackoverflow.com/questions/1186414/whats-the-algorithm-to-calculate-aspect-ratio-i-need-an-output-like-43-169
//https://en.wikipedia.org/wiki/Aspect_ratio_(image)