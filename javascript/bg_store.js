// ┌───────────────────────────────────────────────────────────────────────────┐
// │ bg_store.js ............................................................. │
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
/* globals  bg_tabs                   */
/* exported bg_store                  */

/* eslint-enable  no-redeclare        */
const BG_STORE_SCRIPT_ID  = "bg_store";
const BG_STORE_SCRIPT_TAG =  BG_STORE_SCRIPT_ID +" (230713:16h:43)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
let bg_store  = (function() {
"use strict";

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ STORE                                                        B_LOG8_STORE │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_event.js
:e javascript/bg_header.js
:e javascript/bg_message.js
:e javascript/bg_page.js
:e javascript/bg_settings.js
"● javascript/bg_store.js
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

let   get_callers
    , log
    , log_caller
    , log_object
    , log_sep_bot
    , log_sep_top
;

/*}}}*/
/*_ background_js {{{*/
let LOG_MAP;
let MANIFEST_VERSION;

let b_check_manifest;
let log_ACTIVATED;

/*}}}*/
//______________ bg_content
/*_ bg_csp {{{*/
let FILTER3_REMOVE;
let FILTER4_CUSTOM;
let FILTER5_RELAX;
let FILTER6_NONE;

let bg_csp_load_filter_rules;
/*}}}*/
//______________ bg_event
//______________ bg_header
//______________ bg_message
//______________ bg_page
//______________ bg_settings
//______________ bg_store
/*_ bg_tabs {{{*/
let bg_tabs_get_tabId_key;

/*}}}*/
/*_ bg_store_import {{{*/
let bg_store_import = function()
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

    get_callers                         = log_js.get_callers;
    log                                 = log_js.log;
    log_caller                          = log_js.log_caller;
    log_object                          = log_js.log_object;
    log_sep_bot                         = log_js.log_sep_bot;
    log_sep_top                         = log_js.log_sep_top;
    /*}}}*/
    /*_ background_js {{{*/
    LOG_MAP                               = background_js.LOG_MAP;
    MANIFEST_VERSION                      = background_js.MANIFEST_VERSION;

    b_check_manifest                      = background_js.b_check_manifest;
    log_ACTIVATED                         = background_js.log_ACTIVATED;
    /*}}}*/
    //___________ bg_content
    /*_ bg_csp {{{*/
    FILTER3_REMOVE                   = bg_csp.FILTER3_REMOVE;
    FILTER4_CUSTOM                   = bg_csp.FILTER4_CUSTOM;
    FILTER5_RELAX                    = bg_csp.FILTER5_RELAX;
    FILTER6_NONE                     = bg_csp.FILTER6_NONE;

    bg_csp_load_filter_rules         = bg_csp.bg_csp_load_filter_rules;

    /*}}}*/
    //___________ bg_event
    //___________ bg_header
    //___________ bg_message
    //___________ bg_page
    //___________ bg_settings
    //___________ bg_store
    /*_ bg_tabs {{{*/
    bg_tabs_get_tabId_key            = bg_tabs.bg_tabs_get_tabId_key;

    /*}}}*/
//................._import    log_js    background_js    bg_content    bg_csp    bg_event    bg_header    bg_message    bg_page    bg_settings    bg_store    bg_tabs
log("%c    bg_store_import %c log_js %c background_js %c __________ %c bg_csp %c ________ %c _________ %c __________ %c _______ %c ____________%c "+"●●●●● %c bg_tabs "
    ,lbH+lb9              ,lf0      ,lf1             ,lf2          ,lf3      ,lf4        ,lf5         ,lf6          ,lf7       ,lf8           ,lf9+lbH    ,lf0         );
};
/*}}}*/
    setTimeout(bg_store_import,0);
/*}}}*/


/*➔ bg_store_DEL_url_settings .. B_LOG8_STORE {{{*/
let bg_store_DEL_url_settings = function(tabId, _caller)
{
/*{{{*/
let   caller = "bg_store_DEL_url_settings";
let log_this = LOG_MAP.B_LOG8_STORE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_this) log("%c "+caller+"%c"+_caller, lbL+lf8, lbR+lf9);
if( log_more) log_caller();
/*}}}*/
    /* STORAGE KEY .. f(url) {{{*/
    let             url = bg_tabs_get_tabId_key(tabId, "url");
    if(            !url) {
        log("%c"+_caller+" → "+caller+"%c NO URL"+LF+"%c"+get_callers()
            ,lbL+lf8                  ,lbR+lb2       ,lf8              );

        return;
    }
    let storage_url_key = bg_store_GET_url_key (        url );
    /*}}}*/
    /* REMOVE ENTRY {{{*/

if( log_this) log("%c STORAGE REMOVE SETTINGS %c" + storage_url_key  , lbL+lf8, lbR+lf8);

if( log_this) log_object(caller+"chrome.storage.sync.remove( storage_url_key )", { storage_url_key , callers: LF+get_callers() }, lf2);
        chrome.storage.sync.remove( storage_url_key );

    /*}}}*/
};
/*}}}*/
/*➔ bg_store_GET_url_domain {{{*/
let regex_DOMAIN   = new RegExp("^(\\w*:\/\/[^\/]+)\/?.*");
let bg_store_GET_url_domain = function(url)
{
    if(   !url ) return "";

    let domain
        = (url.indexOf("://" ) > 0)
        ?  url.split  (  "/" )[2]
        :  url.split  (  "/" )[0]
    ;

    return  domain.replace(regex_DOMAIN, "$1") || bg_store_PARSE_url(url).scheme+"://";
};
/*}}}*/
/*➔ bg_store_GET_url_key {{{*/
let bg_store_GET_url_key = function(url)
{
/* DOC {{{
:!start explorer "https://developer.mozilla.org/en-US/docs/Web/API/URL"

    returns
    URL HREF WITH
    - [search parameter] removed
    - [hash    fragment] removed
    - removed

}}}*/

    let idx1 = url.indexOf("#");
    let idx2 = url.indexOf("?");

    let idx = ((idx1 > 0) && (idx2 > 0)) ? Math.min(idx1, idx2)
    :          (idx1 > 0)                ?          idx1
    :          (idx2 > 0)                ?                idx2
    :                                                          0;

    let base_name
        = (idx > 0)
        ?  url.substring(0,idx)
        :  url
    ;

    return base_name;
};
/*}}}*/
/*➔ bg_store_LOAD_items {{{*/
let bg_store_LOAD_items = function(items)
{
    /* LOAD LOG_MAP {{{*/

    log_js.log_set_type("B");

    /*(____________.____________________!=____________)________.________________=______.________________;*/
    if(typeof items.B_LOG1_MESSAGE      != "undefined") LOG_MAP.B_LOG1_MESSAGE  = items.B_LOG1_MESSAGE  ;
    if(typeof items.B_LOG2_ERROR        != "undefined") LOG_MAP.B_LOG2_ERROR    = items.B_LOG2_ERROR    ;
    if(typeof items.B_LOG3_PRESERVE     != "undefined") LOG_MAP.B_LOG3_PRESERVE = items.B_LOG3_PRESERVE ;
    if(typeof items.B_LOG4_CSP          != "undefined") LOG_MAP.B_LOG4_CSP      = items.B_LOG4_CSP      ;
    if(typeof items.B_LOG5_ONREQUEST    != "undefined") LOG_MAP.B_LOG5_ONREQUEST= items.B_LOG5_ONREQUEST;
    if(typeof items.B_LOG6_ONHEADER     != "undefined") LOG_MAP.B_LOG6_ONHEADER = items.B_LOG6_ONHEADER ;
    if(typeof items.B_LOG7_TABS         != "undefined") LOG_MAP.B_LOG7_TABS     = items.B_LOG7_TABS     ;
    if(typeof items.B_LOG8_STORE        != "undefined") LOG_MAP.B_LOG8_STORE    = items.B_LOG8_STORE    ;
    if(typeof items.B_LOG9_STAGE        != "undefined") LOG_MAP.B_LOG9_STAGE    = items.B_LOG9_STAGE    ;
    if(typeof items.B_LOG0_MORE         != "undefined") LOG_MAP.B_LOG0_MORE     = items.B_LOG0_MORE     ;
    /*(____________.____________________!=____________)________.________________=______.________________;*/

    /* propagate log_more to log modules */
    log_js.set_log_more( LOG_MAP.B_LOG0_MORE ) ;

/*{{{*/
let log_this = log_ACTIVATED();

if( log_this) log_sep_top(BG_STORE_SCRIPT_ID+" manifest ("+MANIFEST_VERSION+") STORAGE", "LOG3_TAG");
if( log_this) log_object("Storage items", items, lf3);
/*}}}*/
    /*}}}*/
    /* MANIFEST {{{*/
    b_check_manifest();

    /*}}}*/
    /* LOAD CSP FILTERS {{{*/
    let csp_filter;
    /**/csp_filter = FILTER3_REMOVE; if(typeof items[csp_filter] != "undefined") bg_csp_load_filter_rules(csp_filter, items[csp_filter]);
    /**/csp_filter = FILTER4_CUSTOM; if(typeof items[csp_filter] != "undefined") bg_csp_load_filter_rules(csp_filter, items[csp_filter]);
    /**/csp_filter = FILTER5_RELAX ; if(typeof items[csp_filter] != "undefined") bg_csp_load_filter_rules(csp_filter, items[csp_filter]);
    /**/csp_filter = FILTER6_NONE  ; if(typeof items[csp_filter] != "undefined") bg_csp_load_filter_rules(csp_filter, items[csp_filter]);

    /*}}}*/
/*{{{*/
if( log_this) log_sep_bot(BG_STORE_SCRIPT_ID+" manifest ("+MANIFEST_VERSION+") STORAGE", "LOG3_TAG");
/*}}}*/
};
/*}}}*/
/*➔ bg_store_SAVE_items {{{*/
let bg_store_SAVE_items = function(items,_caller)
{
/*{{{*/
let   caller = "bg_store_SAVE_items";
let log_this =             LOG_MAP.B_LOG8_STORE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

//  let items_tag = ellipsis(JSON.stringify(items), 70);
    let items_tag = log_js.log_json_prettify(items);
if(      log_more) log_object(caller+": chrome.storage.sync.set("+items_tag+")", { ...items , callers: LF+get_callers() }, lb0);
else if( log_this) log       ("%c "+caller+"%c"+items_tag+"%c"+_caller
                         ,lbL+lb3    ,lbR+lf8       ,lbH             );
/*}}}*/
    try {
        chrome.storage.sync.set( items );
    }
    catch(error) {
        console.error(BG_STORE_SCRIPT_ID+" ERROR:\n"+ error);
    }
};
/*}}}*/
/*➔ bg_store_SET_url_settings .. B_LOG8_STORE {{{*/
/*{{{*/
const B_SET_URL_SETTINGS   = "SET URL SETTINGS";

let   last_storage_url_key = {};
let   last_tab_settings    = {};
/*}}}*/
let bg_store_SET_url_settings = function(tabId, _caller)
{
/*{{{*/
let   caller = "bg_store_SET_url_settings";
let log_this = LOG_MAP.B_LOG8_STORE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log("%c "+caller+"%c"+_caller, lbL+lf8, lbR+lf9);
/*}}}*/
    /* IGNORE TAB .. f(missing url to make storage_url_key) {{{*/
    let url = bg_tabs_get_tabId_key(tabId, "url"           );

    if(!url ) return;
    /*}}}*/
    /* PERSIST TAB .. f(start csp_filter cancelreq) {{{*/
    let       start     = bg_tabs_get_tabId_key(tabId, "start"         )
        ||              !!bg_tabs_get_tabId_key(tabId, "tools_deployed");
    let  csp_filter     = bg_tabs_get_tabId_key(tabId, "csp_filter"    );
    let   cancelreq     = bg_tabs_get_tabId_key(tabId, "cancelreq"     );

    let something_to_store
        =      (      url         )
        && (   (    start  == true)
            || (cancelreq  == true)
            || (csp_filter        )
           )
    ;
    /*}}}*/
    // ┌──────────────────────────────────────┐
    // │ TAB URL STORAGE PERSISTENCE          │
    // └──────────────────────────────────────┘
    /* STORE PARAMS {{{*/
    if( something_to_store )
    {
        /* [tab_settings] {{{*/
        let tab_settings
            = {        start
                , csp_filter
                ,  cancelreq
                ,   typeface : ""
                ,      theme : ""
                ,      color : ""
            }
        ;
        /*}}}*/
        /* ...do not save [false] or [OFF] values {{{*/
        Object.keys(tab_settings).filter((key) => {
//try {
          if(!tab_settings[key] ) delete tab_settings[key];
//} catch(error) {
//    log("typeof tab_settings["+key+"]=["+typeof tab_settings[key]+"]");
//    log(       "tab_settings["+key+"]",         tab_settings[key]    );
//    log(error);
//}
        });
        /*}}}*/
        /* STORAGE KEY .. f(url) {{{*/
        let storage_url_key = bg_store_GET_url_key( url );

if( log_more) log("%c"+SD4+"%c "+B_SET_URL_SETTINGS+"%c"+ storage_url_key, lbB+lf4,lbL+lf4,lbR);
        /*}}}*/
        /* SAME   [KEY:VAL] DEBOUNCE {{{*/
        if(   !bg_store_Object_same_values(last_storage_url_key, storage_url_key)
           || !bg_store_Object_same_values(last_tab_settings   , tab_settings   )
          )
        {
            last_storage_url_key = storage_url_key;
            last_tab_settings    = tab_settings;

            let url_items = { [storage_url_key] : tab_settings };

if( log_more) log_object("tab_settings"                 , tab_settings   ,     lf4);
if( log_more) log_object("url_items"                    , url_items      ,     lf4);

            bg_store_SAVE_items(url_items, log_js.get_callers_bot());

            if( log_more) log_caller();
        }
        /*}}}*/
    }
    /*}}}*/
};
/*}}}*/

/*_ bg_store_PARSE_url {{{*/
const regexp_URL = new RegExp("^([^:]+):\\/\\/(?:([^@]+)@)?([^\\/:]*)?(?::([\\d]+))?(?:(\\/[^#]*)(?:#(.*))?)?$", "i");
/*..............................scheme_.........userinfo...host______.....port_____....path______....frag...........*/
/*..............................1111111.........22222222...3333333333.....44444444.....5555555555....6666...........*/
let bg_store_PARSE_url = function(url)
{
    let result = {};
    let match  = url.match(regexp_URL);
    if( match ) {
        result.scheme   = match[1].toLowerCase();
        result.userinfo = match[2];
        result.host     = match[3];
        result.port     = match[4];
        result.path     = match[5] || "/";
        result.fragment = match[6];
    }
/*{{{
log_object(url, result, lf9, false);
}}}*/
    return result;
};
/*}}}*/
/*_ bg_store_Object_same_values {{{*/
let bg_store_Object_same_values = function(o1,o2)
{
    if(!o1 || !o2)
        return false;

    const keys          = Object.keys(o1);
    if(   keys.length !== Object.keys(o2).length)
        return false;

    for(let key of keys)
        if (o1[key] != o2[key])
            return false;

    return true;
};
/*}}}*/

/*➔ EXPORT {{{*/
    return {  name : "bg_store"

        ,     bg_store_DEL_url_settings
        ,     bg_store_GET_url_domain
        ,     bg_store_GET_url_key
        ,     bg_store_LOAD_items
        ,     bg_store_SAVE_items
        ,     bg_store_SET_url_settings

    };
/*}}}*/
}());

