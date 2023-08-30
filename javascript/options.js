// ┌───────────────────────────────────────────────────────────────────────────┐
// │ options.js ............................................... OPTIONS SCRIPT │
// └───────────────────────────────────────────────────────────────────────────┘
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
/* eslint-disable no-redeclare              */
/* globals console, chrome                  */

/* globals  log_js                          */
/* exported options_js, O_SCRIPT_TAG        */

/* eslint-disable no-warning-comments       */
/* eslint-disable prefer-spread             */
/* eslint-disable prefer-rest-params        */
/* eslint-disable valid-jsdoc               */

/* eslint-enable  no-redeclare              */

const    O_SCRIPT_ID         = "options_js";
const    O_SCRIPT_TAG        = O_SCRIPT_ID +" (230817:18h:19)";
/*}}}*/
// ┌───────────────────────────────────────────────────────────────────────────┐
// │ OPTIONS                                                         EXTENSION │
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
"● javascript/options.js
:e javascript/popup.js
:e javascript/worker.js
/* └─────────────────────────────┘*/
let options_js = (function() {
"use strict"; /* eslint-disable-line strict */

/* IMPORT log_js {{{*/
/* modules {{{*/
/*_ log_js {{{*/
/* eslint-disable no-unused-vars */
let   LF;

let   lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let   lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let   lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;

let   SD0 ,SD1 ,SD2 ,SD3 ,SD4 ,SD5 ,SD6 ,SD7 ,SD8 ,SD9;
let   SAU, SAR, SAD, SAL, SHV, SYN, SBS;
let   L_CHK, L_NEW, L_ARD, L_ARL, L_ARR, L_ARU, L_CLR, L_FNC, L_WRN;
let   SYMBOL_FUNCTION, SYMBOL_CHECK_MARK, SYMBOL_NOT_CHECKED, SYMBOL_CONSTRUCTION, SYMBOL_ROCKET, SYMBOL_ASSIGN, SYMBOL_GEAR, SYMBOL_THUMBS_UP;
/* eslint-enable no-unused-vars */

let   log
    , log_key_val
    , log_object
    , log_sep_bot
    , log_sep_top
    , li
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
    log                             = log_js.log;                                               li("log_js","log"           , log        );
    log_key_val                     = log_js.log_key_val;                                       li("log_js","log_key_val"   , log_key_val);
    log_object                      = log_js.log_object;                                        li("log_js","log_object"    , log_object );
    log_sep_bot                     = log_js.log_sep_bot;                                       li("log_js","log_sep_bot"   , log_sep_bot);
    log_sep_top                     = log_js.log_sep_top;                                       li("log_js","log_sep_top"   , log_sep_top);

    /*}}}*/
    log_js.log_set_type("O");

    log_js.log_import(options_js, modules);
};
/*}}}*/
/*}}}*/
    setTimeout(_import,0);
/*_ LOG_MAP {{{*/
let LOG_MAP = {
    O_LOG1_MESSAGE    : false,
    O_LOG2_ERROR      :  true,


    O_LOG5_SUCCESS    : false,
    O_LOG6_UI         : false,

    O_LOG8_STORE      : false,

    O_LOG0_MORE       : false
};
/*}}}*/
/*_ logn {{{*/
let logn = function(n)
{
try {
    /* TOGGLE [log_tag] {{{*/
//  let caller = "logn("+n+")";

    let log_tag
        = (n == 1        ) ? "O_LOG1_MESSAGE"
        : (n == 2        ) ? "O_LOG2_ERROR"


        : (n == 5        ) ? "O_LOG5_SUCCESS"
        : (n == 6        ) ? "O_LOG6_UI"

        : (n == 8        ) ? "O_LOG8_STORE"

        : (n == 0        ) ? "O_LOG0_MORE"
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

        LOG_MAP.O_LOG2_ERROR = (log_tag != "O_LOG2_ERROR") && log_ACTIVATED();

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
let log_this = LOG_MAP.O_LOG8_STORE;

if( log_this) log("%c "+caller+": %c SAVING [LOG_MAP]", lbL+lf8, lbR+lf9);
/*}}}*/
    log("%c SAVING [LOG_MAP]", lb9);
    let log_items
        = {     O_LOG1_MESSAGE  : LOG_MAP.O_LOG1_MESSAGE
            ,   O_LOG2_ERROR    : LOG_MAP.O_LOG2_ERROR


            ,   O_LOG5_SUCCESS  : LOG_MAP.O_LOG5_SUCCESS
            ,   O_LOG6_UI       : LOG_MAP.O_LOG6_UI

            ,   O_LOG8_STORE    : LOG_MAP.O_LOG8_STORE

            ,   O_LOG0_MORE     : LOG_MAP.O_LOG0_MORE
        };

    // ┌──────────────────────────────────────────┐
    // │ LOG_MAP EXTENSION PERSISTENCE            │
    // └──────────────────────────────────────────┘
    o_storage_sync_set(log_items, log_js.get_callers_bot());

    /* propagate log_more to log modules */
    log_js.set_log_more( LOG_MAP.B_LOG0_MORE ) ;

    // ┌──────────────────────────────────────────┐
    // │ OPTIONS UI                               │
    // └──────────────────────────────────────────┘
    o_UI_SET_from_STORAGE(log_items);
};
/*}}}*/
/*_ logn_USAGE {{{*/
let logn_USAGE = function() /* eslint-disable-line no-unused-vars */
{
    let  s  = ""                                              , args=[""];

    /**/ s += "%c "+O_SCRIPT_ID+".l(2) .. toggle ERROR\n"     ; args.push(lbR+lf2);
    /**/ s += "%c "+O_SCRIPT_ID+".l(3) .. toggle GET\n"       ; args.push(lbR+lf3);
    /**/ s += "%c "+O_SCRIPT_ID+".l(4) .. toggle SET\n"       ; args.push(lbR+lf4);
    /**/ s += "%c "+O_SCRIPT_ID+".l(5) .. toggle SUCCESS\n"   ; args.push(lbR+lf5);
    /**/ s += "%c "+O_SCRIPT_ID+".l(6) .. toggle UI\n"        ; args.push(lbR+lf6);

    /**/ s += "%c "+O_SCRIPT_ID+".l(8) .. toggle STORE\n"     ; args.push(lbR+lf8);

    /**/ s += "%c "+O_SCRIPT_ID+".l(0) .. toggle MORE\n"      ; args.push(lbR+lf0);
    /**/ s += "%c "+O_SCRIPT_ID+".l()  .. logging states\n"   ; args.push(lbR+lf9);

    /**/ s += "%c "+O_SCRIPT_ID+".c    == clear\n"            ; args.push(lbR+lf8);

    args[0] = s;

    console.groupCollapsed("%c logn USAGE "+SAD, lbH);
    console.log.apply(console, args);
    console.groupEnd();

    log_object("options_js",options_js);
};
/*}}}*/
/*_ log_LOG_MAP {{{*/
let log_LOG_MAP = function()
{
    /*.......................*/ let s  = "%c"+O_SCRIPT_ID   , args=["", lbL+lb0];
    if( LOG_MAP.O_LOG1_MESSAGE  ) { s += "%c 1 MESSAGES "   ; args.push(lbC+lb1); }
    if( LOG_MAP.O_LOG2_ERROR    ) { s += "%c 2 ERROR "      ; args.push(lbC+lb2); }


    if( LOG_MAP.O_LOG5_SUCCESS  ) { s += "%c 5 SUCCESS "    ; args.push(lbC+lb5); }
    if( LOG_MAP.O_LOG6_UI       ) { s += "%c 6 UI "         ; args.push(lbC+lb6); }

    if( LOG_MAP.O_LOG8_STORE    ) { s += "%c 8 STORE "      ; args.push(lbC+lb8); }

    if( LOG_MAP.O_LOG0_MORE     ) { s += "%c 0 MORE "       ; args.push(lbC+lb0); }
    if(args.length == 2)          { s += "%c NO LOGGING"    ; args.push(lbR+lf0); }
    else                          { s += "%c "              ; args.push(lbR    ); }

    args[0] = s;
    console.log.apply(console, args);
};
/*}}}*/
/*_ log_ACTIVATED {{{*/
let log_ACTIVATED = function()
{
    return (   LOG_MAP.O_LOG1_MESSAGE
            // LOG_MAP.O_LOG2_ERROR


            || LOG_MAP.O_LOG5_SUCCESS
            || LOG_MAP.O_LOG6_UI

            || LOG_MAP.O_LOG8_STORE

            // LOG_MAP.O_LOG0_MORE
           );
};
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ STORAGE                                                   O_LOG8_STORE │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*_ o_storage_sync_set {{{*/
let o_storage_sync_set = function(items,_caller)
{
/*{{{*/
let   caller = "o_storage_sync_set";
let log_this =             LOG_MAP.B_LOG8_STORE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    let items_tag
        =   items.status
        ||  items.start
        ||  items.csp_filter
        ||  items.cancelreq
        || "items"
    ;

if( log_this) log       ("%c"+_caller+"→"+caller, lb8);
if( log_this) log_object("..."       , { items_tag, _caller });
if( log_more) log_object("...items",   items);
/*}}}*/
    if( !chrome.storage ) return; /* stand-alone options.html */
    try {
        chrome.storage.sync.set( items );
    }
    catch(ex) {
        console.error(O_SCRIPT_ID+" ERROR:\n"+ ex);
        o_UI_set_statusline_text("⚠ "+ex.message+" ⚠");
    }
};
/*}}}*/
/*_ o_storage_sync_clear {{{*/
/*{{{*/
let o_ui_STORAGE_CLEAR_timer;
let clear_button;
/*}}}*/
let o_storage_sync_clear = function(button_id)
{
/*{{{*/
let   caller = O_SCRIPT_ID+".o_storage_sync_clear";
let log_this = LOG_MAP.O_LOG8_STORE;

if( log_this ) log("%c"+caller, lbH+lf8);
/*}}}*/
    /* 1. timer none    .. this is the first call {{{*/
    if( !o_ui_STORAGE_CLEAR_timer )
    {
if( log_this) log("%c "+caller, lb5);

        clear_button = document.getElementById(button_id).parentElement.parentElement;
        clear_button.classList.remove("on_standby");
        clear_button.classList.add   ("on_hold");

        o_ui_STORAGE_CLEAR_timer = window.setTimeout(o_storage_sync_clear, 3000);
    }
    /*}}}*/
    /* 2. timer pending .. cancel pending call {{{*/
    else if(button_id) {
if( log_this) log("%c CLEAR DISMISSED", lb6);

        clear_button.classList.remove("on_hold");
        clear_button.classList.add   ("on_standby");

        window.clearTimeout(o_ui_STORAGE_CLEAR_timer);
        o_ui_STORAGE_CLEAR_timer = null;
    }
    /*}}}*/
    /* 3. timer elapsed .. clear commit {{{*/
    else {
if( log_this) log("%c CLEAR COMMIT", lb7);

        clear_button.classList.remove("on_hold");
        clear_button.classList.add   ("on_standby");

        o_ui_STORAGE_CLEAR_timer = null;

        chrome.storage.sync.clear();
        document.location.reload(true); // forceGet
    }
    /*}}}*/
};
/*}}}*/
/*_ o_LOAD_STORE_items {{{*/
let o_LOAD_STORE_items = function(items)
{
    /* LOAD [LOG_MAP] {{{*/

    /*(____________.____________________!=____________)________.________________=______.________________;*/
    if(typeof items.O_LOG1_MESSAGE      != "undefined") LOG_MAP.O_LOG1_MESSAGE  = items.O_LOG1_MESSAGE  ;
    if(typeof items.O_LOG2_ERROR        != "undefined") LOG_MAP.O_LOG2_ERROR    = items.O_LOG2_ERROR    ;


    if(typeof items.O_LOG5_SUCCESS      != "undefined") LOG_MAP.O_LOG5_SUCCESS  = items.O_LOG5_SUCCESS  ;
    if(typeof items.O_LOG6_UI           != "undefined") LOG_MAP.O_LOG6_UI       = items.O_LOG6_UI       ;

    if(typeof items.O_LOG8_STORE        != "undefined") LOG_MAP.O_LOG8_STORE    = items.O_LOG8_STORE    ;

    if(typeof items.O_LOG0_MORE         != "undefined") LOG_MAP.O_LOG0_MORE     = items.O_LOG0_MORE     ;
    /*(____________.____________________!=____________)________.________________=______.________________;*/

    LOG_MAP.O_LOG2_ERROR = (typeof items.O_LOG2_ERROR == "undefined") && log_ACTIVATED();

    logn_STORE();

    log_LOG_MAP();

/*{{{*/
let log_this = log_ACTIVATED();

if( log_this) log_sep_top(O_SCRIPT_ID+".STORE ITEMS", "LOG3_TAG");
if( log_this) log_object("items", items, lf3);
if( log_this) log_sep_bot(O_SCRIPT_ID+".STORE ITEMS", "LOG3_TAG");
/*}}}*/
    /*}}}*/
    /* UPDATE UI {{{*/

    o_UI_SET_from_STORAGE(items);

    o_UI_SET_tooltips();

    /*}}}*/
};
/*}}}*/
/*_ o_STORE_SET_from_UI {{{*/
let o_STORE_SET_from_UI = function(_caller)
{
/*{{{*/
let   caller = "o_STORE_SET_from_UI";
let log_this = LOG_MAP.O_LOG8_STORE;

if( log_this) log("%c "+caller+"%c"+_caller, lbH+lf8, lbH+lf6);
/*}}}*/
    let items //{{{
        = { B_LOG1_MESSAGE      : (document.getElementById( "B_LOG1_MESSAGE"   ) || {}).checked
        ,   B_LOG2_ERROR        : (document.getElementById( "B_LOG2_ERROR"     ) || {}).checked
        ,   B_LOG3_PRESERVE     : (document.getElementById( "B_LOG3_PRESERVE"  ) || {}).checked
        ,   B_LOG4_CSP          : (document.getElementById( "B_LOG4_CSP"       ) || {}).checked
        ,   B_LOG5_ONREQUEST    : (document.getElementById( "B_LOG5_ONREQUEST" ) || {}).checked
        ,   B_LOG6_ONHEADER     : (document.getElementById( "B_LOG6_ONHEADER"  ) || {}).checked
        ,   B_LOG7_TABS         : (document.getElementById( "B_LOG7_TABS"      ) || {}).checked
        ,   B_LOG8_STORE        : (document.getElementById( "B_LOG8_STORE"     ) || {}).checked
        ,   B_LOG9_STAGE        : (document.getElementById( "B_LOG9_STAGE"     ) || {}).checked
        ,   B_LOG0_MORE         : (document.getElementById( "B_LOG0_MORE"      ) || {}).checked

        ,   O_LOG1_MESSAGE      : (document.getElementById( "O_LOG1_MESSAGE"   ) || {}).checked
        ,   O_LOG2_ERROR        : (document.getElementById( "O_LOG2_ERROR"     ) || {}).checked
        ,   O_LOG5_SUCCESS      : (document.getElementById( "O_LOG5_SUCCESS"   ) || {}).checked
        ,   O_LOG6_UI           : (document.getElementById( "O_LOG6_UI"        ) || {}).checked
        ,   O_LOG8_STORE        : (document.getElementById( "O_LOG8_STORE"     ) || {}).checked
        ,   O_LOG0_MORE         : (document.getElementById( "O_LOG0_MORE"      ) || {}).checked

        ,   P_LOG1_MESSAGE      : (document.getElementById( "P_LOG1_MESSAGE"   ) || {}).checked
        ,   P_LOG2_ERROR        : (document.getElementById( "P_LOG2_ERROR"     ) || {}).checked
        ,   P_LOG6_UI           : (document.getElementById( "P_LOG6_UI"        ) || {}).checked
        ,   P_LOG7_TABS         : (document.getElementById( "P_LOG7_TABS"      ) || {}).checked
        ,   P_LOG8_STORE        : (document.getElementById( "P_LOG8_STORE"     ) || {}).checked
        ,   P_LOG9_EVENT        : (document.getElementById( "P_LOG9_EVENT"     ) || {}).checked
        ,   P_LOG0_MORE         : (document.getElementById( "P_LOG0_MORE"      ) || {}).checked

        ,  "WORKER_LOG"         : (document.getElementById( "WORKER_LOG"        ) || {}).checked
        ,  "BACKGROUND_JS_LOG"  : (document.getElementById( "BACKGROUND_JS_LOG" ) || {}).checked
        ,  "BG_CONTENT_JS_LOG"  : (document.getElementById( "BG_CONTENT_JS_LOG" ) || {}).checked
        ,  "BG_CSP_JS_LOG"      : (document.getElementById( "BG_CSP_JS_LOG"     ) || {}).checked
        ,  "BG_EVENT_JS_LOG"    : (document.getElementById( "BG_EVENT_JS_LOG"   ) || {}).checked
        ,  "BG_HEADER_JS_LOG"   : (document.getElementById( "BG_HEADER_JS_LOG"  ) || {}).checked
        ,  "BG_MESSAGE_JS_LOG"  : (document.getElementById( "BG_MESSAGE_JS_LOG" ) || {}).checked
        ,  "BG_PAGE_JS_LOG"     : (document.getElementById( "BG_PAGE_JS_LOG"    ) || {}).checked
        ,  "BG_SETTINGS_JS_LOG" : (document.getElementById( "BG_SETTINGS_JS_LOG") || {}).checked
        ,  "BG_STORE_JS_LOG"    : (document.getElementById( "BG_STORE_JS_LOG"   ) || {}).checked
        ,  "BG_TABS_JS_LOG"     : (document.getElementById( "BG_TABS_JS_LOG"    ) || {}).checked
    };

    items  .O_LOG2_ERROR    =  log_ACTIVATED();

if( log_this) log_key_val("items",items, lf8);
    //}}}
    o_storage_sync_set(   items, caller);

    if(!invalidated) o_UI_SET_from_STORAGE( items );

    log_LOG_MAP();
};
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ UI EVENT LISTENERS                                           O_LOG6_UI │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*_ o_addEventListeners {{{*/
let o_addEventListeners = function()
{
if(LOG_MAP.O_LOG6_UI) log("%c o_addEventListeners", lb6);

    /* BUTTONS CLICK LISTENER */
    let id, el;

    id = FILTER3_REMOVE ; if(el = document.getElementById(id)) { el.addEventListener("click", o_UI_checkbox_listener); }
    id = FILTER4_CUSTOM ; if(el = document.getElementById(id)) { el.addEventListener("click", o_UI_checkbox_listener); }
    id = FILTER5_RELAX  ; if(el = document.getElementById(id)) { el.addEventListener("click", o_UI_checkbox_listener); }
    id = FILTER6_NONE   ; if(el = document.getElementById(id)) { el.addEventListener("click", o_UI_checkbox_listener); }

    id = LOG_PANEL      ; if(el = document.getElementById(id)) { el.addEventListener("click", o_UI_checkbox_listener); }
    id = LOG_MAP_DIV    ; if(el = document.getElementById(id)) { el.addEventListener("click", o_UI_checkbox_listener); }
    id = STORAGE_CLEAR  ; if(el = document.getElementById(id)) { el.addEventListener("click", o_UI_checkbox_listener); }
    id = CONSOLE_CLEAR  ; if(el = document.getElementById(id)) { el.addEventListener("click", o_UI_checkbox_listener); }

    /* TEXTAREA INPUT EVENT LISTENER */
    id = FILTER_TEXTAREA; if(el = document.getElementById(id)) { el.addEventListener("input", o_UI_textarea_listener()); }

};
/*}}}*/
/*_ o_UI_textarea_listener {{{*/
let O_TEXTAREA_INPUT_DELAY   = 250;

let o_UI_textarea_listener = function()
{
if(LOG_MAP.O_LOG6_UI) log("%c o_UI_textarea_listener", lb1);

    let timer = null;

    /* HANDLE debounced CALLS to CHECK JSON content SYNTAX */
    let edit_handler = function() {
if(LOG_MAP.O_LOG6_UI) log("%c textarea.input.edit_handler", lb1);
        timer = null;
        EDIT_CSP_FILTER();
    };

    /* LISTEN to INPUT EVENT */
    let listener = function()
    {
        if(timer !== null) window.clearTimeout(timer         );
        timer            = window.  setTimeout(edit_handler, O_TEXTAREA_INPUT_DELAY);
    };

    return listener;
};
/*}}}*/
/*_ o_UI_checkbox_listener {{{*/
/*{{{*/
const DEBOUNCE_CLICK_DELAY_MS = 50;
let   debounce_timeout;
/*}}}*/
let o_UI_checkbox_listener = function(e)
{
    let e_target = o_UI_checkbox_get_target(e);
    let    el_id = e_target.id;
    switch(el_id)
    {
    case FILTER3_REMOVE :
    case FILTER4_CUSTOM :
    case FILTER5_RELAX  :
    case FILTER6_NONE   : o_UI_show_panel(FILTER_TEXTAREA); SELECT_CSP_FILTER(el_id, "SET");
    break;

    default: if( debounce_timeout ) clearTimeout(debounce_timeout);
    /*.........*/debounce_timeout =   setTimeout(() => o_UI_CB(e, el_id), DEBOUNCE_CLICK_DELAY_MS);
    }
};
/*}}}*/
/*_ o_UI_checkbox_get_target {{{*/
let o_UI_checkbox_get_target = function(e)
{
    let el;
    let e_target
        = ((el = e.target.firstElementChild) && (el.tagName == "INPUT")) ? e.target.firstElementChild
        : ((el = e.target                  ) && (el.htmlFor           )) ? (document.getElementById(el.htmlFor) || e.target)
        : ((el = e.target.parentElement    ) && (el.htmlFor           )) ? (document.getElementById(el.htmlFor) || e.target)
        : /*..........................................................*/   e.target
    ;
    return e_target;
};
/*}}}*/

/* LOG addListener {{{

chrome.runtime.onBrowserUpdateAvailable.addListener(() => log("%c"+SYMBOL_GEAR+" onBrowserUpdateAvailable", lbB+lbH+lf0));
chrome.runtime.onConnect               .addListener(() => log("%c"+SYMBOL_GEAR+" onConnect"               , lbB+lbH+lf0));
chrome.runtime.onConnectExternal       .addListener(() => log("%c"+SYMBOL_GEAR+" onConnectExternal"       , lbB+lbH+lf0));
chrome.runtime.onInstalled             .addListener(() => log("%c"+SYMBOL_GEAR+" onInstalled"             , lbB+lbH+lf0));
chrome.runtime.onMessage               .addListener(() => log("%c"+SYMBOL_GEAR+" onMessage"               , lbB+lbH+lf0));
chrome.runtime.onMessageExternal       .addListener(() => log("%c"+SYMBOL_GEAR+" onMessageExternal"       , lbB+lbH+lf0));
chrome.runtime.onRestartRequired       .addListener(() => log("%c"+SYMBOL_GEAR+" onRestartRequired"       , lbB+lbH+lf0));
chrome.runtime.onStartup               .addListener(() => log("%c"+SYMBOL_GEAR+" onStartup"               , lbB+lbH+lf0));
chrome.runtime.onSuspend               .addListener(() => log("%c"+SYMBOL_GEAR+" onSuspend"               , lbB+lbH+lf0));
chrome.runtime.onSuspendCanceled       .addListener(() => log("%c"+SYMBOL_GEAR+" onSuspendCanceled"       , lbB+lbH+lf0));
chrome.runtime.onUpdateAvailable       .addListener(() => log("%c"+SYMBOL_GEAR+" onUpdateAvailable"       , lbB+lbH+lf0));

}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ EVENT [checkbox] HANDLERS                                    O_LOG6_UI │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*_ o_UI_CB {{{*/
let o_UI_CB = function(e, el_id="input")
{
/*{{{*/
let   caller = "o_UI_CB";
let log_this = LOG_MAP.O_LOG6_UI;
let log_more = log_this && LOG_MAP.O_LOG0_MORE;

//( log_this) log_console_clear();
if( log_this) log("%c"+caller+"%c "+e.type+" %c"+el_id, lbL+lf6,lbC+lf3,lbR+lf4);
/*{{{
if( log_more) {
    log(caller+"(e.type="+e.type+", el_id="+el_id);
    log("e.target.type:"          , e.    target.type);
    log("e.srcElement.type:"      , e.srcElement.type);
    log("e.timeStamp:"            , e.timeStamp);
    console.dir(e);
}
}}}*/
/*}}}*/
    if(invalidated) return;
    /* ● CONSOLE_CLEAR ● LOG_PANEL ● STORAGE_CLEAR {{{*/
    switch( el_id )
    {
    case       CONSOLE_CLEAR : SEND_CLEAR_MESSAGE();                    return;
    case       LOG_PANEL     : o_UI_show_panel     ( LOG_MAP_DIV   );   return;
    case       STORAGE_CLEAR : o_storage_sync_clear( STORAGE_CLEAR );   return;
    }
/*}}}*/
    /* ● LOG_MAP_DIV CHECKBOX {{{*/
/*{{{
console.log("e.target..........................................:"); console.dir(e.target                                          );
console.log("e.target.parentElement............................:"); console.dir(e.target.parentElement                            );
console.log("e.target.parentElement.parentElement..............:"); console.dir(e.target.parentElement.parentElement              );
console.log("e.target.parentElement.parentElement.parentElement:"); console.dir(e.target.parentElement.parentElement.parentElement);
}}}*/

    let el     = e.target.htmlFor  ? document.getElementById( e.target.htmlFor )        /* label.htmlFor input */
        : (e.target                                          .id) ? e.target                                           /* button              */
        : (e.target.parentElement                            .id) ? e.target.parentElement                             /* cb_filled_pin       */
        : (e.target.parentElement.parentElement              .id) ? e.target.parentElement.parentElement               /* box_container       */
        : (e.target.parentElement.parentElement.parentElement.id) ? e.target.parentElement.parentElement.parentElement /* LOG_MAP_DIV_...     */
        : null
    ;
    if(!el) return;

if( log_this) log(" CLICKED %c "+el_id+"%c "+el.tagName+"%c type "+el.type, lbL,lbC,lbR);
// console.dir(el);

    switch(el.id) {
        /* background_js {{{*/
        case "LOG_MAP_DIV_background": o_UI_TOGGLE_ROW(el); break;
        case "B_LOG1_MESSAGE"        :
        case "B_LOG2_ERROR"          :
        case "B_LOG3_PRESERVE"       :
        case "B_LOG4_CSP"            :
        case "B_LOG5_ONREQUEST"      :
        case "B_LOG6_ONHEADER"       :
        case "B_LOG7_TABS"           :
        case "B_LOG8_STORE"          :
        case "B_LOG9_STAGE"          :
        case "B_LOG0_MORE"           :
        /*..........................*/ if(el.type=="checkbox") SEND_LOG_ITEM({ tag:el.id , state:el.checked });
        break;

        /*}}}*/
        /* options_js {{{*/
        case "LOG_MAP_DIV_options"   : o_UI_TOGGLE_ROW(el); break;
        case "O_LOG1_MESSAGE"        : if(el.type=="checkbox") o_LOAD_STORE_items( { O_LOG1_MESSAGE:el.checked }); break;
        case "O_LOG2_ERROR"          : if(el.type=="checkbox") o_LOAD_STORE_items( { O_LOG2_ERROR  :el.checked }); break;
        case "O_LOG5_SUCCESS"        : if(el.type=="checkbox") o_LOAD_STORE_items( { O_LOG5_SUCCESS:el.checked }); break;
        case "O_LOG6_UI"             : if(el.type=="checkbox") o_LOAD_STORE_items( { O_LOG6_UI     :el.checked }); break;
        case "O_LOG8_STORE"          : if(el.type=="checkbox") o_LOAD_STORE_items( { O_LOG8_STORE  :el.checked }); break;
        case "O_LOG0_MORE"           : if(el.type=="checkbox") o_LOAD_STORE_items( { O_LOG0_MORE   :el.checked }); break;
        /*}}}*/
        /* popup_js {{{*/
        case "LOG_MAP_DIV_popup"     : o_UI_TOGGLE_ROW(el); break;
        case "P_LOG1_MESSAGE"        :
        case "P_LOG2_ERROR"          :
        case "P_LOG6_UI"             :
        case "P_LOG7_TABS"           :
        case "P_LOG8_STORE"          :
        case "P_LOG9_EVENT"          :
        case "P_LOG0_MORE"           :
        /*..........................*/ if(el.type=="checkbox") SEND_LOG_ITEM({ tag:el.id , state:el.checked });
        break;

        /*}}}*/
        /* logging {{{*/
        case "LOGGING_DIV_RIGHT"     : o_UI_TOGGLE_ROW(el); break;

        case "WORKER_LOG"            :
        case "BACKGROUND_JS_LOG"     :
        case "BG_CONTENT_JS_LOG"     :
        case "BG_CSP_JS_LOG"         :
        case "BG_EVENT_JS_LOG"       :
        case "BG_HEADER_JS_LOG"      :
        case "BG_MESSAGE_JS_LOG"     :
        case "BG_PAGE_JS_LOG"        :
        case "BG_SETTINGS_JS_LOG"    :
        case "BG_STORE_JS_LOG"       :
        case "BG_TABS_JS_LOG"        :
        /*..........................*/ if(el.type=="checkbox") SEND_LOG_ITEM({ tag:el.id , state:el.checked });
        break;

        /*}}}*/
        /* ... {{{*/
        case "":
if( log_more) log("%c--- o_UI_CB: ["+el.id+"] %c el.id=["+el.id+"]", lb6, lb0);
        break;

        default:
if( log_more) log("%c*** o_UI_CB: ["+el.id+"] .. case default .. el.id=["+el.id+"] ***", lb2);
        break;
        /*}}}*/
    }
    /*}}}*/
    if(!invalidated) o_STORE_SET_from_UI(caller+"("+el_id+")");
};
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ UI                             O_LOG5_SUCCESS  O_LOG6_UI  O_LOG8_STORE │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*{{{*/

const FILTER_TEXTAREA   = "FILTER_TEXTAREA";

const FILTER3_REMOVE    = "FILTER3_REMOVE";
const FILTER4_CUSTOM    = "FILTER4_CUSTOM";
const FILTER5_RELAX     = "FILTER5_RELAX";
const FILTER6_NONE      = "FILTER6_NONE";

const LOG_PANEL         = "LOG_PANEL";
const LOG_MAP_DIV       = "LOG_MAP_DIV";
const STORAGE_CLEAR     = "STORAGE_CLEAR";
const CONSOLE_CLEAR     = "CONSOLE_CLEAR";

/*}}}*/
/*_ o_UI_SET_from_STORAGE {{{*/
let o_UI_SET_from_STORAGE = function(items)
{
/*{{{*/
let   caller = "o_UI_SET_from_STORAGE";
let log_this = LOG_MAP.O_LOG8_STORE;

if( log_this) log("%c"+caller+"(items x"+Object.keys(items).length+")", lbH+lf6);
/*}}}*/

    /* SYNC LOG_MAP checkbox elements */
/*{{{
//  let (el_checked_panels) = []; // PANELS containing some checked el
}}}*/
    let checked_objects = {};

    Object.keys(items).forEach(
        function(key)
        {
            let     el = document.getElementById(key);
            if(     el
                && (el.type == "checkbox" )
            //  && (el.id.includes("_LOG"))
            ) {
                el.checked = items[key];

                checked_objects   [key] = el.checked;
/*{{{
                if(el.checked) {
                    let row_panel = el.parentElement.parentElement.parentElement;
                    if( row_panel && !el_checked_panels.includes(row_panel)) el_checked_panels.push(row_panel);
                }
}}}*/
//if( log_this) log("...%c"+key+"%c"+items[key], lbL,lbR);
            }
        }
    );
if( log_this) log_object(caller+": checked_objects",checked_objects);

};
/*}}}*/
/*_ o_UI_TOGGLE_ROW {{{*/
let o_UI_TOGGLE_ROW = function(row_panel)
{
/*{{{*/
let   caller = "o_UI_TOGGLE_ROW";
let log_this = LOG_MAP.O_LOG6_UI;

/*}}}*/
    let row_buttons = row_panel.getElementsByTagName("INPUT");
if( log_this) log("%c o_UI_TOGGLE_ROW("+row_panel.id+"): %c row_buttons.length=["+ row_buttons.length+"]", lb6,lb0);

    let check_state;
    for(let i=0; i<row_buttons.length; ++i)
    {
        if( invalidated ) return;
        let el = row_buttons[i];                         /* for each paner row checkbox button */
        if(i == 0)   check_state = !el.checked;          /* invert first of row state */
        el.checked = check_state;                        /* apply resulting state to all row row_buttons */
        SEND_LOG_ITEM({ tag:el.id , state:el.checked }); /* send option message */
    }

    o_STORE_SET_from_UI(caller+"("+row_panel.id+")");   /* store checked options */
};
/*}}}*/

/*_ o_UI_show_panel {{{*/
let o_UI_show_panel = function(panel_id)
{
/*{{{*/
let   caller = "o_UI_show_panel";
let log_this = LOG_MAP.O_LOG6_UI;
if( log_this) log("%c"+caller+"%c"+panel_id, lbL+lf6,lbR+lf5);

/*}}}*/
    let textarea     = document.getElementById( FILTER_TEXTAREA );
    let log_map_div  = document.getElementById( LOG_MAP_DIV     );

    if( log_map_div    .style.display_saved == undefined)
        log_map_div    .style.display_saved =
            log_map_div.style.display;

    textarea   .style.display = (panel_id == FILTER_TEXTAREA) ? "block" : "none";
    log_map_div.style.display = (panel_id != FILTER_TEXTAREA) ? log_map_div    .style.display_saved : "none";

    o_UI_show_panel_radio( panel_id );

    o_STORE_SET_from_UI(caller+"("+panel_id+")");

};
/*}}}*/
/*_ o_UI_show_panel_radio {{{*/
let o_UI_show_panel_radio = function(checked_id)
{
let   caller = "o_UI_show_panel_radio";
let log_this = LOG_MAP.O_LOG6_UI;
if( log_this) log("%c"+caller+"%c"+checked_id, lbL+lf6,lbR+lf4);

    /* RADIO BEHAVIOR */
    let id;
    id = FILTER3_REMOVE  ; document.getElementById(id).checked = (checked_id  == id         );
    id = FILTER4_CUSTOM  ; document.getElementById(id).checked = (checked_id  == id         );
    id = FILTER5_RELAX   ; document.getElementById(id).checked = (checked_id  == id         );
    id = FILTER6_NONE    ; document.getElementById(id).checked = (checked_id  == id         );
    id = LOG_PANEL       ; document.getElementById(id).checked = (checked_id  == LOG_MAP_DIV);

    /* ...others retain user-action-state */
};
/*}}}*/
/*_ o_UI_show_CSP_FILTER_SUCCESS {{{*/
let o_UI_show_CSP_FILTER_SUCCESS = function(response)
{
let log_this = LOG_MAP.O_LOG5_SUCCESS;
if( log_this) log("%c o_UI_show_CSP_FILTER_SUCCESS", lb5);
if( log_this) log("...response=%c["+response+"]", lb5);

    // ┌───────────────────────────────────────────────────────────────────────┐
    // │ DETECT javascript/bg_csp.js BUILTINS from those CUSTOMIZED BY USER    │
    // └───────────────────────────────────────────────────────────────────────┘

    let textarea = document.getElementById(FILTER_TEXTAREA);
    textarea.style.backgroundColor =        "";

    let bg_color
        = (textarea.value.indexOf("# DEFAULT FILTER") == 0) ?     DEFAULT_BG_COLOR
        : (textarea.value.indexOf("# REMOVE FILTER" ) == 0) ?      REMOVE_BG_COLOR
        : (textarea.value.indexOf("# NULL FILTER"   ) == 0) ? NULL_FILTER_BG_COLOR
        :                                                          CUSTOM_BG_COLOR
    ;
    let fg_color
        = (textarea.value.indexOf("# DEFAULT FILTER") == 0) ?     DEFAULT_FG_COLOR
        : (textarea.value.indexOf("# REMOVE FILTER" ) == 0) ?      REMOVE_FG_COLOR
        : (textarea.value.indexOf("# NULL FILTER"   ) == 0) ? NULL_FILTER_FG_COLOR
        :                                                          CUSTOM_FG_COLOR
    ;

    textarea.style.backgroundColor = bg_color;
    textarea.style.          color = fg_color;
    textarea.                title = "";
};
/*}}}*/
/*_ o_UI_show_CSP_FILTER_FAILURE {{{*/
let o_UI_show_CSP_FILTER_FAILURE = function(response)
{
let log_this = LOG_MAP.O_LOG2_ERROR;
if( log_this) log("%c o_UI_show_CSP_FILTER_FAILURE", lb2);
if( log_this) log("...response=%c["+response+"]"   , lb2);

    let textarea = document.getElementById(FILTER_TEXTAREA);
    textarea.style.backgroundColor = FAILURE_BG_COLOR;
    textarea.style.          color = FAILURE_FG_COLOR;
    textarea.title                 = response;
};
/*}}}*/

/*_ o_UI_set_statusline_text {{{*/
let invalidated;
let o_UI_set_statusline_text = function(text)
{
    let statusline       = document.getElementById( "statusline" );
    statusline.innerHTML = text.replace("\n","<br>");

    if(text.includes("invalidated"))
    {
        invalidated = true;
        document.body.title = "⚠ RELOAD REQUIRED ⚠";
        let el;
        /**/el = document.getElementById("BUTTONS_DIV"); el.style.pointerEvents = "none"; el.style.filter = "grayscale(1) brightness(0.5)";
        /**/el = document.getElementById("LOG_MAP_DIV"); el.style.pointerEvents = "none"; el.style.filter = "grayscale(1) brightness(0.5)";

      //document.body.style.filter = "grayscale(1) brightness(0.2)";
      //setTimeout(() => document.body.style.filter = "grayscale(1) brightness(0.5", 300);
    }
};
/*}}}*/
/*_ o_UI_SET_tooltips {{{*/
/* OPTIONS UI ● BUTTONS_DIV {{{

    FILTER3_REMOVE
    FILTER4_CUSTOM
    FILTER5_RELAX
    FILTER6_NONE

    CONSOLE_CLEAR
    STORAGE_CLEAR

}}}*/
/* OPTIONS UI ● LOG_MAP_DIV_LEFT {{{

    B_LOG0_MORE
    B_LOG1_MESSAGE
    B_LOG2_ERROR
    B_LOG3_PRESERVE
    B_LOG4_CSP
    B_LOG5_ONREQUEST
    B_LOG6_ONHEADER
    B_LOG7_TABS
    B_LOG8_STORE
    B_LOG9_STAGE

    O_LOG0_MORE
    O_LOG1_MESSAGE
    O_LOG2_ERROR
    O_LOG5_SUCCESS
    O_LOG6_UI
    O_LOG8_STORE

    P_LOG0_MORE
    P_LOG1_MESSAGE
    P_LOG2_ERROR
    P_LOG6_UI
    P_LOG7_TABS
    P_LOG8_STORE
    P_LOG9_EVENT

}}}*/
/* OPTIONS UI ● LOGGING_DIV_RIGHT {{{

    WORKER_LOG

    BACKGROUND_JS_LOG

    BG_CONTENT_JS_LOG
    BG_CSP_JS_LOG
    BG_EVENT_JS_LOG
    BG_HEADER_JS_LOG
    BG_MESSAGE_JS_LOG
    BG_PAGE_JS_LOG
    BG_SETTINGS_JS_LOG
    BG_STORE_JS_LOG
    BG_TABS_JS_LOG

}}}*/
/* REGEX {{{*/
//nst regexp_BUTTONS_HEAD = new RegExp("^FILTER\d_"           ,  ""); // FILTER3_REMOVE
const regexp_LOG_MAP_HEAD = new RegExp("^[BOP]_LOG\\d"        ,  ""); // B_LOG0_MORE
//nst regexp_LOGGING_HEAD = new RegExp("^(BG)_"               ,  ""); // BG_CONTENT.......
const regexp_LOGGING_TAIL = new RegExp(             "_JS_LOG$",  ""); // ...CONTENT_JS_LOG
const regexp_BUTTONS_UNDS = new RegExp(         "_"           , "g"); // CONSOLE_CLEAR
//nst regexp_LOGGING_SW   = new RegExp("^SW$"                 ,  "");
//nst regexp_LOGGING_BG   = new RegExp("^BACKGROUND$"         ,  "");

/*}}}*/
let o_UI_SET_tooltips = function()
{
/*{{{*/
let log_this = LOG_MAP.O_LOG6_UI;
let log_more = log_this && LOG_MAP.O_LOG0_MORE;

    let input_array = document.getElementsByTagName( "INPUT" );
if( log_more) log_sep_top("o_UI_SET_tooltips: %c input_array.length=["+ input_array.length+"]", "LOG6_TAG");
/*}}}*/
    for(let i = 0; i < input_array.length; ++i)
    {
        /* input title {{{*/
        let input =    input_array[i];
        let title =    input.id;
if( log_more) log((i+1)+" %c["+title+"]", lb6);
        /*}}}*/
        try {
            /* HTML {{{
             *
             * <span  class="box_container">
             *  <div  class="box cb_filled_pin cb_6">
             *   <input  id="start" type="checkbox"/>
             *   <label for="start" >S</label>
             *   <div class="label_after"></div>
             *  </div>
             * </span>
             *
             *}}}*/
            /* TITLE FROM INPUT ID {{{*/

            if(    title.startsWith( "B_"     ) /* LOG_MAP background */
               ||  title.startsWith( "O_"     ) /* LOG_MAP options    */
               ||  title.startsWith( "P_"     ) /* LOG_MAP popup      */
               ||  title.endsWith  ( "JS_LOG" ) /* LOGGING            */
               ||  title.startsWith( "FILTER_") /* BUTTONS            */
               ||  title.endsWith  ( "_CLEAR" ) /* BUTTONS            */
              )
                title = title
//                  .    replace(regexp_BUTTONS_HEAD, "")
                    .    replace(regexp_LOG_MAP_HEAD, "")
//                  .    replace(regexp_LOGGING_HEAD, "")
                    .    replace(regexp_LOGGING_TAIL, "")
                    .    replace(regexp_BUTTONS_UNDS, " ")
                    .trim()
                ;

            /*}}}*/
            /* LABEL HTML {{{*/
            let label             = input.nextElementSibling;
            let label_after       = label.nextElementSibling;
            label_after.innerHTML = title;

            /*}}}*/
            /* CAPTION HTML {{{*/
            let caption;
            if( caption = label_after.nextElementSibling)
            {
                caption.innerHTML = o_UI_get_badge_for_title(title);

if( log_more) log("...caption.innerHTML=["+caption.innerHTML+"]");
            }
            /*}}}*/
        }
        catch(ex) { console.warn("*** o_UI_SET_tooltips(input.id=["+input.id+"]): "+ ex); }
    }

if( log_more) log_sep_bot("o_UI_SET_tooltips", "LOG6_TAG");
};
/*}}}*/
/*_ o_UI_get_badge_for_title {{{*/
let o_UI_get_badge_for_title = function(title)
{
    switch(title) {

        /* LOG_MAP ● background options popup {{{*/
        case "CSP"           : return "logs CSP parsing";
        case "ERROR"         : return "logs script error (!silent)";
        case "EVENT"         : return "logs events";
        case "HEADER"        : return "logs header filtering";
        case "MESSAGE"       : return "logs MESSAGES sent and receied";
        case "MORE"          : return "logs more processing details";
        case "ONHEADER"      : return "logs onBeforeRequest header filtering";
        case "PRESERVE"      : return "do not clear console between requests";
        case "STAGE"         : return "logs runtime major steps";
        case "STORE"         : return "logs storage";
        case "SUCCESS"       : return "logs CSP JSON parsing";
        case "TABS"          : return "logs tabs activation and updates";
        case "UI"            : return "logs UI callbacks";

        case "CONSOLE CLEAR" : return "To clear all Devtools consoles";
        case "STORAGE CLEAR" : return "To clear chrome.storage data";
        case "FILTER3_REMOVE": return "Remove all CSP rules";
        case "FILTER4_CUSTOM": return "Replace with CUSTOM CSP rules ";
        case "FILTER5_RELAX" : return "Replace with RELAXED CSP rules";
        case "FILTER6_NONE"  : return "Replace with EMPTY CSP rules";
        case "LOG_PANEL"     : return "Logging checkbox panel";
        case "ONREQUEST"     : return "logs HTTP Request commands";

        /*}}}*/
        /* LOGGING ● bg_xxx.js{{{*/
        case "SW"                   : return  "logs Service Worker script"     ;
        case "BACKGROUND"           : return  "logs background main script"    ;
        case "BG CONTENT"           : return  "logs background content script" ;
        case "BG CSP"               : return  "logs background csp script"     ;
        case "BG EVENT"             : return  "logs background event script"   ;
        case "BG HEADER"            : return  "logs background header script"  ;
        case "BG MESSAGE"           : return  "logs background message script" ;
        case "BG PAGE"              : return  "logs background page script"    ;
        case "BG SETTINGS"          : return  "logs background settings script";
        case "BG STORE"             : return  "logs background store script"   ;
        case "BG TABS"              : return  "logs background tabs script"    ;

        /*}}}*/
        default         :
        {
            let  warning_msg = " No caption for ["+ title +"]";
            log("%c"+warning_msg, lb0);
//          console.trace();
            return "<h2>TODO</h2>"+warning_msg;
        }
    }

};
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ MESSAGE                                                 O_LOG1_MESSAGE │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*_ o_sendMessage {{{*/
let o_sendMessage = function(message,response_handler,_caller)
{
/*{{{*/
let   caller = "o_sendMessage";
let log_this = LOG_MAP.O_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.O_LOG0_MORE;


    message.caller = O_SCRIPT_ID+"."+_caller;
let message_tag = message.cmd || message.csp_filter || message.set_log_tag || message.caller;

if( log_this) log       ("%c"+_caller+"→"+caller, lb1);
if( log_this) log_object("..."       , { message_tag, response_handler, _caller });
if( log_more) log_object(caller      ,   message);
/*}}}*/
    if( !chrome.runtime ) return;
    try {
        if(response_handler) chrome.runtime.sendMessage(message, response_handler);
        else                 chrome.runtime.sendMessage(message                  );
    }
    catch(ex) {
        console.error(O_SCRIPT_ID+" ERROR:\n"+ ex);
        o_UI_set_statusline_text("⚠ "+ex.message+" ⚠");
    }

};
/*}}}*/
/*_ SELECT_CSP_FILTER {{{*/
let SELECT_CSP_FILTER = function(csp_filter,details)
{
/*{{{*/
let   caller = "SELECT_CSP_FILTER";
let log_this = LOG_MAP.O_LOG1_MESSAGE;

    if(!csp_filter) csp_filter = "FILTER6_NONE";

if( log_this) log("%c "+caller+" %c("+csp_filter+")", lb6,lb0);
/*}}}*/
    /* UI RADIO SYNC */
    o_UI_show_panel_radio( csp_filter );

    /* SYNC STORAGE */
    o_STORE_SET_from_UI(caller+"("+csp_filter+")");

    /* SYNC MESSAGE */
    let message
        = {   csp_filter
            , caller     : O_SCRIPT_ID+"."+caller+"("+details+")"
        };

    o_sendMessage(message, SELECT_CSP_FILTER_response_handler, caller);
};
/*}}}*/
/*_ SELECT_CSP_FILTER_response_handler {{{*/
let SELECT_CSP_FILTER_response_handler = function(response)
{
/*{{{*/
let   caller = "SELECT_CSP_FILTER_response_handler";
let log_this = LOG_MAP.O_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.O_LOG0_MORE;

if( log_this) log("%c"+caller, lbH+lf3);
if( log_more) log("...response=[%c"+response+"]", lf8);
/*}}}*/

    if(!response)
    {
        log("%c NO RESPONSE %c ➔ %c To be expected when target process is not running"
            , lbb+lbH+lf3  ,lbb+lbL+lf5 ,lbb+lbR+lf5);
    }
    else if( String(response).startsWith("FAILURE") )
    {
        o_UI_show_CSP_FILTER_FAILURE("SELECT FILTER: "+ response);
        o_UI_set_statusline_text(response);
    }
    else if(typeof response == "object")
    {
        let        textarea = document.getElementById( FILTER_TEXTAREA );
        textarea.csp_filter = response.csp_filter;
        textarea.     value = response.value;
        textarea.     title = "";

        o_UI_show_CSP_FILTER_SUCCESS("SELECT FILTER: "+ response);//(response ? (response.length+" bytes") : response));
        o_UI_set_statusline_text("");
    }

    logn_STORE();
};
/*}}}*/
/*_ EDIT_CSP_FILTER {{{*/
let EDIT_CSP_FILTER = function()
{
/*{{{*/
let   caller = "EDIT_CSP_FILTER";
let log_this = LOG_MAP.O_LOG1_MESSAGE;

if( log_this) log("%c"+caller, lb1);
/*}}}*/
    /* EDIT [csp_json] from UI {{{*/

    let textarea = document.getElementById( FILTER_TEXTAREA );

    let message
        = {   csp_filter : textarea.csp_filter
            , cmd        : "edit"
            , csp_json   : textarea.value
            , caller     : O_SCRIPT_ID+"."+caller
        };
    o_sendMessage(message, EDIT_CSP_FILTER_response_handler, caller);
    /*}}}*/
};
/*}}}*/
/*_ EDIT_CSP_FILTER_response_handler {{{*/
/*{{{*/
const     DEFAULT_BG_COLOR =     ""; const     DEFAULT_FG_COLOR =     ""; /* EXTENSION WORK CSP */
const      REMOVE_BG_COLOR = "#520"; const      REMOVE_FG_COLOR = "#F40"; /* DISCARDING ALL CSP */
const NULL_FILTER_BG_COLOR = "#666"; const NULL_FILTER_FG_COLOR = "#DDD"; /* wont work with CSP */
const      CUSTOM_BG_COLOR = "#EE0"; const      CUSTOM_FG_COLOR = "#444"; /* USER FILTERING CSP */
const     FAILURE_BG_COLOR = "#FBB"; const     FAILURE_FG_COLOR = "#000"; /* FAILURE FILTER CSP */

/*}}}*/
let EDIT_CSP_FILTER_response_handler = function(response)
{
/*{{{*/
let   caller = "EDIT_CSP_FILTER_response_handler";
let log_this = LOG_MAP.O_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.O_LOG0_MORE;

/*}}}*/
    if(response == undefined) return;

    let success_failure_or_value
        = String(response).startsWith("SUCCESS") ? "SUCCESS"
        : String(response).startsWith("FAILURE") ? "FAILURE"
        :                                       "FILTER SET"
    ;

    let l_x
        = String(response).startsWith("SUCCESS") ? lf5
        : String(response).startsWith("FAILURE") ? lf2
        :                                          lf0
    ;

if( log_this) log("%c"+caller, l_x);
if( log_more) log_object("response",response, lf1);
if( log_this) log("...%c success_failure_or_value %c "+success_failure_or_value
                  ,    lbL                       ,l_x);

    switch(success_failure_or_value) {
    case "FAILURE": { o_UI_show_CSP_FILTER_FAILURE("EDIT FILTER: "+ response ); o_UI_set_statusline_text("⚠ "+response+" ⚠"); } break;
    case "SUCCESS": { o_UI_show_CSP_FILTER_SUCCESS("EDIT FILTER: "+ response ); o_UI_set_statusline_text(                ""); } break;
    default       : { o_UI_show_CSP_FILTER_SUCCESS( success_failure_or_value ); o_UI_set_statusline_text(                "");
        let           el = document.getElementById( FILTER_TEXTAREA ); el.value = response;    el.title =                "" ; } break;
    }
};
/*}}}*/
/*_ SEND_LOG_ITEM {{{*/
let SEND_LOG_ITEM = function({tag,state})
{
/*{{{*/
let   caller = "SEND_LOG_ITEM";
let log_this = LOG_MAP.O_LOG1_MESSAGE;

if( log_this) log("%c"+caller+"%c("+tag+" , "+state+")", lb1,lb0);
/*}}}*/
    switch(tag) {
        /* ➔ O_SCRIPT {{{*/
        case "O_LOG1_MESSAGE"   : LOG_MAP.O_LOG1_MESSAGE = state; break;
        case "O_LOG2_ERROR"     : LOG_MAP.O_LOG2_ERROR   = state; break;
        case "O_LOG5_SUCCESS"   : LOG_MAP.O_LOG5_SUCCESS = state; break;
        case "O_LOG6_UI"        : LOG_MAP.O_LOG6_UI      = state; break;
        case "O_LOG8_STORE"     : LOG_MAP.O_LOG8_STORE   = state; break;
        case "O_LOG0_MORE"      : LOG_MAP.O_LOG0_MORE    = state; break;

        /*}}}*/
        /* ➔ B_SCRIPT or P_SCRIPT {{{*/
        default: {
            let message
                = {   set_log_tag   : tag
                    , set_log_state : state
                    , caller        : O_SCRIPT_ID+"."+caller
                };
            o_sendMessage(message, SEND_LOG_ITEM_response_handler, caller);
        }
        /*}}}*/
    }
};
/*}}}*/
/*_ SEND_LOG_ITEM_response_handler {{{*/
let SEND_LOG_ITEM_response_handler = function(response)
{
/*{{{*/
let   caller = "SEND_LOG_ITEM_response_handler";
let log_this = LOG_MAP.O_LOG1_MESSAGE;

if( log_this) log("%c"+caller+"%c"+JSON.stringify(response), lbL+lf1, lbR+lf7);
/*}}}*/

    if(!response)
    {
        log("%c NO RESPONSE %c ➔ %c To be expected when target process is not running"
            , lbb+lbH+lf3  ,lbb+lbL+lf5 ,lbb+lbR+lf5);
    }
    else if(typeof response == "object")
    {
        o_UI_SET_from_STORAGE( response );
    }

};
/*}}}*/
/*_ SEND_CLEAR_MESSAGE {{{*/
let SEND_CLEAR_MESSAGE = function()
{
let   caller = "SEND_CLEAR_MESSAGE";

    let message
        = {   cmd           : "console_clear"
            , caller        : O_SCRIPT_ID+"."+caller
            , preserve      : (document.getElementById("B_LOG3_PRESERVE") || {}).checked
        };
    o_sendMessage(message, null, caller); // .. no response_handler

    log_js.log_console_clear(message.preserve, caller); /* clear options console as well */
};
/*}}}*/

/*_ init c l {{{*/
let init = () => { o_addEventListeners(); if(chrome.storage) chrome.storage.sync.get(null, o_LOAD_STORE_items); };
let    c = log_js.clear;
let    l = logn;

/*}}}*/


    return { init             // reload storage
           , c                // console.clear();
           , l                // log .. set .. get .. show
        // DEBUG
        , s  : (text) => o_UI_set_statusline_text(text ? "⚠ "+text+" ⚠" : "")
        , sg : () => chrome.storage.sync.get(null, (items) => log_object("storage.get", items))



    };
})();

let        o =  options_js; /* @so that we can call o.l() from Devtools.console */
/*......*/ o.init();

