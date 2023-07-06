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
/* globals  bg_content                */
/* globals  bg_csp                    */
// globals  bg_header                 */
/* globals  bg_message                */
/* exported bg_page                   */
// globals  bg_settings               */
/* globals  bg_store                  */
/* globals  bg_tabs                   */

/* eslint-enable  no-redeclare        */

const BG_PAGE_SCRIPT_ID  = "bg_page";
const BG_PAGE_SCRIPT_TAG =  BG_PAGE_SCRIPT_ID +" (230705:02h:17)"; /* eslint-disable-line no-unused-vars */
/*}}}*/
let bg_page  = (function() {
"use strict";

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ PAGE ACTION                                                   B_LOG7_TABS │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_header.js
:e javascript/bg_message.js
"● javascript/bg_page.js
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
/*_ bg_csp {{{*/

let FILTER3_REMOVE;
let FILTER4_CUSTOM;
let FILTER5_RELAX;
let FILTER6_NONE;

let FILTER3_REMOVE_DEFAULT;
let FILTER4_CUSTOM_DEFAULT;
let FILTER5_RELAX_DEFAULT;
let FILTER6_NONE_DEFAULT;

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
let bg_csp_load_filter_from_store;
let bg_csp_load_filter_rules;
let bg_csp_pick_filter_rules;
let bg_csp_save_filter_to_store;

/*}}}*/
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
/*_ bg_page_import {{{*/
let bg_page_import = function()
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
    /*_ bg_csp {{{*/

    FILTER3_REMOVE                   = bg_csp.FILTER3_REMOVE;
    FILTER4_CUSTOM                   = bg_csp.FILTER4_CUSTOM;
    FILTER5_RELAX                    = bg_csp.FILTER5_RELAX;
    FILTER6_NONE                     = bg_csp.FILTER6_NONE;

    FILTER3_REMOVE_DEFAULT           = bg_csp.FILTER3_REMOVE_DEFAULT;
    FILTER4_CUSTOM_DEFAULT           = bg_csp.FILTER4_CUSTOM_DEFAULT;
    FILTER5_RELAX_DEFAULT            = bg_csp.FILTER5_RELAX_DEFAULT;
    FILTER6_NONE_DEFAULT             = bg_csp.FILTER6_NONE_DEFAULT;

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
    bg_csp_load_filter_from_store    = bg_csp.bg_csp_load_filter_from_store;
    bg_csp_load_filter_rules         = bg_csp.bg_csp_load_filter_rules;
    bg_csp_pick_filter_rules         = bg_csp.bg_csp_pick_filter_rules;
    bg_csp_save_filter_to_store      = bg_csp.bg_csp_save_filter_to_store;

    /*}}}*/
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
//................._import    log_js    background_js    bg_content    bg_csp    bg_header    bg_message    bg_page    bg_settings    bg_store    bg_tabs
log("%c     bg_page_import %c log_js %c background_js %c bg_content %c bg_csp %c _________ %c bg_message %c "+"●●●● %c ____________%c bg_store %c bg_tabs "
    ,lbH+lb6              ,lf0      ,lf1             ,lf2          ,lf3      ,lf4         ,lf5          ,lbH+lf6   ,lf7           ,lf8        ,lf9         );
};
/*}}}*/
/* eslint-enable no-unused-vars */
    setTimeout(bg_page_import,0);
/* VIM SIGNS {{{
:so ~/VIM/signs.vim

 :sign place  1 line=42   name=SIGN1 file=C:/LOCAL/DATA/ANDROID/PROJECTS/Chrome_Web_Store/RTabsExtension/javascript/bg_page.js
 :sign place  2 line=348  name=SIGN2 file=C:/LOCAL/DATA/ANDROID/PROJECTS/Chrome_Web_Store/RTabsExtension/javascript/bg_page.js
/"● javascript\/bg_page\.js
/setTimeout(bg_page_import,0);

:SaveSigns
}}}*/
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

/*➔ b_POPUP_pageAction .. update popup .. B_LOG7_TABS {{{*/
let b_POPUP_pageAction = function(tabId,pageAction)
{
/*{{{*/
let   caller = "b_POPUP_pageAction("+pageAction+")";
let log_this = LOG_MAP.B_LOG7_TABS;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

if( log_more) log_sep_top(caller,"LOG7_TAG");
if( log_more) log_object (caller+"(tabId): TAB #"+tabId, bg_tabs_get_tabId(tabId), lbH+lf8);
if( log_more) log_caller();
/*}}}*/
    /* TAB[tabId] .. [url] [status] [start] [csp_filter] ... {{{*/
    let url               = bg_tabs.bg_tabs_get_tabId_key(tabId, "url"              );
    let status            = bg_tabs.bg_tabs_get_tabId_key(tabId, "status"           );
    let csp_filter        = bg_tabs.bg_tabs_get_tabId_key(tabId, "csp_filter"       );
//  let has_CSP           = bg_tabs.bg_tabs_get_tabId_key(tabId, "has_CSP"          );
    let csp_filter_effect = bg_tabs.bg_tabs_get_tabId_key(tabId, "csp_filter_effect");
    let cancelreq         = bg_tabs.bg_tabs_get_tabId_key(tabId, "cancelreq"        );
    let t_load            = bg_tabs.bg_tabs_get_tabId_key(tabId, "t_load"           );
    let tools_deployed    = bg_tabs.bg_tabs_get_tabId_key(tabId, "tools_deployed"   );
    let start             = bg_tabs.bg_tabs_get_tabId_key(tabId, "start"            )
        ||                !!bg_tabs.bg_tabs_get_tabId_key(tabId, "tools_deployed"   );

    /*}}}*/
    /* [icon_color] .. f(t_load cancelreq csp_filter) {{{*/
    let icon_color
        = (cancelreq         == true                                  ) ? lb7

        : (t_load.startsWith(TOOLS2_WAITING         )                 ) ? lb0
        : (t_load.startsWith(TOOLS3_NEED_RELAXED_CSP)                 ) ? lb2

        : (csp_filter_effect == bg_csp.FILTER_EFFECT3_RULES_REMOVED   ) ? lb3
        : (csp_filter_effect == bg_csp.FILTER_EFFECT4_RULES_CUSTOMIZED) ? lb4
        : (csp_filter_effect == bg_csp.FILTER_EFFECT5_RULES_RELAXED   ) ? lb5

        : (t_load            == TOOLS4_DEPLOYED                       ) ? lb6
        : (tools_deployed    == TOOLS4_DEPLOYED                       ) ? lb6

        : !csp_filter                                                   ? lb0

        :                                                                 lb0
    ;

    /*}}}*/
    /* [icon_path] .. f(start icon_color) {{{*/
    let icon_path
        = (icon_color == lb7                         ) ? ICON_PATH_7_X       /* REQUESTS BLOCKED */
        : (t_load.startsWith(TOOLS3_NEED_RELAXED_CSP)) ? ICON_PATH_2_X       /* TOOLS LOCKED     */
        : (start      != true                        ) ? ICON_PATH_8_OFF     /* TOOLS OFF        */
        : (icon_color == lb2                         ) ? ICON_PATH_2_X       /* TOOLS LOCKED     */
        : (icon_color == lb3                         ) ? ICON_PATH_3_O       /* filtered HARD    */
        : (icon_color == lb4                         ) ? ICON_PATH_4_YELLOW  /* filtered SOFT    */
        : (icon_color == lb5                         ) ? ICON_PATH_5_GREEN   /* filter NONE      */
        : (icon_color == lb6                         ) ? ICON_PATH_6_BLUE    /* TOOLS DEPLOYED   */
        : (icon_color == lb1                         ) ? ICON_PATH_1_BROWN   /* filter NO EFFECT */
        : (icon_color == lb0                         ) ? ICON_PATH_0_INITIAL /* TOOLS READY      */
        :/*csp_filter == undefined                  */   ICON_PATH_0_INITIAL /* ...default       */
    ;

if( log_more) log_object("...icon_path", { t_load, tools_deployed, csp_filter_effect, start, icon_color, icon_path }, lf4);
    /*}}}*/
    /* POPUP UPDATE ACTION .. icon title {{{*/
    let title
        = (url && url.startsWith(CHROME_SCHEME))
        ?  "IGNORED URL"+LF+"➔ "+url
        :  b_get_popup_title(tabId, status, url, start, csp_filter, cancelreq, t_load, tools_deployed);

    bg_tabs.bg_tabs_set_tabId_key_val(tabId, "icon_path", icon_path                );
    bg_tabs.bg_tabs_set_tabId_key_val(tabId,     "title", log_js.strip_CR_LF(title));

    if(chrome.action && chrome.action.setIcon ) chrome.action.setIcon ( { tabId ,  path:icon_path } );
    if(chrome.action && chrome.action.setTitle) chrome.action.setTitle( { tabId , title           } );
    if(chrome.action && chrome.action.show    ) chrome.action.show    (   tabId                     );

    /*}}}*/
/*{{{
//let icon_url =  chrome.runtime.getURL(icon_path);
//let icon_url = "chrome-extension://dacmekaboflbchiediclenlddhhaghhj/../images/rtabs16_8_g.png"
  let icon_url = "https://lh5.googleusercontent.com/-PYloDT5xI-Q/ULIE0ajx7LI/AAAAAAAAA1Y/Oh528Yh63mE/s32/com.google.Chrome.png";
//logXXX("icon_url=["+icon_url+"]");
let lbI  = "background: url('"+icon_url+"') no-repeat;";
log("%c  ", lbI+lbb);
}}}*/
if( log_more) log_sep_bot(caller,"LOG7_TAG");
};
/*}}}*/
/*_ b_get_popup_title .. B_LOG9_STAGE {{{*/

let b_get_popup_title = function(tabId, status, url, start, csp_filter, cancelreq, t_load, tools_deployed)
{
/*{{{*/
let log_this = LOG_MAP.B_LOG7_TABS;

/*}}}*/
    /* [t_load] [t_start] [t_page] [t_filter] [t_cancelreq] {{{*/
    if(!t_load)
    {
        let lastError_message = bg_tabs.bg_tabs_get_tabId_key(tabId, "lastError_message");
        t_load
//          = b_page3_FETCH_POLL_in_progress(tabId) ?   "POLLING"
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
               :                                                               0
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

        console.log.apply(console, Array.prototype.slice.call(args));
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

/*_ b_page1_RELOAD_if_required {{{*/
/*{{{*/
const RELOAD_REQUIRED     = "RELOAD REQUIRED";

/*}}}*/
let b_page1_RELOAD_if_required = async function(tabId)
{
/*{{{*/
let   caller = "b_page1_RELOAD_if_required";
let log_this =  log_ACTIVATED();
let log_more =  log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/

    let start           =   bg_tabs_get_tabId_key(tabId, "start"         );
    let tools_deployed  =   bg_tabs_get_tabId_key(tabId, "tools_deployed");
    let t_load          =   bg_tabs_get_tabId_key(tabId, "t_load"        );
    let reload_required =!!((start || tools_deployed) && !t_load);

if( log_this) log_object(caller+" ● "+RELOAD_REQUIRED+": "+reload_required
                        , { start, tools_deployed, t_load, reload_required, callers_bot:log_js.get_callers_bot() }
                        , lb0+lf5, !log_more); // collapsed

///* content_scripts_reply_message {{{*/
//if( log_more) {
//
//    let content_scripts_loaded = await b_content_scripts_loaded(tabId);
//log("content_scripts_loaded=["+content_scripts_loaded+"]");
//
//    let content_scripts_reply_message = bg_tabs_get_tabId_key(tabId, "content_scripts_reply_message");
//    let                     cs_status = b_content_scripts_loaded_parse_message(tabId, content_scripts_reply_message);
//
//    log_object("content_scripts_reply_message", content_scripts_reply_message);
//    log_object("cs_status", cs_status);
//}
///*}}}*/

    if( !reload_required ) {                                return ""             ; }
    else                   { await b_page1_RELOAD({tabId}); return RELOAD_REQUIRED; }
};
/*}}}*/
/*_ b_page1_RELOAD .. B_LOG1_MESSAGE {{{*/
let b_page1_RELOAD = async function(_args)
{
/*{{{*/
let   caller = "b_page1_RELOAD";
let log_this = LOG_MAP.B_LOG1_MESSAGE || (LOG_MAP.B_LOG9_STAGE && LOG_MAP.B_LOG0_MORE);
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
    /*  tabId NONE {{{*/
    let tabId = _args.tabId;
    if(!tabId ) {
        log(B_SCRIPT_ID+"."+caller+": NO tabId");

        return;
    }
    /*}}}*/
    /* DO NOT RELOAD chrome:// tab {{{*/
    let url = bg_tabs_get_tabId_key(tabId, "url", "");
    if( url.startsWith(CHROME_SCHEME))
    {
if(log_more) log("DO NOT RELOAD "+url+" tab");

        return;
    }
    /*}}}*/
if( log_more) log_sep_top(caller, "LOG1_TAG");
if( log_this) log("%c→%c...RELOADING", lbb+lbH+lb0, lbH+lb1+lf4);
    /* HIDE ICON {{{*/
    if(chrome.action && chrome.action.hide) chrome.action.hide(tabId);

    /*}}}*/
    /* MANIFEST_VERSION=="V3" {{{*/
    if(MANIFEST_VERSION=="V3") {
if( log_more) log(" 1 (V3) ➔ RELOAD: chrome.tabs.query");
                bg_tabs_set_last_activated_tabId( tabId );
                bg_tabs_del_tabId_key(            tabId , "t_load");
                bg_tabs_del_tabId_key(            tabId , "tools_deployed");

if( log_more) log(" 2 (V3) ➔ RELOAD: chrome.scripting.executeScript func → b_page1_RELOAD_RUN_script");
                await chrome.scripting
                    .executeScript( { target :  { tabId }
                                    ,   func :   b_page1_RELOAD_RUN_script
                                    ,   args : [{ log_this }]
                    })
                    .then((array_of_any) => {
if( log_more) log(" 3 (V3) ➔ RELOAD: chrome.scripting.executeScript then → bg_tabs_set_tabId_key_val");
                        let message = array_of_any ? array_of_any[0].result : undefined;
if( log_more) log_object("...REPLY message", message, 7, false);
                        bg_tabs_set_tabId_key_val(tabId, "onHeadersReceived", false);
                        bg_tabs_set_tabId_key_val(tabId, "reloading"        , true );
                    })
                    .catch((error) => { log(B_SCRIPT_ID+"."+caller+".chrome.scripting.executeScript", error); });
    }
    /*}}}*/
    /* TABS SCRIPTING {{{*/
    else {
        try {
            bg_tabs_del_tabId_key(tabId, "t_load");
            bg_tabs_del_tabId_key(tabId, "tools_deployed");

            // resolving code: b_page1_RELOAD_GET_script
if( log_more) log(" 1 (V2) ➔ RELOAD: chrome.tabs.executeScript code → b_page1_RELOAD_GET_script");
            chrome.tabs
                .executeScript(               tabId
                              , {      code : b_page1_RELOAD_GET_script() }
                              , function(array_of_any) {
if( log_more) log(" 2 (V2) ➔ RELOAD: chrome.tabs.executeScript func → bg_tabs_set_tabId_key_val");
                                  let message = array_of_any ? array_of_any[0] : undefined;
if( log_more) log_object("...REPLY message", message, 7, false);
                                  if(!b_page0_STORE_lastError(tabId))
                                  {
                                      bg_tabs_set_tabId_key_val  (tabId, "onHeadersReceived", false);
                                      bg_tabs_set_tabId_key_val  (tabId, "reloading"        , true );
                                  }
                                  else {
                                      b_page0_REPORT_lastError(tabId, caller, lf2);
                                  }
                              }
                              );

        }
        catch (error) { log(B_SCRIPT_ID+"."+caller, error); }
    }
    /*}}}*/
if( log_this) log("%c"+SYMBOL_GEAR+"%c PAGE RELOAD SENT .. EXPECTING HEADER RECEIVED"
                  ,lbb+lbH+lb0+lf6 ,lbH+lf6                                          );
if( log_more) log_sep_bot(caller, "LOG1_TAG");
};
/*}}}*/
/*_ b_page1_RELOAD_GET_script .. B_LOG1_MESSAGE {{{*/
let b_page1_RELOAD_GET_script = function()
{
/*{{{*/
let   caller = "b_page1_RELOAD_GET_script";
let log_this = LOG_MAP.B_LOG1_MESSAGE;
let log_more = log_this && LOG_MAP.B_LOG0_MORE;

/*}}}*/
    let script
        = "document.location.reload();"
        + "let message        = {};\n"
        + "    message.t_load = 'PAGE RELOAD SENT'\n"
        + "    message.caller = '"+caller+"'\n"
        + "    message.url    = document.URL\n"
        + "console.log('"+caller+".message:',message);\n"
        + "message;\n"
    ;

if( log_more) log("%c "+caller+": ...return:\n%c"+script, lbH, lf3);
    return script;
};
/*}}}*/
/*_ b_page1_RELOAD_RUN_script {{{*/
let b_page1_RELOAD_RUN_script = function(_args)
//t b_page1_RELOAD_RUN_script = function({ log_this })
{
let { log_this } = _args;
if( log_this) console.log("b_page1_RELOAD_RUN_script:\n...document.location.reload();");

    document.location.reload();

    return { caller: "b_page1_RELOAD_RUN_script" , url: document.URL };
};
/*}}}*/
/*_ b_page2_FETCH_GET_script .. B_LOG1_MESSAGE {{{*/
let b_page2_FETCH_GET_script = function()
{
/*{{{*/
let   caller = "b_page2_FETCH_GET_script";
let log_this = LOG_MAP.B_LOG1_MESSAGE;
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
/*_ b_page2_FETCH_RUN_script {{{*/
let b_page2_FETCH_RUN_script = function(_args)
//t b_page2_FETCH_RUN_script = function({ tabId, DOM_LOAD_ID, DOM_TOOLS_JS_ID, B_SCRIPT_ID })
{
/*{{{*/
let   caller = "b_page2_FETCH_RUN_script";
let { tabId, DOM_LOAD_ID, DOM_TOOLS_JS_ID, B_SCRIPT_ID } = _args; /* eslint-disable-line no-shadow */

//console.log(caller+"(_args):");
//console.log("_args:",_args);
/*}}}*/
    /* fetch document.body.attributes .. [LOAD TOOLS B_SCRIPT ID's] {{{*/
    let k;              let v;                           let message        = {};
    k = DOM_LOAD_ID    ; if(v = document.body.attributes[k]) message[k]     = v.textContent;
    k = DOM_TOOLS_JS_ID; if(v = document.body.attributes[k]) message[k]     = v.textContent;
    k = B_SCRIPT_ID    ; if(v = document.body.attributes[k]) message[k]     = v.textContent;

    /*}}}*/
    /* caller tabId url {{{*/
    message.caller = caller;
    message.tabId  = tabId;
    message.url    = document.URL;

    /*}}}*/
    return message;
};
/*}}}*/
/*_ b_page0_STORE_lastError {{{*/
let b_page0_STORE_lastError = function(tabId)
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
/*_ b_page0_REPORT_lastError {{{*/
let b_page0_REPORT_lastError = function(tabId, _caller, lfx)
{
    let lastError_message
        = bg_tabs_get_tabId_key(tabId, "lastError_message");

    if(!lastError_message ) return;

log("%c"+_caller+"(TAB#"+tabId+"): ABORTED ON ERROR:\n"+lastError_message, lbH+lbF+lfx);
log_object("TAB #"+tabId, bg_tabs_get_tabId(tabId), lbH+lf8);
console.trace();
};
/*}}}*/

    /*➔ EXPORT {{{*/
    return {  name : "bg_page"
        , b_POPUP_pageAction
        , b_page0_REPORT_lastError
        , b_page0_STORE_lastError
        , b_page1_RELOAD
        , b_page1_RELOAD_GET_script
        , b_page1_RELOAD_RUN_script
        , b_page1_RELOAD_if_required
        , b_page2_FETCH_GET_script
        , b_page2_FETCH_RUN_script
    };
    /*}}}*/
}());
