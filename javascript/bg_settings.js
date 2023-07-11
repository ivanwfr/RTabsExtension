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
const BG_SETTINGS_SCRIPT_TAG =  BG_SETTINGS_SCRIPT_ID +" (230711:18h:30)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
let bg_settings  = (function() {
"use strict";

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ SETTINGS                                         B_LOG7_TABS B_LOG9_STAGE │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_header.js
:e javascript/bg_message.js
:e javascript/bg_page.js
"● javascript/bg_settings.js
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
    , log_caller
    , log_console_clear
    , log_json
    , log_object
    , log_sep_bot
    , log_sep_top
;

/*}}}*/
/*_ background_js {{{*/
let CHROME_SCHEME;
let LOG_MAP;
let MANIFEST_VERSION;

let b_callback_args_delay_caller;
let b_is_paused;
let bg_tabs_get_last_activated_tabId;
let bg_tabs_sendMessage;
let bg_tabs_set_last_activated_tabId;
let log_ACTIVATED;
let log_IGNORING;
let log_STORAGE;
let log_sep_bot_FOR_caller_callee;
let log_sep_top_FOR_caller_callee;

/*}}}*/
/*_ bg_content {{{*/
let b_content_scripts_get_tools_deployed;

/*}}}*/
//______________ bg_csp
//______________ bg_header
/*_ bg_message {{{*/
let b_runtime_onMessage_CB_reply;

/*}}}*/
/*_ bg_page {{{*/
let TOOLS4_DEPLOYED;

let b_POPUP_pageAction;
let b_page1_RELOAD_if_required;

/*}}}*/
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

/*}}}*/
/*_ bg_store {{{*/
let bg_store_GET_url_domain;
let bg_store_GET_url_key;

/*}}}*/
/*_ bg_settings_import {{{*/
let bg_settings_import = function()
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
    log_caller                          = log_js.log_caller;
    log_console_clear                   = log_js.log_console_clear;
    log_json                            = log_js.log_json;
    log_object                          = log_js.log_object;
    log_sep_bot                         = log_js.log_sep_bot;
    log_sep_top                         = log_js.log_sep_top;

    /*}}}*/
    /*_ background_js {{{*/
    CHROME_SCHEME                         = background_js.CHROME_SCHEME;
    LOG_MAP                               = background_js.LOG_MAP;
    MANIFEST_VERSION                      = background_js.MANIFEST_VERSION;

    b_callback_args_delay_caller          = background_js.b_callback_args_delay_caller;
    b_content_scripts_get_tools_deployed  = background_js.b_content_scripts_get_tools_deployed;
    b_is_paused                           = background_js.b_is_paused;
    bg_tabs_get_last_activated_tabId      = background_js.bg_tabs_get_last_activated_tabId;
    bg_tabs_sendMessage                   = background_js.bg_tabs_sendMessage;
    bg_tabs_set_last_activated_tabId      = background_js.bg_tabs_set_last_activated_tabId;
    log_ACTIVATED                         = background_js.log_ACTIVATED;
    log_IGNORING                          = background_js.log_IGNORING;
    log_STORAGE                           = background_js.log_STORAGE;
    log_sep_bot_FOR_caller_callee         = background_js.log_sep_bot_FOR_caller_callee;
    log_sep_top_FOR_caller_callee         = background_js.log_sep_top_FOR_caller_callee;

    /*}}}*/
    /*_ bg_content {{{*/
    b_content_scripts_get_tools_deployed    = bg_content.b_content_scripts_get_tools_deployed;

    /*}}}*/
    //___________ bg_csp
    //___________ bg_header
    /*_ bg_message {{{*/
    b_runtime_onMessage_CB_reply                 = bg_message.b_runtime_onMessage_CB_reply;

    /*}}}*/
    /*_ bg_page {{{*/
    TOOLS4_DEPLOYED             = bg_page.TOOLS4_DEPLOYED;

    b_POPUP_pageAction          = bg_page.b_POPUP_pageAction;
    b_page1_RELOAD_if_required  = bg_page.b_page1_RELOAD_if_required;

    /*}}}*/
    //___________ bg_settings
    /*_ bg_store {{{*/
    bg_store_GET_url_domain   = bg_store.bg_store_GET_url_domain;
    bg_store_GET_url_key      = bg_store.bg_store_GET_url_key;

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

    /*}}}*/
//................._import    log_js    background_js    bg_content    bg_csp    bg_header    bg_message    bg_page    bg_settings    bg_store    bg_tabs
log("%c bg_settings_import %c log_js %c background_js %c bg_content %c ______ %c _________ %c bg_message %c bg_page %c "+"●●●●●●●● %c bg_store %c bg_tabs "
    ,lbH+lb7              ,lf0      ,lf1             ,lf2          ,lf3      ,lf4         ,lf5          ,lf6       ,lbH+lf7       ,lf8        ,lf9         );
};
/*}}}*/
    setTimeout(bg_settings_import,0);
/*}}}*/
/*{{{*/
const B_TABS_UPDATED = "TAB UPDATED";

/*{{{
:!start explorer "https://developer.chrome.com/extensions/tabs\#event-onUpdated"
    url       URL if it has changed.
    status    Can be either loading or complete.
    discarded The tab's new discarded state.
}}}*/
/*}}}*/

/*_ tabs1_onActivated {{{*/
/*{{{*/
const B_TABS_ACTIVATED             = "TAB ACTIVATED";
const B_TABS_ACTIVATED_TRACKED_URL = "TRACKED URL";
const B_TABS_ACTIVATED_UNKNOWN_URL = "UNKNOWN URL";
const B_TABS_ACTIVATED_DELAY_MS    = 100;

/*{{{
:!start explorer "https://developer.chrome.com/extensions/tabs\#event-onActivated"
    . URL may not be set .. @see onUpdated

:so ~/VIM/Session_JS.vim
:e  ~/vimfiles/after/syntax/javascript.vim
:so ~/vimfiles/after/syntax/javascript.vim
}}}*/
/*}}}*/
let tabs1_onActivated = async function(activeInfo)
{
/*{{{*/
if( b_is_paused() ) { log("%c"+SYMBOL_CONSTRUCTION+" PAUSED in "+caller, lbb+lbH+lf1); return; }
let   caller = "tabs1_onActivated";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if(log_ACTIVATED()) log_console_clear(LOG_MAP.B_LOG3_PRESERVE);

if( log_more) log_sep_top(caller, "LOG1_TAG");
if( log_more) log_object(caller+"(activeInfo)",activeInfo,lf4);
if( log_more) log_caller();
/*}}}*/
try {
    /* [url] {{{*/
    let url
        =  bg_tabs_set_tabId_key_val  (activeInfo.tabId, "url",(activeInfo.url || activeInfo.pendingUrl))
        || bg_tabs_get_tabId_key      (activeInfo.tabId, "url")
    ;
    let tracked_or_unknown_url = url ? B_TABS_ACTIVATED_TRACKED_URL : B_TABS_ACTIVATED_UNKNOWN_URL;
    let                    l_x = url ?                      lbb+lf5 : lbb+lf2                     ;

if( log_this) log("%c"+SD1+"%c "+B_TABS_ACTIVATED+" %c"+tracked_or_unknown_url+"%c activeInfo %c"+JSON.stringify(activeInfo)
                  ,lbB+lf1 ,lbb+lbL+lf1            ,lbR+l_x                    ,lbL+l_x      ,lbR+l_x);

if( log_more) log_object("url=["+url+"]");
    /*}}}*/
    /* IGNORE chrome: {{{*/
    if(url && url.startsWith(CHROME_SCHEME))
    {
        log_IGNORING(url, caller);

        return;
    }
    /*}}}*/
    /* [tabId] (last activated) {{{*/
    if(activeInfo.tabId) {
        bg_tabs_set_last_activated_tabId( activeInfo.tabId );

    }
    /*}}}*/
    /* tabs4_query_active_tab_url {{{*/
    if(activeInfo.tabId && !url)
    {
        await tabs4_query_active_tab_url( activeInfo.tabId
                                                        , { query: tracked_or_unknown_url , caller: BG_SETTINGS_SCRIPT_ID+" "+log_js.get_callers_bot() }
                                                      );

    }
    /*}}}*/
/*{{{*/
//log_sep_top_FOR_caller_callee(caller,"b_content_scripts_loaded");
//    await                             b_content_scripts_loaded(activeInfo.tabId, false); // ignore_cache
//log_sep_bot_FOR_caller_callee(caller,"b_content_scripts_loaded");
/*}}}*/
} catch(error) { /*{{{*/
    if(error == "Error: Tabs cannot be edited right now (user may be dragging a tab).")
        b_callback_args_delay_caller({            caller
                                     , callback : tabs1_onActivated // signaure: (activeInfo) .. ({tabId , [status]})
                                     ,     args : activeInfo
                                     ,    delay : B_TABS_ACTIVATED_DELAY_MS
        });
    else
        log(error);

    /*}}}*/
} finally { /*{{{*/
    if( log_more       ) log_sep_bot(caller, "LOG1_TAG");
    if( log_ACTIVATED() ) log_STORAGE();
}
/*}}}*/
};
/*}}}*/
/*_ tabs2_onUpdated {{{*/
let tabs2_onUpdated = async function(tabId, changeInfo, tab)
{
/*{{{*/
if( b_is_paused() ) { log("%c"+SYMBOL_CONSTRUCTION+" PAUSED in "+caller, lbb+lbH+lf1); return; }
let   caller = "tabs2_onUpdated(tabId "+tabId+")";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

let l_x
        = (changeInfo.status == "loading" ) ? 1
        : (changeInfo.favIconUrl          ) ? 2
        : (changeInfo.status == "complete") ? 3
        :                                     9;
let storage_url_key = bg_store_GET_url_key(tab.url);

//  let action_tags = ellipsis(JSON.stringify(changeInfo), 60);
    let action_tags = log_js.log_json_prettify(changeInfo);
if( log_more) log_sep_top(caller+" "+action_tags, "LOG1_TAG");
if( log_this) log("%c"+SD1+"%c "+B_TABS_UPDATED+"%c"+storage_url_key           +" %c changeInfo %c"+action_tags
                  ,lbB+lf1 ,lbH+lfX[l_x]        ,lbH+lb0                         ,lbL+lfX[l_x] ,lbR+lfX[l_x]   );
if( log_more) log_object("tab" , tab   , lbH+lf9);
if( log_more) log_object(caller+": TABS #"+tab.id, bg_tabs_get_tabId(tab.id), lbH+lf8);
if( log_more) log_caller();
/*}}}*/
try {
    /* [bg_tabs_set_last_activated_tabId] {{{*/
    let onUpdated_label = "onUpdated";

    bg_tabs_set_last_activated_tabId( tab.id );
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
            onUpdated_label += " .. URL DISCARD";
if( log_more) log("%c "+onUpdated_label+": %c"+ log_json({ WAS : url_was , NEW : tab.url})
    ,              lbF+lbH+lf2            ,lbH+lf9);

            bg_tabs_del_tabId(tab.id);
        }
    }
    /*}}}*/
    /* [changeInfo complete] ➔ [t_load] {{{*/
    if( changeInfo.status == "complete")
    {
        let start          = bg_tabs_get_tabId_key(tabId, "start"         );
        let tools_deployed = bg_tabs_get_tabId_key(tabId, "tools_deployed");

        if( start || tools_deployed)
        {
if( log_more) log_sep_top_FOR_caller_callee(caller, "bg_tabs_sendMessage: "+action_tags);
            let  result = await                    bg_tabs_sendMessage(tabId, { cmd: "t_load" }, caller);
if( log_more) log_sep_bot_FOR_caller_callee(caller, "bg_tabs_sendMessage: "+action_tags);

            if( log_more) log_object("result", result);
        }
    }
    /*}}}*/
} finally { /*{{{*/
    if( log_more) log_sep_bot(caller+" "+action_tags, "LOG1_TAG");
    if( log_ACTIVATED() ) log_STORAGE();
}
/*}}}*/
};
/*}}}*/
/*_ tabs3_onRemoved {{{*/
/*{{{*/
const B_TABS_REMOVED = "TAB REMOVED";
/* DOC {{{
:!start explorer "https://developer.chrome.com/extensions/tabs\#event-onRemoved"
    url       URL if it has changed.
    status    Can be either loading or complete.
}}}*/
/*}}}*/
let tabs3_onRemoved = function(tabId, removeInfo)
{
if( b_is_paused() ) { log("%c"+SYMBOL_CONSTRUCTION+" PAUSED in "+caller, lbb+lbH+lf1); return; }
/*{{{*/
let   caller = "tabs3_onRemoved(tabId "+tabId+")";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_ACTIVATED() ) log_console_clear(LOG_MAP.B_LOG3_PRESERVE);

/*}}}*/
if( log_this) log("%c"+SD9+"%c "+B_TABS_REMOVED+" %c"+log_json(removeInfo), lbB+lf9, lbF+lbH+lf9, lbF+lbH+lf9);
if( log_more) log_caller();
    /* DISCARD [bg_tabs entry] .. (but save a copy in CACHE) {{{*/
    if( bg_tabs_get_tabId(tabId) )
    {
if( log_more) log_object(caller+": TABS #"+tabId, bg_tabs_get_tabId(tabId), lbH+lf8);
if( log_more) log_caller();

        bg_tabs_del_tabId( tabId );
    }
    else {
if( log_more) log("%c REMOVED TAB #"+tabId+": WAS NOT TRACKED", lbH+lf8);

    }
    /*}}}*/
if( log_ACTIVATED() ) log_STORAGE();
};
/*}}}*/

/*_ tabs4_query_active_tab_url {{{*/
/*{{{*/
const B_GET_ACTIVE_TAB_URL  = "GET ACTIVE TAB URL";

/*}}}*/
let tabs4_query_active_tab_url = async function(tabId,message,response_handler=null)
{
/*{{{*/
let   caller = "tabs4_query_active_tab_url";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log_sep_top(caller, "LOG2_TAG");
try {
/*{{{*/
if( log_this) log("%c"+SD2+"%c "+B_GET_ACTIVE_TAB_URL+"%c"+ message.query+" %c ← %c "+message.caller
                  ,lbB+lf2 ,lbL+lf2                   ,lbR+lf2             ,lbL+lf2,lbR+lf2         );
if( log_more) log_caller();
//log_object(caller+": message", message, lbH+lf8);
/*}}}*/
    /* assert access to chrome.tabs interface {{{*/
    if(!chrome.tabs) { confirm(BG_SETTINGS_SCRIPT_ID+": (!chrome.tabs)"); return; } /* eslint-disable-line no-alert */

    /*}}}*/
    /* tabs5_query_active_tab_url_callback {{{*/
    if( MANIFEST_VERSION == "V3")
    {
        await chrome.tabs.query(                { currentWindow: true, active: true })
            .then (async (tabs ) =>             { await tabs5_query_active_tab_url_callback(tabs[0], message, response_handler); })
            .catch((error) =>                   { console.error(BG_SETTINGS_SCRIPT_ID+"."+message.caller, error); })
        ;
    }
    else {
        await chrome.tabs.query(                { currentWindow:true, active:true }
                         , async function(tabs) { await tabs5_query_active_tab_url_callback(tabs[0], message, response_handler); })
        ;
    }
    //}}}
} catch(error) { log(BG_SETTINGS_SCRIPT_ID+"."+caller, error);
} finally      { if( log_more) log_sep_bot(caller, "LOG2_TAG"); }
};
/*}}}*/
/*_ tabs5_query_active_tab_url_callback {{{*/
/*{{{*/
const B_GET_ACTIVE_TAB_URL_CB       = "GET ACTIVE TAB URL CB";
const B_NO_ACTIVE_TAB               = "NO ACTIVE TAB";

/*}}}*/
let tabs5_query_active_tab_url_callback = async function(active_tab,message,response_handler)
{
/*{{{*/
let   caller = "tabs5_query_active_tab_url_callback";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log_sep_top(caller, "LOG3_TAG");
try {
    /* [active_tab] {{{*/
    if(!active_tab)
    {
if( log_ACTIVATED()) log("%c"+SD3+"%c"+B_NO_ACTIVE_TAB, lbB+lf3, lbb+lbH+lf0);

    }

    let url        = active_tab && active_tab.url;
    let url_domain = url ? bg_store_GET_url_domain(url) : "TAB HAS NO URL";
    /*}}}*/
if( log_this && active_tab) log("%c"+SD3+"%c "+B_GET_ACTIVE_TAB_URL_CB+"%c" +log_json(active_tab)+"%c"+url_domain
                                ,lbB+lf3 ,lbL+lf3                      ,lbR+lf0                   ,lbH+lb3       );
if( log_more) log_caller();
if( log_more && active_tab) log_object("active_tab", active_tab, lbH+lf3);
//log_object(caller+": message", message, lbH+lf8);
    /* TRACK: currently active tab {{{*/
    if(active_tab && active_tab.id && !bg_tabs_get_last_activated_tabId())
    {
if( log_this) log(caller+": %c sending tabId value to bg_tabs_set_last_activated_tabId("+active_tab.id+")", lbb+lbH+lf3);

        bg_tabs_set_last_activated_tabId( active_tab.id );
    }
    /*}}}*/
//    /* 1/3 TAB HAS NO URL {{{*/
//    if(!url) {
//if( log_ACTIVATED() && active_tab) log("%c"+SD3+"%c NO URL", lbB+lf3, lbb+lbH+lf0);
//
//    }
//    /*}}}*/
    /* 2/3 APPLY [tabId] [url] SETTINGS {{{*/
    let tabId = active_tab && active_tab.id;
    if( tabId )
    {
        bg_tabs_set_tabId_key_val  (tabId, "url"   ,(active_tab.url || active_tab.pendingUrl));
        bg_tabs_set_tabId_key_items(tabId, "status", active_tab);
        bg_tabs_set_tabId_key_items(tabId, "title" , active_tab);
    }
    /*}}}*/
    /* 3/3 f(response_handler) .. (send URL as a reply) {{{*/
    /* REPLY TO POPUP URL QUERY (synchronized when URL is known)*/
    if( response_handler )
        b_runtime_onMessage_CB_reply(tabId, message, response_handler);

    /*}}}*/
// FIXME TOO EARLY ? gets undefined items into tabs7_get_url_settings_callback .. WHY ?
    /* tabs6_get_url_settings {{{*/
    let have_tabId                      = tabId;
    let have_message_caller             = message.caller;
    let have_message_caller_B_SCRIPT_ID = message.caller && message.caller.startsWith(BG_SETTINGS_SCRIPT_ID);
//  let have_get_settings_called        = bg_tabs_get_tabId_key(tabId, "get_settings_called"  );
//  let have_get_settings_answered      = bg_tabs_get_tabId_key(tabId, "get_settings_answered");

    if(    have_tabId
        && have_message_caller
        && have_message_caller_B_SCRIPT_ID
//      && have_get_settings_called
//      && have_get_settings_answered
    ) {
//if( log_this) log("%c GET LOCAL STORAGE SETTINGS FOR URL", lbH+lf3);
//logXXX("...message.caller=["+message.caller+"]");

        await tabs6_get_url_settings(tabId, url);
    }
    else {
        let why_not
            = !have_tabId                      ? "NO tabId"
            : !have_message_caller             ? "NO message.caller"
            : !have_message_caller_B_SCRIPT_ID ?    "message.caller != BG_SETTINGS_SCRIPT_ID)=["+message.caller+"]"
//          : !have_get_settings_called        ? "!get_settings_called"
//          : !have_get_settings_answered      ? "!get_settings_answered"
            : "why_not";

if( log_this) log("➔ %c"+SD3+"%c SKIPPING tabs6_get_url_settings %c"+why_not, lbB+lf3, lbL+lf4, lbR+lf8);
    }
    /*}}}*/
} finally { if( log_more) log_sep_bot(caller, "LOG3_TAG"); }
};
/*}}}*/
/*_ tabs6_get_url_settings {{{*/
const       B_GET_URL_SETTINGS = "GET URL SETTINGS";
let tabs6_get_url_settings = async function(tabId, url)
{
/*{{{*/
let   caller = "tabs6_get_url_settings";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log_sep_top(caller, "LOG4_TAG");
    let url_domain = url ? bg_store_GET_url_domain(url) : "TAB HAS NO URL";
if( log_more) log("%c "+caller+": %c "+url_domain,lbb+lbL+lf4,lbb+lbR+lf4);
if( log_more) log_caller();
/*}}}*/
try {
    /* SYNC [return] REPLY .. (from discarded or other tabs) {{{*/
    let url_tab
        =  bg_tabs_url_settings_from_others( url )
        || bg_tabs_url_settings_from_cached( url )
    ;
    if( url_tab )
    {
        // BY OTHER TABS or CACHE Map
        bg_tabs_set_tabId_key_items(tabId, "start"                 , url_tab);
        bg_tabs_set_tabId_key_items(tabId, "csp_filter"            , url_tab);
        bg_tabs_set_tabId_key_items(tabId, "cancelreq"             , url_tab);
        bg_tabs_set_tabId_key_val  (tabId, "get_settings_called"   , true   );
        bg_tabs_set_tabId_key_val  (tabId, "get_settings_answered" , true   );

if( log_this) log("%c"+SD4    +"%c "+B_GET_URL_SETTINGS+" %c RETURNING SESSION REPLY %c"+log_json(bg_tabs_get_tabId(tabId))
    ,              lbb+lbH+lf4 ,lbF+lbL+lf4              ,lbF+lbR+lf5               ,lbH+lf5                        );

if( log_more) log_object(url_tab.from, url_tab, lbH+lf4);

        return true;
    }
    /*}}}*/
    /* [url] {{{*/
    if(!url) return false;

    /*}}}*/
    /* IGNORING CHROME_SCHEME {{{*/
    if(url && url.startsWith(CHROME_SCHEME))
    {
        log_IGNORING(url, caller);

bg_tabs_set_tabId_key_val(tabId, "url", url);//FIXME
        return false;
    }
    /*}}}*/
    /* tabs7_get_url_settings_callback {{{*/
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
                await tabs7_get_url_settings_callback(tabId, url, items[storage_url_key]);
        });

    bg_tabs_set_tabId_key_val(tabId, "get_settings_called"  , true);
    bg_tabs_del_tabId_key    (tabId, "get_settings_answered"      );
    /*}}}*/
    /* CONTENT SCRIPT AND TOOLS INJECTION {{{*/
//    log_sep_top_FOR_caller_callee(caller, "b_content_scripts_loaded");
//    let content_scripts_loaded = await     b_content_scripts_loaded(tabId);
//    log_sep_bot_FOR_caller_callee(caller, "b_content_scripts_loaded");
////gBIG(                          caller+": b_content_scripts_loaded=["+content_scripts_loaded+"]",5);

    let content_scripts_reply_message = bg_tabs_get_tabId_key(tabId, "content_scripts_reply_message");
    let tools_deployed = b_content_scripts_get_tools_deployed( content_scripts_reply_message );
    if( tools_deployed ) {
        bg_tabs_set_tabId_key_val(tabId, "tools_deployed", tools_deployed );
        bg_tabs_set_tabId_key_val(tabId, "t_load"        , TOOLS4_DEPLOYED);
        b_POPUP_pageAction(tabId, "tools_deployed");
    }
    /*}}}*/
    /* ASYNC [return] REPLY */
if( log_this) log("%c"+SD4    +"%c "+B_GET_URL_SETTINGS+" %c ASYNC "+B_GET_URL_SETTINGS
    ,              lbB+lf4     ,lbF+lbL+lf4              ,lbF+lbR+lf5                  );
    return false;
} finally { if( log_more) log_sep_bot(caller, "LOG4_TAG"); }
};
/*}}}*/
/*_ tabs7_get_url_settings_callback {{{*/
/*{{{*/
const       B_SET_URL_ACTIVATION  = "SET URL ACTIVATION";
const       B_GET_URL_SETTINGS_CB = "GET URL SETTINGS CB";
/*}}}*/
let tabs7_get_url_settings_callback = async function(tabId, url, items)
{
/*{{{*/
let   caller = "tabs7_get_url_settings_callback";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log_sep_top(caller, "LOG5_TAG");
if( log_this) log("%c"+SD5+"%c "+B_GET_URL_SETTINGS_CB   +" %c"+bg_store_GET_url_domain(url)
                  ,lbB+lf5 ,lbL+lf5                        ,lbR+lf5                );
if( log_more) log_caller();

    let storage_url_key = bg_store_GET_url_key(url);
if( log_more) log_object("STORAGE SETTINGS ["+storage_url_key+"] items", items, lbH+lf5);

    let result = "";
/*}}}*/
try {
    /* NO ITEMS- DONE POLLING .. B_SET_URL_ACTIVATION {{{*/
    bg_tabs_set_tabId_key_val(tabId, "get_settings_answered", true);

    if(!items)
    {
if( log_this) log("%c"+SD5+"%c"+B_SET_URL_ACTIVATION+"%c no stored settings yet for %c storage_url_key["+storage_url_key+"]"
                  ,lbB+lf5 ,lbL+lf5                  ,lbC+lf9                      ,lbR+lf9);

//      let activeInfo = { tabId , status:B_SET_URL_ACTIVATION };
//      await tabs1_onActivated( activeInfo );

//      let message = { tabId , start: false, status: B_SET_URL_ACTIVATION }; // DEFAULT: OFF
//      await b_runtime_onMessage_CB_tab( message );
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

           result = await b_page1_RELOAD_if_required(tabId);
        }
        /*}}}*/
        /* NO ACTIVATED TO SYNC WITH {{{*/
        else {
if(log_more) log_object("NOTHING ACTIVATED TO SYNC WITH", bg_tabs_get_tabId(tabId), lbH+lf8);

        }
        /*}}}*/
    }
} finally { if( log_more) log_sep_bot(caller+" → "+result, "LOG5_TAG"); }
};
/*}}}*/

/*➔ EXPORT {{{*/
    return { name : "bg_settings"
        , tabs1_onActivated
        , tabs2_onUpdated
        , tabs4_query_active_tab_url
        , tabs6_get_url_settings
        , tabs3_onRemoved
    };
/*}}}*/
}());
/* VIM SIGNS {{{
:so ~/VIM/signs.vim

 :sign place  1 line=36   name=SIGN1 file=C:/LOCAL/DATA/ANDROID/PROJECTS/Chrome_Web_Store/RTabsExtension/javascript/bg_settings.js
 :sign place  2 line=214  name=SIGN2 file=C:/LOCAL/DATA/ANDROID/PROJECTS/Chrome_Web_Store/RTabsExtension/javascript/bg_settings.js
/"● javascript\/bg_settings\.js
/setTimeout(bg_settings_import,0);

:SaveSigns
}}}*/
