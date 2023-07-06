/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_details                                                              │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
/* eslint-disable no-warning-comments   */

/* globals console                      */
/* globals document                     */
/* globals localStorage, setTimeout     */

/* globals dom_log                      */
/* globals dom_util                     */
/* globals dom_store                    */

/* exported dom_details, DOM_DETAILS_JS_TAG */

const DOM_DETAILS_JS_ID        = "dom_details_js";
const DOM_DETAILS_JS_TAG       = DOM_DETAILS_JS_ID  +" (220308:16h:37)";  /* eslint-disable-line no-unused-vars */
/*}}}*/
let dom_details         = (function() {
"use strict";
let   DOM_DETAILS_LOG   = false;
let   DOM_DETAILS_TAG   = false;

/* IMPORT {{{*/
/* eslint-disable no-unused-vars */
/*➔ t_details_IMPORT {{{*/
/* eslint-disable no-unused-vars */
let t_details_IMPORT    = function(_log_this,import_num)
{
    /* MODULE LOGGING TAGGING {{{*/
    DOM_DETAILS_LOG     = DOM_DETAILS_LOG   || localStorage_getItem("DOM_DETAILS_LOG");
    DOM_DETAILS_TAG     = DOM_DETAILS_TAG   || localStorage_getItem("DOM_DETAILS_TAG");

    /*}}}*/
    details_INTERN();
if(_log_this) log("➔ "+(import_num ? (import_num+" ") : "")+"t_details_IMPORT");
};
/*}}}*/
/*_   details_INTERN {{{*/
/*{{{*/

/* dom_log {{{*/
let lb0="", lb1="", lb2="", lb3="", lb4="", lb5="", lb6="", lb7="", lb8="", lb9="", lbX="";
let lbA="", lbB="", lbC="", lbF="", lbH="", lbL="", lbR="", lbS="", lbb=""                ;
let lf0="", lf1="", lf2="", lf3="", lf4="", lf5="", lf6="", lf7="", lf8="", lf9="", lfX="";

let log=console.log, logBIG=log, log_key_val=log, log_key_val_group=log;


/*}}}*/
/* dom_util {{{*/
let add_el_class;
let del_el_class;
let get_el_child_with_tag;
let get_el_sibling_with_tag;
let get_id_or_tag;
let get_id_or_tag_and_className;
let get_nodeXPath;
let get_tool;
let is_el_or_child_of_parent_el;

/*}}}*/
/* dom_store {{{*/

let localStorage_delItem = (key    ) =>           localStorage.removeItem(key    );                                       /* eslint-disable-line no-unused-vars */
let localStorage_getItem = (key    ) =>           localStorage.getItem   (key    );                                       /* eslint-disable-line no-unused-vars */
let localStorage_setItem = (key,val) => { if(val) localStorage.setItem   (key,val); else localStorage.removeItem(key); }; /* eslint-disable-line no-unused-vars */

/*}}}*/

/*}}}*/
let   details_INTERN    = function()
{
/*{{{*/
let caller = "details_INTERN";

/*}}}*/
    /* dom_log {{{*/
    let dom_log_js
        = (typeof dom_log != "undefined")
        ?         dom_log
        :         dom_details_log;  /* script/stub/dom_details_log.js */ /* eslint-disable-line no-undef */

    if( dom_log_js )
    {
        if(dom_log_js.LOG_BG_CSS) {
            ({ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX } = dom_log_js.LOG_BG_CSS);
            ({ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX } = dom_log_js.LOG_FG_CSS);
            ({ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb           } = dom_log_js.LOG_XX_CSS);

            ({  log
             ,  logBIG



             ,  log_key_val
             ,  log_key_val_group

            } = dom_log_js);

        }
if(DOM_DETAILS_LOG || DOM_DETAILS_TAG) logBIG(caller+": ["+dom_log_js.name+"]" , 4);
    }
    else {

logBIG(caller+": [dom_log UNDEFINED]"   , 2);
    }
    /*}}}*/
    /* dom_util {{{*/
    let dom_util_js
        = (typeof dom_util != "undefined")
        ?         dom_util
        :         dom_details_util; /* script/stub/dom_details_util.js */ /* eslint-disable-line no-undef */

    if( dom_util_js )
    {
        ({  add_el_class
         ,  del_el_class
         ,  get_el_child_with_tag
         ,  get_el_sibling_with_tag
         ,  get_id_or_tag
         ,  get_id_or_tag_and_className
         ,  get_nodeXPath
         ,  get_tool
         ,  is_el_or_child_of_parent_el
        } = dom_util_js);

if(DOM_DETAILS_LOG || DOM_DETAILS_TAG) logBIG(caller+": ["+dom_util_js.name+"]"    , 4);
    }
    else {

logBIG(caller+": [dom_util UNDEFINED]"      , 2);
    }
    /*}}}*/
    /* dom_store {{{*/
    if(typeof dom_store != "undefined")
    {
        localStorage_getItem =          dom_store.t_store_getItem;
        localStorage_setItem =          dom_store.t_store_set_value;
        localStorage_delItem = (key) => dom_store.t_store_set_value(key,null);

if(DOM_DETAILS_LOG || DOM_DETAILS_TAG) logBIG(caller+": ["+dom_store.name+"]"      , 4);
    }
    /*}}}*/

};
/* eslint-enable no-unused-vars */
/*}}}*/
/* eslint-enable  no-unused-vars */
/*}}}*/
/*{{{*/
const DETAILS_RADIO_ID = "details_radio";

/*}}}*/

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ 1. LISTEN TOGGLE DETAILS OPEN STATE       [localStorage details_id_open] │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
let details_handler = (function() {
/*➔ details_onload {{{*/
let details_onload = function()
{
/*{{{*/
let caller = "details_onload";
let log_this = DOM_DETAILS_LOG;

if(log_this) logBIG(caller, 8);
/*}}}*/
    /* ➔ RESTORE ONLOAD [open] STATE .. f(localStorage) {{{*/
    let        details_array = document.querySelectorAll("DETAILS");
    Array.from(details_array).forEach( (el) => {
        let    open = el.id && localStorage_getItem(el.id+"_open");
        el    .open = open;
if(log_this && open) log("➔ "+el.id+(el.open ? " OPENED":" NOT OPENED"));
    });

    /*}}}*/
    /* 1. LISTEN TO DETAILS EVENT {{{*/
    Array.from(details_array).forEach( (el) => {
        if(!el.id) return;
        el.addEventListener("mousedown", details_onmousedown);
        el.addEventListener("toggle"   , details_ontoggle   );
    });

    /*}}}*/
    /* 2. DETAILS RADIO-BEHAVIOR {{{*/
    details_radio_set_from_localStorage();

    /*}}}*/
    /* 3. OPEN LINKS HASH TARGETS DETAILS-CONTAINERS {{{*/
    details_add_hash_link_onclick_listener();

    /*}}}*/
};
/*}}}*/
 /*_ details_onmousedown {{{*/
/*{{{*/
 let details_onmousedown_shiftKey;
 let details_onmousedown_altKey;

/*}}}*/
 let details_onmousedown = function(e)
 {
     details_onmousedown_shiftKey  = e.shiftKey;
     details_onmousedown_altKey    = e.altKey;
/*{{{
log("➔ details_onmousedown_shiftKey=["+ details_onmousedown_shiftKey +"]")
log("➔ details_onmousedown_altKey..=["+ details_onmousedown_altKey   +"]")
}}}*/
 };
 /*}}}*/
/*_ details_ontoggle {{{*/
/*{{{*/
const DETAILS_ONTOGGLE_COOLDOWN = 500;

let   details_ontoggle_timeStamp;
/*}}}*/
let details_ontoggle = function(e)
{
if(details_ontoggle_listener_mutex) return;
/*{{{*/
let caller = "details_ontoggle";
let log_this= DOM_DETAILS_LOG;

    let details_el = e.target;
    if(!details_el ) return;

if( log_this) log(caller+"("+e.target.tagName+") .. open=["+e.target.open+"] ➔ details_el=["+(details_el.id || details_el.firstElementChild.textContent)+"] .. open=["+details_el.open+"]");
if( log_this) log(                    "...details_radio_el=["+get_id_or_tag_and_className(details_radio_el)+"]");
if( log_this) log(details_radio_el ? ("...details_radio_el.checked=["+details_radio_el.checked+"]") : "");
/*}}}*/
    /* STORAGE {{{*/
    if(details_el.id) {
        /* [localStorage] */
        if(details_el.open) localStorage_setItem(details_el.id+"_open", "true");
        else                localStorage_delItem(details_el.id+"_open"        );

        /* [COOKIE] */
/*{{{
        if(details_el.open) set_cookie(details_el.id+"_open", "true");
        else                del_cookie(details_el.id+"_open"        );
}}}*/
    }
    /*}}}*/
    /* IGNORE TOGGLE PROPAGATION CALLBACKS {{{*/
/*{{{
    let this_MS      = new Date().getTime();
}}}*/
    let elapsed      = (e.timeStamp - details_ontoggle_timeStamp).toFixed(0);
    if( elapsed      < DETAILS_ONTOGGLE_COOLDOWN)
    {
if(log_this) log("%c...ON COOLDOWN: elapsed=["+elapsed+"ms]", "color:#888;");

        return;
    }
if(log_this) log("%c..."+details_el.tagName+" #"+details_el.id+" .. open "+details_el.open+" .. elapsed=["+elapsed+"]" , (details_el.open ? "color:lightgreen;":"color:red;"));

    details_ontoggle_timeStamp = e.timeStamp;
    /*}}}*/
    /* ONLOAD ➔ DO NOT CLOSE OTHERS .. return {{{*/
    if(details_onmousedown_shiftKey == undefined) return;

    /*}}}*/
    /* 1/2 - ALT ➔ PROPAGATE SAME OPEN STATE TO OTHERS {{{*/
    if( details_onmousedown_altKey )
    {
        let state = details_el.open ? "open" : "close";

        details_ontoggle_set_siblings_state(details_el, state);
    }
    /*}}}*/
    /* 2/2 - JUST CLOSED OR SHIFT-MODIFIER ➔ DO NOT CLOSE OTHERS {{{*/
    else {

        let close_others_behavior
            =       details_radio_el
            && (    details_radio_el.checked
                 || details_radio_el              .classList.contains("checked")
                 || details_radio_el.parentElement.classList.contains("checked")
               );

        let reversed
            =   close_others_behavior && details_onmousedown_shiftKey;

        let close_others
            =  (close_others_behavior && ( details_el.open && !reversed)) ? "OPENED ➔ [NO SHIFT] ➔ CLOSE OTHERS"
            :  (close_others_behavior && (!details_el.open &&  reversed)) ? "CLOSED ➔ [++ SHIFT] ➔ CLOSE OTHERS"
            :  false;

/*{{{*/
if(log_this) {
    let style =           "border: "+(close_others_behavior ? "2px solid orange" : "1px solid gray")+";"
        +                  "color: "+(close_others          ?              "red" : "gray"          )+";"
        +           "border-style: "+(reversed              ?           "dashed" : "solid"         )+";"
    ;
    log(" ➔ close_others %c["+ close_others +"]", style);
}
/*}}}*/

        if     (!details_el.open ) details_ontoggle_close_children    ( details_el         );
        else if( close_others    ) details_ontoggle_set_siblings_state( details_el, "close");
    }
    /*}}}*/
};
/*}}}*/
/*_ details_ontoggle_set_siblings_state {{{*/
let details_ontoggle_set_siblings_state = function(details_el,state)
{
/*{{{*/
let   caller = "details_ontoggle_set_siblings_state";
let log_this = DOM_DETAILS_LOG;

if(log_this || DOM_DETAILS_TAG) logBIG(caller+"("+get_id_or_tag_and_className(details_el)+", "+state+")");
/*}}}*/
    /* [details_parent] {{{*/
    let details_parent
        = (details_el.parentElement.tagName == "LI")
        ?  details_el.parentElement.parentElement /* hop to OL or UL */
        :  details_el.parentElement;

if(log_this) log("%c...details_parent: ["+(details_parent.id || details_parent.tagName)+"]", "background-color:#800;");
    /*}}}*/
    /* set siblings state {{{*/
    for(let i=0; i<details_parent.children.length; ++i)
    {
        /*  details_sibling {{{*/
        let details_sibling  = details_parent.children[i];
        if( details_sibling.tagName == "LI") details_sibling = details_sibling.children[0];
/*{{{
log("...["+ details_sibling.tagName + (details_sibling.id ? (" "+details_sibling.id) : "")+"]")
}}}*/

        /*}}}*/
        /* skip just opened or closed details_el {{{*/
        if(details_sibling == details_el) continue;

        /*}}}*/
        /* close other sibling {{{*/
        if(details_sibling.tagName == "DETAILS")
        {
            details_sibling.open = (state == "open");

            if(details_sibling.id)
            {
                if(details_sibling.open) localStorage_setItem(details_sibling.id+"_open", "true");
                else                     localStorage_delItem(details_sibling.id+"_open"        );
/*{{{
                del_cookie(          details_sibling.id+"_open");
}}}*/
            }
        }
        /*}}}*/
    }
    /*}}}*/
};
/*}}}*/
/*_ details_ontoggle_close_children {{{*/
let details_ontoggle_close_children = function(parent_details)
{
/*{{{*/
let   caller = "details_ontoggle_close_children";
let log_this = DOM_DETAILS_LOG;

if( log_this) logBIG(caller+"("+get_id_or_tag_and_className(parent_details)+") .. open=["+parent_details.open+"]", 2);
/*}}}*/

    let el_array
        = Array.from( parent_details.querySelectorAll("DETAILS[open]") );

    el_array.forEach( (child_details) => {

        child_details.open = false;

        if(child_details.id)
        {
            let key = child_details.id+"_open";
            localStorage_delItem( key );
        }
    });
};
/*}}}*/
return { details_onload };
})();

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ 2. DETAILS RADIO-BEHAVIOR                   [localStorage details_radio] │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*➔ details_radio_toggle {{{*/
let details_radio_toggle = function(e)
{
/*{{{*/
if(DOM_DETAILS_LOG) log("details_radio_toggle("+e.target.tagName+")");

/*}}}*/
    /* INPUT {{{*/
    let { input , details_radio_el } = get_details_radio_checkbox(e);

    /*}}}*/
    /* GET CURRENT STATE {{{*/
    let state
        = input
        ? ((e.target != input) ? input.checked : !input.checked)
        : details_radio_el.classList.includes("checked");

    /*}}}*/
    /* NEW TOGGLE STATE {{{*/
    state = !state;

    if( input && (!e || (input != e.target))) /* update if not the event initiator */
        input.checked = state;

    /*}}}*/
    /* ➔ [TOGGLE details_radio_el.checked] {{{*/
    let el = (input || details_radio_el);
    if( el )
    {
        if(state) add_el_class(   el.parentElement, "checked"); /* state [false ➔  true] */
        else      del_el_class(   el.parentElement, "checked"); /* state [ true ➔ false] */
    }

    /*}}}*/
    /* STORE NEW STATE {{{*/
    if(state) localStorage_setItem(DETAILS_RADIO_ID, "true");
    else      localStorage_delItem(DETAILS_RADIO_ID        );

    /*}}}*/
/*{{{*/
if(DOM_DETAILS_LOG || DOM_DETAILS_TAG)
    log_key_val_group("details_radio_toggle: ...state=["+state+"]"
        , { state
          , input
          , details_radio_el
          , e
          , e_target : (e ? e.target : "")
        }
        , (state ? 4:8)
        , false);
/*}}}*/
};
/*}}}*/
/*_ details_radio_set_from_localStorage {{{*/
let details_radio_set_from_localStorage = function()
{
/*{{{*/
if(DOM_DETAILS_LOG) log("details_radio_set_from_localStorage");

/*}}}*/
    /* UI [input] [details_radio_el] {{{*/
    let {  input , details_radio_el } = get_details_radio_checkbox();

    if(!input) return;
    /*}}}*/
    /* GET STORED STATE {{{*/
    let state = localStorage_getItem( DETAILS_RADIO_ID );

    /*}}}*/
    /* SHOW STATE {{{*/
    input.checked = state;

    if(state)     add_el_class(input.parentElement, "checked"); /* state [false ➔  true] */
    else          del_el_class(input.parentElement, "checked"); /* state [ true ➔ false] */
    /*}}}*/
/*{{{*/
if(DOM_DETAILS_LOG)
    log_key_val_group("details_radio_set_from_localStorage: ...state=["+state+"]"
        , { state
          , input
          , details_radio_el
        }
        , (state ? 4:8)
        , false);
/*}}}*/
};
/*}}}*/
/*_ get_details_radio_checkbox {{{*/
/*{{{*/
let details_radio_el;

/*}}}*/
let get_details_radio_checkbox = function(e)
{
/*{{{*/
let caller = "get_details_radio_checkbox";

/*}}}*/
    /* Clicked target or DETAILS_RADIO_ID {{{*/
    if(!details_radio_el)
        details_radio_el = get_tool( DETAILS_RADIO_ID );

    let el
        = (e)
        ?  e.target
        :  details_radio_el;

if(DOM_DETAILS_LOG) log(caller+": ["+DETAILS_RADIO_ID+"] ➔ el=["+get_id_or_tag(el)+"]");
    if(!el) return {};

    /*}}}*/
    /* [input] {{{*/
    let input
        =                         ((el.tagName == "INPUT") && el)
        || get_el_child_with_tag  ( el          , "INPUT")
        || get_el_sibling_with_tag( el          , "INPUT");


    /*}}}*/
/*{{{*/
if(DOM_DETAILS_LOG)
    log_key_val_group(caller+": ...return ["+(input ? input.tagName : "")+"]"
        , { e
          , e_target         : (e ? e.target : "")
          , el
          , details_radio_el : get_nodeXPath( details_radio_el )+" ["+get_id_or_tag( details_radio_el )+"]"
          , input            : get_nodeXPath( input            )+" ["+get_id_or_tag( input            )+"]"
        }
        , 4
        , true);
/*}}}*/
    return { input , details_radio_el };
};
/*}}}*/

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ 3. OPEN LINKS HASH TARGETS DETAILS-CONTAINERS     ➔ [put target in view] │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*➔ details_has_closed_el_parent {{{*/
let details_has_closed_el_parent = function(el)
{
    let   details_el = el.parentElement;
    while(details_el)
    {
        /* OPENED PARENT DETAILS {{{*/
        if(details_el.nodeName == "DETAILS")
        {
/*{{{
            let el_in_a_visible_summary
                =    ( el.nodeName        == "SUMMARY")
                ||   ( el.parentElement   == details_el);
}}}*/
            /* a details summary is still visible when closed */
            let details_el_summary
                = details_el.firstElementChild;

            let el_in_a_visible_summary
                = is_el_or_child_of_parent_el(el, details_el_summary);

            if(   !details_el.open
               && !el_in_a_visible_summary)
                return true;
        }
        /*}}}*/
        details_el = details_el.parentElement;
    }
    return false;
};
/*}}}*/
/*➔ details_open_closed_el_parent {{{*/
let details_open_closed_el_parent = function(el)
{

    let   details_el = el.parentElement;
    while(details_el)
    {
        if(details_el.nodeName == "DETAILS")
        {
            if(!details_el.open)
            {
if(DOM_DETAILS_LOG) logBIG("details_open_closed_el_parent("+get_id_or_tag_and_className(el)+") ➔ open details_el "+get_nodeXPath(details_el));

                details_el.open = true;
            }
        }
        details_el = details_el.parentElement;
    }
    el.open = true;
};
/*}}}*/
/*_ details_add_hash_link_onclick_listener {{{*/
let details_add_hash_link_onclick_listener = function(el=document)
{
/*{{{*/
let caller = "details_add_hash_link_onclick_listener";

if(DOM_DETAILS_LOG) log(caller+"(el "+get_id_or_tag_and_className(el)+")");
/*}}}*/
    /* [details_hash_link_onclick] {{{*/
    let           details_hash_links = document.querySelectorAll("A[href^='#']");
    Array.from(   details_hash_links)
        .forEach((details_hash_link ) => {
            /**/  details_hash_link.addEventListener("click", details_hash_link_onclick);
        });
    /*}}}*/
if(DOM_DETAILS_LOG || DOM_DETAILS_TAG) logBIG(caller+": "+details_hash_links.length+" details_hash_links", 7);
};
/*}}}*/
/*_ details_hash_link_onclick {{{*/
let details_hash_link_onclick = function(e)
{
let caller = "details_hash_link_onclick";

    let        link = e.target;
    if(              !link.hash) return;

    let  name_or_id = link.hash.substr(1);
    let   id_target = document.getElementById(          name_or_id     );
    let name_target = document.querySelector ( "[name="+name_or_id+"]" );
    let link_target = id_target || name_target;

if(DOM_DETAILS_LOG)
    log_key_val(caller
                , {  name_or_id
                   , id_target
                   , name_target
                   , link_target
                });
if(DOM_DETAILS_LOG) log("%c"+caller+" %c"+name_or_id+"%c➔%c"+get_nodeXPath(link_target), lbH+lf3, lbH, lbL+lf4, lbR+lf5);


    if( link_target )
        details_open_closed_el_parent( link_target );

};
/*}}}*/

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ ➔ OPEN-CLOSE ALL DETAILS CONTAINERS                                      │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*➔ details_close_opened {{{*/
let details_close_opened = function()
{
    prevent_details_ontoggle_listener();
    let       el_array = Array.from( document.querySelectorAll("DETAILS[open]") );
    if(      !el_array.length) {
if(DOM_DETAILS_LOG) log("FOUND NO OPENED DETAILS TO CLOSE");
        return;
    }
if(DOM_DETAILS_LOG) log("CLOSING "+el_array.length+" OPENED DETAILS");

    el_array.forEach( (el) => { el.open = false; });

    setTimeout(restore_details_ontoggle_listener, 0);
};
/*}}}*/
/*➔ details_open_closed {{{*/
let details_open_closed = function()
{
    prevent_details_ontoggle_listener();
    let       el_array = Array.from( document.querySelectorAll("DETAILS:not([open])") );
    if(      !el_array.length) {
if(DOM_DETAILS_LOG) log("FOUND NO OPENED DETAILS TO OPEN");
        return;
    }
if(DOM_DETAILS_LOG) log("OPENING "+el_array.length+" CLOSED DETAILS");

    el_array.forEach( (el) => { el.open =  true; });

    setTimeout(restore_details_ontoggle_listener, 0);
};
/*}}}*/
/*_ prevent_details_ontoggle_listener {{{*/
/*{{{*/
const DETAILS_ONTOGGLE_LISTENER_DELAY = 500;
let   details_ontoggle_listener_mutex;

/*}}}*/
let prevent_details_ontoggle_listener = function()
{
    /* sync .. (effective on call) */
if(DOM_DETAILS_LOG) logBIG("prevent_details_ontoggle_listener",7);
    details_ontoggle_listener_mutex   =  true;
};
/*}}}*/
/*_ restore_details_ontoggle_listener {{{*/
let restore_details_ontoggle_listener = function()
{
    /* async .. (effective on calling thread termination) */
    setTimeout(function() {
if(DOM_DETAILS_LOG) logBIG("restore_details_ontoggle_listener",6);
            details_ontoggle_listener_mutex = false;
        }
        , DETAILS_ONTOGGLE_LISTENER_DELAY);
};
/*}}}*/


/* EXPORT */
/*{{{*/
/*➔ t_store_set_state {{{*/
let t_store_set_state = function(label,state)
{
    if(    state != undefined)
    {
        if(state) localStorage.setItem   (label, "true");
        else      localStorage.removeItem(label        );
        return !!state;
    }
    else {
        return    localStorage.getItem   (label        );
    }
};
/*}}}*/
return { name    : "dom_details"
    ,    logging : (state) => DOM_DETAILS_LOG = t_store_set_state("DOM_DETAILS_LOG", state)
    ,    tagging : (state) => DOM_DETAILS_TAG = t_store_set_state("DOM_DETAILS_TAG", state)
    ,    t_details_IMPORT

    /*   --------------------------------- CALLERS:       */
    ,    details_onload                 : details_handler.details_onload
    ,    details_radio_toggle           /* RADIO-BEHAVIOR */
    ,    details_has_closed_el_parent   /* dom_seek       */
    ,    details_open_closed_el_parent  /* dom_seek       */
    ,    details_close_opened           /* HTML TOOL      */
    ,    details_open_closed            /* HTML TOOL      */
};
/*}}}*/
}());

/*
:e  $APROJECTS/XPH/lib/t_details.js
:cd %:h/..|pwd
*/

