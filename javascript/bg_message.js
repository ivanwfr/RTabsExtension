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
/* exported bg_message                */
/* globals  bg_page                   */
/* globals  bg_settings               */
/* globals  bg_store                  */
/* globals  bg_tabs                   */

/* eslint-enable  no-redeclare        */
const BG_MESSAGE_SCRIPT_ID  = "BG_MESSAGE";
const BG_MESSAGE_SCRIPT_TAG =  BG_MESSAGE_SCRIPT_ID +" (230713:03h:26)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
let bg_message  = (function() {
"use strict";

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
/* eslint-enable no-unused-vars */

let   log
    , log_SYN
    , log_caller
    , log_console_clear
    , log_object
//  , log_permission
    , log_sep_bot
    , log_sep_top
;

/*}}}*/
/*_ background_js {{{*/
let B_SCRIPT_ID;
let LOG_MAP;
let b_is_paused;
let bg_tabs_sendMessage;
let log_ACTIVATED;
let log_STORAGE;
let log_get_caller_tag_FOR_key_val_caller;
let log_sep_bot_FOR_caller_callee;
let log_sep_top_FOR_caller_callee;

/*}}}*/
/*_ bg_content {{{*/
let b_content_scripts_loaded;

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
let bg_event_get_last_activated_tabId;

/*}}}*/
//______________ bg_header
//______________ bg_message
/*_ bg_page {{{*/
let b_POPUP_pageAction;
let b_page1_RELOAD_if_required;

/*}}}*/
/*_ bg_settings {{{*/
let bg_settings_tabs4_query_active_tab_url;

/*}}}*/
/*_ bg_store {{{*/
let bg_store_DEL_url_settings;
let bg_store_GET_url_domain;
let bg_store_GET_url_key;
let bg_store_SET_url_settings;

/*}}}*/
/*_ bg_tabs {{{*/
let bg_tabs_del_tabId_key;
let bg_tabs_get_tabId;
let bg_tabs_get_tabId_key;
let bg_tabs_set_tabId_key_items;
let bg_tabs_set_tabId_key_val;

/*}}}*/
/*_ bg_message_import {{{*/
let bg_message_import = function()
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
    log_SYN                             = log_js.log_SYN;
    log_caller                          = log_js.log_caller;
    log_console_clear                   = log_js.log_console_clear;
    log_object                          = log_js.log_object;
//  log_permission                      = log_js.log_permission;
    log_sep_bot                         = log_js.log_sep_bot;
    log_sep_top                         = log_js.log_sep_top;

    /*}}}*/
    /*_ background_js {{{*/

    B_SCRIPT_ID                           = background_js.B_SCRIPT_ID;
    LOG_MAP                               = background_js.LOG_MAP;
    b_content_scripts_loaded              = background_js.b_content_scripts_loaded;
    b_is_paused                           = background_js.b_is_paused;
    bg_tabs_sendMessage                   = background_js.bg_tabs_sendMessage;
    log_ACTIVATED                         = background_js.log_ACTIVATED;
    log_STORAGE                           = background_js.log_STORAGE;
    log_get_caller_tag_FOR_key_val_caller = background_js.log_get_caller_tag_FOR_key_val_caller;
    log_sep_bot_FOR_caller_callee         = background_js.log_sep_bot_FOR_caller_callee;
    log_sep_top_FOR_caller_callee         = background_js.log_sep_top_FOR_caller_callee;

    /*}}}*/
    /*_ bg_content {{{*/
    b_content_scripts_loaded                = bg_content.b_content_scripts_loaded;

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


    bg_csp_load_filter_from_store    = bg_csp.bg_csp_load_filter_from_store;
    bg_csp_save_filter_to_store      = bg_csp.bg_csp_save_filter_to_store;

    /*}}}*/
    //_ bg_event {{{*/
    bg_event_get_last_activated_tabId = bg_event.bg_event_get_last_activated_tabId;

    /*}}}*/
    //___________ bg_header
    //___________ bg_message
    /*_ bg_page {{{*/
    b_POPUP_pageAction          = bg_page.b_POPUP_pageAction;
    b_page1_RELOAD_if_required  = bg_page.b_page1_RELOAD_if_required;

    /*}}}*/
    /*_ bg_settings {{{*/
    bg_settings_tabs4_query_active_tab_url  = bg_settings.tabs4_query_active_tab_url;

    /*}}}*/
    /*_ bg_store {{{*/
    bg_store_DEL_url_settings = bg_store.bg_store_DEL_url_settings;
    bg_store_GET_url_domain   = bg_store.bg_store_GET_url_domain;
    bg_store_GET_url_key      = bg_store.bg_store_GET_url_key;
    bg_store_SET_url_settings = bg_store.bg_store_SET_url_settings;

    /*}}}*/
    /*_ bg_tabs {{{*/
    bg_tabs_del_tabId_key            = bg_tabs.bg_tabs_del_tabId_key;
    bg_tabs_get_tabId                = bg_tabs.bg_tabs_get_tabId;
    bg_tabs_get_tabId_key            = bg_tabs.bg_tabs_get_tabId_key;
    bg_tabs_set_tabId_key_items      = bg_tabs.bg_tabs_set_tabId_key_items;
    bg_tabs_set_tabId_key_val        = bg_tabs.bg_tabs_set_tabId_key_val;

    /*}}}*/
//................._import    log_js    background_js    bg_content    bg_csp    bg_event    bg_header    bg_message    bg_page    bg_settings    bg_store    bg_tabs
log("%c  bg_message_import %c log_js %c background_js %c bg_content %c bg_csp %c bg_event %c _________ %c "+"●●●●●●● %c bg_page %c bg_settings %c bg_store %c bg_tabs "
    ,lbH+lb6              ,lf0      ,lf1             ,lf2          ,lf3      ,lf4        ,lf5         ,lf6+lbH      ,lf7       ,lf8           ,lf9        ,lf0         );
};
/*}}}*/
    setTimeout(bg_message_import,0);
/*}}}*/

/*➔ b_runtime_onMessage_addListener {{{*/
let b_runtime_onMessage_addListener = function()
{
/*{{{*/
//t log_this = log_ACTIVATED();

/*}}}*/

    /*....................SCRIPT_ID..NAMESPACE.......FUNCTIONALITY......................PERMISSION.*/
//  if(!log_permission(B_SCRIPT_ID, chrome.runtime, "Listening to Extension messages", "runtime", log_this) )
//      return;

    chrome.runtime.onMessage.addListener( b_runtime_onMessage_CB );
};
/*}}}*/
/*_ b_runtime_onMessage_CB .. B_LOG1_MESSAGE {{{*/
/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ [response_handler] becomes invalid when the event listener returns     │ */
/* │ unless you return true to indicate you wish                            │ */
/* │ to send a response asynchronously                                      │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
let b_runtime_onMessage_CB = /*async*/ function(message,sender,response_handler=null)
{
if( b_is_paused() ) { log("%c"+SYMBOL_CONSTRUCTION+" PAUSED in "+caller, lbb+lbH+lf1); return false; } // whether to wait for an async response .. or not
/*{{{*/
let   caller = "b_runtime_onMessage_CB";
let log_this = LOG_MAP.B_LOG1_MESSAGE && !message.set_log_tag;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

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
        log_console_clear(message.preserve || LOG_MAP.B_LOG3_PRESERVE);

        return false; // whether to wait for an async response .. or not
    }
    /*}}}*/
/* LOG {{{*/

    let action_tags
        = ((typeof message.caller        != "undefined") ? (" → "      +message.caller       ) : "")
        + ((typeof message.set_log_tag   != "undefined") ? (" → "      +message.set_log_tag  ) : "")
        + ((typeof message.set_log_state != "undefined") ? (" → "      +message.set_log_state) : "")
        + ((typeof message.cmd           != "undefined") ? (" → "      +message.cmd          ) : "")
        + ((typeof message.query         != "undefined") ? (" → "      +message.query        ) : "")
        + ((typeof message.start         != "undefined") ? (" → start "+message.start        ) : "")
        + ((typeof message.csp_filter    != "undefined") ? (" . "      +message.csp_filter   ) : "")
    ;

if( log_ACTIVATED() ) log_console_clear(LOG_MAP.B_LOG3_PRESERVE, action_tags);
if( log_more) log_sep_top(caller+" .. "+action_tags, "LOG8_TAG");

if( log_this) log_object(  caller+" start: "+message.start
                         , {  "---------- MESSAGES -------------------" : "---------------------------------------"
                             ,...message
                             ,"---------- SENDER ---------------------" : "---------------------------------------"
                             ,...sender
                             ,"---------- RESPONSE -------------------" : "---------------------------------------"
                             , response_handler
                         }
                         , (message.start ? lf5 : lf0), !log_more); // collapsed
/*}}}*/
try {
    /*  [csp_filter] {{{*/
    if(   message.caller
       && message.caller.startsWith("options_js")
       && (typeof message.csp_filter != "undefined")
    ) {
if( log_this) log("%c"+SD1    +"%c b_runtime_onMessage_CB_options_js_csp_filter(message, response_handler)"
                  ,lbb+lbH+lb1 ,lf4);

        setTimeout(b_runtime_onMessage_CB_options_js_csp_filter, 0, message, response_handler);
    }
    /*}}}*/
    /* [set_log_map] {{{*/
    else if( typeof message.set_log_tag    != "undefined")
    {
if( log_this) log("%c"+SD2    +"%c SET %c LOG_MAP %c "+message.set_log_tag
                  ,lbb+lbH+lb2 ,lbL+lf9,lbR+lf5  ,lf4                     );

        setTimeout(b_runtime_onMessage_CB_set_log_map, 0, message, response_handler);
    }
    /*}}}*/
    /* [query] {{{*/
    else if( typeof message.query          != "undefined")
    {
if( log_this) log("%c"+SD3    +"%c calling b_runtime_onMessage_CB_query"
                  ,lbb+lbH+lb3 ,lf4                                     );

        setTimeout(b_runtime_onMessage_CB_query, 0, message, response_handler);

    }
    /*}}}*/
//    /* [RUN_script] {{{*/
//    else if(   (message.caller == "b_page2_FETCH_RUN_script")
//            || (message.caller == "b_page1_START_RUN_script")
//    ) {
//if( log_more) log("13 (V3) ➔ FETCH: b_runtime_onMessage_CB → b_page4_FETCH_CB");
//
//        setTimeout(b_page4_FETCH_CB, 0, message.tabId, [ message ]);
//    }
//    /*}}}*/
    /* [b_runtime_onMessage_CB_tab] {{{*/
    else {
if( log_this) log("%c"+SD4    +"%c calling b_runtime_onMessage_CB_tab"
                  ,lbb+lbH+lb4 ,lf4);

        setTimeout(b_runtime_onMessage_CB_tab,0,message, response_handler);
    }
    /*}}}*/
if(log_this) log("%c"+SD5     +"%c "+caller+" ...return "+(response_handler != null)+  " .. (response_handler != null)"
                 ,lbb+lbH+lb5  ,lf4);

    return (response_handler != null); // whether to wait for an async response .. or not
}
finally { if(log_more) log_sep_bot(caller+" .. "+action_tags, "LOG8_TAG"); if( log_ACTIVATED() ) log_STORAGE(); }
};
/*}}}*/
/*➔ b_runtime_onMessage_CB_tab .. B_LOG1_MESSAGE {{{*/
/*{{{*/
const B_TABS_ON_MESSAGE           = "TABS ON MESSAGE";

/*}}}*/
let b_runtime_onMessage_CB_tab = async function(message,response_handler=null)
{
/*{{{*/
let   caller = "b_runtime_onMessage_CB_tab";
let log_this = LOG_MAP.B_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

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
            ?  await b_runtime_onMessage_CB_TAB_stop (message.tabId)
            :  await b_runtime_onMessage_CB_TAB_start(message.tabId)
        ;
    }
    /*}}}*/
    /* [cancelreq] {{{*/
    let cancelreq_changed  = false;
    if(typeof message.cancelreq != "undefined")
    {
        let cancelreq = bg_tabs_get_tabId_key(message.tabId, "cancelreq");
        if(cancelreq != message.cancelreq) {
if(log_more) log_SYN("CANCEL HTTP REQUESTS "+ message.cancelreq);

            cancelreq_changed = true;
        }
     }
    /*}}}*/
    /* [csp_filter] REJECT REMOVE ACCEPT {{{*/
    let csp_filter_changed = false;
    if(typeof message.csp_filter != "undefined")
    {
        b_runtime_onMessage_CB_TAB_csp_filter(message, response_handler);

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
        if(start) await b_runtime_onMessage_CB_TAB_start( message.tabId );
        else      await b_runtime_onMessage_CB_TAB_stop ( message.tabId );

        /*}}}*/
    }
    /*}}}*/
    if( response_handler )
    {
        if( message.caller )
            message.caller = "response to a call from ["+message.caller+"]";

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
finally { if(log_more) log_sep_bot(caller); }
};
/*}}}*/
/*➔ b_runtime_onMessage_CB_TAB_start .. B_LOG1_MESSAGE {{{*/
let b_runtime_onMessage_CB_TAB_start = async function(tabId)
{
/*LOG{{{*/
let   caller = "b_runtime_onMessage_CB_TAB_start";
let log_this = LOG_MAP.B_LOG1_MESSAGE || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG8_STORE;
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
if( log_more) log_sep_top_FOR_caller_callee(caller, "b_content_scripts_loaded");
    /*......................................*/ await b_content_scripts_loaded(tabId);
if( log_more) log_sep_bot_FOR_caller_callee(caller, "b_content_scripts_loaded");

    let result = await b_page1_RELOAD_if_required(tabId);

    /*}}}*/
    /* OR .. SEND TAB_CMD [t_load  ] .. IF [content_scripts] LOADED {{{*/
    if(!result)
    {

        let message     = { cmd: "t_load" };
//      let action_tags = JSON.stringify(message);
        let action_tags = log_js.log_json_prettify(message);
if( log_more) log_sep_top_FOR_caller_callee(caller, "bg_tabs_sendMessage: "+action_tags);
        result = await                 bg_tabs_sendMessage(tabId, message, caller );
if( log_more) log_sep_bot_FOR_caller_callee(caller, "bg_tabs_sendMessage: "+action_tags);
    /*}}}*/
    b_POPUP_pageAction(tabId, caller); /* update popup */

    }

if( log_this) log_object("...return result", result);
    return result;
};
/*}}}*/
/*➔ b_runtime_onMessage_CB_TAB_stop  .. B_LOG1_MESSAGE {{{*/
let b_runtime_onMessage_CB_TAB_stop  = async function(tabId)
{
/*LOG{{{*/
let   caller = "b_runtime_onMessage_CB_TAB_stop";
let log_this = LOG_MAP.B_LOG1_MESSAGE || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG8_STORE;
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
if( log_more) log_sep_top_FOR_caller_callee(caller, "b_content_scripts_loaded");
    /*......................................*/ await b_content_scripts_loaded(tabId);
if( log_more) log_sep_bot_FOR_caller_callee(caller, "b_content_scripts_loaded");

        let message     = { cmd: "t_unload" };
//      let action_tags = JSON.stringify(message);
        let action_tags = log_js.log_json_prettify(message);
if( log_more) log_sep_top_FOR_caller_callee(caller, "bg_tabs_sendMessage: "+action_tags);
    let result = await                 bg_tabs_sendMessage(tabId, message, caller );
if( log_more) log_sep_bot_FOR_caller_callee(caller, "bg_tabs_sendMessage: "+action_tags);
    /*}}}*/
    b_POPUP_pageAction(tabId, caller); /* update popup */

if( log_this) log_object("...return result", result);
    return result;
};
/*}}}*/
/*➔ b_runtime_onMessage_CB_TAB_csp_filter .. B_LOG1_MESSAGE {{{*/
let b_runtime_onMessage_CB_TAB_csp_filter = function(message)
{
/*{{{*/
let   caller = "b_runtime_onMessage_CB_TAB_csp_filter";
let log_this = LOG_MAP.B_LOG1_MESSAGE;

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
        b_POPUP_pageAction(message.tabId, JSON.stringify(message)); /* update popup */
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
/*➔ b_runtime_onMessage_CB_options_js_csp_filter .. B_LOG1_MESSAGE {{{*/
let b_runtime_onMessage_CB_options_js_csp_filter = function(message, response_handler=null)
{
/*{{{*/
let   caller = "b_runtime_onMessage_CB_options_js_csp_filter";
let log_this = LOG_MAP.B_LOG1_MESSAGE;

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
/*➔ b_runtime_onMessage_CB_query .. B_LOG1_MESSAGE {{{*/
/*{{{*/
const B_TABS_ON_MESSAGE_QUERY     = "TABS ON MESSAGE QUERY: ";

/*}}}*/
let b_runtime_onMessage_CB_query = async function(message, response_handler=null)
{
/*{{{*/
let   caller = "b_runtime_onMessage_CB_query";
let log_this = LOG_MAP.B_LOG1_MESSAGE;

if( log_this) log("%c "+caller+"%c message.query %c"+message.query
                  ,lbL+lf1    ,lbC+lf1         ,lbR+lf1          );
/*}}}*/
    /* NO [tabId] - LOG2_TAG - [NO lAST ACTIVATED TAB] .. f(bg_event_get_last_activated_tabId) {{{*/
    let tabId = bg_event_get_last_activated_tabId(caller);
    if(!tabId )
    {
        if(!message.status)
            message.status = B_TABS_ON_MESSAGE_QUERY+"NO LAST ACTIVATED";

log("%c"+SD1+    "%c NO tabId %c"+message.status
    ,lbb+lbH+lf1 ,lbL+lb2    ,lbR+lf2           );
console.trace();

        if( response_handler )
            b_runtime_onMessage_CB_reply(tabId, message, response_handler);

        return "LOG2_TAG";
    }
    /*}}}*/
    /* NO [url] YET - LOG3_TAG - NEED TAB URL {{{*/
    let url = bg_tabs_get_tabId_key(tabId, "url");
    if(!url )
    {
if( log_this) log("%c"+SD2+   "%c NEED TAB URL CALLING %c bg_settings_tabs4_query_active_tab_url"
                  ,lbB+lbH+lb2,lf3                    ,lf3                                           );

        await bg_settings_tabs4_query_active_tab_url( tabId
                                                        , { query: "QUERY TAB URL" , caller: log_js.get_callers_bot() }
                                                        , response_handler
                                                      );

        return "LOG3_TAG";
    }
    /*}}}*/
    /* OK [url] LOG4_TAG - HAVE AN URL FOR A REPLY TO POPUP QUERY ANSWER {{{*/
    /* NOTE: popup_js has no clue about its own tabId .. short of an async call to getCurrent */
    if( url )
    {
        if(!message.status)
            message.status = B_TABS_ON_MESSAGE_QUERY+"HAVE URL";

if( log_this) log("%c"+SD3+   "%c"+message.status
                  ,lbb+lbH+lb3,lf4               );

        if( response_handler )
            b_runtime_onMessage_CB_reply(tabId, message, response_handler);

        return "LOG4_TAG";
    }
    /*}}}*/
    /* DEFAULT [TAB SYNC] .. QUERY ANSWERED {{{*/
    else {
        if(!message.status)
            message.status = B_TABS_ON_MESSAGE_QUERY+"UNEXPECTED QUERY";

if( log_this) log("%c "+caller+"%c"+SD4+   "%c"+message.status+": "+message.query
                  ,lbb+lbH+lb2,lbb+lbH+lb4,lbb+lf2                              );

        if( response_handler )
            b_runtime_onMessage_CB_reply(tabId, message, response_handler);

        return "LOG8_TAG";
    }
    /*}}}*/
};
/*}}}*/
/*➔ b_runtime_onMessage_CB_reply {{{*/
let b_runtime_onMessage_CB_reply = function(tabId,message,response_handler)
{
/*{{{*/
let   caller = "b_runtime_onMessage_CB_reply";
let log_this = LOG_MAP.B_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log_sep_top(caller+" "+message.query);
if( log_this)   log("%c "+caller+"%c message.query %c"+message.query
                    ,lbL+lf9     ,lbC+lf9         ,lbR+lf9          );
/*}}}*/

    // ATTRIBUTES {{{
    let            url =  bg_tabs_get_tabId_key(tabId, "url");
    let tab_attributes = { tabId , url };

    //}}}
    // SETTINGS {{{
    let       start    =  bg_tabs_get_tabId_key(tabId, "start"         )
        ||              !!bg_tabs_get_tabId_key(tabId, "tools_deployed");/*if(     start)*/tab_attributes.     start =      start;
    let  csp_filter    =  bg_tabs_get_tabId_key(tabId, "csp_filter"    );  if(csp_filter)  tab_attributes.csp_filter = csp_filter;
    let   cancelreq    =  bg_tabs_get_tabId_key(tabId, "cancelreq"     );  if( cancelreq)  tab_attributes. cancelreq =  cancelreq;
    let       theme    =  bg_tabs_get_tabId_key(tabId, "theme"         );  if(     theme)  tab_attributes.     theme =      theme;
    let    typeface    =  bg_tabs_get_tabId_key(tabId, "typeface"      );  if(  typeface)  tab_attributes.  typeface =   typeface;
    let       color    =  bg_tabs_get_tabId_key(tabId, "color"         );  if(     color)  tab_attributes.     color =      color;

    let   tab_items    =  bg_tabs_get_tabId    (tabId);

    //}}}
try{
    // [response] {{{
    let response
        = {   MESSAGE__________________________ : "▼" , ...message
            , ATTRIBUTES_______________________ : "▼" , ...tab_attributes
            , ITEMS____________________________ : "▼" , ...tab_items
            , HANDLER__________________________ : "▼" ,    handler : B_SCRIPT_ID+" → "+caller+"(query "+message.query+")"
        };

    if( response.caller )
        response.caller = "response to a call from ["+response.caller+"]";

if( log_this) log_object("SENDING A REPLY TO "+message.caller, response, lf9, !log_more); // collapsed

    response_handler(     response );
    //}}}
} catch(error) {
    log(caller+": response_handler "+error.response); // response_handler is not a function...
    console.dir(  response_handler );
}
if( log_more) log_sep_bot(caller+" "+message.query);
};
/*}}}*/
/*➔ b_runtime_onMessage_CB_set_log_map {{{*/
let b_runtime_onMessage_CB_set_log_map = function(message, response_handler=null)
{
    /* [message.set_log_tag] .. [LOG_MAP] {{{*/
    if( message.set_log_tag)
    {
        switch(message.set_log_tag)
        {
        case "B_LOG1_MESSAGE"   : LOG_MAP.B_LOG1_MESSAGE    = message.set_log_state; break;
        case "B_LOG2_ERROR"     : LOG_MAP.B_LOG2_ERROR      = message.set_log_state; break;
        case "B_LOG3_PRESERVE"  : LOG_MAP.B_LOG3_PRESERVE   = message.set_log_state; break;
        case "B_LOG4_CSP"       : LOG_MAP.B_LOG4_CSP        = message.set_log_state; break;
        case "B_LOG5_ONREQUEST" : LOG_MAP.B_LOG5_ONREQUEST  = message.set_log_state; break;
        case "B_LOG6_ONHEADER"  : LOG_MAP.B_LOG6_ONHEADER   = message.set_log_state; break;
        case "B_LOG7_TABS"      : LOG_MAP.B_LOG7_TABS       = message.set_log_state; break;
        case "B_LOG8_STORE"     : LOG_MAP.B_LOG8_STORE      = message.set_log_state; break;
        case "B_LOG9_STAGE"     : LOG_MAP.B_LOG9_STAGE      = message.set_log_state; break;
        case "B_LOG0_MORE"      : LOG_MAP.B_LOG0_MORE       = message.set_log_state; break;
        default                 : return "LOG8_TAG";
        }

        /* REPLY WITH HANDLING CALLEE RESPONSE */
        let        just_set_error = (message.set_log_tag == "B_LOG2_ERROR") && LOG_MAP.B_LOG2_ERROR;
        let                 state = log_ACTIVATED() || just_set_error;
        if( LOG_MAP.B_LOG2_ERROR != state)
            LOG_MAP.B_LOG2_ERROR  = state;

        /* B_LOG2_ERROR may have changed .. sync with caller */
        response_handler({ B_LOG2_ERROR: LOG_MAP.B_LOG2_ERROR });

        return "LOG9_TAG";
    }
    /*}}}*/
    return "LOG0_TAG";
};
/*}}}*/

    /*➔ EXPORT {{{*/
    return {  name : "bg_message"
        , b_runtime_onMessage_addListener
        , b_runtime_onMessage_CB
        , b_runtime_onMessage_CB_tab
        , b_runtime_onMessage_CB_TAB_start
        , b_runtime_onMessage_CB_TAB_stop
        , b_runtime_onMessage_CB_TAB_csp_filter
        , b_runtime_onMessage_CB_options_js_csp_filter
        , b_runtime_onMessage_CB_query
        , b_runtime_onMessage_CB_reply
        , b_runtime_onMessage_CB_set_log_map
    };
    /*}}}*/
}());
