// ┌───────────────────────────────────────────────────────────────────────────┐
// │ bg_header.js .......................................... BACKGROUND SCRIPT │
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
/* exported bg_header                 */
/* globals  bg_message                */
// globals  bg_page                   */
/* globals  bg_settings               */
/* globals  bg_store                  */
/* globals  bg_tabs                   */

/* eslint-enable  no-redeclare        */

const BG_HEADER_SCRIPT_ID  = "bg_header";
const BG_HEADER_SCRIPT_TAG =  BG_HEADER_SCRIPT_ID +" (230705:02h:17)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
let bg_header  = (function() {
"use strict";

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ HTTP HEADER                                    B_LOG4_CSP B_LOG6_ONHEADER │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
"● javascript/bg_header.js
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
/*_ bg_settings {{{*/
let bg_settings_tabs1_onActivated;
let bg_settings_tabs2_onUpdated;
let bg_settings_tabs3_onRemoved;
let bg_settings_tabs4_query_active_tab_url;
let bg_settings_tabs6_get_url_settings;

/*}}}*/
/*_ bg_store {{{*/
let bg_store_DEL_url_settings;
let bg_store_GET_url_domain;
let bg_store_GET_url_key;
let bg_store_LOAD_items;
let bg_store_SAVE_items;
let bg_store_SET_url_settings;

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
/*_ bg_header_import {{{*/
let bg_header_import = function()
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
    /*_ bg_settings {{{*/
    bg_settings_tabs1_onActivated           = bg_settings.tabs1_onActivated;
    bg_settings_tabs2_onUpdated             = bg_settings.tabs2_onUpdated;
    bg_settings_tabs3_onRemoved             = bg_settings.tabs3_onRemoved;
    bg_settings_tabs4_query_active_tab_url  = bg_settings.tabs4_query_active_tab_url;
    bg_settings_tabs6_get_url_settings      = bg_settings.tabs6_get_url_settings;

    /*}}}*/
    /*_ bg_store {{{*/
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
log("%c   bg_header_import %c log_js %c background_js %c bg_content %c bg_csp %c "+"●●●●●● %c bg_message %c _______ %c bg_settings %c bg_store %c bg_tabs "
    ,lbH+lb4              ,lf0      ,lf1             ,lf2          ,lf3      ,lbH+lf4     ,lf5          ,lf6       ,lf7           ,lf8        ,lf9         );
};
/*}}}*/
/* eslint-enable no-unused-vars */
    setTimeout(bg_header_import,0);
/*}}}*/
/*{{{*/
const PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER = false;//true; // FIXME

/*}}}*/

/*➔ bg_header_addListener {{{*/
let bg_header_addListener = function()
{
/*{{{*/
let log_this = log_ACTIVATED();
let   caller = "bg_header_addListener";

/* [onHeadersReceived] {{{
:!start explorer "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived"
:!start explorer "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns"
:e $LOCAL/DATA/ANDROID/PROJECTS/RTabsExtension/javascript/background.js
:e $LOCAL/DATA/ANDROID/PROJECTS/iwintoo/wss_mirror_extension/wss_mirror_bg.js
}}}*/

/*}}}*/
    /*....................SCRIPT_ID..NAMESPACE..................FUNCTIONALITY............PERMISSION.*/
    if( !log_permission(B_SCRIPT_ID, chrome.webRequest        , "Filtering Headers CSP", "webRequest"        , log_this)) return;
/*  if( !log_permission(B_SCRIPT_ID, chrome.webRequestBlocking, "Blocking Headers CSP" , "webRequestBlocking", log_this)) return; */

try {
    /* ┌────────────────────────────────────────────────────────────────────┐ */
    /* │ webRequestBlocking                                        [UNUSED] │ */
    /* └────────────────────────────────────────────────────────────────────┘ */
    /* blocking requires webRequestBlocking {{{*/
//  let    permission = log_permission(B_SCRIPT_ID, chrome.webRequestBlocking,  "Blocking Headers CSP", "webRequestBlocking", log_ACTIVATED())
    let    permission = chrome.webRequestBlocking != undefined;
    let extraInfoSpec
        = permission
        ? [ "responseHeaders" , "blocking" ]
        : [ "responseHeaders"              ]
    ;
    /*}}}*/
    /* ┌────────────────────────────────────────────────────────────────────┐ */
    /* │ onHeadersReceived                                                  │ */
    /* └────────────────────────────────────────────────────────────────────┘ */
    /*{{{*/
    chrome.webRequest.onHeadersReceived
        .addListener( bg_header_onHeadersReceived                            // LISTENER
                      , { //         <scheme>
                          //         |   <host>
                          //         |   | <path>
                          //         |   | |
                          //         v   v v
                          urls  : [ "*://*/*"]                      // FILTER
                          , types : [ "main_frame", "sub_frame" ] }
                      , extraInfoSpec
                    );
    /*}}}*/
}
catch(error) { log(B_SCRIPT_ID+"."+caller, error); }
finally      { if( log_ACTIVATED() ) log_STORAGE(); }
};
/*}}}*/
/*_ bg_header_onHeadersReceived {{{*/
let bg_header_onHeadersReceived = async function(details)
{
    /*  URL {{{*/
    let url  = bg_tabs_get_tabId_key    (details.tabId, "url");
    if(!url)   bg_tabs_set_tabId_key_val(details.tabId, "url", (details.url || details.pendingUrl));

    if( url != details.url) return details.responseHeaders;

    /*}}}*/
/*LOG{{{*/
let   caller = "bg_header_onHeadersReceived";
let log_this = PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER || LOG_MAP.B_LOG6_ONHEADER;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_ACTIVATED() ) log_console_clear(LOG_MAP.B_LOG3_PRESERVE);

/*}}}*/
    /* IGNORING CHROME_SCHEME {{{*/
    if(url && url.startsWith(CHROME_SCHEME))
    {
        log_IGNORING(url, caller);

        return details.responseHeaders;
    }
    /*}}}*/
    /* APPLY [csp_filter] EVAL [csp_filter_effect] {{{*/
    let csp_filter = bg_tabs_get_tabId_key(details.tabId, "csp_filter");
    let csp_filter_effect;

    let log_tag
        = (csp_filter == FILTER3_REMOVE) ? "LOG3_TAG"
        : (csp_filter == FILTER4_CUSTOM) ? "LOG4_TAG"
        : (csp_filter == FILTER5_RELAX ) ? "LOG5_TAG"
        : (csp_filter == FILTER6_NONE  ) ? "LOG6_TAG"
        :                                         "LOG0_TAG"
    ;
    let log_result = "", lxx = lf9;
if( log_more) log_sep_top(caller+(PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER ? " ➔ PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER" : ""), log_tag);

    let url_domain =  bg_store_GET_url_domain( details.url );
if( log_this) log_object(B_ON_HEADER_RECEIVED+" FROM "+url_domain, details, lbH+lf6);
    /*}}}*/
try {
    // ┌────────────────────────────────────────────────┐
    // │ TODO (180610): SLICE THIS FUNCTION INTO CHUNKS │
    // └────────────────────────────────────────────────┘
/*{{{*/
    let has_CSP = check_has_CSP(details.url, details.responseHeaders);

    let args = { initiator       : details.initiator
        ,        responseHeaders : details.responseHeaders
        ,        tabId           : details.tabId
        ,        url             : details.url
        ,        csp_filter
        ,        has_CSP
        ,        log_this
        ,        log_more
    };
/*}}}*/
    /* check_SAVED_URL_SETTINGS {{{*/
    if(!await check_SAVED_URL_SETTINGS( args ))
    {
        log_result = "called check_SAVED_URL_SETTINGS";
        log_tag    = "LOG4_TAG";

        return details.responseheaders;
    }
    /*}}}*/
    /*  check_URL_TO_SKIP {{{*/
    if( check_URL_TO_SKIP( args ) )
    {
        log_result = url_domain;
        log_tag    = "LOG0_TAG";

        return details.responseHeaders;
    }
    /*}}}*/
    /* provide_DEFAULT_HEADER_CSP_TO_FILTER {{{*/
    if( PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER )
    {
        has_CSP = provide_DEFAULT_HEADER_CSP_TO_FILTER( args );
    }
    /*}}}*/
    /*  activate_CSP_FILTER {{{*/
    if(!activate_CSP_FILTER( args ))
    {
        log_result = "NO csp_filter activated";
        log_tag    = "LOG0_TAG";

        return details.responseHeaders;
    }
    /*}}}*/
    /*  match_CSP_FILTER {{{*/
    if(!match_CSP_FILTER( args ))
    {
        log_result = "DOMAIN MISSMATCH: HEADER ➔ TAB";
        log_tag    = "LOG8_TAG";

        return details.responseHeaders;
    }
    /*}}}*/
    /* pick_filter_rules {{{*/
    let csp_filter_rules = pick_filter_rules( args );
    if(!csp_filter_rules ) {
        log_result = FILTER_EFFECT2_RULES_MISSING;
        log_tag    = "LOG2_TAG";

        return details.responseHeaders;
    }
    args.csp_filter_rules = csp_filter_rules;
    /*}}}*/
    /* set_csp_filter_applied {{{*/
    let  csp_filter_applied = set_csp_filter_applied(args);

    log_result              = csp_filter_applied;
    /*}}}*/
    /* apply_csp_filter_rules {{{*/
    if( has_CSP )
    {
        args.csp_filter_applied = csp_filter_applied;

        let headers_csp = apply_csp_filter_rules( args );

if(log_more) log_CSP("FILTERED WITH args.csp_filter_applied=["+args.csp_filter_applied+"]", headers_csp.value,log_tag);
    }
    /*}}}*/
    // RETURN PATCHED HEADERS {{{*/
    switch(  csp_filter_applied) {
        case FILTER_APPLIED5_RELAXED   : { csp_filter_effect = FILTER_EFFECT5_RULES_RELAXED;    lxx = lf5; } break;
        case FILTER_APPLIED4_CUSTOM    : { csp_filter_effect = FILTER_EFFECT4_RULES_CUSTOMIZED; lxx = lf4; } break;
        case FILTER_APPLIED3_REMOVED   : { csp_filter_effect = FILTER_EFFECT3_RULES_REMOVED;    lxx = lf3; } break;
        case FILTER_APPLIED1_FINE      : { csp_filter_effect = FILTER_APPLIED1_FINE;            lxx = lf1; } break;
        case FILTER_APPLIED2_NO_RULES  : { csp_filter_effect = FILTER_APPLIED2_NO_RULES;        lxx = lf2; } break;
        case FILTER_APPLIED8_NO_CSP    : { csp_filter_effect = FILTER_APPLIED8_NO_CSP;          lxx = lf8; } break;
        default:                         { csp_filter_effect = "";                              lxx = lf0; } break;
    }

if(log_this) log_object("...return PATCHED HEADERS "+SYN+" ["+csp_filter_applied+"] → ["+csp_filter_effect+"]", details.responseHeaders, lbH+lxx);

    return { responseHeaders : details.responseHeaders }; /* XXX .. this is the expected return value */
    /*}}}*/
}
finally {
if( log_more) log_sep_bot(caller+" "+log_result, log_tag);
}
};
/*}}}*/
/*_ check_SAVED_URL_SETTINGS {{{*/
let check_SAVED_URL_SETTINGS = async function(args)
{
    let { tabId, url, log_this } = args;
    let log_result;
try {

    bg_tabs_set_tabId_key_items (tabId, "url"              , url );
    bg_tabs_set_tabId_key_val   (tabId, "onHeadersReceived", true);

    if(   !bg_tabs_get_tabId_key(tabId, "reloading"              )
       && !bg_tabs_get_tabId_key(tabId, "get_settings_called"    )
       && !bg_tabs_get_tabId_key(tabId, "get_settings_answered"  )
    ) {
        log_result =  "CALLING bg_settings_tabs6_get_url_settings";

        if(!await bg_settings_tabs6_get_url_settings(tabId, url))
            return false;
    }
    else {
        log_result = "SKIPPING bg_settings.tabs6_get_url_settings";

    }
    return true;
} finally {
if( log_this) log_object("CHECK URL SETTINGS "+SYN+" "+log_result, bg_tabs_get_tabId(tabId), lf6);
}
};
/*}}}*/
/*_ check_URL_TO_SKIP {{{*/
let check_URL_TO_SKIP = function(args)
{
    let { url, initiator, log_this } = args;

    let log_result;
    let url_domain =  bg_store_GET_url_domain( url );
try {
    if( url_domain == "notifications.google.com")
    {
        log_result = "SKIPPING URL";

        return true;
    }
    else {
        log_result = "NOT AN URL TO SKIP";

        return false;
    }
} finally {
if( log_this) log_object("URL TO SKIP "+SYN+" "+log_result, { url_domain, initiator }, lf6);
}
};
    /*}}}*/
/*_ provide_DEFAULT_HEADER_CSP_TO_FILTER {{{*/
let provide_DEFAULT_HEADER_CSP_TO_FILTER = function(args)
{
    let { tabId, responseHeaders, has_CSP, log_this, log_more } = args;

    bg_tabs_set_tabId_key_val(tabId, "has_CSP", has_CSP);

    if(!has_CSP)
    {
if( log_this) log(SYN+" %c PROVIDING DEFAULT HEADER CSP TO FILTER:", lb6);

        let  name = "content-security-policy";
        let value = ""
            +           "default-src data: 'unsafe-inline'; "
            +             "style-src data: 'unsafe-inline'; "
            +            "script-src data: 'unsafe-inline'; "
            +       "script-src-elem data: 'unsafe-inline'; "
            +       "script-src-attr data: 'unsafe-inline'; "
/*{{{
        //  +               "img-src "                      + url_domain +"; "
        //  +              "font-src "                      + url_domain +"; "
        //  +             "frame-src "                      + url_domain +"; "
        //  +             "media-src "                      + url_domain +"; "
        //  +              "base-uri 'self'; "
        //  +           "form-action 'self'; "
        //  +       "frame-ancestors ; "
}}}*/
        ;
    let headers = responseHeaders;
        headers.push({ name, value });
        has_CSP = true;
if( log_this) log("...headers["+(headers.length-1)+"]", headers[headers.length-1]);
/* CSP ERROR REPORT {{{

    default-src data: 'unsafe-inline';
     script-src data: 'unsafe-inline' www.jslint.com;
      style-src data: 'unsafe-inline' www.jslint.com;

    Refused to load the stylesheet
    because it violates the following Content Security Policy directive:

    "default-src 'self' 'unsafe-inline'"

    Note that 'style-src' was not explicitly set
    so 'default-src' is used as a fallback.

}}}*/

if( log_more) log_object("headers", headers, lf6);
    }
    else {
if( log_more) log("%c !has_CSP ➔ PRIVIDING NO DEFAULT HEADER CSP", lf6);
    }

    return has_CSP;
};
/*}}}*/
/*_ activate_CSP_FILTER {{{*/
let activate_CSP_FILTER = function(args)
{
/*{{{*/
let caller = "bg_header.ACTIVATE_CSP_FILTER";

/*}}}*/
    let { tabId, csp_filter, has_CSP, log_this } = args;

    let log_result, l_x;
try {
    if(!has_CSP) {
        l_x = 0; log_result = "NO CSP TO FILTER";

        bg_tabs_set_tabId_key_val(tabId, "last_reload_not_filtered"  , caller);
        return false;
    }
    else if(!csp_filter) {
        l_x = 8; log_result = "FILTER NOT REQUESTED";

        bg_tabs_set_tabId_key_val(tabId, "last_reload_not_filtered"  , caller);
        return false;
    }
    else {
        l_x = 6; log_result = csp_filter;

        bg_tabs_del_tabId_key(tabId, "last_reload_not_filtered");
        bg_csp_load_filter( csp_filter );
        return true;
    }
} finally {
if( log_this) log_object("ACTIVATE FILTER "+SYN+" "+log_result, { has_CSP , csp_filter}, lfX[l_x]);
}
};
    /*}}}*/
/*_ match_CSP_FILTER {{{*/
let match_CSP_FILTER = function(args)
{
    let { tabId, url, csp_filter, log_this } = args;

    let header_domain           = bg_store_GET_url_domain(                              url   );
    let taburl_domain           = bg_store_GET_url_domain( bg_tabs_get_tabId_key(tabId, "url") );

    let log_result;
try {
    if(header_domain == taburl_domain)
    {
        log_result = "TAB URL MATCHED WITH "+csp_filter;

        bg_csp_load_filter( csp_filter );

        return true;
    }
    else {
        log_result = "TAB URL NOT MATCHED %c["+header_domain+"]";

        return false;
    }
} finally {
if( log_this) log_object("FILTER MATCH "+SYN+" "+log_result, { url , csp_filter, header_domain , taburl_domain }, lf6);
}
};
        /*}}}*/
/*_ pick_filter_rules {{{*/
let pick_filter_rules = function(args)
{
    let { tabId, csp_filter, log_this } = args;

    let log_result;
    bg_tabs_del_tabId_key(tabId, "csp_filter_effect");

    let csp_filter_rules = bg_csp_pick_filter_rules( csp_filter );
try {
    if( csp_filter_rules )
    {
        log_result = "HEADER CSP PICKED: ["+csp_filter+"]";

        bg_tabs_set_tabId_key_val(tabId, "csp_filter_rules", csp_filter_rules);

        return csp_filter_rules;
    }
    else {
        log_result = FILTER_EFFECT2_RULES_MISSING;

        bg_tabs_set_tabId_key_val(tabId, "csp_filter_effect", FILTER_EFFECT2_RULES_MISSING);

        return null;
    }
} finally {
if( log_this) log_object("FILTER RULES "+SYN+" "+log_result, bg_tabs_get_tabId(tabId), lf6);
}
};
/*}}}*/
/*_ set_csp_filter_applied {{{*/
let set_csp_filter_applied = function(args)
{
    let { csp_filter, csp_filter_rules, log_this } = args;

    let log_result, l_x;
    let csp_filter_applied;
try {
    if(csp_filter_rules.length > 0)
    {
        l_x = 6; log_result = "HEADER CSP FILTERING: APPLYING "+csp_filter+" RULES x"+csp_filter_rules.length;

        csp_filter_applied
            = (csp_filter == FILTER5_RELAX ) ? FILTER_APPLIED5_RELAXED
            : (csp_filter == FILTER4_CUSTOM) ? FILTER_APPLIED4_CUSTOM
            : (csp_filter == FILTER3_REMOVE) ? FILTER_APPLIED3_REMOVED
            :                                  csp_filter
        ;
    }
    else {
        l_x = 2; log_result = "HEADER CSP FILTERING: NO RULE SELECTED";

        csp_filter_applied = FILTER_APPLIED2_NO_RULES;
    }
    return csp_filter_applied;
} finally {
if( log_this) log_object("FILTER APPLIED "+SYN+" "+log_result, { csp_filter, csp_filter_rules, csp_filter_applied }, lfX[l_x]);
}
};
/*}}}*/
/*_ apply_csp_filter_rules {{{*/
let apply_csp_filter_rules = function(args)
{
    let { url, csp_filter, csp_filter_rules, csp_filter_applied, responseHeaders, log_this, log_more } = args;

    let headers = responseHeaders;
if(log_more) log("%c .......headers.length=["+ headers.length   +"]", lb6);

    let log_result;
    let l_x;
    let headers_csp;
try {
    for(let i=0, iLen = csp_filter_rules.length; i !== iLen; ++i)
    {
        /* - MATCHED HEADER URL {{{*/
if(log_more) log("%c csp_filter_rules #"+i+" .. %c "+csp_filter_rules[i][0]+"%c.test("+url+"):"
                 ,lbH+lf6                       ,lbL+lf6                    ,lbR+lf6           );
        if( !csp_filter_rules[i][0].test(url) )
        {
            log_result  = "NO URL MATCH";
            l_x = 8;

            continue;
        }
        log_result = "URL MATCHED: "+csp_filter;
        l_x = 6;
if(log_more) log_object("...csp_filter_rules",csp_filter_rules,lf6,false);

        csp_filter_applied = FILTER_APPLIED8_NO_CSP;
        /*}}}*/
        /* - LOOKFOR HEADER CSP {{{*/
if(log_more) log_js.log_group("%c"+SAR+"%c subrules "+SAD, lbb+lbH+lb0, lbb+lbH+lb6);

        let subrules = csp_filter_rules[i][1];
        for(let j=0, jLen = headers.length; j !== jLen; ++j)
        {
            let    name  = headers[j].name.toLowerCase();
if(log_more) log("%c headers["+mPadStart(j,2)+"]%c "+name+" ", lf0,lb0);

            if(    name ==            "content-security-policy"
                   || name.startsWith("content-security-policy")
                   || name ==         "x-webkit-csp"
                   // name ==         "x-xss-protection"
              ) {
                headers_csp = headers[j];
if(!log_more) break;
            }
        }
if(log_more) console.groupEnd();
        /*}}}*/
        /* - REPLACE HEADER CSP {{{*/
        if( headers_csp )
        {
            csp_filter_applied = FILTER_APPLIED1_FINE;

if(log_more) log_CSP("FILTER CSP HEADER", headers_csp.value,8);
            for(let k=0, kLen = subrules.length; k !== kLen; ++k)
            {
                let from = subrules[k][0];
                let   to = subrules[k][1];
if(log_more) log("%c ...replace ["+from+"] %c with ["+to+"]", lb6, lb4);
                let         value = headers_csp.value;
                headers_csp.value = headers_csp.value.replace(from, to);

                if(csp_filter_applied == FILTER_APPLIED1_FINE)
                {
                    if(value != headers_csp.value)
                        csp_filter_applied
                            = (csp_filter == FILTER5_RELAX ) ? FILTER_APPLIED5_RELAXED
                            : (csp_filter == FILTER4_CUSTOM) ? FILTER_APPLIED4_CUSTOM
                            : (csp_filter == FILTER3_REMOVE) ? FILTER_APPLIED3_REMOVED
                            :                                  csp_filter
                    ;
                }

            }
        }
        /*}}}*/
        /* - MISSING HEADER CSP {{{*/
        else {
if(log_more) log("%c...NO [headers_csp]", lbH+lf6);
        }
        /*}}}*/
    }
    bg_tabs_set_tabId_key_val("csp_filter_applied", csp_filter_applied);
    return headers_csp;
} finally {
if( log_this) log_object("FILTER APPLIED "+SYN+" "+log_result, { url, csp_filter, csp_filter_applied, headers_csp }, lfX[l_x]);
}
};
/*}}}*/
/*_ check_has_CSP {{{*/
let check_has_CSP = function(url, headers)
{
/*{{{*/
let   caller = "bg_header.has_CSP";
let log_this = LOG_MAP.B_LOG6_ONHEADER;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
    /* [csp_index] {{{*/
    let csp_index;
    let csp_name;
    for(let i=0; i < headers.length; ++i)
    {
        let    name  = headers[i].name.toLowerCase();
        if(    name ==         "content-security-policy"
            || name.startsWith("content-security-policy")
            || name ==         "x-webkit-csp"
        ) {
            csp_index = i;
            csp_name  = name;
            break;
        }
    }
    /*}}}*/
/*LOG{{{*/

if(csp_index == undefined) {
    if( log_more) log("%c "+caller+": ...NO HEADER CSP IN %c"+bg_store_GET_url_domain(url)                    , lb6,lf6);
} else {
    if( log_more) log("%c "+caller+": FOUND HEADER CSP IN %c"+bg_store_GET_url_domain(url)                    , lb6,lf6);
    if( log_this) log_object(" → headers["+csp_index+"] → ["+csp_name+"]" , headers[csp_index], lf6);
    if( log_more) log_csp_rules( headers[csp_index].value );
}
/*}}}*/
/* REMOVING CSP ENTRY {{{
//if(index >= 0)
//{
//if(log_this) log("REMOVING HEADER CSP ENTRY headers["+index+"]", headers[index]);
//    headers.splice(index,1); // FIXME
//}
}}}*/

    return (csp_index != undefined);
};
/*}}}*/
/*_ log_csp_rules {{{*/
let log_csp_rules = function(headers_csp_value)
{
    log_sep_top("CSP RULES", "LOG6_TAG");

    let i; let csp_rules = headers_csp_value.split(";");
    for(i=0; i<csp_rules.length; ++i)
    {
        let           v = csp_rules[i].trim();
        if(           v.indexOf(" ") < 0)  log("%c"+v           , lbH+lb0);
        else {
            let lhs = v.split(" ")[0];     let rhs = v.substring(lhs.length+1);
            if( rhs.indexOf(" ") < 0)      log("%c"+lhs+"%c"+rhs, lbL+lf8, lbR+lf0);
            else                           log("%c"+lhs+LF+"%c"+v.substring(lhs.length).replace(/ /g,"\n → "), lbH+lf8, lb0);
        }
    }
    log_sep_bot("CSP RULES", "LOG6_TAG");
};
/*}}}*/
/*➔ EXPORT {{{*/
    return {
        bg_header_addListener
    };
/*}}}*/
}());
