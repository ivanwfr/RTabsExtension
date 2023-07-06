/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_wot_util                                              (WALL OF TEXT) │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
/* globals console */

/* exported dom_wot_util, DOM_WOT_UTIL_JS_TAG */

/* eslint-disable no-warning-comments */
/* eslint-disable dot-notation        */

const DOM_WOT_UTIL_JS_ID      = "dom_wot_util_js";
const DOM_WOT_UTIL_JS_TAG     = DOM_WOT_UTIL_JS_ID  +" (210928:15h:45)";
/*}}}*/
let dom_wot_util        = (function() {
"use strict";

const LOG_MAP           = {};
let log                 = console.log;

/* DOM */
let add_el_class        = function(el, className) { if(!el || !el.classList) return      ; if(   !el.classList.contains( className )) el.classList.add   ( className ); };
let has_el_class        = function(el, className) { if(!el || !el.classList) return false; return el.classList.contains( className );                                   };
/*  get_el_title {{{*/
let get_el_title = function(el)
{
    if(!el) return "";

    while( el ) {
        if(el.title                   ) return el.title;
        if(el.attributes["data-title"]) return el.attributes["data-title"].textContent;

        el =       el.parentElement;
    }

    return "";
};
/*}}}*/
/* get_id_or_tag {{{ */
let get_id_or_tag = function(node)
{
    return !node           ? ("null_node"                        )
        :   node.id        ? ("#"+ node.id                       )
        :   node.className ? (node.tagName+"."+ node.classList[0])
        :                    (node.tagName                       )
    ;
};
/*}}}*/

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ REGEX                                                                    │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* escapeHTML {{{*/
/*{{{*/
let escapeHTML_chars
    = {   "<"                   : "&lt;"
        , ">"                   : "&gt;"
        , "&"                   : "&amp;"
        , '"'                   : "&quot;" /* eslint-disable-line quotes */
        , "'"                   : "&apos;"
    };

/*}}}*/
let escapeHTML = function (text)
{
    let result = text.replace(/[<>&"]/g, function(character) { return escapeHTML_chars[character]; });
    return result;
};
/*}}}*/
/* get_first_word {{{*/
/*{{{*/
const regexp_FIRST_WORD         = new RegExp("(\\w+)"                                   , "i");

/*}}}*/
let get_first_word = function(text, _caller)
{
let log_this = LOG_MAP.S1_RANGE;
/*
    return strip_CR_LF( text.trim() )
        .  replace(regexp_FIRST_WORD, "$1");
    return text;
*/
    regexp_FIRST_WORD.lastIndex = 0;

    let matches = regexp_FIRST_WORD.exec( text );

    let  result = (matches) ? matches[0] : "";

if( log_this) log("get_first_word(text=["+text+"], caller=["+_caller+"]): "+ regexp_FIRST_WORD +" .. return ["+result+"]");
    return result;
};
/*}}}*/
/* strip_CR_LF {{{*/
/*{{{*/
const regexp_CR                 = new RegExp("\\r"                          , "g");
const regexp_LF                 = new RegExp("\\n"                          , "g");

/*}}}*/
let strip_CR_LF = function(text)
{
    return text
        .   replace(regexp_CR,  "")
        .   replace(regexp_LF, " ")
        .   trim()
    ;
};
/*}}}*/
/*_ show_CR_LF {{{*/
/*{{{*/
const SYMBOL_DOWN_LEFT_ARROW        = "\u21B5";

/*}}}*/
let show_CR_LF = function(text)
{
    return text
        .   replace(regexp_CR,  "")
        .   replace(regexp_LF, SYMBOL_DOWN_LEFT_ARROW)
        .   trim()
    ;
};
/*}}}*/

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ STRING                                                                   │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* ellipsis {{{*/
/*{{{*/
const HORIZONTAL_ELLLIPSIS = "\u2026";
const ELLIPSIS_DEFAULT_LEN = 96;

/*}}}*/
let ellipsis = function(_msg, len=ELLIPSIS_DEFAULT_LEN)
{
    let msg = show_CR_LF( String(_msg) );
    return (msg.length    <= len)
        ?   msg
        :   msg.substring(0, len-3)+HORIZONTAL_ELLLIPSIS
    ;
};
/*}}}*/
/* mPadStart .. mPadEnd {{{*/
let mPadStart = function(s,l,c=" ") { s = String(s); while(s.length < l) s = c+s; return s; };

let mPadEnd   = function(s,l,c=" ") { s = String(s); while(s.length < l) s = s+c; return s; };
/*}}}*/

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ RTabs                                                                    │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*  is_marked_to_hide {{{*/
/*{{{*/
const MARKED_TO_HIDE        = "marked_to_hide";

/*}}}*/
let is_marked_to_hide = function( node )
{
    return has_el_class(node, MARKED_TO_HIDE);

};
/*}}}*/

return { name : "dom_wot_util"
    /* DOM */
    ,    add_el_class
    ,    has_el_class
    ,    get_el_title
    ,    get_id_or_tag
    /* REGEX */
    ,    escapeHTML
    ,    get_first_word
    ,    strip_CR_LF
    /* STRING */
    ,    ellipsis
    ,    mPadEnd
    ,    mPadStart
    /* RTabs */
    ,    is_marked_to_hide
};

}());

