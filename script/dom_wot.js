/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_wot                                                   (WALL OF TEXT) │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
/* eslint-disable no-warning-comments   */

/* globals console                      */
/* globals document, Node, NodeFilter   */
/* globals localStorage                 */

/* globals dom_log                      */
/* globals dom_util                     */
/* globals dom_store                    */
/* globals dom_tools                    */

/* exported dom_wot, DOM_WOT_JS_TAG */

const DOM_WOT_JS_ID      = "dom_wot_js";
const DOM_WOT_JS_TAG     = DOM_WOT_JS_ID  +" (220422:17h:54)";
/*}}}*/
let dom_wot             = (function() {
"use strict";
let   DOM_WOT_LOG       = false;
let   DOM_WOT_TAG       = false;

/* IMPORT {{{*/
/* eslint-disable no-unused-vars */
/*➔ t_wot_IMPORT {{{*/
/* eslint-disable no-unused-vars */
let t_wot_IMPORT        = function(_log_this,import_num)
{
    /* MODULE LOGGING TAGGING {{{*/
    DOM_WOT_LOG         = DOM_WOT_LOG       || localStorage_getItem("DOM_WOT_LOG");
    DOM_WOT_TAG         = DOM_WOT_TAG       || localStorage_getItem("DOM_WOT_TAG");

    /*}}}*/
    wot_INTERN();
if(_log_this) log("➔ "+(import_num ? (import_num+" ") : "")+"t_wot_IMPORT");
};
/*}}}*/
/*_   wot_INTERN {{{*/
/*{{{*/
/* dom_data {{{*/
const CSS_LINE_NUM = "line_num";
const LF           = String.fromCharCode(10);
const LINES_WOT    = "lines_wot"    ;

/*}}}*/
/* dom_log {{{*/
let lb0="", lb1="", lb2="", lb3="", lb4="", lb5="", lb6="", lb7="", lb8="", lb9="", lbX="";
let lbA="", lbB="", lbC="", lbF="", lbH="", lbL="", lbR="", lbS="", lbb=""                ;
let lf0="", lf1="", lf2="", lf3="", lf4="", lf5="", lf6="", lf7="", lf8="", lf9="", lfX="";

let log=console.log, logBIG=log, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;

let console_dir=console.dir;
/*}}}*/
/* dom_util {{{*/

/* DOM */
let add_el_class;
let has_el_class;
let get_el_title;
let get_id_or_tag;

/* REGEX */
let escapeHTML;
let strip_CR_LF;
let get_first_word;

/* STRING */
let ellipsis;
let mPadStart;

/* RTabs */
let is_marked_to_hide;

/*}}}*/
/* dom_store {{{*/

let localStorage_delItem = (key    ) =>           localStorage.removeItem(key    );                                       /* eslint-disable-line no-unused-vars */
let localStorage_getItem = (key    ) =>           localStorage.getItem   (key    );                                       /* eslint-disable-line no-unused-vars */
let localStorage_setItem = (key,val) => { if(val) localStorage.setItem   (key,val); else localStorage.removeItem(key); }; /* eslint-disable-line no-unused-vars */

/*}}}*/
/* dom_tools {{{*/
let t_get_tool = (id) => document.getElementById(id);

/*}}}*/
/*}}}*/
let   wot_INTERN        = function()
{
/*{{{*/
let caller = "wot_INTERN";

/*}}}*/
    /* dom_log {{{*/
    let dom_log_js
        = (typeof dom_log != "undefined")
        ?         dom_log
        :         dom_wot_log;      /* script/dom_wot_log.js */ /* eslint-disable-line no-undef */

    if( dom_log_js )
    {
        if(dom_log_js.LOG_BG_CSS) {
            ({ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX } = dom_log.LOG_BG_CSS);
            ({ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX } = dom_log.LOG_FG_CSS);
            ({ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb           } = dom_log.LOG_XX_CSS);
        }

        ({  log
         ,  logBIG
         ,  logXXX
         ,  log_caller
         ,  log_json_one_liner
         ,  log_key_val
         ,  log_key_val_group
         ,  console_dir
        } = dom_log_js);

if(DOM_WOT_LOG || DOM_WOT_TAG) logBIG(caller+": ["+dom_log_js.name+"]" , 4);
    }
    else {

logBIG(caller+": [dom_log UNDEFINED]"   , 2);
    }
    /*}}}*/
    /* dom_util {{{*/
    let dom_util_js
        = (typeof dom_util != "undefined")
        ?         dom_util
        :         dom_wot_util;     /* script/dom_wot_util.js */ /* eslint-disable-line no-undef */

    if( dom_util_js )
    {
        ({  add_el_class        /* DOM */
         ,  get_el_title
         ,  get_id_or_tag
         ,  has_el_class
         ,  strip_CR_LF         /* REGEX */
         ,  escapeHTML
         ,  get_first_word
         ,  ellipsis            /* STRING */
         ,  mPadStart
         ,  is_marked_to_hide   /* RTabs */
        } = dom_util_js);

if(DOM_WOT_LOG || DOM_WOT_TAG) logBIG(caller+": ["+dom_util_js.name+"]"    , 4);
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

if(DOM_WOT_LOG || DOM_WOT_TAG) logBIG(caller+": ["+dom_store.name+"]"      , 4);
    }
    /*}}}*/
    /* dom_tools {{{*/
    if(typeof dom_tools != "undefined")
    {
        t_get_tool       = dom_tools.t_get_tool;

if(DOM_WOT_LOG || DOM_WOT_TAG) logBIG(caller+": ["+dom_tools.name+"]"      , 4);
    }
    /*}}}*/
};
/* eslint-enable no-unused-vars */
/*}}}*/
/* eslint-enable  no-unused-vars */
/*}}}*/

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ ➔ FOLD                                                                   │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*{{{*/
const FOLD_OPEN   = "{{{";
const BRACE_OPEN  =   "{";
const BRACE_CLOSE =   "}";
const FOLD_CLOSE  = "}}}";
/*_ is_line_fold_open {{{*/
/*{{{
let logged_count = 0; const LOGGED_COUNT_MAX = 100;
}}}*/
let is_line_fold_open = function(line)
{
    let result = line.includes( FOLD_OPEN ) ;
/*{{{
if(logged_count++ < LOGGED_COUNT_MAX) log("is_line_fold_open("+line+") ...return "+result+"");
}}}*/
    return result;
};
/*}}}*/
/*_ is_line_fold_close {{{*/
/*{{{*/
const LEVELS = "123456789";

/*}}}*/
let is_line_fold_close = function(line)
{
    let result = line.includes( FOLD_CLOSE ) ;

    /* look for implicit-closing marker level */
    if(!result)
    {
        let idx    = line.indexOf(     FOLD_OPEN       );
        if( idx ) {
            let s  = line.charAt(idx + FOLD_OPEN.length);
            if((s != "") && (LEVELS.indexOf(s) >= 0)) /* (level number match not handled yet) */
                result = true;
        }
    }
/*{{{
if(logged_count++ < LOGGED_COUNT_MAX) log("is_line_fold_close("+line+") ...return "+result+"");
}}}*/
    return result;
};
/*}}}*/
/*_ is_line_brace_open {{{*/
let is_line_brace_open = function(line)
{
    let result =  !line.startsWith(" ") && line.endsWith( BRACE_OPEN );
/*{{{
if(logged_count++ < LOGGED_COUNT_MAX) log("is_line_brace_open("+line+") ...return "+result+"");
}}}*/
    return result;
};
/*}}}*/
/*_ is_line_brace_close {{{*/
let is_line_brace_close = function(line)
{
    let result = line.startsWith( BRACE_CLOSE );
/*{{{
if(logged_count++ < LOGGED_COUNT_MAX) log("is_line_brace_close("+line+") ...return "+result+"");
}}}*/
    return result;
};
/*}}}*/
/*}}}*/

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ ➔ SPLIT WOT                                                              │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*➔ t_WOT_SPLIT {{{*/
/*{{{*/
const WALL_OF_TEXT_PARENT   = "wall_of_text_parent";
const WALL_OF_TEXT_SPLIT    = "wall_of_text_split";
const WALL_OF_TEXT_BLOCK    = "wall_of_text_block";
const WALL_OF_TEXT_FOLD     = "wall_of_text_fold";
const WOT_P_LINES_MIN       =    1;
const WOT_LENGTH            =  256;
const PAR_LENGTH_MAX        = 2048;
const REPORTED_COUNT_MAX    =    8;

const regexp_REGIONFOLD     = new RegExp("#region (\\S+).*");
const regexp_FUNCTION_JS    = new RegExp("\\/\\*[_ ]*(\\S+).*\\{\\{\\{\\*\\/");
/*........................................../  * _   (FFFF)    ^  ^  ^       */
const regexp_FUNCTION_LUA   = new RegExp(    "--[_ ]*(\\S+).*\\{\\{\\{");
/*............................................-- _   (FFFF)    ^  ^  ^ */
const regexp_IMAGE_ASCIIDOC = new RegExp(    '^image::([^\\[]*)(?:\\[([^\\]]+))\\]?'); /* eslint-disable-line quotes */

/*{{{
:!start explorer "https://regexr.com/32oeg"
}}}*/

let   wot_split_done = false;
/*}}}*/
let t_WOT_SPLIT = function() /* eslint-disable-line complexity */
{
    /* [wot_split_done] {{{*/
    if( wot_split_done ) return;

    wot_split_done = true;
    /*}}}*/
/*{{{*/
let   caller = "t_WOT_SPLIT";
let log_this = DOM_WOT_LOG;

if( log_this) console.time(caller);
/*}}}*/
    /* SPLIT UP WALL OF TEXT NODES {{{*/
    pre_innerHTML_to_innerText();

    reported_count      = 0;
    reported_filters    = [];

    let            root = document.body;
    let   mDomTraversal = document.createNodeIterator(root, NodeFilter.SHOW_TEXT, mNodeFilter_wall_of_text_block);
    let text_node_array = get_wall_of_text_node_array( mDomTraversal );

if( log_this) log("%c"+caller+" %c "+text_node_array.length+" TEXT NODES FILTER_ACCEPT'ed", lbH, lbH+lf3);
/*{{{
}}}*/
    /*}}}*/
    /* REPLACE BIG CHUNCKS OF TEXT WITH A BUNCH OF SMALLER PARAGRAPHS {{{*/
    let node_count = 0;
    let char_count = 0;
    let LF_count   = 0;

    let line_num   = 1;
    let trailNoEOL = "";
    let innerHTML;
    for(let i = 0; i < text_node_array.length; ++i)
    {
        /* SPLIT INTO LINES {{{*/

        /* prepend previous truncated-trailer */
        let text_node   = text_node_array[i];

        let textContent = trailNoEOL + text_node.textContent;
        char_count     += textContent.length;

        /* next truncated-trailer -- FIXME drops last line from MISSING-EOL-DOS-FILES */
        trailNoEOL
            = textContent.endsWith(LF)
            ? ""
            : textContent.substring( textContent.lastIndexOf(LF)+1 );

        let lines      = textContent.split(LF);
        LF_count      += lines.length;

        let last_line  = lines[lines.length-1];

        if( last_line == trailNoEOL) lines.pop(); /* drop truncated line .. (missing EOL) */

/*{{{*/
if(log_this && (i < 2))
    log_key_val_group("line_num %c"+ line_num
                      , {         textContent_length : textContent.length
                          ,               trailNoEOL : "["+trailNoEOL+"] .. length=["+ trailNoEOL.length+"]"
                          ,               last_line  : "["+last_line +"] .. length=["+ last_line .length+"]"
                          ,  last_line_eq_missingEOL : (last_line == trailNoEOL)
                          ,                STARTWITH : textContent.substring(0                  ,80)
                          ,                ENDS_WITH : textContent.substring(textContent.length -80)
                      }
                      , false);
/*}}}*/
        /*}}}*/
        /* EMPTY PARENT .. (on first node) {{{*/
        let               parent = text_node.parentNode;
        if(              !parent ) continue; /* already removed .. already handled */
        if( !has_el_class(parent, WALL_OF_TEXT_PARENT) )
        {
            parent.innerHTML = "";
            add_el_class(parent, WALL_OF_TEXT_PARENT);
        }
        /*}}}*/
/*{{{*/
if( log_this) {
    log("%c"+i, lbb+lbH+lf3);
    console_dir("parent has "+ parent.children.length+" children", parent   );
    console_dir("text_node", text_node);
    log("%c "+get_id_or_tag(parent) +" "+ parent.textContent.length+" characters", lbH);
}
/*}}}*/
        /* REFILL PARENT {{{*/
        let fold_open  = is_line_fold_open (text_node.textContent);
        let fold_close = is_line_fold_close(text_node.textContent);
        if( fold_open && fold_close)  [line_num , innerHTML] = get_FOLD_EL_innerHTML(lines, line_num);
        else                          [line_num , innerHTML] = get_lines_innerHTML  (lines, line_num);

        parent.innerHTML += innerHTML;
        node_count += 1;
        /*}}}*/
/*{{{*/
if( log_this) console_dir("...parent has "+parent.children.length+" children", parent);
if( log_this) log(caller+": %c node_count=["+node_count+"] %c LF_count=["+LF_count+"] %c char_count=["+char_count+"]"
                  ,        lbL                            ,lbC                       ,lbR                            );
/*}}}*/
    }
    /*}}}*/
    /* Show results in [split_wot] button tooltip {{{*/
    let split_wot = t_get_tool("split_wot");
    if( split_wot )
        split_wot.title
            = get_el_title( split_wot )
                +LF +(LF_count ? (LF_count+" lines have been parsed") : "Found no WOT to parse"); /* TODO i18N */
    /*}}}*/
/*{{{*/
if( log_this && node_count) console.timeEnd(caller);

if( log_this)
    if(node_count) log("%c"+caller+"%c"+node_count+" WALLS OF TEXT %c "+char_count+" characters %c "+LF_count+" LF"
                       ,lbH+lf7    ,lbb+lbH+lf7                   ,lbH+lf7                     ,lbH+lf9            );
/*}}}*/
};
/*}}}*/
/*➔ t_WOT_FOLD_EL {{{*/
let t_WOT_FOLD_EL = function(el)
{
    el.textContent = ""+ el.textContent; /* replace children */ /* eslint-disable-line no-self-assign */
    let lines      = el.textContent.split(LF);
    let line_num   = 1;
    let innerHTML;
    [line_num , innerHTML] = get_FOLD_EL_innerHTML(lines, line_num);

    el.innerHTML   = innerHTML;
};
/*}}}*/

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ ➔ SPLIT HTML                                                             │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*_ get_lines_innerHTML {{{*/
let get_lines_innerHTML = function(lines, line_num) /* eslint-disable-line complexity */
{
    let with_line_num = localStorage_getItem( LINES_WOT ); /* prop may not be ready yet */

    let innerHTML = "";
    let    l = 0;
    while((l < lines.length))
    {
        /* new paragraph {{{*/

        let paragraph = "";
        let par_lines = 0;

        let this_line = lines[l  ];

        let fold_open  = is_line_fold_open (this_line); let fold_close  ;
        let brace_open = is_line_brace_open(this_line); let brace_close ;

        let may_add_next_line;
        /*}}}*/
        do {
            /* this_line next_line {{{*/
            this_line = lines[l  ];
            let next_line = lines[l+1] || "";

            /*}}}*/
            /* stop before a new fold {{{*/
            if(par_lines > WOT_P_LINES_MIN) {
                if( is_line_fold_open  (this_line)) break;
                if( is_line_brace_open (this_line)) break;
            }

            /*}}}*/
            /* pick line {{{*/
            let h_line = escapeHTML(this_line);
/*{{{
if(h_line.includes("#region")) log(h_line);
}}}*/
            h_line = h_line.replace(regexp_REGIONFOLD    , "<span class='"+WALL_OF_TEXT_BLOCK+"'>$1</span> "+h_line);
            h_line = h_line.replace(regexp_FUNCTION_JS   , "<span class='"+WALL_OF_TEXT_BLOCK+"'>$1</span> "+h_line);
            h_line = h_line.replace(regexp_FUNCTION_LUA  , "<span class='"+WALL_OF_TEXT_BLOCK+"'>$1</span> "+h_line);

            h_line = h_line.replace(regexp_IMAGE_ASCIIDOC, "<img src='$1' alt=$1 title=$2 />"); /* eslint-disable-line quotes */

            /*}}}*/
            /* region {{{*/
            if( h_line.includes(  "#region" ) ) /* C# */
            {
                h_line = h_line.replace("'>", " region'>#region ");

            }
            /*}}}*/
            /* function {{{*/
            else if(       next_line
                    && (   next_line.includes(" function(") /* javascript */
                        || next_line.includes("function " ) /* LUA */
                        || next_line.includes("private "  ) /* C# */
                        || next_line.includes("protected ")
                        || next_line.includes("public "   )
                        || next_line.includes("static "   )
                        || next_line.includes("void "     )
                       )
                   )
            {
                h_line = h_line.replace("'>", " function'>");
            }
            /*}}}*/
            /* text_line {{{*/
            else {
                h_line = "<span class='text_line'>"+h_line+"</span>";
            }
            /*}}}*/
            /* details..summary {{{*/
            if(      h_line.includes(FOLD_OPEN) && !h_line.includes(FOLD_CLOSE)) h_line =        "<details><summary>"+h_line+"</summary>";
            else if(!h_line.includes(FOLD_OPEN) &&  h_line.includes(FOLD_CLOSE)) h_line = h_line+"</details>";
            /*}}}*/
            /* p_line .. paragraph {{{*/
            if(with_line_num) {
                let p_line = "<span class='"+CSS_LINE_NUM+"'>"+mPadStart(line_num, 6)+" </span>"+(h_line || "")+LF;
                paragraph += p_line;
            }
            else {
                paragraph += (h_line || "")+LF;
            }

            par_lines += 1;
            line_num  += 1;
            /*}}}*/
            /* stop after close fold {{{*/
            if(par_lines > WOT_P_LINES_MIN) {
                fold_close  = is_line_fold_close ( this_line );
                brace_close = is_line_brace_close( this_line );
            }

            /*}}}*/
            /* or consider next line .. checking paragraph length so far {{{*/
/*{{{
            let this_line_length   = this_line.trim().length;
}}}*/
            l += 1;

            let next_p_len =  paragraph.length + next_line.length;
            may_add_next_line
                =      (     lines.length  > l)
                && (   ( next_line.length == 0)
                       || (next_p_len        <= PAR_LENGTH_MAX));

            /*}}}*/
        } while(may_add_next_line && !fold_close && !brace_close);
        /* add paragraph {{{*/
        let className
            = WALL_OF_TEXT_SPLIT
            + ((       ( fold_open &&  fold_close)
                    || (brace_open && brace_close)
               )
               ?    (" "+WALL_OF_TEXT_FOLD)
               :    ""
              )
        ;

        if(paragraph.length) innerHTML += "<pre class='"+className+"'>"+paragraph+"</pre>";
        /*}}}*/
    }
    return [line_num , innerHTML];
};
/*}}}*/
/*_ get_FOLD_EL_innerHTML {{{*/
let get_FOLD_EL_innerHTML = function(lines,line_num) /* eslint-disable-line complexity */
{
    let with_line_num     = localStorage_getItem( LINES_WOT ); /* prop may not be ready yet */
    let innerHTML         = "";
    let    l              = 0;
    while((l < lines.length))
    {
        let paragraph     = "";

        let this_line     = lines[l  ];

        let may_add_next_line;
        do {
            this_line     = lines[l  ];
            let next_line = lines[l+1] || "";
            let h_line    = escapeHTML(this_line);

            let fold_close = is_line_fold_close(this_line);
            let fold_open  = is_line_fold_open (this_line);

            if(fold_open) {
                h_line
                    = (fold_close ? "</details>" : "")
                    + "<details id='fold_"+l+"' class='"+WALL_OF_TEXT_SPLIT+"'>"
                    +  "<summary>"+h_line+"</summary>"
                    +  "<pre>"
                ;
            }
            else if( fold_close )
            {
                h_line
                    =             h_line
                    + "</pre>"
                    + "</details>"
                ;
            }

            /* p_line .. paragraph {{{*/
            if(with_line_num) {
                let p_line = "<span class='"+CSS_LINE_NUM+"'>"+mPadStart(line_num, 6)+" </span>"+(h_line || "")+LF;
                paragraph += p_line;
            }
            else {
                paragraph += (h_line || "")+LF;
            }
            l            += 1;
            line_num     += 1;

            /*}}}*/
            may_add_next_line
                =      (     lines.length  > l)
                && (   ( next_line.length == 0));

        } while(may_add_next_line);
        if(paragraph.length) innerHTML += paragraph;
    }

    return [line_num , innerHTML];
};
/*}}}*/
/*_ get_wall_of_text_node_array {{{*/
let get_wall_of_text_node_array = function(mDomTraversal)
{
    let   node_array = [];
    let   node;

    while(node = mDomTraversal.nextNode())
        node_array.push(node);
/*
log("get_wall_of_text_node_array: return node_array.length=["+node_array.length+"]");
*/
    return node_array;
};
/*}}}*/
/*_ pre_innerHTML_to_innerText {{{*/
let pre_innerHTML_to_innerText = function()
{
    let pre_list = document.getElementsByTagName("PRE");
    let pre_count = 0;
    let pre;

    while(pre = pre_list[pre_count++])
        pre.textContent = ""+ pre.textContent; /* eslint-disable-line no-self-assign */

    /* textContent gets the content of all elements
     * Setting textContent on a node removes all of the node's children
     * and replaces them with a single text node with the given string value
     */
};
/*}}}*/
/*_ mNodeFilter_wall_of_text_block {{{*/
/*{{{*/
let reported_count;
let reported_filters;

/*}}}*/
let mNodeFilter_wall_of_text_block = function(node) /* eslint-disable-line complexity */
{
/*{{{*/
let   caller = "mNodeFilter_wall_of_text_block";
let log_this = DOM_WOT_LOG;

/*}}}*/
    /* FILTER DOM NODES {{{*/
    let check_result = NodeFilter.FILTER_ACCEPT;
    let      details = "";

    let npar = node.parentNode;

    /* FILTER_REJECT .. (skip this node and all its children) ______________________ */
    if     ((!npar                     )                                                ) { check_result = NodeFilter.FILTER_REJECT; details = "NODE HAS NO PARENT" ; }
    else if(( npar.tagName  == "SCRIPT")                                                ) { check_result = NodeFilter.FILTER_REJECT; details = "SCRIPT TEXT"        ; }
    else if(( npar.tagName  ==  "STYLE")                                                ) { check_result = NodeFilter.FILTER_REJECT; details = "STYLE TEXT"         ; }

    /* FILTER_SKIP .... (skip this node but not its children) ______________________ */
    else if(( npar.tagName   !=   "PRE") && (node.nodeType != Node.TEXT_NODE)           ) { check_result = NodeFilter.FILTER_SKIP  ; details = "NOT A TEXT NODE"    ; }
    /* _______________________________________________ PRE or TEXT to split ________ */
    else if((!node.textContent                    ) /* TEXT NONE ___________________ */ ) { check_result = NodeFilter.FILTER_SKIP  ; details = "NO TEXT CONTENT"    ; }
    else if(( node.textContent.length < WOT_LENGTH) /* TEXT SHORT __________________ */ ) { check_result = NodeFilter.FILTER_SKIP  ; details = "["+ node.textContent.length+" char] <  [WOT_LENGTH "+WOT_LENGTH+"]"; }
    else if(!get_first_word(      node.textContent) /* TEXT WORDS NONE _____________ */ ) { check_result = NodeFilter.FILTER_SKIP  ; details = "["+ node.textContent.length+" char] .. HAS NO WORDS"; }

    /* FILTER_REJECT _______________________________________________________________ */
    else if(  is_marked_to_hide(node)               /* HIDDEN NODE _________________ */ ) { check_result = NodeFilter.FILTER_REJECT; details = "NODE MARKED TO HIDE"; }

    /* FILTER_ACCEPT */
    else                                                                                  { check_result = NodeFilter.FILTER_ACCEPT; details = "["+ node.textContent.length+" char]"; }

    /*}}}*/
/*{{{*/
if(        log_this
   && (    node.textContent.length  > 32                )
   && (   (reported_count           < REPORTED_COUNT_MAX)
       || !reported_filters.includes( check_result      )
      )
  ) {
    reported_count += 1;
    if(!reported_filters.includes( check_result ) ) reported_filters.push( check_result );

    let result
        = (check_result == NodeFilter.FILTER_REJECT) ? "REJECT"
        : (check_result == NodeFilter.FILTER_SKIP  ) ? "__SKIP"
        : (check_result == NodeFilter.FILTER_ACCEPT) ? "ACCEPT"
        :                                               check_result;
    let lfx
        = (check_result == NodeFilter.FILTER_REJECT) ? lf2
        : (check_result == NodeFilter.FILTER_SKIP  ) ? lf8
        : (check_result == NodeFilter.FILTER_ACCEPT) ? lf4
        :                                              lf7;

    log(caller+":%c WOT ("+reported_count+"/"+REPORTED_COUNT_MAX+"...) "+ npar.tagName +"["+npar.textContent.length+"c]."+ node.nodeName +"%c"+result+"%c"+details+"%c "+strip_CR_LF(ellipsis(node.textContent, 64))
        ,        lbL                                                                                                                      ,lbR+lfx    ,lbL         ,lbR                                                          );
}
/*}}}*/
    return check_result;
};
/*}}}*/

/* ➔ EXPORT */
/*{{{*/
/*_ t_wot_set_state {{{*/
let t_wot_set_state = function(label,state)
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

return { name    : "dom_wot"
    ,    logging : (state) => DOM_WOT_LOG = dom_wot.t_wot_set_state("DOM_WOT_LOG", state)
    ,    tagging : (state) => DOM_WOT_TAG = dom_wot.t_wot_set_state("DOM_WOT_TAG", state)
    ,    t_wot_IMPORT
    ,    t_wot_set_state

    ,    t_WOT_FOLD_EL
    ,    t_WOT_SPLIT
    ,    t_WOT_SPLIT_done : () => wot_split_done
    /* DEBUG */
    ,    htot             : () => pre_innerHTML_to_innerText()
};
/*}}}*/
}());

