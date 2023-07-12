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

/* exported bg_header                 */
/* globals  background_js             */
/* globals  bg_csp                    */
/* globals  bg_settings               */
/* globals  bg_store                  */
/* globals  bg_tabs                   */
/* globals  log_js                    */

/* eslint-enable  no-redeclare        */

const BG_HEADER_SCRIPT_ID  = "bg_header";
const BG_HEADER_SCRIPT_TAG =  BG_HEADER_SCRIPT_ID +" (230712:21h:35)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
let bg_header  = (function() {
"use strict";

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
    , log_CSP
//  , log_console_clear
    , log_object
    , log_permission
    , log_sep_bot
    , log_sep_top
    , mPadStart
;

/*}}}*/
/*_ background_js {{{*/
let B_ON_HEADER_RECEIVED;
let B_SCRIPT_ID;
let CHROME_SCHEME;
let LOG_MAP;

let log_ACTIVATED;
let log_IGNORING;
let log_STORAGE;

/*}}}*/
//______________ bg_content
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
let bg_csp_pick_filter_rules;

/*}}}*/
//______________ bg_event
//______________ bg_header
//______________ bg_message
//______________ bg_page
/*_ bg_settings {{{*/
let bg_settings_tabs6_get_url_settings;

/*}}}*/
/*_ bg_store {{{*/
let bg_store_GET_url_domain;

/*}}}*/
/*_ bg_tabs {{{*/
let bg_tabs_del_tabId_key;
let bg_tabs_get_tabId;
let bg_tabs_get_tabId_key;
let bg_tabs_set_tabId_key_items;
let bg_tabs_set_tabId_key_val;

/*}}}*/
/*_ bg_header_import {{{*/
let bg_header_import = function()
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
    log_CSP                             = log_js.log_CSP;
//  log_console_clear                   = log_js.log_console_clear;
    log_object                          = log_js.log_object;
    log_permission                      = log_js.log_permission;
    log_sep_bot                         = log_js.log_sep_bot;
    log_sep_top                         = log_js.log_sep_top;
    mPadStart                           = log_js.mPadStart;

    /*}}}*/
    /*_ background_js {{{*/
    B_ON_HEADER_RECEIVED                  = background_js.B_ON_HEADER_RECEIVED;
    B_SCRIPT_ID                           = background_js.B_SCRIPT_ID;
    CHROME_SCHEME                         = background_js.CHROME_SCHEME;
    LOG_MAP                               = background_js.LOG_MAP;

    log_ACTIVATED                         = background_js.log_ACTIVATED;
    log_IGNORING                          = background_js.log_IGNORING;
    log_STORAGE                           = background_js.log_STORAGE;

    /*}}}*/
    //___________ bg_content
    /*_ bg_csp {{{*/

    FILTER3_REMOVE                   = bg_csp.FILTER3_REMOVE;
    FILTER4_CUSTOM                   = bg_csp.FILTER4_CUSTOM;
    FILTER5_RELAX                    = bg_csp.FILTER5_RELAX;
    FILTER6_NONE                     = bg_csp.FILTER6_NONE;

    FILTER_APPLIED1_FINE             = bg_csp.FILTER_APPLIED1_FINE;
    FILTER_APPLIED3_REMOVED          = bg_csp.FILTER_APPLIED3_REMOVED;
    FILTER_APPLIED4_CUSTOM           = bg_csp.FILTER_APPLIED4_CUSTOM;
    FILTER_APPLIED5_RELAXED          = bg_csp.FILTER_APPLIED5_RELAXED;
    FILTER_APPLIED2_NO_RULES         = bg_csp.FILTER_APPLIED2_NO_RULES;
    FILTER_APPLIED8_NO_CSP           = bg_csp.FILTER_APPLIED8_NO_CSP;

    FILTER_EFFECT2_RULES_MISSING     = bg_csp.FILTER_EFFECT2_RULES_MISSING;
    FILTER_EFFECT3_RULES_REMOVED     = bg_csp.FILTER_EFFECT3_RULES_REMOVED;
    FILTER_EFFECT4_RULES_CUSTOMIZED  = bg_csp.FILTER_EFFECT4_RULES_CUSTOMIZED;
    FILTER_EFFECT5_RULES_RELAXED     = bg_csp.FILTER_EFFECT5_RULES_RELAXED;

    bg_csp_load_filter               = bg_csp.bg_csp_load_filter;
    bg_csp_pick_filter_rules         = bg_csp.bg_csp_pick_filter_rules;

    /*}}}*/
    //___________ bg_event
    //___________ bg_header
    //___________ bg_message
    //___________ bg_page
    /*_ bg_settings {{{*/
    bg_settings_tabs6_get_url_settings      = bg_settings.tabs6_get_url_settings;

    /*}}}*/
    /*_ bg_store {{{*/
    bg_store_GET_url_domain   = bg_store.bg_store_GET_url_domain;

    /*}}}*/
    /*_ bg_tabs {{{*/
    bg_tabs_del_tabId_key            = bg_tabs.bg_tabs_del_tabId_key;
    bg_tabs_get_tabId                = bg_tabs.bg_tabs_get_tabId;
    bg_tabs_get_tabId_key            = bg_tabs.bg_tabs_get_tabId_key;
    bg_tabs_set_tabId_key_items      = bg_tabs.bg_tabs_set_tabId_key_items;
    bg_tabs_set_tabId_key_val        = bg_tabs.bg_tabs_set_tabId_key_val;

    /*}}}*/
//................._import    log_js    background_js    bg_content    bg_csp    bg_event    bg_header    bg_message    bg_page    bg_settings    bg_store    bg_tabs
log("%c   bg_header_import %c log_js %c background_js %c __________ %c bg_csp %c ________ %c "+"●●●●●● %c __________ %c _______ %c bg_settings %c bg_store %c bg_tabs "
    ,lbH+lb5              ,lf0      ,lf1             ,lf2          ,lf3      ,lf4        ,lf5+lbH     ,lf6          ,lf7       ,lf8           ,lf9        ,lf0         );
};
/*}}}*/
    setTimeout(bg_header_import,0);
/*}}}*/
/*{{{*/
const PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER = false;//true; // FIXME

/*}}}*/

/*➔ bg_header_addListener {{{*/
let bg_header_addListener = function()
{
/*{{{*/
let log_this = log_ACTIVATED();
let   caller = "bg_header_addListener";

/* [onHeadersReceived] {{{
:!start explorer "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived"
:!start explorer "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns"
:e $LOCAL/DATA/ANDROID/PROJECTS/RTabsExtension/javascript/background.js
:e $LOCAL/DATA/ANDROID/PROJECTS/iwintoo/wss_mirror_extension/wss_mirror_bg.js
}}}*/

/*}}}*/
    /*....................SCRIPT_ID..NAMESPACE..................FUNCTIONALITY............PERMISSION.*/
    if(!log_permission(B_SCRIPT_ID, chrome.webRequest        , "Filtering Headers CSP", "webRequest"        , log_this)) return;
/*  if(!log_permission(B_SCRIPT_ID, chrome.webRequestBlocking,  "Blocking Headers CSP", "webRequestBlocking", log_this)) return; */

try {
    /* ┌────────────────────────────────────────────────────────────────────┐ */
    /* │ webRequestBlocking                                        [UNUSED] │ */
    /* └────────────────────────────────────────────────────────────────────┘ */
    /* blocking requires webRequestBlocking {{{*/
//  let    permission = log_permission(B_SCRIPT_ID, chrome.webRequestBlocking,  "Blocking Headers CSP", "webRequestBlocking", log_ACTIVATED())
    let    permission = chrome.webRequestBlocking != undefined;
    let extraInfoSpec
        = permission
        ? [ "responseHeaders" , "blocking" ]
        : [ "responseHeaders"              ]
    ;
    /*}}}*/
    /* ┌────────────────────────────────────────────────────────────────────┐ */
    /* │ onHeadersReceived                                                  │ */
    /* └────────────────────────────────────────────────────────────────────┘ */
    /*{{{*/
    chrome.webRequest.onHeadersReceived
        .addListener( bg_header_onHeadersReceived                            // LISTENER
                      , { //         <scheme>
                          //         |   <host>
                          //         |   | <path>
                          //         |   | |
                          //         v   v v
                          urls  : [ "*://*/*"]                      // FILTER
                          , types : [ "main_frame", "sub_frame" ] }
                      , extraInfoSpec
                    );
    /*}}}*/
}
catch(error) { log(B_SCRIPT_ID+"."+caller, error); }
finally      { if( log_ACTIVATED() ) log_STORAGE(); }
};
/*}}}*/
/*_ bg_header_onHeadersReceived {{{*/
let bg_header_onHeadersReceived = async function(details)
{
    /*  URL {{{*/
    let url  = bg_tabs_get_tabId_key    (details.tabId, "url");
    if(!url)   bg_tabs_set_tabId_key_val(details.tabId, "url", (details.url || details.pendingUrl));

    if( url != details.url) return details.responseHeaders;

    /*}}}*/
/*LOG{{{*/
let   caller = "bg_header_onHeadersReceived";
let log_this = PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER || LOG_MAP.B_LOG6_ONHEADER;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

//( log_ACTIVATED() ) log_console_clear(LOG_MAP.B_LOG3_PRESERVE);

/*}}}*/
    /* IGNORING CHROME_SCHEME {{{*/
    if(url && url.startsWith(CHROME_SCHEME))
    {
        log_IGNORING(url, caller);

        return details.responseHeaders;
    }
    /*}}}*/
    /* APPLY [csp_filter] EVAL [csp_filter_effect] {{{*/
    let csp_filter = bg_tabs_get_tabId_key(details.tabId, "csp_filter");
    let csp_filter_effect;

    let log_tag
        = (csp_filter == FILTER3_REMOVE) ? "LOG3_TAG"
        : (csp_filter == FILTER4_CUSTOM) ? "LOG4_TAG"
        : (csp_filter == FILTER5_RELAX ) ? "LOG5_TAG"
        : (csp_filter == FILTER6_NONE  ) ? "LOG6_TAG"
        :                                         "LOG0_TAG"
    ;
    let log_result = "", lxx = lf9;
if( log_more) log_sep_top(caller+(PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER ? " ➔ PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER" : ""), log_tag);

    let url_domain =  bg_store_GET_url_domain( details.url );
if( log_this) log_object(B_ON_HEADER_RECEIVED+" FROM "+url_domain, details, lbH+lf6);
    /*}}}*/
try {
    // ┌────────────────────────────────────────────────┐
    // │ TODO (180610): SLICE THIS FUNCTION INTO CHUNKS │
    // └────────────────────────────────────────────────┘
/*{{{*/
    let has_CSP = check_has_CSP(details.url, details.responseHeaders);

    let args = { initiator       : details.initiator
        ,        responseHeaders : details.responseHeaders
        ,        tabId           : details.tabId
        ,        url             : details.url
        ,        csp_filter
        ,        has_CSP
        ,        log_this
        ,        log_more
    };
/*}}}*/
    /* check_SAVED_URL_SETTINGS {{{*/
    if(!await check_SAVED_URL_SETTINGS( args ))
    {
        log_result = "called check_SAVED_URL_SETTINGS";
        log_tag    = "LOG4_TAG";

        return details.responseheaders;
    }
    /*}}}*/
    /*  check_URL_TO_SKIP {{{*/
    if( check_URL_TO_SKIP( args ) )
    {
        log_result = url_domain;
        log_tag    = "LOG0_TAG";

        return details.responseHeaders;
    }
    /*}}}*/
    /* provide_DEFAULT_HEADER_CSP_TO_FILTER {{{*/
    if( PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER )
    {
        has_CSP = provide_DEFAULT_HEADER_CSP_TO_FILTER( args );
    }
    /*}}}*/
    /*  activate_CSP_FILTER {{{*/
    if(!activate_CSP_FILTER( args ))
    {
        log_result = "NO csp_filter activated";
        log_tag    = "LOG0_TAG";

        return details.responseHeaders;
    }
    /*}}}*/
    /*  match_CSP_FILTER {{{*/
    if(!match_CSP_FILTER( args ))
    {
        log_result = "DOMAIN MISSMATCH: HEADER ➔ TAB";
        log_tag    = "LOG8_TAG";

        return details.responseHeaders;
    }
    /*}}}*/
    /* pick_filter_rules {{{*/
    let csp_filter_rules = pick_filter_rules( args );
    if(!csp_filter_rules ) {
        log_result = FILTER_EFFECT2_RULES_MISSING;
        log_tag    = "LOG2_TAG";

        return details.responseHeaders;
    }
    args.csp_filter_rules = csp_filter_rules;
    /*}}}*/
    /* set_csp_filter_applied {{{*/
    let  csp_filter_applied = set_csp_filter_applied(args);

    log_result              = csp_filter_applied;
    /*}}}*/
    /* apply_csp_filter_rules {{{*/
    if( has_CSP )
    {
        args.csp_filter_applied = csp_filter_applied;

        let headers_csp = apply_csp_filter_rules( args );

if(log_more) log_CSP("FILTERED WITH args.csp_filter_applied=["+args.csp_filter_applied+"]", headers_csp.value,log_tag);
    }
    /*}}}*/
    // RETURN PATCHED HEADERS {{{*/
    switch(  csp_filter_applied) {
        case FILTER_APPLIED5_RELAXED   : { csp_filter_effect = FILTER_EFFECT5_RULES_RELAXED;    lxx = lf5; } break;
        case FILTER_APPLIED4_CUSTOM    : { csp_filter_effect = FILTER_EFFECT4_RULES_CUSTOMIZED; lxx = lf4; } break;
        case FILTER_APPLIED3_REMOVED   : { csp_filter_effect = FILTER_EFFECT3_RULES_REMOVED;    lxx = lf3; } break;
        case FILTER_APPLIED1_FINE      : { csp_filter_effect = FILTER_APPLIED1_FINE;            lxx = lf1; } break;
        case FILTER_APPLIED2_NO_RULES  : { csp_filter_effect = FILTER_APPLIED2_NO_RULES;        lxx = lf2; } break;
        case FILTER_APPLIED8_NO_CSP    : { csp_filter_effect = FILTER_APPLIED8_NO_CSP;          lxx = lf8; } break;
        default:                         { csp_filter_effect = "";                              lxx = lf0; } break;
    }

if(log_this) log_object("...return PATCHED HEADERS "+SYN+" ["+csp_filter_applied+"] → ["+csp_filter_effect+"]", details.responseHeaders, lbH+lxx);

    return { responseHeaders : details.responseHeaders }; /* XXX .. this is the expected return value */
    /*}}}*/
}
finally {
if( log_more) log_sep_bot(caller+" "+log_result, log_tag);
}
};
/*}}}*/
/*_ check_SAVED_URL_SETTINGS {{{*/
let check_SAVED_URL_SETTINGS = async function(args)
{
    let { tabId, url, log_this } = args;
    let log_result;
try {

    bg_tabs_set_tabId_key_items (tabId, "url"              , url );
    bg_tabs_set_tabId_key_val   (tabId, "onHeadersReceived", true);

    if(   !bg_tabs_get_tabId_key(tabId, "reloading"              )
       && !bg_tabs_get_tabId_key(tabId, "get_settings_called"    )
       && !bg_tabs_get_tabId_key(tabId, "get_settings_answered"  )
    ) {
        log_result =  "CALLING bg_settings_tabs6_get_url_settings";

        if(!await bg_settings_tabs6_get_url_settings(tabId, url))
            return false;
    }
    else {
        log_result = "SKIPPING bg_settings.tabs6_get_url_settings";

    }
    return true;
} finally {
if( log_this) log_object("CHECK URL SETTINGS "+SYN+" "+log_result, bg_tabs_get_tabId(tabId), lf6);
}
};
/*}}}*/
/*_ check_URL_TO_SKIP {{{*/
let check_URL_TO_SKIP = function(args)
{
    let { url, initiator, log_this } = args;

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
/*_ provide_DEFAULT_HEADER_CSP_TO_FILTER {{{*/
let provide_DEFAULT_HEADER_CSP_TO_FILTER = function(args)
{
    let { tabId, responseHeaders, has_CSP, log_this, log_more } = args;

    bg_tabs_set_tabId_key_val(tabId, "has_CSP", has_CSP);

    if(!has_CSP)
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
    let headers = responseHeaders;
        headers.push({ name, value });
        has_CSP = true;
if( log_this) log("...headers["+(headers.length-1)+"]", headers[headers.length-1]);
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

if( log_more) log_object("headers", headers, lf6);
    }
    else {
if( log_more) log("%c !has_CSP ➔ PRIVIDING NO DEFAULT HEADER CSP", lf6);
    }

    return has_CSP;
};
/*}}}*/
/*_ activate_CSP_FILTER {{{*/
let activate_CSP_FILTER = function(args)
{
/*{{{*/
let caller = "bg_header.ACTIVATE_CSP_FILTER";

/*}}}*/
    let { tabId, csp_filter, has_CSP, log_this } = args;

    let log_result, l_x;
try {
    if(!has_CSP) {
        l_x = 0; log_result = "NO CSP TO FILTER";

        bg_tabs_set_tabId_key_val(tabId, "last_reload_not_filtered"  , caller);
        return false;
    }
    else if(!csp_filter) {
        l_x = 8; log_result = "FILTER NOT REQUESTED";

        bg_tabs_set_tabId_key_val(tabId, "last_reload_not_filtered"  , caller);
        return false;
    }
    else {
        l_x = 6; log_result = csp_filter;

        bg_tabs_del_tabId_key(tabId, "last_reload_not_filtered");
        bg_csp_load_filter( csp_filter );
        return true;
    }
} finally {
if( log_this) log_object("ACTIVATE FILTER "+SYN+" "+log_result, { has_CSP , csp_filter}, lfX[l_x]);
}
};
    /*}}}*/
/*_ match_CSP_FILTER {{{*/
let match_CSP_FILTER = function(args)
{
    let { tabId, url, csp_filter, log_this } = args;

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
/*_ pick_filter_rules {{{*/
let pick_filter_rules = function(args)
{
    let { tabId, csp_filter, log_this } = args;

    let log_result;
    bg_tabs_del_tabId_key(tabId, "csp_filter_effect");

    let csp_filter_rules = bg_csp_pick_filter_rules( csp_filter );
try {
    if( csp_filter_rules )
    {
        log_result = "HEADER CSP PICKED: ["+csp_filter+"]";

        bg_tabs_set_tabId_key_val(tabId, "csp_filter_rules", csp_filter_rules);

        return csp_filter_rules;
    }
    else {
        log_result = FILTER_EFFECT2_RULES_MISSING;

        bg_tabs_set_tabId_key_val(tabId, "csp_filter_effect", FILTER_EFFECT2_RULES_MISSING);

        return null;
    }
} finally {
if( log_this) log_object("FILTER RULES "+SYN+" "+log_result, bg_tabs_get_tabId(tabId), lf6);
}
};
/*}}}*/
/*_ set_csp_filter_applied {{{*/
let set_csp_filter_applied = function(args)
{
    let { csp_filter, csp_filter_rules, log_this } = args;

    let log_result, l_x;
    let csp_filter_applied;
try {
    if(csp_filter_rules.length > 0)
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
/*_ apply_csp_filter_rules {{{*/
let apply_csp_filter_rules = function(args)
{
let   caller = "bg_header.apply_csp_filter_rules";

    let { url, csp_filter, csp_filter_rules, csp_filter_applied, responseHeaders, log_this, log_more } = args;

    let headers = responseHeaders;
if(log_more) log("%c .......headers.length=["+ headers.length   +"]", lb6);

    let log_result;
    let l_x;
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
            l_x = 8;

            continue;
        }
}
catch(error) { log(B_SCRIPT_ID+"."+caller, error); log_object("csp_filter_rules", csp_filter_rules); break; }
        log_result = "URL MATCHED: "+csp_filter;
        l_x = 6;
if(log_more) log_object("...csp_filter_rules",csp_filter_rules,lf6,false);

        csp_filter_applied = FILTER_APPLIED8_NO_CSP;
        /*}}}*/
        /* - LOOKFOR HEADER CSP {{{*/
if(log_more) log_js.log_group("%c"+SAR+"%c subrules "+SAD, lbb+lbH+lb0, lbb+lbH+lb6);

        let subrules = csp_filter_rules[i][1];
        for(let j=0, jLen = headers.length; j !== jLen; ++j)
        {
            let    name  = headers[j].name.toLowerCase();
if(log_more) log("%c headers["+mPadStart(j,2)+"]%c "+name+" ", lf0,lb0);

            if(    name ==            "content-security-policy"
                   || name.startsWith("content-security-policy")
                   || name ==         "x-webkit-csp"
                   // name ==         "x-xss-protection"
              ) {
                headers_csp = headers[j];
if(!log_more) break;
            }
        }
if(log_more) console.groupEnd();
        /*}}}*/
        /* - REPLACE HEADER CSP {{{*/
        if( headers_csp )
        {
            csp_filter_applied = FILTER_APPLIED1_FINE;

if(log_more) log_CSP("FILTER CSP HEADER", headers_csp.value,8);
            for(let k=0, kLen = subrules.length; k !== kLen; ++k)
            {
                let from = subrules[k][0];
                let   to = subrules[k][1];
if(log_more) log("%c ...replace ["+from+"] %c with ["+to+"]", lb6, lb4);
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
        }
        /*}}}*/
        /* - MISSING HEADER CSP {{{*/
        else {
if(log_more) log("%c...NO [headers_csp]", lbH+lf6);
        }
        /*}}}*/
    }
    bg_tabs_set_tabId_key_val("csp_filter_applied", csp_filter_applied);
    return headers_csp;
} finally {
if( log_this) log_object("FILTER APPLIED "+SYN+" "+log_result, { url, csp_filter, csp_filter_applied, headers_csp }, lfX[l_x]);
}
};
/*}}}*/
/*_ check_has_CSP {{{*/
let check_has_CSP = function(url, headers)
{
/*{{{*/
let   caller = "bg_header.has_CSP";
let log_this = LOG_MAP.B_LOG6_ONHEADER;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
    /* [csp_index] {{{*/
    let csp_index;
    let csp_name;
    for(let i=0; i < headers.length; ++i)
    {
        let    name  = headers[i].name.toLowerCase();
        if(    name ==         "content-security-policy"
            || name.startsWith("content-security-policy")
            || name ==         "x-webkit-csp"
        ) {
            csp_index = i;
            csp_name  = name;
            break;
        }
    }
    /*}}}*/
/*LOG{{{*/

if(csp_index == undefined) {
    if( log_more) log("%c "+caller+": ...NO HEADER CSP IN %c"+bg_store_GET_url_domain(url)                    , lb6,lf6);
} else {
    if( log_more) log("%c "+caller+": FOUND HEADER CSP IN %c"+bg_store_GET_url_domain(url)                    , lb6,lf6);
    if( log_this) log_object(" → headers["+csp_index+"] → ["+csp_name+"]" , headers[csp_index], lf6);
    if( log_more) log_csp_rules( headers[csp_index].value );
}
/*}}}*/
/* REMOVING CSP ENTRY {{{
//if(index >= 0)
//{
//if(log_this) log("REMOVING HEADER CSP ENTRY headers["+index+"]", headers[index]);
//    headers.splice(index,1); // FIXME
//}
}}}*/

    return (csp_index != undefined);
};
/*}}}*/
/*_ log_csp_rules {{{*/
let log_csp_rules = function(headers_csp_value)
{
    log_sep_top("CSP RULES", "LOG6_TAG");

    let i; let csp_rules = headers_csp_value.split(";");
    for(i=0; i<csp_rules.length; ++i)
    {
        let           v = csp_rules[i].trim();
        if(           v.indexOf(" ") < 0)  log("%c"+v           , lbH+lb0);
        else {
            let lhs = v.split(" ")[0];     let rhs = v.substring(lhs.length+1);
            if( rhs.indexOf(" ") < 0)      log("%c"+lhs+"%c"+rhs, lbL+lf8, lbR+lf0);
            else                           log("%c"+lhs+LF+"%c"+v.substring(lhs.length).replace(/ /g,"\n → "), lbH+lf8, lb0);
        }
    }
    log_sep_bot("CSP RULES", "LOG6_TAG");
};
/*}}}*/
/*➔ EXPORT {{{*/
    return {
        bg_header_addListener
    };
/*}}}*/
}());
