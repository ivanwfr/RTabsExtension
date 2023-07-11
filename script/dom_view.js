/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_view                                                                 │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* globals window */

/* globals dom_data   */
/* globals dom_i18n   */
/* globals dom_log    */
/* globals dom_prop   */
/* globals dom_seek   */
/* globals dom_store  */
/* globals dom_tools  */
/* globals dom_util   */

/* exported dom_view, DOM_VIEW_JS_TAG */

/* eslint-disable no-warning-comments */
/* eslint-disable dot-notation        */

const DOM_VIEW_JS_ID        = "dom_view_js";
const DOM_VIEW_JS_TAG       = DOM_VIEW_JS_ID  +" (230707:16h:45)";
/*}}}*/
let dom_view    = (function() {
"use strict";
let   DOM_VIEW_LOG          = false;
let   DOM_VIEW_TAG          = false;

/* IMPORT */
/*{{{*/
/* eslint-disable no-unused-vars */
/*➔ t_view_IMPORT {{{*/
/* t_data .. t_tools {{{*/
/*....................................*/
let t_data     = {}        ;    /* 05 */
let t_log      = {}        ;    /* 06 */
let t_util     = {}        ;    /* 07 */
let t_i18n     = {}        ;    /* 08 */
let t_prop     = {}        ;    /* 09 */
let t_store    = {}        ;    /* 10 */
/*  t_fly      = {}        ; */ /* 11 */
/* ...................................*/
/*  t_wording  = {}        ; */ /* 12 */
/*  t_select   = {}        ; */ /* 13 */
/*  t_slot     = {}        ; */ /* 14 */
/* ...................................*/
/*  t_hide     = {}        ; */ /* 15 */
/*  t_view     = {}        ; */ /* 16 */
/*  t_sticky   = {}        ; */ /* 17 */
let t_seek     = {}        ;    /* 18 */
/*  t_share    = {}        ; */ /* 19 */
/* ...................................*/
/*  t_grid     = {}        ; */ /* 20 */
/*  t_gutter   = {}        ; */ /* 21 */
/* ...................................*/
/*  t_ipc      = {}        ; */ /* 22 */
let t_tools    = {}        ;    /* 23 */
/*....................................*/
/*}}}*/
let t_view_IMPORT  = function(log_this)
{
/* t_data .. t_tools {{{*/
/* ...................................*/
    t_data    = dom_data   ;    /* 05 */
    t_log     = dom_log    ;    /* 06 */
    t_util    = dom_util   ;    /* 07 */
    t_i18n    = dom_i18n   ;    /* 08 */
    t_prop    = dom_prop   ;    /* 09 */
    t_store   = dom_store  ;    /* 10 */
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
    t_seek    = dom_seek   ;    /* 18 */
/*  t_share   = dom_share  ; */ /* 19 */
/* ...................................*/
/*  t_grid    = dom_grid   ; */ /* 20 */
/*  t_gutter  = dom_gutter ; */ /* 21 */
/* ...................................*/
/*  t_ipc     = dom_ipc    ; */ /* 22 */
    t_tools   = dom_tools  ;    /* 23 */
/* ...................................*/
/*}}}*/
    view_INTERN();
    /* MODULE LOGGING TAGGING {{{*/
    DOM_VIEW_LOG = DOM_VIEW_LOG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_VIEW_LOG"));
    DOM_VIEW_TAG = DOM_VIEW_TAG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_VIEW_TAG"));

    /*}}}*/
if(log_this) log("%c 15 view", lbH+lf8);
};
/*}}}*/
/*_   view_INTERN {{{*/
/* t_log t_prop {{{*/

/* t_log */
let LOG_MAP;

let lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;

let log, logBIG, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;
let log_label_URDL;
let console_dir;

/* t_prop */
let prop;

/*}}}*/
let   view_INTERN = function()
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

    log_label_URDL      = t_log.log_label_URDL;
    console_dir         = t_log.console_dir;

    /* t_prop */
    prop                = t_prop;
    /*}}}*/
};
/*}}}*/
/* eslint-enable  no-unused-vars */
/*}}}*/

/*➔ t_view1_is_el_in_viewport {{{*/
let t_view1_is_el_in_viewport = function(el)
{
    let xy = t_util.get_el_xy(el);
    return t_view1_is_xy_in_viewport(xy.x, xy.y);
};
/*}}}*/
/*➔ t_view1_is_el_topLeft_or_bottomRight_in_viewport {{{*/
let t_view1_is_el_topLeft_or_bottomRight_in_viewport = function(el)
{
    let xy = t_util.get_el_xy(el);

    let tl_in_viewport = t_view1_is_xy_in_viewport(xy.x, xy.y);

    xy.x += el.clientWidth;
    xy.y += el.clientHeight;
    let br_in_viewport = t_view1_is_xy_in_viewport(xy.x, xy.y);

    return tl_in_viewport || br_in_viewport;
};
/*}}}*/

/*➔ t_view1_is_xy_in_viewport {{{*/
/*{{{
let last_x_IN_viewport;
let last_y_IN_viewport;
}}}*/
let t_view1_is_xy_in_viewport = function(x,y)
{
    /* [x_IN_viewport] .. [y_IN_viewport] {{{*/
    x = Math.floor(x);
    y = Math.floor(y);

    let x_min         =       window.scrollX;
    let y_min         =       window.scrollY;
    let x_max         =       window.scrollX + window.innerWidth ;
    let y_max         =       window.scrollY + window.innerHeight;

    let x_IN_viewport = (x >= x_min) && (x <= x_max);
    let y_IN_viewport = (y >= y_min) && (y <= y_max);

/*{{{
    let           lfx = x_IN_viewport ? lf5 : lf8;
    let           lfy = y_IN_viewport ? lf5 : lf8;

if(    (x_IN_viewport != last_x_IN_viewport)
    || (y_IN_viewport != last_y_IN_viewport)
  )
    log("%c x_IN_viewport %c "+x_min+" < "+x+" < "+x_max+" %c y_IN_viewport %c "+y_min+" < "+y+" < "+y_max
        ,lbL+lfx         ,lbR+lf9                         ,lbL+lfy         ,lbR+lf9                       );

    last_x_IN_viewport = x_IN_viewport;
    last_y_IN_viewport = y_IN_viewport;
}}}*/

    /*}}}*/
    return x_IN_viewport && y_IN_viewport;
};
/*}}}*/

/*➔ t_view2_is_xy_near_viewport {{{*/
let t_view2_is_xy_near_viewport = function(x,y)
{
    /* [x_nearviewport] .. [y_nearviewport] {{{*/
    x = Math.floor(x);
    y = Math.floor(y);

    let x_min         =       window.scrollX - window.innerWidth     ;
    let y_min         =       window.scrollY - window.innerHeight    ;
    let x_max         =       window.scrollX + window.innerWidth  * 2;
    let y_max         =       window.scrollY + window.innerHeight * 2;
    let x_nearviewport = (x >= x_min) && (x <= x_max);
    let y_nearviewport = (y >= y_min) && (y <= y_max);

/*{{{
    let           lfx = x_nearviewport ? lf5 : lf8;
    let           lfy = y_nearviewport ? lf5 : lf8;

log("%c x_nearviewport %c "+x_min+" < "+x+" < "+x_max+" %c y_nearviewport %c "+y_min+" < "+y+" < "+y_max
    ,lbL+lfx          ,lbR+lf9                         ,lbL+lfy          ,lbR+lf9                       );
}}}*/

    /*}}}*/
    return x_nearviewport && y_nearviewport;
};
/*}}}*/

/*➔ t_view3_move_panel_BORDERING {{{*/
let t_view3_move_panel_BORDERING = function(panel, x=panel.offsetLeft, y=panel.offsetTop)
{
/* {{{*/
let caller = "t_view3_move_panel_BORDERING";
let log_this = DOM_VIEW_LOG || LOG_MAP.T3_LAYOUT;

/*}}}*/
    /* MOVE UNCONSTRAINED PANEL {{{*/
    let panel_not_bordering = (panel.id == "fly_div");
    if( panel_not_bordering )
    {
        panel.style.left = x+"px";
        panel.style.top  = y+"px";

        panel.bordering = {};
    }
    /*}}}*/
    /* MOVE WITHIN BORDERS .. GET URDL [Up Right Down Left] {{{*/
    else {
        panel.bordering = t_view4_move_panel_CONFINED(panel, x, y);

    }
     /*}}}*/
    /* SET BORDER CSS {{{*/
    if( view3_move_panel_is_bordering(panel) )
    {
        t_util.add_el_class(panel, t_data.CSS_BORDERING);

    }
    /*}}}*/
    /* DEL BORDER CSS {{{*/
    else if( t_util.has_el_class(panel, t_data.CSS_BORDERING) )
    {
        t_util.del_el_class(panel, t_data.CSS_BORDERING);

    }
    /*}}}*/
    /* PANEL URDL {{{*/
if(log_this && panel.bordering && panel.bordering.new_URDL) log_label_URDL(caller, panel.bordering);

    view3_move_panel_CSS( panel );
    /*}}}*/
};
/*}}}*/
/*…   view3_move_panel_is_bordering {{{*/
let   view3_move_panel_is_bordering = function(panel)
{
    if(   !panel            ) return false;
    if(   !panel.bordering  ) return false;
    return panel.bordering.u
        || panel.bordering.r
        || panel.bordering.d
        || panel.bordering.l
    ;
};
    /*}}}*/
/*…   view3_move_panel_CSS {{{*/
/*{{{*/
let onUp_pinned_panels_show_seekzone_done;

/*}}}*/
let   view3_move_panel_CSS = function(panel) /* eslint-disable-line complexity */
{
    /* URDL CSS_CORNER {{{*/
    let wcX = (window.innerWidth  - t_data.SCROLLBAR_WIDTH) / 2;
    let wcY = (window.innerHeight - t_data.SCROLLBAR_WIDTH) / 2;

    let poW = panel.offsetWidth ; let pcX = panel.offsetLeft + poW / 2;
    let poH = panel.offsetHeight; let pcY = panel.offsetTop  + poH / 2;

    /* [bordering] .. f(URDL) */
    if(panel.bordering)
    {
        t_util.set_el_class_on_off(panel, "u", panel.bordering.u);
        t_util.set_el_class_on_off(panel, "r", panel.bordering.r);
        t_util.set_el_class_on_off(panel, "d", panel.bordering.d);
        t_util.set_el_class_on_off(panel, "l", panel.bordering.l);
    }

    /* [transform-origin] .. f(QUADRANT) */
    let   u = (pcY <  wcY);
    let   r = (pcX >= wcX);
    let   d = (pcY >= wcY);
    let   l = (pcX <  wcX);

    /* CSS CORNER */
    t_util.set_el_class_on_off(panel, t_data.CSS_CORNER_U_R, u && r);
    t_util.set_el_class_on_off(panel, t_data.CSS_CORNER_R_D, r && d);
    t_util.set_el_class_on_off(panel, t_data.CSS_CORNER_D_L, d && l);
    t_util.set_el_class_on_off(panel, t_data.CSS_CORNER_L_U, l && u);

    /*}}}*/
    /* t_data.SHOW_SEEKZONE .. TRANSFORM ORIGIN CORNER {{{*/
    if(   !onUp_pinned_panels_show_seekzone_done
       &&  prop.get( t_data.SHOW_SEEKZONE )
       &&  t_tools.t_get_onWork_PANEL()
      ) {
        let dx, dy;
        if(         l) {
            if     (u) { dx =   0  ; dy =   0  ; }
            else if(d) { dx =   0  ; dy = poH  ; }
            else       { dx =   0  ; dy = poH/2; }
        }
        else if(    r) {
            if     (u) { dx = poW  ; dy =   0  ; }
            else if(d) { dx = poW  ; dy = poH  ; }
            else       { dx = poW  ; dy = poH/2; }
        }
        else {
            if     (u) { dx = poW/2; dy =   0  ; }
            else if(d) { dx = poW/2; dy = poH  ; }
            else       { dx = poW/2; dy = poH/2; }
        }

        let corner_x = panel.offsetLeft + dx;
        let corner_y = panel.offsetTop  + dy;

        let css_corner
            = (u && r) ? t_data.CSS_CORNER_U_R
            : (r && d) ? t_data.CSS_CORNER_R_D
            : (d && l) ? t_data.CSS_CORNER_D_L
            : (l && u) ? t_data.CSS_CORNER_L_U
            :            "";

        t_seek.t_seekzone9_show_bordering(css_corner);         /* seeker style      */
        t_seek.t_seekzone1_show_onDown_XY(corner_x, corner_y); /* seeker xy         */
        t_seek.t_seekzone5_hide();                             /* seeker delay hide */

        onUp_pinned_panels_show_seekzone_done = true;
    }
    /*}}}*/
};
/*}}}*/

/*➔ t_view4_move_panel_CONFINED {{{*/
/*{{{*/
const NEAR_BORDER_MARGIN = 8;
let   move_bordering_panel_URDL_pageXY_result = {};
let   last_panel_cache;

/*}}}*/
let t_view4_move_panel_CONFINED = function(panel, x, y, margin_urdl) /* eslint-disable-line complexity */
{
/*{{{*/
let caller = "t_view4_move_panel_CONFINED";
let log_this = /*DOM_VIEW_LOG ||*/ LOG_MAP.T3_LAYOUT; /* VERBOSE!! */

/*}}}*/
    /* Get window and page WH {{{*/
    let  w_W = window.innerWidth  - t_data.SCROLLBAR_WIDTH;
    let  w_H = window.innerHeight - t_data.SCROLLBAR_WIDTH;

    /*}}}*/
    /* panel moving spot .. f(transformOrigin) {{{*/
    if(!last_panel_cache || (last_panel_cache.panel != panel))
    {
        last_panel_cache
            = {                panel
                , transformOrigin_XY : t_util.get_el_transformOrigin(panel)
            };
    }

    let has_transformOrigin
        = !!(last_panel_cache.transformOrigin_XY.x || last_panel_cache.transformOrigin_XY.y)
    ;

    let new_XY;
    if(x && y)
    {
        new_XY = true;
    }
    else {
        new_XY = false;

        let panel_x = panel.offsetLeft + (has_transformOrigin ? last_panel_cache.transformOrigin_XY.x : 0);
        let panel_y = panel.offsetTop  + (has_transformOrigin ? last_panel_cache.transformOrigin_XY.y : 0);

        let not_in_viewport
            =  (panel_x < (window.scrollX                     ))
            || (panel_x > (window.scrollX + window.innerWidth ))
            || (panel_y < (window.scrollY                     ))
            || (panel_y > (window.scrollY + window.innerHeight));

        if(not_in_viewport)
        {
if( log_this) log("%c not_in_viewport=["+panel_x+" "+panel_y+"]", lbH+lf8);

            return null;
        }
        else {
            x = panel_x;
            y = panel_y;
        }

if( log_this)
    log_key_val_group(caller+" DEFAULT XY"
                      , {   x
                          , y
                          , last_panel_cache
                      }
                      , lf7, true);

    }
    /*}}}*/
    /* 1/2 MOVE [absolute] WITHIN VIEWPORT BORDERS {{{*/
    let panel_fixed = (panel.style.position == "fixed");
    let in_page_panel
        = !panel_fixed
        || t_util.has_el_class(panel, t_data.CSS_STICKY_TOOL)
    ;
    if( in_page_panel )
    {
        let wsX = panel_fixed ? 0 : window.scrollX;
        let wsY = panel_fixed ? 0 : window.scrollY;

        /* min-max */
        if(margin_urdl && !margin_urdl.can_move_in) {
            x = Math.max(x, wsX       + (margin_urdl ? margin_urdl.l : 0));
            x = Math.min(x, wsX + w_W - (margin_urdl ? margin_urdl.r : 0));
            y = Math.max(y, wsY       + (margin_urdl ? margin_urdl.u : 0));
            y = Math.min(y, wsY + w_H - (margin_urdl ? margin_urdl.d : 0));
        }
        else {
            x = Math.max(x, wsX      );
            x = Math.min(x, wsX + w_W);
            y = Math.max(y, wsY      );
            y = Math.min(y, wsY + w_H);
        }

        if( has_transformOrigin )
        {
            panel.style.left = (x - last_panel_cache.transformOrigin_XY.x)+"px";
            panel.style.top  = (y - last_panel_cache.transformOrigin_XY.y)+"px";
        }
        else {
            panel.style.left = x+"px";
            panel.style.top  = y+"px";
        }

        /* switch to viewport XY .. (same as fixed) */
        x -= wsX;
        y -= wsY;

/*{{{
if( log_this) log("...in_page_panel["+x+" "+y+"]");
}}}*/
    }
    /*}}}*/
    /* 2/2 OR check [fixed] collision with other panels {{{*/
    else {
        [x,y] = view4_move_panel_try_XY(panel, x, y);

/*{{{
if( log_this) log("%c collision["+x+" "+y+"]", lf2);
}}}*/
    }
    /*}}}*/
    /* GET CURRENT [URDL] .. (TOP-LEFT DOMAIN) {{{*/
    let  poW =                           panel.offsetWidth ;
    let  poH =                           panel.offsetHeight;

    let near_x_min =             (margin_urdl ? margin_urdl.l : 0);
    let near_x_max = w_W - poW - (margin_urdl ? margin_urdl.r : 0);
    let near_y_min =             (margin_urdl ? margin_urdl.u : 0);
    let near_y_max = w_H - poH - (margin_urdl ? margin_urdl.d : 0);

    /* IN CASE WHERE PANEL IS BIGGER THAN WINDOW */
    near_x_max     =    Math.max((margin_urdl ? margin_urdl.l : 0), near_x_max);
    near_y_max     =    Math.max((margin_urdl ? margin_urdl.u : 0), near_y_max);

    let u = (y <= near_y_min);
    let r = (x >= near_x_max);
    let d = (y >= near_y_max);
    let l = (x <= near_x_min);

    let new_URDL
        = (   (u != move_bordering_panel_URDL_pageXY_result.u)
           || (r != move_bordering_panel_URDL_pageXY_result.r)
           || (d != move_bordering_panel_URDL_pageXY_result.d)
           || (l != move_bordering_panel_URDL_pageXY_result.l))
    ;
if(log_this && new_URDL) log_key_val_group("was", move_bordering_panel_URDL_pageXY_result, lf4, true);

    move_bordering_panel_URDL_pageXY_result
        = { panel
        ,   u, r, d, l
        ,   x, y
        ,   w:poW, h:poH
        ,   near_x_min , near_x_max
        ,   near_y_min , near_y_max
        ,   new_URDL
        ,   new_XY
        };

if(log_this && new_URDL) log_key_val_group("now", move_bordering_panel_URDL_pageXY_result, lf3, true);
    /*}}}*/
    /* MOVE [fixed] WITHIN WINDOW BORDERS {{{*/
    if(!in_page_panel)
    {
        view4_move_panel_urdl_xy_min_max( move_bordering_panel_URDL_pageXY_result );

    }
    /*}}}*/
    /* return [URDL] {{{*/
if(log_this && new_URDL) log_label_URDL(caller, move_bordering_panel_URDL_pageXY_result);
/*{{{
if(log_this && new_URDL) log_caller();
}}}*/

    return move_bordering_panel_URDL_pageXY_result;
    /*}}}*/
};
/*}}}*/
/*…   view4_move_panel_try_XY {{{*/
/*{{{*/
const MOVE_STEP =  16;
const PANEL_GAP =   8;

let bumps_logged_since_last_panels_notification = [];
let onUp_pinned_panels;
/*}}}*/
let   view4_move_panel_try_XY = function(panel, x, y)
{
/* {{{*/
let   caller = "view4_move_panel_try_XY";
let log_this = /*DOM_VIEW_LOG ||*/ LOG_MAP.T3_LAYOUT; /* VERBOSE!! */

if( log_this) log(caller+"["+x+" "+y+"]");
/*}}}*/
    /* SINGLE PANEL .. can always be moved to any [x,y] {{{*/
    if(    !onUp_pinned_panels
       ||  (onUp_pinned_panels.length < 1)
       || ((onUp_pinned_panels.length < 2) && (onUp_pinned_panels[0] === panel))
      )
        return [x,y];

    /*}}}*/
    /* PANEL AREA {{{*/
    let p = {};
    p.h = panel.offsetHeight;
    p.w = panel.offsetWidth;
    p.t = panel.offsetTop;
    p.l = panel.offsetLeft;

    p.b = p.t + p.h;
    p.r = p.l + p.w;

    p.c = p.l + p.w/2;
    p.m = p.t + p.h/2;

    /*}}}*/
    /* MOVE TOWARDS [x,y] .. (CAPPED TO MOVE_STEP) {{{*/
    p.x_arg = x;
    x         =  Math.max(p.l  - MOVE_STEP , x              );
    x         =  Math.min(               x , p.l + MOVE_STEP);

    p.y_arg = y;
    y         =  Math.max(p.t  - MOVE_STEP , y              );
    y         =  Math.min(               y , p.t + MOVE_STEP);

if(log_this) log("%c......CAPPED ["+x+" "+y+"] ..  p.t=["+ p.t+"]", lf3);
    p.t = y;
    p.l = x;
    p.b = p.t + p.h;
    p.r = p.l + p.w;
    /*}}}*/
    return view4_move_panel_bump_XY(panel, x, y, p);
};
/*}}}*/
/*…   view4_move_panel_bump_XY {{{*/
let   view4_move_panel_bump_XY = function(panel, x, y, p)
{
/* {{{*/
let caller = "view4_move_panel_bump_XY";
let log_this = DOM_VIEW_LOG || LOG_MAP.T3_LAYOUT;

/*}}}*/
    /* VIEWPORT AREA {{{*/
    let w_W = window.innerWidth  - t_data.SCROLLBAR_WIDTH;
    let w_H = window.innerHeight - t_data.SCROLLBAR_WIDTH;

    let v_L =                      NEAR_BORDER_MARGIN;
    let v_R = w_W                - NEAR_BORDER_MARGIN;
    let v_T =                      NEAR_BORDER_MARGIN;
    let v_B = w_H                - NEAR_BORDER_MARGIN;

    /*}}}*/
    /* BUMP ONTO OTHER PINNED PANELS {{{*/
    let o = {};
    for(let i=0; i<onUp_pinned_panels.length; ++i)
    {
        /* other panel {{{*/
        if(   onUp_pinned_panels[i] === panel) continue;
        o.h = onUp_pinned_panels[i].offsetHeight;
        o.w = onUp_pinned_panels[i].offsetWidth;
        o.t = onUp_pinned_panels[i].offsetTop   ;
        o.l = onUp_pinned_panels[i].offsetLeft  ;
        o.b = o.t + o.h;
        o.r = o.l + o.w;
        /*}}}*/
        /*   intersection {{{*/
        if( !t_util.intersect_tlbr({p , o, gap:PANEL_GAP}) ) continue;

        /*}}}*/
        /* center distance {{{*/
        let o_center_x = (o.l + o.r) / 2;
        let o_center_y = (o.t + o.b) / 2;
        let p_center_x = (p.l + p.r) / 2;
        let p_center_y = (p.t + p.b) / 2;
        let         dx = o_center_x - p_center_x;
        let         dy = o_center_y - p_center_y;

        /*}}}*/
        /* XY-MOVE .. WALL-SLIDE .. PANEL-JUMP {{{*/
        let                t_x = (dx > 0) ? (o.l - p.w - PANEL_GAP) : (o.r + PANEL_GAP);
        let                t_y = (dy > 0) ? (o.t - p.h - PANEL_GAP) : (o.b + PANEL_GAP);
        let t_x_within_margins = (v_L < t_x) && (t_x < (v_R - p.w));
        let t_y_within_margins = (v_T < t_y) && (t_y < (v_B - p.h));

        let             x_wall = ((p_center_y < o.t) || (p_center_y > o.b));
        let             y_wall = ((p_center_x < o.l) || (p_center_x > o.r));

        let             x_jump = (Math.abs(t_x - p.x_arg) > (w_W / 4));
        let             y_jump = (Math.abs(t_y - p.y_arg) > (w_H / 4));

if(log_this) view4_move_panel_bump_XY_log(caller, {p, t_x, t_y, x_wall, y_wall, x_jump, y_jump });
        /*}}}*/
        /* SLIDING WALL .. (no panel jump) .. (within margins) {{{*/
        if     (y_wall && !x_jump && t_x_within_margins) x = t_x;
        else if(          !y_jump && t_y_within_margins) y = t_y;

        /*}}}*/
    }
    /*}}}*/
    return [x,y];
};
/*}}}*/
/*…   view4_move_panel_bump_XY_log {{{*/
let   view4_move_panel_bump_XY_log = function (caller, {p, t_x, t_y, x_wall, y_wall, x_jump, y_jump }) /* eslint-disable-line complexity */
{
/*{{{
    if(bumps_logged_since_last_panels_notification.length < 1) dom_log.console_clear("view4_move_panel_bump_XY_log");
}}}*/

    if( !(   (x_wall && !bumps_logged_since_last_panels_notification.includes("x_wall"))
          || (y_wall && !bumps_logged_since_last_panels_notification.includes("y_wall"))
          || (x_jump && !bumps_logged_since_last_panels_notification.includes("x_jump"))
          || (y_jump && !bumps_logged_since_last_panels_notification.includes("y_jump")))
      )
        return; /* all has already been reported once */

    if(x_wall && !bumps_logged_since_last_panels_notification.includes("x_wall")) bumps_logged_since_last_panels_notification.push("x_wall");
    if(y_wall && !bumps_logged_since_last_panels_notification.includes("y_wall")) bumps_logged_since_last_panels_notification.push("y_wall");
    if(x_jump && !bumps_logged_since_last_panels_notification.includes("x_jump")) bumps_logged_since_last_panels_notification.push("x_jump");
    if(y_jump && !bumps_logged_since_last_panels_notification.includes("y_jump")) bumps_logged_since_last_panels_notification.push("y_jump");

    let lxw = lbL + (x_wall ? lf3 : lf8);
    let lyw = lbR + (y_wall ? lf3 : lf8);
    let lxj = lbL + (x_jump ? lf7 : lf8);
    let lyj = lbR + (y_jump ? lf7 : lf8);

log(caller+"%c x_arg=["+p.x_arg+"] %c t_x=["+t_x+"] %c "+Math.abs(t_x - p.x_arg)+" %c "+Math.abs(t_y - p.y_arg)+" %c x_wall %c y_wall %c x_jump %c y_jump"
    ,       lbL+lf1               ,lbR+lf2         ,lbL+lf4                       ,lbR+lf4                       ,lxw      ,lyw      ,lxj      ,lyj       );

};
/*}}}*/
/*…   view4_move_panel_urdl_xy_min_max {{{*/
let   view4_move_panel_urdl_xy_min_max = function(bordering)
{
    let { panel, u,r,d,l, x,y, near_x_min,near_y_min , near_x_max,near_y_max } = bordering;

    if     (l)         x = near_x_min;
    else if(r)         x = near_x_max;

    if     (u)         y = near_y_min;
    else if(d)         y = near_y_max;

    x =       Math.max(x, near_x_min);
    x =       Math.min(x, near_x_max);

    y =       Math.max(y, near_y_min);
    y =       Math.min(y, near_y_max);

    panel.style.left = x+"px";
    panel.style.top  = y+"px";

/*{{{
log( "%c"+ near_x_min +" < %c "+ x +" %c < "+ near_x_max +" .. %c"+ near_y_min +" < %c "+ y +" %c < "+ near_y_max
     ,lbL+lf4             ,lbC+lf4   ,lbR+lf4                 ,lbL+lf3             ,lbC+lf3   ,lbR+lf3           );
}}}*/

};
/*}}}*/

/*➔ t_view5_move_panel_XY {{{*/
let t_view5_move_panel_XY = function(panel, x=panel.offsetLeft, y=panel.offsetTop)
{
/*{{{*/
let   caller = "t_view5_move_panel_XY";
let log_this = DOM_VIEW_LOG || LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"("+panel.id+", "+x+", "+y+")");
/*}}}*/
    /* CHECK CAPPED FROM {{{*/
    view5_move_panel_origin_and_view( panel );

    let xy    = { x , y };
    xy.x      = Math.max(       panel.view_left  , x);
    xy.x      = Math.min( xy.x, panel.view_right    );

    xy.y      = Math.max(       panel.view_top   , y);
    xy.y      = Math.min( xy.y, panel.view_bottom   );

    /* SAVE PANEL [capped_from_x capped_from_y] */
    xy.capped = (x != xy.x) || (y != xy.y);
    if(    xy.capped                                   /* panel about to be [dragged] into viewport */
       && !panel.capped_from_x && !panel.capped_from_y /* with [dragged-from-position] not saved yet */
      )
        view5_set_panel_capped_from_xy(panel, panel.offsetLeft, panel.offsetTop);

    /*}}}*/
    /* MOVE PANEL WITHIN BORDERS {{{*/
    t_view3_move_panel_BORDERING(panel, x, y);

/*{{{*/
if(log_this) {
    let  w_W = window.innerWidth  - t_data.SCROLLBAR_WIDTH;
    let  w_H = window.innerHeight - t_data.SCROLLBAR_WIDTH;

    let  poW = panel.offsetWidth;
    let  poH = panel.offsetHeight;

    let lfx = xy.capped ? lf3 : lf4;

    let v_T = parseInt(panel.view_top    );
    let v_L = parseInt(panel.view_left   );
    let v_B = parseInt(panel.view_bottom );
    let v_R = parseInt(panel.view_right  );

    log_key_val_group(     caller+" .. "+   panel.id
                     , {   panel_id       : panel.id
                         , panel_scale    : panel.scale
                         , panel_tox      : panel.tox
                         , panel_toy      : panel.toy
                         , panel_WH       : "["+ poW         + " "+ poH         +"]"
                         , win_WH         : "["+ w_W         + " "+ w_H         +"]"
                         , view_TL_BR     : "["+ v_T+" "+v_L +"]["+ v_B+" "+v_R +"]"
                         , move_XY        : "["+    x        + " "+    y        +"]"
                         , capped         : xy.capped ? ("XY=["+xy.x +" "+ xy.y+"]") : false
                         , capped_from    : "["+ panel.capped_from_x  +" "+ panel.capped_from_y+"] "
                     }
                     , lfx, false);

if(panel.bordering && panel.bordering.new_URDL) log_label_URDL(caller, panel.bordering);
}
if( log_this) log_caller();
/*}}}*/
    /*}}}*/
    return xy;
};
/*}}}*/
/*…   view5_set_panel_capped_from_xy {{{*/
let   view5_set_panel_capped_from_xy = function(panel,x,y)
{
    panel.capped_from_x = x;
    panel.capped_from_y = y;

    t_util.add_el_class(panel, t_data.CSS_CAPPED);
};
/*}}}*/
/*…   view5_move_panel_origin_and_view {{{*/
let   view5_move_panel_origin_and_view = function(panel)
{
    /* [scale] .. [bordering] .. [transform-origin] {{{*/
/*{{{
    panel.scale = t_util.t_get_panel_scale(panel) ;
}}}*/

    /* transformOrigin .. f(URDL) */
    if(   !panel.bordering ) panel.bordering = {};

    panel.tox
        =  panel.bordering.l ?   0 /* FROM L_TO_R */
        :  panel.bordering.r ? 100 /* FROM R_TO_L */
        :  panel.bordering.u ?  50 /* FROM CENTER */
        :  panel.bordering.d ?  50 /* FROM CENTER */
        :                       50 /* DEFAULT     */
    ;
    panel.toy
        =  panel.bordering.u ?   0 /* FROM U_TO_D */
        :  panel.bordering.d ? 100 /* FROM D_TO_U */
        :  panel.bordering.l ?  50 /* FROM CENTER */
        :  panel.bordering.r ?  50 /* FROM CENTER */
        :                       50 /* DEFAULT     */
    ;

/*{{{
log("%c"+panel.id+"%c scale "+panel.scale+"%c tox "+panel.tox+"%c toy "+panel.toy+"%c bordering ["+panel.bordering+"]"
    ,lbH+lf4      ,lbH                    ,lbL                ,lbR                ,lbH+lf5                            );
}}}*/

    /*}}}*/
    /* [w_W w_H] .. [poW poH] {{{*/
    let  w_W = window.innerWidth  - t_data.SCROLLBAR_WIDTH;
    let  w_H = window.innerHeight - t_data.SCROLLBAR_WIDTH;

    let  poW = panel.offsetWidth ;
    let  poH = panel.offsetHeight;

    /*}}}*/
    /* START FROM A FULLY VISIBLE PANEL-TOP-LEFT-AREA at scale 1 {{{*/
    panel.view_top    =         0;
    panel.view_left   =         0;
    panel.view_bottom = w_H - poH;
    panel.view_right  = w_W - poW;

    /*}}}*/
};
/*}}}*/

/*➔ t_view6_cache_PINNED_panels {{{*/
let t_view6_cache_PINNED_panels = function(panels)
{
/* {{{*/
let caller = "t_view6_cache_PINNED_panels";
let log_this = DOM_VIEW_LOG || LOG_MAP.T3_LAYOUT;

/*}}}*/
    /* CACHE BUMP-TARGET-PANELS {{{*/
    onUp_pinned_panels                          = panels;
    onUp_pinned_panels_show_seekzone_done       = false;
    bumps_logged_since_last_panels_notification = [];

if(log_this) console_dir(caller+".onUp_pinned_panels", onUp_pinned_panels);
    /*}}}*/
};
/*}}}*/

/*➔ t_view7_clr_panel_capped_from_xy {{{*/
let t_view7_clr_panel_capped_from_xy = function(panel)
{
    panel.capped_from_x = 0;
    panel.capped_from_y = 0;

    t_util.del_el_class(panel, t_data.CSS_CAPPED);
};
/*}}}*/


/* EXPORT */
/*{{{*/
return { name : "dom_view"
    , logging : (state) => DOM_VIEW_LOG = t_store.setItem("DOM_VIEW_LOG",state)
    , tagging : (state) => DOM_VIEW_TAG = t_store.setItem("DOM_VIEW_TAG",state)
    , t_view_IMPORT

    , t_view1_is_el_in_viewport
    , t_view1_is_el_topLeft_or_bottomRight_in_viewport
    , t_view1_is_xy_in_viewport
    , t_view2_is_xy_near_viewport

    , t_view3_move_panel_BORDERING
    , t_view4_move_panel_CONFINED
    , t_view5_move_panel_XY

    , t_view6_cache_PINNED_panels
    , t_view7_clr_panel_capped_from_xy
};

/*}}}*/
}());

