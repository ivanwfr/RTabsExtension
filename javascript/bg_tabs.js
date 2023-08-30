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
/* globals  bg_store                  */
/* exported bg_tabs                   */

/* eslint-enable  no-redeclare        */

const BG_TABS_SCRIPT_ID  = "bg_tabs";
const BG_TABS_SCRIPT_TAG =  BG_TABS_SCRIPT_ID +" (230830:22h:00)"; /* eslint-disable-line no-unused-vars */
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
    , log
    , log_console_clear
    , log_object
    , mPadEnd
    , li
;

/*}}}*/
/*_ background_js {{{*/
let LOG_MAP;

let log_TAB_HANDLERS_CALLS;
let log_get_caller_tag_FOR_key_val_caller;

/*}}}*/
//_______________ bg_content
//_______________ bg_csp
//_______________ bg_event
//_______________ bg_header
//_______________ bg_message
//_______________ bg_page
//_______________ bg_settings
/*_ bg_store {{{*/
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
    log_console_clear = log_js.log_console_clear;   li("log_js", "log_console_clear", log_console_clear);
    log_object        = log_js.log_object;          li("log_js","log_object",log_object);
    mPadEnd           = log_js.mPadEnd;             li("log_js","mPadEnd",mPadEnd);

    /*}}}*/
    modules.push( background_js ); /*{{{*/
    LOG_MAP                               = background_js.LOG_MAP;                               li("background_js","LOG_MAP",LOG_MAP);

    log_TAB_HANDLERS_CALLS                = background_js.log_TAB_HANDLERS_CALLS;                li("background_js","log_TAB_HANDLERS_CALLS",log_TAB_HANDLERS_CALLS);
    log_get_caller_tag_FOR_key_val_caller = background_js.log_get_caller_tag_FOR_key_val_caller; li("background_js","log_get_caller_tag_FOR_key_val_caller",log_get_caller_tag_FOR_key_val_caller);

    /*}}}*/
    //_______________________ bg_content
    //_______________________ bg_csp
    //_______________________ bg_event
    //_______________________ bg_header
    //_______________________ bg_message
    //_______________________ bg_page
    //_______________________ bg_settings
    modules.push( bg_store      ); /*{{{*/
    bg_store_GET_url_key                  = bg_store.bg_store_GET_url_key;                       li("bg_store","bg_store_GET_url_key",bg_store_GET_url_key);
    bg_store_SET_url_settings             = bg_store.bg_store_SET_url_settings;                  li("bg_store","bg_store_SET_url_settings",bg_store_SET_url_settings);
    bg_store_SAVE_items                   = bg_store.bg_store_SAVE_items;                        li("bg_store","bg_store_SAVE_items",bg_store_SAVE_items);

    /*}}}*/
    //_______________________ bg_tabs
    log_js.log_import(bg_tabs      , modules);
};
/*}}}*/
    setTimeout(_import,0);
/*}}}*/
/* LOGGING {{{*/
let BG_TABS_JS_LOG  = false;
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

    case "bg_tabs_get_last_activated_tabId" : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS;
    case "bg_tabs_set_last_activated_tabId" : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS;

    case "bg_tabs_del_tabId"                : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG8_STORE;
    case "bg_tabs_del_tabId_key"            : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG8_STORE;
    case "bg_tabs_get_tabId_key"            : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG8_STORE;
    case "bg_tabs_set_tabId_key_items"      : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS;
    case "bg_tabs_set_tabId_key_val"        : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS;
    case "bg_tabs_url_settings"             : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS;
    case "bg_tabs_url_settings_from_cached" : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS;
    case "bg_tabs_url_settings_from_others" : return BG_TABS_JS_LOG || LOG_MAP.B_LOG7_TABS;

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
let TABS_MAP       = new Map();
let tabs_Map_cache = new Map();

const PL = "\u25C0"; // < LEFT
const PR = "\u25B6"; // > RIGHT
const Dt = "\u25BC"; // V DOWN
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ LAST ACTIVATED TABID                              ● last_activated_tabId  │
// └───────────────────────────────────────────────────────────────────────────┘
/*{{{*/
let              last_activated_tabId;
/*}}}*/
/*➔ bg_tabs_set_last_activated_tabId {{{*/
let bg_tabs_set_last_activated_tabId = function(tabId )
{
                 last_activated_tabId = tabId;
};
/*}}}*/
/*➔ bg_tabs_get_last_activated_tabId {{{*/
let bg_tabs_get_last_activated_tabId = function()
{
    return       last_activated_tabId;
};

/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ GET ● URL_TAB_KEY_VAL                                                     │
// └───────────────────────────────────────────────────────────────────────────┘
/*➔ bg_tabs_url_settings {{{*/
let bg_tabs_url_settings = function(url)
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
    let item            = tabs_Map_cache.get( storage_url_key );

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
    for(let key of TABS_MAP.keys())
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
    if(!tabId) throw new Error("tabId "+tabId);
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
let bg_tabs_del_tabId = function(tabId = bg_tabs_get_last_activated_tabId())
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
        tabs_Map_cache.set(storage_url_key, item);

if( log_more) log_object("→ INTO CACHE", item, lbH+lbF+lf2, lbH+lf2);
    }
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ LOG ● TAB_KEY_VAL                                                         │
// └───────────────────────────────────────────────────────────────────────────┘
/*➔ bg_tabs_log_TABS_MAP {{{*/
let bg_tabs_log_TABS_MAP = function()
{
    /* SESSION WORKING TABS */
    if( TABS_MAP.size )
    {
        log_js.log_group("%c"+SAR   +"%c TABS_MAP "+SAD
                         ,lbb+lbH+lb0, lbH+lf3       );

        for(let [key , value] of TABS_MAP      ) log_object(mPadEnd(   "tab "+key,24)+" url="+ellipsis(value.url,80), value,     lbX[value.start ? 5:8], true);
        for(let [key , value] of tabs_Map_cache) log_object(mPadEnd("cached "+key,24)+" url="+ellipsis(value.url,80), value, lb0+lfX[value.start ? 5:8], true);

        console.groupEnd();
    }
    else {
        log_js.log      ("%c"+SAR   +"%c TABS_MAP ● NONE YET"
                         ,lbb+lbH+lb0, lbH+lf8               );
    }

    /* LAST ACTIVATED TAB */
    bg_tabs_log_LAST_ACTIVATED_TAB();

    log_TAB_HANDLERS_CALLS();
};
/*}}}*/
/*➔ bg_tabs_log_LAST_ACTIVATED_TAB {{{*/
let bg_tabs_log_LAST_ACTIVATED_TAB = function(label,callers=get_callers())
{

    /* [lastError] */
    if(chrome.runtime.lastError)
        log_object("chrome.runtime.lastError", chrome.runtime.lastError, lbB+lb2, false);

    let tabId = bg_tabs_get_last_activated_tabId();
    if(!tabId )
        return;

    let tab_items = TABS_MAP.get(tabId);
    if( tab_items ) {
        tab_items.callers = callers;
        log_object((label || "tab "+tabId)+" → LAST ACTIVATED", tab_items, lfX[tab_items.start ? 5:8]);
    }

};
/*}}}*/

/*➔ EXPORT {{{*/
    return {  name : "bg_tabs"

        ,             bg_tabs_get_last_activated_tabId
        ,             bg_tabs_set_last_activated_tabId

        ,             bg_tabs_url_settings

        ,             bg_tabs_set_tabId_key_items
        ,             bg_tabs_set_tabId_key_val

        ,             bg_tabs_get_tabId
        ,             bg_tabs_get_tabId_key

        ,             bg_tabs_del_tabId
        ,             bg_tabs_del_tabId_key

        ,             bg_tabs_log_LAST_ACTIVATED_TAB
        ,             bg_tabs_log_TABS_MAP

        , logging
        , TABS_MAP
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
