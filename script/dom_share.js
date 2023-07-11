/* dom_share_js */
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
/* globals console */
/* globals window, document, localStorage */

/* globals dom_data    */
/* globals dom_fly     */
/* globals dom_log     */
/* globals dom_prop    */
/* globals dom_sticky */
/* globals dom_store   */
/* globals dom_tools   */
/* globals dom_util    */

/* exported dom_share, DOM_SHARE_JS_TAG */

/* eslint-disable no-warning-comments */
/* eslint-disable dot-notation        */

const DOM_SHARE_JS_ID       = "dom_share_js";
const DOM_SHARE_JS_TAG      = DOM_SHARE_JS_ID   +" (230707:22h:12)";
/*}}}*/
let dom_share   = (function() {
"use strict";
let   DOM_SHARE_LOG         = false;
let   DOM_SHARE_TAG         = false;

/* IMPORT */
/*{{{*/
/* eslint-disable no-unused-vars */
/*➔ t_share_IMPORT {{{*/
/*{{{*/
/*....................................*/
let t_data     = {}        ;    /* 05 */
let t_log      = {}        ;    /* 06 */
let t_util     = {}        ;    /* 07 */
/*t t_i18n     = {}        ; */ /* 08 */
let t_prop     = {}        ;    /* 09 */
let t_store    = {}        ;    /* 10 */
let t_fly      = {}        ;    /* 11 */
/*....................................*/
/*  t_wording  = {}        ; */ /* 12 */
/*  t_select   = {}        ; */ /* 13 */
/*  t_slot     = {}        ; */ /* 14 */
/*....................................*/
/*  t_hide     = {}        ; */ /* 15 */
/*  t_view     = {}        ; */ /* 16 */
let t_sticky   = {}        ;    /* 17 */
/*  t_seek     = {}        ; */ /* 18 */
/*  t_share    = {}        ; */ /* 19 */
/*....................................*/
/*  t_grid     = {}        ; */ /* 20 */
/*  t_gutter   = {}        ; */ /* 21 */
/*....................................*/
/*  t_ipc      = {}        ; */ /* 22 */
let t_tools    = {}        ;    /* 23 */
/*....................................*/
/*}}}*/
let t_share_IMPORT  = function(log_this)
{
/* LOAD {{{*/
/* ...................................*/
    t_data    = dom_data   ;    /* 05 */
    t_log     = dom_log    ;    /* 06 */
    t_util    = dom_util   ;    /* 07 */
/*  t_i18n    = dom_i18n   ; */ /* 08 */
    t_prop    = dom_prop   ;    /* 09 */
    t_store   = dom_store  ;    /* 10 */
    t_fly     = dom_fly    ;    /* 11 */
/* ...................................*/
/*  t_wording = dom_wording; */ /* 12 */
/*  t_select  = dom_select ; */ /* 13 */
/*  t_wot     = dom_wot    ; */ /* 13 */
/*  t_slot    = dom_slot   ; */ /* 14 */
/* ...................................*/
/*  t_hide    = dom_hide   ; */ /* 15 */
/*  t_view    = dom_view   ; */ /* 16 */
    t_sticky  = dom_sticky ;    /* 17 */
/*  t_seek    = dom_seek   ; */ /* 18 */
/*  t_share   = dom_share  ; */ /* 19 */
/* ...................................*/
/*  t_grid    = dom_grid   ; */ /* 20 */
/*  t_gutter  = dom_gutter ; */ /* 21 */
/* ...................................*/
/*  t_ipc     = dom_ipc    ; */ /* 22 */
    t_tools   = dom_tools  ;    /* 23 */
/* ...................................*/
/*}}}*/
    share_INTERN();
    /* MODULE LOGGING TAGGING {{{*/
    DOM_SHARE_LOG = DOM_SHARE_LOG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_SHARE_LOG"));
    DOM_SHARE_TAG = DOM_SHARE_TAG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_SHARE_TAG"));

    /*}}}*/
if(log_this) log("%c 18 SHARE", lbH+lf8);
};
/*}}}*/
/*_   share_INTERN {{{*/
/*{{{*/
/* t_data */
let CSS_FLY_CLIPBOARD;
let CSS_MAILTO;
let DOUBLE_QUOTE;
let LF = String.fromCharCode(10);
let SYMBOL_CHECK_MARK;
let SYMBOL_HEAVY_RIGHT_ARROW;
let SYMBOL_HID;
let SYMBOL_NOT_CHECKED;
let TAB= String.fromCharCode( 9);

/* t_log */
let LOG_MAP;
let lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;
let log, logBIG, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;

/*}}}*/
let   share_INTERN = function()
{
    /* t_data {{{*/
    CSS_FLY_CLIPBOARD           = t_data.CSS_FLY_CLIPBOARD;
    CSS_MAILTO                  = t_data.CSS_MAILTO;
    DOUBLE_QUOTE                = t_data.DOUBLE_QUOTE;
    LF                          = t_data.LF;
    SYMBOL_CHECK_MARK           = t_data.SYMBOL_CHECK_MARK;
    SYMBOL_HEAVY_RIGHT_ARROW    = t_data.SYMBOL_HEAVY_RIGHT_ARROW;
    SYMBOL_HID                  = t_data.SYMBOL_HID;
    SYMBOL_NOT_CHECKED          = t_data.SYMBOL_NOT_CHECKED;
    TAB                         = t_data.TAB;

    /*}}}*/
    /* t_log {{{*/
    LOG_MAP = t_log.LOG_MAP;

    ({ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX } = t_log.LOG_BG_CSS);
    ({ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX } = t_log.LOG_FG_CSS);
    ({ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb           } = t_log.LOG_XX_CSS);

    log                 = t_log.log;
    logBIG              = t_log.logBIG;
    logXXX              = t_log.logXXX;
    log_caller          = t_log.log_caller;
    log_json_one_liner  = t_log.log_json_one_liner;
    log_key_val         = t_log.log_key_val;
    log_key_val_group   = t_log.log_key_val_group;
    /*}}}*/
};
/*}}}*/
/* eslint-enable  no-unused-vars */
/*}}}*/

/* CONST */
/*{{{*/
/* RegExp {{{*/
/*{{{
const regex_JSON_L = new RegExp("\\n*\\[\\n*",  "");
const regex_JSON_R = new RegExp("\\n*\\]\\n*",  "");
}}}*/

/*{{{
:!start explorer "https://www.lucidchart.com/techblog/2014/12/02/definitive-guide-copying-pasting-javascript"
}}}*/
/*}}}*/
/* MAILER_IMPORT_INSTRUCTIONS .. FOOTER_EXPORT_INSTRUCTION {{{*/

const MAILTO_SUBJ          = "RTabs export: ";
const MAILTO_BODY_DOMAIN   =       "domain: ";
const MAILTO_BODY_HOSTNAME =     "hostname: ";
const MAILTO_BODY_PAGE_PFX =     "page_pfx: ";
/*{{{
const MAILTO_BODY_PAGE_URL =     "page_url: ";
}}}*/

const DATA_TEXT_LENGH_MAX        = 8192;

const MAILER_SEP_LINE
    =     "________________________________________________________________________________";

const MAILER_IMPORT_INSTRUCTIONS
    =     MAILER_SEP_LINE
    + LF+ "RECEIVING MAIL PROCEDURE .. (IMPORT-SIDE):"
    + LF+ "1 . copy this message body to the clipboard .. (select all is ok)"
    + LF+ "2 . then click navigator import button"
    + LF+ MAILER_SEP_LINE
;

const NAVIGATOR_PASTE_INSTRUCTIONS
    =     MAILER_SEP_LINE
    + LF
    + LF+ "NAVIGATOR IMPORT INSTRUCTIONS:"
    + LF
    + LF+ "1 . copy mail body to the clipboard"
    + LF+ "2 . click here when ready"
    + LF+ "3 . then paste clipboard content here"
;

/*
const BODY_EXPORT_CLIPBOARD...
 * NOTE:
 * USER MUST PASTE CLIPBOARD CONTENTS
 * AS BODY COMPONENT WOULD BE TOO BIG FOR A MAILTO SCHEME URL
 */

const FOOTER_EXPORT_INSTRUCTION
    = LF+"PASTE CLIPBOARD CONTENTS HERE"+LF;
/*{{{
const FOOTER_EXPORT_INSTRUCTION
    = LF+ MAILER_SEP_LINE
    + LF+ "EXPORT-SIDE - SENDING MAIL PROCEDURE:"
    + LF+ "1. current web-page storage has been saved into the clipboard"
    + LF+ "2. you should paste its content inside this email body"
    + LF+ "3. then you can send this email"
    + LF+ MAILER_SEP_LINE
    + LF
    + LF+ "IMPORT-SIDE - IMPORTING PROCEDURE:"
    + LF+ "...follow import instructions"
    + LF+ "...inserted at the top of this message"
    + LF+ MAILER_SEP_LINE
;
}}}*/

/*}}}*/
/*}}}*/

/*➔ t_share1_EXPORT {{{*/
let t_share1_EXPORT = function(e_target)
{
/*{{{*/
let   caller = "t_share1_EXPORT";
let log_this = DOM_SHARE_LOG || LOG_MAP.T7_SHARE;

/*}}}*/
if( log_this) t_log.log_TOP(caller, lf1);
    /* LOCATION URL {{{*/
    let domain   = t_util.get_url_domain(String(window.location) );
    let site_pfx = t_store.t_store_get_site_pfx();
    let page_pfx = t_store.t_store_get_page_pfx();

/*{{{*/
if(log_this) {
    log_key_val_group("LOCATION .. URL DOMAIN HOST PAGE"
                      , {   "location" : window.location
                          ,     "href" : window.location.href
                          , "protocol" : window.location.protocol
                          ,   "origin" : window.location.origin
                          ,              domain
                          , "hostname" : window.location.hostname
                          , "pathname" : window.location.pathname
                          ,              site_pfx
                          ,              page_pfx
                      }
                      , lf1
                      , true);
/*{{{
    console.table(window.location);
    [     "https://blog.dotnetframework.org/2016/06/07/upload-ftp-using-javascript-only/"
        , "https://ivan:iwi@remotetabs.com:81/dev/rtabs/screenshots.html"
        , "https://remotetabs.com:81/dev/rtabs/screenshots.html"
        , "https://www.google.com/search?ei=bQbDXOaSMKKLlwSf04LAAg&q=personal+browser+storage&oq=personal+browser+storage&gs_l=psy-ab.3..35i39.5295.6837..7279...0.0..0.152.437.6j1....2..0....1..gws-wiz.......0i71j0i7i30j0i8i7i30.hEQUN1gZyxY"
        , "ftp://anonymous:iwi@remotetabs.com:21/dev/rtabs/screenshots.html"
        , "ftp://ivan:iwi@NAS1:21/"
        , "ftp://anonymous:anypassword@NAS1:21/"
        , "ftp://anonymous:@NAS1:21/"
        , "ftp://anonymous@NAS1:21/"
        , "ftp://NAS1:21/"
    ].forEach( function(url) { log_key_val_group(url, t_util.parseURL(url), lf1, true); } );
}}}*/
}
/*}}}*/
    /*}}}*/
    /* MAILTO [onclick] {{{*/
    let export_email
        = "ivanw@orange.fr";

    let export_subject
        =     MAILTO_SUBJ + page_pfx;

    let mailto_onclick_js
        =  "document.location="
        +             DOUBLE_QUOTE
        +             "mailto:?to="     + encodeURI( export_email              )
        +                    "&subject="+ encodeURI( export_subject            )
        +                    "&body="   + encodeURI( FOOTER_EXPORT_INSTRUCTION )
        +             DOUBLE_QUOTE;

    /*}}}*/
    /* TOOL [EXPORT] {{{*/
    if(                        e_target
       && !t_util.has_el_class(e_target, CSS_MAILTO))
    {
        t_util.add_el_class(   e_target, CSS_MAILTO);
                               e_target.setAttribute("onclick", mailto_onclick_js);
    }
    /*}}}*/
    /* TOOLTIP {{{*/
    let mailto_link
        = "<em class='"         + CSS_MAILTO+" cc5 big'"+LF
        +  " onclick='"         + mailto_onclick_js     +"'"+LF
        + ">CLICK TO EXPORT TO "+ export_email          +"</em>"
    ;

if(log_this) log("%c"+mailto_link, lbF+lf1);

    t_fly.t_fly_tooltip_add( mailto_link );
    /*}}}*/
/*{{{*/
/*
log("%c FTP %c https://github.com/sergi/jsftp/blob/master/lib/jsftp.js", lb4, lbb);
:!start explorer "https://github.com/sergi/jsftp/blob/master/lib/jsftp.js"
:!start explorer "C:\LOCAL\STORE\DEV\PROJECTS\ARCHIVES\BAK"
*/
/*{{{
    var ftp = new FtpConnection("ftp://192.168.1.4/") ;
    ftp.login("anonumous", "password");

    ftp.cd("project")
    ftp.put(file,"test_file.psd") ;

    ftp.close()
}}}*/
/*}}}*/
if( log_this) t_log.log_BOT(caller, lf1);
};
/*}}}*/

/*➔ t_share2_MAILTO_UI {{{*/
/*{{{*/
let export_mail_body;

/*}}}*/
let t_share2_MAILTO_UI = function(e_target) /* eslint-disable-line complexity */
{
/*{{{*/
let   caller = "t_share2_MAILTO_UI";
let log_this = DOM_SHARE_LOG || LOG_MAP.T7_SHARE;

/*}}}*/
if( log_this) t_log.log_TOP(caller, lf2);
    /* [site_pfx] [page_pfx] {{{*/
    let site_pfx        = t_store.t_store_get_site_pfx();
    let page_pfx        = t_store.t_store_get_page_pfx();
    let page_pfx_length = page_pfx.length;

if(log_this || DOM_SHARE_TAG) {
    t_fly.t_fly_tooltip_add("<span class='fg0'>Site</span> <span class='fg8'>"+ site_pfx +"</span>");
    t_fly.t_fly_tooltip_add("<span class='fg0'>Page</span> <span class='fg8'>"+ page_pfx +"</span>");
}
    /*}}}*/
    /* STORAGE .. [EXPORT] .. [SHOW] {{{*/
    let export_key_val_array = [];
    let tooltip_keys         = [];
    for(let   i = localStorage.length-1; i>=0; --i)
    {
        let key = localStorage.key(i);
        let val = localStorage[key];

        if(!key.startsWith(site_pfx) && !key.startsWith(page_pfx)) continue;

        let {shared_item, not_shared_item, tool_item} = share_FILTER(key,val);

        if(  shared_item || tool_item || !not_shared_item)
        {
if( log_this) log("%c export_key_val_array.push({"+key+", "+val+"})", lf4);

            export_key_val_array.push({ key , val });
        }
        /* tooltip filter */
        let a_stored_bag_array = (key.indexOf("_arr") >= 0);
        let not_sel_bag        = (key.indexOf("sel_") <  0);

        if(a_stored_bag_array && not_sel_bag)
            tooltip_keys.push( key );
    }
    /*}}}*/
    /* TOOLTIP BAGS .. [pat off alt bak] {{{*/
if(log_this || DOM_SHARE_TAG) {
    tooltip_keys         = tooltip_keys        .sort();
    tooltip_keys.forEach( (key) => {
        let       val = localStorage[key];
        let       csv = (val == null) ? "" : JSON.parse(val).join(",");
        let className = "";

        if( key.startsWith(page_pfx) )
        {
            key       = key.slice(page_pfx_length+1); /* drop the page_pfx prefix */
            className = key;
        }

        let l_x
            = (key.indexOf("pat") >= 0) ? 4
            : (key.indexOf("off") >= 0) ? 5
            : (key.indexOf("alt") >= 0) ? 6
            : (key.indexOf("bak") >= 0) ? 2
            : 0;

        let html
            = "<div class='exp_bag "+className+"'>"
            +  "<em class='cc"+l_x+"'>"+ key +"</em>"
            +  "<br>"
            +  "<span class='fg"+l_x+"'>"+ t_util.strip_to_lines(csv) +"</span>"
            + "</div>"
        ;

        t_fly.t_fly_tooltip_add( html );

/*{{{
        log("%c"+ key +"%c"+ csv , lbL+lfX[l_x], lbR+lfX[l_x]);
}}}*/
    });
}
    /*}}}*/
    /* TO CLIPBOARD {{{*/
    let export_key_val_array_string_multiline;
    if( export_key_val_array.length > 0)
    {
        if( e_target)
            e_target.innerHTML += SYMBOL_CHECK_MARK;

        export_key_val_array_string_multiline = share2_MAILTO_CLIPBOARD( export_key_val_array );
    }
    /*}}}*/
    /* ... unless NOTHING TO EXPORT {{{*/
    else {
        if( e_target) {
            e_target.innerHTML += SYMBOL_NOT_CHECKED;
            e_target.onclick    = "";
            t_util.del_el_class(e_target, CSS_MAILTO);
        }

        let msg = "NOTHING TO EXPORT";
        t_tools.t_copy_innerHTML_to_clipboard(msg);

        t_fly.t_fly("<em class='big cc2'>"+msg+"</em>");
if( log_this) log("%c"+msg, lbH+lf2);
    }
    /*}}}*/
if( log_this) t_log.log_BOT(caller, lf2);
    return export_key_val_array_string_multiline;
};
/*}}}*/
/*_ share2_MAILTO_CLIPBOARD {{{*/
let share2_MAILTO_CLIPBOARD = function(export_key_val_array)
{
/*{{{*/
let   caller = "share2_MAILTO_CLIPBOARD";
let log_this = DOM_SHARE_LOG || LOG_MAP.T7_SHARE;

/*}}}*/
if( log_this) t_log.log_TOP(caller, lf2);
    /* COPY TO CLIPBOARD  .. [export_mail_body] {{{*/
    export_key_val_array                      = export_key_val_array.sort();
    let page_pfx                              = t_store.t_store_get_page_pfx();
    let page_url                              = String(window.location          || t_store.SITE_URL_TEMPLATE);
    let hostname                              =        window.location.hostname || t_store.SITE_URL_TEMPLATE;
    let domain                                = t_util.get_url_domain( page_url );
    let export_key_val_array_string           = JSON.stringify( export_key_val_array );

    let export_key_val_array_string_multiline = share_PRETTY_PRINT( export_key_val_array_string );

    let export_description
        =                             MAILTO_SUBJ          + page_pfx
        +                          LF                      + page_url
        +                          LF+MAILTO_BODY_DOMAIN   + domain
        + ((hostname != domain) ? (LF+MAILTO_BODY_HOSTNAME + hostname) : "")
        +                          LF+MAILER_SEP_LINE
        +                          LF
    ;

    export_mail_body
        =     "NOW, YOU CAN SEND THIS MAIL"
        +LF + MAILER_IMPORT_INSTRUCTIONS
        +LF + export_description
        +LF + export_key_val_array_string_multiline;

    t_tools.t_copy_innerHTML_to_clipboard( export_mail_body );

    /*}}}*/
    /* SHOW IN TRANSCRIPT .. (when transcript2 is showing) {{{*/
    let transcript2 = t_tools.t_get_transcript2();
    if( t_tools.t_tools_panel_is_selected( transcript2 ) )
    {
        t_log.log_TR_RESULT_set("<pre>"+ export_key_val_array_string_multiline +"</pre>");
    }
    /*}}}*/
/* LOG .. JSON.parse( export_key_val_array_string ) {{{*/
if( log_this ) {
    log_key_val_group("export_key_val_array"
                     , export_key_val_array
                     , lf2
                     , true);

    let export_key_val_array_parsed = JSON.parse( export_key_val_array_string );
    log_key_val_group("export_key_val_array_parsed"
                     , export_key_val_array_parsed
                     , lf7
                     , true);
}
/*}}}*/
if( log_this) t_log.log_BOT(caller, lf2);
return export_key_val_array_string_multiline;
};
/*}}}*/

/*➔ t_share3_IMPORT_UI {{{*/
/*{{{*/
let mailto_target;
let import_clipboard;

/*}}}*/
let t_share3_IMPORT_UI = function(e_target)
{
/*{{{*/
let   caller = "t_share3_IMPORT_UI";
let log_this = DOM_SHARE_LOG || LOG_MAP.T7_SHARE;

/*}}}*/
if( log_this) t_log.log_TOP(caller+": e_target=["+e_target.id+"]", lf3);
    /* CREATE CLIPBOARD CUT-PASTE CONTAINER {{{*/
    if(!import_clipboard)
    {
if( log_this) log("CREATE CLIPBOARD CUT-PASTE CONTAINER");

        mailto_target = e_target;

        import_clipboard = document.createElement("PRE");
        import_clipboard.id          = CSS_FLY_CLIPBOARD;
        import_clipboard.setAttribute("contenteditable", "true");
        import_clipboard.onpaste     = share3_PASTE;

    }
    else {
        t_util.del_el_class(import_clipboard, t_tools.CSS_FADING  );
        t_util.del_el_class(import_clipboard, t_tools.CSS_REMOVING);
    }
    /*}}}*/
    /* SETUP CLIPBOARD CUT-PASTE CONTAINER {{{*/
if( log_this) log("SHOWING NAVIGATOR_PASTE_INSTRUCTIONS");
    import_clipboard.innerHTML = NAVIGATOR_PASTE_INSTRUCTIONS;
    import_clipboard.blur_HTML = null;

    /*}}}*/
    /* FOCUS CLIPBOARD CUT-PASTE CONTAINER {{{*/
    t_fly.t_fly_tooltip_append_child( import_clipboard );

    t_tools.t_focus( import_clipboard );
    /*}}}*/
    /* SHOW BAGS {{{*/
if( log_this) log("SHOWING BAGS");
    t_tools.t_pat_bag_open(caller, "POPULATING BAGS FROM IMPORTED CSV");

    /*}}}*/
if( log_this) t_log.log_BOT(caller, lf3);
};
/*}}}*/
/*_ share3_PASTE {{{*/
/*{{{*/
/*
:!start explorer "https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event"
*/
/*}}}*/
let share3_PASTE = function(event)
{
/*{{{*/
let   caller = "share3_PASTE";
let log_this = DOM_SHARE_LOG || LOG_MAP.T7_SHARE;

/*}}}*/
if( log_this) t_log.log_TOP(caller, lf5);
    /* PASTE CLIPBOARD DATA {{{*/
    let data_text = (event.clipboardData || window.clipboardData).getData("text");
    if( data_text.length > DATA_TEXT_LENGH_MAX) data_text = data_text.substring(0,DATA_TEXT_LENGH_MAX);

if( log_this) log("data_text:"+LF+"%c"+data_text, lf5);

    /*}}}*/
    /* UI TO SHOW DATA SUMMARY {{{*/
    import_clipboard.blur_HTML =      null; /* CLEAR PREVIOUS CONTENT SHOWN ON FOCUS-OUT */
    import_clipboard.pasteHTML = SYMBOL_CHECK_MARK+ " <em class='big fg0'>IMPORTING "+data_text.length+" chars</em><br>";

    /*}}}*/
    /* PATCH PARSE EXTRACT LOAD {{{*/
    share5_DATA_TEXT( data_text );

    /*}}}*/
if( log_this) t_log.log_BOT(caller, lf5);
};
/*}}}*/

/*➔ t_share4_IMPORT_TEXT {{{*/
let t_share4_IMPORT_TEXT = function(data_text)
{
/*{{{*/
let   caller = "t_share4_IMPORT_TEXT";
let log_this = DOM_SHARE_LOG || LOG_MAP.T7_SHARE;

/*}}}*/
if( log_this) t_log.log_TOP(caller, lf5);

    if( data_text ) {

        if( data_text.length > DATA_TEXT_LENGH_MAX)
            data_text = data_text.substring(0,DATA_TEXT_LENGH_MAX);

if( log_this) log("data_text:"+LF+"%c"+data_text, lf5);

        share5_DATA_TEXT( data_text );
    }
    else {
        logBIG(caller+": NO TEXT TO IMPORT");
    }

if( log_this) t_log.log_BOT(caller, lf5);
};
/*}}}*/

/* DATA */
/*_ share5_DATA_TEXT {{{*/
let share5_DATA_TEXT = function(data_text)
{
/*{{{*/
let   caller = "share5_DATA_TEXT";
let log_this = DOM_SHARE_LOG || LOG_MAP.T7_SHARE;

if( log_this) log(caller);
/*}}}*/
    /* PATCH IMPORT STRING {{{*/
    let data_text_one_liner
        = t_util.strip_CR_LF( data_text );

    let import_key_val_array_string
        = share6_PATCH( data_text_one_liner );
    /*}}}*/
    /* JSON PARSE IMPORTED ITEMS {{{*/
    let { import_key_val_array , free_form_user_keywords } = share7_PARSE( import_key_val_array_string );

    /*}}}*/
    /* EXTRACT { data_hostname , data_page_pfx } FROM DATA {{{*/
    let { data_hostname , data_page_pfx } = share_get_host_page_from_data_text( data_text );

    /*}}}*/
    /*XXX pat_csv*/
    /* IF SOME [IMPORTED] .. REPLACE [CURRENT] {{{*/
if( log_this) log("%c import_key_val_array.length=["+import_key_val_array.length+"]", lbH+lf8);
    if( import_key_val_array.length > 0)
    {
        /* CHECK IMPORT MAILTO BUTTON {{{*/
        if( mailto_target )
            mailto_target.innerHTML    += SYMBOL_CHECK_MARK;

        if(import_clipboard)
            import_clipboard.pasteHTML += SYMBOL_CHECK_MARK+ " <em class='big fg0'>"+import_key_val_array.length+" {key , value} pairs</em>";
        /*}}}*/
        /* BACKUP ALL STORAGE .. TO RESTORE WHEN IMPORT FAILS {{{*/
        share8_BACKUP(free_form_user_keywords);

        /*}}}*/
        /* IMPORT {{{*/
        let import_failed
            = share9_IMPORT(import_key_val_array, data_hostname, data_page_pfx);

        /*}}}*/
        /* IF NOTHING IMPORTED .. RESTORE BACKUP {{{*/
        if( import_failed && !free_form_user_keywords )
        {
            t_fly.t_fly("<em class='cc2'>EMPTY .. RESTORING SAVED</em>");

            share8_RESTORE(data_hostname, data_page_pfx);
        }
        /*}}}*/
    }
    /*}}}*/
    /* SYNC UI ON IMPORTED ITEMS {{{*/
    log_this = (log_this || DOM_SHARE_TAG);

    let msg;
    msg = "IMPORT: SELECT TOOLS PANELS"; if(log_this) logBIG(msg, lf7); t_tools .t_TOOLS_panels_reload   (           );
/*{{{
    msg = "IMPORT: SELECT TOOLS MAP"   ; if(log_this) logBIG(msg, lf7); t_tools .t_load_TOOLS_MAP        (caller     );
}}}*/
    msg = "IMPORT: RELOAD PATTERN-CSV" ; if(log_this) logBIG(msg, lf2); t_tools .t_store_get_patterns_csv(        msg);
    msg = "IMPORT: OPEN   PATTERN-BAGS"; if(log_this) logBIG(msg, lf3); t_tools .t_pat_bag_open          (caller, msg);
    msg = "IMPORT: RESELECT PATTERNS"  ; if(log_this) logBIG(msg, lf5); t_tools .t_sel_pat_bag_all       (           );
    msg = "IMPORT: RELOAD STICKY TOOLS"; if(log_this) logBIG(msg, lf6); t_sticky.t_sticky_LOAD           (           );

    /*}}}*/
};
/*}}}*/
/*_ share6_PATCH {{{*/
let share6_PATCH = function(import_key_val_array_string) /* eslint-disable-line complexity */
{
/*{{{*/
let   caller = "share6_PATCH";
let log_this = DOM_SHARE_LOG || LOG_MAP.T7_SHARE;

/*}}}*/
if( log_this) t_log.log_TOP(caller, lf6);
    /* obvious start patching .. (selected line with LEADING COMMA) {{{*/
    if( import_key_val_array_string.startsWith(",")) {
        import_key_val_array_string = import_key_val_array_string.substring(1);

if( log_this) log("%c REMOVING LEADING COMMA", lbb+lf8);
    }
    /*}}}*/
if( log_this) t_log.console_dir("import_key_val_array_string", import_key_val_array_string);
    /* obvious start patching .. (selected line with LEADING BRACE) {{{*/
    if( import_key_val_array_string.startsWith("{")) {
        import_key_val_array_string = "["+import_key_val_array_string;

if( log_this) log("%c PATCHING START WITH A LEADING  BRACKET %c"+LF+share_PRETTY_PRINT(import_key_val_array_string), lbb+lf8, lf2);
    }
    /*}}}*/
    /* obvious end patching .. (selected line with TRAILING BARCKET) {{{*/
    if( import_key_val_array_string.endsWith  ("}")) {
        import_key_val_array_string =     import_key_val_array_string+"]";

if( log_this) log("%c PATCHING END   WITH A TRAILING BRACKET %c"+LF+share_PRETTY_PRINT(import_key_val_array_string), lbb+lf8, lf3);
    }
    /*}}}*/
    /* GOT STRICT JSON ARRAY SYNTAX {{{*/
    let format_start_ok = import_key_val_array_string.startsWith("[{");
    let format_ends_ok  = import_key_val_array_string.endsWith  ("}]");
    let s_idx;
    let e_idx;

    if(format_start_ok && format_ends_ok)
    {
if( log_this) log("%c GOT STRICT JSON ARRAY SYNTAX %c"+LF+share_PRETTY_PRINT(import_key_val_array_string), lbH+lf8, lf4);

    }
    /*}}}*/
    /* PATCH START .. SKIP MESSAGE HADER OR FIRST DAMAGED ITEM {{{*/
    if(!format_start_ok)
    {
        if(     (s_idx = import_key_val_array_string.indexOf(    "[{" )) >= 0)
        {
            import_key_val_array_string =      import_key_val_array_string.substring(s_idx  );
if( log_this) log("%c SKIPPING MESSAGE HEADER %c"+LF+share_PRETTY_PRINT(import_key_val_array_string), lbH+lf8, lf5);
        }

        else if((s_idx = import_key_val_array_string.indexOf(    " ,{")) >= 0)
        {
            import_key_val_array_string = "[" +import_key_val_array_string.substring(s_idx+2);
if( log_this) log("%c SKIPPING FIRST DAMAGED ITEM %c"+LF+share_PRETTY_PRINT(import_key_val_array_string), lbH+lf8, lf6);
        }
    }
    /*}}}*/
    /* PATCH END .. SKIP MESSAGE TRAILER OR LAST DAMAGED ITEM {{{*/
    if(!format_ends_ok)
    {
        if(     (e_idx = import_key_val_array_string.indexOf(    "}]" )) >  0)
        {
            import_key_val_array_string =      import_key_val_array_string.substring(0, e_idx+2);
if( log_this) log("%c SKIPPING MESSAGE TRAILER %c"+LF+share_PRETTY_PRINT(import_key_val_array_string), lbH+lf6, lf7);
        }

        else if((e_idx = import_key_val_array_string.lastIndexOf("} ,")) >  0)
        {
            import_key_val_array_string = import_key_val_array_string.substring(0, e_idx+1) + "]";
if( log_this) log("%c SKIPPING LAST DAMAGED ITEM %c"+LF+share_PRETTY_PRINT(import_key_val_array_string), lbH+lf6, lf7);
        }
    }
    /*}}}*/
    /* UNDERLINE .. (utf8 to ascii) {{{*/
    import_key_val_array_string
        = t_util.underline_from_utf8( import_key_val_array_string ); /* FIXME unparsed in C# RTabs designer from Android */

    /*}}}*/
/*{{{*/
if( log_this)
    log_key_val_group( "format"
                       , {   format_start_ok
                           , s_idx
                           , format_ends_ok
                           , e_idx
                       }
                       , lf6, false);

/*}}}*/
if( log_this) t_log.log_BOT(caller, lf6);
    return import_key_val_array_string.trim();
};
/*}}}*/
/*_ share7_PARSE {{{*/
let share7_PARSE = function( key_val_array_string )
{
/*{{{*/
let   caller = "share7_PARSE";
let log_this = DOM_SHARE_LOG || LOG_MAP.T7_SHARE;

/*}}}*/
if( log_this) t_log.log_TOP(caller, lf7);
    /* JSON PARSE IMPORTED ITEMS {{{*/
    let silent = !(log_this || DOM_SHARE_TAG);
    let import_key_val_array = t_util.JSON_parse(key_val_array_string, silent); /* eslint-disable-line new-cap */

    if(!Array.isArray( import_key_val_array ))
        import_key_val_array = [];

if( log_this) console.table( import_key_val_array );

    /*}}}*/
    /* FALLBACK TO PARSE FREE-FORM USER KEYWORDS {{{*/
    let free_form_user_keywords = (import_key_val_array.length == 0);

    if( free_form_user_keywords )
    {
        let page_pfx = t_store.t_store_get_page_pfx();

        import_key_val_array = t_util.get_import_key_val_array_from_free_form_data_text(page_pfx, key_val_array_string);

/*{{{
        t_fly.t_fly("FALLBACK TO FREE-FORM USER KEYWORDS:<br>"+LF+ import_key_val_array[0].val);
}}}*/
if(log_this || DOM_SHARE_TAG) log("FALLBACK TO FREE-FORM USER KEYWORDS:"+LF+import_key_val_array[0].val);
    }
    /*}}}*/
if( log_this) t_log.log_BOT(caller, lf7);

    return { import_key_val_array , free_form_user_keywords };
};
/*}}}*/

/* BACKUP REMOVE RESTORE */
/*_ share8_BACKUP {{{*/
let share8_BACKUP = function(free_form_user_keywords)
{
/*{{{*/
let   caller = "share8_BACKUP";
let log_this = DOM_SHARE_LOG || LOG_MAP.T7_SHARE;

/*}}}*/
if( log_this) t_log.log_TOP(caller, lf8);
    /* NO STORED ITEMS TO SAVE AND REMOVE {{{*/
    if(localStorage.length == 0)
    {

if(log_this || DOM_SHARE_TAG) log("%c"+caller+"%c NO STORED ITEMS TO SAVE AND REMOVE", lbL+lf8, lbR);
    }
    /*}}}*/
    /* filter on [site_pfx] and [page_pfx] {{{*/
    else {
        share8_REMOVE(free_form_user_keywords);
    }
    /*}}}*/
if( log_this) t_log.log_BOT(caller, lf8);
};
/*}}}*/
/*_ share8_REMOVE {{{*/
/*{{{*/
let removed_items_key_array = [];

/*}}}*/
let share8_REMOVE = function(free_form_user_keywords) /* eslint-disable-line complexity */
{
/*{{{*/
let log_this = DOM_SHARE_LOG || LOG_MAP.T7_SHARE;

/*}}}*/
    /* SAVE AND REMOVE FILTERED CURRENT STORAGE {{{*/
if( log_this || DOM_SHARE_TAG) log("%c REMOVING CURRENT STORAGE"+(free_form_user_keywords ? " (FREE FORM USER KEYWORDS)":""), lbb+lbH+lf8);

    removed_items_key_array = [];
    for(let   i = localStorage.length-1; i >= 0; --i)
    {
        let key = localStorage.key(i);
        let val = localStorage[key];
        let {shared_item, not_shared_item, tool_item} = share_FILTER(key,val);

        let   tool_item_to_remove = tool_item   && !free_form_user_keywords;
        let shared_item_to_remove = shared_item && !free_form_user_keywords;
/*{{{*/
if(log_this)
    log_key_val_group("FILTERED "+shared_item+" "+not_shared_item
                      , {   free_form_user_keywords
                          , key
                          , not_shared_item
                          , shared_item
                          , shared_item_to_remove
                          , tool_item_to_remove
                          , val : t_util.ellipsis(val)
                      }, lf0,true);
/*}}}*/

        if(shared_item_to_remove || tool_item_to_remove)
        {
/*{{{*/
if( log_this || DOM_SHARE_TAG) {
    let lfx
        = shared_item ? lf4
        : tool_item   ? lf7
        :               lf3
    ;
    log("%c REMOVING %c"+t_util.mPadStart(key,32)+"%c"+t_util.ellipsis(val,32)
        ,lbH+lf0    ,lbL+lfx                      ,lbR+lfx                    );
}
/*}}}*/
            removed_items_key_array.push(key);
        }
        else {
/*{{{*/
if( log_this) {
    let lfx = shared_item ? lf4 : lf8;
    log("%c LEAVING  "+shared_item+" "+not_shared_item+"%c"+t_util.mPadStart(key,32)+"%c"+t_util.ellipsis(val,32)
        ,lbH+lfx                                       ,lbL+lfx                      ,lbR+lfx                    );
}
/*}}}*/
        }
    }

    for(let i = 0; i < removed_items_key_array.length; ++i)
        t_store.delItem( removed_items_key_array[i] );

    /*}}}*/
    /* SYNC  PATTERN AND STICKY {{{*/
if( log_this || DOM_SHARE_TAG) log("%c REMOVING PATTERN AND STICKY", lbH+lf8);
        t_tools.t_dump_csv_and_sticky();

    /*}}}*/
/*{{{*/
if( log_this) {
    console.groupCollapsed("%c"+SYMBOL_HEAVY_RIGHT_ARROW+"%c"+removed_items_key_array.length+" ITEM SAVED AND REMOVED", lbb+lbH+lf8, lbb+lbH+lf8);

    log("removed_items_key_array:");
    console.table( removed_items_key_array );

    console.groupEnd();
}
/*}}}*/
};
/*}}}*/
/*_ share8_RESTORE {{{*/
/*{{{
let restore_key_val_array = []; //TODO
}}}*/

let share8_RESTORE = function()
{
/*{{{*/
let   caller = "share8_RESTORE";
let log_this = DOM_SHARE_LOG || LOG_MAP.T7_SHARE;

    if(removed_items_key_array.length == 0)
    {
if( log_this) log("%c"+caller+": NO SAVED ITEMS TO RESTORE", lbb+lbH+lf8);

        return;
    }

    let site_pfx = t_store.t_store_get_site_pfx();
    let page_pfx = t_store.t_store_get_page_pfx();
    let count    = 0;
/*}}}*/
if( log_this) t_log.log_TOP(caller, lf8);

    /* filter on [site_pfx] and [page_pfx] {{{*/
    for(let i = 0; i < removed_items_key_array.length; ++i)
    {
        let prefixed_key = removed_items_key_array[i];

/*{{{
        if(!prefixed_key.startsWith(site_pfx) && !prefixed_key.startsWith(page_pfx))
            continue;
}}}*/
        if(!t_store.t_store_is_a_shared_item(site_pfx,page_pfx,i+1,prefixed_key,log_this) )
            continue;

        let idx
            = prefixed_key.lastIndexOf(".");
        let key
            = (idx > 0)
            ?  prefixed_key.substring(idx + 1)
            :  "";

        if(key) {
            let val = removed_items_key_array[i];

if( log_this) log("...t_store.t_store_set_value('"+key+"' , '"+val+"')");
            t_store.t_store_set_value(key, val);
        }

        count += 1;
    }
    /*}}}*/
/*{{{*/
if( log_this) {
    let action = "ITEMS RESTORED";
    console.groupCollapsed("%c"+SYMBOL_HEAVY_RIGHT_ARROW+"%c"+count+" "+action, lbb+lbH+lf8, lbb+lbH+lf8);

    log("removed_items_key_array:");
    console.table( removed_items_key_array );

    console.groupEnd();
}
/*}}}*/
if( log_this) t_log.log_BOT(caller, lf8);
};
/*}}}*/

/* IMPORT */
/*_ share9_IMPORT {{{*/
let share9_IMPORT = function(import_key_val_array, data_hostname, data_page_pfx) /* eslint-disable-line complexity */
{
/*{{{*/
let   caller = "share9_IMPORT";
let log_this = DOM_SHARE_LOG || LOG_MAP.T7_SHARE;

/*}}}*/
if( log_this) t_log.log_TOP(caller, lf9);
    /* SITE AND PAGE FILTERS {{{*/
    let site_pfx    = t_store.t_store_get_site_pfx();
    let site_filter = (data_hostname && (data_hostname != "*")) ?  site_pfx : "";

    let page_pfx    = t_store.t_store_get_page_pfx();
    let page_filter = (data_page_pfx && (data_page_pfx != "*")) ?  page_pfx : "";

if( log_this) log("%c site_filter...=["+ site_filter  +"]", lbH+lf3);
if( log_this) log("%c page_filter...=["+ page_filter  +"]", lbH+lf3);

    /*}}}*/
if( log_this || DOM_SHARE_TAG) log("%c IMPORTING "+import_key_val_array.length+" ITEM"+((import_key_val_array.length > 1) ? "S":""), lbb+lbH+lf9);

    let t_fly_lines = "";
    let   data_keys = 0;
    let   site_keys = 0; let not_site_keys = 0;
    let   page_keys = 0; let not_page_keys = 0;

    for(let i = 0; i < import_key_val_array.length; ++i)
    {
        /* IMPORTED SHARED key val {{{*/
        let  prefixed_key = import_key_val_array[i].key;
        if( !prefixed_key ) continue;

        let not_site_key = (site_filter && !prefixed_key.startsWith( site_filter ));
        let not_page_key = (page_filter && !prefixed_key.startsWith( page_filter ));

        if( not_site_key && not_page_key )
        {
            if( not_site_key ) not_site_keys += 1;
            if( not_page_key ) not_page_keys += 1;
            continue;
        }

        data_keys += 1;
        site_keys += (site_filter && prefixed_key.startsWith( site_filter )) ? 1 : 0;
        page_keys += (page_filter && prefixed_key.startsWith( page_filter )) ? 1 : 0;

        let val = import_key_val_array[i].val;

        /*}}}*/
        /* STORE SHARED key val {{{*/
            let idx =              prefixed_key.lastIndexOf(".");
            let key = (idx > 0) ?  prefixed_key.substring  (idx + 1) :  "";
if( log_this) log("%c key...........=["+          key +"]", lbH+lf2);

            if( key ) {
/*{{{*/
if( log_this || DOM_SHARE_TAG) {
    let lfx = lfX[i % 10];
    log("%c IMPORTING %c"+t_util.mPadStart(key,32)+"%c"+t_util.ellipsis(val,32)
        ,lbH+lf9     ,lbL+lfx                      ,lbR+lfx                    );
}
/*}}}*/

                t_store.t_store_set_value(key, val);
                t_fly_lines +="<em class='fg9'>"+key+"</em> .. <em class='fg4'>"+val+"</em><br>";
            }
        /*}}}*/
    }
if( log_this) t_log.log_BOT(caller, lf9);

/*{{{*/
if(DOM_SHARE_TAG || DOM_SHARE_LOG)
    log("%c IMPORTED: %c"+data_keys+" data_keys %c"+site_keys+" site_keys %c"+page_keys+" page_keys"
                      ,lbH+lf9     ,lbL+lf9                  ,lbC+lf6                  ,lbR+lf5                   );

if(LOG_MAP.EV8_FLOATLOG || t_prop.get(t_data.FLOATLOG))
    t_fly.t_fly("<p class='bg9 info'>"
                + (                " <em class='fg3 big'>"+data_keys+" ITEMS IMPORTED   </em>"     )
                + "<br>"
                + (    site_keys ? " <em class='fg3'>"+    site_keys+"     for this SITE</em>" : "")
                + (not_site_keys ? " <em class='fg2'>"+not_site_keys+" not for this SITE</em>" : "")
                + "<br>"
                + (    page_keys ? " <em class='fg4'>"+    page_keys+"     for this PAGE</em>" : "")
                + (not_page_keys ? " <em class='fg2'>"+not_page_keys+" not for this PAGE</em>" : "")
                + "<hr>"
                + t_fly_lines
                +"</p>"
               );

if( log_this) t_store.t_store_log_site_and_page();
/*}}}*/

/*{{{
    if(data_keys == 0) t_tools.t_hide_hotspot();
}}}*/

    return false; /* NO ERROR */
};
/*}}}*/

/*_ share_FILTER {{{*/
let share_FILTER = function(key,val) /* eslint-disable-line no-unused-vars */
{
/*{{{*/
let   caller = "share_FILTER";
let log_this = DOM_SHARE_LOG || LOG_MAP.T7_SHARE;

/*}}}*/

    let       idx =                         key.lastIndexOf          ( "."     )       ;
    let        id = idx                   ? key.substring            ( idx + 1 ) : ""  ;
    let tool_item = id                    ? t_tools.t_get_shadow_tool( id      ) : null;
/*{{{
    let sticky_tool = tool_item        && tool_item.id.startsWith ("sticky_");
}}}*/

    let shared_item
        = key.includes(     "pat_arr"   ) ? "pat_arr"
        : key.includes(     "alt_arr"   ) ? "alt_arr"
        : key.includes(     "bak_arr"   ) ? "bak_arr"
        : key.includes(     "bin_arr"   ) ? "bin_arr"
        :                                   ""
    ;

    let not_shared_item
        = key.includes("fly_div"        ) ? "fly_div"
        : key.includes("sel_arr"        ) ? "sel_arr"
        : key.includes("SNAPSHOT"       ) ? "SNAPSHOT"
        : key.endsWith("_LOG"           ) ? "LOGGING"
        : key.endsWith("_TAG"           ) ? "TAGGING"
/*{{{
        : key.includes("window_scrollY" ) ? "window_scrollY"
        : key.includes("pivot"          ) ? "pivot"
        : key.includes("ratio_"         ) ? "ratio"
}}}*/
        :                                   ""
    ;

    /* EXPORTING A SNAPSHOT {{{*/
/*{{{
    if(   DOM_SHARE_TAG
       && (not_shared_item == "SNAPSHOT")
       && !key.endsWith(      "SNAPSHOT")
      ) {
logBIG("DOM_SHARE_TAG IS SET .. EXPORTING A SNAPSHOT ["+key+"]");

        not_shared_item = "";
    }
}}}*/
    /*}}}*/

/*{{{*/
if(log_this && id) {

    let l_x = (shared_item || not_shared_item) ? lbH : "";
    if     (   shared_item                   ) l_x += lf4;
    else if(   not_shared_item               ) l_x += lf7;
    else                                       l_x += lf0;

    log_key_val(  caller+"("+key+") .. SHARED ["+shared_item+"] .. NOT_SHARED ["+not_shared_item+"]"
                , { key
                  , id
                  , tool_item
/*{{{
                  , sticky_tool
}}}*/
                  , className : (tool_item && tool_item.className)
                  , shared_item
                  , not_shared_item
                } , l_x);
}
/*}}}*/

    return { shared_item , not_shared_item , tool_item };
};
/*}}}*/
/*_ share_PRETTY_PRINT {{{*/
const regex_JSON_BLOCK = new RegExp("\} *, *\{", "g");

let share_PRETTY_PRINT = function(s)
{
    return s.replace(regex_JSON_BLOCK, "}"+LF+",{");
};
/*}}}*/
/*_ share_get_host_page_from_data_text {{{*/
let share_get_host_page_from_data_text = function(data_text)
{
/*{{{*/
let   caller = "share_get_host_page_from_data_text";
let log_this = DOM_SHARE_LOG || LOG_MAP.T7_SHARE;

/*}}}*/
    let idx_from;
    let idx_to;

    /* hostname:     www.localhost.com */
    idx_from          = data_text.indexOf(MAILTO_BODY_HOSTNAME);
    idx_to            = data_text.indexOf(LF, idx_from);
    let data_hostname
        = ((idx_from > 0) && (idx_to   > 0))
        ? data_text.substring(idx_from + MAILTO_BODY_HOSTNAME.length, idx_to).trim()
        : "";

    /* page_pfx:     DEV_playground */
    idx_from          = data_text.indexOf(MAILTO_BODY_PAGE_PFX);
    idx_to            = data_text.indexOf(LF, idx_from);
    let data_page_pfx
        = ((idx_from > 0) && (idx_to   > 0))
        ? data_text.substring(idx_from + MAILTO_BODY_PAGE_PFX.length, idx_to).trim()
        : "";

if( log_this) log_key_val_group(caller, { data_hostname , data_page_pfx });
    return { data_hostname , data_page_pfx };
};
/*}}}*/

/* EXPORT */
/*{{{*/
return { name : "dom_share"
    , logging : (state) => DOM_SHARE_LOG = t_store.setItem("DOM_SHARE_LOG",state)
    , tagging : (state) => DOM_SHARE_TAG = t_store.setItem("DOM_SHARE_TAG",state)
    , t_share_IMPORT

    , t_share1_EXPORT
    , t_share2_MAILTO_UI
    , t_share3_IMPORT_UI
    , t_share4_IMPORT_TEXT
    , t_share_get_import_clipboard : () => import_clipboard
    /* DEBUG */
    , share_FILTER
};

/*}}}*/

}());
