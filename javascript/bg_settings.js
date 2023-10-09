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
/* globals  bg_event                  */
/* globals  bg_message                */
/* globals  bg_page                   */
/* exported bg_settings               */
/* globals  bg_store                  */
/* globals  bg_tabs                   */

/* eslint-enable  no-redeclare        */

const BG_SETTINGS_SCRIPT_ID  = "bg_settings";
const BG_SETTINGS_SCRIPT_TAG =  BG_SETTINGS_SCRIPT_ID +" (231007:00h:45)"; /* eslint-disable-line no-unused-vars */
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

let   log
    , log_caller
    , log_console_clear
    , log_json
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
let CHROME_SCHEME;
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
/*_ bg_event {{{*/
let bg_event_onUpdated_declarativeNetRequest;

/*}}}*/
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
let bg_tabs_get_last_activated_tabId;
let bg_tabs_set_last_activated_tabId;

let bg_tabs_set_tabId_key_items;
let bg_tabs_set_tabId_key_val;

let bg_tabs_get_tabId_key;
let bg_tabs_get_tabId;

let bg_tabs_del_tabId;
let bg_tabs_del_tabId_key;

let bg_tabs_url_settings;

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
    log                             = log_js.log;                                               li("log_js","log",log);
    log_caller                      = log_js.log_caller;                                        li("log_js","log_caller",log_caller);
    log_console_clear               = log_js.log_console_clear;                                 li("log_js","log_console_clear",log_console_clear);
    log_json                        = log_js.log_json;                                          li("log_js","log_json",log_json);
    log_o_keys                      = log_js.log_o_keys;                                        li("log_js","log_o_keys",log_o_keys);
    log_o_sort                      = log_js.log_o_sort;                                        li("log_js","log_o_sort",log_o_sort);
    log_object                      = log_js.log_object;                                        li("log_js","log_object",log_object);
    log_sep_bot                     = log_js.log_sep_bot;                                       li("log_js","log_sep_bot",log_sep_bot);
    log_sep_top                     = log_js.log_sep_top;                                       li("log_js","log_sep_top",log_sep_top);

    /*}}}*/
    modules.push( background_js ); /*{{{*/
    B_SCRIPT_ID                     = background_js.B_SCRIPT_ID;                                li("background_js","B_SCRIPT_ID",B_SCRIPT_ID);
    CHROME_SCHEME                   = background_js.CHROME_SCHEME;                              li("background_js","CHROME_SCHEME",CHROME_SCHEME);
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
    modules.push( bg_event      ); /*{{{*/
    bg_event_onUpdated_declarativeNetRequest = bg_event.bg_event_onUpdated_declarativeNetRequest; li("bg_event","bg_event_onUpdated_declarativeNetRequest",bg_event_onUpdated_declarativeNetRequest);

    /*}}}*/
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
    bg_tabs_get_last_activated_tabId = bg_tabs.bg_tabs_get_last_activated_tabId; li("bg_tabs","bg_tabs_get_last_activated_tabId",bg_tabs_get_last_activated_tabId);
    bg_tabs_set_last_activated_tabId = bg_tabs.bg_tabs_set_last_activated_tabId; li("bg_tabs","bg_tabs_set_last_activated_tabId",bg_tabs_set_last_activated_tabId);

    bg_tabs_set_tabId_key_items      = bg_tabs.bg_tabs_set_tabId_key_items;      li("bg_tabs","bg_tabs_set_tabId_key_items",bg_tabs_set_tabId_key_items);
    bg_tabs_set_tabId_key_val        = bg_tabs.bg_tabs_set_tabId_key_val;        li("bg_tabs","bg_tabs_set_tabId_key_val",bg_tabs_set_tabId_key_val);

    bg_tabs_get_tabId                = bg_tabs.bg_tabs_get_tabId;                li("bg_tabs","bg_tabs_get_tabId",bg_tabs_get_tabId);
    bg_tabs_get_tabId_key            = bg_tabs.bg_tabs_get_tabId_key;            li("bg_tabs","bg_tabs_get_tabId_key",bg_tabs_get_tabId_key);

    bg_tabs_del_tabId                = bg_tabs.bg_tabs_del_tabId;                li("bg_tabs","bg_tabs_del_tabId",bg_tabs_del_tabId);
    bg_tabs_del_tabId_key            = bg_tabs.bg_tabs_del_tabId_key;            li("bg_tabs","bg_tabs_del_tabId_key",bg_tabs_del_tabId_key);

    bg_tabs_url_settings             = bg_tabs.bg_tabs_url_settings;             li("bg_tabs","bg_tabs_url_settings",bg_tabs_url_settings);

    /*}}}*/
    log_js.log_import(bg_settings  , modules);
};
/*}}}*/
    setTimeout(_import,0);
/*}}}*/
/* LOGGING {{{*/
let BG_SETTINGS_JS_LOG  = false;
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
    case "bg_settings_get_url_settings_callback"             : return BG_SETTINGS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;// rename as ..._tabs_... //FIXME
    case "bg_settings_query_active_tab_url_callback"         : return BG_SETTINGS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;// rename as ..._tabs_... //FIXME

    case "bg_settings_tabs1_onActivated"                     : return BG_SETTINGS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
    case "bg_settings_tabs2_onUpdated"                       : return BG_SETTINGS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
    case "bg_settings_tabs3_onRemoved"                       : return BG_SETTINGS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
    case "bg_settings_tabs4_query_active_tab_url"            : return BG_SETTINGS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
    case "bg_settings_tabs6_get_url_settings"                : return BG_SETTINGS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
    }

/*{{{*/
    log("%c"+BG_SETTINGS_SCRIPT_ID+"%c log_this_get: missing switch %c"+_caller
        ,lbH+lb2                   ,lbL+lf2                        ,lbR+lf4    );

    return false;
/*}}}*/
};
/*}}}*/
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

/*➔ bg_settings_tabs1_onActivated {{{*/
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
let bg_settings_tabs1_onActivated = async function(activeInfo={})
{
/*{{{*/
let   caller = "bg_settings_tabs1_onActivated";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( b_is_paused() ) { log("%c"+SYMBOL_CONSTRUCTION+" PAUSED in "                     +caller, lbb+lbH+lf1); return; }
if(log_ACTIVATED())   log_console_clear(LOG_MAP.B_LOG3_PRESERVE, caller);
if(!chrome.storage) { log("%c"+SYMBOL_CONSTRUCTION+" chrome.storage is undefined in "+caller, lbb+lbH+lf1); return; }

if( log_more) log_sep_top(caller, "LOG1_TAG");
if( log_more) log_object(caller+"(activeInfo)",activeInfo,lf4);
if( log_more) log_caller();
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
                  ,lbB+lf1 ,lbb+lbL+lf1            ,lbR+l_x                     ,lbL+l_x      ,lbR+l_x);

if( log_more) log_object("url=["+url+"]");
    /*}}}*/
    /* [tabId] (last activated) {{{*/
    if(activeInfo.tabId) {
        bg_tabs_set_last_activated_tabId( activeInfo.tabId );

    }
    /*}}}*/
    /* IGNORE chrome: {{{*/
    if(url && url.includes(CHROME_SCHEME))
    {
        log_IGNORING(url, caller);

        bg_tabs_del_tabId( activeInfo.tabId );

        return;
    }
    /*}}}*/
    /* bg_settings_tabs4_query_active_tab_url {{{*/
    if(activeInfo.tabId && !url)
    {
        await bg_settings_tabs4_query_active_tab_url( activeInfo.tabId
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
        bg_settings_call_later({   caller
                               , callback : bg_settings_tabs1_onActivated // signature: (activeInfo) .. ({tabId , [status]})
                               ,     args : activeInfo
                               ,    delay : B_TABS_ACTIVATED_DELAY_MS
        });
    else
        log(error);

    /*}}}*/
} finally { /*{{{*/
if( log_more) log_sep_bot(caller, "LOG1_TAG");
if( log_this || log_ACTIVATED() || LOG_MAP.B_LOG0_MORE) log_STORAGE();
}
/*}}}*/
};
/*}}}*/
/*➔ bg_settings_tabs2_onUpdated {{{*/
let bg_settings_tabs2_onUpdated = async function(tabId, changeInfo, tab)
{
/*{{{*/
let   caller = "bg_settings_tabs2_onUpdated";
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
try {
    /* [bg_tabs_set_last_activated_tabId] {{{*/
    bg_tabs_set_last_activated_tabId( tab.id );

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
        // This request exceeds the MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL quota.//FIXME
/*{{{
        if( chrome.declarativeNetRequest )
            bg_event_onUpdated_declarativeNetRequest(tabId, changeInfo);
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
        bg_page_POPUP_pageAction(tabId, "changeInfo.status: complete");
    }
    /*}}}*/
} finally { /*{{{*/
if( log_more) log_sep_bot(caller+" ● "+action_tags, "LOG1_TAG");
if( log_this || log_ACTIVATED() || LOG_MAP.B_LOG0_MORE) log_STORAGE();
}
/*}}}*/
};
/*}}}*/

/*➔ bg_settings_tabs3_onRemoved {{{*/
/*{{{*/
const B_TABS_REMOVED = "TAB REMOVED";
/* DOC {{{
:!start explorer "https://developer.chrome.com/extensions/tabs\#event-onRemoved"
    url       URL if it has changed.
    status    Can be either loading or complete.
}}}*/
/*}}}*/
let bg_settings_tabs3_onRemoved = function(tabId, removeInfo)
{
/*{{{*/
let   caller = "bg_settings_tabs3_onRemoved(tabId "+tabId+")";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( b_is_paused() ) { log("%c"+SYMBOL_CONSTRUCTION+" PAUSED in "+caller, lbb+lbH+lf1); return; }
if( log_ACTIVATED() ) log_console_clear(LOG_MAP.B_LOG3_PRESERVE, caller);
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
if( log_this || log_ACTIVATED() || LOG_MAP.B_LOG0_MORE) log_STORAGE();
};
/*}}}*/

/*_ bg_settings_call_later .. B_LOG3_PRESERVE {{{*/
let bg_settings_call_later = function(_args)
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
            .catch((error) =>               { console.error(BG_SETTINGS_SCRIPT_ID+"."+caller, error); })
        ;

    }
    else {
        setTimeout(callback, delay, args);
    }
};
/*}}}*/

/*➔ bg_settings_tabs4_query_active_tab_url {{{*/
/*{{{*/
const B_GET_ACTIVE_TAB_URL  = "GET ACTIVE TAB URL";

/*}}}*/
let bg_settings_tabs4_query_active_tab_url = async function(tabId,message,response_handler=null)
{
/*{{{*/
let   caller = "bg_settings_tabs4_query_active_tab_url";
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
    if(!chrome.tabs) { confirm(BG_SETTINGS_SCRIPT_ID+": (!chrome.tabs)"); return; } /* eslint-disable-line no-alert */

    /*}}}*/
    /* bg_settings_query_active_tab_url_callback {{{*/
    if( MANIFEST_VERSION == "v3")
    {
        await chrome.tabs.query(message.queryObj || { currentWindow: true, active: true })
            .then (async (tabs ) =>                 { await bg_settings_query_active_tab_url_callback(tabs[0], message, response_handler); })
            .catch(      (error) =>                 { console.error(BG_SETTINGS_SCRIPT_ID+"."+message.caller, error); })
        ;
    }
    else {
        await chrome.tabs.query(                { currentWindow:true, active:true }
                         , async function(tabs) { await bg_settings_query_active_tab_url_callback(tabs[0], message, response_handler); })
        ;
    }
    //}}}
} catch(error) { log(BG_SETTINGS_SCRIPT_ID+"."+caller, error);
} finally      { if( log_more) log_sep_bot(caller, "LOG2_TAG"); }
};
/*}}}*/
/*_ bg_settings_query_active_tab_url_callback {{{*/
/*{{{*/
const B_GET_ACTIVE_TAB_URL_CB       = "GET ACTIVE TAB URL CB";
const B_NO_ACTIVE_TAB               = "NO ACTIVE TAB";
const B_NO_LAST_ACTIVATED           = "NO LAST ACTIVATED";

/*}}}*/
let bg_settings_query_active_tab_url_callback = async function(active_tab,message,response_handler)
{
/*{{{*/
let   caller = "bg_settings_query_active_tab_url_callback";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log_sep_top(caller, "LOG3_TAG");
try {
    /* [active_tab] {{{*/
    if(!active_tab)
    {
if( log_ACTIVATED()) log("%c"+SD3+"%c "+B_NO_ACTIVE_TAB, lbB+lf3, lbb+lbH+lf0);

    }

    let url        = active_tab && active_tab.url;
    let url_domain = url ? bg_store_GET_url_domain(url) : "TAB HAS NO URL";
    /*}}}*/
if( log_this && active_tab) log("%c"+SD3+"%c "+B_GET_ACTIVE_TAB_URL_CB+" %c" +log_json(active_tab)+"%c"+url_domain
                                ,lbB+lf3 ,lbL+lf3                       ,lbR+lf0                   ,lbH+lb3       );
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
        url = (active_tab.url || active_tab.pendingUrl);
if( log_more) log("%c"+caller+" ●●● SETTING url=["  +url+"]", lf4);

        bg_tabs_set_tabId_key_val  (tabId, "url"   , url       );
        bg_tabs_set_tabId_key_items(tabId, "title" , active_tab);
        bg_tabs_set_tabId_key_items(tabId, "status", active_tab);
    }
    /*}}}*/
    /* 3/3 f(response_handler) .. (send URL as a reply) {{{*/
    /* REPLY TO POPUP URL QUERY (synchronized when URL is known)*/
    if( response_handler )
    {
        let response
            = {   REPLY : "ACTIVE TAB:"+LF+"● [tabId "+(tabId ? tabId : "No tabId")+", "+LF+"● [url "+url+"]"
                , type  : (tabId ? "answer" : "error")
                , url
                , tabId
            };

        bg_message_onMessage_CB_reply(tabId, message, response, response_handler);
    }
    /*}}}*/
// TOO EARLY ? gets undefined items into bg_settings_get_url_settings_callback .. WHY ?
    /* bg_settings_tabs6_get_url_settings {{{*/
    let have_tabId                      = tabId;
    let have_message_caller             = message.caller;
    let have_message_caller_B_SCRIPT_ID = message.caller && message.caller.startsWith(B_SCRIPT_ID);
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

        await bg_settings_tabs6_get_url_settings(tabId, url);
    }
    else {
        let why_not
            = !have_tabId                      ? "NO tabId"
            : !have_message_caller             ? "NO message.caller"
            : !have_message_caller_B_SCRIPT_ID ?    "message.caller != B_SCRIPT_ID)=["+message.caller+"]"
//          : !have_get_settings_called        ? "!get_settings_called"
//          : !have_get_settings_answered      ? "!get_settings_answered"
            : "why_not";

if( log_this) log("%c"+SD3+"%c ➔ SKIPPING bg_settings_tabs6_get_url_settings %c"+why_not, lbB+lf3, lbL+lf4, lbR+lf8);
    }
    /*}}}*/
} finally { if( log_more) log_sep_bot(caller, "LOG3_TAG"); }
};
/*}}}*/

/*➔ bg_settings_tabs6_get_url_settings {{{*/
/*{{{*/
const B_GET_URL_SETTINGS = "GET URL SETTINGS";

/*}}}*/
let bg_settings_tabs6_get_url_settings = async function(tabId, url)
{
/*{{{*/
let   caller = "bg_settings_tabs6_get_url_settings";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if(!chrome.storage) { log("%c"+SYMBOL_CONSTRUCTION+" chrome.storage is undefined in "+caller, lbb+lbH+lf1); return false; }

if( log_more) log_sep_top(caller, "LOG4_TAG");
    let url_domain = url ? bg_store_GET_url_domain(url) : "TAB HAS NO URL";
if( log_more) log("%c "+caller+": %c "+url_domain,lbb+lbL+lf4,lbb+lbR+lf4);
if( log_more) log_caller();
/*}}}*/
try {
    /* SYNC [return] REPLY .. (from discarded or other tabs) {{{*/
    let url_tab = bg_tabs_url_settings( url );
    if( url_tab )
    {
        // BY OTHER TABS or CACHE
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
    if(url)
    {
        bg_tabs_set_tabId_key_val(tabId, "url", url);

        if(url.includes(CHROME_SCHEME))
        {
if( log_this) log_IGNORING(url, caller);

            bg_page_POPUP_pageAction (tabId, "IGNORING CHROME_SCHEME");
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
    /* CONTENT SCRIPT AND TOOLS INJECTION {{{*/
//    log_sep_top_FOR_caller_callee(caller, "bg_content_scripts_loaded");
//    let content_scripts_loaded = await     bg_content_scripts_loaded(tabId);
//    log_sep_bot_FOR_caller_callee(caller, "bg_content_scripts_loaded");
////gBIG(                          caller+": bg_content_scripts_loaded=["+content_scripts_loaded+"]",5);

    let content_scripts_reply_message = bg_tabs_get_tabId_key(tabId, "content_scripts_reply_message");
    let tools_deployed = bg_content_scripts_get_tools_deployed( content_scripts_reply_message );
    if( tools_deployed ) {
        bg_tabs_set_tabId_key_val(tabId, "tools_deployed", tools_deployed );
        bg_tabs_set_tabId_key_val(tabId, "t_load"        , TOOLS4_DEPLOYED);
        bg_page_POPUP_pageAction (tabId, "tools_deployed");
    }
    else {
        bg_page_POPUP_pageAction (tabId, "TOOLS NOT DEPLOYED");
    }
    /*}}}*/
    /* ASYNC [return] REPLY */
if( log_this) log("%c"+SD4    +"%c "+B_GET_URL_SETTINGS+" %c ASYNC "+B_GET_URL_SETTINGS+" %c tools_deployed=["+tools_deployed+"]"
    ,              lbB+lf4     ,lbF+lbL+lf4              ,lbF+lbC+lf5                   ,lbF+lbR+lf5                             );
    return false;
} finally { if( log_more) log_sep_bot(caller, "LOG4_TAG"); }
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

if( log_more) log_sep_top(caller, "LOG5_TAG");
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

//      let activeInfo = { tabId , status:B_SET_URL_ACTIVATION };
//      await bg_settings_tabs1_onActivated( activeInfo );

//      let message = { tabId , start: false, status: B_SET_URL_ACTIVATION }; // DEFAULT: OFF
//      await bg_message_onMessage_CB_tab( message );
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
} finally { if( log_more) log_sep_bot(caller+" → "+result, "LOG5_TAG"); }
};
/*}}}*/

/*➔ EXPORT {{{*/
    return { name : "bg_settings"
        ,            bg_settings_tabs1_onActivated
        ,            bg_settings_tabs2_onUpdated
        ,            bg_settings_tabs3_onRemoved
        ,            bg_settings_tabs4_query_active_tab_url
        ,            bg_settings_tabs6_get_url_settings
        ,            B_NO_ACTIVE_TAB
        ,            B_NO_LAST_ACTIVATED
        // DEBUG
        , logging
    };
/*}}}*/
}());
