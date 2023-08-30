// ┌───────────────────────────────────────────────────────────────────────────┐
// │ bg_csp.js ............................................. BACKGROUND SCRIPT │
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
/* exported bg_csp                    */
/* globals  bg_store                  */

/* eslint-enable  no-redeclare        */

const BG_CSP_SCRIPT_ID  = "bg_csp";
const BG_CSP_SCRIPT_TAG =  BG_CSP_SCRIPT_ID +" (230823:17h:06)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
// ┌───────────────────────────────────────────────────────────────────────────┐
// │ CSP FILTERS                                       B_LOG4_CSP B_LOG8_STORE │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
:e javascript/bg_content.js
"● javascript/bg_csp.js
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
let bg_csp  = (function() {
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

let   get_callers
    , log
    , log_json
    , log_object
    , log_sep_bot
    , log_sep_top
    , li
;

/*}}}*/
/*_ background_js {{{*/
let LOG_MAP;

/*}}}*/
//_______________ bg_content
//_______________ bg_csp
//_______________ bg_event
//_______________ bg_header
//_______________ bg_message
//_______________ bg_page
//_______________ bg_settings
/*_ bg_store {{{*/
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

    li                      = log_js.log_modulename_key_val;
    get_callers             = log_js.get_callers;           li("log_js","get_callers",get_callers);
    log                     = log_js.log;                   li("log_js","log",log);
    log_json                = log_js.log_json;              li("log_js","log_json",log_json);
    log_object              = log_js.log_object;            li("log_js","log_object",log_object);
    log_sep_bot             = log_js.log_sep_bot;           li("log_js","log_sep_bot",log_sep_bot);
    log_sep_top             = log_js.log_sep_top;           li("log_js","log_sep_top",log_sep_top);
    /*}}}*/
    modules.push( background_js ); /*{{{*/
    LOG_MAP                 = background_js.LOG_MAP;        li("background_js","LOG_MAP",LOG_MAP);

    /*}}}*/
    //_______________________ bg_content
    //_______________________ bg_csp
    //_______________________ bg_event
    //_______________________ bg_header
    //_______________________ bg_message
    //_______________________ bg_page
    //_______________________ bg_settings
    modules.push( bg_store      ); /*{{{*/
    bg_store_SAVE_items     = bg_store.bg_store_SAVE_items; li("bg_store","bg_store_SAVE_items",bg_store_SAVE_items);

    /*}}}*/
    //_______________________ bg_tabs
    log_js.log_import(bg_csp       , modules);
};
/*}}}*/
    setTimeout(_import,0);
/*}}}*/
/* LOGGING {{{*/
let BG_CSP_JS_LOG  = false;
/*_ logging {{{*/
let logging = function(state)
{
    if(state != undefined) {            BG_CSP_JS_LOG = state;
        if(state) bg_store_SAVE_items({ BG_CSP_JS_LOG           });
        else      bg_store_SAVE_items({ BG_CSP_JS_LOG: undefined});
    } return                            BG_CSP_JS_LOG;
};
/*}}}*/
/*_ log_this_get {{{*/
let log_this_get = function(_caller)
{
    switch(_caller) {
    case "bg_csp_load_filter"            : return BG_CSP_JS_LOG || LOG_MAP.B_LOG4_CSP;
    case "bg_csp_load_filter_from_store" : return BG_CSP_JS_LOG || LOG_MAP.B_LOG4_CSP || LOG_MAP.B_LOG8_STORE;
    case "bg_csp_load_filter_rules"      : return BG_CSP_JS_LOG || LOG_MAP.B_LOG4_CSP;
    case "bg_csp_get_filter_rules"       : return BG_CSP_JS_LOG || LOG_MAP.B_LOG4_CSP;
    case "bg_csp_save_filter_to_store"   : return BG_CSP_JS_LOG || LOG_MAP.B_LOG4_CSP || LOG_MAP.B_LOG8_STORE;
    case "csp_clear_FILTER_RULES_CACHE"  : return BG_CSP_JS_LOG || LOG_MAP.B_LOG4_CSP;
    case "csp_parse_BLANKS"              : return BG_CSP_JS_LOG || LOG_MAP.B_LOG4_CSP;
    case "csp_parse_JSON"                : return BG_CSP_JS_LOG || LOG_MAP.B_LOG4_CSP;
    case "csp_parse_REGEX"               : return BG_CSP_JS_LOG || LOG_MAP.B_LOG4_CSP;
    case "csp_parse_RULES"               : return BG_CSP_JS_LOG || LOG_MAP.B_LOG4_CSP;
    case "csp_parse_VALIDATE"            : return BG_CSP_JS_LOG || LOG_MAP.B_LOG4_CSP;

    }

/*{{{*/
    log("%c"+BG_CSP_SCRIPT_ID     +"%c log_this_get: missing switch %c"+_caller
        ,lbH+lb2                   ,lbL+lf2                        ,lbR+lf4    );

    return false;
/*}}}*/
};
/*}}}*/
/*}}}*/
/* FILTER ● NAME ● APPLIED ● EFFECT ● STRINGS ● CACHE {{{*/
/* FILTER NAME {{{*/
const FILTER3_REMOVE       = "FILTER3_REMOVE";
const FILTER4_CUSTOM       = "FILTER4_CUSTOM";
const FILTER5_RELAX        = "FILTER5_RELAX";
const FILTER6_NONE         = "FILTER6_NONE";

/*}}}*/
/* FILTER APPLIED {{{*/
const FILTER_APPLIED1_FINE            = "CSP FINE";
const FILTER_APPLIED3_REMOVED         = "CSP REMOVE";
const FILTER_APPLIED4_CUSTOM          = "CSP CUSTOM";
const FILTER_APPLIED5_RELAXED         = "CSP RELAX" ;
const FILTER_APPLIED2_NO_RULES        = "CSP NO RULES";
const FILTER_APPLIED8_NO_CSP          = "CSP NONE";

/*}}}*/
/* FILTER EFFECT {{{*/
const FILTER_EFFECT2_RULES_MISSING    = "HEADER RECEIVED BEFORE FILTER RULES HAVE BEEN LOADED";
const FILTER_EFFECT3_RULES_REMOVED    = "CSP REMOVED";
const FILTER_EFFECT4_RULES_CUSTOMIZED = "CSP CUSTOMIZED";
const FILTER_EFFECT5_RULES_RELAXED    = "CSP RELAXED";

/*}}}*/
/* FILTER STRINGS {{{*/
const FILTER_HELP/*{{{*/
=`
# ---------------------------------------------------------
# On some tightly protected sites, the extension may have
# to relax some \"Content Security Policy\" directives
# (JSON RegexP x3)
# [
#  [ \"Source\", [[\"Resource\", \"Replacement\"] , [\"Resource\",\"Replacement\"]] ]
# ,[ \"Source\", [[\"Resource\", \"Replacement\"] , [\"Resource\",\"Replacement\"]] ]
# ]
# ---------------------------------------------------------`
;
/*}}}*/
const FILTER3_REMOVE_DEFAULT /*{{{*/
=`
# REMOVE FILTER - Discarding all sites CSP directives
# * The extension will work on all sites
# * But! their security policy will be disabled.

[
 [ \".*://.*/.*\" , [ [\".*\", \"\"] ] ]
]`
+ FILTER_HELP
;
/*}}}*/
//const FILTER4_CUSTOM_DEFAULT /*{{{*/
//=`
//# PER-SITE CONFIG - Relaxing PER-SITE-CSP to accept extension required \"data:\" scheme
//# * The extension can work on this protected site
//
//# AN EXAMPLE OF RELAXED STYLE INJECTION ON github.com :
//[
// [ \"https://github.com\"
// ,[
//   [ \"style-src [^;]*\"
//   , \"style-src data: 'unsafe-inline' https://assets-cdn.github.com\"
//   ]
//  ]
// ]
//]`
//+ FILTER_HELP
//;
///*}}}*/
const FILTER4_CUSTOM_DEFAULT /*{{{*/
=`
# PER-SITE CONFIG - Relaxing PER-SITE-CSP to accept extension required \"data:\" scheme
# * The extension can work on this protected site

# AN EXAMPLE OF RELAXED STYLE INJECTION ON github.com and stackoverflow.com:
[
 ["https://github.com"         ,[[ "style-src [^;]*", "style-src data: 'unsafe-inline' https://assets-cdn.github.com"]]]
,["https://github.com/ivanwfr" ,[[".*", ""]]]
,["https://stackoverflow.com"  ,[
     [           "style-src [^;]*" , "style-src data: 'unsafe-inline'" ]
    ,[ "upgrade-insecure-requests" , "UPGRADE-INSECURE-REQUESTS"       ]
    ,[     "frame-ancestors [^;]*" , ""                                ]
     ]
 ]
]`
+ FILTER_HELP
;
/*}}}*/
const FILTER5_RELAX_DEFAULT /*{{{*/
=`
# DEFAULT FILTER - Relaxing CSP to accept extension required \"data:\" scheme
# The extension will work on all sites
# with some relaxed security policy directives
# allowing this extension to access visited pages content.

[
 [ \".*://.*/.*\"
  , [ [ \"'none'\" , \"\" ]
   ,  [ \"(default-src) +(?:'unsafe-inline' *)?([^;]*);?\", \"$1 data: 'unsafe-inline' $2;\" ]
   ,  [  \"(script-src) +(?:'unsafe-inline' *)?([^;]*);?\", \"$1 data: 'unsafe-inline' $2;\" ]
   ,  [   \"(style-src) +(?:'unsafe-inline' *)?([^;]*);?\", \"$1 data: 'unsafe-inline' $2;\" ]
  ]
 ]
]`
+ FILTER_HELP
;
/*}}}*/
const FILTER6_NONE_DEFAULT /*{{{*/
=`
# NULL FILTER - Respecting all sites CSP directives
# * The extension may not work on some protected sites
`
+ FILTER_HELP
;
/*}}}*/
/*}}}*/
/*    FILTER_JSON_CACHE ● FILTER_RULES_CACHE {{{*/
const FILTER_JSON_CACHE = {
      [FILTER3_REMOVE] : FILTER3_REMOVE_DEFAULT
    , [FILTER4_CUSTOM] : FILTER4_CUSTOM_DEFAULT
    , [FILTER5_RELAX ] : FILTER5_RELAX_DEFAULT
    , [FILTER6_NONE  ] : FILTER6_NONE_DEFAULT
};

let FILTER_RULES_CACHE = {};
/*}}}*/
/*}}}*/

/*➔ bg_csp_load_filter                         .. B_LOG4_CSP {{{*/
let bg_csp_load_filter = function(csp_filter)
{
/*{{{*/
let   caller = "bg_csp_load_filter";
let log_this = log_this_get(caller);
if( log_this) caller += "("+csp_filter+")";
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log_sep_top(caller, "LOG8_TAG");
/*}}}*/
    let rules_cache_length = Object.keys(FILTER_RULES_CACHE).length;
if( log_more) log_object(caller+": FILTER_RULES_CACHE(x"+rules_cache_length+")", FILTER_RULES_CACHE, lb4);

    let filter_rules = FILTER_RULES_CACHE[csp_filter];
    if( filter_rules )
    {
if( log_this) log("%c"+SD8+"%c "+caller+": %c "+(typeof filter_rules)+" filter_rules.length=["+filter_rules.length+"] %c FROM CACHE"
                  ,lbB+lf8 ,lbL+lf4       ,lbC+lf8                                                                   ,lbR+lf8       );

    }
    else {
if( log_this) log("%c"+SD8+"%c "+caller+": %c NOT CACHED YET: %c SAVING csp_filter=["+csp_filter+"]"
                  ,lbB+lf8 ,lbL+lf4       ,lbC+lf8           ,lbR+lf8                               );

        bg_csp_load_filter_from_store(csp_filter, null);
    }

/*{{{*/
if( log_more) log_sep_bot(caller, "LOG8_TAG");
/*}}}*/
};
/*}}}*/
/*➔ bg_csp_load_filter_from_store              .. B_LOG4_CSP .. B_LOG8_STORE {{{*/
let bg_csp_load_filter_from_store = function(csp_filter, response_handler=null)
{
/*{{{*/
let   caller = "bg_csp_load_filter_from_store";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log_sep_top(caller, "LOG8_TAG");
/*}}}*/

    if(   (csp_filter == FILTER3_REMOVE)
       || (csp_filter == FILTER4_CUSTOM)
       || (csp_filter == FILTER5_RELAX )
       || (csp_filter == FILTER6_NONE  )
      ) {
if( log_this) log_object(caller+"( "+csp_filter+" )", { callers: LF+get_callers() }, lf4);
if( log_more) log("%c ...response_handler=["+typeof response_handler+"])", lf8);

        chrome.storage.sync.get(
                                csp_filter
                                , function(items) { bg_csp_load_filter_rules(csp_filter, items[csp_filter], response_handler); }
                               );
    }

/*{{{*/
if( log_more) log_sep_bot(caller, "LOG8_TAG");
/*}}}*/
};
/*}}}*/
/*➔ bg_csp_save_filter_to_store                .. B_LOG4_CSP .. B_LOG8_STORE {{{*/
let bg_csp_save_filter_to_store = function(csp_filter, csp_json, csp_json_default, response_handler)
{
/*{{{*/
let   caller = "bg_csp_save_filter_to_store";
let log_this = log_this_get(caller);
if( log_this) caller += "( "+csp_filter+" )";
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_this) log("%c "+caller, lbH+lf4);
/*}}}*/
    /* FALLBACK TO DEFAULT FILTER RULES {{{*/
    if( !csp_json )
    {
        log("%c "+caller+"%c FALLBACK TO DEFAULT FILTER RULES"
            ,lbb+lbL+lf4 ,lbb+lbR+lf8);

if( log_this) log_object("chrome.storage.sync.remove("+csp_filter+")", { csp_filter , callers: LF+get_callers() }, lb8);
        chrome.storage.sync.remove( csp_filter );

if( log_this) log("%c ...calling response_handler:", lf8);
        response_handler( trim_space_lf(csp_json_default) );

        return "LOG8_TAG";
    }
    /*}}}*/
    /* PARSE EDITED CSP FILTER RULES {{{*/
    let rules_JSON
        =               csp_json
        ? trim_space_lf(csp_json        )
        : trim_space_lf(csp_json_default)
    ;

    FILTER_RULES_CACHE[csp_filter]
        = csp_parse_RULES( rules_JSON );

    /*}}}*/
    /* PARSE ERROR {{{*/
    if(FILTER_RULES_CACHE[csp_filter] == null) {
        response_handler("FAILURE:\n"+last_parse_error);

        return "LOG2_TAG";
    }
    /*}}}*/
    /* SAVE PARSED FILTERS .. (NONE RELAX CUSTOM REMOVE) {{{*/
if( log_this) log("%c...FILTER_RULES_CACHE["+csp_filter+"].length=["+FILTER_RULES_CACHE[csp_filter].length+"]", lf8);

    let csp_rules_item
        = (csp_filter == FILTER3_REMOVE) ? { FILTER3_REMOVE : rules_JSON }
        : (csp_filter == FILTER4_CUSTOM) ? { FILTER4_CUSTOM : rules_JSON }
        : (csp_filter == FILTER5_RELAX ) ? { FILTER5_RELAX  : rules_JSON }
        : (csp_filter == FILTER6_NONE  ) ? { FILTER6_NONE   : rules_JSON }
        :                                    null
    ;
    if(csp_rules_item) {
if( log_more) log("%c...STORAGE SET CSP FILTER: "+log_json(csp_rules_item), lf8);

        // ┌──────────────────────────────────────┐
        // │ TAB CSP RULES PERSISTENCE            │
        // └──────────────────────────────────────┘
        bg_store_SAVE_items(csp_rules_item, log_js.get_callers_bot());

        csp_clear_FILTER_RULES_CACHE(); /* force reload on next use */
    }
    /*}}}*/
    /* REPLY WITH [SUCCESS parsed json] OR [default filter] {{{*/
if( log_this) log("%c ...calling response_handler:", lf8);

    if(csp_rules_item) response_handler("SUCCESS: "+caller);
    else               response_handler(        rules_JSON);
    /*}}}*/
    return "LOG7_TAG";
};
/*}}}*/
/*➔ bg_csp_load_filter_rules                   .. B_LOG4_CSP .. B_LOG8_STORE {{{*/
let bg_csp_load_filter_rules = function(csp_filter,rules_JSON,response_handler)
{
/*{{{*/
let   caller = "bg_csp_load_filter_rules";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

    let log_tag
        = (csp_filter == FILTER3_REMOVE) ? "LOG3_TAG"
        : (csp_filter == FILTER4_CUSTOM) ? "LOG4_TAG"
        : (csp_filter == FILTER5_RELAX ) ? "LOG5_TAG"
        : (csp_filter == FILTER6_NONE  ) ? "LOG6_TAG"
        :                                  "LOG0_TAG"
    ;

if(      log_more) log_sep_top(caller+" " +csp_filter    , log_tag);
else if( log_this) log("%c "+caller+": %c"+csp_filter+" ", lbL+lf4, lbR+lf4);

/*}}}*/
    /* FILTER_RULES_CACHE[csp_filter] {{{*/
    if(!rules_JSON)
        rules_JSON
            = trim_space_lf(FILTER_JSON_CACHE[csp_filter]);

    FILTER_RULES_CACHE[csp_filter]
        = csp_parse_RULES( rules_JSON );

    let rules_cache_length = Object.keys(FILTER_RULES_CACHE).length;
if( log_more) log_object(caller+": FILTER_RULES_CACHE(x"+rules_cache_length+")", FILTER_RULES_CACHE, lf4, !log_more);

if( log_this && (FILTER_RULES_CACHE[csp_filter] != null)) log("%c ..."+(typeof FILTER_RULES_CACHE[csp_filter])+" FILTER_RULES_CACHE[csp_filter].length=["+FILTER_RULES_CACHE[csp_filter].length+"]", lf4);
    /*}}}*/
    /* call [response_handler] {{{*/
    if(response_handler)
    {
if( log_this) log("%c ..."+caller+": ...calling response_handler({ csp_filter: "+csp_filter+" , value: "+FILTER_RULES_CACHE[csp_filter]+" }):", lf4);

        let success
            =  FILTER_RULES_CACHE[csp_filter]
            ||                   (csp_filter == FILTER6_NONE)
        ;

        if( success ) response_handler({ csp_filter , value: rules_JSON });
        else          response_handler("FAILURE:\n"+last_parse_error);
    }
    else {
if( log_this) log("%c ..."+caller+": *** NO response_handler TO CALL",lf8);

    }
    /*}}}*/
/*{{{*/
if( log_more) log_sep_bot(caller, log_tag);
/*}}}*/
};
/*}}}*/
/*➔ bg_csp_get_filter_rules {{{*/
let bg_csp_get_filter_rules = function(csp_filter)
{
    if(!FILTER_RULES_CACHE[csp_filter])
        FILTER_RULES_CACHE[csp_filter]
            = csp_parse_RULES(FILTER_JSON_CACHE[ csp_filter ]);

    return FILTER_RULES_CACHE[csp_filter];
};
/*}}}*/

/*_ csp_clear_FILTER_RULES_CACHE            .. B_LOG4_CSP {{{*/
let csp_clear_FILTER_RULES_CACHE = function()
{
/*{{{*/
let   caller = "csp_clear_FILTER_RULES_CACHE";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;
/*}}}*/
    let rules_cache_length = Object.keys(FILTER_RULES_CACHE).length;
if( log_more) log_object(caller+": FILTER_RULES_CACHE(x"+rules_cache_length+")", FILTER_RULES_CACHE, lf8);

    if( rules_cache_length )
    {
if( log_this) log("%c "+caller+" %c DROPPING "+ rules_cache_length +" CACHED FILTERS", lbL+lf8, lbR+lf8);

        FILTER_RULES_CACHE = {};
    }
    else {
if( log_this) log("%c "+caller+" %c CACHE IS ALREADY EMPTY", lbL+lf8, lbR+lf8);

    }
};
/*}}}*/
/*_ csp_parse_RULES                         .. B_LOG4_CSP {{{*/
let csp_parse_RULES = function(rules_JSON)
{
/*{{{*/
let   caller = "csp_parse_RULES";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log("%c "+caller, lf3);
if( log_more) log_object(caller+"("+(typeof rules_JSON)+" rules_JSON)",rules_JSON, lf3, false);

//  if(typeof rules_JSON !== "string") rules_JSON = "";

    last_parse_error = caller;
    let result
        = csp_parse_REGEX(
            csp_parse_VALIDATE(
                csp_parse_JSON( rules_JSON )
            )
        );

if( log_this) log_object(caller+" ...return", {result}, lf3, !log_more);
    return result;
};
/*}}}*/
/*_ csp_parse_JSON                          .. B_LOG4_CSP {{{*/
let csp_parse_JSON = function(rules_JSON)
{
/*{{{*/
let   caller = "csp_parse_JSON";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log("%c "+caller+"("+(typeof rules_JSON)+" rules_JSON.length = "+rules_JSON.length+")", lf5);

    /* JSON.parse {{{*/
    rules_JSON = csp_parse_BLANKS( rules_JSON );
    if(rules_JSON === "") return [];

    let   result = null;
    try { result = JSON.parse(rules_JSON); } catch (_) {}

    /*}}}*/
if( log_this) log_object(caller+" ...return", {result}, lf5, !log_more);
    return result;
};
/*}}}*/
/*_ csp_parse_BLANKS                        .. B_LOG4_CSP {{{*/
let csp_parse_BLANKS = function(s)
{
/*{{{*/
let   caller = "csp_parse_BLANKS";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log("%c "+caller+"("+(typeof s)+" s.length = "+s.length+")", lf9);
/*}}}*/
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
if( log_this) log_object(caller+" ...return", {result}, lf9, !log_more);
    return result;
};
/*}}}*/
/*_ csp_parse_REGEX                         .. B_LOG4_CSP {{{*/
/*{{{*/
let last_parse_error;

/*}}}*/
let csp_parse_REGEX = function(newRules)
{
/*{{{*/
let   caller = "csp_parse_REGEX";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log("%c "+caller+"("+(typeof newRules)+" newRules.length = "+(newRules ? newRules.length:0)+")", lf9);

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

    } catch(error) {
        last_parse_error= caller+": "+ error;
if(LOG_MAP.B_LOG2_ERROR) log("%c *** last_parse_error=[%c "+last_parse_error+" ]", lb9, lb2);
    }

if( log_this) log_object(caller+" ...return", {result}, lf9, !log_more);
    return result;
};
/*}}}*/
/*_ csp_parse_VALIDATE                      .. B_LOG4_CSP {{{*/
let csp_parse_VALIDATE = function(rules)
{
/*{{{*/
let   caller = "csp_parse_VALIDATE";
let log_this = log_this_get(caller);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log("%c "+caller+"("+(typeof rules)+" rules.length = "+(rules ? rules.length:0)+")", lf7);

    /* RULES SHOULD BE AN ARRAY {{{*/
    if(!Array.isArray(rules)) {
        last_parse_error= caller+": (!Array.isArray(rules))";
if(LOG_MAP.B_LOG2_ERROR) log("%c *** last_parse_error=[%c "+last_parse_error+" ]", lb7, lb2);
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
if(LOG_MAP.B_LOG2_ERROR) log("%c "+caller+": *** last_parse_error=["+last_parse_error+"]", lb2);
        return null;
    }
if( log_this) log_object(caller+" ...validated return", {rules}, lf7, !log_more);
    return rules;
};
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ UTIL                                                                      │
// └───────────────────────────────────────────────────────────────────────────┘
/*  trim_space_lf {{{*/
let trim_space_lf = function(text)
{
    if(!text) return text;

    while(text.startsWith(" ") || text.startsWith(LF)) text = text.substring(1, text.length  );
    while(text.  endsWith(" ") || text.endsWith  (LF)) text = text.substring(0, text.length-1);

    return text;
};
/*}}}*/

/*➔ EXPORT {{{*/
    return {  name : "bg_csp"
        ,             bg_csp_load_filter
        ,             bg_csp_load_filter_from_store
        ,             bg_csp_load_filter_rules
        ,             bg_csp_get_filter_rules
        ,             bg_csp_save_filter_to_store
        , logging

        , FILTER3_REMOVE
        , FILTER4_CUSTOM
        , FILTER5_RELAX
        , FILTER6_NONE

        , FILTER3_REMOVE_DEFAULT
        , FILTER4_CUSTOM_DEFAULT
        , FILTER5_RELAX_DEFAULT
        , FILTER6_NONE_DEFAULT

        , FILTER_APPLIED1_FINE
        , FILTER_APPLIED3_REMOVED
        , FILTER_APPLIED4_CUSTOM
        , FILTER_APPLIED5_RELAXED
        , FILTER_APPLIED2_NO_RULES
        , FILTER_APPLIED8_NO_CSP

        , FILTER_EFFECT2_RULES_MISSING
        , FILTER_EFFECT3_RULES_REMOVED
        , FILTER_EFFECT4_RULES_CUSTOMIZED
        , FILTER_EFFECT5_RULES_RELAXED
    };
/*}}}*/
}());
