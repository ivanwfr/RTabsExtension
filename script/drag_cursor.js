/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ drag_cursor                                                              │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* eslint-disable      no-unused-vars    */         /* REQUIRED WHEN EMBEDDED */
/* globals window, document, console, setTimeout */ /* eslint-disable-line no-redeclare */

/* globals t_util, t_CURSOR_add_MOVE_LISTENER, t_CURSOR_del_MOVE_LISTENER */
/* globals CSS_NOT_MOVED_ENOUGH, CSS_MOVE_ON_COOLDOWN */
/* globals onDown_XY */
/* eslint-ensable      no-unused-vars    */         /* REQUIRED WHEN EMBEDDED */

/* exported drag_cursor, DRAG_CURSOR_JS_ID */

const DRAG_CURSOR_JS_ID       = "drag_cursor" ;
const DRAG_CURSOR_JS_TAG      = DRAG_CURSOR_JS_ID +" (220221:19h:37)";  /* eslint-disable-line no-unused-vars */
/*}}}*/
let drag_cursor  = (function() {
"use strict"; /* eslint-disable-line strict */

/*{{{*/
const CSS_DRAG_CURSOR_DIV_ONLOAD       = "onload";
const     DRAG_CURSOR_DIV_ONLOAD_DELAY =  1000;
let       drag_cursor_div;

/*
let       drag_cursor_count = 0;
*/
/*}}}*/
/*_ set_mouseUP_display_state  {{{*/
/*{{{*/
let mouseUP_display_state = true;

/*}}}*/
let set_mouseUP_display_state = function(state=true)
{
    mouseUP_display_state = state;

    if(state) show_drag_cursor();

    if(state) t_CURSOR_add_MOVE_LISTENER();
    else      t_CURSOR_del_MOVE_LISTENER();
};
/*}}}*/
let get_mouseUP_display_state = function() { return mouseUP_display_state; };
/*_ show_drag_cursor {{{*/
let show_drag_cursor = function()
{
/*{{{
console.log("%c show_drag_cursor", lfX[++drag_cursor_count % 10], "onMoveDXY:",onMoveDXY , "onDown_XY:",onDown_XY)
}}}*/
    if(!drag_cursor_div) {
        drag_cursor_div = document.createElement("DIV");

        drag_cursor_div.id                    =     "drag_cursor";
        drag_cursor_div.style.pointerEvents   =            "none";
        drag_cursor_div.style.position        =           "fixed";
        drag_cursor_div.style.margin          =             "0px";
        drag_cursor_div.style.padding         =            "16px";
        drag_cursor_div.style.backgroundColor =            "#FF0";
        drag_cursor_div.style.border          =  "3px solid #000";
        drag_cursor_div.style.borderRadius    = "1em 0em 1em 1em";
        drag_cursor_div.style.zIndex          =      "2147483647";
        drag_cursor_div.style.opacity         =             "0.5";

        document.documentElement.appendChild( drag_cursor_div );
    }
    if( drag_cursor_div.style.display != "block")
    {
        /* STANDALONE SPLITTER ACTIVATION {{{*/
        if(typeof dom_sentence_event != "undefined")
        {
            drag_cursor_div.classList.add( CSS_DRAG_CURSOR_DIV_ONLOAD );
            drag_cursor_div.style.left    = (window.innerWidth  / 2)+"px";
            drag_cursor_div.style.top     = (window.innerHeight / 2)+"px";

        }
        /*}}}*/
        drag_cursor_div.style.display  = "block";
    }
};
/*}}}*/
/*_ move_drag_cursor {{{*/
let move_drag_cursor = function(e)
{
    if(!drag_cursor_div                         ) return;
    if(!drag_cursor_div.style.display == "block") return;

    if(                  drag_cursor_div.classList.contains( CSS_DRAG_CURSOR_DIV_ONLOAD ))
        setTimeout(() => drag_cursor_div.classList.remove  ( CSS_DRAG_CURSOR_DIV_ONLOAD ), DRAG_CURSOR_DIV_ONLOAD_DELAY);

    let      xy = t_util.get_event_XY(e);
    let offset_x = drag_cursor_div.className
        ? drag_cursor_div.offsetWidth / 2
        : drag_cursor_div.offsetWidth;
    drag_cursor_div.style.left    = (xy.x - offset_x)+"px";
    drag_cursor_div.style.top     = (xy.y           )+"px";
};
/*}}}*/
let hide_drag_cursor                     = function() { if(drag_cursor_div) drag_cursor_div.style.display = "none"; };
let add_drag_cursor_CSS_NOT_MOVED_ENOUGH = function() { if(drag_cursor_div) drag_cursor_div.classList.add   (CSS_NOT_MOVED_ENOUGH); };
let del_drag_cursor_CSS_NOT_MOVED_ENOUGH = function() { if(drag_cursor_div) drag_cursor_div.classList.remove(CSS_NOT_MOVED_ENOUGH); };
let add_drag_cursor_CSS_MOVE_ON_COOLDOWN = function() { if(drag_cursor_div) drag_cursor_div.classList.add   (CSS_MOVE_ON_COOLDOWN); };
let del_drag_cursor_CSS_MOVE_ON_COOLDOWN = function() { if(drag_cursor_div) drag_cursor_div.classList.remove(CSS_MOVE_ON_COOLDOWN); };

/* EXPORT */
return { name : "drag_cursor"
    ,    set_mouseUP_display_state
    ,    get_mouseUP_display_state
    ,    show_drag_cursor
    ,    hide_drag_cursor
    ,    move_drag_cursor
    ,    add_drag_cursor_CSS_MOVE_ON_COOLDOWN
    ,    add_drag_cursor_CSS_NOT_MOVED_ENOUGH
    ,    del_drag_cursor_CSS_MOVE_ON_COOLDOWN
    ,    del_drag_cursor_CSS_NOT_MOVED_ENOUGH
};
}());
/*{{{
"┌─────────────────────────────────────────────────────────────────────────────┐
"│                                                                             │

:e             $RPROFILES/script/dom_tools.js
:e             $RPROFILES/script/stub/dom_sentence_event.js
:e             $RPROFILES/stylesheet/dom_host.css
"...           $RPROFILES/script/drag_cursor.js

"│                                                                             │
"└─────────────────────────────────────────────────────────────────────────────┘
}}}*/
