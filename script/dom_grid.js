/* dom_grid_js */
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* globals window, document, setTimeout, clearTimeout */
/* globals getComputedStyle */
/* globals dom_data, dom_log, dom_util, dom_store, dom_tools */

/* exported dom_grid, DOM_GRID_JS_TAG */

/* eslint-disable complexity     */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable max-depth */
/* eslint-disable no-warning-comments */

const DOM_GRID_JS_ID        = "dom_grid_js";
const DOM_GRID_JS_TAG       = DOM_GRID_JS_ID    +" (230820:21h:09)";
/*}}}*/
let dom_grid    = (function() {
"use strict";
let   DOM_GRID_LOG          = false;
let   DOM_GRID_TAG          = false;

/* IMPORT */
/*{{{*/
/* eslint-disable no-unused-vars */
/*➔ t_grid_IMPORT {{{*/
/* t_data .. t_tools {{{*/
/*....................................*/
let t_data     = {}        ;    /* 05 */
let t_log      = {}        ;    /* 06 */
let t_util     = {}        ;    /* 07 */
/*  t_i18n     = {}        ; */ /* 08 */
/*  t_prop     = {}        ; */ /* 09 */
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
let t_grid_IMPORT  = function(log_this)
{
/* t_data .. t_tools {{{*/
/* ...................................*/
    t_data    = dom_data   ;    /* 05 */
    t_log     = dom_log    ;    /* 06 */
    t_util    = dom_util   ;    /* 07 */
/*  t_i18n    = dom_i18n   ; */ /* 08 */
/*  t_prop    = dom_prop   ; */ /* 09 */
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
    grid_INTERN();
    /* MODULE LOGGING TAGGING {{{*/
    DOM_GRID_LOG = DOM_GRID_LOG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_GRID_LOG")); /* eslint-disable-line no-undef */
    DOM_GRID_TAG = DOM_GRID_TAG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_GRID_TAG")); /* eslint-disable-line no-undef */

    /*}}}*/
if(log_this) log("%c 19 grid", lbH+lf9);
};
/*}}}*/
/*_   grid_INTERN {{{*/
/* t_log t_tools {{{*/

/* t_log */
let LOG_MAP;

let lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;

let log, logBIG, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;

/* t_data */
let CSS_HIDDEN;
let CSS_ON_GRID;
let ZINDEX_ON_GRID;

/*}}}*/
let   grid_INTERN = function()
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
    /* t_data {{{*/
    CSS_HIDDEN                  = t_data.CSS_HIDDEN;
    CSS_ON_GRID                 = t_data.CSS_ON_GRID;
    ZINDEX_ON_GRID              = t_data.ZINDEX_ON_GRID;

    /*}}}*/
};
/*}}}*/
/* eslint-enable  no-unused-vars */
/*}}}*/

/* GRID const */
/*{{{*/
const GRID_CAPTION    = "grid_caption";

/*}}}*/

/* GRID TOOLS */
/*_ get_tools_map {{{*/
let get_tools_map = function()
{
    return t_tools.t_tools_get_map();
};
    /*}}}*/
/*➔ t_grid_TOOLS_SELECT {{{ */
let t_grid_TOOLS_SELECT = function(e)
{
    /* GRID_CAPTION {{{*/
    if(e.ctrlKey) return;
let log_this = LOG_MAP.T2_GRID;

    let caller = "t_grid_TOOLS_SELECT";
    let     el = t_util.t_get_event_target(e);
    let     caption = el.classList.contains(GRID_CAPTION) ? el : el.parentNode;
if(log_this) log(caller+": el=["+t_util.get_n_lbl(el)+"]");
/*
if(log_this) log("...caption..........=["+ t_util.get_n_lbl(caption) +"]");
if(log_this) log("...caption........id=["+ caption.id         +"]");
if(log_this) log("...caption.classList=["+ caption.classList  +"]");
*/
    /*}}}*/
    /* CAPTURE EVENT {{{*/
    let actions = "";
    if( e.preventDefault ) { e.preventDefault();        actions += " preventDefault" ; }
    if( e.stopPropagation) { e.stopPropagation();       actions += " stopPropagation"; }
    /*else*/               { e.cancelBubble = true;     actions += " cancelBubble"   ; }
log_this = t_log.logging_something();
if(log_this) log(caller+": ...actions=["+actions+" ]");

    /*}}}*/
    grid_TOOLS_SELECT_caption( caption );
};
/* }}} */
/*… grid_TOOLS_SELECT_caption {{{*/
let grid_TOOLS_SELECT_caption = function(caption)
{
    /*{{{*/
    let caller = "grid_TOOLS_SELECT_caption";
let log_this = LOG_MAP.T2_GRID;

if(log_this) log(caller+": caption=["+t_util.get_n_lbl(caption)+"]");
if(log_this) log("...caption.id=["+caption.id+"]");
    /*}}}*/
    /* SELECTING - DESELECTING {{{*/
    let tools_map = get_tools_map();
    let hotspot   = t_tools.t_get_tool("hotspot");

    for(let i=0; i< tools_map.length; ++i)
    {
        let map         = tools_map[i];
        let panel       =       map.panel;
        if( panel      == hotspot) continue;
        let caption_id  = panel.id+"_"+GRID_CAPTION;
if(log_this) log("...caption_id=["+caption_id+"]");
        if(caption_id == caption.id) {
            t_grid_TOOLS_SELECT_panel(panel, "toggle");
            grid_caption_sync_opacity(map.selected, caption);
/*{{{
            grid_caption_sync_opacity(t_tools_panel_is_selected(panel), caption);
}}}*/
            break;
        }
    }
    /*}}}*/
};
/*}}}*/
/*➔ t_grid_TOOLS_SELECT_panel {{{*/
let t_grid_TOOLS_SELECT_panel = function(panel,new_state="toggle")
{
    let caller = "t_grid_TOOLS_SELECT_panel("+t_util.get_n_lbl(panel)+", "+new_state+")";
let log_this = LOG_MAP.T2_GRID;

if( log_this) log(caller);

    /* check current panel selection state */
    let      map  = t_tools.t_tools_map_get(panel);

    if(new_state == "toggle") new_state = !map.selected;

if( log_this) log("%c "+caller+": new_state=["+new_state+"]",lb9+lbF);

    /* select or deselect panel */
    if(map.selected != new_state)
    {
        map.selected = new_state;
if(log_this) log("... %c "+(map.selected ? "SELECTING" : "DESELECTING") + ": "+panel.id, lbF+(map.selected ? lb4 : lb1));

        t_tools.t_cache_armed_by(caller);
    }
};
/*}}}*/

/* GRID SELECT */
/*… grid_caption_layout {{{*/
let grid_caption_layout = function(num, panel, x, y)
{
/*{{{*/
let caller = "grid_caption_layout(num="+num+" .. "+panel.id+" .. xy=["+x+" "+y+"])";
let log_this = LOG_MAP.T2_GRID;

if( log_this) log(caller);
/*}}}*/
    /* create or get caption element {{{*/
    let   shadow_root = t_tools.t_get_shadow_root();
    let dom_grid_html = t_tools.t_get_tool("dom_grid_html");
    let           gl  = grid_getElement(panel.id+"_"+GRID_CAPTION);
    if(!gl) {
        gl            = document.createElement("EM");
        gl.       id  = panel.id+"_"+GRID_CAPTION;
        gl.    title  = panel.id;                    /* tooltip */
        gl.className  = GRID_CAPTION;

        if     (dom_grid_html) { dom_grid_html.appendChild(gl); if(log_this) log("dom_grid_html: "+caller); }
        else if(shadow_root  ) { shadow_root  .appendChild(gl); if(log_this) log(  "shadow_root: "+caller); }
        else                   { document.body.appendChild(gl); if(log_this) log("document.body: "+caller); }
/*
        add_listener_capture_active(gl, "click", t_grid_TOOLS_SELECT);
*/
    }
    /*}}}*/
    /* show control ID {{{*/
    let ccx = (num % 10);
    gl.innerHTML
        = "<em class='cc"+ccx+"'>"+ num                             +"</em>"
        + "<em class='cc"+ccx+"'>"+ t_util.get_id_caption(panel.id) +"</em>"
        + "<em class='cc"+ccx+"'>"+                       panel.id  +"</em>"
    ;

    gl.style.zIndex    = ZINDEX_ON_GRID;
    gl.style.position  = "fixed";
    gl.style.left      = (x      )+"px";

    /*}}}*/
    /* Caption layout {{{*/
    gl.style.top       = (y      )+"px";
    gl.style.maxHeight = grid_sized ? (t_gh-t_mg)+"px" : panel.clientHeight+"px";
    gl.style.maxWidth  = grid_sized ? (t_gw-t_mg)+"px" : panel.clientWidth +"px";
    gl.style.minHeight = grid_sized ? (t_gh-t_mg)+"px" : panel.clientHeight+"px";
    gl.style.minWidth  = grid_sized ? (t_gw-t_mg)+"px" : panel.clientWidth +"px";

    /*}}}*/
    return gl;
};
/*}}}*/
/*… grid_caption_hide_all {{{*/
let grid_caption_hide_all = function()
{
    let caller = "grid_caption_hide_all";
let log_this = LOG_MAP.T2_GRID;
if( log_this) log(caller);

    let tools_map = get_tools_map();
    let hotspot   = t_tools.t_get_tool("hotspot");

    for(let i=0; i< tools_map.length; ++i)
    {
        let map         = tools_map[i];
        let panel       =       map.panel;
        if( panel      == hotspot) continue;
        let gl          = grid_getElement(panel.id+"_"+GRID_CAPTION);
        if(!gl)  continue;
        gl.classList.remove("grid_caption_show");
        gl.classList.add   ("grid_caption_hide");
    }
};
/*}}}*/
/*… grid_caption_sync_opacity {{{*/
let grid_caption_sync_opacity = function(selected, gl)
{
    if(selected) gl.classList.add   ("grid_caption_see_through");
    else         gl.classList.remove("grid_caption_see_through");
};
/*}}}*/

/* GRID EVENTS */
/*➔ t_grid_onresize {{{*/
const GRID_ONRESIZE_DELAY = 500;
let   grid_onresize_timer = null;

let t_grid_onresize = function(caller)
{
let log_this = LOG_MAP.T2_GRID;
if( log_this) log("t_grid_onresize(caller "+caller+")");

    if(grid_onresize_timer) clearTimeout(grid_onresize_timer);
    grid_onresize_timer   = setTimeout  (grid_onresize_handle, GRID_ONRESIZE_DELAY);
};

let grid_onresize_handle = function()
{
    let caller = "grid_onresize_handle";

    if( t_grid_IS_ON_GRID(caller) )
        grid_LAYOUT_ON();

    grid_onresize_timer = null;

    t_grid_onWork_EL_changed(caller);
};
/*}}}*/
/*➔ t_grid_onWork_EL_changed {{{*/
/*{{{*/
const GRID_ONWORK_EL_CHANGED_TIMER_DELAY = 500;
let   grid_onWork_EL_changed_timer       = null;

/*}}}*/
/*_ t_grid_onWork_EL_changed {{{*/
let t_grid_onWork_EL_changed = function(caller)
{
if(LOG_MAP.T2_GRID) log("t_grid_onWork_EL_changed(caller "+caller+")");
    if(grid_onWork_EL_changed_timer) clearTimeout(grid_onWork_EL_changed_timer);
    grid_onWork_EL_changed_timer   = setTimeout  (grid_onWork_EL_changed_handler, GRID_ONWORK_EL_CHANGED_TIMER_DELAY);
};
/*}}}*/
/*_ grid_onWork_EL_changed_handler {{{*/
let grid_onWork_EL_changed_handler = function()
{
    let caller = "grid_onWork_EL_changed_handler";
if(LOG_MAP.T2_GRID) log("%c "+caller+": LOG_MAP.T2_GRID=["+LOG_MAP.T2_GRID+"]",lb9+lbF);
    /* GRID LOGGING ON-OFF {{{*/
    if(typeof t_tools.t_get_onWork_EL_last_used == "undefined") return;

    let el = grid_getElement("headsup_l_check"); if(!el) return;

    if(!LOG_MAP.T2_GRID) el.innerHTML="GRID LOGGING IS OFF";

    /*}}}*/
    /* [dom_grid_playground] {{{*/
    let dom_grid_playground = grid_getElement("dom_grid_playground");
    if(dom_grid_playground) {
        if(!LOG_MAP.T2_GRID) dom_grid_playground.classList.add   ("collapsed");
        else                 dom_grid_playground.classList.remove("collapsed");
    }
    /*}}}*/
    if(!LOG_MAP.T2_GRID) return;
    /* NOT SELECTED {{{*/
    let ol = t_tools.t_get_onWork_EL_last_used();
    if(!ol) {
        el.innerHTML = "<em>onWork_EL</em> <em class='cc0'>NOT SELECTED</em>";

        return;
    }
    /*}}}*/

    let cw = ol.clientWidth; let ch = ol.clientHeight;
    let ow = ol.offsetWidth; let oh = ol.offsetHeight;
    let sw = ol.scrollWidth; let sh = ol.scrollHeight;

    let t, w, h;
/*
    try {
*/
        let style = getComputedStyle(ol);
        t =          style.transform;
        w = parseInt(style.width );
        h = parseInt(style.height);
/*
    } catch(ex) {
    log(caller+": "+ex.toString());
        t = "";
        w = window.innerWidth;
        h = window.innerHeight;
    }
*/

/*
    let mU = ol.style.marginTop;
    let mR = ol.style.marginRight;
    let mD = ol.style.marginBottom;
    let mL = ol.style.marginLeft;
console.dir(ol);
console.dir(style);
*/
    let info
        = " transform    <em class='cc7'>"+ t               +"</em> "
        + " computed WxH <em class='cc8'>"+ w+" x "+h       +"</em> "
        + " page height  <em class='cc7'>"+ t_util.getPageHeight() +"</em> "
/*
        + " margin [URDL]<em class='cc9'>"+ mU+" "+mR+" "+mD+" "+mL+"</em> "
*/
        ;

    el.innerHTML
        = "<table style='border-spacing:1em;'>"
        + " <tr><th class='cc9' style='font-size:200%; font-weight:900;'>"+t_util.get_n_lbl(ol)+"</th> <td colspan='4'>"+info+"</td> </tr>"
        + " <tr><th>Offset</th> <td class='cc6'>"+ow  +"</td> <td>x</td> <td class='cc3'>"+oh+"</td> <td><span class='cc1'>+VIEWABLE</span> <span class='cc3'>+PADDING</span> <span class='cc4'>+BORDER</span> <span class='cc5'>+SCROLLBAR</span> <span class='ccA'>-margin</span><td></tr>"
        + " <tr><th>Client</th> <td class='cc7'>"+cw  +"</td> <td>x</td> <td class='cc4'>"+ch+"</td> <td><span class='cc1'>+VIEWABLE</span> <span class='cc3'>+PADDING</span> <span class='ccA'>-border</span> <span class='ccA'>-scrollbar</span> <span class='ccA'>-margin</span><td></tr>"
        + " <tr><th>Scroll</th> <td class='cc8'>"+sw  +"</td> <td>x</td> <td class='cc5'>"+sh+"</td> <td><span class='cc2'>+OVERFLOW</span> <span class='cc3'>+PADDING</span> <span class='ccA'>-border</span> <span class='ccA'>-scrollbar</span> <span class='ccA'>-margin</span><td></tr>"
        + "</table>"
    ;

};
/*}}}*/
/*}}}*/
/*➔ t_grid_ON_OFF_CB {{{*/
let t_grid_ON_OFF_CB = function(new_state)
{
    let caller = "t_grid_ON_OFF_CB("+new_state+")";

let log_this = LOG_MAP.T2_GRID;

    if(new_state == "toggle") new_state = !t_grid_IS_ON_GRID(caller);
if( log_this) log("%c "+caller+": new_state=["+new_state+"]",lb9+lbF);

    if( new_state ) { if(typeof t_tools.t_dimm_start != "undefined") t_tools.t_dimm_start(caller); }
    else            { if(typeof t_tools.t_dimm_stop  != "undefined") t_tools.t_dimm_stop (caller); }

    if(!new_state )   t_tools.t_update_TOOLS_MAP_GEOMETRY(caller); /* not when grid_sized */

    if( new_state ) { grid_SIZE_ON (); grid_LAYOUT_ON (); }
    else            { grid_SIZE_OFF(); grid_LAYOUT_OFF(); }

    call_t_grid_observers(new_state);

};
/*}}}*/
/*➔ t_grid_add_observer_callback {{{*/

let grid_observer_callbacks = [];

let t_grid_add_observer_callback = function(observer)
{
if(LOG_MAP.T2_GRID) t_log.console_log("t_grid_add_observer_callback("+(grid_observer_callbacks.length+1)+")");

    if(!grid_observer_callbacks.includes( observer ))
        grid_observer_callbacks.push    ( observer );
};

let call_t_grid_observers = function(state)
{
if(LOG_MAP.T2_GRID) t_log.console_log("call_t_grid_observers("+state+")");

    for(let i=0; i < grid_observer_callbacks.length; ++i)
        grid_observer_callbacks[i]( state );
};
/*}}}*/
/*… grid_sized_sync {{{*/
let grid_sized_sync = function(caller)
{
let log_this = LOG_MAP.T2_GRID;
if( log_this) log("%c grid_sized_sync: CALLED BY ["+caller+"] .. grid_sized=["+grid_sized+"]", lb3);

    let tools_map = get_tools_map();
    let hotspot   = t_tools.t_get_tool("hotspot");

    for(let i=0; i< tools_map.length; ++i)
    {
        let map         = tools_map[i];
        let panel       =       map.panel;
        if( panel      == hotspot) continue;
        if(!panel                ) continue;

        if(grid_sized) {
            panel.style.maxHeight = (t_gh-t_mg)+"px";
            panel.style.maxWidth  = (t_gw-t_mg)+"px";
            panel.style.minHeight = (t_gh-t_mg)+"px";
            panel.style.minWidth  = (t_gw-t_mg)+"px";
        }
        else {
            panel.style.maxHeight = "";
            panel.style.maxWidth  = "";
            panel.style.minHeight = "";
            panel.style.minWidth  = "";
        }
    }
};
/*}}}*/

/* GRID SIZE */
/*➔ t_grid_SIZE_TOGGLE {{{*/
let   grid_sized     = false;

let t_grid_SIZE_TOGGLE = function(e)
{
    let caller = "t_grid_SIZE_TOGGLE("+t_util.get_n_lbl(e.target)+")";
if(LOG_MAP.T2_GRID) t_log.console_log(caller);

    let tools_map = get_tools_map();

    if(!tools_map.length) return;

    /* GRID GEOMETRY */
    t_grid_MEASURE();

    /* TOOLS TOGGLE ON OR OFF GRID GEOMETRY */
    if(grid_sized ) grid_SIZE_OFF();
    else            grid_SIZE_ON ();

    /* TOOLS TOGGLE ON OR OFF GRID LOCATION */
    let panel = tools_map[0].panel;
    if( panel.classList.contains("on_grid")) grid_LAYOUT_ON();
    else                                     grid_sized_sync(caller);

};
/*}}}*/
/*➔ t_grid_IS_SIZED {{{*/
let t_grid_IS_SIZED = function(caller)
{
if(LOG_MAP.T2_GRID) t_log.console_log("t_grid_IS_SIZED: ...return "+grid_sized+" .. caller=["+caller+"]");

    return grid_sized;
};
/*}}}*/
/*➔ t_grid_IS_ON_GRID {{{*/
let t_grid_IS_ON_GRID = function(_caller)
{
let log_this = LOG_MAP.T2_GRID;

    let tools_map = get_tools_map();

    if(!tools_map.length) t_tools.t_load_TOOLS_MAP("t_grid_IS_ON_GRID");

if( log_this) log("%c t_grid_IS_ON_GRID %c CALLED BY "+_caller+" %c "+grid_sized, lbL, lbR, lbH+(grid_sized ? lf4 : lf8));
    return grid_sized;
};
/*}}}*/
/*… grid_SIZE_ON grid_SIZE_OFF grid_SIZE_STATE {{{*/
let   grid_SIZE_ON    = function() { grid_SIZE_STATE(true ); };
let   grid_SIZE_OFF   = function() { grid_SIZE_STATE(false); };
let   grid_SIZE_STATE = function(state)
{
    let caller = "grid_SIZE_STATE("+state+")";
if(LOG_MAP.T2_GRID) log("%c "+caller,lb5+lbF);

    let          checkbox         = grid_getElement("headsup_l_size_checkbox");
    if(checkbox) checkbox.checked = state;

    grid_sized = state;

    t_grid_onWork_EL_changed(caller);

    /* TOOLS MAY SHOW DIMMER MASK (when grid_sized) */
};
/*}}}*/

/* GRID LAYOUT */
/*… grid_LAYOUT_ON {{{*/
let grid_LAYOUT_ON = function()
{
/*{{{*/
    let caller  = "grid_LAYOUT_ON";
let log_this = LOG_MAP.T2_GRID;

/*{{{
t_log.console_clear(caller);
}}}*/
if(log_this) log("%c "+caller,lb9+lbF);
/*}}}*/
    /* UPDATE GRID CELL SIZE .. f(current window size) {{{*/
    t_grid_MEASURE();

    /*}}}*/
    let tools_map = get_tools_map();
    let hotspot   = t_tools.t_get_tool("hotspot");

    let   num=0;
    for(let i=0; i< tools_map.length; ++i)
    {
        /* save current off-grid position {{{*/
        let map         = tools_map[i];
        let panel       =       map.panel;
        if( panel      == hotspot) continue;
        if(!panel                ) continue;

        map.x = panel.offsetLeft;
        map.y = panel.offsetTop;

        num += 1;
/*{{{
logXXX("%c"+caller+"%c "+panel.id+" %c "+map.x+" "+map.y, lbH, lbC+lf3, lbH+lf8);
}}}*/
        /*}}}*/
        /* GRID CELL col row {{{*/

        let col = 1 + parseInt((num-1) % t_cols);
        let row = 1 + parseInt((num-1) / t_rows);

        let x      = t_mw + t_gw * (col-1);
        let y      = t_mh + t_gh * (row-1)/* + t_gh * ((col-1)/10)*/;

/*{{{*/
if(log_this) log("%c "+num       +"%c col "+col+".."+t_cols+"%c row "+row+".."+t_rows+"%c"+panel.id
                 ,lbH+lfX[num % 10], lbL+lfX[col]           , lbR+lfX[row]            ,lbH         );
/*}}}*/
        /*}}}*/
        /* PANEL .. on  grid style .. show hidden panels {{{*/
        panel.classList.remove( CSS_HIDDEN  );
        panel.classList.add   ( CSS_ON_GRID );

    /*  panel.classList.add   ("select"+num ); */
        /*}}}*/
        /* PANEL .. on grid layout {{{*/
        panel.style.position     = "fixed";

        panel.style.left         = x+"px";
        panel.style.top          = y+"px";

        panel.off_grid_transform = panel.style.transform; /* save off-grid layout property */
        panel.style.transform    = "none";
        /*}}}*/
        /* CAPTION position and opacity .. f(selected) {{{*/
        let gl = grid_caption_layout(num, panel, x, y);
        gl.classList.remove("grid_caption_hide");
        gl.classList.add   ("grid_caption_show");

        grid_caption_sync_opacity(map.selected, gl);
        /*}}}*/
    }
    /* sync grid size {{{*/
    grid_sized_sync(caller);

    /*if(!grid_onresize_timer) t_grid_onresize(caller+"[repeat once]");*/

    /*}}}*/
};
/*}}}*/
/*… grid_LAYOUT_OFF {{{*/
let grid_LAYOUT_OFF = function()
{
/*{{{*/
    let caller = "grid_LAYOUT_OFF";
if(LOG_MAP.T2_GRID) log("%c "+caller,lb9+lbF);

    let tools_map = get_tools_map();
    let hotspot   = t_tools.t_get_tool("hotspot");
    if(!tools_map  ) return;
/*}}}*/

    /*let   num=0;*/
    for(let i=0; i< tools_map.length; ++i)
    {
        /* filter optional tool panels {{{*/
        let map         = tools_map[i];
        let panel       =       map.panel;
        if( panel      == hotspot) continue;
        if(!panel                ) continue;

        /*num += 1;*/
        /*}}}*/
        /* PANEL .. off grid style .. hide not selected panels {{{*/
        if(!map.selected) panel.classList.add( CSS_HIDDEN  );
        panel.classList.remove(                CSS_ON_GRID );

    /*  panel.classList.remove("select"+num); */
        /*}}}*/
        /* PANEL .. off grid layout {{{*/
        panel.style.position         = map.p     ;

        panel.style.left             = map.x+"px";
        panel.style.top              = map.y+"px";

        if(panel.off_grid_transform) {
            panel.style.transform    = panel.off_grid_transform; /* restore off-grid layout property */
            delete                     panel.off_grid_transform;
        }
        /*}}}*/
    }
    /* sync grid size {{{*/
    grid_sized_sync(caller);

    /* hide grid caption */
    grid_caption_hide_all();

    /*}}}*/
};
/*}}}*/

/* GRID MEASURE */
/*➔ t_grid_MEASURE {{{*/

let t_rows = 0;
let t_cols = 0;
let t_gw   = 0; /* grid */
let t_gh   = 0; /* grid */
let t_mw   = 0; /* margin */
let t_mh   = 0; /* margin */
let t_mg   = 0; /* margin gap */

let t_grid_MEASURE = function()
{
    let caller = "t_grid_MEASURE"; if(LOG_MAP.T2_GRID) t_log.console_log(caller);
    /* t_rows t_cols {{{*/

    let tools_map = get_tools_map();
    if(!tools_map.length) t_tools.t_load_TOOLS_MAP(caller);

    t_cols  = Math.round(Math.sqrt(tools_map.length));

    if((t_cols*t_cols) < tools_map.length  ) t_cols += 1;

    t_rows  = t_cols;

    /*}}}*/
    /* grid {{{*/
    let ww = window.innerWidth;
    let wh = window.innerHeight;

    let  cw = Math.round(ww / (t_cols+1));
    let  ch = Math.round(wh / (t_rows+1));
    if((cw == t_gw) && (ch == t_gh)) {
if(LOG_MAP.T2_GRID) t_log.console_warn(caller+": GRID UNCHANGED");
        return;
    }

    t_gw =            cw;
    t_gh =            ch;
    t_mw = Math.round(cw/2);
    t_mh = Math.round(ch/2);
    t_mg = Math.round(ch/8);

if(LOG_MAP.T2_GRID && t_grid_IS_ON_GRID(caller)) t_log.console_log(" ("+t_mw+"+ "+t_cols+"x"+t_gw+" + "+t_mw+") == "+(t_mw + t_cols*t_gw +t_mw)+" == ww= "+ww+"");
if(LOG_MAP.T2_GRID && t_grid_IS_ON_GRID(caller)) t_log.console_log(" ("+t_mh+"+ "+t_rows+"x"+t_gh+" + "+t_mh+") == "+(t_mh + t_rows*t_gh +t_mh)+" == wh= "+wh+"");
    /*}}}*/
    /* headsup_l_table {{{*/

    let msg = "<table>"
            + " <tr> <td>("+t_mw+"</td><td>+</td> <th>"+t_cols+"x<em class='cc0'>"+t_gw+"</em></th> <td>+</td> <td>"+t_mw+")</td> <td>==</td> <th class='cc4'>"+(t_mw + t_cols*t_gw +t_mw)+"</th> <td>==</td> <th class='cc5'>ww= "+ww+"</th></tr>"
            + " <tr> <td>("+t_mh+"</td><td>+</td> <th>"+t_rows+"x<em class='cc0'>"+t_gh+"</em></th> <td>+</td> <td>"+t_mh+")</td> <td>==</td> <th class='cc4'>"+(t_mh + t_rows*t_gh +t_mh)+"</th> <td>==</td> <th class='cc5'>wh= "+wh+"</th></tr>"
            + "</table>"
        ;
if(LOG_MAP.T2_GRID) log(msg);
    let el = grid_getElement("headsup_l_table");
    if( el ) el.innerHTML = msg;

    /*}}}*/
};
/*}}}*/

/* GRID CSS RULES */
/*➔ t_grid_css_list {{{*/
let t_grid_css_list = function()
{
    let caller = "t_grid_css_list"; if(LOG_MAP.T2_GRID) t_log.console_log(caller);
    /* traces open {{{*/
    let s = "<div>";
    s    += " document.styleSheets.length=["+document.styleSheets.length+"]";
    s    += " <ol>";

    /*}}}*/
    /* styleSheets {{{*/
    for(let i = 0; i < document.styleSheets.length; ++i)
    {
        let sheet    =  document.styleSheets[i];
        s           += "  <li>";
        s           += "   <ul>";
        /* title {{{*/
        if(sheet.title)
            s       += "    <li> title=["+                          sheet.title               +"]</li>";

        /*}}}*/
        /* id {{{*/
        if(sheet.ownerNode.id) {
            s       += "    <li> OWNER=<em class='cc"+(i+1) +"'>"+  sheet.ownerNode.id        +"</em></li>";
        }
        else {
            s       += "    <li> OWNER=<em class='cc"+(i+1) +"'>"+  sheet.ownerNode.tagName    +"</em></li>";
            if(sheet.href)
                s   += "    <li> href=[<a href='"+sheet.href+"'>"+  sheet.href                +"</a>]</li>";
        }

        /*}}}*/
        /* type {{{*/
        if(sheet.type != "text/css")
            s       += "    <li> type=["+                           sheet.type                +"]</li>";

        /*}}}*/
        /* disabled {{{*/
        if(sheet.disabled)
            s       += "    <li> disabled=["+                       sheet.disabled            +"]</li>";

        /*}}}*/
        /* cssRules {{{*/
        try {
            if(sheet.cssRules) {
                s       += "<li>cssRules.length=["+                 sheet.cssRules.length     +"]";
                s       += " <ol>";

                for(let j = 0; j < sheet.cssRules.length; ++j)
                    s   += " <li><em class='cc"+((j+1) % 10)+"'>"+  sheet.cssRules[j].cssText +"</em></li>";

                s       += " </ol>";
                s       += "</li>";
            }
        } catch(ex) {
            s       += "<li style='font-size:50%; color:#AAA;'>"+ex.message+"</li>";
        }
        /*}}}*/
        s           += "   </ul>";
        s           += "  </li>";
    }
    /*}}}*/
    /* traces close {{{*/
    s += " </ol>";
    s += "</div>";

    /*}}}*/
    grid_trace(s);
};
/*}}}*/
/*➔ t_grid_insertRules {{{*/
let t_grid_insertRules = function()
{
    let caller = "t_grid_insertRules";
if(LOG_MAP.T2_GRID) t_log.console_log(caller);

    if( grid_css ) t_grid_deleteRules();

    grid_get_t_grid_css();

    let s = caller+":<br>";

    if(!grid_css) {
        s += caller+": <em class='cc2'>FOUND NO grid_css styleSheet</em>";
    }
    else {

        s    += "<div>";
        s    += " <ol>";
        let count = 0;
        let r;
        r    = ".on_grid { min-width  : "+t_gw+"px; }"; s += "  <li>insertRule <em class='cc0'>"+r+"</em></li>"; grid_css.insertRule(r, 0); count += 1;
        r    = ".on_grid { min-height : "+t_gh+"px; }"; s += "  <li>insertRule <em class='cc0'>"+r+"</em></li>"; grid_css.insertRule(r, 0); count += 1;
        r    = ".on_grid { max-width  : "+t_gw+"px; }"; s += "  <li>insertRule <em class='cc0'>"+r+"</em></li>"; grid_css.insertRule(r, 0); count += 1;
        r    = ".on_grid { max-height : "+t_gh+"px; }"; s += "  <li>insertRule <em class='cc0'>"+r+"</em></li>"; grid_css.insertRule(r, 0); count += 1;
        s    += " </ol>";
        s    += "</div>";

        if(count > 0) {
            s +=  "<em class='cc"+(count % 10)+"'>"+count+" RULES INSERTED</em><br>";
        }
    }

    grid_trace_add(s);

if(LOG_MAP.T2_GRID) t_log.console_dir(caller, grid_css);
};
/*}}}*/
/*➔ t_grid_deleteRules {{{*/
let t_grid_deleteRules = function()
{
    let caller = "t_grid_deleteRules"; if(LOG_MAP.T2_GRID) t_log.console_log(caller);

    let        s  = "";
/*
               s += caller+":<br>";
               s += "grid_css.........=["+grid_css          +"]<br>";
if(grid_css) s += "grid_css.cssRules=["+grid_css.cssRules +"]<br>";
*/
    if(!grid_css || !grid_css.cssRules)
    {
        s += "<em class='cc2'>NO grid_css rules to delete</em><br>";
    }
    else {
        let count = 0;
        /* rules */
        s += "<div>";
        s += " <ol>";
        for(let i = 0; i < grid_css.cssRules.length; ++i)
        {
            if(grid_css.cssRules[i].cssText.includes(".on_grid") )
            {
                s += " <li><em class='cc0'>"+ grid_css.cssRules[i].cssText +"</em></li>";
                grid_css.deleteRule(i);
                count += 1;
                i -= 1;
            }
        }
        s += " </ol>";
        s += "</div>";

        if(count > 0) {
            s = caller+": <em class='cc"+(count % 10)+"'>"+count+" RULES DELETED</em><br>"
              + s;
        }
    }
    grid_trace(s);
};
/*}}}*/
/*➔ grid_get_t_grid_css {{{*/
const GRID_CSS_ID = "grid_css";

let grid_css;

let grid_get_t_grid_css = function()
{
    if(grid_css) return;

    let caller = "grid_get_t_grid_css";
if(LOG_MAP.T2_GRID) t_log.console_log(caller);

    let s = caller+": CREATING <em>"+GRID_CSS_ID+"</em><br>";
    let el   = document.createElement("STYLE");
    el.id    = GRID_CSS_ID;
    el.title = GRID_CSS_ID;
    el.type  = "text/css";
    el.rel   = "stylesheet";

    document.getElementsByTagName("head")[0].appendChild(el);
    grid_css = el.sheet;

    grid_trace(s);
if(LOG_MAP.T2_GRID) t_log.console_dir(caller, grid_css);
};
/*}}}*/

/* GRID LOG */
/*➔ t_grid_logging_toggle {{{*/
let t_grid_logging_toggle = function(new_state="toggle")
{
    let caller = "t_grid_logging_toggle";

    LOG_MAP.T2_GRID
    = (new_state == "toggle") ? !LOG_MAP.T2_GRID
    :                            new_state;

log("%c "+caller+": LOG_MAP.T2_GRID set to "+LOG_MAP.T2_GRID, lb7+lbF);

    t_grid_onWork_EL_changed(caller);
    t_tools.t_sync_tool_clones_state(caller);
};
/*}}}*/
/*… grid_trace {{{*/
let grid_trace = function(s)
{
    let el;
    if( el = grid_getElement("traces") ) el.innerHTML = s;
    else                                 t_log.console_log( t_util.strip_HTML(s) );
};
/*}}}*/
/*… grid_trace_add {{{*/
let grid_trace_add = function(s)
{
    let el;
    if( el = grid_getElement("traces") ) el.innerHTML += s;
    else                                 t_log.console_log( t_util.strip_HTML(s) );
};
/*}}}*/
/*… grid_getElement {{{*/
let grid_getElement = function(id)
{
/*if(LOG_MAP.T2_GRID) log("grid_getElement("+id+")");*/
    let el = null;
    let shadow_root      = t_tools.t_get_shadow_root();
    if( shadow_root ) el = shadow_root.querySelector("#"+id);
    if(!el)           el = document.getElementById  (    id);
    return el;
};
/*}}}*/

/* EXPORT */
/*{{{*/
return { name : "dom_grid"
    , logging : (state) => DOM_GRID_LOG = t_store.t_store_set_state("DOM_GRID_LOG",state)
    , tagging : (state) => DOM_GRID_TAG = t_store.t_store_set_state("DOM_GRID_TAG",state)
    ,    t_grid_IMPORT

    ,    t_grid_IS_ON_GRID
    ,    t_grid_IS_SIZED
    ,    t_grid_MEASURE
    ,    t_grid_ON_OFF_CB
    ,    t_grid_TOOLS_SELECT

    ,    t_grid_TOOLS_SELECT_panel
    ,    t_grid_add_observer_callback
    ,    t_grid_logging_toggle
    ,    t_grid_onWork_EL_changed
    ,    t_grid_onresize

    /*   dom_grid.html   */
    /*   playground.html */
    ,    t_grid_SIZE_TOGGLE
    ,    t_grid_css_list
    ,    t_grid_deleteRules
    ,    t_grid_insertRules
    ,    grid_onresize_handle

};

/*}}}*/

})();
/*
:!start explorer "https://www.smashingmagazine.com/2020/01/understanding-css-grid-container/"
*/
