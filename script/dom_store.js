/* dom_store_js */
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* eslint-disable no-redeclare */
/* globals window, console, localStorage */
/* globals dom_data, dom_log, dom_util, dom_prop */
/* eslint-enable  no-redeclare */

/* exported DOM_STORE_JS_TAG */

const DOM_STORE_JS_ID       = "dom_store_js";
const DOM_STORE_JS_TAG      = DOM_STORE_JS_ID   +" (230820:23h:08)";
/*}}}*/
let dom_store   = (function() {
"use strict";
let   DOM_STORE_LOG         = false;
let   DOM_STORE_TAG         = false;

/* IMPORT */
/*{{{*/
/* eslint-disable no-unused-vars */
/*➔ t_store_IMPORT {{{*/
/*{{{*/
/*....................................*/
let t_data     = {}        ;    /* 05 */
let t_log      = {}        ;    /* 06 */
let t_util     = {}        ;    /* 07 */
/*  t_i18n     = {}        ; */ /* 08 */
let t_prop     = {}        ;    /* 09 */
let t_store    = {}        ;    /* 10 */
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
let t_store_IMPORT  = function(log_this,import_num)
{
/*{{{*/
/* ...................................*/
    t_data    = dom_data   ;    /* 05 */
    t_log     = dom_log    ;    /* 06 */
    t_util    = dom_util   ;    /* 07 */
/*  t_i18n    = dom_i18n   ; */ /* 08 */
    t_prop    = dom_prop   ;    /* 09 */
    t_store   = dom_store  ;    /* 10 */
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
    store_INTERN();
    /* MODULE LOGGING TAGGING {{{*/
    DOM_STORE_LOG = DOM_STORE_LOG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_STORE_LOG"));
    DOM_STORE_TAG = DOM_STORE_TAG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_STORE_TAG"));

    /*}}}*/
if(log_this) log("%c "+import_num+" store", lbH+lf9);
};
/*}}}*/
/*_   store_INTERN {{{*/
/*{{{*/

/* t_log */
let LOG_MAP;

let lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;

let log, logBIG, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;

/* t_data */
let LF;

/*}}}*/
let   store_INTERN = function()
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
    /* t_data {{{*/
    LF = t_data.LF;

    /*}}}*/
    /* t_prop {{{*/
    if( dom_prop ) t_prop = dom_prop;

    /*}}}*/
};
/*}}}*/
/* eslint-enable  no-unused-vars */
/*}}}*/

/* [localStorage] */
/*_ localStorage {{{*/

let localStorage_setItem = function(key,val) {          try { if(val)  localStorage.setItem   (key,val); else localStorage.removeItem(key); } catch(ex) {} };
let localStorage_getItem = function(key    ) { let val; try {    val = localStorage.getItem   (key    );                                    } catch(ex) {} return val; };
let localStorage_delItem = function(key    ) {          try { /*...*/  localStorage.removeItem(key    );                                    } catch(ex) {} };

/*}}}*/

/* OBSERVERS */
/*… t_store_add_info_observer {{{*/
/*{{{*/
let store_info_observers = [];

/*}}}*/
let t_store_add_info_observer = function(observer)
{
/*{{{
log("t_store_add_info_observer("+observer.name+")")
}}}*/

    if(!store_info_observers.includes( observer ))
        store_info_observers.push    ( observer );
};
let _notify_info = function(info)
{
/*{{{
logXXX("_notify_info("+info+")")
}}}*/
    for(let i=0; i < store_info_observers.length; ++i)
        store_info_observers[i](info);
};
/*}}}*/

/* SET */
/*➔ t_store_set_state {{{*/
let t_store_set_state = function(key, state)
{
/*{{{*/
let log_this = DOM_STORE_LOG || LOG_MAP.T0_STORE;

/*{{{
logXXX("t_store_set_state(key=["+key+"] state=["+state+"])");
}}}*/
/*}}}*/
    /* STATE  GET {{{*/
    let     v  = t_store_getBool(key);
    if( state == undefined) {
        state  = v;
    }
    /*}}}*/
    /* STORE  NEW {{{*/
    else if( state ) {
if(log_this) t_store_key_log("STORING  STATE",      key, state);

        store_site_or_page_setItem   (              key, state);
    }
    /*}}}*/
    /* REMOVE OLD {{{*/
    else if( v ) {
if(log_this) t_store_key_log("REMOVING STATE",      key);

        store_site_or_page_removeItem(              key);
    }
    /*}}}*/
    return !!state; /* return a truthy */
};
/*}}}*/
/*➔ t_store_set_value {{{*/
let t_store_set_value = function(key, value)
{
/*{{{*/
let log_this = DOM_STORE_LOG || LOG_MAP.T0_STORE;

/*{{{
logXXX("t_store_set_value(key=["+key+"] value=["+value+"])");
}}}*/
/*}}}*/
    /* NO CHANGE {{{*/
    let v = t_store_getItem(key);
    if( v && (v == value)) {
/*{{{
if(log_this) t_store_key_log("UNCHANGED VALUE", key, value);
}}}*/

    }
    /*}}}*/
    /* STORE NEW {{{*/
    else if(value) {
if(log_this) t_store_key_log("STORING   VALUE", key, value);

        store_site_or_page_setItem(key , value);
    }
    /*}}}*/
    /* REMOVE OLD {{{*/
    else if(v) {
if(log_this) t_store_key_log("REMOVING  VALUE", key);

        store_site_or_page_removeItem(key);
    }
    /*}}}*/
    return value;
};
/*}}}*/
/*… store_site_or_page_setItem {{{*/
let store_site_or_page_setItem = function(key,value)
{
    localStorage_setItem( store_get_site_or_page_pfx_for_key(key)+"."+key, value);
};
/*}}}*/
/*… store_site_or_page_removeItem {{{*/
let store_site_or_page_removeItem = function(key)
{
    return  localStorage_delItem( store_get_site_or_page_pfx_for_key(key)+"."+key       );
};
/*}}}*/

/* GET */
/*➔ t_store_getBool {{{*/
let t_store_getBool = function(key)
{
    return (localStorage_getItem(    store_get_site_or_page_pfx_for_key(key)+"."+key) == "true");
};
/*}}}*/
/*➔ t_store_getItem {{{*/
let t_store_getItem = function(key, site_or_page)
{
    let item
        = (site_or_page == "page") ? localStorage_getItem( t_store_get_page_pfx()+"."+key)
        : (site_or_page == "site") ? localStorage_getItem( t_store_get_site_pfx()+"."+key)
        :                            localStorage_getItem(   store_get_site_or_page_pfx_for_key( key )+"."+key)
    ;
/*{{{
    let lfs = store_isa_site_or_page_key(key) ? lf5 : lf7;
logXXX("t_store_getItem %c "+(store_isa_site_or_page_key(key) ? "PAGE" : "SITE")+" %c"+key+" %c"+ item
    ,                 lbH+lfs                                                    ,lbH+lf4  ,lbH+lfs)
}}}*/
    return item;
};
/*}}}*/
/*➔ t_store_setItem {{{*/
let t_store_setItem = function(key, val, site_or_page)
{
    let item
        = (site_or_page == "page") ? localStorage_setItem( t_store_get_page_pfx()                   +"."+key, val)
        : (site_or_page == "site") ? localStorage_setItem( t_store_get_site_pfx()                   +"."+key, val)
        :                            localStorage_setItem(   store_get_site_or_page_pfx_for_key(key)+"."+key, val)
    ;
/*{{{
    let lfs = store_isa_site_or_page_key(key) ? lf5 : lf7;
logXXX("t_store_setItem %c "+(store_isa_site_or_page_key(key) ? "PAGE" : "SITE")+" %c"+key+" %c"+ item
    ,                 lbH+lfs                                                    ,lbH+lf4  ,lbH+lfs)
}}}*/
    return item;
};
/*}}}*/
/*➔ t_store_delItem {{{*/
let t_store_delItem = function(key, val, site_or_page)
{
    let item
        = (site_or_page == "page") ? localStorage_delItem( t_store_get_page_pfx()                   +"."+key, val)
        : (site_or_page == "site") ? localStorage_delItem( t_store_get_site_pfx()                   +"."+key, val)
        :                            localStorage_delItem(   store_get_site_or_page_pfx_for_key(key)+"."+key, val)
    ;
/*{{{
    let lfs = store_isa_site_or_page_key(key) ? lf5 : lf7;
logXXX("t_store_delItem %c "+(store_isa_site_or_page_key(key) ? "PAGE" : "SITE")+" %c"+key+" %c"+ item
    ,                 lbH+lfs                                                    ,lbH+lf4  ,lbH+lfs)
}}}*/
    return item;
};
/*}}}*/
/*➔ t_store_parseXY {{{*/
let t_store_parseXY = function(key)
{
    let caller = "t_store_parseXY("+key+")";
let log_this = DOM_STORE_LOG || LOG_MAP.T0_STORE;
if( log_this) log(caller);

    let dom_string = t_store_getItem(key);
    if(!dom_string) return null;
if( log_this) log("...dom_string=["+dom_string+"]");

    let xy = null;
    try {
        xy    = JSON.parse(dom_string);
        let s = ""; Object.keys(xy).forEach( function(k) { s += "["+k+" = "+xy[k]+"]"+LF; });
if( log_this) log("%c"+ caller+":", lb0);
if( log_this) log("%c"+ s         , lb7);
     }
     catch(ex) {
if( log_this) log("%c"+caller+":"                                                     , lb2    );
if( log_this) log("%c"+t_util.trip_CR_LF(dom_string)                                  , lbF+lb0);
if( log_this) log("%c"+"0123456789_123456789_123456789_123456789_123456789_123456789_", lbF+lb8);
if( log_this) log("%c"+"0_________1_________2_________3_________4_________5_________6", lbF+lb8);
if( log_this) log("%c*** "+ex, lb2);
    }
    return xy;
};
/*}}}*/
/*➔ t_store_has_some_page_keys {{{*/
let t_store_has_some_page_keys = function()
{
    let some_page_keys = [];
    let site_pfx = t_store_get_site_pfx();

    try {
        for(let   i = localStorage.length-1; i>=0; --i)
        {
            let key = localStorage.key(i);
            if(   !key.startsWith( site_pfx        ) /* .. (page if not site) */
                  && !key.endsWith  ( "window_scrollY") /* ignore volatile page info */
              )
                some_page_keys.push(key);
        }
    } catch(ex) {}

    return some_page_keys.length
        ?  some_page_keys
        :  ""
    ;
};
/*}}}*/
/*➔ t_store_log_site_and_page {{{*/
let t_store_log_site_and_page = function()
{
    let results  = [];
    let site_pfx = t_store_get_site_pfx();
    let page_pfx = t_store_get_page_pfx();

    try {
        for(let      i = localStorage.length-1; i>=0; --i)
        {
            let    key = localStorage.key(i);
            if(   !key.includes( site_pfx )
               && !key.includes( page_pfx )
              )
                continue;

            let    val = localStorage[key];

            let { filter_in  ,  filter_out } = store_FILTER(key,val);
            if(   filter_in || !filter_out)
            {
                let value = localStorage_getItem( key );
                results.push({key , value});
            }
        }
    } catch(ex) {}

    t_log.console_table(results, "["+site_pfx+"] .. ["+page_pfx+"]");
    return results;/*//FIXME*/
};
/*}}}*/
/*… store_FILTER {{{*/
const EMPTY_ARRAY = '[""]'; /* eslint-disable-line quotes */

let store_FILTER = function(key,val)
{
    /* EXPAND VAL {{{*/
    if     ( val.includes("selected")) val = JSON.parse(val);
/*{{{
    else if( val.startsWith("[")     ) val = JSON.parse(val);
}}}*/

    /*}}}*/
    /* [filter_in] {{{*/
    let filter_in  = "";

    /* non-default value */
    if( val.selected || val.pinned) filter_in    = "SELECTED OR PINNED";

    /*}}}*/
    /* filter_out {{{*/
    let filter_out = "";

    /* default value .. (not to be exported) */
    if(val == EMPTY_ARRAY)
        filter_out = "(val == "+EMPTY_ARRAY+")";

    else if(val.xy && !val.selected && !val.pinned)
        filter_out = "NOT selected and NOT pinned";

    /* volatile .. (not to be exported) */
    if(   key.includes("hotspot"      )
       || key.includes("pivot"        )
       || key.includes("fly_div"      )
       || key.includes("ratio_"       )
       || key.includes("sel_arr"      )
       || key.includes("window_scroll")
      )
        filter_out = key;

    /*}}}*/
/*{{{
if(filter_out) log("store_FILTER(["+key+"] ["+val+"]) %c"+filter_out, lbH+lf2);
if(filter_in ) log("store_FILTER(["+key+"] ["+val+"]) %c"+filter_in , lbH+lf4);
}}}*/
    return { filter_in , filter_out };
};
/*}}}*/

/* SCOPE [PAGE] [SITE] */
/*➔ t_store_add_page_key  {{{*/
let store_isa_page_key_array = [];
let t_store_add_page_key       = function(key) {        store_isa_page_key_array.push    ( key ); };
let store_isa_page_key       = function(key) { return store_isa_page_key_array.includes( key ); };
 /*}}}*/
/*➔ t_store_add_site_key {{{*/
let   store_isa_site_key_array = [];
let t_store_add_site_key       = function(key) {        store_isa_site_key_array.push    ( key ); };
let   store_isa_site_key       = function(key) { return store_isa_site_key_array.includes( key ); };
/*}}}*/
/*➔ t_store_remove_shared_items {{{*/
let t_store_remove_shared_items = function(msg="")
{
/*{{{*/
let   caller = "t_store_remove_shared_items";
let log_this = DOM_STORE_TAG || DOM_STORE_LOG || LOG_MAP.T0_STORE;

/*}}}*/
    /* COLLECT [page_items_keys_to_remove_array] {{{*/
    let site_pfx = t_store_get_site_pfx();
    let page_pfx = t_store_get_page_pfx();
/*{{{
log("%c site_pfx=["+site_pfx+"]", lbH+lf1);
log("%c page_pfx=["+page_pfx+"]", lbH+lf1);
}}}*/
    let page_items_keys_to_remove_array = [];
    try {
        for(let i = localStorage.length-1; i>=0; --i)
        {
            let k = localStorage.key(i);
            if( t_store_is_a_shared_item(site_pfx,page_pfx,i+1,k,log_this) )
            {
                page_items_keys_to_remove_array.push(k);
            }
        }
    } catch(ex) {}
    /*}}}*/
    /* REMOVE  [page_items_keys_to_remove_array] {{{*/
    if(page_items_keys_to_remove_array.length)
    {
if( log_this) log("%c"+caller, lbb+lbH+lf4);
if( log_this) log("%c localStorage: %c SITE %c"+site_pfx+"%c PAGE %c"+page_pfx +" %c REMOVING PAGE ITEMS:"
                  ,lbH+lf2         ,lbL+lf8,lbR+lf2      ,lbL+lf8,lbR+lf3        ,lbH+lf3                 );

        let removed_keys = "";
        for(let i=0; i < page_items_keys_to_remove_array.length; ++i)
        {
            let k = page_items_keys_to_remove_array[i];
if(log_this) log((i+1)+"%c removing %c"+k
                 ,      lbL+lf2    ,lbR+lf3);

            localStorage_delItem(k);
            removed_keys += (i+1)+" - "+store_key_tail(k)+LF;
        }
        _notify_info(  (  msg
                        ? msg+LF
                        : ""
                       )
                       + (  removed_keys
                          ? "PAGE STORAGE CLEARED:"+LF+removed_keys
                          : "NO PAGE STORAGE CLEARED"
                         )
                    );
    }
    /*}}}*/
};
/*}}}*/
/*➔ t_store_is_a_shared_item {{{*/
let t_store_is_a_shared_item = function(site_pfx,page_pfx,num,key,log_this)
{
    /*.............................*/ let why_not    = ""; let why_shared = "";                  let lfx = lf8;

    if     ( key.startsWith(site_pfx     ) ) { why_not    =                 "SKIPPING SITE KEY"    ; lfx = lf0; }
    else if( key.includes  (".DOM"       ) ) { why_not    =                 "SKIPPING DOM  KEY"    ; lfx = lf7; }
    else if( key.includes  (".SNAPSHOT"  ) ) { why_not    =                 "SKIPPING SNAPSHOT KEY"; lfx = lf7; }
    else if( key.startsWith(page_pfx     ) ) {                 why_shared = "SHARING  PAGE KEY"    ; lfx = lf2; }

/*{{{*/
if(log_this) {
    let result = why_shared || why_not;
    log(num+"%c "+t_util.mPadStart(result,16)+"%c"+t_util.mPadStart(key,48)+"%c"+ t_util.ellipsis(localStorage_getItem(key),32)
        ,    lbL+lfx                          ,lbC+lfx                      ,lbR+lfx                                           );
}
/*}}}*/
    return why_shared;
};
/*}}}*/
/*➔ t_store_remove_all_site_items {{{*/
let t_store_remove_all_site_items = function(msg="")
{
/*{{{*/
let   caller = "t_store_remove_all_site_items";
let log_this = DOM_STORE_LOG || LOG_MAP.T0_STORE;

/*}}}*/
    /* COLLECT [site_items_keys_to_remove_array] {{{*/
    let site_pfx = t_store_get_site_pfx();
/*{{{
log("%c site_pfx=["+site_pfx+"]", lbH+lf1);

    let page_pfx = t_store_get_page_pfx();
log("%c page_pfx=["+page_pfx+"]", lbH+lf1);
}}}*/
    let site_items_keys_to_remove_array = [];
    try {
        for(let i = localStorage.length-1; i>=0; --i)
        {
            let k = localStorage.key(i);
            if( k.startsWith( site_pfx ) )
            {
                /*{{{
logXXX((i+1)+" %c "+k+" %c "+ localStorage_getItem( k ), lbL+lf3, lbR+lf4)
}}}*/
                site_items_keys_to_remove_array.push(k);
            }
            else {
                /*{{{
logXXX((i+1)+" %c "+k+" %c "+ localStorage_getItem( k ), lbL+lf8, lbR+lf9)
}}}*/
            }
        }
    } catch(ex) {}
    /*}}}*/
    /* REMOVE  [site_items_keys_to_remove_array] {{{*/
    if(site_items_keys_to_remove_array.length)
    {
if( log_this) log("%c"+caller, lbb+lbH+lf4);
if( log_this) log("%c localStorage: %c SITE %c"+site_pfx+"%c PAGE %c"+site_pfx +" %c REMOVING PAGE ITEMS:"
                  ,lbH+lf2         ,lbL+lf8,lbR+lf2      ,lbL+lf8,lbR+lf3        ,lbH+lf3                 );

        let removed_keys = "";
        for(let i=0; i < site_items_keys_to_remove_array.length; ++i)
        {
            let k = site_items_keys_to_remove_array[i];
if(log_this) log((i+1)+"%c removing %c"+k
                 ,      lbL+lf2    ,lbR+lf3);

            localStorage_delItem(k);
            removed_keys += (i+1)+" - "+store_key_tail(k)+LF;
        }
        _notify_info(  (  msg
                        ? msg+LF
                        : ""
                       )
                       + (  removed_keys
                          ? "SITE STORAGE CLEARED:"+LF+removed_keys
                          : "NO SITE STORAGE CLEARED"
                         )
                    );
    }
    /*}}}*/
};
/*}}}*/
/*➔ t_store_get_site_pfx {{{*/
let t_store_get_site_pfx = function()
{
    return t_util.tokenize
        ?  t_util.tokenize( window.location.hostname || SITE_URL_TEMPLATE)
        :                   window.location.hostname
    ;
};
/*}}}*/
/*➔ t_store_get_page_pfx {{{*/
/*{{{*/
const BACKSLASH = String.fromCharCode(92);
const FORESLASH = String.fromCharCode(47);

/*}}}*/
let t_store_get_page_pfx = function()
{
    let a
        = (window.location.pathname.indexOf(FORESLASH) >= 0)
        ?  window.location.pathname.split  (FORESLASH)
        :  window.location.pathname.split  (BACKSLASH);

    let dirName
        = (  a.length > 1)
        ?  a[a.length - 2]
        :  ""
    ;

    let fileName_or_index
        =  a[a.length-1]
        || "index"
    ;

    let idx = fileName_or_index.indexOf(".");
    let ext
        = (idx > 1)
        ?  fileName_or_index.substring(idx+1)
        :  ""
    ;
    if(ext) fileName_or_index = fileName_or_index.substring(0, fileName_or_index.length - ext.length -1);

/*{{{
log_key_val_group("t_store_get_page_pfx"
                  , {   a
                      , dirName
                      , fileName_or_index
                      , ext
                  });
}}}*/

    let result
        = (dirName   !=               "")
        ? (dirName+"_"+fileName_or_index)
        :              fileName_or_index
    ;

    return result || "index";

};
/*}}}*/

/* EVENTS */
/*➔ t_store_add_listener {{{*/
let t_store_add_listener =function()
{
    /*{{{*/
let   caller = "t_store_add_listener";
let log_this = DOM_STORE_LOG || LOG_MAP.T0_STORE;

if( log_this) log(caller);
    /*}}}*/

    window.addEventListener("storage", store_storage_listener);
};
/*}}}*/
/*… store_storage_listener {{{*/
let store_storage_listener = function(e)
{
let log_this = DOM_STORE_LOG || LOG_MAP.T0_STORE;

if( log_this ) {
    log("%c STORAGE EVENT %c key %c"+e.key
        ,lbH+lf3    ,lbL+lf5,lbR+lf4);

    log_key_val_group( "url keys values"
                       , {        url : e.url
                           ,      key : e.key
                           , oldValue : t_util.ellipsis(e.oldValue)
                           , newValue : t_util.ellipsis(e.newValue)
                           ,  callers : t_log.get_callers()
                       }
                       , lf8
                       , true
                     );
    console.dir(e.storageArea);
}
};
/*}}}*/

/* HELPER */
/*➔ t_site_or_page_logged_keys_clear {{{*/
let t_site_or_page_logged_keys_clear = function(_caller) /* eslint-disable-line no-unused-vars */
{
/*{{{
log("%c t_site_or_page_logged_keys_clear %c"+_caller, lbL+lf8, lbR+lf4);
}}}*/
    site_or_page_logged_keys=[];
};
/*}}}*/
/*… store_isa_site_or_page_key {{{*/
let site_or_page_logged_keys = [];
let store_isa_site_or_page_key = function(key)
{
/*{{{*/
let   caller = "store_isa_site_or_page_key";
let log_this = LOG_MAP && (LOG_MAP.T0_STORE);

if( log_this) {
    log(caller+"("+key+")");

    if(!site_or_page_logged_keys.includes(key) )
    {
        site_or_page_logged_keys.push(key);

        let isa_site_key = store_isa_site_key      ( key                 ); let l_s = isa_site_key ? lf2 : lf0;
        let isa_page_key = store_isa_page_key      ( key                 ); let l_p = isa_page_key ? lf6 : lf0;
        let site_or_page = t_prop.get && t_prop.get( t_data.SITE_OR_PAGE ); let l_m = site_or_page ? lf2 : lf6;

        if(isa_site_key || isa_page_key || site_or_page)
        {
            log("...%c"+t_util.mPadStart(key,32)+"%c"+(isa_site_key ? "site key":"")+"%c"+(isa_page_key ? "page key":"")+"%c"+(site_or_page ? "mode site":"mode page")
                ,   lbL+lf4                      ,lbR+l_s                            ,lbR+l_p                            ,lbH+l_m                                     );
        }
    }
}
/*}}}*/
    if( store_isa_site_key( key ) ) return  true;     /* EXPLICIT SITE SCOPE */
    if( store_isa_page_key( key ) ) return false;     /* EXPLICIT PAGE SCOPE */
    /* CURRENT MODE or PAGE */      return t_prop.get && t_prop.get( t_data.SITE_OR_PAGE );
};
/*}}}*/
/*… store_get_site_or_page_pfx_for_key {{{*/
/*{{{*/
/*{{{
const PAGE_URL_TEMPLATE = "Archives/Public/w3c-wai-ig/2018JanMar/0148.html"; // test-purpose - tokenizer template
}}}*/
const SITE_URL_TEMPLATE = "www.localhost.com";                               /* test-purpose - file to http protocol emulation */

/*}}}*/
let store_get_site_or_page_pfx_for_key = function(key)
{
    return store_isa_site_or_page_key( key )
        ?  t_store_get_site_pfx()
        :  t_store_get_page_pfx();
};
/*}}}*/

/* LOG */
/*➔ t_store_do_not_log_transient_key {{{*/

let _store_log_transient_key_array  = [];

let  t_store_do_not_log_transient_key = function(key) {        _store_log_transient_key_array.push    ( key ); };
let _store_isa_transient_key        = function(key) { return _store_log_transient_key_array.includes( key ); };
/*}}}*/
/*➔ t_store_key_log {{{*/
let t_store_key_log = function(msg, key, value="")
{
    if( _store_isa_transient_key( key ) ) {
/*{{{
logBIG(key+" is transient")
}}}*/
        return;
    }

    let site_or_page = store_isa_site_or_page_key( key ) ? "PAGE" : "SITE";
    let          lbx = (site_or_page == "PAGE") ? lbA : lbb;
    let          lfx = (site_or_page == "PAGE") ? lf5 : lf7;

    log(   "%c STORE SCOPE %c"+ site_or_page +"%c"+ store_get_site_or_page_pfx_for_key( key )
          +  "%c"             + msg
          +   "%c"            + key +"%c = %c"+ (value || "&nbsp;")
          ,  lbL+lf8       ,lbC+lfx            ,lbR+lfx
          ,    lbH+lfx
          ,     lbx+lfx+lbL,        lbx+lbC,lbx+lbR+lfx
       );

};
/*}}}*/
/*_ store_key_tail {{{*/
let store_key_tail = function(k)
{
    return k.substring(k.lastIndexOf(".") + 1); /* last dot-separated component */
};
/*}}}*/

// t_store_IMPORT(true);// ReferenceError: Cannot access 'dom_store' before initialization
/* EXPORT */
/*{{{*/
return { name : "dom_store"
    , logging : (state) => DOM_STORE_LOG = t_store.t_store_set_state("DOM_STORE_LOG",state)
    , tagging : (state) => DOM_STORE_TAG = t_store.t_store_set_state("DOM_STORE_TAG",state)
    , t_store_IMPORT

    , SITE_URL_TEMPLATE

    /* GET */
    , t_store_getBool
    , t_store_getItem

    /* SET */
    , t_store_setItem
    , t_store_set_state
    , t_store_set_value

    /* DEL */
    , t_store_delItem

    /* UTIL */
    , t_store_has_some_page_keys
    , t_store_log_site_and_page
    , t_store_parseXY

    /* SCOPE [PAGE] [SITE] */
    , t_store_add_page_key
    , t_store_add_site_key
    , t_store_remove_shared_items
    , t_store_is_a_shared_item
    , t_store_remove_all_site_items
    , t_store_get_page_pfx
    , t_store_get_site_pfx

    /* EVENTS */
    , t_store_add_info_observer
    , t_store_add_listener

    /* HELPER */
    , t_site_or_page_logged_keys_clear

    /* LOG */
    , t_store_do_not_log_transient_key
    , t_store_key_log

};

/*}}}*/

}());

//dom_store.t_store_IMPORT(true,0); /* auto import .. (dom_store is used before [dom_tools] call) */
