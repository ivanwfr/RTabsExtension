// ┌───────────────────────────────────────────────────────────────────────────┐
// │ bg_content.js ......................................... BACKGROUND SCRIPT │
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
/* exported bg_content                */
// elobals  bg_csp                    */
// globals  bg_header                 */
// globals  bg_message                */
/* globals  bg_page                   */
// globals  bg_settings               */
/* globals  bg_store                  */
/* globals  bg_tabs                   */

/* eslint-enable  no-redeclare        */

const BG_CONTENT_SCRIPT_ID  = "bg_content";
const BG_CONTENT_SCRIPT_TAG =  BG_CONTENT_SCRIPT_ID +" (231004:00h:19)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
// ┌───────────────────────────────────────────────────────────────────────────┐
// │ CONTENT SCRIPT                                   B_LOG7_TABS B_LOG9_STAGE │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
"● javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_event.js
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
let bg_content  = (function() {
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

let   get_callers
    , log
    , log_caller
    , log_object
    , log_sep_bot
    , log_sep_top
    , li
;

/*}}}*/
/*_ background_js {{{*/
let B_SCRIPT_ID;
let CHROME_SCHEME;
let CHROME_SCHEME_REGEX;
let DOM_LOAD_ID;
let DOM_TOOLS_JS_ID;
let LOG_MAP;
let MANIFEST_VERSION;

let log_ACTIVATED;
let log_IGNORING;
let log_sep_bot_FOR_caller_callee;
let log_sep_top_FOR_caller_callee;

/*}}}*/
//_______________ bg_content
//_______________ bg_csp
//_______________ bg_event
//_______________ bg_header
//_______________ bg_message
/*_ bg_page {{{*/
let bg_page_GET_CheckContentScript;
let bg_page_RUN_CheckContentScript;

/*}}}*/
//_______________ bg_settings
/*_ bg_store {{{*/
let bg_store_GET_url_key;
let bg_store_SAVE_items;

/*}}}*/
/*_ bg_tabs {{{*/
let bg_tabs_del_tabId_key;
let bg_tabs_get_tabId_key;
let bg_tabs_log_LAST_ACTIVATED_TAB;
let bg_tabs_set_tabId_key_val;

/*}}}*/
/*}}}*/
/*  _import {{{*/
let _import = function()
{
    let modules=[ log_js        ]; /*{{{*/

    [ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX        ] = log_js.LOG_BG_ARR;
    [ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb                  ] = log_js.LOG_XX_ARR;
    [ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX        ] = log_js.LOG_FG_ARR;

    [ SD0 ,SD1 ,SD2 ,SD3 ,SD4 ,SD5 ,SD6 ,SD7 ,SD8 ,SD9             ] = log_js.LOG_SDX;
    [ SAU, SAR, SAD, SAL, SHV, SYN, SBS                            ] = log_js.LOG_SXX;
    [ L_CHK, L_NEW, L_ARD, L_ARL, L_ARR, L_ARU, L_CLR, L_FNC, L_WRN] = log_js.LOG_CHR;

    [ SYMBOL_FUNCTION, SYMBOL_CHECK_MARK, SYMBOL_NOT_CHECKED, SYMBOL_CONSTRUCTION, SYMBOL_ROCKET, SYMBOL_ASSIGN, SYMBOL_GEAR, SYMBOL_THUMBS_UP] = log_js.LOG_SYM;

    li                              = log_js.log_modulename_key_val;
    get_callers                     = log_js.get_callers;                          li("log_js","get_callers",get_callers);
    log                             = log_js.log;                                  li("log_js","log",log);
    log_caller                      = log_js.log_caller;                           li("log_js","log_caller",log_caller);
    log_object                      = log_js.log_object;                           li("log_js","log_object",log_object);
    log_sep_bot                     = log_js.log_sep_bot;                          li("log_js","log_sep_bot",log_sep_bot);
    log_sep_top                     = log_js.log_sep_top;                          li("log_js","log_sep_top",log_sep_top);

    /*}}}*/
    modules.push( background_js ); /*{{{*/
    B_SCRIPT_ID                     = background_js.B_SCRIPT_ID;                   li("background_js","B_SCRIPT_ID",B_SCRIPT_ID);
    CHROME_SCHEME                   = background_js.CHROME_SCHEME;                 li("background_js","CHROME_SCHEME",CHROME_SCHEME);
    CHROME_SCHEME_REGEX             = background_js.CHROME_SCHEME_REGEX;           li("background_js","CHROME_SCHEME_REGEX",CHROME_SCHEME_REGEX);
    DOM_LOAD_ID                     = background_js.DOM_LOAD_ID;                   li("background_js","DOM_LOAD_ID",DOM_LOAD_ID);
    DOM_TOOLS_JS_ID                 = background_js.DOM_TOOLS_JS_ID;               li("background_js","DOM_TOOLS_JS_ID",DOM_TOOLS_JS_ID);
    LOG_MAP                         = background_js.LOG_MAP;                       li("background_js","LOG_MAP",LOG_MAP);
    MANIFEST_VERSION                = background_js.MANIFEST_VERSION;              li("background_js","MANIFEST_VERSION",MANIFEST_VERSION);

    log_ACTIVATED                   = background_js.log_ACTIVATED;                 li("background_js","log_ACTIVATED",log_ACTIVATED);
    log_IGNORING                    = background_js.log_IGNORING;                  li("background_js","log_IGNORING",log_IGNORING);
    log_sep_bot_FOR_caller_callee   = background_js.log_sep_bot_FOR_caller_callee; li("background_js","log_sep_bot_FOR_caller_callee",log_sep_bot_FOR_caller_callee);
    log_sep_top_FOR_caller_callee   = background_js.log_sep_top_FOR_caller_callee; li("background_js","log_sep_top_FOR_caller_callee",log_sep_top_FOR_caller_callee);

    /*}}}*/
    //_______________________ bg_content
    //_______________________ bg_csp
    //_______________________ bg_event
    //_______________________ bg_header
    //_______________________ bg_message
    modules.push( bg_page       ); /*{{{*/
    bg_page_GET_CheckContentScript       = bg_page.bg_page_GET_CheckContentScript;           li("bg_page","bg_page_GET_CheckContentScript",bg_page_GET_CheckContentScript);
    bg_page_RUN_CheckContentScript       = bg_page.bg_page_RUN_CheckContentScript;           li("bg_page","bg_page_RUN_CheckContentScript",bg_page_RUN_CheckContentScript);

    /*}}}*/
    //_______________________ bg_settings
    modules.push( bg_store      ); /*{{{*/
    bg_store_GET_url_key            = bg_store.bg_store_GET_url_key;               li("bg_store","bg_store_GET_url_key",bg_store_GET_url_key);
    bg_store_SAVE_items             = bg_store.bg_store_SAVE_items;                li("bg_store","bg_store_SAVE_items",bg_store_SAVE_items);

    /*}}}*/
    modules.push( bg_tabs       ); /*{{{*/
    bg_tabs_del_tabId_key           = bg_tabs.bg_tabs_del_tabId_key;               li("bg_tabs","bg_tabs_del_tabId_key",bg_tabs_del_tabId_key);
    bg_tabs_get_tabId_key           = bg_tabs.bg_tabs_get_tabId_key;               li("bg_tabs","bg_tabs_get_tabId_key",bg_tabs_get_tabId_key);
    bg_tabs_log_LAST_ACTIVATED_TAB  = bg_tabs.bg_tabs_log_LAST_ACTIVATED_TAB;      li("bg_tabs","bg_tabs_log_LAST_ACTIVATED_TAB",bg_tabs_log_LAST_ACTIVATED_TAB);
    bg_tabs_set_tabId_key_val       = bg_tabs.bg_tabs_set_tabId_key_val;           li("bg_tabs","bg_tabs_set_tabId_key_val",bg_tabs_set_tabId_key_val);

    /*}}}*/
    log_js.log_import(bg_content   , modules);
};
/*}}}*/
    setTimeout(_import,0);
/*}}}*/
/* LOGGING {{{*/
let BG_CONTENT_JS_LOG  = false;
/*_ logging {{{*/
let logging = function(state)
{
    if(state != undefined) {            BG_CONTENT_JS_LOG = state;
        if(state) bg_store_SAVE_items({ BG_CONTENT_JS_LOG           });
        else      bg_store_SAVE_items({ BG_CONTENT_JS_LOG: undefined});
    } return                            BG_CONTENT_JS_LOG;
};
/*}}}*/
/*_ log_this_get {{{*/
let log_this_get = function(_caller)
{
    switch(_caller) {
    case "bg_content_get_time_before_or_after"      : return BG_CONTENT_JS_LOG || LOG_MAP.B_LOG7_TABS || (LOG_MAP.B_LOG9_STAGE && LOG_MAP.B_LOG0_MORE);
    case "bg_content_get_time_elapsed_dhms"         : return BG_CONTENT_JS_LOG || LOG_MAP.B_LOG7_TABS || (LOG_MAP.B_LOG9_STAGE && LOG_MAP.B_LOG0_MORE);
    case "bg_content_scripts_get_inject_time"       : return BG_CONTENT_JS_LOG || LOG_MAP.B_LOG7_TABS || (LOG_MAP.B_LOG9_STAGE && LOG_MAP.B_LOG0_MORE);
    case "bg_content_scripts_get_tools_deployed"    : return BG_CONTENT_JS_LOG || LOG_MAP.B_LOG7_TABS || (LOG_MAP.B_LOG9_STAGE && LOG_MAP.B_LOG0_MORE);
    case "bg_content_scripts_get_tools_load_time"   : return BG_CONTENT_JS_LOG || LOG_MAP.B_LOG7_TABS || (LOG_MAP.B_LOG9_STAGE && LOG_MAP.B_LOG0_MORE);
    case "bg_content_scripts_loaded"                : return BG_CONTENT_JS_LOG || LOG_MAP.B_LOG7_TABS || (LOG_MAP.B_LOG9_STAGE && LOG_MAP.B_LOG0_MORE);
    case "bg_content_scripts_loaded_parse_message"  : return BG_CONTENT_JS_LOG || LOG_MAP.B_LOG7_TABS || (LOG_MAP.B_LOG9_STAGE && LOG_MAP.B_LOG0_MORE);
    case "bg_content_scripts_loaded_update"         : return BG_CONTENT_JS_LOG || LOG_MAP.B_LOG7_TABS || (LOG_MAP.B_LOG9_STAGE && LOG_MAP.B_LOG0_MORE);
    }

/*{{{*/
    log("%c"+BG_CONTENT_SCRIPT_ID +"%c log_this_get: missing switch %c"+_caller
        ,lbH+lb2                   ,lbL+lf2                        ,lbR+lf4    );

    return false;
/*}}}*/
};
/*}}}*/
/*}}}*/
/*{{{*/
const BG_LAUNCH_TIME   = parseInt(new Date().getTime() / 1000) % 86400; // seconds per day

const ACTION_UNDEFINED = "NO ACTION";
const ACTION_UPDATED   =   "UPDATED";
const ACTION_CACHED    =   "CACHED" ;

/*}}}*/

/*➔ bg_content_scripts_get_tools_deployed {{{*/
let bg_content_scripts_get_tools_deployed = function(message)
{
    let load_message
        =               message
        &&              message[DOM_TOOLS_JS_ID]
        &&   JSON.parse(message[DOM_TOOLS_JS_ID]);
//log_object("load_message", load_message);

    return load_message
        && load_message.t_load
    ;
};
/*}}}*/
/*➔ bg_content_scripts_loaded {{{*/
let bg_content_scripts_loaded = async function(tabId,ignore_cache=false)
{
if(!tabId) return false;
/*LOG{{{*/
let   caller = "bg_content_scripts_loaded";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    let content_scripts_reply_message = bg_tabs_get_tabId_key(tabId, "content_scripts_reply_message");
    let                     cs_status = bg_content_scripts_loaded_parse_message(tabId, content_scripts_reply_message);
    let log_tag = (cs_status.content_scripts_loaded==true     ) ?     "LOG5_TAG"
        :         (cs_status.content_scripts_loaded==undefined) ?     "LOG8_TAG"
        :                                                             "LOG7_TAG";
if( log_more) log_sep_top(caller+" "+cs_status.content_scripts_loaded, log_tag);

//( log_more) log_caller();
if( log_more) log("%c "+caller+"(tabId "+tabId+(ignore_cache ? ", ignore_cache":"")+")", lbb+lbH);
/*}}}*/
try {
    /* CLEAR CACHE .. OR USE CACHE {{{*/
    if(ignore_cache) {
        bg_tabs_del_tabId_key(tabId, "content_scripts_reply_message");

        content_scripts_reply_message = undefined;
    }
    let action_tag = ACTION_UNDEFINED;
    /*}}}*/
    /* [UPDATED] {{{*/
    if(!content_scripts_reply_message && tabId)
    {
        let   url = bg_tabs_get_tabId_key(tabId, "url");
        if(   url.includes( CHROME_SCHEME    )
           || url.includes("chrome-extension")
          )
        {
            log_IGNORING(url, caller);
        }
        else {
if( log_more) log_sep_top_FOR_caller_callee(caller,"bg_content_scripts_loaded_update");
            await                                   bg_content_scripts_loaded_update(tabId);
if( log_more) log_sep_bot_FOR_caller_callee(caller,"bg_content_scripts_loaded_update");

            /**/content_scripts_reply_message = bg_tabs_get_tabId_key(tabId, "content_scripts_reply_message");
            if( content_scripts_reply_message ) {
                bg_tabs_set_tabId_key_val(tabId, "url"                          , content_scripts_reply_message.url);
                bg_tabs_set_tabId_key_val(tabId, "content_scripts_reply_message", content_scripts_reply_message    );
                action_tag = ACTION_UPDATED;
            }
        }
    }
    /*}}}*/
    /* [CACHED] {{{*/
    else {
        action_tag = ACTION_CACHED;

    }
    let l_x
        = (action_tag == ACTION_CACHED ) ? 9
        : (action_tag == ACTION_UPDATED) ? 7
        :                                  2;
if( log_this) log("%c cs_status "+action_tag,lbB+lbH+lbX[l_x]);
if( log_more) log_object("content_scripts_reply_message", content_scripts_reply_message, lb0);
    /*}}}*/
    /* [cs_status] {{{*/
    cs_status = bg_content_scripts_loaded_parse_message(tabId, content_scripts_reply_message);

//( log_more) log_object("TIMINGS: BG_LAUNCH_TIME .. content_scripts .. dom_tools",
if( log_more) log_object(    "cs_status.content_scripts_loaded : "+!!cs_status.content_scripts_loaded
                        ,{ "!!cs_status.content_scripts_loaded":   !!cs_status.content_scripts_loaded
                         ,              content_scripts_loaded :     cs_status.content_scripts_loaded
                         ,           CONTENT_SCRIPTS :     bg_content_get_time_before_or_after(cs_status.c_s_inject_time, BG_LAUNCH_TIME)
                         ,                     TOOLS :     bg_content_get_time_before_or_after(cs_status.tools_load_time, BG_LAUNCH_TIME)
                         ,            BG_LAUNCH_TIME
                         ,           c_s_inject_time :        cs_status.c_s_inject_time
                         ,           tools_load_time :        cs_status.tools_load_time
                         }, lf7);


//if( log_more) action_tag
//    += " [background_script "+b_seconds_toString(BG_LAUNCH_TIME                )+"]"
//    +  " [interval "         +b_get_time_elapsed(BG_LAUNCH_TIME, cs_status.c_s_inject_time)+"]"
//    +  " [content_script "   +b_seconds_toString(cs_status.c_s_inject_time                )+"]";

    /*}}}*/
/*{{{*/
if( log_this)
{
    let   url           = bg_tabs_get_tabId_key(tabId, "url");
    let storage_url_key = bg_store_GET_url_key(         url );

    let sdx = ignore_cache                                 ? SD1:SD6;
    let lfc = ignore_cache                                 ? lf1:lf6;
//  let lbc = ignore_cache                                 ? lb1:lb6;
    let lba = (action_tag.includes("CACHED")             ) ? lb9:lb3;
    let lbt = (BG_LAUNCH_TIME < cs_status.c_s_inject_time) ? lb5:lb2;
//  let lfr = cs_status.content_scripts_loaded             ? lf5:lf2;

    log("%c"+(sdx)+"%c "+caller+"%c"+action_tag+"%c CONTENT-SCRIPT INJECTION: "+bg_content_get_time_before_or_after(cs_status.c_s_inject_time, BG_LAUNCH_TIME)+"%c"+(storage_url_key || "No URL")
        ,lbB+lfc   ,lbL+lfc    ,lbC+lba        ,lbC+lbt                                                                                    ,lbR                              );
}
/*}}}*/
    /* DISCARD FAILING RESULT {{{*/
    if(!cs_status.content_scripts_loaded )
        bg_tabs_del_tabId_key(tabId, "content_scripts_reply_message");

    return cs_status.content_scripts_loaded;
    /*}}}*/
} finally {
/*{{{*/
    log_tag     = (cs_status.content_scripts_loaded==true     ) ?     "LOG5_TAG"
        :         (cs_status.content_scripts_loaded==undefined) ?     "LOG8_TAG"
        :                                                             "LOG7_TAG";
if( log_more) log_sep_bot(caller+" "+cs_status.content_scripts_loaded, log_tag);
/*}}}*/
}
};
/*}}}*/
/*➔ bg_content_scripts_loaded_parse_message {{{*/
let bg_content_scripts_loaded_parse_message = function(tabId,message)
{
    let c_s_inject_time                      = bg_content_scripts_get_inject_time    (message);
    let tools_load_time                      = bg_content_scripts_get_tools_load_time(message);
    let content_scripts_loaded
        = (c_s_inject_time > BG_LAUNCH_TIME) ? bg_content_get_time_before_or_after(c_s_inject_time, BG_LAUNCH_TIME)
        : (tools_load_time > BG_LAUNCH_TIME) ? bg_content_get_time_before_or_after(tools_load_time, BG_LAUNCH_TIME)
        : (tools_load_time                 ) ? "tools_load_time=["+       tools_load_time+"]"
        :                                                                 false
    ;

    return { c_s_inject_time
           , tools_load_time
           , content_scripts_loaded
    };
};
/*}}}*/

/*_ bg_content_scripts_get_inject_time {{{*/
let bg_content_scripts_get_inject_time = function(message)
{
    let load_message
        =               message
        &&              message[DOM_LOAD_ID]
        &&   JSON.parse(message[DOM_LOAD_ID]);
//log_object("load_message", load_message);

    return load_message
        && load_message.sequence_number
    ;
};
/*}}}*/
/*_ bg_content_scripts_get_tools_load_time {{{*/
let bg_content_scripts_get_tools_load_time = function(message)
{
    let load_message
        =               message
        &&              message[DOM_TOOLS_JS_ID]
        &&   JSON.parse(message[DOM_TOOLS_JS_ID]);
//log_object("load_message", load_message);

    return load_message
        && load_message.sequence_number
    ;
};
/*}}}*/
/*_ bg_content_scripts_loaded_update {{{*/
let bg_content_scripts_loaded_update = async function(tabId)
{
/*LOG{{{*/
let   caller = "bg_content_scripts_loaded_update";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if(!chrome.scripting) { log("%c"+SYMBOL_CONSTRUCTION+" chrome.scripting is undefined in "+caller, lbb+lbH+lf1); return; }

if( log_more) log("%c "+caller+"(tabId "+tabId+")", lbb+lbH+lf7);
/*}}}*/
    /* MANIFEST_VERSION=="v3" {{{*/
    if(MANIFEST_VERSION=="v3")
    {
if( log_more) log("%c "+caller+": (MANIFEST_VERSION=='v3'): ..... chrome.scripting.executeScript:", lbH+lf7);
if( log_more) log_sep_top_FOR_caller_callee(caller,"scripting.executeScript bg_page_RUN_CheckContentScript");

        let await_result =
                await chrome.scripting
                .executeScript( { target : { tabId }
                                ,   func : bg_page_RUN_CheckContentScript
                                ,   args : [ { tabId, DOM_LOAD_ID, DOM_TOOLS_JS_ID, B_SCRIPT_ID, log_this, log_more } ]
                })
                .then((array_of_any) => {
if( log_more) log("%c "+caller+": (MANIFEST_VERSION=='v3'): ..... THEN", lbH+lf7);
if( log_more) log_object("array_of_any", array_of_any);

                    let content_scripts_reply_message = array_of_any ? array_of_any[0].result : undefined;
                    if( content_scripts_reply_message == undefined)
                        bg_tabs_del_tabId_key    (tabId, "content_scripts_reply_message");
                    else
                        bg_tabs_set_tabId_key_val(tabId, "content_scripts_reply_message", content_scripts_reply_message);

                    return { content_scripts_reply_message };
                })
/*{{{
                .then((second_then_arg) => {
if( log_more) log_object("second_then_arg", second_then_arg);

if( log_more) log_TAB_tabId_callee_callers_bot(tabId, caller, log_js.get_callers_bot());
                    return { second_then_return: "second .then return", ...second_then_arg };
                })
                .then((third_then_arg) => {
if( log_more) log_object("third_then_arg", third_then_arg);

                  //throw new Error("THIRD .then thrown ERROR");

                    return { third_then_return: "third .then return", ...third_then_arg };
                })
}}}*/
                .catch((error) => {
if( log_more) log_object("catch_error", error);
                    if( error.message.includes(CHROME_SCHEME) )
                    {
                        let url = error.message.replace(CHROME_SCHEME_REGEX, CHROME_SCHEME);
                        log_IGNORING(url, caller);
                    }
                    else {
                        log("%c "+caller+":\n%c"+error.message, lbC+lf2, lbC+lf2);
                        bg_tabs_log_LAST_ACTIVATED_TAB(caller+" ERROR", get_callers());
                    }
                    log_caller();

                    bg_tabs_del_tabId_key(tabId, "content_scripts_reply_message");

                    return { content_scripts_reply_message: undefined , ...error };
                });
if( log_more) log_object("await_result", await_result);
if( log_more) log("%c "+caller+": (MANIFEST_VERSION=='v3'): ..... DONE", lbH+lf7);
if( log_more) log_caller();

if( log_more) log_sep_bot_FOR_caller_callee(caller,"scripting.executeScript bg_page_RUN_CheckContentScript");
    }
    /*}}}*/
    /* TABS SCRIPTING {{{*/
    else {
if( log_more) log("%c "+caller+": (MANIFEST_VERSION=='v2'): ..... chrome.tabs.executeScript:", lbH+lf2);
        try {
            chrome.tabs
                .executeScript( tabId
                                , { code : bg_page_GET_CheckContentScript() }
                                , function(array_of_any) {
                                    let content_scripts_reply_message  = array_of_any ? array_of_any[0] : undefined;
                                    if( content_scripts_reply_message == undefined)
                                        bg_tabs_del_tabId_key    (tabId, "content_scripts_reply_message");
                                    else
                                        bg_tabs_set_tabId_key_val(tabId, "content_scripts_reply_message", content_scripts_reply_message);
                                });
        } catch(error) {
            log("%c "+caller+":\n%c"+error.message, lbC+lf2, lbC+lf2);
            bg_tabs_log_LAST_ACTIVATED_TAB(caller+" ERROR", get_callers());
        }
    }
    /*}}}*/
    let content_scripts_reply_message = bg_tabs_get_tabId_key(tabId, "content_scripts_reply_message");
if(log_more) log_object("content_scripts_reply_message", content_scripts_reply_message, lf7);
};
/*}}}*/
/*_ bg_content_get_time_before_or_after {{{*/
/*{{{*/
const M_SEC = 60;         // seonds per minute
const H_SEC = 60 * M_SEC; // seonds per hour
const D_SEC = 24 * H_SEC; // seonds per day
/*}}}*/
let bg_content_get_time_before_or_after = function(sec_from, sec_to=0)
{
//log("isNaN(sec_from): "+isNaN(sec_from));
//log("isNaN(sec_to  ): "+isNaN(sec_to  ));

    if(isNaN(sec_from)) return "NOT INJECTED";

    let ms_from = Math.floor(sec_from) * 1000;
    let ms_to   = Math.floor(sec_to  ) * 1000;

    let s       = ((ms_to > ms_from) ? (ms_to - ms_from) : (ms_from - ms_to)) / 1000;

    let d       = Math.floor(s / D_SEC); if(s >= D_SEC) s -= d * D_SEC; // consume days    .. remains hours
    let h       = Math.floor(s / H_SEC); if(s >= H_SEC) s -= h * H_SEC; // consume hours   .. remains minutes
    let m       = Math.floor(s / M_SEC); if(s >= M_SEC) s -= m * M_SEC; // consume minutes .. remains seconds

    if(h==1) { h=0; m+=60; }                    // "1 min" .. "119 min"

    let before_or_after = (ms_from < ms_to) ? " EARLIER" : " LATER";
    return bg_content_get_time_elapsed_dhms(d, h, m, s)+ before_or_after;
};
/*}}}*/
/*_ bg_content_get_time_elapsed_dhms {{{*/
let bg_content_get_time_elapsed_dhms = function(d,h,m,s)
{
    let sb = "";

    if     (d > 730) sb += Math.floor(d / 365)+" years " ;
    else if(d > 365) sb += Math.floor(d / 365)+" year "  ;

    else if(d >  60) sb += Math.floor(d / 30 )+" months ";
    else if(d >  30) sb += Math.floor(d / 30 )+" month  ";

    else if(d >   1) sb += Math.floor(d      )+" days "  ;
    else if(d >   0) sb += Math.floor(d      )+" day "   ;

    else if(h >   1) sb += Math.floor(h      )+" hours " ;
    else if(h >   0) sb += Math.floor(h      )+" hour "  ;

    else if(m >   0) sb += Math.floor(m      )+" min "   ;

    else             sb += Math.floor(s      )+" sec "   ;

    return sb.trim();
};
/*}}}*/

    // ┌────────────────────────────────────────────────────────────────────────┐
    // │ CONTENT PAGE SCRIPTING ● RELOADING    ● chrome.scripting.executeScript │
    // └────────────────────────────────────────────────────────────────────────┘
    /*_ reload {{{*/
//  let reload_expecting_url;
    let bg_content_scripts_reload = function(message)
    {
        // ┌────────────────────────────────────────────────────────────────────┐
        // │ RELOAD POPUP COMMAND            ● popup.js ● p_send_reload_message │
        // └────────────────────────────────────────────────────────────────────┘
        let { method="replace", tabId, url="", logging } = message; /* eslint-disable-line no-shadow */

        if(!url && (method != "reload")) method = "reload"; /* assign and replace needs an url */

        if(logging)
        {
            log(BG_CONTENT_SCRIPT_ID+" ● LOGGING location."+method+" COMMAND IN Content-Page's Devtools ●");
        }
        else {
            log(BG_CONTENT_SCRIPT_ID+" ● RELOADING [tabId "+tabId+"] ( location."+method+" ):");

            if(url) {
                log(BG_CONTENT_SCRIPT_ID+" ● expecting  URL ▼");
                log(BG_CONTENT_SCRIPT_ID+" ● ............."+   url);
            }
//          reload_expecting_url = url;
        }

        // ┌───────────────────────────────────────────────────────────────┐
        // │ ● DEFINE CONTENT PAGE RELOAD SCRIPT                           │
        // ├───────────────────────────────────────────────────────────────┤
        // ├ trying to get OPERA to forget its cache ● NOT WORKING SO FAR  │
        // ├───────────────────────────────────────────────────────────────┤
        // ├ document.location.reload (true) ● reload no-cache             │
        // ├ document.location.assign ( url) ● add to history              │
        // ├ document.location.replace( url) ● ... or not                  │
        // └───────────────────────────────────────────────────────────────┘
        chrome.scripting.executeScript( { target: { tabId }
                                        ,   func: reload_executeScript_func
                                        ,   args: [ url, method, logging ]
        })
        .catch((error) => { console.warn(error); chrome.runtime.sendMessage({ error: error.message });});
    };
    /*}}}*/
    /*_ reload_executeScript_func {{{*/
    let reload_executeScript_func = function(url,method,logging) /* eslint-disable-line no-shadow */
    {
        // ┌───────────────────────────────────────────────────────────────────┐
        // │ ● just log content-script command in Devtools console  ● popup.js │
        // └───────────────────────────────────────────────────────────────────┘
        if( logging ) {
            const STYLE = "font-size:150%; border: 3px orange solid; border-radius:1em; padding:0 1em;";
            switch(method) {
            case "reload"  : console.log("%c document.location.reload (   true  );", STYLE); break;
            case "assign"  : console.log("%c document.location.assign ('"+url+"');", STYLE); break;
            case "replace" : console.log("%c document.location.replace('"+url+"');", STYLE); break;
            }
        }
        // ┌───────────────────────────────────────────────────────────────────┐
        // │ ● or execute  content-script command                              │
        // └───────────────────────────────────────────────────────────────────┘
        else {
            switch(method) {
            case "reload"  :                 document.location.reload (   true  );           break;
            case "assign"  :                 document.location.assign (   url   );           break;
            case "replace" :                 document.location.replace(   url   );           break;
            }
        }
    };
    /*}}}*/

/*➔ EXPORT {{{*/
    return {  name : "bg_content"
        ,             bg_content_scripts_get_tools_deployed
        ,             bg_content_scripts_loaded
        ,             bg_content_scripts_loaded_parse_message
        ,             bg_content_scripts_reload
        ,             logging
    };
/*}}}*/
}());

