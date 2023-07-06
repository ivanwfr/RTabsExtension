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
/* globals  bg_csp                    */
/* globals  bg_header                 */
/* globals  bg_message                */
/* globals  bg_page                   */
/* globals  bg_settings               */
/* globals  bg_store                  */
/* globals  bg_tabs                   */

/* eslint-enable  no-redeclare        */

const MANIFEST_VERSION      = (typeof chrome.alarms != "undefined") ?  "V3" : "V2";

const B_SCRIPT_ID           = "background_js";
const B_SCRIPT_TAG          =  B_SCRIPT_ID +" "+MANIFEST_VERSION+" (230705:02h:17)"; /* eslint-disable-line no-unused-vars */
const DOM_TOOLS_JS_ID       = "dom_tools_js";
const DOM_LOAD_ID           = "dom_load";
/*}}}*/
let background_js = (function() {
"use strict";

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ BACKGROUND                                                      EXTENSION │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
"● javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_header.js
:e javascript/bg_message.js
:e javascript/bg_page.js
:e javascript/bg_settings.js
:e javascript/bg_store.js
:e javascript/bg_tabs.js
/* └─────────────────────────────┘*/
/* IMPORT {{{*/
/* eslint-disable no-unused-vars */
/*_ log_js {{{*/
let   LF;

let   lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let   lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let   lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;

let   SD0 ,SD1 ,SD2 ,SD3 ,SD4 ,SD5 ,SD6 ,SD7 ,SD8 ,SD9;
let   SAU, SAR, SAD, SAL, SHV, SYN, SBS;
let   L_CHK, L_NEW, L_ARD, L_ARL, L_ARR, L_ARU, L_CLR, L_FNC, L_WRN;
let   SYMBOL_FUNCTION, SYMBOL_CHECK_MARK, SYMBOL_NOT_CHECKED, SYMBOL_CONSTRUCTION, SYMBOL_ROCKET, SYMBOL_ASSIGN, SYMBOL_GEAR, SYMBOL_THUMBS_UP;

let   clear
    , ellipsis
    , get_callers
    , get_ex_stack_line_match
    , log
    , logBIG
    , logXXX
    , log_CSP
    , log_SYN
    , log_caller
    , log_console_clear
    , log_json
    , log_key_val
    , log_key_val_group
    , log_members
    , log_object
    , log_object_val_format
    , log_pause
    , log_permission
    , log_sep_bot
    , log_sep_top
    , mPadEnd
    , mPadStart
    , parse_ex_stack_FUNC_FILE_LINE_COL
    , pause
    , reload
    , strip_CR_LF
    , strip_QUOTE
    , truncate
;

/*}}}*/
//______________background_js
/*_ bg_csp {{{*/

let FILTER3_REMOVE;
let FILTER4_CUSTOM;
let FILTER5_RELAX;
let FILTER6_NONE;

let FILTER3_REMOVE_DEFAULT;
let FILTER4_CUSTOM_DEFAULT;
let FILTER5_RELAX_DEFAULT;
let FILTER6_NONE_DEFAULT;

let FILTER_APPLIED1_FINE;
let FILTER_APPLIED3_REMOVED;
let FILTER_APPLIED4_CUSTOM;
let FILTER_APPLIED5_RELAXED;
let FILTER_APPLIED2_NO_RULES;
let FILTER_APPLIED8_NO_CSP;

let FILTER_EFFECT2_RULES_MISSING;
let FILTER_EFFECT3_RULES_REMOVED;
let FILTER_EFFECT4_RULES_CUSTOMIZED;
let FILTER_EFFECT5_RULES_RELAXED;

let bg_csp_load_filter;
let bg_csp_load_filter_from_store;
let bg_csp_load_filter_rules;
let bg_csp_pick_filter_rules;
let bg_csp_save_filter_to_store;

/*}}}*/
/*_ bg_header {{{*/
let bg_header_addListener;

/*}}}*/
/*_ bg_message {{{*/
let b_runtime_onMessage_addListener;
let b_runtime_onMessage_CB;
let b_runtime_onMessage_CB_tab;
let b_runtime_onMessage_CB_TAB_start;
let b_runtime_onMessage_CB_TAB_stop;
let b_runtime_onMessage_CB_TAB_csp_filter;
let b_runtime_onMessage_CB_options_js_csp_filter;
let b_runtime_onMessage_CB_query;
let b_runtime_onMessage_CB_reply;
let b_runtime_onMessage_CB_set_log_map;
/*}}}*/
/*_ bg_page {{{*/
let TOOLS4_DEPLOYED;
let b_POPUP_pageAction;
let b_page0_REPORT_lastError;
let b_page0_STORE_lastError;
let b_page1_RELOAD;
let b_page1_RELOAD_GET_script;
let b_page1_RELOAD_RUN_script;
let b_page1_RELOAD_if_required;
let b_page2_FETCH_GET_script;
let b_page2_FETCH_RUN_script;

/*}}}*/
/*_ bg_settings {{{*/
let bg_settings_tabs1_onActivated;
let bg_settings_tabs2_onUpdated;
let bg_settings_tabs3_onRemoved;
let bg_settings_tabs4_query_active_tab_url;
let bg_settings_tabs6_get_url_settings;

/*}}}*/
/*_ bg_tabs {{{*/
let bg_tabs_set_tabId_key_items;
let bg_tabs_set_tabId_key_val;

let bg_tabs_get_tabId_key;
let bg_tabs_get_tabId;

let bg_tabs_del_tabId;
let bg_tabs_del_tabId_key;

let bg_tabs_url_settings_from_cached;
let bg_tabs_url_settings_from_others;

let bg_tabs_log_LAST_ACTIVATED_TAB;
let bg_tabs_log_TABS_MAP;

/*}}}*/
/*_ bg_store_js {{{*/
let bg_store_DEL_url_settings;
let bg_store_GET_url_domain;
let bg_store_GET_url_key;
let bg_store_LOAD_items;
let bg_store_SAVE_items;
let bg_store_SET_url_settings;

/*}}}*/
/*_ bg_content {{{*/
let b_content_scripts_get_inject_time;
let b_content_scripts_get_tools_deployed;
let b_content_scripts_get_tools_load_time;
let b_content_scripts_loaded;
let b_content_scripts_loaded_parse_message;
let b_content_scripts_loaded_update;
/*}}}*/
/*_ background_import {{{*/
let background_import = function()
{
    /*_ log_js {{{*/
    LF                                                               = log_js.LF;

    [ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX        ] = log_js.LOG_BG_ARR;
    [ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb                  ] = log_js.LOG_XX_ARR;
    [ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX        ] = log_js.LOG_FG_ARR;

    [ SD0 ,SD1 ,SD2 ,SD3 ,SD4 ,SD5 ,SD6 ,SD7 ,SD8 ,SD9             ] = log_js.LOG_SDX;
    [ SAU, SAR, SAD, SAL, SHV, SYN, SBS                            ] = log_js.LOG_SXX;
    [ L_CHK, L_NEW, L_ARD, L_ARL, L_ARR, L_ARU, L_CLR, L_FNC, L_WRN] = log_js.LOG_CHR;

    [ SYMBOL_FUNCTION, SYMBOL_CHECK_MARK, SYMBOL_NOT_CHECKED, SYMBOL_CONSTRUCTION, SYMBOL_ROCKET, SYMBOL_ASSIGN, SYMBOL_GEAR, SYMBOL_THUMBS_UP] = log_js.LOG_SYM;

    clear                               = log_js.clear;
    ellipsis                            = log_js.ellipsis;
    get_callers                         = log_js.get_callers;
    get_ex_stack_line_match             = log_js.get_ex_stack_line_match;
    log                                 = log_js.log;
    logBIG                              = log_js.logBIG;
    logXXX                              = log_js.logXXX;
    log_CSP                             = log_js.log_CSP;
    log_SYN                             = log_js.log_SYN;
    log_caller                          = log_js.log_caller;
    log_console_clear                   = log_js.log_console_clear;
    log_json                            = log_js.log_json;
    log_key_val                         = log_js.log_key_val;
    log_key_val_group                   = log_js.log_key_val_group;
    log_members                         = log_js.log_members;
    log_object                          = log_js.log_object;
    log_object_val_format               = log_js.log_object_val_format;
    log_pause                           = log_js.log_pause;
    log_permission                      = log_js.log_permission;
    log_sep_bot                         = log_js.log_sep_bot;
    log_sep_top                         = log_js.log_sep_top;
    mPadEnd                             = log_js.mPadEnd;
    mPadStart                           = log_js.mPadStart;
    parse_ex_stack_FUNC_FILE_LINE_COL   = log_js.parse_ex_stack_FUNC_FILE_LINE_COL;
    pause                               = log_js.pause;
    reload                              = log_js.reload;
    strip_CR_LF                         = log_js.strip_CR_LF;
    strip_QUOTE                         = log_js.strip_QUOTE;
    truncate                            = log_js.truncate;

    /*}}}*/
    //___________ background_js
    /*_ bg_content {{{*/
    b_content_scripts_get_inject_time       = bg_content.b_content_scripts_get_inject_time;
    b_content_scripts_get_tools_deployed    = bg_content.b_content_scripts_get_tools_deployed;
    b_content_scripts_get_tools_load_time   = bg_content.b_content_scripts_get_tools_load_time;
    b_content_scripts_loaded                = bg_content.b_content_scripts_loaded;
    b_content_scripts_loaded_parse_message  = bg_content.b_content_scripts_loaded_parse_message;
    b_content_scripts_loaded_update         = bg_content.b_content_scripts_loaded_update;
    /*}}}*/
    /*_ bg_csp {{{*/

    FILTER3_REMOVE                   = bg_csp.FILTER3_REMOVE;
    FILTER4_CUSTOM                   = bg_csp.FILTER4_CUSTOM;
    FILTER5_RELAX                    = bg_csp.FILTER5_RELAX;
    FILTER6_NONE                     = bg_csp.FILTER6_NONE;

    FILTER3_REMOVE_DEFAULT           = bg_csp.FILTER3_REMOVE_DEFAULT;
    FILTER4_CUSTOM_DEFAULT           = bg_csp.FILTER4_CUSTOM_DEFAULT;
    FILTER5_RELAX_DEFAULT            = bg_csp.FILTER5_RELAX_DEFAULT;
    FILTER6_NONE_DEFAULT             = bg_csp.FILTER6_NONE_DEFAULT;

    FILTER_APPLIED1_FINE             = bg_csp.FILTER_APPLIED1_FINE;
    FILTER_APPLIED3_REMOVED          = bg_csp.FILTER_APPLIED3_REMOVED;
    FILTER_APPLIED4_CUSTOM           = bg_csp.FILTER_APPLIED4_CUSTOM;
    FILTER_APPLIED5_RELAXED          = bg_csp.FILTER_APPLIED5_RELAXED;
    FILTER_APPLIED2_NO_RULES         = bg_csp.FILTER_APPLIED2_NO_RULES;
    FILTER_APPLIED8_NO_CSP           = bg_csp.FILTER_APPLIED8_NO_CSP;

    FILTER_EFFECT2_RULES_MISSING     = bg_csp.FILTER_EFFECT2_RULES_MISSING;
    FILTER_EFFECT3_RULES_REMOVED     = bg_csp.FILTER_EFFECT3_RULES_REMOVED;
    FILTER_EFFECT4_RULES_CUSTOMIZED  = bg_csp.FILTER_EFFECT4_RULES_CUSTOMIZED;
    FILTER_EFFECT5_RULES_RELAXED     = bg_csp.FILTER_EFFECT5_RULES_RELAXED;

    bg_csp_load_filter               = bg_csp.bg_csp_load_filter;
    bg_csp_load_filter_from_store    = bg_csp.bg_csp_load_filter_from_store;
    bg_csp_load_filter_rules         = bg_csp.bg_csp_load_filter_rules;
    bg_csp_pick_filter_rules         = bg_csp.bg_csp_pick_filter_rules;
    bg_csp_save_filter_to_store      = bg_csp.bg_csp_save_filter_to_store;

    /*}}}*/
    //_ bg_header {{{*/
    bg_header_addListener       = bg_header.bg_header_addListener;

    /*}}}*/
    /*_ bg_message {{{*/
    b_runtime_onMessage_addListener              = bg_message.b_runtime_onMessage_addListener;
    b_runtime_onMessage_CB                       = bg_message.b_runtime_onMessage_CB;
    b_runtime_onMessage_CB_tab                   = bg_message.b_runtime_onMessage_CB_tab;
    b_runtime_onMessage_CB_TAB_start             = bg_message.b_runtime_onMessage_CB_TAB_start;
    b_runtime_onMessage_CB_TAB_stop              = bg_message.b_runtime_onMessage_CB_TAB_stop;
    b_runtime_onMessage_CB_TAB_csp_filter        = bg_message.b_runtime_onMessage_CB_TAB_csp_filter;
    b_runtime_onMessage_CB_options_js_csp_filter = bg_message.b_runtime_onMessage_CB_options_js_csp_filter;
    b_runtime_onMessage_CB_query                 = bg_message.b_runtime_onMessage_CB_query;
    b_runtime_onMessage_CB_reply                 = bg_message.b_runtime_onMessage_CB_reply;
    b_runtime_onMessage_CB_set_log_map           = bg_message.b_runtime_onMessage_CB_set_log_map;
    /*}}}*/
    /*_ bg_page {{{*/
    TOOLS4_DEPLOYED             = bg_page.TOOLS4_DEPLOYED;
    b_POPUP_pageAction          = bg_page.b_POPUP_pageAction;
    b_page0_REPORT_lastError    = bg_page.b_page0_REPORT_lastError;
    b_page0_STORE_lastError     = bg_page.b_page0_STORE_lastError;
    b_page1_RELOAD              = bg_page.b_page1_RELOAD;
    b_page1_RELOAD_GET_script   = bg_page.b_page1_RELOAD_GET_script;
    b_page1_RELOAD_RUN_script   = bg_page.b_page1_RELOAD_RUN_script;
    b_page1_RELOAD_if_required  = bg_page.b_page1_RELOAD_if_required;
    b_page2_FETCH_GET_script    = bg_page.b_page2_FETCH_GET_script;
    b_page2_FETCH_RUN_script    = bg_page.b_page2_FETCH_RUN_script;

    /*}}}*/
    /*_ bg_settings {{{*/
    bg_settings_tabs1_onActivated           = bg_settings.tabs1_onActivated;
    bg_settings_tabs2_onUpdated             = bg_settings.tabs2_onUpdated;
    bg_settings_tabs3_onRemoved             = bg_settings.tabs3_onRemoved;
    bg_settings_tabs4_query_active_tab_url  = bg_settings.tabs4_query_active_tab_url;
    bg_settings_tabs6_get_url_settings      = bg_settings.tabs6_get_url_settings;

    /*}}}*/
    /*_ bg_store_js {{{*/
    bg_store_DEL_url_settings = bg_store.bg_store_DEL_url_settings;
    bg_store_GET_url_domain   = bg_store.bg_store_GET_url_domain;
    bg_store_GET_url_key      = bg_store.bg_store_GET_url_key;
    bg_store_LOAD_items       = bg_store.bg_store_LOAD_items;
    bg_store_SAVE_items       = bg_store.bg_store_SAVE_items;
    bg_store_SET_url_settings = bg_store.bg_store_SET_url_settings;

    /*}}}*/
    /*_ bg_tabs {{{*/
    bg_tabs_set_tabId_key_items      = bg_tabs.bg_tabs_set_tabId_key_items;
    bg_tabs_set_tabId_key_val        = bg_tabs.bg_tabs_set_tabId_key_val;

    bg_tabs_get_tabId                = bg_tabs.bg_tabs_get_tabId;
    bg_tabs_get_tabId_key            = bg_tabs.bg_tabs_get_tabId_key;

    bg_tabs_del_tabId                = bg_tabs.bg_tabs_del_tabId;
    bg_tabs_del_tabId_key            = bg_tabs.bg_tabs_del_tabId_key;

    bg_tabs_url_settings_from_cached = bg_tabs.bg_tabs_url_settings_from_cached;
    bg_tabs_url_settings_from_others = bg_tabs.bg_tabs_url_settings_from_others;

    bg_tabs_log_LAST_ACTIVATED_TAB   = bg_tabs.bg_tabs_log_LAST_ACTIVATED_TAB;
    bg_tabs_log_TABS_MAP             = bg_tabs.bg_tabs_log_TABS_MAP;

    /*}}}*/
//................._import    log_js    background_js    bg_content    bg_csp    bg_header    bg_message    bg_page    bg_settings    bg_store    bg_tabs
log("%c  background_import %c log_js %c "+"●●●●●●●●●● %c bg_content %c bg_csp %c bg_header %c bg_message %c bg_page %c bg_settings %c bg_store %c bg_tabs "
    ,lbH+lb1              ,lf0      ,lbH+lf1         ,lf2          ,lf3      ,lf4         ,lf5          ,lf6       ,lf7           ,lf8        ,lf9         );
};
/*}}}*/
/* eslint-enable no-unused-vars */
    setTimeout(background_import,0);
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
            let new_state    = !log_ACTIVATED();
            Object.keys(LOG_MAP).filter((key) => LOG_MAP[key] = new_state);
        }
        else {
            LOG_MAP[log_tag] = !LOG_MAP[log_tag];
        }

        let   just_set_error = (log_tag == "B_LOG2_ERROR") && LOG_MAP.B_LOG2_ERROR;
        LOG_MAP.B_LOG2_ERROR =  log_ACTIVATED() || just_set_error;

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
let log_this = LOG_MAP.B_LOG8_STORE;

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
    let  s  = "%c LOG_MAP"               , args=["", lbL+lb0];
    /**/ s += "%c b.l(1) .. MESSAGE\n"   ; args.push(lbR+lf1);
    /**/ s += "%c b.l(2) .. ERROR\n"     ; args.push(lbR+lf2);
    /**/ s += "%c b.l(3) .. PRESERVE\n"  ; args.push(lbR+lf3);
    /**/ s += "%c b.l(4) .. CSP\n"       ; args.push(lbR+lf4);
    /**/ s += "%c b.l(5) .. ONREQUEST\n" ; args.push(lbR+lf5);
    /**/ s += "%c b.l(6) .. ONHEADER\n"  ; args.push(lbR+lf6);
    /**/ s += "%c b.l(7) .. TABS\n"      ; args.push(lbR+lf7);
    /**/ s += "%c b.l(8) .. STORE\n"     ; args.push(lbR+lf8);
    /**/ s += "%c b.l(9) .. STAGE\n"     ; args.push(lbR+lf9);
    /**/ s += "%c b.l(0) .. MORE\n"      ; args.push(lbR+lf0);
    /**/ s += "%c b.l( ) .. status\n"    ; args.push(lbR+lf9);
    /**/ s += "%c b.r    == reload\n"    ; args.push(lbR+lf8);
    /**/ s += "%c b.c    == clear\n"     ; args.push(lbR+lf8);
    /**/ s += "%c b.p    == pause\n"     ; args.push(lbR+lf8);
    args[0] = s;

    log_js.log_group ("%c"+SAR+"%c LOG_MAP "+SAD, lbb+lbH+lb0, lbH+lb0);
    console.log.apply(console, Array.prototype.slice.call(args));
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

    if(!items) {
        console.log.apply           (console, Array.prototype.slice.call(args));
    }
    else {
        console.groupCollapsed.apply(console, Array.prototype.slice.call(args));
        logn_USAGE();
        log_object("STORAGE",items, lf7);
        bg_tabs_log_TABS_MAP();
        log_object("background_js",background_js, lf9);
        console.groupEnd();
    }

};
/*}}}*/
/*➔ log_ACTIVATED {{{*/
let log_ACTIVATED = function()
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
/*➔ log_IGNORING {{{*/
let log_IGNORING = function(url,caller)
{
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
const B_STORAGE_GET_DELAY = 1000;

let   log_STORAGE_timer;
/*}}}*/
let   log_STORAGE = function()
{
    if( log_STORAGE_timer) clearTimeout(log_STORAGE_timer  );

    new Promise(function executor(resolve) /* eslint-disable-line no-new */
                {
                    log_STORAGE_timer = setTimeout(  () => chrome.storage.sync.get(null, (items) => resolve(log_LOG_MAP(items)))
                                                     , B_STORAGE_GET_DELAY);
                });

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
/*    CHROME_SCHEME {{{*/
const CHROME_SCHEME       = "chrome:";
const CHROME_SCHEME_REGEX = /.*chrome:/;

/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ LISTENERS                                                                 │
// └───────────────────────────────────────────────────────────────────────────┘
/*_ b_addListeners {{{*/
let b_addListeners = function()
{
/*{{{*/
let log_this = log_ACTIVATED();

/*}}}*/
if( log_this) log_js.log_group("%cADDING LISTENERS "+SAD, lbH+lf3);

    bg_header_addListener();
    b_onActivated_addListener();
    b_onUpdated_addListener();
    b_onRemoved_addListener();
    b_runtime_onMessage_addListener();

//  if(USE_CHROME_ALARMS) b_onAlarm_addListener();

console.groupEnd();
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ MANIFEST                                           MANIFEST_VERSION=="V3" │
// └───────────────────────────────────────────────────────────────────────────┘
/*_ b_check_manifest {{{*/
/* eslint-disable no-redeclare */
/* eslint-disable no-undef     */
let b_check_manifest = function()
{
/*{{{*/
//t caller   = "b_check_manifest";
let log_this = log_ACTIVATED();
//t log_tag  = (MANIFEST_VERSION == "V3") ? "LOG3_TAG" : "LOG2_TAG";

/*}}}*/

    // ┌──────────────────────────────────────────────────────────┐
    // │ Manifest version  [chrome.runtime.getManifest]           │
    // │ Popup action      [chrome.pageAction] .. [chrome.action] │
    // │ executeScript     [chrome.tabs]                          │
    // │ executeScript     [chrome.scripting]                     │
    // └──────────────────────────────────────────────────────────┘

    let      manifest      =   chrome.runtime.getManifest();
    let info_pageAction    = ((chrome.pageAction && chrome.pageAction             ));
    let info_action        = ((chrome.action     && chrome.action                 ));
    let info_executeScript = ((chrome.tabs       && chrome.tabs.executeScript     ));
    let info_scripting     = ((chrome.scripting  && chrome.scripting.executeScript));

/*{{{*/
if( log_this)
{
    log_object("MANIFEST v"+manifest.manifest_version, manifest, lfX[manifest.manifest_version]);

    let api_features =
        { "chrome.tabs.executeScript"      : (typeof info_executeScript)
        , "chrome.action"                  : (typeof info_action       )
        , "chrome.pageAction"              : (typeof info_pageAction   )
        , "chrome.scripting.executeScript" : (typeof info_scripting    )
        };
    log_object("API FEATURES", api_features, lf3);
}
/*}}}*/
};
/* eslint-enable  no-undef     */
/* eslint-enable  no-redeclare */
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ ACTIVATED                                                                 │
// └───────────────────────────────────────────────────────────────────────────┘
/*_ b_onActivated_addListener {{{*/
let b_onActivated_addListener = function()
{
/*{{{*/
let log_this = log_ACTIVATED();
/*}}}*/
    /*....................SCRIPT_ID..NAMESPACE....FUNCTIONALITY...................PERMISSION.*/
    if( !log_permission(B_SCRIPT_ID, chrome.tabs, "Listening to tabs activation", "tabs", log_this))
        return;

    chrome.tabs.onActivated.addListener( bg_settings_tabs1_onActivated );
};
/*}}}*/
/*_ bg_tabs_set_last_activated_tabId {{{*/
let            last_activated_tabId;
let bg_tabs_set_last_activated_tabId = function(tabId )
{
    last_activated_tabId = tabId;
};
/*}}}*/
/*_ bg_tabs_get_last_activated_tabId {{{*/
let bg_tabs_get_last_activated_tabId = function()
{
    return last_activated_tabId;
};

/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ UPDATED                                                                   │
// └───────────────────────────────────────────────────────────────────────────┘
/*_ b_onUpdated_addListener {{{*/
let b_onUpdated_addListener = function()
{
/*{{{*/
let log_this = log_ACTIVATED();
/*}}}*/
    /*....................SCRIPT_ID..NAMESPACE....FUNCTIONALITY................PERMISSION.*/
    if( !log_permission(B_SCRIPT_ID, chrome.tabs, "Listening to tabs updated", "tabs", log_this))
        return;

    chrome.tabs.onUpdated.addListener( bg_settings_tabs2_onUpdated );
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ REMOVED                                                                   │
// └───────────────────────────────────────────────────────────────────────────┘
/*_ b_onRemoved_addListener {{{*/
let b_onRemoved_addListener = function()
{
/*{{{*/
let log_this = log_ACTIVATED();
/*}}}*/
    /*....................SCRIPT_ID..NAMESPACE.....FUNCTIONALITY...............PERMISSION.*/
    if( !log_permission(B_SCRIPT_ID, chrome.tabs, "Listening to tabs removed", "tabs", log_this))
        return;

    chrome.tabs.onRemoved.addListener( bg_settings_tabs3_onRemoved );
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ RELOAD                                                    B_LOG6_ONHEADER │
// └───────────────────────────────────────────────────────────────────────────┘
/*{{{*/
const B_ON_HEADER_RECEIVED = "HEADER RECEIVED";

/* EMBED INTO IPC FOLD OF dom_tools.js */

// NOTE:
// to be duplicated in popup_onMessage_CB
// to be duplicated in dom_tools.js IPC

/*}}}*/
/*_ b_onHeader1_reload ← SETTINGS7_RELOAD_PAGE {{{*/
/*{{{*/
const B_ONHEADER1_RELOAD_DELAY_MS = 100;

/*}}}*/
let b_onHeader1_reload = function(_args)
{
/* {tabId}=_args {{{*/
let tabId = _args.tabId;
/*}}}*/
/*LOG{{{*/
let   caller = "b_onHeader1_reload";
let log_this = LOG_MAP.B_LOG6_ONHEADER;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
    let csp_filter = bg_tabs_get_tabId_key(tabId, "csp_filter");
if( log_more) log_sep_top(caller, "LOG2_TAG");
if( log_this) log("%c READY TO FILTER NEXT TAB#"+tabId+" PAGE HEADER CSP WITH %c csp_filter ["+csp_filter+"]"
                 , lbL+lf0                                                   ,lbR+lf2);
    /* b_callback_args_delay_caller {{{*/

    b_callback_args_delay_caller({            caller
                                 , callback : b_page1_RELOAD            // signature: ({tabId})
                                 ,     args : { tabId }
                                 ,    delay : B_ONHEADER1_RELOAD_DELAY_MS
    });

    /*}}}*/
if( log_more) log_sep_bot(caller, "LOG2_TAG");
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ ALARMS                                                    B_LOG3_PRESERVE │
// └───────────────────────────────────────────────────────────────────────────┘
/*_ b_callback_args_delay_caller .. B_LOG3_PRESERVE {{{*/
let b_callback_args_delay_caller = function(_args)
{
    let   caller = _args.caller;
    let callback = _args.callback;
    let     args = _args.args;
    let    delay = _args.delay;

    if((MANIFEST_VERSION == "V3") && (args && (typeof args.tabId != "undefined")))
    {
        chrome.tabs.query(                  { currentWindow: true, active: true }           )
            .then ((tabs ) =>               {
                args.active_tab =  tabs[0];
                args.tabId      = (tabs[0] && tabs[0].id);
                setTimeout(callback, delay, args); })
            .catch((error) =>               { console.error(B_SCRIPT_ID+"."+caller, error); })
        ;

    }
    else {
        setTimeout(callback, delay, args);
    }
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ MESSAGE                                                    B_LOG1_MESSAGE │
// └───────────────────────────────────────────────────────────────────────────┘
/*_ bg_tabs_sendMessage {{{*/
let bg_tabs_sendMessage = async function(tabId,message,_caller)
{
/*{{{*/
let   caller = "bg_tabs_sendMessage";
let log_this = LOG_MAP.B_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    message.caller = B_SCRIPT_ID+"."+_caller;

let     action_tag = message.cmd || message.csp_filter || message.set_log_tag || message.caller;
if( log_this) log_object(caller+" "+action_tag, { ...message, callers_bot: log_js.get_callers_bot() }, lf4, !log_more); // collapsed
/*}}}*/

    let result;

    if(MANIFEST_VERSION == "V3")
    {
        await chrome.tabs.sendMessage(  tabId , message )
            .then ((response) =>       result = response)
            .catch((   error) =>       result = error   )
        ;
    }
    else {
        try {
            chrome.tabs.sendMessage( tabId
                                   , message
                                   , {} // options
                                   , function(response) { result = response; }
                                   );
        }    catch(    error)  { result =    error; }
    }

if( log_this) log_object(caller+" "+action_tag+" → result", result, lf4, !log_more); // collapsed
    return result;
};
/*}}}*/
/*_ b_runtime_sendMessage {{{*/
let b_runtime_sendMessage = async function(message,response_handler,_caller)
{

/*{{{*/
let   caller = "b_runtime_sendMessage";
let log_this = LOG_MAP.B_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    message.caller = B_SCRIPT_ID+"."+_caller;
let     action_tag = message.cmd || message.csp_filter || message.set_log_tag || message.caller;

if( log_this) log       ("%c"+_caller+" → "+caller, lb1);
if( log_more) log_caller();

if( log_this) log_object("..."       , { action_tag, response_handler, _caller });
if( log_more) log_object(caller      ,   message);
/*}}}*/
    try {
        if(response_handler) await chrome.runtime.sendMessage(message, response_handler);
        else                 await chrome.runtime.sendMessage(message                  );
    }
    catch(ex) {
        console.error(B_SCRIPT_ID+" ERROR:\n"+ ex);

    }

};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ UTIL                                                                      │
// └───────────────────────────────────────────────────────────────────────────┘
/*_ b_sleep {{{*/
let b_sleep = async function(delay)
{
/*{{{*/
let log_this = LOG_MAP.B_LOG9_STAGE;

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
/* init c l r {{{*/
let init = () => { b_addListeners(); chrome.storage.sync.get(null, bg_store_LOAD_items); };
let    c = log_js.clear;
let    l = logn;
let    r = reload;
let   tl = bg_tabs_get_last_activated_tabId;
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

        , init    // reload storage
        , c       // console.clear();
        , l       // log .. set .. get .. show
        , r       // chrome.runtime.reload(); // Reloads the app or extension
        , p       // pause [ TOOLS_START .. onMessage .. onAlarm .. onUpdated .. onActivated .. onRemoved ]
        , "---------- DEBUG API ------------------" : "---------------------------------------"
        , b_check_manifest
        , mf      : ()    =>   b_check_manifest()
        , op      : ()    =>   chrome.runtime.openOptionsPage()
        , pi      : ()    =>   chrome.runtime.getPlatformInfo         ((info ) => log_object ("PlatformInfo",info,lbb+lbH+lb0,false))
        , b_sleep

        , "---------- DEBUG API V2 ---------------" : "---------------------------------------"
        , de    : ()      =>   chrome.runtime.getPackageDirectoryEntry((entry) => console.log("Package Directory Entry:", entry))

        , "---------- RUN SCRIPTS ----------------" : "---------------------------------------"

        , reload  : ()    => setTimeout(() => b_page1_RELOAD          ({tabId: tl()}                      ), 1000)
        , relreq  : ()    => b_page1_RELOAD_if_required(                       tl())

        , loaded  : ()    => setTimeout(() => b_content_scripts_loaded(        tl()                       ), 1000)
        , loadedic: ()    => setTimeout(() => b_content_scripts_loaded(        tl(), true/*ignore_cache*/ ), 1000)

        , "---------- MESSAGES TO content_scripts-" : "---------------------------------------"
        , m_start : ()    =>                  bg_tabs_sendMessage              (tl(), {cmd:   "t_load"}, "Devtools")
        , m_stop  : ()    =>                  bg_tabs_sendMessage              (tl(), {cmd: "t_unload"}, "Devtools")
        , sm      : (msg) =>   b_runtime_sendMessage({cmd : msg||"debug_cmd"}, null, "Devtools."+B_SCRIPT_ID)

        , "---------- MESSAGES TO popup ----------" : "---------------------------------------"
        , pa      : ()    =>                  b_POPUP_pageAction               (tl()                   , "Devtools") //FIXME

        , "---------- MESSAGES FROM popup --------" : "---------------------------------------"
        , p_start : ()    => setTimeout(() => b_runtime_onMessage_CB_TAB_start(tl()                       ), 1000)
        , p_stop  : ()    => setTimeout(() => b_runtime_onMessage_CB_TAB_stop (tl()                       ), 1000)

        , "---------- TABS -----------------------" : "- (tl=bg_tabs_get_last_activated_tabId)-"
        , last
        , tabs
        , tdel

        , "---------- STORAGE --------------------" : "---------------------------------------"
        , ls      : log_STORAGE
        , kv      : (key="key" , val="val"    ) => bg_tabs_set_tabId_key_val(        tl(), key, val)
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

        , bg_tabs_get_last_activated_tabId
        , bg_tabs_sendMessage
        , bg_tabs_set_last_activated_tabId

        , b_callback_args_delay_caller
        , b_onHeader1_reload
        , b_page1_RELOAD
        , b_page1_RELOAD_if_required
        , last_activated_tabId
        , log_ACTIVATED
        , log_IGNORING
        , log_STORAGE
        , log_TAB_HANDLERS_CALLS
        , log_get_caller_tag_FOR_key_val_caller
        , log_sep_bot_FOR_caller_callee
        , log_sep_top_FOR_caller_callee

    };
//}}}
/*}}}*/
})();
/* LOAD {{{*/
if(!chrome.action) chrome.action = chrome.pageAction;
let        b =  background_js; /* @so that we can call b.l() from Devtools.console */
//......*/ b.mf();

setTimeout(b.init,500); /* @so that caller may terminate before */

/* chrome.runtime .. f(manifest V2,V3) {{{*/

// V2
// console.log("chrome.runtime.getPackageDirectoryEntry:", chrome.runtime.getPackageDirectoryEntry);

// V2+V3
// console.log("chrome.runtime.openOptionsPage:"         , chrome.runtime.openOptionsPage         );
// console.log("chrome.runtime.getPlatformInfo:"         , chrome.runtime.getPlatformInfo         );

/*}}}*/
//}}}
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
