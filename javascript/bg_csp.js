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
/* globals  bg_content                */
/* exported bg_csp                    */
// globals  bg_header                 */
/* globals  bg_message                */
// globals  bg_page                   */
// globals  bg_settings               */
/* globals  bg_store                  */
// globals  bg_tabs                   */

/* eslint-enable  no-redeclare        */

const BG_CSP_SCRIPT_ID  = "bg_csp";
const BG_CSP_SCRIPT_TAG =  BG_CSP_SCRIPT_ID +" (230705:02h:17)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
let bg_csp  = (function() {
"use strict";

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ CSP FILTERS                                       B_LOG4_CSP B_LOG8_STORE │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
:e javascript/bg_content.js
"● javascript/bg_csp.js
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
/*_ bg_content {{{*/
let b_content_scripts_get_inject_time;
let b_content_scripts_get_tools_deployed;
let b_content_scripts_get_tools_load_time;
let b_content_scripts_loaded;
let b_content_scripts_loaded_parse_message;
let b_content_scripts_loaded_update;
/*}}}*/
//______________ bg_csp
//______________ bg_header
/*_ bg_message {{{*/
let b_runtime_onMessage_addListener;
let b_runtime_onMessage_CB;
let b_runtime_onMessage_CB_tab;
let b_runtime_onMessage_CB_TAB_start;
let b_runtime_onMessage_CB_TAB_stop;
let b_runtime_onMessage_CB_TAB_csp_filter;
let b_runtime_onMessage_CB_options_js_csp_filter;
let b_runtime_onMessage_CB_query;
let b_runtime_onMessage_CB_reply;
let b_runtime_onMessage_CB_set_log_map;
/*}}}*/
//______________ bg_page
//______________ bg_settings
/*_ bg_store {{{*/
let bg_store_DEL_url_settings;
let bg_store_GET_url_domain;
let bg_store_GET_url_key;
let bg_store_LOAD_items;
let bg_store_SAVE_items;
let bg_store_SET_url_settings;

/*}}}*/
//______________ bg_tabs
/* bg_csp_import {{{*/
let bg_csp_import = function()
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
    DOM_LOAD_ID                           = background_js.DOM_LOAD_ID;
    DOM_TOOLS_JS_ID                       = background_js.DOM_TOOLS_JS_ID;
    LOG_MAP                               = background_js.LOG_MAP;
    MANIFEST_VERSION                      = background_js.MANIFEST_VERSION;

    b_callback_args_delay_caller          = background_js.b_callback_args_delay_caller;
    b_check_manifest                      = background_js.b_check_manifest;
    b_content_scripts_get_tools_deployed  = background_js.b_content_scripts_get_tools_deployed;
    b_content_scripts_loaded              = background_js.b_content_scripts_loaded;
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
    /*_ bg_content {{{*/
    b_content_scripts_get_inject_time       = bg_content.b_content_scripts_get_inject_time;
    b_content_scripts_get_tools_deployed    = bg_content.b_content_scripts_get_tools_deployed;
    b_content_scripts_get_tools_load_time   = bg_content.b_content_scripts_get_tools_load_time;
    b_content_scripts_loaded                = bg_content.b_content_scripts_loaded;
    b_content_scripts_loaded_parse_message  = bg_content.b_content_scripts_loaded_parse_message;
    b_content_scripts_loaded_update         = bg_content.b_content_scripts_loaded_update;
    /*}}}*/
    //___________ bg_csp
    //___________ bg_header
    /*_ bg_message {{{*/
    b_runtime_onMessage_addListener              = bg_message.b_runtime_onMessage_addListener;
    b_runtime_onMessage_CB                       = bg_message.b_runtime_onMessage_CB;
    b_runtime_onMessage_CB_tab                   = bg_message.b_runtime_onMessage_CB_tab;
    b_runtime_onMessage_CB_TAB_start             = bg_message.b_runtime_onMessage_CB_TAB_start;
    b_runtime_onMessage_CB_TAB_stop              = bg_message.b_runtime_onMessage_CB_TAB_stop;
    b_runtime_onMessage_CB_TAB_csp_filter        = bg_message.b_runtime_onMessage_CB_TAB_csp_filter;
    b_runtime_onMessage_CB_options_js_csp_filter = bg_message.b_runtime_onMessage_CB_options_js_csp_filter;
    b_runtime_onMessage_CB_query                 = bg_message.b_runtime_onMessage_CB_query;
    b_runtime_onMessage_CB_reply                 = bg_message.b_runtime_onMessage_CB_reply;
    b_runtime_onMessage_CB_set_log_map           = bg_message.b_runtime_onMessage_CB_set_log_map;
    /*}}}*/
    //___________ bg_page
    //___________ bg_settings
    /*_ bg_store {{{*/
    bg_store_DEL_url_settings = bg_store.bg_store_DEL_url_settings;
    bg_store_GET_url_domain   = bg_store.bg_store_GET_url_domain;
    bg_store_GET_url_key      = bg_store.bg_store_GET_url_key;
    bg_store_LOAD_items       = bg_store.bg_store_LOAD_items;
    bg_store_SAVE_items       = bg_store.bg_store_SAVE_items;
    bg_store_SET_url_settings = bg_store.bg_store_SET_url_settings;

    /*}}}*/
    //___________ bg_tabs
//................._import    log_js    background_js    bg_content    bg_csp    bg_header    bg_message    bg_page    bg_settings    bg_store    bg_tabs
log("%c      bg_csp_import %c log_js %c background_js %c bg_content %c "+"●●● %c _________ %c bg_message %c _______ %c ___________ %c bg_store %c _______ "
    ,lbH+lb3              ,lf0      ,lf1             ,lf2          ,lbH+lf3  ,lf4         ,lf5          ,lf6       ,lf7           ,lf8        ,lf9         );
};
/*}}}*/
/* eslint-enable no-unused-vars */
    setTimeout(bg_csp_import,0);
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
+ FILTER_HELP
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
+ FILTER_HELP
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
+ FILTER_HELP
;
/*}}}*/
const FILTER6_NONE_DEFAULT/*{{{*/
= "# NULL FILTER - Respecting all sites CSP directives\n"
+ "# * The extension may not work on some protected sites\n"
+ "\n"
+ FILTER_HELP
;
/*}}}*/
/*}}}*/
/* FILTER CACHE {{{*/
let FILTER_RULES_CACHE = {
//    FILTER3_REMOVE : FILTER3_REMOVE_DEFAULT
//  , FILTER4_CUSTOM : FILTER4_CUSTOM_DEFAULT
//  , FILTER5_RELAX  : FILTER5_RELAX_DEFAULT
//  , FILTER6_NONE   : FILTER6_NONE_DEFAULT
};

/*}}}*/
/*}}}*/

/*➔ bg_csp_load_filter                         .. B_LOG4_CSP {{{*/
let bg_csp_load_filter = function(csp_filter)
{
/*{{{*/
let   caller = "bg_csp_load_filter("+csp_filter+")";
let log_this = LOG_MAP.B_LOG4_CSP;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log_sep_top(caller, "LOG8_TAG");
/*}}}*/
    let cache_length = Object.keys(FILTER_RULES_CACHE).length;
if( log_more) log_object(caller+": FILTER_RULES_CACHE(x"+cache_length+")", FILTER_RULES_CACHE, lb4);

    let csp_filter_rules = FILTER_RULES_CACHE[csp_filter];
    if( csp_filter_rules )
    {

if( log_this) log("%c"+SD8+"%c "+caller+": %c csp_filter_rules.length=["+csp_filter_rules.length+"] %c FROM CACHE"
                  ,lbB+lf8 ,lbL+lf4       ,lbC+lf8                                                 ,lbR+lf8       );
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
let log_this = LOG_MAP.B_LOG4_CSP || LOG_MAP.B_LOG8_STORE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log_sep_top(caller, "LOG8_TAG");
/*}}}*/

    let csp_filter_rules
        = (csp_filter == FILTER3_REMOVE) ? { FILTER3_REMOVE : FILTER3_REMOVE_DEFAULT }
        : (csp_filter == FILTER4_CUSTOM) ? { FILTER4_CUSTOM : FILTER4_CUSTOM_DEFAULT }
        : (csp_filter == FILTER5_RELAX ) ? { FILTER5_RELAX  : FILTER5_RELAX_DEFAULT  }
        : (csp_filter == FILTER6_NONE  ) ? { FILTER6_NONE   : FILTER6_NONE_DEFAULT   }
        :                                  null
    ;
    if( csp_filter_rules )
    {
if( log_this) log_object(caller+"( "+csp_filter+" )", { csp_filter_rules , callers: LF+get_callers() }, lf4);
if( log_more) log("%c ...response_handler=["+typeof response_handler+"])", lf8);

        chrome.storage.sync.get(
            csp_filter_rules
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
let   caller = "bg_csp_save_filter_to_store( "+csp_filter+" )";
let log_this = LOG_MAP.B_LOG4_CSP || LOG_MAP.B_LOG8_STORE;
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
        response_handler( csp_json_default );

        return "LOG8_TAG";
    }
    /*}}}*/
    /* PARSE EDITED CSP FILTER RULES {{{*/
    let parsed_text
        =               csp_json
        ? trim_space_lf(csp_json)
        :               csp_json_default
    ;

    let csp_filter_rules = csp_parse_RULES( parsed_text );

    /*}}}*/
    /* PARSE ERROR {{{*/
    if(csp_filter_rules == null) {
        response_handler("FAILURE:\n"+last_parse_error);

        return "LOG2_TAG";
    }
    /*}}}*/
    /* SAVE PARSED FILTERS .. (NONE RELAX CUSTOM REMOVE) {{{*/
if( log_this) log("%c...csp_filter_rules.length=["+csp_filter_rules.length+"]", lf8);

    let csp_rules_item
        = (csp_filter == FILTER3_REMOVE) ? { FILTER3_REMOVE : parsed_text }
        : (csp_filter == FILTER4_CUSTOM) ? { FILTER4_CUSTOM : parsed_text }
        : (csp_filter == FILTER5_RELAX ) ? { FILTER5_RELAX  : parsed_text }
        : (csp_filter == FILTER6_NONE  ) ? { FILTER6_NONE   : parsed_text }
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
    else               response_handler(       parsed_text);
    /*}}}*/
    return "LOG7_TAG";
};
/*}}}*/
/*➔ bg_csp_load_filter_rules                   .. B_LOG4_CSP .. B_LOG8_STORE {{{*/
let bg_csp_load_filter_rules = function(csp_filter,csp_rules,response_handler)
{
/*{{{*/
let   caller = "bg_csp_load_filter_rules";
let log_this = LOG_MAP.B_LOG4_CSP || LOG_MAP.B_LOG8_STORE;
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
    /* [csp_filter_rules] .. [FILTER_RULES_CACHE] {{{*/
    let csp_filter_rules = csp_parse_RULES( csp_rules );

    FILTER_RULES_CACHE[csp_filter] = csp_filter_rules;

    let cache_length = Object.keys(FILTER_RULES_CACHE).length;
if( log_more) log_object(caller+": FILTER_RULES_CACHE(x"+cache_length+")", FILTER_RULES_CACHE, lf4, !log_more);

if( log_this && (csp_filter_rules != null)) log("%c ...csp_filter_rules.length=["+csp_filter_rules.length+"]", lf4);
    /*}}}*/
    /* call [response_handler] {{{*/
    if(response_handler)
    {
if( log_this) log("%c ..."+caller+": ...calling response_handler({ csp_filter: "+csp_filter+" , value: "+csp_rules+" }):", lf4);

        let success
            = csp_rules
            ||     (csp_filter == FILTER6_NONE)
        ;

        if( success ) response_handler({ csp_filter , value: csp_rules });
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
/*➔ bg_csp_pick_filter_rules {{{*/
let bg_csp_pick_filter_rules = function(csp_filter)
{
    return  FILTER_RULES_CACHE[ csp_filter ];
};
/*}}}*/

/*_ csp_clear_FILTER_RULES_CACHE            .. B_LOG4_CSP {{{*/
let csp_clear_FILTER_RULES_CACHE = function()
{
/*{{{*/
let   caller = "csp_clear_FILTER_RULES_CACHE";
let log_this = LOG_MAP.B_LOG4_CSP;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;
/*}}}*/
    let cache_length = Object.keys(FILTER_RULES_CACHE).length;
if( log_more) log_object(caller+": FILTER_RULES_CACHE(x"+cache_length+")", FILTER_RULES_CACHE, lf8);

    if( cache_length )
    {
if( log_this) log("%c "+caller+" %c DROPPING "+ cache_length +" CACHED FILTERS", lbL+lf8, lbR+lf8);

        FILTER_RULES_CACHE = {};
    }
    else {
if( log_this) log("%c "+caller+" %c CACHE IS ALREADY EMPTY", lbL+lf8, lbR+lf8);

    }
};
/*}}}*/
/*_ csp_parse_RULES                         .. B_LOG4_CSP {{{*/
let csp_parse_RULES = function(rules)
{
/*{{{*/
let   caller = "csp_parse_RULES";
let log_this = LOG_MAP.B_LOG4_CSP;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log("%c "+caller, lf3);
if( log_more) log_object("",rules, lf3, false);

    if(typeof rules !== "string") rules = "";

    last_parse_error = caller;
    let result
        = csp_parse_REGEX(
            csp_parse_VALIDATE(
                csp_parse_JSON( rules )
            )
        );

if( log_this) log_object(caller+" ...return", {result}, lf3, !log_more);
    return result;
};
/*}}}*/
/*_ csp_parse_JSON                          .. B_LOG4_CSP {{{*/
let csp_parse_JSON = function(rules_json)
{
/*{{{*/
let   caller = "csp_parse_JSON";
let log_this = LOG_MAP.B_LOG4_CSP;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log("%c "+caller+"(rules_json.length = "+rules_json.length+")", lf5);

    /* JSON.parse {{{*/
    rules_json = csp_parse_BLANKS( rules_json );
    if(rules_json === "") return [];

    let   result = null;
    try { result = JSON.parse(rules_json); } catch (_) {}

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
let log_this = LOG_MAP.B_LOG4_CSP;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log("%c "+caller+"(s.length = "+s.length+")", lf9);
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
let last_parse_error;
let csp_parse_REGEX = function(newRules)
{
/*{{{*/
let   caller = "csp_parse_REGEX";
let log_this = LOG_MAP.B_LOG4_CSP;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log("%c "+caller+"(newRules.length = "+(newRules ? newRules.length:0)+")", lf9);

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
let log_this = LOG_MAP.B_LOG4_CSP;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
if( log_more) log("%c "+caller+"(rules.length = "+(rules ? rules.length:0)+")", lf7);

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

        , bg_csp_load_filter
        , bg_csp_load_filter_from_store
        , bg_csp_load_filter_rules
        , bg_csp_pick_filter_rules
        , bg_csp_save_filter_to_store
    };
/*}}}*/
}());