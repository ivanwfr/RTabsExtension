/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_sticky                                                               │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* globals dom_data, dom_log, dom_util, dom_i18n, dom_prop, dom_store, dom_fly, dom_view, dom_seek, dom_tools */

/* globals console, localStorage, window, document, Node */
/* globals setTimeout, clearTimeout */
/* globals requestAnimationFrame, cancelAnimationFrame */

/* exported dom_sticky DOM_STICKY_JS_TAG, dom_sticky */

/* eslint-disable complexity           */
/* eslint-disable max-depth            */
/* eslint-disable new-cap              */
/* eslint-disable no-return-assign     */
/* eslint-disable no-unused-vars       */
/* eslint-disable no-warning-comments  */
/* eslint-disable object-shorthand     */
/* eslint-disable prefer-object-spread */

const DOM_STICKY_JS_ID      = "dom_sticky_js";
const DOM_STICKY_JS_TAG     = DOM_STICKY_JS_ID  +" (230706:20h:41)";
/*}}}*/
let dom_sticky  = (function() {
"use strict";

/* IMPORT {{{*/
/*➔ t_sticky_IMPORT {{{*/
/* t_data .. t_tools {{{*/
/*....................................*/
let t_data     = {}        ;    /* 05 */
let t_log      = {}        ;    /* 06 */
let t_util     = {}        ;    /* 07 */
let t_i18n     = {}        ;    /* 08 */
let t_prop     = {}        ;    /* 09 */
let t_store    = {}        ;    /* 10 */
let t_fly      = {}        ;    /* 11 */
/*....................................*/
/*  t_wording  = {}        ; */ /* 12 */
/*  t_select   = {}        ; */ /* 13 */
/*  t_slot     = {}        ; */ /* 14 */
/*....................................*/
/*  t_hide     = {}        ; */ /* 15 */
let t_view     = {}        ;    /* 16 */
/*➔ t_sticky   = {}        ; */ /* 17 */
let t_seek     = {}        ;    /* 18 */
/*  t_share    = {}        ; */ /* 19 */
/*....................................*/
/*  t_grid     = {}        ; */ /* 20 */
/*  t_gutter   = {}        ; */ /* 21 */
/*....................................*/
/*  t_ipc      = {}        ; */ /* 22 */
let t_tools    = {}        ;    /* 23 */
/*....................................*/
/*}}}*/
let t_sticky_IMPORT = function(log_this)
{
/* t_data .. t_tools {{{*/
/* ...................................*/
    t_data    = dom_data   ;    /* 05 */
    t_log     = dom_log    ;    /* 06 */
    t_util    = dom_util   ;    /* 07 */
    t_i18n    = dom_i18n   ;    /* 08 */
    t_prop    = dom_prop   ;    /* 09 */
    t_store   = dom_store  ;    /* 10 */
    t_fly     = dom_fly    ;    /* 11 */
/* ...................................*/
/*  t_wording = dom_wording; */ /* 12 */
/*  t_select  = dom_select ; */ /* 13 */
/*  t_wot     = dom_wot    ; */ /* 13 */
/*  t_slot    = dom_slot   ; */ /* 14 */
/* ...................................*/
/*  t_hide    = dom_hide   ; */ /* 15 */
    t_view    = dom_view   ;    /* 16 */
/*➔ t_sticky  = dom_sticky ; */ /* 17 */
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
    sticky_INTERN();
    /* MODULE LOGGING TAGGING {{{*/
    DOM_STICKY_LOG = DOM_STICKY_LOG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_STICKY_LOG"));
    DOM_STICKY_TAG = DOM_STICKY_TAG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_STICKY_TAG"));

    /*}}}*/
if(log_this) log("%c 16 STICKY", lbH+lf6);
};
/*}}}*/
/*_   sticky_INTERN {{{*/
/*{{{*/
/* t_data {{{*/
let CSS_CC1, CSS_CC2, CSS_CC3, CSS_CC4, CSS_CC5, CSS_CC6, CSS_CC7, CSS_CC8, CSS_CC9, CSS_CC0;

let CSS_ANCHOR_BACK;
let CSS_ANCHOR_CHILD;
let CSS_ANCHOR_CLOSEST;
let CSS_ANCHOR_DETACHED;
let CSS_ANCHOR_NODE;
let CSS_ANCHOR_NOT_FOUND;
let CSS_ANCHOR_UNSET;
let CSS_BORDERING;
let CSS_COLLAPSING;
let CSS_DIMMED;
let CSS_DIMMED_OFF;
let CSS_FIXED ;
let CSS_HAS_FOCUS;
let CSS_PASTE_TARGET;
let CSS_PINNED;
let CSS_PRESSED;
let CSS_RESIZE_CAP;
let CSS_RESIZING;
let CSS_SEEK_TARGET;
let CSS_SLOW_LAYOUT;
let CSS_STICKY_LOG;
let CSS_STICKY_MSG_EDIT;
let CSS_STICKY_RAISED;
let CSS_STICKY_RING;
let CSS_STICKY_TOOL;
let CSS_TOUCHED;

let SCROLLBAR_WIDTH;

/*}}}*/
/* t_log {{{*/
let LOG_MAP;
let lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;
let log, logBIG, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;

let log_anchor_step;
/*}}}*/
/* t_util {{{*/

let JSON_parse;
let add_el_class;
let atob_msg;
let btoa_msg;
let check_xy_in_node_rect;
let clearSelection;
let comma_to_LF;
let csv_log;
let del_el_class;
let ellipsis;
let ellipsis_16;
let ellipsis_short;
let encode_LF;
let escapeHTML;
let get_document_el_at_XY;
let get_el_anchor_in_view_array;
let get_el_child_with_class;
let get_el_child_with_tag;
let get_el_parent_with_class;
let get_el_transformOrigin;
let get_el_xy;
let get_id_or_node_path_tail;
let get_id_or_tag;
let get_n_lbl;
let get_n_txt;
let get_node_path;
let get_node_path_tail;
let get_node_path_target;
let get_node_txt_id_or_tag_path;
let get_xy_tlbr_dist;
let has_el_class;
let has_scrollbar;
let i18n_get;
let is_contained_by_parent;
let is_el_or_child_of_parent_el;
let is_event_on_scrollbar;
let not_an_anchor_target;
let selectNodeContents;
let set_el_class;
let set_el_class_on_off;
let set_el_class_removing;
let strip_CR_LF;
let strip_HTML;
let strip_contentEditable;
let t_TEXT_LINES_to_COLORED_HTML;
let vbar_to_LF;

/*}}}*/
/*}}}*/
let   sticky_INTERN = function()
{
    /* t_data {{{*/
    [ CSS_CC1, CSS_CC2, CSS_CC3, CSS_CC4, CSS_CC5, CSS_CC6, CSS_CC7, CSS_CC8, CSS_CC9, CSS_CC0 ] = t_data.CCX_CLASSLIST;

    CSS_ANCHOR_BACK     = t_data.CSS_ANCHOR_BACK;
    CSS_ANCHOR_CHILD    = t_data.CSS_ANCHOR_CHILD;
    CSS_ANCHOR_CLOSEST  = t_data.CSS_ANCHOR_CLOSEST;
    CSS_ANCHOR_DETACHED = t_data.CSS_ANCHOR_DETACHED;
    CSS_ANCHOR_NODE     = t_data.CSS_ANCHOR_NODE;
    CSS_ANCHOR_NOT_FOUND= t_data.CSS_ANCHOR_NOT_FOUND;
    CSS_ANCHOR_UNSET    = t_data.CSS_ANCHOR_UNSET;
    CSS_BORDERING       = t_data.CSS_BORDERING;
    CSS_COLLAPSING      = t_data.CSS_COLLAPSING;
    CSS_DIMMED          = t_data.CSS_DIMMED;
    CSS_DIMMED_OFF      = t_data.CSS_DIMMED_OFF;
    CSS_FIXED           = t_data.CSS_FIXED ;
    CSS_HAS_FOCUS       = t_data.CSS_HAS_FOCUS;
    CSS_PASTE_TARGET    = t_data.CSS_PASTE_TARGET;
    CSS_PINNED          = t_data.CSS_PINNED;
    CSS_PRESSED         = t_data.CSS_PRESSED;
    CSS_RESIZE_CAP      = t_data.CSS_RESIZE_CAP;
    CSS_RESIZING        = t_data.CSS_RESIZING;
    CSS_SEEK_TARGET     = t_data.CSS_SEEK_TARGET;
    CSS_SLOW_LAYOUT     = t_data.CSS_SLOW_LAYOUT;
    CSS_STICKY_LOG      = t_data.CSS_STICKY_LOG;
    CSS_STICKY_MSG_EDIT = t_data.CSS_STICKY_MSG_EDIT;
    CSS_STICKY_RAISED   = t_data.CSS_STICKY_RAISED;
    CSS_STICKY_RING     = t_data.CSS_STICKY_RING;
    CSS_STICKY_TOOL     = t_data.CSS_STICKY_TOOL;
    CSS_TOUCHED         = t_data.CSS_TOUCHED;

    SCROLLBAR_WIDTH     = t_data.SCROLLBAR_WIDTH;

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
    log_anchor_step     = t_log.log_anchor_step;
    /*}}}*/
    /* t_util {{{*/

    JSON_parse                      = t_util.JSON_parse;
    add_el_class                    = t_util.add_el_class;
    atob_msg                        = t_util.atob_msg;
    btoa_msg                        = t_util.btoa_msg;
    check_xy_in_node_rect           = t_util.check_xy_in_node_rect;
    clearSelection                  = t_util.clearSelection;
    comma_to_LF                     = t_util.comma_to_LF;
    csv_log                         = t_util.csv_log;
    del_el_class                    = t_util.del_el_class;
    ellipsis                        = t_util.ellipsis;
    ellipsis_16                     = t_util.ellipsis_16;
    ellipsis_short                  = t_util.ellipsis_short;
    encode_LF                       = t_util.encode_LF;
    escapeHTML                      = t_util.escapeHTML;
    get_document_el_at_XY           = t_util.get_document_el_at_XY;
    get_el_anchor_in_view_array     = t_util.get_el_anchor_in_view_array;
    get_el_child_with_class         = t_util.get_el_child_with_class;
    get_el_child_with_tag           = t_util.get_el_child_with_tag;
    get_el_parent_with_class        = t_util.get_el_parent_with_class;
    get_el_transformOrigin          = t_util.get_el_transformOrigin;
    get_el_xy                       = t_util.get_el_xy;
    get_id_or_node_path_tail        = t_util.get_id_or_node_path_tail;
    get_id_or_tag                   = t_util.get_id_or_tag;
    get_n_lbl                       = t_util.get_n_lbl;
    get_n_txt                       = t_util.get_n_txt;
    get_node_path                   = t_util.get_node_path;
    get_node_path_tail              = t_util.get_node_path_tail;
    get_node_path_target            = t_util.get_node_path_target;
    get_node_txt_id_or_tag_path     = t_util.get_node_txt_id_or_tag_path;
    get_xy_tlbr_dist                = t_util.get_xy_tlbr_dist;
    has_el_class                    = t_util.has_el_class;
    has_scrollbar                   = t_util.has_scrollbar;
    is_contained_by_parent          = t_util.is_contained_by_parent;
    is_el_or_child_of_parent_el     = t_util.is_el_or_child_of_parent_el;
    is_event_on_scrollbar           = t_util.is_event_on_scrollbar;
    not_an_anchor_target            = t_util.not_an_anchor_target;
    selectNodeContents              = t_util.selectNodeContents;
    set_el_class                    = t_util.set_el_class;
    set_el_class_on_off             = t_util.set_el_class_on_off;
    set_el_class_removing           = t_util.set_el_class_removing;
    strip_CR_LF                     = t_util.strip_CR_LF;
    strip_HTML                      = t_util.strip_HTML;
    strip_contentEditable           = t_util.strip_contentEditable;
    t_TEXT_LINES_to_COLORED_HTML    = t_util.t_TEXT_LINES_to_COLORED_HTML;
    vbar_to_LF                      = t_util.vbar_to_LF;

    /*}}}*/
    /* t_i18n {{{*/

    i18n_get                        = t_i18n.i18n_get;

    /*}}}*/
    sticky_DEPEND();
};
/*}}}*/
/*_   sticky_DEPEND {{{*/
/*{{{*/
/*
/\v<(STICKY_HAND|STICKY_PAD|STICKY_PAD_NUM|STICKY_PAD_MSG|STICKY_PAD_DAT|STICKY_ROTATE|STICKY_FIX|STICKY_PEN|STICKY_REFLOW|STICKY_REFONT|STICKY_PASTE)>
*/

let STICKY0_HTML;

let STICKY1_HTML_HAND;

let STICKY2_HTML_PAD0;

let STICKY3_HTML_PAD_NUM ;
let STICKY4_HTML_PAD_MSG ;
let STICKY5_HTML_PAD_DAT ;

let STICKY6_HTML_TAIL;
let STICKY7_HTML_FIX;
let STICKY8_HTML_PEN;
let STICKY9_HTML_REFONT;
let STICKY9_HTML_REFLOW;

let STICKY9_HTML_RESIZE_NW;
let STICKY9_HTML_RESIZE_NE;
let STICKY9_HTML_RESIZE_SE;
let STICKY9_HTML_RESIZE_SW;

let STICKY0_HTML_PASTE;

/*}}}*/
let   sticky_DEPEND = function()
{
    /* t_data {{{*/

    /* HAND  .. (1) {{{*/
    STICKY1_HTML_HAND
        = "<span  class='"+ STICKY_HAND     +"' >&nbsp;"
        +  "<span class='"+ STICKY_HAND_MOV +"' >"+ t_data.SYMBOL_CLOCKWISE_OPEN_CIRCLE  +"</span>"
        + "</span>";

    /*}}}*/
    /* PAD   .. (2 3 4 5) .. NUM MSG DAT{{{*/
    STICKY2_HTML_PAD0
        = "<div   class='"+ STICKY_PAD      + " " + STICKY_PLACE_HOLDER_PAD_BGNUM +"'>" + "</div>";

    STICKY3_HTML_PAD_NUM
        =  "<span class='"+ STICKY_PAD_NUM  +"' >"+ STICKY_PLACE_HOLDER_PAD_NUM   +"</span>";

    STICKY4_HTML_PAD_MSG
        =  "<pre  class='"+ STICKY_PAD_MSG  +" '>"+ STICKY_PLACE_HOLDER_PAD_MSG   +"</pre>";

    STICKY5_HTML_PAD_DAT
        =  "<span class='"+ STICKY_PAD_DAT  +"'>"                                 +"</span>";

    /*}}}*/
    /* TOOLS .. (6 7 8 9) .. TAIL FIX PEN PASTE {{{*/
    STICKY6_HTML_TAIL
        = "<span  class='"+ STICKY_ROTATE       +"' >"
        +  "<span class='"+ STICKY_ROTATE_DIR   +"' >"+ t_data.SYMBOL_BLACK_L_HAND + t_data.SYMBOL_BLACK_R_HAND +"</span>"
        + "</span>";

    STICKY7_HTML_FIX
        =  "<span class='"+ STICKY_FIX          +"' >"+ t_data.SYMBOL_STICKY_FIX             +"</span>";

    STICKY8_HTML_PEN
        =  "<span class='"+ STICKY_PEN          +"' >"+ t_data.SYMBOL_STICKY_PEN             +"</span>";

    STICKY9_HTML_REFONT
        =  "<span class='"+ STICKY_REFONT       +"' >"+ t_data.SYMBOL_STICKY_REFONT          +"</span>";

    STICKY9_HTML_REFLOW
        =  "<span class='"+ STICKY_REFLOW       +"' >"+ t_data.SYMBOL_STICKY_REFLOW          +"</span>";

    STICKY9_HTML_RESIZE_NW
        = "<span  class='"+ STICKY_RESIZE+" "+CSS_POINT_NW+"' >"
        +  "<span class='"+ STICKY_RESIZE_DIR   +"' >"+ t_data.SYMBOL_BLACK_L_HAND +"<br>"+ t_data.SYMBOL_BLACK_R_HAND +"</span>"
        + "</span>";

    STICKY9_HTML_RESIZE_NE
        = "<span  class='"+ STICKY_RESIZE+" "+CSS_POINT_NE+"' >"
        +  "<span class='"+ STICKY_RESIZE_DIR   +"' >"+ t_data.SYMBOL_BLACK_L_HAND +"<br>"+ t_data.SYMBOL_BLACK_R_HAND +"</span>"
        + "</span>";

    STICKY9_HTML_RESIZE_SE
        = "<span  class='"+ STICKY_RESIZE+" "+CSS_POINT_SE+"' >"
        +  "<span class='"+ STICKY_RESIZE_DIR   +"' >"+ t_data.SYMBOL_BLACK_L_HAND +"<br>"+ t_data.SYMBOL_BLACK_R_HAND +"</span>"
        + "</span>";

    STICKY9_HTML_RESIZE_SW
        = "<span  class='"+ STICKY_RESIZE+" "+CSS_POINT_SW+"' >"
        +  "<span class='"+ STICKY_RESIZE_DIR   +"' >"+ t_data.SYMBOL_BLACK_L_HAND +"<br>"+ t_data.SYMBOL_BLACK_R_HAND +"</span>"
        + "</span>";


    STICKY0_HTML_PASTE
        =  "<span class='"+ STICKY_PASTE        +"'>" + t_data.SYMBOL_STICKY_PASTE           +"</span>";

    /*}}}*/

    STICKY0_HTML
        = STICKY3_HTML_PAD_NUM
        + STICKY4_HTML_PAD_MSG
        + STICKY5_HTML_PAD_DAT
        + STICKY6_HTML_TAIL
        + STICKY7_HTML_FIX
        + STICKY8_HTML_PEN
        + STICKY9_HTML_REFONT
        + STICKY9_HTML_REFLOW
        + STICKY9_HTML_RESIZE_NW
        + STICKY9_HTML_RESIZE_NE
        + STICKY9_HTML_RESIZE_SE
        + STICKY9_HTML_RESIZE_SW
        + STICKY0_HTML_PASTE
    ;
    /*}}}*/

};
/*}}}*/
/*_ localStorage {{{*/

let localStorage_setItem = function(key,val) {          try { if(val)  localStorage.setItem   (key,val); else localStorage.removeItem(key); } catch(ex) {} };
let localStorage_getItem = function(key    ) { let val; try {    val = localStorage.getItem   (key    );                                    } catch(ex) {} return val; };
let localStorage_delItem = function(key    ) {          try { /*...*/  localStorage.removeItem(key    );                                    } catch(ex) {} };

/*}}}*/
/*}}}*/
/* CONST {{{*/
let   DOM_STICKY_LOG        = false;
let   DOM_STICKY_TAG        = false;
/* DIR {{{*/
const CSS_LAYOUT_NE             = "layout_NE";
const CSS_LAYOUT_NW             = "layout_NW";
const CSS_LAYOUT_SE             = "layout_SE";
const CSS_LAYOUT_SW             = "layout_SW";

const CSS_POINT_EE              = "point_EE";
const CSS_POINT_SE              = "point_SE";
const CSS_POINT_SW              = "point_SW";
const CSS_POINT_WW              = "point_WW";
const CSS_POINT_NW              = "point_NW";
const CSS_POINT_NE              = "point_NE";
const CSS_POINT_00              = "point_00";
const CSS_POINT_DEFAULT         = CSS_POINT_SE;
const CSS_POINT_XX
    = [   CSS_POINT_EE
        , CSS_POINT_SE
        , CSS_POINT_SW
        , CSS_POINT_WW
        , CSS_POINT_NW
        , CSS_POINT_NE
        , CSS_POINT_00
    ];

const CSS_ROTATE_NE             = "rotate_NE";
const CSS_ROTATE_NW             = "rotate_NW";
const CSS_ROTATE_SE             = "rotate_SE";
const CSS_ROTATE_SW             = "rotate_SW";
const CSS_ROTATE_XX
    = [   CSS_ROTATE_NE
        , CSS_ROTATE_NW
        , CSS_ROTATE_SE
        , CSS_ROTATE_SW
    ];

/*}}}*/
/* LAYOUT {{{*/
const WH_CONFINED_PERCENT = "90%";

/*}}}*/
/* WHITE_SPACE {{{*/
const CSS_WS_PRE          = "ws_pre";
const CSS_WS_PRE_WRAP     = "ws_pre_wrap";
const CSS_WS_BREAK_SPACES = "ws_break_spaces";
const CSS_WS_PRE_LINE     = "ws_pre_line";
const CSS_WS_NORMAL       = "ws_normal";
const CSS_WS_NOWRAP       = "ws_nowrap";
const CSS_WS_DEFAULT      = CSS_WS_PRE_WRAP;
const CSS_WS_XX
    = [   CSS_WS_PRE_WRAP
        , CSS_WS_PRE
        , CSS_WS_BREAK_SPACES
        , CSS_WS_PRE_LINE
        , CSS_WS_NORMAL
        , CSS_WS_NOWRAP
    ];

/*}}}*/
/* CLASS {{{*/
const STICKY_HAND         = "sticky_hand";
const STICKY_HAND_MOV     = "sticky_hand_mov";

const STICKY_ROTATE       = "sticky_rotate";
const STICKY_ROTATE_DIR   = "sticky_rotate_dir";

const STICKY_FIX          = "sticky_fix";
const STICKY_PEN          = "sticky_pen";

const STICKY_REFONT       = "sticky_refont";

const STICKY_REFLOW       = "sticky_reflow";

const STICKY_RESIZE       = "sticky_resize";
const STICKY_RESIZE_DIR   = "sticky_resize_dir";

const STICKY_PAD          = "sticky_pad";
const STICKY_PAD_NUM      = "sticky_pad_num";
const STICKY_PAD_MSG      = "sticky_pad_msg";
const STICKY_PAD_DAT      = "sticky_pad_dat";

const STICKY_PASTE        = "sticky_paste";

/*}}}*/
/* HTML {{{*/

const STICKY_PLACE_HOLDER_PAD_BGNUM = "STICKY_BGNUM";
const STICKY_PLACE_HOLDER_PAD_NUM   = "STICKY_PAD_NUM";
const STICKY_PLACE_HOLDER_PAD_MSG   = "STICKY_PAD_MSG";

/*}}}*/
/* MAX onWork_STICKY {{{*/
const STICKY_MAX              =   10;
const STICKY_SEL_TEXT_LEN_MAX = 4096;
const ANCHOR_CHILDREN_MAX     =  256; /* BEFORE PREFER CURRENT ANCHOR */

let onWork_STICKY;
/*}}}*/
/*}}}*/

/* CREATE..UPDATE */
/*{{{*/
/*➔ t_sticky_NEW_XY_SEL_TEXT {{{*/
let t_sticky_NEW_XY_SEL_TEXT = function(x, y, sel_text)
{
/*{{{*/
let   caller = "t_sticky_NEW_XY_SEL_TEXT";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log("%c"+caller+"("+ellipsis_short(strip_CR_LF(sel_text))+")", lb3);
if( log_this) log_caller();
/*}}}*/

    let sticky = sticky_NEW(x, y);
    if(!sticky ) return null;

    /* update changed time .. set msg .. layout sticky_pad content */
    sticky_NEW_XY_SEL_TEXT_MSG(sticky, escapeHTML(sel_text));

    sticky.touched = STICKY_HAND; /* DRAG NEW STICKY */

    sticky_FIXED_START(sticky);

    t_tools.t_save_update_post(caller);

    return sticky;
};
/*}}}*/
/*…   sticky_NEW_XY_SEL_TEXT_MSG {{{*/
let   sticky_NEW_XY_SEL_TEXT_MSG = function(sticky,msg)
{
/*{{{*/
let   caller = "sticky_NEW_XY_SEL_TEXT_MSG";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log(caller+"("+msg+")");
/*}}}*/

    /* update changed time */
    sticky.date_MS = new Date().getTime();

    /* set html */
    sticky_change_msg(sticky, msg);

};
/*}}}*/
/*… sticky_NEW {{{*/
let sticky_NEW = function(fixed_x, fixed_y)
{
/*{{{*/
let   caller = "sticky_NEW("+fixed_x+", "+fixed_y+")";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log(caller);
/*}}}*/
    /* PICK FIRST NOT PINNED {{{*/
    let sticky_num;
    for(sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let sticky = sticky_array[sticky_num];
        if(!sticky || !has_el_class(sticky, CSS_PINNED))
            break;
    }
    /*}}}*/
    /* WARN [STICKY_MAX] {{{*/
    if(sticky_num > STICKY_MAX)
    {
        t_fly.t_fly_add_innerHTML( "<div class='stage_0_log'>"
                            + "<em class='cc4'>sticky_num &gt; STICKY_MAX</em>"
                            + " .. "
                            + "<em class='big cc2'>"+STICKY_MAX+"</em>"
                            +"</div>"
                           );

        t_sticky_CHOOSE();
        return null;
    }
    /*}}}*/
    /* PLACE AND DIMM A NEW OR UNPINNED [sticky] {{{*/
    let sticky  = sticky_GET( sticky_num );

    sticky.xy.x = fixed_x + window.scrollX;
    sticky.xy.y = fixed_y + window.scrollY - STICKY_TOOL_HALF_HEIGHT;
    t_tools.t_pin_panel_at_XY(sticky, sticky.xy.x, sticky.xy.y);

    /*}}}*/
    /* SCROLL TO CENTER {{{*/
    sticky_scrollTo(sticky_num, fixed_x, fixed_y);

    /*}}}*/
if( log_this) log("...return "+get_n_lbl(sticky)+"");
    return sticky;
};
/*}}}*/
/*… sticky_GET {{{*/
/*{{{*/
let sticky_array = [];

/*}}}*/
let sticky_GET = function(sticky_num)
{
/*{{{
    console.dir(sticky_array);
    log_key_val_group("sticky_array"
                      , {   sticky_array_sticky_num          : sticky_array.          sticky_num
                          , sticky_array_sticky_num_         : sticky_array[          sticky_num  ]
                          , sticky_array_String_sticky_num   : sticky_array[  String( sticky_num )]
                          , sticky_array_parseInt_sticky_num : sticky_array[parseInt( sticky_num )]
                      }, lf7, false);
}}}*/

    /* FROM CACHE */
    let sticky = sticky_array[sticky_num];
    if(!sticky) {
        sticky = sticky_CREATE(sticky_num);          /* CREATE NEW */
        sticky_array[          String(sticky_num)] = sticky; /* ADD CACHED */

/*{{{
t_log_panel_style_zIndex(sticky, "TT GET: "+sticky.num);
}}}*/
    }
/*{{{
log("sticky_GET(sticky_num) ...return "+get_n_lbl(sticky)+"");
}}}*/
    return sticky;
};
/*}}}*/
/*… sticky_PIN_x_y_pos_date_msg {{{*/
let sticky_PIN_x_y_pos_date_msg = function(sticky, x, y, position, date_MS, msg)
{
    sticky.xy.x = x;
    sticky.xy.y = y;
    t_tools.t_pin_panel_at_XY(sticky, sticky.xy.x,sticky.xy.y, position);

    sticky_change_msg(sticky, msg);

    sticky.date_MS = date_MS;

    t_tools.t_set_CSS_PINNED(sticky, true);
    sticky.style.display = "block";

    /* W H FONT */
    let                     pad_msg                = get_sticky_pad_msg( sticky );
    if(sticky.msg_fontSize) pad_msg.style.fontSize = sticky.msg_fontSize+"px";

    let                     sticky_pad              = get_sticky_pad( sticky );
    if(sticky.pad_W       ) sticky_pad.style.width  = sticky.pad_W+"px";
    if(sticky.pad_H       ) sticky_pad.style.height = sticky.pad_H+"px";

    /*
     * LOADING ALL PINNED STICKY
     * THE CALLER SHOULD TAKE CARE OF THE ORDERING WHEN DONE
     * NEED ORDERING .. CHANGED [PINNED-TIME-DATE]
     */
};
/*}}}*/
/*… sticky_CREATE {{{*/
let sticky_CREATE = function(sticky_num, zIndex=t_data.ZINDEX_STICKY_TOOL_ZERO, id_prefix="")
{
/*{{{*/
let   caller = "sticky_CREATE";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log_caller();
/*}}}*/

    let sticky            = document.createElement("DIV");
    sticky_num            = Math.max(sticky_num , 1);
    sticky.num            = 1+      (sticky_num - 1) % STICKY_MAX; /* (1..10) */
    sticky.id             = id_prefix+"sticky_"+sticky_num;
    sticky.className      = CSS_STICKY_TOOL +" fg"+(sticky.num % 10)+ " "+CSS_POINT_WW;
    sticky.style.display  = "none";
    sticky.style.position = "absolute";
    sticky.style.zIndex   = zIndex + sticky_num;
    sticky.xy             = { x:0 , y:0 };
    sticky.pad_flow       = last_set_pad_flow  || CSS_WS_DEFAULT;
    sticky.dir_class      = last_set_dir_class || CSS_POINT_DEFAULT;

    sticky.title          = sticky.id;
    sticky.innerHTML
        = STICKY1_HTML_HAND
        + STICKY2_HTML_PAD0.replace(STICKY_PLACE_HOLDER_PAD_BGNUM, "bg"+(sticky.num % 10))
    ;

    t_tools.t_dom_tools_html_appendChild(sticky);

/*{{{*/
if( log_this)
    log_key_val(   caller+"( "+sticky_num+" )"
               , { id        : sticky.id
                 , num       : sticky.num
                 , title     : sticky.title
                 , className : sticky.className
                 , innerHTML : sticky.innerHTML
               });
/*}}}*/
    return sticky;
};
/*}}}*/
/*➔ t_sticky_GET_COUNT {{{*/
let t_sticky_GET_COUNT = function()
{
    let count = 0;
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let  sticky    = sticky_array[ sticky_num ];
        if( !sticky    ) continue;
        count     += has_el_class(sticky, CSS_PINNED) ? 1 : 0;
    }
    return count;
};
/*}}}*/
/*➔ t_sticky_GET_NUM {{{*/
let t_sticky_GET_NUM = function(el)
{
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let sticky     = sticky_array[ sticky_num ];
        if(!sticky     )        continue;
        if( sticky.id == el.id) return sticky.num;
    }
    return 0; /* not a sticky_num */
};
/*}}}*/
let get_sticky_hand     = function(sticky) { return sticky.firstElementChild; };
let get_sticky_pad      = function(sticky) { return sticky.lastElementChild;  };
let get_sticky_pad_msg  = function(sticky) { return sticky.querySelector("."+STICKY_PAD_MSG); };
let get_sticky_pad_num  = function(sticky) { return sticky.querySelector("."+STICKY_PAD_NUM); };
/*}}}*/

/* STORE .. LOAD */
/*{{{*/

/*…   t_sticky_STORE_NOW {{{*/
let   t_sticky_STORE_NOW = function()
{
    let fixed_arr = [];
    for(let sticky_num=1;   sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let                 sticky = sticky_array[sticky_num];
        if(                !sticky ) continue;
        if(                 sticky.style.position == "fixed")
            fixed_arr.push( sticky );
    }

    /* CHANGE ALL [position : fixed] TO [position : absolute] */
    sticky_FIXED_STOP();

    /* MAGNETIZE and ANCHOR */
    for(let i=0; i < fixed_arr.length; ++i)
    {
        t_sticky_MAGNET(fixed_arr[i], "STORING");
    }

    t_sticky_STORE();
};
/*}}}*/
/*…   t_sticky_STORE {{{*/
let   t_sticky_STORE = function()
{
/*{{{*/
let   caller = "t_sticky_STORE";
let log_this = DOM_STICKY_LOG || LOG_MAP.T0_STORE;

let tag_this = DOM_STICKY_TAG || log_this;
if( log_this) log("%c"+caller, lbH+lf3);
/*}}}*/
    /* IGNORE EARLY CALLS FROM SCROLL OR LAYOUT HANDLERS {{{*/
    if(!t_sticky_LOAD_has_been_called)
    {
if( log_this) log("%c IGNORING EARLY CALL .. t_sticky_LOAD has not been called yet", lbH+lf8);

        return "";
    }
    /*}}}*/
    let some_change   = "";
    let show_seekzone = t_prop.get(t_data.SHOW_SEEKZONE);
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        /* IGNORE UNINITIALIZED {{{*/
        let sticky = sticky_array[sticky_num];
        if(!sticky) continue;

        /*}}}*/
        /* STICKY UNPINNED .. REMOVE FROM STORAGE {{{*/
        let l_x          = sticky_num;
        let key          = "sticky_"+sticky.num;
        let stored_value = t_store.t_store_getItem( key );
        let pinned       = sticky.classList.contains( CSS_PINNED );
        if(!pinned) {
            if( stored_value )
            {
if( tag_this) log("REMOVE UNPINNED STORAGE FOR key=["+key+"] .. className=["+sticky.className+"]" +" .. display=["+sticky.style.display+"]");

                t_store.t_store_set_value(key, null);
            }
            continue;
        }
        /*}}}*/
        /* GET STICKY CURRENT VALUE .. [STRINGIFIED anchor_node] {{{*/
        let value = sticky_get_value( sticky );

        if( value.anchor_node ) value.anchor_node_path = get_node_path( value.anchor_node );
        delete                  value.anchor_node;
        /*}}}*/
        /* STORAGE UNCHANGED {{{*/
        let sticky_json   = JSON.stringify( value );
        if( stored_value == sticky_json)
        {
if( log_this) log("%c "+t_data.SDX[sticky_num]+" %c UNCHANGED ["+key+"]", lfX[l_x], lfX[l_x]);

            continue;
        }
        /*}}}*/
        /* STORAGE UPDATE {{{*/
if( tag_this) {
    value.callers = t_log.get_callers();
    log_key_val_group(t_data.SDX[sticky_num]+" STORING "+key, value, lbX[l_x], true);
}

        some_change += t_store.t_store_set_value(key, sticky_json) ? (" "+key) : "";

        if(show_seekzone && t_prop.get(t_data.FLOATLOG)) t_sticky_LOG_TOOLTIP(sticky, "STORE");
        /*}}}*/
    }
if((log_this || DOM_STICKY_TAG) && some_change) logBIG(caller+": some_change=["+some_change+"]", lf3);
    return some_change;
};
/*}}}*/

/*➔ t_sticky_LOAD {{{*/
/*{{{*/
const T_STICKY_LOAD_FORMAT_PAD_DELAY = 1000;
const T_STICKY_LOAD_SET_DIMMED_DELAY = 3000;

let t_sticky_LOAD_has_been_called;

/*}}}*/
let t_sticky_LOAD_ANCHORS_CHANGED = function() { t_sticky_LOAD(true); };
let t_sticky_LOAD = function(anchors_changed)
{
/*{{{*/
let   caller = "t_sticky_LOAD";
let log_this = DOM_STICKY_LOG || LOG_MAP.T0_STORE;

if( log_this) log("%c"+t_data.SD5+"%c "+caller+"(anchors_changed "+anchors_changed+")", lbS+lf5, lbH+lf5);
    t_sticky_LOAD_has_been_called = true;
/*}}}*/
    sticky_remove_all();
    /* STORE PARSE {{{*/
    for(let sticky_num=1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        /* STORE GET [sticky_json] {{{*/
        let sticky      = sticky_GET(sticky_num); /* current or create instance */
        let         key = "sticky_"+sticky.num;
        let sticky_json = t_store.t_store_getItem( key );

        if(!sticky_json ) {
if( log_this) log("%c"+t_data.SYMBOL_ELLIPSIS+t_data.SYMBOL_WARNING+" %c sticky num="+sticky.num+" NOT IN STORE", lfX[sticky.num], lb0);
            continue;
        }
/*{{{
if( log_this) log("%c"+key+"%c"+t_data.LF+"%c"+sticky_json, lbH+lfX[sticky.num], lbA, lb0);
}}}*/
        /*}}}*/
        /* LAYOUT .. [sticky_json] {{{*/
        let silent = !(log_this || DOM_STICKY_TAG);
        let value  = JSON_parse(sticky_json, silent);
        if(!value ) continue;

        if( value.pinned )
        {
            if(anchors_changed) delete value.anchor_node_path;
            sticky_set_value(sticky, value);

if( log_this) t_sticky_LOG(sticky);
        }
        /*}}}*/
    }
    /*}}}*/
    /* MAGNET .. ORDER .. FORMAT .. DIMMED {{{*/

    sticky_MAGNET();

/*{{{
}}}*/
    setTimeout( function() { t_sticky_format_pad_all(); } , T_STICKY_LOAD_FORMAT_PAD_DELAY);

/*{{{
    t_sticky_SET_DIMMED(true, "STICKY ON LOAD", T_STICKY_LOAD_SET_DIMMED_DELAY);
}}}*/
    t_sticky_SET_DIMMED(false, "STICKY ON LOAD", T_STICKY_LOAD_SET_DIMMED_DELAY);
    /*}}}*/
};
/*}}}*/

/*…   sticky_get_value {{{*/
let   sticky_get_value = function(sticky)
{
/*{{{*/
let   caller = "sticky_get_value";
let log_this = DOM_STICKY_LOG || LOG_MAP.T0_STORE;

/*}}}*/
        let          xy = get_el_xy(sticky, caller);
        let          to = get_el_transformOrigin( sticky );
        xy.x           += to.x;
        xy.y           += to.y;

        /* STORE with btoa .. LOAD with atob */
        let              msg = btoa_msg(sticky.msg);

        let value
            = {           xy : xy
              ,          msg : msg
              ,          num : sticky.num
              ,        pad_H : sticky.pad_H
              ,        pad_W : sticky.pad_W
              ,       pinned : sticky.classList.contains( CSS_PINNED )
              ,      date_MS : sticky.date_MS
              ,     offset_x : sticky.offset_x
              ,     offset_y : sticky.offset_y
              ,     pad_flow : sticky.pad_flow
              ,    dir_class : sticky_get_POINT_DIR( sticky )
              ,    pad_msg_H : sticky.pad_msg_H
              ,    pad_msg_W : sticky.pad_msg_W
              ,  anchor_node : sticky.anchor_node
              , msg_fontSize : sticky.msg_fontSize
            };

if( log_this) log_key_val(caller+" "+sticky.num+"=["+ellipsis_16(sticky.msg)+"] .. ANCHOR="+get_node_txt_id_or_tag_path(sticky.anchor_node), value, lfX[sticky.num]);
    return value;
};
/*}}}*/
/*XXX*/
/*…   sticky_set_value {{{*/
/*{{{*/
let last_set_fontSize;

/*}}}*/
let   sticky_set_value = function(sticky,value)
{
/*{{{*/
let   caller = "sticky_set_value";
let log_this = DOM_STICKY_LOG || LOG_MAP.T0_STORE;

if( log_this) log_key_val(caller, value, lbH+lf4);
/*}}}*/
    /* XY .. (DEFAULT) {{{*/
    sticky.xy           = value.xy;
    let     x           = value.xy.x;
    let     y           = value.xy.y;

if( log_this) log("%c xy=["+x+" "+y+"]", lbH+lf8);
    /*}}}*/
    /* XY .. (NEW ANCHOR) {{{*/
    if(!sticky.anchor_node && value.anchor_node_path)
    {
        /* PARSE [anchor_node] */
        let anchor_node
            = get_node_path_target(value.anchor_node_path, sticky.num);

        sticky_ATTACH5_ANCHOR(sticky, anchor_node, value.offset_x, value.offset_y, value.z_min);
    }
    /*}}}*/
    /* XY .. (ANCHOR MATCH AND OFFSET) {{{*/
    let anchor_xy;
    if( sticky.anchor_node ) {
        /* [anchor_xy] {{{*/
        anchor_xy = sticky_get_anchor_xy(sticky, sticky.anchor_node, sticky.offset_x, sticky.offset_y);
        if( anchor_xy ) {
if( log_this) log("%c XY "+x+" "+y+"%c anchor_xy "+(anchor_xy ? (anchor_xy.x+" "+anchor_xy.y) : "[]")+"%c"+get_n_lbl(sticky.anchor_node)
                  ,lbL+lf4         ,lbR+lf4                                                           ,lbH+lf4                                 );

            x = anchor_xy.x;
            y = anchor_xy.y;
        }
        /*}}}*/
        /* [ANCHOR NOT FOUND] {{{*/
        else {
            log("%c ANCHOR NOT FOUND: %c"+get_n_lbl(sticky.anchor_node), lbH+lf2, lf4);

            add_el_class(sticky, CSS_ANCHOR_NOT_FOUND);
        }
        /*}}}*/
        /* [ANCHOR CHANGED] {{{*/
        let sticky_anchor_node_path = get_node_path(sticky.anchor_node);
        if(value.anchor_node_path && (value.anchor_node_path != sticky_anchor_node_path))
        {
            let lfx = (value.anchor_node_path != sticky_anchor_node_path) ? lf2 : lf8;
log(sticky.num+" STORED: %c"+ value.anchor_node_path, lf4);
log(sticky.num+" ANCHOR: %c"+sticky_anchor_node_path+" %c"+get_n_txt(sticky.anchor_node), lfx, lb8);
        }
        /*}}}*/
    }
    /*}}}*/
    /* XY .. (CSS_ANCHOR_UNSET) {{{*/
    else {
log("%c ANCHOR UNSET", lbH+lf2);

        add_el_class(sticky, CSS_ANCHOR_UNSET);
    }
    /*}}}*/
    /* XY .. (MAGNET TO GRID) {{{*/
    let to = get_el_transformOrigin( sticky );
    x      = Math.max(STICKY_FIX_RESOLUTION/2 - to.x, x);
    y      = Math.max(STICKY_FIX_RESOLUTION/2 - to.y, y);

if( log_this) log("%c xy=["+x+" "+y+"] .. (MAGNET TO GRID)", lbH+lf8);
    /*}}}*/
    /* FONT {{{*/
    sticky.msg_fontSize = value.msg_fontSize;
    last_set_fontSize   = sticky.msg_fontSize;

if( log_this) log("%c msg_fontSize=["+sticky.msg_fontSize+"]", lbH+lf8);
    /*}}}*/
    /* PIN .. [DATE MSG] {{{*/
    sticky_PIN_x_y_pos_date_msg( sticky
                               , x
                               , y
                               , "absolute"
                               ,                 value.date_MS
                               , atob_msg(value.msg    ));

    /*}}}*/
    /* WH {{{*/
    sticky.pad_W        = value.pad_W;
    sticky.pad_H        = value.pad_H;
    sticky.pad_msg_W    = value.pad_msg_W;
    sticky.pad_msg_H    = value.pad_msg_H;

if( log_this) log("%c pad_WH=["+sticky.pad_W+" "+sticky.pad_H+"] pad_msg_WH=["+sticky.pad_msg_W+" "+sticky.pad_msg_H+"]", lbH+lf8);

    sticky_SETSIZE_PAD_WH (sticky, sticky.pad_msg_W, sticky.pad_msg_H);
    sticky_RESIZE6_MSG_FIT(sticky, caller);
    /*}}}*/
    /* DIR {{{*/
    sticky_set_DIR_CLASS(sticky, value.dir_class || last_set_dir_class || CSS_POINT_DEFAULT);
if( log_this) log("%c dir_class=["+sticky.dir_class+"]", lbH+lf8);

    let show_seekzone = t_prop.get(t_data.SHOW_SEEKZONE);
    set_el_class_on_off(sticky, t_data.SHOW_SEEKZONE, show_seekzone);

    if(show_seekzone)
        sticky_format_pad_anchor_path(sticky);
    /*}}}*/
    /* FLOW {{{*/
    sticky_set_WS_CLASS(sticky, value.pad_flow   || last_set_pad_flow  || CSS_WS_DEFAULT   );

    /*}}}*/
    /* LOG {{{*/
    if(show_seekzone && t_prop.get(t_data.FLOATLOG)) t_sticky_LOG_TOOLTIP(sticky, "LOAD");

    /*}}}*/
};
/*}}}*/
/*…   sticky_get_anchor_xy {{{*/
let   sticky_get_anchor_xy = function(sticky, anchor_node, offset_x=0, offset_y=0)
{
/*{{{*/
let   caller = "sticky_get_anchor_xy";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+t_data.SD5+"%c "+caller+"("+get_n_lbl(sticky)+", "+get_n_lbl(anchor_node)+", offset_x "+offset_x+" , offset_y "+offset_y+")"
                  ,lbS+lf5        ,lbH+lf5);

    if(!anchor_node) return null;
/*}}}*/
    /* [anchor_node] .. [a_x] [a_y] {{{*/
/*{{{
    let      anchor_xy = get_el_xy(         anchor_node, caller);
    let      a_x = Math.round(anchor_xy.x + anchor_node.offsetWidth  / 2);
    let      a_y = Math.round(anchor_xy.y + anchor_node.offsetHeight / 2);
}}}*/

    /*}}}*/
    /* [XY] .. STICKY DEFAULT {{{*/
    let  to = get_el_transformOrigin( sticky );
    let   x = sticky.xy.x - to.x;
    let   y = sticky.xy.y - to.y;

    /*}}}*/
    /* [XY] .. OFFSET TO ANCHOR CENTER {{{*/
    let bcr = anchor_node.getBoundingClientRect();
    if((bcr.width > 0) && (bcr.height > 0))
    {
        let aCenter_X = window.scrollX + Math.round(bcr.x + anchor_node.offsetWidth  / 2);
        let aCenter_Y = window.scrollY + Math.round(bcr.y + anchor_node.offsetHeight / 2);

        let anchor_W  = anchor_node.offsetWidth ;
        let anchor_H  = anchor_node.offsetHeight;

        x = Math.round(aCenter_X + anchor_W * offset_x);
        y = Math.round(aCenter_Y + anchor_H * offset_y);

        x -= to.x;
        y -= to.y;

if( log_this) log_key_val_group(    caller
                                , { ANCHORNODE_XY_WH : "aCenter_XY=["+aCenter_X+"  "+aCenter_Y+"] .. anchor_WH=["+anchor_W+"  "+anchor_H+"]"
                                  , ANCHOR_CENTER_DX : "x .. offset_x=["+offset_x+"] * anchor_W=["+anchor_W+"]"
                                  , ANCHOR_CENTER_DY : "y .. offset_y=["+offset_y+"] * anchor_H=["+anchor_H+"]"
                                  ,  transformOrigin : to
                                  ,                x : x+" .. (default sticky.xy.x=["+sticky.xy.x+"]"
                                  ,                y : y+" .. (default sticky.xy.y=["+sticky.xy.y+"]"
                                }, lf4, false);
    }
    else {

if( log_this) log_key_val_group(    caller
                                , {      anchor_node : "invalid layout .. "+get_n_lbl(anchor_node)
                                  ,  transformOrigin : to
                                  ,                x : x+" .. (default sticky.xy.x=["+sticky.xy.x+"]"
                                  ,                y : y+" .. (default sticky.xy.y=["+sticky.xy.y+"]"
                                }, lf3, false);
    }

    /*}}}*/
    return { x , y };
};
/*}}}*/

/*…   sticky_remove_all {{{*/
let   sticky_remove_all = function()
{
/*{{{*/
let   caller = "sticky_remove_all";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log(caller);
/*}}}*/
    /* REMOVE ALL CURRENT STICKY INSTANCES {{{*/
    let sticky_count = 0;
    for(let i=0; i <= sticky_array.length; ++i)
    {
        let sticky  = sticky_array[i];
        if(!sticky ) continue;

        sticky_count += 1;

        sticky.parentElement.removeChild(sticky);
        sticky_array[i] = null;
        t_tools.t_set_CSS_PINNED(sticky, false);
    }
    sticky_array = [];
    t_sticky_clr_SEEK_NEXT();

if( log_this && sticky_count) log("%c REMOVED ALL "+sticky_count+" CURRENT STICKY", lbH+lf8);
    /*}}}*/
};
/*}}}*/
/*}}}*/

/* EVENT DOWN .. [MOVING .. RESIZING .. ORIENTING .. EDITING] */
/*{{{*/
/*➔ t_sticky_set_onWork_STICKY {{{*/
let t_sticky_set_onWork_STICKY = function(el,e)
{
/*{{{*/
let   caller = "t_sticky_set_onWork_STICKY";
let log_this = DOM_STICKY_LOG;

/*{{{
if( log_this) t_log.console_clear(caller);
}}}*/
if( log_this) log("%c"+caller+"%c"+get_id_or_tag(el), lbL+lf1, lbR+lf1);
/*}}}*/
    sticky_CLEAR_HIGHLIGHT();
    /* NOT A STICKY {{{*/
    onWork_STICKY = get_el_parent_with_class(el, CSS_STICKY_TOOL);
    if(!onWork_STICKY)
    {
if( log_this) log("...NOT A STICKY");

        return null;
    }
    /*}}}*/
    /* NOT PINNED {{{*/
    if( !has_el_class(onWork_STICKY, CSS_PINNED) )
    {
logBIG(caller+"...NOT CSS_PINNED: "+get_n_lbl(onWork_STICKY));

        onWork_STICKY = null;
        return null;
    }
    /*}}}*/
    /* TOUCHED: HAND TAIL FIX PEN PAD {{{*/
    sticky_set_onWork_STICKY_touched(el, e, onWork_STICKY);

    /*}}}*/
    /* SET STICKY SEEK_TARGET {{{*/
    sticky_set_SEEK_TARGET( onWork_STICKY );

    /*}}}*/
    /* UPDATE [sticky_pad_dat] {{{*/
    sticky_update_dat(onWork_STICKY);

    /*}}}*/
/*{{{*/
if( log_this ) {
    let l_x
        = (onWork_STICKY.touched == STICKY_HAND   ) ? 1
        : (onWork_STICKY.touched == STICKY_PAD    ) ? 2
        : (onWork_STICKY.touched == STICKY_ROTATE ) ? 6
        : (onWork_STICKY.touched == STICKY_FIX    ) ? 7
        : (onWork_STICKY.touched == STICKY_PEN    ) ? 8
        : (onWork_STICKY.touched == STICKY_REFONT ) ? 9
        : (onWork_STICKY.touched == STICKY_REFLOW ) ? 9
        : (onWork_STICKY.touched == STICKY_RESIZE ) ? 9
        :                                             0;

    log("...onWork_STICKY %c"+get_n_lbl(onWork_STICKY)+"%c.touched "+onWork_STICKY.touched
        ,                 lbL                                 ,lbR+lfX[l_x]                      );

}
/*}}}*/
    return onWork_STICKY;
};
/*}}}*/
/*…   sticky_set_onWork_STICKY_touched {{{*/
let   sticky_set_onWork_STICKY_touched = function(el,e,sticky)
{
/*{{{*/
let   caller = "sticky_set_onWork_STICKY_touched";
let log_this = DOM_STICKY_LOG;

/*}}}*/

    /* DETECT SCROLLBARS */
    let e_path   = e      ? e.composedPath() : undefined;
    let e_target = e_path ? e_path[0]        : undefined;
    let sticky_pad_msg = get_sticky_pad_msg( sticky );
    let event_on_scrollbar
        =  e
        && (e_target == sticky_pad_msg)
        && is_event_on_scrollbar(e)
    ;

    /* SHOW [event_on_scrollbar] */
    if( event_on_scrollbar )
        t_sticky_scroll_STICKY_PAD_MSG( e_target );

    /* CHECK [touched] .. (order matters .. as a priority) */
    sticky.touched
        = event_on_scrollbar ? get_id_or_tag(e_target)+".scrollbar"
        : get_el_parent_with_class(el, STICKY_HAND   ) ? STICKY_HAND
        : get_el_parent_with_class(el, STICKY_ROTATE ) ? STICKY_ROTATE
        : get_el_parent_with_class(el, STICKY_FIX    ) ? STICKY_FIX
        : get_el_parent_with_class(el, STICKY_REFONT ) ? STICKY_REFONT
        : get_el_parent_with_class(el, STICKY_REFLOW ) ? STICKY_REFLOW
        : get_el_parent_with_class(el, STICKY_RESIZE ) ? STICKY_RESIZE
        : get_el_parent_with_class(el, STICKY_PEN    ) ? STICKY_PEN
        : get_el_parent_with_class(el, STICKY_PAD    ) ? STICKY_PAD
        :                                                       sticky.touched
    ;

    if( sticky.touched == STICKY_RESIZE) {
        sticky.touched_dir
            = get_el_parent_with_class(e_target, CSS_POINT_NW) ? CSS_POINT_NW
            : get_el_parent_with_class(e_target, CSS_POINT_NE) ? CSS_POINT_NE
            : get_el_parent_with_class(e_target, CSS_POINT_SE) ? CSS_POINT_SE
            : get_el_parent_with_class(e_target, CSS_POINT_SW) ? CSS_POINT_SW
            :                                                           undefined
            ;
    }

/*{{{*/
if( log_this) {
    let l_x
        = (onWork_STICKY.touched == STICKY_HAND   ) ? 1
        : (onWork_STICKY.touched == STICKY_PAD    ) ? 2
        : (onWork_STICKY.touched == STICKY_ROTATE ) ? 6
        : (onWork_STICKY.touched == STICKY_FIX    ) ? 7
        : (onWork_STICKY.touched == STICKY_PEN    ) ? 8
        : (onWork_STICKY.touched == STICKY_REFONT ) ? 9
        : (onWork_STICKY.touched == STICKY_REFLOW ) ? 9
        : (onWork_STICKY.touched == STICKY_RESIZE ) ? 9
        :                                             0;

    log_key_val_group(caller+" .. "+ sticky.touched
                , { el                  : get_node_path(el            )
                  , e_target            : get_node_path(e_target      )
                  , sticky_pad_msg      : get_node_path(sticky_pad_msg)
                  , event_on_scrollbar
                  , sticky
                  , sticky_touched      : sticky.touched
                   , callers            : t_log.get_callers()
                }, lbH+lfX[l_x], true);
}
/*}}}*/
};
/*}}}*/
/*_ t_sticky_get_onWork_STICKY {{{*/
let t_sticky_get_onWork_STICKY = function()
{
    return      onWork_STICKY;
};
/*}}}*/
/*}}}*/

/* EVENT HANDLERS .. [DOWN .. MOVE .. LAYOUT .. RESIZE .. UP .. CLICK .. SCROLL .. LAYOUT .. CHANGE] */
/*{{{*/
/* DOWN */
/*{{{*/
/*… t_sticky_onDown {{{*/
/*{{{*/
let onDown_XY        = { x:0, y:0 };
let onDown_STICKY_XY = { x:0, y:0 };

/*}}}*/
let t_sticky_onDown = function(e)
{
/*{{{*/
let   caller = "t_sticky_onDown";
let log_this = DOM_STICKY_LOG;

let tag_this = DOM_STICKY_TAG || log_this;
if( log_this) log("%c"+caller+"(e) .. onWork_STICKY=["+get_id_or_tag(onWork_STICKY)+"]", lbF+lb4);
/*}}}*/
    /* [sticky] {{{*/
    onDown_STICKY_XY = { x:0, y:0 };

    let sticky = onWork_STICKY;
    if(!sticky ) {
        t_sticky_SET_DIMMED(false, "DOWN NO PICKED STICKY");

        return "";
    }

    let sticky_dimmed = has_el_class(sticky, CSS_DIMMED    );
if( log_this) log("%c TOUCHED "+sticky.touched+"%c sticky_dimmed=["+sticky_dimmed+"]", lbL+lf5, lbR+lf5);
/*{{{
    let sticky_dimmed_off = has_el_class(sticky, CSS_DIMMED_OFF);
log("...sticky_dimmed_off=["+sticky_dimmed_off+"]");
console_dir("sticky.className",sticky.className);
}}}*/
    /*}}}*/
    /* [EDITING    or IGNORE] .. WHILE EDITING {{{*/
    let consumed_by;
    if(has_el_class(sticky, CSS_HAS_FOCUS))
    {
        /* IGNORE TOUCHED PAD WHILE EDITING {{{*/
        if(sticky.touched == STICKY_PAD)
        {
            consumed_by = "WHILE EDITING: IGNORING TOUCHED "+sticky.touched+" "+sticky.id;

if( tag_this) log("%c "+consumed_by, lf5);
        }
        /*}}}*/
        /* OR DONE EDTING .. !consumed_by {{{*/
        else {
            t_sticky_EDIT_DONE();

if( tag_this) log("%c DONE EDITING "+sticky.id, lbH+lf5);

            /* DOWN NOT CONSUMED .. fall through */
        }
        /*}}}*/
    }
    /*}}}*/
    /* [UNDIMM MOVE-LISTENER] .. WHILE DIMMED {{{*/
    if(!consumed_by && sticky_dimmed)
    {
        consumed_by = "MOVING A HIDING STICKY "+sticky.id;

        t_sticky_set_onWork_STICKY(sticky, e);

        t_sticky_SET_DIMMED(false, consumed_by);

        t_tools.t_add_tool_pointermove_listener(caller);
    }
    /*}}}*/
    /* [XY     MOVE-LISTENER] .. TOUCHED=[STICKY_HAND] {{{*/
    if(!consumed_by)
    {
        if(sticky.touched == STICKY_HAND)
        {
            consumed_by = "MOVING STICKY "+sticky.id;

            t_tools.t_add_tool_pointermove_listener(caller);
        }
    }
    /*}}}*/
    /* [DIR    MOVE-LISTENER] .. TOUCHED=[ROTATE or FIXED-PAD] {{{*/
    if(!consumed_by)
    {
        let change_dir
            =  (sticky.touched == STICKY_ROTATE)
            || (sticky.touched == STICKY_PAD   ) && has_el_class(sticky, CSS_FIXED );

        if( change_dir ) {
            consumed_by = "POINTING STICKY "+sticky.id;

            t_tools.t_add_tool_pointermove_listener(caller);
        }
    }
    /*}}}*/
    /* [LAYOUT MOVE-LISTENER] .. TOUCHED=[REFONT or REFLOW or RESIZE] {{{*/
    if(!consumed_by)
    {
        let change_layout
            =  (sticky.touched == STICKY_REFONT)
            || (sticky.touched == STICKY_REFLOW)
            || (sticky.touched == STICKY_RESIZE)
        ;

        if( change_layout ) {
            consumed_by = "RESIZING STICKY "+sticky.id;

            let xy = t_util.get_event_XY(e);
            onDown_XY.x = xy.x;
            onDown_XY.y = xy.y;

            let   pad_msg = get_sticky_pad_msg( sticky );
            onDown_XY.pad_msg_w = pad_msg.width;

if( log_this) log("%c onDown_XY=["+onDown_XY.x+" "+onDown_XY.y+"]", lbH+lf6);

            xy  = sticky
                ? get_el_xy(sticky, caller)
                : { x:0 , y:0 };
            onDown_STICKY_XY.x   = xy.x;
            onDown_STICKY_XY.y   = xy.y;
if( log_this) log("%c onDown_STICKY_XY=["+onDown_STICKY_XY.x+" "+onDown_STICKY_XY.y+"]", lbH+lf5);

            t_tools.t_add_tool_pointermove_listener(caller);
        }
    }
    /*}}}*/
/*{{{*/
if( tag_this ) {

    let l_1
        = (sticky.touched == STICKY_HAND  ) ? 1
        : (sticky.touched == STICKY_PAD   ) ? 2
        : (sticky.touched == STICKY_ROTATE) ? 6
        : (sticky.touched == STICKY_FIX   ) ? 7
        : (sticky.touched == STICKY_PEN   ) ? 8
        : (sticky.touched == STICKY_REFONT) ? 9
        : (sticky.touched == STICKY_REFLOW) ? 9
        : (sticky.touched == STICKY_RESIZE) ? 9
        : (sticky.touched == STICKY_PASTE ) ? 0
        :                                     0;

    let l_2
        = consumed_by && consumed_by.startsWith("MOV"  ) ? 5
        : consumed_by && consumed_by.startsWith("POINT") ? 6
        :                                                  7;

    log("%c DOWN %c"+sticky.touched +"%c"+(consumed_by || "TOUCHING "+sticky.touched), lbb+lb1, lbL+lfX[l_1], lbR+lfX[l_2]);
}
/*}}}*/
    return consumed_by;
};
/*}}}*/
/*}}}*/
/* MOVE */
/*{{{*/
/*➔ t_sticky_move_z_on_top {{{*/
let t_sticky_move_z_on_top = function(sticky_on_top)
{
/* {{{*/
let   caller = "t_sticky_move_z_on_top";
let log_this = DOM_STICKY_LOG;

/*}}}*/

    let state_sticky_ring_deployed
        = sticky_ring_array.length && t_tools.t_dimm_mask_displayed();

    let zindex_zero
        = state_sticky_ring_deployed
        ?  t_data.ZINDEX_ABOVE_TOOLS
        :  t_data.ZINDEX_STICKY_TOOL_ZERO;

    let s_array
        = state_sticky_ring_deployed
        ?  sticky_ring_array
        :  sticky_array;

    let zIndex_on_top = 1;
    for(let i= 0; i < s_array.length; ++i)
    {
        let sticky  = s_array[i];
        if(!sticky                                 ) continue; /* i.e. sticky_array[0] not used */
        if(!has_el_class(sticky, CSS_PINNED)) continue;

        sticky.style.zIndex = zindex_zero + zIndex_on_top;
        zIndex_on_top += 1;
    }
    if(sticky_on_top)
    {
if( log_this) log("%c"+caller+" %c "+zIndex_on_top+" %c "+sticky_on_top.id
            ,      lbL         ,lbR                 ,lbH+lfX[sticky_on_top.style.zIndex - zindex_zero]);

        sticky_on_top.style.zIndex = zindex_zero + zIndex_on_top;
    }
};
/*}}}*/

/*➔ t_sticky_onMove {{{*/
let t_sticky_onMove = function(x,y)
{
/*{{{*/
let   caller = "t_sticky_onMove";
let log_this = DOM_STICKY_LOG;

    let sticky = onWork_STICKY;
    if(!sticky ) return;

log_this = log_this && !sticky_was_moved; /* FIRST MOVE ONLY */
    sticky_was_moved = true;
if( log_this) log("%c"+caller+"("+x+", "+y+") .. onWork_STICKY=["+get_n_lbl(sticky)+"]", lbH+lf2);
/*}}}*/
    /* ON FIRST MOVE .. SET FIXED ALL STICKY {{{*/
/*{{{
    if(!has_el_class(sticky, CSS_FIXED ) ) sticky_FIXED_START(sticky);
}}}*/

    /*}}}*/
    /* MOVE AND FLIP POINTING DIRECTION {{{*/

    sticky_MOVE_FLIP({sticky, x,y, layout_changed:false });
    /*}}}*/
    /* ARM MOVE ON GRID MAGNET {{{*/
    sticky_MAGNET();

    t_sticky_reorder();

    /*}}}*/
};
/*}}}*/
/*➔ t_sticky_TRACK_DIR ... checked by dom_sticky.html {{{*/
let t_sticky_TRACK_DIR = function(sticky,dir)
{
/*{{{*/
let   caller = "t_sticky_TRACK_DIR";
let log_this = DOM_STICKY_LOG;

if( log_this) log("%c"+caller+"("+get_n_lbl(sticky)+", "+dir+")", lb4);
/*}}}*/
    let prev_class = sticky_clr_DIR_CLASS(sticky);

    let dir_class;
    switch(dir)
    {
    default:
    case "CYCLE":
    dir_class
        = (prev_class == ""          ) ? CSS_POINT_SE
        : (prev_class == CSS_POINT_EE) ? CSS_POINT_SE /* CLOCKWISE */
        : (prev_class == CSS_POINT_SE) ? CSS_POINT_SW
        : (prev_class == CSS_POINT_SW) ? CSS_POINT_WW
        : (prev_class == CSS_POINT_WW) ? CSS_POINT_NW
        : (prev_class == CSS_POINT_NW) ? CSS_POINT_NE
        : /*____________ CSS_POINT_NE */ CSS_POINT_EE
    ;
    break;

    case    "UP": /* can swtich from SW or SE or EE */
    dir_class
        = (prev_class == ""          ) ? CSS_POINT_NE
        : (prev_class == CSS_POINT_EE) ? CSS_POINT_NE
        : (prev_class == CSS_POINT_SE) ? CSS_POINT_EE
        : (prev_class == CSS_POINT_SW) ? CSS_POINT_WW
        : (prev_class == CSS_POINT_WW) ? CSS_POINT_NW
        : (prev_class == CSS_POINT_NW) ? CSS_POINT_NW
        : /*____________ CSS_POINT_NE */ CSS_POINT_NE
    ;
   break;

    case  "DOWN":
    dir_class
        = (prev_class == ""          ) ? CSS_POINT_SE
        : (prev_class == CSS_POINT_EE) ? CSS_POINT_SE
        : (prev_class == CSS_POINT_SE) ? CSS_POINT_SE
        : (prev_class == CSS_POINT_SW) ? CSS_POINT_SW
        : (prev_class == CSS_POINT_WW) ? CSS_POINT_SW
        : (prev_class == CSS_POINT_NW) ? CSS_POINT_WW
        : /*____________ CSS_POINT_NE */ CSS_POINT_EE
    ;
   break;

    case "RIGHT":
    dir_class
        = (prev_class == ""          ) ? CSS_POINT_EE
        : (prev_class == CSS_POINT_EE) ? CSS_POINT_EE
        : (prev_class == CSS_POINT_SE) ? CSS_POINT_EE
        : (prev_class == CSS_POINT_SW) ? CSS_POINT_SE
        : (prev_class == CSS_POINT_WW) ? CSS_POINT_EE
        : (prev_class == CSS_POINT_NW) ? CSS_POINT_NE
        : /*____________ CSS_POINT_NE */ CSS_POINT_EE
    ;
      break;

    case  "LEFT":
    dir_class
        = (prev_class == ""          ) ? CSS_POINT_WW
        : (prev_class == CSS_POINT_EE) ? CSS_POINT_WW
        : (prev_class == CSS_POINT_SE) ? CSS_POINT_SW
        : (prev_class == CSS_POINT_SW) ? CSS_POINT_WW
        : (prev_class == CSS_POINT_WW) ? CSS_POINT_WW
        : (prev_class == CSS_POINT_NW) ? CSS_POINT_WW
        : /*____________ CSS_POINT_NE */ CSS_POINT_NW
    ;
     break;

    }

/*{{{
logBIG("...dir_class=["+dir_class+"]");
}}}*/

    if(dir_class)
        sticky_set_DIR_CLASS(sticky, dir_class);
};
/*}}}*/
/*… sticky_MOVE_FLIP {{{*/
let sticky_MOVE_FLIP = function({ sticky, x,y, layout_changed})
{
/*{{{*/
let   caller = "sticky_MOVE_FLIP";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"("+get_id_or_tag(sticky)+", XY=["+x+" "+y+"], layout_changed=["+layout_changed+"])");
/*}}}*/
    /* CHECK [bordering] .. MOVE WITHIN VIEWPORT {{{*/
    let margin_urdl
        = {             u : t_data.STICKY_TOOL_MARGIN_U
            ,           r : t_data.STICKY_TOOL_MARGIN_R
            ,           d : t_data.STICKY_TOOL_MARGIN_D
            ,           l : t_data.STICKY_TOOL_MARGIN_L
            , can_move_in : true
        };

    let bordering = t_view.t_view4_move_panel_CONFINED(sticky, x, y, margin_urdl);

    /* NOT IN VIEWPORT */
    if(!bordering) return;

if(log_this && (bordering.new_URDL || !bordering.new_XY))
    log_key_val("bordering", bordering);

    /*}}}*/
    /* MOVED .. DETACH sticky FROM ITS CURRENT ANCHOR NODE {{{*/
    if( bordering.new_XY )
    {
        if((sticky.style.position != "fixed"))
            sticky_DETACHED_START(sticky);

    }
    /*}}}*/
    /* BORDERING .. HIGHLIGHT WITH A RED-TIP {{{*/
    if(     t_prop.get( t_data.SHOW_SEEKZONE )
        && (bordering.u || bordering.l || bordering.d || bordering.r)
      )
        add_el_class(sticky, CSS_BORDERING);
    else
        del_el_class(sticky, CSS_BORDERING);

    /*}}}*/
    /* LAYOUT OR BORDERING CHANGED .. FLIP POINTING DIRECTION {{{*/
    if(layout_changed || bordering.new_URDL)
    {
        /* CURRENT POINTING DIRECTION {{{*/
        let pointing_X = sticky.className.includes("point_");
        let pointing_N
            =   pointing_X
            && !has_el_class(sticky, CSS_POINT_SE)
            && !has_el_class(sticky, CSS_POINT_SW)
        ;
        let pointing_E
            =   pointing_X
            && !has_el_class(sticky, CSS_POINT_SW)
            && !has_el_class(sticky, CSS_POINT_WW)
            && !has_el_class(sticky, CSS_POINT_NW)
        ;

        /*}}}*/
        /* NEW POINTING DIRECTION {{{*/
        let switching_N = !pointing_N && bordering.d;
        let switching_E = !pointing_E && bordering.l;
        let switching_S =  pointing_N && bordering.u;
        let switching_W =  pointing_E && bordering.r || !pointing_X; /* start from there */

        if(   switching_N
           || switching_E
           || switching_S
           || switching_W
          ) {
if( log_this)
            log_key_val("SET POINTING DIRECTION"
                        , {sticky, pointing_E, pointing_N, switching_N, switching_S, switching_E, switching_W });

            sticky_set_POINT_DIR(sticky, pointing_E, pointing_N, switching_N, switching_S, switching_E, switching_W);
        }
        /*}}}*/
    }
    /*}}}*/
};
/*}}}*/
/*}}}*/
/* RESIZE */
/*{{{*/
/*{{{*/
const RESIZE_TYPE_FONT       = "RESIZE FONT";
const RESIZE_TYPE_FLOW       = "RESIZE FLOW";
const RESIZE_TYPE_WIDTH      = "RESIZE WIDTH";
const RESIZE_TYPE_HEIGHT     = "RESIZE HEIGHT";

const STICKY_RESIZE_INTERVAL = 1000;

const STICKY_W_MIN           =   64;
const STICKY_H_MIN           =   12;
const STICKY_MARGIN          =   64;


let   sticky_RESIZE_request;
/*}}}*/
/* RESIZE1_START */
/*➔ t_sticky_RESIZE {{{*/
let t_sticky_RESIZE = function(sticky)
{
/*{{{*/
let   caller = "t_sticky_RESIZE";
let log_this = DOM_STICKY_LOG;

let tag_this = DOM_STICKY_TAG || log_this;
if( log_this) log("%c "+caller+"("+get_n_lbl(sticky)+")", lf1);
/*}}}*/

    if( sticky_RESIZE_request )
        sticky_RESIZE8_CANCEL();

    let resize_type
        = (sticky.touched == STICKY_REFONT) ? RESIZE_TYPE_FONT
        : (sticky.touched == STICKY_REFLOW) ? RESIZE_TYPE_FLOW
        : (sticky.touched == STICKY_RESIZE) ? RESIZE_TYPE_WIDTH
        : (sticky.touched == STICKY_RESIZE) ? RESIZE_TYPE_HEIGHT
        :                                     sticky.touched
    ;

    let requestID
        = requestAnimationFrame( sticky_RESIZE2_AnimationFrame );

    sticky_RESIZE_request = { sticky , resize_type , requestID };

if( tag_this) log_key_val(caller, sticky_RESIZE_request, lb1);
};
/*}}}*/
/* RESIZE2_SWITCH */
/*_   sticky_RESIZE2_AnimationFrame {{{*/
let   sticky_RESIZE2_AnimationFrame = function(timestamp)
{
/*{{{*/
let   caller = "sticky_RESIZE2_AnimationFrame";
let log_this = DOM_STICKY_LOG;

if( log_this) log(caller+"("+timestamp+")");

    if(!sticky_RESIZE_request) return;
/*}}}*/

    if( sticky_RESIZE_request )
        setTimeout( function() {
            if(sticky_RESIZE_request) sticky_RESIZE_request.requestID = requestAnimationFrame( sticky_RESIZE2_AnimationFrame );
        }, 1000/60);

    let consumed_by
        = (sticky_RESIZE_request.resize_type == RESIZE_TYPE_FONT  ) ? sticky_RESIZE3_PAD_FONT_handler()
        : (sticky_RESIZE_request.resize_type == RESIZE_TYPE_FLOW  ) ? sticky_RESIZE4_PAD_FLOW_handler()
        : (sticky_RESIZE_request.resize_type == RESIZE_TYPE_WIDTH ) ? sticky_RESIZE5_PAD_SIZE_handler()
        : (sticky_RESIZE_request.resize_type == RESIZE_TYPE_HEIGHT) ? sticky_RESIZE5_PAD_SIZE_handler()
        :                                                             undefined
    ;

    if(consumed_by) sticky_RESIZE6_MSG_FIT(sticky_RESIZE_request.sticky, consumed_by);

/*{{{*/
if(log_this && consumed_by) {
    let lfx
        = (sticky_RESIZE_request.resize_type == RESIZE_TYPE_FLOW  ) ? lf3
        : (sticky_RESIZE_request.resize_type == RESIZE_TYPE_FONT  ) ? lf4
        : (sticky_RESIZE_request.resize_type == RESIZE_TYPE_WIDTH ) ? lf5
        : (sticky_RESIZE_request.resize_type == RESIZE_TYPE_HEIGHT) ? lf6
        :                                                             lf2
    ;
    log("%c"+(consumed_by || "NOT CONSUMED"), lbH+lfx);
}
/*}}}*/
};
/*}}}*/
/* RESIZE3_PAD_FONT */
/*_   sticky_RESIZE3_PAD_FONT_handler {{{*/
/*{{{*/
const STICKY_FONT_MIN =  8;
const STICKY_FONT_MAX = 64;

/*}}}*/
let   sticky_RESIZE3_PAD_FONT_handler = function()
{
/*{{{*/
let   caller = "sticky_RESIZE3_PAD_FONT_handler";
let log_this = DOM_STICKY_LOG;

if( log_this) log("%c "+caller, lf3);
/*}}}*/
    /* GET [MSG] {{{*/
    let  sticky = sticky_RESIZE_request.sticky;
    let pad_msg = sticky_RESIZE3_pad_msg;
    if(!pad_msg) {
        pad_msg = get_sticky_pad_msg( sticky );
        delete pad_msg.last_set_w;
        delete pad_msg.last_set_h;

        sticky_RESIZE3_pad_msg = pad_msg;
        sticky_RESIZE3_pad_msg.onDown_fontSize_px = parseFloat(pad_msg.style.fontSize) || STICKY_FONT_MIN;
if( log_this) log("%c onDown_fontSize_px=["+sticky_RESIZE3_pad_msg.onDown_fontSize_px+"]", lbH+lf8);
    }
    /*}}}*/
    /* GET [RESIZE HANDLE] .. [from_ABOVE] [from_LEFT] {{{*/
    if(typeof sticky_RESIZE_request.touched == "undefined")
        sticky_start_RESIZING( sticky );

    /*}}}*/
    /* MSG [FONT d_y] {{{*/
    let onMoveDXY = t_tools.get_onMoveDXY();
    let d_y
        = onMoveDXY.y
        * (sticky_RESIZE_request.from_ABOVE ? -1 : 1);
    /*}}}*/
    return sticky_RESIZE3_PAD_FONT(sticky, d_y).consumed_by;
};
/*}}}*/
/*_   sticky_start_RESIZING {{{*/
let   sticky_start_RESIZING = function(sticky)
{
    sticky_set_RESIZING(sticky);

    sticky_RESIZE_request.touched    = sticky.touched;

    sticky_RESIZE_request.from_ABOVE
        =  has_el_class(sticky, CSS_POINT_NE)
        || has_el_class(sticky, CSS_POINT_NW)
        || has_el_class(sticky, CSS_POINT_EE)
        || has_el_class(sticky, CSS_POINT_WW)
/*{{{
}}}*/
    ;

    sticky_RESIZE_request.from_LEFT
        =  has_el_class(sticky, CSS_POINT_NW)
        || has_el_class(sticky, CSS_POINT_SW)
        || has_el_class(sticky, CSS_POINT_WW)
    ;
/*{{{
log("%c from_ABOVE=["+sticky_RESIZE_request.from_ABOVE+"]", lbH+lf8);
}}}*/
};
/*}}}*/
/*_   sticky_RESIZE3_PAD_FONT_TO_FIT {{{*/
/*{{{*/
let RESIZE_PAD_FONT_D_Y_TO_FIT = 0;

/*}}}*/
let   sticky_RESIZE3_PAD_FONT_TO_FIT = function(sticky,_caller)
{
/*{{{
log("sticky_RESIZE3_PAD_FONT_TO_FIT("+sticky.id+" , "+_caller+")");
}}}*/

    sticky_RESIZE7_STICKY_LAYOUT(sticky);

    if(sticky_RESIZE3_pad_msg)
    {
        sticky_RESIZE3_pad_msg.onDown_fontSize_px
            = parseFloat(sticky_RESIZE3_pad_msg.style.fontSize) || STICKY_FONT_MIN;
/*{{{
        log("%c onDown_fontSize_px=["+sticky_RESIZE3_pad_msg.onDown_fontSize_px+"]", lbH+lf8);
}}}*/
    }

    let resized;
    do {
        resized = sticky_RESIZE3_PAD_FONT(sticky, RESIZE_PAD_FONT_D_Y_TO_FIT);
    }
    while(!resized.contained_V && !resized.font_unchanged);

};
/*}}}*/
/*_   sticky_RESIZE3_PAD_FONT {{{*/
let   sticky_RESIZE3_PAD_FONT = function(sticky,d_y)
{
/*{{{*/
let   caller = "sticky_RESIZE3_PAD_FONT";
let log_this = DOM_STICKY_LOG;

if( log_this) caller +="("+sticky.id+" , "+d_y+")";
/*{{{
if( log_this) log("%c "+caller, lf3);
}}}*/
/*}}}*/
    /* PAD MSG {{{*/
    let pad_msg = get_sticky_pad_msg( sticky );

    /*}}}*/
    /* HAS SCROLLBAR {{{
        let cs = window.getComputedStyle(pad_msg);

        let has_scrollbar = cs.overflowX == "auto";
    }}}*/
    /* SHRINKING OR EXPANDING .. FONT-DELTA {{{*/
    let h_max = window.innerHeight * 0.7;

    let shrinking      = (d_y < 0);
    let ratio          = (d_y / h_max);
    let fontSize_delta = ratio * parseFloat(STICKY_FONT_MAX - STICKY_FONT_MIN);

    /*}}}*/
    /* FONT-FROM {{{*/
    let fontSize_from
        =  (sticky_RESIZE3_pad_msg && sticky_RESIZE3_pad_msg.onDown_fontSize_px)
        || parseFloat(pad_msg.style.fontSize)
        || STICKY_FONT_MIN;


    /*}}}*/
    /* [fontSize_px] [font_too_small] [font_unchanged] [pad_too_high] {{{*/

    let fontSize_px        = parseFloat(pad_msg.style.fontSize) || STICKY_FONT_MIN;
    fontSize_px            = Math.max( STICKY_FONT_MIN, fontSize_px);
    fontSize_px            = Math.min( STICKY_FONT_MAX, fontSize_px);
    fontSize_px            = fontSize_px.toFixed(1);

    let fontSize_next      = fontSize_from + fontSize_delta;
    fontSize_next          = Math.min(STICKY_FONT_MAX, fontSize_next);
    fontSize_next          = Math.max(STICKY_FONT_MIN, fontSize_next);
    fontSize_next          = fontSize_next.toFixed(1);

    let fontSize_contained = fontSize_px;

    let pad_too_high       = (pad_msg.offsetHeight >= h_max          );
    let font_too_small     = (fontSize_px          <= STICKY_FONT_MIN);
    if(pad_too_high || font_too_small) sticky_set_RESIZE_CAP(sticky);

    let font_unchanged     = (fontSize_next == fontSize_px );
    /*}}}*/
    /* [consumed_by] SAME FONT {{{*/
    let consumed_by;
    if( font_unchanged   )
    {
        consumed_by = "FONT UNCHANGED";

    }
    /*}}}*/
    /* APPLY [fontSize_next] .. f(contained_V or shrinking) {{{*/
    let contained_H;
    let contained_V;
    if(!consumed_by) {
        [  contained_H , contained_V] = is_contained_by_parent(pad_msg);

        if(contained_V || shrinking) {
            sticky.msg_fontSize    = fontSize_next;
            pad_msg.style.fontSize = fontSize_next+"px";
            last_set_fontSize      = sticky.msg_fontSize;
        }
        if(contained_V) fontSize_contained = fontSize_next;
    }
    /*}}}*/
    /* EXPANDING .. TOO BIG .. SHRINKING BAK {{{*/
    let expanding_too_big = !shrinking && (pad_too_high || !contained_V);
/* {{{
    if(!consumed_by && expanding_too_big)
    {
        if(fontSize_delta > 0) {
            consumed_by = "EXPANDING TOO BIG .. SHRINKING BACK";

            sticky_RESIZE3_PAD_FONT(sticky,-d_y);
        }
    }
}}}*/
    /*}}}*/
    /* EXPANDING .. TOO BIG {{{*/
    if(!consumed_by && expanding_too_big)
    {
        if     (fontSize_from     ) pad_msg.style.fontSize = fontSize_from     +"px";
        else if(fontSize_contained) pad_msg.style.fontSize = fontSize_contained+"px";

        consumed_by = "EXPANDING TOO BIG";
    }
    /*}}}*/
    /* SHRINKING .. CONTAINED {{{*/
    if(!consumed_by && shrinking && contained_V)
    {
        consumed_by = "SHRINKED CONTAINED";

    }
    /*}}}*/
    /* SHOW RESIZE_CAP {{{*/
    if(pad_too_high || (fontSize_next >= STICKY_FONT_MAX) || (fontSize_next <= STICKY_FONT_MIN)) sticky_set_RESIZE_CAP( sticky );
    else                                                                                         sticky_clr_RESIZE_CAP( sticky );

    /*}}}*/
    /* result {{{*/
    let result
        = {   consumed_by       : consumed_by || pad_msg.style.fontSize
            , expanding_too_big
            , fontSize_to       : parseFloat( pad_msg.style.fontSize )
            , contained_H
            , contained_V
            , shrinking
            , pad_too_high

            , fontSize_contained
            , fontSize_delta
            , fontSize_from
            , fontSize_next
            , fontSize_px
            , font_too_small

            , font_unchanged
            , STICKY_FONT_MIN
            , STICKY_FONT_MAX
            , pad_msg_offsetHeight : pad_msg.offsetHeight
            , h_max
/*{{{
            , has_scrollbar
}}}*/
        };
    /*}}}*/
/*{{{*/
if( log_this) {
    let l_x
        = font_unchanged ?     lf8
        : shrinking      ? lbH+lf5
        :                  lbH+lf4;

    log_key_val( caller
                 + t_data.TAB + (consumed_by || "FONT CHANGED")
                 + " .. "        + pad_msg.style.fontSize
                 + t_data.TAB
                 , result
                 , l_x);
}
/*}}}*/
    return result;
};
/*}}}*/
/* RESIZE4_PAD_FLOW */
/*_   sticky_RESIZE4_PAD_FLOW_handler {{{*/
/*{{{*/
const PAD_FLOW_DX_MIN = 100;

let   sticky_RESIZE3_pad_msg;
/*}}}*/
let   sticky_RESIZE4_PAD_FLOW_handler = function()
{
    /* [sticky_RESIZE_request] {{{*/
    if(!sticky_RESIZE_request || !sticky_RESIZE_request.sticky)
    {
        log("%c !sticky_RESIZE_request.sticky", lb2);

        return false;
    }
    let  sticky = sticky_RESIZE_request.sticky;
    /*}}}*/
    /* [from_ABOVE] [from_LEFT] {{{*/
    if(typeof sticky_RESIZE_request.touched == "undefined")
        sticky_start_RESIZING( sticky );

    /*}}}*/
    /* HANDLE DXY .. f(PAD_FLOW_DX_MIN) {{{*/
    let         onMoveDXY = t_tools.get_onMoveDXY();
    if(Math.abs(onMoveDXY.x) < PAD_FLOW_DX_MIN)
        return false;

    /*}}}*/
    /* [pad_msg] {{{*/
    let pad_msg = sticky_RESIZE3_pad_msg;
    if(!pad_msg) {
        pad_msg = get_sticky_pad_msg( sticky );
        delete pad_msg.last_set_w;
        delete pad_msg.last_set_h;

        sticky_RESIZE3_pad_msg = pad_msg;
    }
    /*}}}*/
    /* NEXT FLOW STYLE {{{*/
    let consumed_by = sticky_RESIZE4_PAD_FLOW_NEXT(sticky);

    /*}}}*/
    return consumed_by;
};
/*}}}*/
/*_   sticky_RESIZE4_PAD_FLOW_NEXT {{{*/
let   sticky_RESIZE4_PAD_FLOW_NEXT = function(sticky)
{
/*{{{*/
let   caller = "sticky_RESIZE4_PAD_FLOW_NEXT";
let log_this = DOM_STICKY_LOG;

let tag_this = DOM_STICKY_TAG || log_this;
if( log_this) caller +="("+sticky.id+")";
/*}}}*/
    /* delay .. f(STICKY_RESIZE_INTERVAL) {{{*/
    /* Note: onUp between each step works better. */
/*{{{
    if(sticky_RESIZE_request.last_RESIZE_ms) return;
}}}*/

    let    this_MS = new Date().getTime();
    let    delayMS = sticky_RESIZE_request.last_RESIZE_ms
        ? (this_MS - sticky_RESIZE_request.last_RESIZE_ms) : 0;
    if(    delayMS && (delayMS < STICKY_RESIZE_INTERVAL))
        return false;

    sticky_RESIZE_request.last_RESIZE_ms = this_MS;
    /*}}}*/
    /* next .. f(onMoveDXY) {{{*/
    let       onMoveDXY = t_tools.get_onMoveDXY();
    let d_x = onMoveDXY.x * (sticky_RESIZE_request.from_LEFT ? -1 : 1);
/*{{{
log("%c d_x="+d_x+" .. from_LEFT=["+sticky_RESIZE_request.from_LEFT+"]", lbH+lf8);
}}}*/
    let curr_class             = sticky_clr_WS_CLASS(sticky) || CSS_WS_DEFAULT;
    let                 next   = 0;
    while(   (          next   < CSS_WS_XX.length)
          && (CSS_WS_XX[next] != curr_class      ))
        next                  += 1;

    next     += (d_x > 0) ? 1 : -1;
/*{{{
}}}*/
/*{{{
log("%c next=["+next+"]", lbH+lf8);
}}}*/
/*{{{
    if( next >= CSS_WS_XX.length) next = 0                 ;
    if( next <  0               ) next = CSS_WS_XX.length-1;
}}}*/
/*{{{
    let h_max = window.innerHeight * 0.7;

    let ratio = ((d_x / h_max * 100) / 100).toFixed(2);
    let pad_msg = get_sticky_pad_msg( sticky );
    let pad_bcr = pad_msg.getBoundingClientRect();
    let   ratio = ((d_x / pad_bcr.width * 100) / 100).toFixed(2);

    ratio     = Math.max(0.0, ratio);
    ratio     = Math.min(1.0, ratio);

    let  next = Math.floor(ratio * (CSS_WS_XX.length - 0.5));
log("%c next=["+next+"] .. ratio=["+ratio+"]", lbH+lf8);
}}}*/
    /*}}}*/
    /* reached first or last {{{*/
    if(   (next >= CSS_WS_XX.length)
       || (next <  0               )
      ) {
        add_el_class(sticky, curr_class);

        if((next <  0) || (next >= CSS_WS_XX.length)) sticky_set_RESIZE_CAP( sticky );
        else                                          sticky_clr_RESIZE_CAP( sticky );
        return false;
    }
    /*}}}*/
    /* start next move from here {{{*/
    t_tools.zap_onMoveDXY();

    /*}}}*/
    /* change {{{*/
    let previous_pad_flow = sticky.pad_flow;
    last_set_pad_flow     = CSS_WS_XX[next];

    sticky_set_WS_CLASS(sticky, last_set_pad_flow);

    /* TO CSS_WS_NOWRAP */
    if(sticky.pad_flow == CSS_WS_NOWRAP)
    {
        set_pad_msg_nowrap_height( sticky );
    }
    /* RESTORING SAVED HEIGHT */
    else if(previous_pad_flow == CSS_WS_NOWRAP)
    {
        let pad_msg = get_sticky_pad_msg( sticky );
        if( pad_msg.nowrap_saved_minHeight)
        {
if( tag_this) log("%c LEAVING ["+previous_pad_flow+"] .. RESTORING HEIGHT "+pad_msg.nowrap_saved_minHeight+" .. SETTING ["+sticky.pad_flow+"] %c"+caller, lbH+lf3, lbH);
            pad_msg.style.minHeight = pad_msg.nowrap_saved_minHeight;
            pad_msg.style.maxHeight = pad_msg.nowrap_saved_maxHeight;
            delete pad_msg.nowrap_saved_minHeight;
            delete pad_msg.nowrap_saved_maxHeight;
        }
        else {
if( tag_this) log("%c LEAVING ["+previous_pad_flow+"] .. NO SAVED HEIGHT "+pad_msg.style.height           +" .. SETTING ["+sticky.pad_flow+"] %c"+caller, lbH+lf3, lbH);
            if( parseInt(pad_msg.style.height) ) {
                pad_msg.style.minHeight = pad_msg.style.height;
                pad_msg.style.maxHeight = pad_msg.style.height;
            }
            else {
                pad_msg.style.minHeight = WH_CONFINED_PERCENT;
                pad_msg.style.maxHeight = WH_CONFINED_PERCENT;
            }
        }
    }

    sticky_RESIZE6_MSG_FIT(sticky, caller);

    sticky_RESIZE3_PAD_FONT_TO_FIT(sticky, caller);

if( log_this) log(caller+"("+d_x+") %c"+(next + 1)+"/"+CSS_WS_XX.length+" %c"+sticky.pad_flow, lfX[next+1], lbH+lfX[next+1]);
    return "FLOW "+sticky.pad_flow;
    /*}}}*/
};
/*}}}*/
/*_ set_pad_msg_nowrap_height {{{*/
let set_pad_msg_nowrap_height = function(sticky)
{
/*{{{*/
let   caller = "set_pad_msg_nowrap_height";
let log_this = DOM_STICKY_LOG;

let tag_this = DOM_STICKY_TAG || log_this;
if( log_this) caller +="("+sticky.id+")";
/*}}}*/
    /* [nowrap_saved_minHeight] .. (pixels before setting fit-content) {{{*/
    let pad_msg         = get_sticky_pad_msg( sticky );
    if(!pad_msg.nowrap_saved_minHeight && parseInt(pad_msg.style.minHeight))
    {
        pad_msg.nowrap_saved_minHeight = pad_msg.style.minHeight;
        pad_msg.nowrap_saved_maxHeight = pad_msg.style.maxHeight;
if( tag_this) log("%c SAVING HEIGHT ["+pad_msg.nowrap_saved_minHeight+"] %c"+caller, lbH+lf3, lbH);
    }
    /*}}}*/
    /* [height : fit-content] {{{*/
    if( pad_msg.style.maxHeight != "fit-content")
    {
        pad_msg.style.height     = "fit-content";
        pad_msg.style.minHeight  = "fit-content";
        pad_msg.style.maxHeight  = "fit-content";

if( tag_this) log("%c SETTING height=["+pad_msg.style.height+"] %c"+caller, lbH+lf4, lbH);
    }
    /*}}}*/
};
/*}}}*/
/* RESIZE5_PAD_SIZE */
/*_   sticky_RESIZE5_PAD_SIZE_handler {{{*/
/*{{{*/
const PAD_SIZE_DXY_MIN = 5;

/*}}}*/
let   sticky_RESIZE5_PAD_SIZE_handler = function()
{
    /* [sticky_RESIZE_request] {{{*/
    if(!sticky_RESIZE_request || !sticky_RESIZE_request.sticky)
    {
        log("%c !sticky_RESIZE_request.sticky", lb2);

        return false;
    }
    let  sticky = sticky_RESIZE_request.sticky;
    /*}}}*/
    /* [from_ABOVE] [from_LEFT] {{{*/
    if(typeof sticky_RESIZE_request.touched == "undefined")
    {
        sticky_start_RESIZING( sticky );

        let dragging_top
            =        (sticky.touched_dir == CSS_POINT_NW)
            ||       (sticky.touched_dir == CSS_POINT_NE);

        let sticky_is_bellow
            =   has_el_class(sticky, CSS_POINT_SE)
            ||  has_el_class(sticky, CSS_POINT_SW) ;

        sticky_RESIZE_request.from_ABOVE
            =   dragging_top
            && !sticky_is_bellow
        ;
/*{{{
log("sticky_RESIZE5_PAD_SIZE_handler"
    , { touched          : sticky.touched
        , dragging_top
        , sticky_is_bellow
        , from_ABOVE       : sticky_RESIZE_request.from_ABOVE
    });
}}}*/

    }
    /*}}}*/
    /* onMoveDXY .. f(PAD_SIZE_DXY_MIN) {{{*/
    let             onMoveDXY    = t_tools.get_onMoveDXY();
    if(   (Math.abs(onMoveDXY.x) < PAD_SIZE_DXY_MIN)
       && (Math.abs(onMoveDXY.y) < PAD_SIZE_DXY_MIN)
      )
        return false;

    /*}}}*/
    /* GRAB [pad_msg] {{{*/
    let pad_msg = sticky_RESIZE3_pad_msg;
    if(!pad_msg) {
        pad_msg = get_sticky_pad_msg( sticky );
        delete pad_msg.last_set_w;
        delete pad_msg.last_set_h;

        sticky_RESIZE3_pad_msg = pad_msg;
    }
    /*}}}*/
    /* NEXT PAD WIDTH HEIGHT {{{*/
    let consumed_by = sticky_RESIZE5_PAD_WH(sticky);

    /*}}}*/
    return consumed_by;
};
/*}}}*/
/*_   sticky_RESIZE5_PAD_WH {{{*/
let   sticky_RESIZE5_PAD_WH = function(sticky)
{
    /* MAY ADJUST MSG WIDTH HEIGHT .. f(onMoveDXY) {{{*/
    let   pad_msg = get_sticky_pad_msg( sticky );
    let       bcr = pad_msg.getBoundingClientRect();
    let onMoveDXY = t_tools.get_onMoveDXY();

    /*}}}*/
    /* CHECK WIDTH {{{*/
    let      last_set_w =  pad_msg.last_set_w
        ?                  pad_msg.last_set_w
        :                  bcr.width;

    let             d_x = onMoveDXY.x * (sticky_RESIZE_request.from_LEFT  ? -1 : 1);
    let               w = last_set_w + d_x;
    /* ........... */ w = Math.max(STICKY_W_MIN, w);
    let                            w_max = window.innerWidth  * 0.7;
    /* ........... */ w = Math.min(w_max , w);
    /* ........... */ w = parseInt(w);

    /*}}}*/
    /* CHECK HEIGHT {{{*/
    let      last_set_h =  pad_msg.last_set_h
        ?                  pad_msg.last_set_h
        :                  bcr.height;

    let             d_y = onMoveDXY.y * (sticky_RESIZE_request.from_ABOVE ? -1 : 1);
    let               h = last_set_h + d_y;
    /* ........... */ h = Math.max(STICKY_H_MIN, h);
    let                            h_max = window.innerHeight * 0.7;
    /* ........... */ h = Math.min(h_max , h);
    /* ........... */ h = parseInt(h);

    /*}}}*/
    /* SHOW CAPPED {{{*/
    let capped
        =  ((h >= h_max) || (h <= STICKY_H_MIN))
        || ((w >= w_max) || (w <= STICKY_W_MIN))
    ;
    if( capped ) sticky_set_RESIZE_CAP( sticky );
    else         sticky_clr_RESIZE_CAP( sticky );

    /*}}}*/
    /* NOT TOO MUCH .. (both WH capped) {{{*/
    if(   ((w >= w_max) || (w <= STICKY_W_MIN))
       && ((h >= h_max) || (h <= STICKY_H_MIN))
      ) {

        return false;
    }
    /*}}}*/
    /* start next move from here {{{*/
    t_tools.zap_onMoveDXY();

    /*}}}*/
    return sticky_SETSIZE_PAD_WH(sticky,w,h);
};
/*}}}*/
/*_   sticky_SETSIZE_PAD_WH {{{*/
let   sticky_SETSIZE_PAD_WH = function(sticky,w,h)
{
/*{{{*/
let   caller = "sticky_SETSIZE_PAD_WH";
let log_this = DOM_STICKY_LOG;

/*}}}*/
    /* pad_msg .. current w,h {{{*/
    let pad_msg = get_sticky_pad_msg( sticky );
    w = w || sticky.pad_msg_W;
    h = h || sticky.pad_msg_H;
    if(!w || !h) {
        let bcr   = pad_msg.getBoundingClientRect();
        w = w || bcr.width;
        h = h || bcr.height;
    }
    /*}}}*/
    /* ADJUSTING MSG WIDTH HEIGHT .. f(not capped) {{{*/
    pad_msg.last_set_w          = w;

    pad_msg.style.width         = w+"px";
    pad_msg.style.minWidth      = w+"px";
    pad_msg.style.maxWidth      = w+"px";

    if( has_el_class(sticky, CSS_WS_NOWRAP) )
    {
        set_pad_msg_nowrap_height( sticky );
    }
    else {
        pad_msg.last_set_h      = h;
        pad_msg.style.height    = h+"px";
/*{{{
log("%c SETTING height=["+pad_msg.style.height+"] .. sticky_SETSIZE_PAD_WH", lbH+lf6);
}}}*/
        pad_msg.style.minHeight = h+"px";
        pad_msg.style.maxHeight = h+"px";
    }

    sticky.pad_msg_W            = w;
    sticky.pad_msg_H            = h;

if( log_this) log(caller , { w , maxWidth  : pad_msg.style.maxWidth
                           , h , maxHeight : pad_msg.style.maxHeight });
    return "WH=["+w+" "+h+"]";
    /*}}}*/
};
/*}}}*/
/* RESIZE6_FIT_PAD */
/*_   sticky_RESIZE6_MSG_FIT {{{*/
let   sticky_RESIZE6_MSG_FIT = function(sticky, consumed_by)
{
/*{{{*/
let   caller = "sticky_RESIZE6_MSG_FIT";
let log_this = DOM_STICKY_LOG;

if( log_this)
    log("%c "+caller+"( %c"+get_n_lbl(sticky)+"%c) %c"+consumed_by
        ,lf5           ,lbH+lf5                      ,lbA,lb4            );

/*}}}*/
    /* FORCE [fit-content] {{{*/
/*{{{
log("%c sticky.className=["+sticky.className+"]", lbH+lf8);
}}}*/
    let         pad_msg = get_sticky_pad_msg( sticky );
    if( has_el_class(sticky, CSS_WS_NOWRAP) )
    {
        set_pad_msg_nowrap_height(sticky);
    }
    else {
        pad_msg.style.width  = "fit-content";
        pad_msg.style.height = "fit-content";
/*{{{
log("%c FITTING height=["+pad_msg.style.height+"] .. sticky_RESIZE6_MSG_FIT", lbH+lf5);
}}}*/
    }

    let             bcr = pad_msg.getBoundingClientRect();
    /*}}}*/
    /* CHECK  MSG WIDTH {{{*/
    let      last_set_w = pad_msg.last_set_w
        ?                 pad_msg.last_set_w
        :                 bcr.width
    ;
    let               w = parseInt(last_set_w);
    /* ........... */ w = Math.max(STICKY_W_MIN, w);
    let                            w_max = window.innerWidth * 0.7;
    /* ........... */ w = Math.min(w_max, w);

    if((w >=        w_max) || (w <= STICKY_W_MIN)) sticky_set_RESIZE_CAP( sticky );
    else                                           sticky_clr_RESIZE_CAP( sticky );
    /*}}}*/
    /* CHECK  MSG HEIGHT {{{*/
    let      last_set_h = pad_msg.last_set_h
        ?                 pad_msg.last_set_h
        :                 bcr.height
    ;
    let               h = parseInt(last_set_h);
    /* ........... */ h = Math.max(STICKY_H_MIN, h);
    let                            h_max = window.innerHeight * 0.7;
    /* ........... */ h = Math.min(h_max, h);

    if((h >=        h_max) || (h <= STICKY_H_MIN)) sticky_set_RESIZE_CAP( sticky );
    else                                           sticky_clr_RESIZE_CAP( sticky );
    /*}}}*/
    /* NOT IF TOO HIGH {{{*/
    let                 shrinking = (w < last_set_w);
    let pad_too_high = !shrinking && (pad_msg.offsetHeight >= w_max);
    if( pad_too_high )
    {

if(log_this) log("pad_too_high=["+pad_too_high+"] .. (pad_msg.offsetHeight >= h_max)=["+pad_msg.offsetHeight+"]");
        return;
    }
    /*}}}*/
    /* ADJUST MSG WIDTH {{{*/
/*{{{*/
if( log_this && (pad_msg.last_set_w  != w)) {
    let cs = window.getComputedStyle(pad_msg);
    log("%c WH "+cs.width+" "+cs.height,lf3);
}
/*}}}*/
    if( pad_msg.last_set_w    != w) {
        pad_msg.style.width    = w+"px";
        pad_msg.style.minWidth = w+"px";
        pad_msg.style.maxWidth = w+"px";
        pad_msg.last_set_w     = w;

if( log_this) log(caller, { w , maxWidth : pad_msg.style.width });
    }
    /*}}}*/
    /* [sticky LAYOUT] */
/*
    requestAnimationFrame(function() { sticky_RESIZE7_STICKY_LAYOUT(sticky); });
*/
    sticky_RESIZE7_STICKY_LAYOUT(sticky);
};
/*}}}*/
/* RESIZE7_FIT_STICKY */
/*_   sticky_RESIZE7_STICKY_LAYOUT {{{*/
/*{{{*/
const PAD_W_MIN = 32;
const PAD_H_MIN = 32;

/*}}}*/
let   sticky_RESIZE7_STICKY_LAYOUT = function(sticky)
{
/*{{{*/
let   caller = "sticky_RESIZE7_STICKY_LAYOUT";
let log_this = DOM_STICKY_LOG;

let tag_this = DOM_STICKY_TAG || log_this;
if( log_this) log("%c"+caller+"("+get_n_lbl(sticky)+")",lbH+lf6);
/*}}}*/
/* ... log performance {{{
console.time(caller);
}}}*/
    /* GET [------ PAD NUM MSG DAT] .. (pad_msg geometry may have changed) {{{*/
    let sticky_pad   = get_sticky_pad    ( sticky );
    let pad_num      = get_sticky_pad_num( sticky );
    let pad_msg      = get_sticky_pad_msg( sticky );
    let pad_dat      = get_el_child_with_class(sticky_pad, STICKY_PAD_DAT);

    /*}}}*/
    /* SET GEOMETRY .. f(fontSize) {{{*/
    if( sticky.msg_fontSize )
        pad_msg.style.fontSize = sticky.msg_fontSize+"px";

    /*}}}*/
    /* GET [------ --- NUM MSG DAT] .. (get other children geometry) {{{*/
    let dat_bcr = pad_dat.getBoundingClientRect();
    let msg_bcr = pad_msg.getBoundingClientRect();
    let num_bcr = pad_num.getBoundingClientRect();

    /*}}}*/
    /* SET [------ PAD --- --- ---] .. SET WH {{{*/
    let     h = PAD_H_MIN +                 msg_bcr.height + dat_bcr.height;
    let     w = PAD_W_MIN + num_bcr.width + msg_bcr.width;

    let h_max = parseInt(window.innerHeight * 0.7 + STICKY_MARGIN);
    let w_max = parseInt(window.innerWidth  * 0.7 + STICKY_MARGIN);

    h         = parseInt( Math.min(h, h_max) );
    w         = parseInt( Math.min(w, w_max) );

    sticky_pad.style.width  = w+"px";
    sticky_pad.style.height = h+"px";

    sticky.pad_W            = w;
    sticky.pad_H            = h;
    /*}}}*/
/*{{{*/
if( tag_this) {
    let sticky_has_scrollbar = has_scrollbar( get_sticky_pad_msg(sticky) );
    log_key_val_group( caller
                       , {   sticky_pad
                           , pad_num
                           , pad_msg
                           , pad_dat
                           , num_bcr
                           , msg_bcr
                           , dat_bcr
                           , w
                           , h
                           , sticky_pad_style_width  : sticky_pad.style.width
                           , sticky_pad_style_height : sticky_pad.style.height
                           , sticky_has_scrollbar
                       }, lbH+lfX[sticky_has_scrollbar ? 5:6], true);

}
/*}}}*/
/* ... log performance {{{
console.timeEnd(caller);
}}}*/
};
/*}}}*/
/* RESIZE8_END */
/*_   sticky_RESIZE8_END {{{*/
let   sticky_RESIZE8_END = function()
{
    if(onWork_STICKY && sticky_RESIZE3_pad_msg)
        sticky_RESIZE3_PAD_FONT_TO_FIT(onWork_STICKY, "sticky_RESIZE8_END");

    if( sticky_RESIZE_request )
        sticky_RESIZE8_CANCEL();

    sticky_RESIZE3_pad_msg = null;

};
/*}}}*/
/*_   sticky_RESIZE8_CANCEL {{{*/
let   sticky_RESIZE8_CANCEL = function()
{
/*{{{*/
let   caller = "sticky_RESIZE8_CANCEL";
let log_this = DOM_STICKY_LOG;

if( log_this) log("%c"+caller,lbH+lf5);
/*}}}*/
    if(!sticky_RESIZE_request) return;

    if(sticky_RESIZE_request.requestID)
        cancelAnimationFrame( sticky_RESIZE_request.requestID );

    sticky_clr_RESIZING();
    sticky_clr_RESIZE_CAP();
    sticky_RESIZE_request = null;
};
/*}}}*/
/*}}}*/
/* UP */
/*{{{*/
/*➔ t_sticky_onUp {{{*/
/*{{{*/
let sticky_was_moved;
let set_dimm_was_postponed_by;

/*}}}*/
let t_sticky_onUp = function(sticky)
{
    if(!t_sticky_GET_COUNT()) return;
/*{{{*/
let   caller = "t_sticky_onUp";
let log_this = DOM_STICKY_LOG;

let tag_this = DOM_STICKY_TAG || log_this;
if( log_this) log("%c"+caller+"("+get_id_or_tag(sticky)+") .. onWork_STICKY=["+get_id_or_tag(onWork_STICKY)+"]", lbF+lb5);
if( log_this) t_fly.t_log_event_status(caller, lf5);

/*}}}*/
    /* RESIZE DONE {{{*/
    sticky_RESIZE8_END();

    /*}}}*/
    /* MOVED DONE {{{*/
    sticky_was_moved = false;
    sticky_MAGNET0_PINNED_onMoveDXY_clear();

    /*}}}*/
    /* onDown_sticky .. (only scrolled) {{{*/
    let onDown_EL     = t_tools.t_get_onDown_EL();
    let onDown_sticky
        = (onDown_EL && onDown_EL.id.startsWith("sticky_"))
        && onDown_EL;

if( log_this) log("...onDown_sticky=["+get_id_or_tag(onDown_sticky)+"]");
    /*}}}*/
    /* PRESSED DONE {{{*/
    if     (sticky       ) del_el_class(sticky       , t_data.CSS_PRESSED);
    else if(onWork_STICKY) del_el_class(onWork_STICKY, t_data.CSS_PRESSED);
    else if(onDown_sticky) del_el_class(onDown_sticky, t_data.CSS_PRESSED);

    /*}}}*/
    /* SCROLLING DONE {{{*/
    if( scrolling_sticky  ) {
        del_el_class(scrolling_sticky, t_data.CSS_SCROLLING);

        scrolling_sticky = null;
    }
    /*}}}*/
    /* MAGNET UPDATE {{{*/
    if     (sticky       ) t_sticky_MAGNET_NOW();
    else if(onWork_STICKY) t_sticky_MAGNET(onWork_STICKY, "POINTER UP");

    /*}}}*/
    /*  DIMM .. f(!onWork_STICKY .. to be cleared by a canceling background click) {{{*/
    if(!onWork_STICKY && !onDown_sticky && !sticky_ALL_DIMMED())
    {
        if(set_dimm_was_postponed_by == DIMM_POSTPONED_BY_SCROLLING)
        {
if( tag_this) log("%c UP %c EXTRA DIMM-DELAY .. "+set_dimm_was_postponed_by, lbb+lb4, lf5);

            t_sticky_SET_DIMMED(true, "SCROLLING DONE", DIMM_POSTPONED_BY_SCROLLING_DELAY);
        }
        else if( set_dimm_was_postponed_by )
        {
if( tag_this) log("%c UP %c DEFAULT DIMM-DELAY .. "+get_n_lbl(set_dimm_was_postponed_by), lbb+lb4, lf5);

            t_sticky_SET_DIMMED(true,"POINTER UP");
        }
        else {
if( tag_this) log("%c UP %c INSTANT DIMM .. (not postponed)", lbb+lb4, lf5);

            sticky_SET_DIMMED_NOW( "POINTER UP");
        }
    }

    set_dimm_was_postponed_by = false;
    /*}}}*/
    /* RAISE ALL STICKY .. f(onWork_STICKY) {{{*/
    if((onWork_STICKY || onDown_sticky) && !sticky_ALL_DIMMED()) sticky_set_STICKY_RAISED();
    else                                                         sticky_clr_STICKY_RAISED();


    /*}}}*/
    /* EVENT DONE {{{*/
    if(!t_sticky_is_EDITING( onWork_STICKY )) onWork_STICKY = null;

    /*}}}*/
};
/*}}}*/
/*}}}*/
/* CLICK */
/*{{{*/
/*➔ t_sticky_CLICK_CB {{{*/
let t_sticky_CLICK_CB = function(sticky=onWork_STICKY)
{
/*{{{*/
let   caller = "t_sticky_CLICK_CB";
let log_this = DOM_STICKY_LOG;

let tag_this = DOM_STICKY_TAG || log_this;
if( log_this) caller += "("+(sticky ? sticky.id:"")+")";
if( log_this) log("%c"+caller, lbH+lf0);
if( log_this) t_fly.t_log_event_status(caller, lf1);
/*}}}*/
    /*  sel_text .. f(STICKY_SEL_TEXT_LEN_MAX) {{{*/
    let sel_text = t_tools.t_get_current_sel_text() || t_tools.t_get_onDown_SEL_TEXT();

    /*}}}*/
    /*  state {{{*/
    let state0_is_bouncing_EDIT     =  dom_tools.t_is_bouncing_e_type("STICKY_DONE", caller, 500);
    let state0_is_editing           = !state0_is_bouncing_EDIT && t_sticky_is_EDITING();
    let state0_clicked_tool_panel   = !t_tools.t_some_tool_clicked();
    let state1_sticky_ring_deployed =  t_tools.t_dimm_mask_displayed();
    let state2_sticky_has_focus     =  has_el_class(sticky  , CSS_HAS_FOCUS   );
    let state3_clicked_hand         =  sticky  && (sticky.touched == STICKY_HAND     );
    let state3_clicked_pen          =  sticky  && (sticky.touched == STICKY_PEN      );
    let state3_clicked_rotate       =  sticky  && (sticky.touched == STICKY_ROTATE   );
    let state3_onSticky_touched     =  sticky  ?   sticky.touched  : ""               ;
    let state4_clicked_pad          =  sticky  && (sticky.touched == STICKY_PAD      );
    let state5_clicked_sticky_fix   =  sticky  && (sticky.touched == STICKY_FIX      );
    let state6_clicked_sticky_ring  =  has_el_class(sticky  , CSS_STICKY_RING );
    let state7_target_fixed         =  has_el_class(sticky  , CSS_FIXED       );
    let state8_target_dimmed        =  has_el_class(sticky  , CSS_DIMMED      )
        /*......................*/  || has_el_class(sticky  , CSS_DIMMED_OFF  );
    let state9_target_fixed         = (sticky.style.position      == "fixed"         );

    /*}}}*/
    /*  action {{{*/
    let action0_sticky_ring_select      =  state6_clicked_sticky_ring && !state5_clicked_sticky_fix;
    let action1_sel_text_on_touched     = !state6_clicked_sticky_ring &&  state3_onSticky_touched && (sel_text != "");
    let action2_pad_not_fixed_choose    = !state6_clicked_sticky_ring &&  state4_clicked_pad  && !state7_target_fixed && !state8_target_dimmed;
    let action3_clicked_pen_EDITING     = !state0_is_bouncing_EDIT    &&  state3_clicked_pen && !state0_is_editing;
    let action4_sticky_fix_unpin        =  state5_clicked_sticky_fix;
    let action5_clicked_handle_or_fixed = !state6_clicked_sticky_ring && (state3_clicked_hand || state3_clicked_rotate || state7_target_fixed);

    /*}}}*/
    /* transition {{{*/
    /*.....................................*/ let transition; /*.......................................*/ let l_x;
    if     ( action0_sticky_ring_select      ) { transition = "STICKY RING"                 +" .. STOP CHOOSER"   ; l_x = 9; }
    else if( action1_sel_text_on_touched     ) { transition = "STICKY PAD WITH SELECTION"   +" .. PASTE SELECTION"; l_x = 1; }
    else if( action2_pad_not_fixed_choose    ) { transition = "STICKY PAD"                  +" .. START CHOOSER"  ; l_x = 2; }
    else if( action3_clicked_pen_EDITING     ) { transition = "STICKY CLICK PEN"            +" .. EDIT STICKY"    ; l_x = 3; }
    else if( action4_sticky_fix_unpin        ) { transition = "STICKY PIN"                  +" .. UNPIN STICKY"   ; l_x = 4; }
    else if( action5_clicked_handle_or_fixed ) { transition = "STICKY CLICK HAND OR FIXED"  +" .. TOGGLE FIXED"   ; l_x = 5; }

    /*}}}*/
/*{{{*/
if(tag_this)
{
    log_key_val(  "CLICK"
              , { className : "["+(sticky ? sticky.className : "")+"]"
                , state0_is_bouncing_EDIT
                , state0_is_editing
                , state0_clicked_tool_panel
                , state1_sticky_ring_deployed
                , state2_sticky_has_focus
                , state3_clicked_hand
                , state3_clicked_pen
                , state3_clicked_rotate
                , state3_onSticky_touched
                , state4_clicked_pad
                , state5_clicked_sticky_fix
                , state6_clicked_sticky_ring
                , state7_target_fixed
                , state8_target_dimmed
                , state9_target_fixed
                , sel_text                         : "["+ellipsis_short(sel_text)+"]"
                , action0_sticky_ring_select
                , action1_sel_text_on_touched
                , action2_pad_not_fixed_choose
                , action3_clicked_pen_EDITING
                , action4_sticky_fix_unpin
                , action5_clicked_handle_or_fixed
              }
              , lbX[l_x], false);

    if(sticky) t_sticky_LOG(sticky, transition, lfX[l_x]);
}
/*}}}*/
    /* step {{{*/
    if     ( action0_sticky_ring_select      ) { sticky_RING_select     (sticky          ); }
    else if( action1_sel_text_on_touched     ) { sticky_set_sel_text    (sticky, sel_text); }
    else if( action2_pad_not_fixed_choose    ) { t_sticky_CHOOSE        (                ); }
    else if( action3_clicked_pen_EDITING     ) { t_sticky_EDIT          (sticky          ); }
    else if( action4_sticky_fix_unpin        ) { sticky_unpin_sticky_num(sticky.num      ); t_sticky_reorder();   }
    else if( action5_clicked_handle_or_fixed ) { sticky_FIXED_TOGGLE    (sticky          ); }
    else if(tag_this)                            logBIG("NOTHING TO DO", lf8);
    /*}}}*/
    /* ring {{{*/
    if(action4_sticky_fix_unpin && state1_sticky_ring_deployed && !t_sticky_RING_layout())
    {
        t_sticky_RING_stop (caller);
        t_tools.t_dimm_stop(caller);
    }
    /*}}}*/
/*{{{
if(log_this) log("%c"+t_data.SDX[l_x]+"%c transition %c"+(transition ? transition : "NONE"), lbB+lfX[l_x], lbH+lfX[l_x], lbH+lfX[l_x]);
    dom_select.clearSelection();
}}}*/
    return transition;
};
/*}}}*/
/*}}}*/
/* SCROLL */
/*{{{*/
/*… sticky_scrollTo {{{*/
/*{{{*/
const STICKY_TOOL_HALF_HEIGHT = 36;

/*}}}*/
let sticky_scrollTo = function(sticky_num, fixed_x, fixed_y)
{
/*{{{*/
let   caller = "sticky_scrollTo";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) t_fly.t_log_event_status(caller+"(sticky_num=["+sticky_num+"], fixed_xy=["+fixed_x+" "+fixed_y+"])", lf5);
/*}}}*/
    /* ELECT CURRENT STICKY_TOOL {{{*/
    let sticky = sticky_GET( sticky_num );

    t_sticky_set_onWork_STICKY(sticky);
/*{{{
    setTimeout(function() { del_el_class(sticky, CSS_PRESSED); }, 250);
}}}*/
    /*}}}*/
    /* SCROLL WINDOW CENTER ONTO [sticky] {{{*/
    let xy = get_el_xy(sticky, caller);
    let  x = Math.floor(xy.x                      );
    let  y = Math.floor(xy.y + sticky.offsetHeight / 2);

    if( !t_view.t_view1_is_xy_in_viewport(x, y) )
    {
        let scrollBehavior
            = t_view.t_view2_is_xy_near_viewport(x, y)
            ? "smooth"
            : "" /* use current default */
        ;

        let { w_W,w_H } = t_tools.t_cache_wph_WH();
        x -= w_W / 2;
        y -= w_H / 2;

        x  = Math.max(0, x);
        y  = Math.max(0, y);

        t_tools.t_window_scrollTo(x, y, scrollBehavior);
    }
    /*}}}*/
};
/*}}}*/
/*}}}*/
/* LAYOUT */
/*{{{*/
/*➔ t_sticky_onLayout {{{*/
/*{{{*/
let   STICKY_ONLAYOUT_DELAY = 250;

let   sticky_onLayout_timer;
/*}}}*/
let t_sticky_onLayout = function()
{
    sticky_set_SLOW_LAYOUT();

    if(sticky_onLayout_timer) clearTimeout( sticky_onLayout_timer );
    sticky_onLayout_timer   =   setTimeout( sticky_onLayout_handler, STICKY_ONLAYOUT_DELAY);
};
/*}}}*/
/*_   sticky_onLayout_handler {{{*/
let   sticky_onLayout_handler = function()
{
/*{{{*/
let   caller = "sticky_onLayout_handler";
let log_this = DOM_STICKY_LOG;

if( log_this) log("%c"+caller, lbH+lf4);
/*}}}*/
    sticky_onLayout_timer = null;
    let show_seekzone = t_prop.get(t_data.SHOW_SEEKZONE);

    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        /* SKIP UNPINNED AND FIXED {{{*/
        let sticky = sticky_array[sticky_num];
        if(!sticky                          ) continue;

        set_el_class_on_off(sticky, t_data.SHOW_SEEKZONE, show_seekzone);

        if(!has_el_class(sticky, CSS_PINNED)) continue;
        if( has_el_class(sticky, CSS_FIXED )) continue;

if( log_this) log(sticky_num+"%c sticky=["+get_n_lbl(sticky)+"] "+sticky.classList, lbH+lf5);
        /*}}}*/
        /* LAYOUT .. [xy anchor_node date_MS msg dir_class] {{{*/
        let value = sticky_get_value( sticky );

        sticky_set_value(sticky, value);
        /*}}}*/
    }
    t_tools.t_save_update_post(caller);

    setTimeout(function() { sticky_clr_SLOW_LAYOUT(); }, 1000);
};
/*}}}*/
/*➔ t_sticky_reorder {{{*/
let t_sticky_reorder = function()
{
/*{{{*/
let   caller = "t_sticky_reorder";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbH+lf6);
/*}}}*/
    /* NOT SORTED {{{*/
if( log_this) log("%c NOT SORTED .. sticky_array.length=["+sticky_array.length+"]...", lf3);
    let targets = [];
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let sticky     = sticky_array[ sticky_num ];
        if(!sticky                                 ) continue;
/*{{{
if( log_this) log_key_val("sticky.num["+sticky.num+"] "+ellipsis(strip_HTML(sticky.msg), 16), sticky);
if( log_this) log("num=["+sticky.num+"] .. msg=["+ellipsis_short(strip_HTML(sticky.msg))+"] .. date=["+sticky.date_MS+"] "+new Date(sticky.date_MS)+"]");
if( log_this) log("num=["+sticky.num+"] .. msg=["+ellipsis_short(strip_HTML(sticky.msg))+"]");
if( log_this) log("id=["+sticky.id+"] .. num=["+sticky.num+"] .. msg=["+ellipsis_short(strip_HTML(sticky.msg))+"]");
}}}*/

        targets.push( sticky );
    }
    /*}}}*/
    /* Sort on date {{{*/
/*{{{
if( log_this) log("SORT ON DATE");
    targets
        = targets.sort(
                       function(a,b) {
                           if(!a.date_MS)             return  1;
                           if(!b.date_MS)             return -1;
                           if( a.date_MS > b.date_MS) return  1;
                           if( a.date_MS < b.date_MS) return -1;
                           else                       return  0;
                       }
                      );
}}}*/
    /*}}}*/
    /* Sort on position {{{*/
if( log_this) log("SORT ON POSITION");
    targets
        = targets.sort(
                       function(a,b) {
                           if(!a.offsetTop)                 return  1;
                           if(!b.offsetTop)                 return -1;

                        let    a_offsetTop  = a.offsetTop  + ((a.style.position == "fixed") ? window.scrollY : 0);
                        let    b_offsetTop  = b.offsetTop  + ((b.style.position == "fixed") ? window.scrollY : 0);

                           if( a_offsetTop  > b_offsetTop ) return  1;
                           if( a_offsetTop  < b_offsetTop ) return -1;

                        let    a_offsetLeft = a.offsetLeft + ((a.style.position == "fixed") ? window.scrollX : 0);
                        let    b_offsetLeft = b.offsetLeft + ((b.style.position == "fixed") ? window.scrollX : 0);
                           if( a_offsetLeft > b_offsetLeft) return  1;
                           if( a_offsetLeft < b_offsetLeft) return -1;
                           else                             return  0;
                       }
                      );
    /*}}}*/
/*{{{
    let el_last_used = t_tools.t_get_onWork_EL_last_used();
}}}*/
    /* Rebuild sorted collection {{{*/
    sticky_array = [];
    for(let sticky_num= 0, i= 0; i < targets.length; ++i)
    {
        let sticky                    =   targets[i];
        sticky.num                    = ++sticky_num;
        sticky_reorder_num_label_color(   sticky );
        sticky.style.zIndex           =   sticky.num + t_data.ZINDEX_STICKY_TOOL_ZERO;

        sticky_array[ sticky_num ]    = sticky;

/*{{{
if( log_this) log_key_val("sticky.num["+sticky.num+"] "+ellipsis(strip_HTML(sticky.msg), 16), sticky);
}}}*/
    }
    /*}}}*/
    /* SORTED .. UPDATE [num] [id] {{{*/
if( log_this) log("%c ... SORTED .. sticky_array.length=["+sticky_array.length+"]...", lf4);
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let sticky     =  sticky_array[ sticky_num ];
        if(!sticky     )  continue;

        sticky.num =           sticky_num;
        sticky.id  = "sticky_"+sticky_num;

/*{{{
if( log_this) log("id=["+sticky.id+"] .. num=["+sticky.num+"] .. msg=["+ellipsis_short(strip_HTML(sticky.msg))+"]");
}}}*/
    }
/*}}}*/
    t_tools.t_save_update_post(caller);
};
/*}}}*/
/*…   sticky_reorder_num_label_color {{{*/
let   sticky_reorder_num_label_color = function(sticky)
{
/*{{{*/
let   caller = "sticky_reorder_num_label_color";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this)
    log(caller+"%c"+sticky.id+"%c num=["+sticky.num+"] %c msg=["+ellipsis_short(strip_HTML(sticky.msg))+"]"
        ,        lbL+lf8      ,lbC+lf3                ,lbR+lf3                                             );
/*}}}*/
    /* [sticky_pad_num] LABEL {{{*/
    let sticky_pad_num = get_sticky_pad_num( sticky );
    if( sticky_pad_num )
        sticky_pad_num.innerHTML = (sticky.num == 10) ? "X" : sticky.num;

    /*}}}*/
    /* [sticky_pad] COLOR {{{*/
    let sticky_pad = get_sticky_pad( sticky );
    sticky_pad.className
        = "sticky_pad bg"+(sticky.num % 10)
    ;
    /*}}}*/
};
/*}}}*/
/*➔ t_sticky_reorder_required_on_scroll {{{*/
let t_sticky_reorder_required_on_scroll = function()
{
    sticky_CLEAR_HIGHLIGHT();

    let count        = 0;
    let fixed_count  = 0;
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let sticky = sticky_array[ sticky_num ];
        if(!sticky                                 ) continue;
        if(!has_el_class(sticky, CSS_PINNED)) continue;

        count       += 1;
        fixed_count += (sticky.style.position == "fixed");
    }
/*{{{
log("fixed: "+fixed_count +" out of "+count+"]")
}}}*/
    /* order may change when page is scrolled */
    return  fixed_count           /* some not scrolled with the page */
        && (fixed_count != count) /* ... and some are not */
    ;
};
/*}}}*/
/*}}}*/
/* CHANGE */
/*{{{*/
/*➔ t_sticky_SHOW_SEEKZONE_sync {{{*/
let t_sticky_SHOW_SEEKZONE_sync = function(state)
{
    for(let i= 0; i < sticky_array.length; ++i)
    {
        let sticky  = sticky_array[i];
        if(!sticky) continue;
        if(!has_el_class(sticky, CSS_PINNED)) continue;

        if(state) sticky_format_pad_anchor_path( sticky );
        else      sticky_format_pad            ( sticky );

        set_el_class_on_off(sticky, t_data.SHOW_SEEKZONE, state);
    }

    if(!state) t_sticky_format_pad_all();
};
/*}}}*/
/*}}}*/
/*}}}*/

/* STATE */
/*{{{*/
/*_ t_sticky_set_MOVING {{{*/
let t_sticky_set_MOVING = function(sticky)
{
    sticky.touched = STICKY_HAND;
};
/*}}}*/
/*_ t_sticky_is_MOVING {{{*/
let t_sticky_is_MOVING = function(sticky)
{
    return sticky && (sticky.touched == STICKY_HAND);
};
/*}}}*/
/*_ t_sticky_is_RESIZING {{{*/
let t_sticky_is_RESIZING = function(sticky)
{
    return (sticky && (sticky.touched == STICKY_REFONT)) /* about to */
        || (sticky && (sticky.touched == STICKY_REFLOW)) /* about to */
        || (sticky && (sticky.touched == STICKY_RESIZE)) /* about to */
        ||  sticky_RESIZE_request                        /* doing it */
    ;
};
/*}}}*/
/*_ t_sticky_is_ORIENTING {{{*/
let t_sticky_is_ORIENTING = function(sticky)
{
    return (sticky.touched == STICKY_ROTATE)
        || (sticky.touched == STICKY_PAD ) && has_el_class(sticky, CSS_FIXED )
    ;
};
/*}}}*/
/*_ t_sticky_is_EDITING {{{*/
let t_sticky_is_EDITING = function(sticky)
{
    return !t_tools.t_get_onDown_EL()
        &&  sticky && (sticky.touched == STICKY_PAD)
        && !scrolling_sticky
        && !sticky_RESIZE_request
    ;
};
/*}}}*/
/*}}}*/
/* CSS */
/* [ADD HAS DEL] .. [SET CLR] .. [LAYOUT DIR FLOW RESIZE] {{{*/
let last_set_dir_class;
let last_set_pad_flow;

/* CLASS */
/*{{{
let set_el_class_on_off    = function(sticky,css_class,state) {        set_el_class_on_off  (sticky, css_class, state); };
let add_el_class    = function(sticky,css_class      ) {        add_el_class         (sticky, css_class); };
let del_el_class    = function(sticky,css_class      ) {        del_el_class         (sticky, css_class); };
let has_el_class    = function(sticky,css_class      ) { return has_el_class         (sticky, css_class); };
}}}*/

/* LAYOUT */
let sticky_set_SLOW_LAYOUT   = function(                      ) {        t_tools.t_dom_tools_html_set_el_class_on_off(CSS_SLOW_LAYOUT  , true ); };
let sticky_clr_SLOW_LAYOUT   = function(                      ) {        t_tools.t_dom_tools_html_set_el_class_on_off(CSS_SLOW_LAYOUT  , false); };
let sticky_set_STICKY_RAISED = function(                      ) {        t_tools.t_dom_tools_html_set_el_class_on_off(CSS_STICKY_RAISED, true ); };
let sticky_clr_STICKY_RAISED = function(                      ) {        t_tools.t_dom_tools_html_set_el_class_on_off(CSS_STICKY_RAISED, false); };

/* DIR */
let sticky_set_DIR_CLASS     = function(sticky,dir_class      ) {        set_el_class_removing(sticky, dir_class, CSS_POINT_XX); sticky.dir_class = dir_class; last_set_dir_class = dir_class; };
let sticky_clr_DIR_CLASS     = function(sticky                ) { return set_el_class_removing(sticky, ""       , CSS_POINT_XX); };

/* FLOW */
let sticky_set_WS_CLASS      = function(sticky,ws_class       ) {        set_el_class_removing(sticky,  ws_class, CSS_WS_XX   ); sticky.pad_flow  = ws_class;  last_set_pad_flow  = ws_class;  };
let sticky_clr_WS_CLASS      = function(sticky                ) { return set_el_class_removing(sticky, ""       , CSS_WS_XX   ); };

/* RESIZE */
let sticky_set_RESIZING      = function(sticky                ) { if(!sticky_RESIZE_request) sticky_RESIZE_request = { sticky };   add_el_class(sticky                      , CSS_RESIZING  ); };
let sticky_clr_RESIZING      = function(                      ) { if(!sticky_RESIZE_request) return;                               del_el_class(sticky_RESIZE_request.sticky, CSS_RESIZING  ); };
let sticky_set_RESIZE_CAP    = function(sticky                ) { if(!sticky_RESIZE_request) sticky_RESIZE_request = { sticky };   add_el_class(sticky_RESIZE_request.sticky, CSS_RESIZE_CAP); };
let sticky_clr_RESIZE_CAP    = function(                      ) { if(!sticky_RESIZE_request) return;                               del_el_class(sticky_RESIZE_request.sticky, CSS_RESIZE_CAP); };

/*}}}*/
/* DIR */
/*{{{*/
/*… sticky_set_POINT_DIR .. TODO .. [CLEANUP THIS POINT + SWITCH MESS] {{{*/
let sticky_set_POINT_DIR = function(sticky, pointing_E, pointing_N, switching_N, switching_S, switching_E, switching_W)
{
    /* remove direction className */
    set_el_class_removing(sticky, "", CSS_POINT_XX);

    let dir_class;

    if     (switching_N  ) dir_class = pointing_E ? CSS_POINT_NE : CSS_POINT_NW; /* NORTH-SOUTH .. keeping current EAST-WEST */
    else if(switching_S  ) dir_class = pointing_E ? CSS_POINT_SE : CSS_POINT_SW;

    else if(switching_E  ) dir_class = pointing_N ? CSS_POINT_NE : CSS_POINT_SE; /* EAST-WEST   .. keeping current NORTH-SOUTH */
    else /* switching_W */ dir_class = pointing_N ? CSS_POINT_NW : CSS_POINT_SW;

    if(dir_class) sticky_set_DIR_CLASS(sticky, dir_class);
};
/*}}}*/
/*… sticky_get_POINT_DIR {{{*/
let sticky_get_POINT_DIR = function(sticky)
{
    return sticky.classList.contains(CSS_POINT_EE) ? CSS_POINT_EE
        :  sticky.classList.contains(CSS_POINT_SE) ? CSS_POINT_SE
        :  sticky.classList.contains(CSS_POINT_SW) ? CSS_POINT_SW
        :  sticky.classList.contains(CSS_POINT_WW) ? CSS_POINT_WW
        :  sticky.classList.contains(CSS_POINT_NW) ? CSS_POINT_NW
        :  sticky.classList.contains(CSS_POINT_NE) ? CSS_POINT_NE
        :                                        ""
    ;
};
/*}}}*/
/*}}}*/
/* SEEK */
/*{{{*/
/*➔ t_sticky_get_SEEK_NEXT {{{*/
let t_sticky_get_SEEK_NEXT = function(log_this=false)
{
/*{{{*/
let   caller = "t_sticky_get_SEEK_NEXT";

/*}}}*/
    let dismissed_by
        = (                      !sticky_SEEK_TARGET                          ) ? "NO sticky_SEEK_TARGET"
        : ( has_el_class(  sticky_SEEK_TARGET   , CSS_FIXED         )  ) ? "has_el_class(  sticky_SEEK_TARGET,CSS_FIXED      )"
        : (!has_el_class(  sticky_SEEK_TARGET   , CSS_SEEK_TARGET   )  ) ? "!has_el_class(  sticky_SEEK_TARGET,CSS_SEEK_TARGET)"
        : (                       sticky_SEEK_TARGET.touched == STICKY_HAND   ) ? "touched=["+sticky_SEEK_TARGET.touched+"]"
        : (                       sticky_SEEK_TARGET.touched == STICKY_ROTATE ) ? "touched=["+sticky_SEEK_TARGET.touched+"]"
        :                                                                         ""
    ;

if(log_this && dismissed_by) log(caller+" %c"+dismissed_by, lbH+lf2);
    return dismissed_by ? null : sticky_SEEK_TARGET;
};
/*}}}*/
/*➔ t_sticky_clr_SEEK_NEXT {{{*/
let t_sticky_clr_SEEK_NEXT = function(sticky)
{
    if     (!sticky                      ) sticky_set_SEEK_TARGET(null);
    else if( sticky == sticky_SEEK_TARGET) sticky_set_SEEK_TARGET(null);
};
/*}}}*/
/*➔ t_sticky_set_SEEK_NEXT {{{*/
let t_sticky_set_SEEK_NEXT = function(sticky_from, onDown_SCROLL_XY, dir=1)
{
/*{{{*/
    let caller = "t_sticky_SEEK_NEXT";
let log_this = LOG_MAP.T3_LAYOUT;

let tag_this = DOM_STICKY_TAG || log_this;
/*{{{
logXXX(caller+"("+sticky_from.id+" , "+dir+")");
}}}*/
/*}}}*/
    del_el_class(sticky_from, CSS_SEEK_TARGET);

    let sticky = dir
        ?     sticky_get_next_pinned(sticky_from, dir)
        :     sticky_from
    ;
    if( sticky ) {
        /* [CSS_SEEK_TARGET] ON [sticky] {{{*/
if( tag_this) log("%c"+caller+"%c"+sticky.num, lbL+lf3, lbR+lf4);
        sticky_set_SEEK_TARGET( sticky );

        t_seek.t_seeker_onMove2_ON_NEXT_STICKY(sticky, onDown_SCROLL_XY);

        /*}}}*/
        /* [WINDOW SCROLL TO] NEW CURRENT STICKY {{{*/
        let sticky_num = t_sticky_GET_NUM(sticky);
        let    fixed_x = sticky.offsetLeft - onDown_SCROLL_XY.x;
        let    fixed_y = sticky.offsetTop  - onDown_SCROLL_XY.y;

        sticky_scrollTo(sticky_num, fixed_x, fixed_y);
        /*}}}*/
        t_sticky_move_z_on_top( sticky );
        t_sticky_SET_DIMMED(false, "SEEK");
        if(t_prop.get(t_data.SHOW_SEEKZONE) && t_prop.get(t_data.FLOATLOG)) t_sticky_LOG_TOOLTIP(sticky, "SEEK");
    }
    return sticky;
};
/*}}}*/
/*…   sticky_set_SEEK_TARGET {{{*/
let       sticky_SEEK_TARGET;
let   sticky_set_SEEK_TARGET = function(sticky)
{
    if(sticky_SEEK_TARGET) del_el_class(sticky_SEEK_TARGET, CSS_SEEK_TARGET);

    sticky_SEEK_TARGET = sticky;
/*{{{
log_caller()
log("%c sticky_SEEK_TARGET=["+get_id_or_tag(sticky_SEEK_TARGET)+"]", lbH+lf8)
}}}*/

    if(sticky_SEEK_TARGET) add_el_class(sticky_SEEK_TARGET, CSS_SEEK_TARGET);
};
/*}}}*/
/*…   sticky_get_next_pinned {{{*/
let   sticky_get_next_pinned = function(sticky_from, dir)
{
/*{{{*/
    let caller = "sticky_get_next_pinned";
let log_this = LOG_MAP.T3_LAYOUT;

/*}}}*/
    /* [sticky_from] index {{{*/
    if(!dir) return sticky_from;

    let idx_from
        = t_sticky_GET_NUM(sticky_from)
        + dir /* next */
        - 1   /* make it zero-based to deal with modulo */
    ;

    /*}}}*/
    /* next PINNED {{{*/
    let sticky;
    for(let step = 0; step < STICKY_MAX; ++step) /* may wrap */
    {
        let sticky_num = 1 + (idx_from + step*dir + STICKY_MAX) % STICKY_MAX;
        sticky         = sticky_GET(sticky_num);

        if( has_el_class(sticky, CSS_PINNED) ) break;
        else                    sticky = null;
    }
    /*}}}*/
if( log_this) log("%c"+caller+"("+sticky_from.id+" dir="+dir+") %c return "+(sticky ? sticky.num : undefined), lbL+lf9, lbR+(sticky ? lf3:lf2));
    return sticky;
};
/*}}}*/
/*}}}*/
/* DIMMED */
/*{{{*/
/*{{{*/
const DIMM_POSTPONED_BY_SCROLLING       = "DIMM_POSTPONED_BY_SCROLLING";
const DIMM_POSTPONED_BY_SCROLLING_DELAY = 3000;

/*}}}*/
/*➔ t_sticky_SET_DIMMED_IS_PENDING {{{*/
let t_sticky_SET_DIMMED_IS_PENDING = function()
{
    return (sticky_SET_DIMMED_timer != null);
};
/*}}}*/
/*➔ t_sticky_SET_DIMMED {{{*/
/*{{{*/
const T_SEEKER_SET_DIMMED_DELAY = 1000;

let   sticky_SET_DIMMED_timer;
let   sticky_SET_DIMMED_callers;
/*}}}*/
let t_sticky_SET_DIMMED = function(dimmed, _caller, delay)
{
    if(!t_sticky_GET_COUNT()) return;
/*{{{*/
let   caller = "t_sticky_SET_DIMMED";
let log_this = LOG_MAP.T3_LAYOUT;

/*}}}*/

    if(sticky_SET_DIMMED_timer) clearTimeout(sticky_SET_DIMMED_timer);
       sticky_SET_DIMMED_timer = null;

    if( dimmed && sticky_ALL_DIMMED ()) { if(log_this) log("%c"+caller+"("+dimmed+") .. sticky_ALL_DIMMED" , lb8); return; }
    if(!dimmed && sticky_NONE_DIMMED()) { if(log_this) log("%c"+caller+"("+dimmed+") .. sticky_NONE_DIMMED", lb0); return; }

if( log_this && (sticky_SET_DIMMED_callers != _caller))
    log("%c"+caller+"("+dimmed+" , "+_caller+", delay=["+delay+"])", lbH+lf3);

    delay =  delay
        || ( dimmed
             ?  T_SEEKER_SET_DIMMED_DELAY    /* hide after delay */
             :  0)                           /* show instant */
    ;

    sticky_SET_DIMMED_callers += (sticky_SET_DIMMED_callers ? " ":"")+_caller;

    sticky_SET_DIMMED_timer = setTimeout(function() { sticky_SET_DIMMED_handler(dimmed); }, delay);
};
/*}}}*/
/*…   sticky_SET_DIMMED_NOW {{{*/
let   sticky_SET_DIMMED_NOW = function(_caller)
{
/*{{{*/
let   caller = "sticky_SET_DIMMED_NOW";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller+"("+_caller+")", lbH+lf3);
/*}}}*/

    if( sticky_ALL_DIMMED() ) return;

    if(sticky_SET_DIMMED_timer) clearTimeout(sticky_SET_DIMMED_timer); /* clear delayed */

    t_sticky_SET_DIMMED(true, _caller, 0);
};
/*}}}*/
/*…   sticky_SET_DIMMED_handler {{{*/
let   sticky_SET_DIMMED_handler = function(dimmed)
{
/*{{{*/
let caller   = "sticky_SET_DIMMED_handler";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller+"("+dimmed+")", lbH+lfX[dimmed ? 0:9]);
if( log_this) t_fly.t_log_event_status(caller, lf8);
/*{{{
}}}*/
/*}}}*/
    /* post canceled {{{*/
    if(!sticky_SET_DIMMED_timer) {
if( log_this) log("%c has been canceled", lbH+lf8);

        return; /* has been canceled */
    }
    /*}}}*/
    sticky_SET_DIMMED(dimmed);

    sticky_SET_DIMMED_timer   = null;
    sticky_SET_DIMMED_callers = "";
};
/*}}}*/
/*…   sticky_SET_DIMMED {{{*/
let   sticky_SET_DIMMED = function(dimmed)
{
/*{{{*/
let   caller = "sticky_SET_DIMMED";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this)
    log_key_val_group(caller+"("+dimmed+")"
                      , {   set_dimm_was_postponed_by
                          , sticky_SET_DIMMED_callers
                      }, lbH+lf3, false);

/*}}}*/
    /* DIMMING CANCELED SOME FIXED {{{*/
    if(dimmed && sticky_some_fixed())
    {
if( log_this) log("%c"+caller+": DIMMING CANCELED %c SOME FIXED"
                  ,lbL+lf3                       ,lbR+lf9);

        return;
    }
    /*}}}*/
    /* DIMMING POSTPONED {{{*/
    let should_postpone = t_tools.t_dimm_should_postpone( dimmed );
    if( should_postpone )
    {
        set_dimm_was_postponed_by
            = t_sticky_get_SCROLLING_STICKY()
            ?  DIMM_POSTPONED_BY_SCROLLING
            :  should_postpone;

if( log_this) log("%c"+caller+": DIMMING POSTPONED %c"+set_dimm_was_postponed_by
                  ,lbL+lf6                       ,lbR+lf6);

        t_sticky_SET_DIMMED(dimmed, sticky_SET_DIMMED_callers, T_SEEKER_SET_DIMMED_DELAY);
        return;
    }
    /*}}}*/
    /* CHECK [some_pressed_sticky] {{{*/
    let some_pressed_sticky = sticky_SOME_PRESSED();
if( log_this) log("%c some_pressed_sticky=["+some_pressed_sticky+"]", lbH+lf8);
/*{{{
}}}*/

    /*}}}*/
    /* CHECK-DIMM [some_not_dimmed_reason] .. (while applying request) {{{*/
    let some_not_dimmed_reason;
    let show_seekzone = t_prop.get(t_data.SHOW_SEEKZONE);

    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let  sticky = sticky_array[ sticky_num ];
        if( !sticky                                 ) continue;
        if( !has_el_class(sticky, CSS_PINNED)) continue;

        /* UNDIMM */
        if(!dimmed || some_pressed_sticky || show_seekzone)
        {
            sticky_set_dimmed_state(sticky, false);
        }
        /* DIMM */
        else if(dimmed)
        {
/*{{{
            if(      has_el_class(sticky, CSS_PASTE_TARGET)) del_el_class( sticky, CSS_PASTE_TARGET);
}}}*/
            if(      has_el_class(sticky, CSS_PASTE_TARGET   )) some_not_dimmed_reason = sticky.id +" "+ CSS_PASTE_TARGET;
            else if( has_el_class(sticky, CSS_HAS_FOCUS      )) some_not_dimmed_reason = sticky.id +" "+ CSS_HAS_FOCUS;
            else if( has_el_class(sticky, CSS_PRESSED        )) some_not_dimmed_reason = sticky.id +" "+ CSS_PRESSED;
            else if( has_el_class(sticky, CSS_ANCHOR_DETACHED)) some_not_dimmed_reason = sticky.id +" "+ CSS_ANCHOR_DETACHED;
            else {
                sticky_set_dimmed_state(sticky, true);
            }
        }
    }
    /*}}}*/
    /* CALL AGAIN LATER .. IF SOME NOT DIMMED {{{*/
    if(  !dimmed          /* JUST UNDIMMED      .. DIMM IS DUE LATER */
       || some_not_dimmed_reason /* COULD NOT DIMM ALL .. CHECK AGAIN LATER */
       || some_pressed_sticky
      ) {
        let reason =   !dimmed                 ?  "ALL UNDIMMED"
                     :  some_not_dimmed_reason ? ("SOME NOT DIMMED ["+ some_not_dimmed_reason                  +"]")
                     :  some_pressed_sticky    ? ("SOME PRESSED ["   + some_pressed_sticky.id +" "+ CSS_PRESSED+"]")
                     :                     ""
        ;
if( log_this) log("...%c"+reason, lbH+lf8);

        t_sticky_SET_DIMMED(true, "TRY DIMMING LATER: "+reason);
    }
    /*}}}*/
};
/*}}}*/
/*_ sticky_set_dimmed_state {{{*/
let sticky_set_dimmed_state = function(sticky, state)
{
    if(state) {
        add_el_class(sticky, CSS_DIMMED); del_el_class(sticky, CSS_DIMMED_OFF);
    }
    else {
        del_el_class(sticky, CSS_DIMMED); add_el_class(sticky, CSS_DIMMED_OFF);
        setTimeout( function() {          del_el_class(sticky, CSS_DIMMED_OFF); } , 2000);
    }
};
/*}}}*/

/*… sticky_some_fixed {{{*/
let sticky_some_fixed = function()
{
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let  sticky = sticky_array[ sticky_num ];
        if( !sticky ) continue;
        if(  has_el_class(sticky, CSS_FIXED ) ) return true;
    }
    return false;
};
/*}}}*/
/*… sticky_ALL_DIMMED {{{*/
let sticky_ALL_DIMMED = function()
{
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let  sticky = sticky_array[ sticky_num ];
        if( !sticky ) continue;
        if( !has_el_class(sticky, CSS_DIMMED) ) return false; /* one dimmed */
    }
    return true;
};
/*}}}*/
/*… sticky_NONE_DIMMED {{{*/
let sticky_NONE_DIMMED = function()
{
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let  sticky = sticky_array[ sticky_num ];
        if( !sticky ) continue;
        if(  has_el_class(sticky, CSS_DIMMED) ) return false; /* one not dimmed */
    }
    return true;
};
/*}}}*/
/*… sticky_SOME_PRESSED {{{*/
let sticky_SOME_PRESSED = function()
{
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let  sticky = sticky_array[ sticky_num ];
        if( !sticky ) continue;
        if(  has_el_class(sticky, CSS_PRESSED) ) return true;
    }
    return false;
};
/*}}}*/
/*}}}*/
/* PINNED */
/*{{{*/
/*➔ t_sticky_unpin_all {{{*/
let t_sticky_unpin_all = function()
{
/*{{{*/
let   caller = "t_sticky_unpin_all";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log("%c"+caller, lbH+lf2);
/*}}}*/
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
        sticky_unpin_sticky_num( sticky_num );

    t_tools.t_save_update_post(caller);
};
/*}}}*/
/*…   sticky_unpin_sticky_num {{{*/
let   sticky_unpin_sticky_num = function(sticky_num)
{
/*{{{*/
let   caller = "sticky_unpin_sticky_num";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log("%c"+caller+"("+sticky_num+")", lbH+lf5);
/*}}}*/
    /* UNPIN sticky {{{*/
    let sticky = sticky_array[ sticky_num ];
    if(!sticky ) return;

if( log_this) log("...unchecking sticky.num["+sticky.num+"] .. sticky_num["+sticky_num+"] .. sticky.id=["+sticky.id+"]");

    t_tools.t_set_CSS_PINNED(sticky, false);
    sticky.style.display = "none";
    t_sticky_clr_SEEK_NEXT(sticky);

    sticky.date_MS = 0;

    /*}}}*/
};
/*}}}*/
/*}}}*/
/* FIXED .. START STOP TOGGLE */
/*… sticky_FIXED {{{*/
let sticky_FIXED_START  = function(sticky) { sticky_FIXED_TOGGLE(sticky, true); };
let sticky_FIXED_STOP   = function(      ) { sticky_FIXED_TOGGLE(null  ,false); };
let sticky_FIXED_TOGGLE = function(sticky_to_toggle,state)
{
/*{{{*/
let   caller = "sticky_FIXED_TOGGLE";
let log_this = DOM_STICKY_LOG;

let tag_this = DOM_STICKY_TAG || log_this;
if( log_this                    ) log("%c"+caller+"("+(sticky_to_toggle ? sticky_to_toggle.id : "null")+" , state "+state+")", lbH+lf9);
if( log_this && sticky_to_toggle) log("...%c"+sticky_to_toggle.id+".className=["     +sticky_to_toggle.className     +"]", lf8);
if( log_this && sticky_to_toggle) log("...%c"+sticky_to_toggle.id+".style.position=["+sticky_to_toggle.style.position+"]", lf8);
/*}}}*/
    /* TOGGLE .. f(sticky_to_toggle) {{{*/
    if( state == undefined) {
        state  = (sticky_to_toggle.style.position != "fixed");

if( log_this) log("...%c state=["+state+"]", lf8);
    }
    let some_unfixed;
    /*}}}*/
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        /* SKIP UNPINNED {{{*/
        let  sticky = sticky_array[ sticky_num ];
        if( !sticky ) continue;

        /*}}}*/
        /* FIXING SOME TO VIEWPORT .. (detached from page while scrolling) {{{*/
        if( state )
        {
            if(sticky == sticky_to_toggle)
            {
                add_el_class(sticky, CSS_TOUCHED);

                if((sticky.style.position != "fixed")) {
                    sticky.style.position  = "fixed";
                    add_el_class(sticky, CSS_FIXED);
if( tag_this) log("%c FIXING "+sticky.id, lbH+lf4);

                    let      to = get_el_transformOrigin( sticky );
                    let  x = to.x + Math.min(sticky.offsetLeft - window.scrollX, window.innerWidth - STICKY_FIX_RESOLUTION);
                    let  y = to.y + Math.min(sticky.offsetTop  - window.scrollY, window.innerHeight- STICKY_FIX_RESOLUTION);
                    sticky_MOVE_FLIP({ sticky, x,y, layout_changed:true });
                }
            }
        }
        /*}}}*/
        /* UNFIXING ALL FROM VIEWPORT .. (stick to page while scrolling) {{{*/
        else {

            if( has_el_class(sticky, CSS_TOUCHED) )
                del_el_class(sticky, CSS_TOUCHED);

            if( sticky.style.position == "fixed"   ) {
                sticky.style.position  = "absolute";
                del_el_class(sticky, CSS_FIXED);
if( tag_this) log("%c UNFIXING "+sticky.id, lbH+lf6);
                some_unfixed = (some_unfixed ? some_unfixed+" ":"") + sticky.id;

                sticky.style.left      = (sticky.offsetLeft + window.scrollX)+"px";
                sticky.style.top       = (sticky.offsetTop  + window.scrollY)+"px";

/*{{{
                if( sticky.anchor_node )
}}}*/
                sticky_DETACHED_STOP(sticky);
            }
        }
        /*}}}*/
        if(state) sticky_update_dat( sticky );
    }
    /* [some_unfixed) TO REMAGNETIZED .. MAGNET TO GRID {{{*/
    if( some_unfixed )
    {
if( tag_this) log("%c MAGNET TO GRID: some_unfixed=["+some_unfixed+"]", lbH+lf3);

        sticky_MAGNET();
    }
    /*}}}*/
};
/*}}}*/
/* DETACHED .. START STOP SET */
/*{{{*/
let sticky_DETACHED_START = function(sticky) { sticky_DETACHED_SET(sticky,  true); };
let sticky_DETACHED_STOP  = function(sticky) { sticky_DETACHED_SET(sticky, false); };
let sticky_DETACHED_SET   = function(sticky,state)
{
/*{{{*/
let   caller = "sticky_detach_from_anchor";
let log_this = DOM_STICKY_LOG;

/*}}}*/
    /* "fixed" .. forget anchor {{{*/
    if( state )
    {
        sticky.detached    = true;
        add_el_class(sticky, CSS_ANCHOR_DETACHED);

        /* ANCHOR DETACH */
        sticky.anchor_node = null;
    }
    /*}}}*/
    /* "absolute" .. has an anchor {{{*/
    else {
        sticky.detached    = false;
        del_el_class(sticky, CSS_ANCHOR_DETACHED);

        /* ANCHOR CHECK ATTACHED */
        if(!sticky.anchor_node) logBIG(caller+"("+sticky.id+") HAS NO ANCHOR ATTACHED",2);
    }
    /*}}}*/
/*{{{*/
if( log_this) log_key_val_group(caller+"("+state+" "+sticky.id+")"
                               , {        position : sticky.style.position
                                 ,             top : sticky.style.top
                                 ,            left : sticky.style.left
                                 ,       className : sticky.className
                               }
                               , lbH+lf3, false);

/*}}}*/
};
/*}}}*/
/* MAGNET .. XY .. anchor .. closest in viewport .. attach */
/*{{{*/
/*{{{*/
const STICKY_FIX_RESOLUTION =   10;
const STICKY_FIX_DELAY      =  500;

let sticky_MAGNET0_timer;
/*}}}*/
/*➔ t_sticky_MAGNET_NOW {{{*/
let t_sticky_MAGNET_NOW = function()
{
    if(sticky_MAGNET0_timer) clearTimeout(sticky_MAGNET0_timer);

    sticky_MAGNET0_PINNED_handler();
};
/*}}}*/
/*… sticky_MAGNET {{{*/
let sticky_MAGNET = function()
{
/*{{{
    if(sticky_MAGNET0_timer) return;
}}}*/
    if(sticky_MAGNET0_timer) clearTimeout(sticky_MAGNET0_timer);

    sticky_MAGNET0_timer   = setTimeout(sticky_MAGNET0_PINNED_handler, STICKY_FIX_DELAY);
};
/*}}}*/
/*… sticky_MAGNET0_PINNED_handler ............ not while editing {{{*/
let sticky_MAGNET0_PINNED_handler = function()
{
/*{{{*/
let   caller = "sticky_MAGNET0_PINNED_handler";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbH+lf0);
/*}}}*/
    /* NOT WHILE EDITING MSG {{{*/
    sticky_MAGNET0_timer   = null;

    if(onWork_STICKY && has_el_class(onWork_STICKY, CSS_HAS_FOCUS))
    {
if( log_this) log("...MAGNET HANDLING CANCLED WHILE EDITING STICKY "+onWork_STICKY.id);

        return;
    }
    /*}}}*/
    sticky_MAGNET0_PINNED();
};
/*}}}*/
/*… sticky_MAGNET0_PINNED .................... magnetize .. reorder .. store {{{*/
/*{{{*/
let sticky_MAGNET0_PINNED_onMoveDXY;

/*}}}*/
let sticky_MAGNET0_PINNED = function(re_attached_by)
{
/*{{{*/
let   caller = "sticky_MAGNET0_PINNED";
let log_this = LOG_MAP.T3_LAYOUT;
    log_this = log_this || t_prop.get(t_data.SHOW_SEEKZONE);

if( log_this) log("%c"+t_data.SD0+"%c "+caller,lbS+lf2 ,lbH+lf0);
/*}}}*/
    /* DONE ALREADY AT THIS MOVE POSITION {{{*/
    let show_seekzone = t_prop.get(t_data.SHOW_SEEKZONE);
    let     onMoveDXY = t_tools.get_onMoveDXY();

    if(    sticky_MAGNET0_PINNED_onMoveDXY
       && (sticky_MAGNET0_PINNED_onMoveDXY.x == onMoveDXY.x)
       && (sticky_MAGNET0_PINNED_onMoveDXY.y == onMoveDXY.y)
      ) {
/*{{{
log("DONE ALREADY AT THIS MOVE POSITION ["+onMoveDXY.x+" "+onMoveDXY.y+"]");
}}}*/

        if(!show_seekzone) return;
    }
    else {
       sticky_MAGNET0_PINNED_onMoveDXY = { x:onMoveDXY.x , y:onMoveDXY.y };
    }
    /*}}}*/
    /* MAGNETIZE PINNED .. (both detached or not) {{{*/
    let count             = 0;
    let fixed_count       = 0;
    let some_sticky_moved = false;
if( log_this) log("%c show_seekzone=["+show_seekzone+"]", lbH+lf8);

    let from_num = 1;
    let   to_num = STICKY_MAX;
    if(onWork_STICKY) {
        from_num = onWork_STICKY.num;
        to_num   = from_num;
    }

    for(let sticky_num = from_num; sticky_num <= to_num; ++sticky_num)
    {
        /* SKIP NOT PINNED {{{*/
        let sticky = sticky_array[sticky_num];
        if(!sticky                                             ) continue;
        if(!has_el_class(sticky, CSS_PINNED)            ) continue;

        count       += 1;
        fixed_count += (sticky.style.position == "fixed");

/*{{{
        if((sticky.style.position == "fixed") && !show_seekzone) continue;
}}}*/
        /*}}}*/
        /* SOME MOVED .. MAGNETIZE {{{*/
        some_sticky_moved
            =  t_sticky_MAGNET(sticky, re_attached_by)
            || some_sticky_moved
        ;

        /*}}}*/
    }
    /*}}}*/
    /* REORDER and STORE MOVED {{{*/
if( log_this) log("%c some_sticky_moved=["+some_sticky_moved+"]  .. count=["+count+"] .. fixed_count=["+fixed_count+"]", lbH+lfX[(some_sticky_moved ? 4 : 8)]);

    if( some_sticky_moved || fixed_count) t_sticky_reorder(); /* some off-grid may cross position */
    if( some_sticky_moved               ) t_tools.t_save_update_post(caller);

    /*}}}*/
};
/*}}}*/
/*➔ t_sticky_MAGNET {{{*/
let t_sticky_MAGNET = function(sticky, re_attached_by)
{
/*{{{*/
let   caller = "t_sticky_MAGNET";
let log_this = LOG_MAP.T3_LAYOUT;

/*}}}*/
    /* XY {{{*/
    let x = sticky.offsetLeft;
    let y = sticky.offsetTop;

    x = STICKY_FIX_RESOLUTION * Math.floor((x + STICKY_FIX_RESOLUTION / 2) / STICKY_FIX_RESOLUTION);
    y = STICKY_FIX_RESOLUTION * Math.floor((y + STICKY_FIX_RESOLUTION / 2) / STICKY_FIX_RESOLUTION);

    let to = get_el_transformOrigin( sticky );
    x = Math.max(STICKY_FIX_RESOLUTION/2-to.x, x);
    y = Math.max(STICKY_FIX_RESOLUTION/2-to.y, y);

    let show_anchors
        =  t_prop.get(t_data.PIN_SEEKSPOT)
        && (   re_attached_by
            || ((onWork_STICKY == sticky) ? "(onWork_STICKY == sticky)" : false ))
    ;

    if(   !show_anchors
       && (x == sticky.offsetLeft)
       && (y == sticky.offsetTop )
      )
        return false;

    let some_sticky_moved = true;

    sticky.style.left     = x+"px";
    sticky.style.top      = y+"px";
    /*}}}*/
    /* MAGNET [detatched..re_attached_by] OR [MOVING STICKY] {{{*/
    let magnetizing
        =  sticky.detached
        || re_attached_by
        || show_anchors
    ;
if( log_this) log_key_val(  caller+"("+get_id_or_tag(sticky)+" "+(re_attached_by || "")+")"
                          , { magnetizing , re_attached_by , detached:sticky.detached , sticky , onWork_STICKY , callers:t_log.get_callers() }
                          , lbH+lf7);

    if( magnetizing )
        sticky_MAGNET1_XY_sticky(sticky,x,y,show_anchors);

    /*}}}*/
    return some_sticky_moved;
};
/*}}}*/
/*… sticky_MAGNET0_PINNED_onMoveDXY_clear {{{*/
let sticky_MAGNET0_PINNED_onMoveDXY_clear = function()
{
    sticky_MAGNET0_PINNED_onMoveDXY = null;

};
/*}}}*/
/*… sticky_MAGNET1_XY_sticky ................. adjust xy .. select anchor node {{{*/
/*{{{*/
let sticky_transformOrigin_XY;

/*}}}*/
let sticky_MAGNET1_XY_sticky = function(sticky,x,y,show_anchors)
{
/*{{{*/
let   caller = "sticky_MAGNET1_XY_sticky";
let log_this = DOM_STICKY_LOG;
    log_this = log_this || t_prop.get(t_data.SHOW_SEEKZONE);

/*{{{
if( log_this) t_log.console_clear(caller);
if( log_this) t_tools.t_clear(caller);
}}}*/
/*{{{
}}}*/
if( log_this) log("%c"+t_data.SD1+"%c "+caller+"%c "+x+" "+y+" %c"+ get_n_lbl(sticky)+" %c show_anchors "+show_anchors
                  ,lbS+lf1        ,lbH+lf1     ,lbH+lf1       ,lbH+lf1                        ,lbH+lf7                       );
/*}}}*/
    /* [XY] ➔ STICKY TIP .. f(transformOrigin) {{{*/
    if(!sticky_transformOrigin_XY)
    {
/*{{{
        let xy = [];
        let cs = window.getComputedStyle(sticky);
        let px = cs.transformOrigin.split(" ");
        px.forEach( s => xy.push(parseInt(s)) );
        sticky_transformOrigin_XY = { x:xy[0] , y:xy[1] };
}}}*/
/*{{{
        t_log.console_dir("cs",cs);
        t_log.console_dir("px",px);
        t_log.console_dir("xy",xy);
}}}*/
        sticky_transformOrigin_XY = get_el_transformOrigin(sticky);
/*{{{
if( log_this) log("%c sticky_transformOrigin_XY=["+sticky_transformOrigin_XY.x+" "+sticky_transformOrigin_XY.y+"]", lbH+lf1);
}}}*/
    }

    x += sticky_transformOrigin_XY.x;
    y += sticky_transformOrigin_XY.y;
    /*}}}*/
    /* [XY] ➔ [el_at_XY] {{{*/
    delete sticky.skipped_csv;
    delete sticky.search_ms;
    let el_at_XY
        = (sticky.style.position == "fixed")
        ?  get_document_el_at_XY(x               , y               )
        :  get_document_el_at_XY(x-window.scrollX, y-window.scrollY)
    ;

    let anchor_next = el_at_XY;
    let anchor_node = el_at_XY;
    /*}}}*/
    /* [el_at_XY] ➔ DOCUMENT NODE .. UP TO BODY {{{*/
    let why_not  = "";
    if( anchor_node.nodeType   != Node.ELEMENT_NODE) { why_not += ""    +anchor_node.tagName+" NOT AN ELEMENT_NODE "; anchor_node = anchor_node.parentElement; }
    if( anchor_node.tagName    == "STYLE"          ) { why_not += ""    +anchor_node.tagName+" HAS A STYLE TAG"     ; anchor_node = anchor_node.parentElement; }
    if( anchor_node.tagName    == "SCRIPT"         ) { why_not += ""    +anchor_node.tagName+" HAS A SCRIPT TAG"    ; anchor_node = anchor_node.parentElement; }
    if( anchor_node.shadowRoot                     ) { why_not += " .. "+anchor_node.tagName+" HAS A SHADOWROOT "   ; anchor_node = anchor_node.parentElement; }
    if(!anchor_node.parentElement                  ) { why_not += " .. "+anchor_node.tagName+" HAS NO PARENT "      ; anchor_node = document.body;             }

if( log_this) log_anchor_step(sticky, 0, "XY["+x+" "+y+"]"+why_not, el_at_XY, anchor_node);
/*{{{
log_key_val_group(      caller
                  , {   el_at_XY
                      , tagName       : el_at_XY.tagName
                      , nodeType      : el_at_XY.nodeType
                      , parentElement : get_n_lbl(el_at_XY.parentElement)
                      , shadowRoot    : get_n_lbl(el_at_XY.shadowRoot)
                      , why_not
                      , anchor_node   : get_node_path(anchor_node)
                  }, lbH+lf8, false
                 );
}}}*/
    /*}}}*/
    /* CLOSEST CHILD {{{*/
    anchor_next = anchor_node;
    let { closestnode , anchor_nodes_in_viewport , z_min }
        = sticky_MAGNET1_XY_sticky_CLOSEST_CHILD(sticky,x,y, anchor_node, log_this);
    if(   closestnode ) anchor_node = closestnode;

if( log_this) {
    if( closestnode ) log_anchor_step(sticky, 3,    "CLOSEST NODE", anchor_next, anchor_node);
/*{{{
    else              log_anchor_step(sticky, 3, "NO CLOSEST NODE");
}}}*/
}
    /*}}}*/
    /* ATTACH SELECTED ANCHOR {{{*/
    if( anchor_node )
    {
        x -= window.scrollX;
        y -= window.scrollY;

        sticky_MAGNET4_XY_anchor_offset_XY(sticky, x, y, anchor_node, z_min);
    }
    /*}}}*/
    /* SHOW  ATTACHED ANCHOR .. (children .. closest .. while mouse pressed) {{{*/
    if( show_anchors )
        sticky_SHOW_ANCHOR(anchor_node, closestnode, anchor_nodes_in_viewport);

    /*}}}*/
if( log_this) csv_log(sticky.skipped_csv, sticky.id+".skipped_csv");
};
/*}}}*/
/*_ sticky_MAGNET1_XY_sticky_CLOSEST_CHILD {{{*/
let sticky_MAGNET1_XY_sticky_CLOSEST_CHILD = function(sticky,x,y, anchor_node, log_this)
{

    let { closestnode , anchor_nodes_in_viewport , z_min }
        = sticky_MAGNET3_closest_in_viewport(sticky,x,y, anchor_node, sticky.style.position);

    if(   closestnode )
    {
        /* FILTER [not_an_anchor_target] */
        while((closestnode != document.body) && not_an_anchor_target( closestnode ))
            closestnode     = closestnode.parentElement;

        if( closestnode    != anchor_node)
        {
            if( highlighted_anchor_node ) del_el_class( highlighted_anchor_node , CSS_ANCHOR_NODE);
            if( highlighted_anchor_node ) del_el_class( highlighted_anchor_node , CSS_ANCHOR_BACK);
            if(             anchor_node ) del_el_class(             anchor_node , CSS_ANCHOR_NODE);
            if(             anchor_node ) del_el_class(             anchor_node , CSS_ANCHOR_BACK);

            /*.........................*/ add_el_class(             closestnode , CSS_ANCHOR_NODE);
            /*.........................*/ highlighted_anchor_node        = closestnode;
        }

    }
    return { closestnode , anchor_nodes_in_viewport , z_min };
};
/*}}}*/
/*… sticky_MAGNET3_closest_in_viewport ....... return { closestnode , anchor_nodes_in_viewport} {{{*/
let sticky_MAGNET3_closest_in_viewport = function(sticky,x,y,anchor_node, position)
{
/*{{{*/
let   caller = "sticky_MAGNET3_closest_in_viewport";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) t_log.console_clear(caller);
if( log_this) log("%c"+t_data.SD3+"%c "+caller+"%c "+x+" "+y+" %c"+ get_id_or_node_path_tail(anchor_node)
                  ,lbS+lf3 ,lbH+lf3     ,lbH+lf3       ,lbH+lf3);
/*}}}*/
    /* NO OR TOO MANY CHILDREN {{{*/
    if(!anchor_node || !anchor_node.children.length || (anchor_node.children.length >= ANCHOR_CHILDREN_MAX))
    {
if( log_this) {
    let result
        = !anchor_node                 ? "!anchor_node"
        : !anchor_node.children.length ? "!anchor_node.children.length"
        : (anchor_node.children.length+" > ANCHOR_CHILDREN_MAX=["+ANCHOR_CHILDREN_MAX+"]")
    ;

    log("%c"+result+" %c"+get_id_or_node_path_tail(anchor_node)
        ,lbL+lf3     ,lbR+lf3);
}

        return { closestnode:null , anchor_nodes_in_viewport:[] };
    }
    /*}}}*/
    /* TRACK [z_min   .. z_container] {{{*/
    let z_min;
    let z_container;
    if( check_xy_in_node_rect(x, y, anchor_node) )
    {
        let      cs = window.getComputedStyle(anchor_node);
        z_min       = parseInt(cs.zIndex) || 0;

        z_container = anchor_node;
    }
    /*}}}*/
    /* DXY TO WINDOW CENTER {{{*/
    let o = {};
    o.t   =       window.scrollY;
    o.l   =       window.scrollX;
    o.b   = o.t + window.innerHeight;
    o.r   = o.l + window.innerWidth;

    if(position == "fixed")
{
        x += window.scrollX;
        y += window.scrollY;
    }
    /*}}}*/
    /* [anchor_in_view_array] {{{*/
    let { anchor_in_view_array , search_ms } = get_el_anchor_in_view_array(document.body);
    sticky.search_ms = search_ms;

    let dxy_min;
    let closestnode;
    let p = {};
    /*}}}*/
    let anchor_nodes_in_viewport = [];
    let anchor_num_last = (anchor_in_view_array.length+1);
    for(let anchor_num = 1; anchor_num < anchor_num_last; ++anchor_num)
    {
        /* SKIP: [invisible and tool] {{{*/
        let node  = anchor_in_view_array[anchor_num-1];
        let why_not = not_an_anchor_target(node);
        if( why_not ) {
if( log_this) log("%c "+anchor_num+" .. "+get_id_or_tag(node)+" .. "+why_not, lbH+lf0);

            continue;
        }
        /*}}}*/
        anchor_nodes_in_viewport.push(node);
        /* ANCHOR [tlbr] {{{*/
        let bcr = node.getBoundingClientRect();
        p.t     =       bcr.top   + window.scrollY;
        p.l     =       bcr.left  + window.scrollX;
        p.b     = p.t + bcr.height;
        p.r     = p.l + bcr.width ;

        /*}}}*/
        /* TRACK [z_min   .. z_container] {{{*/
        let cs = window.getComputedStyle(node);
        if(        check_xy_in_node_rect(x, y, node) /* x y container   */
           && (   (z_min == undefined                     ) /* undefined layer */
               || (z_min  <          cs.zIndex            ) /* higher layer    */
              )
          ) {
            z_min         = parseInt(cs.zIndex) || 0;

            z_container   = node;
        }
        /*}}}*/
        /* TRACK [dxy_min .. closestnode] {{{*/
        let      dxy = get_xy_tlbr_dist(x,y,p);
        if(     (z_container == node     ) /* higher container */
             || (dxy_min     == undefined) /* first  anchor    */
             || (dxy          < dxy_min  ) /* closer anchor    */
          ) {

            if(!z_container || is_el_or_child_of_parent_el(node, z_container))
            {
                dxy_min     = dxy;
                closestnode = node;
            }
            else {
if( log_this) log("%c "+anchor_num+" .. "+get_id_or_tag(node)+" .. [dxy "+dxy+"] < [dxy_min "+dxy_min+"] .. but not a child of z_container", lbH+lf9);
            }

        }
        /*}}}*/
/*{{{*/
if( log_this) {

let new_z_container = (z_container == node);
let new_closestnode = (closestnode == node);
let worth_logging
    =  (anchor_num == anchor_num_last-1)
    || (new_z_container                )
    || (new_closestnode                )
;

if(worth_logging) {
    let l_x
        = ((anchor_num == anchor_num_last-1) ? lbb    : "")
        + (   (new_z_container             ) ?     lbH+lf7
           :  (new_closestnode             ) ?     lbH+lf5
           :                                           lf8);

    let z_container_label = get_id_or_node_path_tail( z_container );
    let closestnode_label = get_id_or_node_path_tail( closestnode );
    let node_label        = get_id_or_node_path_tail( node        );

    log_key_val_group( anchor_num+"/"+anchor_in_view_array.length+t_data.TAB+"[Z "+z_min+"] [DXY "+dxy_min+"] .. "+closestnode_label
                       , {    new_z_container : new_z_container+" .. z_min=["+z_min+"] "+z_container_label
                           ,  new_closestnode : new_closestnode+" .. "+                  closestnode_label
                           ,             node :                                          node_label
                           ,              DXY : "[dxy_min "+dxy_min+"] .. [dxy "+dxy+"]"
                           ,     viewport_dxy : get_xy_tlbr_dist(x,y,o)
                           ,                o :   log_json_one_liner(o)
                           ,                p :   log_json_one_liner(p)
                       }
                       , l_x, true);

}
}
/*}}}*/
    }

/*{{{
for(let i=0; i < anchor_nodes_in_viewport.length; ++i) {
    let anchor = anchor_nodes_in_viewport[i];
    let   l_x = lfX[(i+1) % 10];
    log("%c "+t_data.SDX[(i+1) % t_data.SDX.length]+" %c"+(anchor.id || anchor.tagName), lbB+lfx, lbH+lfx);
}
}}}*/

return { closestnode , anchor_nodes_in_viewport , z_min };
};
/*}}}*/
/*… sticky_MAGNET4_XY_anchor_offset_XY ....... attach .. highlight {{{*/
let sticky_MAGNET4_XY_anchor_offset_XY = function(sticky,x,y,anchor_node,z_min)
{
/*{{{*/
let   caller = "sticky_MAGNET4_XY_anchor_offset_XY";
let log_this = LOG_MAP.T3_LAYOUT;
    log_this = log_this || t_prop.get(t_data.SHOW_SEEKZONE);

if( log_this) log("%c"+t_data.SD4+"%c "+caller+"%c"+get_n_lbl(sticky)+"%c XY "+x+" "+y
                  ,lbS+lf4        ,lbL+lf4    ,lbC+lf4                       ,lbR+lf4        );

if( log_this) log("...anchor_node: %c"+get_id_or_tag(anchor_node), lb8);
if( log_this) log(".....node_path: %c"+get_node_path(anchor_node), lb8);

/*}}}*/
    /* ANCHOR CENTER .. {offset_x , offset_y} {{{*/
    let      a_r = anchor_node.getBoundingClientRect(); /* viewport rectangle */
    let      a_x = Math.round(a_r.left + a_r.width  / 2);
    let      a_y = Math.round(a_r.top  + a_r.height / 2);
/*{{{
    let      a_x = Math.round(a_r.left                 );
    let      a_y = Math.round(a_r.top                  );
}}}*/
    let       dx = x - a_x;
    let       dy = y - a_y;

    let offset_x = (dx / a_r.width ).toFixed(3);
    let offset_y = (dy / a_r.height).toFixed(3);
    /*{{{
log("offset_x=["+offset_x+"] .. offset_y=["+offset_y+"] .. "+caller)
}}}*/
    /*}}}*/
    /* ATTACH ANCHOR .. [offset_x..offset_y] {{{*/
    let anchor_changed
        =  (anchor_node != sticky.anchor_node)
    ;

    sticky_ATTACH5_ANCHOR(sticky, anchor_node, offset_x, offset_y, z_min);
    /*}}}*/
    /* HIGHLIGHT ANCHOR {{{*/
    t_seek.t_seekzone6_show_anchor_node( anchor_changed );

    if(t_prop.get(t_data.SHOW_SEEKZONE) && t_prop.get(t_data.FLOATLOG)) t_sticky_LOG_TOOLTIP(sticky, "MOVE");
    /*}}}*/
    /*{{{
log("%c MOVE "+sticky.id+" AXY=["+sticky.offset_x+" .. "+sticky.offset_y+"] .. anchor_node=["+ get_n_lbl(  anchor_node   ) +"]", lf4)
}}}*/
};
/*}}}*/
/*}}}*/
/* ANCHOR */
/*{{{*/
/*{{{*/
let highlighted_anchor_node;
let highlighted_closestnode;
let highlighted_anchor_children = [];

/*}}}*/
/*… sticky_ATTACH5_ANCHOR .................... attach {{{*/
let sticky_ATTACH5_ANCHOR = function(sticky, anchor_node, offset_x, offset_y, z_min)
{
    /*{{{*/
    let   caller = "sticky_ATTACH5_ANCHOR";
    let log_this = DOM_STICKY_LOG || LOG_MAP.T3_LAYOUT;
    log_this = log_this || t_prop.get(t_data.SHOW_SEEKZONE);

    if( log_this) log("%c"+t_data.SD5+"%c "+caller+"("+sticky.id+", "+get_n_lbl(anchor_node)+", offset_x "+offset_x+" , offset_y "+offset_y+" , z_min "+z_min+")", lbB+lf5, lbH+lf5);
    /*}}}*/

    if(anchor_node)
    {
if( log_this) t_log.log_not_an_anchor_target(anchor_node);

        sticky.anchor_node = anchor_node; /* SINGLE POINT INIT */
        sticky.offset_x    = offset_x;
        sticky.offset_y    = offset_y;

/*{{{
        if(z_min) {
            sticky.style.zIndex = z_min;
log_caller();
log("sticky.style.zIndex=["+sticky.style.zIndex+"]");
        }
}}}*/

        sticky_DETACHED_STOP(sticky);

if( log_this) log(caller+"%c sticky.className=["+sticky.className+"]", lbH+lf8);

t_log.log_not_an_anchor_target(anchor_node);
    }
    del_el_class(    sticky, CSS_ANCHOR_NOT_FOUND);
    del_el_class(    sticky, CSS_ANCHOR_UNSET);
};
/*}}}*/
/*_ sticky_CLEAR_HIGHLIGHT {{{*/
let sticky_CLEAR_HIGHLIGHT = function()
{
    if( highlighted_anchor_node ) {
        del_el_class(highlighted_anchor_node, CSS_ANCHOR_NODE);
        del_el_class(highlighted_anchor_node, CSS_ANCHOR_BACK);

        highlighted_anchor_node = null;
    }
    if( highlighted_closestnode ) {
        del_el_class(highlighted_closestnode, CSS_ANCHOR_CLOSEST);

        highlighted_closestnode = null;
    }

    for(let i=0; i < highlighted_anchor_children.length; ++i)
    {
        let                 child = highlighted_anchor_children[i];
        del_el_class(child, CSS_ANCHOR_CHILD+(i+1) % 10);
    }
    highlighted_anchor_children = [];
};
/*}}}*/
/*_ sticky_SHOW_ANCHOR {{{*/
let sticky_SHOW_ANCHOR = function(anchor_node, closestnode, anchor_nodes_in_viewport)
{
/*{{{*/
let log_this = LOG_MAP.T3_LAYOUT;
    log_this = log_this || t_prop.get(t_data.SHOW_SEEKZONE);

let tag_this = DOM_STICKY_TAG || log_this;
/*}}}*/
    /* HIGHLIGHT STICKY ANCHOR {{{*/
    sticky_CLEAR_HIGHLIGHT();
    if( anchor_node ) {
        add_el_class(anchor_node, CSS_ANCHOR_NODE);

        highlighted_anchor_node = anchor_node;
    }
    /*}}}*/
    /* HIGHLIGHT CLOSEST NODE {{{*/
    if( closestnode ) {
        add_el_class(closestnode, CSS_ANCHOR_CLOSEST);

        highlighted_closestnode = closestnode;
    }
    /*}}}*/
    /* HIGHLIGHT ANCHOR CHILDREN {{{*/
    if(anchor_nodes_in_viewport && anchor_nodes_in_viewport.length)
    {
        for(let i=0; i < anchor_nodes_in_viewport.length; ++i)
        {
            let child  = anchor_nodes_in_viewport[i];
            add_el_class(child, CSS_ANCHOR_CHILD+(i+1) % 10);
            highlighted_anchor_children.push( child );
        }
    }
    /*}}}*/
/*{{{*/
if( tag_this)
    log_key_val("SHOW_ANCHOR .. "+get_node_path_tail(anchor_node)
                , { anchor_node                 : get_node_path(anchor_node)
                  , closestnode                 : get_node_path(closestnode)
                  , anchor_nodes_in_viewport : "#"+anchor_nodes_in_viewport.length
                  , highlighted_anchor_children : "#"+highlighted_anchor_children.length
                }
                , lb7);
/*}}}*/
};
/*}}}*/
/*}}}*/
/* EDIT */
/*{{{*/
/*➔ t_sticky_EDIT {{{*/
let t_sticky_EDIT = function(sticky_target)
{
/*{{{*/
let   caller = "t_sticky_EDIT("+get_n_lbl(sticky_target)+")";
let log_this = DOM_STICKY_LOG;

if( log_this) t_fly.t_log_event_status(caller, lf7);
/*
t_log.console_dir("sticky_target",sticky_target);
let onDown_SELECTION = t_tools.get_onDown_SELECTION(); if(onDown_SELECTION) log("onDown_SELECTION=["+onDown_SELECTION+"]");
let current_sel_text = t_tools.t_get_current_sel_text    (); if(current_sel_text) log("current_sel_text=["+current_sel_text+"]");
*/
/*}}}*/
    /* SELECT STICKY ON RING {{{*/
    sticky_RING_select( sticky_target );

    /*}}}*/
    /* SELECTION .. INVALIDATE CONTENT FORMAT {{{*/
    let sticky_pad_msg = get_sticky_pad_msg( sticky_target );
if( log_this) log("MAKE CURRENT WINDOW SELECTION OUT OF sticky_pad_msg %c"+ellipsis_short(strip_CR_LF( sticky_pad_msg.innerHTML )), lb7);

/*{{{
    sticky_set_last_edited( sticky_target );
}}}*/
    /*}}}*/
    /* FOCUS .. take {{{*/
    add_el_class(sticky_target, CSS_HAS_FOCUS);
/*{{{
logBIG(caller+": add_el_class("+sticky_target.id+", CSS_HAS_FOCUS)", lf4)
}}}*/

    add_el_class   (sticky_target, CSS_FIXED );

    /*}}}*/
    /* SET MSG EDITABLE {{{*/
    sticky_pad_msg.contentEditable = true;

    set_el_class(sticky_pad_msg, STICKY_PAD_MSG);

    selectNodeContents( sticky_pad_msg );
    /*}}}*/
    /* ADD INPUT LISTENER {{{*/
/*{{{
    let sticky_pad     = get_sticky_pad( sticky_target );
    let sticky_pre     = get_el_child_with_tag(sticky_pad, "PRE");
    t_tools.t_add_input_listener( sticky_pre );
}}}*/
    t_tools.t_add_input_listener( sticky_pad_msg );

    /* EDIT FLOATING [sticky_pad_msg] */
/*{{{
    document.execCommand("defaultParagraphSeparator", false, "br");
}}}*/
    add_el_class(sticky_pad_msg, CSS_STICKY_MSG_EDIT);

    /*}}}*/
};
/*}}}*/

/*_ t_sticky_EDITING {{{*/
let t_sticky_EDITING = function()
{
    return onWork_STICKY && has_el_class(onWork_STICKY, CSS_HAS_FOCUS);
};
/*}}}*/
/*➔ t_sticky_EDIT_DONE {{{*/
let t_sticky_EDIT_DONE = function()
{
/*{{{*/
let   caller = "t_sticky_EDIT_DONE";
let log_this = DOM_STICKY_LOG;

let tag_this = DOM_STICKY_TAG || log_this;
if( log_this) log(caller+": onWork_STICKY=["+get_n_lbl(onWork_STICKY)+"] .. HAS FOCUS: "+has_el_class(onWork_STICKY, CSS_HAS_FOCUS));

    if(!onWork_STICKY) return false;
/*}}}*/
    /* NOT DONE IF EMPTY {{{*/
    let sticky_pad_msg = get_sticky_pad_msg( onWork_STICKY );
    if(!sticky_pad_msg || !sticky_pad_msg.textContent.trim())
    {
logBIG(caller+": onWork_STICKY has no msg");

        return false;
    }
    /*}}}*/
    /* DONE BY TOUCHING PEN OR FIX {{{*/
logBIG(caller+": sticky.touched=["+onWork_STICKY.touched+"]");
    let touched_DONE
        =  (onWork_STICKY.touched == STICKY_PEN)
        || (onWork_STICKY.touched == STICKY_FIX); /* i.e. delete sticky */

    if(!touched_DONE) {
/*{{{
clearSelection();
let sticky_pad_msg = get_sticky_pad_msg( onWork_STICKY );
selectNodeContents( sticky_pad_msg );
window.getSelection().collapse(onWork_STICKY,0);
window.getSelection().collapseToStart();
window.getSelection().empty();
          //sticky_pad_msg.focus();
}}}*/

        let selection            = window.getSelection();
        if( selection.anchorNode ) selection.collapseToEnd();
        else                       selectNodeContents(sticky_pad_msg);

        return false;
    }
    dom_tools.t_is_bouncing_e_type("STICKY_DONE", caller); /* STICKY EDIT COOLODOWN START */

    /*}}}*/
    /* INPUT FOCUS RELEASE {{{*/
    if( has_el_class(onWork_STICKY, CSS_HAS_FOCUS))
        del_el_class(onWork_STICKY, CSS_HAS_FOCUS);

    t_tools.t_blur( sticky_pad_msg );
    /*}}}*/
    /* UPDATE CONTENT {{{*/
    if( has_el_class(sticky_pad_msg, CSS_STICKY_MSG_EDIT) )
    {
        del_el_class(sticky_pad_msg, CSS_STICKY_MSG_EDIT);

        let msg = strip_contentEditable( sticky_pad_msg.innerHTML );
        sticky_change_msg(onWork_STICKY, msg);

if( tag_this) log("%c MSG SET TO: %c"+t_data.LF+onWork_STICKY.msg, lbH+lf7,lb9);
    }
    /*}}}*/
    /* STORE POST {{{*/
    t_tools.t_save_update_post("STICKY UPDATED");

    /*}}}*/
    return true;
};
/*}}}*/
/*… sticky_update_dat .. [sticky_pad_dat .. HTML] {{{*/
let sticky_update_dat = function(sticky)
{
/*{{{*/
let   caller = "sticky_update_dat";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this)
    log(caller+"%c"+sticky.id+"%c num=["+sticky.num+"] %c date_MS=["+sticky.date_MS+"] %c msg=["+ellipsis(strip_HTML(sticky.msg), 16)+"]"
        ,       lbL+lf8       ,lbC+lf3                ,lbR+lf3                        ,lbH+lf9                                           );
/*}}}*/
    /* DATE .. AS TIME ELAPSED {{{*/
    let delay = "";
    if( sticky.date_MS )
    {
        let date   = new Date(sticky.date_MS);
        let now    = new Date();

        let diff   = now - date;

        let span = {};
        span.years   =  Math.floor(diff /   YEARS_MS); diff -=   YEARS_MS * span.years;
        span.months  =  Math.floor(diff /  MONTHS_MS); diff -=  MONTHS_MS * span.months;
        span.days    =  Math.floor(diff /    DAYS_MS); diff -=    DAYS_MS * span.days;
        span.hours   =  Math.floor(diff /   HOURS_MS); diff -=   HOURS_MS * span.hours;
        span.minutes =  Math.floor(diff / MINUTES_MS); diff -= MINUTES_MS * span.minutes;
        span.seconds =  Math.floor(diff / SECONDS_MS);

        let dy = span.years;
        let dm = span.months;
        let dd = span.days;
        let dh = span.hours;
        let dn = span.minutes;
        let ds = span.seconds;
        delay = ""
            + " <span>"
            + (dy ? ("<span class='weight1 size1'>"+ dy +"y </span>") : "")
            + (dm ? ("<span class='weight3 size1'>"+ dm +"m </span>") : "")
            + (dd ? ("<span class='weight2 size1'>"+ dd +"d </span>") : "")
            + (dh ? ("<span class='weight3 size3'>"+ dh +"h </span>") : "")
            + (dn ? ("<span class='weight2 size2'>"+ dn +"m </span>") : "")
            + (ds ? ("<span class='weight3 size1'>"+ ds +"s </span>") : "")
            + "</span>"
        ;
    }
    /*}}}*/
    /* [sticky_pad_dat] innerHTML {{{*/
    if(delay)
    {
        let sticky_pad = get_sticky_pad( sticky );
        let sticky_pad_dat = sticky_pad ? get_el_child_with_class(sticky_pad, STICKY_PAD_DAT) : undefined;
        if( sticky_pad_dat )
            sticky_pad_dat.innerHTML = delay;
/*{{{*/
if( log_this)
    log_key_val_group("delay .. "+ellipsis(strip_HTML(delay),16)
                      , {   sticky_pad
                          , sticky_pad_dat
                      }
                      , lf8
                      , false);
/*}}}*/
    }
    /*}}}*/
};
/*}}}*/
/*}}}*/
/* TEXT */
/*{{{*/
/*➔ t_sticky_e_target_STICKY {{{*/
let t_sticky_e_target_STICKY = function(el)
{
    return get_el_parent_with_class(el, CSS_STICKY_TOOL);
};
/*}}}*/
/*➔ t_sticky_onDown_a_scrollable_STICKY {{{*/
let t_sticky_onDown_a_scrollable_STICKY = function(sticky,e_target)
{
    let sticky_pad_msg = sticky          ? get_sticky_pad_msg(sticky) : null;
    let onDown_pad_msg = sticky_pad_msg && (             e_target == sticky_pad_msg );
    let        visible = onDown_pad_msg && (window.getComputedStyle( sticky_pad_msg ).visibility == "visible");
    let     scrollable = visible        && (has_scrollbar(    sticky_pad_msg ));
    let         result = scrollable;

/*{{{
log_key_val_group( "t_sticky_onDown_a_scrollable_STICKY .. "+result
                   , {   sticky         : get_node_path( sticky         )
                       , e_target       : get_node_path( e_target       )
                       , sticky_pad_msg : get_node_path( sticky_pad_msg )
                       , visible
                       , scrollable
                       , result
                   }
                   , lbH+lfX[result ? 4:6]
                   , false
                 );
}}}*/
    return result;
};
/*}}}*/
/*➔ t_sticky_onDown_a_STICKY_PAD {{{*/
let t_sticky_onDown_a_STICKY_PAD = function(sticky)
{
    return sticky && (sticky.touched == STICKY_PAD);
};
/*}}}*/
/*➔ t_sticky_scroll_STICKY_PAD_MSG {{{*/
/*{{{*/
let scrolling_sticky;

/*}}}*/
let t_sticky_scroll_STICKY_PAD_MSG = function(e_target)
{
    t_sticky_SET_DIMMED(false, "SCROLLING STICKY");

    scrolling_sticky      = get_el_parent_with_class(e_target        , t_data.CSS_STICKY_TOOL);
    if( scrolling_sticky  ) add_el_class            (scrolling_sticky, t_data.CSS_SCROLLING  );
};
/*}}}*/
/*_ t_sticky_get_SCROLLING_STICKY {{{*/
let t_sticky_get_SCROLLING_STICKY = function()
{
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let sticky = sticky_array[ sticky_num ];
        if( has_el_class( sticky, t_data.CSS_SCROLLING) ) return sticky;
    }
    return null;
};
/*}}}*/
/*➔ t_sticky_set_SEL_PASTE_TARGET_STATE {{{*/
let t_sticky_set_SEL_PASTE_TARGET_STATE = function(state)
{
/*{{{*/
let   caller = "t_sticky_set_SEL_PASTE_TARGET_STATE";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"("+state+")");
/*}}}*/
    let sticky_title
        = state
        ?  i18n_get( t_i18n.STICKY_PASTE_TOOLTIP )
        :  "";

    let some_paste_indicator_changed;
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        /* PASTE TARGETS .. SELECT PINNED .. f(state) {{{*/
        let sticky = sticky_array[ sticky_num ];
        if(!sticky ) continue;
        if( state ) {
            some_paste_indicator_changed
                =   some_paste_indicator_changed
                || !has_el_class(sticky, CSS_PASTE_TARGET);

            /* show  paste indicator */
            add_el_class(sticky, CSS_PASTE_TARGET);

            /* make paste target visible */
            sticky_set_dimmed_state(sticky, false);

            sticky.title = sticky_title ? sticky_title : sticky.id;
        }
        /*}}}*/
        /* PASTE TARGETS .. RELEASE .. f(state) {{{*/
        else {
/*{{{
if(has_el_class(sticky, CSS_HAS_FOCUS)) {
logBIG(caller+": del_el_class("+sticky.id+", CSS_HAS_FOCUS)", lf2)
}
}}}*/
            some_paste_indicator_changed
                =   some_paste_indicator_changed
                ||  has_el_class(sticky, CSS_PASTE_TARGET);

            del_el_class(sticky, CSS_PASTE_TARGET, CSS_PASTE_TARGET); /* hide  paste indicator */
            del_el_class(sticky, CSS_HAS_FOCUS   , CSS_HAS_FOCUS); /* clear focus indicator */

            sticky.title = sticky.id;
        }
        /*}}}*/
    }
if( log_this) log(".. return some_paste_indicator_changed=["+some_paste_indicator_changed+"]");
    return some_paste_indicator_changed;
};
/*}}}*/
/*… sticky_set_last_edited {{{*/
/*{{{*/
let last_edited_sticky;

/*}}}*/
let sticky_set_last_edited = function(sticky)
{
    if(sticky == last_edited_sticky) return;

    if( last_edited_sticky )
        sticky_RESIZE_last_edited();

    last_edited_sticky = sticky;
};
/*}}}*/
/*… sticky_RESIZE_last_edited {{{*/
let sticky_RESIZE_last_edited = function()
{
    if(!last_edited_sticky) return;

    sticky_RESIZE7_STICKY_LAYOUT(last_edited_sticky);

    last_edited_sticky = null;
};
/*}}}*/
/*➔ t_sticky_get_tooltip {{{*/
let t_sticky_get_tooltip = function(sticky)
{
    return has_el_class(sticky,              CSS_PASTE_TARGET ) ? i18n_get( t_i18n.STICKY_PASTE_TOOLTIP    )
        :                     (sticky.touched == STICKY_FIX   ) ? i18n_get( t_i18n.STICKY_FIX_TOOLTIP      )
        :                     (sticky.touched == STICKY_HAND  ) ? i18n_get( t_i18n.STICKY_HAND_MOV_TOOLTIP )
        :                     (sticky.touched == STICKY_PAD   ) ? i18n_get( t_i18n.STICKY_PAD_TOOLTIP      )
        :                     (sticky.touched == STICKY_PEN   ) ? i18n_get( t_i18n.STICKY_PEN_TOOLTIP      )
        :                     (sticky.touched == STICKY_REFLOW) ? i18n_get( t_i18n.STICKY_REFLOW_TOOLTIP   )
        :                     (sticky.touched == STICKY_REFONT) ? i18n_get( t_i18n.STICKY_REFONT_TOOLTIP   )
        :                     (sticky.touched == STICKY_RESIZE) ? i18n_get( t_i18n.STICKY_RESIZE           )
        :                     (sticky.touched == STICKY_ROTATE) ? i18n_get( t_i18n.STICKY_ROTATE           )
        :                                                         sticky.title
    ;
};
/*}}}*/
/*…   sticky_set_sel_text {{{*/
let   sticky_set_sel_text = function(sticky, sel_text)
{
/*{{{*/
let   caller = "sticky_set_sel_text";
let log_this = DOM_STICKY_LOG;

if( log_this) log("%c"+caller+"("+get_n_lbl(sticky)+","+ellipsis_short(sel_text)+")", lbH+lf4);
/*}}}*/

    /* sel_text length cap */
    sel_text = ellipsis(sel_text, STICKY_SEL_TEXT_LEN_MAX);

    /* set sel_text */
    let msg = escapeHTML( sel_text );
    sticky_change_msg(sticky, msg);

    /* consume page selection */
    t_tools.t_window_getSelection_removeAllRanges();
};
/*}}}*/
/*…   sticky_change_msg .. [msg_history] {{{*/
let   sticky_change_msg = function(sticky,msg)
{
/*{{{
log("sticky_change_msg: %c msg=["+msg+"]", lbH+lf8);
}}}*/
    /* STACK CURRENT */
    if(sticky.msg) {
        if(     !sticky.msg_history                       ) sticky.msg_history   = [ sticky.msg ]; /* FIRST */
        else if(!sticky.msg_history.includes( sticky.msg )) sticky.msg_history.push( sticky.msg ); /* ..NEW */
    }

    /* SET NEW */
    sticky.msg = msg;

    /* FORMAT */
    sticky_format_pad(sticky);

};
/*}}}*/
/*_ t_sticky_format_pad_all {{{*/
let t_sticky_format_pad_all = function()
{
    t_sticky_SET_DIMMED(false,"t_sticky_format_pad_all");

    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let sticky  = sticky_array[sticky_num];
        if( sticky && has_el_class(sticky, CSS_PINNED))
            sticky_format_pad(sticky);
    }
};
/*}}}*/
/*_ t_sticky_format_pad {{{*/
let t_sticky_format_pad = function(sticky=onWork_STICKY)
{
    if( has_el_class(sticky, CSS_HAS_FOCUS)) t_sticky_EDIT_DONE();
    else                                            sticky_format_pad(sticky);

    let pad_msg = get_sticky_pad_msg( sticky );
    let     bcr = pad_msg.getBoundingClientRect();
    sticky_SETSIZE_PAD_WH(sticky,bcr.width,bcr.height);

    t_sticky_STORE();
};
/*}}}*/
/*…   sticky_format_pad .. [sticky_pad .. HTML .. COLOR] {{{*/
/*{{{*/
const SECONDS_MS =  1000;
const MINUTES_MS =  60 * SECONDS_MS;
const   HOURS_MS =  60 * MINUTES_MS;
const    DAYS_MS =  24 *   HOURS_MS;
const  MONTHS_MS =  30 *    DAYS_MS;
const   YEARS_MS = 365 *  MONTHS_MS;

/*}}}*/
let   sticky_format_pad = function(sticky)
{
/*{{{*/
let   caller = "sticky_format_pad";
let log_this = DOM_STICKY_LOG;

if( log_this)
    log("%c"+caller+"("+sticky.id+") %c num=["+sticky.num+"] %c msg=["+encode_LF(ellipsis_short(strip_HTML(sticky.msg)))+"]"
        ,lbH+lf8                    ,lbL+lf3                ,lbR+lf3                                                        );
/*}}}*/
    /* [SHOW_SEEKZONE] .. [sticky_format_pad_anchor_path] {{{*/
    let show_seekzone = t_prop.get(t_data.SHOW_SEEKZONE);
    if( show_seekzone ) {
        log("show_seekzone .. CALLING sticky_format_pad_anchor_path");
        sticky_format_pad_anchor_path( sticky );
        return;
    }
    /*}}}*/
    /*  [date] {{{*/
    sticky_update_dat( sticky );

    /*}}}*/
    /* [msg] {{{*/
    sticky_set_msg(sticky, (sticky.msg || ""));

    /*}}}*/
/*{{{
log_key_val_group(caller         +" "+ sticky.id
                   , {   sticky_num  : sticky.num
                       , pad_msg     : pad_msg
                   }, lf9, false);
}}}*/
if( log_this) t_sticky_LOG(sticky);
};
/*}}}*/
/*…   sticky_format_pad_anchor_path .. [sticky_pad .. HTML .. COLOR] {{{*/
let   sticky_format_pad_anchor_path = function(sticky)
{
/*{{{*/
let   caller = "sticky_format_pad_anchor_path";
let log_this = DOM_STICKY_LOG || LOG_MAP.T0_STORE;

/*}}}*/
    /*  [anchor_node] {{{*/
    let parent_path  = sticky.anchor_node ? get_node_path( sticky.anchor_node.parentElement ) :               "";
    let anchor_path  = sticky.anchor_node ? get_node_path( sticky.anchor_node               ) : "NO anchor_node";

    if( parent_path && anchor_path.startsWith( parent_path ))
        anchor_path  = anchor_path.substring ( parent_path.length + 1);

    parent_path      = vbar_to_LF( parent_path );
    anchor_path      = vbar_to_LF( anchor_path );

    let f_x          = (parseInt(anchor_path) % 10) || 9;

    let msg
        = ellipsis_short( sticky.msg ) +"<br><br><br>"
        +"<em  class='cc9 small'>MOVED ON ANCHOR:</em>"
        +"<pre class='show_seekzone tiny'>"

        +(sticky.skipped_csv
          ? t_data.LF
          + "<u     class='bg8'>SKIPPED:</u>"+t_data.LF
          + "<pre class='fg9 max_width_30' style='margin-left:1em;'>"+ comma_to_LF(sticky.skipped_csv) +"</pre>"
          : "")

        +(sticky.search_ms
          ?  t_data.LF
          + "<u     class='bg8'>search time:</u>"
          + " <span class='fg9'>"+ sticky.search_ms +"ms</span>"+t_data.LF
          : "")

        +(parent_path
          ?  t_data.LF
          + "<u     class='bg4'>PARENT:</u>"+t_data.LF
          + "<span class='fg9'>"+ parent_path +"</span>"+t_data.LF
          : "")

        +(anchor_path
          ? t_data.LF
          +"<u class='bg7'>ANCHOR:</u>"
          +" <span class='fg"+f_x+"'>"+ anchor_path +"</span>"
          : "")

        +"</pre>";

    /*}}}*/
    /* [msg] {{{*/
    sticky_set_msg(sticky, msg);

    /*}}}*/
/*{{{*/
if( log_this) {
    log_key_val_group(  caller+" "+ get_n_lbl( sticky.anchor_node )
                     , { sticky_anchor_node : get_node_txt_id_or_tag_path( sticky.anchor_node )
                       , STICKY_XY          : [ sticky.offsetLeft  , sticky.offsetTop   ]
                       , ANCHOR_XY          : [ sticky.offset_x    , sticky.offset_y    ]
                       , parent_path
                       , anchor_path
                       , callers            : t_log.get_callers()
                     }
                     , lbH+lf1
                     , true
                     );
}
/*}}}*/
};
/*}}}*/
/*…   sticky_set_msg {{{*/
let   sticky_set_msg = function(sticky, msg)
{
/*{{{*/
let caller = "sticky_set_msg";
let log_this = DOM_STICKY_LOG || LOG_MAP.T0_STORE;

let tag_this = DOM_STICKY_TAG || log_this;
if( log_this) caller +="("+sticky.id+")";
/*}}}*/
    /* [fontSize] apply last user selected-adjusted {{{*/
    if( last_set_fontSize )
    {
        if( tag_this) log("%c...applying last set font size: "+ last_set_fontSize +"px", lbH+lf8);

        sticky.msg_fontSize = last_set_fontSize;
    }
    /*}}}*/
    /* [sticky_pad_msg  WH] current {{{*/
    let sticky_pad_msg = get_sticky_pad_msg( sticky );

    let bcr
        = sticky_pad_msg
        ? sticky_pad_msg.getBoundingClientRect()
        : null
    ;

    /*}}}*/
    /* [sticky_pad CONTENT] {{{*/
    let       sticky_pad = get_sticky_pad( sticky );
    let               s1 =            STICKY0_HTML;
    let               s2 = s1.replace(STICKY_PLACE_HOLDER_PAD_NUM , "0123456789X"[sticky.num]);
    let               s3 = s2.replace(STICKY_PLACE_HOLDER_PAD_MSG , msg);

    sticky_pad.innerHTML = s3;
    sticky_pad.className = "sticky_pad bg"+(sticky.num % 10);
    /*}}}*/
    /* [sticky_pad_msg  WH] constraints {{{*/
    if(!bcr) {
if( tag_this) log("%c NO [WH] TO KEEP for ["+sticky.pad_flow+"] "+caller, lbH+lf8);

    }
    else {
        /* KEEPING WIDTH {{{*/
        sticky_pad_msg = get_sticky_pad_msg( sticky ); /* sticky_pad_msg from just built innerHTML */

        if(sticky.pad_flow == CSS_WS_NOWRAP)
        {
if( tag_this) log("%c KEEPING W=["+bcr.width .toFixed(0)+"] for ["+sticky.pad_flow+"] "+caller, lbH+lf5);

            sticky_pad_msg.style.maxWidth  = bcr.width  +"px";
            sticky_pad_msg.style.minWidth  = bcr.width  +"px";
            sticky_pad_msg.style.width     = bcr.width  +"px";
        }
        else {
if( tag_this) log("%c NOT KEEPING [W] for ["+sticky.pad_flow+"] "+caller, lbH+lf8);
        }
        /*}}}*/
        /* KEEPING HEIGHT {{{*/
/*{{{
        if(sticky.pad_flow != CSS_WS_NOWRAP)
        {
if( tag_this) log("%c KEEPING H=["+bcr.height.toFixed(0)+"] for ["+sticky.pad_flow+"] "+caller, lbH+lf4);

            sticky_pad_msg.style.height    = bcr.height +"px";
            sticky_pad_msg.style.minHeight = bcr.height +"px";
            sticky_pad_msg.style.maxHeight = bcr.height +"px";
        }
        else {
if( tag_this) log("%c NOT KEEPING HEIGHT for ["+sticky.pad_flow+"] "+caller, lbH+lf8);
        }
}}}*/
        /*}}}*/
        /* CONFINING PARENT {{{*/
        if(sticky.pad_flow != CSS_WS_NOWRAP)
        {
if( tag_this) log("%c CONFINING BOUNDS INTO "+WH_CONFINED_PERCENT+" OF PARENT for ["+sticky.pad_flow+"] "+caller, lbH+lf9);

            sticky_pad_msg.style.maxHeight = WH_CONFINED_PERCENT;
            sticky_pad_msg.style.maxWidth  = WH_CONFINED_PERCENT;

        }
        /*}}}*/
    }
    /*}}}*/
    sticky_RESIZE7_STICKY_LAYOUT(sticky);
};
/*}}}*/
/*}}}*/
/* RING MENU */
/*{{{*/
/*{{{*/
let sticky_ring_array = [];
let sticky_ring_selected;
/*}}}*/
/*➔ t_sticky_CHOOSE {{{*/
let t_sticky_CHOOSE = function()
{
/*{{{*/
let   caller = "t_sticky_CHOOSE";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) t_fly.t_log_event_status(caller, lf7);
/*}}}*/
    /* SELECT SPECIFIED STICKY {{{*/
    if(!sticky_ring_array.length)
        sticky_RING_init_sticky_ring_array();

    t_tools.t_dimm_start_sticky(caller);
    sticky_RING_repin();
    sticky_RING_select();
    sticky_RING_collapse();
    sticky_RING_re_point();
    t_sticky_RING_layout();
    /*}}}*/
};
/*}}}*/
/*… sticky_RING_init_sticky_ring_array {{{*/
let sticky_RING_init_sticky_ring_array = function()
{
    /* INITIALIZE [sticky_ring_array] */
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let sticky = sticky_CREATE(sticky_num, t_data.ZINDEX_ABOVE_TOOLS, "ring_");

        sticky.style.position = "fixed";

        add_el_class(sticky, CSS_STICKY_RING);

        sticky_ring_array[sticky_num] = sticky;

/*{{{
log("sticky_RING_init_sticky_ring_array"+"%c"+sticky.innerHTML, lbH+lf8);
t_log_panel_style_zIndex(sticky, "TT RING INIT: "+sticky.id);
}}}*/
    }
};
/*}}}*/
/*… sticky_RING_re_point {{{*/
let sticky_RING_re_point = function()
{
/*{{{
logBIG("sticky_RING_re_point")
}}}*/
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let ring_sticky = sticky_ring_array[sticky_num];

        if     (sticky_num < 3) sticky_set_DIR_CLASS(ring_sticky, CSS_POINT_NE);
        else if(sticky_num < 5) sticky_set_DIR_CLASS(ring_sticky, CSS_POINT_EE);
        else if(sticky_num < 6) sticky_set_DIR_CLASS(ring_sticky, CSS_POINT_SE);
        else if(sticky_num < 7) sticky_set_DIR_CLASS(ring_sticky, CSS_POINT_SW);
        else if(sticky_num < 9) sticky_set_DIR_CLASS(ring_sticky, CSS_POINT_WW);
        else                    sticky_set_DIR_CLASS(ring_sticky, CSS_POINT_NW);
    }
};
/*}}}*/
/*➔ t_sticky_RING_layout {{{*/
let t_sticky_RING_layout = function()
{
/*{{{*/
let   caller = "t_sticky_RING_layout";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
/* SHOW [CLIPBOARD] {{{
    let clipboard = document.execCommand("paste");
    let clipboard = navigator.clipboard.readText();
    let clipboard = window.getSelection();
}}}*/
    /* [center radius] {{{*/
    let { w_W,w_H } = t_tools.t_cache_wph_WH();
    let center_x  = w_W / 2;
    let center_y  = w_H / 2;
    let radius    = Math.min(w_W,w_H) / 5;
/*{{{
logXXX("center ["+center_x+" "+center_y+"] .. radius ["+radius+"]");
}}}*/

    let deg_delta = 360 / 12;
    let deg_start = -90 + deg_delta; /*..............ONE O'CLOCK */
    let rad_delta = deg_delta * Math.PI / 180;
    let rad_start = deg_start * Math.PI / 180;
/*{{{
logXXX("deg_start=["+    deg_start +"]");
logXXX("deg_delta=["+    deg_delta +"]");
logXXX("...rad_delta=["+ rad_delta +"]");
logXXX("...rad_start=["+ rad_start +"]");
}}}*/

    /*}}}*/
/*{{{
if(sticky_ring_selected) logBIG("sticky_ring_selected=["+get_n_lbl(sticky_ring_selected)+"]");
}}}*/
    let sticky_ring_deployed = 0;
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        /* CLONE ALL PINNED STICKY {{{*/
        let ring_sticky = sticky_ring_array[sticky_num];
        if(!ring_sticky ) continue;

        let sticky_ring_hand = get_sticky_hand( ring_sticky );
        let sticky_ring_pad  = get_sticky_pad ( ring_sticky );

        if(sticky_ring_selected) {
            sticky_ring_deployed += sticky_RING_provision(sticky_num, sticky_ring_hand, sticky_ring_pad);
        }
        else {
            sticky_ring_deployed += sticky_RING_clone(sticky_num, sticky_ring_hand, sticky_ring_pad);
        }

        /*}}}*/
        /* PANEL XY {{{*/
        let rad_angle = rad_start + rad_delta * (sticky_num-1);
/*{{{
        let deg_angle = Math.floor(0.5 + rad_angle / Math.PI * 180) % 360;
}}}*/
/*{{{
logXXX("...rad_angle=["+rad_angle+"]");
logXXX("...deg_angle=["+deg_angle+"]");
logXXX("... Math.sin(rad_angle)=["+ Math.sin(rad_angle)+"]");
logXXX("...["+ring_sticky.xy.x+" "+ring_sticky.xy.y+"]");
        ring_sticky.style.position = "fixed";
}}}*/

        ring_sticky.xy.x = center_x + radius * Math.cos(rad_angle);
        ring_sticky.xy.y = center_y + radius * Math.sin(rad_angle);
        t_tools.t_pin_panel_at_XY(ring_sticky, ring_sticky.xy.x,ring_sticky.xy.y);

        ring_sticky.style.zIndex = t_data.ZINDEX_ABOVE_TOOLS + sticky_num;
        /*}}}*/
    }

if( log_this) log("%c"+caller+"%c"+sticky_ring_deployed+" deployed to choose from", lbL+lf9, lbR+lfX[sticky_ring_deployed % 10]);
    return sticky_ring_deployed;
};
/*}}}*/
/*… sticky_RING_provision {{{*/
let sticky_RING_provision = function(sticky_num, sticky_ring_hand, sticky_ring_pad)
{
/*{{{*/
let   caller = "sticky_RING_provision";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"(sticky_num=["+sticky_num+"], sticky_ring_hand=["+get_n_lbl(sticky_ring_hand)+"], sticky_ring_pad=["+get_n_lbl(sticky_ring_pad)+"])");
/*}}}*/
    let sticky_ring_deployed = 0;

    /* TODO {{{*/
    let     num = (sticky_num == 10) ? "X" : sticky_num;
    let flipped = (sticky_num <  6) ?     "" : "flipped";

    sticky_ring_hand.innerHTML = "<span class='"+flipped+" fg"+sticky_num+"'>"+num+".</span>";
    sticky_ring_pad .innerHTML = "<span>TODO</span>";
    /*}}}*/

    return sticky_ring_deployed;
};
/*}}}*/
/*… sticky_RING_clone {{{*/
let sticky_RING_clone = function(sticky_num, sticky_ring_hand, sticky_ring_pad)
{
/*{{{*/
let   caller = "sticky_RING_clone";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"(sticky_num=["+sticky_num+"], sticky_ring_hand=["+get_n_lbl(sticky_ring_hand)+"], sticky_ring_pad=["+get_n_lbl(sticky_ring_pad)+"])");
/*}}}*/
    let sticky_ring_deployed = 0;

    /* sticky_ring_hand .. sticky_num {{{*/
    add_el_class(sticky_ring_hand, "size4");

    let     num = (sticky_num == 10) ?   "X" : sticky_num;
    let flipped = (sticky_num <  6) ?     "" :  "flipped";
    sticky_ring_hand.innerHTML
        = "<span class='"+flipped+" fg"+sticky_num+"'>"+num+".</span>";
/*{{{
    if(sticky_num > 6) add_el_class(sticky_ring_hand, "flipped");
    else               del_el_class(sticky_ring_hand, "flipped");
}}}*/
    /*}}}*/
    /* sticky_ring_pad .. PINNED-PAD or EMPTY {{{*/
    let sticky = sticky_array[ sticky_num ];

    if( sticky && has_el_class(sticky, CSS_PINNED)) {
        let sticky_div       = sticky.querySelectorAll("DIV")[0];
        sticky_ring_pad.innerHTML    = sticky_div.innerHTML;
        sticky_ring_deployed += 1;
/*{{{
        t_sticky_LOG(sticky, "is PINNED", lf7);
}}}*/
    }
    else {
        sticky_ring_pad.innerHTML   = "";
    }
    /*}}}*/

    return sticky_ring_deployed;
};
/*}}}*/
/*… sticky_RING_collapse {{{*/
let sticky_RING_collapse = function(sticky)
{
    /* CHECK DEPLOYED STATE {{{*/
    let state_sticky_ring_deployed = sticky_ring_array.length && t_tools.t_dimm_mask_displayed();
    if(!state_sticky_ring_deployed) return;

    /*}}}*/
    /* COLLAPSE ONTO [sticky_ring_selected] or current [onWork_STICKY] {{{*/

    let css_point_dir = CSS_POINT_00;

    /*{{{
if( !has_el_class(sticky, CSS_PINNED) ) sticky = null;
}}}*/
    if( sticky )
        css_point_dir
            = has_el_class(sticky, CSS_POINT_EE) ? CSS_POINT_EE
            : has_el_class(sticky, CSS_POINT_SE) ? CSS_POINT_SE
            : has_el_class(sticky, CSS_POINT_SW) ? CSS_POINT_SW
            : has_el_class(sticky, CSS_POINT_WW) ? CSS_POINT_WW
            : has_el_class(sticky, CSS_POINT_NW) ? CSS_POINT_NW
            : has_el_class(sticky, CSS_POINT_NE) ? CSS_POINT_NE
            : ""
    ;
    /*}}}*/
    /* DEFAULT TO WINDOW CENTER {{{*/
    let { w_W,w_H } = t_tools.t_cache_wph_WH();
    let x = sticky ? (sticky.offsetLeft - window.scrollX) : w_W / 2;
    let y = sticky ? (sticky.offsetTop  - window.scrollY) : w_H / 2;

    /*}}}*/
    /* SET POSITION AND DIRECTION {{{*/
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let ring_sticky             = sticky_ring_array[sticky_num];

        ring_sticky.style.left      = x+"px"  ;
        ring_sticky.style.top       = y+"px"  ;
        ring_sticky.style.zIndex    = t_data.ZINDEX_STICKY_TOOL_ZERO;

        sticky_set_DIR_CLASS(    ring_sticky, css_point_dir);
        t_tools.t_set_CSS_PINNED(ring_sticky, false);
    }
    /*}}}*/
};
/*}}}*/
/*… sticky_RING_select {{{*/
/*{{{*/
const STICKY_RING_SELECTED  = "sticky_ring_selected";

/*}}}*/
let sticky_RING_select = function(sticky_target)
{
/*{{{*/
let   caller = "sticky_RING_select";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"("+get_n_lbl(sticky_target)+")");
/*}}}*/
    /* START .. STICKY-SELECT {{{*/
    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let sticky  = sticky_ring_array[sticky_num];

        if( sticky == sticky_target) add_el_class(sticky, STICKY_RING_SELECTED);
        else                         del_el_class(sticky, STICKY_RING_SELECTED);
    }
    /*}}}*/
    /* STOP .. RING-MENU-HIDE {{{*/
    if( sticky_target )
    {
        t_sticky_RING_stop(caller);

        t_tools.t_dimm_stop(caller);
    }
    /*}}}*/
    sticky_ring_selected
        = (sticky_target && !has_el_class(sticky_target, CSS_STICKY_RING))
        ?  sticky_target
        :  null;

};
/*}}}*/
/*➔ t_sticky_RING_stop {{{*/
let t_sticky_RING_stop = function(_caller)
{
/*{{{*/
let   caller = "t_sticky_RING_stop";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+": ...sticky_ring_selected=["+get_n_lbl(sticky_ring_selected)+"]");
if( log_this) log_caller();
/*}}}*/
    /* RING [sticky_ring_selected] from [selected ring_sticky] */
    let sticky_seeked_to;
    /* COLLAPSE RING ON STICKY_RING_SELECTED {{{*/
    if(sticky_ring_array.length)
    {
        for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
        {
            let ring_sticky = sticky_ring_array[sticky_num];
            add_el_class(ring_sticky, CSS_COLLAPSING);

            if(has_el_class(ring_sticky, STICKY_RING_SELECTED))
            {
                /* SEEK USER-SELECTED */
                sticky_seeked_to = sticky_GET( sticky_num );
                if( has_el_class(sticky_seeked_to, CSS_PINNED) )
                {
                    let onDown_SCROLL_XY = t_tools.t_get_onDown_SCROLL_XY();
                    t_sticky_set_SEEK_NEXT(sticky_seeked_to, onDown_SCROLL_XY, 0);
                }
            }
        }
    }
    /*}}}*/
    /* COLLAPSE RING */
    sticky_RING_collapse( sticky_seeked_to );

    /* HIDE RING */
    setTimeout(sticky_RING_unpin_handler, (sticky_seeked_to ? RING_COLLAPSING_DELAY : 0));

    /* ATTACH ALL STICKY */
    sticky_FIXED_STOP();
};
/*}}}*/
/*… sticky_RING_unpin_handler {{{*/
const RING_COLLAPSING_DELAY = 2000;

let sticky_RING_unpin_handler = function()
{
    if(!sticky_ring_array.length) return;

    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let ring_sticky = sticky_ring_array[sticky_num];
        del_el_class(ring_sticky, CSS_COLLAPSING);

        t_tools.t_set_CSS_PINNED(ring_sticky , false);

        ring_sticky.style.display    = "none";

        ring_sticky.style.zIndex     = t_data.ZINDEX_ABOVE_TOOLS + sticky_num;
    }
};
/*}}}*/
/*… sticky_RING_repin {{{*/
let sticky_RING_repin = function()
{

    for(let sticky_num = 1; sticky_num <= STICKY_MAX; ++sticky_num)
    {
        let sticky = sticky_ring_array[sticky_num];
        t_tools.t_set_CSS_PINNED(sticky, true);
        sticky.style.display = "block";
    }
};
/*}}}*/
/*}}}*/

/* LOG */
/*{{{*/
/*➔ t_sticky_LOG {{{*/
let t_sticky_LOG = function(num_or_el, msg="", lfx=undefined)
{
    /* FILTER {{{*/
    let arg_type;
    let from = 0;
    let to   = 0;
    /* sticky_num {{{*/
    let sticky_num = parseInt( num_or_el );
    if(!isNaN(sticky_num) && (sticky_num > 0))
    {
        /*{{{
arg_type = "sticky #"+sticky_num;
}}}*/
        arg_type = sticky_num;
        from     = sticky_num;
        to       = from;
    }
    /*}}}*/
    /* .. or sticky {{{*/
    else if(num_or_el && num_or_el.num)
    {
        arg_type = num_or_el.id;
        from     = num_or_el.num;
        to       = from;
    }
    /*}}}*/
    /* .. or anything else {{{*/
    else if( num_or_el )
    {
        arg_type = "All instances";
        from     = 1;
        to       = STICKY_MAX;
    }

    /*}}}*/
    /* .. or nothing .. onWork_STICKY current instance {{{*/
    else if( onWork_STICKY )
    {
        arg_type = "current onWork_STICKY";
        from     = onWork_STICKY.num;
        to       = from;
    }
    /*}}}*/
    /* .. fallback to all {{{*/
    if(!from || !to)
    {
        arg_type = "All instances";
        from     = 1;
        to       = STICKY_MAX;

    }
    /*}}}*/

    /*}}}*/
    /* HEADLINE {{{*/
    lfx  = lfx || lfX[from];

log("%c LOG "+msg+"%c "+arg_type+" %c from "+from+" %c to "+to+" %c out of "+STICKY_MAX
    ,lbL+lfx      ,lbR+lfx        ,lbL+lfX[from]   ,lbC+lfX[to] ,lbR+lf8               );

    /*}}}*/
    /* LIST {{{*/
    for(sticky_num = from; sticky_num <= to; ++sticky_num)
    {
        let sticky     =  sticky_array[ sticky_num ];

        if(!sticky/* || !has_el_class(sticky, CSS_PINNED)*/)
            continue;

        /* add LOG-ONLY-PROPERTIES .. to a shallow copy .. OWN-PROPERTIES */
        let clone              = Object.assign({}, sticky);

        let sticky_pad = get_sticky_pad( sticky );
        if( sticky_pad ) {
            clone.sticky_pad   = strip_HTML(sticky_pad.innerHTML);
            clone.sticky_pad_W = sticky_pad.offsetWidth +" … "+ sticky_pad.clientWidth  +" … "+ sticky_pad.scrollWidth ;
            clone.sticky_pad_H = sticky_pad.offsetHeight+" … "+ sticky_pad.clientHeight +" … "+ sticky_pad.scrollHeight;
        }

        clone.className        = sticky.className;
        clone    ._____        = "Offset … Client … Scroll";
        clone    .W            = sticky.offsetWidth     +" … "+  sticky.clientWidth  +" … "+  sticky.scrollWidth ;
        clone    .H            = sticky.offsetHeight    +" … "+  sticky.clientHeight +" … "+  sticky.scrollHeight;

        if( clone.skipped_csv )
            clone.skipped_csv  = comma_to_LF(               sticky.skipped_csv);
        clone.anchor_node_path =  vbar_to_LF(get_node_path( sticky.anchor_node ), "…");

        let          anchor_xy = sticky_get_anchor_xy(sticky, sticky.anchor_node, sticky.offset_x, sticky.offset_y);
        clone.X                = sticky.offsetLeft      +" … offset_x=["+sticky.offset_x+"] ➔ x=["+(anchor_xy ? anchor_xy.x : "…")+"]";
        clone.Y                = sticky.offsetTop       +" … offset_y=["+sticky.offset_y+"] ➔ y=["+(anchor_xy ? anchor_xy.y : "…")+"]";

        if(from == to)
            clone.  callers    = t_log.get_callers();

        log_key_val_group( sticky_num+" sticky.num["+sticky.num+"] … msg: "+(sticky.msg ? ellipsis(strip_CR_LF(sticky.msg) , 16) : "[]")
                           , clone
                           , lfX[sticky_num]
                           , true);
/*{{{
t_log.console_dir("sticky",sticky)
t_log.console_dir("clone",clone)
if(sticky.anchor_node) t_log.console_dir("sticky.anchor_node",sticky.anchor_node);
}}}*/
        if(from != to) log("...");
    }
    /*}}}*/
    return sticky_array[from];
};
/*}}}*/
/*➔ t_sticky_LOG_TOOLTIP {{{*/
/*{{{*/
const STICKY_LOG_TOOLTIP_DELAY =  500;
const STICKY_CSS_CNUM
    = [   [ CSS_PRESSED      , 1 ]
        , [ CSS_DIMMED       , 1 ]
        , [ CSS_SEEK_TARGET  , 1 ]

        , [ CSS_FIXED        , 2 ]
        , [ CSS_ANCHOR_NODE  , 2 ]

        , [ CSS_TOUCHED      , 3 ]
        , [ CSS_HAS_FOCUS    , 4 ]
        , [ CSS_PASTE_TARGET , 5 ]

        , [ CSS_STICKY_RING  , 9 ]

        , [ CSS_POINT_EE     , 8 ]
        , [ CSS_POINT_SE     , 8 ]
        , [ CSS_POINT_SW     , 8 ]
        , [ CSS_POINT_WW     , 8 ]
        , [ CSS_POINT_NW     , 8 ]
        , [ CSS_POINT_NE     , 8 ]
        , [ CSS_POINT_00     , 8 ]
    ];

let   sticky_LOG_TOOLTIP_timer;
/*}}}*/
let t_sticky_LOG_TOOLTIP = function(sticky,title)
{
    if(sticky_LOG_TOOLTIP_timer) clearTimeout(sticky_LOG_TOOLTIP_timer);

    sticky_LOG_TOOLTIP_timer   = setTimeout(function() { sticky_LOG_TOOLTIP_handler(sticky, title); }, STICKY_LOG_TOOLTIP_DELAY);
};
/*}}}*/
/*…   sticky_LOG_TOOLTIP_handler {{{*/
let   sticky_LOG_TOOLTIP_handler = function(sticky,title)
{
/*{{{*/
let   caller = "sticky_LOG_TOOLTIP_handler";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log_key_val(caller+": "+title+" .. "+sticky.id , sticky);
/*{{{
if( log_this) log_caller();
}}}*/
/*}}}*/
    /* LABEL .. COLOR {{{*/
    let state_css_list = "";
    for(let i=0; i <     STICKY_CSS_CNUM.length ; ++i) {
        let [css, l_x] = STICKY_CSS_CNUM[i];
        if( !sticky.classList.contains( css ) ) continue;

        state_css_list += "<em class='fg"+l_x+"'>"+css+"</em> ";
    }
    /*}}}*/
    /* HANDLES .. f(touched): [hand tail fix paste pen pad] {{{*/
    let l_t
        = (sticky.touched == STICKY_HAND   ) ? 1
        : (sticky.touched == STICKY_PAD    ) ? 2
        : (sticky.touched == STICKY_ROTATE ) ? 6
        : (sticky.touched == STICKY_FIX    ) ? 7
        : (sticky.touched == STICKY_PEN    ) ? 8
        : (sticky.touched == STICKY_REFLOW ) ? 9
        : (sticky.touched == STICKY_PASTE  ) ? 9
        :                                      0;

    /*}}}*/
    /* [anchor_node_path] {{{*/
    let anchor_node_path
        = sticky.anchor_node
        ?  vbar_to_LF("… "+get_node_path( sticky.anchor_node ), "… ")
        :  "";
    anchor_node_path = t_TEXT_LINES_to_COLORED_HTML( anchor_node_path );

    /*}}}*/
    /* [status_html] .. [title ID states touched msg] {{{*/
    let l_s = (sticky.num % 10);

    let em_title
        = "<em class='big cc9'>"  + title     +"</em>";

    let em_id
        = "<em class='fg"+l_s+"'>"+ sticky.id +"</em>";

    let span_touched
        =  sticky.touched
        ?   "<em class='fg"+l_t+"'>touched: "+ sticky.touched +"</em>"
        :   "";

     let span_msg
        = "<span class='bg0'>"+ ellipsis( strip_HTML( sticky.msg ),16) +"</span>";

    let status_html = ""
        + em_title+" "+em_id + t_data.LF
        + span_msg           + t_data.LF
        + state_css_list     + t_data.LF
        + span_touched
    ;

if( log_this) log("%c status_html: %c"+t_data.LF+strip_HTML(status_html), lb5, lf5);

    /*}}}*/
    /* [msg_pos_anchor_lines] {{{*/
    let anchor_label = get_n_txt( sticky.anchor_node );
    let anchor_xy    = sticky.offset_x+" "+sticky.offset_y;
    let sticky_pos_x_y
        =       sticky.style.position
        +" "+   sticky.offsetLeft
        +" "+   sticky.offsetTop
    ;
    let anchor_children_span
        = highlighted_anchor_children.length
        ? "… <span>"+ highlighted_anchor_children.length+" anchors in viewport</span>"
        : ""
    ;

    let msg_pos_anchor_lines = ""
        + anchor_node_path
        + "<span class='bg0'>"+ ellipsis( anchor_label, 48) +"</span>"+t_data.LF
        + t_data.SYMBOL_BULB+" "+                sticky_pos_x_y              +t_data.LF
        + t_data.SYMBOL_BULB+" anchor "+         anchor_xy                   +t_data.LF
        +                                 anchor_children_span
    ;

if( log_this) log("%c msg_pos_anchor_lines: %c"+t_data.LF+strip_HTML(msg_pos_anchor_lines), lb6, lf6);

    /*}}}*/
    /* TOOLTIP {{{*/
    t_fly.t_fly_tooltip_update(   "<pre class='fg0'>"
                                +  status_html
                                + "<hr>"
                                +  msg_pos_anchor_lines
                                +"</pre>"
                                , CSS_STICKY_LOG);

    /*}}}*/
};
/*}}}*/
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
return { name : "dom_sticky"
    , logging : function(state) { return DOM_STICKY_LOG = t_store_set_state("DOM_STICKY_LOG",state); }
    , tagging : function(state) { return DOM_STICKY_TAG = t_store_set_state("DOM_STICKY_TAG",state); }
    , t_sticky_IMPORT

        /* CONST {{{*/
        , STICKY_MAX

        , CSS_LAYOUT_NE
        , CSS_LAYOUT_NW
        , CSS_LAYOUT_SE
        , CSS_LAYOUT_SW

        , CSS_ROTATE_NE
        , CSS_ROTATE_NW
        , CSS_ROTATE_SE
        , CSS_ROTATE_SW
        , CSS_ROTATE_XX

        , CSS_POINT_EE
        , CSS_POINT_SE
        , CSS_POINT_SW
        , CSS_POINT_WW
        , CSS_POINT_NW
        , CSS_POINT_NE
        , CSS_POINT_00
        , CSS_POINT_XX

        /*}}}*/
    /* CONTENT {{{*/
    ,     t_sticky_LOAD                         /* STORE-LOAD: remove-current .. parse-storage .. re-magnet */
    ,     t_sticky_LOAD_ANCHORS_CHANGED         /* STORE-LOAD: forget obsolete anchors */
    ,     t_sticky_STORE                        /* STORE-SAVE: async */
    ,     t_sticky_STORE_NOW                    /* STORE-SAVE:  sync then save */
    ,     t_sticky_unpin_all                    /* STORE: recycle and save */
    ,     t_sticky_GET_COUNT                    /* COUNT: long-press-handler .. recycle .. storage */
    ,     t_sticky_GET_NUM                      /* NUM: seek */
    ,     t_sticky_NEW_XY_SEL_TEXT              /* TEXT: paste selected text */
    ,     t_sticky_LOG                          /* LOG */
    ,     t_sticky_scroll_STICKY_PAD_MSG        /* TEXT: pad_msg SCROLLING  */

    ,     t_sticky_EDIT                         /* EDIT: select .. focus .. select .. edit .. add-input-listener */
    ,     t_sticky_EDITING                      /* EDITING-STATE: for a page scroll to terminate editing */
    ,     t_sticky_EDIT_DONE                    /* EDIT-DONE: focus-release .. set-msg .. format .. adjust .. save */
    ,     t_sticky_set_SEL_PASTE_TARGET_STATE   /* EDIT: toggle paste target indicator */

    ,     t_sticky_get_tooltip                  /* TOOLTIP: long-press */
    ,     t_sticky_LOG_TOOLTIP                  /* TOOLTIP: .. show-handles .. show anchor path */

    /*}}}*/
    /* LAYOUT {{{*/
    ,     t_sticky_MAGNET                       /* LAYOUT: MAGNET STICKY */
    ,     t_sticky_MAGNET_NOW                   /* LAYOUT: MAGNET PINNED .. (no delay) */
    ,     t_sticky_RESIZE                       /* LAYOUT: FONT FLOW WIDTH HEIGHT */
    ,     t_sticky_SET_DIMMED                   /* LAYOUT: DIMM   .. postpone on user-interaction */
    ,     t_sticky_SET_DIMMED_IS_PENDING        /* LAYOUT: DIMM   .. undimm on scroll */
    ,     t_sticky_TRACK_DIR                    /* LAYOUT: ROTATION */
    ,     t_sticky_e_target_STICKY              /* LAYOUT:        STICKY */
    ,     t_sticky_format_pad                   /* LAYOUT: adjust size to content */
    ,     t_sticky_format_pad_all               /* LAYOUT: adjust size to content of all sticky */
    ,     t_sticky_get_SCROLLING_STICKY         /* LAYOUT: SCROLLING */
    ,     t_sticky_move_z_on_top                /* LAYOUT: z-index-on-top .. press .. seek */
    ,     t_sticky_onDown_a_scrollable_STICKY   /* LAYOUT: pad_msg SCROLLABLE */
    ,     t_sticky_onLayout                     /* LAYOUT: changed scrolled */
    ,     t_sticky_onMove                       /* LAYOUT: orient .. magnet */
    ,     t_sticky_reorder                      /* LAYOUT: magnet click scroll */
    ,     t_sticky_reorder_required_on_scroll   /* LAYOUT: renumber unpinned sticky f(relative position) */

    /*}}}*/
    /* EVENT {{{*/
    ,     t_sticky_onDown                       /* EVENT-DOWN:   editing moving resizing orienting */
    ,     t_sticky_onDown_a_STICKY_PAD          /* EVENT-DOWN:   touched pad_msg */
    ,     t_sticky_set_onWork_STICKY            /* EVENT-SELECT: touched .. select .. scroll */
    ,     t_sticky_get_onWork_STICKY            /* EVENT-SELECT: layout pick press long-press-tooltip move click seek status */
    ,     t_sticky_clr_SEEK_NEXT                /* EVENT-SEEK:   CANCEL: on-load .. sticky-removing .. sticky-seeking */
    ,     t_sticky_get_SEEK_NEXT                /* EVENT-SEEK:   start .. resume .. status */
    ,     t_sticky_set_SEEK_NEXT                /* EVENT-SEEK:   select */
    ,     t_sticky_onUp                         /* EVENT-UP:     show moved sticky anchor */
    ,     t_sticky_CLICK_CB                     /* EVENT-CLICK:  TRANSITION: paste .. edit .. menu .. select .. SET FIXED .. unpin */

    /*}}}*/
    /* STATE {{{*/
    ,     t_sticky_is_EDITING                   /* STATE: an   EDITING handle touched */
    ,     t_sticky_is_MOVING                    /* STATE: a     MOVING handle touched */
    ,     t_sticky_is_ORIENTING                 /* STATE: an ORIENTING handle touched */
    ,     t_sticky_is_RESIZING                  /* STATE: a   RESIZING handle touched */
    ,     t_sticky_set_MOVING                   /* STATE: set   MOVING handle touched */
    ,     t_sticky_SHOW_SEEKZONE_sync           /* STATE: sync with layout options

    /*}}}*/
    /* MENU {{{*/
    ,     t_sticky_CHOOSE                       /* RING-MENU-SELECTION: menu-hide .. scroll-to */
    ,     t_sticky_RING_layout                  /* RING-MENU: display */
    ,     t_sticky_RING_stop                    /* RING-MENU: collapse and seek on selected */

    /*}}}*/

    /* DEBUG-ONLY */
    , sticky_get_value       : function(sticky_num=1)         { let sticky = sticky_array[sticky_num]; return sticky_get_value       (sticky          ); }
    , layout                 : function(sticky_num=1)         { let sticky = sticky_array[sticky_num]; sticky_RESIZE7_STICKY_LAYOUT  (sticky          ); }
    , format_pad_anchor_path : function(sticky_num=1)         { let sticky = sticky_array[sticky_num]; sticky_format_pad_anchor_path (sticky          ); }
    , break_next             : function(sticky_num=1)         { let sticky = sticky_array[sticky_num]; sticky_RESIZE4_PAD_FLOW_NEXT  (sticky, 1       ); }
    , break_prev             : function(sticky_num=1)         { let sticky = sticky_array[sticky_num]; sticky_RESIZE4_PAD_FLOW_NEXT  (sticky,-1       ); }
    , magnet                 : function(sticky_num=1)         { let sticky = sticky_array[sticky_num]; t_sticky_MAGNET               (sticky,"console"); }
    , font                   : function(sticky_num=1,d_y=5)   { let sticky = sticky_array[sticky_num]; sticky_RESIZE3_PAD_FONT       (sticky, d_y     ); }
    , size                   : function(sticky_num=1,w=0,h=0) { let sticky = sticky_array[sticky_num]; sticky_SETSIZE_PAD_WH         (sticky, w, h    ); }
    , edit                   : function(sticky_num=1)         { let sticky = sticky_array[sticky_num]; t_sticky_EDIT                 (sticky          ); }
    , edit_done              : function(sticky_num=1)         { let sticky = sticky_array[sticky_num]; onWork_STICKY=sticky; t_sticky_EDIT_DONE(); }

    , format_pad             : function(sticky_num=1)         { let sticky = sticky_array[sticky_num]; t_sticky_format_pad           (sticky          ); }
    , fit_font               : function(sticky_num=1,d_y=5)   { let sticky = sticky_array[sticky_num]; sticky_RESIZE3_PAD_FONT_TO_FIT(sticky,"console"); }
    , msg_fit                : function(sticky_num=1)         { let sticky = sticky_array[sticky_num]; sticky_RESIZE6_MSG_FIT        (sticky,"console"); }

    , sticky_FIXED_TOGGLE
    , sticky_MAGNET0_PINNED
    , sticky_RESIZE8_END
    , sticky_MAGNET0_PINNED_onMoveDXY_clear

    , anchor                        : function(sticky_num=1) { let sticky = sticky_array[sticky_num];
        log("%c"+get_node_path(sticky.anchor_node)+" %c"+ellipsis_short(get_n_txt(sticky.anchor_node)), lf3,lb8);
        console.dir(sticky.anchor_node);
    }

    , sticky_remove_all
    , sticky_unpin_sticky_num
    };
    /*}}}*/
    /* Definition: {{{

    A collection of 10 numbered and colored panels
    ...each containing some text and images
    ...surrounded by accessories allowing to:
    -     move panel
    -   change orientation
    -     edit content
    -   remove panel

     }}}*/

}());

