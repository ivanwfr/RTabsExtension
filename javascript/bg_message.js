// ┌───────────────────────────────────────────────────────────────────────────┐
// │ bg_message.js ......................................... BACKGROUND SCRIPT │
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
/* globals  bg_event                  */
/* globals  bg_header                 */
/* exported bg_message                */
/* globals  bg_page                   */
/* globals  bg_settings               */
/* globals  bg_store                  */
/* globals  bg_tabs                   */
/* globals  worker_js                 */

/* eslint-enable  no-redeclare        */
const BG_MESSAGE_SCRIPT_ID  = "bg_message";
const BG_MESSAGE_SCRIPT_TAG =  BG_MESSAGE_SCRIPT_ID +" (231007:19h:01)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
// ┌───────────────────────────────────────────────────────────────────────────┐
// │ MESSAGE POPUP                                              B_LOG1_MESSAGE │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_event.js
:e javascript/bg_header.js
"● javascript/bg_message.js
:e javascript/bg_page.js
:e javascript/bg_settings.js
:e javascript/bg_store.js
:e javascript/bg_tabs.js
:e javascript/options.js
:e javascript/popup.js
:e javascript/worker.js
/* └─────────────────────────────┘*/
let bg_message  = (function() {
"use strict";

/* IMPORT {{{*/
/*{{{*/
/*_ log_js {{{*/
/* eslint-disable no-unused-vars */
let   LF        = String.fromCharCode(10);

let   lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let   lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let   lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;

let   SD0 ,SD1 ,SD2 ,SD3 ,SD4 ,SD5 ,SD6 ,SD7 ,SD8 ,SD9;
let   SAU, SAR, SAD, SAL, SHV, SYN, SBS;
let   L_CHK, L_NEW, L_ARD, L_ARL, L_ARR, L_ARU, L_CLR, L_FNC, L_WRN;
let   SYMBOL_FUNCTION, SYMBOL_CHECK_MARK, SYMBOL_NOT_CHECKED, SYMBOL_CONSTRUCTION, SYMBOL_ROCKET, SYMBOL_ASSIGN, SYMBOL_GEAR, SYMBOL_THUMBS_UP;
/* eslint-enable no-unused-vars */

let   log
    , log_SYN
    , log_caller
    , log_console_clear
    , log_object
//  , log_permission
    , log_sep_bot
    , log_sep_top
    , mPadEnd
    , li
;

/*}}}*/
/*_ background_js {{{*/
let B_SCRIPT_ID;
let LOG_MAP;
let MANIFEST_VERSION;

let b_is_paused;
let log_ACTIVATED;
let log_STORAGE;
let log_get_caller_tag_FOR_key_val_caller;
let log_sep_bot_FOR_caller_callee;
let log_sep_top_FOR_caller_callee;

/*}}}*/
/*_ bg_content {{{*/
let bg_content_scripts_loaded;
let bg_content_scripts_reload;

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

let bg_csp_load_filter_from_store;
let bg_csp_save_filter_to_store;

/*}}}*/
/*_ bg_event {{{*/

/*}}}*/
//_______________ bg_header
//_______________ bg_message
/*_ bg_page {{{*/
let bg_page_POPUP_pageAction;
let bg_page2_RELOAD_if_required;

/*}}}*/
/*_ bg_settings {{{*/
let bg_settings_tabs4_query_active_tab_url;
let B_NO_LAST_ACTIVATED;

/*}}}*/
/*_ bg_store {{{*/
let bg_store_DEL_url_settings;
let bg_store_GET_url_domain;
let bg_store_GET_url_key;
let bg_store_SAVE_items;
let bg_store_SET_url_settings;

/*}}}*/
/*_ bg_tabs {{{*/
let bg_tabs_del_tabId_key;
let bg_tabs_get_last_activated_tabId;
let bg_tabs_get_tabId;
let bg_tabs_get_tabId_key;
let bg_tabs_set_tabId_key_items;
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

    li                = log_js.log_modulename_key_val;
    log               = log_js.log;                 li("log_js", "log"              , log              );
    log_SYN           = log_js.log_SYN;             li("log_js", "log_SYN"          , log_SYN          );
    log_caller        = log_js.log_caller;          li("log_js", "log_caller"       , log_caller       );
    log_console_clear = log_js.log_console_clear;   li("log_js", "log_console_clear", log_console_clear);
    log_object        = log_js.log_object;          li("log_js", "log_object"       , log_object       );
//  log_permission    = log_js.log_permission;
    log_sep_bot       = log_js.log_sep_bot;         li("log_js", "log_sep_bot"      , log_sep_bot      );
    log_sep_top       = log_js.log_sep_top;         li("log_js", "log_sep_top"      , log_sep_top      );
    mPadEnd           = log_js.mPadEnd;             li("log_js", "mPadEnd"          , mPadEnd          );

    /*}}}*/
    modules.push( background_js ); /*{{{*/

    B_SCRIPT_ID                            = background_js.B_SCRIPT_ID;                           li("background_js","B_SCRIPT_ID",B_SCRIPT_ID);
    LOG_MAP                                = background_js.LOG_MAP;                               li("background_js","LOG_MAP",LOG_MAP);
    MANIFEST_VERSION                       = background_js.MANIFEST_VERSION;                      li("background_js","MANIFEST_VERSION",MANIFEST_VERSION);

    b_is_paused                            = background_js.b_is_paused;                           li("background_js","b_is_paused",b_is_paused);
    log_ACTIVATED                          = background_js.log_ACTIVATED;                         li("background_js","log_ACTIVATED",log_ACTIVATED);
    log_STORAGE                            = background_js.log_STORAGE;                           li("background_js","log_STORAGE",log_STORAGE);
    log_get_caller_tag_FOR_key_val_caller  = background_js.log_get_caller_tag_FOR_key_val_caller; li("background_js","log_get_caller_tag_FOR_key_val_caller",log_get_caller_tag_FOR_key_val_caller);
    log_sep_bot_FOR_caller_callee          = background_js.log_sep_bot_FOR_caller_callee;         li("background_js","log_sep_bot_FOR_caller_callee",log_sep_bot_FOR_caller_callee);
    log_sep_top_FOR_caller_callee          = background_js.log_sep_top_FOR_caller_callee;         li("background_js","log_sep_top_FOR_caller_callee",log_sep_top_FOR_caller_callee);

    /*}}}*/
    modules.push( bg_content    ); /*{{{*/
    bg_content_scripts_loaded              = bg_content.bg_content_scripts_loaded;                li("bg_content","bg_content_scripts_loaded",bg_content_scripts_loaded);
    bg_content_scripts_reload              = bg_content.bg_content_scripts_reload;                li("bg_content","bg_content_scripts_reload",bg_content_scripts_reload);

    /*}}}*/
    //_______________________ bg_event
    modules.push( bg_csp        ); /*{{{*/

    FILTER3_REMOVE                         = bg_csp.FILTER3_REMOVE;                               li("bg_csp","FILTER3_REMOVE",FILTER3_REMOVE);
    FILTER4_CUSTOM                         = bg_csp.FILTER4_CUSTOM;                               li("bg_csp","FILTER4_CUSTOM",FILTER4_CUSTOM);
    FILTER5_RELAX                          = bg_csp.FILTER5_RELAX;                                li("bg_csp","FILTER5_RELAX",FILTER5_RELAX);
    FILTER6_NONE                           = bg_csp.FILTER6_NONE;                                 li("bg_csp","FILTER6_NONE",FILTER6_NONE);

    FILTER3_REMOVE_DEFAULT                 = bg_csp.FILTER3_REMOVE_DEFAULT;                       li("bg_csp","FILTER3_REMOVE_DEFAULT",FILTER3_REMOVE_DEFAULT);
    FILTER4_CUSTOM_DEFAULT                 = bg_csp.FILTER4_CUSTOM_DEFAULT;                       li("bg_csp","FILTER4_CUSTOM_DEFAULT",FILTER4_CUSTOM_DEFAULT);
    FILTER5_RELAX_DEFAULT                  = bg_csp.FILTER5_RELAX_DEFAULT;                        li("bg_csp","FILTER5_RELAX_DEFAULT",FILTER5_RELAX_DEFAULT);
    FILTER6_NONE_DEFAULT                   = bg_csp.FILTER6_NONE_DEFAULT;                         li("bg_csp","FILTER6_NONE_DEFAULT",FILTER6_NONE_DEFAULT);


    bg_csp_load_filter_from_store          = bg_csp.bg_csp_load_filter_from_store;                li("bg_csp","bg_csp_load_filter_from_store",bg_csp_load_filter_from_store);
    bg_csp_save_filter_to_store            = bg_csp.bg_csp_save_filter_to_store;                  li("bg_csp","bg_csp_save_filter_to_store",bg_csp_save_filter_to_store);

    /*}}}*/
    //_______________________ bg_header
    //_______________________ bg_message
    modules.push( bg_page       ); /*{{{*/
    bg_page_POPUP_pageAction               = bg_page.bg_page_POPUP_pageAction;                    li("bg_page","bg_page_POPUP_pageAction",bg_page_POPUP_pageAction);
    bg_page2_RELOAD_if_required            = bg_page.bg_page2_RELOAD_if_required;                 li("bg_page","bg_page2_RELOAD_if_required",bg_page2_RELOAD_if_required);

    /*}}}*/
    modules.push( bg_settings   ); /*{{{*/
    bg_settings_tabs4_query_active_tab_url = bg_settings.bg_settings_tabs4_query_active_tab_url;  li("bg_settings","bg_settings_tabs4_query_active_tab_url",bg_settings_tabs4_query_active_tab_url);
    B_NO_LAST_ACTIVATED                    = bg_settings.B_NO_LAST_ACTIVATED;                     li("bg_settings","B_NO_LAST_ACTIVATED"                   ,B_NO_LAST_ACTIVATED                   );

    /*}}}*/
    modules.push( bg_store      ); /*{{{*/
    bg_store_DEL_url_settings              = bg_store.bg_store_DEL_url_settings;                  li("bg_store","bg_store_DEL_url_settings",bg_store_DEL_url_settings);
    bg_store_GET_url_domain                = bg_store.bg_store_GET_url_domain;                    li("bg_store","bg_store_GET_url_domain",bg_store_GET_url_domain);
    bg_store_GET_url_key                   = bg_store.bg_store_GET_url_key;                       li("bg_store","bg_store_GET_url_key",bg_store_GET_url_key);
    bg_store_SAVE_items                    = bg_store.bg_store_SAVE_items;                        li("bg_store","bg_store_SAVE_items",bg_store_SAVE_items);
    bg_store_SET_url_settings              = bg_store.bg_store_SET_url_settings;                  li("bg_store","bg_store_SET_url_settings",bg_store_SET_url_settings);

    /*}}}*/
    modules.push( bg_tabs       ); /*{{{*/
    bg_tabs_del_tabId_key                  = bg_tabs.bg_tabs_del_tabId_key;                       li("bg_tabs","bg_tabs_del_tabId_key",bg_tabs_del_tabId_key);
    bg_tabs_get_last_activated_tabId       = bg_tabs.bg_tabs_get_last_activated_tabId;            li("bg_tabs","bg_tabs_get_last_activated_tabId",bg_tabs_get_last_activated_tabId);
    bg_tabs_get_tabId                      = bg_tabs.bg_tabs_get_tabId;                           li("bg_tabs","bg_tabs_get_tabId",bg_tabs_get_tabId);
    bg_tabs_get_tabId_key                  = bg_tabs.bg_tabs_get_tabId_key;                       li("bg_tabs","bg_tabs_get_tabId_key",bg_tabs_get_tabId_key);
    bg_tabs_set_tabId_key_items            = bg_tabs.bg_tabs_set_tabId_key_items;                 li("bg_tabs","bg_tabs_set_tabId_key_items",bg_tabs_set_tabId_key_items);
    bg_tabs_set_tabId_key_val              = bg_tabs.bg_tabs_set_tabId_key_val;                   li("bg_tabs","bg_tabs_set_tabId_key_val",bg_tabs_set_tabId_key_val);

    /*}}}*/
    log_js.log_import(bg_message   , modules);
};
/*}}}*/
    setTimeout(_import,0);
/*}}}*/
/* LOGGING {{{*/
let BG_MESSAGE_JS_LOG  = false;
/*_ logging {{{*/
let logging = function(state)
{
    if(state != undefined) {            BG_MESSAGE_JS_LOG = state;
        if(state) bg_store_SAVE_items({ BG_MESSAGE_JS_LOG           });
        else      bg_store_SAVE_items({ BG_MESSAGE_JS_LOG: undefined});
    } return                            BG_MESSAGE_JS_LOG;
};
/*}}}*/
/*_ log_this_get {{{*/
let log_this_get = function(_caller)
{
    switch(_caller) {
    case "bg_message_monitor_popup_window"              : return BG_MESSAGE_JS_LOG || LOG_MAP.B_LOG1_MESSAGE;
    case "bg_message_onMessage_CB"                      : return BG_MESSAGE_JS_LOG || LOG_MAP.B_LOG1_MESSAGE;
    case "bg_message_onMessage_CB_TAB_csp_filter"       : return BG_MESSAGE_JS_LOG || LOG_MAP.B_LOG1_MESSAGE;
    case "bg_message_onMessage_CB_TAB_start"            : return BG_MESSAGE_JS_LOG || LOG_MAP.B_LOG1_MESSAGE || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG8_STORE;
    case "bg_message_onMessage_CB_TAB_stop"             : return BG_MESSAGE_JS_LOG || LOG_MAP.B_LOG1_MESSAGE || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG8_STORE;
    case "bg_message_onMessage_CB_options_js_csp_filter": return BG_MESSAGE_JS_LOG || LOG_MAP.B_LOG1_MESSAGE;
    case "bg_message_onMessage_CB_query"                : return BG_MESSAGE_JS_LOG || LOG_MAP.B_LOG1_MESSAGE;
    case "bg_message_onMessage_CB_reply"                : return BG_MESSAGE_JS_LOG || LOG_MAP.B_LOG1_MESSAGE;
    case "bg_message_onMessage_CB_set_log_map"          : return BG_MESSAGE_JS_LOG || LOG_MAP.B_LOG1_MESSAGE;
    case "bg_message_onMessage_CB_tab"                  : return BG_MESSAGE_JS_LOG || LOG_MAP.B_LOG1_MESSAGE;
    case "bg_message_onMessage_addListener"             : return BG_MESSAGE_JS_LOG || LOG_MAP.B_LOG1_MESSAGE;
    case "bg_message_sendMessage"                       : return BG_MESSAGE_JS_LOG || LOG_MAP.B_LOG1_MESSAGE;
    case "bg_message_tabs_sendMessage"                  : return BG_MESSAGE_JS_LOG || LOG_MAP.B_LOG1_MESSAGE;
    }

/*{{{*/
    log("%c"+BG_MESSAGE_SCRIPT_ID +"%c log_this_get: missing switch %c"+_caller
        ,lbH+lb2                   ,lbL+lf2                        ,lbR+lf4    );

    return false;
/*}}}*/
};
/*}}}*/
/*}}}*/
const O_SCRIPT_ID = "options_js";

// ┌──────────────────┐
// │ SEND ● MESSAGE   │
// └──────────────────┘
/*➔ bg_message_tabs_sendMessage {{{*/
let bg_message_tabs_sendMessage = async function(tabId,message,_caller)
{
/*{{{*/
let   caller = "bg_message_tabs_sendMessage";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    message.caller = B_SCRIPT_ID+"."+_caller;

let     action_tag = message.cmd || message.csp_filter || message.set_log_tag || message.caller;
if( log_this) log_object(caller+" "+action_tag, { ...message, callers_bot: log_js.get_callers_bot() }, lf4, !log_more); // collapsed
/*}}}*/

    let result;

    if(MANIFEST_VERSION == "v3")
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
/*➔ bg_message_sendMessage {{{*/
let bg_message_sendMessage = function(message,_caller)
{
/*{{{*/
let   caller = "bg_message_sendMessage";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    message.caller = B_SCRIPT_ID+"."+_caller;

if( log_this) log       ("%c"+_caller+" → "+caller, lb1);
if( log_more) log_caller();
if( log_more && chrome.runtime.lastError) log("chrome.runtime.lastError=["+ chrome.runtime.lastError +"]");

//t     action_tag = message.cmd || message.csp_filter || message.set_log_tag || message.caller;
//( log_this) log_object("..."       , { action_tag, _caller });

if( log_this) log_object(caller      ,   message);
/*}}}*/
    try {
        if( popup_showing_windowId ) {
if( log_this) log("%c The popup UI is ●●● showing", lbb+lbH+lb4);
            chrome.runtime.sendMessage(message, bg_response_handler);
        }
        else {
if( log_this) log("%c The popup UI is not showing", lbb+lbH+lb8);
        }

    }
    catch(ex) {
        console.error(B_SCRIPT_ID+" ERROR:"+LF+ ex);
    }
};
/*}}}*/
/*_ bg_response_handler {{{*/
let bg_response_handler = function(response, sender, response_handler)
{
/*{{{*/
let   caller = "bg_response_handler";
let log_this = LOG_MAP.P_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_this) log_object(caller     , response);
if( log_more) log_object("...sender", sender , lbH+lf8);
if( log_more) log("response_handler=["+response_handler+"]");
/*}}}*/
    if( !response ) {
        log(caller+"%c NO RESPONSE %c ➔ %c To be expected when target process is not running"
            , lbb+lbH+lf3  ,lbb+lbL+lf5 ,lbb+lbR+lf5);
    }
};
/*}}}*/

// ┌──────────────────┐
// │ LISTEN ● EVENT   │
// └──────────────────┘
/*➔ bg_message_onMessage_addListener {{{*/
let bg_message_onMessage_addListener = function()
{
/*{{{*/
//t log_this = log_ACTIVATED();

/*}}}*/

    /*............................SCRIPT_ID..NAMESPACE.......FUNCTIONALITY......................PERMISSION.*/
//  if(!log_permission(BG_MESSAGE_SCRIPT_ID, chrome.runtime, "Listening to Extension messages", "runtime", log_this) )
//      return;

    chrome.runtime.onMessage.addListener( bg_message_onMessage_CB );

    bg_message_monitor_popup_window();
};
/*}}}*/
/*_ bg_message_monitor_popup_window {{{*/
/*{{{*/
let   popup_showing_windowId;

/*}}}*/
let bg_message_monitor_popup_window = function()
{
/*{{{*/
let   caller = "bg_message_monitor_popup_window";
let log_this = log_this_get(caller);

if( log_this) log(caller);
/*}}}*/
    // ┌───────────────────────────────────────────────────────────────────────┐
    // │ MONITOR popup_showing_windowId                                        │
    // │ ● initialized by bg_message_onMessage_CB triggered by popup_js.       │
    // │ ● sending message to popup_js should only happen when the id is set.  │
    // └───────────────────────────────────────────────────────────────────────┘

        /* ● popup will connect when displayed */
        chrome.runtime.onConnect.addListener(function(port) {
if(log_this_get(caller)) log_object("MONITORING popup connection port", port);

            /* ● then it will disconnect when hidden */
            if(port.name === "popup") {
                port.onDisconnect.addListener(function() {
if(log_this_get(caller)) log(caller+"%c popup connection closed", lbb+lbH+lb8);

                    popup_showing_windowId = 0;
                });
            }
        });

};
/*}}}*/
/*_ bg_message_onMessage_CB {{{*/
/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ [response_handler] becomes invalid when the event listener returns     │ */
/* │ unless you return true to indicate you wish                            │ */
/* │ to send a response asynchronously                                      │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
let bg_message_onMessage_CB = /*async*/ function(message,sender,response_handler=null)
{
/*{{{*/
let   caller = "bg_message_onMessage_CB";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( b_is_paused() ) { log("%c"+SYMBOL_CONSTRUCTION+" PAUSED in "+caller, lbb+lbH+lf1); return false; } // whether to wait for an async response .. or not

    let action_tags
        = ((typeof message.caller        != "undefined") ? (" → "       +message.caller       ) : "")
        + ((typeof message.focus         != "undefined") ? (" . "       +message.focus        ) : "")
        + ((typeof message.removed       != "undefined") ? (" . "       +message.removed      ) : "")
        + ((typeof message.closed        != "undefined") ? (" . "       +message.closed       ) : "")
        + ((typeof message.set_log_tag   != "undefined") ? (" → "       +message.set_log_tag  ) : "")
        + ((typeof message.set_log_state != "undefined") ? (" → "       +message.set_log_state) : "")
        + ((typeof message.cmd           != "undefined") ? (" →   cmd: "+message.cmd          ) : "")
        + ((typeof message.query         != "undefined") ? (" → query: "+message.query        ) : "")
        + ((typeof message.start         != "undefined") ? (" → start: "+message.start        ) : "")
        + ((typeof message.csp_filter    != "undefined") ? (" . "       +message.csp_filter   ) : "")
    ;
/*}}}*/
/* IGNORE MESSAGE FROM SELF {{{*/
    if(   message.caller
       && message.caller.startsWith(B_SCRIPT_ID)
      ) {
        let label   =   caller+" IGNORING MESSAGE FROM SELF .. "+message.caller;

if( log_this) {
    log_object( label, message, lbb+lb2, false);
}
        return false; // whether to wait for an async response .. or not
    }
/*}}}*/
    /* [message.cmd == "console_clear"] {{{*/
    if( message.cmd == "console_clear")
    {
        log_console_clear(message.preserve || LOG_MAP.B_LOG3_PRESERVE, caller);

        return false; // whether to wait for an async response .. or not
    }
    /*}}}*/

try {
/* LOG {{{*/

if( log_ACTIVATED() || message.set_log_tag) log_console_clear(LOG_MAP.B_LOG3_PRESERVE, action_tags);
if( log_more) log_sep_top(caller+" .. "+action_tags, "LOG8_TAG");

if( log_this) log_object(  caller+action_tags
                         , {  "---------- MESSAGES -------------------" : "---------------------------------------"
                             ,...message
                             ,"---------- SENDER ---------------------" : "---------------------------------------"
                             ,...sender
                             ,"---------- RESPONSE -------------------" : "---------------------------------------"
                             , response_handler
                         }
                         , (message.start ? lf5 : lf0), !log_more); // collapsed
/*}}}*/
    /* [message.cmd == "reload"] ● POPUP BUTTON CLICKED {{{*/
    if(message.cmd == "reload")
    {
        log("● RELOAD");
        // NO tabs ● MANUAL RELOAD {{{
        let last_tabId = bg_tabs_get_last_activated_tabId(caller);
        if(!last_tabId && !message.tabId)
        {
            if( response_handler )
            {
                let response
                    = {   "● MESSAGE": "" , ...message
                        , REPLY      : "NO tabId"  +LF
                        +              "● RELOADING:"+LF
                        +              "1 bg_message_onMessage_CB_query will reload the current page"+LF
                        +              "2 then send a message to POPUP (if it is still connected)"
                        , type       : "pending"
                        , caller     : caller + (message.caller ? " replying to "+message.caller : "")
                    };
if( log_this) log_object("SENDING A REPLY TO "+message.cmd, response); // collapsed

                response_handler( response );
            }
            if(!last_tabId && !message.tabId)
            {
                chrome.tabs.query({}) // any window, any tab ● https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query
                    .then ((tabs ) => {

                        tabs.forEach((tab) => {
                            if(!message.tabId || tab.active) {
                                message.tabId      = tab.id;
                                message.tab_active = tab.active;
                            }
                        });
if( log_this) log("%c RELOADING %c tabId "+message.tabId+"%c active "+message.tab_active
                 , lbb+lbL     ,lbb+lbC                  ,lbb+lbR+lbX[message.tab_active ? 5:2]);

                        bg_message_onMessage_CB_query( message );
                    })
                    .catch((error) => { console.error(BG_MESSAGE_SCRIPT_ID+"."+caller+": "+message.cmd, error); })
                ;
            }
            return false; // whether to wait for an async response .. or not
        }
        //}}}
    }
    /*}}}*/
    /* [popup_showing_windowId] {{{*/
    if( typeof message.popup_showing_windowId != "undefined")
    {
        popup_showing_windowId = message.popup_showing_windowId;

if( log_this) log(caller+"%c popup_showing_windowId=["+popup_showing_windowId+"]", lbb+lbH+lb4);
    }
    /*}}}*/
    /*  [csp_filter] {{{*/
    if(   message.caller
       && message.caller.startsWith(O_SCRIPT_ID)
       && (typeof message.csp_filter != "undefined")
    ) {
if( log_this) log("%c"+SD1    +"%c bg_message_onMessage_CB_options_js_csp_filter(message, response_handler)"
                  ,lbb+lbH+lb1 ,lf4);

        setTimeout(bg_message_onMessage_CB_options_js_csp_filter, 0, message, response_handler);
    }
    /*}}}*/
    /* [set_log_map] {{{*/
    else if( typeof message.set_log_tag    != "undefined")
    {
if(!log_this) log_this = true;
if( log_this) log("%c"+SD2    +"%c SET %c LOG_MAP %c "+message.set_log_tag
                  ,lbb+lbH+lb2 ,lbL+lf9,lbR+lf5  ,lf4                     );

        setTimeout(bg_message_onMessage_CB_set_log_map, 0, message, response_handler);
    }
    /*}}}*/
    /* [query] {{{*/
    else if(   (typeof message.query  != "undefined")
            || (       message.cmd    == "reload"   )
           ) {
if( log_this) log("%c"+SD3    +"%c calling bg_message_onMessage_CB_query"
                  ,lbb+lbH+lb3 ,lf4                                     );

        setTimeout(bg_message_onMessage_CB_query, 0, message, response_handler);

    }
    /*}}}*/
//    /* [RUN_script] {{{*/
//    else if(   (message.caller == "bg_page_RUN_CheckContentScript")
//            || (message.caller == "bg_page1_START_RUN_script")
//    ) {
//if( log_more) log("13 (v3) ➔ FETCH: bg_message_onMessage_CB → bg_page4_FETCH_CB");
//
//        setTimeout(bg_page4_FETCH_CB, 0, message.tabId, [ message ]);
//    }
//    /*}}}*/
    /* [bg_message_onMessage_CB_tab] {{{*/
    else {
if( log_this) log("%c"+SD4    +"%c calling bg_message_onMessage_CB_tab"
                  ,lbb+lbH+lb4 ,lf4);

        setTimeout(bg_message_onMessage_CB_tab,0,message, response_handler);
    }
    /*}}}*/
if(log_this) log("%c"+SD5     +"%c "+caller+" ...return (response_handler != null)=["+(response_handler != null)+"]"
                 ,lbb+lbH+lb5  ,lf4);

    return (response_handler != null); // whether to wait for an async response .. or not
}
finally {
if( log_more) log_sep_bot(caller+" .. "+action_tags, "LOG8_TAG");
if( log_this || log_ACTIVATED() || LOG_MAP.B_LOG0_MORE) log_STORAGE();
}
};
/*}}}*/

// ┌──────────────────┐
// │ HANDLE ● REPLY   │
// └──────────────────┘
/*_ bg_message_onMessage_CB_query {{{*/
/*{{{*/
const B_TABS_ON_MESSAGE_QUERY     = "TABS ON MESSAGE QUERY";

/*}}}*/
let bg_message_onMessage_CB_query = /*async*/ function(message, response_handler=null)
{
/*{{{*/
let   caller = "bg_message_onMessage_CB_query";
let log_this = log_this_get(caller);

let action
    = (message.cmd == "reload") ? "reload "+message.tabId
    : (message.query          ) ? "query " +message.query
    :                             undefined
;

if( log_this) log("%c "+caller+"%c action %c"+action
                  ,lbL+lf1    ,lbC+lf1   ,lbR+lf1   );
if( log_this) console.trace();
/*}}}*/
    /* ● [NO tabId] - LOG2_TAG - error B_NO_LAST_ACTIVATED .. f(bg_tabs_get_last_activated_tabId) {{{*/
    let tabId = message.tabId || bg_tabs_get_last_activated_tabId(caller);
    if(!tabId )
    {
        let response
            = {   REPLY : B_TABS_ON_MESSAGE_QUERY+": "+B_NO_LAST_ACTIVATED
                , type  : "error"

            };
if( log_this) log("%c"+SD1+"%c"+response.REPLY,lbb+lbH+lf1 ,lbH+lb2);

        if( response_handler )
            bg_message_onMessage_CB_reply(tabId, message, response, response_handler);

        return "LOG2_TAG";
    }
    /*}}}*/
    /* ● [  RELOAD] - LOG3_TAG - pending bg_content_scripts_reload {{{*/
    if(message.cmd == "reload")
    {
        let response
            = {   REPLY : B_TABS_ON_MESSAGE_QUERY+": RELOADING"
                , type  : "pending"
                , tabId
            };
if( log_this) log("%c"+SD1+"%c"+response.REPLY,lbb+lbH+lf1 ,lbH+lb3);

        if( response_handler )
            bg_message_onMessage_CB_reply(tabId, message, response, response_handler);

        /* [bg_content executeScript] */
        message.tabId = tabId;
        bg_content_scripts_reload( message );

        return "LOG3_TAG";
    }
    /*}}}*/
    /* ● [  NO URL] - LOG4_TAG - NEED TAB URL {{{*/
    let url = bg_tabs_get_tabId_key(tabId, "url");
    if(!url )
    {
if( log_this) log("%c"+SD2+   "%c NEED TAB URL CALLING %c bg_settings_tabs4_query_active_tab_url [tabId "+tabId+"]"
                  ,lbB+lbH+lb2,lf3                    ,lf3                                           );

        /*await*/ bg_settings_tabs4_query_active_tab_url( tabId
                                                        , { query: "QUERY TAB URL" , caller: log_js.get_callers_bot() }
                                                        , response_handler
                                                      );

        return "LOG4_TAG";
    }
    /*}}}*/
    /* ● [HAVE URL] - LOG5_TAG - HAVE AN URL FOR A REPLY TO POPUP QUERY ANSWER {{{*/
    /* NOTE: popup_js has no clue about its own tabId .. short of an async call to getCurrent */
    if( url )
    {
        let response
            = {   REPLY : B_TABS_ON_MESSAGE_QUERY+": HAVE URL"
                , type  : "answer"
                , url
            };
if( log_this) log("%c"+SD3+"%c"+response.REPLY, lbb+lbH+lb3,lf4);

        if( response_handler )
            bg_message_onMessage_CB_reply(tabId, message, response, response_handler);

            return "LOG5_TAG";
        }
        /*}}}*/
        /* ..[ DEFAULT] - LOG8_TAG - [TAB SYNC] .. QUERY ANSWERED {{{*/
    else {
        let response
            = {   REPLY : B_TABS_ON_MESSAGE_QUERY+": UNEXPECTED QUERY"
                , type  : "error"

            };
if( log_this) log("%c "+caller+"%c"+SD4+   "%c action: "+action
                  ,lbb+lbH+lb2 ,lbb+lbH+lb4,lbb+lf2            );

        if( response_handler )
            bg_message_onMessage_CB_reply(tabId, message, response, response_handler);

        return "LOG8_TAG";
    }
    /*}}}*/
};
/*}}}*/
/*➔ bg_message_onMessage_CB_reply {{{*/
let bg_message_onMessage_CB_reply = function(tabId,message,response,response_handler)
{
/*{{{*/
let   caller = "bg_message_onMessage_CB_reply";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

let action
    = (message.cmd == "reload") ? "reload tabId=["+tabId+"]"
    : (message.query          ) ? "query "+message.query
    :                             undefined
;

if( log_more) log_sep_top(caller+" "+action);
if( log_this)   log("%c "+caller+"%c action %c"+action
                    ,lbL+lf9     ,lbC+lf9  ,lbR+lf9   );
/*}}}*/

    // ATTRIBUTES {{{
    let            url =   tabId && bg_tabs_get_tabId_key(tabId, "url");
    let tab_attributes = { tabId , url };

    //}}}
    // SETTINGS {{{
    let tab_items;
    if( tabId )
    {
        let        get =  bg_tabs_get_tabId_key;

        let      start =  get(tabId, "start"         )
            ||          !!get(tabId, "tools_deployed");/*if(     start)*/tab_attributes.     start =      start;
        let csp_filter =  get(tabId, "csp_filter"    );  if(csp_filter)  tab_attributes.csp_filter = csp_filter;
        let  cancelreq =  get(tabId, "cancelreq"     );  if( cancelreq)  tab_attributes. cancelreq =  cancelreq;
        let      theme =  get(tabId, "theme"         );  if(     theme)  tab_attributes.     theme =      theme;
        let   typeface =  get(tabId, "typeface"      );  if(  typeface)  tab_attributes.  typeface =   typeface;
        let      color =  get(tabId, "color"         );  if(     color)  tab_attributes.     color =      color;

        /**/ tab_items =  bg_tabs_get_tabId    (tabId);
    }
    else {
        /**/  tab_items           = null;

        tab_attributes.     start = undefined;
        tab_attributes.csp_filter = undefined;
        tab_attributes. cancelreq = undefined;
        tab_attributes.     theme = undefined;
        tab_attributes.  typeface = undefined;
        tab_attributes.     color = undefined;
    }
    //}}}
try{
    // [response] {{{
    response
        = {   "● RESPONSE"   : "" , ...response
            , "● MESSAGE"    : "" , ...message
            , "● ATTRIBUTES" : "" , ...tab_attributes
            , "● ITEMS"      : "" , ...tab_items
            , "● HANDLER"    : "" ,    handler : BG_MESSAGE_SCRIPT_ID+" → "+caller+"(action "+action+")"
        };

if( log_this) log(caller+"%c popup_showing_windowId=["+popup_showing_windowId+"]", lbb+lbH+lb4);
    if( response_handler &&  popup_showing_windowId)
        response.caller = BG_MESSAGE_SCRIPT_ID+":"+LF+"response to a call from "+LF+response.caller;

if( log_this) log_object("SENDING A REPLY TO "+message.caller, response, lb9, !log_more); // collapsed

    response_handler( response );
    //}}}
} catch(error) {
    log(caller+": "+error.message); // response_handler is not a function...
    console.dir(  response_handler );
}
if( log_more) log_sep_bot(caller+" "+message.query);
};
/*}}}*/

// ┌──────────────────┐
// │ HANDLE ● LOGGING │
// └──────────────────┘
/*_ bg_message_onMessage_CB_set_log_map {{{*/
let bg_message_onMessage_CB_set_log_map = function(message, response_handler=null)
{
/*{{{*/
let   caller = "bg_message_onMessage_CB_set_log_map";
let log_this = log_this_get(caller);

/*}}}*/
    if(!message.set_log_tag)
        return "LOG0_TAG";
    /* HANDLE: [message.set_log_tag] .. [LOG_MAP] {{{*/
try {
    switch(message.set_log_tag)
    {
        /* LOG_MAP background_js */
        case "B_LOG1_MESSAGE"     : LOG_MAP.B_LOG1_MESSAGE   = message.set_log_state  ; break;
        case "B_LOG2_ERROR"       : LOG_MAP.B_LOG2_ERROR     = message.set_log_state  ; break;
        case "B_LOG3_PRESERVE"    : LOG_MAP.B_LOG3_PRESERVE  = message.set_log_state  ; break;
        case "B_LOG4_CSP"         : LOG_MAP.B_LOG4_CSP       = message.set_log_state  ; break;
        case "B_LOG5_ONREQUEST"   : LOG_MAP.B_LOG5_ONREQUEST = message.set_log_state  ; break;
        case "B_LOG6_ONHEADER"    : LOG_MAP.B_LOG6_ONHEADER  = message.set_log_state  ; break;
        case "B_LOG7_TABS"        : LOG_MAP.B_LOG7_TABS      = message.set_log_state  ; break;
        case "B_LOG8_STORE"       : LOG_MAP.B_LOG8_STORE     = message.set_log_state  ; break;
        case "B_LOG9_STAGE"       : LOG_MAP.B_LOG9_STAGE     = message.set_log_state  ; break;
        case "B_LOG0_MORE"        : LOG_MAP.B_LOG0_MORE      = message.set_log_state  ; break;

        /* logging */
        case "WORKER_LOG"         : worker_js        .logging( message.set_log_state ); break;
        case "BACKGROUND_JS_LOG"  : background_js    .logging( message.set_log_state ); break;
        case "BG_CONTENT_JS_LOG"  : bg_content       .logging( message.set_log_state ); break;
        case "BG_CSP_JS_LOG"      : bg_csp           .logging( message.set_log_state ); break;
        case "BG_EVENT_JS_LOG"    : bg_event         .logging( message.set_log_state ); break;
        case "BG_HEADER_JS_LOG"   : bg_header        .logging( message.set_log_state ); break;
        case "BG_MESSAGE_JS_LOG"  : bg_message       .logging( message.set_log_state ); break;
        case "BG_PAGE_JS_LOG"     : bg_page          .logging( message.set_log_state ); break;
        case "BG_SETTINGS_JS_LOG" : bg_settings      .logging( message.set_log_state ); break;
        case "BG_STORE_JS_LOG"    : bg_store         .logging( message.set_log_state ); break;
        case "BG_TABS_JS_LOG"     : bg_tabs          .logging( message.set_log_state ); break;

        case "P_LOG1_MESSAGE"     :
        case "P_LOG2_ERROR"       :
        case "P_LOG6_UI"          :
        case "P_LOG7_TABS"        :
        case "P_LOG8_STORE"       :
        case "P_LOG9_EVENT"       :
        case "P_LOG0_MORE"        :
        /*.......................*/ if(log_this) log("IGNORING MESSAGES TO POPUP"    ); break;

//log("TODO: message.set_log_tag["+message.set_log_tag+"] "+message.set_log_state);

        default                   :
            log(" No switch for ["+ message.set_log_tag +"]");
            console.trace();
    }
} catch(error) { log("TODO: %c"+mPadEnd(message.set_log_tag, 18)+"%c"+error.message
                     ,      lbH+lf7                              ,lf2              );
}
    /*}}}*/
    /* REPLY : handling callee response {{{*/

    LOG_MAP.B_LOG2_ERROR = (message.set_log_tag != "B_LOG2_ERROR") && log_ACTIVATED();

    /* B_LOG2_ERROR may have changed .. sync with caller */
    if( response_handler )
        response_handler({ B_LOG2_ERROR: LOG_MAP.B_LOG2_ERROR });

    return "LOG9_TAG";
    /*}}}*/
};
/*}}}*/

// ┌──────────────────┐
// │ HANDLE ● TABS    │
// └──────────────────┘
/*_ bg_message_onMessage_CB_tab {{{*/
/*{{{*/
const B_TABS_ON_MESSAGE           = "TABS ON MESSAGE";

/*}}}*/
let bg_message_onMessage_CB_tab = async function(message,response_handler=null)
{
/*{{{*/
let   caller = "bg_message_onMessage_CB_tab";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    let action_tags = log_js.log_json_prettify(message);
if( log_ACTIVATED() ) log_console_clear(LOG_MAP.B_LOG3_PRESERVE, action_tags);
if( log_this) log_object(caller+" start: "+message.start, message, (message.start ? lf5:lf0));
/*}}}*/
    /* [tabId] .. [No tabId] .. [return LOG2_TAG] {{{*/
    if(typeof message.tabId == "undefined")
    {
        message.result = { error: caller+": MISSING message.tabId" };

//if(LOG_MAP.B_LOG2_ERROR) {
    log_object(caller+" *** MISSING message.tabId ***", message, lbF+lbH+lf2);
    log_caller();
//}

        return "LOG2_TAG";
    }
    /*}}}*/
if( log_more) log_sep_top(caller);
try {
    /* [start TOGGLE] .. [start OFF] {{{*/
    let start_changed      = false;
    if(typeof message.start != "undefined")
    {
        start_changed = message.start != bg_tabs_get_tabId_key(message.tabId, "start");

    }

    /* [start ON] .. [by csp_filter] */
    if(message.csp_filter && (message.start != true))
    {
        message.start = true;
        start_changed = message.start != bg_tabs_get_tabId_key(message.tabId, "start");
    }

    if( start_changed )
    {
        message.result /* eslint-disable-line require-atomic-updates */
            = (message.start != true)
            ?  await bg_message_onMessage_CB_TAB_stop (message.tabId)
            :  await bg_message_onMessage_CB_TAB_start(message.tabId)
        ;
    }
    /*}}}*/
    /* [cancelreq] {{{*/
    let cancelreq_changed  = false;
    if(typeof message.cancelreq != "undefined")
    {
        let cancelreq = bg_tabs_get_tabId_key(message.tabId, "cancelreq");
        if( cancelreq != message.cancelreq) {
if(log_more) log_SYN("CANCEL HTTP REQUESTS "+ message.cancelreq);

            cancelreq_changed = true;
        }
     }
    /*}}}*/
    /* [csp_filter] REJECT REMOVE ACCEPT {{{*/
    let csp_filter_changed = false;
    if(typeof message.csp_filter != "undefined")
    {
        bg_message_onMessage_CB_TAB_csp_filter(message, response_handler);

        let current_csp_filter = bg_tabs_get_tabId_key(message.tabId, "csp_filter");
        csp_filter_changed     = (message.csp_filter != current_csp_filter);
    }
    /*}}}*/
    /* [csp_filter_changed] {{{*/
    if( csp_filter_changed )
    {
        /* FILTER REMOVED .. ( leave previous effect to induce a cleanup-reload) */
        /* FILTER CHANGED .. (remove previous effect to induce apply csp filter) */
        if(message.csp_filter)
            bg_tabs_del_tabId_key(message.tabId, "csp_filter_effect");

        /* INDUCE A PAGE RELOAD */
        bg_tabs_del_tabId_key(message.tabId, "t_load");
        bg_tabs_del_tabId_key(message.tabId, "tools_deployed");
        bg_tabs_del_tabId_key(message.tabId, "reloaded_once");
      //bg_tabs_del_tabId_key(message.tabId, "tools_FETCH_called_once");
    }
    /*}}}*/
    /* STORE AND SYNC .. [csp_filter_changed] [cancelreq_changed] {{{*/
if(log_more) log("...csp_filter_changed=["+csp_filter_changed+"] ["+ message.csp_filter +"]");
if(log_more) log("........start_changed=["+start_changed     +"] ["+ message.start      +"]");
if(log_more) log("....cancelreq_changed=["+cancelreq_changed +"] ["+ message.cancelreq  +"]");
if(log_more) log_object("CHANGED"
                        , { csp_filter_changed , csp_filter: message.csp_filter
                          ,      start_changed ,      start: message.start
                          ,  cancelreq_changed ,  cancelreq: message.cancelreq
                        }, lf0, false);

    let what_changed
        = (     start_changed ? "      start=["+message.start      +"]" : "")
        + (csp_filter_changed ? " csp_filter=["+message.csp_filter +"]" : "")
        + ( cancelreq_changed ?  " cancelreq=["+message.cancelreq  +"]" : "")
    ;
    if(start_changed || csp_filter_changed || cancelreq_changed)
    {
        /* [tabId STORE] {{{*/
if( log_more) log_object("TAB["+message.tabId+"]", bg_tabs_get_tabId(message.tabId), lbH+lf5);

        if( csp_filter_changed ) bg_tabs_set_tabId_key_val(message.tabId, "csp_filter", message.csp_filter);
        if(  cancelreq_changed ) bg_tabs_set_tabId_key_val(message.tabId, "cancelreq" , message.cancelreq );

        // BY onMessage CALLBACK
        let start      = bg_tabs_set_tabId_key_items(message.tabId, "start"     , message);
        /*............*/ bg_tabs_set_tabId_key_items(message.tabId, "csp_filter", message);
        /*............*/ bg_tabs_set_tabId_key_items(message.tabId, "cancelreq" , message);
        if(!start)       bg_tabs_del_tabId_key      (message.tabId, "tools_deployed"     );

        /*}}}*/
        /* [tabId SYNC ] {{{*/
        if(start) await bg_message_onMessage_CB_TAB_start( message.tabId );
        else      await bg_message_onMessage_CB_TAB_stop ( message.tabId );

        /*}}}*/
    }
    /*}}}*/
    if( response_handler )
    {
        if( message.caller )
            message.caller = BG_MESSAGE_SCRIPT_ID+":"+LF+"response to a call from "+LF+message.caller;

        message.status
            = ((message.status||"") +" "+B_TABS_ON_MESSAGE + what_changed).trim();

if( log_this) log_object("sending response_handler message", message, lf5);

        response_handler( message );
    }
    // ...return [log_tag] .. 0 3 4 5 7 .. f(start cancelreq csp_filter) {{{
    return (message.start      != true          ) ? "LOG0_TAG"
        :  (message.cancelreq  == true          ) ? "LOG7_TAG"
        :  (message.csp_filter == FILTER3_REMOVE) ? "LOG3_TAG"
        :  (message.csp_filter == FILTER4_CUSTOM) ? "LOG4_TAG"
        :  (message.csp_filter == FILTER5_RELAX ) ? "LOG5_TAG"
        :                                           "LOG6_TAG"
    ;

    //}}}
}
finally {
if(log_more) log_sep_bot(caller);
if( log_this || log_ACTIVATED() || LOG_MAP.B_LOG0_MORE) log_STORAGE();
}
};
/*}}}*/
/*_ bg_message_onMessage_CB_TAB_start {{{*/
let bg_message_onMessage_CB_TAB_start = async function(tabId)
{
/*LOG{{{*/
let   caller = "bg_message_onMessage_CB_TAB_start";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log("%c "+caller+"(tabId "+tabId+")", lbH+lf6);
/*}}}*/
    /* STORE URL SETTINGS [start ON ] {{{*/
    let         url     = bg_tabs_get_tabId_key(tabId, "url");
    if(!url) return { error: caller+": NO URL" };

    let caller_tag      = log_get_caller_tag_FOR_key_val_caller("start", true, log_js.get_callers_bot());
    bg_store_SET_url_settings(tabId, caller_tag); // BY B_SCRIPT ACTION

if( log_this) log("%c"+SD6+"%c START URL %c"+bg_store_GET_url_key(url)
                  ,lbb+lf6 ,lbL+lf6     ,lbR                         );
    /*}}}*/
    /* RELOAD PAGE .. WHEN TOOLS ARE NOT LOADED {{{*/
if( log_more) log_sep_top_FOR_caller_callee(caller, "bg_content_scripts_loaded");
    /*......................................*/ await bg_content_scripts_loaded(tabId);
if( log_more) log_sep_bot_FOR_caller_callee(caller, "bg_content_scripts_loaded");

    let result = await bg_page2_RELOAD_if_required({tabId});

    /*}}}*/
    /* OR .. SEND TAB_CMD [t_load  ] .. IF [content_scripts] LOADED {{{*/
    if(!result)
    {

        let message     = { cmd: "t_load" };
//      let action_tags = JSON.stringify(message);
        let action_tags = log_js.log_json_prettify(message);
if( log_more) log_sep_top_FOR_caller_callee(caller, "bg_message_tabs_sendMessage: "+action_tags);
        result = await                               bg_message_tabs_sendMessage(tabId, message, caller );
if( log_more) log_sep_bot_FOR_caller_callee(caller, "bg_message_tabs_sendMessage: "+action_tags);
    /*}}}*/
    bg_page_POPUP_pageAction(tabId, caller); /* update popup */

    }

if( log_this) log_object("...return result", result);
    return result;
};
/*}}}*/
/*_ bg_message_onMessage_CB_TAB_stop  {{{*/
let bg_message_onMessage_CB_TAB_stop  = async function(tabId)
{
/*LOG{{{*/
let   caller = "bg_message_onMessage_CB_TAB_stop";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log("%c "+caller+"(tabId "+tabId+")", lbH+lf6);
if( log_more) log_caller();
/*}}}*/
    /* STORE URL SETTINGS [start OFF] {{{*/
    let         url     = bg_tabs_get_tabId_key(tabId, "url");
    if(!url) return { error: caller+": NO URL" };

    bg_tabs_del_tabId_key    (tabId, "start"        ); // BY B_SCRIPT ACTION

    let caller_tag      = log_get_caller_tag_FOR_key_val_caller("start", false, log_js.get_callers_bot());
    bg_store_DEL_url_settings(tabId, caller_tag); // BY B_SCRIPT ACTION

if( log_this) log("%c"+SD6+"%c STOP  URL %c"+bg_store_GET_url_key(url)
                  ,lbb+lf6 ,lbL+lf6     ,lbR                         );
    /*}}}*/
    /* SEND TAB_CMD [t_unload] .. IF [content_scripts] LOADED {{{*/
if( log_more) log_sep_top_FOR_caller_callee(caller, "bg_content_scripts_loaded");
    /*......................................*/ await bg_content_scripts_loaded(tabId);
if( log_more) log_sep_bot_FOR_caller_callee(caller, "bg_content_scripts_loaded");

        let message     = { cmd: "t_unload" };
//      let action_tags = JSON.stringify(message);
        let action_tags = log_js.log_json_prettify(message);
if( log_more) log_sep_top_FOR_caller_callee(caller, "bg_message_tabs_sendMessage: "+action_tags);
    let result = await                               bg_message_tabs_sendMessage(tabId, message, caller );
if( log_more) log_sep_bot_FOR_caller_callee(caller, "bg_message_tabs_sendMessage: "+action_tags);
    /*}}}*/
    bg_page_POPUP_pageAction(tabId, caller); /* update popup */

if( log_this) log_object("...return result", result);
    return result;
};
/*}}}*/
/*_ bg_message_onMessage_CB_TAB_csp_filter {{{*/
let bg_message_onMessage_CB_TAB_csp_filter = function(message)
{
/*{{{*/
let   caller = "bg_message_onMessage_CB_TAB_csp_filter";
let log_this = log_this_get(caller);

/*}}}*/
    /* [set_no_filter_or_remove_current] {{{*/
    let csp_filter = bg_tabs_get_tabId_key(message.tabId, "csp_filter");

    let set_no_filter_or_remove_current
        =  (csp_filter && !message.csp_filter) /* some current filter .............. not wanted anymore */
        || (csp_filter ==  message.csp_filter) /* some current filter re-selected ...... toggle to none */
        ;

    /*}}}*/
    /* REJECT SELECTED FILTER .. (HTTP SCHEME MISMATCH) {{{*/
    let url = bg_tabs_get_tabId_key(message.tabId, "url");
    if(url && !url.startsWith("http"))
    {
if(LOG_MAP.B_LOG2_ERROR) log("%c REJECTING USELESS ["+message.csp_filter+"] FOR %c"+bg_store_GET_url_domain(url)+"... %c *** HTTP SCHEME MISMATCH ***"
    ,                        lbL+lf9                                           ,lbR+lf2                     ,lbH+lf2);

        message.csp_filter = "";

        /* reject popup rejected selection */
        bg_page_POPUP_pageAction(message.tabId, JSON.stringify(message)); /* update popup */
    }
    /*}}}*/
    /* REMOVE CURRENT FILTER {{{*/
    else if( set_no_filter_or_remove_current )
    {
if( log_this) log("%c "+caller+": REMOVING ["+csp_filter+"] FOR %c"+bg_store_GET_url_domain(url)+"...", lbL+lf9, lbR+lf2);

        message.csp_filter = "";
    }
    /*}}}*/
    /* ACCEPT SELECTED FILTER {{{*/
    else {
if( log_this) log("%c "+caller+": SELECTING ["+message.csp_filter+"] FOR %c"+bg_store_GET_url_domain(url)+"...", lbL+lf9, lbR+lf9);

    }
    /*}}}*/
};
/*}}}*/

// ┌────────────────────────────┐
// │ HANDLE ● FILTERS JSON EDIT │
// └────────────────────────────┘
/*_ bg_message_onMessage_CB_options_js_csp_filter {{{*/
let bg_message_onMessage_CB_options_js_csp_filter = function(message, response_handler=null)
{
/*{{{*/
let   caller = "bg_message_onMessage_CB_options_js_csp_filter";
let log_this = log_this_get(caller);

/*}}}*/
    /* [NO message.csp_filter] {{{*/
    if(typeof message.csp_filter == "undefined")
    {
if(log_this) log(caller+"%c [NO message.csp_filter]", lbb+lbH+lf2);

        return "LOG8_TAG";
    }
    /*}}}*/
    // RETURNED VALUE:
    let     csp_filter = message.csp_filter || FILTER6_NONE;
    switch( csp_filter )
    {
        case FILTER3_REMOVE:
        case FILTER4_CUSTOM:
        case FILTER5_RELAX:
        case FILTER6_NONE:
        {
            /* EDIT AND STORE {{{*/
            if(message.cmd == "edit")
            {
if(log_this) log(caller+"%c CSP EDITING csp_filter=["+csp_filter+"]:", lbH+lf4);

                let csp_json_default
                =  (csp_filter == FILTER3_REMOVE) ? FILTER3_REMOVE_DEFAULT
                :  (csp_filter == FILTER4_CUSTOM) ? FILTER4_CUSTOM_DEFAULT
                :  (csp_filter == FILTER5_RELAX ) ? FILTER5_RELAX_DEFAULT
                :  (csp_filter == FILTER6_NONE  ) ? FILTER6_NONE_DEFAULT
                :                                   FILTER6_NONE_DEFAULT
                ;

                return bg_csp_save_filter_to_store(csp_filter, message.csp_json, csp_json_default, response_handler);
            }
            /*}}}*/
            /* LOAD {{{*/
           else
               {
if(log_this) log(caller+"%c CSP LOADING csp_filter=["+csp_filter+"]:", lbH+lf5);

                bg_csp_load_filter_from_store(csp_filter, response_handler);

                return (csp_filter == FILTER3_REMOVE) ? "LOG3_TAG"
                    :  (csp_filter == FILTER4_CUSTOM) ? "LOG4_TAG"
                    :  (csp_filter == FILTER5_RELAX ) ? "LOG5_TAG"
                    :/*(csp_filter == FILTER6_NONE  )*/ "LOG6_TAG"
                ;
           }
            /*}}}*/
        }
        default:
if(log_this) log(caller+"%c [UNHANDLED message.csp_filter]=["+csp_filter+"]", lf2);
        return "LOG8_TAG";
    }
};
/*}}}*/

    /*➔ EXPORT {{{*/
    return {  name : "bg_message"
        ,             bg_message_onMessage_CB_reply
        ,             bg_message_onMessage_addListener
        ,             bg_message_sendMessage
        ,             bg_message_tabs_sendMessage
        ,             logging
        // DEBUG
        , bg_message_onMessage_CB
        , bg_message_onMessage_CB_TAB_start
        , bg_message_onMessage_CB_TAB_stop
        , bg_message_onMessage_CB_query
    };
    /*}}}*/
}());
