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
/* globals  bg_message                */
/* globals  bg_page                   */
/* globals  bg_settings               */
/* globals  bg_store                  */
/* exported bg_tabs                   */

/* eslint-enable  no-redeclare        */

const BG_TABS_SCRIPT_ID  = "bg_tabs";
const BG_TABS_SCRIPT_TAG =  BG_TABS_SCRIPT_ID +" (231025:21h:44)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
// ┌───────────────────────────────────────────────────────────────────────────┐
// │ TABS                                                          B_LOG7_TABS │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_event.js
:e javascript/bg_header.js
:e javascript/bg_message.js
:e javascript/bg_page.js        " DEBUG_OPERA
:e javascript/bg_settings.js
:e javascript/bg_store.js
"● javascript/bg_tabs.js        " DEBUG_OPERA
:e javascript/options.js
:e javascript/popup.js
:e javascript/worker.js
/* └─────────────────────────────┘*/
let bg_tabs  = (function() {
"use strict";
let BG_TABS_JS_LOG  = false;
const DEBUG_OPERA = false;
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
/* eslint-enable no-unused-vars */

let   ellipsis
    , get_callers
    , li
    , log
    , log_caller
    , log_console_clear
    , log_json
    , log_json_prettify
    , log_object
    , log_sep_bot
    , log_sep_top
    , mPadEnd
    , mPadStart
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
let log_TAB_HANDLERS_CALLS;
let log_get_caller_tag_FOR_key_val_caller;
let log_sep_bot_FOR_caller_callee;
let log_sep_top_FOR_caller_callee;

/*}}}*/
//_______________ bg_content
//_______________ bg_csp
//_______________ bg_event
//_______________ bg_header
/*_ bg_message {{{*/
let bg_message_onMessage_CB_reply;
let bg_message_tabs_sendMessage;

/*}}}*/
/*_ bg_page {{{*/
let bg_page_POPUP_pageAction;

/*}}}*/
/*_ bg_settings {{{*/
let bg_settings_get_url_settings;
let bg_settings_is_a_supported_URL;

/*}}}*/
/*_ bg_store {{{*/
let bg_store_GET_url_domain;
let bg_store_GET_url_key;
let bg_store_SET_url_settings;
let bg_store_SAVE_items;

/*}}}*/
//_______________ bg_tabs
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
    ellipsis          = log_js.ellipsis;            li("log_js","ellipsis",ellipsis);
    get_callers       = log_js.get_callers;         li("log_js","get_callers",get_callers);
    log               = log_js.log;                 li("log_js","log",log);
    log_caller        = log_js.log_caller;          li("log_js", "log_caller", log_caller);
    log_console_clear = log_js.log_console_clear;   li("log_js", "log_console_clear", log_console_clear);
    log_json          = log_js.log_json;            li("log_js","log_json",log_json);
    log_json_prettify = log_js.log_json_prettify;   li("log_js","log_json_prettify",log_json_prettify);
    log_object        = log_js.log_object;          li("log_js","log_object",log_object);
    log_sep_bot       = log_js.log_sep_bot;         li("log_js","log_sep_bot",log_sep_bot);
    log_sep_top       = log_js.log_sep_top;         li("log_js","log_sep_top",log_sep_top);
    mPadEnd           = log_js.mPadEnd;             li("log_js","mPadEnd",mPadEnd);
    mPadStart         = log_js.mPadStart;           li("log_js","mPadStart",mPadStart);

    /*}}}*/
    modules.push( background_js ); /*{{{*/
    B_SCRIPT_ID                           = background_js.B_SCRIPT_ID;                           li("background_js","B_SCRIPT_ID",B_SCRIPT_ID);
    LOG_MAP                               = background_js.LOG_MAP;                               li("background_js","LOG_MAP",LOG_MAP);
    MANIFEST_VERSION                      = background_js.MANIFEST_VERSION;                      li("background_js","MANIFEST_VERSION",MANIFEST_VERSION);

    b_is_paused                           = background_js.b_is_paused;                           li("background_js","b_is_paused",b_is_paused);
    log_ACTIVATED                         = background_js.log_ACTIVATED;                         li("background_js","log_ACTIVATED",log_ACTIVATED);
    log_IGNORING                          = background_js.log_IGNORING;                          li("background_js","log_IGNORING",log_IGNORING);
    log_STORAGE                           = background_js.log_STORAGE;                           li("background_js","log_STORAGE",log_STORAGE);
    log_TAB_HANDLERS_CALLS                = background_js.log_TAB_HANDLERS_CALLS;                li("background_js","log_TAB_HANDLERS_CALLS",log_TAB_HANDLERS_CALLS);
    log_get_caller_tag_FOR_key_val_caller = background_js.log_get_caller_tag_FOR_key_val_caller; li("background_js","log_get_caller_tag_FOR_key_val_caller",log_get_caller_tag_FOR_key_val_caller);
    log_sep_bot_FOR_caller_callee         = background_js.log_sep_bot_FOR_caller_callee;              li("background_js","log_sep_bot_FOR_caller_callee",log_sep_bot_FOR_caller_callee);
    log_sep_top_FOR_caller_callee         = background_js.log_sep_top_FOR_caller_callee;              li("background_js","log_sep_top_FOR_caller_callee",log_sep_top_FOR_caller_callee);

    /*}}}*/
    //_______________________ bg_content
    //_______________________ bg_csp
    //_______________________ bg_event
    //_______________________ bg_header
    modules.push( bg_message    ); /*{{{*/
    bg_message_onMessage_CB_reply   = bg_message.bg_message_onMessage_CB_reply; li("bg_message","bg_message_onMessage_CB_reply",bg_message_onMessage_CB_reply);
    bg_message_tabs_sendMessage     = bg_message.bg_message_tabs_sendMessage;   li("bg_message","bg_message_tabs_sendMessage",bg_message_tabs_sendMessage);

    /*}}}*/
    modules.push( bg_page       ); /*{{{*/
    bg_page_POPUP_pageAction        = bg_page.bg_page_POPUP_pageAction;                             li("bg_page","bg_page_POPUP_pageAction",bg_page_POPUP_pageAction);

    /*}}}*/
    modules.push( bg_settings   ); /*{{{*/
    bg_settings_get_url_settings    = bg_settings.bg_settings_get_url_settings;   li("bg_settings","bg_settings_get_url_settings",bg_settings_get_url_settings);
    bg_settings_is_a_supported_URL  = bg_settings.bg_settings_is_a_supported_URL;   li("bg_settings","bg_settings_is_a_supported_URL",bg_settings_is_a_supported_URL);

    /*}}}*/
    modules.push( bg_store      ); /*{{{*/
    bg_store_GET_url_domain         = bg_store.bg_store_GET_url_domain;                    li("bg_store","bg_store_GET_url_domain",bg_store_GET_url_domain);
    bg_store_GET_url_key            = bg_store.bg_store_GET_url_key;                       li("bg_store","bg_store_GET_url_key",bg_store_GET_url_key);
    bg_store_SET_url_settings       = bg_store.bg_store_SET_url_settings;                  li("bg_store","bg_store_SET_url_settings",bg_store_SET_url_settings);
    bg_store_SAVE_items             = bg_store.bg_store_SAVE_items;                        li("bg_store","bg_store_SAVE_items",bg_store_SAVE_items);

    /*}}}*/
    //_______________________ bg_tabs
    log_js.log_import(bg_tabs      , modules);
};
/*}}}*/
    setTimeout(_import,0);
/*}}}*/
/* LOGGING {{{*/
/*_ logging {{{*/
let logging = function(state)
{
    if(state != undefined) {            BG_TABS_JS_LOG = state;
        if(state) bg_store_SAVE_items({ BG_TABS_JS_LOG           });
        else      bg_store_SAVE_items({ BG_TABS_JS_LOG: undefined});
    } return                            BG_TABS_JS_LOG;
};
/*}}}*/
/*_ log_this_get {{{*/
let log_this_get = function(_caller)
{
    switch(_caller) {

    case "bg_tabs_onActivated"                     : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
    case "bg_tabs_onRemoved"                       : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
    case "bg_tabs_onUpdated"                       : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;

    case "bg_tabs_declarativeNetRequest_onRuleMatchedDebug_listener" : return BG_TABS_JS_LOG;
    case "bg_tabs_declarativeNetRequest_onUpdated"                   : return BG_TABS_JS_LOG;

    case "bg_tabs_get_tabId_last_activated"        : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS;
    case "bg_tabs_set_tabId_last_activated"        : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS;

    case "bg_tabs_get_url"                         : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
    case "bg_tabs_get_tab_url_callback"            : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;

    case "bg_tabs_get_url_settings"                : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS;
    case "bg_tabs_url_settings_from_cached"        : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS;
    case "bg_tabs_url_settings_from_others"        : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS;

    case "bg_tabs_del_tabId"                       : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG8_STORE;
    case "bg_tabs_del_tabId_key"                   : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG8_STORE;
    case "bg_tabs_get_tabId_key"                   : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG8_STORE;
    case "bg_tabs_set_tabId_key_items"             : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG8_STORE;
    case "bg_tabs_set_tabId_key_val"               : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG8_STORE;

    }

/*{{{*/
    log("%c"+BG_TABS_SCRIPT_ID  +"%c log_this_get: missing switch %c"+_caller
        ,lbH+lb2                 ,lbL+lf2                        ,lbR+lf4    );

    return false;
/*}}}*/
};
/*}}}*/
/*}}}*/
/* DATA {{{*/
let TABS_MAP   = new Map();
let TABS_CACHE = new Map();

const PL = "\u25C0"; // < LEFT
const PR = "\u25B6"; // > RIGHT
const Dt = "\u25BC"; // V DOWN
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ EVENTS                                                                    │
// └───────────────────────────────────────────────────────────────────────────┘
/*➔ bg_tabs_onRemoved {{{*/
/*{{{*/
const B_TABS_REMOVED = "TAB REMOVED";
/* DOC {{{
:!start explorer "https://developer.chrome.com/extensions/tabs\#event-onRemoved"
    url       URL if it has changed.
    status    Can be either loading or complete.
}}}*/
/*}}}*/
let bg_tabs_onRemoved = function(tabId, removeInfo)
{
/*{{{*/
let   caller = "bg_tabs_onRemoved";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( b_is_paused() ) { log("%c"+SYMBOL_CONSTRUCTION+" PAUSED in "+caller, lbb+lbH+lf1); return; }
if( log_ACTIVATED() ) log_console_clear(LOG_MAP.B_LOG3_PRESERVE, caller);
/*}}}*/
if( log_this) log("%c"+SD9+"%c "+B_TABS_REMOVED+" %c"+log_json_prettify(removeInfo), lbB+lf9, lbF+lbH+lf9, lbF+lbH+lf9);
if( log_more) log_caller();
    /* DISCARD [bg_tabs entry] .. (but save a copy in CACHE) {{{*/
    if( bg_tabs_get_tabId(tabId) )
    {
if( log_more) log_object(caller+": TABS #"+tabId, bg_tabs_get_tabId(tabId), lbH+lf8);
//( log_more) log_caller();

        bg_tabs_del_tabId( tabId );
    }
    else {
if( log_more) log("%c REMOVED TAB #"+tabId+": WAS NOT TRACKED", lbH+lf8);

    }
    /*}}}*/
if( log_this || log_ACTIVATED() || LOG_MAP.B_LOG0_MORE) log_STORAGE();
};
/*}}}*/
/*➔ bg_tabs_onActivated {{{*/
/*{{{*/
/*{{{
:!start explorer "https://developer.chrome.com/extensions/tabs\#event-onActivated"
    . URL may not be set .. @see onUpdated

:so ~/VIM/Session_JS.vim
:e  ~/vimfiles/after/syntax/javascript.vim
:so ~/vimfiles/after/syntax/javascript.vim
}}}*/

const B_TABS_ACTIVATED             = "TAB ACTIVATED";
const B_TABS_ACTIVATED_TRACKED_URL = "TRACKED URL";
const B_TABS_ACTIVATED_UNKNOWN_URL = "UNKNOWN URL";
const B_TABS_ACTIVATED_DELAY_MS    = 100;

let bg_tabs_history = [];
/*}}}*/
let bg_tabs_onActivated = async function(activeInfo={})
{
/*{{{*/
let   caller = "bg_tabs_onActivated";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( b_is_paused() ) { log("%c"+SYMBOL_CONSTRUCTION+" PAUSED in "                     +caller, lbb+lbH+lf1); return; }
if(log_ACTIVATED())   log_console_clear(LOG_MAP.B_LOG3_PRESERVE, caller);
if(!chrome.storage) { log("%c"+SYMBOL_CONSTRUCTION+" chrome.storage is undefined in "+caller, lbb+lbH+lf1); return; }

/*}}}*/
if( log_more) log_sep_top(caller+log_js.log_o_keys_toString(activeInfo), "LOG1_TAG");
//( log_more) log_object(caller+"(activeInfo)",activeInfo,lf4);
//( log_more) log("%c activeInfo: "+log_json_prettify(activeInfo),lb1);
//( log_more) log_caller();
    /* [bg_tabs_history] {{{*/
    bg_tabs_history.push({ caller, ...activeInfo});

if( log_this) log("%c "+mPadStart(bg_tabs_history.length,3)+"%c activeInfo: "+log_json_prettify(activeInfo)
                  ,lbb+lbH+lbX[bg_tabs_history.length %10]  ,lf1                                           );

    /*}}}*/
try {
    /* [url] {{{*/
    let url =                                                 (activeInfo.url || activeInfo.pendingUrl)
        ?  bg_tabs_set_tabId_key_val(activeInfo.tabId, "url", (activeInfo.url || activeInfo.pendingUrl))
        :  bg_tabs_get_tabId_key    (activeInfo.tabId, "url")
    ;
    let tracked_or_unknown_url = url ? B_TABS_ACTIVATED_TRACKED_URL : B_TABS_ACTIVATED_UNKNOWN_URL;
    let                    l_x = url ?                      lbb+lf5 : lbb+lf2                     ;

if( log_this) log("%c"+SD1+"%c "+B_TABS_ACTIVATED+" %c"+tracked_or_unknown_url+" %c activeInfo %c"+JSON.stringify(activeInfo)
                  ,lbB+lf1 ,lbb+lbL+lf1            ,lbR+l_x                     ,lbL+l_x      ,lbR+l_x                       );

if( log_more) log("url=["+url+"]");
    /*}}}*/
    /* [tabId] (last activated) {{{*/
    if(activeInfo.tabId) {
        bg_tabs_set_tabId_last_activated( activeInfo.tabId );

    }
    /*}}}*/
    /* IGNORE UNSUPPORTED URL: {{{*/
    if(url && bg_settings_is_a_supported_URL(url))
    {
        log_IGNORING(url, caller);

        bg_tabs_del_tabId( activeInfo.tabId );

        return;
    }
    /*}}}*/
    /* bg_tabs_get_url {{{*/
    if(activeInfo.tabId && !url)
    {
        await bg_tabs_get_url( activeInfo.tabId
                             , { query: tracked_or_unknown_url , caller: B_SCRIPT_ID+" "+log_js.get_callers_bot() }
                             );

    }
    /*}}}*/
/*{{{*/
//log_sep_top_FOR_caller_callee(caller,"bg_content_scripts_loaded");
//    await                             bg_content_scripts_loaded(activeInfo.tabId, false); // ignore_cache
//log_sep_bot_FOR_caller_callee(caller,"bg_content_scripts_loaded");
/*}}}*/
} catch(error) { /*{{{*/
    if(error == "Error: Tabs cannot be edited right now (user may be dragging a tab).")
        bg_tabs_onActivated_call_later({   caller
                               , callback : bg_tabs_onActivated // signature: (activeInfo) .. ({tabId , [status]})
                               ,     args : activeInfo
                               ,    delay : B_TABS_ACTIVATED_DELAY_MS
        });
    else
        log(error);

} /*}}}*/
finally {
if( log_more) log_sep_bot(caller+"("+log_json_prettify(activeInfo)+")", "LOG1_TAG");
if( log_this || log_ACTIVATED() || LOG_MAP.B_LOG0_MORE) log_STORAGE();
}
};
/*}}}*/
/*_ bg_tabs_onActivated_call_later .. B_LOG3_PRESERVE {{{*/
let bg_tabs_onActivated_call_later = function(_args)
{
    let   caller = _args.caller;
    let callback = _args.callback;
    let     args = _args.args;
    let    delay = _args.delay;

    if((MANIFEST_VERSION == "v3") && (args && (typeof args.tabId != "undefined")))
    {
        chrome.tabs.query(                  { currentWindow: true, active: true }           )
            .then ((tabs)       =>          {
                args.active_tab =  tabs[0];
                args.tabId      = (tabs[0] && tabs[0].id);
                setTimeout(callback, delay, args); })
            .catch((error) =>               { console.error(BG_TABS_SCRIPT_ID+"."+caller, error); })
        ;

    }
    else {
        setTimeout(callback, delay, args);
    }
};
/*}}}*/
/*➔ bg_tabs_onUpdated {{{*/
/*{{{*/
const B_TABS_UPDATED = "TAB UPDATED";

/*{{{
:!start explorer "https://developer.chrome.com/extensions/tabs\#event-onUpdated"
    url       URL if it has changed.
    status    Can be either loading or complete.
    discarded The tab's new discarded state.
}}}*/
/*}}}*/
let bg_tabs_onUpdated = async function(tabId, changeInfo, tab)
{
/*{{{*/
let   caller = "bg_tabs_onUpdated";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( b_is_paused() ) { log("%c"+SYMBOL_CONSTRUCTION+" PAUSED in "+caller, lbb+lbH+lf1); return; }
if( log_ACTIVATED() ) log_console_clear(LOG_MAP.B_LOG3_PRESERVE, caller);
if(!tab.url) return;

let l_x
        = (changeInfo.status == "loading" ) ? 1
        : (changeInfo.favIconUrl          ) ? 2
        : (changeInfo.status == "complete") ? 3
        :                                     9;
let storage_url_key = bg_store_GET_url_key(tab.url);

//  let action_tags = ellipsis( JSON.stringify(changeInfo), 60);
    let action_tags = log_js.log_json_prettify(changeInfo);
if( log_more) log_sep_top(caller+" ● "+action_tags, "LOG1_TAG");
if( log_this) log("%c"+SD1+"%c "+B_TABS_UPDATED+" %c"+storage_url_key           +" %c changeInfo %c"+action_tags
                  ,lbB+lf1 ,lbH+lfX[l_x]         ,lbH+lb0                         ,lbL+lfX[l_x] ,lbR+lfX[l_x]   );
if( log_more) log_object("tab" , tab   , lbH+lf9);
if( log_more) log_object(caller+": TABS #"+tab.id, bg_tabs_get_tabId(tab.id), lbH+lf8);
/*}}}*/
    /* [bg_tabs_history] {{{*/
    bg_tabs_history.push({ caller, ...changeInfo});

if( log_this) log("%c "+mPadStart(bg_tabs_history.length,3)+"%c changeInfo: "+log_json_prettify(changeInfo)
                  ,lbb+lbH+lbX[bg_tabs_history.length %10]  ,lf1                                           );
    /*}}}*/
try {
    /* [bg_tabs_set_tabId_last_activated] {{{*/
    bg_tabs_set_tabId_last_activated( tab.id );

    /*}}}*/
    /* [bg_tabs_set_tabId_key_val status] {{{*/
    bg_tabs_set_tabId_key_val(tabId, "status", changeInfo.status);

    /*}}}*/
    /* NEW [tab.url] .. DISCARD [bg_tabs entry] {{{*/
    let url_was  = bg_tabs_get_tabId_key(tab.id, "url", "");
    if( url_was != tab.url)
    {
        let url_discarded
            =  (url_was != ""         ) /* we had one already for this bg_tabs[tab.id] */
            && (tab.url     != url_was) /* .. and it was not the same */
            ;

        if( url_discarded )
        {
            action_tags += " .. URL DISCARD";
if( log_more) log("%c "+action_tags+": %c"+ log_json({ WAS : url_was , NEW : tab.url})
    ,              lbF+lbH+lf2        ,lbH+lf9                                        );

            bg_tabs_del_tabId(tab.id);
        }
    }
    /*}}}*/
    /* [changeInfo complete] ➔ [t_load] {{{*/
    if( changeInfo.status == "complete")
    {
        // This request exceeds the MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL quota
/*{{{
        if( chrome.declarativeNetRequest )
            bg_tabs_declarativeNetRequest_onUpdated(tabId, changeInfo);
}}}*/

        let start          = bg_tabs_get_tabId_key(tabId, "start"         );
        let tools_deployed = bg_tabs_get_tabId_key(tabId, "tools_deployed");

        if( start || tools_deployed)
        {
if( log_more) log_sep_top_FOR_caller_callee(caller, "bg_message_tabs_sendMessage: "+action_tags);
            let  result = await                      bg_message_tabs_sendMessage(tabId, { cmd: "t_load" }, caller);
if( log_more) log_sep_bot_FOR_caller_callee(caller, "bg_message_tabs_sendMessage: "+action_tags);

            if( log_more) log_object("result", result);

            action_tags += " ● SENDING MESSAGE [t_load]";
        }
        bg_page_POPUP_pageAction(tabId, { caller, ...bg_tabs_get_tabId(tabId) });
    }
    /*}}}*/
} finally { /*{{{*/
if( log_more) log_sep_bot(caller+" ● "+action_tags, "LOG1_TAG");
if( log_this || log_ACTIVATED() || LOG_MAP.B_LOG0_MORE) log_STORAGE();
}
/*}}}*/
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ declarativeNetRequest                                                     │
// └───────────────────────────────────────────────────────────────────────────┘
/*_ bg_tabs_declarativeNetRequest_onRuleMatchedDebug_listener {{{*/
/*{{{*/
const LOG_RULEMATCHED_COOLDOWN_MS       = 2000;
let   last_onRuleMatchedDebug_call_time =    0;
let   last_onRuleMatchedDebug_burst_nb  =    0;

/*}}}*/
let bg_tabs_declarativeNetRequest_onRuleMatchedDebug_listener = function(details)
{
/*{{{*/
let   caller = "bg_tabs_declarativeNetRequest_onRuleMatchedDebug_listener";
let log_this = log_this_get(caller);

/*}}}*/

        /* ONLY LOG THE FIRST OF A BURST */
        let this_time = new Date().getTime() % 86400000;
        if((this_time - last_onRuleMatchedDebug_call_time) > LOG_RULEMATCHED_COOLDOWN_MS)
        {
            last_onRuleMatchedDebug_call_time = this_time;  // LOGGING FIRST OF BUNCH
            last_onRuleMatchedDebug_burst_nb  = 1;
        }
        else {
            last_onRuleMatchedDebug_burst_nb += 1;          // ONLY COUNT THE FOLLOWERS
            return;
        }

if( log_this) log_object("onRuleMatchedDebug ● FIRST RULE MATCH", details);
//( log_this) log       ("onRuleMatchedDebug", log_js.log_o_keys_toString(details));
//( log_this) log       ("onRuleMatchedDebug", log_js.log_json_prettify(details));
};
/*}}}*/
/*_ bg_tabs_declarativeNetRequest_onUpdated {{{*/
let bg_tabs_declarativeNetRequest_onUpdated = async function(tabId,changeInfo)
{
/*{{{*/
let   caller = "bg_tabs_declarativeNetRequest_onUpdated";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_this) log(caller+"%c"+last_onRuleMatchedDebug_burst_nb+" RULES MATCHED %c"+changeInfo.status, lbb+lbL+lb5, lbb+lbR+lb5);
/*{{{
    let      enabledRulesets = await chrome.declarativeNetRequest.getEnabledRulesets();
console.log("enabledRulesets", enabledRulesets );
}}}*/

    let      matchedRules = await chrome.declarativeNetRequest.getMatchedRules({tabId});
/*{{{
console.log("matchedRules"   , matchedRules    );
}}}*/

    let         matched_array = matchedRules.rulesMatchedInfo;
if( log_more && matched_array.length) {
    let cnt = "1...";
    log_object(       "matched[  0  ]",                    matched_array[0], lb0);
    for(let i=1;  i < matched_array.length;++i) {
        let matched = matched_array[i];
//      log_object(   "matched["+i+"]", matched                            , lb0);
        log       ("%c matched["+cnt+"]"+ log_js.log_o_keys_toString(matched), lb0);
//      log       ("%c matched["+cnt+"]"+ log_js.log_json_prettify  (matched), lb0);
    }
}
/*{{{*/
/*}}}*/

};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ LAST ACTIVATED TABID                               ● tabId_last_activated │
// └───────────────────────────────────────────────────────────────────────────┘
/*{{{*/
let             tabId_last_activated;
/*}}}*/
/*➔ bg_tabs_set_tabId_last_activated {{{*/
let bg_tabs_set_tabId_last_activated = function(tabId)
{
                tabId_last_activated = tabId;
};
/*}}}*/
/*➔ bg_tabs_get_tabId_last_activated {{{*/
let bg_tabs_get_tabId_last_activated = function()
{
    return      tabId_last_activated;
};

/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ GET ● TAB URL                                                             │
// └───────────────────────────────────────────────────────────────────────────┘
/*➔ bg_tabs_get_url {{{*/
/*{{{*/
const B_GET_ACTIVE_TAB_URL  = "GET ACTIVE TAB URL";

/*}}}*/
let bg_tabs_get_url = async function(tabId,message,response_handler=null)
{
/*{{{*/
let   caller = "bg_tabs_get_url";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log_sep_top(caller+"(tabId "+tabId+")", "LOG2_TAG");
try {
/*{{{*/
if( log_this) log("%c"+SD2+"%c "+B_GET_ACTIVE_TAB_URL+" %c"+ message.query+" %c ← %c "+message.caller
                  ,lbB+lf2 ,lbL+lf2                    ,lbR+lf2             ,lbL+lf2,lbR+lf2         );
if( log_more) log_caller();
//log_object(caller+": message", message, lbH+lf8);
/*}}}*/
    /* assert access to chrome.tabs interface {{{*/
    if(!chrome.tabs) { confirm(BG_TABS_SCRIPT_ID+": (!chrome.tabs)"); return; } /* eslint-disable-line no-alert */

    /*}}}*/
    /* bg_tabs_get_tab_url_callback {{{*/
    if(tabId)
    {
        await chrome.tabs.get  (                      tabId )
            .then (async (tab  ) =>                 { await bg_tabs_get_tab_url_callback(tab    , message, response_handler); })
            .catch(      (error) =>                 { console.error(BG_TABS_SCRIPT_ID+"."+message.caller, error); })
        ;
    }
    else {
    if( MANIFEST_VERSION == "v3")
    {
        await chrome.tabs.query(message.queryObj || { currentWindow: true, active: true })
            .then (async (tabs ) =>                 { await bg_tabs_get_tab_url_callback(tabs[0], message, response_handler); })
            .catch(      (error) =>                 { console.error(BG_TABS_SCRIPT_ID+"."+message.caller, error); })
        ;
    }
    else {
        await chrome.tabs.query(                    { currentWindow:true, active:true }
                         , async function(tabs)     { await bg_tabs_get_tab_url_callback(tabs[0], message, response_handler); })
        ;
    }
    }
    //}}}
} catch(error) { log(BG_TABS_SCRIPT_ID+"."+caller, error);
} finally      { if( log_more) log_sep_bot(caller, "LOG2_TAG"); }
};
/*}}}*/
/*_ bg_tabs_get_tab_url_callback {{{*/
/*{{{*/
const B_GET_ACTIVE_TAB_URL_CB       =         "ACTIVE TAB URL";
const B_NO_ACTIVE_TAB               =      "NO ACTIVE TAB";

/*}}}*/
let bg_tabs_get_tab_url_callback = async function(active_tab,message,response_handler)
{
/*{{{*/
let   caller = "bg_tabs_get_tab_url_callback";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    let action
    =  !active_tab                           ? "[active_tab "+active_tab.id        +"]"
    :  (active_tab && active_tab.url       ) ? "[url "       +active_tab.url       +"]"
    :  (active_tab && active_tab.pendingUrl) ? "[pendingUrl "+active_tab.pendingUrl+"]"
    :  (active_tab && active_tab.id        ) ? "[id "        +active_tab.id        +"]"
    :                                          log_json(      active_tab)
    ;
/*}}}*/
if( log_more) log_sep_top(caller+"("+action+")", "LOG3_TAG");
    let query_info = {};
try {
    /* [active_tab] [url] {{{*/
    if(!active_tab)
    {
if( log_ACTIVATED()) log("%c"+SD3+"%c "+B_NO_ACTIVE_TAB, lbB+lf3, lbb+lbH+lf0);

    }

    let url        = active_tab && active_tab.url;
    let url_domain = url ? bg_store_GET_url_domain(url) : "TAB HAS NO URL";
if( log_this && active_tab) log("%c"+SD3+"%c "+B_GET_ACTIVE_TAB_URL_CB+" %c" +action+"%c"+url_domain
                                ,lbB+lf3 ,lbL+lf3                       ,lbR+lf0     ,lbH+lb3       );
if( log_more) log_caller();
if( log_more && active_tab) log_object("active_tab", active_tab, lbH+lf3);
//log_object(caller+": message", message, lbH+lf8);
    /*}}}*/
    /* USE AS DEFAULT ACTIVE TAB {{{*/
    if(active_tab && active_tab.id && !bg_tabs_get_tabId_last_activated())
    {
if( log_this) log(caller+": %c sending tabId value to bg_tabs_set_tabId_last_activated("+active_tab.id+")", lbb+lbH+lf3);

        bg_tabs_set_tabId_last_activated( active_tab.id );
    }
    /*}}}*/
//    /* 1/4 TAB HAS NO URL {{{*/
//    if(!url) {
//if( log_ACTIVATED() && active_tab) log("%c"+SD3+"%c NO URL", lbB+lf3, lbb+lbH+lf0);
//
//    }
//    /*}}}*/
    /* 2/4 APPLY [active_tab] ● tabId ● url ● title ● status {{{*/
    let tabId = active_tab && active_tab.id;
    if( tabId )
    {
        url = (active_tab.url || active_tab.pendingUrl);
if( log_more) log("%c"+caller+" ●●● SETTING url=["  +url+"]", lf4);

        bg_tabs_set_tabId_key_val  (tabId, "url"   , url       );
        bg_tabs_set_tabId_key_items(tabId, "title" , active_tab);
        bg_tabs_set_tabId_key_items(tabId, "status", active_tab);

        query_info = { ...active_tab };
    }
    /*}}}*/
    /* 3/4 GET LOCAL STORAGE SETTINGS FOR URL {{{*/
    let have_tabId                      = tabId;
    let have_message_caller             = message.caller;
//  let have_message_caller_B_SCRIPT_ID = message.caller && message.caller.startsWith(B_SCRIPT_ID);
/*{{{
    let have_get_settings_called        = bg_tabs_get_tabId_key(tabId, "get_settings_called"  );
    let have_get_settings_answered      = bg_tabs_get_tabId_key(tabId, "get_settings_answered");
}}}*/

    if(    have_tabId
        && have_message_caller
//      && have_message_caller_B_SCRIPT_ID
/*{{{
        && have_get_settings_called
        && have_get_settings_answered
}}}*/
    ) {
if( log_this) log("%c"+SD3+"%c ➔ GETTING  LOCAL STORAGE SETTINGS FOR URL"           , lbB+lf3, lbH+lf4         );

        await bg_settings_get_url_settings(tabId, url);
    }
    else {
        query_info.no_url_settings
            = !have_tabId                      ? "NO tabId"
            : !have_message_caller             ? "NO message.caller"
//          : !have_message_caller_B_SCRIPT_ID ?   "(message.caller != B_SCRIPT_ID)=["+message.caller+"]"
/*{{{
            : !have_get_settings_called        ? "!get_settings_called"
            : !have_get_settings_answered      ? "!get_settings_answered"
}}}*/
            : "no_url_settings";


if( log_this) log("%c"+SD3+"%c ➔ SKIPPING bg_settings_get_url_settings %c"+query_info.no_url_settings, lbB+lf3, lbL+lf4, lbR+lf8);
    }
    /*}}}*/
    /* 4/4 REPLY TO QUERY {{{*/
    /* REPLY TO POPUP URL QUERY (synchronized when URL is known)*/
    let REPLY = B_GET_ACTIVE_TAB_URL_CB+":"
        +     (                                !tabId  ? " NO tabId"
               :                                         " tabId "+tabId+"]"
              )
        +     (                                !url    ? " NO url"
               :!bg_settings_is_a_supported_URL(url)   ? " UNSUPPORTED URL IGNORED"
               :                                         " ["+ellipsis(url,32)+"]"
              );

    let type  =                                !url          ? "error tabId"
        :                                      !url          ? "error url"
        :       !bg_settings_is_a_supported_URL(url)         ? "error UNSUPPORTED url"
        :                                                      "answer"
    ;

    query_info
        = {   REPLY
            , type
            , url
            , tabId
            , ...query_info
            , status                         : bg_tabs_get_tabId_key(tabId, "status")
            , start                          : bg_tabs_get_tabId_key(tabId, "start")
            , csp_filter                     : bg_tabs_get_tabId_key(tabId, "csp_filter")
            , cancelreq                      : bg_tabs_get_tabId_key(tabId, "cancelreq")
            , get_settings_called            : bg_tabs_get_tabId_key(tabId, "get_settings_called"  )
            , get_settings_answered          : bg_tabs_get_tabId_key(tabId, "get_settings_answered")
            , content_scripts_reply_message  : bg_tabs_get_tabId_key(tabId, "content_scripts_reply_message")
            , tools_start_called_once        : bg_tabs_get_tabId_key(tabId, "tools_start_called_once")
            , reloaded_once                  : bg_tabs_del_tabId_key(tabId, "reloaded_once")
            , t_load                         : bg_tabs_del_tabId_key(tabId, "t_load")
            , tools_deployed                 : bg_tabs_del_tabId_key(tabId, "tools_deployed")
        };
if( log_more) log_object("query_info", query_info);

    if( response_handler )
        bg_message_onMessage_CB_reply(tabId, message, query_info, response_handler);

    bg_page_POPUP_pageAction(tabId, { caller, ...query_info });

    /*}}}*/
} finally {
if( log_more) log_sep_bot(caller+": start=["+query_info.start+"]", "LOG3_TAG");
}
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ GET ● URL_TAB_KEY_VAL                                                     │
// └───────────────────────────────────────────────────────────────────────────┘
/*➔ bg_tabs_get_url_settings {{{*/
let bg_tabs_get_url_settings = function(url)
{
    return  bg_tabs_url_settings_from_others( url )
        ||  bg_tabs_url_settings_from_cached( url )
    ;
};
/*}}}*/
/*_ bg_tabs_url_settings_from_cached {{{*/
let bg_tabs_url_settings_from_cached = function(url)
{
/*{{{*/
let   caller = "bg_tabs_url_settings_from_cached";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log("%c bg_tabs_url_settings_from_cached", lbF+lf9);
    /* cached entry for the specified url {{{*/
    let storage_url_key = bg_store_GET_url_key( url );
    let item            = TABS_CACHE.get( storage_url_key );

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
/*_ bg_tabs_url_settings_from_others {{{*/
/* {{{
:!start explorer "https://www.w3schools.com/jsref/jsref_some.asp"
:!start explorer "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
}}}*/
let bg_tabs_url_settings_from_others = function(url)
{
/*{{{*/
let   caller = "bg_tabs_url_settings_from_others";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log("%c bg_tabs_url_settings_from_others", lbF+lf9);
    /* current entry for the specified url {{{*/
    let item = null; let tabId;
    for(let key  of TABS_MAP.keys())
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

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ GET ● TAB_KEY_VAL                                                         │
// └───────────────────────────────────────────────────────────────────────────┘
/*➔ bg_tabs_get_tabId_key {{{*/
/*{{{*/
let last_key;
let last_val;

/*}}}*/
let bg_tabs_get_tabId_key     = function(tabId, key, val="" )
{
/*{{{*/
let   caller = "bg_tabs_get_tabId_key";
let log_this = DEBUG_OPERA || log_this_get(caller);
let log_more = DEBUG_OPERA || log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
    if(!tabId) {           log(caller+"(NO tabId)"); console.trace(); }
    if(!tabId) throw new Error(caller+"(tabId "+tabId+") ● "+get_callers());
    let tab_items = TABS_MAP.get( tabId ) ;

    if( tab_items ) val =  tab_items[key] || val;

/*{{{*/
if( log_more)
{
    if(    (key=="url" || key=="ohr" || key=="ohr_saved")
       && ((key != last_key) || (val != last_val))
    ) {
        last_key   = key;
        last_val   = val;

        log("%c"         +PL+"%c"+caller+"("+tabId+") %c "+key+"%c "+val
            ,lbb+lbH+lf5     ,lbL                    ,lbC      ,lbR+lfX[val ? 4:6]);
    }
} /*}}}*/
        return val;
};
/*}}}*/
/*➔ bg_tabs_get_tabId {{{*/
let bg_tabs_get_tabId     = function(tabId)
{
    if(!tabId) throw new Error("tabId "+tabId);
    return          TABS_MAP.get( tabId );
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ SET ● TAB_KEY_VAL                                                         │
// └───────────────────────────────────────────────────────────────────────────┘
/*➔ bg_tabs_set_tabId_key_items {{{*/
let bg_tabs_set_tabId_key_items = function(tabId, key, items)
{
/*{{{*/
let   caller = "bg_tabs_set_tabId_key_items";
let log_this = log_this_get(caller);
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
/*➔ bg_tabs_set_tabId_key_val {{{*/
let bg_tabs_set_tabId_key_val = function(tabId,key,val)
{
/*{{{*/
let   caller = "bg_tabs_set_tabId_key_val";
let log_this = DEBUG_OPERA || log_this_get(caller);
let log_more = DEBUG_OPERA || log_this && LOG_MAP.B_LOG0_MORE;

if(log_more) {
    if(key=="url" || key=="ohr" || key=="ohr_saved")
        log("%c"         +PR+"%c"+caller+"("+tabId+") %c "+key+"%c "+val          +"%c"+get_callers()
            ,lbb+lbH+lb4     ,lbL                    ,lbC      ,lbR+lfX[val ? 4:6] ,lb0              );
}
/*}}}*/
    if(val == undefined) {
        bg_tabs_del_tabId_key(tabId, key);
        return undefined;
    }
    let tab_items;
    if(!tabId) throw new Error("tabId "+tabId);
    if( tab_items = TABS_MAP.get(tabId))  tab_items[key] = val  ; /* add or update an existing key-entry */
    else            TABS_MAP.set(tabId,           {[key] : val}); /* ......... or create a new key-entry */

    let caller_tag      = log_get_caller_tag_FOR_key_val_caller(key, val, log_js.get_callers_bot());
    bg_store_SET_url_settings(tabId, caller_tag);
    return val;
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ DEL ● TAB_KEY_VAL                                                         │
// └───────────────────────────────────────────────────────────────────────────┘
/*➔ bg_tabs_del_tabId_key {{{*/
let bg_tabs_del_tabId_key     = function(tabId, key         )
{
/*{{{*/
let   caller = "bg_tabs_del_tabId_key";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log("%c "+caller+"%c TAB #"+tabId+"%c"+key
                  ,lbL+lf2    ,lbC+lf2         ,lbR+lf2);
/*}}}*/
    let tab_items;
    if(!tabId) throw new Error("tabId "+tabId);
    if( tab_items = TABS_MAP.get(tabId))
    {
        delete tab_items[key];

        let caller_tag  = log_get_caller_tag_FOR_key_val_caller(key, undefined, log_js.get_callers_bot());
        bg_store_SET_url_settings(tabId, caller_tag);
    }
};
/*}}}*/
/*➔ bg_tabs_del_tabId {{{*/
let bg_tabs_del_tabId = function(tabId = bg_tabs_get_tabId_last_activated())
{
/*{{{*/
let   caller = "bg_tabs_del_tabId";
let log_this = DEBUG_OPERA || log_this_get(caller);
let log_more = DEBUG_OPERA || log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log("%c"+SYMBOL_CONSTRUCTION +"%c "+caller+"%c TAB #"+tabId
                  ,lbL+lf2                  ,lbC+lf2    ,lbR+lf2        );

/*}}}*/

    if(!tabId) throw new Error("tabId "+tabId);
    let item = TABS_MAP.get       (  tabId    );

/* ┌──────────────────────────────────────────────────────────────────┐ */
/* │ keep [ohr] on removed tabs:          see javascript/bg_header.js │ */
/* │ ● Opera won't request the current page from the server on reload │ */
/* └──────────────────────────────────────────────────────────────────┘ */
    let ohr = item.ohr || item.ohr_saved;
    let url = item.url;
/*{{{*/
if( log_more)
    log("%c"         +Dt+"%c"+caller+"("+tabId+") %c "+url+"%c[ohr "     +ohr+"]%c"+get_callers()
        ,lbb+lbH+lb2+lf9 ,lbL                    ,lb0      ,lb0                ,lb0              );

/*}}}*/

    /*......*/ TABS_MAP.delete(       tabId   );

    if(ohr) bg_tabs_set_tabId_key_val(tabId, "ohr_saved", ohr);

    let caller_tag      = log_get_caller_tag_FOR_key_val_caller(caller, undefined, log_js.get_callers_bot());
    bg_store_SET_url_settings(tabId,caller_tag);

    if(item.url) {
        let storage_url_key = bg_store_GET_url_key( item.url );
        TABS_CACHE.set(storage_url_key, item);

if( log_more) log_object("→ INTO CACHE", item, lbH+lbF+lf2, lbH+lf2);
    }
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ LOG ● TAB_KEY_VAL                                                         │
// └───────────────────────────────────────────────────────────────────────────┘
/*➔ bg_tabs_log_TABS {{{*/
let bg_tabs_log_TABS = function()
{
    log_js.log_group(    "%c"+SAR    +"%c TABS"
                     ,    lbb+lbH+lb0 ,lbH+lf3);
    /* TABS HISTORY {{{*/
    log_TAB_HANDLERS_CALLS();

    if( bg_tabs_history.length )
    {
        log_js.log_group("%c"+SAR    +"%c ● bg_tabs_history "+SAD
                         ,lbb+lbH+lf4 ,lbH+lf3);

        for(let i=0; i< bg_tabs_history.length; ++i)
        {
            let info  = bg_tabs_history[i];

            log_object(mPadStart(i%10,4)+" "+info.caller, info, lfX[i%10]);
        }

        console.groupEnd();
    }
    else {
        log_js.log      ("%c"+SAR    +"%c ● bg_tabs_history ● NONE YET"
                         ,lbb+lbH+lf4 ,lbH+lf8);
    }
    /*}}}*/
    /* ACTIVE TABS {{{*/
    if( TABS_MAP.size )
    {
        log_js.log_group("%c"+SAR    +"%c ● TABS_MAP "+SAD
                         ,lbb+lbH+lf2 ,lbH+lf2);
        let i = 0;
        for(let [key , value] of TABS_MAP  ) log_object(mPadEnd((++i%10)+   " tab "+key,24)+" url="+ellipsis(value.url,80), value,     lbX[value.start ? 5:8], true);
        console.groupEnd();
    }
    else {
        log_js.log      ("%c"+SAR    +"%c ● NO ACTIVE TABS YET"
                         ,lbb+lbH+lf2 ,lbH+lf8);
    }
    /*}}}*/
    /* CACHED TABS {{{*/
    if( TABS_CACHE.size )
    {
        log_js.log_group("%c"+SAR    +"%c ● TABS_CACHE "+SAD
                         ,lbb+lbH+lf3 ,lbH+lf3);
        let i = 0;
        for(let [key , value] of TABS_CACHE) log_object(mPadEnd((++i%10)+" cached "+key,24)+" url="+ellipsis(value.url,80), value, lb0+lfX[value.start ? 5:8], true);
        console.groupEnd();
    }
    else {
        log_js.log      ("%c"+SAR    +"%c ● NO CACHED TABS YET"
                         ,lbb+lbH+lf3 ,lbH+lf8);
    }
    /*}}}*/
    /* LAST ACTIVATED {{{*/
    bg_tabs_log_LAST_ACTIVATED_TAB();

    /*}}}*/
    console.groupEnd();
};
/*}}}*/
/*➔ bg_tabs_log_LAST_ACTIVATED_TAB {{{*/
let bg_tabs_log_LAST_ACTIVATED_TAB = function(label,callers=get_callers())
{

    /* [lastError] */
    if(chrome.runtime.lastError)
        log_object("chrome.runtime.lastError", chrome.runtime.lastError, lbB+lb2, false);

    let tabId = bg_tabs_get_tabId_last_activated();
    if(!tabId )
        return;

    let tab_items = TABS_MAP.get(tabId);
    if( tab_items ) {
        tab_items.callers = callers;
        log_object((label || "● tab "+tabId)+" → LAST ACTIVATED", tab_items, lbX[tab_items.start ? 9:0]);
    }

};
/*}}}*/

/*➔ EXPORT {{{*/
    return {  name : "bg_tabs"
        ,     logging

        // NET REQUEST FILTERING
        ,     bg_tabs_declarativeNetRequest_onUpdated
        ,     bg_tabs_declarativeNetRequest_onRuleMatchedDebug_listener

        // ACTIVATE ● UPDATE ● REMOVE
        ,     bg_tabs_onActivated
        ,     bg_tabs_get_tabId_last_activated
        ,     bg_tabs_set_tabId_last_activated
        ,     bg_tabs_log_LAST_ACTIVATED_TAB
        ,     bg_tabs_log_TABS

        ,     bg_tabs_onUpdated
        ,     bg_tabs_onRemoved

        // URL ● SETTINGS
        ,     bg_tabs_get_url
        ,     bg_tabs_get_url_settings

        // TABS KEY-VAL ITEMS
        ,     TABS_MAP
        ,     bg_tabs_del_tabId
        ,     bg_tabs_del_tabId_key
        ,     bg_tabs_get_tabId
        ,     bg_tabs_get_tabId_key
        ,     bg_tabs_set_tabId_key_items
        ,     bg_tabs_set_tabId_key_val

    };
/*}}}*/
}());
/* TODO {{ {
 ┌────────────────────────────────────────────────────────────────────────────┐
 │ NEED TO UNDERSTAND WHEN THE FIRST PAGE [onHeadersReceived] IS DISPATCHED:  │
 │ ● WHEN   STARTING OPERA                                                    │
 │ ● WHEN INSTALLING THE EXTENSION                                            │
 │ ● WHEN   UPDATING THE EXTENSION                                            │
 └────────────────────────────────────────────────────────────────────────────┘
}}}*/
