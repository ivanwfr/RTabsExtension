// ┌───────────────────────────────────────────────────────────────────────────┐
// │ bg_store.js ............................................................. │
// └───────────────────────────────────────────────────────────────────────────┘
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* eslint-disable no-warning-comments */
/* eslint-disable prefer-spread       */
/* eslint-disable prefer-rest-params  */
/* eslint-disable valid-jsdoc         */
/* eslint-disable no-redeclare        */

/* globals  console, chrome           */

/* globals  log_js                    */
/* globals  background_js             */
/* globals  bg_content                */
/* globals  bg_csp                    */
// globals  bg_header                 */
/* globals  bg_message                */
// globals  bg_page                   */
// globals  bg_settings               */
/* exported bg_store                  */
/* globals  bg_tabs                   */

/* eslint-enable  no-redeclare        */
const BG_STORE_SCRIPT_ID  = "bg_store";
const BG_STORE_SCRIPT_TAG =  BG_STORE_SCRIPT_ID +" (230711:17h:36)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
let bg_store  = (function() {
"use strict";

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ STORE                                                        B_LOG8_STORE │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_header.js
:e javascript/bg_message.js
:e javascript/bg_page.js
:e javascript/bg_settings.js
"● javascript/bg_store.js
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
/*_ background_js {{{*/
let B_ON_HEADER_RECEIVED;
let B_SCRIPT_ID;
let CHROME_SCHEME;
let CHROME_SCHEME_REGEX;
let DOM_LOAD_ID;
let DOM_TOOLS_JS_ID;
let LOG_MAP;
let MANIFEST_VERSION;

let b_callback_args_delay_caller;
let b_check_manifest;
let b_is_paused;
let b_onHeader1_reload;
let b_storage_sync_set;
let bg_tabs_get_last_activated_tabId;
let bg_tabs_sendMessage;
let bg_tabs_set_last_activated_tabId;
let get_url_domain;
let is_paused;
let log_ACTIVATED;
let log_IGNORING;
let log_STORAGE;
let log_TAB_HANDLERS_CALLS;
let log_get_caller_tag_FOR_key_val_caller;
let log_sep_bot_FOR_caller_callee;
let log_sep_top_FOR_caller_callee;

/*}}}*/
/*_ bg_content {{{*/
let b_content_scripts_get_inject_time;
let b_content_scripts_get_tools_deployed;
let b_content_scripts_get_tools_load_time;
let b_content_scripts_loaded;
let b_content_scripts_loaded_parse_message;
let b_content_scripts_loaded_update;
/*}}}*/
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
//______________ bg_header
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
//______________ bg_page
//______________ bg_settings
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
//______________ bg_store
/* bg_store_import {{{*/
let bg_store_import = function()
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
    /*_ background_js {{{*/
    B_ON_HEADER_RECEIVED                  = background_js.B_ON_HEADER_RECEIVED;
    B_SCRIPT_ID                           = background_js.B_SCRIPT_ID;
    CHROME_SCHEME                         = background_js.CHROME_SCHEME;
    DOM_LOAD_ID                           = background_js.DOM_LOAD_ID;
    DOM_TOOLS_JS_ID                       = background_js.DOM_TOOLS_JS_ID;
    LOG_MAP                               = background_js.LOG_MAP;
    MANIFEST_VERSION                      = background_js.MANIFEST_VERSION;

    b_callback_args_delay_caller          = background_js.b_callback_args_delay_caller;
    b_check_manifest                      = background_js.b_check_manifest;
    b_content_scripts_get_tools_deployed  = background_js.b_content_scripts_get_tools_deployed;
    b_content_scripts_loaded              = background_js.b_content_scripts_loaded;
    b_is_paused                           = background_js.b_is_paused;
    b_onHeader1_reload                    = background_js.b_onHeader1_reload;
    b_storage_sync_set                    = background_js.b_storage_sync_set;
    bg_tabs_get_last_activated_tabId      = background_js.bg_tabs_get_last_activated_tabId;
    bg_tabs_sendMessage                   = background_js.bg_tabs_sendMessage;
    bg_tabs_set_last_activated_tabId      = background_js.bg_tabs_set_last_activated_tabId;
    get_url_domain                        = background_js.get_url_domain;
    is_paused                             = background_js.is_paused;
    log_ACTIVATED                         = background_js.log_ACTIVATED;
    log_IGNORING                          = background_js.log_IGNORING;
    log_STORAGE                           = background_js.log_STORAGE;
    log_TAB_HANDLERS_CALLS                = background_js.log_TAB_HANDLERS_CALLS;
    log_get_caller_tag_FOR_key_val_caller = background_js.log_get_caller_tag_FOR_key_val_caller;
    log_sep_bot_FOR_caller_callee         = background_js.log_sep_bot_FOR_caller_callee;
    log_sep_top_FOR_caller_callee         = background_js.log_sep_top_FOR_caller_callee;

    /*}}}*/
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
    //___________ bg_header
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
    //___________ bg_page
    //___________ bg_settings
    //___________ bg_store
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
log("%c    bg_store_import %c log_js %c background_js %c bg_content %c bg_csp %c _________ %c bg_message %c _______ %c ____________%c "+"●●●●● %c bg_tabs "
    ,lbH+lb8              ,lf0      ,lf1             ,lf2          ,lf3      ,lf4         ,lf5          ,lf6       ,lf7           ,lbH+lf8    ,lf9         );
};
/*}}}*/
/* eslint-enable no-unused-vars */
    setTimeout(bg_store_import,0);
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ STORE                                                                     │
// └───────────────────────────────────────────────────────────────────────────┘
/*_ bg_store_SAVE_items {{{*/
let bg_store_SAVE_items = function(items,_caller)
{
/*{{{*/
let   caller = "bg_store_SAVE_items";
let log_this =             LOG_MAP.B_LOG8_STORE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

//  let items_tag = ellipsis(JSON.stringify(items), 70);
    let items_tag = log_js.log_json_prettify(items);
if(      log_more) log_object(caller+": chrome.storage.sync.set("+items_tag+")", { ...items , callers: LF+get_callers() }, lb0);
else if( log_this) log       ("%c "+caller+"%c"+items_tag+"%c"+_caller
                         ,lbL+lb3    ,lbR+lf8       ,lbH             );
/*}}}*/
    try {
        chrome.storage.sync.set( items );
    }
    catch(error) {
        console.error(B_SCRIPT_ID+" ERROR:\n"+ error);
    }
};
/*}}}*/
/*_ bg_store_LOAD_items {{{*/
let bg_store_LOAD_items = function(items)
{
    /* LOAD LOG_MAP {{{*/

    log_js.log_set_type("B");

    /*(____________.____________________!=____________)________.________________=______.________________;*/
    if(typeof items.B_LOG1_MESSAGE      != "undefined") LOG_MAP.B_LOG1_MESSAGE  = items.B_LOG1_MESSAGE  ;
    if(typeof items.B_LOG2_ERROR        != "undefined") LOG_MAP.B_LOG2_ERROR    = items.B_LOG2_ERROR    ;
    if(typeof items.B_LOG3_PRESERVE     != "undefined") LOG_MAP.B_LOG3_PRESERVE = items.B_LOG3_PRESERVE ;
    if(typeof items.B_LOG4_CSP          != "undefined") LOG_MAP.B_LOG4_CSP      = items.B_LOG4_CSP      ;
    if(typeof items.B_LOG5_ONREQUEST    != "undefined") LOG_MAP.B_LOG5_ONREQUEST= items.B_LOG5_ONREQUEST;
    if(typeof items.B_LOG6_ONHEADER     != "undefined") LOG_MAP.B_LOG6_ONHEADER = items.B_LOG6_ONHEADER ;
    if(typeof items.B_LOG7_TABS         != "undefined") LOG_MAP.B_LOG7_TABS     = items.B_LOG7_TABS     ;
    if(typeof items.B_LOG8_STORE        != "undefined") LOG_MAP.B_LOG8_STORE    = items.B_LOG8_STORE    ;
    if(typeof items.B_LOG9_STAGE        != "undefined") LOG_MAP.B_LOG9_STAGE    = items.B_LOG9_STAGE    ;
    if(typeof items.B_LOG0_MORE         != "undefined") LOG_MAP.B_LOG0_MORE     = items.B_LOG0_MORE     ;
    /*(____________.____________________!=____________)________.________________=______.________________;*/

/*{{{*/
let log_this = log_ACTIVATED();

if( log_this) log_sep_top(B_SCRIPT_ID+" manifest ("+MANIFEST_VERSION+") STORAGE", "LOG3_TAG");
if( log_this) log_object("Storage items", items, lf3);
/*}}}*/
    /*}}}*/
    /* MANIFEST {{{*/
    b_check_manifest();

    /*}}}*/
    /* LOAD CSP FILTERS {{{*/
    let csp_filter;
    /**/csp_filter = FILTER3_REMOVE; if(typeof items[csp_filter] != "undefined") bg_csp_load_filter_rules(csp_filter, items[csp_filter]);
    /**/csp_filter = FILTER4_CUSTOM; if(typeof items[csp_filter] != "undefined") bg_csp_load_filter_rules(csp_filter, items[csp_filter]);
    /**/csp_filter = FILTER5_RELAX ; if(typeof items[csp_filter] != "undefined") bg_csp_load_filter_rules(csp_filter, items[csp_filter]);
    /**/csp_filter = FILTER6_NONE  ; if(typeof items[csp_filter] != "undefined") bg_csp_load_filter_rules(csp_filter, items[csp_filter]);

    /*}}}*/
/*{{{*/
if( log_this) log_sep_bot(B_SCRIPT_ID+" manifest ("+MANIFEST_VERSION+") STORAGE", "LOG3_TAG");
/*}}}*/
};
/*}}}*/

/*_ bg_store_GET_url_key {{{*/
let bg_store_GET_url_key = function(url)
{
/* DOC {{{
:!start explorer "https://developer.mozilla.org/en-US/docs/Web/API/URL"

    returns
    URL HREF WITH
    - [search parameter] removed
    - [hash    fragment] removed
    - removed

}}}*/

    let idx1 = url.indexOf("#");
    let idx2 = url.indexOf("?");

    let idx = ((idx1 > 0) && (idx2 > 0)) ? Math.min(idx1, idx2)
    :          (idx1 > 0)                ?          idx1
    :          (idx2 > 0)                ?                idx2
    :                                                          0;

    let base_name
        = (idx > 0)
        ?  url.substring(0,idx)
        :  url
    ;

    return base_name;
};
/*}}}*/
/*_ bg_store_DEL_url_settings .. B_LOG8_STORE {{{*/
let bg_store_DEL_url_settings = function(tabId, _caller)
{
/*{{{*/
let   caller = "bg_store_DEL_url_settings";
let log_this = LOG_MAP.B_LOG8_STORE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_this) log("%c "+caller+"%c"+_caller, lbL+lf8, lbR+lf9);
if( log_more) log_caller();
/*}}}*/
    /* STORAGE KEY .. f(url) {{{*/
    let             url = bg_tabs_get_tabId_key(tabId, "url");
    if(            !url) {
        log("%c"+_caller+" → "+caller+"%c NO URL"+LF+"%c"+get_callers()
            ,lbL+lf8                  ,lbR+lb2       ,lf8              );

        return;
    }
    let storage_url_key = bg_store_GET_url_key (        url );
    /*}}}*/
    /* REMOVE ENTRY {{{*/

if( log_this) log("%c STORAGE REMOVE SETTINGS %c" + storage_url_key  , lbL+lf8, lbR+lf8);

if( log_this) log_object(caller+"chrome.storage.sync.remove( storage_url_key )", { storage_url_key , callers: LF+get_callers() }, lf2);
        chrome.storage.sync.remove( storage_url_key );

    /*}}}*/
};
/*}}}*/
/*_ bg_store_SET_url_settings .. B_LOG8_STORE {{{*/
/*{{{*/
const B_SET_URL_SETTINGS   = "SET URL SETTINGS";

let   last_storage_url_key = {};
let   last_tab_settings    = {};
/*}}}*/
let bg_store_SET_url_settings = function(tabId, _caller)
{
/*{{{*/
let   caller = "bg_store_SET_url_settings";
let log_this = LOG_MAP.B_LOG8_STORE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log("%c "+caller+"%c"+_caller, lbL+lf8, lbR+lf9);
/*}}}*/
    /* IGNORE TAB .. f(missing url to make storage_url_key) {{{*/
    let url = bg_tabs_get_tabId_key(tabId, "url"           );

    if(!url ) return;
    /*}}}*/
    /* PERSIST TAB .. f(start csp_filter cancelreq) {{{*/
    let       start     = bg_tabs_get_tabId_key(tabId, "start"         )
        ||              !!bg_tabs_get_tabId_key(tabId, "tools_deployed");
    let  csp_filter     = bg_tabs_get_tabId_key(tabId, "csp_filter"    );
    let   cancelreq     = bg_tabs_get_tabId_key(tabId, "cancelreq"     );

    let something_to_store
        =      (      url         )
        && (   (    start  == true)
            || (cancelreq  == true)
            || (csp_filter        )
           )
    ;
    /*}}}*/
    // ┌──────────────────────────────────────┐
    // │ TAB URL STORAGE PERSISTENCE          │
    // └──────────────────────────────────────┘
    /* STORE PARAMS {{{*/
    if( something_to_store )
    {
        /* [tab_settings] {{{*/
        let tab_settings
            = {        start
                , csp_filter
                ,  cancelreq
                ,   typeface : ""
                ,      theme : ""
                ,      color : ""
            }
        ;
        /*}}}*/
        /* ...do not save [false] or [OFF] values {{{*/
        Object.keys(tab_settings).filter((key) => {
//try {
          if(!tab_settings[key] ) delete tab_settings[key];
//} catch(error) {
//    log("typeof tab_settings["+key+"]=["+typeof tab_settings[key]+"]");
//    log(       "tab_settings["+key+"]",         tab_settings[key]    );
//    log(error);
//}
        });
        /*}}}*/
        /* STORAGE KEY .. f(url) {{{*/
        let storage_url_key = bg_store_GET_url_key( url );

if( log_more) log("%c"+SD4+"%c "+B_SET_URL_SETTINGS+"%c"+ storage_url_key, lbB+lf4,lbL+lf4,lbR);
        /*}}}*/
        /* SAME   [KEY:VAL] DEBOUNCE {{{*/
        if(   !bg_store_Object_same_values(last_storage_url_key, storage_url_key)
           || !bg_store_Object_same_values(last_tab_settings   , tab_settings   )
          )
        {
            last_storage_url_key = storage_url_key;
            last_tab_settings    = tab_settings;

            let url_items = { [storage_url_key] : tab_settings };

if( log_more) log_object("tab_settings"                 , tab_settings   ,     lf4);
if( log_more) log_object("url_items"                    , url_items      ,     lf4);

            bg_store_SAVE_items(url_items, log_js.get_callers_bot());

            if( log_more) log_caller();
        }
        /*}}}*/
    }
    /*}}}*/
};
/*}}}*/
/*_ bg_store_GET_url_domain {{{*/
let regex_DOMAIN   = new RegExp("^(\\w*:\/\/[^\/]+)\/?.*");
let bg_store_GET_url_domain = function(url)
{
    if(   !url ) return "";

    let domain
        = (url.indexOf("://" ) > 0)
        ?  url.split  (  "/" )[2]
        :  url.split  (  "/" )[0]
    ;

    return  domain.replace(regex_DOMAIN, "$1") || bg_store_PARSE_url(url).scheme+"://";
};
/*}}}*/
/*_ bg_store_PARSE_url {{{*/
const regexp_URL = new RegExp("^([^:]+):\\/\\/(?:([^@]+)@)?([^\\/:]*)?(?::([\\d]+))?(?:(\\/[^#]*)(?:#(.*))?)?$", "i");
/*..............................scheme_.........userinfo...host______.....port_____....path______....frag...........*/
/*..............................1111111.........22222222...3333333333.....44444444.....5555555555....6666...........*/
let bg_store_PARSE_url = function(url)
{
    let result = {};
    let match  = url.match(regexp_URL);
    if( match ) {
        result.scheme   = match[1].toLowerCase();
        result.userinfo = match[2];
        result.host     = match[3];
        result.port     = match[4];
        result.path     = match[5] || "/";
        result.fragment = match[6];
    }
/*{{{
log_object(url, result, lf9, false);
}}}*/
    return result;
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ UTIL                                                                      │
// └───────────────────────────────────────────────────────────────────────────┘
/*_ bg_store_Object_same_values {{{*/
let bg_store_Object_same_values = function(o1,o2)
{
    if(!o1 || !o2)
        return false;

    const keys          = Object.keys(o1);
    if(   keys.length !== Object.keys(o2).length)
        return false;

    for(let key of keys)
        if (o1[key] != o2[key])
            return false;

    return true;
};
/*}}}*/

/*➔ EXPORT {{{*/
    return {  name : "bg_store"

        ,     bg_store_DEL_url_settings
        ,     bg_store_GET_url_domain
        ,     bg_store_GET_url_key
        ,     bg_store_LOAD_items
        ,     bg_store_SAVE_items
        ,     bg_store_SET_url_settings

    };
/*}}}*/
}());

