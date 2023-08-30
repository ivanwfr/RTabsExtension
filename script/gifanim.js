/* gifanim */
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
"use strict"; /* eslint-disable-line strict */

/* globals console, document, window */
/* globals clearTimeout, setTimeout */
/* globals log */

/* exported GifAnim, DOM_GIFANIM_JS_TAG */

/* eslint-disable no-warning-comments */
/* eslint-disable dot-notation        */

const DOM_GIFANIM_JS_ID     = "dom_gifanim_js";
const DOM_GIFANIM_JS_TAG    =  DOM_GIFANIM_JS_ID+" (230809:15h:37)";
/*}}}*/
/*{{{*/
let LOG_THROTTLE_IMG_ONLOAD_DELAY = 2000;

const CSS_DEFERED         = "defered";
const CSS_HIDDEN          = "hidden";
/*}}}*/

let log_this = false;
/* dom_log {{{*/
/* eslint-disable no-unused-vars */

//log = log || console.log; /* eslint-disable-line no-global-assign */ /* eslint-disable-line no-native-reassign */

let lb0="", lb1="", lb2="", lb3="", lb4="", lb5="", lb6="", lb7="", lb8="", lb9="", lbX="";

let lf1 = "color:#964B00;";
let lf2 = "color:#FF0000;";
let lf3 = "color:#FFA500;";
let lf4 = "color:#FFFF00;";
let lf5 = "color:#9ACD32;";
let lf6 = "color:#6495ED;";
let lf7 = "color:#EE82EE;";
let lf8 = "color:#A0A0A0;";
let lf9 = "color:#FFFFFF;";
let lf0 = "color:#707070; background-color:#000000; font-weight:900;";
let lfX = [ lf0 ,lf1 ,lf2 ,lf3 ,lf4 ,lf5 ,lf6 ,lf7 ,lf8 ,lf9 ];

let lbb = "font-weight:900; font-size:150%; margin:0;";

let lbA="", lbB="", lbF="", lbS="";

let lbH  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0 1ex 1ex   0; padding:0 .5em 0 .5em; border-radius:1em 1em 1em 1em; background:linear-gradient(to bottom, #555 0%, #223 80%, #454 100%);";
let lbL  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0   0   0 1ex; padding:0 .5em 0 .5em; border-radius:1em   0   0 1em; background:linear-gradient(to   left, #333 0%           ,#445 100%);";
let lbR  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0 1ex   0   0; padding:0 .5em 0 .5em; border-radius:  0 1em 1em   0; background:linear-gradient(to  right, #333 0%           ,#544 100%);";
let lbC  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0   0   0   0; padding:0 .5em 0 .5em; border-radius:  0   0   0   0;";

let logBIG = function(msg) { console.log("%c"+msg, lbb); }; /* eslint-disable-line strict */
/* eslint-disable no-unused-vars */

/*}}}*/

/* ================== */
/* === GifAnim ====== */
/* ================== */
/*_ GifAnim {{{*/
let GifAnim = function()
{
"use strict";
/*{{{*/
const LOAD_NEXT_GIFANIM_INTERVAL = 1000;

const CANVAS_W = 180;
const CANVAS_H = 130;

const PLAY_CIRCLE_STYLE
    = {   "position"      : "absolute"
        , "top"           : "50%"
        , "left"          : "50%"
        , "width"         : "60px"
        , "height"        : "60px"
        , "margin-top"    : "-30px"
        , "margin-left"   : "-30px"
        , "border-radius" : "30px"
        , "background"    : "rgba(128,128,128, 0.5)"
    };

const PLAY_ICON_STYLE
    = {   "position"      : "absolute"
        , "top"           : "16px"
        , "left"          : "26px"
        , "width"         : "0"
        , "height"        : "0"
        , "border-top"    : "14px solid transparent"
        , "border-bottom" : "14px solid transparent"
        , "border-left"   : "14px solid rgba(0, 0, 0, 0.5)"
        , "padding"       : "0"
    };

const FULLSCREEN_CAPTION_STYLE
    = {   "position"      : "fixed"
        , "top"           : "0.5em"
        , "left"          : "0"
        , "width"         : "100%"
        , "opacity"       : "0.2"
        , "background"    : "transparent"
        , "color"         : "#000"
        , "text-shadow"   : "3px 3px 1px #FFF"
        , "font-size"     : "64px"
        , "font-weight"   : "900"
        , "text-align"    : "center"
    };
/*}}}*/

    /* ================== */
    /* === INIT ========= */
    /* ================== */
    /* gifAnim1_init {{{*/
    this.gifAnim1_init = function()
    {
if(log_this) logBIG("gifAnim1_init");
        /* add players {{{*/
        let gifanims = document.querySelectorAll(".gifanim");
        let players  = [];
        for(let i=0; i<gifanims.length; ++i)
        {
            let player = gifAnim2_add_img ( gifanims[i] );
            if( player ) players.push( player      );
            else         break;
        }
if(log_this) log("...players.length=["+players.length+"]");

        /*}}}*/
        /* add captions num {{{*/
        for(let i=0; i<players.length; ++i) {
            gifAnim2_add_caption_num(players[i], i+1, players.length);
        }
        /*}}}*/
        /* layout players {{{*/
        if( players.length ) gifAnim3_check_defered();
        else                 on3_no_canvas_unhide_gifanims();

        /*}}}*/
    };
    /*}}}*/
    /*_ gifAnim2_add_img .. (gifAnim2_img_onload canvas click) {{{*/
    let gifAnim2_add_img = function(img)
    {
if(log_this) log("%c gifAnim2_add_img("+img.outerHTML+")", lf5);
        /* data-gifanim {{{*/
        let gifanim_height = img.getAttribute("data-gifanim-height"  ) || CANVAS_H;
        let gifanim_width  = img.getAttribute("data-gifanim-width"   ) || CANVAS_W;
        let duration       = img.getAttribute("data-gifanim-duration");
        /*}}}*/
        /* canvas {{{*/
        let        canvas  = document.createElement("canvas");
//canvas = null; /* canvas support default check */
        if(!canvas || !canvas.getContext || !canvas.getContext("2d"))
        {
            return null;
        }
        /*}}}*/
        /*  player {{{*/
        let player         = gifAnim2_add_img_player(img, gifanim_width, gifanim_height);
        player.duration    = duration;
        img.player         = player;
        add_el_class(player, "player");

        /*}}}*/
        /* onload {{{*/
        img.style.display  = "none";

        img.onload         = function()
        {
            let delay = log_this ? LOG_THROTTLE_IMG_ONLOAD_DELAY : 0;
if(log_this) log("%c img.onload %c calling gifAnim2_img_onload %c in "+delay+"ms %c ["+(img.player ? img.player.title : img.src)+"]", lbH+lf3, lbL+lf3, lbC+lf3, lbR+lf8);
            setTimeout(
                       function() {
                           gifAnim2_img_onload();
                       }
                       , delay
                      );
        };

        /*}}}*/
        /*_ gifAnim2_img_onload {{{*/
        let gifAnim2_img_onload = function()
        {
if(log_this) log("gifAnim2_img_onload ["+img.src+"]");
            // add a new player {{{
            gifanim_width      = gifanim_width  || img.width;
            gifanim_height     = gifanim_height || img.height;
            if(!player) player = gifAnim2_add_img_player(img, gifanim_width, gifanim_height);
            player.src         = img.src;

            //}}}
            // replace [img] with player canvas .. (canvas.drawImage) .. removing one ".gifanim" {{{
            let wh              = get_player_wh(player, gifanim_width, gifanim_height, img.width, img.height);
            canvas.width        = CANVAS_W;//wh.w
            canvas.height       = CANVAS_H;//wh.h
            canvas.style.width  = "100%";
            canvas.style.height = "100%";

if(log_this) log("...wh.w=["+wh.w+"] .. wh.h=["+wh.h+"]");
            canvas.getContext("2d").drawImage(img, 0, 0, wh.w, wh.h);

            //}}}
            /* position player {{{*/
            player.appendChild(canvas);
            player.setAttribute(   "style"
                                   , "position   :    relative;"
                                   + "cursor     :     pointer;"
                                   + "width      : "+wh.w+ "px;"
                                   + "height     : "+wh.h+ "px;"
                                   + "background :        none;"
                                   + "border     :        none;"
                                   + "padding    :           0;"
                               );
            let g_h_percent = (gifanim_height.toString().indexOf("%") > 0);
            let g_w_percent = (gifanim_width.toString().indexOf("%") > 0);
            if     (g_w_percent && g_h_percent) { player.style.width = gifanim_width       ; player.style.height = gifanim_height        ; }
            else if(g_w_percent               ) { player.style.width = gifanim_width       ; player.style.height = "inherit"  ; }
            else if(g_h_percent               ) { player.style.width = "inherit" ; player.style.height = gifanim_height        ; }
            else                                { player.style.width = wh.w +"px"; player.style.height = wh.h + "px"; }

            /*}}}*/
            /* gifAnim2_player_onclick {{{*/

            player.onclick = gifAnim2_player_onclick;
            /*}}}*/
        };
        /*}}}*/
        /*_ gifAnim2_player_onclick {{{*/
        let gifAnim2_player_onclick = function(e)
        {
if(log_this) log("gifAnim2_player_onclick("+e.type+")");
if((typeof t_gutter_drag_hotspot_to_LAST_GUTTER_XY != "undefined")) t_gutter_drag_hotspot_to_LAST_GUTTER_XY(); /* eslint-disable-line no-undef */
            /* 1/2 - SHOW .. (fullscreen_div is empty) {{{*/
            if(!fullscreen_div || !fullscreen_div.firstElementChild)
            {
                /* remove currently animated img {{{*/
                if( img.parentNode )
                {
                    img.parentNode.removeChild( img );
                }
                /*}}}*/
                /* (re)start animation {{{*/
                img = document.createElement("IMG");
                img.setAttribute("data-uri", Math.floor(Math.random() * 100000) + 1);
                img.player = player;

                /* clear pending stop timeout {{{*/
                if(player.stop_timeout)
                {
                    clearTimeout( player.stop_timeout );
                    player.stop_timeout = null;
                }
                /*}}}*/

                gifAnim5_fullscreen_show_handler(e, img);

                setTimeout(function() {
                    img.display     = "block";
                    img.src         = player.src; // onclick .. show image
                }, 0);

                /*}}}*/
                /* schedule stop animation {{{*/
                if(parseInt( player.duration ) > 0)
                {
                    if(player.stop_timeout) clearTimeout( player.stop_timeout );
                    player   .stop_timeout =  setTimeout(gifAnim6_fullscreen_hide_handler, duration);
                }
                /*}}}*/
            }
            /*}}}*/
            /* 2/2 - HIDE .. (fullscreen_div is not empty) {{{*/
            else {
                gifAnim6_fullscreen_hide_handler();
            }
            /*}}}*/
        };
        /*}}}*/
        return player;
    };
    /*}}}*/
    /*_ gifAnim2_add_img_player {{{*/
    let gifAnim2_add_img_player = function(img, w, h) /* eslint-disable-line no-unused-vars */
    {
if(log_this) log("%c gifAnim2_add_img_player ["+img.src+"]", lf6);
        /* player symbol {{{*/
        let play_circle    = document.createElement("DIV");
        play_circle.setAttribute("class"    , "play_circle");
        play_circle.setAttribute("style"    , parseStyles( PLAY_CIRCLE_STYLE ));

        let     play_arrow = document.createElement("DIV");
        play_arrow.setAttribute("style", parseStyles( PLAY_ICON_STYLE   ));

        play_circle.appendChild( play_arrow );
        /*}}}*/
        /* player button {{{*/
        let player = document.createElement("BUTTON");
        player.setAttribute(       "style"
                                   ,  "position : relative;"
                                   +    "cursor : pointer;"
                                   +"background : none;"
                                   +    "border : none;"
                                   +   "padding : 0;"
                                   +   "width : "+CANVAS_W+";"
                                   +   "height: "+CANVAS_H+";"
                           );

        player.appendChild( play_circle );
        /*}}}*/
        /* replace image with player {{{*/
        player.img = img;
        img.player = player;

        img.parentNode.replaceChild(player, img);

         /*}}}*/
        /*_ gifAnim2_player_parentNode_onclick {{{*/
        let gifAnim2_player_parentNode_onclick = function()
        {
            /* PARK TOOLS {{{*/
            if((typeof t_gutter_drag_hotspot_to_LAST_GUTTER_XY != "undefined")) t_gutter_drag_hotspot_to_LAST_GUTTER_XY(); /* eslint-disable-line no-undef */

            /*}}}*/
            /* LOAD DEFERED PLAYER IMG {{{*/
            if(img.src_defered) {
if(log_this) log("...gifAnim2_player_parentNode_onclick %c LOADING DEFERED IMG ["+player.title+"]", lbb+lf4);
                gifAnim4_load_defered_parent_img(player.parentNode, img);
                gifAnim3_check_defered();
            }
            else {
if(log_this) log("...gifAnim2_player_parentNode_onclick %c DEFERED IMG ALREADY LOADED", lbb+lf8);
            }
            /*}}}*/
            /* remove handler once called .. (not required anymore) {{{*/
            player.parentNode.onclick = null;

            /*}}}*/
        };

        player.parentNode.onclick = gifAnim2_player_parentNode_onclick;
        /*}}}*/
        return player;
    };
    /*}}}*/
    /*_ gifAnim2_add_caption_num {{{*/
    let gifAnim2_add_caption_num = function(player, num, count)
    {
        let em         = player.parentElement.firstElementChild;
        em.innerHTML   = num+"<sup>/"+count+"</sup> "+em.innerText.trim();
        player.title   = em.innerText;
        player.caption = em.title;
    };
    /*}}}*/

    /* ================== */
    /* === LOAD IMG ===== */
    /* ================== */
    /*{{{*/
    const GIFANIM_SHOW_MIN  = 2;
    const GIFANIM_NEXT_MAX  = 6;

    let  gifAnim3_load_next_defered_timeout;
    /*}}}*/
    /*_ gifAnim3_check_defered {{{*/
    let gifAnim3_check_defered = function()
    {
        /* GET DEFERED .. (hidden / not hidden) {{{*/
if(log_this) log("%c gifAnim3_check_defered", lf7);
/*{{{
console.trace();
}}}*/
        let players            = document.querySelectorAll(".player");
        let gifanims           = [];

        let defered_not_hidden = [];
        let defered_hidden     = [];

        for(let i=0; i<players.length; ++i)
        {
            let player = players[i];
            if( player.img )
                gifanims.push(player.img);

            let defered_parent = player.parentElement;
            if(     has_el_class(defered_parent, CSS_DEFERED)) {
                if( has_el_class(defered_parent, CSS_HIDDEN )) defered_hidden    .push( defered_parent );
                else                                           defered_not_hidden.push( defered_parent );
            }
        }
        /*}}}*/
        /* NEXT MAX BUTTONS UNHIDE {{{*/
if(log_this) log("...defered_not_hidden.length=["+defered_not_hidden.length+"]");
if(log_this) log("...defered_hidden    .length=["+defered_hidden    .length+"]");

        while(   (defered_not_hidden.length < GIFANIM_NEXT_MAX)
              && (defered_hidden    .length > 0               )
        ) {
            let defered_parent = defered_hidden.shift();
            defered_not_hidden.push( defered_parent );

if(log_this) log("...UNHIDING ["+defered_parent.textContent+"]");

            del_el_class(defered_parent, CSS_HIDDEN);
        }
        /*}}}*/
        /* NEXT DEFERED PLAYER SHOW {{{*/
        let loaded_count = 0;
        for(let i=0; i < gifanims.length; ++i)
        {
            let              img = gifanims[i];
            loaded_count  += img.src_defered ? 0 : 1;
        }
        if(loaded_count < GIFANIM_SHOW_MIN)
        {
            for(let  i = 0; i < gifanims.length; ++i)
            {
                let img            = gifanims[i];
                let defered_parent = get_el_parent_with_class(img.player, CSS_DEFERED);
                if(!defered_parent) continue;

if(log_this) log("...SHOW #"+(i+1)+" ["+img.src_defered+"]");

                gifAnim4_load_defered_parent_img(defered_parent, img);
                setTimeout(gifAnim3_check_defered, 0);
                break;
            }
        }
        /*}}}*/
if(log_this) log(  "...GIFS ["+       gifanims.length           +"]"
             +".. LOADED ["+     loaded_count              +"]"
             +".. HIDDEN ["+     defered_hidden.length     +"]"
             +".. NOT HIDDEN ["+ defered_not_hidden.length +"]"
             +"");

    };
    /*}}}*/
    /*_ gifAnim3_load_next_defered {{{*/
    let gifAnim3_load_next_defered = function() /* eslint-disable-line no-unused-vars */
    {
        if(!gifAnim3_load_next_defered_timeout)
            gifAnim3_load_next_defered_timeout = setTimeout(function() { gifAnim3_load_next_defered_handler(); }, LOAD_NEXT_GIFANIM_INTERVAL);
    };
    let gifAnim3_load_next_defered_handler = function()
    {
if(log_this) log("gifAnim3_load_next_defered_handler");

        gifAnim3_load_next_defered_timeout = null;

        let players = document.querySelectorAll(".player");
        for(let  i = 0; i < players.length; ++i)
        {
            let player          = players[i];
            let defered_parent  = get_el_parent_with_class(player, CSS_DEFERED);
            if( defered_parent ) {
                gifAnim4_load_defered_parent_img(defered_parent, player.img);
                gifAnim3_check_defered();
                break;
            }
        }
    };
    /*}}}*/
    /*_ gifAnim4_load_defered_parent_img {{{*/
    let gifAnim4_load_defered_parent_img = function(defered_parent, img)
    {
if(log_this) log("gifAnim4_load_defered_parent_img");

        del_el_class(defered_parent, CSS_DEFERED);
        del_el_class(defered_parent, CSS_HIDDEN );

        img.src         = img.src_defered;  /* .. so that browser may load image */
        img.src_defered = "";               /* .. i.e. passed to browser already */
    };
    /*}}}*/

    /* ================== */
    /* === FULLSCREEN === */
    /* ================== */
    /*{{{*/
    const FULLSCREEN_PARK_DELAY = 1000;

    let fullscreen_div;
    let fullscreen_caption;
    /*}}}*/
    /*_ gifAnim5_fullscreen_show_handler .. (1) {{{*/
    let gifAnim5_fullscreen_show_count;
    let gifAnim5_fullscreen_show_handler = function(e, img)
    {
if(log_this) log("gifAnim5_fullscreen_show_handler("+e.type+", "+img+")");
        /* fullscreen_div busy {{{*/
        if(fullscreen_div && fullscreen_div.park_timeout)
        {
//console.warn("...gifAnim6_fullscreen_hide_handler in progress");

            return;
        }
        /*}}}*/
        /* fullscreen_div create {{{*/
        if(!fullscreen_div )
        {
            fullscreen_div         = document.createElement("DIV");
            fullscreen_div.id      = "fullscreen_div";
            fullscreen_div.onclick =  gifAnim6_fullscreen_hide_handler; /* HANDLER HAS TO BE DETECTED BY [get_el_mouse_event_handler] */
            document.body.appendChild(fullscreen_div);

            fullscreen_caption     = document.createElement("EM");
            fullscreen_caption.setAttribute("style", parseStyles( FULLSCREEN_CAPTION_STYLE ));
            document.body.appendChild(fullscreen_caption);
        }
        /*}}}*/
        /* fullscreen_div show {{{*/
    /*{{{
        fullscreen_div.style.left     = 0;
        fullscreen_div.style.top      = 0;
    }}}*/
        fullscreen_div.appendChild( img );

        let player = img.player;

        let xy = get_el_xy(player);
        xy.x  -= window.scrollX;
        xy.y  -= window.scrollY;

        fullscreen_div.style.position = "absolute";
        fullscreen_div.style.left     = xy.x               +"px";
        fullscreen_div.style.top      = xy.y               +"px";
        fullscreen_div.style.width    = player.offsetWidth +"px";
        fullscreen_div.style.height   = player.offsetHeight+"px";

        fullscreen_div.className      = "expanded";
        /*}}}*/
/*{{{*/
        gifAnim5_fullscreen_show_count = gifAnim5_fullscreen_show_count ? gifAnim5_fullscreen_show_count+1 : 1;
let count = gifAnim5_fullscreen_show_count % 10;
let digit = get_digit(player.title);

log("%c"+gifAnim5_fullscreen_show_count+"%c"+player.title +"%c"+(player.duration ? (" ("+(player.duration / 1000)+" sec)") : "")
            ,lbH+lfX[count]                     ,lbH+lfX[digit]    ,lbH);
/*}}}*/
        /* fullscreen_caption {{{*/
        fullscreen_caption.innerHTML     = player.caption || player.title;
        fullscreen_caption.style.display = "block";

        /*}}}*/
    };
    /*}}}*/
    /*_ gifAnim6_fullscreen_hide_handler .. (2) {{{*/
    let gifAnim6_fullscreen_hide_handler = function()
    {
if(log_this) log("gifAnim6_fullscreen_hide_handler");
/*{{{
if((typeof t_gutter_drag_hotspot_to_LAST_WINDOW_XY != "undefined")) t_gutter_drag_hotspot_to_LAST_WINDOW_XY();
}}}*/
        /* get img {{{*/
        let img = fullscreen_div.firstElementChild;
        if(!img )
        {
//console.warn("...gifAnim6_fullscreen_hide_handler already called");

            return;
        }
        /*}}}*/
        /* get player {{{*/
        let player = img.player;

        /*}}}*/
        /* hide img {{{*/
        fullscreen_div.removeChild( img );
        fullscreen_caption.style.display = "none";

        img.src       = "";
        /*}}}*/
        /* clear pending stop_timeout {{{*/
        if(player.stop_timeout) {
            clearTimeout( player.stop_timeout );
            player.stop_timeout = null;
        }
        /*}}}*/
        /* recenter on player {{{*/
        let xy = get_el_xy( player);

        let  w = player.offsetWidth;
        let  h = player.offsetHeight;

        fullscreen_div.style.position  = "absolute";
        fullscreen_div.style.left      = xy.x + w/2 +"px";
        fullscreen_div.style.top       = xy.y + h/2 +"px";
    /*{{{
        fullscreen_div.style.width     = w          +"px";
        fullscreen_div.style.height    = h          +"px";
        fullscreen_div.style.transform = "translate(-"+(w/2)+"px,-"+(h/2)+"px)";
    }}}*/
        /*}}}*/
        /* post gifAnim7_fullscreen_park_handler {{{*/
        fullscreen_div.className = "";

        fullscreen_div.park_timeout = setTimeout(gifAnim7_fullscreen_park_handler, FULLSCREEN_PARK_DELAY);
        /*}}}*/
    };
    /*}}}*/
    /*_ gifAnim7_fullscreen_park_handler .. (3) {{{*/
    let gifAnim7_fullscreen_park_handler = function()
    {
if(log_this) log("gifAnim7_fullscreen_park_handler");
        /* set collapsed {{{*/
        fullscreen_div.className    = "collapsed";

        fullscreen_div.park_timeout = null;
        /*}}}*/
    /*{{{
        del_el_class(document.body,"frozen");
    }}}*/
    };
    /*}}}*/

    /* ============ */
    /* === UTIL === */
    /* ============ */
    /*{{{*/
    /*_ console_dir {{{*/
    let console_dir = function(a1, a2=null) /* eslint-disable-line no-unused-vars */
    {
        let o   = (a2) ? a2 : a1;
        let msg = (a2) ? a1 : null;
        try {
            if( msg )
                log("%c"+msg, lbb+lbH);
            console.dir(o);
        } catch(ex) {}
    };
    /*}}}*/
    /*_ get_digit {{{*/
    let regexp_DIGIT = new RegExp("(\\d)");
    let get_digit = function(text)
    {
        regexp_DIGIT.lastIndex = 0;

        let matches = regexp_DIGIT.exec( text );

        let  result = (matches) ? matches[1] : "0";

//log("get_digit("+ text +"): "+ regexp_DIGIT +" .. return ["+result+"]");
        return result;
    };
    /*}}}*/
    /*_ log {{{*/
/*{{{
    let log = function()
    {
        let col_num = arguments[0].includes("%c") ?  0 :  get_digit(arguments[0]);
        if( col_num ) {
            let args = Array.prototype.slice.call(arguments);
            args[0]  = "%c"+args[0];
            args.push(lfX[ col_num ]);
            log.apply(console, args);
        }
        else {
            log.apply(console, Array.prototype.slice.call(arguments));
        }
    };
}}}*/
    /*}}}*/
    /*}}}*/
    /*_ classList {{{*/
    let has_el_class = function(el, className) { if(!el || !el.classList) return false; return el.classList.contains( className );                                   };
    let add_el_class = function(el, className) { if(!el || !el.classList) return      ; if(   !el.classList.contains( className )) el.classList.add   ( className ); };
    let del_el_class = function(el, className) { if(!el || !el.classList) return      ; if(    el.classList.contains( className )) el.classList.remove( className ); };
    /*}}}*/
    /*_ get_el_parent_with_class {{{*/
    let get_el_parent_with_class = function(el, className)
    {
        while(   el ) {
            if(  el.classList.contains( className )) return el;
            el = el.parentElement;
        }
        return null;
    };
    /*}}}*/
    /*_ get_el_xy {{{*/
    let get_el_xy = function(el)
    {
        if(!el) return null;

        let  x = 0;
        let  y = 0;

        if( el.style.position == "fixed")
        {
            x   = el.offsetLeft;
            y   = el.offsetTop ;
        }
        else {
            while(el) {
                x  += el.offsetLeft;
                y  += el.offsetTop ;
                el  = el.offsetParent;
            }
        }
        return { x,y };
    };
    /*}}}*/
    /*_ get_player_wh {{{*/
    let get_player_wh = function(el, w, h, img_W, img_H)
    {
        let img_ratio = img_W / img_H;

        if(w.toString().indexOf("%") > 0)
        {
            w = parseInt(w.toString().replace("%", ""));
            w = (w / 100) * el.parentNode.offsetWidth;
            h =  w / img_ratio;
        }
        else if (h.toString().indexOf("%") > 0)
        {
            h = parseInt(h.toString().replace("%", ""));
            h = (h / 100) * el.parentNode.offsetWidth;
            w =  h * img_ratio;
        }
        return { w,h };
    };
    /*}}}*/
    /*_ parseStyles {{{*/
    let parseStyles = function(styles)
    {
        let stylesStr = "";
        for(let prop in styles)                             /* eslint-disable-line guard-for-in */
            stylesStr += prop + ":" + styles[prop] + ";";
        return stylesStr;
    };
    /*}}}*/

    return this;
};
/*}}}*/

/* ============ */
/* === UTIL === */
/* ============ */
/*_ log_img_complete {{{*/
let log_img_complete = function()
{
"use strict";
    let gifanims = document.querySelectorAll(".gifanim");
    for(let i=0; i<gifanims.length; ++i)
    {
        let img =  gifanims[i];
if(log_this) log("onLOAD: img.complete=["+img.complete+"] src=["+img.src+"] src_defered=["+img.src_defered+"]");
    }
};
/*}}}*/

/* =================== */
/* === IMG PRELOAD === */
/* =================== */
/*  on1_document_onDOMContentLoaded_defer_gifanim {{{*/
let on1_document_onDOMContentLoaded_defer_gifanim = function()
{
"use strict";
let caller = "on1_document_onDOMContentLoaded_defer_gifanim";
    /* [dom_log] {{{*/
    /* eslint-disable no-undef */
    if(typeof dom_log != "undefined")
    {
        ({ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX } = dom_log.LOG_BG_CSS);
        ({ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX } = dom_log.LOG_FG_CSS);
        ({ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb           } = dom_log.LOG_XX_CSS);

({ logBIG } = dom_log);
logBIG(DOM_GIFANIM_JS_ID+": [dom_log]", 3);
    }
    /* eslint-enable  no-undef */
    /*}}}*/
if(log_this) logBIG(caller, 1);

    let gifanims = document.querySelectorAll(".gifanim");
    for(let i=0; i<gifanims.length; ++i)
    {
        let img =  gifanims[i];
        /* save image src .. (to be loaded later) */
/*{{{
        img.src_defered    = img.src || img.src_defered;
}}}*/
        img.src_defered    = img.src || img.getAttribute("data-src");
        img.src            =      "";
        img.style.display  = "none";

if(log_this) log("...img.complete=["+img.complete+"] ➔ img.src_defered=["+img.src_defered+"]");

        /* hide image container */
        let defered_parent = img.parentElement;
        defered_parent.classList.add(CSS_DEFERED);
        defered_parent.classList.add(CSS_HIDDEN );
    }
};
/*}}}*/
/*  on2_window_onload_GifAnim_init {{{*/
let on2_window_onload_GifAnim_init = function()
{
"use strict";
if(log_this) log("%c on2_window_onload_GifAnim_init", lbb+lbH+lf2);

    if(log_this) log_img_complete();

    let myGifAnim = new GifAnim();
    myGifAnim.gifAnim1_init();

console.warn("● setting youtube_player.src ● may issue Permissions-Policy warning message ●");
    let youtube_player = document.getElementById("youtube_player");
    youtube_player.src = youtube_player.src || youtube_player.getAttribute("data-src");

};
/*}}}*/
/*  on3_no_canvas_unhide_gifanims {{{*/
let on3_no_canvas_unhide_gifanims = function()
{
"use strict";
if(log_this) log("%c on3_no_canvas_unhide_gifanims", lbb+lbH+lf3);

    let gifanims = document.querySelectorAll(".gifanim");
    for(let i=0; i<gifanims.length; ++i)
    {
        let img =  gifanims[i];

        /* save image src */
        img.src    = img.src_defered    ;   /* .. so that browser may load image now */
        img.style.visibility = "visible";   /* .. stylesheet/index .gifanims */
        img.style.display    = "inline-block";

        /* hide image container */
        let defered_parent = img.parentElement;
        defered_parent.classList.remove(CSS_DEFERED);
        defered_parent.classList.remove(CSS_HIDDEN );
    }
};
/*}}}*/

document.addEventListener("DOMContentLoaded", on1_document_onDOMContentLoaded_defer_gifanim);
window  .addEventListener("load"            , on2_window_onload_GifAnim_init  );

/*
:!start explorer "file:///C:/LOCAL/STORE/DEV/PROJECTS/RTabs/Util/RTabs_Profiles/DEV/screenshots.html"
*/
