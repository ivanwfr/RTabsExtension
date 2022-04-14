/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* globals console, confirm, chrome */
/* globals Map */
/* globals log_js */
/* globals setTimeout, clearTimeout */

/* exported background_js, B_SCRIPT_TAG */

/* eslint-disable no-warning-comments */
/* eslint-disable prefer-spread */
/* eslint-disable prefer-rest-params */
/* eslint-disable valid-jsdoc */

const B_SCRIPT_ID         = "background_js";
const B_SCRIPT_TAG        =  B_SCRIPT_ID +" (220414:16h:29)";
/*}}}*/
let background_js = (function() {
"use strict";
/* NOTES: {{{*/
/*
 * BACKGROUND in responsible for user [EDITED CSP FILTERS STORAGE]
 * OPTIONS calls chrome.storage.sync.set only when storing [LOGING OPTIONS STORAGE]
 * POPUP in responsible for USER [SETTINGS STORAGE]
*/
/*_ DOC */
/*{{{
:!start explorer "https://www.w3.org/TR/CSP3"
:!start explorer "https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webRequest/onHeadersReceived"
:!start explorer "https://blog.jscrambler.com/an-introduction-to-csp/"
:!start explorer "https://developer.chrome.com/extensions/webRequest"
:!start explorer "https://www.html5rocks.com/en/tutorials/security/content-security-policy/#source-whitelists"

}}}*/
/*}}}*/

/* IMPORT log_js */
/* eslint-disable no-unused-vars */
/*_ {{{*/
//let log_js = {};

let   lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let   lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let   lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;

let   SAU, SAR, SAD, SAL, SHV, SYN, SBS, SD0, SD1, SD2, SD3, SD4, SD5, SD6, SD7, SD8, SD9;
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
    , log_json_one_liner
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
/*_ background_require_dom_log {{{*/
let background_require_dom_log = function()
{

    [ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX ] = log_js.LOG_BG_ARR;
    [ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb           ] = log_js.LOG_XX_ARR;
    [ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX ] = log_js.LOG_FG_ARR;

    [ SAU, SAR, SAD, SAL, SHV, SYN, SBS, SD0, SD1, SD2, SD3, SD4, SD5, SD6, SD7, SD8, SD9 ] = log_js.LOG_SXX;
    [ L_CHK, L_NEW, L_ARD, L_ARL, L_ARR, L_ARU, L_CLR, L_FNC, L_WRN                       ] = log_js.LOG_CHR;
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
    log_json_one_liner                  = log_js.log_json_one_liner;
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

};
/*}}}*/
background_require_dom_log();
/* eslint-ensable no-unused-vars */

/* LOG_MAP {{{*/
/*_ b_is_logging {{{*/
/*{{{*/
let LOG_MAP = {
    B_LOG1_MESSAGE    : false,
    B_LOG2_ERROR      :  true,
    B_LOG3_PRESERVE   : false,
    B_LOG4_PARSE      : false,
    B_LOG5_ONREQUEST  : false,
    B_LOG6_ONHEADER   : false,
    B_LOG7_TABS       : false,
    B_LOG8_STORE      : false,
    B_LOG9_STAGE      : false,
    B_LOG0_MORE       : false
   };

/*}}}*/
let b_is_logging = function()
{
    return LOG_MAP.B_LOG1_MESSAGE
        || LOG_MAP.B_LOG2_ERROR
        || LOG_MAP.B_LOG3_PRESERVE
        || LOG_MAP.B_LOG4_PARSE
        || LOG_MAP.B_LOG5_ONREQUEST
        || LOG_MAP.B_LOG6_ONHEADER
        || LOG_MAP.B_LOG7_TABS
        || LOG_MAP.B_LOG8_STORE
        || LOG_MAP.B_LOG9_STAGE
    ;
};
/*}}}*/
/*_ log_LOG_MAP {{{*/
let log_LOG_MAP = function()
{
    let args = [""];            let s  = "%c CURRENT LOG_MAP"    ; args.push(lbL    );
    if( LOG_MAP.B_LOG1_MESSAGE  ) { s += "%c 1 MESSAGE "         ; args.push(lbC+lb1); }
    if( LOG_MAP.B_LOG2_ERROR    ) { s += "%c 2 ERROR "           ; args.push(lbC+lb2); }
    if( LOG_MAP.B_LOG3_PRESERVE ) { s += "%c 3 PRESERVE "        ; args.push(lbC+lb3); }
    if( LOG_MAP.B_LOG4_PARSE    ) { s += "%c 4 PARSE "           ; args.push(lbC+lb4); }
    if( LOG_MAP.B_LOG5_ONREQUEST) { s += "%c 5 ONREQUEST "       ; args.push(lbC+lb5); }
    if( LOG_MAP.B_LOG6_ONHEADER ) { s += "%c 6 ONHEADER "        ; args.push(lbC+lb6); }
    if( LOG_MAP.B_LOG7_TABS     ) { s += "%c 7 TABS "            ; args.push(lbC+lb7); }
    if( LOG_MAP.B_LOG8_STORE    ) { s += "%c 8 STORE "           ; args.push(lbC+lb8); }
    if( LOG_MAP.B_LOG9_STAGE    ) { s += "%c 9 STAGE "           ; args.push(lbC+lb9); }
    if( LOG_MAP.B_LOG0_MORE     ) { s += "%c 0 MORE "            ; args.push(lbC+lb0); }
    /*...........................*/ s += "%c "                   ; args.push(lbR    );

    args[0] = s;
    console.log.apply(console, Array.prototype.slice.call(args));
};
/*}}}*/
/*}}}*/

/** SYNC */                                             // B_LOG7_TABS
// TODO REMOVE FILTER WHEN no effect after b_onHeader2_received with !csp_filter_effect
/*_ b_tabs_sync {{{*/
let b_tabs_sync = function(tabId, message, _caller)
{
    /*{{{*/
let caller   = "b_tabs_sync(tabId "+tabId+")";
let log_this = LOG_MAP.B_LOG7_TABS;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    message    = message || {};
    let status = (typeof message.status      != "undefined") ? message.status      : null;
if(!message.status) { log_this=true; }
if(!message.status) { log_more=true; }

    let started = (b_tabs_get_tabId_key(tabId, "start") == "ON") || (message.start == "ON");

    /*}}}*/
    let log_tag = (message.status == "ERROR") ? "LOG2_TAG" : started ? "LOG7_TAG" : "LOG0_TAG";
if( log_this) log_sep_top(caller+" .. "+_caller+" .. "+status, log_tag);
    // [message] {{{*/
if( log_this) log_members("TAB #"+tabId, b_tabs.get(tabId), lbH+lf8);
if( log_more) log_members("message", message, lf9);
// {{{
/* eslint-disable no-caller */
if(!message.status) logXXX("%c !message.status ", lbB+lf2);
if(!message.status) logXXX("arguments.caller=["+arguments.caller+"]"); /* eslint-disable-line no-caller */
if(!message.status) log_object("arguments", arguments);
/* eslint-enable no-caller */
//}}}

    let url                         = b_tabs_get_tabId_key        (tabId, "url")
        ||                            b_tabs_set_tabId_key_message(tabId, "url"               , message);
    let start                       = b_tabs_set_tabId_key_message(tabId, "start"             , message);
    let csp_filter                  = b_tabs_set_tabId_key_message(tabId, "csp_filter"        , message);
    let csp_filter_effect           = b_tabs_set_tabId_key_message(tabId, "csp_filter_effect" , message);
    let cancelreq                   = b_tabs_set_tabId_key_message(tabId, "cancelreq"         , message);

    let t_load                      = b_tabs_set_tabId_key_message(tabId, "t_load"            , message);
    let tools_GET_REPLY_called_once = b_tabs_get_tabId_key        (tabId, "tools_GET_REPLY_called_once", false);
    let b_TOOLS_QUERY_called_once   = b_tabs_get_tabId_key        (tabId, "b_TOOLS_QUERY_called_once"  , false);
    let reloaded_once               = b_tabs_get_tabId_key        (tabId, "reloaded_once"              , false);
    let tools4_polling_reply        = b_page3_TOOLS_GET_REPLY_POLL_in_progress();

if( log_more) log_members("TAB #"+tabId+" (UPDATED)", b_tabs.get(tabId), lbH+lf9);

if(log_more) {
    let b_tabs_sync_details
        = {   b_TOOLS_QUERY_called_once
            , tools_GET_REPLY_called_once
            , start
            , t_load
            , csp_filter
            , csp_filter_effect
            , cancelreq
            , onBeforeRequest_is_canceling
            , tools4_polling_reply
            , url
            , status
        };

    log("%c" +log_json(b_tabs_sync_details), lbH+lf7);
}
    /*}}}*/
    // ABORT ON ERROR
    if(message.status == "ERROR")
    {
if( log_this) log_sep_bot(caller+" .. "+_caller+" .. "+status, log_tag);

        b_sync_pageAction(tabId);
        return;
    }
    // GOT start=[ON] FROM SETTINGS .. CANCEL PENDING POLL .. SEND TOOLS START MESSAGE
    /*{{{*/
    if(message.start == "ON")
    {
        if( b_page4_TOOLS_GET_REPLY_DONE(tabId, caller) ) {
if( log_this) log("%c PENDING POLL CANCELED", lbb+lbH+lf4);

        }
    }
    /*}}}*/
    //  [cancelreq] .. [onBeforeRequest]
    /*{{{*/
    let removing_onBeforeRequest_listener
        =   onBeforeRequest_is_canceling
        && (   (cancelreq != "ON"     )
            || (   status == "loading")
        )
    ;

    let adding_onBeforeRequest_listener
        =  !removing_onBeforeRequest_listener
        && !onBeforeRequest_is_canceling
        &&     (cancelreq == "ON")
    ;

    if     (removing_onBeforeRequest_listener ) background_webRequest_onBeforeRequest_removeListener(tabId, caller);
    else if(  adding_onBeforeRequest_listener ) background_webRequest_onBeforeRequest_addListener   (tabId, caller);
    /*}}}*/
    //  LOG2_TAG .. REMOVE UNNECESSARY CSP - NOT HTTP
    /*{{{*/
    if(csp_filter && url && !url.startsWith("http"))
    {
if(LOG_MAP.B_LOG2_ERROR) log("%c REJECTING USELESS ["+ csp_filter +"] FOR %c"+get_url_domain(url)+"... %c *** HTTP SCHEME MISMATCH ***"
    ,                         lbL+lf9                                    ,lbR+lf2                     ,lbH+lf2);

        b_STORAGE_DEL_url_csp_filter(tabId, "NOT HTTP SCHEME");
        csp_filter         = "";
        csp_filter_effect  = "";

        log_tag = "LOG2_TAG";
    }
    /*}}}*/
    //  LOG2_TAG .. REMOVE FILTER WITH NO EFFECT
    /*{{{*/
    else if(   (typeof message.csp_filter_effect != "undefined") // comming from b_onHeader2_received
            && b_onHeader2_received_csp_filter_failed(csp_filter, csp_filter_effect)
//          && (t_load !=  ""                     ) // .. csp_filter_effect may not have been evaluated before
//          && (t_load !=  TOOLS2_WAITING         ) // .. csp_filter_effect may not have been evaluated before
//          && (t_load !=  TOOLS3_NEED_RELAXED_CSP)
//          && !b_tabs_get_tabId_key(tabId, "reloading")
    ) {
if(LOG_MAP.B_LOG2_ERROR) log("%c REMOVING ["+ csp_filter +"] %c EFFECT ["+csp_filter_effect+"] %c t_load=["+t_load+"]"
    ,                         lbL+lf9                       ,lbR+lf2                           ,lbH+lf2);

        b_STORAGE_DEL_url_csp_filter(tabId, "CSP FILTER HAD NO EFFECT");
        csp_filter         = "";
        csp_filter_effect  = "";

        log_tag = "LOG2_TAG";
    }
    /*}}}*/
    //  LOG3_TAG .. start [ON] switched [OFF] BY TOOLS3_NEED_RELAXED_CSP
    /*{{{*/
    if(    (      start == "ON"                   )
        && (     t_load == TOOLS3_NEED_RELAXED_CSP)
        && ( csp_filter == ""                     )
    ) {
if( log_this) log("%c SWITCHING start [OFF]: %c t_load=["+t_load+"] %c csp_filter=["+csp_filter+"]"
,              lbb+lbH+lf2              ,lbF+lbL+lf3           ,lbF+lbR+lf7);
        log_tag = "LOG3_TAG";

        start = b_tabs_set_tabId_key_val(tabId, "start", "OFF");
        b_STORAGE_SET_url_settings(tabId, caller);
    }
    /*}}}*/
    //  LOG6_TAG LOG1_TAG LOG0_TAG .. f(SETTINGS6_CHECK_TOOLS_LOADED)
    /*{{{*/

    let tools_loaded_request = SETTINGS6_CHECK_TOOLS_LOADED(tabId);

//  let tools_reply_required
//      =  b_page3_TOOLS_GET_REPLY_POLL_in_progress();
//      && b_tabs_get_tabId_key(tabId, "b_TOOLS_QUERY_called_once")
//  ;

    start  = b_tabs_get_tabId_key(tabId, "start" );

    if     (  tools_loaded_request       ) log_tag = "LOG6_TAG";
    else if( !started && (start == "ON") ) log_tag = "LOG1_TAG";
    else if(  started && (start != "ON") ) log_tag = "LOG0_TAG";

//logXXX("t_load=["+t_load+"]")
//logXXX("log_tag=["+log_tag+"]")
//log_members("TAB #"+tabId+" (SETTINGS6_CHECK_TOOLS_LOADED CALLED)", b_tabs.get(tabId), lbH+lf9);
    /*}}}*/
if( log_this) log_sep_bot(caller+" .. "+_caller+" .. "+status, log_tag);
    /* .. SYNC POPUP ICON {{{*/
    b_sync_pageAction(tabId);

    /*}}}*/
};
/*}}}*/
/*_ b_tabs {{{*/
let b_tabs       = new Map();
let b_tabs_cache = new Map();
/*_ b_tabs_set_tabId_key_val {{{*/
let b_tabs_set_tabId_key_val = function(tabId, key, val    )
{
/*
    b_tabs.set(key+"_"+tabId, val);
*/
    let o;
    if( o = b_tabs.get(tabId))  o[key] = val    ;
    else    b_tabs.set(tabId,  { [key] : val } ); /* computed property name */
    return val;
};
/*}}}*/
/*_ b_tabs_set_tabId_key_message {{{*/
let b_tabs_set_tabId_key_message = function(tabId, key, message)
{
let log_this = LOG_MAP.B_LOG7_TABS;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    let val =  b_tabs_get_tabId_key(tabId, key);

    if(           typeof message[key] ==         "undefined")   return val;  /* nothing key-related in store yet */
    if((key == "url") && message[key].startsWith("chrome:" ))   return val;  /* do not store chrome-related urls */

    let old_val = b_tabs_get_tabId_key(tabId, key);
    val         = message[key];                                              /* LAST SET key-related value */
    if(!val && !old_val)                                        return ""; /* NOTHING NEW and NOTHING OLD */

//logXXX("["+key+"] : old_val=["+old_val+"]");
//logXXX("["+key+"] :     val=["+    val+"]");

    if(val == old_val) {                                                     /* RETURN SAME OLD VALUE */
if(log_this) log("%c"+SBS+" %cSAME TAB"+tabId+"%c"+key+" %c"+val
    ,             lf8      , lbR+lf8          ,lbL+lf8  ,lbR+lf0);

        return old_val;
    }
    /* TRACK MOST RECENT VALUE */
/*
if(log_this) log("%c"+SBS+" %c SET TAB"+tabId+"%c"+key+"%c : %c"+val
    ,             lf4      ,lbR+lf4           ,lb4     ,lbA  ,lb0);
*/
if(log_more) log("%c"+SBS+" %c SET TAB"+tabId+"%c"+key+" %c"+val
    ,             lf4      ,lbH               ,lbL+lf4  ,lbR+lf0);

    /* [REPLACE] with message.val when it holds [SOME VALUE] */
    if ( val ) b_tabs_set_tabId_key_val(tabId, key, val);
    else val = b_tabs_get_tabId_key    (tabId, key     );

    /* ...return [LAST SET VALUE] */
    return val;

};
/*}}}*/
/*_ b_tabs_get_tabId_key {{{*/
let b_tabs_get_tabId_key     = function(tabId, key, val="" )
{
/*
    return (b_tabs.get(key+"_"+tabId) || val);
*/
    let o;
    if( o = b_tabs.get(tabId)) return o[key] || val;
    else                       return           val;
};
/*}}}*/
/*_ b_tabs_del_tabId_key {{{*/
let b_tabs_del_tabId_key     = function(tabId, key         )
{
/*
    b_tabs.delete(key+"_"+tabId);
*/
    let o;
    if( o = b_tabs.get(tabId)) delete o[key];
};
/*}}}*/
/*_ b_tabs_del_tabId {{{*/
let b_tabs_del_tabId = function(tabId)
{
/*{{{*/
let caller   = "b_tabs_del_tabId(TAB #"+tabId+")";
let log_this = LOG_MAP.B_LOG7_TABS;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log("%c"+SYMBOL_CONSTRUCTION +"%c"+caller , lbB+lf2,lbL+lf2);

    let item = b_tabs.get   (tabId         );
    b_tabs           .delete(tabId         );

    if(item.url) {
        let storage_url_key = b_STORAGE_GET_url_key( item.url );
        b_tabs_cache.set(storage_url_key, item);

if( log_more) log_members(SAR+" INTO CACHE", item, lbH+lbF+lf2, lbH+lf2);
    }
};
/*}}}*/
/*_ b_tabs_url_settings_from_cached {{{*/
let b_tabs_url_settings_from_cached = function(url)
{
/*{{{*/
let log_this = LOG_MAP.B_LOG7_TABS;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;
/*}}}*/
if( log_more) log("%c b_tabs_url_settings_from_cached", lbF+lf9);
    /* cached entry for the specified url {{{*/
    let storage_url_key = b_STORAGE_GET_url_key( url );
    let item            = b_tabs_cache.get( storage_url_key );

    /*}}}*/
    /* with settings loaded {{{*/
    if( item && !item.get_settings_answered)
        item = null;

    if( item )
        item.from = "FROM CACHED TAB WITH SAME URL";
    /*}}}*/
if( log_more && item) log_members(SAL+" "+item.from, item, lbF+lbH+lf8);
    return item;
};
/*}}}*/
/*_ b_tabs_url_settings_from_others {{{*/
/* {{{
:!start explorer "https://www.w3schools.com/jsref/jsref_some.asp"
:!start explorer "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
}}}*/
let b_tabs_url_settings_from_others = function(url)
{
/*{{{*/
let log_this = LOG_MAP.B_LOG7_TABS;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log("%c b_tabs_url_settings_from_others", lbF+lf9);
    /* current entry for the specified url {{{*/
    let item = null; let tabId;
    for(let key of b_tabs.keys())
    {
        let value = b_tabs.get(key);
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
if( log_more && item) log_members(SAL+" "+item.from, item, lbF+lbH+lf8);
    return item;
};
/*}}}*/
/*}}}*/

/** EVENTS */
/*{{{*/

/* RELOAD */                                            // B_LOG6_ONHEADER
/*{{{*/
const B_ON_HEADER_RECEIVED = "HEADER RECEIVED";

/* EMBED INTO IPC FOLD OF dom_tools.js */

// NOTE:
// to be duplicated in popup_onMessage_CB
// to be duplicated in dom_tools.js IPC

const CSP_FILTER_APPLIED1_FINE            = "CSP FINE";
const CSP_FILTER_APPLIED3_REMOVED         = "CSP REMOVE";
const CSP_FILTER_APPLIED4_CUSTOM          = "CSP CUSTOM";
const CSP_FILTER_APPLIED5_RELAXED         = "CSP RELAX" ;
const CSP_FILTER_APPLIED2_NO_RULES        = "CSP NO RULES";
const CSP_FILTER_APPLIED8_NO_CSP          = "CSP NONE";

const CSP_FILTER_EFFECT2_RULES_LOADING    = "HEADER RECEIVED BEFORE FILTER RULES HAVE BEEN LOADED";
const CSP_FILTER_EFFECT3_RULES_REMOVED    = "CSP REMOVED";
const CSP_FILTER_EFFECT4_RULES_CUSTOMIZED = "CSP CUSTOMIZED";
const CSP_FILTER_EFFECT5_RULES_RELAXED    = "CSP RELAXED";

const STATUS_COLORS      = {
    "loading"             : 1,
    "TABS_ON_UPDATED"     : 2,
    "GET_URL_SETTINGS_CB" : 3,
    "complete"            : 4
};

/*}}}*/
/*_ b_onHeader1_reload {{{*/
/*{{{*/
const B_ONHEADER1_RELOAD_DELAY = 500;
let b_set_csp_filter_onHeadersReceived_timeout;

/*}}}*/
let b_onHeader1_reload = function(tabId)
{
/*{{{*/
let caller   = "b_onHeader1_reload";
let log_this = LOG_MAP.B_LOG6_ONHEADER;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_this) log_sep_top(caller, "LOG2_TAG");
if( log_this) log(SAR+" %c READY TO FILTER NEXT TAB#"+tabId+" PAGE HEADER CSP WITH %c"+CSP_Rules_key, lbR+lf0, lbR+lf2);
    /* POST A RELOAD {{{*/
    if(b_set_csp_filter_onHeadersReceived_timeout) clearTimeout(b_set_csp_filter_onHeadersReceived_timeout);
    b_set_csp_filter_onHeadersReceived_timeout =     setTimeout(function() { b_onHeader1_reload_handler(tabId); }, B_ONHEADER1_RELOAD_DELAY);

    /*}}}*/
if( log_this) log_sep_bot(caller, "LOG2_TAG");
};
/*}}}*/
/*_ b_onHeader1_reload_handler {{{*/
/*{{{*/
const B_RELOAD_FOR_CSP_FILTERING = "RELOAD FOR CSP FILTERING";

/*}}}*/
let b_onHeader1_reload_handler = function(tabId)
{
/*{{{*/
let caller   = "b_onHeader1_reload_handler";
let log_this = LOG_MAP.B_LOG6_ONHEADER;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_this) log_sep_top(caller, "LOG2_TAG");
let rules_length = CSP_Rules ? " (x"+ CSP_Rules.length +" rules)" : "";
if( log_this) log("%c"+SYMBOL_GEAR+"%c "+B_RELOAD_FOR_CSP_FILTERING+" %c"+CSP_Rules_key + rules_length, lbB+lf3, lbR+lf3, lbR);

    b_page1_RELOAD(tabId);

    b_set_csp_filter_onHeadersReceived_timeout = null;
if( log_this) log_sep_bot(caller, "LOG2_TAG");
};
/*}}}*/
/*_ b_onHeader1_reload_cancel {{{*/
let b_onHeader1_reload_cancel = function()
{
    if(!b_set_csp_filter_onHeadersReceived_timeout) return;

let caller   = "b_onHeader1_reload_cancel";
let log_this = LOG_MAP.B_LOG6_ONHEADER;
if( log_this) log(caller+": clearTimeout( b_set_csp_filter_onHeadersReceived_timeout );");

    clearTimeout( b_set_csp_filter_onHeadersReceived_timeout );
    b_set_csp_filter_onHeadersReceived_timeout = null;
};
/*}}}*/

/* HTTP HEADER */                                       // B_LOG6_ONHEADER B_LOG4_PARSE
const PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER = false;//true; // FIXME
/*_ b_onHeader2_received {{{*/
const B_HEADER_FILTERING  = "CSP FILTERING";
let b_onHeader2_received = function(details)
{
    /* NO [tab_url] {{{*/
let tab_url = b_tabs_get_tabId_key(details.tabId, "url");
if( tab_url && (details.url != tab_url)) return details.responseHeaders;

    /*}}}*/
    // MAY HAVE RETURNED .. f(NOT THIS TAB URL)

    /* LOG {{{*/
let caller   = "b_onHeader2_received";
let log_this = PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER || LOG_MAP.B_LOG6_ONHEADER || LOG_MAP.B_LOG4_PARSE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    let log_tag = "LOG6_TAG";
if(log_this && !LOG_MAP.B_LOG3_PRESERVE) log_console_clear(caller);
     /*}}}*/
try { if( log_this) log_sep_top(caller+(PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER ? " PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER" : ""), log_tag);
if( log_more) log_members("details", details, lbH+lf2);

    //TODO (180610): SLICE THIS FUNCTION INTO CHUNKS

    /* SHORTCUT TO SETTINGS4_GET_URL_SETTINGS {{{*/
    if(     !b_tabs_get_tabId_key(details.tabId, "reloading"            )
        &&  !b_tabs_get_tabId_key(details.tabId, "get_settings_called"  )
        &&  !b_tabs_get_tabId_key(details.tabId, "get_settings_answered")
    ) {
        let     b_tabs_tabId =             b_tabs.get(  details.tabId  );
if( log_this && b_tabs_tabId) log_members("b_tabs.get("+details.tabId+")", b_tabs_tabId, lbL+lf9);

if( log_this) log("%c"+SD2+"%c SKIPPING "+B_GET_ACTIVE_TAB_URL   , lbb+lf2, lf8);
if( log_this) log("%c"+SD3+"%c SKIPPING "+B_GET_ACTIVE_TAB_URL_CB, lbb+lf3, lf8);

        if( !SETTINGS4_GET_URL_SETTINGS(details.tabId, details.url) )
        {
            log_tag = "LOG4_TAG";
            return details.responseHeaders;
        }
    }
    /*}}}*/
    // MAY HAVE RETURNED .. f(NO URL SETTINGS)

    b_tabs_set_tabId_key_val(details.tabId, "onHeadersReceived", true );

    /* URL TO SKIP {{{*/
    let url_domain =  get_url_domain( details.url );
    if( url_domain == "notifications.google.com")
    {
log(  "%c"+SYMBOL_CONSTRUCTION +"%c DOMAIN SKIPPED TAB#"+details.tabId+" %c "+url_domain
    ,  lbB+lf6                  ,lbL+lf6                                ,lbR+lf4);
if(log_more) log("...............details.initiator...=["+                 details.initiator  +"]");
if(log_more) log("get_url_domain(details.url)........=["+ get_url_domain( details.url      ) +"]");

        log_tag = "LOG2_TAG";
        return details.responseHeaders;
    }
    let csp_filter = b_tabs_get_tabId_key(details.tabId, "csp_filter");
if( log_more) log("...csp_filter...=["+csp_filter+"]");

    /*}}}*/
    // MAY HAVE RETURNED . f(SPECIAL URL)

    /* [has_CSP] {{{*/
    let headers = details.responseHeaders;
    let has_CSP = b_onHeader2_received_has_CSP(details.url, headers);
    b_tabs_set_tabId_key_val(details.tabId, "has_CSP", has_CSP);

    /*}}}*/
    /* PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER {{{*/
    if(!has_CSP && PROVIDING_DEFAULT_HEADER_CSP_TO_FILTER) {
if( log_this) log(SYN+" %c PROVIDING DEFAULT HEADER CSP TO FILTER:", lbb+lbH+lf6);

        let  name = "Content-Security-Policy";
        let value = ""
            +           "default-src 'unsafe-inline' "+ url_domain +"; "
            +            "script-src 'unsafe-inline' "+ url_domain +"; "
            +             "style-src 'unsafe-inline' "+ url_domain +"; "
        //  +               "img-src "                + url_domain +"; "
        //  +              "font-src "                + url_domain +"; "
        //  +             "frame-src "                + url_domain +"; "
        //  +             "media-src "                + url_domain +"; "
        //  +              "base-uri 'self'; "
        //  +           "form-action 'self'; "
        //  +       "frame-ancestors ; "
        ;
        headers.push({ name, value });
        has_CSP = true;
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

if( log_more) log_members("headers", headers, lbH+lf6);
    }
    /*}}}*/
    /* SELECT CSP FILTER SET FOR THIS TAB {{{*/
    if(!csp_filter )
    {
if( log_more) log(SYN+" %c THIS HEADER CSP FILTERING: %c NOT REQUESTED ", lbb+lbL+lf6, lbb+lbR+lf8);

        b_tabs_set_tabId_key_val(details.tabId, "last_reload_not_filtered", caller);

        log_tag = "LOG8_TAG";
        return details.responseHeaders;
    }
    else if( has_CSP )
    {
if( log_this) log("%c SELECTING CSP FILTER %c "+csp_filter, lbL+lf6, lbR+lf4);

        b_STORAGE_SELECT_csp_filter( csp_filter );
    }
    /*}}}*/
    // MAY HAVE RETURNED .. f(NO CSP FILTER SET FOR THIS TAB)

    /* CLEAR CURRENTLY APPLIED [csp_filter] {{{*/
    b_tabs_del_tabId_key    (details.tabId, "last_reload_not_filtered");
    b_tabs_del_tabId_key    (details.tabId, "csp_filter_effect");

    /*}}}*/
    /* MATCH HEADER-DOMAIN WITH TAB_URL_DOMAIN {{{*/
    let header_domain = get_url_domain( details.url );
    let taburl_domain = get_url_domain( b_tabs_get_tabId_key(details.tabId, "url") );

if(log_more) log("...header_domain=["+header_domain+"]");
if(log_more) log("...taburl_domain=["+taburl_domain+"]");

    let tab_header_domain_match = (header_domain == taburl_domain);
/*
logXXX("TAB %c"+taburl_domain+"%c DOMAIN MATCHED WITH HEADER %c"+header_domain, lbR+lf3, lbA, lbR+lf8);
*/
    tab_header_domain_match=true//FIXME

    if( tab_header_domain_match ) {
if( log_this) log("%c"+SYMBOL_CONSTRUCTION +"%c FILTERING %c"+get_url_domain(details.url)+"... %c WITH ["+csp_filter+"]"
    ,              lbB+lf6                  ,lbL+lf4     ,lbC+lf4                             ,lbR+lf4);

        b_STORAGE_SELECT_csp_filter( csp_filter );
    }
    else {
if( log_this) log("%c"+SYMBOL_CONSTRUCTION +"%c UNMATCHED %c"+get_url_domain(details.url)+"... %c FILTER DOMAIN "
    ,              lbB+lf6                  ,lbL+lf4     ,lbC+lf4                             ,lbR+lf4);

        log_tag = "LOG8_TAG";
        return details.responseHeaders;
    }
    /*}}}*/
    // MAY HAVE RETURNED .. f(NO URL MATCH)

    /* FILTER [CSP_Rules] {{{*/
    if(!CSP_Rules)
    {
if(log_this) log(SAR+" %c NEXT HEADER CSP FILTERING: %c "+CSP_FILTER_EFFECT2_RULES_LOADING
    ,                  lbF+lbL+lf6                  ,lbF+lbR+lf4);

        b_tabs_set_tabId_key_val(details.tabId, "csp_filter_effect" , CSP_FILTER_EFFECT2_RULES_LOADING);

        log_tag = "LOG2_TAG";
        return details.responseHeaders;
    }
    /*}}}*/
    // MAY HAVE RETURNED .. f(CSP RULE NOT LOADED)

    /* 1/3 - FILTER APPLIED RULES [csp_filter_applied] {{{*/
if(log_more) log("%c..CSP_Rules.length=["+ CSP_Rules.length +"]", lf4);
    let csp_filter_applied;
    if(CSP_Rules.length < 1)
    {
if(log_more) log(SAR+" %c NEXT HEADER CSP FILTERING: %c NO RULE SELECTED"
    ,                  lbF+lbL+lf6                  ,lbF+lbR+lf4);

        csp_filter_applied = CSP_FILTER_APPLIED2_NO_RULES;
    }
    else {
if(log_more) log(SAR+" %c NEXT HEADER CSP FILTERING: %c APPLYING "+CSP_Rules_key+" RULES x"+CSP_Rules.length+" "
    ,                  lbF+lbL+lf6                  ,lbF+lbR+lf4);

        csp_filter_applied = CSP_Rules_key;
    }
    /*}}}*/
    /* 2/3 - FILTERING [csp_filter_applied] {{{*/
if(log_more) log("%c .......headers.length=["+ headers.length   +"]", lb6);
    if(!has_CSP)
    {
        csp_filter_applied = CSP_FILTER_APPLIED8_NO_CSP;
    }
    else {
        let header_csp;
        for(let i=0, iLen = CSP_Rules.length; i !== iLen; ++i)
        {

            /* URL MATCH {{{*/
if(log_more) log("%c CSP_Rules #"+i+" .. %c "+CSP_Rules[i][0]+"%c.test("+details.url+"):"
        ,             lbH+lf4               ,lbL+lf4              ,lbR+lf6);
            if( !CSP_Rules[i][0].test(details.url) )
            {
if(log_this) log("%c *** NO URL MATCH ***"
        ,             lbb+lbH+lf2);

                continue;
            }
if(log_this) log(SAR+" %c URL MATCHED %c CSP_Rules_key=["+CSP_Rules_key+"] %c ["+CSP_Rules+"]"
        ,                  lbH+lf6       ,lbL+lf4                             ,lbR+lf4);

            csp_filter_applied = CSP_FILTER_APPLIED8_NO_CSP;
            /*}}}*/

            /* LOOK FOR CSP HEADER NAME {{{*/
            let subrules = CSP_Rules[i][1];
            for(let j=0, jLen = headers.length; j !== jLen; ++j)
            {
                let    name  = headers[j].name.toLowerCase();
if(log_more) log("headers["+j+"].name=["+name+"]");

                if(    name ==         "content-security-policy"
                    || name.startsWith("content-security-policy")
                    || name == "x-webkit-csp"
                    // name == "x-xss-protection"
                ) {
                    header_csp = headers[j];
                    //FIXME break;
                }
            }
            /*}}}*/

            /* FILTER REPLACE {{{*/
            if(header_csp) {
                csp_filter_applied   = CSP_FILTER_APPLIED1_FINE;
if(log_more) log_CSP("FILTER CSP HEADER", header_csp.value);
                for(let k=0, kLen = subrules.length; k !== kLen; ++k)
                {
                    let from = subrules[k][0];
                    let   to = subrules[k][1];
if(log_more) log("%c ...replace ["+from+"] with ["+to+"]", lb0);
                    let        value   = header_csp.value;
                    header_csp.value   = header_csp.value.replace(from, to);

                    if(csp_filter_applied == CSP_FILTER_APPLIED1_FINE) {
                        if(value != header_csp.value)
                            csp_filter_applied
                            = (CSP_Rules_key == FILTER5_RELAX ) ? CSP_FILTER_APPLIED5_RELAXED
                            : (CSP_Rules_key == FILTER3_REMOVE) ? CSP_FILTER_APPLIED3_REMOVED
                            :                                     CSP_FILTER_APPLIED4_CUSTOM
                        ;
                    }

                }
if(log_more) {
    if(csp_filter_applied != CSP_FILTER_APPLIED1_FINE) {
        log_CSP("FILTERED WITH "+ csp_filter_applied, header_csp.value);
        log    ("%c------------", lbH+lf6);
    }
}

            }
            /*}}}*/

            /* NO CSP HEADER TO FILTER {{{*/
            else {
if(log_more) log("%c...NO [header_csp]", lbH+lf6);
            }
            /*}}}*/

        }
    }
    /*}}}*/
    /* 3/3 - EFFECT [csp_filter_effect] {{{*/
    let csp_filter_effect;
    switch(csp_filter_applied) {
        case CSP_FILTER_APPLIED5_RELAXED   : csp_filter_effect = CSP_FILTER_EFFECT5_RULES_RELAXED;    break;
        case CSP_FILTER_APPLIED4_CUSTOM    : csp_filter_effect = CSP_FILTER_EFFECT4_RULES_CUSTOMIZED; break;
        case CSP_FILTER_APPLIED3_REMOVED   : csp_filter_effect = CSP_FILTER_EFFECT3_RULES_REMOVED;    break;
        case CSP_FILTER_APPLIED1_FINE      : csp_filter_effect = CSP_FILTER_APPLIED1_FINE;            break;
        case CSP_FILTER_APPLIED2_NO_RULES  : csp_filter_effect = CSP_FILTER_APPLIED2_NO_RULES;        break;
        case CSP_FILTER_APPLIED8_NO_CSP    : csp_filter_effect = CSP_FILTER_APPLIED8_NO_CSP;          break;
        default:                             csp_filter_effect = "";                                  break;
    }

if(log_this) log(SAR+" %c CSP FILTER APPLIED %c "+csp_filter_applied+" ", lbb+lbR+lf6, lb0+lf4);
if(log_this) log(SAR+" %c CSP FILTER EFFECT  %c "+csp_filter_effect +" ", lbb+lbR+lf6, lb0+lf4);
    /*}}}*/
    /* STORE EFFECTIVE [csp_filter] {{{*/
if(log_this) log(SAR+" %c STORING URL CSP FILTER %c "+csp_filter+" ", lbb+lbL+lf6, lbb+lbR+lf4);

    b_STORAGE_SET_url_settings (details.tabId, caller);
    /*}}}*/
    /* TAB SYNC .. HEADER FILTERED {{{*/
    let message = { csp_filter_effect /* THIS SHOULD BE THE SINGLE POINT OF ASSIGNMENT */
        ,                         url : details.url
        ,                      status : "FILTER APPLIED: "+csp_filter_applied
    };

    b_tabs_sync(details.tabId, message, "onHeadersReceived");
    /*}}}*/

    /* RETURN FILTERED HEADERS */
if( log_more) log("%c"+caller+": ...return { responseHeaders : headers }:", lbb+lbH+lf6);
if( log_this) console.table(headers);

    return { responseHeaders : headers }; /* XXX .. this is the expected return value */
} finally {
    if(log_this) log_sep_bot(caller, log_tag);
}
};
/*}}}*/
/*_ b_onHeader2_received_has_CSP {{{*/
let b_onHeader2_received_has_CSP = function(url, headers)
{
/*{{{*/
let caller   = "b_onHeader2_received_has_CSP";
let log_this = LOG_MAP.B_LOG6_ONHEADER;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
    let result = false;
    for(let i=0; i < headers.length; ++i)
    {
        let    name  = headers[i].name.toLowerCase();

        if(    name ==         "content-security-policy"
            || name.startsWith("content-security-policy")
            || name ==         "x-webkit-csp"
        ) {
            let values = headers[i].value.split(";");
/*{{{*/
if(log_more) {
    log("%c"+caller+": FOUND HEADER NAMED ["+name+"]:", lbb+lbH+lf6);
    for(let j=0; j < values.length; ++j)
    {
        let v = values[j].trim();
        if(v.indexOf(" ") < 0) log("%c"+v                  , lbH+lf9         );
        else                   log("%c"+v.replace(" ","%c"), lbL+lf8, lbR+lf3);
    }
}
/*}}}*/
            result = true;
        }
    }
if(log_this) {
    if(result) log("%c "+caller+": FOUND CSP IN "+get_url_domain(url)+" "+headers.length+" HEADERS ", lbb+lbH+lf3);
    else       log("%c "+caller+": ...NO CSP IN "+get_url_domain(url)+" "+headers.length+" HEADERS ", lbb+lbH+lf2);
    console.table( headers );
}
    return result;
};
/*}}}*/
/*_ b_onHeader2_received_csp_filter_failed {{{*/
let b_onHeader2_received_csp_filter_failed = function(csp_filter, csp_filter_effect)
{
    if(    !csp_filter        )              return false;
    if(    !csp_filter_effect )              return false; // yet no applied
    switch( csp_filter_effect )
    {
        case CSP_FILTER_APPLIED1_FINE      : return  true;
        case CSP_FILTER_APPLIED2_NO_RULES  : return  true;
        case CSP_FILTER_APPLIED8_NO_CSP    : return  true;
        default                            : return false;
    }
};
/*}}}*/

/* ACTIVATED */
/*_ b_tabs_set_last_activated_tabId {{{*/
let last_activated_tabId;
let b_tabs_set_last_activated_tabId = function(tabId )
{
    last_activated_tabId = tabId;
};
/*}}}*/
/*_ b_tabs_get_last_activated_tabId {{{*/
let b_tabs_get_last_activated_tabId = function(caller)
{
    return last_activated_tabId;
};

/*}}}*/

/* [onMessage] .. (called by popup_js options_js) */    // B_LOG1_MESSAGE
/*_ b_onMessage_CB {{{*/
let b_onMessage_CB = function(message, sender, response_handler=null)
{
/*{{{*/
let caller   = "b_onMessage_CB";
let log_this = LOG_MAP.B_LOG1_MESSAGE;
if( typeof message.set_log_map != "undefined") log_this = false;

if( log_this && !LOG_MAP.B_LOG3_PRESERVE) log_console_clear(caller);
if( l_paused ) { log("%c"+SYMBOL_CONSTRUCTION+"%c PAUSED in "+caller, lbb+lbH+lf1); return false; }
/*}}}*/
    let log_tag  = "LOG8_TAG";
try { if(log_this) log_sep_top(caller, log_tag);
if( log_this) log_members("b_onMessage_CB: message", message, lbF+lbH+lf1);

    // LOG8_TAG .. [returns response_async]
    /*  option_CB {{{*/
    let option_CB
        =          message.caller.startsWith("options_js")
        && (typeof message.caller          != "undefined")
        && (typeof message.csp_filter      != "undefined")
    ;
    if( option_CB )
        return b_onMessage_CB_options_js(message, sender, response_handler);

    /*}}}*/

    // LOG9_TAG
    /* b_onMessage_CB_set_log_map {{{*/
    else if( typeof message.set_log_map    != "undefined")
        log_tag = b_onMessage_CB_set_log_map( message );

    /*}}}*/

    // LOG2_TAG .. NO LAST ACTIVATED TAB
    // LOG4_TAG .. replied url start
    // LOG3_TAG .. called SETTINGS2_GET_ACTIVE_TAB_URL
    /* b_onMessage_CB_query {{{*/
    else if( typeof message.query          != "undefined")
        log_tag = b_onMessage_CB_query( message );

    /*}}}*/

    // LOG2_TAG .. message.tabId undefined
    // LOG0_TAG .. start      != "ON"
    // LOG7_TAG .. cancelreq  == "ON"
    // LOG3_TAG .. csp_filter == FILTER3_REMOVE
    // LOG4_TAG .. csp_filter == FILTER4_CUSTOM
    // LOG5_TAG .. csp_filter == FILTER5_RELAX
    // LOG8_TAG .. no change
    /* b_onMessage_CB_tab {{{*/
    else
        log_tag = b_onMessage_CB_tab( message );

    /*}}}*/

    return false;

} finally { if(log_this) log_sep_bot(caller, log_tag); }
};
/*}}}*/
/*_ b_onMessage_CB_options_js {{{*/
let b_onMessage_CB_options_js = function(message, sender, response_handler=null)
{
/*{{{*/
let caller   = "b_onMessage_CB_options_js";
let log_this = LOG_MAP.B_LOG1_MESSAGE;

/*}}}*/
    /* [NO message.csp_filter] {{{*/
    if(typeof message.csp_filter == "undefined")
    {
if(log_this) log(caller+"%c [NO message.csp_filter]", lbb+lbH+lf2);

        return false; /* whether to wait for an async response .. or not */
    }
    /*}}}*/
    // RETURNED VALUE:
    // @ [response_handler] becomes invalid when the event listener returns
    // @ unless you return true to indicate you wish to send a response asynchronously
    let response_async;
    switch(message.csp_filter)
    {
        /* LOAD PREDEFINED CSP FILTER {{{*/
        case FILTER3_REMOVE:
        case FILTER4_CUSTOM:
        case FILTER5_RELAX:
        case FILTER6_NONE:
        {
if(log_this) log(caller+"%c CSP LOADING csp_filter=["+message.csp_filter+"]:", lbH+lf5);
            b_STORAGE_LOAD_csp_filter(message.csp_filter, response_handler);

            response_async = true; /* will respond when loaded */
        }
        break;
        /*}}}*/
        /* SAVE CURRENTLY SELECTED CSP FILTER .. [CSP_Rules_key] {{{*/
        case "input":
        {
if(log_this) log(caller+"%c CSP EDITING CSP_Rules_key=["+CSP_Rules_key+"]:", lbH+lf4);
            let csp_json_default
                = (CSP_Rules_key == FILTER3_REMOVE  ) ? FILTER3_REMOVE_DEFAULT
                : (CSP_Rules_key == FILTER4_CUSTOM  ) ? FILTER4_CUSTOM_DEFAULT
                : (CSP_Rules_key == FILTER5_RELAX   ) ? FILTER5_RELAX_DEFAULT
                : (CSP_Rules_key == FILTER6_NONE    ) ? FILTER6_NONE_DEFAULT
                :                                       FILTER6_NONE_DEFAULT
            ;
            b_STORAGE_SAVE_csp_filter(CSP_Rules_key, message.csp_json, csp_json_default, response_handler);

            response_async = false; /* no further response to be expected */
        }
        break;
        /*}}}*/
    }
    return response_async; /* whether to wait for an async response .. or not */
};
/*}}}*/
/*_ b_onMessage_CB_set_log_map {{{*/
let b_onMessage_CB_set_log_map = function(message)
{
    switch(message.set_log_map)
    {
        case "B_LOG1_MESSAGE"   : LOG_MAP.B_LOG1_MESSAGE   = message.set_log_state; break;
        case "B_LOG2_ERROR"     : LOG_MAP.B_LOG2_ERROR     = message.set_log_state; break;
        case "B_LOG3_PRESERVE"  : LOG_MAP.B_LOG3_PRESERVE  = message.set_log_state; break;
        case "B_LOG4_PARSE"     : LOG_MAP.B_LOG4_PARSE     = message.set_log_state; break;
        case "B_LOG5_ONREQUEST" : LOG_MAP.B_LOG5_ONREQUEST = message.set_log_state; break;
        case "B_LOG6_ONHEADER"  : LOG_MAP.B_LOG6_ONHEADER  = message.set_log_state; break;
        case "B_LOG7_TABS"      : LOG_MAP.B_LOG7_TABS      = message.set_log_state; break;
        case "B_LOG8_STORE"     : LOG_MAP.B_LOG8_STORE     = message.set_log_state; break;
        case "B_LOG9_STAGE"     : LOG_MAP.B_LOG9_STAGE     = message.set_log_state; break;
        case "B_LOG0_MORE"      : LOG_MAP.B_LOG0_MORE      = message.set_log_state; break;
    }

    if( b_is_logging() ) {
        LOG_MAP.B_LOG2_ERROR = true;

      //if(LOG_MAP.B_LOG0_MORE) log("%c b_onMessage_CB_set_log_map", lb1);
      //if(LOG_MAP.B_LOG0_MORE) log_object("message", message, lb1);

        log_LOG_MAP();
    }
    return "LOG9_TAG";
};
/*}}}*/
/*_ b_onMessage_CB_query {{{*/
/*{{{*/
const B_TABS_ON_MESSAGE_QUERY     = "TABS ON MESSAGE QUERY";

/*}}}*/
let b_onMessage_CB_query = function(message)
{
/*{{{*/
let caller   = "b_onMessage_CB_query";
let log_this = LOG_MAP.B_LOG1_MESSAGE;

/*}}}*/
    let log_tag;
if( log_this) log(caller+" %c "+message.query, lbH+lf1);

    //  log_tag 2
    /* 1/3 [NO lAST ACTIVATED TAB] .. f(b_tabs_get_last_activated_tabId) {{{*/
    let tabId = b_tabs_get_last_activated_tabId( caller );

    if(!tabId ) {
if( log_this) log("%c 1/3 NO LAST ACTIVATED TAB", lbH+lf2);

        console.trace();
        log_tag = "LOG2_TAG";
    }
    /*}}}*/

    else if(message.query == "get_tab_url")
    {
    //  log_tag 4
        /* HAVE AN URL FOR A REPLY TO POPUP QUERY ANSWER {{{*/
        /* NOTE: popup_js has no clue about its own tabId .. short of an async call to getCurrent */
        let url = b_tabs_get_tabId_key(tabId, "url");
        if( url )
        {
            let message_reply =
                {              tab_url : url
                    ,            tabId   /* to be specified by following popup_js message */
                    ,     b_tabx_start : b_tabs_get_tabId_key(tabId, "start")
                    ,           caller : message.caller || B_SCRIPT_ID
                };
if( log_this) log("%c 2/3 SENDING A REPLY TO %c"+message_reply.caller+"%c "+log_json(message_reply)
    ,              lbL+lf1                  ,lbR+lf8                  ,lbH+lf7);

            chrome.runtime.sendMessage( message_reply );

            /* .. then update popup */
            b_sync_pageAction( tabId );

            log_tag = "LOG4_TAG";
        }
        /*}}}*/

    //  log_tag 3
        /* NEED TAB URL {{{*/
        else {
if( log_this) log("%c 2/3 NEED TAB URL CALLING %c SETTINGS2_GET_ACTIVE_TAB_URL"
    ,              lbL+lf1                    ,lbR+lf2);
            SETTINGS2_GET_ACTIVE_TAB_URL( tabId
                , "QUERY TAB URL"
                , message.query
            );

            log_tag = "LOG3_TAG";
        }
        /*}}}*/
    }

//    /* 3/3 [DEFAULT TO TAB SYNC] .. QUERY ANSWERED {{{*/
//    else {
//if( log_this) log("%c 3/3 DEFAULT TO CALLING %c TAB SYNC"
//    ,              lbL+lf1                  ,lbR+lf2);
//        if(!message.status) message.status = B_TABS_ON_MESSAGE_QUERY;
//        b_tabs_sync(tabId , message, "onMessage query=["+message.query+"]");
//
//        log_tag = "LOG8_TAG";
//    }
//    /*}}}*/

    return log_tag;
};
/*}}}*/
/*_ b_onMessage_CB_tab {{{*/
/*{{{*/
const B_TABS_ON_MESSAGE           = "TABS ON MESSAGE";

/*}}}*/
let b_onMessage_CB_tab = function(message)
{
/*{{{*/
let caller   = "b_onMessage_CB_tab";
let log_this = LOG_MAP.B_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;
/*}}}*/
    /* [tabId] {{{*/
    if(typeof message.tabId == "undefined")
    {
if(LOG_MAP.B_LOG2_ERROR) log_members(caller+" *** MISSING message.tabId ***", message, lbF+lbH+lf2);

        return "LOG2_TAG";
    }
    /*}}}*/
    /* [start_changed] [csp_filter_changed] [cancelreq_changed] {{{*/
    let start_changed      = false;
    let csp_filter_changed = false;
    let cancelreq_changed  = false;

    /*}}}*/
    /* [tabId cancelreq] {{{*/
    if(typeof message.cancelreq != "undefined")
    {
        let cancelreq = b_tabs_get_tabId_key(message.tabId, "cancelreq");
        if(cancelreq != message.cancelreq) {
if(log_more) log_SYN("CANCEL HTTP REQUESTS "+ message.cancelreq);

            cancelreq_changed = true;
        }
     }
    /*}}}*/
    /* [tabId csp_filter] {{{*/
    /* [csp_filter] REJECT REMOVE ACCEPT {{{*/
    if(typeof message.csp_filter != "undefined")
    {
        b_onMessage_CB_TAB_csp_filter( message );

        let current_csp_filter = b_tabs_get_tabId_key(message.tabId, "csp_filter");
        csp_filter_changed     = (message.csp_filter != current_csp_filter);
    }
    /*}}}*/
    /* [csp_filter_changed] {{{*/
if(log_more) log("csp_filter_changed=["+csp_filter_changed+"] ["+ message.csp_filter +"]");
    if(csp_filter_changed)
    {
        /* FILTER REMOVED .. ( leave previous effect to induce a cleanup-reload) */
        /* FILTER CHANGED .. (remove previous effect to induce apply csp filter) */
        if(message.csp_filter)
            b_tabs_del_tabId_key(message.tabId, "csp_filter_effect");

        /* INDUCE A PAGE RELOAD */
        b_tabs_del_tabId_key(message.tabId, "t_load");
        b_tabs_del_tabId_key(message.tabId, "reloaded_once");
      //b_tabs_del_tabId_key(message.tabId, "tools_GET_REPLY_called_once");
    }
    /*}}}*/
    /*}}}*/
    /* [tabId start] {{{*/
    /* [start] TOGGLE {{{*/
    if(typeof message.start != "undefined")
    {
        let        start  = b_tabs_get_tabId_key(message.tabId, "start");
        if(message.start != start)
        {
            start_changed = (message.start != start);

        }
    }
    /*}}}*/
    /* [csp_filter] INTERLINK {{{*/
    if(message.csp_filter && (message.start != "ON"))
    {
        message.start = "ON";
        start_changed = true;
    }
    /*}}}*/
    /* [start_changed] {{{*/
if(log_more) log("start_changed=["+start_changed+"] ["+message.start+"]");

    /*}}}*/
    /*}}}*/
    /* STORE AND SYNC {{{*/
    if(start_changed || csp_filter_changed || cancelreq_changed)
    {
        /* [tabId STORE] {{{*/
if( log_this) log_members("b_tabs["+message.tabId+"]", b_tabs.get(message.tabId), lbH+lf5);

        if(      start_changed ) b_tabs_set_tabId_key_val(message.tabId, "start"     , message.start     );
        if( csp_filter_changed ) b_tabs_set_tabId_key_val(message.tabId, "csp_filter", message.csp_filter);
        if(  cancelreq_changed ) b_tabs_set_tabId_key_val(message.tabId, "cancelreq" , message.cancelreq );

        b_tabs_set_tabId_key_message(message.tabId, "start"     , message);
        b_tabs_set_tabId_key_message(message.tabId, "csp_filter", message);
        b_tabs_set_tabId_key_message(message.tabId, "cancelreq" , message);

        b_STORAGE_SET_url_settings(message.tabId, caller);
        /*}}}*/
        /* [tabId SYNC ] {{{*/
        let what_changed
            = (     start_changed ?      " start=["+message.start      +"]" : "")
            + (csp_filter_changed ? " csp_filter=["+message.csp_filter +"]" : "")
            + ( cancelreq_changed ?  " cancelreq=["+message.cancelreq  +"]" : "")
        ;

        if(!message.status) message.status = B_TABS_ON_MESSAGE;
        b_tabs_sync(message.tabId, message, "onMessage"+what_changed);
        /*}}}*/
    }
    /*}}}*/
    // return [log_tag] .. 0 3 4 5 7 .. f(start cancelreq csp_filter) {{{
    return (message.start      != "ON"          ) ? "LOG0_TAG"
        :  (message.cancelreq  == "ON"          ) ? "LOG7_TAG"
        :  (message.csp_filter == FILTER3_REMOVE) ? "LOG3_TAG"
        :  (message.csp_filter == FILTER4_CUSTOM) ? "LOG4_TAG"
        :  (message.csp_filter == FILTER5_RELAX ) ? "LOG5_TAG"
        :                                           "LOG8_TAG"
    ;

    //}}}
};
/*}}}*/
/*_ b_onMessage_CB_TAB_csp_filter {{{*/
let b_onMessage_CB_TAB_csp_filter = function(message)
{
/*{{{*/
let caller   = "b_onMessage_CB_TAB_csp_filter";
let log_this = LOG_MAP.B_LOG1_MESSAGE;

/*}}}*/
    /* [set_no_filter_or_remove_current] {{{*/
    let csp_filter = b_tabs_get_tabId_key(message.tabId, "csp_filter");

    let set_no_filter_or_remove_current
        =  (csp_filter && !message.csp_filter) /* some current filter .............. not wanted anymore */
        || (csp_filter ==  message.csp_filter) /* some current filter re-selected ...... toggle to none */
        ;

    /*}}}*/
    /* REJECT SELECTED FILTER .. (HTTP SCHEME MISMATCH) {{{*/
    let url = b_tabs_get_tabId_key(message.tabId, "url");
    if(url && !url.startsWith("http"))
    {
if(LOG_MAP.B_LOG2_ERROR) log("%c REJECTING USELESS ["+message.csp_filter+"] FOR %c"+get_url_domain(url)+"... %c *** HTTP SCHEME MISMATCH ***"
    ,                        lbL+lf9                                           ,lbR+lf2                     ,lbH+lf2);

        message.csp_filter = "";

        /* reject popup rejected selection */
        b_sync_pageAction( message.tabId );
    }
    /*}}}*/
    /* REMOVE CURRENT FILTER {{{*/
    else if( set_no_filter_or_remove_current )
    {
if( log_this) log("%c REMOVING ["+csp_filter+"] FOR %c"+get_url_domain(url)+"...", lbL+lf9, lbR+lf2);

        message.csp_filter = "";
    }
    /*}}}*/
    /* ACCEPT SELECTED FILTER {{{*/
    else {
if( log_this) log("%c SELECTING ["+message.csp_filter+"] FOR %c"+get_url_domain(url)+"...", lbL+lf9, lbR+lf9);

    }
    /*}}}*/
};
/*}}}*/

/* [addListener] */
/*_ b_onHeader2_received_addListener {{{*/
let b_onHeader2_received_addListener = function()
{
    /*....................SCRIPT_ID..NAMESPACE...................FUNCTIONALITY............PERMISSION.........*/
    if( !log_permission(B_SCRIPT_ID, chrome.webRequest        , "Filtering Headers CSP", "webRequest"        , b_is_logging())) return;
/*  if( !log_permission(B_SCRIPT_ID, chrome.webRequestBlocking,  "Blocking Headers CSP", "webRequestBlocking", b_is_logging())) return; */

/* onHeadersReceived {{{
:!start explorer "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived"
:!start explorer "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns"
:e $LOCAL/DATA/ANDROID/PROJECTS/RTabsExtension/javascript/background.js
:e $LOCAL/DATA/ANDROID/PROJECTS/iwintoo/wss_mirror_extension/wss_mirror_bg.js
}}}*/

    chrome
        .webRequest
        .onHeadersReceived
        .addListener( b_onHeader2_received                                  // LISTENER
                      , { //         <scheme>
                          //         |   <host>
                          //         |   | <path>
                          //         |   | |
                          //         v   v v
                          urls  : [ "*://*/*"]                              // FILTER
                          , types : [ "main_frame"      , "sub_frame" ] }
                      ,             [ "responseHeaders" , "blocking"  ]     // [extraInfoSpec]
                    );

};
/*}}}*/
/*_ b_onActivated_addListener {{{*/
let b_onActivated_addListener = function()
{
    /*....................SCRIPT_ID..NAMESPACE...................FUNCTIONALITY............PERMISSION.........*/
    if( !log_permission(B_SCRIPT_ID, chrome.tabs, "Listening to Extension tabs activation", "tabs", b_is_logging()))
        return;

    chrome.tabs.onActivated.addListener( SETTINGS1_tabs_onActivated );
};
/*}}}*/
/*_ b_onUpdated_addListener {{{*/
let b_onUpdated_addListener = function()
{
    /*....................SCRIPT_ID..NAMESPACE...................FUNCTIONALITY............PERMISSION.........*/
    if( !log_permission(B_SCRIPT_ID, chrome.tabs, "Listening to Extension tabs updated", "tabs", b_is_logging()))
        return;

    chrome.tabs.onUpdated.addListener( SETTINGS1_tabs_onUpdated );
};
/*}}}*/
/*_ b_onRemoved_addListener {{{*/
let b_onRemoved_addListener = function()
{
    /*....................SCRIPT_ID..NAMESPACE...................FUNCTIONALITY............PERMISSION.........*/
    if( !log_permission(B_SCRIPT_ID, chrome.tabs, "Listening to Extension tabs removed", "tabs", b_is_logging()))
        return;

    chrome.tabs.onRemoved.addListener( SETTINGS8_tabs_onRemoved );
};
/*}}}*/
/*_ b_onMessage_addListener {{{*/
let b_onMessage_addListener = function()
{
/*{{{*/
let log_this = b_is_logging();
/*}}}*/
    /*....................SCRIPT_ID..NAMESPACE...................FUNCTIONALITY............PERMISSION.........*/
    if( !log_permission(B_SCRIPT_ID, chrome.runtime, "Listening to Extension message", "runtime", log_this) )
        return;

    chrome.runtime.onMessage.addListener( b_onMessage_CB );
};
/*}}}*/
/* [addListener] .. f(cancelreq) */                     // B_LOG5_ONREQUEST
let onBeforeRequest_is_canceling = false;
/*_ background_webRequest_onBeforeRequest_addListener {{{*/
/*{{{*/
const PATTERN_ALL_URLS = "<all_urls>";
const PATTERN_SCHEME   = "*" ;
const PATTERN_HOST     = "*" ;
const PATTERN_PATH     = "/*";

//nst PATTERN_URLS = PATTERN_ALL_URLS;
const PATTERN_URLS = PATTERN_SCHEME + "://" + PATTERN_HOST + PATTERN_PATH;

/*}}}*/
let background_webRequest_onBeforeRequest_addListener = function(tabId)
{
let caller   = "background_webRequest_onBeforeRequest_addListener";
let log_this = LOG_MAP.B_LOG5_ONREQUEST;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_this ) log("%c"+SYN+"%c ADDING"  +" [onBeforeRequest] LISTENER", lbb+lbH+lf7, lbF+lbH+lf7);
if( log_more ) log_members("TAB #"+tabId, b_tabs.get(tabId), lbH+lf8);

///* DOC {{{
//:!start explorer "https://developer.chrome.com/apps/match_patterns"
//    <url-pattern> := <scheme>://<host><path>
//                     "*"     ://"*"   "/*"
//    <scheme>      := '*' | 'http' | 'https' | 'file' | 'ftp'
//    <host>        := '*' | '*.' <any char except '/' and '*'>+
//    <path>        := '/' <any chars>
//}}}*/

    chrome.webRequest.onBeforeRequest.addListener(
        onBeforeRequest_CB
        , { urls: [ PATTERN_URLS ] }
        ,         [ "blocking"   ]   /* synchronous, so we can intercept... */

    );
    onBeforeRequest_is_canceling = true;
};
/*}}}*/
/*_ background_webRequest_onBeforeRequest_removeListener {{{*/
let background_webRequest_onBeforeRequest_removeListener = function(tabId, _caller)
{
let caller   = "background_webRequest_onBeforeRequest_removeListener";
let log_this = LOG_MAP.B_LOG5_ONREQUEST;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_this ) log("%c"+SYN+"%c REMOVING"+" [onBeforeRequest] LISTENER", lbb+lbH+lf7, lbF+lbH+lf9);
if( log_more ) log_members("TAB #"+tabId, b_tabs.get(tabId), lbH+lf8);

    chrome.webRequest.onBeforeRequest.removeListener(
        onBeforeRequest_CB
        , { urls: [ PATTERN_URLS ] }
        ,         [ "blocking"   ]   /* synchronous, so we can intercept... */
    );
    onBeforeRequest_is_canceling = false;
};
/*}}}*/
/*_ onBeforeRequest_CB {{{*/
let onBeforeRequest_CB = function(details)
{
/*{{{*/
let caller   = "onBeforeRequest_CB";
let log_this = LOG_MAP.B_LOG5_ONREQUEST;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
// DOC {{{

// onBeforeRequest (optionally synchronous)
//  Fires when a request is about to occur.
//  This event is sent before any TCP connection is made
//  and can be used to cancel or redirect requests.

// details.tabId
// details.type ResourceType:
// Enum:
// . "main_frame"
// . "sub_frame"
// . "stylesheet"
// . "script"
// . "image"
// . "font"
// . "object"
// . "xmlhttprequest"
// . "ping"
// . "csp_report"
// . "media"
// . "websocket"
// . "other"
// details.requestBody.error
// details.requestBody.formData
// details.requestBody.raw

//}}}

    let canceling = false;
    let canceling_label = "[cancelreq] NOT REQUESTED";
    let lfx             = lf8;

    let cancelreq = b_tabs_get_tabId_key(details.tabId, "cancelreq");
    if( cancelreq )
    {
        let is_page_url = (details.url == b_tabs_get_tabId_key(details.tabId, "url"));
if(log_more) log("...is_page_url=["+is_page_url+"]");

        canceling
            =  !is_page_url
            && !details.url.startsWith("chrome-extension")
        ;

        canceling_label
            = canceling
            ?      "CANCELING HTTP REQUEST"
            :  "CANNOT CANCEL HTTP REQUEST";

        lfx
            = canceling
            ?  lf2
            :  lf8;
    }
if( log_this) log("%c"+SYMBOL_GEAR+"%c "+canceling_label+" FOR %c"+ ellipsis(  details.url,64), lbF+lbH+lf2 , lbL+lfx, lbR+lfx);
if( log_more) log_members("details"                                  ,details        , lbH+lf9);
if( log_more) log_members("TAB #"+details.tabId, b_tabs.get(details.tabId) , lbH+lf8);
    return { cancel : (canceling ? true : false) };
};
/*}}}*/

/*}}}*/

/** SETTINGS */                                         // B_LOG7_TABS B_LOG9_STAGE
/*{{{*/
/*_ SETTINGS1_tabs_onUpdated {{{*/
/*{{{*/
const B_TABS_UPDATED = "TAB UPDATED";

/*{{{
:!start explorer "https://developer.chrome.com/extensions/tabs\#event-onUpdated"
    url       URL if it has changed.
    status    Can be either loading or complete.
    discarded The tab's new discarded state.
}}}*/
/*}}}*/
let SETTINGS1_tabs_onUpdated = function(tabId, changeInfo, tab)
{
/*{{{*/
let caller   = "SETTINGS1_tabs_onUpdated(tabId "+tabId+")";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if(l_paused) { log("%c"+SYMBOL_CONSTRUCTION+"%c PAUSED in "+caller, lbb+lbH+lf1); return; }
/*}}}*/
if( log_this) log("%c"+SD1+"%c "+B_TABS_UPDATED+" %c"+log_json(changeInfo), lbB+lf1, lbF+lbH+lf1, lf1);
if( log_more) log_members("tab" , tab   , lbH+lf9);
if( log_more) log_members("TAB #"+tab.id, b_tabs.get(tab.id), lbH+lf8);
    /* [b_tabs_set_last_activated_tabId] {{{*/
    let onUpdated_label = "onUpdated";

    b_tabs_set_last_activated_tabId( tab.id );
    /*}}}*/
    /* NEW [tab.url] .. DISCARD [b_tabs entry] {{{*/
    let tab_url_was  = b_tabs_get_tabId_key(tab.id, "url", "");
    if( tab_url_was != tab.url)
    {
        let tab_url_discarded
            =  (tab_url_was != ""         ) /* we had one already for this b_tabs[tab.id] */
            && (tab.url     != tab_url_was) /* .. and it was not the same */
            ;

        if( tab_url_discarded )
        {
            onUpdated_label += " .. URL DISCARD";
if( log_more) log("%c "+onUpdated_label+": %c"+ log_json({ WAS : tab_url_was , NEW : tab.url})
    ,              lbF+lbH+lf2            ,lbH+lf9);

            b_tabs_del_tabId        (tab.id);
        }
    }
    /*}}}*/
    /* [changeInfo loading] {{{*/
    if( changeInfo.status == "loading")
    {
        /* LOAD NEW [b_tab entry] {{{*/
        if( !b_tabs.get(tab.id) )
        {
            onUpdated_label += " .. URL LOAD";
if( log_more) log("%c "+onUpdated_label+": %c"+ tab.url
    ,              lbF+lbH+lf1            ,lbH+lf9);

        }
        /*}}}*/
        /* RELOAD SAME [b_tabs entry] {{{*/
        else {
            if( b_page3_TOOLS_GET_REPLY_POLL_in_progress() )
            {
                onUpdated_label += " .. TOOLS REPLY POLL IN PROGRESS";

if( log_more) log("%c NOT CALLING b_tabs_sync %c ["+tab.status+"] %c ["+onUpdated_label+"]"
    ,              lbb+lbH+lf1               ,lbF+lbL+lf7             ,lbF+lbR+lf9);
                return;
            }
            else {
                onUpdated_label += " .. URL RELOAD";
if( log_more) log("%c "+onUpdated_label+": %c"+ tab.url
    ,              lbF+lbH+lf1            , lbH+lf9);

                b_tabs_del_tabId_key(tab.id, "reloading"                ); // i.e. b_page1_RELOAD would have been called
                b_tabs_del_tabId_key(tab.id, "b_TOOLS_QUERY_called_once"); // have to check again after a reload
                b_tabs_del_tabId_key(tab.id, "t_load"                   ); // have to check again after a reload
            }
        }
    /*}}}*/
    }
    /*}}}*/
    /* [tab loading] NO [URL] .. SETTINGS2_GET_ACTIVE_TAB_URL {{{*/
    let url = b_tabs_set_tabId_key_val(tab.id, "url", tab.url);
    if(tab.status == "loading")
    {
        if(url) {
if( log_this) log("%c"+SD2+"%c SKIPPING "+B_GET_ACTIVE_TAB_URL   , lbb+lf2, lf8);
if( log_this) log("%c"+SD3+"%c SKIPPING "+B_GET_ACTIVE_TAB_URL_CB, lbb+lf3, lf8);
        }
        else {
            onUpdated_label += " .. NO TAB URL";
if( log_more) log("%c "+onUpdated_label, lbF+lbH+lf2);

            SETTINGS2_GET_ACTIVE_TAB_URL( tab.id
                , "NO URL"
                , B_SCRIPT_ID+" "+caller
            );
        }
    }
    /*}}}*/
    /* [tab loading] NO [SETTINGS] .. SETTINGS4_GET_URL_SETTINGS {{{*/
    if(tab.status == "loading")
    {
        if(url) {
            let get_settings_called   = b_tabs_get_tabId_key(tab.id, "get_settings_called"  );
            /* URL SETTINGS LOADING {{{*/
            if(!get_settings_called )
            {
                onUpdated_label += " .. URL SETTINGS LOADING";
if( log_more) log("%c "+onUpdated_label
        ,              lbF+lbH+lf1);

                SETTINGS4_GET_URL_SETTINGS(tab.id, url);
            }
            /*}}}*/
            /* URL SETTINGS LOADED {{{*/
            let get_settings_answered = b_tabs_get_tabId_key(tab.id, "get_settings_answered");
            if( get_settings_answered )
            {
                onUpdated_label += " .. URL SETTINGS LOADED";
if( log_more) log("%c "+onUpdated_label
        ,              lbF+lbH+lf1);
            }
            /*}}}*/
            /* URL SETTINGS WAITING {{{*/
            else {
                onUpdated_label += " .. URL SETTINGS WAITING";
if( log_more) log("%c "+onUpdated_label, lbF+lbH+lf1);

            }
            /*}}}*/
        }
    }
    /*}}}*/
    /* [changeInfo loading] .. (DONE reloading) {{{*/
    if(   (changeInfo.status ==           "loading")
        && b_tabs_get_tabId_key(tab.id, "reloading")
    ) {
        onUpdated_label += " .. DONE [reloading]";

        b_tabs_set_tabId_key_val(tab.id, "reloading", false);
    }
    /*}}}*/
if( log_more) log_members("TAB #"+tab.id+" (UPDATED)", b_tabs.get(tab.id), lbH+lf8);
    /* [changeInfo loading] .. b_tabs_sync {{{*/
    if(changeInfo.status == "loading")
    {
        if(!changeInfo.status) changeInfo.status = tab.status || B_TABS_UPDATED;
        b_tabs_sync(tab.id, changeInfo, onUpdated_label);
    }
    else {
if( log_more) log("%c NOT CALLING b_tabs_sync .. %c "+onUpdated_label+" [tab.status "+tab.status+"]"
    ,              lbF+lbL+lf8                   ,lbF+lbR+lf8);
    }
    /*}}}*/
};
/*}}}*/
/*_ SETTINGS1_tabs_onActivated {{{*/
/*{{{*/
const B_TABS_ACTIVATED             = "TAB ACTIVATED";
const B_TABS_ACTIVATED_TRACKED_URL = "TRACKED URL";
const B_TABS_ACTIVATED_UNKNOWN_URL = "UNKNOWN URL";

/*{{{
:!start explorer "https://developer.chrome.com/extensions/tabs\#event-onActivated"
    . URL may not be set .. @see onUpdated

}}}*/
/*}}}*/
let SETTINGS1_tabs_onActivated = function(activeInfo)
{
/*{{{*/
let caller   = "SETTINGS1_tabs_onActivated";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_this ) log_console_clear(caller);
if( l_paused ) { log("%c"+SYMBOL_CONSTRUCTION+"%c PAUSED in "+caller, lbb+lbH+lf1); return; }
/*}}}*/
    /* [tabs_activated_new_url] {{{*/
    if( !b_tabs_get_tabId_key(activeInfo.tabId, "url") ) b_tabs_set_tabId_key_val(activeInfo.tabId, "tabs_activated_new_url", true);
    else                                                 b_tabs_del_tabId_key    (activeInfo.tabId, "tabs_activated_new_url");

    /*}}}*/
    /* [url] {{{*/
    let url
        =  b_tabs_set_tabId_key_message(activeInfo.tabId, "url", activeInfo)
        || b_tabs_get_tabId_key        (activeInfo.tabId, "url"            );
    let tracked_or_unknown_url = url ? B_TABS_ACTIVATED_TRACKED_URL : B_TABS_ACTIVATED_UNKNOWN_URL;
    let                    lbx = url ?                      lbb+lf5 : lbb+lf2                     ;

    /*}}}*/
if( log_this) log("%c"+SD1+"%c "+B_TABS_ACTIVATED+" %c"+tracked_or_unknown_url+"%c"+log_json(activeInfo), lbb+lf1, lbb+lbL+lf1, lbR+lbx, lbH+lf1);
    /* [tabId] (last activated) {{{*/
    if(activeInfo.tabId)
        b_tabs_set_last_activated_tabId( activeInfo.tabId );

    /*}}}*/
if( log_more) log_members("url=["+url+"]", b_tabs.get(activeInfo.tabId), lbH+lf1);
    /* SETTINGS2_GET_ACTIVE_TAB_URL {{{*/
    if(activeInfo.tabId && !url)
    {
        SETTINGS2_GET_ACTIVE_TAB_URL(
            activeInfo.tabId
            , tracked_or_unknown_url
            , B_SCRIPT_ID+" "+caller
        );

    }
    /*}}}*/
    /* SYNC {{{*/
    else if(activeInfo.tabId) {

        if(        !activeInfo.status) activeInfo.status = tracked_or_unknown_url;
        b_tabs_sync(activeInfo.tabId, activeInfo, "onActivated");
    }
    /*}}}*/
};
/*}}}*/
/*_ SETTINGS2_GET_ACTIVE_TAB_URL {{{*/
/*{{{*/
const B_GET_ACTIVE_TAB_URL  = "GET ACTIVE TAB URL";
let onMessage_caller;

/*}}}*/
let SETTINGS2_GET_ACTIVE_TAB_URL = function(tabId, label, _caller)
{
/*{{{*/
let caller = "SETTINGS2_GET_ACTIVE_TAB_URL";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_this) log("%c"+SD2+"%c "+B_GET_ACTIVE_TAB_URL+"%c"+ label+" %c CALLED BY %c "+_caller, lbB+lf2, lbL+lf2, lbR+lf2, lbL+lf2, lbR+lf2);
//( log_more) log("%c"+caller, lbb+lbH+lf2);
    /* assert access to chrome.tabs interface {{{*/
    if(!chrome.tabs) { confirm("javascript/popup.js: (!chrome.tabs)"); return; } /* eslint-disable-line no-alert */

    /*}}}*/
    /* [onMessage_caller] {{{*/
    onMessage_caller = _caller;

    /*}}}*/
    /* SETTINGS3_GET_ACTIVE_TAB_URL_CB {{{*/
    chrome.tabs.query(
        { active:true, currentWindow:true }
        , function(tabs) {
            SETTINGS3_GET_ACTIVE_TAB_URL_CB(tabs);
        }
    );
    //}}}
};
/*}}}*/
/*_ SETTINGS3_GET_ACTIVE_TAB_URL_CB {{{*/
/*{{{*/
const B_GET_ACTIVE_TAB_URL_CB       = "GET ACTIVE TAB URL CB";

/*}}}*/
let SETTINGS3_GET_ACTIVE_TAB_URL_CB = function(tabs)
{
    /* {{{*/
let caller   = "SETTINGS3_GET_ACTIVE_TAB_URL_CB";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    /*}}}*/
    /* [active_tab] .. (tabs[0]) {{{*/
    if(!tabs || !tabs[0])
    {
if( log_more) log("NO tabs");

        return;
    }

    let active_tab
        = {   id        : tabs[0].id
            , status    : tabs[0].status
            , url       : tabs[0].url
            , title     : tabs[0].title
            , active    : tabs[0].active
            , discarded : tabs[0].discarded
        }
    ;

    let url        = active_tab.url;
    let url_domain = url ? get_url_domain(url) : "TAB HAS NO URL";
    /*}}}*/
if( log_this) log("%c"+SD3+"%c "+B_GET_ACTIVE_TAB_URL_CB +" %c"+url_domain+"... %c" +log_json(active_tab), lbB+lf3, lbL+lf3, lbR+lf3, lbH+lf3);
if( log_more) log_members("active_tab", active_tab, lbH+lf3);
    /* TRACK: currently active tab {{{*/
    if(active_tab.id && !b_tabs_get_last_activated_tabId())
    {
//if( log_this) log(caller+": %c sending tabId value to b_tabs_set_last_activated_tabId("+active_tab.id+")", lbb+lbH+lf3);

        b_tabs_set_last_activated_tabId( active_tab.id );
    }
    /*}}}*/
    /* 1/3 TAB HAS NO URL {{{*/
    if(!url) {

        return;
    }
    /*}}}*/
    /* 2/3 APPLY [tabId] [url] SETTINGS {{{*/
    let tabId = active_tab.id;
    b_tabs_set_tabId_key_message(tabId, "url"   , active_tab);
    b_tabs_set_tabId_key_message(tabId, "status", active_tab);
    b_tabs_set_tabId_key_message(tabId, "title" , active_tab);

    /*}}}*/
    /* 3/3 f(onMessage_caller) .. (send URL as a reply) {{{*/
//logXXX("onMessage_caller=["+onMessage_caller+"]");
//console.dir(onMessage_caller)
    if(!onMessage_caller || !onMessage_caller.startsWith(B_SCRIPT_ID))
    {
        let message =
            {     tab_url : url
                ,   tabId
                ,  caller : B_SCRIPT_ID+" "+caller
            };
if( log_this) log("%c Sending IPC reply message to caller process: %c"+log_json(message), lbR+lf3, lb0);
if( log_more) log("...onMessage_caller=["+onMessage_caller+"]");

        chrome.runtime.sendMessage( message ); /* 1/3 REPLY TO PUPUP URL QUERY (synchronized when URL is known)*/

        /* update popup */
        b_sync_pageAction(tabId);

        onMessage_caller = null;
    }
    /*}}}*/
// FIXME TOO EARLY ? gets undefined items into SETTINGS5_GET_URL_SETTINGS_CB .. WHY ?
    /* SETTINGS4_GET_URL_SETTINGS {{{*/
    if(     onMessage_caller
        &&  onMessage_caller.startsWith(B_SCRIPT_ID)
        && !b_tabs_get_tabId_key(tabId, "get_settings_called"  )
        && !b_tabs_get_tabId_key(tabId, "get_settings_answered")
    ) {
//if( log_this) log("%c GET LOCAL STORAGE SETTINGS FOR URL", lbH+lf3);
//logXXX("...onMessage_caller=["+onMessage_caller+"]");

        SETTINGS4_GET_URL_SETTINGS(tabId, url);
    }
    /*}}}*/
};
/*}}}*/
/*_ SETTINGS4_GET_URL_SETTINGS {{{*/
const       B_GET_URL_SETTINGS = "GET URL SETTINGS";
let SETTINGS4_GET_URL_SETTINGS = function(tabId, url)
{
/*{{{*/
let caller = "SETTINGS4_GET_URL_SETTINGS";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
    let url_domain = url ? get_url_domain(url) : "TAB HAS NO URL";
if( log_more) log("%c"+caller+": %c "+url_domain
    ,              lbb+lbL+lf4      ,lbb+lbR+lf4);
    /* SYNC [return] REPLY .. (from discarded or other tabs) {{{*/
    let url_tab
        =  b_tabs_url_settings_from_others( url )
        || b_tabs_url_settings_from_cached( url )
    ;
    if( url_tab )
    {
        b_tabs_set_tabId_key_message(tabId, "start"                 , url_tab);
        b_tabs_set_tabId_key_message(tabId, "csp_filter"            , url_tab);
        b_tabs_set_tabId_key_message(tabId, "cancelreq"             , url_tab);
        b_tabs_set_tabId_key_val    (tabId, "get_settings_called"   , true   );
        b_tabs_set_tabId_key_val    (tabId, "get_settings_answered" , true   );

if( log_this) log("%c"+SD4    +"%c "+B_GET_URL_SETTINGS+" %c RETURNING SYNC SESSION REPLY %c"+log_json(b_tabs.get(tabId))
    ,              lbb+lbH+lf4 ,lbF+lbL+lf4              ,lbF+lbR+lf5                   ,lbH+lf5);

if( log_this) log_members(url_tab.from, url_tab, lbH+lf4);
        return true;
    }
    /*}}}*/
    /* [url] {{{*/
    if(!url) return false;

    /*}}}*/
    /* SETTINGS5_GET_URL_SETTINGS_CB {{{*/
    let storage_url_key = b_STORAGE_GET_url_key(url);
if(log_more) log("...storage_url_key=["+storage_url_key+"]");

    chrome.storage.sync.get(
        storage_url_key
        , function(items) {
            SETTINGS5_GET_URL_SETTINGS_CB(
                tabId
                , url
                ,     chrome.runtime.lastError
                    ? ""
                    : items[storage_url_key]
            );
        });

    b_tabs_set_tabId_key_val(tabId, "get_settings_called"  , true);
    b_tabs_del_tabId_key    (tabId, "get_settings_answered"      );
    /*}}}*/
    /* ASYNC [return] REPLY */
if( log_this) log("%c"+SD4    +"%c "+B_GET_URL_SETTINGS+" %c ASYNC "+B_GET_URL_SETTINGS+" ... %c"+SD5
    ,              lbB+lf4     ,lbF+lbL+lf4              ,lbF+lbR+lf5                        ,lbB+lf5);
    return false;
};
/*}}}*/
/*_ SETTINGS5_GET_URL_SETTINGS_CB {{{*/
const       B_GET_URL_SETTINGS_CB = "GET URL SETTINGS CB";
let SETTINGS5_GET_URL_SETTINGS_CB = function(tabId, url, items)
{
    /* {{{*/
let caller   = "SETTINGS5_GET_URL_SETTINGS_CB";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    /*}}}*/
if( log_this) log("%c"+SD5+"%c "+B_GET_URL_SETTINGS_CB   +" %c"+get_url_domain(url)+"... %c items...\n" +log_json(items), lbB+lf5, lbL+lf5, lbR+lf5, lbH+lf5);

    b_tabs_set_tabId_key_val(tabId, "get_settings_answered", true);

    /* NO SAVED SETTINGS .. DONE POLLING .. (no tools start) {{{*/
    if(!items)
    {
    let storage_url_key = b_STORAGE_GET_url_key( url );
if( log_this) log("%c NO SAVED SETTINGS YET FOR %c storage_url_key["+storage_url_key+"]", lbL+lf5, lbR+lf9);

        b_page4_TOOLS_GET_REPLY_DONE(tabId, caller);

        b_sync_pageAction(tabId);
    }
    /*}}}*/
    else {
        /* LOOK FOR SOME ACTIVATED SETTINGS TO SYNC WITH {{{*/

        items.start            = (typeof items.start      == "undefined") ? "OFF" : (items.start      != "ON") ? "OFF" : "ON";
        items.cancelreq        = (typeof items.cancelreq  == "undefined") ? "OFF" : (items.cancelreq  != "ON") ? "OFF" : "ON";
        items.csp_filter       = (typeof items.csp_filter == "undefined") ?    "" :  items.csp_filter;

        let   start            = b_tabs_get_tabId_key(tabId,      "start", "OFF");
        let   cancelreq        = b_tabs_get_tabId_key(tabId,  "cancelreq", "OFF");
        let   csp_filter       = b_tabs_get_tabId_key(tabId, "csp_filter",    "");

        let      start_changed = (items.start      != start     );
        let csp_filter_changed = (items.csp_filter != csp_filter);
        let  cancelreq_changed = (items.cancelreq  != cancelreq );

if(log_more) log("........start_changed=["+ start_changed      +"] ["+ items.start      +"]");
if(log_more) log("...csp_filter_changed=["+ csp_filter_changed +"] ["+ items.csp_filter +"]");
if(log_more) log("....cancelreq_changed=["+ cancelreq_changed  +"] ["+ items.cancelreq  +"]");

        if(start_changed || csp_filter_changed || cancelreq_changed)
        {
if( log_this) log_members("TAB #"+tabId, b_tabs.get(tabId), lbH+lf8);

            items.status = b_tabs_get_tabId_key(tabId, "status") || B_GET_URL_SETTINGS_CB;

            b_tabs_sync(tabId, items, "onURLSettings");
        }
        /*}}}*/
        /* NO ACTIVATED TO SYNC WITH {{{*/
        else {
if(log_this) log_members("NOTHING ACTIVATED TO SYNC WITH", b_tabs.get(tabId), lbH+lf8);

        }
        /*}}}*/
    }
};
/*}}}*/
/*_ SETTINGS6_CHECK_TOOLS_LOADED {{{*/
/*{{{*/
const B_CHECK_TOOLS_LOADED              = "CHECK TOOLS LOADED";

/*}}}*/
let SETTINGS6_CHECK_TOOLS_LOADED = function(tabId)
{
/* {{{*/
let caller   = "SETTINGS6_CHECK_TOOLS_LOADED";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_this ) log("%c"+SD6+"%c "+B_CHECK_TOOLS_LOADED, lbB+lf6, lbH+lf6);
    /* [b_tabs] {{{*/
if( log_more ) log_members("TAB #"+tabId, b_tabs.get(tabId), lbH+lf8);

    let csp_filter                   = b_tabs_get_tabId_key(tabId, "csp_filter");
    let start                        = b_tabs_get_tabId_key(tabId, "start"     );
    let t_load                       = b_tabs_get_tabId_key(tabId, "t_load"    );

    let tools_loaded_label
        = ((start      != "ON") ? "START [OFF]" :       " START [ON]")
        + ((csp_filter ==   "") ?            "" : " ["+csp_filter+"]")
        + ((t_load     ==   "") ?            "" : " ["+    t_load+"]")
    ;

    let tools_loaded_request = "";
    /*}}}*/
    /* RELOAD {{{*/
    if( b_is_PAGE_RELOAD_required(tabId) )
    {
if( log_this) log("%c"+SD7+" %c RELOAD %c "+tools_loaded_label, lbb+lf7, lbL+lf7, lbR+lf8);

        SETTINGS7_RELOAD_PAGE(tabId);

        tools_loaded_request = "SETTINGS7_RELOAD_PAGE";
    }
    /*}}}*/
    /* START {{{*/
    else if( b_is_TOOLS_MESSAGE_required(tabId) )
    {
if( log_this) log("%c"+SD1+" %c SENDING TOOLS MESSAGE %c "+tools_loaded_label, lbb+lf1, lbL+lf1, lbR+lf8);

        b_page1_TOOLS_START(tabId, start, csp_filter, caller);

        tools_loaded_request = "b_page1_TOOLS_START";
    }
    /*}}}*/
    /* [tools_reply_required] {{{*/
    else {
        let b_TOOLS_QUERY_called_once    = b_tabs_get_tabId_key(tabId, "b_TOOLS_QUERY_called_once"  );
        let tabs_activated_new_url       = b_tabs_get_tabId_key(tabId, "tabs_activated_new_url"     );
        let tools_GET_REPLY_called_once  = b_tabs_get_tabId_key(tabId, "tools_GET_REPLY_called_once");
        let url                          = b_tabs_get_tabId_key(tabId, "url"                        );

        let tools_reply_required          = tabs_activated_new_url
            &&                              url
            &&                              !tools_GET_REPLY_called_once
            &&                              !b_TOOLS_QUERY_called_once
        ;

        if( tools_reply_required )
        {
if( log_this) log("%c"+SD1+" %c GETTING TOOLS REPLY %c "+tools_loaded_label, lbb+lf2, lbL+lf2, lbR+lf8);

            b_page2_TOOLS_GET_REPLY(tabId, caller);

            tools_loaded_request = "b_page2_TOOLS_GET_REPLY";
        }
    }
    /*}}}*/
    /* NO tools_loaded_request {{{*/
    if( !tools_loaded_request )
    {
if(log_this) log("%c"+tools_loaded_label, lf8);

    }
    /*}}}*/
    return tools_loaded_request;
};
/*}}}*/
/*_ SETTINGS7_RELOAD_PAGE {{{*/
let SETTINGS7_RELOAD_PAGE = function(tabId)
{
    /* {{{*/
let caller   = "SETTINGS7_RELOAD_PAGE";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    /*}}}*/
    /* [b_tabs] {{{*/
    let           url = b_tabs_get_tabId_key(tabId, "url"          );
    let    csp_filter = b_tabs_get_tabId_key(tabId, "csp_filter"   );
    let        t_load = b_tabs_get_tabId_key(tabId, "t_load"       );

    /*}}}*/
if( log_this) log("%c"+SD7+"%c RELOADING %c"+get_url_domain(url)+"...%c csp_filter %c["+csp_filter+"]"
    ,              lbB+lf7 ,lbF+lbH+lf7 ,lbL+lf9                    ,lbC+lf9      ,lbR+lf9);
    /* [reloaded_once] {{{*/
    b_tabs_set_tabId_key_val(tabId, "reloaded_once", true);

    /*}}}*/
    /* b_STORAGE_SELECT_csp_filter {{{*/
    b_tabs_del_tabId_key(    tabId, "last_reload_not_filtered");

    b_STORAGE_SELECT_csp_filter( csp_filter );

    /*}}}*/
    /* PAGE RELOAD {{{*/

    b_page4_TOOLS_GET_REPLY_DONE(tabId, caller); // cancel ongoing reload

    if( url.startsWith("http") ) b_onHeader1_reload(tabId);
    else                             b_page1_RELOAD(tabId);

    /*}}}*/
};
/*}}}*/
/*_ SETTINGS8_tabs_onRemoved {{{*/
/*{{{*/
const B_TABS_REMOVED = "TAB REMOVED";
/* DOC {{{
:!start explorer "https://developer.chrome.com/extensions/tabs\#event-onRemoved"
    url       URL if it has changed.
    status    Can be either loading or complete.
}}}*/
/*}}}*/
let SETTINGS8_tabs_onRemoved = function(tabId, removeInfo)
{
/*{{{*/
let caller   = "SETTINGS8_tabs_onRemoved(tabId "+tabId+")";
let log_this = LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;
if( log_this ) log_console_clear(caller);
if( l_paused ) { log("%c"+SYMBOL_CONSTRUCTION+"%c PAUSED in "+caller, lbb+lbH+lf1); return; }
/*}}}*/
if( log_this) log("%c"+SD9+"%c "+B_TABS_REMOVED+" %c"+log_json(removeInfo), lbB+lf9, lbF+lbH+lf9, lbF+lbH+lf9);
    /* DISCARD [b_tabs entry] .. (save in CACHE) */
    if( b_tabs.get(tabId) )
    {
if( log_more) log_members("TAB #"+tabId, b_tabs.get(tabId), lbH+lf8);
        b_tabs_del_tabId( tabId );
    }
    else {
if( log_more) log("%c REMOVED TAB #"+tabId+": WAS NOT TRACKED", lbH+lf8);

    }
};
/*}}}*/
/*}}}*/

/** TOOLS IPC */                                        // B_LOG1_MESSAGE
/*{{{*/
/* ...addressing dom_tools_js MutationObserver */
/*{{{*/
const DOM_TOOLS_JS_ID = "dom_tools_js";
const DOM_LOAD_ID     = "dom_load";
const GET_TOOLS_REPLY_SCRIPT
    = "var ret_obj = {};\n"
    + "k = '"+ DOM_LOAD_ID    +"' ; if(v = document.body.attributes[k]) ret_obj[k] = v.textContent;\n"
    + "k = '"+ DOM_TOOLS_JS_ID+"' ; if(v = document.body.attributes[k]) ret_obj[k] = v.textContent;\n"
    + "k = '"+ B_SCRIPT_ID    +"' ; if(v = document.body.attributes[k]) ret_obj[k] = v.textContent;\n"
    + "ret_obj\n"
;
//const DEL_TOOLS_REPLY_SCRIPT
//    = "document.body.removeAttribute('"+ DOM_LOAD_ID+"'    );\n"
//    + "document.body.removeAttribute('"+ DOM_TOOLS_JS_ID+"');\n"
//;
//

/*}}}*/
/*----------------------------------------------------------------------------*/
/** b_is_TOOLS_MESSAGE_required {{{*/
let b_is_TOOLS_MESSAGE_required = function(tabId)
{
/*{{{*/
    let caller = "b_is_TOOLS_MESSAGE_required";
let log_this = LOG_MAP.B_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
    /* tools4_polling_reply {{{*/
    let tools_message_required;

    let   tools4_polling_reply = b_page3_TOOLS_GET_REPLY_POLL_in_progress();
    if(   tools4_polling_reply )
    {
if( log_this) log("%c"+SYN+"%c NOT WHILE POLLING REPLY",lbb+lf6, lbH+lf4);
if( log_this) log_members("TAB #"+tabId, b_tabs.get(tabId) , lbH+lf4);

        tools_message_required = false;
    }
    /*}}}*/
    /*{{{*/
    else {
        let    tools0_req_stop  = b_tools0_req_stop ( tabId );
        let    tools1_req_start = b_tools1_req_start( tabId );
        let    tools2_req_query = b_tools2_req_query( tabId, tools1_req_start);
        let    tools3_req_reply = b_tools3_req_reply( tabId );

        tools_message_required
            =  tools0_req_stop .yes
            || tools1_req_start.yes
            || tools2_req_query.yes
            || tools3_req_reply.yes
        ;

/* log_this {{{*/
if(log_this)
{
    let requirement_label
        = "TOOLS MESSAGE "+ (tools_message_required ? "REQUIRED" : "NOT REQUIRED");

    let requirement_info
        =       ( tools0_req_stop .yes ? SYMBOL_CONSTRUCTION+" "+ tools0_req_stop .why : SYMBOL_CHECK_MARK+" "+ tools0_req_stop .why_not )
        + "\n"+ ( tools1_req_start.yes ? SYMBOL_CONSTRUCTION+" "+ tools1_req_start.why : SYMBOL_CHECK_MARK+" "+ tools1_req_start.why_not )
        + "\n"+ ( tools2_req_query.yes ? SYMBOL_CONSTRUCTION+" "+ tools2_req_query.why : SYMBOL_CHECK_MARK+" "+ tools2_req_query.why_not )
        + "\n"+ ( tools3_req_reply.yes ? SYMBOL_CONSTRUCTION+" "+ tools3_req_reply.why : SYMBOL_CHECK_MARK+" "+ tools3_req_reply.why_not )
    ;

    let lfx
        =         tools2_req_query.yes ? lf2
        :         tools3_req_reply.yes ? lf3
        :         tools1_req_start.yes ? lf1
        :         tools0_req_stop .yes ? lf9
        :                                lf8+lbF
    ;

    let lbx
        = tools_message_required
        ?  lbB
        :  lbb
    ;

    log("%c"+SYN+"%c"+requirement_label, lbx+lf6, lbH+lfx);
    log("\t%c"+       requirement_info , lbH+lfx);
    log_members("TAB #"+tabId, b_tabs.get(tabId) , lbH+lf8);
}
/*}}}*/

    }
    /*}}}*/
    return tools_message_required;
};
/*}}}*/
/*_ b_tools1_req_start {{{*/
let b_tools1_req_start = function(tabId)
{
    let     url = b_tabs_get_tabId_key(tabId, "url"   , ""   );
    let   start = b_tabs_get_tabId_key(tabId, "start" , "OFF");
    let  t_load = b_tabs_get_tabId_key(tabId, "t_load",    "");

    let t_on_idle
        =  (t_load == TOOLS5_UNLOADED)
        || (t_load == TOOLS2_WAITING )
        || (t_load == ""             )
    ;

    let why
        = "START REQUIRED:\n"
        +        ". url=["+ ellipsis(url, 32) +"]\n"
        +      ". start=["+ start             +"]\n"
        + ". TOOLS IDLE [t_load="+ t_load     +"]\n"
    ;

    let                 yes = true ; let why_not  = "tools start is not required:\n";
    if(url   ==   "") { yes = false;     why_not += ". NO URL\n";                          }
    if(start != "ON") { yes = false;     why_not += ". start=["            + start +"]\n"; }
    if( !t_on_idle  ) { yes = false;     why_not += ". !t_on_idle [t_load="+t_load +"]\n"; }

    return { yes
        ,    why
        ,    why_not
    };
};
/*}}}*/
/*_ b_tools0_req_stop {{{*/
let b_tools0_req_stop = function(tabId)
{
    let                       url = b_tabs_get_tabId_key(tabId, "url"                      ,    "");
    let                     start = b_tabs_get_tabId_key(tabId, "start"                    ,    "");
    let                    t_load = b_tabs_get_tabId_key(tabId, "t_load"                   ,    "");
    let b_TOOLS_QUERY_called_once = b_tabs_get_tabId_key(tabId, "b_TOOLS_QUERY_called_once", false);

    let t_out_of_sync
        =  (t_load == TOOLS4_DEPLOYED)
    ;

    let why
        = "STOP REQUIRED:\n"
        +                        ". url=["       +  ellipsis(url, 32)         +"]\n"
        +                      ". start=["       +  start                     +"]\n"
        +       ". TOOLS NOT ON STANDBY [t_load="+  t_load                    +"]\n"
    ;

    let                               yes = true ; let why_not  = "tools stop is not required:\n";
    if( url   ==   ""             ) { yes = false;     why_not += ". NO URL\n";                             }
    if( start != "OFF"            ) { yes = false;     why_not += ". start=["+ start +"]\n";                }
    if(!t_out_of_sync             ) { yes = false;     why_not += ". !t_out_of_sync [t_load="+t_load+"]\n"; }
  //if( b_TOOLS_QUERY_called_once ) { yes = false;     why_not += ". TOOLS QUERY ALREADY CALLED ONCE\n";    }

    return { yes
        ,    why
        ,    why_not
    };
};
/*}}}*/
/*_ b_tools2_req_query {{{*/
let b_tools2_req_query = function(tabId, tools1_req_start)
{
    let                    t_load = b_tabs_get_tabId_key(tabId, "t_load"                     ,    "");
    let b_TOOLS_QUERY_called_once = b_tabs_get_tabId_key(tabId, "b_TOOLS_QUERY_called_once"  , false);
    let lastError_message         = b_tabs_get_tabId_key(tabId, "lastError_message"          ,    "");

    let t_on_idle
        =  (t_load == "")
    ;

    let why
        = "TOOLS QUERY REQUIRED:\n"
        + ". TOOLS QUERY NOT YET CALLED\n"
        + ". "+ tools1_req_start.why_not +"\n"
    ;

    let                              yes = true ; let why_not  = "tools query not required\n";
    if( tools1_req_start.yes     ) { yes = false;     why_not +=  tools1_req_start.why;                 }
    if( !t_on_idle               ) { yes = false;     why_not += ". !t_on_idle [t_load="+t_load+"]\n";  }
    if( b_TOOLS_QUERY_called_once) { yes = false;     why_not += ". TOOLS QUERY ALREADY CALLED ONCE\n"; }
    if(         lastError_message) { yes = false;     why_not +=  lastError_message;                    }

    return { yes
        ,    why
        ,    why_not
    };

};
/*}}}*/
/*_ b_tools3_req_reply {{{*/
let b_tools3_req_reply = function(tabId)
{
    let                         url = b_tabs_get_tabId_key(tabId, "url"                        ,    "");
    let                       start = b_tabs_get_tabId_key(tabId, "start"                      , "OFF");
    let                      t_load = b_tabs_get_tabId_key(tabId, "t_load"                     ,    "");
    let tools_GET_REPLY_called_once = b_tabs_get_tabId_key(tabId, "tools_GET_REPLY_called_once", false);

    let t_out_of_sync
        =      (t_load == "")
//      =      (t_load == TOOLS4_DEPLOYED        )
//      || (   (t_load != TOOLS3_NEED_RELAXED_CSP)
//          && (t_load != TOOLS5_UNLOADED        ))
    ;

    let why
        = "TOOLS ANSWER MISSING:\n"
        +                         ". url=["       + ellipsis(url, 32)           +"]\n"
        +                       ". start=["       + start                       +"]\n"
        +           ". TOOLS OUT OF SYNC [t_load="+ t_load                      +"]\n"
        + ". TOOLS GET REPLY CALLED ONCE ["       + tools_GET_REPLY_called_once +"]\n"
    ;

    let                                yes = true ; let why_not  = "tools answer is not missing:\n";
    if( url   == ""                ) { yes = false;     why_not += ". NO URL\n";                             }
    if( start != "ON"              ) { yes = false;     why_not += ". start=["+start+"]\n";                  }
    if(!t_out_of_sync              ) { yes = false;     why_not += ". !t_out_of_sync [t_load="+t_load+"]\n"; }
    if(!tools_GET_REPLY_called_once) { yes = false;     why_not += ". !tools_GET_REPLY_called_once\n";       }

    return { yes
        ,    why
        ,    why_not
    };

};
/*}}}*/
/*----------------------------------------------------------------------------*/
/** b_is_PAGE_RELOAD_required {{{*/
let b_is_PAGE_RELOAD_required = function(tabId)
{
/*{{{*/
    let caller = "b_is_PAGE_RELOAD_required";
let log_this = LOG_MAP.B_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/

    let page4_req_reload         = b_page4_req_reload        ( tabId, b_tools3_req_reply( tabId ));
    let page5_req_filter_missing = b_page5_req_filter_missing( tabId );
    let page6_req_filter_apply   = b_page6_req_filter_apply  ( tabId );

    let page_reload_required
        =     !page5_req_filter_missing.yes
        && (   page4_req_reload        .yes
            || page6_req_filter_apply  .yes
        )
    ;

/* log_this {{{*/
if(log_this)
{
    let requirement_label
        = "RELOAD " + (page_reload_required ? "REQUIRED" : "NOT REQUIRED");

    let requirement_info
        =       ( page4_req_reload        .yes ? SYMBOL_CONSTRUCTION+" "+ page4_req_reload        .why : SYMBOL_CHECK_MARK+" "+ page4_req_reload        .why_not )
        + "\n"+ ( page5_req_filter_missing.yes ? SYMBOL_CONSTRUCTION+" "+ page5_req_filter_missing.why : SYMBOL_CHECK_MARK+" "+ page5_req_filter_missing.why_not )
        + "\n"+ ( page6_req_filter_apply  .yes ? SYMBOL_CONSTRUCTION+" "+ page6_req_filter_apply  .why : SYMBOL_CHECK_MARK+" "+ page6_req_filter_apply  .why_not )
    ;


    let lfx
        = page4_req_reload        .yes ? lf2
        : page5_req_filter_missing.yes ? lf3
        : page6_req_filter_apply  .yes ? lf3
        :                                lf8+lbF
    ;


    let lbx
        = page_reload_required
        ?  lbB
        :  lbb
    ;

    log("%c"+SYN+"%c"+requirement_label, lbx+lf6, lbH+lfx);
    log("\t%c"+       requirement_info , lbH+lfx);
    log_members("TAB #"+tabId, b_tabs.get(tabId) , lbH+lf8);
}
/*}}}*/
    return page_reload_required;
};
/*}}}*/
/*_ b_page4_req_reload {{{*/
let b_page4_req_reload = function(tabId, tools3_req_reply)
{
    let                 check_count = b_page3_TOOLS_GET_REPLY_POLL_get_check_count(tabId);
    let               reloaded_once = b_tabs_get_tabId_key(tabId, "reloaded_once"              , false);
    let tools_GET_REPLY_called_once = b_tabs_get_tabId_key(tabId, "tools_GET_REPLY_called_once", false);

    let why
        = "PAGE RELOAD REQUIRED:\n"
        +                  ". [check_count >= "+ B_TABS_TOOLS_CHECK_COUNT_MAX +"]\n"
        + ". NOT RELOADED YET [" +               !reloaded_once               +"]\n"
    ;

    let                                              yes = true ; let why_not  = "page reload is not required:\n";
    if(check_count < B_TABS_TOOLS_CHECK_COUNT_MAX) { yes = false;     why_not += ". check_count=["+check_count+"]\n"; }
//  if( tools3_req_reply.yes                     ) { yes = false;     why_not +=  tools3_req_reply.why;               }
    if( reloaded_once                            ) { yes = false;     why_not += ". reloaded_once\n";                 }

    return { yes
        ,    why
        ,    why_not
    };

};
/*}}}*/
/*_ b_page5_req_filter_missing {{{*/
let b_page5_req_filter_missing = function(tabId)
{
    let       start = b_tabs_get_tabId_key(tabId, "start"     , "");
    let      t_load = b_tabs_get_tabId_key(tabId, "t_load"    , "");
    let  csp_filter = b_tabs_get_tabId_key(tabId, "csp_filter", "");

    let why
        = "TOOLS IS MISSING A CSP FILTER:\n"
        +                   ". start=["+  start                              +"]\n"
        + ". TOOLS3_NEED_RELAXED_CSP ["+ (t_load == TOOLS3_NEED_RELAXED_CSP) +"]\n"
        +              ". csp_filter=["+  csp_filter                         +"]\n"
    ;

    let                                         yes = true ; let why_not  = "not missing a CSP filter\n";
    if(     start != "ON"                   ) { yes = false;     why_not += ". start=["     + start      +"]\n"; }
    if(    t_load != TOOLS3_NEED_RELAXED_CSP) { yes = false;     why_not += ". t_load=["    + t_load     +"]\n"; }
    if(csp_filter != ""                     ) { yes = false;     why_not += ". csp_filter=["+ csp_filter +"]\n"; }

    return { yes
        ,    why
        ,    why_not
    };

};
/*}}}*/
/*_ b_page6_req_filter_apply {{{*/
let b_page6_req_filter_apply = function(tabId)
{
    let reloaded_once        = b_tabs_get_tabId_key(tabId, "reloaded_once"    , false);
    let         start        = b_tabs_get_tabId_key(tabId, "start"            ,    "");
    let        t_load        = b_tabs_get_tabId_key(tabId, "t_load"           ,    "");
    let    csp_filter        = b_tabs_get_tabId_key(tabId, "csp_filter"       ,    "");
    let    csp_filter_effect = b_tabs_get_tabId_key(tabId, "csp_filter_effect",    "");

    let t_not_locked
        =  (t_load != "")
        && (t_load != TOOLS3_NEED_RELAXED_CSP)
    ;

    let f_out_of_sync
        =  ((csp_filter == "") && (csp_filter_effect != "")) //   no filter .. some applied
        || ((csp_filter != "") && (csp_filter_effect == "")) // some filter .. none applied
    ;

    let why
        = "CSP FILTER TO APPLY:\n"
        +                 ". start=["+  start             +"]\n"
        +            ". csp_filter=["+  csp_filter        +"]\n"
        +                ". FILTER=["+  csp_filter        +"]\n"
        +                ". EFFECT=["+  csp_filter_effect +"]\n"
        +      ". TOOLS NOT LOCKED ["+  t_load            +"]\n"
        + ". PAGE NOT RELOADED YET ["+ !reloaded_once     +"]\n"
    ;

    let                   yes = true ; let why_not  = "not applying CSP filter\n";
    if( start != "ON" ) { yes = false;     why_not += ". start=["              + start             +"]\n"; }
    if(!f_out_of_sync ) { yes = false;     why_not += ". filter=["             + csp_filter        +"]\n"; }
    if(!f_out_of_sync ) { yes = false;     why_not += ". effect=["             + csp_filter_effect +"]\n"; }
    if( t_not_locked  ) { yes = false;     why_not += ". t_not_locked [t_load="+ t_load            +"]\n"; }
    if( reloaded_once ) { yes = false;     why_not += ". ALREADY RELOADED ONCE\n";                         }

    return { yes
        ,    why
        ,    why_not
    };

};
/*}}}*/
/*----------------------------------------------------------------------------*/
/*_ b_page1_RELOAD {{{*/
/*{{{*/
const B_RELOADING_PAGE = "RELOADING PAGE";

/*}}}*/
let b_page1_RELOAD = function(tabId)
{
/*{{{*/
let caller   = "b_page1_RELOAD";
let log_this = LOG_MAP.B_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_this) log_sep_top(caller, "LOG1_TAG");
if( log_this) log(SAR+" %c RELOADING TAB#"+tabId+" PAGE", lbR+lf0);
    /* HIDE ICON {{{*/
if( log_more) log("%c chrome.pageAction.hide(tabId="+tabId+")", lbR+lf8);
    chrome.pageAction.hide( tabId );

    /*}}}*/

    b_page4_TOOLS_GET_REPLY_DONE(tabId, caller);

    b_tabs_del_tabId_key(tabId, "t_load");

    chrome.tabs.executeScript(tabId
        , { code : b_page1_RELOAD_Script() }
        , function(array_of_any) {
            if(chrome.runtime.lastError) b_page0_STORE_lastError   (tabId, caller, lf2);
//          else                         b_page4_TOOLS_GET_REPLY_CB(tabId, array_of_any);
        }
    );

    b_tabs_set_tabId_key_val(tabId, "onHeadersReceived", false);
    b_tabs_set_tabId_key_val(tabId, "reloading"        , true );

if( log_this) log("%c"+SYMBOL_GEAR+"%c TOOLS MESSAGE SENT ...WAITING FOR A REPLY", lbB+lf2, lbR+lf2);
if( log_more) log("%c"+caller, lbb+lbH+lf2);

if( log_this) log_sep_bot(caller, "LOG1_TAG");
};
/*}}}*/
/*_ b_page1_RELOAD_Script {{{*/
/*_ RELOAD_SCRIPT {{{*/
const RELOAD_SCRIPT
    = "document.location.reload();"
    + "{ t_load : 'PAGE RELOAD SENT' }\n"
;

/*}}}*/
let b_page1_RELOAD_Script = function()
{
/*{{{*/
let caller   = "b_page1_RELOAD_Script";
let log_this = LOG_MAP.B_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
    let script = RELOAD_SCRIPT;

if( log_more) log("%c"+caller+": ...return %c"+script, lbL, lbR+lf2);
    return script;
};
/*}}}*/
/*----------------------------------------------------------------------------*/
/** SETTINGS */                                         // B_LOG1_MESSAGE B_LOG7_TABS B_LOG9_STAGE
/*_ b_page1_TOOLS_START {{{*/
/*{{{*/
const B_EXTENSION_SIGNATURE = "EXTENSION SIGNATURE";

let b_page2_TOOLS_START_sequence_number = 0;

/*}}}*/
let b_page1_TOOLS_START = function(tabId, start, csp_filter, _caller)
{
/*{{{*/
let caller   = "b_page1_TOOLS_START";
let log_this = LOG_MAP.B_LOG1_MESSAGE || LOG_MAP.B_LOG7_TABS || LOG_MAP.B_LOG9_STAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if(l_paused) { log("%c"+SYMBOL_CONSTRUCTION+"%c PAUSED in "+caller, lbb+lbH+lf1); return; }

    let tools_message_label = (start ? "SENDING TOOLS START ["+start+"]" : "NOT STARTED .. SENDING EXTENSION SIGNATURE");
    let                 lfx = (start ? lf1                               : lf8                  );
/*}}}*/
if( log_this) log("%c"+SD1+"%c "+tools_message_label+" MESSAGE"
    ,              lbB+lf1 ,lbF+lbH+lfx);

    /* CANCEL PENDING POLL {{{*/
    if( b_page4_TOOLS_GET_REPLY_DONE(tabId, caller) )
    {
if( log_this) log("%c PENDING POLL CANCELED", lbb+lbH+lf4);

    }
    /*}}}*/
    /* CLEAR PREVIOUS REPLY {{{*/
    b_tabs_del_tabId_key(tabId, "start_message_reply");

    b_tabs_set_tabId_key_val(tabId, "t_load", TOOLS0_CHECKING);
    /*}}}*/
//{{{
//logXXX(caller);
//log_members("TAB #"+tabId, b_tabs.get(tabId), lbH+lf8);
//console.trace()
//}}}
    /* EXEC START SCRIPT {{{*/
    chrome.tabs.executeScript(tabId
        , { code : b_page1_TOOLS_START_script(tabId) }
        , function(array_of_any) {
            if(chrome.runtime.lastError) b_page0_STORE_lastError(tabId, caller, lf1);
        }
    );

    b_tabs_set_tabId_key_val(tabId, "b_TOOLS_QUERY_called_once", true);
    /*}}}*/
    /* GET TOOLS REPLY {{{*/
    b_page2_TOOLS_GET_REPLY(tabId, caller);

    /*}}}*/
};
/*----------------------------------------------------------------------------*/
/*}}}*/
/** SETTINGS */                                         // B_LOG1_MESSAGE
/*_ b_page1_TOOLS_START_script {{{*/
let b_page1_TOOLS_START_script = function(tabId)
{
/*{{{*/
let caller   = "b_page1_TOOLS_START_script";
let log_this = LOG_MAP.B_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
    let      start        = b_tabs_get_tabId_key(tabId, "start"     , "OFF");
    let csp_filter        = b_tabs_get_tabId_key(tabId, "csp_filter"       );
//  let csp_filter_effect = b_tabs_get_tabId_key(tabId, "csp_filter_effect");

    b_page2_TOOLS_START_sequence_number = parseInt(new Date().getTime() / 1000) % 86400; // seconds per day
    let                     message={ sequence_number   : b_page2_TOOLS_START_sequence_number };
    if( start             ) message  .start             = start;
    if( csp_filter        ) message  .csp_filter        = csp_filter;
//  if( csp_filter_effect ) message  .csp_filter_effect = csp_filter_effect;

    let message_json = JSON.stringify( message );
    let script = "document.body.setAttribute('"+B_SCRIPT_ID+"', '"+message_json+"');";

if( log_more) log("%c"+caller+": ...return %c"+script, lbL, lbR+lf1);
    return script;
};
/*}}}*/
/*----------------------------------------------------------------------------*/
/*_ b_page2_TOOLS_GET_REPLY {{{*/
/*{{{*/
const B_TOOLS_GET_REPLY_DELAY      = 3000;

let b_page2_TOOLS_GET_REPLY_timeout;
/*}}}*/
let b_page2_TOOLS_GET_REPLY = function(tabId, _caller)
{
    /*{{{*/
let caller = "b_page2_TOOLS_GET_REPLY";
let log_this = LOG_MAP.B_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    b_page2_TOOLS_GET_REPLY_callers_add(_caller);
if( log_this) b_page2_TOOLS_GET_REPLY_calls_log();

    let check_more = B_TABS_TOOLS_CHECK_COUNT_MAX - b_page3_TOOLS_GET_REPLY_POLL_get_check_count(tabId);
    /*}}}*/
if( log_this) log("%c"+SYMBOL_GEAR+"%c TAB #"+tabId+" LISTENING TO TOOLS MESSAGE REPLY %c...THEN POLLING "+check_more+" TIME"+((check_more > 1) ? "S" : "")
    ,              lbB+lf2         ,lbL+lf2                                           ,lbR+lf4);
if( log_more) log("%c CALLED BY "+_caller+"%c"+(b_page3_TOOLS_GET_REPLY_POLL_in_progress() ? "POLLING " : "NOT YET POLLING"), lbL+lf8, lbR+lf4);
    /* FIXME ? clear previous reply .. why? {{{*/
    b_tabs_del_tabId_key(tabId, "t_load");

    /*}}}*/
    /* EXEC GET REPLY SCRIPT {{{*/
    chrome.tabs.executeScript(tabId
        , { code : b_page2_TOOLS_GET_REPLY_script() }
        , function(array_of_any) {
            if(chrome.runtime.lastError) b_page0_STORE_lastError   (tabId, caller, lf2);
            else                         b_page4_TOOLS_GET_REPLY_CB(tabId, array_of_any);
        }
    );

    b_tabs_set_tabId_key_val(tabId, "tools_GET_REPLY_called_once", true);
    /*}}}*/
    /* TOOLS GET REPLY POLL {{{*/
if( log_more) log("%c POSTING %c b_page3_TOOLS_GET_REPLY_POLL", lbL, lbR+lf4);

    if(b_page3_TOOLS_GET_REPLY_POLL_timeout) clearTimeout(b_page3_TOOLS_GET_REPLY_POLL_timeout);
    b_page3_TOOLS_GET_REPLY_POLL_timeout
        = setTimeout(
            function() {
                if(chrome.runtime.lastError) b_page0_STORE_lastError     (tabId, caller, lf3);
                else                         b_page3_TOOLS_GET_REPLY_POLL(tabId);
            } ,                              B_TOOLS_GET_REPLY_DELAY
        );

    /*}}}*/
};
/*}}}*/
/*_ b_page2_TOOLS_GET_REPLY_script {{{*/
let b_page2_TOOLS_GET_REPLY_script = function()
{
/*{{{*/
let caller   = "b_page2_TOOLS_GET_REPLY_script";
let log_this = LOG_MAP.B_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
    let script
        = GET_TOOLS_REPLY_SCRIPT
    ;

if( log_more) log("%c"+caller+": ...return %c"+script, lbL, lbR+lf2);
    return script;
};
/*}}}*/
/*_ b_page2_TOOLS_GET_REPLY_callers_add {{{*/
/*{{{*/
let b_page2_TOOLS_GET_REPLY_callers = "";

/*}}}*/
let b_page2_TOOLS_GET_REPLY_callers_add = function(_caller)
{
    if(!_caller) {
        logXXX("!_caller");
        console.trace();
    }
    if(!b_page2_TOOLS_GET_REPLY_callers.includes(_caller) )
        b_page2_TOOLS_GET_REPLY_callers += " ["+ _caller+"]";
};
/*}}}*/
/*_ b_page2_TOOLS_GET_REPLY_callers_clear {{{*/
let b_page2_TOOLS_GET_REPLY_callers_clear = function()
{
    b_page2_TOOLS_GET_REPLY_callers = "";
};
/*}}}*/
/*_ b_page2_TOOLS_GET_REPLY_calls_log {{{*/
let b_page2_TOOLS_GET_REPLY_calls_log = function()
{
    log(  "%c"+SYMBOL_GEAR+"%c GETTING TOOLS REPLY %c FOR "+ b_page2_TOOLS_GET_REPLY_callers
        ,  lbB+lf2         ,lbL+lf2               ,lbR+lf9);

};
/*}}}*/
/*----------------------------------------------------------------------------*/
/*_ b_page4_TOOLS_GET_REPLY_CB {{{*/
const B_TOOLS_MESSAGE_CALLBACK = "TOOLS MESSAGE CALLBACK";
let b_page4_TOOLS_GET_REPLY_CB = function(tabId, array_of_any)
{
// NOTE ABOUT POLLING: {{{
// The first callback call will start a polling sequence...
// - unless the last tools reply
// - can be considered a valid reply
// - to the last request
//}}}
    if(!array_of_any) return;
/*{{{*/
let caller   = "b_page4_TOOLS_GET_REPLY_CB";
let log_this = LOG_MAP.B_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
    /* GET REPLY ABORTED {{{*/
    if(!b_page2_TOOLS_GET_REPLY_callers)
    {
if( log_this) log("%c"+SYMBOL_GEAR+"%c "+B_TOOLS_MESSAGE_CALLBACK+" %c GET REPLY CANCELED", lbb+lf4, lbL+lf4, lbH+lf8);

        return;
    }
    /*}}}*/
    /* [check_count] {{{*/
    let check_count          = b_page3_TOOLS_GET_REPLY_POLL_get_check_count(tabId);
    let t_load               = TOOLS0_CHECKING;

    let start                = b_tabs_get_tabId_key(tabId, "start"            );
    let csp_filter           = b_tabs_get_tabId_key(tabId, "csp_filter"       );
    let csp_filter_effect    = b_tabs_get_tabId_key(tabId, "csp_filter_effect");

    /*}}}*/
    /* [message] {{{*/
    let message
        = (typeof array_of_any[0] == "string") ? { t_load : array_of_any[0] }
        :         array_of_any[0]              ?            array_of_any[0]
        :                                        { t_load : TOOLS0_CHECKING }
    ;
    message.stage = (check_count < 1) ? "HANGING REPLY" : "POLL #"+check_count;

    /*}}}*/
if( log_this) log("%c"+SYMBOL_GEAR+"%c "+B_TOOLS_MESSAGE_CALLBACK+" %c"+ log_json(message), lbB+lf4, lbH+lf4, lbH+lf4);
if( log_more) log_members("TAB #"+tabId, b_tabs.get(tabId), lbH+lf8);
    /*  [b1_script] {{{*/
    let b1_sequence_number = 0;
    if(message[B_SCRIPT_ID    ])
    {
        let b1_script = JSON.parse(message[B_SCRIPT_ID    ]);
if( log_more) log_object("b1_script", b1_script, lbR+lf1);

        b1_sequence_number  = parseInt(b1_script.sequence_number);
    }
    /*}}}*/
    /* [l2_script] {{{*/
    let l2_sequence_number = 0;
    if(message[DOM_LOAD_ID    ])
    {
        let l2_script = JSON.parse(message[DOM_LOAD_ID    ]);
if( log_more) log_object("l2_script", l2_script, lbR+lf2);

        t_load     = b_tabs_set_tabId_key_message(tabId, "t_load"    , l2_script);

        l2_sequence_number  = parseInt(l2_script.sequence_number);
    }
    /*}}}*/
    /* [t3_script] {{{*/
    let t3_sequence_number = 0;
    if(message[DOM_TOOLS_JS_ID    ])
    {
        let t3_script = JSON.parse(message[DOM_TOOLS_JS_ID]);
if( log_more) log_object("t3_script", t3_script, lbR+lf4);

        t_load     = b_tabs_set_tabId_key_message(tabId, "t_load"    , t3_script);

        /* FILTER APPLIED BEFORE EXTENSION RESTART */
        if(    !t_load.includes(TOOLS3_NEED_RELAXED_CSP)
            &&  csp_filter
            && !csp_filter_effect
        )
            csp_filter_effect  = b_tabs_set_tabId_key_val(tabId, "csp_filter_effect", t_load);

        t3_sequence_number  = parseInt(t3_script.sequence_number);
    }
    /*}}}*/
    /* [missing_a_csp_filter] {{{*/
    let missing_a_csp_filter
        =  (    t_load == TOOLS3_NEED_RELAXED_CSP)
        && (csp_filter == "")
    ;

    /*}}}*/
    /* [sequence_match] {{{*/
    let delay
        = (t3_sequence_number >= b1_sequence_number) ? (t3_sequence_number - b1_sequence_number)
        : (l2_sequence_number >= b1_sequence_number) ? (l2_sequence_number - b1_sequence_number)
        : (l2_sequence_number >  t3_sequence_number) ? (l2_sequence_number - b1_sequence_number)
        :                                              (t3_sequence_number - b1_sequence_number)
    ;
    message.sequence_match = (delay >= 0);

    /*}}}*/
/*{{{*/

if( log_more) {
        let details
        = (    0 == b1_sequence_number) ? (" "+B_SCRIPT_ID+" request removed") /* request removed (through a reload) */ /* eslint-disable-line yoda */
        : (delay ==-b1_sequence_number) ? (""                                ) /* no reply yet                       */
        : (delay >  0)                  ? (" .. "+ delay+"s later"           ) /* yes!                               */
        : (delay <  0)                  ? (" .. "+-delay+"s old answer"      ) /*  no!                               */
        : (delay == 0)                  ? (" .. same timestamp"              ) /* maybe                              */
        :                                 (""                                ) /* cannot happen                      */
    ;
    log("%c"
        + "SEQUENCE MATCH      ["+ message.sequence_match+"]"+ details+ "\n"
        + ".b1_sequence_number=["+ b1_sequence_number                 +"]\n"
        + ".l2_sequence_number=["+ l2_sequence_number                 +"]\n"
        + ".t3_sequence_number=["+ t3_sequence_number                 +"]\n"
        , lbH+lf4
    );
}

if( log_more)
    log("%c"
        + "............check_count=["+ check_count            +"]\n"
        + "..................start=["+ start                  +"]\n"
        + ".....csp_filter........=["+ csp_filter             +"]\n"
        + ".....csp_filter_effect.=["+ csp_filter_effect      +"]\n"
        + ".................t_load=["+ t_load                 +"]\n"
        + "...missing_a_csp_filter=["+ missing_a_csp_filter   +"]\n"
        , lbH+lf8
    );

/*}}}*/

    /* [missing_a_csp_filter] {{{*/
    if(missing_a_csp_filter)
    {
        /* GOT TOOLS ANSWER .. CANCEL ONGOING POLL {{{*/
if( log_more) log("%c GOT TOOLS ["+t_load+"] ANSWER %c FROM "+message.stage, lbb+lbL+lf4, lbb+lbR+lfX[check_count]);

        b_page4_TOOLS_GET_REPLY_DONE(tabId, caller);

        /*}}}*/
        /* ...TAB SYNC .. TOOLS REPLY {{{*/
        if(!message.status) message.status = t_load;
        b_tabs_sync(tabId , message, "GOT TOOLS REPLY FROM "+message.stage);

        /*}}}*/
    }
    /*}}}*/
    /* NO REPLY YET {{{*/
    else if((t_load == TOOLS0_CHECKING))
    {
if( log_more) log("%c NO REPLY YET %c"+t_load, lbb+lbL+lf8, lbb+lbR+lf2);

        b_tabs_set_tabId_key_val(tabId, "start_message_reply", message);
    }
    /*}}}*/
    /* NEEDS RELOAD .. CANCEL ONGOING POLL {{{*/
    else if(b_is_PAGE_RELOAD_required(tabId))
    {
        SETTINGS7_RELOAD_PAGE(tabId);

    }
    /*}}}*/
    /* WRONG ANSWER {{{*/
    else if( !message.sequence_match)
    {
        let answer = (check_count == 0)
            ?         "CURRENT TOOLS SIGNATURE IS NOT AN ANSWER TO REQUEST"
            :         "WRONG ANSWER: NOT A TOOLS REPLY TO REQUEST"
        ;

        let lfx    = (check_count == 0)
            ?         lf8
            :         lfX[check_count]
        ;

if( log_this) log("%c"+answer+" #"+b1_sequence_number, lbF+lbH+lfx);

        b_tabs_set_tabId_key_val(tabId, "start_message_reply", message);
    }
    /*}}}*/
    else {
        /* GOT TOOLS ANSWER .. CANCEL ONGOING POLL {{{*/
if( log_more) log("%c GOT TOOLS ANSWER %c "+t_load+" %c FROM "+message.stage
    ,              lbb+lbL+lf4        ,lbb+lbC+lf4  ,lbb+lbR+lfX[check_count]);

        b_page4_TOOLS_GET_REPLY_DONE(tabId, caller);

        /*}}}*/
        /* ...TAB SYNC .. TOOLS REPLY {{{*/
        if(!message.status) message.status = t_load;
        b_tabs_sync(tabId , message, "GOT TOOLS REPLY FROM "+message.stage);

        /*}}}*/
    }
};
/*}}}*/
/*----------------------------------------------------------------------------*/
/*_ b_page3_TOOLS_GET_REPLY_POLL {{{*/
/*{{{*/
const B_TABS_TOOLS_CHECK_COUNT_MAX      = 2;
const B_TOOLS_START_CAN_RELOAD_ONCE     = "TOOLS MAY RELOAD";
const B_TOOLS_START_GOT_NO_REPLY        = "TOOLS WONT REPLY";

let b_page3_TOOLS_GET_REPLY_POLL_timeout;
/*}}}*/
let b_page3_TOOLS_GET_REPLY_POLL = function(tabId)
{
    /*{{{*/
let caller   = "b_page3_TOOLS_GET_REPLY_POLL";
let log_this = LOG_MAP.B_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    /*}}}*/
if( log_more) b_page3_TOOLS_GET_REPLY_POLL_log(tabId);
    /* TRY AGAIN LATER .. A FEW TIMES {{{*/
    if(b_page3_TOOLS_GET_REPLY_POLL_add_check_count(tabId) < B_TABS_TOOLS_CHECK_COUNT_MAX)
    {
        if(b_page2_TOOLS_GET_REPLY_timeout) clearTimeout(b_page2_TOOLS_GET_REPLY_timeout);
        b_page2_TOOLS_GET_REPLY_timeout
            = setTimeout(function() { b_page2_TOOLS_GET_REPLY(tabId, caller); }
            ,                         B_TOOLS_GET_REPLY_DELAY);

        return;
    }
    /*}}}*/
    /* GIVE UP AND SYNC {{{*/
    else {
      //b_page4_TOOLS_GET_REPLY_DONE(tabId, caller);

        let       message = b_tabs_get_tabId_key(tabId, "start_message_reply") || {};
        let        t_load = b_tabs_get_tabId_key(tabId, "t_load");
        let reloaded_once = b_tabs_get_tabId_key(tabId, "reloaded_once");

        if(!message.status) message.status = t_load || (reloaded_once ? B_TOOLS_START_GOT_NO_REPLY : B_TOOLS_START_CAN_RELOAD_ONCE);
        b_tabs_sync(tabId , message, "onNoPollReply");
    }
    /*}}}*/
};
/*}}}*/
/*_ b_page3_TOOLS_GET_REPLY_POLL_log {{{*/
let b_page3_TOOLS_GET_REPLY_POLL_log = function(tabId)
{
    let       start = b_tabs_get_tabId_key(tabId, "start");
    let      t_load = b_tabs_get_tabId_key(tabId, "t_load");
    let check_count = b_page3_TOOLS_GET_REPLY_POLL_get_check_count(tabId);

    let lfx = (check_count < 1) ? lf9 : lfX[check_count];

    log(  "%c"+SYMBOL_CONSTRUCTION
        + "%c POLLING %c"+ "START "+ start
        + "%c FOR %c "   +           b_page2_TOOLS_GET_REPLY_callers
        + "%c REPLY: %c "+           t_load
        //"%c"+(check_count ? ("POLL #"+check_count) : "...")
        + "%c"+                "POLL #"+check_count
        ,  lbB+lf3
        ,  lbL+lf3,   lbR+lf1
        ,  lbL+lf3,lbR+lf2
        ,  lbL+lf3,  lbR+lf4
        ,  lbF+lbH+lfx
    );
};
/*}}}*/
/*_ b_page3_TOOLS_GET_REPLY_POLL_get_check_count {{{*/
let b_page3_TOOLS_GET_REPLY_POLL_get_check_count = function(tabId)
{
    let        check_count = parseInt( b_tabs_get_tabId_key(tabId, "check_count") );
    if( isNaN( check_count) ) check_count = 0;

//logXXX("GET: check_count=["+check_count+"]");
    return     check_count;
};
/*}}}*/
/*_ b_page3_TOOLS_GET_REPLY_POLL_add_check_count {{{*/
let b_page3_TOOLS_GET_REPLY_POLL_add_check_count = function(tabId)
{
    let        check_count = 1 + b_page3_TOOLS_GET_REPLY_POLL_get_check_count(tabId);
    b_tabs_set_tabId_key_val(tabId, "check_count", check_count);

//logXXX("ADD: check_count=["+check_count+"]");
    return     check_count;
};
/*}}}*/
/*_ b_page3_TOOLS_GET_REPLY_POLL_clr_check_count {{{*/
let b_page3_TOOLS_GET_REPLY_POLL_clr_check_count = function(tabId)
{

//logXXX("CLR: check_count", lbB);
  //b_tabs_del_tabId_key(tabId, "check_count");
    b_tabs_set_tabId_key_val(tabId, "check_count", 0);
};
/*}}}*/
/*_ b_page3_TOOLS_GET_REPLY_POLL_in_progress {{{*/
let b_page3_TOOLS_GET_REPLY_POLL_in_progress = function()
{
    return (b_page3_TOOLS_GET_REPLY_POLL_timeout != null)
        || (b_page2_TOOLS_GET_REPLY_timeout      != null)
;
};
/*}}}*/
/*_ b_page4_TOOLS_GET_REPLY_DONE {{{*/
let b_page4_TOOLS_GET_REPLY_DONE = function(tabId, _caller)
{
let log_this = LOG_MAP.B_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;
    /* CLEAR POLL RESOURCES {{{*/
    b_tabs_del_tabId_key(tabId, "start_message_reply");

    b_page2_TOOLS_GET_REPLY_callers_clear();

    let check_count = b_page3_TOOLS_GET_REPLY_POLL_get_check_count(tabId);

    b_page3_TOOLS_GET_REPLY_POLL_clr_check_count(tabId);
    /*}}}*/
    /* CLEAR POLL TIMEOUT {{{*/
    if( b_page3_TOOLS_GET_REPLY_POLL_timeout || b_page2_TOOLS_GET_REPLY_timeout)
    {
        let check_mark = (check_count < 1)
            ? "POLLING FOR TOOLS REPLY CANCELED"
            : "POLLING FOR TOOLS REPLY STOPPED AFTER POLL #"+check_count
        ;
if( log_more ) log("%c"+check_mark+" %c BY "+_caller+" ", lbL+lf3, lbR+lf3);

        if(b_page3_TOOLS_GET_REPLY_POLL_timeout) {
            clearTimeout(b_page3_TOOLS_GET_REPLY_POLL_timeout);
            b_page3_TOOLS_GET_REPLY_POLL_timeout = null;
        }

        if(b_page2_TOOLS_GET_REPLY_timeout) {
            clearTimeout(b_page2_TOOLS_GET_REPLY_timeout);
            b_page2_TOOLS_GET_REPLY_timeout = null;
        }

        return true;
    }
    else {
        return false;
    }
    /*}}}*/
};
/*}}}*/
/*----------------------------------------------------------------------------*/
/*_ b_page0_STORE_lastError {{{*/
let b_page0_STORE_lastError = function(tabId, _caller, lfx)
{
    let lastError_message
        = b_tabs_set_tabId_key_val(tabId, "lastError_message", chrome.runtime.lastError.message);

if(LOG_MAP.LOG2_ERROR) log("%c"+_caller+"(TAB#"+tabId+"): ABORTING ON ERROR:\n"+lastError_message, lbH+lbF+lfx);
//{{{
//log_members("TAB #"+tabId, b_tabs.get(tabId), lbH+lf8);
//console.trace()
//}}}
    /* CANCEL PENDING POLL {{{*/
    if( b_page4_TOOLS_GET_REPLY_DONE(tabId, _caller) )
    {
        let message
            = {   status            : "ERROR"
                , caller            : _caller
                , lastError_message
            };
        b_tabs_sync(tabId , message, lastError_message);
    }
    /*}}}*/
};
/*}}}*/
/*_ b_page0_REPORT_lastError {{{*/
let b_page0_REPORT_lastError = function(tabId, _caller, lfx)
{
    let lastError_message
        = b_tabs_get_tabId_key(tabId, "lastError_message");

log("%c"+_caller+"(TAB#"+tabId+"): ABORTED ON ERROR:\n"+lastError_message, lbH+lbF+lfx);
//{{{
//log_members("TAB #"+tabId, b_tabs.get(tabId), lbH+lf8);
//console.trace()
//}}}
};
/*}}}*/
/*----------------------------------------------------------------------------*/
/*}}}*/

/* STORAGE CSP */                                       // B_LOG4_PARSE B_LOG8_STORE
/* CSP {{{*/
/*{{{*/
let csp_SELECT_STORED_FILTER_CACHE = {};

/*}}}*/
/*_ b_STORAGE_CLEAR_STORED_FILTER_CACHE {{{*/
let b_STORAGE_CLEAR_STORED_FILTER_CACHE = function()
{
/*{{{*/
let   caller = "b_STORAGE_CLEAR_STORED_FILTER_CACHE";
let log_this = LOG_MAP.B_LOG4_PARSE || LOG_MAP.B_LOG8_STORE;
/*}}}*/
    let cache_length = Object.keys(csp_SELECT_STORED_FILTER_CACHE).length;
if( log_this) log_members(caller+": csp_SELECT_STORED_FILTER_CACHE(x"+cache_length+")", csp_SELECT_STORED_FILTER_CACHE, lb7);

    if( cache_length )
    {
if( log_this) log("%c"+caller+" %c DROPPING "+ cache_length +" CACHED FILTERS", lbL+lf4, lbR+lf4);

        csp_SELECT_STORED_FILTER_CACHE = {};
    }
    else {
if( log_this) log("%c"+caller+" %c CACHE IS ALREADY EMPTY", lbL+lf4, lbR+lf8);

    }
};
/*}}}*/
/*_ b_STORAGE_SELECT_csp_filter {{{*/
let b_STORAGE_SELECT_csp_filter = function(csp_filter)
{
/*{{{*/
let   caller = "b_STORAGE_SELECT_csp_filter("+csp_filter+")";
let log_this = LOG_MAP.B_LOG4_PARSE || LOG_MAP.B_LOG8_STORE;
/*}}}*/
    let cache_length = Object.keys(csp_SELECT_STORED_FILTER_CACHE).length;
if( log_this) log_members(caller+": csp_SELECT_STORED_FILTER_CACHE(x"+cache_length+")", csp_SELECT_STORED_FILTER_CACHE, lb7);

    if( csp_SELECT_STORED_FILTER_CACHE[csp_filter] )
    {
        CSP_Rules_key = csp_filter;
        CSP_Rules     = csp_SELECT_STORED_FILTER_CACHE[csp_filter];

if( log_this) log("%c"+caller+": %c CSP_Rules.length=["+CSP_Rules.length+"] %c FROM CACHE"
                  ,lbL+lf4      ,lbC+lf8                                   ,lbR+lf8);
    }
    else {
if( log_this) log("%c"+caller+": %c NOT CACHED YET: %c calling b_STORAGE_LOAD_csp_filter=["+csp_filter+"]"
                  ,lbL+lf4      ,lbC+lf8           ,lbR+lf8);

        b_STORAGE_LOAD_csp_filter(csp_filter);
    }

};
/*}}}*/
/*_ b_STORAGE_LOAD_csp_filter {{{*/
let b_STORAGE_LOAD_csp_filter = function(csp_filter, response_handler=null)
{
let log_this = LOG_MAP.B_LOG4_PARSE || LOG_MAP.B_LOG8_STORE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;
if( log_this) log("b_STORAGE_LOAD_csp_filter(response_handler=["+typeof response_handler+"])");
if( log_more && response_handler) console.dir(response_handler);

    CSP_Rules_key = csp_filter;

    let csp_filter_name_default_dictionary
        = (csp_filter == FILTER3_REMOVE) ? { FILTER3_REMOVE : FILTER3_REMOVE_DEFAULT }
        : (csp_filter == FILTER4_CUSTOM) ? { FILTER4_CUSTOM : FILTER4_CUSTOM_DEFAULT }
        : (csp_filter == FILTER5_RELAX ) ? { FILTER5_RELAX  : FILTER5_RELAX_DEFAULT  }
        : (csp_filter == FILTER6_NONE  ) ? { FILTER6_NONE   : FILTER6_NONE_DEFAULT   }
        : null
    ;
    if( csp_filter_name_default_dictionary )
        chrome.storage.sync.get(
            csp_filter_name_default_dictionary
            , function(items) { b_STORAGE_LOAD_csp_filter_get(csp_filter, items, response_handler); }
        );

};
/*}}}*/
/*_ b_STORAGE_LOAD_csp_filter_get {{{*/
let b_STORAGE_LOAD_csp_filter_get = function(csp_filter, items, response_handler)
{
    /*{{{*/
let caller = "b_STORAGE_LOAD_csp_filter_get("+csp_filter+". items, response_handler=["+typeof response_handler+"])";
let log_this = LOG_MAP.B_LOG4_PARSE || LOG_MAP.B_LOG8_STORE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;
//( log_this) log("%c"+caller+": %c"+csp_filter+" ", lbL+lf8, lbR+lf9);

    /*}}}*/
if( log_this) log_sep_top(caller, "LOG8_TAG");
if( log_more) log_object("items", items, lb8);

    CSP_Rules     = csp_parse_RULES(items[csp_filter]);
    csp_SELECT_STORED_FILTER_CACHE[csp_filter] = CSP_Rules;

    let cache_length = Object.keys(csp_SELECT_STORED_FILTER_CACHE).length;
if( log_this) log_members(caller+": csp_SELECT_STORED_FILTER_CACHE(x"+cache_length+")", csp_SELECT_STORED_FILTER_CACHE, lb7);

if( log_this && (CSP_Rules != null)) log("%c CSP_Rules.length=["+CSP_Rules.length+"]", lb8);

    if(response_handler)
    {
if( log_this) log("%c"+caller+": %c ...calling response_handler(items["+csp_filter+"].length=["+items[csp_filter].length+"]):"
    ,             lbF+lbL+lf8  ,lbF+lbR+lf8);

        if(items[csp_filter]) response_handler(            items[csp_filter]);
        else                  response_handler("FAILURE:\n"+last_parse_error);
    }
    else
    {
if( log_this) log("%c"+caller+": %c *** NO response_handler TO CALL ***"
    ,              lbF+lbL+lf8   ,lbF+lbR+lf8);

    }

if( log_this) console.trace();
if( log_this) log_sep_bot(caller, "LOG8_TAG");
};
/*}}}*/
/*_ b_STORAGE_SAVE_csp_filter {{{*/
/*{{{*/
let CSP_Rules              = null;
let CSP_Rules_key          = "";
/*}}}*/
let b_STORAGE_SAVE_csp_filter = function(csp_filter, csp_json, csp_json_default, response_handler)
{
    /* EDITED CSP FILTER RULES {{{*/
    let caller = "b_STORAGE_SAVE_csp_filter("+csp_filter+")";
let log_this = LOG_MAP.B_LOG4_PARSE || LOG_MAP.B_LOG8_STORE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;
if( log_this) log("%c"+caller, lb8);

    let parsed_text
        = csp_json
        ? csp_json
        : csp_json_default
    ;

    CSP_Rules     = csp_parse_RULES( parsed_text );
    CSP_Rules_key = csp_filter;

    /*}}}*/
    /* PARSE ERROR {{{*/
    if(CSP_Rules == null) {
        response_handler("FAILURE:\n"+last_parse_error);

        return;
    }
    /*}}}*/
    /* SAVE FILTERS .. (NONE RELAX CUSTOM REMOVE) {{{*/
if( log_this) log("%c...CSP_Rules.length=["+CSP_Rules.length+"]", lb8);

    let csp_filter_name_value
        = (csp_filter == FILTER3_REMOVE) ? { FILTER3_REMOVE : parsed_text }
        : (csp_filter == FILTER4_CUSTOM) ? { FILTER4_CUSTOM : parsed_text }
        : (csp_filter == FILTER5_RELAX ) ? { FILTER5_RELAX  : parsed_text }
        : (csp_filter == FILTER6_NONE  ) ? { FILTER6_NONE   : parsed_text }
        : null
    ;
    if(csp_filter_name_value) {
if( log_more) log("STORAGE SYNC SET CSP FILTER%c"+log_json(csp_filter_name_value), lbR+lf8);

        chrome.storage.sync.set( csp_filter_name_value );

        b_STORAGE_CLEAR_STORED_FILTER_CACHE(); /* force reload on next use */
    }
    /*}}}*/
    /* REPLY WITH [SUCCESS parsed json] OR [default filter] {{{*/
if( log_this) log("%c"+caller+": %c ...calling response_handler:", lbF+lbL+lf8, lbF+lbR+lf8);

    if(csp_json) response_handler("SUCCESS: b_STORAGE_SAVE_csp_filter");
    else         response_handler(                        parsed_text );
    /*}}}*/
};
/*}}}*/
/*_ b_STORAGE_LOAD_LOG_MAP_CB {{{*/
let b_STORAGE_LOAD_LOG_MAP_CB = function(items={})
{
/*{{{*/
    let caller = "b_STORAGE_LOAD_LOG_MAP_CB";

/*}}}*/
    /* LOAD LOG_MAP [background] {{{*/
    /*(____________.____________________!=____________)________.________________=______.________________;*/
    if(typeof items.B_LOG1_MESSAGE      != "undefined") LOG_MAP.B_LOG1_MESSAGE  = items.B_LOG1_MESSAGE  ;
    if(typeof items.B_LOG2_ERROR        != "undefined") LOG_MAP.B_LOG2_ERROR    = items.B_LOG2_ERROR    ;
    if(typeof items.B_LOG3_PRESERVE     != "undefined") LOG_MAP.B_LOG3_PRESERVE = items.B_LOG3_PRESERVE ;
    if(typeof items.B_LOG4_PARSE        != "undefined") LOG_MAP.B_LOG4_PARSE    = items.B_LOG4_PARSE    ;
    if(typeof items.B_LOG5_ONREQUEST    != "undefined") LOG_MAP.B_LOG5_ONREQUEST= items.B_LOG5_ONREQUEST;
    if(typeof items.B_LOG6_ONHEADER     != "undefined") LOG_MAP.B_LOG6_ONHEADER = items.B_LOG6_ONHEADER ;
    if(typeof items.B_LOG7_TABS         != "undefined") LOG_MAP.B_LOG7_TABS     = items.B_LOG7_TABS     ;
    if(typeof items.B_LOG8_STORE        != "undefined") LOG_MAP.B_LOG8_STORE    = items.B_LOG8_STORE    ;
    if(typeof items.B_LOG9_STAGE        != "undefined") LOG_MAP.B_LOG9_STAGE    = items.B_LOG9_STAGE    ;
    if(typeof items.B_LOG0_MORE         != "undefined") LOG_MAP.B_LOG0_MORE     = items.B_LOG0_MORE     ;
    /*(____________.____________________!=____________)________.________________=______.________________;*/

    let some_log = b_is_logging();
    if( some_log ) {
        log("%c"+B_SCRIPT_TAG, lbH+lbb+lf3);

        LOG_MAP.B_LOG2_ERROR = true;

        if(LOG_MAP.B_LOG0_MORE) log_members(caller+"(items):", items , lf3, /*collapsed*/true);

        log_LOG_MAP();

        logn_USAGE();
    }
    /*}}}*/
    /* ADD LISTENERS {{{*/
    if(some_log) console.groupCollapsed("%c ADDING LISTENERS "+SAD, lbH+lf3);

    b_onHeader2_received_addListener();
    b_onActivated_addListener();
    b_onUpdated_addListener();
    b_onRemoved_addListener();
    b_onMessage_addListener();

    if(some_log) console.groupEnd();
    /*}}}*/
};
/*}}}*/
/* INITIAL LOAD-TIME CALL */
chrome.storage.sync.get(LOG_MAP, b_STORAGE_LOAD_LOG_MAP_CB);
/*}}}*/
/* STORAGE URL */                                       // B_LOG8_STORE
/* URL {{{*/
/*_ b_STORAGE_SET_url_settings {{{*/
let b_STORAGE_SET_url_settings = function(tabId, _caller)
{
/*{{{*/
let caller = "b_STORAGE_SET_url_settings";
let log_this = LOG_MAP.B_LOG8_STORE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;
/*}}}*/
if( log_this ) log("%c"+caller+" %c CALLED BY "+_caller, lbL+lf8, lbR+lf8);

    /* [start] [csp_filter] [cancelreq] {{{*/
    let       start = b_tabs_get_tabId_key(tabId, "start"     );
    let  csp_filter = b_tabs_get_tabId_key(tabId, "csp_filter");
    let   cancelreq = b_tabs_get_tabId_key(tabId, "cancelreq" );

    let nothing_to_store
        =  (    start != "ON")
        && (cancelreq != "ON")
        && !csp_filter
    ;
    /*}}}*/
    /* [storage_url_key] .. f(url) {{{*/
    let         url = b_tabs_get_tabId_key(tabId, "url"       );
    let storage_url_key = b_STORAGE_GET_url_key(       url );

    /*}}}*/

    /* REMOVE ENTRY .. f(nothing_to_store) {{{*/
    if(nothing_to_store)
    {
if( log_this) log("STORAGE SYNC REMOVE SETTINGS %c" + storage_url_key  , lbH+lf8);

        chrome.storage.sync.remove( storage_url_key );
    }
    /*}}}*/
    /* STORE ENTRY storage_url_key = { TAB SETTINGS } {{{*/
    else {
        let tab_settings
            = {        start : b_tabs_get_tabId_key(tabId, "start"     )
                , csp_filter : b_tabs_get_tabId_key(tabId, "csp_filter")
                ,  cancelreq : b_tabs_get_tabId_key(tabId, "cancelreq" )
                ,   typeface : ""
                ,      theme : ""
                ,      color : ""
            }
        ;

        let items = { storage_url_key : tab_settings };

if( log_this) log("STORAGE SYNC SET URL SETTINGS %c"+ storage_url_key  , lbH+lf8);
if( log_this) log_members("tab_settings", tab_settings                 , lbR+lf8);
if( log_this) log_members("items"       , items                        , lbR+lf8);

        chrome.storage.sync.set( items );
    }
    /*}}}*/

};
/*}}}*/
/*_ b_STORAGE_DEL_url_csp_filter {{{*/
let b_STORAGE_DEL_url_csp_filter = function(tabId, _caller)
{
let caller   = "b_STORAGE_DEL_url_csp_filter";
let log_this = LOG_MAP.B_LOG8_STORE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_this) log_sep_top(caller+" .. "+_caller, "LOG2_TAG");

if( log_this) log_SYN("%c REMOVING UNNECESSARY CSP FILTER", lb8);

    if( b_set_csp_filter_onHeadersReceived_timeout )
        b_onHeader1_reload_cancel();

    b_tabs_del_tabId_key(tabId, "csp_filter"        );
    b_tabs_del_tabId_key(tabId, "csp_filter_effect" );

    b_STORAGE_SET_url_settings(tabId, caller);

if( log_this) log_sep_bot(caller+" .. "+_caller, "LOG2_TAG");
};
/*}}}*/
/*_ b_STORAGE_GET_url_key {{{*/
let b_STORAGE_GET_url_key = function(url)
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
/*_ get_url_domain {{{*/
let regex_DOMAIN   = new RegExp("^(\\w*:\/\/[^\/]+)\/?.*");
let get_url_domain = function(url)
{
    if(   !url ) return "";

    let domain
        = (url.indexOf("://" ) > 0)
        ?  url.split  (  "/" )[2]
        :  url.split  (  "/" )[0]
    ;

    return  domain.replace(regex_DOMAIN, "$1") || parseURL(url).scheme+"://";
};
/*}}}*/
/*_ parseURL {{{*/
const regexp_URL = new RegExp("^([^:]+):\\/\\/(?:([^@]+)@)?([^\\/:]*)?(?::([\\d]+))?(?:(\\/[^#]*)(?:#(.*))?)?$", "i");
/*..............................scheme_.........userinfo...host______.....port_____....path______....frag...........*/
/*..............................1111111.........22222222...3333333333.....44444444.....5555555555....6666...........*/
let parseURL = function(url)
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
log_members(url, result, lf9, false);
}}}*/
    return result;
};
/*}}}*/
/*}}}*/
/* STORAGE LOG_MAP */
/* LOG_MAP {{{*/
/*_ b_storage_sync_set_LOG_MAP {{{*/
let b_storage_sync_set_LOG_MAP = function()
{
    log("%c SAVING [LOG_MAP]", lb4);
    let log_map_items
        = {     B_LOG1_MESSAGE      : LOG_MAP.B_LOG1_MESSAGE
            ,   B_LOG2_ERROR        : LOG_MAP.B_LOG2_ERROR
            ,   B_LOG3_PRESERVE     : LOG_MAP.B_LOG3_PRESERVE
            ,   B_LOG4_PARSE        : LOG_MAP.B_LOG4_PARSE
            ,   B_LOG5_ONREQUEST    : LOG_MAP.B_LOG5_ONREQUEST
            ,   B_LOG6_ONHEADER     : LOG_MAP.B_LOG6_ONHEADER
            ,   B_LOG7_TABS         : LOG_MAP.B_LOG7_TABS
            ,   B_LOG8_STORE        : LOG_MAP.B_LOG8_STORE
            ,   B_LOG9_STAGE        : LOG_MAP.B_LOG9_STAGE
            ,   B_LOG0_MORE         : LOG_MAP.B_LOG0_MORE
        };
    chrome.storage.sync.set( log_map_items );

  //log_members(SBS+"LOG_MAP", log_map_items, lbR+lf0);
};
/*}}}*/
/*}}}*/

/** CSP FILTERS */                                      // B_LOG4_PARSE
/*{{{*/
/*{{{*/
const FILTER3_REMOVE       = "FILTER3_REMOVE";
const FILTER4_CUSTOM       = "FILTER4_CUSTOM";
const FILTER5_RELAX        = "FILTER5_RELAX";
const FILTER6_NONE         = "FILTER6_NONE";

/*}}}*/
/* JSON FILTERS {{{*/
const CSP_FILTER_HELP/*{{{*/
    = "\n"
    + "# ---------------------------------------------------------\n"
    + "# On some tightly protected sites, the extension may have\n"
    + "# to relax some \"Content Security Policy\" directives\n"
    + "# (JSON RegexP x3)\n"
    + "# [\n"
    + "#  [ \"Source\", [[\"Resource\", \"Replacement\"] , [\"Resource\",\"Replacement\"]] ]\n"
    + "# ,[ \"Source\", [[\"Resource\", \"Replacement\"] , [\"Resource\",\"Replacement\"]] ]\n"
    + "# ]\n"
    + "# ---------------------------------------------------------\n"
;
/*}}}*/
const FILTER3_REMOVE_DEFAULT/*{{{*/
    = "# REMOVE FILTER - Discarding all sites CSP directives\n"
    + "# * The extension will work on all sites\n"
    + "# * But! their security policy will be disabled.\n"
    + "\n"
    + "[\n"
    + " [ \".*://.*/.*\" , [ [\".*\", \"\"] ] ]\n"
    + "]\n"
    + CSP_FILTER_HELP
;
/*}}}*/
const FILTER4_CUSTOM_DEFAULT/*{{{*/
    = "# PER-SITE CONFIG - Relaxing PER-SITE-CSP to accept extension required \"data:\" scheme\n"
    + "# * The extension can work on this protected site\n"
    + "\n"
    + "# AN EXAMPLE OF RELAXED STYLE INJECTION ON github.com :\n"
    + "[\n"
    + " [ \"https://github.com\"\n"
    + " ,[\n"
    + "   [ \"style-src [^;]*\"\n"
    + "   , \"style-src data: 'unsafe-inline' https://assets-cdn.github.com\"\n"
    + "   ]\n"
    + "  ]\n"
    + " ]\n"
    + "]\n"
    + CSP_FILTER_HELP
;
/*}}}*/
const FILTER5_RELAX_DEFAULT/*{{{*/
    = "# DEFAULT FILTER - Relaxing CSP to accept extension required \"data:\" scheme\n"
    + "# The extension will work on all sites\n"
    + "# with some relaxed security policy directives\n"
    + "# allowing this extension to access visited pages content.\n"
    + "\n"
    + "[\n"
    + " [ \".*://.*/.*\"\n"
    + "  , [ [ \"'none'\" , \"\" ]\n"
    + "   ,  [ \"(default-src) +(?:'unsafe-inline' *)?([^;]*);?\", \"$1 data: 'unsafe-inline' $2;\" ]\n"
    + "   ,  [  \"(script-src) +(?:'unsafe-inline' *)?([^;]*);?\", \"$1 data: 'unsafe-inline' $2;\" ]\n"
    + "   ,  [   \"(style-src) +(?:'unsafe-inline' *)?([^;]*);?\", \"$1 data: 'unsafe-inline' $2;\" ]\n"
    + "  ]\n"
    + " ]\n"
    + "]\n"
    + CSP_FILTER_HELP
;
/*}}}*/
const FILTER6_NONE_DEFAULT/*{{{*/
    = "# NO FILTER - Respecting all sites CSP directives\n"
    + "# * The extension may not work on some protected sites\n"
    + "\n"
    + CSP_FILTER_HELP
;
/*}}}*/
/*}}}*/
/*_ csp_parse_RULES {{{*/
let csp_parse_RULES = function(csp_rules)
{
/*{{{*/
let caller = "csp_parse_RULES";
let log_this = LOG_MAP.B_LOG4_PARSE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;
/*}}}*/
if( log_this) log("%c "+caller+"("+csp_rules+")", lb4);

    if(typeof csp_rules !== "string") csp_rules = "";

    last_parse_error = caller;
    let result
        = csp_parse_REGEX(
            csp_parse_VALIDATE(
                csp_parse_JSON( csp_rules )
            )
        );

if( log_this) log("%c ...........csp_rules %c"+csp_rules, lbL+lf4, lbR+lf4);
if( log_this) log("%c "+caller+" ...return %c"+result   , lbL+lf4, lbR+lf4);
    return result;
};
/*}}}*/
/*_ csp_parse_JSON {{{*/
let csp_parse_JSON = function(csp_json)
{
/*{{{*/
let caller = "csp_parse_JSON";
let log_this = LOG_MAP.B_LOG4_PARSE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;
/*}}}*/
if( log_this) log("%c "+caller+"("+csp_json+"):", lb4);

    /* JSON.parse {{{*/
    csp_json = csp_parse_BLANKS( csp_json );
    if(csp_json === "") return [];

    let   result = null;
    try { result = JSON.parse(csp_json); } catch (_) {}

    /*}}}*/
if( log_this) log("%c "+caller+":  ...%c JSON.parse returned %c"+result
    ,                         lbH+lf4               ,lbL+lf4               ,lbR+lf4);
    return result;
};
/*}}}*/
/*_ csp_parse_BLANKS {{{*/
let csp_parse_BLANKS = function(s)
{
/*{{{*/
let caller = "csp_parse_BLANKS";
let log_this = LOG_MAP.B_LOG4_PARSE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;
/*}}}*/
if( log_this) log("%c "+caller+"("+s+")", lb4);
    /* lines {{{*/
    let lines = s.match(/[^\r\n]+/g) || [];

    /*}}}*/
    /* comments and blank-lines {{{*/
    let result = "";
    lines.forEach(function(line) {
        if(    (line.match(/^\s*#/) !== null)
            || (line.match(/^\s*$/) !== null)
        ) {
            return;
        }
        result += line+"\n";
    });

    /*}}}*/
if( log_this) log("%c "+caller+": ...return %c"+result, lbL+lf4, lbR+lf4);
    return result;
};
/*}}}*/
/*_ csp_parse_REGEX {{{*/
let last_parse_error;
let csp_parse_REGEX = function(newRules)
{
/*{{{*/
let caller = "csp_parse_REGEX";
let log_this = LOG_MAP.B_LOG4_PARSE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;
/*}}}*/
if( log_this) log("%c "+caller+"("+newRules+")", lb4);

    if(newRules === null) {
if( log_this) log("%c ...(newRules === null)", lb2);
        return null;
    }

    let result = null;
    try {
        result =
            newRules.map(
                function(rule) {
                    return [                                        new RegExp(    rule[0]     )
                        , rule[1].map( function(subrule) { return [ new RegExp( subrule[0], "g")
                            ,                                                   subrule[1]      ]; } )
                    ];
                }
            );

    } catch(ex) {
        last_parse_error= caller+": "+ ex;
if( log_this || LOG_MAP.B_LOG2_ERROR) log("%c *** last_parse_error=[%c "+last_parse_error+" ]", lb2, lb0);
    }

if( log_this) log("%c "+caller+": ...return %c"+result, lbL+lf4, lbR+lf4);
    return result;
};
/*}}}*/
/*_ csp_parse_VALIDATE {{{*/
let csp_parse_VALIDATE = function(rules)
{
/*{{{*/
let caller = "csp_parse_VALIDATE";
let log_this = LOG_MAP.B_LOG4_PARSE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;
/*}}}*/
if( log_this) log("%c "+caller+"("+rules+")", lb4);

    /* RULES SHOULD BE AN ARRAY {{{*/
    if(!Array.isArray(rules)) {
        last_parse_error= caller+": (!Array.isArray(rules))";
if(log_this || LOG_MAP.B_LOG2_ERROR) log("%c *** last_parse_error=[%c "+last_parse_error+" ]", lb2, lb0);
        return null;
    }
    /*}}}*/
    /* length .. string .. rules*2 [subrules*2] {{{*/
    last_parse_error = "";
    rules.forEach(
        function(rule) {
            if(                  rule.length !== 2       ) { last_parse_error = "rule.length       !== 2"       ; return null; }
            if(typeof            rule[0]     !== "string") { last_parse_error = "typeof rule[0]    !== 'string'"; return null; }
            if( !Array.isArray(  rule[1])                ) { last_parse_error = "!Array.isArray(rule[1])";        return null; }

            rule[1].forEach(
                function(subrule) {
                    if(       subrule.length !== 2       ) { last_parse_error = "subrule.length    !== 2";        return null; }
                    if(typeof subrule[0]     !== "string") { last_parse_error = "typeof subrule[0] !== 'string'"; return null; }
                    if(typeof subrule[1]     !== "string") { last_parse_error = "typeof subrule[1] !== 'string'"; return null; }
                    return null;
                });

            return null;
        });
    /*}}}*/

    if(last_parse_error) {
if(log_this || LOG_MAP.B_LOG2_ERROR) log("%c "+caller+": *** last_parse_error=["+last_parse_error+"]", lb2);
        return null;
    }
if( log_this) log("%c "+caller+": ...return rules %c"+rules, lbL+lf4, lbR+lf4);
    return rules;
};
/*}}}*/
/*}}}*/

/*_ CONSOLE LOG */
/*_ logn_USAGE {{{*/
let logn_USAGE = function()
{
    let args = [""];            let s  = "";
    /*...........................*/ s += "%c logn()  .. logging states\n"   ; args.push(lbR+lf9);
    /*...........................*/ s += "%c logn(1) .. toggle MESSAGE\n"   ; args.push(lbR+lf1);
    /*...........................*/ s += "%c logn(2) .. toggle ERROR\n"     ; args.push(lbR+lf2);
    /*...........................*/ s += "%c logn(3) .. toggle PRESERVE\n"  ; args.push(lbR+lf3);
    /*...........................*/ s += "%c logn(4) .. toggle PARSE\n"     ; args.push(lbR+lf4);
    /*...........................*/ s += "%c logn(5) .. toggle ONREQUEST\n" ; args.push(lbR+lf5);
    /*...........................*/ s += "%c logn(6) .. toggle ONHEADER\n"  ; args.push(lbR+lf6);
    /*...........................*/ s += "%c logn(7) .. toggle TABS\n"      ; args.push(lbR+lf7);
    /*...........................*/ s += "%c logn(8) .. toggle STORE\n"     ; args.push(lbR+lf8);
    /*...........................*/ s += "%c logn(9) .. toggle STAGE\n"     ; args.push(lbR+lf9);
    /*...........................*/ s += "%c logn(0) .. toggle MORE\n"      ; args.push(lbR+lf0);
    args[0] = s;

    console.groupCollapsed("%c logn USAGE "+SAD, lbH);
    console.log.apply     (console, Array.prototype.slice.call(args));
    console.groupEnd();
};
/*}}}*/
/*_ logn {{{*/
let logn = function(n)
{
let caller   = "logn("+n+")";

    let log_tag
        = (n == 1) ? "B_LOG1_MESSAGE"
        : (n == 2) ? "B_LOG2_ERROR"
        : (n == 3) ? "B_LOG3_PRESERVE"
        : (n == 4) ? "B_LOG4_PARSE"
        : (n == 5) ? "B_LOG5_ONREQUEST"
        : (n == 6) ? "B_LOG6_ONHEADER"
        : (n == 7) ? "B_LOG7_TABS"
        : (n == 8) ? "B_LOG8_STORE"
        : (n == 9) ? "B_LOG9_STAGE"
        : (n == 0) ? "B_LOG0_MORE"
        :            ""
    ;

    /* TOGGLE, LOG, SAVE */
    if(log_tag) {
        let message
            = {   set_log_map   : log_tag
                , set_log_state : !LOG_MAP[log_tag]
                , caller        : B_SCRIPT_ID
            };
        b_onMessage_CB_set_log_map( message );

        b_storage_sync_set_LOG_MAP();
    }
    /* LOG */
    else {
        log_LOG_MAP();
    }
    /* USAGE */
    logn_USAGE();

    if(chrome.runtime.lastError) return chrome.runtime.lastError.message;
    if(!log_tag                ) return SYN;
    let    mark = LOG_MAP[log_tag] ? SYMBOL_CHECK_MARK : SYMBOL_NOT_CHECKED;
    return mark+" "+log_tag+"="+LOG_MAP[log_tag];
};
/*}}}*/

/*_ POPUP */                                            // B_LOG9_STAGE
/*{{{*/
const ICON_PATH_0_INITIAL       = "../images/rtabs16.png"    ;
const ICON_PATH_1_BROWN         = "../images/rtabs16_1_b.png";
const ICON_PATH_2_X             = "../images/rtabs16_2_r.png";
const ICON_PATH_3_O             = "../images/rtabs16_3_o.png";
const ICON_PATH_4_YELLOW        = "../images/rtabs16_4_y.png";
const ICON_PATH_5_GREEN         = "../images/rtabs16_5_g.png";
const ICON_PATH_6_BLUE          = "../images/rtabs16_6_b_square.png";
const ICON_PATH_7_X             = "../images/rtabs16_7_m.png";
const ICON_PATH_8_OFF           = "../images/rtabs16_8_g.png";

const TOOLS0_CHECKING           = "TOOLS CHECKING";
const TOOLS1_OFF                = "TOOLS OFF";
const TOOLS2_WAITING            = "TOOLS WAITING";
const TOOLS3_NEED_RELAXED_CSP   = "TOOLS NEED RELAXED CSP";
const TOOLS4_DEPLOYED           = "TOOLS DEPLOYED";
const TOOLS5_UNLOADED           = "TOOLS UNLOADED";

/*}}}*/
/*_ b_sync_pageAction {{{*/
let b_sync_pageAction = function(tabId)
{
    if(tabId < 0) return; /* (190106) */
    /*{{{*/
let caller   = "b_sync_pageAction";
let log_this = LOG_MAP.B_LOG9_STAGE;

let log_more = log_this && LOG_MAP.B_LOG0_MORE;
    /*}}}*/
    /* b_tabs[tabId] {{{*/
    let url               = b_tabs_get_tabId_key(tabId, "url"              );
    let status            = b_tabs_get_tabId_key(tabId, "status"           );
    let start             = b_tabs_get_tabId_key(tabId, "start"            );
    let csp_filter        = b_tabs_get_tabId_key(tabId, "csp_filter"       );
    let has_CSP           = b_tabs_get_tabId_key(tabId, "has_CSP"          );
    let csp_filter_effect = b_tabs_get_tabId_key(tabId, "csp_filter_effect");
    let cancelreq         = b_tabs_get_tabId_key(tabId, "cancelreq"        );
    let t_load            = b_tabs_get_tabId_key(tabId, "t_load"           );

    /*}}}*/
    /* [icon_color] .. f(t_load cancelreq csp_filter) {{{*/
    let icon_color
        = (cancelreq         == "ON"                                  ) ? lb7

        : (t_load.startsWith(TOOLS2_WAITING         )                 ) ? lb0
        : (t_load.startsWith(TOOLS3_NEED_RELAXED_CSP)                 ) ? lb2

        : (csp_filter_effect == CSP_FILTER_EFFECT3_RULES_REMOVED      ) ? lb3
        : (csp_filter_effect == CSP_FILTER_EFFECT4_RULES_CUSTOMIZED   ) ? lb4
        : (csp_filter_effect == CSP_FILTER_EFFECT5_RULES_RELAXED      ) ? lb5

        : (t_load            == TOOLS4_DEPLOYED                       ) ? lb6

        : !csp_filter                                                   ? lb0

        :                                                                 lb0
    ;

    /*}}}*/
    /* [icon_path] .. f(start icon_color) {{{*/
    let icon_path
        = (icon_color == lb7                         ) ? ICON_PATH_7_X       /* REQUESTS BLOCKED */
        : (t_load.startsWith(TOOLS3_NEED_RELAXED_CSP)) ? ICON_PATH_2_X       /* TOOLS LOCKED     */
//      : (start      != "ON"                        ) ? ICON_PATH_8_OFF     /* TOOLS OFF        */
        : (icon_color == lb2                         ) ? ICON_PATH_2_X       /* TOOLS LOCKED     */
        : (icon_color == lb3                         ) ? ICON_PATH_3_O       /* filtered HARD    */
        : (icon_color == lb4                         ) ? ICON_PATH_4_YELLOW  /* filtered SOFT    */
        : (icon_color == lb5                         ) ? ICON_PATH_5_GREEN   /* filter NONE      */
        : (icon_color == lb6                         ) ? ICON_PATH_6_BLUE    /* TOOLS DEPLOYED   */
//      : (icon_color == lb1                         ) ? ICON_PATH_1_BROWN   /* filter NO EFFECT */
        : (icon_color == lb0                         ) ? ICON_PATH_0_INITIAL /* TOOLS READY      */
        :/*csp_filter == undefined                  */   ICON_PATH_0_INITIAL /* ...default       */
    ;
    /*}}}*/
if( log_more) log_members("...icon_path", { t_load, csp_filter_effect, start, icon_color, icon_path }, lf4);
    /* POPUP UPDATE MESSAGE {{{*/
    let title = b_get_pageAction_title(tabId, status, url, start, csp_filter, cancelreq, t_load);

    b_tabs_set_tabId_key_val(tabId, "icon_path", icon_path);
    b_tabs_set_tabId_key_val(tabId,     "title", title    );

    try {
        chrome.pageAction.setIcon ( { tabId ,  path:icon_path } );
        chrome.pageAction.setTitle( { tabId , title           } );
        chrome.pageAction.show    (   tabId );
    }
    catch(ex) {
        last_parse_error= caller+": "+ ex;
        if( log_this || LOG_MAP.B_LOG2_ERROR) log("%c *** last_parse_error=[%c "+last_parse_error+" ]", lb2, lb0);
    }

    let message =
        {     tabId
            , tab_url          : url
            , status

            , start
            , has_CSP
            , csp_filter
            , cancelreq

            , t_load

            , title
            , icon_path

            , caller           : B_SCRIPT_ID+" "+caller
        };

    chrome.runtime.sendMessage( message ); /* 3/3 UPDATE POPUP ICON AND TITLE */
    /*}}}*/
if( log_this) log_members("TAB #"+tabId, b_tabs.get(tabId), lbH+lf8);
if( log_more) log_members("popup_js message", message, lbH+lf9);
/*{{{
//let icon_url =  chrome.runtime.getURL(icon_path);
//let icon_url = "chrome-extension://dacmekaboflbchiediclenlddhhaghhj/../images/rtabs16_8_g.png"
  let icon_url = "https://lh5.googleusercontent.com/-PYloDT5xI-Q/ULIE0ajx7LI/AAAAAAAAA1Y/Oh528Yh63mE/s32/com.google.Chrome.png";
logXXX("icon_url=["+icon_url+"]");
let lbI  = "background: url('"+icon_url+"') no-repeat;";
log("%c  ", lbI+lbb);
}}}*/

};
/*}}}*/
/*_ b_get_pageAction_title {{{*/

let b_get_pageAction_title = function(tabId, status, url, start, csp_filter, cancelreq, t_load)
{
let log_this = LOG_MAP.B_LOG9_STAGE;

    if(!t_load)
    {
        let lastError_message = b_tabs_get_tabId_key(tabId, "lastError_message");
        t_load
            = b_page3_TOOLS_GET_REPLY_POLL_in_progress() ? "POLLING"
            : lastError_message                          ? lastError_message
            :                                              "?" //SYMBOL_NOT_CHECKED
        ;
    }

    let    t_start     = "RTabs "+((start != "ON") ? "OFF" : "ON");

    let    t_page      = ellipsis(get_url_domain(url), 32);

    let    t_filter    = (csp_filter ? ellipsis(strip_CR_LF(csp_filter),32) : "UNFILTERED");


    let t_cancelreq    = (cancelreq == "ON" ) ? "REQUESTS BLOCKED" : "NOT BLOCKING";

    /* LOG {{{*/
    if(log_this)
    {
        let     csp_filter_effect  = b_tabs_get_tabId_key(tabId, "csp_filter_effect");
        let applied_filter_color
            =  (csp_filter_effect == CSP_FILTER_EFFECT3_RULES_REMOVED   ) ? 3
            :  (csp_filter_effect == CSP_FILTER_EFFECT4_RULES_CUSTOMIZED) ? 4
            :  (csp_filter_effect == CSP_FILTER_EFFECT5_RULES_RELAXED   ) ? 5
            :                                                               0
        ;

        let t_state_color
            =      t_load.startsWith(TOOLS1_OFF                 ) ? 1
            :      t_load.startsWith(TOOLS2_WAITING             ) ? 2
            :      t_load.startsWith(TOOLS3_NEED_RELAXED_CSP    ) ? 3
            :      t_load.startsWith(TOOLS4_DEPLOYED            ) ? 4
            :      t_load.startsWith(TOOLS5_UNLOADED            ) ? 5
            :      t_load.startsWith(TOOLS0_CHECKING            ) ? 6
            :      t_load.startsWith("POLLING"                  ) ? 7
            :                                                       8
        ;

        let b_TOOLS_QUERY_called_once   = b_tabs_get_tabId_key(tabId, "b_TOOLS_QUERY_called_once", false);
        let t_status
            = status                    ? status
            : b_TOOLS_QUERY_called_once ? SYMBOL_CHECK_MARK
            :                             "?"
        ;
        let status_color = STATUS_COLORS[status] || 9;

        let args=[""];
        args[0]  = "";
        args[0] += mPadStart("%c"+SYN+" TAB"       + tabId      ,  3); args.push(lbb+lbH + lf7);
        args[0] += mPadEnd  ("%c"                  + t_page     , 32); args.push(    lbH + lf3);

        args[0] += mPadStart("%c"                  + t_start    , 12); args.push(    lbL + lf1);
        args[0] += mPadEnd  ("%c"                  + t_filter   , 16); args.push(    lbC + lfX[applied_filter_color]);
        args[0] += mPadEnd  ("%c"                  + t_cancelreq, 16); args.push(    lbR + lfX[(cancelreq == "ON") ? 2 : 8]);

        args[0] += mPadStart("%c"+SYMBOL_ASSIGN+" "+ t_load     , 24); args.push(    lbL + lfX[       t_state_color]);
        args[0] += mPadEnd  ("%c"+SYMBOL_GEAR+" "  + t_status   , 24); args.push(    lbR + lfX[        status_color]);

        console.log.apply(console, Array.prototype.slice.call(args));
    }
    /*}}}*/

    let title
        =  t_start
        + (t_page      ? ("\n "   + t_page     ) : "")
        + (t_filter    ? ("\n "   + t_filter   ) : "")
        + (t_cancelreq ? ("\n "   + t_cancelreq) : "")
        + (t_load      ? ("\n "   + t_load     ) : "")
    ;
    return title;
};
/*}}}*/

/* l r c p {{{*/
let l = logn;
let r = reload;
let c = log_js.clear;
/* l_paused {{{*/
let l_paused;
let p = function()
{
    let pausable =  { l_paused , id:B_SCRIPT_ID };  /* [pausable] containing current [l_paused value] */

    let      sym = pause( pausable );

    l_paused     = pausable.l_paused;               /* set l_paused to be the [pausable value] */

    log(sym +" .. l_paused=["+l_paused+"]");
};
/*}}}*/
/*}}}*/

})();

