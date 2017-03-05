- function() {
    "use strict";
    var f = function(a) {
            return "gwd-page" == a.tagName.toLowerCase() || "gwd-page" == a.getAttribute("is")
        },
        k = function(a) {
            if (f(a)) return a;
            for (; a && 9 != a.nodeType;)
                if ((a = a.parentElement) && f(a)) return a;
            return null
        };
    var n = function() {
        var a = window.navigator.userAgent || "";
        return -1 < a.indexOf("Trident") || -1 < a.indexOf("MSIE")
    };
    var p = function(a, b) {
            var c;
            c = document.createEvent("Event");
            c.initEvent(a, !0, !0);
            b.dispatchEvent(c)
        },
        q = function(a, b) {
            var c = function(d) {
                a.removeEventListener("load", c);
                b(d)
            };
            a.addEventListener("load", c)
        };

    function r(a, b) {
        this.u = a;
        for (var c = b.split("."), d = window, e = 0; d && e < c.length; e++) d = d[c[e]];
        this.l = d ? 0 : 2;
        this.f = []
    }
    r.prototype.D = function() {
        for (var a = this.l = 0; a < this.f.length; a++) this.f[a]();
        this.f = []
    };
    r.prototype.load = function(a) {
        a && (0 == this.l ? a() : this.f.push(a));
        if (2 == this.l) {
            this.l = 1;
            a = document.createElement("script");
            a.type = "text/javascript";
            a.async = !0;
            a.src = this.u;
            q(a, this.D.bind(this));
            var b = document.getElementsByTagName("script")[0];
            b ? b.parentNode.insertBefore(a, b) : document.getElementsByTagName("head")[0].appendChild(a)
        }
    };

    function t(a, b) {
        this.u = a;
        this.C = b;
        this.s = null;
        this.f = [];
        this.w = !1
    }
    t.prototype.load = function(a) {
        this.w ? a() : (this.s || (this.s = new r(this.u, this.C)), this.s.load(), this.f.push(a))
    };
    var u = null;
    window.onYouTubeIframeAPIReady = function() {
        p("apiloaded", document);
        var a = u;
        a.w = !0;
        for (var b = 0; b < a.f.length; b++) a.f[b]();
        a.f = []
    };
    var v = function(a) {
            var b = "https://www.youtube.com/embed/" + a.videoId,
                b = b + "?enablejsapi=1&html5=1";
            a.autoplay && (b += "&autoplay=1");
            a.adformat && (b += "&adformat=" + a.adformat);
            n() && (b += "&wmode=opaque");
            a.theme && (b += "&theme=" + a.theme);
            b += "&controls=";
            switch (a.controls) {
                case "none":
                    b += "0";
                    break;
                case "show":
                    b += "1&autohide=0";
                    break;
                case "autohide":
                case void 0:
                    b += "1&autohide=1"
            }
            a.annotations || (b += "&iv_load_policy=3");
            a.related || (b += "&rel=0");
            a.loop && (b += "&loop=1&playlist=" + a.videoId);
            a.title || (b += "&showinfo=0");
            a.startPosition && (b += "&start=" + a.startPosition);
            a.extraPlayerArgs && a.extraPlayerArgs.split("&").forEach(function(a) {
                a && (a = a.split("="), b += "&", b += a[0], 1 < a.length && (b += "=" + encodeURIComponent(a[1])))
            });
            return b
        },
        w = function(a, b, c, d) {
            u || (u = new t("https://www.youtube.com/iframe_api", "YT"));
            b || (b = Date.now() + "" + Math.floor(1E4 * Math.random()));
            b = "video" + b;
            u.load(function() {
                var e;
                e = b;
                var l = c.width,
                    h = c.height,
                    m = v(c),
                    y = c.allowfullscreen,
                    g = a.querySelector("#" + e);
                g || (g = document.createElement("iframe"), g.id = e, g.frameBorder =
                    "0", g.type = "text/html", a.appendChild(g));
                m != g.src && (g.src = m);
                g.width = l;
                g.height = h;
                y ? g.setAttribute("allowfullscreen", "") : g.removeAttribute("allowfullscreen");
                e = new YT.Player(e, {
                    events: c.events
                });
                d(e)
            })
        };
    var x = function(a) {
        setTimeout(a, 0)
    };
    var z = function(a) {
        a = a || "";
        var b = a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
        return b && 11 == b[2].length ? b[2] : a
    };
    document.registerElement && document.registerElement("gwd-youtube", {
        prototype: Object.create(HTMLElement.prototype, {
            createdCallback: {
                value: function() {
                    this.a = null;
                    this.A = this.j = this.g = !1;
                    this.c = [];
                    this.B = [];
                    this.v = this.b = null;
                    this.m = this.h = !1
                },
                enumerable: !0
            },
            getOverlay_: {
                value: function(a) {
                    if (!this.b) {
                        this.style.position = "relative";
                        var b = window.getComputedStyle(this).height,
                            c = window.getComputedStyle(this).width;
                        this.b = document.createElement("div");
                        this.b.className = "youtube-overlay";
                        this.b.style.height =
                            b;
                        this.b.style.width = c;
                        if (a) {
                            this.b.className += " youtube-play-button";
                            this.b.style.backgroundImage = "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4NCcgaGVpZ2h0PSc2MCc+PHBhdGggZD0nTTg0LjE1LDI2LjR2Ni4zNWMwLDIuODMzLTAuMTUsNS45NjctMC40NSw5LjRjLTAuMTMzLDEuNy0wLjI2NywzLjExNy0wLjQsNC4yNWwtMC4xNSwwLjk1Yy0wLjE2NywwLjc2Ny0wLjM2NywxLjUxNy0wLjYsMi4yNWMtMC42NjcsMi4zNjctMS41MzMsNC4wODMtMi42LDUuMTVjLTEuMzY3LDEuNC0yLjk2NywyLjM4My00LjgsMi45NWMtMC42MzMsMC4yLTEuMzE2LDAuMzMzLTIuMDUsMC40Yy0wLjc2NywwLjEtMS4zLDAuMTY3LTEuNiwwLjJjLTQuOSwwLjM2Ny0xMS4yODMsMC42MTctMTkuMTUsMC43NWMtMi40MzQsMC4wMzQtNC44ODMsMC4wNjctNy4zNSwwLjFoLTIuOTVDMzguNDE3LDU5LjExNywzNC41LDU5LjA2NywzMC4zLDU5Yy04LjQzMy0wLjE2Ny0xNC4wNS0wLjM4My0xNi44NS0wLjY1Yy0wLjA2Ny0wLjAzMy0wLjY2Ny0wLjExNy0xLjgtMC4yNWMtMC45LTAuMTMzLTEuNjgzLTAuMjgzLTIuMzUtMC40NWMtMi4wNjYtMC41MzMtMy43ODMtMS41LTUuMTUtMi45Yy0xLjAzMy0xLjA2Ny0xLjktMi43ODMtMi42LTUuMTVDMS4zMTcsNDguODY3LDEuMTMzLDQ4LjExNywxLDQ3LjM1TDAuOCw0Ni40Yy0wLjEzMy0xLjEzMy0wLjI2Ny0yLjU1LTAuNC00LjI1QzAuMTMzLDM4LjcxNywwLDM1LjU4MywwLDMyLjc1VjI2LjRjMC0yLjgzMywwLjEzMy01Ljk1LDAuNC05LjM1bDAuNC00LjI1YzAuMTY3LTAuOTY2LDAuNDE3LTIuMDUsMC43NS0zLjI1YzAuNy0yLjMzMywxLjU2Ny00LjAzMywyLjYtNS4xYzEuMzY3LTEuNDM0LDIuOTY3LTIuNDM0LDQuOC0zYzAuNjMzLTAuMTY3LDEuMzMzLTAuMywyLjEtMC40YzAuNC0wLjA2NiwwLjkxNy0wLjEzMywxLjU1LTAuMmM0LjktMC4zMzMsMTEuMjgzLTAuNTY3LDE5LjE1LTAuN0MzNS42NSwwLjA1LDM5LjA4MywwLDQyLjA1LDBMNDUsMC4wNWMyLjQ2NywwLDQuOTMzLDAuMDM0LDcuNCwwLjFjNy44MzMsMC4xMzMsMTQuMiwwLjM2NywxOS4xLDAuN2MwLjMsMC4wMzMsMC44MzMsMC4xLDEuNiwwLjJjMC43MzMsMC4xLDEuNDE3LDAuMjMzLDIuMDUsMC40YzEuODMzLDAuNTY2LDMuNDM0LDEuNTY2LDQuOCwzYzEuMDY2LDEuMDY2LDEuOTMzLDIuNzY3LDIuNiw1LjFjMC4zNjcsMS4yLDAuNjE3LDIuMjg0LDAuNzUsMy4yNWwwLjQsNC4yNUM4NCwyMC40NSw4NC4xNSwyMy41NjcsODQuMTUsMjYuNHogTTMzLjMsNDEuNEw1NiwyOS42TDMzLjMsMTcuNzVWNDEuNHonIGZpbGw9JyNDQzE4MUUnIGZpbGwtb3BhY2l0eT0nLjUnPjwvcGF0aD48cG9seWdvbiBwb2ludHM9JzMzLjMsNDEuNCAzMy4zLDE3Ljc1IDU2LDI5LjYnIGZpbGw9JyNGRkYnPjwvcG9seWdvbj48L3N2Zz4K')";
                            var d = document.createElement("div");
                            d.className = "youtube-thumbnail";
                            this.b.appendChild(d);
                            var e = {
                                videoId: this.getYouTubeOptions_().videoId,
                                width: c,
                                height: b,
                                thumbWidth: "100%",
                                thumbHeight: "100%",
                                thumbAlign: "tl",
                                events: {
                                    onClick: this.thumbnailClickHandler_.bind(this)
                                }
                            };
                            x(function() {
                                this.v = new YT.Thumbnail(d, e)
                            }.bind(this))
                        } else n() && (this.b.style.backgroundColor = "rgba(0, 0, 0, 0)")
                    }
                    return this.b
                },
                enumerable: !1
            },
            thumbnailClickHandler_: {
                value: function() {
                    this.detachedCallback();
                    this.setAttribute("autoplay",
                        "standard");
                    w(this, this.id, this.getYouTubeOptions_(), function(a) {
                        this.h = !1;
                        this.a = a;
                        this.toggleMute();
                        p("ready", this)
                    }.bind(this))
                },
                enumerable: !1
            },
            attachedCallback: {
                value: function() {
                    if ("function" == typeof this.gwdLoad && "function" == typeof this.gwdIsLoaded && !this.gwdIsLoaded()) {
                        var a = k(this),
                            b = a && "function" == typeof a.gwdIsLoaded;
                        (!a || b && a.gwdIsLoaded()) && this.gwdLoad()
                    }
                },
                enumerable: !0
            },
            detachedCallback: {
                value: function() {
                    this.a && (this.a.destroy(), this.a = null);
                    this.b && this.b.parentElement && (this.removeChild(this.b),
                        this.b = null);
                    this.v && this.v.destroy();
                    this.j = this.g = !1
                },
                enumerable: !0
            },
            gwdLoad: {
                value: function() {
                    if (!this.j) {
                        this.j = !0;
                        var a = this.getYouTubeOptions_();
                        w(this, this.id, a, function(b) {
                            this.a = b;
                            if ("preview" == a.preview || "intro" == a.preview) this.h = !0, this.appendChild(this.getOverlay_("preview" == a.preview));
                            p("ready", this)
                        }.bind(this))
                    }
                },
                enumerable: !0
            },
            gwdIsLoaded: {
                value: function() {
                    return null != this.a
                },
                enumerable: !0
            },
            attributeChangedCallback: {
                value: function(a) {
                    "video-url" == a && this.j && this.setYouTubeId(z(this.getAttribute(a)))
                },
                enumerable: !0
            },
            play: {
                value: function() {
                    this.h || (this.g ? this.a.playVideo() : this.c.push({
                        i: 0
                    }))
                },
                enumerable: !0
            },
            pause: {
                value: function() {
                    this.g ? this.a.pauseVideo() : this.c.push({
                        i: 1
                    })
                },
                enumerable: !0
            },
            replay: {
                value: function() {
                    this.h || (this.seek(0), this.play())
                },
                enumerable: !0
            },
            seek: {
                value: function(a) {
                    this.h || (this.g ? this.a.seekTo(a, !0) : this.c.push({
                        i: 2,
                        o: a
                    }))
                },
                enumerable: !0
            },
            getCurrentTime: {
                value: function() {
                    return this.g ? this.a.getCurrentTime() : 0
                },
                enumerable: !0
            },
            setYouTubeId: {
                value: function(a, b) {
                    this.h ||
                        (this.g ? b ? this.a.cueVideoById(a) : this.a.loadVideoById(a) : this.j ? this.c.push({
                            i: 4,
                            o: a,
                            F: b
                        }) : this.setAttribute("video-url", a))
                },
                enumerable: !0
            },
            toggleMute: {
                value: function() {
                    if (!this.h)
                        if (this.g) {
                            var a = this.a;
                            a.isMuted() ? a.unMute() : a.mute()
                        } else this.c.push({
                            i: 3
                        })
                },
                enumerable: !0
            },
            getYouTubeOptions_: {
                value: function() {
                    var a = "none",
                        b = !1,
                        c = String(this.getAttribute("autoplay")).toLowerCase();
                    "none" == c || "false" == c || "null" == c || "ontouchstart" in window || 0 < window.navigator.MaxTouchPoints || 0 < window.navigator.msMaxTouchPoints ||
                        (b = !0, a = "true" == c || "" == c ? "standard" : c);
                    var d = window.getComputedStyle(this),
                        c = isNaN(parseInt(d.width, 10)) || 0 < d.width.indexOf("%") ? "100%" : parseInt(d.width, 10),
                        b = {
                            annotations: this.hasAttribute("annotations"),
                            autoplay: b,
                            events: {
                                onReady: this.onPlayerReady_.bind(this),
                                onStateChange: this.onStateChange_.bind(this),
                                onCueRangeEnter: this.onCueRangeEnter_.bind(this)
                            },
                            height: isNaN(parseInt(d.height, 10)) || 0 < d.height.indexOf("%") ? "100%" : parseInt(d.height, 10),
                            loop: this.hasAttribute("loop"),
                            preview: a,
                            related: this.hasAttribute("related"),
                            title: this.hasAttribute("title"),
                            videoId: z(this.getAttribute("video-url")),
                            width: c
                        };
                    if (c = this.getAttribute("theme")) b.theme = c;
                    if (c = this.getAttribute("controls")) b.controls = c;
                    c = parseInt(this.getAttribute("start-position"), 10);
                    isNaN(c) || (b.startPosition = c);
                    "preview" != a && "intro" != a ? b.adformat = this.getAttribute("adformat") : window.Enabler && (c = window.Enabler.getParameter("adSiteUrl"), d = /:\/\/(.[^/]+)/, c && c.match(d)[1].indexOf("youtube.com") ? b.adformat = "1_8" : b.adformat = "1_5");
                    if ("intro" == a || "preview" == a) b.annotations = !1, b.controls = "none", b.loop = !1, b.related = !1, b.title = !1;
                    if (a = this.getAttribute("extra-player-args")) b.extraPlayerArgs = a;
                    b.allowfullscreen = this.hasAttribute("allowfullscreen");
                    return b
                },
                enumerable: !1
            },
            addCueRange_: {
                value: function(a, b, c) {
                    this.a.addCueRange(a, b, c);
                    this.B.push({
                        id: a,
                        start: b,
                        end: c
                    })
                },
                enumerable: !1
            },
            addQuartileCueRanges_: {
                value: function(a, b, c) {
                    for (var d = b / 4, e = 0, l = c.length; e < l; e++) {
                        var h = a + d * e,
                            m = a + b;
                        0 === e ? h += .1 : e === l - 1 && --h;
                        this.addCueRange_(c[e], h, m)
                    }
                },
                enumerable: !1
            },
            addCueRangesForPreview_: {
                value: function(a,
                    b) {
                    var c = parseInt(this.getAttribute("preview-duration"), 10) || 30;
                    b && a + c > b && (c = b - a);
                    this.addQuartileCueRanges_(a, c, ["preview_q0", "preview_q1", "preview_q2", "preview_q3", "preview_q4"])
                },
                enumerable: !1
            },
            onPlayerReady_: {
                value: function() {
                    this.g = !0;
                    for (var a = 0, b = this.c.length; a < b; ++a) switch (this.c[a].i) {
                        case 0:
                            this.play();
                            break;
                        case 1:
                            this.pause();
                            break;
                        case 2:
                            this.seek(this.c[a].o);
                            break;
                        case 3:
                            this.toggleMute();
                            break;
                        case 4:
                            this.setYouTubeId(this.c[a].o, this.c[a].F)
                    }
                    this.c = [];
                    b = this.getYouTubeOptions_().preview;
                    (this.hasAttribute("muted") || "intro" == b || "preview" == b) && this.a.mute();
                    a = this.a.getDuration();
                    switch (b) {
                        case "none":
                        case "standard":
                        case "intro":
                            this.addQuartileCueRanges_(0, a, ["q0", "q1", "q2", "q3", "q4"]);
                            break;
                        case "preview":
                            a ? (b = this.getYouTubeOptions_().startPosition, this.addCueRangesForPreview_(b && b < a ? b : 0, a)) : this.m = !0
                    }
                    this.hasAttribute("pause-on-end") && this.addCueRange_("ending", a - 1, a);
                    this.a.addEventListener("seekto", function() {
                        p("seekto", this)
                    }.bind(this), !1)
                },
                enumerable: !1
            },
            onStateChange_: {
                value: function(a) {
                    a =
                        parseInt(a.data, 10);
                    if (!isNaN(a)) {
                        var b = "";
                        switch (a) {
                            case 0:
                                b = "ended";
                                break;
                            case 1:
                                b = "playing";
                                !this.A && this.getYouTubeOptions_().autoplay ? (this.A = !0, this.m && (this.addCueRangesForPreview_(this.a.getCurrentTime()), this.m = !1)) : p("playpressed", this);
                                break;
                            case 2:
                                b = "paused";
                                break;
                            case 3:
                                b = "buffering"
                        }
                        b && p(b, this)
                    }
                },
                enumerable: !1
            },
            onCueRangeEnter_: {
                value: function(a) {
                    switch (a.data) {
                        case "q0":
                            p("viewed0percent", this);
                            break;
                        case "q1":
                            p("viewed25percent", this);
                            break;
                        case "q2":
                            p("viewed50percent", this);
                            break;
                        case "q3":
                            p("viewed75percent", this);
                            break;
                        case "q4":
                            p("viewed100percent", this);
                            break;
                        case "preview_q0":
                            p("previewed0percent", this);
                            break;
                        case "preview_q1":
                            p("previewed25percent", this);
                            break;
                        case "preview_q2":
                            p("previewed50percent", this);
                            break;
                        case "preview_q3":
                            p("previewed75percent", this);
                            break;
                        case "preview_q4":
                            p("previewed100percent", this), this.a.pauseVideo(), this.removeAttribute("autoplay")
                    }
                    "ending" == a.data ? this.pause() : this.a.removeCueRange(a.data)
                },
                enumerable: !1
            }
        })
    });
}()