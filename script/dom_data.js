/* dom_data_js */
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* exported dom_data */

/*
:update|1,$y *
:!start explorer https://jshint.com/
:!start explorer https://cdn.jsdelivr.net/npm/vue/dist/vue.js
*/

const DOM_DATA_JS_ID        = "dom_data_js";
const DOM_DATA_JS_TAG       = DOM_DATA_JS_ID  +" (230427:13h:55)";
/*}}}*/
let dom_data    = (function() {
"use strict";

/* SPECIAL CHARACTERS */
/*{{{*/
const APOS          = String.fromCharCode(39);
const DOUBLE_QUOTE  = String.fromCharCode(34);
const TAB           = String.fromCharCode( 9);
const LF            = String.fromCharCode(10);
const CR            = String.fromCharCode(13);

/*}}}*/
/* SYMBOL */
/* SYMBOL [java Settings] - unicode arrows surrogate {{{

:new /LOCAL/DATA/ANDROID/PROJECTS/RTabs/app/src/main/java/ivanwfr/rtabs/Settings.java

UNICODE KEYBOARD SYMBOLS:
:!start explorer "http://xahlee.info/comp/unicode_tech_devices.html"

ARROWS:
:!start explorer "https://www.toptal.com/designers/htmlarrows/arrows/"

SURROGATE PAIR CALCULATOR:
:!start explorer "http://www.russellcottrell.com/greek/utilities/surrogatepaircalculator.htm"

}}}*/
/* SYMBOL [UTF-8] {{{*/
/*
 << « » >>

*/
const SYMBOL_FUNCTION               = "ƒ";        // "\u0083" // "No break here"
const SYMBOL_SECTION                = "\u00A7"; /* § */
const SYMBOL_LEFT_DBL_ANGLE         = "\u00AB"; /* « */
const SYMBOL_PARAGRAPH              = "\u00B6"; /* ¶ */
const SYMBOL_RIGHT_DBL_ANGLE        = "\u00BB"; /* » */
/*    SYMBOL_EYE                    = "\u1F441";     */
/*    SYMBOL_CLIPBOARD              = "\u1F4CB";   ⎘ */
const SYMBOL_ELLIPSIS               = "\u2026"; /* … ,. */
const SYMBOL_DBL_EXCLAM             = "\u203C"; /* ‼ */
const SYMBOL_EXCLAM_QUESTION        = "\u2049";
const SYMBOL_LEFT_ARROW             = "\u2190"; /* ← <- */
const SYMBOL_UP_ARROW               = "\u2191"; /* ↑ -! */
const SYMBOL_RIGHT_ARROW            = "\u2192"; /* → -> */
const SYMBOL_DOWN_ARROW             = "\u2193"; /* ↓ -v */
const SYMBOL_LEFT_RIGHT_ARROW       = "\u2194"; /* ↔ <> */
const SYMBOL_UP_DOWN_ARROW          = "\u2195"; /* ↕ UD */
const SYMBOL_NW_ARROW               = "\u2196";
const SYMBOL_UP_LEFT_ARROW          = "\u2196";
const SYMBOL_LEFT_ARROW_HOOK        = "\u21A9";
const SYMBOL_RIGHT_ARROW_HOOK       = "\u21AA";
const SYMBOL_DOWN_LEFT_ARROW        = "\u21B5";
const SYMBOL_CLOCKWISE_OPEN_CIRCLE  = "\u21BB";
const SYMBOL_RIGHT_LEFT_ARROW       = "\u21C4";
const SYMBOL_UP_AND_DOWN_ARROW      = "\u21C5";
const SYMBOL_RIGHT_PAIR_ARROW       = "\u21C9";
const SYMBOL_CIRCLED_PLUS           = "\u2295";
const SYMBOL_WATCH                  = "\u231A";
const SYMBOL_ERASE_RIGHT            = "\u2326";
const SYMBOL_ERASE_LEFT             = "\u232B";
const SYMBOL_CIRCLE                 = "\u233E";
const SYMBOL_NOT_CHECKED            = "\u237B";
/*    SYMBOL_CLIPBOARD              = "\u2398";  */
const SYMBOL_CLEAR_SCREEN           = "\u239A";
const SYMBOL_EMPTY                  = "\u23D8";
const SYMBOL_HOURGLASS              = "\u23F3";
const SYMBOL_BACKSPACE              = "\u2408";
const SYMBOL_DOUBLE_VBAR            = "\u2590\u2590";
const SYMBOL_LIGHT_SHADE            = "\u2591"; /* ░ .S */ /* eslint-disable-line no-unused-vars */
const SYMBOL_BLACK_SQUARE           = "\u25A0"; /* ■ fS */
const SYMBOL_WHITE_SQUARE           = "\u25A1"; /* □ OS */
const SYMBOL_SQUARE_HFILL           = "\u25A4"; /* ▤ RF */
const SYMBOL_VERTICAL_RECT          = "\u25AE";
const SYMBOL_UP                     = "\u25B2"; /* ▲ UT */
const SYMBOL_RIGHT                  = "\u25B6";
const SYMBOL_DOWN                   = "\u25BC"; /* ▼ Dt */
const SYMBOL_LEFT                   = "\u25C0";
const SYMBOL_BLACK_CIRCLE           = "\u25CF"; /* ● 0M */
const SYMBOL_LOWER_RIGHT            = "\u25E2";
const SYMBOL_UPPER_LEFT             = "\u25E4";
const SYMBOL_LEFT_HALF_BLACK        = "\u25E7";
const SYMBOL_RIGHT_HALF_BLACK       = "\u25E8";
const SYMBOL_WHITE_MEDIUM_SQUARE    = "\u25FB";
const SYMBOL_BLACK_MEDIUM_SQUARE    = "\u25FC";
const SYMBOL_WHITE_SMALL_SQUARE     = "\u25FD";
const SYMBOL_BLACK_SMALL_SQUARE     = "\u25FE";
const SYMBOL_BLACK_SUN              = "\u2600"; /* ☀ BS */
const SYMBOL_CLOUD                  = "\u2601"; /* ☁ */
const SYMBOL_BALLOT_CHECK           = "\u2611"; /* ☑ */
const SYMBOL_BLACK_L_HAND           = "\u261A"; /* ☚ */
const SYMBOL_BLACK_R_HAND           = "\u261B"; /* ☛ */
const SYMBOL_LEFT_POINTING          = "\u261C"; /* ☜ */
const SYMBOL_WHITE_L_HAND           = "\u261C"; /* ☜ */
const SYMBOL_UP_POINTING            = "\u261D"; /* ☝ */
const SYMBOL_RIGHT_POINTING         = "\u261E"; /* ☞ */
const SYMBOL_DOWN_POINTING          = "\u261F"; /* ☟ */
const SYMBOL_MENU                   = "\u2630"; /* ☰ */
const SYMBOL_FROWNING_FACE          = "\u2639";
const SYMBOL_WHITE_SMILEY           = "\u263A"; /* ☺ */
const SYMBOL_BLACK_SMILEY           = "\u263B"; /* ☻ */
const SYMBOL_MOON                   = "\u263D"; /* ☽ */
const SYMBOL_RECYCLE                = "\u267B";
const SYMBOL_RELOAD                 = "\u21BB";
const SYMBOL_ANCHOR                 = "\u2693"; /* ⚓*/
const SYMBOL_CROSSED_SWORDS         = "\u2694"; /* ⚔ */
const SYMBOL_GEAR                   = "\u2699";
const SYMBOL_THEME                  = "\u262F"; /* ☯ */
const SYMBOL_WARNING                = "\u26A0";
const SYMBOL_WHITE_CIRCLE           = "\u26AA"; /* MEDIUM_WHITE */
const SYMBOL_BLMED_CIRCLE           = "\u26AB"; /* MEDIUM */
const SYMBOL_PARTNERSHIP            = "\u26AF";
const SYMBOL_NO_ENTRY               = "\u26D4";
const SYMBOL_EURO                   = "\u20AC"; /* € =e Eu euro */ /* eslint-disable-line no-unused-vars */
const SYMBOL_TRUCK                  = "\u26DF";
const SYMBOL_SAILBOAT               = "\u26F5";
const SYMBOL_SCISSORS               = "\u2702"; /* ✂ */
const SYMBOL_WRITING_HAND           = "\u270D"; /* ✍ */
const SYMBOL_PENCIL                 = "\u270E"; /* ✎ */
const SYMBOL_CHECK_MARK_LIGHT       = "\u2713"; /* ✓ */ /* eslint-disable-line no-unused-vars */
const SYMBOL_CHECK_MARK             = "\u2714"; /* ✔ */
const SYMBOL_HEAVY_BALLOT           = "\u2718"; /* ✘ */
const SYMBOL_SNOWFLAKE              = "\u2744"; /* ❄ */
const SYMBOL_RIGHT_ANGLE_BRACKET    = "\u276F";
const SYMBOL_HEAVY_RIGHT_ARROW      = "\u2794"; /* ➔ */
const SYMBOL_ROUND_RIGHT_ARROW      = "\u279C"; /* ➜ */
const SYMBOL_BLACK_RIGHT_ARROW      = "\u27A1"; /* ➡ */
const SYMBOL_LEFT_CHEVRON           = "\u27EA"; /* CHEVRON LEFT */
const SYMBOL_RIGHT_DBL_A_BRK        = "\u27EB";
const SYMBOL_CIRCLE_ARROW           = "\u27F3";
const SYMBOL_RIGHT_WAVE_ARROW       = "\u2933";
const SYMBOL_R_CLOS_ARROW           = "\u2941";
const SYMBOL_STAR                   = "\u2B50";
const SYMBOL_LARGE_CIRCLE           = "\u2B55"; /* HEAVY */

const SYMBOL_DIRECT_HIT             = "\uD83C\uDFAF"; /* "\u1F3AF"; */
const SYMBOL_BULB                   = "\uD83D\uDCA1";
const SYMBOL_CLIPBOARD              = "\uD83D\uDCCB";
const SYMBOL_MAILBOX                = "\uD83D\uDCEC"; /* NO */
const SYMBOL_MAGNIFY_LEFT           = "\uD83D\uDD0D"; /* 1f50d works */
const SYMBOL_MAGNIFY_RIGHT          = "\uD83D\uDD0E"; /* 1f50e works */
const SYMBOL_WASTEBASKET            = "\uD83D\uDDD1"; /* \u1F5D1 */
const SYMBOL_TRAFFIC_LIGHT          = "\uD83D\uDEA6";
const SYMBOL_TRAFFIC                = "\uD83D\uDEA6"; /* NO */
const SYMBOL_CONSTRUCTION           = "\uD83D\uDEA7"; /* works */
const SYMBOL_REPLACEMENT_CHAR       = "\uFFFD";
/*    SYMBOL_EYE                    = "\ud83d\udc41"; */

/*}}}*/
/* SYMBOL [HANDLE] {{{*/

const SYMBOL_DELETE                 = SYMBOL_ERASE_RIGHT;
const SYMBOL_EYE                    = SYMBOL_BULB;
const SYMBOL_STAGE1_INPUT           = SYMBOL_DOWN_POINTING;
const SYMBOL_STAGE2_ACTION          = SYMBOL_CIRCLE_ARROW;
const SYMBOL_STAGE3_RESULT          = SYMBOL_HEAVY_RIGHT_ARROW;
const SYMBOL_THEME_DARK_IS_OFF      = SYMBOL_BLACK_SUN;
const SYMBOL_THEME_DARK_IS_ON       = SYMBOL_MOON;
const SYMBOL_TOOLS_TIER2_OFF        = SYMBOL_RIGHT_DBL_A_BRK;
const SYMBOL_TOOLS_TIER2_ON         = SYMBOL_LEFT_CHEVRON;

const SYMBOL_WORDING_IS_OFF         = "w";
const SYMBOL_WORDING_IS_ON          = "W";
const SYMBOL_FONT_SIZE              = "Aa"; /* \uD83D\uDDDA 1F5DA;  */
const SYMBOL_RESIZE                 = "+";

const SAL                           = "\u2190"; /* &#x21AA; .. SYMBOL ARROW LEFT  ←  <- */
const SAU                           = "\u2191"; /* &#x2191; .. SYMBOL ARROW UP    ↑  -! */
const SAR                           = "\u2192"; /* &#x2192; .. SYMBOL ARROW RIGHT →  -> */
const SAD                           = "\u2193"; /* &#x2193; .. SYMBOL ARROW DOWN  ↓  -v */

const SYN                           = "\u25CF"; /* &#x25CF; .. SYMBOL BLACK CIRCLE ● OM */
const SBS                           = "\u2605"; /* &#x2605; .. SYMBOL BLACK STAR   ★ *2 */
const SHV                           = "\u26A1"; /* &#x26A1; .. HIGH VOLTAGE SIGN        */

const SD1                           = "\u2460"; /* &#x2460; .. &#x2776; .. CIRCLED DIGIT  1 ❶ */
const SD2                           = "\u2461"; /* &#x2461; .. &#x2777; .. CIRCLED DIGIT  2 ❷ */
const SD3                           = "\u2462"; /* &#x2462; .. &#x2778; .. CIRCLED DIGIT  3 ❸ */
const SD4                           = "\u2463"; /* &#x2463; .. &#x2779; .. CIRCLED DIGIT  4 ❹ */
const SD5                           = "\u2464"; /* &#x2464; .. &#x277A; .. CIRCLED DIGIT  5 ❺ */
const SD6                           = "\u2465"; /* &#x2465; .. &#x277B; .. CIRCLED DIGIT  6 ❻ */
const SD7                           = "\u2466"; /* &#x2466; .. &#x277C; .. CIRCLED DIGIT  7 ❼ */
const SD8                           = "\u2467"; /* &#x2467; .. &#x277D; .. CIRCLED DIGIT  8 ❽ */
const SD9                           = "\u2468"; /* &#x2468; .. &#x277E; .. CIRCLED DIGIT  9 ❾ */
const SDA                           = "\u2469"; /* &#x2469; .. &#x277F; .. CIRCLED DIGIT 10 ❿ */
const SDB                           = "\u246A"; /* &#x246A; .. &#x27EB; .. CIRCLED DIGIT 11   */
const SDC                           = "\u246B"; /* &#x246B; .. &#x27EC; .. CIRCLED DIGIT 12   */
const SDD                           = "\u246C"; /* &#x246C; .. &#x27ED; .. CIRCLED DIGIT 13   */
const SDE                           = "\u246D"; /* &#x246D; .. &#x27EE; .. CIRCLED DIGIT 14   */
const SDF                           = "\u246E"; /* &#x246E; .. &#x27EF; .. CIRCLED DIGIT 15   */
const SD0                           = "\u24EA"; /* &#x24EA; .. &#x2775; .. CIRCLED DIGIT  0   */

const SDX = [ SD0 ,SD1 ,SD2 ,SD3 ,SD4 ,SD5 ,SD6 ,SD7 ,SD8 ,SD9 ,SDA ,SDB ,SDC ,SDD ,SDE ,SDF ];

const SYMBOL_E                      = "\u2026";
const SYMBOL_LF                     = "\u21B5";
const SYMBOL_U                      = "\u25B2";
const SYMBOL_R                      = "\u25B6";
const SYMBOL_D                      = "\u25BC";
const SYMBOL_L                      = "\u25C0";
const SYMBOL_CLOSEPIN               = "\u2715"; /* ✕ */
const SYMBOL_CR                     = "\u2943";
const SYMBOL_PUSH_PIN               = "\uD83D\uDCCC";
const SYMBOL_TOFU                   = "\uFFFD";

/*}}}*/
/* SYMBOL [HTMLElement] {{{*/
/*
const SYMBOL_PAT_BAG              = "<span class='sym_bag'>"+     SYMBOL_SCISSORS         +"</span>";
const SYMBOL_OFF_BAG              = "<span class='sym_bag'>"+     SYMBOL_HOURGLASS        +"</span>";
const SYMBOL_BAK_BAG              = "<span class='sym_bag'>"+     SYMBOL_WATCH            +"</span>";
const SYMBOL_BIN_BAG              = "<span class='sym_bag'>"+     SYMBOL_HEAVY_BALLOT     +"</span>";
*/

const SYMBOL_SEL                  = "<span class='sym_showing'>"+ SYMBOL_CHECK_MARK       +"</span> show";
const SYMBOL_HID                  = "<span class='sym_hiding' >"+ SYMBOL_CLEAR_SCREEN     +"</span> hide";
const SYMBOL_BAK                  = "<span class='sym_backing'>"+ SYMBOL_SQUARE_HFILL     +"</span> save";
const SYMBOL_ALT                  = "<span class='sym_alting'>" + SYMBOL_WHITE_SQUARE     +"</span> save";

const SYMBOL_COLIDE               =   "<em class='sym_colide' >"+ SYMBOL_WARNING          +"</em> SELECTED";
const SYMBOL_DISMISS              =   "<em class='sym_dismiss'>"+ SYMBOL_LEFT_RIGHT_ARROW +"</em> DISMISS" ;

const SYMBOL_CLEAR_BAK            =   "<em class='sym_backing'>"+ SYMBOL_BLACK_CIRCLE     +"</em> <em class='want cc2'>CLRBAK</em>";
const SYMBOL_CLEAR_BIN            =   "<em class='sym_binning'>"+ SYMBOL_BLACK_CIRCLE     +"</em> <em class='want cc0'>CLRBIN</em>";

const SYMBOL_UPDATE               =   "<em class='sym_update' >"+ SYMBOL_EXCLAM_QUESTION  +"</em> <em class='want cc3'>ASSIGN</em>";
const SYMBOL_STAGE                =   "<em class='sym_staged' >"+ SYMBOL_DBL_EXCLAM       +"</em> <em class='have cc6'>STAGED</em>"; /* @see phase_color */
const SYMBOL_RESULT               =   "<em class='sym_result' >"+ SYMBOL_CONSTRUCTION     +"</em> <em class='have cc4'>RESULT</em>"; /* @see phase_color */

const SYMBOL_BAGGER               =   "<em class='sym_bagger' >"+ SYMBOL_BLACK_SMILEY     +"</em>";
const SYMBOL_DOCKER               =   "<em class='sym_docker' >"+ SYMBOL_BLACK_SMILEY     +"</em>";

/* }}} */
/* SYMBOL [sticky] {{{*/
const SYMBOL_STICKY_FIX           = SYMBOL_HEAVY_BALLOT;
const SYMBOL_STICKY_PASTE         = SYMBOL_DOWN_ARROW;
const SYMBOL_STICKY_PEN           = SYMBOL_PENCIL;
const SYMBOL_STICKY_REFLOW        = SYMBOL_BLMED_CIRCLE;
const SYMBOL_STICKY_REFONT        = SYMBOL_FONT_SIZE;
const SYMBOL_STICKY_RESIZE        = SYMBOL_RESIZE;

/*}}}*/
/* CSS */
/* CCX {{{*/
const CSS_CC1                   = "cc1";
const CSS_CC2                   = "cc2";
const CSS_CC3                   = "cc3";
const CSS_CC4                   = "cc4";
const CSS_CC5                   = "cc5";
const CSS_CC6                   = "cc6";
const CSS_CC7                   = "cc7";
const CSS_CC8                   = "cc8";
const CSS_CC9                   = "cc9";
const CSS_CC0                   = "cc0";

const CCX_CLASSLIST = [
      CSS_CC1
    , CSS_CC2
    , CSS_CC3
    , CSS_CC4
    , CSS_CC5
    , CSS_CC6
    , CSS_CC7
    , CSS_CC8
    , CSS_CC9
    , CSS_CC0
];
/*}}}*/
/*{{{*/
const CSS_DBLCLICK        = "dblclick";
const CSS_LONGPRESS       = "longpress";
const CSS_MISCLICK        = "misclick";
const CSS_MISCLICK1       = "misclick1";
const CSS_MISCLICK2       = "misclick2";
const CSS_MISCLICK3       = "misclick3";

const CSS_HAS_FOCUS             = "has_focus";
const CSS_SELECTION_ENDING      = "selection_ending";
const CSS_SELECTION_PROGRESS    = "selection_progress";

const CSS_DATA_PATTERN          = "data_pattern";

const CSS_ANCHOR_BACK           = "anchor_back";
const CSS_ANCHOR_CHILD          = "anchor_child";
const CSS_ANCHOR_CLOSEST        = "anchor_closest";
const CSS_ANCHOR_DETACHED       = "anchor_detached";
const CSS_ANCHOR_LEFT           = "anchor_left";
const CSS_ANCHOR_NODE           = "anchor_node";
const CSS_ANCHOR_NOT_FOUND      = "anchor_not_found";
const CSS_ANCHOR_RIGHT          = "anchor_right";
const CSS_ANCHOR_UNSET          = "anchor_unset";

const CSS_CORNER_U_R            = "corner_u_r";
const CSS_CORNER_R_D            = "corner_r_d";
const CSS_CORNER_D_L            = "corner_d_l";
const CSS_CORNER_L_U            = "corner_l_u";

const CSS_BOTTOM                = "bottom";
const CSS_CHECKED               = "checked";
const CSS_DOC_TOOL              = "doc_tool";
const CSS_GUTTER                = "gutter";
const CSS_LEFT                  = "left";
const CSS_LINE_NUM              = "line_num";
const CSS_RIGHT                 = "right";
const CSS_SLOW_LAYOUT           = "slow_layout";
const CSS_SLOW_REGROUP          = "slow_regroup";
const CSS_STICKY_RAISED         = "sticky_raised";
const CSS_TOP                   = "top";

const CSS_EVENT_LOG             = "event_log";
const CSS_STICKY_LOG            = "sticky_log";
const CSS_SCROLLING             = "scrolling";

const CSS_MAILTO                = "mailto";
const CSS_FLY_CLIPBOARD         = "import_clipboard";

const DOM_EDITING               = "dom_editing"   ;
const EDIT_OR_STAGE             = "edit_or_stage" ;
const HOTSPOT_RADIUS            = 18;
const TOOLS_SCROLL              = "tools_scroll"; /* (tools scrolling with the document) .. (quite a mess! .. not really usefull) */

/*}}}*/
/* DISPLAY {{{*/
const CSS_DARK                  = "dark";

const CSS_DEFERED               = "defered";
const CSS_HIDDEN                = "hidden";
const CSS_HIDING                = "hiding";
const CSS_ON_GRID               = "on_grid";
const CSS_VIEWABLE              = "viewable";

const CSS_BORDERING             = "bordering";
const CSS_HOVERING              = "hovering";
const CSS_NEARING               = "nearing";

const CSS_COLLAPSING            = "collapsing";
const CSS_DIMMED                = "dimmed";
const CSS_DIMMED_OFF            = "dimmed_off";
const CSS_FIXED                 = "fixed";
const CSS_ON_CONTAINER          = "on_container";
const CSS_PASTE_TARGET          = "paste_target";
const CSS_PINNED                = "pinned";
const CSS_PRESSED               = "pressed";
const CSS_PULSING               = "pulsing";
const CSS_QUICK_MOVE            = "quick_move";
const CSS_RESIZE_CAP            = "resize_cap";
const CSS_RESIZING              = "resizing";
const CSS_SEEK_TARGET           = "seek_target";
const CSS_STICKY_MSG_EDIT       = "sticky_msg_edit";
const CSS_STICKY_RING           = "sticky_ring";
const CSS_TOUCHED               = "touched";
const CSS_WORK_PANEL            = "work_panel";

const CSS_TRAPPED               = "trapped";
/*}}}*/
/* PANEL ZINDEX {{{*/
const TOOLS_MAX                = 30;
const ZINDEX_SHADOW_HOST       = 2147483647;
/*{{{
const ZINDEX_SHADOW_HOST       = 100;
}}}*/
const FONT_SIZE_SHADOW_HOST    = "12px";

const ZINDEX_STICKY_TOOL_ZERO  =                                          10;
const ZINDEX_PINNED_PANEL_ZERO =                                          20;
const ZINDEX_TOOL_PANEL_ZERO   = ZINDEX_PINNED_PANEL_ZERO + TOOLS_MAX; /* 50 */
const ZINDEX_BELOW_TOOLS       = ZINDEX_TOOL_PANEL_ZERO              ; /* 50 */
const ZINDEX_ABOVE_TOOLS       = ZINDEX_BELOW_TOOLS + TOOLS_MAX      ; /* 80 */
const ZINDEX_ON_GRID           = ZINDEX_ABOVE_TOOLS                  ; /* 80 */
/*}}}*/
/* SEEK_ZONE {{{*/
const CSS_CAPTION_D             = "caption_D";
const CSS_CAPTION_U             = "caption_U";

const CSS_SEEKER_HANDLE         = "seeker_handle";

const CSS_SEEKER_PU2_LOOK_UP    = "seeker_PU2_look_up";
const CSS_SEEKER_PU3_LOOK_RIGHT = "seeker_PU3_look_right";
const CSS_SEEKER_PU4_LOOK_DOWN  = "seeker_PU4_look_down";
const CSS_SEEKER_PU5_LOOK_LEFT  = "seeker_PU5_look_left";

const CSS_ON_HIDDEN_NODE        = "on_hidden_node";
const CSS_STICKY_TOOL           = "sticky";
/*}}}*/
/* SETTINGS */
/*{{{*/

const FLOATLOG                  = "FLOATLOG";

const USER_LANG                 = "user_lang";
const DOM_FREEZE                = "dom_freeze";

const ANCHOR_FREEZE             = "anchor_freeze";
const CONTAINERS_HI             = "containers_hi";
const SCROLL_SMOOTH             = "scroll_smooth";

const FLY_DIV_MAGNIFIED         = "fly_div_magnified";
const PIVOT_MAGNIFIED           = "pivot_magnified";

const THEME_DARK                = "theme_dark"  ;

const TOOLS_TIER2               = "tools_tier2";

/*_TOOLS_PANEL_BEHAVIOR______________________*/
const TOOLS_TRAP                = "tools_trap";

/*_MONITORING_EVENTS_LOCATION________________*/
const PIN_SEEKSPOT              = "pin_seekspot" ;
const SHOW_SEEKZONE             = "show_seekzone";
const LOG_SEEKSPOT              = "log_seekspot" ;

const REMOVE_ADS                = "remove_ads"   ;
const SPLIT_WOT                 = "split_wot"    ;
const LINES_WOT                 = "lines_wot"    ;

const OVERFLOW_VISI             = "overflow_visi";

const DETAILS_CLOSE             = "details_close";
const DETAILS_OPEN              = "details_open" ;
const DETAILS_RADIO             = "details_radio";

/*_SELECTION_SEQUENCE_DIRECTION____________*/
const SEL_BACK                  = "sel_back";

/*_WORKING_WITH_SELECTIONS________________________*/
const WORDING                   = "wording"        ;
const WORDS_BAG_ROT             = "words_bag_rot"  ;
const WORDS_DROP_CASE           = "words_drop_case";
const WORDS_DROP_ING            = "words_drop_ing" ;
const WORDS_DROP_S              = "words_drop_s"   ;
const WORDS_EXACT               = "words_exact"    ;
const WORDS_FILTER              = "words_filter"    ;
const WORDS_HEAD_TAIL           = "words_head_tail";
const WORDS_OPCYCLE             = "words_opcycle"  ;
const WORDS_RECYCLE             = "words_recycle"  ;
const WORDS_SEGMENT             = "words_segment"  ;

/*_DOC_EMBEDDED_TOOLS_*/
const SQUEEZE_CYCLE             = "squeeze_cycle";
const SQUEEZE_CYCLE_CLASSLIST   = ["squeezed_1_0","squeezed_0_5","squeezed_0_1"];

/*}}}*/
/* MARGINS {{{*/
const STICKY_TOOL_MARGIN_U = 128;
const STICKY_TOOL_MARGIN_R = 255;
const STICKY_TOOL_MARGIN_D = 128;
const STICKY_TOOL_MARGIN_L = 255;

const SCROLLBAR_WIDTH = 16;
const VIEWPORT_MARGIN =
    {     top    : 16
        , left   : 16
        , right  : 16 + SCROLLBAR_WIDTH
        , bottom : 32 + SCROLLBAR_WIDTH
    };

/*}}}*/
/* HIDE EDIT SITE PAGE {{{*/
/*_DOM_HIDE_EDITING_________________________*/
const DENY_OR_ALLOW         = "deny_or_allow" ;
const DOM_HIDE1_RESET       = "dom_hide1_reset";
const DOM_HIDE1_UNDO        = "dom_hide1_undo";
const MARKED_TO_HIDE        = "marked_to_hide";
const MASK_OR_HIDE          = "mask_or_hide"  ;
const SITE_OR_PAGE          = "site_or_page"  ;

/*}}}*/
/*__DURATION______________________________ {{{*/
const CLICK_DURATION       =                500;
const MISCLICK_TOUCH_MS    = CLICK_DURATION / 4;
const MISCLICK_MOUSE_MS    = CLICK_DURATION / 4;

const DBLCLICK_DELAY       = CLICK_DURATION;
const DBLTOUCH_DELAY       = CLICK_DURATION / 2;

const MODAL_CLICK_EARLY_MS = CLICK_DURATION * 4;

const LONG_PRESS_DURATION  = CLICK_DURATION * 2;

const DRAG_MAX_MS          = CLICK_DURATION * 2;
const DRAG_MIN_MS          = CLICK_DURATION / 4;

const T_STANDBY1_DELAY      = 1.5 * CLICK_DURATION;
/*}}}*/
const WORDS_SUFFIXES          = ["s", "ing", "case" ];
const WORDS_SUFFIXE_MIN_LEN   = { s:3      ,  ing:6 }; /* needs at least this number of chars to still make sense */
const WORDS_MUST_NOT_END_WITH = { s:"ss"            }; /* this word ending in is not likely a suffix */

const DOC_TOOLS_ID            = "doc_tools";

/* EXPORT */
/*{{{*/

    return {
        /* MODULE ID */
        DOM_DATA_JS_ID , DOM_DATA_JS_TAG
        , DOC_TOOLS_ID
        , WORDS_SUFFIXES
        , WORDS_SUFFIXE_MIN_LEN
        , WORDS_MUST_NOT_END_WITH
        /* SPECIAL CHARACTERS {{{*/
        , APOS
        , DOUBLE_QUOTE
        , TAB
        , LF
        , CR

        /*}}}*/
        /* CSS {{{*/
        , CCX_CLASSLIST

        , CSS_DBLCLICK
        , CSS_LONGPRESS
        , CSS_MISCLICK
        , CSS_MISCLICK1
        , CSS_MISCLICK2
        , CSS_MISCLICK3

        , CSS_HAS_FOCUS
        , CSS_SELECTION_ENDING
        , CSS_SELECTION_PROGRESS
        , CSS_DATA_PATTERN

        , CSS_ANCHOR_BACK
        , CSS_ANCHOR_CHILD
        , CSS_ANCHOR_CLOSEST
        , CSS_ANCHOR_DETACHED
        , CSS_ANCHOR_LEFT
        , CSS_ANCHOR_NODE
        , CSS_ANCHOR_NOT_FOUND
        , CSS_ANCHOR_RIGHT
        , CSS_ANCHOR_UNSET

        , CSS_CORNER_U_R
        , CSS_CORNER_R_D
        , CSS_CORNER_D_L
        , CSS_CORNER_L_U

        , CSS_BOTTOM
        , CSS_CHECKED
        , CSS_DOC_TOOL
        , CSS_GUTTER
        , CSS_LEFT
        , CSS_RIGHT
        , CSS_SLOW_LAYOUT
        , CSS_SLOW_REGROUP
        , CSS_STICKY_RAISED
        , CSS_TOP

        , CSS_EVENT_LOG
        , CSS_STICKY_LOG
        , CSS_SCROLLING

        , CSS_CAPTION_D
        , CSS_CAPTION_U
        , CSS_ON_HIDDEN_NODE
        , CSS_SEEKER_HANDLE
        , CSS_SEEKER_PU2_LOOK_UP
        , CSS_SEEKER_PU3_LOOK_RIGHT
        , CSS_SEEKER_PU4_LOOK_DOWN
        , CSS_SEEKER_PU5_LOOK_LEFT
        , CSS_STICKY_TOOL

        , CSS_LINE_NUM

        , DOM_EDITING
        , EDIT_OR_STAGE
        , HOTSPOT_RADIUS
        , TOOLS_SCROLL

        , TOOLS_MAX
        , ZINDEX_SHADOW_HOST
        , FONT_SIZE_SHADOW_HOST
        , ZINDEX_STICKY_TOOL_ZERO
        , ZINDEX_PINNED_PANEL_ZERO
        , ZINDEX_TOOL_PANEL_ZERO
        , ZINDEX_BELOW_TOOLS
        , ZINDEX_ABOVE_TOOLS
        , ZINDEX_ON_GRID

        /*}}}*/
        /* SYM {{{*/

        , SAU
        , SAR
        , SAD
        , SAL

        , SHV
        , SYN
        , SBS

        , SD0
        , SD1
        , SD2
        , SD3
        , SD4
        , SD5
        , SD6
        , SD7
        , SD8
        , SD9
        , SDA
        , SDB
        , SDC
        , SDD
        , SDE
        , SDF
        , SDX
        /*}}}*/
        /* SYMBOL select {{{*/
        , SYMBOL_U
        , SYMBOL_R
        , SYMBOL_D
        , SYMBOL_L
        , SYMBOL_E
        , SYMBOL_LF
        , SYMBOL_CR
        , SYMBOL_TOFU
        , SYMBOL_PUSH_PIN
        , SYMBOL_CLOSEPIN

        /*}}}*/
        /* SYMBOL sticky {{{*/
        , SYMBOL_STICKY_FIX
        , SYMBOL_STICKY_PASTE
        , SYMBOL_STICKY_PEN
        , SYMBOL_STICKY_REFLOW
        , SYMBOL_STICKY_REFONT
        , SYMBOL_STICKY_RESIZE

        /*}}}*/
        /* SYMBOL {{{ */
        , SYMBOL_CROSSED_SWORDS
        , SYMBOL_LEFT_DBL_ANGLE
        , SYMBOL_RIGHT_DBL_ANGLE
        , SYMBOL_ERASE_LEFT
        , SYMBOL_BACKSPACE
        , SYMBOL_DELETE
        , SYMBOL_UP_POINTING
        , SYMBOL_RIGHT_POINTING
        , SYMBOL_LEFT_POINTING

        , SYMBOL_EMPTY
        , SYMBOL_FUNCTION

        , SYMBOL_BLACK_RIGHT_ARROW
        , SYMBOL_NW_ARROW
        , SYMBOL_RIGHT_PAIR_ARROW
        , SYMBOL_RIGHT_WAVE_ARROW
        , SYMBOL_ROUND_RIGHT_ARROW
        , SYMBOL_UP_LEFT_ARROW

        , SYMBOL_ANCHOR
        , SYMBOL_BLACK_SUN
        , SYMBOL_BULB
        , SYMBOL_CHECK_MARK
        , SYMBOL_CIRCLE
        , SYMBOL_CIRCLED_PLUS
        , SYMBOL_CIRCLE_ARROW
        , SYMBOL_DIRECT_HIT
        , SYMBOL_DOUBLE_VBAR
        , SYMBOL_DOWN_ARROW
        , SYMBOL_DOWN_LEFT_ARROW
        , SYMBOL_DOWN_POINTING
        , SYMBOL_ELLIPSIS
        , SYMBOL_GEAR
        , SYMBOL_THEME
        , SYMBOL_HEAVY_RIGHT_ARROW
        , SYMBOL_LEFT_ARROW
        , SYMBOL_LEFT_ARROW_HOOK
        , SYMBOL_LEFT_CHEVRON
        , SYMBOL_LOWER_RIGHT
        , SYMBOL_MENU
        , SYMBOL_MOON
        , SYMBOL_NOT_CHECKED
        , SYMBOL_NO_ENTRY
        , SYMBOL_PARAGRAPH
        , SYMBOL_RECYCLE
        , SYMBOL_RELOAD
        , SYMBOL_RIGHT_ANGLE_BRACKET
        , SYMBOL_RIGHT_ARROW
        , SYMBOL_RIGHT_ARROW_HOOK
        , SYMBOL_RIGHT_DBL_A_BRK
        , SYMBOL_RIGHT_LEFT_ARROW
        , SYMBOL_R_CLOS_ARROW
        , SYMBOL_SAILBOAT
        , SYMBOL_SECTION
        , SYMBOL_TRAFFIC_LIGHT
        , SYMBOL_UPPER_LEFT
        , SYMBOL_UP_AND_DOWN_ARROW
        , SYMBOL_UP_ARROW
        , SYMBOL_UP_DOWN_ARROW
        , SYMBOL_VERTICAL_RECT


        , SYMBOL_CLIPBOARD
        , SYMBOL_WASTEBASKET
        , SYMBOL_SCISSORS

        , SYMBOL_TOOLS_TIER2_OFF
        , SYMBOL_TOOLS_TIER2_ON

        , SYMBOL_WORDING_IS_ON
        , SYMBOL_WORDING_IS_OFF

        , SYMBOL_THEME_DARK_IS_OFF
        , SYMBOL_THEME_DARK_IS_ON

        , SYMBOL_STAGE1_INPUT
        , SYMBOL_STAGE2_ACTION
        , SYMBOL_STAGE3_RESULT

        , SYMBOL_EYE

        , SYMBOL_BLACK_SQUARE
        , SYMBOL_SQUARE_HFILL
        , SYMBOL_WHITE_SQUARE

        , SYMBOL_LEFT_HALF_BLACK
        , SYMBOL_RIGHT_HALF_BLACK
        , SYMBOL_WHITE_MEDIUM_SQUARE
        , SYMBOL_WHITE_SMALL_SQUARE
        , SYMBOL_BLACK_MEDIUM_SQUARE
        , SYMBOL_BLACK_SMALL_SQUARE

        , SYMBOL_BALLOT_CHECK
        , SYMBOL_CLEAR_SCREEN
        , SYMBOL_CLOCKWISE_OPEN_CIRCLE
        , SYMBOL_HEAVY_BALLOT
        , SYMBOL_REPLACEMENT_CHAR

        , SYMBOL_PARTNERSHIP
        , SYMBOL_WHITE_SMILEY
        , SYMBOL_BLACK_SMILEY
        , SYMBOL_FROWNING_FACE
        , SYMBOL_TRUCK
        , SYMBOL_WRITING_HAND
        , SYMBOL_BLACK_L_HAND
        , SYMBOL_BLACK_R_HAND
        , SYMBOL_WHITE_L_HAND

        , SYMBOL_DBL_EXCLAM
        , SYMBOL_EXCLAM_QUESTION
        , SYMBOL_WARNING
        , SYMBOL_LEFT_RIGHT_ARROW

        , SYMBOL_STAR
        , SYMBOL_CLOUD
        , SYMBOL_HOURGLASS
        , SYMBOL_WATCH

        , SYMBOL_BLACK_CIRCLE
        , SYMBOL_BLMED_CIRCLE
        , SYMBOL_LARGE_CIRCLE
        , SYMBOL_WHITE_CIRCLE

        , SYMBOL_UP
        , SYMBOL_RIGHT
        , SYMBOL_DOWN
        , SYMBOL_LEFT

        , SYMBOL_MAILBOX
        , SYMBOL_TRAFFIC
        , SYMBOL_MAGNIFY_LEFT
        , SYMBOL_MAGNIFY_RIGHT
        , SYMBOL_CONSTRUCTION

        , SYMBOL_SEL
        , SYMBOL_HID
        , SYMBOL_BAK
        , SYMBOL_ALT

        , SYMBOL_COLIDE
        , SYMBOL_DISMISS

        , SYMBOL_CLEAR_BAK
        , SYMBOL_CLEAR_BIN

        , SYMBOL_UPDATE
        , SYMBOL_STAGE
        , SYMBOL_RESULT

        , SYMBOL_BAGGER
        , SYMBOL_DOCKER

        /* }}} */
        /* DISPLAY {{{*/
        , CSS_DARK

        , CSS_DEFERED
        , CSS_HIDDEN
        , CSS_HIDING
        , CSS_ON_GRID
        , CSS_VIEWABLE

        , CSS_BORDERING
        , CSS_HOVERING
        , CSS_NEARING

        , CSS_COLLAPSING
        , CSS_FIXED
        , CSS_PINNED
        , CSS_STICKY_MSG_EDIT
        , CSS_STICKY_RING
        , CSS_TOUCHED
        , CSS_WORK_PANEL

        , CSS_DIMMED
        , CSS_DIMMED_OFF
        , CSS_ON_CONTAINER
        , CSS_PASTE_TARGET
        , CSS_PRESSED
        , CSS_PULSING
        , CSS_QUICK_MOVE
        , CSS_RESIZE_CAP
        , CSS_RESIZING
        , CSS_SEEK_TARGET

        , CSS_TRAPPED

        , CSS_MAILTO
        , CSS_FLY_CLIPBOARD

        /*}}}*/
        /* SETTINGS {{{*/

        , FLOATLOG

        , DOM_FREEZE

        , USER_LANG
        , ANCHOR_FREEZE
        , CONTAINERS_HI
        , SCROLL_SMOOTH

        , FLY_DIV_MAGNIFIED
        , PIVOT_MAGNIFIED

        , THEME_DARK

        , TOOLS_TIER2

        /*_TOOLS_PANEL_BEHAVIOR__________________*/
        , TOOLS_TRAP

        /*_MONITORING_EVENTS_LOCATION_______________*/
        , PIN_SEEKSPOT
        , SHOW_SEEKZONE
        , LOG_SEEKSPOT

        , REMOVE_ADS
        , SPLIT_WOT
        , LINES_WOT

        , OVERFLOW_VISI

        , DETAILS_CLOSE
        , DETAILS_OPEN
        , DETAILS_RADIO

        /*_SELECTION_SEQUENCE_DIRECTION________*/
        , SEL_BACK

        /*_WORKING_WITH_SELECTIONS___________________*/
        , WORDING
        , WORDS_BAG_ROT
        , WORDS_DROP_CASE
        , WORDS_DROP_ING
        , WORDS_DROP_S
        , WORDS_EXACT
        , WORDS_FILTER
        , WORDS_HEAD_TAIL
        , WORDS_OPCYCLE
        , WORDS_RECYCLE
        , WORDS_SEGMENT

        /*_DOC_EMBEDDED_TOOLS_*/
        , SQUEEZE_CYCLE
        , SQUEEZE_CYCLE_CLASSLIST

        /* MARGINS */
        , STICKY_TOOL_MARGIN_U
        , STICKY_TOOL_MARGIN_R
        , STICKY_TOOL_MARGIN_D
        , STICKY_TOOL_MARGIN_L

        /* HIDE EDIT SITE PAGE */
        , DENY_OR_ALLOW
        , DOM_HIDE1_RESET
        , DOM_HIDE1_UNDO
        , MARKED_TO_HIDE
        , MASK_OR_HIDE
        , SITE_OR_PAGE

        , SCROLLBAR_WIDTH
        , VIEWPORT_MARGIN

        /* DURATION */
        , CLICK_DURATION
        , DBLCLICK_DELAY
        , DBLTOUCH_DELAY
        , DRAG_MAX_MS
        , DRAG_MIN_MS
        , LONG_PRESS_DURATION
        , MISCLICK_MOUSE_MS
        , MISCLICK_TOUCH_MS
        , MODAL_CLICK_EARLY_MS
        , T_STANDBY1_DELAY

        /*}}}*/
    };

/*}}}*/
}());
