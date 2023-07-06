/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_ipc                                                                  │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* globals console, localStorage, window, document */
/* globals MutationObserver */

/* globals IPC_EXTENSION_ID, IPC_SCRIPT_ID, IPC_LOG_COLOR, IPC_MSG_COLOR */
/* globals t_handle_ipc_message */
/* globals dom_log, dom_store */

/* exported DOM_IPC_JS_TAG, dom_ipc */

/*
:update|1,$y *
:!start explorer https://jshint.com/
:!start explorer https://cdn.jsdelivr.net/npm/vue/dist/vue.js
*/

const DOM_IPC_JS_ID         = "dom_ipc_js";
const DOM_IPC_JS_TAG        = DOM_IPC_JS_ID     +" (230706:20h:48)";
/*}}}*/
let dom_ipc     = (function() {
"use strict";
let   DOM_IPC_LOG           = false;
let   DOM_IPC_TAG           = false;

/* IMPORT */
/*{{{*/
/*➔ t_ipc_IMPORT {{{*/
/*{{{*/
/*....................................*/
/*  t_data     = {}        ; */ /* 05 */
let t_log      = {}        ;    /* 06 */
/*  t_util     = {}        ; */ /* 07 */
/*  t_i18n     = {}        ; */ /* 08 */
/*  t_prop     = {}        ; */ /* 09 */
/*  t_store    = {}        ; */ /* 10 */
/*  t_fly      = {}        ; */ /* 11 */
/* ...................................*/
/*  t_wording  = {}        ; */ /* 12 */
/*  t_select   = {}        ; */ /* 13 */
/*  t_slot     = {}        ; */ /* 14 */
/* ...................................*/
/*  t_hide     = {}        ; */ /* 15 */
/*  t_view     = {}        ; */ /* 16 */
/*  t_sticky   = {}        ; */ /* 17 */
/*  t_seek     = {}        ; */ /* 18 */
/*  t_share    = {}        ; */ /* 19 */
/* ...................................*/
/*  t_grid     = {}        ; */ /* 20 */
/*  t_gutter   = {}        ; */ /* 21 */
/* ...................................*/
/*  t_ipc      = {}        ; */ /* 22 */
/*  t_tools    = {}        ; */ /* 23 */
/*....................................*/
/*}}}*/
let t_ipc_IMPORT  = function(log_this)
{
/*{{{*/
/* ...................................*/
/*  t_data    = dom_data   ; */ /* 05 */
    t_log     = dom_log    ;    /* 06 */
/*  t_util    = dom_util   ; */ /* 07 */
/*  t_i18n    = dom_i18n   ; */ /* 08 */
/*  t_prop    = dom_prop   ; */ /* 09 */
/*  t_store   = dom_store  ; */ /* 10 */
/*  t_fly     = dom_fly    ; */ /* 11 */
/* ...................................*/
/*  t_wording = dom_wording; */ /* 12 */
/*  t_select  = dom_select ; */ /* 13 */
/*  t_wot     = dom_wot    ; */ /* 13 */
/*  t_slot    = dom_slot   ; */ /* 14 */
/* ...................................*/
/*  t_hide    = dom_hide   ; */ /* 15 */
/*  t_view    = dom_view   ; */ /* 16 */
/*  t_sticky  = dom_sticky ; */ /* 17 */
/*  t_seek    = dom_seek   ; */ /* 18 */
/*  t_share   = dom_share  ; */ /* 19 */
/* ...................................*/
/*  t_grid    = dom_grid   ; */ /* 20 */
/*  t_gutter  = dom_gutter ; */ /* 21 */
/* ...................................*/
/*  t_ipc     = dom_ipc    ; */ /* 22 */
/*  t_tools   = dom_tools  ; */ /* 23 */
/* ...................................*/
/*}}}*/
    ipc_INTERN();
    /* MODULE LOGGING TAGGING {{{*/
    DOM_IPC_LOG = DOM_IPC_LOG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_IPC_LOG"));
    DOM_IPC_TAG = DOM_IPC_TAG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_IPC_TAG"));

    /*}}}*/
if(log_this) log("%c 21 ipc", lbH+lf1);
};
/*}}}*/
/*_   ipc_INTERN {{{*/
/*{{{*/

/* t_log */
/* eslint-disable no-unused-vars */

let LOG_MAP;
let lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;
let log, logBIG, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;

/* eslint-enable  no-unused-vars */
/*}}}*/
let   ipc_INTERN = function()
{
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
/*_ localStorage {{{*/

let localStorage_setItem = function(key,val) {          try { if(val)  localStorage.setItem   (key,val); else localStorage.removeItem(key); } catch(ex) {} };
let localStorage_getItem = function(key    ) { let val; try {    val = localStorage.getItem   (key    );                                    } catch(ex) {} return val; };
let localStorage_delItem = function(key    ) {          try { /*...*/  localStorage.removeItem(key    );                                    } catch(ex) {} };

/*}}}*/
/*}}}*/

/* IPC: EventListener */
/*_ ipc_add_message_listener {{{*/
let ipc_add_message_listener = function(script_id)
{
    t_ipc_listener_id = script_id;
    if(DOM_IPC_LOG) console.log("%c "+t_ipc_listener_id+": ADDING IPC MESSAGE LISTENER ", IPC_MSG_COLOR);

    window.addEventListener   ("message", ipc_message_CB, false);
};
/*}}}*/
/*_ t_ipc_del_message_listener {{{*/
let t_ipc_del_message_listener = function(script_id) /* eslint-disable-line no-unused-vars */
{
    if(DOM_IPC_LOG) console.log("%c "+t_ipc_listener_id+": DELETING IPC MESSAGE LISTENER", IPC_MSG_COLOR);

    window.removeEventListener("message", ipc_message_CB, false);
};
/*}}}*/
/*_ ipc_message_CB {{{*/
let ipc_message_CB = function(event)
{
    /* MESSAGE ORIGIN {{{*/
    if(!window.location.href.startsWith( event.origin ))
    {
        /*
if(DOM_IPC_LOG) console.log("...not same origin: window.location.href=["+window.location.href+"]");
if(DOM_IPC_LOG) console.log("...not same origin: ........event.origin=["+event.origin        +"]");
         */
        return;
    }
    if(DOM_IPC_LOG) console.log("%c"+t_ipc_listener_id+".ipc_message_CB", IPC_MSG_COLOR);
    if(DOM_IPC_LOG) console.dir(event);
    /*}}}*/
    /* IPC MESSAGE {{{*/
    let message = event.data;
    if(DOM_IPC_LOG) console.log("%c"+t_ipc_listener_id+".ipc_message_CB: %c "+message+" ", IPC_MSG_COLOR, lbF);
    let ipc = t_ipc_PARSE( message );
    if(!ipc ) return;

    if(typeof         ipc.DOM_IPC_LOG != "undefined") {
        DOM_IPC_LOG = ipc.DOM_IPC_LOG;
        console.log("%c ipc_message_CB: %c DOM_IPC_LOG="+DOM_IPC_LOG+" ", IPC_MSG_COLOR, lbF+(DOM_IPC_LOG ? lb2 : lb8));

        return;
    }
    /*}}}*/
    /* SCRIPT MESSAGE {{{*/
    t_handle_ipc_message( ipc );

    /*}}}*/
};
/*}}}*/

/* IPC: MutationObserver */
/*_ t_ipc_add_MutationObserver {{{*/
/*{{{*/
let ipc_MutationObserver;
/*}}}*/
let t_ipc_add_MutationObserver = function(script_id)
{
    /* DEFINE OBSERVER ID {{{*/
    t_ipc_listener_id = script_id;
    if(DOM_IPC_LOG) console.log("%c "+t_ipc_listener_id+": ADDING IPC MutationObserver", IPC_MSG_COLOR);

    /*}}}*/
    /* START OBSERVING {{{*/
    ipc_MutationObserver = new MutationObserver( ipc_MutationObserver_CB );

    let config = { attributes            :  true /* attributes                          */
        ,          characterData         :  true /* data                                */
        ,          childList             : false /* additions and removals of s child   */
        ,          subtree               : false /* target and target's descendants     */
        ,          attributeOldValue     :  true /* attribute value before the mutation */
        ,          characterDataOldValue :  true /* data before the mutation            */
        ,          attributeFilter       : [IPC_EXTENSION_ID]
    };

    ipc_MutationObserver.observe(document.body, config);
    /*}}}*/
};
/*}}}*/
/*_ t_ipc_del_MutationObserver {{{*/
let t_ipc_del_MutationObserver = function(script_id) /* eslint-disable-line no-unused-vars */
{
    /* STOP OBSERVING {{{*/
    if(ipc_MutationObserver)
    {
        if(DOM_IPC_LOG) console.log("%c "+t_ipc_listener_id+": DISCONNECTING MutationObserver", IPC_MSG_COLOR);
        ipc_MutationObserver.disconnect();
        ipc_MutationObserver = null;
    }
    else {
        if(DOM_IPC_LOG) console.log("%c "+t_ipc_listener_id+": MutationObserver NOT CONNECTED", IPC_MSG_COLOR);
    }
    /*}}}*/
};
/*}}}*/
/*_ ipc_MutationObserver_CB {{{*/
let ipc_MutationObserver_CB = function(mutationRecords, observer) /* eslint-disable-line no-unused-vars */
{
    /* LOG {{{*/
    if( DOM_IPC_LOG ) {
        let log_mutationRecord = function( m_r )
        {
            if(typeof log_key_val_group != "undefined") {
                log_key_val_group(t_ipc_listener_id+".ipc_MutationObserver_CB"
                                    , {        attributeName : m_r.attributeName
                                        ,               type : m_r.type
                                        , attributeNamespace : m_r.attributeNamespace
                                        ,           oldValue : m_r.oldValue
                                        ,             target : m_r.target.tagName
                                    }
                                    , lfX[++next]
                                    , false
                                 );
            }
            else {
                console.log(t_ipc_listener_id+".ipc_MutationObserver_CB:");
                console.log("........attributeName=["+ m_r.attributeName      +"]");
                console.log(".................type=["+ m_r.type               +"]");
                console.log(".............oldValue=["+ m_r.oldValue           +"]");
                console.log("...attributeNamespace=["+ m_r.attributeNamespace +"]");
                console.log("...............target=["+ m_r.target.tagName     +"]");
            }
        };

        let next = 0;
        mutationRecords.forEach( log_mutationRecord );
    }
    /*}}}*/
    /* HANDLE MESSAGE {{{*/
    let message = document.body.attributes[IPC_EXTENSION_ID]
        ?         document.body.attributes[IPC_EXTENSION_ID].textContent : "";
    let ipc = t_ipc_PARSE( message );

    if( ipc ) t_handle_ipc_message( ipc );
    /*}}}*/
};
/*}}}*/

/* IPC: Util */
/*{{{*/

let t_ipc_listener_id;
/*}}}*/
/*_ t_ipc_is_IPC_SCRIPT_loaded {{{*/
let t_ipc_is_IPC_SCRIPT_loaded = function()
{
    /* DOM_TOOLS_JS_ID {{{*/
    if(typeof S != "undefined")
    {
        if(typeof shadow_root != "undefined") {
            if(DOM_IPC_LOG) console.log("%c "+IPC_SCRIPT_ID+" %c already loaded .. f(shadow_root)"                 , IPC_LOG_COLOR, lbA);
            return true;
        }
        else {
            return false;
        }
    }
    /*}}}*/
    /* DOM_LOAD_ID {{{*/
    if(typeof DOM_LOAD_ID     != "undefined")
    {
        let id = "dom_host_css_tag";            /* i.e. one of the inlined data js code */
        let el = document.getElementById(id);
        if( el ) {
            if(DOM_IPC_LOG) console.log("%c "+IPC_SCRIPT_ID+" %c already loaded .. f("+el.id+")"                   , IPC_LOG_COLOR, lbA);
            return  true;
        }
        else {
            return false;
        }
    }
    /*}}}*/
    return false;
};
/*}}}*/

/*_ t_ipc_PARSE {{{*/
/*{{{*/
/*
let t_get_IPC_sequence_number = 0;
*/
/*}}}*/
let t_ipc_PARSE = function(message)
{
    if(!message) return null;

    let ipc = null;
    try {
        ipc = JSON.parse(message);

if(DOM_IPC_LOG && (typeof log_key_val_group != "undefined")) log_key_val_group("t_ipc_PARSE("+message+")", ipc, lf7, false);
    }
    catch(ex) {
if(DOM_IPC_LOG) {
    console.log("%c "+t_ipc_listener_id+": t_ipc_PARSE:"                          , lbB+lb2);
    console.log("%c *** "+ex,                                                           lb2);
    console.log("%c "+strip_CR_LF(message)                                        , lbF+lb0);
    console.log("%c 0123456789_123456789_123456789_123456789_123456789_123456789_", lbF+lb8);
    console.log("%c 0_________1_________2_________3_________4_________5_________6", lbF+lb8);
}
    }
    /*
if(ipc.sequence_number) t_get_IPC_sequence_number = ipc.sequence_number;
     */
    if(ipc && (typeof ipc.cancelreq != "undefined"))
    {
        let removing = (ipc.cancelreq == "ON") ? "(REMOVING) " : "";
        handle_scripts(removing);
        return null;
    }
    else {
        return ipc;
    }
};
/*}}}*/
/*_ t_ipc_SEND {{{*/
let t_ipc_SEND = function(ipc)
{
    /* 86400 == seconds per day */
    let t_get_IPC_sequence_number = parseInt(new Date().getTime() / 1000) % 86400;

    ipc.sequence_number = t_get_IPC_sequence_number;

if(DOM_IPC_LOG && (typeof log_key_val_group != "undefined")) log_key_val_group("t_ipc_SEND", ipc, lf7, false);

    let ipc_json = JSON.stringify( ipc );
    document.body.setAttribute(IPC_SCRIPT_ID, ipc_json);
};
/*}}}*/
/*_ strip_CR_LF {{{*/
const t_regexp_CR = new RegExp("\\r", "g");
const t_regexp_LF = new RegExp("\\n", "g");
let strip_CR_LF = function(text)
{
    return text
        .   replace(t_regexp_CR,  "")
        .   replace(t_regexp_LF, " ")
        .   trim()
    ;
};
/*}}}*/

/*_ handle_scripts {{{*/
let handle_scripts = function(removing)
{
    /* *** console.clear is not a function .. ? */
    try {
        if(DOM_IPC_LOG) console.clear();
        if(DOM_IPC_LOG) console.log("%c CLEARED BY handle_scripts ", IPC_MSG_COLOR);
    } catch(ex) {}

    let elements = document .getElementsByTagName("SCRIPT");
    if(DOM_IPC_LOG) console.log("%c "+ elements.length +" SCRIPT ELEMENTS: "+removing, lbF);

    for(let i=0; i < elements.length; ++i)
    {
        let s_el = elements[i];
        if(DOM_IPC_LOG) try { console.log((i+1)+".........src: "+ s_el.src); } catch(ex) {}
        if(removing) s_el.remove();
    }
};
/*}}}*/
/*_ ipc_contains_a_startup_message {{{*/
let ipc_contains_a_startup_message = function(ipc)
{
    let result
        =  (typeof ipc.start != "undefined")
        && (       ipc.start == "ON"       )
    ;

    if(DOM_IPC_LOG) console.log("ipc_contains_a_startup_message ...return %c"+ result, IPC_MSG_COLOR);
    return result;
};
/*}}}*/
/*_ t_wait_for_startup_message_from_extension {{{*/
const WAITING_FOR_STARTUP_MESSAGE = "TOOLS WAITING";/* FOR A STARTUP MESSAGE FROM EXTENSION";*/
let t_wait_for_startup_message_from_extension = function(_caller)
{
    if(DOM_IPC_LOG) console.log("%c "+IPC_SCRIPT_ID+" %c "+WAITING_FOR_STARTUP_MESSAGE, IPC_LOG_COLOR, lbF);

    let ipc = { t_load : WAITING_FOR_STARTUP_MESSAGE
        ,       caller : _caller
    };
    t_ipc_SEND( ipc );

    if(!t_ipc_listener_id) {
        t_ipc_add_MutationObserver(IPC_SCRIPT_ID);
        /*ipc_add_message_listener(IPC_SCRIPT_ID);*/
    }
};
/*}}}*/

/* EXPORT */
/*{{{*/
/*➔ t_store_set_state {{{*/
let t_store_set_state = function(label,state)
{
    if(          state != undefined)
    {
        if(      state) localStorage_setItem(label, "true");
        else            localStorage_delItem(label        );
        return !!state;
    }
    else {
        return          localStorage_getItem   (label        );
    }
};
/*}}}*/
return { name : "dom_ipc"
    , logging : function(state) { return DOM_IPC_LOG = t_store_set_state("DOM_IPC_LOG",state); } /* eslint-disable-line object-shorthand */
    , tagging : function(state) { return DOM_IPC_TAG = t_store_set_state("DOM_IPC_TAG",state); } /* eslint-disable-line object-shorthand */
    , t_ipc_IMPORT
    , t_ipc_PARSE
    , t_ipc_add_MutationObserver
    , t_ipc_del_MutationObserver
    , t_ipc_del_message_listener
    , t_ipc_is_IPC_SCRIPT_loaded
    , t_ipc_listener_id : () => t_ipc_listener_id
    , t_ipc_SEND
    , t_wait_for_startup_message_from_extension

    /* YET UNUSED */
    , ipc_contains_a_startup_message
    , ipc_add_message_listener

};
/*}}}*/

})();
