/*Start of Hamburger*/
//Written by Manish Singh manish.singh@naukrigulf.com
var ua = navigator.userAgent,
    c = 0,
    scrollT = 0,
    isAndd = ~ua.indexOf("Android"),
    isiP = ~ua.indexOf("iPhone") || ~ua.indexOf("iPod"),
    isIpod = ua.match(/iPod/); //added for detecting ipod
//Hide Address Bar when content in bigger than device height
function hideAddress() {
    setTimeout(scrollTo, 0, 0, 1)
}

function setInnerH() {
    var innerH = document.documentElement.clientHeight;
    height = innerH + (isiP ? 60 : 0);
    $("body").css({
        "minHeight": height + "px"
    });
    $(".wrapper").css({
        "minHeight": height + "px"
    });
    $("#slp").css({
        "minHeight": height + "px"
    });
}

function chkInnerHt() {
    /Mobile/.test(navigator.userAgent) && !location.hash && setTimeout(function() {
        if (!pageYOffset) window.scrollTo(0, 1);
    }, 500);
}
var events = ['load', 'orientationchange', 'resize']
if (window.addEventListener) {
    window.addEventListener("load", function() {
        setInnerH(); /*hideAddress()*/
    }, false);
    //window.addEventListener("resize",function(){chkInnerHt()},false);
} else {
    window.attachEvent("onload", function() {
        setInnerH(); /*hideAddress()*/
    });
    //window.attachEvent("onresize",function(){chkInnerHt()});
}
//check Transform
function getTransform(b) {
    for (var c = ["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], a; a = c.shift();)
        if ("undefined" != typeof b.style[a]) return a;
    return !1
};

function listViewer(opner, mainWrp, ifFix, elm2open, reqWidth, dir) {
    //check if it is defined or not
    ifFix = ifFix && ifFix.length > 0 ? ifFix : false;
    reqWidth = reqWidth || elm2open.width();
    dir = dir || 'left';
    var opaLayer = null,
        chkTransf = getTransform(mainWrp[0]);
    if ($('#opaLayr').length <= 0) {
        opaLayer = $('<div>').attr('id', 'opaLayr');
        $('body').prepend(opaLayer);
    }
    opaLayer = $('#opaLayr');
    elm2open.removeClass('activeLayer');
    mainWrp.css(chkTransf, 'translateX(0px)');
    if (ifFix) {
        ifFix.css(chkTransf, 'translateX(0px)');
    }
    opaLayer.css({
        position: 'absolute',
        height: '0px',
        width: ((document.documentElement.clientWidth - reqWidth)) + 'px',
        top: '-100px'
    });
    opner[0].onmousedown = opner[0].onclick = function(event) {
        if (document.activeElement != undefined)
            document.activeElement.blur(); //focus handling for input   
        event.preventDefault();
        if (c > 0) return false;
        scrollT = document.body.scrollTop ? document.body.scrollTop : pageYOffset;
        c = 1;
        showListView(mainWrp, elm2open, reqWidth, dir, ifFix);
        opaLayer[0].onmousedown = opaLayer[0].ontouchstart = opaLayer[0].ontouchmove = opaLayer[0].mousemove = function(event) {
            clearTimeout;
            event.stopPropagation();
            showListView(mainWrp, elm2open, 0, dir, ifFix);
            event.preventDefault();
        }
        $('#navscroll').click(function() {
            showListView(mainWrp, elm2open, 0, dir, ifFix);
        })
        var o = $('.refOpt');
        if (o && o.length > 0) o.hide();
    }

}

function showListView(mainWrp, elm2open, reqWidth, dir, ifFix) {
    ifFix = ifFix && ifFix.length > 0 ? ifFix : false;
    var opaLayer = $('#opaLayr'),
        chkTransf = getTransform(mainWrp[0]),
        t;
    clearTimeout(t);
    if (reqWidth > 0) {
        elm2open.css({
            'height': '100%',
            'width': reqWidth + 'px'
        }).addClass('activeLayer');
        if (ifFix) {
            ifFix.css(chkTransf, dir == 'left' ? 'translateX(' + reqWidth + 'px)' : 'translateX(-' + reqWidth + 'px)');
        }
        mainWrp.css({
            'height': $('body').height() + 'px',
            width: window.innerWidth + 'px',
            'overflow': 'hidden'
        }).css(chkTransf, dir == 'left' ? 'translateX(' + reqWidth + 'px)' : 'translateX(-' + reqWidth + 'px)');
        elm2open.css({
            'height': '100%'
        });
        
        /*start by Ashish*/
    var body = document.body, html = document.documentElement;
    var heightDoc = Math.max( body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight );

        opaLayer.css({
            //height: window.innerHeight + 'px',
            height:heightDoc+'px',
            top: '0'
        });
        /*end by Ashish*/
        if (dir == 'left') {
            opaLayer.css({
                right: '0px'
            })
        } else {
            opaLayer.css({
                left: '0px'
            })
        }
    } else {
        if ('ontouchstart' in window) {
            if (ifFix) {
                if (isiP) {
                    setTimeout(function() {
                        ifFix.css(chkTransf, 'translateX(0px)')
                    }, 140)
                } else {
                    ifFix.css(chkTransf, 'translateX(0px)')
                }

            }
        } else {
            ifFix ? setTimeout(function() {
                ifFix.css(chkTransf, 'translateX(0px)')
            }, 198) : '';
        }
        opaLayer.css({
            height: '0px',
            top: '-100px'
        });
        mainWrp.css({
            'height': '',
            width: '',
            'overflow': ''
        }).css(chkTransf, 'translateX(0px)');

        if (dir == 'left') {
            opaLayer.css({
                right: ''
            });
            t = setTimeout(function() {
                elm2open.removeClass('activeLayer').css({
                    'height': ''
                });
            }, 150);
        } else {
            //elm2open.removeClass('activeLayer').css({'height':''});                              
            opaLayer.css({
                left: ''
            });
            if (isiP) {
                t = setTimeout(function() {
                    elm2open.removeClass('activeLayer').css({
                        'height': ''
                    });
                }, 10);
            } else {
                elm2open.removeClass('activeLayer').css({
                    'height': ''
                });
            }
        }

        c = 0; //window.scrollTo(0,scrollT);
        if (scrollT > 5) {
            setTimeout(function() {
                window.scrollTo(0, scrollT)
            }, 500)
        }
    }
}

/*End of Hamburger*/