var $ = jQuery.noConflict();
$(document).ready(function($){
$(".contacts__form-input[type='tel'], .modal__form-input[type='phone']").mask("+380(99) 999-99-99");
});
/*
function update(data) {
    if (data === '') return;
    $.ajax({
        url: myajax.url,
        data: {
            action: 'cases_filter',
            data: data,
        },
        type: 'POST',
        success: function (data) {
            $('#case').html(data).fadeOut(0).fadeIn(400);
        }
    });
}

function ajax_filter() {
    $(document.body).on('change', '.page-cases__label', function (e) {
        e.preventDefault();

        let test = $(this).toggleClass('checked');
        var Obj = {
            data: []
        };

        $('.page-cases__label.checked').each(function () {
            let value = $(this).data('cases');
            Obj.data.push([value]);
        });

        update(Obj);

    });
}

ajax_filter();
*/
$(function() {
   $('.dynamic-filters').on('change', '.page-cases__label', function() {
       var $root = $(this).closest('.dynamic-filters');
       var $action = $root.data('action');
       var $selectedFilter = $root.find('.page-cases__label input:checked');
       var ids = [];
       $selectedFilter.each(function() {
           ids.push($(this).parent().data('id'))
       });

       $.ajax({
           url: myajax.url,
           data: {
               action: 'dynamic_filters',
               type: $action,
               data: ids,
           },
           type: 'POST',
           success: function (data) {
               $('.dynamic-filters__container').html(data).fadeOut(0).fadeIn(400)
           }
       });
   }).on('click', 'button[type="reset"]', function() {
       var $root = $(this).closest('.dynamic-filters');
       var $action = $root.data('action');
       $root.find('.page-cases__label input').prop('checked', false).eq(0).trigger('change');
   });
});
!function (c, s, p, g) {
    "use strict";
    var o, r, a, u, e, l, d, f, i, t, n, h, b;

    function v(t, e) {
        var n, i, o, r = [],
            s = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, n = (e = t && t.data ? f(t.data.options, e) : e).$target || p(t.currentTarget).trigger("blur"), (o = p.fancybox.getInstance()) && o.$trigger && o.$trigger.is(n) || (r = e.selector ? p(e.selector) : (i = n.attr("data-fancybox") || "") ? (r = t.data ? t.data.items : []).length ? r.filter('[data-fancybox="' + i + '"]') : p('[data-fancybox="' + i + '"]') : [n], s = p(r).index(n), (o = p.fancybox.open(r, e, s = s < 0 ? 0 : s)).$trigger = n))
    }

    c.console = c.console || {
        info: function (t) {
        }
    }, p && (p.fn.fancybox ? console.info("fancyBox already initialized") : (t = {
        closeExisting: !1,
        loop: !1,
        gutter: 50,
        keyboard: !0,
        preventCaptionOverlap: !0,
        arrows: !0,
        infobar: !0,
        smallBtn: "auto",
        toolbar: "auto",
        buttons: ["zoom", "slideShow", "thumbs", "close"],
        idleTime: 3,
        protect: !1,
        modal: !1,
        image: {
            preload: !1
        },
        ajax: {
            settings: {
                data: {
                    fancybox: !0
                }
            }
        },
        iframe: {
            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
            preload: !0,
            css: {},
            attr: {
                scrolling: "auto"
            }
        },
        video: {
            tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
            format: "",
            autoStart: !0
        },
        defaultType: "image",
        animationEffect: "zoom",
        animationDuration: 366,
        zoomOpacity: "auto",
        transitionEffect: "fade",
        transitionDuration: 366,
        slideClass: "",
        baseClass: "",
        baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
        btnTpl: {
            download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
            close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
            arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
            arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
        },
        parentEl: "body",
        hideScrollbar: !0,
        autoFocus: !0,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: {
            autoStart: !1
        },
        touch: {
            vertical: !0,
            momentum: !0
        },
        hash: null,
        media: {},
        slideShow: {
            autoStart: !1,
            speed: 3e3
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        },
        wheel: "auto",
        onInit: p.noop,
        beforeLoad: p.noop,
        afterLoad: p.noop,
        beforeShow: p.noop,
        afterShow: p.noop,
        beforeClose: p.noop,
        afterClose: p.noop,
        onActivate: p.noop,
        onDeactivate: p.noop,
        clickContent: function (t, e) {
            return "image" === t.type && "zoom"
        },
        clickSlide: "close",
        clickOutside: "close",
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
            preventCaptionOverlap: !1,
            idleTime: !1,
            clickContent: function (t, e) {
                return "image" === t.type && "toggleControls"
            },
            clickSlide: function (t, e) {
                return "image" === t.type ? "toggleControls" : "close"
            },
            dblclickContent: function (t, e) {
                return "image" === t.type && "zoom"
            },
            dblclickSlide: function (t, e) {
                return "image" === t.type && "zoom"
            }
        },
        lang: "en",
        i18n: {
            en: {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                PLAY_START: "Start slideshow",
                PLAY_STOP: "Pause slideshow",
                FULL_SCREEN: "Full screen",
                THUMBS: "Thumbnails",
                DOWNLOAD: "Download",
                SHARE: "Share",
                ZOOM: "Zoom"
            },
            de: {
                CLOSE: "Schlie&szlig;en",
                NEXT: "Weiter",
                PREV: "Zur&uuml;ck",
                ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                PLAY_START: "Diaschau starten",
                PLAY_STOP: "Diaschau beenden",
                FULL_SCREEN: "Vollbild",
                THUMBS: "Vorschaubilder",
                DOWNLOAD: "Herunterladen",
                SHARE: "Teilen",
                ZOOM: "Vergr&ouml;&szlig;ern"
            }
        }
    }, o = p(c), r = p(s), a = 0, u = c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame || function (t) {
        return c.setTimeout(t, 1e3 / 60)
    }, e = c.cancelAnimationFrame || c.webkitCancelAnimationFrame || c.mozCancelAnimationFrame || c.oCancelAnimationFrame || function (t) {
        c.clearTimeout(t)
    }, l = function () {
        var t, e = s.createElement("fakeelement"),
            n = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
        for (t in n)
            if (e.style[t] !== g) return n[t];
        return "transitionend"
    }(), d = function (t) {
        return t && t.length && t[0].offsetHeight
    }, f = function (t, e) {
        var n = p.extend(!0, {}, t, e);
        return p.each(e, function (t, e) {
            p.isArray(e) && (n[t] = e)
        }), n
    }, i = function (t, e, n) {
        var i = this;
        i.opts = f({
            index: n
        }, p.fancybox.defaults), p.isPlainObject(e) && (i.opts = f(i.opts, e)), p.fancybox.isMobile && (i.opts = f(i.opts, i.opts.mobile)), i.id = i.opts.id || ++a, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(t), i.group.length && i.init()
    }, p.extend(i.prototype, {
        init: function () {
            var e, n, i = this,
                o = i.group[i.currIndex].opts;
            o.closeExisting && p.fancybox.close(!0), p("body").addClass("fancybox-active"), !p.fancybox.getInstance() && !1 !== o.hideScrollbar && !p.fancybox.isMobile && s.body.scrollHeight > c.innerHeight && (p("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (c.innerWidth - s.documentElement.clientWidth) + "px;}</style>"), p("body").addClass("compensate-for-scrollbar")), n = "", p.each(o.buttons, function (t, e) {
                n += o.btnTpl[e] || ""
            }), e = p(i.translate(i, o.baseTpl.replace("{{buttons}}", n).replace("{{arrows}}", o.btnTpl.arrowLeft + o.btnTpl.arrowRight))).attr("id", "fancybox-container-" + i.id).addClass(o.baseClass).data("FancyBox", i).appendTo(o.parentEl), i.$refs = {
                container: e
            }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                i.$refs[t] = e.find(".fancybox-" + t)
            }), i.trigger("onInit"), i.activate(), i.jumpTo(i.currIndex)
        },
        translate: function (t, e) {
            var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
            return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                return n[e] === g ? t : n[e]
            })
        },
        addContent: function (t) {
            var a = this,
                t = p.makeArray(t);
            p.each(t, function (t, e) {
                var n, i, o, r = {},
                    s = {};
                p.isPlainObject(e) ? s = (r = e).opts || e : "object" === p.type(e) && p(e).length ? (s = (i = p(e)).data() || {}, (s = p.extend(!0, {}, s, s.options)).$orig = i, r.src = a.opts.src || s.src || i.attr("href"), r.type || r.src || (r.type = "inline", r.src = e)) : r = {
                    type: "html",
                    src: e + ""
                }, r.opts = p.extend(!0, {}, a.opts, s), p.isArray(s.buttons) && (r.opts.buttons = s.buttons), p.fancybox.isMobile && r.opts.mobile && (r.opts = f(r.opts, r.opts.mobile)), n = r.type || r.opts.type, i = r.src || "", !n && i && ((s = i.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (n = "video", r.opts.video.format || (r.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : i.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? n = "image" : i.match(/\.(pdf)((\?|#).*)?$/i) ? r = p.extend(!0, r, {
                    contentType: "pdf",
                    opts: {
                        iframe: {
                            preload: !(n = "iframe")
                        }
                    }
                }) : "#" === i.charAt(0) && (n = "inline")), n ? r.type = n : a.trigger("objectNeedsType", r), r.contentType || (r.contentType = -1 < p.inArray(r.type, ["html", "inline", "ajax"]) ? "html" : r.type), r.index = a.group.length, "auto" == r.opts.smallBtn && (r.opts.smallBtn = -1 < p.inArray(r.type, ["html", "inline", "ajax"])), "auto" === r.opts.toolbar && (r.opts.toolbar = !r.opts.smallBtn), r.$thumb = r.opts.$thumb || null, r.opts.$trigger && r.index === a.opts.index && (r.$thumb = r.opts.$trigger.find("img:first"), r.$thumb.length && (r.opts.$orig = r.opts.$trigger)), r.$thumb && r.$thumb.length || !r.opts.$orig || (r.$thumb = r.opts.$orig.find("img:first")), r.$thumb && !r.$thumb.length && (r.$thumb = null), r.thumb = r.opts.thumb || (r.$thumb ? r.$thumb[0].src : null), "function" === p.type(r.opts.caption) && (r.opts.caption = r.opts.caption.apply(e, [a, r])), "function" === p.type(a.opts.caption) && (r.opts.caption = a.opts.caption.apply(e, [a, r])), r.opts.caption instanceof p || (r.opts.caption = r.opts.caption === g ? "" : r.opts.caption + ""), "ajax" === r.type && 1 < (o = i.split(/\s+/, 2)).length && (r.src = o.shift(), r.opts.filter = o.shift()), r.opts.modal && (r.opts = p.extend(!0, r.opts, {
                    trapFocus: !0,
                    infobar: 0,
                    toolbar: 0,
                    smallBtn: 0,
                    keyboard: 0,
                    slideShow: 0,
                    fullScreen: 0,
                    thumbs: 0,
                    touch: 0,
                    clickContent: !1,
                    clickSlide: !1,
                    clickOutside: !1,
                    dblclickContent: !1,
                    dblclickSlide: !1,
                    dblclickOutside: !1
                })), a.group.push(r)
            }), Object.keys(a.slides).length && (a.updateControls(), (t = a.Thumbs) && t.isActive && (t.create(), t.focus()))
        },
        addEvents: function () {
            var i = this;
            i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
                t.stopPropagation(), t.preventDefault(), i.close(t)
            }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
                t.stopPropagation(), t.preventDefault(), i.previous()
            }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
                t.stopPropagation(), t.preventDefault(), i.next()
            }).on("click.fb", "[data-fancybox-zoom]", function (t) {
                i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
            }), o.on("orientationchange.fb resize.fb", function (t) {
                t && t.originalEvent && "resize" === t.originalEvent.type ? (i.requestId && e(i.requestId), i.requestId = u(function () {
                    i.update(t)
                })) : (i.current && "iframe" === i.current.type && i.$refs.stage.hide(), setTimeout(function () {
                    i.$refs.stage.show(), i.update(t)
                }, p.fancybox.isMobile ? 600 : 250))
            }), r.on("keydown.fb", function (t) {
                var e = (p.fancybox ? p.fancybox.getInstance() : null).current,
                    n = t.keyCode || t.which;
                if (9 != n) {
                    if (!(!e.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || p(t.target).is("input,textarea,video,audio,select"))) return 8 === n || 27 === n ? (t.preventDefault(), void i.close(t)) : 37 === n || 38 === n ? (t.preventDefault(), void i.previous()) : 39 === n || 40 === n ? (t.preventDefault(), void i.next()) : void i.trigger("afterKeydown", t, n)
                } else e.opts.trapFocus && i.focus(t)
            }), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1
            }), i.idleInterval = c.setInterval(function () {
                i.idleSecondsCounter++, i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && !i.isDragging && (i.isIdle = !0, i.idleSecondsCounter = 0, i.hideControls())
            }, 1e3))
        },
        removeEvents: function () {
            o.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (c.clearInterval(this.idleInterval), this.idleInterval = null)
        },
        previous: function (t) {
            return this.jumpTo(this.currPos - 1, t)
        },
        next: function (t) {
            return this.jumpTo(this.currPos + 1, t)
        },
        jumpTo: function (t, i) {
            var e, n, o, r, s, a, c, l, u = this,
                f = u.group.length;
            if (!(u.isDragging || u.isClosing || u.isAnimating && u.firstRun)) return t = parseInt(t, 10), !(!(n = (u.current || u).opts.loop) && (t < 0 || f <= t)) && (e = u.firstRun = !Object.keys(u.slides).length, r = u.current, u.prevIndex = u.currIndex, u.prevPos = u.currPos, o = u.createSlide(t), 1 < f && ((n || o.index < f - 1) && u.createSlide(t + 1), (n || 0 < o.index) && u.createSlide(t - 1)), u.current = o, u.currIndex = o.index, u.currPos = o.pos, u.trigger("beforeShow", e), u.updateControls(), o.forcedDuration = g, p.isNumeric(i) ? o.forcedDuration = i : i = o.opts[e ? "animationDuration" : "transitionDuration"], i = parseInt(i, 10), t = u.isMoved(o), o.$slide.addClass("fancybox-slide--current"), e ? (o.opts.animationEffect && i && u.$refs.container.css("transition-duration", i + "ms"), u.$refs.container.addClass("fancybox-is-open").trigger("focus"), u.loadSlide(o)) : (s = p.fancybox.getTranslate(r.$slide), a = p.fancybox.getTranslate(u.$refs.stage), p.each(u.slides, function (t, e) {
                p.fancybox.stop(e.$slide, !0)
            }), r.pos !== o.pos && (r.isComplete = !1), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), t ? (l = s.left - (r.pos * s.width + r.pos * r.opts.gutter), p.each(u.slides, function (t, e) {
                e.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                });
                var n = e.pos * s.width + e.pos * e.opts.gutter;
                p.fancybox.setTranslate(e.$slide, {
                    top: 0,
                    left: n - a.left + l
                }), e.pos !== o.pos && e.$slide.addClass("fancybox-slide--" + (e.pos > o.pos ? "next" : "previous")), d(e.$slide), p.fancybox.animate(e.$slide, {
                    top: 0,
                    left: (e.pos - o.pos) * s.width + (e.pos - o.pos) * e.opts.gutter
                }, i, function () {
                    e.$slide.css({
                        transform: "",
                        opacity: ""
                    }).removeClass("fancybox-slide--next fancybox-slide--previous"), e.pos === u.currPos && u.complete()
                })
            })) : i && o.opts.transitionEffect && (c = "fancybox-animated fancybox-fx-" + o.opts.transitionEffect, r.$slide.addClass("fancybox-slide--" + (r.pos > o.pos ? "next" : "previous")), p.fancybox.animate(r.$slide, c, i, function () {
                r.$slide.removeClass(c).removeClass("fancybox-slide--next fancybox-slide--previous")
            }, !1)), o.isLoaded ? u.revealContent(o) : u.loadSlide(o)), void u.preload("image"))
        },
        createSlide: function (t) {
            var e, n = this,
                i = t % n.group.length;
            return i = i < 0 ? n.group.length + i : i, !n.slides[t] && n.group[i] && (e = p('<div class="fancybox-slide"></div>').appendTo(n.$refs.stage), n.slides[t] = p.extend(!0, {}, n.group[i], {
                pos: t,
                $slide: e,
                isLoaded: !1
            }), n.updateSlide(n.slides[t])), n.slides[t]
        },
        scaleToActual: function (t, e, n) {
            var i, o, r, s, a = this,
                c = a.current,
                l = c.$content,
                u = p.fancybox.getTranslate(c.$slide).width,
                f = p.fancybox.getTranslate(c.$slide).height,
                d = c.width,
                h = c.height;
            a.isAnimating || a.isMoved() || !l || "image" != c.type || !c.isLoaded || c.hasError || (a.isAnimating = !0, p.fancybox.stop(l), t = t === g ? .5 * u : t, e = e === g ? .5 * f : e, (i = p.fancybox.getTranslate(l)).top -= p.fancybox.getTranslate(c.$slide).top, i.left -= p.fancybox.getTranslate(c.$slide).left, r = d / i.width, s = h / i.height, o = .5 * u - .5 * d, c = .5 * f - .5 * h, u < d && (o = 0 < (o = i.left * r - (t * r - t)) ? 0 : o) < u - d && (o = u - d), f < h && (c = 0 < (c = i.top * s - (e * s - e)) ? 0 : c) < f - h && (c = f - h), a.updateCursor(d, h), p.fancybox.animate(l, {
                top: c,
                left: o,
                scaleX: r,
                scaleY: s
            }, n || 366, function () {
                a.isAnimating = !1
            }), a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop())
        },
        scaleToFit: function (t) {
            var e = this,
                n = e.current,
                i = n.$content;
            e.isAnimating || e.isMoved() || !i || "image" != n.type || !n.isLoaded || n.hasError || (e.isAnimating = !0, p.fancybox.stop(i), n = e.getFitPos(n), e.updateCursor(n.width, n.height), p.fancybox.animate(i, {
                top: n.top,
                left: n.left,
                scaleX: n.width / i.width(),
                scaleY: n.height / i.height()
            }, t || 366, function () {
                e.isAnimating = !1
            }))
        },
        getFitPos: function (t) {
            var e, n, i = t.$content,
                o = t.$slide,
                r = t.width || t.opts.width,
                s = t.height || t.opts.height,
                a = {};
            return !!(t.isLoaded && i && i.length) && (e = p.fancybox.getTranslate(this.$refs.stage).width, n = p.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(o.css("paddingLeft")) + parseFloat(o.css("paddingRight")) + parseFloat(i.css("marginLeft")) + parseFloat(i.css("marginRight")), n -= parseFloat(o.css("paddingTop")) + parseFloat(o.css("paddingBottom")) + parseFloat(i.css("marginTop")) + parseFloat(i.css("marginBottom")), r && s || (r = e, s = n), e - .5 < (r *= i = Math.min(1, e / r, n / s)) && (r = e), n - .5 < (s *= i) && (s = n), "image" === t.type ? (a.top = Math.floor(.5 * (n - s)) + parseFloat(o.css("paddingTop")), a.left = Math.floor(.5 * (e - r)) + parseFloat(o.css("paddingLeft"))) : "video" === t.contentType && (r / (t = t.opts.width && t.opts.height ? r / s : t.opts.ratio || 16 / 9) < s ? s = r / t : s * t < r && (r = s * t)), a.width = r, a.height = s, a)
        },
        update: function (n) {
            var i = this;
            p.each(i.slides, function (t, e) {
                i.updateSlide(e, n)
            })
        },
        updateSlide: function (t, e) {
            var n = this,
                i = t && t.$content,
                o = t.width || t.opts.width,
                r = t.height || t.opts.height,
                s = t.$slide;
            n.adjustCaption(t), i && (o || r || "video" === t.contentType) && !t.hasError && (p.fancybox.stop(i), p.fancybox.setTranslate(i, n.getFitPos(t)), t.pos === n.currPos && (n.isAnimating = !1, n.updateCursor())), n.adjustLayout(t), s.length && (s.trigger("refresh"), t.pos === n.currPos && n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", s.get(0).scrollHeight > s.get(0).clientHeight)), n.trigger("onUpdate", t, e)
        },
        centerSlide: function (t) {
            var e = this,
                n = e.current,
                i = n.$slide;
            !e.isClosing && n && (i.siblings().css({
                transform: "",
                opacity: ""
            }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), p.fancybox.animate(i, {
                top: 0,
                left: 0,
                opacity: 1
            }, t === g ? 0 : t, function () {
                i.css({
                    transform: "",
                    opacity: ""
                }), n.isComplete || e.complete()
            }, !1))
        },
        isMoved: function (t) {
            var e, n = t || this.current;
            return !!n && (e = p.fancybox.getTranslate(this.$refs.stage), t = p.fancybox.getTranslate(n.$slide), !n.$slide.hasClass("fancybox-animated") && (.5 < Math.abs(t.top - e.top) || .5 < Math.abs(t.left - e.left)))
        },
        updateCursor: function (t, e) {
            var n = this,
                i = n.current,
                o = n.$refs.container;
            i && !n.isClosing && n.Guestures && (o.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), e = !!(t = n.canPan(t, e)) || n.isZoomable(), o.toggleClass("fancybox-is-zoomable", e), p("[data-fancybox-zoom]").prop("disabled", !e), t ? o.addClass("fancybox-can-pan") : e && ("zoom" === i.opts.clickContent || p.isFunction(i.opts.clickContent) && "zoom" == i.opts.clickContent(i)) ? o.addClass("fancybox-can-zoomIn") : i.opts.touch && (i.opts.touch.vertical || 1 < n.group.length) && "video" !== i.contentType && o.addClass("fancybox-can-swipe"))
        },
        isZoomable: function () {
            var t, e = this.current;
            if (e && !this.isClosing && "image" === e.type && !e.hasError) {
                if (!e.isLoaded) return !0;
                if ((t = this.getFitPos(e)) && (e.width > t.width || e.height > t.height)) return !0
            }
            return !1
        },
        isScaledDown: function (t, e) {
            var n = !1,
                i = this.current,
                o = i.$content;
            return t !== g && e !== g ? n = t < i.width && e < i.height : o && (n = (n = p.fancybox.getTranslate(o)).width < i.width && n.height < i.height), n
        },
        canPan: function (t, e) {
            var n = this.current,
                i = null,
                o = !1;
            return "image" === n.type && (n.isComplete || t && e) && !n.hasError && (o = this.getFitPos(n), t !== g && e !== g ? i = {
                width: t,
                height: e
            } : n.isComplete && (i = p.fancybox.getTranslate(n.$content)), i && o && (o = 1.5 < Math.abs(i.width - o.width) || 1.5 < Math.abs(i.height - o.height))), o
        },
        loadSlide: function (n) {
            var t, e, i, o = this;
            if (!n.isLoading && !n.isLoaded) {
                if (!(n.isLoading = !0) === o.trigger("beforeLoad", n)) return n.isLoading = !1;
                switch (t = n.type, (e = n.$slide).off("refresh").trigger("onReset").addClass(n.opts.slideClass), t) {
                    case "image":
                        o.setImage(n);
                        break;
                    case "iframe":
                        o.setIframe(n);
                        break;
                    case "html":
                        o.setContent(n, n.src || n.content);
                        break;
                    case "video":
                        o.setContent(n, n.opts.video.tpl.replace(/\{\{src\}\}/gi, n.src).replace("{{format}}", n.opts.videoFormat || n.opts.video.format || "").replace("{{poster}}", n.thumb || ""));
                        break;
                    case "inline":
                        p(n.src).length ? o.setContent(n, p(n.src)) : o.setError(n);
                        break;
                    case "ajax":
                        o.showLoading(n), i = p.ajax(p.extend({}, n.opts.ajax.settings, {
                            url: n.src,
                            success: function (t, e) {
                                "success" === e && o.setContent(n, t)
                            },
                            error: function (t, e) {
                                t && "abort" !== e && o.setError(n)
                            }
                        })), e.one("onReset", function () {
                            i.abort()
                        });
                        break;
                    default:
                        o.setError(n)
                }
                return !0
            }
        },
        setImage: function (e) {
            var t, n = this;
            setTimeout(function () {
                var t = e.$image;
                n.isClosing || !e.isLoading || t && t.length && t[0].complete || e.hasError || n.showLoading(e)
            }, 50), n.checkSrcset(e), e.$content = p('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")), !1 !== e.opts.preload && e.opts.width && e.opts.height && e.thumb && (e.width = e.opts.width, e.height = e.opts.height, (t = s.createElement("img")).onerror = function () {
                p(this).remove(), e.$ghost = null
            }, t.onload = function () {
                n.afterLoad(e)
            }, e.$ghost = p(t).addClass("fancybox-image").appendTo(e.$content).attr("src", e.thumb)), n.setBigImage(e)
        },
        checkSrcset: function (t) {
            var e, n, i, o, r = t.opts.srcset || t.opts.image.srcset;
            if (r) {
                i = c.devicePixelRatio || 1, o = c.innerWidth * i, (n = r.split(",").map(function (t) {
                    var i = {};
                    return t.trim().split(/\s+/).forEach(function (t, e) {
                        var n = parseInt(t.substring(0, t.length - 1), 10);
                        if (0 === e) return i.url = t;
                        n && (i.value = n, i.postfix = t[t.length - 1])
                    }), i
                })).sort(function (t, e) {
                    return t.value - e.value
                });
                for (var s = 0; s < n.length; s++) {
                    var a = n[s];
                    if ("w" === a.postfix && a.value >= o || "x" === a.postfix && a.value >= i) {
                        e = a;
                        break
                    }
                }
                (e = !e && n.length ? n[n.length - 1] : e) && (t.src = e.url, t.width && t.height && "w" == e.postfix && (t.height = t.width / t.height * e.value, t.width = e.value), t.opts.srcset = r)
            }
        },
        setBigImage: function (e) {
            var n = this,
                t = s.createElement("img"),
                i = p(t);
            e.$image = i.one("error", function () {
                n.setError(e)
            }).one("load", function () {
                var t;
                e.$ghost || (n.resolveImageSlideSize(e, this.naturalWidth, this.naturalHeight), n.afterLoad(e)), n.isClosing || (e.opts.srcset && ((t = e.opts.sizes) && "auto" !== t || (t = (1 < e.width / e.height && 1 < o.width() / o.height() ? "100" : Math.round(e.width / e.height * 100)) + "vw"), i.attr("sizes", t).attr("srcset", e.opts.srcset)), e.$ghost && setTimeout(function () {
                    e.$ghost && !n.isClosing && e.$ghost.hide()
                }, Math.min(300, Math.max(1e3, e.height / 1600))), n.hideLoading(e))
            }).addClass("fancybox-image").attr("src", e.src).appendTo(e.$content), (t.complete || "complete" == t.readyState) && i.naturalWidth && i.naturalHeight ? i.trigger("load") : t.error && i.trigger("error")
        },
        resolveImageSlideSize: function (t, e, n) {
            var i = parseInt(t.opts.width, 10),
                o = parseInt(t.opts.height, 10);
            t.width = e, t.height = n, 0 < i && (t.width = i, t.height = Math.floor(i * n / e)), 0 < o && (t.width = Math.floor(o * e / n), t.height = o)
        },
        setIframe: function (o) {
            var r, e = this,
                s = o.opts.iframe,
                a = o.$slide;
            o.$content = p('<div class="fancybox-content' + (s.preload ? " fancybox-is-hidden" : "") + '"></div>').css(s.css).appendTo(a), a.addClass("fancybox-slide--" + o.contentType), o.$iframe = r = p(s.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(s.attr).appendTo(o.$content), s.preload ? (e.showLoading(o), r.on("load.fb error.fb", function (t) {
                this.isReady = 1, o.$slide.trigger("refresh"), e.afterLoad(o)
            }), a.on("refresh.fb", function () {
                var t, e = o.$content,
                    n = s.css.width,
                    i = s.css.height;
                if (1 === r[0].isReady) {
                    try {
                        t = r.contents().find("body")
                    } catch (t) {
                    }
                    t && t.length && t.children().length && (a.css("overflow", "visible"), e.css({
                        width: "100%",
                        "max-width": "100%",
                        height: "9999px"
                    }), n === g && (n = Math.ceil(Math.max(t[0].clientWidth, t.outerWidth(!0)))), e.css("width", n || "").css("max-width", ""), i === g && (i = Math.ceil(Math.max(t[0].clientHeight, t.outerHeight(!0)))), e.css("height", i || ""), a.css("overflow", "auto")), e.removeClass("fancybox-is-hidden")
                }
            })) : e.afterLoad(o), r.attr("src", o.src), a.one("onReset", function () {
                try {
                    p(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                } catch (t) {
                }
                p(this).off("refresh.fb").empty(), o.isLoaded = !1, o.isRevealed = !1
            })
        },
        setContent: function (t, e) {
            var n;
            this.isClosing || (this.hideLoading(t), t.$content && p.fancybox.stop(t.$content), t.$slide.empty(), (n = e) && n.hasOwnProperty && n instanceof p && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = p("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === p.type(e) && (e = p("<div>").append(p.trim(e)).contents()), t.opts.filter && (e = p("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
                p(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (p(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
            }), p(e).appendTo(t.$slide), p(e).is("video,audio") && (p(e).addClass("fancybox-video"), p(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || p(e).attr("width"), t.opts.height = t.opts.height || p(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), this.afterLoad(t))
        },
        setError: function (t) {
            t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
        },
        showLoading: function (t) {
            (t = t || this.current) && !t.$spinner && (t.$spinner = p(this.translate(this, this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
        },
        hideLoading: function (t) {
            (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
        },
        afterLoad: function (t) {
            var e = this;
            e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = p(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
                return 2 == t.button && t.preventDefault(), !0
            }), "image" === t.type && p('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t))
        },
        adjustCaption: function (t) {
            var e = this,
                n = t || e.current,
                i = n.opts.caption,
                o = n.opts.preventCaptionOverlap,
                r = e.$refs.caption,
                t = !1;
            r.toggleClass("fancybox-caption--separate", o), o && i && i.length && (n.pos !== e.currPos ? ((r = r.clone().appendTo(r.parent())).children().eq(0).empty().html(i), t = r.outerHeight(!0), r.empty().remove()) : e.$caption && (t = e.$caption.outerHeight(!0)), n.$slide.css("padding-bottom", t || ""))
        },
        adjustLayout: function (t) {
            var e, n, i, o = t || this.current;
            o.isLoaded && !0 !== o.opts.disableLayoutFix && (o.$content.css("margin-bottom", ""), o.$content.outerHeight() > o.$slide.height() + .5 && (n = o.$slide[0].style["padding-bottom"], i = o.$slide.css("padding-bottom"), 0 < parseFloat(i) && (t = o.$slide[0].scrollHeight, o.$slide.css("padding-bottom", 0), Math.abs(t - o.$slide[0].scrollHeight) < 1 && (e = i), o.$slide.css("padding-bottom", n))), o.$content.css("margin-bottom", e))
        },
        revealContent: function (t) {
            var e, n, i, o, r = this,
                s = t.$slide,
                a = !1,
                c = !1,
                l = r.isMoved(t),
                u = t.isRevealed;
            return t.isRevealed = !0, e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"], i = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(t.forcedDuration === g ? i : t.forcedDuration, 10), "zoom" === (e = l || t.pos !== r.currPos || !i ? !1 : e) && (t.pos === r.currPos && i && "image" === t.type && !t.hasError && (c = r.getThumbPos(t)) ? a = r.getFitPos(t) : e = "fade"), "zoom" === e ? (r.isAnimating = !0, a.scaleX = a.width / c.width, a.scaleY = a.height / c.height, (o = "auto" == (o = t.opts.zoomOpacity) ? .1 < Math.abs(t.width / t.height - c.width / c.height) : o) && (c.opacity = .1, a.opacity = 1), p.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c), d(t.$content), void p.fancybox.animate(t.$content, a, i, function () {
                r.isAnimating = !1, r.complete()
            })) : (r.updateSlide(t), e ? (p.fancybox.stop(s), n = "fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, s.addClass(n).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), d(s), "image" !== t.type && t.$content.hide().show(0), void p.fancybox.animate(s, "fancybox-slide--current", i, function () {
                s.removeClass(n).css({
                    transform: "",
                    opacity: ""
                }), t.pos === r.currPos && r.complete()
            }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), u || !l || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === r.currPos && r.complete())))
        },
        getThumbPos: function (t) {
            var e, n, i, o, r = t.$thumb;
            return !!(r && (i = r[0]) && i.ownerDocument === s && (p(".fancybox-container").css("pointer-events", "none"), o = {
                x: i.getBoundingClientRect().left + i.offsetWidth / 2,
                y: i.getBoundingClientRect().top + i.offsetHeight / 2
            }, i = s.elementFromPoint(o.x, o.y) === i, p(".fancybox-container").css("pointer-events", ""), i)) && (n = p.fancybox.getTranslate(r), t = parseFloat(r.css("border-top-width") || 0), o = parseFloat(r.css("border-right-width") || 0), i = parseFloat(r.css("border-bottom-width") || 0), r = parseFloat(r.css("border-left-width") || 0), e = {
                top: n.top + t,
                left: n.left + r,
                width: n.width - o - r,
                height: n.height - t - i,
                scaleX: 1,
                scaleY: 1
            }, 0 < n.width && 0 < n.height && e)
        },
        complete: function () {
            var t, n = this,
                e = n.current,
                i = {};
            !n.isMoved() && e.isLoaded && (e.isComplete || (e.isComplete = !0, e.$slide.siblings().trigger("onReset"), n.preload("inline"), d(e.$slide), e.$slide.addClass("fancybox-slide--complete"), p.each(n.slides, function (t, e) {
                e.pos >= n.currPos - 1 && e.pos <= n.currPos + 1 ? i[e.pos] = e : e && (p.fancybox.stop(e.$slide), e.$slide.off().remove())
            }), n.slides = i), n.isAnimating = !1, n.updateCursor(), n.trigger("afterShow"), e.opts.video.autoStart && e.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
                Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), n.next()
            }), e.opts.autoFocus && "html" === e.contentType && ((t = e.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : n.focus(null, !0)), e.$slide.scrollTop(0).scrollLeft(0))
        },
        preload: function (t) {
            var e, n, i = this;
            i.group.length < 2 || (n = i.slides[i.currPos + 1], (e = i.slides[i.currPos - 1]) && e.type === t && i.loadSlide(e), n && n.type === t && i.loadSlide(n))
        },
        focus: function (t, e) {
            var n = this,
                i = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
            n.isClosing || ((e = (e = !t && n.current && n.current.isComplete ? n.current.$slide.find("*:visible" + (e ? ":not(.fancybox-close-small)" : "")) : n.$refs.container.find("*:visible")).filter(i).filter(function () {
                return "hidden" !== p(this).css("visibility") && !p(this).hasClass("disabled")
            })).length ? (i = e.index(s.activeElement), t && t.shiftKey ? (i < 0 || 0 == i) && (t.preventDefault(), e.eq(e.length - 1).trigger("focus")) : (i < 0 || i == e.length - 1) && (t && t.preventDefault(), e.eq(0).trigger("focus"))) : n.$refs.container.trigger("focus"))
        },
        activate: function () {
            var e = this;
            p(".fancybox-container").each(function () {
                var t = p(this).data("FancyBox");
                t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
            }), e.isVisible = !0, (e.current || e.isIdle) && (e.update(), e.updateControls()), e.trigger("onActivate"), e.addEvents()
        },
        close: function (t, e) {
            function n() {
                c.cleanUp(t)
            }

            var i, o, r, s, a, c = this,
                l = c.current;
            return !c.isClosing && (!(c.isClosing = !0) === c.trigger("beforeClose", t) ? (c.isClosing = !1, u(function () {
                c.update()
            }), !1) : (c.removeEvents(), r = l.$content, i = l.opts.animationEffect, o = p.isNumeric(e) ? e : i ? l.opts.animationDuration : 0, l.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? p.fancybox.stop(l.$slide) : i = !1, l.$slide.siblings().trigger("onReset").remove(), o && c.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"), c.hideLoading(l), c.hideControls(!0), c.updateCursor(), "zoom" === (i = !("zoom" !== i || r && o && "image" === l.type && !c.isMoved() && !l.hasError && (a = c.getThumbPos(l))) ? "fade" : i) ? (p.fancybox.stop(r), e = {
                top: (s = p.fancybox.getTranslate(r)).top,
                left: s.left,
                scaleX: s.width / a.width,
                scaleY: s.height / a.height,
                width: a.width,
                height: a.height
            }, (s = "auto" == (s = l.opts.zoomOpacity) ? .1 < Math.abs(l.width / l.height - a.width / a.height) : s) && (a.opacity = 0), p.fancybox.setTranslate(r, e), d(r), p.fancybox.animate(r, a, o, n)) : i && o ? p.fancybox.animate(l.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + i, o, n) : !0 === t ? setTimeout(n, o) : n(), !0))
        },
        cleanUp: function (t) {
            var e, n = this,
                i = n.current.opts.$orig;
            n.current.$slide.trigger("onReset"), n.$refs.container.empty().remove(), n.trigger("afterClose", t), n.current.opts.backFocus && (i = i && i.length && i.is(":visible") ? i : n.$trigger) && i.length && (e = c.scrollX, t = c.scrollY, i.trigger("focus"), p("html, body").scrollTop(t).scrollLeft(e)), n.current = null, (n = p.fancybox.getInstance()) ? n.activate() : (p("body").removeClass("fancybox-active compensate-for-scrollbar"), p("#fancybox-style-noscroll").remove())
        },
        trigger: function (t, e) {
            var n, i = Array.prototype.slice.call(arguments, 1),
                o = this,
                e = e && e.opts ? e : o.current;
            if (e ? i.unshift(e) : e = o, i.unshift(o), !1 === (n = p.isFunction(e.opts[t]) ? e.opts[t].apply(e, i) : n)) return n;
            ("afterClose" !== t && o.$refs ? o.$refs.container : r).trigger(t + ".fb", i)
        },
        updateControls: function () {
            var t = this,
                e = t.current,
                n = e.index,
                i = t.$refs.container,
                o = t.$refs.caption,
                r = e.opts.caption;
            e.$slide.trigger("refresh"), r && r.length ? (t.$caption = o).children().eq(0).html(r) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), i.find("[data-fancybox-count]").html(t.group.length), i.find("[data-fancybox-index]").html(n + 1), i.find("[data-fancybox-prev]").prop("disabled", !e.opts.loop && n <= 0), i.find("[data-fancybox-next]").prop("disabled", !e.opts.loop && n >= t.group.length - 1), "image" === e.type ? i.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", e.opts.image.src || e.src).show() : e.opts.toolbar && i.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), p(s.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
        },
        hideControls: function (t) {
            var e = ["infobar", "toolbar", "nav"];
            !t && this.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map(function (t) {
                return "fancybox-show-" + t
            }).join(" ")), this.hasHiddenControls = !0
        },
        showControls: function () {
            var t = this,
                e = (t.current || t).opts,
                n = t.$refs.container;
            t.hasHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && 1 < t.group.length)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && 1 < t.group.length)).toggleClass("fancybox-is-modal", !!e.modal)
        },
        toggleControls: function () {
            this.hasHiddenControls ? this.showControls() : this.hideControls()
        }
    }), p.fancybox = {
        version: "3.5.7",
        defaults: t,
        getInstance: function (t) {
            var e = p('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                n = Array.prototype.slice.call(arguments, 1);
            return e instanceof i && ("string" === p.type(t) ? e[t].apply(e, n) : "function" === p.type(t) && t.apply(e, n), e)
        },
        open: function (t, e, n) {
            return new i(t, e, n)
        },
        close: function (t) {
            var e = this.getInstance();
            e && (e.close(), !0 === t && this.close(t))
        },
        destroy: function () {
            this.close(!0), r.add("body").off("click.fb-start", "**")
        },
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        use3d: (t = s.createElement("div"), c.getComputedStyle && c.getComputedStyle(t) && c.getComputedStyle(t).getPropertyValue("transform") && !(s.documentMode && s.documentMode < 11)),
        getTranslate: function (t) {
            var e;
            return !(!t || !t.length) && {
                top: (e = t[0].getBoundingClientRect()).top || 0,
                left: e.left || 0,
                width: e.width,
                height: e.height,
                opacity: parseFloat(t.css("opacity"))
            }
        },
        setTranslate: function (t, e) {
            var n = "",
                i = {};
            if (t && e) return e.left === g && e.top === g || (n = (e.left === g ? t.position() : e).left + "px, " + (e.top === g ? t.position() : e).top + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== g && e.scaleY !== g ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : e.scaleX !== g && (n += " scaleX(" + e.scaleX + ")"), n.length && (i.transform = n), e.opacity !== g && (i.opacity = e.opacity), e.width !== g && (i.width = e.width), e.height !== g && (i.height = e.height), t.css(i)
        },
        animate: function (e, n, i, o, r) {
            var s, a = this;
            p.isFunction(i) && (o = i, i = null), a.stop(e), s = a.getTranslate(e), e.on(l, function (t) {
                t && t.originalEvent && (!e.is(t.originalEvent.target) || "z-index" == t.originalEvent.propertyName) || (a.stop(e), p.isNumeric(i) && e.css("transition-duration", ""), p.isPlainObject(n) ? n.scaleX !== g && n.scaleY !== g && a.setTranslate(e, {
                    top: n.top,
                    left: n.left,
                    width: s.width * n.scaleX,
                    height: s.height * n.scaleY,
                    scaleX: 1,
                    scaleY: 1
                }) : !0 !== r && e.removeClass(n), p.isFunction(o) && o(t))
            }), p.isNumeric(i) && e.css("transition-duration", i + "ms"), p.isPlainObject(n) ? (n.scaleX !== g && n.scaleY !== g && (delete n.width, delete n.height, e.parent().hasClass("fancybox-slide--image") && e.parent().addClass("fancybox-is-scaling")), p.fancybox.setTranslate(e, n)) : e.addClass(n), e.data("timer", setTimeout(function () {
                e.trigger(l)
            }, i + 33))
        },
        stop: function (t, e) {
            t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(l), t.off(l).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
        }
    }, p.fn.fancybox = function (t) {
        var e;
        return (e = (t = t || {}).selector || !1) ? p("body").off("click.fb-start", e).on("click.fb-start", e, {
            options: t
        }, v) : this.off("click.fb-start").on("click.fb-start", {
            items: this,
            options: t
        }, v), this
    }, r.on("click.fb-start", "[data-fancybox]", v), r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
        p('[data-fancybox="' + p(this).attr("data-fancybox-trigger") + '"]').eq(p(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
            $trigger: p(this)
        })
    }), n = ".fancybox-button", h = "fancybox-focus", b = null, r.on("mousedown mouseup focus blur", n, function (t) {
        switch (t.type) {
            case "mousedown":
                b = p(this);
                break;
            case "mouseup":
                b = null;
                break;
            case "focusin":
                p(n).removeClass(h), p(this).is(b) || p(this).is("[disabled]") || p(this).addClass(h);
                break;
            case "focusout":
                p(n).removeClass(h)
        }
    })))
}(window, document, jQuery),
    function (h) {
        "use strict";

        function p(n, t, e) {
            if (n) return "object" === h.type(e = e || "") && (e = h.param(e, !0)), h.each(t, function (t, e) {
                n = n.replace("$" + t, e || "")
            }), e.length && (n += (0 < n.indexOf("?") ? "&" : "?") + e), n
        }

        var i = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function (t) {
                    return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && 0 < t[12].indexOf("layer=c") ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function (t) {
                    return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        };
        h(document).on("objectNeedsType.fb", function (t, e, o) {
            var r, s, a, c, l, u, f = o.src || "",
                d = !1,
                n = h.extend(!0, {}, i, o.opts.media);
            h.each(n, function (t, e) {
                if (s = f.match(e.matcher)) {
                    if (d = e.type, u = t, l = {}, e.paramPlace && s[e.paramPlace]) {
                        c = (c = "?" == (c = s[e.paramPlace])[0] ? c.substring(1) : c).split("&");
                        for (var n = 0; n < c.length; ++n) {
                            var i = c[n].split("=", 2);
                            2 == i.length && (l[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")))
                        }
                    }
                    return a = h.extend(!0, {}, e.params, o.opts[t], l), f = "function" === h.type(e.url) ? e.url.call(this, s, a, o) : p(e.url, s, a), r = "function" === h.type(e.thumb) ? e.thumb.call(this, s, a, o) : p(e.thumb, s), "youtube" === t ? f = f.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, i) {
                        return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10))
                    }) : "vimeo" === t && (f = f.replace("&%23", "#")), !1
                }
            }), d ? (o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = r), "iframe" === d && (o.opts = h.extend(!0, o.opts, {
                iframe: {
                    preload: !1,
                    attr: {
                        scrolling: "no"
                    }
                }
            })), h.extend(o, {
                type: d,
                src: f,
                origSrc: o.src,
                contentSource: u,
                contentType: "image" === d ? "image" : "gmap_place" == u || "gmap_search" == u ? "map" : "video"
            })) : f && (o.type = o.opts.defaultType)
        });
        var o = {
            youtube: {
                src: "https://www.youtube.com/iframe_api",
                class: "YT",
                loading: !1,
                loaded: !1
            },
            vimeo: {
                src: "https://player.vimeo.com/api/player.js",
                class: "Vimeo",
                loading: !1,
                loaded: !1
            },
            load: function (t) {
                var e, n = this;
                this[t].loaded ? setTimeout(function () {
                    n.done(t)
                }) : this[t].loading || (this[t].loading = !0, (e = document.createElement("script")).type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
                    n[t].loaded = !0, n.done(t)
                } : e.onload = function () {
                    n[t].loaded = !0, n.done(t)
                }, document.body.appendChild(e))
            },
            done: function (t) {
                var e, n;
                "youtube" === t && delete window.onYouTubeIframeAPIReady, (e = h.fancybox.getInstance()) && (n = e.current.$content.find("iframe"), "youtube" === t && void 0 !== YT && YT ? new YT.Player(n.attr("id"), {
                    events: {
                        onStateChange: function (t) {
                            0 == t.data && e.next()
                        }
                    }
                }) : "vimeo" === t && void 0 !== Vimeo && Vimeo && new Vimeo.Player(n).on("ended", function () {
                    e.next()
                }))
            }
        };
        h(document).on({
            "afterShow.fb": function (t, e, n) {
                1 < e.group.length && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource)
            }
        })
    }(jQuery),
    function (u, c, f) {
        "use strict";

        function d(t) {
            var e, n = [];
            for (e in t = (t = t.originalEvent || t || u.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t]) t[e].pageX ? n.push({
                x: t[e].pageX,
                y: t[e].pageY
            }) : t[e].clientX && n.push({
                x: t[e].clientX,
                y: t[e].clientY
            });
            return n
        }

        function h(t, e, n) {
            return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
        }

        function l(t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || f.isFunction(t.get(0).onclick) || t.data("selectable")) return 1;
            for (var e = 0, n = t[0].attributes, i = n.length; e < i; e++)
                if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return 1
        }

        function p(t) {
            for (var e, n, i, o = !1; ;) {
                if (e = t.get(0), n = i = n = void 0, n = u.getComputedStyle(e)["overflow-y"], i = u.getComputedStyle(e)["overflow-x"], n = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight, e = ("scroll" === i || "auto" === i) && e.scrollWidth > e.clientWidth, o = n || e) break;
                if (!(t = t.parent()).length || t.hasClass("fancybox-stage") || t.is("body")) break
            }
            return o
        }

        function n(t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", f.proxy(e, "ontouchstart"))
        }

        var g = u.requestAnimationFrame || u.webkitRequestAnimationFrame || u.mozRequestAnimationFrame || u.oRequestAnimationFrame || function (t) {
                return u.setTimeout(t, 1e3 / 60)
            },
            b = u.cancelAnimationFrame || u.webkitCancelAnimationFrame || u.mozCancelAnimationFrame || u.oCancelAnimationFrame || function (t) {
                u.clearTimeout(t)
            };
        n.prototype.destroy = function () {
            var t = this;
            t.$container.off(".fb.touch"), f(c).off(".fb.touch"), t.requestId && (b(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null)
        }, n.prototype.ontouchstart = function (t) {
            var e = this,
                n = f(t.target),
                i = e.instance,
                o = i.current,
                r = o.$slide,
                s = o.$content,
                a = "touchstart" == t.type;
            if (a && e.$container.off("mousedown.fb.touch"), (!t.originalEvent || 2 != t.originalEvent.button) && r.length && n.length && !l(n) && !l(n.parent()) && (n.is("img") || !(t.originalEvent.clientX > n[0].clientWidth + n.offset().left))) {
                if (!o || i.isAnimating || o.$slide.hasClass("fancybox-animated")) return t.stopPropagation(), void t.preventDefault();
                e.realPoints = e.startPoints = d(t), e.startPoints.length && (o.touch && t.stopPropagation(), e.startEvent = t, e.canTap = !0, e.$target = n, e.$content = s, e.opts = o.opts.touch, e.isPanning = !1, e.isSwiping = !1, e.isZooming = !1, e.isScrolling = !1, e.canPan = i.canPan(), e.startTime = (new Date).getTime(), e.distanceX = e.distanceY = e.distance = 0, e.canvasWidth = Math.round(r[0].clientWidth), e.canvasHeight = Math.round(r[0].clientHeight), e.contentLastPos = null, e.contentStartPos = f.fancybox.getTranslate(e.$content) || {
                    top: 0,
                    left: 0
                }, e.sliderStartPos = f.fancybox.getTranslate(r), e.stagePos = f.fancybox.getTranslate(i.$refs.stage), e.sliderStartPos.top -= e.stagePos.top, e.sliderStartPos.left -= e.stagePos.left, e.contentStartPos.top -= e.stagePos.top, e.contentStartPos.left -= e.stagePos.left, f(c).off(".fb.touch").on(a ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", f.proxy(e, "ontouchend")).on(a ? "touchmove.fb.touch" : "mousemove.fb.touch", f.proxy(e, "ontouchmove")), f.fancybox.isMobile && c.addEventListener("scroll", e.onscroll, !0), ((e.opts || e.canPan) && (n.is(e.$stage) || e.$stage.find(n).length) || (n.is(".fancybox-image") && t.preventDefault(), f.fancybox.isMobile && n.parents(".fancybox-caption").length)) && (e.isScrollable = p(n) || p(n.parent()), f.fancybox.isMobile && e.isScrollable || t.preventDefault(), 1 !== e.startPoints.length && !o.hasError || (e.canPan ? (f.fancybox.stop(e.$content), e.isPanning = !0) : e.isSwiping = !0, e.$container.addClass("fancybox-is-grabbing")), 2 === e.startPoints.length && "image" === o.type && (o.isLoaded || o.$ghost) && (e.canTap = !1, e.isSwiping = !1, e.isPanning = !1, e.isZooming = !0, f.fancybox.stop(e.$content), e.centerPointStartX = .5 * (e.startPoints[0].x + e.startPoints[1].x) - f(u).scrollLeft(), e.centerPointStartY = .5 * (e.startPoints[0].y + e.startPoints[1].y) - f(u).scrollTop(), e.percentageOfImageAtPinchPointX = (e.centerPointStartX - e.contentStartPos.left) / e.contentStartPos.width, e.percentageOfImageAtPinchPointY = (e.centerPointStartY - e.contentStartPos.top) / e.contentStartPos.height, e.startDistanceBetweenFingers = h(e.startPoints[0], e.startPoints[1]))))
            }
        }, n.prototype.onscroll = function (t) {
            this.isScrolling = !0, c.removeEventListener("scroll", this.onscroll, !0)
        }, n.prototype.ontouchmove = function (t) {
            var e = this;
            void 0 === t.originalEvent.buttons || 0 !== t.originalEvent.buttons ? e.isScrolling ? e.canTap = !1 : (e.newPoints = d(t), (e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = h(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = h(e.newPoints[0], e.startPoints[0], "y"), e.distance = h(e.newPoints[0], e.startPoints[0]), 0 < e.distance && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))) : e.ontouchend(t)
        }, n.prototype.onSwipe = function (t) {
            var o = this,
                r = o.instance,
                e = o.isSwiping,
                n = o.sliderStartPos.left || 0;
            if (!0 !== e) "x" == e && (0 < o.distanceX && (o.instance.group.length < 2 || 0 === o.instance.current.index && !o.instance.current.opts.loop) ? n += Math.pow(o.distanceX, .8) : o.distanceX < 0 && (o.instance.group.length < 2 || o.instance.current.index === o.instance.group.length - 1 && !o.instance.current.opts.loop) ? n -= Math.pow(-o.distanceX, .8) : n += o.distanceX), o.sliderLastPos = {
                top: "x" == e ? 0 : o.sliderStartPos.top + o.distanceY,
                left: n
            }, o.requestId && (b(o.requestId), o.requestId = null), o.requestId = g(function () {
                o.sliderLastPos && (f.each(o.instance.slides, function (t, e) {
                    var n = e.pos - o.instance.currPos;
                    f.fancybox.setTranslate(e.$slide, {
                        top: o.sliderLastPos.top,
                        left: o.sliderLastPos.left + n * o.canvasWidth + n * e.opts.gutter
                    })
                }), o.$container.addClass("fancybox-is-sliding"))
            });
            else if (10 < Math.abs(o.distance)) {
                if (o.canTap = !1, r.group.length < 2 && o.opts.vertical ? o.isSwiping = "y" : r.isDragging || !1 === o.opts.vertical || "auto" === o.opts.vertical && 800 < f(u).width() ? o.isSwiping = "x" : (n = Math.abs(180 * Math.atan2(o.distanceY, o.distanceX) / Math.PI), o.isSwiping = 45 < n && n < 135 ? "y" : "x"), "y" === o.isSwiping && f.fancybox.isMobile && o.isScrollable) return void (o.isScrolling = !0);
                r.isDragging = o.isSwiping, o.startPoints = o.newPoints, f.each(r.slides, function (t, e) {
                    var n, i;
                    f.fancybox.stop(e.$slide), n = f.fancybox.getTranslate(e.$slide), i = f.fancybox.getTranslate(r.$refs.stage), e.$slide.css({
                        transform: "",
                        opacity: "",
                        "transition-duration": ""
                    }).removeClass("fancybox-animated").removeClass(function (t, e) {
                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                    }), e.pos === r.current.pos && (o.sliderStartPos.top = n.top - i.top, o.sliderStartPos.left = n.left - i.left), f.fancybox.setTranslate(e.$slide, {
                        top: n.top - i.top,
                        left: n.left - i.left
                    })
                }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
            }
        }, n.prototype.onPan = function () {
            var t = this;
            h(t.newPoints[0], t.realPoints[0]) < (f.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && b(t.requestId), t.requestId = g(function () {
                f.fancybox.setTranslate(t.$content, t.contentLastPos)
            }))
        }, n.prototype.limitMovement = function () {
            var t = this,
                e = t.canvasWidth,
                n = t.canvasHeight,
                i = t.distanceX,
                o = t.distanceY,
                r = t.contentStartPos,
                s = r.left,
                a = r.top,
                c = r.width,
                l = r.height,
                u = e < c ? s + i : s,
                f = a + o,
                t = Math.max(0, .5 * e - .5 * c),
                r = Math.max(0, .5 * n - .5 * l),
                c = Math.min(e - c, .5 * e - .5 * c),
                l = Math.min(n - l, .5 * n - .5 * l);
            return 0 < i && t < u && (u = t - 1 + Math.pow(-t + s + i, .8) || 0), i < 0 && u < c && (u = c + 1 - Math.pow(c - s - i, .8) || 0), 0 < o && r < f && (f = r - 1 + Math.pow(-r + a + o, .8) || 0), {
                top: f = o < 0 && f < l ? l + 1 - Math.pow(l - a - o, .8) || 0 : f,
                left: u
            }
        }, n.prototype.limitPosition = function (t, e, n, i) {
            var o = this.canvasWidth,
                r = this.canvasHeight;
            return t = o < n ? (t = 0 < t ? 0 : t) < o - n ? o - n : t : Math.max(0, o / 2 - n / 2), {
                top: e = r < i ? (e = 0 < e ? 0 : e) < r - i ? r - i : e : Math.max(0, r / 2 - i / 2),
                left: t
            }
        }, n.prototype.onZoom = function () {
            var t = this,
                e = t.contentStartPos,
                n = e.width,
                i = e.height,
                o = e.left,
                r = e.top,
                s = h(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
                a = Math.floor(n * s),
                c = Math.floor(i * s),
                l = (n - a) * t.percentageOfImageAtPinchPointX,
                e = (i - c) * t.percentageOfImageAtPinchPointY,
                n = (t.newPoints[0].x + t.newPoints[1].x) / 2 - f(u).scrollLeft(),
                i = (t.newPoints[0].y + t.newPoints[1].y) / 2 - f(u).scrollTop(),
                n = n - t.centerPointStartX,
                s = {
                    top: r + (e + (i - t.centerPointStartY)),
                    left: o + (l + n),
                    scaleX: s,
                    scaleY: s
                };
            t.canTap = !1, t.newWidth = a, t.newHeight = c, t.contentLastPos = s, t.requestId && b(t.requestId), t.requestId = g(function () {
                f.fancybox.setTranslate(t.$content, t.contentLastPos)
            })
        }, n.prototype.ontouchend = function (t) {
            var e = this,
                n = e.isSwiping,
                i = e.isPanning,
                o = e.isZooming,
                r = e.isScrolling;
            if (e.endPoints = d(t), e.dMs = Math.max((new Date).getTime() - e.startTime, 1), e.$container.removeClass("fancybox-is-grabbing"), f(c).off(".fb.touch"), c.removeEventListener("scroll", e.onscroll, !0), e.requestId && (b(e.requestId), e.requestId = null), e.isSwiping = !1, e.isPanning = !1, e.isZooming = !1, e.isScrolling = !1, e.instance.isDragging = !1, e.canTap) return e.onTap(t);
            e.speed = 100, e.velocityX = e.distanceX / e.dMs * .5, e.velocityY = e.distanceY / e.dMs * .5, i ? e.endPanning() : o ? e.endZooming() : e.endSwiping(n, r)
        }, n.prototype.endSwiping = function (t, e) {
            var n = this,
                i = !1,
                o = n.instance.group.length,
                r = Math.abs(n.distanceX),
                r = "x" == t && 1 < o && (130 < n.dMs && 10 < r || 50 < r);
            n.sliderLastPos = null, "y" == t && !e && 50 < Math.abs(n.distanceY) ? (f.fancybox.animate(n.instance.current.$slide, {
                top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY,
                opacity: 0
            }, 200), i = n.instance.close(!0, 250)) : r && 0 < n.distanceX ? i = n.instance.previous(300) : r && n.distanceX < 0 && (i = n.instance.next(300)), !1 !== i || "x" != t && "y" != t || n.instance.centerSlide(200), n.$container.removeClass("fancybox-is-sliding")
        }, n.prototype.endPanning = function () {
            var t, e, n = this;
            n.contentLastPos && (e = !1 === n.opts.momentum || 350 < n.dMs ? (t = n.contentLastPos.left, n.contentLastPos.top) : (t = n.contentLastPos.left + 500 * n.velocityX, n.contentLastPos.top + 500 * n.velocityY), (e = n.limitPosition(t, e, n.contentStartPos.width, n.contentStartPos.height)).width = n.contentStartPos.width, e.height = n.contentStartPos.height, f.fancybox.animate(n.$content, e, 366))
        }, n.prototype.endZooming = function () {
            var t, e, n = this,
                i = n.instance.current,
                o = n.newWidth,
                r = n.newHeight;
            n.contentLastPos && (t = n.contentLastPos.left, e = n.contentLastPos.top, f.fancybox.setTranslate(n.$content, {
                top: e,
                left: t,
                width: o,
                height: r,
                scaleX: 1,
                scaleY: 1
            }), o < n.canvasWidth && r < n.canvasHeight ? n.instance.scaleToFit(150) : o > i.width || r > i.height ? n.instance.scaleToActual(n.centerPointStartX, n.centerPointStartY, 150) : (r = n.limitPosition(t, e, o, r), f.fancybox.animate(n.$content, r, 150)))
        }, n.prototype.onTap = function (e) {
            function t(t) {
                if (t = s.opts[t], t = f.isFunction(t) ? t.apply(r, [s, e]) : t) switch (t) {
                    case "close":
                        r.close(i.startEvent);
                        break;
                    case "toggleControls":
                        r.toggleControls();
                        break;
                    case "next":
                        r.next();
                        break;
                    case "nextOrClose":
                        1 < r.group.length ? r.next() : r.close(i.startEvent);
                        break;
                    case "zoom":
                        "image" == s.type && (s.isLoaded || s.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(c, l) : r.group.length < 2 && r.close(i.startEvent))
                }
            }

            var n, i = this,
                o = f(e.target),
                r = i.instance,
                s = r.current,
                a = e && d(e) || i.startPoints,
                c = a[0] ? a[0].x - f(u).scrollLeft() - i.stagePos.left : 0,
                l = a[0] ? a[0].y - f(u).scrollTop() - i.stagePos.top : 0;
            if ((!e.originalEvent || 2 != e.originalEvent.button) && (o.is("img") || !(c > o[0].clientWidth + o.offset().left))) {
                if (o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) n = "Outside";
                else if (o.is(".fancybox-slide")) n = "Slide";
                else {
                    if (!r.current.$content || !r.current.$content.find(o).addBack().filter(o).length) return;
                    n = "Content"
                }
                if (i.tapped) {
                    if (clearTimeout(i.tapped), i.tapped = null, 50 < Math.abs(c - i.tapX) || 50 < Math.abs(l - i.tapY)) return this;
                    t("dblclick" + n)
                } else i.tapX = c, i.tapY = l, s.opts["dblclick" + n] && s.opts["dblclick" + n] !== s.opts["click" + n] ? i.tapped = setTimeout(function () {
                    i.tapped = null, r.isAnimating || t("click" + n)
                }, 500) : t("click" + n);
                return this
            }
        }, f(c).on("onActivate.fb", function (t, e) {
            e && !e.Guestures && (e.Guestures = new n(e))
        }).on("beforeClose.fb", function (t, e) {
            e && e.Guestures && e.Guestures.destroy()
        })
    }(window, document, jQuery),
    function (r, s) {
        "use strict";
        s.extend(!0, s.fancybox.defaults, {
            btnTpl: {
                slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
            },
            slideShow: {
                autoStart: !1,
                speed: 3e3,
                progress: !0
            }
        });

        function n(t) {
            this.instance = t, this.init()
        }

        s.extend(n.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function () {
                var t = this,
                    e = t.instance,
                    n = e.group[e.currIndex].opts.slideShow;
                t.$button = e.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                    t.toggle()
                }), e.group.length < 2 || !n ? t.$button.hide() : n.progress && (t.$progress = s('<div class="fancybox-progress"></div>').appendTo(e.$refs.inner))
            },
            set: function (t) {
                var e = this,
                    n = e.instance,
                    i = n.current;
                i && (!0 === t || i.opts.loop || n.currIndex < n.group.length - 1) ? e.isActive && "video" !== i.contentType && (e.$progress && s.fancybox.animate(e.$progress.show(), {
                    scaleX: 1
                }, i.opts.slideShow.speed), e.timer = setTimeout(function () {
                    n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0)
                }, i.opts.slideShow.speed)) : (e.stop(), n.idleSecondsCounter = 0, n.showControls())
            },
            clear: function () {
                clearTimeout(this.timer), this.timer = null, this.$progress && this.$progress.removeAttr("style").hide()
            },
            start: function () {
                var t = this,
                    e = t.instance.current;
                e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
            },
            stop: function () {
                var t = this,
                    e = t.instance.current;
                t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide()
            },
            toggle: function () {
                this.isActive ? this.stop() : this.start()
            }
        }), s(r).on({
            "onInit.fb": function (t, e) {
                e && !e.SlideShow && (e.SlideShow = new n(e))
            },
            "beforeShow.fb": function (t, e, n, i) {
                e = e && e.SlideShow;
                i ? e && n.opts.slideShow.autoStart && e.start() : e && e.isActive && e.clear()
            },
            "afterShow.fb": function (t, e, n) {
                e = e && e.SlideShow;
                e && e.isActive && e.set()
            },
            "afterKeydown.fb": function (t, e, n, i, o) {
                e = e && e.SlideShow;
                !e || !n.opts.slideShow || 80 !== o && 32 !== o || s(r.activeElement).is("button,a,input") || (i.preventDefault(), e.toggle())
            },
            "beforeClose.fb onDeactivate.fb": function (t, e) {
                e = e && e.SlideShow;
                e && e.stop()
            }
        }), s(r).on("visibilitychange", function () {
            var t = s.fancybox.getInstance(),
                t = t && t.SlideShow;
            t && t.isActive && (r.hidden ? t.clear() : t.set())
        })
    }(document, jQuery),
    function (r, n) {
        "use strict";
        var i, o = function () {
            for (var t = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], e = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                if (i && i[1] in r) {
                    for (var o = 0; o < i.length; o++) e[t[0][o]] = i[o];
                    return e
                }
            }
            return !1
        }();
        o && (i = {
            request: function (t) {
                (t = t || r.documentElement)[o.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
            },
            exit: function () {
                r[o.exitFullscreen]()
            },
            toggle: function (t) {
                t = t || r.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
            },
            isFullscreen: function () {
                return Boolean(r[o.fullscreenElement])
            },
            enabled: function () {
                return Boolean(r[o.fullscreenEnabled])
            }
        }, n.extend(!0, n.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), n(r).on(o.fullscreenchange, function () {
            var t = i.isFullscreen(),
                e = n.fancybox.getInstance();
            e && (e.current && "image" === e.current.type && e.isAnimating && (e.isAnimating = !1, e.update(!0, !0, 0), e.isComplete || e.complete()), e.trigger("onFullscreenChange", t), e.$refs.container.toggleClass("fancybox-is-fullscreen", t), e.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
        })), n(r).on({
            "onInit.fb": function (t, e) {
                o ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                    t.stopPropagation(), t.preventDefault(), i.toggle()
                }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && i.request(), e.FullScreen = i) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
            },
            "afterKeydown.fb": function (t, e, n, i, o) {
                e && e.FullScreen && 70 === o && (i.preventDefault(), e.FullScreen.toggle())
            },
            "beforeClose.fb": function (t, e) {
                e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit()
            }
        })
    }(document, jQuery),
    function (t, r) {
        "use strict";
        var s = "fancybox-thumbs",
            a = s + "-active";
        r.fancybox.defaults = r.extend(!0, {
            btnTpl: {
                thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0,
                parentEl: ".fancybox-container",
                axis: "y"
            }
        }, r.fancybox.defaults);

        function i(t) {
            this.init(t)
        }

        r.extend(i.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function (t) {
                var e = this,
                    n = t.group,
                    i = 0;
                e.instance = t, e.opts = n[t.currIndex].opts.thumbs, (t.Thumbs = e).$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
                for (var o = 0, r = n.length; o < r && (n[o].thumb && i++, !(1 < i)); o++) ;
                1 < i && e.opts ? (e.$button.removeAttr("style").on("click", function () {
                    e.toggle()
                }), e.isActive = !0) : e.$button.hide()
            },
            create: function () {
                var n, t = this,
                    e = t.instance,
                    i = t.opts.parentEl,
                    o = [];
                t.$grid || (t.$grid = r('<div class="' + s + " " + s + "-" + t.opts.axis + '"></div>').appendTo(e.$refs.container.find(i).addBack().filter(i)), t.$grid.on("click", "a", function () {
                    e.jumpTo(r(this).attr("data-index"))
                })), t.$list || (t.$list = r('<div class="' + s + '__list">').appendTo(t.$grid)), r.each(e.group, function (t, e) {
                    (n = e.thumb) || "image" !== e.type || (n = e.src), o.push('<a href="javascript:;" tabindex="0" data-index="' + t + '"' + (n && n.length ? ' style="background-image:url(' + n + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
                }), t.$list[0].innerHTML = o.join(""), "x" === t.opts.axis && t.$list.width(parseInt(t.$grid.css("padding-right"), 10) + e.group.length * t.$list.children().eq(0).outerWidth(!0))
            },
            focus: function (t) {
                var e, n, i = this,
                    o = i.$list,
                    r = i.$grid;
                i.instance.current && (n = (e = o.children().removeClass(a).filter('[data-index="' + i.instance.current.index + '"]').addClass(a)).position(), "y" === i.opts.axis && (n.top < 0 || n.top > o.height() - e.outerHeight()) ? o.stop().animate({
                    scrollTop: o.scrollTop() + n.top
                }, t) : "x" === i.opts.axis && (n.left < r.scrollLeft() || n.left > r.scrollLeft() + (r.width() - e.outerWidth())) && o.parent().stop().animate({
                    scrollLeft: n.left
                }, t))
            },
            update: function () {
                var t = this;
                t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
            },
            hide: function () {
                this.isVisible = !1, this.update()
            },
            show: function () {
                this.isVisible = !0, this.update()
            },
            toggle: function () {
                this.isVisible = !this.isVisible, this.update()
            }
        }), r(t).on({
            "onInit.fb": function (t, e) {
                var n;
                e && !e.Thumbs && (n = new i(e)).isActive && !0 === n.opts.autoStart && n.show()
            },
            "beforeShow.fb": function (t, e, n, i) {
                e = e && e.Thumbs;
                e && e.isVisible && e.focus(i ? 0 : 250)
            },
            "afterKeydown.fb": function (t, e, n, i, o) {
                e = e && e.Thumbs;
                e && e.isActive && 71 === o && (i.preventDefault(), e.toggle())
            },
            "beforeClose.fb": function (t, e) {
                e = e && e.Thumbs;
                e && e.isVisible && !1 !== e.opts.hideOnClose && e.$grid.hide()
            }
        })
    }(document, jQuery),
    function (t, o) {
        "use strict";
        o.extend(!0, o.fancybox.defaults, {
            btnTpl: {
                share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
            },
            share: {
                url: function (t, e) {
                    return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
                },
                tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
            }
        }), o(t).on("click", "[data-fancybox-share]", function () {
            var t, e, n = o.fancybox.getInstance(),
                i = n.current || null;
            i && ("function" === o.type(i.opts.share.url) && (t = i.opts.share.url.apply(i, [n, i])), t = i.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === i.type ? encodeURIComponent(i.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, (e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            }, String(t).replace(/[&<>"'`=\/]/g, function (t) {
                return e[t]
            }))).replace(/\{\{descr\}\}/g, n.$caption ? encodeURIComponent(n.$caption.text()) : ""), o.fancybox.open({
                src: n.translate(n, t),
                type: "html",
                opts: {
                    touch: !1,
                    animationEffect: !1,
                    afterLoad: function (t, e) {
                        n.$refs.container.one("beforeClose.fb", function () {
                            t.close(null, 0)
                        }), e.$content.find(".fancybox-share__button").click(function () {
                            return window.open(this.href, "Share", "width=550, height=450"), !1
                        })
                    },
                    mobile: {
                        autoFocus: !1
                    }
                }
            }))
        })
    }(document, jQuery),
    function (r, s, i) {
        "use strict";

        function o() {
            var t = r.location.hash.substr(1),
                e = t.split("-"),
                n = 1 < e.length && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || 1;
            return {
                hash: t,
                index: n < 1 ? 1 : n,
                gallery: e.join("-")
            }
        }

        function e(t) {
            "" !== t.gallery && i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
        }

        function a(t) {
            return !!t && ("" !== (t = (t = (t.current || t).opts).hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : "")) && t)
        }

        i.escapeSelector || (i.escapeSelector = function (t) {
            return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            })
        }), i(function () {
            !1 !== i.fancybox.defaults.hash && (i(s).on({
                "onInit.fb": function (t, e) {
                    var n, i;
                    !1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = a(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
                },
                "beforeShow.fb": function (t, e, n, i) {
                    var o;
                    n && !1 !== n.opts.hash && (o = a(e)) && (e.currentHash = o + (1 < e.group.length ? "-" + (n.index + 1) : ""), r.location.hash !== "#" + e.currentHash && (i && !e.origHash && (e.origHash = r.location.hash), e.hashTimer && clearTimeout(e.hashTimer), e.hashTimer = setTimeout(function () {
                        "replaceState" in r.history ? (r.history[i ? "pushState" : "replaceState"]({}, s.title, r.location.pathname + r.location.search + "#" + e.currentHash), i && (e.hasCreatedHistory = !0)) : r.location.hash = e.currentHash, e.hashTimer = null
                    }, 300)))
                },
                "beforeClose.fb": function (t, e, n) {
                    n && !1 !== n.opts.hash && (clearTimeout(e.hashTimer), e.currentHash && e.hasCreatedHistory ? r.history.back() : e.currentHash && ("replaceState" in r.history ? r.history.replaceState({}, s.title, r.location.pathname + r.location.search + (e.origHash || "")) : r.location.hash = e.origHash), e.currentHash = null)
                }
            }), i(r).on("hashchange.fb", function () {
                var t = o(),
                    n = null;
                i.each(i(".fancybox-container").get().reverse(), function (t, e) {
                    e = i(e).data("FancyBox");
                    if (e && e.currentHash) return n = e, !1
                }), n ? n.currentHash === t.gallery + "-" + t.index || 1 === t.index && n.currentHash == t.gallery || (n.currentHash = null, n.close()) : "" !== t.gallery && e(t)
            }), setTimeout(function () {
                i.fancybox.getInstance() || e(o())
            }, 50))
        })
    }(window, document, jQuery),
    function (t, e) {
        "use strict";
        var o = (new Date).getTime();
        e(t).on({
            "onInit.fb": function (t, i, e) {
                i.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
                    var e = i.current,
                        n = (new Date).getTime();
                    i.group.length < 2 || !1 === e.opts.wheel || "auto" === e.opts.wheel && "image" !== e.type || (t.preventDefault(), t.stopPropagation(), e.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, n - o < 250 || (o = n, i[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
                })
            }
        })
    }(document, jQuery),
    function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).SimpleBar = e()
    }(this, function () {
        "use strict";
        var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

        function e(t, e) {
            return t(e = {
                exports: {}
            }, e.exports), e.exports
        }

        function b(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }

        function i(t) {
            return T.call(t).slice(8, -1)
        }

        function c(t) {
            return $(O(t))
        }

        function o(t, e) {
            if (!k(t)) return t;
            var n, i;
            if (e && "function" == typeof (n = t.toString) && !k(i = n.call(t))) return i;
            if ("function" == typeof (n = t.valueOf) && !k(i = n.call(t))) return i;
            if (!e && "function" == typeof (n = t.toString) && !k(i = n.call(t))) return i;
            throw TypeError("Can't convert object to primitive value")
        }

        function n(t) {
            return M ? L.createElement(t) : {}
        }

        function l(e, n) {
            try {
                D(m, e, n)
            } catch (t) {
                m[e] = n
            }
            return n
        }

        var r, s, a, u, f, d, h, p, g = "object",
            v = function (t) {
                return t && t.Math == Math && t
            },
            m = v(typeof globalThis == g && globalThis) || v(typeof window == g && window) || v(typeof self == g && self) || v(typeof t == g && t) || Function("return this")(),
            y = !b(function () {
                return 7 != Object.defineProperty({}, "a", {
                    get: function () {
                        return 7
                    }
                }).a
            }),
            x = {}.propertyIsEnumerable,
            w = Object.getOwnPropertyDescriptor,
            S = {
                f: w && !x.call({
                    1: 2
                }, 1) ? function (t) {
                    t = w(this, t);
                    return !!t && t.enumerable
                } : x
            },
            E = function (t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            },
            T = {}.toString,
            C = "".split,
            $ = b(function () {
                return !Object("z").propertyIsEnumerable(0)
            }) ? function (t) {
                return "String" == i(t) ? C.call(t, "") : Object(t)
            } : Object,
            O = function (t) {
                if (null == t) throw TypeError("Can't call method on " + t);
                return t
            },
            k = function (t) {
                return "object" == typeof t ? null !== t : "function" == typeof t
            },
            P = {}.hasOwnProperty,
            A = function (t, e) {
                return P.call(t, e)
            },
            L = m.document,
            M = k(L) && k(L.createElement),
            z = !y && !b(function () {
                return 7 != Object.defineProperty(n("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            }),
            _ = Object.getOwnPropertyDescriptor,
            R = {
                f: y ? _ : function (t, e) {
                    if (t = c(t), e = o(e, !0), z) try {
                        return _(t, e)
                    } catch (t) {
                    }
                    if (A(t, e)) return E(!S.f.call(t, e), t[e])
                }
            },
            I = function (t) {
                if (!k(t)) throw TypeError(String(t) + " is not an object");
                return t
            },
            F = Object.defineProperty,
            j = {
                f: y ? F : function (t, e, n) {
                    if (I(t), e = o(e, !0), I(n), z) try {
                        return F(t, e, n)
                    } catch (t) {
                    }
                    if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                    return "value" in n && (t[e] = n.value), t
                }
            },
            D = y ? function (t, e, n) {
                return j.f(t, e, E(1, n))
            } : function (t, e, n) {
                return t[e] = n, t
            },
            B = e(function (t) {
                var e = "__core-js_shared__",
                    n = m[e] || l(e, {});
                (t.exports = function (t, e) {
                    return n[t] || (n[t] = void 0 !== e ? e : {})
                })("versions", []).push({
                    version: "3.2.1",
                    mode: "global",
                    copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
                })
            }),
            W = B("native-function-to-string", Function.toString),
            N = m.WeakMap,
            H = "function" == typeof N && /native code/.test(W.call(N)),
            V = 0,
            X = Math.random(),
            q = function (t) {
                return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++V + X).toString(36)
            },
            Y = B("keys"),
            U = function (t) {
                return Y[t] || (Y[t] = q(t))
            },
            G = {},
            Z = m.WeakMap;
        h = H ? (r = new Z, s = r.get, a = r.has, u = r.set, f = function (t, e) {
            return u.call(r, t, e), e
        }, d = function (t) {
            return s.call(r, t) || {}
        }, function (t) {
            return a.call(r, t)
        }) : (p = U("state"), G[p] = !0, f = function (t, e) {
            return D(t, p, e), e
        }, d = function (t) {
            return A(t, p) ? t[p] : {}
        }, function (t) {
            return A(t, p)
        });

        function Q(t) {
            return "function" == typeof t ? t : void 0
        }

        function K(t) {
            return 0 < t ? ft(ut(t), 9007199254740991) : 0
        }

        function J(t, e) {
            var n, i = c(t),
                o = 0,
                r = [];
            for (n in i) !A(G, n) && A(i, n) && r.push(n);
            for (; e.length > o;) A(i, n = e[o++]) && (~pt(r, n) || r.push(n));
            return r
        }

        function tt(t, e) {
            var n, i, o, r = t.target,
                s = t.global,
                a = t.stat,
                c = s ? m : a ? m[r] || l(r, {}) : (m[r] || {}).prototype;
            if (c)
                for (n in e) {
                    if (i = e[n], o = t.noTargetGet ? (o = $t(c, n)) && o.value : c[n], !Ct(s ? n : r + (a ? "." : "#") + n, t.forced) && void 0 !== o) {
                        if (typeof i == typeof o) continue;
                        !function (t, e) {
                            for (var n = yt(e), i = j.f, o = R.f, r = 0; r < n.length; r++) {
                                var s = n[r];
                                A(t, s) || i(t, s, o(e, s))
                            }
                        }(i, o)
                    }
                    (t.sham || o && o.sham) && D(i, "sham", !0), st(c, n, i, t)
                }
        }

        function et(i, o, t) {
            if (Ot(i), void 0 === o) return i;
            switch (t) {
                case 0:
                    return function () {
                        return i.call(o)
                    };
                case 1:
                    return function (t) {
                        return i.call(o, t)
                    };
                case 2:
                    return function (t, e) {
                        return i.call(o, t, e)
                    };
                case 3:
                    return function (t, e, n) {
                        return i.call(o, t, e, n)
                    }
            }
            return function () {
                return i.apply(o, arguments)
            }
        }

        function nt(t) {
            return Object(O(t))
        }

        function it(t) {
            return Lt[t] || (Lt[t] = Pt && At[t] || (Pt ? At : q)("Symbol." + t))
        }

        function ot(t, e) {
            var n;
            return new (void 0 === (n = kt(t) && ("function" == typeof (n = t.constructor) && (n === Array || kt(n.prototype)) || k(n) && null === (n = n[Mt])) ? void 0 : n) ? Array : n)(0 === e ? 0 : e)
        }

        var rt = {
                set: f,
                get: d,
                has: h,
                enforce: function (t) {
                    return h(t) ? d(t) : f(t, {})
                },
                getterFor: function (n) {
                    return function (t) {
                        var e;
                        if (!k(t) || (e = d(t)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
                        return e
                    }
                }
            },
            st = e(function (t) {
                var e = rt.get,
                    s = rt.enforce,
                    a = String(W).split("toString");
                B("inspectSource", function (t) {
                    return W.call(t)
                }), (t.exports = function (t, e, n, i) {
                    var o = !!i && !!i.unsafe,
                        r = !!i && !!i.enumerable,
                        i = !!i && !!i.noTargetGet;
                    "function" == typeof n && ("string" != typeof e || A(n, "name") || D(n, "name", e), s(n).source = a.join("string" == typeof e ? e : "")), t !== m ? (o ? !i && t[e] && (r = !0) : delete t[e], r ? t[e] = n : D(t, e, n)) : r ? t[e] = n : l(e, n)
                })(Function.prototype, "toString", function () {
                    return "function" == typeof this && e(this).source || W.call(this)
                })
            }),
            at = m,
            v = function (t, e) {
                return arguments.length < 2 ? Q(at[t]) || Q(m[t]) : at[t] && at[t][e] || m[t] && m[t][e]
            },
            ct = Math.ceil,
            lt = Math.floor,
            ut = function (t) {
                return isNaN(t = +t) ? 0 : (0 < t ? lt : ct)(t)
            },
            ft = Math.min,
            dt = Math.max,
            ht = Math.min,
            g = function (a) {
                return function (t, e, n) {
                    var i, o = c(t),
                        r = K(o.length),
                        s = function (t, e) {
                            t = ut(t);
                            return t < 0 ? dt(t + e, 0) : ht(t, e)
                        }(n, r);
                    if (a && e != e) {
                        for (; s < r;)
                            if ((i = o[s++]) != i) return !0
                    } else
                        for (; s < r; s++)
                            if ((a || s in o) && o[s] === e) return a || s || 0;
                    return !a && -1
                }
            },
            pt = {
                includes: g(!0),
                indexOf: g(!1)
            }.indexOf,
            gt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
            bt = gt.concat("length", "prototype"),
            vt = {
                f: Object.getOwnPropertyNames || function (t) {
                    return J(t, bt)
                }
            },
            mt = {
                f: Object.getOwnPropertySymbols
            },
            yt = v("Reflect", "ownKeys") || function (t) {
                var e = vt.f(I(t)),
                    n = mt.f;
                return n ? e.concat(n(t)) : e
            },
            xt = /#|\.prototype\./,
            x = function (t, e) {
                t = St[wt(t)];
                return t == Tt || t != Et && ("function" == typeof e ? b(e) : !!e)
            },
            wt = x.normalize = function (t) {
                return String(t).replace(xt, ".").toLowerCase()
            },
            St = x.data = {},
            Et = x.NATIVE = "N",
            Tt = x.POLYFILL = "P",
            Ct = x,
            $t = R.f,
            Ot = function (t) {
                if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
                return t
            },
            kt = Array.isArray || function (t) {
                return "Array" == i(t)
            },
            Pt = !!Object.getOwnPropertySymbols && !b(function () {
                return !String(Symbol())
            }),
            At = m.Symbol,
            Lt = B("wks"),
            Mt = it("species"),
            zt = [].push,
            N = function (d) {
                var h = 1 == d,
                    p = 2 == d,
                    g = 3 == d,
                    b = 4 == d,
                    v = 6 == d,
                    m = 5 == d || v;
                return function (t, e, n, i) {
                    for (var o, r, s = nt(t), a = $(s), c = et(e, n, 3), l = K(a.length), u = 0, i = i || ot, f = h ? i(t, l) : p ? i(t, 0) : void 0; u < l; u++)
                        if ((m || u in a) && (r = c(o = a[u], u, s), d))
                            if (h) f[u] = r;
                            else if (r) switch (d) {
                                case 3:
                                    return !0;
                                case 5:
                                    return o;
                                case 6:
                                    return u;
                                case 2:
                                    zt.call(f, o)
                            } else if (b) return !1;
                    return v ? -1 : g || b ? b : f
                }
            },
            Z = {
                forEach: N(0),
                map: N(1),
                filter: N(2),
                some: N(3),
                every: N(4),
                find: N(5),
                findIndex: N(6)
            },
            g = function (t, e) {
                var n = [][t];
                return !n || !b(function () {
                    n.call(null, e || function () {
                        throw 1
                    }, 1)
                })
            },
            _t = Z.forEach,
            Rt = g("forEach") ? function (t) {
                return _t(this, t, 1 < arguments.length ? arguments[1] : void 0)
            } : [].forEach;
        tt({
            target: "Array",
            proto: !0,
            forced: [].forEach != Rt
        }, {
            forEach: Rt
        });
        var It, Ft = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        };
        for (It in Ft) {
            var jt = m[It],
                jt = jt && jt.prototype;
            if (jt && jt.forEach !== Rt) try {
                D(jt, "forEach", Rt)
            } catch (t) {
                jt.forEach = Rt
            }
        }
        var Dt, Bt = !("undefined" == typeof window || !window.document || !window.document.createElement),
            Wt = it("species"),
            Nt = Z.filter;
        tt({
            target: "Array",
            proto: !0,
            forced: (Dt = "filter", !!b(function () {
                var t = [];
                return (t.constructor = {})[Wt] = function () {
                    return {
                        foo: 1
                    }
                }, 1 !== t[Dt](Boolean).foo
            }))
        }, {
            filter: function (t) {
                return Nt(this, t, 1 < arguments.length ? arguments[1] : void 0)
            }
        });

        function Ht() {
        }

        var Vt = Object.keys || function (t) {
                return J(t, gt)
            },
            Xt = y ? Object.defineProperties : function (t, e) {
                I(t);
                for (var n, i = Vt(e), o = i.length, r = 0; r < o;) j.f(t, n = i[r++], e[n]);
                return t
            },
            qt = v("document", "documentElement"),
            Yt = U("IE_PROTO"),
            Ut = "prototype",
            Gt = function () {
                var t = n("iframe"),
                    e = gt.length;
                for (t.style.display = "none", qt.appendChild(t), t.src = String("javascript:"), (t = t.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), Gt = t.F; e--;) delete Gt[Ut][gt[e]];
                return Gt()
            },
            Zt = Object.create || function (t, e) {
                var n;
                return null !== t ? (Ht[Ut] = I(t), n = new Ht, Ht[Ut] = null, n[Yt] = t) : n = Gt(), void 0 === e ? n : Xt(n, e)
            };
        G[Yt] = !0;
        var Qt = it("unscopables"),
            Kt = Array.prototype;
        null == Kt[Qt] && D(Kt, Qt, Zt(null));
        var x = function (t) {
                Kt[Qt][t] = !0
            },
            Jt = {},
            N = !b(function () {
                function t() {
                }

                return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
            }),
            te = U("IE_PROTO"),
            ee = Object.prototype,
            ne = N ? Object.getPrototypeOf : function (t) {
                return t = nt(t), A(t, te) ? t[te] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? ee : null
            },
            v = it("iterator"),
            U = !1;
        [].keys && ("next" in (N = [].keys()) ? (N = ne(ne(N))) !== Object.prototype && (oe = N) : U = !0), A(oe = null == oe ? {} : oe, v) || D(oe, v, function () {
            return this
        });

        function ie() {
            return this
        }

        var oe = {
                IteratorPrototype: oe,
                BUGGY_SAFARI_ITERATORS: U
            },
            re = j.f,
            se = it("toStringTag"),
            ae = function (t, e, n) {
                t && !A(t = n ? t : t.prototype, se) && re(t, se, {
                    configurable: !0,
                    value: e
                })
            },
            ce = oe.IteratorPrototype,
            le = function () {
                return this
            },
            ue = Object.setPrototypeOf || ("__proto__" in {} ? function () {
                var n, i = !1,
                    t = {};
                try {
                    (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []), i = t instanceof Array
                } catch (t) {
                }
                return function (t, e) {
                    return I(t),
                        function (t) {
                            if (!k(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
                        }(e), i ? n.call(t, e) : t.__proto__ = e, t
                }
            }() : void 0),
            fe = oe.IteratorPrototype,
            de = oe.BUGGY_SAFARI_ITERATORS,
            he = it("iterator"),
            pe = "values",
            ge = "entries",
            U = function (t, e, n, i, o, r, s) {
                !function (t, e, n) {
                    e += " Iterator";
                    t.prototype = Zt(ce, {
                        next: E(1, n)
                    }), ae(t, e, !1), Jt[e] = le
                }(n, e, i);

                function a(t) {
                    if (t === o && p) return p;
                    if (!de && t in d) return d[t];
                    switch (t) {
                        case "keys":
                        case pe:
                        case ge:
                            return function () {
                                return new n(this, t)
                            }
                    }
                    return function () {
                        return new n(this)
                    }
                }

                var c, l, u = e + " Iterator",
                    f = !1,
                    d = t.prototype,
                    h = d[he] || d["@@iterator"] || o && d[o],
                    p = !de && h || a(o),
                    i = "Array" == e && d.entries || h;
                if (i && (t = ne(i.call(new t)), fe !== Object.prototype && t.next && (ne(t) !== fe && (ue ? ue(t, fe) : "function" != typeof t[he] && D(t, he, ie)), ae(t, u, !0))), o == pe && h && h.name !== pe && (f = !0, p = function () {
                    return h.call(this)
                }), d[he] !== p && D(d, he, p), Jt[e] = p, o)
                    if (c = {
                        values: a(pe),
                        keys: r ? p : a("keys"),
                        entries: a(ge)
                    }, s)
                        for (l in c) !de && !f && l in d || st(d, l, c[l]);
                    else tt({
                        target: e,
                        proto: !0,
                        forced: de || f
                    }, c);
                return c
            },
            be = "Array Iterator",
            ve = rt.set,
            me = rt.getterFor(be),
            ye = U(Array, "Array", function (t, e) {
                ve(this, {
                    type: be,
                    target: c(t),
                    index: 0,
                    kind: e
                })
            }, function () {
                var t = me(this),
                    e = t.target,
                    n = t.kind,
                    i = t.index++;
                return !e || i >= e.length ? {
                    value: t.target = void 0,
                    done: !0
                } : "keys" == n ? {
                    value: i,
                    done: !1
                } : "values" == n ? {
                    value: e[i],
                    done: !1
                } : {
                    value: [i, e[i]],
                    done: !1
                }
            }, "values");
        Jt.Arguments = Jt.Array, x("keys"), x("values"), x("entries");
        var xe = Object.assign,
            oe = !xe || b(function () {
                var t = {},
                    e = {},
                    n = Symbol(),
                    i = "abcdefghijklmnopqrst";
                return t[n] = 7, i.split("").forEach(function (t) {
                    e[t] = t
                }), 7 != xe({}, t)[n] || Vt(xe({}, e)).join("") != i
            }) ? function (t, e) {
                for (var n = nt(t), i = arguments.length, o = 1, r = mt.f, s = S.f; o < i;)
                    for (var a, c = $(arguments[o++]), l = r ? Vt(c).concat(r(c)) : Vt(c), u = l.length, f = 0; f < u;) a = l[f++], y && !s.call(c, a) || (n[a] = c[a]);
                return n
            } : xe;
        tt({
            target: "Object",
            stat: !0,
            forced: Object.assign !== oe
        }, {
            assign: oe
        });

        function we(t) {
            var e;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (t = function (t, e) {
                try {
                    return t[e]
                } catch (t) {
                }
            }(e = Object(t), Se)) ? t : Ee ? i(e) : "Object" == (t = i(e)) && "function" == typeof e.callee ? "Arguments" : t
        }

        var Se = it("toStringTag"),
            Ee = "Arguments" == i(function () {
                return arguments
            }()),
            x = {};
        x[it("toStringTag")] = "z";
        oe = "[object z]" !== String(x) ? function () {
            return "[object " + we(this) + "]"
        } : x.toString, x = Object.prototype;
        oe !== x.toString && st(x, "toString", oe, {
            unsafe: !0
        });
        var x = "\t\n\v\f\r                　\u2028\u2029\ufeff",
            oe = "[" + x + "]",
            Te = RegExp("^" + oe + oe + "*"),
            Ce = RegExp(oe + oe + "*$"),
            oe = function (e) {
                return function (t) {
                    t = String(O(t));
                    return 1 & e && (t = t.replace(Te, "")), t = 2 & e ? t.replace(Ce, "") : t
                }
            },
            $e = {
                start: oe(1),
                end: oe(2),
                trim: oe(3)
            }.trim,
            Oe = m.parseInt,
            ke = /^[+-]?0[Xx]/,
            oe = 8 !== Oe(x + "08") || 22 !== Oe(x + "0x16") ? function (t, e) {
                t = $e(String(t));
                return Oe(t, e >>> 0 || (ke.test(t) ? 16 : 10))
            } : Oe;
        tt({
            global: !0,
            forced: parseInt != oe
        }, {
            parseInt: oe
        });
        var x = function (r) {
                return function (t, e) {
                    var n, i = String(O(t)),
                        o = ut(e),
                        t = i.length;
                    return o < 0 || t <= o ? r ? "" : void 0 : (e = i.charCodeAt(o)) < 55296 || 56319 < e || o + 1 === t || (n = i.charCodeAt(o + 1)) < 56320 || 57343 < n ? r ? i.charAt(o) : e : r ? i.slice(o, o + 2) : n - 56320 + (e - 55296 << 10) + 65536
                }
            },
            oe = {
                codeAt: x(!1),
                charAt: x(!0)
            },
            Pe = oe.charAt,
            Ae = "String Iterator",
            Le = rt.set,
            Me = rt.getterFor(Ae);
        U(String, "String", function (t) {
            Le(this, {
                type: Ae,
                string: String(t),
                index: 0
            })
        }, function () {
            var t = Me(this),
                e = t.string,
                n = t.index;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (n = Pe(e, n), t.index += n.length, {
                value: n,
                done: !1
            })
        });

        function ze(t, e, n) {
            for (var i in e) st(t, i, e[i], n);
            return t
        }

        function _e(t, e, n) {
            if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return t
        }

        var Re = !b(function () {
                return Object.isExtensible(Object.preventExtensions({}))
            }),
            Ie = e(function (t) {
                function n(t) {
                    e(t, i, {
                        value: {
                            objectID: "O" + ++o,
                            weakData: {}
                        }
                    })
                }

                var e = j.f,
                    i = q("meta"),
                    o = 0,
                    r = Object.isExtensible || function () {
                        return !0
                    },
                    s = t.exports = {
                        REQUIRED: !1,
                        fastKey: function (t, e) {
                            if (!k(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                            if (!A(t, i)) {
                                if (!r(t)) return "F";
                                if (!e) return "E";
                                n(t)
                            }
                            return t[i].objectID
                        },
                        getWeakData: function (t, e) {
                            if (!A(t, i)) {
                                if (!r(t)) return !0;
                                if (!e) return !1;
                                n(t)
                            }
                            return t[i].weakData
                        },
                        onFreeze: function (t) {
                            return Re && s.REQUIRED && r(t) && !A(t, i) && n(t), t
                        }
                    };
                G[i] = !0
            }),
            Fe = (Ie.REQUIRED, Ie.fastKey, Ie.getWeakData, Ie.onFreeze, it("iterator")),
            je = Array.prototype,
            De = it("iterator"),
            Be = e(function (t) {
                function f(t, e) {
                    this.stopped = t, this.result = e
                }

                (t.exports = function (t, e, n, i, o) {
                    var r, s, a, c, l, u = et(e, n, i ? 2 : 1);
                    if (o) r = t;
                    else {
                        if ("function" != typeof (n = function (t) {
                            if (null != t) return t[De] || t["@@iterator"] || Jt[we(t)]
                        }(t))) throw TypeError("Target is not iterable");
                        if (void 0 !== (o = n) && (Jt.Array === o || je[Fe] === o)) {
                            for (s = 0, a = K(t.length); s < a; s++)
                                if ((c = i ? u(I(l = t[s])[0], l[1]) : u(t[s])) && c instanceof f) return c;
                            return new f(!1)
                        }
                        r = n.call(t)
                    }
                    for (; !(l = r.next()).done;)
                        if ((c = function (e, t, n, i) {
                            try {
                                return i ? t(I(n)[0], n[1]) : t(n)
                            } catch (t) {
                                n = e.return;
                                throw void 0 !== n && I(n.call(e)), t
                            }
                        }(r, u, l.value, i)) && c instanceof f) return c;
                    return new f(!1)
                }).stop = function (t) {
                    return new f(!0, t)
                }
            }),
            We = it("iterator"),
            Ne = !1;
        try {
            var He = 0,
                Ve = {
                    next: function () {
                        return {
                            done: !!He++
                        }
                    },
                    return: function () {
                        Ne = !0
                    }
                };
            Ve[We] = function () {
                return this
            }, Array.from(Ve, function () {
                throw 2
            })
        } catch (t) {
        }

        function Xe(s, t, e, a, i) {
            function n(t) {
                var n = d[t];
                st(d, t, "add" == t ? function (t) {
                    return n.call(this, 0 === t ? 0 : t), this
                } : "delete" == t ? function (t) {
                    return !(i && !k(t)) && n.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function (t) {
                    return i && !k(t) ? void 0 : n.call(this, 0 === t ? 0 : t)
                } : "has" == t ? function (t) {
                    return !(i && !k(t)) && n.call(this, 0 === t ? 0 : t)
                } : function (t, e) {
                    return n.call(this, 0 === t ? 0 : t, e), this
                })
            }

            var o, r, c, l, u, f = m[s],
                d = f && f.prototype,
                h = f,
                p = a ? "set" : "add",
                g = {};
            return Ct(s, "function" != typeof f || !(i || d.forEach && !b(function () {
                (new f).entries().next()
            }))) ? (h = e.getConstructor(t, s, a, p), Ie.REQUIRED = !0) : Ct(s, !0) && (r = (o = new h)[p](i ? {} : -0, 1) != o, c = b(function () {
                o.has(1)
            }), l = function (t, e) {
                if (!e && !Ne) return !1;
                var n = !1;
                try {
                    var i = {};
                    i[We] = function () {
                        return {
                            next: function () {
                                return {
                                    done: n = !0
                                }
                            }
                        }
                    }, t(i)
                } catch (t) {
                }
                return n
            }(function (t) {
                new f(t)
            }), u = !i && b(function () {
                for (var t = new f, e = 5; e--;) t[p](e, e);
                return !t.has(-0)
            }), l || (((h = t(function (t, e) {
                _e(t, h, s);
                var n, i, o, r,
                    n = (n = new f, i = t, t = h, ue && "function" == typeof (o = i.constructor) && o !== t && k(r = o.prototype) && r !== t.prototype && ue(n, r), n);
                return null != e && Be(e, n[p], n, a), n
            })).prototype = d).constructor = h), (c || u) && (n("delete"), n("has"), a && n("get")), (u || r) && n(p), i && d.clear && delete d.clear), g[s] = h, tt({
                global: !0,
                forced: h != f
            }, g), ae(h, s), i || e.setStrong(h, s, a), h
        }

        function qe(t) {
            return t.frozen || (t.frozen = new Ye)
        }

        function Ye() {
            this.entries = []
        }

        function Ue(t, e) {
            return Ke(t.entries, function (t) {
                return t[0] === e
            })
        }

        var Ge = Ie.getWeakData,
            Ze = rt.set,
            Qe = rt.getterFor,
            Ke = Z.find,
            Je = Z.findIndex,
            tn = 0;
        Ye.prototype = {
            get: function (t) {
                t = Ue(this, t);
                if (t) return t[1]
            },
            has: function (t) {
                return !!Ue(this, t)
            },
            set: function (t, e) {
                var n = Ue(this, t);
                n ? n[1] = e : this.entries.push([t, e])
            },
            delete: function (e) {
                var t = Je(this.entries, function (t) {
                    return t[0] === e
                });
                return ~t && this.entries.splice(t, 1), !!~t
            }
        };
        var en, nn = {
                getConstructor: function (t, n, i, o) {
                    function r(t, e, n) {
                        var i = a(t),
                            o = Ge(I(e), !0);
                        return !0 === o ? qe(i).set(e, n) : o[i.id] = n, t
                    }

                    var s = t(function (t, e) {
                            _e(t, s, n), Ze(t, {
                                type: n,
                                id: tn++,
                                frozen: void 0
                            }), null != e && Be(e, t[o], t, i)
                        }),
                        a = Qe(n);
                    return ze(s.prototype, {
                        delete: function (t) {
                            var e = a(this);
                            if (!k(t)) return !1;
                            var n = Ge(t);
                            return !0 === n ? qe(e).delete(t) : n && A(n, e.id) && delete n[e.id]
                        },
                        has: function (t) {
                            var e = a(this);
                            if (!k(t)) return !1;
                            var n = Ge(t);
                            return !0 === n ? qe(e).has(t) : n && A(n, e.id)
                        }
                    }), ze(s.prototype, i ? {
                        get: function (t) {
                            var e = a(this);
                            if (k(t)) {
                                var n = Ge(t);
                                return !0 === n ? qe(e).get(t) : n ? n[e.id] : void 0
                            }
                        },
                        set: function (t, e) {
                            return r(this, t, e)
                        }
                    } : {
                        add: function (t) {
                            return r(this, t, !0)
                        }
                    }), s
                }
            },
            on = (e(function (t) {
                function e(t) {
                    return function () {
                        return t(this, arguments.length ? arguments[0] : void 0)
                    }
                }

                var i, n, o, r, s, a = rt.enforce,
                    c = !m.ActiveXObject && "ActiveXObject" in m,
                    l = Object.isExtensible,
                    t = t.exports = Xe("WeakMap", e, nn, !0, !0);
                H && c && (i = nn.getConstructor(e, "WeakMap", !0), Ie.REQUIRED = !0, t = t.prototype, n = t.delete, o = t.has, r = t.get, s = t.set, ze(t, {
                    delete: function (t) {
                        if (!k(t) || l(t)) return n.call(this, t);
                        var e = a(this);
                        return e.frozen || (e.frozen = new i), n.call(this, t) || e.frozen.delete(t)
                    },
                    has: function (t) {
                        if (!k(t) || l(t)) return o.call(this, t);
                        var e = a(this);
                        return e.frozen || (e.frozen = new i), o.call(this, t) || e.frozen.has(t)
                    },
                    get: function (t) {
                        if (!k(t) || l(t)) return r.call(this, t);
                        var e = a(this);
                        return e.frozen || (e.frozen = new i), o.call(this, t) ? r.call(this, t) : e.frozen.get(t)
                    },
                    set: function (t, e) {
                        var n;
                        return k(t) && !l(t) ? ((n = a(this)).frozen || (n.frozen = new i), o.call(this, t) ? s.call(this, t, e) : n.frozen.set(t, e)) : s.call(this, t, e), this
                    }
                }))
            }), it("iterator")),
            rn = it("toStringTag"),
            sn = ye.values;
        for (en in Ft) {
            var an = m[en],
                cn = an && an.prototype;
            if (cn) {
                if (cn[on] !== sn) try {
                    D(cn, on, sn)
                } catch (t) {
                    cn[on] = sn
                }
                if (cn[rn] || D(cn, rn, en), Ft[en])
                    for (var ln in ye)
                        if (cn[ln] !== ye[ln]) try {
                            D(cn, ln, ye[ln])
                        } catch (t) {
                            cn[ln] = ye[ln]
                        }
            }
        }
        var un = "Expected a function",
            fn = NaN,
            dn = /^\s+|\s+$/g,
            hn = /^[-+]0x[0-9a-f]+$/i,
            pn = /^0b[01]+$/i,
            gn = /^0o[0-7]+$/i,
            bn = parseInt,
            Ve = "object" == typeof t && t && t.Object === Object && t,
            x = "object" == typeof self && self && self.Object === Object && self,
            vn = Ve || x || Function("return this")(),
            mn = Object.prototype.toString,
            yn = Math.max,
            xn = Math.min,
            wn = function () {
                return vn.Date.now()
            };

        function Sn(i, n, t) {
            var o, r, s, a, c, l, u = 0,
                f = !1,
                d = !1,
                e = !0;
            if ("function" != typeof i) throw new TypeError(un);

            function h(t) {
                var e = o,
                    n = r;
                return o = r = void 0, u = t, a = i.apply(n, e)
            }

            function p(t) {
                var e = t - l;
                return void 0 === l || n <= e || e < 0 || d && s <= t - u
            }

            function g() {
                var t, e = wn();
                if (p(e)) return b(e);
                c = setTimeout(g, (e = n - ((t = e) - l), d ? xn(e, s - (t - u)) : e))
            }

            function b(t) {
                return c = void 0, e && o ? h(t) : (o = r = void 0, a)
            }

            function v() {
                var t = wn(),
                    e = p(t);
                if (o = arguments, r = this, l = t, e) {
                    if (void 0 === c) return u = e = l, c = setTimeout(g, n), f ? h(e) : a;
                    if (d) return c = setTimeout(g, n), h(l)
                }
                return void 0 === c && (c = setTimeout(g, n)), a
            }

            return n = Tn(n) || 0, En(t) && (f = !!t.leading, d = "maxWait" in t, s = d ? yn(Tn(t.maxWait) || 0, n) : s, e = "trailing" in t ? !!t.trailing : e), v.cancel = function () {
                void 0 !== c && clearTimeout(c), o = l = r = c = void (u = 0)
            }, v.flush = function () {
                return void 0 === c ? a : b(wn())
            }, v
        }

        function En(t) {
            var e = typeof t;
            return t && ("object" == e || "function" == e)
        }

        function Tn(t) {
            if ("number" == typeof t) return t;
            if ("symbol" == typeof (e = t) || !!(n = e) && "object" == typeof n && "[object Symbol]" == mn.call(e)) return fn;
            var e, n;
            if ("string" != typeof (t = En(t) ? En(i = "function" == typeof t.valueOf ? t.valueOf() : t) ? i + "" : i : t)) return 0 === t ? t : +t;
            t = t.replace(dn, "");
            var i = pn.test(t);
            return i || gn.test(t) ? bn(t.slice(2), i ? 2 : 8) : hn.test(t) ? fn : +t
        }

        function Cn() {
            return _n.Date.now()
        }

        var $n = function (t, e, n) {
                var i = !0,
                    o = !0;
                if ("function" != typeof t) throw new TypeError(un);
                return En(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), Sn(t, e, {
                    leading: i,
                    maxWait: e,
                    trailing: o
                })
            },
            On = NaN,
            kn = "[object Symbol]",
            Pn = /^\s+|\s+$/g,
            An = /^[-+]0x[0-9a-f]+$/i,
            Ln = /^0b[01]+$/i,
            Mn = /^0o[0-7]+$/i,
            zn = parseInt,
            U = "object" == typeof t && t && t.Object === Object && t,
            Z = "object" == typeof self && self && self.Object === Object && self,
            _n = U || Z || Function("return this")(),
            Rn = Object.prototype.toString,
            In = Math.max,
            Fn = Math.min;

        function jn(t) {
            var e = typeof t;
            return t && ("object" == e || "function" == e)
        }

        function Dn(t) {
            if ("number" == typeof t) return t;
            if ("symbol" == typeof (e = t) || !!(n = e) && "object" == typeof n && Rn.call(e) == kn) return On;
            var e, n;
            if ("string" != typeof (t = jn(t) ? jn(i = "function" == typeof t.valueOf ? t.valueOf() : t) ? i + "" : i : t)) return 0 === t ? t : +t;
            t = t.replace(Pn, "");
            var i = Ln.test(t);
            return i || Mn.test(t) ? zn(t.slice(2), i ? 2 : 8) : An.test(t) ? On : +t
        }

        var Bn = function (i, n, t) {
                var o, r, s, a, c, l, u = 0,
                    f = !1,
                    d = !1,
                    e = !0;
                if ("function" != typeof i) throw new TypeError("Expected a function");

                function h(t) {
                    var e = o,
                        n = r;
                    return o = r = void 0, u = t, a = i.apply(n, e)
                }

                function p(t) {
                    var e = t - l;
                    return void 0 === l || n <= e || e < 0 || d && s <= t - u
                }

                function g() {
                    var t, e = Cn();
                    if (p(e)) return b(e);
                    c = setTimeout(g, (e = n - ((t = e) - l), d ? Fn(e, s - (t - u)) : e))
                }

                function b(t) {
                    return c = void 0, e && o ? h(t) : (o = r = void 0, a)
                }

                function v() {
                    var t = Cn(),
                        e = p(t);
                    if (o = arguments, r = this, l = t, e) {
                        if (void 0 === c) return u = e = l, c = setTimeout(g, n), f ? h(e) : a;
                        if (d) return c = setTimeout(g, n), h(l)
                    }
                    return void 0 === c && (c = setTimeout(g, n)), a
                }

                return n = Dn(n) || 0, jn(t) && (f = !!t.leading, d = "maxWait" in t, s = d ? In(Dn(t.maxWait) || 0, n) : s, e = "trailing" in t ? !!t.trailing : e), v.cancel = function () {
                    void 0 !== c && clearTimeout(c), o = l = r = c = void (u = 0)
                }, v.flush = function () {
                    return void 0 === c ? a : b(Cn())
                }, v
            },
            Wn = "__lodash_hash_undefined__",
            Nn = "[object Function]",
            Hn = "[object GeneratorFunction]",
            Vn = /^\[object .+?Constructor\]$/,
            Ve = "object" == typeof t && t && t.Object === Object && t,
            x = "object" == typeof self && self && self.Object === Object && self,
            U = Ve || x || Function("return this")();
        var Z = Array.prototype,
            t = Function.prototype,
            Ve = Object.prototype,
            x = U["__core-js_shared__"],
            Xn = (x = /[^.]+$/.exec(x && x.keys && x.keys.IE_PROTO || "")) ? "Symbol(src)_1." + x : "",
            qn = t.toString,
            Yn = Ve.hasOwnProperty,
            Un = Ve.toString,
            Gn = RegExp("^" + qn.call(Yn).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            Zn = Z.splice,
            Qn = ri(U, "Map"),
            Kn = ri(Object, "create");

        function Jn(t) {
            var e = -1,
                n = t ? t.length : 0;
            for (this.clear(); ++e < n;) {
                var i = t[e];
                this.set(i[0], i[1])
            }
        }

        function ti(t) {
            var e = -1,
                n = t ? t.length : 0;
            for (this.clear(); ++e < n;) {
                var i = t[e];
                this.set(i[0], i[1])
            }
        }

        function ei(t) {
            var e = -1,
                n = t ? t.length : 0;
            for (this.clear(); ++e < n;) {
                var i = t[e];
                this.set(i[0], i[1])
            }
        }

        function ni(t, e) {
            for (var n, i, o = t.length; o--;)
                if ((n = t[o][0]) === (i = e) || n != n && i != i) return o;
            return -1
        }

        function ii(t) {
            var e;
            return ai(t) && (e = t, !(Xn && Xn in e)) && (function (t) {
                t = ai(t) ? Un.call(t) : "";
                return t == Nn || t == Hn
            }(t) || function (t) {
                var e = !1;
                if (null != t && "function" != typeof t.toString) try {
                    e = !!(t + "")
                } catch (t) {
                }
                return e
            }(t) ? Gn : Vn).test(function (t) {
                if (null != t) {
                    try {
                        return qn.call(t)
                    } catch (t) {
                    }
                    try {
                        return t + ""
                    } catch (t) {
                    }
                }
                return ""
            }(t))
        }

        function oi(t, e) {
            var n, i = t.__data__;
            return ("string" == (t = typeof (n = e)) || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== n : null === n) ? i["string" == typeof e ? "string" : "hash"] : i.map
        }

        function ri(t, e) {
            e = e, e = null == (t = t) ? void 0 : t[e];
            return ii(e) ? e : void 0
        }

        function si(i, o) {
            if ("function" != typeof i || o && "function" != typeof o) throw new TypeError("Expected a function");

            function r() {
                var t = arguments,
                    e = o ? o.apply(this, t) : t[0],
                    n = r.cache;
                return n.has(e) ? n.get(e) : (t = i.apply(this, t), r.cache = n.set(e, t), t)
            }

            return r.cache = new (si.Cache || ei), r
        }

        function ai(t) {
            var e = typeof t;
            return t && ("object" == e || "function" == e)
        }

        Jn.prototype.clear = function () {
            this.__data__ = Kn ? Kn(null) : {}
        }, Jn.prototype.delete = function (t) {
            return this.has(t) && delete this.__data__[t]
        }, Jn.prototype.get = function (t) {
            var e = this.__data__;
            if (Kn) {
                var n = e[t];
                return n === Wn ? void 0 : n
            }
            return Yn.call(e, t) ? e[t] : void 0
        }, Jn.prototype.has = function (t) {
            var e = this.__data__;
            return Kn ? void 0 !== e[t] : Yn.call(e, t)
        }, Jn.prototype.set = function (t, e) {
            return this.__data__[t] = Kn && void 0 === e ? Wn : e, this
        }, ti.prototype.clear = function () {
            this.__data__ = []
        }, ti.prototype.delete = function (t) {
            var e = this.__data__;
            return !((t = ni(e, t)) < 0) && (t == e.length - 1 ? e.pop() : Zn.call(e, t, 1), !0)
        }, ti.prototype.get = function (t) {
            var e = this.__data__;
            return (t = ni(e, t)) < 0 ? void 0 : e[t][1]
        }, ti.prototype.has = function (t) {
            return -1 < ni(this.__data__, t)
        }, ti.prototype.set = function (t, e) {
            var n = this.__data__,
                i = ni(n, t);
            return i < 0 ? n.push([t, e]) : n[i][1] = e, this
        }, ei.prototype.clear = function () {
            this.__data__ = {
                hash: new Jn,
                map: new (Qn || ti),
                string: new Jn
            }
        }, ei.prototype.delete = function (t) {
            return oi(this, t).delete(t)
        }, ei.prototype.get = function (t) {
            return oi(this, t).get(t)
        }, ei.prototype.has = function (t) {
            return oi(this, t).has(t)
        }, ei.prototype.set = function (t, e) {
            return oi(this, t).set(t, e), this
        }, si.Cache = ei;
        var ci, li = si,
            ui = [],
            fi = "ResizeObserver loop completed with undelivered notifications.";
        (Z = ci = ci || {}).BORDER_BOX = "border-box", Z.CONTENT_BOX = "content-box", Z.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
        var di = function (t) {
                return Object.freeze(t)
            },
            hi = function (t, e) {
                this.inlineSize = t, this.blockSize = e, di(this)
            },
            pi = (gi.prototype.toJSON = function () {
                var t = this;
                return {
                    x: t.x,
                    y: t.y,
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    width: t.width,
                    height: t.height
                }
            }, gi.fromRect = function (t) {
                return new gi(t.x, t.y, t.width, t.height)
            }, gi);

        function gi(t, e, n, i) {
            return this.x = t, this.y = e, this.width = n, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, di(this)
        }

        function bi(t) {
            if (t instanceof Element) return 1;
            var e = null === (e = null === t || void 0 === t ? void 0 : t.ownerDocument) || void 0 === e ? void 0 : e.defaultView;
            return !!(e && t instanceof e.Element)
        }

        function vi(t, e) {
            if (void 0 === e && (e = !1), $i.has(t) && !e) return $i.get(t);
            if (Ti(t)) return $i.set(t, Mi), Mi;
            var n = getComputedStyle(t),
                i = Ei(t) && t.ownerSVGElement && t.getBBox(),
                o = !Pi && "border-box" === n.boxSizing,
                r = ki.test(n.writingMode || ""),
                s = !i && Oi.test(n.overflowY || ""),
                a = !i && Oi.test(n.overflowX || ""),
                c = i ? 0 : Ai(n.paddingTop),
                l = i ? 0 : Ai(n.paddingRight),
                u = i ? 0 : Ai(n.paddingBottom),
                f = i ? 0 : Ai(n.paddingLeft),
                d = i ? 0 : Ai(n.borderTopWidth),
                h = i ? 0 : Ai(n.borderRightWidth),
                e = i ? 0 : Ai(n.borderBottomWidth),
                l = f + l,
                u = c + u,
                h = (i ? 0 : Ai(n.borderLeftWidth)) + h,
                d = d + e,
                e = a ? t.offsetHeight - d - t.clientHeight : 0,
                a = s ? t.offsetWidth - h - t.clientWidth : 0,
                s = o ? l + h : 0,
                o = o ? u + d : 0,
                s = i ? i.width : Ai(n.width) - s - a,
                o = i ? i.height : Ai(n.height) - o - e,
                h = s + l + a + h,
                d = o + u + e + d,
                o = di({
                    devicePixelContentBoxSize: Li(Math.round(s * devicePixelRatio), Math.round(o * devicePixelRatio), r),
                    borderBoxSize: Li(h, d, r),
                    contentBoxSize: Li(s, o, r),
                    contentRect: new pi(f, c, s, o)
                });
            return $i.set(t, o), o
        }

        function mi(n) {
            ui.forEach(function (e) {
                e.activeTargets.splice(0, e.activeTargets.length), e.skippedTargets.splice(0, e.skippedTargets.length), e.observationTargets.forEach(function (t) {
                    t.isActive() && (Ri(t.target) > n ? e.activeTargets : e.skippedTargets).push(t)
                })
            })
        }

        function yi() {
            var t, e = 0;
            for (mi(e); ui.some(function (t) {
                return 0 < t.activeTargets.length
            });) e = function () {
                var o = 1 / 0,
                    e = [];
                ui.forEach(function (t) {
                    var i;
                    0 !== t.activeTargets.length && (i = [], t.activeTargets.forEach(function (t) {
                        var e = new _i(t.target),
                            n = Ri(t.target);
                        i.push(e), t.lastReportedSize = zi(t.target, t.observedBox), n < o && (o = n)
                    }), e.push(function () {
                        t.callback.call(t.observer, i, t.observer)
                    }), t.activeTargets.splice(0, t.activeTargets.length))
                });
                for (var t = 0, n = e; t < n.length; t++) (0, n[t])();
                return o
            }(), mi(e);
            return ui.some(function (t) {
                return 0 < t.skippedTargets.length
            }) && ("function" == typeof ErrorEvent ? t = new ErrorEvent("error", {
                message: fi
            }) : ((t = document.createEvent("Event")).initEvent("error", !1, !1), t.message = fi), window.dispatchEvent(t)), 0 < e
        }

        function xi(t) {
            var e, n, i;
            e = function () {
                requestAnimationFrame(t)
            }, Si || (n = 0, i = document.createTextNode(""), new MutationObserver(function () {
                return Fi()
            }).observe(i, {
                characterData: !0
            }), Si = function () {
                i.textContent = "" + (n ? n-- : n++)
            }), Ii.push(e), Si()
        }

        function wi(t) {
            return void 0 === t && (t = 0), Date.now() + t
        }

        var Si, Ei = function (t) {
                return t instanceof SVGElement && "getBBox" in t
            },
            Ti = function (t) {
                if (Ei(t)) {
                    var e = t.getBBox(),
                        n = e.width,
                        e = e.height;
                    return !n && !e
                }
                n = t.offsetWidth, e = t.offsetHeight;
                return !(n || e || t.getClientRects().length)
            },
            Ci = "undefined" != typeof window ? window : {},
            $i = new WeakMap,
            Oi = /auto|scroll/,
            ki = /^tb|vertical/,
            Pi = /msie|trident/i.test(Ci.navigator && Ci.navigator.userAgent),
            Ai = function (t) {
                return parseFloat(t || "0")
            },
            Li = function (t, e, n) {
                return void 0 === t && (t = 0), void 0 === e && (e = 0), new hi(((n = void 0 === n ? !1 : n) ? e : t) || 0, (n ? t : e) || 0)
            },
            Mi = di({
                devicePixelContentBoxSize: Li(),
                borderBoxSize: Li(),
                contentBoxSize: Li(),
                contentRect: new pi(0, 0, 0, 0)
            }),
            zi = function (t, e, n) {
                var n = vi(t, n),
                    i = n.borderBoxSize,
                    o = n.contentBoxSize,
                    r = n.devicePixelContentBoxSize;
                switch (e) {
                    case ci.DEVICE_PIXEL_CONTENT_BOX:
                        return r;
                    case ci.BORDER_BOX:
                        return i;
                    default:
                        return o
                }
            },
            _i = function (t) {
                var e = vi(t);
                this.target = t, this.contentRect = e.contentRect, this.borderBoxSize = di([e.borderBoxSize]), this.contentBoxSize = di([e.contentBoxSize]), this.devicePixelContentBoxSize = di([e.devicePixelContentBoxSize])
            },
            Ri = function (t) {
                if (Ti(t)) return 1 / 0;
                for (var e = 0, n = t.parentNode; n;) e += 1, n = n.parentNode;
                return e
            },
            Ii = [],
            Fi = function () {
                return Ii.splice(0).forEach(function (t) {
                    return t()
                })
            },
            ji = 0,
            Di = {
                attributes: !0,
                characterData: !0,
                childList: !0,
                subtree: !0
            },
            Bi = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
            Wi = !1;

        function Ni() {
            var t = this;
            this.stopped = !0, this.listener = function () {
                return t.schedule()
            }
        }

        function Hi(t) {
            !ji && 0 < t && Vi.start(), (ji += t) || Vi.stop()
        }

        var Vi = new (Ni.prototype.run = function (e) {
                var n, i = this;
                void 0 === e && (e = 250), Wi || (Wi = !0, n = wi(e), xi(function () {
                    var t = !1;
                    try {
                        t = yi()
                    } finally {
                        if (Wi = !1, e = n - wi(), !ji) return;
                        t ? i.run(1e3) : 0 < e ? i.run(e) : i.start()
                    }
                }))
            }, Ni.prototype.schedule = function () {
                this.stop(), this.run()
            }, Ni.prototype.observe = function () {
                function t() {
                    return e.observer && e.observer.observe(document.body, Di)
                }

                var e = this;
                document.body ? t() : Ci.addEventListener("DOMContentLoaded", t)
            }, Ni.prototype.start = function () {
                var e = this;
                this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Bi.forEach(function (t) {
                    return Ci.addEventListener(t, e.listener, !0)
                }))
            }, Ni.prototype.stop = function () {
                var e = this;
                this.stopped || (this.observer && this.observer.disconnect(), Bi.forEach(function (t) {
                    return Ci.removeEventListener(t, e.listener, !0)
                }), this.stopped = !0)
            }, Ni),
            Xi = (qi.prototype.isActive = function () {
                var t, e = zi(this.target, this.observedBox, !0);
                return t = this.target, Ei(t) || function (t) {
                    switch (t.tagName) {
                        case "INPUT":
                            if ("image" !== t.type) break;
                        case "VIDEO":
                        case "AUDIO":
                        case "EMBED":
                        case "OBJECT":
                        case "CANVAS":
                        case "IFRAME":
                        case "IMG":
                            return !0
                    }
                    return !1
                }(t) || "inline" !== getComputedStyle(t).display || (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize
            }, qi);

        function qi(t, e) {
            this.target = t, this.observedBox = e || ci.CONTENT_BOX, this.lastReportedSize = {
                inlineSize: 0,
                blockSize: 0
            }
        }

        function Yi(t, e) {
            for (var n = 0; n < t.length; n += 1)
                if (t[n].target === e) return n;
            return -1
        }

        var Ui = function (t, e) {
                this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = e
            },
            Gi = new WeakMap,
            Zi = (Qi.connect = function (t, e) {
                e = new Ui(t, e);
                Gi.set(t, e)
            }, Qi.observe = function (t, e, n) {
                var i = Gi.get(t),
                    t = 0 === i.observationTargets.length;
                Yi(i.observationTargets, e) < 0 && (t && ui.push(i), i.observationTargets.push(new Xi(e, n && n.box)), Hi(1), Vi.schedule())
            }, Qi.unobserve = function (t, e) {
                var n = Gi.get(t),
                    t = Yi(n.observationTargets, e),
                    e = 1 === n.observationTargets.length;
                0 <= t && (e && ui.splice(ui.indexOf(n), 1), n.observationTargets.splice(t, 1), Hi(-1))
            }, Qi.disconnect = function (e) {
                var n = this,
                    t = Gi.get(e);
                t.observationTargets.slice().forEach(function (t) {
                    return n.unobserve(e, t.target)
                }), t.activeTargets.splice(0, t.activeTargets.length)
            }, Qi);

        function Qi() {
        }

        var Ki = (Ji.prototype.observe = function (t, e) {
            if (0 === arguments.length) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
            if (!bi(t)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
            Zi.observe(this, t, e)
        }, Ji.prototype.unobserve = function (t) {
            if (0 === arguments.length) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
            if (!bi(t)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
            Zi.unobserve(this, t)
        }, Ji.prototype.disconnect = function () {
            Zi.disconnect(this)
        }, Ji.toString = function () {
            return "function ResizeObserver () { [polyfill code] }"
        }, Ji);

        function Ji(t) {
            if (0 === arguments.length) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
            if ("function" != typeof t) throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
            Zi.connect(this, t)
        }

        var U = function (l) {
                return function (t, e, n, i) {
                    Ot(e);
                    var o = nt(t),
                        r = $(o),
                        s = K(o.length),
                        a = l ? s - 1 : 0,
                        c = l ? -1 : 1;
                    if (n < 2)
                        for (; ;) {
                            if (a in r) {
                                i = r[a], a += c;
                                break
                            }
                            if (a += c, l ? a < 0 : s <= a) throw TypeError("Reduce of empty array with no initial value")
                        }
                    for (; l ? 0 <= a : a < s; a += c) a in r && (i = e(i, r[a], a, o));
                    return i
                }
            },
            to = {
                left: U(!1),
                right: U(!0)
            }.left;
        tt({
            target: "Array",
            proto: !0,
            forced: g("reduce")
        }, {
            reduce: function (t) {
                return to(this, t, arguments.length, 1 < arguments.length ? arguments[1] : void 0)
            }
        });
        var Z = j.f,
            U = Function.prototype,
            eo = U.toString,
            no = /^\s*function ([^ (]*)/;
        !y || "name" in U || Z(U, "name", {
            configurable: !0,
            get: function () {
                try {
                    return eo.call(this).match(no)[1]
                } catch (t) {
                    return ""
                }
            }
        });
        var io = RegExp.prototype.exec,
            oo = String.prototype.replace,
            g = io,
            ro = (Z = /a/, U = /b*/g, io.call(Z, "a"), io.call(U, "a"), 0 !== Z.lastIndex || 0 !== U.lastIndex),
            so = void 0 !== /()??/.exec("")[1],
            ao = g = ro || so ? function (t) {
                var e, n, i, o, r = this;
                return so && (n = new RegExp("^" + r.source + "$(?!\\s)", function () {
                    var t = I(this),
                        e = "";
                    return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
                }.call(r))), ro && (e = r.lastIndex), i = io.call(r, t), ro && i && (r.lastIndex = r.global ? i.index + i[0].length : e), so && i && 1 < i.length && oo.call(i[0], n, function () {
                    for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (i[o] = void 0)
                }), i
            } : g;
        tt({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== ao
        }, {
            exec: ao
        });

        function co(t, e, n) {
            return e + (n ? po(t, e).length : 1)
        }

        function lo(t, e) {
            var n = t.exec;
            if ("function" == typeof n) {
                n = n.call(t, e);
                if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null");
                return n
            }
            if ("RegExp" !== i(t)) throw TypeError("RegExp#exec called on incompatible receiver");
            return ao.call(t, e)
        }

        var uo = it("species"),
            fo = !b(function () {
                var t = /./;
                return t.exec = function () {
                    var t = [];
                    return t.groups = {
                        a: "7"
                    }, t
                }, "7" !== "".replace(t, "$<a>")
            }),
            ho = !b(function () {
                var t = /(?:)/,
                    e = t.exec;
                t.exec = function () {
                    return e.apply(this, arguments)
                };
                t = "ab".split(t);
                return 2 !== t.length || "a" !== t[0] || "b" !== t[1]
            }),
            g = function (n, t, e, i) {
                var r, o, s = it(n),
                    a = !b(function () {
                        var t = {};
                        return t[s] = function () {
                            return 7
                        }, 7 != "" [n](t)
                    }),
                    c = a && !b(function () {
                        var t = !1,
                            e = /a/;
                        return e.exec = function () {
                            return t = !0, null
                        }, "split" === n && (e.constructor = {}, e.constructor[uo] = function () {
                            return e
                        }), e[s](""), !t
                    });
                a && c && ("replace" !== n || fo) && ("split" !== n || ho) || (r = /./ [s], e = (c = e(s, "" [n], function (t, e, n, i, o) {
                    return e.exec === ao ? a && !o ? {
                        done: !0,
                        value: r.call(e, n, i)
                    } : {
                        done: !0,
                        value: t.call(n, e, i)
                    } : {
                        done: !1
                    }
                }))[0], o = c[1], st(String.prototype, n, e), st(RegExp.prototype, s, 2 == t ? function (t, e) {
                    return o.call(t, this, e)
                } : function (t) {
                    return o.call(t, this)
                }), i && D(RegExp.prototype[s], "sham", !0))
            },
            po = oe.charAt;
        g("match", 1, function (i, c, l) {
            return [function (t) {
                var e = O(this),
                    n = null == t ? void 0 : t[i];
                return void 0 !== n ? n.call(t, e) : new RegExp(t)[i](String(e))
            }, function (t) {
                var e = l(c, t, this);
                if (e.done) return e.value;
                var n = I(t),
                    i = String(this);
                if (!n.global) return lo(n, i);
                for (var o = n.unicode, r = [], s = n.lastIndex = 0; null !== (a = lo(n, i));) {
                    var a = String(a[0]);
                    "" === (r[s] = a) && (n.lastIndex = co(i, K(n.lastIndex), o)), s++
                }
                return 0 === s ? null : r
            }]
        });
        var go = Math.max,
            bo = Math.min,
            vo = Math.floor,
            mo = /\$([$&'`]|\d\d?|<[^>]*>)/g,
            yo = /\$([$&'`]|\d\d?)/g;
        g("replace", 2, function (o, x, w) {
            return [function (t, e) {
                var n = O(this),
                    i = null == t ? void 0 : t[o];
                return void 0 !== i ? i.call(t, n, e) : x.call(String(n), t, e)
            }, function (t, e) {
                var n = w(x, t, this, e);
                if (n.done) return n.value;
                var i = I(t),
                    o = String(this),
                    r = "function" == typeof e;
                r || (e = String(e));
                var s, a = i.global;
                a && (s = i.unicode, i.lastIndex = 0);
                for (var c = []; ;) {
                    if (null === (h = lo(i, o))) break;
                    if (c.push(h), !a) break;
                    "" === String(h[0]) && (i.lastIndex = co(o, K(i.lastIndex), s))
                }
                for (var l, u = "", f = 0, d = 0; d < c.length; d++) {
                    for (var h = c[d], p = String(h[0]), g = go(bo(ut(h.index), o.length), 0), b = [], v = 1; v < h.length; v++) b.push(void 0 === (l = h[v]) ? l : String(l));
                    var m, y = h.groups,
                        y = r ? (m = [p].concat(b, g, o), void 0 !== y && m.push(y), String(e.apply(void 0, m))) : function (r, s, a, c, l, t) {
                            var u = a + r.length,
                                f = c.length,
                                e = yo;
                            void 0 !== l && (l = nt(l), e = mo);
                            return x.call(t, e, function (t, e) {
                                var n;
                                switch (e.charAt(0)) {
                                    case "$":
                                        return "$";
                                    case "&":
                                        return r;
                                    case "`":
                                        return s.slice(0, a);
                                    case "'":
                                        return s.slice(u);
                                    case "<":
                                        n = l[e.slice(1, -1)];
                                        break;
                                    default:
                                        var i = +e;
                                        if (0 == i) return t;
                                        if (f < i) {
                                            var o = vo(i / 10);
                                            return 0 === o ? t : o <= f ? void 0 === c[o - 1] ? e.charAt(1) : c[o - 1] + e.charAt(1) : t
                                        }
                                        n = c[i - 1]
                                }
                                return void 0 === n ? "" : n
                            })
                        }(p, o, g, b, y, e);
                    f <= g && (u += o.slice(f, g) + y, f = g + p.length)
                }
                return u + o.slice(f)
            }]
        });

        function xo(t) {
            return Array.prototype.reduce.call(t, function (t, e) {
                var n = e.name.match(/data-simplebar-(.+)/);
                if (n) {
                    var i = n[1].replace(/\W+(.)/g, function (t, e) {
                        return e.toUpperCase()
                    });
                    switch (e.value) {
                        case "true":
                            t[i] = !0;
                            break;
                        case "false":
                            t[i] = !1;
                            break;
                        case void 0:
                            t[i] = !0;
                            break;
                        default:
                            t[i] = e.value
                    }
                }
                return t
            }, {})
        }

        function wo(t) {
            return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window
        }

        function So(t) {
            return t && t.ownerDocument ? t.ownerDocument : document
        }

        var Eo = null,
            To = null;

        function Co(t) {
            if (null === Eo) {
                var e = So(t);
                if (void 0 === e) return Eo = 0;
                var n = e.body,
                    t = e.createElement("div");
                t.classList.add("simplebar-hide-scrollbar"), n.appendChild(t);
                e = t.getBoundingClientRect().right;
                n.removeChild(t), Eo = e
            }
            return Eo
        }

        Bt && window.addEventListener("resize", function () {
            To !== window.devicePixelRatio && (To = window.devicePixelRatio, Eo = null)
        });
        var $o = function () {
            function a(t, e) {
                var s = this;
                this.onScroll = function () {
                    var t = wo(s.el);
                    s.scrollXTicking || (t.requestAnimationFrame(s.scrollX), s.scrollXTicking = !0), s.scrollYTicking || (t.requestAnimationFrame(s.scrollY), s.scrollYTicking = !0)
                }, this.scrollX = function () {
                    s.axis.x.isOverflowing && (s.showScrollbar("x"), s.positionScrollbar("x")), s.scrollXTicking = !1
                }, this.scrollY = function () {
                    s.axis.y.isOverflowing && (s.showScrollbar("y"), s.positionScrollbar("y")), s.scrollYTicking = !1
                }, this.onMouseEnter = function () {
                    s.showScrollbar("x"), s.showScrollbar("y")
                }, this.onMouseMove = function (t) {
                    s.mouseX = t.clientX, s.mouseY = t.clientY, (s.axis.x.isOverflowing || s.axis.x.forceVisible) && s.onMouseMoveForAxis("x"), (s.axis.y.isOverflowing || s.axis.y.forceVisible) && s.onMouseMoveForAxis("y")
                }, this.onMouseLeave = function () {
                    s.onMouseMove.cancel(), (s.axis.x.isOverflowing || s.axis.x.forceVisible) && s.onMouseLeaveForAxis("x"), (s.axis.y.isOverflowing || s.axis.y.forceVisible) && s.onMouseLeaveForAxis("y"), s.mouseX = -1, s.mouseY = -1
                }, this.onWindowResize = function () {
                    s.scrollbarWidth = s.getScrollbarWidth(), s.hideNativeScrollbar()
                }, this.hideScrollbars = function () {
                    s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect(), s.axis.y.track.rect = s.axis.y.track.el.getBoundingClientRect(), s.isWithinBounds(s.axis.y.track.rect) || (s.axis.y.scrollbar.el.classList.remove(s.classNames.visible), s.axis.y.isVisible = !1), s.isWithinBounds(s.axis.x.track.rect) || (s.axis.x.scrollbar.el.classList.remove(s.classNames.visible), s.axis.x.isVisible = !1)
                }, this.onPointerEvent = function (t) {
                    var e, n;
                    s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect(), s.axis.y.track.rect = s.axis.y.track.el.getBoundingClientRect(), (s.axis.x.isOverflowing || s.axis.x.forceVisible) && (e = s.isWithinBounds(s.axis.x.track.rect)), (s.axis.y.isOverflowing || s.axis.y.forceVisible) && (n = s.isWithinBounds(s.axis.y.track.rect)), (e || n) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && (s.axis.x.scrollbar.rect = s.axis.x.scrollbar.el.getBoundingClientRect(), s.isWithinBounds(s.axis.x.scrollbar.rect) ? s.onDragStart(t, "x") : s.onTrackClick(t, "x")), n && (s.axis.y.scrollbar.rect = s.axis.y.scrollbar.el.getBoundingClientRect(), s.isWithinBounds(s.axis.y.scrollbar.rect) ? s.onDragStart(t, "y") : s.onTrackClick(t, "y"))))
                }, this.drag = function (t) {
                    var e = s.axis[s.draggedAxis].track,
                        n = e.rect[s.axis[s.draggedAxis].sizeAttr],
                        i = s.axis[s.draggedAxis].scrollbar,
                        o = s.contentWrapperEl[s.axis[s.draggedAxis].scrollSizeAttr],
                        r = parseInt(s.elStyles[s.axis[s.draggedAxis].sizeAttr], 10);
                    t.preventDefault(), t.stopPropagation();
                    r = (("y" === s.draggedAxis ? t.pageY : t.pageX) - e.rect[s.axis[s.draggedAxis].offsetAttr] - s.axis[s.draggedAxis].dragOffset) / (n - i.size) * (o - r);
                    "x" === s.draggedAxis && (r = s.isRtl && a.getRtlHelpers().isRtlScrollbarInverted ? r - (n + i.size) : r, r = s.isRtl && a.getRtlHelpers().isRtlScrollingInverted ? -r : r), s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] = r
                }, this.onEndDrag = function (t) {
                    var e = So(s.el),
                        n = wo(s.el);
                    t.preventDefault(), t.stopPropagation(), s.el.classList.remove(s.classNames.dragging), e.removeEventListener("mousemove", s.drag, !0), e.removeEventListener("mouseup", s.onEndDrag, !0), s.removePreventClickId = n.setTimeout(function () {
                        e.removeEventListener("click", s.preventClick, !0), e.removeEventListener("dblclick", s.preventClick, !0), s.removePreventClickId = null
                    })
                }, this.preventClick = function (t) {
                    t.preventDefault(), t.stopPropagation()
                }, this.el = t, this.minScrollbarWidth = 20, this.options = Object.assign({}, a.defaultOptions, {}, e), this.classNames = Object.assign({}, a.defaultOptions.classNames, {}, this.options.classNames), this.axis = {
                    x: {
                        scrollOffsetAttr: "scrollLeft",
                        sizeAttr: "width",
                        scrollSizeAttr: "scrollWidth",
                        offsetSizeAttr: "offsetWidth",
                        offsetAttr: "left",
                        overflowAttr: "overflowX",
                        dragOffset: 0,
                        isOverflowing: !0,
                        isVisible: !1,
                        forceVisible: !1,
                        track: {},
                        scrollbar: {}
                    },
                    y: {
                        scrollOffsetAttr: "scrollTop",
                        sizeAttr: "height",
                        scrollSizeAttr: "scrollHeight",
                        offsetSizeAttr: "offsetHeight",
                        offsetAttr: "top",
                        overflowAttr: "overflowY",
                        dragOffset: 0,
                        isOverflowing: !0,
                        isVisible: !1,
                        forceVisible: !1,
                        track: {},
                        scrollbar: {}
                    }
                }, this.removePreventClickId = null, a.instances.has(this.el) || (this.recalculate = $n(this.recalculate.bind(this), 64), this.onMouseMove = $n(this.onMouseMove.bind(this), 64), this.hideScrollbars = Bn(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = Bn(this.onWindowResize.bind(this), 64, {
                    leading: !0
                }), a.getRtlHelpers = li(a.getRtlHelpers), this.init())
            }

            a.getRtlHelpers = function () {
                var t = document.createElement("div");
                t.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
                var e = t.firstElementChild;
                document.body.appendChild(e);
                var n = e.firstElementChild;
                e.scrollLeft = 0;
                var i = a.getOffset(e),
                    t = a.getOffset(n);
                e.scrollLeft = 999;
                n = a.getOffset(n);
                return {
                    isRtlScrollingInverted: i.left !== t.left && t.left - n.left != 0,
                    isRtlScrollbarInverted: i.left !== t.left
                }
            }, a.getOffset = function (t) {
                var e = t.getBoundingClientRect(),
                    n = So(t),
                    t = wo(t);
                return {
                    top: e.top + (t.pageYOffset || n.documentElement.scrollTop),
                    left: e.left + (t.pageXOffset || n.documentElement.scrollLeft)
                }
            };
            var t = a.prototype;
            return t.init = function () {
                a.instances.set(this.el, this), Bt && (this.initDOM(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners())
            }, t.initDOM = function () {
                var t, e, n = this;
                if (Array.prototype.filter.call(this.el.children, function (t) {
                    return t.classList.contains(n.classNames.wrapper)
                }).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
                else {
                    for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                    this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl)
                }
                this.axis.x.track.el && this.axis.y.track.el || (t = document.createElement("div"), e = document.createElement("div"), t.classList.add(this.classNames.track), e.classList.add(this.classNames.scrollbar), t.appendChild(e), this.axis.x.track.el = t.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = t.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)), this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init")
            }, t.initListeners = function () {
                var e = this,
                    t = wo(this.el);
                this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach(function (t) {
                    e.el.addEventListener(t, e.onPointerEvent, !0)
                }), ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                    e.el.addEventListener(t, e.onPointerEvent, {
                        capture: !0,
                        passive: !0
                    })
                }), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), t.addEventListener("resize", this.onWindowResize);
                var n = !1,
                    i = t.ResizeObserver || Ki;
                this.resizeObserver = new i(function () {
                    n && e.recalculate()
                }), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), t.requestAnimationFrame(function () {
                    n = !0
                }), this.mutationObserver = new t.MutationObserver(this.recalculate), this.mutationObserver.observe(this.contentEl, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0
                })
            }, t.recalculate = function () {
                var t = wo(this.el);
                this.elStyles = t.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction;
                var e = this.heightAutoObserverEl.offsetHeight <= 1,
                    n = this.heightAutoObserverEl.offsetWidth <= 1,
                    i = this.contentEl.offsetWidth,
                    o = this.contentWrapperEl.offsetWidth,
                    r = this.elStyles.overflowX,
                    s = this.elStyles.overflowY;
                this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
                var a = this.contentEl.scrollHeight,
                    t = this.contentEl.scrollWidth;
                this.contentWrapperEl.style.height = e ? "auto" : "100%", this.placeholderEl.style.width = n ? i + "px" : "auto", this.placeholderEl.style.height = a + "px";
                n = this.contentWrapperEl.offsetHeight;
                this.axis.x.isOverflowing = i < t, this.axis.y.isOverflowing = n < a, this.axis.x.isOverflowing = "hidden" !== r && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== s && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar();
                r = this.axis.x.isOverflowing ? this.scrollbarWidth : 0, s = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
                this.axis.x.isOverflowing = this.axis.x.isOverflowing && o - s < t, this.axis.y.isOverflowing = this.axis.y.isOverflowing && n - r < a, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y")
            }, t.getScrollbarSize = function (t) {
                if (!this.axis[t = void 0 === t ? "y" : t].isOverflowing) return 0;
                var e = this.contentEl[this.axis[t].scrollSizeAttr],
                    t = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                    t = Math.max(~~(t / e * t), this.options.scrollbarMinSize);
                return t = this.options.scrollbarMaxSize ? Math.min(t, this.options.scrollbarMaxSize) : t
            }, t.positionScrollbar = function (t) {
                var e, n, i, o, r;
                this.axis[t = void 0 === t ? "y" : t].isOverflowing && (e = this.contentWrapperEl[this.axis[t].scrollSizeAttr], n = this.axis[t].track.el[this.axis[t].offsetSizeAttr], r = parseInt(this.elStyles[this.axis[t].sizeAttr], 10), i = this.axis[t].scrollbar, o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr], o = "x" === t && this.isRtl && a.getRtlHelpers().isRtlScrollingInverted ? -o : o, r = ~~((n - i.size) * (o / (e - r))), r = "x" === t && this.isRtl && a.getRtlHelpers().isRtlScrollbarInverted ? r + (n - i.size) : r, i.el.style.transform = "x" === t ? "translate3d(" + r + "px, 0, 0)" : "translate3d(0, " + r + "px, 0)")
            }, t.toggleTrackVisibility = function (t) {
                var e = this.axis[t = void 0 === t ? "y" : t].track.el,
                    n = this.axis[t].scrollbar.el;
                this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden"), this.axis[t].isOverflowing ? n.style.display = "block" : n.style.display = "none"
            }, t.hideNativeScrollbar = function () {
                this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0
            }, t.onMouseMoveForAxis = function (t) {
                this.axis[t = void 0 === t ? "y" : t].track.rect = this.axis[t].track.el.getBoundingClientRect(), this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover)
            }, t.onMouseLeaveForAxis = function (t) {
                this.axis[t = void 0 === t ? "y" : t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)
            }, t.showScrollbar = function (t) {
                var e = this.axis[t = void 0 === t ? "y" : t].scrollbar.el;
                this.axis[t].isVisible || (e.classList.add(this.classNames.visible), this.axis[t].isVisible = !0), this.options.autoHide && this.hideScrollbars()
            }, t.onDragStart = function (t, e) {
                void 0 === e && (e = "y");
                var n = So(this.el),
                    i = wo(this.el),
                    o = this.axis[e].scrollbar,
                    t = "y" === e ? t.pageY : t.pageX;
                this.axis[e].dragOffset = t - o.rect[this.axis[e].offsetAttr], this.draggedAxis = e, this.el.classList.add(this.classNames.dragging), n.addEventListener("mousemove", this.drag, !0), n.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (n.addEventListener("click", this.preventClick, !0), n.addEventListener("dblclick", this.preventClick, !0)) : (i.clearTimeout(this.removePreventClickId), this.removePreventClickId = null)
            }, t.onTrackClick = function (t, n) {
                var i, e, o, r, s, a, c = this;
                void 0 === n && (n = "y"), this.options.clickOnTrack && (i = wo(this.el), this.axis[n].scrollbar.rect = this.axis[n].scrollbar.el.getBoundingClientRect(), e = this.axis[n].scrollbar.rect[this.axis[n].offsetAttr], o = parseInt(this.elStyles[this.axis[n].sizeAttr], 10), r = this.contentWrapperEl[this.axis[n].scrollOffsetAttr], s = ("y" === n ? this.mouseY - e : this.mouseX - e) < 0 ? -1 : 1, a = -1 === s ? r - o : r + o, function t() {
                    var e;
                    -1 === s ? a < r && (r -= c.options.clickOnTrackSpeed, c.contentWrapperEl.scrollTo(((e = {})[c.axis[n].offsetAttr] = r, e)), i.requestAnimationFrame(t)) : r < a && (r += c.options.clickOnTrackSpeed, c.contentWrapperEl.scrollTo(((e = {})[c.axis[n].offsetAttr] = r, e)), i.requestAnimationFrame(t))
                }())
            }, t.getContentElement = function () {
                return this.contentEl
            }, t.getScrollElement = function () {
                return this.contentWrapperEl
            }, t.getScrollbarWidth = function () {
                try {
                    return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : Co(this.el)
                } catch (t) {
                    return Co(this.el)
                }
            }, t.removeListeners = function () {
                var e = this,
                    t = wo(this.el);
                this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach(function (t) {
                    e.el.removeEventListener(t, e.onPointerEvent, !0)
                }), ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                    e.el.removeEventListener(t, e.onPointerEvent, {
                        capture: !0,
                        passive: !0
                    })
                }), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel()
            }, t.unMount = function () {
                this.removeListeners(), a.instances.delete(this.el)
            }, t.isWithinBounds = function (t) {
                return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height
            }, t.findChild = function (t, e) {
                var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
                return Array.prototype.filter.call(t.children, function (t) {
                    return n.call(t, e)
                })[0]
            }, a
        }();
        return $o.defaultOptions = {
            autoHide: !0,
            forceVisible: !1,
            clickOnTrack: !0,
            clickOnTrackSpeed: 40,
            classNames: {
                contentEl: "simplebar-content",
                contentWrapper: "simplebar-content-wrapper",
                offset: "simplebar-offset",
                mask: "simplebar-mask",
                wrapper: "simplebar-wrapper",
                placeholder: "simplebar-placeholder",
                scrollbar: "simplebar-scrollbar",
                track: "simplebar-track",
                heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
                heightAutoObserverEl: "simplebar-height-auto-observer",
                visible: "simplebar-visible",
                horizontal: "simplebar-horizontal",
                vertical: "simplebar-vertical",
                hover: "simplebar-hover",
                dragging: "simplebar-dragging"
            },
            scrollbarMinSize: 25,
            scrollbarMaxSize: 0,
            timeout: 1e3
        }, $o.instances = new WeakMap, $o.initDOMLoadedElements = function () {
            document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function (t) {
                "init" === t.getAttribute("data-simplebar") || $o.instances.has(t) || new $o(t, xo(t.attributes))
            })
        }, $o.removeObserver = function () {
            this.globalObserver.disconnect()
        }, $o.initHtmlApi = function () {
            this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver($o.handleMutations), this.globalObserver.observe(document, {
                childList: !0,
                subtree: !0
            })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
        }, $o.handleMutations = function (t) {
            t.forEach(function (t) {
                Array.prototype.forEach.call(t.addedNodes, function (t) {
                    1 === t.nodeType && (t.hasAttribute("data-simplebar") ? !$o.instances.has(t) && document.documentElement.contains(t) && new $o(t, xo(t.attributes)) : Array.prototype.forEach.call(t.querySelectorAll("[data-simplebar]"), function (t) {
                        "init" !== t.getAttribute("data-simplebar") && !$o.instances.has(t) && document.documentElement.contains(t) && new $o(t, xo(t.attributes))
                    }))
                }), Array.prototype.forEach.call(t.removedNodes, function (t) {
                    1 === t.nodeType && ("init" === t.getAttribute("data-simplebar") ? $o.instances.has(t) && !document.documentElement.contains(t) && $o.instances.get(t).unMount() : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), function (t) {
                        $o.instances.has(t) && !document.documentElement.contains(t) && $o.instances.get(t).unMount()
                    }))
                })
            })
        }, $o.getOptions = xo, Bt && $o.initHtmlApi(), $o
    }), $(function () {
    $(".teams__more").on("click", function (t) {
        t.preventDefault(), $(".teams__item:nth-child(n+7)").slideToggle()
    }),
        //$(".packages__btn").on("click", function () {
        //     $(".modal-overlay").fadeIn(), document.body.style.overflow = "hidden"
        //}),
        $(".modal__close").on("click", function () {
            $(".modal-overlay").fadeOut(), document.body.style.overflow = "auto"
        }), $(".hamburger, .menu__list-link").on("click", function () {
        $(".hamburger").toggleClass("active"),
            $(".menu").toggleClass("active")
    }), $(".menu").on("click", function (t) {


    });
    new Swiper(".swiper-cases", {
        loop: !1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            320: {
                navigation: !1,
                slidesPerView: 1.1,
                spaceBetween: 5
            },
            710: {
                spaceBetween: 5,
                slidesPerView: 1.25
            },
            768: {
                spaceBetween: 0,
                slidesPerView: 1,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            }
        }
    }), new Swiper(".swiper-rewiews", {
        loop: !0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            320: {
                navigation: !1,
                slidesPerView: 1.15,
                spaceBetween: 25
            },
            710: {
                spaceBetween: 25,
                slidesPerView: 1.25
            },
            993: {
                spaceBetween: 0,
                slidesPerView: 1,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            }
        }
    });
    $(window).width() <= 1200 && ($(".contacts__form-styled-1").text("SMM"), $(".contacts__form-styled-2").text("SЕО"), $(".contacts__form-styled-3").text("САЙТ")), $(".tab").on("click", function () {
        $(this).addClass("tab--active").siblings().removeClass("tab--active").closest(".tabs-wrapper").find(".tab-content").removeClass("tab-content--active").eq($(this).index()).addClass("tab-content--active")
    }), $(".accordion__item-text").hide(), $(".accordion__item-title").on("click", function () {
        $(this).hasClass("accordion__item-title--active") ? $(".accordion__item-title").removeClass("accordion__item-title--active").next().hide() : ($(".accordion__item-title").removeClass("accordion__item-title--active").next().hide(), $(this).addClass("accordion__item-title--active").next().show())
    })
});


//МОДАЛКА
$('.packages__btn').on('click', function (e) {
    e.preventDefault();
    var idBtn = $(this).data('id');
    var nodeModal = $('.modal-overlay[data-id="' + idBtn + '"]');
    nodeModal.data('id')
    nodeModal.fadeIn()

})


//МОДАЛКА
$('.packages__modal').on('click', function (e) {
    e.preventDefault();
    var nodeModal = $('.all-packages');
    nodeModal.fadeIn()

})

$('.modal__packages__btn').on('click', function (e) {
    e.preventDefault();
    var nodeModal = $('.all-packages');
    nodeModal.fadeOut()
    var idBtn = $(this).data('id');
    var nodeModal = $('.modal-overlay[data-id="' + idBtn + '"]');
    nodeModal.data('id')
    nodeModal.fadeIn()
})

$(".modal__close-packages").on("click", function () {
    $(".all-packages").fadeOut(), document.body.style.overflow = "auto"
});

$("#modal__success-close").on("click", function () {
    $(".modal__success").fadeOut(), document.body.style.overflow = "auto"
});

// Отправка формы
$('.modal__form').submit(function () {
    var str = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "/wp-content/themes/infotop/send-packages.php",
        data: str,
        success: function (msg) {
            if (msg == 'OK') {
                $(".modal__form")[0].reset();;
                //Открываем
                function modalOpen() {
                    $(".modal__success").fadeIn();
                }

                setTimeout(modalOpen, 1000);

                //Скрывает окно
                function modalClose() {
                    $('.modal-overlay').fadeOut(), document.body.style.overflow = "auto";
                }

                setTimeout(modalClose, 500);

            } else {
                result = msg;
            }
            html(result);
        }
    });
    return false;
});

// Отправка формы
$('.contacts__form').submit(function () {
    var str = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "/wp-content/themes/infotop/send.php",
        data: str,
        success: function (msg) {
            if (msg == 'OK') {
                $(".contacts__form")[0].reset();;
                //Открываем
                function modalOpen() {
                    $(".modal__success").fadeIn();
                }

                setTimeout(modalOpen, 700);

                //Скрывает окно
                function modalClose() {
                    $('.modal-overlay').fadeOut(), document.body.style.overflow = "auto";
                }

                setTimeout(modalClose, 500);
            } else {
                result = msg;
            }
            html(result);
        }
    });
    return false;
});

//Плавный скрол
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};



var $ = jQuery;
//Слайдер
var init = {
    arrows: false,
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 1,

};

$(function () {
    var win = $(window);
    var slider = $(".cases__work");
    win.on("load resize", function () {
        if (win.width() < 769) {
            slider.not(".slick-initialized").slick(init);
        } else if (slider.hasClass("slick-initialized")) {
            slider.slick("unslick");
        }
    });
});



function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = true;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = false;
    }
})();



