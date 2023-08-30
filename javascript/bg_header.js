// ┌───────────────────────────────────────────────────────────────────────────┐
// │ bg_header.js .......................................... BACKGROUND SCRIPT │
// └───────────────────────────────────────────────────────────────────────────┘
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* eslint-disable no-warning-comments */
/* eslint-disable prefer-spread       */
/* eslint-disable prefer-rest-params  */
/* eslint-disable valid-jsdoc         */
/* eslint-disable no-redeclare        */

/* globals  console, chrome           */

/* globals  worker_js                 */
/* exported bg_header                 */
/* globals  background_js             */
/* globals  bg_csp                    */
/* globals  bg_message                */
/* globals  bg_page                   */
/* globals  bg_settings               */
/* globals  bg_store                  */
/* globals  bg_tabs                   */
/* globals  log_js                    */

/* eslint-enable  no-redeclare        */

const BG_HEADER_SCRIPT_ID  = "bg_header";
const BG_HEADER_SCRIPT_TAG =  BG_HEADER_SCRIPT_ID +" (230830:19h:19)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
// ┌───────────────────────────────────────────────────────────────────────────┐
// │ HTTP HEADER                                    B_LOG4_CSP B_LOG6_ONHEADER │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_event.js
"● javascript/bg_header.js
:e javascript/bg_message.js
:e javascript/bg_page.js
:e javascript/bg_settings.js
:e javascript/bg_store.js
:e javascript/bg_tabs.js
:e javascript/options.js
:e javascript/popup.js
:e javascript/worker.js
/* └─────────────────────────────┘*/
let bg_header  = (function() {
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
/* eslint-enable no-unused-vars */

let   log
    , log_CSP
    , log_csp_rules
    , log_console_clear
    , log_object
    , log_permission
    , log_sep_bot
    , log_sep_top
    , mPadEnd
    , mPadStart
    , li
;

/*}}}*/
/*_ background_js {{{*/
let B_ON_HEADER_RECEIVED;
let CHROME_SCHEME;
let LOG_MAP;

let log_ACTIVATED;
let log_IGNORING;
let log_STORAGE;
/*}}}*/
//_______________ bg_content
/*_ bg_csp {{{*/

let FILTER3_REMOVE;
let FILTER4_CUSTOM;
let FILTER5_RELAX;
let FILTER6_NONE;

let FILTER_APPLIED1_FINE;
let FILTER_APPLIED3_REMOVED;
let FILTER_APPLIED4_CUSTOM;
let FILTER_APPLIED5_RELAXED;
let FILTER_APPLIED2_NO_RULES;
let FILTER_APPLIED8_NO_CSP;

let FILTER_EFFECT2_RULES_MISSING;
let FILTER_EFFECT3_RULES_REMOVED;
let FILTER_EFFECT4_RULES_CUSTOMIZED;
let FILTER_EFFECT5_RULES_RELAXED;

let bg_csp_load_filter;
let bg_csp_get_filter_rules;

/*}}}*/
//_______________ bg_event
//_______________ bg_header
/*_ bg_message {{{*/
let bg_message_sendMessage;

/*}}}*/
/*_ bg_page {{{*/
let bg_page_POPUP_pageAction;

/*}}}*/
/*_ bg_settings {{{*/
let bg_settings_tabs6_get_url_settings;

/*}}}*/
/*_ bg_store {{{*/
let bg_store_GET_url_domain;
let bg_store_SAVE_items;

/*}}}*/
/*_ bg_tabs {{{*/
let bg_tabs_del_tabId_key;
let bg_tabs_get_tabId;
let bg_tabs_get_tabId_key;
let bg_tabs_set_tabId_key_items;
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
    log                                 = log_js.log;                                       li("log_js","log",log);
    log_CSP                             = log_js.log_CSP;                                   li("log_js","log_CSP",log_CSP);
    log_csp_rules                       = log_js.log_csp_rules;                             li("log_js","log_csp_rules",log_csp_rules);
    log_console_clear                   = log_js.log_console_clear;                         li("log_js","log_console_clear",log_console_clear);
    log_object                          = log_js.log_object;                                li("log_js","log_object",log_object);
    log_permission                      = log_js.log_permission;                            li("log_js","log_permission",log_permission);
    log_sep_bot                         = log_js.log_sep_bot;                               li("log_js","log_sep_bot",log_sep_bot);
    log_sep_top                         = log_js.log_sep_top;                               li("log_js","log_sep_top",log_sep_top);
    mPadEnd                             = log_js.mPadEnd;                                   li("log_js","mPadEnd",mPadEnd);
    mPadStart                           = log_js.mPadStart;                                 li("log_js","mPadStart",mPadStart);

    /*}}}*/
    modules.push( background_js ); /*{{{*/
    B_ON_HEADER_RECEIVED                = background_js.B_ON_HEADER_RECEIVED;               li("background_js","B_ON_HEADER_RECEIVED",B_ON_HEADER_RECEIVED);
    CHROME_SCHEME                       = background_js.CHROME_SCHEME;                      li("background_js","CHROME_SCHEME",CHROME_SCHEME);
    LOG_MAP                             = background_js.LOG_MAP;                            li("background_js","LOG_MAP",LOG_MAP);

    log_ACTIVATED                       = background_js.log_ACTIVATED;                      li("background_js","log_ACTIVATED",log_ACTIVATED);
    log_IGNORING                        = background_js.log_IGNORING;                       li("background_js","log_IGNORING",log_IGNORING);
    log_STORAGE                         = background_js.log_STORAGE;                        li("background_js","log_STORAGE",log_STORAGE);
    /*}}}*/
    //_______________________ bg_content
    modules.push( bg_csp        ); /*{{{*/

    FILTER3_REMOVE                      = bg_csp.FILTER3_REMOVE;                            li("bg_csp","FILTER3_REMOVE",FILTER3_REMOVE);
    FILTER4_CUSTOM                      = bg_csp.FILTER4_CUSTOM;                            li("bg_csp","FILTER4_CUSTOM",FILTER4_CUSTOM);
    FILTER5_RELAX                       = bg_csp.FILTER5_RELAX;                             li("bg_csp","FILTER5_RELAX",FILTER5_RELAX);
    FILTER6_NONE                        = bg_csp.FILTER6_NONE;                              li("bg_csp","FILTER6_NONE",FILTER6_NONE);

    FILTER_APPLIED1_FINE                = bg_csp.FILTER_APPLIED1_FINE;                      li("bg_csp","FILTER_APPLIED1_FINE",FILTER_APPLIED1_FINE);
    FILTER_APPLIED3_REMOVED             = bg_csp.FILTER_APPLIED3_REMOVED;                   li("bg_csp","FILTER_APPLIED3_REMOVED",FILTER_APPLIED3_REMOVED);
    FILTER_APPLIED4_CUSTOM              = bg_csp.FILTER_APPLIED4_CUSTOM;                    li("bg_csp","FILTER_APPLIED4_CUSTOM",FILTER_APPLIED4_CUSTOM);
    FILTER_APPLIED5_RELAXED             = bg_csp.FILTER_APPLIED5_RELAXED;                   li("bg_csp","FILTER_APPLIED5_RELAXED",FILTER_APPLIED5_RELAXED);
    FILTER_APPLIED2_NO_RULES            = bg_csp.FILTER_APPLIED2_NO_RULES;                  li("bg_csp","FILTER_APPLIED2_NO_RULES",FILTER_APPLIED2_NO_RULES);
    FILTER_APPLIED8_NO_CSP              = bg_csp.FILTER_APPLIED8_NO_CSP;                    li("bg_csp","FILTER_APPLIED8_NO_CSP",FILTER_APPLIED8_NO_CSP);

    FILTER_EFFECT2_RULES_MISSING        = bg_csp.FILTER_EFFECT2_RULES_MISSING;              li("bg_csp","FILTER_EFFECT2_RULES_MISSING",FILTER_EFFECT2_RULES_MISSING);
    FILTER_EFFECT3_RULES_REMOVED        = bg_csp.FILTER_EFFECT3_RULES_REMOVED;              li("bg_csp","FILTER_EFFECT3_RULES_REMOVED",FILTER_EFFECT3_RULES_REMOVED);
    FILTER_EFFECT4_RULES_CUSTOMIZED     = bg_csp.FILTER_EFFECT4_RULES_CUSTOMIZED;           li("bg_csp","FILTER_EFFECT4_RULES_CUSTOMIZED",FILTER_EFFECT4_RULES_CUSTOMIZED);
    FILTER_EFFECT5_RULES_RELAXED        = bg_csp.FILTER_EFFECT5_RULES_RELAXED;              li("bg_csp","FILTER_EFFECT5_RULES_RELAXED",FILTER_EFFECT5_RULES_RELAXED);

    bg_csp_load_filter                  = bg_csp.bg_csp_load_filter;                        li("bg_csp","bg_csp_load_filter",bg_csp_load_filter);
    bg_csp_get_filter_rules             = bg_csp.bg_csp_get_filter_rules;                   li("bg_csp","bg_csp_get_filter_rules",bg_csp_get_filter_rules);

    /*}}}*/
    //_______________________ bg_event
    //_______________________ bg_header
    modules.push( bg_message    ); /*{{{*/
    bg_message_sendMessage              = bg_message.bg_message_sendMessage;                li("background_js","bg_message_sendMessage",bg_message_sendMessage);

    /*}}}*/
    modules.push( bg_page       ); /*{{{*/
    bg_page_POPUP_pageAction            = bg_page.bg_page_POPUP_pageAction;                 li("bg_page","bg_page_POPUP_pageAction",bg_page_POPUP_pageAction);

    /*}}}*/
    modules.push( bg_settings   ); /*{{{*/
    bg_settings_tabs6_get_url_settings  = bg_settings.bg_settings_tabs6_get_url_settings;   li("bg_settings","bg_settings_tabs6_get_url_settings",bg_settings_tabs6_get_url_settings);

    /*}}}*/
    modules.push( bg_store      ); /*{{{*/
    bg_store_GET_url_domain             = bg_store.bg_store_GET_url_domain;                 li("bg_store","bg_store_GET_url_domain",bg_store_GET_url_domain);
    bg_store_SAVE_items                 = bg_store.bg_store_SAVE_items;                     li("bg_store","bg_store_SAVE_items",bg_store_SAVE_items);

    /*}}}*/
    modules.push( bg_tabs       ); /*{{{*/
    bg_tabs_del_tabId_key               = bg_tabs.bg_tabs_del_tabId_key;                    li("bg_tabs","bg_tabs_del_tabId_key",bg_tabs_del_tabId_key);
    bg_tabs_get_tabId                   = bg_tabs.bg_tabs_get_tabId;                        li("bg_tabs","bg_tabs_get_tabId",bg_tabs_get_tabId);
    bg_tabs_get_tabId_key               = bg_tabs.bg_tabs_get_tabId_key;                    li("bg_tabs","bg_tabs_get_tabId_key",bg_tabs_get_tabId_key);
    bg_tabs_set_tabId_key_items         = bg_tabs.bg_tabs_set_tabId_key_items;              li("bg_tabs","bg_tabs_set_tabId_key_items",bg_tabs_set_tabId_key_items);
    bg_tabs_set_tabId_key_val           = bg_tabs.bg_tabs_set_tabId_key_val;                li("bg_tabs","bg_tabs_set_tabId_key_val",bg_tabs_set_tabId_key_val);

    /*}}}*/
    log_js.log_import(bg_header    , modules);
};
/*}}}*/
    setTimeout(_import,0);
/*}}}*/
/* LOGGING {{{*/
let BG_HEADER_JS_LOG  = false;
/*_ logging {{{*/
let logging = function(state)
{
    if(state != undefined) {            BG_HEADER_JS_LOG = state;
        if(state) bg_store_SAVE_items({ BG_HEADER_JS_LOG           });
        else      bg_store_SAVE_items({ BG_HEADER_JS_LOG: undefined});
    } return                            BG_HEADER_JS_LOG;
};
/*}}}*/
/*_ log_this_get {{{*/
let log_this_get = function(_caller)
{
    switch(_caller) {
    case "bg_header_addListener"                            : return BG_HEADER_JS_LOG || LOG_MAP.B_LOG6_ONHEADER || worker_js.logging();
    case "bg_header_onHeadersReceived"                      : return BG_HEADER_JS_LOG || LOG_MAP.B_LOG6_ONHEADER || PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER;
    case "bg_header_onHeadersReceived_PATCH_CSP"                             : return BG_HEADER_JS_LOG || LOG_MAP.B_LOG6_ONHEADER || PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER;

    case "bg_header0_check_csp_idx"                         : return BG_HEADER_JS_LOG || LOG_MAP.B_LOG6_ONHEADER;
    case "bg_header1_check_SAVED_URL_SETTINGS"              : return BG_HEADER_JS_LOG || LOG_MAP.B_LOG6_ONHEADER || PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER;
    case "bg_header2_check_URL_TO_SKIP"                     : return BG_HEADER_JS_LOG || LOG_MAP.B_LOG6_ONHEADER;
    case "bg_header3_provide_DEFAULT_HEADER_CSP_TO_FILTER"  : return BG_HEADER_JS_LOG || LOG_MAP.B_LOG6_ONHEADER;
    case "bg_header4_activate_CSP_FILTER"                   : return BG_HEADER_JS_LOG || LOG_MAP.B_LOG6_ONHEADER;
    case "bg_header5_match_CSP_FILTER"                      : return BG_HEADER_JS_LOG || LOG_MAP.B_LOG6_ONHEADER;
    case "bg_header6_get_csp_filter_rules"                  : return BG_HEADER_JS_LOG || LOG_MAP.B_LOG6_ONHEADER;
    case "bg_header7_set_csp_filter_applied"                : return BG_HEADER_JS_LOG || LOG_MAP.B_LOG6_ONHEADER;
    case "bg_header8_apply_csp_filter_rules"                : return BG_HEADER_JS_LOG || LOG_MAP.B_LOG6_ONHEADER;
    }

/*{{{*/
    log("%c"+BG_HEADER_SCRIPT_ID  +"%c log_this_get: missing switch %c"+_caller
        ,lbH+lb2                   ,lbL+lf2                        ,lbR+lf4    );

    return false;
/*}}}*/
};
/*}}}*/
/*}}}*/

// ┌──────────┐
// │ LISTENER │
// └──────────┘
/*{{{*/
const PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER = false;//true;

/*}}}*/
/*➔ bg_header_addListener {{{*/
let bg_header_addListener = function()
{
/*{{{*/
let   caller = "bg_header_addListener";
let log_this = log_this_get(caller);

/*}}}*/

    /*..... permission ..........SCRIPT_ID..NAMESPACE..................FUNCTIONALITY............PERMISSION.*/
    if(!log_permission(BG_HEADER_SCRIPT_ID, chrome.webRequest        , "Filtering Headers CSP", "webRequest"        , log_this)) return;

try {
    let blocking
        = chrome.runtime.getManifest().permissions.includes("webRequestBlocking");

    let extraInfoSpec
        = blocking
        ? [ chrome.webRequest.OnHeadersReceivedOptions.RESPONSE_HEADERS // to include the response headers in the details object passed to the listener
          , chrome.webRequest.OnHeadersReceivedOptions.BLOCKING         // to make the request synchronous, so you can modify request and response headers
          , chrome.webRequest.OnHeadersReceivedOptions.EXTRA_HEADERS    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived
        ]
        : [ chrome.webRequest.OnHeadersReceivedOptions.RESPONSE_HEADERS
          , chrome.webRequest.OnHeadersReceivedOptions.EXTRA_HEADERS
        ]
    ;
if( log_this) log_object(caller+" ● onHeadersReceived ● extraInfoSpec", extraInfoSpec);

    chrome.webRequest.onHeadersReceived
        .addListener( bg_header_onHeadersReceived           // LISTENER
                      , { //           <scheme>             // FILTER
                          //           |   <host>
                          //           |   | <path>
                          //           |   | |
                          //           v   v v
                          //urls  : [ "*://*/*"          ]
                          //urls  : [ "*://remotetabs/*" ]
                            urls  : [ "<all_urls>"       ]

                          //types : [ "main_frame"                        ]
                          //types : [ "main_frame", "xmlhttprequest"      ]
                          //types : [               "sub_frame"           ]
                          //types : [ "main_frame", "sub_frame"           ]
                          //types : [ "main_frame", "sub_frame" , "other" ]
                          //types : [                             "other" ]
                          //types : [                            "object" ]
                      }
                      , extraInfoSpec
                    );

//  ../OHRExtension/background.js
//
//  chrome
//      .webRequest
//      .onHeadersReceived
//      .addListener(   ohr_listener
//                    , {urls: ["<all_urls>"]}
//                    , extraInfoSpec
//                  );

}
catch(error) { log(BG_HEADER_SCRIPT_ID+"."+caller, error); }
finally      {
if( log_this || log_ACTIVATED() || LOG_MAP.B_LOG0_MORE) log_STORAGE();
}
};
/*}}}*/
/*_ ohr_listener {{{*/
const LOG_INTERVAL = 1000; /* ms */
let last_log_time  = 0;
let ohr_listener = function(details) /* eslint-disable-line no-unused-vars */
{
    let this_time = new Date().getTime();
    if((this_time - last_log_time) > LOG_INTERVAL)
    {
        console.log(BG_HEADER_SCRIPT_ID+".ohr_listener(details):", details);

        last_log_time = this_time;
    }
    return { responseHeaders: details.responseHeaders };
};
/*}}}*/
/*_ bg_header_onHeadersReceived {{{*/
// async {{{
//  bg_header_onHeadersReceived = async function(details)
//}}}
let bg_header_onHeadersReceived =       function(details)
{
/*LOG{{{*/
let   caller = "bg_header_onHeadersReceived";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

//if( log_ACTIVATED() ) log_console_clear(LOG_MAP.B_LOG3_PRESERVE, caller);//FIXME .. may be triggered by page reloading calls

/*}}}*/
    // ┌───────────────────────────────────────────────────────────────────────┐
    // │ FIXME ● Opera does not dispatch main page url responseHeaders ● FIXME │
    // └───────────────────────────────────────────────────────────────────────┘
    /* [tabId] [url] [ohr] {{{*/
    let tabId = details.tabId;
    if( tabId <= 0) return details.responseHeaders;

    let url   = bg_tabs_get_tabId_key(tabId, "url");

    let ohr   = bg_tabs_get_tabId_key(tabId, "onHeadersReceived");
    /*}}}*/
    /* IGNORING CHROME_SCHEME {{{*/
    if( url && url.includes(CHROME_SCHEME))
    {
        log_IGNORING(url, caller);

        return details.responseHeaders;
    }
    /*}}}*/
    /* ORH ● SETTING  [CURRENT  TAB  URL ] TO BE THE FIRST RECEIVED {{{*/
    if(!url) {
        url   = (details.url || details.pendingUrl);

if( log_this) log("%c OHR  %c SETTING TAB url=["+url+"] %c ohr=["+ohr+"]"
                  ,lbH+lb5,lbH+lf5                     ,lbH+lf6          );

        bg_tabs_set_tabId_key_val(tabId, "url", url);
    }
    /*}}}*/
    /* ORH ● SKIPPING [ALREADY  RECEIVED ] {{{*/
    if( ohr )
    {
if( log_more) log("%c OHR  %c SKIPPING ALREADY RECEIVED url["+url+"]"
                  ,lbH+lf6,lbH+lf6                  );

        return details.responseHeaders;
    }
    /*}}}*/
    /* ORH ● IGNORING [OTHER THAN TAB URL] {{{*/
//  if( !details.url.startsWith(url) )
    if(  details.url !=         url  )
    {
if( log_more) log("%c OHR  %c WAITING FOR %c"+url+" %c IGNORING url=["+log_js.ellipsis(details.url,64)+"]"
                  ,lbH+lf7,lbL+lb9+lf2   ,lbR+lb2  ,lf8                                                   );

let url_domain =  bg_store_GET_url_domain( details.url );
if( log_more) log_object(mPadEnd(details.type||"",16)+" "+B_ON_HEADER_RECEIVED+" FROM "+url_domain, details, lf8);

        return details.responseHeaders;
    }
    /*}}}*/
    /* ORH ● HANDLING RECEIVED HEADER {{{*/

if( log_this) log("%c OHR  %c HANDLING url=["+details.url+"]"
                  ,lbH+lb7,lbH+lf7                          );
    bg_tabs_set_tabId_key_val(tabId, "onHeadersReceived", true);

    return bg_header_onHeadersReceived_PATCH_CSP( details );
    /*}}}*/
};
/*}}}*/
/*_ bg_header_onHeadersReceived_PATCH_CSP {{{*/
let bg_header_onHeadersReceived_PATCH_CSP = function(details)
{
/*{{{*/
let   caller = "bg_header_onHeadersReceived_PATCH_CSP";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

let      tabId = details.tabId;
let csp_filter = bg_tabs_get_tabId_key(tabId, "csp_filter");

/*}}}*/

    /* [log_result] [log_tag] {{{*/
    let log_tag
        = (csp_filter == FILTER3_REMOVE) ? "LOG3_TAG"
        : (csp_filter == FILTER4_CUSTOM) ? "LOG4_TAG"
        : (csp_filter == FILTER5_RELAX ) ? "LOG5_TAG"
        : (csp_filter == FILTER6_NONE  ) ? "LOG6_TAG"
        :                                  "LOG0_TAG"
    ;

    let log_result = "", lxx = lf9;
    /*}}}*/
if( log_more) log_sep_top(caller+(PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER ? " ➔ PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER" : ""), log_tag);
    let csp_filter_applied;
    let csp_filter_effect  = FILTER_APPLIED8_NO_CSP;
    let csp_idx            = -1;
try {
    /* bg_header0_check_csp_idx {{{*/
    csp_idx  = bg_header0_check_csp_idx(tabId, details.url, details.responseHeaders);

    let args = { initiator       : details.initiator
        ,        responseHeaders : details.responseHeaders
        ,        tabId
        ,        url             : details.url
        ,        csp_filter
        ,        csp_idx
    };
    /*}}}*/
    /*  bg_header1_check_SAVED_URL_SETTINGS {{{*/
    if(!bg_header1_check_SAVED_URL_SETTINGS( args ))
    {
        log_result = "called bg_header1_check_SAVED_URL_SETTINGS";
        log_tag    = "LOG4_TAG";

        return details.responseheaders;
    }
    /*}}}*/
    /*  bg_header2_check_URL_TO_SKIP {{{*/
    if( bg_header2_check_URL_TO_SKIP( args ) )
    {
        log_result = bg_store_GET_url_domain( details.url );
        log_tag    = "LOG0_TAG";

        return details.responseHeaders;
    }
    /*}}}*/
    /* bg_header3_provide_DEFAULT_HEADER_CSP_TO_FILTER {{{*/
    if((csp_idx < 0) && PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER)
    {
        csp_idx = bg_header3_provide_DEFAULT_HEADER_CSP_TO_FILTER( args );
    }

    bg_tabs_set_tabId_key_val(tabId, "has_CSP", (csp_idx >= 0));
    /*}}}*/
    /*  bg_header4_activate_CSP_FILTER {{{*/
    if(!bg_header4_activate_CSP_FILTER( args ))
    {
        log_result = "NO csp_filter activated";
        log_tag    = "LOG0_TAG";

        return details.responseHeaders;
    }
    /*}}}*/
    /*  bg_header5_match_CSP_FILTER {{{*/
    if(!bg_header5_match_CSP_FILTER( args ))
    {
        log_result = "DOMAIN MISSMATCH: HEADER ➔ TAB";
        log_tag    = "LOG8_TAG";

        return details.responseHeaders;
    }
    /*}}}*/
    /* bg_header6_get_csp_filter_rules {{{*/
    let csp_filter_rules = bg_header6_get_csp_filter_rules( args );
    if(!csp_filter_rules ) {
        log_result = FILTER_EFFECT2_RULES_MISSING;
        log_tag    = "LOG2_TAG";

        return details.responseHeaders;
    }
    args.csp_filter_rules = csp_filter_rules;
    /*}}}*/
    /* bg_header7_set_csp_filter_applied {{{*/
    csp_filter_applied = bg_header7_set_csp_filter_applied(args);

    log_result         = csp_filter_applied;
    /*}}}*/
    /* bg_header8_apply_csp_filter_rules {{{*/
    if(csp_idx >= 0)
    {
        args.csp_filter_applied = csp_filter_applied;

        bg_header8_apply_csp_filter_rules( args );
    }
    /*}}}*/
    // RETURN PATCHED HEADERS {{{*/
    switch(  csp_filter_applied ) {
        case FILTER_APPLIED5_RELAXED   : { csp_filter_effect = FILTER_EFFECT5_RULES_RELAXED;    lxx = lf5; } break;
        case FILTER_APPLIED4_CUSTOM    : { csp_filter_effect = FILTER_EFFECT4_RULES_CUSTOMIZED; lxx = lf4; } break;
        case FILTER_APPLIED3_REMOVED   : { csp_filter_effect = FILTER_EFFECT3_RULES_REMOVED;    lxx = lf3; } break;
        case FILTER_APPLIED1_FINE      : { csp_filter_effect = FILTER_APPLIED1_FINE;            lxx = lf1; } break;
        case FILTER_APPLIED2_NO_RULES  : { csp_filter_effect = FILTER_APPLIED2_NO_RULES;        lxx = lf2; } break;
        case FILTER_APPLIED8_NO_CSP    : { csp_filter_effect = FILTER_APPLIED8_NO_CSP;          lxx = lf8; } break;
        default:                         { csp_filter_effect = "";                              lxx = lf0; } break;
    }
    bg_tabs_set_tabId_key_val(tabId, "csp_filter_effect", csp_filter_effect);

if( log_more) log_object(" ● PATCHED HEADERS "+SYN+" ["+csp_filter_applied+" → "+csp_filter_effect+"] "+SYN+" "+details.url, details.responseHeaders, lbH+lxx);

    return { responseHeaders : details.responseHeaders }; /* XXX .. this is the expected return value */
    /*}}}*/
}
finally {
if( log_more) log_sep_bot(caller+" "+log_result, log_tag);
if( log_this && (csp_idx >= 0)) log_object(" ● PATCHED CSP HEADER "+SYN+" ["+csp_filter_applied+" → "+csp_filter_effect+"] "+SYN+" "+details.url, details.responseHeaders[csp_idx], lbH+lxx);
//console.log("details.responseHeaders["+csp_idx+"]", details.responseHeaders[csp_idx]);

    if(details.tabId >= 0) bg_page_POPUP_pageAction(details.tabId, caller);

if( log_this || log_ACTIVATED() || LOG_MAP.B_LOG0_MORE) log_STORAGE();
}
};
/*}}}*/

// ┌──────────┐
// │ HANDLER  │
// └──────────┘
/*_ bg_header0_check_csp_idx {{{*/
let bg_header0_check_csp_idx = function(tabId,url,responseHeaders)
{
/*{{{*/
let   caller = "bg_header0_check_csp_idx";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
    /* [csp_idx] {{{*/
    let csp_idx = -1;
    let csp_name;
    for(let i=0; i < responseHeaders.length; ++i)
    {
        let    name  = responseHeaders[i].name.toLowerCase();
        if(    name ==         "content-security-policy"
            || name.startsWith("content-security-policy")
            || name ==         "x-webkit-csp"
        ) {
            csp_idx  = i;
            csp_name = name;
            break;
        }
    }

    bg_tabs_set_tabId_key_val(tabId, "csp_name", csp_name);
    /*}}}*/
/*LOG{{{*/

if(csp_idx >= 0) {
    if( log_more) log("%c FOUND HEADER CSP IN:%c "+bg_store_GET_url_domain(url), lbL+lb6,lbR+lf6);
    if( log_this) log_object(" → responseHeaders["+csp_idx+"] → ["+csp_name+"]" , responseHeaders[csp_idx]      ,    lf6);
    if( log_more) log("responseHeaders["+csp_idx+"]");
    if( log_more) console.dir(responseHeaders[csp_idx]);
    if( log_more) log_csp_rules("CHECKING HEADER CSP RULES:",                     responseHeaders[csp_idx].value        );
} else {
    if( log_more) log("%c ...NO HEADER CSP IN:%c "+bg_store_GET_url_domain(url), lbL+lb6,lbR+lf6);
}
/*}}}*/
/* REMOVING CSP ENTRY {{{
//if(index >= 0)
//{
//if(log_this) log("REMOVING HEADER CSP ENTRY responseHeaders["+index+"]", responseHeaders[index]);
//    responseHeaders.splice(index,1);
//}
}}}*/

    return csp_idx;
};
/*}}}*/
/*_ bg_header1_check_SAVED_URL_SETTINGS {{{*/
let bg_header1_check_SAVED_URL_SETTINGS = function(args)
{
/*LOG{{{*/
let   caller = "bg_header1_check_SAVED_URL_SETTINGS";
let log_this = log_this_get(caller);

/*}}}*/
    let { tabId, url } = args;
    let log_result;
try {

    if(   !bg_tabs_get_tabId_key(tabId, "reloading"              )
       && !bg_tabs_get_tabId_key(tabId, "get_settings_called"    )
       && !bg_tabs_get_tabId_key(tabId, "get_settings_answered"  )
    ) {
        log_result =  "CALLING bg_settings_tabs6_get_url_settings";

//      if(!await bg_settings_tabs6_get_url_settings(tabId, url))
        if(      !bg_settings_tabs6_get_url_settings(tabId, url))
            return false;
    }
    else {
        log_result = "SKIPPING bg_settings.bg_settings_tabs6_get_url_settings";

    }
    return true;
} finally {
if( log_this) log_object("CHECK URL SETTINGS "+SYN+" "+log_result, bg_tabs_get_tabId(tabId), lf6);
}
};
/*}}}*/
/*_ bg_header2_check_URL_TO_SKIP {{{*/
let bg_header2_check_URL_TO_SKIP = function(args)
{
/*LOG{{{*/
let   caller = "bg_header2_check_URL_TO_SKIP";
let log_this = log_this_get(caller);

/*}}}*/
    let { url, initiator } = args;

    let log_result;
    let url_domain =  bg_store_GET_url_domain( url );
try {
    if( url_domain == "notifications.google.com")
    {
        log_result = "SKIPPING URL";

        return true;
    }
    else {
        log_result = "NOT AN URL TO SKIP";

        return false;
    }
} finally {
if( log_this) log_object("URL TO SKIP "+SYN+" "+log_result, { url_domain, initiator }, lf6);
}
};
    /*}}}*/
/*_ bg_header3_provide_DEFAULT_HEADER_CSP_TO_FILTER {{{*/
let bg_header3_provide_DEFAULT_HEADER_CSP_TO_FILTER = function(args)
{
/*LOG{{{*/
let   caller = "bg_header3_provide_DEFAULT_HEADER_CSP_TO_FILTER";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
    let { tabId, responseHeaders, csp_idx } = args;

    bg_tabs_set_tabId_key_val(tabId, "csp_idx", csp_idx);

    if(csp_idx < 0)
    {
if( log_this) log(SYN+" %c PROVIDING DEFAULT HEADER CSP TO FILTER:", lb6);

        let  name = "content-security-policy";
        let value = ""
            +           "default-src data: 'unsafe-inline'; "
            +             "style-src data: 'unsafe-inline'; "
            +            "script-src data: 'unsafe-inline'; "
            +       "script-src-elem data: 'unsafe-inline'; "
            +       "script-src-attr data: 'unsafe-inline'; "
/*{{{
        //  +               "img-src "                      + url_domain +"; "
        //  +              "font-src "                      + url_domain +"; "
        //  +             "frame-src "                      + url_domain +"; "
        //  +             "media-src "                      + url_domain +"; "
        //  +              "base-uri 'self'; "
        //  +           "form-action 'self'; "
        //  +       "frame-ancestors ; "
}}}*/
        ;
        responseHeaders.push({ name, value });
        csp_idx = responseHeaders.length - 1;
if( log_this) log("...responseHeaders["+(responseHeaders.length-1)+"]", responseHeaders[responseHeaders.length-1]);
/* CSP ERROR REPORT {{{

    default-src data: 'unsafe-inline';
     script-src data: 'unsafe-inline' www.jslint.com;
      style-src data: 'unsafe-inline' www.jslint.com;

    Refused to load the stylesheet
    because it violates the following Content Security Policy directive:

    "default-src 'self' 'unsafe-inline'"

    Note that 'style-src' was not explicitly set
    so 'default-src' is used as a fallback.

}}}*/

if( log_more) log_object("responseHeaders", responseHeaders, lf6);
    }
    else {
if( log_more) log("%c [csp_idx "+csp_idx+"] ➔ PRIVIDING NO DEFAULT HEADER CSP", lf6);
    }

    return csp_idx;
};
/*}}}*/
/*_ bg_header4_activate_CSP_FILTER {{{*/
let bg_header4_activate_CSP_FILTER = function(args)
{
/*{{{*/
let   caller = "bg_header4_activate_CSP_FILTER";
let log_this = log_this_get(caller);

/*}}}*/
    let { tabId, csp_filter, csp_idx } = args;

    let log_result, l_x;
try {
    /* FILTER NOT REQUESTED {{{*/
    if(     !csp_filter) {
        l_x = 8; log_result = "FILTER NOT REQUESTED";

        /* update tab status */
        bg_tabs_set_tabId_key_val(tabId, "last_reload_not_filtered"  , caller);
        return false;
    }
    /*}}}*/
    /* NO CSP TO FILTER {{{*/
    else if(csp_idx < 0) {
        l_x = 0; log_result = "REMOVING "+csp_filter+"\n● header has no CSP to filter";

        csp_filter = "";
        let message
            = {   REPLY  : log_result
                , csp_filter
                , caller : BG_HEADER_SCRIPT_ID+".".caller
            };
        setTimeout(bg_message_sendMessage, 1000, message, caller); /* let popup icon blink */

        /* update tab status */
        bg_tabs_set_tabId_key_val(tabId, "last_reload_not_filtered"  , caller);
        bg_tabs_del_tabId_key    (tabId, "csp_filter");
        return false;
    }
    /*}}}*/
    /* LOAD CSP FILTER TO APPLY {{{*/
    else {
        l_x = 6; log_result = csp_filter;

        bg_csp_load_filter( csp_filter );

        let message
            = {   csp_filter
                , caller : BG_HEADER_SCRIPT_ID+".".caller
            };
        setTimeout(bg_message_sendMessage, 1000, message, caller);

        /* update tab status */
        bg_tabs_del_tabId_key    (tabId, "last_reload_not_filtered");
        return true;
    }
    /*}}}*/
} finally {
if( log_this) log_object("ACTIVATE FILTER "+SYN+" "+log_result, { csp_idx , csp_filter}, lfX[l_x]);
}
};
    /*}}}*/
/*_ bg_header5_match_CSP_FILTER {{{*/
let bg_header5_match_CSP_FILTER = function(args)
{
/*LOG{{{*/
let   caller = "bg_header5_match_CSP_FILTER";
let log_this = log_this_get(caller);

/*}}}*/
    let { tabId, url, csp_filter } = args;

    let header_domain           = bg_store_GET_url_domain(                              url   );
    let taburl_domain           = bg_store_GET_url_domain( bg_tabs_get_tabId_key(tabId, "url") );

    let log_result;
try {
    if(header_domain == taburl_domain)
    {
        log_result = "TAB URL MATCHED WITH "+csp_filter;

        bg_csp_load_filter( csp_filter );

        return true;
    }
    else {
        log_result = "TAB URL NOT MATCHED %c["+header_domain+"]";

        return false;
    }
} finally {
if( log_this) log_object("FILTER MATCH "+SYN+" "+log_result, { url , csp_filter, header_domain , taburl_domain }, lf6);
}
};
        /*}}}*/
/*_ bg_header6_get_csp_filter_rules {{{*/
let bg_header6_get_csp_filter_rules = function(args)
{
/*LOG{{{*/
let   caller = "bg_header6_get_csp_filter_rules";
let log_this = log_this_get(caller);

/*}}}*/
    let { tabId, csp_filter } = args;

    let log_result;

    let csp_filter_rules  = bg_csp_get_filter_rules( csp_filter );
try {
    if( csp_filter_rules )
    {
        log_result = "HEADER CSP FILTER EFFECT: ["+csp_filter+"]";

        bg_tabs_set_tabId_key_val(tabId, "csp_filter_rules", csp_filter_rules);

        return csp_filter_rules;
    }
    else {
        log_result = FILTER_EFFECT2_RULES_MISSING;

        return null;
    }
} finally {
if( log_this) log_object("FILTER RULES "+SYN+" "+log_result, bg_tabs_get_tabId(tabId), lf6);
}
};
/*}}}*/
/*_ bg_header7_set_csp_filter_applied {{{*/
let bg_header7_set_csp_filter_applied = function(args)
{
/*LOG{{{*/
let   caller = "bg_header7_set_csp_filter_applied";
let log_this = log_this_get(caller);

/*}}}*/
    let { csp_idx, csp_filter, csp_filter_rules } = args;

    let log_result, l_x;
    let csp_filter_applied;
try {
    if(csp_idx < 0)
    {
        l_x = 8; log_result = "HEADER CSP FILTERING: NO CSP";

        csp_filter_applied = FILTER_APPLIED8_NO_CSP;
    }
    else if(csp_filter_rules.length > 0)
    {
        l_x = 6; log_result = "HEADER CSP FILTERING: APPLYING "+csp_filter+" RULES x"+csp_filter_rules.length;

        csp_filter_applied
            = (csp_filter == FILTER5_RELAX ) ? FILTER_APPLIED5_RELAXED
            : (csp_filter == FILTER4_CUSTOM) ? FILTER_APPLIED4_CUSTOM
            : (csp_filter == FILTER3_REMOVE) ? FILTER_APPLIED3_REMOVED
            :                                  csp_filter
        ;
    }
    else {
        l_x = 2; log_result = "HEADER CSP FILTERING: NO RULE SELECTED";

        csp_filter_applied = FILTER_APPLIED2_NO_RULES;
    }
    return csp_filter_applied;
} finally {
if( log_this) log_object("FILTER APPLIED "+SYN+" "+log_result, { csp_filter, csp_filter_rules, csp_filter_applied }, lfX[l_x]);
}
};
/*}}}*/
/*_ bg_header8_apply_csp_filter_rules {{{*/
let bg_header8_apply_csp_filter_rules = function(args)
{
/*LOG{{{*/
let   caller = "bg_header8_apply_csp_filter_rules";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/

    let { tabId, url, csp_idx, csp_filter, csp_filter_rules, csp_filter_applied, responseHeaders } = args;

if(log_more) log("%c"+caller+"%c .......responseHeaders.length=["+ responseHeaders.length   +"]"
                 , lbL+lb6   ,lbR+lf6                                           );

    let log_tag;
    let log_result;
    let headers_csp;
try {
    for(let i=0, iLen = csp_filter_rules.length; i !== iLen; ++i)
    {
        /* - MATCHED HEADER URL {{{*/
if(log_more) log("%c csp_filter_rules #"+i+" .. %c "+csp_filter_rules[i][0]+"%c.test("+url+"):"
                 ,lbH+lf6                       ,lbL+lf6                    ,lbR+lf6           );
try {
        if( !csp_filter_rules[i][0].test(url) )
        {
            log_result  = "NO URL MATCH";
            log_tag = 8;

            continue;
        }
}
catch(error) { log(BG_HEADER_SCRIPT_ID+"."+caller, error); log_object("csp_filter_rules", csp_filter_rules); break; }
        log_result = "URL MATCHED: "+csp_filter;
        log_tag = 6;
if(log_more) log_object("...csp_filter_rules",csp_filter_rules,lf6,false);

        csp_filter_applied = FILTER_APPLIED8_NO_CSP;
        /*}}}*/
        /* - LOOKFOR HEADER CSP {{{*/
if(log_more) log_js.log_group("%c"+SAR+"%c looking "+responseHeaders.length+" responseHeaders for subrules "+SAD, lbb+lbH+lb0, lbb+lbH+lb6);

        let subrules = csp_filter_rules[i][1];

        for(let j=0, jLen = responseHeaders.length; j !== jLen; ++j)
        {
            let    name  = responseHeaders[j].name.toLowerCase();
            if(    name ==            "content-security-policy"
                   || name.startsWith("content-security-policy")
                   || name ==         "x-webkit-csp"
                   // name ==         "x-xss-protection"
              ) {
                if(  log_more) log("%c responseHeaders["+mPadStart(j,2)+"]%c "+name+" ", lb6,lf6);
                if( !log_more) break; // FOUND IT
            }
            else if( log_more) log("%c responseHeaders["+mPadStart(j,2)+"]%c "+name+" ", lf0,lb0);
        }
if(log_more) console.groupEnd();
        /*}}}*/
        /* - REPLACE HEADER CSP {{{*/
        if(csp_idx >= 0)
        {
            headers_csp = responseHeaders[csp_idx];
if( log_more) log_object("...headers_csp", headers_csp, lb2+lf9);

            csp_filter_applied = FILTER_APPLIED1_FINE;

if(log_more) log_CSP("FILTER CSP HEADER", headers_csp, 6);
            for(let k=0, kLen = subrules.length; k !== kLen; ++k)
            {
                let from = subrules[k][0];
                let   to = subrules[k][1];
if(log_more) log("%c ...replace ["+from+"] %c with ["+to+"]", lb6, lb4);

                // ┌───────────────────────────────────────────────────────────┐
                // │ MODIFYING CSP                                             │
                // └───────────────────────────────────────────────────────────┘
                let         value = headers_csp.value;
                headers_csp.value = headers_csp.value.replace(from, to);

                if(csp_filter_applied == FILTER_APPLIED1_FINE)
                {
                    if(value != headers_csp.value)
                        csp_filter_applied
                            = (csp_filter == FILTER5_RELAX ) ? FILTER_APPLIED5_RELAXED
                            : (csp_filter == FILTER4_CUSTOM) ? FILTER_APPLIED4_CUSTOM
                            : (csp_filter == FILTER3_REMOVE) ? FILTER_APPLIED3_REMOVED
                            :                                  csp_filter
                    ;
                }

            }
if( log_more) log_object("...headers_csp", headers_csp, lb9+lf8);
        }
        /*}}}*/
        /* - MISSING HEADER CSP {{{*/
        else {

if(log_this) log("NO CSP HEADER TO FILTER");
        }
        /*}}}*/
    }
    bg_tabs_set_tabId_key_val(tabId, "csp_filter_applied", csp_filter_applied);
} finally {
if( log_more) log_CSP   ("FILTERED WITH csp_filter_applied=["+                    csp_filter_applied+"]", headers_csp  ,     log_tag );
if( log_this) log_object("FILTER APPLIED "+SYN+" "+log_result, { url, csp_filter, csp_filter_applied    , headers_csp }, lfX[log_tag]);
}
};
/*}}}*/

// ┌──────────┐
// │ EXPORT   │
// └──────────┘
/*➔ EXPORT {{{*/
    return { name : "bg_header"
        ,    bg_header_addListener
        ,    logging
        // DEBUG
        ,  bg_header_hasListener    : () => chrome.webRequest.onHeadersReceived.hasListener   ( bg_header_onHeadersReceived )
        ,  bg_header_removeListener : () => chrome.webRequest.onHeadersReceived.removeListener( bg_header_onHeadersReceived )
    };
/*}}}*/
}());

// ┌──────────┐
// │ DOC      │
// └──────────┘
/* ● [onHeadersReceived] {{{

 https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived
 https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns

:e $APROJECTS/ARCHIVES/iwintoo/GITLAB/ivanwfr/iwintoo/WSS/javascript/wss_mirror_bg.js
}}}*/
//  ● [extraInfoSpec] .. OnHeadersReceivedOptions {{{
// ┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ OnHeadersReceivedOptions                                                                         │
// │    parameter extraInfoSpec                                                                       │
// │                                                                                                  │
// │ https://developer.chrome.com/docs/extensions/reference/webRequest/#type-OnHeadersReceivedOptions │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────┤
// │                                                                                                  │
// │ "blocking"                                                                                       │
// │ Specifies the request is blocked until the callback function returns.                            │
// │                                                                                                  │
// │ "responseHeaders"                                                                                │
// │ Specifies that the response headers should be included in the event.                             │
// │                                                                                                  │
// │ "extraHeaders"                                                                                   │
// │ Specifies that headers can violate Cross-Origin Resource Sharing (CORS).                         │
// └──────────────────────────────────────────────────────────────────────────────────────────────────┘
//}}}
/* ● mozilla [webRequest] vs. [declarativeNetRequest] {{{
   ● https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest

   ● The only positive note:
   . The [webRequest] API is more flexible than the [declarativeNetRequest]
      API because it allows extensions to evaluate a request programmatically.
}}}*/
/* ● ChatGPT 230806 {{{

Is there any compatibility issues concerning onHeadersReceived dispatching
where Chrome would work fine but Opera would fail
with the exact same provided filters, types and OnHeadersReceivedOptions?
"{{{

"}}}
Is there a way to debug onHeadersReceived event dispatching in Opera Devtools?
"{{{
    Yes, you can debug the onHeadersReceived event dispatching in Opera Devtools.
    To do this, you need to enable developer mode in Opera.
    You can do this by going to the opera:extensions page and then clicking on Developer Mode1.

    Once developer mode is enabled,
    you will have access to a bunch of options to play with.

    You can load your extension in Developer Mode by clicking Load Extension,
    and then selecting the directory of that extension1.

    Once the extension is loaded,
    you will see a Reload button on the right.

    Whenever you make a change in your extension,
    you can instantly see the results by clicking the Reload button1.

    You can also inspect resources in the extension by clicking on the link provided in the Inspect views field1.

    This will open the Developer Tools for Opera,
    and will give you all the resources to inspect elements within it,
    just like you have for normal web pages1.


"}}}
What about when my onHeadersReceived listener is not called?
"{{{
    Searching for: onHeadersReceived listener not called
    Generating answers for you…

    There could be several reasons why the onHeadersReceived listener is not being called. Here are some common issues that you might want to check:

    Make sure that you have the necessary permissions in your manifest file. You need to have the "webRequest" and "webRequestBlocking" permissions1.
    Check if the filter object passed to the addListener method is correct. The urls property should contain an array of match patterns that specify which URLs the listener should be triggered for1.
    Make sure that you have included "responseHeaders" in the extraInfoSpec array when adding the listener. This is necessary to have the response headers passed into the listener, along with the rest of the request data1.
    If you are using the "blocking" option in extraInfoSpec, make sure that your listener function returns a BlockingResponse object1.
    If you are using asynchronous code inside your listener function, make sure to use a Promise to return a BlockingResponse object1.
    If you have checked all of these and your listener is still not being called, there might be some other issue. You can try debugging your code by adding console logs or breakpoints to see if there are any errors or issues. Is there anything else I can help you with? 😊

    Learn more:
    1. developer.mozilla.org
    2. stackoverflow.com
    3. discourse.mozilla.org
"}}}

As my extension complies with manifest v3, "blocking" is not used.
And, as long as Chrome works correctly, Opera's problem is probably related to event dispatching,
where I can't do any of the suggested operations.
How can I get information on why my handler isn't even called during the reload of a content page?
"{{{
    If your extension complies with manifest v3, then you should be using the chrome.declarativeNetRequest API instead of the chrome.webRequest API1. The chrome.declarativeNetRequest API allows you to intercept, block, or modify network requests by declaring rules that specify the behavior of network requests1. This API is more performant and privacy-preserving than the chrome.webRequest API1.
    If you are already using the chrome.declarativeNetRequest API and your onHeadersReceived listener is still not being called, there could be several reasons for this. One possibility is that there is a bug in Opera that is causing the issue. In this case, you might want to report the issue to the Opera support team for further assistance. Another possibility is that there is an issue with your code or configuration. You can try debugging your code by adding console logs or breakpoints to see if there are any errors or issues.
    Is there anything else I can help you with? 😊
"}}}
The "declarativeNetRequest" is just a way of getting a third-party layer to do the work for me and also adds an extra dependency.
I claim to be able to generate my own code so I can learn and take full responsibility for the consequences of a failure and be able to do something about it rather than wait for someone else to debug the damn thing for me....
I've been adding console logs to my code all day, which is why I know that event management is out of my reach when it comes to event dispatching.
Is there anything else you could suggest, apart from asking the developers for help?
"{{{
    I understand your frustration and desire to solve the issue on your own. If you have already tried adding console logs and debugging your code, there are a few other things you could try:
    Make sure that your extension is up to date and that you are using the latest version of Opera.
    Try disabling other extensions that might be interfering with your extension.
    Check the Opera developer console for any error messages or warnings that might provide more information about the issue.
    Try running your extension in a different browser, such as Chrome, to see if the issue is specific to Opera or if it occurs in other browsers as well.
    If none of these suggestions help, it might be worth reaching out to the Opera support team or the developer community for further assistance. They may have more information about any known issues or bugs that could be causing the problem. Is there anything else I can help you with? 😊
"}}}
}}}*/
// ● [filter.types ] .. main_frame {{{
// ┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ chrome.webRequest.onHeadersReceived.addListener:                                                 │
// │    parameter filter                                                                              │
// │    property  types                                                                               │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────┤
// │ Value must be one of:                                                                            │
// │                                                                                                  │
// │     csp_report                                                                                   │
// │     font                                                                                         │
// │     image                                                                                        │
// │   ➔ main_frame                                                                                   │
// │     media                                                                                        │
// │     object                                                                                       │
// │     other                                                                                        │
// │     ping                                                                                         │
// │     script                                                                                       │
// │     stylesheet                                                                                   │
// │   ➔ sub_frame                                                                                    │
// │     webbundle                                                                                    │
// │     websocket                                                                                    │
// │     xmlhttprequest.                                                                              │
// └──────────────────────────────────────────────────────────────────────────────────────────────────┘
//}}}
// ● async {{{
// Asynchronous event listeners are not supported
//  https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived/\#:~:text=Opera
//      .addListener( (details) => console.log(BG_HEADER_SCRIPT_ID+" ● onHeadersReceived:"+LF,details);
//}}}
/* ● Opera Extensions {{{
:new C:/LOCAL/W10/Users/ivan/AppData/Roaming/Opera?Software/Opera?Stable/Extensions/jnmianodabipnkbkdekpgnhedjnjbcmd/1.1_0/background.js
}}}*/
/* ● declarativeNetRequest API {{{
https://css-tricks.com/how-to-transition-to-manifest-v3-for-chrome-extensions/
}}}*/
/* ● OHRExtension {{{
:new ../OHRExtension/background.js
}}}*/
