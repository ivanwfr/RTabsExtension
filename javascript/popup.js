// ┌───────────────────────────────────────────────────────────────────────────┐
// │ popup.js ................................................... POPUP SCRIPT │
// └───────────────────────────────────────────────────────────────────────────┘
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
/* eslint-disable no-redeclare              */
/* globals console, chrome                  */

/* globals  log_js                          */
/* exported popup_js, P_SCRIPT_TAG          */

/* eslint-disable no-warning-comments       */
/* eslint-disable prefer-spread             */
/* eslint-disable prefer-rest-params        */
/* eslint-disable valid-jsdoc               */

/* eslint-enable  no-redeclare              */

const    P_SCRIPT_ID         = "popup_js";
const    P_SCRIPT_TAG        = P_SCRIPT_ID +"(231007:19h:57)";
/*}}}*/
// ┌───────────────────────────────────────────────────────────────────────────┐
// │ POPUP                                                           EXTENSION │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_event.js
:e javascript/bg_header.js
:e javascript/bg_message.js
:e javascript/bg_page.js
:e javascript/bg_settings.js
:e javascript/bg_store.js
:e javascript/bg_tabs.js
:e javascript/options.js
"● javascript/popup.js
:e javascript/worker.js
/* └─────────────────────────────┘*/
let popup_js = (function() {
"use strict";

/* IMPORT {{{*/
/* modules {{{*/
/*_ log_js {{{*/
/* eslint-disable no-unused-vars */
let   LF     =     String.fromCharCode(10);
let   LF_TAB = LF+ String.fromCharCode( 9);

let   lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let   lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let   lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;

let   SD0 ,SD1 ,SD2 ,SD3 ,SD4 ,SD5 ,SD6 ,SD7 ,SD8 ,SD9;
let   SAU, SAR, SAD, SAL, SHV, SYN, SBS;
let   L_CHK, L_NEW, L_ARD, L_ARL, L_ARR, L_ARU, L_CLR, L_FNC, L_WRN;
let   SYMBOL_FUNCTION, SYMBOL_CHECK_MARK, SYMBOL_NOT_CHECKED, SYMBOL_CONSTRUCTION, SYMBOL_ROCKET, SYMBOL_ASSIGN, SYMBOL_GEAR, SYMBOL_THUMBS_UP;
/* eslint-enable no-unused-vars */

let   get_callers
    , log
    , log_caller
    , log_json
    , log_object
//  , log_permission
    , log_sep_bot
    , log_sep_top
    , li
    , strip_CR_LF
;

/*}}}*/
/*}}}*/
/*  _import {{{*/
let _import = function()
{
    let modules=[ log_js        ]; /*{{{*/
    LF                                                               = log_js.LF;

    [ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX        ] = log_js.LOG_BG_ARR;
    [ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb                  ] = log_js.LOG_XX_ARR;
    [ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX        ] = log_js.LOG_FG_ARR;

    [ SD0 ,SD1 ,SD2 ,SD3 ,SD4 ,SD5 ,SD6 ,SD7 ,SD8 ,SD9             ] = log_js.LOG_SDX;
    [ SAU, SAR, SAD, SAL, SHV, SYN, SBS                            ] = log_js.LOG_SXX;
    [ L_CHK, L_NEW, L_ARD, L_ARL, L_ARR, L_ARU, L_CLR, L_FNC, L_WRN] = log_js.LOG_CHR;

    [ SYMBOL_FUNCTION, SYMBOL_CHECK_MARK, SYMBOL_NOT_CHECKED, SYMBOL_CONSTRUCTION, SYMBOL_ROCKET, SYMBOL_ASSIGN, SYMBOL_GEAR, SYMBOL_THUMBS_UP] = log_js.LOG_SYM;

    li                              = log_js.log_modulename_key_val;
    get_callers                     = log_js.get_callers;                                       li("log_js","get_callers"   , get_callers);
    log                             = log_js.log;                                               li("log_js","log"           , log        );
    log_caller                      = log_js.log_caller;                                        li("log_js","log_caller"    , log_caller );
    log_json                        = log_js.log_json;                                          li("log_js","log_json"      , log_json   );
    log_object                      = log_js.log_object;                                        li("log_js","log_object"    , log_object );
//  log_permission                  = log_js.log_permission;                                    li("log_js","log_permission", log_permiss);
    log_sep_bot                     = log_js.log_sep_bot;                                       li("log_js","log_sep_bot"   , log_sep_bot);
    log_sep_top                     = log_js.log_sep_top;                                       li("log_js","log_sep_top"   , log_sep_top);
    strip_CR_LF                     = log_js.strip_CR_LF;                                       li("log_js","strip_CR_LF"   , strip_CR_LF);

    /*}}}*/
    log_js.log_set_type("P");

    log_js.log_import(popup_js, modules);
};
/*}}}*/
/*}}}*/
    /* ONLOAD IMPORT */
    setTimeout(_import,0);
/*_ LOG_MAP {{{*/
let LOG_MAP = {
    P_LOG1_MESSAGE    : false,
    P_LOG2_ERROR      :  true,



    P_LOG6_UI         : false,
    P_LOG7_TABS       : false,
    P_LOG8_STORE      : false,
    P_LOG9_EVENT      : false,
    P_LOG0_MORE       : false
};
/*}}}*/
/*_ logn {{{*/
let logn = function(n)
{
try {
    /* TOGGLE [log_tag] {{{*/
//  let caller = "logn("+n+")";

    let log_tag
        = (n == 1        ) ? "P_LOG1_MESSAGE"
        : (n == 2        ) ? "P_LOG2_ERROR"



        : (n == 6        ) ? "P_LOG6_UI"
        : (n == 7        ) ? "P_LOG7_TABS"
        : (n == 8        ) ? "P_LOG8_STORE"
        : (n == 9        ) ? "P_LOG9_EVENT"
        : (n == 0        ) ? "P_LOG0_MORE"
        : (n != undefined) ? "*"
        :                    ""
    ;

    /*}}}*/
    /* STORE  [log_tag] {{{*/
    if( log_tag )
    {
        if(log_tag == "*") {
            let new_state    = !log_ACTIVATED();
            Object.keys(LOG_MAP).filter((key) => LOG_MAP[key] = new_state);
        }
        else {
            LOG_MAP[log_tag] = !LOG_MAP[log_tag];
        }

        LOG_MAP.P_LOG2_ERROR = (log_tag != "P_LOG2_ERROR") && log_ACTIVATED();

        logn_STORE();
    }
    /*}}}*/
    /* LOG    [log_tag] [lastError] [SYN] {{{*/
    if( chrome.runtime && chrome.runtime.lastError )
        return            chrome.runtime.lastError.message;

    if(!log_tag || (log_tag=="*")) return SYN; // SYMBOL BLACK CIRCLE

    let    mark = LOG_MAP[log_tag] ? SYMBOL_CHECK_MARK : L_CLR;
    return mark+" "+log_tag+"="+LOG_MAP[log_tag];
    /*}}}*/
} finally { log_LOG_MAP(); }
};
/*}}}*/
/*_ logn_STORE {{{*/
let logn_STORE = function()
{
/*{{{*/
let   caller = "logn_STORE";
let log_this = LOG_MAP.P_LOG8_STORE;

if( log_this) log("%c "+caller+": %c SAVING [LOG_MAP]", lbL+lf8, lbR+lf9);
/*}}}*/
    log("%c SAVING [LOG_MAP]", lb9);
    let log_items
        = {     P_LOG1_MESSAGE  : LOG_MAP.P_LOG1_MESSAGE
            ,   P_LOG2_ERROR    : LOG_MAP.P_LOG2_ERROR



            ,   P_LOG6_UI       : LOG_MAP.P_LOG6_UI
            ,   P_LOG7_TABS     : LOG_MAP.P_LOG7_TABS
            ,   P_LOG8_STORE    : LOG_MAP.P_LOG8_STORE
            ,   P_LOG9_EVENT    : LOG_MAP.P_LOG9_EVENT
            ,   P_LOG0_MORE     : LOG_MAP.P_LOG0_MORE
        };

    // ┌──────────────────────────────────────────┐
    // │ LOG_MAP EXTENSION PERSISTENCE            │
    // └──────────────────────────────────────────┘
    if( chrome.storage )
        p_storage_sync_set(log_items, log_js.get_callers_bot());

    /* propagate log_more to log modules */
    log_js.set_log_more( LOG_MAP.B_LOG0_MORE ) ;
};
/*}}}*/
/*_ logn_USAGE {{{*/
let logn_USAGE = function() /* eslint-disable-line no-unused-vars */
{
    let  s  = ""                                               , args=[""];

    /**/ s += "%c "+P_SCRIPT_ID+".l(2) .. toggle ERROR"+LF     ; args.push(lbR+lf2);

    /**/ s += "%c "+P_SCRIPT_ID+".l(4) .. toggle STORE"+LF     ; args.push(lbR+lf4);

    /**/ s += "%c "+P_SCRIPT_ID+".l(6) .. toggle UI"+LF        ; args.push(lbR+lf6);
    /**/ s += "%c "+P_SCRIPT_ID+".l(7) .. toggle TABS"+LF      ; args.push(lbR+lf7);

    /**/ s += "%c "+P_SCRIPT_ID+".l(9) .. toggle EVENT"+LF     ; args.push(lbR+lf8);
    /**/ s += "%c "+P_SCRIPT_ID+".l(0) .. toggle MORE"+LF      ; args.push(lbR+lf0);
    /**/ s += "%c "+P_SCRIPT_ID+".l()  .. logging states"+LF   ; args.push(lbR+lf9);

    /**/ s += "%c "+P_SCRIPT_ID+".c    == clear"+LF            ; args.push(lbR+lf8);

    args[0] = s;

    console.groupCollapsed("%c logn USAGE "+SAD, lbH);
    console.log.apply(console, args);
    console.groupEnd();

    log_object("popup_js",popup_js);
};
/*}}}*/
/*_ log_LOG_MAP {{{*/
let log_LOG_MAP = function()
{
    let args = [""];            let s  = "%c"+P_SCRIPT_ID   ; args.push(lbL+lb0);
    if( LOG_MAP.P_LOG1_MESSAGE  ) { s += "%c 1 MESSAGES "   ; args.push(lbC+lb1); }
    if( LOG_MAP.P_LOG2_ERROR    ) { s += "%c 2 ERROR "      ; args.push(lbC+lb2); }



    if( LOG_MAP.P_LOG6_UI       ) { s += "%c 6 UI "         ; args.push(lbC+lb6); }
    if( LOG_MAP.P_LOG7_TABS     ) { s += "%c 7 TABS "       ; args.push(lbC+lb7); }
    if( LOG_MAP.P_LOG8_STORE    ) { s += "%c 8 STORE "      ; args.push(lbC+lb8); }
    if( LOG_MAP.P_LOG9_EVENT    ) { s += "%c 9 EVENT "      ; args.push(lbC+lb9); }
    if( LOG_MAP.P_LOG0_MORE     ) { s += "%c 0 MORE "       ; args.push(lbC+lb0); }
    if(args.length == 2)          { s += "%c NO LOGGING"    ; args.push(lbR+lf0); }
    else                          { s += "%c "              ; args.push(lbR    ); }

    args[0] = s;
    console.log.apply(console, args);
};
/*}}}*/
/*_ log_ACTIVATED {{{*/
let log_ACTIVATED = function()
{
    return (   LOG_MAP.P_LOG1_MESSAGE
            // LOG_MAP.P_LOG2_ERROR



            || LOG_MAP.P_LOG6_UI
            || LOG_MAP.P_LOG7_TABS
            || LOG_MAP.P_LOG8_STORE
            || LOG_MAP.P_LOG9_EVENT
            // LOG_MAP.P_LOG0_MORE
           );
};
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ UI ● CSS ID ● FILTERS                                                  │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*{{{*/
const BUTTON_START_ID      = "start";

const FILTER3_REMOVE       = "FILTER3_REMOVE";
const FILTER4_CUSTOM       = "FILTER4_CUSTOM";
const FILTER5_RELAX        = "FILTER5_RELAX";
const FILTER6_NONE         = "FILTER6_NONE";

/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ SETTINGS [GET]                                            P_LOG9_EVENT │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*_ [popup_tab_settings] {{{*/
let popup_tab_settings
    = {        start : ""
        , csp_filter : ""
        ,  cancelreq : ""
        ,   typeface : ""
        ,      theme : ""
        ,      color : ""
    };

/*}}}*/
/*_ popup_query_tab {{{*/
/*{{{*/
const P_GET_ACTIVE_TAB_URL  = "GET ACTIVE TAB URL";

let   popup_url;
let   popup_showing_windowId;
/*}}}*/
let popup_query_tab = async function()
{
/*{{{*/
let   caller = "popup_query_tab";
let log_this = LOG_MAP.P_LOG9_EVENT;

if(!chrome ||!chrome.windows) { log("%c(!chrome || !chrome.windows)",lf0); return; } /* stand-alone html page (i.e. CSS tuning) */
/*}}}*/
try {
if( log_this) log_sep_top(P_SCRIPT_ID+"."+caller, "LOG4_TAG");
/*{{{*/

if( log_this) log("QUERY %c popup_url %c"+popup_url+"%c last_activated_tabId %c"+last_activated_tabId
                  ,      lbL+lf6     ,lbR+lf6       ,lbL+lf5                ,lbR                     );
/*}}}*/
    /* MESSAGE TO background_js {{{*/
    let popup_window       =  await chrome.windows.getLastFocused();
    popup_showing_windowId =  popup_window.id || 0;
/*{{{*/
if( log_this) log_object("popup_window",  popup_window);
if( log_this) log(       "popup_showing_windowId=["+ popup_showing_windowId +"]");
/*}}}*/

    let queryInfo = {    active : true /*, currentWindow:true*/ , status: "complete" };
    let   message = {     query : "tabId"
        ,             queryInfo
        ,             popup_showing_windowId
        ,             caller    : P_SCRIPT_ID+"."+caller
    };

/*{{{*/
if( log_this) log("%c"+SD2+"%c QUERY: "+P_GET_ACTIVE_TAB_URL    +": %c" +log_json(message), lbB+lf2, lbR+lf9, lb0);
/*}}}*/
    p_sendMessage(message, caller);
    /*}}}*/
} catch(ex) {
    /*******/ log(P_SCRIPT_ID+"."+caller+":"+ex);
} finally {
if( log_this) log_sep_bot(P_SCRIPT_ID+"."+caller, "LOG4_TAG");
}
};
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ POPUP JUST DISPLAYED ● ONLOAD QUERY                 ● DOMContentLoaded │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
    /*_ DOMContentLoaded_listener {{{*/
    let DOMContentLoaded_listener = function ()
    {
log("●●● DOMContentLoaded_listener");
        /* UI SETUP */
        p_UI_titles_to_tooltips();

        p_EVENT_add_click_listeners();

        /* CLEAR BUTTON_START STATE */
        p_UI_set_checked_id(BUTTON_START_ID, false);

        if(p_status) p_status.title = "@@@";//FIXME

        /* DISABLE CSP FILTER BUTTONS */
        show_id_state(BUTTON_START_ID, false);
        show_id_state(FILTER5_RELAX  , false);
        show_id_state(FILTER4_CUSTOM , false);
        show_id_state(FILTER3_REMOVE , false);

        /* CHECK CURRENT TAB */
        popup_query_tab();
    };
    /*}}}*/
    document.addEventListener("DOMContentLoaded", DOMContentLoaded_listener);

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ [SHOW]                                                       P_LOG6_UI │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*{{{*/
/*  COLOR_MAP {{{*/
let COLOR_MAP = {
      "cc0" : "initial",
      "cc1" : "#964B00",
      "cc2" : "#FF0000",
      "cc3" : "#FFA500",
      "cc4" : "#FFFF00",
      "cc5" : "#9ACD32",
      "cc6" : "#6495ED",
      "cc7" : "#EE82EE",
      "cc8" : "#A0A0A0",
      "cc9" : "#FFFFFF"
   };

/*}}}*/
/*_ show_start {{{*/

let show_start = function(start)
{
/*{{{*/
let   caller = "show_start";
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;

if( log_more) log("%c"+caller+"%c("+start+")", lb6,lb0);
/*}}}*/

    p_UI_set_checked_id(BUTTON_START_ID, (start == true));

    /* SYMBOL */
    let    el = document.getElementById(BUTTON_START_ID); if(!el) return;
    let label = el.nextElementSibling;
    label.innerHTML
        = (start == true) ? "&#10074;&#10074;" /* STOP  SYMBOL */
        :                   "&#9654;"          /* START SYMBOL */
        ;

    /* label */
 //    let label_after = label.nextElementSibling;
 //    if( label_after)
 //        label_after.innerHTML =
 //        = (start == true) ? "stop"
 //        :                   "start"
 //    ;

};
/*}}}*/
/*_ show_csp_filter {{{*/

let show_csp_filter = function(csp_filter)
{
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
if( log_more) log("%c show_csp_filter%c("+csp_filter+")", lb6,lb0);

    p_UI_set_checked_id(FILTER3_REMOVE, (csp_filter == FILTER3_REMOVE));
    p_UI_set_checked_id(FILTER4_CUSTOM, (csp_filter == FILTER4_CUSTOM));
    p_UI_set_checked_id(FILTER5_RELAX , (csp_filter == FILTER5_RELAX ));
};
/*}}}*/
/*_ show_has_CSP {{{*/
let show_has_CSP = function(has_CSP)
{
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
if( log_more) log("%c show_has_CSP%c("+has_CSP+")",lb6,lb0);

    show_id_state(FILTER5_RELAX , has_CSP);
    show_id_state(FILTER4_CUSTOM, has_CSP);
    show_id_state(FILTER3_REMOVE, has_CSP);
};
/*}}}*/
/*_ show_id_state {{{*/
let show_id_state = function(id, enabled)
{
    let el = document.getElementById(id);
    if(!el) return;

    let pl = get_el_parent_with_class(el, "cb_filled_pin");
    if(!pl) return;

    if(enabled) del_el_class(pl, "disabled");
    else        add_el_class(pl, "disabled");
/*
    let tl = document.getElementById("title");
    if( tl) tl.innerHTML = "RTabs Settings<br><i>"+P_SCRIPT_TAG+"</i>";
*/
};
/*}}}*/
/*_ show_cancelreq {{{*/
let show_cancelreq = function(cancelreq)
{
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
if( log_more) log("%c show_cancelreq%c("+cancelreq+")", lb6,lb0);

    p_UI_set_checked_id("cancelreq", (cancelreq == true));
};
/*}}}*/
/*_ show_theme {{{*/
let show_theme = function(theme)
{
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
if( log_more) log("%c show_theme%c("+theme+")",lb6,lb0);

    p_UI_set_checked_id("theme_light", (theme == "light"));
    p_UI_set_checked_id("theme_dark" , (theme == "dark" ));
};
/*}}}*/
/*_ show_color {{{*/
let show_color = function(color)
{
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
if( log_more) log("%c show_color%c("+color+")",lb6,lb0);
    let color_dropdown = document.getElementById("color_dropdown");
    if(!color_dropdown)
    {
if( log_this) log("...!color_dropdown",lb6);
        return;
    }

    /* COLOR_MAP[idx] .. f(color) {{{*/
    let idx = "";
    for(let i=0; i<10; ++i) {
        idx = "cc"+i;

        if(COLOR_MAP[idx] == color)
        {
            color_dropdown.value = idx;
            color_dropdown.style.backgroundColor = color;
            break;
        }
    }
    /*}}}*/
    /* color-badges sync {{{*/
    for(let i=0; i<10; ++i) {
        let id = "cc"+i;

        let el = document.getElementById(id);
        if(el) {
            if(id == idx) add_el_class(el, "selected");
            else          del_el_class(el, "selected");
        }
    }
    /*}}}*/
};
/*}}}*/
/*_ show_typeface {{{*/
let show_typeface = function(typeface)
{
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
if( log_more) log("%c show_typeface%c("+typeface+")",lb6,lb0);

    p_UI_set_checked_id("cursive"  , (typeface == "cursive"   ));
    p_UI_set_checked_id("monospace", (typeface == "monospace" ));
    p_UI_set_checked_id("initial"  , (typeface == "initial"   ));
};
/*}}}*/
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ STORAGE                                                   P_LOG9_EVENT │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*_ p_storage_sync_set {{{*/
let p_storage_sync_set = function(items,_caller)
{
/*{{{*/
let   caller = "p_storage_sync_set";
let log_this =             LOG_MAP.P_LOG8_STORE;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;

//  let items_tag = JSON.stringify(items);
    let items_tag = log_js.log_json_prettify(items);
if(      log_more) log_object(caller+": chrome.storage.sync.set("+items_tag+")", { ...items , callers: LF+get_callers() }, lb0);
else if( log_this) log       ("%c"+caller+"%c"+items_tag+"%c"+_caller
                         ,lbL+lb3    ,lbR+lf8       ,lbH             );
/*}}}*/
    try {
        chrome.storage.sync.set( items );
    }
    catch(error) {
        console.error(P_SCRIPT_ID+" ERROR:"+LF+ error);
        console.trace();
    }
};
/*}}}*/
/*_ p_LOAD_STORE_items {{{*/
let p_LOAD_STORE_items = function(items)
{
    /* LOAD LOG_MAP [popup_js] {{{*/

    /*(____________.____________________!=____________)________.________________=______.________________;*/
    if(typeof items.P_LOG1_MESSAGE      != "undefined") LOG_MAP.P_LOG1_MESSAGE  = items.P_LOG1_MESSAGE  ;
    if(typeof items.P_LOG2_ERROR        != "undefined") LOG_MAP.P_LOG2_ERROR    = items.P_LOG2_ERROR    ;



    if(typeof items.P_LOG6_UI           != "undefined") LOG_MAP.P_LOG6_UI       = items.P_LOG6_UI       ;
    if(typeof items.P_LOG7_TABS         != "undefined") LOG_MAP.P_LOG7_TABS     = items.P_LOG7_TABS     ;
    if(typeof items.P_LOG9_EVENT        != "undefined") LOG_MAP.P_LOG9_EVENT    = items.P_LOG9_EVENT    ;
    if(typeof items.P_LOG8_STORE        != "undefined") LOG_MAP.P_LOG8_STORE    = items.P_LOG8_STORE    ;
    if(typeof items.P_LOG0_MORE         != "undefined") LOG_MAP.P_LOG0_MORE     = items.P_LOG0_MORE     ;
    /*(____________.____________________!=____________)________.________________=______.________________;*/

    LOG_MAP.P_LOG2_ERROR = (typeof items.P_LOG2_ERROR == "undefined") && log_ACTIVATED();

    log_LOG_MAP();

/*{{{*/
let log_this = log_ACTIVATED();

if( log_this) log_sep_top(P_SCRIPT_ID+".STORE ITEMS", "LOG3_TAG");
if( log_this) log_object("items" , items, lf3);
if( log_this) log_sep_bot(P_SCRIPT_ID+".STORE ITEMS", "LOG3_TAG");
/*}}}*/
    /*}}}*/
};
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ UI                                                           P_LOG6_UI │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*{{{*/
/*_ p_UI_titles_to_tooltips {{{*/
/*{{{*/
let p_UI_titles_to_tooltips_done = false;

/*}}}*/
let p_UI_titles_to_tooltips = function()
{
/*{{{*/
let caller = "p_UI_titles_to_tooltips";
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;

    let input_list  = document.getElementsByTagName( "INPUT" );

if( log_this) log_sep_top(P_SCRIPT_ID+"."+caller+": input_list.length=["+ input_list.length+"]", "LOG8_TAG");
if( log_more) log_caller();

let log_items = {};
/*}}}*/
    /* DONE ALREADY {{{*/
    if( p_UI_titles_to_tooltips_done )
        return;

    p_UI_titles_to_tooltips_done = true;
    /*}}}*/
    for(let i = 0; i < input_list.length; ++i) {
        let input =    input_list[i];
        try {
            /* HTML {{{
             ┌────────────────────────────────────────┐
             │                                        │
             │ <span  class="box_container">          │
             │  <div  class="box cb_filled_pin cb_6"> │
             │   <input  id="start" type="checkbox"/> │
             │   <label for="start" >S</label>        │
             │   <div class="label_after"></div>      │
             │  </div>                                │
             │ </span>                                │
             │                                        │
             └────────────────────────────────────────┘
            }}}*/
            /* TITLE FROM INPUT ID {{{*/
            let    title = input.id;
            if(    title.startsWith("CSP_")
                || title.includes  ("_LOG")
            ) {
                let  idx  = title.lastIndexOf("_");
                if(idx > 0)
                    title = title.substring(idx+1);
            }

if( log_more) console.log("..."+(i+1)+" %c"+title+"%c", lb6,lbA);
            /*}}}*/
            /* LABEL HTML {{{*/
            let label             = input.nextElementSibling;
            let label_after       = label.nextElementSibling;
            label_after.innerHTML = get_last_word(title).toLowerCase();

            /*}}}*/
            /* CAPTION HTML {{{*/
            let caption;
            if( caption = label_after.nextElementSibling)
            {
                caption.innerHTML = p_UI_get_badge_for_title(title);
                log_items[i+1]    = { title , caption: caption.innerHTML };
            }
            /*}}}*/
        }
        catch(ex) { console.warn("*** "+caller+": "+ ex); }
    }
if( log_this) log_object(caller+": items", log_items, lbH+lf8, false);
if( log_this) log_sep_bot(P_SCRIPT_ID+"."+caller+": input_list.length=["+ input_list.length+"]", "LOG8_TAG");
};
/*}}}*/
/*_ p_UI_get_badge_for_title {{{*/
let p_UI_get_badge_for_title = function(title)
{
    switch(title) {

        case BUTTON_START_ID : return "START-STOP the extension on this page";

        case FILTER3_REMOVE  : return "Remove CSP completely from this page";
        case FILTER4_CUSTOM  : return "Apply CUSTOM CSP filter";
        case FILTER5_RELAX   : return "RELAX this page CSP to make it accept this extension";

        case "cancelreq"     : return "Block all outgoing requests from this page";
        case "LOG_IPC"       : return "Toggle LOC_IPC .. (dom_load or dom_tools)";

        default              : return '<h2>TODO</h2>Fetch and return a captionfor "'+ title +'"'; /* eslint-disable-line quotes */
    }

};
/*}}}*/
/*_ p_UI_set_checked_id {{{*/
let p_UI_set_checked_id = function(id, checked)
{
/*{{{*/
let caller = "p_UI_set_checked_id";
let log_this = LOG_MAP.P_LOG9_EVENT || !chrome.runtime;

/*}}}*/

    let el = document.getElementById(id); if(!el ) return;

    el.checked = checked;

if( log_this) log("%c"+caller+"%c"+id+"%c →→→ "+checked
                  ,lbL+lf9    ,lbC    ,lbR+lbX[ checked ? 5:2]);
};
/*}}}*/
/*_ p_UI_show_message {{{*/
/*{{{*/
const CSS_COLOR_ERROR      = "#FF6666";
const CSS_COLOR_PENDING    = "#FFDD66";
const CSS_COLOR_ANSWER     = "#66FF66";
const CSS_COLOR_UNKNOWN    = "#6666FF";

const P_SHOW_MESSAGE_DELAY = 3000;
let p_status;

/*}}}*/
let p_UI_show_message = function(message)
{
let log_this = log_ACTIVATED();
    log_this=true;//FIXME
    /* [p_status] CREATE {{{*/
    if(!p_status )
    {
        p_status                   = document.createElement("P");
        p_status.id                = "p_status";

        p_status.addEventListener("click", (e) => e.target.classList.toggle("collapsed"));

        document.body.insertBefore(p_status, null); // i.e. at the end
    }
    /*}}}*/
    /*  [p_status] UPDATE {{{*/
    p_status.title
        = log_js.log_object_val_format(message)
        .  replace(   /\u21B5 */g, LF_TAB+"\u21B5 ")
        .  replace(        /← */g, LF_TAB+"← "     )
        .  replace(        /↑ */g, LF_TAB+" ↑ "    )
        .  replace(       /^ +/gm,           ""    )
        .  replace(    /^\. *●/gm,          "●"    )
        .  replace(       /^\./gm,        " - "    )
    ;
if( log_this) console.log(p_status.title);

    p_status.innerHTML
        = (    message.REPLY
           ||  message.caller
           ||  message.status
           ||  message.title
           || p_status.title
          )
        .  replace(LF,"<br>");

    del_el_class(p_status, "collapsed");

    p_status.style.color
        = (message.type ==   "error") ? CSS_COLOR_ERROR
        : (message.type == "pending") ? CSS_COLOR_PENDING
        : (message.type ==  "answer") ? CSS_COLOR_ANSWER
        :                               CSS_COLOR_UNKNOWN
    ;


    if(message.type == "answer")
        setTimeout(() => {
            if( p_status ) add_el_class(p_status, "collapsed");
        }, P_SHOW_MESSAGE_DELAY);
    /*}}}*/
};
/*}}}*/
/*_ p_UI_show_error {{{*/
/*{{{*/
let p_error;
let p_reload_button;
let p_logging_label;

/*}}}*/
let p_UI_show_error = function(reason="NO reason")
{
/*{{{*/
let log_this = log_ACTIVATED();

/*}}}*/
    /* [p_error] CREATE {{{*/

    if(!p_error )
    {
        /* [p_error] {{{*/
        p_error       = document.createElement("P");
        p_error.id    = "p_error";

        let settings_div        = document.getElementById("settings_div");
        settings_div.appendChild( p_error );

        /*}}}*/
        /* [p_reload_button] {{{*/
        p_reload_button             = document.createElement("BUTTON");
        p_reload_button.id          = "reload_button";
        p_reload_button.title       = LF
            +                         "Reloads the current page"+LF
            +                         " using the selected location method bellow";
        p_reload_button.innerHTML   = "<b>&#x27F3;</b> &nbsp; Reload Page &nbsp; <b>&#x27F3;</b>";
        settings_div.appendChild( p_reload_button );

        p_reload_button.addEventListener("click", p_reload_button_listener);
        /*}}}*/
        /* [loggging] {{{*/

        let logging_checkbox      = document.createElement("INPUT");
        logging_checkbox.type     = "checkbox";
        logging_checkbox.id       = "logging";

        p_logging_label           = document.createElement("LABEL");
        p_logging_label.id        = "logging_label";
        p_logging_label.for       = logging_checkbox.id;
        p_logging_label.innerText = "logging only";
        p_logging_label.title
            = "DO NOT RELOAD"+LF
            + "● just log the reload command in the content page console";

        p_logging_label.appendChild( logging_checkbox );

        settings_div   .appendChild( p_logging_label  );
        /*}}}*/
    }
    /*}}}*/
    /* [p_error] MESSAGE {{{*/
    let msg_HTML
        = "Page reload required"
        + "<br>"+SYMBOL_CONSTRUCTION+" "+reason+ " "+SYMBOL_CONSTRUCTION
//      + (log_this ? "<br>● log_ACTIVATED() ●" : "")
    ;

    p_error.innerHTML = msg_HTML;
    /*}}}*/
    /* [p_error] SHOW {{{*/
    p_error.style.display = "block";
    p_reload_button  .style.display = "inline-block";
    p_logging_label  .style.display = "inline-block";

if( log_this ) log("%c"+p_error.innerHTML.replace("<br>"," "), lbb);
if( log_this ) log_caller();
    /*}}}*/
};
/*}}}*/
/*_ p_UI_hide_error {{{*/
let p_UI_hide_error = function()
{
    if( p_error )
    {
        p_error          .style.display = "none";
        p_reload_button  .style.display = "none";
        p_logging_label  .style.display = "none";
    }
};
/*}}}*/
/*_ p_reload_button_listener {{{*/
let p_reload_button_listener = function(e) /* eslint-disable-line no-unused-vars */
{
    let  logging_el = document.getElementById  ("logging");
    let  logging = (logging_el && logging_el.checked);

//  p_sendMessage_handler({ cmd:"reload" , logging }, "p_reload_button_listener");
    p_sendMessage        ({ cmd:"reload" , logging }, "p_reload_button_listener");
};
/*}}}*/
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ EVENT                                                     P_LOG9_EVENT │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*{{{*/
/*_ p_EVENT_add_click_listeners {{{*/
/*{{{*/
let p_EVENT_add_click_listeners_added;

/*}}}*/
let p_EVENT_add_click_listeners = function()
{
/*{{{*/
let log_this = LOG_MAP.P_LOG9_EVENT;

if( log_this) log("%c p_EVENT_add_click_listeners: p_EVENT_add_click_listeners_added=["+p_EVENT_add_click_listeners_added+"]", lb8);
/*}}}*/
    if( p_EVENT_add_click_listeners_added ) return;
    /**/p_EVENT_add_click_listeners_added = true;
    /* [close_span] 'click' {{{*/
    let close_span          = document.getElementById("close_span");
    close_span.addEventListener("click", (e) => { /* eslint-disable-line no-unused-vars */
        window.close();
    });
    /*}}}*/
    /* [settings_div] 'click' {{{*/
    let settings_div          = document.getElementById("settings_div");
    settings_div.addEventListener("click", (e) => {
        p_EVENT_click_CB(e);
    });
    /*}}}*/
    /* [popup_settings_div] 'click' {{{*/
    let popup_settings_div    = document.getElementById("popup_settings_div");
    popup_settings_div.addEventListener("click", (e) => {
        p_EVENT_click_CB(e);
    });
    /*}}}*/
    /* [color_dropdown] 'click' {{{*/
    let color_dropdown        = document.getElementById("color_dropdown");
    if( color_dropdown )
    {
        color_dropdown.addEventListener("click", () => {
if(log_this) log("color_dropdown.change: color_dropdown.value=["+color_dropdown.value+"]");

            let   idx = color_dropdown.value;
            let value = COLOR_MAP[idx];
            p_EVENT_click_set_name_value("color", value);

        });
    }
    /*}}}*/
    /* [color_badge_container] 'click' {{{*/
    let color_badge_container = document.getElementById("color_badge_container");
    if(color_badge_container)
    {
        color_badge_container.addEventListener("click", (e) => {
if(log_this) log("color_badge_container.click: e.target.id=["+e.target.id+"]");

            let   idx = e.target.id;
            let value = COLOR_MAP[idx];
            p_EVENT_click_set_name_value("color", value);
        });
    }
    /*}}}*/

//  chrome.runtime.onUnload.addListener

/*{{{
//▼ NEVER CALLED ▼
    chrome.windows.onRemoved.addListener((windowId) => {
        log("%c chrome.runtime.onRemoved", lbb);
        log_object("onRemoved", { popup_showing_windowId, windowId }, lb4, false);
        if(windowId == popup_showing_windowId) p_sendMessage({ removed: "popup_window" }, "onRemoved");
        else                                   p_sendMessage({ removed:  "some_window" }, "onRemoved");
    }, {filters : ["popup"]});
//▲ NEVER CALLED ▲
}}}*/
/*{{{
    chrome.windows.onFocusChanged.addListener((windowId) => {
        log("%c chrome.runtime.onFocusChanged");
        log_object("onFocusChanged", { popup_showing_windowId, windowId }, lb4, false);
        if(windowId != popup_showing_windowId) p_sendMessage({   focus:          "OUT" }, "onFocusChanged");
        else                                   p_sendMessage({   focus:           "IN" }, "onFocusChanged");
    });
}}}*/
// see javascript/bg_message.js
    if(chrome && chrome.runtime) chrome.runtime.connect({ name: "popup" });
};
/*}}}*/
/*_ p_EVENT_click_CB {{{*/
let p_EVENT_click_CB = function(e)
{
/*{{{*/
let caller = "p_EVENT_click_CB";
let log_this = LOG_MAP.P_LOG9_EVENT || !chrome.runtime;

/*}}}*/
    /* UI target HTMLElement {{{*/
    let check_el
        =  e.target              .getElementsByTagName("INPUT")[0]
        || e.target.parentElement.getElementsByTagName("INPUT")[0]
    ;
    if(!check_el                ) return;
//log("check_el.id=["+check_el.id+"] ● check_el.parentElement.className=["+check_el.parentElement.className+"]");//FIXME
    if( check_el.parentElement.classList.contains("disabled")) return;
    if( check_el.id == "logging") return;

    /* script check handling */
    if( e.preventDefault  ) e.preventDefault ();
    if( e.stopPropagation ) e.stopPropagation();

    let check_el_id = check_el.id;

if(log_this) log("%c"+caller+"%c"+check_el_id+"%c was "+check_el.checked
                 ,lbL        ,lbC             ,lbR+lbX[check_el.checked ? 5:2]);
    /*}}}*/
    /* ┌────────────────────────────────────────────────────────────────────┐ */
    // │ [popup.html] stand-alone in the browser                            │ */
    /* └────────────────────────────────────────────────────────────────────┘ */
    /*{{{*/
    if( !chrome.runtime )
    {
        check_el.checked = !check_el.checked; // popup.html stand-alone in the browser

if(log_this) log("%c"+caller+"%c"+check_el_id+"%c →→→ "+check_el.checked
                 ,lbL        ,lbC             ,lbR+lbX[ check_el.checked ? 5:2]);
        return;
    }
    /*}}}*/
    /* ┌────────────────────────────────────────────────────────────────────┐ */
    /* │ PREREQUISITES: [last_activated_tabId] [popup_url]                  │ */
    /* └────────────────────────────────────────────────────────────────────┘ */
    /* if   [last_activated_tabId]   [popup_url] {{{*/
    if(!last_activated_tabId || !popup_url)
    {
        popup_query_tab();
    }
    /*}}}*/
    /* else [start] {{{*/
    else if(check_el_id           == BUTTON_START_ID)
    {
        /* TOGGLE start */
        let value = check_el.checked ? false : true;

        p_EVENT_click_set_name_value(BUTTON_START_ID, value);
    }
    /*}}}*/
    /* else [csp_filter] .. [start ON] {{{*/
    else if( (check_el_id    == FILTER3_REMOVE)
        ||   (check_el_id    == FILTER4_CUSTOM)
        ||   (check_el_id    == FILTER5_RELAX )
    ) {
        /* SET OR TOGGLE [csp_filter] */
        let csp_filter = check_el.checked ? "" /* TOGGLE-OFF */
            :            check_el_id           /* TOGGLE-ON  */
        ;

//      if(csp_filter && !popup_tab_settings.start)
//      {
//          p_EVENT_click_set_name_value(BUTTON_START_ID, true);
//      }

        p_EVENT_click_set_name_value(BUTTON_START_ID, true);
        p_EVENT_click_set_name_value("csp_filter", csp_filter);
    }
    /*}}}*/
    /* else [cancelreq] {{{*/
    else if(check_el_id == "cancelreq")
    {
        let value = check_el.checked ? false : true;
        p_EVENT_click_set_name_value("cancelreq", value);
    }
    /*}}}*/
    /* else [theme] {{{*/
    else if((check_el_id == "theme_dark") || (check_el_id == "theme_light"))
    {
        let value = check_el.checked ? "light" : "dark"; /* just toggle current setting */
        p_EVENT_click_set_name_value("theme", value);
    }
    /*}}}*/
    /* else [typeface] {{{*/
    else if((check_el_id == "cursive") || (check_el_id == "monospace") || (check_el_id == "initial"))
    {
        let value = check_el_id;
        p_EVENT_click_set_name_value("typeface", value);
    }
    /*}}}*/
    /* ...others {{{*/
    else
    {
if(LOG_MAP.P_LOG2_ERROR) log(P_SCRIPT_ID+": ...%c ["+check_el_id+"] OUT OF STORE", lb2);

        check_el.checked = !check_el.checked;
if(log_this) log("%c"+caller+"%c"+check_el_id+"%c →→→ "+check_el.checked
                 ,lbL        ,lbC             ,lbR+lbX[ check_el.checked ? 5:2]);

        let value        =  check_el.checked ? true : false;
        p_EVENT_click_set_name_value(   check_el_id, value);
    }
    /*}}}*/
};
/*}}}*/
/*_ p_EVENT_click_set_name_value .. [cancelreq color csp_filter start theme typeface] {{{*/
let p_EVENT_click_set_name_value = function(name, value)
{
/*{{{*/
//t caller = "p_EVENT_click_set_name_value";
let log_this = LOG_MAP.P_LOG9_EVENT;

if( log_this) log("%c p_EVENT_click_set_name_value(name=[%c"+name+"%c], value=[%c"+value+"%c])",lb8, lb0,lbA , lb0,lbA);
/*}}}*/
    switch(name) {
        /* no message for local properties */
        case "typeface": /*{{{*/
        {
//          show_typeface(popup_tab_settings.typeface);
            let message = { [name] : value };
            p_sendMessage(message, "["+name+" "+value+"]");
        }
        break;
        /*}}}*/
        case "color": /*{{{*/
        {
 //         show_color(popup_tab_settings.color);
            let message = { [name] : value };
            p_sendMessage(message, "["+name+" "+value+"]");
        }
        break;
        /*}}}*/
        /* send message for extension properties */
        case BUTTON_START_ID: /*{{{*/
        {
//          show_start(popup_tab_settings.start); // response dependent
            let message = { [name] : value };
            p_sendMessage(message, "["+name+" "+value+"]");
        }
        break;
        /*}}}*/
        case "csp_filter": /*{{{*/
        {
//          show_csp_filter(popup_tab_settings.csp_filter); // response dependent
            let message = { [name] : value };
            p_sendMessage(message, "["+name+" "+value+"]");
        }
        break;
        /*}}}*/
        case "cancelreq": /*{{{*/
        {
//          show_cancelreq(popup_tab_settings.cancelreq); // response dependent
            let message = { [name] : value };
            p_sendMessage(message, "["+name+" "+value+"]");
        }
        break;
        /*}}}*/
        case "theme": /*{{{*/
        {
//          show_theme(popup_tab_settings.theme); // response dependent
            let message = { [name] : value };
            p_sendMessage(message, "["+name+" "+value+"]");
        }
        break;
        /*}}}*/
        default: /*{{{*/
        {
if(log_this) log("...case default");

            let message = { [name] : value };
            p_sendMessage(message, "["+name+" "+value+"]");

        }
        /*}}}*/
    }
};
/*}}}*/
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ MESSAGE TO BACKGROUND SCRIPT                            P_LOG1_MESSAGE │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/* SEND MESSAGE {{{*/
/*_ p_sendMessage {{{*/
/*{{{*/
const P_SENDMESSAGE_DELAY_MS = 100;
let   p_sendMessage_timer;
let   p_sendMessage_args = { message:{} , _caller:null };

/*}}}*/
let p_sendMessage = function(message,_caller)
{
/*{{{*/
let   caller = "p_sendMessage";
let log_this = LOG_MAP.P_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;

if( log_more) log_caller();
if( log_this) log       ("%c"+caller, lb1);
if( log_this) log_object("message",message);
/*}}}*/
    if( !chrome.runtime ) return;
    /* ADD MESSAGE RESPONSE LISTENERS {{{*/
    if(!p_addMessageListener_has_been_called)
        p_addMessageListener();

    /*}}}*/
    /* INTERRUPT PENDING MESSAGE {{{*/
    if(p_sendMessage_timer) clearTimeout( p_sendMessage_timer );

    /*}}}*/
    /* MERGE PENDING MESSAGES {{{*/
    let message_merged = {};
    /* copy pending       */ Object.keys(p_sendMessage_args.message).filter((key) => message_merged[key] = p_sendMessage_args.message[key]);
    /* add this message   */ Object.keys(                   message).filter((key) => message_merged[key] =                    message[key]);
//log_object("message_merged",message_merged);

    let callers_merged
        = p_sendMessage_args._caller
        ? p_sendMessage_args._caller+"+"+_caller
        :                                _caller
    ;
//log("callers_merged=["+callers_merged+"]");

    p_sendMessage_args .message         = { ...message_merged };
    p_sendMessage_args._caller          =      callers_merged  ;

if( log_this) log_object("p_sendMessage_args", p_sendMessage_args);
    /*}}}*/
    /* SCHEDULE MESSAGE (DEBOUNCE) {{{*/
    p_sendMessage_timer
        = setTimeout( p_sendMessage_handler
                    , P_SENDMESSAGE_DELAY_MS
//                  , Object.values( p_sendMessage_args )
                    ,                p_sendMessage_args.message
                    ,                p_sendMessage_args._caller
                    );
//console.log("Object.values(p_sendMessage_args):");
//console.dir( Object.values(p_sendMessage_args)  );
    /*}}}*/
};
/*}}}*/
/*_ p_sendMessage_handler {{{*/
let p_sendMessage_handler = function(message,_caller)
{
/*{{{*/
let   caller = "p_sendMessage_handler";
let log_this = LOG_MAP.P_LOG1_MESSAGE;

    message.tabId  = last_activated_tabId;
    message.caller = P_SCRIPT_ID+"."+_caller;

if( log_this) log_object(caller+" ➔ "+p_get_message_tag(message),message);
/*}}}*/
    /* CLEAR PENDING TIMER ID */
    p_sendMessage_timer = null;

    chrome.runtime.sendMessage(message, p_sendMessage_response_handler);

    /* CLEAR HANDELED ARGS */
    p_sendMessage_args = { message: {} , _caller: null };

/* XXX goes to content-script - useless XXX {{{
    let ipc_json  = JSON.stringify( message );

    let   script =   "window.postMessage('"+ipc_json+"', '*');";
if( log_this) log("...calling chrome.tabs.executeScript%c({ code : '"+script+"' }):", lb7);
    chrome.tabs.executeScript({ code : script });
}}}*/
};
/*}}}*/
/*_ p_sendMessage_response_handler {{{*/
let p_sendMessage_response_handler = function(response, sender, response_handler)
{
/*{{{*/
let   caller = "p_sendMessage_response_handler";
let log_this = LOG_MAP.P_LOG1_MESSAGE;

if( log_this) log_object(caller+" ➔ "+p_get_response_tag(response), response);
/*}}}*/
    if( response )
        p_onMessage_CB(response, sender, response_handler);

    else
        log(caller+"%c NO RESPONSE %c ➔ %c To be expected when target process is not running"
            , lbb+lbH+lf3    ,lbL+lf5 , lbR+lf5);
};
/*}}}*/
/*}}}*/
/* LISTEN RESPONSE {{{*/
/*_ p_addMessageListener {{{*/
/*{{{*/
let p_addMessageListener_has_been_called;

/*}}}*/
let p_addMessageListener = function()
{
/*{{{*/
let   caller = "p_addMessageListener";
let log_this = log_ACTIVATED();

if( log_this) log(caller);
/*}}}*/
    p_addMessageListener_has_been_called = true;
    /*....................SCRIPT_ID..NAMESPACE.......FUNCTIONALITY......................PERMISSION.*/
//  if(!log_permission(P_SCRIPT_ID, chrome.runtime, "Listening to Extension messages", "runtime", log_this) )
//      return;

    chrome.runtime.onMessage.addListener( p_onMessage_CB );
};
/*}}}*/
/*_ p_onMessage_CB {{{*/
/*{{{*/
//const APPLIED_FILTER3_REMOVED = "HEADER CSP: REMOVED";
//const APPLIED_FILTER4_CUSTOM  = "HEADER CSP: CUSTOM";
//const APPLIED_FILTER5_RELAXED = "HEADER CSP: RELAXED";

let last_activated_tabId;

/*}}}*/
let p_onMessage_CB = function(message, sender, response_handler)
{
/*{{{*/
let   caller = "p_onMessage_CB";
let log_this = LOG_MAP.P_LOG1_MESSAGE && !message.set_log_tag;
    log_this=true;//FIXME
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
    log_more=true;//FIXME

let log_tag  = "LOG8_TAG";
/*}}}*/
/* IGNORE MESSAGE FROM SELF {{{*/
    if(   !message.handler
       &&  message.caller
       &&  message.caller.startsWith(P_SCRIPT_ID)
      ) {
        let label   = P_SCRIPT_ID+"."+caller+" IGNORING MESSAGE FROM SELF .. "+message.caller;
if( log_this) {
    log_sep_top(label,log_tag);
    log_object("message", message, lf8, false);
    log_sep_bot(label,log_tag);
}
        return false; // whether to wait for an async response .. or not
    }
/*}}}*/
    /* LOGGING [message.cmd == "console_clear"] {{{*/
    if( message.cmd == "console_clear")
    {
        log_js.log_console_clear(message.preserve, caller);

        if(     response_handler) response_handler({ caller , handling: message.cmd });
        return (response_handler != null); // whether to wait for an async response .. or not
    }
    /*}}}*/
    /* LOGGING [message.set_log_tag] {{{*/
    if(typeof   message.set_log_tag != "undefined")
    {
if( log_this) log("SET %c set_log_tag %c "+message.set_log_tag, lbL+lf9, lbR+lf5);

        log_tag = p_onMessage_CB_SET_LOG_MAP(message, response_handler);
    }
    else if(response_handler)
    {
        response_handler({ caller , expected: "message.set_log_tag" , got: message.cmd });
    }
    /*}}}*/
    /* LOGGING REPLY {{{*/
    if(typeof   message.REPLY != "undefined")
    {
if( log_this) log("SET %c REPLY %c "+message.REPLY, lbL+lf9, lbR+lf5);

        p_UI_show_message( message.REPLY );
    }
    /*}}}*/
try {
/* LOG {{{*/
//if( log_this) log_console_clear();

    let message_tags = p_get_response_tag(message);

if( log_this) log_sep_top(caller+" .. "+strip_CR_LF(message_tags), log_tag);
if( log_more) log_object ("...message"          , message, lbH+lf1);
if( log_more) log_object ("...sender"           , sender , lbH+lf8);
if( log_more) log        ("...response_handler:", response_handler);
/*}}}*/
//  MESSAGE ITEMS {{{
// ┌─────────────────┬─────────────────┬───────────────┬───────────────┐
// │ LOGGING         │ ACTIONS         │  ATTRIBUTES   │ SETTINGS      │
// │ → preserve      │ → query         │  → tabId      │ → start       │
// │ → set_log_state │ → cmd           │  → url        │ → csp_filter  │
// │ → set_log_tag   │ → caller        │  → title      │ → cancelreq   │
// │                 │                 │  → status     │ → theme       │
// │                 │                 │  → has_CSP    │ → typeface    │
// │                 │                 │               │ → color       │
// └─────────────────┴─────────────────┴───────────────┴───────────────┘
//}}}

    // ACTIONS
    /*        [message.query] {{{*/
    if(typeof message.query       != "undefined")
    {
if( log_this) log("ACTION %c query %c "+message.query, lbL+lf9, lbR+lf5);

    }
    /*}}}*/
    /*        [message.cmd] {{{*/
    if(typeof message.cmd       != "undefined")
    {
if( log_this) log("ACTION %c cmd %c "+message.cmd, lbL+lf9, lbR+lf5);

    }
    /*}}}*/
    /*        [message.caller] {{{*/
    if(typeof message.caller       != "undefined")
    {
if( log_this) log("ACTION %c caller %c "+message.caller, lbL+lf9, lbR+lf5);

    }
    /*}}}*/

    // ATTRIBUTES
    /*             [message.tabId] AND [message.url] {{{*/
    if(    (typeof message.tabId != "undefined")
        && (typeof message.url   != "undefined")
    ) {
if( log_ACTIVATED() ) log("SET %c tabId %c"+message.tabId+"%c  URL %c "+message.url
                         ,    lbL+lf9 ,lbR+lf5,          lbL+lf9 ,lbR+lf5         );

        last_activated_tabId = message.tabId;
        popup_url            = message.url;

//      bg_settings_tabs6_get_url_settings();
    }
//    else {
//if( log_ACTIVATED() ) log("%c"+SD2+"%c RESPONSE TO: "+P_GET_ACTIVE_TAB_URL+" %c NO ACTIVE TAB URL", lbB+lf4, lbb+lbL+lf0, lbb+lbR+lf0);
////      last_activated_tabId = undefined;
////      popup_url            = undefined;
//    }
//if( log_this) log("URL %c popup_url %c"+popup_url+"%c last_activated_tabId %c"+last_activated_tabId
//                  ,    lbL+lf6     ,lbR+lf6       ,lbL+lf5                ,lbR                     );
    /*}}}*/
    /*       [message.title] {{{*/
    if(typeof message.title       != "undefined")
    {
if( log_this) log("SET %c title %c "+message.title, lbL+lf9, lbR+lf5);

        document.body.title = message.title;
    }
    /*}}}*/
    /*       [message.has_CSP] {{{*/
    if(typeof message.has_CSP != "undefined")
    {
if( log_this) log("SET %c has_CSP %c "+message.has_CSP, lbL+lf9, lbR+lf6);

    show_has_CSP( message.has_CSP );
    }
    /*}}}*/

    // SETTINGS
    /*       [message.start] {{{*/
    if(typeof message.start       != "undefined")
    {
if( log_this) log("SET %c start %c "+message.start, lbL+lf9, lbR+lf5);

        popup_tab_settings.start = message.start;
        show_start(message.start);
    }
    /*}}}*/
    /*       [message.csp_filter] {{{*/
    if(typeof message.csp_filter  != "undefined")
    {
if( log_this) log("SET %c csp_filter %c "+(message.csp_filter || "NO CSP FILTER"), lbL+lf9, lbR+lf5);

        popup_tab_settings.csp_filter = message.csp_filter;
        show_csp_filter(message.csp_filter);
    }
    /*}}}*/
    /*       [message.cancelreq] {{{*/
    if(typeof message.cancelreq   != "undefined")
    {
if( log_this) log("SET %c cancelreq %c "+message.cancelreq, lbL+lf9, lbR+lf5);

        popup_tab_settings.cancelreq  = message.cancelreq;
        show_cancelreq(message.cancelreq);
    }
    /*}}}*/
    /*       [message.color] {{{*/
    if(typeof message.color   != "undefined")
    {
if( log_this) log("SET %c color %c "+message.color, lbL+lf9, lbR+lf5);

        popup_tab_settings.color  = message.color;
        show_color(message.color);
    }
    /*}}}*/
    /*       [message.theme] {{{*/
    if(typeof message.theme   != "undefined")
    {
if( log_this) log("SET %c theme %c "+message.theme, lbL+lf9, lbR+lf5);

        popup_tab_settings.theme  = message.theme;
        show_theme(message.theme);
    }
    /*}}}*/
    /*       [message.typeface] {{{*/
    if(typeof message.typeface   != "undefined")
    {
if( log_this) log("SET %c typeface %c "+message.typeface, lbL+lf9, lbR+lf5);

        popup_tab_settings.typeface  = message.typeface;
        show_typeface(message.typeface);
    }
    /*}}}*/
/*{{{*/
if( log_this) log_object("popup_tab_settings ["+(popup_url || "NO URL")+"]", popup_tab_settings, lb0);

/*}}}*/
    // RELOAD REQUIRED {{{*/
    let reload_required
        = !last_activated_tabId         ? "NO tabId"
        : !message.status               ? "NO message.status"
//      :  message.status != "complete" ? "(status != complete)"
//      : !popup_url                    ? "NO URL"   // not an error .. a query will fix it
        :                                ""
    ;

    if(reload_required)
        p_UI_show_error( reload_required );
    else
        p_UI_hide_error();

    /*}}}*/
    /* BUTTON_START STATE {{{*/
    let ignored_url = message.title && message.title.includes("IGNORED URL");

    show_id_state(BUTTON_START_ID, !reload_required && !ignored_url);

    /*}}}*/

    // RETURN
    /*{{{*/
    if(log_more) log("...return (response_handler != null)=["+(response_handler != null)+"]");

    return (response_handler != null); // whether to wait for an async response .. or not
    /*}}}*/

} finally {
    p_UI_show_message( message );
if(log_this) log_sep_bot(P_SCRIPT_ID+"."+caller, log_tag);
}
};
/*}}}*/
/*_ p_onMessage_CB_SET_LOG_MAP {{{*/
let p_onMessage_CB_SET_LOG_MAP = function(message, response_handler=null)
{
    /* [message.set_log_tag] .. [LOG_MAP] {{{*/
    if( message.set_log_tag)
    {
        switch(message.set_log_tag)
        {
        case "P_LOG1_MESSAGE"   : LOG_MAP.P_LOG1_MESSAGE    = message.set_log_state; break;
        case "P_LOG2_ERROR"     : LOG_MAP.P_LOG2_ERROR      = message.set_log_state; break;
        //......LOG3
        //......LOG4
        //......LOG5
        case "P_LOG6_UI"        : LOG_MAP.P_LOG6_UI         = message.set_log_state; break;
        case "P_LOG7_TABS"      : LOG_MAP.P_LOG7_TABS       = message.set_log_state; break;
        case "P_LOG8_STORE"     : LOG_MAP.P_LOG8_STORE      = message.set_log_state; break;
        case "P_LOG9_EVENT"     : LOG_MAP.P_LOG9_EVENT      = message.set_log_state; break;
        case "P_LOG0_MORE"      : LOG_MAP.P_LOG0_MORE       = message.set_log_state; break;
        default                 : return "LOG8_TAG";
        }

        /* REPLY WITH HANDLING CALLEE RESPONSE */

        LOG_MAP.P_LOG2_ERROR = (message.set_log_tag != "P_LOG2_ERROR") && log_ACTIVATED();

        /* P_LOG2_ERROR may have changed .. sync with caller */
        if( response_handler )
            response_handler({ P_LOG2_ERROR: LOG_MAP.P_LOG2_ERROR });

        log_LOG_MAP();

        return "LOG9_TAG";
    }
    /*}}}*/
    return "LOG0_TAG";
};
/*}}}*/
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ UTIL                                                       P_LOG7_TABS │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*{{{*/
/*_ set add del has _el_class {{{*/
//t set_el_class     = function(el, className) {                                            el.className       = className  ; };
let add_el_class     = function(el, className) { if(   !el.classList.contains( className )) el.classList.add   ( className ); };
let del_el_class     = function(el, className) { if(    el.classList.contains( className )) el.classList.remove( className ); };
//t has_el_class     = function(el, className) { return el.classList.contains( className );                                   };

/*}}}*/
/*_ get_el_parent_with_class {{{*/
let get_el_parent_with_class = function(el, className)
{
    while( el != null) {
        if(el.classList.contains(className)) return el;
        else                                        el = el.parentElement;
    }
    return null;
};
/*}}}*/
/*_ get_last_word {{{*/
let regexp_LW = new RegExp(".*[\\s_]");
let get_last_word = function(text)
{
    return text
        .   trim()
        .   replace(regexp_LW, "")
    ;
};
/*}}}*/
/*_ p_get_message_tag {{{*/
let p_get_message_tag = function(o)
{
    /* RETURN ONE OF MANY */
    if(typeof o.set_log_tag != "undefined") return "set_log_tag "+o.set_log_tag;
    if(typeof o.query       != "undefined") return       "query "+o.query      ;
    if(typeof o.cmd         != "undefined") return         "cmd "+o.cmd        ;
    if(typeof o.start       != "undefined") return       "start "+o.start      ;
    if(typeof o.csp_filter  != "undefined") return  "csp_filter "+o.csp_filter ;
    if(typeof o.cancelreq   != "undefined") return   "cancelreq "+o.cancelreq  ;
    if(typeof o.tabId       != "undefined") return       "tabId "+o.tabId      ;
//  if(typeof o.caller      != "undefined") return      "caller "+o.caller     ;
    /*...................................*/ return JSON.stringify(o);

};
/*}}}*/
/*_ p_get_response_tag {{{*/
let p_get_response_tag = function(o)
{
    if(!o) return "NO RESPONSE";

    /* RETURN ALL OF MANY */
    let response_tag
        = ""
        + ((typeof o.query       != "undefined") ?         " query " +o.query       : "")
//      + ((typeof o.cmd         != "undefined") ?           " cmd " +o.cmd         : "")
        + ((typeof o.set_log_tag != "undefined") ? " ● set_log_tag " +o.set_log_tag : "")
        + ((typeof o.tabId       != "undefined") ?       " ● tabId " +o.tabId       : "")
        + ((typeof o.start       != "undefined") ?       " ● start " +o.start       : "")
        + ((typeof o.csp_filter  != "undefined") ?  " ● csp_filter " +o.csp_filter  : "")
        + ((typeof o.cancelreq   != "undefined") ?   " ● cancelreq " +o.cancelreq   : "")
//      + ((typeof o.caller      != "undefined") ?      " ● caller " +o.caller      : "")
        + ((typeof o.REPLY       != "undefined") ?       " ● REPLY " +o.REPLY       : "")
    ;
    if(!response_tag) {
//      response_tag = JSON.stringify(o);
        response_tag = log_js.log_json_prettify(o);
    }
    return response_tag;

};
/*}}}*/
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ EXPORT PUBLIC POPUP FUNCTIONS                                          │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/* init c l ● sg pcb {{{*/
let init = () => { chrome.storage.sync.get(null, p_LOAD_STORE_items); };
let    c = log_js.clear;
/*     l = {{{*/
//t    l = logn;
let    l = function(args)
{
    logn(args);

    let s = ""; Object.keys(p).forEach((f) => s += LF+"● p."+f+((typeof p[f] == "function") ? "()":""));

    console.log(P_SCRIPT_ID+" Devtools console commands:"+ s);
};
/*}}}*/

let sg = function() { chrome.storage.sync.get(null, (items) => log_object(P_SCRIPT_ID+": local.storage",items, lf9, false)); };
let pcb = p_onMessage_CB;
/*}}}*/
// TEST_SETTINGS {{{

const TEST_SETTINGS_OFF  = { start: false , csp_filter: ""             };
const TEST_SETTINGS_ON   = { start: true  , csp_filter: ""             };
const TEST_SETTINGS_CSP3 = { start: true  , csp_filter: FILTER3_REMOVE };
const TEST_SETTINGS_CSP4 = { start: true  , csp_filter: FILTER4_CUSTOM };
const TEST_SETTINGS_CSP5 = { start: true  , csp_filter: FILTER5_RELAX  };
const TEST_SETTINGS_CLEAR
    = { start      : ""             // false
      , csp_filter : ""             // FILTER3_REMOVE FILTER4_CUSTOM FILTER5_RELAX
      , cancelreq  : ""             // true
      , color      : ""
      , theme      : ""             // "light"
      , typeface   : ""             // "monospace" "initial"
    };
const TEST_SETTINGS_TEST
    = { start      : true           // false
      , csp_filter : FILTER6_NONE   // FILTER3_REMOVE FILTER4_CUSTOM FILTER5_RELAX
      , cancelreq  : false          // true
      , color      : "pink"
      , theme      : "dark"         // "light"
      , typeface   : "cursive"      // "monospace" "initial"
    };
/*}}}*/
    /* return {{{*/
    return { name     : P_SCRIPT_TAG
           , init             // reload storage
           , c                // console.clear();
           , l                // log .. set .. get .. show
           , logn
           , sg
           //reload   : async () => await popup_query_tab() /* eslint-disable-line no-return-await */
           , reload   :                   popup_query_tab
           , close    : window.close

        // P_RESPONSE_HANDLER
        , p_sendMessage_response_handler
        , clear       : () => p_sendMessage_response_handler({ console_clear:"OK" , preserve:true                                 }, { sender:"Devtools" }, (o) => console.warn(JSON.stringify(o)))

        // P_MESSAGE_CB _____ pcb({ RESPONSE___________________________________________________________}, { SENDER____________}, response_handler_____________________ )
        , CLEAR       : () => pcb({ tabId: last_activated_tabId, url: popup_url, ...TEST_SETTINGS_CLEAR})
        , TEST        : () => pcb({ tabId: last_activated_tabId, url: popup_url, ...TEST_SETTINGS_TEST })
        , OFF         : () => pcb({ tabId: last_activated_tabId, url: popup_url, ...TEST_SETTINGS_OFF  })
        , ON          : () => pcb({ tabId: last_activated_tabId, url: popup_url, ...TEST_SETTINGS_ON   })
        , CSP_3       : () => pcb({ tabId: last_activated_tabId, url: popup_url, ...TEST_SETTINGS_CSP3 })
        , CSP_4       : () => pcb({ tabId: last_activated_tabId, url: popup_url, ...TEST_SETTINGS_CSP4 })
        , CSP_5       : () => pcb({ tabId: last_activated_tabId, url: popup_url, ...TEST_SETTINGS_CSP5 })

        , bg_REPLY    : () => pcb({ REPLY  : "NO [tabId] YET TO RELOAD", caller: "b_onMessage_CB"             })
        , bg_handler  : () => pcb({ handler: "BG_MESSAGE_SCRIPT_ID"+" → bg_message_onMessage_CB_reply(action)"})

        // POPUP_UI_EVENTS
        , start       : () => p_EVENT_click_set_name_value(BUTTON_START_ID,  true)
        , stop        : () => p_EVENT_click_set_name_value(BUTTON_START_ID, false)
        , p_UI_set_checked_id
        , show_has_CSP

        , p_UI_show_error
        , p_UI_hide_error

        // LOG_STATUS
        , status      : () => {
            log_object(  P_SCRIPT_ID,
                       { lastError : chrome.runtime && chrome.runtime.lastError
                       , last_activated_tabId
                       , popup_url
                       }, lf9, false);
        }

    };
    /*}}}*/
})();

let        p =  popup_js; /* @so that we can call p.l() from Devtools.console */
/*......*/ if(chrome.storage) p.init();

/* LOADING popup.html stand-alone in the browser {{{

 chrome.runtime.lastError.message

 runtime.lastError
 runtime.onMessage.addListener
 runtime.sendMessage

 storage.sync.get
 storage.sync.set

 tabs.executeScript

}}}*/
/*
/\v\.\s*(P_LOG0_MORE|P_LOG1_MESSAGE|P_LOG2_ERROR|P_LOG6_UI|P_LOG7_TABS|P_LOG8_STORE|P_LOG9_EVENT|caller|cancelreq|cmd|color|csp_filter|query|set_log_state|set_log_tag|start|status|tabId|theme|title|typeface|url)
*/
