/*!
 *	Template Functions
 */
! function(e) {
    "use strict";
    e(window).load(function() {
        e(".page-loader").delay(350).fadeOut("slow")
    }), e(document).ready(function() {
        function t() {
            e(window).scrollTop() > 10 ? (n.addClass("header-small"), e(".header-fixed").removeClass("header-transparent")) : (n.removeClass("header-small"), e(".header-fixed").addClass("header-transparent"))
        }

        function a() {
            var e = document.createElement("p");
            e.style.width = "100%", e.style.height = "200px";
            var t = document.createElement("div");
            t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "200px", t.style.height = "150px", t.style.overflow = "hidden", t.appendChild(e), document.body.appendChild(t);
            var a = e.offsetWidth;
            t.style.overflow = "scroll";
            var o = e.offsetWidth;
            return a == o && (o = t.clientWidth), document.body.removeChild(t), a - o
        }

        function o() {
            e(".owl-controls .owl-page").append('<a class="item-link" href="#"/>');
            var t = e(".owl-controls .item-link");
            e.each(this.owl.userItems, function(a) {
                e(t[a]).css({
                    background: "url(" + e(this).find("img").attr("src") + ") center center no-repeat",
                    "-webkit-background-size": "cover",
                    "-moz-background-size": "cover",
                    "-o-background-size": "cover",
                    "background-size": "cover"
                }).click(function() {
                    return r.trigger("owl.goTo", a), !1
                })
            })
        }
        var i, n = e(".header");
        e(".module-hero");
        i = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t(), e(window).scroll(function() {
            t()
        }), e(".js-stick").stick_in_parent(), e(".nav-icon-toggle").on("click", function() {
            e(this).toggleClass("open")
        }), e(".onepage-nav").singlePageNav({
            currentClass: "active"
        }), e(document).on("click", ".main-nav.in", function(t) {
            e(t.target).is("a") && !e(t.target).parent().hasClass("has-submenu") && (e(this).collapse("hide"), e(".nav-icon-toggle").toggleClass("open"))
        }), e(".flexslider").flexslider({
            animation: "fade",
            prevText: '<i class="icon-arrow-left icons"></i>',
            nextText: '<i class="icon-arrow-right icons"></i>',
            before: function(t) {
                e(".hero-caption").fadeOut().animate({
                    top: "-80px"
                }, {
                    queue: !1,
                    easing: "swing",
                    duration: 700
                }), t.slides.eq(t.currentSlide).delay(500), t.slides.eq(t.animatingTo).delay(500)
            },
            after: function(t) {
                e(".hero-caption").fadeIn().animate({
                    top: "0"
                }, {
                    queue: !1,
                    easing: "swing",
                    duration: 700
                })
            },
            useCSS: !0
        });
        var s = e(".module-hero, .module, .module-sm, .module-xs, .background-side, .footer");
        s.each(function() {
            e(this).attr("data-background") && e(this).css("background-image", "url(" + e(this).attr("data-background") + ")")
        }), e("#open-cart, #cart-toggle").on("click", function() {
            return e("body").toggleClass("off-canvas-cart-open"), !1
        }), e(document).on("click", function(t) {
            var a = e(".off-canvas-cart");
            a.is(t.target) || 0 !== a.has(t.target).length || e("body").removeClass("off-canvas-cart-open")
        }), e(".off-canvas-cart-wrapper").css("margin-right", "-" + a() + "px"), e("#modal-search, .form-close-btn").on("click", function() {
            return e(".header-search-form").toggleClass("opened"), !1
        }), e(".parallax").jarallax({
            speed: .7
        }), e(".twitter-feed").each(function(t) {
            e(this).attr("id", "twitter-" + t);
            var a = e(this).data("twitter"),
                o = {
                    id: a,
                    domId: "twitter-" + t,
                    maxTweets: 2,
                    enableLinks: !0,
                    showPermalinks: !1
                };
            twitterFetcher.fetch(o)
        }), e(".product-slider .item").zoom();
        var r;
        r = e(".product-slider"), r.owlCarousel({
            navigation: !1,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: !0,
            afterInit: o,
            afterUpdate: o,
            touchDrag: !1,
            mouseDrag: !1
        }), e(".images-carousel").each(function() {
            e(this).owlCarousel(e.extend({
                stopOnHover: !0,
                navigation: !1,
                pagination: !0,
                autoPlay: 3e3,
                items: 5,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
            }, e(this).data("carousel-options")))
        }), e(".box-carousel").each(function() {
            e(this).owlCarousel(e.extend({
                stopOnHover: !0,
                navigation: !1,
                pagination: !0,
                autoPlay: 3e3,
                items: 3,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
            }, e(this).data("carousel-options")))
        }), e(".clients-carousel").each(function() {
            e(this).owlCarousel(e.extend({
                navigation: !1,
                pagination: !1,
                autoPlay: 3e3,
                items: 6,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
            }, e(this).data("carousel-options")))
        }), e(".image-slider").each(function() {
            e(this).owlCarousel(e.extend({
                stopOnHover: !0,
                navigation: !0,
                pagination: !0,
                autoPlay: 3e3,
                singleItem: !0,
                items: 1,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
            }, e(this).data("carousel-options")))
        }), e(".slider-testimonial").owlCarousel({
            paginationSpeed: 400,
            slideSpeed: 300,
            navigation: !0,
            pagination: !0,
            singleItem: !0,
            transitionStyle: "backSlide",
            navigationText: ['<i class="icon-arrow-left icons"></i>', '<i class="icon-arrow-right icons"></i>']
        });
        var l = e("#filters"),
            c = e("#works-grid"),
            d = "masonry";
        d = c.hasClass("works-grid-masonry") ? "masonry" : "fitRows", e("a", l).on("click", function() {
            var t = e(this).attr("data-filter");
            return e(".current", l).removeClass("current"), e(this).addClass("current"), c.isotope({
                filter: t
            }), !1
        }).scroll(), e(window).on("resize", function() {
            c.imagesLoaded(function() {
                c.isotope({
                    layoutMode: d,
                    itemSelector: ".work-item"
                })
            })
        }).resize(), e(window).on("resize", function() {
            setTimeout(function() {
                e(".post-masonry").masonry()
            }, 1e3)
        }).resize(), e(".progress-bar").each(function() {
            e(this).appear(function() {
                var t = e(this).attr("aria-valuenow");
                e(this).animate({
                    width: t + "%"
                }), e(this).parent(".progress").prev(".progress-title").find("span span").countTo({
                    from: 0,
                    to: t,
                    speed: 900,
                    refreshInterval: 30
                })
            })
        }), e(".counter-timer").each(function() {
            e(this).appear(function() {
                var t = e(this).attr("data-to");
                e(this).countTo({
                    from: 0,
                    to: t,
                    speed: 1500,
                    refreshInterval: 10,
                    formatter: function(e, t) {
                        return e = e.toFixed(t.decimals), e = e.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                })
            })
        }), e(".chart").each(function() {
            e(this).appear(function() {
                e(this).easyPieChart(e.extend({
                    barColor: "#222222",
                    trackColor: "#eeeeee",
                    scaleColor: !1,
                    lineCap: "square",
                    lineWidth: 3,
                    size: 180
                }, e(this).data("chart-options")))
            })
        }), e(".lightbox").magnificPopup({
            type: "image"
        }), e(".gallery").each(function() {
            e(this).magnificPopup({
                delegate: "a",
                type: "image",
                gallery: {
                    enabled: !0,
                    navigateByImgClick: !0,
                    preload: [0, 1]
                },
                image: {
                    titleSrc: "title",
                    tError: "The image could not be loaded."
                },
                zoom: {
                    enabled: !0,
                    duration: 300
                }
            })
        }), e(window).on("resize", function() {
            e(".gallery").imagesLoaded(function() {
                e(".gallery").isotope({
                    layoutMode: "fitRows",
                    itemSelector: ".gallery-item"
                })
            })
        }).resize(), e(".video-pop-up").magnificPopup({
            type: "iframe"
        }), e("body").fitVids();
        var f = new WOW({
            mobile: !1
        });
        f.init();
        var g = /\[[^(\]\[)]*\]/g,
            u = e("#map"),
            p = Math.max(e(window).width(), window.innerWidth) > 736;
        if (u.length > 0) {
            var h, m = u[0].getAttribute("data-addresses").match(g),
                y = u.data("info").match(g),
                v = u.data("icon"),
                w = u.data("zoom"),
                b = [];
            m.forEach(function(e, t) {
                var a = "{";
                if (a += '"latLng":' + e, 0 == t && (h = JSON.parse(e)), null != y && y[t]) {
                    var o = y[t].replace(/\[|\]/g, "");
                    a += ', "data":"' + o + '"'
                }
                a += "}", b.push(JSON.parse(a))
            });
            var T = {
                scrollwheel: !1,
                styles: [{
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        color: "#e9e9e9"
                    }, {
                        lightness: 17
                    }]
                }, {
                    featureType: "landscape",
                    elementType: "geometry",
                    stylers: [{
                        color: "#f5f5f5"
                    }, {
                        lightness: 20
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#ffffff"
                    }, {
                        lightness: 17
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#ffffff"
                    }, {
                        lightness: 29
                    }, {
                        weight: .2
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [{
                        color: "#ffffff"
                    }, {
                        lightness: 18
                    }]
                }, {
                    featureType: "road.local",
                    elementType: "geometry",
                    stylers: [{
                        color: "#ffffff"
                    }, {
                        lightness: 16
                    }]
                }, {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [{
                        color: "#f5f5f5"
                    }, {
                        lightness: 21
                    }]
                }, {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{
                        color: "#dedede"
                    }, {
                        lightness: 21
                    }]
                }, {
                    elementType: "labels.text.stroke",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#ffffff"
                    }, {
                        lightness: 16
                    }]
                }, {
                    elementType: "labels.text.fill",
                    stylers: [{
                        saturation: 36
                    }, {
                        color: "#333333"
                    }, {
                        lightness: 40
                    }]
                }, {
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{
                        color: "#f2f2f2"
                    }, {
                        lightness: 19
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#fefefe"
                    }, {
                        lightness: 20
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#fefefe"
                    }, {
                        lightness: 17
                    }, {
                        weight: 1.2
                    }]
                }]
            };
            T.center = h, T.zoom = w, T.draggable = p;
            var k = {};
            k.icon = v, u.gmap3({
                map: {
                    options: T
                },
                marker: {
                    values: b,
                    options: k,
                    events: {
                        click: function(t, a, o) {
                            if (o.data) {
                                var i = e(this).gmap3("get"),
                                    n = e(this).gmap3({
                                        get: {
                                            name: "infowindow"
                                        }
                                    });
                                n ? (n.open(i, t), n.setContent(o.data)) : e(this).gmap3({
                                    infowindow: {
                                        anchor: t,
                                        options: {
                                            content: o.data
                                        }
                                    }
                                })
                            }
                        }
                    }
                }
            })
        }
        e(function() {
            e('[data-toggle="tooltip"]').tooltip({
                trigger: "hover"
            })
        }), e(".smoothscroll").on("click", function(t) {
            var a = this.hash,
                o = e(a);
            e("html, body").stop().animate({
                scrollTop: o.offset().top - n.height()
            }, 600, "swing"), t.preventDefault()
        }), e('a[href="#top"]').on("click", function() {
            return e("html, body").animate({
                scrollTop: 0
            }, "slow"), !1
        });
        var x, C = document.body;
        window.addEventListener("scroll", function() {
            clearTimeout(x), C.classList.contains("disable-hover") || C.classList.add("disable-hover"), x = setTimeout(function() {
                C.classList.remove("disable-hover")
            }, 100)
        }, !1)
    })
}(jQuery);