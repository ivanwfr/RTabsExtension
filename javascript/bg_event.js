// ┌───────────────────────────────────────────────────────────────────────────┐
// │ bg_event.js ............................................. BACKGROUND SCRIPT │
// └───────────────────────────────────────────────────────────────────────────┘
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* eslint-disable no-warning-comments */
/* eslint-disable prefer-spread       */
/* eslint-disable prefer-rest-params  */
/* eslint-disable valid-jsdoc         */
/* eslint-disable no-redeclare        */

/* globals  chrome                    */

/* globals  log_js                    */
/* globals  background_js             */
/* exported bg_event                  */
/* globals  bg_header                 */
/* globals  bg_message                */
/* globals  bg_page                   */
/* globals  bg_settings               */
/* globals  bg_store                  */
/* globals  bg_tabs                   */

/* eslint-enable  no-redeclare        */

const BG_EVENT_SCRIPT_ID  = "bg_event";
const BG_EVENT_SCRIPT_TAG =  BG_EVENT_SCRIPT_ID +" (231024:17h:01)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
// ┌───────────────────────────────────────────────────────────────────────────┐
// │ EVENT LISTENERS                                              B_LOG8_STORE │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
"● javascript/bg_event.js
:e javascript/bg_header.js
:e javascript/bg_message.js
:e javascript/bg_page.js
:e javascript/bg_settings.js
:e javascript/bg_store.js
:e javascript/bg_tabs.js
:e javascript/options.js
:e javascript/popup.js
:e javascript/worker.js
/* └─────────────────────────────┘*/
let bg_event  = (function() {
"use strict";
let BG_EVENT_JS_LOG  = false;

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

let   log
    , log_object
    , log_permission
    , li
;

/*}}}*/
/*_ background_js {{{*/
let LOG_MAP;
let log_ACTIVATED;
let log_STORAGE;

/*}}}*/
//_______________ bg_content
//_______________ bg_csp
/*_ bg_header {{{*/
let bg_header_addListener;

/*}}}*/
//_______________ bg_event
/*_ bg_message {{{*/
let bg_message_onMessage_addListener;
let bg_message_onMessage_CB_query;

/*}}}*/
/*_ bg_page {{{*/
let bg_page_onRemoved;
let bg_page_onReplaced;

/*}}}*/
/*_ bg_settings {{{*/
let bg_tabs_onActivated;
let bg_settings_get_url_settings;

/*}}}*/
/*_ bg_tabs {{{*/
let bg_tabs_declarativeNetRequest_onRuleMatchedDebug_listener;
let bg_tabs_get_tabId_last_activated;
let bg_tabs_get_tabId_key;
let bg_tabs_get_url;
let bg_tabs_onRemoved;
let bg_tabs_onUpdated;

/*}}}*/
/*_ bg_store {{{*/
let bg_store_SAVE_items;

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
    log                             = log_js.log;                                   li("log_js","log",log);
    log_object                      = log_js.log_object;                            li("log_js","log_object",log_object);
    log_permission                  = log_js.log_permission;                        li("log_js","log_permission",log_permission);

    /*}}}*/
    modules.push( background_js ); /*{{{*/
    LOG_MAP                         = background_js.LOG_MAP;                        li("background_js","LOG_MAP",LOG_MAP);

    log_ACTIVATED                   = background_js.log_ACTIVATED;                  li("background_js","log_ACTIVATED",log_ACTIVATED);
    log_STORAGE                     = background_js.log_STORAGE;                    li("background_js","log_STORAGE",log_STORAGE);

    /*}}}*/
    //_______________________ bg_content
    //_______________________ bg_csp
    //_______________________ bg_event
    modules.push( bg_header     ); /*{{{*/
    bg_header_addListener           = bg_header.bg_header_addListener;              li("bg_header","bg_header_addListener",bg_header_addListener);

    /*}}}*/
    modules.push( bg_message    ); /*{{{*/
    bg_message_onMessage_addListener= bg_message.bg_message_onMessage_addListener;  li("bg_message","bg_message_onMessage_addListener",bg_message_onMessage_addListener);
    bg_message_onMessage_CB_query   = bg_message.bg_message_onMessage_CB_query;     li("bg_message","bg_message_onMessage_CB_query",bg_message_onMessage_CB_query);

    /*}}}*/
    modules.push( bg_page       ); /*{{{*/
    bg_page_onRemoved               = bg_page.bg_page_onRemoved;                  li("bg_page","bg_page_onRemoved",bg_page_onRemoved);
    bg_page_onReplaced              = bg_page.bg_page_onReplaced;                 li("bg_page","bg_page_onReplaced",bg_page_onReplaced);

    /*}}}*/
    modules.push( bg_settings   ); /*{{{*/
    bg_settings_get_url_settings    = bg_settings.bg_settings_get_url_settings;   li("bg_settings","bg_settings_get_url_settings",bg_settings_get_url_settings);

    /*}}}*/
    modules.push( bg_store      ); /*{{{*/
    bg_store_SAVE_items             = bg_store.bg_store_SAVE_items;                 li("bg_store","bg_store_SAVE_items",bg_store_SAVE_items);

    /*}}}*/
    modules.push( bg_tabs       ); /*{{{*/
    bg_tabs_declarativeNetRequest_onRuleMatchedDebug_listener   = bg_tabs.bg_tabs_declarativeNetRequest_onRuleMatchedDebug_listener; li("bg_tabs","bg_tabs_declarativeNetRequest_onRuleMatchedDebug_listener",bg_tabs_declarativeNetRequest_onRuleMatchedDebug_listener);
    bg_tabs_get_tabId_last_activated                            = bg_tabs.bg_tabs_get_tabId_last_activated;                          li("bg_tabs","bg_tabs_get_tabId_last_activated",bg_tabs_get_tabId_last_activated);
    bg_tabs_get_tabId_key                                       = bg_tabs.bg_tabs_get_tabId_key;                                     li("bg_tabs","bg_tabs_get_tabId_key",bg_tabs_get_tabId_key);
    bg_tabs_get_url                                             = bg_tabs.bg_tabs_get_url;                                           li("bg_settings","bg_tabs_get_url",bg_tabs_get_url);
    bg_tabs_onRemoved                                           = bg_tabs.bg_tabs_onRemoved;                                         li("bg_tabs","bg_tabs_onRemoved",bg_tabs_onRemoved);
    bg_tabs_onActivated                                         = bg_tabs.bg_tabs_onActivated;                                       li("bg_tabs","bg_tabs_onActivated",bg_tabs_onActivated);
    bg_tabs_onUpdated                                           = bg_tabs.bg_tabs_onUpdated;                                         li("bg_tabs","bg_tabs_onUpdated",bg_tabs_onUpdated);

    /*}}}*/
    log_js.log_import(bg_event     , modules);
};
/*}}}*/
    setTimeout(_import,0);
/*}}}*/
/* LOGGING {{{*/
/*_ logging {{{*/
let logging = function(state)
{
    if(state != undefined) {            BG_EVENT_JS_LOG = state;
        if(state) bg_store_SAVE_items({ BG_EVENT_JS_LOG           });
        else      bg_store_SAVE_items({ BG_EVENT_JS_LOG: undefined});
    } return                            BG_EVENT_JS_LOG;
};
/*}}}*/
/*_ log_this_get {{{*/
let log_this_get = function(_caller)
{
    switch(_caller) {

    case "bg_event_addListeners"                      : return BG_EVENT_JS_LOG || log_ACTIVATED();

    case "bg_event_onLoad_check_current_tab"          : return BG_EVENT_JS_LOG;

    case "bg_event_tabs_onActivated_addListener"      : return BG_EVENT_JS_LOG;
    case "bg_event_tabs_onUpdated_addListener"        : return BG_EVENT_JS_LOG;

    case "bg_event_webNavigation_addListener"         : return BG_EVENT_JS_LOG;

    case "bg_event_tabs_onRemoved_addListener"        : return BG_EVENT_JS_LOG;
    case "bg_event_tabs_onReplaced_addListener"       : return BG_EVENT_JS_LOG;

    case "bg_event_declarativeNetRequest_addListener" : return BG_EVENT_JS_LOG;

    case "bg_event_sleep"                             : return BG_EVENT_JS_LOG || log_ACTIVATED();

    }

/*{{{*/
    log("%c"+BG_EVENT_SCRIPT_ID   +"%c log_this_get: missing switch %c"+_caller
        ,lbH+lb2                   ,lbL+lf2                        ,lbR+lf4    );

    return false;
/*}}}*/
};
/*}}}*/
/*}}}*/


// ┌───────────────────────────────────────────────────────────────────────────┐
// │ ADD LISTENERS                                                             │
// └───────────────────────────────────────────────────────────────────────────┘
/*➔ bg_event_addListeners {{{*/
let bg_event_addListeners = function()
{
/*{{{*/
let   caller = "bg_event_addListeners";
let log_this = log_this_get(caller);

let log_more = log_this && LOG_MAP.B_LOG0_MORE;
/*}}}*/
if( log_this) log_js.log_group("%c ADDING LISTENERS "+SAD, lbH+lf3);

if( log_more) chrome.permissions.getAll().then((args) => log_object("BROWSER PERMISSIONS",args.permissions));

    bg_event_tabs_onActivated_addListener();
    bg_event_tabs_onRemoved_addListener();
    bg_event_tabs_onReplaced_addListener();
    bg_event_tabs_onRemoved_addListener();
    bg_event_tabs_onUpdated_addListener();
    bg_header_addListener();
    bg_message_onMessage_addListener();

    bg_event_webNavigation_addListener();
    bg_event_declarativeNetRequest_addListener();

//  if(USE_CHROME_ALARMS) b_onAlarm_addListener();

if( log_this) console.groupEnd();

if( log_this || LOG_MAP.B_LOG0_MORE) log_STORAGE();

    bg_event_onLoad_check_current_tab();
};
/*}}}*/
// ● tab [activated updated replaced removed]
/*_ bg_event_tabs_onActivated_addListener {{{*/
let bg_event_tabs_onActivated_addListener = function()
{
/*{{{*/
let   caller = "bg_event_tabs_onActivated_addListener";
let log_this = log_this_get(caller);
/*}}}*/
    /* .........................SCRIPT_ID..NAMESPACE.....LISTENING TO FUNCTIONALITY......PERMISSION */
    if(!log_permission(BG_EVENT_SCRIPT_ID, chrome.tabs, "Listening to tabs activation", "activeTab", log_this))
        return;

    chrome.tabs.onActivated.addListener( bg_tabs_onActivated );

};
/*}}}*/
/*_ bg_event_tabs_onUpdated_addListener {{{*/
let bg_event_tabs_onUpdated_addListener = function()
{
/*{{{*/
let   caller = "bg_event_tabs_onUpdated_addListener";
let log_this = log_this_get(caller);
/*}}}*/
    /* .........................SCRIPT_ID..NAMESPACE.....LISTENING TO FUNCTIONALITY...PERMISSION */
    if(!log_permission(BG_EVENT_SCRIPT_ID, chrome.tabs, "Listening to tabs updated", "tabs", log_this))
        return;

    chrome.tabs.onUpdated.addListener( bg_tabs_onUpdated );
};
/*}}}*/
/*_ bg_event_tabs_onReplaced_addListener {{{*/
let bg_event_tabs_onReplaced_addListener = function()
{
/*{{{*/
let   caller = "bg_event_tabs_onReplaced_addListener";
let log_this = log_this_get(caller);
/*}}}*/
    /* .........................SCRIPT_ID..NAMESPACE.....LISTENING TO FUNCTIONALITY......PERMISSION */
    if(!log_permission(BG_EVENT_SCRIPT_ID, chrome.tabs, "Listening to tabs activation", "activeTab", log_this))
        return;

    chrome.tabs.onReplaced.addListener( bg_page_onReplaced );
    chrome.tabs.onReplaced.addListener( bg_tabs_onRemoved  );
};
/*}}}*/
/*_ bg_event_tabs_onRemoved_addListener {{{*/
let bg_event_tabs_onRemoved_addListener = function()
{
/*{{{*/
let   caller = "bg_event_tabs_onRemoved_addListener";
let log_this = log_this_get(caller);
/*}}}*/
    /* .........................SCRIPT_ID..NAMESPACE.....LISTENING TO FUNCTIONALITY......PERMISSION */
    if(!log_permission(BG_EVENT_SCRIPT_ID, chrome.tabs, "Listening to tabs activation", "activeTab", log_this))
        return;

    /* .........................SCRIPT_ID..NAMESPACE.....LISTENING TO FUNCTIONALITY...PERMISSION */
    if(!log_permission(BG_EVENT_SCRIPT_ID, chrome.tabs, "Listening to tabs removed", "tabs", log_this))
        return;

    chrome.tabs.onRemoved.addListener( bg_page_onRemoved );
    chrome.tabs.onRemoved.addListener( bg_tabs_onRemoved );
};
/*}}}*/
// ● navigation
/*_ bg_event_webNavigation_addListener {{{*/
let bg_event_webNavigation_addListener = function()
{
/*{{{*/
let   caller = "bg_event_webNavigation_addListener";
let log_this = log_this_get(caller);
/*}}}*/
    /* .........................SCRIPT_ID..NAMESPACE..............LISTENING TO FUNCTIONALITY....PERMISSION */
    if(!log_permission(BG_EVENT_SCRIPT_ID, chrome.webNavigation, "Listening to webNavigation", "webNavigation", log_this))
        return;

    chrome.webNavigation.onCommitted.addListener(function(details) {
        if(details.frameId === 0) // Only listen for top-level frames.
        {
if( log_this) log_object("webNavigation.onCommitted "+details.url, details, lbH+lf5);
        }
    });

};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ ONLOAD                                                                    │
// └───────────────────────────────────────────────────────────────────────────┘
// ● query current tab when extension is installed
/*_ bg_event_onLoad_check_current_tab {{{*/
let bg_event_onLoad_check_current_tab = async function()
{
/*{{{*/
let   caller = "bg_event_onLoad_check_current_tab";
let log_this = log_this_get(caller);

/*}}}*/
    let message
        = {   query   : "url"
            , tabId   : bg_tabs.bg_tabs_get_tabId_last_activated()
            , queryObj: {}
            , caller
        };

    await        bg_tabs_get_url(message.tabId, message);
    let tabId  = bg_tabs_get_tabId_last_activated();
    let url    = bg_tabs_get_tabId_key(tabId, "url");
    /*........*/ bg_settings_get_url_settings(tabId, url);

if( log_this) log("%c"+caller+"%c tabId "+tabId+" %c url "+url
                  ,lbL+lb0    ,lbC+lb0  ,lbR+lb0              );
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ declarativeNetRequest                                     ● manifest.json │
// └───────────────────────────────────────────────────────────────────────────┘
// ● remove CSP Response headers
/*_ bg_event_declarativeNetRequest_addListener {{{*/
let bg_event_declarativeNetRequest_addListener = function()
{
/*{{{*/
let   caller = "bg_event_declarativeNetRequest_addListener";
let log_this = log_this_get(caller);
/*}}}*/
    /*..........................SCRIPT_ID..NAMESPACE......................LISTENING TO FUNCTIONALITY............PERMISSION.*/
    if(!log_permission(BG_EVENT_SCRIPT_ID, chrome.declarativeNetRequest, "Listening to declarativeNetRequest", "declarativeNetRequest", log_this))
        return;

    chrome.declarativeNetRequest.onRuleMatchedDebug.addListener( bg_tabs.bg_tabs_declarativeNetRequest_onRuleMatchedDebug_listener );

};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ UTIL                                                                      │
// └───────────────────────────────────────────────────────────────────────────┘
/*_ bg_event_sleep {{{*/
let bg_event_sleep = async function(delay)
{
/*{{{*/
let   caller = "bg_event_sleep";
let log_this = log_this_get(caller);

if( log_this) log("%c"+SD6+"%c SLEEPING "+delay+"ms %c "+log_js.get_callers_bot(), lbB+lf6, lbH+lf6, lbb+lbH+lb6);
/*}}}*/

    await new Promise(function executor(resolve)
                      {
                          setTimeout(() => resolve((log_this) && log("resolve: sleep "+delay+" DONE") ), delay);
                      });

/*{{{*/
if( log_this) log("bg_event_sleep DONE");
/*}}}*/
};
/*}}}*/

    /*  EXPORT {{{*/
    return { name : "bg_event"
        ,    logging

        ,    bg_event_addListeners
        ,    bg_event_sleep
    };
    //}}}
})();

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ DOC ● Response headers                                                    │
// └───────────────────────────────────────────────────────────────────────────┘
/*{{{
:vnew C:/LOCAL/USR/ivan/VIM/after/syntax/javascript_BAK_BOT_LOG_TOP.vim
:so ~/VIM/_BAK/after/syntax/javascript_BAK_BOT_LOG_TOP.vim

  ┌────────────────────────────────────────────────────────────────────────────┐
  │ ● https://developer.chrome.com/docs/devtools/overrides/#override-headers   │
  │ ● https://github.com/ChromeDevTools/rfcs/discussions/4                     │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ ● ../WORKSPACE/github.com/.headers                                         │
  ├────────────────────────────────────────────────────────────────────────────┤
  │                                                                            │
  │ ● With the new Header Overrides feature in DevTools, you can specify       │
  │   response headers locally.                                                │
  │                                                                            │
  │ ● When Chrome (with DevTools open and header overrides enabled) loads      │
  │   a page for which header overrides are defined,                           │
  │   Chrome behaves as if these overridden HTTP headers are coming            │
  │   from the remote server.                                                  │
  │                                                                            │
  │ ● This allows you to locally experiment with different values              │
  │   for HTTP response headers.                                               │
  └────────────────────────────────────────────────────────────────────────────┘

}}}*/
