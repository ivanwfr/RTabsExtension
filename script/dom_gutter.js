/* dom_gutter_js */
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* globals window, document, localStorage */
/* globals dom_data, dom_log, dom_util, dom_store, dom_tools */

/* exported dom_gutter, DOM_GUTTER_JS_TAG */

/* eslint-disable complexity     */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable max-depth */
/* eslint-disable no-warning-comments */

const DOM_GUTTER_JS_ID      = "dom_gutter_js";
const DOM_GUTTER_JS_TAG     = DOM_GUTTER_JS_ID  +" (230706:20h:47)";
/*}}}*/
let dom_gutter  = (function() {
"use strict";
let   DOM_GUTTER_LOG        = false;
let   DOM_GUTTER_TAG        = false;

/* IMPORT */
/*{{{*/
/* eslint-disable no-unused-vars */
/*➔ t_gutter_IMPORT {{{*/
/*{{{*/
/*....................................*/
let t_data     = {}        ;    /* 05 */
let t_log      = {}        ;    /* 06 */
let t_util     = {}        ;    /* 07 */
/*  t_i18n     = {}        ; */ /* 08 */
/*  t_prop     = {}        ; */ /* 09 */
/*  t_store    = {}        ; */ /* 10 */
/*  t_fly      = {}        ; */ /* 11 */
/* ...................................*/
/*  t_wording  = {}        ; */ /* 12 */
/*  t_select   = {}        ; */ /* 13 */
/*  t_slot     = {}        ; */ /* 14 */
/* ...................................*/
/*  t_hide     = {}        ; */ /* 15 */
/*  t_view     = {}        ; */ /* 16 */
/*  t_sticky   = {}        ; */ /* 17 */
/*  t_seek     = {}        ; */ /* 18 */
/*  t_share    = {}        ; */ /* 19 */
/* ...................................*/
/*  t_grid     = {}        ; */ /* 20 */
/*  t_gutter   = {}        ; */ /* 21 */
/* ...................................*/
/*  t_ipc      = {}        ; */ /* 22 */
let t_tools    = {}        ;    /* 23 */
/*....................................*/
/*}}}*/
let t_gutter_IMPORT  = function(log_this)
{
/*{{{*/
/* ...................................*/
    t_data    = dom_data   ;    /* 05 */
    t_log     = dom_log    ;    /* 06 */
    t_util    = dom_util   ;    /* 07 */
/*  t_i18n    = dom_i18n   ; */ /* 08 */
/*  t_prop    = dom_prop   ; */ /* 09 */
/*  t_store   = dom_store  ; */ /* 10 */
/*  t_fly     = dom_fly    ; */ /* 11 */
/* ...................................*/
/*  t_wording = dom_wording; */ /* 12 */
/*  t_select  = dom_select ; */ /* 13 */
/*  t_wot     = dom_wot    ; */ /* 13 */
/*  t_slot    = dom_slot   ; */ /* 14 */
/* ...................................*/
/*  t_hide    = dom_hide   ; */ /* 15 */
/*  t_view    = dom_view   ; */ /* 16 */
/*  t_sticky  = dom_sticky ; */ /* 17 */
/*  t_seek    = dom_seek   ; */ /* 18 */
/*  t_share   = dom_share  ; */ /* 19 */
/* ...................................*/
/*  t_grid    = dom_grid   ; */ /* 20 */
/*  t_gutter  = dom_gutter ; */ /* 21 */
/* ...................................*/
/*  t_ipc     = dom_ipc    ; */ /* 22 */
    t_tools   = dom_tools  ;    /* 23 */
/* ...................................*/
/*}}}*/
    gutter_INTERN();
    /* MODULE LOGGING TAGGING {{{*/
    DOM_GUTTER_LOG = DOM_GUTTER_LOG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_GUTTER_LOG"));
    DOM_GUTTER_TAG = DOM_GUTTER_TAG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_GUTTER_TAG"));

    /*}}}*/
if(log_this) log("%c 20 gutter", lbH+lf0);
};
/*}}}*/
/*_   gutter_INTERN {{{*/
/*{{{*/

/* t_log */
let LOG_MAP;
let lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;
let log, logBIG, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;

/*}}}*/
let   gutter_INTERN = function()
{
    /* t_log {{{*/
    LOG_MAP = t_log.LOG_MAP;

    ({ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX } = t_log.LOG_BG_CSS);
    ({ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX } = t_log.LOG_FG_CSS);
    ({ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb           } = t_log.LOG_XX_CSS);

    log                 = t_log.log;
    logBIG              = t_log.logBIG;
    logXXX              = t_log.logXXX;
    log_caller          = t_log.log_caller;
    log_json_one_liner  = t_log.log_json_one_liner;
    log_key_val         = t_log.log_key_val;
    log_key_val_group   = t_log.log_key_val_group;
    /*}}}*/
};
/*}}}*/
/*_ localStorage {{{*/

let localStorage_setItem = function(key,val) {          try { if(val)  localStorage.setItem   (key,val); else localStorage.removeItem(key); } catch(ex) {} };
let localStorage_getItem = function(key    ) { let val; try {    val = localStorage.getItem   (key    );                                    } catch(ex) {} return val; };
let localStorage_delItem = function(key    ) {          try { /*...*/  localStorage.removeItem(key    );                                    } catch(ex) {} };

/*}}}*/
/* eslint-enable  no-unused-vars */
/*}}}*/

/* MEMBERS */
/*{{{*/
let vp                     = { top:0 , left:0 , right:0 , bottom:0 , margin:0 };
let hotspot_last_WINDOW_XY = { x:0, y:0 };
let hotspot_last_GUTTER_XY = { x:0, y:0 };

/*}}}*/

/* VIEWPORT */
/*  layout_has_CHANGED {{{*/
let layout_has_CHANGED = function(_vp, margin)
{
/*{{{*/
let caller = "layout_has_CHANGED";
let log_this = DOM_GUTTER_LOG || LOG_MAP.EV2_MOVE;

/*}}}*/

    vp.top    = _vp.top    + margin;
    vp.left   = _vp.left   + margin;
    vp.right  = _vp.right  - margin;
    vp.bottom = _vp.bottom - margin;
    vp.margin =              margin;

    if(hotspot_last_WINDOW_XY.x || hotspot_last_WINDOW_XY.y) set_WINDOW_XY(hotspot_last_WINDOW_XY.x, hotspot_last_WINDOW_XY.y);
    if(hotspot_last_GUTTER_XY.x || hotspot_last_GUTTER_XY.y) set_GUTTER_XY(hotspot_last_GUTTER_XY.x, hotspot_last_GUTTER_XY.y);

if(log_this) log_gutter(caller+"(vp=["+_vp+"] , margin=["+margin+"])", lf4);
};
/*}}}*/

/* IN-WINDOW */
/*  set_WINDOW_XY {{{*/
let set_WINDOW_XY = function(x, y)
{
/*{{{*/
let caller = "set_WINDOW_XY";
let log_this = DOM_GUTTER_LOG || LOG_MAP.EV2_MOVE;

/*}}}*/
/*{{{
    if( t_gutter_is_hotspot_NEAR_BORDER(x, y) ) return;
}}}*/

    hotspot_last_WINDOW_XY.x = x;
    hotspot_last_WINDOW_XY.y = y;

    if(vp.right && vp.bottom) {
        hotspot_last_WINDOW_XY.x = Math.max(hotspot_last_WINDOW_XY.x , vp.left   + vp.margin); /* LEFT   */
        hotspot_last_WINDOW_XY.x = Math.min(hotspot_last_WINDOW_XY.x , vp.right  - vp.margin); /* RIGHT  */
        hotspot_last_WINDOW_XY.y = Math.max(hotspot_last_WINDOW_XY.y , vp.top    + vp.margin); /* TOP    */
        hotspot_last_WINDOW_XY.y = Math.min(hotspot_last_WINDOW_XY.y , vp.bottom - vp.margin); /* BOTTOM */
    }

if(log_this) log_gutter(caller+"("+x+" "+y+")", lf4);
};
/*}}}*/
/*  get_WINDOW_XY {{{*/
let get_WINDOW_XY = function()
{
/*{{{*/
let   caller = "get_WINDOW_XY";
let log_this = DOM_GUTTER_LOG || LOG_MAP.EV2_MOVE;

/*}}}*/
    /* DEFAULT TO WINDOW CENTER {{{*/
  if(   (hotspot_last_WINDOW_XY.x == 0)
     && (hotspot_last_WINDOW_XY.y == 0)
    ) {
      let w_H = Math.min(window.innerHeight, document.body.parentElement.clientHeight);
      let w_W = Math.min(window.innerWidth , document.body.parentElement.clientWidth );
if( log_this) log(caller+"%c INIT hotspot_last_WINDOW_XY to [w_W w_H] CENTER", lf7);

        hotspot_last_WINDOW_XY.x = w_W / 2;
        hotspot_last_WINDOW_XY.y = w_H / 2;
    }
    /*}}}*/

if( log_this) log(caller+"%c return ["+hotspot_last_WINDOW_XY.x+" "+hotspot_last_WINDOW_XY.y+"]", lf7);
    return hotspot_last_WINDOW_XY;
};
/*}}}*/

/* IN-GUTTER */
/*  set_GUTTER_XY {{{*/
let set_GUTTER_XY = function(x,y)
{
/*{{{*/
let caller = "set_GUTTER_XY";
let log_this = DOM_GUTTER_LOG || LOG_MAP.EV2_MOVE;

/*}}}*/
    /* SET new [hotspot] [IN-GUTTER] [OFF-WINDOW] position */

    hotspot_last_GUTTER_XY.x = x;
    hotspot_last_GUTTER_XY.y = y;

    if(vp.right && vp.bottom)
    {
        let    center_x = (vp.left + vp.right ) / 2;
        let    middle_x = (vp.top  + vp.bottom) / 2;
        let x_in_window
            =  (x >              vp.margin )
            && (x < (vp.right  - vp.margin));

/*{{{
log("%c    center_x=["+center_x   +"]", lbH+lf1)
log("%c    middle_x=["+middle_x   +"]", lbH+lf1)
log("%c x_in_window=["+x_in_window+"]", lbH+lf1)
}}}*/

        if( x_in_window ) {
            if(y < middle_x) hotspot_last_GUTTER_XY.y = Math.min(hotspot_last_GUTTER_XY.y , vp.top    + vp.margin); /* MARGIN TOP    */
            else             hotspot_last_GUTTER_XY.y = Math.max(hotspot_last_GUTTER_XY.y , vp.bottom - vp.margin); /* MARGIN BOTTOM */
        }
        else {
            if(x < center_x) hotspot_last_GUTTER_XY.x = Math.min(hotspot_last_GUTTER_XY.x , vp.left   + vp.margin); /* MARGIN LEFT   */
            else             hotspot_last_GUTTER_XY.x = Math.max(hotspot_last_GUTTER_XY.x , vp.right  - vp.margin); /* MARGIN RIGHT  */
        }
    }


if(log_this) log_gutter(caller+"("+x+" "+y+")", lf3);
};
/*}}}*/
/*  get_GUTTER_XY {{{*/
let get_GUTTER_XY = function()
{
/*{{{*/
let   caller = "get_GUTTER_XY";
let log_this = DOM_GUTTER_LOG || LOG_MAP.EV2_MOVE;

/*}}}*/
if( log_this) log(caller+"%c return ["+hotspot_last_GUTTER_XY.x+" "+hotspot_last_GUTTER_XY.y+"]", lf7);
    return hotspot_last_GUTTER_XY;
};
/*}}}*/

/* CSS */
/*  set_CSS_URDL {{{*/
let set_CSS_URDL = function(hotring, urdl)
{
    let hiding_tools = !!urdl;
    if( hiding_tools )
    {
        t_util.set_el_class_on_off(hotring, "u", (urdl && urdl.u));
        t_util.set_el_class_on_off(hotring, "r", (urdl && urdl.r));
        t_util.set_el_class_on_off(hotring, "d", (urdl && urdl.d));
        t_util.set_el_class_on_off(hotring, "l", (urdl && urdl.l));

        if(!t_util.has_el_class(hotring, t_data.CSS_GUTTER) )
        {
/*{{{
log("%c t_util.add_el_class(hotring, t_data.CSS_GUTTER)", lf4)
}}}*/
            t_util.add_el_class(hotring, t_data.CSS_GUTTER);
        }
    }
    else
    {
        t_util.del_el_class(hotring, "u"       );
        t_util.del_el_class(hotring, "r"       );
        t_util.del_el_class(hotring, "d"       );
        t_util.del_el_class(hotring, "l"       );

        if( t_util.has_el_class(hotring, t_data.CSS_GUTTER) ) {
/*{{{
log("%c t_util.del_el_class(hotring, t_data.CSS_GUTTER)", lf8)
}}}*/
            t_util.del_el_class(hotring, t_data.CSS_GUTTER);
        }
    }
};
/*}}}*/

/* URDL */
/*  get_XY_URDL {{{*/
/*{{{*/
let last_gutter_urdl;
let last_reason;

/*}}}*/
let get_XY_URDL = function(x, y, reason)
{
/*{{{*/
let   caller = "get_XY_URDL";
let log_this = DOM_GUTTER_LOG || LOG_MAP.EV2_MOVE;

/*}}}*/
    /* URDL .. f(xy outside viewport) {{{*/
    let  u = (y <= vp.top   );
    let  r = (x >= vp.right );
    let  d = (y >= vp.bottom);
    let  l = (x <= vp.left  );

    let urdl
        = (u || r || d || l) ? {u,r,d,l}
        :                      null
    ;
    /*}}}*/
/*{{{*/
if(log_this) {
    if(             urdl
                    && (   !last_gutter_urdl
                           || (last_gutter_urdl.u  != urdl.u)
                           || (last_gutter_urdl.r  != urdl.r)
                           || (last_gutter_urdl.d  != urdl.d)
                           || (last_gutter_urdl.l  != urdl.l)
                       )
      )
    {
        t_log.log_label_URDL(caller+"("+x+" "+y+")", urdl);

        last_gutter_urdl = urdl;
    }

    if     (reason == undefined  )   log_caller();
    else if(reason != last_reason) { log(caller+"("+x+" "+y+") %c"+reason, lbH); last_reason = reason; }
}
/*}}}*/
    return urdl;
};
/*}}}*/
/*  is_hotspot_IN {{{*/
let is_hotspot_IN = function(hotspot, _caller)
{
/*{{{*/
let   caller = "is_hotspot_IN";
let log_this = DOM_GUTTER_LOG || LOG_MAP.EV2_MOVE;

/*}}}*/
    if(!hotspot) return {};
    let urdl  = get_XY_URDL(hotspot.offsetLeft, hotspot.offsetTop, _caller);
/*{{{*/
if(log_this) {
    let answer = urdl
        ?        "IN-GUTTER "+log_json_one_liner(urdl)
        :        "IN-WINDOW";
    log("%c"+caller+"%c"+_caller+"%c"+hotspot.offsetLeft+"%c"+hotspot.offsetTop+"%c return "+answer
        ,lbL+lf8    ,lbR+lf8     ,lbL+lf4                ,lbR+lf4              ,lbH+lf9            );
}
/*}}}*/
    return urdl;
};
/*}}}*/
/*_ t_gutter_is_hotspot_NEAR_BORDER {{{*/
let t_gutter_is_hotspot_NEAR_BORDER = function(x, y)
{
    let answer = get_XY_URDL(x + vp.margin/2, y + vp.margin/2);
/*{{{
logXXX("t_gutter_is_hotspot_NEAR_BORDER return %c"+ answer+"%c"+hotspot.offsetLeft+"%c"+hotspot.offsetTop, lbH, lbL+lf3, lbR+lf4);
}}}*/

    return answer;
};
/*}}}*/

/*_ log_gutter {{{*/
let log_gutter = function(_caller, lfx=lf7)
{
    let gutter_L = (vp.right) && (hotspot_last_GUTTER_XY.x <=              vp.margin );
    let gutter_U = (vp.right) && (hotspot_last_GUTTER_XY.y <=              vp.margin );
    let gutter_R = (vp.right) && (hotspot_last_GUTTER_XY.x >= (vp.right  - vp.margin));
    let gutter_D = (vp.right) && (hotspot_last_GUTTER_XY.y >= (vp.bottom - vp.margin));

    let gutter_URDL
        = (gutter_U ? "U" : "_")
        + (gutter_R ? "R" : "_")
        + (gutter_D ? "D" : "_")
        + (gutter_L ? "L" : "_")
    ;

    log_key_val_group(_caller
                      , {                vp_top    : vp.top
                          ,              vp_left   : vp.left
                          ,              vp_bottom : vp.bottom
                          ,              vp_right  : vp.right
                          ,              vp_margin : vp.margin
                          , hotspot_last_GUTTER_XY : hotspot_last_GUTTER_XY.x+" "+hotspot_last_GUTTER_XY.y+" "+gutter_URDL
                          , hotspot_last_WINDOW_XY : hotspot_last_WINDOW_XY.x+" "+hotspot_last_WINDOW_XY.y
                          ,                callers : t_data.LF+t_log.get_callers()
                      }
                      , lfx, false);
};
/*}}}*/

/* EXPORT */
/*{{{*/
/*➔ t_store_set_state {{{*/
let t_store_set_state = function(label,state)
{
    if(          state != undefined)
    {
        if(      state) localStorage_setItem(label, "true");
        else            localStorage_delItem(label        );
        return !!state;
    }
    else {
        return          localStorage_getItem   (label        );
    }
};
/*}}}*/
return { name : "dom_gutter"
    , logging : (state) => DOM_GUTTER_LOG = t_store_set_state("DOM_GUTTER_LOG",state)
    , tagging : (state) => DOM_GUTTER_TAG = t_store_set_state("DOM_GUTTER_TAG",state)
    , t_gutter_IMPORT

    /* const */
    , DOM_GUTTER_JS_ID
    , DOM_GUTTER_JS_TAG

    /* VIEWPORT */
    , layout_has_CHANGED

    /* IN-WINDOW */
    , get_WINDOW_XY
    , set_WINDOW_XY

    /* IN-GUTTER */
    , get_GUTTER_XY
    , set_GUTTER_XY

    /* CSS */
    , is_hotspot_IN

    /* URDL */
    , get_XY_URDL
    , set_CSS_URDL

    /* YET UNUSED */
    , t_gutter_is_hotspot_NEAR_BORDER

};

/*}}}*/

})();

