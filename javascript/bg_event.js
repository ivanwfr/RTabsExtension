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

/* globals  worker_js                 */
/* globals  log_js                    */
/* globals  background_js             */
/* exported bg_event                  */
/* globals  bg_header                 */
/* globals  bg_message                */
/* globals  bg_page                   */
/* globals  bg_settings               */
/* globals  bg_store                  */

/* eslint-enable  no-redeclare        */

const BG_EVENT_SCRIPT_ID  = "bg_event";
const BG_EVENT_SCRIPT_TAG =  BG_EVENT_SCRIPT_ID +" (230830:19h:36)"; /* eslint-disable-line no-unused-vars */
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

/*}}}*/
/*_ bg_page {{{*/
let bg_page1_UNLOAD_TAB;

/*}}}*/
/*_ bg_settings {{{*/
let bg_settings_tabs1_onActivated;
let bg_settings_tabs2_onUpdated;
let bg_settings_tabs3_onRemoved;

/*}}}*/
//_______________ bg_tabs
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

    /*}}}*/
    modules.push( bg_page       ); /*{{{*/
    bg_page1_UNLOAD_TAB             = bg_page.bg_page1_UNLOAD_TAB;                  li("bg_page","bg_page1_UNLOAD_TAB",bg_page1_UNLOAD_TAB);

    /*}}}*/
    modules.push( bg_settings   ); /*{{{*/
    bg_settings_tabs1_onActivated   = bg_settings.bg_settings_tabs1_onActivated;    li("bg_settings","bg_settings_tabs1_onActivated",bg_settings_tabs1_onActivated);
    bg_settings_tabs2_onUpdated     = bg_settings.bg_settings_tabs2_onUpdated;      li("bg_settings","bg_settings_tabs2_onUpdated",bg_settings_tabs2_onUpdated);
    bg_settings_tabs3_onRemoved     = bg_settings.bg_settings_tabs3_onRemoved;      li("bg_settings","bg_settings_tabs3_onRemoved",bg_settings_tabs3_onRemoved);

    /*}}}*/
    modules.push( bg_store      ); /*{{{*/
    bg_store_SAVE_items             = bg_store.bg_store_SAVE_items;                 li("bg_store","bg_store_SAVE_items",bg_store_SAVE_items);

    /*}}}*/
    //_______________________ bg_tabs
    log_js.log_import(bg_event     , modules);
};
/*}}}*/
    setTimeout(_import,0);
/*}}}*/
/* LOGGING {{{*/
let BG_EVENT_JS_LOG  = false;
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

    case "bg_event_addListeners"                      : return BG_EVENT_JS_LOG || worker_js.logging();
    case "bg_event_declarativeNetRequest_addListener" : return BG_EVENT_JS_LOG || worker_js.logging();
    case "bg_event_onActivated_addListener"           : return BG_EVENT_JS_LOG || worker_js.logging();
    case "bg_event_onBeforeunload_addListener"        : return BG_EVENT_JS_LOG || log_ACTIVATED();
    case "bg_event_onRemoved_addListener"             : return BG_EVENT_JS_LOG || worker_js.logging();
    case "bg_event_onUpdated_addListener"             : return BG_EVENT_JS_LOG || worker_js.logging();
    case "bg_event_webNavigation_addListener"         : return BG_EVENT_JS_LOG || worker_js.logging();

    case "bg_event_onUpdated_declarativeNetRequest"   : return BG_EVENT_JS_LOG;// add specific LOG for declarativeNetRequest //FIXME
    case "bg_event_check_CSP_Matched_rules"           : return BG_EVENT_JS_LOG;// add specific LOG for declarativeNetRequest //FIXME
    case "bg_event_check_CSP_rulesMatchedInfo"        : return BG_EVENT_JS_LOG;// add specific LOG for declarativeNetRequest //FIXME
    case "bg_event_check_rules_CSP"                   : return BG_EVENT_JS_LOG;// add specific LOG for declarativeNetRequest //FIXME
    }

/*{{{*/
    log("%c"+BG_EVENT_SCRIPT_ID   +"%c log_this_get: missing switch %c"+_caller
        ,lbH+lb2                   ,lbL+lf2                        ,lbR+lf4    );

    return false;
/*}}}*/
};
/*}}}*/
/*}}}*/
/*{{{*/
/* EMBED INTO IPC FOLD OF dom_tools.js */

// NOTE:
// to be duplicated in popup_onMessage_CB
// to be duplicated in dom_tools.js IPC

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

    bg_event_onActivated_addListener();
    bg_event_onBeforeunload_addListener();
    bg_event_onRemoved_addListener();
    bg_event_onUpdated_addListener();
    bg_header_addListener();
    bg_message_onMessage_addListener();

    bg_event_webNavigation_addListener();
    bg_event_declarativeNetRequest_addListener();

//  if(USE_CHROME_ALARMS) b_onAlarm_addListener();

if( log_this) console.groupEnd();

if( log_this || log_ACTIVATED() || LOG_MAP.B_LOG0_MORE) log_STORAGE();
};
/*}}}*/
/*_ bg_event_onActivated_addListener {{{*/
let bg_event_onActivated_addListener = function()
{
/*{{{*/
let   caller = "bg_event_onActivated_addListener";
let log_this = log_this_get(caller);
/*}}}*/
    /* .........................SCRIPT_ID..NAMESPACE.....LISTENING TO FUNCTIONALITY......PERMISSION */
    if(!log_permission(BG_EVENT_SCRIPT_ID, chrome.tabs, "Listening to tabs activation", "activeTab", log_this))
        return;

    chrome.tabs.onActivated.addListener( bg_settings_tabs1_onActivated );
};
/*}}}*/
/*_ bg_event_onBeforeunload_addListener {{{*/
let bg_event_onBeforeunload_addListener = function()
{
/*{{{*/
let   caller = "bg_event_onBeforeunload_addListener";
let log_this = log_this_get(caller);
/*}}}*/
    /* .........................SCRIPT_ID..NAMESPACE.....LISTENING TO FUNCTIONALITY......PERMISSION */
    if(!log_permission(BG_EVENT_SCRIPT_ID, chrome.tabs, "Listening to tabs activation", "activeTab", log_this))
        return;

  //chrome.tabs.onBeforeunload.addListener( bg_page1_UNLOAD_TAB );
    chrome.tabs.onRemoved     .addListener( bg_page1_UNLOAD_TAB );
    chrome.tabs.onReplaced    .addListener( bg_page1_UNLOAD_TAB );
};
/*}}}*/
/*_ bg_event_onRemoved_addListener {{{*/
let bg_event_onRemoved_addListener = function()
{
/*{{{*/
let   caller = "bg_event_onRemoved_addListener";
let log_this = log_this_get(caller);
/*}}}*/
    /* .........................SCRIPT_ID..NAMESPACE.....LISTENING TO FUNCTIONALITY...PERMISSION */
    if(!log_permission(BG_EVENT_SCRIPT_ID, chrome.tabs, "Listening to tabs removed", "tabs", log_this))
        return;

    chrome.tabs.onRemoved.addListener( bg_settings_tabs3_onRemoved );
};
/*}}}*/
/*_ bg_event_onUpdated_addListener {{{*/
let bg_event_onUpdated_addListener = function()
{
/*{{{*/
let   caller = "bg_event_onUpdated_addListener";
let log_this = log_this_get(caller);
/*}}}*/
    /* .........................SCRIPT_ID..NAMESPACE.....LISTENING TO FUNCTIONALITY...PERMISSION */
    if(!log_permission(BG_EVENT_SCRIPT_ID, chrome.tabs, "Listening to tabs updated", "tabs", log_this))
        return;

    chrome.tabs.onUpdated.addListener( bg_settings_tabs2_onUpdated );
};
/*}}}*/
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
if(BG_EVENT_JS_LOG) log_object("onCommitted", details);
        }
    });

};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ declarativeNetRequest                                     ● manifest.json │
// └───────────────────────────────────────────────────────────────────────────┘
const CONTENT_SECURITY_POLICY = "content-security-policy";
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

    chrome.declarativeNetRequest.onRuleMatchedDebug.addListener(function(details) {
if(BG_EVENT_JS_LOG) log_object("onRuleMatchedDebug", details);
    });

};
/*}}}*/
/*_ bg_event_onUpdated_declarativeNetRequest {{{*///FIXME
let bg_event_onUpdated_declarativeNetRequest = async function(tabId,_caller)
{
/*{{{*/
let   caller = "bg_event_onUpdated_declarativeNetRequest";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_this) log(caller);
/*}}}*/
//FIXME
if(BG_EVENT_JS_LOG) log(_caller);
/*{{{
    let      enabledRulesets = await chrome.declarativeNetRequest.getEnabledRulesets();
console.log("enabledRulesets", enabledRulesets );
}}}*/

    let      matchedRules = await chrome.declarativeNetRequest.getMatchedRules({tabId});
/*{{{
console.log("matchedRules"   , matchedRules    );
}}}*/

    let matched_array = matchedRules.rulesMatchedInfo;
/*{{{*/
if(BG_EVENT_JS_LOG) {
    for(let i=0;  i < matched_array.length;++i) {
        let matched = matched_array[i];
        log_object("matched["+i+"]", matched);
    }
}
/*}}}*/

if(log_more) {
    bg_event_check_CSP_Matched_rules   ( matched_array                  );
    bg_event_check_CSP_rulesMatchedInfo( matched_array.rulesMatchedInfo );
    bg_event_check_rules_CSP           ( matched_array                  );
}

};
/*}}}*/
/*_ bg_event_check_CSP_Matched_rules {{{*/
let bg_event_check_CSP_Matched_rules = function(matched_array)
{
try {
    matched_array.forEach((rule) => {
        if(   rule.action.type === "modifyHeaders"
              && rule.action.responseHeaders.some((header) => (header.header.toLowerCase() == CONTENT_SECURITY_POLICY))
          )
            console.log("Matched rule:", rule);
    });
} catch(ex) { console.warn(ex.message); }
};
/*}}}*/
/*_ bg_event_check_CSP_rulesMatchedInfo {{{*/
let bg_event_check_CSP_rulesMatchedInfo = function(rulesMatchedInfo)
{
try {
    rulesMatchedInfo.forEach((ruleInfo ) => {
        let rule = ruleInfo.rule;
        if( rule.actions.some((action) => action.type === "modifyHeaders"
                              &&          action.responseHeaders.some((header) => header.header.toLowerCase() == CONTENT_SECURITY_POLICY))
          )
            console.log("Matched rule:", rule);
    });
} catch(ex) { console.warn(ex.message); }
};
/*}}}*/
/*_ bg_event_check_rules_CSP {{{*/
let bg_event_check_rules_CSP = function(matched_array)
{
    try {
        matched_array.forEach((ruleInfo) => {
            let   rule = ruleInfo.rule;
            if(   rule.action.type === "modifyHeaders"
               && rule.action.responseHeaders.some((header) => header.header.toLowerCase() == CONTENT_SECURITY_POLICY)
              )
                console.log("Matched rule:", rule);
        });
    } catch(ex) { console.warn(ex.message); }
};
/*}}}*/

    /*  EXPORT {{{*/
    return { name : "bg_event"
        ,            bg_event_addListeners
        ,            bg_event_onUpdated_declarativeNetRequest
        ,            logging
    };
    //}}}
})();

/* //FIXME
:vnew C:/LOCAL/USR/ivan/VIM/after/syntax/javascript_BAK_BOT_LOG_TOP.vim
:so ~/VIM/after/syntax/javascript_BAK_BOT_LOG_TOP.vim


*/
