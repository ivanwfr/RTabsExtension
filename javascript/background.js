// ┌───────────────────────────────────────────────────────────────────────────┐
// │ background.js ......................................... BACKGROUND SCRIPT │
// └───────────────────────────────────────────────────────────────────────────┘
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* eslint-disable no-warning-comments */
/* eslint-disable prefer-spread       */
/* eslint-disable prefer-rest-params  */
/* eslint-disable valid-jsdoc         */
/* eslint-disable no-redeclare        */

/* globals console, chrome            */
/* globals setTimeout, clearTimeout   */
/* globals Map                        */

/* globals  log_js                    */
/* exported background_js             */
/* globals  bg_content                */
/* globals  bg_csp                    */ //DEBUG ONLY
/* globals  bg_event                  */
/* globals  bg_header                 */ //DEBUG ONLY
/* globals  bg_message                */
/* globals  bg_page                   */
/* globals  bg_settings               */ //DEBUG ONLY
/* globals  bg_store                  */
/* globals  bg_tabs                   */

/* eslint-enable  no-redeclare        */

const MANIFEST_VERSION      = (typeof chrome.tabs.executeScript == "undefined") ?  "v3" : "v2";

const B_SCRIPT_ID           = "background_js";
const B_SCRIPT_TAG          =  B_SCRIPT_ID +" "+MANIFEST_VERSION+" (230830:21h:56)"; /* eslint-disable-line no-unused-vars */
const DOM_TOOLS_JS_ID       = "dom_tools_js";
const DOM_LOAD_ID           = "dom_load";
/*}}}*/
// ┌───────────────────────────────────────────────────────────────────────────┐
// │ BACKGROUND                                                      EXTENSION │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
"● javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_event.js
:e javascript/bg_header.js
:e javascript/bg_message.js
:e javascript/bg_page.js        " DEBUG_OPERA
:e javascript/bg_settings.js
:e javascript/bg_store.js
:e javascript/bg_tabs.js        " DEBUG_OPERA
:e javascript/options.js
:e javascript/popup.js
:e javascript/worker.js
/* └─────────────────────────────┘*/
let background_js = (function() {
"use strict";

/* IMPORT {{{*/
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
/* eslint-enable  no-unused-vars */

let   ellipsis
    , log
    , log_o_sort
    , log_object
    , log_sep_bot
    , log_sep_top
    , mPadEnd
    , mPadStart
    , pause
    , reload
    , li
;

/*}}}*/
//_______________ background_js
/*_ bg_content {{{*/
let bg_content_scripts_loaded;

/*}}}*/
//_______________ bg_csp
/*_ bg_event {{{*/
let bg_event_addListeners;

/*}}}*/
//_______________ bg_header
//_______________ bg_message
//_______________ bg_page
//_______________ bg_settings
/*_ bg_store {{{*/
let bg_store_GET_url_domain;
let bg_store_LOAD_items;
let bg_store_SAVE_items;

/*}}}*/
/*_ bg_tabs {{{*/
let bg_tabs_del_tabId;
let bg_tabs_get_tabId_key;
let bg_tabs_log_LAST_ACTIVATED_TAB;
let bg_tabs_log_TABS_MAP;
let bg_tabs_set_tabId_key_val;

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
    ellipsis                        = log_js.ellipsis;                                          li("log_js","ellipsis",ellipsis);
    log                             = log_js.log;                                               li("log_js","log",log);
    log_o_sort                      = log_js.log_o_sort;                                        li("log_js","log_o_sort",log_o_sort);
    log_object                      = log_js.log_object;                                        li("log_js","log_object",log_object);
    log_sep_bot                     = log_js.log_sep_bot;                                       li("log_js","log_sep_bot",log_sep_bot);
    log_sep_top                     = log_js.log_sep_top;                                       li("log_js","log_sep_top",log_sep_top);
    mPadEnd                         = log_js.mPadEnd;                                           li("log_js","mPadEnd",mPadEnd);
    mPadStart                       = log_js.mPadStart;                                         li("log_js","mPadStart",mPadStart);
    pause                           = log_js.pause;                                             li("log_js","pause",pause);
    reload                          = log_js.reload;                                            li("log_js","reload",reload);

    /*}}}*/
    //_______________________ background_js
    modules.push( bg_content    ); /*{{{*/
    bg_content_scripts_loaded       = bg_content.bg_content_scripts_loaded;                     li("bg_content","bg_content_scripts_loaded",bg_content_scripts_loaded);

    /*}}}*/
    //_______________________ bg_csp
    modules.push( bg_event      ); /*{{{*/
    bg_event_addListeners           = bg_event.bg_event_addListeners;                           li("bg_event","bg_event_addListeners",bg_event_addListeners);

    /*}}}*/
    //_______________________ bg_header
    //_______________________ bg_message
    //_______________________ bg_page
    //_______________________ bg_settings
    modules.push( bg_store      ); /*{{{*/
    bg_store_GET_url_domain         = bg_store.bg_store_GET_url_domain;                         li("bg_store","bg_store_GET_url_domain",bg_store_GET_url_domain);
    bg_store_LOAD_items             = bg_store.bg_store_LOAD_items;                             li("bg_store","bg_store_LOAD_items",bg_store_LOAD_items);
    bg_store_SAVE_items             = bg_store.bg_store_SAVE_items;                             li("bg_store","bg_store_SAVE_items",bg_store_SAVE_items);

    /*}}}*/
    modules.push( bg_tabs       ); /*{{{*/
    bg_tabs_del_tabId               = bg_tabs.bg_tabs_del_tabId;                                li("bg_tabs","bg_tabs_del_tabId",bg_tabs_del_tabId);
    bg_tabs_get_tabId_key           = bg_tabs.bg_tabs_get_tabId_key;                            li("bg_tabs","bg_tabs_get_tabId_key",bg_tabs_get_tabId_key);
    bg_tabs_log_LAST_ACTIVATED_TAB  = bg_tabs.bg_tabs_log_LAST_ACTIVATED_TAB;                   li("bg_tabs","bg_tabs_log_LAST_ACTIVATED_TAB",bg_tabs_log_LAST_ACTIVATED_TAB);
    bg_tabs_log_TABS_MAP            = bg_tabs.bg_tabs_log_TABS_MAP;                             li("bg_tabs","bg_tabs_log_TABS_MAP",bg_tabs_log_TABS_MAP);
    bg_tabs_set_tabId_key_val       = bg_tabs.bg_tabs_set_tabId_key_val;                        li("bg_tabs","bg_tabs_set_tabId_key_val",bg_tabs_set_tabId_key_val);

    /*}}}*/
    log_js.log_set_type("B");
    log_js.log_import(background_js, modules);
};
/*}}}*/
/*}}}*/
    setTimeout(_import,0);
/* LOGGING {{{*/
let BACKGROUND_JS_LOG  = false;
/*_ logging {{{*/
let logging = function(state)
{
    if(state != undefined) {           BACKGROUND_JS_LOG = state;
        if(state) bg_store_SAVE_items({BACKGROUND_JS_LOG           });
        else      bg_store_SAVE_items({BACKGROUND_JS_LOG: undefined});
    }
    return BACKGROUND_JS_LOG;
};
/*}}}*/
/*_ log_this_get {{{*/
let log_this_get = function(_caller)
{
    switch(_caller) {
    case "b_check_manifest"       : return BACKGROUND_JS_LOG || log_ACTIVATED();
    case "b_sleep"                : return BACKGROUND_JS_LOG || LOG_MAP.B_LOG9_STAGE;
    case "logn_STORE"             : return BACKGROUND_JS_LOG || LOG_MAP.B_LOG8_STORE;
    }

/*{{{*/
    log("%c"+B_SCRIPT_ID          +"%c log_this_get: missing switch %c"+_caller
        ,lbH+lb2                   ,lbL+lf2                        ,lbR+lf4    );

    return false;
/*}}}*/
};
        /*}}}*/
/*}}}*/
/* LOG_MAP {{{*/
/*➔ LOG_MAP {{{*/
let LOG_MAP = {
    B_LOG1_MESSAGE    : false,
    B_LOG2_ERROR      :  true,
    B_LOG3_PRESERVE   : false,
    B_LOG4_CSP        : false,
    B_LOG5_ONREQUEST  : false,
    B_LOG6_ONHEADER   : false,
    B_LOG7_TABS       : false,
    B_LOG8_STORE      : false,
    B_LOG9_STAGE      : false,
    B_LOG0_MORE       : false
};
/*}}}*/
/* CHROME_API_DICT {{{*/
    const CHROME_API_DICT
    = { action                              : !!chrome.action
      , app                                 : !!chrome.app
      , browsingData                        : !!chrome.browsingData
      , com                                 : !!chrome.com
      , declarativeNetRequest               : !!chrome.declarativeNetRequest
      , declarativeNetRequestFeedback       : !!chrome.declarativeNetRequestFeedback
      , declarativeNetRequestWithHostAccess : !!chrome.declarativeNetRequestWithHostAccess
      , history                             : !!chrome.history
      , pageAction                          : !!chrome.pageAction
      , permissions                         : !!chrome.permissions
      , runtime                             : !!chrome.runtime
      , scripting                           : !!chrome.scripting
      , storage                             : !!chrome.storage
      , store                               : !!chrome.store
      , tabs                                : !!chrome.tabs
      , tabs_scripting                      : !!chrome.tabs_scripting
      , webNavigation                       : !!chrome.webNavigation
      , webRequest                          : !!chrome.webRequest
      , windows                             : !!chrome.windows
    };

/*}}}*/
/*_ logn {{{*/
let logn = function(n)
{
try {
    /* TOGGLE [log_tag] {{{*/
//  let caller = "logn("+n+")";

    let log_tag
        = (n == 1        ) ? "B_LOG1_MESSAGE"
        : (n == 2        ) ? "B_LOG2_ERROR"
        : (n == 3        ) ? "B_LOG3_PRESERVE"
        : (n == 4        ) ? "B_LOG4_CSP"
        : (n == 5        ) ? "B_LOG5_ONREQUEST"
        : (n == 6        ) ? "B_LOG6_ONHEADER"
        : (n == 7        ) ? "B_LOG7_TABS"
        : (n == 8        ) ? "B_LOG8_STORE"
        : (n == 9        ) ? "B_LOG9_STAGE"
        : (n == 0        ) ? "B_LOG0_MORE"
        : (n != undefined) ? "*"
        :                    ""
    ;

    /*}}}*/
    /* STORE  [log_tag] {{{*/
    if( log_tag )
    {
        if(log_tag == "*") {
            let new_state    = !log_MAP_ACTIVATED();
            Object.keys(LOG_MAP).filter((key) => LOG_MAP[key] = new_state);
        }
        else {
            LOG_MAP[log_tag] = !LOG_MAP[log_tag];
        }

        LOG_MAP.B_LOG2_ERROR = (log_tag != "B_LOG2_ERROR") && log_MAP_ACTIVATED();

        logn_STORE();
    }
    /*}}}*/
    /* LOG    [log_tag] [lastError] [SYN] {{{*/
    if( chrome.runtime.lastError ) return chrome.runtime.lastError.message;
    if(!log_tag || (log_tag=="*")) return SYN; // SYMBOL BLACK CIRCLE

    let    mark = LOG_MAP[log_tag] ? SYMBOL_CHECK_MARK : L_CLR;
    return mark+" "+log_tag+"="+LOG_MAP[log_tag];
    /*}}}*/
} finally { log_STORAGE(); }
};
/*}}}*/
/*_ logn_STORE {{{*/
let logn_STORE = function()
{
/*{{{*/
let   caller = "logn_STORE";
let log_this = log_this_get(caller);

if( log_this) log(caller+": %c SAVING [LOG_MAP]", lb8);
/*}}}*/
    log("%c SAVING [LOG_MAP]", lb9);
    let log_items
        = {     B_LOG1_MESSAGE  : LOG_MAP.B_LOG1_MESSAGE
            ,   B_LOG2_ERROR    : LOG_MAP.B_LOG2_ERROR
            ,   B_LOG3_PRESERVE : LOG_MAP.B_LOG3_PRESERVE
            ,   B_LOG4_CSP      : LOG_MAP.B_LOG4_CSP
            ,   B_LOG5_ONREQUEST: LOG_MAP.B_LOG5_ONREQUEST
            ,   B_LOG6_ONHEADER : LOG_MAP.B_LOG6_ONHEADER
            ,   B_LOG7_TABS     : LOG_MAP.B_LOG7_TABS
            ,   B_LOG8_STORE    : LOG_MAP.B_LOG8_STORE
            ,   B_LOG9_STAGE    : LOG_MAP.B_LOG9_STAGE
            ,   B_LOG0_MORE     : LOG_MAP.B_LOG0_MORE
        };

    // ┌──────────────────────────────────────────┐
    // │ LOG_MAP EXTENSION PERSISTENCE            │
    // └──────────────────────────────────────────┘
    bg_store_SAVE_items(log_items, log_js.get_callers_bot());

    /* propagate log_more to log modules */
    log_js.set_log_more( LOG_MAP.B_LOG0_MORE ) ;

};
/*}}}*/
/*_ logn_USAGE {{{*/
let logn_USAGE = function()
{
    let  s  = ""                         , args=[""];
    /**/ s += "%c b.l(1) .. MESSAGE\n"   ; args.push(    lf1);
    /**/ s += "%c b.l(2) .. ERROR\n"     ; args.push(    lf2);
    /**/ s += "%c b.l(3) .. PRESERVE\n"  ; args.push(    lf3);
    /**/ s += "%c b.l(4) .. CSP\n"       ; args.push(    lf4);
    /**/ s += "%c b.l(5) .. ONREQUEST\n" ; args.push(    lf5);
    /**/ s += "%c b.l(6) .. ONHEADER\n"  ; args.push(    lf6);
    /**/ s += "%c b.l(7) .. TABS\n"       ; args.push(    lf7);
    /**/ s += "%c b.l(8) .. STORE\n"     ; args.push(    lf8);
    /**/ s += "%c b.l(9) .. STAGE\n"     ; args.push(    lf9);
    /**/ s += "%c b.l(0) .. MORE\n"      ; args.push(    lf0);
    /**/ s += "%c b.l( ) .. status\n"    ; args.push(    lf9);
    /**/ s += "%c b.r    == reload\n"    ; args.push(    lf8);
    /**/ s += "%c b.c    == clear\n"     ; args.push(    lf8);
    /**/ s += "%c b.p    == pause"       ; args.push(    lf8);
    args[0] = s;

    log_js.log_group ("%c"+SAR+"%c LOG_MAP "+SAD, lbb+lbH+lb0, lbH+lb0);
    console.log.apply(console, args);
    console.groupEnd();
};
/*}}}*/
/*_ log_LOG_MAP {{{*/
let log_LOG_MAP = function(items)
{
    /*.......................*/ let s  = "%c"+B_SCRIPT_ID   , args=["", lbL+lb0];
    if( LOG_MAP.B_LOG1_MESSAGE  ) { s += "%c 1 MESSAGE "    ; args.push(lbC+lb1); }
    if( LOG_MAP.B_LOG2_ERROR    ) { s += "%c 2 ERROR "      ; args.push(lbC+lb2); }
    if( LOG_MAP.B_LOG3_PRESERVE ) { s += "%c 3 PRESERVE "   ; args.push(lbC+lb3); }
    if( LOG_MAP.B_LOG4_CSP      ) { s += "%c 4 CSP "        ; args.push(lbC+lb4); }
    if( LOG_MAP.B_LOG5_ONREQUEST) { s += "%c 5 ONREQUEST "  ; args.push(lbC+lb5); }
    if( LOG_MAP.B_LOG6_ONHEADER ) { s += "%c 6 ONHEADER "   ; args.push(lbC+lb6); }
    if( LOG_MAP.B_LOG7_TABS     ) { s += "%c 7 TABS "       ; args.push(lbC+lb7); }
    if( LOG_MAP.B_LOG8_STORE    ) { s += "%c 8 STORE "      ; args.push(lbC+lb8); }
    if( LOG_MAP.B_LOG9_STAGE    ) { s += "%c 9 STAGE "      ; args.push(lbC+lb9); }
    if( LOG_MAP.B_LOG0_MORE     ) { s += "%c 0 MORE "       ; args.push(lbC+lb0); }
    if(args.length == 2)          { s += "%c NO LOGGING"    ; args.push(lbR+lf0); }
    else                          { s += "%c "              ; args.push(lbR    ); }
    /*.................*/ args[0] = s;

    if(items || !chrome.store)
    {
        console.groupCollapsed.apply(console, args);

        logn_USAGE();

        /* CHROME_API_DICT {{{*/
        let chrome_api_defined = {};
        Object.keys(CHROME_API_DICT).filter((key) => {
            if(     CHROME_API_DICT[key])   chrome_api_defined[key] =  "ON";
            else                            chrome_api_defined[key] = "OFF";
        });
        log_o_sort("chrome_api_defined",    chrome_api_defined, lb0+lf5);

        /*}}}*/

        if(!chrome.storage)
            log_o_sort(SYMBOL_CONSTRUCTION+"chrome.storage is undefined"+SYMBOL_CONSTRUCTION+" LOG_MAP", LOG_MAP, lb2+lf4);
        else
            log_o_sort("STORAGE",items, lf7);

        bg_tabs_log_TABS_MAP();

        log_object("background_js",background_js, lf9);

        console.groupEnd();
    }
    else {
        console.log.apply           (console, args);
    }

};
/*}}}*/
/*➔ log_ACTIVATED {{{*/
let log_ACTIVATED = function()
{
    return log_MAP_ACTIVATED() || logging_ACTIVATED();
};
/*}}}*/
/*➔ log_MAP_ACTIVATED {{{*/
let log_MAP_ACTIVATED = function()
{
    return (   LOG_MAP.B_LOG1_MESSAGE
            // LOG_MAP.B_LOG2_ERROR
            // LOG_MAP.B_LOG3_PRESERVE
            || LOG_MAP.B_LOG4_CSP
            || LOG_MAP.B_LOG5_ONREQUEST
            || LOG_MAP.B_LOG6_ONHEADER
            || LOG_MAP.B_LOG7_TABS
            || LOG_MAP.B_LOG8_STORE
            || LOG_MAP.B_LOG9_STAGE
            // LOG_MAP.B_LOG0_MORE
           );

};
/*}}}*/
/*➔ logging_ACTIVATED {{{*/
let logging_ACTIVATED = function()
{
    let result = (background_js  .logging() ? " background_js" : "")
               + (bg_content     .logging() ? " bg_content"    : "")
               + (bg_csp         .logging() ? " bg_csp"        : "")
               + (bg_event       .logging() ? " bg_event"      : "")
               + (bg_header      .logging() ? " bg_header"     : "")
               + (bg_message     .logging() ? " bg_message"    : "")
               + (bg_page        .logging() ? " bg_page"       : "")
               + (bg_settings    .logging() ? " bg_setting"    : "")
               + (bg_store       .logging() ? " bg_store"      : "")
               + (bg_tabs        .logging() ? " bg_tabs"       : "")
           ;

    return result;
};
/*}}}*/
/*➔ log_IGNORING {{{*/
let log_IGNORING = function(url,caller)
{
// ┌───────────────────────────────────────────────────────────────────────────┐
// │ NOTIFY LOGGING EXCEPTION ABOUT SOME TRIVIAL ITEMS                         │
// └───────────────────────────────────────────────────────────────────────────┘

    if(!log_ACTIVATED()) return;

    let key = caller;
    let idx = log_get_IDX_for_caller(key) ;
    let lfx = lfX[ idx ];
    log("%c"+L_CLR+"%c"+mPadEnd(caller,40)+"%c IGNORING %c"+url
        ,lbb+lf2   ,lbL+lfx                ,lbC+lf2    ,lbR+lb0);
};
/*}}}*/
    /*➔ log_STORAGE {{{*/
    /*{{{*/
    const B_STORAGE_GET_DELAY = 2000;

let   log_STORAGE_timer;
/*}}}*/
let log_STORAGE = function()
{
    /*{{{*/
    let caller = "log_STORAGE";

    /*}}}*/

    if( log_STORAGE_timer) clearTimeout(log_STORAGE_timer  );

    if( chrome.storage ) {
        new Promise(function executor(resolve) { /* eslint-disable-line no-new */
            log_STORAGE_timer
                = setTimeout(  () => {
                    chrome.storage.sync.get(null, (items) => resolve(log_LOG_MAP(items)));
                }, B_STORAGE_GET_DELAY);
        });
    }
    else {
        log_STORAGE_timer
            = setTimeout(() => {
                log("%c"+SYMBOL_CONSTRUCTION+"chrome.storage is undefined in "+caller+SYMBOL_CONSTRUCTION, lbB+lbH+lb2+lf4);
                log_LOG_MAP();
            }, B_STORAGE_GET_DELAY);
    }

};
/*}}}*/

/*➔ log_get_caller_tag_FOR_key_val_caller {{{*/
let log_get_caller_tag_FOR_key_val_caller   = function(key,val,callers_bot)
{
    let val_tag
        = (typeof val == "object") ? Object.keys(val).toString()
        :         val              ?             val .toString()
        :                                              undefined;

/*{{{
    let left_tag
        = val_tag
        ?  mPadStart(key, 30)+": "+mPadEnd(ellipsis(val_tag,50)         , 50)
        :  mPadStart(key, 30)+": "+mPadEnd(L_CLR+L_CLR+L_CLR+"(removed)", 50)
        ;
}}}*/

    let left_tag
        = val_tag
        ?            key     +": "+        ellipsis(val_tag,50)
        :            key     +": "+        L_CLR+L_CLR+L_CLR+"(removed)"
        ;

    let    caller_tag = mPadStart(callers_bot+" → ["+left_tag+"]",50);
    return caller_tag;
};
/*}}}*/
/*➔ log_sep_top_FOR_caller_callee {{{*/
let log_sep_top_FOR_caller_callee           = function(caller,callee)
{
    if(LOG_MAP.B_LOG0_MORE && log_ACTIVATED()) {
        let key = caller;
        let idx = log_get_IDX_for_caller(key) ;
        log_sep_top(caller+": CALLING "+callee, idx%10);
    }
};
/*}}}*/
/*➔ log_sep_bot_FOR_caller_callee {{{*/
let log_sep_bot_FOR_caller_callee           = function(caller,callee)
{
    if(LOG_MAP.B_LOG0_MORE && log_ACTIVATED()) {
        let key = caller;
        let idx = log_get_IDX_for_caller(key) ;
        log_sep_bot(caller+": .CALLED "+callee, idx);
    }
};
/*}}}*/
/*_ log_TAB_tabId_callee_callers_bot {{{*/
let log_TAB_tabId_callee_callers_bot        = function(tabId,_caller,callers_bot) /* eslint-disable-line no-unused-vars */
{
    let idx    = log_get_IDX_for_caller(callers_bot) ;
    let lfx    = lfX[ idx ];
    let url    = bg_tabs_get_tabId_key(tabId, "url") ;
    let domain = bg_store_GET_url_domain( url );

    log("%c "+callers_bot+"%c"+log_js.LOG_SDX[idx]+"%c"+_caller+"%c"+domain
        ,lbH+lfx ,lbB+lfx                        ,lbL+lf3     ,lbR+lb0);
};
/*}}}*/
/*➔ log_TAB_HANDLERS_CALLS {{{*/
let log_TAB_HANDLERS_CALLS = function()
{
    if(TAB_HANDLERS_MAP.size > 0)
        log_object("TABS HANDERS LOGGED", TAB_HANDLERS_MAP, lf0);
};
/*}}}*/
/*_ log_get_IDX_for_caller {{{*/
const TAB_HANDLERS_MAP = new Map();

let   log_get_IDX_for_caller= function(key)
{
    if(!TAB_HANDLERS_MAP.get( key ))
        TAB_HANDLERS_MAP.set( key , TAB_HANDLERS_MAP.size+1); // add new key's ORDER (base 1)

    return TAB_HANDLERS_MAP.get( key                     );
};
/*}}}*/
/*}}}*/
/*{{{*/
const B_ON_HEADER_RECEIVED = "HEADER RECEIVED";

const CHROME_SCHEME       = "chrome:";
const CHROME_SCHEME_REGEX = /.*chrome:/;

/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ MANIFEST                                           MANIFEST_VERSION=="v3" │
// └───────────────────────────────────────────────────────────────────────────┘
/*➔ b_check_manifest {{{*/
// eslint-disable no-redeclare */
// eslint-disable no-undef     */
let b_check_manifest = async function(_log_this=false)
{
/*{{{*/
let caller   = "b_check_manifest";
let log_this = log_this_get(caller) || _log_this;
//t log_tag  = (MANIFEST_VERSION == "v3") ? "LOG3_TAG" : "LOG2_TAG";

/*}}}*/

    // ┌──────────────────────────────────────────────────────────┐
    // │ Manifest version  [chrome.runtime.getManifest]           │
    // │ Popup action      [chrome.pageAction] .. [chrome.action] │
    // │ executeScript     [chrome.tabs]                          │
    // │ executeScript     [chrome.scripting]                     │
    // └──────────────────────────────────────────────────────────┘

    let      manifest       =   chrome.runtime.getManifest();
    let info_pageAction     = ((chrome.pageAction && chrome.pageAction             ));
    let info_action         = ((chrome.action     && chrome.action                 ));
    let info_executeScript  = ((chrome.tabs       && chrome.tabs.executeScript     ));
    let info_scripting      = ((chrome.scripting  && chrome.scripting.executeScript));
    let info_tabs_scripting = ((chrome.scripting  && chrome.tabs     .executeScript));

/*{{{*/
if( log_this)
{
    log_object("MANIFEST v"+manifest.manifest_version, manifest, lfX[manifest.manifest_version]);

    if(chrome.permissions)
    {
        let permissions = await chrome.permissions.getAll();
        log_object("● permissions ", permissions, lf5);
    }
    if(chrome.declarativeNetRequest)
    {
        let dynamic_Rules = await chrome.declarativeNetRequest.getDynamicRules();
        if(dynamic_Rules.length) log_object("● dynamic_Rules ", dynamic_Rules, lf6);
        else                     log    ("%c ● dynamic_Rules is EMPTY"   , lbH+lb0);

        let session_Rules = await chrome.declarativeNetRequest.getSessionRules();
        if(session_Rules.length) log_object("● session_Rules ", session_Rules, lf7);
        else                     log    ("%c ● session_Rules is EMPTY"   , lbH+lb0);
    }

    let api_features =
        { "chrome.tabs.executeScript"           : (typeof info_executeScript  )
        , "chrome.action"                       : (typeof info_action         )
        , "chrome.pageAction"                   : (typeof info_pageAction     )
        , "chrome.scripting.executeScript"      : (typeof info_scripting      )
        , "chrome.tabs_scripting.executeScript" : (typeof info_tabs_scripting )
        };
    log_object("API FEATURES", api_features, lf3);
}
/*}}}*/
};
// eslint-enable  no-undef     */
// eslint-enable  no-redeclare */
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ UTIL                                                                      │
// └───────────────────────────────────────────────────────────────────────────┘
/*_ b_sleep {{{*/
let b_sleep = async function(delay)
{
/*{{{*/
let   caller = "b_sleep";
let log_this = log_this_get(caller);

if( log_this) log("%c"+SD6+"%c SLEEPING "+delay+"ms %c "+log_js.get_callers_bot(), lbB+lf6, lbH+lf6, lbb+lbH+lb6);
/*}}}*/

    await new Promise(function executor(resolve)
                      {
                          setTimeout(() => resolve((log_this) && log("resolve: sleep "+delay+" DONE") ), delay);
                      });

/*{{{*/
if( log_this) log("b_sleep DONE");
/*}}}*/
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ EXPORT                                                                    │
// └───────────────────────────────────────────────────────────────────────────┘
/*➔ init c l r {{{*/
let init = () => {
    if(chrome.storage) {
        chrome.storage.sync.get(null, bg_store_LOAD_items);
    }
    else {
        logn(-1);
        logn( 3);
    }
    setTimeout(bg_event_addListeners,500);
};
let    c = log_js.clear;
let    l = logn;
let    r = reload;
let   tl = () => bg_tabs.bg_tabs_get_last_activated_tabId();
let last = function() { bg_tabs_log_LAST_ACTIVATED_TAB(); };
let tabs = function() { bg_tabs_log_TABS_MAP();           };
let tdel = function() { bg_tabs_del_tabId();      };
/*}}}*/
/*_ l_paused {{{*/
/*{{{*/

let l_paused;

/*}}}*/
let p = function()
{
    let pausable =  { l_paused , id:B_SCRIPT_ID };  /* [pausable] containing current [l_paused value] */

    let      sym = pause( pausable );

    l_paused     = pausable.l_paused;               /* set l_paused to be the [pausable value] */

    log(sym +" .. l_paused=["+l_paused+"]");
};
/*}}}*/

    /*  return {{{*/

    return { name : B_SCRIPT_ID
        , logging

        , init    // reload storage
        , c       // console.clear();
        , l       // log .. set .. get .. show
        , L : () => { b.l(-1); b.l(3);  setTimeout(() => { console.clear(); b.l(); }, 1000); }
        , r       // chrome.runtime.reload(); // Reloads the app or extension
        , p       // pause [ TOOLS_START .. onMessage .. onAlarm .. onUpdated .. onActivated .. onRemoved ]
        , "---------- DEBUG API ------------------" : "---------------------------------------"
        , b_check_manifest
        , mf      : ()    =>   b_check_manifest(true)
        , op      : ()    =>   chrome.runtime.openOptionsPage()
        , pi      : ()    =>   chrome.runtime.getPlatformInfo         ((info ) => log_object ("PlatformInfo",info,lbb+lbH+lb0,false))
        , b_sleep

        , "---------- DEBUG API v2 ---------------" : "---------------------------------------"
        , de    : ()      =>   chrome.runtime.getPackageDirectoryEntry((entry) => console.log("Package Directory Entry:", entry))

        , "---------- RUN SCRIPTS ----------------" : "---------------------------------------"

        , reload  : ()    => setTimeout(() => bg_page.bg_page2_RELOAD            ({tabId: tl()}            ), 1000)
        , relreq  : ()    =>                  bg_page.bg_page2_RELOAD_if_required({tabId: tl()})

        , loaded  : ()    => setTimeout(() => bg_content_scripts_loaded(        tl()                       ), 1000)
        , loadedic: ()    => setTimeout(() => bg_content_scripts_loaded(        tl(), true/*ignore_cache*/ ), 1000)

        , "---------- MESSAGES TO content_scripts-" : "---------------------------------------"
        , m_start : ()    =>       bg_message.bg_message_tabs_sendMessage              (tl(), {cmd:   "t_load"}, "Devtools")
        , m_stop  : ()    =>       bg_message.bg_message_tabs_sendMessage              (tl(), {cmd: "t_unload"}, "Devtools")

        , m_csp3  : ()    =>       bg_message.bg_message_onMessage_CB({ tabId: tl(), csp_filter: bg_csp.FILTER3_REMOVE },"Devtools")
        , m_csp4  : ()    =>       bg_message.bg_message_onMessage_CB({ tabId: tl(), csp_filter: bg_csp.FILTER4_CUSTOM },"Devtools")
        , m_csp5  : ()    =>       bg_message.bg_message_onMessage_CB({ tabId: tl(), csp_filter: bg_csp.FILTER5_RELAX  },"Devtools")
        , m_csp6  : ()    =>       bg_message.bg_message_onMessage_CB({ tabId: tl(), csp_filter: bg_csp.FILTER6_NONE   },"Devtools")

        , "---------- MESSAGES TO popup ----------" : "---------------------------------------"
        , pa      : ()    =>                  bg_page.bg_page_POPUP_pageAction (tl()                   , "Devtools")
        , pan     : (n)   =>                  bg_page.bg_page_SHOW_ICON_NUM    (tl(), n)
        , sm      : (msg={cmd:"Devtools"}) => bg_message.bg_message_sendMessage(msg, "Devtools") // (msg,_caller)

        , "---------- MESSAGES FROM popup --------" : "---------------------------------------"
        , p_start : ()    => setTimeout(() => bg_message.bg_message_onMessage_CB_TAB_start(tl()                      ), 1000)
        , p_stop  : ()    => setTimeout(() => bg_message.bg_message_onMessage_CB_TAB_stop (tl()                      ), 1000)

        , "---------- TABS -----------------------" : "---------------------------------------"
        , tl
        , last
        , tabs
        , tdel
        , rules   : ()    => bg_settings.bg_settings_tabs2_onUpdated_declarativeNetRequest(tl())

        , "---------- STORAGE --------------------" : "---------------------------------------"
        , ls      : log_STORAGE
        , kv      : (key="key" , val="val"    ) => bg_tabs_set_tabId_key_val(   tl(), key, val)
        , sc      : ()    => { chrome.storage.sync.clear(); log_STORAGE(); }

        , "---------- USED BY [bg_<modules>] -----" :  "---------------------------------------"
        , B_ON_HEADER_RECEIVED
        , B_SCRIPT_ID
        , CHROME_SCHEME
        , CHROME_SCHEME_REGEX
        , DOM_LOAD_ID
        , DOM_TOOLS_JS_ID
        , LF
        , LOG_MAP
        , MANIFEST_VERSION

        , b_is_paused : () => l_paused


        , log_ACTIVATED
        , log_MAP_ACTIVATED
        , logging_ACTIVATED
        , log_IGNORING
        , log_STORAGE
        , log_TAB_HANDLERS_CALLS
        , log_get_caller_tag_FOR_key_val_caller
        , log_sep_bot_FOR_caller_callee
        , log_sep_top_FOR_caller_callee

    };
//}}}

})();
// ┌───────────────────────────────────────────────────────────────────────────┐
// │ LOAD                                                                      │
// └───────────────────────────────────────────────────────────────────────────┘
/*{{{*/
if(!chrome.action) chrome.action = chrome.pageAction;
let        b =  background_js; /* @so that we can call b.l() from Devtools.console */
//......*/ b.mf();

setTimeout(b.init,500); /* @so that caller may terminate before */

/* chrome.runtime .. f(manifest v2,v3) {{{*/

// v2
// console.log("chrome.runtime.getPackageDirectoryEntry:", chrome.runtime.getPackageDirectoryEntry);

// v2+v3
// console.log("chrome.runtime.openOptionsPage:"         , chrome.runtime.openOptionsPage         );
// console.log("chrome.runtime.getPlatformInfo:"         , chrome.runtime.getPlatformInfo         );

/*}}}*/
//}}}

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ DOC                                                                       │
// └───────────────────────────────────────────────────────────────────────────┘
/* ● WebExtensions API declarativeNetRequest {{{
:e manifest.json

● https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest
● https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ModifyHeaderInfo
:e rules.json
 "action"    : { "type": "modifyHeaders" },
 ● The action to take when the rule is matched. Rules can do one of these things:
 ○               block a network request
 ○            redirect a network request
 ○ modify headers from a network request ● rewrites request or response headers or both

● https://github.com/requestly/modify-headers-manifest-v3/blob/master/src/rules.ts {{{
  {
    "id"                :  1,
    "priority"          :  1,
    "action"            :  {
      "type"            :  "modifyHeaders",
      "responseHeaders" :  [
        {
          "operation"   :  "set",
          "header"      :  "x-test-response-header",
          "value"       :  "test-value",
        },
      ]
    },
    "condition"         :  {
      "urlFilter"       :  "<all_urls>",
      "resourceTypes"   :  "script",
    }
  }
"}}}


 ● chrome.declarativeNetRequest.HeaderOperation
 . "append"
 . "remove"
 . "set"

 ● chrome.declarativeNetRequest.RuleActionType
 . "allow"
 . "allowAllRequests"
 . "block"
 . "modifyHeaders"
 . "redirect"
 . "upgradeScheme"

}}}*/
/* ● MDN webextensions {{{
:new $APROJECTS/GITHUB/MDN/dnr-dynamic-with-options
     $APROJECTS/GITHUB/MDN/dnr-dynamic-with-options/README.md
     $APROJECTS/GITHUB/MDN/dnr-dynamic-with-options/manifest.json
     $APROJECTS/GITHUB/MDN/dnr-dynamic-with-options/options.css
     $APROJECTS/GITHUB/MDN/dnr-dynamic-with-options/options.html
     $APROJECTS/GITHUB/MDN/dnr-dynamic-with-options/options.js

    chrome.permissions.request({ origins });
    await chrome.permissions.getAll();
    chrome.permissions.remove({ origins: permissions.origins });
    chrome.declarativeNetRequest.getDynamicRules();
    chrome.declarativeNetRequest.updateDynamicRules({
    chrome.declarativeNetRequest.getSessionRules();
    chrome.declarativeNetRequest.updateSessionRules({
    chrome.declarativeNetRequest.getSessionRules().then(rules => {

}}}*/
/* JS {{{
"┌─────────────────────────────────────────────────────────────────────────────┐
"│                                                                             │
:n javascript/background.js javascript/options.js javascript/popup.js
:e           $BROWSEEXT/RTabsExtension/manifest.json
:e    $APROJECTS/GITHUB/RTabsExtension/manifest.json
:e    $APROJECTS/GITHUB/RTabsExtension/javascript/background.js
:e    $APROJECTS/GITHUB/RTabsExtension/javascript/popup.js
:e           $BROWSEEXT/RTabsExtension/javascript/background.js

:e           $WPROJECTS/RTabs/Util/RTabs_Profiles/DEV/playground.html

::cd  $APROJECTS/GITHUB/modify-headers-manifest-v3-master
::cd  $APROJECTS/GITHUB/chrome-extensions-samples
:grep -il popup -name '*.html'
:grep     manifest_version
:grep -il popup -name manifest.json
:grep -i onMessage -name popup.js
:grep -i sync.set -name popup.js
:e           $BROWSEEXT/RTabsExtension/javascript/content.js

:e             $RPROFILES/script/dom_tools.js
:e             $RPROFILES/script/dom_sentence.js
:e             $RPROFILES/script/stub/dom_sentence_event.js
:e             $RPROFILES/script/stub/dom_scroll.js
:e             $RPROFILES/script/stub/dom_sentence_util.js
:e             $RPROFILES/script/stub/dom_log.js
:e             $RPROFILES/stylesheet/dom_host.css

:e             $RPROFILES/script/dom_select.js
:e             $RPROFILES/script/dom_util.js
:e             $RPROFILES/script/dom_log.js

:e             $RPROFILES/script/splitter.js
:e             $RPROFILES/script/dom_load.js
"│                                                                             │
"└─────────────────────────────────────────────────────────────────────────────┘
}}}*/
/* Service Worker {{{
" Migrate to a service worker:
    :!start explorer "https://remotetabs.com"
    :!start explorer "https://javascript.info/async-await"
    :!start explorer "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"
    :!start explorer "https://developer.chrome.com/articles/"
    :!start explorer "https://developer.chrome.com/docs/extensions/mv3/content_scripts/"
    :!start explorer "https://developer.chrome.com/docs/extensions/migrating/to-service-workers/"
    :!start explorer "https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/developer-guide/migrate-your-extension-from-manifest-v2-to-v3"

" Chrome flags:
:!start explorer "chrome://serviceworker-internals/"
:!start explorer "chrome://flags/#reduced-referrer-granularity"
:!start explorer "chrome://flags/#Strict-Origin-Isolation"

" Replace blocking web request listeners:
    :!start explorer "https://developer.chrome.com/docs/extensions/migrating/blocking-web-requests/"

" Using eval in Chrome extensions:
    :!start explorer "https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/"

" chrome.scripting API
    :!start explorer "https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/api-samples/scripting"
    :new C:/LOCAL/DATA/ANDROID/PROJECTS/GITHUB/chrome-extensions-samples/api-samples/scripting/sw.js
}}}*/
/* NOTES: {{{

:!start explorer "https://www.w3.org/TR/CSP3"
:!start explorer "https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webRequest/onHeadersReceived"
:!start explorer "https://blog.jscrambler.com/an-introduction-to-csp/"
:!start explorer "https://developer.chrome.com/extensions/webRequest"
:!start explorer "https://www.html5rocks.com/en/tutorials/security/content-security-policy/#source-whitelists"

}}}*/
/* VIM: {{ {
:new ~/VIM/Pvim.txt
:new  $APROJECTS/Chrome_Web_Store/OHRExtension
:vnew C:/LOCAL/USR/ivan/VIM/after/syntax/javascript_BAK_BOT_LOG_TOP.vim
:e   javascript/dom_load.js
:e ~/VIM/SCRIPTS/make_eslint.vim
:e $WPROJECTS/RTabs/Util/RTabs_Profiles/DEV/script/dom_tools.js
}}}*/
