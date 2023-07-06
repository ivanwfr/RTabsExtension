/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_wot_log                                               (WALL OF TEXT) │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
/* globals console */

/* exported dom_wot_log, DOM_WOT_LOG_JS_TAG */

/* eslint-disable no-warning-comments */
/* eslint-disable dot-notation        */

const DOM_WOT_LOG_JS_ID         = "dom_wot_log_js";
const DOM_WOT_LOG_JS_TAG        = DOM_WOT_LOG_JS_ID  +" (210928:16h:57)";
/*}}}*/
let dom_wot_log          = (function() {
"use strict";

let log                = console.log;
let logBIG             = (msg)    => log("%c"+msg, "font-size:150%; font-weight:100;");
let logXXX             = (msg)    => log("XXX "+msg);
let log_caller         = console.trace;
let log_json_one_liner = (o) => log( JSON.stringify(o) );
let log_key_val        = (name,o) => { console.log(name+":"); console.dir(o); };
let log_key_val_group  = log_key_val;
let CS                 = "color:#666; background:#111; border:0px solid #445; border-radius:1em;";
let console_dir        = function(a1,a2=null) {
    let o   = (a2) ? a2 : a1;
    let msg = (a2) ? a1 : null;
    if( msg )
        console.log ("%c"+msg+":",CS);
    console.dir  (o);
};

return { name : "dom_wot_log"
    ,    log
    ,    logBIG
    ,    logXXX
    ,    log_caller
    ,    log_json_one_liner
    ,    log_key_val
    ,    log_key_val_group
    ,    console_dir
};

}());

