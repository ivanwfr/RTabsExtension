/* dom_pod_js */
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
"use strict"; /* eslint-disable-line strict */

/* globals window, document, setTimeout, clearTimeout */
/* globals dom_log, dom_util, dom_tools */

/* exported intro_get_event_URDL_ZSPN, DOM_POD_JS_TAG */

/* eslint-disable complexity     */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable max-depth */
/* eslint-disable no-warning-comments */

const DOM_POD_JS_ID      = "dom_pod_js";
const DOM_POD_JS_TAG     = DOM_POD_JS_ID  +" (211206:17h:17)";
/*}}}*/
let   DOM_POD_LOG        = false;
let   DOM_POD_TAG        = false;

/* URDL EVENT */
/*➔ intro_get_event_URDL_ZSPN {{{*/
let intro_get_event_URDL_ZSPN = function(event)
{
if(DOM_POD_LOG) log("intro_get_event_URDL_ZSPN");

    let up    = dom_util.has_el_class(event.target, "link_U")
    let right = dom_util.has_el_class(event.target, "link_R")
    let down  = dom_util.has_el_class(event.target, "link_D")
    let left  = dom_util.has_el_class(event.target, "link_L")
    let zoom  = dom_util.has_el_class(event.target, "link_Z")
    let stop  = dom_util.has_el_class(event.target, "link_X")

    let event_URDL_ZSPN
        = { up
          , right
          , down
          , left
          , zoom
          , stop
          , prev : left
          , next : right
        };

/*{{{
dom_log.console_clear("intro_get_event_URDL_ZSPN")
log_key_val_group("intro_get_event_URDL_ZSPN", event_URDL_ZSPN, lf0, false);
log(event_URDL_ZSPN);
    let tool = dom_util.is_el_or_child_of_class(event.target, "buttons_pod");
/\<\(up\|right\|down\|left\|prev\|next\|zoom\|stop\)\>
}}}*/
    return event_URDL_ZSPN;
};
/*}}}*/
/*➔ intro_get_event_NEXT_URDL {{{*/
let intro_get_event_NEXT_URDL = function(event)
{
if(DOM_POD_LOG) log("intro_get_event_NEXT_URDL");

    let next_URDL
        = dom_util.has_el_class(event.target, "link_U") ? NEXT_U
        : dom_util.has_el_class(event.target, "link_R") ? NEXT_R
        : dom_util.has_el_class(event.target, "link_D") ? NEXT_D
        : dom_util.has_el_class(event.target, "link_L") ? NEXT_L
        :                                                 "";

/*{{{
log("%c intro_get_event_NEXT_URDL("+event.type+" , "+dom_util.get_id_or_tag_and_className(event.target)+") ...return ["+next_URDL+"]", lf6);
}}}*/
    return next_URDL;
};
/*}}}*/

/* URDL LAYOUT */
/* CALLERS: //FIXME .. tell a story about calling context {{{
// intro.html	intro_layout
}}}*/
/*➔ intro_link_URDL_init {{{*/
let intro_link_URDL_init = function()
{
if(DOM_POD_LOG) log("intro_link_URDL_init");

    let shadow_host = document.getElementById( "shadow_host" );
    let cs          = window.getComputedStyle(  shadow_host  );
    let link_URDL   = document.getElementById( "link_URDL"   );
    link_URDL.style.zIndex = parseInt(cs.zIndex) + 101;

/*{{{
log("%c link_URDL.style.zIndex=["+link_URDL.style.zIndex+"]", lbH+lf8);
}}}*/

    intro_move_EL_XY_WH(link_URDL);
};
/*}}}*/
/* CALLERS: //FIXME .. tell a story about calling context {{{
// intro.html	intro_layout
// intro.html	intro_onDown
// intro.html	intro_onClick
}}}*/
/*➔ intro_link_URDL_layout {{{*/
/*{{{*/
const INTRO_LINK_URDL_LAYOUT_DELAY = 250;

let intro_link_URDL_layout_timeout;
/*}}}*/
let intro_link_URDL_layout = function()
{

    if(intro_link_URDL_layout_timeout)  clearTimeout(intro_link_URDL_layout_timeout);
       intro_link_URDL_layout_timeout =   setTimeout(intro_link_URDL_layout_handler, INTRO_LINK_URDL_LAYOUT_DELAY);
};
/*}}}*/
/*_ intro_link_URDL_layout_handler {{{*/
let intro_link_URDL_layout_handler = function()
{
/*{{{*/
let caller = "intro_link_URDL_layout_handler";
let log_this = DOM_POD_LOG;

/*}}}*/
    intro_link_URDL_layout_timeout = null;

    let link_URDL          = document.getElementById("link_URDL");
    let cell_div_magnified = get_cell_div_magnified();
    let cell_div           =     cell_div_magnified || fullscreen_cell_div;

    let grid_first_row     = cell_div && dom_util.has_el_class( cell_div, "grid_first_row");
    let grid_row_0         = cell_div && dom_util.has_el_class( cell_div, "grid_row_0"    );
    let grid_row_1         = cell_div && dom_util.has_el_class( cell_div, "grid_row_1"    );
    let grid_row_2         = cell_div && dom_util.has_el_class( cell_div, "grid_row_2"    );
    let grid_row_3         = cell_div && dom_util.has_el_class( cell_div, "grid_row_3"    );
    let grid_row_4         = cell_div && dom_util.has_el_class( cell_div, "grid_row_4"    );
    let grid_last_row      = cell_div && dom_util.has_el_class( cell_div, "grid_last_row" );

    let grid_left          = cell_div && dom_util.has_el_class( cell_div, "grid_left"     );
    let grid_center        = cell_div && dom_util.has_el_class( cell_div, "grid_center"   );
    let grid_right         = cell_div && dom_util.has_el_class( cell_div, "grid_right"    );
    let grid_off           =                                   !cell_div;

/*{{{
log(caller+":%c grid_off=["+grid_off+"]" +(cell_div ? (" cell_div=["+dom_util.get_n_lbl(cell_div)+"]") : ""), lbH+lfX[cell_div ? 4:8]);
}}}*/

    dom_util.set_el_class_on_off(link_URDL, "grid_first_row", grid_first_row);
    dom_util.set_el_class_on_off(link_URDL, "grid_row_0"    , grid_row_0    );
    dom_util.set_el_class_on_off(link_URDL, "grid_row_1"    , grid_row_1    );
    dom_util.set_el_class_on_off(link_URDL, "grid_row_2"    , grid_row_2    );
    dom_util.set_el_class_on_off(link_URDL, "grid_row_3"    , grid_row_3    );
    dom_util.set_el_class_on_off(link_URDL, "grid_row_4"    , grid_row_4    );
    dom_util.set_el_class_on_off(link_URDL, "grid_last_row" , grid_last_row );

    dom_util.set_el_class_on_off(link_URDL, "grid_left"     , grid_left     );
    dom_util.set_el_class_on_off(link_URDL, "grid_center"   , grid_center   );
    dom_util.set_el_class_on_off(link_URDL, "grid_right"    , grid_right    );
    dom_util.set_el_class_on_off(link_URDL, "grid_off"      , grid_off      );

    /* TOOLTIP */
    link_URDL.title = link_URDL.className;

/*{{{*/
if(log_this)
    log_key_val_group(caller
        , { fullscreen_cell_div
          , cell_div_magnified
          , cell_div
          , link_URDL      : dom_util.get_id_or_tag_and_className(link_URDL)
          , className      : link_URDL.className
          , grid_first_row
          , grid_last_row
          , grid_left
          , grid_center
          , grid_right
          , grid_row_0
          , grid_row_1
          , grid_row_2
          , grid_row_3
          , grid_row_4
          , grid_off
        }
        , lf8, true);
/*}}}*/
};
/*}}}*/

/* IS */
/* CALLERS: //FIXME .. tell a story about calling context {{{
// intro.html	intro_onMove
// intro.html	intro_move_EL_XY_WH
// intro.html	intro_move_RESCALE_handler
// intro.html	intro_onUp
// intro.html	intro_move_pods_cluster
}}}*/
/*➔ intro_el_is_link_URDL {{{*/
let intro_el_is_link_URDL = function(el)
{
    return (el.id == "link_URDL");
};
/*}}}*/
/* CALLERS: //FIXME .. tell a story about calling context {{{
// intro.html	intro_onClick4_fullscreen_next_URDL
// intro.html	intro_onClick3_fullscreen_next_URDL_event_target
}}}*/
/*➔ intro_el_is_link_X {{{*/
let intro_el_is_link_X = function(el)
{
    return dom_util.has_el_class(el, "link_X");
};
/*}}}*/

/* URDL moving_target */
/* CALLERS: //FIXME .. tell a story about calling context {{{
// intro.html	intro_onDown
}}}*/
/*➔ intro_link_onDown_moving_target {{{*/
let intro_link_onDown_moving_target = function(event)
{
/*{{{*/
let   caller = "intro_link_onDown_moving_target";
let log_this = DOM_POD_LOG;

let tag_this = DOM_POD_TAG || log_this;
if( tag_this) log(caller+": %c("+event.type+" ON "+dom_util.get_id_or_tag_and_className(event.target)+")", lf1);
/*}}}*/
    /* [link_URDL] or [buttons_pod] {{{*/
    let el = event.target;
    let moving_target
        =  dom_util.get_el_parent_with_id   (el, "link_URDL")
        || dom_util.get_el_parent_with_class(el, "buttons_pod");

    if(!moving_target ) return null;

    /* transformOrigin drift towards view center */

    let event_xy = dom_util.get_event_XY(event);
    let    el_xy = dom_util.get_el_xy   (el, caller);

    let fontSize = parseFloat( el.style.fontSize );
    let scale    = fontSize / FONTSIZE_DEFAULT;
    let       dx = (event_xy.x - el_xy.x) /* / scale*/;
    let       dy = (event_xy.y - el_xy.y) /* / scale*/;


    let x_percent = (100 * dx / el.offsetWidth ).toFixed(2);
    let y_percent = (100 * dy / el.offsetHeight).toFixed(2);
    el.style.transformOrigin = x_percent+"% "+ y_percent+"%";

/* [transformOrigin] is not used when [fontSize] does the scaling //FIXME */
if(log_this)
    log("%c fontSize=["+el.style.fontSize+"] .. transformOrigin=["+el.style.transformOrigin+"]", lbH+lf8);

/*{{{
    log_key_val_group( caller
        , {     moving_target
           ,    event_xy
           ,    el_xy
           ,    dx
           ,    dy
           ,    fontSize
           ,    scale
        }, lf4, false);
}}}*/

    /*}}}*/
    return moving_target;
};
/*}}}*/

/* URDL ZOOMED ADD */
/* CALLERS: //FIXME .. tell a story about calling context {{{
// intro.html	        intro_load_zoomed_node_path
// intro.html	        intro_layout
// intro.html	        intro_onDown2_zoomed
// intro.html	        intro_onClick3_fullscreen_drag_URDL
// script/dom_pod.js	intro_zoomed1_add
}}}*/
/*➔ intro_zoomed1_add {{{*/
/*{{{*/
const INTRO_ZOOMED2_MOVE_DELAY = 500;
let intro_zoomed2_move_timeout;

let intro_deploy_buttons_pod_timeout;
/*}}}*/
let intro_zoomed1_add = function(el)
{
/*{{{*/
let   caller = "intro_zoomed1_add";
let log_this = DOM_POD_LOG;

let tag_this = DOM_POD_TAG || log_this;
if( tag_this) log("%c"+caller+": el=["+dom_util.get_node_path(el)+"]", lb1);
/*}}}*/
    /* CANCEL PENDING SCROLL TIMOUT {{{*/
    dom_tools.t_scrollIntoViewIfNeeded_cancel(caller);

    /*}}}*/
    /* CLEAR PENDING [zoomed_el] {{{*/
    let zoomed_el = document.body.querySelector(".zoomed");
    if( zoomed_el )
        intro_zoomed6_del(zoomed_el);

    /*}}}*/
    /* INSERT PLACE HOLDER CLONE (HIDDEN) .. TO AVOID REFLOW {{{*/
    let zoomed_clone  = document.getElementById("zoomed_clone");

    if( zoomed_clone  && (zoomed_clone.zoomed_src != el))
    {
        intro_zoomed6_del(zoomed_clone);

        zoomed_clone = null;
    }

    if(!zoomed_clone) 
    {
        zoomed_clone            = el.cloneNode( true ); // deep-copy
        zoomed_clone.zoomed_src = el;
        zoomed_clone.id         = "zoomed_clone";
    }
    /*}}}*/
    /* DIMM BACKGROUND ELEMENTS {{{*/
    let dimm_mask = document.getElementById("dimm_mask");
        dimm_mask.style.display = "block";

    /*}}}*/ 
    /* MOVE IN PLACE .. (transition start location) {{{*/
    let cr = el.getBoundingClientRect();

    el.style.top  = cr.top +"px";
    el.style.left = cr.left+"px";
    /*}}}*/
/*{{{*/
/*
    let csp       = window.getComputedStyle( el.parentElement );

dom_log.log_key_val_group(caller
    , { window_innerWidth : window.innerWidth
      ,    el_offsetWidth : el.offsetWidth
      ,         bcr_width : bcr.width
      ,             scale : scale
      ,     el_style_left : el.style.left
      ,            PARENT : "--------------------------------"
      ,   csp__marginLeft : csp. marginLeft
      ,   csp_paddingLeft : csp.paddingLeft
      ,   csp__borderLeft : csp. borderLeft
    }, lf7, false);

dom_log.console_dir("csp", csp);

el=document.body.querySelector(".magnified.fullscreen .fullscreen_only"); intro_zoomed1_add(el);

*/
/*}}}*/
    /* MOVE TO ZOOMED LOCATION .. (once [MOVE IN PLACE] has been commited) {{{*/
    setTimeout(function() { intro_zoomed2_move(el, zoomed_clone); }, 0);
/*
    el.ontransitionend = function(event)
    {
log("el.ontransitionend "+event.propertyName);

        if(intro_zoomed2_move_timeout)  clearTimeout(             intro_zoomed2_move_timeout);
           intro_zoomed2_move_timeout =   setTimeout(function() { intro_zoomed2_move(el, zoomed_clone); }, INTRO_ZOOMED2_MOVE_DELAY);
    };
*/
    /*}}}*/
};
/*}}}*/
/*_ intro_zoomed2_move {{{*/
const ZOOMED_MARGIN    = 92;
const SCROLLBAR_MARGIN = 32;

let intro_zoomed2_move = function(el, zoomed_clone)
{
/*{{{*/
let   caller = "intro_zoomed2_move";
let log_this = DOM_POD_LOG;

    intro_zoomed2_move_timeout = null;
let tag_this = DOM_POD_TAG || log_this;
if( log_this) dom_log.console_clear(caller);
if( tag_this) log("%c"+caller+": el=["+dom_util.get_node_path(el)+"]", lb2);
/*}}}*/
    /* INSERT PLACEHOLDER [zoomed_clone] {{{*/
    let link_URDL = document.getElementById("link_URDL");

    dom_util.add_el_class(link_URDL       ,"zoomed_child");
    dom_util.add_el_class(el.parentElement,"zoomed_child");
    /*}}}*/
    /* INJECT ZOOMED PLACEHOLDER {{{*/
    if(!zoomed_clone.parentElement)
        el.parentElement.insertBefore(zoomed_clone, el.nextElementSibling);
/*
dom_log.console_dir("zoomed_clone", zoomed_clone)
log("%c zoomed_clone.parentElement=["+zoomed_clone.parentElement+"]", lbH+lf8)
*/
    /*}}}*/
    /* MOVE ZOOMED .. (with transition from [MOVE IN PLACE]) {{{*/
    dom_util.add_el_class(el              ,"zoomed"      );
    let cs         = window.getComputedStyle   ( el ); /* transition from current location */
//  let bcr        = el.getBoundingClientRect  (    );

//{{{
//  let zoomed_top = ( cs.top  - parseInt(cs.marginTop ));
//  log("%c cs.top=["+cs.top+"] .. cs.marginTop=["+cs.marginTop+"] .. zoomed_top=["+zoomed_top+"]", lbH+lf8)
//  let zoomed_top =  bcr.top;
//  log("%cbcr.top=["+cs.top+"] .. zoomed_top=["+zoomed_top+"]", lbH+lf8)
//}}}

    let   w_w      = window.innerWidth;
    let   e_w      = el.offsetWidth;
    let   e_h      = el.offsetHeight;
    let max_w      = window.innerWidth  - 2*ZOOMED_MARGIN;
    let max_h      = window.innerHeight - 2*ZOOMED_MARGIN;

//  let scale      = Math.min( (max_w / bcr.width) , (max_h / bcr.height));
//  let scale      =           (max_w / bcr.width);
//  let scale      =         (   0.8 * max_w / e_w).toFixed(1);
    let scale      = Math.min(2, 0.8 * max_w / e_w).toFixed(1);

//  let   z_w      = Math.min(max_w, bcr.width  * scale);
//  let   z_h      = Math.min(max_h, bcr.height * scale);
    let   z_w      = Math.min(max_w, e_w        * scale + SCROLLBAR_MARGIN);
    let   z_h      = Math.min(max_h, e_h        * scale + SCROLLBAR_MARGIN);


    let   z_t      = ZOOMED_MARGIN;
    let   z_l      = (w_w / 2) - (z_w / 2);

//{{{
//  el.style.left  = (bcr.left - parseInt(cs.marginLeft))+"px";
//  el.style.left  = "0px";
//  el.style.left  = (window.innerWidth/2 - bcr.width / 2                              )+"px";
//  el.style.left  = (window.innerWidth/2 - bcr.width / 2 - parseInt(el.parentElement.style.marginLeft))+"px";
//}}}

    el.style.transform = "scale("+scale+")";
    el.style.top       = z_t   +"px";
    el.style.left      = z_l   +"px";
    el.style.maxHeight = max_h +"px";
    el.style.maxWidth  = max_w +"px";
    el.style.width     = (z_w / scale)+"px";
    el.style.height    = (z_h / scale)+"px";

if( log_this)
    log_key_val_group(  caller
                      , { cs
                        , cs_fontSize : cs.fontSize
                      //, bcr
                        , w_w
                        , e_w
                        , max_w
                        , max_h
                        , scale
                        , z_t
                        , z_l
                        , z_w
                        , z_h
                      }
                      , lf7, false);

    /*}}}*/
    /* SCROLL WINDOW TO TOP {{{*/
    dom_tools.t_window_scrollTo(0,0, "smooth");

    /*}}}*/
    /* PLACE URDL BUTTONS {{{*/
    intro_zoomed3_buttons(el);

    /*}}}*/
};
/*}}}*/
/*_ intro_zoomed3_buttons {{{*/
const INTRO_DEPLOY_BUTTONS_POD_DELAY =  250;

let intro_zoomed3_buttons = function(el)
{
/*{{{*/
let   caller = "intro_zoomed3_buttons";
let log_this = DOM_POD_LOG;

let tag_this = DOM_POD_TAG || log_this;
if( tag_this) log("%c"+caller+": el=["+dom_util.get_node_path(el)+"]", lb3);
/*}}}*/
    /* [has_prev] [has_next] {{{*/
    let ze
        = document.getElementById("zoomed_clone");

    let has_next
        =  dom_util.has_el_class( ze.nextElementSibling     , "fullscreen_only")
        || dom_util.has_el_class(  el.nextElementSibling    , "fullscreen_off" );

    let has_prev
        =  dom_util.has_el_class(  el.previousElementSibling, "fullscreen_only")
        || dom_util.has_el_class(  el.previousElementSibling, "fullscreen_off" );

    /*}}}*/
    /* UPDATE [link_URDL] CONTENT {{{*/
    let link_URDL = document.getElementById("link_URDL");
    dom_util.set_el_class_on_off( link_URDL, "no_prev", !has_prev);
    dom_util.set_el_class_on_off( link_URDL, "no_next", !has_next);
    dom_util.set_el_class_on_off( el       , "no_prev", !has_prev);
    dom_util.set_el_class_on_off( el       , "no_next", !has_next);

/*{{{
dom_log.log_key_val_group(caller
    ,{ el
     , has_prev
     , has_next
     , link_URDL
     , el
    }, lf7, false);
}}}*/
    /*}}}*/
    /* DETACH BUTTONS {{{*/
    intro_zoomed4_buttons_unfix (link_URDL    );

    /*}}}*/
    /* DEPLOY BUTTONS .. f(layout transition ended) {{{*/
    el.ontransitionend = function(event)
    {
/*
      //if(event.propertyName != "transform") return;
log("%c ontransitionend "+ event.propertyName.toUpperCase(), lf7);
*/
        /* DELAY DEPLOYMENT */
        if(intro_deploy_buttons_pod_timeout) clearTimeout(         intro_deploy_buttons_pod_timeout);
        intro_deploy_buttons_pod_timeout = setTimeout(function() { intro_zoomed5_buttons_deploy(el, event.propertyName.toUpperCase()); }, INTRO_DEPLOY_BUTTONS_POD_DELAY);
    };
    /*}}}*/
};
/*}}}*/
/*_ intro_zoomed4_buttons_unfix {{{*/
let intro_zoomed4_buttons_unfix = function()
{
/*{{{*/
let   caller = "intro_zoomed4_buttons_unfix";
let log_this = DOM_POD_LOG;

let tag_this = DOM_POD_TAG || log_this;
if( tag_this) log("%c"+caller, lb4);
/*}}}*/
    if(intro_refix_buttons_pod_timeout)
        clearTimeout( intro_refix_buttons_pod_timeout );

    /* from last to first .. preserves grid-layout while removing child from its container */
    let link_URDL = document.getElementById("link_URDL");
    Array.from( link_URDL.children ).reverse().forEach(
        el => {
            dom_util.t_set_position_fixed(el);
        });
};
/*}}}*/
/*_ intro_zoomed5_buttons_deploy {{{*/
let intro_zoomed5_buttons_deploy = function(el,_caller)
{
/*{{{*/
let caller = "intro_zoomed5_buttons_deploy";
let log_this = DOM_POD_LOG;

let tag_this = DOM_POD_TAG || log_this;
if( tag_this) log("%c"+caller+": "+ _caller, lb5);
/*}}}*/
    /* SET DEPLOY HANDLED {{{*/
    intro_deploy_buttons_pod_timeout = null;

    el.ontransitionend               = null;
    /*}}}*/ 
    /* [el] GEOMETRY {{{*/
    let            xy   = dom_util.get_el_xy(el, caller);
    let         scale   = dom_util.t_get_panel_scale(el);
    let             w   = el.offsetWidth  * scale;
    let             h   = el.offsetHeight * scale;

    /*}}}*/
    /* [link_URDL] LAYOUT {{{*/
    let link_URDL = document.getElementById("link_URDL");
    let        link_U   = link_URDL.querySelector(".link_U");
    link_U.style.top    = (xy.y + h/2) +"px";
    link_U.style.left   = (xy.x + w/2) +"px";

    let        link_L   = link_URDL.querySelector(".link_L");
//  link_L.style.top    = (xy.y + h/2 - link_L.offsetHeight / 2) +"px";
    link_L.style.top    = (xy.y                                ) +"px";
    link_L.style.left   = (xy.x       - link_L.offsetWidth     ) +"px";
    link_L.style.height =       h    +"px";

    let        link_R   = link_URDL.querySelector(".link_R");
//  link_R.style.top    = (xy.y + h/2) +"px";
    link_R.style.top    = (xy.y      ) +"px";
    link_R.style.left   = (xy.x + w  ) +"px";
    link_R.style.height =       h    +"px";

    let        link_X   = link_URDL.querySelector(".link_X");
    link_X.style.top    = (xy.y + h  ) +"px";
//  link_X.style.left   = (xy.x + w/2) +"px";
    link_X.style.left   = (xy.x      ) +"px";
    link_X.style.width  =         w    +"px";

    let        link_D   = link_URDL.querySelector(".link_D");
    link_D.style.top    = (xy.y + h/2) +"px";
    link_D.style.left   = (xy.x + w/2) +"px";

    /*}}}*/
/*{{{
    log_key_val_group(caller
     , { xy
     ,   w
     ,   h
     }, lf4, false);

    let pos_array
        =[ { name: "U" , x:xy.x + w/2 , y: xy.y       }
         , { name: "L" , x:xy.x       , y: xy.y + h/2 }
         , { name: "X" , x:xy.x       , y: xy.y + h   }
         , { name: "R" , x:xy.x + w   , y: xy.y + h/2 }
         , { name: "D" , x:xy.x + w/2 , y: xy.y + h   }
         ];

    let i=0;
    Array.from( link_URDL.children ).forEach(
        el => {
            el.style.top  = pos_array[i].x +"px";
            el.style.left = pos_array[i].y +"px";
            i += 1;
        });
}}}*/
};
/*}}}*/

/* URDL ZOOMED DEL */
/* CALLERS: //FIXME .. tell a story about calling context {{{
// intro.html	        intro_layout
// intro.html	        intro_onDown2_zoomed
// intro.html	        intro_stacked_set
// intro.html	        intro_stacked_reset
// intro.html	        intro_onClick3_fullscreen_drag_URDL
// intro.html	        intro_onClick3_fullscreen_drag_URDL
// script/dom_pod.js	intro_zoomed1_add
}}}*/
/*➔ intro_zoomed6_del {{{*/
/*{{{*/
const INTRO_REFIX_BUTTONS_POD_DELAY = 100;

let   intro_refix_buttons_pod_timeout;
/*}}}*/
let intro_zoomed6_del = function(zommed_clone_or_src)
{
/*{{{*/
let   caller = "intro_zoomed6_del";
let log_this = DOM_POD_LOG;

let tag_this = DOM_POD_TAG || log_this;
if( tag_this) log("%c"+caller+": zommed_clone_or_src=["+dom_util.get_node_path(zommed_clone_or_src)+"]", lb6);
/*}}}*/
    /* REMOVE [zoomed_clone] {{{*/
    let zoomed_clone
        = (zommed_clone_or_src.id == "zoomed_clone") ? zommed_clone_or_src                      /* argument */
        :                                              document.getElementById("zoomed_clone"); /* lingering [zoomed_clone] */

    if(zoomed_clone && zoomed_clone.parentElement)
        zoomed_clone.parentElement.removeChild(zoomed_clone);

    /*}}}*/
    /* GET [zoomed_src] {{{*/
    let zoomed_src
        = (zommed_clone_or_src.id != "zoomed_clone") ? zommed_clone_or_src                      /* argument */
        : (zoomed_clone.zoomed_src                 ) ? zoomed_clone.zoomed_src                  /* assocated [zoomed_src] */
        :                                              document.getElementById("zoomed");       /* lingering [zoomed] */
    ;

    if(!zoomed_src) return;

    /*}}}*/
    /* CLEAR [zoomed_src] STYLE {{{*/
    let link_URDL = document.getElementById("link_URDL");
    dom_util.del_el_class(zoomed_src              ,"zoomed"      );
    dom_util.del_el_class(zoomed_src.parentElement,"zoomed_child");
    dom_util.del_el_class(link_URDL       ,"zoomed_child");
    /*.................*/ zoomed_src.style.maxHeight =         "" ;
    /*.................*/ zoomed_src.style.maxWidth  =         "" ;

    /*}}}*/
    /* clear [MOVE IN PLACE] location {{{*/
    zoomed_src.style.left      = "";
    zoomed_src.style.top       = "";
    zoomed_src.style.transform = "";
    zoomed_src.style.maxHeight = "";
    zoomed_src.style.maxWidth  = "";
    zoomed_src.style.width     = "";
    zoomed_src.style.height    = "";

    /*}}}*/
    /* SHOW BACKGROUND ELEMENTS {{{*/
    let dimm_mask = document.getElementById("dimm_mask");
        dimm_mask.style.display = "none";

    /*}}}*/ 
    /* RESET BUTTONS CONTENT [ok/no prev] [ok/no next] {{{*/
    dom_util.del_el_class(   link_URDL, "ok_prev");
    dom_util.del_el_class(   link_URDL, "ok_next");
    dom_util.del_el_class(   link_URDL, "no_prev");
    dom_util.del_el_class(   link_URDL, "no_next");

    dom_util.del_el_class(   zoomed_src       , "ok_prev");
    dom_util.del_el_class(   zoomed_src       , "ok_next");
    dom_util.del_el_class(   zoomed_src       , "no_prev");
    dom_util.del_el_class(   zoomed_src       , "no_next");

    /*}}}*/
    if(intro_refix_buttons_pod_timeout) clearTimeout( intro_refix_buttons_pod_timeout );
    intro_refix_buttons_pod_timeout = setTimeout(function() { intro_zoomed7_buttons_refix( link_URDL ); }, INTRO_REFIX_BUTTONS_POD_DELAY);
};
/*}}}*/
/*_ intro_zoomed7_buttons_refix {{{*/
let intro_zoomed7_buttons_refix = function()
{
/*{{{*/
let   caller = "intro_zoomed7_buttons_refix";
let log_this = DOM_POD_LOG;  // --------------------------------------------

let tag_this = DOM_POD_TAG || log_this;
if( tag_this) log("%c"+caller, lb7);
/*}}}*/

    let link_URDL = document.getElementById("link_URDL");

    Array.from( link_URDL.children ).forEach(
        child => {
            dom_util.t_del_position_fixed(child);
        });
};
/*}}}*/

