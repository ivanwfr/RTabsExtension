/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ popup.js......................................................P_SCRIPT │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
/* eslint-disable no-redeclare              */
/* globals console, chrome                  */

/* globals log_js                           */

/* exported popup_js,    P_SCRIPT_TAG     */

/* eslint-disable no-warning-comments       */
/* eslint-disable prefer-spread             */
/* eslint-disable prefer-rest-params        */
/* eslint-disable valid-jsdoc               */
/* globals importScripts                    */ /* eslint-disable-line no-unused-vars */
/* eslint-enable  no-redeclare              */

const    P_SCRIPT_ID         = "popup_js";
const    P_SCRIPT_TAG        =     P_SCRIPT_ID +" V3(230404:15h:00)";
/*}}}*/


let popup_js = (function() {
"use strict";
/* NOTES: {{{*/
/*
 * BACKGROUND in responsible for user [EDITED CSP FILTERS STORAGE]
 * OPTIONS calls chrome.storage.sync.set only when storing [LOGING OPTIONS STORAGE]
 * POPUP in responsible for USER [SETTINGS STORAGE]
*/
/*}}}*/

/* IMPORT log_js {{{*/
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
/*_ popup_require_dom_log {{{*/
let popup_require_dom_log = function()
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
popup_require_dom_log();
/* eslint-ensable no-unused-vars */

/* LOG_MAP {{{*/
/*_ P_LOG {{{*/
let LOG_MAP = {

    P_LOG2_ERROR      :  true,
    P_LOG4_STORE      : false,


    P_LOG6_UI         : false,
    P_LOG7_TABS       : false,
    P_LOG8_EVENTS     : false,

    P_LOG0_MORE       : false
   };
/*}}}*/
/*_ log_LOG_MAP {{{*/
let log_LOG_MAP = function(collapsed=true)
{
    let args = [""];            let s  = "%c LOG_MAP "+P_SCRIPT_TAG+": "; args.push(lb0);

    if( LOG_MAP.P_LOG2_ERROR    ) { s += "%c P_LOG2_ERROR "           ; args.push(lb2); }
    if( LOG_MAP.P_LOG4_STORE    ) { s += "%c P_LOG4_STORE "           ; args.push(lb4); }


    if( LOG_MAP.P_LOG6_UI       ) { s += "%c P_LOG6_UI "              ; args.push(lb6); }
    if( LOG_MAP.P_LOG7_TABS     ) { s += "%c P_LOG7_TABS "            ; args.push(lb7); }
    if( LOG_MAP.P_LOG8_EVENTS   ) { s += "%c P_LOG8_EVENTS "          ; args.push(lb8); }

    if( LOG_MAP.P_LOG0_MORE     ) { s += "%c P_LOG0_MORE "            ; args.push(lb0); }

    args[0] = s;
    console.log.apply(console, Array.prototype.slice.call(args));

    log_members("LOG_MAP", LOG_MAP, lbH+lf8, collapsed);
};
/*}}}*/
/*}}}*/
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ SETTINGS                             log_this= P_LOG4_STORE P_LOG6_UI  │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*{{{*/
/*{{{*/
const FILTER3_REMOVE       = "FILTER3_REMOVE";
const FILTER4_CUSTOM       = "FILTER4_CUSTOM";
const FILTER5_RELAX        = "FILTER5_RELAX";
const FILTER6_NONE         = "FILTER6_NONE";

/*}}}*/

/*_ p_set_url_settings {{{*/
/*{{{*/
let tab_settings
    = {        start : ""
        , csp_filter : ""
        ,  cancelreq : ""
        ,   typeface : ""
        ,      theme : ""
        ,      color : ""
    };

/*}}}*/
let p_set_url_settings = function(url)
{
let log_this = LOG_MAP.P_LOG4_STORE;

if( log_this) log("%c p_set_url_settings("+url+")", lbH+lf4);

    let idx = url.indexOf("#");
    url = (idx < 0) ? url : url.substring(0,idx);

    let items = {}; items[url] = tab_settings;

if( log_this) log_members("STORAGE SYNC SET", items, lbL+lf9);
    chrome.storage.sync.set( items );
};
/*}}}*/

/*_ store_start {{{*/
let store_start = function(start, url)
{
let log_this = LOG_MAP.P_LOG4_STORE;
if( log_this) log("store_start("+start+", "+url+")");

    tab_settings.start = start;

    p_set_url_settings(url);

    set_checked_parent_popup_div_active_border("start");
};
/*}}}*/
/*_ show_start {{{*/

let show_start = function(start)
{
    let log_this = LOG_MAP.P_LOG6_UI;
    let log_more = log_this && LOG_MAP.P_LOG0_MORE;
    if( log_more) log("%c show_start%c("+start+")", lb6,lb0);

    set_checked_id("start", (start == "ON"));

    /* SYMBOL */
    let    el = document.getElementById("start"); if(!el) return;
    let label = el.nextElementSibling;
    label.innerHTML
        = (start == "ON") ? "&#10074;&#10074;" /* STOP  SYMBOL */
        :                   "&#9654;"          /* START SYMBOL */
        ;

    /* label */
 //    let label_after = label.nextElementSibling;
 //    if( label_after)
 //        label_after.innerHTML =
 //        = (start == "ON") ? "stop"
 //        :                   "start"
 //    ;

};
/*}}}*/

/*_ store_csp_filter {{{*/
let store_csp_filter = function(csp_filter, url)
{
let log_this = LOG_MAP.P_LOG4_STORE;
if( log_this) log("store_csp_filter("+csp_filter+", url)");

    tab_settings.csp_filter = csp_filter;

    p_set_url_settings(url);

};
/*}}}*/
/*_ show_csp_filter {{{*/

let show_csp_filter = function(csp_filter)
{
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
if( log_more) log("%c show_csp_filter%c("+csp_filter+")", lb6,lb0);

    set_checked_id(FILTER3_REMOVE, (csp_filter == FILTER3_REMOVE));
    set_checked_id(FILTER4_CUSTOM, (csp_filter == FILTER4_CUSTOM));
    set_checked_id(FILTER5_RELAX , (csp_filter == FILTER5_RELAX ));
};
/*}}}*/

/*_ show_has_CSP {{{*/
let show_has_CSP = function(has_CSP)
{
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
if( log_more) log("%c show_has_CSP%c("+has_CSP+")",lb6,lb0);

    let el;
    if( el = document.getElementById("FILTER5_RELAX" )) if(el) set_enabled_el_parent_with_class(has_CSP, el, "cb_filled_pin");
    if( el = document.getElementById("FILTER4_CUSTOM")) if(el) set_enabled_el_parent_with_class(has_CSP, el, "cb_filled_pin");
    if( el = document.getElementById("FILTER3_REMOVE")) if(el) set_enabled_el_parent_with_class(has_CSP, el, "cb_filled_pin");
};
/*}}}*/
/*_ set_enabled_el_parent_with_class {{{*/
let set_enabled_el_parent_with_class = function(enabled, el, className)
{
    let pl = get_el_parent_with_class(el, className);
    if(!pl) return;
    if(enabled) del_el_class(pl, "disabled");
    else        add_el_class(pl, "disabled");
/*
    let tl = document.getElementById("title");
    if( tl) tl.innerHTML = "RTabs Settings<br><i>"+P_SCRIPT_TAG+"</i>";
*/
};
/*}}}*/

/*_ store_cancelreq {{{*/
let store_cancelreq = function(cancelreq, url)
{
let log_this = LOG_MAP.P_LOG4_STORE;
if( log_this) log("store_cancelreq("+cancelreq+")");

    tab_settings.cancelreq = cancelreq;

    p_set_url_settings(url);

    set_checked_parent_popup_div_active_border("cancelreq");

};
/*}}}*/
/*_ show_cancelreq {{{*/
let show_cancelreq = function(cancelreq)
{
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
if( log_more) log("%c show_cancelreq%c("+cancelreq+")", lb6,lb0);

    set_checked_id("cancelreq", (cancelreq == "ON"));
};
/*}}}*/

/*_ store_theme {{{*/
let store_theme = function(theme, url)
{
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
if( log_this) log("%c store_theme%c("+theme+")",lb6,lb0);

    tab_settings.theme = theme;

    p_set_url_settings(url);

    set_checked_parent_popup_div_active_border("theme_dark");

    if(!theme) return;
    /* script .. f(body background-color opacity over a white html) {{{*/
    let html_backgroundColor = (theme == "dark") ? "black"                : "initial";
    let body_backgroundColor = (theme == "dark") ? "rgba( 64, 64, 64,.5)" : "initial";
    let body_color           = (theme == "dark") ? "black"                : "initial";
    let body_fontWeight      = (theme == "dark") ? "900"                  : "initial";

    let script
        = "// "+P_SCRIPT_ID+": store_theme('"+theme+"');\n"
        + "document.documentElement.style.backgroundColor = '"+ html_backgroundColor +"';\n"
        + "document.body           .style.backgroundColor = '"+ body_backgroundColor +"';\n"
        + "document.body           .style.          color = '"+ body_color           +"';\n"
        + "document.body           .style.fontWeight      = '"+ body_fontWeight      +"';\n"
    ;

if(log_more) log("%c"+script, lb6);
    chrome.tabs.executeScript({ code : script });
    /*}}}*/
};
/*}}}*/
/*_ show_theme {{{*/
let show_theme = function(theme)
{
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
if( log_more) log("%c show_theme%c("+theme+")",lb6,lb0);

    set_checked_id("theme_light", (theme == "light"));
    set_checked_id("theme_dark" , (theme == "dark" ));
};
/*}}}*/

/* {{{*/
let COLOR_MAP = {
      "cc0" : "initial",
      "cc1" : "#964B00",
      "cc2" : "#FF0000",
      "cc3" : "#FFA500",
      "cc4" : "#FFFF00",
      "cc5" : "#9ACD32",
      "cc6" : "#6495ED",
      "cc7" : "#EE82EE",
      "cc8" : "#A0A0A0",
      "cc9" : "#FFFFFF"
   };

/*}}}*/
/*_ store_color {{{*/
let store_color = function(color, url)
{
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
let log_this = LOG_MAP.P_LOG4_STORE;
if( log_this) log("%c store_color%c("+color+")",lb4,lb0);

    tab_settings.color = color;

    p_set_url_settings(url);

    set_checked_parent_popup_div_active_border("color_badge_container");
    /* script {{{*/
    let script
        = "// "+P_SCRIPT_ID+": store_color('"+color+"');\n"
        + "document.documentElement.style.backgroundColor = '"+color+"';\n"
        + "document.body           .style.backgroundColor = '"+color+"';"
    ;

if(log_more) log("%c"+script, lb4);
    chrome.tabs.executeScript({ code : script });

    /*}}}*/
};
/*}}}*/
/*_ show_color {{{*/
let show_color = function(color)
{
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
if( log_more) log("%c show_color%c("+color+")",lb6,lb0);
    let color_dropdown = document.getElementById("color_dropdown");
    if(!color_dropdown)
    {
if( log_this) log("...!color_dropdown",lb6);
        return;
    }

    /* COLOR_MAP[idx] .. f(color) {{{*/
    let idx = "";
    for(let i=0; i<10; ++i) {
        idx = "cc"+i;

        if(COLOR_MAP[idx] == color)
        {
            color_dropdown.value = idx;
            color_dropdown.style.backgroundColor = color;
            break;
        }
    }
    /*}}}*/
    /* color-badges sync {{{*/
    for(let i=0; i<10; ++i) {
        let id = "cc"+i;

        let el = document.getElementById(id);
        if(el) {
            if(id == idx) add_el_class(el, "selected");
            else          del_el_class(el, "selected");
        }
    }
    /*}}}*/
};
/*}}}*/

/*_ store_typeface {{{*/
let store_typeface = function(typeface, url)
{
let log_this = LOG_MAP.P_LOG4_STORE;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
if( log_more) log("%c store_typeface%c("+typeface+")",lb4,lb0);

    tab_settings.typeface = typeface;

    p_set_url_settings(url);

    set_checked_parent_popup_div_active_border("monospace");

    if(!typeface) return;

    /* script {{{*/
    let fontFamily
        = (typeface == "cursive"  ) ? "cursive"
        : (typeface == "monospace") ? "monospace"
        :                             ""
    ;
    let script
        = "document.body.style.fontFamily='"+fontFamily+"';"
    ;

if(log_more) log("%c"+script, lb4);
    chrome.tabs.executeScript({ code : script });
    /*}}}*/
};
/*}}}*/
/*_ show_typeface {{{*/
let show_typeface = function(typeface)
{
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
if( log_more) log("%c show_typeface%c("+typeface+")",lb6,lb0);

    set_checked_id("cursive"  , (typeface == "cursive"   ));
    set_checked_id("monospace", (typeface == "monospace" ));
    set_checked_id("initial"  , (typeface == "initial"   ));
};
/*}}}*/

/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ UI                                   log_this= P_LOG6_UI P_LOG8_EVENTS │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*{{{*/
/*_ settings_div_CB {{{*/
let settings_div_CB = function(e)
{
let caller = "settings_div_CB";
let log_this = LOG_MAP.P_LOG8_EVENTS;
if( log_this) log(caller);
    /* target {{{*/
    let check_el
        =  e.target              .getElementsByTagName("INPUT")[0]
        || e.target.parentElement.getElementsByTagName("INPUT")[0]
    ;
    if(!check_el) return;

    /* script check handling */
    if( e.preventDefault  ) e.preventDefault ();
    if( e.stopPropagation ) e.stopPropagation();

    let check_el_id = check_el.id;
if(log_this) log("...check_el_id=["+check_el_id+"]: %c checked=["+check_el.checked+"] ", lbR+lf9);

    /*}}}*/
    /* [start] {{{*/
    if(check_el_id           == "start")
    {
        /* TOGGLE start */
        let value = check_el.checked ? "OFF" : "ON";

        p_set_name_value("start", value);
    }
    /*}}}*/
    /* [csp_filter] {{{*/
    else if( (check_el_id    == FILTER3_REMOVE)
        ||   (check_el_id    == FILTER4_CUSTOM)
        ||   (check_el_id    == FILTER5_RELAX )
    ) {
        /* SET OR TOGGLE [csp_filter] */
        let csp_filter = check_el.checked ? "" /* TOGGLE-OFF */
            :            check_el_id           /* TOGGLE-ON  */
        ;

        p_set_name_value("csp_filter", csp_filter);
    }
    /*}}}*/
    /* [cancelreq] {{{*/
    else if(check_el_id == "cancelreq")
    {
        let value = check_el.checked ? "OFF" : "ON";
        p_set_name_value("cancelreq", value);
    }
    /*}}}*/
    /* [theme] {{{*/
    else if((check_el_id == "theme_dark") || (check_el_id == "theme_light"))
    {
        let value = check_el.checked ? "light" : "dark"; /* just toggle current setting */
        p_set_name_value("theme", value);
    }
    /*}}}*/
    /* [typeface] {{{*/
    else if((check_el_id == "cursive") || (check_el_id == "monospace") || (check_el_id == "initial"))
    {
        let value = check_el_id;
        p_set_name_value("typeface", value);
    }
    /*}}}*/
    /* ...others {{{*/
    else
    {
if(LOG_MAP.P_LOG2_ERROR) log(P_SCRIPT_ID+": ...%c ["+check_el_id+"] OUT OF STORE", lb2);

        check_el.checked = !check_el.checked;
        let value        =  check_el.checked ? true : false;
        p_set_name_value(   check_el_id, value);
    }
    /*}}}*/
};
/*}}}*/
/*_ p_set_name_value {{{*/
let p_set_name_value = function(name, value)
{
let caller = "p_set_name_value";
let log_this = LOG_MAP.P_LOG8_EVENTS;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
if( log_this) log("%c p_set_name_value(name=[%c"+name+"%c], value=[%c"+value+"%c])",lb8, lb0,lbA , lb0,lbA);
    switch(name)
    {
        case "start": /*{{{*/
        {
            store_start (value, tab_url);
            show_start  (tab_settings.start);
            send_message(           { start : tab_settings.start }, caller);
        }
        break;
        /*}}}*/
        case "csp_filter": /*{{{*/
        {
            let filter_changed = (tab_settings.csp_filter != value);

            store_csp_filter(value,tab_url);
            show_csp_filter (tab_settings.csp_filter);
            send_message    (           { csp_filter : tab_settings.csp_filter }, caller);
        }
        break;
        /*}}}*/
        case "cancelreq": /*{{{*/
        {
            store_cancelreq(value , tab_url);
            show_cancelreq (tab_settings.cancelreq);
            send_message   (           { cancelreq:tab_settings.cancelreq }, caller);
        }
        break;
        /*}}}*/
        case "theme": /*{{{*/
        {
            store_theme (value , tab_url);
            show_theme  (tab_settings.theme);
            send_message(           { theme : tab_settings.theme }, caller);
        }
        break;
        /*}}}*/
        case "typeface": /*{{{*/
        {
            store_typeface (value , tab_url);
            show_typeface  (tab_settings.typeface);
            /* no message for local properties */
        }
        break;
        /*}}}*/
        case "color": /*{{{*/
        {
            store_color    (value , tab_url);
            show_color     (tab_settings.color);
            /* no message for local properties */
        }
        break;
        /*}}}*/
        default:
        {
if(log_this) log("...case default");

            /* store */
            tab_settings   [name] = value;
            p_set_url_settings(tab_url);

            /* send */
            send_message({ [name] : value }, caller);

        }
        break;
    }
};
/*}}}*/
/*_ p_UI_titles_to_tooltips {{{*/
let p_UI_titles_to_tooltips = function(id)
{
let caller = "p_UI_titles_to_tooltips";
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;

    let input_list  = document.getElementsByTagName( "INPUT" );
if( log_this) log("%c p_UI_titles_to_tooltips: %c input_list.length=["+ input_list.length+"]", lb6,lb0);

let log_items = {};
    for(let i = 0; i < input_list.length; ++i)
    {
        let input =    input_list[i];
        try {
            /* HTML {{{
             *
             * <span  class="box_container">
             *  <div  class="box cb_filled_pin cb_6">
             *   <input  id="start" type="checkbox"/>
             *   <label for="start" >S</label>
             *   <div class="label_after"></div>
             *  </div>
             * </span>
             *
             *}}}*/
            /* TITLE FROM INPUT ID {{{*/
            let    title = input.id;
            if(    title.startsWith("CSP_")
                || title.includes  ("_LOG")
            ) {
                let  idx  = title.lastIndexOf("_");
                if(idx > 0)
                    title = title.substring(idx+1);
            }

//if( log_more) log("..."+(i+1)+" %c"+title+"%c", lb6,lbA);
            /*}}}*/
            /* LABEL HTML {{{*/
            let label             = input.nextElementSibling;
            let label_after       = label.nextElementSibling;
            label_after.innerHTML = get_last_word(title).toLowerCase();

            /*}}}*/
            /* CAPTION HTML {{{*/
            let caption;
            if( caption = label_after.nextElementSibling)
            {
                caption.innerHTML = p_get_badge_for_title(title);

//if( log_more) log("...caption.innerHTML=["+caption.innerHTML+"]");
  if( log_more) log_items[i+1] = { title , caption : caption.innerHTML };
            }
            /*}}}*/
        }
        catch(ex) { console.warn("*** p_UI_titles_to_tooltips: "+ ex); }
    }
if( log_more) log_members(caller+": items", log_items, lbH+lf8);

};
/*}}}*/
/*_ p_get_badge_for_title {{{*/
let p_get_badge_for_title = function(title)
{
    switch(title) {

        case "start"        : return "START-STOP the extension on this page";

        case FILTER3_REMOVE : return "Remove CSP completely from this page";
        case FILTER4_CUSTOM : return "Apply CUSTOM CSP filter";
        case FILTER5_RELAX  : return "RELAX this page CSP to make it accept this extension";

        case "cancelreq"    : return "Block all outgoing requests from this page";
        case "LOG_IPC"      : return "Toggle LOC_IPC .. (dom_load or dom_tools)";

        default             : return '<h2>TODO</h2>Fetch and return a captionfor "'+ title +'"'; /* eslint-disable-line quotes */
    }

};
/*}}}*/
/*_ set_checked_id {{{*/
let set_checked_id = function(id, checked)
{
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;

    let el;
    if( el = document.getElementById(id)) {
        el.checked = checked;
if( log_more) log("set_checked_id: %c"+id+" %c "+checked, lbL+lf9, lbR+lf5);
    }
};
/*}}}*/
/*_ set_checked_parent_popup_div_active_border {{{*/
let set_checked_parent_popup_div_active_border = function(id)
{
let log_this = LOG_MAP.P_LOG6_UI;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
if( log_more) log("set_checked_parent_popup_div_active_border%c("+id+")", lb0);
    let el = document.getElementById(id);

    el     = get_el_parent_with_class(el,"popup_div");
    if(!el) return;
/*
    el.style.borderStyle = "groove";
    el.style.borderColor = "#448";
*/
    el.style.borderColor = "#444";
};
/*}}}*/
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ EVENTS                               log_this=           P_LOG8_EVENTS │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*_ send_state_message{{{*/
let send_state_message = function()
{
// FIXME - UNUSED .. each call to p_set_name_value shall sync with background_js ?
/*{{{*/
let caller = "send_state_message";
let log_this = LOG_MAP.P_LOG8_EVENTS;
if( log_this) log("%c"+caller, lbR+lf9);

if(log_this) log("...tab_settings.csp_filter...=["+tab_settings.csp_filter+"]");

/*}}}*/
    /* SKIP BROWSER SPECIAL PAGES {{{*/
    if( tab_url.startsWith("chrome") )
    {
if(LOG_MAP.P_LOG2_ERROR) log(caller+": skipping URL %c "+tab_url+" ", lb8);

        return;
    }
    /*}}}*/
    /* APPLY CSP FILTER {{{*/

    let apply_csp_filter
        = (tab_settings.csp_filter.indexOf(FILTER3_REMOVE) >= 0) ? FILTER3_REMOVE
        : (tab_settings.csp_filter.indexOf(FILTER4_CUSTOM) >= 0) ? FILTER4_CUSTOM
        : (tab_settings.csp_filter.indexOf(FILTER5_RELAX ) >= 0) ? FILTER5_RELAX
        : ""
    ;

    let queryInfo = { active : true , /*currentWindow:true ,*/ status : "complete" };

    let message =
        {            url : tab_url
            ,      start : tab_settings.start
            , csp_filter : apply_csp_filter
            ,     caller : P_SCRIPT_ID+"."+caller
            ,  queryInfo
        };
    send_message(message, caller);

    /*}}}*/

};
/*}}}*/
/*_ p_UI_add_click_listeners {{{*/
let p_UI_add_click_listeners = function()
{
let log_this = LOG_MAP.P_LOG8_EVENTS;
if( log_this) log("%c p_UI_add_click_listeners", lb8);
    /* settings_div 'click' {{{*/
    let settings_div = document.getElementById("settings_div");
    settings_div.addEventListener("click", (e) => {
        settings_div_CB(e);
    });
    /*}}}*/
    /* popup_settings_div 'click' {{{*/
    let popup_settings_div    = document.getElementById("popup_settings_div");
    popup_settings_div.addEventListener("click", (e) => {
        settings_div_CB(e);
    });
    /*}}}*/
    /* color_dropdown 'click' {{{*/
    let color_dropdown        = document.getElementById("color_dropdown");
    if(color_dropdown)
    {
        color_dropdown.addEventListener("click", () => {
if(log_this) log("color_dropdown.change: color_dropdown.value=["+color_dropdown.value+"]");

            let   idx = color_dropdown.value;
            let value = COLOR_MAP[idx];
            p_set_name_value("color", value);

        });
    }
    /*}}}*/
    /* color_badge_container 'click' {{{*/
    let color_badge_container = document.getElementById("color_badge_container");
    if(color_badge_container)
    {
        color_badge_container.addEventListener("click", (e) => {
if(log_this) log("color_badge_container.click: e.target.id=["+e.target.id+"]");

            let   idx = e.target.id;
            let value = COLOR_MAP[idx];
            p_set_name_value("color", value);
        });
    }
    /*}}}*/
};
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ UTIL                                 log_this= P_LOG7_TABS             │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*{{{*/
/*_ set add del has _el_class {{{*/
let set_el_class     = function(el, className) {                                            el.className       = className  ; };
let add_el_class     = function(el, className) { if(   !el.classList.contains( className )) el.classList.add   ( className ); };
let del_el_class     = function(el, className) { if(    el.classList.contains( className )) el.classList.remove( className ); };
let has_el_class     = function(el, className) { return el.classList.contains( className );                                   };

/*}}}*/
/*_ get_el_parent_with_class {{{*/
let get_el_parent_with_class = function(el, className)
{
    while( el != null) {
        if(el.classList.contains(className)) return el;
        else                                        el = el.parentElement;
    }
    return null;
};
/*}}}*/
/*_ interrupt_cancelreq {{{*/
let interrupt_cancelreq = function(caller)
{
let log_this = LOG_MAP.P_LOG7_TABS;
if( log_this) log("%c interrupt_cancelreq%c(caller "+caller+")", lb7, lb0);

    store_cancelreq( false );
    show_cancelreq (tab_settings.cancelreq);

    let message = { cancelreq:tab_settings.cancelreq , url:tab_url };
    send_message(message, caller);
};
/*}}}*/
/*_ get_last_word {{{*/
let regexp_LW = new RegExp(".*[\\s_]");
let get_last_word = function(text)
{
    return text
        .   trim()
        .   replace(regexp_LW, "")
    ;
};
/*}}}*/
/*_ get_url_domain {{{*/
let regex_DOMAIN   = new RegExp("^(\\w*:\/\/[^\/]+)\/?.*");
let get_url_domain = function(url)
{
    if(   !url ) return "";

    url = (url.indexOf("://" ) > 0)
        ?  url.split  (  "/" )[2]
        :  url.split  (  "/" )[0]
    ;

    return  url.replace(regex_DOMAIN, "$1");
};
/*}}}*/
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ CONSOLE COMMANDS                                                       │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*_ logn {{{*/
let logn = function(n)
{
let caller   = "logn("+n+")";

    let log_tag

        = (n == 2) ? "P_LOG2_ERROR"

        : (n == 4) ? "P_LOG4_STORE"

        : (n == 6) ? "P_LOG6_UI"
        : (n == 7) ? "P_LOG7_TABS"
        : (n == 8) ? "P_LOG8_EVENTS"

        : (n == 0) ? "P_LOG0_MORE"
        :            ""
    ;

    /* TOGGLE, LOG, SAVE */
    if(log_tag) {
        let message
            = {   set_log_map   : log_tag
                , set_log_state : !LOG_MAP[log_tag]
                , caller        : P_SCRIPT_ID
            };
        p_onMessage_CB(message, caller);

        p_storage_sync_set_LOG_MAP();

        log_LOG_MAP(false); // not collapsed
    }
    /* LOG */
    else {
        log_LOG_MAP();
    }

    if(chrome.runtime.lastError) return chrome.runtime.lastError.message;
    if(!log_tag                ) return SYN;
    let    mark = LOG_MAP[log_tag] ? SYMBOL_CHECK_MARK : SYMBOL_NOT_CHECKED;
    return mark+" "+log_tag+"="+LOG_MAP[log_tag];
};
/*}}}*/
/*_ p_storage_sync_set_LOG_MAP {{{*/
let p_storage_sync_set_LOG_MAP = function()
{
    log("%c SAVING [LOG_MAP]", lb9);
    let items
        = {     P_LOG2_ERROR  : LOG_MAP.P_LOG2_ERROR

            ,   P_LOG4_STORE  : LOG_MAP.P_LOG4_STORE

            ,   P_LOG6_UI     : LOG_MAP.P_LOG6_UI
            ,   P_LOG7_TABS   : LOG_MAP.P_LOG7_TABS
            ,   P_LOG8_EVENTS : LOG_MAP.P_LOG8_EVENTS

            ,   P_LOG0_MORE   : LOG_MAP.P_LOG0_MORE
        };
    chrome.storage.sync.set( items );

  //log_members(SBS+"LOG_MAP", items, lbR+lf0);
};
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ STORAGE                              log_this= P_LOG8_EVENTS           │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
// ............ SETTINGS1_tabs_onActivated      ... background_js responsibility
/*_ SETTINGS1_onDOMContentLoaded_addListener {{{*/
const P_DOM_CONTENT_LOADED = "DOM CONTENT LOADED";
let SETTINGS1_onDOMContentLoaded_addListener = function()
{
let log_this = LOG_MAP.P_LOG8_EVENTS;
if( log_this) log("%c"+SD1+"%c "+P_DOM_CONTENT_LOADED, lbB+lf1, lbR+lf9);

    if( !log_permission(P_SCRIPT_ID, chrome.runtime, "Listening to DOMContentLoaded notifications", "runtime") )
        return;
    document.addEventListener("DOMContentLoaded", SETTINGS2_GET_ACTIVE_TAB_URL);
};
/*}}}*/
/*_ SETTINGS2_GET_ACTIVE_TAB_URL {{{*/
const P_GET_ACTIVE_TAB_URL  = "GET ACTIVE TAB URL";
let SETTINGS2_GET_ACTIVE_TAB_URL = function()
{
let caller = "SETTINGS2_GET_ACTIVE_TAB_URL";
let log_this = LOG_MAP.P_LOG8_EVENTS;

    let queryInfo = {active:true , /*currentWindow:true ,*/ status:"complete" };
    let message = { query:"get_tab_url" , queryInfo };
if( log_this) log("%c"+SD2+"%c "+P_GET_ACTIVE_TAB_URL    +": %c" +log_json(message), lbB+lf2, lbR+lf9, lb0);

    send_message(message, caller);
};
/*}}}*/
// ............ SETTINGS3_GET_ACTIVE_TAB_URL_CB ... background_js responsibility
/*_ SETTINGS4_GET_URL_SETTINGS {{{*/
let listeners_added;
let tab_url;
const P_GET_URL_SETTINGS  = "GET URL SETTINGS";
let SETTINGS4_GET_URL_SETTINGS = function(url)
{
let log_this = LOG_MAP.P_LOG8_EVENTS;
if( log_this) log("%c"+SD5+"%c "+P_GET_URL_SETTINGS      +" %c["+url+"]", lbB+lf4, lbR+lf4, lb0);
    if(!url) return;

    tab_url = url;

    let idx = url.indexOf("#");
    let key = (idx < 0) ? url : url.substring(0,idx);

    chrome.storage.sync.get(
        key
        , function(items) {
            SETTINGS5_GET_URL_SETTINGS_CB(
                last_activated_tabId
                , key
                ,     chrome.runtime.lastError
                    ? chrome.runtime.lastError
                    : items[key]
            );
        });
};
/*}}}*/
/*_ SETTINGS5_GET_URL_SETTINGS_CB {{{*/
const P_GET_URL_SETTINGS_CB       = "GET URL SETTINGS CB";
let SETTINGS5_GET_URL_SETTINGS_CB = function(tabId, url, items)
{
    /* {{{*/
let caller = "SETTINGS5_GET_URL_SETTINGS_CB";
let log_this = LOG_MAP.P_LOG8_EVENTS;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
    /*}}}*/

try{ if( log_this) log_sep_top(caller, "LOG4_TAG");
    /* NO SAVED SETTINGS {{{*/
    if(!items) {
if( log_this) log("%c No saved settings yet for %c "+url+" ", lbR+lf9, lbR+lf0);

        return;
    }
    /*}}}*/
if( log_this) log("%c"+SD6+"%c "+P_GET_URL_SETTINGS_CB   +" %c["+url+"]", lbB+lf5, lbR+lf5, lb0);
    /* SHOW CURRENT STORED SETTINGS {{{*/

  //tab_settings.start      = items.start;
  //tab_settings.csp_filter = items.csp_filter;
  //tab_settings.cancelreq  = items.cancelreq;
    tab_settings.color      = items.color;
    tab_settings.theme      = items.theme;
    tab_settings.typeface   = items.typeface;

if( log_this) log_members("tab_settings", items, lbH+lf9);

    /* EXTRA */
    show_theme           ( tab_settings.theme     );
    show_typeface        ( tab_settings.typeface  );
    show_color           ( tab_settings.color     );

    /*}}}*/
} finally { if( log_this)  log_sep_bot(caller, "LOG4_TAG"); }
};
/*}}}*/
// ............ SETTINGS7_APPLY_CSP_FILTER      ... background_js responsibility

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ LISTENERS                            log_this= P_LOG8_EVENTS           │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*_ p_sync_get_LOG_MAP_CB {{{*/
let p_sync_get_LOG_MAP_CB = function(items={})
{
let log_this = LOG_MAP.P_LOG0_MORE;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;
    /* LOAD LOG_MAP [popup_js] {{{*/
    /*(____________.____________________!=____________)________.________________=______.________________;*/

    if(typeof items.P_LOG2_ERROR        != "undefined") LOG_MAP.P_LOG2_ERROR    = items.P_LOG2_ERROR    ;
    if(typeof items.P_LOG4_STORE        != "undefined") LOG_MAP.P_LOG4_STORE    = items.P_LOG4_STORE    ;


    if(typeof items.P_LOG6_UI           != "undefined") LOG_MAP.P_LOG6_UI       = items.P_LOG6_UI       ;
    if(typeof items.P_LOG7_TABS         != "undefined") LOG_MAP.P_LOG7_TABS     = items.P_LOG7_TABS     ;
    if(typeof items.P_LOG8_EVENTS       != "undefined") LOG_MAP.P_LOG8_EVENTS   = items.P_LOG8_EVENTS   ;

    if(typeof items.P_LOG0_MORE         != "undefined") LOG_MAP.P_LOG0_MORE     = items.P_LOG0_MORE     ;
    /*(____________.____________________!=____________)________.________________=______.________________;*/

    let some_log
                                    /* _1_ */
        =  LOG_MAP.P_LOG2_ERROR     /* _2_ */
                                    /* _3_ */
        || LOG_MAP.P_LOG4_STORE     /* _4_ */
                                    /* _5_ */
        || LOG_MAP.P_LOG6_UI        /* _6_ */
        || LOG_MAP.P_LOG7_TABS      /* _7_ */
        || LOG_MAP.P_LOG8_EVENTS    /* _8_ */
                                    /* _9_ */
    ;
    if(some_log) LOG_MAP.P_LOG2_ERROR = true;

    if(some_log) log_LOG_MAP();

if(LOG_MAP.P_LOG0_MORE) log("%c p_sync_get_LOG_MAP_CB", lb1);
if(LOG_MAP.P_LOG0_MORE) log_object("items", items, lb1);

    /*}}}*/

};
chrome.storage.sync.get(LOG_MAP, p_sync_get_LOG_MAP_CB);
/*}}}*/
/* [DOMContentLoaded] {{{*/

SETTINGS1_onDOMContentLoaded_addListener();
/*}}}*/
/* [onMessage] {{{*/
/*_ p_runtime_onMessage_addListener {{{*/
let p_runtime_onMessage_addListener = function()
{
    if( !log_permission(P_SCRIPT_ID, chrome.runtime, "Listening to Extension messages", "runtime") )
        return;

    chrome.runtime.onMessage.addListener( p_onMessage_CB );
};
/*}}}*/
/*_ p_onMessage_CB {{{*/
/*{{{*/
//const APPLIED_FILTER3_REMOVED = "HEADER CSP: REMOVED";
//const APPLIED_FILTER4_CUSTOM  = "HEADER CSP: CUSTOM";
//const APPLIED_FILTER5_RELAXED = "HEADER CSP: RELAXED";

let last_activated_tabId;

/*}}}*/
let p_onMessage_CB = function(message, sender, response_handler)
{
    /*{{{*/
let caller = "p_onMessage_CB";
let log_this = LOG_MAP.P_LOG8_EVENTS;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;

    /*}}}*/
try { if(log_this) log_sep_top(caller, "LOG8_TAG");
if( log_more) log_members("sender" , sender , lbR+lf8);
if( log_this) log_members("message", message, lbR+lf5);

    /* pick up first chance to update UI {{{*/
    if(!listeners_added) {
        listeners_added = true;
        p_UI_add_click_listeners();
    }

    if( p_UI_titles_to_tooltips) {
        p_UI_titles_to_tooltips();
        p_UI_titles_to_tooltips = null;
    }
    /*}}}*/

    /* set [last_activated_tabId] {{{*/
    if(    !last_activated_tabId
        && (typeof message.tabId   != "undefined")
        && (typeof message.tab_url != "undefined")
    ) {
if( log_this) log("SET %c TAB#"+message.tabId+" URL %c "+message.tab_url, lbL+lf9, lbR+lf5);

        last_activated_tabId     = message.tabId;

        SETTINGS4_GET_URL_SETTINGS(message.tab_url);
        return;
    }
    /*}}}*/

    if(typeof message.start       != "undefined") /*{{{*/
    {
if( log_this) log("SET %c start %c "+message.start, lbL+lf9, lbR+lf5);

        show_start(message.start);
    }
    /*}}}*/
    if(typeof message.csp_filter  != "undefined") /*{{{*/
    {
if( log_this) log("SET %c csp_filter %c "+message.csp_filter, lbL+lf9, lbR+lf5);

        show_csp_filter(message.csp_filter);
    }
    /*}}}*/
    if(typeof message.cancelreq  != "undefined") /*{{{*/
    {
if( log_this) log("SET %c cancelreq %c "+message.cancelreq, lbL+lf9, lbR+lf5);

        show_cancelreq(message.cancelreq);
    }
    /*}}}*/
    if(typeof message.title       != "undefined") /*{{{*/
    {
if( log_this) log("SET %c title %c "+message.title, lbL+lf9, lbR+lf5);

        document.body.title = message.title;
    }
    /*}}}*/
    if(typeof message.set_log_map != "undefined") /*{{{*/
    {
if( log_this) log("SET %c LOG_MAP %c "+message.set_log_map, lbL+lf9, lbR+lf5);

        switch(message.set_log_map)
        {
            case "P_LOG2_ERROR"  : LOG_MAP.P_LOG2_ERROR  = message.set_log_state; break;
            case "P_LOG4_STORE"  : LOG_MAP.P_LOG4_STORE  = message.set_log_state; break;
            case "P_LOG6_UI"     : LOG_MAP.P_LOG6_UI     = message.set_log_state; break;
            case "P_LOG7_TABS"   : LOG_MAP.P_LOG7_TABS   = message.set_log_state; break;
            case "P_LOG8_EVENTS" : LOG_MAP.P_LOG8_EVENTS = message.set_log_state; break;
            case "P_LOG0_MORE"   : LOG_MAP.P_LOG0_MORE   = message.set_log_state; break;
        }

        let some_log
            =  LOG_MAP.P_LOG2_ERROR
            || LOG_MAP.P_LOG4_STORE
            || LOG_MAP.P_LOG6_UI
            || LOG_MAP.P_LOG7_TABS
            || LOG_MAP.P_LOG8_EVENTS
        ;
        if(some_log) LOG_MAP.P_LOG2_ERROR = true;

        if(some_log) log_LOG_MAP();

if(LOG_MAP.P_LOG0_MORE) log("%c p_onMessage_CB", lb1);
if(LOG_MAP.P_LOG0_MORE) log_object("message", message, lb1);
    }
    /*}}}*/

if( log_this) log("SET %c has_CSP %c "+message.has_CSP, lbL+lf9, lbR+lf6);
        show_has_CSP(message.has_CSP);

} finally { if(log_this) log_sep_bot(caller, "LOG8_TAG"); }
};
/*}}}*/
p_runtime_onMessage_addListener();
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ IPC                                  log_this= P_LOG7_TABS             │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*_ send_message {{{*/
let send_message = function(message, caller)
{
let log_this = LOG_MAP.P_LOG7_TABS;
let log_more = log_this && LOG_MAP.P_LOG0_MORE;

    message.caller = P_SCRIPT_ID+"."+caller;
    message.tabId  = last_activated_tabId;

if( log_this) log_members("send_message", message, lbH+lf8);

    chrome.runtime.sendMessage( message );

/* XXX goes to content-script - useless XXX {{{
    let ipc_json  = JSON.stringify( message );

    let   script =   "window.postMessage('"+ipc_json+"', '*');";
if( log_this) log("...calling chrome.tabs.executeScript%c({ code : '"+script+"' }):", lb7);
    chrome.tabs.executeScript({ code : script });
}}}*/

};
/*}}}*/
/*_ p_IPC_message_CB {{{*/
let p_IPC_message_CB = function(event)
{
    let message = event.data;
log(P_SCRIPT_ID+".p_IPC_message_CB: ...message=["+message+"]");

    let ipc = JSON.parse(message);
    if( ipc ) p_IPC_handle_message( ipc );
};
/*}}}*/
/*_ p_IPC_handle_message {{{*/
let p_IPC_handle_message = function(ipc)
{
log("p_IPC_handle_message(ipc)");

log_object("ipc", ipc, lb7);

    //TODO if(typeof ipc.t_load != "undefined")
};
/*}}}*/
/*_ p_IPC_addListener {{{*/
let p_IPC_addListener = function(script_id)
{
log("...%c "+script_id+": %c Listening to window.postMessage ", lbb+lbL+lf7, lbb+lbR+lf7);

    window.addEventListener("message", p_IPC_message_CB, false);
};
p_IPC_addListener(P_SCRIPT_ID);
/*}}}*/

    return { init : p_runtime_onMessage_addListener
            ,   c : log_js.clear
            ,   l : logn
    };
})();

