/* dom_select_js */
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
/* globals console, localStorage, setTimeout, clearTimeout */
/* globals window, document, Node, NodeFilter */

/* globals dom_data     */
/* globals dom_details  */
/* globals dom_fly      */
/* globals dom_i18n     */
/* globals dom_log      */
/* globals dom_prop     */
/* globals dom_sentence */
/* globals dom_slot     */
/* globals dom_store    */
/* globals dom_tools    */
/* globals dom_util     */

/* exported dom_select, DOM_SELECT_JS_TAG */

/* eslint-disable no-warning-comments */
/* eslint-disable dot-notation        */

const DOM_SELECT_JS_ID      = "dom_select_js";
const DOM_SELECT_JS_TAG     = DOM_SELECT_JS_ID  +" (220917:03h:11)";
/*}}}*/
let dom_select  = (function() {
"use strict";
let   DOM_SELECT_LOG        = false;
let   DOM_SELECT_TAG        = false;

/* IMPORT */
/*{{{*/
/* eslint-disable no-unused-vars */
/*➔ t_select_IMPORT {{{*/
/*{{{*/
/*....................................*/
let t_data     = {}        ;    /* 05 */
let t_log      = {}        ;    /* 06 */
let t_util     = {}        ;    /* 07 */
let t_i18n     = {}        ;    /* 08 */
let t_prop     = {}        ;    /* 09 */
let t_store    = {}        ;    /* 10 */
let t_fly      = {}        ;    /* 11 */
/* ...................................*/
/*  t_wording  = {}        ; */ /* 12 */
/*  t_select   = {}        ; */ /* 13 */
let t_slot     = {}        ;    /* 14 */
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
let t_tools    = {}        ;    /* 23 */
/*....................................*/
/*}}}*/
let t_select_IMPORT  = function(log_this)
{
/* LOAD {{{*/
/* ...................................*/
    t_data    = dom_data   ;    /* 05 */
    t_log     = dom_log    ;    /* 06 */
    t_util    = dom_util   ;    /* 07 */
    t_i18n    = dom_i18n   ;    /* 08 */
    t_prop    = dom_prop   ;    /* 09 */
    t_store   = dom_store  ;    /* 10 */
    t_fly     = dom_fly    ;    /* 11 */
/* ...................................*/
/*  t_wording = dom_wording; */ /* 12 */
/*  t_select  = dom_select ; */ /* 13 */
/*  t_wot     = dom_wot    ; */ /* 13 */
    t_slot    = dom_slot   ;    /* 14 */
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
    t_tools   = dom_tools  ;    /* 23 */
/* ...................................*/
/*}}}*/
    select_INTERN();
    /* MODULE LOGGING TAGGING {{{*/
    DOM_SELECT_LOG = DOM_SELECT_LOG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_SELECT_LOG"));
    DOM_SELECT_TAG = DOM_SELECT_TAG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_SELECT_TAG"));

    /*}}}*/
if(log_this) log("%c 12 SELECT", lbH+lf2);
};
/*}}}*/
/*_   select_INTERN {{{*/
/*{{{*/

/* t_log */
let LOG_MAP;

let lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;
let log, logBIG, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;

/*  prop */
let prop;

/*}}}*/
let   select_INTERN = function()
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
    /* t_prop {{{*/
    prop = t_prop;

    /*}}}*/
};
/*}}}*/
/* eslint-enable  no-unused-vars */
/*}}}*/

/** RANGE */
/*{{{*/
const SELECT_SLOT_MAX                = 10;
const S_TOUCHED_WORD_LENGTH_MAX      = 256;

let mStartRange =  null;
let mEndRange   =  null;
/*{{{
let mTouchPoint =  null;
}}}*/

/*}}}*/

/** CCS .. (ecc color coded nodes) */
/*{{{*/
/*{{{*/
const CONTAINER_HUGE_CHILDREN_LENGTH = 128; /* TODO */

let ccs = [];
/*}}}*/
/*_ CCS {{{*/
let CCS = function()
{
    /*   this.clear {{{*/
    this.clear = function() {
        this.slot         =  0; /* first active slot = 1 */
        this.num_selected =  1;
        this.pattern      = "";
        this.words_option = "";
        this.nodes        = [];
        this.thumbs       = [];
        this.containers   = [];

    };
    /*}}}*/
    /*   this.toString {{{*/
    this.toString = function() {

        let uniq_containers=0, c;
        for(let i=0; i<this.containers.length; ++i) {
            uniq_containers += (c !== this.containers[i]) ? 1 : 0;
            /*...............*/ c   = this.containers[i];
        }

        return   t_data.SYMBOL_RIGHT            +this.pattern      + t_data.SYMBOL_LEFT
            +t_data.LF +"Slot #"                +this.slot
            +t_data.LF +t_data.SYMBOL_ELLIPSIS +" "    +this.nodes.length + " item"     +((this.nodes.length > 1) ? "s":"")
            +t_data.LF +t_data.SYMBOL_ELLIPSIS +" in " +uniq_containers   + " container"+((  uniq_containers > 1) ? "s":"")
            +t_data.LF +t_data.SYMBOL_ELLIPSIS +" "    +this.words_option
        ;
    };
     /*}}}*/
    /*   this.num_toHTML {{{*/
    this.num_toHTML = function(num) {
        let slot_em    =              "slot=<em class='cc"+((this.slot) % SELECT_SLOT_MAX)+"'>"+ this.slot + "</em>";
        let num_em     =               "num=<em class='cc"+((     num ) % SELECT_SLOT_MAX)+"'>"+      num  + "</em>";

        let pattern_em = pattern_toHTML(this.pattern, this.words_option);

        let empty      = (this.nodes.length < 1);

        let thumb_p_str= empty ? "_" : t_get_thumb_p_str(this.get_num_thumb_p(num)) +"% ";

        let text_em    = empty ? "" : "<em class='cc7'>"                + this.nodes [num-1].textContent + "</em>";

        return ""
            + slot_em + num_em
            + thumb_p_str.replace(" ","&nbsp;")
            + pattern_em + text_em
        ;

    };
    /*}}}*/
    /*   this.get_num_thumb_p {{{*/
    this.get_num_thumb_p = function(num)
    {
        /*{{{*/
        let caller   = "get_num_thumb_p";
        let log_this = LOG_MAP.S3_SLOT;

        /*}}}*/

        /* already set */
        if( this.thumbs[num-1] ) return this.thumbs[num-1];

        /* not yet set */
        let ccs_node  = this.nodes     [num-1];
        let container = this.containers[num-1];

        let node
            = (container && container.children.length < CONTAINER_HUGE_CHILDREN_LENGTH)
            ?  container
            :  ccs_node;

        let thumb_p = get_node_thumb_p( node );
        if( thumb_p < 0.01)
        {
/*{{{  FIXME   SHOULD NOT BE COLLECTED
log(caller+"%c SHOULD NOT BE COLLECTED %c'"+t_util.get_n_txt(node)+"'%c .. (thumb_p < 0.1)=["+thumb_p+"]"
    ,       lbH+lf2                   ,lb8                          ,lbH+lf2                             );
}}}*/

/* OUT-OF-VIEW POS CAN BE A FILTER AT COLLECTING TIME ONLY */
/*{{{
            ccs_node.outerHTML = ccs_node.innerHTML;
}}}*/
        }
        let thumb_p_str = "";
        if( thumb_p ) {
            thumb_p_str = t_get_thumb_p_str( thumb_p );
/*{{{
            if(!thumb_p_str)
            {
log("%c *** INVALID thumb_p=["+thumb_p+"] .. container=["+t_util.get_n_lbl(container)+"] ccs_node=["+t_util.get_n_lbl(ccs_node)+"] ***", lbH+lf2);

            }
}}}*/
        }
        this.thumbs[num-1] = thumb_p_str;

if(log_this) log(caller+"("+num+"): slot=["+this.slot+"] num=["+(num)+"] thumb_p=["+thumb_p_str+"] ["+ccs_node.textContent+"]");
        return this.thumbs[num-1];
    };
    /*}}}*/
    this.clear(); /* construction-time-init */
};
/*}}}*/
/*…   get_free_slot {{{ */
/*{{{*/
let next_to_reuse_slot          =   1;

/*}}}*/
let   get_free_slot = function()
{
    let caller = "get_free_slot";
let log_this = DOM_SELECT_LOG || LOG_MAP.S3_SLOT;
let tag_this = DOM_SELECT_TAG || log_this;

    /* pick first available color slot */

    /* SKIP USED SLOTS  slot=[1..10] .. ccX=[1..0] */
    let slot;
    for(slot = 1; slot <= SELECT_SLOT_MAX; ++slot)
    {
        let ccX       = slot % SELECT_SLOT_MAX;
        let sel_class = SEL_CLASS_PREFIX + ccX;
        let selector  = "."+sel_class;

        let el = document.querySelector( selector ); /* .. (first will do) */
        if(!el) break;
    }

    if(slot <= SELECT_SLOT_MAX) {
        next_to_reuse_slot = slot + 1; if(next_to_reuse_slot > SELECT_SLOT_MAX) next_to_reuse_slot = 1;
if(tag_this) log("%c"+caller+"%c 1/2 - FREE  SLOT ["+slot+"] .. next_to_reuse_slot=["+next_to_reuse_slot+"]", lbL+lf8, lbR+lf5);
    }
    else {
        slot = next_to_reuse_slot;
        next_to_reuse_slot = slot + 1; if(next_to_reuse_slot > SELECT_SLOT_MAX) next_to_reuse_slot = 1;
if(tag_this) log("%c"+caller+"%c 2/2 - REUSE SLOT ["+slot+"] .. next_to_reuse_slot=["+next_to_reuse_slot+"]", lbL+lf8, lbR+lf7);
    }

    if(   !ccs[slot] ) ccs[slot] = new CCS();
    else t_slot.t_clear_slot(     slot);

    return slot;
};
/*}}}*/
/*…   ccs_sort_pattern {{{*/
let   ccs_sort_pattern = function()
{
    ccs.sort(
        function(a, b) {
            return b.pattern - a.pattern;
        }
    );
};
/*}}}*/
/*…   ccs_log {{{*/
let   ccs_log = function()
{
    for(let slot = 0; slot < ccs.length; ++slot)
    {
        if(ccs[slot])
            log(slot+" "+ ccs[slot].toString());
    }
};
/*}}}*/
/*…   get_ccs_slot_num_thumb_p {{{*/
let   get_ccs_slot_num_thumb_p = function(slot, num)
{
    return ccs[slot].thumbs[num-1];
};
/*}}}*/
/*…   get_node_thumb_p {{{*/
/*{{{*/
const THUMB_OFFSET = 0;/*64; NOTE: not needed when using onDown_XY*/
let ph;
let reset_page_geometry = function() { ph = 0; }; /* all caller of get_node_thumb_p should call this first */

let last_node_thumb_p   = {};   /* browsing parents with many children */

/*}}}*/
let   get_node_thumb_p    = function(node)
{
    if(last_node_thumb_p && (last_node_thumb_p.node == node))
        return last_node_thumb_p.thumb_p;

    if(!ph)   ph = t_util.getPageHeight();

    let node_top = t_util.getInPageTop(node) - THUMB_OFFSET;

    last_node_thumb_p.thumb_p = 100 * node_top / ph;
    last_node_thumb_p.node    = node;

    return last_node_thumb_p.thumb_p;
};
/*}}}*/
/*}}}*/
/*➔ t_select_get_slot_nodes_length {{{*/
let t_select_get_slot_nodes_length = function(slot)
{
    return ccs[slot]
        ?  ccs[slot].nodes.length
        :  0
    ;
};
/*}}}*/
/*➔ t_select_get_ccs_length {{{*/
let t_select_get_ccs_length = function()
{
    return ccs.length;
};
/*}}}*/
/*➔ t_select_get_slot_num_selected {{{*/
let t_select_get_slot_num_selected = function(slot)
{
    return ccs[slot]
        ?  ccs[slot].num_selected
        :  0
    ;
};
/*}}}*/
/*➔ t_select_set_slot_num_selected {{{*/
let t_select_set_slot_num_selected = function(slot, num_selected)
{
    ccs[slot].num_selected = num_selected;
};
/*}}}*/
/*➔ t_select_get_slot_num_node {{{*/
let t_select_get_slot_num_node = function(slot,num)
{
    return ccs[slot]
        ?  ccs[slot].nodes[num-1]
        :  null
    ;
};
/*}}}*/
/*➔ t_select_get_slot_pattern {{{*/
let t_select_get_slot_pattern = function(slot)
{
    return ccs[slot]
        ?  ccs[slot].pattern
        :  null
    ;
};
/*}}}*/
/*➔ t_select_switch_from_to_slot {{{*/
let t_select_switch_from_to_slot = function(was_slot,new_slot)
{
/*{{{*/
let   caller = "t_select_switch_from_to_slot";
let log_this = LOG_MAP.S3_SLOT;

/*}}}*/
    let ccs_was_in_slot = ccs[new_slot];
    let ccs_new_in_slot = ccs[was_slot];

    ccs[was_slot]       = ccs_was_in_slot;
    ccs[new_slot]       = ccs_new_in_slot;

    if(ccs[was_slot])     ccs[was_slot].slot = was_slot;
    if(ccs[new_slot])     ccs[new_slot].slot = new_slot;

if(log_this                 ) log(caller+"("+was_slot+" , "+new_slot+"):");
if(log_this && ccs[new_slot]) log("...PUSHED IN: ["+ccs[new_slot].slot+"]=["+ccs[new_slot].pattern+"]");
if(log_this && ccs[was_slot]) log("...MOVED OUT: ["+ccs[was_slot].slot+"]=["+ccs[was_slot].pattern+"]");
};
/*}}}*/
/*➔ t_select_clear_slot {{{*/
let t_select_clear_slot = function(slot)
{
    if(ccs[slot]) ccs[slot].clear();
};
/*}}}*/
/*➔ t_get_thumb_p_str {{{*/
let t_get_thumb_p_str = function(thumb_p)
{
    if(thumb_p < 0) return "";

    let thumb_i = Math.trunc(       thumb_p           );
    let thumb_f = Math.round(100 * (thumb_p - thumb_i)); /* 2 decimals */

    thumb_i = t_util.mPadStart(thumb_i,2," ");
    thumb_f = t_util.mPadStart(thumb_f,2,"0");

    return (thumb_i +"."+ thumb_f);
};
/*}}}*/

/** EVENTS */
/*_ [tse] object usage {{{
    tse.s    .. word start
    tse.e    .. word end
    tse.t    .. word text
    tse.drop .. dropped suffix (as of 181024)
}}}*/
/* SELECT {{{*/
/*  touchedWord {{{ */
/*{{{*/
let touchedWord_range_parent;
let touchedWord_slot;

/*}}}*/
let touchedWord = function(x,y) /* eslint-disable-line complexity */
{
/*{{{*/
let   caller = "touchedWord(x="+x+" , y="+y+")";
let log_this = LOG_MAP.S1_RANGE;

if(log_this) log(caller);
/*}}}*/
    /* get_range_from_XY {{{ */
    touchedWord_range_parent = null;

    let  rangeFromXY = get_range_from_XY(x, y);

    if( !rangeFromXY ) {
if(log_this) t_log.log_TR_SELECT_set("<em class='big'>SELECTION: NO RANGE AT ["+x+"@"+y+"]</em>");
        return;
    }
    /*}}}*/
    /* 1/3 CLEAR CLICKED SELECTION {{{*/
    let slot = get_slot_for_range(rangeFromXY);
    if( slot >= 0) {
if(log_this) t_log.log_TR_SELECT_set("<em class='big'>SELECTION: CLEAR CLICKED SLOT #"+slot+"</em>");

        t_slot.t_clear_slot( slot );

        return;
    }
    /*}}}*/
    /* 2/3 selected word range {{{*/
    let range = touchedWord_adjust( rangeFromXY );
    if(!range ) {
if(log_this) t_log.log_TR_SELECT_set("<em class='big'>SELECTION: NO WORD RANGE</em>");

        return;
    }
    /*}}}*/
    /* BUT: SKIP CSS_LINE_NUM {{{*/
    if(   range
       && range.startContainer && range.startContainer.parentElement
       && t_util.has_el_class(    range.startContainer.parentElement, t_data.CSS_LINE_NUM)
      ) {
/*{{{
logBIG("range.startContainer=["+t_util.get_id_or_tag(range.startContainer)+"] ["+range.toString()+"]")C;
console_dir("range.startContainer", range.startContainer);
console_dir("range.startContainer.parentElement", range.startContainer.parentElement);
}}}*/

        return;
    }
    /*}}}*/
    /* 3/3 CLEAR CLICKED SELECTION (adjusted) {{{*/
if(log_this) t_log.log_TR_RESULT_set( rangeToString(range, caller) );

    slot = get_slot_for_range(range);
    if( slot >= 0) {
if(log_this) t_log.log_TR_SELECT_set("<em class='big'>SELECTION: CLEAR ADJUSTED SLOT #"+slot+"</em>");
        t_slot.t_clear_slot( slot );
        return;
    }
    /*}}}*/
    /* Select new range {{{*/

  /*let touched_text =  t_util.get_first_word( range.toString(), caller);*/
    let touched_text =                  range.toString();
if(log_this) log("touched_text=["+touched_text+"]");

    if( touched_text )
    {
if(log_this) t_log.log_TR_SELECT_set("<em class='big'>SELECTION: FILTER=["+touched_text+"]</em>");
/*{{{
logXXX("...touched_text=["+touched_text+"]")
}}}*/
        /* [t_data.WORDS_SEGMENT] .. (RAW REGEX FILTER) .. (escaped otherwise) */
        if(!prop.get(t_data.WORDS_SEGMENT) ) {
            let escaped_filter = t_escapeREGEX( touched_text );

if( log_this) log(   ".....touched_text: %c"+ touched_text
                   +                    "%c"+t_data.LF
                   + "...escaped_filter: %c"+ escaped_filter
                   ,                     lb9
                   ,                     lbA
                   ,                     lb3
                 );
        }
        /* optional suffix regex */
        if(range.drop) {
            touched_text += "("+range.drop+")?";
/*{{{
logXXX("...range.drop["+range.drop+"] .. touched_text=["+touched_text+"]")
}}}*/
        }

        touchedWord_range_parent = range.startContainer.parentNode;

        t_tools.t_words_regex_reset( touched_text);
        check_TreeWalker(      "", touched_text);

        return;
    }
    /*}}}*/
};
/*}}}*/
/*_ get_slot_for_range {{{*/
/*{{{*/
const SEL_CLASS_PREFIX = "select";

/*}}}*/
let get_slot_for_range = function(range)
{
/*{{{*/
let caller = "get_slot_for_range";
let log_this = LOG_MAP.S3_SLOT;

if( log_this) log(caller+"("+range.toString()+"):");
/*}}}*/
    /* return range.parentNode highlight slot */
    let slot = -1;

    if(range.startContainer && (range.startContainer.parentNode.id))
    {
        slot = range.startContainer.parentNode.id.startsWith( SEL_CLASS_PREFIX )
            ?  range.startContainer.parentNode.id.substring ( SEL_CLASS_PREFIX.length, SEL_CLASS_PREFIX.length+1)
            :                                                 -1
        ;
    }

if( log_this) log(caller+"("+range.toString()+"): return ["+slot+"] .. (startContainer: id=["+range.startContainer.id+"] parentNode.id=["+range.startContainer.parentNode.id+"])");

    if((slot >=0) && !ccs[slot]) ccs[slot] = new CCS();

    return slot;
};
/*}}}*/
/*  t_escapeREGEX {{{*/
/*{{{*/
const s_escapeREGEX_chars
    = {  "\\" : "\\\\"

        ,"^"  :  "\\^"
        ,"$"  :  "\\$"
        ,"."  :  "\\."
        ,"+" :  "\\+"
        ,"*" :  "\\*"

        ,"("  :  "\\("
        ,")"  :  "\\)"
        ,"["  :  "\\["
        ,"]"  :  "\\]"
    };

const regexp_REGEX_CHARS = new RegExp("[\\\\"+"^$"+"\.\+\*"+"\\(\\)\\[\\]]", "g");
/*}}}*/
let t_escapeREGEX = function (text)
{
  return text.replace(regexp_REGEX_CHARS, function(character) { return s_escapeREGEX_chars[character]; });
};
/*}}}*/

/*  touchedWord_adjust {{{ */
let touchedWord_adjust = function(range)
{
/*{{{*/
let   caller = "touchedWord_adjust";
let log_this = LOG_MAP.S1_RANGE;

if( log_this) log(caller+"("+range.toString()+"):");
/*}}}*/
    /* 1/3 - EXPANDED TO EMBEDDING-CONTAINERS {{{*/
    let node = range.startContainer ? range.startContainer : range.offsetNode;
    let text = t_util.strip_CR_LF(node.textContent);
    if(    (text.length > 0)
       &&  !prop.get( t_data.WORDS_EXACT   )
       &&  !prop.get( t_data.WORDS_SEGMENT )
       &&  touchedWord_adjust_1_in_embedding_container(range)
      ) {
if(log_this) log("...EXPANDED TO EMBEDDING-CONTAINERS %c["+ t_util.strip_CR_LF(range.toString()) +"]", lb6);
        return range;
    }
    /*}}}*/
    /* 2/3 - EXPANDED TO SELECTION-RANGE {{{*/
    if(touchedWord_adjust_2_in_selection(range)) {
        if( prop.get(t_data.WORDS_EXACT) ) {
/*{{{
if(log_this) log("%c *** t_data.WORDS_EXACT OPTION SELECTED ... CANNOT BE EXPANDED TO SELECTION-RANGE *** ", lbF+lb3);
            t_selection_add_cannot_expand();
            return null;
}}}*/
            t_tools.t_override_USER_OPTION(t_data.WORDS_EXACT    , false);
            t_tools.t_override_USER_OPTION(t_data.WORDS_HEAD_TAIL, false);
            t_tools.t_override_USER_OPTION(t_data.WORDS_SEGMENT  ,  true);
        }
if(log_this) log("...EXPANDED TO SELECTION-RANGE %c["+t_util.strip_CR_LF(range.toString())+"]", lb5);
        return range;
    }
    /*}}}*/
    /* 3/3 - GOT WORD FROM SYNTAXIC LOOKUP {{{*/
    let word_range = touchedWord_adjust_3_word_syntaxic_lookup(range);
    if( word_range )
    {
if(log_this) log("...GOT WORD FROM SYNTAXIC LOOKUP %c["+t_util.strip_CR_LF(word_range.toString())+"]", lb5);
        return word_range;
    }
    /*}}}*/
if(log_this) log("... GOT NO WORD FROM SYNTAXIC LOOKUP %c["+t_util.strip_CR_LF(range.toString())+"]", lb5);
    return null;
};
/* }}}*/
/*_ touchedWord_adjust_1_in_embedding_container {{{*/
let touchedWord_adjust_1_in_embedding_container = function(range) /* eslint-disable-line complexity */
{
/*{{{*/
let   caller = "touchedWord_adjust_1_in_embedding_container";
let log_this = LOG_MAP.S1_RANGE;

if( log_this) log(caller+"("+range.toString()+"):");
if( log_this) t_log.console_dir(caller+"(range)", range);
/*}}}*/
    /* INLINING CONTAINER {{{*/
    let node          = range.startContainer ? range.startContainer : range.offsetNode;
    let node_parent   = node.parentNode;
    let node_before   = node.previousSibling;
    let node_after    = node.nextSibling;
    let node_longword = (node_parent.textContent && (node_parent.textContent.length > S_TOUCHED_WORD_LENGTH_MAX));
    let node_inline
        =  (node_parent.tagName == "A"     )
        || (node_parent.tagName == "CITE"  )
        || (node_parent.tagName == "CODE"  )
        || (node_parent.tagName == "EM"    )
        || (node_parent.tagName == "I"     )
        || (node_parent.tagName == "LABEL" )
        || (node_parent.tagName == "SMALL" )
        || (node_parent.tagName == "SPAN"  )
        || (node_parent.tagName == "SUP"   )
        || (node_parent.tagName == "U"     )
        || (node_parent.tagName == "VAR"   )
    ;

if( log_this) { /*{{{*/
    log_key_val( caller
                 , {   node
                     , node_parent
                     , node_before
                     , node_after
                     , node_longword : node_longword ? "node_longword ("+node_parent.textContent.length+" > "+S_TOUCHED_WORD_LENGTH_MAX+")" : false
                     , node_inline   : node_inline +" ("+node_parent.tagName+")"
                 }
                 , lf1
               );
}
/*}}}*/
    /*}}}*/
    /* RETURN FALSE .. RANGE UNCHANGED {{{*/
    let rejected_by = "";
    if     ( !node_parent   ) rejected_by = "!node_parent";
    else if( !node_inline   ) rejected_by = "!node_inline ("+node_parent.tagName+")";
    else if(  node_longword ) rejected_by = "node_longword xtContent.length > "+S_TOUCHED_WORD_LENGTH_MAX+")";
/* else if((!node_before && !node_after)  ) rejected_by = "(!node_before && !node_after)"; */

    if(rejected_by) {
if(log_this) log(caller+": %c "+ rejected_by, lb6);
        return false;
    }
    /*}}}*/
    /* RETURN TRUE: .. RANGE EXPANDED {{{*/
    if( node_inline)
    {
        let text = t_util.strip_CR_LF(node.textContent);
        let    s = range.startOffset;
        let    e = range.  endOffset;

/*{{{*/
if(log_this) {
    log(caller+": s=["+s+"] e=["+e+"] "+ t_util.node_toString(node));
    log("...%c node_parent=["+t_util.get_n_lbl(node_parent)+"]", lb7); if(node_parent) console.dir(node_parent);
    log("...%c node_before=["+t_util.get_n_lbl(node_before)+"]", lb3); if(node_before) console.dir(node_before);
    log("...%c text.......=["+text+"]"                         , lb4);
    log("...%c node_after.=["+t_util.get_n_lbl(node_after  )+"]", lb5); if(node_after ) console.dir(node_after);
    log("___length=["+node.data.length+"]");
    log("___[123456789_1234567890]");
    log("___["+node.data+"]");
}
/*}}}*/

            range.setStart(node, 0);
            range.setEnd  (node, text.length);

            /* TRIM LEADING spaces {{{*/
            while(range.toString().startsWith(" ") || range.toString().startsWith("\t")) { range.setStart(node, range.startOffset+1); range.setEnd  (node, range.  endOffset+1); }
            while(range.toString().  endsWith(" ") || range.toString().  endsWith("\t")) {                                            range.setEnd  (node, range.  endOffset-1); }
            /*}}}*/

            /* TRIM SURROUNDING BRACKETS {{{*/
            if((text[0] == "[") && (text[text.length-1] == "]"))
            {
if(log_this) log("...TRIM SURROUNDING BRACKETS %c["+ t_util.strip_CR_LF(range.toString()) +"]", lb6);
                range.setStart(node, 1);
                range.setEnd  (node, text.length-1);
            }
            /*}}}*/

/*{{{*/
if(log_this) {
    log("...........................range=%c["+t_util.strip_CR_LF( range.toString() ) +"]", lb6);
    t_util.log_range(range,caller);
}
/*}}}*/
    }
    return true;
    /*}}}*/
};
/*}}}*/

/*_ touchedWord_adjust_2_in_selection {{{*/
let touchedWord_adjust_2_in_selection = function(range)
{
/*{{{*/
let   caller = "touchedWord_adjust_2_in_selection";
let log_this = LOG_MAP.S1_RANGE;

if( log_this) log(caller+"("+range.toString()+"):");
/*}}}*/
    /* RETURN FALSE .. NO CURRENT SELECTION OR NO RANGE {{{*/
    let        onDown_SELECTION = t_tools.get_onDown_SELECTION();             let rejected_by = "";
    if((typeof onDown_SELECTION) == "undefined"                         ) rejected_by = "onDown_SELECTION...............: NOT DEFINED";
    else if(  !onDown_SELECTION                                         ) rejected_by = "onDown_SELECTION...............: NONE";
    else if(  !onDown_SELECTION.anchorNode                              ) rejected_by = "onDown_SELECTION.anchorNode....: NONE";
    else if(  !onDown_SELECTION.focusNode                               ) rejected_by = "onDown_SELECTION.focusNode.....: NONE";
    else if(   onDown_SELECTION.anchorNode != onDown_SELECTION.focusNode) rejected_by = "onDown_SELECTION...............: MULTI-NODE-SELECTION";
    else if(   onDown_SELECTION.isCollapsed                             ) rejected_by = "onDown_SELECTION...............: isCollapsed";
    else if(  !range                                                    ) rejected_by = "range........................... NO range";
    else if(  !range.startContainer                                     ) rejected_by = "range.startContainer...........: NO startContainer";
    else if( !(onDown_SELECTION.containsNode(range.startContainer,true))) rejected_by = "onDown_SELECTION.containsNode(): OUT OF SELECTION";

    if(rejected_by)
    {
if(log_this) log(caller+": onDown_SELECTION=["+onDown_SELECTION+"] .. %c "+ rejected_by, lb5);
        return false;
    }
    /*}}}*/

    /* TRUE .. [focusNode] CONTAINS [startContainer] */
    /*{{{*/
/*{{{
if(log_this) {
    log("...focusNode.....: %c["+ t_util.strip_CR_LF(onDown_SELECTION     .focusNode.textContent) +"]", lb4);
    log("...startContainer: %c["+ t_util.strip_CR_LF(           range.startContainer.textContent) +"]", lb5);
}
}}}*/
/* comparePoint {{{*/
/*
if(log_this) log("...range.comparePoint( onDown_SELECTION.focusNode     ,0)=["+ range.comparePoint( onDown_SELECTION.focusNode     ,0) +"]");
if(log_this) log("...range.comparePoint(            range.startContainer,0)=["+ range.comparePoint(            range.startContainer,0) +"]");
*/
/*}}}*/
    /* EXPAND TO SELECTION {{{*/
    let node = range.startContainer;
/*{{{
if(log_this) {
    log(caller+": EXPAND TO SELECTION:");
    log("...onDown_SELECTION.anchorOffset=%c["+ onDown_SELECTION.anchorOffset   +"]", lb4);
    log("...onDown_SELECTION.focusOffset.=%c["+ onDown_SELECTION.focusOffset    +"]", lb5);
    log("............................node=%c["+ t_util.strip_CR_LF(  node.textContent) +"]", lb6);
    log("...........................range=%c["+ t_util.strip_CR_LF( range.toString() ) +"]", lb6);
    t_util.log_range(range,caller);
}
}}}*/
    if(onDown_SELECTION.anchorOffset < onDown_SELECTION.focusOffset)
    {
        range.setStart(node, onDown_SELECTION.anchorOffset);
        range.setEnd  (node, onDown_SELECTION.focusOffset );
    } else {
        range.setStart(node, onDown_SELECTION.focusOffset );
        range.setEnd  (node, onDown_SELECTION.anchorOffset);
    }

    /* ADJUST TO WORD START-END {{{*/
    /* touchedWord_adjust_2_in_selection_word_bounds(range); */

    /*}}}*/
if(log_this) {
    log(caller+": %c onDown_SELECTION=["+onDown_SELECTION+"]"                      , lb6);
    log("...........................range=%c["+t_util.strip_CR_LF( range.toString() ) +"]", lb6);
    t_util.log_range(range,caller);
}
/*{{{
}}}*/
    /*}}}*/
    return true;
    /*}}}*/

};
/*}}}*/
/*_ touchedWord_adjust_2_in_selection_word_bounds {{{*/
let touchedWord_adjust_2_in_selection_word_bounds = function(range)
{
/*{{{*/
let   caller = "touchedWord_adjust_2_in_selection";
let log_this = LOG_MAP.S1_RANGE;

if( log_this) log(caller+"("+range.toString()+"):");
/*}}}*/
    if(!prop.get(t_data.WORDS_SEGMENT) )
    {
if(log_this) log("ADJUSTING TO WORDS BOUNDARIES");

        let node = range.startContainer;
        let t = node.textContent ;
if(log_this) log(".......t=%c["+ t_util.strip_CR_LF(t_util.escape_CR_LF(t)) +"]", lb3);
if(log_this) log("...range=%c["+ range.toString()             +"]", lb3);

        let s = range.startOffset+1;
        let e = range.endOffset;
        let l = t.length;

        while((s <= l) && !t_util.isAlNum( t.charAt(s-1) )         ) s += 1; /* skip leading blanks */
        while((s >= 1) &&  t_util.isAlNum( t.charAt(s-1) )         ) s -= 1; /* fore to first-word  left-boundary */
        if(               !t_util.isAlNum( t.charAt(s-1) )         ) s += 1; /* back to first-word first-char */

        while((e >= s) && !t_util.isAlNum( t.charAt(e-1) )         ) e -= 1; /* skip trailing blanks */
        while(             t_util.isAlNum( t.charAt(e) ) && (e < l)) e += 1; /* fore to last-word last-char */

        s = Math.min(s,l);
if(log_this) log("...l=["+l+"] .. s=["+s+"]=[%c"+ t.charAt(s-1) +"%c] .. e=["+e+"]=[%c"+ t.charAt(e-1) +"%c]", lb1+lbF,lbA , lb2+lbF,lbA);

        range.setStart(node, s-1);
        range.setEnd  (node, e  );

if(log_this) log("...range=%c["+ range.toString() +"]", lb3);
    }
};
/*}}}*/
/*_ touchedWord_adjust_3_word_syntaxic_lookup {{{*/
let touchedWord_adjust_3_word_syntaxic_lookup = function(range) /* eslint-disable-line complexity */
{
/*{{{*/
let   caller = "touchedWord_adjust_3_word_syntaxic_lookup";
let log_this = LOG_MAP.S1_RANGE;

if( log_this) log(caller+"("+range.toString()+"):");
/*}}}*/
    /* WORD SEARCH LOOP {{{*/
    let node = range.startContainer ? range.startContainer : range.offsetNode;
    let    s = range.startOffset   ;
    let    e = range. endOffset    ;
    let  tse = {s:0, e:0, t:""};

    for(let loop_num = 0; node != null; ++loop_num)
    {
        /* TERMINATE SEARCH WHEN LOG IS FULL {{{*/
        if(t_log.get_log_is_full()) {
            log();
            break;
        }
        /*}}}*/
        /* LOOK FOR CLOSEST TEXT NODE .. (current or previous) {{{*/
        /* SEARCH PREVIOUS TEXT NODE */
        if(    (node.nodeType != Node.TEXT_NODE) /* .. (not a text_node) */
            || (loop_num > 0)                    /* .. (word not found ) */
        ) {
            node = range_setStart_at_end_of_previous_text_node( range );
            if(node == null)
            {
if(log_this) log("...got nothing from range_setStart_at_end_of_previous_text_node");
                break;
            }

if(log_this) {
    if(range.startContainer) log("___.........range.startContainer.=["+  range.startContainer.textContent +"]");
    if(range.offsetNode    ) log("___.........range.....offsetNode.=["+  range.offsetNode                 +"]");
    log("___.node.........................=["+  node.textContent                 +"]");
    if(range.startContainer) log("___(node == range.startContainer)=["+ (node == range.startContainer)    +"]");
    if(range.offsetNode    ) log("___(node == range.....offsetNode)=["+ (node == range.offsetNode    )    +"]");
}
/*{{{
}}}*/

            s = range.startOffset   ;
            e = range. endOffset    ;
        }
        /* }}}*/
        /* RANGE start boundary NODE text {{{*/
        let text =  node.textContent;
        let l    =  node.textContent.length;

        /*}}}*/
        /* WORD START-END {{{*/
        tse.t = text;
        tse.s = s;
        tse.e = e;
        get_word_start_end( tse );
        s = tse.s;
        e = tse.e;
if(log_this) {
    log("...get_word_start_end: s=["+s+"]=["+t_util.strip_CR_LF(t_util.escape_CR_LF(text.charAt(s-1)))+"] e=["+e+"]=["+text.charAt(e-1)+"]");
    log("<em>"+ t_util.mPadStart(""+ loop_num,3," ")
    + " s=["+s+"]=["+ text.charAt(s-1)            +"]"
    + " e=["+e+"]=["+ text.charAt(e-1)            +"]"
    + " l=["+l+"]=["+ t_util.trim_node_textContent(node) +"]</em>");
}
        /*}}}*/
        /* WORD NOT FOUND .. CONTINUE {{{*/
        if(e <= s) {
if(log_this) log("%c WORD NOT FOUND", lb3);

        }
        /*}}}*/
        /* WORD FOUND .. BREAK {{{*/
        else {
if(log_this) log("%c WORD FOUND: <em>"+text.substring(s-1, e)+"</em>", lb4);

            break;
        }
        /*}}}*/
    }
    /*}}}*/
    /* RETURN FALSE: WORD NOT FOUND {{{*/
    if( !node ) {

if(log_this) log("%c FOUND NO TEXT NODE", lb2);
        return null;
    }
    /*}}}*/
    /* RETURN TRUE: WORD AS A TEXT RANGE {{{*/
    range.setStart(node, s);
    range.setEnd  (node, e);
    if(tse.drop) range.drop = tse.drop;

    let word = range.toString();
if(log_this) log("SELECTED WORD s=["+s+"] e=["+e+"] l=["+word.length+"] word: <em>"+word+"</em> FROM: <em>"+ t_util.truncate(t_util.trim_node_textContent(node)) +"</em>");
    return range;
    /*}}}*/
};
/*}}}*/

/*}}}*/
/* WORD {{{*/
/*{{{*/
const CHECK_LOG_MAX       =  64;
const TOO_MANY_SELECTIONS = 256;

let mNodeRegexP;
/*}}}*/
/*  get_word_at_offset {{{*/
let get_word_at_offset = function(text, offset)
{
    let tse = { s:offset, e:offset, t:text };

    get_word_start_end(tse);

    return text.substring(tse.s, tse.e);
};
/*}}}*/
/*_ get_word_start_end {{{*/
let get_word_start_end = function(tse)
{
    /* ..........................10........20........30  */
    /* ................. 123456789_123456789_123456789_  */
    let t = tse.t;
    let s = tse.s;
    let e = tse.e;
    let l = tse.t.length;

    if(s>l) s = l;
    if(s<1) s = 1;

    while((s >= 1) && !t_util.isAlNum( t.charAt(s-1) )) s -= 1;
    while((s <= l) && !t_util.isAlNum( t.charAt(s-1) )) s += 1;
    while((s >= 1) &&  t_util.isAlNum( t.charAt(s-1) )) s -= 1;

    e = s;
    while( t_util.isAlNum( t.charAt(e) ) && (e < l)) e += 1;

    tse.s = s;
    tse.e = e;

    get_word_end_up_to_dropped_suffix(tse);
};
/*}}}*/
/*_ get_word_end_up_to_dropped_suffix {{{*/
/*{{{*/

/*}}}*/
let get_word_end_up_to_dropped_suffix = function(tse)
{
/*{{{*/
let    word = tse.t.substring(tse.s, tse.e);
let  caller = "get_word_end_up_to_dropped_suffix("+word+")";
let log_this = LOG_MAP.S1_RANGE;

if(log_this) log(caller);

    let len = tse.e - tse.s;
    let suffix, must_not_end_with, min_len;
/*}}}*/
    /* ignore case {{{*/
    let ignore_case
        = prop.get(t_data.WORDS_DROP_CASE);

    if( ignore_case )
        word = word.toLowerCase();

/* FACTORIZATION OF AN UNDECIDED NUMBER OF SUFFIXES: {{{
    - property name would start with "words_drop_"
    - new suffix would be added to the end to guess the name of the correponding option the user can check
    ...an attempt to deal with doubled consonants (WIP):
    // {{{ ~/VIM/DICT/linux.words

            e -= word.endsWith("tting") ? 4
               : word.endsWith("ssing") ? 4
               : word.endsWith("ssing") ? 4
            ;
    bbing
    dding
    eeing
    ffing
    gging
    lling
    mming
    nning
    ooing
    pping
    rring
    ssing
    tting
    zzing

    //}}}
}}}*/
    /*}}}*/
    for(let i = 0; i  < t_data.WORDS_SUFFIXES.length; ++i) {
        /* only when the user has checked the option to drop this suffix {{{*/
        suffix        = t_data.WORDS_SUFFIXES[i];
        let prop_name ="words_drop_"+suffix;

        if(!prop.get(prop_name) ) {
if(log_this) log(   "!prop.get("+prop_name+")");
            continue;
        }
        /*}}}*/
        /* drop suffix {{{*/
        min_len           = t_data.WORDS_SUFFIXE_MIN_LEN  [suffix] || suffix.length;
        must_not_end_with = t_data.WORDS_MUST_NOT_END_WITH[suffix];
        if(   (len >= min_len)
           &&  word.endsWith( suffix )
           && (!must_not_end_with || !word.endsWith(must_not_end_with)) /* .. OK, it does not! */
          ) {
            tse.drop = suffix;
            tse.e   -= suffix.length;
            break;
        }
        /*}}}*/
    }
/*{{{*/
if(log_this && tse.drop) {
    log("..............suffix=["+ suffix            +"]");
    log(".............min_len=["+ min_len           +"]");
    log("...must_not_end_with=["+ must_not_end_with +"]");

    log("%c"+caller+"%c return ["+tse.t.substring(tse.s, tse.e)+"] %c"+(tse.drop ? " .. drop=["+tse.drop+"]" : "")
       , lbH        ,lbH+lf4                                      ,lbH+lf3                                        );
}
/*}}}*/
};
/*}}}*/
/*_ range_setStart_at_end_of_previous_text_node {{{ */
let range_setStart_at_end_of_previous_text_node = function(range)
{
/*{{{*/
let   caller = "range_setStart_at_end_of_previous_text_node";
let log_this = LOG_MAP.S1_RANGE;

if( log_this) log(caller+"("+range.toString()+"):");

/*}}}*/
    /* GET PREVIOUS TEXT NODE {{{*/
    let node = getPreviousTextNode(range.startContainer ? range.startContainer : range.offsetNode);
    /*}}}*/
    /* AND COLLAPSE RANGE AT THE END {{{*/
    if(node && node.nodeValue)
    {
        let s = node.nodeValue.length;
        let e = s;
        range.setStart(node, s);
        range.setEnd  (node, e);
    }
    /*}}}*/
if(log_this) log(caller+": %c PREVIOUS-TEXT-NODE=["+ t_util.node_toString(node) +"]", lbF+lb6);
    return node;
};
/*}}}*/
/*_ getPreviousTextNode {{{ */
let getPreviousTextNode = function(node) /* eslint-disable-line complexity */
{
/*{{{*/
let   caller = "getPreviousTextNode";
let log_this = LOG_MAP.S1_RANGE;

if(log_this) log(caller+"(node=["+ t_util.node_toString(node)+"]");

    let previousNode = null;
/*}}}*/
    try {
        /* TreeWalker root .. (look for a parent having more than this single text-typed child) {{{*/
        let   root = null;
        for(  root  = node.parentNode
            ;(root != null) && (root.children.length < 2)
            ; root  = root.parentNode
        ) {
if(log_this) log("...root="+ t_util.node_toString( root ));
        }
        if(root == null)
        {
if(log_this) log("getPreviousTextNode: ...return null");
            return null;
        }

if(log_this) log("SEARCHING ROOT: "+ t_util.node_toString(root));
        /*}}}*/
        /* TreeWalker {{{*/
        let mTreeWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, mNodeFilter_function);
        mNodeRegexP     = null;

        if(log_this) {
            root  = mTreeWalker.root;
            log("...mTreeWalker.root: "+                          t_util.node_toString( mTreeWalker.root ) );
            log("....root.parentNode: "+ (!root.parentNode ? "" : t_util.node_toString( root.parentNode  )));
            log("....root.firstChild: "+ (!root.firstChild ? "" : t_util.node_toString( root.firstChild  )));
            log("....root. lastChild: "+ (!root. lastChild ? "" : t_util.node_toString( root. lastChild  )));
        }
        /*}}}*/
        /* SEEK TO REFERENCE NODE {{{*/
        while(mTreeWalker.nextNode())
        {
            if(node == mTreeWalker.currentNode)
            {
                if(log_this) {
                    log("REACHED REFERENCE NODE");
                    log("|..mTreeWalker.currentNode.............:"+ ( mTreeWalker.currentNode                                                ));
                    log("|..mTreeWalker.currentNode.nodeValue...:"+ (!mTreeWalker.currentNode ? "" : mTreeWalker.currentNode.nodeValue       ));
                    log("|==mTreeWalker.currentNode.textContent=["+ (!mTreeWalker.currentNode ? "" : mTreeWalker.currentNode.textContent +"]"));
                }
                break;
            }
        }
        /*}}}*/
        /* RETURN PREVIOUS NODE {{{*/
        do {
            previousNode = mTreeWalker.previousNode();
            if(log_this) {
                log("mTreeWalker.previousNode():");
                log("|..previousNode.............:"+ ( previousNode                                     ));
                log("|..previousNode.nodeValue...:"+ (!previousNode ? "" : previousNode.nodeValue       ));
                log("|==previousNode.textContent=["+ (!previousNode ? "" : previousNode.textContent +"]"));
            }
        }
        while( ( previousNode != null)
            && (!previousNode.nodeValue || (t_util.trim_empty_lines(previousNode.textContent).length < 1))
        );

        /*}}}*/
    }
    catch(ex) { log(caller+": "+ex, "warn"); }
    /* RETURN NODE {{{*/
    if(log_this) {
        if(previousNode) log("getPreviousTextNode: ...return "+t_util.node_toString(previousNode));
        else             log("getPreviousTextNode: ...return null");
    }
    return previousNode;
    /*}}}*/
};
/*}}}*/
/*_ pattern_toHTML {{{*/
let pattern_toHTML = function(pattern, words_option) {

    switch(words_option)
    {
/*
        default:
        case t_data.WORDS_EXACT    : return "<em title='EXACT WORD'   class='cc7'>"+       "("+ pattern +")"     +"</em>";
        case t_data.WORDS_SEGMENT  : return "<em title='WORD SEGMENT' class='cc7'>"+       "["+ pattern +"]"     +"</em>";
        case t_data.WORDS_HEAD_TAIL: return "<em title='HEAD & TAIL'  class='cc7'>"+ t_data.SYMBOL_R + pattern +t_data.SYMBOL_L+"</em>";
*/

        case t_data.WORDS_EXACT    : return "<em title='EXACT WORD'   class='cc1 "+words_option+"'>"+ pattern +"</em>";
        case t_data.WORDS_SEGMENT  : return "<em title='WORD SEGMENT' class='cc1 "+words_option+"'>"+ pattern +"</em>";
        default:
        case t_data.WORDS_HEAD_TAIL: return "<em title='HEAD & TAIL'  class='cc1 "+words_option+"'>"+ pattern +"</em>";

    }
};
/*}}}*/
/*}}}*/

/** HIGHLIGHT */
/*{{{*/
/*_ t_slot_visibility_changed {{{*/
let t_slot_visibility_changed = function()
{
/*{{{*/
let caller = "t_slot_visibility_changed";
let log_this = DOM_SELECT_LOG || DOM_SELECT_TAG || LOG_MAP.S3_SLOT;

if( log_this) log("%c "+caller, lbH+lf3);
/*}}}*/

    /*
     * OUGHT TO BE CALLED EVERY TIME
     * SOME CONTAINER MAY
     * GET HIDDEN OR DIMMED
     */
    for(let slot = 1; slot < ccs.length; ++slot)
    {
        if( ccs[slot] &&  ccs[slot].visible_num_array)
            delete        ccs[slot].visible_num_array;
    }
};
/*}}}*/
/*_ t_get_slot_num_next_wrap_to {{{*/
let t_get_slot_num_next_wrap_to = function(slot,num_next,wrap_to)
{
/*{{{*/
let   caller = "t_get_slot_num_next_wrap_to";
let log_this = DOM_SELECT_LOG || LOG_MAP.S3_SLOT;

/*}}}*/
    let num_max  = t_select_get_slot_nodes_length(slot);

    let lfx = lfX[num_next % 10]; let l_x; /*...*/ let msg; /*.........................*/ let result;
    if     ( num_max  <  wrap_to) {   l_x = lbB + lf2; msg = log_this && "ENDLESS "+num_next; result = 0       ; }
    else if( num_next == wrap_to) {   l_x = lbb + lf9; msg = log_this && "    EOL "+num_next; result = wrap_to ; }
    else if( num_next  > num_max) {   l_x = lbb + lfx; msg = log_this && "   WRAP "+num_next; result = 1       ; }
    else                          {   l_x =       lfx; msg = log_this && "   NEXT "+num_next; result = num_next; }

if( log_this) {
    log("%c"+caller+"(slot "+slot+" , num_next "+num_next+" , wrap_to "+wrap_to+")%c num_max "+num_max+"%c"+msg+"%c"+result
        ,lbH                                                                     ,lbL                  ,lbC     ,lbR+l_x   );
}
    return result;
};
/*}}}*/
/*_ t_is_slot_num_visible {{{*/
let t_is_slot_num_visible = function(slot,num)
{
/*{{{*/
let caller = "t_is_slot_num_visible";
let log_this = DOM_SELECT_LOG || LOG_MAP.S3_SLOT;

/*}}}*/
    if(         !ccs[slot]                   ) return false;
    if(          ccs[slot].nodes.length < num) return false;

    if(         !ccs[slot].visible_num_array ) slot_visible_num_array_update(slot );

    let result = ccs[slot].visible_num_array.includes(num);

if( log_this)
    log("%c"+caller+"%c slot "+slot+"%c num "+num+"%c return "+result
        ,lbL+lf5    ,lbC+lfX[slot]  ,lbR+lfX[num] ,lbH+lfX[result ? 4:8]);
    return result;
};
/*}}}*/
/*_ t_get_slot_num_visible_count {{{*/
let t_get_slot_num_visible_count = function(slot)
{
/*{{{*/
let caller = "t_get_slot_num_visible_count";
let log_this = DOM_SELECT_LOG || LOG_MAP.S3_SLOT;

if( log_this)
    log("%c"+caller+"%c slot "+slot
        ,lbL+lf5    ,lbC+lfX[slot] );
/*}}}*/
    if(         !ccs[slot]                   ) return 0;

    if(         !ccs[slot].visible_num_array ) slot_visible_num_array_update(slot );

    let result = ccs[slot].visible_num_array.length;

if( log_this) log("...return "+result);
    return result;
};
/*}}}*/
/*_ t_get_slot_num_visible_num {{{*/
let t_get_slot_num_visible_num = function(slot,num)
{
/*{{{*/
let caller = "t_get_slot_num_visible_num";
let log_this = DOM_SELECT_LOG || LOG_MAP.S3_SLOT;

if( log_this)
    log("%c"+caller+"%c slot "+slot+"%c num "+num
        ,lbL+lf5    ,lbC+lfX[slot]  ,lbR+lfX[num]);
/*}}}*/
    if(         !ccs[slot]                   ) return false;
    if(          ccs[slot].nodes.length < num) return false;

    if(         !ccs[slot].visible_num_array ) slot_visible_num_array_update(slot );

    let index  = ccs[slot].visible_num_array.indexOf( num );

    let result = (index >= 0) ? index+1 : 0;

if( log_this) log("...return "+result);
    return result;
};
/*}}}*/
/*…   slot_visible_num_array_update {{{*/
let   slot_visible_num_array_update = function(slot)
{
/*{{{*/
let   caller = "slot_visible_num_array_update";
let log_this = DOM_SELECT_TAG || DOM_SELECT_LOG || LOG_MAP.S3_SLOT;

if( log_this) log("%c "+caller+"("+slot+")", lbH+lf4);
/*}}}*/

    if(!ccs[slot]) return;

    ccs[slot].visible_num_array = [];

    for(let num = 1; num <= ccs[slot].nodes.length; ++num)
    {
        if( is_slot_num_visible(slot, num) )
            ccs[slot].visible_num_array.push(     num );
    }
if( log_this) log(ccs[slot].visible_num_array);
};
/*}}}*/
/*…   is_slot_num_visible {{{*/
let   is_slot_num_visible = function(slot, num) /* eslint-disable-line complexity */
{
/*{{{*/
let   caller = "is_slot_num_visible";
let log_this = DOM_SELECT_LOG || LOG_MAP.S3_SLOT;

let tag_this = DOM_SELECT_TAG || log_this;
if( tag_this) caller += "(slot "+slot+"  num "+num+")";
if( log_this ) log("%c"+caller, lbH+lf4);
/*}}}*/
    /* [slot] {{{*/
    if(slot <= 0              ) return false;
    if(slot >  SELECT_SLOT_MAX) return false;

    if(!ccs[slot])              return false;

    let count = ccs[slot].nodes.length;
    if( count < 1)              return false;

    if(  num <=    0)           return false;
    if(  num > count)           return false;

if(log_this) log(".count=["+ count +"]");

    let thumb_p = parseFloat( ccs[slot].get_num_thumb_p(num) );
    /*}}}*/
    /* LOG geometry slot num count {{{*/
    if(LOG_MAP.T3_LAYOUT)
    {
        let page_height = t_util.getPageHeight();
        let body        = document.body;
        let html        = document.documentElement;
        let page_geometry = ""
            +"<table id='table_params'>"
            +" <tr class='slot'><TH class='cc8'>select</TH> <th>        slot</th><td class='cc"+slot+"'>"+ slot              +"</td> <th>         num</th><td class='cc"+(num % 10)+"'>"+ num               +"</td> <th>       count</th><td class='cc"+(count % 10)+"'>"+ count             +"</td></tr>"
            +" <tr             ><TH class='cc8'>HTML  </TH> <th>scrollHeight</th><td class='cc8'>"       + html.scrollHeight +"</td> <th>offsetHeight</th><td class='cc1'>"             + html.offsetHeight +"</td> <th>clientHeight</th><td class='cc2'>"               + html.clientHeight +"</td></tr>"
            +" <tr             ><TH class='cc8'>BODY  </TH> <th>scrollHeight</th><td class='cc8'>"       + body.scrollHeight +"</td> <th>offsetHeight</th><td class='cc3'>"             + body.offsetHeight +"</td> <th>clientHeight</th><td class='cc4'>"               + body.clientHeight +"</td></tr>"
            +" <tr             ><TH class='cc8'>window</TH> <th> page_height</th><td class='cc8'>"       + page_height       +"</td> <th>     thumb_p</th><td class='cc5'>"             + thumb_p           +"</td> <th>     scrollY</th><td class='cc6'>"               + window.scrollY    +"</td></tr>"
            +"</table"
        ;

        let info = ""
            +"<div class='info'>"
            +"<em class='cc8'>Scroll state</em><br>"
            +" <u>clientHeight</u> VIEWABLE +PADDING                    -border -scrollbar -margin<br>"
            +" <u>offsetHeight</u> VIEWABLE +PADDING +BORDER +SCROLLBAR                    -margin<br>"
            +" <u>scrollHeight</u> OVERFLOW +PADDING                    -border -scrollbar -margin<br>"
            +"</div>"
        ;

        t_log.log_TR_LAYOUT_set(page_geometry +"<br>"+ info);
    }
    else {
        if(log_this) {
            count       = ccs[slot].nodes.length;
            let    body = document.body;
            let    html = document.documentElement;

            log("select         slot=["+ slot              +"]          num=["+ num               +"]        count=["+ count             +"]");
            log("HTML   scrollHeight=["+ html.scrollHeight +"] offsetHeight=["+ html.offsetHeight +"] clientHeight=["+ html.clientHeight +"]");
            log("BODY   scrollHeight=["+ body.scrollHeight +"] offsetHeight=["+ body.offsetHeight +"] clientHeight=["+ body.clientHeight +"]");
        }
    }
    /*}}}*/
    /* possibly not visible {{{*/
    let el = ccs[slot].nodes[num-1];

    let can_be_made_visible
        = (typeof dom_details != "undefined")
        &&        dom_details.details_has_closed_el_parent(el);

    let visible
        = ((thumb_p > 0) || can_be_made_visible)
        && t_util.is_el_visible(el)
    ;

    /*}}}*/
if( tag_this ) log("%c"+caller+": ...return "+visible, lbH+lfX[visible ? 5:2]);
    return visible;
};
/*}}}*/

/*… t_set_last_selected_slot_num {{{*/
/*{{{*/
let last_selected_thumb_p = 0;
let last_selected_slot    =-1;
let last_selected_num     = 0;

/*}}}*/
let t_set_last_selected_slot_num = function(slot, num, thumb_p)
{
/*{{{*/
let caller = "set_last_selected_slot_num";
let log_this = DOM_SELECT_LOG || LOG_MAP.S3_SLOT;

if( log_this) log("%c"+caller+"(slot=["+slot+"], num=["+num+"], thumb_p=["+thumb_p+"])", lbH+lf4);
/*}}}*/

    if(!thumb_p)
        thumb_p = parseFloat( ccs[slot].get_num_thumb_p(num) );

    highlight_data_thumb_p(thumb_p, slot);

    if(ccs[slot])
    {
        t_tools.t_words_regex_reset  ( ccs[slot].pattern      );
        log_tools_filter_slot(           slot               );
    }

    last_selected_slot    = slot;
    last_selected_num     = num;
    last_selected_thumb_p = thumb_p;
};
/*}}}*/

/*_ get_parent_with_overflow {{{ */
let get_parent_with_overflow = function(node)
{
    for(let parent  = node
        ;   parent && parent.style
        ;   parent  = parent.parentNode
    ) {
        let computedStyle = window.getComputedStyle(parent);
        if( computedStyle.overflow && (computedStyle.overflow != "visible"))
        {
logXXX(t_util.get_n_lbl(parent)+" %c overflow ["+parent.style.overflow+"] %c COMPUTED ["+computedStyle.overflow+"]"
    ,                      lbL+lf6                                ,lbR+lf7);
/*
*/
            return parent;
        }
    }
    return null;
};
/*}}}*/
/*… scroll_thumb_p_to_onSeek_XY {{{*/
let scroll_thumb_p_to_onSeek_XY = function(thumb_p, slot, onSeekXYL)
{
let   caller = "scroll_thumb_p_to_onSeek_XY(thumb_p=["+thumb_p+"], slot=["+slot+"], onSeekXYL["+onSeekXYL.x+" "+onSeekXYL.y+"])";
let log_this = LOG_MAP.S3_SLOT;
if( log_this ) log(caller);

    let page_height
        = t_util.getPageHeight() * (t_tools.t_get_body_zoom_percent() / 100.0);

    let scrollX
        = window.scrollX
        - onSeekXYL.x;

    let scrollY
        = page_height * (thumb_p / 100.0)
        - onSeekXYL.y;

    try {
        t_tools.t_window_scrollTo(scrollX, scrollY);
if(log_this) log("%c PAGE "+page_height+" %c thumb_p "+thumb_p+" %c scrollY "+Math.floor(scrollY)+" "
    ,             lbL+lf9                ,lbC+lf6                ,lbR+lf7);
    }
    catch(ex) {
        console.log(caller+": "+ex);
    }
};
/*
 TODO: sync last slot .. last num to last thumb_p
 TODO: or check window scrollY at next slot-selection-time
 TODO: option to choose between showing thumb_p-values -OR- dot-list
 TODO: swipe over dot-list to scroll forward or backward
*/
/*}}}*/

/*  get_last_selected_slot {{{*/
let get_last_selected_slot = function()
{
    return last_selected_slot;
};
/*}}}*/
/*  clear_last_selected_slot {{{*/
let clear_last_selected_slot = function()
{
    last_selected_slot    = -1;
    last_selected_num     = -1;
};
/*}}}*/
/*… highlight_data_thumb_p {{{*/
let highlight_data_thumb_p = function(thumb_p, slot) /* eslint-disable-line complexity */
{
/*{{{*/
let   caller = "highlight_data_thumb_p(thumb_p=["+thumb_p+"] slot=["+ slot+"])";
let log_this = LOG_MAP.S3_SLOT;

if(log_this) log(caller);
/*
console.warn(caller);
*/
/*}}}*/
    /* text .. f(thumb_p) {{{*/
    let el;
    let text                     = String(       thumb_p );
    if(               thumb_p < 10) text  = " "+ text     ;
    if     (text.indexOf(".") <  0) text +=          ".00";
    else if(text.length       <  5) text +=            "0";
if(log_this) log(" text=["+text+"]");

    /*}}}*/
    /* unhighlight all [data-thumb_p] {{{*/
    let                  shadow_root = t_tools.t_get_shadow_root();
    let doc           = (shadow_root) ? shadow_root : document;
    let data_selector = "[data-thumb_p]";
    let elements      = doc.querySelectorAll( data_selector );

if(log_this) log(" "+ elements.length+" "+data_selector);

    for(let i=0; i < elements.length; ++i)
        t_util.del_el_class(elements[i], "current_slot_num");

    /*}}}*/
    /* unhighlight [selbag div] [t_util.ellipsis em] {{{*/
    for(let s=0; s < SELECT_SLOT_MAX; ++s)
    {
        let id;
        id = ".select"  +s    ; if(el = t_tools.t_get_tool(id)) { if(s == slot) t_util.add_el_class(el,"current_slot"); else t_util.del_el_class(el,"current_slot"); }
        id = "thumb_p_"+s+"_0"; if(el = t_tools.t_get_tool(id)) { if(!(el.innerHTML.includes(t_data.SYMBOL_E))) el.innerText = t_data.SYMBOL_E; }
        id = "thumb_s_"+s+"_0"; if(el = t_tools.t_get_tool(id)) { if(!(el.innerHTML.includes(t_data.SYMBOL_E))) el.innerText = t_data.SYMBOL_E; }
    }

    /*}}}*/
    /*   highlight   [data-thumb_p=   text   ] .. (both thumb_p and thumb_s) {{{*/
    data_selector = "[data-thumb_p='"+text+"']";
    elements = doc.querySelectorAll( data_selector );
if(log_this) log(" "+ elements.length+" "+data_selector);
    for(let i=0;  i < elements.length; ++i) {
        t_util.add_el_class(elements[i], "current_slot_num");
    }

    /*}}}*/
    /* highlight t_util.ellipsis (fall back) {{{*/
    /* thumb_p - container {{{*/
    let container;
    for(slot = 1; slot < ccs.length; ++slot)
    {
        if(!ccs[slot]) continue;
        /* ? has thumb_p */
        for(let num = 1; num <= ccs[slot].nodes.length; ++num)
        {
            let p  = parseFloat( ccs[slot].get_num_thumb_p(num) );
            if( p == thumb_p) {
                container = ccs[slot].containers[num-1];
                break;
            }
        }
        if(container) break;
    }
if(log_this) t_log.console_dir("container", container);
    /*}}}*/
    for(slot = 1; slot < ccs.length; ++slot)
    {
        if(!ccs[slot]) continue;
        /* ? has thumb_p */
        for(let num = 1; num <= ccs[slot].nodes.length; ++num)
        {
            let in_same_container
                = (container && (container ==  ccs[slot].containers     [num-1])) ? "IN CONTAINER ["+t_util.get_id_or_tag(container)+"]"
                : (     thumb_p == parseFloat( ccs[slot].get_num_thumb_p(num)  )) ? "AT THUMB ["+thumb_p+"]"
                :                                                             ""
            ;
            if(in_same_container) /*{{{*/
            {
if(log_this) logBIG("slot=["+slot+"] num=["+num+"] .. "+in_same_container);

                /* ? [slot_num_id] */
                let slot_num_id = "thumb_p_"+ slot +"_"+ num;
                if( !t_tools.t_get_tool(slot_num_id) )
                {
                    /* SEL_BAG */
                    let id = "thumb_p_"+slot+"_0";
                    if( el = t_tools.t_get_tool( id ))
                    {
if(log_this) log(".HIGHLIGHT: id=["+id+"]");
                        el.innerText = String(num);
                        t_util.add_el_class(el, "current_slot_num");
                    }

                    /* SEEKER */
                    id = "thumb_s_"+slot+"_0";
                    if( el = t_tools.t_get_tool( id ))
                    {
if(log_this) log(".HIGHLIGHT: id=["+id+"]");
                        el.innerText = String(num);
                        t_util.add_el_class(el, "current_slot_num");
                    }
                }
                else {
if(log_this) log(".DEDICATED SLOT TOOL HIGHLIGHTED: slot_num_id=["+slot_num_id+"]");
                }
                break;
            }
            /*}}}*/
        }
    }
    /*}}}*/
};
/*}}}*/
/*  t_clear_slot_all {{{ */
let t_clear_slot_all = function()
{
    let caller = "t_clear_slot_all";
let log_this = LOG_MAP.S2_SELECT || LOG_MAP.S3_SLOT;

    let cleared_count   = 0;
    let cleared_pat_csv = "";

    for(let slot = ccs.length-1; slot >= 1        ; --slot)
    {
        let       pattern    = ccs[slot] ? ccs[slot].pattern : "";

        let clear_slot_count = t_slot.t_clear_slot( slot );

        if( clear_slot_count && pattern)
            cleared_pat_csv  = t_util.csv_add(cleared_pat_csv, pattern);

        cleared_count       += clear_slot_count;
    }

if(log_this) log(caller+": "+cleared_count+" words highlighting cleared");
    return cleared_pat_csv;
};
/*}}}*/

/*_ s_selection_execCommand {{{ */
let s_selection_execCommand = function(cmd_csv)
{
    let caller = "s_selection_execCommand("+cmd_csv+")";
if(LOG_MAP.S3_SLOT) log(caller);

    document.designMode = "on";
    try {
        if(cmd_csv.indexOf("undo"         ) >= 0) document.execCommand("undo"                , false, null           );

        if(cmd_csv.indexOf("foreColor"    ) >= 0) document.execCommand("foreColor"           , false, "#FF0000"      );
        if(cmd_csv.indexOf("backColor"    ) >= 0) document.execCommand("backColor"           , false, "#00AADD"      );
        if(cmd_csv.indexOf("hiliteColor"  ) >= 0) document.execCommand("hiliteColor"         , false, "pink"         );

        if(cmd_csv.indexOf("bold"         ) >= 0) document.execCommand("bold"                , false, null           );
        if(cmd_csv.indexOf("fontName"     ) >= 0) document.execCommand("fontName"            , false, "Comic sans ms");
        if(cmd_csv.indexOf("fontSize"     ) >= 0) document.execCommand("fontSize"            , false, "400%"         );

        if(cmd_csv.indexOf("strikeThrough") >= 0) document.execCommand("strikeThrough"       , false, null           );
    }
    catch(ex) { log(caller+": "+ex, "error"); }
    document.designMode = "off";

/* DOC {{{
:!start explorer "https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand"
document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)

 Returns:
    false if the command is unsupported or disabled

 aCommandName:
    {{{
    backColor
    bold
    ClearAuthenticationCache
    contentReadOnly
    copy
    createLink
    cut
    decreaseFontSize
    defaultParagraphSeparator
    delete
    enableAbsolutePositionEditor
    enableInlineTableEditing
    enableObjectResizing
    fontName
    fontSize
    foreColor
    formatBlock
    forwardDelete
    heading
    hiliteColor
    increaseFontSize
    indent
    insertBrOnReturn
    insertHorizontalRule
    insertHTML
    insertImage
    insertOrderedList
    insertUnorderedList
    insertParagraph
    insertText
    italic
    justifyCenter
    justifyFull
    justifyLeft
    justifyRight
    outdent
    paste
    redo
    removeFormat
    selectAll
    strikeThrough
    subscript
    superscript
    underline
    undo
    unlink
    useCSS
    styleWithCSS
    }}}

 aShowDefaultUI:
    Whether the default user interface should be shown

 aValueArgument
    For commands which require an input argument .. null if no argument is needed

}}}*/
};
/*}}}*/
/*_ t_selection_add_cannot_expand {{{*/
const CANNOT_EXPAND_TO_SELECTION = "cannot_expand_to_selection";
let t_selection_add_cannot_expand = function()
{
log("t_selection_add_cannot_expand");
    s_selection_execCommand("hiliteColor");
    t_util.add_el_class(document.body, CANNOT_EXPAND_TO_SELECTION);
};
/*}}}*/
/*_ t_selection_del_cannot_expand {{{*/
let t_selection_del_cannot_expand = function()
{
log("t_selection_del_cannot_expand");
    t_util.del_el_class(document.body, CANNOT_EXPAND_TO_SELECTION);
};
/*}}}*/

/*  t_get_slot_num_for_last_highlight_thumb_p {{{*/
let t_get_slot_num_for_last_highlight_thumb_p = function(slot, backward)
{
    return get_slot_num_for_thumb_p(slot, last_selected_thumb_p, backward);
};
/*}}}*/
/*… get_slot_num_for_thumb_p {{{*/
let get_slot_num_for_thumb_p = function(slot, thumb_p, backward)
{
    let caller = "get_slot_num_for_thumb_p(slot=["+slot+"], thumb_p=["+thumb_p+"], backward=["+backward+"])";
let log_this = LOG_MAP.S3_SLOT;
if( log_this) log(caller);

    if( !ccs[slot] ) {
if( log_this) log(caller+": SLOT "+ slot +" is empty");
        return 0;
    }
    let num_at_or_past_thumb_p = 0;

    let first = 1;
    let  last = ccs[slot].nodes.length;
    let   num = 0;

    if(!backward) {
        for(num    = first; num <= last; num += 1) {
            let p  = parseFloat( ccs[slot].get_num_thumb_p(num) );
            if( p <= thumb_p) num_at_or_past_thumb_p = num;
            if( p >  thumb_p) break;
        }
    }
    else {
        for(num    = last; num >= first; num -= 1) {
            let p  = parseFloat( ccs[slot].get_num_thumb_p(num) );
            if( p >= thumb_p) num_at_or_past_thumb_p = num;
            if( p <  thumb_p) break;
        }
    }

    if((num < first) || (num > last))
        num_at_or_past_thumb_p = 0;

if( log_this) log(caller+": return "+ num_at_or_past_thumb_p);

    return num_at_or_past_thumb_p;
};
/*}}}*/

/*}}}*/

/** RANGE */
/*{{{*/
/*  get_range_from_XY {{{ */
let get_range_from_XY = function(x, y)
{
/*{{{*/
let   caller = "get_range_from_XY";
let log_this = LOG_MAP.S1_RANGE;

let       msg_log  = "";
if( log_this) msg_log += caller+"(x="+x+" , y="+y+")";
/*}}}*/
    let       range = get_range_from_caret(x,y);
    let not_a_range = (range && !range.setStart); /* !range.setStart (i.e. Firefox) */
    if(not_a_range && range && range.offsetNode)
    {
/*{{{*/
if(log_this) {
    console.dir(range);
    msg_log += "[not_a_range ..!range.setStart) .. CREATING RANGE:<br>";
    msg_log += "...range.offsetNode....=["+ t_util.get_n_txt(range.offsetNode) +"]<br>";
    msg_log += "...range.offset........=["+ range.offset                +"]<br>";
}
/*}}}*/
        let new_range = document.createRange();
        new_range.setStart(range.offsetNode, range.offset);
        range = new_range;
    }
/* log {{{*/
if(log_this) {
    if(range) {
        msg_log += rangeToString(range, caller);
        t_log.console_dir(msg_log, range);
    }
    else {
        msg_log += caller+": ...return null";
    }

    t_log.log_TR_RESULT_set( msg_log );
}
/*}}}*/
    return range;
};
/*}}}*/
/*➔ get_range_from_caret {{{*/
let get_range_from_caret = function(x, y)
{
/*{{{*/
let   caller = "get_range_from_caret";
let log_this = LOG_MAP.S1_RANGE;

/*}}}*/
    /* [caretRangeFromPoint] {{{*/
    let  range = null;

    if(!range     && document.caretRangeFromPoint)
    {
        try {
            range =  document.caretRangeFromPoint(x,y); /* within the current viewport */
        }
        catch(ex) {
            log(caller+": "+ex, "caretRangeFromPoint failed");
        }
    }
    /* }}}*/
    /* [caretPositionFromPoint] {{{*/
    if(!range     && document.caretPositionFromPoint)
    {
        try {
            range =  document.caretPositionFromPoint(x,y);
        }
        catch(ex) {
            log(caller+": "+ex, "caretPositionFromPoint failed");
        }
    }
    /* }}}*/
if(log_this) t_util.log_range(range, caller+"(x="+x+" , y="+y+")");
    return range;
};
/*}}}*/
/*_ rangeToString {{{ */
let rangeToString = function(range, rangeName="RANGE")
{
    if(!range) return "<div>rangeToString(null range)</div>";

    let caller = "rangeToString";
    try {

        let range_str =  range.toString();
        if(!range_str && range.startContainer.parentElement)
            range_str =  range.startContainer.parentElement.textContent;

        let range_attr
            = range.collapsed
            ?  "<span class='cc8'>collapsed at "+ range.startOffset                              +"</span>"
            :  "<span class='cc4'>offset "      + t_util.ellipsis(range.startOffset,32) +" .. "+ t_util.ellipsis(range.endOffset,32) +"</span> "
        ;

        let ancestor = "";
        if(range.commonAncestorContainer)
            ancestor =                         range.commonAncestorContainer.toString()          + " "
            +                                  get_n_attributes(range.commonAncestorContainer)   + " "
            +  range.commonAncestorContainer.length ? ""
            :                        "length=["+ range.commonAncestorContainer.length            +"] "
        ;

        let container_node = range.startContainer ? range.startContainer : range.offsetNode;

        let container;
        container = "";
        if(container_node)
            container =                   container_node.toString()                              + " "
            +                   " nodeName=["+ container_node.nodeName                           +"] "
            +                     " length=["+ container_node.length                             +"] "
            +                                  get_n_attributes(container_node                 ) +"] "
            + !container_node.previousSibling ? ""
            :             "previousSibling: "+ get_n_attributes(container_node.previousSibling ) + " "
        ;

        let endContainer = "";
        if(range.endContainer)
            endContainer =                     range.  endContainer.toString()                   + " "
            +                   " nodeName=["+ range.  endContainer.nodeName                     +"] "
            +                     " length=["+ range.  endContainer.length                       +"] "
            +                                  get_n_attributes(range. endContainer            ) +"] "
            + !container_node.nextSibling ? ""
            :                 "nextSibling: "+ get_n_attributes(range. endContainer.nextSibling) + " "
        ;

        rangeName = "<span class='cc7'>"+rangeName+"</span>";
        range_str = "<span class='str'>"+t_util.ellipsis(range_str)+"</span>";

        container = "";
        if(range.commonAncestorContainer)
            container = t_util.node_toString( range.commonAncestorContainer.parentElement );

        return "<div class='div_match'>"
            +  rangeName
            +  " <div>container: "     + container    +"</div>"
            +  " <ul>"
            +  "  <li>"                + range_str    +"</li>"
            +  "  <li>"                + range_attr   +"</li>"
            +  "  <li>Ancestor: "      + ancestor     +"</li>"
            +  "  <li>Start: "         + container    +"</li>"
            +  "  <li>End: "           + endContainer +"</li>"
            +  " </ul>"
            +  "</div>"
        ;
    }
    catch(ex) {
        log(    caller+"("+rangeName+"): "+ex, "error");
        return "<div>"
            +   caller+"("+rangeName+"):<br>"
            +   ex
            +   "<hr>"+ dom_log.t_log.get_callers()
            +  "</div>"
        ;
    }
};
/*}}}*/
/*}}}*/

/** TRAVERSAL */
/*{{{*/
/*  check_Traversal check_TreeWalker check_NodeIterator {{{*/
/*{{{*/
let root_last_used_id;

/*}}}*/
let check_NodeIterator = function(           tag_or_id, pattern) { return check_Traversal("NodeIterator", tag_or_id, pattern); };
let check_TreeWalker   = function(           tag_or_id, pattern) { return check_Traversal("TreeWalker"  , tag_or_id, pattern); };
let check_Traversal    = function(traversal, tag_or_id, pattern) /* eslint-disable-line complexity */
{
/* {{{*/
let   caller = "check_traversal";
let log_this = LOG_MAP.S3_SLOT;

if( log_this) log("%c"+caller+" %c traversal=["+traversal+"] %c tag_or_id=["+tag_or_id+"] %c pattern=["+pattern+"]"
    ,             lbH         ,lbL                         ,lbC                         ,lbR                      );
if( log_this) t_log.log_TR_SELECT_add("<em class='cc3'>caller</em> traversal=<em class='cc3'>"+traversal+"</em> tag_or_id=<em class='cc4'>"+tag_or_id+"</em> pattern=<em class='cc6'>"+pattern+"</em>");
/*}}}*/
    /* !pattern .. return {{{*/
    if( !pattern ) {
        log("%c"+caller+" %c no pattern to look for", lbL, lbR+lf3);
        return;
    }

    /*}}}*/
    /* ROOT ID PERSISTENCE .. (unspecified tag_or_id fallback) {{{*/
    if(tag_or_id) {              root_last_used_id = tag_or_id; if(log_this) log("%c SET %c root_last_used_id = tag_or_id %c "+tag_or_id, lbL+lf5, lbC, lbR+lf5); }
    else          { tag_or_id  = root_last_used_id            ; if(log_this) log("%c GET %c tag_or_id = root_last_used_id %c "+tag_or_id, lbL+lf8, lbC, lbR+lf8); }

    /*}}}*/
    /* searched root {{{*/
    let root = pick_tag_or_id_node(tag_or_id, caller);

    let mDomTraversal
        = (traversal == "NodeIterator")
        ?  document.createNodeIterator(root, NodeFilter.SHOW_TEXT, mNodeFilter_function)
        :  document.createTreeWalker  (root, NodeFilter.SHOW_ALL , mNodeFilter_function);

if( log_this) log("<em class='cc3'>"+ t_util.object_label(mDomTraversal) +"</em> ID: <em class='cc4'>"+tag_or_id+"</em>");

    /*}}}*/
    /* pattern matching node_array .. return {{{*/
    let clicked_selection
        = t_tools.t_get_onDown_EL(caller);

    mNodeRegexP         = get_mNodeRegexP(pattern);
if( log_this) log("mNodeRegexP=["+mNodeRegexP+"]");

    if(!mNodeRegexP) return;

    let words_option = mNodeRegexP.words_option;

    let node_array
        = get_traversal_node_array(pattern, clicked_selection, mDomTraversal);

    /*}}}*/
    /* !node_array .. return {{{*/
    if(!node_array) {
if( log_this) t_log.log_TR_RESULT_set();

        return;
    }
    /*}}}*/
    /* NONE OR TOO MANY .. return {{{*/
    reset_page_geometry();
    if(    (node_array.length >= TOO_MANY_SELECTIONS)
        || (node_array.length == 0                  )
    ) {
        let sel_bag;
        if( sel_bag = t_tools.t_get_tool("sel_bag"))
        {
            /* [sel_bag] warning message {{{*/
            let msg = (node_array.length > 0)
                ? "*** TOO MANY: <em class='cc8'>"+pattern+"</em> .. (max "+TOO_MANY_SELECTIONS+") ***"
                : "--- NO MATCH: <em class='cc8'>"+pattern+"</em> ---";

            let el;
            if( el = t_tools.t_get_tool("sel_bag_warn_div") )
                el.innerHTML
                    = msg;
            else
                sel_bag.innerHTML
                    = "<div id='sel_bag_warn_div' class='cc2'>"+  msg +"</div><br>"
                    +    sel_bag.innerHTML;

            /* delayed clear */
            setTimeout(
                       function() {
                           let div;
                           if( div = t_tools.t_get_tool("sel_bag_warn_div")) div.parentElement.removeChild(div);
                       }
                       , 2000);
            /*}}}*/
        }
        /* [headsup_w] warning message {{{*/
        let [ sel_text /*, words_option*/ ] = t_tools.t_pattern_to_sel_text_words_option( pattern );

        let tooltip
            = t_data.SYMBOL_ELLIPSIS +" "+words_option;

        let warning
            = (node_array.length)
            ? (t_i18n.i18n_get(t_i18n.TOO_MANY ) +" (max "+TOO_MANY_SELECTIONS+")")
            :  t_i18n.i18n_get(t_i18n.NOT_FOUND);

        t_tools.t_words_regex_no_match("<em>"+t_util.ellipsis_short(sel_text)+"</em> &#x2794; "+warning, tooltip);

        /*}}}*/
if( log_this) t_log.log_TR_RESULT_set();
        return;
    }
    /*}}}*/
    /* COLLECT TO FREE SLOT {{{*/
/*{{{*/
if( log_this) {
    let msg = ""
        +"<p><em class='cc8'>" + words_option                          +"</em>"
        +"<br><em class='cc7'>"+ pattern_toHTML(pattern, words_option) +"</em>"
        +"<br>"                + "has selected"
        +"<br><em>"            + node_array.length                +"</em> nodes"
        +"</p>"
    ;

    log("<div class='badge'>"+msg+"</div>");
}
/*}}}*/

    touchedWord_slot                   = get_free_slot();
    ccs[touchedWord_slot].pattern      = pattern;
    ccs[touchedWord_slot].slot         = touchedWord_slot;
    ccs[touchedWord_slot].words_option = words_option;

    delete ccs[touchedWord_slot].visible_num_array;

    let can_collect_more = (ccs[touchedWord_slot].nodes.length < TOO_MANY_SELECTIONS);

    for(let i = 0; can_collect_more && (i < node_array.length); ++i)
    {
if( log_this) log("<em class='cc0' style='font-size:300%;'>"+(i+1)+"/"+node_array.length+"</em>");

        collect_node_matches_to_slot(touchedWord_slot, node_array[i], pattern, words_option);

        can_collect_more = (ccs[touchedWord_slot].nodes.length < TOO_MANY_SELECTIONS);
    }

    ccs[touchedWord_slot].mNodeRegexP = mNodeRegexP;

    log_tools_filter_slot( touchedWord_slot );

    /*}}}*/
if( log_this) t_log.log_TR_RESULT_set();
};
/*}}}*/
/*  check_childNodes {{{*/
let check_childNodes = function(tag_or_id, pattern)
{
    /* [tag_or_id] {{{*/
    let caller = "<em class='cc3'>check_childNodes</em> tag_or_id=<em class='cc4'>"+tag_or_id+"</em> pattern=<em class='cc6'>"+pattern+"</em>";
let log_this = LOG_MAP.S1_RANGE;
if( log_this) log(caller);
if( log_this) t_log.log_TR_SELECT_set(caller);

    let root = pick_tag_or_id_node(tag_or_id, caller);
    if(!root) return;

if( log_this) log("<em class='cc3'>check_childNodes</em> <em class='cc4'>ID: "+tag_or_id+"</em> <em class='cc4'>pattern: "+pattern+"</em>");
if( log_this) log_tags();
if( log_this) log("mNodeRegexP=["+mNodeRegexP+"]");
    /*}}}*/
    /* [childNodes] {{{*/
    reset_page_geometry();
    let node, last_node, count, empty_count=0;
    for(count = 0; count < root.childNodes.length; ++count)
    {
        node         = root.childNodes[count];
        last_node    = node;
        if(count < CHECK_LOG_MAX) check_log_num_thumb(count, node);
    }

    if( log_this && (count >= CHECK_LOG_MAX)) {
        log(t_util.mPadStart(" .../..."));
        log(t_util.mPadStart(" "+count,3," ") +  t_util.node_toString( last_node ));
    }
    if( log_this && (empty_count > 0)) log("...empty_count=["+empty_count+"]");
    /*}}}*/
};
/*}}}*/
/*  check_tagNodes {{{*/
let check_tagNodes = function(tag, pattern)
{
    /* [tag] .. (getElementById or getElementsByTagName) {{{*/
    if(!tag) tag = "*";
    let caller = "<em class='cc3'>check_tagNodes</em> tag=<em class='cc4'>"+tag+"</em> pattern=<em class='cc5'>"+pattern+"</em>";
let log_this = LOG_MAP.S1_RANGE;
if(log_this) log(caller);
if(log_this) t_log.log_TR_SELECT_set(caller);

    /* ELEMENTS */
    let elements = document.getElementsByTagName(tag);
if(log_this) log(caller+" <em class='cc4'>"+elements.length+" "+tag+" elements</em>");

    if(!elements.length) {
        elements = document.querySelectorAll( tag );
if(log_this) log(".document.querySelectorAll("+tag+")=["+elements.length+"]");
    }

    /* FILTER */
    let    flags = prop.get(t_data.WORDS_DROP_CASE) ? "giu" : "gu";
    mNodeRegexP  = (pattern) ? new RegExp(pattern, flags) : null;
if(log_this) log_tags();
if(log_this) log("mNodeRegexP=["+mNodeRegexP+"]");
    /*}}}*/
    /* [getElementsByTagName(tag)] {{{*/
    reset_page_geometry();
    let node, last_node, count, empty_count=0;
    for(count = 0; count < elements.length; ++count)
    {
        node         = elements[count];
        last_node    = node;
        if(!mNodeRegexP || node.textContent.match(mNodeRegexP))
        {
            if(count < CHECK_LOG_MAX) check_log_num_thumb(count, node);
        }
    }

if(log_this && (count >= CHECK_LOG_MAX)) {
    log(t_util.mPadStart(" .../..."));
    log(t_util.mPadStart(" "+count,3," ") +  t_util.node_toString( last_node ));
}

if(log_this && (empty_count > 0)) log("...empty_count=["+empty_count+"]");
    /*}}}*/
};
/*}}}*/
/*_ get_traversal_node_array {{{*/
let get_traversal_node_array = function(pattern, clicked_selection, mDomTraversal)
{
/*{{{*/
let   caller = "get_traversal_node_array";
let log_this = DOM_SELECT_LOG || LOG_MAP.S1_RANGE;
let tag_this = DOM_SELECT_TAG || log_this;

if( tag_this) log("%c"+caller+"(pattern=["+pattern+"], clicked_selection=["+t_util.get_n_txt(clicked_selection)+"])", lbH);
if( log_this) log_tags();
/*}}}*/

    /* clear any to-be-reselected selection */
    let slot;
    if( slot = t_slot.get_slot_matching_pattern( pattern )) {
        if(!clicked_selection) {
if( tag_this) log("%c PATTERN ALREADY MACTHED: slot=["+slot+"]", lbH+lf3);
            return [];
        }
if( tag_this) log("%c CLEARING PREVIOUS MACTH: slot=["+slot+"]", lbH+lf5);
        t_slot.t_clear_slot( slot );
    }

    let node_array = [];
    let node;
    while(node = mDomTraversal.nextNode())
    {
        if( node_has_some_text(  node) ) {
/*
logXXX("___ node.textContent..................=["+                  node.textContent  +"]");
*/
            if(node_array.length >= TOO_MANY_SELECTIONS)
                break;
            node_array.push(node);
        }
        else {
if( tag_this) {
    log_key_val_group(  caller
                     ,{ NODE             : "--------------------------------------------"
                      , toString         : t_util.node_toString   (node            ) +"]"
                      , nodeValue        :                        (node.nodeValue  ) +"]"
                      , textContent      :                        (node.textContent) +"]"
                      , trim_alNum_lines : t_util.trim_alNum_lines(node.textContent) +"]"
                     }, lf8, false);
}
/*
*/
        }
    }
if( tag_this) log(caller+": return node_array.length=["+node_array.length+"]");
    return node_array;
};
/*}}}*/
/*_ get_mNodeRegexP {{{*/
let get_mNodeRegexP = function(pattern)
{
/*{{{*/
let   caller = "get_mNodeRegexP";
let log_this = LOG_MAP.S1_RANGE;

/*}}}*/
    let flags = prop.get(t_data.WORDS_DROP_CASE) ? "giu" : "gu";
    let    rx = null;

    let [ sel_text , words_option ] = t_tools.t_pattern_to_sel_text_words_option( pattern );

    try {
        switch( words_option   ) {
        case    t_data.WORDS_EXACT    : rx = new RegExp( "\\b("+sel_text+")\\b" , flags); break;
        case    t_data.WORDS_SEGMENT  : rx = new RegExp(    "("+sel_text+")"    , flags); break;
/*      case    t_data.WORDS_HEAD_TAIL: rx = new RegExp("\\S*("+sel_text+")\\S*", flags); break; */
        case    t_data.WORDS_HEAD_TAIL: rx = new RegExp("\\w*("+sel_text+")\\w*", flags); break;
        default:
        logBIG("*** wrong words_option ["+words_option+"] ***", lf2);
        }
    } catch(ex) {
if( log_this) log(caller+"(sel_text=["+sel_text+"] words_option=["+words_option+"]):"+t_data.LF+"*** "+ex);
        t_tools.t_words_regex_no_match(sel_text, t_util.get_ex_tooltip(ex));
        return null;
    }

    rx.pattern      = pattern;
    rx.words_option = words_option;

if(log_this) log(caller+"("+sel_text+" "+words_option+"): ...return ["+rx+"]");
    return rx;
};
/*}}}*/
/*_ t_check_hasFeature {{{ */
let t_check_hasFeature = function(feature, version)
{
    let caller = "<em class='cc3'>t_check_hasFeature</em> feature=<em class='cc4'>"+feature+"</em> version=<em class='cc5'>"+version+"</em>";
let log_this = LOG_MAP.S1_RANGE;
if( log_this) log(caller);

    let result = "";
    try {
        let input_feature = t_tools.t_get_tool("input_feature"); feature = input_feature.value;
        let input_version = t_tools.t_get_tool("input_version"); version = input_version.value;
        result = document.implementation.hasFeature(   feature , version);
    }
    catch(ex) {
        result = ex.toString();
    }

if( log_this) log(caller+": ...return "+result);
    return result;
};
/*}}}*/
/*… check_log_num_thumb {{{*/
let check_log_num_thumb = function(count, node)
{
    let         num = t_util.mPadStart(count, 5, " ");

    let thumb_p     = get_node_thumb_p( node    );
    let thumb_p_str = t_get_thumb_p_str ( thumb_p );
    let      offset = " ["+ thumb_p_str.replace(" ","&nbsp;") +"%]";

    let         val = t_util.node_toString(node);

    log("<span class='check_log_num_thumb'>"+num + offset +"</span> "+ val);
};
/*}}}*/
/*_ mNodeFilter_function {{{*/
let mNodeFilter_function = function(node)
{
let caller = "mNodeFilter_function";
let log_this = LOG_MAP.S1_RANGE;
    let check_result = mNodeFilter_check_node( node );

if(log_this && (check_result != NodeFilter.FILTER_SKIP)) log(caller+": "+ mNodeFilter_toString(check_result) + t_util.node_toString(node));

    return check_result;
};
/*}}}*/
/*_ mNodeFilter_check_node {{{*/
let mNodeFilter_check_node = function(node)
{
    /* REJECT == child nodes are also rejected */
    /* SKIP   == children are still considered */

    /* 2. REJECT [parent   == SCRIPT or STYLE] {{{*/
    let parent = node.parentNode;
    if( parent && (parent.nodeType == Node.ELEMENT_NODE))
    {
        if( parent.tagName  == "SCRIPT"             ) return NodeFilter.FILTER_REJECT;
        if( parent.tagName  == "STYLE"              ) return NodeFilter.FILTER_REJECT;
        if( t_is_node_selected( parent )            ) return NodeFilter.FILTER_REJECT;
    }
/*{{{
        if( parent.className.includes("knob_content") )
        {
            console.log("REJECTING: "+ parent.parentNode.id);
            console.dir(parent);
            return NodeFilter.FILTER_REJECT;
        }
}}}*/

    /*}}}*/
    /* REJECT .. f(node_to_hide parent) {{{*/
    if( t_util.is_marked_to_hide(node) ) {
/*
logXXX("%c mNodeFilter_check_node( "+t_util.get_id_or_tag(node)+" ) %c IS HIDDEN", lbL+lf6, lbR+lf7);
*/
        return NodeFilter.FILTER_REJECT;
    }
    /*}}}*/
    /* REJECT .. f(CSS_LINE_NUM) {{{*/
    if( t_util.has_el_class(node, t_data.CSS_LINE_NUM) ) {
/*
logXXX("%c mNodeFilter_check_node( "+t_util.get_id_or_tag(node)+" ) %c CSS_LINE_NUM", lbL+lf6, lbR+lf7);
*/
        return NodeFilter.FILTER_REJECT;
    }
    /*}}}*/

    /*FIXME*/
    /* REJECT .. f(CSS_DIMMED) {{{*/
/*{{{
    if( t_util.has_el_class(node, t_data.CSS_DIMMED) ) {
logXXX("%c mNodeFilter_check_node( "+t_util.get_id_or_tag(node)+" ) %c CSS_DIMMED", lbL+lf6, lbR+lf7);

        return NodeFilter.FILTER_REJECT;
    }
}}}*/
    /*}}}*/

    /* 3. SKIP   [node     != TEXT_NODE] {{{*/
    if(node.nodeType != Node.TEXT_NODE              ) return NodeFilter.FILTER_SKIP  ;

    /*}}}*/
    /* 1. ACCEPT [REGEXP   == textContent] {{{*/
    if(    mNodeRegexP         && node.textContent  )
        if(mNodeRegexP.pattern == node.textContent  ) return NodeFilter.FILTER_ACCEPT;

    /*}}}*/
    /* 4. ACCEPT [ALL WHEN NO REGEX] {{{*/
    if(                       !mNodeRegexP          ) return NodeFilter.FILTER_ACCEPT;

    /*}}}*/
    /* 5. SKIP   [REGEX MISSMATCH or !textContent] {{{*/
    if(!node.textContent                            ) return NodeFilter.FILTER_SKIP  ;
    if(!node.textContent.match(mNodeRegexP)         ) return NodeFilter.FILTER_SKIP  ;

    /*}}}*/
    /* 6. ACCEPT BY FILTER {{{*/
    else                                              return NodeFilter.FILTER_ACCEPT;

    /*}}}*/
};
/*}}}*/
/*_ mNodeFilter_toString {{{*/
let mNodeFilter_toString = function( check_result )
{
    switch( check_result )
    {
        case NodeFilter.FILTER_ACCEPT: return "<em class='cc4'>FILTER_ACCEPT </em>";
        case NodeFilter.FILTER_REJECT: return "<em class='cc1'>FILTER_REJECT </em>";
        case NodeFilter.FILTER_SKIP  : return "<em class='cc8'>FILTER_SKIP   </em>";
        default                      : return "<em class='cc2'>FILTER_ERROR  </em>";
    }
};
/*}}}*/
/*}}}*/

/** COLLECT */
/*{{{*/
/*… collect_node_matches_to_slot {{{*/
let collect_node_matches_to_slot = function(slot, node, pattern, words_option)
{
/*{{{*/
let   caller = "collect_node_matches_to_slot";
let log_this = LOG_MAP.S1_RANGE;

if( log_this) log(caller+"(slot=["+slot+"], node=["+t_util.get_n_txt(node)+"]");
/*}}}*/

if( log_this) log("<div class='div_match'>");
    let matches;
    for(let i = 0; node && (matches = mNodeRegexP.exec(node.textContent)); ++i)
    {
if( log_this) log("<div class='div_match' style='border:3px dotted yellow !important;'>");

        let num = ccs[slot].nodes.length+1;
if( log_this) log_match(node, slot, num, i, mNodeRegexP, matches);

        let       match = matches[0]; /* the full string */
        let startOffset = matches.index;
        let   endOffset = startOffset + match.length;

        /* select match */
        let       range = document.createRange();
        range.setStart(node, startOffset);
        range.setEnd  (node,   endOffset);

        /* add a match selection range */
        if(ccs[slot].nodes.length < TOO_MANY_SELECTIONS)
        {
            t_util.clearSelection();
            try {
                window.getSelection().addRange( range );
            } catch(ex) { log(caller+": pattern=["+pattern+"]"+ex, "error"); }

            /* Copy first selection to clipboard */
            if(i == 0) document.execCommand("copy");

            /* collect each match to slot num */
            let ccs_node_nextSibling = collect_selection_to_slot(slot, pattern, words_option);
            if( ccs_node_nextSibling )
            {
                /* and look ahead from there */
                node = ccs_node_nextSibling;
                mNodeRegexP.lastIndex = 0;
            }
if( log_this) log("...<blockquote class='cc6'>"+ t_util.get_n_txt(node).substring(mNodeRegexP.lastIndex) +"</blockquote>");
        }
        else {
/*{{{
            window.getSelection().addRange( range ); FIXME what was the use of this ?
}}}*/
if( log_this) log("%c TOO_MANY_SELECTIONS=["+TOO_MANY_SELECTIONS+"]", lbH+lf8);
            node = null;    /* .. stop searching */
        }
if( log_this) log("</div>");
    }

/* .. to dismiss WebView Copy to Clipboard Popup */
    t_util.clearSelection();

if( log_this) log("</div>");
};
/*}}}*/
/*_ log_match {{{*/
let log_match = function(node, slot, num, i, regex, matches)
{
    let s = ""
        + "<blockquote class='cc6'> "+            t_util.escape_CR_LF( t_util.ellipsis(node.textContent, 128) ) +"</blockquote>"
        + "<em class='cc6 em_match'> "+           matches[0]                                      +"</em>"
        + "<br>"
        + "<em class='cc"+((slot  )%9 + 1)+"'>slot "+   slot                                      +"</em>"
        + "<em class='cc"+(( num-1)%9 + 1)+"'>num "+    num                                       +"</em>"
        + "<em class='cc"+((   i  )%9 + 1)+"'>match #"+ (i+1)                                     +"</em>"
        + " REGEX: "
        + "<em class='cc4'> "+                    regex                                           +"</em>"
        + "<em class='cc5'> index "+              matches.index                                   +"</em>"
        + "<em class='cc8'> lastIndex "+          mNodeRegexP.lastIndex                           +"</em>"
    ;
    log(s);
};
/*}}}*/

/*_ collect_selection_to_slot {{{ */
let collect_selection_to_slot = function(slot, pattern, words_option)
{
/*{{{*/
    let caller = "collect_selection_to_slot";
let log_this = LOG_MAP.S3_SLOT;

if( log_this) log(caller+"(slot=["+slot+"], pattern=["+pattern+"], words_option=["+words_option+"])");
/*}}}*/

    let selection = window.getSelection();
    if(!selection               ) return null;
    if( selection.rangeCount < 1) return null;

    let range     = selection.getRangeAt(0);

    let sel_text  = range.toString();
if(log_this) log(".sel_text=["+sel_text +"]");

    if(!sel_text                ) return null;

    if(!pattern) pattern = sel_text;

    /* inject highlight node */
    let ccs_node        = document.createElement("em");
    ccs_node.innerText  = sel_text;

    collect_ccs_range_node_slot(range, ccs_node, slot, pattern, words_option);

if(log_this) log("return ccs_node.nextSibling=["+ccs_node.nextSibling+"]");
    return ccs_node.nextSibling;
};
/*}}}*/
/*_ collect_ccs_range_node_slot {{{*/
/*{{{
let some_container_is_too_high;
}}}*/

let collect_ccs_range_node_slot = function(range, ccs_node, slot, pattern, words_option) /* eslint-disable-line complexity */
{
/*{{{*/
let caller = "collect_ccs_range_node_slot";
let log_this = LOG_MAP.S3_SLOT;

if( log_this) log(caller+"(range, ccs_node, slot=["+slot+"])");
/*}}}*/
    /* [parent_with_overflow] {{{*/
    let parent_with_overflow = get_parent_with_overflow( ccs_node );
    if( parent_with_overflow )
    {
if(log_this) log(caller+"%c NOT COLLECTING "+t_util.get_n_txt( ccs_node )+" .. parent_with_overflow "+t_util.get_n_txt( parent_with_overflow ), lbH+lf2);
        return;
    }
    /*}}}*/
    /* [container] {{{*/
    let container                      = get_text_container( range.startContainer );
    let container_H                    = container ? container.offsetHeight : 0;
    let container_is_too_high          = (container_H             >  window.innerHeight);
    let container_is_body              = (container               == document.body);
    let container_is_body_direct_child = (container.parentElement == document.body);
    let container_is_body_single_child = (container               == document.body) && (document.body.childNodes.length == 1);
    let container_is_body_first_child  = (container               == document.body) && (document.body.childNodes[0]     == container);

if(log_this && container_is_too_high         ) log("%c container_is_too_high         ", lbH+lf2);
if(log_this && container_is_body             ) log("%c container_is_body             ", lbH+lf3);
if(log_this && container_is_body_direct_child) log("%c container_is_body_direct_child", lbH+lf4);
if(log_this && container_is_body_single_child) log("%c container_is_body_single_child", lbH+lf5);
if(log_this && container_is_body_first_child ) log("%c container_is_body_first_child ", lbH+lf6);

/*{{{
    if(     container_is_too_high         ) some_container_is_too_high = true;
    if(     container_is_too_high         ) container = null;
    else if(container_is_body             ) container = null;
    else if(container_is_body_single_child) container = null;
}}}*/
/*
    if(container_is_body_direct_child) container = null;
    if(container_is_body_first_child ) container = null;
*/
if(log_this) log("%c container %c "+t_util.get_n_lbl(container)+"%c H="+container_H, lbL, lbC+lf7, lbR+lf8);
    /*}}}*/
    /* [containers_hi] {{{ */
    if(    container
       &&  prop.get("containers_hi")
       &&  container.classList
       && !container.classList.contains( "container_dark"  )
       && !container.classList.contains( "container_light" )
      ) {
        let theme_class = prop.get(t_data.THEME_DARK) ? "container_dark" : "container_light";
        t_util.add_el_class(container, theme_class);
    }

    if(container && container.children.length >= CONTAINER_HUGE_CHILDREN_LENGTH)
    {
        t_util.add_el_class(container              , "container_huge");
        t_util.add_el_class(container.parentElement, "container_huge_parent");
    }

    /*}}}*/
    /* CCS INSERT .. (TEMPORARILY REPLACE SELECTION) {{{*/
    range.deleteContents();
    range.insertNode(ccs_node);

    /*}}}*/
    /* CCS CREATE {{{*/
    let                   next_idx = ccs[slot].nodes.length;
    let                        ccX =     slot % SELECT_SLOT_MAX;
    let                 slot_class = SEL_CLASS_PREFIX +     ccX;
    let                 word_class = SEL_CLASS_PREFIX +"_"+ words_option;

    ccs_node.id                    = slot_class +"_"+(next_idx+1);
    ccs_node.className             = slot_class +" "+ word_class;
    ccs[slot].nodes     [next_idx] = ccs_node;
    ccs[slot].containers[next_idx] = container;

if(log_this) log("%c ccs_node: "+ t_util.node_toString(ccs_node), "background-color:#880");

    /*}}}*/
};
/*}}}*/

/*  get_text_container {{{*/
const BAIL_OUT_COUNT = 10;
let get_text_container = function(node)
{
    let caller = "get_text_container("+t_util.get_n_txt(node)+")";
let log_this = LOG_MAP.S3_SLOT;

    let container = node.parentElement;

    let node_text_length = node.textContent.trim().length;
    if(!node_text_length) return container;

    let count;
    for(count = 0; count < BAIL_OUT_COUNT; ++count)
    {
        if(container == null)
        {
if(log_this) log("%c"+caller+"%c NO PARENT", lbL, lbR+lf2);

            break;
        }

        if( is_text_container_node( container ) )
        {
if(log_this) log("%c"+caller+"%c FOUND CONTAINER ["+t_util.get_n_str( container )+"] ("+container.tagName+")", lbL, lbR+lf4);
            break;

/* container_text_length {{{
            let container_text_length = container.textContent.trim().length;
            if( container_text_length > node_text_length) {
                break;
            }
            else {
if(log_this) log("...(container_text_length=["+container_text_length+"] <= node_text_length=["+node_text_length+"]");
            }
}}}*/
        }

        container = container.parentElement;
    }

    if(count >= BAIL_OUT_COUNT)
    {
if(log_this) log("%c"+caller+"%c BAILING OUT ON ["+t_util.get_n_str(node)+"] after "+count+" attempts at looking for a container", lbL, lbR+lf1);

    }
/*
if(log_this) logXXX("...container.textContent.length=["+container.textContent.length+"]")
if(log_this) log("%c"+container.textContent, lbH);
*/
    return container;
};
/*}}}*/
/*_ is_text_container_node {{{*/
let is_text_container_node = function(node) /* eslint-disable-line complexity */
{
let   caller = "is_text_container_node";
let log_this = LOG_MAP.S1_RANGE;

    let tag = node.nodeName.toLowerCase();
if( log_this) log("%c"+caller+" %c tag "+tag+" %c len "+node.textContent.length+" %c text "+t_util.get_n_txt(node)
                 ,lbL          ,lbR           ,lbH+lf5                           ,lbH+lf4                  );

    let result
        =      (tag == "p"        )
        ||     (tag == "div"      )
        ||    ((tag == "span"     ) && (node.textContent.length >= 360))
        ||    ((tag == "code"     ) && (node.textContent.length >=  80)) /* only if they contain a wall of text */
        ||    ((tag == "li"       ) && (node.textContent.length >=  80)) /* only if they contain a wall of text */
        ||    ((tag == "ol"       ) && (node.textContent.length >=  80)) /* only if they contain a wall of text */
        ||    ((tag == "ul"       ) && (node.textContent.length >=  80)) /* only if they contain a wall of text */
        ||     (tag == "section"  )
        ||     (tag == "article"  )
        ||     (tag == "aside"    )
        ||     (tag == "header"   )
        ||     (tag == "nav"      )
    /*      ...COULD BE CONTAINERS .. IF NONE OF THE FOLLOWING */
        || (   (tag != "span"     )
            && (tag != "a"        )
            && (tag != "b"        )
            && (tag != "em"       )
            && (tag != "font"     )
            && (tag != "strong"   )
            && (tag != "u"        )
    /*      ...COULD BE CONTAINERS .. ONLY WITH A WALL OF TEXT */
            && (tag != "code"     )
            && (tag != "li"       )
            && (tag != "ol"       )
            && (tag != "ul"       )
        )
    ;

if( log_this) log("is_text_container_node(["+t_util.get_n_str(node)+"]...["+t_util.get_n_lbl(node)+"]): ...return "+result+" node.textContent.length=["+node.textContent.length+"]");
    return result;
};
/*}}}*/

/*  t_sync_containers_hi {{{*/
let t_sync_containers_hi = function()
{
/*{{{*/
    let caller = "t_sync_containers_hi";
    let log_this = LOG_MAP.S1_RANGE;

if( log_this) log(caller+": containers_hi=["+prop.get("containers_hi")+"]");
/*}}}*/
    /* 1/3 - forget all current containers {{{*/
    let className = "container_light";
    let node_list = document.querySelectorAll("."+className);
    for(let i     = 0; i < node_list.length; ++i)
    {
        t_util.del_el_class(node_list[i], className);
    }

    className     = "container_dark";
    node_list     = document.querySelectorAll("."+className);
    for(let i     = 0; i < node_list.length; ++i)
    {
        t_util.del_el_class(node_list[i], className);
    }

    /*}}}*/
    /* 2/3 - highlight active containers {{{*/
    if(prop.get("containers_hi"))
    {
        let theme_class = prop.get(t_data.THEME_DARK) ? "container_dark" : "container_light";
        let container;
        for(let slot = 1; slot < ccs.length; ++slot)
        {
            if( ccs[slot] )
            {
                for(let i = 0; i < ccs[slot].nodes.length; ++i)
                {
                    if(container = ccs[slot].containers[i])
                        t_util.add_el_class(container, theme_class);
                }
            }
        }
    }

    /*}}}*/
    /* X/X - unhiglight everything else {{{*/
/* TODO .. explain...
    let html = document.getElementsByTagName("HTML")[0];
    if(prop.get("containers_hi")) t_util.add_el_class(html             , "containers_hi"  );
    else              t_util.del_el_class(html                              , "containers_hi"  );
    t_util.del_el_class(                  html, prop.get("theme_dark") ? "light" : "dark" );
    t_util.add_el_class(                  html, prop.get("theme_dark") ?  "dark" : "light");
*/
    /*}}}*/
    /* 3/3 - restore container split sentences {{{*/
    let   container;
    while(container = t_util.get_el_child_with_class(document.body, dom_sentence.CSS_SENTENCE_CONTAINER))
        dom_sentence.t_SENTENCE_RESTORE_EL( container );

    /*}}}*/
};
/*}}}*/

/*  get_slot_num_container {{{*/
let get_slot_num_container = function(slot, num)
{
    let s =  slot;
    let n = num-1;

    let node
        = (ccs[s] && ccs[s].containers && ccs[s].containers[n]) ? ccs[s].containers[n] /*   a node parent */
        : (ccs[s] && ccs[s].nodes      && ccs[s].nodes     [n]) ? ccs[s].nodes     [n] /* the node itself */
        :                                                         null
    ;
/*
logXXX("%c get_slot_num_container("+s+","+n+"): %c return "+ t_util.get_n_lbl(node) +" .. "+ (!node ? "" : ((node == ccs[s].nodes[n]) ? "THE NODE ITSELF" : "A NODE PARENT")), lbL, lbR+lf4)
console.dir(ccs[s])
log_key_val_group(ccs[s])
log("toString:"+t_data.LF+ ccs[s].toString())
*/
    return  node;
};
/*}}}*/
/*}}}*/

/* PAT BAGS */
/*{{{*/
/*➔ t_onPatternUpdate {{{*/
/*{{{*/
const  PATTERN_UPDATE_DELAY =  550;
const  PATTERN_UPDATE_QUICK =  250;

let   onPatternUpdate_timer = null;
/*}}}*/
let t_onPatternUpdate_no_delay = function(msg, caller       ) { t_onPatternUpdate(msg, caller, 0                   ); };
let t_onPatternUpdate_quick    = function(msg, caller       ) { t_onPatternUpdate(msg, caller, PATTERN_UPDATE_QUICK); };
let t_onPatternUpdate          = function(msg, caller, delay=PATTERN_UPDATE_DELAY)
{
/*{{{
logXXX("t_onPatternUpdate(delay=["+delay+"])");
}}}*/
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_log_stage_msg(t_fly.STAGE_2_ACTION, msg);

    if(  onPatternUpdate_timer) {
        clearTimeout(  onPatternUpdate_timer);
/*{{{
        if( delay ) delay  = 2 * PATTERN_UPDATE_DELAY;
}}}*/
    }
    if(delay) onPatternUpdate_timer =   setTimeout(onPatternUpdate_handler, delay);
    else                                           onPatternUpdate_handler();
};
/*}}}*/
/*…   onPatternUpdate_handler {{{*/
let   onPatternUpdate_handler = function()
{
/*{{{*/
let   caller = "onPatternUpdate_handler";
let log_this = LOG_MAP.S0_PATTERN;

if( log_this ) logBIG(caller, lf4);
/*}}}*/
      onPatternUpdate_timer = null;

if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_fly_all_csv(t_data.SYMBOL_UPDATE, "want");

    t_tools.t_pattern1_sync_csv_from_ccs();

if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_fly_all_csv(t_data.SYMBOL_STAGE , "have");

    t_tools.t_pattern2_set_sel_bag_innerHTML();

    t_tools.t_pattern3_pat_off_alt_bak_innerHTML(caller);
if(LOG_MAP.EV8_FLOATLOG || prop.get(t_data.FLOATLOG)) t_fly.t_fly_all_csv(t_data.SYMBOL_RESULT, "have");

    t_tools.t_onPatternUpdate_done();

};
/*}}}*/

/*➔ t_get_docker_bag_msg {{{*/
let t_get_docker_bag_msg = function(bag_name, mov_count, ass_count, ins_count)
{
    let ccX
        = (bag_name == "pat") ? "cc1"
        : (bag_name == "off") ? "cc5"
        : (bag_name == "bak") ? "cc2"
        : (bag_name == "bin") ? "cc0"
        : ""
    ;

    let            docker_bag_msg  = "";
    if(ins_count ) docker_bag_msg += " <em class='done "+ccX+"'> INSERTED</em> <em class='bags "+ccX+"'>"+ bag_name +" + "+ ins_count +"</em>";
    if(mov_count ) docker_bag_msg += " <em class='done "+ccX+"'>    MOVED</em> <em class='bags "+ccX+"'>"+ bag_name +" + "+ mov_count +"</em>";
    if(ass_count ) docker_bag_msg += " <em class='done "+ccX+"'>CONFIRMED</em> <em class='bags "+ccX+"'>"+ bag_name +" = "+ ass_count +"</em>";

    if(!docker_bag_msg) return "";
    else                return "<br>"+ t_data.SYMBOL_DOCKER+" "+docker_bag_msg;
};
/*}}}*/

/*➔ t_collect_el_class_from_into {{{*/
let t_collect_el_class_from_into = function(el_class, from, into)
{
    let spans = from.getElementsByTagName("SPAN");
    let count = 0;
    for(let i=0; i < spans.length; ++i)
    {
        if(              from != spans[i].parentNode  ) continue; /* not a direct child */
        if( t_is_accessory_node( spans[i]           ) ) continue;
        if(!t_util.has_el_class(        spans[i], el_class ) ) continue;
        into.push(spans[i]);
        count += 1;
    }
/*{{{
logXXX("t_collect_el_class_from_into("+el_class+", "+t_util.get_n_lbl(from)+") ...return "+count+"");
}}}*/
    return count;
};
/*}}}*/
/*➔ t_get_pat_span_with_pattern {{{*/
let t_get_pat_span_with_pattern = function(from_bag, pattern)
{
    let pat_span  = null;
    let spans = from_bag.getElementsByTagName("SPAN");
    for(let i=0; i < spans.length; ++i)
    {
        if(          from_bag != spans[i].parentNode ) continue; /* not a direct child */
        if( t_is_accessory_node( spans[i]           )) continue;
        if(!t_util.has_el_class(        spans[i],"pat_span")) continue;
        if(!spans[i].textContent                     ) continue;
        if(!spans[i].textContent.includes(pattern   )) continue;
        pat_span = spans[i];
        break;
    }
/*{{{
log("t_get_pat_span_with_pattern("+t_util.get_n_lbl(from_bag)+", "+pattern+") ...return "+t_util.get_n_txt(pat_span)+"");
}}}*/
    return pat_span;
};
/*}}}*/
/*➔ t_is_accessory_node {{{*/
let t_is_accessory_node = function(node)
{
    return (node == t_tools.t_get_tool( "bak_bag" )    )
        || (node == t_tools.t_get_tool( "off_bag" )    )
        || (node == t_tools.t_get_tool( "bot_div" )    )
        || (node == t_tools.t_get_tool( "mov_div" )    )

        || (node == t_tools.t_get_tool( "hov1"    )   )
        || (node == t_tools.t_get_tool( "hov2"    )   )
        || (node == t_tools.t_get_tool( "hov3"    )   )
        || (node == t_tools.t_get_tool( "hov4"    )   )

        || t_util.has_el_class(node, "seeker_handle")
        || t_util.has_el_class(node, "screener"     )

        || t_util.has_el_class(node, "push_pin"     )
        || t_util.has_el_class(node, "closepin"     )
        || t_util.has_el_class(node, "scalepin"     )
        || t_util.has_el_class(node, "clearpin"     )

    ;
};
/*}}}*/
/*➔ remove_pat_span_from_div {{{*/
let remove_pat_span_from_div = function(div)
{
/*{{{*/
    let caller = "remove_pat_span_from_div";
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log(caller+"("+t_util.get_id_or_tag(div)+")");
/*}}}*/

    let  count = 0;
    let length = div.childNodes.length;
    let node_removed;
    for(let i=0; i < length; i += (node_removed ? 0 : 1))
    {
        let node = div.childNodes[i];
        node_removed = false;
/*{{{
        if( t_is_accessory_node(node) )
        {
if(log_this) log("...KEEPING  %c["+t_util.get_n_lbl(node) +"]", lbF+lb1);
        }
        else
}}}*/
        if(t_util.has_el_class(node, "pat_span") || t_util.has_el_class(node, "pat_div"))
        {
if(log_this) log("...REMOVING %c "+t_util.get_id_or_tag(node)+" %c"+node.textContent, lbL, lbR+lf2);
            div.removeChild(node);
            count += 1;
            node_removed = true;
        }
        else {
/*{{{
if(log_this) log("...SKIPPING %c[undefined]"           , lbF+lb8);
}}}*/
        }
    }
if(log_this) log("..."+count+" ["+t_util.get_n_lbl(div)+"] transient nodes removed");
};
/*}}}*/

/*➔ t_get_pat_span_line .. [pat_span data-pattern] {{{*/
let t_get_pat_span_line = function(num, pat, css_class)
{
    let data_pattern = t_util.csv_escape(pat);

    let [ sel_text , words_option ] = t_tools.t_pattern_to_sel_text_words_option(pat);
    let pat_less_sfx = sel_text;

    let text         = t_util.t_get_htmlEntities( t_util.ellipsis(pat_less_sfx, 16) );

    let title        = t_util.t_get_htmlEntities(sel_text) + t_data.LF + words_option;

/*{{{
log("%c sel_text=["+ sel_text +"]", lbH+lf8)
log("%c ....text=["+     text +"]", lbH+lf8)
log("%c ...title=["+ title    +"]", lbH+lf8)
}}}*/

    let className    = words_option+" "+t_data.CSS_DATA_PATTERN+" "+css_class;
/*{{{
log("%c className=["+className+"]", lbH+lf8);
}}}*/

    return "<span class='pat_span'>"
        +   "<em  class='num_em'>"+num+"</em>&nbsp;"
        +   "<em  class='"+className+"' data-pattern='"+data_pattern+"' title='"+title+"'>"+text+"</em>" /* childNodes[2] */
        +  "</span>"
    ;
};
/*}}}*/
/*_ t_adjust_pat_span_words_option {{{*/
let t_adjust_pat_span_words_option = function(pat_span, pat)
{
    t_tools.t_set_el_pat_words_option(pat_span.childNodes[2], pat);
};
/*}}}*/
/*➔ t_get_pat_span_index {{{*/
let t_get_pat_span_index = function(pat_spans, pat)
{
    pat = t_tools.t_pattern_del_words_option_sfx(pat);

    for(let pat_span_index=0; pat_span_index < pat_spans.length; ++pat_span_index)
    {
        if(pat_spans[pat_span_index] == null) continue;

        let el      = pat_spans[pat_span_index].childNodes[2];
        let el_pat  = t_util.csv_unescape(el.getAttribute("data-pattern"));
        el_pat      = t_tools.t_pattern_del_words_option_sfx(el_pat);
        if( el_pat == pat) {
/*{{{
logXXX("t_get_pat_span_index: ...return "+pat_span_index+"")
logXXX("___el.title=["+ el.title +"]")
logXXX("_____el_pat=["+   el_pat +"]")
logXXX("________pat=["+      pat +"]")
}}}*/
            return pat_span_index;
        }
    }
    return -1;
};
/*}}}*/
/*}}}*/

/** SEARCH */
/*{{{*/
/*… getElementsByContent {{{*/
let getElementsByContent = function(text)
{
 let caller = "getElementsByContent";

    let result = null;
    try {
        let elements = document.getElementsByTagName("*");

/*log("getElementsByContent("+text+"): searching "+ elements.length +" elements:", "warn");*/

        let deep_containers=[];
        let container = null;
        let text_toLowerCase = text.toLowerCase();
        for(let i = 0; i < elements.length; ++i)
        {
            let        el = elements[i];
            if(        el.textContent ) {
                if(    el.textContent.includes(text)
                    || el.textContent.toLowerCase().includes(text_toLowerCase)
                ) {
                    /*log(i+" childNodes x"+el.childNodes.length+" nodeName=["+el.nodeName+"] text=["+ t_util.get_n_txt(el)+"]");*/
                    if     (!container              ) { container = el;                                   /*log_node("CONTAINER:", container);*/ }
                    else if( container.contains(el) ) { container = el;                                   /*log_node("   DEEPER:", container);*/ }
                    else                              { deep_containers.push( container ); container =el; /*log_node("   NOTHER:", container);*/ }
                }
            }
        }

        if( container )
            deep_containers.push( container );

/*log("deep_containers.length=["+deep_containers.length+"]", "warn");*/
        result
            = (deep_containers.length > 0)
            ?  deep_containers[0]
            :  null
        ;

/*log_node("getElementsByContent ...return:", result );*/
    }
    catch(ex) { log(caller+": "+ex, "error"); }
    return result;
};
/*}}}*/
/*_ get_n_children {{{ */
/*{{{
let get_n_children = function(node)
{
    let result = node;
    try {
        for(let  i = 0; i < node.childNodes.length; ++i)
            result += " "+i+" ["+node.childNodes[i]+"]"+t_data.LF;
    }
    catch(ex) { return "node=["+node+"]:"+ex; }
    return result;
};
}}}*/
/*}}}*/
/*… get_n_attributes {{{ */
let get_n_attributes = function(node)
{
    if(!node           ) return "*** get_n_attributes( !node ) ***";
    if(!node.attributes) return "";
    let     result = "";
    try {
        for(let  i = 0; i < node.attributes.length; ++i)
            result += "<span class='cc"+(i % SELECT_SLOT_MAX)+"'>"+node.attributes[i].name+": "+ node.attributes[i].value+"</span>";
    }
    catch(ex) { return "*** get_n_attributes("+node+") "+ex +" ***"; }
    return  result;
};
/*}}}*/
/*… node_has_some_text {{{*/
let node_has_some_text = function(node)
{
    return node.nodeValue
        && node.textContent
        && (t_util.trim_alNum_lines(node.textContent).length > 0)
    ;
};
/*}}}*/
/*➔ t_is_node_selected {{{*/
let t_is_node_selected = function(node)
{
let   caller = "t_is_node_selected";
let log_this = LOG_MAP.S1_RANGE;

    if(!node) return false;

    let result = false;
    try {
        result = (node.className && node.className.startsWith( SEL_CLASS_PREFIX ));
    } catch(ex) {
/*
console.dir(node);
*/
    }

if(log_this && result) log(caller+"("+t_util.get_n_lbl(node)+"): ...return "+result);
    return result;
};
/*}}}*/
/*➔ is_a_select_tool {{{*/
let is_a_select_tool = function(el)
{
    if(     !el    ) return false;
    if(     !el.id ) return false;
    return   el.id.startsWith("thumb_p_");
};
/*}}}*/
/*}}}*/

/** NODES */
/*{{{*/

/* pick */
/*_ pick_tag_or_id_node {{{*/
let pick_tag_or_id_node = function(tag_or_id, _caller)
{
/*{{{*/
    let caller = "pick_tag_or_id_node("+tag_or_id+")";
let log_this = LOG_MAP.S1_RANGE;

if(log_this) log(caller+".. CALLED BY ["+_caller+"]");
/*}}}*/
    /* default to body {{{*/
    let node = (!tag_or_id) ? document.body : null;

    let id = tag_or_id;
    /*}}}*/
    /* Note: LOOK FOR A TAG FIRST .. so as to dismiss ID collisions such as [body or html etc.] {{{*/
    /* getElementsByTagName {{{*/
    if(!node) {
        node =    document.getElementsByTagName(  id  )[0] ;

if(log_this) log("document.getElementsByTagName("+id+")[0].....["+t_util.get_id_or_tag(node)+"]");
    }
    /*}}}*/
    /* getElementById {{{*/
    if(!node) {
        node =    document.getElementById      (  id      );

if(log_this) log("document.getElementById      ("+id+")........["+t_util.get_id_or_tag(node)+"]");
    }
    /*}}}*/
    /* getElementsByContent {{{*/
    if(!node) {
        node =    getElementsByContent         (  tag_or_id );

if(log_this) log("getElementsByContent         ("+tag_or_id+")...["+t_util.get_id_or_tag(node)+"]");
    }
    /*}}}*/
if(log_this) console.dir(node);

    /*}}}*/
    /* querySelector(#id) {{{*/
    let selector;
    if(!node ) {
        selector = "#"+id;
if(log_this) log(caller+": NOT FOUND .. trying selector ["+selector+"]");

        node = document.querySelector( selector );
    }
    /*}}}*/
    /* querySelector(.id) {{{*/
    if(!node ) {
        selector = "."+id;
if(log_this) log(caller+": NOT FOUND .. trying selector ["+selector+"]");

        node = document.querySelector( selector );
    }
    /*}}}*/
    /* default to body {{{*/
    if(!node )
    {
if(log_this) log(caller+": NOT FOUND .. using body");

        node = document.body;
    }
    /*}}}*/
    /* default to document {{{*/
    if(!node )
    {
if(log_this) log(caller+": NOT FOUND .. using document");

        node = document;
    }
    /*}}}*/
/*{{{*/
if(log_this) {
    log("<div class='cc8'>");
    log(caller);
    log_node(t_data.SYMBOL_CHECK_MARK +" NODE"       , node           );
    log_node(t_data.SYMBOL_CHECK_MARK +" PARENT"     , node.parentNode);
    log_node(t_data.SYMBOL_CHECK_MARK +" FIRST CHILD", node.firstChild);
    log_node(t_data.SYMBOL_CHECK_MARK +" LAST CHILD" , node.lastChild );
    log("</div>");
    log(caller+": ...return "+t_util.get_id_or_tag(node));
console.dir(node);
}
/*}}}*/
    return node;
};
/*}}}*/

/* log */
/*_ log_tags {{{*/
let log_tags = function()
{
    let tag;        let s  = "";
    tag = "#document" ; s +=        tag +" <em class='cc3'>"+ t_util.get_h_tag(tag) +"</em>"+t_data.LF;
    tag = "HTML"      ; s += "    "+tag +" <em class='cc3'>"+ t_util.get_h_tag(tag) +"</em>"+t_data.LF;
    tag = "HEAD"      ; s += "    "+tag +" <em class='cc3'>"+ t_util.get_h_tag(tag) +"</em>"+t_data.LF;
    tag = "BODY"      ; s += "    "+tag +" <em class='cc3'>"+ t_util.get_h_tag(tag) +"</em>"+t_data.LF;
    tag = "SCRIPT"    ; s += "    "+tag +" <em class='cc3'>"+ t_util.get_h_tag(tag) +"</em>"+t_data.LF;
    tag = "DIV"       ; s += "    "+tag +" <em class='cc3'>"+ t_util.get_h_tag(tag) +"</em>"+t_data.LF;
    tag = "BLOCKQUOTE"; s += "    "+tag +" <em class='cc3'>"+ t_util.get_h_tag(tag) +"</em>"+t_data.LF;
    s  +="<br>";
    tag = "SPAN"      ; s +=        tag +" <em class='cc4'>"+ t_util.get_h_tag(tag) +"</em>"+t_data.LF;
    tag = "EM"        ; s += "    "+tag +" <em class='cc4'>"+ t_util.get_h_tag(tag) +"</em>"+t_data.LF;
    tag = "A"         ; s += "    "+tag +" <em class='cc4'>"+ t_util.get_h_tag(tag) +"</em>"+t_data.LF;
    tag = "BUTTON"    ; s += "    "+tag +" <em class='cc4'>"+ t_util.get_h_tag(tag) +"</em>"+t_data.LF;
    tag = "INPUT"     ; s += "    "+tag +" <em class='cc4'>"+ t_util.get_h_tag(tag) +"</em>"+t_data.LF;
    tag = "TEXTAREA"  ; s += "    "+tag +" <em class='cc4'>"+ t_util.get_h_tag(tag) +"</em>"+t_data.LF;
    tag = "LI"        ; s += "    "+tag +" <em class='cc4'>"+ t_util.get_h_tag(tag) +"</em>"+t_data.LF;

/*{{{
    log("<div id='log_tags_div'>"+ s +"</div>");
}}}*/
    t_log.log_TR_SELECT_add("<div id='log_tags_div'>"+ s +"</div>");
};
/*}}}*/
/*_ log_node {{{*/
let log_node = function(label, node)
{
    if(!node) {
        log(t_util.mPadStart(label,16)+" <em></em>");
        return;
    }
    let em_class
        = (node.nodeType == Node.TEXT_NODE   ) ? "cc4"
        : (node.nodeType == Node.COMMENT_NODE) ? "cc8"
        :                                        "cc3"
    ;
    let n_str = t_util.get_n_str( node          );
    let p_str = t_util.get_p_str( node          );
    let n_tag =            node.nodeName;

    log(t_util.mPadStart(label,16)+" <em>"+n_tag+"</em> <em class='"+em_class+"'>"+ p_str +" "+ n_str +"</em>" +" has "+ node.childNodes.length +" childNodes");
};
/*}}}*/

/*}}}*/

/** TOOLS */
/*{{{*/
/*_ log_tools_filter_slot {{{*/
let log_tools_filter_slot = function(slot)
{
    t_tools.t_words_option_select ( ccs[slot].words_option          );

    let innerHTML = ccs[slot].mNodeRegexP ? ccs[slot].mNodeRegexP.toString() : t_data.SYMBOL_ELLIPSIS;
    let tooltip   = ccs[slot]             ? ccs[slot]            .toString() : t_data.SYMBOL_ELLIPSIS;
    t_tools.t_words_option_tooltip(innerHTML, tooltip);
};
/*}}}*/
/*}}}*/

/* EXPORT */
/*{{{*/
/*➔ t_store_set_state {{{*/
let t_store_set_state = function(label,state)
{
    if(          state != undefined)
    {
        if(      state) localStorage.setItem   (label, "true");
        else            localStorage.removeItem(label        );
        return !!state;
    }
    else {
        return          localStorage.getItem   (label        );
    }
};
/*}}}*/
return { name : "dom_select"
    , logging : (state) => DOM_SELECT_LOG = t_store_set_state("DOM_SELECT_LOG",state)
    , tagging : (state) => DOM_SELECT_TAG = t_store_set_state("DOM_SELECT_TAG",state)
    , t_select_IMPORT

    /* CONSTANTS {{{*/
    , SELECT_SLOT_MAX
    , SEL_CLASS_PREFIX

    /*}}}*/
    /* REFERENCES {{{*/
    , ccs

    /*}}}*/
    /* ACCESSORS {{{*/
    , get_touchedWord_range_parent      : () => touchedWord_range_parent
    , get_mStartRange                   : () =>              mStartRange
    , get_mEndRange                     : () =>                mEndRange
    , get_touchedWord_slot              : () =>         touchedWord_slot
    , get_last_highlighted_num          : () =>        last_selected_num

    , check_NodeIterator
    , check_TreeWalker
    , check_childNodes
    , check_tagNodes
    , clear_last_selected_slot
    , get_last_selected_slot
    , get_range_from_XY
    , get_range_from_caret
    , get_slot_num_container
    , get_text_container
    , get_word_at_offset
    , is_a_select_tool
    , remove_pat_span_from_div

    , t_adjust_pat_span_words_option
    , t_check_hasFeature
    , t_clear_slot_all
    , t_collect_el_class_from_into
    , t_escapeREGEX
    , t_get_docker_bag_msg
    , t_get_pat_span_index
    , t_get_pat_span_line
    , t_get_pat_span_with_pattern
    , t_get_slot_num_for_last_highlight_thumb_p
    , t_get_slot_num_next_wrap_to
    , t_get_slot_num_visible_count
    , t_get_slot_num_visible_num
    , t_get_thumb_p_str
    , t_is_accessory_node
    , t_is_node_selected
    , t_is_slot_num_visible
    , t_onPatternUpdate
    , t_onPatternUpdate_no_delay
    , t_onPatternUpdate_quick
    , t_select_clear_slot
    , t_select_get_ccs_length
    , t_select_get_slot_nodes_length
    , t_select_get_slot_num_node
    , t_select_get_slot_num_selected
    , t_select_get_slot_pattern
    , t_select_set_slot_num_selected
    , t_select_switch_from_to_slot
    , t_set_last_selected_slot_num
    , t_slot_visibility_changed
    , t_sync_containers_hi

    , touchedWord
    , touchedWord_adjust

    , slot_visible_num_array_update

    /*}}}*/
    /* YET UNUSED {{{*/
    , scroll_thumb_p_to_onSeek_XY
    , t_selection_add_cannot_expand
    , t_selection_del_cannot_expand
    , touchedWord_adjust_2_in_selection_word_bounds
    , get_ccs_slot_num_thumb_p
    , ccs_log
    , ccs_sort_pattern

    /*}}}*/

};
/*}}}*/

}());

/*{{{
"┌─────────────────────────────────────────────────────────────────────────────┐
"│                                                                             │
:e  $BROWSEEXT/SplitterExtension/manifest.json

:e  $BROWSEEXT/SplitterExtension/javascript/background.js
:e  $BROWSEEXT/SplitterExtension/javascript/content.js
:e             $RPROFILES/script/dom_sentence.js
:e             $RPROFILES/script/stub/dom_sentence_event.js
:e             $RPROFILES/script/stub/dom_scroll.js
:e             $RPROFILES/script/stub/dom_sentence_util.js
:e             $RPROFILES/script/stub/dom_log.js
:e             $RPROFILES/stylesheet/dom_host.css

"...           $RPROFILES/script/dom_select.js
:e             $RPROFILES/script/dom_util.js
:e             $RPROFILES/script/dom_log.js

:e             $RPROFILES/script/splitter.js
:e             $RPROFILES/script/dom_load.js
"│                                                                             │
"└─────────────────────────────────────────────────────────────────────────────┘
}}}*/
