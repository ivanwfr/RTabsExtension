"use strict";
let O_SCRIPT_ID = "options_js";     let SCRIPT_TAG = O_SCRIPT_ID +" (200927:20h:17)";
/* NOTES: {{{*/
/* 
 * BACKGROUND in responsible for user [EDITED CSP FILTERS STORAGE]
 * OPTIONS calls chrome.storage.sync.set only when storing [LOGING OPTIONS STORAGE]
 * POPUP in responsible for USER [SETTINGS STORAGE]
*/
/*}}}*/

/* IMPORT log_js */
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
/*_ options_require_dom_log {{{*/
let options_require_dom_log = function()
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
options_require_dom_log();

/* LOG_MAP {{{*/
/*_ O_LOG {{{*/
let LOG_MAP = {

    O_LOG2_ERROR      :  true,
    O_LOG3_GET        : false,
    O_LOG4_SET        : false,
    O_LOG5_SUCCESS    : false,
    O_LOG6_UI         : false,



    O_LOG0_MORE       : false
   };
/*}}}*/
/*_ log_LOG_MAP {{{*/
let log_LOG_MAP = function(collapsed=true)
{
    let args = [""];            let s  = "%c LOG_MAP "+SCRIPT_TAG+": "; args.push(lb0);

    if( LOG_MAP.O_LOG2_ERROR    ) { s += "%c O_LOG2_ERROR "           ; args.push(lb2); }
    if( LOG_MAP.O_LOG3_GET      ) { s += "%c O_LOG3_GET "             ; args.push(lb3); }
    if( LOG_MAP.O_LOG4_SET      ) { s += "%c O_LOG4_SET "             ; args.push(lb4); }
    if( LOG_MAP.O_LOG5_SUCCESS  ) { s += "%c O_LOG5_SUCCESS "         ; args.push(lb5); }
    if( LOG_MAP.O_LOG6_UI       ) { s += "%c O_LOG6_UI "              ; args.push(lb6); }



    if( LOG_MAP.O_LOG0_MORE     ) { s += "%c O_LOG0_MORE "            ; args.push(lb0); }

    args[0] = s;
    console.log.apply(console, Array.prototype.slice.call(args));

    log_members("LOG_MAP", LOG_MAP, lbH+lf8, collapsed);
};
/*}}}*/
/*}}}*/

/* UI */
/*{{{*/

const FILTER_TEXTAREA   = "FILTER_TEXTAREA";

const FILTER3_REMOVE    = "FILTER3_REMOVE";
const FILTER4_CUSTOM    = "FILTER4_CUSTOM";
const FILTER5_RELAX     = "FILTER5_RELAX";
const FILTER6_NONE      = "FILTER6_NONE";

const LOG_PANEL         = "LOG_PANEL";
const LOG_MAP_DIV       = "LOG_MAP_DIV";
const STORAGE_CLEAR     = "STORAGE_CLEAR";

/*}}}*/
/*_ o_UI_titles_to_tooltips {{{*/
let o_UI_titles_to_tooltips = function(id)
{
    let input_list  = document.getElementsByTagName( "INPUT" );
if(LOG_MAP.O_LOG6_UI) log("%c o_UI_titles_to_tooltips: %c input_list.length=["+ input_list.length+"]", lb6,lb0);

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
            let    title =           input.id;
            if(    title.startsWith( "CSP_"    )
               ||  title.includes  ( "_LOG"    ) /* i.e. O_LOG4_SET */
               ||  title.startsWith( "STORAGE" )
            ) {
                let  idx  = title.lastIndexOf("_");
                if(idx > 0)
                    title = title.substring(idx+1);
            }

if(LOG_MAP.O_LOG6_UI) log((i+1)+" %c["+title+"]", lb6);
            /*}}}*/
            /* LABEL HTML {{{*/
            let label             = input.nextElementSibling;
            let label_after       = label.nextElementSibling;
            label_after.innerHTML = title;

            /*}}}*/
            /* CAPTION HTML {{{*/
            let caption;
            if( caption = label_after.nextElementSibling)
            {
                caption.innerHTML = o_get_badge_for_title(title);

if(LOG_MAP.O_LOG6_UI) log("...caption.innerHTML=["+caption.innerHTML+"]");
            }
            /*}}}*/
        }
        catch(ex) { console.warn("*** o_UI_titles_to_tooltips: "+ ex); }
    }

};
/*}}}*/
/*_ o_get_badge_for_title {{{*/
let o_get_badge_for_title = function(title)
{
    switch(title) {
        case "PARSE"    : return "logs CSP and MESSAGES parsing";
        case "ERROR"    : return "logs script error (!silent)";
        case "STORE"    : return "logs storage set and storage get";
        case "PRESERVE" : return "do not clear console between requests";
        case "ONHEADER" : return "logs onBeforeRequest header filtering";
        case "HEADER"   : return "logs header filtering";
        case "TABS"     : return "logs tabs activation and updates";
        case "EVENTS"   : return "logs event listeners";
        case "STAGE"    : return "logs runtime major steps";
        case "MORE"     : return "logs more processing details";
        case "ERROR"    : return "logs script errors (!silent)";

        case "GET"      : return "logs storage GET";
        /* O_LOG3_GET
         *  o_on_get_csp_filter_response_handler
         */

        case "SET"      :
        /* O_LOG4_SET 
         * o_on_set_csp_filter_response_handler
         */
        return "logs storage SET";

        case "SUCCESS"  :
        /* O_LOG5_SUCCESS
         * o_show_SUCCESS
         */
        return "logs CSP JSON parsing";

        case "UI"       :
        /* O_LOG6_UI:
         * o_addEventListeners
         * o_build_textarea_listener
         * o_UI_sync_settings_el
         * o_UI_titles_to_tooltips
         * o_UI_CB_toggle_panel_checkbox_row
         * o_send_LOG_MAP_toggle_message
         * o_sync_csp_filter_checked_state
         * o_on_set_csp_filter_CB
         * o_ui_show_panel
         */
        return "logs UI callbacks";

        case "STORE"    : return "logs popup storage";
        case "ERROR"    : return "logs script errors (!silent)";
        case "TABS"     : return "logs tabs activation and updates";
        case "EVENTS"   : return "logs event listeners";
        case "UI"       : return "logs UI callbacks";

        default         : return '<h2>TODO</h2>Fetch and return a captionfor "'+ title +'"';
    }

};
/*}}}*/
/*_ o_set_statusline_text {{{*/
let o_set_statusline_text = function(text)
{
    let statusline = document.getElementById( "statusline" );
    statusline.innerHTML = text.replace("\n","<br>");
};
/*}}}*/
/*_ o_show_FAILURE {{{*/
let o_show_FAILURE = function(response)
{
if(LOG_MAP.O_LOG2_ERROR) log("%c o_show_FAILURE"     , lb2);
if(LOG_MAP.O_LOG2_ERROR) log("...response=%c["+response+"]", lb2);

    let textarea = document.getElementById(FILTER_TEXTAREA);
    textarea.style.backgroundColor = FAILURE_BG_COLOR;
    textarea.style.          color = FAILURE_FG_COLOR;
    textarea.title                 = response;
};
/*}}}*/
/*_ o_show_SUCCESS {{{*/
let o_show_SUCCESS = function(response)
{
if(LOG_MAP.O_LOG5_SUCCESS) log("%c o_show_SUCCESS"     , lb5);
if(LOG_MAP.O_LOG5_SUCCESS) log("...response=%c["+response+"]", lb5);

    let textarea = document.getElementById(FILTER_TEXTAREA);
    textarea.style.backgroundColor =        "";

    let bg_color
        =     (textarea.value.indexOf("# DEFAULT FILTER") == 0) ? DEFAULT_BG_COLOR
        :     (textarea.value.indexOf("# REMOVE FILTER" ) == 0) ? REMOVE_BG_COLOR
        :     (textarea.value.indexOf("# NO FILTER"     ) == 0) ? NO_FILTER_BG_COLOR
        :                                                         CUSTOM_BG_COLOR
    ;
    let fg_color
        =     (textarea.value.indexOf("# DEFAULT FILTER") == 0) ? DEFAULT_FG_COLOR
        :     (textarea.value.indexOf("# REMOVE FILTER" ) == 0) ? REMOVE_FG_COLOR
        :     (textarea.value.indexOf("# NO FILTER"     ) == 0) ? NO_FILTER_FG_COLOR
        :                                                         CUSTOM_FG_COLOR
    ;

    textarea.style.backgroundColor = bg_color;
    textarea.style.          color = fg_color;
    textarea.title = "";
};
/*}}}*/

/* UI EVENTS */
/*_ o_UI_CB {{{*/
let o_UI_CB = function(e, button_id="input")
{
let log_this = LOG_MAP.O_LOG6_UI;
if( log_this) log_console_clear("o_UI_CB");
if( log_this) log("%c o_UI_CB%c("+button_id+")", lb6,lb0);
    /* clicked UI element {{{*/
    let csp_filter    = null;
    let log_panel     = null;
    let log_map_div   = null;
    let clear_button  = null;

    switch(button_id)
    {
        case "input"              :
        case FILTER3_REMOVE       :
        case FILTER4_CUSTOM       :
        case FILTER5_RELAX        :
        case FILTER6_NONE         :
        csp_filter     = button_id;
        break;

        case LOG_PANEL            :
        log_panel      = button_id;
        break;

        case LOG_MAP_DIV          :
        log_map_div    = button_id;
        break;

        case STORAGE_CLEAR        :
        clear_button   = button_id;
        break;

    }
if( log_this) log("csp_filter.....=["+ csp_filter   +"]");
if( log_this) log("log_panel......=["+ log_panel    +"]");
if( log_this) log("log_map_div....=["+ log_map_div  +"]");
if( log_this) log("clear_button...=["+ clear_button +"]");

    /*}}}*/
    /* FILTER PANEL {{{*/
    if(csp_filter)
    {
        o_on_set_csp_filter_CB(csp_filter, "o_UI_CB");

    }
    /*}}}*/
    /* LOG PANEL {{{*/
    if(log_panel)
    {
        o_ui_show_panel(LOG_MAP_DIV);

    }
    /*}}}*/
    /* LOG BUTTON {{{*/
    if(log_map_div)
    {
//console.log("e.target..........................................:"); console.dir(e.target                                          );
//console.log("e.target.parentElement............................:"); console.dir(e.target.parentElement                            );
//console.log("e.target.parentElement.parentElement..............:"); console.dir(e.target.parentElement.parentElement              );
//console.log("e.target.parentElement.parentElement.parentElement:"); console.dir(e.target.parentElement.parentElement.parentElement);
        /* ID {{{*/
        let el = (e.target                                     .htmlFor) ? document.getElementById( e.target.htmlFor )        /* label.htmlFor input */
            :    (e.target                                          .id) ? e.target                                           /* button              */
            :    (e.target.parentElement                            .id) ? e.target.parentElement                             /* cb_filled_pin       */
            :    (e.target.parentElement.parentElement              .id) ? e.target.parentElement.parentElement               /* box_container       */
            :    (e.target.parentElement.parentElement.parentElement.id) ? e.target.parentElement.parentElement.parentElement /* LOG_MAP_DIV_...     */
            :    null
        ;
if( log_this) log("...el=%c["+el.id+"]", lb4);

        /*}}}*/
        switch(el.id)
        {
            /* background_js {{{*/
            case "LOG_MAP_DIV_background": o_UI_CB_toggle_panel_checkbox_row( el               ); break;
            case "B_LOG1_MESSAGE"        :
            case "B_LOG2_ERROR"          :
            case "B_LOG3_PRESERVE"       :
            case "B_LOG4_PARSE"          :
            case "B_LOG5_ONREQUEST"      :
            case "B_LOG6_ONHEADER"       :
            case "B_LOG7_TABS"           :
            case "B_LOG8_STORE"          :
            case "B_LOG9_STAGE"          :
            case "B_LOG0_MORE"           :
            /*..........................*/ o_send_LOG_MAP_toggle_message    ( el.id, el.checked);
          //if(el.checked)                 o_UI_CB_toggle_log_map_div_ERROR ( el.parentElement.parentElement.parentElement );
            break;

            /*}}}*/
            /* options_js {{{*/
            case "LOG_MAP_DIV_options"   : o_UI_CB_toggle_panel_checkbox_row( el               ); break;
            case "O_LOG2_ERROR"          : o_sync_get_LOG_MAP_CB( { O_LOG2_ERROR  :el.checked }); break;
            case "O_LOG3_GET"            : o_sync_get_LOG_MAP_CB( { O_LOG3_GET    :el.checked }); break;
            case "O_LOG4_SET"            : o_sync_get_LOG_MAP_CB( { O_LOG4_SET    :el.checked }); break;
            case "O_LOG5_SUCCESS"        : o_sync_get_LOG_MAP_CB( { O_LOG5_SUCCESS:el.checked }); break;
            case "O_LOG6_UI"             : o_sync_get_LOG_MAP_CB( { O_LOG6_UI     :el.checked }); break;
            case "O_LOG0_MORE"           : o_sync_get_LOG_MAP_CB( { O_LOG0_MORE   :el.checked }); break;
            break;

            /*}}}*/
            /* popup_js {{{*/
            case "LOG_MAP_DIV_popup"     : o_UI_CB_toggle_panel_checkbox_row( el               ); break;
            case "P_LOG2_ERROR"          :
            case "P_LOG4_STORE"          :
            case "P_LOG6_UI"             :
            case "P_LOG7_TABS"           :
            case "P_LOG8_EVENTS"         :
            case "P_LOG0_MORE"           :
            /*..........................*/ o_send_LOG_MAP_toggle_message    ( el.id, el.checked);
          //if(el.checked)                 o_UI_CB_toggle_log_map_div_ERROR ( el.parentElement.parentElement.parentElement );
            break;

            /*}}}*/
            /* ... {{{*/
            case "":
if( log_this) log("%c--- o_UI_CB: ["+log_map_div+"] %c el.id=["+el.id+"]", lb6, lb0);
            break;

            default:
if( log_this) log("%c*** o_UI_CB: ["+log_map_div+"] .. case default .. el.id=["+el.id+"] ***", lb2);
            break;
            /*}}}*/
        }

        o_storage_sync_set("called by o_UI_CB to save [LOG_MAP]");
    }
    /*}}}*/
    /* RESET BUTTON {{{*/
    if(clear_button)
    {
        o_ui_STORAGE_CLEAR( clear_button );

    }
    /*}}}*/
};
/*}}}*/
/*_ o_UI_CB_toggle_panel_checkbox_row {{{*/
let o_UI_CB_toggle_panel_checkbox_row = function(panel)
{
    let input_list  = panel.getElementsByTagName("INPUT");
if(LOG_MAP.O_LOG6_UI) log("%c o_UI_CB_toggle_panel_checkbox_row("+panel.id+"): %c input_list.length=["+ input_list.length+"]", lb6,lb0);

    let check_state;
    for(let i=0; i<input_list.length; ++i)
    {
        let el = input_list[i];
        if(i == 0)   check_state = !el.checked;           /* invert first of row state ... for all row entries */
        el.checked = check_state;                         /* SYNC options_js UI */
        o_send_LOG_MAP_toggle_message(el.id, el.checked); /* STORE OPTION */
    }

    /* LOG AND UPDATE OPTIONS UI */
    if(panel.id == "LOG_MAP_DIV_options") o_sync_get_LOG_MAP_CB({});
};
/*}}}*/
///*_ o_UI_CB_toggle_log_map_div_ERROR {{{*/
//let o_UI_CB_toggle_log_map_div_ERROR = function(panel)
//{
//    let input_list  = panel.getElementsByTagName("INPUT");
////if(LOG_MAP.O_LOG6_UI)
//log("%c o_UI_CB_toggle_log_map_div_ERROR("+panel.id+"): %c input_list.length=["+ input_list.length+"]", lb6,lb0);
//
//    for(let i=0; i<input_list.length; ++i) {
//        let el =   input_list[i];
//        if( el.id.includes("_ERROR") ) {
//            el.checked = true;
//            o_send_LOG_MAP_toggle_message(el.id, true);
//            break;
//        }
//    }
//
//};
///*}}}*/
/*_ o_send_LOG_MAP_toggle_message {{{*/
let o_send_LOG_MAP_toggle_message = function(el_id, el_checked)
{
if(LOG_MAP.O_LOG6_UI) log("%c o_send_LOG_MAP_toggle_message%c("+el_id+" , "+el_checked+")", lb6,lb0);
    switch(el_id)
    {
        case "O_LOG2_ERROR"     : LOG_MAP.O_LOG2_ERROR   = el_checked; break;
        case "O_LOG3_GET"       : LOG_MAP.O_LOG3_GET     = el_checked; break;
        case "O_LOG4_SET"       : LOG_MAP.O_LOG4_SET     = el_checked; break;
        case "O_LOG5_SUCCESS"   : LOG_MAP.O_LOG5_SUCCESS = el_checked; break;
        case "O_LOG6_UI"        : LOG_MAP.O_LOG6_UI      = el_checked; break;

        default:
        let message
            = {   set_log_map   : el_id
                , set_log_state : el_checked
                , caller        : O_SCRIPT_ID
            };
if(LOG_MAP.O_LOG6_UI) log_object("message", message, lb1);
        try {
            chrome.runtime.sendMessage( message );
        }
        catch(ex) { alert(O_SCRIPT_ID+" ERROR:\n"+ ex); }
    }
};
/*}}}*/
/*_ o_sync_csp_filter_checked_state {{{*/
let o_sync_csp_filter_checked_state = function(checked_id)
{
if(LOG_MAP.O_LOG6_UI) log_console_clear("o_sync_csp_filter_checked_state");
if(LOG_MAP.O_LOG6_UI) log("%c o_sync_csp_filter_checked_state%c("+checked_id+")", lbR,lb0);

    /* RADIO BHEVIOR */
    let id;
    id = FILTER3_REMOVE  ; document.getElementById(id).checked = (id == checked_id);
    id = FILTER4_CUSTOM  ; document.getElementById(id).checked = (id == checked_id);
    id = FILTER5_RELAX   ; document.getElementById(id).checked = (id == checked_id);
    id = FILTER6_NONE    ; document.getElementById(id).checked = (id == checked_id);
    id = LOG_PANEL       ; document.getElementById(id).checked = (id == checked_id);

    /* ...others retain user-action-state */
};
/*}}}*/

/* EVENT [csp_filter] */
/*_ o_on_set_csp_filter_CB {{{*/
let o_on_set_csp_filter;
let o_on_set_csp_filter_CB = function(csp_filter,caller)
{
if(LOG_MAP.O_LOG6_UI) log("%c o_on_set_csp_filter_CB%c("+csp_filter+", caller=["+caller+"])", lb6,lb0);

    o_ui_show_panel(FILTER_TEXTAREA);

    let textarea = document.getElementById( FILTER_TEXTAREA );

    if(csp_filter == "input") {
        chrome.runtime.sendMessage({ csp_filter:csp_filter , csp_json:textarea.value , caller:O_SCRIPT_ID }, o_on_set_csp_filter_response_handler);
    }
    else {
        /* SELECT CURRENT FILTER */
        o_on_set_csp_filter = csp_filter;

        /* UI SYNC */
        o_sync_csp_filter_checked_state(csp_filter);

        /* STORAGE SYNC */
        o_storage_sync_set("called by o_on_set_csp_filter_CB to save [csp_filter]");

        /* IPC SYNC */
        chrome.runtime.sendMessage({ csp_filter:csp_filter , csp_json:""             , caller:O_SCRIPT_ID }, o_on_get_csp_filter_response_handler);
    }


};
/*}}}*/
/*_ o_on_set_csp_filter_response_handler {{{*/
/*{{{*/
const   DEFAULT_BG_COLOR =     ""; const   DEFAULT_FG_COLOR =     ""; /* EXTENSION WORK CSP */
const    REMOVE_BG_COLOR = "#520"; const    REMOVE_FG_COLOR = "#F40"; /* DISCARDING ALL CSP */
const NO_FILTER_BG_COLOR = "#666"; const NO_FILTER_FG_COLOR = "#DDD"; /* wont work with CSP */
const    CUSTOM_BG_COLOR = "#EE0"; const    CUSTOM_FG_COLOR = "#444"; /* USER FILTERING CSP */
const   FAILURE_BG_COLOR = "#FBB"; const   FAILURE_FG_COLOR = "#000"; /* FAILURE FILTER CSP */

/*}}}*/
let o_on_set_csp_filter_response_handler = function(response)
{
if(LOG_MAP.O_LOG4_SET) log("%c o_on_set_csp_filter_response_handler", lb4);
if(LOG_MAP.O_LOG4_SET) log("...response=[%c"+response+"]", lb4);

    if(response == undefined) return;

    let success_failure_or_value
        = response.startsWith("SUCCESS") ? "SUCCESS"
        : response.startsWith("FAILURE") ? "FAILURE"
        :                                  "FILTER SET"
    ;

    switch(success_failure_or_value)
    {
        case "FAILURE":
        o_show_FAILURE("SET FILTER RESPONSE: "+response);

        o_set_statusline_text( response );
        break;

        case "SUCCESS":

        o_show_SUCCESS( response );
        o_set_statusline_text("");
        break;

        default       :
        let textarea   = document.getElementById( FILTER_TEXTAREA );
        textarea.value = response;
        textarea.title = "";

        o_show_SUCCESS( success_failure_or_value );
        o_set_statusline_text("");
        break;
    }
};
/*}}}*/
/*_ o_on_get_csp_filter_response_handler {{{*/
let o_on_get_csp_filter_response_handler = function(response="NO RESPONSE")
{
if(LOG_MAP.O_LOG3_GET) log("%c o_on_get_csp_filter_response_handler", lb3);

    if( response.startsWith("FAILURE") )
    {
        o_show_FAILURE("GET FILTER RESPONSE: "+response);
        o_set_statusline_text(response);
    }
    else {
        let   textarea = document.getElementById( FILTER_TEXTAREA );
        textarea.value = response;
        textarea.title = "";

        o_show_SUCCESS("GET FILTER RESPONSE: "+response);//(response ? (response.length+" bytes") : response));
        o_set_statusline_text("");
    }
};
/*}}}*/

/*_ o_ui_show_panel {{{*/
let o_ui_show_panel_id;
let o_ui_show_panel = function(panel_id)
{
if(LOG_MAP.O_LOG6_UI) log("%c panel_id%c("+panel_id+")", lb6,lb0);

    let textarea = document.getElementById( FILTER_TEXTAREA );
    let log_div  = document.getElementById( LOG_MAP_DIV         );

    textarea.style.display = (panel_id == FILTER_TEXTAREA) ? "block" : "none";
    log_div .style.display = (panel_id != FILTER_TEXTAREA) ? "block" : "none";

    /* save panel selection */
    o_ui_show_panel_id = panel_id;
    o_storage_sync_set("called by o_ui_show_panel to save [o_ui_show_panel]");

};
/*}}}*/

/* EVENT LISTENERS */
/*_ o_addEventListeners {{{*/
let o_addEventListeners = function()
{
if(LOG_MAP.O_LOG6_UI) log("%c o_addEventListeners", lb6);

    /* CSP FILTER BUTTONS LISTENERS */
    let id, el;

    id = FILTER3_REMOVE ; if(el = document.getElementById(id)) { el.addEventListener("click",  o_build_box_listener(id)); }
    id = FILTER4_CUSTOM ; if(el = document.getElementById(id)) { el.addEventListener("click",  o_build_box_listener(id)); }
    id = FILTER5_RELAX  ; if(el = document.getElementById(id)) { el.addEventListener("click",  o_build_box_listener(id)); }
    id = FILTER6_NONE   ; if(el = document.getElementById(id)) { el.addEventListener("click",  o_build_box_listener(id)); }

    id = LOG_PANEL      ; if(el = document.getElementById(id)) { el.addEventListener("click",  o_build_box_listener(id)); }
    id = LOG_MAP_DIV    ; if(el = document.getElementById(id)) { el.addEventListener("click",  o_build_box_listener(id)); }
    id = STORAGE_CLEAR  ; if(el = document.getElementById(id)) { el.addEventListener("click",  o_build_box_listener(id)); }

    /* CSP FILTER TEXTAREA LISTENER */
    let textarea  = document.getElementById(FILTER_TEXTAREA);
    textarea.addEventListener("input", o_build_textarea_listener(o_UI_CB, 250));

};
/*}}}*/
/*_ o_build_box_listener {{{*/
let o_build_box_listener = function(ckeckbox_id)
{
    let buttons_listener
        = function(e) {
            o_sync_csp_filter_checked_state(   ckeckbox_id);
            o_UI_CB                        (e, ckeckbox_id);
        };
    return buttons_listener;
};
/*}}}*/
/*_ o_build_textarea_listener {{{*/
let o_build_textarea_listener = function(config_textarea_callback, delay)
{
if(LOG_MAP.O_LOG6_UI) log("%c o_build_textarea_listener", lb1);

    let timer = null;

    let handler = function() {
if(LOG_MAP.O_LOG6_UI) log("%c handler", lb1);
        timer = null;
        config_textarea_callback();
    };

    let listener = function()
    {
        if(timer !== null) window.clearTimeout(timer          );
        timer            = window.  setTimeout(handler, delay);
    };

    return listener;
};
/*}}}*/

/* STORAGE */
/*_ o_sync_get_LOG_MAP_CB {{{*/
let o_addEventListeners_has_been_called;

let o_sync_get_LOG_MAP_CB = function(items={})
{
    /* LOAD LOG_MAP [options_js] {{{*/
    /*(____________.____________________!=____________)________.________________=______.________________;*/

    if(typeof items.O_LOG2_ERROR        != "undefined") LOG_MAP.O_LOG2_ERROR    = items.O_LOG2_ERROR    ;
    if(typeof items.O_LOG3_GET          != "undefined") LOG_MAP.O_LOG3_GET      = items.O_LOG3_GET      ;
    if(typeof items.O_LOG4_SET          != "undefined") LOG_MAP.O_LOG4_SET      = items.O_LOG4_SET      ;
    if(typeof items.O_LOG5_SUCCESS      != "undefined") LOG_MAP.O_LOG5_SUCCESS  = items.O_LOG5_SUCCESS  ;
    if(typeof items.O_LOG6_UI           != "undefined") LOG_MAP.O_LOG6_UI       = items.O_LOG6_UI       ;



    if(typeof items.O_LOG0_MORE         != "undefined") LOG_MAP.O_LOG0_MORE     = items.O_LOG0_MORE     ;
    /*(____________.____________________!=____________)________.________________=______.________________;*/

    let some_log
        =  LOG_MAP.O_LOG2_ERROR     /* _2_ */
        || LOG_MAP.O_LOG3_GET       /* _3_ */
        || LOG_MAP.O_LOG4_SET       /* _4_ */
        || LOG_MAP.O_LOG5_SUCCESS   /* _5_ */
        || LOG_MAP.O_LOG6_UI        /* _6_ */
                                    /* _7_ */
                                    /* _8_ */
                                    /* _9_ */
    ;
    if(some_log) LOG_MAP.O_LOG2_ERROR = true;

    if(LOG_MAP.O_LOG0_MORE) log("%c o_sync_get_LOG_MAP_CB", lb1);
    if(LOG_MAP.O_LOG0_MORE) log_object("items", items, lb1);
    if(some_log           ) log_LOG_MAP();

    /*}}}*/
    /* UPDATE UI {{{*/

    o_UI_titles_to_tooltips();

    o_UI_sync_settings_el( items );

    if(typeof items.o_on_set_csp_filter != "undefined")
        o_on_set_csp_filter_CB(items.o_on_set_csp_filter , "o_sync_get_LOG_MAP_CB");
//  else
//      chrome.runtime.sendMessage({ csp_filter:"FILTER5_RELAX", csp_json:"" , caller:O_SCRIPT_ID }, o_on_get_csp_filter_response_handler);

    if(typeof items.o_ui_show_panel_id  != "undefined") o_ui_show_panel( items.o_ui_show_panel_id  );

    /*}}}*/
    /* ADD LISTENERS {{{*/
    if(! o_addEventListeners_has_been_called )
    {
        o_addEventListeners_has_been_called = true;
        o_addEventListeners();
    }

    /*}}}*/
};
/*}}}*/
/*_ o_ui_STORAGE_CLEAR {{{*/
/*{{{*/
let o_ui_STORAGE_CLEAR_timer;
let clear_button;
/*}}}*/
let o_ui_STORAGE_CLEAR = function(button_id)
{
    if( !o_ui_STORAGE_CLEAR_timer )
    {
if(LOG_MAP.O_LOG2_ERROR) log("%c o_ui_STORAGE_CLEAR", lb5);

        clear_button = document.getElementById(button_id).parentElement.parentElement;
        clear_button.classList.remove("on_standby");
        clear_button.classList.add   ("on_hold");

        o_ui_STORAGE_CLEAR_timer = window.setTimeout(o_ui_STORAGE_CLEAR, 3000);
    }
    else if(button_id) {
if(LOG_MAP.O_LOG2_ERROR) log("%c o_ui_STORAGE_CLEAR: CLEAR DISMISSED", lb6);

        clear_button.classList.remove("on_hold");
        clear_button.classList.add   ("on_standby");

        window.clearTimeout(o_ui_STORAGE_CLEAR_timer);
        o_ui_STORAGE_CLEAR_timer = null;
    }
    else {
if(LOG_MAP.O_LOG2_ERROR) log("%c o_ui_STORAGE_CLEAR: CLEAR COMMIT", lb7);

        clear_button.classList.remove("on_hold");
        clear_button.classList.add   ("on_standby");

        o_ui_STORAGE_CLEAR_timer = null;

        chrome.storage.sync.clear();
        document.location.reload();
    }

};
/*}}}*/
/*_ o_storage_sync_set {{{*/
let o_storage_sync_set = function(caller)
{
let log_this = LOG_MAP.O_LOG6_UI;
if( log_this) log("%c o_storage_sync_set: %c "+caller, lb1, lbR+lf4);

    let items
        = { B_LOG1_MESSAGE      : document.getElementById( "B_LOG1_MESSAGE"   ).checked
        ,   B_LOG2_ERROR        : document.getElementById( "B_LOG2_ERROR"     ).checked
        ,   B_LOG3_PRESERVE     : document.getElementById( "B_LOG3_PRESERVE"  ).checked
        ,   B_LOG4_PARSE        : document.getElementById( "B_LOG4_PARSE"     ).checked
        ,   B_LOG5_ONREQUEST    : document.getElementById( "B_LOG5_ONREQUEST" ).checked
        ,   B_LOG6_ONHEADER     : document.getElementById( "B_LOG6_ONHEADER"  ).checked
        ,   B_LOG7_TABS         : document.getElementById( "B_LOG7_TABS"      ).checked
        ,   B_LOG8_STORE        : document.getElementById( "B_LOG8_STORE"     ).checked
        ,   B_LOG9_STAGE        : document.getElementById( "B_LOG9_STAGE"     ).checked
        ,   B_LOG0_MORE         : document.getElementById( "B_LOG0_MORE"      ).checked

        ,   O_LOG2_ERROR        : document.getElementById( "O_LOG2_ERROR"     ).checked
        ,   O_LOG3_GET          : document.getElementById( "O_LOG3_GET"       ).checked
        ,   O_LOG4_SET          : document.getElementById( "O_LOG4_SET"       ).checked
        ,   O_LOG5_SUCCESS      : document.getElementById( "O_LOG5_SUCCESS"   ).checked
        ,   O_LOG6_UI           : document.getElementById( "O_LOG6_UI"        ).checked
        ,   O_LOG0_MORE         : document.getElementById( "O_LOG0_MORE"      ).checked

        ,   P_LOG2_ERROR        : document.getElementById( "P_LOG2_ERROR"     ).checked
        ,   P_LOG4_STORE        : document.getElementById( "P_LOG4_STORE"     ).checked
        ,   P_LOG6_UI           : document.getElementById( "P_LOG6_UI"        ).checked
        ,   P_LOG7_TABS         : document.getElementById( "P_LOG7_TABS"      ).checked
        ,   P_LOG8_EVENTS       : document.getElementById( "P_LOG8_EVENTS"    ).checked
        ,   P_LOG0_MORE         : document.getElementById( "P_LOG0_MORE"      ).checked

        ,   o_on_set_csp_filter : o_on_set_csp_filter
        ,   o_ui_show_panel_id  : o_ui_show_panel_id
    };

if( log_this) log("STORAGE SYNC SET %c"+log_json(items), lbR);
    try {
        chrome.storage.sync.set( items );
    }
    catch(ex) { alert(O_SCRIPT_ID+" ERROR:\n"+ ex); }
};
/*}}}*/
/*_ o_UI_sync_settings_el {{{*/
let o_UI_sync_settings_el = function(items)
{
if(LOG_MAP.O_LOG6_UI) log("%c o_UI_sync_settings_el", lb6);

    /* PANELS containing some checked el */
    let el_checked_panels = [];

    Object.keys(items).forEach(
        function(key)
        {
            let     el = document.getElementById(key);
            if(     el
                && (el.type == "checkbox" )
                && (el.id.includes("_LOG"))
            ) {
                el.checked = items[key];
                if(el.checked)
                {
                    let panel = el.parentElement.parentElement.parentElement;
                    if( panel && !el_checked_panels.includes(panel))
                        el_checked_panels.push(panel);
                }

if(LOG_MAP.O_LOG6_UI) log("%c"+key+"=%c"+items[key], lb1, lb0);
            }
        }
    );

    /* FORCE LOG2_ERROR .. f(one or more el checked) */
  //for(let i = 0; i< el_checked_panels.length; ++i) o_UI_CB_toggle_log_map_div_ERROR( el_checked_panels[i] );

};
/*}}}*/

/* POPUP UI */
chrome.storage.sync.get(null, o_sync_get_LOG_MAP_CB);


