/* dom_fly */
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true */
const DOM_FLY_JS_ID         = "dom_fly_js";
const DOM_FLY_JS_TAG        = DOM_FLY_JS_ID     +" (230707:14h:33)"; /* eslint-disable-line no-unused-vars */
let dom_fly     = (function() {
"use strict";
/* JSHint {{{*/
/* globals console, setTimeout, clearTimeout */
/* globals window, document */
/* globals dom_data   */
/* globals dom_i18n   */
/* globals dom_log    */
/* globals dom_prop   */
/* globals dom_select */
/* globals dom_store  */
/* globals dom_tools  */
/* globals dom_util   */

/* exported dom_fly, DOM_FLY_JS_TAG */

/* eslint-disable no-warning-comments */
/* eslint-disable dot-notation        */
/*
:update|1,$y *
:!start explorer https://jshint.com/
*/
/*}}}*/
let   DOM_FLY_LOG           = false;
let   DOM_FLY_TAG           = false;

/* IMPORT */
/*{{{*/
/* eslint-disable no-unused-vars */
/*➔ t_fly_IMPORT {{{*/
/*{{{*/
/*....................................*/
let t_data     = {}        ;    /* 05 */
let t_log      = {}        ;    /* 06 */
let t_util     = {}        ;    /* 07 */
let t_i18n     = {}        ;    /* 08 */
let t_prop     = {}        ;    /* 09 */
let t_store    = {}        ;    /* 10 */
/*➔ t_fly      = {}        ; */ /* 11 */
/*....................................*/
/*  t_wording  = {}        ; */ /* 12 */
let t_select   = {}        ;    /* 13 */
/*  t_slot     = {}        ; */ /* 14 */
/*....................................*/
/*  t_hide     = {}        ; */ /* 15 */
/*  t_view     = {}        ; */ /* 16 */
/*  t_sticky   = {}        ; */ /* 17 */
/*  t_seek     = {}        ; */ /* 18 */
/*  t_share    = {}        ; */ /* 19 */
/*....................................*/
/*  t_grid     = {}        ; */ /* 20 */
/*  t_gutter   = {}        ; */ /* 21 */
/*....................................*/
/*  t_ipc      = {}        ; */ /* 22 */
let t_tools    = {}        ;    /* 23 */
/*....................................*/
/*}}}*/
let t_fly_IMPORT    = function(log_this)
{
/* LOAD {{{*/
    t_data    = dom_data   ;   /* 05 */
    t_log     = dom_log    ;   /* 06 */
    t_util    = dom_util   ;   /* 07 */
    t_i18n    = dom_i18n   ;   /* 08 */
    t_prop    = dom_prop   ;   /* 09 */
    t_store   = dom_store  ;   /* 10 */
/*➔ t_fly     = dom_fly    ;*/ /* 11 */

/*  t_wording = dom_wording;*/ /* 12 */
    t_select  = dom_select ;   /* 13 */
/*  t_wot     = dom_wot    ;*/ /* 14 */
/*  t_slot    = dom_slot   ;*/ /* 14 */

/*  t_hide    = dom_hide   ;*/ /* 15 */
/*  t_view    = dom_view   ;*/ /* 16 */
/*  t_sticky  = dom_sticky ;*/ /* 17 */
/*  t_seek    = dom_seek   ;*/ /* 18 */
/*  t_share   = dom_share  ;*/ /* 19 */

/*  t_grid    = dom_grid   ;*/ /* 20 */
/*  t_gutter  = dom_gutter ;*/ /* 21 */

/*  t_ipc     = dom_ipc    ;*/ /* 22 */
    t_tools   = dom_tools  ;   /* 23 */
/*}}}*/
    fly_INTERN();
    /* MODULE LOGGING TAGGING {{{*/
    DOM_FLY_LOG = DOM_FLY_LOG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_FLY_LOG"));
    DOM_FLY_TAG = DOM_FLY_TAG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_FLY_TAG"));

    /*}}}*/
if(log_this) log("%c 10 FLY", lbH+lf0);
};
/*}}}*/
/*_   fly_INTERN {{{*/
/* t_log {{{*/
let LOG_MAP;
let lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;
let log, logBIG, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;

/*}}}*/
let   fly_INTERN = function()
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

    fly_DEPEND();
};
/*}}}*/
/*_   fly_DEPEND {{{*/
/*{{{*/
let DOC_EVT_DIV_EMPTY;
let DOC_LOG_DIV_EMPTY;
let DOC_EVT_DIV_HEADER;
let DOC_LOG_DIV_HEADER;

let FLOATLOG_MARGIN;

/*}}}*/
let   fly_DEPEND = function()
{
    /* t_data {{{*/
    DOC_EVT_DIV_EMPTY  = "<span style='font-size:500%;'>"+t_data.SYMBOL_GEAR+"</span>";
    DOC_LOG_DIV_EMPTY  = "<span style='font-size:500%;'>"+t_data.SYMBOL_BULB+"</span>";
    DOC_EVT_DIV_HEADER = "<span style='font-size:200%;'>"+t_data.SYMBOL_GEAR+"</span>";
    DOC_LOG_DIV_HEADER = "<span style='font-size:200%;'>"+t_data.SYMBOL_BULB+"</span>";

    FLOATLOG_MARGIN
        = {   top    :16
            , left   :16
            , right  :16 + t_data.SCROLLBAR_WIDTH
            , bottom :16 + t_data.SCROLLBAR_WIDTH
        };
    /*}}}*/
};
/*}}}*/
/* eslint-enable  no-unused-vars */
/*}}}*/

/* STATE LOG */
/*{{{*/
/*➔ t_fly_div_get {{{*/
/*{{{*/
let fly_div;

/*}}}*/
let t_fly_div_get = function()
{
    if(fly_div) return fly_div;

    fly_div    = document.createElement("DIV"  );

    fly_div.id = "fly_div";
    t_tools.t_set_CSS_PINNED(fly_div, true);

    let xy = t_store.t_store_parseXY("fly_div_XY");
    if(xy) {
        fly_div.style.left = xy.x+"px";
        fly_div.style.top  = xy.y+"px";
    }

    let fly_div_parent = get_fly_div_parent();

    if( fly_div_parent ) fly_div_parent.appendChild( fly_div );

    return fly_div;
};
/*}}}*/
/*… get_fly_div_parent {{{*/
let get_fly_div_parent = function()
{
    return (typeof dom_tools != "undefined")
        ?          t_tools.t_get_tool("dom_tools_html")
        :          document.documentElement
    ;
};
/*}}}*/
/*➔ t_fly_log_set_state {{{*/
/*{{{*/
let div_ccX = 0;

/*}}}*/
let t_fly_log_set_state = function(state)
{
/*{{{*/
let   caller = "t_fly_log_set_state("+state+")";

/*}}}*/
    let fly_log = t_tools.t_get_fly_log();
    if(!fly_log) return;

    /* show click handling state .. f(EV8_FLOATLOG) */
    if(LOG_MAP.EV8_FLOATLOG) t_util.add_el_class(fly_log, t_tools.CSS_DISABLED);
    else                     t_util.del_el_class(fly_log, t_tools.CSS_DISABLED);

    /* [LOGGING OPTION] takes precedence */
    state
        = LOG_MAP.EV8_FLOATLOG ? "EV8_FLOATLOG"
        :                        state
    ;

    /* UI button .. (distinct [DISPLAY] and [LOGGING] symbol) */
    fly_log.innerHTML
        =  state ? (LOG_MAP.EV8_FLOATLOG
                    ? t_data.SYMBOL_GEAR        /*  ON-EV8_FLOATLOG */
                    : t_data.SYMBOL_CHECK_MARK) /*  ON-SESSION      */
        :             t_data.SYMBOL_MENU        /* OFF-SESSION      */
    ;
    fly_log.title
        = t_i18n.i18n_get(t_i18n.FLY_LOG)
        + (  LOG_MAP.EV8_FLOATLOG
           ?  t_data.LF+"LOG_MAP.EV8_FLOATLOG"
           :  "")
    ;

    t_tools.t_set_id_class_on_off(fly_log.id, t_data.CSS_CHECKED , state);

    /* TOOLS UI */
    t_util.set_el_class_on_off(fly_div   , t_tools.CSS_FLOATLOG, state);

    /* TOOLS BEHAVIOR */
    t_prop.set(t_data.FLOATLOG, state);

    div_ccX        = 0;

    /* CLEAR [fly_div] */
    if( t_fly_tooltip_has_category() ) fly_clr_top(caller+"("+state+")");
    else                               t_fly_init (caller+"("+state+")");
};
/*}}}*/
/*➔ t_fly_onlayout {{{*/
let t_fly_onlayout = function(_caller) /* eslint-disable-line no-unused-vars */
{
    if(!fly_div) return;

    let         w_H = Math.min(window.innerHeight, document.body.parentElement.clientHeight);
    let         w_W = Math.min(window.innerWidth , document.body.parentElement.clientWidth );

    let       scale = t_util.has_el_class(fly_div, t_tools.CSS_MAGNIFIED) ? 2 : 1;

    let         bcr = fly_div.getBoundingClientRect();

    let                 t_x = ((bcr.left + bcr.width /2) < (w_W/2)) ? 0 : 100;
    let                 t_y = ((bcr.top  + bcr.height/2) < (w_H/2)) ? 0 : 100;
    fly_div.transformOrigin = t_x+"% "+t_y+"% 0";

    let off_left            = (bcr.left   < (      FLOATLOG_MARGIN.left  ));
    let off_right           = (bcr.right  > (w_W - FLOATLOG_MARGIN.right ));
    let off_top             = (bcr.top    < (      FLOATLOG_MARGIN.top   ));
    let off_bottom          = (bcr.bottom > (w_H - FLOATLOG_MARGIN.bottom));

    /* keep fly_div top left within viewport margins */
    if( off_left   ) fly_div.style.left = (      FLOATLOG_MARGIN.left                       )+"px";
    if( off_top    ) fly_div.style.top  = (      FLOATLOG_MARGIN.top                        )+"px";
    if( off_right  ) fly_div.style.left = (w_W - FLOATLOG_MARGIN.right  - bcr.width  / scale)+"px";
    if( off_bottom ) fly_div.style.top  = (w_H - FLOATLOG_MARGIN.bottom - bcr.height / scale)+"px";

    t_util.t_adjust_panel_transform_origin(fly_div);
/*{{{
t_log.log_key_val_group( "t_fly_onlayout"
                  , { FLOATLOG_MARGIN
                    , w_W
                    , w_H
                    , bcr
                    , scale
                    , fly_div_transformOrigin : fly_div.transformOrigin
                    , off_left
                    , off_top
                    , off_right
                    , off_bottom
                  } , lf5, false);

console_dir("fly_div", fly_div);
}}}*/
};
/*}}}*/
/*➔ t_fly_div_magnified_toggle {{{*/
let t_fly_div_magnified_toggle = function(new_state="toggle")
{
/*{{{*/
let   caller = "t_fly_div_magnified_toggle("+new_state+")";
let log_this = (LOG_MAP.EV4_LONG_PRESS || LOG_MAP.T3_LAYOUT);

if( log_this) t_log_event_status(caller, lf9);
/*}}}*/
    t_prop.set( t_data.FLY_DIV_MAGNIFIED , new_state);

    /* switch from [LOAD-TIME-LAYOUT] to [USER-POSITIONING] */
    if(new_state == "toggle")
    {
        fly_div.style.right = "unset";
/*{{{
        fly_div . style.transformOrigin = dx+"px  "+dy+"px";
}}}*/
    }

    new_state = (new_state == "toggle") ? !t_util.has_el_class(fly_div, t_tools.CSS_MAGNIFIED) : new_state ;
if(log_this) t_log.log("...new_state=["+new_state+"]");

    if( new_state ) t_util.add_el_class(fly_div, t_tools.CSS_MAGNIFIED);
    else            t_util.del_el_class(fly_div, t_tools.CSS_MAGNIFIED);

    t_tools.t_save_update_post("fly_div_magnified "+new_state);

if(log_this) t_log.log(caller+": fly_div_magnified: %c "+new_state+" ", (new_state ? lb9 : lb8));
};
/*}}}*/
/*}}}*/

/* STAGE LOG */
/*{{{*/
/*➔ t_log_stage {{{*/
let t_log_stage = function(stage, something_clicked, pattern_clicked, e_target, parent_div)
{
    let innerHTML = ""
        +       " <em class='cc"+stage.color+"'>"+  t_util.strip_UL( stage.level    ) +"</em>"
        +       " <em class='cc"+stage.color+"'>"+  t_util.strip_UL( stage.context  ) +"</em>"
        +       " <em class='cc"+stage.color+"'>"+  t_util.strip_UL( stage.action   ) +"</em>"
        +   ( pattern_clicked
            ? ( " <em class='cc"+stage.color+"'>"+            e_target.title   +"</em>")
            : ( " <em class='cc"+stage.color+"'>"+ t_util.get_n_lbl( parent_div     ) +"</em>"))
    ;

    t_log_stage_msg((something_clicked ? STAGE_1_INPUT : STAGE_2_ACTION), innerHTML);
};
/*}}}*/
/*➔ t_log_stage_msg {{{*/
/*{{{*/
const STAGE_0_NONE      = "stage_0_none";

const STAGE_1_INPUT     = "stage_1_input" ;
const STAGE_2_ACTION    = "stage_2_action";
const STAGE_3_RESULT    = "stage_3_result";

const STAGE_1_MISSED    = "stage_1_missed";
const STAGE_2_MISSED    = "stage_2_missed";
const STAGE_3_MISSED    = "stage_3_missed";
const STAGE_1_MORE      = "stage_1_more"  ;
const STAGE_3_MORE      = "stage_3_more"  ;

/*{{{ NEVER USED
const SAME_EVENT_STATUS = ".. same EVENT";
const SAME_TOOLS_STATUS = ".. same TOOLS";
}}}*/

/*}}}*/
let t_log_stage_msg = function(stage, msg) /* eslint-disable-line complexity */
{
    /*{{{*/
let log_this = LOG_MAP.EV8_FLOATLOG;

if( log_this) t_log.log("%c t_log_stage_msg("+stage+" , "+msg+") ", lbF+lb7);
    /*}}}*/
    /* [prev_div] {{{*/
    let prev_div
        = (fly_div.children.length > 0)
        ?  fly_div.children[fly_div.children.length-1]
        : null;
if( log_this) t_log.log("...children.length=["+fly_div.children.length+"]");

if( log_this && prev_div) t_log.log("%c prev_div=["+t_util.strip_HTML(prev_div.innerHTML)+"]", lbH);
    /*}}}*/
    /* [prev_stage] {{{*/
    let prev_stage
        = t_util.has_el_class(prev_div, STAGE_1_INPUT ) ? STAGE_1_INPUT
        : t_util.has_el_class(prev_div, STAGE_2_ACTION) ? STAGE_2_ACTION
        : t_util.has_el_class(prev_div, STAGE_3_RESULT) ? STAGE_3_RESULT
        :                                          STAGE_0_NONE;
if( log_this) t_log.log("......prev_stage=["+ prev_stage +"]");

    /*}}}*/
    /* [is_prev_stage_continuation] {{{*/
    let tools_status = t_log_tools_status_get();
    let event_status = t_log_event_status_get();
    let is_prev_stage_continuation
        =  (stage == prev_stage);

if( log_this) t_log.log("...is_prev_stage_continuation=["+is_prev_stage_continuation+"]");
    /*}}}*/
    /* PREV STAGE MISSED {{{*/
    if( !is_prev_stage_continuation ) {
        let prev_stage_missed = "";
        switch( stage ) {
            case STAGE_1_INPUT : if(prev_stage != STAGE_3_RESULT) prev_stage_missed = STAGE_3_MISSED; break;
            case STAGE_2_ACTION: if(prev_stage != STAGE_3_RESULT) prev_stage_missed = STAGE_3_MISSED; break;
            case STAGE_3_RESULT: if(prev_stage != STAGE_3_RESULT) prev_stage_missed = STAGE_3_MISSED; break;
        }
        if(prev_stage == STAGE_0_NONE)                            prev_stage_missed = STAGE_1_MISSED;

        if(prev_stage_missed)
            t_util.add_el_class(prev_div, prev_stage_missed);
    }
    else {
        t_util.flip_el_class(   prev_div    , STAGE_3_MISSED); /* no bot radius */
        if(              prev_stage == STAGE_3_RESULT)
            t_util.add_el_class(prev_div    , STAGE_3_MORE  ); /* bottom dashed */
    }
    /*}}}*/
    /* THIS STAGE MISSED {{{*/
    let stage_missed = "";
    switch(stage) {
        case     STAGE_0_NONE  :                                          stage_missed = STAGE_3_MISSED+" "+STAGE_3_MISSED;   break;
        case     STAGE_1_INPUT : if( is_prev_stage_continuation )         stage_missed = STAGE_1_MORE  ;                      break;
        case     STAGE_2_ACTION: if(!is_prev_stage_continuation )         stage_missed = STAGE_1_MISSED;                      break;
        case     STAGE_3_RESULT: if(!is_prev_stage_continuation )         stage_missed = STAGE_1_MISSED+" "+STAGE_2_MISSED;   break;
    }
if( log_this) t_log.log("...stage_missed=["+stage_missed+"]");
    /*}}}*/
    /* symbol {{{*/
    let symbol = "";
    switch(stage) {
        case STAGE_1_INPUT : symbol = t_data.SYMBOL_STAGE1_INPUT ; break;
        case STAGE_2_ACTION: symbol = t_data.SYMBOL_STAGE2_ACTION; break;
        case STAGE_3_RESULT: symbol = t_data.SYMBOL_STAGE3_RESULT; break;

    }
    /*}}}*/
    /* color {{{*/
    if(!is_prev_stage_continuation)
        div_ccX = (div_ccX + 1) % 10;

    /*}}}*/
    /* tooltip {{{*/
    let title = t_util.strip_HTML(tools_status + t_data.LF + event_status);

    /*}}}*/
    /* message {{{*/
    t_fly_add_innerHTML("<div class='cc"+div_ccX+" "+stage+" "+stage_missed+"' title='"+title+"'>"+symbol+" "+msg+"</div>");

    /*}}}*/
    /* default stage close {{{*/
    if(stage != STAGE_3_RESULT) {
        if(t_log_stage_close_timer) clearTimeout(t_log_stage_close_timer);
        t_log_stage_close_timer   =   setTimeout(t_log_stage_close_handler, T_LOG_STAGE_CLOSE_DELAY);
    }
    /*}}}*/
};
/*}}}*/
/*… t_log_stage_close_handler {{{*/
/*{{{*/
const T_LOG_STAGE_CLOSE_DELAY = t_data.T_STANDBY1_DELAY + 500;
let t_log_stage_close_timer;

/*}}}*/
let t_log_stage_close_handler = function()
{
let log_this = LOG_MAP.EV8_FLOATLOG;

    let last_div
        = (fly_div.children.length > 0)
        ?  fly_div.children[fly_div.children.length-1]
        : null;
if( log_this) t_log.log("t_log_stage_close_handler: ...children.length=["+fly_div.children.length+"]");
    if(!last_div) return;

/* last_stage {{{*/
    let last_stage
        = t_util.has_el_class(last_div, STAGE_1_INPUT ) ? STAGE_1_INPUT
        : t_util.has_el_class(last_div, STAGE_2_ACTION) ? STAGE_2_ACTION
        : t_util.has_el_class(last_div, STAGE_3_RESULT) ? STAGE_3_RESULT
        :                                          STAGE_0_NONE;
if( log_this) t_log.log("......last_stage=["+ last_stage +"] ["+last_div.textContent+"]");

    if(last_stage != STAGE_3_RESULT) t_util.add_el_class(last_div, STAGE_3_MISSED);

/*}}}*/
/* last_div.classList {{{*/
/*
    if(    !last_div.classList.contains(STAGE_1_INPUT )
        && !last_div.classList.contains(STAGE_1_MISSED)) t_util.add_el_class(last_div, STAGE_1_MISSED);

    if(    !last_div.classList.contains(STAGE_2_ACTION)
        && !last_div.classList.contains(STAGE_2_MISSED)) t_util.add_el_class(last_div, STAGE_2_MISSED);

    if(    !last_div.classList.contains(STAGE_3_RESULT)
        && !last_div.classList.contains(STAGE_3_MISSED)) t_util.add_el_class(last_div, STAGE_3_MISSED);
*/
/*}}}*/
};
/*}}}*/
/*}}}*/

/* INFO LOG */
/*{{{*/
/*➔ t_log_behavior {{{*/
let t_log_behavior = function()
{
    let transcript2 = t_tools.t_get_transcript2();

    /* activate doc playground or tool transcript */
    if(!t_doc_div_clear("doc_log_div") )
        t_tools.t_tools_panel_select(transcript2);

    t_tools.t_clear("t_log_behavior");
    t_tools.t_load_BEHAVIOR();
};
/*}}}*/
/*➔ t_log_regex {{{*/
let t_log_regex = function()
{
    let transcript2 = t_tools.t_get_transcript2();

    /* activate doc playground or tool transcript */
    if(!t_doc_div_clear("doc_log_div") )
        t_tools.t_tools_panel_select(transcript2);

    let sample;
    let html = "";
    html += "<hr><em class='cc1'>t_util.get_first_word:</em>"; /*{{{*/
    sample = "word_1 word_2 word_3";
    html += "<br>SAMPLE=<div class='eso_div'>"+             sample                 +"</div>";
    html += "RESULT=<div class='eso_div'>"+ t_util.get_first_word( sample, "t_log_regex") +"</div>";

    /*}}}*/
    html += "<hr><em class='cc1'>t_util.get_first_word:</em>"; /*{{{*/
    sample += "--- !! @@ ## $$ %% ~~ ^^ ** (( ))"+          sample;
    html += "<br>SAMPLE=<div class='eso_div'>"+             sample                 +"</div>";
    html += "RESULT=<div class='eso_div'>"+ t_util.get_first_word( sample, "t_log_regex") +"</div>";

    /*}}}*/
    html += "<hr><em class='cc1'>t_select.get_word_at_offset:</em>"; /*{{{*/

    let ruler_tens = "_________1_________2_________3_________4_________5_________6_________7_________8_________9_______100_______110___";
    let ruler_unit = "123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123";
    let ruler_off  = "|_|_____|___|_____|___|_____|___|__|_|_____|___|_____||___|||______|___|___________________________________|___||";
    sample         = "Le papillon qui est la forme 'adulte' de la chenille, éclos durant l'été entre juin et septembre selon le climat.";

    if( !t_tools.t_tools_IN_WEBVIEW ) ruler_off = t_util.vbar_to_up_arrow(           ruler_off );
/*
sample = t_util.character_entities_to_char( sample );
sample = t_util.character_entities_to_hex ( sample );
*/
/*

dom_js:545 Le papillon qui est la forme 'adulte' de la chenille, ?clos durant l'?t? entre juin et septembre selon le climat.
dom_js:552 Le XXXaXXXillon qui est la forme 'adulte' de la chenille, ?clos durant l'?t? entre juin et seXXXtembre selon le climat.


*/
    html
        += "<div style='font-size:150%' class='cc0'>"
        +  sample     +"<br>"
        +  ruler_off  +"<br>"
        +  ruler_unit +"<br>"
        +  ruler_tens
        +  "</div>"
    ;

    let offset;
    html
        += "<div style='float:left'>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset =  1, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset =  3, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset =  9, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset = 13, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset = 19, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset = 33, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  "</div>"
    ;
    html
        += "<div style='float:left'>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset = 36, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset = 38, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset = 44, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset = 48, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset = 54, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset = 55, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  "</div>"
    ;

    html
        += "<div style='float:left'>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset = 59, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset = 60, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset = 61, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset = 68, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset = 72, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset =108, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset =112, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset =113, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em><br>"
        +  "</div>"
    ;

    html
        += "<div style='float:left'>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset = -5, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em>"
        +  " <em class='cc8'>offset "+t_util.mPadStart(offset =150, 3)+"</em> <em class='cc4'>"+ t_select.get_word_at_offset(sample, offset) +"</em>"
        +  "</div>"
    ;

    html += "<br style='clear:both;'>";
    /*}}}*/
    html += "<hr><em class='cc1'>t_util.strip_CR_LF:</em>"; /*{{{*/
    sample = "...LINE1 ENDING WITH t_data.CR"+t_data.CR+"...LINE2 ENDING WITH CRLF"+t_data.CR+t_data.LF+"...LINE3 ENDING WITH t_data.LF"+t_data.LF;
    html += "<br>SAMPLE=<div class='eso_div'>"+                 sample    +"</div>";
    html += "RESULT=<div class='eso_div'>"+       t_util.strip_CR_LF(  sample  ) +"</div>";

    /*}}}*/
    html += "<hr><em class='cc1'>t_util.trim_empty_lines(alnum_filter=false):</em>"; /*{{{*/
    sample
        += "NEXT LINE: only space chars='"+t_data.LF
        +  "             "+t_data.LF
        +  "'"+t_data.LF
        +  "NEXT LINE: only non-word chars='"+t_data.LF
        +  "--- !! @@ ## $$ %% ~~ ^^ ** (( ))"+t_data.LF
        +  "'"+t_data.LF
    ;

    html += "<br>SAMPLE=<div class='eso_div'>"+                 sample         +"</div>";
    html += "RESULT=<div class='eso_div'>"+  t_util.trim_empty_lines(  sample, false) +"</div>";

    /*}}}*/
    html += "<hr><em class='cc1'>t_util.trim_empty_lines(alnum_filter=true):</em>"; /*{{{*/
    html += "<br>SAMPLE=<div class='eso_div'>"+                 sample        +"</div>";
    html += "RESULT=<div class='eso_div'>"+  t_util.trim_empty_lines(  sample, true) +"</div>";

    /*}}}*/
    if     (t_tools.t_tools_panel_is_selected( transcript2 )) t_log.log_TR_RESULT_set(html);
    else if(                               doc_log_div  ) t_log_transcript_info  (html);
};
/*}}}*/
/*}}}*/

/* EVENT LOG */
/*{{{*/
/*➔ t_fly_clr_status {{{*/
let t_last_event_status;
let t_last_tools_status;

let t_fly_clr_status = function()
{
    t_last_event_status = "";
    t_last_tools_status = "";
};
/*}}}*/

/*➔ t_log_event_status {{{*/
let t_log_event_status = function(_caller="console", l_x=lf9)
{
/*{{{
    let l_l = l_x ? l_x : (lbL    );
    let l_c = l_x ? l_x : (lbC+lf8);
    let l_r = l_x ? l_x : (lbR+lf8);

    t_log.log(  "%c"+ _caller               + t_data.LF
        + "%c"+ t_log_tools_status_get() + t_data.LF
        + "%c"+ t_log_event_status_get()
        ,  l_l+lbH
        ,  l_c
        ,  l_r
    );
}}}*/
/*{{{
    let status = {
        tools_status : t_log_tools_status_get(),
        event_status : t_log_event_status_get()
    };
    t_log.log_key_val(_caller, status);
console.groupCollapsed("%c"+t_data.SYMBOL_RIGHT+" "+_caller+" %c STATUS:", lbL+l_x, lbR+l_x);
}}}*/

    let l_l = _caller.includes(t_data.LF) ? lbH : lbL;
/*{{{
console.groupCollapsed("%c"+t_data.SYMBOL_ANCHOR+"%c"+_caller+" %c STATUS... ", lbb+l_x, l_l+l_x, lbR+l_x);
}}}*/
console.groupCollapsed("%c"+_caller+" %c STATUS... %c"+t_data.SYMBOL_ANCHOR, l_l+l_x, lbR+l_x, lbb+l_x);

    t_log.log_key_val_group("UI", log_get_tools_status_object(), lf5, false);
    t_log.log_key_val_group("EV", log_get_event_status_object(), lf6, false);

console.trace();
console.groupEnd();

};
/*}}}*/
/*➔ t_log_event_status_if_changed {{{*/
let t_log_event_status_if_changed = function(_caller="console", l_x=undefined)
{
    if(    t_log_tools_status_get_if_changed()
        || t_log_event_status_get_if_changed()
      )
        t_log_event_status(_caller, l_x);

};
/*}}}*/
/*➔ t_log_event_status_if_changed_filter {{{*/
let t_log_event_status_if_changed_filter = function(_caller="console", filter="", l_x=undefined)
{
    if(    t_log_tools_status_get_if_changed(filter)
        || t_log_event_status_get_if_changed(filter)
      )
        t_log_event_status(_caller+(filter ? (" [filter "+filter+"]") : ""), l_x);

};
/*}}}*/

/*_ t_log_tools_status_get_if_changed {{{*/
let t_log_tools_status_get_if_changed = function(filter)
{
    let tools_status  = log_get_tools_status_string(filter);

    if( tools_status != t_last_tools_status) {
        t_last_tools_status  = tools_status;
        return                 tools_status;
    }
    else {
        return              null;
    }
};
/*}}}*/
/*➔ t_log_tools_status_get {{{*/
let t_log_tools_status_get = function()
{
    let                           tools_status = log_get_tools_status_string();
    if(    t_last_tools_status != tools_status)   t_last_tools_status = tools_status;
    return                        tools_status;
};
/*}}}*/

/*_ t_log_event_status_get_if_changed {{{*/
let t_log_event_status_get_if_changed = function(filter)
{
    let event_status  = log_get_event_status_string(filter);
    if( event_status != t_last_event_status) {
        t_last_event_status  = event_status;
        return                 event_status;
    }
    else {
        return              null;
    }
};
/*}}}*/
/*➔ t_log_event_status_get {{{*/
let t_log_event_status_get = function()
{
    let                       event_status = log_get_event_status_string();
    if(t_last_event_status != event_status)   t_last_event_status = event_status;
    return                    event_status;
};
/*}}}*/

/*… log_get_tools_status_string {{{*/
let log_get_tools_status_string = function(filter) /* eslint-disable-line no-unused-vars */
{
    let o = log_get_tools_status_object();

    let tools_status
        =       " onWork_EL...........: "+ o.onWork_EL+" "+o.tool_details + t_data.LF
        +       " onWork_SEEK_TARGET..: "+ o.onWork_SEEK_TARGET           + t_data.LF
        +       " onWork_PANEL........: "+ o.onWork_PANEL                 + t_data.LF
        +       " .pivot_PANEL........: "+ o. pivot_PANEL                 + t_data.LF
        +       " onWork_MOVABLE_PANEL: "+ o.onWork_MOVABLE_PANEL
    ;
    /* filter .. yet unused */

    return tools_status;
};
/*}}}*/
/*… log_get_event_status_string {{{*/
let log_get_event_status_string = function(filter)
{
    let o = log_get_event_status_object();

    let event_status
        =       "EVENT CAPTURED BY "              + o.captured_by                 + t_data.LF
        +       "EVENT CONSUMED BY "              + o.consumed_by                 + t_data.LF
        +       "...................was_a_click: "+ o.was_a_click                 + t_data.LF
        +       "............selection_progress: "+ o.selection_progress          + t_data.LF
        +       ".....................onSeekXYL: "+ o.onSeekXYL                   + t_data.LF
    ;
    if(!filter || !filter.includes("scroll"))
        event_status
            +=  ".....................has_moved: "+ o.has_moved                   + t_data.LF
            +   "................window.scrollY: "+ o.window_scrollY              + t_data.LF
            +   "...has_been_scrolled_by_script: "+ o.has_been_scrolled_by_script + t_data.LF;

    return event_status;
};
/*}}}*/

/*… log_get_tools_status_object {{{*/
let         tools_status_object_prev;
let log_get_tools_status_object = function()
{
    /* NEW STATUS OBJECT .. (CLEAN) {{{*/
    let tools_status_object = t_tools.t_get_tools_status_object();

    /*}}}*/
    /* NEW DIFF PREV .. (SAVE) {{{*/
    let            onDown_EL_changed = (!tools_status_object_prev || (tools_status_object.onDown_EL            != tools_status_object_prev.onDown_EL           ));
    let            onWork_EL_changed = (!tools_status_object_prev || (tools_status_object.onWork_EL            != tools_status_object_prev.onWork_EL           ));
    let  onWork_EL_last_used_changed = (!tools_status_object_prev || (tools_status_object.onWork_EL_last_used  != tools_status_object_prev.onWork_EL_last_used ));
    let         onWork_PANEL_changed = (!tools_status_object_prev || (tools_status_object.onWork_PANEL         != tools_status_object_prev.onWork_PANEL        ));
    let onWork_MOVABLE_PANEL_changed = (!tools_status_object_prev || (tools_status_object.onWork_MOVABLE_PANEL != tools_status_object_prev.onWork_MOVABLE_PANEL));
    let     onWork_SEEK_TOOL_changed = (!tools_status_object_prev || (tools_status_object.onWork_SEEK_TARGET     != tools_status_object_prev.onWork_SEEK_TARGET    ));
    let  seeker_isOn_SLOT_EL_changed = (!tools_status_object_prev || (tools_status_object.seeker_isOn_SLOT_EL  != tools_status_object_prev.seeker_isOn_SLOT_EL ));
    let           ui_details_changed = (!tools_status_object_prev || (tools_status_object.tool_details         != tools_status_object_prev.tool_details        ));


    /*}}}*/
    /* RETURN .. (MARK WITH CHANGES) {{{*/
    if(!tools_status_object_prev)                                            tools_status_object_prev = {};
    /*................................................................t_log.L_NEW......................CURRENT-VALUE.........t_log.L_ARL......................PREV-VALUE.................:.t_log.L_CHK......................UNCHANGED-VALUE....*/
    let o = { onDown_EL            : (           onDown_EL_changed ? (t_log.L_NEW+ tools_status_object.onDown_EL            +t_log.L_ARL +tools_status_object_prev.onDown_EL           ) : t_log.L_CHK+ tools_status_object.onDown_EL           )
        ,     onWork_EL            : (           onWork_EL_changed ? (t_log.L_NEW+ tools_status_object.onWork_EL            +t_log.L_ARL +tools_status_object_prev.onWork_EL           ) : t_log.L_CHK+ tools_status_object.onWork_EL           )
        ,     onWork_EL_last_used  : ( onWork_EL_last_used_changed ? (t_log.L_NEW+ tools_status_object.onWork_EL_last_used  +t_log.L_ARL +tools_status_object_prev.onWork_EL_last_used ) : t_log.L_CHK+ tools_status_object.onWork_EL_last_used )
        ,     onWork_PANEL         : (        onWork_PANEL_changed ? (t_log.L_NEW+ tools_status_object.onWork_PANEL         +t_log.L_ARL +tools_status_object_prev.onWork_PANEL        ) : t_log.L_CHK+ tools_status_object.onWork_PANEL        )
        ,     onWork_MOVABLE_PANEL : (onWork_MOVABLE_PANEL_changed ? (t_log.L_NEW+ tools_status_object.onWork_MOVABLE_PANEL +t_log.L_ARL +tools_status_object_prev.onWork_MOVABLE_PANEL) : t_log.L_CHK+ tools_status_object.onWork_MOVABLE_PANEL)
        ,     onWork_SEEK_TARGET     : (    onWork_SEEK_TOOL_changed ? (t_log.L_NEW+ tools_status_object.onWork_SEEK_TARGET     +t_log.L_ARL +tools_status_object_prev.onWork_SEEK_TARGET    ) : t_log.L_CHK+ tools_status_object.onWork_SEEK_TARGET    )
        ,     seeker_isOn_SLOT_EL  : ( seeker_isOn_SLOT_EL_changed ? (t_log.L_NEW+ tools_status_object.seeker_isOn_SLOT_EL  +t_log.L_ARL +tools_status_object_prev.seeker_isOn_SLOT_EL ) : t_log.L_CHK+ tools_status_object.seeker_isOn_SLOT_EL )
        ,     tool_details         : (          ui_details_changed ? (t_log.L_NEW+ tools_status_object.tool_details         +t_log.L_ARL +tools_status_object_prev.tool_details        ) : t_log.L_CHK+ tools_status_object.tool_details        )
    };
    /*}}}*/
    /* SAVE PREV {{{*/
    tools_status_object_prev = tools_status_object;

    /*}}}*/
    return o;
};
/*}}}*/
/*… log_get_event_status_object {{{*/
let     event_status_object_prev;
let log_get_event_status_object = function()
{
    /* NEW STATUS OBJECT .. (CLEAN) {{{*/

    let event_status_object = t_tools.t_get_event_status_object();

    /*}}}*/
    /* NEW DIFF PREV .. (SAVE) {{{*/
    let                 captured_by_changed = (!event_status_object_prev || (event_status_object.captured_by                 != event_status_object_prev.captured_by                ));
    let                 consumed_by_changed = (!event_status_object_prev || (event_status_object.consumed_by                 != event_status_object_prev.consumed_by                ));
    let                   has_moved_changed = (!event_status_object_prev || (event_status_object.has_moved                   != event_status_object_prev.has_moved                  ));
    let                 was_a_click_changed = (!event_status_object_prev || (event_status_object.was_a_click                 != event_status_object_prev.was_a_click                ));
    let          selection_progress_changed = (!event_status_object_prev || (event_status_object.selection_progress          != event_status_object_prev.selection_progress         ));
    let has_been_scrolled_by_script_changed = (!event_status_object_prev || (event_status_object.has_been_scrolled_by_script != event_status_object_prev.has_been_scrolled_by_script));
    let              window_scrollY_changed = (!event_status_object_prev || (event_status_object.window_scrollY              != event_status_object_prev.window_scrollY             ));
    let                   onSeekXYL_changed = (!event_status_object_prev || (event_status_object.onSeekXYL                   != event_status_object_prev.onSeekXYL                  ));

    /*}}}*/
    /* RETURN .. (MARK WITH CHANGES) {{{*/
    if(!event_status_object_prev)                                                           event_status_object_prev = {};
    /*...............................................................................t_log.L_NEW...................CURRENT-VALUE...................t_log.L_ARL.......................PREV-VALUE.........................:.t_log.L_CHK...........................UNCHANGED-VALUE............*/
    let o = { captured_by                 : (                 captured_by_changed ? (t_log.L_NEW+ event_status_object.captured_by                 +t_log.L_ARL + event_status_object_prev.captured_by                 ) : t_log.L_CHK+ event_status_object_prev.captured_by                 )
        ,     consumed_by                 : (                 consumed_by_changed ? (t_log.L_NEW+ event_status_object.consumed_by                 +t_log.L_ARL + event_status_object_prev.consumed_by                 ) : t_log.L_CHK+ event_status_object_prev.consumed_by                 )
        ,     has_moved                   : (                   has_moved_changed ? (t_log.L_NEW+ event_status_object.has_moved                   +t_log.L_ARL + event_status_object_prev.has_moved                   ) : t_log.L_CHK+ event_status_object_prev.has_moved                   )
        ,     was_a_click                 : (                 was_a_click_changed ? (t_log.L_NEW+ event_status_object.was_a_click                 +t_log.L_ARL + event_status_object_prev.was_a_click                 ) : t_log.L_CHK+ event_status_object_prev.was_a_click                 )
        ,     selection_progress          : (          selection_progress_changed ? (t_log.L_NEW+ event_status_object.selection_progress          +t_log.L_ARL + event_status_object_prev.selection_progress          ) : t_log.L_CHK+ event_status_object_prev.selection_progress          )
        ,     has_been_scrolled_by_script : ( has_been_scrolled_by_script_changed ? (t_log.L_NEW+ event_status_object.has_been_scrolled_by_script +t_log.L_ARL + event_status_object_prev.has_been_scrolled_by_script ) : t_log.L_CHK+ event_status_object_prev.has_been_scrolled_by_script )
        ,     window_scrollY              : (              window_scrollY_changed ? (t_log.L_NEW+ event_status_object.window_scrollY              +t_log.L_ARL + event_status_object_prev.window_scrollY              ) : t_log.L_CHK+ event_status_object_prev.window_scrollY              )
        ,     onSeekXYL                   : (                   onSeekXYL_changed ? (t_log.L_NEW+ event_status_object.onSeekXYL                   +t_log.L_ARL + event_status_object_prev.onSeekXYL                   ) : t_log.L_CHK+ event_status_object_prev.onSeekXYL                   )
    };
    /*}}}*/
    /* SAVE PREV {{{*/
    event_status_object_prev = event_status_object;

    /*}}}*/
    return o;
};
/*}}}*/
/*}}}*/

/* TRANSCRIPTS LOG */
/*{{{*/
/*➔ t_log_transcript {{{*/
let t_log_transcript_event_top = function(html) { t_log_transcript(html, "doc_evt_div", "t_log.log_TOP"); };
let t_log_transcript_event_bot = function(html) { t_log_transcript(html, "doc_evt_div", "t_log.log_BOT"); };
let t_log_transcript_info      = function(html) { t_log_transcript(html, "doc_log_div", ""           ); };
let t_log_transcript           = function(                         html,  div_id,       log_class   )
{
/*{{{
t_log.logXXX("t_log_transcript");
t_log.logXXX("...html......................=["+ html      +"]");
t_log.logXXX("...div_id....................=["+ div_id    +"]");
t_log.logXXX("...log_class.................=["+ log_class +"]");
}}}*/
    /* t_data.FLOATLOG {{{*/
    if(    LOG_MAP.EV7_DISPATCH
       && (LOG_MAP.EV8_FLOATLOG || t_prop.get(t_data.FLOATLOG))
      ) {
        let stage
            = (log_class == "t_log.log_TOP") ? STAGE_1_INPUT
            : (log_class != "t_log.log_BOT") ? STAGE_2_ACTION
            : /*.............t_log.log_BOT..*/ STAGE_3_RESULT
        ;
        t_fly_add_innerHTML("<div class='"+stage+"'>"+html+"</div>");
    }
    /*}}}*/
    /* TOOL [transcript1] [transcript2] .. (when displayed) {{{*/
    let onWork_EL   = t_tools.t_get_onWork_EL();
    let onWork_PANEL= t_tools.t_get_onWork_PANEL();
    let transcript1 = t_tools.t_get_transcript1();
    let transcript2 = t_tools.t_get_transcript2();
    if(div_id == "doc_evt_div")
    {
        if(    (onWork_EL                     != transcript1)
            && (onWork_PANEL                  != transcript1)
            && t_tools.t_tools_panel_is_selected(transcript1)
        ) {
/*{{{
            t_clear_panel_pined_innerHTML(transcript1); // ONLY USER CAN CLEAR TRANSCRIPTS
}}}*/
            t_log.log_TR_EVENT_add(html);
        }
    }
    else {
        if(    (onWork_EL                     != transcript2)
            && (onWork_PANEL                  != transcript2)
            && t_tools.t_tools_panel_is_selected(transcript2)
        ) {
/*{{{
            t_clear_panel_pined_innerHTML(transcript2); // ONLY USER CAN CLEAR TRANSCRIPTS
}}}*/
            t_log.log_TR_LAYOUT_add(html);
        }
    }
    /*}}}*/
    /* DOC [doc_evt_div] [doc_log_div] .. (when in page) {{{*/
    if(div_id == "doc_evt_div") t_doc_div_add("doc_evt_div", "<div class='"+log_class+"'>"+html+"</div>");
    else                        t_doc_div_add("doc_log_div", "<div class='"+log_class+"'>"+html+"</div>");
    /*}}}*/
    if     (log_class == "t_log.log_TOP") t_log.log_TOP(html);
    else if(log_class == "t_log.log_BOT") t_log.log_BOT(html);
};
/*}}}*/
/*}}}*/

/* DOCUMENT LOG */
/*{{{*/
/*{{{*/

let   doc_evt_div;
let   doc_log_div;

/*}}}*/
/*➔ t_doc_div_clear {{{*/
let t_doc_div_clear = function(div_id)
{
    let doc_div = null;
    switch(div_id)
    {
        case "doc_evt_div":
        if(  !doc_evt_div ) doc_evt_div = document.getElementById(div_id);
        if(  !doc_evt_div ) return false;
        doc_div           = doc_evt_div;
        break;

        case "doc_log_div":
        if(  !doc_log_div ) doc_log_div = document.getElementById(div_id);
        if(  !doc_log_div ) return false;
        doc_div           = doc_log_div;
        break;
    }
    doc_div.innerHTML
        = (doc_div == doc_log_div) ? DOC_LOG_DIV_EMPTY
        : (doc_div == doc_evt_div) ? DOC_EVT_DIV_EMPTY
        :                            ""
    ;
    doc_div.cleared   = "cleared";
    return true;
};
/*}}}*/
/*… t_doc_div_add {{{*/
let t_doc_div_add = function(div_id, html)
{
    if( !html.trim()      ) return false;

    let doc_div = null;
    switch(div_id)
    {
        case "doc_evt_div":
        if(  !doc_evt_div ) doc_evt_div = document.getElementById("doc_evt_div");
        if(  !doc_evt_div ) return false;
        doc_div           = doc_evt_div;

        break;

        case "doc_log_div":
        if(  !doc_log_div ) doc_log_div = document.getElementById("doc_log_div");
        if(  !doc_log_div ) return false;
        doc_div           = doc_log_div;

        break;
    }

    if( doc_div.cleared ) {
        doc_div.cleared        = ""      ;
        doc_div.innerHTML      = (div_id == "doc_evt_div") ? DOC_EVT_DIV_HEADER : DOC_LOG_DIV_HEADER;
        t_tools.t_add_closepin_on_panel( doc_div );
    }

    doc_div.innerHTML += html;

    return true;
};
/*}}}*/
/*}}}*/

/* TOOLTIP */
/*{{{*/
/*{{{*/
let T_FLY_CLR_DELAY           = 3000; /* can be shortened by user with a click on [fly_div] */
let T_FLY_CLR_POSTPONED_DELAY =  500;

let t_fly_tooltip_report_timer;

/*}}}*/
/*➔ t_fly_init {{{*/
let t_fly_init = function(reason)
{
/*{{{*/
let   caller = "t_fly_init";
let log_this = LOG_MAP.EV8_FLOATLOG;

if(log_this) t_log.logBIG(caller+"("+reason+")");
if(log_this) t_log.log_caller();
/*}}}*/

    fly_div.innerHTML = "";

    fly_div.title     = reason;

    fly_clr_FADE_OR_REMOVE();
};
/*}}}*/
/*➔ t_fly {{{*/
let t_fly = function(html)
{
    if(!fly_div) return; /* early load-time call */

    let tooltip = fly_get_tooltip_pre_with_html( html );
    if( tooltip )
        fly_flash( tooltip );
    else
        t_fly_add_innerHTML("<div class='stage_0_log'>"+ html +"</div>");

    /* rewind remove timers */
    fly_clr_FADE_OR_REMOVE();

    t_fly_onlayout("t_fly");
};
/*}}}*/
/*…   fly_get_tooltip_pre_with_html {{{*/
let   fly_get_tooltip_pre_with_html = function(html)
{
    let html_text = t_util.strip_HTML( html );

    for(const tooltip of fly_div.getElementsByTagName("PRE"))
    {
        if( html_text == t_util.strip_HTML(tooltip.innerHTML))
            return tooltip;
    }

    return null;
};
/*}}}*/
/*➔ t_fly_all_csv {{{*/
/*{{{*/
let t_log_all_csv_prev;

/*}}}*/
let t_fly_all_csv = function(phase_update_pushed_staged, have_want_done) /* eslint-disable-line complexity */
{
    /* t_util.csv_count [pat off bak bin] {{{*/
    let [ pat_csv, off_csv, alt_csv, bak_csv, bin_csv] = t_tools.t_get_all_csv();
    let pat_c  = t_util.csv_count(pat_csv);
    let off_c  = t_util.csv_count(off_csv);
    let alt_c  = t_util.csv_count(alt_csv);
    let bak_c  = t_util.csv_count(bak_csv);
    let bin_c  = t_util.csv_count(bin_csv);

    /*}}}*/
    /* [same_result_msg] {{{*/
    let same_result_msg = "";
    switch(phase_update_pushed_staged)
    {
        case t_data.SYMBOL_UPDATE: {
            t_log_all_csv_prev = { pat_c , off_c , alt_c , bak_c , bin_c };
        }
        break;

        case t_data.SYMBOL_STAGE : {
            if(    (pat_c == t_log_all_csv_prev.pat_c)
                && (off_c == t_log_all_csv_prev.off_c)
                && (alt_c == t_log_all_csv_prev.alt_c)
                && (bak_c == t_log_all_csv_prev.bak_c)
                && (bin_c == t_log_all_csv_prev.bin_c)
            )
                same_result_msg = "AS ASSIGNED";
            else
                t_log_all_csv_prev = { pat_c , off_c , alt_c , bak_c , bin_c };
        }
        break;

        case t_data.SYMBOL_RESULT: {
            if(    (pat_c == t_log_all_csv_prev.pat_c)
                && (off_c == t_log_all_csv_prev.off_c)
                && (alt_c == t_log_all_csv_prev.alt_c)
                && (bak_c == t_log_all_csv_prev.bak_c)
                && (bin_c == t_log_all_csv_prev.bin_c)
            )
                same_result_msg = "AS STAGED";

            t_log_all_csv_prev = null;
        }
        break;

        default:
        t_log.log("t_fly_all_csv: BACKSTAGE PHASE ["+phase_update_pushed_staged+"]");
        break;
    }
    /*}}}*/
    /* t_fly {{{*/
    let html = "";

    if(same_result_msg)
    {
        let phase_color     = (phase_update_pushed_staged == t_data.SYMBOL_STAGE) ? "cc6" :  "cc4";
        if(!html) html      = " <em  class='have "+ phase_color +"'>"+ same_result_msg +"</em>";
    }
    else {
        if(pat_c && off_c) {
            html+=            " <em  class='"+ have_want_done +" cc1'>pat "+ pat_c
                +             " <sup class='"+ have_want_done +" cc5'>off "+ off_c +"</sup>"
                +             "</em>";
        }
        else {
            if(pat_c) html += " <em  class='"+ have_want_done +" cc1'>pat "+ pat_c +"</em>";
            if(off_c) html += " <em  class='"+ have_want_done +" cc5'>off "+ off_c +"</em>";
        }
        if(alt_c) html     += " <em  class='"+ have_want_done +" cc2'>alt "+ alt_c +"</em>";
        if(bak_c) html     += " <em  class='"+ have_want_done +" cc2'>bak "+ bak_c +"</em>";
        if(bin_c) html     += " <em  class='"+ have_want_done +" cc0'>bin "+ bin_c +"</em>";

        if(!html) html      = " <em  class='have cc8'>ALL BAGS EMPTY</em>";
    }

    t_fly( phase_update_pushed_staged + html);
    /*}}}*/
/*{{{
t_util.csv_log(bak_csv, phase_update_pushed_staged+": bak_csv [x"+t_util.csv_count(bak_csv)+"] ")
if(log_this) if(sel_csv) t_util.csv_log(sel_csv, "sel_csv [x"+t_util.csv_count(sel_csv)+"] "); else t_log.log("%c sel_csv [x"+t_util.csv_count(sel_csv)+"] %c UNCHANGED ["+sel_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(pat_csv) t_util.csv_log(pat_csv, "pat_csv [x"+t_util.csv_count(pat_csv)+"] "); else t_log.log("%c pat_csv [x"+t_util.csv_count(pat_csv)+"] %c UNCHANGED ["+pat_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(off_csv) t_util.csv_log(off_csv, "off_csv [x"+t_util.csv_count(off_csv)+"] "); else t_log.log("%c off_csv [x"+t_util.csv_count(off_csv)+"] %c UNCHANGED ["+off_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(alt_csv) t_util.csv_log(alt_csv, "alt_csv [x"+t_util.csv_count(alt_csv)+"] "); else t_log.log("%c alt_csv [x"+t_util.csv_count(alt_csv)+"] %c UNCHANGED ["+alt_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(bak_csv) t_util.csv_log(bak_csv, "bak_csv [x"+t_util.csv_count(bak_csv)+"] "); else t_log.log("%c bak_csv [x"+t_util.csv_count(bak_csv)+"] %c UNCHANGED ["+bak_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(bin_csv) t_util.csv_log(bin_csv, "bin_csv [x"+t_util.csv_count(bin_csv)+"] "); else t_log.log("%c bin_csv [x"+t_util.csv_count(bin_csv)+"] %c UNCHANGED ["+bin_csv+"]", lbF+lb9, lbF+lb0);
}}}*/
};
/*}}}*/
/*➔ t_fly_observerCB {{{*/
let t_fly_observerCB = function(text)
{
    if(DOM_FLY_TAG) t_fly( t_util.escape_LF_BR( text ) );
};
/*}}}*/

/*➔ t_fly_tooltip {{{*/
let t_fly_tooltip = function(pre_innerHTML,category_className)
{
    /* ADD NEW PRE {{{*/
    if(category_className) fly_tooltip_add_category_className( category_className );

    category_className = "transcript "+t_tools.CSS_TOOLTIP+(category_className ? " "+category_className : "")
        +       (t_prop.get( t_data.THEME_DARK ) ? " "+t_data.CSS_DARK : "");

    let fly_STATE_was  = t_prop.get(t_data.FLOATLOG);    /* ...SAVE PERSISTENT FLOATLOG PROPERTY STATE */

    t_prop.set(t_data.FLOATLOG, "TOOLTIP");              /* ....SET .TRANSIENT FLOATLOG PROPERTY STATE */

    t_fly("<pre class='"+category_className+"'>"+pre_innerHTML+"</pre>");

    t_prop.set(t_data.FLOATLOG, fly_STATE_was);          /* RESTORE PERSISTENT FLOATLOG PROPERTY STATE */
    /*}}}*/
};
/*}}}*/
/*➔ t_fly_tooltip_clear  {{{*/
let t_fly_tooltip_clear = function(category_className)
{
    t_fly_tooltip_update("", category_className);

};
/*}}}*/
/*➔ t_fly_tooltip_update {{{*/
let t_fly_tooltip_update = function(tooltip, category_className) /* eslint-disable-line complexity */
{
/*{{{*/
let   caller = "t_fly_tooltip_update";
let log_this = LOG_MAP.EV8_FLOATLOG;

if(log_this) t_log.log("%c"+caller+"("+category_className+")", lbH+lf5);
if(log_this) t_log.log_caller();
/*}}}*/
    /* DISMISS clear timer .. dismissed by user {{{*/
    if(!fly_div ) return;

    if( t_fly_clr_is_pending() )
        t_fly_clr_cancel();

    t_tools.t_add_closepin_on_panel( fly_div );

    /*}}}*/
    /* UPDATED OR NEW TOOLTIP {{{*/
    let  tooltip_text = t_util.strip_HTML(tooltip);
if( log_this) t_log.log(caller+": tooltip_text=["+tooltip_text+"]");

/*{{{
    let           tooltip_first_word = t_util.get_first_word(tooltip_text, caller);
if( log_this) t_log.log("%c tooltip_first_word=["+tooltip_first_word+"]", lbH+lf8);
    let tooltip_pre = t_util.get_el_child_with_tag_first_word(fly_div,"PRE", tooltip_first_word);
}}}*/
    let tooltip_pre = t_util.get_el_child_with_tag_class(fly_div,"PRE", category_className);
/*{{{
t_log.log(caller+"("+category_className+"): %c tooltip_pre=["+t_util.get_n_lbl(tooltip_pre)+"]", lbH+lf8)
}}}*/

    if(tooltip && !tooltip_pre)
    {
if(log_this || DOM_FLY_LOG) t_log.logBIG("ADDING NEW TOOLTIP", lf7);

        t_fly_tooltip( tooltip     , category_className);
        tooltip_pre = t_util.get_el_child_with_tag_class(fly_div,"PRE", category_className);
        if( tooltip_pre ) /* standby may hide category_className .. //FIXME */
        {
            let                 pre_parent = tooltip_pre.parentElement;
            t_util.add_el_class(pre_parent , t_tools.CSS_TOOLTIP);
        }
    }
    /*}}}*/
    /* OR UPDATE DISPLAYED ENTRY {{{*/
    else if(tooltip) {
        let tooltip_pre_text = t_util.strip_HTML(tooltip_pre.innerHTML);
        /*{{{*/
        if( log_this) {
            t_log.log("%c tooltip_pre_text=["                         + tooltip_pre_text                        +"]", lbH+lf6);
            t_log.log("%c tooltip_pre_text.includes('tooltip_text'): "+ tooltip_pre_text.includes(tooltip_text)     , lbH+lf7);
            t_log.log("%c tooltip_pre.innerHTML.includes('tooltip'): "+ tooltip_pre.innerHTML.includes(tooltip)     , lbH+lf6);
        }
        /*}}}*/
        if(!tooltip_pre_text.includes(tooltip_text))
        {
if(log_this || DOM_FLY_LOG) t_log.logBIG("CHANGING TOOLTIP CONTENT", lf6);

            /* PREVENT t_tools.CSS_REMOVING BY ADDING A [closepin] {{{*/
            let             pre_parent = tooltip_pre.parentElement;
            if(t_util.has_el_class(pre_parent, t_tools.CSS_REMOVING) )
            {
                let   closepin = t_util.get_el_child_with_class(fly_div, t_tools.CSS_CLOSEPIN);
                let pre_parent_is_on_top
                    =  (!closepin && (pre_parent == fly_div.children[0]))
                    || (!closepin && (pre_parent == fly_div.children[1]))
                    || ( closepin && (pre_parent == fly_div.children[2]))
                ;

                if( !pre_parent_is_on_top ) {
                    if(closepin)
                        fly_div.insertBefore(pre_parent, closepin.nextSibling);
                    else
                        fly_div.insertBefore(pre_parent, fly_div.firstElementChild);
                }

                t_util.del_el_class(pre_parent, t_tools.CSS_REMOVING);
            }
            /*}}}*/

            tooltip_pre.update_count
                = tooltip_pre.update_count
                ? tooltip_pre.update_count+1
                : 2;

            tooltip_pre.innerHTML
                = tooltip
                +t_data.LF+"<em class='update_count cc"+(tooltip_pre.update_count % 10)+"'>"+tooltip_pre.update_count+"</em>"
            ;
        }
        else {
if(log_this || DOM_FLY_LOG) t_log.logBIG("TOOLTIP CONTENT UNCHANGED", lf5);

            fly_flash( tooltip_pre );
        }
    }
    /*}}}*/
    /* OR DELETE POSSIBLY DISPLAYED ENTRY {{{*/
    else if(tooltip_pre)
    {
        t_event_LOG_TOOLTIP_clearTimeout(category_className);

if(log_this) t_log.log("DELETING TOOLTIP");
        fly_div.removeChild( tooltip_pre.parentElement );

        let has_closepin = !!t_util.get_el_child_with_class(fly_div, t_tools.CSS_CLOSEPIN);
        if( fly_div.children.length < (has_closepin ? 2:1) )
            t_fly_init(caller+": fly_div.children.length < "+(has_closepin ? 2:1));
    }
    /*}}}*/
    /* NOT FOUND {{{*/
    else {
if(log_this) t_log.log("TOOLTIP ["+category_className+"] NOT FOUND");
    }
    /*}}}*/
};
/*}}}*/
/*➔ t_fly_tooltip_add {{{*/
/*{{{*/
let t_fly_tooltip_buffer           = "";
let t_fly_tooltip_report_functions = [];

/*}}}*/
let t_fly_tooltip_add = function(msg)
{
    /* ADD TO BUFFER {{{*/
    let same_msg_already_in_buffer = t_fly_tooltip_buffer && t_fly_tooltip_buffer.includes(msg);
    if(!same_msg_already_in_buffer)
    {
        t_fly_tooltip_buffer
            += (t_fly_tooltip_buffer ? t_data.LF : "")
            +  msg;

    }
    /*}}}*/
    /* COMMIT HANDLER {{{*/
    if(t_fly_tooltip_buffer && !t_fly_tooltip_report_timer)
    {
        t_fly_tooltip_report_timer
            = setTimeout(
                         function() {
                             t_fly_tooltip_report_timer  = null;

                             /* COMMIT PENDING BUFFER */
                             if(t_fly_tooltip_buffer) {
                                 t_fly_tooltip( t_fly_tooltip_buffer );

                                 t_fly_tooltip_buffer =   "";
                             }

                             /* CALL PENDING REPORT FUNCTIONS */
                             if(t_fly_tooltip_report_functions.length)
                             {
                                 for(let i=0; i< t_fly_tooltip_report_functions.length; ++i)
                                     t_fly_tooltip_report_functions[i]();

                                 t_fly_tooltip_report_functions = [];
                             }
                         }
                         , 1000);
    }
    /*}}}*/
};
/*}}}*/
/*… t_fly_tooltip_add_report_function {{{*/
let t_fly_tooltip_add_report_function = function( report_function )
{
    if(!t_fly_tooltip_report_functions || !t_fly_tooltip_report_functions.includes( report_function ))
        t_fly_tooltip_report_functions.push( report_function );
};
/*}}}*/

/*➔ t_fly_add_innerHTML {{{*/
let t_fly_add_innerHTML = function(innerHTML)
{
    if(!innerHTML) return;
    if(!fly_div  ) return;

    fly_div.insertAdjacentHTML("beforeend", innerHTML);

    fly_clr_FADE_OR_REMOVE();
};
/*}}}*/
/*➔ t_fly_tooltip_append_child {{{*/
let t_fly_tooltip_append_child = function(el)
{
/*{{{*/
let   caller = "t_fly_tooltip_append_child";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) t_log.log("%c "+caller+"( "+t_util.get_n_lbl(el)+" )", lf5);
/*}}}*/

    t_fly_clr_cancel();

    t_fly_init(caller);

    fly_div.appendChild(el);

    t_tools.t_add_closepin_on_panel( fly_div );

    t_fly_onlayout();
};
/*}}}*/

/* DISPLAY */
/*…   fly_flash {{{*/
let   fly_flash = function(tooltip)
{
    t_util.add_el_class(                        tooltip, "standby");
    setTimeout(function() { t_util.del_el_class(tooltip, "standby"); }, 250);
};
/*}}}*/
/*➔ t_fly_cancel_fading {{{*/
let t_fly_cancel_fading = function()
{
    /* clear fading-then-remove transient style */

    if(!fly_div) return;
    let node_list = fly_div.querySelectorAll("."+t_tools.CSS_FADING);

    for(let i=0; i < node_list.length; ++i)
        t_util.del_el_class(node_list[i], t_tools.CSS_FADING);
};
/*}}}*/

/* EVENT */
/*➔ t_event_LOG_TOOLTIP {{{*/
/*{{{*/
const EVENT_LOG_TOOLTIP_DELAY =  500;

let   event_LOG_TOOLTIP_timer;
let   event_LOG_TOOLTIP_last_caller;
let t_event_LOG_TOOLTIP_last_MS;
/*}}}*/
let t_event_LOG_TOOLTIP = function(_caller)
{
    /* NOT WHILE ON LAST CALLER COOLDOWN {{{*/
    if(_caller == event_LOG_TOOLTIP_last_caller)
    {
        let this_MS = new Date().getTime();
        let elapsed = this_MS - t_event_LOG_TOOLTIP_last_MS;
        if( elapsed < EVENT_LOG_TOOLTIP_DELAY) return;
        else      t_event_LOG_TOOLTIP_last_MS = this_MS; /* START ANOTHER COOLDOWN */
    }

    event_LOG_TOOLTIP_last_caller = _caller;
    /*}}}*/
    /* NEW CALLER TOOLTIP AND COOLDOWN {{{*/
    if(event_LOG_TOOLTIP_timer) clearTimeout(event_LOG_TOOLTIP_timer);
    event_LOG_TOOLTIP_timer   = setTimeout(function() { event_LOG_TOOLTIP_handler(_caller); }, EVENT_LOG_TOOLTIP_DELAY);

    /*}}}*/
};
/*}}}*/
/*➔ t_event_LOG_TOOLTIP_clearTimeout {{{*/
let t_event_LOG_TOOLTIP_clearTimeout = function(category_className)
{
/*{{{*/
let   caller = "t_event_LOG_TOOLTIP_clearTimeout("+category_className+")";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) t_log.log(caller);
/*}}}*/
    /* CANCEL PENDING EVENT TOOLTIP {{{*/
    if(!event_LOG_TOOLTIP_timer) return;

    clearTimeout(event_LOG_TOOLTIP_timer);

    event_LOG_TOOLTIP_timer = null;
    /*}}}*/
};
/*}}}*/
/*…   event_LOG_TOOLTIP_handler {{{*/
let   event_LOG_TOOLTIP_handler = function(_caller)
{
    let consumed_by_html
        = "<pre class='fg0'>"
        +   "<em class='big cc9'>"+_caller+"</em>"
        +   t_tools.t_get_consumed_by_table()
        + "</pre>"
    ;

    t_fly_tooltip_update(consumed_by_html, t_data.CSS_EVENT_LOG);
};
/*}}}*/

/* CLEAR */
/*{{{*/
const FLOATLOG_STACK_MAX = 16;
let   fly_clr_postpone_reason;

/*}}}*/
/*➔ t_fly_clr {{{*/
let t_fly_clr = function(e_target)
{
/*{{{*/
let caller = "t_fly_clr";
let log_this = LOG_MAP.EV8_FLOATLOG;

if( log_this) t_log.log("%c"+caller+"%c e_target=["+t_util.get_n_lbl(e_target)+"]", lbL, lbR+lf9);
if( log_this) t_log.log_caller();
/*}}}*/
    /* [from_bottom] .. f(index of clicked fly_div child) {{{*/
    if(!fly_div.children.length) return;
    let fly_div_child = t_util.get_el_parent_with_class(e_target.parentElement, t_tools.CSS_TOOLTIP);
if( log_this) t_log.log("%c fly_div_child=["+fly_div_child+"]", lbH+lf8);

    let index;
    for(index=0; index < fly_div.children.length; ++index) {
        if( t_util.is_el_or_child_of_parent_el(e_target, fly_div.children[index]) )
            break;
    }

    let from_bottom =                            (index   >   (fly_div.children.length/2)  );
if(log_this) t_log.log("...from_bottom=["+from_bottom+"] (index="+index+" > "+(fly_div.children.length/2)+")");

    /*}}}*/
    /*
     * CLEAR FROM TOP    .. removing old history
     * CLEAR FROM BOTTOM .. shaving recent history
     * ....................(up to some older specific stage of interest)
     */
    if( from_bottom ) fly_clr_bot();
    else              fly_clr_top();
};
/*}}}*/
/*➔ t_fly_clr_is_pending {{{*/
let t_fly_clr_is_pending = function()
{
    return (fly_clr_REMOVE_timer != null);
};
/*}}}*/
/*➔ t_fly_clr_cancel {{{*/
/*{{{*/
let fly_clr_REMOVE_timer;

/*}}}*/
let t_fly_clr_cancel = function()
{
    if(fly_clr_REMOVE_timer        ) { clearTimeout( fly_clr_REMOVE_timer         ); fly_clr_REMOVE_timer         = null; }
    if(fly_clr_FADE_OR_REMOVE_timer) { clearTimeout( fly_clr_FADE_OR_REMOVE_timer ); fly_clr_FADE_OR_REMOVE_timer = null; }

    /* clear fading-then-remove style */
    t_fly_cancel_fading();
};
/*}}}*/
/*…   fly_clr_top {{{*/
let   fly_clr_top = function()
{
/*{{{*/
let caller = "fly_clr_top";
let log_this = LOG_MAP.EV8_FLOATLOG;

if( log_this) t_log.log(caller);
/*}}}*/
    let children_remaining  = fly_div.children.length;
    if( children_remaining == 0) return;

    let       closepin = t_util.get_el_child_with_class(fly_div, t_tools.CSS_CLOSEPIN);
    let     next_child = closepin ? 1 : 0;

    let removing_count = 0;
    let  more_on_stage = false;
    do {
        children_remaining -= 1;

        let child  = fly_div.children[next_child];
        if(!child            ) continue;
        if( child == closepin) continue;

        if(!t_util.has_el_class(child, t_tools.CSS_TOOLTIP) )
        {
            t_util.add_el_class(child, t_tools.CSS_REMOVING); /* remove top nodes */
            removing_count += 1;

if( log_this) t_log.log("%c #"+next_child+": ... REMOVING: "+t_util.get_id_or_tag(child), lbH+lf8);
        }
        else {
            t_util.del_el_class(child, t_tools.CSS_REMOVING);
            t_util.del_el_class(child, t_tools.CSS_FADING  );

if( log_this) t_log.log("%c #"+next_child+": NOT REMOVING: "+t_util.get_id_or_tag(child), lbH+lf7);
        }

        /* REMOVE NEXT OF A BUNCH .. UNTIL top-of-next-bunch] {{{*/
        next_child += 1;
        child       = fly_div.children[next_child];
        more_on_stage
            =       (removing_count < 1)
            ||       t_util.has_el_class(child, STAGE_1_MORE  )  /* HAS CONTINUATION */
            ||       t_util.has_el_class(child, STAGE_3_MORE  )  /* HAS CONTINUATION */
            || (    !t_util.has_el_class(child, STAGE_1_INPUT )  /* NOT AN INPUT */
                &&  !t_util.has_el_class(child, STAGE_1_MISSED)) /* NOT MISSED   */
        ;

if(log_this) t_log.log("...more_on_stage=["+more_on_stage+"] .. child ["+t_util.get_n_lbl(child)+"]");
        /*}}}*/
    }
    while(more_on_stage && (children_remaining > 0));

/*{{{
t_log.logXXX(caller": fly_div.children.length=["+fly_div.children.length+"]");
}}}*/

    if(removing_count > 0)
        fly_clr_REMOVE(caller+": removing_count="+removing_count, 0);
};
/*}}}*/
/*…   fly_clr_bot {{{*/
let   fly_clr_bot = function()
{
/*{{{*/
let caller = "fly_clr_bot";
let log_this = LOG_MAP.EV8_FLOATLOG;

if( log_this) t_log.log(caller);
/*}}}*/
    let children_remaining  = fly_div.children.length;
    if( children_remaining == 0) return;

    let  more_on_stage = false;
    let       closepin = t_util.get_el_child_with_class(fly_div, t_tools.CSS_CLOSEPIN);
    let     prev_child = children_remaining - 1;
    let removing_count = 0;
    do {
        children_remaining -= 1;

        let child  = fly_div.children[prev_child];
        if(!child            ) continue;
        if( child == closepin) continue;

        if(!t_util.has_el_class(child, t_tools.CSS_TOOLTIP) )
        {
            t_util.add_el_class(child, t_tools.CSS_REMOVING); /* remove bottom nodes */
            removing_count += 1;

if( log_this) t_log.log("%c #"+prev_child+": ... REMOVING: "+t_util.get_id_or_tag(child), lbH+lf8);
        }
        else {
            t_util.del_el_class(child, t_tools.CSS_REMOVING);
            t_util.del_el_class(child, t_tools.CSS_FADING  );

if( log_this) t_log.log("%c #"+prev_child+": NOT REMOVING: "+t_util.get_id_or_tag(child), lbH+lf7);
        }

        /* REMOVE NEXT OF A BUNCH .. UNTIL top-of-next-bunch] {{{*/
        prev_child -= 1;
        child       = fly_div.children[prev_child];
        more_on_stage
            =       (removing_count < 1)
            ||       t_util.has_el_class(child, STAGE_3_RESULT) /* LAST OF PREVIOUS BUNCH */
            ||      !t_util.has_el_class(child, STAGE_3_MISSED) /* LAST OF PREVIOUS BUNCH */


        ;

if(log_this) t_log.log("...more_on_stage=["+more_on_stage+"] .. child ["+t_util.get_n_lbl(child)+"]");
        /*}}}*/
    }
    while(more_on_stage && (children_remaining > 0));

if( log_this) t_log.log("...removing_count=["+removing_count+"]");
    if(removing_count > 0)
        fly_clr_REMOVE(caller+": removing_count="+removing_count, 0);
};
/*}}}*/
/*…   fly_clr_FADE_OR_REMOVE {{{*/
/*{{{*/

let   fly_clr_FADE_OR_REMOVE_timer;
/*}}}*/
let   fly_clr_FADE_OR_REMOVE = function()
{
    t_fly_clr_cancel();

    if( fly_div.children.length )
    {
        t_util.add_el_class(fly_div,            t_tools.CSS_PAUSE_ANIMATION    );
        t_util.add_el_class(fly_div,            t_tools.CSS_STACKING           );

        if(fly_clr_FADE_OR_REMOVE_timer) clearTimeout(fly_clr_FADE_OR_REMOVE_handler);
        fly_clr_FADE_OR_REMOVE_timer   =   setTimeout(function() { fly_clr_FADE_OR_REMOVE_handler("SCHEDULED CLEANUP: SOMETHING DISPLAYED"); }, T_FLY_CLR_DELAY);
    }
    else {
        t_util.del_el_class(fly_div,            t_tools.CSS_PAUSE_ANIMATION    );
        t_util.del_el_class(fly_div,            t_tools.CSS_STACKING           );

        t_tools.t_del_pin_css_on_panel(fly_div, t_tools.CSS_CLOSEPIN           ); /* IS  EMPTY .. remove close pin */
    }
};
/*}}}*/
/*…   fly_clr_FADE_OR_REMOVE_handler {{{*/
let   fly_clr_FADE_OR_REMOVE_handler = function(reason) /* eslint-disable-line complexity */
{
/*{{{*/
let   caller = "fly_clr_FADE_OR_REMOVE_handler";
let log_this = LOG_MAP.EV8_FLOATLOG;

if(log_this) t_log.log("%c"+caller+"("+reason+")", lbH+lf5);
/*}}}*/
    /* clearTimeout {{{*/
    fly_clr_FADE_OR_REMOVE_timer = null;

    t_fly_clr_cancel();

    if(!fly_div.innerHTML) return;
    /*}}}*/
    /* [closepin] [children_stack_length] [floatlog_requested] [children_stack_overflow] {{{*/
    let      closepin = t_util.get_el_child_with_class(fly_div, t_tools.CSS_CLOSEPIN);

    let children_stack_length = fly_div.children.length - (closepin ? 1 : 0);

    let floatlog_requested
        =  LOG_MAP.EV8_FLOATLOG
        || t_prop.get(   t_data.FLOATLOG );

    let floatlog_stack_max = closepin ? FLOATLOG_STACK_MAX : FLOATLOG_STACK_MAX/2;
    let children_stack_overflow = (children_stack_length >= floatlog_stack_max);

    /*}}}*/
    let   fading_count = 0;
    let removing_count = 0;
    let children_remaining = children_stack_length;
    /* OVERFLOW .. MARK FOR REMOVING {{{*/
    if( children_stack_overflow )
    {
        let     next_child = (closepin ? 1 : 0); /* keep closepin */
        let  more_on_stage = false;
        while(   (children_remaining > floatlog_stack_max)
              || (more_on_stage && (children_remaining > 0))
             ) {
            /* mark NOT-t_tools.CSS_TOOLTIP entries with t_tools.CSS_REMOVING {{{*/
            children_remaining -= 1;

            let child  = fly_div.children[next_child];
            if( child == closepin) continue;

            if(!t_util.has_el_class(child, t_tools.CSS_TOOLTIP))
            {
                t_util.add_el_class(child, t_tools.CSS_REMOVING);  /* remove trailing nodes */

                removing_count += 1;
            }
            else {

if(log_this || DOM_FLY_LOG) t_log.logBIG("NOT REMOVING "+t_util.get_n_lbl(child), lf2);
            }
            /*}}}*/
            /* REMOVE NEXT OF A BUNCH .. UNTIL top-of-next-bunch] {{{*/
            next_child += 1;
            child       = fly_div.children[next_child];
            more_on_stage
                =        t_util.has_el_class(child, STAGE_1_MORE  )
                ||       t_util.has_el_class(child, STAGE_3_MORE  )
                || (    !t_util.has_el_class(child, STAGE_1_INPUT )
                    &&  !t_util.has_el_class(child, STAGE_1_MISSED))
            ;

if(log_this) t_log.log("...more_on_stage=["+more_on_stage+"] .. child ["+t_util.get_n_lbl(child)+"]");
            /*}}}*/
        }
    }
    /*}}}*/
    /* NO CLOSEPIN .. START FADING {{{*/
    else if(!closepin)
    {
        for(let i=0; i < fly_div.children.length; ++i)
        {
            /* mark NOT-t_tools.CSS_TOOLTIP entries with t_tools.CSS_FADING {{{*/
            let              child  = fly_div.children[i];
            if(              child == closepin) continue;
            if(!t_util.has_el_class(child, t_tools.CSS_TOOLTIP))
            {
                t_util.add_el_class(child, t_tools.CSS_FADING);

                fading_count += 1;
            }
            else {
                t_util.del_el_class(child, t_tools.CSS_REMOVING);
                t_util.del_el_class(child, t_tools.CSS_FADING  );

if(log_this || DOM_FLY_LOG) t_log.logBIG("NOT FADING   "+t_util.get_n_lbl(child), lf2);
            }
            /*}}}*/
        }

    }
    /*}}}*/
    /* POST A REMOVING HANDLER {{{*/
    let remove_delay = fly_clr_postpone_reason
        ?        T_FLY_CLR_POSTPONED_DELAY
        :        T_FLY_CLR_DELAY;

if( log_this) t_log.log_key_val_group( caller
                                 , {   closepin : (closepin ? "HAS CLOSEPIN" : "NO CLOSEPIN")+": ...to be cleared by "+(closepin ? "USER":"TIMER")
                                     , FLOATLOG : "----------------------------------------"
                                     , floatlog_requested
                                     , FLOATLOG_STACK_MAX
                                     , floatlog_stack_max
                                     , CHILDREN : "----------------------------------------"
                                     , children_stack_length
                                     , children_stack_overflow
                                     , children_remaining
                                     , REMOVING : "----------------------------------------"
                                     , fading_count
                                     , removing_count
                                     , fly_clr_postpone_reason
                                     , remove_delay
                                 }
                                 , lf5, true);

    if((removing_count > 0) || (fading_count > 0))
        fly_clr_REMOVE(reason, remove_delay);

    /*}}}*/
};
/*}}}*/
/*_   fly_clr_REMOVE {{{*/
let   fly_clr_REMOVE = function(reason, delay=T_FLY_CLR_DELAY)
{
/*{{{*/
let   caller = "fly_clr_REMOVE";
let log_this = LOG_MAP.EV8_FLOATLOG;

if(log_this) t_log.log("%c"+caller+"("+reason+")", lbH+lf5);
if(log_this) t_log.log_caller();
/*}}}*/
    if(fly_clr_REMOVE_timer) clearTimeout(fly_clr_REMOVE_timer);
    fly_clr_REMOVE_timer   =   setTimeout(function() { fly_clr_REMOVE_handler(reason); }, delay);
};
/*}}}*/
/*…   fly_clr_REMOVE_handler {{{*/
let   fly_clr_REMOVE_handler = function(reason="TIMER") /* eslint-disable-line complexity */
{
/*{{{*/
let caller = "fly_clr_REMOVE_handler";
let log_this = LOG_MAP.EV8_FLOATLOG;

if(log_this) t_log.log("%c"+caller+"("+reason+")", lbH+lf6);
/*}}}*/
    /* clear timers {{{*/
    fly_clr_REMOVE_timer = null;
    t_fly_clr_cancel();

    /*}}}*/
    /* postponed by user .. f(onWork_EL) {{{*/
    let onWork_EL = t_tools.t_get_onWork_EL();
    if(onWork_EL != null)
    {
        fly_clr_postpone_reason = "t_data.FLOATLOG kept visible while user is holding ["+t_util.get_n_lbl(onWork_EL)+"]";
if( log_this || DOM_FLY_LOG) t_log.log(fly_clr_postpone_reason);

        fly_clr_REMOVE(fly_clr_postpone_reason, T_FLY_CLR_POSTPONED_DELAY);
        return;
    }

    fly_clr_postpone_reason = false;
    /*}}}*/
    /* REMOVING MARKED t_tools.CSS_REMOVING ENTRIES {{{*/
    let children_stack_length = fly_div.children.length;
    let removed_count         = 0;
    let has_removing        = t_util.get_el_child_with_class(fly_div, t_tools.CSS_REMOVING);
    let has_fading          = t_util.get_el_child_with_class(fly_div, t_tools.CSS_FADING  );
    if( has_removing || has_fading )
    {
        /* REMOVE ONLY t_tools.CSS_REMOVING MARKED ENTRIES {{{*/
if( log_this || DOM_FLY_LOG) t_log.logBIG("REMOVING t_tools.CSS_REMOVING MARKED ENTRIES", lf0);
        let child_removed;
        for(let i=0; i < fly_div.children.length; i += (child_removed ? 0 : 1))
        {
            child_removed = false;
            let                  child = fly_div.children[i];
            if(     t_util.has_el_class(child, t_tools.CSS_FADING  )
                ||  t_util.has_el_class(child, t_tools.CSS_REMOVING)
              ) {
                /* KEEP CATEGORY TOOLTIP {{{*/
                if( t_util.has_el_class(child, t_tools.CSS_TOOLTIP))
                {
                    t_util.del_el_class(child, t_tools.CSS_REMOVING);
                    t_util.del_el_class(child, t_tools.CSS_FADING  );

if( log_this) t_log.log("%c #"+(i+1)+" / "+children_stack_length+" .. CATEGORY: "+t_util.get_id_or_tag(child), lf5);
                }
                /*}}}*/
                /* REMOVE FADING OR REMOVING ENTRIES {{{*/
                else
                {
                    fly_div.removeChild( child );
                    child_removed      = true;
                    removed_count     += 1;

if( log_this) t_log.log("%c #"+(i+1)+" / "+children_stack_length+" ... REMOVED: "+t_util.get_id_or_tag(child), lf2);
                }
                /*}}}*/
            }
            else {

if( log_this) t_log.log("%c #"+(i+1)+" / "+children_stack_length+" NOT REMOVED: "+t_util.get_id_or_tag(child), lf3);
            }
        }
        /*}}}*/
    }
    /*}}}*/
    /* REMOVING ALL ENTRIES .. (FADING TERMINATED) {{{*/
    else {
if( log_this || DOM_FLY_LOG) t_log.log("%c NO ENTRIES TO REMOVE", lbH+lf0);

        t_fly_init(caller);
    }
    /*}}}*/
    /* [closepin] .. removed when it is the only child {{{*/
    let closepin = t_util.get_el_child_with_class(fly_div, t_tools.CSS_CLOSEPIN);
    if(fly_div.children.length < 2)
    {
        if( closepin ) {
 if( log_this || DOM_FLY_LOG) t_log.log("%c REMOVING LONE CLOSEPIN", lf0);

            fly_div.removeChild( closepin );
        }
    }
    /*}}}*/
    t_fly_onlayout();
/*{{{*/
if( log_this) t_log.log_key_val_group( caller
                                 , {   closepin : (closepin ? "HAS CLOSEPIN" : "NO CLOSEPIN")+": ...to be cleared by "+(closepin ? "USER":"TIMER")
                                     , children_stack_length
                                     , has_fading
                                     , has_removing
                                     , removed_count
                                 }
                                 , lf6, true);
/*}}}*/
};
/*}}}*/

/* CATEGORY */
/*{{{*/
let fly_tooltip_category_className_array = [];

/*}}}*/
/*➔ t_fly_tooltip_has_category {{{*/
let t_fly_tooltip_has_category = function(category_className)
{
    let pin_pre;
    for(let i=0; i < fly_tooltip_category_className_array.length; ++i)
    {
        let      className = fly_tooltip_category_className_array[i];
        if( !category_className || (category_className == className) )
        {
            pin_pre = t_util.get_el_child_with_class(fly_div, className);

/*{{{
t_log.log("t_fly_tooltip_has_category("+(category_className || "<any>")+"): %c ...return "+!!pin_pre+" %c"+t_util.get_n_lbl(pin_pre)+"]", lbL+lfX[!!pin_pre ? 5:8], lbR+lf8);
}}}*/
            return !!pin_pre;
        }
    }

/*{{{
t_log.log("t_fly_tooltip_has_category return false");
}}}*/
    return false;
};
/*}}}*/
/*…   fly_tooltip_add_category_className {{{*/
let   fly_tooltip_add_category_className = function(category_className)
{
/*{{{
t_log.log("fly_tooltip_add_category_className("+category_className+")");
}}}*/

    if(!fly_tooltip_category_className_array.includes( category_className ))
    {
        fly_tooltip_category_className_array.push    ( category_className );

if(DOM_FLY_LOG) t_log.log("fly_tooltip_category_className_array: adding %c["+category_className+"]", lbH+lf7);
    }
};
/*}}}*/

/*}}}*/

/* EXPORT */
/*{{{*/
return { name : "dom_fly"
    , logging : (state) => DOM_FLY_LOG = t_store.setItem("DOM_FLY_LOG",state)
    , tagging : (state) => DOM_FLY_TAG = t_store.setItem("DOM_FLY_TAG",state)
    , t_fly_IMPORT

    /* CONSTANTS {{{*/
    , STAGE_0_NONE
    , STAGE_1_INPUT
    , STAGE_2_ACTION
    , STAGE_3_RESULT
    , STAGE_1_MISSED
    , STAGE_2_MISSED
    , STAGE_3_MISSED
    , STAGE_1_MORE
    , STAGE_3_MORE

    /*}}}*/

    /* ACCESSORS {{{*/
    , t_doc_evt_div_get : () => doc_evt_div
    , t_doc_log_div_get : () => doc_log_div
    , t_doc_div_clear

    /*}}}*/

    /* TOOLTIP {{{*/
    , t_fly_cancel_fading
    , t_fly_clr
    , t_fly_clr_cancel
    , t_fly_clr_is_pending
    , t_fly_tooltip_has_category

    , t_fly
    , t_fly_add_innerHTML
    , t_fly_div_get
    , t_fly_div_magnified_toggle
    , t_fly_init
    , t_fly_log_set_state
    , t_fly_observerCB
    , t_fly_onlayout
    , t_fly_all_csv
    , t_fly_tooltip
    , t_fly_tooltip_add
    , t_fly_tooltip_add_report_function
    , t_fly_tooltip_append_child
    , t_fly_tooltip_clear
    , t_fly_tooltip_update

    /*}}}*/

    , t_event_LOG_TOOLTIP

    , t_fly_clr_status
    , t_log_behavior
    , t_log_event_status
    , t_log_event_status_get
    , t_log_event_status_if_changed
    , t_log_event_status_if_changed_filter
    , t_log_regex
    , t_log_stage
    , t_log_stage_msg
    , t_log_tools_status_get
    , t_log_transcript_event_bot
    , t_log_transcript_event_top
    , t_log_transcript_info

    , fclear : fly_clr_REMOVE_handler
};

/*}}}*/

}());
