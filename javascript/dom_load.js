/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_load_js                                                              │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/


/* jshint esversion: 9, boss:true {{{*/
/* eslint-disable no-alert */
/* eslint-disable no-redeclare */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */

/* globals send_IPC dom_ipc t_load */
/* globals console, alert, window, document, setTimeout */
/*}}}*/
/* DOM_LOAD_ID {{{*/
const DOM_LOAD_ID    = "dom_load";
const DOM_LOAD_TAG   =  DOM_LOAD_ID +" (230710:18h:58)";
/*}}}*/
let dom_load_js = (function() {
"use strict";
/* CSS HTML IDs {{{*/
let DOM_HOST_CSS_ID     = "dom_host_css";
let DOM_TOOLS_CSS_ID    = "dom_tools_css";
let DOM_GRID_CSS_ID     = "dom_grid_css";
let DOM_TOOLS_HTML_ID   = "dom_tools_html";
/*}}}*/
/* TOOLS ALREADY LOADED {{{*/
if( document.getElementById("dom_tools_html_tag") ) {
    let   msg = "*** TOOLS ALREADY LOADED";
    try { msg += "\n*** DOM_TOOLS_JS_ID\n*** "+DOM_LOAD_ID ; alert(msg); } catch(ex) { console.log(msg); }
    return null;
}
/*}}}*/
/* CONSOLE TEMPLATE TO BE IMPLEMENTED BY EMBEDDING LAYER {{{*/
let   DOUBLE_QUOTE  = String.fromCharCode(34);
let   LF            = String.fromCharCode(10);
let   CR            = String.fromCharCode(13);
let   BACKSLASH     = String.fromCharCode(92);
let   FORESLASH     = String.fromCharCode(47);
let   CS            = "font-size:150%; font-weight:900; border:1px solid gray; color:yellow; background-color:navy; padding:0 .5em 0 .5em; border-radius:1em 1em 1em 1em; background:linear-gradient(to bottom, #000 0%, #223 50%, #000 100%);";
let   console_clear = function(  msg=null) { try { console.clear(); if(msg) console.warn("%c=== CLEARED BY: "+msg,CS);                 } catch(ex) {} };
let   console_dir   = function(o,msg=null) { try {                  if(msg) console.log (          "%c"+msg      ,CS); console.dir(o); } catch(ex) {} };
let   console_log   = function(  msg     ) { try {                          console.log (               msg         );                 } catch(ex) {} };
let   console_warn  = function(  msg=null) { try {                          console.warn(               msg         );                 } catch(ex) {} };
/*}}}*/
/* eslint-enable  no-alert */
/* eslint-enable  no-redeclare */
/* eslint-enable  no-unused-labels */
/* eslint-enable  no-unused-vars */

  /**    1 TOOLS  HTML dom_tools_html_data {{{*/
/*
../script/dom_tools.html
*/
let dom_tools_html_data = `
<!--INLINE{{{-->
<!DOCTYPE html>
 <span id = "dom_tools_html_tag" style="display:none">dom_tools_html (221124:17h:59)</span>

 <!-- hotspot {{{-->
 <div   id="hotspot"       class="hotspot_frame"            title="hotspot">
  <div  id="hotwave"       class="hotwave">
   <div id="hotring"       class="hotring">&nbsp;</div>
  </div>
  <div id="hotspot_c">&#x00BB;</div>
 </div>
 <!--}}}-->
 <!-- headsup {{{ -->
 <div id="headsup"         class="transcript hidden"        title="headsup">

  <em  id="user_lang"      class="toolbag_button cc9"       title="user_lang">&nbsp;</em>
  <em  id="dom_freeze"     class="toolbag_button cc9"       title="dom_freeze">&#x2744;</em>

  <em  id="thumb_p"                                         title="thumb_p">&#x0020;</em>
  <em  id="theme_dark"     class="toolbag_button cc8"       title="theme_dark">LIGHT</em>
  <em  id="wording"        class="toolbag_button cc3"       title="wording">WORDING</em>
  <em  id="anchor_freeze"  class="toolbag_button cc9"       title="anchor_freeze">&#x26D4;</em>
  <em  id="containers_hi"  class="toolbag_button cc9"       title="containers_hi">&#x00A7;</em>
  <em  id="overflow_visi"  class="toolbag_button cc9"       title="overflow_visi">&nbsp;</em>
  <em  id="scroll_smooth"  class="toolbag_button cc9"       title="scroll_smooth">&nbsp;</em>

  <em  id="details_close"  class="toolbag_button cc9"       title="details_close">&#x25B2;</em>
  <em  id="details_open"   class="toolbag_button cc9"       title="details_open" >&#x25BC;</em>
  <em  id="details_radio"  class="toolbag_button cc9"       title="details_radio">&nbsp;</em>

  <em  id="tools_tier2"    class="toolbag_button cc9"       title="tools_tier2">&#x2630;</em>

<!--{{{
  <em  id="show_seekzone"  class="toolbag_button cc9"       title="show_seekzone">&nbsp;</em>
  <em  id="pin_seekspot"   class="toolbag_button cc9"       title="pin_seekspot">&nbsp;</em>
  <em  id="log_seekspot"   class="toolbag_button cc9"       title="log_seekspot">&nbsp;</em>
}}}-->

  <em  id="remove_ads"     class="toolbag_button cc9"       title="remove_ads">&nbsp;</em>
  <em  id="split_wot"      class="toolbag_button cc9"       title="split_wot">&nbsp;</em>
  <em  id="lines_wot"      class="toolbag_button cc9"       title="lines_wot">&nbsp;</em>

 </div>
 <!-- }}} -->

 <!-- pat_bag {{{ -->
  <div id="pat_bag"           class="transcript hidden bag" title="PAT BAG"></div>
 <!-- }}} -->
 <!-- headsup_w {{{ -->
 <div    id="headsup_w"       class="transcript hidden"     title="headsup_w">
  <input id="words_filter"    type="text"                   title="words_filter"/>
  <em    id="words_exact"     class="toolbag_button cc3"    title="words_exact">&#x2261;</em>
  <em    id="words_segment"   class="toolbag_button cc4"    title="words_segment">&#x2282;</em>
  <em    id="words_head_tail" class="toolbag_button cc5"    title="words_head_tail">&#x2208;</em>
  <em    id="words_opcycle"   class="toolbag_button cc9"    title="words_opcycle">&#x27F3;</em>
  <em    id="words_recycle"   class="toolbag_button cc7"    title="words_recycle">&#x267B;</em>
  <em    id="words_bag_rot"   class="toolbag_button cc0"    title="words_bag_rot">&#x2026;</em>
  <em    id="words_drop_case" class="toolbag_button cc8"    title="words_drop_case">&nbsp;</em>
  <em    id="words_drop_ing"  class="toolbag_button cc8"    title="words_drop_ing">&nbsp;</em>
  <em    id="words_drop_s"    class="toolbag_button cc8"    title="words_drop_s">&nbsp;</em>
  <div   id="words_regex"     class="txt_log"               >words_regex</div>
 </div>
 <!-- }}} -->
 <!-- sel_bag {{{ -->
  <div id="sel_bag"           class="transcript hidden bag" title="sel_bag"><span class="seeker_handle"></span></div>
 <!-- }}} -->

 <!-- headsup_ds {{{ -->
 <div id="headsup_ds"         class="transcript hidden"     title="headsup_ds">
  <em  id="tools_trap"        class="toolbag_button"        title="tools_trap">&#x00BB;</em>
  <em  id="tools_scroll"      class="toolbag_button"        title="tools_scroll">&#x2693;</em>
  <em  id="site_or_page"      class="toolbag_button cc9"    title="site_or_page">&nbsp;</em>
  <em  id="mask_or_hide"      class="toolbag_button cc9"    title="mask_or_hide">&nbsp;</em>
  <em  id="edit_or_stage"     class="toolbag_button cc9"    title="edit_or_stage">&nbsp;</em>
  <em  id="dom_hide1_reset"   class="toolbag_button cc9"    title="dom_hide1_reset">&nbsp;</em>
  <em  id="dom_hide1_undo"    class="toolbag_button cc9"    title="dom_hide1_undo">…</em>
  <em  id="deny_or_allow"     class="toolbag_button cc8"    title="deny_or_allow">&nbsp;</em>
<!--{{{
  <em  id="targeteer"         class="toolbag_button cc9"    title="targeteer">&nbsp;</em>
  <em  id="target_01"         class="toolbag_button cc1"    title="target_01">&nbsp;</em>
  <em  id="target_02"         class="toolbag_button cc2"    title="target_02">&nbsp;</em>
  <em  id="target_03"         class="toolbag_button cc3"    title="target_03">&nbsp;</em>
}}}-->
 </div>
 <!-- }}} -->
 <!-- headsup_bw {{{ -->
 <div id="headsup_bw"          class="transcript hidden"    title="headsup_bw">
  <em id="headsup_bw_value"    class="cc10">BODY WIDTH</em><br>
  <em class="cc1"> 480</em><em class="cc2"> 640</em><em class="cc3"> 780</em><br>
  <em class="cc4"> 960</em><em class="cc5">1024</em><em class="cc6">1200</em><br>
  <em class="cc7">1440</em><em class="cc8">1600</em><em class="cc9">1980</em><br>
 </div>
 <!-- }}} -->
 <!-- headsup_bz {{{ -->
 <div id="headsup_bz"          class="transcript hidden"    title="headsup_bz">
  <em id="headsup_bz_value"     class="cc10">BODY ZOOM</em><br>
  <em class="cc1">  70%</em><em class="cc2" >  80%</em><em class="cc3">  90%</em><br>
  <em class="cc1"> 100%</em><em class="cc2" > 110%</em><em class="cc3"> 120%</em><br>
  <em class="cc1"> 130%</em><em class="cc2" > 150%</em><em class="cc3"> 160%</em><br>
  <em class="cc1"> 180%</em><em class="cc2" > 200%</em><em class="cc3"> 220%</em><br>
 </div>
 <!-- }}} -->
 <!-- headsup_fs {{{ -->
 <div id="headsup_fs"          class="transcript hidden"    title="headsup_fs">
  <em id="headsup_fs_value"     class="cc10">BODY FONT SIZE</em><br>
  <em class="cc1">  70%</em><em class="cc2" >  80%</em><em class="cc3">  90%</em><br>
  <em class="cc1"> 100%</em><em class="cc2" > 110%</em><em class="cc3"> 120%</em><br>
  <em class="cc1"> 130%</em><em class="cc2" > 140%</em><em class="cc3"> 150%</em><br>
  <em class="cc1"> 160%</em><em class="cc2" > 170%</em><em class="cc3"> 180%</em><br>
  <em class="cc1"> 190%</em><em class="cc2" > 200%</em><em class="cc3"> 210%</em><br>
 </div>
 <!-- }}} -->

 <!-- dom_traversal {{{ -->
 <div id="dom_traversal"   class="transcript hidden"        title="dom_traversal">
 <!-- NodeIterator TreeWalker childNodes tagNodes {{{ -->
  <em class = "toolbag_button cc5">NodeIterator</em><br>
  <em class = "toolbag_button cc6">TreeWalker</em><br>
  <em class = "toolbag_button cc7">childNodes</em><br>
  <em class = "toolbag_button cc7">tagNodes</em><br>

  <em  id="show_seekzone"  class="toolbag_button cc9"       title="show_seekzone">&nbsp;</em>
  <em  id="pin_seekspot"   class="toolbag_button cc9"       title="pin_seekspot">&nbsp;</em>
  <em  id="log_seekspot"   class="toolbag_button cc9"       title="log_seekspot">&nbsp;</em>
  <!-- }}} -->
  <!-- tools_node {{{ -->
  <table>
   <tr>
    <th>node</th>
    <td>
     <input id="tools_node"     type="text"                title="tools_node"/>
     <span class="cc2">html</span>
     <span class="cc3">head</span>
     <span class="cc4">body</span>
    </td>
   </tr>
  </table>
  <!-- }}} -->
 </div>
 <!-- }}} -->
 <!-- test_panel: RELOAD CLEAR t_log_regex t_log_behavior - (onclick would not care for has_moved) {{{ -->
 <div id="test_panel"      class="transcript hidden"     title="test_panel">
  <em id="CLEAR"           class="toolbag_button cc1"    title="CLEAR"     > CLEAR      </em>
  <em id="BEHAVIOR"        class="toolbag_button cc2"    title="BEHAVIOR"  > BEHAVIOR   </em>
  <em id="HIGHLIGHT"       class="toolbag_button cc3"    title="HIGHLIGHT" > HIGHLIGHT  </em>
  <em id="REGEX"           class="toolbag_button cc4"    title="REGEX"     > REGEX      </em>
  <em id="EXPORT"          class="toolbag_button cc6"    title="EXPORT"    > EXPORT     </em>
  <em id="IMPORT"          class="toolbag_button cc5"    title="IMPORT"    > IMPORT     </em>
  <em id="RELOAD"          class="toolbag_button cc7"    title="RELOAD"    >&#x21BB;<br>RELOAD<br>&#x21BB;</em>
 </div>
 <!-- }}} -->

  <!-- dev_log_map {{{-->
  <div id="dev_log_map"    class="transcript hidden"     title="dev_log_map"
   >
   dev_log_map placeholder:<br>
   <i class="todo">..should have been populated by <em>dom_tools.sync_logging</em> with the value of logging</i>

  </div>
  <!-- }}} -->
 <!-- dom_load_tags (placeholder) {{{ -->
 <div id="dom_load_tags"   class="transcript hidden"     title="dom_load_tags"
  >
  dom_load_tags placeholder:<br />
  <i class="todo">...should have been populated by <em>dom_tools.show_tags</em> with the value of DOM_LOAD_TAG</i>

 </div>
 <!-- }}} -->

 <!-- transcript1 {{{ -->
 <div id="transcript1"     class="transcript hidden cleardiv"  title="transcript1"></div>
 <!-- }}} -->
 <!-- transcript2 {{{ -->
 <div id="transcript2"     class="transcript hidden cleardiv"  title="transcript2"></div>
 <!-- }}} -->

 <!-- pivspot {{{-->
 <div   id="pivspot"       class="hidden"                      title="pivspot">
   <div id="pivspot_c">&#x00BB;</div>
 </div>
 <!--}}}-->
 <!-- seeker {{{-->
 <div  id = "seeker_PU"    class="seeker_P"                    title="seeker_PU"><div id="seeker_CU" >seeker up    </div></div>
 <div  id = "seeker_PD"    class="seeker_P"                    title="seeker_PD"><div id="seeker_CD" >seeker_thumbs</div></div>

 <div id = "seekspot_U"                                                        ></div>
 <div id = "seekzone"      class="hotspot_frame"               title="seekzone"></div>
 <div id = "seekspot_A"                                                >&#x2191;</div>
 <div id = "seekspot_D"                                                        ></div>
 <!--}}}-->
<!--INLINE}}}-->
`
;
/*}}}*/

  /**    2 HOST     CSS  dom_host_css_data .. ESCAPE=[OR HOST CSS WONT WORK]  {{{*/
/*
../stylesheet/dom_host.css
 */
let dom_host_css_data ="data:text/css,"+ escape(`
/*INLINE{{{*/
@charset "utf-8";
#dom_host_css_tag   { content: "dom_host_css (230525:15h:05)"; }


.dark * { background : rgba(17,17,17,0.5); color: rgba(221,221,221,0.5); }

body.dimmed {
    filter : blur(2px) grayscale(100%) !important;
}
body.dimmed { transition : filter 250ms; }

                            *::selection { color:white; background: black           ; }
.selection_progress         *::selection { color:black; background: yellow          ; }
.selection_ending           *::selection { color: pink; background:   red !important; }
.cannot_expand_to_selection *::selection { color:white; background:   red !important; }


.doc_tool           { border : 5px solid rgba(000,000,102,0.33) !important; }

#doc_tools a        { cursor : pointer !important; }




.anchor_node, .anchor_node *     { color      : black              !important; }
.anchor_node:nth-of-type( odd)   { background : linear-gradient(to right, rgba(170,170,170,0.5), rgba(34,0,0,0.5)) !important; }
.anchor_node:nth-of-type(even)   { background : linear-gradient(to left , rgba(170,170,170,0.5), rgba(34,0,0,0.5)) !important; }
.anchor_node>*:nth-of-type( odd) { background : linear-gradient(to right, rgba(170,170,170,0.5), rgba(34,0,0,0.5)) !important; }
.anchor_node>*:nth-of-type(even) { background : linear-gradient(to left , rgba(170,170,170,0.5), rgba(34,0,0,0.5)) !important; }



body.anchor_node             { outline : 3px double #FF0000 !important; }

    .anchor_node             { outline : 2px ridge          !important; }
    .anchor_node.anchor_back { outline : 5px double #FF00FF !important; }

.anchor_child0,
.anchor_child1,
.anchor_child2,
.anchor_child3,
.anchor_child4,
.anchor_child5,
.anchor_child6,
.anchor_child7,
.anchor_child8,
.anchor_child9,
.anchor_child    { outline      : 5px solid; }

.anchor_child0   { outline-color: #000000 !important; }
.anchor_child1   { outline-color: #964B00 !important; }
.anchor_child2   { outline-color: #FF0000 !important; }
.anchor_child3   { outline-color: #FFA500 !important; }
.anchor_child4   { outline-color: #FFFF00 !important; }
.anchor_child5   { outline-color: #9ACD32 !important; }
.anchor_child6   { outline-color: #6495ED !important; }
.anchor_child7   { outline-color: #EE82EE !important; }
.anchor_child8   { outline-color: #A0A0A0 !important; }
.anchor_child9   { outline-color: #FFFFFF !important; }


.anchor_closest    { animation  :           200ms forwards glowing; }
@keyframes glowing {
    0%   { box-shadow : 0   0   0px   0px   red; }
    2%   { box-shadow : 0   0   0px  48px   red; }
    100% { box-shadow : 0   0   0px   5px black; }

}


.anchor_child0,
.anchor_child1,
.anchor_child2,
.anchor_child3,
.anchor_child4,
.anchor_child5,
.anchor_child6,
.anchor_child7,
.anchor_child8,
.anchor_child9,
.anchor_child      { transition : all       250ms !important; }



.anchor_node       { transition : all       250ms !important; }




.overflow_visi *    { overflow-x       : visible !important; }
.overflow_visi *    { width            : unset !important; }








.wall_of_text_split                   { border        : 0                !important; }
.wall_of_text_split                   { padding       : 0                !important; }
.wall_of_text_split                   { margin        : 0                !important; }
.wall_of_text_split                   { white-space   : pre-wrap         !important; }
.wall_of_text_split                   { word-wrap     : break-word       !important; }


.wall_of_text_split.wall_of_text_fold { border-radius : 0em 1em 1em 0em            ; }
.wall_of_text_split.wall_of_text_fold { border        : 3px outset red             ; }
.wall_of_text_split.wall_of_text_fold { border-left   : 1em solid rgba(255,0,0,0.3); }
.wall_of_text_split.wall_of_text_fold { margin-left   :-1em                        ; }
.wall_of_text_split.wall_of_text_fold { padding       : 0.2em                      ; }


html { box-sizing    : border-box !important; }
.line_num {
    position         : absolute;
    left             : 0;
    margin-right     : 1em;

    font-family      : monospace;
    user-select      : none;
    pointer-events   : none;
    background-color : rgba(192,192,192,0.4)        !important;
    padding-right    : 1em;
}



details                                 .line_num { border-right: 0.0em solid rgba(000,000,000,0.3); }
details details                         .line_num { border-right: 0.5em solid rgba(000,000,000,0.3); }
details details details                 .line_num { border-right: 1.0em solid rgba(000,000,000,0.3); }
details details details details         .line_num { border-right: 2.0em solid rgba(000,000,000,0.3); }
details details details details details .line_num { border-right: 2.5em solid rgba(000,000,000,0.3); }



.wall_of_text_parent                  { border        : 0                !important; }
.wall_of_text_parent                  { margin        : 0 0 0 6em        !important; }
.wall_of_text_parent                  { padding       : 0                !important; }



.wall_of_text_parent details                  > pre           { display: inline-block; margin:0; padding-left: 5px; border-radius: 0 0 1em 1em; }

.wall_of_text_parent details:nth-of-type( 1n) > pre           { background : rgba(150, 75,  0,0.2); box-shadow: inset 0px 0px 2px 2px rgb(150, 75,  0); }
.wall_of_text_parent details:nth-of-type( 2n) > pre           { background : rgba(255,  0,  0,0.2); box-shadow: inset 0px 0px 2px 2px rgb(255,  0,  0); }
.wall_of_text_parent details:nth-of-type( 3n) > pre           { background : rgba(255,165,  0,0.2); box-shadow: inset 0px 0px 2px 2px rgb(255,165,  0); }
.wall_of_text_parent details:nth-of-type( 4n) > pre           { background : rgba(255,255,  0,0.2); box-shadow: inset 0px 0px 2px 2px rgb(255,255,  0); }
.wall_of_text_parent details:nth-of-type( 5n) > pre           { background : rgba(154,205, 50,0.2); box-shadow: inset 0px 0px 2px 2px rgb(154,205, 50); }
.wall_of_text_parent details:nth-of-type( 6n) > pre           { background : rgba(100,149,237,0.2); box-shadow: inset 0px 0px 2px 2px rgb(100,149,237); }
.wall_of_text_parent details:nth-of-type( 7n) > pre           { background : rgba(238,130,238,0.2); box-shadow: inset 0px 0px 2px 2px rgb(238,130,238); }
.wall_of_text_parent details:nth-of-type( 8n) > pre           { background : rgba(160,160,160,0.2); box-shadow: inset 0px 0px 2px 2px rgb(160,160,160); }
.wall_of_text_parent details:nth-of-type( 9n) > pre           { background : rgba(255,255,221,0.2); box-shadow: inset 0px 0px 2px 2px rgb(255,255,221); }
.wall_of_text_parent details:nth-of-type(10n) > pre           { background : rgba(192,192,192,0.2); box-shadow: inset 0px 0px 2px 2px rgb(192,192,192); }

.wall_of_text_parent details:nth-of-type( 1n) > pre .line_num { background : rgba(150, 75,  0,0.1) !important; }
.wall_of_text_parent details:nth-of-type( 2n) > pre .line_num { background : rgba(255,  0,  0,0.1) !important; }
.wall_of_text_parent details:nth-of-type( 3n) > pre .line_num { background : rgba(255,165,  0,0.1) !important; }
.wall_of_text_parent details:nth-of-type( 4n) > pre .line_num { background : rgba(255,255,  0,0.1) !important; }
.wall_of_text_parent details:nth-of-type( 5n) > pre .line_num { background : rgba(154,205, 50,0.1) !important; }
.wall_of_text_parent details:nth-of-type( 6n) > pre .line_num { background : rgba(100,149,237,0.1) !important; }
.wall_of_text_parent details:nth-of-type( 7n) > pre .line_num { background : rgba(238,130,238,0.1) !important; }
.wall_of_text_parent details:nth-of-type( 8n) > pre .line_num { background : rgba(160,160,160,0.1) !important; }
.wall_of_text_parent details:nth-of-type( 9n) > pre .line_num { background : rgba(255,255,221,0.1) !important; }
.wall_of_text_parent details:nth-of-type(10n) > pre .line_num { background : rgba(192,192,192,0.1) !important; }

.wall_of_text_parent details:nth-of-type( 1n) > pre .line_num { margin-left : 0.1em !important; }
.wall_of_text_parent details:nth-of-type( 2n) > pre .line_num { margin-left : 0.2em !important; }
.wall_of_text_parent details:nth-of-type( 3n) > pre .line_num { margin-left : 0.3em !important; }
.wall_of_text_parent details:nth-of-type( 4n) > pre .line_num { margin-left : 0.4em !important; }
.wall_of_text_parent details:nth-of-type( 5n) > pre .line_num { margin-left : 0.5em !important; }
.wall_of_text_parent details:nth-of-type( 6n) > pre .line_num { margin-left : 0.6em !important; }
.wall_of_text_parent details:nth-of-type( 7n) > pre .line_num { margin-left : 0.7em !important; }
.wall_of_text_parent details:nth-of-type( 8n) > pre .line_num { margin-left : 0.8em !important; }
.wall_of_text_parent details:nth-of-type( 9n) > pre .line_num { margin-left : 0.9em !important; }
.wall_of_text_parent details:nth-of-type(10n) > pre .line_num { margin-left : 1.0em !important; }


.wall_of_text_block {
    border-radius    : 0.25em                       !important;
    text-align       : left                         !important;
    background       : linear-gradient(to left,rgba(0,0,0,0.3), rgba(0,0,0,0.5) 50%, rgba(255,255,255,0.5) 98%, rgba(0,0,0,0.7) 99%, rgba(255,0,0,0.7)) !important;
    background-color : rgba(0,255,0,0.5)            !important;
    padding          : 0.1em 0.5em 0.1em 0.5em      !important;
}

.wall_of_text_block.region   {
    background-color : rgba(0,0,255,0.5)            !important;

}
.wall_of_text_block.function {
    background-color : rgba(255,0,0,0.5)            !important;

}


.show_seekzone .wall_of_text_split    { outline : 1px solid black; }
.show_seekzone .wall_of_text_parent   { outline : 1px solid black; }
.show_seekzone .text_line             { outline : 1px solid black; }





DETAILS.wall_of_text_split                       { margin-left      : 1em !important;                      }
DETAILS.wall_of_text_split                       { width            : max-content;                         }
DETAILS.wall_of_text_split:not([open])           { opacity          : 0.8;                                 }


DETAILS.wall_of_text_split       SUMMARY         { cursor           : pointer;                             }
DETAILS.wall_of_text_split       SUMMARY         { border           : 2px solid rgba(255,255,255,0.8);     }
DETAILS.wall_of_text_split       SUMMARY         { box-shadow       : 1px 1px 0 3px rgba(000,000,000,0.1); }
DETAILS.wall_of_text_split       SUMMARY         { border-radius    : 1.0em;                               }
DETAILS.wall_of_text_split       SUMMARY         { padding          : 0 0.5em;                             }
                                 SUMMARY::marker { font-size        : 150%;                                }
DETAILS.wall_of_text_split[open]>SUMMARY::marker { color            : red; background-color: black;        }
DETAILS.wall_of_text_split[open]>SUMMARY         { border-radius    : 1em 1em 0 0;                         }
DETAILS.wall_of_text_split       SUMMARY         { background       : linear-gradient(to bottom , rgba(000,000,255,0.3)                            , rgba(000,000,000,0.0)) !important; }
DETAILS.wall_of_text_split[open]>SUMMARY         { background       : linear-gradient(to bottom , rgba(255,000,000,1.0) , rgba(255,000,000,0.3) 5px, rgba(000,000,000,0.0)) !important; }



DETAILS.wall_of_text_split>SPAN                  { vertical-align   : top;                                 }

DETAILS[open] > * {
  animation       : sweep_animation 500ms ease-in-out;
}
@keyframes sweep_animation {
  0%    { opacity: 0; transform: translateX(-10px); }
  100%  { opacity: 1; transform: translateX(  0  ); }
}



.collapsed {
    height           : 2em;
    transform-origin : 0 0;
    transform        : scale(.8,.8);
    overflow         : hidden;
    filter           : blur(2px);
    cursor           : pointer;
}
.collapsed:hover {
    height           : 4em;
    transform        : scale(1,1);
    filter           : none;
}
.collapse_pin {
    position         : relative; top : -.5em; left : 10%;
    cursor           : pointer;
    background-color : transparent;
    font-size        : 200%;
    color            : red;
}
.collapse_pin:hover {
    box-shadow       : 0 0 .5em black;
}



.node_to_hide_mask             { z-index             : 2147483646                           !important; }
.node_to_hide_mask.last_hidden { z-index             : 2147483647                           !important; }
.node_to_hide_mask             { cursor              : pointer                              !important; }
.node_to_hide_mask             { user-select         : none                                 !important; }
.node_to_hide_mask             { position            : absolute                             !important; }
.node_to_hide_mask             { overflow            : hidden                               !important; }
.node_to_hide_mask             { margin              : 0                                    !important; }
.node_to_hide_mask             { padding             : 0                                    !important; }
.node_to_hide_mask             { box-shadow          : 3px 3px 3px inset  rgba(255,255,255) !important; }
.node_to_hide_mask             { background-color    :                rgba(200,200,255,0.9) !important; }
.node_to_hide_mask.last_hidden { background-color    :                rgba(255,200,200,0.9) !important; }
.node_to_hide_mask             { transition-duration : 200ms;                                           }



.node_to_hide_mask     {
    color          : #AAA                     !important;
    font-size      : 100%                     !important;
    font-weight    : 900                      !important;

}
.node_to_hide_mask>*   {
    position       : absolute                 !important;
    top            : 0                        !important;
    left           : 0                        !important;
    margin:0 !important;
    padding:0 !important;
    line-height: 1em !important;

}





.node_to_hide_not_visible      { display      : none !important; }



.last_hidden                   { transition-duration : 100ms;                                           }
.last_hidden                   { outline             : 5px rgba(255,000,000,0.3) solid   !important;    }
.last_hidden                   { cursor              : pointer   !important;                            }
.last_hidden                   { user-select         :    none;                                         }




.marked_to_hide    { user-select      : none                                 !important; }
.marked_to_dimm    { transition       : opacity    500ms                               ; }
.marked_to_hide    { transition       : opacity    500ms                               ; }
.marked_to_dimm    { transition       : outline    0ms                          100ms  ; }


.marked_to_dimm    { outline          : 3px dashed rgba(68,000,255,1)        !important; }
.marked_to_dimm    { opacity          : 0.3                                  !important; }
.marked_to_dimm    { background-color : pink                                 !important; }
.marked_to_dimm    { user-select      : none                                 !important; }
.marked_to_dimm    { box-shadow       : 0   0 16px 8px    rgba(  0,255,  0, .8);         }




.containers_hi .viewable { outline             : red 5px solid !important; }
.containers_hi .viewable { transition-duration : 500ms; }


.zoom_70  { zoom :  70%; }
.zoom_80  { zoom :  80%; }
.zoom_90  { zoom :  90%; }

.zoom_100 { zoom : 100%; }
.zoom_110 { zoom : 110%; }
.zoom_120 { zoom : 120%; }

.zoom_130 { zoom : 130%; }
.zoom_150 { zoom : 150%; }
.zoom_160 { zoom : 160%; }

.zoom_180 { zoom : 180%; }
.zoom_200 { zoom : 200%; }
.zoom_220 { zoom : 220%; }



.font_size_70  p, .font_size_70  pre, .font_size_70  code { font-size :  70% !important; }
.font_size_80  p, .font_size_80  pre, .font_size_80  code { font-size :  80% !important; }
.font_size_90  p, .font_size_90  pre, .font_size_90  code { font-size :  90% !important; }

.font_size_100 p, .font_size_100 pre, .font_size_100 code { font-size : 100% !important; }
.font_size_110 p, .font_size_110 pre, .font_size_110 code { font-size : 110% !important; }
.font_size_120 p, .font_size_120 pre, .font_size_120 code { font-size : 120% !important; }

.font_size_130 p, .font_size_130 pre, .font_size_130 code { font-size : 130% !important; }
.font_size_140 p, .font_size_140 pre, .font_size_140 code { font-size : 140% !important; }
.font_size_150 p, .font_size_150 pre, .font_size_150 code { font-size : 150% !important; }

.font_size_160 p, .font_size_160 pre, .font_size_160 code { font-size : 160% !important; }
.font_size_170 p, .font_size_170 pre, .font_size_170 code { font-size : 170% !important; }
.font_size_180 p, .font_size_180 pre, .font_size_180 code { font-size : 180% !important; }

.font_size_190 p, .font_size_190 pre, .font_size_190 code { font-size : 190% !important; }
.font_size_200 p, .font_size_200 pre, .font_size_200 code { font-size : 200% !important; }
.font_size_210 p, .font_size_210 pre, .font_size_210 code { font-size : 210% !important; }






.pat_div {
    display       : inline-block !important;
    margin        : 1em;
    border-radius : 1ex;
    border        : 3px solid #aaa;
    padding       : 1em;
}



#shadow_host {
    position : absolute;
    left     : 0;
    top      : 0;
    margin   : 0;
    border   : 0;
    padding  : 0;
    width    : 0px;
    height   : 0px;
}






input       { border  : 6px #eee solid;        }
input:focus { outline : 0;                     }
input:focus { border  : 6px solid transparent; }



.cc1 , .select1 { box-shadow: 0.0em 0.3em 0.3em rgba(0, 0, 0, 0.3) inset; }
.cc2 , .select2 { box-shadow: 0.0em 0.3em 0.3em rgba(0, 0, 0, 0.3) inset; }
.cc3 , .select3 { box-shadow: 0.0em 0.3em 0.3em rgba(0, 0, 0, 0.3) inset; }
.cc4 , .select4 { box-shadow: 0.0em 0.3em 0.3em rgba(0, 0, 0, 0.3) inset; }
.cc5 , .select5 { box-shadow: 0.0em 0.3em 0.3em rgba(0, 0, 0, 0.3) inset; }
.cc6 , .select6 { box-shadow: 0.0em 0.3em 0.3em rgba(0, 0, 0, 0.3) inset; }
.cc7 , .select7 { box-shadow: 0.0em 0.3em 0.3em rgba(0, 0, 0, 0.3) inset; }
.cc8 , .select8 { box-shadow: 0.0em 0.3em 0.3em rgba(0, 0, 0, 0.3) inset; }
.cc9 , .select9 { box-shadow: 0.0em 0.3em 0.3em rgba(0, 0, 0, 0.3) inset; }
.cc0 , .select0 { box-shadow: 0.0em 0.1em 0.1em #FFF               inset; }



.cc1 , .select1 , .select1 em { color: #FFF !important; background-color:#964B00 !important; padding:0 !important; }
.cc2 , .select2 , .select2 em { color: #FFF !important; background-color:#FF0000 !important; padding:0 !important; }
.cc3 , .select3 , .select3 em { color: #000 !important; background-color:#FFA500 !important; padding:0 !important; }
.cc4 , .select4 , .select4 em { color: #000 !important; background-color:#FFFF00 !important; padding:0 !important; }
.cc5 , .select5 , .select5 em { color: #000 !important; background-color:#9ACD32 !important; padding:0 !important; }
.cc6 , .select6 , .select6 em { color: #000 !important; background-color:#6495ED !important; padding:0 !important; }
.cc7 , .select7 , .select7 em { color: #000 !important; background-color:#EE82EE !important; padding:0 !important; }
.cc8 , .select8 , .select8 em { color: #000 !important; background-color:#A0A0A0 !important; padding:0 !important; }
.cc9 , .select9 , .select9 em { color: #000 !important; background-color:#FFFFFF !important; padding:0 !important; }
.cc0 , .select0 , .select0 em { color: #FFF !important; background-color:#202020 !important; padding:0 !important; }

.bg1 { background-color : rgba(150,  75,   0, .9) !important; color : #FFF !important; }
.bg2 { background-color : rgba(255,   0,   0, .9) !important; color : #FFF !important; }
.bg3 { background-color : rgba(255, 165,   0, .9) !important; color : #000 !important; }
.bg4 { background-color : rgba(255, 255,   0, .9) !important; color : #000 !important; }
.bg5 { background-color : rgba(154, 205,  50, .9) !important; color : #000 !important; }
.bg6 { background-color : rgba(100, 149, 237, .9) !important; color : #000 !important; }
.bg7 { background-color : rgba(238, 130, 238, .9) !important; color : #000 !important; }
.bg8 { background-color : rgba(160, 160, 160, .9) !important; color : #000 !important; }
.bg9 { background-color : rgba(255, 255, 255, .9) !important; color : #000 !important; }
.bg0 { background-color : rgba(128, 128, 128, .9) !important; color : #FFF !important; }

.fg1 {            color : rgba(200,  99,   0, 1) !important; }
.fg2 {            color : rgba(255,   0,   0, 1) !important; }
.fg3 {            color : rgba(255, 165,   0, 1) !important; }
.fg4 {            color : rgba(255, 255,   0, 1) !important; }
.fg5 {            color : rgba(154, 205,  50, 1) !important; }
.fg6 {            color : rgba(100, 149, 237, 1) !important; }
.fg7 {            color : rgba(238, 130, 238, 1) !important; }
.fg8 {            color : rgba(160, 160, 160, 1) !important; }
.fg9 {            color : rgba(255, 255, 255, 1) !important; }
.fg0 {            color : rgba(  0,   0,   0, 1) !important; text-shadow : 0px -1px #FFFFFF; }


.select_words_exact     { border:0px red         !important; border-radius:.5ex;                            }
.select_words_segment   { border:0px transparent !important; border-radius: 0  ;                            }
.select_words_segment   { border:0px             !important;       outline: 3px rgba(128,128,128,.5) solid; }
.select_words_head_tail { border:0px             !important; border-radius: 1ex;                            }







em.select1,
em.select2,
em.select3,
em.select4,
em.select5,
em.select6,
em.select7,
em.select8,
em.select9,
em.select0 { cursor : all-scroll !important; }

.select1,
.select2,
.select3,
.select4,
.select5,
.select6,
.select7,
.select8,
.select9,
.select0 { white-space : nowrap !important; }




.scroll_smooth { scroll-behavior  : smooth  !important; }




.containers_hi       :not(.container_light):not(.container_dark ):not(em):not(.node_to_hide_mask) { background-image: none !important; box-shadow:none !important; text-shadow:none !important; }
.containers_hi.dark                        :not(.container_dark ):not(em):not(.node_to_hide_mask) { background-color: #222 !important; color :rgba(255,255,255,0.5) !important; }
.containers_hi.light                       :not(.container_light):not(em):not(.node_to_hide_mask) { background-color: #EEE !important; color :rgba(  0,  0,  0,0.5) !important; }

.container_dark, .container_light { border        : 0px;                               }
.container_dark, .container_light { border-radius : 5px !important;                    }
.container_dark, .container_light { box-shadow    : 2px 2px 6px rgba(000,000,000,0.7); }

.container_dark                   { color         : white !important; }
.container_light                  { color         : black !important; }

.container_dark                   { background    : linear-gradient(110deg, rgba( 68, 28,  0,.3), rgba(255, 106, 26,.3)) !important; }
.container_light                  { background    : linear-gradient(110deg, rgba(255,130,  0,.3), rgba(  0,   0,  0,.3)) !important; }

.container_selected               { outline       : 1px dashed orange; }



.on_work_el_left  { outline : .5em dotted  green !important; }
.on_work_el_right { outline : .5em dotted  red   !important; }

.num_selected     { outline : .5em dotted  #A0F  !important; }




.transcript            { transform-origin     : 0% 0% 0;         }
.transcript            { cursor               : pointer;         }
.transcript            { margin               : .2em;            }
.transcript            { padding              : 1ex;             }
.transcript            { min-height           : 1em;             }

.transcript            { max-width            :  80%;            }
.transcript            { max-height           :  80%;            }

.transcript            { overflow-x           : hidden; }
#transcript1           { overflow-x           :   auto; }
#transcript2           { overflow-x           :   auto; }

.transcript::-webkit-scrollbar                       { width         :  3em; }
.transcript::-webkit-scrollbar                       { height        :  3em; }
.transcript::-webkit-scrollbar-thumb                 { border-radius : 96px; }
.transcript::-webkit-scrollbar-track                 { border-radius : 96px; }
.transcript::-webkit-scrollbar-thumb                 { box-shadow    : inset 0 0 6px rgba(0,0,0,0.5); }
.transcript::-webkit-scrollbar-track                 { box-shadow    : inset 0 0 6px rgba(0,0,0,0.3); }
.transcript::-webkit-scrollbar-thumb                 { box-shadow    : rgba(  0,  0,  0,0.5) 0 8px 24px; }
.transcript::-webkit-scrollbar-thumb                 { background    : rgba( 24, 24, 24,0.5); }
.transcript::-webkit-scrollbar-thumb:window-inactive { background    : rgba( 24, 24, 24,0.2); }
.transcript::-webkit-scrollbar-track                 { background    : rgba( 96, 96, 96,0.4); }
.transcript::-webkit-scrollbar-track:window-inactive { background    : rgba(128,128,128,0.2); }

.transcript>div        { margin               : .2em;            }

.transcript *          { user-select  : none;            }
.transcript *          { vertical-align       : middle;          }
.transcript *          { font-family          : monospace;       }

.transcript blockquote { margin               : .2em;                     }
.transcript blockquote { padding              : 1ex;                      }
.transcript blockquote { white-space          : normal !important;        }
.transcript blockquote { width                : 48em;                     }

.transcript div        { cursor               : pointer;         }

.transcript div        { display              : table-cell;      }
.transcript div        { margin               : .2em;            }
.transcript div        { overflow-x           : hidden;          }
.transcript div        { padding              : 1ex;             }

.transcript em         { line-height          : 1.50em;          }

.transcript pre        { background           : initial;         }
.transcript pre        { padding              : 0 0 0 1ex;       }
.transcript pre        { text-align           : left;            }

.transcript sub        { vertical-align       : sub;             }
.transcript sup        { color                : white;           }
.transcript sup        { vertical-align       : super;           }

.transcript table      { user-select  : none;            }
.transcript table      { margin               : 0;               }
.transcript tr.slot    { font-size            : 200%;            }
.transcript th         { font-size            : 120%;            }
.transcript th         { padding              : 1ex;             }
.transcript th         { text-align           : left;            }
.transcript th         { text-shadow          : rgba( 50, 50, 50, 0.9) 1px 1px 2px !important; }
.transcript th         { font-weight          : 700; }
.transcript hr         { height               : 5px; }

.transcript td         { padding              : 1ex;             }
.transcript td         { text-align           : left;            }

.transcript ul         { line-height          : 0.75em;          }
.transcript ul         { margin               : .2em;            }
.transcript ul         { padding              : 0 0 0 2em;       }

.transcript_msg .info  {
    box-shadow  : 2px 2px 6px rgba(000,000,000,0.7) inset;
    font-family : "Comic sans ms";
}

      .transcript_msg { color       : #200; }
.dark .transcript_msg { color       : #FA0 !important; }

#table_params *   {     text-align : right  ; }

.div_match {
    border: solid 8px black !important;
}
.div_match div {
    border:solid 1px !important;
}

.em_match {
    box-shadow    : rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset;
    font-size     : 200%;
}
.em_missing {
    color            : red;
    background-color : transparent;
    font-weight      : 700;
    box-shadow       : rgba(255, 0, 0, 0.3) 0 0.3em 0.3em inset;
}

.em_log {
    padding          : .2em;
    border-radius    : 50%;
    box-shadow       : rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset;
}
.em_log span {
    border-radius    : .5em;

}



.outlined_divs {
    position         : absolute             !important;
    pointer-events   : none                 !important;
    margin           : 0                    !important;
    border-radius    : 16px                 !important;
    border-style     : solid                !important;
    border-width     : 7px                  !important;
    padding          : 0                    !important;
    background-color : transparent          !important;
}
.outlined_dots {
    position         : absolute             !important;
    pointer-events   : none                 !important;
    margin           : 0                    !important;
    border-radius    : 1em                  !important;
    padding          : 1em                  !important;
    transform        : translate(-50%,-50%) !important;
    text-shadow      : white    1px 1px 2px !important;
}



.sentence_container {
    all           : initial;
    display       : inline-block;
    padding       : 0.5em;
    cursor        : pointer;
    user-select   : none;

}
UL.sentence_container { display: block; }
OL.sentence_container { display: block; }


.rejected {
    margin           : 0.5em;

}
.outlined {
    border           : 1px solid #F00;
    box-shadow       : 3px 3px 3px rgba(255,0,0,0.5);
    border-radius    : 0.5em;
    margin           : 0.5em;
    padding          : 0.5em;
    white-space      : pre-line;
    transition       : all 500ms ease;
}
.sentence_container.outlined {
    transition       : transform 150ms ease-in;
    transform        : rotate(1deg) scale(0.9);
    transform-origin : 50%  0%;

    outline          : 5px #000 dashed;
    box-shadow       : 3px 3px 12px 6px rgba(0,0,0,0.5);
    border           : 5px #000 dashed;
    background-color : rgba(221,255,221,0.5);
}
.sentence { max-width   : 64ch     !important; }
.sentence { min-width   : 50ch     !important; }
.sentence { overflow    : visible  !important; }

.sentence { white-space : normal   !important; }
.sentence { text-align  : left     !important; }

.sentence_container.fs1 , .sentence_container.fs1  * { font-size :  6px; }
.sentence_container.fs2 , .sentence_container.fs2  * { font-size :  7px; }
.sentence_container.fs3 , .sentence_container.fs3  * { font-size :  9px; }
.sentence_container.fs4 , .sentence_container.fs4  * { font-size : 11px; }
.sentence_container.fs5 , .sentence_container.fs5  * { font-size : 13px; }
.sentence_container.fs6 , .sentence_container.fs6  * { font-size : 16px; }
.sentence_container.fs7 , .sentence_container.fs7  * { font-size : 20px; }
.sentence_container.fs8 , .sentence_container.fs8  * { font-size : 23px; }
.sentence_container.fs9 , .sentence_container.fs9  * { font-size : 28px; }
.sentence_container.fs10, .sentence_container.fs10 * { font-size : 34px; }
.sentence_container.fs11, .sentence_container.fs11 * { font-size : 41px; }
.sentence_container.fs12, .sentence_container.fs12 * { font-size : 49px; }

.sentence             { overflow         : visible      !important; }
.sentence, .clause    { display          : block        !important; }
.sentence, .clause    { transform        : scale(0.9)   !important; }
.sentence, .clause    { transform-origin : 0%  0%       !important; }

.sentence             { margin-top       : 0.5em        !important; }
           .clause    { margin-top       : 0            !important; }

.sentence, .clause    { padding          : 0 0.5em 0 0.5em        ; }

.sentence, .clause    { border-style     : outset                 ; }
.sentence, .clause    { border-color     : rgba(136,136,136,0.5)  ; }

           .clause    { line-height      : 1em         !important ; }

    .dark *::before   {          display : none            !important; }
    .dark *::after    {          display : none            !important; }
body.dark IMG         {           filter : brightness(50%) !important; }
body.dark .sentence   {           filter : brightness(80%) !important; }
body.dark .sentence   {            color : #FFF                      ; }
body.dark .clause     {            color : #111                      ; }

.sentence             { border-top-width    : 3px; }
.clause               { border-top-width    : 0  ; }
.sentence.last_clause { border-top-width    : 0  ; }
  .clause.last_clause { border-top-width    : 0  ; }

.sentence             { border-right-width  : 3px; }
.clause               { border-right-width  : 3px; }
.sentence.last_clause { border-right-width  : 3px; }
  .clause.last_clause { border-right-width  : 3px; }

.sentence             { border-bottom-width : 0  ; }
.clause               { border-bottom-width : 0  ; }
.sentence.last_clause { border-bottom-width : 3px; }
  .clause.last_clause { border-bottom-width : 3px; }

.sentence             { border-left-width   : 3px; }
.clause               { border-left-width   : 3px; }
.sentence.last_clause { border-left-width   : 3px; }
  .clause.last_clause { border-left-width   : 3px; }


.sentence             { border-radius    : 0.5em 0.5em 0     0    ; }
.sentence.last_clause { border-radius    : 0.5em 0.5em 0.5em 0.5em; }
  .clause.last_clause { border-radius    : 0     0     0.5em 0.5em; }












.clause   { background    : linear-gradient(to right , rgba(255,255,255,0.5), rgba(255,255,255,0.00) 90%); }












#log_popup_div {
    all              : initial;
    max-height       : 95%;
    max-width        : 95%;
    overflow         : auto;
    line-height      : 1.0em;
}

#log_popup_div       > pre::before {
    display          : block !important;
    position         :       absolute;
    content          :        "\\25C0";
    font-size        :           24px;
    background-color :    transparent;
    line-height      :            1em;
    transform-origin :       80%  20%;
    transform        : rotate( 45deg);
    left             :            0px;
    top              :            0px;
    bottom           :          unset;
}

#log_popup_div.above> pre::before {
    display          : block !important;
    transform-origin :       80%  80%;
    transform        : rotate(-45deg);
    top              :          unset;
    bottom           :            0px;
}

#log_popup_div.center> pre::before {
    display          : block !important;
    display          : none;
}

#log_popup_div em      { margin-left   : 1px;              }
#log_popup_div em      { padding       : 0px 0.5em;        }

#log_popup_div em      { border        : 1px solid white;  }
#log_popup_div em      { box-shadow    : 1px 1px 1px #888; }

#log_popup_div .xpath * { max-width     : unset  !important; }
#log_popup_div .xpath   { font-size     : 12px   !important; }
#log_popup_div .xpath   { white-space   : pre    !important; }
#log_popup_div .xpath   { overflow      : auto   !important; }
#log_popup_div .xpath   { line-height   : normal !important; }

#log_popup_div .tag    { border-radius : 0.25em 0.25em 0.25em 0.25em; }
#log_popup_div .left   { border-radius : 0.25em 0      0      0.25em; }
#log_popup_div .center { border-radius : 0      0      0      0     ; }
#log_popup_div .right  { border-radius : 0      0.25em 0.25em 0     ; }

#log_popup_div .tag    { background    : linear-gradient(to right, rgba(255,255,255,0.4), rgba(136,136,255,0.4)); }
#log_popup_div .id     { background    : linear-gradient(to right, rgba(255,000,000,0.4), rgba(255,136,136,0.4)); }
#log_popup_div .class  { background    : linear-gradient(to left , rgba(000,255,000,0.4), rgba(136,255,136,0.4)); }




#drag_cursor.onload           { transition    : all       200ms ease-out; }
#drag_cursor                  { transition    : transform 200ms ease-out; }
#drag_cursor.onload           { transform     :  rotate(360deg) scale(3); }
#drag_cursor.onload           { border-radius : 1em          !important;  }
#drag_cursor.onload::after    { content       : "splitter"   !important;  }
#drag_cursor.move_on_cooldown { content       : "\\231B"      !important; background-color:rgba(000,255,000,0.5) !important; }
#drag_cursor.not_moved_enough { content       : "\\25C4\\25BA" !important; background-color:rgba(000,000,255,0.5) !important; }


/*INLINE}}}*/
/*# sourceURL=dom_host.css */
`
)
 .replace(/\\(\\x+)/g,"\\\\$1")
;
/*}}}*/
  /**    3 GRID    CSS dom_grid_css_data {{{*/
/*
../stylesheet/dom_grid.css
*/
let dom_grid_css_data ="data:text/css,"+ `
/*INLINE{{{*/
@charset "utf-8";
#dom_grid_css_tag   { content: "dom_grid_css (200624:21h:09)"; }


#dom_grid_playground {
 border        : 1px solid #333;
 border-radius : 1em;
 padding       : .5em;
 background    : linear-gradient(to bottom, #333, #111) !important;
 position      : fixed; top:0.2em; right:5em;
 width         : 75%;
}
#dom_grid_playground.collapsed                   { width   : 25%            ; }
#dom_grid_playground.collapsed #traces_div       { display : none !important; }
#dom_grid_playground.collapsed #dom_grid_headsup { display : none           ; }

#dom_grid_headsup>div                            { display : inline-block   ; }



#dom_tools_html ol>li{
 margin-bottom: 1em;
  white-space : nowrap;
}




#traces_div>div { margin-left:1em !important; margin-top: 0em !important; }

#traces {
 border-radius : 5px;
 box-shadow    : rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset;
 border        : 3px dashed #FD8;
 width         : 50em;
 padding       : 1ex;
 overflow      : auto;

 color         : #FD4;
 background    : rgba(16,16,16,.8);
}


.note {
 background        : #fff3d4;
 border-color      : #f6b73c;
 border-left-width : 5px;
 border-left-style : solid !important;
 font-family       : "monospace";
 font-weight       : 700;
 font-size         : 100%;
 color             : #AAA;
 padding           : 1ex 1em 1ex 1em;
 display           : inline-block;
 margin            : 1ex 1ex 1ex 0;
}
.note em { padding    : 0.2em; }
.note em { line-height: 2.5em; }
.note pre { margin:0; }
.pat_div { display:none; }


.box {
    display:inline-block;
    position:relative;
    border         : 1px solid #404040      ;
    border-radius  : 5px 5px 5px 5px        ;
    color          : darkgray               ;
    font-weight    : 900                    ;
    background     : rgba(16,16,16,.8)      ;
    vertical-align : middle;
    text-align     : center;
    box-shadow     : 0 0 10px #000000 inset ;
    padding:0 !important;
}
.box  label { cursor: pointer; }


.cb_slider_pin {
    width          : 80px;
    height         : 30px;
    border-radius  : 50px;
    padding        : 0;
    box-shadow     : inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.2);
}

.cb_slider_pin:after {
    content        : '';
    height         : 2px;
    width          : 52px;
    position       : absolute;
    top            : 14px;
    left           : 14px;
    background     : #111;
    border-radius  : 50px;
    box-shadow     : inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.2);
}

.cb_slider_pin label {
    z-index        : 1;
    width          : 22px;
    height         : 22px;
    position       : absolute;
    top            : 4px;
    left           : 4px;
    border-radius  : 50px;
    transition     : all 0.4s ease;
    background     : #fcfff4;
    background     : linear-gradient(to top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
    box-shadow     : 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
}

.cb_slider_pin label:after {
    content        : '';
    width          : 10px;
    height         : 10px;
    position       : absolute;
    top            : 6px;
    left           : 6px;
    background     : #333;
    border-radius  : 50px;
    box-shadow     : inset 0px 1px 1px black, 0px 1px 0px rgba(255, 255, 255, 0.9);
}

.cb_slider_pin input[type=checkbox]                       { visibility : hidden;  }
.cb_slider_pin input[type=checkbox]:checked + label       { left       : 54px;    }
.cb_slider_pin input[type=checkbox]:checked + label:after { background : #00Fe00; }



/*INLINE}}}*/
/*# sourceURL=dom_grid.css */
`

 .replace(/\\(\\x+)/g,"\\\\$1")
;
/*}}}*/
  /**   4 TOOLS   CSS dom_tools_css_data .. ESCAPE=[#dom_tools_css_tag] {{{*/
/*
../stylesheet/dom_tools.css
*/
let dom_tools_css_data ="data:text/css,"+ escape(`
/*INLINE{{{*/

#dom_tools_css_tag  { content: "dom_tools_css (230627:15h:57)"; }


.flag, .flag.checked {
 border                    : none             !important;
 border-radius             : 1.0em            !important;
 background-position       : center           !important;
 background-repeat         : no-repeat        !important;
 box-shadow                : 0px 0px 5px #666 !important;
}

.bg_FR { background-image  : url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAApVBMVEUAAAAAAP8aa6YZaaEYaaMxeKpDhbeOtNTn5+nok5nqXGPqXmPpaG//gIAAgIAZaJ/rSlH/VYAZaqPpYmcXZ53rQEYXZZjsKDAXZZjsIysXZprsMTgZaKDrSlEabKfrbXMXaqQXZJjrKTDqaW0uXbkYaaYYbapPjbZnnMOevdbp6enqoaHrfYLneX3/mZkXZJYZa6Z5qc/m5+jpgYbsHCTsHib////UQnaFAAAAL3RSTlMAAozEx+LYq4iox8SMAgbk5AampPHw/f3+/vr64+JaWYT+/oMLPz9XTTIiMT8/CvuMgHAAAAABYktHRDZHv4jRAAAAB3RJTUUH4QgIBREohK9IqAAAAHdJREFUOMtjYBgegJGJmQUIWNnYOeCAkwsMuHl4GRj4+PUhwMDQCA6MTaBAQJBBSB+fAhNhBhH8CkQZxPArEGeQwK9AclQB/RRI4VcgzSCDX4EsgxxeBabyDAwKirgVKCmDUq2KqhoQqGtoasGBtg4Y6OoNjnwFAKctfQuSIu45AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA4LTA4VDA1OjE3OjQwKzAwOjAw3yWaFQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wOC0wOFQwNToxNzo0MCswMDowMK54IqkAAAAASUVORK5CYII=") !important; }
.bg_EN { background-image  : url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAFbUlEQVRYhe2WfVTNdxzHX/f3u9Wtq0eirG5PN6Gkhh3OpjyEyjN5ONiZmWMY1koaDas2MxxO4+RwnHYMIxXKQ4xs2lSMaFEkDz2oGxU93up2790fm60ozDn7i/dfvz9e3/f78/t8Pud7vvBGb/S6SwIQPGmuxVvT5p3Qmpkqtp++Xtes0erbQoLU+L5EZnkHYKKXje2IimsKk6RE47ZM/ZRp6p979C1KyalQdRYmSpAs93dx6qZpKVZHrQj+6HxKnTRuXVxf9x93/WEWGSw+Dg1lcnggy/f8wsXCf330gmEfyd/fZjIp3dW19C3KaWd+vdEPU5m0f2fhyu5yNgT1QZqVhVFUJBqp0fRTGw96CgYeHseaHJxE68ZaXKPXcn/uQnYGvc362UMxNTZ8yUZ2LqkoIdjPiYQZLjSEhKMIW4ZNXSUNllZdJP2UccL+vDI76x0xFG35jlLzbnjmZ6MdGUCv40dIXxOEv5fTK4d7K8w5uewdfK6k0ThsFJ6/n6XaxJzciPUojuwjvkJ0EC7fLjMYGZnAfrUJjuknyR0/DVGnw+3AbooCp7K6fzf2LPLBzlL20sEWJgbEzHRn62A5j4Nm47JtI/IWNdfeC6DruVSyXbwZtjGTk9ce9JSiBx169qTncS6vlG8/WUT9jIk8ClmJa3kRrbNmg98EUjd/yfaMchpbtM8ND+zXnaixSvLWbcUw8QdctS2UW9igi47EYsBAZu7PI7+8/gluJLQ9XFxZy6yYY+wsacIl7SiXps9FI4p4nT5CmY8/UzQlLB/t3Gn4Ql8HIhw0qMZMpH/8LqS6VrLHBGGffoIzckcmxV5qGw6AJDoxU9+RmY2FnA983SnNyaf289XY3cgFiYTWqVMxcVPS8vX6dry4OgKtSoUu7nsErY5KhRJdVBS9RwwiKbucgoqGDouWnB88ssMC/gGAnkpHuly5CjU1AGgFEVHXfhSthkZIW5r/OmNkhCQwgIJHGp66Up71/9Wpz/MJoIdWi5VO9yLslSS8GPl/9aYASVl84gt3wExqiGbrNrSFdwDQ2isQS4rbMRrXXhjcLgSdDsHaGpMvwmlSOKLnBUvYY35sh8TEQUqigwaT/9VmlIcOItO2cN/KFoN10ZiVlSCLimzH10esRuPuwaOQVTirbtMqCNwcPh6PjWvYklHO7oxSdPpno54Zga2FnN1LAghzkVPqNw6PhL2Iei1XJ8zBMT2VRg8vbj9sfMaoqErN3a72OJ4+zNU5i2kVpLinJaMa7s8MzT2SFg1A2V3eeQGiIGGJvzdnwsYhrt+A6by5ODws466NAk38fgyDl+K//SqJl8s7bWfajUp8t1xANWk64rEUbin70aPmIbafLaFh8ackTndmVaASQ+m//y0gEfS9elqSvGIyAeoKyn0D8P7tNBpByo0FS3BOO8qmW83M2pVNcbW60/AnqlW3Ep6UT2hmLXZJ+ygMiaBGJqdfbgZ1I8bglXmKs6GDGeJiCUgeCXN8PBoPzfNFHbICh5Vh2NZXk+/YG+FoMs2TJzN63SESLtyjg/E9V+cKqhgdc4E7747C+ORxcjyGYNbcgFvsJlQzPyTW14rQUU6Vgn1zfXLlmPH0zc6gwcCQggVLcT9xkG8uFjMr5jilVXX/LfmpboQl5hOcVoHL3h0ULF9DjbEprjeyaRw7CbcHdw8LwfP9Z/9k637hmvsAzM6kUuEfyNC18SRkFrxy8NM6X1iN3+Yscr19MU9LJWfAMF2WwvPA2Dl+4U+eemxKy3OorW3y2Xm2sPhpAyNRrNPLzB8DvD/EzsqtqqSrKiGlqS1jM22C7GZX+6o9maXVzysmZJSznbG56a2PB1p3vs1v9FrpTy4ZFB6SsucBAAAAAElFTkSuQmCC") !important; }
.bg_DE { background-image  : url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABQklEQVRYhe2TvUoDQRSFz70zk2wSjCyLi2lsNGnSKdjY2AUsLUzlE9iIjS8gvoh2Cjb2loI/WAliYyOIigaiJLvBnWsjNspWuxnB/ZppDnxnuPcCBQX/Hfp6ubWwtC6QeRC8XI2CiEguby9O9wFYarfbpZE3eQRgJVfxT47riFeVP9PcBLAxZjkAtCJRryyCrgM5AICIugzCrKsCAJoMwDgsUGKHcgCA3nvpDQgySgsZQa8i8pi1PCGJtQXChIjSgjWxwZRN5rIuAODd+QiKAkUBPb2jI4GotFA5Mm9VNs9Zy4VlqKUmnrWSeoYqVIHyTZB1AQB95yNgYiQO/U9sDD040wvOuKz0VuoC5McHkOxy2Lk6rEyYba1onKO4t2w75cXz6+/P350sez4PGr+ljTJxtU7DzPQ3jT6tHbjcvYI/xCeh6lSnMB3FTAAAAABJRU5ErkJggg==") !important; }
.bg_GR { background-image  : url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhFBMVEUAAAAZSpEYSZIaSZIZSZEZSJIZSZIaSpEYSZMYSJE6YqGXq8exvM8YSZJdfq7m5ugYSZLm6OiNo8IZSZJwjbZae65dfq9fgLA2X51ggLBkg7Hn5+jn5+jm6OjBzNuruc/Ey9oaSJIZSJMZSZIZSZLm5+h/mL0ZSZLk5ueHncC3w9T///+S8fQfAAAAJXRSTlMAXcbwwMVblZJKuMBFscCw5eTg/c3Hy8+5xLvlsa9GwEWUXO/EMIB6AwAAAAFiS0dEKyS55AgAAAAHdElNRQfkBhoWOyDukqFdAAAAlklEQVQ4y9XTSROCMAyG4U9ZxB2s+y4Yo/7/H2g7HqDTTnLmuVAm7yGHFuiHwTAherGVsifJcjcf2WM8sApgzG0wmQZmmHeCBQWWKOWgwrvztwp2YAOSA8bHIfq6z3rzt921wPIO5AX7Q8gL0tgOakAKPTgqwAoYeW5wkleocJaDC6430R14SCsU7lLWWROfNs+8J+/uB/iWXQWJFOLfAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA2LTI2VDIyOjU5OjMyKzAwOjAwA410ZgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNi0yNlQyMjo1OTozMiswMDowMHLQzNoAAAAASUVORK5CYII=") !important; }

.flag.checked.reloading {
 animation-duration        :         2000ms;
 animation-delay           :            0ms;
 animation-name            : flag_animation;
 animation-timing-function :       ease-out;
 animation-fill-mode       :           both;
}
@keyframes flag_animation {
    from { opacity   : 0; }
    30%  { transform : scale(1.0) rotate(-45deg); }
    to   { transform : scale(0.8); }
}




.display_delayed {
    opacity             : 0.1;
    transition-duration : 500ms;
    visibility : hidden !important;
    display    : none   !important;

}


#dom_tools_css_tag  {
    border        : 5px dashed #FFAA00;
    border-radius : 2em;
    margin        : 1em;
}



global-box { margin: 0 0 5px 0; }

input {
    border               : 2px solid transparent;
    user-select          : none ;
}

input:focus {
    box-shadow           : 0px 0px 3px black inset !important;
    outline              : none;
}
input.focussed {
    background-color     : rgba(0,0,0,0.3)         !important;
               color     : white                   !important;
}

em {
    border           : 1px solid #aaa;
    border-radius    : 5px;
    color            : #444;
    background-color : #fafafa;
    font-style       : normal;
}
em   sup { font-size      :   30% !important; }
em   sup { vertical-align : super !important; }
span sup { font-size      :   30% !important; }
span sup { vertical-align : super !important; }



.todo { color:red; }




.cc1 , .select1 { box-shadow: rgba(0,0,0,0.3) 0 0.3em 0.3em inset; }
.cc2 , .select2 { box-shadow: rgba(0,0,0,0.3) 0 0.3em 0.3em inset; }
.cc3 , .select3 { box-shadow: rgba(0,0,0,0.3) 0 0.3em 0.3em inset; }
.cc4 , .select4 { box-shadow: rgba(0,0,0,0.3) 0 0.3em 0.3em inset; }
.cc5 , .select5 { box-shadow: rgba(0,0,0,0.3) 0 0.3em 0.3em inset; }
.cc6 , .select6 { box-shadow: rgba(0,0,0,0.3) 0 0.3em 0.3em inset; }
.cc7 , .select7 { box-shadow: rgba(0,0,0,0.3) 0 0.3em 0.3em inset; }
.cc8 , .select8 { box-shadow: rgba(0,0,0,0.3) 0 0.3em 0.3em inset; }
.cc9 , .select9 { box-shadow: rgba(0,0,0,0.3) 0 0.3em 0.3em inset; }
.cc0 , .select0 { box-shadow: #FFF            0 0.1em 0.1em inset; }



.cc1 , .select1 , .select1 em { color: #FFF; background-color:#964B00 !important; }
.cc2 , .select2 , .select2 em { color: #FFF; background-color:#FF0000 !important; }
.cc3 , .select3 , .select3 em { color: #000; background-color:#FFA500 !important; }
.cc4 , .select4 , .select4 em { color: #000; background-color:#FFFF00 !important; }
.cc5 , .select5 , .select5 em { color: #000; background-color:#9ACD32 !important; }
.cc6 , .select6 , .select6 em { color: #000; background-color:#6495ED !important; }
.cc7 , .select7 , .select7 em { color: #000; background-color:#EE82EE !important; }
.cc8 , .select8 , .select8 em { color: #000; background-color:#A0A0A0 !important; }
.cc9 , .select9 , .select9 em { color: #000; background-color:#FFFFFF !important; }
.cc0 , .select0 , .select0 em { color: #FFF; background-color:#202020 !important; }

.bg1 { background-color : rgba(150,  75,   0, .9); color : black; }
.bg2 { background-color : rgba(255,   0,   0, .9); color : black; }
.bg3 { background-color : rgba(255, 165,   0, .9); color : black; }
.bg4 { background-color : rgba(255, 255,   0, .9); color : black; }
.bg5 { background-color : rgba(154, 205,  50, .9); color : black; }
.bg6 { background-color : rgba(100, 149, 237, .9); color : black; }
.bg7 { background-color : rgba(238, 130, 238, .9); color : black; }
.bg8 { background-color : rgba(160, 160, 160, .9); color : black; }
.bg9 { background-color : rgba(255, 255, 255, .9); color : black; }
.bg0 { background-color : rgba(128, 128, 128, .9); color : black; }

.fg1 {            color : rgba(200,  99,   0, 1) !important; }
.fg2 {            color : rgba(255,   0,   0, 1) !important; }
.fg3 {            color : rgba(255, 165,   0, 1) !important; }
.fg4 {            color : rgba(255, 255,   0, 1) !important; }
.fg5 {            color : rgba(154, 205,  50, 1) !important; }
.fg6 {            color : rgba(100, 149, 237, 1) !important; }
.fg7 {            color : rgba(238, 130, 238, 1) !important; }
.fg8 {            color : rgba(160, 160, 160, 1) !important; }
.fg9 {            color : rgba(255, 255, 255, 1) !important; }
.fg0 {            color : rgba(  0,   0,   0, 1) !important; text-shadow : 0px -1px #FFFFFF; }

.select1,
.select2,
.select3,
.select4,
.select5,
.select6,
.select7,
.select8,
.select9,
.select0 { cursor : all-scroll; }




#dom_tools_html   {                 line-height : normal;            }
#dom_tools_html * {                 user-select : none;              }
#dom_tools_html * { -webkit-tap-highlight-color : rgba(255,0,0,.05); }

 #pat_bag
,#sel_bag
,#headsup
,#dom_traversal
,#dev_log_map
,#test_panel
,#dom_load_tags
,#transcript1
,#transcript2
{
    min-width     :12em;
    min-height    :12em;
    margin-bottom : 5em;
    font-weight   : 900;
}

 #pat_bag.scrolled
,#sel_bag.scrolled
,#headsup.scrolled
,#dom_traversal.scrolled
,#dev_log_map.scrolled
,#test_panel.scrolled
,#dom_load_tags.scrolled
,#transcript1.scrolled
,#transcript2.scrolled
{
    border:1px dashed red;

}
#transcript1 { border: 3px #964B00 solid !important; }
#transcript2 { border: 3px #FF0000 solid !important; }

#pat_bag.scrolled           { background-color: rgba(255,  0,  0,.1); }
#sel_bag.scrolled           { background-color: rgba(255,  0,  0,.1); }
#headsup.scrolled           { background-color: rgba(  0,255,  0,.1); }
#dom_traversal.scrolled     { background-color: rgba(  0,255,  0,.1); }
#dev_log_map.scrolled       { background-color: rgba(  0,  0,255,.1); }
#test_panel.scrolled        { background-color: rgba(  0,  0,255,.1); }
#dom_load_tags.scrolled     { background-color: rgba(  0,  0,255,.1); }
#transcript1.scrolled       { background-color: rgba(255,255,  0,.1); }
#transcript2.scrolled       { background-color: rgba(255,255,  0,.1); }

 #pat_bag       >div
,#sel_bag       >div
,#headsup       >div
,#dom_traversal >div
{
    margin        : 0;
    padding       : 0;
    line-height   : normal;
}

 #pat_bag       label
,#sel_bag       label
,#headsup       label
,#dom_traversal label
{
    line-height   :  3em;
}

 #pat_bag>div>div
,#sel_bag>div>div
,#headsup>div>div
,#dom_traversal>div>div
{
    color         : #050505;
}

.toolbag_button {
    display       : inline-block;
    padding-left  : 1ex;
    padding-right : 1ex;
    cursor        : pointer;
}

.toolbag_button::after {
    transition    : all ease-in 250ms;
}




#pat_bag { float     : left;   }
#pat_bag { min-width : 24em;   }
#pat_bag { overflow  : hidden; }



#sel_bag { float : left; }

#sel_bag          { color                      : green; }
#sel_bag.back     { color                      : red; }

#sel_bag>div      { margin                     : 0 0 0 2em; }





.max_width_30 { max-width:30em; overflow-x:auto; overflow-y:hidden; }







#headsup {
    float          : left;
    margin         : 0 !important;


    color          : #050505;
    font-family    : Arial, Helvetica, sans-serif;

    text-shadow    : 0px -1px 0px rgba(0,0,0,0.4), 0px 1px 0px rgba(255,255,255,0.3);
    vertical-align : top;
}

#headsup>* { float:left; }

#headsup    em,
#headsup_w  em,
#headsup_ds em,
#dom_traversal {
    margin     : 0;
    padding    : 0.1em;
    min-width  : 1.5em;
}

#headsup em:hover { box-shadow : rgba(128,128,128,0.9) 0 0.1em 0.1em inset; }



#headsup>em        , #headsup_w>em        , #headsup_ds>em        , #dom_traversal>em { margin           : 3px;                  }
#headsup>em        , #headsup_w>em        , #headsup_ds>em        , #dom_traversal>em { border           : rgba(255,255,255,.9); }
#headsup>em        , #headsup_w>em        , #headsup_ds>em        , #dom_traversal>em { border-radius    : 2em;                  }
#headsup>em        , #headsup_w>em        , #headsup_ds>em        , #dom_traversal>em { transform-origin : 50% 50%;              }
#headsup>em        , #headsup_w>em        , #headsup_ds>em        , #dom_traversal>em { color            : rgba(  0,  0,  0,.7); }
#headsup>em        , #headsup_w>em        , #headsup_ds>em        , #dom_traversal>em { font-size        : 200%;                 }
#headsup>em        , #headsup_w>em        , #headsup_ds>em        , #dom_traversal>em { text-align       : center;               }



#headsup>em.checked, #headsup_w>em.checked, #headsup_ds>em.checked, #dom_traversal>em.checked { margin        : 0              ; }
#headsup>em.checked, #headsup_w>em.checked, #headsup_ds>em.checked, #dom_traversal>em.checked { background    : linear-gradient(to bottom, #AAA, #200); }
#headsup>em.checked, #headsup_w>em.checked, #headsup_ds>em.checked, #dom_traversal>em.checked { color         : #000           ; }

#anchor_freeze.checked { color         : #D00 !important; }
#containers_hi.checked { color         : #FC0 !important; }


#thumb_p {
    margin           : -.3em 1ex 0 -.3em !important;
    min-width        :   3em             !important;
    border           : 0;
    background-color : transparent;
    padding          : 0                 !important;
    color            : rgba(0,0,0,.9)    !important;
    font-size        : 200%;
}


#headsup_w em {
    border        : rgba(255,255,255,0.2) solid;
    border-radius : 2em !important;
    font-size     : 160%;
    margin        : 0 !important;
    text-align    : center;
    text-shadow   : none;
    font-weight   : 900 !important;
}




#words_drop_case         { font-size     : 120% !important; }
#words_drop_case         { padding       : .1em .5em .1em .5em !important; }
#words_drop_case::after  {
    content             : 'case';
    position            : absolute;
    transition-duration : 500ms;
}

#words_drop_case                { opacity    : 0.5; }
#words_drop_case.checked        { opacity    : 1.0; }
#words_drop_case.checked        { background : linear-gradient(to bottom, #F00, #800) !important; }

#words_drop_case::after         { transform  : translate(-60%,  5%) rotate(90deg); }
#words_drop_case.checked::after { transform  : translate(-60%,  5%) rotate( 0deg); }
#words_drop_case.checked::after { opacity    : 1.0; }



#words_drop_ing         { font-size     : 120% !important; }
#words_drop_ing         { padding       : .1em .5em .1em .5em !important; }
#words_drop_ing::after  {
    content             : 'ing';
    position            : absolute;
    transition-duration : 500ms;
}

#words_drop_ing                { opacity    : 0.5; }
#words_drop_ing.checked        { opacity    : 1.0; }
#words_drop_ing.checked        { background : linear-gradient(to bottom, #F00, #800) !important; }

#words_drop_ing::after         { transform  : translate(-60%,  5%) rotate(90deg); }
#words_drop_ing.checked::after { transform  : translate(-60%,  5%) rotate( 0deg); }
#words_drop_ing.checked::after { opacity    : 1.0; }



#words_drop_s         { font-size     : 120% !important; }
#words_drop_s         { padding       : .1em .5em .1em .5em !important; }
#words_drop_s::after  {
    content             : 'S';
    position            : absolute;
    transition-duration : 500ms;
}

#words_drop_s                { opacity    : 0.5; }
#words_drop_s.checked        { opacity    : 1.0; }
#words_drop_s.checked        { background : linear-gradient(to bottom, #F00, #800) !important; }

#words_drop_s::after         { transform  : translate(-80%,  5%) rotate(90deg); }
#words_drop_s.checked::after { transform  : translate(-80%,  5%) rotate( 0deg); }
#words_drop_s.checked::after { opacity    : 1.0; }



#words_opcycle                         { text-shadow                : 1px 1px 3px black      !important; }
#words_opcycle.checked                 { border-radius              : 50% 50% 10% 10%        !important; }
#words_opcycle.checked                 { transition-duration        : 100ms;                             }
#words_opcycle.checked                 { transition-timing-function : cubic-bezier(0.5, 0.05, 0.9, 1.2); }
#words_opcycle.checked.words_exact     { transform                  : rotate(-45deg)         !important; }
#words_opcycle.checked.words_head_tail { transform                  : rotate( 45deg)         !important; }
#words_opcycle.checked.words_segment   { transform                  : rotate(  0deg)         !important; }
#words_opcycle.freezed                 { opacity                    : 0.5                    !important; }

      #words_regex                     { color       : #000; }
.dark #words_regex                     { color       : #CCC; }
      #words_regex pre                 { padding     :    0; }
      #words_regex pre                 { margin      :    0; }
      #words_regex pre                 { font-size   :  80%; }
      #words_regex pre                 { font-weight :  900; }
      #words_regex.fg2                 { font-weight :  900 !important; }



#words_recycle {
    color         : green;
    box-shadow    : 2px 2px 4px rgba(0,0,0,0.3);
    border-radius : 1.5em;
    text-align    : center;
    font-size     : 250%;
}

#words_recycle.checked  { background : linear-gradient(to bottom, #F00, #800) !important; }


#words_bag_rot {
    padding          : 0 0.3em 0 0.3em    !important;
    background-color : rgba(136,136,136,0.5)              !important;
    text-shadow      : 1px 1px 3px black  !important;
}

#words_bag_rot div {
    pointer-events   : none               !important;
    padding          : 0                  !important;
    line-height      : 0.9                !important;
    transition       : all 500ms ease-out !important;
}


#tools_scroll {
    float : left;
    clear : left;

    background    : linear-gradient(to bottom, #FFF   , #EB0   );
    border        : 0 !important;
    border-radius : 2em;
    box-shadow    : rgba(0,0,0,0.3) 0 0.1em 0.5ex inset;
    font-size     : 300%;
    text-align    : center;
}


 #wording
,#theme_dark
{
    background    : linear-gradient(to bottom, #FFF, #FF0);
    color         : #000;
}

 #wording
,#theme_dark
{
    border        : 0;
    border-radius : 2em;
    box-shadow    : rgba(0,0,0,0.3) 0 0.1em 0.5ex inset;
    font-size     : 200%;
    text-align    : center;
}

 #wording.checked
,#theme_dark.checked {
    background    : linear-gradient(to bottom, #AAA, #200);
    color         : #FC0;
    margin        : 0   !important;
}



#tools_tier2 {
    background    : linear-gradient(to bottom,#FFF,#EB0);
    border        : 0 !important;
    border-radius : 2em;
    box-shadow    : rgba(0,0,0,0.3) 0 0.1em 0.5ex inset;
    font-size     : 150%;
    text-align    : center;
}


#scroll_smooth::after {

    content          : '\\21c9';
    position         : absolute;
    transform        : translate(-80%, 5%) scale(1.5) rotate(90deg);

}

#scroll_smooth.checked::after {
    content          : '\\2933';
    transform        : translate(-80%, 10%) scale(1.5) rotate(90deg);
}


#overflow_visi::after {


    content          : '\\2750';
    position         : absolute;
    transform        : translate(-80%, 5%) scale(1.0) rotate(90deg);
    opacity          : 0.5;

}

#overflow_visi.checked::after {
    content          : '\\25A0';
    transform        : translate(-100%, -5%) scale(1.5);
    opacity          : 1.0;
}





#details_radio::after {
    content          : '\\21C9';
    font-size        : 130%;
    line-height      : 1.2em;
    margin-left      : -0.5em;
    opacity          : 0.5;
}

#details_radio.checked::after {
    content          : '\\25B6';
    opacity          : 1.0;
}


#show_seekzone::after {
    position         : absolute;
    content          : '\\29EE';
    transform        : translate(-80%, 5%) scale(1.0) rotate(90deg);
    opacity          : 0.5;

}

#show_seekzone.checked::after {
    content          : '\\29EF';
    transform        : translate(-80%,-10%) scale(1.5) rotate( 0deg);
    opacity          : 1.0;

}


#pin_seekspot  { border-radius : 10% 10% 1em 1em !important; padding-top    :   0em !important; }
#theme_dark    { border-radius : 10% 10% 1em 1em !important; padding-top    : 0.6em !important; }
#containers_hi { border-radius : 10% 10% 1em 1em !important; padding-top    : 1.2em !important; }
#anchor_freeze { border-radius : 10% 1em 1em 10% !important; padding-left   : 1.0em !important; }
#wording       { border-radius : 10% 1em 1em 10% !important; padding-left   : 0.5em !important; }
#overflow_visi { border-radius : 1em 1em 10% 10% !important; padding-bottom : 0.5em !important; }
#details_close { border-radius : 1em 1em 10% 10% !important; padding-bottom :   0em !important; }
#details_open  { border-radius : 10% 10% 1em 1em !important; padding-bottom :   0em !important; }
#details_radio { border-radius : 10% 1em 1em 10% !important; padding-bottom :   0em !important; }
#scroll_smooth { border-radius : 1em 1em 10% 10% !important; padding-bottom : 1.0em !important; }
#remove_ads    { border-radius : 1em 1em 10% 10% !important; padding-bottom : 0.5em !important; }
#lines_wot     { border-radius : 1em 1em 10% 10% !important; padding-bottom : 0.5em !important; }
#split_wot     { border-radius : 1em 1em 10% 10% !important; padding-bottom : 1.0em !important; }



#pin_seekspot::after {
    content          : '\\2295';
    position         : absolute;
    transform        : translate(-80%,  5%) scale(0.5) rotate(90deg);
    opacity          : 0.5;

}

#pin_seekspot.checked::after {
    transform        : translate(-70%,  0%) scale(1.0) rotate(-45deg);
    opacity          : 1.0;
}


#log_seekspot     {
    transform     : scale(0.7);
}
#log_seekspot::after {
    content          : '\\33D2';
    position         : absolute;
    transform        : translate(-80%,  5%) scale(0.5) rotate(90deg);
    opacity          : 0.5;
}

#log_seekspot.checked::after {
    transform        : translate(-80%, 10%) scale(1.0) rotate( 0deg);
    opacity          : 1.0;
}


#remove_ads.checked { background    : linear-gradient(to bottom, rgba(170,170,170,0.5), rgba(255,0,0,0.7)) !important; }
#remove_ads        {
    transform     : scale(0.6);
}
#remove_ads::after {
    content       : '\\2702';
    position      : absolute;
    transform     : translate(-65%,  0%) scale(1.0) rotate(90deg);
    opacity       : 0.5;
    font-weight   : 900;
    font-size     : 150%;
}

#remove_ads.checked::after {
    transform     : translate(-80%,-10%) scale(1.0) rotate( 0deg);
    opacity       : 1.0;
}


#split_wot::after {
    content       : 'wot';
    position      : absolute;
    transform     : translate(-65%,  0%) scale(0.5) rotate(90deg);
    opacity       : 0.5;
}

#split_wot.checked::after {
    transform     : translate(-65%,  0%) scale(1.0) rotate( 0deg);
    opacity       : 1.0;
}


#lines_wot.checked { background    : linear-gradient(to bottom, rgba(170,170,170,0.5), rgba(255,0,0,0.7)) !important; }
#lines_wot        {
    transform     : scale(0.7);
}
#lines_wot::after {
    content       : '\\266F';
    position      : absolute;
    transform     : translate(-65%,  0%) scale(1.0) rotate(90deg);
    opacity       : 0.5;
    font-weight   : 900;
    font-size     : 150%;
}

#lines_wot.checked::after {
    transform     : translate(-80%,-10%) scale(1.0) rotate( 0deg);
    opacity       : 1.0;
}



#headsup_ds *::after            { transition : all ease-in 250ms; }

#site_or_page::after            { content :  'Page'; position : absolute; transform : translate(-60%,  5%) scale(0.5) rotate(-10deg); }
#site_or_page.checked::after    { content :  'Site'; color    : red;      transform : translate(-60%,  5%) scale(0.7) rotate( 10deg); }

#mask_or_hide::after            { content :  'Hide'; position : absolute; transform : translate(-60%,  5%) scale(0.5) rotate(-10deg); }
#mask_or_hide.checked::after    { content :  'Mask'; color    : red;      transform : translate(-60%,  5%) scale(0.7) rotate( 10deg); }

#deny_or_allow::after           { content : 'Allow'; position : absolute; transform : translate(-60%,  5%) scale(0.5) rotate(-10deg); }
#deny_or_allow.checked::after   { content :  'Deny'; color    : red;      transform : translate(-60%,  5%) scale(0.7) rotate( 10deg); }

#edit_or_stage::after           { font-size: 300%; }
#edit_or_stage::after           { content : '\\2699'; position : absolute; transform : translate(-60%,  5%) scale(0.5) rotate(-10deg); }
#edit_or_stage.checked::after   { content : '\\2699'; color    : red;      transform : translate(-60%,  5%) scale(0.7) rotate( 10deg); }

#dom_hide1_reset::after         { font-size: 300%; }
#dom_hide1_reset::after         { content : '\\267B'; position : absolute; transform : translate(-60%,  5%) scale(0.5) rotate(-10deg); }
#dom_hide1_reset.checked::after { content : '\\267B'; color    : red;      transform : translate(-60%,  5%) scale(0.7) rotate( 10deg); }

#dom_hide1_undo                 { font-size: 140% !important; }

#targeteer::after               { font-size: 300%; }
#targeteer::after               { content : '\\2295'; position : absolute; transform : translate(-60%,  0%) scale(0.5) rotate(-45deg); }
#targeteer.checked::after       { content : '\\2295'; color    : red;      transform : translate(-59%, -7%) scale(0.7) rotate(  0deg); }

#target_01::after               { font-size: 200%; }
#target_01::after               { content : '1'  ;   position : absolute; transform : translate(-60%,  0%) scale(0.5) rotate(-45deg); }
#target_01.checked::after       { content : '1'  ;   color    : red;      transform : translate(-59%, -7%) scale(0.7) rotate(  0deg); }

#target_02::after               { font-size: 200%; }
#target_02::after               { content : '2'  ;   position : absolute; transform : translate(-60%,  0%) scale(0.5) rotate(-45deg); }
#target_02.checked::after       { content : '2'  ;   color    : red;      transform : translate(-59%, -7%) scale(0.7) rotate(  0deg); }

#target_03::after               { font-size: 200%; }
#target_03::after               { content : '3'  ;   position : absolute; transform : translate(-60%,  0%) scale(0.5) rotate(-45deg); }
#target_03.checked::after       { content : '3'  ;   color    : red;      transform : translate(-59%, -7%) scale(0.7) rotate(  0deg); }



#headsup_bw { min-height : 8em; }




#dom_traversal {

    float       : left;
    clear       : left;
    white-space : nowrap;
}

#dom_traversal>table {
    width       : 100%;
    margin-top  :  1em;
}
#tools_node {
    outline    : 2px dashed red;
}





 #dev_log_map   em
,#test_panel    em
,#dom_load_tags em
{

    display     : inherit;
}

 #dev_log_map
,#test_panel
,#dom_load_tags
{
    float       : left;
}

 #dev_log_map
,#test_panel
{
    color       : #eee;
    font-family : "Comic sans ms";
    text-align  : left;
}
 #dev_log_map   em
,#test_panel    em
{
    text-align  : center;
}

 #dom_load_tags em
{
    text-align  : right;
}

   #transcript                      { padding       : 1em; }

 #pat_bag           em
,#sel_bag           em
,#headsup           em
,#dom_traversal     em
,#dev_log_map       em
,#test_panel        em
,#dom_load_tags     em
,#transcript1       em
,#transcript2       em
{
    white-space    : nowrap;
    margin-top     : 2px;
}

#dom_load_tags em
{
    min-width      : 8em;
    padding-right  : 1em;
    vertical-align : super;
}

#dom_load_tags.dark {
    color          : orange;
}



.tiny  { font-size :  50% !important; vertical-align : middle; }
.small { font-size :  80% !important; vertical-align : middle; }
.big   { font-size : 200% !important; vertical-align : middle; }

.info,
.error {
    opacity           : 1 !important;
    border-radius     : 0.5em;
    font-family       : monospace;
}

.error { border       : red   groove 5px; }
.info  { border       : green groove 5px; }

.error { background-color  : white; }
.info  { background-color  : lightblue; }

.error { color        :   red; }
.info  { color        : blue; }

.error { font-size    :  150%; }
.info  { font-size    :  100%; }



.sym_showing, .sym_hiding , .sym_backing, .sym_alting
.sym_colide , .sym_dismiss, .sym_binning,
.sym_bagger , .sym_docker ,
.sym_update , .sym_staged , .sym_result
{
    font-size    : 300% !important;
    font-weight  : 900  !important;
    text-shadow  : rgba(0,0,0,0.4) .1em .1em .2em;
    line-height  : .6em;
    min-width : 1em !important;
    display : inline-block;
}

.sym_colide  { color : #F0F; }
.sym_dismiss { color : #F0F; }

.sym_update  { color : #FFA500; }
.sym_staged  { color : #6495ED; }
.sym_result  { color : #FFFF00; }

.sym_showing { color : black; text-shadow: 1px 1px 1px #FF0; font-weight:100 !important; }
.sym_hiding  { color : black; text-shadow: 1px 1px 1px #0F0; font-weight:100 !important; }
.sym_backing { color : black; text-shadow: 1px 1px 1px #F00; font-weight:100 !important; }
.sym_alting  { color : black; text-shadow: 1px 1px 1px #00F; font-weight:100 !important; }
.sym_binning { color : #444 ; text-shadow: 1px 1px 1px #DDD; font-weight:100 !important; }

.sym_bagger  { color : #58C; }
.sym_docker  { color : #C80; }





.log_num_thumb {
    color : #aaa;
}

           .log_node_toString { display : inline-block; width:24em; }
.div_match .log_node_toString { display : inline !important;        }

.log_sep_line {
    border-radius  : 5em !important;
    box-shadow     : rgba(0,0,0,0.3) 0 0.3em 0.3em inset;
    min-height     : 5em;
    min-width      : 5em;
    font-size      : 200%;
}
.log_sep_line * {
    text-align     : center !important;

}


.badge {
    position       :  relative;

    border-radius  : 8em !important;
    box-shadow     : rgba(0,0,0,0.3) 0 0.3em 0.3em !important;

    min-height     : 8em   !important;
    min-width      : 8em   !important;


    line-height    : 100%   !important;

    text-align     : center !important;
    vertical-align : middle !important;
}

.badge p {
    position       : absolute;
    margin         : 0;
    margin-right   :-50%;
    top            : 50%;
    left           : 50%;
    transform      : translate(-50%,-50%);

    text-align     : center !important;
    white-space    : normal !important;
}



.checked {
    border           : black solid !important;
    box-shadow       : none !important;
}





.scrolled      >div { transition-duration        : 100ms; }
.scrolled      >div {
    box-shadow                 : 3px 3px 6px black !important;
    transition-property        : all;
    transition-timing-function : ease-in;

}




.badge                  { background       : linear-gradient(to bottom, #FC0, #FF0); }
.info                   { background       : rgba(0,0,0,0.2); }

      .current_slot_num { color:white; background:linear-gradient(to bottom, #000, #0F0) !important; }
.back .current_slot_num { color:white; background:linear-gradient(to bottom, #F00, #000) !important; }

#sel_bag>div                  { border     : 2px solid transparent !important; }

#sel_bag>div                  { opacity    :  0.7; }
#sel_bag>div.current_slot     { opacity    :  1.0; }
#sel_bag>div.current_slot     { box-shadow : rgba(0,0,0,0.3) 0 0.3em 0.3em; }
#sel_bag>div.current_slot     { border     : 4px solid black !important; }






.bag     { padding : 1em; }
.bag div { padding : 0;   }
.bag  em {

    min-width      : 9px;
    min-height     : 9px;
    width          : 9px;
    height         : 9px;

}

.bag em:nth-of-type(   1) { font-size  : 150%; }
.bag em:nth-of-type(   2) { font-size  : 140%; }
.bag em:nth-of-type(   3) { font-size  : 130%; }
.bag em:nth-of-type(   4) { font-size  : 120%; }
.bag em:nth-of-type(   5) { font-size  : 110%; }
.bag em:nth-of-type(   6) { font-size  : 100%; }
.bag em:nth-of-type(   7) { font-size  :  90%; }
.bag em:nth-of-type(   8) { font-size  :  80%; }
.bag em:nth-of-type(   9) { font-size  :  70%; }
.bag em:nth-of-type(n+10) { font-size  :  60%; }




.current_slot_num {
    box-shadow : 0px 3px 6px rgba(0,0,0,0.8) !important;
    font-size  : 150%;
}


.bag                  { border-radius : 2em; }
.transcript_msg div   { border-radius : 1ex; }
.bag div              { border-radius : 2ex; }

#headsup              { border-radius : 2em; }
#pat_bag              { border-radius : 2em; }
#sel_bag              { border-radius : 2em; }
#dom_traversal        { border-radius : 2em; }

#headsup>div>div      { border-radius : 2em; }
#headsup>div>div      { border        : 5px solid #000000; }
#headsup>div>div div  { border-radius : 1em; }

#dom_traversal>div>div     { border-radius : 2em; }
#dom_traversal>div>div     { border        : 5px solid #000000; }
#dom_traversal>div>div div { border-radius : 1em; }

#pat_bag>div>div     { border-radius : 2em; }
#pat_bag>div>div     { border        : 5px solid #000000; }
#pat_bag>div>div div { border-radius : 1em; }
#sel_bag>div>div     { border-radius : 2em; }
#sel_bag>div>div     { border        : 5px solid #000000; }
#sel_bag>div>div div { border-radius : 1em; }




.eso_div { transition-duration         : 900ms !important; }
.eso_div { transition-delay            :   0ms !important; }
.eso_div {
    display       : inline-block           !important;
    border        : 1px solid #404040      !important;
    border-radius : 5px 5px 5px 5px        !important;
    box-shadow    : 0 0 10px #000000 inset !important;
    background    : rgba(16,16,16,0.5)     !important;
    min-width     : 8em;
    min-height    : 8em;

    color         : orange !important;
    font-weight   : 700;

    transition-property : all !important;
}



.pulse_in { transition-duration         : 500ms !important; }
.pulse_in { transition-delay            :   0ms !important; }
.pulse_in {
    transform                   : translate(-10px, 10px) scale(2.0) !important;
    transition-property         :   all !important;
    transition-timing-function  :  ease !important;
}

.pulse_out { transition-duration         : 500ms !important; }
.pulse_out { transition-delay            :   0ms !important; }
.pulse_out {
    transform                   : scale(1) rotate(0) !important;
    transition-property         :   all !important;
    transition-timing-function  :  ease !important;
}




li:nth-child( 5n+0) { margin-bottom:.5em !important; }
li:nth-child(10n+0) { margin-bottom:.8em !important; }
li { white-space: nowrap; }



#headsup_l {
 clear          : left;
 white-space    : nowrap;
 cursor         : pointer;
 user-select    : none;
}

#dom_grid_playground_grid_sized {
 white-space    : nowrap;
 cursor         : pointer;
 user-select    : none;
}

#headsup_l_check {
 cursor         : pointer;
}





#headsup    { min-width : 23em; min-height:13em; }
#headsup_w  { min-width : 17em; min-height:13em; }
#headsup_ds { min-width : 14em; min-height: 9em; }






.grid_caption {
    cursor              : pointer;
    border-radius       : 16px;
    background          : rgba(32,32,64,0.9);
    text-align          : center;
    transform-origin    : 0 0 !important;

}
.grid_caption.pressed { transform : none !important; }
.grid_caption em {
    padding        : 0 1ex 0 1ex;

    background     : rgba(255,192,192,0.2);
    color          : rgba(  0,  0,  0,1.0);
    border-radius  : 1em;

    font-family    : "Comic sans ms";
    font-weight    : 700;
    font-size      : 100%;

    white-space    : nowrap;
}
.grid_caption               { opacity : 0.8; }
.grid_caption_see_through * { opacity : 0.2; }

.grid_caption>em              {
    position    : absolute;
    top         : 50%;
    left        : 50%;
}
.grid_caption>em:nth-child(1) { transform : translate(-50%,-3em); }
.grid_caption>em:nth-child(2) { transform : translate(-50%,-1em); }
.grid_caption>em:nth-child(3) { transform : translate(-50%,+1em); }





.grid_caption_hide { animation-duration        : 250ms; }
.grid_caption_hide { animation-delay           : 250ms; }
.grid_caption_hide {
                     transform-origin          : 0% 0% 0;
                     animation-name            : grid_caption_hide;
                     animation-timing-function : ease-out;
                     animation-fill-mode       : both;
}

@keyframes grid_caption_hide {
    100% { top       :        0; }
    100% { left      :        0; }
    100% { opacity   :       .1; }
    100% { transform : scale(.5) translate(-100%,-100%); }
}


.grid_caption_show  {
    animation : 1000ms cubic-bezier(0,1,0.5,0.8) forwards grid_caption_show
    ,     250ms 2000ms                           forwards grid_caption_show_restore_opacity
    ;
}

@keyframes grid_caption_show {

     from { transform : scale(0.5); }
     99%  { transform : scale(0.5); }

     from { top       :       0   ; }
     from { left      :       0   ; }
     97%  { top       :       0   ; }
     80%  { left      :       0   ; }

      to  { opacity   :       1.0 ; }
}

@keyframes grid_caption_show_restore_opacity {
    from { opacity   :       1.0 ; }
}


.grid_caption_see_through { transition-duration : 200ms; }
.grid_caption_see_through {
    background          : rgba(192,192,192,0.1);
}


   @keyframes on_grid_enter {
    100%       { transform    :  scale(0.9 ); }
}




.index {
    font-size     : 180%;
    border-radius : 1em;
    padding-left  : .4em;
    padding-right : .4em;
    width         : 2em;
}









.pivot_panel { box-shadow : 4px 4px 12px rgba(0,0,48,0.7) !important; }



.pinned      { transform-origin : 50% 50%                    ; }

.pivot_panel { animation : 250ms ease-out none     forwarding; }

@keyframes forwarding    {
      0% { transform   : scale(0.96,0.96); }
     10% { transform   : scale(0.97,0.97); }
    100% { transform   : scale(1.00,1.00); }
}


.pinned       {           filter : none                            !important; }
.pivot_panel  {           filter : none                            !important; }
.fully_spread {           filter : grayscale(80%) brightness( 90%) !important; }
.on_grid      {           filter : none                            !important; }

.dimmed_panel {           opacity : 0.3; }


.dimmed_panel { transition : opacity  300ms ease-out; }









.standby                 { background : linear-gradient(to bottom, #666, #222) !important; }
#sel_bag.standby         { background : linear-gradient(to bottom, #F00, #400) !important; }
#sel_bag.standby::before { content    : '\\2699'; }




  .dimmed_panel INPUT { pointer-events      :        none; }
  .dimmed_panel INPUT { cursor              :     inherit; }

  .on_grid      INPUT { pointer-events      :        none; }
  .on_grid      INPUT { cursor              :     inherit; }






#pivspot   {
    pointer-events   : none;
    position         : fixed;
    transform        : translate(-50%,-50%);
    transform-origin : 50% 50% 0;

}
#pivspot.hidden { opacity : 0; }


#pivspot_c {
    border-radius    : 50%;
    border           : 2px solid white;
    text-shadow      : rgba( 0, 0, 0,0.8) 1px 1px 3px;
    box-shadow       : rgba( 0, 0, 0,0.2) 2px 2px 16px 5px;
    background       : rgba(32,32,32,0.2);
    color            : white;
    font-size        : 42px;
    width            : 32px;
    height           : 32px;
}



#hotspot               { background      : none      !important; }
#hotspot               { transform       : translate(-50%,-50%); }
#hotspot               { align-items     : center;               }
#hotspot               { box-sizing      : border-box;           }
#hotspot               { cursor          : pointer;              }
#hotspot               { justify-content : center;               }

#hotspot      *:after  { background      : #777;                 }
#hotspot.dark *:after  { background      : #AAA;                 }

#hotspot.move_on_cooldown:before { font-size: 24px; content: "\\231B"     ; position: absolute; transform: translate(2em,0); border-radius:1em; padding:0.2em 0.5em; background-color:rgba(000,255,000,0.5); box-shadow:-1px -1px 3px #888 inset; }
#hotspot.not_moved_enough:after  { font-size: 24px; content: "\\25C4\\25BA"; position: absolute; transform: translate(2em,0); border-radius:1em; padding:0.2em 0.5em; background-color:rgba(000,000,255,0.5); box-shadow:-1px -1px 3px #888 inset; }

.page_items_all_removed                   { background : #F00 !important; }
.page_items_has_pat_csv   .hotwave::after { background : #080 !important; }
.page_items_has_bak_csv   .hotwave::after { background : #800 !important; }
.page_items_has_alt_csv   .hotwave::after { background : #008 !important; }
.page_items_hidden_panels .hotwave::after { background : #F0F !important; }
.page_items_off_gutter    .hotwave::after { background : #000 !important; }
.page_items_all_removed   .hotwave::after { background : #000 !important; }

.page_items_has_pat_csv   .hotring        { border : 3px dotted #080 !important; }
.page_items_has_bak_csv   .hotring        { border : 3px dotted #F00 !important; }
.page_items_has_alt_csv   .hotring        { border : 3px dotted #00F !important; }
.store_update_pending     .hotring        { border : 3px  solid #000 !important; }





#hotspot_c { pointer-events   : none;                             }
#hotspot_c { box-shadow       : rgba(0,0,0,0.2) 2px 2px 16px 5px; }


              #hotspot_c { border-radius : 50%;                          }
              #hotspot_c { border        : 2px solid   white           ; }
.store_count1 #hotspot_c { border        : 9px solid #964B00 !important; }
.store_count2 #hotspot_c { border        : 9px solid #FF0000 !important; }
.store_count3 #hotspot_c { border        : 9px solid #FFA500 !important; }

#hotspot.store_count1::after,
#hotspot.store_count2::after,
#hotspot.store_count3::after {
    content           : '\\2714';
    font-size         : 64px;
    transform-origin  : 50% 50%;
    position          : absolute;
    margin-top        : -1em;

}
#hotspot.store_count1::after { color : #964B00; }
#hotspot.store_count2::after { color : #FF0000; }
#hotspot.store_count3::after { color : #FFA500; }

#hotspot.store_count1::after,
#hotspot.store_count2::after,
#hotspot.store_count3::after { animation :  250ms none store_count_check; }
@keyframes store_count_check {

     from { transform         : scale(0.1) translate(0.5em,  0    ); }
      10% { transform         : scale(1.1) translate(0.5em,  0    ); }
      50% { transform         : scale(1.0) translate(0.5em, -0.5em); }
       to { transform         : scale(0.1) translate(0    ,  1.0em); }

     from { opacity           :       0.1 ; }
      80% { opacity           :       1.0 ; }
      to  { opacity           :       0.1 ; }
}

#hotspot_c { margin-left      : 14px;                             }
#hotspot_c { margin-top       : 14px;                             }
#hotspot_c { width            : 12px;                             }
#hotspot_c { height           : 12px;                             }

#hotspot_c { font-weight      : 100;                              }
#hotspot_c { font-size        : 12px;                             }
#hotspot_c { text-shadow      : rgba( 0, 0, 0,0.8) 1px 1px 3px;   }
#hotspot_c { background       : rgba(32,32,32,0.2);               }



#hotspot_c::after { position         : absolute;                    }
#hotspot_c::after { left             :   0px;                       }
#hotspot_c::after { top              :  -13px;                      }
#hotspot_c::after { font-size        :   9px;                       }
#hotspot_c::after { text-shadow      : rgba(0,0,0,0.8) 1px 1px 3px; }
#hotspot_c::after { background-color : transparent;                 }



      #hotspot_c        { color : #000; }
.dark #hotspot_c        { color : #FFF; }
      #hotspot_c::after { color : #000; }
.dark #hotspot_c::after { color : #FFF; }



#hotspot_c.rotate_NE::after { content : " NE"; }
#hotspot_c.rotate_SE::after { content : " SE"; }
#hotspot_c.rotate_SW::after { content : " SW"; }
#hotspot_c.rotate_NW::after { content : " NW"; }

#hotspot_c          >* { display    : inline-block;      }
#hotspot_c          >* { text-align : center;            }
#hotspot_c          >* { transition : all 900ms ease-in; }
#hotspot_c.rotate_NE>* { transform  : rotate(  40deg);   }
#hotspot_c.rotate_SE>* { transform  : rotate( -40deg);   }
#hotspot_c.rotate_SW>* { transform  : rotate( 220deg);   }
#hotspot_c.rotate_NW>* { transform  : rotate(-220deg);   }

.rotate_NE { transform : rotate( -45deg); }
.rotate_SE { transform : rotate( +45deg); }
.rotate_SW { transform : rotate(+135deg); }
.rotate_NW { transform : rotate(-135deg); }

.rotate_NE { background-color : rgba(150, 75,  0,0.7) !important; color:#964B00; }
.rotate_SE { background-color : rgba(255,  0,  0,0.7) !important; color:#FF0000; }
.rotate_SW { background-color : rgba(255,165,  0,0.7) !important; color:#FFA500; }
.rotate_NW { background-color : rgba(255,255,  0,0.7) !important; color:#FFFF00; }

.rotate_NE { transition-delay           : 100ms; }
.rotate_SE { transition-delay           : 100ms; }
.rotate_SW { transition-delay           : 100ms; }
.rotate_NW { transition-delay           : 100ms; }

.rotate_NE { transition-duration        : 300ms; }
.rotate_SE { transition-duration        : 300ms; }
.rotate_SW { transition-duration        : 300ms; }
.rotate_NW { transition-duration        : 300ms; }

.rotate_NE { transition-timing-function : cubic-bezier(0.5, 0.05, 0.9, 1.2); }
.rotate_SE { transition-timing-function : cubic-bezier(0.5, 0.05, 0.9, 1.2); }
.rotate_SW { transition-timing-function : cubic-bezier(0.5, 0.05, 0.9, 1.2); }
.rotate_NW { transition-timing-function : cubic-bezier(0.5, 0.05, 0.9, 1.2); }



#tools_trap {
    background    :             rgba( 32, 32, 32,0.3)  !important;
    box-shadow    : 0px 3px 3px rgba(000,000,000,0.5)  !important;
    border-radius : 50%                                !important;
    border        : 0                                  !important;
    text-align    : right                              !important;
    font-size     : 500%                               !important;
    font-weight   : 900                                !important;
    padding       : .1em                               !important;
    line-height   : 50%                                !important;
    min-width     : initial                            !important;
}
#tools_trap.scrolled { box-shadow    : none            !important; }
#tools_trap.dark     { color         : #888            !important; }




#tools_trap.trapped  { border-radius : 10% 50% 50% 10% !important; }

#hotspot_c.trapped   { border-radius : 10% 50% 50% 10% !important; }
#hotspot_c.trapped   { border-radius : 50% 10% 10% 50% !important; }

#pivspot_c.trapped   { border-radius : 10% 50% 50% 10% !important; }







.hotwave {
    position           : absolute;
    background         : none;

}

.hotwave::before {
    border-radius      : 50%;
    border             : .15em solid rgba(255,255,255, .9);
    content            : '';
    height             : 100%;
    left               : 0;
    top                : 0;
    opacity            : 0;
    position           : absolute;
    transform          : scale(2);
    transition         : transform .25s, opacity .2s;
    width              : 100%;
}

.hotwave::after {
    border-radius      : 50%;
    content            : '';
    height             : 100%;
    left               : 0;
    position           : absolute;
    top                : 0;
    width              : 100%;

}



.pulse_in    { animation-name            : flyUp;  }
.pulse_in    { animation-duration        : 3s;     }
.pulse_in    { animation-timing-function : linear; }

.pulsing     { border     : #444 3px dotted;                 }
.pulsing     { background : rgba(255,000,000,.8) !important; }

@keyframes flyUp {
      0% { transform : translate(100%, -100%) scale(2.5); }
    100% { transform : translate(100%, -400%) scale(1.0); }
     10% { opacity   :.9; }
    100% { opacity   : 0; }
}


#hotspot       .hotring        { background         : linear-gradient(to bottom, #FF0, #FB0); }
#hotspot.dark  .hotring        { background         : linear-gradient(to bottom, #443, #211); }

.hotwave:hover .hotring::after { opacity            : 0;                                }
.hotwave:hover .hotring::after { opacity            : 1;                                }
.hotwave:hover .hotring::after { transform          : translate(-50%, 0) scale(1);      }

         .hotwave::after              { animation            : 3s infinite ease-out       normal  wave; }
         .hotring                     { animation            : 3s infinite linear         normal pulse; }
#hotspot.hiding_tools>div>div         { animation            : 12s -11s infinite steps(2) normal flash; }


        .hiding_tools .hotwave::after { animation-play-state : paused;                                  }
        .hiding_tools .hotring        { animation-play-state : paused;                                  }

        .hiding_tools>*               { color                : transparent    !important;               }
#hotspot.hiding_tools>div>div         { border               : 3px #000 solid !important;               }




   @keyframes pulse {
      0%       { transform    : scale(1.0 ); }
      2%       { transform    : scale(0.95); }
     10%       { transform    : scale(1.1 ); }
    100%       { transform    : scale(1.0 ); }
}


   @keyframes wave {
      2%       { transform    : scale(1  ); }
    100%       { transform    : scale(2  ); }
      0%       { opacity      : 1;          }
    100%       { opacity      : 0;          }
}


   @keyframes flash {
      0%       { box-shadow : 0 0 3em .5em black; }
    100%       { box-shadow : 0 0 3em .5em white; }
}


   @keyframes borderColor {
      0%       { border-color : #888;       }
    100%       { border-color : #000;       }
}




       .layout_NE>div  { margin:   0   32em    0   -32em !important; }
       .layout_NW>div  { margin:   0     0     0     0   !important; }
       .layout_SE>div  { margin:   0     0     0     0   !important; }
       .layout_SW>div  { margin:   0   32em    0   -32em !important; }

.gutter.layout_NE>div  { margin:   0     0     0     0   !important; }
.gutter.layout_NW>div  { margin:   0   32em    0   -32em !important; }
.gutter.layout_SE>div  { margin:  20em   0   -20em   0   !important; }
.gutter.layout_SW>div  { margin:  20em 32em  -20em -32em !important; }



                       .dom_editing #hotring          { opacity             : 0.0                           ; }
                       .dom_editing #hotring          { width               : 2em                           ; }
                       .dom_editing #hotring          { height              : 2em                           ; }

                                    .hotwave::before  { transition-duration : 500ms                         ; }
                       .dom_editing .hotwave::before  { transition-duration : 500ms                         ; }
                       .dom_editing .hotwave::before  { opacity             : 1                   !important; }

                       .dom_editing #hotspot_c::after { text-align          : center              !important; }
                       .dom_editing #hotspot_c::after { font-size           : 16px                          ; }
                       .dom_editing #hotspot_c::after { font-weight         : 700                           ; }
                       .dom_editing #hotspot_c::after { opacity             : 1                             ; }







                       .dom_editing .hotwave::before  { border              : 2px solid            #DDD       ; }

                       .dom_editing #hotspot_c::after { color               :                      #00F       ; }
                 .site_localstorage #hotspot_c::after { color               :                      #E00       ; }

                       .dom_editing #hotspot_c::after { text-shadow         : -1px -1px 1px        #FFF       ; }
                 .site_localstorage #hotspot_c::after { text-shadow         : -1px -1px 1px        #FFF       ; }

                       .dom_editing .hotwave::before  { background-color    :                      #AAF       ; }
                  .marked_to_hide   .hotwave::before  { background-color    :                      #FFF       ; }

                       .dom_editing .hotwave::before  { box-shadow          : 1px 1px  1px     1px #FFF inset ; }
                  .marked_to_hide   .hotwave::before  { box-shadow          : 1px 1px  1px     1px #FFF inset ; }

                       .dom_editing                   { transition-duration : 250ms; }
                       .dom_editing #hotspot_c::after { margin              : 0em  0   0  -1em !important; }
                       .dom_editing #hotspot_c        { transform           : rotate(-15deg)             ; }
     .site_localstorage.dom_editing #hotspot_c        { transform           : rotate( 15deg)   !important; }

                       .dom_editing                   #hotspot_c::after { content : "PAGE\\AMASK"; }
        .marked_to_hide.dom_editing                   #hotspot_c::after { content : "PAGE\\AHIDE"; }
                       .dom_editing.site_localstorage #hotspot_c::after { content : "SITE\\AMASK"; }
        .marked_to_hide.dom_editing.site_localstorage #hotspot_c::after { content : "SITE\\AHIDE"; }






#hotring {
    position           : relative;
    width              : 3em;
    height             : 3em;
    border-radius      : 50%;
    box-shadow         : 0 2px 10px rgba(0,0,0, .2);
    font-weight        : 600;
    font-size          : 12px;
    justify-content    : center;
    text-align         : center;

}


#hotring.u   { border-radius    :  0   0 50% 2em !important; }
#hotring.u.r { border-radius    :  0   0   0 50% !important; }
#hotring.r   { border-radius    :50%   0   0 2em !important; }
#hotring.r.d { border-radius    :50%   0   0   0 !important; }
#hotring.d   { border-radius    :50% 2em   0   0 !important; }
#hotring.d.l { border-radius    :  0 50%   0   0 !important; }
#hotring.l   { border-radius    :  0 50% 2em   0 !important; }
#hotring.l.u { border-radius    :  0   0 50%   0 !important; }

.hotring>* {

    text-align         : initial;


    transition         : background .3s;
}

.hotring>*  { transform : translate(0,-15em) scale(1.0); }





#fly_div             {
    border-radius    :                 0.5em;
    background       : rgba(000,000,255,0.1);
    display          :          inline-table;
    position         :                 fixed;
    top              :                   1em;
    right            :                   1em;


}
#fly_div.magnified   { transform : scale(2); }

#fly_div .closepin   { position : relative; }
#fly_div .pressed    { transform        : none  !important; }
#fly_div .pressed    { opacity          : 1     !important; }

#fly_div pre         { margin           :   1em; }
#fly_div pre         { padding          : 0.5em; }
#fly_div pre         { max-height       : 50em;  }
#fly_div pre         { max-width        : 50em;  }
#fly_div pre         { overflow-x       : auto;  }
#fly_div pre         { overflow-y       : auto;  }

#fly_div div         { overflow-x       : auto;  }

#fly_div em          {
    border           : none;

    background       : black;
    box-shadow       : 0.1em 0.1em 0.1em rgba(0,0,0,0.8);
}






.floatlog>div {

    box-sizing : initial    !important;
    max-width  : 48em;
    padding    : .3em;
}
.floatlog>div { box-shadow : rgba(0,0,0,.5) .2em .2em .9em !important; }
.floatlog em  { font-size            : 80%;                    }
.floatlog>*   { white-space          : nowrap;                 }
.floatlog>*   { transform-origin     : 0 0 0;                  }



.stage_1_input , .stage_1_missed, .stage_1_more { background :linear-gradient(to top   , rgba(0,0,0,.6) 0%, rgba(0,0,0,.4) 50%, rgba(0,0,0,.5) 80%, rgba(0,0,0,.5) 95%, #111 100%); }
.stage_2_action, .stage_2_missed                { background :linear-gradient(to top   , rgba(0,0,0,.6) 0%, rgba(0,0,0,.4) 50%, rgba(0,0,0,.5) 80%, rgba(0,0,0,.5) 95%, #111 100%); }
.stage_3_result, .stage_3_missed, .stage_3_more { background :linear-gradient(to bottom, rgba(0,0,0,.6) 0%, rgba(0,0,0,.4) 50%, rgba(0,0,0,.5) 80%, rgba(0,0,0,.5) 95%, #111 100%); }

.floatlog>div.stage_1_input  { border-top                 : 2px solid #AAA              ; }
.floatlog>div.stage_1_input  { border-left                : 1px solid #AAA              ; }
.floatlog>div.stage_1_input  { border-right               : 1px solid #AAA              ; }
.floatlog>div.stage_1_input  { border-bottom              : 0         #AAA              ; }
.floatlog>div.stage_1_missed { border-top                 : 2px solid #AAA    !important; }

.floatlog>div.stage_2_action { border-top                 : 0         #AAA              ; }
.floatlog>div.stage_2_action { border-left                : 1px solid #AAA              ; }
.floatlog>div.stage_2_action { border-right               : 1px solid #AAA              ; }
.floatlog>div.stage_2_action { border-bottom              : 0         #AAA              ; }
.floatlog>div.stage_2_missed { border                     : 1px solid #AAA    !important; }

.floatlog>div.stage_3_result { border-top                 : 0         #AAA              ; }
.floatlog>div.stage_3_result { border-left                : 1px solid #AAA              ; }
.floatlog>div.stage_3_result { border-right               : 1px solid #AAA              ; }
.floatlog>div.stage_3_result { border-bottom              : 2px solid #AAA              ; }
.floatlog>div.stage_3_missed { border-bottom              : 2px solid #AAA    !important; }

.floatlog>div.stage_1_input  { border-top-left-radius     : 1em                          ; }
.floatlog>div.stage_1_input  { border-top-right-radius    : 1em                          ; }
.floatlog>div.stage_1_missed { border-top-left-radius     : 1em                !important; }
.floatlog>div.stage_1_missed { border-top-right-radius    : 1em                !important; }
.floatlog>div.stage_1_more   { border-top-left-radius     : 0                  !important; }
.floatlog>div.stage_1_more   { border-top-right-radius    : 0                  !important; }

.floatlog>div.stage_3_result { border-bottom-left-radius  : 1em                          ; }
.floatlog>div.stage_3_result { border-bottom-right-radius : 1em                          ; }
.floatlog>div.stage_3_missed { border-bottom-left-radius  : 1em                !important; }
.floatlog>div.stage_3_missed { border-bottom-right-radius : 1em                !important; }

.floatlog>div.stage_3_more   { border-bottom-left-radius  : 0                  !important; }
.floatlog>div.stage_3_more   { border-bottom-right-radius : 0                  !important; }

.floatlog>div.stage_3_more   { border-bottom              : 2px solid #888    !important; }
.floatlog>div.stage_3_more   { padding-bottom             : 2px                !important; }




.stage_0_log        { background     : linear-gradient(to left, #000 0%, rgb(62, 62, 62) 5px, #888); }
.stage_0_log        { box-shadow     : 3px 3px 10px 0px black;                                     }

.stage_0_log        { color          : white            ; }
.stage_0_log        { text-shadow    : #000 1px 1px 0px ; }

.stage_0_log        { padding        : .5em             ; }
.stage_0_log        { font-weight    : 100              ; }
.stage_0_log        { border-bottom  : 2px solid #AAA   ; }
.stage_0_log        { border-left    : 1px solid #AAA   ; }
.stage_0_log        { border-right   : 1px solid #AAA   ; }
.stage_0_log        { border-top     : 2px solid #AAA   ; }
.stage_0_log        { border-radius  : 1em              ; }
.stage_0_log        { max-width      : 64em             ; }

.stage_0_log.fading { animation      : none   !important; }
.stage_0_log>*      { margin-right   : .1em             ; }





.pause_animation       { animation          : none !important; }



         .floatlog>*   { animation           : 2s    ease-out forwards stacking; }
.stacking.floatlog>*   { animation-duration  : 1s   !important;                  }

@keyframes stacking {
       0% { opacity   :.1; }
      20% { opacity   :.5; }
     100% { opacity   : 1; }
       0% { transform : translate(-25em, 13em) scale(0.5 ); }
      10% { transform : translate( -5em,  5em) scale(0.9 ); }

      20% { transform : translate(-.5em,  2em) scale(1.03); }
      40% { transform : translate(-.5em,  1em) scale(1.03); }
      80% { transform : translate(-.5em, .3em) scale(1.03); }
     100% { transform : translate(  0em,  0em) scale(1.0 ); }
}



.removing              {             opacity : .1; }
.removing              { transform           : translate(  0em, 12em) scale(1.0); }
.removing              { transition-property : transform;                         }
.removing              { transition-duration : 500ms;                                }

.removing              { animation           : 1s 500ms  ease-out forwards removing; }
@keyframes removing    {
    100% { opacity   : 0; }
    100% { border    : 0; }
    100% { height    : 0; }
    100% { padding   : 0; }
}



.fading      { transition-duration : 500ms;                          }
.fading      { animation           : 2s 500ms ease-out forwards fading; }

.fading      { transition-duration : 3s;                          }
.fading      { animation           : 5s ease-out forwards fading; }

@keyframes fading {
      0% { height    : 1em; }
     90% { height    : 1em; }
    100% { height    :.2em; }



    100% { padding   :   0; }
    100% { border    :   0; }
}




.standby {
    box-shadow    : 0 0 1em 1em #FDD !important;

}
.standby::before {
    position      : absolute;
    right         : .5em;
    top           : .1em;
    color         : black;
    font-size     : 300%;
    text-shadow   : #AAA 1px 1px 1px;
}
.standby::before { transform-origin   : 50% 55% 0; }
.standby::before { animation-name     : cycle;  }
.standby::before { animation-duration : 1s;     }


   @keyframes cycle {
      0% { transform : rotate(  0deg); }
    100% { transform : rotate(360deg); }
}



.panel_pressed_glowing { transition-duration         :   1750ms; }
.panel_pressed_glowing { transition-delay            :   1250ms; }
.panel_pressed_glowing {
    box-shadow                  : 0 0 1em 0em #FFF !important;
    transform                   : scale(2.1);

    transition-property         : transform, box-shadow;
    transition-timing-function  : ease-in  , ease-in   ;
}

.panel_magnifying_glass::before {
    position      : absolute;
    right         : .5em;
    top           : .1em;
    color         : black;
    font-size     : 500%;
    content       : '\\1f50D';
    text-shadow   : #AAA 1px 1px 1px;
}







#dimm_mask {
    cursor              : not-allowed;
    background-color    : rgba(64,64,64,0.4);
    overflow            : auto;
    transition          : background-color 500ms;
}

.dimm_light { background : linear-gradient(to left,rgba(0,0,0,0.3), rgba(64,64,64,0.5) 50%, rgba(032,032,032,0.8)); }
.dimm_dark  { background : linear-gradient(to left,rgba(0,0,0,0.8), rgba(64,64,64,0.9) 50%, rgba(032,032,032,1.0)); }




#dimm_mask          >EM      { cursor           : pointer;                   }
#dimm_mask          >EM      { pointer-events   : auto;                      }
#dimm_mask          >EM      { transition       : all 250ms ease-out;        }

#dimm_mask          >EM      { border           : none;                      }
#dimm_mask          >EM      { font-size        : 80px;                      }

#dimm_mask          >EM      { opacity          : 0.3;                       }
#dimm_mask          >EM      {            color : black;                     }
#dimm_mask          >EM      { background-color : transparent;               }


#dimm_mask          >EM.left { background-color : rgba(0,0,0,0.2) !important; }




 .button_prev              { display:none; position:fixed; top:160px; bottom:unset; left:unset; right: 40px; margin:0 0 0 0; }
 .button_next              { display:none; position:fixed; top:280px; bottom:unset; left:unset; right: 40px; margin:0 0 0 0; }

 .button_prev.left         { display:none; position:fixed; top:unset; bottom:240px; left:  0px; right:unset; margin:0 0 0 -40px; width:80px; padding-right:30px; }
 .button_next.left         { display:none; position:fixed; top:unset; bottom:120px; left:  0px; right:unset; margin:0 0 0 -40px; width:80px; padding-left :30px; }

 .button_mono              { display:none; position:fixed; top:360px;  left:unset; right: 40px; margin:0 0 0 0; }

 .button_next.left         { border-radius    :  0px 40px 40px  0px; }
 .button_prev.left         { border-radius    : 40px  0px  0px 40px; }

 .button_prev              { transform        : rotate(180deg) translate( 0px,0px) !important; }
 .button_prev.pressed      { transform        : rotate(190deg) translate(10px,0px) !important; }
 .button_next              { transform        : rotate(  0deg) translate( 0px,0px) !important; }
 .button_next.pressed      { transform        : rotate( 10deg) translate(10px,0px) !important; }

 .button_prev.left         { transform        : rotate(180deg) translate( 0px,0px) !important; }
 .button_prev.left.pressed { transform        : rotate(180deg) translate(10px,0px) !important; }
 .button_next.left         { transform        : rotate(  0deg) translate( 0px,0px) !important; }
 .button_next.left.pressed { transform        : rotate(  0deg) translate(10px,0px) !important; }

 .button_mono              { transform        : rotate(  0deg) !important; }
 .button_mono.pressed      { transform        : rotate(180deg) !important; }








#div_slot_containers {
    display               : grid;
    box-shadow            : 2px 2px 32px rgba(0,0,0,0.2) !important;
    margin                : 0 !important;
    padding               : 0 !important;
    user-select           : none;
    cursor                : copy;
    background-color      : rgba(64,64,64,1.0);

    grid-template-columns : repeat(3, 1fr);


}
#div_slot_containers a              { font-size: 200%; color: red; pointer-events:all !important; cursor: pointer !important; }
#div_slot_containers.fullscreen     { position:fixed; }
#div_slot_containers.fullscreen     { grid-template-columns : auto; }
#div_slot_containers.fullscreen     {
    opacity          : 1     !important;
    background       : #AAA  !important;
    transition       : all 250ms ease-out;
}





#div_slot_containers>div {

    min-width             : 8em;
    margin                : 1ex 1ex 1ex 1em;

    border-radius         : 0 1em 1em 0;
    border-left-style     : solid;
    border-left-width     : .5em;

    padding               : 1ex 1em 1ex 1em;

    opacity               : 0.8;
    color                 : #000;
    overflow              : hidden;
    font-weight           : 700;
    font-weight           : 600;
}

#div_slot_containers   .button_copy   { display          : inline-block; }
#div_slot_containers   .button_copy   { cursor           : pointer;      }
#div_slot_containers   .button_copy   { padding          : 0.2em;        }
#div_slot_containers   .button_copy   { border           : 1px outset;   }
#div_slot_containers            div   { cursor           : all-scroll;   }
#div_slot_containers.fullscreen>div   { cursor           : grab;         }

.fullscreen_prev { transform-origin :   0% 0;  animation : 250ms ease-in translate_left_to_right; }
.fullscreen_next { transform-origin : 100% 0;  animation : 250ms ease-in translate_right_to_left; }
@keyframes translate_left_to_right {
      0% { transform : translate(-100%, 0%); }
    100% { transform : translate(   0%, 0%); }
}
@keyframes translate_right_to_left {
      0% { transform : translate( 100%, 0%); }
    100% { transform : translate(   0%, 0%); }
}

.fullscreen_last                   { transform-origin : 0 0;  animation : 550ms ease-in translate_shift_from_top                 ; }
.fullscreen_last.fullscreen_left   { transform-origin : 0 0;  animation : 550ms ease-in translate_shift_from_top_right !important; }
.fullscreen_last.fullscreen_right  { transform-origin : 0 0;  animation : 550ms ease-in translate_shift_from_top_left  !important; }
@keyframes translate_shift_from_top_left  { from { transform : translate(-10%, -10%); } 80% { transform : translate(-8%, -1%); } to { transform : translate(0,0); } }
@keyframes translate_shift_from_top       { from { transform : translate(  0%, -10%); } 80% { transform : translate( 0%, -8%); } to { transform : translate(0,0); } }
@keyframes translate_shift_from_top_right { from { transform : translate( 10%, -10%); } 80% { transform : translate( 8%, -2%); } to { transform : translate(0,0); } }

.button_copy em                     { pointer-events : none; }
.button_copy em                     { padding-left:1em; padding-right:1em; color:white; background:rgba(0,0,0,0.5); }

#div_slot_containers>div {             color : black; }

#div_slot_containers                    { transform-origin : 50% 100%; }
#div_slot_containers.scrolled_over_view { animation : 1000ms ease-in scrolled_over_view_anim; }
@keyframes scrolled_over_view_anim {

    from { box-shadow : 0 0 20px 30px rgba(255,000,000,0.53) inset; }
    to   { box-shadow : 0 0 10px  0   rgba(255,000,000,0.00) inset; }
}

                  .note1 {  background-color : rgba(150,075,000,0.2); border-color : #964B00;                      }
                  .note2 {  background-color : rgba(255,000,000,0.2); border-color : #FF0000;                      }
                  .note3 {  background-color : rgba(255,165,000,0.2); border-color : #FFA500;                      }
                  .note4 {  background-color : rgba(255,255,000,0.2); border-color : #FFFF00;                      }
                  .note5 {  background-color : rgba(154,205,050,0.2); border-color : #9ACD32;                      }
                  .note6 {  background-color : rgba(100,149,237,0.2); border-color : #6495ED;                      }
                  .note7 {  background-color : rgba(238,130,238,0.2); border-color : #EE82EE;                      }
                  .note8 {  background-color : rgba(160,160,160,0.2); border-color : #A0A0A0;                      }
                  .note9 {  background-color : rgba(221,221,221,0.2); border-color : #DDDDDD; border-style:double; }
                  .note0 {  background-color : rgba(128,128,128,0.2); border-color : #202020; border-style:double; }



#div_slot_containers>.container_selected { box-shadow       : 0 0 20px 3px #333 inset;                               }
#div_slot_containers>.container_selected { opacity          :    1.0;                                                }
#div_slot_containers>.container_selected { color            :   #000;                                                }
#div_slot_containers>.container_selected { border-width     :  0.9em;  border-style :  solid;                        }
#div_slot_containers>.fullscreen_last    { outline-width    :  0.5em; outline-style : dashed; outline-color : black; }


.content_is_too_big                      {       font-style : italic;               }
.content_is_too_big                      {            color : #888  !important;     }
.content_is_too_big                      { background-color : #DDD  !important;     }


            .button_magnify { pointer-events   : auto    !important; }
.fullscreen .button_magnify { pointer-events   : none    !important; }

            .button_magnify { cursor           : pointer !important; }
            .button_magnify { border           : none;               }
            .button_magnify { float            : right;              }
            .button_magnify { margin-right     : 0;                  }
            .button_magnify { margin-top       : 0;                  }

            .button_magnify { font-size        : 80px    !important; }
            .button_magnify {            color : black   !important; }
            .button_magnify { background-color : transparent;        }
            .button_magnify { opacity          : 0.8;                }

.fullscreen .button_magnify { transform        : rotate(90deg);      }
            .button_magnify { transition       : all 250ms 500ms ease-out;  }







.button_COPY       { display          : inline;          }
.button_COPY       { margin           : 0                            !important; }
.button_COPY       { cursor           : copy                         !important; }
.button_COPY       { opacity          : 0.3; }
.button_COPY       { background-color : white;                                   }
.button_COPY       { color            : #444                         !important; }
.button_COPY       { border-radius    : 0 1em 1em 0;                             }
.button_COPY       { padding          : 0.1em                        !important; }

.button_COPY:hover { opacity          : 1.0; }
.button_COPY:hover { box-shadow       : 2px 2px 32px rgba(0,0,0,0.9);            }





.div_copy_content         { pointer-events   : none; }

.div_copy_content         { margin           : 0.5em 80px .5em 1em !important; }









#bag_rot           { font-size     :  80%; }
#bagopen           { font-size     :  80%; }
#bag_rot>*         { font-size     : 520%; }
#bagopen>*         { font-size     : 520%; }

#pat_sort          { font-size     : 120%; }
#fly_log           { font-size     : 150%; }
#bag_rot span      { font-size     : 500% !important; }
#bag_rot           { font-weight   :  900 !important; }
#pat_sort          { font-weight   :  900;            }


#bag_rot>sup,
#bag_rot>sub       { opacity       :  0.3; }



          #bag_rot       { letter-spacing :0em; }
@media only screen and (min-resolution : 120dpi) {
          #bag_rot       { letter-spacing :-1em; }
}
.open_bag #bag_rot       { letter-spacing : 3em; }
          #bagopen       { letter-spacing :-1em; }



#pat_bag                  { padding-bottom : 11em; }
#pat_bag {
    border-top    : 1px solid rgba(255,255,255,1 );
    border-left   : 3px solid rgba(255,255,255,.5);
}
#pat_bag.dark {
    border-top    : 1px solid rgba(255,255,192,.3);
    border-left   : 3px solid rgba(255,255,192,.1);
}



#bot_div { position  : absolute; bottom:0;  left:.5em !important; width:100% !important;   }
#bot_div   { overflow  : visible !important; }
#bot_div>* { display:inline !important; }



#bag_rot           { position      : absolute; left : 1em; right:1.5em; bottom:  1em; }
#bagopen           { position      : absolute;             right:0.1em; bottom:  1em; }


#pat_sort          { position      : absolute; right:3.8em; bottom: 0  ; }
#fly_log           { position      : absolute; right:0.1em; bottom: 0  ; }



#bag_rot           { margin        :  0      5.0em  2.5em 0 !important; }
#bagopen           { margin        :  0      0.1em  2.2em 0 !important; }
#fly_log           { margin        :  0      0     -0.3em 0 !important; }
#pat_sort          { margin        : -0.7em -0.3em  0     0 !important; }




#bag_rot           { border        : none                !important; }
#pat_sort          { border        : none                !important; }
#fly_log           { border        : none                !important; }

#bag_rot           { border-radius : 0.5em               !important; }
#bagopen           { border-radius : 0.5em               !important; }
#pat_sort          { border-radius : 0.9em               !important; }
#fly_log           { border-radius : 1.8em   0    0   0  !important; }



#pat_bag            { padding-right  : 1.5em; }
#pat_bag.wide_panel { padding-right  : 4.5em; }

#bag_rot           { line-height   :  6.0em              !important; }
#bag_rot           { padding       :  0    1em    0  1em !important; }

#pat_sort          { padding       : .3em .5em .3em .5em !important; }
#fly_log           { padding       : .6em                !important; }




#bagopen           { border        : 0                  !important; }
#bagopen           { padding       : 0 1em 0 0          !important; }
#bagopen:hover     { box-shadow    : 0 0 .3em .2em #F00 !important; }

#bagopen>*         { padding       : 0                  !important; }
#bagopen>*         { text-shadow   : black 1px 1px 2px; }


          #bagopen   { transform  : rotate(  0deg); }
.open_bag #bagopen   { transform  : rotate(180deg); }
          #bagopen   { transition : transform 250ms ease-in 250ms !important; }
.open_bag #bagopen   { transition : transform 250ms ease-in 250ms !important; }



#bag_rot           { min-width      :    5em; }
#pat_sort          { min-width      :  1.7em; }

#bag_rot           { text-align     : center; }
#pat_sort          { text-align     : center; }
#pat_sort          { white-space    :   pre;  }
#pat_sort          { line-height    : 0.7em;  }


#bag_rot  *        { pointer-events : none                 !important; }
#bagopen  *        { pointer-events : none                 !important; }



#bot_div   { vertical-align: bottom !important;}
#bot_div>* { vertical-align: bottom !important;}



.txt_log {
    position       : absolute; left : .1em; bottom : .1em;
    pointer-events : none;

    border         : none             !important;
    padding        : 0 1em 0 1em      !important;

    font-family    : "Comic sans ms"  !important;
    font-style     : oblique          !important;
    font-weight    : 100              !important;
    white-space    : pre;

}
.txt_log em {
    border      : none            !important;
    padding     : 0 0.5em 0 0.5em !important;
    font-size   : 100%            !important;
    font-family : monospace       !important;
}




.txt_log          { background : linear-gradient(to top, rgba(255,255,255,.1) 2%, transparent 25%, rgba(  0,  0,  0,.1) 80%, rgba(255,255,255,.1) 100%); }

#bag_rot          { background : linear-gradient(to top, rgba(  0,  0,  0,.1) 20%, rgba(  0,  0,  0,.3) 80%, rgba(  0,  0,  0,.9) 100%); }
#bag_rot.checked  { background : linear-gradient(to top, rgba(255,  0,  0,.1) 20%, rgba(255,  0,  0,.3) 80%, rgba(255,255,255,.9) 100%); }

#pat_sort         { background : linear-gradient(to top, rgba(  0,  0,  0,.1) 20%, rgba(  0,  0,  0,.3) 80%, rgba(  0,  0,  0,.9) 100%); }
#pat_sort.checked { background : linear-gradient(to top, rgba(255,  0,  0,.1) 20%, rgba(255,  0,  0,.3) 80%, rgba(255,255,255,.9) 100%); }
#pat_sort.sort_off{ opacity    :  0.2; }
#pat_sort.user_set{ background : none; }


#fly_log          { background : linear-gradient(to top, rgba(  0,  0,  0,.1) 20%, rgba(  0,  0,  0,.3) 80%, rgba(255,255,255,.3) 100%); }
#fly_log.checked  { background : linear-gradient(to top, rgba(255,  0,  0,.1) 20%, rgba(255,  0,  0,.3) 80%, rgba(255,255,255,.3) 100%); }



      #bot_div>*{ color : #000 !important; }
.dark #bot_div>*{ color : #CCC !important; }

      #bag_rot  { color : #000 !important; }
.dark #bag_rot  { color : #FFF !important; }

      #pat_sort { color : #000 !important; }
.dark #pat_sort { color : #CCC !important; }

      #fly_log  { color : #000 !important; }
.dark #fly_log  { color : #CCC !important; }



#bag_rot:hover           { box-shadow : 0 0 .3em .2em #F00 !important; }
#bagopen:hover           { box-shadow : 0 0 .3em .2em #F00 !important; }
#pat_sort:hover          { box-shadow : 0 0 .3em .2em #F00 !important; }
#fly_log:hover           { box-shadow : 0 0 .3em .2em #F00 !important; }

#bag_rot.disabled        { background : rgba(128,128,128,.2)        !important; }
#pat_sort.disabled       { background : rgba(128,128,128,.2)        !important; }
#fly_log.disabled        { background : rgba(255, 64, 64,.5)        !important; }

#XXXbag_rot         {
background         : url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsSAAALEgHS3X78AAAFeklEQVRIiYWUXYxVVxXHf2vvfe49d+6dD4YZemeqdQpTHwwxjUYSeBCwYupbQ1uLCUqqTxWSStTEYmJiVCZ+tLVvfj3IA5HUFKVgaSOVGm1rx4K0UhVIrQxgNTMwc7/m3nvO2Xv5cO7cDproyjknOTtZ67/+//VfW1gdYkE9bPkRbNgN3RsgFkFRVybOapy4cD/rzWVu/dwihaEUMg+Sp2cB3CA8MCM8+bIyUR3HAVCaKDH2ofcSUiVrQTwOvp2DEUCsYf6Vt2Roum4Fq0GUSAOipcwzLSYHCAFI0M3T6s69xZWL/5xfyAHGN21kxy9mpdsAiSBr5gDGgfqAKRouHbrn4TE5NhXe1kY31oVnh/WWe+dvsyXOaBeHoM4iSRv/+U9hM8NXv3RIvp4D+C50m+jyIgQD1gJmpXlRF/HhaGnrg0vP1zulybIpeG7MVjppyvTYliVTnkigJ5Q1QBvqDYqgPYlEQC0jQ07Hhgq0OgGASmxYbGYstLzuWxvtLzaG9jdUsQCDnvqZQdL5gk7vu6p4QHuPAWdQIAcwAiFRtm9Edm0JTI6VsASuLHR55kyXQ78t0kZUNKiYvBBBsHHAxcEsd8EGiByo5ky05xvXH04sHD/r+flzCV/+TMSgafKVH2dE4xHEBoKKGCuq5FWsJc2U4QGYOQYfvB3u+Tik/1hVPRe6Fwo4CwNFjLXgHJSKSK8tjOAbdYwIEkWE5Sb07JN4eO1vcOIkXG8BUZ7SZ0B/RNpHF1VQRVGwhrDcovLRuzE77sOhtE/9kuTkrxHjUIUXL0Aa4Aen4PjXctlvZrBKuKD52z9TxRhL11huPHWE9NWXKe/6NFkIGAHv4cGPwDe+CMbApTehHK9iICK5tj1Ua8CZFSr5R1WJCwUqd22DpIMmSV6t11A7AVJodnKX3ySRqqoIaACKhpf+skyBBOI4PzO5XIOf2M2Vx77H6JoR7J0fQEMgKJRj4ae/g5cuQnUE1m+A5m/y1lxBoFAeKDQ9+CAQKadfU6AIseCD5sO0jus/+SFjD+0nefsqi6++QlQeYKmZ8shupb4NLs/Dxg197T2A2/XJezftfviJn33sW/+iVIooFCLssAGFdqcDGugkNd79+PeJvnsf85+9H1eIMAID0SAhC+DKrF0DE+tgqQW0lbYplUBxXoqVHZtunbj4+CIiwtzcHGma4FzE1O1TRC4iTVPeVR3m4uB7aJQXsJUKXqGUNvnr8vvZ/+y3kZChCiJYK55aNPoF3vfE3533IQB6x21rpFarcdeuu6nVanS7XbZu3cqxp49TjIdBA/smvsmLd3SolAwhgIjSSSOSxmg+zb7zQqBYMWh3YsWmApBmnnY348mnjvH6Gxc4e+48T5842XOKsuxG8dE6GtE4zcI4ddZxy+Qok+MpaIIxCbLykgJk7ywaYI3gvef5U79icnIS7zPWjAznQxPBaAaaYhHStnLnBsdD21L+8Kbn0O8tqa7QkL6/bwIAMMZw+PBhrl27xoEDB9i+fXuPo6C9RFUBK9TagdfnlMg5nAmk2Tu71K+3+kdVcc5x+vRp9uzZw+zsLNZatL+FPqDeg/cE70uR9+VC8OvXdryTxKPei3qPeo9mQAhO8+ygquq9J0kSWq0WMzMzTE1NcfToUXbu3EmSdAmmYokNIcpX9M/zUD+XUm96GhpDqbfBGoSoDLYUOWutW2EyMjLCwYMHqVarVKtVjhw5grUWgEKhSOXGMy/wxqU5qRQjQr79V1PJL1Wrq1ykio1jrv/xvGzevHl67969jzSbzcg5p3Ec0263CSFQqVRIkoROp6sDpWL0nUcfe/T8ZXfWlIdNCD70RrPqElYwESz+CToLgMh/jOT/hFjzX1P8X6Eh/Bs7TJStHjqCxQAAAABJRU5ErkJggg==") !important;
background-repeat  : no-repeat !important;
background-position: center    !important;
background-size    : 100% 100% !important;
}
#XXXbag_rot::before {
    content            : 'X';
    position           : relative;
    top                : 50%;
    left               : 50%;
    margin             : -50% 0 0 -50%;

    font-size          : 32px;
    text-align         : center;
}


#bag_rot_clone           { text-shadow    : black 0.2px 0.2px 0px; }
#bag_rot_clone           { opacity        : 0.3; }

#bag_rot_clone.cloning   { transition     : all 250ms ease-in;  }


#bag_rot.disabled:hover  { background : transparent        !important; }
#bag_rot.disabled:hover  { box-shadow : none               !important; }
#pat_sort.disabled:hover { background : transparent        !important; }
#pat_sort.disabled:hover { box-shadow : none               !important; }
#fly_log.disabled:hover  { background : transparent        !important; }
#fly_log.disabled:hover  { box-shadow : none               !important; }



#sel_bag .pat_div               { display      : block; }
#sel_bag .pat_div .data_pattern { margin-right : 0.5em; }



.pat_span          { float : left; clear  : left; }



.bags    , .want    , .have    , .done     { background       : linear-gradient(to bottom, rgba(034,034,034,0) 0%, rgba(034,034,034,0.6) 20%, rgba(034,034,034,0) 88%) !important; }
.bags.cc1, .want.cc1, .have.cc1, .done.cc1 { background-color : #964B00 !important; }
.bags.cc2, .want.cc2, .have.cc2, .done.cc2 { background-color : #FF0000 !important; }
.bags.cc3, .want.cc3, .have.cc3, .done.cc3 { background-color : #FFA500 !important; }
.bags.cc4, .want.cc4, .have.cc4, .done.cc4 { background-color : #FFFF00 !important; }
.bags.cc5, .want.cc5, .have.cc5, .done.cc5 { background-color : #9ACD32 !important; }
.bags.cc6, .want.cc6, .have.cc6, .done.cc6 { background-color : #6495ED !important; }
.bags.cc7, .want.cc7, .have.cc7, .done.cc7 { background-color : #EE82EE !important; }
.bags.cc8, .want.cc8, .have.cc8, .done.cc8 { background-color : #A0A0A0 !important; }
.bags.cc9, .want.cc9, .have.cc9, .done.cc9 { background-color : #FFFFFF !important; }
.bags.cc0, .want.cc0, .have.cc0, .done.cc0 { background-color : #202020 !important; }

#off_bag .pat_span .cc0         { background-color : rgba(  0, 32,  0,0.90) !important; }
#bak_bag .pat_span .cc0         { background-color : rgba(032,  0,  0,0.90) !important; }
#alt_bag .pat_span .cc0         { background-color : rgba(  0,  0, 32,0.90) !important; }



#off_bag .pat_span .cc0         { font-weight      : 100                    !important; }
#bak_bag .pat_span .cc0         { font-weight      : 300                    !important; }
#alt_bag .pat_span .cc0         { font-weight      : 300                    !important; }

#off_bag .pat_span .cc0         { box-shadow       : .05em .05em    0      rgba(255,255,255,0.7)       !important; }
#bak_bag .pat_span .cc0         { box-shadow       : .05em .05em    0      rgba(255,255,255,0.7)       !important; }
#alt_bag .pat_span .cc0         { box-shadow       : .05em .05em    0      rgba(255,255,255,0.7)       !important; }

.want { border : 1px dashed white  !important; }
.have { border : 1px solid  white !important; }
.want, .have {
    border-top-left-radius     : .8em;
    border-top-right-radius    : .8em;
    border-bottom-left-radius  : .3em;
    border-bottom-right-radius : .3em;
    padding-top                : .1em;
    padding-bottom             : .0em;
}


.bags {
    border-top-left-radius     : .3em;
    border-top-right-radius    : .3em;
    border-bottom-left-radius  : .8em;
    border-bottom-right-radius : .8em;
    padding-top                : .1em;
    padding-bottom             : .3em;
}


.done {
    border-top-left-radius     : .1em;
    border-bottom-left-radius  : .1em;
    border-top-right-radius    : 1em;
    border-bottom-right-radius : 1em;
    border: .1em solid white !important;
}






        .num_em { pointer-events   : none;                 }
        .num_em { margin           : .1em;                 }
        .num_em { border-radius    : .3em;                 }
        .num_em { background-color : rgba(192,192,192,.1); }
        .num_em {            color : black;                }
.dark   .num_em {            color : white;                }
        .num_em { padding          : .1em;                 }
        .num_em { font-family      : monospace;            }



            .place_holder { display    : none;                            }
            .place_holder { opacity    : 0;                               }






#mov_div { position      : absolute; }
#mov_div { top           :        0; }
#mov_div { left          :        0; }
#mov_div { border-radius :    0.5em; }
#mov_div { background    :     #F00; }
#mov_div { padding       : 0.3em 0.4em 0.2em 0.4em; }
#mov_div { box-shadow    : 2px 2px 2px 0px rgba(000,000,000,0.53); }


#mov_div.moving     { transition-duration :  500ms; }
.pat_span.moving    { width               :   100%; }

.pat_span.moving    { border-radius       :    1em; }
.pat_span.moving    { border-width        :    2px; }
.pat_span.moving    { border-style        : outset; }

#mov_div.grayed_out { opacity             :         0.3 ; }
#mov_div.grayed_out { transform           : scale(  0.5); }
#mov_div.grayed_out { transition-duration :       100ms ; }



.mov_src {
    background : linear-gradient(to bottom, rgba(  0,  0,  0,.9) 20%, rgba(  0,  0,  0,.7) 80%, rgba(  0,  0,  0,.9) 100%);
    color: gray !important;


}





#hov1 { position : absolute; display:none; color: #00F; font-size:12px; transform: translate( -85%,-70%); margin:0; padding:0; }
#hov2 { position : absolute; display:none; color: #F40; font-size:12px; transform: translate( -10%,-33%); margin:0; padding:0; }
#hov3 { position : absolute; display:none; color: #F00; font-size:12px; transform: translate( -85%,-70%); margin:0; padding:0; }
#hov4 { position : absolute; display:none; color: #40F; font-size:12px; transform: translate( -10%,-33%); margin:0; padding:0; }




.dimmed>.pat_span { opacity    : .2    !important;  }



#pat_bag.standby::before  { content          : '\\267B';         }
#pat_bag.standby          { background       : linear-gradient(to bottom, #F00, #400) !important; }
#pat_bag.standby em       { background-color : #F88 !important; }
#pat_bag.standby em       { color            : #000;            }
#pat_bag.standby em       { box-shadow       : none;            }




#pat_bag.grid_bag   { display               : grid;        }
#pat_bag            { grid-template-columns : 1fr 0   0  ; }
#pat_bag.open_bag   { grid-template-columns : 1fr 1fr 1fr; }

#pat_bag.pinned.open_bag { transform-origin :  0   0; }

          #bak_bag  { display               : none;  }
          #alt_bag  { display               : none;  }
.open_bag #bak_bag  { display               : block; }
.open_bag #alt_bag  { display               : block; }

          #alt_bag  { min-width             :  7em; }
          #bak_bag  { min-width             :  7em; }
          #off_bag  { min-width             :  7em; }

.open_bag #alt_bag  { width                 : 14em; }
.open_bag #bak_bag  { width                 : 14em; }
.open_bag #off_bag  { width                 : 14em; }






          .grid_bag #off_bag  { border-radius         : 1em 1em 1em 1em;    }
          .grid_bag #bak_bag  { border-radius         : 1em 1em 1em 1em;    }
          .grid_bag #alt_bag  { border-radius         : 1em 1em 1em 1em;    }

          .grid_bag           { grid-gap              :    0;               }
          .grid_bag           { grid-auto-columns     : minmax(12em, auto); }


.grid_bag>.pat_span                 { grid-column-start     :  1;                      }
      span.pat_span:nth-of-type( 1) {                             grid-row-start :  1; }
      span.pat_span:nth-of-type( 2) {                             grid-row-start :  2; }
      span.pat_span:nth-of-type( 3) {                             grid-row-start :  3; }
      span.pat_span:nth-of-type( 4) {                             grid-row-start :  4; }
      span.pat_span:nth-of-type( 5) {                             grid-row-start :  5; }
      span.pat_span:nth-of-type( 6) {                             grid-row-start :  6; }
      span.pat_span:nth-of-type( 7) {                             grid-row-start :  7; }
      span.pat_span:nth-of-type( 8) {                             grid-row-start :  8; }
      span.pat_span:nth-of-type( 9) {                             grid-row-start :  9; }
      span.pat_span:nth-of-type(10) {                             grid-row-start : 10; }

          #off_bag                  { grid-column-start     :  1; grid-row-start : 11; grid-row-end : 12; }
          #alt_bag                  { grid-column-start     :  2; grid-row-start :  1; grid-row-end : 12; }
          #bak_bag                  { grid-column-start     :  3; grid-row-start :  1; grid-row-end : 12; }





          #off_bag          { float   : left; clear : left; }
          #bak_bag          { float   : left; clear : left; }
          #alt_bag          { float   : left; clear : left; }

          #off_bag          { padding : .5em !important;    }
          #bak_bag          { padding : .5em !important;    }
          #alt_bag          { padding : .5em !important;    }













          #off_bag          { border-radius    : 1em 1em 0 0;                      }
          #alt_bag          { border-radius    : 0 0 1em 1em;                      }
          #bak_bag          { border-radius    : 0 0 1em 1em;                      }

          #off_bag          { margin           : 0.5em;                            }
          #alt_bag          { margin           : 0.5em;                            }
          #bak_bag          { margin           : 0.5em;                            }



          #off_bag          { border-top       : 3px solid rgba(034,034,034,0.07); }
          #off_bag          { border-left      : 2px solid rgba(034,034,034,0.07); }
          #off_bag          { border-right     : 2px solid rgba(034,034,034,0.07); }
          #off_bag          { border-bottom    : 1px solid rgba(034,034,034,0.07); }

          #bak_bag          { border-top       : 1px solid rgba(034,034,034,0.07); }
          #bak_bag          { border-left      : 2px solid rgba(034,034,034,0.07); }
          #bak_bag          { border-right     : 2px solid rgba(034,034,034,0.07); }
          #bak_bag          { border-bottom    : 3px solid rgba(034,034,034,0.07); }

          #alt_bag          { border-top       : 1px solid rgba(034,034,034,0.07); }
          #alt_bag          { border-left      : 2px solid rgba(034,034,034,0.07); }
          #alt_bag          { border-right     : 2px solid rgba(034,034,034,0.07); }
          #alt_bag          { border-bottom    : 3px solid rgba(034,034,034,0.07); }





#off_bag { background       : linear-gradient(to bottom, rgba(034,034,034,0.07) 0%, rgba(034,034,034,0.53) 98%, rgba(034,034,034,0.07) 100%); }
#alt_bag { background       : linear-gradient(to bottom, rgba(034,034,034,0.07) 0%, rgba(034,034,034,0.53) 98%, rgba(034,034,034,0.07) 100%); }
#bak_bag { background       : linear-gradient(to bottom, rgba(034,034,034,0.07) 0%, rgba(034,034,034,0.53) 98%, rgba(034,034,034,0.07) 100%); }

#off_bag { background-color : rgba(000,224,000,0.3); }
#alt_bag { background-color : rgba(000,000,255,0.3); }
#bak_bag { background-color : rgba(255,000,000,0.3); }



#pat_bag.rotating        { display   : block !important; }
#pat_bag.rotating.hidden { display   : none  !important; }
#pat_bag.rotating        { min-width : unset;            }

#off_bag.rotating ,
#alt_bag.rotating ,
#bak_bag.rotating {
    display    : inline-block !important;
    position   : absolute;
}
          #off_bag.rotating { animation : 1500ms ease-out                     forwards off_bag_open_anim; }
          #alt_bag.rotating { animation : 1500ms ease-out                     forwards alt_bag_open_anim; }
          #bak_bag.rotating { animation : 1500ms ease-in                      forwards bak_bag_open_anim; }
.open_bag #off_bag.rotating { animation : 1500ms cubic-bezier(.5,0.5,.02,1.1) forwards off_bag_open_rotating_anim !important; }
.open_bag #alt_bag.rotating { animation : 1500ms cubic-bezier(.5,0.3,.02,1.1) forwards alt_bag_open_rotating_anim !important; }
.open_bag #bak_bag.rotating { animation : 1500ms cubic-bezier(.5,0.1,.02,1.1) forwards bak_bag_open_rotating_anim !important; }
.open_bag #bak_bag.rotating { transform-origin :  50%  50%; }



@keyframes off_bag_open_anim {
      0% { transform        : translate(   0 , 0);              }
     10% { transform        : translate(  50%, 0);              }
     80% { transform        : translate(  55%, 0);              }
    100% { transform        : translate( 150%, 0);              }

      0% { opacity          : 1.0;                              }
     80% { opacity          : 0.8;                              }
    100% { opacity          : 0.0;                              }

      0% { background-color : rgba(000,000,000,0.0);            }
     60% { background-color : rgba(000,000,224,0.5);            }
    100% { background-color : rgba(000,000,224,0.9);            }
}
@keyframes alt_bag_open_anim {
      0% { opacity          : 0.0;                              }
    100% { opacity          : 0.0;                              }
}
@keyframes bak_bag_open_anim {
      0% { transform        : translate(200%, 0) scale(1  , 1); }
     20% { transform        : translate(200%, 0) scale(1  , 1); }
     30% { transform        : translate(  0%, 0) scale(1  , 1); }
    100% { transform        : translate(  0%, 0) scale(1  , 1); }

     35% { background-color : rgba(224,000,000,0.5);            }
     65% { background-color : rgba(000,224,000,0.1);            }
    100% { background-color : rgba(000,000,000,0.0);            }

      0% { opacity          : 0.0;                              }
     20% { opacity          : 0.9;                              }
    100% { opacity          : 1.0;                              }
}


@keyframes off_bag_open_rotating_anim  {
     10% { transform        : translate(  -5%, 0);               }
     15% { transform        : translate(   5%, 0) scale(0.9, 1); }
     40% { transform        : translate(   5%, 0) scale(0.9, 1); }
    100% { transform        : translate( 100%, 0);               }

     50% { background-color : rgba(000,224,000,0.3);             }
     80% { background-color : rgba(000,000,224,0.3);             }
    100% { background-color : rgba(000,000,224,0.3);             }
}
@keyframes alt_bag_open_rotating_anim {
     15% { transform        : translate(   0 , 0);               }
     25% { transform        : translate(   9%, 0);               }
     40% { transform        : translate(   2%, 0);               }
    100% { transform        : translate( 100%, 0);               }

     50% { background-color : rgba(000,000,224,0.3);             }
     80% { background-color : rgba(224,000,000,0.3);             }
    100% { background-color : rgba(224,000,000,0.3);             }
}
@keyframes bak_bag_open_rotating_anim {
     15% { transform        : translate(   0 , 0);               }
     25% { transform        : translate(  10%, 0) scale(0.8,0.9);}
     50% { transform        : translate(  20%, 0) scale(0.8,0.9);}
     70% { transform        : translate(-200%, 0) scale(0.8,0.9);}
    100% { transform        : translate(-200%, 0)               ;}

     70% { background-color : rgba(224,000,000,0.3);             }
     90% { background-color : rgba(000,224,000,0.3);             }
    100% { background-color : transparent          ;             }


     90% { background       : linear-gradient(to bottom, rgba(034,034,034,0.07) 0%, rgba(034,034,034,0.53) 98%, rgba(034,034,034,0.07) 100%); }
    100% { background       : linear-gradient(to bottom, rgba(034,034,034,0.01) 0%, rgba(034,034,034,0.01) 98%, rgba(034,034,034,0.01) 100%); }

}










        .nearing { transition-duration : 250ms; }
#pat_bag.nearing { box-shadow          : 0 0 .3em .3em rgba(000,000,000,0.4) inset !important; }
#off_bag.nearing { background-color    :               rgba(000,224,000,1.0)                 ; }
#bak_bag.nearing { background-color    :               rgba(255,000,000,1.0)                 ; }
#alt_bag.nearing { background-color    :               rgba(000,000,255,1.0)                 ; }

          #off_bag { transform-origin    : 50% 100%;                          }
          #bak_bag { transform-origin    : 50%   0%;                          }
.grid_bag #bak_bag { transform-origin    : 50%  50%;                          }
          #alt_bag { transform-origin    : 50%   0%;                          }
.grid_bag #alt_bag { transform-origin    : 50%  50%;                          }

          #off_bag.nearing { animation : 400ms ease-out forwards squeezing; }
          #bak_bag.nearing { animation : 400ms ease-out forwards squeezing; }
          #alt_bag.nearing { animation : 400ms ease-out forwards squeezing; }

@keyframes squeezing    {
     10% { transform  : scale(1,1.008); }
     30% { transform  : scale(1,1.015); }
    100% { transform  : scale(1,1.020); }
}


        .outline  { transition-duration : 500ms; }

#pat_bag.hovering {          outline    : black 8px dashed !important; }
#off_bag.hovering {          outline    : green 8px dashed !important; }
#bak_bag.hovering {          outline    : red   8px dashed !important; }
#alt_bag.hovering {          outline    : blue  8px dashed !important; }








.pressed { opacity          :       0.8  ; }



#dom_tools_html.pressed { opacity          :    1; }



#div_slot_containers>.pressed {
    transform        : none  !important;
    opacity          : 1     !important;
    background       : #AAA  !important;
    transition       : all 250ms ease-out;
}




.div_match {
    border: solid 8px black !important;
}
.div_match div {
    border:solid 1px !important;
}


.str      {
    outline : 3px #AAA;
}
.em_match {
    box-shadow    : rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset;
    font-size     : 200%;
}
.em_missing {
    color            : red;
    background-color : transparent;
    font-weight      : 700;
    box-shadow       : rgba(255, 0, 0, 0.3) 0 0.3em 0.3em inset;
}

.em_log {
    padding          : .2em;
    border-radius    : 50%;
    box-shadow       : rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset;
}
.em_log span {
    border-radius    : .5em;

}




.transcript            { display              : inline-block;    }


.transcript *          { vertical-align       : middle;          }



.transcript            { cursor               : pointer;         }
.transcript div        { cursor               : pointer;         }


.transcript            { border-color           : #444             }
.transcript            { border-radius          : 1em;             }
.transcript ul         { border                 : 0px;             }
.transcript>div        { border                 : 0px;             }
.transcript div        { border                 : 0px;             }
.transcript pre        { border                 : 0px;             }
.transcript tr         { border-bottom          : 2px black solid; }
.transcript td         { border-radius          : 2em;             }



.transcript            { box-shadow                 : 3px 3px 6px rgba(000,000,000,0.5);        }


.transcript            { min-height           :  4em; }
.transcript            { min-width            : 10em; }


         .transcript         { filter : contrast(25%) brightness(125%); }
         .transcript.dark    { filter : contrast(50%) brightness( 35%); }
.pressed .transcript         { filter : none !important; }
         .transcript.tooltip { filter : none !important; }


.transcript          { background-color : rgba(224,224,224,0.9); }
.transcript.dark     { background-color : rgba(224,224,224,0.9); }

.transcript          { background    : linear-gradient(to bottom, #FF0, #FB0); }
.transcript.dark     { background    : linear-gradient(to bottom, #443, #211); }



#headsup.dark        { background    : linear-gradient(to bottom, #443, #211); }
#dom_traversal.dark  { background    : linear-gradient(to bottom, #443, #211); }
#dev_log_map.dark    { background    : linear-gradient(to bottom, #443, #211); }
#test_panel.dark     { background    : linear-gradient(to bottom, #443, #211); }
#dom_load_tags.dark  { background    : linear-gradient(to bottom, #443, #211); }


.transcript            { padding              : 1ex;             }
.transcript pre        { padding              : 0 0 0 1ex;       }
.transcript ul         { padding              : 0 0 0 2em;       }



.transcript>*          { font-family          : "Comic sans ms";       }


.transcript em         { line-height          : 1.50em;          }
.transcript ul         { line-height          : 0.75em;          }



*::-webkit-scrollbar                               { width         : 2em; }
*::-webkit-scrollbar                               { height        : 2em; }
*::-webkit-scrollbar                               { max-height    : 20px;}
*::-webkit-scrollbar                               { max-width     : 20px;}
*::-webkit-scrollbar-corner                        { background    : transparent; }
*::-webkit-scrollbar-thumb                         { border-radius : 2em; }
*::-webkit-scrollbar-track                         { border-radius : 2em; }
*::-webkit-scrollbar-thumb                         { box-shadow    : inset 0 0 6px rgba(0,0,0,0.5); }
*::-webkit-scrollbar-track                         { box-shadow    : inset 0 0 6px rgba(0,0,0,0.3); }
*::-webkit-scrollbar-thumb                         { box-shadow    : rgba(  0,  0,  0,0.5) 0 8px 24px; }
*::-webkit-scrollbar-thumb                         { background    : rgba( 24, 24, 24,0.3); }
*::-webkit-scrollbar-thumb:-webkit-window-inactive { background    : rgba( 24, 24, 24,0.2); }
*::-webkit-scrollbar-track                         { background    : rgba( 96, 96, 96,0.4); }
*::-webkit-scrollbar-track:-webkit-window-inactive { background    : rgba(128,128,128,0.2); }



.transcript *          { user-select  : none;            }
.transcript table      { user-select  : none;            }


.transcript            { transform-origin     : 0% 0% 0;         }




.transcript                       { transition : transform 300ms cubic-bezier(0.080, 1.015, 0.055, 0.930), padding 150ms ease-in; }


              .transcript.on_grid { transition :       all 300ms ease-out 200ms;                  }
.slow_regroup .transcript         { transition :       all 300ms cubic-bezier(0.3,1.1 , 0.8,0.7); }

.slow_regroup #hotspot            { transition :       all 500ms cubic-bezier(1,.21,.37,.98); }



.transcript.on_grid {
    display                    : inline-block  !important;

    border-radius              : 16px          !important;
    margin                     : 0             !important;
    transform                  : rotate(0deg);

    padding                    : 0             !important;
    margin-bottom              : 0             !important;

    overflow                   : hidden        !important;




}


.transcript>div        { margin               : 0;            }
.transcript div        { margin               : 0;            }
.transcript div        { display              : table-cell;   }
.transcript div        { overflow             : hidden;       }
.transcript div        { padding              : 1ex;          }




.transcript blockquote { margin      : .2em;              }
.transcript blockquote { width       : 48em;              }
.transcript blockquote { border      : 0px;               }
.transcript blockquote { padding     : 1ex;               }
.transcript blockquote { white-space : normal !important; }


.transcript table      { margin               : 0;               }
.transcript tr.slot    { font-size            : 200%;            }
.transcript th         { font-size            : 120%;            }
.transcript th         { padding              : 1ex;             }
.transcript th         { text-align           : left;            }
.transcript th         { text-shadow          : rgba( 50, 50, 50, 0.9) 1px 1px 2px !important; }
.transcript th         { font-weight          : 700; }
.transcript hr         { height               : 5px; }

.transcript td         { padding              : 1ex;             }
.transcript td         { text-align           : left;            }


.transcript pre        { background           : initial;         }
.transcript pre        { text-align           : left;            }



.transcript ul         { margin               : .2em;            }







.transcript_msg .info  {
    box-shadow  : 2px 2px 6px rgba(000,000,000,0.7) inset;
    font-family : "Comic sans ms";
}

      .transcript_msg { color       : #200; }
.dark .transcript_msg { color       : #FA0 !important; }


#transcript1,#transcript2 { max-width  :  80%; }
#transcript1              { max-height :  18%; }
             #transcript2 { max-height :  78%; }
#transcript1,#transcript2 { overflow   : auto; }
#transcript1 {
    float : left;
}
#transcript2 {
    float : left;
    clear : left;
}
#table_params * { text-align : right; }


.update_count { float         : right; }

.update_count { padding-left  : 0.5em; }
.update_count { padding-right : 0.5em; }




.push_pin { position : absolute; top:0.1em; right:0.1em; display:none; }
.closepin { position : absolute; top:0.1em; right:0.1em; display:none; }
.scalepin { position : absolute; top:0.1em; right:0.1em; display:none; }
.clearpin { position : absolute; top:0.1em; right:0.1em; display:none; }


            .push_pin  { margin-right           : 0.0em               !important; }
            .push_pin  { margin-top             : 0.0em               !important; }
            .push_pin  { min-width              : 1.5em               !important; }
            .push_pin  { min-height             : 1.5em               !important; }

            .closepin  { margin-right           : 0.0em               !important; }
            .closepin  { margin-top             : 0.0em               !important; }
            .closepin  { min-width              : 1.5em               !important; }
            .closepin  { min-height             : 1.5em               !important; }

            .scalepin  { margin-right           : 0.0em               !important; }
            .scalepin  { margin-top             : 0.0em               !important; }
            .scalepin  { min-width              : 1.5em               !important; }
            .scalepin  { min-height             : 1.5em               !important; }

            .clearpin  { margin-right           : 0.0em               !important; }
            .clearpin  { margin-top             : 0.0em               !important; }
            .clearpin  { min-width              : 1.5em               !important; }
            .clearpin  { min-height             : 1.5em               !important; }



            .push_pin  { padding                : 0                   !important; }
            .closepin  { padding                : 0                   !important; }
            .scalepin  { padding                : 0                   !important; }
            .clearpin  { padding                : 0                   !important; }




            .push_pin  { border                    : none                    !important; }
            .closepin  { border                    : none                    !important; }
            .scalepin  { border                    : none                    !important; }
            .clearpin  { border                    : none                    !important; }


            .push_pin  { border-radius             : 0.3em   1em 0.3em 0.3em !important; }
            .closepin  { border-radius             : 1em                     !important; }
            .scalepin  { border-radius             : 1em                     !important; }
            .clearpin  { border-radius             : 1em                     !important; }



                .push_pin       { box-shadow     : none;                                         }
.pinned       em.push_pin       { box-shadow     : 1px -2px 3px 0px rgba(000,000,000,0.2) inset; }
.pinned.dark  em.push_pin       { box-shadow     : 1px -2px 3px 0px rgba(255,255,255,0.2) inset; }
.pinned         .push_pin:hover { box-shadow     : none  !important;                             }

                .closepin       { box-shadow     : none  !important; }
                .scalepin       { box-shadow     : none  !important; }
                .clearpin       { box-shadow     : none  !important; }




            .push_pin                { color    : #AAA                !important; }
            .push_pin:hover          { color    : #800                !important; }
            .push_pin:hover .pressed { color    : #F00                !important; }
.pinned     .push_pin:hover          { color    : #F00                !important; }
.pinned     .push_pin                { color    : #F00                !important; }
            .closepin                { color    : #000                !important; }
            .closepin:hover          { color    : #888                !important; }
            .closepin:hover .pressed { color    : #FFF                !important; }
.pinned     .closepin:hover          { color    : #BBB                !important; }
.pinned     .closepin                { color    : #FFF                !important; }

            .scalepin                { color    : #000                !important; }
            .scalepin:hover          { color    : #888                !important; }
            .scalepin:hover .pressed { color    : #FFF                !important; }
.pinned     .scalepin:hover          { color    : #BBB                !important; }
.pinned     .scalepin                { color    : #FFF                !important; }

            .clearpin                { color    : #000                !important; }
            .clearpin:hover          { color    : #888                !important; }
            .clearpin:hover .pressed { color    : #FFF                !important; }
.pinned     .clearpin:hover          { color    : #BBB                !important; }
.pinned     .clearpin                { color    : #0A0                !important; }


                .push_pin       { background-color  : transparent           !important; }
                .closepin       { background-color  : transparent           !important; }
                .scalepin       { background-color  : transparent           !important; }
                .clearpin       { background-color  : transparent           !important; }


.pinned         .push_pin       { background        : linear-gradient(-45deg, rgba(000,000,000,0.07), rgba(255,255,255,0.40) 50%, rgba(000,000,000,0.07)) !important; }
.pinned.dark    .push_pin       { background        : linear-gradient(-45deg, rgba(000,000,000,0.07), rgba(255,255,255,0.13) 50%, rgba(000,000,000,0.07)) !important; }
.pinned         .push_pin:hover { background        : rgba(136,136,136,0.3) !important; }

.pinned         .closepin       { background        : linear-gradient(-45deg, rgba(000,000,000,0.07), rgba(255,255,255,0.40) 50%, rgba(000,000,000,0.07)) !important; }
.pinned.dark    .closepin       { background        : linear-gradient(-45deg, rgba(000,000,000,0.07), rgba(255,255,255,0.13) 50%, rgba(000,000,000,0.07)) !important; }
.pinned         .closepin:hover { background        : rgba(136,136,136,0.3) !important; }

.pinned         .scalepin       { background        : linear-gradient(-45deg, rgba(000,000,000,0.07), rgba(255,255,255,0.40) 50%, rgba(000,000,000,0.07)) !important; }
.pinned.dark    .scalepin       { background        : linear-gradient(-45deg, rgba(000,000,000,0.07), rgba(255,255,255,0.13) 50%, rgba(000,000,000,0.07)) !important; }
.pinned         .scalepin:hover { background        : rgba(136,136,136,0.3) !important; }

.pinned         .clearpin       { background        : linear-gradient(-45deg, rgba(000,000,000,0.07), rgba(255,255,255,0.40) 50%, rgba(000,000,000,0.07)) !important; }
.pinned.dark    .clearpin       { background        : linear-gradient(-45deg, rgba(000,000,000,0.07), rgba(255,255,255,0.13) 50%, rgba(000,000,000,0.07)) !important; }
.pinned         .clearpin:hover { background        : rgba(136,136,136,0.3) !important; }



                .push_pin       { text-align             : center           !important; }
                .closepin       { text-align             : center           !important; }
                .scalepin       { text-align             : center           !important; }
                .clearpin       { text-align             : center           !important; }



            .push_pin           { font-size              : 200%             !important; }
            .push_pin           { font-weight            :  100             !important; }

            .closepin           { font-size              : 200%             !important; }
            .closepin           { font-weight            :  100             !important; }

            .scalepin           { font-size              : 200%             !important; }
            .scalepin           { font-weight            :  100             !important; }

            .clearpin           { font-size              : 200%             !important; }
            .clearpin           { font-weight            :  100             !important; }



.pinned   em.push_pin           { text-shadow       : black 1px 1px 2px               ; }
.pinned   em.push_pin:hover     { text-shadow       : none                  !important; }

.pinned   em.closepin           { text-shadow       : black 1px 1px 2px               ; }
.pinned   em.closepin:hover     { text-shadow       : none                  !important; }

.pinned   em.scalepin           { text-shadow       : black 1px 1px 2px               ; }
.pinned   em.scalepin:hover     { text-shadow       : none                  !important; }

.pinned   em.clearpin           { text-shadow       : black 1px 1px 2px               ; }
.pinned   em.clearpin:hover     { text-shadow       : none                  !important; }



.wide_panel.pin_on_panel { padding-right : 3em; }
.tall_panel.pin_on_panel { padding-top   : 3em; }

.pin_on_panel>.push_pin,
.pin_on_panel>.closepin,
.pin_on_panel>.scalepin,
.pin_on_panel>.clearpin   { display       : inline !important; }





.push_pin,
.closepin,
.scalepin,
.clearpin {
                       transform-origin    :     50% 50%;
}

.wide_panel .closepin,
.tall_panel .closepin,
.wide_panel .scalepin,
.tall_panel .scalepin,
.wide_panel .clearpin,
.tall_panel .clearpin {
    animation-delay           : 200ms;
    animation-duration        : 150ms;
    animation-timing-function : ease-out;
    animation-fill-mode       : forwards;
    opacity                   : 0;
}

.tall_panel .closepin { animation-name : wide_to_tall_closepin; }
.wide_panel .closepin { animation-name : tall_to_wide_closepin; }
.tall_panel .scalepin { animation-name : wide_to_tall_scalepin; }
.wide_panel .scalepin { animation-name : tall_to_wide_scalepin; }
.tall_panel .clearpin { animation-name : wide_to_tall_clearpin; }
.wide_panel .clearpin { animation-name : tall_to_wide_clearpin; }

@keyframes tall_to_wide_closepin {
     50% { opacity   : .5;                      }
    100% { opacity   :  1;                      }

    100% { transform :  translate( 0   , 100%); }
}
@keyframes wide_to_tall_closepin {
     50% { opacity   : .5;                      }
    100% { opacity   :  1;                      }

    100% { transform :  translate(-100%,    0); }
}

@keyframes tall_to_wide_scalepin {
     50% { opacity   : .5;                      }
    100% { opacity   :  1;                      }
    100% { transform :  translate( 0  ,  200%); }
}
@keyframes wide_to_tall_scalepin {
     50% { opacity   : .5;                      }
    100% { opacity   :  1;                      }
    100% { transform :  translate(-200%,    0); }
}

@keyframes tall_to_wide_clearpin {
     50% { opacity   : .5;                      }
    100% { opacity   :  1;                      }
    100% { transform :  translate(    0, 300%); }
}
@keyframes wide_to_tall_clearpin {
     50% { opacity   : .5;                      }
    100% { opacity   :  1;                      }
    100% { transform :  translate(-300%,    0); }
}



           .scalepin::after { content : '\\1F50D'; }
.magnified .scalepin::after { content : '\\1F50E'; }
.magnified .scalepin::after { color   :      red; }



.on_grid                 { padding-right : 0em; }
.on_grid                 { padding-top   : 0em; }
.on_grid                 { border-radius : 2em  !important; }
.on_grid                 { border-style  : none !important; }
.on_grid                 { border-width  : 0    !important; }

.on_grid>.push_pin,
.on_grid>.closepin,
.on_grid>.scalepin,
.on_grid>.closepin       { display       : none  !important; }




@media only screen and (min-resolution : 120dpi) {
}



#div_slot_containers.fullscreen             >div { font-size : 100%; }
#div_slot_containers.fullscreen.magnified_0 >div { font-size :  50%; }
#div_slot_containers.fullscreen.magnified_1 >div { font-size :  75%; }
#div_slot_containers.fullscreen.magnified_2 >div { font-size : 100%; }
#div_slot_containers.fullscreen.magnified_3 >div { font-size : 125%; }
#div_slot_containers.fullscreen.magnified_4 >div { font-size : 150%; }
#div_slot_containers.fullscreen.magnified_5 >div { font-size : 200%; }
#div_slot_containers.fullscreen.magnified_6 >div { font-size : 300%; }
#div_slot_containers.fullscreen.magnified_7 >div { font-size : 350%; }
#div_slot_containers.fullscreen.magnified_8 >div { font-size : 400%; }
#div_slot_containers.fullscreen.magnified_9 >div { font-size : 450%; }

#div_slot_containers.button_monospace       >div { font-family : monospace !important; }
#div_slot_containers.button_monospace          * { white-space : pre-wrap  !important; }


.button_mono.button_monospace                    { opacity     : 1.0    !important; }
.button_mono.button_monospace                    { color       : green  !important; }
.button_mono.button_monospace                    { font-weight : 900    !important; }
.button_mono.button_monospace                    { text-shadow : 2px 2px 2px white; }



#sel_bag.back     { color                      : red; }
#sel_bag.back>div { border-color               : red; }

.back .current_slot_num { color:white; background:linear-gradient(to bottom, #F00, #000) !important; }
          .standby .seeker_handle.back { transform  : rotate(-165deg) !important; }
.back        .seeker_handle                { color                       :     red !important; }
             .seeker_handle.back           { transform                   : translate(0, 20%) rotate(-180deg); }
             .seeker_handle.right.back     { transform                   : translate(0, 20%) rotate( 180deg); }
             .seeker_handle.back           { transition-duration         : 200ms; }
             .seeker_handle.back           { transition-delay            :   0ms; }
             .seeker_handle.left.back      { transition-delay            : 200ms; }
             .seeker_handle.right.back     { transition-delay            : 400ms; }
             .seeker_handle.back           { transition-timing-function  : ease-out; }
             .seeker_handle.back           { transition-property         : all; }
.seeker_handle.back         { transition-delay     :    0ms; }
.seeker_handle.back         { transition-duration  :  100ms; }
.seeker_handle.left.back    { transition-delay     :  100ms; }
.seeker_handle.right.back   { transition-delay     :  100ms; }
.seeker_handle.bottom.back  { transition-delay     :  100ms; }
.seeker_handle.top.back     { transition-delay     :  100ms; }






.magnified                  { transition          : transform 250ms ease-in, font-size 250ms ease-in; }
#pat_bag                    { transition          : transform 250ms ease-in, font-size 250ms ease-in !important; }




.hidden                     { display             : none !important       ; }





@media only screen and (max-resolution :  96dpi) {
    #pat_bag          { transition : height 500ms ease-in, width 500ms ease-in, padding 250ms ease-in; }
    #pat_bag>*        { transition : height 500ms ease-in, width 500ms ease-in                       ; }
    #pat_bag.open_bag { transition : top    100ms ease-in, left  100ms ease-in                       ; }
    #pat_bag.closing  { transition : top    100ms ease-in, left  100ms ease-in             !important; }
}


    #pat_bag.capped   { outline                   : black dotted 8px;   }
    #pat_bag.capped   { animation-duration        :  500ms;             }
    #pat_bag.capped   { animation-fill-mode       : both;               }
    #pat_bag.capped   { animation-name            : outline_BLACK_FADE; }
    #pat_bag.capped   { animation-timing-function : ease-in;            }
@keyframes outline_BLACK_FADE {
      0% { outline-color:rgba(0,0,000,0.9); }
     80% { outline-color:rgba(0,0,000,0.8); }
    100% { outline-color:rgba(0,0,000,0  ); }
}

    #pat_bag.closing  { outline                   : red   solid  8px;   }
    #pat_bag.closing  { animation-delay           :  500ms;             }
    #pat_bag.closing  { animation-duration        : 1000ms;             }
    #pat_bag.closing  { animation-fill-mode       : both;               }
    #pat_bag.closing  { animation-name            : outline_RED_FADE;   }
    #pat_bag.closing  { animation-timing-function : ease-in;            }
@keyframes outline_RED_FADE {
      0% { outline-color:rgba(255,0,0,0.9); }
     80% { outline-color:rgba(255,0,0,0.8); }
    100% { outline-color:rgba(255,0,0,0  ); }
}




.open_bag #bak_bag            { transition : opacity 500ms ease-in                       !important; }




.exp_bag                        { margin           : 0.5em;                            }
.exp_bag                        { border-radius    : 1em 1em 1em 1em;                  }
.exp_bag                        { border-top       : 1px solid rgba(034,034,034,0.07); }
.exp_bag                        { border-left      : 2px solid rgba(034,034,034,0.07); }
.exp_bag                        { border-bottom    : 3px solid rgba(034,034,034,0.07); }
.exp_bag                        { border-right     : 2px solid rgba(034,034,034,0.07); }

.exp_bag                        { padding          : 0.5em;                            }
.exp_bag.pat_arr                { background-color : rgba(192,192,000,0.3); }
.exp_bag.off_arr                { background-color : rgba(000,224,000,0.3); }
.exp_bag.alt_arr                { background-color : rgba(000,000,255,0.3); }
.exp_bag.bak_arr                { background-color : rgba(224,000,000,0.3); }

.tooltip                        { background       : linear-gradient(to left, #FF0 10%, #FF0 30%, #FB0); }
.tooltip.dark                   { background       : linear-gradient(to left, #443 10%, #443 30%, #211); }
.tooltip                        { color            : #000; }
.tooltip.dark                   { color            : #DDD; }
.tooltip                        { font-weight      :  900; }
.tooltip.dark                   { font-weight      :  100; }
.tooltip                        { text-shadow      : 2px 2px 2px white; }
.tooltip.dark                   { text-shadow      : 2px 2px 2px black; }






.pinned.dragged { opacity    : 0.7;                   }




.pinned.bordering:not(.on_grid).u   { border-radius    :  0   0 2em 2em !important; }
.pinned.bordering:not(.on_grid).u.r { border-radius    :  0   0   0 2em !important; }
.pinned.bordering:not(.on_grid).r   { border-radius    :2em   0   0 2em !important; }
.pinned.bordering:not(.on_grid).r.d { border-radius    :2em   0   0   0 !important; }
.pinned.bordering:not(.on_grid).d   { border-radius    :2em 2em   0   0 !important; }
.pinned.bordering:not(.on_grid).d.l { border-radius    :  0 2em   0   0 !important; }
.pinned.bordering:not(.on_grid).l   { border-radius    :  0 2em 2em   0 !important; }
.pinned.bordering:not(.on_grid).l.u { border-radius    :  0   0 2em   0 !important; }

.pinned.bordering     { border-color     : #A00  !important; }


.pinned.bordering.u   { border-width     : 0.5em 0.2em 0.2em 0.2em !important; }
.pinned.bordering.u.r { border-width     : 0.5em 0.5em 0.2em 0.2em !important; }
.pinned.bordering.r   { border-width     : 0.2em 0.5em 0.2em 0.2em !important; }
.pinned.bordering.r.d { border-width     : 0.2em 0.5em 0.5em 0.2em !important; }
.pinned.bordering.d   { border-width     : 0.2em 0.2em 0.5em 0.2em !important; }
.pinned.bordering.d.l { border-width     : 0.2em 0.2em 0.5em 0.5em !important; }
.pinned.bordering.l   { border-width     : 0.2em 0.2em 0.2em 0.5em !important; }
.pinned.bordering.l.u { border-width     : 0.5em 0.2em 0.2em 0.5em !important; }

.pinned.bordering     { border-style        : groove; }
.pinned.bordering.u   { border-top-style    :  ridge; }
.pinned.bordering.u.r { border-top-style    :  ridge; }
.pinned.bordering.u.r { border-right-style  :  ridge; }
.pinned.bordering.r   { border-right-style  :  ridge; }
.pinned.bordering.r.d { border-right-style  :  ridge; }
.pinned.bordering.r.d { border-bottom-style :  ridge; }
.pinned.bordering.d   { border-bottom-style :  ridge; }
.pinned.bordering.d.l { border-bottom-style :  ridge; }
.pinned.bordering.d.l { border-left-style   :  ridge; }
.pinned.bordering.l   { border-left-style   :  ridge; }
.pinned.bordering.l.u { border-left-style   :  ridge; }
.pinned.bordering.l.u { border-top-style    :  ridge; }

.pinned.corner_l_u    { transform-origin :   0%   0% !important; }
.pinned.corner_u_r    { transform-origin : 100%   0% !important; }
.pinned.corner_r_d    { transform-origin : 100% 100% !important; }
.pinned.corner_d_l    { transform-origin :   0% 100% !important; }





#import_clipboard {
    cursor     : copy                   !important;
    border     : ridge 3px              !important;
    background : rgba( 32,192, 32,0.80) !important;
    color      : black                  !important;
    min-height : 10em                   !important;
    max-height : 10em                   !important;
    min-width  : 30em                   !important;
    font-size  : 10px                   !important;

}
#import_clipboard:focus {
    border     : 2px solid black        !important;
    background : #008800                !important;
    color      : #00FF00                !important;
}




@media only screen and (max-resolution :  96dpi) {

}
@media only screen and (min-resolution : 120dpi) {

}
@media only screen and (min-resolution : 120dpi) {



}






.open_bag                       { z-index :100 !important; }

#hotspot                        { z-index : 99; }
#fly_div                        { z-index : 99; }
#seekzone                       { z-index : 99; }

#pivspot                        { z-index : 80; }
#seekspot_A                     { z-index : 80; }
#seeker_PU                      { z-index : 80; }
#seeker_PD                      { z-index : 80; }

.pinned.on_grid                 { z-index : 50;              }
.pinned.work_panel              { z-index : 80   !important; }
       .work_panel              {  filter : none !important; }

.hotwave::after                 { z-index : -1; }
#bot_div                        { z-index : -1; }
#seeker_CD .seeker_handle       { z-index :  1; }
#seekspot_U, #seekspot_D        { z-index : -1; }

.clearpin                       { z-index :  0; }
.closepin                       { z-index :  0; }
.panel_magnifying_glass::before { z-index :  2; }
.push_pin                       { z-index :  0; }
.scalepin                       { z-index :  0; }
.txt_log                        { z-index :  2; }
.mov_src                        { z-index :  1; }
#hov1                           { z-index :  2; }
#hov2                           { z-index :  2; }
#hov3                           { z-index :  2; }
#hov4                           { z-index :  2; }

#transcript2                 em { z-index :  1; }
#transcript1                 em { z-index :  1; }
#test_panel                  em { z-index :  1; }
#sel_bag                     em { z-index :  1; }
#pat_bag                     em { z-index :  1; }
#headsup                     em { z-index :  1; }
#dom_traversal               em { z-index :  1; }
#dom_load_tags               em { z-index :  1; }
#dev_log_map                 em { z-index :  1; }



 #pat_bag           em
,#sel_bag           em
,#headsup           em
,#dom_traversal     em
,#dev_log_map       em
,#test_panel        em
,#dom_load_tags     em
,#transcript1       em
,#transcript2       em
{
    z-index        :  1;
}
#tools_tier2 {
    z-index        :  2 !important;
}

.transcript.on_grid {
    z-index        : 51 !important;
}





#seeker_PD           { opacity             :         1.0; }

#seeker_PD           { transform-origin    :     50% 0 0; }
#seeker_PD           { transform           : scale(0.33); }
#seeker_PD.magnified { transform           : scale(1   ); }

#seeker_PD           { transition-duration :       200ms; }
#seeker_PD.magnified { transition-duration :       200ms; }






#seekzone    { display          : none;             }
#seekzone    { position         : fixed;            }
#seekzone    { pointer-events   : none;             }
#seekzone    { padding          : 0     !important; }


#seekzone             { transition : all 250ms cubic-bezier(.21,.38,.74,.36); }




#seekzone.on_container { transform        : translate(   0,  0 ); }
#seekzone.gutter       { transform        : translate(   0,  0 ); }

#seekzone              { transform-origin :            50% 50%  ; }
#seekzone.pressed      { animation        :     750ms both pressed_SCALE; }
@keyframes pressed_SCALE  {
      0% { transform: scale(1.5); background-color : rgba(  0,  0,  0,0.1); }
     45% { transform: scale(1  ); background-color : rgba(  0,  0,  0,0.5); }
     50% { transform: scale(1  ); background-color : rgba(000,255,000,1  ); }
     55% { transform: scale(1  ); background-color : rgba(000,000,000,1  ); }
    100% { transform: scale(1  ); background-color : rgba(255,000,255,0.3); }
}


#seekzone.anchor_node::before {
    font-size        : 64px;
    content          : '\\2693';
    position         : absolute;
    left             : 50%;
    top              : 50%;
    transform        : translate(-50%,-50%);
}

#seekzone.anchor_node.anchor_left::before {

    animation        :     500ms cubic-bezier(1.0   ,  0.21 , 0.37  ,  1.2  ) both woble_left;
}
#seekzone.anchor_node.anchor_right::before {

    animation        :     500ms cubic-bezier(1.0   ,  0.21 , 0.37  ,  1.2  ) both woble_right;
}
@keyframes woble_left {
    from { transform : translate(-50%,-50%) rotate( 30deg); }

    to   { transform : translate(-50%,-50%) rotate(  0deg); }
}

@keyframes woble_right {
    from { transform : translate(-50%,-50%) rotate(-30deg); }

    to   { transform : translate(-50%,-50%) rotate(  0deg); }
}









#seekzone.gutter.marked_to_hide { box-shadow    : 0 0 9px 9px rgba( 32, 32, 32, 0.5) inset; }
#seekzone.gutter                { box-shadow    : 0 0 2px 2px rgba(068,000,255, 0.9) inset; }
#seekzone.gutter                { border-radius : 0px !important; }


#seekzone>EM { position:absolute; top :-2em; white-space : nowrap; }



#seekzone                    { border-radius :   2em           ; }
#seekzone.misclick           { border-radius :   2em !important; }






#seekzone.misclick                 { box-shadow : none !important; }

#seekzone.container_selected       { box-shadow : 0  0  5px 5px   rgba( 32, 32, 32, 0.5) inset; }
#seekzone.container_selected.dark  { box-shadow : 0  0  5px 5px   rgba(128,128,128, 0.5) inset; }




#seekzone.misclick                 { opacity    : 0.7; }





#seekzone.pressed         { margin-left   : -4em;             }
#seekzone.pressed         { margin-top    : -4em;             }
#seekzone.pressed         { border-radius :  4em  !important; }
#seekzone.pressed         { width         :  8em  !important; }
#seekzone.pressed         { height        :  8em  !important; }
#seekzone.pressed         { box-shadow    : none  !important; }
#seekzone.pressed         { opacity       : 0.7;              }



#seekzone.gutter    { background          : transparent !important; }
#seekzone.misclick  { background-color    : green ; }
#seekzone.misclick3 { background-color    : yellow; }
#seekzone.misclick2 { background-color    : orange; }
#seekzone.misclick1 { background-color    : red   ; }

#seekzone.dblclick  { background-color    : rgba(000,000,255,0.13)  ; }


#seekzone.bordering            { transition    : all 250ms ease-out;         }
#seekzone.bordering            { border        : 2px solid  #F0F;            }
#seekzone.bordering            { animation     : 2000ms ease-out flash;      }

#seekzone.bordering.corner_l_u { border-radius : 50%  0%  0%  0% !important; }
#seekzone.bordering.corner_u_r { border-radius :  0% 50%  0%  0% !important; }
#seekzone.bordering.corner_r_d { border-radius :  0%  0% 50%  0% !important; }
#seekzone.bordering.corner_d_l { border-radius :  0%  0%  0% 50% !important; }













#seeker_PU                                  { display          : none;            }
#seeker_PU.seek_above                       { transform-origin : 50% 100%;        }
#seeker_PU.seek_bellow                      { transform-origin : 50%   0%;        }
#seeker_PU.fading                           { transform        : none !important; }
#seeker_PU.seek6_onSticky                   { transform        : scale(0.3);      }
#seeker_PU.quick_move>*                     { border           : 9px dotted red;  }




#seeker_PU               { border-radius    : 50%; }

#seeker_PU               { position         : absolute; top:10em; left:14em; }
#seeker_PU               { vertical-align   : middle; }
#seeker_PU.show_seekzone { transform-origin : 50% 100%; }



#seeker_PD               { border-radius    : 50%; }
#seeker_PD               { display          : none; }
#seeker_PD               { position         : absolute; top: 5em; left:14em; }
#seeker_PD               { vertical-align   : middle; }












.seeker_P           { background       : transparent; }
.seeker_P           { margin           : 0; }
.seeker_P           { cursor           : pointer; }
.seeker_P:hover     { color            : red; }
.seeker_P:hover     { font-weight      : bold; }


.seeker_P      >div { position         : relative; }
.seeker_P      >div { transform-origin : 50% 100%; }
.seeker_P      >div { margin           : 0; }
.seeker_P      >div { border           : none; }
.seeker_P      >div { border-radius    : 1em; }

.seeker_P      >div { width            : 120px; }
.seeker_P      >div { padding          : 0; }
.seeker_P      >div { font-size        : 500%; }
.seeker_P      >div { font-weight      : 800; }
.seeker_P      >div { height           : 120px; }
.seeker_P      >div { line-height      : 120px; }
.seeker_P      >div { text-align       : center; }
.seeker_P      >div { background       : linear-gradient(to bottom, rgba(255,255,255,.8), rgba(255,172,  0,.1)); }
.seeker_P.dark >div { background       : linear-gradient(to bottom, rgba( 64, 64, 48,.8), rgba( 32, 16, 16,.1)); }



#seeker_PD.standby                     { background : linear-gradient(to bottom, rgba(255,0,0,1), #400) !important; }
#seeker_PU.standby                     { background : linear-gradient(to bottom, rgba(255,0,0,1), #400) !important; }

          .standby .seeker_handle      { transform  : rotate( -15deg) !important; }
          .standby .seeker_handle.back { transform  : rotate(-165deg) !important; }



#seeker_PD                              { box-shadow : 12px 12px  24px        rgba(  0,  0,  0,0.5); }
.seeker_P               >div            { box-shadow : -3px  -3px  6px    0px rgba(  0,  0,  0,0.5) inset; }
.seeker_P.scroll_smooth >div            { box-shadow :  0px   0px  2px    8px rgba(255,255,255,0.5) inset; }







.seeker_PU2_look_up                     { box-shadow :   0px -32px  0px   32px !important; }
.seeker_PU3_look_right                  { box-shadow :  32px   0px  0px   32px !important; }
.seeker_PU4_look_down                   { box-shadow :   0px  32px  0px   32px !important; }
.seeker_PU5_look_left                   { box-shadow : -32px   0px  0px   32px !important; }






#seeker_PU                  { color      : rgba(064,064,064,0.1); }


#seeker_PU.slot_color1      { color      : rgba(150,075,000,0.5) !important; }
#seeker_PU.slot_color2      { color      : rgba(255,000,000,0.5) !important; }
#seeker_PU.slot_color3      { color      : rgba(255,165,000,0.5) !important; }
#seeker_PU.slot_color4      { color      : rgba(255,255,000,0.5) !important; }
#seeker_PU.slot_color5      { color      : rgba(154,205,050,0.5) !important; }
#seeker_PU.slot_color6      { color      : rgba(100,149,237,0.5) !important; }
#seeker_PU.slot_color7      { color      : rgba(238,130,238,0.5) !important; }
#seeker_PU.slot_color8      { color      : rgba(160,160,160,0.5) !important; }
#seeker_PU.slot_color9      { color      : rgba(255,255,255,0.5) !important; }
#seeker_PU.slot_color0      { color      : rgba(032,032,032,0.5) !important; }







#seeker_PU                        { transition : transform  500ms    , top  250ms         , left 250ms        ; }
#seeker_PU.scroll_smooth          { transition :                       top  250ms ease-out, left 500ms cubic-bezier(0.080, 1.015, 0.055, 0.930); }
#seeker_PU.show_seekzone          {              transform: scale(0.5); }







    .fading *        { transform-origin           : 50%  120%;                             }
    .fading *        { transform                  : scale(0.20);                           }
    .fading *::after { transform                  : scale(0.50) rotate(-90deg) !important; }

    .fading *        { transition-delay           : 600ms;                                 }
    .fading *        { transition-duration        : 300ms;                                 }
    .fading *::after { transition-duration        : 300ms                      !important; }

    .fading *        { transition-timing-function : ease-in;                               }
    .fading *::after { transition-timing-function : ease-in;                               }

    .fading .error   { transform                  : none                       !important; }
    .fading .info    { transform                  : none                       !important; }


      #seeker_CU                       { color          : #40D;     }
.dark #seeker_CU                       { color          : pink;     }

      #seeker_CU sup                   { font-size      :  30%;     }
      #seeker_CU sup                   { pointer-events : none;     }

      #seeker_CU sub                   { font-size      :  30%;     }
      #seeker_CU sub                   { pointer-events : none;     }

      #seeker_CU sub                   { vertical-align : baseline; }



      #seeker_CD                       { width          : 360px; }
      #seeker_CD                       { height         : 360px; }
      #seeker_CD                       { line-height    : 360px !important; }
      #seeker_CD                       { border-radius  : 50%; }

      #seeker_CD em                    { line-height : 150%;  }
      #seeker_CD em                    { font-size   : 36px;  }
      #seeker_CD .seeker_handle        { font-size   : 192px; }
      #seeker_CD .seeker_handle.left   { font-size   : 192px; }
      #seeker_CD .seeker_handle.right  { font-size   : 192px; }
      #seeker_CD .seeker_handle.top    { font-size   :  48px; }
      #seeker_CD .seeker_handle.bottom { font-size   :  48px; }





#seeker_thumbs         {
    display          : inline-block;
    position         : absolute;
    margin           : 0;
    margin-right     :-50%;
    top              : 50%;
    left             : 50%;
    transform        : translate(-50%,-50%);

    font-weight      : 900;
    font-size        : 16px;
    line-height      : 28px;
    vertical-align   : middle;

    border-radius    : 2em;
    background       : transparent;

}
#seeker_thumbs * {
    vertical-align   : middle;
}
#seeker_thumbs .ellipsis {
    display          : block;
}
.ellipsis {
    margin-left      : 0.2em;
    margin-right     : 0.2em;
}




#sel_bag     .seeker_handle                { position   : absolute;    top :  0  ;     left : 0;                 }
#seeker_CD   .seeker_handle.left           { position   : absolute;    top :-.2em;     left : 0;                 }
#seeker_CD   .seeker_handle.right          { position   : absolute;    top :-.2em;    right : 0;                 }
#seeker_CD   .seeker_handle.top            { position   : absolute;    top : 1em; transform : translate(-50%,0); }
#seeker_CD   .seeker_handle.bottom         { position   : absolute; bottom : 1em; transform : translate(-50%,0); }

#seeker_CD   .seeker_handle.bottom  {
    border-width : 2px 0 2px 0 !important;
    border-style : dashed      !important;
    width        : 2em         !important;
    line-height  : 1em         !important;
}

#seeker_CD   .seeker_handle.top     {
    border       : 0           !important;
    line-height  : 1em         !important;
}

             .seeker_handle                { color                       :   green !important; }
.back        .seeker_handle                { color                       :     red !important; }
             .seeker_handle.bottom         { color                       :    gray !important; }
             .seeker_handle.bottom.checked { color                       :     red !important; }
             .seeker_handle.bottom.checked { border-color                :     red !important; }
             .seeker_handle.top            { color                       :   black !important; }
             .seeker_handle.top.checked    { color                       :    navy !important; }
             .seeker_handle.top.checked    { border-color                :    navy !important; }

             .seeker_handle                { font-size                   :    64px; }
             .seeker_handle                { font-weight                 :     300; }
             .seeker_handle                { margin                      :       0; }
             .seeker_handle                { padding                     :       0; }

             .seeker_handle                { transform-origin            : 50% 50% 0; }
             .seeker_handle.back           { transform                   : translate(0, 20%) rotate(-180deg); }
             .seeker_handle.right.back     { transform                   : translate(0, 20%) rotate( 180deg); }

             .seeker_handle                { transition-duration         : 200ms; }
             .seeker_handle.back           { transition-duration         : 200ms; }

             .seeker_handle                { transition-delay            :   0ms; }
             .seeker_handle.back           { transition-delay            :   0ms; }
             .seeker_handle.left           { transition-delay            : 200ms; }
             .seeker_handle.left.back      { transition-delay            : 200ms; }
             .seeker_handle.right          { transition-delay            : 400ms; }
             .seeker_handle.right.back     { transition-delay            : 400ms; }
             .seeker_handle.bottom         { transition-delay            : 600ms; }
             .seeker_handle.bottom.checked { transition-delay            : 600ms; }
             .seeker_handle.top            { transition-delay            : 600ms; }
             .seeker_handle.top.checked    { transition-delay            : 600ms; }

             .seeker_handle                { transition-timing-function  : ease-in;  }
             .seeker_handle.back           { transition-timing-function  : ease-out; }

             .seeker_handle.back           { transition-property         : all; }



#seeker_PU.on_hidden_node { transition-duration : 500ms; }
#seeker_PU.on_hidden_node { transform           : rotate(-25deg) !important; }

#seeker_PD.on_hidden_node { transition-duration : 500ms; }
#seeker_PD.on_hidden_node { transform           : rotate(-25deg) !important; }



#seeker_CU::after { content          : "?"; }

#seeker_CU::after { position         : absolute; }
#seeker_CU::after { font-size        :  50%; }
#seeker_CU::after { text-align       : center !important; }
#seeker_CU::after { vertical-align   : middle !important; }
#seeker_CU::after { padding          : 0      !important; }
#seeker_CU::after { margin           : 0      !important; }
#seeker_CU::after { transform-origin : -100% 50% 0; }
#seeker_CU::after { content          : '\\2699'; }
#seeker_CU::after { opacity          : 0.5; }
#seeker_CU::after { text-shadow      : rgba(0,0,0,0.5) .02em .02em .1em !important; }
#seeker_CU::after { transition-duration        : 500ms; }
#seeker_CU::after { transition-timing-function : cubic-bezier(.22,1.39,.02,1.22); }



#seeker_CU.num1::after  { transform : rotate( -60deg); }
#seeker_CU.num2::after  { transform : rotate( -30deg); }
#seeker_CU.num3::after  { transform : rotate(   0deg); }
#seeker_CU.num4::after  { transform : rotate(  30deg); }
#seeker_CU.num5::after  { transform : rotate(  60deg); }
#seeker_CU.num6::after  { transform : rotate(  90deg); }
#seeker_CU.num7::after  { transform : rotate( 120deg); }
#seeker_CU.num8::after  { transform : rotate( 150deg); }
#seeker_CU.num9::after  { transform : rotate( 180deg); }
#seeker_CU.num10::after { transform : rotate( 210deg); }
#seeker_CU.num11::after { transform : rotate( 240deg); }
#seeker_CU.num12::after { transform : rotate( 270deg); }



          .seek2_onSlotEL #seeker_CU    { border-radius  : 50%  50%  45%  45% !important; }
          .seek1_onResume #seeker_CU    { border-radius  : 50%  50%  45%  45% !important; }
          .seek4_onJumpEL #seeker_CU    { border-radius  : 0                  !important; }
          .seek5_onSeeker #seeker_CU    { border-radius  : 50%  50%  25%  25% !important; }
          .seek6_onSticky #seeker_CU    { border-radius  : 50%  50%  45%  45% !important; }



#seeker_CU::after                { line-height   : 1.5em; }
#seeker_CU::after                { padding       : 0; }

#seeker_CU.long_press_arm::after { content       : '\\25A4'; }
#seeker_CU.long_press_arm::after { border-radius : 0 .2em .2em 0     !important; }
#seeker_CU.long_press_arm::after { border        : .07em solid black !important; }

#seeker_CU.long_press_arm::after { transition    : transform 250ms       , line-height  250ms   150ms, color  500ms  500ms, padding ease-in 1750ms  250ms, background-color 1000ms 0ms; }
#seeker_CU.long_press_arm::after {                                                                                                                         background-color:#BAB;    }
#seeker_CU.long_press_arm::after {                                                                                          padding: 0 1em 0 1em !important; }
#seeker_CU.long_press_arm::after {                                                                     color:#000;       }
#seeker_CU.long_press_arm::after {                                         line-height:  1em;       }
#seeker_CU.long_press_arm::after {                 transform:rotate(0); }






#seekspot_U, #seekspot_D { display          :  none; }
#seekspot_U, #seekspot_D { pointer-events   :  none; }
#seekspot_U, #seekspot_D { position         : fixed; }
#seekspot_U, #seekspot_D { left             :     0; }
#seekspot_U, #seekspot_D { color            : white; }

#seekspot_U              { top              :     0; }
             #seekspot_D { bottom           :     0; }
#seekspot_U, #seekspot_D { width            :   99%; }
#seekspot_U, #seekspot_D { height           : 100px; }

#seekspot_U>*              { position:absolute; left:1.3em; bottom:0; margin:0; padding: 1em; }
             #seekspot_D>* { position:absolute; left:1.3em;    top:0; margin:0; padding: 1em; }



#seekspot_A { position       : fixed;                           }
#seekspot_A { display        : none;                            }
#seekspot_A { pointer-events : none;                            }

#seekspot_A { transform      : translate(-50%,-36%) !important; }
#seekspot_A { font-size      : 100px                !important; }
#seekspot_A { color          : red                  !important; }








#seekspot_U>*              { border-radius : 0em 3em 0em 0em; }
             #seekspot_D>* { border-radius : 0em 0em 3em 0em; }

#seekspot_U >*              { box-shadow       : rgba( 0, 0, 0, 0.2) 5px -5px 16px 0px; }
             #seekspot_D >* { box-shadow       : rgba( 0, 0, 0, 0.2) 5px  5px 16px 0px; }


#seekspot_U                   { background : linear-gradient(to bottom, rgba( 64, 64, 64,.7) 50%, rgba( 64, 64, 64,.1)); }
             #seekspot_D      { background : linear-gradient(to top   , rgba( 64, 64, 64,.7) 50%, rgba( 64, 64, 64,.1)); }
#seekspot_U.dark              { background : linear-gradient(to bottom, rgba(  0,  0,  0,.7) 50%, rgba(  0,  0,  0,.1)); }
             #seekspot_D.dark { background : linear-gradient(to top   , rgba(  0,  0,  0,.7) 50%, rgba(  0,  0,  0,.1)); }

#seekspot_U>*                 { background : linear-gradient(to left, rgba( 96,128, 96,.8) 10%, rgba( 96,128, 96,.9)); }
             #seekspot_D>*    { background : linear-gradient(to left, rgba( 96, 96,255,.8) 10%, rgba( 96, 96,255,.9)); }




.seek_above  #seeker_CU::before { font-size: 32px; content:'\\261F'; position:absolute; bottom: 0.7em; transition: all 500ms ease-in; margin:   0em 0em -2em 1.0em;  }
.seek_bellow #seeker_CU::before { font-size: 32px; content:'\\261F'; position:absolute; bottom: 0.7em; transition: all 500ms ease-in; margin:   0em 0em -2em 1.3em; transform: rotate(-180deg); transform-origin: 0em 0.5em; }

.seek_above  #seeker_CD::before {                  content:'\\261F'; position:absolute;    top:   0em; transition: all 500ms ease-in; margin: 2.5em 0em -5em 0.0em;  }
.seek_bellow #seeker_CD::before {                  content:'\\261F'; position:absolute;    top:   0em; transition: all 500ms ease-in; margin: 2.5em 0em -5em 0.0em; transform: rotate(-180deg); transform-origin: 0em 0.5em; }




.data_pattern.words_exact     { border-color  : #FFA500         !important; }
.data_pattern.words_segment   { border-color  : #FFFF00         !important; }
.data_pattern.words_head_tail { border-color  : #9ACD32         !important; }

.data_pattern.words_exact     { border-radius : 0.3em           !important; }
.data_pattern.words_segment   { border-radius : 0               !important; }
.data_pattern.words_head_tail { border-radius : 1.0em           !important; }

.data_pattern.words_exact     { border-style  : solid           !important; }
.data_pattern.words_segment   { border-style  : solid           !important; }
.data_pattern.words_head_tail { border-style  : solid           !important; }

.data_pattern.words_exact     { border-width  : 0 0.4em 0 0.4em !important; }
.data_pattern.words_exact     { padding       : 0 0.6em 0 0.6em !important; }

.data_pattern.words_segment   { border-width  : 0 0.2em 0 0.2em !important; }
.data_pattern.words_segment   { padding       : 0 0.8em 0 0.8em !important; }

.data_pattern.words_head_tail { border-width  : 0 0.8em 0 0.8em !important; }
.data_pattern.words_head_tail { padding       : 0 0.2em 0 0.2em !important; }

      input.data_pattern { box-shadow         : 0   0.1em 0.3em black; }
.dark input.data_pattern { box-shadow         : 1px   1px   0px   red; }




.sticky_raised .sticky_pad { box-shadow : 9px 9px 20px black; }


.sticky_pad         { z-index : 1; }
.sticky_hand        { z-index : 2; }

.sticky_hand::after { z-index : 2; }

.sticky_rotate      { z-index : 2; }
.sticky_fix         { z-index : 3; }
.sticky_pen         { z-index : 3; }
.sticky_msg_edit    { z-index : 4; }
.sticky_refont      { z-index : 4; }
.sticky_reflow      { z-index : 4; }
.sticky_resize      { z-index : 5; }






.sticky_msg_edit {
    outline      : 2px dotted red;
    box-shadow  : rgba(000,000,000,0.5) 6px 2px  7px 0px;



}








.sticky                     { user-select    : none; }

.sticky                     { pointer-events : none; }




              .sticky_hand_mov    { display :  none; }
.pressed      .sticky_hand_mov    { display : block; }
.fixed        .sticky_hand_mov    { display : block; }



              .sticky_fix         { display :  none; }
.pressed      .sticky_fix         { display :  none; }
.fixed        .sticky_fix         { display : block; }

              .sticky_pen         { display :  none; }
.pressed      .sticky_pen         { display :  none; }
.fixed        .sticky_pen         { display : block; }

              .sticky_refont      { display :  none; }
.pressed      .sticky_refont      { display :  none; }
.fixed        .sticky_refont      { display : block; }

.sticky_ring  .sticky_fix         { display : block; }
.sticky_ring  .sticky_pen         { display :  none; }
.sticky_ring  .sticky_refont      { display :  none; }

.sticky_ring.collapsing .sticky_fix        { display :  none; }






                 .sticky_fix          { border-radius : 50%;             }
                 .sticky_hand_mov     { border-radius : 50%;             }
                 .sticky_pen          { border-radius : 25%;             }
                 .sticky_pen          { text-align    : center;          }


.sticky.pinned.bordering              { border        : none !important; }


















.sticky                        .weight3             { font-weight :  900; }
.sticky                        .weight2             { font-weight :  500; }
.sticky                        .weight1             { font-weight :  100; }

                               .sticky_fix          { font-size   : 32px; }
                               .sticky_hand_mov     { font-size   : 32px; }
                               .sticky_pen          { font-size   : 32px; }
                               .sticky_refont       { font-size   : 32px; }
.sticky_ring                   .sticky_fix          { font-size   : 64px; }


.sticky .size1                                      { font-size   :  8px; }
.sticky .size2                                      { font-size   : 12px; }
.sticky .size3                                      { font-size   : 18px; }
.sticky .size4                                      { font-size   : 40px; }
.sticky .size5                                      { font-size   : 48px; }




.sticky                  { line-height :   1em; }
.sticky *                { line-height : 0.8em; }
        .sticky_hand_mov { line-height :   1em; }
        .sticky_fix      { line-height :   1em; }





.sticky         .sticky_hand_mov    { position: absolute; }

.sticky         .sticky_fix         { position: absolute; }
.sticky         .sticky_pen         { position: absolute; }
.sticky         .sticky_refont      { position: absolute; }






.sticky          .sticky_hand_mov    {    top :    50%; right :     0 ; }















.sticky                      { transform-origin :  0px 36px !important; }

.sticky  .sticky_hand_mov    { transform        : translate( 50%, -50%); }



.sticky          .sticky_fix         { transform        : translate( 1em, -0.2em); }
.sticky.point_EE .sticky_fix         { transform        : translate(-1em, -0.2em); }
.sticky.point_NE .sticky_fix         { transform        : translate(-1em, -0.2em); }
.sticky.point_NW .sticky_fix         { transform        : translate( 1em, -0.2em); }
.sticky.point_SE .sticky_fix         { transform        : translate(-1em, -0.2em); }
.sticky.point_SW .sticky_fix         { transform        : translate( 1em, -0.2em); }
.sticky.point_WW .sticky_fix         { transform        : translate( 1em, -0.2em); }

.sticky          .sticky_pen         { transform        : translate( 2em, -0.2em); }
.sticky.point_EE .sticky_pen         { transform        : translate(-2em, -0.2em); }
.sticky.point_NE .sticky_pen         { transform        : translate(-2em, -0.2em); }
.sticky.point_NW .sticky_pen         { transform        : translate( 2em, -0.2em); }
.sticky.point_SE .sticky_pen         { transform        : translate(-2em, -0.2em); }
.sticky.point_SW .sticky_pen         { transform        : translate( 2em, -0.2em); }
.sticky.point_WW .sticky_pen         { transform        : translate( 2em, -0.2em); }

.sticky          .sticky_refont      { transform        : translate( 0.2em, 0.0em); }
.sticky.point_EE .sticky_refont      { transform        : translate(-0.2em,-0.0em); }
.sticky.point_NE .sticky_refont      { transform        : translate(-0.2em, 0.0em); }
.sticky.point_NW .sticky_refont      { transform        : translate( 0.2em, 0.0em); }
.sticky.point_SE .sticky_refont      { transform        : translate(-0.2em, 0.0em); }
.sticky.point_SW .sticky_refont      { transform        : translate( 0.2em,-0.0em); }
.sticky.point_WW .sticky_refont      { transform        : translate( 0.2em,-0.0em); }

.sticky                      { transform        : rotate(   0   ); }
.sticky.point_EE             { transform        : rotate(   0   ); }
.sticky.point_NE             { transform        : rotate( -45deg); }
.sticky.point_NW             { transform        : rotate(-135deg); }
.sticky.point_SE             { transform        : rotate(  45deg); }
.sticky.point_SW             { transform        : rotate( 135deg); }
.sticky.point_WW             { transform        : rotate(-180deg); }




.flipped                     { transform        : rotate(180deg); display:inline-block; }



.sticky                               { width : 128px; height : 72px; }






.sticky          .sticky_hand_mov     {  width :  32px; height : 32px; }
.sticky          .sticky_fix          {  width :   1em; height :  1em; }
.sticky          .sticky_pen          {  width :   2em; height :  1em; }
.sticky          .sticky_refont       {  width :  100%; height :  1em; }



.sticky_ring     .sticky_fix          {  width : 66px !important; height : 66px !important; }
.sticky_ring     .sticky_pen          {  width : 66px !important; height : 66px !important; }
.sticky_ring     .sticky_refont       {  width : 66px !important; height : 66px !important; }




.sticky *                      { vertical-align : bottom; }

.sticky       .sticky_fix      { text-align : center; }
.sticky       .sticky_hand_mov { text-align : center; }



.sticky.big12_note>div           { height      : 12em; }
.sticky.big18_note>div           { height      : 18em; }
.sticky            pre           { margin      :  0  ; }
.sticky            pre           { padding     :  0  ; }


.sticky            pre.show_seekzone   { background  :  #222 !important; }
.sticky            pre.show_seekzone   { padding     :   1em !important; }
.sticky            pre.show_seekzone   { line-height : 1.2em !important; }
.sticky            pre.show_seekzone * { line-height : 1.2em !important; }



@keyframes swinging {
    from { transform : rotate(  0deg); }
    to   { transform : rotate(360deg); }
}



@keyframes retracting {
    from { transform : translate(  0%); }
     2%  { transform : translate( 20%); }
    90%  { transform : translate( 10%); }
    to   { transform : translate(  0%); }
}




  .sticky_pad_num    { position         : absolute;    top:16px;  left: 4px; }
  .sticky_pad_num    { font-family      : 'Lucida Console';    }
  .sticky_pad_num    { font-size        : 64px;                }
  .sticky_pad_num    { color            : rgb(0,0,0,0.2);      }



  .sticky_pad_dat    { position         : absolute; bottom: 1px; right: 16px; }
  .sticky_pad_dat    { color            : rgba(255,0,0,0.9);   }
  .sticky_pad_dat    { border-radius    : 10px 10px 0 0;       }
  .sticky_pad_dat    { padding          : 0  8px 0 8px;        }
  .sticky_pad_dat    { font-family      : 'monospace';         }





                   .sticky_pad { display    : block; }
.sticky_ring       .sticky_pad { display    : block; }

                   .sticky_pad { color      : #222; }



                   .sticky_pad { transition   : transform 150ms ease-out;   }
.sticky.point_WW   .sticky_pad { transition   : transform 300ms ease-out;   }



              .sticky_pad    { box-shadow     : rgba(000,000,000,0.5) 6px 2px  7px 0px; }
.dark         .sticky_pad    { box-shadow     : rgba(128,128,128,0.5) 2px 2px  2px 0px; }
              .sticky_pad    { pointer-events : auto; }
.paste_target .sticky_pad    { outline        : 4px rgba(000,000,255,0.53) dashed; }



              .sticky_pad    { border-left   : 10px solid rgba(0,0,0,0.2); }

              .sticky_pad    { border-radius : 0    0    0    0;           }
.point_EE     .sticky_pad    { border-radius : 0    0    0    0;           }
.point_NE     .sticky_pad    { border-radius : 0    0    0  8px;           }
.point_NW     .sticky_pad    { border-radius : 0    0    8px  0;           }
.point_SE     .sticky_pad    { border-radius : 8px  0    0    0;           }
.point_SW     .sticky_pad    { border-radius : 0    8px  0    0;           }
.point_WW     .sticky_pad    { border-radius : 0    0    0    0;           }


              .sticky_pad    { min-width  :  5em; }
              .sticky_pad    { min-height :  5em; }


.sticky_ring  .sticky_pad    { min-width  : 16em !important; }



              .sticky_pad    { margin-top       : 25%;      }
              .sticky_pad    { position         : relative; }
              .sticky_pad    { transform-origin : top left; }

.point_EE     .sticky_pad    { transform        : rotate(   0   ) translate(   0 , -50%); }
.point_NE     .sticky_pad    { transform        : rotate(  45deg) translate(   0 ,-100%); }
.point_NW     .sticky_pad    { transform        : rotate( 135deg) translate(-100%,-100%); }
.point_SE     .sticky_pad    { transform        : rotate( -45deg) translate(   0 ,   0 ); }
.point_SW     .sticky_pad    { transform        : rotate(-135deg) translate(-100%,   0 ); }
.point_WW     .sticky_pad    { transform        : rotate( 180deg) translate(-100%, -50%); }

.point_EE     .sticky_pad    { margin-left      : 59%; margin-top : 28%; }
.point_NE     .sticky_pad    { margin-left      : 47%; margin-top : 28%; }
.point_NW     .sticky_pad    { margin-left      : 47%; margin-top : 28%; }
.point_SE     .sticky_pad    { margin-left      : 47%; margin-top : 28%; }
.point_SW     .sticky_pad    { margin-left      : 47%; margin-top : 28%; }
.point_WW     .sticky_pad    { margin-left      : 59%; margin-top : 28%; }



.pressed         .sticky_pad_msg    { opacity        : 1.0 !important; }
                 .sticky_pad_msg    { position       : absolute; top: 1px; left:48px; }

                 .sticky_pad_msg    { min-height     :  max-content; }
                 .sticky_pad_msg    { min-width      :  2em;         }

                 .sticky_pad_msg    { margin-top     : 5px      !important; }
                 .sticky_pad_msg    { padding-bottom : 0.1em    !important; }

                 .sticky_pad_msg    { overflow-x     : auto; overflow-y :   auto; }
.ws_pre          .sticky_pad_msg    { overflow-x     : auto; overflow-y :   auto; }
.ws_pre_wrap     .sticky_pad_msg    { overflow-x     : auto; overflow-y :   auto; }
.ws_break_spaces .sticky_pad_msg    { overflow-x     : auto; overflow-y :   auto; }
.ws_pre_line     .sticky_pad_msg    { overflow-x     : auto; overflow-y :   auto; }
.ws_normal       .sticky_pad_msg    { overflow-x     : auto; overflow-y :   auto; }
.ws_nowrap       .sticky_pad_msg    { overflow-x     : auto; overflow-y : hidden; }

.scrolling       .sticky_pad_msg    { outline-style  : inset         ; }
.scrolling       .sticky_pad_msg    { outline-color  :  lightgray    ; }
.scrolling       .sticky_pad_msg    { outline-width  :            3px; }

                 .sticky_pad_msg    { font-family    : monospace; }
                 .sticky_pad_msg    { font-size      : 12px;      }
                 .sticky_pad_msg    { line-height    :  1em;      }
                 .sticky_pad_msg em { white-space    : nowrap;    }

                 .sticky_pad_msg,
.ws_pre_wrap     .sticky_pad_msg    { white-space    : pre-wrap    ; }
.ws_pre          .sticky_pad_msg    { white-space    : pre         ; }
.ws_break_spaces .sticky_pad_msg    { white-space    : break-spaces; }
.ws_pre_line     .sticky_pad_msg    { white-space    : pre-line    ; }
.ws_normal       .sticky_pad_msg    { white-space    : normal      ; }
.ws_nowrap       .sticky_pad_msg    { white-space    : nowrap      ; }




.sticky_ring.point_EE .sticky_fix  {    top :    20%; right :   -70%; }
.sticky_ring.point_NE .sticky_fix  {    top :    20%; right :   -70%; }
.sticky_ring.point_NW .sticky_fix  {    top :    20%; left  :   -70%; }
.sticky_ring.point_SE .sticky_fix  {    top :    20%; right :   -70%; }
.sticky_ring.point_SW .sticky_fix  {    top :    20%; left  :   -70%; }
.sticky_ring.point_WW .sticky_fix  {    top :    20%; left  :   -70%; }



.sticky.point_00                   { opacity    : 0.5;         }
.sticky.point_00                   { transform  : scale(0.01); }





     .point_NW .sticky_fix           { bottom : -0.8em; left  :   0em; }
     .point_NW .sticky_pen           { bottom : -0.8em; left  :   0em; }
     .point_NW .sticky_refont        { top    : -1.8em; right : 0.5em; }

     .point_WW .sticky_fix           { top    : -0.8em; left  :   0em; }
     .point_WW .sticky_pen           { top    : -0.8em; left  :   0em; }
     .point_WW .sticky_refont        { bottom : -1.8em; right : 0.5em; }

     .point_SW .sticky_fix           { top    : -0.8em; left  :   0em; }
     .point_SW .sticky_pen           { top    : -0.8em; left  :   0em; }
     .point_SW .sticky_refont        { bottom : -1.8em; right : 0.5em; }


     .point_NE .sticky_fix           { bottom : -0.8em; right : 0.5em; }
     .point_NE .sticky_pen           { bottom : -0.8em; right : 0.5em; }
     .point_NE .sticky_refont        { top    : -1.8em;  left : 0.5em; }

     .point_EE .sticky_fix           { top    : -0.8em; right : 0.5em; }
     .point_EE .sticky_pen           { top    : -0.8em; right : 0.5em; }
     .point_EE .sticky_refont        { bottom : -1.8em;  left : 0.5em; }

     .point_SE .sticky_fix           { top    : -0.8em; right : 0.5em; }
     .point_SE .sticky_pen           { top    : -0.8em; right : 0.5em; }
     .point_SE .sticky_refont        { bottom : -1.2em;  left : 0.5em; }



             .sticky_rotate  { position         : relative; }
             .sticky_rotate  { pointer-events   : auto;     }

             .sticky_rotate  { display :  block; }

             .sticky_rotate  { background       : transparent; }



.sticky_ring .sticky_rotate  { display :  none; }


             .sticky_rotate  { line-height      :  1em; }

             .sticky_rotate  { width            :  6em; }
             .sticky_rotate  { height           : 100%; }

             .sticky_rotate,
.point_EE    .sticky_rotate,
.point_NE    .sticky_rotate,
.point_SE    .sticky_rotate  { top : 0%;  right : -100%; }
.point_WW    .sticky_rotate,
.point_NW    .sticky_rotate,
.point_SW    .sticky_rotate  { top : 0%;  left  :  -7em; }

             .sticky_rotate,
.point_EE    .sticky_rotate,
.point_NE    .sticky_rotate,
.point_SE    .sticky_rotate  { border-radius    : 0 50% 50% 0; }
.point_WW    .sticky_rotate,
.point_NW    .sticky_rotate,
.point_SW    .sticky_rotate  { border-radius    : 50% 0 0 50%; }



             .sticky_rotate_dir { position      : relative; }
             .sticky_rotate_dir { transform     : translate( 0%,-70%) rotate(90deg); }

             .sticky_rotate_dir { display       :     none; }
.fixed       .sticky_rotate_dir { display       :    block; }
.pressed     .sticky_rotate_dir { display       :    block; }

             .sticky_rotate_dir { border-radius : 50%;             }
             .sticky_rotate_dir { color         : rgba(0,0,0,0.50); }

             .sticky_rotate_dir { font-size     : 32px; }
             .sticky_rotate_dir { text-align    : center; }
             .sticky_rotate_dir { white-space   : nowrap; }
             .sticky_rotate_dir { line-height   :   1em; }

             .sticky_rotate_dir { height        : 32px; }
             .sticky_rotate_dir { width         : 32px; }

             .sticky_rotate_dir { top           : 50%; }
             .sticky_rotate_dir,
.point_EE    .sticky_rotate_dir,
.point_NE    .sticky_rotate_dir,
.point_SE    .sticky_rotate_dir  { right        : -50%; }
.point_WW    .sticky_rotate_dir,
.point_NW    .sticky_rotate_dir,
.point_SW    .sticky_rotate_dir  { left         :  10%; }



                            .sticky_reflow          { position      : absolute; }
                            .sticky_reflow::after   { position      : absolute; }
                            .sticky_reflow::after   { white-space   : nowrap;   }
                            .sticky_reflow          { border-radius : 50%;      }
                            .sticky_reflow          { font-size     : 24px;     }

                            .sticky_reflow::after,
.ws_pre_wrap                .sticky_reflow::after   { content     :'1/6 .. pre-wrap'    ; }
.ws_pre                     .sticky_reflow::after   { content     :'2/6 .. pre'         ; }
.ws_break_spaces            .sticky_reflow::after   { content     :'3/6 .. break-spaces'; }
.ws_pre_line                .sticky_reflow::after   { content     :'4/6 .. pre-line'    ; }
.ws_normal                  .sticky_reflow::after   { content     :'5/6 .. normal'      ; }
.ws_nowrap                  .sticky_reflow::after   { content     :'6/6 .. nowrap'      ; }

                            .sticky_reflow::after,
.point_EE                   .sticky_reflow::after,
.point_NE                   .sticky_reflow::after,
.point_SE                   .sticky_reflow::after  { transform : translate(   0%,0%); margin-right :  0em; }
.point_WW                   .sticky_reflow::after,
.point_NW                   .sticky_reflow::after,
.point_SW                   .sticky_reflow::after  { transform : translate(-100%,0%); margin-left  : -1em; }



                            .sticky_reflow          { display       :  none;    }
.pressed                    .sticky_reflow          { display       :  none;    }
.fixed                      .sticky_reflow          { display       : block;    }
.sticky_ring                .sticky_reflow          { display       :  none;    }

                            .sticky_reflow          { height        : 1em;             }
                            .sticky_reflow          { width         : 1em;             }

.sticky_ring                .sticky_reflow          { height        : 66px !important; }
.sticky_ring                .sticky_reflow          { width         : 66px !important; }



                            .sticky_reflow          { transform        : translate( 0.2em, 0.4em); }
.point_EE                   .sticky_reflow          { transform        : translate(-0.2em,-0.2em); }
.point_NE                   .sticky_reflow          { transform        : translate(-0.2em, 0.4em); }
.point_NW                   .sticky_reflow          { transform        : translate( 0.2em, 0.4em); }
.point_SE                   .sticky_reflow          { transform        : translate(-0.2em, 0.4em); }
.point_SW                   .sticky_reflow          { transform        : translate( 0.2em,-0.2em); }
.point_WW                   .sticky_reflow          { transform        : translate( 0.2em,-0.2em); }



.point_NW                   .sticky_reflow          { top    : -0.8em; right :  0.5em; }
.point_WW                   .sticky_reflow          { bottom : -0.8em; right :  0.5em; }
.point_SW                   .sticky_reflow          { bottom : -0.8em; right :  0.5em; }

.point_NE                   .sticky_reflow          { top    : -0.8em;  left :  0.5em; }
.point_EE                   .sticky_reflow          { bottom : -0.8em;  left :  0.5em; }
.point_SE                   .sticky_reflow          { bottom : -0.2em;  left :  0.5em; }




.point_WW                   .sticky_reflow,
.point_NW                   .sticky_reflow,
.point_SW                   .sticky_reflow,
.point_WW.ws_pre            .sticky_reflow,
.point_NW.ws_pre            .sticky_reflow,
.point_SW.ws_pre            .sticky_reflow          { right : 1em; }

.point_WW.ws_pre_wrap       .sticky_reflow,
.point_NW.ws_pre_wrap       .sticky_reflow,
.point_SW.ws_pre_wrap       .sticky_reflow          { right : 2em;  }

.point_WW.ws_break_spaces   .sticky_reflow,
.point_NW.ws_break_spaces   .sticky_reflow,
.point_SW.ws_break_spaces   .sticky_reflow          { right : 3em;  }

.point_WW.ws_pre_line       .sticky_reflow,
.point_NW.ws_pre_line       .sticky_reflow,
.point_SW.ws_pre_line       .sticky_reflow          { right : 4em;  }

.point_WW.ws_normal         .sticky_reflow,
.point_NW.ws_normal         .sticky_reflow,
.point_SW.ws_normal         .sticky_reflow          { right : 5em;  }

.point_WW.ws_nowrap         .sticky_reflow,
.point_NW.ws_nowrap         .sticky_reflow,
.point_SW.ws_nowrap         .sticky_reflow          { right : 6em;  }




.point_EE                   .sticky_reflow,
.point_NE                   .sticky_reflow,
.point_SE                   .sticky_reflow,
.point_EE.ws_pre            .sticky_reflow,
.point_NE.ws_pre            .sticky_reflow,
.point_SE.ws_pre            .sticky_reflow          { left : 1.5em; }

.point_EE.ws_pre_wrap       .sticky_reflow,
.point_NE.ws_pre_wrap       .sticky_reflow,
.point_SE.ws_pre_wrap       .sticky_reflow          { left : 2.0em;  }

.point_EE.ws_break_spaces   .sticky_reflow,
.point_NE.ws_break_spaces   .sticky_reflow,
.point_SE.ws_break_spaces   .sticky_reflow          { left : 2.5em;  }

.point_EE.ws_pre_line       .sticky_reflow,
.point_NE.ws_pre_line       .sticky_reflow,
.point_SE.ws_pre_line       .sticky_reflow          { left : 3.0em;  }

.point_EE.ws_normal         .sticky_reflow,
.point_NE.ws_normal         .sticky_reflow,
.point_SE.ws_normal         .sticky_reflow          { left : 3.5em;  }

.point_EE.ws_nowrap         .sticky_reflow,
.point_NE.ws_nowrap         .sticky_reflow,
.point_SE.ws_nowrap         .sticky_reflow          { left : 4.0em;  }







             .sticky               *::after         { transition : background-color 150ms ease-out;            }
             .sticky.pressed                        { transition : transform        150ms ease-in;             }
             .sticky.resize_cap    *                { transition : transform        500ms          !important; }
             .sticky.resizing      *                { transition : width              0ms;                     }
             .sticky.show_seekzone *                { transition : none !important;                   }
                    .sticky_ring                    { transition : all              400ms cubic-bezier(.21,.38,.94,.36); }

.slow_layout .sticky                                { transition : all              300ms ease-in;    }




              .sticky_paste { display     :   none; }
.sticky_ring  .sticky_paste { display     :   none; }
.paste_target .sticky_paste { display     :  block; }

.paste_target .sticky_paste { position    : absolute; top:-0.5em; left:0; }
.paste_target .sticky_paste { width       :     100%; }


              .sticky_paste { text-align  : center; }
              .sticky_paste { font-size   :   72px; }
              .sticky_paste { line-height :    1em; }




             .sticky_resize { position         : absolute; }

             .sticky_resize { display          :  none; }
.fixed       .sticky_resize { display          : block; }
.sticky_ring .sticky_resize { display          :  none; }

             .sticky_resize { border-radius    : 50%;   }


             .sticky_resize { font-size        : 32px;  }

             .sticky_resize { width            : 1.5em; }
             .sticky_resize { height           : 1.5em; }

.sticky_ring .sticky_resize { height           : 66px !important; }
.sticky_ring .sticky_resize { width            : 66px !important; }

             .sticky_resize { border-radius    : 50% !important; }



             .sticky_resize_dir { position      : relative; }

             .sticky_resize_dir { display       :     none; }
.fixed       .sticky_resize_dir { display       :    block; }
.pressed     .sticky_resize_dir { display       :    block; }

             .sticky_resize_dir { color         : rgba(0,0,0,0.2); }


             .sticky_resize_dir { font-size     : 32px; }
             .sticky_resize_dir { text-align    : center; }
             .sticky_resize_dir { white-space   : nowrap; }

             .sticky_resize_dir { height        : 32px; }
             .sticky_resize_dir { width         : 32px; }

             .sticky_resize_dir { top           : 50%; }



           .sticky_resize.point_NE                    { top       : -1em; right : -1.0em; background-color : rgba(136,000,000,0.3); }
           .sticky_resize.point_SE                    { bottom    : -1em; right : -1.0em; background-color : rgba(000,136,000,0.3); }
           .sticky_resize.point_NW                    { top       : -1em; left  : -1.3em; background-color : rgba(000,000,136,0.3); }
           .sticky_resize.point_SW                    { bottom    : -1em; left  : -1.3em; background-color : rgba(102,000,102,0.3); }

.point_NE  .sticky_resize.point_SW                    { bottom    : -2em; left  : -2.3em; background-color : rgba(102,000,102,0.3); transition : all 100ms 200ms ease-in; }
.point_SE  .sticky_resize.point_NW                    { top       : -2em; left  : -2.3em; background-color : rgba(102,000,102,0.3); transition : all 100ms 200ms ease-in; }
.point_NW  .sticky_resize.point_SE                    { bottom    : -2em; right : -2.3em; background-color : rgba(102,000,102,0.3); transition : all 100ms 200ms ease-in; }
.point_SW  .sticky_resize.point_NE                    { top       : -2em; right : -2.3em; background-color : rgba(102,000,102,0.3); transition : all 100ms 200ms ease-in; }


           .sticky_resize          .sticky_resize_dir { transition : all 500ms; }

           .sticky_resize.point_NE .sticky_resize_dir { transform : translate( 0%,-80%) rotate(-45deg); }
           .sticky_resize.point_SE .sticky_resize_dir { transform : translate(50%,-70%) rotate(+45deg); }
           .sticky_resize.point_NW .sticky_resize_dir { transform : translate(50%,-70%) rotate(+45deg); }
           .sticky_resize.point_SW .sticky_resize_dir { transform : translate( 0%,-80%) rotate(-45deg); }

.ws_nowrap .sticky_resize.point_NE .sticky_resize_dir { transform : translate( 0%,-80%) rotate(0); }
.ws_nowrap .sticky_resize.point_SE .sticky_resize_dir { transform : translate(50%,-70%) rotate(0); }
.ws_nowrap .sticky_resize.point_NW .sticky_resize_dir { transform : translate(50%,-70%) rotate(0); }
.ws_nowrap .sticky_resize.point_SW .sticky_resize_dir { transform : translate( 0%,-80%) rotate(0); }




.sticky.resizing                { opacity    : 1.0;                           }
.sticky.dimmed.scrolling        { opacity    : 0.5              !important;   }


.sticky.dimmed                  { opacity    : 0.2              !important;   }
.sticky.dimmed                  { transition : opacity 500ms;                 }
.sticky.dimmed_off              { opacity    : 1.0              !important;   }
.sticky.dimmed_off              { transition : opacity 250ms;                 }





.sticky_pad_num            { text-shadow : none;             }
.sticky_fix                { text-shadow : #FFF 1px 1px 1px; }
.sticky_pen                { text-shadow : #FFF 1px 1px 1px; }
.sticky_reflow             { text-shadow : #FFF 1px 1px 1px; }
.sticky_refont             { text-shadow : #FFF 1px 1px 1px; }
.sticky_resize             { text-shadow : #FFF 1px 1px 1px; }


              .sticky_pad    { transition : box-shadow 200ms ease-out;       }
              .sticky_pad    { transition : width      200ms ease-out;       }
              .sticky_pad *  { transition : visibility 200ms 200ms ease-out; }
.dimmed       .sticky_pad *  { visibility : hidden               !important; }
.dimmed       .sticky_pad    { box-shadow : none;                            }
.sticky.dimmed_off           { opacity    : 1.0                  !important; }



                        .sticky_hand         { display          :    block; }
                        .sticky_hand         { pointer-events   :     auto; }
                        .sticky_hand         { position         : absolute; top:30px; left:2px; }
                        .sticky_hand         { transform-origin : 100% 50%; }
                        .sticky_hand         { width            :     74px; }
                        .sticky_hand         { height           :      1px; }
                        .sticky_hand         { border-radius    : 50% 0 0 50%;     }
                        .sticky_hand         { border           : 3px solid transparent; }
                        .sticky_hand         { background       : linear-gradient(to bottom       , rgba(0,0,0,.6) 0%, rgba(0,0,0,.4) 50%, rgba(0,0,0,.5) 80%, rgba(0,0,0,.5) 95%, #111 100%); }
                        .sticky_hand         { background       : linear-gradient(to right, rgba(000,000,255,1.00) 0%, rgba(000,000,000,1.00) 30%, rgba(128,128,255,0.5) 30%, rgba(000,000,000,1.00) 100%); }
                        .sticky_hand         { padding          : 0.2em 0 0.2em 0; }

                        .sticky_hand::after  {    top :    50%; left  :    50%; }
                        .sticky_hand::after  {  width  : 72px; height : 72px; }
                        .sticky_hand::after  { border-radius : 50%;             }
                        .sticky_hand::after  { content : "";      }
                        .sticky_hand::after  { display : block; }
                        .sticky_hand::after  { line-height : 1em; }
                        .sticky_hand::after  { pointer-events : auto; }
                        .sticky_hand::after  { position: absolute; }
                        .sticky_hand::after  { transform        : translate(  0 , -50%); }

.anchor_not_found       .sticky_hand         { animation                 : 1000ms   swinging; }
.anchor_not_found       .sticky_hand         { animation-direction       :         alternate; }
.anchor_not_found       .sticky_hand         { animation-iteration-count :          infinite; }



.anchor_detached        .sticky_hand         { animation                 :  900ms retracting; }
.anchor_detached        .sticky_hand         { animation-direction       :            normal; }
.anchor_detached        .sticky_hand         { animation-iteration-count :                 1; }
.anchor_detached        .sticky_hand         { animation-fill-mode       :          forwards; }

.anchor_unset           .sticky_hand         { animation                 :  500ms   swinging; }
.anchor_unset           .sticky_hand         { animation-direction       :            normal; }
.anchor_unset           .sticky_hand         { animation-iteration-count :          infinite; }

.bordering              .sticky_hand         { background       : red                !important; }

.dark                   .sticky_hand         { background       : linear-gradient(to right, rgba(136,136,136,1.00) 0%, rgba(136,136,136,1.00) 30%, rgba(136,136,136,0.3) 30%, rgba(136,136,136,1.00) 100%); }

.fixed                  .sticky_hand         { border        : 1px solid red;         }
.fixed                  .sticky_hand::after  { display : block; }

.point_EE               .sticky_hand         { width : 74px; }
.point_NE               .sticky_hand         { width : 62px; }
.point_NW               .sticky_hand         { width : 62px; }
.point_SE               .sticky_hand         { width : 62px; }
.point_SW               .sticky_hand         { width : 62px; }
.point_WW               .sticky_hand         { width : 74px; }



.pressed                .sticky_hand::after  { display : block; }

.sticky_ring            .sticky_hand         { display : block; }
.sticky_ring            .sticky_hand         { height :  6px; }
.sticky_ring            .sticky_hand         { position: absolute; }
.sticky_ring            .sticky_hand         { text-align : center; }

.sticky_ring.collapsing .sticky_hand         { display :  none; }

.sticky_ring            .sticky_hand         { border-radius : 50%;             }

                        .sticky_hand::before { color   : red    !important; }
.anchor_not_found       .sticky_hand::before { color   : blue   !important; }
.anchor_unset           .sticky_hand::before { color   : orange !important; }



.fixed.touched          .sticky_hand::before { font-size   : 32px !important; }
.anchor_detached        .sticky_hand::before { font-size   : 64px !important; }










                    .sticky_reflow::after   {            color : rgba(  0,   0,   0,0.2); }
                    .sticky_reflow::after   { background-color : rgba(255,   0,   0,0.5); }

                    .sticky_reflow,
.ws_pre             .sticky_reflow          {            color : rgba(150,  75,   0,1  ); }
.ws_pre_wrap        .sticky_reflow          {            color : rgba(255,   0,   0,1  ); }
.ws_break_spaces    .sticky_reflow          {            color : rgba(255, 165,   0,1  ); }
.ws_pre_line        .sticky_reflow          {            color : rgba(255, 255,   0,1  ); }
.ws_normal          .sticky_reflow          {            color : rgba(154, 205,  50,1  ); }
.ws_nowrap          .sticky_reflow          {            color : rgba(100, 149, 237,1  ); }

                    .sticky_fix             {            color : rgba(  0,  0,  0,0.90); }
                    .sticky_hand_mov        {            color : rgba(  0,  0,  0,0.50); }
                    .sticky_msg_edit        {            color : #EEE        !important; }
                    .sticky_msg_edit *      {            color : #EEE        !important; }
                    .sticky_pen             {            color : rgba(  0,  0,  0,0.90); }
                    .sticky_refont          {            color : rgba(  0,  0,128,0.90); }





       .sticky_pad_dat                                      { background-color : #EEE;            }

       .sticky_fix                                          { background-color : rgba(128,128,128,0.50);            }
       .sticky_msg_edit                                     { background       : rgba( 64, 64, 64,1.00) !important; }
       .sticky_pen                                          { background-color : rgba(128,128,128,0.50);            }
       .sticky_refont                                       { background-color : rgba(128,128,128,0.50);            }

.fixed .sticky_rotate                                       { background-color : rgba(  0,  0,  0,0.07);            }
.fixed .sticky_fix         , .pressed .sticky_fix           { background-color : rgba(255,  0,  0,0.50);            }
.fixed .sticky_hand::after , .pressed .sticky_hand::after   { background-color : rgba(255,  0,  0,0.50);            }
.fixed .sticky_pen         , .pressed .sticky_pen           { background-color : rgba(255,  0,  0,0.50);            }
.fixed .sticky_reflow      , .pressed .sticky_reflow        { background-color : rgba(255,  0,  0,0.50);            }
.fixed .sticky_refont      , .pressed .sticky_refont        { background-color : rgba(255,  0,  0,0.50);            }
.fixed .sticky_resize      , .pressed .sticky_resize        { background-color : rgba(255,  0,  0,0.50);            }
.fixed .sticky_rotate      , .pressed .sticky_rotate        { background-color : rgba(255,  0,  0,0.50);            }

.resize_cap                           .sticky_pad           { background-color : transparent !important; }

                                      .sticky.pressed       { opacity          : 1.0         !important; }
.pressed                              .sticky_pad_msg       { background-color : white       !important; }
        .has_focus                    .sticky_pad_msg       { background-color : black       !important; }

.resize_cap                           .sticky_reflow        { border : 1px solid #FF0 !important; }
.resize_cap                           .sticky_refont        { border : 1px solid #FF0 !important; }
.resize_cap                           .sticky_resize        { border : 1px solid #FF0 !important; }

.resize_cap                           .sticky_reflow        { transform        : scale(1.5) !important; }
.resize_cap                           .sticky_refont        { transform        : scale(1.5) !important; }
.resize_cap                           .sticky_resize        { transform        : scale(1.5) !important; }

.resize_cap                           .sticky_fix           { opacity: 0.1            !important; }
.resize_cap                           .sticky_hand::after   { opacity: 0.1            !important; }
.resize_cap                           .sticky_pad_msg       { opacity: 0.1            !important; }
.resize_cap                           .sticky_pad_num       { opacity: 0.1            !important; }
.resize_cap                           .sticky_pen           { opacity: 0.1            !important; }
.resize_cap                           .sticky_reflow::after { opacity: 0.1            !important; }
.resize_cap                           .sticky_rotate        { opacity: 0.1            !important; }








/*INLINE}}}*/
/*# sourceURL=dom_tools.css */
`
)
 .replace(/\\(\\x+)/g,"\\\\$1")
;
/*}}}*/
  /**    5 DATA     JS dom_data_js_data {{{*/
/*
../script/dom_data.js
*/
let dom_data_js_data ="data:text/javascript;charset='utf-8',"+ `
`
 .replace(/\\/g,"\\\\")

 .replace(/%u/g,"\\u")
;

/*}}}*/

  /**   6 LOG      JS dom_log_js_data .. ESCAPE=[linear-gradient(to bottom, #555)] {{{*/
/*
../script/dom_log.js
*/
let dom_log_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;

/*}}}*/
  /**    7 POPUP    JS dom_popup_js_data .. ESCAPE=[color:#AAA] {{{*/
/*
../script/dom_popup.js
*/
let dom_popup_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;

/*}}}*/
  /**   8 UTIL     JS dom_util_js_data .. ESCAPE case "#document"] {{{*/
/*
../script/dom_util.js
*/
let dom_util_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;

/*}}}*/
  /**    9 I18N     JS dom_i18n_js_data {{{*/
/*
../script/dom_i18n.js
*/
let dom_i18n_js_data ="data:text/javascript;charset='utf-8',"+ `
`

;
/*}}}*/
/**   10 PROP     JS dom_prop_js_data {{{*/
/*
../script/dom_prop.js
*/
let dom_prop_js_data ="data:text/javascript;charset='utf-8',"+ `
`
 .replace(/\\/g,"\\\\")

 .replace(/%u/g,"\\u")
;
/*}}}*/

/**   11 STORE    JS dom_store_js_data {{{*/
/*
../script/dom_store.js
*/
let dom_store_js_data ="data:text/javascript;charset='utf-8',"+ `
`
 .replace(/\\/g,"\\\\")

 .replace(/%u/g,"\\u")
;

/*}}}*/
/**  12 FLY      JS dom_fly_js_data .. ESCAPE [sample += "--- !! @@ ## $$ %% ~~ ^^ ** (( ))"] {{{*/
/*
../script/dom_fly.js
*/
let dom_fly_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;
/*}}}*/
  /**   13 WORDING  JS dom_wording_js_data .. ESCAPE=[color : #FFF] {{{*/
/*
../script/dom_wording.js
*/
let dom_wording_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;

/*}}}*/
  /**  14 SELECT   JS dom_select_js_data .. ESCAPE=[t_data.LF +"Slot #"] {{{*/
/*
../script/dom_select.js
*/
let dom_select_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;

/*}}}*/
  /**   15 SLOT     JS dom_slot_js_data .. ESCAPE=[log("%c...found slot #"+slot)] {{{*/
/*
../script/dom_slot.js
*/
let dom_slot_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;

/*}}}*/

  /**  16 HIDE     JS dom_hide_js_data .. ESCAPE=[log(caller+": %c #"+num)] {{{*/
/*
../script/dom_hide.js
*/
let dom_hide_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;

/*}}}*/
/**   17 VIEW     JS dom_view_js_data {{{*/
/*
../script/dom_view.js
*/
let dom_view_js_data ="data:text/javascript;charset='utf-8',"+ `
`

 .replace(/%u/g,"\\u")
;
/*}}}*/
/**  18 STICKY   JS dom_sticky_js_data .. ESCAPE=[anchor_nodes_in_viewport : "#"+anchor_nodes_in_viewport] {{{*/
/*
../script/dom_sticky.js
*/
let dom_sticky_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
`
)
 .replace(/%u/g,"\\u")
;
/*}}}*/
/**  19 SEEK     JS dom_seek_js_data .. ESCAPE=[onWork_EL slot #"+slot] {{{*/
/*
../script/dom_seek.js
*/
let dom_seek_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
`
)
 .replace(/%u/g,"\\u")
;
/*}}}*/
/**  20 SHARE    JS dom_share_js_data {{{*/
/*
../script/dom_share.js
*/
let dom_share_js_data ="data:text/javascript;charset='utf-8',"+ `
`
 .replace(/\\/g,"\\\\")

 .replace(/%u/g,"\\u")
;
/*}}}*/

/**   21 DETAILS  JS dom_details_js_data .. ESCAPE case "#document"] {{{*/
/*
../script/dom_details.js
*/
let dom_details_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;

/*}}}*/
/**   22 WOT      JS dom_wot_js_data .. ESCAPE case "#document"] {{{*/
/*
../script/dom_wot.js
*/
let dom_wot_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;

/*}}}*/
  /**  23 SENTENCE JS dom_sentence_js_data .. ESCAPE=[t_data.LF +"Slot #"] {{{*/
/*
../script/dom_sentence.js
*/
let dom_sentence_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;

/*}}}*/
  /**  24 GRID     JS dom_grid_js_data .. ESCAPE=[color:#AAA] {{{*/
/*
../script/dom_grid.js
*/
let dom_grid_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;

/*}}}*/
/**   25 GUTTER   JS dom_gutter_js_data {{{*/
/*
../script/dom_gutter.js
*/
let dom_gutter_js_data ="data:text/javascript;charset='utf-8',"+ `
`

 .replace(/%u/g,"\\u")
;
/*}}}*/

/**   26 IPC      JS dom_ipc_js_data {{{*/
/*
../script/dom_ipc.js
*/
let dom_ipc_js_data ="data:text/javascript;charset='utf-8',"+ `
`
 .replace(/\\/g,"\\\\")

 .replace(/%u/g,"\\u")
;
/*}}}*/
/** 27 TOOLS    JS dom_tools_js_data .. ESCAPE=[document.querySelector("#"+id)] {{{*/
/*
../script/dom_tools.js
*/
let dom_tools_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;
/*}}}*/

/** LOADER */
/* DATA STRING LITERALS {{{*/
/*{{{*/
/* @see script/dom_log.js */
/* eslint-disable no-unused-vars */

const lbA  = "background-color:inherit;   color:inherit;";

const lbF  = "font-size:120%; font-weight:500; border:2px solid white;";
const lbb  = "font-size:150%; font-weight:900; margin:0 0 0 0;";
const lbB  = "font-size:300%; font-weight:900; margin:0 0 0 0;";
const lbS  = "font-size:800%; font-weight:900; margin:0 0 0 0;";

const lbH  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0 1ex 1ex   0; padding:0 .5em 0 .5em; border-radius:1em 1em 1em 1em; background:linear-gradient(to bottom, #000 0%, #223 50%, #000 100%);";
const lbL  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0   0   0 1ex; padding:0 .5em 0 .5em; border-radius:1em   0   0 1em; background:linear-gradient(to   left, #333 0%           ,#445 100%);";
const lbR  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0 1ex   0   0; padding:0 .5em 0 .5em; border-radius:  0 1em 1em   0; background:linear-gradient(to  right, #333 0%           ,#544 100%);";
const lbC  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0   0   0   0; padding:0 .5em 0 .5em; border-radius:  0   0   0   0;";

const lb1  = "background-color:#964B00; color:black;";
const lb2  = "background-color:#FF0000; color:black;";
const lb3  = "background-color:#FFA500; color:black;";
const lb4  = "background-color:#FFFF00; color:black;";
const lb5  = "background-color:#9ACD32; color:black;";
const lb6  = "background-color:#6495ED; color:black;";
const lb7  = "background-color:#EE82EE; color:black;";
const lb8  = "background-color:#A0A0A0; color:black;";
const lb9  = "background-color:#FFFFFF; color:black;";
const lb0  = "background-color:#000000; color:gray;";
const lbX = [ lb0 ,lb1 ,lb2 ,lb3 ,lb4 ,lb5 ,lb6 ,lb7 ,lb8 ,lb9 ];

const lf1  = "color:#964B00;";
const lf2  = "color:#FF0000;";
const lf3  = "color:#FFA500;";
const lf4  = "color:#FFFF00;";
const lf5  = "color:#9ACD32;";
const lf6  = "color:#6495ED;";
const lf7  = "color:#EE82EE;";
const lf8  = "color:#A0A0A0;";
const lf9  = "color:#FFFFFF;";
const lf0  = "color:#000000;";
const lfX = [ lf0 ,lf1 ,lf2 ,lf3 ,lf4 ,lf5 ,lf6 ,lf7 ,lf8 ,lf9 ];

/* eslint-enable  no-unused-vars */
/*}}}*/
/*➔ dom_load {{{*/
let dom_load = function(_dom_load_id=DOM_LOAD_ID) /* eslint-disable-line complexity */
{
/*{{{*/
let log_this = IPC_LOG;
if( log_this) console.groupCollapsed(_dom_load_id+": LOADING DATA");
if( log_this) console.log           (_dom_load_id+": document.contentType=["+document.contentType+"]");
/*}}}*/
    /* CHECK ALREADY LOADED CONTENT-SCRIPT {{{*/
    if(    typeof dom_log      != "undefined") {

        if(typeof dom_tools    != "undefined") console.log(_dom_load_id+   ": dom_tools is already loaded");
        return false;
    }
    /*}}}*/
/* Content-Security-Policy {{{
let bg_csp = document.querySelectorAll("[http-equiv='Content-Security-Policy']")[0];
if( bg_csp ) {
    console.log("%c"+bg_csp.content, "font-size:200%; background-color:navy");
    bg_csp.httpEquiv = "Content-Security-Policy";
    bg_csp.content   = "default-src 'self' 'unsafe-inline' http://* https://* file://* data://*";
}
}}}*/
    let dom_load_success = true; /* the optimist at work */
    try {
/* log {{{*/
if( log_this) console.log(_dom_load_id+": LOADING DATA .. try");
              window.addEventListener("error", load_onerror, false);
/*}}}*/
        /* LOAD HTML {{{*/
        if(    dom_load_success && !load_html  ( "dom_tools_html" , dom_tools_html_data ) ) dom_load_success = false;
        /*}}}*/
        /* LOAD CSS {{{*/
        if(    dom_load_success && document.contentType.includes("xml") ) {
            if(dom_load_success && !load_css_pi( DOM_HOST_CSS_ID  , dom_host_css_data   ) ) dom_load_success = false;
            if(dom_load_success && !load_css_pi( DOM_GRID_CSS_ID  , dom_grid_css_data   ) ) dom_load_success = false;
            if(dom_load_success && !load_css_pi( DOM_TOOLS_CSS_ID , dom_tools_css_data  ) ) dom_load_success = false;
        }
        else {
            if(dom_load_success && !load_css   ( DOM_HOST_CSS_ID  , dom_host_css_data   ) ) dom_load_success = false;
            if(dom_load_success && !load_css   ( DOM_GRID_CSS_ID  , dom_grid_css_data   ) ) dom_load_success = false;
            if(dom_load_success && !load_css   ( DOM_TOOLS_CSS_ID , dom_tools_css_data  ) ) dom_load_success = false;
        }
        /*}}}*/
        /* LOAD JS - data .. tools {{{*/
        let fail_or_use_planB   = (chrome && typeof chrome.runtime != "undefined"); /* eslint-disable-line no-undef */

        if(    dom_load_success && !load_js    ( "dom_data_js"    , dom_data_js_data    ) ) dom_load_success = fail_or_use_planB;

        if(    dom_load_success && !load_js    ( "dom_log_js"     , dom_log_js_data     ) ) dom_load_success = fail_or_use_planB;
        if(    dom_load_success && !load_js    ( "dom_popup_js"   , dom_popup_js_data   ) ) dom_load_success = fail_or_use_planB;
        if(    dom_load_success && !load_js    ( "dom_util_js"    , dom_util_js_data    ) ) dom_load_success = fail_or_use_planB;
        if(    dom_load_success && !load_js    ( "dom_i18n_js"    , dom_i18n_js_data    ) ) dom_load_success = fail_or_use_planB;
        if(    dom_load_success && !load_js    ( "dom_prop_js"    , dom_prop_js_data    ) ) dom_load_success = fail_or_use_planB;

        if(    dom_load_success && !load_js    ( "dom_store_js"   , dom_store_js_data   ) ) dom_load_success = fail_or_use_planB;
        if(    dom_load_success && !load_js    ( "dom_fly_js"     , dom_fly_js_data     ) ) dom_load_success = fail_or_use_planB;
        if(    dom_load_success && !load_js    ( "dom_wording_js" , dom_wording_js_data ) ) dom_load_success = fail_or_use_planB;
        if(    dom_load_success && !load_js    ( "dom_select_js"  , dom_select_js_data  ) ) dom_load_success = fail_or_use_planB;
        if(    dom_load_success && !load_js    ( "dom_slot_js"    , dom_slot_js_data    ) ) dom_load_success = fail_or_use_planB;

        if(    dom_load_success && !load_js    ( "dom_hide_js"    , dom_hide_js_data    ) ) dom_load_success = fail_or_use_planB;
        if(    dom_load_success && !load_js    ( "dom_view_js"    , dom_view_js_data    ) ) dom_load_success = fail_or_use_planB;
        if(    dom_load_success && !load_js    ( "dom_sticky_js"  , dom_sticky_js_data  ) ) dom_load_success = fail_or_use_planB;
        if(    dom_load_success && !load_js    ( "dom_seek_js"    , dom_seek_js_data    ) ) dom_load_success = fail_or_use_planB;
        if(    dom_load_success && !load_js    ( "dom_share_js"   , dom_share_js_data   ) ) dom_load_success = fail_or_use_planB;

        /*......................*/  load_js    ( "dom_details_js" , dom_details_js_data ) ;  /* POSSIBLY PRELOADED */
        /*......................*/  load_js    ( "dom_wot_js"     , dom_wot_js_data     ) ;  /* POSSIBLY PRELOADED */
        if(    dom_load_success && !load_js    ( "dom_sentence_js", dom_sentence_js_data) ) dom_load_success = fail_or_use_planB;
        if(    dom_load_success && !load_js    ( "dom_grid_js"    , dom_grid_js_data    ) ) dom_load_success = fail_or_use_planB;
        if(    dom_load_success && !load_js    ( "dom_gutter_js"  , dom_gutter_js_data  ) ) dom_load_success = fail_or_use_planB;

        if(    dom_load_success && !load_js    ( "dom_ipc_js"     , dom_ipc_js_data     ) ) dom_load_success = fail_or_use_planB;
        if(    dom_load_success && !load_js    ( "dom_tools_js"   , dom_tools_js_data   ) ) dom_load_success = fail_or_use_planB;
        /*}}}*/
/*{{{
        throw new Error("ERROR_TEST");
}}}*/
    }
    catch(error) {
/*{{{*/
if( log_this) console.groupEnd();
        console.error("javascript."+DOM_LOAD_TAG+": LOADING DATA:\n", error);
        dom_load_success = false;
/*}}}*/
    }
    finally {
/*{{{*/
if( log_this) console.log(_dom_load_id+": LOADING DATA .. finally");
              window.removeEventListener("error", load_onerror, false);
/*}}}*/
    }
/*{{{*/
if( log_this) console.log(_dom_load_id+": LOADING DATA .. [dom_load_success = "+dom_load_success+"]");
if( log_this && dom_load_success) console.groupEnd();
/*}}}*/
    return dom_load_success;
};
/*}}}*/
/*… load_onerror {{{*/
let load_onerror_count = 0;
let load_onerror = function(e)
{
    console.log("%c "+DOM_LOAD_TAG      +" %c * load_onerror #"+(++load_onerror_count)
                ,"background-color:#111",  "background-color:#500"                    );
    console.dir( e  );

    if( e.error          ) try { console.log("e.error..."+ e.error  ); } catch(ex) { console.log(ex); }
    if( e.message        ) try { console.log("e.message."+ e.message); } catch(ex) { console.log(ex); }
    if( e.name           ) try { console.log("e.name...."+ e.name   ); } catch(ex) { console.log(ex); }
    if( e.type != "error") try { console.log("e.type...."+ e.type   ); } catch(ex) { console.log(ex); }
    if( e.target         ) try { console.log(              e.target ); } catch(ex) { console.log(ex); }
};
/*}}}*/
/*… dom_check_scheme_arg {{{*/
/*{{{*/
const DOM_DATA_LENGTH_MIN = 100;
const TOOLS2_SANITY_CHECK_FAILED = "TOOLS SANITY CHECK FAILED";

/*}}}*/
let dom_check_scheme_arg = function(caller, scheme_id, scheme_arg)
{
let log_this = IPC_LOG;
    let is_file    =             scheme_arg.startsWith("file:");
    let is_content = !is_file || scheme_arg.startsWith("data:");

    /* unchecked content */
    if( !is_content ) {
if( log_this) console.log("__"+caller+": %c "+scheme_id+" = "+scheme_arg, lf5);
        return true;
    }

if( log_this) console.log("__"+caller+": %c "+scheme_id+" = "+scheme_arg.length+" bytes", lf5);

    if(scheme_arg.length > DOM_DATA_LENGTH_MIN) {
        return true;
    }
    else {
      if(chrome && typeof chrome.runtime == "undefined") { /* eslint-disable-line no-undef */
console.log("%c *** "+TOOLS2_SANITY_CHECK_FAILED+"%c on %c"+scheme_id+" ", lbb+lbL+lf2, lbL+lf8, lbR+lf3);

        /* share failure diagnostic */
        if(typeof send_IPC != "undefined")
        {
            let msg = DOM_LOAD_ID+": \""+scheme_id+"\" "+TOOLS2_SANITY_CHECK_FAILED;
            let ipc = { t_load:msg, caller:DOM_LOAD_TAG };
            send_IPC( ipc );
        }
      } else {
if( log_this) console.log("__"+caller+": %c "+scheme_id+" = "+scheme_arg.length+" bytes", lf8);
      }
        return false;
    }
};
/*}}}*/
/*… load_js {{{*/
let load_js = function(id, scheme_arg) {
    if( !dom_check_scheme_arg("load_js"     , id, scheme_arg) ) { if(chrome && typeof chrome.runtime != "undefined")          return  true; /* eslint-disable-line no-undef */
    /*..................................................*/ else { console.warn("%c"+id+" %c BAD SCHEME ARG",lbL+lf2, lbR+lf2); return false; }}
    if( document.getElementById(              id            ) ) { console.log ("%c"+id+" %c already loaded",lbL+lf3, lbR+lf3); return  true; }
    let el           = document.createElement("script");
    el.id            = id;

    el.src           = scheme_arg;
    el.type          = "text/javascript";
    el.charset       = "utf-8";
    el.async         = false;
    el.defer         = true;
    el.addEventListener("error", load_onerror);

try { document.getElementsByTagName("head")[0].appendChild(el); } catch(error) { console.log("load_js",error); }
    return true;
};
/*}}}*/
/*… load_css {{{*/
let load_css = function(id, scheme_arg) {
    if( !dom_check_scheme_arg("load_css"    , id, scheme_arg) ) { console.warn("%c"+id+" %c BAD SCHEME ARG",lbL+lf2, lbR+lf2); return false; }
    if( document.getElementById(              id            ) ) { console.log ("%c"+id+" %c already loaded",lbL+lf3, lbR+lf3); return  true; }
    let el           = document.createElement("link");
    el.id            = id;

    el.href          = scheme_arg;
    el.type          = "text/css";
    el.charset       = "utf-8";
    el.rel           = "stylesheet";
    el.addEventListener("error", load_onerror);

try { document.getElementsByTagName("head")[0].appendChild(el); } catch(error) { console.log("load_js",error); }

    return true;
};
/*}}}*/
/*… load_css_pi {{{*/
let load_css_pi = function(id, scheme_arg) {
    if( !dom_check_scheme_arg("load_css_pi" , id, scheme_arg) ) { console.warn("%c"+id+" %c BAD SCHEME ARG",lbL+lf2, lbR+lf2); return false; }
    if( document.getElementById(              id            ) ) { console.log ("%c"+id+" %c already loaded",lbL+lf3, lbR+lf3); return  true; }
    let el           = document.createProcessingInstruction("xml-stylesheet", "href='"+ scheme_arg +"' type='text/css'");
    el.id            = id;

    el.charset       = "utf-8";
    el.addEventListener("error", load_onerror);

    document.insertBefore(el, document.firstChild);

    return true;
};
/*}}}*/
/*… load_html {{{*/
let dom_load_success;
let load_html = function(id, html_arg) {
    if( !dom_check_scheme_arg("load_html"   , id,   html_arg) ) { console.warn("%c"+id+" %c BAD   HTML ARG",lbL+lf2, lbR+lf2); return false; }
    if( document.getElementById(              id            ) ) { console.log ("%c"+id+" %c already loaded",lbL+lf3, lbR+lf3); return  true; }
    let el           = document.createElement("DIV");
    el.id            = id;

    el.charset       = "utf-8";
    el.innerHTML     = unescape(html_arg);
    el.style.display = "none";
    el.addEventListener("error", load_onerror);

try { document.body.appendChild(el); } catch(error) { console.log("load_js",error); }

    return true;
};
/*}}}*/
/*… get_el_sheet_first_rule_text_content {{{*/
let get_el_sheet_first_rule_text_content = function(el) /* eslint-disable-line no-unused-vars */
{
    let tag = "";
    try {
        if( el) {
            let txt = el.sheet.cssRules[0].cssText;
            let x_1 = txt.indexOf    ('"'); /* eslint-disable-line quotes */
            let x_2 = txt.lastIndexOf('"'); /* eslint-disable-line quotes */
            txt     = txt.substring(x_1+1, x_2);
            tag     = txt.includes(el.id) ? "SHEET: "+txt : "";
        }
    }
    catch(ex) {
        console.log("%c get_el_sheet_first_rule_text_content("+el.id+"):"+ ex, lbH+lf2);
    }
    return tag;
};
/*}}}*/
/*}}}*/

/** IPC */
/*{{{*/
/*{{{*/
let IPC_LOG          = true;
let IPC_EXTENSION_ID = "background_js";
let IPC_SCRIPT_ID    = DOM_LOAD_ID;
let IPC_LOG_COLOR    = lf8;
let IPC_MSG_COLOR    = lbF+IPC_LOG_COLOR;
/*}}}*/
/*… t_handle_ipc_message {{{*/
let t_handle_ipc_message = function(ipc)
{
let log_this = IPC_LOG;
if( log_this) console.log("%c "+IPC_SCRIPT_ID+" %c t_handle_ipc_message(ipc=["+JSON.stringify(ipc)+"])", lbH+IPC_LOG_COLOR, lbH);

    /* 1/3 - ALREADY LOADED {{{*/
    if( dom_ipc.t_ipc_is_IPC_SCRIPT_loaded() )
    {
if( log_this) console.log("%c "+IPC_SCRIPT_ID+" %c SCRIPT ALREADY LOADED"                              , lbH+IPC_LOG_COLOR, lb5);

        return true;
    }
    /*}}}*/
    /* 2/3 - NOT STARTED BY IPC MESSAGE {{{*/
    if(           !ipc
        || (       ipc.start == "undefined")
        || (       ipc.start != true       )
    ) {
if( log_this) console.log("%c "+IPC_SCRIPT_ID+" %c NOT STARTED BY IPC MESSAGE "                        , lbH+IPC_LOG_COLOR, lb3);

        dom_ipc.t_wait_for_startup_message_from_extension( IPC_SCRIPT_ID );
        return false;
    }
    /*}}}*/
    /* 3/3 - HANDLE A START UP MESSAGE .. (stop listening and load script) {{{*/
if( log_this) console.log("%c "+IPC_SCRIPT_ID+" %c STARTED BY IPC MESSAGE "                            , lbH+IPC_LOG_COLOR, lb4);

    /* STOP LISTENING IPC MESSAGES */
    if(dom_ipc.t_ipc_listener_id)
    {
        dom_ipc.t_ipc_del_message_listener();
        dom_ipc.t_ipc_del_MutationObserver();
        dom_ipc.t_ipc_listener_id = null;

    }
    /* AND LOAD SCRIPT */
if( log_this) console.log("%c "+DOM_LOAD_ID+" calling "+DOM_LOAD_TAG, lbH+lf5);

    if( dom_load(DOM_LOAD_ID) )
    {
        if( dom_ipc.t_ipc_is_IPC_SCRIPT_loaded() )
            dom_ipc.t_wait_for_startup_message_from_extension( IPC_SCRIPT_ID );

    }
    /*}}}*/
    return false;
};

/*}}}*/
/*}}}*/

/* STAND-ALONE OR EXTENSION */
/*{{{*/
/*… IPC_check_extension_signature {{{*/
let IPC_check_extension_signature = function()
{
/*{{{*/
let log_this = IPC_LOG;
if( log_this) console.log("%c "+IPC_SCRIPT_ID+" %c CHECKING EXTENSION SIGNATURE", lbH+IPC_LOG_COLOR, lbH+lf3);

/*}}}*/
    let chrome_runtime_is_defined = (chrome && typeof chrome.runtime != "undefined"); /* eslint-disable-line no-undef */
    let extension_ipc_start_cmd   = "";
    /* BODY-ATTR [IPC_EXTENSION_ID] .. (a body attribute set by a browser extension) {{{*/
    if(typeof document.body.attributes[IPC_EXTENSION_ID] != "undefined")
    {
        let         lxx = "font-size:800%; color:#6495ED;";
        let SYMBOL_GEAR = "\u2699";
if( log_this) console.log("%c"+SYMBOL_GEAR+" %c"+IPC_SCRIPT_ID+" %c EXTENSION SIGNATURE DETECTED", lxx, IPC_LOG_COLOR, lbF);

        extension_ipc_start_cmd = document.body.attributes[IPC_EXTENSION_ID].textContent;

if( log_this) console.log("%c["+IPC_EXTENSION_ID+"]%c = %c"+extension_ipc_start_cmd, IPC_MSG_COLOR, lbA, lbF+lb0);
    }
    /*}}}*/
    /* NO EXTENSION SIGNATURE .. (stand-alone instant load) {{{*/
    if(!chrome_runtime_is_defined && !extension_ipc_start_cmd) {
                                                  if( log_this) console.log("%c "+IPC_SCRIPT_ID+" %c NO EXTENSION DETECTED: STAND-ALONE INSTANT LOAD ", lbH+IPC_LOG_COLOR, lbH+lf1);
        if     (typeof   t_load != "undefined") { if( log_this) console.log("%c "+DOM_LOAD_ID  +" %c calling t_load"                                  , lbH+IPC_LOG_COLOR, lbH+lf6);   t_load(DOM_LOAD_ID); }
        else if(typeof dom_load != "undefined") { if( log_this) console.log("%c "+DOM_LOAD_ID  +" %c calling "+DOM_LOAD_TAG                           , lbH+IPC_LOG_COLOR, lbH+lf7); dom_load(DOM_LOAD_ID); }
        else                                                    console.log("%c "+DOM_LOAD_ID  +" %c t_load and dom_load are both undefined"          , lbH+IPC_LOG_COLOR, lbH+lb2);
    }
    /*}}}*/
    /* FOUND EXTENSION SIGNATURE .. (wait for a startup-message) {{{*/
    else {
        /* INJECT EXTENSION CSS, HTML AND SCRIPT .. ADD CONTENT-SCRIPT BODY ATTRIBUTE */
        if(dom_load_success == undefined)
        {
            dom_load_success = dom_load(DOM_LOAD_ID);

            let sequence_number   = parseInt(new Date().getTime() / 1000) % 86400; // seconds per day

            document.body.setAttribute(DOM_LOAD_ID, JSON.stringify( { DOM_LOAD_TAG , sequence_number } ));
        }
        /* HANDLE background executeScript results */
        if( extension_ipc_start_cmd && (typeof dom_ipc != "undefined"))
        {
            let ipc = dom_ipc.t_ipc_PARSE( extension_ipc_start_cmd );
            t_handle_ipc_message(ipc);
        }
    }
    /*}}}*/
};
/*}}}*/

if(IPC_LOG) console.log("%c "+DOM_LOAD_ID+" LOADING DONE "                                         , lbB+lbH+IPC_LOG_COLOR);
/*{{{
let calling_IPC_check_extension_signature
    =  (typeof   t_load == "undefined")
    && (typeof dom_load == "undefined");
console.log("%c "+DOM_LOAD_ID+" %c          t_load: "+((typeof   t_load        == "undefined") ? "DEFINED" : "UNDEFINED"), lbH+IPC_LOG_COLOR, lbH+lf5);
console.log("%c "+DOM_LOAD_ID+" %c        dom_load: "+((typeof dom_load        == "undefined") ? "DEFINED" : "UNDEFINED"), lbH+IPC_LOG_COLOR, lbH+lf6);
console.log("%c "+DOM_LOAD_ID+" %c DOM_TOOLS_JS_ID: "+((typeof DOM_TOOLS_JS_ID == "undefined") ? "DEFINED" : "UNDEFINED"), lbH+IPC_LOG_COLOR, lbH+lf7);
console.log("%c "+DOM_LOAD_ID+" %c calling_IPC_check_extension_signature=["+calling_IPC_check_extension_signature+"]"    , lbH+IPC_LOG_COLOR, lbH+lf3);
if( calling_IPC_check_extension_signature )
    console.log("calling IPC_check_extension_signature:");

}}}*/
/*{{{
//(IPC_LOG) console.log("%c "+DOM_LOAD_ID+" %c ...setTimeout(IPC_check_extension_signature, 10) ",     lbH+IPC_LOG_COLOR, lbH+lb0);
//setTimeout(IPC_check_extension_signature, 10);
//           IPC_check_extension_signature();
}}}*/

/*}}}*/
    return { init : IPC_check_extension_signature };
})();
dom_load_js.init();
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

:e             $RPROFILES/script/dom_select.js
:e             $RPROFILES/script/dom_util.js
:e             $RPROFILES/script/dom_log.js

:e             $RPROFILES/script/splitter.js
"...           $RPROFILES/script/dom_load.js
"│                                                                             │
"└─────────────────────────────────────────────────────────────────────────────┘
}}}*/
