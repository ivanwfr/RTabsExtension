// ┌───────────────────────────────────────────────────────────────────────────┐
// │ bg_tabs.js ............................................ BACKGROUND SCRIPT │
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
// globals  bg_csp                    */
// globals  bg_header                 */
/* globals  bg_message                */
// globals  bg_page                   */
// globals  bg_settings               */
/* globals  bg_store                  */
/* exported bg_tabs                   */

/* eslint-enable  no-redeclare        */

const BG_TABS_SCRIPT_ID  = "bg_tabs";
const BG_TABS_SCRIPT_TAG =  BG_TABS_SCRIPT_ID +" (230705:02h:17)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
let bg_tabs  = (function() {
"use strict";

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ TABS                                                          B_LOG7_TABS │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_header.js
:e javascript/bg_message.js
:e javascript/bg_page.js
:e javascript/bg_settings.js
:e javascript/bg_store.js
"● javascript/bg_tabs.js
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
/*_ bg_store {{{*/
let bg_store_DEL_url_settings;
let bg_store_GET_url_domain;
let bg_store_GET_url_key;
let bg_store_LOAD_items;
let bg_store_SAVE_items;
let bg_store_SET_url_settings;

/*}}}*/
//______________ bg_tabs
/*_ bg_tabs_import {{{*/
let bg_tabs_import = function()
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
    //___________ bg_csp
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
    /*_ bg_store {{{*/
    bg_store_DEL_url_settings = bg_store.bg_store_DEL_url_settings;
    bg_store_GET_url_domain   = bg_store.bg_store_GET_url_domain;
    bg_store_GET_url_key      = bg_store.bg_store_GET_url_key;
    bg_store_LOAD_items       = bg_store.bg_store_LOAD_items;
    bg_store_SAVE_items       = bg_store.bg_store_SAVE_items;
    bg_store_SET_url_settings = bg_store.bg_store_SET_url_settings;

    /*}}}*/
    //___________ bg_tabs
//................._import    log_js    background_js    bg_content    bg_csp    bg_header    bg_message    bg_page    bg_settings    bg_store    bg_tabs
log("%c     bg_tabs_import %c log_js %c background_js %c bg_content %c ______ %c _________ %c bg_message %c _______ %c ____________%c bg_store %c "+"●●●● "
    ,lbH+lb9              ,lf0      ,lf1             ,lf2          ,lf3      ,lf4         ,lf5          ,lf6       ,lf7           ,lf8        ,lbH+lf9     );
};
/*}}}*/
    setTimeout(bg_tabs_import,0);
/* eslint-enable no-unused-vars */
/*}}}*/

/*{{{*/
let TABS_MAP       = new Map();
let tabs_Map_cache = new Map();

/*}}}*/
/*_ bg_tabs_log_TABS_MAP {{{*/
let bg_tabs_log_TABS_MAP = function()
{
    /* SESSION WORKING TABS */
    if( TABS_MAP.size )
    {
        log_js.log_group("%c"+SAR   +"%c TABS_MAP "+SAD
                         ,lbb+lbH+lb0, lbH+lf3       );

        for(let [key , value] of TABS_MAP      ) log_object(mPadEnd(   "tab "+key,24)+" url="+ellipsis(value.url,80), value,     lbX[value.start ? 5:8], true);
        for(let [key , value] of tabs_Map_cache) log_object(mPadEnd("cached "+key,24)+" url="+ellipsis(value.url,80), value, lb0+lfX[value.start ? 5:8], true);

        console.groupEnd();
    }

    /* LAST ACTIVATED TAB */
    bg_tabs_log_LAST_ACTIVATED_TAB();

    log_TAB_HANDLERS_CALLS();
};
/*}}}*/
/*_ bg_tabs_log_LAST_ACTIVATED_TAB {{{*/
let bg_tabs_log_LAST_ACTIVATED_TAB = function(label,callers=get_callers())
{

    /* [lastError] */
    if(chrome.runtime.lastError)
        log_object("chrome.runtime.lastError", chrome.runtime.lastError, lbB+lb2, false);

    /* [last_activated_tabId] */
    let last_activated_tabId = bg_tabs_get_last_activated_tabId();
    if(!last_activated_tabId )
        return;

    let tab_items = TABS_MAP.get(last_activated_tabId);
    if( tab_items ) {
        tab_items.callers = callers;
        log_object((label || "tab "+last_activated_tabId)+" → LAST ACTIVATED", tab_items, lfX[tab_items.start ? 5:8]);
    }

};
/*}}}*/

/*_ bg_tabs_set_tabId_key_items .. B_LOG7_TABS {{{*/
let bg_tabs_set_tabId_key_items = function(tabId, key, items)
{
/*{{{*/
let   caller = "bg_tabs_set_tabId_key_items"; /* eslint-disable-line no-unused-vars */
let log_this = LOG_MAP.B_LOG7_TABS;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
    // ┌──────────────────────────────────────────┐
    // │ ........... NO [ items.key          ]    │
    // │ →  FALLBACK TO [ previously set value ]  │
    // │ →           OR [ undefined            ]  │
    // └──────────────────────────────────────────┘
    /*{{{*/
    let previous_val = bg_tabs_get_tabId_key(tabId, key);

    if(typeof items[key] == "undefined")
        return previous_val;

    /*}}}*/
    // ┌──────────────────────────────────────────┐
    // │ NOTHING NEW and NOTHING OLD .. return "" │
    // └──────────────────────────────────────────┘
    /*{{{*/
    let itemKey_val =   items[key];
    if(!itemKey_val && !previous_val)
        return "";

    /*}}}*/
    // ┌──────────────────────────────────────────┐
    // │ NEW SAME AS OLD          .. return VALUE │
    // └──────────────────────────────────────────┘
    /*{{{*/
//logXXX("["+key+"] : previous_val=["+previous_val+"]");
//logXXX("["+key+"] :     itemKey_val=["+    itemKey_val+"]");
    if(itemKey_val == previous_val)
    {
if(log_more) log("%c"+SBS+" %cSAME TAB"+tabId+"%c"+key+" %c"+itemKey_val
    ,             lf8      , lbH+lf8          ,lbL+lf8  ,lbR+lf0);

        return previous_val;
    }
    /*}}}*/
    // ┌──────────────────────────────────────────┐
    // │ STORE itemKey_val        .. return VALUE │
    // └──────────────────────────────────────────┘
    /*{{{*/
/*
if(log_this) log("%c"+SBS+" %c SET TAB"+tabId+"%c"+key+"%c : %c"+itemKey_val
    ,             lf4      ,lbR+lf4           ,lb4     ,lbA  ,lb0);
*/
if(log_more) log("%c"+SBS+" %c SET TAB"+tabId+"%c"+key+" %c"+itemKey_val
    ,             lf4      ,lbH               ,lbL+lf4  ,lbR+lf0);

    /* [REPLACE] with items.itemKey_val when it holds [SOME VALUE] */
    if ( itemKey_val ) bg_tabs_set_tabId_key_val(tabId, key, itemKey_val);
    else itemKey_val = bg_tabs_get_tabId_key    (tabId, key     );

    /* ...return [LAST SET VALUE] */
    return itemKey_val;
    /*}}}*/
};
/*}}}*/
/*_ bg_tabs_set_tabId_key_val {{{*/
let bg_tabs_set_tabId_key_val = function(tabId, key, val    )
{
    if(val == undefined) {
        bg_tabs_del_tabId_key(tabId, key);
        return undefined;
    }
    let tab_items;
    if( tab_items = TABS_MAP.get(tabId))  tab_items[key] = val  ; /* add or update an existing key-entry */
    else            TABS_MAP.set(tabId,           {[key] : val}); /* ......... or create a new key-entry */

    let caller_tag      = log_get_caller_tag_FOR_key_val_caller(key, val, log_js.get_callers_bot());
    bg_store_SET_url_settings(tabId, caller_tag);
    return val;
};
/*}}}*/

/*_ bg_tabs_get_tabId_key {{{*/
let bg_tabs_get_tabId_key     = function(tabId, key, val="" )
{
    let tab_items = TABS_MAP.get( tabId ) ;

    if( tab_items ) return tab_items[key] || val;
    else            return                   val;
};
/*}}}*/
/*_ bg_tabs_get_tabId {{{*/
let bg_tabs_get_tabId     = function(tabId)
{
    return          TABS_MAP.get( tabId );
};
/*}}}*/

/*_ bg_tabs_del_tabId_key {{{*/
let bg_tabs_del_tabId_key     = function(tabId, key         )
{
/*{{{*/
let   caller = "bg_tabs_del_tabId_key";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG8_STORE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log("%c "+caller+"%c TAB #"+tabId+"%c"+key
                  ,lbL+lf2    ,lbC+lf2         ,lbR+lf2);
/*}}}*/
    let tab_items;
    if( tab_items = TABS_MAP.get(tabId))
    {
        delete tab_items[key];

        let caller_tag  = log_get_caller_tag_FOR_key_val_caller(key, undefined, log_js.get_callers_bot());
        bg_store_SET_url_settings(tabId, caller_tag);
    }
};
/*}}}*/
/*_ bg_tabs_del_tabId .. B_LOG7_TABS {{{*/
let bg_tabs_del_tabId = function(tabId = bg_tabs_get_last_activated_tabId())
{
/*{{{*/
let   caller = "bg_tabs_del_tabId";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG8_STORE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log("%c"+SYMBOL_CONSTRUCTION +"%c "+caller+"%c TAB #"+tabId
                  ,lbL+lf2                  ,lbC+lf2    ,lbR+lf2        );
/*}}}*/

    let item = TABS_MAP.get   (tabId);
    /*......*/ TABS_MAP.delete(tabId);

    let caller_tag      = log_get_caller_tag_FOR_key_val_caller(caller, undefined, log_js.get_callers_bot());
    bg_store_SET_url_settings(tabId,caller_tag);

    if(item.url) {
        let storage_url_key = bg_store_GET_url_key( item.url );
        tabs_Map_cache.set(storage_url_key, item);

if( log_more) log_object("→ INTO CACHE", item, lbH+lbF+lf2, lbH+lf2);
    }
};
/*}}}*/

/*_ bg_tabs_url_settings_from_cached .. B_LOG7_TABS {{{*/
let bg_tabs_url_settings_from_cached = function(url)
{
/*{{{*/
let log_this = LOG_MAP.B_LOG7_TABS;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;
/*}}}*/
if( log_more) log("%c bg_tabs_url_settings_from_cached", lbF+lf9);
    /* cached entry for the specified url {{{*/
    let storage_url_key = bg_store_GET_url_key( url );
    let item            = tabs_Map_cache.get( storage_url_key );

    /*}}}*/
    /* with settings loaded {{{*/
    if( item && !item.get_settings_answered)
        item = null;

    if( item )
        item.from = "FROM CACHED TAB WITH SAME URL";
    /*}}}*/
if( log_more && item) log_object(SAL+" "+item.from, item, lbF+lbH+lf8);
    return item;
};
/*}}}*/
/*_ bg_tabs_url_settings_from_others .. B_LOG7_TABS {{{*/
/* {{{
:!start explorer "https://www.w3schools.com/jsref/jsref_some.asp"
:!start explorer "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
}}}*/
let bg_tabs_url_settings_from_others = function(url)
{
/*{{{*/
let log_this = LOG_MAP.B_LOG7_TABS;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log("%c bg_tabs_url_settings_from_others", lbF+lf9);
    /* current entry for the specified url {{{*/
    let item = null; let tabId;
    for(let key of TABS_MAP.keys())
    {
        let value = TABS_MAP.get(key);
        if( value.url == url) {
            item  = value;
            tabId = key;
            break;
        }
    }

    /*}}}*/
    /* with settings loaded {{{*/
    if( item && !item.get_settings_answered)
        item = null;

    if( item )
        item.from = "FROM OTHER TAB WITH SAME URL [TAB #"+tabId+"]";
    /*}}}*/
if( log_more && item) log_object(SAL+" "+item.from, item, lbF+lbH+lf8);
    return item;
};
/*}}}*/

/*➔ EXPORT {{{*/
    return {  name : "bg_tabs"
        , TABS_MAP

        , bg_tabs_get_tabId
        , bg_tabs_get_tabId_key

        , bg_tabs_set_tabId_key_items
        , bg_tabs_set_tabId_key_val

        , bg_tabs_del_tabId
        , bg_tabs_del_tabId_key

        , bg_tabs_url_settings_from_cached
        , bg_tabs_url_settings_from_others

        , bg_tabs_log_LAST_ACTIVATED_TAB
        , bg_tabs_log_TABS_MAP
    };
/*}}}*/
}());
