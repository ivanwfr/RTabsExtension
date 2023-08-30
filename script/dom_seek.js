/* dom_seek_js */
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* globals window, document */
/* globals setTimeout, clearTimeout */

/* globals dom_data   */
/* globals dom_i18n   */
/* globals dom_log    */
/* globals dom_prop   */
/* globals dom_select */
/* globals dom_slot   */
/* globals dom_sticky */
/* globals dom_store  */
/* globals dom_tools  */
/* globals dom_util   */

/* exported dom_seek, DOM_SEEK_JS_TAG */

/*
:update|1,$y *
:!start explorer https://jshint.com/
:!start explorer https://cdn.jsdelivr.net/npm/vue/dist/vue.js
*/

const DOM_SEEK_JS_ID        = "dom_seek_js";
const DOM_SEEK_JS_TAG       = DOM_SEEK_JS_ID    +" (230820:21h:10)";
/*}}}*/
let dom_seek    = (function() {
"use strict";
let   DOM_SEEK_LOG          = false;
let   DOM_SEEK_TAG          = false;

/* IMPORT */
/*{{{*/
/* eslint-disable no-unused-vars */
/*➔ t_seek_IMPORT {{{*/
/*{{{*/
/*....................................*/
let t_data     = {}        ;    /* 05 */
let t_log      = {}        ;    /* 06 */
let t_util     = {}        ;    /* 07 */
/*  t_details  ............. OPTIONAL */
let t_i18n     = {}        ;    /* 08 */
let t_prop     = {}        ;    /* 09 */
let t_store    = {}        ;    /* 10 */
/*  t_fly      = {}        ; */ /* 11 */
/*....................................*/
/*  t_wording  = {}        ; */ /* 12 */
let t_select   = {}        ;    /* 13 */
let t_slot     = {}        ;    /* 14 */
/*....................................*/
/*  t_hide     = {}        ; */ /* 15 */
/*  t_view     = {}        ; */ /* 16 */
let t_sticky   = {}        ;    /* 17 */
/*➔ t_seek     = {}        ; */ /* 18 */
/*  t_share    = {}        ; */ /* 19 */
/*....................................*/
/*  t_grid     = {}        ; */ /* 20 */
/*  t_gutter   = {}        ; */ /* 21 */
/*....................................*/
/*  t_ipc      = {}        ; */ /* 22 */
let t_tools    = {}        ;    /* 23 */
/*....................................*/
/*}}}*/
let t_seek_IMPORT   = function(log_this)
{
/* LOAD {{{*/
/* ...................................*/
    t_data    = dom_data   ;    /* 05 */
    t_log     = dom_log    ;    /* 06 */
    t_util    = dom_util   ;    /* 07 */
/*  t_details  ............. OPTIONAL */
    t_i18n    = dom_i18n   ;    /* 08 */
    t_prop    = dom_prop   ;    /* 09 */
    t_store   = dom_store  ;    /* 10 */
/*  t_fly     = dom_fly    ; */ /* 11 */
/* ...................................*/
/*  t_wording = dom_wording; */ /* 12 */
    t_select  = dom_select ;    /* 13 */
/*  t_wot     = dom_wot    ; */ /* 13 */
    t_slot    = dom_slot   ;    /* 14 */
/* ...................................*/
/*  t_hide    = dom_hide   ; */ /* 15 */
/*  t_view    = dom_view   ; */ /* 16 */
    t_sticky  = dom_sticky ;    /* 17 */
/*➔ t_seek    = dom_seek   ; */ /* 18 */
/*  t_share   = dom_share  ; */ /* 19 */
/* ...................................*/
/*  t_grid    = dom_grid   ; */ /* 20 */
/*  t_gutter  = dom_gutter ; */ /* 21 */
/* ...................................*/
/*  t_ipc     = dom_ipc    ; */ /* 22 */
    t_tools   = dom_tools  ;    /* 23 */
/* ...................................*/
/*}}}*/
    seek_INTERN();
    /* MODULE LOGGING TAGGING {{{*/
    DOM_SEEK_LOG = DOM_SEEK_LOG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_SEEK_LOG"));
    DOM_SEEK_TAG = DOM_SEEK_TAG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_SEEK_TAG"));

    /*}}}*/
if(log_this) log("%c 17 SEEK", lbH+lf7);
};
/*}}}*/
/*_   seek_INTERN {{{*/
/*{{{*/

/* t_log */
let LOG_MAP;
let lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;
let log, logBIG, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;

/*}}}*/
let   seek_INTERN = function()
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
    /* dom_store {{{*/
    if(typeof dom_store != "undefined")
    {
        t_store = dom_store;

if(DOM_SEEK_LOG || DOM_SEEK_TAG) logBIG(DOM_SEEK_JS_ID+": ["+dom_store.name+"]"      , 4);
    }
    /*}}}*/

    seek_DEPEND();
};
/*}}}*/
/*_   seek_DEPEND {{{*/
/*{{{*/

let CSS_SEEKZONE_ARRAY;
let CSS_CORNER_ARRAY;
/*}}}*/
let   seek_DEPEND = function()
{
    /* t_data {{{*/
    CSS_SEEKZONE_ARRAY
        = [   t_data.CSS_ANCHOR_NODE
            , t_data.CSS_BORDERING

            , t_data.CSS_DBLCLICK
            , t_data.CSS_LONGPRESS
            , t_data.CSS_MISCLICK
            , t_data.CSS_MISCLICK1
            , t_data.CSS_MISCLICK2
            , t_data.CSS_MISCLICK3
        ];

    CSS_CORNER_ARRAY
        = [   t_data.CSS_CORNER_U_R
            , t_data.CSS_CORNER_R_D
            , t_data.CSS_CORNER_D_L
            , t_data.CSS_CORNER_L_U
        ];
    /*}}}*/
};
/*}}}*/
/* eslint-enable  no-unused-vars */
/*}}}*/

/* CONST */
/*{{{*/
/* CSS {{{*/
const CSS_SEEK0_ONDOC           = "seek0_onDOC";
const CSS_SEEK1_ONRESUME        = "seek1_onResume";
const CSS_SEEK2_ONSLOTEL        = "seek2_onSlotEL";
const CSS_SEEK3_ONTOOL          = "seek3_onTOOL";
const CSS_SEEK4_ONJUMPEL        = "seek4_onJumpEL";
const CSS_SEEK5_ONSEEKER        = "seek5_onSeeker";
const CSS_SEEK6_ONSTICKY        = "seek6_onSticky";

/*}}}*/
/*{{{*/
const TARGET_TYPE_RESUME = "RESUME";
const TARGET_TYPE_SELECT = "SELECT";
const TARGET_TYPE_STICKY = "STICKY";

/*}}}*/
/*}}}*/
/* VARS */


/* [seek_TOOL] .. (private object) */
/*{{{---------------------------------------------------------- [seek_TOOL] -*/
/*------------------------------------------------------------- [seek_TOOL] -*/
/*------------------------------------------------------------- [seek_TOOL] -*/
let seek_TOOL = (function() {
/*➔ t_seektool_clr_TARGET {{{*/
let t_seektool_clr_TARGET = function()
{
    onWork_SEEK_TARGET  = null;

};
/*}}}*/
/*➔ t_seektool_has_TARGET {{{*/
let t_seektool_has_TARGET = function()
{
    return !!onWork_SEEK_TARGET;
};
/*}}}*/
/*➔ t_seektool_get_TARGET_label {{{*/
let t_seektool_get_TARGET_label = function()
{

    return t_util.get_n_lbl(onWork_SEEK_TARGET);
};
/*}}}*/
/*➔ t_seektool_get_STICKY {{{*/
let t_seektool_get_STICKY = function()
{
    return (                    onWork_SEEK_TARGET
            && (               (onWork_SEEK_TARGET == seeker_PU) || (onWork_SEEK_TARGET == seeker_CU)
                ||             (onWork_SEEK_TARGET == seeker_PD) || (onWork_SEEK_TARGET == seeker_CD)
                || t_util.has_el_class(onWork_SEEK_TARGET, t_data.CSS_STICKY_TOOL)
               )
           )
            ?   onWork_SEEK_TARGET
            :   null;

};
/*}}}*/
/*➔ t_seektool_set_TARGET {{{*/
let    onWork_SEEK_TARGET = null;
let t_seektool_set_TARGET = function(onWork_EL)
{
/*{{{*/
let   caller = "t_seektool_set_TARGET";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

if( log_this ) log("%c"+caller+"("+t_util.get_n_lbl(onWork_EL)+")", lf9);
/*{{{
if( log_this ) log_caller();
}}}*/
/*}}}*/

    /* SET CURRENT SEEK TARGET */
    if( onWork_EL !=    onWork_SEEK_TARGET)
    {
        let last_slot = onWork_SEEK_TARGET ? onWork_SEEK_TARGET.last_slot : 0;
        let last_num  = onWork_SEEK_TARGET ? onWork_SEEK_TARGET.last_num  : 0;

        if     (                 seeker_PU == onWork_EL                          ) { onWork_SEEK_TARGET = onWork_EL; } /* ON SEEKER    */
        else if(                 seeker_CU == onWork_EL                          ) { onWork_SEEK_TARGET = onWork_EL; } /* .. ......    */
        else if(          t_util.has_el_class(onWork_EL,  t_data.CSS_STICKY_TOOL)) { onWork_SEEK_TARGET = onWork_EL; } /* ON STICKY    */
        else if(onWork_EL &&                  onWork_EL.id.startsWith("seekzone")) { onWork_SEEK_TARGET = onWork_EL; } /* .. ......    */
        else if(    t_select.is_a_select_tool(onWork_EL)                         ) { onWork_SEEK_TARGET = onWork_EL; } /* ON SELECTION */
        else if(  t_select.t_is_node_selected(onWork_EL)                         ) { onWork_SEEK_TARGET = onWork_EL; } /* .. ......... */

        if( onWork_SEEK_TARGET ) {
            onWork_SEEK_TARGET.last_slot = last_slot;
            onWork_SEEK_TARGET.last_num  = last_num ;
        }
    }

    /* SEEKER .. STATE .. TRANSITION */
    if(onWork_EL) seektool_state_transition( onWork_EL );

if( log_this) log("%c onWork_SEEK_TARGET %c "+t_util.get_n_lbl(onWork_SEEK_TARGET)+"]", lbL+lf6, lbR+lfX[(onWork_SEEK_TARGET ? 4:0)]);
};
/*}}}*/
/*➔ t_seektool_set_STICKY {{{*/
let t_seektool_set_STICKY = function(sticky)
{
    if(sticky) onWork_SEEK_TARGET = sticky;
};
/*}}}*/
/*➔ t_seektool_set_XY_LABEL_TARGET_TYPE {{{*/
let t_seektool_set_XY_LABEL_TARGET_TYPE = function(xy, seek_label, target_type=TARGET_TYPE_RESUME)
{
    onSeekXYLT.label = seek_label;
    onSeekXYLT.x     = xy.x.toFixed(0);/* - window.scrollX;*/
    onSeekXYLT.y     = xy.y.toFixed(0);/* - window.scrollY;*/

    if(target_type  != TARGET_TYPE_RESUME)
        onSeekXYLT.target_type = target_type;

/*{{{
log_caller()
log( onSeekXYLT )
}}}*/
};
/*}}}*/

 /*…   seektool_state_transition {{{*/
let    seektool_state_transition = function(onWork_EL) /* eslint-disable-line complexity */
{
/*{{{*/
let caller = "seektool_state_transition";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

if( log_this) t_log.console_clear(caller+"("+t_util.get_id_or_tag(onWork_EL)+")");
/*{{{
}}}*/
if( log_this) t_tools.t_log_event_status(caller+" "+t_data.SYMBOL_RIGHT_ARROW+" BEFORE", lbb+lf0);
/*}}}*/
    /*  slot .. num .. slot_hasCCS .. seeker_isOn_SLOT_EL {{{*/
    let slot         = t_tools.t_get_onWork_EL_slot();
    let num          = t_tools.t_get_onWork_EL_num ();

    let slot_changed = onWork_SEEK_TARGET && onWork_SEEK_TARGET.last_slot && slot && (slot != onWork_SEEK_TARGET.last_slot);
    let  num_changed = onWork_SEEK_TARGET && onWork_SEEK_TARGET.last_num  &&  num && ( num != onWork_SEEK_TARGET.last_num );

    /* remember [slot] .. [num] for next seek step */
    if( onWork_SEEK_TARGET) {
        onWork_SEEK_TARGET.last_slot = slot;
        onWork_SEEK_TARGET.last_num  =  num;
    }

    let slot_hasCCS
        = !!t_select.t_select_get_slot_pattern(slot)
    ;
if((slot >= 0) && !slot_hasCCS) logBIG(caller+": [slot "+slot+"] .. !slot_hasCCS .. ["+t_util.get_id_or_tag_and_className(onWork_EL)+"]", 2);

    let seeker_isOn_SLOT_EL = t_seeker_isOn_SLOT_EL(onWork_EL); /* onWork_EL has a slot */
    /*}}}*/
    /* seek7_PUactive {{{*/
    let seek7_PUactive = t_seeker_PU_is_active();

    /*}}}*/
    /* seek6_onSticky {{{*/
    let            sticky = t_sticky.t_sticky_get_onWork_STICKY();

    let     seek6_onSticky                          /* sticky  is a tool          */
        =               (sticky != undefined      ) /* some ative sticky          */
        &&              (sticky == onWork_EL      ) /* just touched               */
/*{{{
        &&  t_util.has_el_class(sticky  , t_data.CSS_SEEK_TARGET) // sticky_pad in seekingstate
        && !t_util.has_el_class(sticky  , t_data.CSS_FIXED      ) // not in FIXED state
}}}*/
    ;
    /*}}}*/
    /* seek5_onSeeker {{{*/
    let     seek5_onSeeker
        =  !seek6_onSticky
        && (    (seeker_CU == onWork_EL) || (seeker_PU == onWork_EL)
            ||  (seeker_CD == onWork_EL) || (seeker_PD == onWork_EL))
    ;

    /*}}}*/
    /* seek4_onJumpEL {{{*/
    let     seek4_onJumpEL
        =   seek7_PUactive
        && !seek6_onSticky
        && !seek5_onSeeker
        &&  seeker_isOn_SLOT_EL
        && (slot_changed || num_changed)
    ;

    /*}}}*/
    /* seek3_onTOOL {{{*/
    let     seek3_onTOOL
        =  !seek6_onSticky
        && !seek5_onSeeker
        && !seek4_onJumpEL
        &&  t_tools.t_is_a_tool_el(onWork_EL, caller)
    ;

    /*}}}*/
    /* seek2_onSlotEL {{{*/
    let     seek2_onSlotEL
        =  !seek6_onSticky
        && !seek5_onSeeker
        && !seek4_onJumpEL
        && !seek3_onTOOL
        &&  slot
        &&  slot_hasCCS
    ;

    /*}}}*/
    /* seek1_onResume {{{*/
    let     seek1_onResume
        =   seek7_PUactive
        && !seek6_onSticky
        && !seek5_onSeeker
        && !seek4_onJumpEL
        && !seek3_onTOOL
        && !seek2_onSlotEL
    ;

    /*}}}*/
    /* seek0_onDOC {{{*/
    let     seek0_onDOC                         /* .. NONE OF THE ABOVE */
        =  !seek6_onSticky
        && !seek5_onSeeker
        && !seek4_onJumpEL
        && !seek1_onResume
        && !seek2_onSlotEL
    ;

    /*}}}*/

    /* RESUMING TARGET type [STICKY OR SELECT] {{{*/
    let target_type
        = seek5_onSeeker      ? TARGET_TYPE_RESUME
        : seek6_onSticky      ? TARGET_TYPE_STICKY
        : seeker_isOn_SLOT_EL ? TARGET_TYPE_SELECT
        :                       TARGET_TYPE_RESUME;

    /*}}}*/
/*{{{*/
    let lfx
        =   seek6_onSticky ? lf6
        :   seek5_onSeeker ? lf5
        :   seek4_onJumpEL ? lf4
        :   seek3_onTOOL   ? lf3
        :   seek2_onSlotEL ? lf2
        :   seek1_onResume ? lf1
        :   seek0_onDOC    ? lf0
        :                    lf8
    ;

    let the_highest
        = seek6_onSticky   ? CSS_SEEK6_ONSTICKY
        : seek5_onSeeker   ? CSS_SEEK5_ONSEEKER
        : seek4_onJumpEL   ? CSS_SEEK4_ONJUMPEL
        : seek3_onTOOL     ? CSS_SEEK3_ONTOOL
        : seek2_onSlotEL   ? CSS_SEEK2_ONSLOTEL
        : seek1_onResume   ? CSS_SEEK1_ONRESUME
        : seek0_onDOC      ? CSS_SEEK0_ONDOC
        :                    "<seek_state_unexpected>"
    ;

if( log_this || DOM_SEEK_TAG) {
    log_key_val_group(   the_highest+" .. "+target_type+" ← "+onSeekXYLT.target_type
                     , { TOOLS               : "----------------------------------------"
                       , onWork_EL           : t_util.get_n_lbl(onWork_EL)
                       , onWork_EL_last_used : t_util.get_n_lbl(t_tools.t_get_onWork_EL_last_used())
                       , onWork_PANEL        : t_util.get_n_lbl(t_tools.t_get_onWork_PANEL())
                       , onWork_SEEK_TARGET  : t_util.get_n_lbl(onWork_SEEK_TARGET)
                       , sticky              : t_util.get_n_lbl(sticky)
                       , seek7_PUactive

                       , SLOT_NUM            : "----------------------------------------"
                       , slot                : "slot="+slot+" .. changed="+slot_changed+" .. last="+(onWork_SEEK_TARGET ? onWork_SEEK_TARGET.last_slot : 0)
                       , num                 : " num="+ num+" .. changed="+ num_changed+" .. last="+(onWork_SEEK_TARGET ? onWork_SEEK_TARGET. last_num : 0)
                       , slot_hasCCS
                       , seeker_isOn_SLOT_EL

                       , STATE               : "----------------------------------------"
                       , seek0_onDOC
                       , seek1_onResume
                       , seek2_onSlotEL
                       , seek3_onTOOL
                       , seek4_onJumpEL
                       , seek5_onSeeker
                       , seek6_onSticky
                     }
                     , lbb+lfx, true);

}
/*}}}*/
    /* SEEKER STEP FROM-TO {{{*/

    t_util.del_el_class(seeker_PU, t_tools.CSS_FADING        );
    t_util.del_el_class(seeker_PU, t_data .CSS_HIDING        );
    t_util.del_el_class(seeker_PU, t_tools.CSS_ON_COOLDOWN   );
    t_util.del_el_class(seeker_PU, t_data .CSS_ON_HIDDEN_NODE);

    t_util.del_el_class(seeker_PU, CSS_SEEK6_ONSTICKY);
    t_util.del_el_class(seeker_PU, CSS_SEEK5_ONSEEKER);
    t_util.del_el_class(seeker_PU, CSS_SEEK4_ONJUMPEL);
    t_util.del_el_class(seeker_PU, CSS_SEEK3_ONTOOL  );
    t_util.del_el_class(seeker_PU, CSS_SEEK2_ONSLOTEL);
    t_util.del_el_class(seeker_PU, CSS_SEEK1_ONRESUME);

    if     ( seek6_onSticky      ) seektool_set6_onSticky(lbH+lfx, log_this);
    else if( seek5_onSeeker      ) seektool_set5_onSeeker(lbH+lfx, log_this);
    else if( seek4_onJumpEL      ) seektool_set4_onJumpEL(lbH+lfx, log_this);
    else if( seek3_onTOOL        ) seektool_set3_onTOOL  (lbH+lfx, log_this);
    else if( seek2_onSlotEL      ) seektool_set2_onSlotEL(lbH+lfx, log_this);
    else if( seek1_onResume      ) seektool_set1_onResume(lbH+lfx, log_this);
    else if( seek0_onDOC         ) seektool_set0_onDOC   (lbH+lfx, log_this);

    /* CLEAR SELECTED STICKY {{{*/
/*{{{
    t_sticky.t_sticky_clr_SEEK_NEXT();
}}}*/

    /*}}}*/
    /* CLEAR SELECTED CONTAINER {{{*/
    t_tools.t_clr_container_selected();

    /*}}}*/
    let onDown_XY = t_tools.t_get_onDown_XY();
    let xy
        = {   x : onDown_XY.x + window.scrollX
            , y : onDown_XY.y + window.scrollY
        };

    if     ( seek6_onSticky   ) t_seektool_set_XY_LABEL_TARGET_TYPE(xy, CSS_SEEK6_ONSTICKY, target_type);
    else if( seek5_onSeeker   ) t_seektool_set_XY_LABEL_TARGET_TYPE(xy, CSS_SEEK5_ONSEEKER, target_type);
    else if( seek4_onJumpEL   ) t_seektool_set_XY_LABEL_TARGET_TYPE(xy, CSS_SEEK4_ONJUMPEL, target_type);
    else if( seek3_onTOOL     ) t_seektool_set_XY_LABEL_TARGET_TYPE(xy, CSS_SEEK3_ONTOOL  , target_type);
    else if( seek2_onSlotEL   ) t_seektool_set_XY_LABEL_TARGET_TYPE(xy, CSS_SEEK2_ONSLOTEL, target_type);
    else if( seek1_onResume   ) t_seektool_set_XY_LABEL_TARGET_TYPE(xy, CSS_SEEK1_ONRESUME, target_type);
    else if( seek0_onDOC      ) t_seektool_set_XY_LABEL_TARGET_TYPE(xy, CSS_SEEK0_ONDOC   , target_type);
    else                        t_seektool_set_XY_LABEL_TARGET_TYPE(xy, ""                , target_type); /* <seek_state_unexpected> */

     t_prop.set(CSS_SEEK0_ONDOC   , seek0_onDOC   );
     t_prop.set(CSS_SEEK3_ONTOOL  , seek3_onTOOL  );
     t_prop.set(CSS_SEEK2_ONSLOTEL, seek2_onSlotEL);
     t_prop.set(CSS_SEEK1_ONRESUME, seek1_onResume);
     t_prop.set(CSS_SEEK4_ONJUMPEL, seek4_onJumpEL);
     t_prop.set(CSS_SEEK5_ONSEEKER, seek5_onSeeker);
     t_prop.set(CSS_SEEK6_ONSTICKY, seek6_onSticky);

    /*}}}*/
/*{{{
if( log_this) t_tools.t_log_event_status_if_changed(t_data.SYMBOL_RIGHT_ARROW+the_highest, lbb+lfx);
}}}*/
if( log_this || DOM_SEEK_TAG) t_tools.t_log_event_status_if_changed(caller+" "+t_data.SYMBOL_RIGHT_ARROW+" CHANGED", lbb+lfx);
};
/*}}}*/
/*…   seektool_set6_onSticky {{{*/
let   seektool_set6_onSticky = function(lfx,log_this)
{
/*{{{*/
let caller = "seektool_set6_onSticky";

if( log_this) log("%c"+t_data.SYMBOL_RIGHT_ARROW_HOOK+" "+caller, lfx);
/*}}}*/
    t_util.add_el_class(seeker_PU, CSS_SEEK6_ONSTICKY);

    let sticky = t_sticky.t_sticky_get_onWork_STICKY();
    if( sticky ) {

        t_seeker_onMove1_grab( false ); /* FIRST MOVE IS A GRAB */
    }

    if(t_select.get_last_selected_slot() > 0)
    {
if( log_this) log("...done with %c SEEK SLOT %c start %c SEEK STICKY", lf2,lbA,lfx);

        t_select.clear_last_selected_slot();
    }
};
/*}}}*/
/*…   seektool_set5_onSeeker {{{*/
let   seektool_set5_onSeeker = function(lfx,log_this)
{
/*{{{*/
let caller = "seektool_set5_onSeeker";

if( log_this) log("%c"+t_data.SYMBOL_RIGHT_ARROW_HOOK+" "+caller, lfx);
/*}}}*/
    t_util.add_el_class(seeker_PU, CSS_SEEK5_ONSEEKER);

    t_seeker_onMove1_grab("ON SEEKER"); /* NEXT MOVE SEEKS NEXT TARGET */
};
/*}}}*/
/*…   seektool_set4_onJumpEL .. t_seeker_SELECT_onWork_EL() slot  num  container  highlight {{{*/
let   seektool_set4_onJumpEL = function(lfx,log_this)
{
/*{{{*/
let caller = "seektool_set4_onJumpEL";

if( log_this) log("%c"+t_data.SYMBOL_RIGHT_ARROW_HOOK+" "+caller, lfx);
/*}}}*/
    /* [seeker_PU] .. CSS_SEEK4_ONJUMPEL {{{*/
    t_util.add_el_class(seeker_PU, CSS_SEEK4_ONJUMPEL);

    /*}}}*/

    t_seeker_SELECT_onWork_EL();

    t_seeker_onMove1_grab( false ); /* FIRST MOVE IS A GRAB */
};
/*}}}*/
/*…   seektool_set3_onTOOL   .. nothing to do {{{*/
let   seektool_set3_onTOOL = function(lfx,log_this)
{
/*{{{*/
let caller = "seektool_set3_onTOOL";

if( log_this) log("%c"+t_data.SYMBOL_RIGHT_ARROW_HOOK+" "+caller, lfx);
/*}}}*/

};
/*}}}*/
/*…   seektool_set2_onSlotEL .. SEEK slot {{{*/
let   seektool_set2_onSlotEL = function(lfx,log_this)
{
/*{{{*/
let caller = "seektool_set2_onSlotEL";

if( log_this) log("%c"+t_data.SYMBOL_RIGHT_ARROW_HOOK+" "+caller, lfx);
/*}}}*/

    t_util.add_el_class(seeker_PU, CSS_SEEK2_ONSLOTEL);
    t_seeker_onMove1_grab( false ); /* FIRST MOVE IS A GRAB */
};
/*}}}*/
/*…   seektool_set1_onResume .. RESUME (same slot) {{{*/
let   seektool_set1_onResume = function(lfx,log_this)
{
/*{{{*/
let caller = "seektool_set1_onResume";

if( log_this) log("%c"+t_data.SYMBOL_RIGHT_ARROW_HOOK+" "+caller, lfx);
/*}}}*/
    t_util.add_el_class(seeker_PU, CSS_SEEK1_ONRESUME);

    t_tools.t_set_onWork_EL(seeker_PU, caller);

    t_seeker_onMove1_grab(caller); /* FIRST MOVE SEEKS NEXT TARGET */
};
/*}}}*/
/*…   seektool_set0_onDOC    .. t_seektool_clr_TARGET {{{*/
let   seektool_set0_onDOC = function(lfx,log_this)
{
/*{{{*/
let caller = "seektool_set0_onDOC";

if( log_this) log("%c"+t_data.SYMBOL_RIGHT_ARROW_HOOK+" "+caller, lfx);
/*}}}*/

    t_seektool_clr_TARGET();

    let slot = t_tools.t_get_onWork_EL_slot();
    if( slot > 0)
    {
/*{{{
logBIG(caller+": SEEKER DONE WITH onWork_EL slot #"+slot+" //FIXME .. find out why all this");
log_caller();
}}}*/

        let onWork_EL = t_tools.t_get_onWork_EL();
        let onDown_EL = t_tools.t_get_onDown_EL();

        if((onDown_EL   == onWork_EL) && onWork_EL.parentElement) {
            onDown_EL    =               onWork_EL.parentElement;
            onWork_EL    =               onWork_EL.parentElement;
        }

        onWork_EL.scale  = t_util.t_get_panel_scale(onWork_EL);
    }
};
/*}}}*/

return { t_seektool_set_TARGET
    ,    t_seektool_clr_TARGET
    ,    t_seektool_get_TARGET_label
    ,    t_seektool_get_STICKY
    ,    t_seektool_has_TARGET
    ,    t_seektool_set_STICKY
    ,    t_seektool_set_XY_LABEL_TARGET_TYPE
};
}());
/*------------------------------------------------------------- [seek_TOOL] -*/
/*------------------------------------------------------------- [seek_TOOL] -*/
/*}}}---------------------------------------------------------- [seek_TOOL] -*/



/* LOAD .. STORE */
/* LOAD {{{*/
/*➔ t_seeker_onLoad {{{*/
let t_seeker_onLoad = function()
{
    let id;
    id = "seeker_PD" ;  seeker_PD  = t_tools.t_get_tool(id);
    id = "seeker_CD" ;  seeker_CD  = t_tools.t_get_tool(id);

    id = "seeker_PU" ;  seeker_PU  = t_tools.t_get_tool(id);
    id = "seeker_CU" ;  seeker_CU  = t_tools.t_get_tool(id);

    id = "seekspot_D";  seekspot_D = t_tools.t_get_tool(id);
    id = "seekspot_A";  seekspot_A = t_tools.t_get_tool(id);
    id = "seekspot_U";  seekspot_U = t_tools.t_get_tool(id);

    id = "seekzone"  ;  seekzone   = t_tools.t_get_tool(id);
};
/*}}}*/
/*}}}*/






/* EVENT LISTENER .. ONDOWN .. LAYOUT */
/*{{{*/


/* DOWN {{{*/
/*➔ t_seekzone_clr_onWork_EL_pressed {{{*/
let t_seekzone_clr_onWork_EL_pressed = function()
{
    if(seekzone) t_util.del_el_class(seekzone, t_data.CSS_PRESSED);
};
/*}}}*/
/*➔ t_seeker_get_tool_panel {{{*/
let t_seeker_get_tool_panel = function(el)
{
    let tool_panel;

    if     (t_util.is_el_or_child_of_parent_el(el, seeker_PU)) tool_panel = seeker_PU;
    else if(t_util.is_el_or_child_of_parent_el(el, seeker_PD)) tool_panel = seeker_PD;

    return tool_panel;
};
/*}}}*/
/*}}}*/

/* LAYOUT {{{*/
/*➔ t_seeker_could_be_magnified {{{*/
let t_seeker_could_be_magnified = function(panel)
{
    if(panel == seeker_PD) return  true; /* not a TOOL_panels .. but can be magnified */
    else                   return false;
};
/*}}}*/
/*}}}*/
/*}}}*/

/* EVENT HANDLERS .. DOWN .. MOVE .. LONG_PRESS .. UP .. CLICK */
/*{{{*/
/* DOWN {{{*/
/*➔ t_seeker_onDown_1_INIT_CTRL_DEBOUNCE_INPUT {{{*/
let t_seeker_onDown_1_INIT_CTRL_DEBOUNCE_INPUT = function(onWork_EL, onDown_XY)
{
/*{{{*/
let   caller = "t_seeker_onDown_1_INIT_CTRL_DEBOUNCE_INPUT";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c"+caller, lbF+lb1);
/*}}}*/
    /* ONDOWN TARGET EL {{{*/
    seek_TOOL.t_seektool_set_TARGET(onWork_EL);

    /*}}}*/
    /* ONDOWN TOUCHES {{{*/
    if( t_prop.get(t_data.PIN_SEEKSPOT) )
    {
        seekzone_set_pressed();

        seekspot1_show_onDown_XY  (onDown_XY.x , onDown_XY.y);
        t_seekzone1_show_onDown_XY(onDown_XY.x , onDown_XY.y);
    }
    /*}}}*/
};
/*}}}*/
/*…   seekzone_set_pressed {{{*/
let   seekzone_set_pressed = function()
{
    if(seekzone) t_util.add_el_class(seekzone, t_data.CSS_PRESSED);
};
/*}}}*/
/*}}}*/
/* MOVE {{{*/
/*➔ t_seeker_onMove1_grab .. (FIRST MOVE SEEKS NEXT TARGET .. or not) {{{*/
/*{{{*/
let   seeker_GRAB_STATE;

/*}}}*/
let t_seeker_onMove1_grab    = function(grab_state)
{
/*{{{*/
let   caller = "t_seeker_onMove1_grab";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller+"("+grab_state+")");
/*}}}*/
    seeker_GRAB_STATE = grab_state;

if( log_this) {
    let label = seek_TOOL.t_seektool_get_TARGET_label();
    if(seeker_GRAB_STATE) log(label+" %c GRABBED BY "+seeker_GRAB_STATE, lb5);
    else                  log(label+" %c GRABBED false"                , lb9);
}
};
let t_seeker_onMove1_grabbed = function()
{
/*{{{*/
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

if( log_this) {
    let label = seek_TOOL.t_seektool_get_TARGET_label();
    if(seeker_GRAB_STATE) log(label+" %c GRABBED STATE=["+seeker_GRAB_STATE+"]", lbb+lb5);
    else                  log(label+" %c GRABBED false"                        , lbb+lb9);
}
/*}}}*/
    return seeker_GRAB_STATE;
};
/*}}}*/
/*➔ t_seeker_onMove2_DXY {{{*/
let t_seeker_onMove2_DXY = function(onMoveDXY)
{
/*{{{*/
let   caller = "t_seeker_onMove2_DXY";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

if( log_this) t_tools.t_log_event_status(caller, lf8);
/*}}}*/
    /* STICKY {{{*/

    /*}}}*/
    /* SELECTION [slot] [num] {{{*/
/*{{{
   if( !seeker_CU                       ) return;

    let              num = t_tools.t_get_EL_num ( onWork_SEEK_TARGET );
    let             slot = onWork_SEEK_TARGET.last_slot;
    let              num = onWork_SEEK_TARGET.last_num;
    let             slot = seeker_PU.slot;
    let              num = seeker_PU.num;
}}}*/
    let slot =  t_tools.t_get_onWork_EL_slot();
    let  num =  t_tools.t_get_onWork_EL_num();
if(log_this) log("%c"+caller+": slot=["+slot+"] num=["+ num+"]", lbH+lfX[((slot > 0) && (num  > 0)) ? 5:2]);

    if((slot <= 0) || (num  <= 0)) return;
    /*}}}*/
    /* MOVE TO [slot] [num] {{{*/
    let  dir = (Math.abs(onMoveDXY.x) > Math.abs(onMoveDXY.y)) ? ((onMoveDXY.x > 0) ? t_tools.DIR_NUM_NEXT  : t_tools.DIR_NUM_PREV )
        :                                                        ((onMoveDXY.y > 0) ? t_tools.DIR_SLOT_NEXT : t_tools.DIR_SLOT_PREV);
if( log_this)
    log_key_val_group(caller+"("+onMoveDXY.x+" "+onMoveDXY.y+")"
                      ,{ slot
                       , num
                       , dir
                      }, lf2, false);

    t_seeker_onMove2_SLOT_NUM_DIR(slot, num, dir);
    /*}}}*/
};
/*}}}*/
/*➔ t_seeker_onMove2_SLOT_NUM_DIR {{{*/
let t_seeker_onMove2_SLOT_NUM_DIR = function(slot, num, dir)
{
/*{{{*/
let   caller = "t_seeker_onMove2_SLOT_NUM_DIR";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

if( log_this) caller += "(slot=["+slot+"] , num=["+num+"] , dir=["+dir+"])";
/*}}}*/
    let slot_nodes_length = t_select.t_select_get_slot_nodes_length(slot);
    if( slot_nodes_length < 1) return;
    /* SEEKER DISPLAY SLOT [NUM AND NUM MAX] {{{*/
    seeker_CU.innerHTML        = num +"<sup>/"+ slot_nodes_length+"</sup>";

    /*}}}*/
    /* SEEKER CSS DIR .. f(Up Right Down Left) {{{*/

    seeker3_PU_sync_look_dir( dir );
    /*}}}*/
    /* SEEKER CSS COLOR .. f(slot prev next) {{{*/
    /* LOOK AHEAD COLOR
     * 1/2 ON-SLOT   UP-DOWN  .. NUM  +/-
     * 2/2 TO-SLOT LEFT-RIGHT .. SLOT +/-
     */

    for(let i = 1; i <= t_select.SELECT_SLOT_MAX; ++i)
        t_tools.t_set_id_class_on_off(seeker_PU.id, "slot_color"+i, false);

    let slot_color = slot;
    if((dir == t_tools.DIR_SLOT_PREV) || (dir == t_tools.DIR_SLOT_NEXT))
    {
        let pre_or_next_slot
            = (dir == t_tools.DIR_SLOT_PREV)
            ?  t_slot.get_prev_populated_slot( slot )
            :  t_slot.get_next_populated_slot( slot );
if( log_this) log(caller+": ...pre_or_next_slot %c"+ pre_or_next_slot, lbb+lbH+((dir == t_tools.DIR_SLOT_PREV) ? lf5 : lf4));

        if(pre_or_next_slot)
            slot_color = pre_or_next_slot;
    }
    t_tools.t_set_id_class_on_off(seeker_PU.id, "slot_color"+slot_color, true);
    t_util.set_el_class_on_off(seeker_PU,  t_data.SHOW_SEEKZONE , t_prop.get( t_data.SHOW_SEEKZONE ));
    /*}}}*/
};
/*}}}*/
/*➔ t_seeker_onMove3_ON_SLOT_NUM {{{ */
/*{{{*/
let seeker_thumbs;
let last_seeked_slot_num = { slot:-1 , num:-1 };

/*}}}*/
let t_seeker_onMove3_ON_SLOT_NUM = function(slot, num) /* eslint-disable-line complexity */
{
/* {{{*/
let   caller = "t_seeker_onMove3_ON_SLOT_NUM";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

if( log_this) {
    log("%c"+caller+"%c slot "+slot+"%c num "+num
        ,lbL+lf5    ,lbC+lfX[slot]  ,lbR+lfX[num]);

    log_caller();
}
if( !seeker_PU || !seeker_PD || !seeker_CD || !seeker_CU) return;
/*}}}*/
    /* [visible] {{{*/
    let visible = t_select.t_is_slot_num_visible(slot, num);

if( log_this) log("%c...visible=["+visible+"]", lfX[visible ? 5:3]);
    /*}}}*/
    /* CLEAR WINDOW SELECTION {{{*/
    t_tools.t_window_getSelection_removeAllRanges(caller);

    /*}}}*/
    /* [seeker_CU] content {{{*/
    let slot_nodes_length = t_select.t_select_get_slot_nodes_length( slot );
    let num_visible_count = t_select.t_get_slot_num_visible_count  ( slot );

    if(!num_visible_count || (num_visible_count == slot_nodes_length))
    {
        seeker_CU.innerHTML
            = num
            +"<sup>/"+ slot_nodes_length +"</sup>";
    }
    else {
        let visible_num = t_select.t_get_slot_num_visible_num(slot,num);

        if(visible)
            seeker_CU.innerHTML
                =  visible_num         +"<sup>/"+   num_visible_count +"</sup>"
                +                       "<sub>..."+ slot_nodes_length +"</sub>";
        else
            seeker_CU.innerHTML
                =                       "<sup>"+    num               +"</sup>"
                +                       "<sup> / "+ slot_nodes_length +"</sup>";
    }
    /*}}}*/
    /* [seeker_CU] style {{{*/
    last_seeked_slot_num = { slot , num };
    t_util.set_el_class(seeker_CU
                 ,   "cc"+(      slot % t_select.SELECT_SLOT_MAX) /* 1 2 3 4 5 6 7 8 9  0 */
                 + " num"+(1+(num+11) % 12             ) /* 1 2 3 4 5 6 7 8 9 10 11 12 */
                );

    /*}}}*/
    /* [seeker_CD] content {{{*/
    /* ARROW */
    if(!seeker_thumbs)
    {
        seeker_CD.innerHTML = ""
        /*{{{
            + "<span class='seeker_handle    top'>A-Z+"+t_data.SYMBOL_UP+"</span>"
            }}}*/
            + "<span class='seeker_handle  left' ></span>"
            + "<div     id='seeker_thumbs'       ></div>"
            + "<span class='seeker_handle  right'></span>"
        /*{{{
            + "<span class='seeker_handle bottom'>"+t_data.SYMBOL_UP_ARROW+"</span>"
            }}}*/
        ;
        seeker_thumbs = t_tools.t_get_tool("seeker_thumbs");
    }

    /* THUMBS */
    if(seeker_thumbs)
    {
        let                        slot_first_id = "thumb_s_"+slot+"_1";
        let seeker_thumbs_includes_slot_first_id = seeker_thumbs.innerHTML.includes( slot_first_id );
if( log_this) log("...seeker_thumbs_includes_slot_first_id=["+seeker_thumbs_includes_slot_first_id+"]");
        if(!seeker_thumbs_includes_slot_first_id)
            seeker_thumbs.innerHTML = t_tools.t_pattern2_get_sel_bag_thumbs_EM(slot,"thumb_s");
    }
    /*}}}*/
    /* [!visible] .. SEEKER JERK ON invisible node {{{*/
    if( !visible ) {
        t_util.add_el_class(seeker_PU, t_data.CSS_ON_HIDDEN_NODE);
        t_util.add_el_class(seeker_PD, t_data.CSS_ON_HIDDEN_NODE);
    }
    /*}}}*/
    /* [ visible] .. SEEKER MOVE TO visible node {{{*/
    else {
        let node = t_select.t_select_get_slot_num_node(slot, num);
        if( node ) {
            if(typeof dom_details != "undefined")
            {
                if( dom_details.details_has_closed_el_parent ( node )) /* eslint-disable-line no-undef */
                    dom_details.details_open_closed_el_parent( node ); /* eslint-disable-line no-undef */
            }

            /* move async to support DETAILS radio open-close behavior */
            setTimeout(function() { t_seeker_onMove3_ON_SLOT_NUM_handler(node); }, 0);
        }
    }
    /*}}}*/
    /* remember last selected {{{*/
    t_select.t_set_last_selected_slot_num(slot, num);

    /*}}}*/
    /* [t_tools.t_seek_set_container_selected] {{{*/
    let container = t_select.get_slot_num_container(slot, num);

    t_tools.t_seek_set_container_selected(container, caller);
    /*}}}*/
    if( log_this)
        log_key_val_group(caller+"("+slot+" , "+num+")"
                          , {   slot
                              , num
                              , visible
                              , slot_nodes_length
                              , num_visible_count
                          }, lf3, false);

    t_seeker_sync_SEL_BACK(caller);
};
/*}}}*/
/*_ t_seeker_onMove3_ON_SLOT_NUM_handler {{{*/
let t_seeker_onMove3_ON_SLOT_NUM_handler = function(node)
{
/* {{{*/
let   caller = "t_seeker_onMove3_ON_SLOT_NUM_handler";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;
let tag_this = DOM_SEEK_TAG || log_this;

/*}}}*/

    delete node.scrolledIntoViewHandled;
    t_tools.t_scrollIntoViewIfNeeded(node,0);

    /* TRANSFORM SAFE */
    let bcr = node.getBoundingClientRect();
    let   x = bcr.x + window.scrollX;
    let   y = bcr.y + window.scrollY;
/*{{{*/
if( tag_this)
    log_key_val_group(  caller+" "+x.toFixed(0)+"@"+y.toFixed(0)+""
                        ,{ node
                            ,  bcr
                            ,  window_scrollX : window.scrollX
                            ,  window_scrollY : window.scrollY
                            ,  x
                            ,  y
                        }, lf7, true);
/*}}}*/
    if((x > 0) || (y > 0))
    {
        let node_W = node.offsetWidth;
        let node_H = node.offsetHeight;

        let node_L = x;
        let node_C = node_L + node_W/2;
        let node_T = y;
        let node_B = node_T + node_H;

        /* show at least one seeker */
        if(!t_seeker_PU_is_active() && seeker_onClick_PD_is_hiding())
            t_seeker_PU_show();

        /* [seeker_PU] ABOVE */
        let no_room_above = (node_T < 1.5 * seeker_PU.offsetHeight);
        if( no_room_above )     seeker_move_below_XY(seeker_PU, { x:node_C , y:node_B }, node);
        else                    seeker_move_above_XY(seeker_PU, { x:node_C , y:node_T }, node);

        /* [seeker_PD] BELOW */
        if(!seeker_onClick_PD_is_hiding()) {
            if( no_room_above ) seeker_move_below_XY(seeker_PD, { x:node_C , y:node_B+seeker_PU.offsetHeight}, node);
            else                seeker_move_below_XY(seeker_PD, { x:node_C , y:node_B                       }, node);
        }

        t_util.del_el_class(seeker_PU, t_data.CSS_ON_HIDDEN_NODE);
        t_util.del_el_class(seeker_PD, t_data.CSS_ON_HIDDEN_NODE);

    }
};
/*}}}*/
/*➔ t_seeker_onMove2_ON_NEXT_STICKY {{{*/
let t_seeker_onMove2_ON_NEXT_STICKY = function(sticky, onDown_SCROLL_XY)
{
/*{{{*/
let   caller = "t_seeker_onMove2_ON_NEXT_STICKY";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c"+caller+"("+t_util.get_n_lbl(sticky)+")", lbH+lf1);
/*}}}*/
    let     to   = t_util.get_el_transformOrigin( sticky );
    let x = to.x + sticky.offsetLeft - onDown_SCROLL_XY.x;
    let y = to.y + sticky.offsetTop  - onDown_SCROLL_XY.y;

    x +=  t_util.has_el_class(sticky, t_sticky.CSS_POINT_EE) ?  20
        : t_util.has_el_class(sticky, t_sticky.CSS_POINT_SE) ?  10
        : t_util.has_el_class(sticky, t_sticky.CSS_POINT_SW) ? -10
        : t_util.has_el_class(sticky, t_sticky.CSS_POINT_WW) ? -20
        : t_util.has_el_class(sticky, t_sticky.CSS_POINT_NW) ? -10
        : t_util.has_el_class(sticky, t_sticky.CSS_POINT_NE) ?  10
        :                                        0;

    y +=  t_util.has_el_class(sticky, t_sticky.CSS_POINT_SE) ?  10
        : t_util.has_el_class(sticky, t_sticky.CSS_POINT_SW) ?  10
        : t_util.has_el_class(sticky, t_sticky.CSS_POINT_NW) ? -10
        : t_util.has_el_class(sticky, t_sticky.CSS_POINT_NE) ? -10
        :                                        0;

    /* [seeker_CU] content {{{*/
    let sticky_num = t_sticky.t_sticky_GET_NUM(sticky);

    seeker_CU.innerHTML
        = (t_prop.get(t_data.TOOLS_TIER2) ? "<sup>"+t_data.SYMBOL_LEFT_CHEVRON+"</sup>" : "")
        + sticky_num
    ;
    /*}}}*/
    /* [seeker_CU] style {{{*/
    t_util.set_el_class(seeker_CU, "cc"+(sticky_num % 10));

    /*}}}*/
    /* center seekerPU at sticky_hand tip */
/*{{{
    y += STICKY_TOOL_HALF_HEIGHT + seeker_PU.offsetHeight / 6;
}}}*/
    let no_room_above = (y < 1.5 * seeker_PU.offsetHeight);
    if( no_room_above ) seeker_move_below_XY(seeker_PU, { x:x+onDown_SCROLL_XY.x , y:y+onDown_SCROLL_XY.y }, sticky);
    else                seeker_move_above_XY(seeker_PU, { x:x+onDown_SCROLL_XY.x , y:y+onDown_SCROLL_XY.y }, sticky);

    seek_TOOL.t_seektool_set_STICKY( sticky );

};
/*}}}*/

/*➔ t_seeker_get_last_seeked_slot_num {{{*/
let t_seeker_get_last_seeked_slot_num = function()
{
    return last_seeked_slot_num;
};
/*}}}*/
/*…   seeker_move_above_XY {{{*/
/*{{{*/
/*{{{
let SEEKER_MOVE_ABOVE_XY_DELAY = 2000;
}}}*/

let seeker_move_above_XY_timer;
/*}}}*/
let   seeker_move_above_XY = function(tool, xy/*, node*/)
{
/* {{{*/
let   caller = "seeker_move_above_XY";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

/*}}}*/
    t_seeker_PU_show();

    let x = xy.x;
    let y = xy.y;

    let   body_zoom_percent = t_tools.t_get_body_zoom_percent();
    x *= (body_zoom_percent  / 100);
    y *= (body_zoom_percent  / 100);
if( log_this) log(caller+"("+t_util.get_n_lbl(tool)+", "+x+" "+y+"): body_zoom_percent=["+body_zoom_percent+"]");

    let      tool_W = tool.offsetWidth ;
    let      tool_H = tool.offsetHeight;
    x               = Math.max((x-tool_W/2), tool_W/2);
    y               = Math.max((y-tool_H  ), tool_W/2);
    tool.style.left = x+"px";
    tool.style.top  = y+"px";

    t_util.del_el_class(tool, "seek_bellow");
    t_util.add_el_class(tool, "seek_above" );

/*{{{
    delete node.scrolledIntoViewHandled;
    t_tools.t_scrollIntoViewIfNeeded(node,0);
}}}*/

    /* COPE WITH NEW NODE POSITION WHEN SCROLLED {{{*/
/*{{{
    if( seeker_move_above_XY_timer ) clearTimeout( seeker_move_above_XY_timer );
    seeker_move_above_XY_timer     =   setTimeout( function() { t_tools.t_scrollIntoViewIfNeeded(node,0); }, SEEKER_MOVE_ABOVE_XY_DELAY);
}}}*/
    /*}}}*/
};
/*}}}*/
/*_ t_seeker_move_above_XY_cancel {{{*/
let t_seeker_move_above_XY_cancel = function(_caller)
{
/* {{{*/
let   caller = "t_seeker_move_above_XY_cancel";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

/*}}}*/
    if( seeker_move_above_XY_timer )
    {
if( log_this) log(caller+": PENDING RECENTER INTERRUPTED BY "+ _caller);

        clearTimeout(seeker_move_above_XY_timer);
        seeker_move_above_XY_timer = null;
    }

};
/*}}}*/
/*…   seeker_move_below_XY {{{*/
let   seeker_move_below_XY = function(tool, xy/*, node*/)
{
/* {{{*/
let   caller = "seeker_move_below_XY";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

/*}}}*/
    t_seeker_PU_show();

    let x = xy.x;
    let y = xy.y;

    let   body_zoom_percent = t_tools.t_get_body_zoom_percent();
    x *= (body_zoom_percent  / 100);
    y *= (body_zoom_percent  / 100);
if( log_this) log(caller+"("+t_util.get_n_lbl(tool)+", "+x+" "+y+"): body_zoom_percent=["+body_zoom_percent+"]");

    let      tool_W = tool.offsetWidth ;
    tool.style.left = (x-tool_W/2)+"px";
    tool.style.top  = (y         )+"px";

    t_util.del_el_class(tool, "seek_above" );
    t_util.add_el_class(tool, "seek_bellow");

/*{{{
    delete node.scrolledIntoViewHandled;
    t_tools.t_scrollIntoViewIfNeeded(node,0);
}}}*/
};
/*}}}*/
/*…   seeker3_PU_clear {{{*/
let   seeker3_PU_clear = function()
{
    if(!seeker_PU) return;

    seeker_PU.style.marginLeft = 0;
    seeker_PU.style.marginTop  = 0;

    seeker3_PU_sync_look_dir(null);
};
/*}}}*/
/*…   seeker3_PU_sync_look_dir {{{*/
let   seeker3_PU_sync_look_dir = function( dir )
{
    /* URDL */
    t_tools.t_set_id_class_on_off(seeker_PU.id, t_data.CSS_SEEKER_PU2_LOOK_UP   , (dir == t_tools.DIR_SLOT_PREV));
    t_tools.t_set_id_class_on_off(seeker_PU.id, t_data.CSS_SEEKER_PU3_LOOK_RIGHT, (dir == t_tools.DIR_NUM_NEXT ));
    t_tools.t_set_id_class_on_off(seeker_PU.id, t_data.CSS_SEEKER_PU4_LOOK_DOWN , (dir == t_tools.DIR_SLOT_NEXT));
    t_tools.t_set_id_class_on_off(seeker_PU.id, t_data.CSS_SEEKER_PU5_LOOK_LEFT , (dir == t_tools.DIR_NUM_PREV ));
};
/*}}}*/

/*}}}*/
/*_LONG_PRESS {{{*/
/*}}}*/
/* UP {{{*/
/*➔ t_seeker_onUp8_ON_MOUSEUP_DONE {{{*/
let t_seeker_onUp8_ON_MOUSEUP_DONE = function(e) /* eslint-disable-line no-unused-vars */
{
/*{{{*/
let   caller = "t_seeker_onUp8_ON_MOUSEUP_DONE";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

    if(!seeker_PU ) return;
/*}}}*/
    /* EVENT .. (LONG_PRESS CLICK MOVED PANEL) {{{*/
    let     long_press_armed = t_util.has_el_class(seeker_CU, t_tools.LONG_PRESS_ARM);
    let       seekspot_trace = t_prop.get( t_data.PIN_SEEKSPOT );
    let       was_a_misclick = t_tools.t_was_a_misclick();
    let          was_a_click = t_tools.t_was_a_click() && !was_a_misclick;
    let            has_moved = t_tools.t_get_has_moved();
    let         onWork_PANEL = t_tools.t_get_onWork_PANEL();
    let         on_dimm_mask = !!(onWork_PANEL && (onWork_PANEL == t_tools.t_get_dimm_mask()));
    let  seeker_PD_is_hiding = seeker_onClick_PD_is_hiding();
    let is_a_hide_click
        =   was_a_click
        && !was_a_misclick
        && !has_moved
        && !on_dimm_mask
        && seeker_PD_is_hiding
    ;

    /*}}}*/
/*{{{*/
if( log_this) {
    let lfx = lfX[is_a_hide_click ? 7:8];

    t_tools.t_log_event_status(caller, lbH+lfx);

    let details
        = (is_a_hide_click ? "HIDE ON CLICK" : "HIDE ON UP")
        + (        has_moved ? " .. has_moved" : ""        )
    ;

    log_key_val_group(details
                      , { seekspot_trace
                         , long_press_armed
                         , was_a_click
                         , was_a_misclick
                         , has_moved
                         , is_a_hide_click : (is_a_hide_click + t_log.L_ARR+      "has_moved.."+(has_moved ? has_moved:"[]")
                                              +                 t_log.L_ARR+    "was_a_click.."+           was_a_click
                                              +                 t_log.L_ARR+ "was_a_misclick.."+           was_a_misclick      )
                         , on_dimm_mask    : (on_dimm_mask    + t_log.L_ARR+   "onWork_PANEL.."+ t_util.get_n_lbl(onWork_PANEL))
                         , seeker_PD_is_hiding
                      }
                     , lfx, true);
}
/*}}}*/
    /*  SEEKSPOT TRACE .. (HIDE OR SHOW MISCLICK) .. [seekzone] {{{*/
    if( seekspot_trace )
    {
        if( was_a_misclick ) t_seeker_show("onUP .. [was_a_misclick]");
        else                 t_seekzone5_hide();
    }
    /*}}}*/
    /* SHOW-HIDE TIMERS RESET .. (t_tools.LONG_PRESS_ARM) .. [seeker_CU] {{{*/
    if( long_press_armed )
    {
if( log_this) logBIG("REVIVE SEEKER .. f(t_tools.LONG_PRESS_ARM)");

        t_util.del_el_class(seeker_CU, t_tools.LONG_PRESS_ARM);

        t_seeker_PU_show(); /* reset show-hide timers */
    }
    t_util.del_el_class(seeker_CU, t_tools.LONG_PRESS_ARM);

    seeker3_PU_clear();
    /*}}}*/
    /* SEEKER COLOR .. (COLOR AND SCALE) .. [seeker_PU] {{{*/
    for(let i = 1; i <= t_select.SELECT_SLOT_MAX; ++i)
        t_tools.t_set_id_class_on_off(seeker_PU.id, "slot_color"+i, false);

    t_util.set_el_class_on_off(seeker_PU,  t_data.SHOW_SEEKZONE , false);
    /*}}}*/
    /* HIDE SEEKER .. (INSTANT OR DELAYED) .. [seeker_PU] {{{*/
    if( is_a_hide_click ) t_seeker_PU_hide("instant");
    else                  t_seeker_PU_hide(); /* time to move on top of its target */

    /*}}}*/
};
/*}}}*/
/*}}}*/
/* CLICK {{{*/
/*➔ t_seeker_onClick {{{*/
let t_seeker_onClick = function() /* eslint-disable-line complexity */
{
/*{{{*/
let   caller = "t_seeker_onClick";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

    let onDown_EL = t_tools.t_get_onDown_EL();
    let bag_id = t_seeker_get_node_bag_id(onDown_EL);

if( log_this) t_tools.t_log_event_status(caller, lbH+lf5);
if( log_this) log("%c "+caller+": %c onDown_EL ["+t_util.get_n_lbl(onDown_EL)+"] %c bag_id ["+bag_id+"]"
                  ,lb5           ,lb2                                    ,lb3                    );
/*}}}*/
    let result = "";
    switch(bag_id) {
        case "seeker_PU": /* .. [sticky] {{{*/
        {
            /* SEEKER ANIMATION {{{*/
            if((onDown_EL == seeker_CU) && seeker_onClick_PD_is_hiding())
            {
                t_tools.seek_pat_bag();

                result = "SEEKER ANIMATION";
            }
            /*}}}*/
            /* SHOW seeker_PD {{{*/
/*{{{
            else if(!t_seeker_is_onSticky())
            {
if(log_this) t_log.log_TR_EVENT_add("_<em class='cc5'>SHOW seeker_PD</em> "+onSeekXYLT.label);

                seeker_onClick_PD_show();
                t_tools.t_toggle_panel_magnified(seeker_PD, false);
                seeker_onClick_move_on_last_highlight_slot_num();

                result = "SHOW seeker_PD";
            }
}}}*/
            /*}}}*/
            /* HIDE seeker_PU {{{*/
            else if( t_seeker_PU_is_active() )
            {
if(log_this) t_log.log_TR_EVENT_add("_<em class='cc8'>HIDE seeker_PU</em> "+onSeekXYLT.label);

                t_seeker_PU_hide("instant");

                result = "HIDE seeker_PU";
            }
            /*}}}*/
        }
        break;
        /*}}}*/
        case "seeker_PD": /*{{{*/
        {
            /* 1. TOGGLE t_data.SEL_BACK {{{*/
            let e_target_is_seeker_handle_left_or_right
                =  onDown_EL.classList.contains( t_data.CSS_SEEKER_HANDLE)
                && (   t_util.has_el_class(onDown_EL  , t_data.CSS_LEFT         )
                    || t_util.has_el_class(onDown_EL  , t_data.CSS_RIGHT        ));

            if( e_target_is_seeker_handle_left_or_right )
            {
if(log_this) t_log.log_TR_EVENT_add(".switch <em class='cc1'>TOGGLE "+t_data.SEL_BACK+"</em>");

                t_prop.toggle( t_data.SEL_BACK );
if(log_this) t_log.log_TR_SELECT_add("_<em class='cc3'>SELECT <em class='cc9'>"+(t_prop.get( t_data.SEL_BACK ) ? "BACKWARD" : "FORWARD")+"</em></em>");

                t_seeker_sync_SEL_BACK(caller);

                result = "TOGGLE t_data.SEL_BACK";
            }
            /*}}}*/
            /* 2. SCROLL TO [onDown_EL.id]{{{*/
            else if(onDown_EL.id.startsWith("thumb_s_"))
            {
if(log_this) t_log.log_TR_EVENT_add(".switch <em class='cc1'>SCROLL TO "+onDown_EL.id+"</em>");

                t_tools.t_onclick_target_handle_scroll_to_slot_num(onDown_EL, caller);

                result = "SCROLL TO ["+onDown_EL.id+"]";
            }
            /*}}}*/
            /* 3. MAGNIFY [seeker_PD] {{{*/
            else if( !t_tools.t_is_panel_magnified(seeker_PD) )
            {
if(log_this) t_log.log_TR_EVENT_add(".switch <em class='cc1'>MAGNIFY seeker_PD</em>");

                t_tools.t_toggle_panel_magnified(seeker_PD, "toggle");

                result = "MAGNIFY [seeker_PD]";
            }
            /*}}}*/
            /* 4. HIDE [seeker_PD] {{{*/
            else {
if(log_this) t_log.log_TR_EVENT_add("_<em class='cc8'>HIDE seeker_PD</em>");

                seeker_onClick_PD_hide();

                result = "HIDE [seeker_PD]";
            }
            /*}}}*/
        }
        break;
        /*}}}*/
    }
    return result;
};
/*}}}*/
/*…   seeker_onClick_move_on_last_highlight_slot_num {{{*/
let   seeker_onClick_move_on_last_highlight_slot_num = function() /* eslint-disable-line no-unused-vars */
{
let   caller = "seeker_onClick_move_on_last_highlight_slot_num()";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller);

    let last_selected_slot  = t_select.get_last_selected_slot();
    if( last_selected_slot >= 0)
        t_seeker_onMove3_ON_SLOT_NUM(last_selected_slot, t_select.get_last_highlighted_num());
};
/*}}}*/
/*…   seeker_onClick_PD_show {{{*/
let   seeker_onClick_PD_show = function() /* eslint-disable-line no-unused-vars */
{
let caller = "seeker_onClick_PD_show";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller);

    if( !seeker_PD ) return;

    if(seeker_onClick_PD_hide_timer) {
        clearTimeout( seeker_onClick_PD_hide_timer );
        /*.........*/ seeker_onClick_PD_hide_timer = null;
    }

    t_seeker_sync_SEL_BACK(caller);

    t_util.del_el_class(seeker_PD, t_tools.CSS_FADING);
    t_util.del_el_class(seeker_PD, t_data.CSS_HIDING);

    seeker_PD.style.display = "block";
};
/*}}}*/
/*…   seeker_onClick_PD_hide {{{*/
const SEEKER_ONCLICK_PD_HIDE_DELAY = 500;

let   seeker_onClick_PD_hide_timer;
let   seeker_onClick_PD_hide = function()
{
    if( !seeker_PD ) return;

    if(seeker_onClick_PD_hide_timer) clearTimeout( seeker_onClick_PD_hide_timer  );
    seeker_onClick_PD_hide_timer   =   setTimeout( seeker_onClick_PD_hide_handler, SEEKER_ONCLICK_PD_HIDE_DELAY);
};
/*}}}*/
/*…   seeker_onClick_PD_hide_handler {{{*/
let   seeker_onClick_PD_hide_handler = function()
{
    if( !seeker_PD ) return;

    seeker_onClick_PD_hide_timer = null;

    t_util.del_el_class(seeker_PD, t_tools.CSS_FADING);
    t_util.add_el_class(seeker_PD, t_data.CSS_HIDING);

    seeker_PD.style.display = "none";

};
/*}}}*/
/*…   seeker_onClick_PD_is_hiding {{{*/
let   seeker_onClick_PD_is_hiding = function()
{
    return !seeker_PD
        ||  seeker_PD.classList.contains(t_data.CSS_HIDING)
        ||  seeker_PD.style.display   != "block"
    ;
};
/*}}}*/
/*}}}*/
/*_CHANGE {{{*/
/*}}}*/
/*_LAYOUT {{{*/
/*}}}*/
/*_SCROLL {{{*/
/*}}}*/
/*}}}*/

/* SHOW HIDE ANCHOR GUTTER CONTAINER .. [seekspot] [seekzone] */
/*{{{*/
/*{{{*/
const HIDE_SEEKZONE_DELAY = 1000;
const SHOW_SEEKZONE_DELAY = 500;

const SEEKSPOT_H_MIN      = 32;
const SEEKSPOT_SPACING    =  2;
const SEEKSPOT_W_MIN      = 32;
/*}}}*/

/*➔ t_seeker_show {{{*/
/*{{{*/
let t_seeker_show_msg      = [];
let t_seeker_show_msg_last = "";
let t_seeker_show_msg_num  = 0;
let t_seeker_show_timer    = 0;
/*}}}*/
let t_seeker_show = function(msg="")
{
/*{{{*/
let caller = "t_seeker_show";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

/*}}}*/
    /* QUEUE t_data.SHOW_SEEKZONE MSG {{{*/
    if( t_prop.get( t_data.SHOW_SEEKZONE ) )
    {
        if(t_prop.get( t_data.LOG_SEEKSPOT ) && msg && (t_seeker_show_msg_last != msg))
        {
if( log_this) log("%c"+caller+"("+msg+")", lbH+lf1);

            t_seeker_show_msg.push(    msg );
            t_seeker_show_msg_last  =  msg;
        }
        if(!t_seeker_show_timer && t_seeker_show_msg.length)
            t_seeker_show_timer = setTimeout(seek_show_handler, SHOW_SEEKZONE_DELAY);
    }
    /*}}}*/
    /* OR CLEANUP MSG HISTORY {{{*/
    else {
        /* HISTORY CLEANUP {{{*/
        if(t_seeker_show_msg.length)
        {
if( log_this) log("%c"+caller+"("+msg+"): t_data.LOG_SEEKSPOT OFF .. HISTORY CLEANUP", lbH+lf1);
            t_seeker_show_msg     = [];
            t_seeker_show_msg_num = 0;
        }
        /*}}}*/
        /* SEEKERS CLEANUP {{{*/
        if(seekspot_U.innerHTML || seekspot_D.innerHTML)
        {
            seekspot_U.innerHTML     = "";
            seekspot_D.innerHTML     = "";
        }
        /*}}}*/
    }
    /*}}}*/
};
/*}}}*/
/*_   seek_show_handler {{{*/
let   seekspot_U_or_D;
let   seek_show_handler = function() /* eslint-disable-line complexity */
{
/*{{{*/
let   caller = "seek_show_handler";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

if( log_this) t_tools.t_log_event_status(caller, lf8);
if( log_this) log("%c"+t_data.SYMBOL_BULB+"%c "+caller+"%c container_selected %c "+ t_util.get_id_or_tag(container_selected)+"%c onSeekXYLT %c "+onSeekXYLT.x+" "+onSeekXYLT.y
                  ,lb2             ,lbL         ,lbL                  ,lbR+lf4                                 ,lbL         ,lbR+lf4                         );

    t_seeker_show_timer = null;
/*}}}*/
    if(!t_prop.get( t_data.SHOW_SEEKZONE ) ) {
if( log_this) logBIG("aborted by t_prop.get(t_data.SHOW_SEEKZONE)");
        return;
    }
    /* cancel pending hide {{{*/
    seekzone5_hide_cancel();

    /*}}}*/
    /* clear previous seek visual feedback {{{*/
/*{{{
    if(container_selected ) t_seekzone8_clear_click_feedback();
    if(onWork_EL == sticky) t_seekzone8_clear_click_feedback();
}}}*/

    /*}}}*/
    /* DISPLAY TOOLS .. [seekzone] [seekspot_U] [seekspot_D] [seekspot_A] {{{*/

    seekzone.style.borderWidth      = SEEKSPOT_SPACING;

    seekzone.style  .display        = "block";
    seekspot_U.style.display        = "table-cell";
    seekspot_D.style.display        = "table-cell";

    /*}}}*/
    /* AREA .. f(container_selected PAGE-GEOMETRY) {{{*/
    let onDown_XY = t_tools.t_get_onDown_XY();
    let seek_X    = container_selected ? container_selected.x            : onDown_XY.x;

    let seek_H    = container_selected ? container_selected.scrollHeight : SEEKSPOT_H_MIN;
    let seek_W    = container_selected ? container_selected.scrollWidth  : SEEKSPOT_W_MIN;

    if(container_selected)
        seekzone.style.borderRadius = parseInt(window.getComputedStyle(container_selected).borderRadius) +"px";

    let page_H    = document.body.parentElement.clientHeight;

    let above_H   = Math.max(SEEKSPOT_SPACING, onSeekXYLT.y);
    let inset_H   = Math.max(SEEKSPOT_SPACING, seek_H);
    let inset_W   = Math.max(SEEKSPOT_SPACING, seek_W);

    above_H       = Math.min(page_H - inset_H, above_H);

    let below_H   = Math.max(SEEKSPOT_SPACING, page_H - (above_H + inset_H));

    /*}}}*/
    /* POSITION: [seekspot_U seekspot_A seekzone seekspot_D] {{{*/

    seekspot_U.style.height         = (above_H     - SEEKSPOT_SPACING   ) +"px";

    if( t_prop.get( t_data.PIN_SEEKSPOT ) )
    {
        seekspot_A.style.display    = "block";
        seekspot_A.style.top            = (above_H                          ) +"px";
        seekspot_A.style.marginLeft     = (seek_X      - SEEKSPOT_SPACING   ) +"px";
    }

    if(container_selected)
    {
        seekzone.style.left         = (seek_X                           ) +"px";
        seekzone.style.top          = (above_H                          ) +"px";
        seekzone.style.width        = (        inset_W                  ) +"px";
        seekzone.style.height       = (        inset_H                  ) +"px";

        t_util.add_el_class(seekzone, t_data.CSS_ON_CONTAINER);
    }
    else {
        seekzone.style.left         = (onDown_XY.x                      ) +"px";
        seekzone.style.top          = (onDown_XY.y                      ) +"px";
        seekzone.style.width        = (              seek_W             ) +"px";
        seekzone.style.height       = (              seek_H             ) +"px";

        t_util.del_el_class(seekzone, t_data.CSS_ON_CONTAINER);
    }

    seekspot_D.style.height         = (                below_H - SEEKSPOT_SPACING   ) +"px";
    /*}}}*/
    /* SHOW [seekspot_U_or_D LOG] .. (above or below) {{{*/
    if( t_prop.get( t_data.LOG_SEEKSPOT ) )
    {
        let msg = t_seeker_show_msg.shift();
        if( msg )
        {
            seekspot_U_or_D
                = (seekspot_U_or_D   ==   seekspot_U)
                ? (above_H < (page_H/4)) ? seekspot_D : seekspot_U
                : (below_H < (page_H/4)) ? seekspot_U : seekspot_D
            ;

            let empty_caption = (seekspot_U_or_D == seekspot_D) ? seekspot_U : seekspot_D;
            empty_caption.innerHTML = "";

/*{{{
            if(seekspot_U_or_D == seekspot_U) { t_util.add_el_class(seekzone,t_data.CSS_CAPTION_U); t_util.del_el_class(seekzone,t_data.CSS_CAPTION_D); }
            else                               { t_util.del_el_class(seekzone,t_data.CSS_CAPTION_U); t_util.add_el_class(seekzone,t_data.CSS_CAPTION_D); }
}}}*/
            let ccx = (++t_seeker_show_msg_num) % 10;
log("t_data.SHOW_SEEKZONE %c"+t_seeker_show_msg_num +"%c"+ msg, lbH+lfX[ccx], lbH+lf9);
            seekspot_U_or_D.innerHTML
                = "<pre><em class='big cc"+ccx+"'>"+t_seeker_show_msg_num+"</em> "+(msg ? ("<em class='big cc7'>"+msg+"</em>") : "")
                +          (t_prop.get( t_data.PIN_SEEKSPOT ) ? " <em class='cc8' style='float:right;'>"+t_data.SYMBOL_PUSH_PIN+"</em>" : "")
                + t_data.LF+     ".. WH ["  + window.innerWidth +" "+ window.innerHeight +"]"
                +         ".. SEEK ["+ onSeekXYLT.x       +" "+ onSeekXYLT.y        +"]"
                +         ".. XY ["  + onDown_XY.x       +" "+ onDown_XY.y        +"]"
                + t_data.LF + "-----------------------------------------------------------"
                + t_data.LF + t_tools.t_log_tools_status_get()
                + t_data.LF + t_tools.t_log_event_status_get()
                + "</pre>"
            ;

            /* post next message */
            if( t_seeker_show_msg.length)
                t_seeker_show_timer = setTimeout(seek_show_handler, SHOW_SEEKZONE_DELAY);
        }
    }
    else {
        seekspot_U.style.display = "none";
        seekspot_D.style.display = "none";
    }
    /*}}}*/
};
/*}}}*/
/*…   seekspot1_show_onDown_XY {{{*/
let   seekspot1_show_onDown_XY = function(x,y)
{
/*{{{*/
let  caller = "seekspot1_show_onDown_XY";
let log_this = DOM_SEEK_LOG;

if( log_this) log("%c"+caller, lbH+lf1);
/*}}}*/
    /* container {{{*/
    let container_selected
        = t_tools.t_get_container_selected();

    let container_symbol
        = container_selected
        ? container_selected.tagName+" "+ t_data.SYMBOL_HEAVY_RIGHT_ARROW+" "
        : ""
    ;

    let onWork_EL
        = t_tools.t_get_onWork_EL();

    let container_msg
        = t_util.get_n_txt(onWork_EL) +" "+t_data.SYMBOL_BLACK_CIRCLE+" "+t_util.get_n_lbl(onWork_EL)
    ;

    /*}}}*/
    /* sym msg {{{*/
    let sym;
    let msg;
    switch( onSeekXYLT.label )
    {
        case CSS_SEEK2_ONSLOTEL : { sym = t_data.SYMBOL_BLACK_R_HAND ; msg = "SEEK SLOT #"+t_tools.t_get_onWork_EL_slot(); } break;
        case CSS_SEEK4_ONJUMPEL : { sym = "ON"                       ; msg = t_util.get_id_or_tag(onWork_EL)             ; } break;
        case CSS_SEEK6_ONSTICKY : { sym = "ON"                       ; msg = t_util.get_id_or_tag(onWork_EL)             ; } break;
        case CSS_SEEK5_ONSEEKER : { sym = container_symbol           ; msg = container_msg                               ; } break;
        case CSS_SEEK1_ONRESUME : { sym = t_data.SYMBOL_GEAR         ; msg = "RESUME"                                    ; } break;
        case CSS_SEEK0_ONDOC    : { sym = t_data.SYMBOL_BLACK_R_HAND ; msg = "SEEK DOC"                                  ; } break;
        default                 : { sym = t_data.SYMBOL_CIRCLE       ; msg = onSeekXYLT.label || "NOT SEEKING"           ; } break;
    }

    t_seeker_show(sym +" "+ msg);

    /*}}}*/
    /* t_data.PIN_SEEKSPOT ARROW .. [seekspot_A] {{{*/
    if( t_prop.get( t_data.PIN_SEEKSPOT ) )
    {
        seekspot_A.style.marginLeft = x +"px";
        seekspot_A.style.top        = y +"px";
        seekspot_A.style.display    = "block";
    }
    /*}}}*/
};
/*}}}*/
/*➔ t_seekzone1_show_onDown_XY {{{*/
let t_seekzone1_show_onDown_XY = function(x,y)
{
/*{{{*/
let   caller = "t_seekzone1_show_onDown_XY";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c"+t_data.SYMBOL_BULB+"%c onSeekXYLT %c "+onSeekXYLT.x+" "+onSeekXYLT.y
                  ,lbb+lf1         ,lbL         ,lbR+lf4                         );
if( log_this) t_tools.t_log_event_status(caller, lf1);
/*}}}*/
    /* RESET {{{*/
    seekzone5_hide_cancel();

    t_util.del_el_class(seekzone, t_data.CSS_ON_CONTAINER);
    /*}}}*/
    /* DISPLAY {{{*/
    seekzone.style.display = "block";
    seekzone.style.left    = (x                )+"px";
    seekzone.style.top     = (y                )+"px";
    seekzone.style.width   = (  SEEKSPOT_W_MIN )+"px";
    seekzone.style.height  = (  SEEKSPOT_H_MIN )+"px";
    seekzone.innerHTML     = "";

    /*}}}*/
};
/*}}}*/
/*➔ t_seekzone2_show_misclick {{{*/
let t_seekzone2_show_misclick = function(pressMS, misclick_MS)
{
/*{{{*/
let  caller = "t_seekzone2_show_misclick";
let log_this = DOM_SEEK_LOG;

if( log_this) log("%c"+caller, lbH+lf2);
/*}}}*/

    let css_class;
    if     (pressMS < misclick_MS * 0.25) css_class = t_data.CSS_MISCLICK1;
    else if(pressMS < misclick_MS * 0.50) css_class = t_data.CSS_MISCLICK2;
    else if(pressMS < misclick_MS * 0.75) css_class = t_data.CSS_MISCLICK3;
    else                                  css_class = t_data.CSS_MISCLICK ;

    t_util.set_el_class_removing(seekzone,       css_class, CSS_SEEKZONE_ARRAY);

/*{{{
logXXX("seekzone %c"+seekzone.className,lbH+lf7);
}}}*/
};
/*}}}*/
/*➔ t_seekzone3_show_dblclick {{{*/
let t_seekzone3_show_dblclick = function(pressMS, misclick_MS) /* eslint-disable-line no-unused-vars */
{
/*{{{*/
let  caller = "t_seekzone3_show_dblclick";
let log_this = DOM_SEEK_LOG;

if( log_this) log("%c"+caller, lbH+lf3);
/*}}}*/

    t_util.set_el_class_removing(seekzone, t_data.CSS_DBLCLICK, CSS_SEEKZONE_ARRAY);

};
/*}}}*/
/*➔ t_seekzone4_show_longpress  {{{*/
let t_seekzone4_show_longpress = function()
{
/*{{{*/
let  caller = "t_seekzone4_show_longpress";
let log_this = DOM_SEEK_LOG;

if( log_this) log("%c"+caller, lbH+lf4);
/*}}}*/

    t_util.set_el_class_removing(seekzone, t_data.CSS_LONGPRESS, CSS_SEEKZONE_ARRAY);

};
/*}}}*/
/*➔ t_seekzone5_hide {{{*/
let t_seekzone5_hide_timer;
let t_seekzone5_hide = function(flags)
{
/*{{{*/
let  caller = "t_seekzone5_hide";
let log_this = DOM_SEEK_LOG;

if( log_this) log("%c"+caller, lbH+lf5);
/*}}}*/

    if(!seekzone                   ) return;

    if     (flags == "restart"     ) seekzone5_hide_cancel();
    else if( t_seekzone5_hide_timer ) return;

    if(flags != "instant") { t_seekzone5_hide_timer =   setTimeout(seekzone5_hide_handler, HIDE_SEEKZONE_DELAY); }
    else                   { t_seekzone5_hide_timer = null;        seekzone5_hide_handler();                     }
};
/*}}}*/
/*…   seekzone5_hide_handler {{{*/
let   seekzone5_hide_handler = function()
{
/*{{{
logXXX("%c seekzone5_hide_handler", lbH+lf5)
}}}*/
    t_seekzone5_hide_timer = null;

    if(!seekzone) return;

    /* POSTPONE UNTIL EVENT-UP */
/*{{{
    if( seek_TOOL.t_seektool_has_TARGET() )
}}}*/
    if( t_tools.t_get_onWork_EL() )
    {
        t_seekzone5_hide_timer = setTimeout(seekzone5_hide_handler, HIDE_SEEKZONE_DELAY);
        return;
    }

    /* [seekzone] STYLE */
    seekzone.className = "";

    /* DISPLAY .. [seekzone] .. [seekspot_U seekspot_A seekspot_D] */
    seekzone  .style.display = "none";
    seekspot_U.style.display = "none";
    seekspot_A.style.display = "none";
    seekspot_D.style.display = "none";

    seek_TOOL.t_seektool_clr_TARGET();
};
/*}}}*/
/*…   seekzone5_hide_cancel {{{*/
let   seekzone5_hide_cancel = function()
{
    if(!t_seekzone5_hide_timer   ) return;

    clearTimeout( t_seekzone5_hide_timer );

    t_seekzone5_hide_timer = null;
};
/*}}}*/

/*➔ t_seekzone6_show_anchor_node {{{*/
let t_seekzone6_show_anchor_node = function()
{
/*{{{*/
let  caller = "t_seekzone6_show_anchor_node";
let log_this = DOM_SEEK_LOG;

if( log_this) log("%c"+caller, lbH+lf6);
/*}}}*/

    t_util.set_el_class_removing(seekzone, t_data.CSS_ANCHOR_NODE, CSS_SEEKZONE_ARRAY);

};
/*}}}*/
/*➔ t_seekzone7_show_container {{{*/
let container_selected;
let t_seekzone7_show_container = function(container)
{
/*{{{*/
let  caller = "t_seekzone7_show_container";
let log_this = DOM_SEEK_LOG;

    if(container == container_selected) return;

if( log_this) log("%c"+caller, lbH+lf7);
/*{{{
if( log_this) log_caller();
}}}*/
/*}}}*/


    container_selected = container;
/*{{{
    let xy = t_util.get_el_xy(container_selected, caller);
    if(!xy ) return;
    let xy = t_util.get_el_xy_computed(container_selected);
}}}*/
    let bcr = container_selected.getBoundingClientRect();
    let xy = { x: bcr.x + window.scrollX
             , y: bcr.y + window.scrollY };

    let seek_label = "CONTAINER ["+t_util.get_n_lbl(container_selected)+"]";

    seek_TOOL.t_seektool_set_XY_LABEL_TARGET_TYPE(xy, seek_label);

    t_seeker_show(t_data.SYMBOL_BLACK_CIRCLE+" "+seek_label);
};
/*}}}*/
/*➔ t_seekzone8_show_gutter_xywh {{{*/
let t_seekzone8_show_gutter_xywh = function(x, y, w, h)
{
/*{{{*/
let  caller = "t_seekzone8_show_gutter_xywh";
let log_this = DOM_SEEK_LOG;

if( log_this) log("%c"+caller, lbH+lf8);
/*}}}*/

    if(!seekzone) return;

    /* cancel pending hide {{{*/
    seekzone5_hide_cancel();

    /*}}}*/

    seekzone.style.display = "block";
    seekzone.style.left    = x +"px";
    seekzone.style.top     = y +"px";
    seekzone.style.width   = w +"px";
    seekzone.style.height  = h +"px";

    t_util.del_el_class(seekzone, t_data.CSS_ON_CONTAINER);
    t_util.add_el_class(seekzone, t_data.CSS_GUTTER);
    t_tools.t_store_consider_page_items_worth_storing("HOTSPOT  TO GUTTER");
};
/*}}}*/
/*➔ t_seekzone8_hide_gutter {{{*/
let t_seekzone8_hide_gutter = function()
{
/*{{{*/
let  caller = "t_seekzone8_hide_gutter";
let log_this = DOM_SEEK_LOG;

if( log_this) log("%c"+caller, lbH+lf8);
/*}}}*/

    t_util.del_el_class(seekzone, t_data.CSS_GUTTER    );
    t_util.del_el_class(seekzone, t_data.MARKED_TO_HIDE);

    t_seekzone5_hide("instant");
};
/*}}}*/
/*➔ t_seekzone8_isOn_gutter {{{*/
let t_seekzone8_isOn_gutter = function()
{
    return t_util.has_el_class(seekzone, t_data.CSS_GUTTER);
};
/*}}}*/
/*➔ t_seekzone9_show_bordering  {{{*/
let t_seekzone9_show_bordering = function(css_corner)
{
/*{{{*/
let  caller = "t_seekzone9_show_bordering";
let log_this = DOM_SEEK_LOG;

if( log_this) log("%c"+caller+"("+css_corner+")", lbH+lf9);
/*}}}*/
    t_util.set_el_class_removing(seekzone, t_data.CSS_BORDERING, CSS_SEEKZONE_ARRAY);
    t_util.set_el_class_removing(seekzone, css_corner   , CSS_CORNER_ARRAY  );
    /* CLEAR [pin_seekspot] CSS */
    t_util.del_el_class(         seekzone, t_data.CSS_PRESSED);
};
/*}}}*/
/*➔ t_seekzone0_show_MASK_OR_HIDE {{{*/
let t_seekzone0_show_MASK_OR_HIDE = function()
{
/*{{{*/
let  caller = "t_seekzone0_show_MASK_OR_HIDE";
let log_this = DOM_SEEK_LOG;

if( log_this) log("%c"+caller, lbH+lf0);
/*}}}*/

    if( t_prop.get( t_data.MASK_OR_HIDE ) )
        t_util.del_el_class(seekzone, t_data.MARKED_TO_HIDE);
    else
        t_util.add_el_class(seekzone, t_data.MARKED_TO_HIDE);
};
/*}}}*/

/*}}}*/

/* STATE .. PU MAGNIFY XYL GRAB PRESSED SELECTED */
/*{{{*/
/*➔ t_seeker_is_seeker_PU {{{*/
let t_seeker_is_seeker_PU = function(el)
{
    return (el ==  seeker_PU);
};
/*}}}*/
/*➔ t_seeker_is_seeker_PU_ONSEEKER {{{*/
let t_seeker_is_seeker_PU_ONSEEKER = function()
{
    return  t_util.has_el_class(seeker_PU, CSS_SEEK5_ONSEEKER);
};
/*}}}*/

/*➔ t_seeker_get_onSeekXYL {{{*/

let onSeekXYLT = { target_type: "" , x:0 , y:0 , label:"" };

let t_seeker_get_onSeekXYL = function()
{
    return onSeekXYLT;
};
/*}}}*/
let t_seeker_get_seeker_PU_XY = function()
{
    let bcr = seeker_PU.getBoundingClientRect();

    return { x : (window.scrollX + bcr.left + bcr.width  / 2).toFixed(0)
        ,    y : (window.scrollY + bcr.top  + bcr.height    ).toFixed(0) };
};
/*➔ t_seeker_is_onSticky {{{*/
let t_seeker_is_onSticky = function()
{
    let result = (onSeekXYLT.target_type == TARGET_TYPE_STICKY);

    return result;
};
/*}}}*/

/*➔ t_seekzone_set_selected {{{*/
let t_seekzone_set_selected = function()
{
    if(seekzone) t_util.add_el_class(seekzone, t_tools.CSS_CONTAINER_SELECTED);
};
/*}}}*/
/*➔ t_seekzone_clr_selected {{{*/
let t_seekzone_clr_selected = function()
{
    if(seekzone) t_util.del_el_class(seekzone, t_tools.CSS_CONTAINER_SELECTED);
};
/*}}}*/
/*}}}*/

/* SEEKER .. PANEL SHOW HIDE FADE STATE SLOT CLASS TOOL MOVE t_data.SEL_BACK */
/*{{{*/
/*{{{*/

let seeker_CD;
let seeker_CU;
let seeker_PD;
let seeker_PU;

let seekzone;
let  seekspot_A;
let  seekspot_U;
let  seekspot_D;
/*}}}*/

/* PANEL */
/*➔ t_seeker_get_node_bag_id {{{*/
let t_seeker_get_node_bag_id = function(node)
{
    let bag_id = "";
    if     (t_util.is_el_or_child_of_parent_el(node, seeker_PU)) bag_id = "seeker_PU";
    else if(t_util.is_el_or_child_of_parent_el(node, seeker_PD)) bag_id = "seeker_PD";

/*{{{
log("t_seeker_get_node_bag_id("+t_util.get_n_lbl(node)+") %c return bag_id=["+bag_id+"]", lbH+lf8);
}}}*/
    return bag_id;
};
/*}}}*/

/* SHOW HIDE FADE */
/*{{{*/
const T_SEEKER_PU_HIDE_LONG_DELAY = 5000;
const T_SEEKER_PU_HIDE_FAST_DELAY = 5000;
const T_SEEKER_PU_FADE_DELAY      = 3000;
const T_SEEKER_SYNC_DELAY         = 500;

let   t_seeker_PU_fade_timer;
let   t_seeker_PU_hide_timer;
let   t_seeker_sync_timer;
/*}}}*/
/*➔ t_seeker_sync {{{*/
let t_seeker_sync = function()
{
    if(!seeker_PU) return;

    if(t_seeker_sync_timer) clearTimeout( t_seeker_sync_timer );
    t_seeker_sync_timer   =   setTimeout( seeker_sync_handler , T_SEEKER_SYNC_DELAY);
};
/*}}}*/
/*➔ t_seeker_sync_is_pending {{{*/
let t_seeker_sync_is_pending = function()
{
    return (t_seeker_sync_timer != null);
};
/*}}}*/
/*…   seeker_sync_handler {{{*/
let   seeker_sync_handler = function()
{
    t_seeker_sync_timer = null;

    if     (  t_seeker_PU_is_active() ) t_seeker_PU_show();
    else if(  t_tools.t_scroll_not_done_yet() ) t_seekzone5_hide("instant");
};
/*}}}*/
/*➔ t_seeker_hide {{{*/
let t_seeker_hide = function()
{
    let el;
        if(    el = seeker_PD          ) el.style.display = "none";
        if(    el = seeker_PU          ) el.style.display = "none";
};
/*}}}*/
/*➔ t_seeker_set_PU_locked_on_screen {{{*/
let   seeker_set_PU_locked_on_screen = false;

let t_seeker_set_PU_locked_on_screen = function(state)
{
    if(!seeker_set_PU_locked_on_screen && state) t_seeker_PU_show();

    seeker_set_PU_locked_on_screen = state;

    if(!seeker_set_PU_locked_on_screen         ) t_seeker_PU_hide();
};
/*}}}*/
/*_ is_seeker_set_PU_locked_on_screen {{{*/
let is_seeker_set_PU_locked_on_screen = function(_caller)
{
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

if( log_this) {
    let l_x = seeker_set_PU_locked_on_screen ? lbL+lf7 : lbL+lf0;
    let l_y = seeker_set_PU_locked_on_screen ? lbR+lf7 : lbR+lf0;
    log("%c SEEKER LOCKED ON SCREEN "+seeker_set_PU_locked_on_screen+" %c"+_caller
                  ,l_x                                                ,l_y        );
}

    return seeker_set_PU_locked_on_screen;
};
/*}}}*/
/*➔ t_seeker_PU_show {{{*/
let t_seeker_PU_show = function()
{
/*{{{*/
let   caller = "t_seeker_PU_show";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("t_seeker_PU_show");
/*}}}*/
    /* is_seeker_set_PU_locked_on_screen {{{*/
    if( is_seeker_set_PU_locked_on_screen(caller) )
        return;

    /*}}}*/

    if(t_seeker_PU_hide_timer) seeker_PU_hide_cancel();

    t_util.del_el_class(seeker_PU, t_tools.CSS_FADING);
    t_util.del_el_class(seeker_PU, t_data.CSS_HIDING);

/*{{{
    t_util.set_el_class_on_off(seeker_PU,  t_data.SHOW_SEEKZONE , t_prop.get( t_data.SHOW_SEEKZONE ));
}}}*/

    seeker_PU.style.display = "block";

    /* SCHEDULE AUTO-HIDE */
    t_seeker_PU_hide();
};
/*}}}*/
/*➔ t_seeker_PU_hide {{{*/
let t_seeker_PU_hide = function(instant="")
{
/*{{{*/
let   caller = "t_seeker_PU_hide";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

/*}}}*/
    /* is_seeker_set_PU_locked_on_screen {{{*/
    if( is_seeker_set_PU_locked_on_screen(caller) )
        return;

    /*}}}*/

    if(!t_seeker_PU_is_active() ) return;

    if(t_seeker_PU_hide_timer) seeker_PU_hide_cancel();

    let delay
        = instant                   ? 0
        : t_prop.get( t_data.SHOW_SEEKZONE ) ? T_SEEKER_PU_HIDE_FAST_DELAY
        :                             T_SEEKER_PU_HIDE_LONG_DELAY
    ;

if( log_this) log(caller+"("+instant+"): %c delay %c"+delay+"] %c t_prop.get( t_data.SHOW_SEEKZONE ) %c"+t_prop.get( t_data.SHOW_SEEKZONE )
                  ,                      lbL     ,lbR         ,lbL                         ,lbR                          );

    /* HIDE AND FADE TRANSITIONS */
    if( delay ) {
        t_seeker_PU_hide_timer = setTimeout(seeker_PU_hide_handler, delay);
        t_seeker_PU_fade_timer = setTimeout(seeker_PU_fade_handler, T_SEEKER_PU_FADE_DELAY);
    }
    /* HIDE TRANSITON ONLY */
    else {
        seeker_PU_hide_handler( instant );
    }

};
/*}}}*/
/*…   seeker_PU_hide_cancel {{{*/
let   seeker_PU_hide_cancel = function()
{
    if(          !t_seeker_PU_hide_timer ) return;

    clearTimeout( t_seeker_PU_hide_timer );
    /*.........*/ t_seeker_PU_hide_timer = null;

    if(t_seeker_PU_fade_timer) seeker_PU_fade_cancel();
};
/*}}}*/
/*…   seeker_PU_fade_cancel {{{*/
let   seeker_PU_fade_cancel = function()
{
    if(          !t_seeker_PU_fade_timer ) return;

    /*.........*/ t_seeker_PU_fade_timer = null;
    clearTimeout( t_seeker_PU_fade_timer );
};
    /*}}}*/
/*…   seeker_PU_fade_handler {{{*/
let   seeker_PU_fade_handler = function()
{
/*{{{*/
let   caller = "seeker_PU_fade_handler";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller+": ["+t_util.get_n_lbl(t_tools.t_get_onWork_EL())+"]");
/*}}}*/

    t_seeker_PU_fade_timer = null;
    /* is_seeker_set_PU_locked_on_screen {{{*/
    if( is_seeker_set_PU_locked_on_screen(caller) )
        return;

    /*}}}*/

    /* POSTPONE UNTIL EVENT-UP */
    if( t_tools.t_get_onWork_EL() ) return;

    t_util.add_el_class(seeker_PU, t_tools.CSS_FADING);
    t_util.del_el_class(seeker_PU, t_data.CSS_HIDING);
};
/*}}}*/
/*…   seeker_PU_hide_handler {{{*/
let   seeker_PU_hide_handler = function(instant="")
{
/*{{{*/
let   caller = "seeker_PU_hide_handler("+instant+")";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller+": onWork_EL=["+t_util.get_n_lbl(t_tools.t_get_onWork_EL())+"]");
/*}}}*/
    /* is_seeker_set_PU_locked_on_screen {{{*/
    if( is_seeker_set_PU_locked_on_screen(caller) )
        return;

    /*}}}*/
    /* POSTPONE UNTIL EVENT-UP {{{*/
    t_seeker_PU_hide_timer = null;

    if(!instant && t_tools.t_get_onWork_EL()) return;

    t_util.del_el_class(seeker_PU, t_tools.CSS_FADING);
    t_util.add_el_class(seeker_PU, t_data.CSS_HIDING);
    seeker_PU.style.display = "none";

    /*}}}*/
    /* DISMISS HIDING SEEK TOOL {{{*/
    seek_TOOL.t_seektool_clr_TARGET();

    /*}}}*/
    /* HIDE SEEKZONE {{{*/
    if(!t_prop.get( t_data.SHOW_SEEKZONE ) || !t_prop.get( t_data.PIN_SEEKSPOT ) || t_tools.t_dimm_mask_displayed())
    {
        t_seekzone5_hide("instant");
    }
    /*}}}*/
    /* OR JUST SEEKSPOT {{{*/
    else {
        seekspot_A.style.display = "none";
/*{{{
        if(!t_prop.get( t_data.LOG_SEEKSPOT ) ) {
            seekspot_U.innerHTML     = "";
            seekspot_D.innerHTML     = "";
        }
}}}*/
    }

    /*}}}*/
    /* CLEAR SELECTED STICKY {{{*/
    t_sticky.t_sticky_clr_SEEK_NEXT();

    /*}}}*/
    /* CLEAR SELECTED CONTAINER {{{*/
    t_tools.t_clr_container_selected();

    /*}}}*/
    /* CLEAR SELECTED SLOT {{{*/
    t_seeker_SELECT_CLEAR(caller);

    t_select.clear_last_selected_slot();
    /*}}}*/
    /* RESET GRAB CYCLE {{{*/
    t_seeker_onMove1_grab( false ); /* FIRST MOVE IS A GRAB */

    /*}}}*/
if( log_this) log("%c RELEASING LAST SEEKED SLOT", lbH+lf5);
};
/*}}}*/

/* STATE .. ARM ACTIVE LOOKING */
/*➔ t_seeker_PU_arm {{{*/
let t_seeker_PU_arm = function()
{
/*{{{*/
let   caller = "t_seeker_PU_arm";
let log_this = DOM_SEEK_LOG;

if( log_this) log(caller+": [t_seeker_PU_is_active() "+t_seeker_PU_is_active()+"]");
/*}}}*/
    if( !t_seeker_PU_is_active() ) return;

    t_seeker_PU_show();

    t_util.add_el_class(seeker_CU, t_tools.LONG_PRESS_ARM);
};
/*}}}*/
/*➔ t_seeker_PU_disarm {{{*/
let t_seeker_PU_disarm = function()
{
/*{{{*/
let   caller = "t_seeker_PU_disarm";
let log_this = DOM_SEEK_LOG;

if( log_this) log(caller);
/*}}}*/

    t_util.del_el_class(seeker_CU, t_tools.LONG_PRESS_ARM);
};
/*}}}*/
/*_ t_seeker_is_active {{{*/
let t_seeker_is_active = function()
{
    let result = t_seeker_PU_is_active();

    return result;
};
/*}}}*/
/*➔ t_seeker_PU_is_active {{{*/
let t_seeker_PU_is_active = function()
{
/*{{{*/
let   caller = "t_seeker_PU_is_active";
let log_this = DOM_SEEK_LOG || LOG_MAP.EV5_TOOL_CB;

/*}}}*/

    let reject_reason = "";

    if     (!seeker_PU                               ) reject_reason = "[seeker_PU] NOT INITIALIZED";
    else if( seeker_PU.style.display    != "block"   ) reject_reason = "[seeker_PU] NOT DISPLAYED";
    else if( seeker_PU.classList.contains(t_data.CSS_HIDING)) reject_reason = "[seeker_PU] IS HIDING" ;

    let is_active = (reject_reason == "");

if(!is_active && log_this) log(caller+": ...return "+is_active+" %c "+reject_reason, lb2);
    return is_active;
};
/*}}}*/
/*➔ t_seeker_PU_is_looking_somewhere {{{*/
let t_seeker_PU_is_looking_somewhere = function()
{
    let result
        =  t_util.has_el_class(seeker_PU, t_data.CSS_SEEKER_PU2_LOOK_UP   )
        || t_util.has_el_class(seeker_PU, t_data.CSS_SEEKER_PU3_LOOK_RIGHT)
        || t_util.has_el_class(seeker_PU, t_data.CSS_SEEKER_PU4_LOOK_DOWN )
        || t_util.has_el_class(seeker_PU, t_data.CSS_SEEKER_PU5_LOOK_LEFT )
    ;

/*{{{
log("%c t_seeker_PU_is_looking_somewhere return "+result, lbH+lf8);
}}}*/
    return result;
};
    /*}}}*/

/* SLOT */
/*➔ t_seeker_isOn_SLOT_EL {{{ */
/*{{{*/
const regexp_SELECT_ID = new RegExp("(select|thumb_s_)[0-9]+_[0-9]+");

/*}}}*/
let t_seeker_isOn_SLOT_EL = function(el)
{
let caller = "t_seeker_isOn_SLOT_EL";
let log_this = DOM_SEEK_LOG;

/*{{{*/
    if(!el) return false;

    let picked_el = null;
/*}}}*/
    /* ON SEEKER {{{*/
    if((el == seeker_PU) || (el == seeker_CU) /*|| (el.id.startsWith("seekzone"))*/)
    {
        picked_el = el;
    }
    /*}}}*/
    /* ON SLOT {{{*/
    else {
        for(           picked_el  = el
              ;        picked_el != null
              ;        picked_el  = picked_el.parentNode
           ) {
            if(       !picked_el.id                          ) continue;
            if( String(picked_el.id).match(regexp_SELECT_ID) )    break;
        }
    }
    /*}}}*/
    let result = (picked_el != null);

if( log_this) log(caller+"("+t_util.get_n_lbl(el)+"): ...return "+ result + (picked_el ? " ["+picked_el.id+"]" : ""));
    return result;
};
/* }}} */

/* CSS CLASS */
/*➔ t_seeker_set_class {{{*/
let t_seeker_set_class = function(css, state)
{
    t_util.set_el_class_on_off(seeker_PU, css, state);
};
/*}}}*/

/* TOOL */
/*➔ t_seeker_is_a_tool_el {{{*/
let t_seeker_is_a_tool_el = function(el)
{
    if(!el) return "";

    return (el == seeker_PU) || (el == seeker_CU)
        || (el == seeker_PD) || (el == seeker_CD)
        || (el.id && el.id.startsWith("seekzone"))
        ?   el.id
        :   ""
    ;
};
/*}}}*/

/* t_data.SEL_BACK */
/*{{{*/
/*{{{*/
const SEEKER_SYNC_SEL_BACK_ARROW_DELAY = 750;
const SEEKER_SYNC_SEL_BACK_DELAY       = 500;
let   seeker_sync_SEL_BACK_timeout;

/*}}}*/
/*➔ t_seeker_sync_SEL_BACK {{{*/
let t_seeker_sync_SEL_BACK = function(_caller) /* eslint-disable-line no-unused-vars */
{
/*{{{
logXXX("%c t_seeker_sync_SEL_BACK("+_caller+")", lbH+lf7);
}}}*/
    if(seeker_sync_SEL_BACK_timeout) clearTimeout( seeker_sync_SEL_BACK_timeout );
    seeker_sync_SEL_BACK_timeout   =   setTimeout( seeker_sync_SEL_BACK_handle  , SEEKER_SYNC_SEL_BACK_DELAY);
};
/*}}}*/
/*…   seeker_sync_SEL_BACK_handle {{{*/
let   seeker_sync_SEL_BACK_handle = function()
{
    /* [seeker_handle] nodes */
    seeker_sync_SEL_BACK_timeout = null;

    let prop_SEL_BAK = t_prop.get(t_data.SEL_BACK);

    let node_list;
    let shadow_root = t_tools.t_get_shadow_root();
    if( shadow_root ) node_list = shadow_root.querySelectorAll(".seeker_handle");
    else              node_list = document   .querySelectorAll(".seeker_handle");
    for(let i=0; i <  node_list.length; ++i) {
        let     el =  node_list[i];
        /* ARROW [LEFT..RIGHT] .. f(back) {{{*/
        if(   t_util.has_el_class(el, t_data.CSS_LEFT )
           || t_util.has_el_class(el, t_data.CSS_RIGHT)
          ) {
            if( el.innerText != t_data.SYMBOL_DOWN_ARROW) el.innerText = t_data.SYMBOL_DOWN_ARROW;

            t_util.del_el_class(el, t_data.CSS_PRESSED);

            if( prop_SEL_BAK ) t_util.add_el_class(el, t_tools.CSS_BACK);
            else               t_util.del_el_class(el, t_tools.CSS_BACK);

            setTimeout(seeker_sync_SEL_BACK_ARROW_handle, SEEKER_SYNC_SEL_BACK_ARROW_DELAY);
        }
        /*}}}*/
        /* ...(top) remove pat_sort clone {{{
        else if( t_util.has_el_class(el, t_data.CSS_TOP) )
        {
            el.innerHTML   = pat_sort.innerHTML;
            if( t_are_sel_sorted() ) t_util.add_el_class(el, t_data.CSS_CHECKED);
            else                     t_util.del_el_class(el, t_data.CSS_CHECKED);
        }
        }}}*/
        /* ...[show_seekzone] toggle .. (bottom) {{{
        else if( t_util.has_el_class(el, t_data.CSS_BOTTOM )) {
            if(           t_prop.get(    t_data.LOG_SEEKSPOT )) t_util.add_el_class(el  , t_data.CSS_CHECKED);
            else                                                t_util.del_el_class(el  , t_data.CSS_CHECKED);
        }
        }}}*/
    }
};
/*}}}*/
/*…   seeker_sync_SEL_BACK_ARROW_handle {{{*/
let   seeker_sync_SEL_BACK_ARROW_handle = function()
{
    let sel_bag = t_tools.t_get_tool("sel_bag");
    if( t_prop.get( t_data.SEL_BACK ) )
    {
        t_util.add_el_class(sel_bag      , t_tools.CSS_BACK);
        t_util.add_el_class(seeker_CD    , t_tools.CSS_BACK);
        t_util.add_el_class(seeker_thumbs, t_tools.CSS_BACK);
    }
    else {
        t_util.del_el_class(sel_bag      , t_tools.CSS_BACK);
        t_util.del_el_class(seeker_CD    , t_tools.CSS_BACK);
        t_util.del_el_class(seeker_thumbs, t_tools.CSS_BACK);
    }

};
/*}}}*/
/*}}}*/

/*➔ t_seeker_set_CSS_ON_COOLDOWN {{{*/
let t_seeker_set_CSS_ON_COOLDOWN = function( state )
{
    if(state) t_util.add_el_class(seeker_PU, t_tools.CSS_ON_COOLDOWN);
    else      t_util.del_el_class(seeker_PU, t_tools.CSS_ON_COOLDOWN);
};
/*}}}*/

/*}}}*/

/* SELECT */
/*{{{*/
/*_ t_seeker_SELECT_CLEAR {{{*/
let t_seeker_SELECT_CLEAR = function(_caller) /* eslint-disable-line no-unused-vars */
{
    /* del t_tools.CSS_NUM_SELECTED {{{*/
    let                      ccs_length = t_select.t_select_get_ccs_length();
    for(let slot = 1; slot < ccs_length; ++slot)
    {
        let num_selected = t_select.t_select_get_slot_num_selected(slot);
        if( num_selected > 0)
        {
            let node = t_select.t_select_get_slot_num_node(slot, num_selected);
            t_util.del_el_class(node, t_tools.CSS_NUM_SELECTED);
        }
    }
    /*}}}*/
};
/*}}}*/
/*_ t_seeker_SELECT_onWork_EL {{{*/
let t_seeker_SELECT_onWork_EL = function()
{
let caller = "t_seeker_SELECT_onWork_EL";
    /* [slot] {{{*/
    let slot = t_tools.t_get_onWork_EL_slot();
    if(!slot) return false;

    if(!t_select.t_select_get_slot_nodes_length(slot))
    {
logBIG(caller+": SLOT #"+slot+" NOT CURRENLTY INITIALIZED");

        if(t_tools.t_preventDefault_caller) t_tools.t_restoreDefault("NOT CURRENLTY INITIALIZED");
        return false;
    }
    /*}}}*/
    /* [num] {{{*/
    let num = t_tools.t_get_onWork_EL_num();

    if(!num ) return false;
    /*}}}*/
    /* [seeker_PU] .. CSS_SEEK4_ONJUMPEL {{{*/
    t_util.add_el_class(seeker_PU, CSS_SEEK4_ONJUMPEL);

    /*}}}*/
    /* SELECT SLOT NUM {{{*/
    seeker_set_slot_num_selected(slot, num);

    t_seeker_onMove3_ON_SLOT_NUM(slot, num);
    /*}}}*/
    /* CONTAINER {{{*/
    let container =  t_select.get_slot_num_container(slot, num);
    t_tools.t_seek_set_container_selected(container, caller);

    /*}}}*/
    /* CLEAR CURRENT WINDOW SELECTION {{{*/
    t_tools.t_window_getSelection_removeAllRanges(caller);

    /*}}}*/
    return true;
};
/*}}}*/
/*…   seeker_set_slot_num_selected {{{*/
let   seeker_set_slot_num_selected = function(slot, num)
{
/*{{{
let caller = "seeker_set_slot_num_selected";
logBIG(caller+"("+slot+", "+num+")", lf2);
}}}*/
    /* unhighlight current slot {{{*/
    let num_selected = t_select.t_select_get_slot_num_selected(slot);
    if( num_selected > 0) {
        let node = t_select.t_select_get_slot_num_node(slot, num_selected);
        t_util.del_el_class(node, t_tools.CSS_NUM_SELECTED);
    }
    /*}}}*/
    /* highlight selected slot {{{*/
    if( num > 0) {
        t_select.t_select_set_slot_num_selected(slot, num);
        let node = t_select.t_select_get_slot_num_node(slot, num);
        t_util.add_el_class(node, t_tools.CSS_NUM_SELECTED);
    }
    /*}}}*/
};
/*}}}*/

/*_ t_seeker_from_to_slot_num {{{*/
let t_seeker_from_to_slot_num = function(from_slot, from_num, to_slot, to_num)
{
/*{{{
let caller = "t_seeker_from_to_slot_num";
logBIG(caller+"(FROM ["+from_slot+" "+from_num+"] TO ["+to_slot+" "+to_num+"]", lf3);
}}}*/
    /* unhighlight current from_slot {{{*/
    let num_selected = t_select.t_select_get_slot_num_selected(from_slot);
    if( num_selected > 0) {

        let node = t_select.t_select_get_slot_num_node(from_slot, num_selected);
        t_util.del_el_class(node, t_tools.CSS_NUM_SELECTED);
    }
    /*}}}*/
    /* highlight abandonned from_slot {{{*/
    if(from_num > 0) {
        t_select.t_select_set_slot_num_selected(from_slot, from_num);

        let node = t_select.t_select_get_slot_num_node(from_slot, from_num);
        t_util.add_el_class(node, t_tools.CSS_NUM_SELECTED);

    }

    /*}}}*/
    /* unhighlight landing to_slot {{{*/
    if( to_num > 0) {

        let node = t_select.t_select_get_slot_num_node(to_slot, to_num);
        t_util.del_el_class(node, t_tools.CSS_NUM_SELECTED);
    }
    /*}}}*/
};
/*}}}*/
/*}}}*/

/* EXPORT */
/*{{{*/
return { name : "dom_seek"
    , logging : (state) => DOM_SEEK_LOG = t_store.t_store_set_state("DOM_SEEK_LOG",state)
    , tagging : (state) => DOM_SEEK_TAG = t_store.t_store_set_state("DOM_SEEK_TAG",state)
    , t_seek_IMPORT

    ,    CSS_SEEK0_ONDOC
    ,    CSS_SEEK1_ONRESUME
    ,    CSS_SEEK2_ONSLOTEL
    ,    CSS_SEEK3_ONTOOL
    ,    CSS_SEEK4_ONJUMPEL
    ,    CSS_SEEK5_ONSEEKER
    ,    CSS_SEEK6_ONSTICKY

    ,    t_seeker_clr_TOOL       : seek_TOOL.t_seektool_clr_TARGET
    ,    t_seeker_get_TOOL_label : seek_TOOL.t_seektool_get_TARGET_label
    ,    t_seeker_get_STICKY     : seek_TOOL.t_seektool_get_STICKY
    ,    t_seeker_has_TARGET     : seek_TOOL.t_seektool_has_TARGET
    ,    t_seeker_set_TOOL       : seek_TOOL.t_seektool_set_TARGET

    ,    t_seeker_onDown_1_INIT_CTRL_DEBOUNCE_INPUT

    ,    t_seeker_onMove2_ON_NEXT_STICKY
    ,    t_seeker_onMove1_grab
    ,    t_seeker_onMove1_grabbed
    ,    t_seeker_onUp8_ON_MOUSEUP_DONE
    ,    t_seeker_onMove3_ON_SLOT_NUM
    ,    t_seeker_onClick
    ,    t_seeker_onMove2_DXY
    ,    t_seeker_onMove2_SLOT_NUM_DIR
    ,    t_seeker_onLoad

    ,    t_seeker_SELECT_CLEAR
    ,    t_seeker_from_to_slot_num
    ,    t_seeker_isOn_SLOT_EL

    ,    t_seeker_PU_arm
    ,    t_seeker_PU_disarm
    ,    t_seeker_PU_hide
    ,    t_seeker_PU_is_active
    ,    t_seeker_PU_is_looking_somewhere
    ,    t_seeker_set_PU_locked_on_screen
    ,    t_seeker_PU_show
    ,    t_seeker_is_active

    ,    t_seeker_show
    ,    t_seeker_hide
    ,    t_seeker_set_CSS_ON_COOLDOWN
    ,    t_seeker_set_class
    ,    t_seeker_sync
    ,    t_seeker_sync_is_pending

    ,    t_seeker_could_be_magnified
    ,    t_seeker_get_node_bag_id
    ,    t_seeker_get_onSeekXYL
    ,    t_seeker_get_seeker_PU_XY
    ,    t_seeker_get_tool_panel

    ,    t_seeker_is_a_tool_el
    ,    t_seeker_is_onSticky
    ,    t_seeker_is_seeker_PU
    ,    t_seeker_is_seeker_PU_ONSEEKER

    ,    t_seekzone0_show_MASK_OR_HIDE
    ,    t_seekzone1_show_onDown_XY
    ,    t_seekzone2_show_misclick
    ,    t_seekzone3_show_dblclick
    ,    t_seekzone4_show_longpress
    ,    t_seekzone5_hide
    ,    t_seekzone6_show_anchor_node
    ,    t_seekzone7_show_container
    ,    t_seekzone8_hide_gutter
    ,    t_seekzone8_isOn_gutter
    ,    t_seekzone8_show_gutter_xywh
    ,    t_seekzone9_show_bordering
    ,    t_seekzone_clr_onWork_EL_pressed
    ,    t_seekzone_clr_selected
    ,    t_seekzone_set_selected

    ,    t_seeker_sync_SEL_BACK
    ,    t_seeker_get_last_seeked_slot_num
    ,    t_seeker_move_above_XY_cancel

    ,    t_seeker_get_seeker_PU_height : () => (seeker_PU ? seeker_PU.offsetHeight : 0)

};
/*}}}*/

}());

