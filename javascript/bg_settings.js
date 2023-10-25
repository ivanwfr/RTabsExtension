// ┌───────────────────────────────────────────────────────────────────────────┐
// │ bg_settings.js ........................................ BACKGROUND SCRIPT │
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
/* globals  bg_message                */
/* globals  bg_page                   */
/* exported bg_settings               */
/* globals  bg_store                  */
/* globals  bg_tabs                   */

/* eslint-enable  no-redeclare        */

const BG_SETTINGS_SCRIPT_ID  = "bg_settings";
const BG_SETTINGS_SCRIPT_TAG =  BG_SETTINGS_SCRIPT_ID +" (231024:17h:02)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
// ┌───────────────────────────────────────────────────────────────────────────┐
// │ SETTINGS                                         B_LOG7_TABS B_LOG9_STAGE │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_event.js
:e javascript/bg_header.js
:e javascript/bg_message.js
:e javascript/bg_page.js
"● javascript/bg_settings.js
:e javascript/bg_store.js
:e javascript/bg_tabs.js
:e javascript/options.js
:e javascript/popup.js
:e javascript/worker.js
/* └─────────────────────────────┘*/
let bg_settings  = (function() {
"use strict";
let BG_SETTINGS_JS_LOG  = false;

/* IMPORT {{{*/
/*{{{*/
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

let   ellipsis
    , log
    , log_caller
    , log_console_clear
    , log_json
    , log_json_prettify
    , log_o_keys
    , log_o_sort
    , log_object
    , log_sep_bot
    , log_sep_top
    , li
;

/*}}}*/
/*_ background_js {{{*/
let B_SCRIPT_ID;
let LOG_MAP;
let MANIFEST_VERSION;

let b_is_paused;
let log_ACTIVATED;
let log_IGNORING;
let log_STORAGE;
let log_sep_bot_FOR_caller_callee;
let log_sep_top_FOR_caller_callee;

/*}}}*/
/*_ bg_content {{{*/
let bg_content_scripts_get_tools_deployed;

/*}}}*/
//_______________ bg_csp
//_______________ bg_event
//_______________ bg_header
/*_ bg_message {{{*/
let bg_message_onMessage_CB_reply;
let bg_message_tabs_sendMessage;

/*}}}*/
/*_ bg_page {{{*/
let TOOLS4_DEPLOYED;

let bg_page_POPUP_pageAction;
let bg_page2_RELOAD_if_required;

/*}}}*/
//_______________ bg_settings
/*_ bg_store {{{*/
let bg_store_GET_url_domain;
let bg_store_GET_url_key;
let bg_store_SAVE_items;

/*}}}*/
/*_ bg_tabs {{{*/
let bg_tabs_get_tabId_last_activated;
let bg_tabs_set_tabId_last_activated;

let bg_tabs_set_tabId_key_items;
let bg_tabs_set_tabId_key_val;

let bg_tabs_get_tabId_key;
let bg_tabs_get_tabId;

let bg_tabs_del_tabId;
let bg_tabs_del_tabId_key;

let bg_tabs_get_url_settings;

let bg_tabs_declarativeNetRequest_onUpdated;

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
    log_caller                      = log_js.log_caller;                                        li("log_js","log_caller",log_caller);
    log_console_clear               = log_js.log_console_clear;                                 li("log_js","log_console_clear",log_console_clear);
    log_json                        = log_js.log_json;                                          li("log_js","log_json",log_json);
    log_json_prettify               = log_js.log_json_prettify;                                 li("log_js","log_json_prettify",log_json_prettify);
    log_o_keys                      = log_js.log_o_keys;                                        li("log_js","log_o_keys",log_o_keys);
    log_o_sort                      = log_js.log_o_sort;                                        li("log_js","log_o_sort",log_o_sort);
    log_object                      = log_js.log_object;                                        li("log_js","log_object",log_object);
    log_sep_bot                     = log_js.log_sep_bot;                                       li("log_js","log_sep_bot",log_sep_bot);
    log_sep_top                     = log_js.log_sep_top;                                       li("log_js","log_sep_top",log_sep_top);

    /*}}}*/
    modules.push( background_js ); /*{{{*/
    B_SCRIPT_ID                     = background_js.B_SCRIPT_ID;                                li("background_js","B_SCRIPT_ID",B_SCRIPT_ID);
    LOG_MAP                         = background_js.LOG_MAP;                                    li("background_js","LOG_MAP",LOG_MAP);
    MANIFEST_VERSION                = background_js.MANIFEST_VERSION;                           li("background_js","MANIFEST_VERSION",MANIFEST_VERSION);

    b_is_paused                     = background_js.b_is_paused;                                li("background_js","b_is_paused",b_is_paused);
    log_ACTIVATED                   = background_js.log_ACTIVATED;                              li("background_js","log_ACTIVATED",log_ACTIVATED);
    log_IGNORING                    = background_js.log_IGNORING;                               li("background_js","log_IGNORING",log_IGNORING);
    log_STORAGE                     = background_js.log_STORAGE;                                li("background_js","log_STORAGE",log_STORAGE);
    log_sep_bot_FOR_caller_callee   = background_js.log_sep_bot_FOR_caller_callee;              li("background_js","log_sep_bot_FOR_caller_callee",log_sep_bot_FOR_caller_callee);
    log_sep_top_FOR_caller_callee   = background_js.log_sep_top_FOR_caller_callee;              li("background_js","log_sep_top_FOR_caller_callee",log_sep_top_FOR_caller_callee);

    /*}}}*/
    modules.push( bg_content    ); /*{{{*/
    bg_content_scripts_get_tools_deployed = bg_content.bg_content_scripts_get_tools_deployed;   li("bg_content","bg_content_scripts_get_tools_deployed",bg_content_scripts_get_tools_deployed);

    /*}}}*/
    //_______________________ bg_csp
    //_______________________ bg_event
    //_______________________ bg_header
    modules.push( bg_message    ); /*{{{*/
    bg_message_onMessage_CB_reply                 = bg_message.bg_message_onMessage_CB_reply;   li("bg_message","bg_message_onMessage_CB_reply",bg_message_onMessage_CB_reply);
    bg_message_tabs_sendMessage                   = bg_message.bg_message_tabs_sendMessage;     li("bg_message","bg_message_tabs_sendMessage",bg_message_tabs_sendMessage);

    /*}}}*/
    modules.push( bg_page       ); /*{{{*/
    TOOLS4_DEPLOYED             = bg_page.TOOLS4_DEPLOYED;                                      li("bg_page","TOOLS4_DEPLOYED",TOOLS4_DEPLOYED);

    bg_page_POPUP_pageAction    = bg_page.bg_page_POPUP_pageAction;                             li("bg_page","bg_page_POPUP_pageAction",bg_page_POPUP_pageAction);
    bg_page2_RELOAD_if_required = bg_page.bg_page2_RELOAD_if_required;                          li("bg_page","bg_page2_RELOAD_if_required",bg_page2_RELOAD_if_required);

    /*}}}*/
    //_______________________ bg_settings
    modules.push( bg_store      ); /*{{{*/
    bg_store_GET_url_domain     = bg_store.bg_store_GET_url_domain;                               li("bg_store","bg_store_GET_url_domain",bg_store_GET_url_domain);
    bg_store_GET_url_key        = bg_store.bg_store_GET_url_key;                                  li("bg_store","bg_store_GET_url_key",bg_store_GET_url_key);
    bg_store_SAVE_items         = bg_store.bg_store_SAVE_items;                                   li("bg_store","bg_store_SAVE_items",bg_store_SAVE_items);

    /*}}}*/
    modules.push( bg_tabs       ); /*{{{*/
    bg_tabs_get_tabId_last_activated        = bg_tabs.bg_tabs_get_tabId_last_activated;         li("bg_tabs","bg_tabs_get_tabId_last_activated",bg_tabs_get_tabId_last_activated);
    bg_tabs_set_tabId_last_activated        = bg_tabs.bg_tabs_set_tabId_last_activated;         li("bg_tabs","bg_tabs_set_tabId_last_activated",bg_tabs_set_tabId_last_activated);

    bg_tabs_set_tabId_key_items             = bg_tabs.bg_tabs_set_tabId_key_items;              li("bg_tabs","bg_tabs_set_tabId_key_items",bg_tabs_set_tabId_key_items);
    bg_tabs_set_tabId_key_val               = bg_tabs.bg_tabs_set_tabId_key_val;                li("bg_tabs","bg_tabs_set_tabId_key_val",bg_tabs_set_tabId_key_val);

    bg_tabs_get_tabId                       = bg_tabs.bg_tabs_get_tabId;                        li("bg_tabs","bg_tabs_get_tabId",bg_tabs_get_tabId);
    bg_tabs_get_tabId_key                   = bg_tabs.bg_tabs_get_tabId_key;                    li("bg_tabs","bg_tabs_get_tabId_key",bg_tabs_get_tabId_key);

    bg_tabs_del_tabId                       = bg_tabs.bg_tabs_del_tabId;                        li("bg_tabs","bg_tabs_del_tabId",bg_tabs_del_tabId);
    bg_tabs_del_tabId_key                   = bg_tabs.bg_tabs_del_tabId_key;                    li("bg_tabs","bg_tabs_del_tabId_key",bg_tabs_del_tabId_key);

    bg_tabs_get_url_settings                = bg_tabs.bg_tabs_get_url_settings;                 li("bg_tabs","bg_tabs_get_url_settings",bg_tabs_get_url_settings);

    bg_tabs_declarativeNetRequest_onUpdated = bg_tabs.bg_tabs_declarativeNetRequest_onUpdated;  li("bg_tabs","bg_tabs_declarativeNetRequest_onUpdated",bg_tabs_declarativeNetRequest_onUpdated);
    /*}}}*/
    log_js.log_import(bg_settings  , modules);
};
/*}}}*/
    setTimeout(_import,0);
/*}}}*/
/* LOGGING {{{*/
/*_ logging {{{*/
let logging = function(state)
{
    if(state != undefined) {            BG_SETTINGS_JS_LOG = state;
        if(state) bg_store_SAVE_items({ BG_SETTINGS_JS_LOG           });
        else      bg_store_SAVE_items({ BG_SETTINGS_JS_LOG: undefined});
    } return                            BG_SETTINGS_JS_LOG;
};
/*}}}*/
/*_ log_this_get {{{*/
let log_this_get = function(_caller)
{
    switch(_caller) {
    case "bg_settings_check_manifest"               : return BG_SETTINGS_JS_LOG || log_ACTIVATED();

    case "bg_settings_get_url_settings_callback"    : return BG_SETTINGS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
    case "bg_settings_get_url_settings"             : return BG_SETTINGS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
    case "bg_settings_is_a_supported_URL"           : return BG_SETTINGS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
    }

/*{{{*/
    log("%c"+BG_SETTINGS_SCRIPT_ID+"%c log_this_get: missing switch %c"+_caller
        ,lbH+lb2                   ,lbL+lf2                        ,lbR+lf4    );

    return false;
/*}}}*/
};
/*}}}*/
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ MANIFEST                                           MANIFEST_VERSION=="v3" │
// └───────────────────────────────────────────────────────────────────────────┘
/*➔ bg_settings_check_manifest {{{*/
// eslint-disable no-redeclare */
// eslint-disable no-undef     */
let bg_settings_check_manifest = async function(_log_this=false)
{
/*{{{*/
let caller   = "bg_settings_check_manifest";
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
    let info_executeScript  = ((chrome.tabs       && chrome.tabs.     executeScript));
    let info_scripting      = ((chrome.scripting  && chrome.scripting.executeScript));
    let info_tabs_scripting = ((chrome.scripting  && chrome.tabs     .executeScript));

/*{{{*/
if( log_this)
{
    log_object("MANIFEST v"+manifest.manifest_version, manifest, lfX[manifest.manifest_version]);

    if(chrome.permissions)
    {
        let permissions   = await chrome.permissions.getAll();
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
// │ URL SETTINGS                                                              │
// └───────────────────────────────────────────────────────────────────────────┘
/*➔ bg_settings_get_url_settings {{{*/
/*{{{*/
const B_GET_URL_SETTINGS = "GET URL SETTINGS";

/*}}}*/
let bg_settings_get_url_settings = async function(tabId, url)
{
/*{{{*/
let   caller = "bg_settings_get_url_settings";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if(!chrome.storage) { log("%c"+SYMBOL_CONSTRUCTION+" chrome.storage is undefined in "+caller, lbb+lbH+lf1); return false; }

    let url_domain = url ? bg_store_GET_url_domain(url) : "TAB HAS NO URL";
if( log_more) log("%c "+caller+": %c "+url_domain,lbb+lbL+lf4,lbb+lbR+lf4);
if( log_more) log_caller();
/*}}}*/
if( log_more) log_sep_top(caller+"("+log_json_prettify({tabId,url})+")", "LOG4_TAG");
try {
    /* SYNC [return] REPLY .. (from discarded or other tabs) {{{*/
    let url_tab = bg_tabs_get_url_settings( url );
    if( url_tab )
    {
        // BY OTHER TABS or CACHE
        bg_tabs_set_tabId_key_items(tabId, "start"                 , url_tab);
        bg_tabs_set_tabId_key_items(tabId, "csp_filter"            , url_tab);
        bg_tabs_set_tabId_key_items(tabId, "cancelreq"             , url_tab);
        bg_tabs_set_tabId_key_val  (tabId, "get_settings_called"   , true   );
        bg_tabs_set_tabId_key_val  (tabId, "get_settings_answered" , true   );
if( log_this) log("%c"+SD4    +"%c "+B_GET_URL_SETTINGS+" %c RETURNING SESSION REPLY %c"+log_json(bg_tabs_get_tabId(tabId))
    ,              lbb+lbH+lf4 ,lbF+lbL+lf4              ,lbF+lbR+lf5               ,lbH+lf5                               );

if( log_more) log_object(url_tab.from, url_tab, lbH+lf4);

        return true;
    }
    /*}}}*/
    /* [url] {{{*/
    if(!url) return false;

    /*}}}*/
    /* IGNORING UNSUPPORTED URL {{{*/
    if(url)
    {
        bg_tabs_set_tabId_key_val(tabId, "url", url);

        if(!bg_settings_is_a_supported_URL(url))
        {
if( log_this) log_IGNORING(url, caller);

            bg_tabs_set_tabId_key_items(tabId, "title" , "IGNORING UNSUPPORTED URL");
            return false;
        }
    }
    /*}}}*/
    /* bg_settings_get_url_settings_callback {{{*/
    let storage_url_key = bg_store_GET_url_key(url);
if( log_more) log("...storage_url_key=["+storage_url_key+"]");

/*{{{
}}}*/
//log_object(caller+"chrome.storage.sync.get( storage_url_key )", { storage_url_key , callers: LF+get_callers() } );
    await chrome.storage.sync.get(
        storage_url_key
        , async (items) => {
            if(!items[storage_url_key])
if( log_more) log("%c URL not yet registered %c chrome.storage.sync.get('"+storage_url_key+"')%c items=["+log_json(items)+"]"
                  ,lbL+lf8                  ,lbC+lf0                                          ,lbR+lf8);

            if(chrome.runtime.lastError)
                console.error("chrome.runtime.lastError", chrome.runtime.lastError);
            else
                await bg_settings_get_url_settings_callback(tabId, url, items[storage_url_key]);
        });

    bg_tabs_set_tabId_key_val(tabId, "get_settings_called"  , true);
    bg_tabs_del_tabId_key    (tabId, "get_settings_answered"      );
    /*}}}*/
    /* ASYNC [return] REPLY */
    return false;
} finally {
    /* CONTENT SCRIPT AND TOOLS INJECTION {{{*/
//    log_sep_top_FOR_caller_callee(caller, "bg_content_scripts_loaded");
//    let content_scripts_loaded = await     bg_content_scripts_loaded(tabId);
//    log_sep_bot_FOR_caller_callee(caller, "bg_content_scripts_loaded");
////gBIG(                          caller+": bg_content_scripts_loaded=["+content_scripts_loaded+"]",5);

    let content_scripts_reply_message = bg_tabs_get_tabId_key(tabId, "content_scripts_reply_message");
    let tools_deployed                = bg_content_scripts_get_tools_deployed( content_scripts_reply_message );
    if( tools_deployed ) {
        bg_tabs_set_tabId_key_val(tabId, "tools_deployed", tools_deployed );
        bg_tabs_set_tabId_key_val(tabId, "t_load"        , TOOLS4_DEPLOYED);
    }

    bg_page_POPUP_pageAction(tabId, { caller, ...bg_tabs_get_tabId(tabId) });

if( log_this) log("%c"+SD4    +"%c "+B_GET_URL_SETTINGS+" %c ASYNC "+B_GET_URL_SETTINGS+" %c tools_deployed=["+tools_deployed+"]"
    ,              lbB+lf4     ,lbF+lbL+lf4              ,lbF+lbC+lf5                   ,lbF+lbR+lf5                             );
    /*}}}*/
if( log_more) log_sep_bot(caller+"("+log_json_prettify({tabId,url})+")", "LOG4_TAG");
}
};
/*}}}*/
/*_ bg_settings_get_url_settings_callback {{{*/
/*{{{*/
const B_SET_URL_ACTIVATION  = "SET URL ACTIVATION";
const B_GET_URL_SETTINGS_CB = "GET URL SETTINGS CB";

/*}}}*/
let bg_settings_get_url_settings_callback = async function(tabId, url, items)
{
/*{{{*/
let   caller = "bg_settings_get_url_settings_callback";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

//( log_more) log_sep_top(caller+"("+         log_json_prettify({tabId,url,...items},80)+")", "LOG5_TAG");
if( log_more) log_sep_top(caller+log_js.log_o_keys_toString({tabId,url,...items}   )    , "LOG5_TAG");
if( log_this) log("%c"+SD5+"%c "+B_GET_URL_SETTINGS_CB   +" %c"+bg_store_GET_url_domain(url)
                  ,lbB+lf5 ,lbL+lf5                        ,lbR+lf5                );
if( log_more) log_caller();

    let storage_url_key = bg_store_GET_url_key(url);
if( log_more) log_o_sort("STORAGE SETTINGS ["+storage_url_key+"] items", items, lbH+lf5);

    let result = "";
/*}}}*/
try {
    /* NO ITEMS- DONE POLLING .. B_SET_URL_ACTIVATION {{{*/
    bg_tabs_set_tabId_key_val(tabId, "get_settings_answered", true);

    if(!items)
    {
if( log_this) log("%c"+SD5+"%c "+B_SET_URL_ACTIVATION+" %c no stored settings yet for %c storage_url_key=["+storage_url_key+"]"
                  ,lbB+lf5 ,lbL+lf5                    ,lbC+lf9                      ,lbR+lf9                                  );

    }
    /*}}}*/
    else {
        /* ITEMS   - [start] [cancelreq] [csp_filter] {{{*/

        items.start            = (typeof items.start      == "undefined") ? false: (items.start      != true) ? false: true;
        items.cancelreq        = (typeof items.cancelreq  == "undefined") ? false: (items.cancelreq  != true) ? false: true;
        items.csp_filter       = (typeof items.csp_filter == "undefined") ?    "" :  items.csp_filter;

        let      start_changed = (items.start      != bg_tabs_get_tabId_key(tabId,      "start", false));
        let csp_filter_changed = (items.csp_filter != bg_tabs_get_tabId_key(tabId, "csp_filter",    ""));
        let  cancelreq_changed = (items.cancelreq  != bg_tabs_get_tabId_key(tabId,  "cancelreq", false));

if(log_more) log("........start_changed=["+ start_changed      +"] ["+ items.start      +"]");
if(log_more) log("...csp_filter_changed=["+ csp_filter_changed +"] ["+ items.csp_filter +"]");
if(log_more) log("....cancelreq_changed=["+ cancelreq_changed  +"] ["+ items.cancelreq  +"]");
        /*}}}*/
        /* CHANGED - [start] [csp_filter] [cancelreq] {{{*/
        if( start_changed || csp_filter_changed || cancelreq_changed )
        {
if( log_more) log_object(caller+": TABS #"+tabId, bg_tabs_get_tabId(tabId), lbH+lf8);

            items.status = bg_tabs_get_tabId_key(tabId, "status") || B_GET_URL_SETTINGS_CB;

            // BY LOADED STORAGE CB
            bg_tabs_set_tabId_key_items(tabId, "start"     , items);
            bg_tabs_set_tabId_key_items(tabId, "csp_filter", items);
            bg_tabs_set_tabId_key_items(tabId, "cancelreq" , items);

           result = await bg_page2_RELOAD_if_required({tabId});
        }
        /*}}}*/
        /* NO ACTIVATED TO SYNC WITH {{{*/
        else {
if(log_more) log_object("NOTHING ACTIVATED TO SYNC WITH", bg_tabs_get_tabId(tabId), lbH+lf8);

        }
        /*}}}*/
    }
}
finally {
if( log_more) log_sep_bot(caller+" → "+result, "LOG5_TAG");
}
};
/*}}}*/
/*_ bg_settings_is_a_supported_URL {{{*/
/*{{{*/
const SUPPORTED_URL_SCHEME_REGEX = /(https?|file):/;

let last_url;
let last_matched;
/*}}}*/
let bg_settings_is_a_supported_URL = function(url)
{
/*{{{*/
let caller   = "bg_settings_is_a_supported_URL";
let log_this = log_this_get(caller);

/*}}}*/
    if(url == last_url) return last_matched;

    let matches = url && url.match(SUPPORTED_URL_SCHEME_REGEX);
    let matched = matches && matches[0];

if( log_this) log("%c "+caller           +"%c "+(matched ? matched:" ")+"%c "+bg_store_GET_url_domain(url)
                  ,lbL+lbX[matched ? 5:2] ,lbC                          ,lbR+lb0                          );

    last_url     = url;
    last_matched = matched;
    return matched;
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ CONFIG ● [Extension ● script/dom_load.js                                  │
// └───────────────────────────────────────────────────────────────────────────┘
const DOM_LOAD_ID   = "dom_load";

/*➔ EXPORT {{{*/
    return { name : "bg_settings"
        ,    logging
        ,    DOM_LOAD_ID

        ,    bg_settings_check_manifest
        ,    bg_settings_get_url_settings
        ,    bg_settings_is_a_supported_URL

        // DEBUG
        ,    mf   : async () => { await bg_settings_check_manifest(true); }
    };
/*}}}*/
}());
