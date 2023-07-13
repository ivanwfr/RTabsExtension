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
/* globals  bg_settings               */

/* eslint-enable  no-redeclare        */

const BG_EVENT_SCRIPT_ID  = "bg_event";
const BG_EVENT_SCRIPT_TAG =  BG_EVENT_SCRIPT_ID +" (230713:03h:19)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
let bg_event  = (function() {
"use strict";

// ┌───────────────────────────────────────────────────────────────────────────┐
// │                                                              B_LOG8_STORE │
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
/* └─────────────────────────────┘*/
/* IMPORT {{{*/
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
    , log_permission /* eslint-disable-line no-unused-vars */
;

/*}}}*/
/*_ background_js {{{*/
let B_SCRIPT_ID;
let MANIFEST_VERSION;
let log_ACTIVATED;

/*}}}*/
    //__________ bg_content
//______________ bg_csp
/*_ bg_header {{{*/
let bg_header_addListener;

/*}}}*/
//______________ bg_event
/*_ bg_message {{{*/
let b_runtime_onMessage_addListener;

/*}}}*/
//______________ bg_page
/*_ bg_settings {{{*/
let bg_settings_tabs1_onActivated;
let bg_settings_tabs2_onUpdated;
let bg_settings_tabs3_onRemoved;

/*}}}*/
    //__________ bg_tabs
    //__________ bg_store
/*_ bg_event_import {{{*/
let bg_event_import = function()
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

    log                                 = log_js.log;
    log_permission                      = log_js.log_permission;

    /*}}}*/
    /*_ background_js {{{*/
    MANIFEST_VERSION                      = background_js.MANIFEST_VERSION;

    log_ACTIVATED                         = background_js.log_ACTIVATED;

    /*}}}*/
    //___________ bg_content
    //___________ bg_csp
    //___________ bg_event
    //_ bg_header {{{*/
    bg_header_addListener       = bg_header.bg_header_addListener;

    /*}}}*/
    /*_ bg_message {{{*/
    b_runtime_onMessage_addListener              = bg_message.b_runtime_onMessage_addListener;

    /*}}}*/
    //___________ bg_page
    /*_ bg_settings {{{*/
    bg_settings_tabs1_onActivated           = bg_settings.tabs1_onActivated;
    bg_settings_tabs2_onUpdated             = bg_settings.tabs2_onUpdated;
    bg_settings_tabs3_onRemoved             = bg_settings.tabs3_onRemoved;

    /*}}}*/
    //___________ bg_store
    //___________ bg_tabs
//................._import    log_js    background_js    bg_content    bg_csp    bg_event    bg_header    bg_message    bg_page    bg_settings    bg_store    bg_tabs
log("%c    bg_event_import %c log_js %c background_js %c __________ %c ______ %c "+"●●●●● %c bg_header %c bg_message %c _______ %c bg_settings %c ________ %c _______ "
    ,lbH+lb4              ,lf0      ,lf1             ,lf2          ,lf3      ,lf4+lbH    ,lf5         ,lf6          ,lf7       ,lf8           ,lf9        ,lf0         );
};
/*}}}*/
    setTimeout(bg_event_import,0);
/*}}}*/

/*{{{*/
/* EMBED INTO IPC FOLD OF dom_tools.js */

// NOTE:
// to be duplicated in popup_onMessage_CB
// to be duplicated in dom_tools.js IPC

/*}}}*/

/*➔ bg_event_addListeners {{{*/
let bg_event_addListeners = function()
{
/*{{{*/
let log_this = log_ACTIVATED();
    log_this=true;//FIXME

//  log_more=true;//FIXME
/*}}}*/
if( log_this) log_js.log_group("%cADDING LISTENERS "+SAD, lbH+lf3);

    bg_header_addListener();
    bg_event_onActivated_addListener();
    bg_event_onUpdated_addListener();
    bg_event_onRemoved_addListener();
    b_runtime_onMessage_addListener();

//  if(USE_CHROME_ALARMS) b_onAlarm_addListener();

console.groupEnd();
};
/*}}}*/
/*_ bg_event_onActivated_addListener {{{*/
let bg_event_onActivated_addListener = function()
{
/*{{{*/
let log_this = log_ACTIVATED();
/*}}}*/
    /*....................SCRIPT_ID..NAMESPACE....FUNCTIONALITY...................PERMISSION.*/
    if(!log_permission(B_SCRIPT_ID, chrome.tabs, "Listening to tabs activation", "activeTab", log_this))
        return;

    chrome.tabs.onActivated.addListener( bg_settings_tabs1_onActivated );
};
/*}}}*/
/*_ bg_event_onUpdated_addListener {{{*/
let bg_event_onUpdated_addListener = function()
{
/*{{{*/
let log_this = log_ACTIVATED();
/*}}}*/
    /*....................SCRIPT_ID..NAMESPACE....FUNCTIONALITY................PERMISSION.*/
    if(!log_permission(B_SCRIPT_ID, chrome.tabs, "Listening to tabs updated", "tabs", log_this))
        return;

    chrome.tabs.onUpdated.addListener( bg_settings_tabs2_onUpdated );
};
/*}}}*/
/*_ bg_event_onRemoved_addListener {{{*/
let bg_event_onRemoved_addListener = function()
{
/*{{{*/
let log_this = log_ACTIVATED();
/*}}}*/
    /*....................SCRIPT_ID..NAMESPACE.....FUNCTIONALITY...............PERMISSION.*/
    if(!log_permission(B_SCRIPT_ID, chrome.tabs, "Listening to tabs removed", "tabs", log_this))
        return;

    chrome.tabs.onRemoved.addListener( bg_settings_tabs3_onRemoved );
};
/*}}}*/

/*➔ bg_event_set_last_activated_tabId {{{*/
let            last_activated_tabId;
let bg_event_set_last_activated_tabId = function(tabId )
{
    last_activated_tabId = tabId;
};
/*}}}*/
/*➔ bg_event_get_last_activated_tabId {{{*/
let bg_event_get_last_activated_tabId = function()
{
    return last_activated_tabId;
};

/*}}}*/

/*➔ bg_event_call_later .. B_LOG3_PRESERVE {{{*/
let bg_event_call_later = function(_args)
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

    /*  EXPORT {{{*/
    return { name : "bg_event"

           , bg_event_addListeners
           , bg_event_get_last_activated_tabId
           , bg_event_set_last_activated_tabId
           , bg_event_call_later

    };
    //}}}
})();

