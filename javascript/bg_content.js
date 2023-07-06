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
const BG_CONTENT_SCRIPT_TAG =  BG_CONTENT_SCRIPT_ID +" (230705:02h:17)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
let bg_content  = (function() {
"use strict";

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ CONTENT SCRIPT                                   B_LOG7_TABS B_LOG9_STAGE │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
"● javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_header.js
:e javascript/bg_message.js
:e javascript/bg_page.js
:e javascript/bg_settings.js
:e javascript/bg_store.js
:e javascript/bg_tabs.js
/* └─────────────────────────────┘*/
/* IMPORT {{{*/
/* eslint-disable no-unused-vars */
/*_ log_js {{{*/
let   LF;

let   lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let   lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let   lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;

let   SD0 ,SD1 ,SD2 ,SD3 ,SD4 ,SD5 ,SD6 ,SD7 ,SD8 ,SD9;
let   SAU, SAR, SAD, SAL, SHV, SYN, SBS;
let   L_CHK, L_NEW, L_ARD, L_ARL, L_ARR, L_ARU, L_CLR, L_FNC, L_WRN;
let   SYMBOL_FUNCTION, SYMBOL_CHECK_MARK, SYMBOL_NOT_CHECKED, SYMBOL_CONSTRUCTION, SYMBOL_ROCKET, SYMBOL_ASSIGN, SYMBOL_GEAR, SYMBOL_THUMBS_UP;

let   clear
    , ellipsis
    , get_callers
    , get_ex_stack_line_match
    , log
    , logBIG
    , logXXX
    , log_CSP
    , log_SYN
    , log_caller
    , log_console_clear
    , log_json
    , log_key_val
    , log_key_val_group
    , log_members
    , log_object
    , log_object_val_format
    , log_pause
    , log_permission
    , log_sep_bot
    , log_sep_top
    , mPadEnd
    , mPadStart
    , parse_ex_stack_FUNC_FILE_LINE_COL
    , pause
    , reload
    , strip_CR_LF
    , strip_QUOTE
    , truncate
;

/*}}}*/
/*_ background_js {{{*/
let B_ON_HEADER_RECEIVED;
let B_SCRIPT_ID;
let CHROME_SCHEME;
let CHROME_SCHEME_REGEX;
let DOM_LOAD_ID;
let DOM_TOOLS_JS_ID;
let LOG_MAP;
let MANIFEST_VERSION;

let b_callback_args_delay_caller;
let b_check_manifest;
let b_is_paused;
let b_onHeader1_reload;
let b_storage_sync_set;
let bg_tabs_get_last_activated_tabId;
let bg_tabs_sendMessage;
let bg_tabs_set_last_activated_tabId;
let get_url_domain;
let is_paused;
let log_ACTIVATED;
let log_IGNORING;
let log_STORAGE;
let log_TAB_HANDLERS_CALLS;
let log_get_caller_tag_FOR_key_val_caller;
let log_sep_bot_FOR_caller_callee;
let log_sep_top_FOR_caller_callee;

/*}}}*/
//______________ bg_content
//______________ bg_csp
//______________ bg_header
//______________ bg_message
/*_ bg_page {{{*/
let TOOLS4_DEPLOYED;
let b_POPUP_pageAction;
let b_page0_REPORT_lastError;
let b_page0_STORE_lastError;
let b_page1_RELOAD;
let b_page1_RELOAD_GET_script;
let b_page1_RELOAD_RUN_script;
let b_page1_RELOAD_if_required;
let b_page2_FETCH_GET_script;
let b_page2_FETCH_RUN_script;

/*}}}*/
//______________ bg_settings
/*_ bg_store {{{*/
let bg_store_DEL_url_settings;
let bg_store_GET_url_domain;
let bg_store_GET_url_key;
let bg_store_LOAD_items;
let bg_store_SAVE_items;
let bg_store_SET_url_settings;

/*}}}*/
/*_ bg_tabs {{{*/
let bg_tabs_set_tabId_key_items;
let bg_tabs_set_tabId_key_val;

let bg_tabs_get_tabId_key;
let bg_tabs_get_tabId;

let bg_tabs_del_tabId;
let bg_tabs_del_tabId_key;

let bg_tabs_url_settings_from_cached;
let bg_tabs_url_settings_from_others;

let bg_tabs_log_LAST_ACTIVATED_TAB;
let bg_tabs_log_TABS_MAP;

/*}}}*/
/* bg_content_import {{{*/
let bg_content_import = function()
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

    clear                               = log_js.clear;
    ellipsis                            = log_js.ellipsis;
    get_callers                         = log_js.get_callers;
    get_ex_stack_line_match             = log_js.get_ex_stack_line_match;
    log                                 = log_js.log;
    logBIG                              = log_js.logBIG;
    logXXX                              = log_js.logXXX;
    log_CSP                             = log_js.log_CSP;
    log_SYN                             = log_js.log_SYN;
    log_caller                          = log_js.log_caller;
    log_console_clear                   = log_js.log_console_clear;
    log_json                            = log_js.log_json;
    log_key_val                         = log_js.log_key_val;
    log_key_val_group                   = log_js.log_key_val_group;
    log_members                         = log_js.log_members;
    log_object                          = log_js.log_object;
    log_object_val_format               = log_js.log_object_val_format;
    log_pause                           = log_js.log_pause;
    log_permission                      = log_js.log_permission;
    log_sep_bot                         = log_js.log_sep_bot;
    log_sep_top                         = log_js.log_sep_top;
    mPadEnd                             = log_js.mPadEnd;
    mPadStart                           = log_js.mPadStart;
    parse_ex_stack_FUNC_FILE_LINE_COL   = log_js.parse_ex_stack_FUNC_FILE_LINE_COL;
    pause                               = log_js.pause;
    reload                              = log_js.reload;
    strip_CR_LF                         = log_js.strip_CR_LF;
    strip_QUOTE                         = log_js.strip_QUOTE;
    truncate                            = log_js.truncate;

    /*}}}*/
    /*_ background_js {{{*/
    B_ON_HEADER_RECEIVED                  = background_js.B_ON_HEADER_RECEIVED;
    B_SCRIPT_ID                           = background_js.B_SCRIPT_ID;
    CHROME_SCHEME                         = background_js.CHROME_SCHEME;
    CHROME_SCHEME_REGEX                   = background_js.CHROME_SCHEME_REGEX;
    DOM_LOAD_ID                           = background_js.DOM_LOAD_ID;
    DOM_TOOLS_JS_ID                       = background_js.DOM_TOOLS_JS_ID;
    LOG_MAP                               = background_js.LOG_MAP;
    MANIFEST_VERSION                      = background_js.MANIFEST_VERSION;

    b_callback_args_delay_caller          = background_js.b_callback_args_delay_caller;
    b_check_manifest                      = background_js.b_check_manifest;
    b_content_scripts_get_tools_deployed  = background_js.b_content_scripts_get_tools_deployed;
    b_is_paused                           = background_js.b_is_paused;
    b_onHeader1_reload                    = background_js.b_onHeader1_reload;
    b_storage_sync_set                    = background_js.b_storage_sync_set;
    bg_tabs_get_last_activated_tabId      = background_js.bg_tabs_get_last_activated_tabId;
    bg_tabs_sendMessage                   = background_js.bg_tabs_sendMessage;
    bg_tabs_set_last_activated_tabId      = background_js.bg_tabs_set_last_activated_tabId;
    get_url_domain                        = background_js.get_url_domain;
    is_paused                             = background_js.is_paused;
    log_ACTIVATED                         = background_js.log_ACTIVATED;
    log_IGNORING                          = background_js.log_IGNORING;
    log_STORAGE                           = background_js.log_STORAGE;
    log_TAB_HANDLERS_CALLS                = background_js.log_TAB_HANDLERS_CALLS;
    log_get_caller_tag_FOR_key_val_caller = background_js.log_get_caller_tag_FOR_key_val_caller;
    log_sep_bot_FOR_caller_callee         = background_js.log_sep_bot_FOR_caller_callee;
    log_sep_top_FOR_caller_callee         = background_js.log_sep_top_FOR_caller_callee;

    /*}}}*/
    //___________ bg_content
    //___________ bg_csp
    //___________ bg_header
    //___________ bg_message
    /*_ bg_page {{{*/
    TOOLS4_DEPLOYED             = bg_page.TOOLS4_DEPLOYED;
    b_POPUP_pageAction          = bg_page.b_POPUP_pageAction;
    b_page0_REPORT_lastError    = bg_page.b_page0_REPORT_lastError;
    b_page0_STORE_lastError     = bg_page.b_page0_STORE_lastError;
    b_page1_RELOAD              = bg_page.b_page1_RELOAD;
    b_page1_RELOAD_GET_script   = bg_page.b_page1_RELOAD_GET_script;
    b_page1_RELOAD_RUN_script   = bg_page.b_page1_RELOAD_RUN_script;
    b_page1_RELOAD_if_required  = bg_page.b_page1_RELOAD_if_required;
    b_page2_FETCH_GET_script    = bg_page.b_page2_FETCH_GET_script;
    b_page2_FETCH_RUN_script    = bg_page.b_page2_FETCH_RUN_script;

    /*}}}*/
    //___________ bg_settings
    /*_ bg_store {{{*/
    bg_store_DEL_url_settings = bg_store.bg_store_DEL_url_settings;
    bg_store_GET_url_domain   = bg_store.bg_store_GET_url_domain;
    bg_store_GET_url_key      = bg_store.bg_store_GET_url_key;
    bg_store_LOAD_items       = bg_store.bg_store_LOAD_items;
    bg_store_SAVE_items       = bg_store.bg_store_SAVE_items;
    bg_store_SET_url_settings = bg_store.bg_store_SET_url_settings;

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

    bg_tabs_log_LAST_ACTIVATED_TAB   = bg_tabs.bg_tabs_log_LAST_ACTIVATED_TAB;
    bg_tabs_log_TABS_MAP             = bg_tabs.bg_tabs_log_TABS_MAP;

    /*}}}*/
//................._import %c log_js %c background_js %c bg_content %c bg_csp %c bg_header %c bg_message %c bg_page %c bg_settings %c bg_store %c bg_tabs
log("%c  background_import %c log_js %c background_js %c "+"●●●●●●● %c ______ %c _________ %c __________ %c bg_page %c ___________ %c bg_store %c bg_tabs"
    ,lbH+lb2              ,lf0      ,lf1             ,lbH+lf2      ,lf3      ,lf4         ,lf5          ,lf6       ,lf7           ,lf8        ,lf9        );
};
/*}}}*/
/* eslint-enable no-unused-vars */
    setTimeout(bg_content_import,0);
/*}}}*/

/*{{{*/
const BG_LAUNCH_TIME   = parseInt(new Date().getTime() / 1000) % 86400; // seconds per day

const ACTION_UNDEFINED = "UNDEFINED";
const ACTION_UPDATED   = "UPDATED";
const ACTION_CACHED    = "CACHED" ;

/*}}}*/
/*_ b_content_scripts_loaded {{{*/
let b_content_scripts_loaded = async function(tabId,ignore_cache=false)
{
if(!tabId) return false;
/*LOG{{{*/
let   caller = "b_content_scripts_loaded";
let log_this = LOG_MAP.B_LOG7_TABS || (LOG_MAP.B_LOG9_STAGE && LOG_MAP.B_LOG0_MORE);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    let content_scripts_reply_message = bg_tabs_get_tabId_key(tabId, "content_scripts_reply_message");
    let                     cs_status = b_content_scripts_loaded_parse_message(tabId, content_scripts_reply_message);
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
        if(   url.startsWith( CHROME_SCHEME    )
           || url.startsWith("chrome-extension")
          )
        {
            log_IGNORING(url, caller);
        }
        else {
if( log_more) log_sep_top_FOR_caller_callee(caller,"b_content_scripts_loaded_update");
            await                     b_content_scripts_loaded_update(tabId);
if( log_more) log_sep_bot_FOR_caller_callee(caller,"b_content_scripts_loaded_update");

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
if( log_more) log("%c"+action_tag,lbB+lbH+lbX[l_x]);
if( log_more) log_object("content_scripts_reply_message", content_scripts_reply_message, lb0);
    /*}}}*/
    /* [cs_status] {{{*/
    cs_status = b_content_scripts_loaded_parse_message(tabId, content_scripts_reply_message);

//( log_more) log_object("TIMINGS: BG_LAUNCH_TIME .. content_scripts .. dom_tools",
if( log_more) log_object(    "cs_status.content_scripts_loaded : "+!!cs_status.content_scripts_loaded
                        ,{ "!!cs_status.content_scripts_loaded":   !!cs_status.content_scripts_loaded
                         ,              content_scripts_loaded :     cs_status.content_scripts_loaded
                         ,           CONTENT_SCRIPTS :     b_get_time_before_or_after(cs_status.c_s_inject_time, BG_LAUNCH_TIME)
                         ,                     TOOLS :     b_get_time_before_or_after(cs_status.tools_load_time, BG_LAUNCH_TIME)
                         ,            BG_LAUNCH_TIME
                         ,           c_s_inject_time :        cs_status.c_s_inject_time
                         ,           tools_load_time :        cs_status.tools_load_time
                         }, lf7);


//if( log_ACTIVATED()) action_tag
//    += " [background_script "+b_seconds_toString(BG_LAUNCH_TIME                )+"]"
//    +  " [interval "         +b_get_time_elapsed(BG_LAUNCH_TIME, cs_status.c_s_inject_time)+"]"
//    +  " [content_script "   +b_seconds_toString(cs_status.c_s_inject_time                )+"]";

    /*}}}*/
/*{{{*/
if( log_ACTIVATED() )
{
    let   url           = bg_tabs_get_tabId_key(tabId, "url");
    let storage_url_key = bg_store_GET_url_key(         url );

    let sdx = ignore_cache                                 ? SD1:SD6;
    let lfc = ignore_cache                                 ? lf1:lf6;
//  let lbc = ignore_cache                                 ? lb1:lb6;
    let lba = (action_tag.includes("CACHED")             ) ? lb9:lb3;
    let lbt = (BG_LAUNCH_TIME < cs_status.c_s_inject_time) ? lb5:lb2;
//  let lfr = cs_status.content_scripts_loaded             ? lf5:lf2;

    log("%c"+(sdx)+"%c "+caller+"%c"+action_tag+"%c CONTENT-SCRIPT INJECTION: "+b_get_time_before_or_after(cs_status.c_s_inject_time, BG_LAUNCH_TIME)+"%c"+(storage_url_key || "No URL")
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
/*_ b_content_scripts_loaded_parse_message {{{*/
let b_content_scripts_loaded_parse_message = function(tabId,message)
{
    let c_s_inject_time                      = b_content_scripts_get_inject_time    (message);
    let tools_load_time                      = b_content_scripts_get_tools_load_time(message);
    let content_scripts_loaded
        = (c_s_inject_time > BG_LAUNCH_TIME) ? b_get_time_before_or_after(c_s_inject_time, BG_LAUNCH_TIME)
        : (tools_load_time > BG_LAUNCH_TIME) ? b_get_time_before_or_after(tools_load_time, BG_LAUNCH_TIME)
        : (tools_load_time                 ) ? "tools_load_time=["+       tools_load_time+"]"
        :                                                                 false
    ;

    return { c_s_inject_time
           , tools_load_time
           , content_scripts_loaded
    };
};
/*}}}*/
/*_ b_content_scripts_loaded_update {{{*/
let b_content_scripts_loaded_update = async function(tabId)
{
/*LOG{{{*/
let   caller = "b_content_scripts_loaded_update";
let log_this = LOG_MAP.B_LOG7_TABS || (LOG_MAP.B_LOG9_STAGE && LOG_MAP.B_LOG0_MORE);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log("%c "+caller+"(tabId "+tabId+")", lbb+lbH+lf7);
/*}}}*/
    /* MANIFEST_VERSION=="V3" {{{*/
    if(MANIFEST_VERSION=="V3")
    {
if( log_more) log("%c "+caller+": (MANIFEST_VERSION=='V3'): ..... chrome.scripting.executeScript:", lbH+lf7);
if( log_more) log_sep_top_FOR_caller_callee(caller,"scripting.executeScript b_page2_FETCH_RUN_script");

        let await_result =
                await chrome.scripting
                .executeScript( { target : { tabId }
                                ,   func : b_page2_FETCH_RUN_script
                                ,   args : [ { tabId, DOM_LOAD_ID, DOM_TOOLS_JS_ID, B_SCRIPT_ID, log_this, log_more } ]
                })
                .then((array_of_any) => {
if( log_more) log("%c "+caller+": (MANIFEST_VERSION=='V3'): ..... THEN", lbH+lf7);
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
if( log_more) log("%c "+caller+": (MANIFEST_VERSION=='V3'): ..... DONE", lbH+lf7);
if( log_more) log_caller();

if( log_more) log_sep_bot_FOR_caller_callee(caller,"scripting.executeScript b_page2_FETCH_RUN_script");
    }
    /*}}}*/
    /* TABS SCRIPTING {{{*/
    else {
if( log_more) log("%c "+caller+": (MANIFEST_VERSION=='V2'): ..... chrome.tabs.executeScript:", lbH+lf2);
        try {
            chrome.tabs
                .executeScript( tabId
                                , { code : b_page2_FETCH_GET_script() }
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
/*_ b_content_scripts_get_inject_time {{{*/
let b_content_scripts_get_inject_time = function(message)
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
/*_ b_content_scripts_get_tools_load_time {{{*/
let b_content_scripts_get_tools_load_time = function(message)
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
/*_ b_content_scripts_get_tools_deployed {{{*/
let b_content_scripts_get_tools_deployed = function(message)
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

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ UTIL                                                                      │
// └───────────────────────────────────────────────────────────────────────────┘
/*_ b_get_time_before_or_after {{{*/
/*{{{*/
const M_SEC = 60;         // seonds per minute
const H_SEC = 60 * M_SEC; // seonds per hour
const D_SEC = 24 * H_SEC; // seonds per day
/*}}}*/

/*_ b_get_time_before_or_after {{{*/
let b_get_time_before_or_after = function(sec_from, sec_to=0)
{
//log("isNaN(sec_from): "+isNaN(sec_from));
//log("isNaN(sec_to  ): "+isNaN(sec_to  ));

    if(isNaN(sec_from)) return "NOT INJECTED";

    let ms_from = Math.floor(sec_from) * 1000;
    let ms_to   = Math.floor(sec_to  ) * 1000;

    let s       = (((ms_to > ms_from) ? (ms_to - ms_from) : (ms_from - ms_to)) / 1000);

    let d       =  Math.floor(s / D_SEC); if(s >= D_SEC) s -= d * D_SEC; // consume days    .. remains hours
    let h       =  Math.floor(s / H_SEC); if(s >= H_SEC) s -= h * H_SEC; // consume hours   .. remains minutes
    let m       =  Math.floor(s / M_SEC); if(s >= M_SEC) s -= m * H_SEC; // consume minutes .. remains seconds

    if(h==1) { h=0; m+=60; }                    // "1 min" .. "119 min"

    let before_or_after = (ms_from < ms_to) ? " EARLIER" : " LATER";
    return b_get_time_elapsed_dhms(d, h, m, s)+ before_or_after;
};
/*}}}*/
/*_ b_get_time_elapsed_dhms {{{*/
let b_get_time_elapsed_dhms = function(d,h,m,s)
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
/*}}}*/
/*➔ EXPORT {{{*/
    return {  name : "bg_content"
        , b_content_scripts_get_inject_time
        , b_content_scripts_get_tools_deployed
        , b_content_scripts_get_tools_load_time
        , b_content_scripts_loaded
        , b_content_scripts_loaded_parse_message
        , b_content_scripts_loaded_update
    };
/*}}}*/
}());
