// ┌───────────────────────────────────────────────────────────────────────────┐
// │ bg_page.js ............................................. BACKGROUND SCRIPT │
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
/* globals  bg_csp                    */
/* globals  bg_message                */
/* exported bg_page                   */
/* globals  bg_store                  */
/* globals  bg_tabs                   */

/* eslint-enable  no-redeclare        */

const BG_PAGE_SCRIPT_ID  = "bg_page";
const BG_PAGE_SCRIPT_TAG =  BG_PAGE_SCRIPT_ID +" (231005:19h:53)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
// ┌───────────────────────────────────────────────────────────────────────────┐
// │ PAGE ACTION                                                   B_LOG7_TABS │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_event.js
:e javascript/bg_header.js
:e javascript/bg_message.js
"● javascript/bg_page.js        " DEBUG_OPERA
:e javascript/bg_settings.js
:e javascript/bg_store.js
:e javascript/bg_tabs.js        " DEBUG_OPERA
:e javascript/options.js
:e javascript/popup.js
:e javascript/worker.js
/* └─────────────────────────────┘*/
let bg_page  = (function() {
"use strict";
const DEBUG_OPERA = false;
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

let   ellipsis
    , log
    , log_caller
    , log_console_clear
    , log_object
    , log_sep_bot
    , log_sep_top
    , mPadEnd
    , mPadStart
    , strip_CR_LF
    , li
;

/*}}}*/
/*_ background_js {{{*/
let B_SCRIPT_ID;
let CHROME_SCHEME;
let DOM_LOAD_ID;
let DOM_TOOLS_JS_ID;
let LOG_MAP;
let MANIFEST_VERSION;

let log_ACTIVATED;
/*}}}*/
//_______________ bg_content
//_______________ bg_csp
//_______________ bg_event
//_______________ bg_header
/*_ bg_message {{{*/
let bg_message_sendMessage;

/*}}}*/
//_______________ bg_page
//_______________ bg_settings
/*_ bg_store {{{*/
let bg_store_GET_url_domain;
let bg_store_SAVE_items;

/*}}}*/
/*_ bg_tabs {{{*/
let bg_tabs_del_tabId_key;
let bg_tabs_get_tabId;
let bg_tabs_get_tabId_key;
let bg_tabs_set_last_activated_tabId;
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

    li                                  = log_js.log_modulename_key_val;
    ellipsis                            = log_js.ellipsis;                            li("log_js","ellipsis",ellipsis);
    log                                 = log_js.log;                                 li("log_js","log",log);
    log_caller                          = log_js.log_caller;                          li("log_js","log_caller",log_caller);
    log_console_clear                   = log_js.log_console_clear;                   li("log_js","log_console_clear",log_console_clear);
    log_object                          = log_js.log_object;                          li("log_js","log_object",log_object);
    log_sep_bot                         = log_js.log_sep_bot;                         li("log_js","log_sep_bot",log_sep_bot);
    log_sep_top                         = log_js.log_sep_top;                         li("log_js","log_sep_top",log_sep_top);
    mPadEnd                             = log_js.mPadEnd;                             li("log_js","mPadEnd",mPadEnd);
    mPadStart                           = log_js.mPadStart;                           li("log_js","mPadStart",mPadStart);
    strip_CR_LF                         = log_js.strip_CR_LF;                         li("log_js","strip_CR_LF",strip_CR_LF);

    /*}}}*/
    modules.push( background_js ); /*{{{*/
    B_SCRIPT_ID                         = background_js.B_SCRIPT_ID;                  li("background_js","B_SCRIPT_ID",B_SCRIPT_ID);
    CHROME_SCHEME                       = background_js.CHROME_SCHEME;                li("background_js","CHROME_SCHEME",CHROME_SCHEME);
    DOM_LOAD_ID                         = background_js.DOM_LOAD_ID;                  li("background_js","DOM_LOAD_ID",DOM_LOAD_ID);
    DOM_TOOLS_JS_ID                     = background_js.DOM_TOOLS_JS_ID;              li("background_js","DOM_TOOLS_JS_ID",DOM_TOOLS_JS_ID);
    LOG_MAP                             = background_js.LOG_MAP;                      li("background_js","LOG_MAP",LOG_MAP);
    MANIFEST_VERSION                    = background_js.MANIFEST_VERSION;             li("background_js","MANIFEST_VERSION",MANIFEST_VERSION);

    log_ACTIVATED                       = background_js.log_ACTIVATED;                li("background_js","log_ACTIVATED",log_ACTIVATED);

    /*}}}*/
    //_______________________ bg_content
    //_______________________ bg_csp
    //_______________________ bg_event
    //_______________________ bg_header
    modules.push( bg_message    ); /*{{{*/
    bg_message_sendMessage              = bg_message.bg_message_sendMessage;                li("background_js","bg_message_sendMessage",bg_message_sendMessage);

    /*}}}*/
    //_______________________ bg_page
    //_______________________ bg_settings
    modules.push( bg_store      ); /*{{{*/
    bg_store_GET_url_domain             = bg_store.bg_store_GET_url_domain;           li("bg_store","bg_store_GET_url_domain",bg_store_GET_url_domain);
    bg_store_SAVE_items                 = bg_store.bg_store_SAVE_items;               li("bg_store","bg_store_SAVE_items",bg_store_SAVE_items);

    /*}}}*/
    modules.push( bg_tabs       ); /*{{{*/
    bg_tabs_del_tabId_key               = bg_tabs.bg_tabs_del_tabId_key;              li("bg_tabs","bg_tabs_del_tabId_key",bg_tabs_del_tabId_key);
    bg_tabs_get_tabId                   = bg_tabs.bg_tabs_get_tabId;                  li("bg_tabs","bg_tabs_get_tabId",bg_tabs_get_tabId);
    bg_tabs_get_tabId_key               = bg_tabs.bg_tabs_get_tabId_key;              li("bg_tabs","bg_tabs_get_tabId_key",bg_tabs_get_tabId_key);
    bg_tabs_set_last_activated_tabId    = bg_tabs.bg_tabs_set_last_activated_tabId;   li("bg_tabs","bg_tabs_set_last_activated_tabId",bg_tabs_set_last_activated_tabId);
    bg_tabs_set_tabId_key_val           = bg_tabs.bg_tabs_set_tabId_key_val;          li("bg_tabs","bg_tabs_set_tabId_key_val",bg_tabs_set_tabId_key_val);

    /*}}}*/
    log_js.log_import(bg_page      , modules);
};
/*}}}*/
    setTimeout(_import,0);
/*}}}*/
/* LOGGING {{{*/
let BG_PAGE_JS_LOG  = false;
/*_ logging {{{*/
let logging = function(state)
{
    if(state != undefined) {            BG_PAGE_JS_LOG = state;
        if(state) bg_store_SAVE_items({ BG_PAGE_JS_LOG           });
        else      bg_store_SAVE_items({ BG_PAGE_JS_LOG: undefined});
    } return                            BG_PAGE_JS_LOG;
};
/*}}}*/
/*_ log_this_get {{{*/
let log_this_get = function(_caller)
{
    switch(_caller) {
    case "bg_page1_UNLOAD"                : return BG_PAGE_JS_LOG || LOG_MAP.B_LOG9_STAGE;
    case "bg_page2_RELOAD"                : return BG_PAGE_JS_LOG || LOG_MAP.B_LOG9_STAGE;
    case "bg_page2_RELOAD_GET_script"     : return BG_PAGE_JS_LOG || LOG_MAP.B_LOG9_STAGE;
    case "bg_page2_RELOAD_if_required"    : return BG_PAGE_JS_LOG || LOG_MAP.B_LOG9_STAGE;
    case "bg_page3_RELOAD_FROM_SCRATCH"   : return BG_PAGE_JS_LOG || LOG_MAP.B_LOG9_STAGE;
    case "bg_page_GET_CheckContentScript" : return BG_PAGE_JS_LOG;
    case "bg_page_POPUP_pageAction"       : return BG_PAGE_JS_LOG;
    case "bg_page_get_popup_title"        : return BG_PAGE_JS_LOG;
    }

/*{{{*/
    log("%c"+BG_PAGE_SCRIPT_ID    +"%c log_this_get: missing switch %c"+_caller
        ,lbH+lb2                   ,lbL+lf2                        ,lbR+lf4    );

    return false;
/*}}}*/
};
/*}}}*/
/*}}}*/
/* ICON ● TOOL_STATES ● STATUS_COLORS {{{*/
const ICON_PATH_0_INITIAL       = "/images/rtabs16.png"    ;
const ICON_PATH_1_BROWN         = "/images/rtabs16_1_b.png";
const ICON_PATH_2_X             = "/images/rtabs16_2_r.png";
const ICON_PATH_3_O             = "/images/rtabs16_3_o.png";
const ICON_PATH_4_YELLOW        = "/images/rtabs16_4_y.png";
const ICON_PATH_5_GREEN         = "/images/rtabs16_5_g.png";
const ICON_PATH_6_BLUE          = "/images/rtabs16_6_b_square.png";
const ICON_PATH_7_X             = "/images/rtabs16_7_m.png";
const ICON_PATH_8_OFF           = "/images/rtabs16_8_g.png";

const TOOLS0_CHECKING           = "TOOLS CHECKING";
const TOOLS1_OFF                = "TOOLS OFF";
const TOOLS2_WAITING            = "TOOLS WAITING";
const TOOLS3_NEED_RELAXED_CSP   = "TOOLS NEED RELAXED CSP";
const TOOLS4_DEPLOYED           = "TOOLS DEPLOYED";
const TOOLS5_UNLOADED           = "TOOLS UNLOADED";

const STATUS_COLORS      = {
    "loading"             : 1,
    "TABS_ON_UPDATED"     : 2,
    "GET_URL_SETTINGS_CB" : 3,
    "complete"            : 4
};

/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ POPUP ● SYNC                                                              │
// └───────────────────────────────────────────────────────────────────────────┘
/*➔ bg_page_POPUP_pageAction .. update popup {{{*/
let bg_page_POPUP_pageAction = function(tabId,pageAction)
{
/*{{{*/
let   caller = "bg_page_POPUP_pageAction";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log_sep_top(caller+"("+pageAction+")","LOG7_TAG");
/*{{{*/
if( log_more) log_object (caller+"("+pageAction+"): TAB #"+tabId, bg_tabs_get_tabId(tabId), lbH+lf8);
if( log_more) log_caller();
/*}}}*/
    /* ● tabId ● url ● start ● csp_filter ● cancelreq {{{*/
    let url                = bg_tabs.bg_tabs_get_tabId_key(tabId, "url"               );
    let start              = bg_tabs.bg_tabs_get_tabId_key(tabId, "start"             )
        ||                 !!bg_tabs.bg_tabs_get_tabId_key(tabId, "tools_deployed"    );
    let csp_filter         = bg_tabs.bg_tabs_get_tabId_key(tabId, "csp_filter"        );
    let cancelreq          = bg_tabs.bg_tabs_get_tabId_key(tabId, "cancelreq"         );

    /* STATE ● */
    let status             = bg_tabs.bg_tabs_get_tabId_key(tabId, "status"            );
    let has_CSP            = bg_tabs.bg_tabs_get_tabId_key(tabId, "has_CSP"           );
    let csp_name           = bg_tabs.bg_tabs_get_tabId_key(tabId, "csp_name"          );
    let csp_filter_applied = bg_tabs.bg_tabs_get_tabId_key(tabId, "csp_filter_applied");
    let csp_filter_effect  = bg_tabs.bg_tabs_get_tabId_key(tabId, "csp_filter_effect" );
    let t_load             = bg_tabs.bg_tabs_get_tabId_key(tabId, "t_load"            );
    let tools_deployed     = bg_tabs.bg_tabs_get_tabId_key(tabId, "tools_deployed"    );

    /*}}}*/
    /* ● icon_color_num {{{*/
    let  icon_color_num
        = (url && url.includes(CHROME_SCHEME)                         ) ? 2 /* TOOLS LOCKED     */
        : ( t_load.startsWith(TOOLS3_NEED_RELAXED_CSP)                ) ? 2 /* TOOLS LOCKED     */

        : (            start != true                                  ) ? 8 /* TOOLS OFF        */
        : (        cancelreq == true                                  ) ? 7 /* REQUESTS BLOCKED */

        : (t_load.startsWith(TOOLS2_WAITING         )                 ) ? 0
        : (t_load.startsWith(TOOLS3_NEED_RELAXED_CSP)                 ) ? 2

        : (csp_filter_effect == bg_csp.FILTER_EFFECT3_RULES_REMOVED   ) ? 3 /* filtered HARD    */
        : (csp_filter_effect == bg_csp.FILTER_EFFECT4_RULES_CUSTOMIZED) ? 4 /* filtered SOFT    */
        : (csp_filter_effect == bg_csp.FILTER_EFFECT5_RULES_RELAXED   ) ? 5 /* filter RELAXED   */

        : (t_load            == TOOLS4_DEPLOYED                       ) ? 6 /* TOOLS DEPLOYED   */
        : (tools_deployed    == TOOLS4_DEPLOYED                       ) ? 6 /* TOOLS DEPLOYED   */

        : !csp_filter                                                   ? 0 /* TOOLS READY      */
        :                                                                 0
    ;

    /*}}}*/
    /* ● icon_path {{{*/
    let icon_path
        = (icon_color_num == 0                         ) ? ICON_PATH_0_INITIAL
        : (icon_color_num == 1                         ) ? ICON_PATH_1_BROWN   /* filter NO EFFECT *///FIXME
        : (icon_color_num == 2                         ) ? ICON_PATH_2_X
        : (icon_color_num == 3                         ) ? ICON_PATH_3_O
        : (icon_color_num == 4                         ) ? ICON_PATH_4_YELLOW
        : (icon_color_num == 5                         ) ? ICON_PATH_5_GREEN
        : (icon_color_num == 6                         ) ? ICON_PATH_6_BLUE
        : (icon_color_num == 7                         ) ? ICON_PATH_7_X
        :/*csp_filter == undefined */                      ICON_PATH_0_INITIAL /* ...default       */
    ;

    bg_tabs.bg_tabs_set_tabId_key_val(tabId, "icon_path", icon_path);
    /*}}}*/
    /* ● title {{{*/
    let title
        = (url && url.includes(CHROME_SCHEME))
        ?  "IGNORED URL"+LF+"➔ "+url
        :  bg_page_get_popup_title(tabId, status, url, start, csp_filter, cancelreq, t_load, tools_deployed);

    bg_tabs.bg_tabs_set_tabId_key_val(tabId,     "title", log_js.strip_CR_LF(title));
    /*}}}*/
    /* [chrome.action] ● setIcon ● setTitle ● show {{{*/
    if(chrome.action && chrome.action.setIcon ) chrome.action.setIcon ({tabId , path:icon_path});
    if(chrome.action && chrome.action.setTitle) chrome.action.setTitle({tabId , title         });
    if(chrome.action && chrome.action.show    ) chrome.action.show    ( tabId                  );

    /*}}}*/
    /* MESSAGE TO POPUP {{{*/
    if(   (pageAction.includes("status"  )
       && (pageAction.includes("complete"))))
    {
        let message = {  caller
            , type : "answer"
            , title
            , tabId
            , url
            , status
            , start
            , csp_filter
            , cancelreq
            , has_CSP
            , csp_name
            , csp_filter_applied
            , csp_filter_effect
            , t_load
            , tools_deployed
        };
if( log_more) log_object("...bg_message_sendMessage("+url+")", message);

        bg_message_sendMessage(message, caller);
    }
    /*}}}*/
/*{{{
//let icon_url =  chrome.runtime.getURL(icon_path);
//let icon_url = "chrome-extension://dacmekaboflbchiediclenlddhhaghhj/../images/rtabs16_8_g.png"
  let icon_url = "https://lh5.googleusercontent.com/-PYloDT5xI-Q/ULIE0ajx7LI/AAAAAAAAA1Y/Oh528Yh63mE/s32/com.google.Chrome.png";
//logXXX("icon_url=["+icon_url+"]");
let lbI  = "background: url('"+icon_url+"') no-repeat;";
log("%c  ", lbI+lbb);
}}}*/
/*{{{*/
if( log_more) log_object("...icon_path=["+icon_path+"]"
                         , {  "● PARAMS"   : "●"
                             , url
                             , start
                             , csp_filter
                             , cancelreq
                             ,"● STATE"    : "●"
                             , status
                             , has_CSP
                             , csp_name
                             , csp_filter_applied
                             , csp_filter_effect
                             , t_load
                             , tools_deployed
                             ,"● POPUP"    : "●"
                             , icon_color_num
                             , icon_path
                         }
                         , lbX[icon_color_num], false);
/*}}}*/
if( log_more) log_sep_bot(caller+"("+pageAction+")","LOG7_TAG");
};
/*}}}*/
/*_ bg_page_SHOW_ICON_NUM {{{*/
let bg_page_SHOW_ICON_NUM = function(tabId,n)
{
    let icon_path
        = (n == 0) ? ICON_PATH_0_INITIAL
        : (n == 1) ? ICON_PATH_1_BROWN
        : (n == 2) ? ICON_PATH_2_X
        : (n == 3) ? ICON_PATH_3_O
        : (n == 4) ? ICON_PATH_4_YELLOW
        : (n == 5) ? ICON_PATH_5_GREEN
        : (n == 6) ? ICON_PATH_6_BLUE
        : (n == 7) ? ICON_PATH_7_X
        : (n == 8) ? ICON_PATH_8_OFF
        :            null
    ;
log(BG_PAGE_SCRIPT_ID+".bg_page_SHOW_ICON_NUM("+tabId+","+n+") ● icon_path=["+icon_path+"]");
if(!tabId) log("%c * tabId is required * ", lb2);

    if( icon_path )
        chrome.action.setIcon({ tabId , path:icon_path });
};
/*}}}*/
/*➔ bg_page_STORE_lastError {{{*/
let bg_page_STORE_lastError = function(tabId)
{
    /* CHECK */
    if(!chrome.runtime.lastError) return "";

    /* KEEP */
    let lastError_message = chrome.runtime.lastError.message;
    bg_tabs_set_tabId_key_val(tabId, "lastError_message", lastError_message);

    /* LOG */
    let       callers_bot  = log_js.get_callers_bot();
    log("%c"+ callers_bot+"(TAB#"+tabId+"): ABORTING ON ERROR:\n"+lastError_message, lbH+lbF+lf2);

    return lastError_message;
};
/*}}}*/
/*➔ bg_page_REPORT_lastError {{{*/
let bg_page_REPORT_lastError = function(tabId, _caller, lfx)
{
    let lastError_message
        = bg_tabs_get_tabId_key(tabId, "lastError_message");

    if(!lastError_message ) return;

log("%c"+_caller+"(TAB#"+tabId+"): ABORTED ON ERROR:\n"+lastError_message, lbH+lbF+lfx);
log_object("TAB #"+tabId, bg_tabs_get_tabId(tabId), lbH+lf8);
console.trace();
};
/*}}}*/
/*_ bg_page_get_popup_title {{{*/

let bg_page_get_popup_title = function(tabId, status, url, start, csp_filter, cancelreq, t_load, tools_deployed)
{
/*{{{*/
let   caller = "bg_page_get_popup_title";
let log_this = log_this_get(caller);

/*}}}*/
    /* [t_load] [t_start] [t_page] [t_filter] [t_cancelreq] {{{*/
    if(!t_load)
    {
        let lastError_message = bg_tabs.bg_tabs_get_tabId_key(tabId, "lastError_message");
        t_load
//          = bg_page3_FETCH_POLL_in_progress(tabId) ?   "POLLING"
            = lastError_message                               ?   lastError_message
            :                                                "?" //SYMBOL_NOT_CHECKED
        ;
    }

    let    t_start     = "RTabs "+((start != true) ? "OFF" : "ON");

    let    t_page      = ellipsis(bg_store_GET_url_domain(url), 32);

    let    t_filter    = (csp_filter ? ellipsis(strip_CR_LF(csp_filter),32) : "UNFILTERED");


    let t_cancelreq    = (cancelreq == true ) ? "REQUESTS BLOCKED" : "NOT BLOCKING";

    /*}}}*/
    /* LOG {{{*/
    if(log_this)
    {
        /* [applied_filter_color] [t_state_color] [tools_start_called_once] [t_status] {{{*/
        let     csp_filter_effect  = bg_tabs.bg_tabs_get_tabId_key(tabId, "csp_filter_effect");
        let applied_filter_color
            =  (csp_filter_effect == bg_csp.FILTER_EFFECT3_RULES_REMOVED   ) ? 3
            :  (csp_filter_effect == bg_csp.FILTER_EFFECT4_RULES_CUSTOMIZED) ? 4
            :  (csp_filter_effect == bg_csp.FILTER_EFFECT5_RULES_RELAXED   ) ? 5
            :                                                                  0
        ;

        let t_state_color
            =         t_load.startsWith(TOOLS1_OFF             ) ? 1
            :         t_load.startsWith(TOOLS2_WAITING         ) ? 2
            :         t_load.startsWith(TOOLS3_NEED_RELAXED_CSP) ? 3
            :         t_load.startsWith(TOOLS4_DEPLOYED        ) ? 4
            : tools_deployed.startsWith(TOOLS4_DEPLOYED        ) ? 4
            :         t_load.startsWith(TOOLS5_UNLOADED        ) ? 5
            :         t_load.startsWith(TOOLS0_CHECKING        ) ? 6
            :         t_load.startsWith("POLLING"              ) ? 7
            :                                                      8
        ;

        let tools_start_called_once   = bg_tabs.bg_tabs_get_tabId_key(tabId, "tools_start_called_once", false);
        let t_status
            = status                  ? status
            : tools_start_called_once ? SYMBOL_CHECK_MARK
            :                           "?"
        ;
        let status_color = STATUS_COLORS[status] || 9;

        /*}}}*/
        /* POPUP LOG-LINE {{{*/
        let args=[""];

        args[0]  = "";
        args[0] += mPadStart("%c"+SYN+" TAB"     + tabId         , 3); args.push(lbb+lbH + lf7);
        args[0] += mPadEnd  ("%c"                + t_page        ,32); args.push(    lbH + lf3);

        args[0] += mPadStart("%c"                + t_start       ,12); args.push(    lbL + lf1);
        args[0] += mPadEnd  ("%c"                + t_filter      ,16); args.push(    lbC + lfX[applied_filter_color]);
        args[0] += mPadEnd  ("%c"                + t_cancelreq   ,16); args.push(    lbR + lfX[(cancelreq == true) ? 2 : 8]);

        args[0] += mPadStart("%c"+SYMBOL_GEAR+" "+ t_load        ,12); args.push(    lbL + lfX[       t_state_color]);
        args[0] += mPadStart("%c"+SYMBOL_GEAR+" "+ tools_deployed,12); args.push(    lbR + lfX[       t_state_color]);
        args[0] += mPadEnd  ("%c"+SYMBOL_GEAR+" "+ t_status      ,12); args.push(    lbH + lfX[        status_color]);

        console.log.apply(console, args);
        /*}}}*/
    }
    /*}}}*/
    /* RETURN POPUP ICON TITLE {{{*/
    let title
        =  t_start
        + (t_page         ? ("\n "   + t_page        ) : "")
        + (t_filter       ? ("\n "   + t_filter      ) : "")
        + (t_cancelreq    ? ("\n "   + t_cancelreq   ) : "")
        + (t_load         ? ("\n "   + t_load        ) : "")
        + (tools_deployed ? ("\n "   + tools_deployed) : "")
    ;

    return title;
    /*}}}*/
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ UNLOAD ● CURRENT PAGE DATA                                                │
// └───────────────────────────────────────────────────────────────────────────┘
/*_ bg_page1_UNLOAD {{{*/
let bg_page1_UNLOAD = async function(details)
{
/*{{{*/
let   caller = "bg_page1_UNLOAD";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    if(!details.status) details.status = "";
/*}}}*/
if( log_more) log_sep_top(caller+details.status, "LOG0_TAG");
    /* ● [NO tabId] ● [DO NOT RELOAD chrome:// tab] {{{*/
if( log_more) log_object(caller+".details", details);
    let tabId = details.tabId || bg_tabs.bg_tabs_get_last_activated_tabId();
    if(!tabId ) {
if( log_this) log(BG_PAGE_SCRIPT_ID+"."+caller+": NO tabId");

        return;
    }
    let url = bg_tabs_get_tabId_key(tabId, "url", "");
    if( url.includes(CHROME_SCHEME))
    {
if(log_more) log("DO NOT RELOAD "+url+" tab");

        return;
    }
    /*}}}*/
    // ┌───────────────────────────────────────────────────────────────────────┐
    // │ EXPECT A NEW HEADER TO FILTER FOR THIS URL                            │
    // └───────────────────────────────────────────────────────────────────────┘
    /*{{{*/
    bg_tabs_set_tabId_key_val(tabId, "onHeadersReceived", false);

    /*}}}*/
    // ┌───────────────────────────────────────────────────────────────────────┐
    // │ TRYING to force Opera to reload the current page ● like chrome does   │
    // └───────────────────────────────────────────────────────────────────────┘
/* handlerBehaviorChanged {{{//FIXME
    // ┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
    // │ https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/handlerBehaviorChanged
    // │ opera://net-export
    // │ https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/handlerBehaviorChanged
    // └──────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
//chrome.webRequest.handlerBehaviorChanged();
//if( log_this) log("%c→%c...webRequest.handlerBehaviorChanged", lbb+lbH+lb0, lbH+lb1+lf4);
}}}*/
    if( chrome.history      ) /*{{{*/
    {
        await chrome.history.deleteUrl( {url} )
            .then(() => {

                let               consumed_by = " ● URL HISTORY DELETED";
                details.status += consumed_by;

if( log_more)      log("%c→%c"+   consumed_by, lbb+lbH+lb0, lbH+lb1+lf4);
            });

    }
else if( log_more) log("%c→%c ● NO history permission", lbb+lbH+lb0, lbH+lb1+lf4);
    /*}}}*/
    if( chrome.browsingData ) /*{{{*/
    {
log_object(  "chrome.browsingData.settings", await chrome.browsingData.settings(), lb4);
        await chrome.browsingData.remove( {         origins : [url] }
                                        , { cache           : true
                                          , cacheStorage    : true
                                          , fileSystems     : true
                                          //history         : true // not when origins is specified
                                          , pluginData      : true
                                          , serviceWorkers  : true
                                        }) .then( async function() {
                                            let               consumed_by = " ● DOC CACHE CLEARED";
                                            details.status += consumed_by;

if( log_more)      log("%c→%c"+   consumed_by, lbb+lbH+lb0, lbH+lb1+lf4);
if( log_more) log_object("chrome.browsingData.settings ● removed", await chrome.browsingData.settings(), lf0);
                                        });

    }
else if( log_more) log("%c→%c ● NO browsingData permission", lbb+lbH+lb0, lbH+lb1+lf4);
    /*}}}*/
    if(!details.status      ) /*{{{*/
    {
        let consumed_by    = " ● NO CACHE CLEARED";
if( log_more) log("%c→%c"+        consumed_by+"", lbb+lbH+lb0, lbH+lb1+lf4);

        details.status     =      consumed_by;
    }
    /*}}}*/
if( log_more) log_sep_bot(caller+details.status, "LOG0_TAG");
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ RELOAD ● FROM PAGE URL                                                    │
// └───────────────────────────────────────────────────────────────────────────┘
/*➔ bg_page2_RELOAD {{{*/
let bg_page2_RELOAD = async function(details)
{
/*{{{*/
let   caller = "bg_page2_RELOAD";
let log_this = DEBUG_OPERA || log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

//if( log_more) log_console_clear(LOG_MAP.B_LOG3_PRESERVE, caller); // see javascript/bg_settings.js line:306
if(!chrome.scripting) { log("%c"+SYMBOL_CONSTRUCTION+" chrome.scripting is undefined in "+caller, lbb+lbH+lf1); }

//( log_more) log_object(caller+".details", details);
/*}}}*/
    /*  tabId NONE {{{*/
    let tabId = details.tabId;
    if(!tabId ) {
if( log_this) log(BG_PAGE_SCRIPT_ID+"."+caller+": NO tabId");

        return;
    }
    /*}}}*/
    /* DO NOT RELOAD chrome:// tab {{{*/
    let url = bg_tabs_get_tabId_key(tabId, "url", "");
    if( url.includes(CHROME_SCHEME))
    {
if(log_more) log("DO NOT RELOAD "+url+" tab");

        return;
    }
    /*}}}*/
    await bg_page1_UNLOAD             ( details );
    await bg_page3_RELOAD_FROM_SCRATCH( details );
};
/*}}}*/
/*_ bg_page3_RELOAD_FROM_SCRATCH {{{*/
let bg_page3_RELOAD_FROM_SCRATCH = async function(details)
{
/*{{{*/
let   caller = "bg_page3_RELOAD_FROM_SCRATCH";
let log_this = DEBUG_OPERA || log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log_sep_top(caller+details.status, "LOG1_TAG");
/*{{{*/
if( log_this) log("%c→%c...RELOADING FROM SCRATCH %c"+details.status
                  ,lbb+lbH+lb0
                  ,   lbL+lb1+lf4                ,lbR+lb0+lf1);

if( log_more) log_object(caller+".details", details);
/*}}}*/
    /* HIDE ICON {{{*/
    let tabId = details.tabId;
    if(chrome.action && chrome.action.hide) chrome.action.hide(tabId);

    /*}}}*/
    // ┌───────────────────────────────────────────────────────────────────────┐
    // │ chrome.scripting.executeScript                                        │
    // └───────────────────────────────────────────────────────────────────────┘
/*{{{*/
//▼ UNUSED ▼
//    /* MANIFEST_VERSION=="v3" {{{*/
//    if(MANIFEST_VERSION=="v3") {
//if( log_more) log(" 1 (v3) ➔ RELOAD: chrome.tabs.query");
//                bg_tabs_set_last_activated_tabId( tabId );
//                bg_tabs_del_tabId_key(             tabId , "t_load");
//                bg_tabs_del_tabId_key(             tabId , "tools_deployed");
//
//if( log_more) log(" 2 (v3) ➔ RELOAD: chrome.scripting.executeScript func → bg_page1_RELOAD_RUN_script");
//                await chrome.scripting
//                    .executeScript( { target :  { tabId }
//                                    ,   func :   bg_page1_RELOAD_RUN_script
//                                    ,   args : [{ log_this }]
//                    })
//                    .then((array_of_any) => {
//if( log_more) log(" 3 (v3) ➔ RELOAD: chrome.scripting.executeScript then → bg_tabs_set_tabId_key_val");
//                        let message = array_of_any ? array_of_any[0].result : undefined;
//if( log_more) log_object("...REPLY message", message, 7, false);
//                        bg_tabs_set_tabId_key_val(tabId, "reloading"        , true );
//                    })
//                    .catch((error) => { log(BG_PAGE_SCRIPT_ID+"."+caller+".chrome.scripting.executeScript", error); });
//    }
//    /*}}}*/
//    /* TABS SCRIPTING {{{*/
//    else {
//        try {
//            bg_tabs_del_tabId_key(tabId, "t_load");
//            bg_tabs_del_tabId_key(tabId, "tools_deployed");
//
//            // resolving code: bg_page2_RELOAD_GET_script
//if( log_more) log(" 1 (v2) ➔ RELOAD: chrome.tabs.executeScript code → bg_page2_RELOAD_GET_script");
//            chrome.tabs
//                .executeScript(               tabId
//                              , {      code : bg_page2_RELOAD_GET_script() }
//                              , function(array_of_any) {
//if( log_more) log(" 2 (v2) ➔ RELOAD: chrome.tabs.executeScript func → bg_tabs_set_tabId_key_val");
//                                  let message = array_of_any ? array_of_any[0] : undefined;
//if( log_more) log_object("...REPLY message", message, 7, false);
//                                  if(!bg_page_STORE_lastError(tabId))
//                                  {
//                                      bg_tabs_set_tabId_key_val  (tabId, "reloading"        , true );
//                                  }
//                                  else {
//                                      bg_page_REPORT_lastError(tabId, caller, lf2);
//                                  }
//                              }
//                              );
//
//        }
//        catch (error) { log(BG_PAGE_SCRIPT_ID+"."+caller, error); }
//    }
//    /*}}}*/
//▲ UNUSED ▲
/*}}}*/
    /* chrome.tabs.reload {{{*/
    let                       reloadProperties = { bypassCache: true };
    await chrome.tabs.reload(tabId, reloadProperties).then(() => { if(log_more) log("chrome.tabs.reload DONE"); });

    /*}}}*/
if( log_more) log_sep_bot(caller+details.status, "LOG1_TAG");

    let url = bg_tabs_get_tabId_key(tabId, "url");
if( log_this) log("%c OHR  %c PAGE RELOAD SENT %c EXPECTING HEADER RECEIVED on %c"+url
                  ,lbH+lf7,lbL+lb3+lf2        ,lbC+lb9+lf2        ,lbR+lb2);
};
/*}}}*/
//▼ UNUSED ▼ /*{{{*/
///*➔ bg_page2_RELOAD_GET_script {{{*/
//let bg_page2_RELOAD_GET_script = function()
//{
///*{{{*/
//let   caller = BG_PAGE_SCRIPT_ID+".bg_page2_RELOAD_GET_script";
//let log_this = log_this_get(caller);
//let log_more = log_this && LOG_MAP.B_LOG0_MORE;
//
///*}}}*/
//    let script
//        = "document.location.reload(true);" // forceGet https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
//        + "let message        = {};\n"
//        + "    message.t_load = 'PAGE RELOAD SENT'\n"
//        + "    message.caller = '"+caller+"'\n"
//        + "    message.url    = document.URL\n"
//        + "console.log('"+caller+".message:',message);\n"
//        + "message;\n"
//    ;
//
//if( log_more) log("%c "+caller+": ...return:\n%c"+script, lbH, lf3);
//    return script;
//};
///*}}}*/
///*➔ bg_page1_RELOAD_RUN_script {{{*/
//let bg_page1_RELOAD_RUN_script = function(_args)
////t bg_page1_RELOAD_RUN_script = function({ log_this })
//{
//let { log_this } = _args;
//if( log_this) console.log("bg_page1_RELOAD_RUN_script:\n...document.location.reload(true);");
//
//    document.location.reload(true); // forceGet
//
//    return { caller: "bg_page1_RELOAD_RUN_script" , url: document.URL };
//};
///*}}}*/
//▲ UNUSED ▲
/*}}}*/

/*➔ bg_page2_RELOAD_if_required {{{*/
/*{{{*/
const RELOAD_REQUIRED     = "RELOAD REQUIRED";

/*}}}*/
let bg_page2_RELOAD_if_required = async function(details)
{
/*{{{*/
let   caller = "bg_page2_RELOAD_if_required";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/

    let start           =   bg_tabs_get_tabId_key(details.tabId, "start"         );
    let tools_deployed  =   bg_tabs_get_tabId_key(details.tabId, "tools_deployed");
    let t_load          =   bg_tabs_get_tabId_key(details.tabId, "t_load"        );
    let reload_required =!!((start || tools_deployed) && !t_load);

if( log_this) log_object(" ● "+RELOAD_REQUIRED+": "+reload_required
                        , { start, tools_deployed, t_load, reload_required, callers_bot:log_js.get_callers_bot() }
                        , lb0+lf5, !log_more); // collapsed

///* content_scripts_reply_message {{{*/
//if( log_more) {
//
//    let content_scripts_loaded = await bg_content_scripts_loaded(details.tabId);
//log("content_scripts_loaded=["+content_scripts_loaded+"]");
//
//    let content_scripts_reply_message = bg_tabs_get_tabId_key(details.tabId, "content_scripts_reply_message");
//    let                     cs_status = bg_content_scripts_loadetails.ded_parse_message(details.tabId, content_scripts_reply_message);
//
//    log_object("content_scripts_reply_message", content_scripts_reply_message);
//    log_object("cs_status", cs_status);
//}
///*}}}*/

    if( !reload_required ) {                                 return ""             ; }
    else                   { await bg_page2_RELOAD(details); return RELOAD_REQUIRED; }
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ CONTENT SCRIPT EXECUTION                                                  │
// └───────────────────────────────────────────────────────────────────────────┘
/*➔ bg_page_GET_CheckContentScript {{{*/
let bg_page_GET_CheckContentScript = function()
{
/*{{{*/
let   caller = BG_PAGE_SCRIPT_ID+".bg_page_GET_CheckContentScript";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
    let script
        = "{\n"
        + "let message = {};\n"
        + "k = '"+ DOM_LOAD_ID    +"' ; if(v = document.body.attributes[k]) message[k] = v.textContent;\n"
        + "k = '"+ DOM_TOOLS_JS_ID+"' ; if(v = document.body.attributes[k]) message[k] = v.textContent;\n"
        + "k = '"+ B_SCRIPT_ID    +"' ; if(v = document.body.attributes[k]) message[k] = v.textContent;\n"
        + "message.caller = '"+caller+"';\n"
        + "message;\n"
        + "}\n"
    ;

if( log_more) log("%c "+caller+": ...return:\n%c"+script, lbH, lf5);
    return script;
};
/*}}}*/
/*➔ bg_page_RUN_CheckContentScript {{{*/
let bg_page_RUN_CheckContentScript = function(_args)
{
/*{{{*/
let   caller = "bg_page_RUN_CheckContentScript";
let { tabId, dom_load_id, dom_tools_js_id, b_script_id } = _args; /* eslint-disable-line no-shadow */

//console.log(caller+"(_args):");
//console.log("_args:",_args);
/*}}}*/
    /* fetch document.body.attributes .. [LOAD TOOLS B_SCRIPT ID's] {{{*/
    let k;              let v;                           let message        = {};
    k = dom_load_id    ; if(v = document.body.attributes[k]) message[k]     = v.textContent;
    k = dom_tools_js_id; if(v = document.body.attributes[k]) message[k]     = v.textContent;
    k = b_script_id    ; if(v = document.body.attributes[k]) message[k]     = v.textContent;

    /*}}}*/
    /* caller tabId url {{{*/
    message.caller = caller;
    message.tabId  = tabId;
    message.url    = document.URL;

    /*}}}*/
    return message;
};
/*}}}*/

    /*➔ EXPORT {{{*/
    return {  name : "bg_page"
        ,             bg_page1_UNLOAD_TAB         : (tabId) => bg_page1_UNLOAD({tabId})
        ,             bg_page2_RELOAD_if_required
        ,             bg_page2_RELOAD
        ,             bg_page_GET_CheckContentScript
        ,             bg_page_RUN_CheckContentScript
        ,             bg_page_POPUP_pageAction
        ,             bg_page_REPORT_lastError
        ,             bg_page_STORE_lastError
        ,             TOOLS4_DEPLOYED
        // DEBUG
        , logging
        , bg_page_SHOW_ICON_NUM
    };
    /*}}}*/
}());
