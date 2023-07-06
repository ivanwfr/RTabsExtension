/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_tools                                                                │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
/* eslint-disable no-redeclare */

/* globals window, document, navigator */
/* globals console, localStorage, setTimeout, clearTimeout, setInterval, clearInterval */
/* globals Node, requestAnimationFrame, cancelAnimationFrame */
/* globals getComputedStyle */

/* globals DOM_DATA_JS_TAG     */
/* globals DOM_DETAILS_JS_TAG  */
/* globals DOM_FLY_JS_TAG      */
/* globals DOM_GRID_JS_TAG     */
/* globals DOM_GUTTER_JS_TAG   */
/* globals DOM_HIDE_JS_TAG     */
/* globals DOM_I18N_JS_TAG     */
/* globals DOM_IPC_JS_TAG      */
/* globals DOM_LOAD_ID         */
/* globals DOM_LOAD_TAG        */
/* globals DOM_LOG_JS_TAG      */
/* globals DOM_POPUP_JS_TAG    */
/* globals DOM_PROP_JS_TAG     */
/* globals DOM_SEEK_JS_TAG     */
/* globals DOM_SELECT_JS_TAG   */
/* globals DOM_SENTENCE_JS_TAG */
/* globals DOM_SHARE_JS_TAG    */
/* globals DOM_SLOT_JS_TAG     */
/* globals DOM_STICKY_JS_TAG   */
/* globals DOM_STORE_JS_TAG    */
/* globals DOM_TOOLS_CSS_TAG   */
/* globals DOM_UTIL_JS_TAG     */
/* globals DOM_VIEW_JS_TAG     */
/* globals DOM_WORDING_JS_TAG  */
/* globals DOM_WOT_JS_TAG      */

/*┌─────── DOM MODULES ──────────────────────────────────────────────────────┐*/
/* globals dom_data,    dom_details, dom_fly,    dom_grid,     dom_gutter     */
/* globals dom_hide,    dom_i18n,    dom_ipc,    dom_log,      dom_popup      */
/* globals dom_prop,    dom_seek,    dom_select, dom_sentence, dom_share      */
/* globals dom_slot,    dom_sticky,  dom_store,  dom_util,     dom_view       */
/* globals dom_wording, dom_wot                                               */
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* exported dom_scroll */

/*┌─────── OPTIONAL CALLBACKS─┐*/
/* globals dom_prop_notify     */
/* globals playground_prop_CB  */
/*└───────────────────────────┘*/

/* eslint-enable  no-redeclare */

/* eslint-disable no-unused-vars */
/* eslint-disable complexity     */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable max-depth */
/* eslint-disable no-warning-comments */

const DOM_TOOLS_JS_ID       = "dom_tools_js" ;
const DOM_TOOLS_JS_TAG      = DOM_TOOLS_JS_ID   +" (230706:21h:58)";
/*}}}*/
let dom_tools   = (function() {
"use strict";

/* IMPORT {{{*/
/*➔ t_tools_IMPORT {{{*/
/*{{{*/
let t_data     = {}        ;    /* 05 */
/*....................................*/
let t_log      = {}        ;    /* 06 */
let t_popup    = {}        ;    /* 07 */
let t_util     = {}        ;    /* 08 */
let t_i18n     = {}        ;    /* 09 */
let t_prop     = {}        ;    /* 10 */
/* ...................................*/
let t_store    = {}        ;    /* 11 */
let t_fly      = {}        ;    /* 12 */
let t_wording  = {}        ;    /* 13 */
let t_select   = {}        ;    /* 14 */
let t_slot     = {}        ;    /* 15 */
/* ...................................*/
let t_hide     = {}        ;    /* 16 */
let t_view     = {}        ;    /* 17 */
let t_sticky   = {}        ;    /* 18 */
let t_seek     = {}        ;    /* 19 */
let t_share    = {}        ;    /* 20 */
/* ...................................*/
let t_details  = {}        ;    /* 21 */
let t_wot      = {}        ;    /* 22 */
let t_sentence = {}        ;    /* 23 */
let t_grid     = {}        ;    /* 24 */
let t_gutter   = {}        ;    /* 25 */
/* ...................................*/
let t_ipc      = {}        ;    /* 26 */
/*➔ t_tools    = {}        ; */ /* 27 */
/*....................................*/
/*}}}*/
let t_tools_IMPORT  = function(log_this)
{
/* t_data .. t_tools {{{*/
/* ...................................*/
                                         t_data    = dom_data    ;    /* 05 */
                                     /* ........................ ...........*/
if(typeof dom_log     != "undefined")    t_log     = dom_log     ;    /* 06 */
if(typeof dom_popup   != "undefined")    t_popup   = dom_popup   ;    /* 07 */
if(typeof dom_util    != "undefined")    t_util    = dom_util    ;    /* 08 */
if(typeof dom_i18n    != "undefined")    t_i18n    = dom_i18n    ;    /* 09 */
if(typeof dom_prop    != "undefined")    t_prop    = dom_prop    ;    /* 10 */
                                     /* ........................ ...........*/
if(typeof dom_store   != "undefined")    t_store   = dom_store   ;    /* 11 */
if(typeof dom_fly     != "undefined")    t_fly     = dom_fly     ;    /* 12 */
if(typeof dom_wording != "undefined")    t_wording = dom_wording ;    /* 13 */
if(typeof dom_select  != "undefined")    t_select  = dom_select  ;    /* 14 */
if(typeof dom_slot    != "undefined")    t_slot    = dom_slot    ;    /* 15 */
                                     /* ........................ ...........*/
if(typeof dom_hide    != "undefined")    t_hide    = dom_hide    ;    /* 16 */
if(typeof dom_view    != "undefined")    t_view    = dom_view    ;    /* 17 */
if(typeof dom_sticky  != "undefined")    t_sticky  = dom_sticky  ;    /* 18 */
if(typeof dom_seek    != "undefined")    t_seek    = dom_seek    ;    /* 19 */
if(typeof dom_share   != "undefined")    t_share   = dom_share   ;    /* 20 */
                                     /* ........................ ...........*/
if(typeof dom_details != "undefined")    t_details = dom_details ;    /* 21 */
if(typeof dom_wot     != "undefined")    t_wot     = dom_wot     ;    /* 22 */
if(typeof dom_sentence!= "undefined")    t_sentence= dom_sentence;    /* 23 */
if(typeof dom_grid    != "undefined")    t_grid    = dom_grid    ;    /* 24 */
if(typeof dom_gutter  != "undefined")    t_gutter  = dom_gutter  ;    /* 25 */
                                     /* ........................ ...........*/
if(typeof dom_ipc     != "undefined")    t_ipc     = dom_ipc     ;    /* 26 */
                                     /*➔ t_tools   = dom_tools   ; */ /* 27 */
/* ...................................*/
/*}}}*/
    tools_INTERN();
    /* MODULE LOGGING TAGGING {{{*/
    DOM_TOOLS_LOG = DOM_TOOLS_LOG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_TOOLS_LOG"));
    DOM_TOOLS_TAG = DOM_TOOLS_TAG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_TOOLS_TAG"));

    /*}}}*/
if(log_this) log("%c 22 tools", lbH+lf2);
};
/*}}}*/
/*…   tools_INTERN {{{*/
/*{{{*/

/* t_data */
let LF = String.fromCharCode(10);
let CSS_CC1, CSS_CC2, CSS_CC3, CSS_CC4, CSS_CC5, CSS_CC6, CSS_CC7, CSS_CC8, CSS_CC9, CSS_CC0;

/* t_log */
let LOG_MAP;

let lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;

let log, logBIG, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;

/* t_util */
let add_el_class;
let del_el_class;
let get_event_XY;
let get_id_or_tag;
let get_id_or_tag_and_className;
let get_n_lbl;
let has_el_class;
let set_el_class;
let set_el_class_on_off;
let set_el_class_removing;
let t_get_event_target;

/* t_i18n */
let i18n_get;

/* t_prop */
let prop;

/*}}}*/
let   tools_INTERN = function()
{
    /* t_data {{{*/
    LF = t_data.LF;
    [ CSS_CC1, CSS_CC2, CSS_CC3, CSS_CC4, CSS_CC5, CSS_CC6, CSS_CC7, CSS_CC8, CSS_CC9, CSS_CC0 ] = t_data.CCX_CLASSLIST;

    /*}}}*/
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
    /* t_prop {{{*/
    prop = t_prop;

    /*}}}*/
    /* t_util {{{*/
    add_el_class                = t_util.add_el_class;
    del_el_class                = t_util.del_el_class;
    get_event_XY                = t_util.get_event_XY;
    get_id_or_tag               = t_util.get_id_or_tag;
    get_id_or_tag_and_className = t_util.get_id_or_tag_and_className;
    get_n_lbl                   = t_util.get_n_lbl;
    has_el_class                = t_util.has_el_class;
    set_el_class                = t_util.set_el_class;
    set_el_class_on_off         = t_util.set_el_class_on_off;
    set_el_class_removing       = t_util.set_el_class_removing;
    t_get_event_target          = t_util.t_get_event_target;

    /*}}}*/
    /* t_i18n {{{*/
    i18n_get            = t_i18n.i18n_get;

    /*}}}*/
    tools_DEPEND();
};
/*}}}*/
/*…   tools_DEPEND {{{*/
/*{{{*/
/* t_data {{{*/
let DIV_MAGNIFY;
let T_ONCLICK_DELAY;

/*}}}*/
/* TOOL_SET {{{*/
let TOOL_SET;
let TOOL_SET1_WORD;
let TOOL_SET2_SEEK;
let TOOL_SET3_HIDE;
let TOOL_SET4_PLAY;
let TOOL_SET5_MORE;
/*}}}*/
/* DELAY {{{*/
let LONG_PRESS_ARM_DELAY;
let LONG_PRESS_DELAY;
/*}}}*/
/*}}}*/
let   tools_DEPEND = function()
{

/* t_data {{{*/
    DIV_MAGNIFY     = "<em class='button_magnify' title='magnify'>"+ t_data.SYMBOL_MAGNIFY_LEFT +"</em>";
    T_ONCLICK_DELAY = t_data.CLICK_DURATION;

    WORDS_CLASSLIST
        = [ t_data.WORDS_EXACT
        ,   t_data.WORDS_SEGMENT
        ,   t_data.WORDS_HEAD_TAIL
    ];

/*}}}*/
/*  TOOL_SET BUNDLE {{{*/
    TOOL_SET1_WORD /*{{{*/
    = [   { dom_load_id : "dom_find"   , panel_id : "headsup_w"     } /* wording exact segment ...   */

/*{{{
        , { dom_load_id : "dom_find"   , panel_id : "headsup"       }
        , { dom_load_id : "dom_find"   , panel_id : "test_panel"    }
        , { dom_load_id : "dom_find"   , panel_id : "pat_bag"       }
}}}*/
    ];
/*}}}*/
    TOOL_SET2_SEEK = /*{{{*/
    [     { dom_load_id : ""           , panel_id : "seeker_CU"     }
        , { dom_load_id : ""           , panel_id : "seeker_CD"     }
        , { dom_load_id : ""           , panel_id : "seekspot_A"    }
        , { dom_load_id : ""           , panel_id : "seekspot_U"    }
        , { dom_load_id : ""           , panel_id : "seekspot_D"    }
        , { dom_load_id : ""           , panel_id : "seekzone"      }
    ];

/*}}}*/
    TOOL_SET3_HIDE /*{{{*/
    = [   { dom_load_id : "dom_hide"   , panel_id : "headsup"       } /* options                               */
        , { dom_load_id : "dom_hide"   , panel_id : "headsup_ds"    } /* tools trap & scroll                   */
        , { dom_load_id : "dom_hide"   , panel_id : "dev_log_map"   } /* LOG_MAP                               */
        , { dom_load_id : "dom_hide"   , panel_id : "dom_load_tags" } /* HTML CSS JS TAGS                      */
        , { dom_load_id : "dom_hide"   , panel_id : "test_panel"    } /* RELOAD CLEAR REGEX BEHAVIOR HIGHLIGHT */

    ];
/*}}}*/
    TOOL_SET4_PLAY /*{{{*/
    = [   { dom_load_id : "playground" , panel_id : "headsup"       } /* options                                     */
        , { dom_load_id : "playground" , panel_id : "headsup_fs"    } /* body font-size                              */
        , { dom_load_id : "playground" , panel_id : "headsup_bw"    } /* body width                                  */
        , { dom_load_id : "playground" , panel_id : "headsup_bz"    } /* body zoom                                   */
        , { dom_load_id : "playground" , panel_id : "headsup_ds"    } /* tools trap & scroll                         */
        , { dom_load_id : "playground" , panel_id : "headsup_w"     } /* wording exact segment ...                   */

        , { dom_load_id : "playground" , panel_id : "pat_bag"       } /* patterns                                    */
        , { dom_load_id : "playground" , panel_id : "sel_bag"       } /* selected patterns                           */
        , { dom_load_id : "playground" , panel_id : "dom_traversal" } /* NodeIterator TreeWalker childNodes tagNodes */

        , { dom_load_id : "playground" , panel_id : "test_panel"    } /* RELOAD CLEAR REGEX BEHAVIOR HIGHLIGHT       */
        , { dom_load_id : "playground" , panel_id : "dev_log_map"   } /* LOG_MAP                                     */
        , { dom_load_id : "playground" , panel_id : "dom_load_tags" } /* HTML CSS JS TAGS                            */

        , { dom_load_id : "playground" , panel_id : "transcript1"   } /* TRANSCRIPT1                                 */
        , { dom_load_id : "playground" , panel_id : "transcript2"   } /* TRANSCRIPT2                                 */

    ];
/*}}}*/
    TOOL_SET5_MORE /*{{{*/
    = [   { dom_load_id : ""           , panel_id : "fly_div"       }
        , { dom_load_id : ""           , panel_id :  t_data.TOOLS_TRAP     }
    ];
/*}}}*/

    TOOL_SET =   TOOL_SET1_WORD
        .concat( TOOL_SET2_SEEK )
        .concat( TOOL_SET3_HIDE )
        .concat( TOOL_SET4_PLAY )
/*
        .concat( TOOL_SET5_MORE ) FIXME .. HIDES fly_div
*/
    ;

    t_set_tools_tiers();

/*}}}*/
    /* DELAY {{{*/
    LONG_PRESS_ARM_DELAY = t_data.CLICK_DURATION;
    LONG_PRESS_DELAY     = t_data.CLICK_DURATION * 2;

    /*}}}*/
};
/*}}}*/
/*…   load_IMPORT .. globals {{{*/
let   load_IMPORT = function()
{
let log_this; try { log_this = localStorage_getItem("DOM_TOOLS_TAG"); } catch(ex) {}

let i =5; /*....................................... dom_data     EXPORT-ONLY */                 /* 05 */

    i+=1; if(typeof dom_log      != "undefined")    dom_log     .t_log_IMPORT     (log_this,i); /* 06 */
    i+=1; /*....................................... dom_popup    EXPORT-ONLY */                 /* 07 */
    i+=1; if(typeof dom_util     != "undefined")    dom_util    .t_util_IMPORT    (log_this,i); /* 08 */
    i+=1; if(typeof dom_i18n     != "undefined")    dom_i18n    .t_i18n_IMPORT    (log_this,i); /* 09 */
    i+=1; if(typeof dom_prop     != "undefined")    dom_prop    .t_prop_IMPORT    (log_this,i); /* 10 */

    i+=1; if(typeof dom_store    != "undefined")    dom_store   .t_store_IMPORT   (log_this,i); /* 11 */
    i+=1; if(typeof dom_fly      != "undefined")    dom_fly     .t_fly_IMPORT     (log_this,i); /* 12 */
    i+=1; if(typeof dom_wording  != "undefined")    dom_wording .t_wording_IMPORT (log_this,i); /* 13 */
    i+=1; if(typeof dom_select   != "undefined")    dom_select  .t_select_IMPORT  (log_this,i); /* 14 */
    i+=1; if(typeof dom_slot     != "undefined")    dom_slot    .t_slot_IMPORT    (log_this,i); /* 15 */

    i+=1; if(typeof dom_hide     != "undefined")    dom_hide    .t_hide_IMPORT    (log_this,i); /* 16 */
    i+=1; if(typeof dom_view     != "undefined")    dom_view    .t_view_IMPORT    (log_this,i); /* 17 */
    i+=1; if(typeof dom_sticky   != "undefined")    dom_sticky  .t_sticky_IMPORT  (log_this,i); /* 18 */
    i+=1; if(typeof dom_seek     != "undefined")    dom_seek    .t_seek_IMPORT    (log_this,i); /* 19 */
    i+=1; if(typeof dom_share    != "undefined")    dom_share   .t_share_IMPORT   (log_this,i); /* 20 */

    i+=1; if(typeof dom_details  != "undefined")    dom_details .t_details_IMPORT (log_this,i); /* 21 */
    i+=1; if(typeof dom_wot      != "undefined")    dom_wot     .t_wot_IMPORT     (log_this,i); /* 22 */
    i+=1; if(typeof dom_sentence != "undefined")    dom_sentence.t_sentence_IMPORT(log_this,i); /* 23 */
    i+=1; if(typeof dom_grid     != "undefined")    dom_grid    .t_grid_IMPORT    (log_this,i); /* 24 */
    i+=1; if(typeof dom_gutter   != "undefined")    dom_gutter  .t_gutter_IMPORT  (log_this,i); /* 25 */

    i+=1; if(typeof dom_ipc      != "undefined")    dom_ipc     .t_ipc_IMPORT     (log_this,i); /* 26 */
    i+=1; /*..................................... ✔ dom_tools */ t_tools_IMPORT   (log_this,i); /* 27 */

    /* [globals] DEBUG {{{*/
    if( DOM_TOOLS_GLOBALS )
    {
        logBIG("DOM_TOOLS_GLOBALS .. EXPORTING [window.t_tools = dom_tools] ", lf0);

        window.t_data    = t_data;
        window.t_log     = t_log;
        window.t_util    = t_util;
        window.t_prop    = t_prop; window.prop = t_prop;
        window.t_store   = t_store;
        window.t_fly     = t_fly;

        window.t_wording = t_wording;
        window.t_select  = t_select;
        window.t_sentence= t_sentence;
        window.t_slot    = t_slot;

        window.t_hide    = t_hide;
        window.t_view    = t_view;
        window.t_sticky  = t_sticky;
        window.t_seek    = t_seek;
        window.t_share   = t_share;

        window.t_grid    = t_grid;
        window.t_gutter  = t_gutter;

        window.t_ipc     = t_ipc;
        window.t_tools   = dom_tools;
    }
    /*}}}*/

    /*{{{
    t_log.log_IMPORT();
}}}*/
};
/*}}}*/
/*_ localStorage {{{*/

let localStorage_setItem = function(key,val) {          try { if(val)  localStorage.setItem   (key,val); else localStorage.removeItem(key); } catch(ex) {} };
let localStorage_getItem = function(key    ) { let val; try {    val = localStorage.getItem   (key    );                                    } catch(ex) {} return val; };
let localStorage_delItem = function(key    ) {          try { /*...*/  localStorage.removeItem(key    );                                    } catch(ex) {} };

/*}}}*/
/*}}}*/
/* CONST {{{*/
let   DOM_TOOLS_LOG         = false;
let   DOM_TOOLS_TAG         = false;
let   DOM_TOOLS_GLOBALS     = false;  /* .. window.t_tools = dom_tools ... */
/* CSS {{{*/
/* FGX {{{*/
const CSS_FG0                   = "fg0";
const CSS_FG1                   = "fg1";
const CSS_FG2                   = "fg2";
const CSS_FG3                   = "fg3";
const CSS_FG4                   = "fg4";
const CSS_FG5                   = "fg5";
const CSS_FG6                   = "fg6";
const CSS_FG7                   = "fg7";
const CSS_FG8                   = "fg8";
const CSS_FG9                   = "fg9";

const FGX_CLASSLIST = [
      CSS_FG0
    , CSS_FG1
    , CSS_FG2
    , CSS_FG3
    , CSS_FG4
    , CSS_FG5
    , CSS_FG6
    , CSS_FG7
    , CSS_FG8
    , CSS_FG9
];

let   WORDS_CLASSLIST;

/*}}}*/
/* EVENTS {{{*/
const CSS_MOVING                = "moving";
const CSS_STACKING              = "stacking";
const CSS_PAUSE_ANIMATION       = "pause_animation";

const CSS_ON_COOLDOWN           = "on_cooldown";

const CSS_REMOVING              = "removing";

/*}}}*/
/* PLAYGROUND {{{*/
const CSS_COLLAPSED             = "collapsed";

/*}}}*/
/* PANEL {{{*/
const CSS_TRANSCRIPT            = "transcript";
const CSS_FLOATLOG              = "floatlog";

/*}}}*/
/* PANEL STYLE {{{*/

const CSS_STANDBY               = "standby";
const CSS_DISABLED              = "disabled";
const CSS_EMPTY                 = "empty";
const CSS_FADING                = "fading";
const CSS_FOCUSSED              = "focussed";
const CSS_GRAYED_OUT            = "grayed_out";
const CSS_FULLSCREEN            = "fullscreen";
const CSS_FULLSCREEN_LAST       = "fullscreen_last";
const CSS_FULLSCREEN_LEFT       = "fullscreen_left";
const CSS_FULLSCREEN_RIGHT      = "fullscreen_right";
const CSS_FULLSCREEN_PREV       = "fullscreen_prev";
const CSS_FULLSCREEN_NEXT       = "fullscreen_next";

const CSS_HIDING_TOOLS          = "hiding_tools";

const CSS_MAGNIFIED             = "magnified";
const CSS_MAGNIFIED_SCALE       = 2; /* same as in dom_tools.css */

const MOUSE_OFFSET_FACTOR       = 0.5;
const TOUCH_OFFSET_FACTOR       = 1.5;

/*}}}*/
/* PANEL CHILD TOOL {{{*/
const CSS_TOOLBAG_BUTTON        = "toolbag_button";
const CSS_EMBEDDED_DOC_TOOL     = "embedded_doc_tool";

const CSS_GRID_BAG              = "grid_bag";
const CSS_HAS_MOVING_CHILD      = "has_moving_child";
const CSS_MOV_SRC               = "mov_src";

const CSS_TXT_LOG               = "txt_log";
/*}}}*/
/* PANEL DECORATION {{{*/
const CSS_TALL_PANEL            = "tall_panel";
const CSS_WIDE_PANEL            = "wide_panel";
const CSS_TOO_LARGE             = "too_large";

const CSS_CLEARPIN              = "clearpin";
const CSS_CLOSEPIN              = "closepin";
const CSS_PUSH_PIN              = "push_pin";
const CSS_SCALEPIN              = "scalepin";

const CSS_PIN_ON_PANEL          = "pin_on_panel";
const CSS_TOOLTIP               = "tooltip";

/*}}}*/
/* PROPERTY {{{*/
const CSS_USER_SET              = "user_set";
const CSS_SORT_OFF              = "sort_off";
const CSS_ON                    = "on";

/*}}}*/
/* SELECTION {{{*/
const CSS_OPEN_BAG              = "open_bag";
const CSS_CLOSING               = "closing";

const CSS_BACK                  = "back";
/*}}}*/
/* CONTAINERS {{{*/

const CSS_CONTAINER_SELECTED    = "container_selected";
const CSS_BUTTONS_POD           = "buttons_pod";
const CSS_BUTTON_COPY           = "button_copy";
const CSS_BUTTON_MAGNIFY        = "button_magnify";
const CSS_BUTTON_MONO           = "button_mono";
const CSS_BUTTON_MONOSPACE      = "button_monospace";
const CSS_BUTTON_NEXT           = "button_next";
const CSS_BUTTON_PREV           = "button_prev";

/*}}}*/
/*}}}*/
/*}}}*/
/* TOOL_SET {{{*/
/* PANEL ID {{{

     dev_log_map
     dom_grid_html
     dom_load_tags
     dom_tools_html
     dom_traversal

     fly_div

     headsup
     headsup_bw
     headsup_bz
     headsup_fs
     headsup_ds
     headsup_w
     hotspot

     sel_bag
     pat_bag

     test_panel

     transcript1
     transcript2

    dom_tools_html
    dom_grid_html

    pivspot
        pivspot_c

    hotspot
        hotwave
        hotring
        hotspot_c

    dev_log_map

    dom_load_tags

    dom_traversal
        tools_node

    headsup
        thumb_p
        theme_dark
        wording
        anchor_freeze
        containers_hi
        overflow_visi
        details_close
        details_open
        details_radio
        scroll_smooth
        tools_tier2

    headsup_bw
        headsup_bw_value

    headsup_bz
        headsup_bz_value

    headsup_fs
        headsup_fs_value

    headsup_ds
        tools_trap
        t_data.TOOLS_SCROLL
        site_or_page
        mask_or_hide
        t_data.EDIT_OR_STAGE
        t_hide.dom_hide1_reset
        t_hide.dom_hide1_undo
        deny_or_allow

    headsup_w
        tools_filter
        words_drop_s
        words_exact
        words_head_tail
        words_opcycle
        words_regex
        words_segment
        words_recycle
    pat_bag
    sel_bag

    test_panel
        RELOAD
        CLEAR
        REGEX
        BEHAVIOR
        HIGHLIGHT

    transcript1
    transcript2

    fly_div

}}}*/
/*_ is_a_DOM_LOAD_panel {{{*/
let is_a_DOM_LOAD_panel = function(panel_id)
{
/*{{{*/
let   caller = "is_a_DOM_LOAD_panel";
let log_this = LOG_MAP.T1_DOM_LOAD;

/*}}}*/
    let dom_load_id                 = (typeof DOM_LOAD_ID != "undefined") ? DOM_LOAD_ID : "default";
    let panel_to_load               =  true;    /* default implicit [panel_to_load] */
    let dom_load_is_defined         = false;    /* [TOOL_SET] may not have [DOM_LOAD_ID] explicit configuration */

if(log_this && !TOOL_SET.parsed_once) logBIG(caller, lf4);
    for(let index=0; index < TOOL_SET.length; ++index)
    {
        let entry = TOOL_SET[index];
if(log_this && !TOOL_SET.parsed_once) log("index %c"+index+" %c entry.panel_id %c"+entry.panel_id, lbH+lfX[(index % 10)], lbA, lbH+lf4);

        /* [DOM_LOAD_ID FOUND] .. (explicitly mentioned at least once) {{{*/
        if(!dom_load_is_defined && (entry.dom_load_id == dom_load_id))
        {
            dom_load_is_defined     =  true;
            panel_to_load           = false;    /* .. CLEAR [IMPLICIT ANSWER] */
        }
        /*}}}*/
        /* [DOM_LOAD_ID CHECKED TOOLS] .. (explicitly selected tools) {{{*/
        if(entry.dom_load_id == dom_load_id)
        {
            /* FOUND THE REQUESTED [panel_id] */
            if(entry.panel_id  == panel_id)
            {
                panel_to_load       = true;     /* .. SET [EXPLICIT ANSWER] */

                if(!log_this || TOOL_SET.parsed_once) break;
            }
        }
        /*}}}*/
    }
TOOL_SET.parsed_once=true;
/*{{{*/
if(log_this) {
    let lfx = (panel_to_load ? lf4 : lf8);
    log("%c "+caller+"%c"+panel_to_load    +"%c "+dom_load_id+"%c "+(dom_load_is_defined ? "defined" : "")+"%c"+panel_id
        ,lbH+lfx     ,lbL+lfx               ,lbC+lf8          ,lbC+lf8                                     ,lbR+lfx     );
}
/*}}}*/
    return panel_to_load;
};
/*}}}*/
/*_ is_a_DOM_LOAD_featured_function {{{*/
/* {{{*/
/* FEATURES .. f(LOADING PAGE ID) */
const FUNCTIONS_TO_IGNORE
    = [    { dom_load_id : "dom_hide" , id : "t_seekzone1_XYWH"            } /* no seekzone feedback */
         , { dom_load_id : "dom_hide" , id : "t_seek.t_seekzone1_show_onDown_XY"} /* no seekzone feedback */
         , { dom_load_id : "dom_hide" , id : "t_seek.t_seekzone2_show_misclick" } /* no click    feedback */
         , { dom_load_id : "dom_hide" , id : "t_seek.t_seekzone3_show_dblclick" } /* no click    feedback */
         , { dom_load_id : "dom_hide" , id : "onDown_7_SENTENCE"                } /* no document sentence */
         , { dom_load_id : "dom_hide" , id : "onDown_8_DOC_SELECT_OR_SEEK"      } /* no document  wording */
         , { dom_load_id : "dom_hide" , id : "onUp_7_DOC_CB_CLICK_WORD"         } /* no document  wording */
         , { dom_load_id : "dom_hide" , id : "onUp_2_SLOT_CONTAINER_CB"         } /* no document  wording */
         , { dom_load_id : "dom_hide" , id : "t_store_patterns_csv"             } /* no document  wording */

         , { dom_load_id : "dom_find" , id : "t_seekzone1_XYWH"                 } /* no seekzone feedback */
         , { dom_load_id : "dom_find" , id : "t_seek.t_seekzone1_show_onDown_XY"} /* no seekzone feedback */
         , { dom_load_id : "dom_find" , id : "t_seek.t_seekzone2_show_misclick" } /* no click    feedback */
         , { dom_load_id : "dom_find" , id : "t_seek.t_seekzone3_show_dblclick" } /* no click    feedback */
         , { dom_load_id : "dom_find" , id : "t_sticky.t_sticky_CHOOSE"         } /* no STICKY    support */
         , { dom_load_id : "dom_find" , id : "t_sticky.t_sticky_EDIT"           } /* no STICKY    support */
    ];

let cached_entry_selected_item_id = {};
/*}}}*/
let is_a_DOM_LOAD_featured_function = function(item_id)
{
/*{{{*/
let   caller = "is_a_DOM_LOAD_featured_function";
let log_this = LOG_MAP.T1_DOM_LOAD;

/*}}}*/
    /* cached_entry_selected_item_id {{{*/
    let feature_to_ignore  = cached_entry_selected_item_id[item_id];
    if( feature_to_ignore != undefined) {
/*{{{*/
if( log_this) {
    let lfx = (feature_to_ignore ? lf2 : lf5);
    log("%c "+caller+"%c"+(feature_to_ignore ? "FALSE":"TRUE ")+"%c CACHED ANSWER %c"+item_id
        ,lbH+lf8     ,lbL+lfx                                   ,lbC+lf8         ,lbR+lfx    );
}
/*}}}*/
        return !feature_to_ignore;
    }
    /*}}}*/
    let dom_load_id                 = (typeof DOM_LOAD_ID != "undefined") ? DOM_LOAD_ID : "default";
    feature_to_ignore               = false;    /* default implicit [feature_to_ignore] */
    let dom_load_is_defined         = false;    /* [TOOL_SET] may not have [DOM_LOAD_ID] explicit configuration */

if(log_this && !FUNCTIONS_TO_IGNORE.parsed_once) logBIG(caller, lf5);
/*{{{
    for(const [index , entry] of FUNCTIONS_TO_IGNORE.entries())
}}}*/
    for(let index=0; index < FUNCTIONS_TO_IGNORE.length; ++index) {
        let          entry = FUNCTIONS_TO_IGNORE[          index];
if(log_this && !FUNCTIONS_TO_IGNORE.parsed_once) log("index %c"+index+" %c entry.id %c"+entry.id, lbH+lfX[(index % 10)], lbA, lbH+lf5);

        /* FOUND SOME EXPLICIT [DOM_LOAD_ID] [ENTRY] {{{*/
        if(!dom_load_is_defined && (entry.dom_load_id == dom_load_id))
        {
            dom_load_is_defined     =  true;
            feature_to_ignore       = false;    /* .. CLEAR [IMPLICIT ANSWER] */
        }

        /*}}}*/
        /* CHECK [DOM_LOAD_ID] [ENTRIES] {{{*/
        if(entry.dom_load_id == dom_load_id)
        {
            /* FOUND SPECIFIED ID */
            if(entry.id == item_id)
            {
                feature_to_ignore   = true;     /* .. SET [EXPLICIT ANSWER] */

                if(!log_this || FUNCTIONS_TO_IGNORE.parsed_once) break;
            }
        }
        /*}}}*/
    }
FUNCTIONS_TO_IGNORE.parsed_once=true;
/*{{{*/
if(log_this) {
    let lfx = (feature_to_ignore ? lf2 : lf5);
    log("%c "+caller+"%c"+feature_to_ignore+"%c "+dom_load_id+"%c "+(dom_load_is_defined ? "defined" : "")+"%c"+item_id
        ,lbH+lf3     ,lbL+lfx               ,lbC+lf8          ,lbC+lf8                                     ,lbR+lfx    );
}
/*}}}*/
    cached_entry_selected_item_id[item_id] = feature_to_ignore;
    return !feature_to_ignore;
};
/*}}}*/

/*_ t_set_tools_tiers {{{*/
let t_set_tools_tiers = function()
{
/*{{{
log("t_set_tools_tiers");
}}}*/
    for(let index=0; index < TOOL_SET.length; ++index)
    {
        let    entry = TOOL_SET[index];

        if(    (entry.panel_id == "headsup"  )
           ||  (entry.panel_id == "headsup_w")
          )
            entry.tier = 1;

        else if(entry.panel_id == "pat_bag"  )
            entry.tier = 2;
    }
};
/*}}}*/
/*➔ t_is_a_tools_id_tier {{{*/
let t_is_a_tools_id_tier = function(id, tier)
{
    let    el  = t_get_tool        (id      );
    return el && is_a_tools_el_tier(el, tier);
};
/*}}}*/
/*_ is_a_tools_el_tier {{{*/
let is_a_tools_el_tier =   function(el,tier)
{
    let result = false;

    for(let index=0; index < TOOL_SET.length; ++index)
    {
        let entry = TOOL_SET[index];
        if( entry.panel_id   == el.id) {
            result  = (entry.tier <= tier);
            break;
        }
    }

/*{{{
if(result) log("is_a_tools_el_tier("+el.id+"): ...return %c"+result,lbH+lfX[result ? 4:8])
}}}*/
    return result;
};
/*}}}*/
/*_ t_activate_tools_tier1 {{{*/
let t_activate_tools_tier1 = function(_caller)
{
let log_this = LOG_MAP.T2_GRID;

if(log_this) log("t_activate_tools_tier1 .. CALLED BY "+ _caller);

    let some_panel_selected = false;
    for(let index=0; index < TOOL_SET.length; ++index)
    {
        let entry       = TOOL_SET[index];
        if( entry.tier == 1)
        {
            let panel = t_get_tool( entry.panel_id );
            if(!t_tools_panel_is_selected( panel ))
            {
                t_tools_panel_select(panel, true);
                some_panel_selected = true;
            }
        }
    }
    if(some_panel_selected)
    {
        t_tools_show(true); /* centered (210226) */

        t_TOOL_SET_eval_wide_or_tall_panel();
    }
    return some_panel_selected;
};
/*}}}*/
/*_ t_sync_tools_tier2 {{{*/
let t_sync_tools_tier2 = function(_caller)
{
/*{{{*/
    let caller = "t_sync_tools_tier2";
let log_this = LOG_MAP.T2_GRID;

    let tools_tier2 = prop.get( t_data.TOOLS_TIER2 );

if(log_this) log("t_sync_tools_tier2: tools_tier2=["+tools_tier2+"] .. CALLED BY "+ _caller);
/*}}}*/

    for(let index=0; index < TOOL_SET.length; ++index)
    {
        let          entry = TOOL_SET[index];
        let             el = t_get_tool(entry.panel_id);
        let tools_selected = t_tools_panel_is_selected(el);
        let  tier_selected = tools_tier2 && (entry.tier <= 2);
        let     is_showing = tools_selected || tier_selected;

        set_el_class_on_off(el, t_data.CSS_HIDDEN, !is_showing);
/*
log("t_sync_tools_tier2: %c el.id=["+el.id+"]", lbH+lf8) .. FIXME .. do not hide fly_div here !
*/
    }

    t_sync_layout(caller);

    t_TOOL_SET_eval_wide_or_tall_panel();
};
/*}}}*/
/*}}}*/

/* LOAD .. STORE .. CHANGE .. NODE */
/* TOOL LOAD {{{*/
/* {{{*/
/*    TOOLS1_OFF                 = "TOOLS OFF"                ; .. BROWSER EXTENSION background.js */
/*    TOOLS2_SANITY_CHECK_FAILED = "TOOLS SANITY CHECK FAILED"; .. BROWSER EXTENSION background.js */
const TOOLS3_NEED_RELAXED_CSP    = "TOOLS NEED RELAXED CSP"   ;
const TOOLS4_DEPLOYED            = "TOOLS DEPLOYED"           ;
const TOOLS5_UNLOADED            = "TOOLS UNLOADED"           ;
/*    TOOLS6_NO_REPLY_YET        = "TOOLS NO REPLY YET"       ; .. BROWSER EXTENSION background.js */

/*}}}*/

/* CONFIGURE */
/*_ t_TOOL_SET_select {{{*/
let t_TOOL_SET_select = function()
{
/*{{{*/
let   caller = "t_TOOL_SET_select";
let log_this = LOG_MAP.T2_GRID;

if( log_this) log(caller);
/*}}}*/
    /* t_data.WORDING PANELS {{{*/
if( log_this) log("...pat_bag=["+get_n_lbl(pat_bag)+"]");
if( log_this) log("...TOOL_panels.includes(pat_bag)=["+TOOL_panels.includes(pat_bag)+"]");
    if(pat_bag && !off_bag) t_build_bag_tools();

    /*}}}*/
    /* t_data.FLOATLOG PRELOAD {{{*/
    t_fly.t_fly_log_set_state( LOG_MAP.EV8_FLOATLOG ); /* INIT SESSION STATE */

    set_el_class_on_off(fly_log, t_data.CSS_CHECKED, LOG_MAP.EV8_FLOATLOG  );
    /*}}}*/
    /* default to selecting first panel {{{*/
    let some_panel_selected = false;

    for(const entry of TOOL_SET)
    {
        let panel = t_get_tool( entry.panel_id );
        if( t_tools_panel_is_selected(panel) ) {
            some_panel_selected = true;
            break;
        }
    }
    /*}}}*/
/*{{{
if( log_this) logBIG("...some_panel_selected=["+some_panel_selected+"]");
}}}*/
    /* [pivot_PANEL] .. f(UNSELECTED or PINNED) {{{*/
    if(!some_panel_selected || has_el_class(pivot_PANEL, t_data.CSS_PINNED))
    {
        t_set_pivot_PANEL(null, "PINNED pivot_PANEL");
    }
    /* [pivot_PANEL] .. f(FIRST SELECTED DOM_LOAD_ID TOOL_SET PANEL) */
    if(!pivot_PANEL && some_panel_selected)
    {
        let dom_load_id
            = (typeof DOM_LOAD_ID != "undefined")
            ?  DOM_LOAD_ID
            : "default";

        let panel;
        for(const entry of TOOL_SET)
        {
            if(     ( dom_load_id ==             entry.dom_load_id        ) /* filter toolset */
                &&  (       panel =  t_get_tool( entry.panel_id          )) /* panel instance */
                && !( has_el_class  (     panel, t_data.CSS_PINNED)) /* not pinned (fixed on screen) */
                &&  ( t_tools_panel_is_selected( panel                   )) /* currently selected by user */
              ) {
                t_set_pivot_PANEL(panel, "FIRST SELECTED "+DOM_LOAD_ID+" TOOL_SET PANEL");
                break;
            }
        }
    }

    t_get_selected_count( caller );
    /*}}}*/
    t_cache_armed_by(caller);
};
/*}}}*/
/*_ t_TOOL_SET_set_class_state {{{*/
let t_TOOL_SET_set_class_state = function(className, state)
{
/*{{{*/
let   caller = "t_TOOL_SET_set_class_state("+className+", "+state+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    for(const entry of TOOL_SET) {
        let   panel = t_get_tool( entry.panel_id );
        if(   panel ) set_el_class_on_off(panel, className, state);
    }
};
    /*}}}*/
/*_ t_TOOL_SET_eval_wide_or_tall_panel {{{*/
/*{{{*/
let            EVAL_WIDE_OR_TALL_DELAY    =  1000;

let t_TOOL_SET_eval_wide_or_tall_timer;
/*}}}*/
let t_TOOL_SET_eval_wide_or_tall_panel         = function(_caller)
{
    if(       t_TOOL_SET_eval_wide_or_tall_timer ) clearTimeout( t_TOOL_SET_eval_wide_or_tall_timer );
              t_TOOL_SET_eval_wide_or_tall_timer = null;

    let delay = t_just_loaded("FIRST TOOLS LAYOUT WIDE OR TALL", EVAL_WIDE_OR_TALL_DELAY)
        ? 3 * EVAL_WIDE_OR_TALL_DELAY
        :     EVAL_WIDE_OR_TALL_DELAY;

    t_TOOL_SET_eval_wide_or_tall_timer =   setTimeout( t_TOOL_SET_eval_wide_or_tall_panel_handler, delay);
};

let t_TOOL_SET_eval_wide_or_tall_panel_handler = function()
{
/*{{{
logBIG("t_TOOL_SET_eval_wide_or_tall_panel_handler", lf5);
}}}*/

/*{{{
t_fly.t_fly_tooltip_add("t_TOOL_SET_eval_wide_or_tall_panel_handler") .. TODO PIVOT
}}}*/
    t_TOOL_SET_eval_wide_or_tall_timer = null;

    for(const entry of TOOL_SET)
    {
        let panel = t_get_tool(  entry.panel_id );

        if( t_tools_panel_is_selected( panel) )
            t_eval_wide_or_tall_panel( panel );
    }
    set_pinned_panels_transform_origin();
};
/*}}}*/

/* LOAD */
/*➔ t_load {{{*/
/*{{{*/
let load_MS;

/*}}}*/
let t_load = function()
{
    if(LOG_MAP != undefined)
    { console.log("%c"+dom_data.SYMBOL_WARNING+" "+DOM_TOOLS_JS_ID+": RELOADING...", dom_log.LOG_BG_CSS.lb6); t_reload(); return; }

    load_IMPORT(); /* set up modules cross-references */
/*{{{*/
let caller     = "t_load";

    load_site_and_page_keys();
    t_log.logging_load_LOG_MAP();

let log_this = LOG_MAP.T1_DOM_LOAD;

if(log_this) log(caller, "info");
/*}}}*/

    /* DOM_FREEZE */
    if( t_store.t_store_getItem(t_data.DOM_FREEZE) ) t_util.t_REMOVE_EventListeners( document.body );

    /* USER_LANG */
    dom_i18n.i18n_set_args({ lang: t_store.t_store_getItem(t_data.USER_LANG) , caller });

    load0_get_LOADER_ID();

    load_MS = new Date().getTime();

    let interrupted_on_id  = load1_SHADOW();
    if( interrupted_on_id != "") {
        log("%c*** TOOLS SHADOWING INCOMPLETE *** %c"+ caller +" INTERRUTED on %c id "+interrupted_on_id
            ,lbb+lbH+lf3                         ,lbb+lbL+lf8                 ,lbb+lbR+lf2              );
        return;
    }
if( log_this) t_load_log_loaded_modules();

    load3_PLAYGROUND_PANELS();

    load2_TOOLS();
    if(!hotspot) {
        log("%c*** TOOLS LOADING INCOMPLETE *** %c"+   caller +" INTERRUTED on !hotspot", lbb+lbH+lf3, lbb+lbH+lf2);
        return;
    }

    load4_HEADSUP();

    load5_STORAGE();  /* prop.init prop.set pat_csv... pivotXY spread_ratio pivot_PANEL hotspotXY transcripts dom_hide..observers IPC and STORE listeners */

    load6_DOM_TAGS();

    if( prop.get( t_data.REMOVE_ADS ) )
    {
        t_util.t_REMOVE_ADS(t_data.REMOVE_ADS);
    }
    if( prop.get( t_data.SPLIT_WOT  ) )
    {
        t_wot.t_WOT_SPLIT();

    }
    /*........... t_data.LINES_WOT .... is only an option for splitted lines numbering */

    t_details.details_onload(); /* eslint-disable-line no-undef */

    load7_GRID();

    load8_LOG_MAP();

    t_load_BEHAVIOR();

    load10_IPC_and_LISTENERS();

    load11_POST();    /* IPC .. INIT TOOLS .. INIT DOC_TOOLS */
};
/*}}}*/
/*_ t_load_log_loaded_modules {{{*/
let t_load_log_loaded_modules = function()
{
    let id;             let el;                                                let lfn =  0;
    id = "dom_tools_html";  el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);

    id = "dom_host_css";    el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_grid_css";    el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_tools_css";   el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);

    id = "dom_data_js";     el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_log_js";      el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_popup_js";    el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_util_js";     el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_i18n_js";     el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_prop_js";     el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_store_js";    el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_fly_js";      el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_wording_js";  el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_select_js";   el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_slot_js";     el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_hide_js";     el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_view_js";     el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_sticky_js";   el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_seek_js";     el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_share_js";    el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_details_js";  el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_wot_js";      el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_sentence_js"; el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_grid_js";     el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_gutter_js";   el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_ipc_js";      el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);
    id = "dom_tools_js";    el = t_get_tool(id); log("%c"+id+"%c"+(el ? el.id : "XXX"), lbL+lfX[++lfn % 10], lbR+lfX[el ? 9:2]);

};
        /*}}}*/
/*➔ t_just_loaded {{{*/
let t_just_loaded = function(action,delay,log_this)
{
/*{{{*/
let  caller = "t_just_loaded";

/*}}}*/
    let      this_MS = new Date().getTime();
    let since_t_load = this_MS - load_MS;
    let  just_loaded = (since_t_load < delay);

/*{{{*/
if(log_this)
    log(caller+": %c"+action+" .. %c   just_loaded "+just_loaded+"%c since_t_load "+since_t_load+"ms %c delay "+delay+"ms"
        ,         lb2            ,lbL+(just_loaded ? lf4 : lf8)  ,lbC+lf8                           ,lbR+lf9              );
/*}}}*/
    return just_loaded;
};
/*}}}*/
/*➔ t_unload {{{ */
let t_unload = function()
{
    if(  (LOG_MAP == undefined)
      ||  !dom_tools_html
      || ( dom_tools_html.style.visibility != "visible")
      )
    { console.log("%c"+dom_data.SYMBOL_WARNING+" "+DOM_TOOLS_JS_ID+": NOT LOADED", dom_log.LOG_BG_CSS.lb6); return; }

/*{{{*/
let caller = "t_unload";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log(caller);
/*}}}*/

if( log_this) log("CLEAR SELECTED WORDS");
    t_select.t_clear_slot_all();

if( log_this) log("REMOVE EVENT LISTENERS");
    t_del_listeners();

if( log_this) log("MOVE TOOLS OFF GRID");
    if(!DOM_GRID_CSS_TAG)
        t_move_TOOLS_OFF_GRID(caller);

if( log_this) log("HIDE TOOLS");
    if( dom_tools_html)
        dom_tools_html.style.visibility = t_data.CSS_HIDDEN;

if( log_this) log("SET t_data.WORDING OFF");
    t_wording.t_wording_cycle("OFF", false);

if( log_this) log("SEND IPC UNLOAD MESSAGE");
    let ipc = {    t_load : TOOLS5_UNLOADED
        ,          caller : DOM_TOOLS_JS_TAG
    };
    t_ipc.t_ipc_SEND( ipc );

};
/*}}}*/
/*➔ t_reload {{{ */
let t_reload = function()
{
/*{{{*/
let  caller = "t_reload";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log(caller);
if( log_this) log_caller();
/*}}}*/
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_fly(caller);

    t_add_LISTENERS();

    load11_POST();
};
/* }}} */

/*… load_listener {{{*/
/*{{{*/
const PREVENT_RELOAD_DELAY = 5000;
/*}}}*/
let load_listener = function(event)
{
/*{{{*/
let   caller = "load_listener("+event.type+")";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) t_fly.t_log_event_status(caller, lbb+lf1);
if( log_this) t_log.console_dir("event", event);
/*}}}*/
    /* [since_t_load] .. the delay since [t_load] was called */ /*{{{*/
    let this_MS = new Date().getTime();
    let since_t_load = this_MS - load_MS;

if( log_this) log("...since_t_load=["+since_t_load+"ms] .. PREVENT_RELOAD_DELAY=["+PREVENT_RELOAD_DELAY+"]");
    /*}}}*/
    switch(event.type) {
    case "beforeunload":
    /*{{{*/
    {
/* == [beforeunload] .. (MDN web docs) ========================================= {{{
 * THE BROWSER MAY ASK THE USER
 * ABOUT PREVENTING A SNEAKY UNLOAD
 * WITH A CONFIRMATION DIALOGS
 :!start explorer "https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload"
 * ============================================================================== }}}*/
        /* COMMIT PENDING STORAGE ➔ .. (before leaving this page) {{{*/
        t_sticky.t_sticky_STORE_NOW();

        if( t_save_update_timer )
            save4_layout(caller);

        /*}}}*/
        /* USER EVENT & TOOL .. (check options) {{{*/
        let frame_had_a_user_gesture      = (onWork_EL_last_used != null);
        let requesting_tool_name =          (onWork_EL           != null) ? (onWork_EL          .id || onWork_EL          .title).toLowerCase()
        :                                   (onWork_EL_last_used != null) ? (onWork_EL_last_used.id || onWork_EL_last_used.title).toLowerCase()
        :                                                                   "";

        let all_csv = t_util.csv_cat(pat_csv, off_csv);
        all_csv     = t_util.csv_cat(all_csv, bak_csv);
        all_csv     = t_util.csv_cat(all_csv, alt_csv);

        let case1_is_a_reload_request     = (requesting_tool_name.includes("reload")                 )
        ||                                  (requesting_tool_name    == t_data.REMOVE_ADS            )
        ||                                  (requesting_tool_name    == t_data.SPLIT_WOT             )
        ||                                  (requesting_tool_name    == t_data.LINES_WOT             )  ;
        let case2_just_loaded             = t_just_loaded(event.type  , PREVENT_RELOAD_DELAY,log_this)  ; /* AUTOMATED PAGE REQUEST .. TODO: FIND OUT [WHY] AND [HOW] */
        let case3_anchor_freezed          =                   prop.get( t_data.ANCHOR_FREEZE         )  ; /* WHILE LINKS ARE DISABLED */
        let case4_has_some_csv            =                            (t_util.csv_count(all_csv) > 0)  ; /* WHILE WORKING WITH WORDS */
        let case5_user_is_wording         =                   prop.get( t_data.WORDING               )  ; /* WHILE WORKING WITH WORDS */
        let case6_export_tool_clicked     = (onDown_EL && (onDown_EL == t_get_tool("EXPORT"          )));
        let case7_remove_ads_tool_clicked = (onDown_EL && (onDown_EL == t_get_tool(t_data.REMOVE_ADS )));
        let case8_remove_ads_tool_set     =                              prop.get( t_data.REMOVE_ADS )  ;
/*{{{
        let user_is_tooling               =  dimm_mask_displayed(         ); .. USER IS READING
        let user_is_editing_dom_hide      =  prop.get(t_data.EDIT_OR_STAGE); .. EDIT MODE
        let dom_load_is_bookmarklet       = (DOM_LOAD_ID != "dom_load")    ; .. TODO : GENERICITY
}}}*/

        /*}}}*/
        if( case1_is_a_reload_request)
            store_set_patterns_csv();
         /*  USER CONFIRMATION .. (check requirement) {{{*/
        let confirmation_required
        =   frame_had_a_user_gesture
        && !case1_is_a_reload_request
        && !case6_export_tool_clicked
        && !case7_remove_ads_tool_clicked
        &&  (     case2_just_loaded
/*{{{
               || case4_has_some_csv
               || case3_anchor_freezed
               || case5_user_is_wording
               || user_is_tooling
               || user_is_editing_dom_hide
               || dom_load_is_bookmarklet
}}}*/
           )
        ;
        if(case8_remove_ads_tool_set) confirmation_required = true;

        let reason_why_not
        =  confirmation_required         ? ""
        : !frame_had_a_user_gesture      ? "NO USER GESTURE YET"
        :  case1_is_a_reload_request     ? requesting_tool_name+" REQUEST"
        :  case6_export_tool_clicked     ? "EXPORT REQUEST"
        :  case7_remove_ads_tool_clicked ? "DOM CLEAN REQUEST"
        :                                  "NOT JUST LOADED and ANCHOR NOT FREEZED and NOT t_data.WORDING";

/*{{{*/
if(log_this /*|| confirmation_required*/) {
    t_fly.t_log_event_status(caller);
    let msg = log_key_val_group( caller
                       , {   confirmation_required
                           , reason_why_not
                           , requesting_tool_name
                           , case1_is_a_reload_request
                           , case2_just_loaded
                           , case3_anchor_freezed
                           , case4_has_some_csv
                           , case5_user_is_wording
                           , case6_export_tool_clicked
                           , case7_remove_ads_tool_clicked
                           , case8_remove_ads_tool_set
/*{{{
                           , user_is_tooling
                           , user_is_editing_dom_hide
                           , dom_load_is_bookmarklet
}}}*/
                           , onWork_EL
                           , onWork_EL_last_used
                           , frame_had_a_user_gesture
                       }
                       , lb0, false
                     );
    t_fly.t_fly(msg);
}
/*}}}*/
        /*}}}*/
        /* USER CONFIRMATION .. (value returned to the browser) {{{*/
        if(confirmation_required) {
            event.returnValue = event.type +" USER CONFIRMATION"; /* Chrome requires returnValue to be set */
        }
        else {
            let lfx
                = case7_remove_ads_tool_clicked ? lf7
                : case6_export_tool_clicked     ? lf6
                : case5_user_is_wording         ? lf5
                : case3_anchor_freezed          ? lf3
                : case2_just_loaded             ? lf2
                : case1_is_a_reload_request     ? lf1
                :                                 lf9;

if( log_this) log("%c UNLOAD CONFIRMATION NOT TRIGGERED %c"+reason_why_not, lbb+lbL+lf9, lbb+lbR+lfx);
        }
        event.preventDefault(); /* Cancel the event as stated by the standard */
        /*}}}*/
    }
    break;
    /*}}}*/
    case "unload":
/*{{{*/
    {
if( log_this) log("%c"+caller+"%c"+event.type, lbb+lbL+lf2, lbb+lbR+lf3);

    }
    break;
    /*}}}*/
    default: /*{{{*/
    {
if( log_this) log("%c"+caller+"%c"+event.type, lbb+lbL+lf2, lbb+lbR+lf3);

    }
    /*}}}*/
    }
};
/*}}}*/

/*… load0_get_LOADER_ID {{{*/
let load0_get_LOADER_ID = function()
{
/*{{{*/
let   caller = "load0_get_LOADER_ID";
let log_this = LOG_MAP.T1_DOM_LOAD;

if(log_this) log(caller, "info");
/*}}}*/
    /* DOM_LOAD_ID FROM SCRIPT {{{*/
    if( typeof DOM_LOAD_ID  == "undefined")
    {
if( log_this) logBIG("DOM_LOAD_ID IS NOT DEFINED");

    }
    else {
if( log_this) logBIG("DOM_LOAD_ID ["+ DOM_LOAD_ID +"] DEFINED BY SCRIPT", lf5);

    }
    /*}}}*/
    /* DOM_LOAD_ID FROM TEMPLATE LITERAL .. (FROM LOADER SCOPE) {{{*/
    let dom_load_id_template_literal = "${DOM_LOAD_ID}";
    if(!dom_load_id_template_literal.startsWith("$") ) /* resolves only when embedded */
    {
        window.DOM_LOAD_ID = dom_load_id_template_literal;

if( log_this) logBIG("DOM_LOAD_ID ["+DOM_LOAD_ID+"] FROM TEMPLATE LITERAL", lf6);
    }
    /*}}}*/
    /* DOM_LOAD_ID FROM BOOKMARKLET SCRIPT TITLE .. (FROM PAGE SCOPE) {{{*/
    let dom_load_script = document.getElementById("dom_load");
    if( dom_load_script )
    {
        window.DOM_LOAD_ID = dom_load_script.title;

if( log_this) logBIG("DOM_LOAD_ID ["+ DOM_LOAD_ID +"] FROM [dom_load_script.title]", lf4);
    }
    /*}}}*/

    /* DOM_LOAD_TAG FROM SCRIPT {{{*/
    if( typeof DOM_LOAD_TAG  == "undefined")
    {
if( log_this) logBIG("DOM_LOAD_TAG IS NOT DEFINED");

    }
    else {
if( log_this) logBIG("DOM_LOAD_TAG ["+ DOM_LOAD_TAG +"] DEFINED BY SCRIPT", lf5);

    }
    /*}}}*/
    /* DOM_LOAD_TAG FROM TEMPLATE LITERAL .. (FROM LOADER SCOPE) {{{*/
    let dom_load_tag_template_literal = "${DOM_LOAD_TAG}";
    if(!dom_load_tag_template_literal.startsWith("$") ) /* resolves only when embedded */
    {
        window.DOM_LOAD_TAG = dom_load_tag_template_literal;

if( log_this) logBIG("DOM_LOAD_TAG ["+DOM_LOAD_TAG+"] FROM TEMPLATE LITERAL", lf6);
    }
    /*}}}*/
};
/*}}}*/

/*… load1_SHADOW {{{*/
/*{{{*/
let shadow_host;
let shadow_root;

/*}}}*/
let load1_SHADOW = function()
{
/*{{{*/
let   caller = "load1_SHADOW";
let log_this = DOM_TOOLS_LOG || LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+t_data.SD1+"%c "+caller, lbS+lf1, lbH+lf1);
if( log_this) log("%c shadow_host %c"+get_id_or_tag_and_className(shadow_host), lbL+lf1, lbR+lf1);
/*}}}*/
    /* [shadow_host] [shadow_host] {{{*/

    /* IN CASE [shadow_host] HAS BEEN ALREADY BEEN CREATED BY [dom_load] */
    if(!shadow_host)
    {
        shadow_host                 = document.querySelector("#shadow_host");
        if(shadow_host) shadow_root = shadow_host.shadowRoot;
    }

if(!shadow_host)
{
    shadow_host                         = document.createElement("DIV");
    shadow_host.id                      = "shadow_host";
    shadow_host.style.fontSize          = "initial";
    document.documentElement.appendChild( shadow_host );

    if( shadow_host.attachShadow ) {
        shadow_host.style.zIndex        = t_data.ZINDEX_SHADOW_HOST;
/*{{{
        shadow_host.style.zIndex        = parseInt((t_util.t_get_divs_style_z_index_max()+1000) / 1000) * 1000;
}}}*/
if( log_this || DOM_TOOLS_TAG)    log("%c shadow_host.style.zIndex=["+shadow_host.style.zIndex+"]", lbH+lf1);
        shadow_host.style.fontSize      = t_data.FONT_SIZE_SHADOW_HOST;

        shadow_root =                     shadow_host.attachShadow({mode: "open"});
    }
    else {
        logBIG(caller+": shadow_host.attachShadow is missing");
        /* doc + tools event clash         */
        /* shadow_root = document.body;    */
        shadow_root    = shadow_host;
    }

    shadow_root.id     = "shadow_root";
}
    /*}}}*/
    /* [shadow_root] HEAD charset utf-8 .. (200624: relying on script charset="utf-8" attribute instead) {{{*/
/*{{{
    let el = document.createElement("HEAD");

    el.innerHTML
        = "<head>"
        + " <meta http-equiv='content-type' content='text/html' charset='utf-8'>"
        + "</head>"

    shadow_root.appendChild( el );
}}}*/
    /*}}}*/
    /* load1_SHADOW_host [CSS HTML JS] {{{*/
/*{{{*/
/* eslint-disable no-undef */
if(log_this && (typeof chrome != "undefined") && chrome.runtime) {
    let script_array
    = { "dom_data"        : (typeof dom_data       )
      , "dom_log"         : (typeof dom_log        )
      , "dom_popup"       : (typeof dom_popup      )
      , "dom_util"        : (typeof dom_util       )
      , "dom_i18n"        : (typeof dom_i18n       )
      , "dom_prop"        : (typeof dom_prop       )
      , "dom_store"       : (typeof dom_store      )
      , "dom_fly"         : (typeof dom_fly        )
      , "dom_wording"     : (typeof dom_wording    )
      , "dom_select"      : (typeof dom_select     )
      , "dom_hide"        : (typeof dom_hide       )
      , "dom_view"        : (typeof dom_view       )
      , "dom_sticky"      : (typeof dom_sticky     )
      , "dom_seek"        : (typeof dom_seek       )
      , "dom_share"       : (typeof dom_share      )
      , "dom_details"     : (typeof dom_details    )
      , "dom_wot"         : (typeof dom_wot        )
      , "dom_sentence"    : (typeof dom_sentence   )
      , "dom_gutter"      : (typeof dom_gutter     )
      , "dom_ipc"         : (typeof dom_ipc        )
      , "dom_tools"       : (typeof dom_tools      )
      , "dom_grid"        : (typeof dom_grid       )
    };
    let script_js_array
    = { "dom_data_js"     : (typeof dom_data_js     )
      , "dom_log_js"      : (typeof dom_log_js      )
      , "dom_popup_js"    : (typeof dom_popup_js    )
      , "dom_util_js"     : (typeof dom_util_js     )
      , "dom_i18n_js"     : (typeof dom_i18n_js     )
      , "dom_prop_js"     : (typeof dom_prop_js     )
      , "dom_store_js"    : (typeof dom_store_js    )
      , "dom_fly_js"      : (typeof dom_fly_js      )
      , "dom_wording_js"  : (typeof dom_wording_js  )
      , "dom_select_js"   : (typeof dom_select_js   )
      , "dom_hide_js"     : (typeof dom_hide_js     )
      , "dom_view_js"     : (typeof dom_view_js     )
      , "dom_sticky_js"   : (typeof dom_sticky_js   )
      , "dom_seek_js"     : (typeof dom_seek_js     )
      , "dom_share_js"    : (typeof dom_share_js    )
      , "dom_details_js"  : (typeof dom_details_js  )
      , "dom_wot_js"      : (typeof dom_wot_js      )
      , "dom_sentence_js" : (typeof dom_sentence_js )
      , "dom_gutter_js"   : (typeof dom_gutter_js   )
      , "dom_ipc_js"      : (typeof dom_ipc_js      )
      , "dom_tools_js"    : (typeof dom_tools_js    )
      , "dom_grid_js"     : (typeof dom_grid_js     )
    };

    if(dom_log && dom_log.log_key_val)  dom_log.log_key_val("script_array", script_array);
    else                                console.log        ("script_array", script_array);

    if(dom_log && dom_log.log_key_val)  dom_log.log_key_val("script_js_array", script_js_array);
    else                                console.log        ("script_js_array", script_js_array);
}
/* eslint-enable  no-undef */
/*}}}*/

    let  id;
    id = "dom_tools_html"   ; if(                  !load1_SHADOW_host(id) ) return id; /* fail early .. instead of shadowing dangling dependencies */
    id = "dom_tools_css"    ; if(                  !load1_SHADOW_host(id) ) return id;

    id = "dom_data_js"      ; if(!dom_data     &&  !load1_SHADOW_host(id) ) return id;

    id = "dom_log_js"       ; if(!dom_log      &&  !load1_SHADOW_host(id) ) return id;
    id = "dom_popup_js"     ; if(!dom_popup    &&  !load1_SHADOW_host(id) ) return id;
    id = "dom_util_js"      ; if(!dom_util     &&  !load1_SHADOW_host(id) ) return id;
    id = "dom_i18n_js"      ; if(!dom_i18n     &&  !load1_SHADOW_host(id) ) return id;
    id = "dom_prop_js"      ; if(!dom_prop     &&  !load1_SHADOW_host(id) ) return id;

    id = "dom_store_js"     ; if(!dom_store    &&  !load1_SHADOW_host(id) ) return id;
    id = "dom_fly_js"       ; if(!dom_fly      &&  !load1_SHADOW_host(id) ) return id;
    id = "dom_wording_js"   ; if(!dom_wording  &&  !load1_SHADOW_host(id) ) return id;
    id = "dom_select_js"    ; if(!dom_select   &&  !load1_SHADOW_host(id) ) return id;

    id = "dom_hide_js"      ; if(!dom_hide     &&  !load1_SHADOW_host(id) ) return id;
    id = "dom_view_js"      ; if(!dom_view     &&  !load1_SHADOW_host(id) ) return id;
    id = "dom_sticky_js"    ; if(!dom_sticky   &&  !load1_SHADOW_host(id) ) return id;
    id = "dom_seek_js"      ; if(!dom_seek     &&  !load1_SHADOW_host(id) ) return id;
    id = "dom_share_js"     ; if(!dom_share    &&  !load1_SHADOW_host(id) ) return id;

    id = "dom_details_js"   ; if(!dom_details  &&  !load1_SHADOW_host(id) ) return id;
    id = "dom_wot_js"       ; if(!dom_wot      &&  !load1_SHADOW_host(id) ) return id;
    id = "dom_sentence_js"  ; if(!dom_sentence &&  !load1_SHADOW_host(id) ) return id;
    id = "dom_gutter_js"    ; if(!dom_gutter   &&  !load1_SHADOW_host(id) ) return id;

    id = "dom_ipc_js"       ; if(!dom_ipc      &&  !load1_SHADOW_host(id) ) return id;
    id = "dom_tools_js"     ; if(!dom_tools    &&  !load1_SHADOW_host(id) ) return id;

    if( load1_SHADOW_host("dom_grid_html", true) ) /* OPTIONAL */
    {
        load1_SHADOW_host("dom_grid_css" );
        load1_SHADOW_host("dom_grid_js"  );
    }

    /*}}}*/
    return "";
};
/*}}}*/
/*… load1_SHADOW_host {{{*/
let load1_SHADOW_host = function(id,optional)
{
/*{{{*/
let   caller = "load1_SHADOW_host";
let log_this = LOG_MAP.T1_DOM_LOAD;
let tag_this = DOM_TOOLS_TAG || log_this;

if( log_this) log(caller+"%c"+id, lbH+lf1);
/*}}}*/
    if( id.includes(" ") ) { log("%c"+caller+" %c"+id+"%c ID INCLUDES A SPACE", lbH+lf3, lbL+lf2, lbR+lf2); return false; }

    let el = (shadow_root && shadow_root.querySelector("#"+id));
    if( el )
    {
        if(tag_this) log("%c"+caller+" %c"+id+"%c ALREADY SHADOWED"   , lbH+lf3, lbL+lf2, lbR+lf2);
        if(log_this) log_caller();
    }
    else {
        el = document.querySelector("#"+id);
        if(!el ) {
            if(!optional) {
                log("%c"+caller+" %c"+id+"%c ELEMENT IS MISSING" , lbH+lf3, lbL+lf2, lbR+lf2);
                log_caller();
            }
            return false;
        }

        /* proxiedNode .. [https://www.wisdomjobs.com] .. [ special (/unique?) case] {{{*/
        if(el.proxiedNode)
        {
if(log_this) log(caller+": using proxiedNode ["+el.proxiedNode.type+"]:");
if(log_this) t_log.console_dir("el",el);
            el = el.proxiedNode;
        }
        /*}}}*/

        el.style.display = "inline";

        shadow_root.appendChild( el );
        log("%c"+caller+" %c"+id+"%c ........SHADOWED"   , lbH+lf3, lbL+lf2, lbR+lf2);
        log_caller();
    }
if( log_this) log(caller+"("+id+") %c       t_get_tool("+                          id +")"+ (      t_get_tool(id) ? " OK" : " FAILED"), lbF+lb7);
if( log_this) log(caller+"("+id+") %c getComputedStyle("+t_util.get_node_id_or_tag(el)+")"+ (getComputedStyle(el) ? " OK" : " FAILED"), lbF+lb7);
/*{{{
}}}*/
    return true;
};
/*}}}*/

/*… load2_TOOLS {{{*/
/* TOP-LEVEL PARAMETERS {{{*/
let dev_log_map;
let dom_load_tags;
let dom_tools_html;
let TOOL_panels = [];

/*}}}*/
let load2_TOOLS = function()
{
/*{{{*/
let caller = "load2_TOOLS";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+t_data.SD2+"%c "+caller, lbS+lf2, lbH+lf2);
/*}}}*/
    /* TOOLS CONTAINER [dom_tools_html] {{{*/
    let id;
    let tool;

    id = "dom_tools_html"   ;      dom_tools_html = t_get_tool(id);

    /*}}}*/

    /* ORDERED (OPTIONAL) PANELS INSERTION */

    /* PANEL [hotspot] .. BUILT-IN {{{*/
    id = "hotspot"          ;             hotspot = t_get_tool(id);
    TOOL_panels.push( hotspot );

    id =  "hotring"         ;             hotring = t_get_tool(id);
    id =  "hotspot_c"       ;           hotspot_c = t_get_tool(id);
    id =  "hotwave"         ;             hotwave = t_get_tool(id);
    /*}}}*/

    /* ROW #1 */
    /* PANEL [headsup] {{{*/
    id = "headsup"          ;             headsup = t_get_tool(id); if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( headsup );
    id = "thumb_p"          ;       toolbar_thumb = t_get_tool(id);

    id =  t_data.DOM_FREEZE        ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id =  t_data.USER_LANG         ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    {
        let el = prop.get_EL(t_data.USER_LANG);
        if( el ) {
            let     lang = dom_i18n.i18n_get_user_lang();
            el.title     = i18n_get(dom_i18n.USER_LANG, dom_i18n.USER_LANG);
            el.className = "flag bg_"+lang;
        }
    }
    id =  t_data.ANCHOR_FREEZE     ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id =  t_data.THEME_DARK        ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id =  t_data.WORDING           ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);

    id =  t_data.CONTAINERS_HI     ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);

    id =  t_data.OVERFLOW_VISI     ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);

    id =  t_data.DETAILS_CLOSE     ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id =  t_data.DETAILS_OPEN      ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id =  t_data.DETAILS_RADIO     ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);

    id =  t_data.SCROLL_SMOOTH     ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);

    id =  t_data.TOOLS_TIER2       ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);

    id =  t_data.SHOW_SEEKZONE     ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id =  t_data.PIN_SEEKSPOT      ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id =  t_data.LOG_SEEKSPOT      ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);

    id =  t_data.REMOVE_ADS        ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id =  t_data.SPLIT_WOT         ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id =  t_data.LINES_WOT         ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);

    id =  t_data.DENY_OR_ALLOW     ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id =  t_data.EDIT_OR_STAGE     ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id =  t_data.DOM_HIDE1_RESET   ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id =  t_data.DOM_HIDE1_UNDO    ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id =  t_data.MASK_OR_HIDE      ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id =  t_data.SITE_OR_PAGE      ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);

    /*}}}*/
    /* PANEL [headsup_w] {{{*/
    id = "headsup_w"             ;           headsup_w = t_get_tool(id); if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( headsup_w );
    id = t_data.WORDS_FILTER     ;  words_filter_input = t_get_tool(id);

    id = t_data.WORDS_EXACT      ; if(            tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id = t_data.WORDS_SEGMENT    ; if(            tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id = t_data.WORDS_HEAD_TAIL  ; if(            tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id = t_data.WORDS_OPCYCLE    ; if(            tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id = t_data.WORDS_RECYCLE    ; if(            tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id = t_data.WORDS_BAG_ROT    ; if(            tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);

    for(const iD of get_words_drop_affix_array())
        if(                                       tool = t_get_tool(iD)) load2_TOOLS_prop_set_EL(iD, tool);

    /*}}}*/
    /* PANEL [pat_bag] {{{*/
    id = "pat_bag"          ;             pat_bag = t_get_tool(id); if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( pat_bag );

     /*}}}*/
    /* PANEL [sel_bag] {{{*/
    id = "sel_bag"          ;             sel_bag = t_get_tool(id); if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( sel_bag );

    /*}}}*/
    /* ROW #2 */
    /* PANEL [headsup_ds] {{{*/
    id = "headsup_ds"       ;          headsup_ds = t_get_tool(id); if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( headsup_ds );

    id =  t_data.TOOLS_TRAP        ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    id =  t_data.TOOLS_SCROLL      ; if(           tool = t_get_tool(id)) load2_TOOLS_prop_set_EL(id, tool);
    /*}}}*/
    /* PANEL [headsup_fs] {{{*/
    id = "headsup_fs"       ;          headsup_fs = t_get_tool(id); if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( headsup_fs );

    /*}}}*/
    /* PANEL [headsup_bw] {{{*/
    id = "headsup_bw"       ;          headsup_bw = t_get_tool(id); if( is_a_DOM_LOAD_panel(id) )  TOOL_panels.push( headsup_bw );

    /*}}}*/
    /* PANEL [headsup_bz] {{{*/
    id = "headsup_bz"       ;          headsup_bz = t_get_tool(id); if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( headsup_bz );

    /*}}}*/
    /* ROW #3 */
    /* PANEL [test_panel] {{{*/
    id = "test_panel"    ;             test_panel = t_get_tool(id); if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( test_panel );

    /*}}}*/
    /* PANEL [dom_traversal] {{{*/
    id = "dom_traversal"    ;       dom_traversal = t_get_tool(id); if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( dom_traversal );

    /*}}}*/
    /* PANEL [transcript1] [transcript2] {{{*/
    id = "transcript1"      ;         transcript1 = t_get_tool(id); if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( transcript1 );

    id = "transcript2"      ;         transcript2 = t_get_tool(id); if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( transcript2 );

    t_log.log_TR_set_transcripts(transcript1, transcript2);
    /*}}}*/
    /* ROW #4 */
    /* PANEL [dom_load_tags] {{{*/
    id = "dom_load_tags"    ;       dom_load_tags = t_get_tool(id); if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( dom_load_tags );

    /*}}}*/
    /* PANEL [dev_log_map] {{{*/
    id = "dev_log_map"      ;         dev_log_map = t_get_tool(id); if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( dev_log_map );

    /*}}}*/

    /* FLOATING PANELS .. HTML ELEMENTS REFERENCES */
    /* pivspot fly_div dom_grid_html {{{*/
    id = "pivspot"          ;             pivspot = t_get_tool(id);
    id = "pivspot_c"        ;           pivspot_c = t_get_tool(id);

    t_seek.t_seeker_onLoad();

/*{{{
    id = "fly_div"          ;         let fly_div = t_get_tool(id);
}}}*/

    id = "dom_grid_html"    ;       dom_grid_html = t_get_tool(id);
    /*}}}*/

    /* ONLOAD: hide all panels .. made visible later by load_TOOLS_MAP_select {{{*/
    if(dom_tools_html) dom_tools_html.style.visibility = t_data.CSS_HIDDEN;

    for(const el of TOOL_panels) if(el) add_el_class(el, t_data.CSS_HIDDEN);

    /*}}}*/
if( log_this) prop.log_MAP(caller);
};
/*}}}*/
/*… load2_TOOLS_prop_set_EL {{{*/
let load2_TOOLS_prop_set_EL = function(id,el)
{
    prop.set_EL(id, el);

    t_util.set_el_caption(el);

    if( playground_clones_panel ) t_clone_3_panel_id_bg_type_label(playground_clones_panel, id, "bg7", "input");
};
/*}}}*/

/*… load3_PLAYGROUND_PANELS {{{*/
let load3_PLAYGROUND_PANELS = function()
{
/*{{{*/
let   caller = "load3_PLAYGROUND_PANELS";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+t_data.SD3+"%c "+caller, lbS+lf3, lbH+lf3);
/*}}}*/
    /* [dom_hide_tools_panel] {{{*/
    let panel;
    if( panel = document.getElementById("dom_hide_tools_panel"))
    {
        if(!panel.innerHTML) panel.innerHTML = "<em class='cc1'>HIDE TOOLS</em>";
        t_clone_1_DOC_SLIDER(panel, t_data.SITE_OR_PAGE   , "bg4");
        t_clone_1_DOC_SLIDER(panel, t_data.MASK_OR_HIDE   , "bg3");
        t_clone_1_DOC_SLIDER(panel, t_data.EDIT_OR_STAGE  , "bg2");
        t_clone_1_DOC_SLIDER(panel, t_data.DOM_HIDE1_RESET, "bg1");
        t_clone_1_DOC_SLIDER(panel, t_data.DOM_HIDE1_UNDO , "bg1");
        t_clone_1_DOC_SLIDER(panel, t_data.DENY_OR_ALLOW  , "bg0");
    }
    /*}}}*/
    /* [dom_hide_select_panel] {{{*/
    if(panel = document.getElementById("dom_hide_select_panel"))
    {
        let id, label, el;
        if(!panel.innerHTML) panel.innerHTML = "<em class='cc2'>HIDE SELECT</em>";
        id = "dom_hide1_collect_nodes_1"      ; label = "collect_nodes_1"      ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg2","input",label); if(el) prop.set_EL(id, el);
        id = "dom_hide1_collect_nodes_2"      ; label = "collect_nodes_2"      ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg3","input",label); if(el) prop.set_EL(id, el);
        id = "dom_hide1_collect_nodes_3"      ; label = "collect_nodes_3"      ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg4","input",label); if(el) prop.set_EL(id, el);
        id = "dom_hide1_collect_nodes_4"      ; label = "collect_nodes_4"      ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg5","input",label); if(el) prop.set_EL(id, el);
        id = "dom_hide1_container_clicked"    ; label = "container_clicked"    ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg1","input",label); if(el) prop.set_EL(id, el);
        id = "dom_hide4_scroll_to_last_hidden"; label = "scroll to last hidden"; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg1","input",label); if(el) prop.set_EL(id, el);
    }
    /*}}}*/
    /* [dom_hide_store_panel] {{{*/
    if(panel = document.getElementById("dom_hide_store_panel"))
    {
        let id, label, el;
        if(!panel.innerHTML) panel.innerHTML = "<em class='cc3'>HIDE STORE</em>";
        id = "dom_hide2_store_save"   ;         label = "store_save"   ;         el = t_clone_3_panel_id_bg_type_label(panel,id,"bg2","input",label); if(el) prop.set_EL(id, el);
        id = "dom_hide1_reset"        ;         label = "store_reset"  ;         el = t_clone_3_panel_id_bg_type_label(panel,id,"bg3","input",label); if(el) prop.set_EL(id, el);
        id = "dom_hide2_store_reload" ;         label = "store_reload" ;         el = t_clone_3_panel_id_bg_type_label(panel,id,"bg4","input",label); if(el) prop.set_EL(id, el);
        id = "dom_hide5_history_start";         label = "start_history";         el = t_clone_3_panel_id_bg_type_label(panel,id,"bg6","input",label); if(el) prop.set_EL(id, el);
    }
    /*}}}*/
    /* [dom_sticky_panel] {{{*/
    if(panel = document.getElementById("dom_sticky_panel"))
    {
        let id, label, el;
        if(!panel.innerHTML) panel.innerHTML = "<em class='cc3'>sticky</em>";

        id = "t_sticky_reorder"  ; label = "REORDER"      ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg2","input",label); if(el) prop.set_EL(id, el);
    }
    /*}}}*/

    load3_PLAYGROUND_clones_panel();
};
/*}}}*/
/*… load3_PLAYGROUND_clones_panel {{{*/
let       playground_clones_panel = false;
let load3_PLAYGROUND_clones_panel = function()
{
/*{{{*/
let caller = "load3_PLAYGROUND_clones_panel";
let log_this = LOG_MAP.T1_DOM_LOAD;

/*}}}*/
    /* look for playground_clones_panel {{{*/
    playground_clones_panel = document.getElementById("playground_clones_panel");
    if(!playground_clones_panel)
    {
if( log_this) log("FOUND NO DOC TOOL CLONES PANEL [playground_clones_panel]");

        return;
    }

if(log_this) t_log.console_dir(caller+": FOUND DOC TOOL CLONES PANEL", playground_clones_panel);
    /*}}}*/
    /* add control buttons {{{*/
    let panel = playground_clones_panel;
    let id, el;
    id = "t_sticky_reorder"         ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg1", "input"); if(el) prop.set_EL(id, el);
    id = "SEEK"                     ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg1", "em"  );
    id = t_seek.CSS_SEEK2_ONSLOTEL  ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg1", "input"); if(el) prop.set_EL(id, el);
    id = t_seek.CSS_SEEK1_ONRESUME  ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg1", "input"); if(el) prop.set_EL(id, el);
    id = t_seek.CSS_SEEK4_ONJUMPEL  ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg1", "input"); if(el) prop.set_EL(id, el);
    id = t_seek.CSS_SEEK5_ONSEEKER  ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg1", "input"); if(el) prop.set_EL(id, el);
    id = t_seek.CSS_SEEK6_ONSTICKY  ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg1", "input"); if(el) prop.set_EL(id, el);

    id = "HIDE"                     ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg2", "em"   );
    id = "container_clicked"        ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg2", "input"); if(el) prop.set_EL(id, el);
    id = "reset"                    ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg2", "input"); if(el) prop.set_EL(id, el);
    id = "scroll_to_last_hidden"    ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg2", "input"); if(el) prop.set_EL(id, el);

    id = "COLLECT"                  ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg3", "em"   );
    id = "collect_nodes_1"          ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg3", "input"); if(el) prop.set_EL(id, el);
    id = "collect_nodes_2"          ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg3", "input"); if(el) prop.set_EL(id, el);
    id = "collect_nodes_3"          ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg3", "input"); if(el) prop.set_EL(id, el);
    id = "collect_nodes_4"          ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg2", "input"); if(el) prop.set_EL(id, el);

    id = "STORE"                    ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg4", "em"   );
    id = "store_reload"             ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg4", "input"); if(el) prop.set_EL(id, el);
    id = "store_save"               ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg4", "input"); if(el) prop.set_EL(id, el);
    id = "start_history"            ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg4", "input"); if(el) prop.set_EL(id, el);

    id = "MISC1"                    ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg5", "em"   );
    id = "RELOAD"                   ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg5", "input"); if(el) prop.set_EL(id, el);
    id = "EXPORT"                   ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg5", "input"); if(el) prop.set_EL(id, el);
    id = "IMPORT"                   ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg5", "input"); if(el) prop.set_EL(id, el);

    id = "show_seekzone"            ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg5", "input"); if(el) prop.set_EL(id, el);
    id = "pin_seekspot"             ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg5", "input"); if(el) prop.set_EL(id, el);
    id = "log_seekspot"             ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg5", "input"); if(el) prop.set_EL(id, el);

    id = "remove_ads"               ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg5", "input"); if(el) prop.set_EL(id, el);
    id = "split_wot"                ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg5", "input"); if(el) prop.set_EL(id, el);
    id = "lines_wot"                ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg5", "input"); if(el) prop.set_EL(id, el);

    id = "MISC2"                    ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg6", "em"   );
    id = "theme_dark"               ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg6", "input"); if(el) prop.set_EL(id, el);
    id = "pat_sort"                 ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg6", "input"); if(el) prop.set_EL(id, el);
    id = "console_clear"            ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg6", "input"); if(el) prop.set_EL(id, el);

    id = "PROPERTIES"               ; el = t_clone_3_panel_id_bg_type_label(panel,id,"bg7", "em"   );

    /*}}}*/
};
/*}}}*/

/*… load4_HEADSUP {{{*/
let load4_HEADSUP = function()
{
/*{{{*/
let caller = "load4_HEADSUP";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+t_data.SD4+"%c "+caller, lbS+lf4, lbH+lf4);
/*}}}*/
    /* headsup {{{*/
    let el;

    if( el = toolbar_thumb                        ) { el.style.position   = "absolute"; el.style.left = " 7%"; el.style.top    = "  2%"; el.style.transform = ""; }
    if( el = prop.get_EL( t_data.DOM_FREEZE      )) { el.style.position   = "absolute"; el.style.left = "70%"; el.style.top    = " 40%"; el.style.transform = ""; }
    if( el = prop.get_EL( t_data.USER_LANG       )) { el.style.position   = "absolute"; el.style.left = "45%"; el.style.top    = " 36%"; el.style.transform = ""; }
    if( el = prop.get_EL( t_data.ANCHOR_FREEZE   )) { el.style.position   = "absolute"; el.style.left = " 0%"; el.style.top    = " 19%"; el.style.transform = ""; }
    if( el = prop.get_EL( t_data.WORDING         )) { el.style.position   = "absolute"; el.style.left = " 0%"; el.style.top    = " 47%"; el.style.transform = ""; }

    if( el = prop.get_EL( t_data.CONTAINERS_HI   )) { el.style.position   = "absolute"; el.style.left = "28%"; el.style.top    = "  0%"; el.style.transform = ""; }
    if( el = prop.get_EL( t_data.THEME_DARK      )) { el.style.position   = "absolute"; el.style.left = "42%"; el.style.top    = "  0%"; el.style.transform = ""; }
    if( el = prop.get_EL( t_data.TOOLS_TIER2     )) { el.style.position   = "absolute"; el.style.left = "85%"; el.style.top    = " 65%"; el.style.transform = ""; }

    if( el = prop.get_EL( t_data.REMOVE_ADS      )) { el.style.position   = "absolute"; el.style.left = "52%"; el.style.bottom = "  0%"; el.style.transform = ""; }
    if( el = prop.get_EL( t_data.SPLIT_WOT       )) { el.style.position   = "absolute"; el.style.left = "62%"; el.style.bottom = "  0%"; el.style.transform = ""; }
    if( el = prop.get_EL( t_data.LINES_WOT       )) { el.style.position   = "absolute"; el.style.left = "73%"; el.style.bottom = "  0%"; el.style.transform = ""; }

    if( el = prop.get_EL( t_data.SCROLL_SMOOTH   )) { el.style.position   = "absolute"; el.style.left = "36%"; el.style.bottom = "  0%"; el.style.transform = ""; }
    if( el = prop.get_EL( t_data.OVERFLOW_VISI   )) { el.style.position   = "absolute"; el.style.left = "18%"; el.style.bottom = "  0%"; el.style.transform = ""; }

    if( el = prop.get_EL( t_data.DETAILS_CLOSE   )) { el.style.position   = "absolute"; el.style.left = "60%"; el.style.top    = "  0%"; el.style.transform = ""; }
    if( el = prop.get_EL( t_data.DETAILS_OPEN    )) { el.style.position   = "absolute"; el.style.left = "60%"; el.style.top    = " 23%"; el.style.transform = ""; }
    if( el = prop.get_EL( t_data.DETAILS_RADIO   )) { el.style.position   = "absolute"; el.style.left = "74%"; el.style.top    = " 12%"; el.style.transform = ""; }

    if( el = prop.get_EL( t_data.PIN_SEEKSPOT    )) { el.style.position   = "absolute"; el.style.left = "70%"; el.style.top    = "  5%"; el.style.transform = ""; }
    if( el = prop.get_EL( t_data.SHOW_SEEKZONE   )) { el.style.position   = "absolute"; el.style.left = "70%"; el.style.top    = " 30%"; el.style.transform = ""; }
    if( el = prop.get_EL( t_data.LOG_SEEKSPOT    )) { el.style.position   = "absolute"; el.style.left = "70%"; el.style.top    = " 50%"; el.style.transform = ""; }

    /*}}}*/
    /* headsup_w {{{*/
    if( el = prop.get_EL( t_data.WORDS_EXACT     )) { el.style.position   = "absolute"; el.style.left =  "10px"; el.style.top = " 52px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop.get_EL( t_data.WORDS_SEGMENT   )) { el.style.position   = "absolute"; el.style.left =  "55px"; el.style.top = " 38px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop.get_EL( t_data.WORDS_HEAD_TAIL )) { el.style.position   = "absolute"; el.style.left = "100px"; el.style.top = " 52px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop.get_EL( t_data.WORDS_OPCYCLE   )) { el.style.position   = "absolute"; el.style.left =  "55px"; el.style.top = " 85px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop.get_EL( t_data.WORDS_RECYCLE   )) { el.style.position   = "absolute"; el.style.left = "100px"; el.style.top = "100px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop.get_EL( t_data.WORDS_BAG_ROT   )) { el.style.position   = "absolute"; el.style.left =  "10px"; el.style.top = "125px"; el.style.transform = "" /*"initial"*/; }

    let    top =  48; /* MAGIC NUMBER */
    let   left = 155; /* MAGIC NUMBER */


    for(const id of get_words_drop_affix_array())
    {
        if( el = prop.get_EL(id)) {
            el.style.position  = "absolute";
            el.style.left      =  left+"px";
            el.style.top       =   top+"px";
            el.style.transform =         "";
            top += 30; /* MAGIC NUMBER */
        }
    }
    /*}}}*/
    /* headsup_ds {{{*/
    if( el = prop.get_EL( t_data.TOOLS_TRAP      )) { el.style.position   = "absolute"; el.style.left =  "10px"; el.style.top =   "5px"; }
    if( el = prop.get_EL( t_data.TOOLS_SCROLL    )) { el.style.position   = "absolute"; el.style.left =  "80px"; el.style.top =   "5px"; }

    if( el = prop.get_EL( t_data.SITE_OR_PAGE    )) { el.style.position   = "absolute"; el.style.left =   "5px"; el.style.top =  "50px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop.get_EL( t_data.MASK_OR_HIDE    )) { el.style.position   = "absolute"; el.style.left =  "43px"; el.style.top =  "73px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop.get_EL( t_data.EDIT_OR_STAGE   )) { el.style.position   = "absolute"; el.style.left =  "80px"; el.style.top =  "50px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop.get_EL( t_data.DOM_HIDE1_RESET )) { el.style.position   = "absolute"; el.style.left = "125px"; el.style.top =  "35px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop.get_EL( t_data.DOM_HIDE1_UNDO  )) { el.style.position   = "absolute"; el.style.left = "110px"; el.style.top =  "85px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop.get_EL( t_data.DENY_OR_ALLOW   )) { el.style.position   = "absolute"; el.style.left = "135px"; el.style.top =  "80px"; el.style.transform = "scale(0.7)"    ; }

    /*}}}*/
};
/*}}}*/

/*… load5_STORAGE {{{*/
/*{{{*/
const ONLOAD_MOVE_HOTSPOT_DELAY = 2000;
let IN_WEBVIEW = "";
let USERAGENT  = "";

/*}}}*/
let load5_STORAGE = function()
{
/*{{{*/
let   caller = "load5_STORAGE";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log("%c"+t_data.SD5+"%c "+caller, lbS+lf5, lbH+lf5);
    let xy, x, y;
/*}}}*/
    /* LOAD STORED USER-SETTINGS {{{*/

    let id, state, value;

    id = t_data.DOM_FREEZE           ; value =  t_store.t_store_getItem(id)           ; prop.set(id, value);
    id = t_data.USER_LANG            ; value =  t_store.t_store_getItem(id)           ; prop.set(id, value);
    id = t_data.ANCHOR_FREEZE        ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state);
    id = t_data.CONTAINERS_HI        ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state);
    id = t_data.FLY_DIV_MAGNIFIED    ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state);
    id = t_data.LOG_SEEKSPOT         ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state);

    id = t_data.REMOVE_ADS           ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state, t_REMOVE_ADS_changed);
    id = t_data.SPLIT_WOT            ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state, t_WOT_SPLIT_changed);
    id = t_data.LINES_WOT            ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state, t_LINES_WOT_changed);

    id = t_data.OVERFLOW_VISI        ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state);
    id = t_data.DETAILS_RADIO        ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state);

    id = t_data.PIN_SEEKSPOT         ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state, t_PIN_SEEKSPOT_changed);
    id = t_data.PIVOT_MAGNIFIED      ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state);
    id = t_data.SCROLL_SMOOTH        ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state);
    id = t_data.SHOW_SEEKZONE        ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state, t_SHOW_SEEKZONE_changed);
    id = t_data.THEME_DARK           ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state);
    id = t_data.TOOLS_TIER2          ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state);
    id = t_data.TOOLS_SCROLL         ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state);
    id = t_data.TOOLS_TRAP           ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state);
/*{{{
    id =  "pat_sort"           ; state = (t_store.t_store_getItem(id) == "true"); prop.set(id, state, t_handle_1_pat_bag_sort_changed);
}}}*/

     /*}}}*/
    /* SELECTION CSV {{{*/
    t_store_get_patterns_csv();

     /*}}}*/
    /* INITIAL MODE .. (EDIT HIDE SITE) {{{*/
/*{{{
}}}*/
    prop.init(  t_data.SITE_OR_PAGE   , false, t_SITE_OR_PAGE_changed   );
    prop.init(  t_data.MASK_OR_HIDE   , false, t_MASK_OR_HIDE_changed   );
    prop.init(  t_data.EDIT_OR_STAGE  , false, t_EDIT_OR_STAGE_changed  );
    prop.init(  t_data.DOM_HIDE1_RESET, false, t_DOM_HIDE1_RESET_changed);
    prop.init(  t_data.DOM_HIDE1_UNDO , false, t_DOM_HIDE1_UNDO_changed );
/*{{{
    prop.init(  t_data.DENY_OR_ALLOW  , false, load5_STORAGE_log    );
}}}*/
/*{{{
    prop.init(  t_data.DENY_OR_ALLOW  , false, t_share.t_share1_EXPORT   );
logBIG("TODO dom_tools: load5_STORAGE .. hijacked button [deny_or_allow] .. CB set to t_share.t_share1_EXPORT");
}}}*/

    prop.init(  t_data.WORDS_DROP_ING ,  true                           );
    prop.init(  t_data.WORDS_DROP_S   ,  true                           );
    /*}}}*/
    /* USERAGENT {{{*/

    /* Mozilla/5.0
     * (Linux; Android 6.0.1; SGP512 Build/23.5.A.1.291; wv)
     * AppleWebKit/537.36 (KHTML, like Gecko)
     * Version/4.0
     * Chrome/57.0.2987.132
     * Safari/537.36
     */

    if(!USERAGENT)
    {
        USERAGENT  = window.navigator.userAgent;
        IN_WEBVIEW = (USERAGENT.toLowerCase().indexOf("android") > 0);

    }
    /*}}}*/
    /* pivotXY {{{*/
    xy = t_store.t_store_parseXY("pivotXY")
        || {  x : (window.innerWidth  / 2)
            , y : (window.innerHeight / 2) };

    xy.x = Math.max( -w_W , xy.x      );
    xy.y = Math.max( -w_H , xy.y      );
    xy.x = Math.min(        xy.x, w_W );
    xy.y = Math.min(        xy.y, w_H );

    t_set_pivotXY(xy.x, xy.y);
    /*}}}*/
    /* pivot_PANEL {{{*/
    id = t_store.t_store_getItem("pivot_PANEL");
    let panel = (id == null) ? null : t_get_tool(id);

    t_set_pivot_PANEL(panel, "STORED pivot_PANEL");
    /*}}}*/
    /* transcript1 transcript2 {{{*/
    if(transcript1)
    {
        panel     = transcript1;
        let key   = panel.id +"_pinned";
        let attr  = prop.set(key, t_store.t_store_getBool(key));
        if(!attr.value)
            panel.style.position = prop.get( t_data.TOOLS_SCROLL ) ? "absolute" : "fixed";
        else {
            if( xy = t_store.t_store_parseXY(panel.id +"_XY")) {
                xy = t_view.t_view5_move_panel_XY(panel, xy.x, xy.y);
                t_pin_panel_at_XY(panel, xy.x, xy.y, "fixed", t_data.ZINDEX_PINNED_PANEL_ZERO);
            }
        }
    }
    if(transcript2)
    {
        panel     = transcript2;
        let key   = panel.id +"_pinned";
        let attr  = prop.set(key, t_store.t_store_getBool(key));
        if(!attr.value)
            panel.style.position = prop.get( t_data.TOOLS_SCROLL ) ? "absolute" : "fixed";
        else {
            if( xy = t_store.t_store_parseXY(panel.id +"_XY")) {
                xy = t_view.t_view5_move_panel_XY(panel, xy.x, xy.y);
                t_pin_panel_at_XY(panel, xy.x, xy.y, "fixed", t_data.ZINDEX_PINNED_PANEL_ZERO);
            }
        }
    }
    /*}}}*/
    /* TOOL_panels [pinned xy magnified] {{{*/
/*{{{
    for(const [index , panel] of TOOL_panels.entries())
}}}*/
    for(let index=0; index < TOOL_panels.length; ++index) {
        panel              = TOOL_panels[          index];
/*{{{
log("%c panel=["+get_n_lbl(panel)+"]", lbH+lf8)
}}}*/
        /* skip panel in some transient state {{{*/
        if(!panel                           ) continue;

        if(has_el_class(panel, CSS_OPEN_BAG)) continue;
        /*}}}*/
        /* stored json value {{{*/
        let panel_json = t_store.t_store_getItem(panel.id);
        if(!panel_json ) continue;

        value = JSON.parse( panel_json );
if( log_this) log_key_val(caller+" "+panel.id+" value", value, lf3);
        /*}}}*/
        /* [pinned] [xy] {{{*/
        if( value.pinned) {
            if( value.xy ) {
                let vp_xy = t_view.t_view5_move_panel_XY(panel, value.xy.x, value.xy.y);
                t_pin_panel_at_XY(panel, vp_xy.x, vp_xy.y, "fixed", index+t_data.ZINDEX_PINNED_PANEL_ZERO);
            }
        }
        /*}}}*/
        /* [magnified] {{{*/
        if(panel != hotspot)
            t_layout_panel_magnified(panel, value.magnified);

        /*}}}*/
    }
    /*}}}*/
    /* spread_ratio {{{*/
    x =                      parseFloat(   t_store.t_store_getItem("spread_ratio_x") || 0.5);
    y =                      parseFloat(   t_store.t_store_getItem("spread_ratio_y") || 0.5);

    spread_ratio.x = x;
    spread_ratio.y = y;
/*{{{
logBIG(caller+": spread_ratio=["+spread_ratio.x+" "+spread_ratio.y+"]")
}}}*/
    /*}}}*/
    load5_STORAGE_hotspot();
    /* [dom_hide] {{{*/
    t_hide.dom_hide6_add_container_observer        ( t_seek_set_container_selected );
    t_hide.dom_hide6_add_t_store_set_value_observer( t_store.t_store_set_value             );
    t_hide.dom_hide6_add_info_observer             ( t_fly.t_fly                   );

    /*}}}*/
    /* IPC [dom_store] {{{*/
    t_store.t_store_add_info_observer( t_pat_bag_status_set_innerText );
    t_store.t_store_add_info_observer( t_fly.t_fly_observerCB               );

    t_store.t_store_add_listener();
    /*}}}*/
    /* ONLOAD: scroll to window_scrollY {{{ */
    let window_scrollY = t_store.t_store_getItem("window_scrollY"); window_scrollY = (window_scrollY == null) ? 0 : parseFloat(window_scrollY);
    let near_current_scroll = (Math.abs(window_scrollY - window.scrollY) < 2 * window.innerHeight);
    if(     window_scrollY
       && ((window.scrollY == 0) || near_current_scroll)
      ) {
        let scrollBehavior
            = near_current_scroll
            ?  "smooth"
            :  "instant";

        setTimeout( function() { dom_scroll.t_window_scrollTo(window.scrollX, window_scrollY, scrollBehavior); }, 2000);
    }
/*{{{
logBIG("GET window_scrollY=["+window_scrollY+"]", lf2);
}}}*/
    /*}}}*/
    /* add prop change listener {{{*/
    prop.set_CB( prop_id_state_CB );

    /*}}}*/
    /* t_data.WORDING {{{*/
    load_wording();

    /*}}}*/
    /* LOG SETTINGS */
if( log_this) load5_STORAGE_log();

};
/*}}}*/
/*… load5_STORAGE_hotspot {{{*/
let load5_STORAGE_hotspot = function()
{
/*{{{*/
let   caller = "load5_STORAGE_hotspot";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+t_data.SD5+"%c "+caller, lbS+lf5, lbH+lf5);
if( log_this) log_caller();
/*}}}*/
    /* [ON-LOAD] hotspotXY .. [IN-GUTTER] or [IN-WINDOW] {{{*/
    let value = t_store.t_store_getItem("hotspotXY");
    if( value ) hotspotXY = JSON.parse( value );
    hotspotXY.x = hotspotXY.x || HOTSPOT_STANDBY_X;
    hotspotXY.y = hotspotXY.y || HOTSPOT_STANDBY_Y;

    /*}}}*/
    /* hotspotXY .. IN-WINDOW POSITION {{{*/
    let xy;
    xy   = { x : hotspotXY.x , y : hotspotXY.y };
    xy.x = Math.max( -w_W , xy.x      );
    xy.y = Math.max( -w_H , xy.y      );
    xy.x = Math.min(        xy.x, w_W );
    xy.y = Math.min(        xy.y, w_H );

    if(xy.x || xy.y) t_gutter.set_WINDOW_XY(xy.x, xy.y);
if(log_this) logBIG(caller+": hotspotXY IN-WINDOW ["+xy.x+" "+xy.y+"]");
    /*}}}*/
    /* hotspotXY .. IN-GUTTER POSITION {{{*/
    xy   = { x : hotspotXY.x_in_gutter , y : hotspotXY.y_in_gutter };
    xy.x = Math.max( -w_W , xy.x      );
    xy.y = Math.max( -w_H , xy.y      );
    xy.x = Math.min(        xy.x, w_W );
    xy.y = Math.min(        xy.y, w_H );

    if(xy.x || xy.y) t_gutter.set_GUTTER_XY(xy.x, xy.y);

if(log_this) logBIG("hotspotXY_in_gutter=["+xy.x+" "+xy.y+"]");
    /*}}}*/
    /* [ON-LOAD] move to hotspotXY starting position {{{*/
if(log_this) log_key_val_group("LOADING hotspotXY", hotspotXY, lf7, true);

    xy.x = hotspotXY.gutter_urdl ? hotspotXY.x_in_gutter : hotspotXY.x;
    xy.y = hotspotXY.gutter_urdl ? hotspotXY.y_in_gutter : hotspotXY.y;
if(log_this) logBIG("POSTING A MOVE TO ["+xy.x+" "+xy.y+"] .. "+(hotspotXY.gutter_urdl ? "[IN-GUTTER]" : "[IN-WINDOW]"));

    t_tools_set_hotspot_xy(hotspotXY.x, hotspotXY.y);
if(log_this) logBIG("STARTING FROM: .. hotspotXY["+hotspotXY.x+" "+hotspotXY.y+"] .. h_x.h_y ["+h_x+" "+h_y+"]");

    enter_CSS_SLOW_REGROUP("LOADING");

    setTimeout(
               function() {
                   enter_CSS_SLOW_REGROUP("SHOWING HOTSPOT at "+xy.x+"@"+xy.y);

                   t_tools_set_top_xy(xy.x, xy.y);
               }
               , ONLOAD_MOVE_HOTSPOT_DELAY);
    /*}}}*/
};
/*}}}*/
/*… load5_STORAGE_log {{{*/
let load5_STORAGE_log = function()
{
log("%c STORAGE SETTINGS:", lbF+lb8);

    prop.log_MAP("load5_STORAGE_log");

    t_hide.dom_hide_log_settings();

    TOOL_KEY_PAGE_SITE_TRANSIENT.forEach(
        function(each) {
            let value = t_store.t_store_getItem(    each.key       );
            if( value ) t_store.t_store_key_log("", each.key, value);
        }
    );

    let id;

    id = "USERAGENT"         ; log("o %c "+id+": %c "+ USERAGENT +"] IN_WEBVIEW=["+ IN_WEBVIEW  +" ", lbF+lb1, lbA);
    id = "sel_csv"           ; log("o %c "+id+": %c "+ sel_csv                                  +" ", lbF+lb5, lbA);
    id = "pat_csv"           ; log("o %c "+id+": %c "+ pat_csv                                  +" ", lbF+lb5, lbA);
    id = "off_csv"           ; log("o %c "+id+": %c "+ off_csv                                  +" ", lbF+lb5, lbA);
    id = "alt_csv"           ; log("o %c "+id+": %c "+ alt_csv                                  +" ", lbF+lb5, lbA);
    id = "bak_csv"           ; log("o %c "+id+": %c "+ bak_csv                                  +" ", lbF+lb5, lbA);
    id = "bin_csv"           ; log("o %c "+id+": %c "+ bin_csv                                  +" ", lbF+lb5, lbA);
    id = "pivot_PANEL"       ; log("o %c "+id+": %c "+ get_n_lbl(pivot_PANEL)                   +" ", lbF+lb8, lbA);
    id = "pivotXY"           ; log("o %c "+id+": %c "+ pivotXY.x      +" "+ pivotXY.y           +" ", lbF+lb8, lbA);
    id = "hotspotXY"         ; log("o %c "+id+": %c "+ hotspotXY.x    +" "+ hotspotXY.y         +" ", lbF+lb8, lbA);
    id = "spread_ratio"      ; log("o %c "+id+": %c "+ spread_ratio.x +" "+ spread_ratio.y      +" ", lbF+lb8, lbA);
};
/*}}}*/

/*… load6_DOM_TAGS {{{*/
let DOM_TOOLS_HTML_TAG;
let DOM_GRID_HTML_TAG;
let DOM_HOST_CSS_TAG;
let DOM_TOOLS_CSS_TAG;
let DOM_GRID_CSS_TAG;

let load6_DOM_TAGS = function()
{
/*{{{*/
    let caller = "load6_DOM_TAGS";
let log_this = DOM_TOOLS_TAG || LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+t_data.SD6+"%c "+caller+" COLOR-STAMPING MODULE TAGS", lbS+lf6, lbH+lf6);
/*}}}*/
    /* dom_load_tags_el UI {{{*/
    let dom_load_tags_el = t_get_tool("dom_load_tags");
    if(!dom_load_tags) {
logBIG(caller+" *** t_get_tool('dom_load_tags') failed");

        return;
    }
    /*}}}*/

    let id, el;

    id = "dom_tools_html"; if(el = t_get_tool(id+"_tag")) DOM_TOOLS_HTML_TAG = el.innerHTML;
    id =  "dom_grid_html"; if(el = t_get_tool(id+"_tag")) DOM_GRID_HTML_TAG  = el.innerHTML;

    id =   "dom_host_css";                              DOM_HOST_CSS_TAG   = load6_DOC_CSS ( id );
    id =  "dom_tools_css";                              DOM_TOOLS_CSS_TAG  = load6_TOOL_CSS( id );
    id =   "dom_grid_css";                              DOM_GRID_CSS_TAG   = load6_TOOL_CSS( id );

    let m_class = "em_missing";

    /* (230124) https://groups.google.com/a/chromium.org/g/blink-dev/c/UYY2TRSL8_k
    /* ➔  @see: https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML */
    dom_load_tags_el.innerHTML = ""

+ ("LOADER"+LF)
        + ((typeof DOM_LOAD_TAG       == "undefined") ? "<em class='"+m_class+"'>DOM_LOAD_TAG       *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_LOAD_TAG       ) +"'>"+ DOM_LOAD_TAG        +"</em>")

+ ("HTML TOOLS"+LF)
        + ((typeof DOM_TOOLS_HTML_TAG == "undefined") ? "<em class='"+m_class+"'>DOM_TOOLS_HTML_TAG  *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_TOOLS_HTML_TAG ) +"'>"+ DOM_TOOLS_HTML_TAG  +"</em>")
        + ((typeof DOM_GRID_HTML_TAG  == "undefined") ? "<em class='"+m_class+"'>DOM_GRID_HTML_TAG   *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_GRID_HTML_TAG  ) +"'>"+ DOM_GRID_HTML_TAG   +"</em>")

+ ("CSS STYLE"+LF)
        + ((typeof DOM_HOST_CSS_TAG   == "undefined") ? "<em class='"+m_class+"'>DOM_HOST_CSS_TAG    *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_HOST_CSS_TAG   ) +"'>"+ DOM_HOST_CSS_TAG    +"</em>")
        + ((typeof DOM_GRID_CSS_TAG   == "undefined") ? "<em class='"+m_class+"'>DOM_GRID_CSS_TAG    *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_GRID_CSS_TAG   ) +"'>"+ DOM_GRID_CSS_TAG    +"</em>")
        + ((typeof DOM_TOOLS_CSS_TAG  == "undefined") ? "<em class='"+m_class+"'>DOM_TOOLS_CSS_TAG   *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_TOOLS_CSS_TAG  ) +"'>"+ DOM_TOOLS_CSS_TAG   +"</em>")

+ ("JS MODULES 05"+LF)
        + ((typeof DOM_DATA_JS_TAG    == "undefined") ? "<em class='"+m_class+"'>DOM_DATA_JS_TAG     *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_DATA_JS_TAG    ) +"'>"+ DOM_DATA_JS_TAG     +"</em>")

+ ("JS MODULES 06..10"+LF)
        + ((typeof DOM_LOG_JS_TAG     == "undefined") ? "<em class='"+m_class+"'>DOM_LOG_JS_TAG      *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_LOG_JS_TAG     ) +"'>"+ DOM_LOG_JS_TAG      +"</em>")
        + ((typeof DOM_POPUP_JS_TAG   == "undefined") ? "<em class='"+m_class+"'>DOM_POPUP_JS_TAG    *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_POPUP_JS_TAG   ) +"'>"+ DOM_POPUP_JS_TAG    +"</em>")
        + ((typeof DOM_UTIL_JS_TAG    == "undefined") ? "<em class='"+m_class+"'>DOM_UTIL_JS_TAG     *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_UTIL_JS_TAG    ) +"'>"+ DOM_UTIL_JS_TAG     +"</em>")
        + ((typeof DOM_I18N_JS_TAG    == "undefined") ? "<em class='"+m_class+"'>DOM_I18N_JS_TAG     *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_I18N_JS_TAG    ) +"'>"+ DOM_I18N_JS_TAG     +"</em>")
        + ((typeof DOM_PROP_JS_TAG    == "undefined") ? "<em class='"+m_class+"'>DOM_PROP_JS_TAG     *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_PROP_JS_TAG    ) +"'>"+ DOM_PROP_JS_TAG     +"</em>")

+ ("JS MODULES 11..15"+LF)
        + ((typeof DOM_STORE_JS_TAG   == "undefined") ? "<em class='"+m_class+"'>DOM_STORE_JS_TAG    *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_STORE_JS_TAG   ) +"'>"+ DOM_STORE_JS_TAG    +"</em>")
        + ((typeof DOM_FLY_JS_TAG     == "undefined") ? "<em class='"+m_class+"'>DOM_FLY_JS_TAG      *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_FLY_JS_TAG     ) +"'>"+ DOM_FLY_JS_TAG      +"</em>")
        + ((typeof DOM_WORDING_JS_TAG == "undefined") ? "<em class='"+m_class+"'>DOM_WORDING_JS_TAG  *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_WORDING_JS_TAG ) +"'>"+ DOM_WORDING_JS_TAG  +"</em>")
        + ((typeof DOM_SELECT_JS_TAG  == "undefined") ? "<em class='"+m_class+"'>DOM_SELECT_JS_TAG   *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_SELECT_JS_TAG  ) +"'>"+ DOM_SELECT_JS_TAG   +"</em>")
        + ((typeof DOM_SLOT_JS_TAG    == "undefined") ? "<em class='"+m_class+"'>DOM_SLOT_JS_TAG     *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_SLOT_JS_TAG    ) +"'>"+ DOM_SLOT_JS_TAG     +"</em>")


+ ("JS MODULES 16..20"+LF)
        + ((typeof DOM_HIDE_JS_TAG    == "undefined") ? "<em class='"+m_class+"'>DOM_HIDE_JS_TAG     *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_HIDE_JS_TAG    ) +"'>"+ DOM_HIDE_JS_TAG     +"</em>")
        + ((typeof DOM_VIEW_JS_TAG    == "undefined") ? "<em class='"+m_class+"'>DOM_VIEW_JS_TAG     *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_VIEW_JS_TAG    ) +"'>"+ DOM_VIEW_JS_TAG     +"</em>")
        + ((typeof DOM_STICKY_JS_TAG  == "undefined") ? "<em class='"+m_class+"'>DOM_STICKY_JS_TAG   *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_STICKY_JS_TAG  ) +"'>"+ DOM_STICKY_JS_TAG   +"</em>")
        + ((typeof DOM_SEEK_JS_TAG    == "undefined") ? "<em class='"+m_class+"'>DOM_SEEK_JS_TAG     *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_SEEK_JS_TAG    ) +"'>"+ DOM_SEEK_JS_TAG     +"</em>")
        + ((typeof DOM_SHARE_JS_TAG   == "undefined") ? "<em class='"+m_class+"'>DOM_SHARE_JS_TAG    *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_SHARE_JS_TAG   ) +"'>"+ DOM_SHARE_JS_TAG    +"</em>")

+ ("JS MODULES 21..25"+LF)
        + ((typeof DOM_DETAILS_JS_TAG == "undefined") ? "<em class='"+m_class+"'>DOM_DETAILS_JS_TAG  *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_DETAILS_JS_TAG ) +"'>"+ DOM_DETAILS_JS_TAG  +"</em>")
        + ((typeof DOM_WOT_JS_TAG     == "undefined") ? "<em class='"+m_class+"'>DOM_WOT_JS_TAG      *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_WOT_JS_TAG     ) +"'>"+ DOM_WOT_JS_TAG      +"</em>")
        + ((typeof DOM_SENTENCE_JS_TAG== "undefined") ? "<em class='"+m_class+"'>DOM_SENTENCE_JS_TAG *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_SENTENCE_JS_TAG) +"'>"+ DOM_SENTENCE_JS_TAG +"</em>")
        + ((typeof DOM_GRID_JS_TAG    == "undefined") ? "<em class='"+m_class+"'>DOM_GRID_JS_TAG     *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_GRID_JS_TAG    ) +"'>"+ DOM_GRID_JS_TAG     +"</em>")
        + ((typeof DOM_GUTTER_JS_TAG  == "undefined") ? "<em class='"+m_class+"'>DOM_GUTTER_JS_TAG   *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_GUTTER_JS_TAG  ) +"'>"+ DOM_GUTTER_JS_TAG   +"</em>")

+ ("JS MODULES 26..27"+LF)
        + ((typeof DOM_IPC_JS_TAG     == "undefined") ? "<em class='"+m_class+"'>DOM_IPC_JS_TAG      *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_IPC_JS_TAG     ) +"'>"+ DOM_IPC_JS_TAG      +"</em>")
        + ((typeof DOM_TOOLS_JS_TAG   == "undefined") ? "<em class='"+m_class+"'>DOM_TOOLS_JS_TAG    *</em>" : "<em class='cc"+ t_util.get_tag_hour( DOM_TOOLS_JS_TAG   ) +"'>"+ DOM_TOOLS_JS_TAG    +"</em>")
    ;
if(LOG_MAP.T3_LAYOUT) log(t_util.strip_HTML(dom_load_tags_el.innerHTML));

};
/*}}}*/
/*… load6_DOC_CSS {{{*/
let load6_DOC_CSS = function(id)
{
/*{{{*/
let   caller = "load6_DOC_CSS";
let log_this = DOM_TOOLS_TAG || LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+caller+"("+id+")", lbH+lf1);
/*}}}*/
    /* look for a DOCUMENT-HTMLElement with this id {{{*/
    let tag = "";

    let el = document.getElementById(id);
    if( el ) {
        tag = load6_CSS_TAG_FROM_CSSRULES(el);

    }
    /*}}}*/
if( log_this) log("%c...return: tag=["+tag+"]", lf1);
    return tag;
};
/*}}}*/
/*… load6_TOOL_CSS {{{*/
let load6_TOOL_CSS = function(id)
{
/*{{{*/
let   caller = "load6_TOOL_CSS";
let log_this = DOM_TOOLS_TAG || LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+caller+"("+id+")", lbH+lf3);
/*}}}*/
    /* look for a SHADOW-HTMLElement with this id {{{*/
    let tag = "";
    let el  = t_get_tool(id)  ;
if( log_this) log("...el=["+t_util.get_node_id_or_tag(el)+"]");
    if( el ) {
        tag = load6_CSS_TAG_FROM_CSSRULES(el);

    }
    /*}}}*/
if( log_this) log("%c...return: tag=["+tag+"]", lf3);
    return tag;
};
/*}}}*/
/*… load6_CSS_TAG_FROM_CSSRULES {{{*/
let load6_CSS_TAG_FROM_CSSRULES = function(el)
{
/*{{{*/
let   caller = "load6_CSS_TAG_FROM_CSSRULES";
let log_this = DOM_TOOLS_TAG || LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+caller+"("+t_util.get_id_or_tag_and_className(el)+")", lf6);
/*}}}*/
    let    tag = ""; let result = "";

    /* see https://stackoverflow.com/questions/48753691/cannot-access-cssrules-from-local-css-file-in-chrome-64/49160760#49160760 */
    if(document.location.origin == "file://")
    {
        tag = el.id+" ("+document.location.origin+")";
/*      el.title = "file scheme location has a CORS policy\n...preventing access to style.sheet.cssrules content signature";*/
    }
    else {
        try {
            if(     !el.sheet            ) result = "!el.sheet";
            else if(!el.sheet.cssRules   ) result = "!el.sheet.cssRules";
            else if(!el.sheet.cssRules[0]) result = "!el.sheet.cssRules[0]";
            else {
                let txt = el.sheet.cssRules[0].cssText;
                let x_1 = txt.indexOf    ('"'); /* eslint-disable-line quotes */
                let x_2 = txt.lastIndexOf('"'); /* eslint-disable-line quotes */
                txt     = txt.substring(x_1+1, x_2);
                tag     = txt.includes(el.id) ? txt : "";
            }
        }
        catch(ex) { result = ex; }              /* [Cannot access rules] */
    }

if( log_this) log("%c...return: "+(tag || result), (tag ? lf5:lf2));
    return tag;
};
/*}}}*/

/*… load7_GRID {{{ */
let load7_GRID = function()
{
/*{{{*/
let   caller = "load7_GRID";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+t_data.SD7+"%c "+caller, lbS+lf7, lbH+lf7);
/*}}}*/
    if(typeof t_grid.t_grid_MEASURE != "undefined")
        t_grid.t_grid_MEASURE();
};
/* }}} */

/*… load8_LOG_MAP {{{ */
let load8_LOG_MAP = function()
{
/*{{{*/
let   caller = "load8_LOG_MAP";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+t_data.SD8+"%c "+caller+": dev_log_map=["+get_n_lbl(dev_log_map)+"]", lbS+lf8, lbH+lf8);
if( log_this) t_log.console_dir("LOG_MAP",LOG_MAP);

/*}}}*/
    if( !dev_log_map ) return;

    let button_className = CSS_TOOLBAG_BUTTON;
    dev_log_map.innerHTML = ""

        + "<em class='"+button_className+" "+ (LOG_MAP.EV0_LISTEN     ? "cc9" : "cc8") +"'>"+ "EV0_LISTEN"      +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.EV1_DOWN       ? "cc1" : "cc8") +"'>"+ "EV1_DOWN"        +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.EV2_MOVE       ? "cc2" : "cc8") +"'>"+ "EV2_MOVE"        +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.EV3_UP         ? "cc3" : "cc8") +"'>"+ "EV3_UP"          +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.EV4_LONG_PRESS ? "cc4" : "cc8") +"'>"+ "EV4_LONG_PRESS"  +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.EV5_TOOL_CB    ? "cc5" : "cc8") +"'>"+ "EV5_TOOL_CB"     +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.EV6_CHANGED    ? "cc6" : "cc8") +"'>"+ "EV6_CHANGED"     +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.EV7_DISPATCH   ? "cc7" : "cc8") +"'>"+ "EV7_DISPATCH"    +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.EV8_FLOATLOG   ? "cc9" : "cc8") +"'>"+ "EV8_FLOATLOG"    +"</em>"

        + "<em class='"+button_className+" "+ (LOG_MAP.S0_PATTERN     ? "cc1" : "cc8") +"'>"+ "S0_PATTERN"      +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.S1_RANGE       ? "cc1" : "cc8") +"'>"+ "S1_RANGE"        +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.S2_SELECT      ? "cc2" : "cc8") +"'>"+ "S2_SELECT"       +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.S3_SLOT        ? "cc3" : "cc8") +"'>"+ "S3_SLOT"         +"</em>"

        + "<em class='"+button_className+" "+ (LOG_MAP.T0_STORE       ? "cc9" : "cc8") +"'>"+ "T0_STORE"        +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.T1_DOM_LOAD    ? "cc1" : "cc8") +"'>"+ "T1_DOM_LOAD"     +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.T2_GRID        ? "cc2" : "cc8") +"'>"+ "T2_GRID"         +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.T3_LAYOUT      ? "cc3" : "cc8") +"'>"+ "T3_LAYOUT"       +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.T4_PIVOT       ? "cc4" : "cc8") +"'>"+ "T4_PIVOT"        +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.T5_SPREAD      ? "cc5" : "cc8") +"'>"+ "T5_SPREAD"       +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.T6_SLOT        ? "cc6" : "cc8") +"'>"+ "T6_SLOT"         +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.T7_SHARE       ? "cc7" : "cc8") +"'>"+ "T7_SHARE"        +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.T8_TOOLBAR     ? "cc0" : "cc8") +"'>"+ "T8_TOOLBAR"      +"</em>"

        + "<em class='"+button_className+" "+ (LOG_MAP.IPC_LOG        ? "cc9" : "cc8") +"'>"+ "IPC_LOG"         +"</em>"

/* UNICODE {{{
        + "1 \u2610 \u2611 \u2620 \u2622 \u2638"+"<br>"
        + "2 \u2654 \u2655 \u2656 \u2657 \u2658"+"<br>"
        + "3 \u2659 \u2699 \u26A0 \u26A1 \u26AA"+"<br>"
        + "4 \u26AB \u26AC \u26D4 \u2705 \u2708"+"<br>"
        + "5 \u270B \u2710 \u2713 \u2714 \u2715"+"<br>"
        + "6 \u2716 \u2717 \u2718 \u271A \u271B"+"<br>"
        + "7 \u2724 \u2726 \u272D \u2731 \u2737"+"<br>"
        + "8 \u274C \u274D \u274E \u274F \u2753"+"<br>"
        + "9 \u2754 \u275D \u275E \u276E \u276F"+"<br>"
        + "A \u2770 \u2771 \u2774 \u2775 \u2794"+"<br>"
        + "B \u2795 \u2796 \u2797 \u2798 \u2799"+"<br>"
        + "C \u279A \u27A4 \u27EA \u27EB \u2AF6"+"<br>"
        + "D \u2AFB \u2AFC \u2AFD \u2B06 \u21E7"+"<br>"
}}}*/
    ;

    if(!t_has_push_pin_on_panel( dev_log_map ) ) t_add_toolpins_on_panel  ( dev_log_map );
    else                                         t_eval_wide_or_tall_panel( dev_log_map );
};
/* }}} */

/*➔ t_load_BEHAVIOR {{{*/
let t_load_BEHAVIOR = function()
{
/*{{{*/
let   caller = "t_load_BEHAVIOR";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+t_data.SD9+"%c "+caller, lbS+lf9, lbH+lf9);
/*}}}*/
    /* TOUCH OR MOUSE {{{*/
    /* f(ontouchstart) {{{*/
/*
    behavior_TOUCH_ELSE_DESKTOP = ("ontouchstart" in document.documentElement);
*/
    /*}}}*/
    /* f(navigatore.platform) {{{*/
/*
    let platform = navigator.platform.toLowerCase();
    behavior_TOUCH_ELSE_DESKTOP
        =  !platform.startsWith("hp"   )
        && !platform.startsWith("mac"  )
        && !platform.startsWith("sunos")
        && !platform.startsWith("win"  )
    ;
*/
    /*}}}*/
    /* f(resolution dpi) {{{*/
/*{{{
    behavior_TOUCH_ELSE_DESKTOP = window.matchMedia("only screen and (min-resolution : 128dpi)").matches;
logXXX("behavior_TOUCH_ELSE_DESKTOP=["+behavior_TOUCH_ELSE_DESKTOP+"]");
}}}*/
    /*}}}*/
    /* f(navigator.appVersion) {{{*/
    let appVersion = navigator.appVersion.toLowerCase();
    behavior_TOUCH_ELSE_DESKTOP
        =  !appVersion.includes("windows")
        && !appVersion.includes("hp"     )
        && !appVersion.includes("mac"    )
        && !appVersion.includes("sunos"  )
    ;
/*{{{
logXXX("behavior_TOUCH_ELSE_DESKTOP=["+behavior_TOUCH_ELSE_DESKTOP+"]");
}}}*/
    /*}}}*/
    let behavior_em
        = behavior_TOUCH_ELSE_DESKTOP
        ? "<em class='cc7 big'> MOBILE  TOUCH BEHAVIOR </em>"
        : "<em class='cc8 big'> DESKTOP MOUSE BEHAVIOR </em>"
    ;
    /*}}}*/
    /* LOG EVENTS {{{*/
    let e_yes = "<em class='cc5'>IS DEFINED</em>";
    let e_no  = "<em class='cc8'>IS NOT DEFINED</em>";

    let event_info
        = "<em>EVENTS</em>"+LF
        +"<ul>"+LF
        + "<li>ontouchstart "+ ((typeof document.documentElement.ontouchstart != "undefined") ? e_yes : e_no)+"</li>"+LF
        + "<li>s_log        "+ ((typeof s_log                                 != "undefined") ? e_yes : e_no)+"</li>"+LF
        + "<li>  log        "+ ((typeof   log                                 != "undefined") ? e_yes : e_no)+"</li>"+LF
        + (move_cooldown_reason ? "<li>"+move_cooldown_reason+"</li>"+LF : "")
        + "</ul>"
    ;

    /*}}}*/
    /* LOG SCREEN {{{*/
    let s_yes = "<em class='cc5'>YES</em>";
    let s_no  = "<em class='cc8'>NO</em>";

    let screen_info
        = "<em>MEDIA</em>"+LF
        +"<ul>"+LF
    ;
    let  q;
    q = "(orientation: landscape)"                 ; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "(orientation:  portrait)"                 ; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution :  20dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution :  80dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution :  90dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (max-resolution :  96dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution : 100dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution : 120dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution : 150dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution : 200dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution : 240dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution : 300dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution : 640dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    screen_info
        += "</ul>"
    ;

    /*}}}*/
    /* LOG NAVIGATOR {{{*/
    let navigator_info
        = "<em>NAVIGATOR</em>"+LF
        + "<ul>"+LF
        +  "<li>Browser CodeName.....: <em>"+ navigator.appCodeName   +"</em></li>"+LF
        +  "<li>Browser Name.........: <em>"+ navigator.appName       +"</em></li>"+LF
        +  "<li>Browser Version......: <em>"+ navigator.appVersion    +"</em></li>"+LF
        +  "<li>Cookies Enabled......: <em>"+ navigator.cookieEnabled +"</em></li>"+LF
        +  "<li>Browser Language.....: <em>"+ navigator.language      +"</em></li>"+LF
        +  "<li>Browser Online.......: <em>"+ navigator.onLine        +"</em></li>"+LF
        +  "<li>Platform.............: <em>"+ navigator.platform      +"</em></li>"+LF
        +  "<li>User-agent header....: <em>"+ navigator.userAgent     +"</em></li>"+LF
        + "</ul>"
    ;
    /*}}}*/
    /* LOG BEHAVIOR .. f(activated doc playground or tool transcript) {{{*/
    if(    t_fly.t_doc_div_clear("doc_log_div")
        || t_tools_panel_is_selected(transcript2)
    )
        t_fly.t_log_transcript_info(
            "<em class='cc8'>"+DOM_TOOLS_JS_TAG+"</em> "+ behavior_em
            +"<pre>"
            + event_info+LF
            + screen_info+LF
            + navigator_info
            +"</pre>"
        );

    /*}}}*/
};
/*}}}*/

/*… load10_IPC_and_LISTENERS {{{*/
let load10_IPC_and_LISTENERS = function()
{
/*{{{*/
let   caller = "load10_IPC_and_LISTENERS";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+t_data.SDA+"%c "+caller, lbS+lf9, lbH+lf9);
/*}}}*/
    /* [TOOLS NOT LOADED] .. f(CSP) .. [SEND IPC TOOLS NOT LOADED] {{{*/
    /* Content Security Poplicy (CSP) MAY HAVE "Refused to load the stylesheet" */
    let script_loaded;

    if((typeof DOM_TOOLS_CSS_TAG == "undefined") || !DOM_TOOLS_CSS_TAG)
    {
log("%c *** "+caller+": %c TOOLS_CSS INLINING HAS BEEN REJECTED", lb3, lb2);

        /* hide optional tools {{{*/
        for(const el of TOOL_panels) if(el) el.style.display = "none";

        let       el      = pivspot; if(el) el.style.display = "none";

        t_seek.t_seeker_hide();

        /*}}}*/
/*{{{
        if(    el = dom_grid_css_tag   ) el.style.display = "none";
        if(    el = dom_host_css_tag   ) el.style.display = "none";
        if(    el = dom_tools_css_tag  ) el.style.display = "none";
        if(    el = dom_tools_html_tag ) el.style.display = "none";
}}}*/
        let ipc      = {  t_load : TOOLS3_NEED_RELAXED_CSP
            ,             caller : DOM_TOOLS_JS_TAG
            ,            details : caller
        };
        t_ipc.t_ipc_SEND( ipc );

        script_loaded = false;
    }
    /*}}}*/
    /* [TOOLS LOADED] ... ADD EVENT LISTENERS {{{*/
    else {
if(LOG_MAP.EV0_LISTEN) log(caller+": ADDING EVENT LISTENERS");

        t_add_LISTENERS();

        script_loaded = true;
    }
    /*}}}*/
if( log_this) log("..."+caller+": return script_loaded=["+script_loaded+"]");
    return script_loaded;
};
/*}}}*/

/*… load11_POST {{{*/
let load11_POST = function()
{
/*{{{*/
let   caller = "load11_POST";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+t_data.SDB+"%c "+caller, lbS+lf1, lbH+lf1);
/*}}}*/
    /* SCRIPT INJECTION WAS PREVENTED BY CSP .. TELL BROWSER EXTENSION {{{*/
    /* Content Security Policy .. (needs header.csp amending) */
    if((typeof DOM_TOOLS_CSS_TAG == "undefined") || !DOM_TOOLS_CSS_TAG)
    {
        log("%c *** "+caller+": %c TOOLS CSS NOT LOADED ", lb2, lbF);
        /*if(extension_signature) {*/
            let ipc = {  t_load : TOOLS3_NEED_RELAXED_CSP
                ,        caller : DOM_TOOLS_JS_TAG
                ,       details : caller
            };
            t_ipc.t_ipc_SEND( ipc );
        /*}*/
    }
    /*}}}*/
    /* SENDING TOOLS SIGNATURE .. (to browser extension) {{{*/
    else {
/*{{{
        let message = document.body.attributes[IPC_EXTENSION_ID]
            ?         document.body.attributes[IPC_EXTENSION_ID].textContent : "";
        if( message) {
            let ipc = t_ipc.t_ipc_PARSE( message );
if(LOG_MAP.IPC_LOG) log(caller+": LOCKING ON LAST MESSAGE sequence_number: =["+ipc.sequence_number+"]");

            if(ipc.sequence_number) t_get_IPC_sequence_number = ipc.sequence_number;
        }
}}}*/
        let ipc
            = { t_load : TOOLS4_DEPLOYED
            ,   caller : DOM_TOOLS_JS_TAG+"."+caller
        };
        t_ipc.t_ipc_SEND( ipc );

    }
    /*}}}*/
    /* IPC .. (MutationObserver) .. SLOW! .. https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events {{{*/
    if(!t_ipc.t_ipc_listener_id) {
logBIG("adding (SLOWING DOWN !) MutationObserver");
        t_ipc.t_ipc_add_MutationObserver(DOM_TOOLS_JS_ID);

      /*t_ipc.t_ipc_add_message_listener(DOM_TOOLS_JS_ID);*/
    }
    /*}}}*/
    /* UI .. (init event parameters state) {{{*/
    t_clr_has_moved(caller+": CLEARING ONLOAD SCROLL");

    t_sync_styles(caller);
    t_SITE_OR_PAGE_changed();

    if(typeof t_select.t_sync_containers_hi != "undefined") t_select.t_sync_containers_hi();
    /*}}}*/
    /* TOOLS .. (display tools) {{{*/
/*{{{
}}}*/
    if(dom_tools_html) dom_tools_html.style.visibility = "visible";
    if(dom_tools_html) dom_tools_html.style.display    =   "block";

    t_sync_layout(caller);
    /*}}}*/
    /* SYNC PROP AND DOC TOOLS {{{*/
    setTimeout(load11_POST_delayed_divs_shadow_root,   500); /* .. (dom_grid_playground) */
    setTimeout(load11_POST_delayed_divs_document   ,  1000);
    /*}}}*/
    /* PINNED PANELS CURRENTLY VISIBLE .. notify interested modules {{{*/
    cache_PINNED_panels();

    /*}}}*/

    setTimeout(t_sync_wording                   ,  500); /* dom_wording module may be undefined at this time */
    setTimeout(t_sticky.t_sticky_LOAD           , 2000);

    t_TOOL_SET_eval_wide_or_tall_panel(caller);

    wording_3_CB_WORDS_RECYCLE_SYNC();
};
/*}}}*/
/*… load11_POST_delayed_divs {{{*/
/*{{{*/
const CSS_DISPLAY_DELAYED = "display_delayed";

/*}}}*/
let load11_POST_delayed_divs_shadow_root = function() { load11_POST_delayed_divs_handler(shadow_root  ); };
let load11_POST_delayed_divs_document    = function() { load11_POST_delayed_divs_handler(document.body); };
let load11_POST_delayed_divs_handler     = function(container)
{
    let caller = "load11_POST_delayed_divs_handler";
let log_this = LOG_MAP.T1_DOM_LOAD || LOG_MAP.EV7_DISPATCH;

if(log_this) log("%c"+caller+"%c"+get_n_lbl(container),lbL+lf1,lbR+lf3);

    for(const child of container.children)
    {
        if( child.classList && child.classList.contains( CSS_DISPLAY_DELAYED ) )
        {
if(log_this) log(".%c"+ get_n_lbl(child)+" ", lbH+lf3);
            child.classList.remove  ( CSS_DISPLAY_DELAYED );
        }

        for(const el of child.children)
        {
            if(el.classList && el.classList.contains( CSS_DISPLAY_DELAYED ) )
            {
if(log_this) log("..%c"+ get_n_lbl(el)+" ", lbH+lf4);
                el.classList.remove  ( CSS_DISPLAY_DELAYED );
            }
        }
    }

};
/*}}}*/

/*}}}*/

/* TOOL SETTINGS {{{*/

/* TODO GENERALIZE THE HANDLING OF [UNDECIDED NUMBER OF MULTIPLE-ITEMS-PROPERTY (e.g. words suffix) ] */

/* WORDS SUFFIX OPTIONS {{{*/

/*…   get_words_drop_affix_array {{{*/
let       words_drop_affix_array;
let   get_words_drop_affix_array = function()
{
    if(!words_drop_affix_array) {
        words_drop_affix_array = [];
        for(const sfx of t_data.WORDS_SUFFIXES)
            words_drop_affix_array.push("words_drop_"+sfx);
    }

    return words_drop_affix_array;
};
/*}}}*/

/*}}}*/

/* TOOL_KEY_PAGE_SITE_TRANSIENT {{{*/
const TOOL_KEY_PAGE_SITE_TRANSIENT = [
    /* LOG_MAP ENTRIES {{{*/
    {   key : "EV0_LISTEN"           , page : false , site :  true, transient :  true }
    , { key : "EV1_DOWN"             , page : false , site :  true, transient : false }
    , { key : "EV2_MOVE"             , page : false , site :  true, transient : false }
    , { key : "EV3_UP"               , page : false , site :  true, transient : false }
    , { key : "EV4_LONG_PRESS"       , page : false , site :  true, transient : false }
    , { key : "EV5_TOOL_CB"          , page : false , site :  true, transient : false }
    , { key : "EV6_CHANGED"          , page : false , site :  true, transient : false }
    , { key : "EV7_DISPATCH"         , page : false , site :  true, transient : false }
    , { key : "EV8_FLOATLOG"         , page : false , site :  true, transient : false }

    , { key : "S0_PATTERN"           , page : false , site :  true, transient : false }
    , { key : "S1_RANGE"             , page : false , site :  true, transient : false }
    , { key : "S2_SELECT"            , page : false , site :  true, transient : false }
    , { key : "S3_SLOT"              , page : false , site :  true, transient : false }

    , { key : "T0_STORE"             , page : false , site :  true, transient : false }
    , { key : "T1_DOM_LOAD"          , page : false , site :  true, transient : false }
    , { key : "T2_GRID"              , page : false , site :  true, transient : false }
    , { key : "T3_LAYOUT"            , page : false , site :  true, transient : false }
    , { key : "T4_PIVOT"             , page : false , site :  true, transient : false }
    , { key : "T5_SPREAD"            , page : false , site :  true, transient : false }
    , { key : "T6_SLOT"              , page : false , site :  true, transient : false }
    , { key : "T7_SHARE"             , page : false , site :  true, transient : false }
    , { key : "T8_TOOLBAR"           , page : false , site :  true, transient :  true }

    , { key : "IPC_LOG"              , page : false , site :  true, transient :  true }

    /*}}}*/
    /* TOOLS LAYOUT {{{*/
    , { key : "pivotXY"                , page : false , site :  true, transient :  true }
    , { key : "pivot_PANEL"            , page : false , site :  true, transient : false }
    , { key :  t_data.PIVOT_MAGNIFIED         , page : false , site :  true, transient : false }

    , { key : "fly_div"                , page : false , site :  true, transient :  true }
    , { key : "fly_div_XY"             , page : false , site :  true, transient :  true }

    , { key : "spread_ratio_x"         , page : false , site :  true, transient :  true }
    , { key : "spread_ratio_y"         , page : false , site :  true, transient :  true }
    , { key : "hotspotXY"              , page : false , site :  true, transient :  true }

    , { key : "window_scrollY"         , page :  true , site : false, transient : false }

    , { key : "transcript1_pinned"     , page : false , site :  true, transient : false }
    , { key : "transcript2_pinned"     , page : false , site :  true, transient : false }
    /*}}}*/
    /* USER PATTERNS {{{*/
    , { key : "sel_arr"                , page :  true , site : false, transient : false }
    , { key : "pat_arr"                , page :  true , site : false, transient : false }
    , { key : "off_arr"                , page :  true , site : false, transient : false }
    , { key : "alt_arr"                , page :  true , site : false, transient : false }
    , { key : "bak_arr"                , page :  true , site : false, transient : false }
    , { key : "bin_arr"                , page :  true , site : false, transient : false }

/*{{{
    , { key : "node_to_hide_csv"       , page :  true , site :  true, transient : false }
}}}*/
    , { key : "page_node_to_hide_arr"  , page :  true , site : false, transient : false }
    , { key : "site_node_to_hide_arr"  , page : false , site :  true, transient : false }
    /*}}}*/
];
/*}}}*/

/* LOAD FROM STORE */
/*…   load_site_and_page_keys {{{*/
let   load_site_and_page_keys = function()
{
/*{{{*/
let   caller = "load_site_and_page_keys";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log(caller);
/*}}}*/

    /* LOG_MAP */
    Object.keys(LOG_MAP).forEach(
        function(key) {
            t_store.t_store_add_site_key( key );
        }
    );

    /* LAYOUT .. PATTERNS .. NODE_TO_HIDE */
    TOOL_KEY_PAGE_SITE_TRANSIENT.forEach(
        function(each) {
            if(  each.page     ) t_store.t_store_add_page_key            ( each.key );
            if(  each.site     ) t_store.t_store_add_site_key            ( each.key );
            if(  each.transient) t_store.t_store_do_not_log_transient_key( each.key );
        }
    );

    for(const panel of TOOL_panels) t_store.t_store_add_site_key( panel.id   ); /* TOOLS */

    for(let sticky_num = 1; sticky_num <= t_sticky.STICKY_MAX; ++sticky_num) t_store.t_store_add_page_key("sticky_"+sticky_num); /* STICKY */

if( log_this) {
    t_log.console_dir(caller+" .store_isa_site_key_array", t_store.isa_site_key_array);
    t_log.console_dir(caller+" .store_isa_page_key_array", t_store.isa_page_key_array);
}
};
/*}}}*/

/* SAVE TO STORE */
/*➔ t_tools_save_all_settings {{{*/
let t_tools_save_all_settings = function()
{
let   caller = "t_tools_save_all_settings";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log(caller);

    /* NOTHING TO SAVE */
    if(!has_el_class(hotring, CSS_PAGE_ITEMS_ALL_REMOVED) )
    {
/*{{{
logBIG("NOTHING TO SAVE .. CSS_PAGE_ITEMS_ALL_REMOVED",lf9);
}}}*/
        return;
    }
    save3_logging();
    save5_wording();
    save2_theme();
    save4_layout("WHILE SAVING ALL SETTINGS");
};
/*}}}*/
/*…   save2_theme {{{*/
let   save2_theme = function()
{
let   caller = "save2_theme";
let log_this = LOG_MAP.T0_STORE;
    /* TOOLS LAYOUT */
    let key, value;
if( log_this) log(caller);

/*{{{
    let scroll_last_scrollY = dom_scroll.get_scroll_last_scrollY();
    key = "window_scrollY"     ; value = scroll_last_scrollY   ; t_store.t_store_set_value(key, value);
}}}*/

    key = t_data.DOM_FREEZE    ; value = prop.get( key )       ; t_store.t_store_set_value(key, value);
    key = t_data.USER_LANG     ; value = prop.get( key )       ; t_store.t_store_set_value(key, value);
    key = t_data.ANCHOR_FREEZE ; value = prop.get( key )       ; t_store.t_store_set_state(key, value);
    key = t_data.CONTAINERS_HI ; value = prop.get( key )       ; t_store.t_store_set_state(key, value);
    key = t_data.THEME_DARK    ; value = prop.get( key )       ; t_store.t_store_set_state(key, value);
    key = t_data.TOOLS_TRAP    ; value = prop.get( key )       ; t_store.t_store_set_state(key, value);
    key = t_data.TOOLS_TIER2   ; value = prop.get( key )       ; t_store.t_store_set_state(key, value);

};
/*}}}*/
/*…   save3_logging {{{*/
let   save3_logging = function()
{
let   caller = "save3_logging";
let log_this = LOG_MAP.T0_STORE;
    /* LOGGING */
    let key, value;
if( log_this) log(caller);

/*{{{
    let scroll_last_scrollY = dom_scroll.get_scroll_last_scrollY();
    key = "window_scrollY"     ; value = scroll_last_scrollY   ; t_store.t_store_set_value(key, value);
}}}*/

    key = "EV0_LISTEN"         ; value = LOG_MAP.EV0_LISTEN    ; t_store.t_store_set_state(key, value);
    key = "EV1_DOWN"           ; value = LOG_MAP.EV1_DOWN      ; t_store.t_store_set_state(key, value);
    key = "EV2_MOVE"           ; value = LOG_MAP.EV2_MOVE      ; t_store.t_store_set_state(key, value);
    key = "EV3_UP"             ; value = LOG_MAP.EV3_UP        ; t_store.t_store_set_state(key, value);
    key = "EV4_LONG_PRESS"     ; value = LOG_MAP.EV4_LONG_PRESS; t_store.t_store_set_state(key, value);
    key = "EV5_TOOL_CB"        ; value = LOG_MAP.EV5_TOOL_CB   ; t_store.t_store_set_state(key, value);
    key = "EV6_CHANGED"        ; value = LOG_MAP.EV6_CHANGED   ; t_store.t_store_set_state(key, value);
    key = "EV7_DISPATCH"       ; value = LOG_MAP.EV7_DISPATCH  ; t_store.t_store_set_state(key, value);
    key = "EV8_FLOATLOG"       ; value = LOG_MAP.EV8_FLOATLOG  ; t_store.t_store_set_state(key, value);

    key = "S0_PATTERN"         ; value = LOG_MAP.S0_PATTERN    ; t_store.t_store_set_state(key, value);
    key = "S1_RANGE"           ; value = LOG_MAP.S1_RANGE      ; t_store.t_store_set_state(key, value);
    key = "S2_SELECT"          ; value = LOG_MAP.S2_SELECT     ; t_store.t_store_set_state(key, value);
    key = "S3_SLOT"            ; value = LOG_MAP.S3_SLOT       ; t_store.t_store_set_state(key, value);

    key = "T0_STORE"           ; value = LOG_MAP.T0_STORE      ; t_store.t_store_set_state(key, value);
    key = "T1_DOM_LOAD"        ; value = LOG_MAP.T1_DOM_LOAD   ; t_store.t_store_set_state(key, value);
    key = "T2_GRID"            ; value = LOG_MAP.T2_GRID       ; t_store.t_store_set_state(key, value);
    key = "T3_LAYOUT"          ; value = LOG_MAP.T3_LAYOUT     ; t_store.t_store_set_state(key, value);
    key = "T4_PIVOT"           ; value = LOG_MAP.T4_PIVOT      ; t_store.t_store_set_state(key, value);
    key = "T5_SPREAD"          ; value = LOG_MAP.T5_SPREAD     ; t_store.t_store_set_state(key, value);
    key = "T6_SLOT"            ; value = LOG_MAP.T6_SLOT       ; t_store.t_store_set_state(key, value);
    key = "T7_SHARE"           ; value = LOG_MAP.T7_SHARE      ; t_store.t_store_set_state(key, value);
    key = "T8_TOOLBAR"         ; value = LOG_MAP.T8_TOOLBAR    ; t_store.t_store_set_state(key, value);

    key = "IPC_LOG"            ; value = LOG_MAP.IPC_LOG       ; t_store.t_store_set_state(key, value);

    key =  t_data.FLY_DIV_MAGNIFIED   ; value = prop.get( t_data.FLY_DIV_MAGNIFIED ); t_store.t_store_set_state(key, value);

};
/*}}}*/
/*…   save4_layout {{{*/
/*{{{*/
const STORE_CYCLE_CLASSLIST   = ["store_count1","store_count2","store_count3"];
const STORE_CYCLE_CLEAR_DELAY = 250;

let t_store4_save_site_layout_step = 0;
/*}}}*/
let   save4_layout = function(reason)
{
/*{{{*/
let   caller = "save4_layout("+reason+")";
let log_this = LOG_MAP.T0_STORE;

if( log_this) logBIG(caller);
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_fly(caller);
/*}}}*/
    /* UNLESS NO PAGE DATA WORTH REMEMBERING {{{*/
    if(!t_store_consider_page_items_worth_storing("TOOLS LAYOUT") )
    {
if( log_this) log("...NO PAGE DATA WORTH REMEMBERING");

        return;
    }
    /*}}}*/
    /* TOOLS LAYOUT {{{*/
    let fly_div = t_fly.t_fly_div_get();
    let key, value, xy;
    if(hotspot) {
        /* CURRENT SCROLL POSITION {{{*/
        let scroll_last_scrollY = dom_scroll.get_scroll_last_scrollY();
        key = "window_scrollY"          ; value = scroll_last_scrollY       ; t_store.t_store_set_value(key, value);

        /*}}}*/
        /* HOTSPOT IN-GUTTER OR IN-WINDOW POSITION {{{*/
        /* SET LAST SAVED [URDL] BORDERING {{{*/
        h_x                      = hotspot.offsetLeft;
        h_y                      = hotspot.offsetTop;

        hotspotXY.gutter_urdl    = t_gutter.get_XY_URDL(h_x, h_y, caller);

        t_gutter.set_CSS_URDL(hotring, hotspotXY.gutter_urdl);

        /*}}}*/
        /* SET LAST SAVED [IN-GUTTER] POSITION {{{*/
        if(hotspotXY.gutter_urdl) {
            hotspotXY.x_in_gutter = h_x;
            hotspotXY.y_in_gutter = h_y;

            t_gutter.set_GUTTER_XY(h_x, h_y);
        }
        /*}}}*/
        /* SET LAST SAVED [IN-WINDOW] POSITION {{{*/
        else {
            hotspotXY.x           = h_x;
            hotspotXY.y           = h_y;

            t_gutter.set_WINDOW_XY(h_x, h_y);
        }
        /*}}}*/
if(log_this) log_key_val_group("SAVING hotspotXY", hotspotXY, lf5, false);
        key = "hotspotXY"               ; value = JSON.stringify(hotspotXY) ; t_store.t_store_set_value(key, value);
        /*}}}*/
        /* SAVE UNPINNED TOOLS LAYOUT {{{*/
        if( !hotspotXY.gutter_urdl )
        {
            key = "spread_ratio_x"      ; value = spread_ratio.x            ; t_store.t_store_set_value(key, value);
            key = "spread_ratio_y"      ; value = spread_ratio.y            ; t_store.t_store_set_value(key, value);
            if(pivot_PANEL) {
                key = "pivot_PANEL"     ; value = pivot_PANEL.id            ; t_store.t_store_set_value(key, value);
                key = "pivotXY"         ; value = JSON.stringify(pivotXY)   ; t_store.t_store_set_value(key, value);
                key =  t_data.PIVOT_MAGNIFIED  ; value = prop.get(key)             ; t_store.t_store_set_state(key, value);
            }
        }

        /*}}}*/
        /* SAVE FLYING TOOLTIPS .. POSITION AND MAGNIFICATION {{{*/
        xy  = { x:fly_div.offsetLeft , y:fly_div.offsetTop };
        key = "fly_div_XY"              ; value = JSON.stringify(xy)        ; t_store.t_store_set_value(key, value);
        key =  t_data.FLY_DIV_MAGNIFIED        ; value = prop.get(key)             ; t_store.t_store_set_state(key, value);

        /*}}}*/
        /* SEEK OPTIONS {{{*/
        key =  t_data.PIN_SEEKSPOT             ; value = prop.get(key)             ; t_store.t_store_set_state(key, value);
        key =  t_data.SHOW_SEEKZONE            ; value = prop.get(key)             ; t_store.t_store_set_state(key, value);
        key =  t_data.LOG_SEEKSPOT             ; value = prop.get(key)             ; t_store.t_store_set_state(key, value);

        key =  t_data.REMOVE_ADS               ; value = prop.get(key)             ; t_store.t_store_set_state(key, value);
        key =  t_data.SPLIT_WOT                ; value = prop.get(key)             ; t_store.t_store_set_state(key, value);
        key =  t_data.LINES_WOT                ; value = prop.get(key)             ; t_store.t_store_set_state(key, value);
        /*}}}*/
    }
    /*}}}*/
    /* SCROLL OVERFLOW DETAILS {{{*/
    key =  t_data.SCROLL_SMOOTH                ; value = prop.get(key); t_store.t_store_set_state(key, value);
    key =  t_data.OVERFLOW_VISI                ; value = prop.get(key); t_store.t_store_set_state(key, value);
    key =  t_data.DETAILS_RADIO                ; value = prop.get(key); t_store.t_store_set_state(key, value);

    key =  t_data.TOOLS_SCROLL                 ; value = prop.get(key); t_store.t_store_set_state(key, value);
    /*}}}*/
    /* PANELS SELECTED AND PINNED XY AND MAGNIFICATION {{{*/
    let some_change  = "";
    some_change     += save4_tools_panel_layout(transcript1);
    some_change     += save4_tools_panel_layout(transcript2);
    some_change     += save4_tools_panel_layout(fly_div    );

    for(const panel of TOOL_panels)
        some_change += save4_tools_panel_layout( panel );

    /*}}}*/
    /* PINS LAYOUT {{{*/
    if(some_change)
        t_TOOL_SET_eval_wide_or_tall_panel(caller);

    /*}}}*/
    /* STICKY [XY PINNED] {{{*/
    some_change     += t_sticky.t_sticky_STORE();

    /*}}}*/
    if(some_change)
    {
if((log_this || DOM_TOOLS_TAG) && some_change) logBIG(caller+": some_change=["+some_change+"]", lf7);
        /* increment hotspot storecount styling */
/*{{{
    t_util.cycle_el_classList(hotspot, STORE_CYCLE_CLASSLIST);
    setTimeout(function() { t_util.clear_el_classList(hotspot, STORE_CYCLE_CLASSLIST); }, STORE_CYCLE_CLEAR_DELAY);
}}}*/
        /* [next_class] */
        t_store4_save_site_layout_step += 1;
        let next_class = STORE_CYCLE_CLASSLIST[t_store4_save_site_layout_step % STORE_CYCLE_CLASSLIST.length];

/*{{{
log("%c set_el_class(hotspot, next_class=["+next_class+"])", lbH+lf8)
}}}*/
        set_el_class_removing(hotspot, next_class, t_data.CCX_CLASSLIST);

        /* schedule removal */
        setTimeout(
                   function() {
/*{{{
log("%c del_el_class(hotspot, next_class=["+next_class+"])", lbH+lf8)
}}}*/
                       del_el_class(hotspot, next_class);
                   }
                   , STORE_CYCLE_CLEAR_DELAY
                  );
    }
};
/*}}}*/
/*…   save4_tools_panel_layout {{{*/
let   save4_tools_panel_layout = function(panel)
{
/*{{{*/
let   caller = "save4_tools_panel_layout";
let log_this = LOG_MAP.T0_STORE;

/*}}}*/
    if(!panel) return "";

    /* selected by user or tools_tier2 */
    let some_change = "";
    let      key    = panel.id;
    let selected    = t_tools_panel_is_selected(panel);
    if(!selected) {
/*{{{
        some_change += t_store.t_store_set_value(key, null) ? (" "+key) : "";
}}}*/
                       t_store.t_store_set_value(key, null);
        return some_change;
    }

    let pinned = selected && panel.classList.contains(t_data.CSS_PINNED);
    let     xy = t_util.get_el_xy_computed(panel, caller);
    let    map = t_tools_map_get( panel );

    let  value = {  selected : (map && map.selected) /* selected by user */
        ,             pinned
        ,                 xy
        ,          magnified : has_el_class(panel,CSS_MAGNIFIED)
    };
if( log_this) log_key_val(key, value, lf3);

    some_change += t_store.t_store_set_value(key, JSON.stringify(value)) ? (" "+key) : "";

if((log_this || DOM_TOOLS_TAG) && some_change) logBIG(caller+": some_change=["+some_change+"]", lf4);
    return some_change;
};
/*}}}*/
/*…   save5_wording {{{*/
let   save5_wording = function()
{
let   caller = "save5_wording";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log("%c"+caller, lbH+lf5);

    let key, value;
/*{{{
.. replaced by store_set_patterns_csv
    key = "sel_csv"            ; value = sel_csv               ; t_store.t_store_set_value(key, value);
    key = "pat_csv"            ; value = pat_csv               ; t_store.t_store_set_value(key, value);
    key = "off_csv"            ; value = off_csv               ; t_store.t_store_set_value(key, value);
    key = "alt_csv"            ; value = alt_csv               ; t_store.t_store_set_value(key, value);
    key = "bak_csv"            ; value = bak_csv               ; t_store.t_store_set_value(key, value);
    key = "bin_csv"            ; value = bin_csv               ; t_store.t_store_set_value(key, value);
}}}*/

    t_hide.dom_hide2_store_save();

    key =  t_data.WORDING             ; value = prop.get(key)         ; t_store.t_store_set_state(key, value);
    key =  t_data.WORDS_EXACT         ; value = prop.get(key)         ; t_store.t_store_set_value(key, value);
    key =  t_data.WORDS_SEGMENT       ; value = prop.get(key)         ; t_store.t_store_set_value(key, value);
    key =  t_data.WORDS_HEAD_TAIL     ; value = prop.get(key)         ; t_store.t_store_set_value(key, value);
    key =  t_data.WORDS_OPCYCLE       ; value = prop.get(key)         ; t_store.t_store_set_state(key, value);

    for(const affix of get_words_drop_affix_array())
    {
        key     =           affix+"_unchecked";
        let val = !prop.get(affix);

if( log_this) log("%c SAVING  "+t_util.mPadStart(key,32)+"%c"+val, lbL+lf5, lbR+lfX[val ? 4 : 8]);
        t_store.t_store_set_state(key, val);
    }

};
/*}}}*/
/*…   load_wording {{{*/
let   load_wording = function()
{
/*{{{*/
let   caller = "t_load_wording";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log("%c"+caller, lbH+lf6);
/*}}}*/
    let key, state;

    key =  t_data.WORDING              ; state = (t_store.t_store_getItem(key) == "true"); prop.set(key, state);
    key =  t_data.WORDS_EXACT          ; state = (t_store.t_store_getItem(key) == "true"); prop.set(key, state, t_words_option_select);
    key =  t_data.WORDS_SEGMENT        ; state = (t_store.t_store_getItem(key) == "true"); prop.set(key, state, t_words_option_select);
    key =  t_data.WORDS_HEAD_TAIL      ; state = (t_store.t_store_getItem(key) == "true"); prop.set(key, state, t_words_option_select);
    key =  t_data.WORDS_OPCYCLE        ; state = (t_store.t_store_getItem(key) == "true"); prop.set(key, state, t_words_option_select);

    for(const affix of get_words_drop_affix_array())
    {
        key     = affix+"_unchecked";
        let val = (t_store.t_store_getItem(key) == "true");

if( log_this) log("%c LOADING "+t_util.mPadStart(key,32)+"%c"+val, lbL+lf6, lbR+lfX[val ? 4 : 8]);
        prop.set(affix, !val, t_words_option_select);
    }

    t_words_option_select("INIT");
};
/*}}}*/
/*➔ t_save_update_post {{{*/
/*{{{*/
let WORKING_LOCALSTORAGE_DELAY   =  250;
let PENDING_LOCALSTORAGE_DELAY   = 1000;
let FIRST_STORAGE_DELAY          = 5000;
let CSS_STORE_UPDATE_PENDING     = "store_update_pending";

let first_storage_delay_ellapsed = false;

let t_save_update_timer;
let t_save_update_callers = "";
let t_save_update_callers_count   =  0;
/*}}}*/
let t_save_update_post = function(_caller,delay=WORKING_LOCALSTORAGE_DELAY)
{
    /*{{{*/
    let caller = "t_save_update_post";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log(caller+"("+_caller+")");
    /*}}}*/
    wording_3_CB_WORDS_RECYCLE_SYNC();
/*{{{
}}}*/
    /* clearTimeout {{{*/
    if(               t_save_update_timer ) {
        clearTimeout( t_save_update_timer );
        /*.........*/ t_save_update_timer = null;
    }
    /*}}}*/
    /* ONLY AFTER [FIRST_STORAGE_DELAY] {{{*/
    if( t_just_loaded("FIRST SESSION LOCAL STORAGE", FIRST_STORAGE_DELAY, log_this) )
        return;

    first_storage_delay_ellapsed = true;
    /*}}}*/
    /* log first caller {{{*/
    if(!t_save_update_callers) {
        t_save_update_callers_count   = 1;
        t_save_update_callers = "1 "+ _caller;
if(log_this) log("%c FIRST PENDING LOCAL STORAGE .. %c BY "+t_save_update_callers
                 ,lb3                              ,lb0                                        );
    }
    /*}}}*/
    /* log more callers {{{*/
    else {
        t_save_update_callers_count += 1;
if(log_this && !t_save_update_callers.includes(_caller)) t_save_update_callers += LF + t_save_update_callers_count +" "+ _caller;
    }
    /*}}}*/
    /* post or commit handler {{{*/
    t_save_update_timer = setTimeout(save_update_handler, delay);

    add_el_class(hotspot, CSS_STORE_UPDATE_PENDING);
    /*}}}*/
};
/*}}}*/
/*…   save_update_handler {{{*/
let   save_update_handler = function()
{
/*{{{*/
let   caller = "save_update_handler";
let log_this = LOG_MAP.T0_STORE;

/*}}}*/
    /* POSTPONE AS LONG AS [onWork_EL] IS NOT RELEASED {{{*/
    if( onWork_EL ) {
if(log_this) log(caller+": %c PENDING LOCAL STORAGE POSTPONED BY %c "+get_n_lbl(onWork_EL)+" ", lb3,lb0);

        t_save_update_timer = setTimeout(save_update_handler, PENDING_LOCALSTORAGE_DELAY);
        return;
    }
    /*}}}*/
    t_save_update_timer = null;

    del_el_class(hotspot, CSS_STORE_UPDATE_PENDING);

if(log_this) log(caller+": %c PENDING LOCAL STORAGE (x"+t_save_update_callers_count+") BY: %c"+LF+t_save_update_callers, lb3,lb0);

    save4_layout(t_save_update_callers);
    t_save_update_callers_count   = 0;
    t_save_update_callers = "";

};
/*}}}*/
/*…   save_update_is_pending {{{*/
let   save_update_is_pending = function()
{
    if(!first_storage_delay_ellapsed)
        return true;
    else
        return !!t_save_update_timer;
};
/*}}}*/

/*}}}*/
/* TOOL CHANGE {{{*/
/*  t_SITE_OR_PAGE_changed {{{*/
/*{{{*/
const SITE_LOCALSTORAGE    = "site_localstorage";

/*}}}*/
let t_SITE_OR_PAGE_changed = function(id, site_or_page_mode) /* id=unused .. (callback glue) .. (function-name redundant) */
{
/* {{{*/
let   caller = "t_SITE_OR_PAGE_changed";
let log_this = LOG_MAP.T3_LAYOUT;

    site_or_page_mode = (typeof site_or_page_mode != "undefined") ? site_or_page_mode  : prop.get( t_data.SITE_OR_PAGE ); /* set of fetch */

if( log_this)
    log(  "%c"    + caller
         +"%c to "+ site_or_page_mode
         +"%c on "+ (behavior_TOUCH_ELSE_DESKTOP ? "MOBILE" : "DESKTOP")
         , lbL+lf3
         , lbR+lf4
         , lbH+lbb+ (behavior_TOUCH_ELSE_DESKTOP ?      lf7 : lf9   )
       );

    t_store.t_site_or_page_logged_keys_clear(caller); /* rearm logging .. to reflect t_data.SITE_OR_PAGE current state */

if(log_this || LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG))
     t_fly.t_fly("<em class='cc3'>"+caller+"</em> to <em class='cc4'>"+site_or_page_mode+"</em> on <em class='cc9'>"+(behavior_TOUCH_ELSE_DESKTOP ? "MOBILE" : "DESKTOP")+"</em>");

if(typeof dom_prop_notify != "undefined") dom_prop_notify(caller);

/*}}}*/
    /* TODO unexpand combinations (t_data.EDIT_OR_STAGE * t_data.SITE_OR_PAGE) */
    /* NOT EDITING {{{*/
    let          lfw;
    let      context;
    let   transition;
    let  which_nodes;

    let in_page_mode = !site_or_page_mode;
    let       action =  prop.get(  t_data.MASK_OR_HIDE ) ? "MASKING" : "HIDING";
    let          lfa = (action == "MASKING"     ) ?       lf6 : lf2     ;

    if(!prop.get( t_data.EDIT_OR_STAGE ) )
    {
        context = "WHILE NOT EDITING";
        if( in_page_mode ) {
            transition  = "ENTERING PAGE MODE";
            which_nodes = "SITE AND PAGE NODES";     lfw = lf4;
            t_hide.dom_hide2_store_reload("both");
            del_el_class(hotspot, SITE_LOCALSTORAGE);
        }
        else {
            transition  = "LEAVING PAGE MODE";
            which_nodes = "SITE ONLY NODES";         lfw = lf6;
            t_hide.dom_hide2_store_reload("site");
            add_el_class(hotspot, SITE_LOCALSTORAGE);
        }
    }
    /*}}}*/
    /* WHILE EDITING {{{*/
    else {
        context = "WHILE EDITING";
        if( in_page_mode ) {
            transition  = "ENTERING PAGE MODE";
            which_nodes = "PAGE ONLY NODES";         lfw = lf5;
            t_hide.dom_hide2_store_reload("page");
            del_el_class(hotspot, SITE_LOCALSTORAGE);
        }
        else {
            transition  = "LEAVING PAGE MODE";
            which_nodes = "SITE ONLY NODES";         lfw = lf6;
            t_hide.dom_hide2_store_reload("site");
            add_el_class(hotspot, SITE_LOCALSTORAGE);
        }
    }
    /*}}}*/
    t_hide.dom_hide3_set_MASK_OR_HIDE();

    if( t_cache_has_been_armed() )
        save4_layout(caller);
/*{{{*/
if( log_this)
    log("%c"+transition+"%c"+context+"%c"+action +"%c"+which_nodes
        ,lbb+lbL        ,lbb+lbR     ,lbb+lbL+lfa ,lbb+lbR+lfw    );

/*}}}*/
};
/*}}}*/
/*  t_DOM_HIDE1_RESET_changed {{{*/
let t_DOM_HIDE1_RESET_changed = function(id, value)
{
/*{{{*/
let   caller = "t_DOM_HIDE1_RESET_changed("+id+", "+value+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbH+lf5);
/*}}}*/
    t_hide.dom_hide1_reset();

    /* transient state fallback .. not a checkbox */
    setTimeout(function() { del_el_class(prop.get_EL(id), t_data.CSS_CHECKED); }, 1000);

};
/*}}}*/
/*  t_DOM_HIDE1_UNDO_changed {{{*/
let t_DOM_HIDE1_UNDO_changed = function(id, value)
{
/*{{{*/
let   caller = "t_DOM_HIDE1_UNDO_changed("+id+", "+value+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbH+lf5);
/*}}}*/
     t_hide .dom_hide_csv_stack_pop(id);

    t_SITE_OR_PAGE_changed(id, prop.get( t_data.SITE_OR_PAGE ));

    /* transient state fallback .. not a checkbox */
    setTimeout(function() { del_el_class(prop.get_EL(id), t_data.CSS_CHECKED); }, 1000);

};
/*}}}*/
/*  t_EDIT_OR_STAGE_changed {{{*/
let t_EDIT_OR_STAGE_changed = function(id, value)
{
/*{{{*/
let   caller = "t_EDIT_OR_STAGE_changed("+id+", "+value+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbH+lf5);
/*}}}*/
    if( value ) dom_EDIT_OR_STAGE_start(id, value);
    else        dom_EDIT_OR_STAGE_end  (id, value);

};
/*}}}*/
/*_ dom_EDIT_OR_STAGE_start {{{*/
let dom_EDIT_OR_STAGE_start = function()
{
/* {{{*/
let   caller = "dom_EDIT_OR_STAGE_start"; if(typeof dom_prop_notify != "undefined") dom_prop_notify(caller);
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbH+lf5);
/*}}}*/

    start_DOM_EDITING();

    t_seek.t_seekzone8_show_gutter_xywh(0, 0, window.innerWidth, window.innerHeight);

    let xy = t_gutter.get_GUTTER_XY();
    if( xy ) t_tools_set_top_xy(xy.x, xy.y);


    set_el_class_removing(hotspot_c, "", t_sticky.CSS_ROTATE_XX);

    /* START IN PAGE MODE .. (skipping onchange) */
    t_hide.dom_hide2_store_reload("page");

    /* ENTER EDIT MODE .. (skipping onchange) */
    prop.set(t_data.MASK_OR_HIDE,  true);
    t_hide.dom_hide3_set_MASK_OR_HIDE();

    /* ANCHOR FREEZE WHILE EDITING */
    t_sync_wording( caller );
};
/*}}}*/
/*_ dom_EDIT_OR_STAGE_end {{{*/
let dom_EDIT_OR_STAGE_end = function ()
{
/* {{{*/
let   caller = "dom_EDIT_OR_STAGE_end"; if(typeof dom_prop_notify != "undefined") dom_prop_notify(caller);
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbH+lf5);
/*}}}*/

    prop.set(t_data.EDIT_OR_STAGE, false);
    stop_DOM_EDITING();

    dom_EDIT_drag_hotspot_off_gutter();
    let xy = t_gutter.get_WINDOW_XY();
    if( xy ) t_tools_set_top_xy(xy.x, xy.y);

    t_seek.t_seekzone5_hide("instant");

    /* BACK TO HIDING PAGE HIDDEN NODES */
    prop.set(t_data.MASK_OR_HIDE, false);

    /* [t_data.SITE_OR_PAGE] .. QUIT DEPENDENT MODE */
    prop.set(t_data.SITE_OR_PAGE, false);

    /* RELOAD PAGE HIDDEN NODES */
    t_hide.dom_hide2_store_reload("both");
    t_hide.dom_hide3_set_MASK_OR_HIDE(true);

    /* ANCHOR UNFREEZE AFTER EDITING */
    t_sync_wording( caller );
};
/*}}}*/
/*_ dom_EDIT_drag_hotspot_off_gutter {{{*/
let dom_EDIT_drag_hotspot_off_gutter = function(x, y)
{
/* {{{*/
let   caller = "dom_EDIT_drag_hotspot_off_gutter";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller+"("+x+", "+y+")", lbH+lf5);
/*}}}*/

    t_seek.t_seekzone8_hide_gutter();

    t_sync_wording(caller); /* ANCHOR (UN)FREEZE */
    t_seek.t_seekzone5_hide("instant");
    t_store_consider_page_items_worth_storing("HOTSPOT OFF GUTTER");
};
/*}}}*/
/*_ start_DOM_EDITING {{{*/
let start_DOM_EDITING = function()
{
    add_el_class(hotspot, t_data.DOM_EDITING);

    if(    !has_el_class(headsup_ds, t_data.CSS_PINNED)) {
        t_set_CSS_PINNED(headsup_ds, true);

        headsup_ds.was_pinned = true;
    }
};
/*}}}*/
/*_ stop_DOM_EDITING {{{*/
let stop_DOM_EDITING = function()
{
    del_el_class(hotspot, t_data.MARKED_TO_HIDE);

    del_el_class(hotspot, t_data.DOM_EDITING   );

    if(headsup_ds.was_pinned) {
        t_set_CSS_PINNED(headsup_ds, false);

        delete headsup_ds.was_pinned;
    }
};
/*}}}*/
/*  t_MASK_OR_HIDE_changed {{{*/
let t_MASK_OR_HIDE_changed = function(id, value)
{
/*{{{*/
let   caller = "t_MASK_OR_HIDE_changed("+id+", "+value+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbH+lf5);
/*}}}*/

    /* [node_to_hide] toggle */
    t_hide.dom_hide3_set_MASK_OR_HIDE();

    if( prop.get( t_data.MASK_OR_HIDE ) )
        del_el_class(hotspot , t_data.MARKED_TO_HIDE);
    else
        add_el_class(hotspot , t_data.MARKED_TO_HIDE);

    t_seek.t_seekzone0_show_MASK_OR_HIDE();

    t_SITE_OR_PAGE_changed();
};
/*}}}*/


/*_ t_PIN_SEEKSPOT_changed {{{*/
let t_PIN_SEEKSPOT_changed = function(id, state)
{
/*{{{*/
let   caller = "t_PIN_SEEKSPOT_changed";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller+"("+id+", "+state+")", lbH+lf5);
/*}}}*/

    if(!state)
    {
        t_fly.t_fly_tooltip_clear(t_data.CSS_EVENT_LOG);
    }
};
/*}}}*/
/*_ t_SHOW_SEEKZONE_changed {{{*/
let t_SHOW_SEEKZONE_changed = function(id, state)
{
/*{{{*/
let   caller = "t_SHOW_SEEKZONE_changed";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller+"("+id+", "+state+")", lbH+lf5);
/*}}}*/

    if( !state )
    {
        t_seek.t_seekzone5_hide("instant");

        t_fly.t_fly_tooltip_clear(t_data.CSS_STICKY_LOG);
    }

    if(state) add_el_class(document.body, t_data.SHOW_SEEKZONE);
    else      del_el_class(document.body, t_data.SHOW_SEEKZONE);

    t_sticky.t_sticky_SET_DIMMED(!state, "["+id+" "+state+"]");

    t_sticky.t_sticky_SHOW_SEEKZONE_sync(state);

/*{{{
     FIXME CHANGING THE DOM SHOULD CLEAR ALL STICKY ANCHORS
    if(!prop.get(t_data.SPLIT_WOT ) || t_wot.t_WOT_SPLIT_done()) t_sticky.t_sticky_LOAD();
    else if(log_this) logBIG(caller+": [t_data.SPLIT_WOT] not done yet: call to [t_sticky.t_sticky_LOAD] canceled", lf2);
}}}*/
};
/*}}}*/
/*_ t_WOT_SPLIT_changed {{{*/
let t_WOT_SPLIT_changed = function(id, state)
{
    let by_user_or_from_storage = onWork_EL != null;
    if(!by_user_or_from_storage ) return;
    t_store.t_store_set_state(id, state);

    if(state && !t_wot.t_WOT_SPLIT_done())
    {
        t_wot.t_WOT_SPLIT();
        t_details.details_onload();
        t_sticky .t_sticky_LOAD_ANCHORS_CHANGED();
        if( pat_csv ) pat_bag3_reselect( pat_csv );
    }
    else if( t_wot.t_WOT_SPLIT_done() )
    {
        document.location.reload();
    }
};
/*}}}*/
/*_ t_LINES_WOT_changed {{{*/
let t_LINES_WOT_changed = function(id, state)
{
    let by_user_or_from_storage = onWork_EL != null;
    if(!by_user_or_from_storage ) return;
    t_store.t_store_set_state(id, state);

    if(state) {
        if(!prop.get(t_data.SPLIT_WOT))
            t_store.t_store_set_state(t_data.SPLIT_WOT, true);

        document.location.reload();
    }
    else {
        if( prop.get(t_data.SPLIT_WOT))
            document.location.reload();
    }
};
/*}}}*/
/*_ t_REMOVE_ADS_changed {{{*/
let t_REMOVE_ADS_changed = function(id, state)
{
    let by_user_or_from_storage = onWork_EL != null;
/*{{{
log("t_REMOVE_ADS_changed("+id+" , "+state+") %c"+ (by_user_or_from_storage ? "by_user":"from_storage"), lbH+(by_user_or_from_storage ? lf5 : lf8));
}}}*/
    if(!by_user_or_from_storage ) return;
    t_store.t_store_set_state(id);

    if(state)
    {
        t_util.t_REMOVE_ADS(id);

        t_sticky.t_sticky_LOAD_ANCHORS_CHANGED();

        if( pat_csv ) pat_bag3_reselect( pat_csv );
    }
/*{{{
    else if( t_util.t_REMOVE_ADS_results() ) {
        document.location.reload();

    }
}}}*/
};
/*}}}*/

/*}}}*/
/* TOOL NODE {{{*/
/*{{{*/
let behavior_TOUCH_ELSE_DESKTOP;

let dom_grid_html; /* PLAYGROUND */

let hotspot;
let  hotring;
let  hotwave;
let pivspot;

let pat_bag;
let sel_bag;
let headsup;
let headsup_bw;
let headsup_ds;
let headsup_bz;
let headsup_fs;
let headsup_w;

let dom_traversal;
let pivspot_c;
let hotspot_c;

let toolbar_thumb;
let words_filter_input;
let words_node_input;

let test_panel;

let transcript1;
let transcript2;

/*}}}*/
/*_ [ToolPanel] CLASS {{{*/
let  ToolPanel = function(panel, selected)
{
    /*this.init {{{*/
    this.init = function() {
        this.x        =        0;
        this.y        =        0;
        this.w        =        0;
        this.h        =        0;
        this.panel    =    panel;
        this.selected = selected;
        this.p        =       ""; /* position */
    };
    /*}}}*/
    /* this.log {{{*/
    this.log = function() {

        let   pinned =  this.panel.classList.contains(t_data.CSS_PINNED);

        let      lfx =  pinned                       ? lf2
            :           this.selected                ? lf4
            :                                          lf8;

        let      sym = !this.selected                ? t_data.SYMBOL_CLOSEPIN
            :           pinned                       ? t_data.SYMBOL_PUSH_PIN
            :                                          t_data.SYMBOL_CHECK_MARK;

        let      arr = " "+t_data.SYMBOL_RIGHT_LEFT_ARROW+" ";
        log( " %c "+sym+" " + this.panel.id
            +  " %c   POS=["+ this.p                + arr + this.panel.style.position                                +"]"
            +   " %c  X_Y=["+ this.x +" x "+ this.y + arr + this.panel.offsetLeft   +" x "+ this.panel.offsetTop     +"]"
            +    " %c W_H=["+ this.w +" x "+ this.h + arr + this.panel.offsetWidth  +" x "+ this.panel.offsetHeight  +"]"
            ,  lbH+lfx
            ,    lbH+lf5
            ,     lbH+lf6
            ,      lbH+lf7
           );
    };

/*{{{
    this.toString = this.log;
}}}*/

    /*}}}*/
    this.init(); /* construction-time-init */
};
/*_ [tools_map] ARRAY .. set get {{{*/

let tools_map = [];

let t_tools_get_map = function()
{
    return tools_map;
};

let tools_map_set = function(map)
{
    tools_map.push( map );
};

let t_tools_map_get = function(panel)
{
    for(const entry of tools_map) {
        if(   entry.panel == panel)
            return entry;
    }
    return null;
};
/*}}}*/
/*}}}*/
/*_ t_load_TOOLS_MAP {{{*/
/*{{{*/
let t_tools_loaded = false;
let tools_inlining_has_been_rejected_once;
/*}}}*/
let t_load_TOOLS_MAP = function(_caller)
{
    /* TOOLS INLINING HAS BEEN REJECTED {{{*/
    if(tools_inlining_has_been_rejected_once) return;

let   caller = "t_load_TOOLS_MAP("+_caller+")";
let log_this = LOG_MAP.T2_GRID || LOG_MAP.T1_DOM_LOAD;

if( log_this) logBIG(caller+": CALLED BY ["+ _caller+"]");

    if((typeof DOM_TOOLS_CSS_TAG == "undefined") || !DOM_TOOLS_CSS_TAG) {
log("%c *** "+caller+": %c TOOLS_CSS INLINING HAS BEEN REJECTED", lb4, lb2);
log_caller();
                        tools_inlining_has_been_rejected_once = true;

        return;
    }
    /*}}}*/
    /* ALREADY LOADED {{{*/
    if( t_tools_loaded ) {
/*{{{
        log("%c *** "+caller+": [tools_map] ALREADY LOADED ", lb2);
}}}*/
        return;
    }
     /*}}}*/
    /* [shadow_root] {{{*/
    if(!shadow_root) shadow_root = document.getElementById("shadow_root");

    if(shadow_root) {
if(log_this) t_log.console_dir("shadow_root:", shadow_root);
    }
     /*}}}*/
    /* [t_tools_loaded] {{{*/
    t_tools_loaded = (typeof t_get_tool != "undefined");
if(log_this) log("...t_tools_loaded=["+t_tools_loaded+"]");

    /*}}}*/
    /*  dom_grid_is_loaded {{{*/
    let dom_grid_is_loaded = is_dom_grid_loaded();
    if(!dom_grid_is_loaded )
        log_dom_grid_js_not_loaded(caller+"("+ _caller+")");

    /*}}}*/
    /* SELECT [tools_map] .. (load1_SHADOW's PRELOADED HIDDEN TOOLS) {{{*/
    load_TOOLS_MAP_select();

    /*}}}*/
    /* SHOW [hotspot] {{{*/
    del_el_class(hotspot, t_data.CSS_HIDDEN);

    /*}}}*/
};
/*}}}*/
/*… load_TOOLS_MAP_select {{{*/
let load_TOOLS_MAP_select = function()
{
/*{{{*/
let   caller = "load_TOOLS_MAP_select";
let log_this = LOG_MAP.T2_GRID || LOG_MAP.T1_DOM_LOAD;

let dom_load_id = (typeof DOM_LOAD_ID != "undefined") ? DOM_LOAD_ID : "default";
if( log_this) log(caller+": SELECTING TOOLS FOR DOM_LOAD_ID=["+dom_load_id+"] .. ("+TOOL_panels.length+" TOOL panels)");
/*}}}*/
    if( !t_tools_loaded ) return;

    let selected_count = 0;
/*{{{
    for(const [index , panel] of TOOL_panels.entries())
}}}*/
    for(let index=0; index < TOOL_panels.length; ++index) {
        let          panel = TOOL_panels[          index];
        if(           !panel ) {
            log("%c *** "+caller+": panel #"+index+" IS MISSING ", lb2);

            continue;
        }
        if((panel == hotspot) || is_a_DOM_LOAD_panel(panel.id))
        {
            /* GET CURRENT SELECTED STATE FROM STORAGE {{{*/
            let panel_json = t_store.t_store_getItem(panel.id);
if( log_this) log("%c"+index+"%c"+get_n_lbl(panel)+"%c "+panel_json, lbH, lbL+lf1, lbR+lf5);

            let selected;
            if( panel_json ) {
                let value = JSON.parse( panel_json );
                selected  = value.selected;
            }
            else {
                selected = false;
            }
            /*}}}*/
            /*NEW [ToolPanel] {{{*/
            if( !t_tools_map_get( panel ) )
            {
/*{{{
log("%c new ToolPanel("+get_n_lbl(panel)+")", lbB+lbH+lf2)
}}}*/
                tools_map_set(new ToolPanel(panel, selected));

                if(panel != hotspot)
                    t_add_toolpins_on_panel(panel);
            }
            /*}}}*/
            /* SET SELECTED PANEL VISIBILITY {{{*/
            if(panel == hotspot) set_el_class_on_off(panel,t_data.CSS_HIDDEN, false    );
            else                 set_el_class_on_off(panel,t_data.CSS_HIDDEN, !selected);

            selected_count += selected ? 1 : 0;

if(log_this && selected) t_tools_map_get(panel).log(caller+":");
            /*}}}*/
        }
    }
if(log_this) logBIG("tools_map.length=["+tools_map.length+"] selected_count=["+selected_count+"]");
};
/*}}}*/
/*_   set_pinned_panels_transform_origin {{{*/
let   set_pinned_panels_transform_origin = function()
{
/*{{{
    for(const [, panel] of TOOL_panels.entries())
}}}*/
    for(let i=0; i<TOOL_panels.length; ++i)
    {
        let                            panel = TOOL_panels[i];
        if(!t_tools_panel_is_selected( panel            )) continue;
        if(!has_el_class(panel, t_data.CSS_PINNED)) continue;

        t_util.t_adjust_panel_transform_origin( panel );
    }
};
/*}}}*/
/*_ t_get_selected_count {{{*/
let t_get_selected_count = function(_caller)
{
/*{{{*/
let log_this = LOG_MAP.T2_GRID;

if( log_this) log("t_get_selected_count: CALLED BY ["+ _caller+"]");
/*}}}*/
    let selected_count = 0;
/*  for(const [index , panel] of TOOL_panels.entries()) */
    for(let index=0; index < TOOL_panels.length; ++index) {
        let          panel = TOOL_panels[          index];
        if(!panel) {
            log("%c *** t_get_selected_count: panel #"+index+" IS MISSING ", lb2);
            continue;
        }
        let         key = panel.id+".selected";
        let    selected = t_store.t_store_getBool(key) ? true : false;
/*
if(log_this) log("... t_get_selected_count: ...t_store.t_store_getItem(key=["+key+"]): ...selected=["+selected+"]");
*/
        selected_count += selected ? 1 : 0;
    }

if(log_this) log("t_get_selected_count: ...return "+selected_count);
    return selected_count;
};
/*}}}*/

/*_ t_TOOLS_panels_reload {{{*/
let t_TOOLS_panels_reload = function(msg="")
{
/*{{{*/
let   caller = "t_TOOLS_panels_reload";
let log_this = LOG_MAP.T2_GRID || LOG_MAP.T1_DOM_LOAD;

if( log_this) log(caller+"("+msg+")");
/*}}}*/
    /* APPLY STORED PANELS STATE .. (selected .. pinned .. xy) {{{*/
    if(!t_tools_loaded) return;
    let selected_count = 0;

    for(const [index , panel] of TOOL_panels.entries())
    {
        if(!panel) continue;
        /* STORAGE {{{*/
        let panel_json = t_store.t_store_getItem(panel.id);
/*{{{
        if(!panel_json) continue; .. de-select instead of letting as is .. (200131)
}}}*/

        /*}}}*/
        /* PINNED XY {{{*/
        let value = JSON.parse( panel_json ) || { selected:false } ;
        if( value.pinned && value.xy )
        {
            let vp_xy = t_view.t_view5_move_panel_XY(panel, value.xy.x, value.xy.y);

            t_pin_panel_at_XY(panel, vp_xy.x, vp_xy.y, "fixed", index+t_data.ZINDEX_PINNED_PANEL_ZERO);
        }
        /*}}}*/
        if(panel == hotspot) continue;
        /* SELECTED {{{*/
        t_tools_panel_select(panel, value.selected);

        selected_count += value.selected ? 1 : 0;
        /*}}}*/
        /* panel toolpins {{{*/
        if(!t_has_push_pin_on_panel( panel ) ) t_add_toolpins_on_panel  (panel);
        else                                   t_eval_wide_or_tall_panel(panel);

        /*}}}*/
    }
    /*}}}*/
    /* MOVE HOTSPOT INTO VIEW {{{*/
    /* DEFAULT TO WINDOW CENTER */
/*{{{
    let xy = t_gutter.get_WINDOW_XY();

    if( xy ) t_tools_set_top_xy(xy.x, xy.y);
}}}*/
    load5_STORAGE_hotspot();
    /*}}}*/
if( log_this || DOM_TOOLS_TAG) log("%c TOOL PANELS RELOAD %c"+tools_map.length+" RELOADED %c"+selected_count+" SELECTED", lbL, lbC, lbR+lf5);
};
/*}}}*/
/*_ t_tools_panel_select {{{*/
let t_tools_panel_select = function(panel, state=true)
{
/*{{{*/
let caller = "t_tools_panel_select";
let log_this = LOG_MAP.T2_GRID;

if( log_this)          caller += "("+get_n_lbl(panel)+", "+state+")";
if( log_this) log("%c"+caller, lfX[state ? 5:8]);
/*}}}*/
    /* not while some TOOLS-TIER is active */
    if( prop.get( t_data.TOOLS_TIER2 ) )
    {
        pulse_id( t_data.TOOLS_TIER2       );
        prop.set( t_data.TOOLS_TIER2, false);

        return;
    }

    let map = t_tools_map_get( panel );
    if(!map) return;
    if( map.selected != state)
    {
if(log_this || DOM_TOOLS_TAG) log((state ? "SHOWING" : "HIDING")+" "+get_n_lbl(panel));

        t_grid.t_grid_TOOLS_SELECT_panel(panel, state);

        set_el_class_on_off(panel,t_data.CSS_HIDDEN, !map.selected);

        t_sync_layout(caller);
    }

    /* TOOLS_TIER2 may still apply */
    t_sync_tools_tier2(caller);
};
/*}}}*/

/*_   set_tool_id_value {{{*/
let   set_tool_id_value = function(id, value)
{
    let el = t_get_tool(id);
    if( el ) el.value     = value;
    if( el ) el.value_set = value;
};
/*}}}*/
/*_ t_get_tool_id_value {{{*/
let t_get_tool_id_value = function(id)
{
    let el = t_get_tool(id);
    if( el ) return el.value;
    else     return       "";
};
/*}}}*/
/*_ t_get_bag_id {{{*/
let t_get_bag_id = function(el)
{
    /* LOOK FOR A TOP-LEVEL PARENT PANEL */
    for(let node  = el; node != null; node = node.parentNode)
        if( get_node_bag_id ( node ) )         return node.id;

    /* CHECK A DOC-TOOL PROPERTY PARENT PANEL */
    if( t_util.is_el_child_of_class(el, "prop_bag") ) return "prop_bag";

    /* ... OR FAIL */
    else                                       return "";
};
/*}}}*/
/*_ get_node_bag_id {{{*/
let get_node_bag_id = function(node)
{
    if(node.id == "fly_div"            ) return node.id;

    if(t_seek.t_seeker_get_node_bag_id( node )) return node.id;

    if(node.id == "sel_bag"            ) return node.id;
    if(node.id == "pat_bag"            ) return node.id;
    if(node.id == "off_bag"            ) return node.id;
    if(node.id == "alt_bag"            ) return node.id;
    if(node.id == "bak_bag"            ) return node.id;

    if(node.id == "headsup"            ) return node.id;
    if(node.id == "headsup_w"          ) return node.id;
    if(node.id == "headsup_ds"         ) return node.id;
    if(node.id == "headsup_bw"         ) return node.id;
    if(node.id == "headsup_bz"         ) return node.id;
    if(node.id == "headsup_fs"         ) return node.id;

    if(node.id == "test_panel"         ) return node.id;
    if(node.id == "dev_log_map"        ) return node.id;
    if(node.id == "dom_load_tags"      ) return node.id;
    if(node.id == "dom_traversal"      ) return node.id;

    if(node.id == "transcript1"        ) return node.id;
    if(node.id == "transcript2"        ) return node.id;

    return "";
};
        /*}}}*/
/*_ t_get_tool {{{*/
let t_get_tool = function(id)
{
    if( id.includes(" ") ) return null;
    let selector
        = (id.charAt(0) != ".") && (id.charAt(0) != "#")
        ?  "#"+id
        :      id;

    let el;
    try {
        if( shadow_root ) el = shadow_root.querySelector( selector );
        if(!el          ) el = document   .querySelector( selector );
    }
    catch(ex) { if(DOM_TOOLS_LOG) { console.log("selector=["+selector+"]"); console.warn(ex); } }

/*{{{
console.log("t_get_tool("+id+"): ...return ["+(el ? (el.id || el.tagName) : null)+"]");
}}}*/
    return el;
};
/*}}}*/
/*_ t_get_shadow_tool {{{*/
let t_get_shadow_tool = function(id)
{
    if(!dom_tools_html)
        return false;

    let el = t_get_tool( id );
    if(!el)
        return null;

    return t_util.is_el_or_child_of_parent_el(el, dom_tools_html)
        ?   el
        :   null;
};
/*}}}*/
/*… is_a_seeker_target {{{*/
let is_a_seeker_target = function(el)
{
    let node_selected = t_select.t_is_node_selected(el);
    let        sticky = t_util.get_el_parent_with_class(el, t_data.CSS_STICKY_TOOL);

/*{{{
log("is_a_seeker_target("+get_n_lbl(el)+"): "+!!(node_selected || sticky));
}}}*/
    return node_selected || sticky;
};
/*}}}*/

/*_ t_update_TOOLS_MAP_GEOMETRY {{{*/
/*{{{*/
const T_UPDATE_TOOLS_MAP_GEOMETRY_DELAY = 1000;
let   t_update_TOOLS_MAP_GEOMETRY_timer;

/*}}}*/
let   t_update_TOOLS_MAP_GEOMETRY = function(_caller, delay=T_UPDATE_TOOLS_MAP_GEOMETRY_DELAY)
{
/*{{{*/
let   caller ="t_update_TOOLS_MAP_GEOMETRY()";
let log_this = LOG_MAP.T2_GRID;

if( log_this) log(caller+"("+ _caller+", delay=["+delay+"])");
/*}}}*/
    if(       t_update_TOOLS_MAP_GEOMETRY_timer ) clearTimeout( t_update_TOOLS_MAP_GEOMETRY_timer );
              t_update_TOOLS_MAP_GEOMETRY_timer = null;

    if(delay) t_update_TOOLS_MAP_GEOMETRY_timer =   setTimeout( t_update_TOOLS_MAP_GEOMETRY_handler, delay);
    else                                                        t_update_TOOLS_MAP_GEOMETRY_handler(); /* sync call */
};
/*}}}*/
/*_ t_update_TOOLS_MAP_GEOMETRY_handler {{{*/
let t_update_TOOLS_MAP_GEOMETRY_handler = function()
{
/*{{{*/
let   caller ="t_update_TOOLS_MAP_GEOMETRY_handler";
let log_this = LOG_MAP.T2_GRID;

/*{{{
if( log_this) t_log.console_clear_post(caller);
if( log_this) console.trace();
}}}*/

if( log_this) log("%c"+caller, lbH);

    t_update_TOOLS_MAP_GEOMETRY_timer = null;
/*}}}*/
    /* [tools_map] INIT {{{*/
    if(!t_tools_loaded) t_load_TOOLS_MAP(caller);
    let zIndexOffset = 0;
    /*}}}*/
    for(const map of tools_map)
    {
        /* CACHE PANEL CURRENT GEOMETRY {{{*/
        let panel =       map.panel;
/*{{{
logXXX(get_n_lbl(panel)+".position=["+ panel.style.position +"]");
}}}*/

        if( has_el_class(panel, t_data.CSS_ON_GRID))
        {
if(log_this) log("%c"+caller+" ["+panel.id+"] "+t_data.CSS_ON_GRID, lbb+lbH+lf7);

if(log_this) log_caller();
            return;
        }
        if( has_el_class(panel, t_data.CSS_HIDDEN )) continue;
/*{{{
        if(!map.selected                    ) continue;
}}}*/
        if(!t_tools_panel_is_selected(panel)) continue;

/*{{{
let cs = getComputedStyle(panel)
console.dir(cs)
logXXX("cs.width=["+cs.width+"]");
logXXX("cs.height=["+cs.height+"]");
logXXX("position=["+panel.style.position+"]");
}}}*/

        if(!panel.style.position) {
            panel.style.position = prop.get( t_data.TOOLS_SCROLL ) ? "absolute" : "fixed";
/*{{{
logBIG("SETTING position=["+panel.style.position+"]")
}}}*/
        }

        /*}}}*/
        /* UPDATE map {{{*/
        map.p   = panel.style.position;
        map.w   = panel.offsetWidth;
        map.h   = panel.offsetHeight;
        map.x   = panel.offsetLeft;
        map.y   = panel.offsetTop;
/*{{{
logXXX("%c"+caller+"%c "+panel.id+" %c "+map.x+" "+map.y, lbH, lbC+lf3, lbH+lf8);
}}}*/
if(log_this) map.log("...");
/*{{{
if(panel == pat_bag) log(caller+": ...pat_bag map.h=["+map.h+"] .. offsetHeight=["+panel.offsetHeight+"]");
}}}*/
        /*}}}*/
        /* CAP-TO-VIEWPORT STORE PINNED {{{*/
        let cap_to_viewport = panel.classList.contains(t_data.CSS_PINNED);
/*{{{
cap_to_viewport = prop.get("deny_or_allow");
}}}*/
        if( cap_to_viewport )
        {
/*{{{
logBIG("TODO dom_tools: cap_to_viewport .. hijacked button [deny_or_allow]");
}}}*/
            /* capped by viewport .. move bag into view */
            let xy = t_view.t_view5_move_panel_XY(panel);
/*{{{
            if( xy.capped ) {
}}}*/
                let zIndex = ++zIndexOffset + t_data.ZINDEX_PINNED_PANEL_ZERO;
                t_pin_panel_at_XY(panel, xy.x, xy.y, "fixed", zIndex);
                map.x = xy.x;
                map.y = xy.y;
                t_save_update_post(caller);
/*{{{
t_log_panel_style_zIndex(panel, caller+" [xy.capped]");
}}}*/
/*{{{
            }
}}}*/
/*{{{
else logBIG(get_n_lbl(panel)+" not capped")
}}}*/
        }
        /*}}}*/
    }
if( log_this) log("%c"+caller+"%c done", lbH, lbH);
};
/*}}}*/
/*_ t_update_panel_TOOLS_MAP_GEOMETRY {{{*/
let t_update_panel_TOOLS_MAP_GEOMETRY = function(panel)
{
    let map = t_tools_map_get( panel );
    if(!map) return;

/*{{{
log("%c UPDATING ["+panel.id+"] geometry FROM %c"+map.x+" "+map.y+"%c"+map.w+" "+map.h,lbL,lbC,lbR);
}}}*/
    map.x   = panel.offsetLeft;
    map.y   = panel.offsetTop;
    map.w   = panel.offsetWidth;
    map.h   = panel.offsetHeight;
/*{{{
log("%c...............................TO %c"+map.x+" "+map.y+"%c"+map.w+" "+map.h,lbL,lbC,lbR);
}}}*/

};
/*}}}*/
/*  t_dom_tools_html_appendChild {{{*/
let t_dom_tools_html_appendChild = function(child)
{
    if(dom_tools_html) dom_tools_html.appendChild( child );
    else               document.body .appendChild( child );
};
/*}}}*/
/*  t_dom_tools_html_set_el_class_on_off {{{*/
let t_dom_tools_html_set_el_class_on_off = function(css,state)
{
    if(dom_tools_html) set_el_class_on_off(dom_tools_html, css, state);
};
/*}}}*/
/*_ t_set_id_class_on_off {{{*/
let t_set_id_class_on_off = function(id, className, on_off)
{

    let el = t_get_tool(id);
    if(!el) return;

    t_util.set_el_class_on_off(el, className, on_off);
};
/*}}}*/
/*}}}*/

/* EVENT LISTENER .. ONDOWN .. PIVOT .. PINNED */
/*{{{*/
/** RESOURCES (onDown ➔ onWork) {{{*/

/*_______________XY___________________________*/
let onDown_HSPOT_XY        = { x:0, y:0 }; /* TODO ? could better be [onDown_HSPOT_MID] ? */
let onDown_TOOL_XY         = { x:0, y:0 };
let onDown_PANEL_XY        = { x:0, y:0 };
let onDown_XY_sign         = { x:0, y:0 };
let onMove_pivotXY         = { x:0, y:0 };

/*_________SCROLL_____________________________*/
let onDown_SCROLL_XY        = { x:0, y:0 };

/*_________PANEL______________________________*/
let onWork_PANEL           = null;
let onWork_PANEL_was_magnified_onMove;
let pivot_PANEL            = null;
let onStandby_PANEL        = null;
let onWork_PANEL_magnified = null;
let onWork_MOVABLE_PANEL   = null;

/*_________TOOL_______________________________*/
let onDown_EL              = null;
let onWork_EL              = null;
let onWork_MOVABLE_CHILD   = null;
let onWork_EL_last_used    = null;

/*_________MODIFIER___________________________*/
let onDown_SHIFT           = false;
let onDown_ALT             = false;
let onDown_CTRL            = false;

/*_________MILLISECOND_TIMING_________________*/
let onDownPMS              = 0;
let onDown_MS              = 0;
let onUp_MS                = 0;

/*__what_was_selected_at_event_start__________*/

/*}}}*/
/** LISTENER (add remove prevent) {{{*/
/* NOTE {{{

 :!start explorer "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver"

 Do not use the "on" prefix. For example, use "click" instead of "onclick".
 :!start explorer "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
 :!start explorer "https://www.w3schools.com/jsref/met_element_addeventlistener.asp"
 :!start explorer "https://www.w3schools.com/jsref/dom_obj_event.asp"
 :!start explorer "https://www.w3schools.com/charsets/ref_utf_math.asp"
 :!start explorer "http://xahlee.info/comp/unicode_arrows.html"

 [preventDefault]
 :!start explorer "https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md"

 [default-passive-events]
 :!start explorer "https://github.com/zzarcon/default-passive-events"
 :!start explorer "https://dom.spec.whatwg.org/#dictdef-eventlisteneroptions"

 [sourceURL]
 :!start explorer "https://www.html5rocks.com/en/tutorials/developertools/sourcemaps"

 option=[capture || true] .. e.eventPhase == (CAPTURING_PHASE || ON_TARGET) .. ( !BUBLINB_PHASE)
 option=[passive        ] .. will not call preventDefault

}}}*/

/* [PERSISTENT ] LISTENER [EVENT: down up move input resize scroll ] */
/*➔ t_add_input_listener {{{*/
let t_add_input_listener = function(el)
{
    add_listener_capture_active(el, "keydown", t_input_2_CB);
    add_listener_capture_active(el, "keyup"  , t_input_2_CB);
    add_listener_capture_active(el, "change" , t_input_2_CB);
};
/*}}}*/
/*_ t_add_LISTENERS {{{*/
let t_add_LISTENERS = function()
{
/*{{{*/
let   caller = "t_add_LISTENERS";
let log_this = LOG_MAP.EV0_LISTEN;

if( log_this) log("%c"+caller, lbb+lbH+lf2);
/*}}}*/
    /* UNLOAD */
    add_listener_capture_active(       window, "beforeunload"     , load_listener);
    add_listener_capture_active(       window,       "unload"     , load_listener);

    /* LAYOUT */
    add_listener_capture_active(       window, "scroll"           , dom_scroll.t_scroll_listener);
    add_listener_capture_active(       window, "resize"           , t_resize_listener);
    add_listener_capture_active(       window, "orientationchange", t_orient_listener);

    /* TOUCH */
    if( ("ontouchstart" in document.documentElement)) {
        add_listener_capture_active(   window, "touchstart"       , t_pointerdown_listener);
        add_listener_capture_active(   window, "touchend"         , t_pointerup_listener);
    }
    /* MOUSE */
    else {
        add_listener_capture_active(   window, "mousedown"        , t_pointerdown_listener);
        add_listener_capture_active(   window, "mouseup"          , t_pointerup_listener);
    }
/*{{{*/
if( log_this) {
    log("%c"+load_listener          .name+"%c beforeunload unload %c window",lbL,lbF+lf1,lbR);
    log("%c"+dom_scroll.t_scroll_listener      .name+"%c scroll              %c window",lbL,lbF+lf3,lbR);
    log("%c"+t_resize_listener      .name+"%c resize              %c window",lbL,lbF+lf3,lbR);
    log("%c"+t_orient_listener      .name+"%c orientationchange   %c window",lbL,lbF+lf3,lbR);

    log("%c"+t_pointerdown_listener .name+"%c mousedown           %c window",lbL,lbF+lf4,lbR);
    log("%c"+t_pointerup_listener   .name+"%c mousedown           %c window",lbL,lbF+lf4,lbR);
    log("%c"+t_pointerdown_listener .name+"%c touchstart          %c window",lbL,lbF+lf5,lbR);
    log("%c"+t_pointerup_listener   .name+"%c touchend            %c window",lbL,lbF+lf5,lbR);

}
/*}}}*/

    /* KEYBOARD (INPUT) */
    let inputs = dom_tools_html.getElementsByTagName("INPUT");
    for(let i=0; i < inputs.length ; ++i) {
        if( inputs[i].id ) {
if( log_this) log("%c"+t_input_2_CB.name+"%c onkeyup onchange %c"+(inputs[i].id || ("INPUT #"+i)),lbL,lbF+lf2,lbR);
            add_listener_capture_active(inputs[i], "keydown"      , t_input_2_CB);
            add_listener_capture_active(inputs[i], "keyup"        , t_input_2_CB);
            add_listener_capture_active(inputs[i], "change"       , t_input_2_CB);
        }
    }
    /* KEYBOARD (BODY) */
    add_listener_capture_active(document.body, "keydown", t_window_2_keyup_CB);
    add_listener_capture_active(document.body, "keyup"  , t_window_2_keyup_CB);

    /* REMOVE SELECTION RESTRICTIONS */
    document.onselectstart=null;

    /* REMOVE SMOOTH SCROLL BEHAVIOR */
    let html = document.getElementsByTagName("HTML")[0];
    html.style.scrollBehavior = "initial"; /* .. [auto] .. [The scrolling box scrolls instantly] */
};
/*}}}*/
/*_ t_del_listeners {{{*/
let t_del_listeners = function()
{
let   caller = "t_del_listeners";
let log_this = LOG_MAP.EV0_LISTEN;

if( log_this) log(caller, "info");

    /* LAYOUT */
    remove_listener_capture_active    (window, "orientationchange", t_orient_listener);
    remove_listener_capture_active    (window, "resize"           , t_resize_listener);
    remove_listener_capture_active    (window, "scroll"           , dom_scroll.t_scroll_listener);

    /* TOUCH (DOWN UP) (HOST TOOL) */
    if( ("ontouchstart" in document.documentElement)) {
        remove_listener_capture_active(window, "touchstart"       , t_pointerdown_listener);
        remove_listener_capture_active(window, "touchend"         , t_pointerup_listener);
    }
    /* MOUSE (DOWN UP) (HOST TOOL) */
    else {
        remove_listener_capture_active(window, "mousedown"        , t_pointerdown_listener);
        remove_listener_capture_active(window, "mouseup"          , t_pointerup_listener);
    }

    /* MOVE (dynamically added) */
    del_page_and_tool_pointermove_listeners(caller);
};
/*}}}*/

/* [TRANSIENT  ] LISTENER [EVENT: move ] */
/*_ t_add_tool_pointermove_listener {{{*/
let t_add_tool_pointermove_listener = function(_caller)
{
/*{{{*/
let  caller = "t_add_tool_pointermove_listener";
    let log_this = LOG_MAP.EV0_LISTEN;

if( log_this) t_fly.t_log_event_status(caller+" .. CALLED BY "+ _caller, lf2);
/*}}}*/
    if("ontouchmove"  in document.documentElement)
        add_listener_capture_active(   window, "touchmove"     , t_TOOL_pointermove_drag);
    else
        add_listener_capture_active(   window, "mousemove"     , t_TOOL_pointermove_drag);
};
/*}}}*/
/*_ add_page_pointermove_listener {{{*/
let add_page_pointermove_listener = function(_caller)
{
/*{{{*/
let   caller = "add_page_pointermove_listener";
let log_this = LOG_MAP.EV0_LISTEN;

if( log_this) t_fly.t_log_event_status(caller+" .. CALLED BY "+ _caller, lf2);
/*}}}*/
/*{{{
    if(typeof MWebJS != "undefined") MWebJS.eval("SCROLL OFF");
}}}*/
    if("ontouchmove"  in document.documentElement)
        add_listener_capture_active(   window, "touchmove"     , t_PAGE_pointermove_drag);
    else
        add_listener_capture_active(   window, "mousemove"     , t_PAGE_pointermove_drag);
};
/*}}}*/
/*_ del_page_and_tool_pointermove_listeners {{{*/
let del_page_and_tool_pointermove_listeners = function(_caller)
{
let   caller = "del_page_and_tool_pointermove_listeners";
let log_this = LOG_MAP.EV0_LISTEN;

if( log_this) t_fly.t_log_event_status(caller+" .. CALLED BY "+ _caller, lf2);

/*
    if(typeof MWebJS != "undefined") MWebJS.eval("SCROLL ON");
*/
    remove_listener_capture_active(    window, "mousemove"     , t_PAGE_pointermove_drag);
    remove_listener_capture_active(    window, "touchmove"     , t_PAGE_pointermove_drag);

    remove_listener_capture_active(    window, "mousemove"     , t_TOOL_pointermove_drag);
    remove_listener_capture_active(    window, "touchmove"     , t_TOOL_pointermove_drag);
};
/*}}}*/

/* [PER ELEMENT] LISTENER [EVENT: any ] */
/*_ add_listener_capture_active {{{*/
let CAPTURE_TRUE_PASSIVE_FALSE  = { capture:true , passive:false };

let add_listener_capture_active = function(el, ev, fn)
{
    if(!el) return;
if(LOG_MAP.EV0_LISTEN) log("%c add_listener_capture_active("+get_n_lbl(el)+", "+ev+")", lbF+lb8);

    el.   addEventListener(ev, fn, CAPTURE_TRUE_PASSIVE_FALSE);
};
/*}}}*/
/*_ remove_listener_capture_active {{{*/
let remove_listener_capture_active = function(el, ev, fn, uc)
{
let log_this = LOG_MAP.EV0_LISTEN;

    if(!el) return;
if(log_this) log("%c remove_listener_capture_active("+get_n_lbl(el)+" "+ev+" "+fn.name+")", lbH+lf8);

    el.removeEventListener(ev, fn, CAPTURE_TRUE_PASSIVE_FALSE);
};
/*}}}*/

/* EVENT PROPAGATION */
/*_ t_acceptBubble {{{*/
let t_acceptBubble = function(e, msg, log_this)
{
    log_this = log_this || DOM_TOOLS_TAG || DOM_TOOLS_LOG;
    if( log_this )
    {
        t_fly.t_log_transcript_event_top("<span style='color:yellow;'>"+ t_data.SYMBOL_BLACK_CIRCLE +"</span>"
            +                            " ACCEPT BUBBLE <em>"+          e.type                     +"</em>"
            +                            " <em>"+                        msg                        +"</em>"
        );
        log_caller();
    }

    t_select.t_slot_visibility_changed();
};
/*}}}*/
/*_ t_preventDefault {{{*/
/*{{{*/
let t_preventDefault_caller;

/*}}}*/
let t_preventDefault = function(e, preventDefault_caller)
{
/*{{{*/
    if(t_preventDefault_caller) return;
    t_preventDefault_caller = preventDefault_caller; /* retain only first caller */

let caller = "t_preventDefault";
let log_this = DOM_TOOLS_LOG && !onDown_SHIFT && LOG_MAP.EV7_DISPATCH;

if( log_this)
{
    caller += "("+e.type+" .. "+preventDefault_caller+")";
    t_fly.t_log_event_status(caller, lbF+lf3);

    log_key_val( "BUBBLE .. CANCEL .. PROPAGATION"
                 , {   bubbles                  : e.bubbles
                     , cancelable               : e.cancelable
                     , defaultPrevented         : e.defaultPrevented
                     , preventDefault           : e.preventDefault
                     , stopImmediatePropagation : e.stopImmediatePropagation
                     , stopPropagation          : e.stopPropagation
                     , cancelBubble             : e.cancelBubble
                     , returnValue              : e.returnValue
                 }
                 , lbH+lf8
               );
    t_log.console_dir(e.type, e);
}
/*}}}*/
/* NOTE: {{{
 *  [e.stopPropagation         ()] .. stop bubbling phase #3 handlers
 *  [e.stopImmediatePropagation()] .. stop   target phase #2 handlers
 *  [e.preventDefault          ()] .. i.e. return false from within on<event> attribute handler
 *
 *  [e.cancelBubble]               .. depreciated .. (may not reach [outer body])
 *  [e.returnValue]                .. depreciated
 }}}*/
    if(e.cancelable)
    {
        if( e.stopPropagation          ) e.stopPropagation         (); /* capturing and bubbling phases */
        if( e.stopImmediatePropagation ) e.stopImmediatePropagation(); /* other listeners of the same event */
        if( e.preventDefault           ) e.preventDefault          (); /* browser agent default .. (checkbox toggle) */
    }
};
/*}}}*/
/*_ t_preventDefault_has_been_called {{{*/

let t_preventDefault_has_been_called = function()
{
/*{{{
    return (t_preventDefault_caller != "");
}}}*/
    return  t_preventDefault_caller;
};
/*}}}*/
/*_ t_restoreDefault {{{*/
let t_restoreDefault = function(restoreDefault_caller)
{
let log_this = t_log.logging_something();

if(log_this && t_preventDefault_caller) {

    if(log_this)
        t_fly.t_log_transcript_event_bot( "<span style='color:green;'>"+ t_data.SYMBOL_BLACK_CIRCLE +"</span>"
            +                      " <span style='text-decoration:line-through;'>preventDefault</span>"
            +                      " <em>"+ restoreDefault_caller +"</em> was set by "+ t_preventDefault_caller
        );

}
    t_preventDefault_caller = "";
};
/*}}}*/

/* EVENT CONSUMED BY (dispatched-to handler with highest prority) */
/*{{{*/
let t_event_consumed_cause = "";

/*}}}*/
/*_ t_event_set_e_consumed_by {{{*/
let t_event_set_e_consumed_by = function(e, consume_cause)
{
    t_event_consumed_cause = consume_cause;
};
/*}}}*/
/*_ t_event_add_e_consumed_by {{{*/
let t_event_add_e_consumed_by = function(e, consume_cause)
{
let log_this = DOM_TOOLS_LOG && !onDown_SHIFT && t_log.logging_something();
if( log_this) log("t_event_add_e_consumed_by: %c "+consume_cause, lb0);
if( log_this) log_caller();

/*{{{
    t_event_consumed_cause += (t_event_consumed_cause ? " .. " : "")+ consume_cause;
}}}*/
    t_event_consumed_cause
        += t_event_consumed_cause ? LF+consume_cause
        :                              consume_cause;
};
/*}}}*/
/*_ t_event_has_been_consumed {{{*/
let t_event_has_been_consumed = function()
{
/*
if(t_event_consumed_cause) log("t_event_has_been_consumed(): [%c "+t_event_consumed_cause+" %c]", lbF+lb8,lbA);
*/
/*{{{
    return t_event_consumed_cause;
}}}*/
    return   t_event_consumed_cause.includes(LF)
        ? LF+t_event_consumed_cause             /* start multi-line with a newline */
        :    t_event_consumed_cause
    ;

};
/*}}}*/
/*_ t_event_clr_consumed {{{*/
let t_event_clr_consumed = function()
{
/*
if(t_event_consumed_cause) log("t_event_has_been_consumed(): [%c "+t_event_consumed_cause+" %c]", lbF+lb8,lbA);
*/
    t_event_consumed_cause   = "";
};
/*}}}*/
/*_ t_is_an_embedded_doc_tool {{{*/
let t_is_an_embedded_doc_tool = function(e_target,log_this)
{
    let result
        =                 has_el_class(e_target, CSS_EMBEDDED_DOC_TOOL) /* IS NOT A DELEGATE PARENT */
        || t_util.is_el_child_of_class(e_target, CSS_EMBEDDED_DOC_TOOL) /* HAS NO   DELEGATE PARENT */
    ;
/*{{{*/
if( log_this )
    log_key_val_group("t_is_an_embedded_doc_tool("+get_id_or_tag(e_target)+")"
                      , { get_EL_slot                          : get_EL_slot                (e_target)
                        , has_el_class_CSS_DOC_HANDLER_IGNORED : has_el_class               (e_target, CSS_EMBEDDED_DOC_TOOL)
                        , child_of_CSS_DOC_HANDLER_IGNORED     : t_util.is_el_child_of_class(e_target, CSS_EMBEDDED_DOC_TOOL)
                        ,                               result
                        ,                              callers : t_log.get_callers()
                      }, lb5, false
                     );

/*}}}*/
    return (result == null) ? false : result;
};
/*}}}*/
/*_ t_set_has_moved {{{*/
/*{{{*/
const MOVED_ENOUGH = 16;
let has_moved      = "";

/*}}}*/
/*_ t_clr_has_moved {{{*/
let t_clr_has_moved = function(_caller)
{
/*{{{
logBIG("t_clr_has_moved: "+_caller, lbH+lf4);
}}}*/
    has_moved     = "";
    dom_scroll.clr_has_been_scrolled_by_script();
};
/*}}}*/
/*_ t_set_has_moved {{{*/
let t_set_has_moved = function(_caller)
{
/*{{{*/
let log_this = LOG_MAP.EV0_LISTEN || LOG_MAP.EV1_DOWN || LOG_MAP.EV2_MOVE || LOG_MAP.EV4_LONG_PRESS ;

if( log_this && !has_moved) t_fly.t_log_event_status("t_set_has_moved "+ _caller, lf3);
/*}}}*/
    has_moved = _caller;
/*{{{
    if(onWork_EL) clr_onWork_EL_pressed();
}}}*/

    if( is_long_press_pending() )
        del_long_press_listener(has_moved);
};
/*}}}*/
let   check_has_moved       = function(_caller) { return check_has_moved_dx_dy(_caller,   MOVED_ENOUGH); };
let   check_big_moved       = function(_caller) { return check_has_moved_dx_dy(_caller, 2*MOVED_ENOUGH); };
let   check_has_moved_dx_dy = function(_caller, d_min=MOVED_ENOUGH)
{
    if( has_moved && (d_min <= MOVED_ENOUGH)) return  true; /* recheck for bigger moves */
    if(!onWork_EL                           ) return false;
    if( onDown_7_STALL_is_pending()         ) return false; /* WAKE UP DELAY */
    if(onDown_TOUCHES > 1                   ) return false;

    /* NOT MOVED ENOUGH */
    let    dx = onMoveDXY.x;
    let    dy = onMoveDXY.y;
    let dx_dy = Math.max(Math.abs(dx), Math.abs(dy));
    if( dx_dy < d_min) return false;

    /* HAS MOVED ENOUGH BY... */
    t_set_has_moved("[has_moved "+dx_dy+"px] ["+_caller+"] ["+get_n_lbl(onWork_EL)+"]");

    if( has_moved )
        t_seek.t_seeker_onMove2_DXY(onMoveDXY);

let log_this = LOG_MAP.EV0_LISTEN;
    if(log_this)
    {
        t_log.console_warn(has_moved +": "+_caller+"("+dx_dy+")"
         /* + LF + "........onDown_XY: ["+              onDown_XY.x +" "+             onDown_XY.y +"]" */
         /* + LF + "...page offset XY: ["+ window       .scrollX    +" "+          window.scrollY +"]" */
         /* + LF + "...body_scroll XY: ["+ document.body.scrollLeft +" "+ document.body.scrollTop +"]" */
        );
        t_log.console_dir(_caller, onWork_EL);
        t_fly.t_log_event_status(_caller+"("+dx_dy+") .. CALLED BY "+ _caller, lf2);

    }
    return true;
};
/*}}}*/
/*_ t_is_bouncing_e_type {{{*/
/*{{{*/
const T_EVENT_DEBOUNCE_DELAY = 100;
let   t_last_handled_event_of_type_MS = {};

/*}}}*/
let t_is_bouncing_e_type = function(e_type, _caller, delay_min=T_EVENT_DEBOUNCE_DELAY)
{
let log_this = t_log.logging_something();

    let last_MS = t_last_handled_event_of_type_MS[e_type] || 0;

    let this_MS = new Date().getTime() % 86400000;
    let delay   = this_MS - last_MS;

    let bouncing = (delay < delay_min);

    t_last_handled_event_of_type_MS[e_type] = this_MS;

if(log_this && bouncing) log("t_is_bouncing_e_type(%c "+e_type+" %c) %c .. CALLED BY ["+_caller+"] %c .. DEBOUNCED: ["+Math.floor(delay)+"ms < "+delay_min+"] .. onWork_EL=["+get_n_lbl(onWork_EL)+"] onWork_PANEL=["+get_n_lbl(onWork_PANEL)+"]",lb5,lbA, lb6,lbA);
    return bouncing;
};
/*}}}*/
/*➔ t_log_clr_status {{{*/
let t_log_clr_status = function()
{
    t_fly.t_fly_clr_status();

    t_event_clr_consumed();
    t_preventDefault_caller  = "";
};
/*}}}*/

/*}}}*/
/** DOWN EVENT CONTEXT {{{*/
/* script/dom_ondown.js */
/* onDown_EL onWork_EL onWork_PANEL {{{*/

/*➔ t_set_onWork_EL .. [onWork_EL  onWork_PANEL] {{{*/
let t_set_onWork_EL = function(el,_caller,e)
{
/*{{{*/
let   caller = "t_set_onWork_EL";
let log_this = LOG_MAP.EV0_LISTEN || LOG_MAP.EV1_DOWN || LOG_MAP.EV5_TOOL_CB;

if( log_this ) log("%c"+caller+"%c("+get_n_lbl(el)+") %c CALLED BY "+ _caller, lbL+lf1, lbC+lf9, lbR);
/*}}}*/
    /* clr_onWork_EL {{{*/
    clr_onWork_EL(caller);

    if(!el) return; /* all done */

    /*}}}*/
    /* [sticky] [onDown_EL] [onWork_EL] [onDown_TOOL_XY] {{{*/

    let     sticky = e && t_sticky.t_sticky_set_onWork_STICKY(el,e); /* .. (el or parent) */

    onDown_EL      = sticky ? sticky : el;
    onWork_EL      = onDown_EL;
    if(onDown_EL == hotspot) onDown_EL = hotring;

    if(!onWork_EL_last_used) set_onWork_EL_last_used( onWork_EL );

    onDown_TOOL_XY = t_util.get_el_xy(onWork_EL);

/*{{{
logXXX("%c onWork_EL.....=["+ get_n_lbl(onWork_EL)                    +"]", lf3);
logXXX("%c onDown_TOOL_XY=["+ onDown_TOOL_XY.x +" "+ onDown_TOOL_XY.y +"]", lf3);
logXXX("%c onDown_XY.....=["+ onDown_XY.x      +" "+ onDown_XY.y      +"]", lf3);
}}}*/

    if(onWork_EL.tagName == "INPUT")
        t_focus( onWork_EL );

    /*}}}*/
    /* [onWork_MOVABLE_CHILD] {{{*/
    set_onWork_MOVABLE_CHILD(onWork_EL, _caller);

    /*}}}*/
    /* [onWork_PANEL] [onDown_PANEL_XY] [onWork_MOVABLE_PANEL] {{{*/
    set_onWork_PANEL();

    /*}}}*/
    /* [onDown_HSPOT_XY] [onDown_XY_sign] [onMove_pivotXY] {{{*/
    onDown_HSPOT_XY.x        = h_x;
    onDown_HSPOT_XY.y        = h_y;

    onDown_XY_sign.x         = (onDown_HSPOT_XY.x < pivotXY.x) ? 1 : -1;
    onDown_XY_sign.y         = (onDown_HSPOT_XY.y < pivotXY.y) ? 1 : -1;

    onMove_pivotXY.x         = pivotXY.x;
    onMove_pivotXY.y         = pivotXY.y;

/*{{{
log("....hotspot.Left.Top=["+hotspot.offsetLeft    +" "+ hotspot.offsetTop     +"]");
log(".....onDown_HSPOT_XY=["+onDown_HSPOT_XY.x     +" "+ onDown_HSPOT_XY.y     +"]");
log(".onMove_pivotXY=["+onMove_pivotXY.x +" "+ onMove_pivotXY.y +"]");
log("......onDown_XY_sign=["+onDown_XY_sign.x      +" "+ onDown_XY_sign.y      +"]");
}}}*/
    /*}}}*/
/*{{{
    set_onWork_EL_pressed();
}}}*/
    /* ...grid log {{{*/
if(typeof t_grid.t_grid_onWork_EL_changed != "undefined") t_grid.t_grid_onWork_EL_changed(_caller);

    /*}}}*/
    /* [ox oy] {{{*/
    if(onWork_PANEL_magnified) {
        let        scale = t_util.t_get_panel_scale(onWork_PANEL_magnified);
        onDown_TOOL_XY.x = onWork_PANEL_magnified.offsetLeft + Math.round(onWork_EL.offsetLeft * scale);
        onDown_TOOL_XY.y = onWork_PANEL_magnified.offsetTop  + Math.round(onWork_EL.offsetTop  * scale);
    }
/*{{{
    let ox = (onDown_XY.x - onDown_TOOL_XY.x);
    let oy = (onDown_XY.y - onDown_TOOL_XY.y);
logXXX("%c [ox oy] = ["+ox+" "+oy+"]", lf3);
}}}*/
    /*}}}*/
};
/*}}}*/
/*… clr_onWork_EL .. [onWork_EL  onWork_PANEL] {{{*/
let clr_onWork_EL = function(_caller)
{
/*{{{*/
let   caller = "clr_onWork_EL";
let log_this = LOG_MAP.EV0_LISTEN || LOG_MAP.EV1_DOWN || LOG_MAP.EV5_TOOL_CB;

if( log_this ) log("%c"+caller+" %c CALLED BY "+ _caller, lbL+lf8,lbR+lf8);
/*}}}*/

    onWork_MOVABLE_CHILD    = null;
    onWork_MOVABLE_PANEL    = null;
    onWork_PANEL_magnified  = null;

    set_onWork_EL_last_used( onWork_EL );

    if(onWork_EL) clr_onWork_EL_pressed();
    onWork_EL               = null;

    onWork_PANEL            = null;

/*{{{
    del_el_class(hotspot, CSS_HIDING_TOOLS);
}}}*/
};
/*}}}*/
/*… set_onWork_PANEL {{{*/
let set_onWork_PANEL = function()
{
/*{{{*/
let caller = "set_onWork_PANEL";
let log_this = LOG_MAP.EV0_LISTEN || LOG_MAP.EV1_DOWN || LOG_MAP.EV5_TOOL_CB;

/*}}}*/
    /* [onWork_EL] parent {{{*/
    onWork_PANEL = get_el_PANEL( onWork_EL );

    /*}}}*/
    /* [onWork_PANEL.scale] [onWork_PANEL_magnified] {{{*/
    if(onWork_PANEL)
        onWork_PANEL.scale = t_util.t_get_panel_scale(onWork_PANEL);

    onWork_PANEL_magnified
        = has_el_class(onWork_PANEL, CSS_MAGNIFIED)
        ?              onWork_PANEL
        :              null;

    let  xy
        = onWork_PANEL
        ? t_util.get_el_xy(onWork_PANEL, caller)
        : { x:0 , y:0 };
    onDown_PANEL_XY.x   = xy.x;
    onDown_PANEL_XY.y   = xy.y;

    /*}}}*/
    /* [onWork_MOVABLE_PANEL] {{{*/
    onWork_MOVABLE_PANEL
        = is_a_movable_panel(onWork_PANEL)
        ?                    onWork_PANEL
        :                    null;

    /*}}}*/
    /* [map] .. (panel layout cache) {{{*/
    if( onWork_PANEL )
    {
        if(!t_tools_loaded  ) t_load_TOOLS_MAP(caller);

        let map             = t_tools_map_get(onWork_PANEL);
        if( map ) {
            map.x           = xy.x;
            map.y           = xy.y;
        }

    }
    /*}}}*/
    /* [zIndex] .. (t_data.CSS_PINNED t_data.CSS_WORK_PANEL) {{{*/
    if(onWork_PANEL)
    {
        for(let i=1; i< TOOL_panels.length; ++i)
        {
            let panel = TOOL_panels[i]; if(!panel) continue;
            let is_a_pinned_work_panel  = ( panel ==  onWork_PANEL                 )
                &&                          panel.classList.contains(t_data.CSS_PINNED    );

            let was_a_pinned_work_panel = !is_a_pinned_work_panel
                &&                          panel.classList.contains(t_data.CSS_WORK_PANEL);

            if(      is_a_pinned_work_panel ) { add_el_class( panel, t_data.CSS_WORK_PANEL); if(log_this) log(caller+"%c...SELECTING "+panel.id, lf4); }
            else if(was_a_pinned_work_panel ) { del_el_class( panel, t_data.CSS_WORK_PANEL); if(log_this) log(caller+"%c...RELEASING "+panel.id, lf8); }
        }
    }
    /*}}}*/
if( log_this) log("%c"+caller+"%c onWork_PANEL=["+get_n_lbl(onWork_PANEL)+"] %c onWork_MOVABLE_PANEL=["+get_n_lbl(onWork_MOVABLE_PANEL)+"]"
                  ,lbL+lf1    ,lbC+lf3                                      ,lbR+lf4                                                       );
};
/*}}}*/
/*… set_onWork_MOVABLE_CHILD {{{*/
let set_onWork_MOVABLE_CHILD = function(el, _caller)
{
    let sticky = t_sticky.t_sticky_get_onWork_STICKY();
    if(el == sticky) onDown_TOOL_XY.y += sticky.offsetHeight/2;

    onWork_MOVABLE_CHILD = is_a_movable_TOOL_CHILD(el)
        ?                                          el
        :                                          null;
};
/*}}}*/

/*… set_onWork_EL_last_used {{{*/
let set_onWork_EL_last_used = function(el)
{
/*{{{
logXXX("set_onWork_EL_last_used("+t_util.get_id_or_tag(el)+")");
}}}*/

    if(el) onWork_EL_last_used = el; /* never forget last use */

/*{{{
    if( has_el_class(el, t_data.CSS_STICKY_TOOL) )
    {
        let thumb_p     = 100 * el.offsetTop / t_util.getPageHeight();
        let thumb_p_str = t_select.t_get_thumb_p_str(thumb_p)+"%";
        el.title        = el.id +LF+ thumb_p_str;
    }
}}}*/

};
/*}}}*/
/*… set_onWork_EL_pressed {{{*/
let set_onWork_EL_pressed = function()
{
/*{{{
t_fly.t_log_event_status("set_onWork_EL_pressed: onWork_EL=["+t_util.get_id_or_tag(onWork_EL)+"]", lbb+lf9);
}}}*/

    if(!onWork_EL                       ) return;
    if( onWork_EL == onWork_PANEL       ) return;
    if( onWork_EL == div_slot_containers) return;

    del_el_class(onWork_EL     , t_data.CSS_DIMMED);
    add_el_class(onWork_EL     , t_data.CSS_PRESSED);
    if( t_util.is_el_or_child_of_parent_el(onWork_EL, hotspot) )
        add_el_class(dom_tools_html, t_data.CSS_PRESSED);

    /* PRESSED: UNDIMM STICKY TOOLS */
    if(has_el_class(onWork_EL, t_data.CSS_STICKY_TOOL))
    {
        t_sticky.t_sticky_move_z_on_top(onWork_EL);
        t_sticky.t_sticky_SET_DIMMED(false, "ON PRESS");
    }

/* SET PRESSED BUTTON BUNDLES {{{
    if     (onWork_EL == button_NEXT     ) add_el_class(button_NEXT_LEFT, t_data.CSS_PRESSED);
    else if(onWork_EL == button_NEXT_LEFT) add_el_class(button_NEXT     , t_data.CSS_PRESSED);

    if     (onWork_EL == button_PREV     ) add_el_class(button_PREV_LEFT, t_data.CSS_PRESSED);
    else if(onWork_EL == button_PREV_LEFT) add_el_class(button_PREV     , t_data.CSS_PRESSED);
}}}*/
};
/*}}}*/
/*… clr_onWork_EL_pressed {{{*/
let clr_onWork_EL_pressed = function()
{
    /* DON't CLEAR WHEN... */
    if(!onWork_EL                       ) return;
    if( onWork_EL == onWork_PANEL       ) return;
    if( onWork_EL == div_slot_containers) return;
    del_el_class(onWork_EL     , t_data.CSS_PRESSED);
    del_el_class(dom_tools_html, t_data.CSS_PRESSED);

/* CLEAR PRESSED BUTTON BUNDLES {{{
    if     (onWork_EL == button_NEXT         ) del_el_class(button_NEXT_LEFT, t_data.CSS_PRESSED);
    else if(onWork_EL == button_NEXT_LEFT    ) del_el_class(button_NEXT     , t_data.CSS_PRESSED);

    if     (onWork_EL == button_PREV         ) del_el_class(button_PREV_LEFT, t_data.CSS_PRESSED);
    else if(onWork_EL == button_PREV_LEFT    ) del_el_class(button_PREV     , t_data.CSS_PRESSED);
}}}*/

    /* LASTLY */
    /*......................................*/ del_el_class(onWork_EL       , t_data.CSS_PRESSED);
    t_seek.t_seekzone_clr_onWork_EL_pressed();
};
/*}}}*/

/*… get_el_PANEL {{{*/
let get_el_PANEL = function(el)
{
    /* tools container .. (climb up el parentage .. up to top-level panel) */
    let fly_div = t_fly.t_fly_div_get();
    let tool_panel = null;
    if(      t_util.is_el_or_child_of_parent_el(el, hotspot  ) ) tool_panel =   hotspot;
    else if( t_util.is_el_or_child_of_parent_el(el, fly_div  ) ) tool_panel =   fly_div;
    else if( t_util.is_el_or_child_of_parent_el(el, dimm_mask) ) tool_panel = dimm_mask;
    else {
        for(let i=1; i< TOOL_panels.length; ++i) {
            let panel = TOOL_panels[i];
            if( t_util.is_el_or_child_of_parent_el(el, panel) )
            {
                tool_panel = panel;
                break;
            }
        }
    }

    /* default to seeker tool */
    if(!tool_panel) tool_panel = t_seek.t_seeker_get_tool_panel(el);

    /* default to tools root */
/*
    if(!tool_panel) tool_panel = hotspot;
*/

    return tool_panel;
};
/*}}}*/
/*… get_onWork_TOOL_label {{{*/
let get_onWork_TOOL_label = function()
{
    return (onWork_PANEL ?       get_n_lbl(onWork_PANEL)      : "")
        +  (onWork_EL    ? " ("+ get_n_lbl(onWork_EL   ) +")" : "")
    ;
};
/*}}}*/

/*}}}*/
/* SELECTION {{{*/
/*  get_onDown_SELECTION {{{*/
/*{{{*/
let onDown_SELECTION       = null;
let onDown_SEL_TEXT        =   "";

/*}}}*/
let get_onDown_SELECTION = function()
{
    onDown_SELECTION = window.getSelection();
/*{{{
log("%c onDown_SELECTION=["+onDown_SELECTION+"]", lbH+lf3);
}}}*/

    onDown_SEL_TEXT  = t_get_current_sel_text();/* || onDown_SEL_TEXT;*/ /* update or keep previous */
/*{{{
log("%c onDown_SEL_TEXT=["+onDown_SEL_TEXT+"]", lbH+lf1);
}}}*/
    return onDown_SEL_TEXT;
};
/*}}}*/
/*_ t_get_current_sel_text {{{*/
let t_get_current_sel_text = function()
{
    let selection = window.getSelection();
    return (selection)
        ?   selection.toString().trim()
        :   "";

/*{{{
..  RETURNS A SINGLE LINE
    return (selection && (selection.rangeCount > 0))
        ?   selection.getRangeAt(0).toString().trim()
        :   ""
}}}*/
};
/*}}}*/
/*_ t_get_onDown_SEL_TEXT {{{*/
let t_get_onDown_SEL_TEXT = function()
{
    if(!onDown_SEL_TEXT) return "";

    let sel_text = t_util.trim_space_lf( onDown_SEL_TEXT );

/*{{{
log("%c onDown_SEL_TEXT=["+onDown_SEL_TEXT+"]", lbH+lf6);
log("%c sel_text       =["+sel_text       +"]", lbH+lf5);
}}}*/

    onDown_SEL_TEXT = ""; /* used once .. then cleared */

    return sel_text;
};
/*}}}*/
/*_ t_window_getSelection_removeAllRanges {{{*/
let t_window_getSelection_removeAllRanges = function(_caller)
{
let  caller = "t_window_getSelection_removeAllRanges";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) t_fly.t_log_event_status(caller+": .. CALLED BY "+ _caller, lf2);

    let something_removed = t_util.clearSelection();
    if( something_removed ) t_sticky.t_sticky_set_SEL_PASTE_TARGET_STATE(false);
};
/*}}}*/
/*}}}*/
/* onDown_XY {{{*/
/*  set_onDown_XY {{{*/
let     onDown_XY = { x:0, y:0 };
let set_onDown_XY = function(e, _caller)
{
/*{{{
console_dir("set_onDown_XY",e);
}}}*/
    let      xy = get_event_XY(e);
    onDown_XY.x = xy.x;
    onDown_XY.y = xy.y;
/*{{{
log(onDown_XY.x.toFixed(0)+" "+onDown_XY.y.toFixed(0));
}}}*/
};
/*}}}*/
/*_ t_get_onDown_XY {{{*/
let t_get_onDown_XY = function()
{
    return onDown_XY;
};
/*}}}*/
/*  get_onMoveDXY {{{*/
let     onMoveDXY = { x:0, y:0 };
let get_onMoveDXY = function(e)
{
    if(e) {
        let      xy = get_event_XY(e);
        onMoveDXY.x = xy.x - onDown_XY.x;
        onMoveDXY.y = xy.y - onDown_XY.y;
    }
/*{{{
log(onMoveDXY.x.toFixed(0)+" "+onMoveDXY.y.toFixed(0));
}}}*/
    return onMoveDXY;
};
/*}}}*/
/*  zap_onMoveDXY {{{*/
let zap_onMoveDXY = function()
{
    onDown_XY.x += onMoveDXY.x;
    onDown_XY.y += onMoveDXY.y;
    drag_cursor.show_drag_cursor();
    onMoveDXY.x  = 0;
    onMoveDXY.y  = 0;
};
/*}}}*/
/*}}}*/
/*}}}*/
/** TOOL PANELS PIVOT {{{*/
/*{{{*/
const T_RAISE_PIVOT_PANEL_DELAY_LONG  = 2000;
const T_RAISE_PIVOT_PANEL_DELAY_SHORT =  500;

let   t_raise_pivot_PANEL_timer;
let   pivot_PANEL_changed_since_onDown;
/*}}}*/
/* t_set_pivot_PANEL {{{*/
/*{{{*/
let pivotXY = { x:512 , y:512 };

/*}}}*/
let t_set_pivot_PANEL = function(panel,_caller)
{
/*{{{*/
let   caller = "t_set_pivot_PANEL";
let log_this   = LOG_MAP.T4_PIVOT;

if(log_this) t_fly.t_log_event_status(caller+"("+get_n_lbl(panel)+") "+_caller, lf1);
/*}}}*/
    /* [pat_bag] .. (t_pat_bag_open_or_close on focus) {{{*/
    if((panel == pat_bag) && off_bag && (pivot_PANEL != pat_bag))
        t_pat_bag_open_or_close("SET PIVOT PANEL [pat_bag]");

    /*}}}*/
    /* SAME PANEL {{{*/
    if(pivot_PANEL && (pivot_PANEL == panel))
    {
if(log_this) log("%c"+caller+": UNCHANGED", lbF+lb2);

        return;
    }
    /*}}}*/
    /* RELEASE CURRENT PANEL {{{*/
    if(pivot_PANEL) {
        if( t_is_panel_magnified( pivot_PANEL ) )
        {
            let pinned =  pivot_PANEL.classList.contains(t_data.CSS_PINNED);
            if(!pinned) t_toggle_panel_magnified(pivot_PANEL, false);
        }
    }
    /*}}}*/
    /* SELECT AND STORE NEW PIVOT PANEL {{{*/
    pivot_PANEL_changed_since_onDown = "from ["+get_n_lbl(pivot_PANEL)+"] to ["+get_n_lbl(panel)+"]";
if( log_this) log("pivot_PANEL_changed_since_onDown=["+pivot_PANEL_changed_since_onDown+"]");

    if(pivot_PANEL) t_set_CSS_PIVOT_PANEL(pivot_PANEL, false);

/*{{{
t_fly.t_fly_tooltip_add     (t_log.get_callers(3)+LF         +"..pivot_PANEL=["+get_n_lbl(pivot_PANEL)+"]") .. TODO PIVOT
}}}*/
    pivot_PANEL = panel;

    if( !pivot_PANEL ) {
        t_set_pivotXY(h_x, h_y);
        return;
    }

    if(panel != hotspot) {
        t_set_CSS_PIVOT_PANEL(pivot_PANEL,  true);
        t_layout_panel_magnified(panel , prop.get( t_data.PIVOT_MAGNIFIED ));
    }
    else {
if( log_this) log(caller+": (panel == hotspot)");
    }
    /*}}}*/
    /* MOVE PIVOT POINT {{{*/
    let map = t_tools_map_get(pivot_PANEL);
    if(!map) {
if( log_this) log("MOVE PIVOT POINT: pivot_PANEL NOT TRACKED YET");
        return;
    }
    map.x   = panel.offsetLeft;
    map.y   = panel.offsetTop;
    map.w   = panel.offsetWidth;
    map.h   = panel.offsetHeight;

/*{{{
logXXX("%c"+caller+"%c "+panel.id+" %c "+map.x+" "+map.y, lbH, lbC+lf3, lbH+lf8);
}}}*/

    let   x = map.x;
    let   y = map.y;
    let   w = map.w;
    let   h = map.h;
/*{{{
    if( prop.get( t_data.PIN_SEEKSPOT ) ) {
        seekspot_A.style.marginLeft = (map.x) +"px";
        seekspot_A.style.top        = (map.y) +"px";
        seekspot_A.style.display    =       "block";
    }
}}}*/

    let x_sign = (x > h_x) ? 1 : -1;
    let y_sign = (y > h_y) ? 1 : -1;
    if( x_sign < 0) x += w;
    if( y_sign < 0) y += h;
/*{{{
log("topTool_xy=["+h_x+" "+h_y+"] xy_sign=["+x_sign+" "+y_sign+"]");
}}}*/
    /* CHANGE [pivotXY] and [onMove_pivotXY] */
    let piv_x  =  x + x_sign * w * spread_ratio.x;
    let piv_y  =  y + y_sign * h * spread_ratio.y;
    t_set_pivotXY(piv_x, piv_y);

    t_save_update_post(caller);

    onMove_pivotXY.x = piv_x;
    onMove_pivotXY.y = piv_y;

    t_set_has_moved( caller );

    /*}}}*/
};
/*}}}*/
/*  t_set_pivotXY {{{*/
let t_set_pivotXY = function(x,y)
{
    if((pivotXY.x != x) || (pivotXY.y != y))
    {
        pivotXY.x = parseInt( x );
        pivotXY.y = parseInt( y );
    }

    if(pivspot) t_tools_set_panel_xy(pivspot, pivotXY.x, pivotXY.y);
};
/*}}}*/
/*  t_flash_unpinned_panels {{{*/
let t_flash_unpinned_panels = function(_caller)
{
/*{{{*/
let   caller = "t_flash_unpinned_panels";
let log_this = LOG_MAP.T4_PIVOT;

if( log_this) log(caller+".. CALLED BY "+ _caller);
/*}}}*/
    /* UNPINNED PANELS STYLE .. f(pivot, dimmed, fully-spread) {{{*/
    let fly_div = t_fly.t_fly_div_get();
    for(let i=0; i< TOOL_panels.length; ++i) {
        let panel  = TOOL_panels[i];
        if( panel == hotspot    ) continue;
        if( panel == fly_div    ) continue;
        /*..........................*/ t_show_unpinned_panel( panel );
    }
    /*}}}*/
        add_el_class(dom_tools_html, t_data.CSS_PRESSED);
    /* SCHEDULE t_raise_pivot_PANEL_delayed {{{*/
    t_raise_pivot_PANEL_delayed(T_RAISE_PIVOT_PANEL_DELAY_LONG, caller);

    /*}}}*/
};
/*}}}*/

/*  t_raise_pivot_PANEL {{{*/
let t_raise_pivot_PANEL         = function(_caller) { t_raise_pivot_PANEL_delayed(0, _caller); };
let t_raise_pivot_PANEL_delayed = function(delay=0, _caller="")
{
/*{{{*/
let   caller = "t_raise_pivot_PANEL_delayed";

let log_this = LOG_MAP.T4_PIVOT;

if(log_this) logBIG(caller+"("+delay+") .. CALLED BY "+_caller);
/*}}}*/

    /* to be handled once only [since onDown] ...cleared by [onUp] */
    if( t_raise_pivot_PANEL_timer == null)
        t_raise_pivot_PANEL_timer  = setTimeout(t_raise_pivot_PANEL_handler, delay);
};
/*}}}*/
/*_ t_raise_pivot_PANEL_handler {{{*/
let t_raise_pivot_PANEL_handler = function()
{
/* handler may be called early {{{*/
let log_this   = LOG_MAP.T4_PIVOT;
    let caller = "t_raise_pivot_PANEL_handler";

if(log_this) logBIG(caller);
if(log_this) t_fly.t_log_event_status(caller);
/*}}}*/
    /* has been canceled {{{*/
    if(t_raise_pivot_PANEL_timer == null) {
if(log_this) log(caller+"%c HAS BEEN CANCELED", lbb+lbH+lf2);

        return;
    }
    t_raise_pivot_PANEL_timer = null;
    /*}}}*/
    /* on grid {{{*/
    if( call_t_grid_IS_ON_GRID(caller) ) {
if(log_this) log(caller+"%c TOOLS ON GRID", lbb+lbH+lf3);

        return;
    }
    /*}}}*/
    /*  div_slot_containers_displayed {{{*/
    if( div_slot_containers_displayed() ) {
if(log_this) log(caller+"%c SLOT CONTAINERS DISPLAYED", lbb+lbH+lf4);

        return;
    }
    /*}}}*/
    /* [onWork_PANEL] still in hand .. (post a new delayed call) {{{*/
    if( onWork_PANEL) {
if(log_this) log(caller+"%c [onWork_PANEL] STILL IN HAND .. POSTPONED", lbb+lbH+lf3);

        t_raise_pivot_PANEL_timer = setTimeout(t_raise_pivot_PANEL_handler, T_RAISE_PIVOT_PANEL_DELAY_SHORT);
        return;
    }
    /*}}}*/
    del_el_class(dom_tools_html, t_data.CSS_PRESSED);
    t_raise_pivot_PANEL_layout(caller);
};
/*}}}*/
/*_ t_raise_pivot_PANEL_layout {{{*/
let t_raise_pivot_PANEL_layout = function(_caller)
{
/* handler may be called early {{{*/
    let caller = "t_raise_pivot_PANEL_layout";
let log_this   = LOG_MAP.T4_PIVOT;

if(log_this) logBIG(caller+" CALLED BY "+_caller);
/*}}}*/
    /* [selected_tools] {{{*/
    let selected_tools = [];
    for(let i=1; i < TOOL_panels.length; ++i)
    {
        let panel = TOOL_panels[i];
        if(!panel) continue; /* i.e. panel may not be there yet */
        if( panel.classList.contains(t_data.CSS_PINNED)) continue;

        let map = t_tools_map_get(panel);
        if(!map ) continue;
/*{{{
        if( map.selected                     ) selected_tools.push(panel);
}}}*/
        if( t_tools_panel_is_selected(panel) ) selected_tools.push(panel);
    }

if(log_this) log(".....selected_tools.length=["+ selected_tools.length +"]");
    /*}}}*/
    /* [panel_rank] {{{*/
    let pivot_idx  = selected_tools.indexOf( pivot_PANEL );
    let panel_rank = selected_tools.length;
if(log_this) log(".....pivot_idx...........................=["+ pivot_idx  +"]");
if(log_this) log(".....panel_rank..........................=["+ panel_rank +"]");
    /*}}}*/
    for(let i=0; i < selected_tools.length; ++i) {
        /* [zIndex] .. f(tool_rank) {{{*/
        let panel       = selected_tools[i];
        let tool_idx    = selected_tools.indexOf( panel );
        panel.tool_rank = panel_rank - Math.abs(pivot_idx - tool_idx);

        let s = "....................".substring(0, panel.tool_rank);
if(log_this) log("...["+s+"] ["+get_n_lbl(panel)+"] .. panel.tool_rank=["+panel.tool_rank+"]");

        /*}}}*/
        /* PIVOT  PANEL  .. [unhide] [zIndex] {{{*/
        if(panel == pivot_PANEL)
        {
            t_show_unpinned_panel (panel);
/*{{{
            t_set_CSS_PIVOT_PANEL (panel,  true);
}}}*/
            panel.style.zIndex = t_data.ZINDEX_ABOVE_TOOLS-1; /* as the last tool */
/*{{{
t_log_panel_style_zIndex(panel, caller);
}}}*/
/*{{{
            panel.style.boxShadow = "0px 0px "+(2*panel_rank)+"px blue";
            panel.style.opacity   = "1";
}}}*/
        }
        /*}}}*/
        /* PINNED PANELS .. [unhide] {{{*/
        else if( panel.classList.contains(t_data.CSS_PINNED) )
        {
            t_show_pinned_panel(panel, panel_rank);
        }
        /*}}}*/
        /* OTHER  PANELS .. [hide] [zIndex] {{{*/
        else {
            t_set_CSS_PIVOT_PANEL(panel, false);
            if(!panel.classList.contains(t_data.CSS_PINNED))
            {
                if(t_show_or_dimm_unpinned_panels(caller)) t_show_unpinned_panel( panel );
                else                                       t_dimm_unpinned_panel( panel );
            }
            panel.style.zIndex    = t_data.ZINDEX_TOOL_PANEL_ZERO + panel.tool_rank;
/*{{{
t_log_panel_style_zIndex(panel, caller);
}}}*/
/*{{{
            panel.style.boxShadow = "0px 0px "+(2*panel.tool_rank)+"px black";
            panel.style.opacity   = panel.tool_rank/2 / panel_rank;
}}}*/
        }
        /*}}}*/
    }
    /* STORE TOOLS LAYOUT {{{*/
    /* pat_bag geometry takes time to reflect dynamic content layout .. TODO */
    if(!onWork_PANEL)
    {
        t_update_TOOLS_MAP_GEOMETRY(caller);
    }
    else {
/*
if(onWork_PANEL) log("NOT UPDATING GEOMETRY WHILE WORKING ON ["+onWork_PANEL.id+"]");
*/
    }
    /*}}}*/
};
/*}}}*/
/*_ t_raise_pivot_PANEL_posted_since_onDown {{{*/
let t_raise_pivot_PANEL_posted_since_onDown = function(_caller)
{
/*{{{*/
let log_this   = LOG_MAP.T4_PIVOT;
    let caller = "t_raise_pivot_PANEL_posted_since_onDown";

if(log_this) log(caller+"("+_caller+"): ...return "+(t_raise_pivot_PANEL_timer != null));
/*}}}*/
    return (t_raise_pivot_PANEL_timer != null);
};
/*}}}*/
/*_ t_raise_pivot_PANEL_reset {{{*/
let t_raise_pivot_PANEL_reset = function(_caller)
{
/*{{{*/
let log_this   = LOG_MAP.T4_PIVOT;
    let caller = "t_raise_pivot_PANEL_reset";

if(log_this) logBIG(caller+"("+_caller+")", lf8);
/*}}}*/
    if(t_raise_pivot_PANEL_timer)
    {
        clearTimeout( t_raise_pivot_PANEL_timer );

        t_raise_pivot_PANEL_timer = null;
    }
};
/*}}}*/

/*}}}*/
/** TOOL PANEL PINNED {{{*/
/*{{{*/
const CSS_FULLY_SPREAD = "fully_spread";
const CSS_DIMMED_PANEL = "dimmed_panel";
const CSS_PIVOT_PANEL  = "pivot_panel";

/*}}}*/
/* XXX MOVE FUNCTION BELOW WHERE IT FITS BEST */
/*_ t_show_or_dimm_unpinned_panels {{{*/
let t_show_or_dimm_unpinned_panels = function(_caller)
{
/*{{{*/
let   caller = "t_show_or_dimm_unpinned_panels";
let log_this = LOG_MAP.EV0_LISTEN || LOG_MAP.EV1_DOWN || LOG_MAP.T4_PIVOT || LOG_MAP.EV5_TOOL_CB;

/*}}}*/
    let fully_spread          = ((spread_ratio.x >= 0.9) || (spread_ratio.y >= 0.9));
    let moving_unpinned_panel = (onWork_PANEL && (onWork_PANEL != pivot_PANEL) && !has_el_class(onWork_PANEL, t_data.CSS_PINNED));
    let moving_hotspot        = (             onWork_PANEL        == hotspot    );
    let moving_hotring        = (             onWork_EL_last_used == hotring    );
    let drag_hotspot_request  = hotspot.drag_hotspot_request;
if(log_this) { /*{{{*/
    log_key_val( caller
                 , {   moving_hotspot
                     , moving_hotring
                     , moving_unpinned_panel
                     , onWork_PANEL          : t_util.get_id_or_tag(onWork_PANEL)
                     , pivot_PANEL           : t_util.get_id_or_tag(pivot_PANEL)
                     , fully_spread
                     , drag_hotspot_request
                 }
                 , lb0
               );
    log_caller();
t_fly.t_log_event_status(caller,  lf6 );
}
/*}}}*/

    let show_or_dimm_unpinned_panels
        = moving_hotspot        ?               "hotspot"
        : moving_hotring        ?               "hotring"
        : fully_spread          ?          "fully_spread"
        : drag_hotspot_request  ?  "drag_hotspot_request"
        : moving_unpinned_panel ? "moving_unpinned_panel"
        :                                              "" /* no reason to show */
    ;

if(log_this) log("%c"+caller+" .. CALLED BY "+ _caller+"%c"+(show_or_dimm_unpinned_panels ? "SHOW "+show_or_dimm_unpinned_panels : "DIMM"), lbH, lbb+lbH+lf5);
    return show_or_dimm_unpinned_panels;
};
/*}}}*/
/*_ t_show_unpinned_panel {{{*/
let t_show_unpinned_panel = function(panel)
{
    /* DELETE CSS_DIMMED_PANEL {{{*/
    if( has_el_class(panel, CSS_DIMMED_PANEL) )
        del_el_class(panel, CSS_DIMMED_PANEL);

    /*}}}*/
    /* CHECK  CSS_FULLY_SPREAD {{{*/
    if(!has_el_class(panel, CSS_PIVOT_PANEL))
    {
        let moving_a_pinned_panel   = has_el_class(onWork_PANEL, t_data.CSS_PINNED);
        let tool_panel_pinned       = has_el_class(panel  , t_data.CSS_PINNED);
        let panels_are_fully_spread = ((spread_ratio.x >= 0.9) || (spread_ratio.y >= 0.9));
        let fully_spread
            =  !tool_panel_pinned
            && !moving_a_pinned_panel
            &&  panels_are_fully_spread
        ;

        t_set_CSS_FULLY_SPREAD(panel, fully_spread);
    }
    /*}}}*/
};
/*}}}*/
/*_ t_dimm_unpinned_panel {{{*/
let t_dimm_unpinned_panel = function(panel)
{
    add_el_class(panel, CSS_DIMMED_PANEL);
};
/*}}}*/
/*_ t_show_pinned_panel {{{*/
let t_show_pinned_panel = function(panel, panel_rank)
{
    del_el_class          (panel, CSS_DIMMED_PANEL);
    t_set_CSS_FULLY_SPREAD(panel, false);
    t_set_CSS_PIVOT_PANEL (panel, false);

    panel.style.zIndex = t_data.ZINDEX_PINNED_PANEL_ZERO + panel_rank;
/*{{{
t_log_panel_style_zIndex(panel, "t_show_pinned_panel");
}}}*/
};
/*}}}*/

/*}}}*/
/** TOOL PANEL FOCUS {{{*/
/*{{{*/
let T_POST_FOCUS_TO_DELAY = 500;
let t_post_focus_to_el;

/*}}}*/
/*_ post_focus_to {{{*/
let post_focus_to = function(el,delay=T_POST_FOCUS_TO_DELAY)
{
/*{{{*/
let   caller = "post_focus_to("+get_n_lbl(el)+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/

    /* remove focus from previous */
    if(t_post_focus_to_el) t_blur( t_post_focus_to_el );

    t_post_focus_to_el = el;

    setTimeout(post_focus_to_handler, delay);
};
/*}}}*/
/*_ post_focus_to_handler {{{*/
let post_focus_to_handler = function(el)
{
/*{{{*/
let   caller = "post_focus_to_handler";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    if(!t_post_focus_to_el) return;
/*{{{
logXXX(caller+": ...moving focus to "+ get_n_lbl(t_post_focus_to_el)+")");
}}}*/

    t_focus( t_post_focus_to_el );

    let panel = get_el_PANEL( t_post_focus_to_el );
    if( panel && (pivot_PANEL != panel) )
    {
        t_set_pivot_PANEL(panel, "FOCUSSED TO PANEL");
        t_raise_pivot_PANEL(caller+"("+get_n_lbl(el)+")");
        t_toggle_pivot_PANEL_magnified( prop.get( t_data.PIVOT_MAGNIFIED ) );
    }
};
/*}}}*/
/*_ t_focus {{{*/
let t_focus = function(el)
{
/*{{{
logBIG("t_focus("+t_util.get_id_or_tag(el)+")")
logXXX("...behavior_TOUCH_ELSE_DESKTOP=["+behavior_TOUCH_ELSE_DESKTOP+"]")
log_caller()
t_log.console_dir("document.activeElement", document.activeElement);
}}}*/
    /*if( !behavior_TOUCH_ELSE_DESKTOP )*/

    el.focus();
    add_el_class(el, CSS_FOCUSSED);
    el.addEventListener("focusout"
                        , function() {
/*{{{
logBIG("focusout "+t_util.get_id_or_tag(document.activeElement), lf8);
}}}*/
                            del_el_class(el, CSS_FOCUSSED);
                        });
};
/*}}}*/
/*_ t_blur {{{*/
let t_blur = function(el)
{
/*{{{
logBIG("t_blur("+t_util.get_id_or_tag(el)+")")
t_log.console_dir("document.activeElement", document.activeElement)
log_caller()
}}}*/
    el.blur();

    del_el_class(el, CSS_FOCUSSED);
};
/*}}}*/

/*_ t_focus_clipboard_target {{{*/
let t_focus_clipboard_target = function(e_target, focus_in_msg, _caller)
{
/*{{{*/
let caller = "t_focus_clipboard_target("+get_n_lbl(e_target)+") .. CALLED BY ["+_caller+"]";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log( caller );
if( log_this) t_log.console_dir("e_target", e_target);
/*}}}*/
    /* PERSIST [fly_div] ON SCREEN {{{*/
    t_fly.t_fly_clr_cancel();

    /*}}}*/
    /* SAVE FOCUS-OUT PASTE INSTRUCTIONS .. (the initial container text) {{{*/
    if(!e_target.blur_HTML) e_target.blur_HTML = e_target.innerHTML;

    /*}}}*/
    /* SHOW FOCUS-IN PASTE PROMPT {{{*/
    e_target.innerHTML = focus_in_msg;

    /*}}}*/
    /* SELECT ALL CONTAINER CONTENT .. (will be replaced by pasted data) {{{*/
    t_util.selectNodeContents( e_target );

    /*}}}*/
    /* ADD FOCUS-OUT HANDLER .. (show LAST PASTED TEXT or INITIAL PASTE INSTRUCTIONS) {{{*/
    if(!e_target.onblur) {
        e_target.onblur = function() {
            if     ( e_target.pasteHTML ) e_target.innerHTML = e_target.pasteHTML;
            else if( e_target.blur_HTML ) e_target.innerHTML = e_target.blur_HTML;
        };

    }
    /*}}}*/
    /* FOCUS-IN */
    t_focus( e_target );
};
/*}}}*/
/*}}} */
/** TOOL PANEL MAGNIFIED {{{*/
let MAGNIFIED_BY_FONTSIZE = false;
/*_ t_layout_panel_magnified {{{*/
let t_layout_panel_magnified = function(panel, magnified)
{
/*{{{*/
let   caller = "t_layout_panel_magnified";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"("+panel.id+", [magnified "+magnified+"])");
/*}}}*/
    t_update_panel_TOOLS_MAP_GEOMETRY( panel );                            /* UPDATE [tools_map] */

    if( magnified ) {
        add_el_class(panel,CSS_MAGNIFIED);
        let magnified_scale
            = ((panel == pat_bag) && has_el_class(panel, CSS_OPEN_BAG))
            ?  CSS_MAGNIFIED_SCALE/* * 2*/ /* TOO BIG */
            :  CSS_MAGNIFIED_SCALE
        ;
        if(!t_could_be_magnified(panel, magnified_scale) )
            add_el_class(panel,CSS_TOO_LARGE);

    } else {
        if( has_el_class(panel,CSS_TOO_LARGE) ) {
            del_el_class(panel,CSS_TOO_LARGE);
        }
        del_el_class(panel,CSS_MAGNIFIED);

        if(panel.style.fontSize ) panel.style.fontSize  = "";
        if(panel.style.transform) panel.style.transform = "";
    }

    let scalepin = t_util.get_el_child_with_class(panel, CSS_SCALEPIN);
    if( scalepin ) {
        let scale  = t_util.t_get_panel_scale(panel);
        if( scale == 1) t_util.set_el_caption(scalepin);
        else            t_util.set_el_caption(scalepin, ".. Current scale .. x"+ scale);

    }
};
/*}}}*/

/*_ t_could_be_magnified {{{*/
let t_could_be_magnified = function(panel, magnified_scale)
{
/*{{{*/
let   caller = "t_could_be_magnified";
let log_this = (LOG_MAP.T4_PIVOT || LOG_MAP.EV4_LONG_PRESS || LOG_MAP.T3_LAYOUT);

/*}}}*/
    if( t_seek.t_seeker_could_be_magnified( panel ) ) return true;
    /* COULD APPLY MAGNIFIED SCALE {{{*/

    /* PANEL WH .. f(scale) OR f(fontSize) {{{*/
    let current_fontSize = parseInt(panel.style.fontSize) || 100;
    let current_scale    = (MAGNIFIED_BY_FONTSIZE) ? (current_fontSize / 100) : t_util.t_get_panel_scale(panel);
    let max_scale        = (current_scale > magnified_scale) ? current_scale : magnified_scale;

    let      p_w = Math.floor(panel.offsetWidth  / (current_fontSize  / 100));
    let      p_h = Math.floor(panel.offsetHeight / (current_fontSize  / 100));
    /*}}}*/
    /* VIEW  WH .. f(window - BOX_MARGIN) {{{*/
    let      v_w = w_W - BOX_MARGIN * 2;
    let      v_h = w_H - BOX_MARGIN * 2;
    /*}}}*/
    /* [too_wide] OR [too_high] {{{*/
    let too_wide = (p_w * max_scale) > v_w;
    let too_high = (p_h * max_scale) > v_h;

    /*}}}*/

    /*...........*/ let result_reason = "";
    if     ( too_wide ) result_reason = "("+p_w+" x "+magnified_scale+") > "+v_w+" .. "+ "["+get_n_lbl(panel)+ "] IS TOO WIDE";
    else if( too_high ) result_reason = "("+p_h+" x "+magnified_scale+") > "+v_h+" .. "+ "["+get_n_lbl(panel)+ "] IS TOO HIGH";

/* f(layout pending) {{{
    else if( onWork_EL && !t_tools_layout_on_mouseup_timer) result_reason = "["+p_h+" > "+v_h+"/2) .. onWork_EL layout pending";
    else if( onWork_EL                                    ) result_reason = "["+p_h+" > "+v_h+"/2) .. onWork_EL layout pending";
}}}*/

    let could_apply_magnified_scale = (result_reason == "");
    /*}}}*/
    /* IF NOT: .. (1 <= SCALE <= magnified_scale) {{{*/
    if(!could_apply_magnified_scale)
    {
        let scaleX_max = (v_w / p_w);
        let scaleY_max = (v_h / p_h);
        let capped_scale
            = (scaleX_max < scaleY_max)
            ?  scaleX_max : scaleY_max
        ;
        capped_scale = Math.max(1/magnified_scale, capped_scale);

        if(MAGNIFIED_BY_FONTSIZE) {
            panel.style.fontSize = Math.floor(100 * capped_scale)+"%";
            result_reason += " .. "+panel.style.fontSize;
        }
        else {
            panel.style.transform = "scale("+capped_scale+","+capped_scale+")";
            result_reason += " .. "+panel.style.transform;
        }
    }
    else {
        if(MAGNIFIED_BY_FONTSIZE) panel.style.fontSize  = Math.floor(      100 * max_scale)+"%";
        else                      panel.style.transform = "scale("+max_scale+","+max_scale+")";
    }
    /*}}}*/
if(log_this) { /*{{{*/
    let panel_transform = window.getComputedStyle(panel).transform;
    log_key_val_group( caller
                       , {   MAGNIFIED_BY_FONTSIZE
                           ,              PANEL_WH : p_w+" "+p_h
                           ,               VIEW_WH : v_w+" "+v_h
                           ,      current_fontSize
                           ,       magnified_scale
                           ,         current_scale
                           ,             max_scale
                           ,              too_wide
                           ,              too_high
                           ,       style_transform : panel.style.transform
                           ,        panel_fontSize : panel.style.fontSize
                           ,    computed_transform : panel_transform
                       }
                       , lb0, false
                     );
}
/*}}}*/
if(log_this) log(caller+"("+get_n_lbl(panel)+", "+magnified_scale+") %c "+(could_apply_magnified_scale ? "MAGNIFIED" : "CAPPED")+" %c "+result_reason
                 ,                                                   lbH +(could_apply_magnified_scale ? lbH+lf5     : lbH+lf2 )  ,lbH+lf9           );
    return could_apply_magnified_scale;
};
/*}}}*/
/*_ t_is_panel_magnified {{{*/
let t_is_panel_magnified = function(panel)
{
let log_this  = LOG_MAP.T4_PIVOT;

    let state
        = panel && panel.classList.contains("magnified")
    ;
if(log_this) log("%c t_is_panel_magnified(panel=["+get_n_lbl(panel)+"]) %c: ...return "+state, lbF+lb1, lb2);

    return state;
};
/*}}}*/

/*… t_toggle_onWork_PANEL_magnified {{{*/
let t_toggle_onWork_PANEL_magnified = function(action)
{
    if(onWork_PANEL == pivot_PANEL) {
        t_toggle_pivot_PANEL_magnified();

        return "TOGGLED PIVOT PANEL "+action;
    }
    else if( !t_seek.t_seeker_PU_is_active() )
    {
        t_toggle_panel_magnified(onWork_PANEL , "toggle");

        if(onWork_PANEL == pat_bag) t_pat_bag_open_or_close_layout();

        return "TOGGLED "+get_n_lbl(onWork_PANEL)+" "+action;
    }
    else {
        return "";
    }
};
/*}}}*/
/*_ t_toggle_panel_magnified {{{*/
let t_toggle_panel_magnified = function(panel, new_state)
{
/*{{{*/
let   caller = "t_toggle_panel_magnified("+t_util.get_id_or_tag(panel)+", "+new_state+")";
let log_this = (LOG_MAP.T4_PIVOT || LOG_MAP.EV4_LONG_PRESS || LOG_MAP.T3_LAYOUT);

if( log_this) t_fly.t_log_event_status(caller, lf4);
/*}}}*/
    /* SET OR TOGGLE STATE {{{*/
    let old_state = panel.classList.contains("magnified");
    switch( new_state ) {
        case  true: /* new_state =  new_state; */ break; /* SET    */
        case false: /* new_state =  new_state; */ break; /* UNSET  */
        default:       new_state = !old_state;    break; /* TOGGLE */
    }
    /*}}}*/
    /* STORE CHANGE {{{*/
    if(new_state != old_state)
    {
        t_save_update_post(get_n_lbl(panel)+" magnified "+new_state);

if( log_this) log(caller+": ...TOGGLED TO "+ new_state);
    }
    else {
if( log_this) log(caller+": ...NO CHANGE");
    }
    /*}}}*/
    if(panel != hotspot)
        t_layout_panel_magnified(panel, new_state);

    return new_state;
};
/*}}}*/
/*_ t_toggle_pivot_PANEL_magnified {{{*/
let t_toggle_pivot_PANEL_magnified = function(new_state)
{
/*{{{*/
let   caller = "t_toggle_pivot_PANEL_magnified("+new_state+")";
let log_this = (LOG_MAP.T4_PIVOT || LOG_MAP.EV4_LONG_PRESS || LOG_MAP.T3_LAYOUT);

/*}}}*/
    /* TOGGLE STATE {{{*/
    if( !pivot_PANEL ) return false;

    let old_state = prop.get                ( t_data.PIVOT_MAGNIFIED );
    new_state     = t_toggle_panel_magnified( pivot_PANEL, new_state);

    /*}}}*/
    /* STORE CHANGE {{{*/
    if(new_state != old_state) {
        prop.set(t_data.PIVOT_MAGNIFIED , new_state);

        t_save_update_post("pivot_magnified "+new_state);

if(log_this) log(caller+": pivot_magnified: %c "+new_state+" ", (new_state ? lb2 : lb8));
    }
    /*}}}*/
    return new_state;
};
/*}}}*/
/*}}}*/
/*}}}*/

/* EVENT HANDLERS .. DOWN .. MOVE .. LONG_PRESS .. UP .. CLICK */
/*{{{*/
/** DOWN {{{*/
/*{{{*/

let mousedown_consumed_by = "";
/*}}}*/
/*  t_pointerdown_listener {{{*/
let t_pointerdown_listener = function(e)
{
/*{{{*/
let   caller = "t_pointerdown_listener";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;

let tag_this = DOM_TOOLS_TAG || log_this;
if( log_this) t_log.console_clear(caller);
if( log_this) log(caller+"("+ get_n_lbl(t_get_event_target(e))+")");
if( log_this) log("...was_a_click "+was_a_click()+" .. onDown_MS=["+onDown_MS+"]");
if(LOG_MAP.EV7_DISPATCH) t_fly.t_log_event_status(caller);
/*}}}*/
    /* DOWN .. times [PMS .. MS] .. modifiers (SHIFT CTRL ALT) {{{*/
    t_log.log_CLR();
    onDownPMS = onDown_MS;            /* previous  */
    onDown_MS = new Date().getTime(); /* current   */
/*{{{
if( prop.get(t_data.PIN_SEEKSPOT) ) log("%c onDown_MS %c"+(onDown_MS / 1000), lbL+lf2,lbR+lf2);
}}}*/

    dom_scroll.clr_has_scrolled();

    onDown_SHIFT = e.shiftKey;        /* modifiers */
    onDown_CTRL  = e.ctrlKey ;
    onDown_ALT   = e.altKey  ;
    /*}}}*/
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* return .. [CTRL right-button-menu override] [SHIFT] [ALT] {{{*/
    if(onDown_CTRL ) { log(); caller="onDown_CTRL"  ; t_preventDefault(e, caller); t_event_set_e_consumed_by(e, caller); /*.......................................................*/ return; }
    if(onDown_ALT  ) { log(); caller="onDown_ALT "  ; t_preventDefault(e, caller); t_event_set_e_consumed_by(e, caller); t_log.console_clear     (caller); t_fly.t_fly_init(caller); return; }
    if(onDown_SHIFT) { log(); caller="onDown_SHIFT "; t_preventDefault(e, caller); t_event_set_e_consumed_by(e, caller); t_log.console_clear_post(caller); t_fly.t_fly_init(caller); return; }
    /*}}}*/
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    let                consumed_by = "";                               let  consumed_by_css =  "";
    if(!consumed_by) { consumed_by = onDown_0_MULTITOUCH               (e); consumed_by_css = lf9; }
    if(!consumed_by) { consumed_by = onDown_1_INIT_CTRL_DEBOUNCE_INPUT (e); consumed_by_css = lf1; }
    if(!consumed_by) { consumed_by = onDown_2_slot_fullscreen_DRAG     (e); consumed_by_css = lf3; }
    if(!consumed_by) { consumed_by = onDown_3_TOOL_PRESS               (e); consumed_by_css = lf4; }
    if(!consumed_by) { consumed_by = onDown_4_STICKY_PICK              (e); consumed_by_css = lf2; }
    if(!consumed_by) { consumed_by = onDown_5_TOOL_PICK                (e); consumed_by_css = lf5; }
    if(!consumed_by) { consumed_by = onDown_6_TOOL_MOVE                (e); consumed_by_css = lf6; }
    if(!consumed_by) { consumed_by = onDown_7_SENTENCE                 (e); consumed_by_css = lf7; }
    if(!consumed_by) { consumed_by = onDown_8_DOC_SELECT_OR_SEEK       (e); consumed_by_css = lf8; }
    if(!consumed_by) { consumed_by = e.type+" BUBBLING"; onDown_9_STALL( ); consumed_by_css = lf9; }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
if( tag_this && !mousedown_consumed_by) log("%c"+consumed_by, lbH+consumed_by_css);
    mousedown_consumed_by = consumed_by;

    /* consumed_by {{{*/
if( log_this) t_fly.t_log_event_status(t_data.SYMBOL_RIGHT_ARROW+" "+consumed_by, lbb+consumed_by_css);

    if( t_log.logging_something() )
        t_fly.t_log_transcript_event_top("<span class='big'>"+ t_data.SYMBOL_DOWN_ARROW +"</span>"
            +                            "<em>"+               consumed_by              +"</em>"  );

    /*}}}*/

    if(prop.get(t_data.PIN_SEEKSPOT) && prop.get(t_data.FLOATLOG)) t_fly.t_event_LOG_TOOLTIP("MOUSEDOWN");
};
/*}}}*/
/* onDown {{{*/
/*… onDown_0_MULTITOUCH {{{*/
/*{{{*/
let onDown_TOUCHES;

/*}}}*/
let onDown_0_MULTITOUCH = function(e)
{
    onDown_TOUCHES     = e.touches ? e.touches.length : 1;
/*{{{
    let    consumed_by = ((onDown_TOUCHES > 1) ? "MULTI-TOUCH x"+onDown_TOUCHES : "");
    return consumed_by;
}}}*/
};
/*}}}*/
/*… onDown_1_INIT_CTRL_DEBOUNCE_INPUT {{{*/
let onDown_1_INIT_CTRL_DEBOUNCE_INPUT = function(e)
{
/*{{{*/
let   caller = "onDown_1_INIT_CTRL_DEBOUNCE_INPUT";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;

if( log_this) log("%c"+caller, lbF+lb1);
    let consumed_by = "";
/*}}}*/
    /* ONDOWN HANDLERS INIT {{{*/
    t_log_clr_status();
    t_clr_has_moved(caller);
    t_raise_pivot_PANEL_reset(caller);

    dom_scroll.t_scrollIntoViewIfNeeded_cancel(caller);

    if(               t_tools_layout_on_mouseup_timer ) {
        clearTimeout( t_tools_layout_on_mouseup_timer );
        /*.........*/ t_tools_layout_on_mouseup_timer = null;
    }

    if(t_preventDefault_caller) t_restoreDefault("ON DOWN INIT");

    onMove_selection_removed    = false;

    mousedown_consumed_by       = "";
    mouselong_press_consumed_by = "";
    mousemove_consumed_by       = "";
    mouseup_consumed_by         = "";

    move_cooldown_handler();

    /*}}}*/
    /* ONDOWN PROGRESS INIT {{{*/
    fully_spread_since_onDown                      = false;
    pivot_PANEL_changed_since_onDown               = false;

    /*}}}*/
    /* ONDOWN XY {{{*/
    set_onDown_XY(e, caller);
    onMoveDXY.x = 0;
    onMoveDXY.y = 0;

    /*}}}*/
    /* ONDOWN SCROLL XY {{{*/
    if(!dimm_mask_displayed() )
        onDown_SCROLL_XY
            = {   x : window.scrollX
                , y : window.scrollY
            };

    /*}}}*/
/*
 :!start explorer "https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action"
*/
    /* ONDOWN A SCROLLABLE STICKY .. consume .. return {{{*/
    let e_target           = t_get_event_target(e);
    let sticky             = t_sticky.t_sticky_e_target_STICKY(e_target);
    let sticky_scrollable  = t_sticky.t_sticky_onDown_a_scrollable_STICKY(sticky, e_target);
    if( sticky_scrollable )
    {
        /* A TOUCH DEVICE MAY SCROLL THE TEXT WITH NO SCROLLBAR */
        if(behavior_TOUCH_ELSE_DESKTOP)
        {
            consumed_by    = "DOWN A SCROLLABLE STICKY";
            onDown_EL      = sticky;

            t_sticky.t_sticky_scroll_STICKY_PAD_MSG( e_target );

            t_seek.t_seeker_PU_hide("instant");

if( log_this) log("%c"+consumed_by, lbH+lf8);
            return consumed_by;
        }
    }
    /*}}}*/
    /* ONDOWN A SCROLLBAR .. consume .. return {{{*/
    let event_on_scrollbar = t_util.is_event_on_scrollbar( e );
    if( event_on_scrollbar && behavior_TOUCH_ELSE_DESKTOP)
    {
        consumed_by = "DOWN ["+t_util.get_id_or_tag(e_target)+"] SCROLLBAR";
        onDown_EL   = e_target;

if( log_this) log("%c"+consumed_by, lbH+lf1);
        return consumed_by;
    }
    /*}}}*/
    /* ONDOWN TARGET EL {{{*/

    t_set_onWork_EL(e_target, caller, e);

    /*}}}*/
    /* ONDOWN SEEKER {{{*/
/*{{{
    if( t_seek.t_seeker_has_TARGET() || is_a_seeker_target(onWork_EL))
}}}*/
    t_seek.t_seeker_onDown_1_INIT_CTRL_DEBOUNCE_INPUT(onWork_EL, onDown_XY);

    seek_next_slot_num_cancel();
    /*}}}*/
    /* ONDOWN SELECTION {{{*/
    get_onDown_SELECTION();

    /*}}}*/
    /* ONDOWN FOCUS {{{*/
/*{{{
    if(onWork_PANEL == headsup_w) {
        t_preventDefault(e, "FOCUS");

        t_focus( words_filter_input );
    }
}}}*/
    /*}}}*/
    /* CONSUME CLICK BURST {{{*/
    if(t_is_bouncing_e_type(e.type, "t_pointerdown_listener", T_EVENT_DEBOUNCE_DELAY))
    {
        consumed_by = "BOUNCING [EVENT <= "+T_EVENT_DEBOUNCE_DELAY+" ms]";

        t_clear( consumed_by );
    }
    /*}}}*/
if( log_this && consumed_by) t_fly.t_log_event_status(caller+": "+consumed_by, lf1);
    return consumed_by;
};
/*}}}*/
/*… onDown_2_slot_fullscreen_DRAG {{{*/
let onDown_2_slot_fullscreen_DRAG = function(e)
{
/* {{{*/
let   caller = "onDown_2_slot_fullscreen_DRAG";
let log_this = LOG_MAP.EV1_DOWN ||LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbF+lb2);
/*}}}*/
    if(!div_slot_containers_displayed()         ) return "";
    if(!has_el_class(onWork_EL, CSS_FULLSCREEN )) return "";

    let consumed_by = "START CONTAINERS FULLSCREEN DRAG";

    t_add_tool_pointermove_listener(caller);

if( log_this && consumed_by) log("%c"+consumed_by, lf2);
    return consumed_by;
};
/*}}}*/
/*… onDown_3_TOOL_PRESS {{{*/
let onDown_3_TOOL_PRESS = function(e)
{
/* {{{*/
let   caller = "onDown_3_TOOL_PRESS";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;

if( log_this) log("%c"+caller, lbF+lb3);
/*}}}*/
/* TODO child of [dimm_mask] .. [div_slot_containers fullscreen selected container] */
    /* ADD LONG-PRESS TIMER .. (do not consume) {{{*/
    if( onDown_3_TOOL_PRESS_has_long_press_handler() )
    {
if( log_this) log("%c ADDING LONG-PRESS TIMER:", lbF+lf3);

        add_long_press_listener("ON DOWN TOOL PRESS "+ get_n_lbl(onWork_EL));
        if( has_el_class(onWork_EL, CSS_TOOLTIP) ) {
if( log_this) log("%c ADDING SCROLL LISTENER ON "+get_n_lbl(onWork_EL), lbH+lf3);

            add_listener_capture_active(onWork_EL, "scroll", onDown_3_TOOL_PRESS_scroll_listener);
        }
    }
    /*}}}*/
    set_onWork_EL_pressed();
    return ""; /* allow further handling */
};
/*}}}*/
/*… onDown_3_TOOL_PRESS_scroll_listener {{{*/
let onDown_3_TOOL_PRESS_scroll_listener = function(e)
{
/*{{{*/
let   caller = "onDown_3_TOOL_PRESS_scroll_listener";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV3_UP;

if( log_this) log("%c"+caller, lbH+lb3);
/*}}}*/

    if( is_long_press_pending() )
        del_long_press_listener(caller+"("+t_util.get_id_or_tag(e.target)+")");

    remove_listener_capture_active(e.target, "scroll", onDown_3_TOOL_PRESS_scroll_listener);
};
/*}}}*/
/*… onDown_3_TOOL_PRESS_has_long_press_handler {{{*/
let onDown_3_TOOL_PRESS_has_long_press_handler = function()
{
/*{{{*/
let caller = "onDown_3_TOOL_PRESS_has_long_press_handler";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV4_LONG_PRESS;
let tag_this = DOM_TOOLS_TAG || log_this;

if( log_this) log("%c"+caller, lbH+lb3);
/*}}}*/
    /* CONTEXT {{{*/
    if(!onWork_EL) return false;
    /* onWork_PANEL {{{*/
    let panel1_is_a_dimm_mask        = dimm_mask_is(                onWork_EL                    );
    let panel2_is_hotspot            = (                            onWork_PANEL   ==  hotspot   );
    let panel3_is_a_sel_bag_CHILD    = (            sel_bag ==      onWork_PANEL) && ( onWork_EL != sel_bag);
    let panel4_longpress_magnify     = (onWork_PANEL &&       (     onWork_PANEL   ==  onWork_EL ));
/*{{{
    let panel5_has_a_SCALEPIN        = t_util.get_el_child_with_class(     onWork_PANEL    , CSS_SCALEPIN);
}}}*/
    /*}}}*/
    /* onWork_EL {{{*/
    let el0_on_a_sentence_container  = t_util.is_el_or_child_of_class(onWork_EL, t_sentence.CSS_SENTENCE_CONTAINER);
    let el0_is_a_scrolling_EL        =  has_el_class(onWork_EL, t_data.CSS_SCROLLING);
    let el0_onSlotEL                 = (t_get_onWork_EL_slot() > 0);
    let el1_is_a_tool                =  t_is_a_tool_el                    ( onWork_EL, caller               );
    let el2_is_a_dimm_mask_child     =  t_util.is_el_or_child_of_parent_el( onWork_EL, dimm_mask            );
    let el3_is_a_fly_div_child       =  t_util.is_el_or_child_of_parent_el( onWork_EL, t_fly.t_fly_div_get());
    let el4_is_a_scalepin            =  has_el_class(onWork_EL     , CSS_SCALEPIN);
    let el5_has_t_sticky_EDIT        =  is_a_DOM_LOAD_featured_function("t_sticky.t_sticky_EDIT");
    let el5_is_a_seek_sticky         =  t_seek.t_seeker_get_STICKY();
    let el5_pinned_sticky_count      =  el5_has_t_sticky_EDIT && t_sticky.t_sticky_GET_COUNT();
    let el6_is_import_clipboard      = (onWork_EL && (onWork_EL.id == t_data.CSS_FLY_CLIPBOARD));
    let el7_has_title                =  t_util.get_el_title(onWork_EL);

    /*}}}*/
/*{{{*/
if( tag_this)
    log_key_val_group( caller
                 , {   onWork_PANEL                  : get_n_lbl(onWork_PANEL)
                     ,  panel1_is_a_dimm_mask
                     ,  panel2_is_hotspot
                     ,  panel3_is_a_sel_bag_CHILD
                     ,  panel4_longpress_magnify
/*{{{
                     ,  panel5_has_a_SCALEPIN
}}}*/
                     , onWork_EL                     : get_n_lbl(onWork_EL)
                     ,  current_sel_text             : t_util.ellipsis(t_get_current_sel_text())
                     ,  el0_on_a_sentence_container
                     ,  el0_is_a_scrolling_EL
                     ,  el0_onSlotEL
                     ,  el1_is_a_tool
                     ,  el2_is_a_dimm_mask_child
                     ,  el3_is_a_fly_div_child
                     ,  el4_is_a_scalepin
                     ,  el5_has_t_sticky_EDIT
                     ,  el5_is_a_seek_sticky
                     ,  el5_pinned_sticky_count
                     ,  el6_is_import_clipboard
                     ,  el7_has_title
                     , onDown_SEL_TEXT               : t_util.ellipsis_short(onDown_SEL_TEXT)
                     ,                       callers : t_log.get_callers()
                 }
                 , lf3);

/*}}}*/
    /*}}}*/
    /* ON-SCROLLBAR {{{*/
    let handled_by; let why_not;
    if( el0_is_a_scrolling_EL )
    {
        handled_by = "";
        why_not    = "ON A SCROLLING EL";
    }
    /*}}}*/
    /* ON-SENTENCE-CONTAINER {{{*/
    else if( el0_on_a_sentence_container )
    {
        handled_by = "";
        why_not    = "ON A SENTENCE CONTAINER";
    }
    /*}}}*/
    /* ON-TOOL {{{*/
    else if( el1_is_a_tool ) {

        /* onWork_PANEL */
        if     ( panel1_is_a_dimm_mask          ) handled_by =     onWork_EL.id          ;
/*{{{
        else if( panel2_is_hotspot              ) handled_by = "HOTSPOT PANELS UNHIDE"  ;
}}}*/
        else if( panel3_is_a_sel_bag_CHILD      ) handled_by = "A [sel_bag] CHILD"      ;
        else if( panel4_longpress_magnify       ) handled_by = "A TOOL PANEL TO MAGNIFY";

        /* onWork_EL */
        else if( el2_is_a_dimm_mask_child       ) handled_by = "A [dimm_mask] CHILD"    ;
        else if( el3_is_a_fly_div_child         ) handled_by = "A [fly_div] CHILD"      ;
        else if( el4_is_a_scalepin              ) handled_by = onWork_EL.id             ;
        else if( el5_is_a_seek_sticky           ) handled_by = "A [sticky] TO FEED FROM SEL_TEXT";
        else if( el6_is_import_clipboard        ) handled_by = "IMPORT CLIPBOARD PASTE TOOL";
        else if( el7_has_title                  ) handled_by = "ON LONG-PRESS FOR A TOOL WITH TITLE ["+el7_has_title+"]";

        /* [pat_bag] */
        else if((onWork_EL    == off_bag       )) handled_by = "A [pat_bag] DIV"        ;
        else if((onWork_EL    == alt_bag       )) handled_by = "A [pat_bag] DIV"        ;
        else if((onWork_EL    == bak_bag       )) handled_by = "A [pat_bag] DIV"        ;
        else if((onWork_EL    == bag_rot       )) handled_by = "A [pat_bag] TOOL"       ;
        else if((onWork_EL    == bot_div       )) handled_by = "A [pat_bag] DIV"        ;


        else if((onWork_EL    == transcript1   )) handled_by =    onWork_EL.id          ;
        else if((onWork_EL    == transcript2   )) handled_by =    onWork_EL.id          ;

    }
    /*}}}*/
    /* ON-SLOT .. ON-STICKY EDIT .. ON-DOC NEW FIRST STICKY {{{*/
    else {
        if     (     el0_onSlotEL               ) why_not    = "ON A SLOT-NODE";
        else if(     onDown_SEL_TEXT            ) handled_by = "LONG-PRESS [NEW sticky]";
        else if(     el5_has_t_sticky_EDIT      ) {
            if     ( el5_pinned_sticky_count < 1) handled_by = "A [sticky] TO ADD FIRST STICKY";
            else if( el5_pinned_sticky_count > 0) handled_by = el5_pinned_sticky_count+" [sticky] TO CHOOSE FROM";
        }
    }
    /*}}}*/
    let result = !!handled_by;
if(tag_this) log("%c"+caller+"%c return "+result    +"%c"+(handled_by || why_not)
                 ,lbL+lf3    ,lbC+(result ? lf9:lf8) ,lbR+lf3                    );
    return result;
};
/*}}}*/
/*… onDown_4_STICKY_PICK {{{*/
let onDown_4_STICKY_PICK = function(e)
{
/*{{{*/
let   caller = "onDown_4_STICKY_PICK";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;

if( log_this) log("%c"+caller, lbF+lb4);
    if(!onWork_EL) return "";
/*}}}*/
    let consumed_by = t_sticky.t_sticky_onDown(e);

    set_onWork_EL_pressed();

    if(consumed_by) t_preventDefault(e, "PREVENTING PAGE SCROLL WHILE "+consumed_by);

if( log_this && consumed_by) log("%c"+consumed_by, lf4);
    return consumed_by;
};
/*}}}*/
/*… onDown_5_TOOL_PICK {{{*/
let onDown_5_TOOL_PICK = function(e)
{
/*{{{*/
let   caller = "onDown_5_TOOL_PICK";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;

if( log_this) log("%c"+caller, lbF+lb5);
    if(!onWork_EL) return "";
/*}}}*/
    /* [e_target] {{{*/
    let e_target = t_get_event_target(e);
/*{{{
try {
logXXX("..........................................e_target=["+ t_util.get_id_or_tag(e_target                          ) +"]");
logXXX("..................................e_target.tagName=["+ e_target.tagName                                  +"]");
} catch(ex) {}
}}}*/
    let     consumed_by = "";
    /*}}}*/
    /* PLAYGROUND [doc_evt_div] {{{*/
    if(t_fly.t_doc_evt_div_get())
    {
        if(    !t_util.is_el_or_child_of_parent_el(e_target, t_fly.t_doc_evt_div_get())
            && !t_util.is_el_or_child_of_parent_el(e_target, t_fly.t_doc_log_div_get())
        )
            t_fly.t_doc_div_clear("doc_evt_div");

    }
    /*}}}*/
    /* FOCUS ON SOME INPUT {{{*/
/*{{{
try{
logXXX("...e_target............=["+ t_util.get_id_or_tag(e_target) +"]");
logXXX("...e_target.tagName....=["+ e_target.tagName        +"]");
} catch(ex) {}
}}}*/
    if(e_target)
    {
        /* [e_target] IS AN INPUT .. FOCUS {{{*/
/*{{{
        if(e_target.tagName == "INPUT")
        {
if( log_this) log("...%c INPUT FOCUS TO TARGET:", lb5);

            t_focus(e_target);
        }
}}}*/
        /*}}}*/
        /* TODO FOCUSSING NEXT PANEL INPUT {{{*/
/* TODO {{{
        else {
            let inputs = e_target.getElementsByTagName("INPUT");
            if(inputs.length)
            {
                logXXX(caller+": ...TARGET CONTAINS "+inputs.length+" INPUT NODES");
                for(let i=0; i < inputs.length; ++i)
                {
                    let el = inputs[i];
                    if( el.tagName == "INPUT")
                    {
logXXX("...document.activeElement=["+ get_n_lbl(document.activeElement) +"]");
logXXX(".........posting focus to ["+ get_n_lbl(el                    ) +"]");
logXXX(".....INPUT FOCUS TO CHILD ["+ t_util.get_n_txt(el                    ) +"]");

                        post_focus_to(el);
                        break;
                    }
                }
            }
        }
}}}*/
        /*}}}*/
    }
    /*}}}*/
    /* CSS_PUSH_PIN {{{*/
    let mouse_down_on_a_push_pin = onWork_EL.classList.contains( CSS_PUSH_PIN );

if( log_this && mouse_down_on_a_push_pin) log("%c...MOUSE DOWN ON %c"+onWork_EL.id+" PUSH PIN", lf5, lbH+lf1);
    /*}}}*/
    /* PIVOT PANEL SWITCH .. (move tool drag) {{{*/
    if(    !consumed_by
        && !mouse_down_on_a_push_pin
        && (onWork_PANEL                                  )
        && (onWork_PANEL                  != dimm_mask    )
        && (onWork_PANEL                  != hotspot      )
        && (onWork_PANEL                  != t_fly.t_fly_div_get())
        && !onWork_PANEL.classList.contains( t_data.CSS_PINNED   )
        && !t_seek.t_seeker_get_tool_panel(onWork_PANEL)
    ) {
        if(onWork_EL == onWork_PANEL) t_seek.t_seeker_PU_hide("instant");
        /* SWITCH [pivot_PANEL] {{{*/
/*{{{
logXXX("t_util.is_el_or_child_of_parent_el(e_target, pivot_PANEL)=["+t_util.is_el_or_child_of_parent_el(e_target, pivot_PANEL) +"]");
}}}*/
        if(      (onWork_PANEL != pivot_PANEL)
/*
              && (   !e_target || (e_target.tagName != "INPUT")
                  || !t_util.is_el_or_child_of_parent_el(e_target, pivot_PANEL))
*/
          ) {
if( log_this) log("%c...PIVOT PANEL SWITCH TO %c"+onWork_PANEL.id, lf5, lbH+lf5);
            let msg
                = caller+": EVENT CANCELED:"
                + LF+"SWITCHING PIVOT PANEL"
                +    " FROM ["+ get_n_lbl(pivot_PANEL ) +"]"
                +      " TO ["+ get_n_lbl(onWork_PANEL) +"]"
                + LF+"...onWork_EL=["+ get_n_lbl(onWork_EL) +"]"
            ;
            t_event_add_e_consumed_by(e, msg);

            onWork_MOVABLE_CHILD      = null;

            fully_spread_since_onDown = true; /* so it may not be cycled without another onDown */

            t_set_pivot_PANEL(onWork_PANEL, "CHANGING UNPINNED [pivot_PANEL]");
            let show_or_dimm_unpinned_panels = true;
            t_raise_pivot_PANEL_layout(show_or_dimm_unpinned_panels, caller);

            t_sync_layout(caller);
        }
        /*}}}*/
        /* CURRENT PANEL .. RAISE & MAGNIFY {{{*/
        else {
if( log_this) log("%c...PIVOT PANEL %c CURRENT", lf5, lbH+lf6);
            if( t_show_or_dimm_unpinned_panels(caller) )
                t_raise_pivot_PANEL(caller);

            /* INPUT CLICKED */
            if(e_target && (e_target.tagName == "INPUT"))
                consumed_by = "INPUT CLICKED";

        }
        /*}}}*/
    }
    /*}}}*/
    /* FLASH UNPINNED PANELS .. f(hotspot) {{{*/
    if(onWork_PANEL == hotspot)
    {
        t_flash_unpinned_panels();
if( log_this) log("%c...PIVOT PANEL %c HOTSPOT", lf5, lbH+lf5);
    }
    /*}}}*/
    /* BUTTONS_POD {{{*/
    let e_target_lbl = get_id_or_tag_and_className( e_target );
    if( t_util.is_el_or_child_of_class(e_target, CSS_BUTTONS_POD) )
    {
/*
        t_acceptBubble(e, "ON DOWN .. BUTTONS POD   ["+ e_target_lbl +"]");
*/
        t_seek.t_seeker_PU_hide("instant");

        consumed_by = CSS_BUTTONS_POD;
    }
    /*}}}*/
    /* WHETHER TO CALL [t_preventDefault] .. f(onWork_EL or onWork_PANEL handler) {{{*/
    if(!consumed_by)
    {
/*{{{
if( log_this) log("%c...ACCEPT BUBBLE or PREVENT DEFAULT...", lf5);
}}}*/
        let    onWork_EL_lbl        = get_n_lbl                  ( onWork_EL    );
        let onWork_PANEL_lbl        = get_n_lbl                  ( onWork_PANEL );

        let has_handler             = (t_util.get_el_event_handler(onWork_EL, caller) != null);
        let is_a_tool               = t_is_a_tool_el(onWork_EL, caller);
        let is_a_tool_dimmed        = t_util.is_el_or_child_of_parent_el(onWork_EL, dimm_mask);
        let is_a_child_of_doc_tools = t_util.is_el_child_of_id(onWork_EL, t_data.DOC_TOOLS_ID);

/*{{{*/
if( log_this)
        log_key_val(  (onWork_PANEL ? "onWork_PANEL=["+ t_util.get_id_or_tag(onWork_PANEL)+"] .. ":"")
                    +                   " onWork_EL=["+ t_util.get_id_or_tag(onWork_EL   )+"] "
                    , { e_target_lbl
                      , e_target_is_a_tool       : t_is_a_tool_el(e_target, "e_target_is_a_tool")
                      , onWork_EL_lbl
                      , onWork_EL
                      , onWork_PANEL_lbl
                      , onWork_PANEL
                      , on_pivot_PANEL           : (onWork_PANEL == pivot_PANEL)
                      , onWork_MOVABLE_CHILD
                      , has_handler
                      , is_a_tool
                      , is_a_tool_dimmed
                      , is_a_child_of_doc_tools
                      , doc_handler_freezed      : t_get_doc_handler_freezed()
                      , seeker_has_TARGET        : t_seek.t_seeker_has_TARGET()
                    }, lf5);
/*}}}*/

/*{{{
        let mouse_down_on_a_push_pin    = has_el_class(onWork_EL, CSS_PUSH_PIN);
log("...mouse_down_on_a_push_pin...................: "+ mouse_down_on_a_push_pin                );
        if     (mouse_down_on_a_push_pin && (onWork_PANEL != pivot_PANEL))
                                                   t_preventDefault(e, "ON DOWN .. TOOL PIN       ["+ onWork_EL_lbl +"]");
}}}*/

        if     (!is_a_tool_dimmed && t_seek.t_seeker_has_TARGET()          ) t_preventDefault(e, "ON DOWN .. SEEK_TARGET   ["+ onWork_EL_lbl +"]");
        else if(    onWork_MOVABLE_CHILD                                   ) t_preventDefault(e, "ON DOWN .. MOVE_CHILD    ["+ onWork_EL_lbl +"]");
        else if(t_touching_a_scrollable_panel(e)                           ) {
/*{{{
        if( behavior_TOUCH_ELSE_DESKTOP                                    ) t_preventDefault(e, "ON DOWN .. TOOL TOUCHED  ["+ onWork_EL_lbl +"]");
                                                                             t_preventDefault(e, "ON DOWN .. PANNEL SCROLL ["+ onWork_PANEL_lbl +"]");
}}}*/
            t_set_body_style_overflow_hidden(true);
        }
        else if(is_a_tool && !is_a_child_of_doc_tools && !is_a_tool_dimmed ) {
            if     ( has_el_class(e_target, t_data.CSS_MAILTO)             ) t_acceptBubble  (e, "ON DOWN .. MAILTO    ["+                  onWork_EL_lbl +"]");
            else if( e_target.id         == t_data.CSS_FLY_CLIPBOARD       ) t_acceptBubble  (e, "ON DOWN .. CLIPBOARD ["+                  onWork_EL_lbl +"]");
            else if( has_handler         && !t_get_doc_handler_freezed()   ) t_acceptBubble  (e, "ON DOWN .. TOOL WITH WORKING HANDLER  ["+ onWork_EL_lbl +"]");
            else if( has_handler                                           ) t_preventDefault(e, "ON DOWN .. TOOL WITH FREEZED HANDLER  ["+ onWork_EL_lbl +"]");
            else                                                             t_preventDefault(e, "ON DOWN .. TOOL WITH      NO HANDLER  ["+ onWork_EL_lbl +"]");
/*{{{
            else if(behavior_TOUCH_ELSE_DESKTOP ) t_preventDefault(e, "ON DOWN .. TOOL TOUCHED          ["+ onWork_EL_lbl +"]");
}}}*/
        }
        else if(!is_a_tool_dimmed && onWork_PANEL) {
            if(     has_handler                  ) t_preventDefault(e, "ON DOWN .. PANEL WITH    HANDLER ["+ onWork_PANEL_lbl +"]");
            else if(!behavior_TOUCH_ELSE_DESKTOP ) t_preventDefault(e, "ON DOWN .. PANEL WITH NO HANDLER ["+ onWork_PANEL_lbl +"]");
        }
/* TODO NO SCROLL ON MOBILE{{{
        else if(prop.get( t_data.ANCHOR_FREEZE ) ) t_preventDefault(e, "ON DOWN .. [anchor_freeze] SET   ["+ onWork_EL_lbl +"]");
}}}*/
        else if(log_this)                          t_acceptBubble  (e, "ON DOWN .. NOT A PANEL OR TOOL   ["+ onWork_EL_lbl +"]");

    }
    /*}}}*/
if( log_this && consumed_by) log("%c"+consumed_by, lf5);
    return consumed_by;
};
/*}}}*/
/*… onDown_6_TOOL_MOVE {{{*/
let onDown_6_TOOL_MOVE = function(e)
{
/*{{{*/
let   caller = "onDown_6_TOOL_MOVE";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;

if( log_this) log("%c"+caller, lbF+lb6);
if( log_this) t_fly.t_log_event_status(caller, lf6);

/*{{{
log("%c onWork_MOVABLE_CHILD.....%c"+ get_n_lbl( onWork_MOVABLE_CHILD ) +"]", lb6, lf3);
log("%c call_t_grid_IS_SIZED()...%c"+ call_t_grid_IS_SIZED( caller    ) +"]", lb6, lf4);
log("%c onWork_MOVABLE_PANEL.....%c"+ get_n_lbl( onWork_MOVABLE_PANEL ) +"]", lb6, lf2);
}}}*/

/*}}}*/
    /* MOVABLE [onWork_EL] [onWork_PANEL] {{{*/
    if(   !onWork_MOVABLE_CHILD
       && !onWork_MOVABLE_PANEL       ) return ""; /* NO MOVING TOOL */
    if( call_t_grid_IS_SIZED(caller)  ) return ""; /* ON GRID */

    let consumed_by = "";
    /*}}}*/
    /* SEEKER ACTIVE HIDE {{{*/
    if( t_seek.t_seeker_PU_is_active() )
    {
if(log_this) log("HIDE SEEK TOOL");

        t_seek.t_seeker_PU_hide("instant");
    }
    /*}}}*/
    /* [PIN / UNPIN] .. [UNGROUP / REGROUP] {{{*/
    let mouse_down_on_a_push_pin = onWork_EL.classList.contains( CSS_PUSH_PIN );
if(log_this) log("...%c[mouse_down_on_a_push_pin: "+mouse_down_on_a_push_pin+"]%c .. %c[onWork_EL "   +get_n_lbl(onWork_EL   )+"]%c ...classList=["+onWork_EL.classList   +"]",lb6,lbA, lbF,lbA);

    if( mouse_down_on_a_push_pin )
    {
        consumed_by = "START TOOL_DRAG PUSH_PIN ["+get_n_lbl(onWork_PANEL)+"]";

        onDown_6_TOOL_DRAG_PUSH_PIN(e);
    }
    else {
        consumed_by = "START TOOL_DRAG PANEL ["+get_n_lbl(onWork_PANEL)+"]";

        t_flash_unpinned_panels();
/*{{{
        let show_or_dimm_unpinned_panels = true;
        t_raise_pivot_PANEL_layout(show_or_dimm_unpinned_panels, caller);
}}}*/
    }
    /*}}}*/
    /* (THEN) START DRAGGING PANEL {{{*/
/* SCROLL FREEZE .. (EMULATOR=OK .. TABLET=KO) {{{
    if(behavior_TOUCH_ELSE_DESKTOP) document.body.style.overflow = t_data.CSS_HIDDEN;
}}}*/
    /* DRAG [hotspot] INTO GUTTER {{{*/
    if( hotspotXY.gutter_urdl )
    {
/*{{{
        t_seek.t_seekzone8_show_gutter_xywh(0, 0, window.innerWidth, window.innerHeight); .. full screen obfuscation ?
}}}*/

    }
    /*}}}*/
    /* ADD MOVE LISTENERS {{{*/
    t_add_tool_pointermove_listener(caller);

    /*}}}*/
    /*}}}*/
if( log_this && consumed_by) log("%c"+consumed_by, lf6);
    return consumed_by;
};
/*}}}*/
/*… onDown_6_TOOL_DRAG_PUSH_PIN {{{*/
let onDown_6_TOOL_DRAG_PUSH_PIN = function(e)
{
/*{{{*/
    let caller = "onDown_6_TOOL_DRAG_PUSH_PIN";
let log_this   = LOG_MAP.T4_PIVOT || LOG_MAP.EV1_DOWN;

if( log_this) log("%c"+caller, lbF+lb6);
/*}}}*/
    /* PIN [pivot_PANEL] or UNPIN A PINNED PANEL {{{*/
    let pinned = onWork_PANEL.classList.contains(t_data.CSS_PINNED);

if( log_this) log("%c.............................pinned "+pinned                           , lbH+(pinned                           ? lf6 : lf8));
if( log_this) log("%c...pivot_PANEL_changed_since_onDown "+ pivot_PANEL_changed_since_onDown, lbH+(pivot_PANEL_changed_since_onDown ? lf6 : lf8));

    if(!pinned && pivot_PANEL_changed_since_onDown) return;
    /*}}}*/
    /* [pinned] TOGGLE {{{*/

    /* PINNED / NOT PINNED */
    pinned = !pinned;
    t_set_CSS_PINNED(onWork_PANEL, pinned);

    /* STORE PANEL PINNED STATE */ /* (ONLY FOR TRANSCRIPT 1 AND 2) TODO... what about other panels */
    if(onWork_PANEL == transcript1) prop.set("transcript1_pinned", pinned);
    if(onWork_PANEL == transcript2) prop.set("transcript2_pinned", pinned);
    t_save_update_post(caller);

    /* FLASH UNPINNED PANELS .. f(PUSH_PIN) */
    t_flash_unpinned_panels(caller);

    /* ADJUST POSITION */
    onWork_PANEL.style.position = pinned ? "fixed" : prop.get( t_data.TOOLS_SCROLL ) ? "absolute": "fixed";

    /*}}}*/
    /* 1/2 UNGROUP JUST-PINNED PANEL {{{*/
    if(pinned) {
if( log_this) log("%c UNGROUP JUST-PINNED TOOL", lf6);
        if( prop.get( t_data.TOOLS_SCROLL ) )
            t_util.t_set_position_fixed( onWork_PANEL );

        onWork_PANEL.style.zIndex = t_data.ZINDEX_PINNED_PANEL_ZERO + onWork_PANEL.tool_rank;
/*{{{
t_log_panel_style_zIndex(onWork_PANEL, caller+" [UNGROUP JUST-PINNED TOOL]");
}}}*/
        t_set_onWork_EL(onWork_PANEL, caller, e);
        t_seek.t_seeker_set_TOOL(onWork_EL);

        t_tools_set_top_xy(h_x, h_y);

        /* [pivot_PANEL] {{{*/
        if(onWork_PANEL == pivot_PANEL)
        {
            let last_panel_idx = t_get_TOOL_panel_idx_not_pinned_last();
            if( log_this) log("%c PINNING [pivot_PANEL] ["+onWork_PANEL.id+"] %c LAST UNPINNED ["+get_n_lbl(TOOL_panels[last_panel_idx])+"]", lf6, lbR+lfX[last_panel_idx % 0]);

            t_set_pivot_PANEL(               (last_panel_idx > 0)
                                             ? TOOL_panels[last_panel_idx]
                                             : null
                                             ,  "REPLACING JUST PINNED [pivot_PANEL]"
                             );
        }
        /*}}}*/
    }
    /*}}}*/
    /* 2/2 REGROUP JUST-UNPINNED PANEL {{{*/
    else {
if( log_this) log("%c REGROUP UNPINNED TOOL", lf6);

        /* insert unpinned panel near the closest from the group */
        if( onWork_PANEL )
        {
            t_set_has_moved("REGROUP JUST-UNPINNED PANEL");

            enter_CSS_SLOW_REGROUP("REGROUP JUST-UNPINNED PANEL");

            let next_panel_idx = t_get_hotspot_dist_next_panel_idx( onWork_PANEL );
            let move_panel_idx = TOOL_panels.indexOf( onWork_PANEL );
/*{{{*/
if( log_this) log( "%c move_panel #"+move_panel_idx+" "+ TOOL_panels[move_panel_idx].id
                   +"%c next_panel #"+next_panel_idx+" "+ TOOL_panels[next_panel_idx].id
                   , lfX[move_panel_idx]
                   , lfX[next_panel_idx]
                 );
/*}}}*/
            if(next_panel_idx) {
                while(move_panel_idx > next_panel_idx) TOOL_panels[ move_panel_idx ] = TOOL_panels[ --move_panel_idx ];
                while(move_panel_idx < next_panel_idx) TOOL_panels[ move_panel_idx ] = TOOL_panels[ ++move_panel_idx ];
                /*..................................*/ TOOL_panels[ next_panel_idx ] = onWork_PANEL;
/*{{{*/
if( log_this) log("%c move_panel #"+move_panel_idx+" "+ TOOL_panels[move_panel_idx].id
                  , lfX[move_panel_idx]
                 );
/*}}}*/
            }
            /* [pivot_PANEL] .. f(just regrouped panel) */
            t_set_pivot_PANEL(onWork_PANEL, "JUST UNPINED PANEL BECOMES [pivot_PANEL]");

            /* LAYOUT GROUPED PANELS AROUND NEW PIVOT PANEL */
            t_tools_set_top_xy(h_x, h_y);

            fully_spread_since_onDown = true; /* so it may not be cycled without another onDown */
        }
    }
    /*}}}*/
};
/*}}}*/
/*… onDown_7_SENTENCE {{{*/
let onDown_7_SENTENCE = function(e)
{
/*{{{*/
let   caller = "onDown_7_SENTENCE";
if(!is_a_DOM_LOAD_featured_function(caller)) return "";
let log_this = LOG_MAP.T4_PIVOT || LOG_MAP.EV1_DOWN;

if( log_this) log("%c"+caller, lbF+lb7);
if( log_this) t_fly.t_log_event_status(caller, lf7);
    let consumed_by = "";
/*}}}*/
    /* NOT WHEN ON DOC TOOLS {{{*/
    if( t_util.is_el_child_of_id(onWork_EL, t_data.DOC_TOOLS_ID) )
    {
if( log_this) log("NOT WHEN ON DOC TOOLS ["+t_util.get_n_lbl(onWork_EL)+"]");

        return "";
    }
    /*}}}*/
    /* SENTENCE CONTAINER ➔ ADD FONT-SIZE WHEEL LISTENER {{{*/
    let sentence_el        = t_sentence.t_SENTENCE_GET_EL_SENTENCE_CONTAINER(onDown_EL);
    if( sentence_el )
    {
        consumed_by += " .. ON A SENTENCE ELEMENT";

        t_preventDefault(e, consumed_by);

        t_CURSOR_add_MOVE_LISTENER(caller);
    }
    /*}}}*/
if( log_this && consumed_by) log("%c"+consumed_by, lf7);
    return consumed_by;
};
/*}}}*/
/*… onDown_8_DOC_SELECT_OR_SEEK .. t_data.WORDING {{{*/
let onDown_8_DOC_SELECT_OR_SEEK = function(e)
{
/* {{{*/
let   caller = "onDown_8_DOC_SELECT_OR_SEEK";
if(!is_a_DOM_LOAD_featured_function(caller)) return "";
let log_this = LOG_MAP.T4_PIVOT || LOG_MAP.EV1_DOWN;

if( log_this) log("%c"+caller, lbF+lb8);
if( log_this) t_fly.t_log_event_status(caller, lf8);
    let consumed_by = "";
/*}}}*/
/*{{{
/\(^\|let\|const\|;\|[{}()]\)\+\s*\(\w\+\.\)\?
logBIG("SELECT WORD: t_seek.t_seeker_PU_is_active()...................=["+ t_seek.t_seeker_PU_is_active()                 +"]")
logBIG("...onWork_EL=["+t_util.get_id_or_tag(onWork_EL)+"]")
}}}*/
    /* NOT WHEN ON DOC TOOLS {{{*/
    if( t_util.is_el_child_of_id(onWork_EL, t_data.DOC_TOOLS_ID) )
    {
if( log_this) log("NOT WHEN ON DOC TOOLS ["+t_util.get_n_lbl(onWork_EL)+"]");

        return "";
    }
    /*}}}*/
    /* SELECT WORD -OR- BUBBLE EVENT {{{*/
/*{{{
logXXX("SELECT WORD: anchor_freeze........................=["+ prop.get( t_data.ANCHOR_FREEZE )   +"]");
logXXX("SELECT WORD: t_preventDefault_has_been_called()...=["+ t_preventDefault_has_been_called() +"]");
logXXX("SELECT WORD: onWork_EL.tagName....................=["+ onWork_EL.tagName                  +"]");
}}}*/
    if(!consumed_by && !t_preventDefault_has_been_called())
    {
        /* BUBBLE EVENT {{{*/
        if( t_is_an_embedded_doc_tool(onWork_EL,log_this) )
        {
            consumed_by = "BUBBLE EVENT";
            let msg = consumed_by+" .. ["+get_id_or_tag(onWork_EL)+"]";

            t_acceptBubble(e, msg, log_this);
        }
        /*}}}*/
        /* CURRENTLY [WORDING] or [ANCHOR_FREEZE] {{{*/
        else if( t_get_doc_handler_freezed() )
        {
            if(onWork_EL.tagName == "A")
            {
                consumed_by += " .. (t_data.WORDING) or (ANCHOR FREEZED)";
                t_preventDefault(e, consumed_by);
            }
            else if(t_util.get_el_event_handler(onWork_EL, caller) != null)
            {
                consumed_by += ".. (EVENT HANDLER FREEZED)";
                t_preventDefault(e, consumed_by);
            }
        }
        /*}}}*/
    }
    /*}}}*/
    /* SEEK TOOL HAS A TARGET {{{*/
    if(   !consumed_by
       && !has_el_class(onWork_EL, t_data.CSS_SCROLLING)
       &&  t_seek.t_seeker_has_TARGET()
      ) {
        consumed_by = "SEEK TOOL ["+t_seek.t_seeker_get_TOOL_label()+"] ON DOC";
        add_page_pointermove_listener( caller );
        add_long_press_listener("ON DOWN DOC TOOL");
    }
    /*}}}*/
if( log_this && consumed_by) log("%c"+consumed_by, lf8);
    return consumed_by;
};
/*}}}*/
/*… onDown_9_STALL .. handler .. is_pending {{{*/
/*{{{*/
const MOVE_ON_STALL_DURATION = 500;
let   move_on_stall_timer    = null;

/*}}}*/
let onDown_9_STALL = function()
{
/* {{{*/
let   caller = "onDown_9_STALL";
let log_this = LOG_MAP.T4_PIVOT || LOG_MAP.EV1_DOWN;

if( log_this) log("%c"+caller, lb8);
/*}}}*/
    if(move_on_stall_timer) clearTimeout(move_on_stall_timer);
    move_on_stall_timer   =   setTimeout(onDown_7_STALL_handler, MOVE_ON_STALL_DURATION);
};
let onDown_7_STALL_handler = function()
{
/*{{{
logXXX("...onDown_7_STALL_handler");
t_fly.t_log_event_status(caller+": TODO .. why has_moved should be freezed when this is called-for ?");
}}}*/
    /* restart from there, after a stall interval */
    move_on_stall_timer = null;
    t_seek.t_seeker_set_TOOL(null);
};
let onDown_7_STALL_is_pending = function()
{
/*{{{
if(move_on_stall_timer != null) logXXX("onDown_7_STALL_is_pending");
}}}*/
    return (move_on_stall_timer != null);
};
let onDown_7_STALL_cancel  = function()
{
    move_on_stall_timer = null;
};
/*}}}*/
/*}}}*/
/*_ t_get_doc_handler_freezed {{{*/
let t_get_doc_handler_freezed = function()
{
/*{{{*/
let   caller = "t_get_doc_handler_freezed";
let log_this = DOM_TOOLS_TAG || LOG_MAP.EV1_DOWN;

/*}}}*/
    let doc_handler_freezed
        =  prop.get( t_data.ANCHOR_FREEZE )
        || prop.get( t_data.WORDING       )
    ;

    doc_handler_freezed
        = onDown_CTRL
        ? !doc_handler_freezed
        :  doc_handler_freezed;

/*{{{*/
if( log_this)
    log_key_val(   caller+": ...return "+ doc_handler_freezed
               ,{ ANCHOR_FREEZE         :  prop.get( t_data.ANCHOR_FREEZE )
                , WORDING               :  prop.get( t_data.WORDING       )
                , onDown_CTRL
                , callers               : t_log.get_callers()
               }, lbH+lfX[doc_handler_freezed ? 4:6]);
/*}}}*/
    return doc_handler_freezed;
};
/*}}}*/
/*_ t_get_onDown_SCROLL_XY {{{*/
let t_get_onDown_SCROLL_XY = function()
{
    return onDown_SCROLL_XY;
};
/*}}}*/
/*… t_touching_a_scrollable_panel {{{*/
let t_touching_a_scrollable_panel = function(e)
{
    let result;
    if( !behavior_TOUCH_ELSE_DESKTOP                                     )  result = false;

    if((onWork_PANEL == transcript2) && (onWork_EL == transcript2)       )  result = true;

    if( has_el_class(onWork_EL, CSS_TOOLTIP) ) {
        let on_a_tooltip_scrollbar
            =  ((onDown_XY.x - onDown_TOOL_XY.x) > onWork_EL.clientWidth )
            || ((onDown_XY.y - onDown_TOOL_XY.y) > onWork_EL.clientHeight); result = on_a_tooltip_scrollbar;
    }
/*{{{
log("t_touching_a_scrollable_panel(e) ...return %c"+result, lbH+lfX[result ? 4:6]);
}}}*/
    return result;
};
/*}}}*/
/*… t_set_body_style_overflow_hidden {{{*/
let t_set_body_style_overflow_hidden = function(hidden)
{
    document.body.style.overflow = (hidden ? t_data.CSS_HIDDEN : "");
/*
     if(onWork_PANEL) onWork_PANEL.style.overflow = (hidden ? "auto" : t_data.CSS_HIDDEN);
*/
};
/*}}}*/
/*}}}*/
/** MOVE {{{*/
/*{{{*/
const DIR_GRAB            = "DIR_GRAB";
const DIR_NUM_NEXT        = "DIR_NUM_NEXT";
const DIR_NUM_PREV        = "DIR_NUM_PREV";
const DIR_SLOT_NEXT       = "DIR_SLOT_NEXT";
const DIR_SLOT_PREV       = "DIR_SLOT_PREV";

let mousemove_consumed_by = "";
let onMove_selection_removed;
/*}}}*/
/*… t_PAGE_pointermove_drag {{{*/
let t_PAGE_pointermove_drag = function(e)
{
if(e.ctrlKey) { log("%c PAGE POINTER MOVE IGNORED .. f(e.ctrlKey)", lbH+lf2); del_page_and_tool_pointermove_listeners( "e.ctrlKey" ); return false; }
/* log {{{ */
let   caller = "t_PAGE_pointermove_drag";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;

let tag_this = DOM_TOOLS_TAG || log_this;
if(LOG_MAP.EV7_DISPATCH && !mousemove_consumed_by) t_fly.t_log_event_status(caller);

    if(!onWork_EL                             ) return false; /* moving element .. none */
    if(!onWork_EL.id                          ) return false; /* moving element .. unknown */

/*}}}*/
if(!log_this) log_this = onDown_CTRL;
    /* update onMoveDXY {{{*/
    get_onMoveDXY(e, caller);

    /*}}}*/
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    let                consumed_by = "";                       let  log_css = lbF;
    if(!consumed_by) { consumed_by = onMove_0_MULTITOUCH       (e); log_css = lb9; }
    if(!consumed_by) { consumed_by = onMove_1_ON_COOLDOWN      (e); log_css = lb1; }
    if(!consumed_by) { consumed_by = onMove_4_MUST_MOVE_MORE   (e); log_css = lb2; }
    if(!consumed_by) { consumed_by = onMove_5_GRAB_SELECTION   (e); log_css = lb5; }
    if(!consumed_by) { consumed_by = onMove_6_GRAB_STICKY      (e); log_css = lb6; }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* consumed_by {{{*/
if( tag_this && (mousemove_consumed_by != consumed_by)) log("%c"+consumed_by, log_css);

    /*}}}*/
    mousemove_consumed_by = consumed_by;

    if(prop.get(t_data.PIN_SEEKSPOT) && prop.get(t_data.FLOATLOG)) t_fly.t_event_LOG_TOOLTIP("PAGE POINTER MOVED");

    return (mousemove_consumed_by != "");
};
/*}}}*/
/*… t_TOOL_pointermove_drag {{{*/
let t_TOOL_pointermove_drag = function(e)
{
if(e.ctrlKey) { log("%c TOOL POINTER MOVE IGNORED .. f(e.ctrlKey)", lbH+lf2); del_page_and_tool_pointermove_listeners( "e.ctrlKey" ); return; }
/*{{{*/
let   caller = "t_TOOL_pointermove_drag";
let log_this = LOG_MAP.EV2_MOVE;

if(LOG_MAP.EV7_DISPATCH && !mousemove_consumed_by) t_fly.t_log_event_status(caller);
/*{{{
if( log_this) t_fly.t_log_event_status(caller, lf2);
}}}*/
/*}}}*/
    /* onMove_selection_removed {{{*/
    if( !onMove_selection_removed )
    {
        t_window_getSelection_removeAllRanges(caller);
        onMove_selection_removed = true;
    }
    /*}}}*/
    /* [onWork_EL] not selected {{{*/
    if(!onWork_EL) return;

    /* onWork_PANEL new CENTER */
    get_onMoveDXY(e, caller);

    let x = onDown_XY.x + onMoveDXY.x;
    let y = onDown_XY.y + onMoveDXY.y;

    /* indirect hotspot dragging */
    if(onWork_PANEL == hotspot)
    {
        x -= onDown_XY.x - onDown_PANEL_XY.x;
        y -= onDown_XY.y - onDown_PANEL_XY.y;
        if( hotspot.style.transform != "") {
            x -= onDown_XY.x - onDown_PANEL_XY.x;
            y -= onDown_XY.y - onDown_PANEL_XY.y;
        }
    }

    /*}}}*/
    /* user has precedence .. (override any transform transition) {{{*/
    if(has_el_class(dom_tools_html, t_data.CSS_SLOW_REGROUP))
        leave_CSS_SLOW_REGROUP(caller);

    /*}}}*/
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    let                consumed_by = "";                                let log_css =  "";
    if(!consumed_by) { consumed_by = onMove_0_MULTITOUCH       (e        ); log_css = lb9; }
    if(!consumed_by) { consumed_by = onMove_1_STICKY_TOOL_SEEK (e        ); log_css = lb1; }
    if(!consumed_by) { consumed_by = onMove_2_STICKY_TOOL_MOVE (e        ); log_css = lb2; }
    if(!consumed_by) { consumed_by = onMove_3_DIV_MAGNIFY      (e        ); log_css = lb3; }
    if(!consumed_by) { consumed_by = onMove_4_MUST_MOVE_MORE   (e        ); log_css = lb4; }
    if(!consumed_by) { consumed_by = onMove_5_GRAB_SELECTION   (e        ); log_css = lb5; }
    if(!consumed_by) { consumed_by = onMove_6_GRAB_TOOL_PANEL  (e, x, y  ); log_css = lb6; }
    if(!consumed_by) { consumed_by = onMove_7_GRAB_TOOL_CHILD  (e, x, y  ); log_css = lb7; }
    if(!consumed_by) { consumed_by = "DRAGGING ["+get_n_lbl(onWork_EL)+"]"; log_css = lb8;
        /* DRAG UNPINNED PANELS (FLASH) {{{*/
        if(onWork_PANEL && !t_raise_pivot_PANEL_posted_since_onDown(caller)
           &&               is_a_spread_drag()
          ) {
            t_flash_unpinned_panels(caller);

        }
        /*}}}*/
        /* DRAG HOTSPOT {{{*/
        if(onWork_PANEL && (onWork_PANEL == hotspot))
        {
            t_tools_pointermove_drag_hotspot(x,y);

        }
        /*}}}*/
        /* DRAG PIVOT XY {{{*/
        else if(onWork_PANEL) {
            t_set_pivotXY( onMove_pivotXY.x + onMoveDXY.x
                         , onMove_pivotXY.y + onMoveDXY.y);

            t_tools_set_top_xy(h_x, h_y);
        }
        /*}}}*/
    }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* consumed_by {{{*/
if( log_this && (mousemove_consumed_by != consumed_by)) log("%c "+caller+": %c "+consumed_by, lb9, log_css);

    /*}}}*/
    mousemove_consumed_by = consumed_by;

    if(prop.get(t_data.PIN_SEEKSPOT) && prop.get(t_data.FLOATLOG)) t_fly.t_event_LOG_TOOLTIP("TOOL POINTER MOVED");
};
/*}}}*/

/* HOTSPOT */
/*… t_tools_pointermove_drag_hotspot {{{*/
let t_tools_pointermove_drag_hotspot = function(x,y)
{
/*{{{*/
let   caller = "t_tools_pointermove_drag_hotspot";
let log_this = LOG_MAP.EV2_MOVE;

if( log_this) log(caller);
/*}}}*/
    /* [IN-GUTTER] .. SHOW .. [add_long_press_listener] {{{*/
    if( hotspotXY.gutter_urdl )
    {
/*{{{
        t_seek.t_seekzone8_show_gutter_xywh(0, 0, window.innerWidth, window.innerHeight); .. full screen obfuscation ?
}}}*/

/*{{{
logXXX("...is_long_press_pending()=["+ is_long_press_pending()                  +"]");
}}}*/
        add_long_press_listener("ON MOVE [hotspot] IN GUTTER");
    }
    /*}}}*/
    /* [IN-WINDOW] .. HIDE .. (tools layout and storage update) {{{*/
    else if( t_seek.t_seekzone8_isOn_gutter() )
    {

if( log_this) log("%c OFF  GUTTER %c HIDE"
                  ,lbb+lbH+lf7 ,lbH       );

        t_seek.t_seekzone8_hide_gutter();

        t_store_consider_page_items_worth_storing("HOTSPOT OFF GUTTER");
        t_seek.t_seekzone5_hide("instant");
        t_TOOL_SET_eval_wide_or_tall_panel(caller);

        if(   has_moved && (onWork_PANEL == hotspot)
           && prop.get( t_data.EDIT_OR_STAGE ))
            prop.set(   t_data.EDIT_OR_STAGE, false); /* EDITING DONE */
    }
    /*}}}*/
    /* DRAG [pivspot] .. f( t_data.TOOLS_TRAP ) {{{*/
    let dragging_pivspot = prop.get( t_data.TOOLS_TRAP );
    if( dragging_pivspot )
    {
        let move_x = false;
        let move_y = false;

        let margin = h_W / 2;
        if     ((onDown_XY_sign.x >  0) && ((x+margin) >  pivotXY.x)) { onMove_pivotXY.x = x+margin; onMoveDXY.x = 0; move_x = true; }
        else if((onDown_XY_sign.x <= 0) && ((x-margin) <= pivotXY.x)) { onMove_pivotXY.x = x-margin; onMoveDXY.x = 0; move_x = true; }

        if     ((onDown_XY_sign.y >  0) && ((y+margin) >  pivotXY.y)) { onMove_pivotXY.y = y+margin; onMoveDXY.y = 0; move_y = true; }
        else if((onDown_XY_sign.y <= 0) && ((y-margin) <= pivotXY.y)) { onMove_pivotXY.y = y-margin; onMoveDXY.y = 0; move_y = true; }

        if(move_x || move_y)
            t_set_pivotXY( move_x ? onMove_pivotXY.x : pivotXY.x
                ,          move_y ? onMove_pivotXY.y : pivotXY.y);
    }
    /*}}}*/
    t_tools_set_top_xy(x, y);
/*{{{
t_spread_log(hotspot);
}}}*/
};
/*}}}*/
/* TOOL & DOC */
/*… onMove_0_MULTITOUCH {{{*/
let onMove_0_MULTITOUCH = function(e)
{

    let    consumed_by = ((onDown_TOUCHES > 1) ? "MULTI-TOUCH x"+onDown_TOUCHES : "");
    return consumed_by;
};
/*}}}*/
/*… onMove_1_ON_COOLDOWN {{{*/
let onMove_1_ON_COOLDOWN = function(e)
{
    let caller = "onMove_1_ON_COOLDOWN";

    let                                           consumed_by = "";
    if     ( dom_scroll.t_scroll_not_done_yet() ) consumed_by = "SCROLLING";
    else if( move_cooldown_is_pending()         ) consumed_by = "MOVE COOLDOWN "+move_cooldown_reason;

    if(consumed_by)
    {
        consumed_by += ".. (set_onDown_XY tracking)";

        set_onDown_XY(e, caller);
        onMoveDXY.x = 0;
        onMoveDXY.y = 0;
    }

/*{{{
logXXX(consumed_by);
}}}*/
    return consumed_by;
};
/*}}}*/
/* TOOL */
/*… onMove_1_STICKY_TOOL_SEEK {{{*/
let onMove_1_STICKY_TOOL_SEEK = function(e)
{
/*{{{*/
let   caller = "onMove_1_STICKY_TOOL_SEEK";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;

    log_this = log_this && !mousemove_consumed_by; /* LOG FIRST MOVE ONLY */
    let consumed_by = "";
/*}}}*/
    /* NO STICKY SEEK TARGET {{{*/
    let sticky = t_sticky.t_sticky_get_SEEK_NEXT(log_this);
    if(!sticky ) {

if( log_this && !mousemove_consumed_by) log("%c"+caller+"%c NO STICKY SEEK TARGET", lbL+lf1, lbR+lb8);
        return consumed_by;
    }
    /*}}}*/
    /* NO GRABBED STICKY {{{*/
    if( sticky != onDown_EL) {

if( log_this && !mousemove_consumed_by) log("%c"+caller+"%c NO GRABBED STICKY", lbL+lf1, lbR+lb8);
        return consumed_by;
    }
    /*}}}*/
    /* SEEKER MOVE TO STICKY {{{*/
    consumed_by = caller+": SEEKER MOVE TO STICKY";
if( log_this) t_sticky.t_sticky_LOG(sticky, caller);

    t_seek.t_seeker_onMove2_ON_NEXT_STICKY(sticky, onDown_SCROLL_XY);

    if(!t_seek.t_seeker_PU_is_active())
        t_seek.t_seeker_PU_show();

    /*}}}*/
if( log_this) log("%c"+caller+"%c "+consumed_by+" "+sticky.id, lbL+lf1, lbR+lf9);
    return consumed_by;
};
/*}}}*/
/*… onMove_2_STICKY_TOOL_MOVE {{{*/
let onMove_2_STICKY_TOOL_MOVE = function(e)
{
/*{{{*/
let   caller = "onMove_2_STICKY_TOOL_MOVE";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;

    if(!onWork_EL) return "";
/*}}}*/
    /* [sticky] [check_has_moved] {{{*/
    let sticky = t_sticky.t_sticky_get_onWork_STICKY(log_this && !mousemove_consumed_by);
    if(!sticky ) return "";

    check_has_moved( caller );

    /*}}}*/
    /* HIDE SEEKER ACTIVE {{{*/
    if( t_seek.t_seeker_PU_is_active() )
    {
if(log_this) log("HIDE SEEK TOOL");

        t_seek.t_seeker_PU_hide("instant");
    }
    /*}}}*/
    /* RESIZE .. DIR .. MOVE {{{*/
    let consumed_by = "";
    if(!consumed_by && t_sticky.t_sticky_is_RESIZING  (   sticky))
        consumed_by = onMove_2_STICKY_TOOL_MOVE_RESIZE(e, sticky, log_this);

    if(!consumed_by && t_sticky.t_sticky_is_ORIENTING (   sticky))
        consumed_by = onMove_2_STICKY_TOOL_MOVE_DIR   (e, sticky, log_this);

    if(!consumed_by )
        consumed_by = onMove_2_STICKY_TOOL_MOVE_STICKY(e, sticky, log_this);

    /*}}}*/
if( log_this) log("%c"+caller+"%c "+get_n_lbl(sticky)+" %c "+consumed_by, lbH+lf2, lbL+lf4, lbR+lf9);
    return consumed_by;
};
/*}}}*/
/*_ onMove_2_STICKY_TOOL_MOVE_STICKY .. t_sticky_onMove {{{*/
let onMove_2_STICKY_TOOL_MOVE_STICKY = function(e,sticky,log_this)
{
/*{{{*/
let   caller = "onMove_2_STICKY_TOOL_MOVE_STICKY";

log_this = log_this && !mousemove_consumed_by;

    let consumed_by = "MOVE";
/*}}}*/

    let  x = onDown_TOOL_XY.x + onMoveDXY.x;
    let  y = onDown_TOOL_XY.y + onMoveDXY.y;
    t_sticky.t_sticky_onMove(x,y);

if( log_this) log("%c"+caller+"%c "+get_n_lbl(sticky)+" %c "+consumed_by, lbH+lf2, lbL+lf4, lbR+lf3);
    return consumed_by;
};
/*}}}*/
/*_ onMove_2_STICKY_TOOL_MOVE_RESIZE .. t_sticky_RESIZE {{{*/
let onMove_2_STICKY_TOOL_MOVE_RESIZE = function(e,sticky,log_this)
{
/*{{{*/
let   caller = "onMove_2_STICKY_TOOL_MOVE_RESIZE";

    let consumed_by = "";
/*}}}*/
    /* TRACK MOUSE WHILE ON COOLDOWN {{{*/
    if( move_cooldown_is_pending() )
    {
log_this = log_this && !mousemove_consumed_by;

        consumed_by = "RESIZE ON COOLDOWN "+move_cooldown_reason;
    }
    /*}}}*/
    /* OR RESIZE .. AND START COOLDOWN {{{*/
    else {
        if(!has_moved) {
            consumed_by     = "STICKY RESIZE STARTING";

            t_set_has_moved(consumed_by);

log_this = log_this && !mousemove_consumed_by;
        }
        else {
            if(!t_sticky.t_sticky_is_RESIZING() ) {
                consumed_by = "STICKY RESIZE LAUNCHING";

                t_sticky.t_sticky_RESIZE(sticky);
            }
            else {
                consumed_by = "STICKY RESIZE HANDLING";

log_this = log_this && !mousemove_consumed_by;
            }
        }
    }
    /*}}}*/
if( log_this) log("%c"+caller+"%c "+get_n_lbl(sticky)+" %c "+consumed_by, lbH+lf2, lbL+lf4, lbR+lf4);
    return consumed_by;
};
/*}}}*/
/*_ onMove_2_STICKY_TOOL_MOVE_DIR ..... t_sticky_TRACK_DIR {{{*/
let onMove_2_STICKY_TOOL_MOVE_DIR = function(e,sticky,log_this)
{
/*{{{*/
let   caller = "onMove_2_STICKY_TOOL_MOVE_DIR";

    let consumed_by = "";
/*}}}*/
    /* MOUSE ON COOLDOWN .. TRACK LAST XY {{{*/
    if( move_cooldown_is_pending() )
    {
log_this = log_this && !mousemove_consumed_by;

        consumed_by = "DIR ON COOLDOWN "+move_cooldown_reason;

        set_onDown_XY(e, caller);
    }
    /*}}}*/
    /* OR TRACK DIR .. AND START COOLDOWN {{{*/
    if(!consumed_by) {
        if(!has_moved)
        {
log_this = log_this && !mousemove_consumed_by;

            consumed_by = "TRACK DIR JUST STARTED";
        }
        else {
            let dir
                = (Math.abs(onMoveDXY.x) > Math.abs(onMoveDXY.y))
                ? ((onMoveDXY.x > 0) ? "RIGHT" : "LEFT")
                : ((onMoveDXY.y > 0) ?  "DOWN" : "UP"  )
            ;
            consumed_by = "TRACK DIR "+sticky.touched+" "+dir;

            t_sticky.t_sticky_TRACK_DIR(sticky, dir);

            move_cooldown_start("STICKY .. TRACK DIR "+sticky.touched);
        }
    }
    /*}}}*/
if( log_this) log("%c"+caller+"%c "+get_n_lbl(sticky)+" %c "+consumed_by, lbH+lf2, lbL+lf4, lbR+lf5);
    return consumed_by;
};
/*}}}*/
/*… onMove_3_DIV_MAGNIFY {{{*/
let onMove_3_DIV_MAGNIFY = function(e)
{
/* [!div_slot_containers] {{{*/
let   caller = "onMove_3_DIV_MAGNIFY";

    if( !div_slot_containers_displayed() ) return "";
    if( !fullscreen_slot_container       ) return "";
    if( !div_slot_containers             ) return "";

    let consumed_by = t_util.get_id_or_tag(onWork_EL);
    t_preventDefault(e, caller+" "+consumed_by);
/*}}}*/
    /* ON COOLDOWN .. IGNORE MOUSE {{{*/
    if(move_cooldown_is_pending() )
    {
        set_onDown_XY(e, caller);
    }
    /*}}}*/
    /* COOLDOWN DONE .. TRACK MOUSE {{{*/
    else {
        check_has_moved(caller);
        if(has_moved) {
            /* HORIZONTAL .. button_PREV button_NEXT {{{*/
            let  dir = (Math.abs(onMoveDXY.x) > Math.abs(onMoveDXY.y)) ? ((onMoveDXY.x > 0) ?    "PREV" : "NEXT"    )
                :                                                        ((onMoveDXY.y > 0) ? "ZOOM_IN" : "ZOOM_OUT");
/*{{{
logBIG(dir, lf7);
}}}*/

            if((dir == "PREV") || (dir == "NEXT"))
            {
                t_slot_container_set_fullscreen((dir == "PREV") ? button_PREV : button_NEXT);
            }
            /*}}}*/
            /* VERTICAL .. slot_container_magnified_0_to_9 {{{*/
            else {
                let value = (dir == "ZOOM_IN") ? 1 : -1;
                if( value ) {
                    value += slot_container_magnified_0_to_9;
                    value  = Math.max(value, 0);
                    value  = Math.min(value, 9);
                    if( slot_container_magnified_0_to_9 != value) {
                        slot_container_magnified_0_to_9  = value;
                        t_slot_containers_magnify();
                    }
                }
            }
            /*}}}*/
            move_cooldown_start("DIV_MAGNIFY .. "+dir);
        }
    }
    /*}}}*/
    return consumed_by;
};
/*}}}*/
/* TOOL & DOC */
/*… onMove_4_MUST_MOVE_MORE {{{*/

const HAS_NOT_MOVED_ENOUGH = "HAS NOT MOVED ENOUGH";
const HAS_MOVED_ENOUGH     = "";

let onMove_4_MUST_MOVE_MORE = function(e)
{
/* [has_moved] {{{*/
let caller = "onMove_4_MUST_MOVE_MORE";

    if(has_moved && is_long_press_pending())
        del_long_press_listener(caller);

    if(has_moved) return HAS_MOVED_ENOUGH;
/*}}}*/
/*{{{*/
let log_this = (LOG_MAP.EV0_LISTEN || LOG_MAP.EV2_MOVE);
if(!log_this) log_this = onDown_CTRL;
    log_this = log_this && !mousemove_consumed_by; /* LOG FIRST MOVE ONLY */

if( log_this) t_fly.t_log_event_status(caller, lf4);
/*}}}*/
    /* NOT FOR [hotspot] .. NO LAG {{{*/
    if(   (onWork_PANEL == hotspot)
       && (onWork_EL    == hotring)
    ) {
        if( !t_gutter.get_XY_URDL(onDown_HSPOT_XY.x, onDown_HSPOT_XY.y, "NO LAG DRAGGING [hotspot] IN-WINDOW") )
        {
            t_set_has_moved(caller+": no lag for [hotring] when not IN GUTTER");

            del_el_class(pivspot, t_data.CSS_HIDDEN);

            return HAS_MOVED_ENOUGH;
        }
    }
    /*}}}*/
    /* YES WHILE SEEKING [sticky] {{{*/
    let   sticky  = t_sticky.t_sticky_get_onWork_STICKY();
    if(onWork_EL ==       sticky)
    {
        let dxy  = Math.abs(onMoveDXY.x + onMoveDXY.y);
        if( dxy >= 3*MOVED_ENOUGH)
        {
            if(mousemove_consumed_by == HAS_NOT_MOVED_ENOUGH)
            mousemove_consumed_by = ""; /* CLEAR MOVE HANDLING LOCK */
            return HAS_MOVED_ENOUGH;
        }
        else {
            return HAS_NOT_MOVED_ENOUGH;
        }
    }
    /*}}}*/
    /* NOT FOR [fly_div] .. NO LAG {{{*/
    if(onWork_PANEL == t_fly.t_fly_div_get())
    {
/*
        t_set_has_moved(caller+": no lag for fly_div");
*/

        return HAS_MOVED_ENOUGH;
    }
    /*}}}*/
    /* DOWN STALL: DISCARD SMALL MOVES {{{*/
    if( onDown_7_STALL_is_pending() )
    {
        let has_not_moved  = "MOVE ON STALL WAKEUP DELAY";

        has_not_moved     += ".. (set_onDown_XY tracking)";
        set_onDown_XY(e, caller);
        onMoveDXY.x       = 0;
        onMoveDXY.y       = 0;

        return has_not_moved;
    }
    /*}}}*/
    /* [check_has_moved] {{{*/
    if(!has_moved)
    {
        check_has_moved("MOVE CHECK");
    }
    /*}}}*/
    /* HAS MOVED .. CLEAR LONG_PRESS .. [onWork_MOVABLE_CHILD] {{{*/
    if( has_moved )
    {
        if( is_long_press_pending() )
            del_long_press_listener("HAS MOVED "+has_moved);

        if(onWork_MOVABLE_CHILD) onMove_4_GRAB_PANEL_CHILD();

        if(!onWork_PANEL_was_magnified_onMove && t_is_panel_magnified(onWork_PANEL))
        {
/*{{{
            t_layout_panel_magnified(onWork_PANEL, false);
}}}*/
            onWork_PANEL_was_magnified_onMove = true;
            add_el_class(onWork_PANEL, "dragged");
        }


        return HAS_MOVED_ENOUGH;
    }
    /*}}}*/
    return HAS_NOT_MOVED_ENOUGH;
};
/*}}}*/
/*… onMove_4_GRAB_PANEL_CHILD {{{*/
/*{{{*/
let mov_src_div;
let mov_dst_div;
/*}}}*/
let onMove_4_GRAB_PANEL_CHILD = function()
{
    /* parent_div_has_movable_child {{{*/
    let     parent_div  = t_util.get_el_parent_with_tag(onWork_EL,"DIV");

    let parent_div_has_movable_child
        =  (parent_div == pat_bag)
        || (parent_div == off_bag)
        || (parent_div == alt_bag)
        || (parent_div == bak_bag)
    ;

    if(!parent_div_has_movable_child) return;
    /*}}}*/
    /* MOVE A BAG CHILD COPY */
    if(onWork_EL) clr_onWork_EL_pressed();
    onWork_EL = pat_bag9_grab_child( parent_div );

    set_onWork_EL_pressed();
};
/*}}}*/
/* SELECTION */
/*… onMove_5_GRAB_SELECTION {{{*/
let onMove_5_GRAB_SELECTION = function(e)
{
/*{{{*/
let   caller = "onMove_5_GRAB_SELECTION";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;

if( log_this) t_log.console_clear(caller);
/*{{{
}}}*/
if( log_this) t_fly.t_log_event_status(caller, lbH+lf5);
/*}}}*/
/*{{{
.. TODO .. SHOULD NOT HAPPEN .. AS LONG AS A TOOL HANDLING WOULD NOT GET HERE
    if( pivot_PANEL_changed_since_onDown )
    {
if( log_this) logBIG(caller+": pivot_PANEL_changed_since_onDown=["+pivot_PANEL_changed_since_onDown+"]", lbH+lf2);

        return;
    }
}}}*/
    /* TRACK MOUSE WHILE ON COOLDOWN .. return {{{*/
    let consumed_by = "";
    if( move_cooldown_is_pending() )
    {
        consumed_by = "SELECTION ON COOLDOWN";

if(log_this) logBIG(consumed_by +": "+ move_cooldown_reason);

        return consumed_by;
    }
    /*}}}*/
    /* REQUIRES CURRENT SLOT OR [last_selected_slot] {{{*/
    let slot  = t_get_onWork_EL_slot();
    if( slot <= 0) return consumed_by;
    if(!t_select.t_select_get_ccs_length() )
    {
if( log_this) log(caller+": SLOT #"+slot+" NOT CURRENLTY INITIALIZED");

        if(t_preventDefault_caller) t_restoreDefault("NOT CURRENLTY INITIALIZED");

        return consumed_by;
    }
    consumed_by = "SCROLL TO [SLOT NUM]";
    /*}}}*/
    /* LONG-PRESS dismiss {{{*/
    if( is_long_press_pending() )
        del_long_press_listener("PAGE DRAGGED");

    /*}}}*/
    /* SKIP GRAB SELECTION .. f(move started from SEEKER or SEL_BAG) {{{*/
    let grabbed = t_seek.t_seeker_onMove1_grabbed();
    if(!grabbed) {
/*{{{
        if     (t_seek.t_seeker_isOn_SLOT_EL(onWork_EL   )          ) { t_seek.t_seeker_onMove1_grab("ON SELECTION"); }
        else if(                             onWork_PANEL == sel_bag) { t_seek.t_seeker_onMove1_grab("ON SEL_BAG"  ); }
}}}*/
    }
/*{{{
log("%c _onWork_EL.........................=["+ get_n_lbl(onWork_EL          ) +"]", lbb+lf5);
log("%c _onWork_PANEL......................=["+ get_n_lbl(onWork_PANEL       ) +"]", lbb+lf5);
log("%c t_seek.t_seeker_onMove1_grabbed().........=["+    grabbed              +"]", lbb+lf5);
}}}*/
    /*}}}*/
    /* SEEKER [target_type STICKY] {{{*/
    let on_sticky = t_seek.t_seeker_is_onSticky();
    if( on_sticky ) {
if( log_this) log(caller+": on_sticky=["+on_sticky+"]");

        return onMove_1_STICKY_TOOL_SEEK(e);
    }
    /*}}}*/
    /* SEEKER [target_type SELECT] .. [dir] .. (horizontal..vertical) {{{*/
    let  dir = (!grabbed                                     ) ? (                    DIR_GRAB                     )
        :      (Math.abs(onMoveDXY.x) > Math.abs(onMoveDXY.y)) ? ((onMoveDXY.x > 0) ? DIR_NUM_NEXT  : DIR_NUM_PREV )
        :                                                        ((onMoveDXY.y > 0) ? DIR_SLOT_NEXT : DIR_SLOT_PREV)
    ;

    /*}}}*/
    /* [quick_move] {{{*/
    let quick_move
        =  t_seek.t_seeker_is_seeker_PU_ONSEEKER()
        || prop.get(t_data.TOOLS_TIER2)
    ;

    t_seek.t_seeker_set_class(t_data.CSS_QUICK_MOVE, quick_move);
    /*}}}*/
    /* [slot] [num] .. (onWork_EL) .. (dir) {{{*/
    let to_slot = slot;
    let     num = t_get_onWork_EL_num();
    let  to_num = num;
    let num_max = t_select.t_select_get_slot_nodes_length(slot);
    switch(dir) {
        /* [SEEKER MOVE GRAB] {{{*/
        default:
        case DIR_GRAB:      {
            t_seek.t_seeker_onMove1_grab("GRAB SELECTION");

            t_select.slot_visible_num_array_update( to_slot );
        } break;
        /*}}}*/
        /* RIGHT .. NEXT .. ( num + 1) {{{*/
        case DIR_NUM_NEXT:  {
            to_num = num + 1;
            to_num = 1 + (num_max + (to_num-1)) % num_max;
            if((to_num < num) && quick_move) {
                to_num = num;
/*{{{
t_log.logSD5("%c NO BAKWARD NUM  wrapscan on quick_move", lbb+lbH+lf1);
}}}*/
            }
        }
        break;
        /*}}}*/
        /* LEFT  .. PREV .. ( num - 1) {{{*/
        case DIR_NUM_PREV:  {
            to_num = num - 1;
            to_num = 1 + (num_max + (to_num-1)) % num_max;
            if((to_num  > num) && quick_move) {
                to_num = num;
/*{{{
t_log.logSD5("%c NO FORWARD NUM  wrapscan on quick_move", lbb+lbH+lf2);
}}}*/
            }
        }
        break;
        /*}}}*/
        /* DOWN  .. NEXT .. (slot + 1) {{{*/
        case DIR_SLOT_NEXT: {
            to_slot      = t_get_used_slot_dir(slot, +1);
            if((to_slot  < slot) && quick_move) {
                to_slot  = slot;
/*{{{
t_log.logSD5("%c NO BACKWARD SLOT wrapscan on quick_move", lbb+lbH+lf3);
}}}*/
            }

            if( to_slot != slot) {
                to_num   = t_select.ccs[to_slot].num_selected;
                t_seek.t_seeker_from_to_slot_num(slot, num, to_slot, to_num);
            }
        }
        break;
        /*}}}*/
        /* UP    .. PREV .. (slot - 1) {{{*/
        case DIR_SLOT_PREV: {
            to_slot      = t_get_used_slot_dir(slot, -1);
            if((to_slot  > slot) && quick_move)
            {
                to_slot  = slot;
/*{{{
t_log.logSD5("%c NO FORWARD SLOT wrapscan on quick_move", lbb+lbH+lf4);
}}}*/
            }

            if( to_slot != slot) {
                to_num   = t_select.ccs[to_slot].num_selected;
                t_seek.t_seeker_from_to_slot_num(slot, num, to_slot, to_num);
            }
        }
        break;
        /*}}}*/
    }
    slot = to_slot;

    num  = to_num;

    /*}}}*/
    /* SCROLL TO [slot] [num] {{{*/
    if((slot >= 0) && (num > 0))
    {
        if(!t_seek.t_seeker_PU_is_active())
            t_seek.t_seeker_PU_show();

        t_seek.t_seeker_onMove3_ON_SLOT_NUM(slot, num);

        /* COOLDOWN BETWEEN JUMPS .. (SHIFT == sqeeze move cooldown) */
        if( quick_move ) move_cooldown_short("SCROLL TO SLOT "+slot+" (quick)");
        else             move_cooldown_start("SCROLL TO SLOT "+slot           );
    }
    /*}}}*/
    /*  NEXT [to_slot_num_EL] {{{*/
    let to_slot_num_EL;
    if(      (slot >= 0) &&                   t_select.ccs[slot]
          && ( num >  0) &&                   t_select.ccs[slot].nodes)
    {
        to_slot_num_EL = t_select.ccs[slot].nodes[num-1];
        if(to_slot_num_EL != onWork_EL)
            t_set_onWork_EL(to_slot_num_EL, caller, e);
    }
    /*}}}*/
/*{{{*/
if( log_this)
{
    let lfx
        = (dir == DIR_GRAB     ) ? lf8
        : (dir == DIR_NUM_PREV ) ? lf3
        : (dir == DIR_SLOT_NEXT) ? lf4
        : (dir == DIR_NUM_NEXT ) ? lf5
        : (dir == DIR_SLOT_PREV) ? lf6
        :                           lf8;

    log_key_val(  "FROM dir TO slot num"
                , {   from_onWork_EL : get_n_lbl( onWork_EL      )
                    ,      onMoveDXY : onMoveDXY.x+" "+onMoveDXY.y
                    ,            dir
                    , to_slot_num_EL : (to_slot_num_EL ? get_n_lbl(to_slot_num_EL) : "")
                    ,           slot
                    ,            num
                    , onWork_PANEL   : get_n_lbl( onWork_PANEL   )
                    ,     quick_move
                }
                , lbb+lfx
               );

}
/*}}}*/
if( log_this) log("%c"+caller+"%c"+consumed_by+"%c"+slot+" "+num+" %c"+(quick_move ? " [quick_move]" : "")
                  ,lbH+lf5    ,lbL+lf5         ,lbR+lf5           ,lbH+lf4                                );
    return consumed_by;
};
/*}}}*/
/* SENTENCE */
/*let t_SENTENCE_drag_listener_state;*/
/*{{{*/
/*_ t_CURSOR_add_MOVE_LISTENER {{{*/
let t_CURSOR_add_MOVE_LISTENER = function(_caller)
{
/*{{{*/
let   caller = "t_CURSOR_add_MOVE_LISTENER";
let log_this = LOG_MAP.EV0_LISTEN;

if( log_this) t_fly.t_log_event_status(caller+" .. CALLED BY "+ _caller, lf4);
/*}}}*/
    /*if(t_SENTENCE_drag_listener_state) return;*/

    if("ontouchmove"  in document.documentElement) {
        add_listener_capture_active(   window, "touchmove", t_SENTENCE_drag_listener);
    }
    else {
        add_listener_capture_active(   window, "mousemove", t_SENTENCE_drag_listener);
        add_listener_capture_active(   window, "wheel"    , t_SENTENCE_drag_listener);
    }

    /*t_SENTENCE_drag_listener_state = true;*/
};
/*}}}*/
/*_ t_CURSOR_del_MOVE_LISTENER {{{*/
let t_CURSOR_del_MOVE_LISTENER = function(_caller)
{
/*{{{*/
let   caller = "t_CURSOR_del_MOVE_LISTENER";
let log_this = LOG_MAP.EV0_LISTEN;

if( log_this) t_fly.t_log_event_status(caller+" .. CALLED BY "+ _caller, lf6);
/*}}}*/

    t_del_NOT_MOVED_ENOUGH();
    t_del_MOVE_ON_COOLDOWN();

    /* KEEP MOVING CURSOR WHILE MOUSE BUTTON IS UP */
    if( drag_cursor.get_mouseUP_display_state() )
        return;

    /*if(!t_SENTENCE_drag_listener_state) return;*/

    /* STOP MOVING CURSOR WHILE MOUSE BUTTON IS UP */
    if("ontouchmove"  in document.documentElement) {
        remove_listener_capture_active(window, "touchmove", t_SENTENCE_drag_listener);
    }
    else {
        remove_listener_capture_active(window, "mousemove", t_SENTENCE_drag_listener);
        remove_listener_capture_active(window, "wheel"    , t_SENTENCE_drag_listener);
    }

    drag_cursor.hide_drag_cursor();

    /*t_SENTENCE_drag_listener_state = false;*/
};
/*}}}*/
/*_ t_SENTENCE_drag_listener {{{*/
let t_SENTENCE_drag_listener = function(event)
{
if(event.altKey ) return;
if(event.ctrlKey) return;
/*{{{*/
let   caller = "t_SENTENCE_drag_listener";
let log_this = LOG_MAP.EV2_MOVE;

if(log_this) log(caller);
/*}}}*/

    get_onMoveDXY(event, caller);

    if(onDown_XY && t_sentence.t_SENTENCE_drag_DXY( onMoveDXY ) )
    {
        /* next move from here */
/*{{{
        zap_onMoveDXY();
}}}*/
        drag_cursor.move_drag_cursor(event);
        event.preventDefault();
    }
    else if( drag_cursor.get_mouseUP_display_state() )
    {
        drag_cursor.move_drag_cursor(event);
    }
};
/*}}}*/
/*}}}*/
/* TOOL PANEL */
/*… onMove_5_TOOL_PANEL_PINNED {{{*/
let onMove_5_TOOL_PANEL_PINNED = function(x,y)
{
/* {{{*/
let caller = "onMove_5_TOOL_PANEL_PINNED";
let log_this = LOG_MAP.EV2_MOVE;

/*}}}*/
    /* DISMISS LONG_PRESS listener .. f(big move) {{{*/
    if( is_long_press_pending() )
    {
        if( check_big_moved(caller) )
            del_long_press_listener("MOVE PINNED");

    }
    /*}}}*/
    /* [fly_div] CONFINE TO SCREEN {{{*/
    let fly_div = t_fly.t_fly_div_get();
    if( t_util.is_el_or_child_of_parent_el(onWork_EL, fly_div) )
    {
        /* DISMISS [fly_div] clear timer */
        if(t_fly.t_fly_clr_is_pending())
            t_fly.t_fly_clr_cancel();

        /* add a CLOSE handle for user to DISMISS [fly_div]*/
        t_add_closepin_on_panel( fly_div );
    }
    /*}}}*/
    /* TOP-LEFT CORNER {{{*/
    x -= onDown_XY.x - onDown_PANEL_XY.x;
    y -= onDown_XY.y - onDown_PANEL_XY.y;
    /*}}}*/
    /* MIN-MAX {{{*/
    /* a pat_bag child {{{*/
    let x_min, x_max, y_min, y_max;
    let apply_pat_bag_min_max = false; /* bad idea! (onWork_PANEL == pat_bag) && has_el_class(pat_bag, CSS_OPEN_BAG); */
    if( apply_pat_bag_min_max )
    {
        x_min = 0;
        x_max = w_W                    - onWork_PANEL.offsetWidth  * onWork_PANEL.scale;
        y_min = 0;
        y_max = w_H                    - onWork_PANEL.offsetHeight * onWork_PANEL.scale;
    }
    /*}}}*/
    /* a pinned window panel {{{*/
    else {
        x_min =       (  BOX_MARGIN  ) - onWork_PANEL.offsetWidth  * onWork_PANEL.scale;
        x_max = w_W - (2*BOX_MARGIN/2);
        y_min =       (  BOX_MARGIN  ) - onWork_PANEL.offsetHeight * onWork_PANEL.scale;
        y_max = w_H - (  BOX_MARGIN/2);
    }
    /*}}}*/

    x = (x < x_min) ? x_min : (x > x_max) ? x_max : x;
    y = (y < y_min) ? y_min : (y > y_max) ? y_max : y;
    /*}}}*/
    /* VIEW BORDERING {{{*/
if(log_this) log(caller+": moving "+onWork_PANEL.id+" TO ["+x+" "+y+"]");
    t_view.t_view3_move_panel_BORDERING(onWork_PANEL,x,y);

    /*}}}*/
/*{{{
t_spread_log(onWork_PANEL);
}}}*/
};
/*}}}*/
/*… onMove_6_GRAB_TOOL_PANEL {{{*/
let onMove_6_GRAB_TOOL_PANEL = function(e,x,y)
{
/*{{{*/
let   caller = "onMove_6_GRAB_TOOL_PANEL";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;
    log_this = log_this && !mousemove_consumed_by; /* LOG FIRST MOVE ONLY */

if( log_this) log("%c"+caller, lbH+lf6);
/*}}}*/
/* [onWork_MOVABLE_CHILD] [onWork_PANEL] {{{*/
    if( onWork_MOVABLE_CHILD) return "";
    if(!onWork_PANEL        ) return "";

    let consumed_by = "";
/*}}}*/
    if(!consumed_by)
    {
if( t_util.is_el_or_child_of_class(onWork_EL, "zoomed")    )
        consumed_by = "zoomed onWork_EL=["+t_util.get_id_or_tag(onWork_EL)+"]";

    }
    /* PANELS WITH SCROLLABLE CONTENT {{{*/
    if(!consumed_by && t_touching_a_scrollable_panel(e))
    {
/*{{{
if( log_this) t_fly.t_log_event_status(caller+" "+consumed_by, lf6);
if( log_this) log(onWork_PANEL.id +" .. [scrollHeight "+onWork_PANEL.scrollHeight+"] > [clientHeight "+onWork_PANEL.clientHeight+"]");
if( log_this) log(onWork_PANEL.id +" .. [scrollWidth  "+onWork_PANEL.scrollWidth +"] > [clientWidth  "+onWork_PANEL.clientWidth +"]");
}}}*/

        let panel_scrollbar_showing
            =  (onWork_PANEL.scrollHeight > onWork_PANEL.clientHeight)
            || (onWork_PANEL.scrollWidth  > onWork_PANEL.clientWidth )
        ;
if( log_this) log(caller+": panel_scrollbar_showing "+panel_scrollbar_showing);
        if( panel_scrollbar_showing )
            consumed_by = "SCROLLABLE PANEL ["+get_n_lbl(onWork_PANEL)+"]";
    }
    /*}}}*/
    /* MOVE A PINNED PANEL {{{*/
    if(!consumed_by && onWork_PANEL.classList.contains(t_data.CSS_PINNED))
    {
        onMove_5_TOOL_PANEL_PINNED(x, y);
        consumed_by = "TOOL PINNED ["+get_n_lbl(onWork_PANEL)+"]";
    }
    /*}}}*/
    /* UNHIDE PANELS [pivspot] .. f(!pinned) {{{*/
    if(!consumed_by && !onWork_PANEL.classList.contains(t_data.CSS_PINNED))
    {
        let moving_a_panel
            =                               onWork_PANEL
            &&                             !onWork_MOVABLE_CHILD
            && !t_util.is_el_or_child_of_parent_el(onWork_EL, t_fly.t_fly_div_get())
        ;
/*{{{
        log_key_val_group(caller
                          , { moving_a_panel
                            , onWork_PANEL
                            , onWork_MOVABLE_CHILD
                          }, lf7, false);
}}}*/
        if( moving_a_panel ) del_el_class(pivspot, t_data.CSS_HIDDEN);
    }
    /*}}}*/
if(log_this) log("%c"+consumed_by, lbb+lbH+lf6);
    return consumed_by;
};
/*}}}*/
/*… onMove_6_GRAB_STICKY {{{*/
let onMove_6_GRAB_STICKY = function(e)
{
/*{{{*/
let   caller = "onMove_6_GRAB_STICKY";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;

    log_this = log_this && !mousemove_consumed_by; /* LOG FIRST MOVE ONLY */

/*{{{
if( log_this ) t_log.console_clear(caller);
}}}*/
if( log_this ) t_fly.t_log_event_status_if_changed(caller,  lf6 );
    let consumed_by = "";
/*}}}*/
    /* NO STICKY GRABBED {{{*/
/*{{{
    let sticky = t_sticky.t_sticky_get_SEEK_NEXT();
}}}*/
    let onWork_STICKY =  t_sticky.t_sticky_get_onWork_STICKY();
    let seeker_STICKY =  t_seek.t_seeker_get_STICKY();
    let sticky        =  onWork_STICKY || seeker_STICKY;

if( log_this) {
    let l_x
        = (sticky == onWork_STICKY) ? sticky.num
        : (sticky == seeker_STICKY) ? 0
        :                             2;

    log_key_val_group("STICKY GRABBED "+get_n_lbl(sticky)
                      , { t_sticky_get_onWork_STICKY : get_n_lbl( t_sticky.t_sticky_get_onWork_STICKY() )
                        , t_seeker_get_TOOL_label    : t_seek.t_seeker_get_TOOL_label()
                        , t_seeker_onMove1_grabbed   : t_seek.t_seeker_onMove1_grabbed()
                      }
                      , lfX[l_x], true);
}

    if(!sticky) return consumed_by;

    let onSeekXYL   = t_seek.t_seeker_get_onSeekXYL();
    consumed_by = onSeekXYL.label;
    /*}}}*/
    /* DISMISS LONG_PRESS LISTENER .. f(has_moved) {{{*/
    if( is_long_press_pending() )
    {
        del_long_press_listener("SEEK STICKY");

    }
    /*}}}*/
    /* NO SEEK ON STICKY_RING {{{*/
    if( has_el_class(sticky, t_data.CSS_STICKY_RING) )
    {
if( log_this) log("%c NO SEEK ON STICKY_RING", lf8);

        return consumed_by;
    }
    /*}}}*/
    /* [quick_move] {{{*/
    let quick_move
        =  t_seek.t_seeker_is_seeker_PU_ONSEEKER() /* has_el_class(seeker_PU, t_seek.CSS_SEEK5_ONSEEKER) */
        || prop.get(t_data.TOOLS_TIER2)
    ;

    t_seek.t_seeker_set_class(t_data.CSS_QUICK_MOVE, quick_move);
    /*}}}*/
    /* SCROLL TO NEXT STICKY .. (dir) {{{*/
/*{{{
logXXX(caller+": .. onMoveDXY=["+onMoveDXY.x+" "+onMoveDXY.y+"]");
}}}*/
    let  dir = (!t_seek.t_seeker_onMove1_grabbed()                  ) ? (                    DIR_GRAB                      )
        :      (Math.abs(onMoveDXY.x) > Math.abs(onMoveDXY.y)) ? ((onMoveDXY.x > 0) ? DIR_NUM_NEXT  : DIR_NUM_PREV )
        :                                                        ((onMoveDXY.y > 0) ? DIR_SLOT_NEXT : DIR_SLOT_PREV)
    ;

    if(!t_seek.t_seeker_PU_is_active())
        t_seek.t_seeker_PU_show();

    switch(dir)
    {
    default:
    case DIR_GRAB     : { sticky = t_sticky.t_sticky_set_SEEK_NEXT(sticky, onDown_SCROLL_XY,  0); t_seek.t_seeker_onMove1_grab("GRAB STICKY"); } break;
    case DIR_NUM_NEXT : { sticky = t_sticky.t_sticky_set_SEEK_NEXT(sticky, onDown_SCROLL_XY, +1);                                       } break;
    case DIR_NUM_PREV : { sticky = t_sticky.t_sticky_set_SEEK_NEXT(sticky, onDown_SCROLL_XY, -1);                                       } break;
    case DIR_SLOT_PREV: { sticky = t_sticky.t_sticky_set_SEEK_NEXT(sticky, onDown_SCROLL_XY, -1);                                       } break;
    case DIR_SLOT_NEXT: { sticky = t_sticky.t_sticky_set_SEEK_NEXT(sticky, onDown_SCROLL_XY, +1);                                       } break;
    }

/*{{{
    t_seek.t_seeker_set_TOOL   ( sticky );
}}}*/
    /*}}}*/
    /* OR HIDE seeker_PU {{{*/
    if(!sticky && t_seek.t_seeker_PU_is_active())
    {
        t_seek.t_seeker_PU_hide("instant");
    }
    /*}}}*/
    /* COOLDOWN BETWEEN JUMPS .. (SHIFT == sqeeze move cooldown) {{{*/

    t_set_has_moved(caller);
    if( quick_move ) move_cooldown_short("SCROLL TO STICKY "+ get_n_lbl(sticky) +" (quick)");
    else             move_cooldown_start("SCROLL TO STICKY "+ get_n_lbl(sticky)            );
    /*}}}*/
/*{{{*/
if( log_this)
{
    consumed_by += " ["+get_n_lbl(sticky)+"]";

    log_key_val_group("STICKY NEXT "+get_n_lbl(sticky)
                      , {   onMoveDXY : onMoveDXY.x+" "+onMoveDXY.y
                        ,  quick_move
                        ,         dir
                        , consumed_by
                      }
                      , lfX[sticky ? sticky.num : 2], true);
}
/*}}}*/
    return consumed_by;
};
/*}}}*/
/* TOOL CHILD */
/*… onMove_7_GRAB_TOOL_CHILD {{{*/
let onMove_7_GRAB_TOOL_CHILD = function(e,x,y)
{
/*{{{*/
let   caller = "onMove_7_GRAB_TOOL_CHILD";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;
    log_this = log_this && !mousemove_consumed_by; /* LOG FIRST MOVE ONLY */

if( log_this) log("%c"+caller+"%c onWork_EL "+get_n_lbl(onWork_EL)+" %c onWork_MOVABLE_CHILD "+get_n_lbl(onWork_MOVABLE_CHILD), lbH+lf7, lbH+lf6, lbH+lf5);
/*}}}*/
/* [onWork_EL] [onWork_MOVABLE_CHILD] {{{*/
if(!onWork_EL           ) return "";
if(!onWork_MOVABLE_CHILD) return "";

/*}}}*/
    let consumed_by = "MOVING onWork_EL=["+get_n_lbl(onWork_EL)+"] .. mov_src_div=["+get_n_lbl(mov_src_div)+"]";
    /* MOUSE_XY TO PANEL_TOP_LEFT OFFSET .. [ox oy] {{{*/
    let ox = (onDown_XY.x - onDown_TOOL_XY.x);
    let oy = (onDown_XY.y - onDown_TOOL_XY.y);

    /*}}}*/
    /* PANEL-RELATIVE [x y] {{{*/
    x     -= onWork_PANEL.offsetLeft;
    y     -= onWork_PANEL.offsetTop;

    /*}}}*/
    /* UNSCALED [x y] {{{*/
    if(onWork_PANEL_magnified) {
        x  /= onWork_PANEL_magnified.scale;
        y  /= onWork_PANEL_magnified.scale;
        ox /= onWork_PANEL_magnified.scale;
        oy /= onWork_PANEL_magnified.scale;
/*{{{
}}}*/
    }
    /* ADD VERTICAL [mov_div .. POINTER] LEEWAY */
    y     -= onWork_EL.offsetHeight * (behavior_TOUCH_ELSE_DESKTOP ? TOUCH_OFFSET_FACTOR : MOUSE_OFFSET_FACTOR);

    /*}}}*/
    /* CONFINE [mov_div] WITHIN PARENT AREA {{{*/
    /* MOVE [mov_div] {{{*/
    if( pat_bag9_grab_item_is_mov_div() )
    {
        let bag_at_xy = t_pat_bag9_get_bag_at_xy(e,x,y);
        consumed_by+= " .. bag_at_xy=["+bag_at_xy.id+"]";

        let   e_W = onWork_EL.offsetWidth ;
        let   e_H = onWork_EL.offsetHeight;

        let x_min = off_bag.offsetLeft;
        let y_min = bak_bag.offsetTop ;
        let x_max = bak_bag.offsetLeft + bak_bag.offsetWidth  - e_W;
        let y_max = bak_bag.offsetTop  + bak_bag.offsetHeight - e_H;

        x = (x < x_min) ? x_min : (x > x_max) ? x_max : x;
        y = (y < y_min) ? y_min : (y > y_max) ? y_max : y;

        let div_x = x - ox;
        let div_y = y - oy;
        pat_bag9_grab_item_mov_div_xy(e, div_x, div_y, bag_at_xy);
    }
    /*}}}*/
    /*}}}*/
    return consumed_by;
};
/*}}}*/
/*}}}*/
/** UP {{{*/
/*{{{*/

let mouseup_consumed_by = "";
/*}}}*/
/* t_pointerup_listener {{{*/
/*{{{*/
const MOUSEUP_DBL_CLICK  = "DBL_CLICK";
const MOUSEUP_CLICK      = "CLICK";
const MOUSEUP_LONG_CLICK = "LONG_CLICK";
const MOUSEUP            = "MOUSE UP";

/*}}}*/
let t_pointerup_listener  = function(e)
{
if(e.button) return;
if(e.ctrlKey) {logXXX("UP   IGNORED .. f(e.ctrlKey)"); return; }
/* {{{*/
let   caller = "t_pointerup_listener";
let log_this = !onDown_SHIFT && !onDown_ALT && (LOG_MAP.EV0_LISTEN || LOG_MAP.EV3_UP);

let tag_this = DOM_TOOLS_TAG || log_this;

if( log_this) log("%c"+caller, lbH+lf8);
if(LOG_MAP.EV7_DISPATCH) t_fly.t_log_event_status(caller);
/*}}}*/
    /* DEL MOVE and LONG_PRESS LISTENERS {{{*/
    del_page_and_tool_pointermove_listeners( caller );

    if( is_long_press_pending() )
        del_long_press_listener( MOUSEUP );

    /*}}}*/
    /* log event chain {{{*/
    /*
if( log_this ) t_log.console_dir(e);
if( log_this ) log("...onWork_EL=["+(onWork_EL ? onWork_EL.tagName : "")+"]");
if( log_this ) log("..........id=["+(onWork_EL ? onWork_EL.id      : "")+"]");
if( log_this ) log("..........XY=["+e.clientX+" "+e.clientY+"]");
     */
    /*}}}*/
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* return .. [onDown_CTRL] [onDown_SHIFT] {{{*/
    /* DEBOUNCE CTRL INPUT {{{*/
    if( t_is_bouncing_e_type(e.type, caller) ) return;
/*
    if( onWork_EL && (onWork_EL.tagName == "INPUT")) return;
*/
    /*}}}*/
    if(onDown_CTRL ) { log(); return; } /* right-button-menu override */
    if(onDown_ALT  ) { log(); return; }
    if(onDown_SHIFT) { log(); return; }
    /*}}}*/
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* [has_moved] [clicked] [dblclicked] [LONG-PRESS] {{{*/
    get_onMoveDXY(e, caller);

/* TODO rename to make it clear this is required to check [has_move] */
onDown_7_STALL_cancel();
    if(!has_moved) check_has_moved(MOUSEUP);

/*{{{
        let scroll_last_scrollY = dom_scroll.get_scroll_last_scrollY();
logXXX(" %c...has_moved..................=["+ has_moved                   +"%c]",lf8,lbA);
logXXX(" %c...has_been_scrolled_by_script=["+ has_been_scrolled_by_script +"%c]",lf8,lbA);
logXXX(" %c............onDown_SCROLL_XY.y=["+ onDown_SCROLL_XY.y          +"%c]",lf8,lbA);
logXXX(" %c................window.scrollY=["+ window.scrollY              +"%c]",lf8,lbA);
logXXX(" %c...........scroll_last_scrollY=["+ scroll_last_scrollY         +"%c]",lf8,lbA);
    if(!has_moved && (Math.abs(scroll_last_scrollY - onDown_SCROLL_XY.y) > SCROLLED_ENOUGH))
    if(!has_moved && (Math.abs(window.scrollY - onDown_SCROLL_XY.y) > SCROLLED_ENOUGH))
}}}*/
    let has_been_scrolled_by_script = dom_scroll.get_has_been_scrolled_by_script();
    if(!has_moved && behavior_TOUCH_ELSE_DESKTOP && has_been_scrolled_by_script)
        t_set_has_moved( has_been_scrolled_by_script );

    let clicked    = is_a_click(e) && !move_cooldown_is_pending();

    let dblclicked = is_a_dblclick(e, caller);

/*{{{
    if( clicked ) t_scrollIntoViewIfNeeded_cancel(caller);
}}}*/
    /*}}}*/
/*{{{*/
if( log_this) {
    let detail
        = has_moved  ? has_moved
        : dblclicked ? MOUSEUP_DBL_CLICK
        :    clicked ? MOUSEUP_CLICK
        :              MOUSEUP_LONG_CLICK
    ;
    caller += " "+detail;

    log_key_val( caller+": details"
                 , {   behavior_TOUCH_ELSE_DESKTOP
                     , t_preventDefault_caller
                     , t_event_consumed_cause
                     , clicked
                     , dblclicked
                     , fullscreen_slot_container   : t_util.get_id_or_tag(fullscreen_slot_container)
                     , EDIT_OR_STAGE               : prop.get( t_data.EDIT_OR_STAGE )
                 }
                 , lb0
               );

    t_fly.t_log_event_status(caller, lf8);
}
/*}}}*/
    /* EVENT CONSUME OR BUBBLE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    let                consumed_by = "";                                            let consumed_by_css =  "";
    if(!consumed_by) { consumed_by = onUp_0_MULTITOUCH         (e                    ); consumed_by_css = lf9; }
    if(!consumed_by) { consumed_by = onUp_1_TOOL_GRID_TIER_CB  (e, clicked,dblclicked); consumed_by_css = lf1; }
    if(!consumed_by) { consumed_by = onUp_2_SLOT_CONTAINER_CB  (e, clicked           ); consumed_by_css = lf2; }
    if(!consumed_by) { consumed_by = onUp_3_STICKY_TOOL_CB     (e, clicked,dblclicked); consumed_by_css = lf3; }
    if(!consumed_by) { consumed_by = onUp_3_SEEKER_TOOL_CB     (e, clicked,dblclicked); consumed_by_css = lf3; }
    if(!consumed_by) { consumed_by = onUp_3_DOC_TOOL_CB        (e, clicked,dblclicked); consumed_by_css = lf3; }
    if(!consumed_by) { consumed_by = onUp_4_DOC_TOUCH_CB       (e, clicked,dblclicked); consumed_by_css = lf4; }
    if(!consumed_by) { consumed_by = onUp_5_TOOL_ONCLICK       (e, clicked,dblclicked); consumed_by_css = lf5; }
    if(!consumed_by) { consumed_by = onUp_7_DOC_SENTENCES      (e, clicked,dblclicked); consumed_by_css = lf7; }
    if(!consumed_by) { consumed_by = onUp_7_DOC_WORDING        (e, clicked,dblclicked); consumed_by_css = lf7; }
    if(!consumed_by) { consumed_by = onUp_8_ON_EVENT_CONSUMED  (e                    ); consumed_by_css = lf8; }
    if(!consumed_by) { consumed_by = e.type+" BUBBLING";                                consumed_by_css = lf9; }
if( tag_this && !mouseup_consumed_by) log("%c"+consumed_by, lbH+consumed_by_css);
    mouseup_consumed_by = consumed_by;
    /*............................*/ onUp_9_ON_MOUSEUP_DONE    (e);
    /* DONE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

    /* consumed_by {{{*/
/*{{{
log("%c"+caller+":", lbF);
log("_ e..........path[0]=["+get_n_lbl(e.path[0])+"]");
log("_ e..........handler=["+get_n_lbl(t_util.get_el_parent_with_any_event_handler(e.path[0]), caller)+"]");
log("_ e..........bubbles=["+e.bubbles+"]");
log("_ e.......cancelable=["+e.cancelable+"]");
log("_ e.....cancelBubble=["+e.cancelBubble+"]");
log("_ e.defaultPrevented=["+e.defaultPrevented+"]");
log(consumed_by);
if( log_this) log("%c"+caller+" %c "+consumed_by, lbL+lf8, lbR+lf9);
}}}*/

if( log_this) t_fly.t_log_event_status(caller+" "+t_data.SYMBOL_RIGHT_ARROW+" "+consumed_by, consumed_by_css);
    if(consumed_by && log_this)
        t_fly.t_log_transcript_event_bot("<span class='big'>"+ t_data.SYMBOL_UP_ARROW +"</span>"
            +                      "<em>"+               consumed_by     +"</em>");

    /*}}}*/
    /* rewind nested collapsed logging {{{*/
    t_log.log_CLR();

    /*}}}*/
};
/*}}}*/
/* onUp {{{*/
/*… onUp_0_MULTITOUCH {{{*/
let onUp_0_MULTITOUCH = function(e)
{
    onUp_MS = new Date().getTime();
/*{{{
if( prop.get(t_data.PIN_SEEKSPOT) ) log("%c DOWN-UP %c"+((onUp_MS - onDown_MS) / 1000), lbL+lf4,lbR+lf4);
}}}*/
/*{{{
    let    consumed_by = ((onDown_TOUCHES > 1) ? "MULTI-TOUCH x"+onDown_TOUCHES : "");
    return consumed_by;
}}}*/
};
/*}}}*/
/*… onUp_1_TOOL_GRID_TIER_CB {{{*/
let onUp_1_TOOL_GRID_TIER_CB = function(e, clicked, dblclicked)
{
/* [clicked] .. [!EDIT_OR_STAGE] .. [SMALL MOVE] {{{*/
let   caller = "onUp_1_TOOL_GRID_TIER_CB(clicked "+clicked+")";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) t_fly.t_log_event_status(caller, lf1);

    if(!clicked                          ) return "";

    if( prop.get( t_data.EDIT_OR_STAGE ) ) return "";

    let is_on_grid = call_t_grid_IS_ON_GRID(caller);

    let consumed_by = "";

    if(!is_on_grid && has_moved)
    {
        if(check_big_moved(caller) ) {
if( log_this) logBIG("BIG MOVE .. CLICK DENY", lf2);
            return consumed_by;
        }
        else {
if( log_this) logBIG("SMALL MOVE .. CLICK ALLOW", lf7);
        }
    }

/*}}}*/
    /* MOVING TOOLS ON GRID .. f(hotring) {{{*/
    if(!consumed_by && dblclicked && !is_on_grid)
    {
        if(onWork_EL == hotring) {
            consumed_by     = "MOVING TOOLS ON GRID";

            t_move_TOOLS_ON_GRID("DOUBLE CLICK");
        }
    }
    /*}}}*/
    /*  TOOLS ARE ON GRID {{{*/
    if(   !consumed_by
       &&  is_on_grid
      ) {
        /* MOVING TOOLS OFF GRID .. f(hotring || dimm_mask) {{{*/
        if((onWork_EL == hotring) || dimm_mask_is(onWork_EL))
        {
            if( !was_a_too_early_last_result() ) {
                consumed_by = " MOVING TOOLS OFF GRID";

                t_move_TOOLS_OFF_GRID("CLICK");

                t_sync_layout(caller);
            }
            else {
if(log_this) logBIG("TOO EARLY: NOT MOVING TOOLS OFF GRID");

            }
        }
        /*}}}*/
        /* ELSE: SELECT TOOLS ON GRID {{{*/
        else {
            consumed_by = " SELECT TOOLS ON GRID ";

            t_grid.t_grid_TOOLS_SELECT(e);
        }
        /*}}}*/
    }
    /*}}}*/
    /* NOT ON GRID .. ACTIVATE TIER0 TOOLS {{{*/
    if(   !consumed_by
       && !is_on_grid
       && (onWork_EL == hotring)
      ) {
        prop.set(t_data.TOOLS_TIER2, false);
        if( t_activate_tools_tier1("CLICK") ) {
            consumed_by = "HOTSPOT CLICKED .. SELECT "+ t_data.TOOLS_TIER2;
        }
        else {
            consumed_by = "HOTSPOT CLICKED .. NO TOOL PANEL SELECTED";
            if( t_gutter.is_hotspot_IN(hotspot, "HOTSPOT CLICKED") ) {
                t_tools_show  ();
            }
            else {
                t_tools_hide();
            }
        }
    }
    /*}}}*/
if(log_this) log(consumed_by);
    return consumed_by;
};
/*}}}*/
/*… onUp_2_SLOT_CONTAINER_CB {{{*/
let onUp_2_SLOT_CONTAINER_CB = function(e, clicked)
{
/* log {{{*/
let   caller = "onUp_2_SLOT_CONTAINER_CB";
if(!is_a_DOM_LOAD_featured_function(caller)) return "";
let log_this = !onDown_SHIFT && (LOG_MAP.EV3_UP || LOG_MAP.T1_DOM_LOAD);

if( log_this) caller += "(clicked "+clicked+")";
if( log_this) t_fly.t_log_event_status(caller, lf2);
/*}}}*/
    /* ASSERT FEATURE {{{*/
    if(                                     !onWork_EL                        ) return "";
    if(   t_util.is_el_or_child_of_parent_el(onWork_EL, t_fly.t_fly_div_get())) return "";
    if(                                     (onWork_EL.tagName == "A"         )
       && t_util.is_el_or_child_of_parent_el(onWork_EL, dimm_mask)            ) return "";
    if(!clicked                                                               ) return "";
    if(!div_slot_containers_displayed()                                       ) return "";
    if( has_moved                                                             ) return "";
    if( was_a_too_early_last_result()                                         ) {
if(log_this) logBIG("TOO EARLY: FOR "+ caller);                                 return "";
    }

    /*}}}*/
    /* PARSE TARGET ELEMENT AND ITS CONTAINER {{{*/
    let clicked_COPY_TO_CLIPBOARD = has_el_class(                 onWork_EL, CSS_BUTTON_COPY   ) ? "COPY TO CLIPBOARD" : "";
    let clicked_MAGNIFY_START     = has_el_class(                 onWork_EL, CSS_BUTTON_MAGNIFY) ?           "MAGNIFY" : "";
    let clicked_PREV              = has_el_class(                 onWork_EL, CSS_BUTTON_PREV   ) ?      "MAGNIFY PREV" : "";
    let clicked_NEXT              = has_el_class(                 onWork_EL, CSS_BUTTON_NEXT   ) ?      "MAGNIFY NEXT" : "";
    let clicked_MONO              = has_el_class(                 onWork_EL, CSS_BUTTON_MONO   ) ?         "MONOSPACE" : "";
    let clicked_MAGNIFY_STOP      = (fullscreen_slot_container == onWork_EL                    ) ?      "MAGNIFY_STOP" : "";


    let clicked_target
        = clicked_COPY_TO_CLIPBOARD ? onWork_EL.parentElement
        : clicked_MAGNIFY_START     ? onWork_EL
        : clicked_PREV              ? onWork_EL
        : clicked_NEXT              ? onWork_EL
        : clicked_MONO              ? onWork_EL
        : clicked_MAGNIFY_STOP      ? null
        :                             onWork_EL
    ;

    let consumed_by               =  "ON "+ t_util.get_id_or_tag( onWork_EL );

if(log_this) {
    log_key_val(   caller
               , { consumed_by
                 , clicked_COPY_TO_CLIPBOARD
                 , clicked_MAGNIFY_START
                 , clicked_PREV
                 , clicked_NEXT
                 , clicked_MONO
                 , clicked_MAGNIFY_STOP
                 , clicked_target            : get_n_lbl(clicked_target)
                 }
               , lf2);
}
    /*}}}*/
    /* STORE [on_grid_top] FOR SCROLL TRACKING {{{*/
    if(clicked_MAGNIFY_START) {
        if(!div_slot_containers.children[0].on_grid_top ) {
/*{{{
console.dir(div_slot_containers);
}}}*/
            for(let i=0; i < div_slot_containers.children.length; ++i)
            {
                let child = div_slot_containers.children[i];
                child.on_grid_top = parseInt(window.scrollY + child.getBoundingClientRect().top);
/*{{{
logXXX("#"+i+" "+child.className+" .. on_grid_top=["+child.on_grid_top+"]");
}}}*/
            }
        }
    }
    /*}}}*/
    /* MAGNIFY_START {{{*/
    if     (clicked_MAGNIFY_START                      ) { consumed_by = clicked_MAGNIFY_START    +" .. "+consumed_by; t_slot_container_set_fullscreen( clicked_target ); }
    else if(clicked_PREV                               ) { consumed_by = clicked_PREV             +" .. "+consumed_by; t_slot_container_set_fullscreen( clicked_target ); }
    else if(clicked_NEXT                               ) { consumed_by = clicked_NEXT             +" .. "+consumed_by; t_slot_container_set_fullscreen( clicked_target ); }
    else if(clicked_MONO                               ) { consumed_by = clicked_MONO             +" .. "+consumed_by; t_slot_container_set_fullscreen( clicked_target ); }
    else if(clicked_MAGNIFY_STOP                       ) { consumed_by = clicked_MAGNIFY_STOP     +" .. "+consumed_by; t_slot_container_set_fullscreen( clicked_target ); }
    else if(clicked_COPY_TO_CLIPBOARD && clicked_target) { consumed_by = clicked_COPY_TO_CLIPBOARD+" .. "+consumed_by;
        let container_to_copy_from
            = (clicked_target.id == "button_COPY_ALL_parent_div")
            ?  clicked_target.parentElement
            :  clicked_target
        ;
/*{{{
console.dir(container_to_copy_from)
logBIG("textContent")
log(container_to_copy_from.textContent)
logBIG("innerHTML")
log(container_to_copy_from.innerHTML)
}}}*/
        t_slot_containers_copy_to_clipboard_outerHTML( container_to_copy_from );

        /* highlight copied container */
        for(let i=0; i < div_slot_containers.children.length; ++i)
            del_el_class(div_slot_containers.children[i], CSS_FOCUSSED);
        add_el_class(        clicked_target             , CSS_FOCUSSED);
    }
    /*}}}*/
    /* SCROLL TO [clicked_target] .. [dimm_stop] {{{*/
    else if( clicked_target )
    {
        consumed_by += " .. SCROLL TO "+t_onclick_target_handle_scroll_to_slot_num(clicked_target, caller);

        dimm_stop( caller );
    }
    /*}}}*/
    /* SCROLL BACK TO DIM START POINT .. [dimm_stop] {{{*/
    else {
        consumed_by += " .. SCROLL BACK TO DIM START POINT";

        dom_scroll.t_window_scrollTo(0, onDown_SCROLL_XY.y);

        dimm_stop( caller );
    }
    /*}}}*/
if(log_this)  log("%c"+caller+":%c"+LF+consumed_by, lf2, lbF+lf2);
    return consumed_by;
};
/*}}}*/
/*… onUp_3_STICKY_TOOL_CB {{{*/
let onUp_3_STICKY_TOOL_CB = function(e,clicked,dblclicked)
{
/*{{{*/
let   caller = "onUp_3_STICKY_TOOL_CB";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) t_fly.t_log_event_status(caller, lf3);
/*}}}*/
    /* EDITING STICKY {{{*/
    let consumed_by = "";
    let sticky      = t_sticky.t_sticky_get_onWork_STICKY();
    if( sticky && has_el_class(sticky, t_data.CSS_HAS_FOCUS))
    {
if( log_this) log("%c sticky.touched=["+sticky.touched+"]", lf3);

        if( t_sticky.t_sticky_is_EDITING( sticky ) )
            consumed_by = "IGNORING EDITED STICKY "+sticky.id;

        else if( t_sticky.t_sticky_EDIT_DONE() )
            consumed_by = "LEAVING  EDITED STICKY "+sticky.id;

if( log_this) log(caller+"%c consumed_by=["+consumed_by+"]", lbH+lf3);
        return consumed_by;
    }
    let sticky_is_EDITING   = t_sticky.t_sticky_is_EDITING( sticky );
    /*}}}*/
    /*{{{*/
    let onDown_sticky       = sticky && (onDown_EL == sticky) ;
    let seeker_PU_is_active = t_seek.t_seeker_PU_is_active();

if( log_this) {
    let onSeekXYL = t_seek.t_seeker_get_onSeekXYL();
    log_key_val(caller
                , {   seeker_PU_is_active
                    , onDown_sticky
                    , onSeekXYL
                    , sticky_is_EDITING
                    , sticky                : "["+ get_n_lbl( sticky       )       +"]"
                    , onDown_EL             : "["+ get_n_lbl( onDown_EL    )       +"]"
                    , onWork_EL             : "["+ get_n_lbl( onWork_EL    )       +"]"
                    , onWork_PANEL          : "["+ get_n_lbl( onWork_PANEL )       +"]"
                    , onWork_SEEK_TARGET    : "["+ t_seek.t_seeker_get_TOOL_label()+"]"
                    , clicked
                    , dblclicked
                    , has_moved
                    , onDown_SEL_TEXT       : "["+ onDown_SEL_TEXT                 +"]"
                }, lf3);
}
    let rejected_by = "";
/*}}}*/
    /* STICKY CLICK .. TRANSITION {{{*/
    if(!consumed_by && onDown_sticky)
    {
        rejected_by
            = !clicked                          ?     "NO CLICK"
            :  dblclicked                       ? "DOUBLE CLICK"
            :  has_moved                        ? "HAS MOVED ["+has_moved+"]"
            :  prop.get(t_data.EDIT_OR_STAGE)   ? "HIDE EDIT MODE"
            :                                     "NO [sticky] TRANSITION";

        if(    clicked
           && !dblclicked
           && !has_moved
           && !prop.get(t_data.EDIT_OR_STAGE)
          )
            consumed_by = t_sticky.t_sticky_CLICK_CB(sticky);

    }
    /*}}}*/
/*{{{*/
if(log_this) {
    if     (consumed_by) log("%c"+caller+":%c consumed_by %c STICKY "+consumed_by, lbb+lbH+lf3, lbL, lbb+lbH+lf4);
    else if(rejected_by) log("%c"+caller+":%c rejected_by %c PAGE "  +rejected_by, lbb+lbH+lf3, lbL, lbb+lbH+lf8);
    else                 log("%c"+caller+":%c NOT CONSUMED"                      , lbb+lbH+lf3,      lbb+lbH+lf8);
}
/*}}}*/
    return consumed_by;
};
/*}}}*/
/*… onUp_3_SEEKER_TOOL_CB {{{*/
let onUp_3_SEEKER_TOOL_CB = function(e,clicked,dblclicked)
{
/*{{{*/
let   caller = "onUp_3_SEEKER_TOOL_CB";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) t_fly.t_log_event_status(caller, lf3);
/*}}}*/

    let consumed_by = "";

    if( clicked ) consumed_by = t_seek.t_seeker_onClick();

if(log_this && consumed_by) log("%c"+caller+":%c consumed_by %c SEEKER: "+consumed_by, lbb+lbH+lf3, lbL, lbb+lbH+lf4);

    return consumed_by;
};
/*}}}*/
/*… onUp_3_DOC_TOOL_CB {{{*/
let onUp_3_DOC_TOOL_CB = function(e,clicked,dblclicked)
{
    /* clicked dblclicked consumed TOOL {{{*/
let   caller = "onUp_3_DOC_TOOL_CB";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) log("%c"+caller, lf3);

    if( !onWork_EL                  ) return "";
    if( dblclicked                  ) return "";
    if( t_event_has_been_consumed() ) return "";

    let consumed_by = "";
    /*}}}*/
    /* [clicked doc_div] .. (PLAYGROUND EMBEDDED TOOL) {{{*/
    if( clicked )
    {
        let doc_div = onWork_EL.id.startsWith("doc_evt_div") ? t_fly.t_doc_evt_div_get()
            :         onWork_EL.id.startsWith("doc_log_div") ? t_fly.t_doc_log_div_get()
            :         null;
        if(doc_div) {
            if(has_el_class(onWork_EL, CSS_CLOSEPIN)) {
                consumed_by     = "EMBEDDED TOOL: CLOSING "+doc_div.id;
                t_fly.t_doc_div_clear(doc_div.id);
            }
            else {
                consumed_by     = "EMBEDDED TOOL: CLICK IGNORED";
            }
        }
        else {
if(log_this) log("NO DOC EMBEDDED TOOL");
        }
    }
    /*}}}*/
    /* [hotspot] [NOT clicked] + [NOT has_moved] {{{*/
/*{{{
    if(      !clicked
          && !has_moved
          && (onWork_PANEL == hotspot)
      ) {
        consumed_by = "hotspot LONG CLICK: ... DO SOMETHING";

    }
}}}*/
    /*}}}*/
if(log_this) log(consumed_by);
    return consumed_by;
};
/*}}}*/
/*… onUp_4_DOC_TOUCH_CB {{{*/
let onUp_4_DOC_TOUCH_CB = function(e,clicked,dblclicked)
{
/*{{{*/
let   caller = "onUp_4_DOC_TOUCH_CB";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) log("%c"+caller, lf4);
/*}}}*/
    /* rejected_by .. f(!clicked OR dblclicked OR t_event_has_been_consumed) {{{*/
    let is_a_tool               = t_is_a_tool_el(onWork_EL, caller);
    let is_an_embedded_doc_tool = t_is_an_embedded_doc_tool(onWork_EL,log_this);

    let rejected_by
        = (!clicked                         ) ? "!clicked"
        : ( is_a_tool                       ) ? "is_a_tool"
        : ( is_an_embedded_doc_tool         ) ? "is_an_embedded_doc_tool"
        : ( prop.get( t_data.ANCHOR_FREEZE )) ? t_data.ANCHOR_FREEZE
        : ( prop.get( t_data.WORDING       )) ? t_data.WORDING
        : ( dblclicked                      ) ? "dblclicked"
        : ( t_event_has_been_consumed()     ) ? t_event_consumed_cause
        :                                        ""
    ;

    if(rejected_by) {
if( log_this) log("%c"+caller+"%c rejected_by %c"+rejected_by, lf4, lbA, lf9);
        return "";
    }
    /*}}}*/
    /* rejected_by .. f(NO el_event_handler) {{{*/
    let el_event_handler  = t_util.get_el_event_handler(onWork_EL, caller);
    rejected_by
        = (el_event_handler == null)
        ? "NO EVENT HANDLER"
        : "";
    if(rejected_by) {
if( log_this) log("%c"+caller+"%c rejected_by %c"+rejected_by, lf4, lbA, lf9);
        return "";
    }
    /*}}}*/
    /* el_event_handler .. CALLING {{{*/
if( log_this) log("...handler=["+el_event_handler.label+"]");
    let consumed_by = onUp_45_el_event_handler(e, el_event_handler);

    /*}}}*/
if( log_this) log("%c"+caller+"%c consumed_by %c"+consumed_by, lbL, lbC, lbR+lf4);
    return consumed_by;
};
/*}}}*/
/*… onUp_5_TOOL_ONCLICK {{{*/
let onUp_5_TOOL_ONCLICK = function(e,clicked,dblclicked)
{
    /* TOOL {{{*/
let   caller = "onUp_5_TOOL_ONCLICK";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) t_fly.t_log_event_status(caller+"(clicked "+clicked+")", lf5);

    let rejected_by
    = ( t_event_has_been_consumed()       ) ? t_event_consumed_cause
    : (!t_is_a_tool_el(onWork_EL, caller) ) ? "NOT A TOOL ["+get_n_lbl(onWork_EL)+"]"
    :                                          "";
if( log_this && rejected_by) log("%c"+caller+"%c rejected_by %c"+rejected_by, lf5, lbA, lf9);
    if(rejected_by) return "";
if( log_this) log("%c"+caller, lf5);

    let consumed_by = "ON TOOL .. ["+get_n_lbl(onWork_EL)+"]";
    /*}}}*/
    /* PANEL or [sticky] MOVED .. TOOLS LAYOUT STORAGE UPDATE {{{*/
    let sticky = t_sticky.t_sticky_get_onWork_STICKY();
    if(has_moved && (onWork_PANEL || (onWork_EL == sticky)))
    {
        t_save_update_post(caller);
    }
    /*}}}*/
    /* MOVE OR (slightly moved) CLICK {{{*/
    if(onWork_PANEL && clicked && has_moved)
    {
        if(check_big_moved(caller) )
        {
if(log_this) log("%c [CLICKED + BIG   MOVE] .. CANCEL CLICK ON ["+get_n_lbl(onWork_PANEL)+"]", lf5);
            clicked = false;
        }
        else {
if(log_this) log("%c [CLICKED + SMALL MOVE] .. CANCEL MOVE  ON ["+get_n_lbl(onWork_PANEL)+"]", lf6);
            t_clr_has_moved(caller);
        }
    }
    /*}}}*/
    /* {{{*/
/*
TODO: already called at this point by move handler
    if(clicked && !has_moved && onWork_PANEL)
    {
        t_tools_set_panel_xy(onWork_PANEL, onDown_PANEL_XY.x, onDown_PANEL_XY.y);
        t_tools_set_top_xy  (              onDown_PANEL_XY.x, onDown_PANEL_XY.y);
    }
*/
    /*}}}*/
    /* PANEL DRAGGED .. t_sync_layout {{{*/
/* NO .. onUp_9_TOOLS_LAYOUT_HANDLER should do the job with a delay
    let pinned = onWork_PANEL && onWork_PANEL.classList.contains(t_data.CSS_PINNED);
    if(!pinned)
        t_sync_layout(caller, 0);
*/
    /*}}}*/
    /* TODO - delayed hide pivspot - shown by onDown_6_TOOL_DRAG_PUSH_PIN */
    /* DBLCLICKED .. STANDBY .. FASTCLICK .. CLEAR {{{*/
/*{{{
logXXX(caller+": ......clicked=["+   clicked+"]");
logXXX(caller+": ...dblclicked=["+dblclicked+"]");
}}}*/

    if(dblclicked) {
        if(      clear_DBLCLICK_for_panel( onWork_PANEL  ) ) { consumed_by += " DBLCLICK PANEL CLEAR"; t_clear(caller);                                  }
        else if( filter_STANDBY_for_panel( onWork_PANEL  ) ) { consumed_by += " DBLCLICK STANDBY"    ; t_onClick_1_onWork_EL(0, true); }
        else if( shake_ON_DBLCLICK_for   ( onWork_PANEL  ) ) { consumed_by += " DBLCLICK TOOL PANEL" ;

            /* Toggle-EQUIP clicked panel toolpins */
            if(onWork_EL == onWork_PANEL)
            {
                if( !t_has_push_pin_on_panel( onWork_PANEL ) ) t_add_toolpins_on_panel( onWork_PANEL );
                else                                           t_del_toolpins_on_panel( onWork_PANEL );
            }
            /* Re-EQUIP on first child double click */
            else if(!t_has_push_pin_on_panel( onWork_PANEL ) )
            {
                if(onWork_EL.blur) t_blur( onWork_EL );        t_add_toolpins_on_panel( onWork_PANEL );
            }

            clicked = false;
        }
    }
    /*}}}*/
    /* CLICKED .. [hotspot] .. [t_data.EDIT_OR_STAGE] .. [dom_hide] {{{*/
    if(   (hotspot == onWork_PANEL)
       &&  prop.get( t_data.EDIT_OR_STAGE )
/*     &&  t_gutter.get_XY_URDL(h_x, h_y, "[hotspot] clicked during t_data.EDIT_OR_STAGE") */
      ) {
        if( clicked ) {
            prop.toggle( t_data.MASK_OR_HIDE );
            consumed_by += " CLICK .. NODE TO HIDE "+ (prop.get( t_data.MASK_OR_HIDE ) ? "MASKED" : "HIDDEN");
        }
        /* TODO: to make [dblclicked] work .. [clicked] should be prevented somehow */
/*{{{
        if(dblclicked) {
            consumed_by += " DBLCLICK .. NODE TO CLEAR HIDDEN NODES";
            t_hide.dom_hide1_reset();
        }
}}}*/
    }
    /*}}}*/
/*{{{
logBIG(caller+": "+consumed_by, lbb+lf7);
}}}*/
    /* CLICKED SEEK TOOL .. HIDING {{{*/
    if(clicked && is_a_seeker_target(onWork_EL)  && t_seek.t_seeker_has_TARGET())
    {
if( log_this) log("%c clicked ON %c SEEKER %c"+t_seek.t_seeker_get_TOOL_label()+"%c WHICH IS NOT A TOOL"
                  ,lbH+lf5      ,lbL+lf6  ,lbR+lf6                       ,lbH+lf5                );

        t_seek.t_seeker_PU_hide("instant");

        consumed_by = "";
    }
    /*}}}*/
    /* CLICKED .. PIVOT-MAGNIFY .. CLICK-HANDLER .. [t_onClick_1_onWork_EL] {{{*/
    else if( clicked && !has_moved) {
        if     ( sticky             == onWork_EL                 ) { consumed_by += " .. CLICK [sticky]"       ; t_onClick_1_onWork_EL(               ); }
        else if( dimm_mask          == onWork_EL                 ) { consumed_by += " .. CLICK [dimm_mask]"    ; t_onClick_1_onWork_EL(               ); }
        else if( filter_SEL_CLICK_for (onWork_EL               ) ) { consumed_by += " .. CLICK [DOC SEL CLICK]"; t_onClick_1_onWork_EL(0, false       ); }
        else if( has_el_class         (onWork_EL, CSS_PUSH_PIN ) ) { consumed_by += " .. CLICK [push_pin]"     ; t_onClick_1_onWork_EL(               ); }
        else if( has_el_class         (onWork_EL, CSS_CLOSEPIN ) ) { consumed_by += " .. CLICK [closepin]"     ; t_onClick_1_onWork_EL(               ); }
        else if( has_el_class         (onWork_EL, CSS_SCALEPIN ) ) { consumed_by += " .. CLICK [scalepin]"     ; t_onClick_1_onWork_EL(               ); }
        else if( has_el_class         (onWork_EL, CSS_CLEARPIN ) ) { consumed_by += " .. CLICK [clearpin]"     ; t_onClick_1_onWork_EL(               ); }
        else if( has_onclick_for      (onWork_EL               ) ) { consumed_by += " .. CLICK [onWork_EL]"    ; t_onClick_1_onWork_EL(               ); }
        else if( has_onclick_for      (onWork_PANEL            ) ) { consumed_by += " .. CLICK [onWork_PANEL]" ; t_onClick_1_onWork_EL(T_ONCLICK_DELAY); }
        else {
            let el_event_handler =  t_util.get_el_event_handler(onWork_EL, caller);
            if( el_event_handler )
                consumed_by += onUp_45_el_event_handler(e, el_event_handler);
        }
    }
    /*}}}*/
    /* [has_moved] .. (t_pat_bag9_move_pattern_from_src_to_dst_div) {{{*/
    else if(has_moved) {
        /* SUBTOOL MOVED {{{*/
        if(    mov_dst_div && mov_src_div
/*{{{
           && (mov_dst_div != mov_src_div)
}}}*/
          ) {
            if(mov_dst_div != mov_src_div)
                consumed_by += t_pat_bag9_move_pattern_from_src_to_dst_div();
            else
                consumed_by += " MOVING PATTERN IN "+get_n_lbl(mov_dst_div);
        }
        /*}}}*/
        /* TOOL PANEL MOVED {{{*/
        else if(onWork_PANEL) {
            consumed_by += " TOOL MOVED";

            /* TRANSCRIPT MOVED {{{*/
            let is_a_pinned_transcript
                =  (      (onWork_PANEL                 == transcript1)
                       || (onWork_PANEL                 == transcript2))
                && (       onWork_PANEL.classList.contains(t_data.CSS_PINNED ));

            /* save position */
            let key =      onWork_PANEL.id+"_XY";
            if( is_a_pinned_transcript )
            {
                let  xy = t_util.get_el_xy(onWork_PANEL, caller);
                t_store.t_store_set_value(key, JSON.stringify(xy));
                consumed_by += " (a pinned transcript)";
            }
            else {
                t_store.t_store_set_value(key, null);
            }
            /*}}}*/
        }
        /*}}}*/
    }
    /*}}}*/
    /* TODO - make clear what is prevented by this call... */
    if(consumed_by) t_event_add_e_consumed_by(e, consumed_by);

if( log_this) log("...return %c"+consumed_by, lbH+lf5);
    return consumed_by;
};
/*}}}*/
/*…   shake_ON_DBLCLICK_for {{{*/
let   shake_ON_DBLCLICK_for = function(el)
{
    if(     !el   ) return false;
    if(     !el.id) return false;

    return  has_el_class(el, CSS_TRANSCRIPT);

};
/*}}}*/
/*…   clear_DBLCLICK_for_panel {{{*/
let   clear_DBLCLICK_for_panel = function(panel)
{
    if(     !panel   ) return false;
    if(     !panel.id) return false;

    let is_a_pinned_transcript
        =  (      (panel == transcript1)
               || (panel == transcript2)
           ) &&   (panel.classList.contains(t_data.CSS_PINNED))
    ;

    return  is_a_pinned_transcript;
};
/*}}}*/
/*…   has_onclick_for {{{*/
let   has_onclick_for = function(el)
{
/*{{{*/
let   caller = "has_onclick_for";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

    if(!el   ) return false;
    if(!el.id) return false;

/*}}}*/

    let bag_id = t_get_bag_id(el);

    let result
        = (                         (bag_id != "") /* DELEGATED TO CONTAINER PANEL   */
           || is_a_toggle_option    ( el.id      ) /* DYNAMICALLY ADDED TOOL STICKYS */
           || get_n_lbl( prop.get_EL( el.id     )) /* DYNAMICALLY ADDED PROP TOOL    */
          );

/*{{{*/
if( log_this)
    log("%c "+caller+"("+get_n_lbl(el)+"): %c ...return "+result   +"%c el=["+get_n_lbl(el)+"]%c parent=["+get_n_lbl(t_util.get_el_parent_with_id(el))+"]%c bag=["+bag_id+"]"
        ,lbL                              ,lbR+(result ? lf5 : lf8) ,lbL                     ,lbR+lf7                                                   ,lbC+lf3             );
/*}}}*/
    return result;
};
/*}}}*/
/*…   is_a_toggle_option {{{*/
let   is_a_toggle_option = function(id)
{
/*{{{*/
let   caller = "is_a_toggle_option";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

/*{{{
if( log_this) prop.log_MAP(caller);
}}}*/
/*}}}*/
    if(!id) return false;
    let result
        =  (id ==  t_data.DOM_FREEZE      )
        || (id ==  t_data.USER_LANG       )
        || (id ==  t_data.ANCHOR_FREEZE   )
        || (id ==  t_data.CONTAINERS_HI   )
        || (id ==  t_data.SCROLL_SMOOTH   )
        || (id ==  t_data.OVERFLOW_VISI   )
        || (id ==  t_data.DETAILS_RADIO   )

        || (id ==  t_data.SHOW_SEEKZONE   )
        || (id ==  t_data.PIN_SEEKSPOT    )
        || (id ==  t_data.LOG_SEEKSPOT    )
        || (id ==  t_data.REMOVE_ADS      )
        || (id ==  t_data.SPLIT_WOT       )
        || (id ==  t_data.LINES_WOT       )

        || (id ==  t_data.SITE_OR_PAGE    )
        || (id ==  t_data.MASK_OR_HIDE    )
        || (id ==  t_data.EDIT_OR_STAGE   )
        || (id ==  t_data.DOM_HIDE1_RESET )
        || (id ==  t_data.DOM_HIDE1_UNDO  )
        || (id ==  t_data.DENY_OR_ALLOW   )

        || (id ==  t_data.THEME_DARK      )
        || (id ==  t_data.TOOLS_TRAP      )
        || (id ==  t_data.TOOLS_TIER2     )
        || (id ==  t_data.TOOLS_SCROLL    )

        || (id ==  t_data.WORDING         )
        || (id ==  t_data.WORDS_EXACT     )
        || (id ==  t_data.WORDS_SEGMENT   )
        || (id ==  t_data.WORDS_HEAD_TAIL )
        || (id ==  t_data.WORDS_OPCYCLE   )

        || id.startsWith( t_data.SQUEEZE_CYCLE )

        || get_words_drop_affix_array().includes(id)
    ;

/*{{{*/
if( log_this)
    log("%c "+caller+"("+id+"): %c ...return "+result
        ,lbL                   ,lbR+(result ? lf5 : lf8));
/*}}}*/
    return result;
};
/*}}}*/
/*…   filter_STANDBY_for_panel {{{*/
let   filter_STANDBY_for_panel = function(panel)
{
    if(    !panel   ) return false;
    if(    !panel.id) return false;
    return (onStandby_PANEL != null )
        && (onStandby_PANEL == panel)
    ;
};
/*}}}*/
/*…   filter_SEL_CLICK_for {{{*/
let   filter_SEL_CLICK_for = function(el)
{
    if(    !el   ) return false;
    if(    !el.id) return false;
    return  el.id.startsWith("thumb_p_")
        ||  el.id.startsWith("thumb_s_")
    ;
};
/*}}}*/
/*… onUp_45_el_event_handler {{{*/
let onUp_45_el_event_handler = function(e, el_event_handler)
{
/*{{{*/
let   caller = "onUp_45_el_event_handler";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) log("%c"+caller, lbb+lf7);
/*}}}*/
    let consumed_by = "";
    /* MOBILE el_event_handler .. CALLING {{{*/

if( log_this) log("behavior_TOUCH_ELSE_DESKTOP=["+behavior_TOUCH_ELSE_DESKTOP+"]");
if( log_this) log("t_preventDefault_caller=["+t_preventDefault_caller+"]");

    if(behavior_TOUCH_ELSE_DESKTOP && t_preventDefault_caller)
    {
        consumed_by = "MOBILE  CALLING EVENT HANDLER ["+ get_n_lbl(onWork_EL) +"] ["+el_event_handler.label+"] HANDLER";

        if(t_preventDefault_caller) t_restoreDefault("ON TOUCH UP");

        el_event_handler.handler(e);
        t_cache_armed_by( consumed_by );
    }
    /*}}}*/
    /* DESKTOP DOC EVENT HANDLER .. BUBBLING {{{*/
    else {
        consumed_by = "BUBBLING TO DOC EVENT HANDLER: ["+ el_event_handler.label +"]";
/*{{{
t_fly.t_fly_tooltip(consumed_by);
t_fly.t_log_event_status(caller+" "+consumed_by, lf5);
}}}*/
    }
    /*}}}*/
if( log_this) log("%c"+caller+"%c consumed_by %c"+consumed_by, lbL, lbC, lbR+lf3);
    return consumed_by;
};
/*}}}*/

/*… onUp_7_DOC_SENTENCES {{{*/
let onUp_7_DOC_SENTENCES = function(e, clicked, dblclicked)
{
/*{{{*/
let   caller = "onUp_7_DOC_SENTENCES";
let log_this = !onDown_SHIFT && (LOG_MAP.EV3_UP || LOG_MAP.T1_DOM_LOAD);

if( log_this) t_fly.t_log_event_status(caller, lf7);
/*}}}*/
    /* !t_is_a_tool_el .. !has_moved .. !t_seek.t_seeker_PU_is_active {{{*/
if(!is_a_DOM_LOAD_featured_function(caller)) return "";

    let rejected_by
        = (!clicked                           ) ? "!clicked"
        : ( has_moved                         ) ? has_moved
        : (onDown_TOUCHES > 1                 ) ? ""
        : ( t_event_has_been_consumed()       ) ? t_event_consumed_cause
        : ( t_is_a_tool_el(onWork_EL, caller) ) ? "[onWork_EL] IS A TOOL"
        : ( t_seek.t_seeker_PU_is_active()    ) ? "[seeker_PU] IS ACTIVE"
        :                                          "";
if( log_this && rejected_by) log("%c"+caller+"%c rejected_by %c"+rejected_by, lf7, lbA, lf9);
    if(rejected_by) return "";

if( log_this) log("%c"+caller+"%c clicked "+clicked  +"%c dblclicked "+dblclicked+"%c was_a_click "+was_a_click()+"%c onDown_TOUCHES=["+onDown_TOUCHES+"]"
                   ,lf7        ,lbL+lfX[clicked ? 5:8] ,lbR+lfX[dblclicked ? 5:8]  ,lbH+lfX[dblclicked ? 5:8]       ,lbH+lf8                               );

    let consumed_by = "";
    /*}}}*/
    /* [container   clicked] .. RESTORING CONTAINER SENTENCES .. f(on a sentence container) {{{*/
    let { container , cells } = dom_sentence.t_SENTENCE_GET_EL_CONTAINER( onDown_EL );
    if(   container )
    {
        /* RESTORING MULTIPLE CONTAINERS {{{*/
        if( cells )
        {
            for(let i=0; i < cells.length; ++i)
                consumed_by
                    =     t_sentence.t_SENTENCE_RESTORE_EL(cells[i], e)
                    ||    consumed_by
            ;
        }

        /*}}}*/
        /* RESTORING SINGLE CONTAINER {{{*/
        if(!consumed_by)
        {
            if(!t_util.is_el_child_of_id(onWork_EL, "log_popup_div") )
            {

                consumed_by = t_sentence.t_SENTENCE_RESTORE_EL(container, e);
            }
            else {
                if( t_util.is_el_child_of_class(onWork_EL, "xpath") )
                {
                    consumed_by = "CLOSING LOG POPUP";

                    t_popup.log_popup_hide();
                }
                else {
                    consumed_by = "RESTORING ALL CONTAINERS SENTENCES";

                    t_sentence.t_SENTENCE_RESTORE_ALL( e );
                }
            }
        }
        /*}}}*/
        drag_cursor.set_mouseUP_display_state(false);
    }
    /*}}}*/
    if( consumed_by )
        t_event_set_e_consumed_by(e, consumed_by);

if(log_this && consumed_by) log("%c"+consumed_by, lbb+lbH+lf7);
    return consumed_by;
};
/*}}}*/
/*… onUp_7_DOC_WORDING {{{*/
let onUp_7_DOC_WORDING = function(e, clicked, dblclicked)
{
    /* !t_is_a_tool_el .. !has_moved .. !t_seek.t_seeker_PU_is_active {{{*/
let   caller = "onUp_7_DOC_WORDING";
if(!is_a_DOM_LOAD_featured_function(caller)) return "";
let log_this = !onDown_SHIFT && (LOG_MAP.EV3_UP || LOG_MAP.T1_DOM_LOAD);

    let rejected_by
        = (!clicked                           ) ? "!clicked"
        : ( has_moved                         ) ? has_moved
        : (onDown_TOUCHES > 1                 ) ? ""
        : ( t_event_has_been_consumed()       ) ? t_event_consumed_cause
        : ( t_is_a_tool_el(onWork_EL, caller) ) ? "[onWork_EL] IS A TOOL"
        : ( t_seek.t_seeker_PU_is_active()    ) ? "[seeker_PU] IS ACTIVE"
        :                                          "";
if( log_this && rejected_by) log("%c"+caller+"%c rejected_by %c"+rejected_by, lf7, lbA, lf9);
    if(rejected_by) return "";

if( log_this) log("%c"+caller+"%c clicked "+clicked  +"%c dblclicked "+dblclicked+"%c was_a_click "+was_a_click()
                  ,lf7         ,lbL+lfX[clicked ? 5:8] ,lbR+lfX[dblclicked ? 5:8] ,lbH+lfX[dblclicked ? 5:8]     );

    let consumed_by = "";
    /*}}}*/
    /* DOC [clicked   ] .. WORD SELECTION {{{*/
    if(!consumed_by && !(dblclicked || (onDown_TOUCHES > 1)))
    {
        if( was_a_misclick() )
        {
if(log_this) logBIG("WAS A MISSCLICK", lf3);

            consumed_by = "DOC MISSCLICK";

        }
        else {
            /* 1/3 - ON DOC SELECTION .. CLEAR SELECTION SLOT {{{*/
            if( t_seek.t_seeker_has_TARGET() )
            {
                let slot    = t_get_onWork_EL_slot();
                consumed_by = "DOC CLICK: CLEAR SLOT #"+slot;

                clear_clicked_slot( slot );
            }
            /*}}}*/
            /* 2/3 -!t_data.EDIT_OR_STAGE ON HOTSPOT IN GUTTER .. HIDE CONTAINER {{{ */
            if(!consumed_by && prop.get( t_data.EDIT_OR_STAGE ))
            {
                consumed_by = t_tools_hide_onDown_XY();

            }
            /*}}}*/
            /* 3/3 - ON A DOC WORD .. ADD A SELECTION {{{*/
            else if(!consumed_by && onWork_EL)
            {
                /* [SELECT WORD] .. (NO EVENT HANDLER) {{{*/
                let has_event_handler       = t_util.get_el_event_handler(onWork_EL,caller);
                let is_an_embedded_doc_tool =   t_is_an_embedded_doc_tool(onWork_EL,log_this);
                let                    cs   =            getComputedStyle(onWork_EL);
                let user_select_allowed     = (cs.userSelect != "none");

if( log_this) log_key_val(    "ON A DOC WORD"
                          , { onWork_EL
                            , has_event_handler
                            , is_an_embedded_doc_tool
                            , user_select_allowed : user_select_allowed+" .. ["+cs.userSelect+"]"
                          } , lbH+lf8
                         );

                if(user_select_allowed && (!has_event_handler || !is_an_embedded_doc_tool))
                {
                    consumed_by = "DOC CLICK .. NO HANDLER for ["+t_util.get_n_lbl(onWork_EL)+"]";

                    /* no default to prevent from */

                    onUp_7_DOC_CB_CLICK_WORD(consumed_by);
                }
                /*}}}*/
                /* [EVENT HANDLER FREEZED OR BUBBLE TO] .. OR .. [CLICK WORD] {{{*/
                else {
                    if(is_an_embedded_doc_tool)
                    {
if(log_this) log("DOC CLICK .. NOT CONSUMED .. EMBEDDED DOC TOOL "+get_id_or_tag(onWork_EL));

                        t_acceptBubble(e, caller+" EMBEDDED DOC TOOL", log_this);
                    }
                    else if(prop.get(t_data.ANCHOR_FREEZE) || prop.get(t_data.WORDING))
                    {
                        consumed_by = "DOC CLICK .. HANDLER FREEZED";

                        t_preventDefault(e, caller+" "+consumed_by);

                        onUp_7_DOC_CB_CLICK_WORD(consumed_by);
                    }
                    else {
                        /* NOTE: [anchor_freeze should have been processed by onUp_4_DOC_TOUCH_CB] */
                        consumed_by = "DOC CLICK .. NO FREEZED HANDLER .. NO EMBEDDED TOOL";

                        t_acceptBubble(e, caller+" "+consumed_by);
                    }
                }
                /*}}}*/
            }
            /*}}}*/
        }
    }
    /*}}}*/
if(log_this && consumed_by) log("%c"+consumed_by, lbb+lbH+lf7);
    return consumed_by;
};
/*}}}*/
/*… onUp_7_DOC_CB_CLICK_WORD .. t_data.WORDING {{{*/
let onUp_7_DOC_CB_CLICK_WORD = function(doc_click_context)
{
/*{{{*/
let   caller = "onUp_7_DOC_CB_CLICK_WORD";
if(!is_a_DOM_LOAD_featured_function(caller)) return;
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) caller += "("+doc_click_context+")";
/*}}}*/
    /* SEARCH DOC {{{*/
/*{{{
console.profile("call_touchedWord");
}}}*/
    call_touchedWord(onDown_XY.x, onDown_XY.y);
/*{{{
console.profileEnd();
}}}*/

    /*}}}*/
    /* GOT NO SELECTION RANGE {{{*/
    if( !t_select.get_touchedWord_range_parent() )
    {
if( log_this) log("%c "+caller+" %c NO SELECTION RANGE",lbL+lf7  ,lbR+lf2);

        return;
    }
    /*}}}*/
    /* GOT NO SELECTED SLOT {{{*/
    let  touchedWord_slot = t_select.get_touchedWord_slot();
    if( !touchedWord_slot )
    {
if( log_this) log("%c "+caller+" %c NO TOUCHED WORD SLOT",lbL+lf7  ,lbR+lf2);

        return;
    }
    /*}}}*/
/*{{{
console.log("touchedWord_slot=["+touchedWord_slot+"]")
console.dir(t_select.ccs)
}}}*/
    /* GOT NO SLOT PATTERN .. RESELECTING ALL PATTERNS {{{*/
    if( !t_select.ccs[touchedWord_slot].pattern )
    {
if( log_this) log("%c "+caller+" %c NO TOUCHED WORD PATTERN: RESELECTING",lbL+lf7  ,lbR+lf2);

        t_pat_bag3_reselect_all();
/*{{{
logXXX("%c "+caller+" %c NO TOUCHED WORD PATTERN: NOT RESELECTING", lbL+lf7, lbR+lf2);
}}}*/
        return;
    }
    /*}}}*/
if( log_this) log("%c"+caller+" %c touchedWord_slot %c "+touchedWord_slot, lbL+lf7, lbC, lbR+lfX[touchedWord_slot]);
    /* SYNC CONTAINER AND BAGS {{{*/
/*{{{
    t_set_touchedWord_startContainer();
}}}*/

    t_select.t_onPatternUpdate("DOCUMENT <em>"+ doc_click_context +"</em>", caller);
    /*}}}*/
};
/*}}}*/

/*… onUp_8_ON_EVENT_CONSUMED {{{*/
let onUp_8_ON_EVENT_CONSUMED = function(e)
{
let   caller = "onUp_8_ON_EVENT_CONSUMED";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) log("%c"+caller +" "+t_event_consumed_cause, lf8);

    return t_event_has_been_consumed();
};
/*}}}*/
/*… onUp_9_ON_MOUSEUP_DONE {{{*/
/*{{{*/
const   TOOLS_LAYOUT_ON_MOUSEUP_HANDLER_DELAY = 500;

let   t_tools_layout_on_mouseup_timer;
/*}}}*/
let onUp_9_ON_MOUSEUP_DONE = function(e)
{
/*{{{*/
let   caller = "onUp_9_ON_MOUSEUP_DONE";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) t_fly.t_log_event_status(caller, lf9);
/*}}}*/
    t_check_onModalMS(caller);

    /* HIDE TRANSIENT TOOLS .. [hotspot] [pivspot] BAGS {{{*/
    add_el_class(pivspot, t_data.CSS_HIDDEN);

    move_cooldown_clear_pending();

    /* EDITING DONE */
    if(    has_moved && (onWork_PANEL == hotspot)
       &&  prop.get( t_data.EDIT_OR_STAGE )
       && !t_gutter.get_XY_URDL(h_x, h_y, "EDITING DONE .. dragging [hotspot] back IN-WINDOW")
      ) {
        dom_EDIT_drag_hotspot_off_gutter(h_x, h_y);
    }

    /* MOVING [mov_div] DONE */
    if( pat_bag9_grab_item_mov_div_is_showing() )
        pat_bag9_grab_item_mov_div_drop();

    /*}}}*/
    /* SEEKER {{{*/
    get_onMoveDXY(e, caller);
    t_seek.t_seeker_onUp8_ON_MOUSEUP_DONE(e);

    if(prop.get(t_data.PIN_SEEKSPOT) && prop.get(t_data.FLOATLOG)) t_fly.t_event_LOG_TOOLTIP("MOUSE UP");

    /*}}}*/
    /* DONE HIDING OVERFLOW .. f(t_touching_a_scrollable_panel) {{{*/
    t_set_body_style_overflow_hidden(false);

    /*}}}*/
    /* [sticky] {{{*/
    let sticky = t_sticky.t_sticky_get_onWork_STICKY();
    if( sticky )
    {
        if( has_el_class(sticky, t_data.CSS_PRESSED))
            del_el_class(sticky, t_data.CSS_PRESSED);

/*{{{
        if(onWork_EL == sticky)
            t_sticky.t_sticky_MAGNET_NOW();
}}}*/

/*{{{*/
if(log_this) {
    log_key_val(   caller
               , { was_a_misclick : was_a_misclick()
                 , was_a_click    : was_a_click   ()
                 , was_a_dblclick : was_a_dblclick()
                 ,      has_moved
                 ,       CONSUMED : t_event_consumed_cause
                 }, lf9);
}
/*}}}*/
    }
    /*}}}*/
    /* RESTORE MOVE-DONE MAGNIFIED STATE {{{*/
    if(onWork_PANEL && onWork_PANEL_was_magnified_onMove)
    {
/*{{{
        t_layout_panel_magnified(onWork_PANEL, true);
}}}*/
        onWork_PANEL_was_magnified_onMove = false;
        del_el_class(onWork_PANEL, "dragged");
    }
    /*}}}*/
    /* PINNED PANELS CURRENTLY VISIBLE .. notify interested modules {{{*/
    cache_PINNED_panels(); /* after each MOUSEUP */

    /*}}}*/
    /* STICKY SCROLLING MSG CSS {{{*/
    if(sticky && has_el_class(sticky, t_data.CSS_SCROLLING))
    {
if( log_this) log("%c AFTER SCROLLING STICKY "+sticky.id+" %c REMOVING STICKY SCROLL CSS", lbb+lbL+lf9, lbb+lbR+lf5);

        del_el_class(sticky, t_data.CSS_SCROLLING);
    }
    /*}}}*/
    /* STICKY PASTE TARGET INDICATORS {{{*/
    if(sticky && has_el_class(sticky, t_data.CSS_HAS_FOCUS))
    {
if( log_this) log("%c WHILE EDITING STICKY "+sticky.id+" %c IGNORING STICKY PASTE TARGET INDICATORS", lbb+lbL+lf9, lbb+lbR+lf5);

    }
    else {
        if( t_get_current_sel_text() )
        {
if( log_this) log( "SHOWING STICKY PASTE TARGET INDICATORS");
/*
let sticky_in_viewport_array = t_sticky_get_sticky_in_viewport_array; .. TODO
*/
            t_sticky.t_sticky_set_SEL_PASTE_TARGET_STATE(true);

            t_sticky.t_sticky_SET_DIMMED(false, "SHOWING PASTE TARGET INDICATORS");
        }
        else {
            let some_paste_indicator_changed = t_sticky.t_sticky_set_SEL_PASTE_TARGET_STATE(false);

if( log_this && some_paste_indicator_changed) log("%c NO CURRENT SELECTION %c HIDING STICKY PASTE TARGET INDICATORS", lbb+lbL+lf9, lbb+lbR+lf6);
        }
    }
    /*}}}*/
    /* FOCUS IMPORT CLIPBOARD {{{*/
    let import_clipboard = t_share.t_share_get_import_clipboard();
    if( import_clipboard && (import_clipboard.parentElement != null))
    {
if(log_this) log("%c SETTING FOCUS ON ["+import_clipboard.id+"]", lbb+lbH+lf9);

        let focus_in_msg = "PASTE EXPORTED MAIL MESSAGE HERE";
        t_focus_clipboard_target(import_clipboard, focus_in_msg, caller);
    }
    /*}}}*/
    /* MOVED OPEN-OR-CLOSE-PANNEL LAYOUT {{{*/
    if(!onWork_MOVABLE_CHILD && onWork_PANEL)
    {
        if(has_moved || t_is_panel_magnified( onWork_PANEL ))
        {
            if( has_el_class(pat_bag, CSS_OPEN_BAG)) t_pat_bag_open_or_close_layout();
            else                                     t_view.t_view7_clr_panel_capped_from_xy(pat_bag);
        }
    }
    /*}}}*/
    /* [sticky] moved dimmed {{{*/
    t_sticky.t_sticky_onUp(onWork_EL);

    /*}}}*/
    /* POST EVENT DONE HANDLER {{{*/
    if(has_moved || call_t_grid_IS_ON_GRID(caller) || cached_user_options_map.length) {
        t_tools_layout_on_mouseup_timer = setTimeout(onUp_9_TOOLS_LAYOUT_HANDLER, TOOLS_LAYOUT_ON_MOUSEUP_HANDLER_DELAY);
    }
    else {
        clr_onWork_EL(caller);
    }
    if( t_preventDefault_caller ) t_restoreDefault("ON UP DONE");

    onWork_MOVABLE_CHILD = null;
    /*}}}*/
    /* SENTENCE CONTAINER ➔ REMOVE FONT-SIZE WHEEL LISTENER {{{*/
    if( t_sentence.t_SENTENCE_GET_SENTENCE_CONTAINERS() )
    {
        t_CURSOR_del_MOVE_LISTENER(caller);
    }
    /*}}}*/
/*{{{
t_fly.t_fly_tooltip_add(caller) .. TODO PIVOT
}}}*/
    clr_click_last_result();
    dom_scroll.set_onLong_press_scroll_freezed( false );
};
/*}}}*/
/*… onUp_9_TOOLS_LAYOUT_HANDLER {{{*/
let onUp_9_TOOLS_LAYOUT_HANDLER = function()
{
/*{{{*/
let caller   = "onUp_9_TOOLS_LAYOUT_HANDLER";
let log_this = !onDown_SHIFT && (LOG_MAP.EV0_LISTEN || LOG_MAP.EV3_UP);

    if( call_t_grid_IS_ON_GRID(caller)      ) { clr_onWork_EL(caller); return; }
    if( has_el_class(pat_bag, CSS_OPEN_BAG) ) { clr_onWork_EL(caller); return; }
/*}}}*/
/*{{{
.. TODO: see onMove_2_STICKY_TOOL_MOVE to create a generic function for detecting viewport nearing
    let xy = t_util.get_el_xy(onWork_PANEL, caller);
t_fly.t_fly_tooltip_add(caller+": "+get_n_lbl(onWork_PANEL)+" NEAR VIEWPORT [TOP LEFT  .. "+xy.x+" "+xy.y+"]"+ t_view.t_view2_is_xy_near_viewport(xy.x, xy.y)) .. ODO PIVOT

    xy.x += onWork_PANEL.offsetWidth;
    xy.y += onWork_PANEL.offsetHeight;
t_fly.t_fly_tooltip_add(caller+": "+get_n_lbl(onWork_PANEL)+" NEAR VIEWPORT [BOT RIGHT .. "+xy.x+" "+xy.y+"]"+ t_view.t_view2_is_xy_near_viewport(xy.x, xy.y)) .. ODO PIVOT

}}}*/
    /* TOOL PANELS LAYOUT {{{*/
    if( t_cache_armed( caller) ) {
        t_cache_sync("Tools layout adjusted");
/*{{{
t_fly.t_fly_tooltip_add( "Tools layout adjusted") .. TODO PIVOT
}}}*/
    }
    t_set_onWork_EL(null, caller);
    t_seek.t_seeker_set_TOOL(onWork_EL);
if( log_this) t_fly.t_log_event_status(caller, lbb+lf9);

/*{{{
    t_raise_pivot_PANEL(caller); .. TODO PIVOT
    t_toggle_pivot_PANEL_magnified( prop.get( t_data.PIVOT_MAGNIFIED ) ); .. TODO PIVOT
}}}*/

    /*}}}*/
    /* SELECT {{{*/
    clr_SELECTION_PROGRESS("BY LAYOUT HANDLER", log_this);

    /*}}}*/
    /* RESET ACCESSORY TOOLS {{{*/
    t_hide_hov();

    /*}}}*/
    /* TOOLS LAYOUT {{{*/
    if( is_el_off_screen(t_fly.t_fly_div_get()) ) t_fly.t_fly_onlayout();

    t_reinstate_USER_OPTIONS( caller );

    /*}}}*/
    clr_onWork_EL(caller);
};
/*}}}*/
/*}}}*/
/*➔ t_some_tool_clicked {{{*/
let t_some_tool_clicked = function()
{
    return onWork_PANEL;
};
/*}}}*/
/*➔ t_dimm_should_postpone {{{*/
let t_dimm_should_postpone = function(dimming)
{
/*{{{*/
let   caller = "t_dimm_should_postpone";
let log_this = LOG_MAP.T3_LAYOUT || LOG_MAP.T7_SHARE;

if( log_this) caller += "(dimming "+dimming+")";
/*}}}*/

    let    onWork_STICKY = t_sticky.t_sticky_get_onWork_STICKY();
    let scrolling_STICKY = t_sticky.t_sticky_get_SCROLLING_STICKY();
    let seeker_is_active = t_seek.t_seeker_is_active();
    let should_postpone
        =      dimming
        && (   onWork_EL
            || onWork_STICKY
            || scrolling_STICKY
            || seeker_is_active
           )
    ;
    let reason_why
        = !dimming          ?  " .. INSTANT UNDIMM"
        :  onWork_EL        ? (" .. DIMMING POSTPONED .. onWork_EL "       +get_n_lbl(onWork_EL       ))
        :  onWork_STICKY    ? (" .. DIMMING POSTPONED .. onWork_STICKY "   +get_n_lbl(onWork_STICKY   ))
        :  scrolling_STICKY ? (" .. DIMMING POSTPONED .. scrolling_STICKY "+get_n_lbl(scrolling_STICKY))
        :  seeker_is_active ? (" .. DIMMING POSTPONED .. SEEKER IS ACTIVE"                             )
        :                      " .. NONE .. DIMMING NOW"
    ;

/*{{{*/
if( log_this) {
    let l_x
        = scrolling_STICKY ? 7
        : should_postpone  ? 3
        :                    8;

    log_key_val(caller+" .. return "+!!should_postpone+" .. "+reason_why
                , { dimming
                    , onWork_EL
                    , onWork_STICKY
                    , scrolling_STICKY
                    , seeker_is_active
                    , should_postpone
                    , reason_why
                }
                , lbR+lfX[l_x]
               );
}
/*}}}*/
    return (should_postpone ? reason_why : "");
};
/*}}}*/
/*}}}*/
/** LONG_PRESS {{{*/
/*{{{*/
const LONG_PRESS_ARM     = "long_press_arm";

let long_press_caller;
let long_press_timer;
let long_press_arm_timer;
let mouselong_press_consumed_by = "";
/*}}}*/
/*{{{*/
/*  add_long_press_listener .. (call burst debouncer) {{{*/
let add_long_press_listener = function(_caller="setTimeout")
{
/*{{{*/
let   caller = "add_long_press_listener";
let log_this = LOG_MAP.EV4_LONG_PRESS;

if( log_this) log("%c"+caller+" %c "+_caller, lbL+lf4, lbR+lf0);
if(LOG_MAP.EV7_DISPATCH) t_fly.t_log_event_status(caller);
if( log_this) log_caller();
/*}}}*/

    rearm_long_press_timer = null;

    /* Remember [LAST LONG-PRESS CALLER] */
    long_press_caller = _caller;

    /* Clear pending [LONG-PRESS TIMER] */
    if(long_press_timer) clearTimeout(long_press_timer);
    /*.............................*/ long_press_timer = null;

    /* Replace [LONG-PRESS ARM TIMER] */
    if(long_press_arm_timer) clearTimeout(long_press_arm_timer);
    long_press_arm_timer =     setTimeout(long_press_arm_handler, LONG_PRESS_ARM_DELAY);
};
/*}}}*/
/*  rearm_long_press_listener_onScrollIntoView {{{*/
/*{{{*/
const REARM_LONG_PRESS_DELAY = 500;
let   rearm_long_press_timer;

/*}}}*/
let rearm_long_press_listener_onScrollIntoView = function()
{
/*{{{*/
let   caller = "rearm_long_press_listener_onScrollIntoView";
let log_this = LOG_MAP.EV0_LISTEN;

if( log_this) log(caller);
if(LOG_MAP.EV7_DISPATCH) t_fly.t_log_event_status(caller);
/*}}}*/

    if( rearm_long_press_timer ) clearTimeout( rearm_long_press_timer );
    rearm_long_press_timer =  setTimeout(add_long_press_listener, REARM_LONG_PRESS_DELAY);
};
 /*}}}*/
/*  del_long_press_listener {{{*/
let del_long_press_listener = function(_caller)
{
/*{{{*/
let   caller = "del_long_press_listener";
let log_this = !onDown_SHIFT && (LOG_MAP.EV4_LONG_PRESS || LOG_MAP.EV2_MOVE);

if( log_this) t_fly.t_log_event_status(caller+"("+_caller+")", lf4);
else if(LOG_MAP.EV7_DISPATCH) t_fly.t_log_event_status(caller);
/*}}}*/
    /* [hotspot] IN GUTTER .. PRESERVE long_press_listener {{{*/
/*{{{ .. COMMENT USAGE
    if((onWork_PANEL == hotspot) && t_gutter.get_XY_URDL(h_x, h_y, "PRESERVE long_press_listener when IN-GUTTER"))
    {
        if(_caller != MOUSEUP) {
if( log_this) log("%c IN GUTTER "+_caller+" (onWork_EL != null) .. PRESERVE long_press_listener", lbb+lbH+lf7);

            return;
        }
        else {
if( log_this) log("%c IN GUTTER "+_caller+" (onWork_EL == null) .. DELETING long_press_listener", lbb+lbH+lf7);

        }
    }
}}}*/
    /*}}}*/
    /* WAS PRELOADING .. [long_press_arm_timer] {{{*/
    if(long_press_arm_timer)
    {
        clearTimeout( long_press_arm_timer );
        /*.........*/ long_press_arm_timer = null;

        /* HIDE PENDING [LONG-PRESS ARM SCHEDULED] */
        t_seek.t_seeker_PU_disarm();

        if(long_press_timer == null) {
            if(log_this)
                t_fly.t_log_transcript_event_bot( "<span style='color:white;'>x</span>"
                    +                      " <span style='text-decoration:line-through;'>long press</span> disarmed"
                    +                      " <em>"+ _caller +"</em>"
                );
if( log_this) log("%c...long press DISARMED by: "+ _caller, lf3);

            return;
        }
    }
    /*}}}*/
    /* WAS PENDING .. [long_press_timer] {{{*/
    if(long_press_timer)
    {
        clearTimeout( long_press_timer );
        /*.........*/ long_press_timer = null; /* done */

        if(log_this)
            t_fly.t_log_transcript_event_bot( "<span style='color:white;'>"+t_data.SYMBOL_HEAVY_BALLOT+"</span>"
                +                      " <span style='text-decoration:line-through;'>LONG-PRESS</span> CANCELED: "
                +                      " <em>"+ _caller +"</em>"
            );
if( log_this) log("%c...long press CANCELED by: "+_caller, lf2);

        if(onWork_PANEL == null) return;
    }
    /*}}}*/
};
/*}}}*/
/*  is_long_press_pending {{{*/
let is_long_press_pending = function()
{
    let result
            =  (long_press_arm_timer != null)
            || (long_press_timer     != null)
    ;

/*{{{
log_key_val(   "is_long_press_pending"
            , {              onWork_EL : get_n_lbl(onWork_EL)
                ,     long_press_timer
                , long_press_arm_timer
                ,               result
            }, lbb+lf4)

}}}*/
    return result;
};
/*}}}*/
/*}}}*/
/*  long_press_arm_handler {{{*/
let long_press_arm_handler = function()
{
/*{{{*/
let   caller = "long_press_arm_handler";
let log_this = LOG_MAP.EV4_LONG_PRESS;

if(LOG_MAP.EV7_DISPATCH) t_fly.t_log_event_status(caller);
/*}}}*/

    /* [LONG-PRESS ARM DONE] */
    long_press_arm_timer = null;

    /* SHOW LONG-PRESS SCHEDULED */
    t_seek.t_seeker_PU_arm();

    /* Replace [LONG-PRESS TIMER] */
    if(long_press_timer) clearTimeout(long_press_timer);
    long_press_timer     = setTimeout(long_press_handler, LONG_PRESS_DELAY);

    /* TRANSCRIPT LOG {{{*/
if( log_this) log("%c"+caller+": ADDING LONG-PRESS LISTENER ON %c"+get_onWork_TOOL_label(), lbH+lf4, lbH+lf3);

if( log_this)
    t_fly.t_log_transcript_event_top("<span style='color:yellow;'>"+ t_data.SYMBOL_BLACK_CIRCLE +"</span>"
        +                      caller+" .. CALLED BY <em>"+ long_press_caller +"</em>");
    /*}}}*/
};
/*}}}*/
/*  long_press_handler {{{*/
let long_press_handler  = function()
{
/* {{{*/
let   caller = "long_press_handler";
let log_this = DOM_TOOLS_LOG || LOG_MAP.EV4_LONG_PRESS;

let tag_this = DOM_TOOLS_TAG || log_this;
if(LOG_MAP.EV7_DISPATCH) t_fly.t_log_event_status(caller);
/*}}}*/
    /* [LONG-PRESS DONE] */
    long_press_timer = null;

    /* HIDE PENDING [LONG-PRESS ARM SCHEDULED] */
    t_seek.t_seeker_PU_disarm();

    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    let                consumed_by = "";                               let consumed_by_css =  "";
    if(!consumed_by) { consumed_by = onLong_press1_HOTSPOT             (); consumed_by_css = lf1; }
    if(!consumed_by) { consumed_by = onLong_press2_TOOLS_ON_GRID       (); consumed_by_css = lf2; }
    if(!consumed_by) { consumed_by = onLong_press3_EDIT_OR_STAGE       (); consumed_by_css = lf3; }
    if(!consumed_by) { consumed_by = onLong_press4_SENTENCE            (); consumed_by_css = lf3; }
    if(!consumed_by) { consumed_by = onLong_press5_TOOL_EL             (); consumed_by_css = lf4; }
    if(!consumed_by) { consumed_by = onLong_press6_TOOL_TOOLTIP        (); consumed_by_css = lf6; }
    if(!consumed_by) { consumed_by = onLong_press7_TOOL_PANEL_MAGNIFY  (); consumed_by_css = lf7; }
    if(!consumed_by) { consumed_by = onLong_press8_HOTSPOT_PANEL_UNHIDE(); consumed_by_css = lf8; }
    if(!consumed_by) { consumed_by = onLong_press9_SLOTTED_WORD        (); consumed_by_css = lf9; }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* NO LONG-PRESS ACTION FOR [onWork_EL]  {{{*/
    if(!consumed_by) {
        consumed_by = "NO LONG-PRESS ACTION FOR ["+get_n_lbl(onWork_EL)+"]";

if(tag_this) log("%c "+caller+" %c *** "+consumed_by+" ***", lbb+lbL+lf9, lbb+lbR+lf2);
if(tag_this) t_fly.t_log_event_status(caller+": "+consumed_by);
    }
    /*}}}*/
if( tag_this && !mouselong_press_consumed_by) log("%c"+consumed_by, lbH+consumed_by_css);
    mouselong_press_consumed_by = consumed_by;
    /* ALL DONE {{{*/
    if(log_this)
        t_fly.t_log_transcript_event_bot( "<span style='color:white;'>"+t_data.SYMBOL_CHECK_MARK+"</span>"
            +                      " long press <em>"+ consumed_by +"</em>"
        );

    /*}}}*/
if( log_this) t_fly.t_log_event_status(caller+" "+t_data.SYMBOL_RIGHT_ARROW+" "+consumed_by, consumed_by_css);

    if(prop.get(t_data.PIN_SEEKSPOT) && prop.get(t_data.FLOATLOG)) t_fly.t_event_LOG_TOOLTIP("LONG-PRESS");
};
/*}}}*/
/*……t_get_mouselong_press_consumed_by {{{*/
let t_get_mouselong_press_consumed_by = function()
{
    return mouselong_press_consumed_by;

};
/*}}}*/
/*… onLong_press1_HOTSPOT {{{*/
let onLong_press1_HOTSPOT = function()
{
/* hotspot in_gutter is_on_grid {{{*/
    let caller = "onLong_press1_HOTSPOT";

    if(  onWork_PANEL != hotspot ) return "";
    if(  onWork_EL    != hotring ) return "";
    let in_gutter      = t_gutter.is_hotspot_IN(hotspot, "LONG-PRESS IN GUTTER");
    let while_editing  =  prop.get( t_data.EDIT_OR_STAGE );
    let is_on_grid     = call_t_grid_IS_ON_GRID(caller);
    let consumed_by    = "";
/*}}}*/
    /* IN GUTTER WHILE EDITING {{{*/
    if(!consumed_by && in_gutter && while_editing) {

        prop.toggle( t_data.EDIT_OR_STAGE );

        consumed_by = t_data.EDIT_OR_STAGE +" done .. HOTSPOT LONG-PRESS IN GUTTER .. WHILE EDITING";
    }
    /*}}}*/
    /* MOVING TOOLS ON GRID {{{*/
    if(!consumed_by && !is_on_grid)
    {
        consumed_by = "HOTSPOT LONG-PRESS MOVING TOOLS ON GRID";

        t_move_TOOLS_ON_GRID("LONG-PRESS");
    }
    /*}}}*/
    /* OR ACTIVATE TIER1 TOOLS {{{*/
    if(!consumed_by &&  is_on_grid)
    {
        prop.set(t_data.TOOLS_TIER2, false);
        t_activate_tools_tier1("LONG-PRESS");

        consumed_by = "HOTSPOT LONG-PRESS .. SELECT "+ t_data.TOOLS_TIER2;
    }
    /*}}}*/
    return consumed_by;
};
/*}}}*/
/*… onLong_press2_TOOLS_ON_GRID {{{*/
let onLong_press2_TOOLS_ON_GRID = function()
{
/* {{{*/
let   caller = "onLong_press2_TOOLS_ON_GRID";

    let consumed_by = "";
/*}}}*/
    if( !dimm_mask_displayed() ) return "";

    if(!consumed_by && call_t_grid_IS_ON_GRID(caller))
    {
        t_move_TOOLS_OFF_GRID("LONG-PRESS");

        consumed_by = "MOVING TOOLS OFF GRID";
    }

    if(!consumed_by && has_el_class(pat_bag, CSS_OPEN_BAG))
    {
        t_pat_bag_close(caller,caller);

        dimm_stop(caller);

        consumed_by = "CLOSING [pat_bag]";
    }

    return consumed_by;
};
/*}}}*/
/*… onLong_press3_EDIT_OR_STAGE {{{*/
let onLong_press3_EDIT_OR_STAGE = function()
{
/*{{{*/
let   caller = "onLong_press3_EDIT_OR_STAGE";
let log_this = !onDown_SHIFT && (LOG_MAP.EV4_LONG_PRESS || LOG_MAP.T3_LAYOUT);

if( log_this) t_fly.t_log_event_status(caller, lf3);
/*}}}*/

    if(!prop.get( t_data.EDIT_OR_STAGE )) return "";

    return t_tools_hide_onDown_XY_parent();
};
/*}}}*/
/*… onLong_press4_SENTENCE {{{*/
let onLong_press4_SENTENCE = function(e)
{
/*{{{*/
let   caller = "onLong_press4_SENTENCE";
let log_this = !onDown_SHIFT && LOG_MAP.EV4_LONG_PRESS;

if( log_this) t_fly.t_log_event_status(caller, lf4);
    let rejected_by = "";
    let consumed_by = "";
/*}}}*/
    /* SKIP TOOLS {{{*/
    if( t_is_a_tool_el          (onWork_EL, caller         )) rejected_by = "t_is_a_tool_el";

    if( t_util.is_el_child_of_id(onWork_EL, "log_popup_div")) rejected_by = "is_el_child_of_id";
    /*}}}*/
    /* PRESERVE SELECTION FOR STICKY TOOL {{{*/
    if( t_get_current_sel_text() ) rejected_by = "t_get_current_sel_text";

    /*}}}*/
    /* [has_moved] {{{*/
    check_has_moved(caller);

    if(  has_moved )               rejected_by = "has_moved=["+has_moved+"]";
    /*}}}*/
    if(rejected_by)
    {
if( log_this && rejected_by) log("%c"+rejected_by, lb4);

        return "";
    }
    /* SPLITTING CONTAINER SENTENCES {{{*/
    let { container , cells } = dom_sentence.t_SENTENCE_GET_EL_CONTAINER( onDown_EL );
    if(   container )
    {
        /* SPLITTING MULTIPLE CELLS */
        if( cells )
        {
            consumed_by += "SPLITTING TABLE "+cells.length+" CELLS SENTENCES";

            for(let i=0; i < cells.length; ++i)
            {
                t_sentence.t_SENTENCE_SPLIT( cells[i] );
            }
        }

        /* SPLITTING SINGLE CELL */
        if(!consumed_by)
        {
            consumed_by += "SPLITTING ["+container.nodeName+"] SENTENCES";

            t_sentence.t_SENTENCE_SPLIT( container );
        }
    }
    /*}}}*/

if( log_this && consumed_by) log("%c"+consumed_by, lf4);
    return consumed_by;
};
/*}}}*/
/*… onLong_press5_TOOL_EL {{{*/
let onLong_press5_TOOL_EL = function()
{
/*{{{*/
let   caller = "onLong_press5_TOOL_EL";
let log_this = LOG_MAP.EV4_LONG_PRESS;

/*{{{
if( log_this) t_log.console_clear(caller);
}}}*/
if( log_this) t_fly.t_log_event_status(caller, lf5);
    let consumed_by = "";
/*}}}*/
    /* [onLong_press_scroll_freezed] {{{*/
    if( behavior_TOUCH_ELSE_DESKTOP )
    {
if( log_this) log("%c behavior_TOUCH_ELSE_DESKTOP=["+behavior_TOUCH_ELSE_DESKTOP+"]", lb5);

        dom_scroll.set_onLong_press_scroll_freezed( true );
    }
    /*}}}*/
    /* WORD SLOT .. IGNORE {{{*/
    let el_slot = t_get_onWork_EL_slot();
    if( el_slot > 0) {
if(log_this) logBIG(caller+": SLOT #"+el_slot+" PRESSED .. NOT CONSUMED", lf8);

        return consumed_by;
    }
    /*}}}*/
    /* 1 - [sticky] {{{*/
    if(!consumed_by) {
        let sticky  = t_sticky.t_sticky_get_onWork_STICKY();
        if( sticky && has_el_class(sticky, t_data.CSS_HAS_FOCUS))
        {
            consumed_by = "IGNORING EDITED STICKY "+sticky.id;

if( log_this) t_log.logSD1("%c"+caller+"%c"+consumed_by, lbH+lf8);
        }
        else {
            consumed_by = onLong_press5_TOOL_STICKY(log_this);

        }
    }
    /*}}}*/
    /* 2 - [pat_bag.bag_rot] .. (FLY-LOG bag_rot.title) {{{*/
    if(!consumed_by
       &&      onWork_EL
       && (   (onWork_EL.id == t_data.bag_rot      )
           || (onWork_EL.id == t_data.WORDS_BAG_ROT))
      ) {
        consumed_by = "HANDLING LONG-PRESS ON "+bag_rot.id;
if( log_this) t_log.logSD2("%c"+caller+"%c"+consumed_by, lbH+lf5);

        t_fly.t_fly_tooltip_update(bag_rot.title, bag_rot.id);
    }
    /*}}}*/
    /* 3 - [div_slot_containers child] {{{*/
    let div_slot_containers_child_pressed = t_util.is_el_or_child_of_parent_el(onWork_EL, div_slot_containers);
    if(!consumed_by && div_slot_containers_child_pressed)
    {
        consumed_by = "START CONTAINERS CHILD DRAG";
if( log_this) t_log.logSD3("%c"+caller+"%c"+consumed_by, lbH+lf5);

        t_slot_container_set_fullscreen( onWork_EL );
        t_add_tool_pointermove_listener(caller);
    }
    /*}}}*/
    /* XXX [dimm_mask] .. t_slot_container_set_fullscreen {{{*/
/*{{{ TODO [dimm_mask] has no children
    let                dimm_mask_child_pressed = t_util.is_el_or_child_of_parent_el(onWork_EL,  dimm_mask);
    if(!consumed_by && dimm_mask_child_pressed )
    {
        consumed_by = "LONG-PRESS ON SLOT CONTAINER .. [t_slot_container_set_fullscreen]";
if( log_this) t_log.logSD8("%c"+caller+"%c"+consumed_by, lbH+lf5);

        t_slot_container_set_fullscreen( onWork_EL );
    }
}}}*/
    /*}}}*/
if(log_this && !consumed_by) log("%c"+caller+"%c NOT CONSUMED", lbL+lf5, lbR+lf8);
    return consumed_by;
};
/*}}}*/
/*……onLong_press5_TOOL_STICKY {{{*/
let onLong_press5_TOOL_STICKY = function(log_this)
{
/*{{{*/
let   caller = "onLong_press5_TOOL_STICKY";

/*}}}*/
/* PRESSED CONTEXT .. sel_text sticky {{{*/
    let current_sel_text    = t_get_current_sel_text();
    let pinned_sticky_count = t_sticky.t_sticky_GET_COUNT();
    let              sticky = t_sticky.t_sticky_get_onWork_STICKY();
/*{{{
    let seeker_on_sticky    = (sticky && (sticky == t_seek.t_seeker_get_STICKY()));
}}}*/
/*{{{*/
if( log_this) {
    log_key_val_group( caller
                 , {                    current_sel_text : t_util.ellipsis_short(current_sel_text)
                     ,                   onDown_SEL_TEXT : t_util.ellipsis_short(onDown_SEL_TEXT )
                     ,               pinned_sticky_count
                     ,                    sticky_touched : (sticky ? sticky.touched : "")
                     ,                           callers : t_log.get_callers()
                 }, lf4);
}
/*}}}*/

    let consumed_by         = "";
/*}}}*/
    /* XXX 1 - LONG-PRESS ON [sticky] .. EDIT [msg] {{{*/
/*{{{
    if(sticky && t_sticky.t_sticky_is_EDITING(sticky) )
    {
        if(is_a_DOM_LOAD_featured_function("t_sticky.t_sticky_EDIT")) {
            consumed_by = "LONG-PRESS ON ["+sticky.id+"] .. TO EDIT CONTENT";
if( log_this) t_log.logSD4("%c"+caller+"%c"+consumed_by, lbL+lf4,lbR+lf1);

            t_seek.t_seeker_PU_hide("instant");

            t_sticky.t_sticky_EDIT(sticky);
        }
    }
}}}*/
    /*}}}*/
    /* 1 - LONG-PRESS WITH [onDown_SEL_TEXT] .. NEW STICKY FROM PAGE-SELECTION {{{*/
    if(!consumed_by && (current_sel_text || onDown_SEL_TEXT))
    {
        if(!onDown_SEL_TEXT && !current_sel_text)
            clr_SELECTION_PROGRESS("NEW STICKY FROM PAGE-SELECTION", log_this);

        if(pinned_sticky_count < t_sticky.STICKY_MAX) {
            consumed_by = onLong_press5_TOOL_STICKY_SEL_TEXT(log_this);
if( log_this) t_log.logSD4("%c"+caller+"%c"+consumed_by, lbL+lf4,lbR+lf1);
        }
        else {
            logBIG("(pinned_sticky_count >= t_sticky.STICKY_MAX) .. ("+pinned_sticky_count+" >= "+t_sticky.STICKY_MAX+")");
        }
    }
    /*}}}*/
    /* 2 - LONG PRES ON MSG .. FORMAT {{{*/
    if(!consumed_by && t_sticky.t_sticky_onDown_a_STICKY_PAD(sticky))
    {
        consumed_by         = "LONG-PRESS ON STICKY PAD "+sticky.id+".. FORMAT MSG";
if( log_this) t_log.logSD4("%c"+caller+"%c"+consumed_by, lbL+lf4,lbR+lf2);

        t_sticky.t_sticky_format_pad(sticky);
    }
    /*}}}*/
    /* 3 - LONG-PRESS ON TOOL .. SHOW TOOLTIP {{{*/
    if(!consumed_by && (!sticky && t_is_a_tool_el(onWork_EL, caller)))
    {
        consumed_by         = "LONG-PRESS ON TOOL "+onWork_EL.id+".. SHOW TOOLTIP";
if( log_this) t_log.logSD4("%c"+caller+"%c"+consumed_by, lbL+lf4,lbR+lf3);

        return "";
    }
    /*}}}*/
    /* XXX 4 - LONG-PRESS .. ON PAGE BACKGROUND (no page selection) .. STICKY RING {{{*/
/*{{{
    if(   !consumed_by
       &&  sticky
       && !t_sticky.t_sticky_is_MOVING   (sticky)
       && !t_sticky.t_sticky_is_ORIENTING(sticky)
      ) {
        consumed_by         = "LONG-PRESS ON PAGE BACKGROUND .. SHOW STICKY RING .. x"+pinned_sticky_count+" PINNED STICKY";
if( log_this) t_log.logSD4("%c"+caller+"%c"+consumed_by, lbL+lf4,lbR+lf5);

        t_seek.t_seeker_PU_hide("instant");

        t_sticky.t_sticky_CHOOSE();
    }
}}}*/
    /*}}}*/
    /* XXX 5 - LONG-PRESS ON [PAGE EMPTY AREA] .. [NO onWork_PANEL] .. ADD FIRST STICKY {{{*/
/*{{{
    if(!consumed_by && !sticky && !onWork_PANEL)
    {
        consumed_by         = "LONG-PRESS ON PAGE BACKGROUND .. ADD FIRST EMPTY STICKY";
if( log_this) t_log.logSD5("%c"+caller+"%c"+consumed_by, lbL+lf4,lbR+lf5);

        sticky = t_sticky.t_sticky_NEW_XY_SEL_TEXT(onDown_XY.x, onDown_XY.y, t_data.SYMBOL_DIRECT_HIT);

        t_set_onWork_EL(sticky, caller);
        t_seek.t_seeker_set_TOOL(onWork_EL);

        t_add_tool_pointermove_listener(caller);

        if( prop.get( t_data.SHOW_SEEKZONE ) ) t_sticky.t_sticky_LOG_TOOLTIP(sticky, "LONG-PRESS");
    }
}}}*/
    /*}}}*/
    return consumed_by;
};
/*}}}*/
/*……onLong_press5_TOOL_STICKY_SEL_TEXT {{{*/
/*{{{*/
let onLong_press4_TOOL_STICKY_SEL_TEXT_timer;

/*}}}*/
let onLong_press5_TOOL_STICKY_SEL_TEXT = function(log_this=true)
{
/*{{{*/
let   caller = "onLong_press5_TOOL_STICKY_SEL_TEXT";

    let      consumed_by = "";
/*}}}*/
    /* CLR .. LONG-PRESS RELEASED {{{*/
/*{{{
log("%c onDown_MS=["+((onDown_MS                       ) / 1000)+"]", lbH+lf4);
log("%c .DOWN-UP.=["+((  onUp_MS            - onDown_MS) / 1000)+"]", lbH+lf4);
log("%c .DOWN-NOW=["+((new Date().getTime() - onDown_MS) / 1000)+"]", lbH+lf4);
}}}*/
    if(onUp_MS > onDown_MS)
    {
        consumed_by     = "LONG-PRESS RELEASED .. SELECTION DROPPED";
if( log_this) t_log.log(    "%c"+caller+": "+ consumed_by
                    ,        lbH+lf8                     );

        clr_SELECTION_PROGRESS(consumed_by, log_this);
        return consumed_by;
    }
    /*}}}*/
    /* TIC .. SELECTION CHANGE .. START CHECK INTERVAL {{{*/
    let last_sel_text = get_last_sel_text() || onDown_SEL_TEXT;

    let current_sel_text  = t_get_current_sel_text();
    if( current_sel_text != last_sel_text)
    {
        tic_SELECTION_PROGRESS();
        /* START TIC INTERVAL {{{*/
        consumed_by     = "LONG-PRESS .. SELECTION CHANGED";
if( log_this) t_log.log( "%c"+caller+": "+ consumed_by
                        +"%c"+LF+"FROM %c"+ t_util.ellipsis_short(t_util.strip_CR_LF( last_sel_text))
                        +"%c"+LF+"TO.. %c"+ t_util.ellipsis_short(t_util.strip_CR_LF(current_sel_text))
                        ,lbH+lf4
                        ,    lf8             ,lb8
                        ,    lf9             ,lb9);


        set_last_sel_text( current_sel_text );

        if(!onLong_press4_TOOL_STICKY_SEL_TEXT_timer)
            onLong_press4_TOOL_STICKY_SEL_TEXT_timer = setInterval(function() { onLong_press5_TOOL_STICKY_SEL_TEXT(log_this); }, SEL_TEXT_TIC_TOC_INTERVAL);
        /*}}}*/
    }
    /*}}}*/
    /* TOC .. SELECTION STEADY .. CHECK UNCHANGED COUNTDOWN {{{*/
    else
    {
        let unchanged_countdown = toc_SELECTION_PROGRESS();
        /* TOC COUNT .. NEXT INTERVAL {{{*/
        if( unchanged_countdown )
        {
            consumed_by     = "LONG-PRESS .. SELECTION STEADY";
if( log_this) t_log.log("%c"+caller+": "+ consumed_by+"%c unchanged x"+unchanged_countdown
                        ,lbH+lf4                      ,lbb+lbH+lfX[    unchanged_countdown]);

            let next_interval = SEL_TEXT_TIC_TOC_INTERVAL / 3;

            clearInterval( onLong_press4_TOOL_STICKY_SEL_TEXT_timer );
            onLong_press4_TOOL_STICKY_SEL_TEXT_timer = setInterval(function() { onLong_press5_TOOL_STICKY_SEL_TEXT(log_this); }, next_interval);
        }
        /*}}}*/
        /* TOC DONE: .. SELECTION ADD STICKY {{{*/
        else if(last_sel_text)
        {
            consumed_by = "LONG-PRESS .. SELECTION ADD STICKY";
if(log_this) t_log.logSD4( "%c"+caller+": "+consumed_by+"=["+consumed_by+"]"
                    +"%c"+LF+t_util.ellipsis_short(t_util.strip_CR_LF(current_sel_text))
                    ,lbH+lf4
                    ,lbb+lb9);

            clr_SELECTION_PROGRESS(consumed_by, log_this);

            onLong_press5_STICKY_ADD_NEW(current_sel_text, log_this);
        }
        /*}}}*/
        /* TOC DONE: .. SELECTION IS EMPTY {{{*/
        else {
            consumed_by = "LONG-PRESS .. SELECTION IS EMPTY";
if(log_this) t_log.logSD4("%c"+caller+": "+consumed_by
                    ,lbH+lf4                    );

            clr_SELECTION_PROGRESS(consumed_by, log_this);
        }
        /*}}}*/
    }
    /*}}}*/
    return consumed_by;
};
/*}}}*/
/*……onLong_press5_STICKY_ADD_NEW {{{*/
let onLong_press5_STICKY_ADD_NEW = function(current_sel_text, log_this)
{
/*{{{*/
let   caller = "onLong_press5_STICKY_ADD_NEW";

if(log_this) log(caller+"%c"+t_util.ellipsis_short(t_util.strip_CR_LF(current_sel_text)), lbH+lf5);
/*}}}*/
    /* ADD NEW STICKY */
    let new_sticky = t_sticky.t_sticky_NEW_XY_SEL_TEXT(onDown_XY.x, onDown_XY.y, current_sel_text || onDown_SEL_TEXT);
/*{{{
if(log_this) log("onDown_EL %c "+get_n_lbl(onDown_EL), lbH+lf5);
    let was_onDown_EL = onDown_EL;
}}}*/
    t_set_onWork_EL(new_sticky, caller);
    t_seek.t_seeker_set_TOOL(onWork_EL);
/*{{{
    onDown_EL = was_onDown_EL;
if(log_this) log("onDown_EL %c "+get_n_lbl(onDown_EL), lbH+lf5);
}}}*/

    /* AND CONSUME SELECTION */
    t_window_getSelection_removeAllRanges(caller);
    onDown_SEL_TEXT = "";

    /* AND STREAMLINE INTO DRAGGING NEW STICKY */
    t_sticky.t_sticky_set_MOVING( new_sticky );

    t_add_tool_pointermove_listener(caller);
};
/*}}}*/
/*… onLong_press6_TOOL_TOOLTIP {{{*/
let onLong_press6_TOOL_TOOLTIP = function()
{
/*{{{*/
let   caller = "onLong_press6_TOOL_TOOLTIP";
let log_this = LOG_MAP.EV4_LONG_PRESS;

    let onWork_EL_is_a_tool = t_is_a_tool_el     (onWork_EL, caller);
    let onWork_EL_has_title = t_util.get_el_title(onWork_EL);
if( log_this)
    log_key_val_group(      caller
                , {   t_fly_div_get       : t_fly.t_fly_div_get()
/*{{{
                    , sticky              : t_sticky.t_sticky_get_onWork_STICKY()
                    , t_seeker_get_STICKY : t_seek.t_seeker_get_STICKY()
}}}*/
                    , onWork_PANEL
                    , onWork_EL
                    , onWork_EL_is_a_tool
                    , onWork_EL_has_title
                }, lf6);
if( log_this) t_fly.t_log_event_status(caller, lf6);

    let consumed_by = "";
/*}}}*/
/*{{{
    let sticky  =     t_sticky.t_sticky_get_onWork_STICKY();
    if( sticky && (sticky == t_seek.t_seeker_get_STICKY())) return   ;
}}}*/
    if(onWork_PANEL == t_fly.t_fly_div_get()     ) return ""; /* HAS MAGNIFY LONG-PRESS */
    if(onWork_PANEL == onWork_EL                 ) return ""; /* HAS MAGNIFY LONG-PRESS */

    let title
        =           has_el_class(onWork_EL, t_data.CSS_STICKY_TOOL)
        ? t_sticky.t_sticky_get_tooltip(onWork_EL)
        :           t_util.get_el_title(onWork_EL)
    ;

    if( title ) {
        consumed_by = "SHOWING TOOLTIP ["+t_util.ellipsis_short(t_util.strip_CR_LF(title))+"]";

        t_fly.t_fly_tooltip( title );
    }
if( log_this) t_log.logSD5("%c"+caller+"%c"+consumed_by, lbL+lf6,lbR+lf6);
    return consumed_by;
};
/*}}}*/
/*… onLong_press7_TOOL_PANEL_MAGNIFY {{{*/
let onLong_press7_TOOL_PANEL_MAGNIFY = function()
{
/* {{{*/
let   caller = "onLong_press7_TOOL_PANEL_MAGNIFY";

/*}}}*/
    /* MAGNIFY [fly_div] {{{*/
    if( t_util.is_el_or_child_of_parent_el(onWork_EL, t_fly.t_fly_div_get()) )
    {
        let el6_is_import_clipboard = (onWork_EL && (onWork_EL.id == t_data.CSS_FLY_CLIPBOARD));
        if( el6_is_import_clipboard )
            return "LONG-PRESS ON A CLIPBOARD CUT-PASTE TOOL";

/*{{{
        let dx = onDown_XY.x - onDown_PANEL_XY.x;
        let dy = onDown_XY.y - onDown_PANEL_XY.y;
        t_fly.t_fly_div_magnified_toggle(dx, dy);
}}}*/
        t_fly.t_fly_div_magnified_toggle();

        return "FLOAT LOG MAGNIFICATION";
    }
    /*}}}*/
    /* NO SELECTED [onWork_PANEL] {{{*/
    if( !onWork_PANEL ) return "";

    /*}}}*/
    /* DRAG [pivot_PANEL] AND SYNC PANELS MAGNIFICATION {{{*/
    if( is_a_spread_drag() )
    {
        if(onWork_PANEL == pivot_PANEL) {
            t_toggle_pivot_PANEL_magnified( prop.get( t_data.PIVOT_MAGNIFIED ) );
            return "SETTING DRAGGED PIVOT PANEL RE-MAGNIFICATION";
        }
    }
    /*}}}*/
    /* MAGNIFY PANEL {{{*/
    else if(onWork_PANEL != hotspot)
    {
        return t_toggle_onWork_PANEL_magnified(caller);
    }
    /*}}}*/
    return "";
};
/*}}}*/
/*… onLong_press8_HOTSPOT_PANEL_UNHIDE {{{*/
let onLong_press8_HOTSPOT_PANEL_UNHIDE = function()
{
/* {{{*/
let   caller = "onLong_press8_HOTSPOT_PANEL_UNHIDE";

/*}}}*/

    /* [has_moved] normal check .. (standard check was too sensitive due to no-lag-constraint) */
    t_clr_has_moved();
    check_has_moved(caller);

    if(  onWork_PANEL != hotspot ) return "";
    if(  onWork_EL    != hotring ) return "";
    if(  has_moved               ) return "";

    if(!t_raise_pivot_PANEL_posted_since_onDown(caller))
        t_flash_unpinned_panels(caller);

    return "UNHIDING PANELS";
};
/*}}}*/
/*… onLong_press9_SLOTTED_WORD {{{*/
let onLong_press9_SLOTTED_WORD = function()
{
/*{{{*/
let   caller = "onLong_press9_SLOTTED_WORD";
let log_this = !onDown_SHIFT && (LOG_MAP.EV4_LONG_PRESS || LOG_MAP.EV2_MOVE);

if( log_this) t_fly.t_log_event_status(caller, lf9);
/*}}}*/

    let      slot = t_get_onWork_EL_slot();
    if(     !slot           ) return "";
    if(!t_select.ccs[ slot] ) return "";

    /* SET PARAGRAPH TO OUTLINE */
    t_select.ccs[slot].num_selected = t_get_onWork_EL_num();

    /* FILL [dimm_mask] WITH [div_slot_containers] */
    if( t_select.ccs[slot] )
        t_slot_containers_display(slot);

    return "SHOWING SLOT ["+slot+"] CONTAINERS";
};
/*}}}*/
/*}}}*/
/** DRAG CLICK {{{*/
/*{{{*/
let   t_onclick_e_target;
let   t_onclick_timer;

/*}}}*/
/*… is_a_spread_drag {{{*/
let is_a_spread_drag = function(e)
{
/*{{{*/
let   caller = "is_a_spread_drag";
let log_this = LOG_MAP.EV0_LISTEN;

/*}}}*/

    let this_MS      = new Date().getTime();
    let delayMS      = onDown_MS ? (this_MS - onDown_MS) : 0;
    let in_hand      = (delayMS > t_data.DRAG_MIN_MS);
    let fully_spread = ((spread_ratio.x >= 0.9) || (spread_ratio.y >= 0.9));

    let cause        = "";

    if(in_hand && has_moved && fully_spread)
        cause = "MOVED FULLY SPREAD AFTER "+ (this_MS-onDown_MS)+" ms .. "+has_moved;

/*{{{
    else if( (onWork_EL_last_used != hotring    )
        &&   (onWork_EL_last_used != pivot_PANEL)
        &&   t_tools_panel_is_selected(onWork_EL_last_used)
    )
        cause = "(pivot_PANEL != onWork_EL_last_used)";
logXXX("pivot_PANEL=["+get_n_lbl(pivot_PANEL)+"] onWork_EL_last_used=["+get_n_lbl(onWork_EL_last_used)+"]");
*/
/* works well .. results are not that great ?... */

/*
    else if(delayMS > t_data.DRAG_MAX_MS)
        cause = "DRAGGED MORE THAN "+ t_data.DRAG_MAX_MS +" ms";
*/
/*}}}*/

    let result  = (cause != "");

if(log_this && result) log(caller+": ...return "+result+" .. %c"+cause, lb7);

    return result;
};
/*}}}*/
/*… is_a_drag {{{*/
let is_a_drag = function(e)
{
/*{{{*/
let   caller = "is_a_drag";
let log_this = LOG_MAP.EV0_LISTEN;

/*}}}*/
    let dragged = (Math.abs(onMoveDXY.x) > MOVED_ENOUGH) || (Math.abs(onMoveDXY.y) > MOVED_ENOUGH);

if(log_this && dragged) log(caller+": ...return "+dragged);
    return dragged;
};
/*}}}*/
/*… is_a_click {{{*/
let is_a_click = function(e)
{
/*{{{*/
let   caller = "is_a_click";
let log_this = LOG_MAP.EV0_LISTEN;

/*}}}*/
    let reason    = "";
    let this_MS   = new Date().getTime();
    let delayMS   = onDown_MS ? (this_MS - onDown_MS) : 0;

    if(delayMS   <=  t_data.CLICK_DURATION) reason = "pressed during "+delayMS+" ms";

    let clicked   = (reason != "");

if(!clicked && (delayMS > t_data.LONG_PRESS_DURATION)) t_seek.t_seekzone4_show_longpress();

    is_a_click_last_result = clicked;

if(log_this && clicked) log(caller+": ...return "+clicked+" .. %c"+reason, lb7);
    return clicked;
};
/*}}}*/
/*… is_a_dblclick {{{*/
let is_a_dblclick = function(e, _caller)
{
/*{{{*/
let   caller = "is_a_dblclick";
let log_this = !onDown_SHIFT && t_log.logging_something();

/*{{{
t_fly.t_log_event_status(caller, lf8);
}}}*/
/*}}}*/
    let this_MS      = new Date().getTime();
    let clicks_MS    =             onDown_MS - onDownPMS; /* previous */
    let pressMS      = (this_MS -  onDown_MS);
    let downs_MS     =             onDown_MS ? pressMS : 0;
    let quick_enough = (downs_MS < t_data.DBLCLICK_DELAY);
    let multi_click  = e.detail ? (e.detail > 1) : (clicks_MS < t_data.DBLCLICK_DELAY);
    let misclick     = is_a_misclick(e, multi_click, pressMS);
    let dblclick     = !misclick  &&    multi_click && quick_enough;
/*{{{*/
if(log_this) {
    console.dir(e);

    let                                 cause  = "";
    if     ( misclick                 ) cause += "misclick ";
    if     ( e.type == "mouseup"      ) cause += "click count "+ e.detail+" ";
    else if(!dblclick && !multi_click ) cause += "not multi_click  ";
    else if(!dblclick && !quick_enough) cause += "not quick_enough ";

    let lfx = (dblclick ? lf4 : lf8);

    let multi = "";
    if( multi_click )
        multi +=  "multi_click"
            +(       (e.detail > 1)
                   ? (   " e.detail=["+ e.detail                                     +"]")
                   : (  " clicks_MS=["+ clicks_MS        +" < "+t_data.DBLCLICK_DELAY+"]")
             );

    log("%c"+caller+": ...%c return "+dblclick +" %c "+ multi +" %c"+cause +"%c e.type ["+e.type+"] %c downs_MS ["+ downs_MS +"] %c clicks_MS ["+clicks_MS+"] %c onWork_PANEL ["+t_util.get_id_or_tag(onWork_PANEL)+"]"
        ,lbL+lf3         ,lbC+lfx                ,lbR+lfx       ,lbH+lfx    ,lb0                   ,lf6                         ,lf7                         ,lf3                                                      );
}
/*}}}*/

    if( dblclick ) t_seek.t_seekzone3_show_dblclick(pressMS);

    is_a_dblclick_last_result = dblclick;

    return dblclick;
};
/*}}}*/
/*… is_a_misclick {{{*/
let is_a_misclick = function(e, multi_click, pressMS)
{
/*{{{*/
let log_this = !onDown_SHIFT && t_log.logging_something();

/*}}}*/
    /* selection {{{*/
    let some_window_selection
        = String(window.getSelection());

    /*}}}*/
    /* [too_quick] {{{*/

    let misclick_MS
        = behavior_TOUCH_ELSE_DESKTOP
        ?  t_data.MISCLICK_TOUCH_MS
        :  t_data.MISCLICK_MOUSE_MS;

    let too_quick
        =  (pressMS < misclick_MS)
        && !multi_click
        && !onWork_PANEL
        && !some_window_selection;

    is_a_too_quick_last_result = too_quick;

    /*}}}*/
    /* [too_early] {{{*/
    let displayed_MS
        =  onModalMS
        ? (new Date().getTime() - onModalMS) : 0;

    let modal_click_early_ms
        = behavior_TOUCH_ELSE_DESKTOP
        ? 2 * t_data.MODAL_CLICK_EARLY_MS
        :     t_data.MODAL_CLICK_EARLY_MS;

    let too_early
        =  t_which_onModal_EL()
        && (onModalMS    > 0)
        && (displayed_MS < modal_click_early_ms);

    is_a_too_early_last_result = too_early;
    /*}}}*/
/*{{{*/
if( log_this) {
    let s         = parseInt(displayed_MS   / 1000);
    let f         = (displayed_MS - s*1000) / 1000;
    let t         = parseInt(10 * f + 0.5);
/*{{{
    log_key_val_group("is_a_misclick"
                  , {   some_window_selection : "["+t_util.strip_CR_LF( some_window_selection )+"]"
                      , onWork_EL             : get_n_lbl( onWork_EL )
                      , too_quick             : too_quick +" .. "+(pressMS +"ms  < "+ misclick_MS          +"ms")
                      , onModal_EL            : t_which_onModal_EL()
                      , too_early             : too_early +" .. "+(s+"."+t +"sec < "+ modal_click_early_ms +"ms")
                  }
                  , lf3
                  , false);
}}}*/
    if( too_quick ) log("%c TOO QUICK "+               (pressMS +"ms  < "+ misclick_MS          +"ms") +" .. "+ too_quick, lbH+lf3);
    if( too_early ) log("%c MODAL CLOSING TOO EARLY "+ (s+"."+t +"sec < "+ modal_click_early_ms +"ms") +" .. "+ too_early, lbH+lf3);
}
/*}}}*/
    if(    too_quick || too_early ) t_seek.t_seekzone2_show_misclick(pressMS, misclick_MS);
    return too_quick || too_early;
};
/*}}}*/
/*… was_a_click {{{*/
let is_a_click_last_result;
let is_a_dblclick_last_result;
let is_a_too_early_last_result;
let is_a_too_quick_last_result;

let was_a_click                 = function() { return is_a_click_last_result;     };
let was_a_dblclick              = function() { return is_a_dblclick_last_result;  };
let was_a_misclick              = function() { return is_a_too_quick_last_result || is_a_too_early_last_result; };
let was_a_too_early_last_result = function() { return is_a_too_early_last_result; };
let was_a_too_quick_last_result = function() { return is_a_too_quick_last_result; };

let clr_click_last_result = function()
{
    is_a_click_last_result     = false;
    is_a_dblclick_last_result  = false;
    is_a_too_quick_last_result = false;
    is_a_too_early_last_result = false;
};
/*}}}*/
/*➔ t_is_a_quick_drag {{{ */
let t_is_a_quick_drag = function()
{
    let this_MS      = new Date().getTime();
    let elapsed      =  this_MS - onDown_MS;
    let quick_enough = (elapsed < t_data.CLICK_DURATION);
    let result       = !!(quick_enough && has_moved);

/*{{{
log_key_val_group("t_is_a_quick_drag"
                  , { elapsed   : "(elapsed "+elapsed+" < "+t_data.CLICK_DURATION+" CLICK_DURATION)"
                    , quick_enough
                    , has_moved
                    , result
                    , callers   : t_log.get_callers()
                  }, lf7, false);
}}}*/
    return result;
};
/*}}}*/
/*➔ t_onClick_1_onWork_EL {{{*/
let t_onClick_1_onWork_EL = function(delay=0, dblclicked=false)
{
/*{{{*/
let   caller = "t_onClick_1_onWork_EL("+get_n_lbl(onWork_EL)+", delay=["+delay+"], dblclicked=["+dblclicked+"])";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) t_fly.t_log_event_status(caller, lf5);
/*}}}*/
    /* return .. f(t_event_has_been_consumed) {{{*/
    if( t_event_has_been_consumed() )
    {
if(log_this) t_log.console_warn("*** "+caller+": ALREADY CONSUMED BY:"+LF+t_event_consumed_cause);

        return;
    }
    /*}}}*/
    /* or repost .. f(t_onclick_timer) {{{*/
    if(t_onclick_timer) clearTimeout(t_onclick_timer);
    /*............................*/ t_onclick_timer = null;

    t_onclick_e_target   = onWork_EL;

    if( delay ) t_onclick_timer = setTimeout(onClick_1_onWork_EL_handler, delay);
    else                                     onClick_1_onWork_EL_handler();
    /*}}}*/
};
/*}}}*/
/*…   onClick_1_onWork_EL_handler {{{*/
let   onClick_1_onWork_EL_handler = function()
{
/*{{{*/
let   caller = "onClick_1_onWork_EL_handler";
let log_this = LOG_MAP.EV5_TOOL_CB;

/*}}}*/
    /* [e_target] .. f(parentElement htmlFor firstElementChild) {{{*/
    let e_target = t_onclick_e_target;
    if( e_target.nodeType == Node.TEXT_NODE)
        e_target = e_target.parentElement;

    if(!e_target.id && t_is_a_tool_el(onWork_EL, caller))
        e_target = t_util.t_get_e_target_proxy( e_target );

    if(!e_target) {
if(log_this) log("...!e_target for t_onclick_e_target=["+get_n_lbl(t_onclick_e_target)+"]");
        return;
    }
    /*}}}*/
    /* SET [e_target.id] from textContent {{{*/
    if(    !e_target.id ) {
        if( e_target.textContent && (e_target.textContent.length <= 64)) {
            e_target.id       = e_target.textContent.trim();
            e_target.id_faked = true;
        }
    }
    /*}}}*/
    /* [bag_id] {{{*/
    let bag_id = t_get_bag_id(e_target);

    /*}}}*/
/*{{{*/
if(log_this) {
    let s = log_key_val(   caller
                       , { e_target          : get_n_lbl( e_target )
                         , e_target_id       : e_target.id
                         , e_target_id_faked : e_target.id_faked
                         ,      bag_id
                         ,     standby       : get_n_lbl( onStandby_PANEL )
                         }
                       , lf1);

/*{{{
    t_fly.t_log_event_status(caller+": e_target.id=["+e_target.id+"] bag_id=["+bag_id+"]", lf8);
}}}*/

    if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_fly( s );
}
/*}}}*/
    t_onClick_1_e_target_bag_id(e_target, bag_id);
};
/*}}}*/
/*➔ t_onClick_1_e_target_bag_id {{{*/
let t_onClick_1_e_target_bag_id = function(e_target, bag_id)
{
/*{{{*/
let   caller = "t_onClick_1_e_target_bag_id";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this)
    log("%c"+caller+"%c"+get_n_lbl(e_target)+"%c bag_id=["+bag_id+"]"
       ,lbL         ,lbC+lf3                 ,lbR+lf4                );

if( log_this) pattern_log_bag_csv(caller);
/*{{{
if( log_this) t_fly.t_log_event_status(caller, lf1);
}}}*/
    let consumed_by = "";
/*}}}*/
    /* [test_panel] {{{*/
    let                 e_target_name  = e_target.id.toLowerCase();
    if(!consumed_by && (e_target_name == "behavior"       ))             { consumed_by = e_target.id;       t_fly.t_log_behavior();               }
    if(!consumed_by && (e_target_name == "highlight"      ))             { consumed_by = e_target.id;       t_outline_viewport_top_containers();  }
    if(!consumed_by && (e_target_name == "regex"          ))             { consumed_by = e_target.id;       t_fly.t_log_regex();                  }
    if(!consumed_by && (e_target_name == "clear"          ))             { consumed_by = e_target.id;       t_clear(caller);                      }
    if(!consumed_by && (e_target_name == "import"         ))             { consumed_by = e_target.id;       t_share.t_share3_IMPORT_UI(e_target); }
    if(!consumed_by && (e_target_name == "reload"         ))             { consumed_by = e_target.id;       document.location.reload();           }

    if(!consumed_by && (e_target_name == t_data.CSS_FLY_CLIPBOARD))      { consumed_by = t_data.CSS_FLY_CLIPBOARD;                                }

    if(!consumed_by && (e_target_name == "export"         ))             { consumed_by = e_target.id;       t_share.t_share1_EXPORT   (e_target);
        /*...............................................................................................*/ t_share.t_share2_MAILTO_UI(e_target); }
    if(!consumed_by && has_el_class(e_target, t_data.CSS_MAILTO))        { consumed_by = t_data.CSS_MAILTO; t_share.t_share2_MAILTO_UI(e_target); }

    /*}}}*/
    /* 1/6 CB BAG PIN  {{{*/
    if(!consumed_by && onWork_PANEL && bag_id) {
        if(!consumed_by && has_el_class(e_target, CSS_PUSH_PIN)) { t_click_panel_pin_CB(onWork_PANEL, e_target); consumed_by = bag_id+"."+CSS_PUSH_PIN; }
        if(!consumed_by && has_el_class(e_target, CSS_CLOSEPIN)) { t_click_panel_pin_CB(onWork_PANEL, e_target); consumed_by = bag_id+"."+CSS_CLOSEPIN; }
        if(!consumed_by && has_el_class(e_target, CSS_SCALEPIN)) { t_click_panel_pin_CB(onWork_PANEL, e_target); consumed_by = bag_id+"."+CSS_SCALEPIN; }
        if(!consumed_by && has_el_class(e_target, CSS_CLEARPIN)) { t_click_panel_pin_CB(onWork_PANEL, e_target); consumed_by = bag_id+"."+CSS_CLEARPIN; }
    }
    /*}}}*/
    /* 2/6 CB SEEKER {{{*/
    if(!consumed_by && t_seek.t_seeker_get_node_bag_id( e_target ))
    {
        t_seek.t_seeker_onClick(); consumed_by = "SEEKER "+bag_id;

    }
    /*}}}*/
    /* 3/6 CB BAG DELEGATE {{{*/
    if(!consumed_by && bag_id)
    {
/*{{{
log("%c"+get_n_lbl(e_target)+" .. bag_id=["+bag_id+"]", lb6);
logXXX("%c bag_id=["+bag_id+"]", lbH+lf8);
}}}*/
        switch( bag_id )
        {
        case "sel_bag"      : t_onClick_1_sel(e_target, bag_id ); consumed_by = bag_id; break;

        case "pat_bag"      :
        case "off_bag"      :
        case "alt_bag"      :
        case "bak_bag"      : t_handle_1_pat_bag    (e_target         ); consumed_by = bag_id; break;

/*{{{
        case "headsup_w"    : t_wording_3_CB         (e_target, "click"); consumed_by = bag_id; break;
}}}*/
        case "headsup_bw"   : t_body_layout_CB      (e_target         ); consumed_by = bag_id; break;
        case "headsup_bz"   : t_body_zoom_CB        (e_target         ); consumed_by = bag_id; break;
        case "headsup_fs"   : t_body_font_size_CB   (e_target         ); consumed_by = bag_id; break;

        case "dom_traversal": if(t_dom_traversal_CB (e_target, "click")) consumed_by = bag_id; break;

        case "dev_log_map"  :
        case "prop_bag"     : if(      prop_tools_CB(e_target)        )  consumed_by = bag_id; break;

        case "fly_div"      : t_fly.t_fly_clr       (e_target         ); consumed_by = bag_id; break;

        default:
if(log_this) log("%c"+caller+"%c ["+bag_id+"] has no delegation from ["+get_n_lbl(e_target)+"]"
                 ,lbL        ,lbH+lf8                                                          );
        break;
        }
    }
    /*}}}*/
    /* 4/6 CB [e_target] {{{*/
    if(!consumed_by)
    {
        if( t_onClick_1_e_target(e_target) )
            consumed_by = "["+e_target.id+"] HANDLER";

    }
    /*}}}*/
    /* 5/6 CB EXTRA [e_target] {{{*/
    if(!consumed_by)
    {
        switch(e_target.id)
        {
        case "pat_sort"            : t_handle_1_pat_bag_sort_cycle(); consumed_by = e_target.id; break;

        case "t_log.console_clear" : t_log.console_clear   (caller); consumed_by = e_target.id; break;

        case "dimm_mask"           : {
            if( !was_a_too_early_last_result() ) {
                dimm_stop(caller);
                if(has_el_class(dimm_mask, "dimm_sticky"))
                    t_sticky.t_sticky_RING_stop("dimm_start");
            }
        }
        consumed_by = e_target.id;
        break;

        case t_data.WORDS_RECYCLE  : t_wording_3_CB    (e_target, "click"); consumed_by = e_target.id; break;
        case t_data.WORDS_BAG_ROT  : t_handle_1_pat_bag(e_target         ); consumed_by = e_target.id; break;
        case t_data.WORDS_FILTER   : t_wording_3_CB    (e_target, "click"); consumed_by = e_target.id; break;

        default:
if(log_this) log("%c"+caller+"%c NO EXTRA HANDLER FOR %c e_target=["+get_n_lbl(e_target)+"]"
            ,     lbL        ,lbR+lf2                ,lbH+lf4                               );
        break;
        }
    }
    /*}}}*/
    /* 6/6 DEFAULT PROP TOGGLE [e_target] {{{*/
    if(!consumed_by && e_target.id)
    {
        consumed_by = prop_id_state_CB(e_target.id, "toggle");
    }
    /*}}}*/
if( log_this) log("%c"+caller+"%c consumed_by "+consumed_by, lbL, lbR+lf3);
};
/*}}}*/
/*➔ t_onClick_1_e_target {{{*/
let t_onClick_1_e_target = function(e_target)
{
/*{{{*/
let   caller = "t_onClick_1_e_target("+get_n_lbl(e_target)+")";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) t_fly.t_log_event_status(caller, lf5);
/*}}}*/
    /* [hotring] {{{*/
    if( e_target.id == "hotring"                           ) { t_move_TOOLS_TOGGLE_GRID(caller); return true; }

    /*}}}*/
    /* is_a_toggle_option {{{*/
    if( is_a_toggle_option(e_target.id)                  ) { prop_id_toggle( e_target.id   );   return true; }

    /*}}}*/
    /* pin .. (has_el_class) {{{*/
    if( has_el_class(e_target, CSS_PUSH_PIN)               ) { t_click_panel_pin_CB(onWork_PANEL, e_target); return true; }
    if( has_el_class(e_target, CSS_CLOSEPIN)               ) { t_click_panel_pin_CB(onWork_PANEL, e_target); return true; }
    if( has_el_class(e_target, CSS_SCALEPIN)               ) { t_click_panel_pin_CB(onWork_PANEL, e_target); return true; }
    if( has_el_class(e_target, CSS_CLEARPIN)               ) { t_click_panel_pin_CB(onWork_PANEL, e_target); return true; }
    /*}}}*/
    /* transcript {{{*/
    if( e_target.id == "transcript1_clearpin"              ) {                                      t_clear_panel_pined_innerHTML(transcript1); return true; }
    if( e_target.id == "transcript2_clearpin"              ) {                                      t_clear_panel_pined_innerHTML(transcript2); return true; }
    if( t_util.is_el_or_child_of_parent_el(e_target, transcript1) ) { if(is_a_dblclick_last_result) t_clear_panel_pined_innerHTML(transcript1); return true; }
    if( t_util.is_el_or_child_of_parent_el(e_target, transcript2) ) { if(is_a_dblclick_last_result) t_clear_panel_pined_innerHTML(transcript2); return true; }

     /*}}}*/
    /* [dom_hide] {{{*/
    if( e_target.id == "dom_hide1_reset"                 ) { t_hide.dom_hide1_reset                ( ); return true; }
    if( e_target.id == "dom_hide2_store_reload"          ) { t_hide.dom_hide2_store_reload         ( ); return true; }
    if( e_target.id == "dom_hide2_store_save"            ) { t_hide.dom_hide2_store_save           ( ); return true; }
    if( e_target.id == "dom_hide4_scroll_to_last_hidden" ) { t_hide.dom_hide4_scroll_to_last_hidden( ); return true; }
    if( e_target.id == "dom_hide5_history_start"         ) { t_hide.dom_hide5_history_start        ( ); return true; }

    if( e_target.id == "dom_hide1_collect_nodes_1"       ) { t_hide.dom_hide1_collect_nodes        (1); return true; }
    if( e_target.id == "dom_hide1_collect_nodes_2"       ) { t_hide.dom_hide1_collect_nodes        (2); return true; }
    if( e_target.id == "dom_hide1_collect_nodes_3"       ) { t_hide.dom_hide1_collect_nodes        (3); return true; }
    if( e_target.id == "dom_hide1_collect_nodes_4"       ) { t_hide.dom_hide1_collect_nodes        (4); return true; }
    if( e_target.id == "dom_hide1_container_clicked"     ) { t_hide.dom_hide1_container_clicked    ( ); return true; }

    /*}}}*/
    /* [dom_grid] .. () {{{*/
    if( e_target.id == "dom_grid_playground"             ) { e_target.firstElementChild .style.display = "initial"; t_grid.t_grid_logging_toggle( true); return true; }
    if( e_target.id == "dom_grid_close_em"               ) { e_target.parentElement     .style.display =    "none"; t_grid.t_grid_logging_toggle(false); return true; }

    /*}}}*/
    if( e_target.id == "details_open"                    ) { t_details.details_open_closed (); return true; }
    if( e_target.id == "details_close"                   ) { t_details.details_close_opened(); return true; }

    return false;
};
/*}}}*/
/*➔ t_onClick_1_sel {{{*/
let t_onClick_1_sel = function(e_target, bag_id)
{
/*{{{*/
let   caller = "t_onClick_1_sel";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) t_fly.t_log_event_status(caller, lf5);
/*}}}*/
    /* [action switch] {{{*/
    let bag_id_is_on_standby
        =   onStandby_PANEL
        && (onStandby_PANEL.id == bag_id) ;

    let action
        =      ( is_a_thumb_el(e_target)) ? "sel_clicked"
        :      ( bag_id_is_on_standby   ) ? "standby_release"
        :                                   "standby"
    ;

if( log_this) log("%c "+caller+": %c bag_id ["+bag_id+"] %c e_target ["+get_n_lbl(e_target)+"] %c action ["+action+"]"
                  , lb1          ,lb2                   ,lb3                                  ,lb4                    );
if( log_this && (LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG))) t_fly.t_log_stage_msg(t_fly.STAGE_2_ACTION, " <em class='cc9'>"+action+"</em>");
    /*}}}*/
    switch(action) {
        case "sel_clicked": /*{{{*/
        {
            /* t_onclick_target_handle_scroll_to_slot_num {{{*/
if(log_this) t_log.log_TR_EVENT_add(".switch <em class='cc1'>"+action+"</em>");

            t_onclick_target_handle_scroll_to_slot_num(e_target, caller);
            /*}}}*/
        }
        break;
        /*}}}*/
        case "standby": /*{{{*/
        {
            /*{{{*/
if(log_this) t_log.log_TR_EVENT_add(".switch <em class='cc1'>"+action+" bag_id ["+bag_id+"]</em>");

            t_standby_bag_id( bag_id );
            /*}}}*/
        }
        break;
        /*}}}*/
        case "standby_release": /*{{{*/
        {
            /*{{{*/
if(log_this) t_log.log_TR_EVENT_add(".switch <em class='cc1'>"+action+" bag_id ["+bag_id+"]</em>");

            if(onStandby_PANEL) t_standby3_release(caller);
            /*}}}*/
        }
        break;
        /*}}}*/
        /* default {{{*/
        default:
        {
logBIG(caller+": default: action=["+action+"] .. bag_id=["+bag_id+"]");
        }
        /*}}}*/
    }
};
/*}}}*/
/*…  is_a_thumb_el {{{ */
let  is_a_thumb_el = function(node)
{
    let caller = "is_a_thumb_el("+get_n_lbl(node)+")";

    let result
        =  node.id.startsWith("thumb_p_")
        || node.id.startsWith("thumb_s_")
        ;

if(result && LOG_MAP.EV0_LISTEN) log(caller+": ...return "+result);
    return result;
};
/* }}} */
/*}}}*/
/** MODE {{{*/
/*{{{*/
let onModalMS = 0;

/*}}}*/
/*➔ t_check_onModalMS {{{*/
let t_check_onModalMS = function(_caller)
{
/*{{{*/
let log_this = !onDown_SHIFT && t_log.logging_something();

/*}}}*/
    /* [in_progress] f(onModalMS) {{{*/
    let in_progress = (onModalMS > 0);
    if(!in_progress )
    {
        onModalMS
            =  t_which_onModal_EL()
            && dimm_mask_displayed()
            ?  new Date().getTime()
            :  0;

    }
    else if( !t_which_onModal_EL() )
    {
        onModalMS = 0;
        in_progress = "interrupted by "+ get_n_lbl(onWork_EL);
    }
    /*}}}*/
/*{{{*/
if( log_this) {
/*{{{
    log_key_val_group("t_check_onModalMS"
                      , {   in_progress
                          , onWork_EL                : get_n_lbl(onWork_EL)
                          , onModal_EL               : t_which_onModal_EL()
                          , dimm_mask_displayed      : dimm_mask_displayed()
                          , onModalMS
                          , ellapsed                 : (onModalMS ? (parseInt((new Date().getTime() - onModalMS) / 100) / 10)+"s" : t_data.SYMBOL_CHECK_MARK)
                      }
                      , lf8
                      , false);
}}}*/
    if(     in_progress ) log("%c "+t_data.SYMBOL_CHECK_MARK+" MODAL DIALOG IN PROGRESS FOR "+ (parseInt((new Date().getTime() - onModalMS) / 100) / 10)+"s", lbH+lf7);
    else if(  onModalMS ) log("%c "+t_data.SYMBOL_CHECK_MARK+" MODAL DIALOG OPENED BY %c "+ _caller                                                         , lbH+lf7, lbH+lf7);
    else                  log("%c "+t_data.SYMBOL_CHECK_MARK+" MODAL DIALOG NOT OPENED BY %c "+_caller                                                      , lbH+lf8, lbH+lf8);
}
/*}}}*/
};
/*}}}*/
/*➔ t_clear_onModalMS {{{*/
let t_clear_onModalMS = function(_caller)
{
/*{{{*/
let   caller = "t_clear_onModalMS";
let log_this = !onDown_SHIFT && t_log.logging_something();

/*}}}*/
if( log_this) log(caller+":%c "+t_data.SYMBOL_CHECK_MARK+" MODAL TIMER CLEARED BY "+_caller, lbH+lf5);

    onModalMS = 0;
};
/*}}}*/
/*➔ t_which_onModal_EL {{{*/
let t_which_onModal_EL = function()
{
    return                                     onWork_EL
        && (     t_seek.t_seeker_is_seeker_PU( onWork_EL)
            || ( hotring                    == onWork_EL)
            || ( dimm_mask                  == onWork_EL)
            || ( div_slot_containers        == onWork_EL)
           )
        ?   onWork_EL.id
        :   false
    ;
};
/*}}}*/
/*}}}*/
/** INPUT {{{*/
/*  t_window_2_keyup_CB {{{*/
let t_window_2_keyup_CB = function(e)
{
    t_input_2_CB(e, "window");
};
/*}}}*/
/*_ t_input_2_CB {{{*/
let t_input_2_CB = function(e, listener_tag="input")
{
/*{{{*/
let e_target = t_get_event_target(e);
let   caller = "t_input_2_CB";
let log_this = LOG_MAP.EV0_LISTEN;

if( log_this) log(caller+"("+e.type+", "+listener_tag+"): on "+get_n_lbl(e_target));
if( log_this) t_log.console_dir(e.type+t_data.SYMBOL_RIGHT_ARROW+"target", e.target);
/*}}}*/

    switch(e.type)
    {
    case "keydown" : t_input_2_handle(e, e_target, listener_tag); break;
    case "keyup"   : t_input_2_handle(e, e_target, listener_tag); break;
    case "change"  : {
        if     ( t_util.is_el_or_child_of_parent_el(e_target, headsup_w    ) ) t_wording_3_CB    (e_target, e.type);
        else if( t_util.is_el_or_child_of_parent_el(e_target, dom_traversal) ) t_dom_traversal_CB(e_target, e.type);
    }
    break;
    default:
    }

};
/*}}}*/
/*_ t_input_2_handle {{{*/
/*{{{*/
/*{{{
const CHAR_CODE_A         = 65;
const CHAR_CODE_B         = 66;
const CHAR_CODE_C         = 67;
}}}*/
const CHAR_CODE_F         = 70;

const CHAR_CODE_ESC       = 27;
const CHAR_CODE_RETURN    = 13;

const CHAR_CODE_BACKSPACE =  8;
const CHAR_CODE_SHIFT     = 16;
const CHAR_CODE_CONTROL   = 17;
const CHAR_CODE_ALT       = 18;
const CHAR_CODE_LEFT      = 37;
const CHAR_CODE_UP        = 38;
const CHAR_CODE_RIGHT     = 39;
const CHAR_CODE_DOWN      = 40;
const CHAR_CODE_DELETE    = 46;

let modifiers = {};
/*}}}*/
let t_input_2_handle = function(e, e_target, listener_tag)
{
/*{{{*/
let   caller = "t_input_2_handle";
let log_this = LOG_MAP.EV0_LISTEN;

let charCode = (e.keyCode) ? e.keyCode : e.which;

/*{{{
if(log_this) log(caller+"("+e.type+", "+listener_tag+"): on "+get_n_lbl(e_target)+" .. charCode=["+charCode+"]");
}}}*/
/*}}}*/
/*{{{
:new C:/LOCAL/GAMES/IVANWFR/INPUT/Truly_Ergonomic/trulyergonomic/javascripts/layout.js
}}}*/
    /* entering a new event-chain {{{*/
    t_clr_has_moved(caller);

    /*}}}*/
    /* MODIFIERS DOWN-UP {{{*/
    if(e.type == "keydown")
    {
        switch(charCode) {
        case CHAR_CODE_SHIFT     : if(log_this && !modifiers.shift  ) log("%c   SHIFT DOWN",lbH+lf6); modifiers.shift   = true; break;
        case CHAR_CODE_CONTROL   : if(log_this && !modifiers.control) log("%c CONTROL DOWN",lbH+lf2); modifiers.control = true; break;
        case CHAR_CODE_ALT       : if(log_this && !modifiers.alt    ) log("%c     ALT DOWN",lbH+lf4); modifiers.alt     = true; break;
        }
    }
    if(e.type == "keyup")
    {
        switch(charCode) {
        case CHAR_CODE_SHIFT     : if(log_this &&  modifiers.shift  ) log("%c   SHIFT UP"  ,lbH+lf6); modifiers.shift   = false; return;
        case CHAR_CODE_CONTROL   : if(log_this &&  modifiers.control) log("%c CONTROL UP"  ,lbH+lf2); modifiers.control = false; return;
        case CHAR_CODE_ALT       : if(log_this &&  modifiers.alt    ) log("%c     ALT UP"  ,lbH+lf4); modifiers.alt     = false; return;
        }
    }
    /*}}}*/
    /* KEY UP IGNORED {{{*/
    if(e.type != "keyup")
    {
        return;

    }
    /*}}}*/
    /* FOCUS .. document.activeElement .. shadow_root.activeElement {{{*/
t_preventDefault(e, caller);
/*{{{
log("%c............document.activeElement = ["+ get_n_lbl(    document.activeElement) +"]", lf4);
log("%c.........shadow_root.activeElement = ["+ get_n_lbl( shadow_root.activeElement) +"]", lf5);
}}}*/

    if(         shadow_root.activeElement && (document.activeElement && (document.activeElement != shadow_host))) {
/*{{{
log("%c.t_blur(    document.activeElement ) .. DEL DOCUMENT FOCUS", lbH+lf4);
}}}*/
        t_blur(    document.activeElement );
    }

    if(         shadow_root.activeElement ) {
/*{{{
log("%c.t_focus(shadow_root.activeElement ) .. SET TOOLS    FOCUS", lbH+lf5);
}}}*/
        t_focus(shadow_root.activeElement );
    }

    /*}}}*/
    switch(charCode) {
    /* [IGNORE KEYS] {{{*/
    case CHAR_CODE_BACKSPACE : if(log_this                      ) log("%c BACKSPACE %c IGNORED",lbL,lbR+lf2); break;
    case CHAR_CODE_LEFT      : if(log_this                      ) log("%c LEFT      %c IGNORED",lbL,lbR+lf2); break;
    case CHAR_CODE_RIGHT     : if(log_this                      ) log("%c RIGHT     %c IGNORED",lbL,lbR+lf2); break;
    case CHAR_CODE_DELETE    : if(log_this                      ) log("%c DELETE    %c IGNORED",lbL,lbR+lf2); break;
/*{{{
    case CHAR_CODE_UP        : if(log_this                      ) log("%c UP        %c IGNORED",lbL,lbR+lf2); break;
    case CHAR_CODE_DOWN      : if(log_this                      ) log("%c DOWN      %c IGNORED",lbL,lbR+lf2); break;
}}}*/
    /*}}}*/
    /* [CTRL-SHIFT-F] .. [FIND IN PAGE] {{{*/
    case CHAR_CODE_F:
if( log_this) log("%c type=["+e.type+"] e_target=["+e_target+"] modifiers "+t_log.log_json(modifiers), lbH+lf3);
    if(modifiers.control && modifiers.shift && words_filter_input)
    {
if( log_this) log("%c CTRL F %c FIND IN PAGE",lbL,lbR+lf2);

        let map = t_tools_map_get(headsup_w);
        if( map ) {
            if(!map.selected)
            {
if( log_this) log("%c SELECTING [headsup_w]", lbH+lf4);

                t_grid.t_grid_TOOLS_SELECT_panel(headsup_w, true);
                t_set_CSS_PINNED(headsup_w, true);
                t_grid_TOOLS_MAP_changed();

                let xy = t_gutter.get_GUTTER_XY();
                if( xy ) t_tools_set_top_xy(xy.x, xy.y);

                set_onWork_EL_last_used(words_filter_input);

                let sel_text = t_get_current_sel_text() || onDown_SEL_TEXT;
                if( sel_text ) words_filter_input.value = sel_text;

                t_focus(       words_filter_input);

                t_preventDefault(e, caller);
            }
            else if( headsup_w.classList.contains(t_data.CSS_PINNED) )
            {
if( log_this) log("%c DESELECTING [headsup_w]", lbH+lf8);

                t_tools_panel_select(headsup_w, false);
                t_grid_TOOLS_MAP_changed();

                t_preventDefault(e, caller);
            }
        }
    }
    break;
    /*}}}*/
    /* [ESCAPE] .. [UNDO CHANGES] {{{*/
    case CHAR_CODE_ESC:
    if(listener_tag == "input") {
if( log_this) log("%c ESCAPE %c ESCAPE CURRENT STATE",lbL,lbR+lf2);

        e_target.value = e_target.value_set ? e_target.value_set : "";

        if( t_ESCAPE_2_CURRENT_STATE() )
            t_preventDefault(e, caller);
    }
    break;
    /*}}}*/
    /* [RETURN] .. [SUBMIT] {{{*/
    case CHAR_CODE_RETURN:
    if(listener_tag == "input") {
if( log_this) log("%c RETURN %c SUBMIT",lbb+lbL,lbb+lbR+lf2);

        if(log_this)
            t_fly.t_log_transcript_event_top("<em class='cc8'>"+caller+"</em>"
                +                      " e_target "+e_target.id+" <em class='cc9'>"+e_target.value+"</em>");

        t_wording_3_CB(e_target, "submit");

        t_focus( e_target );
        if(      e_target.value ) {
            e_target.selectionStart = e_target.value.length-1;
            e_target.selectionEnd   = e_target.value.length;
        }

        t_preventDefault(e, caller);
    }
    break;
    /*}}}*/
/*{{{
    default:
    if     (e_target.id == "words_node_input"  ) t_set_id_class_on_off(e_target.id, "focussed", (e_target.value != tools_node  ));
    else if(e_target.id == "words_filter_input") t_set_id_class_on_off(e_target.id, "focussed", (e_target.value != tools_filter));
}}}*/
    }
    /* [CTRL UP-DOWN] .. (keyboard shortcut to navigate all patterns csv) {{{*/
    if(modifiers.control && !modifiers.shift)
    {
        if(listener_tag == "input")
        {
            switch( charCode ) {
            case CHAR_CODE_UP   : set_tools_filter_from_all_csv_dir(-1); break;
            case CHAR_CODE_DOWN : set_tools_filter_from_all_csv_dir(+1); break;
            }
            t_preventDefault(e, caller);
        }
    }
    /*}}}*/
    /* keep some content to focus into {{{*/
    if( !e_target.innerHTML ) {
        e_target.innerHTML = "&nbsp;";
if( log_this) log("%c...keep some content to focus into", lf7);
    }
    /*}}}*/
};
/*}}}*/
/*_ t_input_2_focus_words_filter_input {{{*/
let t_input_2_focus_words_filter_input = function()
{
/*{{{*/
let   caller = "t_input_2_focus_words_filter_input";
let log_this = LOG_MAP.EV0_LISTEN;

if(log_this) log(caller);
/*}}}*/
    let map = t_tools_map_get(headsup_w);
    if( map && map.selected) {
/*{{{
        post_focus_to( words_filter_input );
}}}*/
        t_focus( words_filter_input );
    }
    else {
if(log_this) log("[words_filter_input] OFF SCREEN");
    }
};
/*}}}*/
/*_   set_tools_filter_from_all_csv_dir {{{*/
let                         all_csv_idx = 0;
let   set_tools_filter_from_all_csv_dir = function(dir)
{
let   caller = "set_2_tools_filter_from_all_csv_dir("+dir+")";
let log_this = LOG_MAP.EV0_LISTEN;

    let all_csv = t_util.csv_cat(pat_csv, off_csv);
    all_csv     = t_util.csv_cat(all_csv, bak_csv);
    all_csv     = t_util.csv_cat(all_csv, alt_csv);
    all_csv     = t_util.csv_cat(all_csv, bin_csv);

    let count   = t_util.csv_count(all_csv);
    if(!count) return;

    all_csv_idx = (all_csv_idx + dir + count) % count; /* rewind */
    let pattern = t_util.csv_get(all_csv, 1+all_csv_idx);

if(log_this)
    log_key_val_group( caller
                       , {         count
                           , all_csv_idx
                           ,     pattern
                       }
                       , lf3, false
                     );
if(log_this && t_util.csv_pos(bin_csv,pattern)) log("...from bin_csv: ["+pattern+"]");

    set_tool_id_value(t_data.WORDS_FILTER, t_pattern_del_words_option_sfx( pattern ));
};
/*}}}*/
/*_ t_ESCAPE_2_CURRENT_STATE {{{*/
let t_ESCAPE_2_CURRENT_STATE = function()
{
/*{{{*/
let   caller = "t_ESCAPE_2_CURRENT_STATE";
let log_this = LOG_MAP.EV0_LISTEN;

if( log_this) log(caller);
    let consumed_by = "";
/*}}}*/
    /* TOOLS ON GRID {{{*/
    if( call_t_grid_IS_ON_GRID() )
    {
        consumed_by ="ESCAPE FROM TOOLS ON GRID";

        t_move_TOOLS_OFF_GRID("ESCAPE");
    }
    /*}}}*/
    /* SLOT CONTAINERS DISPLAYED {{{*/
    if(!consumed_by && div_slot_containers_displayed())
    {
/*{{{
log("...div_slot_containers.className=["+div_slot_containers.className+"]")
}}}*/
        if( has_el_class(div_slot_containers, CSS_FULLSCREEN))
        {
            consumed_by = "ESCAPE SLOT CONTAINERS FULLSCREEN";

            t_slot_container_set_fullscreen();
        }
        else {
            consumed_by = "ESCAPE SLOT CONTAINERS DISPLAYED";

            dom_scroll.t_window_scrollTo(0, onDown_SCROLL_XY.y);
            dimm_stop( caller );
        }
    }
    /*}}}*/
    /* STICKY {{{*/
    if(!consumed_by && t_sticky.t_sticky_EDIT_DONE())
    {
        consumed_by ="ESCAPE STICKY RELEASED FOCUS";

    }
    /*}}}*/
    /* NOTHING TO ESCAPE FROM {{{*/
    if(!consumed_by) {
/*{{{
        t_log.console_clear("NOTHING TO ESCAPE FROM");
}}}*/

if( log_this) t_fly.t_log_event_status(caller, lf4);

        if(onWork_EL_last_used == words_filter_input)
        {
            let xy = t_gutter.get_GUTTER_XY();
            if( xy ) t_tools_set_top_xy(xy.x, xy.y);
        }
    }
    /*}}}*/
if( log_this) log("%c"+caller+": %c"+consumed_by, lbH+lf4, lbH+lf4);
    return consumed_by;
};
/*}}}*/
/*}}}*/
/** WORDING {{{*/
/*_ t_wording_3_CB {{{*/
/*{{{*/
const T_WORDING_3_CB_DELAY =  100;

let t_wording_3_CB_timout;
/*}}}*/
let t_wording_3_CB         = function(e_target, action)
{
    if(t_wording_3_CB_timout) clearTimeout(t_wording_3_CB_timout);
    t_wording_3_CB_timout
        = setTimeout( function() { t_wording_3_CB_handler(e_target, action); }
                    , T_WORDING_3_CB_DELAY);

};
/*}}}*/
/*_ t_wording_3_CB_handler {{{*/
let t_wording_3_CB_handler = function(e_target, action)
{
    /* [has_moved] {{{*/
let   caller = "t_wording_3_CB_handler";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) log_key_val_group(caller+" .. "+get_n_lbl(e_target)+" .. "+action
                          , { e_target
                            , action
                            , has_moved
                            , t_event_consumed_cause
                          }, lf3, true);

    t_wording_3_CB_timout = null;
    if( has_moved ) return;
/*}}}*/
    /* INPUT .. (cool down on submit) {{{*/
    if(e_target) del_el_class(e_target, CSS_FOCUSSED);

    /*}}}*/
    /* INPUT .. [t_data.WORDS_OPCYCLE] {{{*/
    if(e_target && (e_target.tagName == "INPUT"))
    {
if(log_this) log("...words_filter_input.value=["+words_filter_input.value+"]");

        switch(action)
        {
        /* case submit : keyup (t_data.WORDS_OPCYCLE) {{{*/
        case "submit":
        {
if(log_this) log("...%c case ACTION "+action+":", lf3);

            let slot = t_slot.get_slot_matching_pattern( words_filter_input.value );
            if(      prop.get( t_data.WORDS_OPCYCLE ) )
            {
                /* CYCLE-RE-SELECT {{{*/
                if( slot ) {
if(log_this) log("%c WORDS OPTIONS CYCLE SLOT ["+slot+"]",lb6);
                    t_slot.t_clear_slot(slot);
                    t_select.t_onPatternUpdate("CLEARING SLOT <em>"+ slot +"</em>", caller);
                    words_option_cycle();
                    t_call_dom_traversal();
                    return;
                }
                /*}}}*/
                /* CYCLE-FRESH-SELECT {{{*/
                else {
if(log_this) log("%c WORDS OPTIONS CYCLE FRESH-SELECT",lb7);
                    t_call_dom_traversal();
                    return;
                }
                /*}}}*/
            }
            else if(slot)
            {
if(log_this) log("%c CLEAR SELECTION SLOT ["+slot+"]",lb3);

                clear_clicked_slot( slot );
                return;
            }
            /* FRESH-SELECT {{{*/
            else {
if(log_this) log("%c WORDS NEW-SELECT",lb4);

                t_call_dom_traversal();
                return;
            }
            /*}}}*/
        }
        break; /* eslint-disable-line no-unreachable */
         /*}}}*/
        /* case click : (ignored) {{{*/
        case "click":
        {
if(log_this) log("...%c case ACTION "+action+":", lf3);

            words_filter_input.selectionEnd   = words_filter_input.value.length;
            words_filter_input.selectionStart = 0;
            t_focus( words_filter_input );
            return;
        }
        break; /* eslint-disable-line no-unreachable */
        /*}}}*/
        }
    }
    /*}}}*/
    /* [tools_filter] [words_recycle] [words_exact words_segment words_head_tail] {{{*/
    let    keyword;
    if(   !keyword) try { keyword =                       e_target.id;                   } catch(ex) {}
    if(   !keyword) try { keyword = t_util.get_first_word(e_target.textContent, caller); } catch(ex) {}
    if(   !keyword)       keyword = action;


    switch(keyword) {
        /* tools_filter {{{*/
        case t_data.WORDS_FILTER:
        {
if(log_this) log("...%c case "+keyword+":", lf3);

            if( e_target.id != t_data.WORDS_FILTER) { /* sync tool */
                let pattern  = t_pattern_del_words_option_sfx( e_target.value );
                set_tool_id_value(t_data.WORDS_FILTER, pattern);
            }

            if(e_target) del_el_class(e_target, CSS_FOCUSSED);

/*{{{
            let msg    = "<em class='big'>CHANGED FILTER</em> : <em>"+ e_target.value +"</em>";
if(e_target && log_this) t_log.log_TR_SELECT_add(msg);

            t_call_dom_traversal();
}}}*/
        }
        break;
        /*}}}*/
        /*   t_data.WORDS_RECYCLE {{{*/
        case t_data.WORDS_RECYCLE:
        {
            wording_3_CB_WORDS_RECYCLE(log_this);

        }
        break;
        /*}}}*/
        /* WORDS[EXACT..SEGMENT..HEAD_TAIL] .. DROP[CASE..ING..S] {{{*/
        case t_data.WORDS_EXACT     :
        case t_data.WORDS_SEGMENT   :
        case t_data.WORDS_HEAD_TAIL :
        case t_data.WORDS_DROP_CASE :
        case t_data.WORDS_DROP_ING  :
        case t_data.WORDS_DROP_S    :
        {
if(log_this) log("...%c case "+keyword+":", lf3);
            let slot = t_slot.get_slot_matching_pattern( words_filter_input.value );
            if( slot ) {
if(log_this) log("...%c SLOT ["+slot+"]",lb6);
                t_slot.t_clear_slot(   slot );
                t_select.t_onPatternUpdate("CLEARING SLOT <em>"+ slot +"</em>", caller);
            }
            t_call_dom_traversal();
        }
        break;
        /*}}}*/
        /* default .. (ignore when traversal params unchanged) {{{*/
        case "no_keyword"  :
        default:
        {
if(log_this) log("...default: %c keyword=["+keyword+"]", lf3);

        }
        /*}}}*/
    }
    /*}}}*/
    t_cache_armed_by(caller);
};
/*}}}*/
/*_   wording_3_CB_WORDS_RECYCLE_next_action {{{*/
let   wording_3_CB_WORDS_RECYCLE_next_action = function(log_this)
{
/*{{{*/
let caller = "wording_3_CB_WORDS_RECYCLE_next_action";

/*}}}*/

    let all_csv = t_util.csv_cat(pat_csv, off_csv);
    all_csv     = t_util.csv_cat(all_csv, alt_csv);
    all_csv     = t_util.csv_cat(all_csv, bak_csv);
/*{{{
    all_csv     = t_util.csv_cat(all_csv, bin_csv);
}}}*/

    /* CHECK CURRENT STATE */
    let    sel_count = t_util.csv_count(sel_csv);
    let    all_count = t_util.csv_count(all_csv);
    let sticky_count = t_sticky.t_sticky_GET_COUNT();

    /* DECIDE ACTION */
    let action1_hide_sel        = (   sel_count > 0);
    let action2_dump_all_csv    = (   all_count > 0) && !action1_hide_sel;
    let action3_dump_all_sticky = (sticky_count > 0) && !action1_hide_sel && !action2_dump_all_csv;

    let   action0_tooltip
        = action1_hide_sel        ? "Click to hide "   + sel_count+" of "+all_count +" word"+((sel_count   >1) ? "s":"")
        : action2_dump_all_csv    ? "Click to remove "+                   all_count +" word"+((all_count   >1) ? "s":"")
        : action3_dump_all_sticky ? "Click to unpin "  +               sticky_count +" note"+((sticky_count>1) ? "s":"")
        :                           ""
    ;

    let   action0_result
        = action1_hide_sel        ? sel_count+" of "+all_count +" word"+((all_count   >1) ? "s":"")+" hidden"
        : action2_dump_all_csv    ?                  all_count +" word"+((all_count   >1) ? "s":"")+" removed"
        : action3_dump_all_sticky ?               sticky_count +" note"+((sticky_count>1) ? "s":"")+" unpinned"
        :                           ""
    ;

/*{{{*/
if( log_this) {
    let lfx
        =   action3_dump_all_sticky ? lf3
        :   action2_dump_all_csv    ? lf2
        :   action1_hide_sel        ? lf1
        :                             lf8
    ;

    log_key_val_group(caller+" "+(action0_tooltip || "NOTHING TO DO")
                         , {      action0_tooltip
                             ,    action1_hide_sel
                             ,    action2_dump_all_csv
                             ,    action3_dump_all_sticky
                             ,    action0_result
                         }
                         , lbb+lfx, true);
}
/*}}}*/

    return { action0_tooltip
        ,    action1_hide_sel
        ,    action2_dump_all_csv
        ,    action3_dump_all_sticky
        ,    action0_result
    };

};
/*}}}*/
/*…   wording_3_CB_WORDS_RECYCLE {{{*/
let   wording_3_CB_WORDS_RECYCLE = function(log_this)
{
    let action = wording_3_CB_WORDS_RECYCLE_next_action(log_this);

    /* TAKE ACTION */
    if( action.action1_hide_sel        ) pat_bag5_hide_sel();
    if( action.action3_dump_sel        ) wording_3_CB_WORDS_RECYCLE_SYNC_NOW("DUMP SEL");

    if( action.action2_dump_all_csv    ) t_pat_bag3_dump_all_csv();
    if( action.action3_dump_all_csv    ) wording_3_CB_WORDS_RECYCLE_SYNC_NOW("DUMP ALL");

    if( action.action3_dump_all_sticky ) t_sticky.t_sticky_unpin_all();
    if( action.action3_dump_all_sticky ) wording_3_CB_WORDS_RECYCLE_SYNC_NOW("DUMP STICKY");

    /* SHOW ACTION TOOLTIP {{{*/
    if( words_filter_input )
    {
        let pattern = t_pattern_del_words_option_sfx( action.action0_result );
        set_tool_id_value(t_data.WORDS_FILTER, pattern);

        if( action.action0_tooltip )
        {
            words_filter_input.selectionStart = 0;
            words_filter_input.selectionEnd   = words_filter_input.value.length;
            t_focus( words_filter_input );
        }
    }
    /*}}}*/
};
/*}}}*/
/*…   wording_3_CB_WORDS_RECYCLE_SYNC {{{*/
/*{{{*/
const WORDING_3_CB_WORDS_RECYCLE_SYNC_DELAY = 2000;

let   wording_3_CB_WORDS_RECYCLE_SYNC_timer;
/*}}}*/
let   wording_3_CB_WORDS_RECYCLE_SYNC_NOW = function(_caller)
{
/*{{{
logBIG("wording_3_CB_WORDS_RECYCLE_SYNC_NOW: .. CALLED BY "+_caller, lf4);
}}}*/

    wording_3_CB_WORDS_RECYCLE_SYNC(0);
};
let   wording_3_CB_WORDS_RECYCLE_SYNC = function(delay=WORDING_3_CB_WORDS_RECYCLE_SYNC_DELAY)
{
    if(!delay &&     wording_3_CB_WORDS_RECYCLE_SYNC_timer)
        clearTimeout(wording_3_CB_WORDS_RECYCLE_SYNC_timer);

    wording_3_CB_WORDS_RECYCLE_SYNC_timer
        = setTimeout(wording_3_CB_WORDS_RECYCLE_SYNC_handler, delay);
};
/*}}}*/
/*…   wording_3_CB_WORDS_RECYCLE_SYNC_handler {{{*/
let   wording_3_CB_WORDS_RECYCLE_SYNC_handler = function()
{
/*{{{*/
let caller = "wording_3_CB_WORDS_RECYCLE_SYNC_handler";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) t_fly.t_log_event_status(caller, lbb+lf3);
/*}}}*/
    wording_3_CB_WORDS_RECYCLE_SYNC_timer = null;

    /* NEXT CLICK ACTION */
    let action = wording_3_CB_WORDS_RECYCLE_next_action(log_this);

    /* COLOR */
    let words_recycle = prop.get_EL(t_data.WORDS_RECYCLE);
    if(!words_recycle ) return;

    t_util.set_el_caption(words_recycle , action.action0_tooltip);

    words_recycle.innerText             = action.action3_dump_all_sticky ? t_data.SYMBOL_STICKY_PEN
        :                                 action.action2_dump_all_csv    ? t_data.SYMBOL_HEAVY_BALLOT
        :                                 action.action1_hide_sel        ? t_data.SYMBOL_CLEAR_SCREEN
        :                                                                  t_data.SYMBOL_ELLIPSIS;

    set_el_class_removing(words_recycle , action.action3_dump_all_sticky ? "cc3"
                          :               action.action2_dump_all_csv    ? "cc2"
                          :               action.action1_hide_sel        ? "cc1"
                          :                                                "cc8"
                          ,                                                t_data.CCX_CLASSLIST);

/*{{{FIXME i18n
t_i18n.i18n_get(t_i18n.STORED_PATTERNS)
t_i18n.i18n_get(t_i18n.WORDS_RECYCLE_CLICK_TO_DISCARD);
t_i18n.i18n_get(t_i18n.WORDS_RECYCLE_CLICK_TO_HIDE   );
}}}*/
};
/*}}}*/
/*}}}*/
/** SELECTION {{{*/
/*{{{*/
const SEL_TEXT_TIC_TOC_INTERVAL =  250;
const SEL_TEXT_UNCHANGED_COUNT  =   20;

let          sel_text_unchanged_count;
let     last_sel_text;
let get_last_sel_text = function(    ) { return last_sel_text;        };
let set_last_sel_text = function(text) { return last_sel_text = text; };
/*}}}*/
/*…   tic_SELECTION_PROGRESS {{{*/
let   tic_SELECTION_PROGRESS = function()
{
/*{{{
if(sel_text_unchanged_count != SEL_TEXT_UNCHANGED_COUNT) log("%c SELECTION STARTING: %c"+sel_text_unchanged_count, lbH,lbb+lbH+lfX[sel_text_unchanged_count]);
}}}*/
    /* STARTING */
    sel_text_unchanged_count                      = SEL_TEXT_UNCHANGED_COUNT;
    t_util.flip_el_class(        document.documentElement,  t_data.CSS_SELECTION_PROGRESS );
    del_el_class (        document.documentElement,  t_data.CSS_SELECTION_ENDING   );
};
/*}}}*/
/*…   toc_SELECTION_PROGRESS {{{*/
let   toc_SELECTION_PROGRESS = function()
{
    /* NOT STARTED YET */
    if(sel_text_unchanged_count == 0)
    {
        tic_SELECTION_PROGRESS();
        return sel_text_unchanged_count;
    }
    /* STEADY COUNT */
    sel_text_unchanged_count          -= 1;

    /* ENDING (flip x3) */
    if(sel_text_unchanged_count > 6)
    {
        t_util.flip_el_class(    document.documentElement,  t_data.CSS_SELECTION_PROGRESS );
    }
    else {
        del_el_class (    document.documentElement,  t_data.CSS_SELECTION_PROGRESS );
        t_util.flip_el_class(    document.documentElement,  t_data.CSS_SELECTION_ENDING   );
    }

/*{{{
log("%c SELECTION PROGRESS: %c"+sel_text_unchanged_count, lbH,lbb+lbH+lfX[sel_text_unchanged_count]);
log("%c body.className=["+document.documentElement.className+"]", lbH+lf6);
}}}*/
    return sel_text_unchanged_count;
};
/*}}}*/
/*…   clr_SELECTION_PROGRESS {{{*/
let   clr_SELECTION_PROGRESS = function(_caller, log_this=false)
{
if(log_this) t_log.logSD9("%c clr_SELECTION_PROGRESS %c"+_caller, lbb+lbL+lf0,lbb+lbR+lf0);

    /* CLEARING */
    del_el_class(         document.documentElement,   t_data.CSS_SELECTION_PROGRESS  );
    del_el_class(         document.documentElement,   t_data.CSS_SELECTION_ENDING    );

/*{{{
if(sel_text_unchanged_count != SEL_TEXT_UNCHANGED_COUNT) log("%c SELECTION CLEAR %c"+sel_text_unchanged_count, lbH,lbb+lbH+lfX[sel_text_unchanged_count]);
}}}*/
    sel_text_unchanged_count           = 0;
    if( onLong_press4_TOOL_STICKY_SEL_TEXT_timer ) clearInterval( onLong_press4_TOOL_STICKY_SEL_TEXT_timer );
        onLong_press4_TOOL_STICKY_SEL_TEXT_timer = null;
};
/*}}}*/
/*➔   get_SELECTION_PROGRESS {{{*/
let   get_SELECTION_PROGRESS = function()
{
    return (sel_text_unchanged_count / SEL_TEXT_UNCHANGED_COUNT);
};
/*}}}*/
/*}}}*/
/** CB {{{*/
/*  DOC  CB {{{*/
/*_ t_body_width_show {{{*/
let t_body_width_show = function()
{
    let panel = t_get_tool("headsup_bw_value"); if(!panel) return;
    let     m = parseInt( document.body.style.marginLeft );
    let     w = parseInt( document.body.clientWidth      )
        -                 document.body.clientLeft          /* borders */
        ;
    if( isNaN(m) ) m = 0;
    if( isNaN(w) ) w = 0;

    panel.innerHTML = "BODY "
        +" <em class='cc1' title='Body   style.marginLeft'      >"+ t_data.SYMBOL_LEFT_HALF_BLACK     +" "+ m   +"</em>"
        +" <em class='cc2' title='Body   clientWidth clientLeft'>"+ t_data.SYMBOL_BLACK_SMALL_SQUARE  +" "+ w   +"</em>"
        +" <em class='cc3' title='Window innerWidth'            >"+ t_data.SYMBOL_BLACK_MEDIUM_SQUARE +" "+ w_W +"</em>"
    ;
    t_eval_wide_or_tall_panel( panel );
};
/*}}}*/
/*_ t_body_layout_CB {{{*/
let t_body_layout_CB = function(e_target)
{
/*{{{*/
let   caller = "t_body_layout_CB("+get_n_lbl(e_target)+")";
let log_this = LOG_MAP.EV0_LISTEN || LOG_MAP.EV5_TOOL_CB;

if( log_this) t_fly.t_log_event_status(caller, lf7);

    if( has_moved                                ) return;
    if( e_target.tagName != "EM"                 ) return;
/*}}}*/

    let body_width = parseInt( e_target.innerText.trim() );
if( log_this) log("...body_width=["+body_width+"]");

    if(!isNaN(body_width) ) {
        body_width -= 2 * document.body.clientLeft; /* left and right borders */
/*{{{
        let   m =    (w_W - body_width) / 2;
        document.body.style.marginLeft  = m+"px";
        document.body.style.width       = body_width+"px";
        let style = getComputedStyle( document.body );
        document.body.setAttribute("style", style +"; width: "+ body_width +"px !important");
}}}*/
        document.body.style.width       = body_width+"px";
    }
    else {
        document.body.style.width       = ""/*"initial"*/;
    }

    t_layout_changed();
};
/*}}}*/

/*_ t_body_zoom_CB {{{*/
/*{{{*/
let   body_zoom_percent = 100;

/*}}}*/
let t_body_zoom_CB = function(e_target)
{
/*{{{*/
    let caller   = "t_body_zoom_CB("+get_n_lbl(e_target)+")";
let log_this = LOG_MAP.EV0_LISTEN || LOG_MAP.EV5_TOOL_CB;

if( log_this) t_fly.t_log_event_status(caller, lf7);

    if(has_moved                                 ) return;
    if(e_target.tagName != "EM"                  ) return;
/*}}}*/

    let old_page_height = t_util.getPageHeight();

    /* [body_zoom_percent] {{{*/
    body_zoom_percent = parseInt( e_target.innerText.trim() );
if( log_this) log("...body_zoom_percent=["+body_zoom_percent+"]");

    if( !isNaN(body_zoom_percent) )
    {
        let className = "zoom_"+body_zoom_percent;
        set_el_class(document.body , className);
    }
    else {
        body_zoom_percent          = 100 ;
        set_el_class(document.body ,  "");
        set_el_class(dom_tools_html,  "");
    }
    /*}}}*/

    let new_page_height = t_util.getPageHeight();

    let    s_X = Math.floor(window.scrollX);
    let    s_Y = Math.floor(window.scrollY * new_page_height / old_page_height);
/*{{{*/
if( log_this) {
    log_key_val_group( caller
                       , {            WINDOW : window.innerHeight +" "+ window.innerWidth
                           ,          SCROLL : window.scrollX     +" "+ window.scrollY
                           ,         s_X_s_Y :                s_X +" "+ s_Y
                           , old_page_height
                           , new_page_height
                       }, lf1, false
                     );

}
/*}}}*/
    s_X /= (body_zoom_percent  / 100);
    s_Y /= (body_zoom_percent  / 100);
    dom_scroll.t_window_scrollTo(s_X, s_Y, "instant");

    t_layout_changed();

/*{{{ to update selection thumbs .. OBSOLETE!
    pat_bag3_reselect();
}}}*/
};
/*}}}*/
/*_ t_body_zoom_show {{{*/
let t_body_zoom_show = function()
{
    let panel = t_get_tool("headsup_bz_value"); if(!panel) return;

    let zoom_class = document.body.className  ? "cc2" : "cc8";

    let zoom_label
        =  document.body.className.includes("zoom")
        ?  document.body.className
        : (document.body.style.zoom || "default");

    panel.innerHTML = "BODY zoom factor <em class='"+zoom_class+"'>"+zoom_label+"</em>";

    t_eval_wide_or_tall_panel( panel );
};
/*}}}*/

/*_ t_body_font_size_CB {{{*/
/*{{{*/
let   body_font_size_percent = 100;

/*}}}*/
let t_body_font_size_CB = function(e_target)
{
/*{{{*/
    let caller   = "t_body_font_size_CB("+get_n_lbl(e_target)+")";
let log_this = LOG_MAP.EV0_LISTEN || LOG_MAP.EV5_TOOL_CB;

if( log_this) t_fly.t_log_event_status(caller, lf7);

    if(has_moved                                 ) return;
    if(e_target.tagName != "EM"                  ) return;
/*}}}*/
    /* [body_font_size_percent] {{{*/
/*{{{
    let old_page_height = t_util.getPageHeight();
}}}*/
    body_font_size_percent = parseInt( e_target.innerText.trim() );
if( log_this) log("...body_font_size_percent=["+body_font_size_percent+"]");

    if( !isNaN(body_font_size_percent) )
    {
        /* BODY {{{*/
        let className = "font_size_"+body_font_size_percent;
        set_el_class(document.body , className);
        /*}}}*/
    }
    else {
        body_font_size_percent          = 100 ;
        /* BODY {{{*/
        set_el_class(document.body ,  "");
        set_el_class(dom_tools_html,  "");
        /*}}}*/
    }
    /*}}}*/
    t_body_font_size_show();
    t_layout_changed();
};
/*}}}*/
/*_ t_body_font_size_show {{{*/
let t_body_font_size_show = function()
{
    let panel = t_get_tool("headsup_fs_value"); if(!panel) return;

    let font_size_class = document.body.className  ? "cc2" : "cc8";

    let font_size_label
        =  document.body.className.includes("font_size")
        ?  document.body.className
        : (document.body.style.fontSize || "default");

    panel.innerHTML = "BODY font-size <em class='"+font_size_class+"'>"+font_size_label+"</em>";
};
/*}}}*/

/*_ prop_tools_CB {{{*/
let prop_tools_CB = function(e_target)
{
/*{{{*/
let   caller = "prop_tools_CB(e_target=["+get_n_lbl(e_target)+"]";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbb+lbH+lf7);
    let consumed_by = "";
/*}}}*/
    /* [has_moved] [t_preventDefault_has_been_called] [t_event_has_been_consumed] {{{*/
    let keyword = ""; try { keyword = e_target.id                ; } catch(ex) {}
    if(!keyword)      try { keyword = e_target.title      .trim(); } catch(ex) {}
    if(!keyword)      try { keyword = e_target.textContent.trim(); } catch(ex) {}

/*{{{
if( log_this) {
    log("%c...............e_target............=["+ get_n_lbl(e_target)                +"]", lf8);
    log("%c...............e_target.textContent=["+           e_target.textContent     +"]", lf8);
    log("%c...............e_target.title......=["+           e_target.title           +"]", lf8);
    log("%c............................keyword=["+ keyword                            +"]", lf8);
    log("%c..........................has_moved=["+ has_moved                          +"]", lf8);
    log("%c..........t_event_has_been_consumed=["+ t_event_has_been_consumed       () +"]", lf8);
    log("%c...t_preventDefault_has_been_called=["+ t_preventDefault_has_been_called() +"]", lf8);
}
}}}*/

    if( has_moved                          ) return consumed_by;
/*{{{
    if( t_preventDefault_has_been_called() ) return consumed_by;
}}}*/
/*{{{
    if( e_target.tagName != "EM"           ) return consumed_by;
    if( t_event_has_been_consumed()        ) return consumed_by;
}}}*/
    /*}}}*/
    /* parse [keyword] {{{*/
    if(t_log.logging_toggle( keyword ))
    {
log("%c "+caller+": %c TOGGLED keyword=["+ keyword +"]",lb9, lbF);

        load8_LOG_MAP();

        /* set both [DISPLAY OPTION] and saved [LOGGING OPTION] */
        if(keyword == "EV8_FLOATLOG")
            t_fly.t_fly_log_set_state( LOG_MAP.EV8_FLOATLOG );

        t_sync_layout(caller);

        t_save_update_post("DOC LOGGING CB");

        consumed_by = "t_log.logging_toggle("+keyword+")";
    }
    /*}}}*/
    /* SYNC TOOL CLONES {{{*/
    t_sync_tool_clones_state( caller );

    /*}}}*/
    t_layout_changed();

    return consumed_by;
};
/*}}}*/
/*_ t_select calls {{{*/

let call_touchedWord        = function( x,   y) { t_select.touchedWord            ( x ,   y    ); /*t_log.log_TR_RESULT_set();*/ };
let call_check_NodeIterator = function(id, fil, wo) { t_select.check_NodeIterator (id , fil, wo); /*t_log.log_TR_RESULT_set();*/ };
let call_check_TreeWalker   = function(id, fil, wo) { t_select.check_TreeWalker   (id , fil, wo); /*t_log.log_TR_RESULT_set();*/ };
let call_check_childNodes   = function(id, fil, wo) { t_select.check_childNodes   (id , fil, wo); /*t_log.log_TR_RESULT_set();*/ };
let call_check_tagNodes     = function(id, fil, wo) { t_select.check_tagNodes     (id , fil, wo); /*t_log.log_TR_RESULT_set();*/ };
/*
let call_setTouchPoint      = function( x,   y) { log(); log( "call_setTouchPoint"      ); setTouchPoint      ( x ,   y); t_log.log_TR_RESULT_set(); };
let call_setStartXY         = function( x,   y) { log(); log( "call_setStartXY"         ); setStartXY         ( x ,   y); t_log.log_TR_RESULT_set(); };
let call_setEndXY           = function( x,   y) { log(); log( "call_setEndXY"           ); setEndXY           ( x ,   y); t_log.log_TR_RESULT_set(); };
*/
/*}}}*/
/*}}}*/
/* TOOL CB {{{*/
/*_ t_dom_traversal_CB {{{*/
let t_dom_traversal_CB = function(e_target, e_type)
{
/*{{{
if( t_preventDefault_has_been_called() ) return false;
}}}*/
    /* log {{{*/
    let caller   = "t_dom_traversal_CB("+get_n_lbl(e_target)+", e_type=["+e_type+"])";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) t_fly.t_log_event_status(caller, lf5);
    /*}}}*/
    /* [has_moved] [INPUT] {{{*/
    if( has_moved                   ) return false;
    if(e_target.tagName == "INPUT"  ) return false;
/*{{{
    if( t_event_has_been_consumed() ) return false; .. set by onUp_5_TOOL_ONCLICK
}}}*/

    /*}}}*/
    /* [focussed] [t_clear] {{{*/
if(e_target) del_el_class(e_target, CSS_FOCUSSED);
/*
t_clear( caller );
*/
    /*}}}*/
    /*  keyword {{{*/
    let keyword;
    if(!keyword) try { keyword =                e_target.id;                   } catch(ex) {}
    if(!keyword) try { keyword = t_util.get_first_word(e_target.textContent, caller); } catch(ex) {}
    if(!keyword)       keyword =                e_type;
/*{{{
logXXX("keyword=["+keyword+"]");
}}}*/
    /*}}}*/
    switch(keyword) {
        /* Traversal {{{*/
        case "NodeIterator":
        case "TreeWalker"  :
        case "childNodes"  :
        case "tagNodes"    :
        {
            current_traversal = keyword;

if(log_this) log("%c SETTING current_traversal to %c"+current_traversal, lbL, lbR);
        }
        break;
        /*}}}*/
        /* CLEAR: tools_node {{{*/
        case "node":
        {
if(log_this) t_log.log_TR_SELECT_set("<em class='big'>CLEAR: tools_node</em>");

            /* VALUE CLEAR BY CB */
            set_tool_id_value("tools_node", "");

            /* INPUT CLEAR BY CB */
            if(words_node_input) words_node_input.value = "";
        }
        break;
        /*}}}*/
        /* CHANGE: tools_node {{{*/
        case "tools_node"  :
        {
            if(e_target.id != "tools_node") set_tool_id_value("tools_node", keyword);

if(e_target && log_this) t_log.log_TR_SELECT_set("<em class='big'>CHANGE: tools_node ["+ keyword +"]</em>");
        }
        break;
        /*}}}*/
        /* SET: tools_node {{{*/
        case "html":
        case "head":
        case "body":
        {
            /* VALUE FROM CB */
            set_tool_id_value("tools_node", keyword);

if(log_this) t_log.log_TR_SELECT_set("<em class='big'>SET</em> : <em>tools_node "+ keyword +"</em>");
        }
        break;
        /*}}}*/
        /* default: {{{*/
        default: {
            if(log_this) log("...default: keyword=["+keyword+"]");
            return false;
        }
        /*}}}*/
    }
    /* APPLY [tools_node + tools_filter] */
    t_call_dom_traversal();

t_cache_armed_by(caller+": keyword=["+keyword+"]");
    return true;
};
/*}}}*/
/*_ t_call_dom_traversal {{{*/
let current_traversal = "TreeWalker";

let t_call_dom_traversal = function()
{
/*{{{*/
let   caller = "t_call_dom_traversal";
let log_this = LOG_MAP.T3_LAYOUT;

/*}}}*/
    /* [pattern] {{{*/
    let user_pattern   = t_get_tool_id_value(t_data.WORDS_FILTER);
    if(!user_pattern) {
logBIG(caller+": "+current_traversal+" ➔ NO user_pattern", 2);
        return;
    }

    let pattern        = prop.get(t_data.WORDS_SEGMENT) ? user_pattern    /* RETAIN REGEX FROM USER  */
        :                         t_select.t_escapeREGEX( user_pattern ); /* ESCAPE MAGIC CHARACTERS */

    /*}}}*/
    /* [current_words_option] {{{*/
    let current_words_option   = get_current_words_option();

    let pat_with_sfx   = pattern_fallback_to_current_words_option_sfx(pattern, current_words_option);
    /*}}}*/
    /* DOM TREE TRAVERSAL {{{*/
    let tools_node     = t_get_tool_id_value("tools_node"  );

if( log_this) log_key_val(   caller+": .. pattern=["+pattern+"]"
                         , { current_traversal
                           , tools_node
                           , pattern
                           , pat_with_sfx
                           , current_words_option
                         } , lf4);

    switch( current_traversal )
    {
        case "NodeIterator": call_check_NodeIterator(tools_node, pat_with_sfx, current_words_option); break;
        case "TreeWalker"  : call_check_TreeWalker  (tools_node, pat_with_sfx, current_words_option); break;
        case "childNodes"  : call_check_childNodes  (tools_node, pat_with_sfx, current_words_option); break;
        case "tagNodes"    : call_check_tagNodes    (tools_node, pat_with_sfx, current_words_option); break;
    }

    t_select.t_onPatternUpdate("CALLING DOM TRAVERSAL <em class='cc9'>"+ t_util.ellipsis_short(pat_with_sfx) +"</em>", caller);
    /*}}}*/
    /* TOOLS UPDATE {{{*/
    t_sync_layout(caller);

    if( words_filter_input ) t_focus( words_filter_input );
    /*}}}*/
};
/*}}}*/
/*_ t_log_option_changes {{{*/
let t_log_option_changes = function(changes)
{

    let options
        = prop.get( t_data.WORDS_EXACT   ) ? t_data.WORDS_EXACT
        : prop.get( t_data.WORDS_SEGMENT ) ? t_data.WORDS_SEGMENT
        :                             t_data.WORDS_HEAD_TAIL
    ;
    let s = "<em>"+changes+"</em>" +"<br>"+LF
        +"<table>"+LF
        +"<tr><th>OPTIONS:</th></tr>"+LF
        +"<tr>"
        +" <td>"+ get_log_option_state( t_data.TOOLS_SCROLL       , prop.get( t_data.TOOLS_SCROLL      ) ) +"</td>"
        +" <td>"+ get_log_option_state( t_data.DOM_FREEZE         , prop.get( t_data.DOM_FREEZE        ) ) +"</td>"
        +" <td>"+ get_log_option_state( t_data.USER_LANG          , prop.get( t_data.USER_LANG         ) ) +"</td>"
        +" <td>"+ get_log_option_state( t_data.ANCHOR_FREEZE      , prop.get( t_data.ANCHOR_FREEZE     ) ) +"</td>"
        +" <td>"+ get_log_option_state( t_data.CONTAINERS_HI      , prop.get( t_data.CONTAINERS_HI     ) ) +"</td>"
        +" <td>"+ get_log_option_state( t_data.SCROLL_SMOOTH      , prop.get( t_data.SCROLL_SMOOTH     ) ) +"</td>"
        +" <td>"+ get_log_option_state( t_data.OVERFLOW_VISI      , prop.get( t_data.OVERFLOW_VISI     ) ) +"</td>"
        +" <td>"+ get_log_option_state( t_data.DETAILS_RADIO      , prop.get( t_data.DETAILS_RADIO     ) ) +"</td>"
        +" <td>"+ get_log_option_state( t_data.TOOLS_TIER2        , prop.get( t_data.TOOLS_TIER2       ) ) +"</td>"
        +"</tr>"+LF
        +"<tr>"
        +" <td>"+ get_log_option_value("WORDS OPTIONS"     , words_options_symbol(options) )
        +" <td>"+ get_log_option_state( t_data.WORDS_EXACT        , prop.get( t_data.WORDS_EXACT       ) ) +"</td>"
        +" <td>"+ get_log_option_state( t_data.WORDS_SEGMENT      , prop.get( t_data.WORDS_SEGMENT     ) ) +"</td>"
        +" <td>"+ get_log_option_state( t_data.WORDS_HEAD_TAIL    , prop.get( t_data.WORDS_HEAD_TAIL   ) ) +"</td>"
        +" <td>"+ get_log_option_state( t_data.WORDS_OPCYCLE      , prop.get( t_data.WORDS_OPCYCLE     ) ) +"</td>"
        +" <td>"+ get_log_option_state( t_data.WORDING            , prop.get( t_data.WORDING           ) ) +"</td>"
        +" <td>"+ get_log_option_state( t_data.THEME_DARK         , prop.get( t_data.THEME_DARK        ) ) +"</td>"
        +"</tr>"+LF
        +"<tr>"
      /*+" <td>"+ get_log_option_value("tools_node"        , "<em class='cc9'>"+tools_node  +"</em>" )         */
      /*+" <td>"+ get_log_option_value("words_filter"      , "<em class='cc9'>"+tools_filter+"</em>" )         */
      /*+" <td>"+ get_log_option_state("filter_auto"       , filter_auto                             ) +"</td>"*/
      /*+" <td>"+ get_log_option_state("transcripts"       , transcripts                             ) +"</td>"*/
        +"</tr>"+LF
        +"<tr>"
        +" <td>"+ get_log_option_state(LOG_MAP.T8_TOOLBAR  , LOG_MAP.T8_TOOLBAR                      ) +"</td>"
        +"</tr>"+LF
        +"<tr><th>CSS:</th></tr>"+LF
        +"<tr>"
        + "<td><em class='em_match'  >em_match  </em></td>"
        + "<td><em class='em_missing'>em_missing</em></td>"
        +"</tr>"+LF
        +"</table>"+LF
    ;

    t_log.log_TR_LAYOUT_set("<div id='log_tags_div'>"+ s +"</div>");
};

let get_log_option_state = function(option, state)
{
    let     mark = state ? t_data.SYMBOL_CHECK_MARK : t_data.SYMBOL_NOT_CHECKED;
    let em_class = state ?             "cc2" : "cc8";
    return option +" <em class='"+em_class+"'>"+ mark     +"</em>    ";
};

let get_log_option_value = function(option, value_em)
{
    return option +" "+ value_em;
};

/*}}}*/
/*_ t_override_USER_OPTION .. (called while adjusting .. by t_select.touchedWord_adjust) {{{*/
/*{{{*/
let t_override_USER_OPTION = function(key, val)
{
/*{{{*/
let   caller = "t_override_USER_OPTION("+key+", "+val+")";
let log_this = t_log.logging_something();

if( log_this) log(caller);
/*}}}*/
    if(!cached_user_options_map_get(key) ) {
        cached_user_options_map_set(key, prop.get(key));
if(log_this) log(caller+": ...caching USER OPTION %c"+key+"%c"+val, lbL+lf3, lbR+lf3);
    }
if(log_this) log(caller+": ...overriding "+key+" option from %c "+cached_user_options_map_get(key)+" %c to %c "+val, lb1,lbA ,lb2);
    prop.set(key, val);
};
/*}}}*/
/*_ t_reinstate_USER_OPTIONS .. (called when done .. by onDown_1_INIT_CTRL_DEBOUNCE_INPUT) {{{*/
let t_reinstate_USER_OPTIONS = function(_caller)
{
/*{{{*/
let   caller = "t_reinstate_USER_OPTIONS("+_caller+")";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;

if( log_this) log(caller);
/*}}}*/
    for(let i=0; i< cached_user_options_map.length; ++i)
    {
        let    key =   cached_user_options_map[i].key;
        let cached =   cached_user_options_map[i].val;
        let option =                prop.get(key);
        if( option != cached) {
if(log_this)
        log(caller+": ...restoring %c"+key+"%c option from %c"+option+"%c to %c"+cached+"]"
            ,                      lb1     ,lbA           ,lb4       ,lbA   ,lb3           );
            prop.set(key, cached);
        }
        else {
if(log_this)
        log(caller+": ............ %c"+key+"%c option ==== %c"+cached+"%c (as cached)"
            ,                      lb1     ,lbA           ,lb3       ,lbA             );
        }
    }
    cached_user_options_map = [];

    clr_onWork_EL(caller);
};
/*}}}*/

/*_ t_onclick_target_handle_scroll_to_slot_num {{{*/
let t_onclick_target_handle_scroll_to_slot_num = function(e_target, _caller)
{
/*{{{*/
let caller = "t_onclick_target_handle_scroll_to_slot_num";
let log_this = LOG_MAP.EV5_TOOL_CB || LOG_MAP.T2_GRID || LOG_MAP.T6_SLOT;

if(log_this) log(caller+"(e_target=["+get_n_lbl(e_target)+"]) ..%c CALLED BY "+ _caller, lb0);

    let result;
/*}}}*/
    /* [slot] from [id] or [className] {{{*/
    let slot  = get_slot_from_id_or_className(e_target);
    /*}}}*/
    /* [num] from slot and [id] or [className] {{{*/
    if( slot > 0) {
        if(!t_select.ccs[slot].thumbs) t_select.ccs[slot].thumbs = [];

        /* num */
        let num = get_num_from_id_or_className_slot(e_target, slot);
if(log_this) t_log.log_TR_SELECT_add(".slot=<em>"+slot+"</em> num=<em>"+num+"</em>");
if(log_this) log(              ".slot="    +slot     +" num="    +num        );

        /* next num .. f(last highlighted) */
        if(!num) {
            num = t_select.t_get_last_highligted_slot_num(slot, prop.get( t_data.SEL_BACK ));
if(log_this) log(".slot_num_for_thumb_p=["+ num +"]");

            /* next num .. (may wrap at boundaries) */
            let num_max = t_select.t_select_get_slot_nodes_length(slot);
            let first = 1;
            let  last = num_max;

            if(prop.get( t_data.SEL_BACK )) num = (num > first) ? num-1 : last;
            else                     num = (num < last ) ? num+1 : first;

if(log_this) t_log.log_TR_SELECT_add(".NEXT num=<em>"+num+"</em>");
        }
        t_seek.t_seeker_onMove3_ON_SLOT_NUM(slot, num);

        result = "TO THUMB slot=["+slot+"] num=["+num+"]";
    }
    else {
        result = "NO SLOT FOR "+get_n_lbl(e_target);
    }
    /*}}}*/
if(log_this) t_log.log_TR_SELECT_add("<em class='cc4'>"+result+"</em>");
    return result;
};
/*}}}*/
/*}}}*/
/*_ [cached_user_options_map] ARRAY .. set get {{{*/

let cached_user_options_map = [];

let cached_user_options_map_set = function(key,val)
{
    cached_user_options_map.push({key , val});
};

let cached_user_options_map_get = function(key)
{
    for(let i=0; i< cached_user_options_map.length; ++i) {
        if(key   == cached_user_options_map[i].key) {
            return  cached_user_options_map[i].val;
        }
    }
    return null;
};
/*}}}*/
/*}}}*/
/* TOOL standby {{{*/
/*_ t_standby_bag_id {{{*/
/*{{{*/
let t_standby1_timer = null;

/*}}}*/
let t_standby_bag_id = function(bag_id)
{
/*{{{
logBIG("t_standby_bag_id("+bag_id+")",lf1)
}}}*/
/*{{{*/
    let caller = "t_standby_bag_id("+bag_id+")";
let log_this = LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c "+caller, lbF+lb0);
if( log_this) t_log.log_TR_EVENT_add("<em class='cc1'>STANDBY</em> <em class='cc9'>"+bag_id+"</em>");
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_log_stage_msg(t_fly.STAGE_2_ACTION, " <em class='cc9'>standby ["+bag_id+"]</em>");
/*}}}*/

    /* clear old */
    if(onStandby_PANEL) t_standby3_release("t_standby_bag_id");

    /* t_select new */
    if(bag_id) onStandby_PANEL = t_get_tool(bag_id);
    else       onStandby_PANEL = null;

    if(onStandby_PANEL) add_el_class(onStandby_PANEL, CSS_STANDBY);

if(onStandby_PANEL) if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_log_stage_msg(t_fly.STAGE_3_RESULT, " Setting "+bag_id+" on STANDBY");

    /* new timer */
    if(t_standby1_timer) clearTimeout(t_standby1_timer);
    t_standby1_timer =     setTimeout(t_standby1_handle, t_data.T_STANDBY1_DELAY);
};
/*}}}*/
/*_ t_standby1_handle {{{*/
let t_standby1_handle = function()
{
/*{{{
logBIG("t_standby1_handle",lf1)
}}}*/
    if(!onStandby_PANEL) return;

    let caller = "t_standby1_handle";
let log_this = LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c "+caller+": ["+onStandby_PANEL.id+"]", lbF+lb1);

    switch( onStandby_PANEL.id )
    {
        case "pat_bag":
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_log_stage_msg(t_fly.STAGE_1_INPUT, " STANDBY HANDLE <em class='cc9'>"+onStandby_PANEL.id+"</em>");
        t_pat_bag_stage_target( pat_bag );
        break;

        case "sel_bag":
        prop.toggle( t_data.SEL_BACK );
if(log_this) t_log.log_TR_EVENT_add("_<em class='cc3'>SELBAG SELECT <em class='cc9'>"+(prop.get( t_data.SEL_BACK ) ? "BACKWARD" : "FORWARD")+"</em></em>");
        t_seek.t_seeker_sync_SEL_BACK(caller);
        break;
    }

    if( t_standby2_is_done(onStandby_PANEL.id, caller) )
        t_standby3_release(caller);
};
/*}}}*/
/*_ t_standby2_is_done {{{*/
let t_standby2_is_done = function(id,_caller)
{
/*{{{
logBIG("t_standby2_is_done",lf2)
}}}*/
let log_this = LOG_MAP.S2_SELECT;

/*
    let target_handled
        =               (id     != "pat_bag")
        || !has_el_class(pat_bag, CSS_OPEN_BAG)
    ;
*/
    let target_handled = true; /*TODO*/

if( log_this) log("%c t_standby2_is_done("+id+"): ...return ["+target_handled+"] %c .. CALLED BY "+ _caller, lbF+lb2, lb0);
    return target_handled;
};
/*}}}*/
/*_ t_standby3_release {{{*/
let t_standby3_release = function(_caller="TIMER")
{
/*{{{
logBIG("t_standby3_release",lf3)
}}}*/
let log_this = LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;
if( log_this) log("%c t_standby3_release: ["+get_n_lbl(onStandby_PANEL)+"] .. CALLED BY "+ _caller, lbF+lb3);

    if(!onStandby_PANEL) return;

    if(t_standby1_timer) clearTimeout( t_standby1_timer );
    /*..............................*/ t_standby1_timer = null; /* done */

    del_el_class(onStandby_PANEL, CSS_STANDBY);

if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_log_stage_msg(t_fly.STAGE_3_RESULT, " STANDBY CLEAR <em class='cc9'>"+onStandby_PANEL.id+"</em>");

    onStandby_PANEL  = null;
};
/*}}}*/
/*}}}*/
/* TOOL CLEAR {{{*/
/*_ t_clear {{{*/
/*{{{*/
let T_CLEAR_INTERVAL_MIN = 500;
let t_clear_timeStamp    = 0;
/*}}}*/
let t_clear = function(_caller)
{
/*{{{*/
    let caller = "t_clear .. CALLED BY ["+_caller+"]";
let log_this = t_log.logging_something();

if( log_this) log(caller);
if( log_this) log("...t_preventDefault_caller=["+t_preventDefault_caller+"]");
/*
if( t_preventDefault_has_been_called() ) return;
*/
/*}}}*/
    /* ...debounce {{{*/
    let          this_MS = new Date().getTime();
    let t_clear_interval = this_MS - t_clear_timeStamp;
    if( t_clear_interval < T_CLEAR_INTERVAL_MIN)
    {
if(log_this) log(caller+": BOUNCING: "+t_clear_interval+" < (T_CLEAR_INTERVAL_MIN "+T_CLEAR_INTERVAL_MIN+")");
        return;
    }
    t_clear_timeStamp = this_MS;

    /* clear log buffers */
    log();

    /* clear browser selection */
    t_window_getSelection_removeAllRanges(caller);

    /*}}}*/
    /* TARGET ACTION .. (pat_bag input cycle dblclick) {{{*/
    let target
        = _caller.includes("pat_bag" ) ? "pat_bag"
        : _caller.includes("EM"      ) ?      "em"
        : _caller.includes("INPUT"   ) ?   "input"
        : _caller.includes("cycle"   ) ?   "cycle"
        :                               "default"
        ;

    let action
        = _caller.includes("dblclick") ? "dblclick"
        : was_a_dblclick()             ? "dblclick"
        : _caller.includes("onclick" ) ? "onclick"
        :                                "default"
    ;

    let target_action = target+"."+action;

if(log_this) log(".target_action=["+target_action+"]");
    /*}}}*/
    switch(target_action) {
        /* IGNORE: TARGET=[EM INPUT] ACTION=[onclick .. dblclick] {{{*/
        case    "em.onclick": case    "em.dblclick":
        case "input.onclick": case "input.dblclick":
        case "cycle.default":

        break;
        /*}}}*/
        /* CLEAR : TARGET=[default ] ACTION=[           dblclick] {{{*/
        case "default.dblclick":
if(log_this) log("XXX fall through case default...");
        /* falls through */
        /*}}}*/
        /* CLEAR : default .. (transcript1 transcript2 doc_evt_div doc_log_div) {{{*/
        default: /* eslint-disable-line no-fallthrough */
/*{{{
if(!LOG_MAP.EV3_UP) t_log.console_clear_post(caller + (onWork_PANEL ? " on "+get_n_lbl(onWork_PANEL) : ""));
}}}*/

        /* LOG BUFFER */
        log();
if( LOG_MAP.EV3_UP) log("%c t_clear("+caller+") console logs preserved for %c LOG_MAP.EV3_UP", lb4, lbF+lb3);

        /* LOG TOOLS */
        t_clear_panel_pined_innerHTML(transcript1);
        t_clear_panel_pined_innerHTML(transcript2);

        /* bring back empty pinned panels within window viewport */
        if( transcript1.classList.contains(t_data.CSS_PINNED) ) t_clear_move_panel_within_window(transcript1);
        if( transcript2.classList.contains(t_data.CSS_PINNED) ) t_clear_move_panel_within_window(transcript2);

        /* DOCUMENT DIV */
        t_fly.t_doc_div_clear("doc_evt_div");
        t_fly.t_doc_div_clear("doc_log_div");

        /*}}}*/
    }
    t_outline_clear();
    /* CACHE */
    t_cache_armed_by(caller);

/*{{{
    t_fly.t_fly_tooltip_clear(t_data.CSS_STICKY_LOG);
    t_fly.t_fly_tooltip_clear(t_data.CSS_EVENT_LOG );
}}}*/
    t_fly.t_fly_init(caller);
};
/*}}}*/
/*_ t_clear_move_panel_within_window {{{*/
let t_clear_move_panel_within_window = function(panel)
{
    let caller = "t_clear_move_panel_within_window("+get_n_lbl(panel)+")";
let log_this = t_log.logging_something();

    let xy = t_util.get_el_xy(panel, caller);

    let margin      = hotring.clientWidth;

    let x_max = w_W - margin;
    let y_max = w_H - margin;
    let x_min =       0;
    let y_min =       0;

    let                                               panel_moved = false;
    if(xy.x > x_max) { panel.style.left = x_max+"px"; panel_moved =  true; }
    if(xy.x < x_min) { panel.style.left = x_min+"px"; panel_moved =  true; }
    if(xy.y > y_max) { panel.style.top  = y_max+"px"; panel_moved =  true; }
    if(xy.y < y_min) { panel.style.top  = y_min+"px"; panel_moved =  true; }

if(log_this && panel_moved) log(caller+": .. moved from XY=["+xy.x+" "+xy.y+"] .. within ["+ x_max+" "+ y_max+"]");
};
/*}}}*/
/*}}}*/

/*}}}*/
/** PROP {{{*/
/*➔ prop_id_state_CB {{{*/
let prop_id_state_CB = function(id, checked)
{
/*{{{*/
let caller = "prop_id_state_CB("+id+" , checked=["+checked+"])";
let log_this = LOG_MAP.T3_LAYOUT || LOG_MAP.EV5_TOOL_CB;

if( log_this) t_fly.t_log_event_status(caller, lf5);
/*}}}*/
    /* SET TOOL checked attribute {{{*/
    let tool_el       = t_get_tool         (id); if(log_this && tool_el    ) t_log.console_dir("...tool_el"      , tool_el      );
    let tool_clone    = get_tool_clone   (id); if(log_this && tool_clone   ) t_log.console_dir("...tool_clone"   , tool_clone   );
    let tool_embedded = get_tool_embedded(id); if(log_this && tool_embedded) t_log.console_dir("...tool_embedded", tool_embedded);

    if( tool_clone    ) tool_clone   .checked = checked;
    if( tool_el       ) tool_el      .checked = checked;
    if( tool_embedded ) tool_embedded.checked = checked;

    /*}}}*/
    /* SYNC TOOLS GUI DEPENDENCIES {{{*/
    t_sync_styles(caller);

    /*}}}*/
    /* SYNC OPTIONAL PLAYGROUND CLONE {{{*/
    t_clone_2_id_state_CB(id, checked);

    /*}}}*/
    /* OPTIONAL PLAYGROUND DOC TRANSCRIPTS {{{*/
    if(typeof playground_prop_CB != "undefined") playground_prop_CB(id, checked);

    /*}}}*/
    /* OPTIONAL CASCADE CALL {{{*/
    switch(id)
    {
    case "t_sticky.t_sticky_reorder":
if(log_this) log("%c calling [funcion "+id+"]", lbb+lbH+lf7);

        t_sticky.t_sticky_reorder();
    break;
    }
    /*}}}*/
    let state
        = tool_el
        ? tool_el.checked
        : checked
    ;
if( log_this) log("...return %c"+state, lbX[state ? 4 : 6]);
    return state;
};
/*}}}*/
/*…   prop_id_toggle {{{*/
/*{{{*/
const TOGGLE_RELOAD_DELAY = 2000; /* ALLOWING TO SELECT THE RIGHT LANG FLAG */

let   location_reload_timeout;
/*}}}*/
let   prop_id_toggle = function(keyword)
{
/*{{{*/
let   caller = "prop_id_toggle("+keyword+")";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller);
/*}}}*/
    /* [has_moved] [t_preventDefault_has_been_called] [t_event_has_been_consumed] {{{*/

    if( log_this) log("...................keyword %c["+ keyword                 +"]", lb0);
    if( log_this) log(".................has_moved %c "+ has_moved               +" ", lb2);
    if( log_this) log("....t_event_consumed_cause %c "+ t_event_consumed_cause  +" ", lb2);
    if( log_this) log("...t_preventDefault_caller %c "+ t_preventDefault_caller +" ", lb2);

    let                                    rejected_by = "";
    if     ( has_moved                   ) rejected_by = "has_moved";
    else if( t_event_has_been_consumed() ) rejected_by = t_event_consumed_cause;
/*
    else if( t_preventDefault_has_been_called() ) rejected_by = t_preventDefault_caller;
*/

if(log_this && rejected_by) log(caller+": %c rejected_by ["+ rejected_by+"]", lb2);
    if(rejected_by) {
if(log_this) console.trace();
        return;
    }
    /*}}}*/
    /* narrow affixed keyword {{{*/
    if( keyword.startsWith(t_data.SQUEEZE_CYCLE) )
        keyword = t_data.SQUEEZE_CYCLE;

    /*}}}*/
    /* CHANGES... {{{*/
    let changes = "";
    switch(keyword)
    {
    case  t_data.USER_LANG       : changes += keyword;
    {
        let  user_lang = dom_i18n.i18n_get_user_lang();
        let       lang = user_lang;

        let      array = dom_i18n.i18n_get_LANGUAGES();
        for(let i=0; i<array.length; ++i)
        {
            if(array[i] == user_lang) /* current */
            {
                lang =    ((i+1) < array.length) /* next */
                    ? array[i+1] : array[ 0 ];
                break;
            }
        }


        /* CHANGE USER_LANG */
        dom_i18n.i18n_set_args({ lang , caller });

        /* SYNC UI */
        let el = prop.get_EL(t_data.USER_LANG);
        if( el ) {
            el.title     = i18n_get(dom_i18n.USER_LANG, dom_i18n.USER_LANG);
            el.className = "flag bg_"+lang;
        }

        /* STORE */
        prop.set(t_data.USER_LANG, lang);
        t_store.t_store_set_value(t_data.USER_LANG, lang);

        /* RELOAD */
        let lang_applied  = dom_i18n.i18n_get_user_lang_applied();
        if( lang_applied != lang)
        {
logBIG("RELOADING: changing from "+lang_applied+" to "+lang, 7);
            if( el ) t_util.add_el_class(el, "reloading");

            if( location_reload_timeout ) clearTimeout( location_reload_timeout );
            location_reload_timeout     =   setTimeout(function() { document.location.reload(); }, TOGGLE_RELOAD_DELAY);
        }
        else {
            if( el ) t_util.del_el_class(el, "reloading");

            if( location_reload_timeout ) clearTimeout( location_reload_timeout );
logBIG("RELOAD CANCELED ..back to: "+lang, 8);
        }
/*{{{*/
if( log_this)
    log_key_val_group(caller
                      , { user_lang
                        , array
                        , lang
                        , TOGGLE_RELOAD_DELAY
                      } , lf5, false);
/*}}}*/
    }
    break;

    case  t_data.DOM_FREEZE      : changes += keyword; prop.toggle( keyword          );
    {

        /* STORE [state] */
        let state = prop.get(     t_data.DOM_FREEZE);
        t_store.t_store_set_value(t_data.DOM_FREEZE, state);

        /* REMOVE EVENT LISTENERS */
        if( state )
            t_util.t_REMOVE_EventListeners();

        /* RELOAD PAGE TO RESTORE LISTENERS */
        if(!state)
        {
            if( location_reload_timeout ) clearTimeout( location_reload_timeout );
            location_reload_timeout     =   setTimeout(function() { document.location.reload(); }, 0);
        }
    }
    break;

    case t_data.ANCHOR_FREEZE:
    if(!prop.get(t_data.WORDING) ) changes += keyword; prop.toggle( keyword          ); break;

    case  t_data.TOOLS_TRAP      : changes += keyword; prop.toggle( keyword          ); break;

    case  t_data.THEME_DARK      : changes += keyword; prop.toggle( keyword          ); break;
    case "theme_LIGHT"    : changes += keyword; prop.set   ( t_data.THEME_DARK, false); break;
    case "theme_DARK"     : changes += keyword; prop.set   ( t_data.THEME_DARK,  true); break;

    case  t_data.WORDING         : changes += keyword; prop.toggle( keyword          ); break;

    case  t_data.CONTAINERS_HI   : changes += keyword; prop.toggle( keyword          ); break;
    case  t_data.SCROLL_SMOOTH   : changes += keyword; prop.toggle( keyword          ); break;
    case  t_data.OVERFLOW_VISI   : changes += keyword; prop.toggle( keyword          ); break;
    case  t_data.DETAILS_RADIO   : changes += keyword; prop.toggle( keyword          ); break;

    case  t_data.SHOW_SEEKZONE   : changes += keyword; prop.toggle( keyword          ); break;
    case  t_data.PIN_SEEKSPOT    : changes += keyword; prop.toggle( keyword          ); break;
    case  t_data.LOG_SEEKSPOT    : changes += keyword; prop.toggle( keyword          ); break;

    case  t_data.REMOVE_ADS      : changes += keyword; prop.toggle( keyword          ); break;
    case  t_data.SPLIT_WOT       : changes += keyword; prop.toggle( keyword          ); break;
    case  t_data.LINES_WOT       : changes += keyword; prop.toggle( keyword          ); break;

    case  t_data.MASK_OR_HIDE    : changes += keyword; prop.toggle( keyword          ); break;
    case  t_data.SITE_OR_PAGE    : changes += keyword; prop.toggle( keyword          ); break;
    case  t_data.EDIT_OR_STAGE   : changes += keyword; prop.toggle( keyword          ); break;
    case  t_data.DOM_HIDE1_RESET : changes += keyword; prop.toggle( keyword          ); break;
    case  t_data.DOM_HIDE1_UNDO  : changes += keyword; prop.toggle( keyword          ); break;
    case  t_data.DENY_OR_ALLOW   : changes += keyword; prop.toggle( keyword          ); break;

    case  t_data.TOOLS_TIER2     : changes += keyword; prop.toggle( keyword          ); break;

    case  t_data.WORDS_EXACT     : changes += keyword; prop.set   ( keyword   ,  true); break;
    case  t_data.WORDS_SEGMENT   : changes += keyword; prop.set   ( keyword   ,  true); break;
    case  t_data.WORDS_HEAD_TAIL : changes += keyword; prop.set   ( keyword   ,  true); break;
    case  t_data.WORDS_OPCYCLE   : changes += keyword; prop.toggle( keyword          ); break;

    case  t_data.TOOLS_SCROLL    : changes += keyword; prop.toggle( keyword          ); break;

    case  t_data.SQUEEZE_CYCLE   : changes += keyword; cycle_parent_classList(onWork_EL, t_data.SQUEEZE_CYCLE_CLASSLIST); break;

    default               :
    /* DYNAMIC KEYWORDS {{{*/
    {
        let keyword_array = get_words_drop_affix_array();
        for(let i=0; i < keyword_array.length; ++i)
        {
            let id        = keyword_array[i];
            if( id       == keyword) {
                changes  += keyword;
                prop.toggle(keyword);
                break;
            }
        }
    }
    /*}}}*/
    if(!changes) log("%c "+caller+" %c "+keyword+" %c *** not handled ***", lbH+lf4, lbb+lbL+lf2, lbb+lbR+lf2);
    }
/*{{{
logXXX("changes=["+changes+"]");
}}}*/
    if(changes) {
if(log_this) t_log_option_changes(changes);
        t_fly.t_log_transcript_info("<em class='cc8'>"+caller+"</em> changes:<br><em class='cc9'> "+changes+" </em>");
    }
    else {
        t_fly.t_log_transcript_info("<em class='cc8'>"+caller+"</em> changes <em class='cc0'>none</em>");
    }
    /*}}}*/
    /* SITE AND PAGE {{{*/
    /* OVERFLOW DETAILS SCROLL */
    if(         changes.includes( t_data.OVERFLOW_VISI  )
            ||  changes.includes( t_data.DETAILS_RADIO  )
            ||  changes.includes( t_data.SCROLL_SMOOTH  )
            ||  changes.includes( t_data.PIN_SEEKSPOT   )
      ) {
        t_tools_save_all_settings(); /* SITE [THEME LOGGING LAYOUT] .. PAGE [t_data.WORDING] */
    }
    else {
        /* SITE THEME */
        if(     changes.includes( t_data.ANCHOR_FREEZE  )
            ||  changes.includes( t_data.CONTAINERS_HI  )
            ||  changes.includes( t_data.THEME_DARK     )
            ||  changes.includes( t_data.TOOLS_TRAP     )
            ||  changes.includes( t_data.TOOLS_TIER2    )
          ) {
            save2_theme();
        }
        /* PAGE t_data.WORDING */
        if(     changes.includes( t_data.WORDING        )
            ||  changes.includes( t_data.WORDS_EXACT    )
            ||  changes.includes( t_data.WORDS_SEGMENT  )
            ||  changes.includes( t_data.WORDS_HEAD_TAIL)
            ||  changes.includes( t_data.WORDS_OPCYCLE  )
            ||  get_words_drop_affix_array().includes(changes)
          ) {
            save5_wording();
        }
    }
    /*}}}*/
    /* SEEKZONE SEEKSPOT{{{*/
    if( prop.get( t_data.SHOW_SEEKZONE ))
    {
        if(     changes.includes( t_data.LOG_SEEKSPOT   )
            ||  changes.includes( t_data.SITE_OR_PAGE   )
            ||  changes.includes( t_data.PIN_SEEKSPOT   )
            ||  changes.includes( t_data.SHOW_SEEKZONE  )
          ) {
            t_seek.t_seeker_show(caller);
            t_seek.t_seeker_sync_SEL_BACK(caller);
        }
    }
    /*}}}*/
    /* CONTAINERS_HI THEME_DARK {{{*/
    if(         changes.includes( t_data.CONTAINERS_HI  )
           ||   changes.includes( t_data.THEME_DARK     )
           ||   changes.includes("theme_DARK"           )
           ||   changes.includes("theme_LIGHT"          )
      ) {
        t_select.t_sync_containers_hi();
        t_sentence.t_SENTENCE_restore_text_containers_outlined();

    }
    /*}}}*/
    /* WORDING {{{*/
    if(         changes.includes( t_data.ANCHOR_FREEZE  )
           ||   changes.includes( t_data.THEME_DARK     )
           ||   changes.includes( t_data.WORDING        )
           ||   changes.includes( t_data.CONTAINERS_HI  )
           ||   changes.includes("theme_DARK"           )
           ||   changes.includes("theme_LIGHT"          )
      )
        t_sync_wording(caller);

    if(words_filter_input && words_filter_input.value)
    {
        if     (changes.includes( t_data.WORDS_EXACT    ) ) t_wording_3_CB(null, t_data.WORDS_EXACT    );
        else if(changes.includes( t_data.WORDS_HEAD_TAIL) ) t_wording_3_CB(null, t_data.WORDS_HEAD_TAIL);
        else if(changes.includes( t_data.WORDS_SEGMENT  ) ) t_wording_3_CB(null, t_data.WORDS_SEGMENT  );
        else if(changes.includes( t_data.WORDS_DROP_CASE) ) t_wording_3_CB(null, t_data.WORDS_DROP_CASE);
        else if(changes.includes( t_data.WORDS_DROP_ING ) ) t_wording_3_CB(null, t_data.WORDS_DROP_ING );
        else if(changes.includes( t_data.WORDS_DROP_S   ) ) t_wording_3_CB(null, t_data.WORDS_DROP_S   );
    }
    else if( log_this) logBIG("NO PATTERN TO RE-SELECT");
    /*}}}*/
    /* TOOLS_SCROLL {{{*/
    if(         changes.includes( t_data.TOOLS_SCROLL   ) ) t_sync_TOOLS_SCROLL();
    if(         changes.includes( t_data.TOOLS_SCROLL   )) save4_layout(t_data.TOOLS_SCROLL);

    /*}}}*/
    /* TOOLS_TIER2 {{{*/
    if(         changes.includes( t_data.TOOLS_TIER2    ) ) t_sync_tools_tier2 (caller);

    /*}}}*/
    /* TOOLS XY {{{*/
    t_tools_sync_top_xy();

    /*}}}*/
    /* TOOLS STYLE {{{*/
    t_sync_styles( caller );

    /*}}}*/
    /* TOOL CLONES {{{*/
    t_sync_tool_clones_state( caller );

/*{{{
if( log_this) prop.log_MAP(caller);
}}}*/
    /*}}}*/
    t_save_update_post("PROP TOGGLED ["+keyword+"]");
};
/*}}}*/
/*…   cycle_parent_classList {{{*/
let   cycle_parent_classList = function(el, classList)
{
    let el_parent;
    for(let i=0; i < classList.length ; ++i)
    {
        if(el_parent = t_util.get_el_parent_with_class(el, classList[i]))
        {
            t_util.cycle_el_classList(el_parent, classList);
            return;
        }
    }
};
/*}}}*/
/*}}}*/
/** LAYOUT {{{*/
/*  t_orient_listener {{{*/
let t_orient_listener = function(e)
{
    if(!hotspot) return;

    t_layout_changed();

};
/*}}}*/
/*  t_resize_listener {{{*/
let t_resize_listener = function(e)
{
    if(!hotspot) return;

    t_layout_changed();

    dom_scroll.scroll_listener_scroll_changed(e);
};
/*}}}*/
/*  t_layout_changed {{{*/
/*{{{*/
let LAYOUT_CHANGED_DELAY = 200;
let layout_changed_timer;

/*}}}*/
let t_layout_changed = function(delay=LAYOUT_CHANGED_DELAY)
{
    let caller = "t_layout_changed";
/*{{{
if(!layout_changed_timer) log("%c t_layout_changed", lbH+lf2);
}}}*/
if(LOG_MAP.EV7_DISPATCH && !layout_changed_timer) t_fly.t_log_event_status(caller);
    /* not while initializing {{{*/
    if(!dom_tools_html || (dom_tools_html.style.visibility == t_data.CSS_HIDDEN))
    {
/*{{{
log_caller()
logXXX("dom_tools_html.style.visibility "+ dom_tools_html.style.visibility)
}}}*/
        return;
    }
    /*}}}*/

    if(layout_changed_timer )   clearTimeout(layout_changed_timer);
    layout_changed_timer    =   null;

    if(!delay)                               layout_changed_handler(        window.event); /* sync */
    else layout_changed_timer = setTimeout  (layout_changed_handler, delay, window.event); /* async .. wait for new window geometry */
};
/*}}}*/
/*_ layout_changed_handler {{{*/
let layout_changed_handler = function(e)
{
/*{{{*/
let   caller = "layout_changed_handler";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+ caller, lbH+lf3);
/*}}}*/
    layout_changed_timer = null;
    /* MEASURE UPDATE .. [window] [page] [hotspot] {{{*/
    t_cache_wph_WH();

    /*}}}*/
    /* SKIP WHEN TOOLS ON GRID {{{*/
    if( has_el_class(tools_map[0], t_data.CSS_ON_GRID) )
    {
if(log_this) log("%c"+caller+" ["+get_n_lbl(tools_map[0])+"] "+t_data.CSS_ON_GRID, lbb+lbH+lf7);

if(log_this) log_caller();
        return;
    }
    /*}}}*/
    /* MEDIA-QUERY RELOAD {{{*/
    if(window.matchMedia("only screen and (min-resolution : 128dpi)").matches != behavior_TOUCH_ELSE_DESKTOP)
        document.location.reload();

    /*}}}*/
    /* SYNC LAYOUT DEPENDENT {{{*/

    t_outline_clear();

    t_update_TOOLS_MAP_GEOMETRY(caller,0);

    t_cache_armed_by(caller);

    t_cache_sync("Layout changed");
    /*}}}*/
    /* 1/3 - TOOLS GRID-SYNC {{{*/
    if(     call_t_grid_IS_SIZED() )
    {
        if(has_el_class(dimm_mask, "dimm_sticky"))
            t_sticky.t_sticky_RING_stop(caller);

        dimm_start_grid(caller);
    }
    /*}}}*/
    /* 2/3 - ADJUST DIMMED CONTAINERS {{{*/
    else if(div_slot_containers_displayed())
    {
        div_slot_containers.style.minHeight = window.innerHeight+"px";

        dom_scroll.t_scrollIntoView_EL_reset();

        dom_scroll.t_scroll_div_slot_containers_in_viewport();
    }
    /*}}}*/
    /* 3/3 - STICKY RING-MENU LAYOUT {{{*/
    else if(dimm_mask_displayed() && has_el_class(dimm_mask, "dimm_sticky"))
    {
        t_sticky.t_sticky_RING_layout();

    }
    /*}}}*/
    /* SYNC [dimm_mask] {{{*/
    if( dimm_mask_displayed() ) dimm_start(); /* no args to resize */

    /*}}}*/
    /* SYNC UI {{{*/
    t_sync_layout(caller);

    t_fly.t_fly_onlayout(caller);

    t_body_width_show();
    t_body_zoom_show();
    t_body_font_size_show();

    t_tools_set_top_xy(h_x, h_y);

    if(!call_t_grid_IS_ON_GRID(caller) )
        t_TOOL_SET_eval_wide_or_tall_panel(caller);

    /*}}}*/
    /* UNDIMM STICKY {{{*/
    t_sticky.t_sticky_SET_DIMMED(false, "LAYOUT");

    t_sticky.t_sticky_onLayout();

    /*}}}*/
    t_sentence.t_SENTENCE_onresize(e);
};
/*}}}*/
/*}}}*/
/** LOG {{{*/
/*_ t_get_consumed_by_table {{{*/
let t_get_consumed_by_table = function()
{
    return "<table>"
        + "<tr><td class='cc1'>"+t_data.SYMBOL_BULB+ " DOWN  </td><td>"+ t_util.ellipsis(mousedown_consumed_by      , 56)+"</td></tr>"
        + "<tr><td class='cc2'>"+t_data.SYMBOL_BULB+ " MOVE  </td><td>"+ t_util.ellipsis(mousemove_consumed_by      , 56)+"</td></tr>"
        + "<tr><td class='cc3'>"+t_data.SYMBOL_BULB+ " PRESS </td><td>"+ t_util.ellipsis(mouselong_press_consumed_by, 56)+"</td></tr>"
        + "<tr><td class='cc4'>"+t_data.SYMBOL_BULB+ " UP    </td><td>"+ t_util.ellipsis(mouseup_consumed_by        , 56)+"</td></tr>"
        + "</table>"
    ;
};
/*}}}*/
/*}}}*/
/*}}}*/

/* LAYOUT */
/*{{{*/
/* SPREAD MOVE STATE CACHE POSITION OPTIONAL STYLE {{{*/

/* LOAD */
/*}}}*/
/* LOG {{{*/
/*_ log_dom_grid_js_not_loaded {{{*/
let log_dom_grid_js_not_loaded = function (_caller)
{
logXXX("%c *** dom_grid.js NOT LOADED *** .. CALLED BY "+ _caller, lbH+lf3);
console.trace();
};
/*}}}*/
/*_ t_log_TOOL_panels {{{*/
let t_log_TOOL_panels = function(_caller, lfx=lf8)
{
log("%c"+_caller+":", lbb+lbH+lfx);
    let s = "";
    for(let i=0; i < TOOL_panels.length; ++i)
        s += LF+i+"."+t_util.get_id_or_tag(TOOL_panels[i]);
log(s);
};
/*}}}*/
/*_ t_log_panel_style_zIndex {{{*/
let t_log_panel_style_zIndex = function(panel, _caller)
{
/*{{{*/
if(!t_log_panel_style_zIndex.logged_once)
{
    log("%c t_data.ZINDEX_ON_GRID............%c"+ t_data.ZINDEX_ON_GRID          , lbH+lf8, lbb+lf4);
    log("%c t_data.ZINDEX_ABOVE_TOOLS........%c"+ t_data.ZINDEX_ABOVE_TOOLS      , lbH+lf8, lbb+lf4);
    log("%c t_data.ZINDEX_BELOW_TOOLS........%c"+ t_data.ZINDEX_BELOW_TOOLS      , lbH+lf8, lbb+lf3);
    log("%c t_data.ZINDEX_TOOL_PANEL_ZERO....%c"+ t_data.ZINDEX_TOOL_PANEL_ZERO  , lbH+lf8, lbb+lf3);
    log("%c t_data.ZINDEX_PINNED_PANEL_ZERO..%c"+ t_data.ZINDEX_PINNED_PANEL_ZERO, lbH+lf8, lbb+lf2);
    log("%c t_data.ZINDEX_STICKY_TOOL_ZERO...%c"+ t_data.ZINDEX_STICKY_TOOL_ZERO , lbH+lf8, lbb+lf1);

    t_log_panel_style_zIndex.logged_once = true;
}
/*}}}*/

    /*.......................................*/ let label  = " TOOL";      let lfx = lf3;

    if( panel == pivot_PANEL                        ) { label += " [pivot_PANEL]"   ; lfx = lf7; }
    if( panel.classList.contains( CSS_PIVOT_PANEL ) ) { label += " "+CSS_PIVOT_PANEL; lfx = lf7; }
    if( panel.classList.contains( t_data.CSS_PINNED      ) ) { label += " "+t_data.CSS_PINNED     ; lfx = lf2; }
    if( panel.classList.contains( t_data.CSS_ON_GRID     ) ) { label += " "+t_data.CSS_ON_GRID    ; lfx = lf5; }

log("%c"+_caller+"%c "+label+"%c "+panel.id+".style.zIndex %c"+panel.style.zIndex
    ,lbH         ,lbL+lf8    ,lbR+lfx                     ,lbH+lfx               );
};
/*}}}*/
/*}}}*/
/* POSITION {{{*/
/*  t_sync_TOOLS_SCROLL {{{*/
let t_sync_TOOLS_SCROLL = function()
{
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T2_GRID;

    let caller = "t_sync_TOOLS_SCROLL";

    let position =  prop.get( t_data.TOOLS_SCROLL )  ? "absolute" : "fixed";
if(log_this) log(caller+"...t_data.TOOLS_SCROLL=[%c "+prop.get( t_data.TOOLS_SCROLL )+" %c]", lb6,lbA);
if(log_this) log(caller+"...position....=[%c "+position    +" %c]", lb5,lbA);

    let position_has_changed = (hotspot.style.position != position);
    if( position_has_changed)
    {
        t_cache_armed_by(caller);
        t_cache_sync("t_data.TOOLS_SCROLL "+prop.get( t_data.TOOLS_SCROLL ));

        t_sync_tools_position(caller, position_has_changed);

        t_sync_layout(caller);
    }
};
/*}}}*/
/*_ t_sync_tools_position {{{*/
let t_sync_tools_position = function(_caller)
{
/*{{{*/
    let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T2_GRID;
if(log_this) log("t_sync_tools_position .. CALLED BY "+ _caller);

    let position =  prop.get( t_data.TOOLS_SCROLL ) ? "absolute" : "fixed";
if(log_this) log("...FROM position=["+hotspot.style.position+"]");
if(log_this) log(".....TO position=["+              position+"]");

/*}}}*/
/*{{{
    let      xy  = t_util.get_el_xy(hotspot, _caller);
    let x  = xy.x;
    let y  = xy.y;
}}}*/
    let x  = h_x;
    let y  = h_y;

    if(position == "fixed") {
        x -= window.scrollX;
        y -= window.scrollY;
    }
    else {
        x += window.scrollX;
        y += window.scrollY;
    }
/*{{{
logBIG("t_sync_tools_position ["+position+"] XY=["+x+" "+y+"]")
}}}*/

    t_tools_set_top_xy(x, y, position);
};
/*}}}*/
/*_ t_get_TOOL_panel_idx_not_pinned .. first .. last .. near {{{*/
/*{{{*/
const START_WITH_FIRST = 0;
const START_WITH_LAST  = 1;

/*}}}*/
let t_get_TOOL_panel_idx_not_pinned_first= function() { return t_get_TOOL_panel_idx_not_pinned(START_WITH_FIRST); };
let t_get_TOOL_panel_idx_not_pinned_last = function() { return t_get_TOOL_panel_idx_not_pinned(START_WITH_LAST ); };
/*_ t_get_TOOL_panel_idx_not_pinned {{{*/
let t_get_TOOL_panel_idx_not_pinned      = function(first_or_last)
{
/*{{{*/
let caller   = (first_or_last == START_WITH_FIRST) ? "t_get_TOOL_panel_idx_not_pinned_first" : "t_get_TOOL_panel_idx_not_pinned_last";
let log_this = LOG_MAP.T5_SPREAD;

/*}}}*/
    let panel_idx = 0;

    let from = (first_or_last == START_WITH_FIRST) ? 1 : (TOOL_panels.length-1);
    let to   = (first_or_last != START_WITH_FIRST) ? 0 : (TOOL_panels.length  );
    let step = (first_or_last == START_WITH_FIRST) ? 1 :                    -1 ;
if( log_this) log("%c"+caller+"%c from "+from+" %c to "+to+" %c step "+step, lbH, lbL+lf5, lbR+lf6, lbH+lf8);
    for(let i = from; i != to; i += step)
    {
        let                    panel = TOOL_panels[i];      if(!panel                ) { if( log_this) log("%c...#"+i+" "+          "!panel"        , lfX[i % 0]); continue; }
        if( panel.classList.contains ( t_data.CSS_PINNED )                           ) { if( log_this) log("%c...#"+i+" "+ panel.id+" pinned"       , lfX[i % 0]); continue; }
/*      let map =     t_tools_map_get( panel             ); if(!map || !map.selected ) { if( log_this) log("%c...#"+i+" "+ panel.id+" !map.selected", lfX[i % 0]); continue; } */
        if(!t_tools_panel_is_selected( panel                                        )) { if( log_this) log("%c...#"+i+" "+ panel.id+" NOT SELECTED" , lfX[i % 0]); continue; }
        if(!panel_idx) panel_idx = i;                                                    if(!log_this) break;
    }
if( log_this) log("%c...return panel_idx #"+ panel_idx+" ["+ t_util.get_id_or_tag(  TOOL_panels[panel_idx] ) +"]", lbH+lfX[panel_idx % 10]);
    return panel_idx;
};
/*}}}*/
/*_ t_get_hotspot_dist_next_panel_idx {{{*/
let t_get_hotspot_dist_next_panel_idx = function(moving_panel)
{
/*{{{*/
let caller   = "t_get_hotspot_dist_next_panel_idx";
let log_this = LOG_MAP.T5_SPREAD;

/*}}}*/
    let mov_idx   = 0;
    let next_idx  = 0;
    let mov_dist  = t_get_dist_from_panel_to_panel(TOOL_panels[0], moving_panel);
if( log_this) log("%c"+caller+"%c"+moving_panel.id+"%c"+mov_dist, lbH,lbH,lbH);

    let from = 1;
    let to   = TOOL_panels.length;
    let step = 1;

    let far_dist = 0;
    let far_idx  = 0;
    for(let i = from; i != to; i += step)
    {
        let next_panel  = TOOL_panels[i];     if(!next_panel                           )                continue;   /* skip       null panel */
        if( next_panel == moving_panel                                                 ) { mov_idx = i; continue; } /* skip reached moving panel */
        if( next_panel.classList.contains(t_data.CSS_PINNED)                           )                continue;   /* skip     pinned panel */
/*      let map =     t_tools_map_get(            next_panel); if(!map || !map.selected)                continue;*/ /* skip unselected panel */
        if(!t_tools_panel_is_selected(            next_panel)                          )                continue;   /* skip unselected panel */

        /* track max dist */
        let            dist_to_hotspot = t_get_dist_from_panel_to_panel(TOOL_panels[0], next_panel);
        if( far_dist < dist_to_hotspot) {
            far_dist = dist_to_hotspot;
            far_idx = i;
        }

        /* found a panel farther than moving_panel */
        if( mov_dist < dist_to_hotspot) {
            next_idx
                = (mov_idx == 0) /* moving_panel not reached yet... */
                ?  i             /* .. shift down at [next panel] */
                :  i-1           /* or shift up prev [next panel] */
            ;
            break;
        }
    }
    if(!next_idx)
        next_idx = far_idx + 1;
if( log_this)
    log_key_val_group( caller
                       , {   mov_panel : "#"+mov_idx+" "+        moving_panel.id+" dist "+ mov_dist
                           , far_panel : "#"+far_idx+" "+TOOL_panels[far_idx].id+" dist "+ far_dist
                           ,  next_idx
                       }, lf5, false);

if( log_this)
    log("%c"+caller+"%c...return next_idx #"+ next_idx+"%c"+ TOOL_panels[next_idx].id, lbH, lbH, lbH);
    return next_idx;
};
/*}}}*/
/*_ t_get_dist_from_panel_to_panel {{{*/
let t_get_dist_from_panel_to_panel = function(from_panel, to_panel)
{
    let from_x = from_panel.offsetLeft + from_panel.offsetWidth  / 2;
    let from_y = from_panel.offsetTop  + from_panel.offsetHeight / 2;

    let   to_x =   to_panel.offsetLeft +   to_panel.offsetWidth  / 2;
    let   to_y =   to_panel.offsetTop  +   to_panel.offsetHeight / 2;

    let     dx =                from_x - to_x;
    let     dy =                from_y - to_y;

    let   dist = Math.round( Math.sqrt(dx*dx + dy*dy) );

/*{{{
log("t_get_dist_from_panel_to_panel("+from_panel.id+")%c"+to_panel.id+" .. "+dist, lbH);
}}}*/
    return dist;
};
/*}}}*/
/*}}}*/
/*}}}*/
/* PINS {{{*/
/*_ t_eval_wide_or_tall_panel {{{*/
let t_eval_wide_or_tall_panel = function(tool_panel)
{
/*{{{
logXXX("t_eval_wide_or_tall_panel("+get_n_lbl(tool_panel)+")");
log_caller(2);
}}}*/
    if(!tool_panel.offsetWidth || !tool_panel.offsetHeight) return;

    /* HAS NO PIN TOOLS */
    if(   !t_util.get_el_child_with_class(tool_panel, CSS_PUSH_PIN  )
       && !t_util.get_el_child_with_class(tool_panel, CSS_CLOSEPIN  )
       && !t_util.get_el_child_with_class(tool_panel, CSS_SCALEPIN  )
       && !t_util.get_el_child_with_class(tool_panel, CSS_CLEARPIN  )
      ) {
        del_el_class(tool_panel,                      CSS_WIDE_PANEL);
        del_el_class(tool_panel,                      CSS_TALL_PANEL);
    }
    /* TOP OR RIGHT PIN TOOLS */
    else {

        /* RIGHT PADDING */
        if(tool_panel.offsetWidth   > tool_panel.offsetHeight) {
            if(!has_el_class(         tool_panel,     CSS_WIDE_PANEL)) {
                set_el_class_removing(tool_panel,     CSS_WIDE_PANEL, [CSS_TALL_PANEL]);
            }
        }
        /* TOP   PADDING */
        else {
            if(!has_el_class(         tool_panel,     CSS_TALL_PANEL)) {
                set_el_class_removing(tool_panel,     CSS_TALL_PANEL, [CSS_WIDE_PANEL]);
            }
        }
    }

    if(tool_panel == pat_bag) t_pat_bag_open_or_close_layout();
};
/*}}}*/
/*_ t_add_toolpins_on_panel {{{*/
let t_add_toolpins_on_panel = function(panel)
{
    t_add_push_pin_on_panel( panel );
    t_add_closepin_on_panel( panel );
    t_add_scalepin_on_panel( panel );
    if(      (panel.id == "transcript1")
          || (panel.id == "transcript2")
/*{{{
          || (panel.id == "pat_bag"    )
}}}*/
      )
        t_add_clearpin_on_panel(panel);

    t_eval_wide_or_tall_panel(panel);
};
/*}}}*/
/*_ t_add_push_pin_on_panel {{{*/
let t_add_push_pin_on_panel = function(tool_panel)
{
    /* inserted already {{{*/
    let push_pin = t_util.get_el_child_with_class(tool_panel, CSS_PUSH_PIN);
    if( push_pin ) return;

    /*}}}*/
    /* create class id title content insert {{{*/
    push_pin           = document.createElement("em");
    push_pin.className = "push_pin cc8";
    push_pin.id        = tool_panel.id +"_push_pin";
    push_pin.innerHTML = t_data.SYMBOL_PUSH_PIN;

    t_util.set_el_caption(push_pin);
    /*}}}*/
    /* [push_pin] closepin scalepin clearpin {{{*/
    tool_panel.insertBefore(push_pin, tool_panel.firstElementChild);

    add_el_class(tool_panel, CSS_PIN_ON_PANEL);
    /*}}}*/
};
/*}}}*/
/*_ t_add_closepin_on_panel {{{*/
let t_add_closepin_on_panel = function(tool_panel)
{
    /* cancel panel fading {{{*/
    t_fly.t_fly_cancel_fading();

    /*}}}*/
    /* already inserted {{{*/
    let closepin = t_util.get_el_child_with_class(tool_panel, CSS_CLOSEPIN);
    if( closepin ) return;

    /*}}}*/
    /* CREATE .. [closepin] {{{*/
    closepin           = document.createElement("em");
    closepin.className = "closepin";
    closepin.id        = tool_panel.id +"_closepin";
    closepin.innerHTML = t_data.SYMBOL_CLOSEPIN;

    t_util.set_el_caption(closepin);
    /*}}}*/
    /* INSERT .. push_pin [closepin] scalepin clearpin {{{*/
    let     prevpin;
    if(     prevpin = t_util.get_el_child_with_class(tool_panel, CSS_PUSH_PIN)) tool_panel.insertBefore(closepin, prevpin.nextElementSibling);
    else {  prevpin = tool_panel.firstElementChild;                      tool_panel.insertBefore(closepin, prevpin                   ); }

    add_el_class(tool_panel, CSS_PIN_ON_PANEL);
    /*}}}*/
};
/*}}}*/
/*_ t_add_scalepin_on_panel {{{*/
let t_add_scalepin_on_panel = function(tool_panel)
{
    /* inserted already {{{*/
    let scalepin = t_util.get_el_child_with_class(tool_panel, CSS_SCALEPIN);
    if( scalepin ) return;

    /*}}}*/
    /* create class id title content insert {{{*/
    scalepin             = document.createElement("em");
    scalepin.className   = CSS_SCALEPIN;
    scalepin.id          = tool_panel.id +"_scalepin";

    t_util.set_el_caption(scalepin);
    /*}}}*/
    /* push_pin closepin [scalepin] clearpin {{{*/
    let     prevpin;
    if     (prevpin = t_util.get_el_child_with_class(tool_panel, CSS_CLOSEPIN)) tool_panel.insertBefore(scalepin, prevpin.nextElementSibling);
    else if(prevpin = t_util.get_el_child_with_class(tool_panel, CSS_PUSH_PIN)) tool_panel.insertBefore(scalepin, prevpin.nextElementSibling);
    else {  prevpin = tool_panel.firstElementChild;                             tool_panel.insertBefore(scalepin, prevpin                   ); }

    add_el_class(tool_panel, CSS_PIN_ON_PANEL);
    /*}}}*/
};
/*}}}*/
/*_ t_add_clearpin_on_panel {{{*/
let t_add_clearpin_on_panel = function(tool_panel)
{
    /* inserted already {{{*/
    let clearpin = t_util.get_el_child_with_class(tool_panel, CSS_CLEARPIN);
    if( clearpin ) return;

    /*}}}*/
    /* create class id title content insert {{{*/
    clearpin           = document.createElement("em");
    clearpin.className = "clearpin";
    clearpin.id        = tool_panel.id +"_clearpin";

    clearpin.innerHTML = t_data.SYMBOL_RECYCLE;

    t_util.set_el_caption(clearpin);
    tool_panel.insertBefore(clearpin, tool_panel.firstElementChild);
    /*}}}*/
    /* push_pin closepin scalepin [clearpin] {{{*/
    let     prevpin;
    if     (prevpin = t_util.get_el_child_with_class(tool_panel, CSS_SCALEPIN)) tool_panel.insertBefore(clearpin, prevpin.nextElementSibling);
    else if(prevpin = t_util.get_el_child_with_class(tool_panel, CSS_CLOSEPIN)) tool_panel.insertBefore(clearpin, prevpin.nextElementSibling);
    else if(prevpin = t_util.get_el_child_with_class(tool_panel, CSS_PUSH_PIN)) tool_panel.insertBefore(clearpin, prevpin.nextElementSibling);
    else {  prevpin = tool_panel.firstElementChild;                             tool_panel.insertBefore(clearpin, prevpin                   ); }

    add_el_class(tool_panel, CSS_PIN_ON_PANEL);
    /*}}}*/
};
/*}}}*/
/*_ t_has_pinclass_on_panel {{{*/
let t_has_push_pin_on_panel = function(tool_panel) { return t_has_pinclass_on_panel(tool_panel, CSS_PUSH_PIN); };
let t_has_closepin_on_panel = function(tool_panel) { return t_has_pinclass_on_panel(tool_panel, CSS_CLOSEPIN); };
let t_has_scalepin_on_panel = function(tool_panel) { return t_has_pinclass_on_panel(tool_panel, CSS_SCALEPIN); };
let t_has_clearpin_on_panel = function(tool_panel) { return t_has_pinclass_on_panel(tool_panel, CSS_CLEARPIN); };
let t_has_pinclass_on_panel = function(tool_panel, pin_class)
{
    return (t_util.get_el_child_with_class(tool_panel, pin_class) != null);
};
/*}}}*/
/*_ t_del_pin_css_on_panel {{{*/

let t_del_push_pin_on_panel = function(tool_panel) { t_del_pin_css_on_panel(tool_panel, CSS_PUSH_PIN); };
let t_del_closepin_on_panel = function(tool_panel) { t_del_pin_css_on_panel(tool_panel, CSS_CLOSEPIN); };
let t_del_scalepin_on_panel = function(tool_panel) { t_del_pin_css_on_panel(tool_panel, CSS_SCALEPIN); };
let t_del_clearpin_on_panel = function(tool_panel) { t_del_pin_css_on_panel(tool_panel, CSS_CLEARPIN); };
let t_del_toolpins_on_panel = function(tool_panel) { t_del_pin_css_on_panel(tool_panel, CSS_PUSH_PIN);
                                                     t_del_pin_css_on_panel(tool_panel, CSS_CLOSEPIN);
                                                     t_del_pin_css_on_panel(tool_panel, CSS_SCALEPIN);
                                                     t_del_pin_css_on_panel(tool_panel, CSS_CLEARPIN); };

let t_del_pin_css_on_panel = function(tool_panel, pin_class)
{
    let el = t_util.get_el_child_with_class(tool_panel, pin_class);
    if(!el )   return;

    tool_panel.removeChild( el );

    del_el_class(tool_panel, CSS_PIN_ON_PANEL); /* manage pin top-right padding    */
    del_el_class(tool_panel, CSS_WIDE_PANEL  ); /* manage pin top-right pin layout */
    del_el_class(tool_panel, CSS_TALL_PANEL  ); /* manage pin top-right pin layout */
};
/*}}}*/
/*_ t_click_panel_pin_CB {{{*/
let t_click_panel_pin_CB = function(panel, pin)
{
/*{{{*/
    let caller = "t_click_panel_pin_CB";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c"+caller+"%c"+get_n_lbl(panel)+"%c"+get_n_lbl(pin)+"])"
        ,          lbL+lf5    ,lbC+lf3              ,lbR+lf4                );
/*}}}*/
    /*.....................................*/ let action;
    if     ( panel.id == "fly_div"            ) { action = "FLY CLOSE PIN"   ; t_fly.t_fly_init    ( action      ); }
    else if( has_el_class(pin , CSS_CLOSEPIN) ) { action = "PANEL UNSELECTED"; t_tools_panel_select( panel, false); }
    else if( has_el_class(pin , CSS_CLEARPIN) ) { action = "PANEL CLEARED"   ; t_clear             ( action      ); }
    else if( has_el_class(pin , CSS_PUSH_PIN) ) { action = "PANEL "+(has_el_class(onWork_PANEL, t_data.CSS_PINNED) ?    "PINNED" : "UNPINNED" );                                          }
    else if( has_el_class(pin , CSS_SCALEPIN) ) { action = "PANEL "+(has_el_class(onWork_PANEL, CSS_MAGNIFIED    ) ? "MAGNIFIED" : "SCALE 1:1"); t_toggle_onWork_PANEL_magnified(action); }

if(log_this && action) log("t_click_panel_pin_CB %c"+action, lbH+lf5);
};
/*}}}*/
/*_ t_clear_panel_pined_innerHTML {{{*/
let t_clear_panel_pined_innerHTML = function(panel)
{
/*{{{
logBIG("t_clear_panel_pined_innerHTML("+get_n_lbl(panel)+")", lf2);
log_caller();
}}}*/

    let push_pin = t_util.get_el_child_with_class(panel, CSS_PUSH_PIN); if( push_pin ) panel.removeChild(push_pin);
    let closepin = t_util.get_el_child_with_class(panel, CSS_CLOSEPIN); if( closepin ) panel.removeChild(closepin);
    let scalepin = t_util.get_el_child_with_class(panel, CSS_SCALEPIN); if( scalepin ) panel.removeChild(scalepin);
    let clearpin = t_util.get_el_child_with_class(panel, CSS_CLEARPIN); if( clearpin ) panel.removeChild(clearpin);

    panel.innerHTML = "";

    if( clearpin ) panel.insertBefore(clearpin, panel.firstElementChild);
    if( scalepin ) panel.insertBefore(scalepin, panel.firstElementChild);
    if( closepin ) panel.insertBefore(closepin, panel.firstElementChild);
    if( push_pin ) panel.insertBefore(push_pin, panel.firstElementChild);
};
/*}}}*/
/*_ t_isa_panel_pin {{{*/
let t_isa_panel_pin = function(pin)
{
    return has_el_class(pin , CSS_CLOSEPIN)
        || has_el_class(pin , CSS_CLEARPIN)
        || has_el_class(pin , CSS_PUSH_PIN)
        || has_el_class(pin , CSS_SCALEPIN)
    ;
};
/*}}}*/
/*}}}*/
/* PIVOT {{{*/
/*_ t_cycle_pivot_panel {{{*/
let t_cycle_pivot_panel = function()
{
/*{{{*/
let caller   = "t_cycle_pivot_panel";
let log_this = LOG_MAP.T5_SPREAD;

if( log_this ) log(caller);
/*}}}*/
    /* [pivot_PANEL] {{{*/
if( log_this) log("...pivot_PANEL=["+ t_util.get_id_or_tag(pivot_PANEL) +"]");
    if( !pivot_PANEL) return;

    /*}}}*/
    /* [next_visible_panel] {{{*/
    let next_visible_panel; let  next_visible_panel_idx;
    /*...................*/ let         pivot_PANEL_idx;
    for(let i=1; i < TOOL_panels.length; ++i)
    {
        /* PINNED */
        let panel = TOOL_panels[i];
        if(!panel                               ) continue;
        if( panel.classList.contains(t_data.CSS_PINNED)) continue;

        /* SELECTED */
/*{{{
        let map = t_tools_map_get(panel);
        if(!map.selected) continue;
}}}*/
        if(!t_tools_panel_is_selected(panel)) continue;

        if(!next_visible_panel && pivot_PANEL_idx) {  next_visible_panel_idx = i;  next_visible_panel    = panel; }
        if(              panel == pivot_PANEL    ) {         pivot_PANEL_idx = i;                                 }

        if(  next_visible_panel ) break;
    }
if( log_this) log("..........pivot_PANEL #"+        pivot_PANEL_idx+" ["+ t_util.get_id_or_tag( pivot_PANEL         ) +"]");
if( log_this) log("...next_visible_panel #"+ next_visible_panel_idx+" ["+ t_util.get_id_or_tag(  next_visible_panel ) +"]");

    if( !next_visible_panel ) return;

    /*}}}*/
    /* [dragging_first_panel] {{{*/
/*{{{
    let  dragging_first_panel = (pivot_PANEL == first_visible_panel);
if( log_this) log("...dragging_first_panel "+ dragging_first_panel);

    if( !dragging_first_panel) return;
}}}*/
    /*}}}*/
    /* left-shift following panels {{{*/
/*{{{
if( log_this) t_log_TOOL_panels(caller);
    for(let i=first_visible_panel_idx       ; (i+1) < TOOL_panels.length; ++i)
        TOOL_panels[i] = TOOL_panels[i+1];
    TOOL_panels[TOOL_panels.length-1] = first_visible_panel;
if( log_this) t_log_TOOL_panels(caller, lf4);

    t_TOOL_panels_SLOT_SELECTED();
}}}*/
    /*}}}*/
    /* switch with next visible */
if( log_this) t_log_TOOL_panels(caller);

        TOOL_panels[        pivot_PANEL_idx ] =  next_visible_panel;
        TOOL_panels[ next_visible_panel_idx ] =         pivot_PANEL;

if( log_this) t_log_TOOL_panels(caller, lf4);
};
/*}}}*/
/*}}}*/
/* CACHE {{{*/
/* {{{*/
const CACHE_NEVER_ARMED = "CACHE_NEVER_ARMED";
let w_W = 1280, w_H = 1024;
let p_W = 1280, p_H = 1024;
let h_W =   32, h_H =   32;
let hsR = { top:0 , left:0 , right:0 , bottom:0 };

let t_cache_armed_callers = CACHE_NEVER_ARMED;
/*}}}*/
/*_ t_cache_wph_WH {{{*/
let t_cache_wph_WH = function()
{
    w_H = Math.min(window.innerHeight, document.body.parentElement.clientHeight);
    w_W = Math.min(window.innerWidth , document.body.parentElement.clientWidth );

    p_H = document.body.parentElement.scrollHeight;
    p_W = document.body.parentElement.scrollWidth;

    let w_H_or_p_H
        = (!hotspot || (hotspot.style.position == "fixed"))
        ?  w_H
        :  p_H;

    hsR.top    = 0;
    hsR.left   = 0;
    hsR.right  = w_W        - t_data.SCROLLBAR_WIDTH;
    hsR.bottom = w_H_or_p_H - t_data.SCROLLBAR_WIDTH;

        t_gutter.layout_has_CHANGED(hsR, BOX_MARGIN);

/*{{{
    log_key_val_group(  "t_cache_wph_WH"
                        , {       window_scrollbars_visible :   window.scrollbars.visible
                            ,              window_inner_WH  :   window.innerWidth  +" "+ window.innerHeight
                            ,              window_outer_WH  :   window.outerWidth  +" "+ window.outerHeight
                            ,  body_parentElement_client_WH : document.body.parentElement.clientWidth +" "+ document.body.parentElement.clientHeight
                            ,  body_parentElement_offset_WH : document.body.parentElement.offsetWidth +" "+ document.body.parentElement.offsetHeight
                            ,  body_parentElement_scroll_WH : document.body.parentElement.scrollWidth +" "+ document.body.parentElement.scrollHeight
                        }
                        ,lf6, false);

logXXX("...WINDOW %c "+ w_W+" x "+w_H +" %c PAGE %c "+p_H +" ", lb3,lbA, lb4);
console.dir(window)
}}}*/
    return { w_W , w_H
        ,    p_W , p_H
        ,    h_W , h_H
        ,    hsR
    };

/* USAGE:
    let { w_W,w_H , p_W,p_H , h_W,h_H , hsR } = t_cache_wph_WH();
*/

};
/*}}}*/
/*_ t_cache_armed_by {{{*/
let t_cache_armed_by = function(_caller)
{
    let log_this = LOG_MAP.EV5_TOOL_CB;

    t_cache_armed_callers
        = (t_cache_armed_callers)
        ?  t_cache_armed_callers+LF+ _caller
        :                              _caller
    ;

if(log_this) log("%c CACHE INIT BY "+ _caller, lbF+lb7);

};
/*}}}*/
/*_ t_cache_has_been_armed {{{*/
let t_cache_has_been_armed = function(_caller)
{
    let log_this = LOG_MAP.EV5_TOOL_CB;

if(log_this) log("t_cache_has_been_armed: t_cache_armed_callers = %c "+t_cache_armed_callers+" %c", lbF+lb7,lbA);

    return (t_cache_armed_callers != CACHE_NEVER_ARMED);
};
/*}}}*/
/*_ t_cache_armed {{{*/
let t_cache_armed = function(_caller)
{
    let log_this = LOG_MAP.EV5_TOOL_CB;

if(log_this) log("t_cache_armed: %c CALLED BY "+ _caller    , lbF+lb7);
if(log_this) log("%c t_cache_armed_callers:%c"+LF+t_cache_armed_callers, lb7, lf7);

    return (t_cache_armed_callers != "");
};
/*}}}*/
/*_ t_cache_sync .. [w_WH .. p_WH .. h_H .. tools_map.WH] {{{*/
let t_cache_sync = function(_caller)
{
/*_ log_this {{{*/
let log_this = LOG_MAP.EV5_TOOL_CB;

/*{{{
    if(!t_cache_armed_callers) {
if(log_this) log("%c t_cache_sync: ** NO CHANGE SET"   +" .. CALLED BY "+ _caller, lbF+lb2);
        return;
    }
}}}*/
if(log_this) log("%c t_cache_sync .. CALLED BY "+ _caller,lbF+lb5);
if(log_this) log("%c t_cache_armed_callers:%c"+LF+t_cache_armed_callers, lb5, lf5);
/*}}}*/
    /* [hotring] {{{*/
    if(hotring) {
        h_W = hotring.offsetWidth ;
        h_H = hotring.offsetHeight;

if(log_this) log("...HOTSPOT %c "+ h_W+" x "+h_H +" ", lb7);
    }
    /*}}}*/
    /* TOOLS GEOMETRY {{{*/
    t_update_TOOLS_MAP_GEOMETRY("t_cache_sync .. CALLED BY "+ _caller);

/*
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_log_stage_msg(t_fly.STAGE_2_ACTION,"<em class='cc0'>LAYOUT</em> Window <em class='cc8'>"+w_H+"x"+w_W+"</em>  Page <em class='cc8'>"+p_H+"</em>");
*/
    /*}}}*/
    t_cache_armed_callers = "";
};
/*}}}*/
/*_   is_el_off_screen {{{*/
let   is_el_off_screen = function(el)
{
    let caller = "is_el_off_screen(el=["+get_n_lbl(el)+"])";
    if(LOG_MAP.T3_LAYOUT) log(caller);

    /* xy_wh */
    let   xy = t_util.get_el_xy(el, caller);
    let el_T = xy.y - window.scrollY;
    let el_L = xy.x - window.scrollX;
    let el_W = el.offsetWidth;
    let el_H = el.offsetHeight;

    /* bottom right */
    let el_B = el_T + el_H;
    let el_R = el_L + el_W;

    /* location in viewport */
    let reject_reason = "";

    if(                  (el_T < 0   )) reject_reason = "["+get_n_lbl(el)+"] IS OFF TOP"   ;
    if(!reject_reason && (el_L < 0   )) reject_reason = "["+get_n_lbl(el)+"] IS OFF LEFT"  ;
    if(!reject_reason && (el_B > w_H )) reject_reason = "["+get_n_lbl(el)+"] IS OFF BOTTOM";
    if(!reject_reason && (el_R > w_W )) reject_reason = "["+get_n_lbl(el)+"] IS OFF RIGHT" ;

    let result = (reject_reason != "");

if(LOG_MAP.EV0_LISTEN) log(caller+": ...return "+result+" %c "+reject_reason,lb2);
    return result;
};
/*}}}*/
/*}}}*/
/* MOVE {{{*/
/*_ t_tools_sync_top_xy {{{*/
let t_tools_sync_top_xy = function()
{
    t_tools_set_top_xy(h_x, h_y);
};
/*}}}*/
/*_ t_tools_set_top_xy {{{*/
/*{{{*/
const BOX_MARGIN   =  24;
let   hotspotXY    = { x:0 , y:0 , gutter_urdl:undefined};
/*}}}*/
let t_tools_set_top_xy = function(x, y, p)
{
/* {{{*/
    let caller = "t_tools_set_top_xy";
let log_this = LOG_MAP.T5_SPREAD;

if( log_this) t_fly.t_log_event_status(caller+"("+x+" "+y+ ((p) ? (" p=["+p+"]") : "") +")", lf2);
/*{{{
}}}*/
    if(!hotspot) return;
/*}}}*/
    /* NOT WHEN TOOLS ON GRID {{{*/
    if( call_t_grid_IS_ON_GRID(caller) )
    {
if(log_this) log(caller+"("+x+" , "+y+"): IS ON GRID");

        return;
    }
    /*}}}*/
    t_tools_set_hotspot_xy(x, y);
    /* [hiding_tools] .. (HOTSPOT IN GUTTER) {{{*/
    let regrouping_a_pinned_panel
        = onDown_EL && onDown_EL.classList .contains( CSS_PUSH_PIN )
    ;
    let hiding_tools
        =   !regrouping_a_pinned_panel
        && (!!hotspotXY.gutter_urdl || prop.get(t_data.EDIT_OR_STAGE)) /* [dom_hide] */
    ;

if(log_this) {
    t_log.log_label_URDL(".................hotspotXY.gutter_urdl"  ,                    hotspotXY.gutter_urdl              );
    log(".........................................hiding_tools=["+                      hiding_tools                   +"]");
    log(".......................prop.get(t_data.EDIT_OR_STAGE)=["+ prop.get(     t_data.EDIT_OR_STAGE                ) +"]");
    log("...has_el_class(headsup_ds, t_data.CSS_PINNED)=["+ has_el_class( headsup_ds, t_data.CSS_PINNED) +"]");
}
    /*}}}*/
    /* TOOLS .. (position fixed) {{{*/
    if(p && (p != hotspot.style.position))
    {
        hotspot              .style.position = p;

        headsup              .style.position = p;
        headsup_w            .style.position = p;
        headsup_ds           .style.position = p;
        headsup_bw           .style.position = p;
        headsup_bz           .style.position = p;
        headsup_fs           .style.position = p;

        pat_bag              .style.position = p;
        sel_bag              .style.position = p;
        dom_traversal        .style.position = p;

        test_panel           .style.position = p;
        dev_log_map          .style.position = p;
        dom_load_tags        .style.position = p;

        /* TRANSCRIPTS POSITION .. (when not pinned) */
        if(!transcript1.classList.contains(t_data.CSS_PINNED) ) transcript1.style.position = p;
        if(!transcript2.classList.contains(t_data.CSS_PINNED) ) transcript2.style.position = p;

        /* UNPIN FIXED {{{*/
        if(p != "fixed") {
            t_set_CSS_PINNED(hotspot      , true);

            t_set_CSS_PINNED(headsup      , true);
            t_set_CSS_PINNED(headsup_w    , true);
            t_set_CSS_PINNED(headsup_ds   , true);
            t_set_CSS_PINNED(headsup_bw   , true);
            t_set_CSS_PINNED(headsup_bz   , true);
            t_set_CSS_PINNED(headsup_fs   , true);

            t_set_CSS_PINNED(pat_bag      , true);
            t_set_CSS_PINNED(sel_bag      , true);

            t_set_CSS_PINNED(dom_traversal, true);
            t_set_CSS_PINNED(test_panel   , true);
            t_set_CSS_PINNED(dev_log_map  , true);
            t_set_CSS_PINNED(dom_load_tags, true);
        }
        /*}}}*/

    }
    /*}}}*/
    /* SPREAD GROUPED TOOLS {{{*/
    if( !hiding_tools ) {
        t_tools_spread_xy(x, y);

    }
    /*}}}*/
    t_tools_set_top_xy_p_hiding_tools(x, y, p, hiding_tools, log_this);
};
/*}}}*/
/*_ t_tools_hide {{{*/
let t_tools_hide = function()
{
let   caller = "t_tools_hide";
let log_this = LOG_MAP.T5_SPREAD;

    let xy = t_gutter.get_GUTTER_XY();
if( log_this) log(caller+": t_gutter.get_GUTTER_XY() .. xy=["+xy.x+" "+xy.y+"]");

    if(!xy.x && !xy.y) { xy.x = 0; xy.y = 0; }

    enter_CSS_SLOW_REGROUP("HIDING HOTSPOT");

    t_tools_set_top_xy(xy.x, xy.y);
};
/*}}}*/
/*_ t_tools_show {{{*/
let t_tools_show = function(centered)
{
let   caller = "t_tools_show";
let log_this = LOG_MAP.T5_SPREAD;

    let xy = t_gutter.get_WINDOW_XY();
if( log_this) log(caller+": t_gutter.get_WINDOW_XY() .. xy=["+xy.x+" "+xy.y+"]");

    if(centered || (!xy.x && !xy.y)) { xy.x = window.innerWidth  / 2; xy.y = window.innerHeight / 2; }

    enter_CSS_SLOW_REGROUP("SHOWING HOTSPOT");

    t_tools_set_top_xy(xy.x, xy.y);
};
/*}}}*/
/*_ t_tools_set_top_xy_p_hiding_tools {{{*/
let t_tools_set_top_xy_p_hiding_tools = function(x,y,p,hiding_tools,log_this)
{
/*{{{*/
let caller = "t_tools_set_top_xy_p_hiding_tools";

if( log_this) log(caller+"("+x+" "+y+" p "+hiding_tools+")");
/*}}}*/
    /* [x_sign] [y_sign] .. f(pivotXY) .. f(hiding_tools) {{{*/
    let x_sign = (x < pivotXY.x) ? 1 : -1;
    let y_sign = (y < pivotXY.y) ? 1 : -1;
    if( hiding_tools ) { x_sign *= -1; y_sign *= -1; }

    /*}}}*/
    /* [panels_on_stage] {{{*/
    if(!t_tools_loaded) t_load_TOOLS_MAP(caller);

    let panels_on_stage = [];
    if(hiding_tools && prop.get( t_data.EDIT_OR_STAGE ) && has_el_class(headsup_ds, t_data.CSS_PINNED))
        panels_on_stage.push( headsup_ds );

if( log_this) log("...panels_on_stage=["+ get_n_lbl(panels_on_stage) +"]");
    /*}}}*/
    /* LAYOUT OR HIDE TOOLS {{{*/
    for(let i=1; i < TOOL_panels.length; ++i)
    {
        /* pinned .. on_stage {{{*/
        let panel  = TOOL_panels[i];
        if(!panel) continue;

        let panel_is_pinned   = panel.classList.contains( t_data.CSS_PINNED );
        let panel_is_on_stage = panels_on_stage.includes( panel             );

        let      map = t_tools_map_get(panel);
        let selected = (map && map.selected) || t_tools_panel_is_selected(panel);

        /*}}}*/
        /* 1/3 HIDE TOOLS {{{*/
        if(hiding_tools && !panel_is_on_stage)
        {
            add_el_class(panel, t_data.CSS_HIDDEN);
        }
        /*}}}*/
        /* 2/3 SHOW PINNED TOOLS {{{*/
        else if( panel_is_pinned )
        {
            if(    selected ) del_el_class(panel, t_data.CSS_HIDDEN);
            else              add_el_class(panel, t_data.CSS_HIDDEN);
        }
        /*}}}*/
        /* 3/3 LAYOUT UNPINNED TOOLS {{{*/
        else {
            if(map) {
                /* position {{{*/
                if( p ) {
                    map.p = p;
                }
                /*}}}*/
                /* [not selected] .. [hidden] {{{*/
                if(!selected) {
                    add_el_class(panel, t_data.CSS_HIDDEN);
                }
                /*}}}*/
                /* [selected] .. [not hidden] .. WH .. zIndex {{{*/
                else {
                    del_el_class(panel, t_data.CSS_HIDDEN);

                    let w = map.w;
                    let h = map.h;
                    t_tools_set_panel_xy_wh(panel, map.x, map.y, w, h, x_sign, y_sign);

                    panel.style.zIndex
                        = (panel == pivot_PANEL)
                        ?  t_data.ZINDEX_ABOVE_TOOLS     - 1 /* as the top-most tool */
                        :  t_data.ZINDEX_TOOL_PANEL_ZERO + i;
                }
                /*}}}*/
            }
        }
        /*}}}*/
    }
    /*}}}*/
    /* pause or resume animation {{{*/
    let is_hiding_tools  = has_el_class(hotspot, CSS_HIDING_TOOLS);
    if( is_hiding_tools != hiding_tools)
    {
/*{{{
log("%c hiding_tools=["+hiding_tools+"]", lbH+lfX[hiding_tools ? 8:4]);
}}}*/
        set_el_class_on_off(hotspot, CSS_HIDING_TOOLS, hiding_tools);
    }
/*
    let el;
    if(hiding_tools) {
        hotring.style.animationPlayState = "paused";
    }
    else {
        hotring.style.animationPlayState = "running";
    }
*/
    /*}}}*/
    /* TOOLS [nw_ne_se_sw] CORNER {{{*/
    t_trapped_dir_show(x, y);

    /*}}}*/
};
/*}}}*/
/*_ t_tools_set_panel_xy {{{*/
let t_tools_set_panel_xy = function(panel, x, y)
{
    t_tools_set_panel_xy_wh(panel, x, y, panel.offsetWidth, panel.offsetHeight);
};
/*}}}*/
/*_ t_tools_set_panel_xy_wh {{{*/
/*{{{*/
/*{{{
const TOOL_ROTATION_STEP        = 10;
}}}*/

/*}}}*/
let t_tools_set_panel_xy_wh = function(panel, x, y, w, h, x_sign=1, y_sign=1)
{
/*{{{*/
let caller = "t_tools_set_panel_xy_wh("+get_n_lbl(panel)+", xy=["+x+" , "+y+"], w=["+w+" "+h+"])";
let log_this = LOG_MAP.T5_SPREAD;

/*}}}*/
    /* [top_left] or [bottom_right] .. f(x_sign, y_sign) {{{*/
    if(x_sign < 0) x -= w;
    if(y_sign < 0) y -= h;
/*{{{
if(log_this) log(caller+": ...from=["+panel.style.top+" "+panel.style.left+"]");
if(log_this) log(caller+": .....to=["+panel.style.top+" "+panel.style.left+"]");
}}}*/
    panel.style.left      = x+"px"  ;
    panel.style.top       = y+"px"  ;

    if(   (panel != hotspot)
       && (panel != pat_bag)
       && !panel.classList.contains( t_data.CSS_PINNED )
      ) {
        let t_x = (x_sign > 0) ? 0 : 100;
        let t_y = (y_sign > 0) ? 0 : 100;
        panel.style.transformOrigin = t_x+"% "+t_y+"% 0";
    }

    /*}}}*/
    /* RANK {{{*/
    let touched_idx  = spreaded_tools.indexOf( onWork_PANEL );
    let this_el_idx  = spreaded_tools.indexOf( panel        );
    let this_el_rank = this_el_idx - touched_idx;

/*
    let     rotation = parseInt(this_el_rank * TOOL_ROTATION_STEP);
    panel.style.transform = "rotate("+ rotation +"deg)";
*/

if(log_this) log(caller+": ...this_el_rank=["+this_el_rank+"] / "+spreaded_tools.length+" onWork_PANEL=["+ get_n_lbl(onWork_PANEL) +"]");
    /*}}}*/
};
/*}}}*/
/*_ t_tools_set_hotspot_xy {{{*/
/*{{{*/

let h_x;
let h_y;

/*}}}*/
let t_tools_set_hotspot_xy = function(x,y)
{
/*{{{*/
let caller = "t_tools_set_hotspot_xy";
let log_this = LOG_MAP.T5_SPREAD;

/*}}}*/
    /* CONFINE HOTSPOT TO BORDERED-VIEWPORT {{{*/
/*{{{
    if(!hsR.right)
}}}*/
    t_cache_wph_WH(); /* in case of init-time early call */

    x = Math.max(x , hsR.left   + BOX_MARGIN);
    x = Math.min(x , hsR.right  - BOX_MARGIN);
    y = Math.max(y , hsR.top    + BOX_MARGIN);
    y = Math.min(y , hsR.bottom - BOX_MARGIN);

    let hot_spot_has_moved
        =  (x != h_x)
        || (y != h_y);

    if(!hot_spot_has_moved) {
if(log_this) log(caller+"("+x+" "+y+"): UNCHANGED");

        return;
    }

if(log_this)
        log(caller+"("+x+" "+y+"):"+LF
           +"...hotspotXY FROM XY=["+ h_x  +" "+ h_y     +"]"+LF
           +"...............TO XY=["+   x  +" "+   y     +"]"   );

    /*}}}*/
    /* MOVE [hotspot] {{{*/
    h_x                = x;
    h_y                = y;
    hotspot.style.left = x +"px";
    hotspot.style.top  = y +"px";

    hotspotXY.gutter_urdl = t_gutter.get_XY_URDL(x, y, "MOVING HOTSPOT");
    t_gutter.set_CSS_URDL(hotring, hotspotXY.gutter_urdl);

    /*}}}*/
    /* POST A STORAGE UPDATE .. f(hot_spot_has_moved) {{{*/
    if(    !save_update_is_pending()
        && !prop.get( t_data.EDIT_OR_STAGE   )
      ) {
if(log_this) log_key_val_group("MOVING hotspotXY", hotspotXY, lf4, true);

        t_save_update_post(caller, PENDING_LOCALSTORAGE_DELAY);
    }
    /*}}}*/
};
/*}}}*/

/*_ t_hide_hotspot {{{*/
/*{{{*/
const HOTSPOT_HIDE_SHOW_DELAY = 1000;

/*}}}*/
let t_hide_hotspot = function(delay/* ms,0,undefined */)
{
    if(delay === undefined) delay = HOTSPOT_HIDE_SHOW_DELAY;

    let x = /*hotspotXY.x_in_gutter ||*/ HOTSPOT_STANDBY_X;
    let y = /*hotspotXY.y_in_gutter ||*/ HOTSPOT_STANDBY_Y;

    /* enter drag mode */
    if(delay) t_drag_hotspot_xy_delay(x, y, delay);
    else      t_tools_set_top_xy(x,y);

    /* enter drag mode style */
    add_el_class(dom_tools_html, t_data.CSS_PRESSED);
    t_raise_pivot_PANEL_layout("t_hide_hotspot");

/*{{{
}}}*/
    hotspotXY.x           = 0;
    hotspotXY.y           = 0;
    hotspotXY.gutter_urdl = null;
    t_store.t_store_set_value("hotspotXY", JSON.stringify(hotspotXY));
};
/*}}}*/
/*_ t_show_hotspot {{{*/
let t_show_hotspot = function(delay=HOTSPOT_HIDE_SHOW_DELAY)
{
    /* enter drag mode */
    t_drag_hotspot_xy_delay(hotspotXY.x, hotspotXY.y, delay);

    /* enter drag mode style */
    add_el_class(dom_tools_html, t_data.CSS_PRESSED);
    t_raise_pivot_PANEL_layout("t_show_hotspot");
};
/*}}}*/
/*➔ t_drag_hotspot_xy_delay {{{*/
let t_drag_hotspot_xy_delay = function(x,y,delay)
{
/*{{{*/
let   caller = "t_drag_hotspot_xy_delay";
let log_this = DOM_TOOLS_LOG;

let tag_this = DOM_TOOLS_TAG || log_this;
if( log_this) log("%c "+caller+"("+x+" , "+y+")", lf1);
/*}}}*/

    if( hotspot.drag_hotspot_request ) drag_HOTSPOT_cancel();

    let requestID = requestAnimationFrame( drag_HOTSPOT_AnimationFrame );
    let time_from = new Date().getTime();
    let    x_from = hotspot.offsetLeft;
    let    y_from = hotspot.offsetTop;

    hotspot.drag_hotspot_request
        = {   x_to      : x
            , y_to      : y
            , delay
            , x_from
            , y_from
            , time_from
            , requestID
        };
if( log_this) log(hotspot.drag_hotspot_request);

if( tag_this) log_key_val(caller, hotspot.drag_hotspot_request, lb1);
};
/*}}}*/
/*_   drag_HOTSPOT_cancel {{{*/
let   drag_HOTSPOT_cancel = function()
{
    if(!hotspot.drag_hotspot_request) return;

    if(hotspot.drag_hotspot_request.requestID)
        cancelAnimationFrame( hotspot.drag_hotspot_request.requestID );

    delete hotspot.drag_hotspot_request;
};
/*}}}*/
/*_   drag_HOTSPOT_AnimationFrame {{{*/
let   drag_HOTSPOT_AnimationFrame = function(timestamp)
{
    /* canceled before this call */
    if(!hotspot.drag_hotspot_request)
        return;

    /* next step .. or destination reached */
    if( drag_HOTSPOT_XY() ) hotspot.drag_hotspot_request.requestID = requestAnimationFrame( drag_HOTSPOT_AnimationFrame );
    else             delete hotspot.drag_hotspot_request;

};
/*}}}*/
/*_   drag_HOTSPOT_XY {{{*/
let   drag_HOTSPOT_XY = function()
{
/*{{{*/
let   caller = "drag_HOTSPOT_XY";
let log_this = DOM_TOOLS_LOG;

/*}}}*/
    /* destination */
    let drag_req = hotspot.drag_hotspot_request;
    let       dx = drag_req.x_to - drag_req.x_from;
    let       dy = drag_req.y_to - drag_req.y_from;

    /* situation */
    let time_now = new Date().getTime();
    let       dt = time_now - drag_req.time_from;
    let    ratio = Math.min(1, dt / ((drag_req.delay > dt) ? drag_req.delay : 1));

    /* move */
    if(ratio <= 1)
    {
        let x    = drag_req.x_from + dx * ratio;
        let y    = drag_req.y_from + dy * ratio;

        t_tools_set_top_xy(x,y);
    }

if(log_this)
    log_key_val(caller
                , {   X         : dx+" ← "+ (dx * ratio)
                    , Y         : dy+" ← "+ (dy * ratio)
                    , T         : dt+" ← "+ (dt * ratio)+" ms"
                    , ratio     : ratio.toFixed(1)
                }, lf2, true);

    return (ratio < 1); /* more to do */
};
/*}}}*/

/*}}}*/
/* SPREAD {{{*/
/*{{{*/
let fully_spread_since_onDown;

/*}}}*/
/*_ t_tools_spread_xy {{{*/
let t_tools_spread_xy = function(x, y)
{
/*{{{*/
let   caller = "t_tools_spread_xy";
let log_this = LOG_MAP.T5_SPREAD;

if( log_this) t_fly.t_log_event_status(caller+"("+x.toFixed(0)+" "+y.toFixed(0)+")", lf2);

    if(!hotspot) return;
/*}}}*/
    /* [x_sign y_sign] {{{*/
    let x_sign = (x < pivotXY.x) ? 1 : -1;
    let y_sign = (y < pivotXY.y) ? 1 : -1;

    if( !!hotspotXY.gutter_urdl ) { x_sign *= -1; y_sign *= -1; } /* eslint-disable-line no-extra-boolean-cast */

    x += x_sign * h_W / 2;
    y += y_sign * h_H / 2;

    /*}}}*/
    /* [onWork_PANEL_num dx dy] {{{*/
    if(!t_tools_loaded) t_load_TOOLS_MAP(caller);
if(!pivot_PANEL) t_set_pivot_PANEL(onWork_PANEL, "PICKING OUT A MISSING [pivot_PANEL]");

    if(!pivot_PANEL) {
/*{{{
logXXX(caller+": !pivot_PANEL") .. TODO PIVOT
}}}*/
        return;
    }
    let xy_ratio = t_set_spread_ratio_at_xy_in_panel(x, y, pivot_PANEL);
/*{{{
logBIG("xy_ratio=["+xy_ratio.x+" "+xy_ratio.y+"]", lf4)
}}}*/

    /*}}}*/
    /*  fully_spread .. (while moving pivot_PANEL) {{{*/
    if(has_moved && !fully_spread_since_onDown && (onWork_PANEL == pivot_PANEL))
    {
        let fully_spread = ((spread_ratio.x >= 0.99) || (spread_ratio.y >= 0.99));
if( log_this) log("%c"+(fully_spread ? "@@@ fully_spread" : "not fully_spread"), lbH+(fully_spread ? lf4 : lf8));

        if( fully_spread ) {
if( log_this) t_fly.t_log_event_status(caller, lf2);

            fully_spread_since_onDown = true; /* so it may not be cycled without another onDown */
            t_cycle_pivot_panel();
        }
    }
    /*}}}*/
    /* SPREAD TOOLS AWAY FROM HOTSPOT {{{*/
    let xy = {x , y};

    for(let i=1; i < TOOL_panels.length; ++i)
    {
        /* PINNED */
        let panel = TOOL_panels[i];
        if(!panel                                            ) continue;
        if( panel.classList.contains(t_data.CSS_PINNED)      ) continue;

        /* SELECTED */
        let map = t_tools_map_get(panel);
        if(!map                                              ) continue;
        if(!map.selected && !t_tools_panel_is_selected(panel)) continue;

        /* layout */
        if( has_el_class(panel, t_data.CSS_HIDDEN) ||!panel.offsetWidth) {
/*{{{
log("%c "+get_id_or_tag_and_className(panel)+".offsetWidth=["+panel.offsetWidth+"]", lbH+lf3);
}}}*/
        del_el_class(panel, t_data.CSS_HIDDEN);
/*{{{
log("%c "+get_id_or_tag_and_className(panel)+".offsetWidth=["+panel.offsetWidth+"]", lbH+lf3);
}}}*/
        if(!panel.offsetWidth)
            logBIG(get_id_or_tag_and_className(panel)+".offsetWidth=["+panel.offsetWidth+"]", lf3);
        }

        /* new panel XY */
        map.x =  xy.x;
        map.y =  xy.y;

        /* next panel XY .. f(this_panel_WH * ratio) */
/*{{{
if(panel == pat_bag) log(caller+": pat_bag map.h=["+map.h+"] .. offsetHeight=["+panel.offsetHeight+"]")
}}}*/
        xy    = t_tools_spread_panel_xy(panel, map, xy_ratio, x_sign, y_sign);
/*{{{
logXXX(panel.id+" WY=["+map.w+" "+map.h+"] .. xy=["+xy.x+" "+xy.y+"]");
}}}*/
    }
    /*}}}*/
};
/*}}}*/
/*_ t_set_spread_ratio_at_xy_in_panel {{{*/
/*{{{*/
let spread_ratio = { x:0 , y:0 };

/*}}}*/
let t_set_spread_ratio_at_xy_in_panel = function(x, y, moving_panel)
{
/* i.e. spread_ratio := (pivotXY / SUM-OF-ALL-UNPINNED-SELECTED-PANELS-WH) */
let caller = "t_set_spread_ratio_at_xy_in_panel";
/*{{{
logXXX(caller+"("+x+","+y+") has_moved=["+has_moved+"] spread_ratio.x=["+spread_ratio.x+"]");
}}}*/
    /* unchanged {{{*/
    let unchanged
        =   spread_ratio.x
        && !has_moved
        && !hotspot.drag_hotspot_request;

    if( unchanged ) {
/*{{{
logXXX("%c "+caller+": unchanged .. returning spread_ratio", lbb+lbF+lf2);
}}}*/
        return spread_ratio;
    }
    /*}}}*/
    /* [spread_ratio] .. [0 .. (fully_spread=1)] {{{*/
    let up_to_panel_WH = t_spread_get_leading_panels_wh_up_to_panel( moving_panel );
    if( up_to_panel_WH ) {
/*{{{
log(caller+"%c"+moving_panel.id+"%c FROM "+parseInt(100 * spread_ratio.x)+" x "+ parseInt(100 * spread_ratio.y)+"  %c"+up_to_panel_WH.w+" "+up_to_panel_WH.h
    ,       lbH+lf8             ,lbH+lf8                                                                          ,lbF+lb7                        );
}}}*/

        let x_ratio = Math.abs(x - pivotXY.x) / up_to_panel_WH.w;
        let y_ratio = Math.abs(y - pivotXY.y) / up_to_panel_WH.h;

        x_ratio     = Math.min(x_ratio , 1);
        y_ratio     = Math.min(y_ratio , 1);
        x_ratio     = Math.max(x_ratio , 0);
        y_ratio     = Math.max(y_ratio , 0);

        spread_ratio.x = x_ratio;
        spread_ratio.y = y_ratio;

        if(!save_update_is_pending()) t_save_update_post(caller, PENDING_LOCALSTORAGE_DELAY);
    }
    /*}}}*/
/*{{{
log(caller+"%c"+moving_panel.id+"%c TO..."+parseInt(100 * spread_ratio.x) +" x "+ parseInt(100 * spread_ratio.y), lbH+lf3, lbH+lf4);
}}}*/
/*{{{
t_spread_log(moving_panel);
}}}*/
/*{{{
log("%c spread_ratio=[ "+spread_ratio.x.toFixed(2)+" , "+spread_ratio.y.toFixed(2)+" ]", lbH+lf7)
}}}*/
    return spread_ratio;
};
/*}}}*/
/*_ t_set_spread_ratio_up_to_panel {{{*/
let t_set_spread_ratio_up_to_panel = function(panel)
{
    /*  sum of preceeding fully spread panels */
    let up_to_panel_WH = t_spread_get_leading_panels_wh_up_to_panel( panel );

    /* WH ratio to reach panel corner */
    if(up_to_panel_WH) {
        /* panel corner .. f(pivot quadrant) */
        let      x = panel.offsetLeft;
        let      y = panel.offsetTop ;
        let x_sign = (x > h_x) ? 1 : -1;
        let y_sign = (y > h_y) ? 1 : -1;
        if( x_sign < 0) x += onWork_PANEL.offsetWidth;
        if( y_sign < 0) y += onWork_PANEL.offsetHeight;

        x += x_sign * h_W / 2;
        y += y_sign * h_H / 2;

        spread_ratio.x = Math.abs(x - h_x) / up_to_panel_WH.w;
        spread_ratio.y = Math.abs(y - h_y) / up_to_panel_WH.h;
    }
};
/*}}}*/
/*_ t_spread_log {{{*/
let t_spread_log = function(moving_panel)
{
    set_tool_id_value(t_data.WORDS_FILTER
                        , moving_panel.id+" "
                        + parseInt(100 * spread_ratio.x)+"*"+parseInt(100 * spread_ratio.y)
                       );

    let msg
        = "<pre>"
        +  moving_panel.offsetLeft +"@"+ moving_panel.offsetTop+"          "+ moving_panel.id+LF
        +             h_x          +"@"+            h_y        +"          "+ "hotspot"      +LF
        +       pivotXY.x          +"@"+      pivotXY.y        +"          "+ "pivot"
        + "</pre>"
    ;

    if(onWork_PANEL) t_words_option_tooltip(msg);
};
/*}}}*/
/*_ t_spread_get_leading_panels_wh_up_to_panel {{{*/
let              my_up_to_panel_WH = {};
let t_spread_get_leading_panels_wh_up_to_panel = function( moving_panel )
{
    if(!t_tools_loaded) t_load_TOOLS_MAP("t_spread_get_leading_panels_wh_up_to_panel");

/* {Width Height} .. f(selected tools collated spread area) */
    my_up_to_panel_WH.w = 0;
    my_up_to_panel_WH.h = 0;
    let selected_count = 0;
    for(let i=1; i < TOOL_panels.length; ++i)
    {
        /* PINNED */
        let panel = TOOL_panels[i];
        if(!panel) continue;
        if( panel.classList.contains( t_data.CSS_PINNED )) continue;

        /* SELECTED */
        let map = t_tools_map_get(panel);
        if(!map.selected && !t_tools_panel_is_selected(panel)) continue;

        selected_count += 1;

        my_up_to_panel_WH.w += map.w;
        my_up_to_panel_WH.h += map.h;

        if(panel == moving_panel) break;
    }

/*{{{
log("...["+moving_panel.id+"] selected_count=["+selected_count+"] .. my_up_to_panel_WH=["+my_up_to_panel_WH.w+" "+my_up_to_panel_WH.h+"]");
}}}*/
    return (selected_count > 0) ? my_up_to_panel_WH : null;
};
/*}}}*/
/*_ t_tools_spread_panel_xy {{{*/
let t_tools_spread_panel_xy = function(panel, map, xy_ratio, x_sign, y_sign)
{
/*{{{
    log_key_val_group("t_tools_spread_panel_xy"
                      , {   panel
                          , panel_className    : panel.className
                          , panel_offsetWidth  : panel.offsetWidth
                          , panel_offsetHeight : panel.offsetHeight
                          , map
                          , xy_ratio_xy : xy_ratio.x.toFixed(2)+" "+xy_ratio.y.toFixed(2)
                          , x_sign
                          , y_sign
                      }, lf9, false);
}}}*/
    /* [pivot_PANEL] .. (CAP PIVOT POINT at 100%) {{{*/
    map.w  = panel.offsetWidth;
    map.h  = panel.offsetHeight;

    let    x  = map.x;
    let    y  = map.y;
    let    w  = map.w;
    let    h  = map.h;

    if(panel == pivot_PANEL)
    {
        if((spread_ratio.x == 1) || (spread_ratio.y == 1))
        {
            let piv_x = (spread_ratio.x == 1) ? (x + x_sign * w) : pivotXY.x;
            let piv_y = (spread_ratio.y == 1) ? (y + y_sign * h) : pivotXY.y;
            t_set_pivotXY(piv_x, piv_y);
        }
    }
    /*}}}*/
    /* return next panel XY .. f(offset) {{{*/
    let dx = xy_ratio.x * map.w;
    let dy = xy_ratio.y * map.h;

    x += x_sign * Math.min(w, Math.abs(dx));
    y += y_sign * Math.min(h, Math.abs(dy));

    return {x , y};
    /*}}}*/
};
/*}}}*/
/*}}}*/
/* OUTLINE {{{*/
/*{{{*/
const OUTLINE_SCAN_STEP_MAX = 3;
const OUTLINE_SCAN_SIGN_MAX = [
    { x: 1 , y: 1 } /* RIGHT  ABOVE  */
  , { x: 1 , y:-1 } /* RIGHT  BELOW  */
  , { x:-1 , y: 1 } /* LEFT   ABOVE  */
  , { x:-1 , y:-1 } /* LEFT   BELOW  */
];

const COLORX
    = [   "#964B00"
        , "#FF0000"
        , "#FFA500"
        , "#FFFF00"
        , "#9ACD32"
        , "#6495ED"
        , "#EE82EE"
        , "#A0A0A0"
        , "#FFFFFF"
        , "#000000"
    ];

let outlined_divs = [];
let outlined_dots = [];
let outlined_dots_used_since_t_outline_clear;
/*}}}*/
/*_ t_outline_viewport_top_containers {{{*/
let t_outline_viewport_top_containers = function()
{
/*{{{*/
let caller = "t_outline_viewport_top_containers";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
if( log_this) console.time(caller);
    /* clear previous {{{*/
    t_outline_clear();

    /*}}}*/
    /* outline current {{{*/
    let v_W = window.innerWidth ;
    let v_H = window.innerHeight;
    let w_2 = v_W / 2;
    let h_2 = v_H / 2;

    /*}}}*/
    /* CIRCLE SCAN AROUND VIEWPORT CENTER {{{*/
    let          step_Y  = v_H / 2 /  OUTLINE_SCAN_STEP_MAX        ;
    let          step_X  = v_W / 2 /  OUTLINE_SCAN_STEP_MAX        ;
    let             num  = 0;
    for(        let col  = 0; (col <= OUTLINE_SCAN_STEP_MAX       ); ++col) { let d_x = col * step_X;
        for(    let row  = 0; (row <= OUTLINE_SCAN_STEP_MAX       ); ++row) { let d_y = row * step_Y;
            for(let dir  = 0; (dir <  OUTLINE_SCAN_SIGN_MAX.length); ++dir)
            {
                if((col == 0)     && (OUTLINE_SCAN_SIGN_MAX[dir].x != 1)) continue; /* skip zero mirror */
                if((row == 0)     && (OUTLINE_SCAN_SIGN_MAX[dir].y != 1)) continue;

                let left = w_2 + d_x *  OUTLINE_SCAN_SIGN_MAX[dir].x ;
                let top  = h_2 + d_y *  OUTLINE_SCAN_SIGN_MAX[dir].y ;

if( log_this)   t_outline_dot(num, left, top);

                let range;
                if( range = t_select.get_range_from_caret (left, top))
                    num   = t_outline_range(range, left, top, num);
                if((col  == 0) && (row == 0)) break; /* directionless case */
            }
        }
    }
/*{{{
}}}*/
    /*}}}*/
if( log_this) console.timeEnd(caller);
};
/*}}}*/
/*_ t_outline_range {{{*/
let t_outline_range = function(range, left, top, num)
{
/*{{{*/
let caller = "t_outline_range";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) t_util.log_range(range, caller);
/*}}}*/
    /* container {{{*/
    let el = range.startContainer;
    if( el.nodeType == Node.TEXT_NODE) el = el.parentElement;

    /*}}}*/
    /* outined already {{{*/
    if(has_el_class(el, "outlined")               ) return num;
    add_el_class   (el, "outlined");

    /*}}}*/
    /* viewport .. top-left not within {{{*/
    let tl   = t_util.get_el_xy(el, caller);
    if( tl.x < (window.scrollX                   )) return num;
    if( tl.y < (window.scrollY                   )) return num;
    if( tl.x > (window.scrollX+window.innerWidth )) return num;
    if( tl.y > (window.scrollY+window.innerHeight)) return num;

    /*}}}*/
    /* viewport .. bottom-right not within {{{*/
    let br   = t_util.get_el_xy(el, caller);
    br.x += el.offsetWidth;
    br.y += el.offsetHeight;
    if( br.x < (window.scrollX                   )) return num;
    if( br.y < (window.scrollY                   )) return num;
    if( br.x > (window.scrollX+window.innerWidth )) return num;
    if( br.y > (window.scrollY+window.innerHeight)) return num;

    /*}}}*/
    /* new div {{{*/
    let div = outlined_divs[num];
    if(!div) {
        div = document.createElement("DIV");
        add_el_class(div, "outlined_divs");
        document.documentElement.appendChild(div);
        outlined_divs[num] = div;
    }
    /*}}}*/
    /* show div {{{*/
    div.style.top             = (tl.y           -     div.style.borderWidth) +"px";
    div.style.left            = (tl.x           -     div.style.borderWidth) +"px";
    div.style.width           = (el.offsetWidth + 2 * div.style.borderWidth) +"px";
    div.style.height          = (el.offsetHeight+ 2 * div.style.borderWidth) +"px";

    div.style.zIndex          = el.style.zIndex + 1;
    div.style.borderColor     = COLORX[num % 10];
    div.style.display         = "block";

    /*}}}*/
    return num + 1;
};
/*}}}*/
/*_ t_outline_dot {{{*/
let t_outline_dot = function(num,left,top)
{
    /* new dot {{{*/
    let div = outlined_dots[outlined_dots_used_since_t_outline_clear];
    if(!div) {
        div = document.createElement("DIV");
        add_el_class(div, "outlined_dots");
        document.documentElement.appendChild(div);
        outlined_dots[outlined_dots_used_since_t_outline_clear] = div;
    }

    outlined_dots_used_since_t_outline_clear += 1;
    /*}}}*/
    /* show div {{{*/
    div.style.top             = (window.scrollY + top )+"px";
    div.style.left            = (window.scrollX + left)+"px";

    div.style.backgroundColor = COLORX[num % 10];
    div.style.display         = "block";
/*{{{
    div.innerHTML             = num+1;
}}}*/
    div.innerHTML             = outlined_dots_used_since_t_outline_clear;

    /*}}}*/
};
/*}}}*/
/*_ t_outline_clear {{{*/
let t_outline_clear = function()
{
    /* declassify document containers {{{*/
    let className = "outlined";
    let node_list = document.querySelectorAll("."+className);
    for(let i=0; i < node_list.length; ++i)
        del_el_class(node_list[i], className);

    /*}}}*/
    /* hide outlined_divs {{{*/
    for(let i=0; i < outlined_divs.length; ++i)
        outlined_divs[i].style.display = "none";

/*}}}*/
    /* hide outlined_dots {{{*/
    for(let i=0; i < outlined_dots.length; ++i)
        outlined_dots[i].style.display = "none";

    /*}}}*/
    outlined_dots_used_since_t_outline_clear = 0;
};
/*}}}*/
/*}}}*/
/* STATE {{{*/
/*_ t_sync_wording {{{*/
let t_sync_wording = function(_caller)
{
/*{{{*/
    let caller = "t_sync_wording";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller+": wording=["+ prop.get( t_data.WORDING ) +"] %c CALLED BY "+_caller, lbH+lf5);
/*}}}*/

    if(typeof dom_wording == "undefined") {
        prop.set(t_data.ANCHOR_FREEZE, false);
        return;
    }

    let cycle_step
        = !prop.get( t_data.WORDING        ) ? "OFF"
        : (prop.get( t_data.THEME_DARK     ) ? "DARK" : "LIGHT")
    ;

    let anchor_freeze_by_wording_or_user
        =  prop.get( t_data.WORDING       )
        || prop.get( t_data.ANCHOR_FREEZE )
        || prop.get( t_data.EDIT_OR_STAGE )
    ;
if( log_this) log(caller+": anchor_freeze_by_wording_or_user=["+anchor_freeze_by_wording_or_user+"]");
    t_wording.t_wording_cycle(cycle_step, anchor_freeze_by_wording_or_user);
};
/*}}}*/
/*_ are_p1_p2_in_same_quadrant_and_p2_in_corner {{{*/
let are_p1_p2_in_same_quadrant_and_p2_in_corner = function(p1, p2)
{
let log_this = LOG_MAP.T5_SPREAD;
    /* center {{{*/
    let c_x = w_W / 2;
    let c_y = w_H / 2;
if(log_this) {
    log("____________________");
    log("..............p1 ["+ p1.x +" , "+ p1.y +"]");
    log("..............p2 ["+ p2.x +" , "+ p2.y +"]");
    log("..........center ["+  c_x +" , "+  c_y +"]");
}
    /*}}}*/
    /* not same_quadrant {{{*/
    let same_quadrant
        =  ((p1.x >= c_x) && (p2.x >= c_x) || (p1.x <  c_x) && (p2.x <  c_x))
        && ((p1.y >= c_y) && (p2.y >= c_y) || (p1.y <  c_y) && (p2.y <  c_y))
    ;

if(log_this) log("...same_quadrant=["+ same_quadrant +"]");
    if(!same_quadrant) return false;
    /*}}}*/
    /* not p2_in_corner {{{*/
    let p2_in_corner
        =  Math.abs(p2.x - c_x) >= Math.abs(p1.x - c_x)
        && Math.abs(p2.y - c_y) >= Math.abs(p1.y - c_y)
    ;

if(log_this) log("...p2_in_corner=["+ p2_in_corner +"]");
    if(!same_quadrant) return false;
    /*}}}*/
    return true;
};
/*}}}*/
/*_ is_pannel_in_hotspot_quadrant {{{*/
let is_pannel_in_hotspot_quadrant = function(pannel)
{
let log_this = LOG_MAP.T5_SPREAD;

    let px = pannel .offsetLeft + pannel.offsetWidth  / 2;
    let py = pannel .offsetTop  + pannel.offsetHeight / 2;
    let hx = hotspot.offsetLeft      + h_W            / 2;
    let hy = hotspot.offsetTop       + h_H            / 2;

    let same_quadrant
        =  ((px >= pivotXY.x) && (hx >= pivotXY.x) || (px <  pivotXY.x) && (hx <  pivotXY.x))
        && ((py >= pivotXY.y) && (hy >= pivotXY.y) || (py <  pivotXY.y) && (hy <  pivotXY.y))
    ;

if(log_this) {
    log("____________________");
    log("...pivotXY=["+ pivotXY.x +" , "+ pivotXY.y +"]");
    log(".....px py=["+        px +" , "+        py +"]");
    log(".....hx hy=["+        hx +" , "+        hy +"]");
    log("...same_quadrant=["+ same_quadrant         +"]");
}

    return same_quadrant;
};
/*}}}*/
/*_ get_pannel_to_hotspot_factor_xy {{{*/
/*
let get_pannel_to_hotspot_factor_xy = function(pannel)
{
let log_this = LOG_MAP.T5_SPREAD;

    let px = pannel .offsetLeft + pannel.offsetWidth  / 2 - pivotXY.x;
    let py = pannel .offsetTop  + pannel.offsetHeight / 2 - pivotXY.y;
    let hx = hotspot.offsetLeft +      h_W            / 2 - pivotXY.x;
    let hy = hotspot.offsetTop  +      h_H            / 2 - pivotXY.y;

    let fx = hx / px;
    let fy = hy / py;

if(log_this) {
    log("____________________");
    log("...pivotXY=["+ pivotXY.x +" , "+ pivotXY.y +"]");
    log(".....px py=["+ px     +" , "+           py +"]");
    log(".....hx hy=["+ hx     +" , "+           hy +"]");
    log(".....fx fy=["+ fx     +" , "+           fy +"]");
}

    return { x: fx, y: fy };
};
*/
/*}}}*/
/*}}}*/
/* STYLE {{{*/
/*_ t_sync_styles {{{*/
/*{{{*/
const T_SYNC_STYLES_DELAY = 50;
let   t_sync_styles_timer;
let   t_sync_styles_caller_csv;

/*}}}*/
let t_sync_styles = function(_caller)
{
    t_sync_styles_caller_csv = t_util.csv_add(t_sync_styles_caller_csv, _caller);

    if(t_sync_styles_timer) clearTimeout(t_sync_styles_timer);
    t_sync_styles_timer   =   setTimeout(t_sync_styles_handler, T_SYNC_STYLES_DELAY);
};
/*}}}*/
/*_ t_sync_styles_handler {{{*/
let t_sync_styles_handler = function()
{
/*{{{*/
let   caller = "t_sync_styles_handler";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    t_sync_styles_timer      = null;
    t_sync_styles_caller_csv = "";
    /* CHECKBOXES {{{*/
    prop.get_MAP().forEach( function(p,index,array)
                            {
                                if(p.id) t_set_id_class_on_off(p.id, t_data.CSS_CHECKED,  p.value);
                            });

    /*}}}*/
    /* UI [dark theme] {{{*/
    let state, id, el;
    state = prop.get( t_data.THEME_DARK );

    t_TOOL_SET_set_class_state      (                        t_data.CSS_DARK   , state);
    t_set_tool_class_theme_state    (t_data.CSS_STICKY_TOOL, t_data.CSS_DARK   , state);
    t_set_tool_class_theme_state    (CSS_TRANSCRIPT        , t_data.CSS_DARK   , state);
    t_set_doc_tool_class_theme_state(CSS_TRANSCRIPT        , t_data.CSS_DARK   , state);
    /*}}}*/
    /* UI [scrolled or fixed] {{{*/
    state = prop.get( t_data.TOOLS_SCROLL );

    t_TOOL_SET_set_class_state      (                        t_data.TOOLS_SCROLL, state);
    t_set_tool_class_theme_state    (t_data.CSS_STICKY_TOOL, t_data.TOOLS_SCROLL, state);
    t_set_doc_tool_class_theme_state(CSS_TRANSCRIPT        , t_data.TOOLS_SCROLL, state);
    /*}}}*/
    /* UI [trapped or pivoting] {{{*/
    state = prop.get( t_data.TOOLS_TRAP );

    if(el = hotspot_c )                                   set_el_class_on_off(el, t_data.CSS_TRAPPED, state);
    if(el = pivspot_c )                                   set_el_class_on_off(el, t_data.CSS_TRAPPED, state);
    id    = t_data.TOOLS_TRAP; if(el = prop.get_EL(id)) t_set_id_class_on_off(id, t_data.CSS_TRAPPED, state);

/*{{{
    id = t_data.TOOLS_TRAP   ; if(el = prop.get_EL(id))   t_set_id_class_on_off(id, t_data.CSS_CHECKED,  prop.get( t_data.TOOLS_TRAP    ));
}}}*/

    /*}}}*/
    /* t_data.SCROLL_SMOOTH & OVERFLOW {{{*/
    el = document.getElementsByTagName("HTML")[0]; set_el_class_on_off(el,  t_data.OVERFLOW_VISI, prop.get( t_data.OVERFLOW_VISI ));
    el = document.getElementsByTagName("HTML")[0]; set_el_class_on_off(el,  t_data.DETAILS_RADIO, prop.get( t_data.DETAILS_RADIO ));
    el = document.getElementsByTagName("HTML")[0]; set_el_class_on_off(el,  t_data.SCROLL_SMOOTH, prop.get( t_data.SCROLL_SMOOTH ));

    t_seek.t_seeker_set_class(t_data.SCROLL_SMOOTH, prop.get( t_data.SCROLL_SMOOTH ));
    /*}}}*/
    /* OPTIONS [headsup] {{{*/
    if(el = prop.get_EL( t_data.THEME_DARK   )) el.innerHTML = (prop.get( t_data.THEME_DARK   )) ? t_data.SYMBOL_THEME_DARK_IS_ON  : t_data.SYMBOL_THEME_DARK_IS_OFF;
    if(el = prop.get_EL( t_data.TOOLS_SCROLL )) el.innerHTML = (prop.get( t_data.TOOLS_SCROLL )) ? t_data.SYMBOL_UP_AND_DOWN_ARROW : t_data.SYMBOL_ANCHOR           ;
    if(el = prop.get_EL( t_data.WORDING      )) el.innerHTML = (prop.get( t_data.WORDING      )) ? t_data.SYMBOL_WORDING_IS_ON     : t_data.SYMBOL_WORDING_IS_OFF   ;
    if(el = prop.get_EL( t_data.TOOLS_TIER2  )) el.innerHTML = (prop.get( t_data.TOOLS_TIER2  )) ? t_data.SYMBOL_TOOLS_TIER2_ON    : t_data.SYMBOL_TOOLS_TIER2_OFF  ;

    id    = t_data.ANCHOR_FREEZE;
    if(el = prop.get_EL(id)) {
        state = (prop.get( t_data.WORDING ) || prop.get( t_data.ANCHOR_FREEZE ))
            &&  (typeof dom_wording != "undefined")
        ;
        t_set_id_class_on_off(id,  t_data.CSS_CHECKED,  state);
        el.innerHTML
            = state
            ? t_data.SYMBOL_NO_ENTRY
            : t_data.SYMBOL_SAILBOAT
        ;
    }
    /*}}}*/
    words_option_sync();
};
/*}}}*/
/*_ t_set_doc_tool_class_theme_state {{{*/
let t_set_doc_tool_class_theme_state = function(className, theme, state)
{
/*{{{
logBIG("t_set_doc_tool_class_theme_state("+className+", "+theme+", "+state+")")
}}}*/

    let                     node_list = document.querySelectorAll("."+className);
    for(let i=0;        i < node_list.length; ++i)
    {
/*{{{
logXXX("...set_el_class_on_off("+t_util.get_id_or_tag(node_list[i])+", "+theme+", "+state+")");
}}}*/
        set_el_class_on_off(node_list[i], theme, state);
    }
};
/*}}}*/
/*_ t_set_tool_class_theme_state {{{*/
let t_set_tool_class_theme_state = function(className, theme, state)
{
/*{{{
logBIG("t_set_tool_class_theme_state("+className+", "+theme+", "+state+")");
}}}*/

    let                     node_list = shadow_root.querySelectorAll("."+className);
    for(let i=0;        i < node_list.length; ++i)
    {
/*{{{
logXXX("...set_el_class_on_off("+t_util.get_id_or_tag(node_list[i])+", "+theme+", "+state+")");
}}}*/
        set_el_class_on_off(node_list[i], theme, state);
    }
};
/*}}}*/
/*}}}*/
/* GRID {{{*/
/*_ is_dom_grid_loaded {{{*/
let is_dom_grid_loaded = function()
{
    return (typeof t_grid.t_grid_ON_OFF_CB != "undefined");
};
/*}}}*/
/*_ t_move_TOOLS_ON_GRID {{{*/
let t_move_TOOLS_ON_GRID = function(_caller)
{
/*{{{
logXXX("t_move_TOOLS_ON_GRID .. CALLED BY "+_caller+"")
}}}*/
    call_t_grid_ON_OFF_CB(true);
};
/*}}}*/
/*_ t_move_TOOLS_OFF_GRID {{{*/
let t_move_TOOLS_OFF_GRID = function(_caller)
{
/*{{{
logXXX("t_move_TOOLS_OFF_GRID .. CALLED BY "+_caller+"")
}}}*/
    call_t_grid_ON_OFF_CB(false);

/*{{{
    dimm_stop(_caller); .. already called by t_grid.t_grid_ON_OFF_CB and t_IS_ON_GRID_observerCB
}}}*/
};
/*}}}*/
/*_ t_move_TOOLS_TOGGLE_GRID {{{*/
let t_move_TOOLS_TOGGLE_GRID = function(_caller)
{
/*{{{
logXXX("t_move_TOOLS_TOGGLE_GRID .. CALLED BY "+_caller);
}}}*/

    if( !was_a_too_early_last_result() )
    {
        call_t_grid_ON_OFF_CB(false);
        dimm_stop(_caller);
    }
    else {
/*{{{
log("t_move_TOOLS_TOGGLE_GRID .. NOT TOGGLING TOOLS ON-OFF GRID .. CALLED BY "+_caller)
}}}*/
    }
};
/*}}}*/
/*_ call_t_grid_ON_OFF_CB script/dom_grid.js {{{ */
let call_t_grid_ON_OFF_CB = function(new_state="toggle")
{
    let caller = "call_t_grid_ON_OFF_CB("+new_state+")";
let log_this = LOG_MAP.EV5_TOOL_CB;

    if(new_state == "toggle") new_state = !call_t_grid_IS_ON_GRID(caller);
if( log_this) log("%c "+caller+": new_state=["+new_state+"]",lb2+lbF);

    if(!new_state                                           ) t_raise_pivot_PANEL_delayed(T_RAISE_PIVOT_PANEL_DELAY_SHORT, caller);
    else if(!t_raise_pivot_PANEL_posted_since_onDown(caller)) t_flash_unpinned_panels    (caller);

    if(typeof t_grid.t_grid_ON_OFF_CB == "undefined") log_dom_grid_js_not_loaded(caller);
    else      t_grid.t_grid_ON_OFF_CB(new_state);

    t_fly.t_fly_init(caller);
};
/* }}} */
/*_ call_t_grid_IS_SIZED script/dom_grid.js {{{ */
let call_t_grid_IS_SIZED = function(_caller)
{
    if(typeof t_grid.t_grid_IS_SIZED == "undefined") {
        return false;
    }
    else {
        return t_grid.t_grid_IS_SIZED("call_t_grid_IS_SIZED .. CALLED BY "+ _caller);
    }
};
/* }}} */
/*_ call_t_grid_IS_ON_GRID script/dom_grid.js {{{ */
let call_t_grid_IS_ON_GRID = function(_caller)
{
    if(typeof t_grid.t_grid_IS_ON_GRID == "undefined")
        return false;
    else
        return t_grid.t_grid_IS_ON_GRID("call_t_grid_IS_ON_GRID .. CALLED BY "+ _caller);
};
/* }}} */

/*_ call_t_grid_add_observer {{{*/
let call_t_grid_add_observer = function()
{
    if(typeof t_grid.t_grid_add_observer_callback != "undefined")
    {
        t_grid.t_grid_add_observer_callback( t_IS_ON_GRID_observerCB );
    }
    else {
        log_dom_grid_js_not_loaded("call_t_grid_add_observer");
    }
};
/*}}}*/
/*_ t_IS_ON_GRID_observerCB {{{*/
/*{{{*/
const OFF_GRID_MARGIN_X = 64;
const OFF_GRID_MARGIN_Y = 64;

/*}}}*/
let t_IS_ON_GRID_observerCB = function(on_grid)
{
/*{{{*/
    let caller = "t_IS_ON_GRID_observerCB("+on_grid+")";
let log_this = LOG_MAP.T2_GRID;

if( log_this) log(caller);
/*}}}*/
    /* TOOLS STAGING ON-GRID PHASE {{{*/
    if( on_grid )
    {
        t_sticky.t_sticky_RING_stop(caller);
        dimm_start_grid(caller);

        if(!t_raise_pivot_PANEL_posted_since_onDown(caller))
            t_flash_unpinned_panels(caller);
    }
    /*}}}*/
    /* TOOLS SHOWING OFF-GRID PHASE {{{*/
    else {
/*{{{
        dimm_stop(caller); .. already called by t_grid.t_grid_ON_OFF_CB
}}}*/

        let          xy    = t_gutter.get_WINDOW_XY();
        if((Math.abs(xy.x) < OFF_GRID_MARGIN_X)) xy.x = OFF_GRID_MARGIN_X;
        if((Math.abs(xy.y) < OFF_GRID_MARGIN_Y)) xy.y = OFF_GRID_MARGIN_Y;
/*{{{
        spread_ratio.x = 1;
        spread_ratio.y = 1;
        pivotXY.x      = OFF_GRID_MARGIN_X * 2;
        pivotXY.y      = OFF_GRID_MARGIN_Y * 2;
}}}*/

        t_tools_set_top_xy(xy.x, xy.y);

        t_grid_TOOLS_MAP_changed();
        t_TOOL_SET_eval_wide_or_tall_panel(caller);
    }
    /*}}}*/
};
/*}}}*/
/*_ t_grid_TOOLS_MAP_changed {{{*/
let t_grid_TOOLS_MAP_changed = function()
{
/*{{{*/
let caller = "t_grid_TOOLS_MAP_changed";
let log_this = LOG_MAP.T2_GRID;

if( log_this) log(caller);
/*}}}*/
    t_TOOL_panels_SLOT_SELECTED();

    t_update_TOOLS_MAP_GEOMETRY(caller, 0);

    t_tools_set_top_xy(h_x, h_y);
};
/*}}}*/
/*_ t_TOOL_panels_SLOT_SELECTED {{{*/
let t_TOOL_panels_SLOT_SELECTED = function()
{
/*{{{*/
let   caller = "t_TOOL_panels_SLOT_SELECTED";
let log_this = LOG_MAP.T5_SPREAD;

if( log_this) log(caller);
/*}}}*/
if( log_this) t_log_TOOL_panels(caller);

if( log_this) log("%c REORDERING ", lbb+lbH+lf7);
    let free_slots = [];
    let map;
    for(let i=1; i < TOOL_panels.length; ++i) /* keep hotspot first */
    {
        /* COLLECT A FREE SLOT */
        let                   panel = TOOL_panels[i];
        if(                  !panel                                /*       slot empty */
           ||                 panel.classList.contains(t_data.CSS_PINNED) /*     pinned panel */
    /* unselected panel */
/*{{{
           || !t_tools_map_get( panel ).selected
}}}*/
           || !(!(map = t_tools_map_get( panel )) || !map.selected)
          ) {
            free_slots.push(i); /* ...first slot where to move next selected panel */
        }
        /* ALLOCATE A SLOT TO SELECTED PANELS */
        else {
            let free_slot = free_slots.shift();
            if( free_slot ) {
if( log_this) log("...free_slot=["+free_slot+" "+t_data.SYMBOL_LEFT_CHEVRON+" "+i+"] .. ["+t_util.get_id_or_tag(TOOL_panels[free_slot])+" "+t_data.SYMBOL_LEFT_CHEVRON+" "+t_util.get_id_or_tag(TOOL_panels[i])+"]");
                let removed = TOOL_panels[free_slot];                            /* extract  unselected panel */
                /*.........*/ TOOL_panels[free_slot] = TOOL_panels[i];           /* insert     selected panel */
                /*..................................*/ TOOL_panels[i] = removed; /* relocate unselected panel */
            }
            /* OR LEAVE PANEL WHERE IT IS */
        }

    }

if( log_this) t_log_TOOL_panels(caller, lf5);
};
/*}}}*/
/*}}}*/
/* DIMM {{{*/
/*{{{*/
const DIMM_CLASS_ARRAY = ["dimm_grid", "dimm_pat_bag", "dimm_sticky", "div_slot_containers"];
const DIMM_STYLE_ARRAY = ["dimm_light", "dimm_dark"];

let dimm_mask       = null;
let dimm_mask_timer = null;
let dimm_start_called_with_hotspot_in_gutter;

/*}}}*/
/*_ dimm_start {{{*/
let dimm_start_pat_bag         = function(_caller) { dimm_start(_caller, t_data.ZINDEX_PINNED_PANEL_ZERO, "dimm_pat_bag"       ,  "dimm_light", "fixed"    ); };
let dimm_start_grid            = function(_caller) { dimm_start(_caller, t_data.ZINDEX_TOOL_PANEL_ZERO  , "dimm_grid"          ,  "dimm_light", "fixed"    ); };
let dimm_start_sticky          = function(_caller) { dimm_start(_caller, t_data.ZINDEX_ABOVE_TOOLS      , "dimm_sticky"        ,  "dimm_dark" , "fixed"    ); };
let dimm_start_slot_containers = function(_caller) { dimm_start(_caller, t_data.ZINDEX_ABOVE_TOOLS      , "div_slot_containers",            "", ""         ); };
let dimm_start                 = function(                      _caller, zIndex                         , dimm_class=""        , dimm_style="", position="")
{
/*_ log_this {{{*/
let log_this = LOG_MAP.T2_GRID;

if( log_this) log("dimm_start(zIndex=["+zIndex+"], dimm_class=["+dimm_class+"], dimm_style=["+dimm_style+"]) .. CALLED BY "+ _caller);
/*}}}*/
    if((typeof t_gutter === "undefined")) return;
    /* [dimm_start_called_with_hotspot_in_gutter] {{{*/
    if(_caller) {
        dimm_start_called_with_hotspot_in_gutter = !!hotspotXY.gutter_urdl;
if( log_this) log("...%c dimm_start_called_with_hotspot_in_gutter=["+dimm_start_called_with_hotspot_in_gutter+"]", lf7);

        if(!dimm_start_called_with_hotspot_in_gutter)
            t_gutter.set_WINDOW_XY(h_x, h_y);
    }
    /*}}}*/
    /* dimm_add dimm_class dimm_style {{{*/
    if(!dimm_mask) dimm_add();
    if(dimm_class && !has_el_class(dimm_mask, dimm_class)) set_el_class_removing(dimm_mask, dimm_class, DIMM_CLASS_ARRAY);
    if(dimm_style && !has_el_class(dimm_mask, dimm_style)) set_el_class_removing(dimm_mask, dimm_style, DIMM_STYLE_ARRAY);

if( log_this) log("...dimm_mask.className=["+dimm_mask.className+"]");
    /*}}}*/
    /* zIndex {{{*/
    if(zIndex) dimm_mask.style.zIndex = zIndex;

    /*}}}*/
    /* position .. (fixed or absolute) {{{*/
    if( position == "fixed")
    {
        dimm_mask.style.position = "fixed";
        dimm_mask.style.top      = "0";
        dimm_mask.style.left     = "0";

    }
    else if(position == "absolute") {

        dimm_mask.style.position = "absolute";
        dimm_mask.style.left     = window.scrollX +"px";
        dimm_mask.style.top      = window.scrollY +"px";
    }
    /*}}}*/
    /* display block {{{*/
    dimm_mask.style.display = "block";

    add_el_class(document.body, t_data.CSS_DIMMED);
    /*}}}*/
    /* width height .. content width {{{*/
    dimm_mask.style.width      = window.innerWidth +"px";

    if(!div_slot_containers_displayed() ) /* TODO .. EXPLAIN WHY */
        dimm_mask.style.height = window.innerHeight+"px";

    /*}}}*/
    /* firstElementChild fullscreen {{{*/
    if( dimm_mask.firstElementChild)
        dimm_mask.firstElementChild.style.width = w_W+"px";

    /*}}}*/
};
/*}}}*/
/*_ dimm_stop {{{*/
let dimm_stop  = function(_caller="setTimeout")
{
/*{{{*/
let log_this = LOG_MAP.T2_GRID;

if( log_this) log("dimm_stop .. CALLED BY "+ _caller);
if( log_this) log_caller();
/*}}}*/
    if((typeof t_gutter === "undefined")) return;
    /* clearTimeout {{{*/
    if(dimm_mask_timer) {
        clearTimeout( dimm_mask_timer );
        /*.........*/ dimm_mask_timer = null;
    }
    /*}}}*/
    /* undisplay {{{*/
    if( dimm_mask ) {
        dimm_mask.style.display = "none";
        dimm_mask.innerHTML     = "";

        del_el_class(document.body, t_data.CSS_DIMMED);
    }
    /*}}}*/
    /* t_clear_onModalMS {{{*/
    t_clear_onModalMS(_caller);

    /*}}}*/
    /* may go along with a hidden [hotspot] {{{*/
    del_el_class(hotspot, t_data.CSS_HIDDEN);

    /*}}}*/
    /* [hotspot] was IN-GUTTER ... leave it IN-GUTTER {{{*/
if(log_this) log("...%c dimm_start_called_with_hotspot_in_gutter=["+dimm_start_called_with_hotspot_in_gutter+"]", lf7);
    if( dimm_start_called_with_hotspot_in_gutter )
    {
if(log_this) t_log.logSD1("HOTSPOT LEFT IN GUTTER %c"+_caller, lbH+lf8);

    }
    /*}}}*/
    /* [hotspot] was IN-WINDOW {{{*/
    else if(dimm_start_called_with_hotspot_in_gutter != undefined)
    {
        /* is IN-GUTTER .. move it back IN-WINDOW where it was {{{*/
        if( t_gutter.is_hotspot_IN(hotspot, "DIMM STOP") )
        {
            let xy = t_gutter.get_WINDOW_XY();
            if( xy ) {
if(log_this) t_log.logSD2("HOTSPOT BACK TO WINDOW %c"+xy.x+" "+xy.y+" %c"+_caller, lbH+lf4, lbH+lf9);
                    t_tools_set_top_xy(xy.x, xy.y);
            }
        }
        /*}}}*/
        /* is IN-WINDOW .. leave it there {{{*/
        else {
if(log_this) t_log.logSD3("HOTSPOT LEFT WHERE IT IS %c"+h_x+" "+h_y+" %c"+_caller, lbH+lf8, lbH+lf9);

        }
        /*}}}*/
    }
    /*}}}*/
};
/*}}}*/
/*_ dimm_add {{{*/
let dimm_add = function()
{
let log_this = LOG_MAP.T3_LAYOUT;
if( log_this) log("dimm_add");

    if(dimm_mask) return;

    dimm_mask              = document.createElement("DIV");
    dimm_mask.id           = "dimm_mask";
/*
    shadow_root.insertBefore(dimm_mask, shadow_root.firstElementChild);
*/
    shadow_root.appendChild( dimm_mask ); /* get the highest layout z-index */
};
/*}}}*/
/*_ dimm_mask_displayed {{{*/
let dimm_mask_displayed = function()
{
    if(!dimm_mask) return false;
    return (dimm_mask && (dimm_mask.style.display != "none"));
};
/*}}}*/
/*_ div_slot_containers_displayed {{{*/
let div_slot_containers_displayed = function()
{
    return  dimm_mask                   && div_slot_containers
        &&  dimm_mask.firstElementChild
        && (dimm_mask.firstElementChild == div_slot_containers)
    ;
};
/*}}}*/
/*_ dimm_mask_is {{{*/
let dimm_mask_is = function(el)
{
    return (el == dimm_mask);
};
/*}}}*/
/*}}}*/
/* BOUNDS {{{*/
/*_ t_sync_layout {{{*/
/*{{{*/
let T_SYNC_LAYOUT_DELAY = 500;
let t_sync_layout_timer = null;
let t_sync_layout_callers = "";
/*}}}*/
let t_sync_layout = function(_caller, delay=T_SYNC_LAYOUT_DELAY)
{
/*{{{*/
let log_this = LOG_MAP.EV7_DISPATCH;

/*}}}*/
    if(               t_sync_layout_timer ) {
        clearTimeout( t_sync_layout_timer );
    /*            */  t_sync_layout_timer  = null;
    }

    t_sync_layout_callers += _caller;
if( log_this) log("%c t_sync_layout .. CALLED BY ["+t_sync_layout_callers+"]", lbF+lb7);

    if(delay) t_sync_layout_timer = setTimeout( t_sync_layout_handler, delay);
    else                                        t_sync_layout_handler();
};
/*}}}*/
/*_ t_sync_layout_handler {{{*/
let t_sync_layout_handler = function()
{
/*{{{*/
let   caller = "t_sync_layout_handler";
let log_this = LOG_MAP.EV7_DISPATCH || LOG_MAP.T3_LAYOUT;

if(log_this) log("%c"+caller+"%c called by "+t_sync_layout_callers+")", lbH+lf1, lbH+lf8);

    t_sync_layout_timer   = null;
    t_sync_layout_callers = "";
/*}}}*/
    /* 1. CLONES STATE AND REQUIREMENTS {{{*/
    /* TOOL CLONES STATE {{{*/
    t_sync_tool_clones_state( caller );

    /*}}}*/
    /* REQUIRES: [t_load_TOOLS_MAP] {{{*/

    if(!t_tools_loaded) t_load_TOOLS_MAP(caller);
    /*}}}*/
    /* NOT WHEN: [IS_ON_GRID] {{{*/
    if( call_t_grid_IS_ON_GRID(caller) )
    {
if(log_this) log("- %c TOOLS ON GRID", lbH+lf1);
        t_grid.t_grid_onresize(caller);

        return;
    }
    /*}}}*/
    /* NOT WHEN: [EVENT HANDING IN PROGRESS] {{{*/
    if(onWork_EL) {
if(log_this) log("- POSTPONING .. %c EVENT HANDING IN PROGRESS: %c ["+get_n_lbl(onWork_EL)+"]", lbH+lf1, lbH+lf1);

        t_sync_layout(caller);
        return;
    }
    /*}}}*/
    /*}}}*/
    /* 2. TOOLS INITIAL LAYOUT {{{*/
    if(dom_tools_html && !t_cache_has_been_armed())
    {
        t_sync2_initial_tools_layout();

        return;
    }
    /*}}}*/
    /* 3. TOOLS HIDE .. f(t_gutter bordering) {{{*/
    if( t_sync3_hotspot_hiding_in_gutter() )
    {

        return;
    }
    /*}}}*/
    /* 4. NO UNPINED TOOLS SELECTED .. (lone hotspot is showing) {{{*/
    let first_tool = t_get_first_selected_tool_panel();
    if(!first_tool) {
if(log_this) log("- NOTHING TO LAYOUT .. %c NO UNPINED TOOLS SELECTED", lbH+lf4);

        t_save_update_post("NO SELECTED TOOL");
        return;
    }
    /*}}}*/
    /* 5. PIVOT PANEL MAY HAVE BEEN UNSELECTED .. CHOOSE ANOTHER {{{*/
    t_sync5_pivot_PANEL();

    /*}}}*/
    /* 6. SPREADED TOOLS AND PIVOT PANEL {{{*/
    if( t_sync6_some_tools_to_unhide(first_tool) )
    {
        return;

    }
    /*}}}*/
    /* 7. MAGNIFIED PANELS {{{*/
    t_sync7_panel_magnified();

    /*}}}*/
};
/*}}}*/
/*_ t_sync2_initial_tools_layout {{{*/
/*{{{*/
const HOTSPOT_STANDBY_X =  0;
const HOTSPOT_STANDBY_Y = 96;

/*}}}*/
let t_sync2_initial_tools_layout = function()
{
/*{{{*/
let   caller = "t_sync2_initial_tools_layout";
let log_this = LOG_MAP.EV7_DISPATCH || LOG_MAP.T3_LAYOUT;

if(log_this) log("%c"+caller, lbH+lf2);
/*}}}*/
    /* ONLOAD: CHOOSE CONTEXT TOOLS .. f(DOM_LOAD_ID) {{{*/
    t_TOOL_SET_select();

if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_log_stage_msg(t_fly.STAGE_1_INPUT, caller);

    /*}}}*/
    /* ONLOAD: ADD GRID OBSERVER {{{*/
    call_t_grid_add_observer();

    /*}}}*/
    /* ONLOAD: PATTERNS RAISE FROM [off_csv] TO [pat_csv] {{{*/
if(log_this) log_key_val_group("ONLOAD PATTERN CSV", {sel_csv, pat_csv, off_csv, bak_csv, bin_csv}, lf2);

    let  tmp_csv =    String( off_csv   );
    let    count = t_util.csv_count( off_csv   );
    for(let  pos = 1; pos <= count; ++pos) {
        let  pat = t_util.csv_get(tmp_csv ,  pos);
        csv_pattern_mov_to_off(       pat); /* clear off_csv duplicates from other bags */
    }

if(log_this) log_key_val_group("[off_csv duplicates] REMOVED FROM OTHER BAGS", {sel_csv, pat_csv, off_csv, bak_csv, bin_csv}, lf2);

    t_sel_pat_bag_all();
    /*}}}*/
    /* ONLOAD: TOOLS LAYOUT {{{*/
    if(pivspot) t_tools_set_panel_xy(pivspot, pivotXY.x, pivotXY.y);

    t_raise_pivot_PANEL_delayed(T_RAISE_PIVOT_PANEL_DELAY_LONG, caller);

    t_toggle_pivot_PANEL_magnified( prop.get( t_data.PIVOT_MAGNIFIED ) );

    let position =  prop.get( t_data.TOOLS_SCROLL )  ? "absolute" : "fixed";
      t_tools_set_top_xy(HOTSPOT_STANDBY_X, HOTSPOT_STANDBY_Y, position);

    t_fly.t_fly_div_magnified_toggle(prop.get( t_data.FLY_DIV_MAGNIFIED ) );

    /*}}}*/
    /* ONLOAD: LAYOUT LISTENER {{{*/
if( log_this) log("%c ONLOAD: EVENT LISTENERS", lbH+lf2);
    t_layout_changed();

    /*}}}*/
    /* ONLOAD: UNDIMM STICKY TOOLS {{{*/
    t_sticky.t_sticky_SET_DIMMED(false, "ON LOAD");

    /*}}}*/
    /* ONLOAD: TOOLS VISILBILTY {{{*/
    dom_tools_html.style.visibility = "visible";

    /*}}}*/
};
/*}}}*/
/*_ t_sync3_hotspot_hiding_in_gutter {{{*/
let t_sync3_hotspot_hiding_in_gutter = function()
{
/*{{{*/
let   caller = "t_sync3_hotspot_hiding_in_gutter";
let log_this = LOG_MAP.EV7_DISPATCH || LOG_MAP.T3_LAYOUT;

if(log_this) log("%c"+caller, lbH+lf3);
/*}}}*/
    /* [dom_tools_html] {{{*/
    if(!dom_tools_html )
    {
log("%c...return false .. ![dom_tools_html]", lf3);

        return false;
    }
    /*}}}*/
    /* BORDERING URDL .. f(LAYOUT CHANGE) {{{*/
    h_x                   = hotspot.offsetLeft;
    h_y                   = hotspot.offsetTop;

    hotspotXY.gutter_urdl = t_gutter.get_XY_URDL(h_x, h_y, "LAYOUT CHANGED SYNC");
    t_gutter.set_CSS_URDL(hotring, hotspotXY.gutter_urdl);

    if( !hotspotXY.gutter_urdl )
    {
if(log_this) log("%c...return false .. NOT HIDING .. ![hotspot XY URDL]", lf3);

        return false;
    }
    /*}}}*/
    /* MOVE HOTSPOT IN GUTTER {{{*/
if(log_this) log("- %c HOTSPOT IN GUTTER: HIDING TOOL PANELS", lbH+lf3);

        let xy = { x:h_x , y:h_y };
if(log_this) log("...hotspot: FROM XY=[%c "+ xy.x  +" "+ xy.y +" %c]",lbH+lf3,lbA);

        xy.x = Math.max( -w_W, xy.x      );
        xy.y = Math.max( -w_H, xy.y      );
        xy.x = Math.min(       xy.x, w_W );
        xy.y = Math.min(       xy.y, w_H );
if(log_this) log("...hotspot: TO   XY=[%c "+ xy.x  +" "+ xy.y +" %c]",lbH+lf3,lbA);

        let position =  prop.get( t_data.TOOLS_SCROLL )  ? "absolute" : "fixed";

        t_tools_set_top_xy(xy.x, xy.y, position);

        t_save_update_post("HOTSPOT IN GUTTER");

    return true;
    /*}}}*/
};
/*}}}*/
/*_ t_sync5_pivot_PANEL {{{*/
let t_sync5_pivot_PANEL = function()
{
/*{{{*/
let   caller = "t_sync5_pivot_PANEL";
let log_this = LOG_MAP.EV7_DISPATCH || LOG_MAP.T3_LAYOUT;

if(log_this) log("%c"+caller, lbH+lf5);
/*}}}*/
    let panel = pivot_PANEL;
if(log_this) log("%c pivot_PANEL %c"+get_n_lbl(panel), lbL+lf5, lbR+lf5);

    if(!t_tools_panel_is_selected(panel)) { panel = t_get_next_selected_tool_panel (pivot_PANEL); if(log_this) log("%c NEXT  %c "+get_n_lbl(panel)+"  ", lbH+lf5,lbR+lf3); }
    if(                          !panel ) { panel = t_get_prev_selected_tool_panel (pivot_PANEL); if(log_this) log("%c PREV  %c "+get_n_lbl(panel)+"  ", lbH+lf5,lbR+lf2); }
    if(                          !panel ) { panel = t_get_first_selected_tool_panel(           ); if(log_this) log("%c FIRST %c "+get_n_lbl(panel)+"  ", lbH+lf5,lbR+lf1); }

    if( panel )
    {
        t_set_pivot_PANEL             ( panel, "SYNC LAYOUT CURRENT [pivot_PANEL]");
        t_raise_pivot_PANEL           ( caller );
        t_toggle_pivot_PANEL_magnified( prop.get( t_data.PIVOT_MAGNIFIED ) );
    }
};
/*}}}*/

/*_ t_sync6_some_tools_to_unhide {{{*/
let t_sync6_some_tools_to_unhide = function(first_tool)
{
/*{{{*/
let   caller = "t_sync6_some_tools_to_unhide";
let log_this = LOG_MAP.EV7_DISPATCH || LOG_MAP.T3_LAYOUT;

if(log_this) log("%c"+caller, lbH+lf6);
/*}}}*/
    /* FIRST SELECTED TOOLS BOUNDING BOX {{{*/
if(log_this) log("%c first_tool %c "+get_n_lbl(first_tool)+"%c spreaded_tools.length: "+spreaded_tools.length
                 ,lbL+lf6      ,lbR+lf6                    ,lbH+lf6                                          );

    let map = t_tools_map_get(first_tool);
    let top_tool_l = map.x;
    let top_tool_t = map.y;
    let top_tool_w = map.w;
    let top_tool_h = map.h;

if(log_this) log(get_n_lbl(first_tool)+"%c XY=["+top_tool_l+" "+top_tool_t+"] %c WH=["+top_tool_w+" "+top_tool_h+"]"
                 ,                      lbL+lf6                              ,lbR+lf6                               );

    let bb_dx_dy = { t:0, l:0, r:0, b:0, dx:0, dy:0 };
    bb_dx_dy.t   = top_tool_t;
    bb_dx_dy.l   = top_tool_l;
    bb_dx_dy.b   = top_tool_t + top_tool_h;
    bb_dx_dy.r   = top_tool_l + top_tool_w;
    bb_dx_dy.dx  = w_W;
    bb_dx_dy.dy  = w_H;

/*{{{
t_log.logSD6("%c bb_dx_dy.dx=["+bb_dx_dy.dx+"] bb_dx_dy.dy=["+bb_dx_dy.dy+"]", lbH+lf1)
}}}*/
    /*}}}*/
    /* EXPANDED TO INCLUDE ALL SELECTED TOOLS BOUNDING BOX {{{*/
if(log_this) log("....FROM BB %c TL "+ bb_dx_dy.t  +" "+ bb_dx_dy.l  +" %c BR "+ bb_dx_dy.b +" "+ bb_dx_dy.r +"%c DXY "+ bb_dx_dy.dx +" "+ bb_dx_dy.dy
                ,             lbL                                      ,lbC                                   ,lbR                                    );

    let gutter_w = h_W;
    let gutter_h = h_H;

    let view = { t:0, l:0, b:0, r:0 };
    view.t   = -gutter_w / 3;
    view.l   = -gutter_h / 3;
    view.r   =  w_W;
    view.b   =  w_H;

if(log_this) log("...VIEWPORT %c TL "+ view.t  +" "+ view.l  +" %c BR "+ view.b +" "+ view.r
                 ,            lbL                              ,lbR                         );

    let some_tools_to_unhide = t_sync6_collect_spreaded_tools_bounding_box(bb_dx_dy, view);
    /*}}}*/
    /* COLLAPSED BOUNDING BOX .. (NO GROUPED TOOLS TO INCLUDE) {{{*/
    if(spreaded_tools.length < 1)
    {
        bb_dx_dy.dx  = 0;
        bb_dx_dy.dy  = 0;
/*{{{
t_log.logSD6("%c bb_dx_dy.dx=["+bb_dx_dy.dx+"] bb_dx_dy.dy=["+bb_dx_dy.dy+"]", lbH+lf2)
}}}*/
    }

if(log_this) log("......TO BB %c TL "+ bb_dx_dy.t  +" "+ bb_dx_dy.l  +" %c BR "+ bb_dx_dy.b +" "+ bb_dx_dy.r +"%c DXY "+ bb_dx_dy.dx +" "+ bb_dx_dy.dy
                ,             lbL                                      ,lbC                                   ,lbR                                    );
    /*}}}*/
    /* 1/3 - SOME TOOLS TO UNHIDE .. (bring them back into current viewport bounding box) {{{*/
    if( some_tools_to_unhide )
    {
if(log_this) log(caller+": %c SOME TOOLS TO UNHIDE: %c "+some_tools_to_unhide, lbL, lbR);

        t_cache_armed_by(caller);
        t_cache_sync("Showing some tools");
        t_tools_set_top_xy(h_x, h_y);

        t_save_update_post("SOME TOOLS TO UNHIDE");
        return true;
    }
    /*}}}*/
    /* 2/3 - ALL TOOLS WITHIN VIEWPORT .. f(BOUNDING BOX: UNCHANGED) {{{*/
    if((bb_dx_dy.dx==0) && (bb_dx_dy.dy==0))
    {
if(log_this) log("- %c ALL TOOLS WITHIN VIEWPORT", lbH);

        t_toggle_pivot_PANEL_magnified( prop.get( t_data.PIVOT_MAGNIFIED ) ); /* in case layout has changed */

        t_save_update_post("ALL TOOLS WITHIN VIEWPORT");
    }
    /*}}}*/
    /* 3/3 - NO TOOLS IN VIEWPORT - JUST CONFINE [hotspot] .. f(BOUNDING BOX: EXPANDED) {{{*/
    else {
if(log_this) log("- %c NO TOOLS WITHIN VIEWPORT: BOUNDING BOX: EXPANDED: %c "+t_bounding_box_toString(bb_dx_dy), lbH);

        let xy = t_util.get_el_xy(first_tool, caller);

        xy.x   = xy.x + bb_dx_dy.dx;
        xy.y   = xy.y + bb_dx_dy.dy;

        xy.x   = Math.max( -w_W, xy.x      );
        xy.y   = Math.max( -w_H, xy.y      );
        xy.x   = Math.min(       xy.x, w_W );
        xy.y   = Math.min(       xy.y, w_H );

if(log_this) log(                 "...hotspot: FROM %c XY "+  h_x +" "+  h_y, lbH);
if(log_this) log(                 "...hotspot: TO   %c XY "+ xy.x +" "+ xy.y, lbH);
if(log_this) log(caller+": %c CONFINE hotspot WITHIN VIEWPORT: t_tools_set_top_xy("+ xy.x  +" "+ xy.y +")", lbH);
        t_cache_armed_by(caller);
        t_cache_sync("Layout viewport");
        let position =  prop.get( t_data.TOOLS_SCROLL )  ? "absolute" : "fixed";
        t_tools_set_top_xy(xy.x, xy.y, position);

        t_save_update_post("CONFINE TO VIEWPORT");
    }
    /*}}}*/
    return false;
};
/*}}}*/
/*_ t_sync6_collect_spreaded_tools_bounding_box {{{*/
/*{{{*/
let           spreaded_tools = [];
/*}}}*/
let t_sync6_collect_spreaded_tools_bounding_box = function(bb_dx_dy, view)
{
    let some_tools_to_unhide = "";
    spreaded_tools = [];
    for(let i=1; i < TOOL_panels.length; ++i)
    {
        let panel = TOOL_panels[i];
        if( panel && t_is_a_spreaded_tool(panel))
        {
            spreaded_tools.push(panel);

            if(panel.classList.contains(t_data.CSS_HIDDEN))
            {
                some_tools_to_unhide += panel.id+" ";

                del_el_class(panel, t_data.CSS_HIDDEN);
            }
            bb_dx_dy = t_sync6_expand_bounding_box(panel, bb_dx_dy, view);
        }
    }
    return some_tools_to_unhide;
};
/*}}}*/
/*_ t_sync6_expand_bounding_box {{{*/
let t_sync6_expand_bounding_box = function(panel, bb_dx_dy, view)
{
let   caller = "t_sync6_expand_bounding_box";
let log_this = LOG_MAP.T3_LAYOUT;

/*{{{
    let es = panel.style;
if(log_this) log("%c  es.XY=["+parseInt( es.left)+" "+parseInt( es.top)+"]  es.WH=["+parseInt( es.width)+" "+parseInt( es.height)+"]", lb2);
}}}*/
/*{{{
    let cs = window.getComputedStyle(panel);
if(log_this) log("%c  cs.XY=["+parseInt( cs.left)+" "+parseInt( cs.top)+"]  cs.WH=["+parseInt( cs.width)+" "+parseInt( cs.height)+"]", lb2);
    let b  = t + parseInt(cs.height);
    let r  = l + parseInt(cs.width );
}}}*/
/*{{{
    let xy = t_util.get_el_xy_computed(panel, caller);
}}}*/

    let  xy = t_util.get_el_xy(    panel, caller);
    let map = t_tools_map_get(panel);
/*{{{
if(log_this) log("%c ....xy=["+parseInt( xy.x   )+" "+parseInt( xy.y  )+"]"                                                          , lb2);
if(log_this) log("%c map.XY=["+parseInt(map.x   )+" "+parseInt(map.y  )+"] map.WH=["+parseInt(map.w    )+" "+parseInt(map.h     )+"]", lb2);
}}}*/

    map.w  = panel.offsetWidth;
    map.h  = panel.offsetHeight;
    let w = map.w;
    let h = map.h;

    let t  = xy.y;
    let l  = xy.x;
    let b  = t + parseInt(h);
    let r  = l + parseInt(w);

    /* expand bounding box to include this element */
    let bb_changed = "";
    if( l < bb_dx_dy.l) { bb_dx_dy.l = l; bb_changed = " l"; }
    if( t < bb_dx_dy.t) { bb_dx_dy.t = t; bb_changed = " t"; }
    if( r > bb_dx_dy.r) { bb_dx_dy.r = r; bb_changed = " r"; }
    if( b > bb_dx_dy.b) { bb_dx_dy.b = b; bb_changed = " b"; }

    /* H-DRAG TO VIEWPORT */
    let dx = 0;
    /* FROM LEFT  */ if(r < view.l) dx = view.l - r; /* positive H-DRAG */
    /* FROM RIGHT */ if(l > view.r) dx = view.r - l; /* negative H-DRAG */

    /* V-DRAG TO VIEWPORT */
    let dy = 0;
    /* FROM ABOVE */ if(b < view.t) dy = view.t - b; /* positive V-DRAG */
    /* FROM BELOW */ if(t > view.b) dy = view.b - t; /* negative V-DRAG */

    /* TRACK MIN DRAG DISTANCES FROM VIEWPORT */
    let el_dxy =          Math.abs(         dx) + Math.abs(         dy);
    let          bb_dxy = Math.abs(bb_dx_dy.dx) + Math.abs(bb_dx_dy.dy);
    let log_color = "color:#A33;";
    if( el_dxy < bb_dxy) {
        bb_dx_dy.dx = dx; bb_changed += " dx";
        bb_dx_dy.dy = dy; bb_changed += " dy";
        log_color = "background-color:#F22;";
/*{{{
t_log.logSD6("%c bb_dx_dy.dx=["+bb_dx_dy.dx+"] bb_dx_dy.dy=["+bb_dx_dy.dy+"]", lbH+lf3)
}}}*/
    }

if(log_this) {
/*{{{
    log(caller+": "
        +" tl_wh=[ "+            t  +" "+          l  +"] ["+ (         r -          l) +" "+ (         b -          t) +"] dxy=[%c "+ dx          +" "+ dy          +" %c]"
        +" TL_WH=[ "+   bb_dx_dy.t  +" "+ bb_dx_dy.l  +"] ["+ (bb_dx_dy.r - bb_dx_dy.l) +" "+ (bb_dx_dy.b - bb_dx_dy.t) +"] DXY=[%c "+ bb_dx_dy.dx +" "+ bb_dx_dy.dy +" %c]"
        +" "+ get_n_lbl(panel)
        , "color:#A33;"           ,""
        , log_color,"background-color:initial;"
    );
}}}*/
    log_key_val_group(caller+"( "+t_bounding_box_toString(bb_dx_dy)+" )"
                      , {   [get_n_lbl(panel)] : "tl "+         t +" "+ l           +" .. wh "+                   (r-l)+" "+(b-t)                   +" .. dxy "+          dx +" "+ dy
                          ,                 BB : "TL "+bb_dx_dy.t +" "+ bb_dx_dy.l  +" .. WH "+ (bb_dx_dy.r-bb_dx_dy.l)+" "+(bb_dx_dy.b-bb_dx_dy.t) +" .. DXY "+ bb_dx_dy.dx +" "+ bb_dx_dy.dy + " .. CHANGED ["+bb_changed+"]"
                          ,               view : "TL "+    view.t +" "+     view.l  +" .. WH "+ (    view.r-    view.l)+" "+(    view.b    -view.t)
                      }
                     , lf6, false);
}
    return bb_dx_dy;
};
/*}}}*/

/*_ t_sync7_panel_magnified {{{*/
let t_sync7_panel_magnified = function()
{
/*{{{*/
let   caller = "t_sync7_panel_magnified";
let log_this = LOG_MAP.EV7_DISPATCH || LOG_MAP.T3_LAYOUT;

if(log_this) log("%c"+caller, lbH+lf7);
/*}}}*/
    for(let i=0; i < TOOL_panels.length; ++i)
    {
        let                         panel = TOOL_panels[i];
        if(!panel) continue;
        if(t_is_panel_magnified(    panel ))
           t_layout_panel_magnified(panel , true);
    }
};
/*}}}*/
/*_ t_bounding_box_toString {{{*/
let t_bounding_box_toString = function(bb)
{
    return "TL=["+bb.t+" "+bb.l+"] BR=["+bb.b+" "+bb.r+"] dx_dy=["+bb.dx+" "+bb.dy+"]";
};
/*}}}*/
/*_ t_pin_panel_at_XY {{{*/
let t_pin_panel_at_XY = function(panel, x, y, position, zIndex)
{
/*{{{*/
let   caller = "t_pin_panel_at_XY";
let log_this = LOG_MAP.T0_STORE || LOG_MAP.T1_DOM_LOAD || LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"("+get_n_lbl(panel)+", ["+x+" "+y+"], position=["+position+"], zIndex=["+zIndex+"])");
/*}}}*/

    t_set_panel_at_XY(panel, x, y, zIndex);

    t_set_CSS_PINNED(panel, true);
};
/*}}}*/
/*_ t_set_panel_at_XY {{{*/
let t_set_panel_at_XY = function(panel, x, y, position, zIndex)
{
/*{{{*/
let   caller = "t_set_panel_at_XY";
let log_this = LOG_MAP.T0_STORE || LOG_MAP.T1_DOM_LOAD || LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"("+get_n_lbl(panel)+", ["+x+" "+y+"], position=["+position+"], zIndex=["+zIndex+"])");
/*}}}*/

    if(position) panel.style.position = position;
    panel.style.left                  = x+"px"  ;
    panel.style.top                   = y+"px"  ;

    if( panel.style.display          == "none")
        panel.style.display           = "block";

    if(zIndex) panel.style.zIndex     = zIndex;

/*{{{
    panel.style.transformOrigin = "50% 50%";
}}}*/
};
/*}}}*/
/*}}}*/
/* TOOLS {{{*/
/*_ t_is_a_tool_el {{{*/
let t_is_a_tool_el = function(el, _caller)
{
let caller = "t_is_a_tool_el";
let log_this = LOG_MAP.EV0_LISTEN;

    if(!el) return   false;

    let result = "";
try {
    /* Element ID */
    if(     t_seek.t_seeker_is_a_tool_el(el)                                  ) { result = el.id;                    }
    else if( el.id            &&  el.id.startsWith("cb_textArea")             ) { result = el.id;                    }
    /* [shadow_root] */
    else if( shadow_root && shadow_root.contains(el)                          ) { result = "A SHADOW ELEMENT";       }
    /* DOC TOOL */
    else {
        if     (   has_el_class(el,                        CSS_TOOLBAG_BUTTON)) { result = "A DOC TOOL";             }
        else if(   t_util.is_el_child_of_class   (el,      CSS_TOOLBAG_BUTTON)) { result = "A DOC TOOL CHILD";       }
/*{{{
        else if(   t_util.is_el_or_child_of_class(el,      CSS_BUTTONS_POD   )) { result = "A BUTTONS POD OR CHILD"; }
        else if(   t_util.get_el_event_handler(el, caller)                    ) { result = "A DOC HANDLED EL";       }
}}}*/

        if(   result
           && t_is_an_embedded_doc_tool(el,log_this)
          ) {
if( log_this) log("%c "+t_util.get_id_or_tag(el)+" ["+CSS_EMBEDDED_DOC_TOOL+"]", lbH+lf8);

            result = "";
        }
    }
}
catch(ex) { log(caller+"("+get_n_lbl(el)+"):"+LF+ex); }

if( log_this) log("%c "+caller+"("+get_n_lbl(el)+") %c CALLED BY "+_caller+"%c ...return %c"+(result || "[]"),lbH, lbH, lbA, lbF);
if( log_this) console.dir(el);
    return result;
};
/*}}}*/
/*_ is_a_tool_container {{{*/
let is_a_tool_container = function(el)
{
    if(!el) return   false;
    let     result = false;
    if(el.parentNode.id == dom_tools_html.id) result =  true;

if(LOG_MAP.EV0_LISTEN) log("is_a_tool_container("+get_n_lbl(el)+"): ...return "+result);
    return result;
};
/*}}}*/
/*_ is_a_movable_TOOL_CHILD {{{*/
let is_a_movable_TOOL_CHILD = function(el)
{
let log_this = LOG_MAP.EV0_LISTEN;

    if(!el) return false;

    let rejected_reason = "";

/*{{{
    if     ( is_headsup_ds_movable_child(el)               ) rejected_reason = "";
}}}*/
    if     (                 t_isa_panel_pin(el)           ) rejected_reason = " .. (IS A PIN)";
    else if(!pat_bag                                       ) rejected_reason = " .. ([pat_bag] IS MISSSING)";
    else if(!pat_bag.contains(el)                          ) rejected_reason = " .. (NOT A [pat_bag] NODE )";
/*{{{
    else if(                 !el.className.startsWith("cc")) rejected_reason = " .. (IS A "+el.className+" SEL ITEM)";
}}}*/
    else if(                 !el.className.includes("cc")  ) rejected_reason = " .. (IS A "+el.className+" SEL ITEM)";

    let result = (rejected_reason == "");

if(log_this) log("is_a_movable_TOOL_CHILD("+get_n_lbl(el)+"): %c...return "+result + rejected_reason, (result ? lb3 : lb8));
    return result;
};
/*}}}*/
/*_ is_a_movable_panel {{{*/
let is_a_movable_panel = function(panel)
{
    if(!panel) return   false;
let log_this = LOG_MAP.EV0_LISTEN;

    let  reject_reason = "";

    if     (shadow_root   &&  !shadow_root.contains(panel)                            ) reject_reason = "NOT a [shadow_root] element";
    else if(dom_grid_html && dom_grid_html.contains(panel)                            ) reject_reason = "IS A [dom_grid_html] PANEL";

    else if(                 t_seek.t_seeker_is_a_tool_el( panel )                           ) reject_reason = panel.id;

    else if(                          dimm_mask_is( panel            )                ) reject_reason = panel.id;
    else if(                          dimm_mask_is( panel.parentNode )                ) reject_reason = panel.parentNode.id+" CHILD";

    else if(                                        panel.id.startsWith("cb_textArea")) reject_reason = panel.id;

    let result = (reject_reason == "");

if(log_this) log("%c is_a_movable_panel("+get_n_lbl(panel)+" "+panel.className+"): ...return "+result+" %c"+(reject_reason || panel.id), lb3,lbH+lfX[result ? 3:8]);
    return result;
};
/*}}}*/
/*}}}*/
/* STATE {{{*/
/*_ t_is_tool_deployed {{{*/
let t_is_tool_deployed = function(el)
{
    if(!el) return false;
let log_this = LOG_MAP.T3_LAYOUT;

    let reject_reason = "";

    if     (el.classList.contains(t_data.CSS_HIDDEN)        || el.parentNode.classList.contains(t_data.CSS_HIDDEN       )) reject_reason = t_data.CSS_HIDDEN;
    else if(el.style.display   == "none"             || el.parentNode.style.display   == "none"            ) reject_reason = "display:none";
    else if(el.classList.contains(t_data.CSS_PINNED) || el.parentNode.classList.contains(t_data.CSS_PINNED)) reject_reason = t_data.CSS_PINNED;

    let result = (reject_reason == "");

if(log_this) log("%c t_is_tool_deployed("+get_n_lbl(el)+" "+el.className+"): ...return "+result+" %c "+reject_reason, lb7,lbF);
    return result;
};
/*}}}*/
/*_ t_is_a_spreaded_tool {{{*/
let t_is_a_spreaded_tool = function(el)
{
let log_this = LOG_MAP.T3_LAYOUT;

    if(!el) return false;
    let reject_reason = "";

    /* may currently be hidden but not pinned */
    if(el.classList.contains(t_data.CSS_PINNED) || el.parentNode.classList.contains( t_data.CSS_PINNED )) reject_reason = "PINNED";
/*{{{
    let map = t_tools_map_get(el); if(!map.selected) reject_reason = "NOT SELECTED";
}}}*/
    if(!t_tools_panel_is_selected(el))               reject_reason = "NOT SELECTED";

    let result = (reject_reason == "");

if(log_this) log("%c t_is_a_spreaded_tool("+get_n_lbl(el)+" "+el.className+"): ...return "+result+" %c "+reject_reason, lb7,lbF);
    return result;
};
/*}}}*/
/*_ t_tools_panel_is_selected {{{*/
let t_tools_panel_is_selected = function(panel)
{
/*{{{*/
let   caller = "t_tools_panel_is_selected";
let log_this = LOG_MAP.T2_GRID;

/*}}}*/
/*{{{
    let          map = t_tools_map_get(panel);
    let result = map
        &&       map.selected;
}}}*/
    let      map = panel? t_tools_map_get(panel):null;   let reject_reason = ""; let accept_reason; let  lfx = lf4;
    if     (!map                                         ) { reject_reason = "NO SUCH PANEL"; lfx = lf2; }
    else if(!map.selected) {
        let      tools_tier2  =  prop.get(t_data.TOOLS_TIER2);
        let is_a_tools_tier2  =  is_a_tools_el_tier(panel,2);

        if     (!tools_tier2 &&  is_a_tools_tier2)       { reject_reason =       "TIER2 TOOLS NOT SELECTED"; lfx = lf6; }
        else if( tools_tier2 && !is_a_tools_tier2)       { reject_reason = "NOT A TIER2 TOOL"              ; lfx = lf7; }
        else if( tools_tier2 &&  is_a_tools_tier2)       { accept_reason =  "IS A TIER2 TOOL"              ; lfx = lf7; }
        else                                             { reject_reason = "NOT SELECTED"                  ; lfx = lf0; }

        if(!reject_reason) accept_reason = ".. [tools_tier2 "+tools_tier2+"] .. [is_a_tools_tier2 "+is_a_tools_tier2+"]";
    }
    let selected = (reject_reason == "");
if( log_this && (reject_reason || accept_reason)) log(caller+" %c"+t_util.mPadStart(get_n_lbl(panel),18)+"%c"+t_util.mPadEnd(reject_reason || "SELECTED",15)+" "+(accept_reason || ""), lbH, lbH+lfx);
    return selected;
};
/*}}}*/
/*_ t_get_first_selected_tool_panel t_get_next_selected_tool_panel t_get_prev_selected_tool_panel {{{*/
let t_get_next_selected_tool_panel = function(panel    ) { return t_get_near_selected_tool_panel(panel,  1); };
let t_get_prev_selected_tool_panel = function(panel    ) { return t_get_near_selected_tool_panel(panel, -1); };
let t_get_near_selected_tool_panel = function(panel,dir)
{
    let found_panel = false;

    let n_min = 1; /* SKIP [hotspot] */
    let n_max = TOOL_panels.length;

    for(let n = n_min; n <= n_max; ++n)
    {
        let i = (dir > 0) ? n-1 : (n_max - n);
        let p = TOOL_panels[i];
        if(!found_panel) { found_panel = (p == panel); continue; }
        if(     t_tools_panel_is_selected(p         )
            &&  t_is_a_spreaded_tool     (p         )
        )
            return p;
    }
    return null;
};
let t_get_first_selected_tool_panel = function()
{
    for(let i=1; i< TOOL_panels.length; ++i) {
        let panel = TOOL_panels[i];
        if(    t_tools_panel_is_selected(panel)
            && t_is_a_spreaded_tool     (panel)
        )
            return panel;
    }
    return null;
};
/*}}}*/
/*_ t_get_NW_NE_SE_SW_from_to {{{*/
let t_get_NW_NE_SE_SW_from_to = function(from_x,from_y, to_x,to_y)
{
    return ((from_y > to_y) ? "N" : "S")
        +  ((from_x > to_x) ? "W" : "E")
    ;
};
/*}}}*/
/*_ t_trapped_dir_show {{{*/
let t_trapped_dir_show = function(x,y)
{
    /* CURRENT TOOLS [nw_ne_se_sw] CORNER {{{*/
    let nw_ne_se_sw = t_get_NW_NE_SE_SW_from_to(h_x, h_y, pivotXY.x, pivotXY.y);
/*{{{
let   caller = "t_trapped_dir_show";
logXXX(caller+": "+nw_ne_se_sw+" ["+h_x+" "+h_y+"]");
}}}*/

    /*}}}*/
    /* ROTATION [hotspot_c] [pivspot_c] [tools_trap_el] {{{*/
    let rotate_className = "rotate_"+nw_ne_se_sw;
        /* hotspot_c {{{*/
        set_el_class_removing(hotspot_c, rotate_className, t_sticky.CSS_ROTATE_XX);

        /*}}}*/
        /* pivspot_c {{{*/
        set_el_class_removing(pivspot_c, rotate_className, t_sticky.CSS_ROTATE_XX);

        /*}}}*/
        /* GUI {{{*/
        let tools_trap_el = prop.get_EL(t_data.TOOLS_TRAP);
        if( tools_trap_el )
            set_el_class_removing(tools_trap_el, rotate_className, t_sticky.CSS_ROTATE_XX);

        /*}}}*/
    /*}}}*/
    /* LAYOUT [hotring] {{{*/
    let layout_className = "layout_"+nw_ne_se_sw;
    if(!has_el_class(hotring, layout_className))
    {
        del_el_class(hotring, t_sticky.CSS_LAYOUT_NE);
        del_el_class(hotring, t_sticky.CSS_LAYOUT_SE);
        del_el_class(hotring, t_sticky.CSS_LAYOUT_SW);
        del_el_class(hotring, t_sticky.CSS_LAYOUT_NW);

        add_el_class(hotring, layout_className);
    }
    /*}}}*/
/*{{{
t_fly.t_fly(        parseInt(pivotXY.x)
         +"<br>"+ parseInt(pivotXY.y)
         +"<br>"+ nw_ne_se_sw
);
}}}*/
};
/*}}}*/
/*_ t_set_CSS_PINNED {{{*/
let t_set_CSS_PINNED = function(tool_el, pinned)
{
/*{{{
logBIG("t_set_CSS_PINNED("+get_n_lbl(tool_el)+" "+pinned+")");
log_caller();
}}}*/
    if(pinned) {
        add_el_class(tool_el, t_data.CSS_PINNED      );
        del_el_class(tool_el, CSS_FULLY_SPREAD       ); /* mutual exclusion */
    }
    else {
        del_el_class(tool_el, t_data.CSS_PINNED      );
        del_el_class(tool_el, t_data.CSS_BORDERING   ); /* mutual exclusion */
    }

/*{{{
    if(pinned && t_tools_map_get(tool_el)) t_util.t_adjust_panel_transform_origin( tool_el );
}}}*/
    if(pinned && has_el_class(tool_el, CSS_BUTTON_MAGNIFY))
        t_util.t_adjust_panel_transform_origin( tool_el );
};
/*}}}*/
/*_ cache_PINNED_panels {{{*/
let cache_PINNED_panels = function()
{
    let pinned_panels = [];
    for(const panel of TOOL_panels) {
        if(                        panel
           && !has_el_class(panel, t_data.CSS_HIDDEN)
           &&  has_el_class(panel, t_data.CSS_PINNED)
          )
            pinned_panels.push( panel );
    }
    t_view.t_view6_cache_PINNED_panels( pinned_panels );
};
/*}}}*/
/*_ t_set_CSS_PIVOT_PANEL {{{*/
let t_set_CSS_PIVOT_PANEL = function(tool_el, state)
{
    if(state) {
        add_el_class(tool_el, CSS_PIVOT_PANEL);
        del_el_class(tool_el, CSS_FULLY_SPREAD); /* mutual exclusion */
    }
    else {
        del_el_class(tool_el, CSS_PIVOT_PANEL);
    }
};
/*}}}*/
/*_ t_set_CSS_FULLY_SPREAD {{{*/
let t_set_CSS_FULLY_SPREAD = function(tool_el, state)
{
    if(state) {
        add_el_class(tool_el, CSS_FULLY_SPREAD);
    }
    else {
        del_el_class(tool_el, CSS_FULLY_SPREAD);
    }
};
/*}}}*/
/*}}}*/
/*}}}*/

/* SCROLL */
/* {{{*/
let dom_scroll  = (function() {
/*"use strict";*/

/*{{{*/
const SCROLLED_INTO_VIEW     = "scrolled_into_view";
const SCROLLED_OVER_VIEW     = "scrolled_over_view";

const SCROLL_INTO_VIEW_DELAY = 500;
const SCROLL_RECENTER_DELAY  = 500;
const SCROLL_CONTAINER_DELAY = 500;

let t_scrollIntoView_EL;

let t_scroll_intoview_DONE_MS; let t_scroll_intoview_timer;
let t_scroll_recenter_DONE_MS; let t_scroll_recenter_timer;

/*}}}*/

/* LISTENER */
/*{{{*/
/*{{{*/

const MAX_SCROLL_SMOOTH_DURATION = 20000;
const SCROLLED_ENOUGH                 =  16;
const SCROLL_DONE_COOLDOWN  =  250;
const WINDOW_SCROLLTO_BY_SCRIPT_DELAY = 500;

let scroll_end_timeout = null;
let scroll_last_scrollY   = 0;
let has_been_scrolled_by_script;
let onLong_press_scroll_freezed;
let sync_scroll_smooth_timeout;
let t_scroll_div_slot_containers_in_viewport_timeout;
let t_window_scrollTo_last_call_MS;

/*}}}*/
/* t_scroll_listener {{{*/
/*{{{*/
let has_scrolled;

/*}}}*/
let t_scroll_listener = function(e)
{
/*{{{*/
let caller = "t_scroll_listener";
let log_this = LOG_MAP.EV1_DOWN;

if(log_this || LOG_MAP.EV7_DISPATCH) t_fly.t_log_event_status_if_changed_filter(caller, "scroll", lf6);
    let scrolled_by_script = "";
/*}}}*/
    has_scrolled = (Math.abs(window.scrollY - onDown_SCROLL_XY.y) > SCROLLED_ENOUGH);
/*{{{
log_key_val_group(caller, {has_scrolled,scrollY: window.scrollY, onDown_SCROLL_XY_y: onDown_SCROLL_XY.y, SCROLLED_ENOUGH }, lf8, false)
}}}*/
    /*  onLong_press_scroll_freezed {{{*/
    if( onLong_press_scroll_freezed )
    {
        window.scrollTo(  onDown_SCROLL_XY.x,  onDown_SCROLL_XY.y);

        return;
    }
    /*}}}*/
    /*  div_slot_containers_displayed .. f(SCROLLED_INTO_VIEW) {{{*/
    if( div_slot_containers_displayed() )
    {
        if(!has_el_class(div_slot_containers, dom_scroll.SCROLLED_INTO_VIEW) )
        {
            scrolled_by_script += "WAITING FOR CONTAINERS INTO VIEW";

            let rect = div_slot_containers.getBoundingClientRect();
            div_slot_containers.on_grid_height = parseInt(rect.bottom - rect.top);

if( log_this) log("%c"+caller+"%c div_slot_containers.height %c"+div_slot_containers.on_grid_height, lbL, lbC, lbR);
        }
        else {
            /* div_slot_containers into view {{{*/
            if((window.scrollY + window.innerHeight) > div_slot_containers.on_grid_height)
            {
if( log_this) log(caller+": ...t_window_scrollTo(0, "+div_slot_containers.on_grid_height +"- "+window.innerHeight+")");

                add_el_class(div_slot_containers, dom_scroll.SCROLLED_OVER_VIEW);

                t_window_scrollTo(0, div_slot_containers.on_grid_height - window.innerHeight);
            }
            else {
                del_el_class(div_slot_containers, dom_scroll.SCROLLED_OVER_VIEW);
            }
            /*}}}*/
            return;
        }
    }
    /*}}}*/
    /* SCROLLED BY SCRIPT OR BY USER {{{*/
    let scrolled_by_user   = "";
    let this_MS            = new Date().getTime();

    /*}}}*/
    /* WITHIN DELAY [SCROLL BY SCRIPT] {{{*/
    if( t_window_scrollTo_last_call_MS )
    {
        let elapsed = this_MS - t_window_scrollTo_last_call_MS;
        if( elapsed < WINDOW_SCROLLTO_BY_SCRIPT_DELAY) {
            scrolled_by_script += " .. WITHIN SCROLL_BY_SCRIPT DELAY OF "+WINDOW_SCROLLTO_BY_SCRIPT_DELAY+"ms";

if( log_this) log("%c"+caller+"%c WINDOW SCROLL %c ENDED "+elapsed+"ms AGO"
                  ,lbL+lf8    ,lbC+lf9         ,lbR+lf3);
        }
/*{{{
        t_window_scrollTo_last_call_MS = 0;
}}}*/

    }
    /*}}}*/
    /* WITHIN DELAY [SCROLL INTO VIEW IF NEEDED] {{{*/
    if( dom_scroll.t_scroll_intoview_DONE_WITHIN_SCRIPT_DELAY(this_MS) )
    {
        scrolled_by_script += " .. INTO VIEW";
    }
    /*}}}*/
    /* WITHIN DELAY [SCROLL RECENTER] {{{*/
    if( dom_scroll.t_scroll_recenter_DONE_WITHIN_SCRIPT_DELAY(this_MS) )
    {
        scrolled_by_script += " .. RECENTER";
    }
    /*}}}*/
    /* WITHIN DELAY [SCROLL TO LAST HIDDEN NODE] {{{*/
    if( t_hide.dom_hide4_scroll_to_last_hidden_handled_recently(WINDOW_SCROLLTO_BY_SCRIPT_DELAY) )
    {
        scrolled_by_script += " .. TO LAST HIDDEN NODE";

    }
    /*}}}*/
    /* INTERRUPTED BY USER .. CLEAR ALL PENDING SCROLL HANDLERS {{{*/
    if( !scrolled_by_script )
    {
        if( dom_scroll.t_scrollIntoViewIfNeeded_pending() ) {
if( log_this) log("%c SCROLLED BY USER %c CLEAR SCROLL INTO VIEW AND RECENTER", lbL+lf8, lbR+lf9);

            dom_scroll.t_scrollIntoViewIfNeeded( null );
        }

        if( t_hide.dom_hide4_scroll_to_last_hidden_is_pending() ) {
if( log_this) log("%c SCROLLED BY USER %c CLEAR SCROLL TO LAST HIDDEN HANDLER", lbL+lf8, lbR+lf9);

            t_hide.dom_hide4_scroll_to_last_hidden( null );
        }
    }
/*{{{
    else if( onDown_MS ) {
        let elapsed = this_MS - onDown_MS;
if( log_this) log(caller+"%c scrolled_by_script=["+scrolled_by_script+"] %c ONDOWN TO SCROLL EVENT DELAY %c "+elapsed+"ms"
                  ,       lbH+lf7                                       ,lbL+lf4                        ,lbR+lf4);
    }
}}}*/
    /*}}}*/
    /* ONSCROLL: CLEAR SELECTION AND UNDIMM STICKY TOOLS {{{*/
    if( t_sticky.t_sticky_EDITING() )
        t_sticky.t_sticky_EDIT_DONE();

    if( t_sticky.t_sticky_reorder_required_on_scroll() )
        t_sticky.t_sticky_reorder();

    t_window_getSelection_removeAllRanges();

    /* scroll burst filter */
/*{{{
    if(!t_sticky.t_sticky_SET_DIMMED_IS_PENDING())
        t_sticky.t_sticky_SET_DIMMED(false, "SCROLL");
}}}*/

    /*}}}*/

if( log_this && scrolled_by_script) log("%c"+caller+" %c "+scrolled_by_script, lbb+lbL+lf8, lbb+lbR+lf3);
if( log_this && scrolled_by_user  ) log("%c"+caller+" %c "+scrolled_by_user  , lbb+lbL+lf7, lbb+lbR+lf3);
    scroll_listener_scroll_changed(e, scrolled_by_script);
};
/*}}}*/
/*_ get_has_scrolled {{{*/
let get_has_scrolled = function()
{
    return has_scrolled;
};
/*}}}*/
/*_ clr_has_scrolled {{{*/
let clr_has_scrolled = function()
{
    has_scrolled = false;
};
/*}}}*/
/*_ t_scroll_div_slot_containers_in_viewport {{{*/
let t_scroll_div_slot_containers_in_viewport = function(scrolled_by_script)
{
/*{{{
logBIG("t_scroll_div_slot_containers_in_viewport("+scrolled_by_script+")");
logBIG("t_scrollIntoViewIfNeeded_pending="+t_scrollIntoViewIfNeeded_pending());
}}}*/

    if(t_scroll_div_slot_containers_in_viewport_timeout) return;

    /* KEEP [div_slot_containers] BOTTOM VISIBLE {{{*/
    if(!scrolled_by_script)
    {
        del_el_class(div_slot_containers, dom_scroll.SCROLLED_INTO_VIEW);
        add_el_class(div_slot_containers, dom_scroll.SCROLLED_OVER_VIEW);

        t_scroll_div_slot_containers_in_viewport_timeout
            = setTimeout(
                         function() {
                             t_scroll_div_slot_containers_in_viewport_timeout = null;

                             let scrollY_max = BOX_MARGIN + div_slot_containers.offsetHeight - window.innerHeight;
                             if(window.scrollY > scrollY_max)
                                 t_window_scrollTo(window.scrollX, scrollY_max, "instant");
                         }
                         , WINDOW_SCROLLTO_BY_SCRIPT_DELAY);
    }
    /*}}}*/
};
/*}}}*/
/*_ t_window_scrollTo {{{*/
/*{{{*/
/*{{{
let CACHED_GLOBAL_WINDOW_SCROLLTO = window.scrollTo;
let window_overriden_scrollTo_deleted;
}}}*/
/*}}}*/
let t_window_scrollTo = function(x, y, scrollBehavior)
{
    /* set behavior */
    scrollBehavior =                         scrollBehavior
        || (prop.get(t_data.SCROLL_SMOOTH) ? "smooth"
            :                                "instant");
    set_scrollBehavior( scrollBehavior );

    /* scroll */
    x *= (body_zoom_percent  / 100);
    y *= (body_zoom_percent  / 100);
    window.scrollTo(x, y);

/*
 :!start explorer "https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView"
*/

    /* restore user behavior */
    if(sync_scroll_smooth_timeout) clearTimeout( sync_scroll_smooth_timeout );
    sync_scroll_smooth_timeout   =   setTimeout( sync_scroll_smooth, MAX_SCROLL_SMOOTH_DURATION);

    /* clear move in progress */
    onMoveDXY.x = 0;
    onMoveDXY.y = 0;
};
/*}}}*/
/*_ set_scrollBehavior {{{*/
let set_scrollBehavior = function(scrollBehavior)
{
    let html  = document.getElementsByTagName("HTML")[0];

    let state = (scrollBehavior == "smooth");

    set_el_class_on_off(html, t_data.SCROLL_SMOOTH, state);

/*{{{
logXXX("set_scrollBehavior("+scrollBehavior+") .. set_el_class_on_off(html , "+t_data.SCROLL_SMOOTH+","+state+")");
}}}*/
};
/*}}}*/
/*_ sync_scroll_smooth {{{*/
let sync_scroll_smooth = function()
{
    /* restore user behavior */
    sync_scroll_smooth_timeout = null;

    let html  = document.getElementsByTagName("HTML")[0];

    let state = prop.get( t_data.SCROLL_SMOOTH );

    set_el_class_on_off(html, t_data.SCROLL_SMOOTH, state);

/*{{{
logXXX("sync_scroll_smooth() .. set_el_class_on_off(html , "+t_data.SCROLL_SMOOTH+","+state+")");
}}}*/
};
/*}}}*/
/*_ scroll_listener_scroll_changed {{{*/
let scroll_listener_scroll_changed = function(e, scrolled_by_script="")
{
/*{{{*/
let   caller = "scroll_listener_scroll_changed";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller +": ["+ window.scrollX +" "+ window.scrollY +"]"+ (scrolled_by_script ? " scrolled_by_script" : "") + (container_selected ? " container_selected=["+t_util.get_id_or_tag(container_selected)+" "+t_util.get_n_txt(container_selected)+"]" : ""));
/*}}}*/
    /* has_been_scrolled_by_script {{{*/
    if(scrolled_by_script && !has_been_scrolled_by_script && (Math.abs(window.scrollY - onDown_SCROLL_XY.y) > SCROLLED_ENOUGH))
    {
        has_been_scrolled_by_script = "HAS SCROLLED .. abs("+(window.scrollY - onDown_SCROLL_XY.y)+") > "+ SCROLLED_ENOUGH;
    }
    /*}}}*/
    t_set_has_moved(has_been_scrolled_by_script || caller);
    /*    seeker follow scrolling {{{*/
    if(!t_seek.t_seeker_sync_is_pending() )
        t_seek.t_seeker_sync();

    /*}}}*/
    if( div_slot_containers_displayed() )
    {
        /* div_slot_containers {{{*/
        if(dimm_mask.firstElementChild == div_slot_containers)
        {
            /* SCROLLED BY SCRIPT */
            if( scrolled_by_script )
            {
if( log_this) logBIG(caller+": "+ scrolled_by_script +" .. SCROLL INTO VIEW", lf4);

                dom_scroll.t_scrollIntoViewIfNeeded_dimm_mask_container_selected( dimm_mask.firstElementChild );
            }
            /* SCROLLED BY USER .. INTERRUPT SCHEDULED SCROLLING */
            else if( dom_scroll.t_scrollIntoViewIfNeeded_pending() )
            {
if( log_this) logBIG(caller+": "+ scrolled_by_script +" .. SCROLL INTO VIEW CANCELED", lf5);

                dom_scroll.t_scrollIntoViewIfNeeded_dimm_mask_container_selected( null );
            }
        }
        /*}}}*/
    }
    /* follow [container_selected] {{{*/
    if(container_selected)
        t_seek.t_seekzone7_show_container( container_selected );

    /*}}}*/
    /* display current window scrollY percentage .. (thumb_p) {{{*/
    if( toolbar_thumb )
    {
        /* keep only 2 digits */
        let thumb_p             = 100 * window.scrollY / t_util.getPageHeight();
        let thumb_p_str         = t_select.t_get_thumb_p_str(thumb_p);
        toolbar_thumb.innerHTML = thumb_p_str.replace(" ","&nbsp;");
    }
    /*}}}*/
    /* track and store [window_scrollY] {{{*/
    if(!scroll_end_timeout)
    {
/*{{{
t_log.console_clear("scroll_listener_scroll_changed")
logXXX("SCROLLING START");
}}}*/
/*{{{
        add_el_class(document.body, t_data.CSS_SCROLLING);
}}}*/

        scroll_end_timeout = setTimeout(scroll_check_handler, SCROLL_DONE_COOLDOWN);
    }
    /*}}}*/
};
/*}}}*/
/*_ scroll_check_handler {{{*/
let scroll_check_handler     = function()
{
/*{{{*/
let   caller = "scroll_check_handler";
let log_this = LOG_MAP.T3_LAYOUT;

    scroll_end_timeout = null;
/*}}}*/
    let                this_scrollY  =      window.scrollY;
    let done_moving = (this_scrollY == scroll_last_scrollY);
    if( done_moving )
    {
        /* [el_to_mark_SCROLLED_INTO_VIEW] MARK DONE {{{*/
        dom_scroll.t_scrollIntoView_EL_reset();

        /*}}}*/
        /* SCROLLING DONE: .. CALL [t_clr_has_moved] {{{*/
        t_clr_has_moved("scroll_check_handler");

/*{{{
        del_el_class(document.body, t_data.CSS_SCROLLING);
}}}*/

/*{{{
        scroll_done_collect_nodes_in_view();
}}}*/
if( log_this) log("%c TODO %c scroll_done_collect_nodes_in_view", lbb+lbL+lf2, lbb+lbR+lf8);
        /*}}}*/
        /* STORE SCROLL POSITION {{{*/
        t_store.t_store_set_value("window_scrollY", scroll_last_scrollY);
/*{{{
logBIG("SET window_scrollY=["+scroll_last_scrollY+"]", lf3);
}}}*/

        /*}}}*/
    }
    else {
        /* RECHECK AGAIN LATER {{{*/
        scroll_last_scrollY  = this_scrollY;
        scroll_end_timeout = setTimeout(scroll_check_handler, SCROLL_DONE_COOLDOWN);
/*{{{
logBIG("SET window_scrollY=["+scroll_last_scrollY+"]", lf6);
}}}*/
        /*}}}*/
    }
};
/*}}}*/
/*_ t_scroll_not_done_yet {{{*/
let t_scroll_not_done_yet = function()
{
    return (scroll_end_timeout != null);
};
/*}}}*/
/*_ scroll_done_collect_nodes_in_view {{{*/
/*{{{*/
let nodes_in_view_array         = [];

/*}}}*/
let scroll_done_collect_nodes_in_view = function(dir)
{
/*{{{*/
let   caller = "scroll_done_collect_nodes_in_view";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c TODO %c "+caller, lbb+lbL+lf2, lbb+lbR+lf8);

if( log_this) console.time(caller);
/*}}}*/
    /* CURRENT [VIEWPORT TOP BOTTOM] thumb_p {{{*/
    let view_T = window.scrollY;
    let view_B = window.scrollY+ window.innerHeight;

if( log_this) log("...view_T=["+ view_T +"]");
if( log_this) log("...view_B=["+ view_B +"]");
    /*}}}*/
    /* FORGET PREVIOUSLY VIEWABLE NODES {{{*/
    for(let i = 1; i <= nodes_in_view_array.length; ++i)
        del_el_class(   nodes_in_view_array[i], t_data.CSS_VIEWABLE);

    /*}}}*/
    /* COLLECT CURRENTLY VIEWABLE NODES {{{*/
    nodes_in_view_array = [];
    for(let slot = 1; slot < t_select.ccs.length; ++slot)
    {
        /* ...skip unpopulated ones */
        let num_max = t_select.t_select_get_slot_nodes_length(slot);
        if(!t_select.ccs[slot] || (num_max < 1)) continue;

        for(let num = 1; num <= num_max; ++num)
        {
            let       node    = t_select.ccs[slot].nodes[num-1];
            let       node_T  = t_util.getInPageTop( node );
            let       node_B  = node_T + node.offsetHeight;
            if(      (node_T >= view_T)
                  && (node_B <= view_B)
              ) {
                nodes_in_view_array.push( node );
                add_el_class(node, t_data.CSS_VIEWABLE);

if( log_this) log(". "+nodes_in_view_array.length+": slot["+slot+"] num["+num+"]");
            }
        }

    }
    /*}}}*/
if( log_this) console.time(caller);
if( log_this) console.timeEnd(caller);
};
/*}}}*/
/*}}}*/
/*_ get_has_been_scrolled_by_script {{{*/
let get_has_been_scrolled_by_script = function()
{
    return has_been_scrolled_by_script;
};
/*}}}*/
/*_ clr_has_been_scrolled_by_script {{{*/
let clr_has_been_scrolled_by_script = function()
{
    has_been_scrolled_by_script  = "";
};
/*}}}*/
/*_ set_onLong_press_scroll_freezed {{{*/
let set_onLong_press_scroll_freezed = function(state)
{
    onLong_press_scroll_freezed = state;
};
/*}}}*/
/*_ get_scroll_last_scrollY {{{*/
let get_scroll_last_scrollY = function()
{
    return scroll_last_scrollY;
};
/*}}}*/

/*➔ t_scrollIntoViewIfNeeded {{{*/
let t_scrollIntoViewIfNeeded = function(el, delay)
{
    let to_the_top = (onWork_EL == null); /* .. for automatic progression */

    scrollIntoViewIfNeeded(el, delay, to_the_top);
};
/*}}}*/
/*_   scrollIntoViewIfNeeded {{{*/
let   scrollIntoViewIfNeeded = function(el, delay, to_the_top)
{
/*{{{*/
let   caller = "scrollIntoViewIfNeeded";
let log_this = LOG_MAP.EV0_LISTEN;

if( log_this) log("%c "+caller+" %c "+t_util.get_id_or_tag(el)+"%c el.scrolledIntoViewHandled "+el.scrolledIntoViewHandled+"%c delay "+delay
                  ,lbL+lf4      ,lbR+lf4                       ,lbH+lfX[el.scrolledIntoViewHandled ? 5 : 6]                ,lbH+lf9         );
/*{{{
if( log_this) t_log.console_dir(el);
if( log_this) log_caller();
}}}*/
/*}}}*/

    t_scrollIntoViewIfNeeded_cancel(caller);

    t_scrollIntoView_EL                 = el;
    if(t_scrollIntoView_EL)
    {
/*{{{
        let scrollable_container = t_util.get_scrollable_parent(el);
        if( scrollable_container )
        {
if( log_this) log("%c...centering within a scrollable container ["+t_util.get_id_or_tag(scrollable_container)+"]", lf8);
}}}*/

            set_scrollBehavior( "instant" );
            t_scrollIntoView_EL.scrollIntoView({ block:"nearest", behavior:"auto" }); /* containers with a scrollbar (220915) */
            sync_scroll_smooth();

/*{{{
            return;
        }
}}}*/

        t_scrollIntoView_EL.to_the_top  = to_the_top;
        delete t_scrollIntoView_EL.scrolledIntoViewHandled;

        if( delay == undefined)   delay = SCROLL_INTO_VIEW_DELAY;

        if( delay ) t_scroll_intoview_timer = setTimeout(scrollIntoViewIfNeeded_handler, delay); /* async */
        else                                             scrollIntoViewIfNeeded_handler();       /* sync */
    }
    else {
        t_scroll_intoview_timer = null;
    }
};
/*}}}*/
/*➔ t_scrollIntoViewIfNeeded_pending {{{*/
let t_scrollIntoViewIfNeeded_pending = function()
{
    return (t_scroll_intoview_timer != null)
        || (t_scroll_recenter_timer != null)
    ;
};
/*}}}*/
/*➔ t_scrollIntoViewIfNeeded_cancel {{{*/
let t_scrollIntoViewIfNeeded_cancel = function(_caller)
{
/*{{{*/
let   caller = "t_scrollIntoViewIfNeeded_cancel";
let log_this = LOG_MAP.EV0_LISTEN;

/*}}}*/

    if( t_scrollIntoView_EL ) {
        delete t_scrollIntoView_EL.scrolledIntoViewHandled;
        delete t_scrollIntoView_EL.to_the_top;
        t_scrollIntoView_EL = null;
    }

    if( t_scroll_intoview_timer )
    {
if( log_this) log(caller+": PENDING SCROLL INTERRUPTED BY "+ _caller);
        clearTimeout( t_scroll_intoview_timer );
    }

    if( t_scroll_recenter_timer )
    {
if( log_this) log(caller+": PENDING RECENTER INTERRUPTED BY "+ _caller);
        clearTimeout(t_scroll_recenter_timer);
        t_scroll_recenter_timer = null;
    }

    t_seek.t_seeker_move_above_XY_cancel(caller);

};
/*}}}*/
/*_   scrollIntoViewIfNeeded_handler {{{*/
/*{{{*/
let scrollIntoView_was_needed;

/*}}}*/
let   scrollIntoViewIfNeeded_handler = function()
{
/*{{{*/
let   caller = "scrollIntoViewIfNeeded_handler";
let log_this = LOG_MAP.EV0_LISTEN;

    t_scroll_intoview_timer = null;
    if(!t_scrollIntoView_EL) return;

    let el = t_scrollIntoView_EL;
if( log_this) log("%c "+caller+" %c "+t_util.get_id_or_tag(el)+"%c el.scrolledIntoViewHandled "+el.scrolledIntoViewHandled
                  ,lbL+lf4      ,lbR+lf4                       ,lbH+lfX[el.scrolledIntoViewHandled ? 5 : 6]        );
/*}}}*/
    /* [? scrolledIntoViewHandled]  {{{*/
    if( el.scrolledIntoViewHandled )
    {
        let      this_MS = new Date().getTime();
        let since_handled = this_MS - el.scrolledIntoViewHandled;
        let  just_handled = (since_handled < SCROLL_RECENTER_DELAY*3);

if( log_this) log("%c  just_handled=["+just_handled+"] "+parseInt(since_handled / 1000)+"s", lbH+lfX[just_handled ? 8:7]);

        if( just_handled ) return;
    }

    el.scrolledIntoViewHandled = new Date().getTime();
if( log_this) log("%c el.scrolledIntoViewHandled=["+el.scrolledIntoViewHandled+"]", lbH+lf6);

    /*}}}*/
    /* SCROLL WHERE {{{*/
    let xy = scrollIntoViewIfNeeded_get_scrollXY( el );
    if(!xy) {
        delete el.to_the_top;

        return;
    }
    /*}}}*/
    /* NOT NEEDED {{{*/
    if((window.scrollX == xy.x) && (window.scrollY == xy.y))
    {
/*{{{
if( log_this) log("%c SCROLL INTO VIEW NOT NEEDED %c "+window.scrollX+" "+window.scrollY, lbb+lbH+lf8, lbb+lbH+lf8);
}}}*/

        scrollIntoView_was_needed = false;
if( log_this) log("%c scrollIntoView_was_needed=["+scrollIntoView_was_needed+"]", lbH+lf8);
    }
    /*}}}*/
    /* IF NEEDED {{{*/
    else {
        scrollIntoView_was_needed = true;
if( log_this) log("%c scrollIntoView_was_needed=["+scrollIntoView_was_needed+"]", lbH+lf8);

if( log_this) t_fly.t_log_event_status(caller);
if( log_this) log("SCROLL INTO VIEW %c DX=["+window.scrollX+" "+t_data.SYMBOL_RIGHT_ARROW+" "+xy.x+"] %c DY=["+window.scrollY+" "+t_data.SYMBOL_RIGHT_ARROW+" "+xy.y+"]"
                  ,                 lbL+lf9                                                          ,lbR+lf9                                                    );
/*{{{
logXXX("%c "+caller+": t_scroll_not_done_yet=["+t_scroll_not_done_yet()+"]", lbH+lf7);
}}}*/

        t_scroll_intoview_DONE_MS = new Date().getTime();

        let scrollBehavior = prop.get( t_data.SCROLL_SMOOTH ) ? "smooth" : "instant";
        t_window_scrollTo(xy.x, xy.y, scrollBehavior);
    }
    /*}}}*/

    /* should'nt we always recenter ? */
    if(scrollIntoView_was_needed && !t_scrollIntoView_EL.to_the_top)
    {
        if(!t_scroll_recenter_timer && prop.get(t_data.SHOW_SEEKZONE)) {
if( log_this) logBIG("RECENTERING");

            t_scroll_recenter_timer = setTimeout(scrollIntoViewIfNeeded_then_recenter_handler, SCROLL_RECENTER_DELAY);
        }
/*{{{
        else {
if( log_this) logBIG("NOT RECENTERING", lf8);

        }
}}}*/
    }
    delete el.to_the_top;
};
/*}}}*/
/*_   scrollIntoViewIfNeeded_then_recenter_handler {{{*/
let   scrollIntoViewIfNeeded_then_recenter_handler = function()
{
/*{{{*/
let   caller = "scrollIntoViewIfNeeded_then_recenter_handler";
let log_this = LOG_MAP.EV0_LISTEN;

if( log_this) log("%c "+caller+" %c "+t_util.get_id_or_tag(t_scrollIntoView_EL), lbL+lf6,lbR+lf6);
/*}}}*/
    /* RECENTER DONE .. POINTER STILL DOWN .. REARM A LONG-PRESS {{{*/
    if( t_seek.t_seeker_PU_is_looking_somewhere() )
        rearm_long_press_listener_onScrollIntoView();

    /*}}}*/
    if( !t_scrollIntoView_EL) return;
    let el = t_scrollIntoView_EL;
    /* SCROLL WHERE {{{*/
    t_scroll_recenter_timer   = null;
    t_scroll_recenter_DONE_MS = new Date().getTime();

    let xy = t_util.get_el_xy(el, caller);
    if(!xy ) return;

    let e_W = el.clientWidth  || el.offsetWidth;
    let e_H = el.clientHeight || el.offsetHeight;

    xy.x    = xy.x  /* container left   */
        +     e_W/2 /* container center */
        -     w_W/2 /*   window  center */
    ;

    xy.y    = xy.y  /* container top    */
        +     e_H/2 /* container middle */
        -     w_H/2 /*   window  middle */
    ;

    /*}}}*/
    /* IS NEEDED .. (not already there) {{{*/
    if((window.scrollX != xy.x) || (window.scrollY != xy.y))
    {
        scrollIntoView_was_needed = true;
if( log_this) t_fly.t_log_event_status("SCROLL RECENTER  DX=["+window.scrollX+" .. "+xy.x+"] .. DY=["+window.scrollY+" .. "+xy.y+"]", lf6);
        if( onWork_EL )
        {
/*{{{
logXXX("%c NOT RECENTERING WHEN [onWork_EL] NOT NULL %c"+ t_util.get_id_or_tag(onWork_EL), lbb+lbL+lf4, lbb+lbR+lf7);
}}}*/
        }
        else {
/*{{{
logXXX("%c ... RECENTERING WHEN [onWork_EL]  IS NULL", lbb+lbH+lf8);
}}}*/
            let scrollBehavior = prop.get( t_data.SCROLL_SMOOTH ) ? "smooth" : "instant";
            t_window_scrollTo(xy.x, xy.y, scrollBehavior);
        }
    }
    /*}}}*/
    /* NOT NEEDED {{{*/
    else {
        scrollIntoView_was_needed = false;
if( log_this) log("%c SCROLL RECENTER NOT NEEDED %c "+window.scrollX+" "+window.scrollY, lbb+lbH+lf6, lbb+lbH+lf6);

    }
    /*}}}*/
};
/*}}}*/

/*➔ t_scrollIntoViewIfNeeded_get_scrollXY_with_margin {{{*/
let t_scrollIntoViewIfNeeded_get_scrollXY_with_margin = function(el)
{
    return scrollIntoViewIfNeeded_get_scrollXY_with_options({ container:el , with_margin:true });
};
/*}}}*/
/*_   scrollIntoViewIfNeeded_get_scrollXY_with_options {{{*/
let   scrollIntoViewIfNeeded_get_scrollXY_with_options = function({ container, with_margin=true })
{
/*{{{*/
let caller = "scrollIntoViewIfNeeded_get_scrollXY_with_options";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) t_fly.t_log_event_status(caller+"(container=["+t_util.get_id_or_tag(container)+"] , [with_margin "+with_margin+"])", lf5);
/*{{{
container.scrollIntoView(true);
- opt_center: (if false): aligned to the nearest edge of the visible area of the scrollable ancestor
- scrollable ancestor...: (node.scrollHeight > node.clientHeight)
container.t_scrollIntoViewIfNeeded(true);
}}}*/
    /*}}}*/
    /* VIEW {{{*/
    w_W = window.innerWidth ;
    w_H = window.innerHeight;
    let view_rect
        = {   left   : window.scrollX       + (with_margin ? t_data.VIEWPORT_MARGIN.left   : 16)
            , top    : window.scrollY       + (with_margin ? t_data.VIEWPORT_MARGIN.top    : 16)
            , right  : window.scrollX + w_W - (with_margin ? t_data.VIEWPORT_MARGIN.right  : 32)
            , bottom : window.scrollY + w_H - (with_margin ? t_data.VIEWPORT_MARGIN.bottom : 32)
        };

    view_rect.height
        = view_rect.bottom
        - view_rect.top
    ;
    /*}}}*/
    /* EL {{{*/
    let xy = t_util.get_el_xy(container, caller);
/*{{{
xy.el = container
log_key_val_group(caller, xy, lf8, false)
console.dir(container)
log_caller()
}}}*/
    if(!xy) return null;

    let e_W = container.clientWidth  || container.offsetWidth;
    let e_H = container.clientHeight || container.offsetHeight;

    let el_rect
        = { left   : xy.x
        ,   top    : xy.y
        ,   right  : xy.x + e_W
        ,   bottom : xy.y + e_H
    };

    el_rect.height
        = el_rect.bottom
        - el_rect.top
    ;
    /*}}}*/
    /* SEEKER ACTIVE ABOVE CONTAINER {{{*/
    let added_seeker_height_atop = 0;
    if(t_seek.t_seeker_PU_is_active())
    {
        added_seeker_height_atop = t_seek.t_seeker_get_seeker_PU_height();

    }
    /*}}}*/
    /* OVER [top left bottom right] {{{*/
    el_rect.seekTop
        =  el_rect.top
        -  added_seeker_height_atop
    ;
    let over_left      = (el_rect.left    < view_rect.left  );
    let over_top       = (el_rect.seekTop < view_rect.top   );
    let over_right     = (el_rect.right   > view_rect.right );
    let over_bottom    = (el_rect.bottom  > view_rect.bottom);
    let on_sentence    = has_el_class(container, t_sentence.CSS_SENTENCE_CONTAINER);

    let over_something
        = (over_top    ? "T":"")
        + (over_left   ? "L":"")
        + (over_right  ? "R":"")
        + (over_bottom ? "B":"");

    let may_go_left    = (el_rect.right  < window.innerWidth); /* i.e. still visible with no left margin */
if(log_this) {
    log_key_val_group("to_the_top .. over_something=["+over_something+"]"
                      , {   container
                          , on_sentence
                          , added_seeker_height_atop
                          , el_rect
                          , e_H
                          , view_rect
                          , window_scrollY : window.scrollY
                          , over_something : ((over_top ? "T":"_")+(over_left ? "L":"_")+(over_right ? "R":"_")+(over_bottom ? "B":"_"))
                      }, lfX[over_something ? 7:8], false);
}

    /*}}}*/
    /* NOT NEEDED .. (return null) {{{*/
    if(!!!over_something) return null; /* falsy coerced */ /* eslint-disable-line no-extra-boolean-cast */

    /*}}}*/
    /* scrollX scrollY {{{*/
    let scrollX
        = (over_left  ) ? el_rect.left                         - (with_margin ? t_data.VIEWPORT_MARGIN.left   : 16)
        : (over_right ) ? el_rect.right   - window.innerWidth  + (with_margin ? t_data.VIEWPORT_MARGIN.right  : 32)
        : may_go_left   ?                          0
        :                                          window.scrollX;
    scrollX = Math.max(scrollX, 0);

    let scrollY
        = (on_sentence ) ? el_rect.seekTop                     - (with_margin ? t_data.VIEWPORT_MARGIN.top    : 16)
        : (over_top    ) ? el_rect.seekTop                     - (with_margin ? t_data.VIEWPORT_MARGIN.top    : 16)
        : (over_bottom ) ? el_rect.bottom - window.innerHeight + (with_margin ? t_data.VIEWPORT_MARGIN.bottom : 32)
        :                                          window.scrollY;
    scrollY = Math.max(scrollY, 0);

    /*}}}*/
    /* FROM [over_bottom .. to_the_top] {{{*/
    if(container.to_the_top && over_bottom)
    {
        let scroll_more
            =  view_rect.height
            - (el_rect.height + added_seeker_height_atop);
/*{{{*/
if(log_this)
        log_key_val_group("to_the_top .. scroll_more=["+scroll_more+"]"
                          , {   container
                              , view_rect
                              , el_rect
                              , window_scrollY      : window.scrollY
                              , over_something      : ((over_top ? "T":"_")+(over_left ? "L":"_")+(over_right ? "R":"_")+(over_bottom ? "B":"_"))
                              , scrollY
                              , scroll_more
                              , scrollY_scroll_more : (scrollY + scroll_more)
                          }, lfX[over_something ? 7:8], false);

/*}}}*/
        scrollY += scroll_more;
    }
    /*}}}*/
    let    result = { x : scrollX , y : scrollY };
    return result;
};
/*}}}*/
/*_   scrollIntoViewIfNeeded_get_scrollXY {{{*/
let   scrollIntoViewIfNeeded_get_scrollXY = function(el)
{
    return scrollIntoViewIfNeeded_get_scrollXY_with_options({ container:el , with_margin:false });
};
/*}}}*/

/*➔ t_scroll_recenter_DONE_WITHIN_SCRIPT_DELAY {{{*/
let t_scroll_recenter_DONE_WITHIN_SCRIPT_DELAY = function(this_MS)
{
    if(!t_scroll_recenter_DONE_MS ) return false;

    let elapsed = this_MS - t_scroll_recenter_DONE_MS;
    t_scroll_recenter_DONE_MS = 0;

    return elapsed < WINDOW_SCROLLTO_BY_SCRIPT_DELAY;
};
/*}}}*/
/*➔ t_scroll_intoview_DONE_WITHIN_SCRIPT_DELAY {{{*/
let t_scroll_intoview_DONE_WITHIN_SCRIPT_DELAY = function(this_MS)
{
    if(!t_scroll_intoview_DONE_MS ) return false;

    let elapsed = this_MS - t_scroll_intoview_DONE_MS;
    t_scroll_intoview_DONE_MS = 0;

    return elapsed < WINDOW_SCROLLTO_BY_SCRIPT_DELAY;
};
/*}}}*/

/*➔ t_scrollIntoViewIfNeeded_dimm_mask_container_selected {{{*/
/*{{{*/
let t_scrollIntoViewIfNeeded_dimm_mask_container_selected_timer;

let el_to_mark_SCROLLED_INTO_VIEW;
/*}}}*/
let   t_scrollIntoViewIfNeeded_dimm_mask_container_selected = function(el)
{
/*{{{*/
let   caller = "t_scrollIntoViewIfNeeded_dimm_mask_container_selected";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c "+caller+" %c "+t_util.get_id_or_tag(el), lbL+lf4,lbR+lf4);
/*}}}*/

    el_to_mark_SCROLLED_INTO_VIEW = el;

    if(    t_scrollIntoViewIfNeeded_dimm_mask_container_selected_timer) clearTimeout( t_scrollIntoViewIfNeeded_dimm_mask_container_selected_timer );
    if(el) t_scrollIntoViewIfNeeded_dimm_mask_container_selected_timer =  setTimeout( scrollIntoViewIfNeeded_dimm_mask_container_selected_handler, SCROLL_CONTAINER_DELAY);
};
/*}}}*/
/*_   scrollIntoViewIfNeeded_dimm_mask_container_selected_handler {{{*/
let   scrollIntoViewIfNeeded_dimm_mask_container_selected_handler = function()
{
/*{{{*/
let   caller = "scrollIntoViewIfNeeded_dimm_mask_container_selected_handler";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/

    /* SLOT CONTAINERS CURRENTLY DISPLAYED */
    let containers                      =  dimm_mask.firstElementChild;
if( log_this) t_log.console_dir("dimm_mask.firstElementChild", containers    );

    if(!containers                       ) return;
    if( containers != div_slot_containers) return;

    /* FIRST CONTAINER */
    let                       container =  containers.firstElementChild;
if( log_this) t_log.console_dir("containers.firstElementChild",     container );

    /* SELECTED CONTAINER */
    while(container && !has_el_class(container , CSS_CONTAINER_SELECTED))
        container =                  container .  nextElementSibling;

    /* SCROLL INTO VIEW IF NEEDED */
if( log_this) t_log.console_dir("container", container);
    if(container &&  has_el_class(container, CSS_CONTAINER_SELECTED)) t_scrollIntoViewIfNeeded( container );

    t_scrollIntoViewIfNeeded_dimm_mask_container_selected_timer = null;
};
/*}}}*/

/*➔ t_scrollIntoView_EL_reset {{{*/
let t_scrollIntoView_EL_reset = function()
{
/*{{{*/
let   caller = "t_scrollIntoView_EL_reset";
let log_this = LOG_MAP.T3_LAYOUT;

/*}}}*/
    if(t_scrollIntoView_EL) delete t_scrollIntoView_EL.scrolledIntoViewHandled;

    if( el_to_mark_SCROLLED_INTO_VIEW )
    {
if( log_this) log("%c"+caller+" %c ["+t_util.get_id_or_tag(el_to_mark_SCROLLED_INTO_VIEW) +"] SCROLLED_INTO_VIEW DONE", lbb+lbL+lf8, lbb+lbR+lf3);

        del_el_class(el_to_mark_SCROLLED_INTO_VIEW, SCROLLED_OVER_VIEW);
        add_el_class(el_to_mark_SCROLLED_INTO_VIEW, SCROLLED_INTO_VIEW);

        el_to_mark_SCROLLED_INTO_VIEW = null;
    }
};
/*}}}*/
/*➔ t_scrollIntoView_was_needed {{{*/
let t_scrollIntoView_was_needed = function()
{
    return scrollIntoView_was_needed;
};
/*}}}*/
/*➔ t_scrollIntoView_was_needed_reset {{{*/
let t_scrollIntoView_was_needed_reset = function()
{
    scrollIntoView_was_needed = false;
};
    /*}}}*/

/* EXPORT */
return { name : "dom_scroll"

    /*   LISTENER */
    ,    clr_has_been_scrolled_by_script
    ,    get_has_scrolled
    ,    clr_has_scrolled
    ,    get_has_been_scrolled_by_script
    ,    get_scroll_last_scrollY
    ,    scroll_listener_scroll_changed
    ,    set_onLong_press_scroll_freezed
    ,    t_scroll_div_slot_containers_in_viewport
    ,    t_scroll_listener
    ,    t_scroll_not_done_yet
    ,    t_window_scrollTo

    ,    SCROLLED_INTO_VIEW
    ,    SCROLLED_OVER_VIEW

    ,    t_scrollIntoViewIfNeeded
    ,    t_scrollIntoViewIfNeeded_cancel
    ,    t_scrollIntoViewIfNeeded_dimm_mask_container_selected
    ,    t_scrollIntoViewIfNeeded_get_scrollXY_with_margin
    ,    t_scrollIntoViewIfNeeded_pending

    ,    t_scrollIntoView_EL
    ,    t_scrollIntoView_EL_reset

    ,    t_scrollIntoView_was_needed
    ,    t_scrollIntoView_was_needed_reset

    ,    t_scroll_intoview_DONE_WITHIN_SCRIPT_DELAY
    ,    t_scroll_recenter_DONE_WITHIN_SCRIPT_DELAY

};
}());
/*}}}*/

/* STATUS */
/*XXX*/
/*{{{*/
/*_ t_get_event_status_object {{{*/
let t_get_event_status_object = function()
{
    let onSeekXYL = t_seek.t_seeker_get_onSeekXYL();
    let has_been_scrolled_by_script = dom_scroll.get_has_been_scrolled_by_script();

    return {              captured_by : (t_preventDefault_caller ? (t_preventDefault_caller ) : "" )
        ,                 consumed_by : (t_event_consumed_cause  ? (t_event_consumed_cause  ) : "" )
        ,              window_scrollY :                             window.scrollY
        , has_been_scrolled_by_script :                            (has_been_scrolled_by_script ?                      has_been_scrolled_by_script : "NO")
        ,                   has_moved :                            (has_moved                   ? has_moved.replace(":",":"+LF+t_data.SYMBOL_RIGHT_ARROW) : "NO")
        ,                   onSeekXYL : t_util.strip_CR_LF(onSeekXYL.label)+" XY=["+onSeekXYL.x+" "+onSeekXYL.y+"]"
        ,                 was_a_click :                            (was_a_click()               ? "YES" : "NO")
        ,          selection_progress :                            (get_SELECTION_PROGRESS()    ? "YES" : "NO")
    };
};
/*}}}*/
/*_ t_get_tools_status_object {{{*/
let t_get_tools_status_object = function()
{

/*{{{
    ... NAME SPACE ACCESS
    let onWork_EL            = t_get_onWork_EL();
    let onDown_EL            = t_get_onDown_EL();
    let onWork_EL_last_used  = t_get_onWork_EL_last_used();
    let onWork_MOVABLE_PANEL = t_get_onWork_MOVABLE_PANEL();
    let onWork_PANEL         = t_get_onWork_PANEL();
    let onWork_SEEK_TARGET   = t_get_onWork_SEEK_TOOL();
    let onWork_MOVABLE_CHILD = t_get_onWork_MOVABLE_CHILD();
    let pivot_PANEL          = t_get_pivot_PANEL();
}}}*/

    let tool_details = "";
    if( t_is_a_tool_el(onWork_EL, "log_get_tools_status_object") )
    {
        let sticky = t_sticky.t_sticky_get_onWork_STICKY();
        tool_details
            = (onWork_EL.tagName != "DIV") ? "["+ onWork_EL.textContent +"]"
            : (onWork_EL      == sticky  ) ? "A STICKY TOOL .. SEEK_NEXT "+ get_n_lbl( t_sticky.t_sticky_get_SEEK_NEXT() )
            :                                "A TOOL BAG"
        ;
    }
    else {
        tool_details  = "NOT A TOOL";
    }

    return { onDown_EL             : get_n_lbl(            onDown_EL )
        ,    onWork_EL             : get_n_lbl(            onWork_EL )
        ,    onWork_EL_last_used   : get_n_lbl( onWork_EL_last_used  )
        ,    onWork_PANEL          : get_n_lbl( onWork_PANEL         )+" .. MOVABLE CHILD ["+ get_n_lbl( onWork_MOVABLE_CHILD  )+"]"
        ,    onWork_MOVABLE_PANEL  : get_n_lbl( onWork_MOVABLE_PANEL )+" .. PIVOT PANEL ["+   get_n_lbl( pivot_PANEL           )+"]"
        ,    onWork_SEEK_TARGET      : t_seek.t_seeker_get_TOOL_label()
        ,    seeker_isOn_SLOT_EL   : t_seek.t_seeker_isOn_SLOT_EL()
        ,    tool_details
    };

};
/*}}}*/
/*XXX*/
/* NOT_MOVED_ENOUGH {{{*/
/*{{{*/
const CSS_NOT_MOVED_ENOUGH = "not_moved_enough";

/*}}}*/
/*_ t_add_NOT_MOVED_ENOUGH {{{*/
let t_add_NOT_MOVED_ENOUGH   = function()
{
    add_el_class(  hotspot   , CSS_NOT_MOVED_ENOUGH);
    drag_cursor.add_drag_cursor_CSS_NOT_MOVED_ENOUGH();
};
/*}}}*/
/*_ t_del_NOT_MOVED_ENOUGH {{{*/
let t_del_NOT_MOVED_ENOUGH   = function()
{
    del_el_class(  hotspot   , CSS_NOT_MOVED_ENOUGH);
    drag_cursor.del_drag_cursor_CSS_NOT_MOVED_ENOUGH();
};
/*}}}*/
/*}}}*/
/*XXX*/
/* MOVE_ON_COOLDOWN {{{*/
/*{{{*/
const CSS_MOVE_ON_COOLDOWN = "move_on_cooldown";

let move_on_cooldown_timer;
/*}}}*/
/*_ t_add_MOVE_ON_COOLDOWN {{{*/
let t_add_MOVE_ON_COOLDOWN   = function(time_left)
{
    if( move_on_cooldown_timer ) return;

    /**/move_on_cooldown_timer =   setTimeout(t_del_MOVE_ON_COOLDOWN, time_left);
    add_el_class(  hotspot   , CSS_MOVE_ON_COOLDOWN);
    drag_cursor.add_drag_cursor_CSS_MOVE_ON_COOLDOWN();
};
/*}}}*/
/*_ t_del_MOVE_ON_COOLDOWN {{{*/
let t_del_MOVE_ON_COOLDOWN = function()
{
    if(!move_on_cooldown_timer ) return;
/*{{{*/
let log_this = LOG_MAP.EV2_MOVE;

if(log_this) log("t_del_MOVE_ON_COOLDOWN");
/*}}}*/
    if( move_on_cooldown_timer) clearTimeout( move_on_cooldown_timer );
    /**/move_on_cooldown_timer = null;
    del_el_class(  hotspot   , CSS_MOVE_ON_COOLDOWN);
    drag_cursor.del_drag_cursor_CSS_MOVE_ON_COOLDOWN();

    zap_onMoveDXY(); /* next move from here */
};
/*}}}*/
/*}}}*/
/*}}}*/

/* WORDING */
/*{{{*/
/* WORDS OPTION {{{*/
/*{{{*/
const PATTERN_SEPARATOR     = "|";
const PATTERN_SEPARATOR_LEN = PATTERN_SEPARATOR.length;

/*}}}*/
/*➔ t_pattern_to_sel_text_words_option {{{*/
let t_pattern_to_sel_text_words_option = function(pattern)
{
/*{{{*/
let caller = "t_pattern_to_sel_text_words_option";
let log_this = LOG_MAP.S2_SELECT;

/*}}}*/

    let len
        =   pattern.length;

    let result
        = { pattern
          , len
          , PATTERN_SEPARATOR
          , PATTERN_SEPARATOR_LEN
        };

    /* [words_option] .. f( PATTERN::X ) {{{*/
    let sel_text     = pattern;
    let words_option = get_current_words_option(); /* FALLBACK */

    let    idx  = pattern.lastIndexOf(PATTERN_SEPARATOR);
    let    sfx  = (idx > 0) ? pattern.substring(idx+PATTERN_SEPARATOR_LEN) : "";
    switch(sfx) {
    case   "E": words_option = t_data.WORDS_EXACT    ; sel_text = sel_text.substring(0,len-PATTERN_SEPARATOR_LEN-1); break;
    case   "S": words_option = t_data.WORDS_SEGMENT  ; sel_text = sel_text.substring(0,len-PATTERN_SEPARATOR_LEN-1); break;
    case   "H": words_option = t_data.WORDS_HEAD_TAIL; sel_text = sel_text.substring(0,len-PATTERN_SEPARATOR_LEN-1); break;
    default   : sfx = "";
    }

    if(sfx) {
        result.idx      = idx;
        result.sfx      = sfx;
        result.sel_text = sel_text;
    }
    /*}}}*/
    /* [words_option] .. f( REGEX LITERAL ) {{{*/
    if(!sfx)
    {
        let     pattern_WORDS_EXACT
            =   pattern.startsWith("\\b(")
            &&  pattern.endsWith  ("\\b");

/*{{{
        let     pattern_WORDS_HEAD_TAIL
            =   pattern.startsWith("\\S*")
            &&  pattern.endsWith  ("\\S*");
}}}*/

        let     pattern_WORDS_HEAD_TAIL
            =   pattern.startsWith("\\w*")
            &&  pattern.endsWith  ("\\w*");

/*{{{
        let     pattern_WORDS_SEGMENT
            =  !sfx
            && !pattern_WORDS_EXACT
            && !pattern_WORDS_HEAD_TAIL;
}}}*/

        if(     pattern_WORDS_HEAD_TAIL) { words_option = t_data.WORDS_HEAD_TAIL; sel_text = pattern.substring(3,len-3); }
/*{{{
        else if(pattern_WORDS_SEGMENT  ) { words_option = t_data.WORDS_SEGMENT  ; sel_text = pattern;                    }
}}}*/
        else if(pattern_WORDS_EXACT    ) { words_option = t_data.WORDS_EXACT    ; sel_text = pattern.substring(2,len-2); }

        result.pattern_WORDS_EXACT     = pattern_WORDS_EXACT;
/*{{{
        result.pattern_WORDS_SEGMENT   = pattern_WORDS_SEGMENT;
}}}*/
        result.pattern_WORDS_HEAD_TAIL = pattern_WORDS_HEAD_TAIL;
    }
    /*}}}*/

    result.words_option = words_option;
    result.sel_text     = sel_text;
/*{{{*/

if( log_this) result.current_words_option = get_current_words_option();
if( log_this) result.CALLERS = t_log.get_callers();
if( log_this) log_key_val( caller+"("+pattern+"):  return [ "+sel_text+" , "+words_option+" ]"
                         , result
                         , lf3);
/*}}}*/
    return [ sel_text , words_option ];
};
/*}}}*/
/*➔ t_pattern_del_words_option_sfx {{{*/
let t_pattern_del_words_option_sfx = function(pattern)
{
    let expected_idx = pattern.length -1   -PATTERN_SEPARATOR_LEN ;
    let          idx = pattern.lastIndexOf( PATTERN_SEPARATOR    );
    if(         (idx < 0)
       ||       (idx != expected_idx)
      )
        return pattern;
    else
        return pattern.substring(0, pattern.length -PATTERN_SEPARATOR_LEN -1);
};
/*}}}*/
/*➔ t_pattern_del_words_extension {{{*/
let t_pattern_del_words_extension = function(pattern)
{
    let proot = t_pattern_del_words_option_sfx(pattern);

    /* filter extension */
    let plural = proot.endsWith("(s)?");

    /* remove extension */
    let idx    = proot.indexOf("(");
    if( idx > 0) proot = proot.substring(0, idx);

    /* format proot */
    if( plural ) return proot+"s";
    else         return proot;
};
/*}}}*/
/*➔ pattern_fallback_to_current_words_option_sfx {{{*/
let pattern_fallback_to_current_words_option_sfx = function(pattern,words_option)
{
    if(pattern.lastIndexOf(PATTERN_SEPARATOR) == (pattern.length -PATTERN_SEPARATOR_LEN -1))
        return pattern;

    switch( words_option   ) {
    case    t_data.WORDS_EXACT    : return pattern +PATTERN_SEPARATOR +"E";
    case    t_data.WORDS_SEGMENT  : return pattern +PATTERN_SEPARATOR +"S";
    case    t_data.WORDS_HEAD_TAIL: return pattern +PATTERN_SEPARATOR +"H";
    default                       : return pattern;
    }
};
/*}}}*/
/*➔ t_words_regex_no_match {{{*/
let t_words_regex_no_match = function(pattern, msg)
{
    /* TOOLS */
    let tools_filter = t_get_tool(t_data.WORDS_FILTER);
    let words_regex  = t_get_tool("words_regex");

    /* DISPLAY REGEX */
    if( words_regex  ) words_regex.innerHTML = pattern;

    /* SET WARNING STYLE */
    if( tools_filter ) set_el_class_removing(tools_filter, CSS_FG2, FGX_CLASSLIST);
    if( words_regex  ) set_el_class_removing(words_regex , CSS_FG2, FGX_CLASSLIST);

    /* SET WARNING TOOLTIP */
    if( tools_filter ) t_util.t_replace_initial_title(tools_filter             , pattern ? pattern : "NO MATCH");
    if( words_regex  ) t_util.t_replace_initial_title(words_regex.parentElement,     msg ?     msg : "NO MATCH");
};
/*}}}*/
/*➔ t_words_regex_reset {{{*/
let t_words_regex_reset = function(pattern)
{
/*{{{
logBIG("t_words_regex_reset("+pattern+")");
}}}*/

    /* TOOLS */
    let tools_filter = t_get_tool(t_data.WORDS_FILTER);
    let words_regex  = t_get_tool("words_regex" );

    /* CLEAR WARNING STYLE */
    if( tools_filter ) set_el_class_removing(tools_filter, "", FGX_CLASSLIST);
    if( words_regex  ) set_el_class_removing( words_regex, "", FGX_CLASSLIST);

    /* CLEAR WARNING TOOLTIP */
    if( tools_filter) t_util.t_restore_initial_title( tools_filter              );
    if( words_regex ) t_util.t_restore_initial_title( words_regex.parentElement );

    /* PATTERN */
    set_tool_id_value(t_data.WORDS_FILTER, t_pattern_del_words_option_sfx( pattern ));
};
/*}}}*/

/*➔ t_words_option_select {{{*/
let t_words_option_select = function(words_option)
{
/*{{{*/
let   caller = "t_words_option_select";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller+"("+words_option+") %c prop.get("+words_option+")=["+prop.get(words_option)+"]", lbH+lf5, lbH+lf3);
/*}}}*/

    switch( words_option )
    {
    case t_data.WORDS_OPCYCLE  : if(prop.get (words_option      ) && t_tools_loaded) words_option_cycle(); break;
    case t_data.WORDS_EXACT    :    prop.init(t_data.WORDS_EXACT,  true); prop.init(t_data.WORDS_SEGMENT  , false); prop.init(t_data.WORDS_HEAD_TAIL, false); break;
    case t_data.WORDS_SEGMENT  :    prop.init(t_data.WORDS_EXACT, false); prop.init(t_data.WORDS_SEGMENT  ,  true); prop.init(t_data.WORDS_HEAD_TAIL, false); break;
    default  /* INIT */ :
    case t_data.WORDS_HEAD_TAIL:    prop.init(t_data.WORDS_EXACT, false); prop.init(t_data.WORDS_SEGMENT  , false); prop.init(t_data.WORDS_HEAD_TAIL,  true); break;
    }

    words_option_sync();
};
/*}}}*/
/*➔ t_words_option_tooltip {{{*/
let t_words_option_tooltip = function(innerHTML, tooltip)
{
    /* TOOLS */
    let tools_filter = t_get_tool(t_data.WORDS_FILTER);
    let words_regex  = t_get_tool("words_regex" );

    /* DISPLAY REGEX */
    if( words_regex     ) words_regex.innerHTML = innerHTML;

    /* SET MATCHING STYLE */
    if( tools_filter    ) set_el_class_removing(tools_filter, CSS_FG0, FGX_CLASSLIST);
    if( words_regex     ) set_el_class_removing(words_regex , CSS_FG0, FGX_CLASSLIST);

    /* SET MATCHING TOOLTIP */
    if(tooltip) {
        if( tools_filter) t_util.t_replace_initial_title( tools_filter             , tooltip);
        if( words_regex ) t_util.t_replace_initial_title( words_regex.parentElement, tooltip);
    }
    else {
        if( tools_filter) t_util.t_restore_initial_title( tools_filter              );
        if( words_regex ) t_util.t_restore_initial_title( words_regex.parentElement );
    }
};
/*}}}*/
/*…   words_option_sync {{{*/
let   words_option_sync = function()
{
    /* TOOLS {{{*/
    let el_tools_filter    = t_get_tool(t_data.WORDS_FILTER); /* INPUT  */
    let el_WORDS_EXACT     = prop.get_EL( t_data.WORDS_EXACT     );
    let el_WORDS_SEGMENT   = prop.get_EL( t_data.WORDS_SEGMENT   );
    let el_WORDS_HEAD_TAIL = prop.get_EL( t_data.WORDS_HEAD_TAIL );
    let el_WORDS_OPCYCLE   = prop.get_EL( t_data.WORDS_OPCYCLE   );

    if(   !el_tools_filter
       || !el_WORDS_EXACT
       || !el_WORDS_SEGMENT
       || !el_WORDS_HEAD_TAIL
      )
        return;
    /*}}}*/
    /* [words_option] [cycling] {{{*/
    let words_option = get_current_words_option();
    let cycling
        =     prop.get( t_data.WORDS_OPCYCLE );
/*{{{
log("%c words_option=["+ words_option +"]", lbH+lf8);
log("%c .....cycling=["+ cycling      +"]", lbH+lf8);
}}}*/

    /*}}}*/
    /* t_data.WORDS_OPCYCLE TOOLS COLOR {{{*/
    switch( words_option )
    {

    case t_data.WORDS_EXACT:
    el_WORDS_OPCYCLE.style.color = window.getComputedStyle( prop.get_EL( t_data.WORDS_EXACT     )).backgroundColor;
    break;

    case t_data.WORDS_SEGMENT:
    el_WORDS_OPCYCLE.style.color = window.getComputedStyle( prop.get_EL( t_data.WORDS_SEGMENT   )).backgroundColor;
    break;

    case t_data.WORDS_HEAD_TAIL:
    el_WORDS_OPCYCLE.style.color = window.getComputedStyle( prop.get_EL( t_data.WORDS_HEAD_TAIL )).backgroundColor;
    break;

    }
    /*}}}*/
    /* t_data.WORDS_OPCYCLE {{{*/
    if(!cycling ) el_WORDS_OPCYCLE.style.backgroundColor = "white";
    set_el_class_removing(el_WORDS_OPCYCLE, words_option, WORDS_CLASSLIST);

    /*}}}*/
    /* PATTERN FILTER INPUT {{{*/
    if( words_filter_input ) {
        set_el_class_removing(words_filter_input, words_option  , WORDS_CLASSLIST);
        add_el_class         (words_filter_input, t_data.CSS_DATA_PATTERN);
    }

    /*}}}*/
};
/*}}}*/
let t_set_el_pat_words_option = function(el, pat)
{
    let [ sel_text , words_option ] = t_pattern_to_sel_text_words_option( pat );

    set_el_class_removing(el, words_option  , WORDS_CLASSLIST);

    el.title = t_util.t_get_htmlEntities(sel_text) + t_data.LF + words_option;

/*{{{
log("t_set_el_pat_words_option("+get_n_lbl(el)+","+pat+"): %c el.className=["+el.className+"]", lbH+lf8);
}}}*/
};
/*…   words_option_cycle {{{*/
const PATTERN_CYCLE_DELAY = 200;

let   words_option_cycle = function()
{
/*{{{*/
let   caller = "words_option_cycle";
let log_this = LOG_MAP.S2_SELECT;

/*}}}*/
    /* [last_cleared_pattern] {{{*/
    let last_cleared_pattern = t_slot.get_last_cleared_pattern();
if(log_this) logBIG(caller+": last_cleared_pattern=["+last_cleared_pattern+"]");

    /*}}}*/
    /* [next_option] {{{*/
    let next_option
        = prop.get( t_data.WORDS_EXACT  ) ? t_data.WORDS_SEGMENT
        : prop.get( t_data.WORDS_SEGMENT) ? t_data.WORDS_HEAD_TAIL
        :                            t_data.WORDS_EXACT;
if(log_this) log("...next_option=["+next_option+"]");

    t_words_option_select( next_option );
    /*}}}*/
    /* NEXT CYCLE {{{*/
    if(next_option != t_data.WORDS_EXACT)
    {
if(log_this) t_log.log_TR_SELECT_set("<em class='big'>CYCLING NEXT TO WORDS OPTION "+ words_options_symbol(next_option)+"</em>");
if(log_this) log              (                "CYCLING NEXT TO WORDS OPTION "+                      next_option         );

        prop_id_toggle(next_option);
    }
    /*}}}*/
    /* NEW CYCLE ON RESELECTION {{{*/
    else {
        t_clear( caller );
if(log_this) t_log.log_TR_SELECT_set("<em class='big'>CYCLING BACK TO WORDS OPTION "+ words_options_symbol(next_option)+"</em>");
if(log_this) log              (                "CYCLING BACK TO WORDS OPTION "+                      next_option         );

        t_sync_styles(caller);

        save5_wording();

/*{{{
        if( words_filter_input ) t_focus( words_filter_input );
}}}*/

        t_words_option_tooltip("...");
    }
    /*}}}*/
    if( t_preventDefault_caller ) t_restoreDefault("t_data.WORDING CYCLE");
};
/*}}}*/
/*…   words_options_symbol {{{*/
/*{{{*/
let WORDS_EXACT_SYMBOL       = "<em class='cc3'>&equiv;</em>";
let WORDS_SEGMENT_SYMBOL     = "<em class='cc4'>&sub;</em>"  ;
let WORDS_HEAD_TAIL_SYMBOL   = "<em class='cc5'>&isin;</em>" ;
let WORDS_OPCYCLE_SYMBOL     = "<em class='cc9'>\u27F3</em>" ;

/*}}}*/
let   words_options_symbol = function(option)
{
    switch(  option          ) {
        case t_data.WORDS_EXACT     : return WORDS_EXACT_SYMBOL     ;
        case t_data.WORDS_SEGMENT   : return WORDS_SEGMENT_SYMBOL   ;
        case t_data.WORDS_HEAD_TAIL : return WORDS_HEAD_TAIL_SYMBOL ;
        case t_data.WORDS_OPCYCLE   : return WORDS_OPCYCLE_SYMBOL   ;
        default                     : return "*** WRONG WORDS OPTION ***";
    }
};
/*}}}*/
/*…   get_current_words_option {{{*/
let   get_current_words_option = function()
{
    return prop.get( t_data.WORDS_EXACT  ) ? t_data.WORDS_EXACT
        :  prop.get( t_data.WORDS_SEGMENT) ? t_data.WORDS_SEGMENT
        :                                    t_data.WORDS_HEAD_TAIL;
};
/*}}}*/

/*}}}*/
/* CONTAINER SELECT {{{*/
/*_ t_seek_set_container_selected {{{*/
/*{{{*/
let container_selected;

/*}}}*/
let t_seek_set_container_selected = function(container, _caller)
{
/*{{{
    let caller ="t_seek_set_container_selected";
logXXX("%c "+caller+"("+t_util.get_id_or_tag(container)+")", lbH+lf7);
}}}*/
    /* [container_selected] {{{*/
    if(container_selected == container) return;

    if(container_selected) del_el_class(container_selected, CSS_CONTAINER_SELECTED);

    container_selected     = container;

    /*}}}*/
    /* SEEKER FOLLOWS [container_selected] {{{*/
    if(container_selected)
        t_seek.t_seekzone7_show_container( container_selected );

    /*}}}*/
    /* add_el_class [container_selected] {{{*/
    if(container_selected)
    {
        add_el_class(container_selected, CSS_CONTAINER_SELECTED);
        t_seek.t_seekzone_set_selected();

        let xy = t_util.get_el_xy(container_selected, "t_seek_set_container_selected");
        if( xy )           container_selected.x = xy.x;
    }
    else {
        container_selected.x = 0;
        t_seek.t_seekzone_clr_selected();

    }
    /*}}}*/
/*{{{
logBIG("t_data.EDIT_OR_STAGE "+prop.get(t_data.EDIT_OR_STAGE));
t_fly.t_fly ("t_data.EDIT_OR_STAGE "+prop.get(t_data.EDIT_OR_STAGE));
}}}*/
    if( prop.get(t_data.EDIT_OR_STAGE) )
        t_hide.dom_hide4_scroll_to_last_hidden( container );
};
/*}}}*/
/*_ t_get_container_selected {{{*/
let t_get_container_selected = function()
{
    return container_selected;
};
/*}}}*/
/*_ t_clr_container_selected {{{*/
let t_clr_container_selected = function()
{
    if(!container_selected ) return;
    /* del_el_class [container_selected] {{{*/
    del_el_class(container_selected, CSS_CONTAINER_SELECTED);
    t_seek.t_seekzone_clr_selected();

    /*}}}*/
    /* [container_selected] {{{*/
    container_selected = null;

    /*}}}*/
};
/*}}}*/
/*_ t_set_touchedWord_startContainer {{{*/
let t_set_touchedWord_startContainer = function()
{
/*{{{*/
    let caller = "t_set_touchedWord_startContainer";
let log_this   = LOG_MAP.EV3_UP;

    let  touchedWord_slot = t_select.get_touchedWord_slot();
if( log_this) log("%c"+caller+" %c FOR SELECTION RANGE "+t_util.get_id_or_tag(t_select.get_touchedWord_range_parent())+" %c "+       touchedWord_slot
                  ,lbb+lbL+lf3 ,lbb+lbC+lf3                                                         ,lbb+lbR+lfX[touchedWord_slot]);

/*}}}*/
    /* GET [touched_container] {{{*/
    let slot = touchedWord_slot;
    let touched_container;
    for(let num=1; num <= t_select.ccs[slot].containers.length; ++num)
    {
        if( t_util.is_el_or_child_of_parent_el(t_select.get_touchedWord_range_parent(), t_select.ccs[slot].containers[num-1]) )
        {
            touched_container = t_select.ccs[slot].containers[num-1];

if( log_this) log("%c"+caller+" %c "+t_util.get_id_or_tag(touched_container)+" %c num "+num
                  ,lbb+lbL+lf3 ,lbb+lbC+lf3                             ,lbb+lbR+lf3 );
            break;
        }
    }
    /*}}}*/
    /* HIGHLIGHT [touched_container] {{{*/
    if(touched_container)
    {
        t_seek_set_container_selected(touched_container, caller);
        dom_scroll.t_scrollIntoViewIfNeeded     (touched_container);
    }
    else {
if( log_this) log("%c"+caller+" %c NO [touched_container]"
                  ,lbb+lbL+lf3 ,lbb+lbR+lf2               );
    }
    /*}}}*/
};
/*}}}*/
/*}}}*/
/* CONTAINER FULLSCREEN {{{*/
/*{{{*/
const DIMM_MASK_MARGIN = 32;

let div_slot_containers;
let button_PREV/*, button_PREV_LEFT*/;
let button_NEXT/*, button_NEXT_LEFT*/;
let button_MONO;

/*
 :!start explorer "https://developer.mozilla.org/en-US/docs/Web/CSS/white-space"
*/

/*}}}*/
/*_ build_div_slot_containers {{{*/
let build_div_slot_containers = function()
{
    if( div_slot_containers ) return div_slot_containers;

    div_slot_containers    = document.createElement("DIV");
    div_slot_containers.id = "div_slot_containers";

    button_PREV            = t_slot_containers_get_button(CSS_BUTTON_PREV, t_data.SYMBOL_HEAVY_RIGHT_ARROW);
/*{{{
            button_PREV_LEFT       = t_slot_containers_get_button(CSS_BUTTON_PREV, t_data.SYMBOL_HEAVY_RIGHT_ARROW);
            add_el_class(button_PREV_LEFT, t_data.CSS_LEFT);
}}}*/

    button_NEXT            = t_slot_containers_get_button(CSS_BUTTON_NEXT, t_data.SYMBOL_HEAVY_RIGHT_ARROW);
/*{{{
            button_NEXT_LEFT       = t_slot_containers_get_button(CSS_BUTTON_NEXT, t_data.SYMBOL_HEAVY_RIGHT_ARROW);
            add_el_class(button_NEXT_LEFT, t_data.CSS_LEFT);
}}}*/

    button_MONO            = t_slot_containers_get_button(CSS_BUTTON_MONO, t_data.SYMBOL_MENU             );
    button_MONO.title      = t_i18n.i18n_get(t_i18n.MONOSPACE);

    return div_slot_containers;
};
/*}}}*/
/*_ t_slot_containers_display {{{*/
let t_slot_containers_display = function(slot)
{
/* {{{*/
let   caller = "t_slot_containers_display(slot "+slot+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    /* TODO account for window geometry {{{*/
/*{{{
    let  body_SH = document.body.scrollHeight;
    let  body_CH = document.body.clientHeight;
    let  body_OH = document.body.offsetHeight;
if(log_this) log("...body   [  H] = ["+body_SH +" "+ body_CH +" "+ body_OH +"] .. [Scroll Client Offset]");
}}}*/
if(log_this) log("...window [W H] = ["+w_H     +" "+ w_W                   +"]");
    /*}}}*/
    /* BUILD dimm_mask.innerHTML {{{*/
    if(!dimm_mask) dimm_add();
    dimm_mask.innerHTML = "";
    let       innerHTML = "";

    let    num_selected = t_select.ccs[slot].num_selected; /* (selection to return to when done) */
    let container_count = 0;
    let num_max = t_select.t_select_get_slot_nodes_length(slot);
    for(let num = 0;   num <= num_max; ++num)
    {
        /* count more than one num .. in the same container {{{*/
        let container = t_select.ccs[slot].containers[num-1];
        let  num_last = num;
        while(    ( num_last <  num_max)
               && (container == t_select.ccs[slot].containers[num_last])
             )
            num_last += 1;

        /*}}}*/
        if( t_select.ccs[slot].containers[num-1] ) {
            /* container .. (slot paragraph) {{{*/
            container        = t_select.ccs[slot].containers[num-1];
            container_count += 1;
            /*}}}*/
            /* geometry {{{*/
            let                      container_H = container.scrollHeight;
            let content_is_too_big = container_H >= (w_H * 0.9);

/*{{{
            let                          cont_CH = container.clientHeight;
            let                          cont_OH = container.offsetHeight;
            let   container_is_body_single_child = (container == document.body) && (document.body.childNodes.length == 1);

if(log_this) log("...cont   [  H] = ["+ container_H +" "+ cont_CH +" "+ cont_OH +"] .. [Scroll Client Offset]");
if(log_this) log("...container_is_body_single_child.: "+ container_is_body_single_child);
if(log_this) log("...content_is_too_big..........: "+ content_is_too_big +"] .. [container_H / window_H] ["+container_H+" / "+w_H+"]");
}}}*/
            /*}}}*/
            /* title .. [title num copy_icon css text] {{{*/
            let title_em
                = (container           .title) ? " <em>"+container           .title+"</em>"
                : !container.parentNode        ? " "
                :  container.parentNode.title  ? " <em>"+container.parentNode.title+"</em>"
                :                                         " ";

            let num_from_to
                = (num_last == num)            ? num : (num + (((num_last-num) > 1) ? " .. ":" and ") + num_last);

            let slot_num_selected
                = (num <= num_selected) && (num_selected <= num_last);

            let tooltip
                = t_data.SYMBOL_SCISSORS+" "+num_from_to+" "+t_i18n.i18n_get(t_i18n.COPY_PARAGRAPH_TO_CLIPBOARD);

            let div_class
                = "class_s_"+slot+"_"+num      + " note"+(container_count % 10)
                + (content_is_too_big          ? " content_is_too_big" : ""   )
                + (slot_num_selected           ? " container_selected" : ""   )
            ;

            let div_copy_content_innerHTML
                = content_is_too_big           ? (t_util.ellipsis(container.innerText, 512)  )
                : (container.tagName == "LI")  ? ("<p>"+container.innerHTML+"</p>" +LF)  /* TURN A DANGLING <LI> INTO A <P> */
                :                                (      container.outerHTML           )
            ;

            /*}}}*/
            /* css {{{*/
            /* wrap with containers highlight */
/*{{{
            let css = (container.tagName == "P"      ) ? "preformatted" : "";
            let css = (prop.get( t_data.CONTAINERS_HI )) ?             "" : "white-space:pre";
            let css = (prop.get( t_data.CONTAINERS_HI )) ? "preformatted" : "";
}}}*/
            let css = "white-space:pre-line";

            /*}}}*/
            /* html {{{*/
            let title_div = t_i18n.i18n_get( t_i18n.SCROLL_TO_THIS_PARAGRAPH );
            innerHTML
                += " <div class='"+  div_class              +"' style='"+css+"' title='"+title_div+"'>"+LF

                +                    DIV_MAGNIFY            +LF

                +  "  <div class='"+ CSS_BUTTON_COPY        +"' title='"+tooltip+"'>"+LF
                +  "  "            + container_count
                +  "  "            + t_data.SYMBOL_CLIPBOARD
                +  "   <em>"       + t_select.ccs[slot].pattern      +"</em>"
                +  "   <em>#"      + num_from_to            +"</em> <em>of "+ num_max +"</em>"
                +  "  </div>"                               +LF

                +  "  " + title_em                          +LF

                +  "  <div class='div_copy_content'>"       +LF
                +  "  "+div_copy_content_innerHTML          +LF
                +  "  </div>"                               +LF

                +  " </div>"                                +LF
            ;

            /*}}}*/
        }
        num = num_last; /* .. (done with all selections associated with this container) */
    }
    /*}}}*/
    /* DISPLAY innerHTML {{{*/
    if(innerHTML) {
        /* background dimmed {{{*/
        dimm_start_slot_containers(caller);

        t_check_onModalMS(caller);
        /*}}}*/
        /* [window-scroll-to-top] [dimm_mask] [hotspot] [seeker_PU] {{{*/
        let xy = t_gutter.get_GUTTER_XY();
        if( xy ) t_tools_set_top_xy(xy.x, xy.y);

        add_el_class(hotspot , t_data.CSS_HIDDEN);

        dom_scroll.t_window_scrollTo(0, 0);

        /*}}}*/
        /* [button_COPY_ALL_parent_div] {{{*/
        let pattern
            = t_pattern_del_words_option_sfx( t_select.ccs[slot].pattern );

        let patroot
            = t_pattern_del_words_extension( pattern );

        let tooltip
            = t_data.SYMBOL_SCISSORS+" "+t_i18n.i18n_get(t_i18n.COPY_ALL_PARAGRAPHS_TO_CLIPBOARD);

        let button_COPY_ALL_parent_div
            =  " <div     id='button_COPY_ALL_parent_div'>" +LF

            +                        DIV_MAGNIFY            +LF

            +  "  <div class='"    + CSS_BUTTON_COPY        +"' title='"+tooltip+"'>"+LF
            +  "  "                + t_data.SYMBOL_CLIPBOARD
            +  "   <em>"           + pattern +"</em>"
            +  "   <em>#1 to "     + num_max +"</em>"
            +  "  </div>"                                   +LF

            +  "  <div class='div_copy_content'>"
            +  "   "+ container_count+" Paragraphs containing <em class='cc"+slot+"'>"+              pattern +"</em><br>"+LF
            +  "   <a target='atilf' href='https://www.cnrtl.fr/definition/"+patroot+"'>&#x1F4D6; "+ patroot +" &#x1F4D6;</a>"
            +  "  </div>"+LF
            +  " </div>"+LF
        ;
        /*}}}*/
        /* [div_slot_containers create ] {{{*/
        if(!div_slot_containers)
            build_div_slot_containers();

        /*}}}*/
        /* [div_slot_containers content] {{{*/
        div_slot_containers.innerHTML = ""; /* removes all children */

        div_slot_containers.insertAdjacentHTML("beforeend", button_COPY_ALL_parent_div);
        div_slot_containers.insertAdjacentHTML("beforeend", innerHTML                 );

        /*}}}*/
        /* LAYOUT [dimm_mask] {{{*/

        let v_W = window.innerWidth - DIMM_MASK_MARGIN;
        let v_H = t_util.getPageHeight();

        dimm_mask.style.position            = "absolute";
        dimm_mask.style.left                =      "0px";
        dimm_mask.style.top                 =      "0px";
        dimm_mask.style.width               =   v_W+"px";
        dimm_mask.style.height              =   v_H+"px";

if( log_this) log("dimm_mask XY=["+dimm_mask.style.left+" "+dimm_mask.style.top+"] WH=["+dimm_mask.style.width+" "+dimm_mask.style.height+"]");
        /*}}}*/
        /* LAYOUT [div_slot_containers] [button_NEXT] [button_PREV] {{{*/
        let x = 0;
        let y = 0;
        let w = v_W - x;

        div_slot_containers.style.position  =         "";
        div_slot_containers.style.left      =     x+"px";
        div_slot_containers.style.top       =     y+"px";
        div_slot_containers.style.width     =     w+"px";
        div_slot_containers.style.minHeight =   w_H+"px";

if( log_this) log("div_slot_containers XY=["+div_slot_containers.style.left+" "+div_slot_containers.style.top+"] WminH=["+div_slot_containers.style.width+" "+div_slot_containers.style.minHeight+"]");

        dimm_mask.appendChild( div_slot_containers );
        dimm_mask.appendChild( button_NEXT         ); /*dimm_mask.appendChild( button_NEXT_LEFT );*/
        dimm_mask.appendChild( button_PREV         ); /*dimm_mask.appendChild( button_PREV_LEFT );*/
        dimm_mask.appendChild( button_MONO         );
        /*}}}*/
        t_seek.t_seeker_PU_hide("instant");
    }
    /*}}}*/
    dom_scroll.t_scrollIntoViewIfNeeded_dimm_mask_container_selected( div_slot_containers );
};
/*}}}*/
/*_ t_slot_containers_get_button {{{*/
let t_slot_containers_get_button = function(className, content)
{
    let el         = document.createElement("EM");

    el.textContent = content;

    add_el_class(el, className);

    return el;
};
/*}}}*/
/*_ t_slot_container_set_fullscreen {{{*/
/*{{{*/
let      fullscreen_slot_container;
let last_fullscreen_slot_container;
let div_containers_columns;
/*}}}*/
let t_slot_container_set_fullscreen = function(clicked_target)
{
/* {{{*/
let caller = "t_slot_container_set_fullscreen";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) t_fly.t_log_event_status(caller+"("+(t_util.get_id_or_tag(clicked_target) || clicked_target)+")", lf8);
/*}}}*/
    /* [slot_container] .. f(clicked_target) {{{*/
    /* EVENT  TARGET */ let slot_container = clicked_target;
    /* MAGNIFY START */ if     (has_el_class(clicked_target     , CSS_BUTTON_MAGNIFY       )) slot_container = clicked_target.parentElement;
    /* MAGNIFY STOP  */ else if(            (clicked_target    == fullscreen_slot_container)) slot_container = clicked_target;
    /* MAGNIFY PREV  */ else if(has_el_class(clicked_target     , CSS_BUTTON_PREV          )) slot_container = fullscreen_slot_container.previousElementSibling || fullscreen_slot_container;
    /* MAGNIFY NEXT  */ else if(has_el_class(clicked_target     , CSS_BUTTON_NEXT          )) slot_container = fullscreen_slot_container.nextElementSibling     || fullscreen_slot_container;
    /* MONSPACE      */ else if(has_el_class(clicked_target     , CSS_BUTTON_MONO          ))
    {
        let text_or_html =     !has_el_class(div_slot_containers, CSS_BUTTON_MONOSPACE);
if( log_this) log("...text_or_html=["+text_or_html+"]");

        t_util.set_el_class_on_off(div_slot_containers          , CSS_BUTTON_MONOSPACE, text_or_html);
        t_util.set_el_class_on_off(button_MONO                  , CSS_BUTTON_MONOSPACE, text_or_html);

        return;
    }
    /*}}}*/
    /* UNCHANGED [fullscreen_slot_container] .. (UNCHANGED) {{{*/
    if(clicked_target == fullscreen_slot_container)
    {
if(log_this) log("...fullscreen_slot_container UNCHANGED");

        return;
    }
    /*}}}*/
    /* SELECT or CLEAR [fullscreen_slot_container] {{{*/
    if(!slot_container) {
        last_fullscreen_slot_container = fullscreen_slot_container;
/*{{{
logBIG("...last_fullscreen_slot_container=["+get_n_lbl(last_fullscreen_slot_container)+"]");
}}}*/
    }
    fullscreen_slot_container = slot_container;

/*{{{
logXXX("...........slot_container=["+(           slot_container ?            slot_container.className : "")+"]");
}}}*/
    if(fullscreen_slot_container) {
        if(   (fullscreen_slot_container.on_grid_top < window.scrollY)
           || (fullscreen_slot_container.on_grid_top > window.scrollY + window.innerHeight)
          ) {
/*{{{
logBIG("["+(fullscreen_slot_container ? fullscreen_slot_container.className : "")+"] .. on_grid_top=["+fullscreen_slot_container.on_grid_top+"]");
}}}*/
            dom_scroll.t_window_scrollTo(0, fullscreen_slot_container.on_grid_top - window.innerHeight / 4);
        }
    }
    /*}}}*/
    /* [div_containers_columns] {{{*/
    if(!div_containers_columns)
    {
        let cs = window.getComputedStyle(div_slot_containers);

        div_containers_columns = cs.gridTemplateColumns.split(" ").length;
    }
    /*}}}*/
    /* [dimm_mask] [div_slot_containers] .. CSS_FULLSCREEN {{{*/
    /* TODO: post-refactoring ...setup css propagation for proper cascade styling */
    if(fullscreen_slot_container) {
        add_el_class(dimm_mask          , CSS_FULLSCREEN);
        add_el_class(div_slot_containers, CSS_FULLSCREEN);
    }
    else {
        del_el_class(dimm_mask          , CSS_FULLSCREEN);
        del_el_class(div_slot_containers, CSS_FULLSCREEN);
    }

    /*}}}*/
    /* [div_slot_containers.children] display {{{*/
    let slot_num_max = div_slot_containers.children.length;
    let fullscreen_slot_num = -1;
    for(let i=0; i < slot_num_max; ++i)
    {
        /* [fullscreen_slot_num] {{{*/
        let child =  div_slot_containers.children[i];
        if( child == fullscreen_slot_container)
            fullscreen_slot_num = i;

        /*}}}*/
        /* SHOW SELECTED FULLSCREEN STYLE {{{*/
        if( child == fullscreen_slot_container) {
            child.grid_x      = child.offsetLeft;
            child.grid_y      = child.offsetTop;

            add_el_class       (child, CSS_FULLSCREEN     );
            set_el_class_on_off(child, CSS_FULLSCREEN_PREV, (clicked_target == button_PREV));
            set_el_class_on_off(child, CSS_FULLSCREEN_NEXT, (clicked_target == button_NEXT));
        }
        /*}}}*/
        /* SHOW GRID .. [CSS_FULLSCREEN_LAST] {{{*/
        else {
            /* DEL [FULLSCREEN STYLE] {{{*/
            del_el_class       (child, CSS_FULLSCREEN     );
            del_el_class       (child, CSS_FULLSCREEN_PREV);
            del_el_class       (child, CSS_FULLSCREEN_NEXT);
            /*}}}*/
            /* DEL PREV LAST [LEFT RIGHT STYLES] {{{*/
            if(fullscreen_slot_container || (child != last_fullscreen_slot_container))
            {
                del_el_class(child, CSS_FULLSCREEN_LAST );
                del_el_class(child, CSS_FULLSCREEN_LEFT );
                del_el_class(child, CSS_FULLSCREEN_RIGHT);
            }
            /*}}}*/
            /* SET LAST GRID-STYLES [LEFT RIGHT LAST] {{{*/
            else {
                let first = ((i+1) % div_containers_columns) == 1;
                let last  = ((i+1) % div_containers_columns) == 0;
if(log_this) log("%c #"+(i+1)+" "+(first ? "first" : (last ? "last" : "center"))+" grid-column", lbH+(first ? lf1 : (last ? lfX[div_containers_columns] : lf8)));

                if     (first ) add_el_class(child, CSS_FULLSCREEN_LEFT );
                else if(last  ) add_el_class(child, CSS_FULLSCREEN_RIGHT);
                /*-----------*/ add_el_class(child, CSS_FULLSCREEN_LAST );
            }
            /*}}}*/
        }
        /*}}}*/
        /* DISPLAY .. (block || none) {{{*/
        child.style.display
            = (!fullscreen_slot_container || (child == fullscreen_slot_container))
            ? "block"
            : "none"
        ;
        /*}}}*/
    }
    /*}}}*/
    /* PREV NEXT BUTTONS .. (inline || none) {{{*/
    let display_prev = ((fullscreen_slot_num >= 0) && (fullscreen_slot_num > (0             ))) ? "inline" : "none";
    let display_next = ((fullscreen_slot_num >= 0) && (fullscreen_slot_num < (slot_num_max-1))) ? "inline" : "none";

    button_PREV.style.display = display_prev; /*button_PREV_LEFT.style.display = display_prev;*/
    button_NEXT.style.display = display_next; /*button_NEXT_LEFT.style.display = display_next;*/
    button_MONO.style.display = "inline";

    /*}}}*/
    /* END FULLSCREEN .. SCROLL [last_fullscreen_slot_container] INTO VIEW {{{*/
    if(!fullscreen_slot_container && last_fullscreen_slot_container)
    {
        delete last_fullscreen_slot_container.scrolledIntoViewHandled;
/*{{{
logBIG("...SCROLLING INTO VIEW: last_fullscreen_slot_container=["+get_n_lbl(last_fullscreen_slot_container)+"]");
}}}*/
        dom_scroll.t_scrollIntoViewIfNeeded(last_fullscreen_slot_container, 0);
    }

    /*}}}*/
/*{{{*/
if( log_this)
    log_key_val(caller
                , {   div_containers_columns
                    ,    fullscreen_slot_num
                    ,           slot_num_max
                    ,           display_prev
                    ,           display_next
                });
/*}}}*/
};
/*}}}*/
/*_ t_slot_containers_magnify {{{*/
let slot_container_magnified_0_to_9 = 2; /* CSS [magnified_0]..[magnified_9] */
let t_slot_containers_magnify = function()
{
/*{{{
logXXX("t_slot_containers_magnify");
logXXX("...slot_container_magnified_0_to_9=["+slot_container_magnified_0_to_9+"]");
t_log.console_clear( slot_container_magnified_0_to_9 )
}}}*/

    for(let i=0; i<=9; ++i)
    {
        let className = "magnified_"+i;
        if(i == slot_container_magnified_0_to_9) add_el_class(div_slot_containers, className);
        else                                     del_el_class(div_slot_containers, className);
    }

};
/*}}}*/
/*_ t_slot_containers_copy_to_clipboard {{{*/
let t_slot_containers_copy_to_clipboard_outerHTML = function(el) { t_slot_containers_copy_to_clipboard(el,  true); };
let t_slot_containers_copy_to_clipboard_innerHTML = function(el) { t_slot_containers_copy_to_clipboard(el, false); };
let t_slot_containers_copy_to_clipboard           = function(el, outer_or_inner)
{
/*{{{*/
    let caller = "t_slot_containers_copy_to_clipboard";
let log_this   = LOG_MAP.EV3_UP;

/*}}}*/
    /* COPY PARAGRAPHE .. OR COPY ALL {{{*/
    if(    (el != div_slot_containers)
        && (el.parentElement.id == "button_COPY_ALL_parent_div")
      )
        el = dimm_mask.firstElementChild;

    /*}}}*/
    /* CONTENT [text_or_html] {{{*/
    let text_or_html = has_el_class(div_slot_containers, CSS_BUTTON_MONOSPACE);

    let copy_content
        = (outer_or_inner)
        ?  (text_or_html ? el.innerText : el.outerHTML)
        :  (text_or_html ? el.innerText : el.innerHTML)
    ;
    /*}}}*/
if( log_this)
    log_key_val_group(    caller
                      , { outer_or_inner
                        , text_or_html
                        , el           : t_util.get_id_or_node_path_tail(el)
                        , copy_content : t_util.ellipsis(copy_content)
                        ,       length :                 copy_content.length
                        ,      callers : t_log.get_callers()
                      } , lf5, false);

    t_fly.t_fly_tooltip(t_data.SYMBOL_CLIPBOARD+" "+t_data.SYMBOL_LEFT_CHEVRON+" "+copy_content.length+" chars");

    t_util.t_copy_to_CLIPBOARD( copy_content );
};
/*}}}*/
/*_ t_copy_innerHTML_to_clipboard {{{*/
let t_copy_innerHTML_to_clipboard = function(innerHTML)
{
/*{{{*/
let   caller = "t_copy_innerHTML_to_clipboard";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log("%c"+caller+":"+LF+"%c"+(innerHTML ? innerHTML : "CLIPBOARD CLEARED"), lb3, lbF+lf3);
/*}}}*/
    /* USE A PARENTED CONTAINER TO FILL THE CLIPBOARD FROM */
    if(!div_slot_containers)
        build_div_slot_containers();

    div_slot_containers.innerHTML = innerHTML;

    t_slot_containers_copy_to_clipboard_innerHTML( div_slot_containers );

    div_slot_containers.innerHTML = "";
};
/*}}}*/
/*}}}*/
/* CONTAINER HIDING {{{*/
/*_ t_tools_hide_onDown_XY {{{*/
let t_tools_hide_onDown_XY = function(hide_parent)
{
/*{{{*/
let   caller = "t_tools_hide_onDown_XY";
let log_this = (LOG_MAP.T3_LAYOUT || LOG_MAP.EV4_LONG_PRESS);

if( log_this) log(caller+"(hide_parent "+hide_parent+")");
/*}}}*/
    /* SELECT CLOSEST CONTAINER TO HIDE {{{*/
    let range = t_select.get_range_from_XY(onDown_XY.x, onDown_XY.y);
if(log_this)t_log.console_dir("range",range);
    if(!range.startContainer )
        return "";

    let    container  = t_select.get_text_container( range.startContainer );
if(log_this)t_log.console_dir("container",container);
    if(   !container
       && (container == document.body)
       && (container == document.documentElement)
      )
        return "";
    /*}}}*/
    /* HIDDEN CONTAINER PARENT TO HIDE {{{*/
    if( hide_parent )
    {
        container = t_hide.get_node_hidden_parentElement( container );
if(log_this)t_log.console_dir("get_node_hidden_parentElement",container);

        if(!container) return "";
    }
    /*}}}*/
    /* HIDE OR UNHIDE CONTAINER {{{*/
    t_window_getSelection_removeAllRanges( caller );
    t_hide.dom_hide1_container_clicked(container, hide_parent);

    /*}}}*/
    return "DOC CLICK .. HIDE CONTAINER ["+get_n_lbl(container)+"]";
};
/*}}}*/
/*_ t_tools_hide_onDown_XY_parent {{{*/
let t_tools_hide_onDown_XY_parent = function()
{
    return t_tools_hide_onDown_XY( true );
};
/*}}}*/
/*}}}*/
/*}}}*/

/* SLOT */
/*{{{*/
/* THUMB {{{*/
/*➔ t_get_onWork_EL_slot {{{*/
let t_get_onWork_EL_slot = function()
{
    return get_EL_slot( onWork_EL );
};
/*}}}*/
/*➔ t_get_onWork_EL_num {{{*/
let t_get_onWork_EL_num = function()
{
    let num
        = (     t_seek.t_seeker_is_a_tool_el  ( onWork_EL )
            || (onWork_EL.id.startsWith("thumb_p_"))
        )
        ?      t_select.get_last_highlighted_num()
        :      t_get_EL_num(onWork_EL, 0)
    ;

/*
logXXX("t_get_EL_num("+get_n_lbl(onWork_EL)+"): ...return ["+num +"] .. last_selected_num=["+t_select.get_last_highlighted_num()+"]");
*/
    return num;
};
/*}}}*/
/*➔ t_get_onWork_EL_container {{{*/
let t_get_onWork_EL_container = function()
{
    let slot = t_get_onWork_EL_slot(); if(!slot) return null;
    let num  = t_get_onWork_EL_num (); if(!num ) return null;

    let container = t_select.ccs[slot].containers[num-1];
log("t_get_onWork_EL_container("+get_n_lbl(onWork_EL)+"): ...return ["+t_util.get_id_or_tag(container)+" "+t_util.get_n_txt(container) +"]");
    return container;
};
/*}}}*/
/*_ get_EL_slot {{{*/
let get_EL_slot = function(el)
{
/*{{{*/
let   caller = "get_EL_slot";
let log_this = LOG_MAP.T6_SLOT;

/*}}}*/
    let slot = -1;

    if(!el) return slot;

    if( t_seek.t_seeker_is_a_tool_el( el ) )
    {
        slot    = t_select.get_last_selected_slot();
        if( slot < 0)
            slot = t_seek.t_seeker_get_last_seeked_slot_num().slot;

if( log_this) log("%c t_select.get_last_selected_slot() .. return ["+slot+"]", lbH+lf6);
    }
    else {

        let offset                                  /* 01234567890 */
            = el.id.startsWith("select"    ) ?  6   /* select5_0   */
            : el.id.startsWith("thumb_p_"  ) ?  8   /* thumb_p_5   */
            : el.id.startsWith("thumb_s_"  ) ?  8   /* thumb_s_5   */
            :                                   0
        ;
        if( offset )
        {
            let ss  = el.id.substring( offset );
            let ccX =        parseInt( ss     );
            slot
                = isNaN(ccX    ) ?   0  /* not found     */
                :      (ccX > 0) ? ccX  /*  ccX=[1..9,0] */
                :                   10; /* slot=[1...10] */

if( log_this) log("offset=["+offset+"] .. el.id=["+el.id+"] .. ss=["+ss+"] .. ccX=["+ccX+"] .. slot=["+slot+"]");
        }
    }

if( log_this) log(caller+"("+get_n_lbl(el)+"): ...return ["+slot+"]");
    return slot;
};
/*}}}*/
/*➔ t_get_EL_num {{{*/
let t_get_EL_num = function(el, num_default=0)
{
    if(!el) return num_default;

    let offset                                /* 01234567890 */
        = el.id.startsWith("select"    ) ?  8 /* select5_4   */
        : el.id.startsWith("thumb_p_"  ) ? 10 /* thumb_p_5_4 */
        : el.id.startsWith("thumb_s_"  ) ? 10 /* thumb_s_5_4 */
        :                                   0
    ;

    let num = parseInt( el.id.substring(offset) );

    if( isNaN(num) ) num = num_default;

/*
log("t_get_EL_num("+get_n_lbl(el)+"): ...return ["+num +"]");
*/
    return num;
};
/*}}}*/
/*➔ t_get_used_slot_dir {{{*/
let t_get_used_slot_dir = function(from_slot, dir)
{
    let slot = from_slot; /* [1..10] */
    for(let step = 1; step <= t_select.SELECT_SLOT_MAX; ++step)
    {
        slot = (t_select.SELECT_SLOT_MAX + slot + dir) % t_select.SELECT_SLOT_MAX;

        if(slot == 0) slot = 10;

        let num_max = t_select.t_select_get_slot_nodes_length(slot);

        if(t_select.ccs[slot] && (num_max > 0)) break;
    }
/*
log("t_get_used_slot_dir("+from_slot+", "+dir+"): ...return "+slot+"");
*/
    return slot;
};
/*}}}*/
/*➔ t_clear_slot_sync {{{*/
/*{{{*/
const T_CLEAR_SLOT_SYNC_DELAY            = 500;
let   t_clear_slot_sync_timer            = null;
let   t_clear_slot_sync_cleared_patterns = "";

/*}}}*/
let t_clear_slot_sync = function(slot, pattern, delay=T_CLEAR_SLOT_SYNC_DELAY)
{
/*{{{*/
let   caller = "t_clear_slot_sync("+slot+", pattern=["+pattern+"])";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.T6_SLOT;

if( log_this) log("%c "+caller,lb6);
if( log_this) log_caller();
/*}}}*/
    /* clearTimeout {{{*/
    if(t_clear_slot_sync_timer) {
        clearTimeout( t_clear_slot_sync_timer );
        /*.........*/ t_clear_slot_sync_timer = null;

        if( delay ) {
            delay += 2 * T_CLEAR_SLOT_SYNC_DELAY;
        }
    }

    /*}}}*/

    if((onWork_EL) && (slot == t_get_onWork_EL_slot()))
    {
        t_set_onWork_EL(null, caller);
        t_seek.t_seeker_set_TOOL(onWork_EL);

if( log_this) t_fly.t_log_event_status(caller, lbb+lf6);
    }

/*{{{
.. will be handled later
if(log_this) log("SELECTION CLEARED ["+pattern+"]");
    csv_pattern_mov_to_off( pattern );
}}}*/

    t_clear_slot_sync_cleared_patterns += " "+pattern;

    mov_pat_span = t_select.t_get_pat_span_with_pattern(pat_bag, pattern);
    if(mov_pat_span)
        t_pat_bag_hover_div_accept(off_bag, true); /* at_bag_top */

    t_clear_slot_sync_timer = setTimeout(t_clear_slot_sync_handler, T_CLEAR_SLOT_SYNC_DELAY);
};
/*}}}*/
/*➔ t_clear_slot_sync_cancel {{{*/
let t_clear_slot_sync_cancel = function()
{
/*{{{
logXXX("t_clear_slot_sync_cancel");
}}}*/
    if(!t_clear_slot_sync_timer) return;

    clearTimeout( t_clear_slot_sync_timer );
    t_clear_slot_sync_timer = null;
};
/*}}}*/
/*➔ t_clear_slot_sync_handler {{{*/
let t_clear_slot_sync_handler = function()
{
/*{{{*/
let   caller = "t_clear_slot_sync_handler: patterns=["+t_clear_slot_sync_cleared_patterns+"]";
let log_this = LOG_MAP.T6_SLOT;

if( log_this) log("%c "+caller,lb6);
/*}}}*/
    t_clear_slot_sync_timer = null;
/*
     if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_fly_all_csv("SOME CLEARED", "want");
*/
/*{{{
    t_select.t_onPatternUpdate_no_delay("SOME CLEARED <em class='cc8'>"+ t_util.ellipsis_short(t_clear_slot_sync_cleared_patterns) +"</em>", caller);
}}}*/
    t_select.t_onPatternUpdate_quick   ("SOME CLEARED <em class='cc8'>"+ t_util.ellipsis_short(t_clear_slot_sync_cleared_patterns) +"</em>", caller);

    t_clear_slot_sync_cleared_patterns = "";
};
/*}}}*/

/*…   clear_clicked_slot {{{*/
let   clear_clicked_slot = function(slot)
{
/*{{{*/
let   caller = "clear_clicked_slot("+slot+")";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller);
/*}}}*/
    if(log_this)
        t_fly.t_log_transcript_event_bot( "<em class='big'>CLEAR CLICKED SLOT #"+slot+" .. onWork_EL.id=["+onWork_EL.id+"]</em>");

    t_slot.t_clear_slot(slot);
    t_select.t_onPatternUpdate("CLEARING SLOT <em>"+ slot +"</em>", caller);

    if( prop.get( t_data.WORDS_OPCYCLE ) )
    {
if( log_this) log("...words_opcycle POSTING words_option_cycle");

        setTimeout(words_option_cycle, PATTERN_CYCLE_DELAY);
    }
};
/*}}}*/
/*…   get_num_from_id_or_className_slot  {{{*/
let   get_num_from_id_or_className_slot  = function(node, slot)
{
let   caller = "get_num_from_id_or_className_slot(node.id=["+node.id+"], slot=["+slot+"])";
let log_this = LOG_MAP.T6_SLOT;

    let num = 0;

    /* thumb_p_4_95 */
    /* thumb_s_4_95 */
    /* class_s_4_95 */
    /* 012345678901 */
    /* select4_95   */
    let      pfx;
    if     ((pfx = "thumb_p_"+slot+"_") && node.id       .startsWith(pfx)) num = parseInt( node.id       .substring(pfx.length) );
    else if((pfx = "thumb_s_"+slot+"_") && node.id       .startsWith(pfx)) num = parseInt( node.id       .substring(pfx.length) );
    else if((pfx = "class_s_"+slot+"_") && node.className.startsWith(pfx)) num = parseInt( node.className.substring(pfx.length) );
    else if((pfx =   "select"+slot+"_") && node.id       .startsWith(pfx)) num = parseInt( node.id       .substring(pfx.length) );

if( log_this) log(caller+": ...return "+((num != 0) ? num : "NOT A SLOT NUM"));
    return num;
};
/*}}}*/
/*…   get_slot_from_id_or_className  {{{*/
let   get_slot_from_id_or_className  = function(node)
{
/*{{{*/
let   caller = "get_slot_from_id_or_className("+ get_n_lbl(node) +")";
let log_this = LOG_MAP.T6_SLOT;

if( log_this) log(caller);
if( log_this) log("...node.id.......=["+node.id        +"]");
if( log_this) log("...node.className=["+node.className +"]");
/*}}}*/
    let slot   = -1;

    /* ID thumb_p_4_95 */
    /* ID thumb_s_4_95 */
    /* ...012345678... */
    if(      node.id       .startsWith("thumb_p_") ) { slot = parseInt( node.id       .substring(8) ); }
    else if( node.id       .startsWith("thumb_s_") ) { slot = parseInt( node.id       .substring(8) ); } /* 1234567890   */
    else if( node.className.startsWith("class_s_") ) { slot = parseInt( node.className.substring(8) ); } /* class_s_10_5 */
    /* CLASS select4 */
    /* ......0123456 */
    else {
        if(!node.className.startsWith( "select" ) && node.parentElement) node = node.parentElement;
        if( node.className.startsWith( "select" ) ) {
            slot = parseInt(node.className.substring(6));
        }
    }

    let last_selected_slot = t_select.get_last_selected_slot();
    if(slot <= 0)
        slot = last_selected_slot;

    slot = ((slot >= 0              )
        &&  (slot <= t_select.SELECT_SLOT_MAX))
        ?    slot
        :    last_selected_slot
    ;

if( log_this) log("...return "+((slot != 0) ? slot : "NOT A SLOT"));
    return slot;
};
/*}}}*/
/*}}}*/
/*}}}*/

/* PAT CSV */
/*{{{*/
/*{{{*/

let bot_div;
let  fly_log;
let  pat_sort;
let  bag_log;

let off_bag;
let alt_bag;
let bak_bag;

let bag_rot; /* bags rotate button (pat..alt..bak) */
let bagopen;

let mov_div;

let hov1;
let hov2;
let hov3;
let hov4;

/*{{{
let bak_bag_place_holder;
let off_bag_place_holder;
let pat_bag_place_holder;
let mov_dst;
}}}*/

/*}}}*/
/* CSV SET GET {{{*/
/* GET {{{*/
let sel_csv = "";
let pat_csv = "";
let off_csv = "";
let alt_csv = "";
let bak_csv = "";
let bin_csv = "";

/*}}}*/
/*  SET {{{*/
/*{{{
let set_all_csv = function([_sel_csv, _pat_csv, _off_csv, _alt_csv, _bak_csv, _bin_csv])
{
    sel_csv = _sel_csv;
    pat_csv = _pat_csv;
    off_csv = _off_csv;
    alt_csv = _alt_csv;
    bak_csv = _bak_csv;
    bin_csv = _bin_csv;
};
}}}*/
let set_sel_csv = function(_sel_csv) { sel_csv = _sel_csv; };
let set_pat_csv = function(_pat_csv) { pat_csv = _pat_csv; };
let set_off_csv = function(_off_csv) { off_csv = _off_csv; };

/*}}}*/
/*  ADD {{{*/
let add_sel_csv = function(pattern ) { sel_csv = t_util.csv_add(sel_csv, pattern); };

/*}}}*/
/*}}}*/
/* PAT BAGS LAYOUT */ /*{{{*/
/*. t_build_bag_tools {{{*/
let t_build_bag_tools = function()
{
/*{{{*/
    if(!dom_tools_html) return;

/*}}}*/
    /* fly_div {{{*/
    t_fly.t_fly_div_get();

    /*}}}*/
    /* off_bag {{{*/
    off_bag = document.createElement("DIV"  ); off_bag.id = "off_bag"; add_el_class( off_bag, CSS_EMPTY);
    t_util.set_el_caption(off_bag);

/* off_bag_place_holder {{{
    off_bag.insertAdjacentHTML("beforeend", place_holder_line);
    off_bag_place_holder = off_bag.firstElementChild;
}}}*/
    /*}}}*/
    /* alt_bag {{{*/
    alt_bag = document.createElement("DIV"  ); alt_bag.id = "alt_bag";
    t_util.set_el_caption(alt_bag);

    /*}}}*/
    /* bak_bag {{{*/
    bak_bag = document.createElement("DIV"  ); bak_bag.id = "bak_bag";
    t_util.set_el_caption(bak_bag);

/* bak_bag_place_holder {{{
    let place_holder_line
        = "<span class='pat_span place_holder'><em class='num_em'>"+t_data.SYMBOL_CHECK_MARK+"</em>&nbsp;"
        + "<em class='cc1'>&nbsp;</em>"
        + "</span>"
    ;
    bak_bag.insertAdjacentHTML("beforeend", place_holder_line);
    bak_bag_place_holder = bak_bag.firstElementChild;
}}}*/
    /*}}}*/
    /* bot_div bag_log bag_rot pat_sort fly_log {{{*/
    bot_div  = document.createElement("DIV"); bot_div .id = "bot_div" ;
    bag_log  = document.createElement("DIV"); bag_log .id = "bag_log" ; add_el_class(bag_log, CSS_TXT_LOG);
    fly_log  = document.createElement("DIV"); fly_log .id = "fly_log" ;
    pat_sort = document.createElement("DIV"); pat_sort.id = "pat_sort";

    t_util.set_el_caption(fly_log);

    t_util.set_el_caption( pat_sort );

    bot_div.appendChild( bag_log  );
    bot_div.appendChild( fly_log  );
    bot_div.appendChild( pat_sort );
    /*}}}*/
    /* bagopen {{{*/
    bagopen  = document.createElement("DIV"); bagopen .id = "bagopen" ;
    bagopen.innerHTML = ""
            + "<span class='fg4'>"+ t_data.SYMBOL_RIGHT_ANGLE_BRACKET  +"</span>"
            + "<span class='fg6'>"+ t_data.SYMBOL_RIGHT_ANGLE_BRACKET  +"</span>"
            + "<span class='fg2'>"+ t_data.SYMBOL_RIGHT_ANGLE_BRACKET  +"</span>"
    ;

    t_util.set_el_caption(bagopen);
    /*}}}*/
    /* bag_rot {{{*/
    bag_rot  = document.createElement("DIV"); bag_rot.id = "bag_rot" ;

    set_bag_rot_title("..."+t_i18n.i18n_get( t_i18n.BAGS_CONTENT ));
    /*}}}*/
    /* bag_swap {{{*/
/*{{{
:new %:h/../stylesheet/dom_tools.css

 -----------------DIV-----------------
 -----------------top-----------------
 -----[PAT]---------------[BAK]-------
 -----------------tip-----------------
 -----------s_e--------s_w------------
 -------------------------------------
 ----------------[ALT]----------------
 -------------------------------------

}}}*/
/*{{{
    swap_div    = document.createElement("DIV"); swap_div.id = "swap_div";
    swap_tip    = document.createElement("DIV"); swap_tip.id = "swap_tip";
    swap_pat    = document.createElement("DIV"); swap_pat.id = "swap_pat";
    swap_bak    = document.createElement("DIV"); swap_bak.id = "swap_bak";
    swap_alt    = document.createElement("DIV"); swap_alt.id = "swap_alt";
    swap_top    = document.createElement("DIV"); swap_top.id = "swap_top";
    swap_s_e    = document.createElement("DIV"); swap_s_e.id = "swap_s_e";
    swap_s_w    = document.createElement("DIV"); swap_s_w.id = "swap_s_w";

    swap_div.appendChild( swap_tip );
    swap_div.appendChild( swap_pat );
    swap_div.appendChild( swap_bak );
    swap_div.appendChild( swap_alt );
    swap_div.appendChild( swap_top );
    swap_div.appendChild( swap_s_e );
    swap_div.appendChild( swap_s_w );

    shadow_root.insertBefore(swap_div, shadow_root.firstElementChild);
}}}*/
    /*}}}*/
    /* mov_div {{{*/
    mov_div = document.createElement("DIV"  ); mov_div.id = "mov_div" ;
    mov_div.style.display = "none";

/*{{{
    mov_dst = document.createElement("DIV"  ); mov_dst.id = "mov_dst" ;
    mov_dst.style.display = "none";
}}}*/
    /*}}}*/
    /* pat_bag composition {{{*/
    pat_bag.appendChild(off_bag);
    pat_bag.appendChild(alt_bag);
    pat_bag.appendChild(bak_bag);
    pat_bag.appendChild(bot_div);

    pat_bag.appendChild(bag_rot);
    pat_bag.appendChild(bagopen);

    pat_bag.appendChild(mov_div);

/* pat_bag_place_holder {{{
    pat_bag.insertAdjacentHTML("beforeend", place_holder_line);
    pat_bag_place_holder = pat_bag.firstElementChild;
}}}*/
    /*}}}*/
    /* hov1..hov4 {{{*/
    hov1    = document.createElement("DIV" ); hov1.id    = "hov1"   ; hov1.innerText = t_data.SYMBOL_LOWER_RIGHT;
    hov2    = document.createElement("DIV" ); hov2.id    = "hov2"   ; hov2.innerText = t_data.SYMBOL_UPPER_LEFT;
    hov3    = document.createElement("DIV" ); hov3.id    = "hov3"   ; hov3.innerText = t_data.SYMBOL_LOWER_RIGHT;
    hov4    = document.createElement("DIV" ); hov4.id    = "hov4"   ; hov4.innerText = t_data.SYMBOL_UPPER_LEFT;

    hov1   .style.display = "none";
    hov2   .style.display = "none";
    hov3   .style.display = "none";
    hov4   .style.display = "none";

    pat_bag.appendChild(hov1   );
    pat_bag.appendChild(hov2   );
    pat_bag.appendChild(hov3   );
    pat_bag.appendChild(hov4   );
    /*}}}*/
};
/*}}}*/
/*…   set_bag_rot_title {{{*/
let   set_bag_rot_title = function(title)
{
    let count
        = t_util.csv_count(pat_csv)
        + t_util.csv_count(off_csv)
        + t_util.csv_count(alt_csv)
        + t_util.csv_count(bak_csv)
        + t_util.csv_count(bin_csv)
    ;

    let content
        = (pat_csv ? (LF + t_util.csv_count(pat_csv)+" PAT   "+pat_csv) : "")
        + (off_csv ? (LF + t_util.csv_count(off_csv)+" OFF   "+off_csv) : "")
        + (alt_csv ? (LF + t_util.csv_count(alt_csv)+" ALT   "+alt_csv) : "")
        + (bak_csv ? (LF + t_util.csv_count(bak_csv)+" BAK   "+bak_csv) : "")
        + (bin_csv ? (LF + t_util.csv_count(bin_csv)+" BIN   "+bin_csv) : "")
    ;

    let bag_rot_title
        = title
        + (count ? ("x"+count) : "")
        + (content || t_i18n.IS_EMPTY)
    ;

/*{{{
t_log.console_clear("set_bag_rot_title");
log("%c"+bag_rot_title, lb0);
log_caller();
}}}*/

    /* PANEL BUTTON */
    t_util.set_el_caption(bag_rot, bag_rot_title);

    /* WORDS PANEL BUTTON */
    let words_bag_rot       = t_get_tool(t_data.WORDS_BAG_ROT);
    if( words_bag_rot       ) t_util.set_el_caption(words_bag_rot, bag_rot_title);

    /* DOC BUTTON CLONE */
    let words_bag_rot_clone = get_doc_tool_diplayed_id_prefix(t_data.WORDS_BAG_ROT);
    if( words_bag_rot_clone ) t_util.set_el_caption(words_bag_rot_clone, bag_rot_title);

    /* UPDATE TOOLTIP .. (if currently displayed) */
    if( t_fly.t_fly_tooltip_has_category( bag_rot.id   ) ) {
        t_fly.t_fly_tooltip_update(       bag_rot.title
                                  ,       bag_rot.id   );
    }
/*{{{
else logBIG("CATEGORY ["+bag_rot.id+"] NOT DISPLAYED");
}}}*/
};
/*}}}*/
/*_ t_sync_pat_buttons {{{*/
let t_sync_pat_buttons = function(_caller)
{
    /* [pat_csv] is sorted in ascending alphabetic order {{{*/
    if( pat_sort ) {
        prop.set("pat_sort",t_handle_1_pat_bag_sort_cycle_direction);
        let pat_user_set = (t_handle_1_pat_bag_sort_cycle_direction == 0);
        let sel_can_sort = (t_util.csv_count( sel_csv ) > 1);
        let sel_sorted   = sel_can_sort ? (               t_are_sel_sorted  ()) : (t_handle_1_pat_bag_sort_cycle_direction > 0);
        let sel_reversed = sel_can_sort ? (!sel_sorted && t_are_sel_reversed()) : (t_handle_1_pat_bag_sort_cycle_direction < 0);
/*{{{
        set_el_class_removing(pat_sort, sel_sorted ? CSS_CC9 : CSS_CC8, t_data.CCX_CLASSLIST);
}}}*/

        pat_sort.innerHTML
            = pat_user_set ? (" "+LF+ t_data.SYMBOL_CHECK_MARK    +LF+" ")
            : sel_sorted   ? ("A"+LF+ t_data.SYMBOL_DOWN          +LF+"Z")
            : sel_reversed ? ("Z"+LF+ t_data.SYMBOL_UP            +LF+"A")
            :                (        t_data.SYMBOL_UP_AND_DOWN_ARROW    ) /* default should not happen */
        ;

        t_util.set_el_caption(  pat_sort
                       , ".. "+            t_i18n.i18n_get( t_i18n.CURRENTLY       )+" "
                       + (  pat_user_set ? t_i18n.i18n_get( t_i18n.AS_SET_BY_USER  )
                          : sel_sorted   ? t_i18n.i18n_get( t_i18n.SORTED_A_TO_Z   )
                          : sel_reversed ? t_i18n.i18n_get( t_i18n.REVERSED_Z_TO_A )
                          :                t_i18n.i18n_get( t_i18n.UNORDERED       ))
                    );

        set_el_class_on_off(pat_sort, t_data.CSS_CHECKED , (sel_sorted || sel_reversed));
        set_el_class_on_off(pat_sort, CSS_USER_SET,  pat_user_set               );
        set_el_class_on_off(pat_sort, CSS_SORT_OFF, !sel_can_sort               );

    }
    /*}}}*/
    /* [alt_csv] contains an alternate set of patterns {{{*/
    if( bag_rot )
    {
        if(!last_bag_move) last_bag_move = "BAGS CONTENT";
/*{{{
        bag_rot.innerHTML
            =  last_bag_move + "<br>"
}}}*/
/*{{{
        bag_rot.innerHTML
            = "<span class='fg0'>"+ t_data.SYMBOL_R_CLOS_ARROW +"</span>&nbsp;"
            + "<span class='fg4'>"+ t_util.csv_count(pat_csv)  +"</span>&nbsp;"
            + "<span class='fg6'>"+ t_util.csv_count(alt_csv)  +"</span>&nbsp;"
            + "<span class='fg2'>"+ t_util.csv_count(bak_csv)  +"</span>&nbsp;"
            + "<span class='fg2'>"+ t_util.csv_count(bin_csv)  +"</span>"
}}}*/
        let csv_count_pat_off =     t_util.csv_count(pat_csv) || t_util.csv_count(off_csv);
        let c                 =     t_util.csv_count(pat_csv)  ? 4 : 5;
        bag_rot.innerHTML
            = "<span class='fg"+c+"'>"+ csv_count_pat_off             +"</span>"
            + "<sup>"                 + t_data.SYMBOL_RIGHT_ARROW     +"</sup>"
            + "<span class='fg6'>"    + t_util.csv_count(alt_csv)     +"</span>"
            + "<sup>"                 + t_data.SYMBOL_RIGHT_ARROW     +"</sup>"
            + "<span class='fg2'>"    + t_util.csv_count(bak_csv)     +"</span>"
/*{{{
            + "<span class='fg0'>"    + t_util.csv_count(bin_csv)     +"</span>"
            + "<sub>"                 + t_data.SYMBOL_LEFT_ARROW_HOOK +"</sub>"
}}}*/
            + "<sub>"                 + t_data.SYMBOL_DOWN_LEFT_ARROW +"</sub>"
        ;
        let button = t_get_tool(t_data.WORDS_BAG_ROT);
        if( button ) {
            button.innerHTML = "<div>"+bag_rot.innerHTML+"</div>";

            t_sync_button_clone_innerHTML( button );
        }

/*{{{
        let pat_bag_is_opened = has_el_class(pat_bag, CSS_OPEN_BAG);
        t_show_bag_rot_clone(pat_bag_is_opened);
}}}*/
    }
    /*}}}*/
};
/*}}}*/
/*_ t_sync_button_clone_innerHTML {{{*/
let t_sync_button_clone_innerHTML = function(button)
{
/*{{{
log("t_sync_button_clone_innerHTML("+get_id_or_tag_and_className(button)+")");
}}}*/

    let button_clone = get_doc_tool_diplayed_id_prefix(button.id);
    if( button_clone ) {
/*{{{
log("%c button_clone=["+get_id_or_tag_and_className(button_clone)+"]", lbH+lf8);
}}}*/
        button_clone.innerHTML = "<div>"+button.innerHTML+"</div>";
    }
};
/*}}}*/
/* OPEN-CLOSE */
/*_ t_pat_bag_open_or_close {{{*/
let t_pat_bag_open_or_close = function(_caller)
{
    /*{{{*/
    let caller = "t_pat_bag_open_or_close";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) logBIG(caller+" .. CALLED BY "+ _caller, lf4);
if( log_this && onWork_MOVABLE_CHILD) log("...onWork_MOVABLE_CHILD=["+get_n_lbl(onWork_MOVABLE_CHILD)+"]");
if( log_this) t_fly.t_log_event_status(caller, lbb+lf9);
    /*}}}*/
    /* msg {{{*/
    let no_change_msg       = "NO CHANGE: Panel "+ (has_el_class(pat_bag, CSS_OPEN_BAG) ? "OPENED" : "CLOSED")+"";
    let bagclose_msg                   = "Panel CLOSED: ON REQUEST"         ;
    let sel_none_off_some_msg          = "Panel OPENED: some to choose from";
    let sel_none_off_none_bak_none_msg = "Panel CLOSED: none to choose from";
    let sel_some_msg                   = "Panel CLOSED: some selection"     ;
  /*let sel_some_bak_none_msg          = "Panel CLOSED: SEL some BAK none"  ;*/

    /*}}}*/
    /* count .. (sel off bak) {{{*/
    let sel_count = t_slot.get_slotted_pattern_count();
    let off_count = t_util.csv_count(off_csv);
    let alt_count = t_util.csv_count(alt_csv);
    let bak_count = t_util.csv_count(bak_csv);
    /* TODO - deal somehow with      bin_csv */

    let pat_bag_is_opened              = has_el_class(pat_bag, CSS_OPEN_BAG);
    let pat_bag_onload                 = (onDown_EL == null);
    let bagopen_click                  = (onDown_EL == bagopen);


    let sel_none_off_some              = (!sel_count &&  off_count                            );
    let sel_off_alt_bak_none           = (!sel_count && !off_count && !alt_count && !bak_count);
    let sel_some                       = ( sel_count                                          );
    let sel_some_bak_none              = ( sel_count                             && !bak_count);

    let sel = " <em class='have cc"+ (sel_count ? 1 : 8)+"'>SEL "+ sel_count +"</em>";
    let off = " <em class='have cc"+ (off_count ? 5 : 8)+"'>OFF "+ off_count +"</em>";
    let bak = " <em class='have cc"+ (bak_count ? 2 : 8)+"'>BAK "+ bak_count +"</em>";

    /*}}}*/
    /* OPEN OR CLOSE {{{*/
    /*..........................................................*/ let action;
    if(      pat_bag_is_opened && (pat_bag_onload || bagopen_click)) { action = bagclose_msg                  ; t_pat_bag_close(caller, action + sel + off + bak); }
    else if(!pat_bag_is_opened && sel_none_off_some                ) { action = sel_none_off_some_msg         ; t_pat_bag_open (caller, action + sel + off + bak); }
    else if( pat_bag_is_opened && bagopen_click                    ) { action = sel_some_msg                  ; t_pat_bag_close(caller, action + sel + off + bak); }
    else if( pat_bag_is_opened && sel_off_alt_bak_none             ) { action = sel_none_off_none_bak_none_msg; t_pat_bag_close(caller, action + sel + off + bak); }
    else                                                             { action = no_change_msg                 ;
        if(!has_el_class(pat_bag, CSS_OPEN_BAG))
            t_pat_bag_minHeight_track(_caller+" .. "+action);
    }

    if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_log_stage_msg(t_fly.STAGE_3_RESULT, action+ sel + off + bak);

    /*}}}*/

/*{{{*/
if(log_this) {
    log_key_val_group( "bags action"
                       , {   pat_bag_is_opened
                           , sel_none_off_some
                           , sel_off_alt_bak_none
                           , sel_some
                           , sel_some_bak_none
                           , pat_bag_onload
                           , bagopen_click
                           , action
                       }
                       , lf8, false
                     );
}
/*}}}*/
/* {{{

    let sel_none_off_more_msg          = "Panel OPENED: more to choose";
    let sel_none_off_more              = (!sel_count &&  off_count>1 );

    else if(sel_none_off_more                         ) t_pat_bag_open (caller, sel_none_off_more_msg  + sel + off + bak);
    else if(              !off_count                  ) t_pat_bag_close(caller,     "No   OFF selections to choose from");
    else if(              !off_count     && !bak_count) t_pat_bag_close(caller,     "No other selection  to choose from");
    else if(!sel_count                                ) t_pat_bag_close(caller,           "No selection  to choose from");
    else                                                t_pat_bag_close(caller, "Some slotted selection"                );

}}}*/
};
/*}}}*/
/*. t_pat_bag_open {{{*/
let t_pat_bag_open  = function(_caller, msg="Pattern bag opened")
{
/* LOG {{{*/
let caller   = "t_pat_bag_open";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log("%c"+caller+"%c .. CALLED BY "+ _caller+" %c .. msg=["+msg+"]", lbH+lf1, lb0, lbF);
if(msg) if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_log_stage_msg(t_fly.STAGE_2_ACTION, msg);
/*}}}*/
    /* OPEN {{{*/
    if(!has_el_class(pat_bag, CSS_OPEN_BAG))
    {
        if(log_this)
            t_fly.t_log_transcript_event_bot("<span style='color:red;'>"+t_data.SYMBOL_BLACK_CIRCLE+"</span>"
                +                      " <span>open_bag</span>"
                +                      " <em>"+msg+"</em>"
            );

        t_pat_bag_minHeight_clear("OPENING");
        add_el_class(pat_bag, CSS_OPEN_BAG);

        t_pat_bag_open_or_close_layout();

/*{{{
        t_sync_pat_csv_to_bag();
}}}*/

        t_cache_sync(msg);
    }
    /*}}}*/
};
/*}}}*/
/*_ t_pat_bag_close {{{*/
/*{{{*/
let T_PAT_BAG_CLOSE_DELAY            = 1000;
let T_PAT_BAG_CLOSE_RESCHEDULE_DELAY = 1000;
let t_pat_bag_close_timer;
let t_pat_bag_close_msg;
/*}}}*/
let t_pat_bag_close = function(_caller, msg="PATTERN BAG CLOSED")
{
    /* LOG {{{*/
let caller   = "t_pat_bag_close";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log(caller+"%c .. CALLED BY "+ _caller+" %c .. msg=["+t_util.strip_HTML(msg)+"]", lb0, lbF);
if(msg) if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_log_stage_msg(t_fly.STAGE_2_ACTION, msg);

    /*}}}*/
    /* PAT_BAG DELAYED CLOSE {{{*/
    t_pat_bag_close_msg = msg;
    if(t_pat_bag_close_timer) clearTimeout( t_pat_bag_close_timer  );
    t_pat_bag_close_timer     = setTimeout( t_pat_bag_close_handler, T_PAT_BAG_CLOSE_DELAY);
    /*}}}*/
};
/*}}}*/
/*. t_pat_bag_close_handler {{{*/
let t_pat_bag_close_handler = function()
{
/*{{{*/
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

/*}}}*/
    t_pat_bag_close_timer = null;

    if( has_el_class(pat_bag, CSS_OPEN_BAG) )
    {
        /* close postponed {{{*/
        let close_canceled
            = onWork_MOVABLE_CHILD
            ?  true
            :  false;

        if(close_canceled) {
            t_pat_bag_close_timer = setTimeout(t_pat_bag_close_handler, T_PAT_BAG_CLOSE_RESCHEDULE_DELAY);
        }
        /*}}}*/
        /* close now {{{*/
        else {
            t_pat_bag_minHeight_track("CLOSING");
            del_el_class(pat_bag, CSS_OPEN_BAG);

/*{{{
            if( !pat_bag.classList.contains(t_data.CSS_PINNED) ) t_pat_bag_closing();
}}}*/
            t_pat_bag_closing();

            t_pat_bag_open_or_close_layout();

/*{{{
            t_sync_pat_csv_to_bag();
}}}*/

            t_cache_sync("t_pat_bag_close_handler");
        }
        /*}}}*/
/*{{{*/
if(log_this) {
    let s_style = close_canceled ? "color:yellow" : "color:green";
    let t_style = close_canceled ? "color:yellow" : "text-decoration:line-through";
    let t_text  = close_canceled ? "kept open while moving child" : t_pat_bag_close_msg;
    t_fly.t_log_transcript_event_bot( "<span style='"+ s_style +";'>"+t_data.SYMBOL_BLACK_CIRCLE+"</span>"
        +                      " <span style='"+ t_style +";'>open_bag</span>"
        +                      " <em>"+          t_text  +"</em>"
    );
}
/*}}}*/
    }
};
/*}}}*/
/* LAYOUT */
/*_ t_pat_bag_open_or_close_layout {{{*/
/*{{{*/
const BAG_LAYOUT_DELAY = 250;

let t_pat_bag_open_or_close_layout_timeout;
let t_pat_bag_open_or_close_layout_time_ms;
/*}}}*/
/*_ t_pat_bag_open_or_close_layout {{{*/
let t_pat_bag_open_or_close_layout = function(delay=BAG_LAYOUT_DELAY)
{
/*{{{*/
let   caller = "t_pat_bag_open_or_close_layout";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log("%c"+caller+"("+delay+")", lbH+lf1);
/*}}}*/
    /* no pending call shortening .. (i.e. may only be postpone) {{{*/
    let time_now = new Date().getTime();
    let time_ms  = time_now + delay;
    if( time_ms <= t_pat_bag_open_or_close_layout_time_ms) return;

    t_pat_bag_open_or_close_layout_time_ms = time_ms;
    /*}}}*/
    /* first or postponed timeout {{{*/
    if(t_pat_bag_open_or_close_layout_timeout)
    {
        clearTimeout(t_pat_bag_open_or_close_layout_timeout);
if( log_this) log("%c...calling viewport handler in "+(t_pat_bag_open_or_close_layout_time_ms-time_now)+" ms (POSTPONING)", lf2);
    }
    else {
if( log_this) log("%c...calling viewport handler in "+(t_pat_bag_open_or_close_layout_time_ms-time_now)+" ms (FIRST CALL)", lf8);
    }
    t_pat_bag_open_or_close_layout_timeout =     setTimeout(t_pat_bag_open_or_close_viewport_handler, delay);
    /*}}}*/
};
/*}}}*/
/*_ t_pat_bag_open_or_close_viewport_handler {{{*/
let t_pat_bag_open_or_close_viewport_handler = function()
{
/*{{{*/
let   caller = "t_pat_bag_open_or_close_viewport_handler";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log("%c"+caller, lbH+lf1);

/*}}}*/
    t_pat_bag_open_or_close_layout_timeout =  null;
if( log_this) t_pat_bag_open_or_close_viewport_log();
    /* BAG CLOSED .. move it back to where it was capped from {{{*/
    let pat_bag_is_opened = has_el_class(pat_bag, CSS_OPEN_BAG);
    if(!pat_bag_is_opened)
    {
        if(pat_bag.capped_from_x && pat_bag.capped_from_y)
        {
            t_set_panel_at_XY(pat_bag, pat_bag.capped_from_x  , pat_bag.capped_from_y);

            t_view.t_view7_clr_panel_capped_from_xy(pat_bag);
        }
    }
    /*}}}*/
    /* BAG OPENED .. [pat_bag] position .. f(capped by viewport) {{{*/
    else {
        /* capped by viewport .. move bag into view */
        let xy = t_view.t_view5_move_panel_XY(pat_bag, pat_bag.offsetLeft, pat_bag.offsetTop);
        if( xy.capped ) {
            let pat_bag_is_pinned = pat_bag.classList.contains(t_data.CSS_PINNED);
            if( pat_bag_is_pinned ) {
                t_pin_panel_at_XY(pat_bag, xy.x, xy.y);
            }
            else {
                t_set_panel_at_XY(pat_bag, xy.x, xy.y);
            }
        }

    }
    /*}}}*/
    /* [pat_bag] magnification .. f(open or closed panel size) {{{*/
    let was_too_large = has_el_class(pat_bag,CSS_TOO_LARGE);

    t_layout_panel_magnified(pat_bag, t_is_panel_magnified(pat_bag));

    if(!was_too_large && has_el_class(pat_bag,CSS_TOO_LARGE))
    {
if(log_this) logBIG("TOO LARGE - RE-ADJUSTING");
        t_pat_bag_open_or_close_layout();
    }
    /*}}}*/
    /* [bag_rot] layout .. f(open or closed panel size) {{{*/
    if(bag_rot.innerHTML)
    {
/*{{{
        t_show_bag_rot_clone(pat_bag_is_opened);
}}}*/

/*{{{
        let pat_bag_cs = window.getComputedStyle(pat_bag);

        bag_rot.style.left
            = pat_bag_is_opened
            ? pat_bag_cs.paddingLeft
            : ""
        ;
}}}*/
    }
    /*}}}*/
};
/*}}}*/
/*_ t_pat_bag_open_or_close_viewport_log {{{*/
let t_pat_bag_open_or_close_viewport_log = function()
{
/*{{{*/
    let caller = "...VIEWPORT HANDLER";

/*}}}*/
    /* [PINNED UNPINNED] .. [OPENED CLOSED] {{{*/
    let pat_bag_is_opened = has_el_class(pat_bag, CSS_OPEN_BAG);
    let pat_bag_is_pinned = pat_bag.classList.contains(t_data.CSS_PINNED);

    let pat_bag_state
        =     (pat_bag_is_pinned ? "PINNED" : "UNPINNED")
        + " "+(pat_bag_is_opened ? "OPENED" : "CLOSED"  );
    let lfs
        = pat_bag_is_opened
        ? lf5
        : lf6
    ;

    /*}}}*/
    /* [CLOSED] .. (move back where capped from) {{{*/
    if(!pat_bag_is_opened) {
        if(pat_bag.capped_from_x || pat_bag.capped_from_y)
log("%c"+caller+": %c ["+pat_bag_state+"] %c CAPPED MOVED BACK FROM XY ["+pat_bag.capped_from_x+" "+pat_bag.capped_from_y+"]", lf1, lfs,lf5);
        else
log("%c"+caller+": %c ["+pat_bag_state+"] %c CAPPED FROM XY NOT SET", lf1, lfs, lf8);
    }
    /*}}}*/
    /* [OPENED] .. (inside or capped) {{{*/
    let xy = t_view.t_view5_move_panel_XY(pat_bag, pat_bag.offsetLeft, pat_bag.offsetTop);
    if( xy ) {
        let       dx = Math.round(xy.x - pat_bag.offsetLeft);
        let       dy = Math.round(xy.y - pat_bag.offsetTop );

        let moving_dx = (dx == 0) ? "" : (" "+((dx > 0) ? "RIGHT" : "LEFT")+" "+dx+"px");
        let moving_dy = (dy == 0) ? "" : (" "+((dy > 0) ? "DOWN"  : "UP"  )+" "+dy+"px");

        if( xy.capped ) {
            if(pat_bag_is_pinned)
log("%c"+caller+": %c ["+pat_bag_state+"] %c PINNED TO ["+ moving_dx         +" "+moving_dy        +"]", lf1, lfs, lf4);
            else
log("%c"+caller+": %c ["+pat_bag_state+"] %c  MOVED TO ["+ moving_dx         +" "+moving_dy        +"]", lf1, lfs, lf3);
        }
        else {
log("%c"+caller+": %c ["+pat_bag_state+"] %c INSIDE AT ["+ pat_bag.offsetLeft+" "+pat_bag.offsetTop+"]", lf1, lfs, lf5);
        }
    }
    /*}}}*/

};
/*}}}*/

/*_ t_pat_bag_closing {{{*/
let t_pat_bag_closing = function()
{
/*{{{
logXXX("t_pat_bag_closing");
}}}*/
    add_el_class(pat_bag, CSS_CLOSING);
    setTimeout(function() { del_el_class(pat_bag, CSS_CLOSING); }, 5000);
};
/*}}}*/
/*}}}*/
/*_ t_pat_bag_minHeight_track {{{*/
let t_pat_bag_minHeight_track = function(_caller)
{
/*{{{*/
let   caller = "t_pat_bag_minHeight_track";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

/*}}}*/
    /* ADJUST CLOSED [pat_bag] min-height */
/* {{{
 * This keeps the container big enough to allow the tallest bag to slide in.
 * instead of letting it adjust to what gets in
 * .. just a bit too late
 * .. after showing messy for a short time
}}}*/
    let    cs  = window.getComputedStyle(pat_bag);
    let cur_h  = parseInt(           cs.height   );
    let min_h  = parseInt(pat_bag.style.minHeight) || 0;
    if( min_h == cur_h) return;

    pat_bag.style.minHeight = Math.max(min_h , cur_h)+"px";
/*{{{*/
if(log_this) {
    let lfx = (min_h == 0)     ? lf9  /* initial set    */
        :     (min_h <  cur_h) ? lf7  /* taller  set    */
        :     (min_h == cur_h) ? lf5  /* same no change */
        :                        lf8; /* smaller ignore */
log("%c "+caller+"("+_caller+") %c height "+cs.height+"%c minHeight .. "+min_h+" "+t_data.SYMBOL_HEAVY_RIGHT_ARROW+" "+pat_bag.style.minHeight+" ", lbH, lbH+lf5, lbH+lfx);
}
/*{{{
logXXX("cs.height=["+cs.height+"]");
logXXX("cur_h=["+cur_h+"]");
logXXX("min_h=["+min_h+"]");
}}}*/
/*}}}*/
};
/*}}}*/
/*_ t_pat_bag_minHeight_clear {{{*/
let t_pat_bag_minHeight_clear = function(_caller)
{
/*{{{*/
let   caller = "t_pat_bag_minHeight_clear";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

/*}}}*/

    /* CLEAR [CLOSED pat_bag] min height constraint .. (tallest bag may change) */
    if(pat_bag.style.minHeight)
    {
if(log_this) log("%c "+caller+"("+_caller+") %c CLEAR ["+pat_bag.style.minHeight+"]", lbH+lf1, lbH+lf2);

        pat_bag.style.minHeight = "";
    }
    else {
if(log_this) log("%c "+caller+"("+_caller+") %c CLEAR ["+pat_bag.style.minHeight+"]", lbH+lf1, lbH+lf8);

    }
};
/*}}}*/
/* MOVE */
/*. t_pat_bag_set_moving_item_label {{{*/
let t_pat_bag_set_moving_item_label  = function(moving_item_label)
{
let   caller = "t_pat_bag_set_moving_item_label("+moving_item_label+")";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;
if( log_this) log(caller);

    if(moving_item_label) add_el_class(pat_bag, CSS_HAS_MOVING_CHILD);
    else                  del_el_class(pat_bag, CSS_HAS_MOVING_CHILD);

    let pat_bag_is_opened    = has_el_class(pat_bag, CSS_OPEN_BAG);

    if( (moving_item_label && !pat_bag_is_opened) )
        t_pat_bag_open(caller, "OPENED - MOVING ITEM "+moving_item_label);
};
/*}}}*/
/*_ t_show_hov_1 t_show_hov_2 t_hide_hov {{{*/
let t_show_hov_1 = function(x,y) { if(typeof hov1 == "undefined") return; hov1.style.display = "inline-block"; hov1.style.left = x+"px"; hov1.style.top = y+"px"; };
let t_show_hov_2 = function(x,y) { if(typeof hov2 == "undefined") return; hov2.style.display = "inline-block"; hov2.style.left = x+"px"; hov2.style.top = y+"px"; };
let t_hide_hov   = function()
{
    if(typeof hov1 != "undefined") hov1.style.display = "none";
    if(typeof hov2 != "undefined") hov2.style.display = "none";
    if(typeof hov3 != "undefined") hov3.style.display = "none";
    if(typeof hov4 != "undefined") hov4.style.display = "none";
};
/*{{{
}}}*/
/*}}}*/
/*_ t_hov_rect {{{*/
let t_hov_rect = function(moving_rect, hovered_rect)
{
    hov1.style.display= "block"; hov1.style.left = ( moving_rect.left )+"px"; hov1.style.top = ( moving_rect.top   )+"px";
    hov2.style.display= "block"; hov2.style.left = ( moving_rect.right)+"px"; hov2.style.top = ( moving_rect.bottom)+"px";
    hov3.style.display= "block"; hov3.style.left = (hovered_rect.left )+"px"; hov3.style.top = (hovered_rect.top   )+"px";
    hov4.style.display= "block"; hov4.style.left = (hovered_rect.right)+"px"; hov4.style.top = (hovered_rect.bottom)+"px";
};
/*}}}*/
/*_ t_pat_bag_mov_div_is_xy_hovering_bag {{{*/
let t_pat_bag_mov_div_is_xy_hovering_bag = function(x,y,hov_div)
{
    /* RECT: moving object rectangle */
    let mov_div_rect
        = { top    : y
        ,   left   : x
        ,   bottom : y                  + mov_div.offsetHeight
        ,   right  : x                  + mov_div.offsetWidth
    };

    /* RECT: container accepting moving object */
    /*.................(container)................(contained)......*/
    let hov_div_top  = (hov_div == pat_bag) ? 0 : hov_div.offsetTop ;
    let hov_div_left = (hov_div == pat_bag) ? 0 : hov_div.offsetLeft;

    let hov_div_rect
        = { top    : hov_div_top
          , left   : hov_div_left
          , bottom : hov_div_top        + hov_div.offsetHeight
          , right  : hov_div_left       + hov_div.offsetWidth
    };

    let overlapping
        = !(   (mov_div_rect.right  < hov_div_rect.left  )
            || (mov_div_rect.left   > hov_div_rect.right )
            || (mov_div_rect.bottom < hov_div_rect.top   )
            || (mov_div_rect.top    > hov_div_rect.bottom)
        );

    if(overlapping || (hov_div == pat_bag))
        t_hov_rect(mov_div_rect, hov_div_rect);
/*
*/

    return overlapping;
};
/*}}}*/
/*_ pat_bag_mov_div_get_dst_near_xy {{{*/
let pat_bag_mov_div_get_dst_near_xy = function(x,y)
{
/* TODO WHEN TO USE pat_bag_mov_div_get_dst_near_xy */

    let   p_w = pat_bag.offsetWidth ;
    let   p_h = pat_bag.offsetHeight;

    if(pat_bag_was_grid_whenGrabbed)
    {
        let w_32  = p_w  / 3 * 2;
        let w_3   = p_w  / 3;
        let o_top = off_bag.offsetTop;

        if     (x > w_32  ) return bak_bag; /* Right       */
        else if(x > w_3   ) return alt_bag; /* Middle      */
        else if(y > o_top ) return off_bag; /* Left Bottom */
        else                return pat_bag; /* Left Top    */
    }
    else {
        let h_4  = p_h / 4;
        let h_42 = p_h / 4 * 2;
        let h_43 = p_h / 4 * 3;

        if     (y <  h_4  ) return pat_bag; /* TOP */
        else if(y <  h_42 ) return off_bag; /* 2/4 */
        else if(y <  h_43 ) return alt_bag; /* 3/4 */
        else                return bak_bag; /* BOT */
    }

};
/*}}}*/
/*_ t_pat_bag_hover_div_accept {{{*/
let t_pat_bag_hover_div_accept = function(div, at_bag_top)
{
/*{{{*/
let caller = "t_pat_bag_hover_div_accept";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

/*}}}*/
    /* into [mov_dst_div] {{{*/
    if(    (div != pat_bag)) {
        if((div.firstElementChild == mov_pat_span) &&  at_bag_top) return;
        if((div.lastElementChild  == mov_pat_span) && !at_bag_top) return;

    }
    mov_dst_div = div;
    mov_dst_div.at_bag_top = at_bag_top;
/*}}}*/
    /* insert [mov_pat_span] at TOP or BOTTOM of [mov_dst_div] {{{*/
    let before_child
        = (mov_dst_div  == pat_bag) ? off_bag
        : (at_bag_top             ) ? mov_dst_div.firstElementChild
        :                             null
    ;
/*{{{*/
if(log_this) {

    let l_from
        = (mov_pat_span.parentNode == pat_bag) ? lf4
        : (mov_pat_span.parentNode == off_bag) ? lf5
        : (mov_pat_span.parentNode == bak_bag) ? lf2
        : (mov_pat_span.parentNode == alt_bag) ? lf6
        :                                        lf0;

    let l_to
        = (mov_dst_div             == pat_bag) ? lf4
        : (mov_dst_div             == off_bag) ? lf5
        : (mov_dst_div             == bak_bag) ? lf2
        : (mov_dst_div             == alt_bag) ? lf6
        :                                        lf0;

    let first_or_last = before_child  ?  "FIRST" : "LAST";
    let lfc           = before_child  ?    lf8   :  lf9  ;

    log("%c"+caller+"("+(at_bag_top ? "TOP" : "BOT")+") %c"+mov_pat_span.parentNode.id+"%c"+t_data.SYMBOL_RIGHT_ARROW+"%c"+mov_dst_div.id+"%c"+first_or_last
        ,lbH                                           ,lbL+l_from                     ,lbC                    ,lbR+l_to           ,lbH+lfc          );
}
/*}}}*/
    if     (mov_dst_div  == off_bag) off_bag.insertBefore( mov_pat_span, before_child); /* added to the end if before_child is null */
    else if(mov_dst_div  == alt_bag) alt_bag.insertBefore( mov_pat_span, before_child); /* ...like appendChild */
    else if(mov_dst_div  == bak_bag) bak_bag.insertBefore( mov_pat_span, before_child);
    else if(mov_dst_div  == pat_bag) pat_bag.insertBefore( mov_pat_span, off_bag     );

    if     (mov_dst_div  == off_bag) reorder_pat_csv(at_bag_top);
    else if(mov_dst_div  == alt_bag) reorder_pat_csv(at_bag_top);
    else if(mov_dst_div  == bak_bag) reorder_pat_csv(at_bag_top);
    else if(mov_dst_div  == pat_bag) reorder_pat_csv(at_bag_top);

    t_pat_bag_open_or_close_layout();
    /*}}}*/
};
/*}}}*/
/*… reorder_pat_csv {{{*/
let reorder_pat_csv = function(at_bag_top)
{
/*{{{*/
let caller = "reorder_pat_csv";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if(log_this) t_log.console_clear("reorder_pat_csv");
/*}}}*/

    /* moving pattern */
    let move_span = mov_pat_span.childNodes[2];
    let move_pat  = t_util.csv_unescape(move_span.getAttribute("data-pattern"))     ;

    /* remove from any csv */
    pat_csv = t_util.csv_del(pat_csv, move_pat);
    off_csv = t_util.csv_del(off_csv, move_pat);
    alt_csv = t_util.csv_del(alt_csv, move_pat);
    bak_csv = t_util.csv_del(bak_csv, move_pat);
    bin_csv = t_util.csv_del(bin_csv, move_pat);

    /* add to dest csv */
    if     (mov_dst_div == pat_bag) pat_csv = (at_bag_top ? t_util.csv_ins : t_util.csv_add) (pat_csv, move_pat);
    else if(mov_dst_div == off_bag) off_csv = (at_bag_top ? t_util.csv_ins : t_util.csv_add) (off_csv, move_pat);
    else if(mov_dst_div == alt_bag) alt_csv = (at_bag_top ? t_util.csv_ins : t_util.csv_add) (alt_csv, move_pat);
    else if(mov_dst_div == bak_bag) bak_csv = (at_bag_top ? t_util.csv_ins : t_util.csv_add) (bak_csv, move_pat);

    /* UPDATE TITLE AND TOOLTIP */
    set_bag_rot_title("ORDERING:");

/*{{{*/
if( log_this) {
    log(caller+": %c at_bag_top "+at_bag_top, lbH+lfX[at_bag_top ? 4 :6]);

    let p_pfx = ( at_bag_top && (mov_dst_div == pat_bag)) ? t_data.SYMBOL_RIGHT_ARROW : "";
    let o_pfx = ( at_bag_top && (mov_dst_div == off_bag)) ? t_data.SYMBOL_RIGHT_ARROW : "";
    let a_pfx = ( at_bag_top && (mov_dst_div == alt_bag)) ? t_data.SYMBOL_RIGHT_ARROW : "";
    let b_pfx = ( at_bag_top && (mov_dst_div == bak_bag)) ? t_data.SYMBOL_RIGHT_ARROW : "";

    let p_sfx = (!at_bag_top && (mov_dst_div == pat_bag)) ? t_data.SYMBOL_LEFT_ARROW  : "";
    let o_sfx = (!at_bag_top && (mov_dst_div == off_bag)) ? t_data.SYMBOL_LEFT_ARROW  : "";
    let a_sfx = (!at_bag_top && (mov_dst_div == alt_bag)) ? t_data.SYMBOL_LEFT_ARROW  : "";
    let b_sfx = (!at_bag_top && (mov_dst_div == bak_bag)) ? t_data.SYMBOL_LEFT_ARROW  : "";

    log("%c pat_csv %c"+p_pfx+"%c"+ pat_csv +"%c"+ p_sfx, lf4,lbb+lb4, lbH+lf4,lbb+lb4);
    log("%c off_csv %c"+o_pfx+"%c"+ off_csv +"%c"+ o_sfx, lf5,lbb+lb5, lbH+lf5,lbb+lb5);
    log("%c alt_csv %c"+a_pfx+"%c"+ alt_csv +"%c"+ a_sfx, lf6,lbb+lb6, lbH+lf6,lbb+lb6);
    log("%c bak_csv %c"+b_pfx+"%c"+ bak_csv +"%c"+ b_sfx, lf7,lbb+lb7, lbH+lf7,lbb+lb7);
    log("%c bin_csv %c"+b_pfx+"%c"+ bin_csv +"%c"+ b_sfx, lf0,lbb+lb0, lbH+lf0,lbb+lb0);
}
/*}}}*/
};
/*}}}*/
/*_ t_sel_pat_bag_all {{{*/
let t_sel_pat_bag_all = function()
{
/*{{{*/
let caller = "t_sel_pat_bag_all";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log("%c"+caller, lbH+lf1);
/*}}}*/
/*{{{
 t_util.csv_log(pat_csv, "pat_csv");
 t_util.csv_log(off_csv, "off_csv");
}}}*/
    if(off_csv) pat_csv = t_cat_csv1_csv2(pat_csv,off_csv);

    /* SEARCH DOCUMENT FOR NOT ALREADY SLOTTED PATTERNS {{{*/
    let   count = t_util.csv_count( pat_csv );
if( log_this) log("%c"+count+" patterns in [pat_csv] %c"+pat_csv, lbL+lf4, lbR+lf9);

    let     tmp_csv = String( pat_csv );
    let slotted_csv = "";
    let missing_csv = "";

    count   = t_util.csv_count( tmp_csv );
    for(let pos=1; pos<=count; ++pos)
    {
        /* slot pattern {{{*/
        let pattern = t_util.csv_get(tmp_csv, pos);

        if( !t_slot.get_slot_of_pattern(pattern) )
        {
            t_words_regex_reset(          pattern);

            call_check_TreeWalker("body", pattern);
        }
        /*}}}*/
        /* HIDE   [NOT SLOTTED PAT] {{{*/
        if( !t_slot.get_slot_of_pattern(pattern) )
        {
if( log_this) log("%c"+pos+"%c NOT SLOTTED %c HIDE %c "+pattern, lbH+lfX[pos % 10], lbL+lf5, lbC+lf5, lbR+lf9);
            csv_pattern_mov_to_off( pattern );

            missing_csv = t_util.csv_add(missing_csv, pattern);
        }
        /*}}}*/
        /* SHOW   [    SLOTTED PAT] {{{*/
        else if(t_slot.t_set_slot_of_pattern(pos, pattern))
        {
if( log_this) log("%c"+pos+"%c ... SLOTTED %c SHOW %c "+pattern, lbH+lfX[pos % 10], lbL+lf4, lbC+lf4, lbR+lf9);
            csv_pattern_mov_to_pat( pattern );

            slotted_csv = t_util.csv_add(slotted_csv, pattern);
        }
        /*}}}*/
        /* BACK   [NOT   FOUND PAT] {{{*/
        else {
if( log_this) log("%c"+pos+"%c NOT   FOUND %c BACK %c "+pattern, lbH+lfX[pos % 10], lbL+lf2, lbC+lf2, lbR+lf9);
            csv_pattern_mov_to_bak( pattern );

            missing_csv = t_util.csv_add(missing_csv, pattern);
        }
        /*}}}*/
    }
    /*}}}*/
    /* SELECTIONS .. (slotted missing) {{{*/

    let msg = "";

    let s_count = t_util.csv_count( slotted_csv );
    let b_count = t_util.csv_count( bak_csv );

    if(slotted_csv)
        msg
        =  " <em class='done cc9'>FOUND "+  s_count                       +"</em>"
        +  " <em class='have cc1'>"+        t_util.ellipsis_short( slotted_csv ) +"</em>"
    ;
    else
        msg
        =  " <em class='done cc9'>NO SELECTION</em>"
    ;

    if(missing_csv)
        msg
        += " .."
        +  " <em class='done cc8'>MISSED "+ b_count                       +"</em>"
        +  " <em class='have cc8'>"+        t_util.ellipsis_short( missing_csv ) +"</em>"
    ;
    /*}}}*/
    /* OPEN BAGS WHEN NOT ALL SELECTED {{{*/
    if(t_util.csv_count( off_csv ) || t_util.csv_count( bak_csv ))
        t_pat_bag_open(caller, "OPEN BAGS WHEN NOT ALL SELECTED");

    /*}}}*/
    t_select.t_onPatternUpdate(msg, caller);
};
/*}}}*/
/*_ t_cat_csv1_csv2 {{{*/
let t_cat_csv1_csv2 = function(csv1,csv2)
{
/*{{{
log("t_cat_csv1_csv2");
log_caller();
log("%c...csv1=["+csv1+"]", lf4);
log("%c...csv2=["+csv2+"]", lf5);
}}}*/
    let csv1_only = "";
    let   count = t_util.csv_count( csv1 );
    for(let pos =1; pos<=count; ++pos)
    {
        let pattern = t_util.csv_get(csv1, pos);
        if(!t_util.csv_contains(csv2, pattern) )
            csv1_only = t_util.csv_add(csv1_only, pattern);
    }
    let csv = t_util.csv_cat(csv1_only, csv2);
/*{{{
log("%c...return ["+csv+"]", lf4);
}}}*/
    return csv;
};
    /*}}}*/
/* STATUS FOOTER */
/*_ t_pat_bag_status {{{*/
/*{{{*/
let T_PAT_BAG_STATUS_DELAY = 1000;
let t_pat_bag_status_timer;
/*}}}*/
let t_pat_bag_status = function(delay=T_PAT_BAG_STATUS_DELAY)
{
    if(       t_pat_bag_status_timer) clearTimeout( t_pat_bag_status_timer);
    if(delay) t_pat_bag_status_timer  = setTimeout( t_pat_bag_status_handler, T_PAT_BAG_STATUS_DELAY);
    else                                            t_pat_bag_status_handler();
};
/*}}}*/
/*_ t_pat_bag_status_handler {{{*/
let t_pat_bag_status_handler = function()
{
    t_pat_bag_status_timer = null;

    t_pat_bag_status_set_innerText( t_pat_bag_status_get_status_line() );

    t_eval_wide_or_tall_panel( pat_bag );
};
/*}}}*/
/*_ t_pat_bag_status_get_status_line {{{*/
let t_pat_bag_status_get_status_line = function()
{
    let empty = !t_slot.get_slotted_pattern_count();

    let s = t_util.csv_count(sel_csv);
    let p = t_util.csv_count(pat_csv);
    let o = t_util.csv_count(off_csv);
    let a = t_util.csv_count(alt_csv);
    let b = t_util.csv_count(bak_csv);

    let more
        =     s ? (" more")
        :         (""     )
    ;

    let selected
        = empty ? (    "None selected")
        :         (s+"/"+p+" selected");

    let can_do
        =  (o+b)? ((o+a+b)+" "+more+" to choose from")
        :         ("nothing " +more+" to choose from")
      /*:         ("nothing " +more+LF+" to "+LF+" choose "+LF+" from") .. checking bag_log layout */
    ;

    let pat_bag_status
        = selected
        + LF +t_data.SYMBOL_RIGHT_ARROW + can_do
/*      = selected      +t_data.SYMBOL_RIGHT_ARROW+ can_do ... NO! THIS WRAPS AT RANDOM */
    ;

    return pat_bag_status;
};
/*}}}*/
/*. t_pat_bag_status_set_innerText {{{*/
/*{{{*/
let em_pixels;

/*}}}*/
let t_pat_bag_status_set_innerText = function(innerText)
{
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

    if(!em_pixels) {
        let    cs = window.getComputedStyle(fly_log);
        em_pixels = parseInt(cs.width) / 1.4;
    }

    let    l = innerText.indexOf(LF);
    let head = (l > 0) ? innerText.substring(0,l+1) : ""       ; /* LF included .. (  only with  a head-line) */
    let tail = (l > 0) ? innerText.substring(  l+1) : innerText; /* second line .. (or all with no head-line) */

    let  len = parseInt(bot_div.clientWidth / em_pixels);
/*{{{
    bag_log.innerText = head + t_util.ellipsis(tail, len);
}}}*/
    bag_log.innerText = head + tail;

    t_util.set_el_caption(bag_log, innerText);
    t_util.set_el_caption(pat_bag, innerText);

if(log_this) log("t_pat_bag_status_set_innerText: %c bot_div is "+len+" EM wide %c "+ t_util.strip_CR_LF(bag_log.innerText) +" ", lb8, lbH+lf4);
};
/*}}}*/
/* DATA */
/*_ t_pat_get_el_data_pattern {{{*/
let t_pat_get_el_data_pattern = function(el)
{
    let data_pattern = t_util.csv_unescape(el.getAttribute("data-pattern"));
/*{{{
logXXX("t_pat_get_el_data_pattern(el): ...return ["+data_pattern+"]");
}}}*/
    return data_pattern;
};
/*}}}*/
/*}}}*/
/* PAT BAGS HANDLE */ /*{{{*/
/*  t_handle_1_pat_bag {{{*/
/*{{{*/
let last_bag_move;

/*}}}*/
let t_handle_1_pat_bag = function(e_target)
{
/*{{{*/
let   caller = "t_handle_1_pat_bag";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c"+caller+"%c"+get_n_lbl(e_target), lf1, lbH+lf1);
/*}}}*/
    /* pat_bag_is_on_standby {{{*/
    let pat_bag_is_on_standby = (onStandby_PANEL && (onStandby_PANEL.id == pat_bag.id));
    if( pat_bag_is_on_standby)
    {
        t_standby3_release( caller );
    }
    /*}}}*/
    /* [pat_sort] CLICK {{{*/
    else if(e_target.id == "pat_sort")
    {
        t_handle_1_pat_bag_sort_cycle();
    }
    /*}}}*/
    /* [bag_rot] CLICK {{{*/
    else if(   (e_target.id.includes("bag_rot"           )) /* pat_bag's child (no rotate3d as bags swapping fuss is enough) */
            || (e_target.id.includes(t_data.WORDS_BAG_ROT))
    ) {
        /* ANIMATE BUTTON AND CLONE {{{*/
        if(e_target.firstElementChild )
        {
            let button = (e_target.id == t_data.WORDS_BAG_ROT)
                ? e_target
                : t_get_tool(t_data.WORDS_BAG_ROT);

            button.firstElementChild.style.transform = "rotate3d(0,1,0,0.25turn) scale(0.8)";

            let bag_rot_clone = get_doc_tool_diplayed_id_prefix( button.id );
            if( bag_rot_clone ) bag_rot_clone.firstElementChild.style.transform = "rotate3d(0,1,0,0.25turn) scale(0.8)";

/*{{{
log_key_val_group(caller+"("+get_id_or_tag_and_className(e_target)+")"
                  , {   e_target
                      , button
                      , bag_rot_clone
                      , button_firstElementChild        :  button.firstElementChild
                      , bag_rot_clone_firstElementChild : (bag_rot_clone && bag_rot_clone.firstElementChild)
                  }
                  , lf1, false);
}}}*/
        }
        /*}}}*/

        rot_move_all_pat_spans_to_off_bag();

        /* ANIMATE ROTATION .. WHEN BAGS ARE VISIBLE {{{*/
        let is_pat_bag_selected = t_tools_panel_is_selected(pat_bag);
        let is_pat_bag_hidden   = has_el_class(             pat_bag, t_data.CSS_HIDDEN);
        let is_pat_bag_visible
            =   is_pat_bag_selected
            && !is_pat_bag_hidden;

/*{{{
logBIG("is_pat_bag_selected...=["+ is_pat_bag_selected +"]",lf5);
logBIG("is_pat_bag_hidden.....=["+ is_pat_bag_hidden   +"]",lf6);
logBIG("is_pat_bag_visible....=["+ is_pat_bag_visible  +"]",lf7);
}}}*/
        if( is_pat_bag_visible ) {
            t_handle_1_pat_bag_rotating( true);
            let      cs = window.getComputedStyle(off_bag);
            let      ms = t_util.string_to_ms(cs.animationDuration);
/*{{{
log("off_bag.style.animation.duration=["+cs.animationDuration+"] .. [ms "+ms+"]");
}}}*/

            setTimeout(function() {
                t_handle_1_pat_bag_rotation();
                t_handle_1_pat_bag_rotating(false);
            }, ms+200);
        }
        /*}}}*/
        /* INSTANT ROTATION .. WHEN BAGS ARE HIDDEN {{{*/
        else {
            t_handle_1_pat_bag_rotation();
        }
        /*}}}*/
    }
    /*}}}*/
    /* [fly_log] CLICK {{{*/
    else if(e_target.id == "fly_log")
    {
if( log_this) log("...[fly_log] CLICK");

        /* Toggle transient state */
        let state = has_el_class(e_target, t_data.CSS_CHECKED);
        t_fly.t_fly_log_set_state(state ? false : e_target.id+" checked");
    }
    /*}}}*/
    else {
        t_pat_bag_stage_target( e_target );
    }
};
/*}}}*/
/*➔ rot_move_all_pat_spans_to_off_bag {{{*/
let rot_move_all_pat_spans_to_off_bag = function()
{
    t_select.t_collect_el_class_from_into("pat_span", pat_bag, pat_spans);

    for(let pat_span_index = pat_spans.length-1; pat_span_index >= 0; --pat_span_index)
    {
        if(                      !pat_spans[pat_span_index]) continue;
        off_bag.insertBefore(     pat_spans[pat_span_index], off_bag.firstElementChild);
        sync_pat_span_slot_class("", pat_spans[pat_span_index]);
    }
};
/*}}}*/
/*_ t_pat_bag_stage_target {{{*/
/*{{{*/
/*
/\(SEL\|PAT\|OFF\|BAK\|STANDBY\|OPENED\)
                                     /\(CLOSED\|NONE\|SOME\|MANY\)
/\(SEL\|PAT\|OFF\|BAK\|STANDBY\|OPENED\|CLOSED\|NONE\|SOME\|MANY\)
/\(SEL\|PAT\|OFF\|BAK\|STANDBY\|OPENED\|CLOSED\|NONE\|SOME\|MANY\|CLICKED\|IDLE\)

*/
/*................................................................................................(SEL PAT OFF BAK CLICKED STANDBY).........................*/
const STAGE1__PAT_CLICKED____________________THEN_TOGGLE_PAT     = { color:1 , level:"1", context:"PAT_CLICKED"                   , action:"TOGGLE_PAT"     };

const STAGE2__BAK_MANY_SEL_NONE__BAG_CLOSED__THEN_OPEN_BAG       = { color:2 , level:"2", context:"BAK_MANY_SEL_NONE__BAG_CLOSED" , action:"OPEN_BAG"       };
const STAGE3__BAK_SOME___________BAK_CLICKED_THEN_DUMP_BAK       = { color:3 , level:"3", context:"BAK_SOME___________BAK_CLICKED", action:"DUMP_BAK"       };
const STAGE3__ALT_SOME___________ALT_CLICKED_THEN_DUMP_ALT       = { color:3 , level:"3", context:"ALT_SOME___________ALT_CLICKED", action:"DUMP_ALT"       };
const STAGE4__BAK_NONE_SEL_SOME______________THEN_HIDE_SEL       = { color:5 , level:"5", context:"BAK_NONE_SEL_SOME"             , action:"HIDE_SEL"       };
const STAGE4__ALT_NONE_SEL_SOME______________THEN_HIDE_SEL       = { color:5 , level:"5", context:"ALT_NONE_SEL_SOME"             , action:"HIDE_SEL"       };

const STAGE2__OFF_MANY_SEL_NONE__BAG_CLOSED__THEN_OPEN_BAG       = { color:2 , level:"2", context:"OFF_MANY_SEL_NONE__BAG_CLOSED" , action:"OPEN_BAG"       };
const STAGE3__OFF_SOME___________OFF_CLICKED_THEN_DUMP_OFF       = { color:3 , level:"3", context:"OFF_SOME___________OFF_CLICKED", action:"DUMP_OFF"       };
/*{{{
const STAGE4__OFF_SOME_SEL_NONE__BAG_OPENED__THEN_SHOW_OFF       = { color:4 , level:"4", context:"OFF_MANY_SEL_NONE__BAG_OPENED" , action:"SHOW_OFF"       };
}}}*/
const STAGE4__OFF_SOME___________BAG_OPENED__THEN_SHOW_OFF       = { color:4 , level:"4", context:"OFF_SOME___________BAG_OPENED" , action:"SHOW_OFF"       };
const STAGE4___________SEL_SOME__BAG_OPENED__THEN_SHOW_OFF       = { color:4 , level:"4", context:"_________SEL_SOME__BAG_OPENED" , action:"SHOW_OFF"       };
/*{{{
const STAGE5__OFF_NONE_SEL_SOME______________THEN_HIDE_SEL       = { color:5 , level:"5", context:"OFF_NONE_SEL_SOME"             , action:"HIDE_SEL"       };
}}}*/
const STAGE5__OFF_NONE_SEL_SOME__BAG_CLOSED__THEN_HIDE_SEL       = { color:5 , level:"5", context:"OFF_NONE_SEL_SOME__BAG_CLOSED" , action:"HIDE_SEL"       };

const STAGE6__STANDBY_IDLE___________________THEN_STANDBY_ON     = { color:6 , level:"6", context:"STANDBY_IDLE"                  , action:"STANDBY_ON"     };
const STAGE7__STANDBY_CLOSED_________________THEN_STANDBY_OPENED = { color:7 , level:"7", context:"STANDBY_CLOSED"                , action:"STANDBY_OPENED" };
const STAGE8__STANDBY_OPENED_________________THEN_STANDBY_DONE   = { color:8 , level:"8", context:"STANDBY_OPENED"                , action:"STANDBY_DONE"   };

/*}}}*/
let t_pat_bag_stage_target = function(e_target)
{
/* {{{*/
let   caller = "t_pat_bag_stage_target("+get_n_lbl(e_target)+")";
let log_this = LOG_MAP.S0_PATTERN;

if( log_this) t_fly.t_log_event_status(caller, lf1);
/*}}}*/
    /* UI {{{*/
    if(e_target.nodeType == Node.TEXT_NODE) e_target = e_target.parentElement;

    let            parent_div = t_util.get_el_parent_with_tag(e_target,"DIV");
    let pat_bag_is_on_standby = ((onStandby_PANEL != null ) && (onStandby_PANEL == e_target));
    let pat_bag_is_opened     = (        has_el_class( pat_bag, CSS_OPEN_BAG)              );

    let pattern_clicked       = (e_target.tagName == "EM") || e_target.id.startsWith( "pattern");
    let pat_bag_clicked       = (parent_div == pat_bag);
    let off_bag_clicked       = (parent_div == off_bag);
    let alt_bag_clicked       = (parent_div == alt_bag);
    let bak_bag_clicked       = (parent_div == bak_bag);
    let bot_div_clicked       = (parent_div == bot_div);
    /*}}}*/
    /* CSV {{{*/
    let sel_csv_is_empty         = (           t_util.csv_count( sel_csv ) < 1             );
    let off_csv_one_or_more      = (           t_util.csv_count( off_csv ) > 0             );
    let off_csv_more_than_one    = (           t_util.csv_count( off_csv ) > 1             );
    let alt_csv_one_or_more      = (           t_util.csv_count( alt_csv ) > 0             );
    let alt_csv_more_than_one    = (           t_util.csv_count( alt_csv ) > 1             );
    let bak_csv_one_or_more      = (           t_util.csv_count( bak_csv ) > 0             );
    let bak_csv_more_than_one    = (           t_util.csv_count( bak_csv ) > 1             );

    /*}}}*/
    /* STAGE {{{*/
    /*_______PAT________________________________________________________________*/
    let stage
        = (  pattern_clicked                                                     ) ? STAGE1__PAT_CLICKED____________________THEN_TOGGLE_PAT /*_______BAK_OR_OFF_________________NO_SEL_____________________BAG_CLOSED___*/ : (  bak_csv_more_than_one  &&  sel_csv_is_empty  &&  !pat_bag_is_opened ) ? STAGE2__BAK_MANY_SEL_NONE__BAG_CLOSED__THEN_OPEN_BAG
        : (  off_csv_more_than_one  &&  sel_csv_is_empty  &&  !pat_bag_is_opened ) ? STAGE2__OFF_MANY_SEL_NONE__BAG_CLOSED__THEN_OPEN_BAG

    /*_____________________________________________________________DIV_CLICKED__*/
        : (  off_csv_one_or_more                          &&   off_bag_clicked   ) ? STAGE3__OFF_SOME___________OFF_CLICKED_THEN_DUMP_OFF
        : (  bak_csv_one_or_more                          &&   bak_bag_clicked   ) ? STAGE3__BAK_SOME___________BAK_CLICKED_THEN_DUMP_BAK
        : (  alt_csv_one_or_more                          &&   alt_bag_clicked   ) ? STAGE3__ALT_SOME___________ALT_CLICKED_THEN_DUMP_ALT

    /*_______OFF________________________SEL________________________DIV__________*/
        : (  off_csv_one_or_more                          &&   pat_bag_is_opened ) ? STAGE4__OFF_SOME___________BAG_OPENED__THEN_SHOW_OFF
        : (                            !sel_csv_is_empty  &&   pat_bag_is_opened ) ? STAGE4___________SEL_SOME__BAG_OPENED__THEN_SHOW_OFF
/*{{{
        : (  off_csv_one_or_more    &&  sel_csv_is_empty                         ) ? STAGE4__OFF_SOME_SEL_NONE__BAG_OPENED__THEN_SHOW_OFF
        : ( !off_csv_one_or_more    && !sel_csv_is_empty                         ) ? STAGE5__OFF_NONE_SEL_SOME______________THEN_HIDE_SEL
}}}*/
        : ( !off_csv_one_or_more    && !sel_csv_is_empty  &&  !pat_bag_is_opened ) ? STAGE5__OFF_NONE_SEL_SOME__BAG_CLOSED__THEN_HIDE_SEL
    /*_______BAK________________________SEL________________________DIV__________*/
        : ( !bak_csv_one_or_more    && !sel_csv_is_empty                         ) ? STAGE4__BAK_NONE_SEL_SOME______________THEN_HIDE_SEL
    /*_______ALT________________________SEL________________________DIV__________*/
        : ( !alt_csv_one_or_more    && !sel_csv_is_empty                         ) ? STAGE4__ALT_NONE_SEL_SOME______________THEN_HIDE_SEL
    /*_______PAT_BAG_STANDBY____________________________________________________*/
        : ( !pat_bag_is_on_standby                        &&   pat_bag_clicked   ) ? STAGE6__STANDBY_IDLE___________________THEN_STANDBY_ON
        : ( !pat_bag_is_opened                                                   ) ? STAGE7__STANDBY_CLOSED_________________THEN_STANDBY_OPENED
        :                                                                            STAGE8__STANDBY_OPENED_________________THEN_STANDBY_DONE
    ;

    /*}}}*/
    /* [t_fly.t_log_stage] {{{*/
        let  something_clicked
            =  pattern_clicked
            || bak_bag_clicked
          /*|| alt_bag_clicked */
            || off_bag_clicked
            || bot_div_clicked
        ;
    if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG))
        t_fly.t_log_stage(stage, something_clicked, pattern_clicked, e_target, parent_div);

    /*}}}*/
    /* [t_pat_bag_status_set_innerText] {{{*/
    t_pat_bag_status_set_innerText(stage.level+" "+stage.context+" "+stage.action);

    /*}}}*/
/*{{{*/
if( log_this) log("%c "+caller+" %c level %c "+stage.level   +" %c context %c "+stage.context+" %c action %c "+ stage.action
                  ,lbH+lbb+lf7  ,lbL     ,lbR+lfX[stage.color] ,lbL       ,lbR+lfX[stage.color],lbL      ,lbR+lfX[stage.color]);

if(log_this)
    log_key_val_group( "UI "+get_n_lbl(parent_div)
                       , {   pat_bag_is_on_standby
                           , pat_bag_is_opened
                           , pattern_clicked
                           , bak_bag_clicked
                           , alt_bag_clicked
                           , off_bag_clicked
                           , bot_div_clicked
                       }
                       , lf4
                       , true);

if(log_this)
    log_key_val_group( "CSV  pat_csv "+t_util.csv_count(pat_csv)+"   off_csv "+t_util.csv_count(off_csv)+"   alt_csv "+t_util.csv_count(alt_csv)+"   bak_csv "+t_util.csv_count(bak_csv)
                       , {   sel_csv_is_empty
                           , off_csv_one_or_more
                           , off_csv_more_than_one
                           , bak_csv_one_or_more
                           , bak_csv_more_than_one
                           , alt_csv_one_or_more
                           , alt_csv_more_than_one
                       }
                       , lf6
                       , true);

/*}}}*/
    switch(stage) {
    case STAGE1__PAT_CLICKED____________________THEN_TOGGLE_PAT     : pat_bag1_toggle_pat   (e_target); break;

    case STAGE2__BAK_MANY_SEL_NONE__BAG_CLOSED__THEN_OPEN_BAG       : pat_bag2_bag_open     ();         break;
    case STAGE2__OFF_MANY_SEL_NONE__BAG_CLOSED__THEN_OPEN_BAG       : pat_bag2_bag_open     ();         break;

    case STAGE3__OFF_SOME___________OFF_CLICKED_THEN_DUMP_OFF       : pat_bag3_dump_off     ();         break;
    case STAGE3__ALT_SOME___________ALT_CLICKED_THEN_DUMP_ALT       : pat_bag3_dump_alt     ();         break;
    case STAGE3__BAK_SOME___________BAK_CLICKED_THEN_DUMP_BAK       : pat_bag3_dump_bak     ();         break;

    case STAGE4__BAK_NONE_SEL_SOME______________THEN_HIDE_SEL       : pat_bag5_hide_sel     ();         break;
    case STAGE4__ALT_NONE_SEL_SOME______________THEN_HIDE_SEL       : pat_bag5_hide_sel     ();         break;

    case STAGE4__OFF_SOME___________BAG_OPENED__THEN_SHOW_OFF       : pat_bag4_show_off     ();         break;
    case STAGE4___________SEL_SOME__BAG_OPENED__THEN_SHOW_OFF       : pat_bag4_show_off     ();         break;
/*{{{
    case STAGE4__OFF_SOME_SEL_NONE__BAG_OPENED__THEN_SHOW_OFF       : pat_bag4_show_off     ();         break;
    case STAGE5__OFF_NONE_SEL_SOME______________THEN_HIDE_SEL       : pat_bag5_hide_sel     ();         break;
}}}*/
    case STAGE5__OFF_NONE_SEL_SOME__BAG_CLOSED__THEN_HIDE_SEL       : pat_bag5_hide_sel     ();         break;

    case STAGE6__STANDBY_IDLE___________________THEN_STANDBY_ON     : pat_bag6_standby      ();         break;
    case STAGE7__STANDBY_CLOSED_________________THEN_STANDBY_OPENED : pat_bag7_standby_open ();         break;
    case STAGE8__STANDBY_OPENED_________________THEN_STANDBY_DONE   : pat_bag8_standby_done ();         break;
    default:
    if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG))
    t_fly.t_log_stage_msg(t_fly.STAGE_2_ACTION, "<div class='cc2'>*** "+stage.level+" "+stage.context+" "+stage.action+"*** <em class='cc8'>"+caller+"</em></div>");
    break;
    }

};
/*}}}*/

/*_ t_handle_1_pat_bag_rotating {{{*/
/*{{{*/
const CSS_ROTATING = "rotating";

/*}}}*/
let t_handle_1_pat_bag_rotating = function(rotating)
{
/*{{{*/
let caller ="t_handle_1_pat_bag_rotating";
let log_this = LOG_MAP.S0_PATTERN;

if(log_this) log("%c"+caller+"("+rotating+")", lbH+(rotating ? lf4 : lf1));
/*}}}*/
    if(rotating) {
        t_bag_xywh_ongrid_save();
        /* ADD CSS_ROTATING {{{*/
        add_el_class(pat_bag, CSS_ROTATING);
        add_el_class(off_bag, CSS_ROTATING);
        add_el_class(alt_bag, CSS_ROTATING);
        add_el_class(bak_bag, CSS_ROTATING);

        /*}}}*/
        /* RESTORE SAVED LAYOUT .. (i.e. override rotating style changes) {{{*/
        let xywh;

        /* keep current pat_bag dimensions */
        xywh =  pat_bag.ongrid_xywh;
        pat_bag.style.width  = xywh.w+"px";
        pat_bag.style.height = xywh.h+"px";

        /* bags rotating animation to start from current layout */

        let paddingTop = has_el_class(pat_bag, CSS_OPEN_BAG) ? 0 : pat_bag.ongrid_padd.t;
        t_bag_xywh_ongrid_to_absolute(off_bag , 0);
        t_bag_xywh_ongrid_to_absolute(alt_bag , 0);
        t_bag_xywh_ongrid_to_absolute(bak_bag , paddingTop); /* as bak_bag was not displayed, its saved layout is missing pat_bag padding top */

        /*}}}*/
    }
    else {
        /* CLEAR ROTATING LAYOUT {{{*/
        pat_bag.style.width  = ""; pat_bag.style.height = "";

        t_clear_bag_xywh(off_bag);
        t_clear_bag_xywh(alt_bag);
        t_clear_bag_xywh(bak_bag);

        /*}}}*/
        /* DEL CSS_ROTATING {{{*/
        del_el_class(pat_bag, CSS_ROTATING);
        del_el_class(off_bag, CSS_ROTATING);
        del_el_class(alt_bag, CSS_ROTATING);
        del_el_class(bak_bag, CSS_ROTATING);

        /*}}}*/
    }
};
/*}}}*/
/*_ t_handle_1_pat_bag_rotation {{{*/
let t_handle_1_pat_bag_rotation = function()
{
/* {{{*/
let   caller = "t_handle_1_pat_bag_rotation";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller);
if( log_this || DOM_TOOLS_TAG) pattern_log_bag_csv(caller);
/*}}}*/

    /* current [pat_csv] [alt_csv] [bak_csv] .. [bin_csv not involved] {{{*/
    let pat_csv_old = pat_csv;
    let off_csv_old = off_csv;
    let cleared_csv = t_select.t_clear_slot_all();        /* ignore current selections */
    pat_csv         = t_cat_csv1_csv2(pat_csv_old, off_csv_old);
    off_csv         = "";

if( log_this) log("...pat_csv_old=["+pat_csv_old+"]");
if( log_this) log("...off_csv_old=["+off_csv_old+"]");
if( log_this) log("...cleared_csv=["+cleared_csv+"]");

if( log_this) log("%c pat_csv %c["+pat_csv+"]",lbL+lf4, lbR);
if( log_this) log("%c alt_csv %c["+alt_csv+"]",lbL+lf6, lbR);
if( log_this) log("%c bak_csv %c["+bak_csv+"]",lbL+lf2, lbR);
if( log_this) log("%c bin_csv %c["+bin_csv+"]",lbL+lf2, lbR);
    /*}}}*/
    /* bags permutations {{{*/
    let l_x = 8;
    let this_move;
    let tmp;
    let  to = t_data.SYMBOL_RIGHT_ARROW;
    let  bk = t_data.SYMBOL_LEFT_ARROW_HOOK;

/*{{{
    let  ft = t_data.SYMBOL_RIGHT_LEFT_ARROW;
    if     ( pat_csv &&  bak_csv &&  alt_csv) { tmp = alt_csv;  alt_csv = pat_csv; l_x=1; pat_csv =     tmp;                this_move = "<span class='bg4'>PAT</span>"+ft+"<span class='bg6'>ALT</span>"                                                                ; }

    else if( pat_csv &&  bak_csv && !alt_csv) { tmp = alt_csv;  alt_csv = bak_csv; l_x=2; bak_csv =      "";                this_move = "<span class='bg2'>BAK</span>"+to+"<span class='bg6'>ALT</span>"                                                                ; }
    else if( pat_csv && !bak_csv &&  alt_csv) { tmp = alt_csv;  bak_csv = pat_csv; l_x=3; pat_csv = alt_csv;  alt_csv = ""; this_move = "<span class='bg4'>PAT</span>"+to+"<span class='bg2'>BAK</span>..<span class='bg6'>ALT</span>"+to+"<span class='bg4'>PAT</span>"; }
    else if(!pat_csv &&  bak_csv &&  alt_csv) { tmp = alt_csv;  pat_csv = alt_csv; l_x=5; alt_csv = bak_csv;  bak_csv = ""; this_move = "<span class='bg6'>ALT</span>"+to+"<span class='bg4'>PAT</span>..<span class='bg2'>BAK</span>"+to+"<span class='bg6'>ALT</span>"; }

    else if(!pat_csv && !bak_csv &&  alt_csv) { tmp = alt_csv;  pat_csv = alt_csv; l_x=7; alt_csv =      "";                this_move = "<span class='bg6'>ALT</span>"+to+"<span class='bg4'>PAT</span>"                                                                ; }
    else if(!pat_csv &&  bak_csv && !alt_csv) { tmp = alt_csv;  alt_csv = bak_csv; l_x=6; bak_csv =      "";                this_move = "<span class='bg2'>BAK</span>"+to+"<span class='bg6'>ALT</span>"                                                                ; }

    else if( pat_csv && !bak_csv && !alt_csv) { tmp = alt_csv;  alt_csv = pat_csv; l_x=4; pat_csv =      "";                this_move = "<span class='bg4'>PAT</span>"+to+"<span class='bg6'>ALT</span>"                                                                ; }

    else if(!pat_csv && !bak_csv && !alt_csv) {                                    l_x=8;                                   this_move = "BAGS EMPTY";                                                                                                                     }
}}}*/

    let pat_bag_only =  pat_csv && !alt_csv && !bak_csv;
    let alt_bag_only = !pat_csv &&  alt_csv && !bak_csv;
    let bak_bag_only = !pat_csv && !alt_csv &&  bak_csv;

    if     (pat_bag_only) { alt_csv = pat_csv; pat_csv = ""; this_move = "<span class='bg4'>PAT</span>"+to+"<span class='bg2'>ALT</span>"; }
    else if(alt_bag_only) { bak_csv = alt_csv; alt_csv = ""; this_move = "<span class='bg4'>ALT</span>"+to+"<span class='bg2'>BAK</span>"; }
    else if(bak_bag_only) { pat_csv = bak_csv; bak_csv = ""; this_move = "<span class='bg4'>BAK</span>"+to+"<span class='bg2'>PAT</span>"; }
    else {
        /**/ tmp = bak_csv;
        /**/       bak_csv = alt_csv;
        /**/                 alt_csv = pat_csv;
        /**/                           pat_csv = tmp;
        /**/this_move = "<span class='bg4'>PAT</span>"+to+"<span class='bg2'>BAK</span>"+to+"<span class='bg4'>ALT</span>"+bk;
    }

    last_bag_move = this_move;

    /* UPDATE TITLE AND TOOLTIP */
    set_bag_rot_title( t_util.strip_HTML(this_move) );

    let lfx = lfX[l_x];
if(log_this) log("%c "+t_data.SDX[l_x]+" %c "+this_move, lbB+lfx, lbH+lfx);
    /*}}}*/
    /* UPDATE UI {{{*/
    t_handle_1_pat_bag_rotation_update_UI( pat_csv );

if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_fly("<pre class='cc7'>"+bag_rot.title+"</pre>");
    /*}}}*/
};
/*}}}*/
/*_ t_handle_1_pat_bag_rotation_update_UI {{{*/
let t_handle_1_pat_bag_rotation_update_UI = function(reselect_csv)
{
/* {{{*/
let   caller = "t_handle_1_pat_bag_rotation_update_UI";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller);
/*}}}*/

    t_select.remove_pat_span_from_div( sel_bag );
    t_select.remove_pat_span_from_div( pat_bag );
    t_select.remove_pat_span_from_div( off_bag );
    t_select.remove_pat_span_from_div( alt_bag );
    t_select.remove_pat_span_from_div( bak_bag );

    pat_bag3_reselect( reselect_csv );

if( log_this) log("%c pat_csv %c["+pat_csv+"]",lbL+lf4, lbR);
if( log_this) log("%c alt_csv %c["+alt_csv+"]",lbL+lf3, lbR);
if( log_this) log("%c bak_csv %c["+bak_csv+"]",lbL+lf2, lbR);
if( log_this) log("%c bin_csv %c["+bin_csv+"]",lbL+lf2, lbR);
};
/*}}}*/

/*_ t_bag_xywh_ongrid_save {{{*/
let t_bag_xywh_ongrid_save = function()
{
        /* SAVE CURRENT COMPUTED LAYOUT {{{*/
        let cs;
        cs = window.getComputedStyle(pat_bag); pat_bag.ongrid_xywh = { x:pat_bag.offsetLeft , y:pat_bag.offsetTop , w:parseInt(cs.width) , h:parseInt(cs.height) , pt:parseInt(cs.paddingTop) , pr:parseInt(cs.paddingRight) };
        /*..................................*/ pat_bag.ongrid_padd = { t:parseInt(cs.paddingTop) , r:parseInt(cs.paddingRight) };
        cs = window.getComputedStyle(alt_bag); alt_bag.ongrid_xywh = { x:alt_bag.offsetLeft , y:alt_bag.offsetTop , w:parseInt(cs.width) , h:parseInt(cs.height) };
        cs = window.getComputedStyle(bak_bag); bak_bag.ongrid_xywh = { x:bak_bag.offsetLeft , y:bak_bag.offsetTop , w:parseInt(cs.width) , h:parseInt(cs.height) };
        cs = window.getComputedStyle(off_bag); off_bag.ongrid_xywh = { x:off_bag.offsetLeft , y:off_bag.offsetTop , w:parseInt(cs.width) , h:parseInt(cs.height) };

        /*}}}*/
        /* ADJUST ALL BAGS TO SAME HEIGHT AND TOP .. f(CSS_OPEN_BAG) {{{*/
        if( has_el_class(pat_bag, CSS_OPEN_BAG) )
        {
            let h_max = Math.max(off_bag.ongrid_xywh.h, alt_bag.ongrid_xywh.h);
            h_max     = Math.max(h_max                , bak_bag.ongrid_xywh.h);
            off_bag.ongrid_xywh.h = h_max;
            alt_bag.ongrid_xywh.h = h_max;
            bak_bag.ongrid_xywh.h = h_max;

            let y_min = Math.min(off_bag.ongrid_xywh.y, alt_bag.ongrid_xywh.y);
            y_min     = Math.min(y_min                , bak_bag.ongrid_xywh.y);
            off_bag.ongrid_xywh.y = y_min;
            alt_bag.ongrid_xywh.y = y_min;
            bak_bag.ongrid_xywh.y = y_min;
        }
        /*}}}*/
};
/*}}}*/
/*_ t_bag_xywh_ongrid_to_absolute {{{*/
let t_bag_xywh_ongrid_to_absolute = function(bag, paddingTop=0)
{
    if(!bag.ongrid_xywh) return;
/*{{{
if(bag==off_bag) logXXX("%c t_bag_xywh_ongrid_to_absolute("+bag.id+" , "+paddingTop+")", lbH+lf3);
if(bag==off_bag) log_caller();
}}}*/
    bag.style.left   = (             bag.ongrid_xywh.x)+"px";
    bag.style.top    = (paddingTop + bag.ongrid_xywh.y)+"px";
    bag.style.width  = (             bag.ongrid_xywh.w)+"px";
    bag.style.height = (             bag.ongrid_xywh.h)+"px";
};
/*}}}*/
/*_ t_clear_bag_xywh {{{*/
let t_clear_bag_xywh = function(bag)
{
/*{{{
if(bag==off_bag) logXXX("%c t_clear_bag_xywh("+bag.id+")", lbH+lf8);
if(bag==off_bag) log_caller();
}}}*/
    bag.style.left   = "";
    bag.style.top    = "";
    bag.style.width  = "";
    bag.style.height = "";
};
/*}}}*/

/*_ t_handle_1_pat_bag_sort_changed {{{*/
/*{{{
.. CURRENTLY HANDLED IN SYNC WITH [pat_bag] STATE
let t_handle_1_pat_bag_sort_changed = function(id,value)
{
    let requested_direction  = value ? 1 : -1 ;
    if( requested_direction != t_handle_1_pat_bag_sort_cycle_direction)
        t_handle_1_pat_bag_sort_cycle(  requested_direction  );
}
}}}*/
/*}}}*/
/*_ t_handle_1_pat_bag_sort_cycle .. [reversed .. as-is .. sorted] {{{*/
/*{{{*/
let t_handle_1_pat_bag_sort_cycle_direction = 0;

/*}}}*/
let t_handle_1_pat_bag_sort_cycle = function(requested_direction)
{
/*{{{*/
let   caller = "t_handle_1_pat_bag_sort_cycle(requested_direction "+ requested_direction +")";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

/*}}}*/
    /* some state to toggle to {{{*/
    let sel_can_sort = (t_util.csv_count( sel_csv ) > 1);
    let sel_sorted   = sel_can_sort &&                t_are_sel_sorted  ();
    let sel_reversed = sel_can_sort && !sel_sorted && t_are_sel_reversed();

    if( sel_can_sort )
    {
        /* requested .. [-1 .. 0 .. +1] */
        requested_direction = parseInt(requested_direction);
        requested_direction
            = (requested_direction > 0) ?  1
            : (requested_direction < 0) ? -1
            :                              0;

        switch( requested_direction ) {

        /* sorted */
        case  1:
        t_handle_1_pat_bag_sort_cycle_direction = requested_direction;
        break;

        /* reversed */
        case -1: t_handle_1_pat_bag_sort_cycle_direction = requested_direction;
        break;

        /* toggle .. [reversed .. as-is .. sorted] */
        default: {
            switch(  t_handle_1_pat_bag_sort_cycle_direction ) {
            default:
            case  0: t_handle_1_pat_bag_sort_cycle_direction = (sel_sorted   ? -1 :  1); break; /* from user_set .. alternate current order */
            case  1: t_handle_1_pat_bag_sort_cycle_direction = (sel_sorted   ?  0 : -1); break; /* when in phase .. transition by user_set */
            case -1: t_handle_1_pat_bag_sort_cycle_direction = (sel_reversed ?  0 :  1); break; /* when in phase .. transition by user_set */
            }
        }

        }

    }
    /*}}}*/
/*{{{*/
if( log_this) {
    let lfs = (                            sel_sorted      ) ? lf5 : lf8;
    let lfr = (                            sel_reversed    ) ? lf6 : lf8;
    let lfd = (t_handle_1_pat_bag_sort_cycle_direction == -1) ? lf2
        :     (t_handle_1_pat_bag_sort_cycle_direction ==  1) ? lf5 : lf8;

    log("%c"+caller+": %c sorted "+sel_sorted+" %c reversed "+sel_reversed+" %c direction "+t_handle_1_pat_bag_sort_cycle_direction
        ,lf1          ,lbH+lfs                 ,lbH+lfr                     ,lbH+lfd);
/*{{{
    log_key_val_group( caller
                       , {   cycle_direction : t_handle_1_pat_bag_sort_cycle_direction
                           , sel_sorted
                           , sel_reversed
                       }, lf1, false);
}}}*/
}
/*}}}*/
    if(t_handle_1_pat_bag_sort_cycle_direction != 0)
    {
        if(     (!sel_sorted   && (t_handle_1_pat_bag_sort_cycle_direction > 0)) /* sort if not sorted */
             || (!sel_reversed && (t_handle_1_pat_bag_sort_cycle_direction < 0)) /* reverse  if sorted */
          )
            pat_bag3_reselect();
    }
    else {
        t_sync_pat_buttons( caller );
    }
};
/*}}}*/

/*_ pat_bag1_toggle_pat {{{*/
let pat_bag1_toggle_pat = function(e_target)
{
/*{{{*/
let   caller = "pat_bag1_toggle_pat";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

/*}}}*/
    /* [pattern] [slot] {{{*/
    let e_target_pattern = t_pat_get_el_data_pattern( e_target );
    if(!e_target_pattern) {
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_log_stage_msg(t_fly.STAGE_1_INPUT, "<em class='cc0'>NO PATTERN TO TOGGLE</em>");
if(log_this) log(t_fly.STAGE_1_INPUT, "NO PATTERN TO TOGGLE");

        return;
    }
if( log_this) caller += "("+e_target_pattern+")";
if( log_this) pattern_log_bag_csv(caller);

    let matching_slot = t_slot.get_slot_matching_pattern( e_target_pattern );
    /*}}}*/
    /* SET [CSS_PAT_CLICKED] .. NOT HELPING! {{{*/
/*{{{
    add_el_class(e_target, CSS_PAT_CLICKED);

    setTimeout(function() { del_el_class(e_target, CSS_PAT_CLICKED); }, t_data.CLICK_DURATION);
}}}*/
    /*}}}*/
    if(matching_slot) {
        /* HIDE TOGGLED MATCHING PATTERN {{{*/
        let matching_pattern  = t_select.ccs[matching_slot].pattern;
        if( matching_pattern == e_target_pattern)
        {
if(log_this) log(caller+"%c HIDE TOGGLED PATTERN %c"+matching_pattern+"%c SLOT "+matching_slot, lbH+lf8, lbL+lf8, lbR);

            t_pat_bag1_hide_pattern(matching_pattern, t_data.SYMBOL_HID+" SEL <em class='cc"+matching_slot+"'>"+matching_pattern+"</em>");

            if( prop.get( t_data.WORDS_OPCYCLE ) )
                setTimeout(words_option_cycle, PATTERN_CYCLE_DELAY);
        }
        /*}}}*/
        else {
            /* SHOW TOGGLED PATTERN {{{*/
if(log_this) log(caller+"%c HIDE ALL COLIDING THEN SHOW TOGGLED PATTERN %c"+e_target_pattern, lbH+lf5, lbH);

            t_pat_bag1_slot_pattern(e_target_pattern, t_data.SYMBOL_SEL+" <em class='cc1'>"+e_target_pattern+"</em>");
            /*}}}*/
        }
    }
    /* SHOW TOGGLED NOT-COLIDING PATTERN {{{*/
    else {
if(log_this) log(caller+"%c SHOW TOGGLED PATTERN %c"+e_target_pattern, lbH+lf5, lbH);
        t_pat_bag1_slot_pattern(    e_target_pattern, t_data.SYMBOL_SEL+" <em class='cc1'>"+e_target_pattern+"</em>");

    }
    /*}}}*/
};
/*}}}*/
/*. t_pat_bag1_slot_pattern .. into pat_bag {{{*/
let t_pat_bag1_slot_pattern = function(pattern, msg)
{
/*{{{*/
let   caller = "t_pat_bag1_slot_pattern("+pattern+")";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c "+caller, lbb+lf4);
/*}}}*/
    /* HIDE COLIDING {{{*/
    let pattern_slot = t_slot.get_slot_of_pattern( pattern );

    pat_bag1_hide_patterns_coliding( pattern );

    if( pattern_slot )
        return;

    /*}}}*/
    /* OR SEARCH DOCUMENT FOR PAT {{{*/
    t_words_regex_reset(          pattern);

    call_check_TreeWalker("body", pattern);
    /*}}}*/
    /* THEN SHOW [SLOTTED PAT] {{{*/
    if(     t_slot.get_slot_of_pattern( pattern )) {
if(log_this) log("SHOW   [    SLOTTED PAT]");

        csv_pattern_mov_to_pat( pattern );

        t_select.t_onPatternUpdate(msg, caller);
    }
    /*}}}*/
    /* OR BACKUP [NOT FOUND PAT] {{{*/
    else {
if(log_this) log("BACK   [NOT   FOUND PAT]");

        csv_pattern_mov_to_bak( pattern );

        t_select.t_onPatternUpdate(t_data.SYMBOL_BAK+" OFF <em class='cc8'>"+ t_util.ellipsis_short(pattern) +"</em>", caller);
    }
    /*}}}*/
};
/*}}}*/
/*…   pat_bag1_hide_patterns_coliding {{{*/
let   pat_bag1_hide_patterns_coliding = function(selected_pattern)
{
/*{{{*/
let   caller = "pat_bag1_hide_patterns_coliding";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

/*}}}*/
    let   matching_slot;
    while(matching_slot = t_slot.get_slot_matching_pattern( selected_pattern ))
    {
        let matching_pattern = t_select.ccs[matching_slot].pattern;
if(log_this) log(caller+"%c HIDE COLIDING PATTERN %c"+matching_pattern+"%c SLOT "+matching_slot, lbH+lf7, lbL+lf7, lbR);

if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG))
        t_fly.t_fly(t_data.SYMBOL_COLIDE+" <em class='cc4'>"+selected_pattern+"</em> "+t_data.SYMBOL_DISMISS+" <em class='cc4'>"+matching_pattern+"</em>");
        t_pat_bag1_hide_pattern(matching_pattern, t_data.SYMBOL_HID+" SEL <em class='cc"+matching_slot+"'>"+matching_pattern+"</em>");
    }
};
/*}}}*/
/*. t_pat_bag1_hide_pattern .. into off_bag {{{*/
let t_pat_bag1_hide_pattern = function(pattern, msg)
{
/*{{{*/
let   caller = "t_pat_bag1_hide_pattern("+pattern+")";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c "+caller, lbb+lf5);
/*}}}*/
        csv_pattern_mov_to_off( pattern );
    /* HIDE   [    CLEARED PAT] {{{*/
    let slot = t_slot.get_slot_of_pattern(pattern);
    if( slot ) {
        t_slot.t_clear_slot( slot );

        t_select.t_onPatternUpdate(msg, caller);
    }
    /*}}}*/
    /* HIDE   [NOT SLOTTED PAT] {{{*/
    else {
if(log_this) log("HIDE   [NOT SLOTTED PAT]");

        t_select.t_onPatternUpdate(t_data.SYMBOL_HID+" not found <em class='cc8'>"+ t_util.ellipsis_short(pattern) +"</em>", caller);
    }
    /*}}}*/
};
/*}}}*/
/*. t_pat_bag1_alt_pattern  .. into alt_bag {{{*/
let t_pat_bag1_alt_pattern = function(pattern, msg)
{
/*{{{*/
let   caller = "t_pat_bag1_alt_pattern("+pattern+")";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c "+caller, lbb+lf6);
/*}}}*/
    /* ALT    [    CLEARED PAT] {{{*/
    let             slot = t_slot.get_slot_of_pattern(pattern);
    if(             slot) {
if(log_this) log("ALT    [    CLEARED PAT]");
        t_slot.t_clear_slot( slot );
        csv_pattern_mov_to_alt( pattern );

if( log_this) pattern_log_bag_csv(caller);
        t_select.t_onPatternUpdate(msg, caller);
    }
    /*}}}*/
    /* ALT    [NOT SLOTTED PAT] {{{*/
    else {
if(log_this) log("ALT    [NOT SLOTTED PAT]");
        csv_pattern_mov_to_alt( pattern );

        t_select.t_onPatternUpdate(t_data.SYMBOL_BAK+" OFF <em class='cc0'>"+ t_util.ellipsis_short(pattern) +"</em>", caller);
    }
    /*}}}*/
};
/*}}}*/
/*. t_pat_bag1_back_pattern .. into bak_bag {{{*/
let t_pat_bag1_back_pattern = function(pattern, msg)
{
/*{{{*/
let   caller = "t_pat_bag1_back_pattern("+pattern+")";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c "+caller, lbb+lf2);
/*}}}*/
    /* BACK   [    CLEARED PAT] {{{*/
    let             slot = t_slot.get_slot_of_pattern(pattern);
    if(             slot) {
        t_slot.t_clear_slot( slot );
if(log_this) log("BACK   [    CLEARED PAT]");
        csv_pattern_mov_to_bak( pattern );

        t_select.t_onPatternUpdate(msg, caller);
    }
    /*}}}*/
    /* BACK   [NOT SLOTTED PAT] {{{*/
    else {
if(log_this) log("BACK   [NOT SLOTTED PAT]");
        csv_pattern_mov_to_bak( pattern );

        t_select.t_onPatternUpdate(t_data.SYMBOL_BAK+" OFF <em class='cc0'>"+ t_util.ellipsis_short(pattern) +"</em>", caller);
    }
    /*}}}*/
};
/*}}}*/


/*_ pat_bag2_bag_open {{{*/
let pat_bag2_bag_open = function()
{
/*{{{*/
let   caller = "pat_bag2_bag_open";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c "+caller, lbb+lf2);
/*}}}*/
    t_pat_bag_open(caller, "Showing OFF selections");
};
/*}}}*/

/*_ pat_bag3_dump_off {{{*/
let pat_bag3_dump_off = function()
{
/*{{{*/
let caller = "pat_bag3_dump_off";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf4);
/*}}}*/
    let tmp_csv  =    String( off_csv );
    let    count = t_util.csv_count( tmp_csv );
    let patterns = "";

    for(let pos = 1; pos <= count; ++pos)
    {
        /* TO PAT [    SLOTTED PAT] {{{*/
        let pattern = t_util.csv_get(tmp_csv, pos     );
        if(     t_slot.get_slot_of_pattern(   pattern )) {
if(log_this) log("TO PAT [    SLOTTED PAT]");
            csv_pattern_mov_to_pat(   pattern );
        }
        /*}}}*/
        /* TO ALT [NOT SLOTTED PAT] {{{*/
        else {
if(log_this) log("TO ALT [NOT SLOTTED PAT]");
            csv_pattern_mov_to_alt(   pattern);

            patterns += pattern+" ";
        }
        /*}}}*/
    }

    t_select.t_onPatternUpdate(t_data.SYMBOL_BAK+" "+count+" <em class='cc8'>"+ t_util.ellipsis_short(patterns) +"</em>", caller);
};
/*}}}*/
/*_ pat_bag3_dump_alt  {{{*/
let pat_bag3_dump_alt = function()
{
/*{{{*/
let   caller = "pat_bag3_dump_alt";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf3);
/*}}}*/
    let tmp_csv  =    String( alt_csv );
    let    count = t_util.csv_count( tmp_csv );
    let patterns = "";

    for(let pos = 1; pos <= count; ++pos)
    {
        /* TO PAT [    SLOTTED PAT] {{{*/
        let pattern = t_util.csv_get(tmp_csv, pos     );
        if(     t_slot.get_slot_of_pattern(   pattern )) {
if(log_this) log("TO PAT [    SLOTTED PAT]");
            csv_pattern_mov_to_pat(   pattern );
        }
        /*}}}*/
        /* TO BAK [NOT SLOTTED PAT] {{{*/
        else {
if(log_this) log("TO BAK [NOT SLOTTED PAT]");
            csv_pattern_mov_to_bak(   pattern);

            patterns += pattern+" ";
        }
        /*}}}*/
    }

    t_select.t_onPatternUpdate(t_data.SYMBOL_BAK+" "+count+" <em class='cc8'>"+ t_util.ellipsis_short(patterns) +"</em>", caller);
};
/*}}}*/
/*_ pat_bag3_dump_bak {{{*/
let pat_bag3_dump_bak = function()
{
/*{{{*/
let   caller = "pat_bag3_dump_bak";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf3);
/*}}}*/
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_fly_all_csv(t_data.SYMBOL_CLEAR_BAK, "want");

    let tmp_csv  =    String( bak_csv );
    let    count = t_util.csv_count( tmp_csv );
    let patterns = "";
    for(let pos = 1; pos <= count; ++pos)
    {
        /* TO PAT [    SLOTTED PAT] {{{*/
        let pattern = t_util.csv_get(tmp_csv, pos     );
        if(     t_slot.get_slot_of_pattern(   pattern )) {
if(log_this) log("TO PAT [    SLOTTED PAT]");
            csv_pattern_mov_to_pat(   pattern );
        }
        /*}}}*/
        /* TO BIN [NOT SLOTTED PAT] {{{*/
        else {
if(log_this) log("TO BIN [NOT SLOTTED PAT]");
            csv_pattern_mov_to_bin(   pattern);

            patterns += pattern+" ";
        }
        /*}}}*/
    }

if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_fly_all_csv(t_data.SYMBOL_CLEAR_BIN, "done");

    let dumping_action
        = " DUMPING ("+count+") <em class='cc2'>"+ t_util.ellipsis_short(patterns) +"</em> TO <em class='cc0'>bin</em>";
    t_select.t_onPatternUpdate(dumping_action, caller);
};
/*}}}*/
/*_ t_pat_bag3_dump_all_csv {{{*/
let t_pat_bag3_dump_all_csv = function()
{
/*{{{*/
let   caller = "t_pat_bag3_dump_all_csv";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf3);
/*}}}*/
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_fly_all_csv(t_data.SYMBOL_CLEAR_BAK, "want");

    let all_csv = t_util.csv_cat(pat_csv, off_csv);
    all_csv     = t_util.csv_cat(all_csv, alt_csv);
    all_csv     = t_util.csv_cat(all_csv, bak_csv);

    let tmp_csv  =    String( all_csv );
    let    count = t_util.csv_count( tmp_csv );
    let patterns = "";
    for(let pos = 1; pos <= count; ++pos)
    {
        /* TO PAT [    SLOTTED PAT] {{{*/
        let pattern = t_util.csv_get(tmp_csv, pos     );
        if(     t_slot.get_slot_of_pattern(   pattern )) {
if(log_this) log("TO PAT [    SLOTTED PAT]");
            csv_pattern_mov_to_pat(   pattern );
        }
        /*}}}*/
        /* TO BIN [NOT SLOTTED PAT] {{{*/
        else {
if(log_this) log("TO BIN [NOT SLOTTED PAT]");
            csv_pattern_mov_to_bin(   pattern);

            patterns += pattern+" ";
        }
        /*}}}*/
    }

if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_fly_all_csv(t_data.SYMBOL_CLEAR_BIN, "done");

    let dumping_action
        = " DUMPING ("+count+") <em class='cc2'>"+ t_util.ellipsis_short(patterns) +"</em> TO <em class='cc0'>bin</em>";
    t_select.t_onPatternUpdate_no_delay(dumping_action, caller);
};
/*}}}*/

/*_ t_pat_bag3_reselect_all {{{*/
/*{{{*/
const T_PAT_BAG3_RESELECT_DELAY = 1000;
let   t_pat_bag3_reselect_timer;

/*}}}*/
let t_pat_bag3_reselect_all = function()
{
/*{{{*/
let   caller = "t_pat_bag3_reselect_all";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf3);
/*}}}*/
    if(t_pat_bag3_reselect_timer) clearTimeout( t_pat_bag3_reselect_timer );
    t_pat_bag3_reselect_timer     = setTimeout( pat_bag3_reselect_handler, T_PAT_BAG3_RESELECT_DELAY);
};
/*}}}*/
/*_ pat_bag3_reselect_handler {{{*/
let pat_bag3_reselect_handler = function()
{
/*{{{*/
let caller = "pat_bag3_reselect_handler";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf3);
/*}}}*/
    /* clear all slots {{{*/
    let reselected_csv = t_select.t_clear_slot_all();
if( log_this) t_util.csv_log(reselected_csv, "currently slotted");

    /*}}}*/
    /* ++ reinject unselected patterns {{{*/

        reselected_csv = t_util.csv_cat(reselected_csv, pat_csv);
        reselected_csv = t_util.csv_cat(reselected_csv, off_csv);
        reselected_csv = t_util.csv_cat(reselected_csv, bak_csv);
if( log_this) t_util.csv_log(reselected_csv, "bak_bag_too");

    /*}}}*/
    pat_bag3_reselect( reselected_csv );
};
/*}}}*/
/*_ pat_bag3_reselect {{{*/
let pat_bag3_reselect = function(reselected_csv="NONE")
{
/*{{{*/
let caller = "pat_bag3_reselect";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller+": direction="+t_handle_1_pat_bag_sort_cycle_direction+"", lbB+lf3);
/*}}}*/
    /* default to reselect currently slotted patterns {{{*/
    if(reselected_csv == "NONE")
    {
        reselected_csv = t_select.t_clear_slot_all();
    }
    /*}}}*/
    /* sort .. [eventually] {{{*/
    if(reselected_csv && (t_handle_1_pat_bag_sort_cycle_direction != 0))
    {
if( log_this) t_util.csv_log(reselected_csv, "reselected_csv");

        let    reverse = (t_handle_1_pat_bag_sort_cycle_direction < 0);
        reselected_csv = t_util.csv_sort(reselected_csv, reverse);

if( log_this) t_util.csv_log(reselected_csv, "(reverse="+reverse+")");
    }
    /*}}}*/
    /* re-slot {{{*/
    let count = Math.min(t_select.SELECT_SLOT_MAX, t_util.csv_count( reselected_csv ));
    if(reselected_csv)
    {
        for(let pos=1; pos<=count; ++pos)
        {
            let pattern = t_util.csv_get(reselected_csv, pos);

            t_pat_bag1_slot_pattern(pattern, t_data.SYMBOL_SEL+" <em class='cc1'>"+pattern+"</em>");
        }
    }
    /*}}}*/
    let msg = (count ? count : "NO")+" SLOTTED SELECTION";
if( log_this) log(msg);

/*{{{ NOT REQUIRED ? .. as it will be called later by t_onPatternUpdate_done
    t_sync_pat_buttons( caller );
}}}*/

    t_select.t_onPatternUpdate_no_delay(msg, caller);

    t_eval_wide_or_tall_panel(sel_bag);
    t_eval_wide_or_tall_panel(pat_bag);
};
/*}}}*/
/*_ pat_bag4_show_off {{{*/
let pat_bag4_show_off = function()
{
/*{{{*/
let caller = "pat_bag4_show_off";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf4);
/*}}}*/
if( log_this) log("%c...NOT setting all bags to same top and height", lbH+lf2);

    t_handle_1_pat_bag_rotating(false);

    t_sel_pat_bag_all();
};
/*}}}*/
/*_ pat_bag5_hide_sel {{{*/
let pat_bag5_hide_sel = function()
{
/*{{{*/
let   caller = "pat_bag5_hide_sel";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf5);
/*}}}*/
    /* move all from [pat_csv] to [off_csv] {{{*/
    let tmp_csv  =           String( pat_csv );
    let   count  = t_util.csv_count( pat_csv );
    let patterns = "";

    for(let pos  = 1; pos <= count; ++pos)
    {
        /* HIDE   [    SLOTTED PAT] {{{*/
        let pattern = t_util.csv_get(tmp_csv, pos);
        off_csv     = t_util.csv_ins(off_csv, pattern);
        patterns   += pattern+" ";

        /*}}}*/
    }
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_log_stage_msg(t_fly.STAGE_2_ACTION, t_data.SYMBOL_HID+" x"+count+" <em class='cc8'>"+ t_util.ellipsis_short(patterns) +"</em>");

    /*}}}*/
    /* unslot all patterns {{{*/
    let cleared_csv = t_select.t_clear_slot_all();
if( log_this) log("...cleared_csv=["+cleared_csv+"]");

    /*}}}*/
    /* .. t_slot.t_clear_slot
     * .. t_clear_slot_sync
     * .. t_select.t_onPatternUpdate
     */
};
/*}}}*/
/*_ pat_bag6_standby {{{*/
let pat_bag6_standby = function()
{
/*{{{*/
let   caller = "pat_bag6_standby";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf6);
/*}}}*/
    t_standby_bag_id( pat_bag.id );
};
/*}}}*/
/*_ pat_bag7_standby_open {{{*/
let pat_bag7_standby_open = function()
{
/*{{{*/
let   caller = "pat_bag7_standby_open";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf7);
/*}}}*/
/*{{{
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_log_stage_msg(t_fly.STAGE_2_ACTION, "Setting STANDBY OPENED");
}}}*/
    t_pat_bag_open(caller, "Standby OPEN");
};
/*}}}*/
/*_ pat_bag8_standby_done {{{*/
let pat_bag8_standby_done = function()
{
/*{{{*/
let   caller = "pat_bag8_standby_done";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf8);
/*}}}*/
/*{{{
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_log_stage_msg(t_fly.STAGE_2_ACTION, "Setting STANDBY EMPTY");
}}}*/
    t_pat_bag_close(caller, "Standby DONE");
};
/*}}}*/
/*_ pat_bag9_grab_child {{{*/
/*{{{*/
let off_bag_rect;
let bak_bag_rect;
let alt_bag_rect;
let mov_pat_span;
let pat_bag_was_grid_whenGrabbed;

/*}}}*/
let pat_bag9_grab_child = function(parent_div)
{
/*{{{*/
let   caller = "pat_bag9_grab_child("+get_n_lbl(parent_div)+")";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT || LOG_MAP.EV2_MOVE;

if( log_this) t_fly.t_log_event_status(caller, lf4);
/*}}}*/
    /* [mov_div] {{{*/
    mov_div.style.display = "block";
    mov_div.style.zIndex  = onWork_EL.style.zIndex + 1;

    mov_div.style.backgroundColor
        = (parent_div == pat_bag) ? "yellow"
        : (parent_div == off_bag) ? "green"
        : (parent_div == alt_bag) ? "blue"
        :                           "red"
    ;

    mov_div.innerHTML     = onWork_EL.outerHTML;
    t_pat_bag_set_moving_item_label(mov_div.innerHTML);

    /*}}}*/
    /* [mov_pat_span] {{{*/
    mov_pat_span = t_util.get_el_parent_with_tag(onWork_EL, "SPAN");

/*{{{
    let ccx
        = (parent_div == pat_bag)  ? CSS_CC4
        : (parent_div == off_bag)  ? CSS_CC5
        : (parent_div == alt_bag)  ? CSS_CC6
        : (parent_div == bak_bag)  ? CSS_CC2
        :                            CSS_CC9
        ;
    set_el_class_removing(onWork_EL, ccx, t_data.CCX_CLASSLIST);
}}}*/
add_el_class(mov_pat_span, "moving");
    /*}}}*/
    /* [mov_src] [mov_src_div] [mov_dst_div] {{{*/
    mov_src_div  = parent_div;
    mov_dst_div  = null;

/*
add_el_class(onWork_EL  , CSS_MOV_SRC    );
*/
    add_el_class(mov_src_div, CSS_MOV_SRC);
    /*}}}*/
    /* on grab layout rectangles {{{*/
    pat_bag_was_grid_whenGrabbed = has_el_class(pat_bag, CSS_GRID_BAG);

    off_bag_rect
        = { top    : off_bag.offsetTop
          , left   : off_bag.offsetLeft
          , bottom : off_bag.offsetTop  + off_bag.offsetHeight
          , right  : off_bag.offsetLeft + off_bag.offsetWidth
        };

    alt_bag_rect
        = { top    : alt_bag.offsetTop
          , left   : alt_bag.offsetLeft
          , bottom : alt_bag.offsetTop  + alt_bag.offsetHeight
          , right  : alt_bag.offsetLeft + alt_bag.offsetWidth
        };

    bak_bag_rect
        = { top    : bak_bag.offsetTop
          , left   : bak_bag.offsetLeft
          , bottom : bak_bag.offsetTop  + bak_bag.offsetHeight
          , right  : bak_bag.offsetLeft + bak_bag.offsetWidth
        };

    /*}}}*/
    /* DIM BG (light) {{{*/
    dimm_start_pat_bag( caller );

    /*}}}*/
    return mov_div;
};
/*}}}*/
/*_ pat_bag9_grab_item_is_mov_div {{{*/
let pat_bag9_grab_item_is_mov_div = function()
{
    return (onWork_EL == mov_div);

};
/*}}}*/
/*_ pat_bag9_grab_item_mov_div_is_showing {{{*/
let pat_bag9_grab_item_mov_div_is_showing = function()
{
    return (mov_div && (mov_div.style.display != "none"));
};
/*}}}*/
/*_ t_pat_bag9_get_bag_at_xy {{{*/
let t_pat_bag9_get_bag_at_xy = function(e,x,y)
{
    let bag;

    let hovering_or_neardering = e.shiftKey;

    if( hovering_or_neardering )
        bag =  t_pat_bag_mov_div_is_xy_hovering_bag(x, y, off_bag) ? off_bag
            :  t_pat_bag_mov_div_is_xy_hovering_bag(x, y, alt_bag) ? alt_bag
            :  t_pat_bag_mov_div_is_xy_hovering_bag(x, y, bak_bag) ? bak_bag
            :                                                        pat_bag
        ;
    else
        bag = pat_bag_mov_div_get_dst_near_xy(x, y);

    add_el_class(bag, (hovering_or_neardering ? t_data.CSS_HOVERING : t_data.CSS_NEARING));

/*{{{
logXXX("t_pat_bag9_get_bag_at_xy("+x+" , "+y+") ...return ["+bag.id+"]");
}}}*/
    return bag;
};
/*}}}*/
/*XXX pat_bag9_grab_item_mov_div_xy -OR- pat_bag_mov_div_get_dst_near_xy */
/*. pat_bag9_grab_item_mov_div_xy {{{*/
let pat_bag9_grab_item_mov_div_xy = function(e, div_x, div_y, bag_at_xy)
{
/*{{{*/
/*{{{
let caller = "pat_bag9_grab_item_mov_div_xy";
log(caller+"("+t_util.get_id_or_tag(bag_at_xy)+")");
console.dir(e)
console.dir("A "+onDown_ALT  )
console.dir("C "+onDown_CTRL )
console.dir("S "+onDown_SHIFT)
console.dir(bag_at_xy);
}}}*/
/*}}}*/
    let xy = get_event_XY(e);
    let  y = xy.y - pat_bag.offsetTop;
    if(pat_bag.scale) y /= pat_bag.scale;

/*{{{
logXXX("pat_bag.scale=["+pat_bag.scale+"]");
}}}*/
    y     -= onWork_EL.offsetHeight * (behavior_TOUCH_ELSE_DESKTOP ? TOUCH_OFFSET_FACTOR : MOUSE_OFFSET_FACTOR);
    let at_bag_top
        =  (bag_at_xy != pat_bag)
        && (  Math.abs(    y - bag_at_xy.offsetTop                             )
            < Math.abs(        bag_at_xy.offsetTop + bag_at_xy.offsetHeight - y))
    ;
    /* t_pat_bag_hover_div_accept .. (mov_pat_span TO mov_dst_div) {{{*/
    if     (bag_at_xy == bak_bag) t_pat_bag_hover_div_accept( bak_bag, at_bag_top);
    else if(bag_at_xy == alt_bag) t_pat_bag_hover_div_accept( alt_bag, at_bag_top);
    else if(bag_at_xy == off_bag) t_pat_bag_hover_div_accept( off_bag, at_bag_top);
    else if(bag_at_xy == pat_bag) t_pat_bag_hover_div_accept( pat_bag            );
    else                          t_pat_bag_hover_div_accept( mov_src_div        );

/*{{{
    let pattern = t_pat_get_el_data_pattern( mov_div.firstElementChild );
    if     ((bag_at_xy == pat_bag)) log(" t_util.csv_contains(pat_csv, ["+pattern+"])"+ t_util.csv_contains(pat_csv, pattern));
    else if((bag_at_xy == bak_bag)) log(" t_util.csv_contains(bak_csv, ["+pattern+"])"+ t_util.csv_contains(bak_csv, pattern));
    else if((bag_at_xy == off_bag)) log(" t_util.csv_contains(off_csv, ["+pattern+"])"+ t_util.csv_contains(off_csv, pattern));
}}}*/
    /*}}}*/
    /* HOVERING or NEARING .. [pat_bag off_bag bak_bag] {{{*/
/*
/\(add\|del\)_el_class.*\(pat\|off\|bak\)_\(bag\|div\)
*/
    /* neutralize all */
    let el;
    el = pat_bag; del_el_class(el, t_data.CSS_HOVERING); del_el_class(el, t_data.CSS_NEARING); del_el_class(el, t_data.CSS_DIMMED);
    el = bak_bag; del_el_class(el, t_data.CSS_HOVERING); del_el_class(el, t_data.CSS_NEARING); del_el_class(el, t_data.CSS_DIMMED);
    el = alt_bag; del_el_class(el, t_data.CSS_HOVERING); del_el_class(el, t_data.CSS_NEARING); del_el_class(el, t_data.CSS_DIMMED);
    el = off_bag; del_el_class(el, t_data.CSS_HOVERING); del_el_class(el, t_data.CSS_NEARING); del_el_class(el, t_data.CSS_DIMMED);

    /* highlight dst */
    del_el_class(mov_dst_div, t_data.CSS_DIMMED);
    if(mov_dst_div != mov_src_div) {
        let hovering_or_nearing = onDown_SHIFT;
        add_el_class( mov_dst_div, (hovering_or_nearing ? t_data.CSS_HOVERING : t_data.CSS_NEARING));
        del_el_class( mov_div                           , CSS_GRAYED_OUT);
    }
    else {
        add_el_class( mov_div                           , CSS_GRAYED_OUT);
    }

    /* dimm others */
/*
    if(mov_dst_div != pat_bag) add_el_class(pat_bag, t_data.CSS_DIMMED);
    if(mov_dst_div != off_bag) add_el_class(off_bag, t_data.CSS_DIMMED);
    if(mov_dst_div != bak_bag) add_el_class(bak_bag, t_data.CSS_DIMMED);
*/
    /* dimm source */
    if     (mov_src_div == pat_bag) add_el_class(pat_bag, t_data.CSS_DIMMED);
    else if(mov_src_div == off_bag) add_el_class(off_bag, t_data.CSS_DIMMED);
    else if(mov_src_div == alt_bag) add_el_class(alt_bag, t_data.CSS_DIMMED);
    else if(mov_src_div == bak_bag) add_el_class(bak_bag, t_data.CSS_DIMMED);

    /*}}}*/
    /* HIGHLIGHT [mov_x mov_y] {{{*/
    let mov_L = mov_pat_span.lastChild.offsetLeft;
    let mov_T = mov_pat_span.lastChild.offsetTop ;

    let bag_x = (bag_at_xy == pat_bag) ? 0 : bag_at_xy.offsetLeft;
    let bag_y = (bag_at_xy == pat_bag) ? 0 : bag_at_xy.offsetTop ;

    let mov_A = (bag_at_xy == mov_src_div)/*&& (bag_at_xy.style.position != "absolute")*/;

    let mov_x = mov_A ? mov_L : bag_x + mov_L;
    let mov_y = mov_A ? mov_T : bag_y + mov_T;

    t_show_hov_1(mov_x, mov_y);
    t_show_hov_2(mov_x + mov_pat_span.lastChild.offsetWidth, mov_y + mov_pat_span.lastChild.offsetHeight);
    /*}}}*/
    /* DRAG [mov_div] {{{*/

    let dx   = 1.0 * (div_x - mov_x);
    let dy   = 1.0 * (div_y - mov_y);
    let left = mov_x + dx;
    let top  = mov_y + dy;

    mov_div.style.left = left +"px";
    mov_div.style.top  = top  +"px";
    /*}}}*/
};
/*}}}*/
/*_ pat_bag9_grab_item_mov_div_drop {{{*/
let pat_bag9_grab_item_mov_div_drop = function()
{
/*{{{*/
let   caller = "pat_bag9_grab_item_mov_div_drop";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT || LOG_MAP.EV2_MOVE;

if( log_this) t_fly.t_log_event_status(caller, lf4);
/*}}}*/
    /* DIM BG (undisplay) {{{*/
    dimm_stop(caller);

    /*}}}*/
    /* HIDE [mov_div] {{{*/
    mov_div.style.display = "none";

    mov_div.innerHTML     = "";
    t_pat_bag_set_moving_item_label(mov_div.innerHTML);

    /*}}}*/
    /* [mov_src_div] [mov_dst_div] [mov_src] {{{*/
/*{{{
    if( has_el_class(mov_src_div, CSS_MOV_SRC))
    {
        let                  elements        = mov_src_div.getElementsByTagName("EM");
        for(let i=0; i <     elements.length ; ++i) {
            if( has_el_class(elements[i]     , CSS_MOV_SRC) )
                del_el_class(elements[i]     , CSS_MOV_SRC);
        }

        del_el_class(mov_src_div, CSS_MOV_SRC);
    }
}}}*/
    del_el_class(pat_bag     , CSS_MOV_SRC);
    del_el_class(off_bag     , CSS_MOV_SRC);
    del_el_class(alt_bag     , CSS_MOV_SRC);
    del_el_class(bak_bag     , CSS_MOV_SRC);
    del_el_class(mov_pat_span, CSS_MOV_SRC);

del_el_class(mov_pat_span, "moving");
    mov_pat_span = null;
    mov_src_div  = null;
    mov_dst_div  = null;
    /*}}}*/
    /* t_hide_hov {{{*/
    t_hide_hov();

    /*}}}*/
    /* [moving] [hovering] [dimmed] {{{*/
    del_el_class(mov_div, CSS_MOVING);

    del_el_class(bak_bag, t_data.CSS_HOVERING); del_el_class(bak_bag, t_data.CSS_NEARING); del_el_class(bak_bag, t_data.CSS_DIMMED);
    del_el_class(alt_bag, t_data.CSS_HOVERING); del_el_class(alt_bag, t_data.CSS_NEARING); del_el_class(alt_bag, t_data.CSS_DIMMED);
    del_el_class(off_bag, t_data.CSS_HOVERING); del_el_class(off_bag, t_data.CSS_NEARING); del_el_class(off_bag, t_data.CSS_DIMMED);
    del_el_class(pat_bag, t_data.CSS_HOVERING); del_el_class(pat_bag, t_data.CSS_NEARING); del_el_class(pat_bag, t_data.CSS_DIMMED);

    /*}}}*/
    t_pat_bag_open_or_close(caller);
};
/*}}}*/
/*_ t_pat_bag9_move_pattern_from_src_to_dst_div {{{*/
let t_pat_bag9_move_pattern_from_src_to_dst_div = function()
{
/*
log("t_pat_bag9_move_pattern_from_src_to_dst_div:");
log(". mov_div.firstElementChild.title...["+mov_div.firstElementChild.title+"]");
*/

    let ccX
        = (mov_dst_div == pat_bag) ? "cc1"
        : (mov_dst_div == off_bag) ? "cc5"
        : (mov_dst_div == bak_bag) ? "cc2"
        : (mov_dst_div == alt_bag) ? "cc6"
        : "";

    let mov_pattern = t_pat_get_el_data_pattern( mov_div.firstElementChild );

    let moving_action
        = " MOVING <em class='cc9'>"    +            mov_pattern   +"</em>"
        +   " FROM <em class='"+ccX+"'>"+ get_n_lbl( mov_src_div ) +"</em>"
        +     " TO <em class='"+ccX+"'>"+ get_n_lbl( mov_dst_div ) +"</em>"
    ;
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_log_stage_msg(t_fly.STAGE_2_ACTION, moving_action);

    let msg = "MOVING";
    switch(mov_dst_div) {
        case pat_bag: msg = t_data.SYMBOL_SEL +" <em class='"+ccX+"'>"+mov_pattern+"</em>"; t_pat_bag1_slot_pattern(mov_pattern, msg); break;
        case off_bag: msg = t_data.SYMBOL_HID +" <em class='"+ccX+"'>"+mov_pattern+"</em>"; t_pat_bag1_hide_pattern(mov_pattern, msg); break;
        case alt_bag: msg = t_data.SYMBOL_ALT +" <em class='"+ccX+"'>"+mov_pattern+"</em>"; t_pat_bag1_alt_pattern (mov_pattern, msg); break;
        case bak_bag: msg = t_data.SYMBOL_BAK +" <em class='"+ccX+"'>"+mov_pattern+"</em>"; t_pat_bag1_back_pattern(mov_pattern, msg); break;
    }

    t_pat_bag_minHeight_clear("t_pat_bag9_move_pattern_from_src_to_dst_div");

    /* UPDATE TITLE AND TOOLTIP */
    set_bag_rot_title( msg );

    return moving_action;
};
/*}}}*/
/*}}}*/
/* PAT CSV ORDER {{{*/
/*_ t_are_sel_sorted {{{*/
let t_are_sel_sorted = function()
{
    if(          !sel_csv      ) return false;
    if(t_util.csv_count( sel_csv ) < 2) return false;

    let    csv = t_util.csv_sort( sel_csv );
    return csv ==          sel_csv;
};
/*}}}*/
/*_ t_are_sel_reversed {{{*/
let t_are_sel_reversed = function()
{
    if(          !sel_csv      ) return false;
    if(t_util.csv_count( sel_csv ) < 2) return false;

    let    csv = t_util.csv_reverse( sel_csv );
    return csv ==             sel_csv;
};
/*}}}*/
/*}}}*/
/* PAT CSV MOVE {{{*/
/*_ csv_pattern_mov_to_pat {{{*/
let csv_pattern_mov_to_pat = function(pattern)
{
/*{{{*/
let caller = "csv_pattern_mov_to_pat";
let log_this = LOG_MAP.S0_PATTERN;

/*}}}*/
    off_csv = csv_pattern_del_from_bag(off_csv, pattern);
    alt_csv = csv_pattern_del_from_bag(alt_csv, pattern);
    bak_csv = csv_pattern_del_from_bag(bak_csv, pattern);
    bin_csv = csv_pattern_del_from_bag(bin_csv, pattern);
    if(t_util.csv_count(pat_csv) < t_select.SELECT_SLOT_MAX) {
        pat_csv = csv_pattern_add_into_bag(pat_csv, pattern, true); /* append_or_insert */
    }
    else {
if(log_this) log("%c"+caller+"("+pattern+") %c overflow into %c alt_csv]", lbL+lf4, lbC, lbR+lf6);
        csv_pattern_mov_to_alt(pattern);
    }
if(log_this) pattern_log_bag_csv(caller+"("+pattern+")");
};
/*}}}*/
/*_ csv_pattern_mov_to_off {{{*/
let csv_pattern_mov_to_off = function(pattern)
{
/*{{{*/
let caller = "csv_pattern_mov_to_off";
let log_this = LOG_MAP.S0_PATTERN;

/*}}}*/
    let by_user =  (mov_dst_div != null) ;
    alt_csv = csv_pattern_del_from_bag(alt_csv, pattern);
    bak_csv = csv_pattern_del_from_bag(bak_csv, pattern);
    bin_csv = csv_pattern_del_from_bag(bin_csv, pattern);
/*  pat_csv = csv_pattern_del_from_bag(pat_csv, pattern); .. leave off pattern in pat_csv as a subset */
    if(t_util.csv_count(pat_csv) < t_select.SELECT_SLOT_MAX) {
        off_csv = csv_pattern_add_into_bag(off_csv, pattern, by_user); /* insert .. (at the top) */
    }
    else {
if(log_this) log("%c"+caller+"("+pattern+") %c overflow into %c alt_csv]", lbL+lf5, lbC, lbR+lf6);
        csv_pattern_mov_to_alt(pattern);
    }
if(log_this) pattern_log_bag_csv(caller+"("+pattern+")");
};
/*}}}*/
/*_ csv_pattern_mov_to_alt {{{*/
let csv_pattern_mov_to_alt = function(pattern)
{
/*{{{*/
let caller = "csv_pattern_mov_to_alt";
let log_this = LOG_MAP.S0_PATTERN;

/*}}}*/
    pat_csv = csv_pattern_del_from_bag(pat_csv, pattern);
    off_csv = csv_pattern_del_from_bag(off_csv, pattern);
    bak_csv = csv_pattern_del_from_bag(bak_csv, pattern);
    bin_csv = csv_pattern_del_from_bag(bin_csv, pattern);
    if(t_util.csv_count(alt_csv) < t_select.SELECT_SLOT_MAX) {
        alt_csv = csv_pattern_add_into_bag(alt_csv, pattern);
    }
    else {
if(log_this) log("%c"+caller+"("+pattern+") %c overflow into %c bak_csv]", lbL+lf6, lbC, lbR+lf2);
        csv_pattern_mov_to_bak(pattern);
    }
if(log_this) pattern_log_bag_csv(caller+"("+pattern+")");
};
/*}}}*/
/*_ csv_pattern_mov_to_bak {{{*/
let csv_pattern_mov_to_bak = function(pattern)
{
/*{{{*/
let caller = "csv_pattern_mov_to_bak";
let log_this = LOG_MAP.S0_PATTERN;

/*}}}*/
    pat_csv = csv_pattern_del_from_bag(pat_csv, pattern);
    off_csv = csv_pattern_del_from_bag(off_csv, pattern);
    alt_csv = csv_pattern_del_from_bag(alt_csv, pattern);
    bin_csv = csv_pattern_del_from_bag(bin_csv, pattern);
    if(t_util.csv_count(bak_csv) < t_select.SELECT_SLOT_MAX) {
        bak_csv = csv_pattern_add_into_bag(bak_csv, pattern);
    }
    else {
if(log_this) log("%c"+caller+"("+pattern+") %c overflow into %c bin_csv]", lbL+lf2, lbC, lbR+lf0);
        csv_pattern_mov_to_bin(pattern);
    }
if(log_this) pattern_log_bag_csv(caller+"("+pattern+")");
};
/*}}}*/
/*_ csv_pattern_mov_to_bin {{{*/
let csv_pattern_mov_to_bin = function(pattern)
{
/*{{{*/
let caller = "csv_pattern_mov_to_bin";
let log_this = LOG_MAP.S0_PATTERN;

/*}}}*/
    pat_csv = csv_pattern_del_from_bag(pat_csv, pattern);
    off_csv = csv_pattern_del_from_bag(off_csv, pattern);
    alt_csv = csv_pattern_del_from_bag(alt_csv, pattern);
    bak_csv = csv_pattern_del_from_bag(bak_csv, pattern);
/*{{{
    bin_csv = csv_pattern_add_into_bag(bin_csv, pattern);
}}}*/
    bin_csv = t_util.csv_add(bin_csv, pattern);
if(log_this) log("%c "+caller+"("+pattern+") %c t_util.csv_count(bin_csv)=["+t_util.csv_count(bin_csv)+"]%c["+bin_csv+"]", lbL+lf0, lbR+lf0, lf8);
if(log_this) pattern_log_bag_csv(caller+"("+pattern+")");
};
/*}}}*/

/*_ csv_pattern_del_from_bag {{{*/
let csv_pattern_del_from_bag = function(csv,pattern)
{
/*{{{*/
let   caller = "csv_pattern_del_from_bag";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

    let result = t_util.csv_del(csv, pattern);
if(log_this) {
    let l_n
        = (csv === pat_csv) ? lf4
        : (csv === off_csv) ? lf5
        : (csv === alt_csv) ? lf6
        : (csv === bak_csv) ? lf2
        : (csv === bin_csv) ? lf0
        :                     lf9
        ;

    let name
        = (csv === pat_csv) ? "pat_csv"
        : (csv === off_csv) ? "off_csv"
        : (csv === alt_csv) ? "alt_csv"
        : (csv === bak_csv) ? "bak_csv"
        : (csv === bin_csv) ? "bin_csv"
        :                     "XXX_csv"
        ;

    log(caller+"(%c"+name+"%c"+pattern+")%c"+ t_data.SYMBOL_RIGHT_ARROW+"%c"+result
        ,        lbL+l_n  ,lbR+l_n      ,lbA                     ,l_n+lbH   );
}
/*}}}*/
    return result;
};
/*}}}*/
/*_ csv_pattern_add_into_bag {{{*/
let csv_pattern_add_into_bag = function(bag_csv, pattern, append_or_insert)
{
/*{{{*/
let   caller = "csv_pattern_add_into_bag";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

/*}}}*/
    /* moving in same bag .. f(mov_dst_div) {{{*/
    let moving
        =                    mov_dst_div
        && (   ((pat_bag === mov_dst_div) && (bag_csv === pat_csv))     /* user */
            || ((off_bag === mov_dst_div) && (bag_csv === off_csv))     /* drag */
            || ((alt_bag === mov_dst_div) && (bag_csv === alt_csv))     /* to   */
            || ((bak_bag === mov_dst_div) && (bag_csv === bak_csv)))    /* bag  */
        &&                t_util.csv_contains(bag_csv,      pattern)    /* from-to same bag */
    ;

    /*}}}*/
    /* to top or bottom .. (insert or append) {{{*/
    if(typeof append_or_insert == "undefined")
        append_or_insert
            =  !mov_dst_div                                             /* not by user    */
            || !mov_dst_div.at_bag_top                                  /* not by request */
    ;

    /*}}}*/
/*{{{*/
if(log_this) {
    let l_n
        = (bag_csv === pat_csv) ? lf4
        : (bag_csv === off_csv) ? lf5
        : (bag_csv === bak_csv) ? lf2
        : (bag_csv === alt_csv) ? lf6
        : (bag_csv === bin_csv) ? lf0
        :                     lf9
    ;

    let bag_name
        = (bag_csv === pat_csv) ? "pat_csv"
        : (bag_csv === off_csv) ? "off_csv"
        : (bag_csv === bak_csv) ? "bak_csv"
        : (bag_csv === alt_csv) ? "alt_csv"
        : (bag_csv === bin_csv) ? "bin_csv"
        :                         "XXX_csv"
    ;

    let action
        = moving ? (append_or_insert ? "MOVE TO END" : "MOVE TO START")
        :          (append_or_insert ?      "APPEND" : "INSERT"       )
    ;

    let l_t
        =  (mov_dst_div)    ? lf9
        :                     lf8
    ;

    log("%c"+caller+"%c"+pattern+"%c"+bag_name+"%c"+action
        ,lbH        ,lbL+lf9     ,l_n+lbR      ,l_t+lbH   );
}
/*}}}*/
    /* when moving .. remove from current position {{{*/
    if( moving ) {
        bag_csv    = t_util.csv_del(bag_csv, pattern);
    }

    /*}}}*/
    /* append or prepend == bottom or top {{{*/
    bag_csv        = (append_or_insert ? t_util.csv_add : t_util.csv_ins) (bag_csv, pattern);

    /*}}}*/
    return bag_csv;
};
/*}}}*/

/*}}}*/
/* PAT STORE {{{*/
/*{{{*/
let STORE_PATTERNS_CSV_DELAY = 2000;
let t_store_patterns_timer;
/*}}}*/
/*_ t_onPatternUpdate_done {{{*/
let t_onPatternUpdate_done = function()
{
/*{{{*/
let caller   = "t_onPatternUpdate_done";
let log_this = DOM_TOOLS_LOG || LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;
let tag_this = DOM_TOOLS_TAG || log_this;

if( log_this ) log(caller);
/*}}}*/
    if( t_just_loaded(caller, PREVENT_RELOAD_DELAY, tag_this) ) return;

    t_store_consider_page_items_worth_storing("SELECTION UPDATE");

    t_clear_slot_sync_cancel();

    t_store_patterns_csv();
    wording_3_CB_WORDS_RECYCLE_SYNC_NOW("PATTERNS UPDATED");

    t_pat_bag_open_or_close(caller);

    t_pat_bag_status();

    t_seek.t_seeker_sync_SEL_BACK  ( caller );
    t_sync_tool_clones_state( caller );
    t_sync_pat_buttons( caller );
};
/*}}}*/
/*_ t_store_get_patterns_csv  {{{*/
let t_store_get_patterns_csv = function()
{
/*{{{
    id = "sel_csv"; sel_csv = t_store.t_store_getItem(id) || "";
    id = "pat_csv"; pat_csv = t_store.t_store_getItem(id) || "";
    id = "off_csv"; off_csv = t_store.t_store_getItem(id) || "";
    id = "bak_csv"; bak_csv = t_store.t_store_getItem(id) || "";
    id = "alt_csv"; alt_csv = t_store.t_store_getItem(id) || "";
}}}*/
    let key, arr;

    try {
    key = "sel_arr"; arr = t_store.t_store_getItem(key); sel_csv = (arr == null) ? "" : JSON.parse(arr).join(",");
    key = "pat_arr"; arr = t_store.t_store_getItem(key); pat_csv = (arr == null) ? "" : JSON.parse(arr).join(",");
    key = "off_arr"; arr = t_store.t_store_getItem(key); off_csv = (arr == null) ? "" : JSON.parse(arr).join(",");
    key = "alt_arr"; arr = t_store.t_store_getItem(key); alt_csv = (arr == null) ? "" : JSON.parse(arr).join(",");
    key = "bak_arr"; arr = t_store.t_store_getItem(key); bak_csv = (arr == null) ? "" : JSON.parse(arr).join(",");
    key = "bin_arr"; arr = t_store.t_store_getItem(key); bin_csv = (arr == null) ? "" : JSON.parse(arr).join(",");
    }
    catch(ex) {
        let msg
            =    "*** "+ex
            +LF+ arr
            +LF+ "0123456789_123456789_123456789_123456789_123456789_123456789_"
            +LF+ "0_________1_________2_________3_________4_________5_________6";
        log("%c"+msg, lbF+lf2);
        t_fly.t_fly("<pre class='fg2'>"+ msg +"</pre>");
    }

    if(!pat_csv && (t_util.csv_count(off_csv)  > 0))
        pat_csv = off_csv;

    if( off_csv && (t_util.csv_count(off_csv) == t_util.csv_count(pat_csv)))
        off_csv = "";
};
/*}}}*/
/*_ t_store_patterns_csv {{{*/
let t_store_patterns_csv = function(delay=STORE_PATTERNS_CSV_DELAY)
{
    if(t_store_patterns_timer) clearTimeout( t_store_patterns_timer);
    t_store_patterns_timer   =   setTimeout(   store_patterns_handler, STORE_PATTERNS_CSV_DELAY);
};
/*}}}*/
/*…   store_patterns_handler {{{*/
let   store_patterns_handler = function()
{
/*{{{*/
let   caller = "store_patterns_handler";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;

if( log_this) log("%c"+caller, lbF+lb7);
/*}}}*/
    t_store_patterns_timer = null;

    if(!t_store_consider_page_items_worth_storing("SELECTION UPDATE") ) return;

    /* SAVING PAGE PATTERNS */
    store_set_patterns_csv();

    /* UPDATE TITLE AND TOOLTIP */
    set_bag_rot_title("SAVING:");
};
/*}}}*/
/*…   store_set_patterns_csv {{{*/
let   store_set_patterns_csv = function()
{
    let arr;

    arr = sel_csv ? JSON.stringify(sel_csv.split(",")) : ""; t_store.t_store_set_value("sel_arr", arr);
    arr = pat_csv ? JSON.stringify(pat_csv.split(",")) : ""; t_store.t_store_set_value("pat_arr", arr);
    arr = off_csv ? JSON.stringify(off_csv.split(",")) : ""; t_store.t_store_set_value("off_arr", arr);
    arr = alt_csv ? JSON.stringify(alt_csv.split(",")) : ""; t_store.t_store_set_value("alt_arr", arr);
    arr = bak_csv ? JSON.stringify(bak_csv.split(",")) : ""; t_store.t_store_set_value("bak_arr", arr);
    arr = bin_csv ? JSON.stringify(bin_csv.split(",")) : ""; t_store.t_store_set_value("bin_arr", arr);

};
/*}}}*/
/*… t_store_del_patterns_csv {{{*/
let t_store_del_patterns_csv = function()
{
    t_store.t_store_set_value("sel_arr", "");
    t_store.t_store_set_value("pat_arr", "");
    t_store.t_store_set_value("off_arr", "");
    t_store.t_store_set_value("alt_arr", "");
    t_store.t_store_set_value("bak_arr", "");
    t_store.t_store_set_value("bin_arr", "");

};
/*}}}*/

/*_ t_store_consider_page_items_worth_storing {{{*/
/*{{{*/

let page_items_worth_storing;
/*}}}*/
let t_store_consider_page_items_worth_storing = function(reason)
{
/*{{{*/
let   caller = "t_store_consider_page_items_worth_storing";
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.T0_STORE;

if( log_this) log_caller();
/*}}}*/
    /* [curr_state] .. [t_data.WORDING] [SELECTION] [HIDDEN PANELS] {{{*/
    let has_document_wording_feature = is_a_DOM_LOAD_featured_function("t_store_patterns_csv");
    let pat_csv_count                = t_util.csv_count(pat_csv);
    let off_csv_count                = t_util.csv_count(off_csv);
    let alt_csv_count                = t_util.csv_count(alt_csv);
    let bak_csv_count                = t_util.csv_count(bak_csv);
/*{{{
    let has_pat_csv                  = has_document_wording_feature && (pat_csv_count > off_csv_count) ? pat_csv : "";
}}}*/
    let has_pat_csv                  = has_document_wording_feature                                    ? pat_csv : "";
    let has_off_csv                  = has_document_wording_feature                                    ? off_csv : "";
    let has_alt_csv                  = has_document_wording_feature                                    ? alt_csv : "";
    let has_bak_csv                  = has_document_wording_feature                                    ? bak_csv : "";
    let hid_csv_count                = t_hide.get_node_to_hide_csv_count();
    let sticky_count                 = t_sticky.t_sticky_GET_COUNT();
    let hotspot_EDITING              = has_el_class(hotspot, t_data.DOM_EDITING);
    let hotspot_in_gutter            = t_gutter.is_hotspot_IN(hotspot, "WORTH STORING");
    let curr_state
        = {   has_pat_csv
            , has_off_csv
            , has_alt_csv
            , has_bak_csv
            , hotspot_EDITING
            , hotspot_in_gutter : (hotspot_in_gutter ? "YES" : "NO")
            , pat_csv_count
            , off_csv_count
            , alt_csv_count
            , bak_csv_count
            , hid_csv_count
            , sticky_count
            , has_document_wording_feature
        };
    /*}}}*/
    /* RETURN IF UNCHANGED {{{*/
    let state_change = page_items_worth_storing ? t_page_item_get_state_change(curr_state) : "New evaluation";
    if(!state_change ) {
if( log_this) log("%c"+caller+"%c"+reason+"%c STORAGE UNCHANGED %c"+page_items_worth_storing, lbL+lf8, lbC+lf4, lbC+lf2, lbR+lf1);
/*{{{
log_caller();
}}}*/
        return page_items_worth_storing;
    }

    /*}}}*/
    /* [page_items_worth_storing] {{{*/
    let pat_s     = (pat_csv_count > 1) ? "s" : "";
    let off_s     = (off_csv_count > 1) ? "s" : "";
    let alt_s     = (alt_csv_count > 1) ? "s" : "";
    let bak_s     = (bak_csv_count > 1) ? "s" : "";
    let hid_s     = (hid_csv_count > 1) ? "s" : "";
    let sticky_s  = (sticky_count  > 1) ? "s" : "";
/*{{{
    let split_wot = prop.get( t_data.SPLIT_WOT );
}}}*/

    page_items_worth_storing
        =  has_pat_csv       ?            pat_csv_count     +" selection"    +pat_s+""+LF+   "in current bag ("+ "YELLOW)"+LF +t_util.strip_to_lines( pat_csv )
        :  has_off_csv       ?            off_csv_count     +" selection"    +off_s+""+LF+       "in off bag ("+  "GREEN)"+LF +t_util.strip_to_lines( off_csv )
        :  has_alt_csv       ?            alt_csv_count     +" selection"    +alt_s+""+LF+ "in alternate bag ("+   "BLUE)"+LF +t_util.strip_to_lines( alt_csv )
        :  has_bak_csv       ?            bak_csv_count     +" selection"    +bak_s+""+LF+    "in backup bag ("+    "RED)"+LF +t_util.strip_to_lines( bak_csv )
        :  hid_csv_count     ? "Hiding "+ hid_csv_count     +" Page Panel"   +hid_s
        :  sticky_count      ?            sticky_count      +" Personal Note"+sticky_s
/*      :  split_wot         ?            sticky_count      +" SPLIT WOT"    +split_wot */
        :  hotspot_EDITING   ? "Editing"
        : !hotspot_in_gutter ? t_i18n.i18n_get( t_i18n.MOVE_IN_GUTTER_TO_CLEAR_STORAGE )
        :                      ""
    ;

/*{{{*/
if( log_this) {
    log("page_items_worth_storing=["+page_items_worth_storing+"]");
/*{{{
    log("%c"+caller+"%c"+reason+"%c"+state_change, lbL+lf7, lbC+lf4, lbR+lf3);
}}}*/
    log_key_val( "curr_state .. "+reason+" .. "+state_change
                , curr_state
                , lf8
               );
}
/*}}}*/
    /*}}}*/

    if(hotspot_c) hotspot_c.innerHTML = sticky_count ? "<span>"+sticky_count+"</span>" : "";

    /* STORE ... (or not) {{{*/
    if(!page_items_worth_storing )
        t_store.t_store_remove_shared_items("NO PAGE ITEMS WORTH STORING");

    else if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG))
        t_fly.t_fly_observerCB( page_items_worth_storing );

/*{{{
    if(!t_store.t_store_has_some_page_keys())
        t_store.t_store_remove_all_site_items("NO PAGE KEYS");
}}}*/

    t_store_show_all_page_items_removed();
    /*}}}*/
    return page_items_worth_storing;
};
/*}}}*/
/*_ t_page_item_get_state_change {{{*/
let prev_state;

let t_page_item_get_state_change = function(curr_state)
{
/*{{{
t_log.console_dir("curr_state", curr_state);
let s = log_key_val("t_page_item_get_state_change", curr_state, lf7);
}}}*/
    if(!prev_state) {
        prev_state = curr_state;
        return "";
    }
    let state_change = "";
    Object.keys(curr_state).forEach(
        function(key) {
            let c_v  = curr_state[key];
            let p_v  = prev_state[key];
/*{{{
log(key+": %c from ["+p_v+"] %c to ["+c_v+"]", lbC+lf5, lbR+lf6);
}}}*/
            if( c_v != p_v)
            {
                prev_state = curr_state;
                state_change += (state_change ? LF : "")+ key +" changed from ["+p_v+"] to ["+c_v+"]";
            }
        }
    );
    return state_change;
};
/*}}}*/
/*_ t_store_show_all_page_items_removed {{{*/
/*{{{*/
const CSS_PAGE_ITEMS_ALL_REMOVED   = "page_items_all_removed";
const CSS_PAGE_ITEMS_HAS_PAT_CSV   = "page_items_has_pat_csv";
const CSS_PAGE_ITEMS_HAS_BAK_CSV   = "page_items_has_bak_csv";
const CSS_PAGE_ITEMS_HAS_ALT_CSV   = "page_items_has_alt_csv";
const CSS_PAGE_ITEMS_HIDDEN_PANELS = "page_items_hidden_panels";
const CSS_PAGE_ITEMS_OFF_GUTTER    = "page_items_off_gutter";
const CSS_PAGE_ITEMS_ARRAY
    = [   CSS_PAGE_ITEMS_ALL_REMOVED
        , CSS_PAGE_ITEMS_HAS_PAT_CSV
        , CSS_PAGE_ITEMS_HAS_BAK_CSV
        , CSS_PAGE_ITEMS_HAS_ALT_CSV
        , CSS_PAGE_ITEMS_HIDDEN_PANELS
        , CSS_PAGE_ITEMS_OFF_GUTTER
    ];

/*}}}*/
let t_store_show_all_page_items_removed = function()
{
    /* PREVIOUS STATE */
    let previously_all_removed
        = has_el_class(hotring, CSS_PAGE_ITEMS_ALL_REMOVED);

    /* UPDATE TITLE */
    if( hotring )
        hotring.title
            =  page_items_worth_storing
            ?  page_items_worth_storing
            :  t_i18n.i18n_get( t_i18n.ALL_PAGE_LOCAL_STORAGE_REMOVED)
    ;

    /* UPDATE STATE */
    let s
        = page_items_worth_storing ? t_util.strip_CR_LF(page_items_worth_storing.toLowerCase()) : "";

    let hotspot_class
        = !s                      ? CSS_PAGE_ITEMS_ALL_REMOVED
        :  s.includes("green"   ) ? CSS_PAGE_ITEMS_HAS_PAT_CSV
        :  s.includes("red"     ) ? CSS_PAGE_ITEMS_HAS_BAK_CSV
        :  s.includes("blue"    ) ? CSS_PAGE_ITEMS_HAS_ALT_CSV
        :  s.includes("hiding"  ) ? CSS_PAGE_ITEMS_HIDDEN_PANELS
        :  s.includes("stor"    ) ? CSS_PAGE_ITEMS_OFF_GUTTER
        :                           ""
        ;
/*{{{
log("%c t_store_show_all_page_items_removed %c"+s+"%c"+hotspot_class+"]", lbL, lbC+lf3, lbR+lf4);
}}}*/

    set_el_class_removing(hotspot, hotspot_class  , CSS_PAGE_ITEMS_ARRAY);
    set_el_class_removing(hotring, hotspot_class  , CSS_PAGE_ITEMS_ARRAY);

    /* UPDATE STORAGE */
    if(previously_all_removed && page_items_worth_storing)
        t_tools_save_all_settings(); };

/*}}}*/

/*}}}*/

/*
/\v<(sel|pat|off|alt|bak)_csv>
*/
/*➔ t_pattern1_sync_csv_from_ccs {{{*/
let t_pattern1_sync_csv_from_ccs = function()
{
/*{{{*/
let   caller = "t_pattern1_sync_csv_from_ccs";
let log_this = LOG_MAP.S0_PATTERN;

if( log_this) logBIG(caller, lf4);
if( log_this) pattern_log_bag_csv(caller);
/*}}}*/
/* NOTE {{{
 * [pat_bag] contains [off_bag content]
 * [sel_bag] contains [pat_bag entries]     that are [not in off_bag]
 *                    [any bag entries] removed from [all other bags]
}}}*/
    /* t_select.ccs[] .. TO (sel_csv pat_csv) {{{*/
    let old_pat_csv = pat_csv;
    let old_off_csv = off_csv;

    set_sel_csv("");
    set_pat_csv("");
    set_off_csv("");

if( log_this) pattern_log_bag_csv("XXX");
    for(let slot = 1; slot <= t_select.SELECT_SLOT_MAX; ++slot)
    {
        if(           t_select.ccs[slot]
            &&        t_select.ccs[slot].nodes[0]
            &&        t_select.ccs[slot].nodes[0].textContent
        ) {
/*{{{
            let pat     = t_select.ccs[slot].pattern;
}}}*/
            let pat = t_select.ccs[slot].pattern;
            let w_o = t_select.ccs[slot].words_option;

            pat     = pattern_fallback_to_current_words_option_sfx(pat, w_o);

            csv_pattern_mov_to_pat( pat );
            add_sel_csv           ( pat );
        }
    }
if( log_this) pattern_log_bag_csv("...from [CCS] to [SEL and PAT]");
    /*}}}*/
    /* [old_pat] .. [pat..slotted] [off..not slotted] [bak..overflow] {{{*/
    let old_pat_count = t_util.csv_count( old_pat_csv );
    for(let       pos = 1; pos <=  old_pat_count; ++pos) {
        let       pat = t_util.csv_get(   old_pat_csv  ,   pos);

        if(!t_util.csv_contains(pat_csv, pat) )
            csv_pattern_mov_to_off(pat);
    }

if( log_this) pattern_log_bag_csv("...from [old_pat_csv] to [OFF]");
    /*}}}*/
    /* [old_off] .. [off..not slotted] [bak..overflow] {{{*/
    let old_off_count = t_util.csv_count( old_off_csv );
    for(let       pos = 1; pos <=  old_off_count; ++pos) {
        let       pat = t_util.csv_get(   old_off_csv  ,   pos);

        if(!t_util.csv_contains(pat_csv, pat) ) /* still not selected */
            csv_pattern_mov_to_off(pat);
    }

if( log_this) pattern_log_bag_csv("...from [old_off_csv] to [OFF]");
    /*}}}*/
};
/*}}}*/
/*➔ t_pattern2_set_sel_bag_innerHTML {{{*/
let t_pattern2_set_sel_bag_innerHTML = function()
{
    let caller = "t_pattern2_set_sel_bag_innerHTML";
let log_this = LOG_MAP.S3_SLOT;

    if(!sel_bag) return;
    let sel_bag_innerHTML = "";

    for(let slot = 1; slot < t_select.ccs.length; ++slot) {
        if(       t_select.ccs[slot]
            &&    t_select.ccs[slot].nodes[0]
            &&    t_select.ccs[slot].nodes[0].textContent
        ) {
            sel_bag_innerHTML += get_sel_bag_pat_div(slot);
        }
    }

    if(sel_bag_innerHTML)
        sel_bag_innerHTML = "<span class='seeker_handle left'></span>"+ sel_bag_innerHTML;

if(log_this) log("%c "+caller+": sel_bag_innerHTML:%c<br>"+sel_bag_innerHTML, lbF+lb1, lb1);

    t_select.remove_pat_span_from_div( sel_bag );
    sel_bag.insertAdjacentHTML("beforeend", sel_bag_innerHTML);
};
/*}}}*/
/*➔ t_pattern2_get_sel_bag_thumbs_EM {{{*/
const BAG_MAX_ELLIPSIS      = 7;
const BAG_MIN_ELLIPSIS      = Math.ceil(BAG_MAX_ELLIPSIS / 3);
let t_pattern2_get_sel_bag_thumbs_EM = function(slot, id_prefix)
{
    if(!t_select.ccs[slot]) return "";

    let thumbs_line = "";
    let       count = t_select.ccs[slot].nodes.length;

    for(let num = 1; num <= count; ++num)
    {
        /* ... before and after center-t_util.ellipsis */
        if(    (        count <= BAG_MAX_ELLIPSIS )
            || (num <=           BAG_MIN_ELLIPSIS )
            || (num >= (count -  BAG_MIN_ELLIPSIS))
        ) {
            thumbs_line
                += "<em        id='"+id_prefix+"_" +slot  +"_"+ num  +"'"
                +  " data-thumb_p='"+ t_select.ccs[slot].get_num_thumb_p(num) +"'"
/*{{{
                +  "        title='"+                             title      +"'"
}}}*/
                +  ">"+                                        String(num)   +"</em>"
            ;
        }
        /* insert a center t_util.ellipsis */
        else if(num  == (BAG_MIN_ELLIPSIS+1)) {
            thumbs_line
                += "<em        id='"+id_prefix+"_"+slot+"_0'"
                +  " data-thumb_p=''"
                +  "        class='t_util.ellipsis'"
                +  "        title='"+t_data.SYMBOL_E+"'"
                +  ">"+              t_data.SYMBOL_E +"</em>"
            ;
        }
    }

    return thumbs_line;
};
/*}}}*/
/*_   pattern_log_bag_csv {{{*/
let   pattern_log_bag_csv = function(_caller="")
{
    log("%c"+_caller+" %c CSV... %c"+t_data.SYMBOL_MENU, lbL, lbR, lbb+lf9);
    log("%c sel_csv %c"+t_util.csv_count( sel_csv )+"%c"+sel_csv, lbH+lf9, lbL+lf9, lbR+lf9);
    log("%c pat_csv %c"+t_util.csv_count( pat_csv )+"%c"+pat_csv, lbH+lf4, lbL+lf4, lbR+lf4);
    log("%c off_csv %c"+t_util.csv_count( off_csv )+"%c"+off_csv, lbH+lf5, lbL+lf5, lbR+lf5);
    log("%c alt_csv %c"+t_util.csv_count( alt_csv )+"%c"+alt_csv, lbH+lf6, lbL+lf6, lbR+lf6);
    log("%c bak_csv %c"+t_util.csv_count( bak_csv )+"%c"+bak_csv, lbH+lf2, lbL+lf2, lbR+lf2);
    log("%c bin_csv %c"+t_util.csv_count( bin_csv )+"%c"+bin_csv, lbH+lf0, lbL+lf0, lbR+lf0);
/*{{{
    log_caller();
}}}*/
};
/*}}}*/
/*➔ t_pattern3_pat_off_alt_bak_innerHTML {{{*/
/*{{{*/

let pat_spans=[];

let pat_bag_innerHTML;
let off_bag_innerHTML;
let bak_bag_innerHTML;
let alt_bag_innerHTML;

let pat_moved_to_count;
let pat_inserted_count;
let pat_asserted_count;

let off_moved_to_count;
let off_inserted_count;
let off_asserted_count;

let alt_moved_to_count;
let alt_inserted_count;
let alt_asserted_count;

let bak_moved_to_count;
let bak_inserted_count;
let bak_asserted_count;

let bin_moved_to_count;

/*}}}*/
let t_pattern3_pat_off_alt_bak_innerHTML = function(_caller)
{
/*{{{*/
let   caller = "t_pattern3_pat_off_alt_bak_innerHTML";
let log_this = LOG_MAP.S0_PATTERN;

if( log_this) logBIG(caller, lf4);
if( log_this) pattern_log_bag_csv(caller);
/*}}}*/
/* BAG TOOLS {{{*/
    if(!pat_bag) return;

    let pat_bag_is_opened = has_el_class( pat_bag, "open_bag");
/*}}}*/
    /* COLLECT [pat_spans] {{{*/
/*
<span class="pat_span"><em class="num_em">&nbsp;num</em>&nbsp;<em title="pat" class="cc1 ">txt</em></span>
<span.................><em......................num..em>......<em........pat...............txt..em><.span>
................................................num......................pat...............txt............
*/
    pat_spans=[];
    let pat_count = t_select.t_collect_el_class_from_into("pat_span", pat_bag, pat_spans);
    let off_count = t_select.t_collect_el_class_from_into("pat_span", off_bag, pat_spans);
    let bak_count = t_select.t_collect_el_class_from_into("pat_span", bak_bag, pat_spans);
    let alt_count = t_select.t_collect_el_class_from_into("pat_span", alt_bag, pat_spans);

if(log_this) for(let i=0; i < pat_spans.length; ++i) log((i+1)+" %c["+pat_spans[i].innerText+"]", lbF+lbX[(i+1) % 10]);

    /*}}}*/
    /* INIT .. (bags and count) {{{*/

    pat_bag_innerHTML = "";
    off_bag_innerHTML = "";
    bak_bag_innerHTML = "";
    alt_bag_innerHTML = "";

    pat_moved_to_count = 0;
    pat_inserted_count = 0;
    pat_asserted_count = 0;
    off_moved_to_count = 0;
    off_inserted_count = 0;
    off_asserted_count = 0;

    alt_moved_to_count = 0;
    alt_inserted_count = 0;
    alt_asserted_count = 0;

    bak_moved_to_count = 0;
    bak_inserted_count = 0;
    bak_asserted_count = 0;

    bin_moved_to_count = 0;

    /*}}}*/
    pattern4_bin_remove_all_trashed_pat_spans();
    pattern5_bak_innerHTML();
    pattern6_alt_innerHTML();
    pattern7_pat_csv_to_bag();
    pattern8_off_bak_innerHTML(); /* .. move any remaining [pat_span] into [bak_bag] */
    pattern9_adjust_pat_span_num();
    /* LOG {{{*/
    if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG))
    {
        let log_msg = "";

        /* PANEL OPEN / CLOSED */
        log_msg += "<em class='cc"+(pat_bag_is_opened ? 9 : 8)+"'>PANEL "+(pat_bag_is_opened ? "OPENED" : "CLOSED")+"</em> ";

        /* BAGS */

        log_msg                   += "<br>"+ t_data.SYMBOL_BAGGER+" <em class='done cc1'>HAVE</em>";

        if(!pat_count && !off_count && !alt_count && !bak_count) {
            log_msg               +=     " ALL BAGS EMPTY";
        }
        else {
            if(pat_count) log_msg += " <em class='bags cc1'>pat "+pat_count /*+" "+ SYMBOL_PAT_BAG*/ +"</em>";
            if(off_count) log_msg += " <em class='bags cc5'>off "+off_count /*+" "+ SYMBOL_OFF_BAG*/ +"</em>";
            if(alt_count) log_msg += " <em class='bags cc2'>alt "+bak_count /*+" "+ SYMBOL_ALT_BAG*/ +"</em>";
            if(bak_count) log_msg += " <em class='bags cc2'>bak "+bak_count /*+" "+ SYMBOL_BAK_BAG*/ +"</em>";
        }

        log_msg += t_select.t_get_docker_bag_msg("pat", pat_moved_to_count, pat_asserted_count, pat_inserted_count);
        log_msg += t_select.t_get_docker_bag_msg("off", off_moved_to_count, off_asserted_count, off_inserted_count);
        log_msg += t_select.t_get_docker_bag_msg("bak", bak_moved_to_count, bak_asserted_count, bak_inserted_count);
        log_msg += t_select.t_get_docker_bag_msg("alt", alt_moved_to_count, alt_asserted_count, alt_inserted_count);
        log_msg += t_select.t_get_docker_bag_msg("bin", bin_moved_to_count, 0                 , 0                 );

        t_fly.t_fly( log_msg );
    }

if(log_this && pat_bag_innerHTML) log("...pat_bag_innerHTML %c"+t_util.strip_HTML(pat_bag_innerHTML), lb1);
if(log_this && off_bag_innerHTML) log("...off_bag_innerHTML %c"+t_util.strip_HTML(off_bag_innerHTML), lb2);
if(log_this && bak_bag_innerHTML) log("...bak_bag_innerHTML %c"+t_util.strip_HTML(bak_bag_innerHTML), lb3);
/*{{{
pat_bag.title
    = "PAT "+t_util.csv_count(pat_csv)+LF
    + "OFF "+t_util.csv_count(off_csv) + " .. BAK "+t_util.csv_count(bak_csv) + " .. ALT "+t_util.csv_count(alt_csv)
    ;
}}}*/

    /*}}}*/
    /* LAYOUT [grid_bag] {{{*/
    let needs_grid_bag
        = true
/*{{{
        =  (t_util.csv_count(off_csv) >= 10)
        || (t_util.csv_count(bak_csv) >= 10)
}}}*/
    ;

    if(has_el_class(pat_bag, "grid_bag") != needs_grid_bag)
    {
        set_el_class_on_off(pat_bag, "grid_bag", needs_grid_bag);

        t_fly.t_log_transcript_info("<span style='"+ (needs_grid_bag ? "color:red" : "color:green"                 ) +";'>"+t_data.SYMBOL_BLACK_CIRCLE+"</span>"
            +                 "<span style='"+ (needs_grid_bag ?          "" : "text-decoration:line-through") +";'>  grid_bag             </span>"
        );
    }

    /*}}}*/
    /* LAYOUT [off_bag.empty] or [gridRowStart] {{{*/
    let empty   = (t_util.csv_count(off_csv) == 0);
    set_el_class_on_off(off_bag, "empty", empty);

/*{{{
    off_bag.style.gridRowStart = 2 + t_util.csv_count(sel_csv); .. wrong results
}}}*/
    /*}}}*/
    /* LAYOUT BAGS [innerHTML] .. [afterbegin beforeend] {{{*/
    if(pat_bag_innerHTML) pat_bag.insertAdjacentHTML("beforeend", pat_bag_innerHTML);
    if(off_bag_innerHTML) off_bag.insertAdjacentHTML("beforeend", off_bag_innerHTML);
    if(bak_bag_innerHTML) bak_bag.insertAdjacentHTML("beforeend", bak_bag_innerHTML);
    if(alt_bag_innerHTML) alt_bag.insertAdjacentHTML("beforeend", alt_bag_innerHTML);

    pat_bag.appendChild(off_bag);
    pat_bag.appendChild(bak_bag);
    pat_bag.appendChild(alt_bag);
    pat_bag.appendChild(bot_div);
    /*}}}*/
/*{{{*/
if(log_this) {
    log(  "%c CSV...[SEL PAT OFF ALT BAK]"
          +"%c sel_csv "+t_util.csv_count( sel_csv )
          +"%c pat_csv "+t_util.csv_count( pat_csv )
          +"%c off_csv "+t_util.csv_count( off_csv )
          +"%c alt_csv "+t_util.csv_count( alt_csv )
          +"%c bak_csv "+t_util.csv_count( bak_csv )
          +"%c bin_csv "+t_util.csv_count( bin_csv )
          , lbH+lf9, lbH+lf9, lbH+lf4, lbH+lf5, lbH+lf6, lbH+lf2, lbH+lf0
       );

    log("%c sel_csv %c"+sel_csv, lbL+lf9,lbR+lf9);
    log("%c pat_csv %c"+pat_csv, lbL+lf1,lbR+lf1);
    log("%c off_csv %c"+off_csv, lbL+lf5,lbR+lf5);
    log("%c alt_csv %c"+alt_csv, lbL+lf6,lbR+lf6);
    log("%c bak_csv %c"+bak_csv, lbL+lf2,lbR+lf2);
    log("%c bin_csv %c"+bin_csv, lbL+lf0,lbR+lf0);
}
/*}}}*/
};
/*}}}*/

/*…   pattern4_bin_remove_all_trashed_pat_spans {{{*/
let   pattern4_bin_remove_all_trashed_pat_spans = function()
{
    for(let pos = 1; pos <= t_util.csv_count(bin_csv); ++pos)
    {
        let pat             = t_util.csv_get(bin_csv, pos);
        let pat_span_index  = t_select.t_get_pat_span_index(pat_spans, pat);
        if( pat_span_index >= 0) {
            /* [pat_span] trashed (i.e. in bin_csv) .. [remove from container] {{{*/
            let container   = pat_spans[pat_span_index].parentNode;
            if( container ) {
                container.removeChild( pat_spans[pat_span_index] );
                pat_spans[pat_span_index] = null;
                bin_moved_to_count += 1;
            }
            /*}}}*/
        }
    }
};
/*}}}*/
/*…   pattern5_bak_innerHTML {{{*/
let   pattern5_bak_innerHTML = function()
{
    for(let pos = 1; pos <= t_util.csv_count(bak_csv); ++pos)
    {
        let pat             = t_util.csv_get(bak_csv,    pos);
        let pat_span_index  = t_select.t_get_pat_span_index(pat_spans, pat);
        if( pat_span_index >= 0) {
            /* container  is bak_bag .. [BAK CONFIRM] {{{*/
            let container   = pat_spans[pat_span_index].parentNode;
            if( container  == bak_bag) {
                bak_asserted_count += 1;

            }
            /*}}}*/
            /* container not bak_bag .. [MOVED_TO BAK] {{{*/
            else {
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_fly("MOVED TO <em class='cc2'>BAK</em> FROM <em class='cc9'>"+get_n_lbl(container)+"</em> ["+pat_spans[pat_span_index].innerText+"]");

                bak_moved_to_count += 1;
                bak_bag.appendChild( pat_spans[pat_span_index] );
            }
            /*}}}*/
            /* pat_span class {{{*/
            sync_pat_span_slot_class(pat, pat_spans[pat_span_index]);

            pat_spans[pat_span_index] = null;
            /*}}}*/
        }
        else {
            /* NEW [pat_span] {{{*/
            let num = t_util.mPadStart(pos,2).replace(" ","&nbsp;");
            let txt = t_util.ellipsis(t_util.t_get_htmlEntities(pat), 16);
            let css_class
                = "cc0"
                + ((mov_div.innerText == txt) ? " mov_src" : "")
            ;

            let line = t_select.t_get_pat_span_line(num, pat, css_class);
            /*}}}*/
            /* [ADD TO BAK] {{{*/
            bak_bag_innerHTML  += line;

            bak_inserted_count += 1;
            /*}}}*/
        }
    }
};
/*}}}*/
/*…   pattern6_alt_innerHTML {{{*/
let   pattern6_alt_innerHTML = function()
{
    for(let pos = 1; pos<= t_util.csv_count(alt_csv); ++pos)
    {
        let pat            = t_util.csv_get(alt_csv, pos);
        let pat_span_index = t_select.t_get_pat_span_index(pat_spans, pat);
        if( pat_span_index >= 0) {
            /* container  alt_bag .. [ALT CONFIRM] {{{*/
            let container  = pat_spans[pat_span_index].parentNode;
            if( container == alt_bag) {
                alt_asserted_count += 1;

            }
            /*}}}*/
            /* container !alt_bag .. [MOVED_TO ALT] {{{*/
            else {
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_fly("MOVED TO <em class='cc6'>ALT</em> FROM <em class='cc9'>"+get_n_lbl(container)+"</em> ["+pat_spans[pat_span_index].innerText+"]");

                alt_moved_to_count += 1;
                alt_bag.appendChild( pat_spans[pat_span_index] );
            }
            /*}}}*/
            /* pat_span class {{{*/
            sync_pat_span_slot_class(pat, pat_spans[pat_span_index]);

            pat_spans[pat_span_index] = null;
            /*}}}*/
        }
        else {
            /* NEW [pat_span] {{{*/
            let num = t_util.mPadStart(pos,2).replace(" ","&nbsp;");
            let txt = t_util.ellipsis(t_util.t_get_htmlEntities(pat), 16);
            let css_class
                = "cc0"
                + ((mov_div.innerText == txt) ? " mov_src" : "")
            ;

            let line = t_select.t_get_pat_span_line(num, pat, css_class);
            /*}}}*/
            /* ADD TO [alt_bag] {{{*/
            alt_bag_innerHTML  += line;
            alt_inserted_count += 1;

            /*}}}*/
        }
    }
};
/*}}}*/
/*…   pattern7_pat_csv_to_bag {{{*/
let   pattern7_pat_csv_to_bag = function()
{
/*{{{*/
let   caller = "pattern7_pat_csv_to_bag";
let log_this = LOG_MAP.S0_PATTERN;

if( log_this ) logBIG(caller, lf8);

/*{{{
    if( !prop.get("pat_sort") )
        [pat_csv, off_csv] = reorder_pat_csv_from_pat_spans(pat_csv, off_csv, pat_spans);
}}}*/

/*}}}*/
/*{{{*/
if(log_this) {
    log(  "%c CSV...[SEL PAT OFF ALT BAK]"
          +"%c sel_csv "+t_util.csv_count( sel_csv )
          +"%c pat_csv "+t_util.csv_count( pat_csv )
          +"%c off_csv "+t_util.csv_count( off_csv )
          +"%c alt_csv "+t_util.csv_count( alt_csv )
          +"%c bak_csv "+t_util.csv_count( bak_csv )
          , lbH+lf9, lbH+lf9, lbH+lf4, lbH+lf5, lbH+lf6, lbH+lf2
       );

    log("%c sel_csv %c"+sel_csv, lbL+lf9,lbR+lf9);
    log("%c pat_csv %c"+pat_csv, lbL+lf1,lbR+lf1);
    log("%c off_csv %c"+off_csv, lbL+lf5,lbR+lf5);
    log("%c alt_csv %c"+alt_csv, lbL+lf6,lbR+lf6);
    log("%c bak_csv %c"+bak_csv, lbL+lf2,lbR+lf2);
    log("%c bin_csv %c"+bin_csv, lbL+lf8,lbR+lf8);
}
/*}}}*/
    for(let pos = 1; pos<= t_util.csv_count(pat_csv); ++pos)
    {
        /* pat in_<off pat bak>_csv {{{*/
        let pat            = t_util.csv_get(pat_csv, pos);
        let pat_span_index = t_select.t_get_pat_span_index(pat_spans, pat);
        let pat_span       = pat_spans[pat_span_index];

        let in_off_csv     = t_util.csv_contains(off_csv, pat);
        let in_alt_csv     = t_util.csv_contains(alt_csv, pat);
        let in_bak_csv     = t_util.csv_contains(bak_csv, pat);
/*{{{
if( log_this) log("%c in_off_csv %c"+in_off_csv+"%c "+pat+"", lbL+lf8, lbC+(in_off_csv ? lf4 : lf2), lbR+lf8);
if( log_this) log("%c in_alt_csv %c"+in_alt_csv+"%c "+pat+"", lbL+lf6, lbC+(in_alt_csv ? lf4 : lf2), lbR+lf6);
if( log_this) log("%c in_bak_csv %c"+in_bak_csv+"%c "+pat+"", lbL+lf2, lbC+(in_bak_csv ? lf4 : lf2), lbR+lf2);
}}}*/

        let csv_belongs_to_bag;
        let container;
        let action;
        /*}}}*/
        if(pat_span_index >= 0) {
/*{{{
if( log_this) log("...%c"+pat+"%c OLD pat_span", lbL, lbR+lf8);
}}}*/
            /* sync words_option {{{*/
            t_select.t_adjust_pat_span_words_option(pat_span, pat);

            /*}}}*/
            /* container {{{*/
            container  = pat_span.parentNode;

            /*}}}*/
            /* container  pat_bag .. [PAT CONFIRM] OR [MOVED_TO off] {{{*/
            if( container == pat_bag)
            {
                csv_belongs_to_bag = !in_off_csv;
if( log_this)   action = "belongs to pat "+csv_belongs_to_bag;
                /* PAT CONFIRM {{{*/
                if(csv_belongs_to_bag)
                {
                    pat_asserted_count += 1;

                    /* but move it to the bottom */
                    pat_bag.insertBefore(pat_span, off_bag);
                }
                /*}}}*/
                /* pat MOVED_TO off {{{*/
                else {
                    off_moved_to_count += 1;
                    off_bag.appendChild( pat_span );
                }
                /*}}}*/
            }
            /*}}}*/
            /* container  off_bag .. [OFF CONFIRM] {{{*/
            else if( container == off_bag)
            {
                csv_belongs_to_bag =  in_off_csv;
if( log_this)       action = "belongs to off "+csv_belongs_to_bag;
                /* OFF CONFIRM {{{*/
                if(csv_belongs_to_bag)
                {
                    off_asserted_count += 1;
                }
                /*}}}*/
                /* off MOVED_TO pat {{{*/
                else {
                    pat_moved_to_count += 1;
                    pat_bag.insertBefore(pat_span, off_bag);
                }
                /*}}}*/
            }
            /*}}}*/
            /* container  alt_bag .. [MOVED_TO pat] OR [MOVED_TO off] {{{*/
            else if( container == alt_bag)
            {
                /* alt MOVED_TO off {{{*/
                if(in_off_csv) {
if( log_this)       action = "alt MOVED_TO off";
                    off_moved_to_count += 1;
                    off_bag.appendChild( pat_span );
                }
                /*}}}*/
                /* alt MOVED_TO pat {{{*/
                else if(!in_alt_csv) {
if( log_this)       action = "alt MOVED_TO pat";
                    pat_moved_to_count += 1;
                    pat_bag.insertBefore(pat_span, off_bag);
                }
                /*}}}*/
            }
            /*}}}*/
            /* container  bak_bag .. [MOVED_TO pat] OR [MOVED_TO off] {{{*/
            else if( container == bak_bag)
            {
                /* bak MOVED_TO off {{{*/
                if(in_off_csv) {
if( log_this)       action = "bak MOVED_TO off";
                    off_moved_to_count += 1;
                    off_bag.appendChild( pat_span );
                }
                /*}}}*/
                /* bak MOVED_TO pat {{{*/
                else if(!in_bak_csv) {
if( log_this)       action = "bak MOVED_TO pat";
                    pat_moved_to_count += 1;
                    pat_bag.insertBefore(pat_span, off_bag);
                }
                /*}}}*/
            }
            /*}}}*/
            /* container !off_bag .. [MOVED_TO off] .. f( in_off_csv) {{{*/
            else if( in_off_csv ) {
if( log_this)   action = "in_off_csv MOVED_TO off";

                off_moved_to_count += 1;
                off_bag.appendChild( pat_span );
            }
            /*}}}*/
            /* container !pat_bag .. [MOVED_TO pat] .. f(!in_off_csv) {{{*/
            else {
if( log_this) action = "not in_off_csv MOVE_TO pat";

                pat_moved_to_count += 1;
                pat_bag.insertBefore(pat_span, off_bag);
            }
            /*}}}*/

            /* pat_spans class {{{*/
            sync_pat_span_slot_class(pat, pat_span, in_off_csv);

            /*}}}*/
            /* pat_span dispatched {{{*/
            pat_spans[pat_span_index] = null;

            /*}}}*/
        }
        else {
            /* NEW [pat_span] {{{*/
if( log_this) action = "new pat_span";
            let line_num = t_util.mPadStart(t_slot.get_slot_of_pattern(pat),2).replace(" ","&nbsp;");
            let txt = t_util.ellipsis(t_util.t_get_htmlEntities(pat), 16);
            let ccX = t_slot.get_slot_of_pattern( pat ) % 10;
            let css_class
                = ((in_off_csv              ) ? "cc0"      : "cc"+ccX)
                + ((mov_div.innerText == txt) ? " mov_src" : ""      )
            ;

            let line = t_select.t_get_pat_span_line(line_num, pat, css_class);
            /*}}}*/
            /* ADD TO [off_bag] .. f( in_off_csv) {{{*/
            if(in_off_csv) { off_bag_innerHTML += line; ++off_inserted_count; }
/*{{{
            .. TODO [to off when OPENED] [to pat when CLOSED]
                let pat_bag_is_opened = has_el_class( pat_bag, "open_bag");
if( log_this) log("pat_bag_is_opened=["+pat_bag_is_opened+"]");
                if( pat_bag_is_opened ) { off_bag_innerHTML += line; ++off_inserted_count; }
                else                    { pat_bag_innerHTML += line; ++pat_inserted_count; }
}}}*/
            /*}}}*/
            /* ADD TO [pat_bag] .. f(!in_off_csv) {{{*/
            else           { pat_bag_innerHTML += line; ++pat_inserted_count; }

            /*}}}*/
        }
/*{{{*/
if( log_this)
    log_key_val_group( pat_span_index+" "+ action+" .. "+pat
                       , { pat_span_index
                         , in_off_csv
                         , in_alt_csv
                         , in_bak_csv
                         , container : container ? container.id : container
                       }, lfX[pat_span_index], true);

/*}}}*/
    }
};
/*}}}*/
/*…   pattern8_off_bak_innerHTML {{{*/
let   pattern8_off_bak_innerHTML = function()
{
    /* [pat_spans] unmoved .. fall back [MOVED_TO bak] */
    for(let pat_span_index=0; pat_span_index < pat_spans.length; ++pat_span_index)
    {
        let pat_span =  pat_spans[pat_span_index];
        if( pat_span == null) continue;

        let el     = pat_span.childNodes[2]; /* first is num_em */
        let el_pat = t_util.csv_unescape(el.getAttribute("data-pattern"));
        el_pat      = t_pattern_del_words_option_sfx(el_pat);

        /* [MOVED_TO off] .. f(<t_select.SELECT_SLOT_MAX) {{{*/
        if(t_util.csv_count(pat_csv) < t_select.SELECT_SLOT_MAX)
        {
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_fly("MOVED TO <em class='cc5'>OFF</em> <em class='cc8'>LOOSE</em> ["+pat_span.innerText+"]");

            csv_pattern_mov_to_off(el_pat);
            off_moved_to_count += 1;
            off_bag.appendChild( pat_span );
        }
        /*}}}*/
        /* [MOVED_TO bak] .. f(>t_select.SELECT_SLOT_MAX) {{{*/
        else {
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_fly("MOVED TO <em class='cc8'>BAK</em> <em class='cc8'>LOOSE</em> ["+pat_span.innerText+"]");

            csv_pattern_mov_to_bak(el_pat);
            bak_moved_to_count += 1;
            bak_bag.appendChild( pat_span );
        }
        /*}}}*/

        sync_pat_span_slot_class("", pat_span);

        pat_spans[pat_span_index] = null;
    }
};
/*}}}*/
/*…   pattern9_adjust_pat_span_num {{{*/
let   pattern9_adjust_pat_span_num = function()
{
    pat_spans=[];
    t_select.t_collect_el_class_from_into("pat_span", pat_bag, pat_spans);
    for(let pat_span_index=0; pat_span_index < pat_spans.length; ++pat_span_index)
    {
        let pat_span = pat_spans[pat_span_index];
        let el       = pat_span.childNodes[2]; /* first is num_em */
        let el_pat   = t_util.csv_unescape(el.getAttribute("data-pattern"));
        el_pat      = t_pattern_del_words_option_sfx(el_pat);
        let line_num = t_slot.get_slot_of_pattern(el_pat);

        let   num_em = pat_span.firstElementChild;
        num_em.innerHTML = t_util.mPadStart(line_num,2).replace(" ","&nbsp;");
/*{{{
logXXX("%c "+pat_span.parentNode.id+" num_em=["+num_em.textContent+"]", lf4);
}}}*/
    }

    pat_spans=[];
    t_select.t_collect_el_class_from_into("pat_span", off_bag, pat_spans);
    t_select.t_collect_el_class_from_into("pat_span", bak_bag, pat_spans);
    t_select.t_collect_el_class_from_into("pat_span", alt_bag, pat_spans);

    for(let pat_span_index=0; pat_span_index < pat_spans.length; ++pat_span_index)
    {
        let pat_span = pat_spans[pat_span_index];
        let line_num = t_util.get_child_num( pat_span );

        let   num_em = pat_span.firstElementChild;
        num_em.innerHTML = t_util.mPadStart(line_num,2).replace(" ","&nbsp;");

/*{{{
        let l_x
            = (pat_span.parentElement == off_bag) ? 5
            : (pat_span.parentElement == bak_bag) ? 2
            : (pat_span.parentElement == alt_bag) ? 6
            :                                       8
        ;
logXXX("%c "+pat_span.parentNode.id+" num_em=["+num_em.textContent+"]", lfX[l_x]);
}}}*/
    }

};
/*}}}*/

/*…   sync_pat_span_slot_class {{{*/
let   sync_pat_span_slot_class = function(pat, pat_span, pat_off=true)
{
    let  el = pat_span.childNodes[2];
/*{{{
log("sync_pat_span_slot_class: %c "+get_n_lbl(el)+".className=["+el.className+"]", lbH+lf8);
log("...className=["+el.className+"]");
}}}*/

    let ccX = pat_off
        ?      0
        :     (t_slot.get_slot_of_pattern(pat) % 10);

    set_el_class_removing(el, "cc"+ccX, t_data.CCX_CLASSLIST);

/*{{{
log("...className=["+el.className+"]");
}}}*/
};
/*}}}*/
/*…   get_sel_bag_pat_div  .. [pat_div  data-pattern thumb_p_<slot>] {{{*/
let   get_sel_bag_pat_div = function(slot)
{
    let pat          = t_select.ccs[slot].pattern;

    let data_pattern = t_util.csv_escape(pat);
/*{{{
    let title        = t_util.vbar_to_LF(data_pattern);
}}}*/

/*{{{
    let pat_less_sfx = t_pattern_del_words_option_sfx( pat );
}}}*/
    let [ sel_text , words_option ] = t_pattern_to_sel_text_words_option( pat );
    let pat_less_sfx = sel_text;

    let txt          = t_util.ellipsis(t_util.t_get_htmlEntities(pat_less_sfx), 32);

    let title        = t_select.ccs[slot].toString();

    let className    = words_option+" "+t_data.CSS_DATA_PATTERN;
/*{{{
log("%c className=["+className+"]", lbH+lf8);
}}}*/

    return "<div class='pat_div t_select"+slot+"' title='"+title+"'>"
        +   "<em id='thumb_p_"+slot+"' class='"+className+"' data-pattern='"+data_pattern+"'>"+txt+"</em>"
        +   t_pattern2_get_sel_bag_thumbs_EM(slot, "thumb_p")
        +  "</div>"
    ;

};
/*}}}*/
/*}}}*/

/* ANIM */
/*{{{*/
/* PULSE {{{*/
/*_ {{{*/
let PULSE_BLACKLIST_ID_CSV = "tools_node";
const PULSE_IN_DURATION    = 500;
const PULSE_OUT_DURATION   = 500;

let pulsing_id             = "";
let pulsing_id_csv         = "";

/*}}}*/
/*_ pulse_id {{{*/
let pulse_id = function(id)
{
    let caller = "pulse_id("+id+")";
if(LOG_MAP.T3_LAYOUT) log(caller);
/*{{{
console.warn(caller);
}}}*/
    if( t_util.csv_contains(PULSE_BLACKLIST_ID_CSV, id) ) {
if(LOG_MAP.T3_LAYOUT) log("...IGNORING BLACKLISTED ID");
        return;
    }
    let el;
    el     = t_get_tool(id);

    if(!el) id = pulse_id_get_alias(id);
    if(!id) return;

if(LOG_MAP.T3_LAYOUT) log(".id_alias=["+id+"]");
    el     = t_get_tool(id);

    if(!el ) return;
    if(id == pulsing_id) return; /* grouping */

    pulsing_id_csv = t_util.csv_add(pulsing_id_csv, id);
/*{{{
t_util.csv_log(pulsing_id_csv);
}}}*/

    pulse_id_start();

};
/*}}}*/
/*_ pulse_id_get_alias {{{*/
let pulse_id_get_alias = function(id)
{
    switch(id) {
        default               : return "";
        case        "bag_rot" : return "pat_bag";
        case        "pat_csv" : return "pat_bag";
        case   "words_filter" : return "sel_bag";
        case      "hotspotXY" : return "headsup";
        case "window_scrollY" : return "thumb_p";
    }
};
/*}}}*/
/*_ pulse_id_start {{{*/
/*{{{*/
const PULSE_START_DELAY = 200;
let   pulse_id_timer    = null;

/*}}}*/
let pulse_id_start = function()
{
    if(pulse_id_timer) {
        clearTimeout( pulse_id_timer );
        /*.........*/ pulse_id_timer = null;
    }

    set_el_class_on_off(hotwave, t_data.CSS_PULSING, true);

    if(!pulsing_id) pulse_id_timer = setTimeout(pulse_id_next_handler, PULSE_START_DELAY);
};
/*}}}*/
/*_ pulse_id_next_handler {{{*/
/*{{{*/
let HOTSPOT_HTML_IDLE       = "\u00BB;";
/*}}}*/
let pulse_id_next_handler = function()
{
    pulsing_id = t_util.csv_get(pulsing_id_csv, 1);
    if(!pulsing_id) {
        pulse_id_timer = null; /* done */
        set_el_class_on_off(hotwave, t_data.CSS_PULSING, false);
t_fly.t_fly(HOTSPOT_HTML_IDLE);
        return;
    }
    else {
        let count = t_util.csv_count(pulsing_id_csv);
t_fly.t_fly("<em class='cc"+count+"'>"+pulsing_id+"</em>");
    }

/*{{{
t_util.csv_log(pulsing_id_csv);
}}}*/
if(LOG_MAP.T3_LAYOUT) log(".pulse_id_next_handler: .. pulsing_id=["+pulsing_id+"]");

    pulsing_id_csv = t_util.csv_del(pulsing_id_csv, pulsing_id);

    t_set_id_class_on_off(pulsing_id, "pulse_in" , true );

    setTimeout(pulse_id_out_handler, PULSE_IN_DURATION);
};
/*}}}*/
/*_ pulse_id_out_handler {{{*/
let pulse_id_out_handler  = function()
{
    if(!pulsing_id) return;
if(LOG_MAP.T3_LAYOUT) log("..pulse_id_out_handler: pulsing_id=["+pulsing_id+"]");

    t_set_id_class_on_off(pulsing_id, "pulse_in"    , false);
    t_set_id_class_on_off(pulsing_id, "pulse_id_out", true );

    setTimeout(pulse_id_done_handler, PULSE_OUT_DURATION);
};
/*}}}*/
/*_ pulse_id_done_handler {{{*/
let pulse_id_done_handler = function()
{
    if(!pulsing_id) return;
if(LOG_MAP.T3_LAYOUT) log("...pulse_id_done_handler: pulsing_id=["+pulsing_id+"]");

    t_set_id_class_on_off(pulsing_id, "pulse_id_out", false);

    pulse_id_next_handler();
};
/*}}}*/
/*}}}*/
/* MOVE COOLDOWN {{{*/
/*_ move_cooldown_start {{{*/
/*{{{*/
const MOVE_COOLDOWN_DURATION =  500;
const MOVE_COOLDOWN_SHORT    =  100;
let   move_cooldown_timer    = null;
let   move_cooldown_reason   =   "";

/*}}}*/
let move_cooldown_short = function(reason) { move_cooldown_start(reason, MOVE_COOLDOWN_SHORT ); };
let move_cooldown_start = function(reason, delay=MOVE_COOLDOWN_DURATION)
{
/*{{{
logBIG("COOLDOWN START ("+delay+")", lbH+lfX[delay/100 % 10])
}}}*/
    onMoveDXY.x = 0;
    onMoveDXY.y = 0;

    if(move_cooldown_timer) clearTimeout(move_cooldown_timer);
    move_cooldown_timer   =   setTimeout(move_cooldown_handler, delay);
    move_cooldown_reason  =   reason;

    t_seek.t_seeker_set_CSS_ON_COOLDOWN(true);
};
/*}}}*/
/*_ move_cooldown_handler {{{*/
let move_cooldown_handler = function()
{
/*{{{
logBIG("COOLDOWN END", lbH+lf8)
}}}*/

    move_cooldown_timer  = null; /* done */
    move_cooldown_reason = "";
    t_clr_has_moved("move_cooldown_handler");

    t_seek.t_seeker_set_CSS_ON_COOLDOWN(false);
};
/*}}}*/
/*_ move_cooldown_is_pending {{{*/
let move_cooldown_is_pending = function()
{
    return (move_cooldown_timer != null);
};
/*}}}*/
/*_ move_cooldown_clear_pending {{{*/
let move_cooldown_clear_pending = function()
{
    if(move_cooldown_timer) clearTimeout(move_cooldown_timer);
    move_cooldown_timer = null;
};
/*}}}*/
/*}}}*/
/* CSS_SLOW_REGROUP {{{*/
/*  enter_CSS_SLOW_REGROUP {{{*/
/*{{{*/
let       CSS_SLOW_REGROUP_DURATION = 1000;
let leave_CSS_SLOW_REGROUP_timer;

/*}}}*/
let enter_CSS_SLOW_REGROUP = function(_caller)
{
/*{{{
logBIG("CSS_SLOW_REGROUP ENTER: "+_caller, lf7)
}}}*/
    if(!dom_tools_html) return;
    add_el_class(dom_tools_html, t_data.CSS_SLOW_REGROUP);

    if(leave_CSS_SLOW_REGROUP_timer) clearTimeout( leave_CSS_SLOW_REGROUP_timer );
    leave_CSS_SLOW_REGROUP_timer   =   setTimeout( leave_CSS_SLOW_REGROUP_handler, CSS_SLOW_REGROUP_DURATION);
};
/*}}}*/
/*  leave_CSS_SLOW_REGROUP_handler {{{*/
let leave_CSS_SLOW_REGROUP_handler = function()
{
/*{{{
logBIG("CSS_SLOW_REGROUP LEAVE", lf6)
}}}*/
    leave_CSS_SLOW_REGROUP_timer = null;

    del_el_class(dom_tools_html, t_data.CSS_SLOW_REGROUP);
};
/*}}}*/
/*  leave_CSS_SLOW_REGROUP {{{*/
let leave_CSS_SLOW_REGROUP = function(_caller)
{
/*{{{
logBIG("CSS_SLOW_REGROUP CANCEL: "+_caller, lf4)
}}}*/
    if(!dom_tools_html) return;
    del_el_class(dom_tools_html, t_data.CSS_SLOW_REGROUP);

    if( leave_CSS_SLOW_REGROUP_timer ) {
        clearTimeout(leave_CSS_SLOW_REGROUP_timer);
        leave_CSS_SLOW_REGROUP_timer = null;
    }
};
/*}}}*/
/*}}}*/
/*}}}*/

/* CLONES */
/*{{{*/
/*_ t_clone_1_DOC_SLIDER {{{*/
let t_clone_1_DOC_SLIDER = function(panel, id, className)
{
    /* [id] {{{*/
    let box               = document.createElement("DIV");
    panel.appendChild( box );
    box.className         = "box cb_slider_cap toolbag_button "+className;
    /*}}}*/
    /* input {{{*/
    let input             = document.createElement("INPUT");
    box.appendChild( input );
    input.type            = "checkbox";
    input.id              = id;
    input.name            = "check";
    input.className       = "cc2";
    /*}}}*/
    /* thumb {{{*/
    let label0            = document.createElement("LABEL");
    box.appendChild( label0 );
    label0.htmlFor        = id;

    /*}}}*/
    /* track {{{*/
    let label1            = document.createElement("LABEL");
    box.appendChild( label1 );
    label1.htmlFor        = id;
    /*}}}*/
    t_clone_2_id_state_CB(id, false); /* initialize */
};
/*}}}*/
/*_ t_clone_2_id_state_CB {{{*/
let t_clone_2_id_state_CB = function(id, checked)
{
/*{{{*/
let   caller = "t_clone_2_id_state_CB("+id+" , checked=["+checked+"])";
let log_this = LOG_MAP.T3_LAYOUT || LOG_MAP.EV5_TOOL_CB;

/*}}}*/
    /* SLIDER TRACK + THUMB {{{*/
    let clone_el = document.getElementById(id);
    if(!clone_el ) return;

    let el_thumb = clone_el.labels ? clone_el.labels[0] : null;
    let el_track = clone_el.labels ? clone_el.labels[1] : null;

    if( el_thumb && el_track)
    {
        let                a =   id.split("_or_");
        if(a.length  != 2) a =   id.split("_"   );
        if(a.length  != 2) a = [ id      ,"OFF" ];
        if(a.length  == 2) {

            let label_ON  = a[0].toUpperCase();
            let label_OFF = a[1].toUpperCase();

if( log_this) log("%c"+id+"  "+checked+" %c ON..OFF=["+label_ON +".."+label_OFF+"]", lbL+lf3, lbR+lf5);
if( log_this) log(caller+": %c"+id      +" %c"+label_OFF                 +" %c"+label_ON
                  ,         lbb+lbH+lf9   ,lbH+(!checked ? lbb : "")+lf8   ,lbH+( checked ? lbb : "")+lf2);

            el_thumb.innerHTML = checked ? "<em class='bg8'>"+ label_ON  +"</em>" : "<em class='bg2'>"+ label_OFF +"</em>" ;
            el_track.innerHTML = checked ?                     label_OFF          :                     label_ON           ;

        }
        else {
if( log_this) log("%c"+caller+"%c *** no match with [cb_slider_cap] ID '_or_' naming separator feature", lbL, lbR+lf2);
        }
    }
    /*}}}*/
    /* NOT A SLIDER {{{*/
    else {
if( log_this) log("%c"+caller+"%c ... not a [cb_slider_cap] .. thumb+track labels not found"           , lbL, lbR+lf8);
        t_clone_2_id_state_CB_PULSE(id, checked);
    }
    /*}}}*/
    /* PARENT BACKGROUND .. (stylesheet/checkbox.css) {{{*/
    set_el_class_on_off(clone_el.parentElement, CSS_ON, checked);

    /*}}}*/
};
/*}}}*/
/*_ t_clone_2_id_state_CB_PULSE {{{*/
let t_clone_2_id_state_CB_PULSE = function(input_id, checked)
{
    let       checkbox = document.getElementById(input_id);
/*{{{
t_log.console_dir("+checked+")", checkbox,"t_clone_2_id_state_CB_PULSE("+input_id+");
}}}*/

    checkbox.checked = true;

    setTimeout( function() { t_prop_1_id_clone_OFF(checkbox); }, 2000);
};
let t_prop_1_id_clone_OFF = function(checkbox)
{
    checkbox.checked = false;
};
/*}}}*/
/*_ t_clone_3_panel_id_bg_type_label {{{*/
let t_clone_3_panel_id_bg_type_label = function(panel, id, bg, type, label)
{
/*{{{*/
let caller = "t_clone_3_panel_id_bg_type_label("+id+" , "+bg+" , "+type+")";
let log_this = LOG_MAP.T3_LAYOUT;

/*}}}*/

    let el;

    el = get_tool_clone(id);
    if( el ) {
if( log_this) log("%c"+caller+"%c TOOL ALREADY CLONED ["+id+"]", lbL+lf8, lbR+lf3);
        return null;
    }

    let title = id;

    el = get_tool_embedded(id);
    if( el ) {
if( log_this) log("%c"+caller+"%c TOOL ALREADY EMBEDDED ["+id+"]", lbL+lf8, lbR+lf4);
        type  = "span"; /* placeholder */
        title =  "placeholder for ["+id+"]";
    }

    label = t_util.underline_to_space(label || id);

    let tool_innerHTML
        = (type == "input")
        ?  (  "<input type='checkbox'     id='"+ id    +"' name='check' />"
            + "<label                    for='"+ id    +"'>"
            +  "<div class='small     middle'>"+ label +"</div>"
            + "</label>"
           )
        : (   "<"+type+" class='box_label'>"+ label +"</"+type+">");

    let div
        = document.createElement("DIV");

    let div_class
        = (type == "input")
        ? "box  cb_filled_pin "+ bg +" toolbag_button"
        : bg
        ;

    div.innerHTML
        =    "<div class='"+div_class+"' title='"+title+"'>"
        +     tool_innerHTML
        +    "</div>";

    panel.appendChild( div );

    el = div.firstElementChild.firstElementChild;

if( log_this) t_log.console_dir(caller+" ...return:", el);
    return  el;
};
/*}}}*/

/*_ get_tool_clone {{{*/
let get_tool_clone = function(id)
{
    if(!id               ) return null;
    if( id.includes(" ") ) return null;
    let el
        = playground_clones_panel
        ? playground_clones_panel.querySelector("#"+id)
        : null;

/*{{{
if(el) t_log.console_dir("get_tool_clone("+id+") ...return:", el);
}}}*/
    return el;
};
/*}}}*/
/*_ get_doc_tool_diplayed_id_prefix {{{*/
/*{{{*/
const MAX_EMBEDDED_TOOLS_ID = 32;

/*}}}*/
let get_doc_tool_diplayed_id_prefix = function(id_prefix)
{
    for(let i=0; i<MAX_EMBEDDED_TOOLS_ID; ++i)
    {
        let doc_tool = get_tool_embedded(id_prefix+(i ? ("_"+i): ""));
        if(!doc_tool ) break;
        let    buttons_pod = t_util.get_el_parent_with_class(doc_tool, CSS_BUTTONS_POD);
        if(    buttons_pod
               &&  buttons_pod.style.display
               && (buttons_pod.style.display != "none")
          ) {
/*{{{
log(t_util.get_id_or_node_path_tail(buttons_pod)+" .. [display "+buttons_pod.style.display+"]");
}}}*/
            return doc_tool;
        }
    }
    return null;
};
/*}}}*/
/*_ get_tool_embedded {{{*/
let get_tool_embedded = function(id)
{
    if(!id               ) return null;
    if( id.includes(" ") ) return null;
    let el
        = document.querySelector("#"+id)
    ;

/*{{{
if(el) t_log.console_dir("get_tool_embedded("+id+") ...return:", el);
}}}*/
    return el;
};
/*}}}*/


/*_ t_sync_tool_clones_state .. called by (prop_tools_CB prop_id_toggle t_onPatternUpdate_done) {{{*/
/*{{{*/
const T_SYNC_TOOL_CLONES_DELAY = 500;

let   sync_tool_clones_timeout;
/*}}}*/
let t_sync_tool_clones_state = function(_caller)
{
/*{{{*/
let   caller = "t_sync_tool_clones_state";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller+"%c CALLED BY "+ _caller, lbL+lf6,lbR+lf6);
/*}}}*/
/*{{{
logBIG(caller+" *** HANDLER NOT CALLED ***", lbH+lf2)
return;
}}}*/
    if(  sync_tool_clones_timeout) clearTimeout(sync_tool_clones_timeout);
    sync_tool_clones_timeout =      setTimeout (sync_tool_clones_handler, T_SYNC_TOOL_CLONES_DELAY);
};
/*}}}*/
/*…   sync_tool_clones_handler {{{*/
let   sync_tool_clones_handler = function()
{
/*{{{*/
let   caller = "sync_tool_clones_handler";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/

    let id, el;

    id = "EV0_LISTEN"            ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV0_LISTEN     ? CSS_CC9 : CSS_CC8, t_data.CCX_CLASSLIST);
    id = "EV1_DOWN"              ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV1_DOWN       ? CSS_CC1 : CSS_CC8, t_data.CCX_CLASSLIST);
    id = "EV2_MOVE"              ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV2_MOVE       ? CSS_CC2 : CSS_CC8, t_data.CCX_CLASSLIST);
    id = "EV3_UP"                ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV3_UP         ? CSS_CC3 : CSS_CC8, t_data.CCX_CLASSLIST);
    id = "EV4_LONG_PRESS"        ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV4_LONG_PRESS ? CSS_CC4 : CSS_CC8, t_data.CCX_CLASSLIST);
    id = "EV5_TOOL_CB"           ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV5_TOOL_CB    ? CSS_CC5 : CSS_CC8, t_data.CCX_CLASSLIST);
    id = "EV6_CHANGED"           ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV6_CHANGED    ? CSS_CC6 : CSS_CC8, t_data.CCX_CLASSLIST);
    id = "EV7_DISPATCH"          ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV7_DISPATCH   ? CSS_CC7 : CSS_CC8, t_data.CCX_CLASSLIST);
    id = "EV8_FLOATLOG"          ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV8_FLOATLOG   ? CSS_CC9 : CSS_CC8, t_data.CCX_CLASSLIST);

    id =  "S0_PATTERN"           ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.S0_PATTERN     ? CSS_CC1 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  "S1_RANGE"             ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.S1_RANGE       ? CSS_CC1 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  "S2_SELECT"            ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.S2_SELECT      ? CSS_CC2 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  "S3_SLOT"              ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.S3_SLOT        ? CSS_CC3 : CSS_CC8, t_data.CCX_CLASSLIST);

    id =  "T0_STORE"             ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.T0_STORE       ? CSS_CC9 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  "T1_DOM_LOAD"          ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.T1_DOM_LOAD    ? CSS_CC1 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  "T2_GRID"              ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.T2_GRID        ? CSS_CC2 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  "T3_LAYOUT"            ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.T3_LAYOUT      ? CSS_CC3 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  "T4_PIVOT"             ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.T4_PIVOT       ? CSS_CC4 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  "T5_SPREAD"            ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.T5_SPREAD      ? CSS_CC5 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  "T6_SLOT"              ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.T6_SLOT        ? CSS_CC6 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  "T7_SHARE"             ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.T7_SHARE       ? CSS_CC7 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  "T8_TOOLBAR"           ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.T8_TOOLBAR     ? CSS_CC0 : CSS_CC8, t_data.CCX_CLASSLIST);

    id =  "IPC_LOG"              ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.IPC_LOG        ? CSS_CC9 : CSS_CC8, t_data.CCX_CLASSLIST);

    id =  t_data.CONTAINERS_HI   ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC1 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  t_data.WORDS_EXACT     ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC3 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  t_data.WORDS_SEGMENT   ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC4 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  t_data.WORDS_HEAD_TAIL ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC5 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  t_data.WORDS_OPCYCLE   ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC9 : CSS_CC8, t_data.CCX_CLASSLIST);

    let id_array = get_words_drop_affix_array();
    for(let i=0; i < id_array.length; ++i)
    {
        id = id_array[i]         ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC9 : CSS_CC8, t_data.CCX_CLASSLIST);
    }

    id =  t_data.SCROLL_SMOOTH   ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC2 : CSS_CC8, t_data.CCX_CLASSLIST);

    id =  t_data.SHOW_SEEKZONE   ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC2 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  t_data.PIN_SEEKSPOT    ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC2 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  t_data.LOG_SEEKSPOT    ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC2 : CSS_CC8, t_data.CCX_CLASSLIST);

    id =  t_data.REMOVE_ADS      ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC2 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  t_data.SPLIT_WOT       ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC2 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  t_data.LINES_WOT       ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC2 : CSS_CC8, t_data.CCX_CLASSLIST);

    id =  t_data.DENY_OR_ALLOW   ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC2 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  t_data.EDIT_OR_STAGE   ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC2 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  t_data.DOM_HIDE1_RESET ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC2 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  t_data.DOM_HIDE1_UNDO  ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC2 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  t_data.MASK_OR_HIDE    ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC2 : CSS_CC8, t_data.CCX_CLASSLIST);
    id =  t_data.SITE_OR_PAGE    ; if(el = document.getElementById(id)) set_el_class_removing(el, prop.get(id)           ? CSS_CC2 : CSS_CC8, t_data.CCX_CLASSLIST);

    /* [dom_grid] .. (DOC TOOLS PLAYGROUND) */
    id = "dom_grid_headsup"      ; if(el = document.getElementById(id)) set_el_class(el, CSS_COLLAPSED, LOG_MAP.T2_GRID);
};
/*}}}*/
/*}}}*/

/*_ SEEK_PAT_BAG */
/*{{{*/
let SEEK_PAT_BAG_LOG = DOM_TOOLS_TAG;
const SEEK_NEXT_SLOT_NUM_DELAY          =  500;
const SEEK_NEXT_SCROLL_WAS_NEEDED_DELAY = 1000;
/*{{{*/
let   seek_next_slot_num_timeout;

/*}}}*/
/*_ seek_pat_bag {{{*/
let seek_pat_bag = function()
{
/*{{{*/
let   caller = "seek_pat_bag";
let log_this = SEEK_PAT_BAG_LOG;

if( log_this) t_log.console_clear(caller);
/*}}}*/
    /* last selected slot num .. (falback to first) {{{*/
    let { slot , num }
        = t_seek.t_seeker_get_last_seeked_slot_num();
    if(!slot || (slot < 0)) {
        slot = 1;
        num  = 1;
    }

if( log_this) log("%c SEEKER ANIMATION: LAST SELECTED SLOT "+slot, lbH+lf1);
    /*}}}*/
    /* last selected el {{{*/
    let el;
    while(slot <= t_select.SELECT_SLOT_MAX)
    {
        if(t_select.t_select_get_slot_nodes_length(slot) >= 1)
        {
            let ccX       = slot % t_select.SELECT_SLOT_MAX;
            if( el = document.querySelector("."+t_select.SEL_CLASS_PREFIX + ccX))
                break;
        }
        slot += 1;
    }

    if(!el) return;
    /*}}}*/
    /* next visible num {{{*/
    let num_wrap_to = num;
    do {
        num = t_select.t_get_slot_num_next_wrap_to(slot, num, num_wrap_to);
    }
    while((num != num_wrap_to) && !t_select.t_is_slot_num_visible(slot,num));
    /*}}}*/
    /* fake down XY and onWork_EL {{{*/
    let cr = el.getBoundingClientRect();
    onDown_XY.x = cr.x;
    onDown_XY.y = cr.y;

    t_set_onWork_EL(el,caller);
    if(!onWork_EL) return;

    /*}}}*/
    /* SEEK GRAB SLOT {{{*/
    t_seek.t_seeker_onDown_1_INIT_CTRL_DEBOUNCE_INPUT(onWork_EL, onDown_XY);
    t_seek.t_seeker_onMove1_grab(caller);

    /*}}}*/
    t_seek.t_seeker_set_PU_locked_on_screen(true);
    /* START SEEKER ANIMATION */
    seek_next_slot_num_timeout = setTimeout(function() { seek_next_slot_num_handler({ slot , num }); }, 0);

};
/*}}}*/
/*_ seek_next_slot_num_handler {{{*/
let seek_next_slot_num_handler = function({slot , num , num_wrap_to})
{
/*{{{*/
let   caller = "seek_next_slot_num_handler";
let log_this = SEEK_PAT_BAG_LOG;

/*}}}*/
    /* CANCELED {{{*/
    if(!seek_next_slot_num_timeout) {
if(log_this) log("%c SEEKER ANIMATION CANCELED BEFORE NUM "+num, lbH+lf3);

        return;
    }
    /*}}}*/
    /* SEEK [num_wrap_to] {{{*/
    let       num_max = t_select.t_select_get_slot_nodes_length(slot);
    if( num > num_max)
        num = 1;

    if( num_wrap_to && (num == num_wrap_to))
    {
        if(num_max <= 1) return; /* nowhere to go back to */

        let delay = 0;
        setTimeout(
                   function() {
                       t_seek.t_seeker_onMove3_ON_SLOT_NUM(slot, num);
/*{{{
                       scrollIntoViewIfNeeded_then_recenter_handler();
}}}*/
                       t_seek.t_seeker_set_PU_locked_on_screen(false);
                   }
                   , delay
                  );

        /* clear faked onWork_EL */
        t_set_onWork_EL(null, caller);
        t_seek.t_seekzone5_hide();

        return;
    }
    /* maybe undefined on first call */
    num_wrap_to = num_wrap_to || num;

    let scrollIntoView_was_needed = dom_scroll.t_scrollIntoView_was_needed();
    /*}}}*/
/*{{{*/
if(log_this)
    log_key_val_group(caller+"(slot "+slot+" .. num "+num+" → "+num_wrap_to+")"
                      ,{       slot
                       ,       num
                       ,       num_wrap_to
                       ,       scrollIntoView_was_needed
                      },   lfX[scrollIntoView_was_needed ? 3:8]
                      , true);

/*}}}*/
    /* SEEK {{{*/
    t_seek.t_seeker_onMove3_ON_SLOT_NUM(slot, num);

    do {
        num = t_select.t_get_slot_num_next_wrap_to(slot, num+1, num_wrap_to);
    }
    while((num != num_wrap_to) && !t_select.t_is_slot_num_visible(slot,num));

    let delay = scrollIntoView_was_needed
        ?        SEEK_NEXT_SCROLL_WAS_NEEDED_DELAY
        :        SEEK_NEXT_SLOT_NUM_DELAY
    ;
    dom_scroll.t_scrollIntoView_was_needed_reset();

    if( prop.get(t_data.SCROLL_SMOOTH) )
        delay *= 2;

    seek_next_slot_num_timeout = setTimeout(function() { seek_next_slot_num_handler({slot, num, num_wrap_to}); }, delay);
    /*}}}*/
};
/*}}}*/
/*_ seek_next_slot_num_cancel {{{*/
let seek_next_slot_num_cancel = function()
{
let log_this = SEEK_PAT_BAG_LOG;

    if(!seek_next_slot_num_timeout )
        return;

if(log_this) log("%c SEEKER ANIMATION CANCELING", lf2);
    seek_next_slot_num_timeout = null;

    t_seek.t_seeker_set_PU_locked_on_screen(false);
};
/*}}}*/
/*}}}*/

/* SNAPSHOT */
/*{{{*/
let snapshot_mail_body;

/*}}}*/
/*_ t_take_SNAPSHOT {{{*/
let t_take_SNAPSHOT = function(dom_load_id, snapshot_id, e_target=undefined)
{
/*{{{*/
let   caller = "t_take_SNAPSHOT";
let log_this = DOM_TOOLS_TAG;

if( log_this) t_log.console_clear(caller);
/*}}}*/
    /* [snapshot_key] {{{*/
    let snapshot_key = "SNAPSHOT"+ ((snapshot_id && (snapshot_id != "undefined")) ? "_"+snapshot_id : "");

if( log_this) log("%c"+caller+"%c"+dom_load_id+"%c"+snapshot_key+")"
                  ,lbL+lf7    ,lbC+lf7         ,lbR+lf7             );
    /*}}}*/
    /* STORE - EXPORT [snapshot_mail_body] INTO A STORED SNAPSHOT ITEM {{{*/
    snapshot_mail_body = dom_share.t_share2_MAILTO_UI(e_target);
    if( snapshot_mail_body )
    {
if( log_this) log("%c"+snapshot_mail_body, lf7);

        t_store.t_store_set_value(snapshot_key, snapshot_mail_body);
    }
    else {
        log("%c"+caller+"%c No "+snapshot_key+" to export to",lbL+lf6, lbR+lf2);

    }
    /*}}}*/
};
/*}}}*/
/*_ t_load_SNAPSHOT {{{*/
let t_load_SNAPSHOT = function(dom_load_id, snapshot_id)
{
/*{{{*/
let   caller = "t_load_SNAPSHOT";
let log_this = DOM_TOOLS_TAG;

/*{{{
if( log_this) t_log.console_clear(caller);
}}}*/
/*}}}*/
    /* [snapshot_key] {{{*/
    let snapshot_key = "SNAPSHOT"+ ((snapshot_id && (snapshot_id != "undefined")) ? "_"+snapshot_id : "");

if( log_this) log("%c"+caller+"%c"+dom_load_id+"%c"+snapshot_key+")"
                  ,lbL+lf6    ,lbC+lf6         ,lbR+lf6             );
    /*}}}*/
    /* SHARE - IMPORT [snapshot_mail_body] FROM A STORED SNAPSHOT ITEM {{{*/
    snapshot_mail_body = t_store.t_store_getItem(snapshot_key, "page");
    if( snapshot_mail_body )
    {
if( log_this) log("%c"+snapshot_mail_body, lf6);

        dom_share.t_share4_IMPORT_TEXT(snapshot_mail_body);
    }
    else {
        log("%c"+caller+"%c No "+snapshot_key+" to import from",lbL+lf6, lbR+lf2);
        dom_share.t_share4_IMPORT_TEXT("{}");

    }
    /*}}}*/
};
/*}}}*/
/*_ t_void_SNAPSHOT {{{*/
let t_void_SNAPSHOT = function()
{
/*{{{*/
let   caller = "t_void_SNAPSHOT";
let log_this = DOM_TOOLS_TAG;

if( log_this) t_log.console_clear(caller);
if( log_this) log("%c"+caller,lbH+lf0);
/*}}}*/
    /* SHARE - IMPORT [empty] SNAPSHOT FROM THE VOID {{{*/
    t_store.t_store_remove_shared_items("IMPORT [empty] SNAPSHOT FROM THE VOID");

    t_hide_hotspot(0);
    dom_share.t_share4_IMPORT_TEXT("{}");
    /*}}}*/
};
/*}}}*/
/*_ t_show_SNAPSHOT {{{*/
let t_show_SNAPSHOT = function()
{
/*{{{
log("t_show_SNAPSHOT: snapshot_mail_body=["+t_util.ellipsis(snapshot_mail_body)+"]");
}}}*/

    if(!snapshot_mail_body) {
        t_fly.t_fly("snapshot_mail_body is empty");
    }
    else {
        t_util.t_copy_to_CLIPBOARD(snapshot_mail_body);
        t_fly.t_fly("SNAPSHOT HAS BEEN COPIED TO THE CLIPBOARD");
        t_fly.t_fly( snapshot_mail_body );
    }
};
/*}}}*/


/* [drag_cursor] */
/*
../script/drag_cursor.js
*/
/*INLINE{{{*/
/*INLINE{{{*/
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
/*INLINE}}}*/
/*}}}*/

/* EXPORT tools */
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
/* eslint-disable object-shorthand */

return { name : "dom_tools"
    , logging : function(state) { return DOM_TOOLS_LOG = t_store_set_state("DOM_TOOLS_LOG",state); }
    , tagging : function(state) { return DOM_TOOLS_TAG = t_store_set_state("DOM_TOOLS_TAG",state); }
    , t_tools_IMPORT

    /* CSS {{{*/
    ,    CSS_BACK
    ,    CSS_BUTTONS_POD
    ,    CSS_CLOSEPIN
    ,    CSS_CONTAINER_SELECTED
    ,    CSS_DISABLED
    ,    CSS_FADING
    ,    CSS_FLOATLOG
    ,    CSS_MAGNIFIED
    ,    CSS_ON_COOLDOWN
    ,    CSS_PAUSE_ANIMATION
    ,    CSS_REMOVING
    ,    CSS_STACKING
    ,    CSS_TOOLBAG_BUTTON
    ,    CSS_TOOLTIP

    /*}}}*/

    ,    LONG_PRESS_ARM
    ,    DIR_GRAB
    ,    DIR_NUM_NEXT
    ,    DIR_NUM_PREV
    ,    DIR_SLOT_NEXT
    ,    DIR_SLOT_PREV

    ,    MOVED_ENOUGH

    /* SCROLL */
    , ...dom_scroll
    , t_has_scrolled        : dom_scroll.get_has_scrolled
    , t_scroll_is_scrolling : dom_scroll.t_scroll_not_done_yet

    /* ACCESSORS */

    ,    t_get_all_csv               : function() { return [ pat_csv, off_csv, alt_csv, bak_csv, bin_csv ]; }
    ,    t_get_pat_csv               : function() { return   pat_csv; }
    ,    t_get_off_csv               : function() { return   off_csv; }
    ,    t_get_alt_csv               : function() { return   alt_csv; }
    ,    t_get_bak_csv               : function() { return   bak_csv; }
    ,    t_get_bin_csv               : function() { return   bin_csv; }

    ,    t_get_body_zoom_percent     : function() { return body_zoom_percent;                }
    ,    t_get_dimm_mask             : function() { return dimm_mask;                        }
    ,    t_get_fly_log               : function() { return     fly_log;                      }
    ,    t_get_has_moved             : function() { return has_moved;                        }
    ,    t_get_onDown_EL             : function() { return onDown_EL;                        }
    ,    t_get_onDown_MS             : function() { return onDown_MS;                        }
    ,    t_get_onWork_EL             : function() { return onWork_EL;                        }
    ,    t_get_onWork_EL_last_used   : function() { return onWork_EL_last_used;              }
    ,    t_get_onWork_MOVABLE_CHILD  : function() { return onWork_MOVABLE_CHILD ;            }
    ,    t_get_onWork_MOVABLE_PANEL  : function() { return onWork_MOVABLE_PANEL;             }
    ,    t_get_onWork_PANEL          : function() { return onWork_PANEL;                     }
    ,    t_get_onWork_SEEK_TOOL      : function() { return t_seek.t_seeker_get_TOOL_label(); }
    ,    t_get_pivot_PANEL           : function() { return pivot_PANEL;                      }
    ,    t_get_shadow_root           : function() { return shadow_root;                      }
    ,    t_get_transcript1           : function() { return transcript1;                      }
    ,    t_get_transcript2           : function() { return transcript2;                      }
    ,    t_tools_IN_WEBVIEW          : function() { return  IN_WEBVIEW;                      }
    ,    t_is_a_handled_tool         : function(e_target) { return ((get_EL_slot(e_target) > 0) || t_is_an_embedded_doc_tool(e_target)); }

    ,    add_sel_csv
    ,    csv_pattern_mov_to_off
    ,    csv_pattern_mov_to_pat
    ,    del_page_and_tool_pointermove_listeners
    ,    get_onDown_SELECTION
    ,    t_get_tool
    ,    get_tool_clone
    ,    pulse_id
    ,    set_off_csv
    ,    set_pat_csv
    ,    set_sel_csv

    ,    t_TOOLS_panels_reload
    ,    t_add_closepin_on_panel
    ,    t_add_input_listener
    ,    t_add_tool_pointermove_listener
    ,    t_blur
    ,    t_cache_armed_by
    ,    t_cache_wph_WH
    ,    t_clear_slot_sync
    ,    t_clr_container_selected
    ,    t_copy_innerHTML_to_clipboard
    ,    t_del_pin_css_on_panel
    ,    t_dimm_mask_displayed        : dimm_mask_displayed
    ,    t_dimm_should_postpone
    ,    t_dimm_start                 : dimm_start
    ,    t_dimm_start_sticky          : dimm_start_sticky
    ,    t_dimm_stop                  : dimm_stop
    ,    t_dom_tools_html_appendChild
    ,    t_dom_tools_html_set_el_class_on_off
    ,    t_focus
    ,    t_get_EL_num
    ,    t_get_consumed_by_table
    ,    t_get_container_selected
    ,    t_get_current_sel_text
    ,    t_get_event_status_object
    ,    t_get_onDown_SCROLL_XY
    ,    t_get_onDown_SEL_TEXT
    ,    t_get_onDown_XY
    ,    t_get_onWork_EL_container
    ,    t_get_onWork_EL_num
    ,    t_get_onWork_EL_slot
    ,    t_get_shadow_tool
    ,    t_get_tools_status_object
    ,    t_handle_1_pat_bag_rotation_update_UI
    ,    t_is_a_click                 : function(e) { return /*!has_moved &&*/ is_a_click(e); }
    ,    t_is_a_drag                  : function(e) { return                   is_a_drag (e); }
    ,    t_is_a_quick_drag
    ,    t_is_a_tool_el
    ,    t_is_panel_magnified
    ,    t_just_loaded
    ,    t_load
    ,    t_load_BEHAVIOR
    ,    t_load_TOOLS_MAP
    ,    t_log_clr_status
    ,    t_onPatternUpdate_done
    ,    t_onclick_target_handle_scroll_to_slot_num
    ,    t_pat_bag1_hide_pattern
    ,    t_pat_bag_open
    ,    t_pattern2_get_sel_bag_thumbs_EM
    ,    t_pattern_del_words_extension
    ,    t_pattern_del_words_option_sfx
    ,    t_pattern_to_sel_text_words_option
    ,    t_pin_panel_at_XY
    ,    t_save_update_post
    ,    t_seek_set_container_selected
    ,    t_set_CSS_PINNED
    ,    t_set_el_pat_words_option
    ,    t_set_id_class_on_off
    ,    t_set_onWork_EL
    ,    t_slot_containers_copy_to_clipboard_innerHTML
    ,    t_some_tool_clicked
    ,    t_store_consider_page_items_worth_storing
    ,    t_store_get_patterns_csv
    ,    t_sync_tool_clones_state
    ,    t_sync_wording
    ,    t_toggle_panel_magnified
    ,    t_tools_get_map
    ,    t_tools_map_get
    ,    t_tools_panel_is_selected
    ,    t_unload
    ,    t_update_TOOLS_MAP_GEOMETRY
    ,    t_was_a_click                : was_a_click
    ,    t_was_a_misclick             : was_a_misclick
    ,    t_window_getSelection_removeAllRanges
    ,    t_words_option_select
    ,    t_words_option_tooltip
    ,    t_words_regex_no_match
    ,    t_words_regex_reset
    ,    t_is_bouncing_e_type

    , t_pattern1_sync_csv_from_ccs
    , t_pattern2_set_sel_bag_innerHTML
    , t_pattern3_pat_off_alt_bak_innerHTML
    , t_store_del_patterns_csv

    /* PROXY .. (for missplaced functions) */
    , t_log_event_status            : (typeof dom_fly  == "undefined") ? null : dom_fly.t_log_event_status
    , t_log_event_status_get        : (typeof dom_fly  == "undefined") ? null : dom_fly.t_log_event_status_get
    , t_log_event_status_if_changed : (typeof dom_fly  == "undefined") ? null : dom_fly.t_log_event_status_if_changed
    , t_log_tools_status_get        : (typeof dom_fly  == "undefined") ? null : dom_fly.t_log_tools_status_get
    , t_seeker_isOn_SLOT_EL         : (typeof dom_seek == "undefined") ? null : dom_seek.t_seeker_isOn_SLOT_EL

    /* INTERNALS EXPOSED */
    , add_listener_capture_active
    , behavior_TOUCH_ELSE_DESKTOP
    , get_onMoveDXY
    , remove_listener_capture_active
    , set_onDown_XY
    , t_CURSOR_del_MOVE_LISTENER
    , t_pat_bag3_dump_all_csv
    , t_preventDefault
    , wording_3_CB_WORDS_RECYCLE
    , zap_onMoveDXY

    /* UNUSED YET */
    , are_p1_p2_in_same_quadrant_and_p2_in_corner
    , is_a_tool_container
    , is_pannel_in_hotspot_quadrant
    , t_del_clearpin_on_panel
    , t_del_closepin_on_panel
    , t_del_push_pin_on_panel
    , t_del_scalepin_on_panel
    , t_get_TOOL_panel_idx_not_pinned_first
    , t_get_TOOL_panel_idx_not_pinned_last
    , t_has_clearpin_on_panel
    , t_has_closepin_on_panel
    , t_has_scalepin_on_panel
    , t_input_2_focus_words_filter_input
    , t_is_tool_deployed
    , t_override_USER_OPTION
    , t_set_spread_ratio_up_to_panel
    , t_set_touchedWord_startContainer
    , t_spread_log
    , was_a_too_quick_last_result
    , post_focus_to

    /* PROXY .. intro.html */
    , del_long_press_listener
    , t_dump_csv_and_sticky : function()
    {
        pat_bag5_hide_sel();
        t_pat_bag3_dump_all_csv();
        t_sticky.t_sticky_unpin_all();
        t_sticky.t_sticky_STORE_NOW();
    }
    , prop_id_toggle
    , seek_pat_bag

    /* PROXY dom_fly */
    , t_tools_panel_select

    , t_event_add_e_consumed_by
    , t_event_clr_consumed
    , t_event_has_been_consumed
    , t_event_set_e_consumed_by
    , t_handle_1_pat_bag
    , t_hide_hotspot
    , t_layout_changed
    , t_load_SNAPSHOT
    , t_show_SNAPSHOT
    , t_show_hotspot
    , t_take_SNAPSHOT
    , t_void_SNAPSHOT

    , t_clear
    , t_handle_1_pat_bag_sort_cycle
    , t_pat_bag3_reselect_all
    , t_pat_bag_close
    , t_sel_pat_bag_all
    , t_tools_hide
    , t_tools_set_hotspot_xy
    , t_tools_show
    , sync_csv            : function(                 ) { pattern_log_bag_csv("t_handle_1_pat_bag_rotation_update_UI"); t_handle_1_pat_bag_rotation_update_UI( pat_csv ); }
    , sync_rot            : function(                 ) { pattern_log_bag_csv("t_handle_1_pat_bag_rotation"); t_handle_1_pat_bag_rotation(); }
    , t_clear_slot_all    : function(                 ) { t_select.t_clear_slot_all(); }
    , t_log_csv           : function(_caller="console") { pattern_log_bag_csv     (_caller); }
    , t_log_status        : function(_caller="console") { t_fly.t_log_event_status(_caller); }
    , t_pat_bag3_reselect : function(                 ) { pat_bag3_reselect(); }
    , t_reselect          : function(                 ) { pat_bag3_reselect( pat_csv ); }
    , log_hotspotXY       : function(                 ) { log(hotspotXY); }

    , hotring_pressed     : function(state) { set_el_class_on_off(hotring       , t_data.CSS_PRESSED, state); }
    , dom_tools_pressed   : function(state) { set_el_class_on_off(dom_tools_html, t_data.CSS_PRESSED, state); }

    /* PROXY INTRO */
    , get_onDown_SHIFT    : function()  { return onDown_SHIFT; }
    , get_onDown_CTRL     : function()  { return onDown_CTRL ; }
    , get_onDown_ALT      : function()  { return onDown_ALT  ; }
    , t_get_mouselong_press_consumed_by

    /* STATUS INDICATOR */
    , t_add_NOT_MOVED_ENOUGH
    , t_del_NOT_MOVED_ENOUGH
    , t_add_MOVE_ON_COOLDOWN
    , t_del_MOVE_ON_COOLDOWN

/* DEBUG */
, TOOL_SET
, dimm_mask_displayed
, div_slot_containers_displayed
, hotspot
, load5_STORAGE_hotspot
, t_IS_ON_GRID_observerCB
, t_MASK_OR_HIDE_changed
, t_activate_tools_tier1
, t_click_panel_pin_CB
, t_drag_hotspot_xy_delay
, t_flash_unpinned_panels
, t_is_a_tools_id_tier
, t_load_log_loaded_modules
, t_outline_viewport_top_containers
, t_raise_pivot_PANEL
, t_raise_pivot_PANEL_layout
, t_reload
, t_sync_layout
, t_sync_styles
, t_sync_tools_position
, t_sync_tools_tier2
, t_tools_pointermove_drag_hotspot
, t_tools_sync_top_xy

, move_drag_cursor              : drag_cursor.move_drag_cursor
, get_mouseUP_display_state     : drag_cursor.get_mouseUP_display_state
, show_drag_cursor              : drag_cursor.show_drag_cursor
, hide_drag_cursor              : drag_cursor.hide_drag_cursor

};

/*}}}*/
}());
/*
document.addEventListener("DOMContentLoaded", function(e) { console.log(DOM_TOOLS_JS_TAG+": "+e.type); });
*/

/* IPC */
/*{{{*/
/*{{{*/
let IPC_SCRIPT_ID    = DOM_TOOLS_JS_ID;
let IPC_EXTENSION_ID = "background_js";

const LF        = String.fromCharCode(10);
const  log = console.log;
const warn = console.warn;
/*{{{
let IPC_LOG          = dom_log.LOG_MAP.IPC_LOG;
    ({ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX } = dom_log.LOG_BG_CSS);
    ({ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX } = dom_log.LOG_FG_CSS);
    ({ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb           } = dom_log.LOG_XX_CSS);
}}}*/
const IPC_LOG          = true;
const IPC_LB0_COLOR    = dom_log.LOG_BG_CSS.lb0;
const IPC_LBA_COLOR    = dom_log.LOG_BG_CSS.lbA;
const IPC_LBF_COLOR    = dom_log.LOG_BG_CSS.lbF;
const IPC_LBH_COLOR    = dom_log.LOG_BG_CSS.lbH;

const IPC_LF5_COLOR    = dom_log.LOG_FG_CSS.lf5;
const IPC_LOG_COLOR    = dom_log.LOG_BG_CSS.lb6;
const IPC_MSG_COLOR    = dom_log.LOG_XX_CSS.lbF + IPC_LOG_COLOR;

/*}}}*/
/*… t_handle_ipc_message {{{*/
let t_handle_ipc_message = function(ipc)
{
"use strict";
let log_this = IPC_LOG;
if( log_this) log("%c "+IPC_SCRIPT_ID+" %c t_handle_ipc_message(ipc)"                        , IPC_LOG_COLOR, IPC_LBA_COLOR);

    /* [ipc.start] .. (ON-OFF) {{{*/
    if((typeof ipc.start != "undefined"))
    {
        if(log_this) log("%c "+IPC_SCRIPT_ID+" %c EXTENSION INSTRUCTION DETECTED"            , IPC_LOG_COLOR, IPC_LBF_COLOR);

        let script_loaded = t_ipc_handle_start(ipc.start);

        if(log_this) log("%c "+IPC_SCRIPT_ID+" %c TOOLS LOADED AND WAITING "+script_loaded   , IPC_LOG_COLOR, IPC_LBF_COLOR);
    }
    /*}}}*/
    /* [ipc.theme] {{{*/
    else if(typeof ipc.theme != "undefined")
    {
        t_ipc_handle_theme( ipc.theme );
    }
    /*}}}*/
};
/*}}}*/
/*… t_ipc_handle_start {{{*/
let t_ipc_handle_start = function(start)
{
"use strict";
let log_this = IPC_LOG;
    if(log_this) log("%c "+IPC_SCRIPT_ID+" %c t_ipc_handle_start("+start+")"                 , IPC_LOG_COLOR, IPC_LBA_COLOR);
    /* ON {{{*/
    if(start == "ON")
    {
        if(!dom_ipc.t_ipc_is_IPC_SCRIPT_loaded() )
        {
            if(log_this) log("%c "+IPC_SCRIPT_ID+" %c LOADING "                              , IPC_LOG_COLOR, IPC_LBF_COLOR);

            dom_tools.t_load();
            let script_loaded = ((typeof DOM_TOOLS_CSS_TAG != "undefined") && DOM_TOOLS_CSS_TAG);

if(log_this) log("...DOM_TOOLS_CSS_TAG=["+ DOM_TOOLS_CSS_TAG +"]");
if(log_this) log(".......script_loaded=["+ script_loaded     +"]");
            return script_loaded;
        }
        else {

            /* RELOAD */
            let dom_tools_html =   dom_tools.t_get_tool("dom_tools_html");
            if( dom_tools_html && (dom_tools_html.style.visibility == "hidden"))
            {
                if(log_this) log("%c "+IPC_SCRIPT_ID+" %c RELOADING "                        , IPC_LOG_COLOR, IPC_LBF_COLOR);
                dom_tools.t_reload();
            }
            /* ALREADY LOADED */
            else {
                if(log_this) log("%c "+IPC_SCRIPT_ID+" %c ALREADY LOADED .. RE-SENDING "+dom_tools.TOOLS4_DEPLOYED    , IPC_LOG_COLOR, IPC_LBF_COLOR);
                let ipc
                    = { dom_tools_t_load : dom_tools.TOOLS4_DEPLOYED
                      ,           caller : DOM_TOOLS_JS_TAG+".t_ipc_handle_start"
                    };
                dom_ipc.t_ipc_SEND( ipc );
            }

            return true;
        }
    }
    /*}}}*/
    /* OFF {{{*/
    else {
        if( dom_ipc.t_ipc_is_IPC_SCRIPT_loaded() )
        {
            if(log_this) log("%c "+IPC_SCRIPT_ID+" %c UNLOADING "                            , IPC_LOG_COLOR, IPC_LBF_COLOR);

            dom_tools.t_unload();
        }
        else {
            if(log_this) log("%c "+IPC_SCRIPT_ID+" %c NOT YET LOADED"                        , IPC_LOG_COLOR, IPC_LBF_COLOR);

            dom_ipc.t_wait_for_startup_message_from_extension( DOM_TOOLS_JS_ID );
        }

        return true;
    }
    /*}}}*/
};
/*}}}*/
/*… t_ipc_handle_theme {{{*/
let t_ipc_handle_theme = function(theme)
{
"use strict";
let log_this = IPC_LOG;
if(log_this) log("%c "+IPC_SCRIPT_ID+" %c t_ipc_handle_theme("+theme+")"                 , IPC_LOG_COLOR, IPC_LBA_COLOR);

    let t_theme = "theme_"+theme.toUpperCase();
if(log_this) log("%c "+DOM_LOAD_ID+" calling dom_load", IPC_LBH_COLOR+IPC_LF5_COLOR);
    dom_tools.prop_id_toggle( t_theme );
};
/*}}}*/
/*}}}*/
if(IPC_LOG) log("%c "+DOM_TOOLS_JS_ID+" LOADING DONE ", IPC_LBH_COLOR+IPC_LF5_COLOR);
/* RUNNING AS AN EXTENSION {{{*/
/* eslint-disable no-undef */
let running_as_an_extension = (typeof chrome != "undefined") && chrome.runtime;
if( running_as_an_extension )
{
    let dom_tools_html_el       = document.querySelector("#dom_tools_html"); log("#dom_tools_html", dom_tools_html_el);
    if(!dom_tools_html_el) {
        if(IPC_LOG) log("%c LOADING AS AN EXTENSION ", IPC_MSG_COLOR);
        if(IPC_LOG) log("manifest", chrome.runtime.getManifest());
    }
    else {
        if(IPC_LOG) log("%c RUNNING AS AN EXTENSION ", IPC_MSG_COLOR);
        //console.profile("t_load");
        //dom_tools.t_load();
        //console.profileEnd();
if(IPC_LOG) log("%c LISTENING TO BACKGROUND SCRIPT MESSAGES", IPC_MSG_COLOR);

        let t_onMessage_CB = function(message,sender,response_handler=null) /* eslint-disable-line strict */
        {
            if(IPC_LOG) log(  "%c HANDLING MESSAGE "+JSON.stringify(message) , IPC_MSG_COLOR);
            switch( message.cmd )
            {
            case    "t_load"  : message.result = "CALLING ["+message.cmd+"] IN "+DOM_TOOLS_JS_TAG; dom_tools.t_load  ();  break;
            case    "t_unload": message.result = "CALLING ["+message.cmd+"] IN "+DOM_TOOLS_JS_TAG; dom_tools.t_unload();  break;
            default           : message.result = "IGNORING UNEXPECTED MESSAGE.cmd ["+  message.cmd  +"]"; warn();
            }
            if(response_handler) response_handler( message );
            return false; // whether to wait for an async response .. or not
        };

        chrome.runtime.onMessage.addListener( t_onMessage_CB );
    }
}
/* eslint-enable  no-undef */
/*}}}*/
/* STAND-ALONE .. EXTENSION STARTUP MESSAGE RECEIVED {{{*/
else {
    let extension_signature
        = document.body.attributes[IPC_EXTENSION_ID]
        ? document.body.attributes[IPC_EXTENSION_ID].textContent
        : "";
    if(IPC_LOG) log("%c body.attributes[IPC_EXTENSION_ID "+IPC_EXTENSION_ID+"]%c = %c["+extension_signature+"]", IPC_MSG_COLOR, IPC_LBA_COLOR, IPC_LBF_COLOR+IPC_LB0_COLOR);

    if(IPC_LOG) log("%c "+DOM_TOOLS_JS_ID+" calling t_load", IPC_LBH_COLOR+IPC_LF5_COLOR);

    //console.profile("t_load");
    dom_tools.t_load();
    //console.profileEnd();
}
/*}}}*/

/*
:e splitter_embedded.html
:e             $RPROFILES/script/stub/dom_sentence_event.js
*/

