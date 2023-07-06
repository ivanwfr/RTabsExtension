javascript: (function () { /* eslint-disable-line no-labels, no-unused-labels */
"use strict";
/* jshint esversion: 9, boss:true {{{*/
/* globals console, alert, window, document, setTimeout */
/* globals dom_sentence, dom_sentence_event */

/* eslint-disable no-unused-labels */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/*}}}*/
/* DOM_LOAD_ID {{{*/
let DOM_LOAD_ID         = "dom_splitter";
let DOM_LOAD_TAG        =  DOM_LOAD_ID +" (230706:22h:01)";
let DOM_HOST_CSS_ID     = "dom_host_css";
let DOM_TOOLS_HTML_ID   = "dom_tools_html";
/*}}}*/
/* TOOLS ALREADY LOADED {{{*/
if((typeof DOM_TOOLS_JS_ID) != "undefined") {
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

  /**   1 HOST    CSS dom_host_css_data .. ESCAPE=[OR HOST CSS WONT WORK]  {{{*/ /*
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
  /**   2 LOG      JS dom_log_js_data .. ESCAPE=[linear-gradient(to bottom, #555)] {{{*/
/*
../script/stub/dom_log.js
*/
let dom_log_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
/*INLINE{{{*/









const DOM_LOG_JS_ID        = "dom_log_js";
const DOM_LOG_JS_TAG       = DOM_LOG_JS_ID  +" (230320:15h:09)";

let dom_log = (function() {
"use strict";



const LF        = String.fromCharCode(10);



const lf1  = "color:#964B00;";
const lf2  = "color:#FF0000;";
const lf3  = "color:#FFA500;";
const lf4  = "color:#FFFF00;";
const lf5  = "color:#9ACD32;";
const lf6  = "color:#6495ED;";
const lf7  = "color:#EE82EE;";
const lf8  = "color:#A0A0A0;";
const lf9  = "color:#FFF; text-shadow:#000 1px 1px 1px; background:#666;";
const lf0  = "color:#000; text-shadow:#FFF 1px 1px 1px; background:#666;";
const lfX  = [ lf0 ,lf1 ,lf2 ,lf3 ,lf4 ,lf5 ,lf6 ,lf7 ,lf8 ,lf9 ];


const lbH  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0 1ex 1ex   0; padding:0 .5em 0 .5em; border-radius:1em 1em 1em 1em; background:linear-gradient(to bottom, #555 0%, #223 80%, #454 100%);";
const lbL  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0   0   0 1ex; padding:0 .5em 0 .5em; border-radius:1em   0   0 1em; background:linear-gradient(to   left, #333 0%           ,#445 100%);";
const lbR  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0 1ex   0   0; padding:0 .5em 0 .5em; border-radius:  0 1em 1em   0; background:linear-gradient(to  right, #333 0%           ,#544 100%);";
const lbC  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0   0   0   0; padding:0 .5em 0 .5em; border-radius:  0   0   0   0;";

const lbF  = "font-size:120%; font-weight:500; border:2px solid white;";
let   L_ARD  =         "↓ ";
let   L_ARL  = "        ← ";
let   L_ARR  =         "→ ";
let   L_ARU  =         "↑ ";






let dir               = console.dir;
let log               = console.log;
let console_clear     = function(msg=null) { console.clear(); if(msg) console.log ("%c.. by "+msg,"color:#666; background:#111; border:0px solid #445; border-radius:1em;"); };

let logX = (msg,l_x) => console.log("%c"+msg, lbR+lfX[l_x]);

let log0 = (msg)     =>         logX(    msg, 0  );
let log1 = (msg)     =>         logX(    msg, 1  );
let log2 = (msg)     =>         logX(    msg, 2  );
let log3 = (msg)     =>         logX(    msg, 3  );
let log4 = (msg)     =>         logX(    msg, 4  );
let log5 = (msg)     =>         logX(    msg, 5  );
let log6 = (msg)     =>         logX(    msg, 6  );
let log7 = (msg)     =>         logX(    msg, 7  );
let log8 = (msg)     =>         logX(    msg, 8  );
let log9 = (msg)     =>         logX(    msg, 9  );




let log_caller = function(level_max)
{
    let stack_trace = get_callers( level_max );

    if( stack_trace.includes(LF) ) console.log("%c"+stack_trace.replace(LF,"%c"+LF), lbH+lf6, lf8);
    else                         { console.log("%c"+stack_trace                    , lf6+lbF     ); console.trace(); }
};
let get_callers = function(level_max)
{
    let xx, ex_stack;
    try {   xx.raise(); } catch(ex) { ex_stack = parse_ex_stack_FUNC_FILE_LINE_COL(ex.stack, level_max); }
    return  ex_stack.trim();
};





let parse_ex_stack_FUNC_FILE_LINE_COL = function(text, level_max=10)
{
    let  result = "";
    let   lines = text.split(LF);
    let     sym = L_ARL;
    let line_match;
    for(let i=2; i<=(2+level_max); ++i)
    {
        if( String(lines[i]).includes("at log_caller") ) continue;

        if( line_match = get_ex_stack_line_match(lines[i]) )
            result    += (result ? LF : "") + sym+" "+line_match;
        sym = L_ARU;
    }

    if( !result.includes(LF) ) result += LF + sym +" ... (async)";

    return result;
};



const regexp_FUNC_FILE_LINE_COL = new RegExp("\\s*at\\s*([^\\(]+)\\s+\\((?:[^\\/]*\\/)*(\..+?):(\\d+?):(\\d+?)");


let get_ex_stack_line_match = function(ex_stack_line)
{
    let matches = regexp_FUNC_FILE_LINE_COL.exec(ex_stack_line);

    if(!matches ) return "";

    let func = matches[1].replace("Object.","");
    let file = matches[2];
    let line = matches[3];
    let col  = matches[4];
    let match= mPadStart(func, 48)+".. "+file+" "+line+":"+col;


    return match;
};



let mPadStart = function(s,l,c=" ") { s = String(s); while(s.length < l) s = c+s; return s; };

let mPadEnd   = function(s,l,c=" ") { s = String(s); while(s.length < l) s = s+c; return s; };





return {  LF
        , console_clear
        , dir
        , log
        , log0
        , log1
        , log2
        , log3
        , log4
        , log5
        , log6
        , log7
        , log8
        , log9
        , lbH
        , lbL
        , lbR
        , lbC
        , lfX

    , get_callers
    , log_caller
    };



}());


/*INLINE}}}*/
//@ sourceURL=dom_log.js
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;

/*}}}*/
  /**   3 UTIL     JS dom_sentence_util_js_data .. ESCAPE=[linear-gradient(to bottom, #555)] {{{*/
/*
../script/stub/dom_sentence_util.js
*/
let dom_sentence_util_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
/*INLINE{{{*/









const DOM_SENTENCE_UTIL_JS_ID        = "dom_sentence_util";
const DOM_SENTENCE_UTIL_JS_TAG       = DOM_SENTENCE_UTIL_JS_ID  +" (230124:17h:09)";

let dom_sentence_util    = (function() {
"use strict";





const lf1  = "color:#964B00;";
const lf2  = "color:#FF0000;";
const lf3  = "color:#FFA500;";
const lf4  = "color:#FFFF00;";
const lf5  = "color:#9ACD32;";
const lf6  = "color:#6495ED;";
const lf7  = "color:#EE82EE;";
const lf8  = "color:#A0A0A0;";
const lf9  = "color:#FFFFFF;";
const lf0  = "color:#707070; text-shadow:#000 2px 2px 1px;";
const lfX  = [ lf0 ,lf1 ,lf2 ,lf3 ,lf4 ,lf5 ,lf6 ,lf7 ,lf8 ,lf9 ];

const lbH  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0 1ex 1ex   0; padding:0 .5em 0 .5em; border-radius:1em 1em 1em 1em; background:linear-gradient(to bottom, #555 0%, #223 80%, #454 100%);";
const lbL  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0   0   0 1ex; padding:0 .5em 0 .5em; border-radius:1em   0   0 1em; background:linear-gradient(to   left, #333 0%           ,#445 100%);";
const lbR  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0 1ex   0   0; padding:0 .5em 0 .5em; border-radius:  0 1em 1em   0; background:linear-gradient(to  right, #333 0%           ,#544 100%);";
const lbC  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0   0   0   0; padding:0 .5em 0 .5em; border-radius:  0   0   0   0;";

let dir               = console.dir;
let log               = console.log;
let logX = (msg,l_x) => console.log("%c"+msg, lbR+lfX[l_x]);
let log0 = (msg)     =>         logX(    msg, 0  );
let log1 = (msg)     =>         logX(    msg, 1  );
let log2 = (msg)     =>         logX(    msg, 2  );
let log3 = (msg)     =>         logX(    msg, 3  );
let log4 = (msg)     =>         logX(    msg, 4  );
let log5 = (msg)     =>         logX(    msg, 5  );
let log6 = (msg)     =>         logX(    msg, 6  );
let log7 = (msg)     =>         logX(    msg, 7  );
let log8 = (msg)     =>         logX(    msg, 8  );
let log9 = (msg)     =>         logX(    msg, 9  );

let logs = { dir
        ,    log
        ,    log0
        ,    log1
        ,    log2
        ,    log3
        ,    log4
        ,    log5
        ,    log6
        ,    log7
        ,    log8
        ,    log9
    };






const regexp_HTML_ENTITIES = new RegExp("[\\u00A0-\\u9999<>\\&']", "gim");

let t_get_htmlEntities = function(str)
{

    return str.replace(regexp_HTML_ENTITIES, function(c) { return "&#"+c.charCodeAt(0)+";"; });
};



let cb_textArea = null;


let t_copy_to_CLIPBOARD = function(copy_content)
{

    if(!cb_textArea) {
        cb_textArea     = document.createElement("TEXTAREA");
        cb_textArea.id  = "cb_textArea";
        cb_textArea.style.position        = "fixed";
        cb_textArea.style.top             = "1em";
        cb_textArea.style.left            = "1em";
        cb_textArea.style.width           =  "95%";
        cb_textArea.style.height          = "25em";
        cb_textArea.style.backgroundColor = "salmon";

        document.body.appendChild(cb_textArea);

    }


    cb_textArea.style.display = "block";
    cb_textArea.value         = copy_content;



    cb_textArea.select();

    if( !document.execCommand("copy") )
    {

    }


    cb_textArea.style.display = "none";
    cb_textArea.value         = "";


};



let add_el_class     = function(el, className) { if(!el || !el.classList) return      ; if(   !el.classList.contains( className )) el.classList.add   ( className ); };
let del_el_class     = function(el, className) { if(!el || !el.classList) return      ; if(    el.classList.contains( className )) el.classList.remove( className ); };
let set_el_class     = function(el, className) { if(!el || !el.classList) return      ;                                            el.className       = className  ; };
let has_el_class     = function(el, className) { if(!el || !el.classList) return false; return el.classList.contains( className );                                   };

let clear_el_classList = function(el_or_id, classList) { cycle_el_classList(el_or_id, classList, true); };
let cycle_el_classList = function(el_or_id, classList, remove_only)
{
    let el = (typeof               el_or_id == "object")
        ?                          el_or_id
        :  document.getElementById(el_or_id)
    ;

    let next_picked;
    for(let i=0; i <              classList.length; ++i) {
        if(el.classList.contains( classList[i] ))
        {
            el.classList.remove ( classList[i] );
            next_picked    =      classList[i+1];
        }
    }
    if( remove_only ) return undefined;


    if(!next_picked) next_picked = classList[0];



    if( next_picked) el.classList.add( next_picked );


    return next_picked;
};

let cycle_id_classList = cycle_el_classList;


let flip_el_class = function(el_or_id, className)
{
    let el = (typeof               el_or_id == "object")
        ?                          el_or_id
        :  document.getElementById(el_or_id)
    ;
    if( has_el_class(el, className) ) del_el_class(el, className);
    else                              add_el_class(el, className);
};

let flip_id_class = flip_el_class;


let set_el_class_on_off = function(el, className, on_off)
{
    if(on_off) add_el_class(el, className);
    else       del_el_class(el, className);

};


let set_el_class_removing = function(el_or_id, class_to_add, classes_to_remove)
{
    if(       typeof      classes_to_remove != "object") classes_to_remove = [ classes_to_remove ];

    let el = (typeof               el_or_id == "object")
        ?                          el_or_id
        :  document.getElementById(el_or_id)
    ;
    if(!el) return false;

    let removed = "";
    for(let i=0; i <               classes_to_remove.length; ++i)
    {
        if( el.classList.contains( classes_to_remove[i] )) {
            el.classList.remove  ( classes_to_remove[i]  );
            removed =              classes_to_remove[i]   ;
        }
    }


    if( class_to_add )
    {
        if(!el.classList.contains( class_to_add ))
            el.classList.add     ( class_to_add );
    }

    return removed;
};


const MARKED_TO_HIDE        = "marked_to_hide";
let is_marked_to_hide = function( node )
{
    return has_el_class(node, MARKED_TO_HIDE);

};




const regexp_CR              = new RegExp("\\r", "g");
const regexp_LF              = new RegExp("\\n", "g");
const SYMBOL_DOWN_LEFT_ARROW = "\u21B5";
let show_CR_LF = function(text)
{
    return text
        .   replace(regexp_CR,  "")
        .   replace(regexp_LF, SYMBOL_DOWN_LEFT_ARROW)
        .   trim()
    ;
};


const HORIZONTAL_ELLLIPSIS = "\u2026";
const ELLIPSIS_DEFAULT_LEN = 96;
const ELLIPSIS_SHORT_LEN   = 48;

let ellipsis_16 = function(msg)
{
    return mPadEnd( ellipsis(msg, 16) , 16);
};

let ellipsis_short = function(msg)
{
    return ellipsis(msg, ELLIPSIS_SHORT_LEN);
};

let ellipsis = function(_msg, len=ELLIPSIS_DEFAULT_LEN)
{
    let msg = show_CR_LF( String(_msg) );
    return (msg.length    <= len)
        ?   msg
        :   msg.substring(0, len-3)+HORIZONTAL_ELLLIPSIS
    ;
};


let mPadStart = function(s,l,c=" ") { s = String(s); while(s.length < l) s = c+s; return s; };

let mPadEnd   = function(s,l,c=" ") { s = String(s); while(s.length < l) s = s+c; return s; };



let get_el_parent_fragment = function(el)
{
    while( el ) {
        if(el.shadowRoot                             ) return el;
        if(el.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return el;
        el              = el.parentNode;
    }
    return null;
};


let get_el_parent_with_tag = function(el,tag)
{
    if( el.nodeName == "#text")
        el     = el.parentElement;

    while(el && (el.tagName != tag))
        el     = el.parentElement;

    if(    !el                        ) return null;
    return (         tag == el.tagName) ? el : null;
};



let get_el_parent_with_class = function(el, className)
{
    while(   el ) {
        if(  el.classList.contains( className )) return el;
        el = el.parentElement;
    }
    return null;
};


let get_el_child_with_class = function(parent,className,level=1)
{
    if(!parent) return null;

    for(let c=0; c < parent.children.length; ++c) {

        let child  = parent.children[c];
        if((child != null) && has_el_class(child, className)) {


            return child;
        }


        if(child.children.length)
        {
            if( child = get_el_child_with_class(child, className, level+1)) {


                return child;
            }
        }

    }

    return null;
};


let get_el_xy = function(el)
{
    if(!el) return null;
    let  x = 0;
    let  y = 0;

    let cs = window.getComputedStyle(el);

    if(   (cs.position == "fixed"   )
       || (cs.position == "absolute")
      ) {

        x   = el.offsetLeft;
        y   = el.offsetTop ;
    }
    else {

        while(el) {
            x  += el.offsetLeft;
            y  += el.offsetTop ;
            el  = el.offsetParent;
        }

    }

    return { x , y };
};


let get_id_or_tag = function(node)
{
    return !node           ? ("null_node"                        )
        :   node.id        ? ("#"+ node.id                       )
        :   node.className ? (node.tagName+"."+ node.classList[0])
        :                    (node.tagName                       )
    ;
};


let is_el_or_child_of_parent_el = function(el, parent_el)
{
    if(!parent_el) return false;

    while(el && (el != parent_el))
        el     = el.parentElement;

    return (el == parent_el);
};


let is_el_or_child_of_class = function(el, className)
{
    while(el && !el.classList.contains(className))
        el     = el.parentElement;
    return el;
};



let get_n_lbl = function(node)
{
    if(!node                 ) return "null_node";
    if( node == window       ) return "window";
    if( node == document.body) return "body";



    if(node.id    ) try { return       "#"+ node.id                                                   ; } catch(ex) {}
    if(node.title ) try { return "title=["+ node.title +"]"                                           ; } catch(ex) {}

    let                          n_lbl  = null;
    try                 {        n_lbl  = node.tagName +(node.className ? ("."+ node.className) : "") ; } catch(ex) {}
    if(   n_lbl )   try {        n_lbl += " .. TEXT=["+ truncate(node.textContent,  24)+"]"           ; } catch(ex) {}
    if(   n_lbl )         return n_lbl;

    try                 { return              "TEXT=["+ truncate(node.textContent,  24)+"]"           ; } catch(ex) {}
    try                 { return                                 node.tagName                         ; } catch(ex) {}
    try                 { return                                 node.nodeType                        ; } catch(ex) {}

    return "";
};


let truncate = function(_msg, length=80)
{
    let msg = strip_CR_LF( String(_msg) );
    return (msg.length <= length)
        ?   msg
        :   msg.substring(0, length-3)+"..."
    ;
};


let strip_CR_LF = function(text)
{
    return text
        .   replace(regexp_CR,  "")
        .   replace(regexp_LF, " ")
        .   trim()
    ;
};



let get_node_sibling_at_offset = function(node,offset)
{
    if(offset > 0)
    {
        for(let next_node  = node.nextElementSibling
            ;   next_node
            ;   next_node  = next_node.nextElementSibling
           ) {
            if( next_node.nodeName == node.nodeName) {
                if( offset ) offset -= 1;
                if(!offset ) return next_node;
            }
        }
    }
    else {
        for(let prev_node  = node.previousElementSibling
            ;   prev_node
            ;   prev_node  = prev_node.previousElementSibling
           ) {
            if( prev_node.nodeName == node.nodeName) {
                if( offset ) offset += 1;
                if(!offset ) return prev_node;
            }
        }
    }
    return null;
 };


const LF    = String.fromCharCode(10);
const PREFIX = "                               \u21B3";
let get_parent_tag_id_class_chain = function(el)
{
    let array = [];

    while( el )
    {
        let e_class = (el.id || el.className) ? "left"   : ""     ;
        let i_class = (         el.className) ? "center" : "right";
        let c_class =                                      "right";

        let el_className = ellipsis_short(el.className);

        let rank         = get_nodeName_rank(el);
        let el_tagName   = el.tagName+( (rank > 1) ? "["+rank+"]":"");

        array.push(   (               "<em class='tag   "+e_class+"'>" + el_tagName   +"</em>"     )
                   +  (el.id        ? "<em class='id    "+i_class+"'>#"+ el.id        +"</em>" : "")
                   +  (el_className ? "<em class='class "+c_class+"'>."+ el_className +"</em>" : "")
                  );
        el = el.parentElement;
    }

    let parent_id_class_chain = "";

    for(let l=0, i=array.length-1; i>=0; ++l, --i)
        parent_id_class_chain
            += ((l>0) ? (LF+" "+PREFIX.slice(-l))+" " : "")
            +            array[i];

    return parent_id_class_chain;
};


let get_nodeName_rank = function(node)
{
    if(node.nodeType == Node.ATTRIBUTE_NODE) return null;

    let rank = 1;
    for(let prev_node =      node.previousElementSibling
    ;       prev_node
    ;       prev_node = prev_node.previousElementSibling
    ) {
        if(prev_node.nodeName == node.nodeName)
            rank += 1;
    }
    return rank;
 };




let get_event_target = function(e)
{
    let e_target = e.currentTarget || e.target;

    let     e_path = e.composedPath();
    if     (e_path[0] && (e_path[0].tagName != "IMG")) e_target = e_path[0]               ;
    else if(e_path[1]                                ) e_target = e_path[1]               ;
    else if(e_path[0]                                ) e_target = e_path[0]               ;

    else if(e.originalTarget                         ) e_target = e.originalTarget        ;
    else if(e.explicitOriginalTarget                 ) e_target = e.explicitOriginalTarget;

    return e_target;
};


let t_get_event_target = function(e)
{
    let e_target = get_event_target(e);

    let el;
    e_target
        = ((el = e_target.firstElementChild) && (el.tagName == "INPUT")) ?                                         e_target.firstElementChild
        : ((el = e_target                  ) && (el.htmlFor           )) ? (document.getElementById(el.htmlFor) || e_target)
        : ((el = e_target.parentElement    ) && (el.htmlFor           )) ? (document.getElementById(el.htmlFor) || e_target)
        :                                           e_target
    ;


    return e_target;
};


let get_event_XY = function(e)
{
    let x, y;
    if(e.changedTouches) {
        x = parseInt(e.changedTouches[0].clientX);
        y = parseInt(e.changedTouches[0].clientY);
    }
    else {
        x = parseInt(                  e.clientX);
        y = parseInt(                  e.clientY);
    }

    return { x , y };
};




let get_el_methodNames = function(obj,_filter_str)
{
    let    propertyNames = new Set();
    let    current_obj   = obj;
    do {
        Object.getOwnPropertyNames( current_obj ).map((p_name) => propertyNames.add( p_name ) );
    }
    while((current_obj   = Object.getPrototypeOf( current_obj )));

    let    propKeys      = [ ...propertyNames.keys() ];

    let    methodNames   =  propKeys.filter((key) => typeof obj[key] === "function");

    if(_filter_str)
    {
        let filter_str   = _filter_str.toLowerCase();
        methodNames      = methodNames.filter((name) => name.toLowerCase().includes(filter_str));
    }

    return methodNames.sort();
};


let log_el_methodNames = function(_obj,_filter_str)
{
    console.dir( _obj );

    console.dir(get_el_methodNames(_obj, _filter_str));
};




return { name : DOM_SENTENCE_UTIL_JS_ID


    ,    t_get_event_target
    ,    get_event_XY

    , t_get_htmlEntities
    , t_copy_to_CLIPBOARD

    , set_el_class
    , add_el_class
    , del_el_class
    , has_el_class
    , clear_el_classList

    , show_CR_LF
    , ellipsis

    , get_el_parent_fragment
    , get_el_parent_with_tag
    , get_el_parent_with_class
    , get_el_child_with_class
    , get_el_xy
    , get_id_or_tag
    , is_el_or_child_of_class
    , is_el_or_child_of_parent_el

    , get_n_lbl
    , get_node_sibling_at_offset
    , get_parent_tag_id_class_chain


    , get_el_methodNames
    , log_el_methodNames

    , logs
};


 }());


/*INLINE}}}*/
//@ sourceURL=dom_sentence_util.js
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;

/*}}}*/
  /**   4 SCROLL   JS dom_scroll_js_data .. ESCAPE case "#document"] {{{*/
/*
../script/stub/dom_scroll.js
*/
let dom_scroll_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
/*INLINE{{{*/















const DOM_SCROLL_JS_ID         = "dom_scroll_js";
const DOM_SCROLL_JS_TAG        = DOM_SCROLL_JS_ID  +" (220317:18h:00)";

let dom_scroll              = (function() {
"use strict";
let   DOM_SCROLL_LOG        = false;
let   DOM_SCROLL_TAG        = false;







let t_util     ;
let t_tools    ;



let t_scroll_IMPORT  = function(_log_this,import_num)
{

    DOM_SCROLL_LOG = DOM_SCROLL_LOG || localStorage_getItem("DOM_SCROLL_LOG");
    DOM_SCROLL_TAG = DOM_SCROLL_TAG || localStorage_getItem("DOM_SCROLL_TAG");



    if     (typeof dom_util           != "undefined") t_util  = dom_util         ;
    else if(typeof dom_sentence_util  != "undefined") t_util  = dom_sentence_util;
    else console.warn("MISSING STUB FOR: [dom_util]");



    if     (typeof dom_tools          != "undefined") t_tools = dom_tools         ;
    else if(typeof dom_sentence_event != "undefined") t_tools = dom_sentence_event;
    else console.warn("MISSING STUB FOR: [dom_tools]");


    scroll_INTERN();
if(_log_this) log("➔ "+(import_num ? (import_num+" ") : "")+"t_scroll_IMPORT: t_util=["+t_util.name+"] , t_tools=["+t_tools.name+"]");
};




let LOG_MAP = false;

let lf1="", lf2="", lf3="", lf4="", lf5="", lf6="", lf7="", lf8="", lf9="", lf0="";
let lfX = [ lf1 ,lf2 ,lf3 ,lf4 ,lf5 ,lf6 ,lf7 ,lf8 ,lf9, lf0 ];

let lb1="", lb2="", lb3="", lb4="", lb5="", lb6="", lb7="", lb8="", lb9="", lb0="";
let lbX = [ lb1 ,lb2 ,lb3 ,lb4 ,lb5 ,lb6 ,lb7 ,lb8 ,lb9, lb0 ];

const lXX  = "border:1px solid gray; padding:0 .5em; border-radius:1em;";
let lbA=lXX, lbB=lXX, lbC=lXX, lbF=lXX, lbH=lXX, lbL=lXX, lbR=lXX, lbS=lXX, lbb=lXX;

let log                 = console.log;
let log_key_val_group   = console.log;
let log_caller          = console.trace;

let console_dir         = (k,v) => { console.log("..."+k+":"); console.dir(v); };


let   scroll_INTERN     = function()
{

    if((typeof dom_log != "undefined") && (dom_log.LOG_BG_CSS))
    {
        LOG_MAP = dom_log.LOG_MAP;

        ({ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX } = dom_log.LOG_BG_CSS);
        ({ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX } = dom_log.LOG_FG_CSS);
        ({ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb           } = dom_log.LOG_XX_CSS);

        log                 = dom_log.log;
        log_key_val_group   = dom_log.log_key_val_group;
        console_dir         = dom_log.console_dir;
        log_caller          = dom_log.log_caller;
    }


    else if((typeof dom_log != "undefined") && dom_log.lfX)
    {
        lbH = dom_log.lbH;
        lbL = dom_log.lbL;
        lbR = dom_log.lbR;
        lbC = dom_log.lbC;
        lfX = dom_log.lfX;
        [ lf0 ,lf1 ,lf2 ,lf3 ,lf4 ,lf5 ,lf6 ,lf7 ,lf8 ,lf9 ] = lfX;
    }

};



let localStorage_setItem = function(key,val) {          try { if(val)  localStorage.setItem   (key,val); else localStorage.removeItem(key); } catch(ex) {} };
let localStorage_getItem = function(key    ) { let val; try {    val = localStorage.getItem   (key    );                                    } catch(ex) {} return val; };
let localStorage_delItem = function(key    ) {          try {  localStorage.removeItem(key    );                                    } catch(ex) {} };





const CSS_SCROLL_SMOOTH      = "scroll_smooth";

const SCROLL_INTO_VIEW_DELAY = 500;
const SCROLL_RECENTER_DELAY  = 500;

let scrollIntoView_EL;

let scroll_intoview_timer;
let scroll_recenter_timer;

let w_W = 1280, w_H = 1024;








const MAX_SCROLL_SMOOTH_DURATION    = 20000;
const SCROLLED_ENOUGH               =    16;
const SCROLL_DONE_COOLDOWN          =   250;

let scroll_end_timeout              =  null;
let scroll_end_last_scrollY         =     0;
let scrollIntoViewIfNeeded_then_recenter_handler_scrollTo_clr_scrollBehavior_timeout;



let t_scroll_listener = function(e)
{

let   caller = "t_scroll_listener";
let log_this = DOM_SCROLL_LOG;

    if(!t_util) t_scroll_IMPORT(log_this);


    let scroll_details = "scrollY="+window.scrollY;

if( log_this) log("%c"+caller+" %c "+ scroll_details, lbb+lbL+lf8, lbb+lbR+lf3);
    scroll_listener_scroll_changed(e, scroll_details);
};


let   scroll_listener_scroll_changed = function(e, scroll_details="")
{

let   caller = "scroll_listener_scroll_changed";
let log_this = DOM_SCROLL_LOG;

if( log_this && !scroll_end_timeout)
    log("➔ %c"+caller+"%c"+ window.scrollX +" "+ window.scrollY +"%c"+ (scroll_details ? " scroll_details" : "")
        ,  lbb+lbL+lf9,lbb+lbC+lf9                               ,lbb+lbR+lf9                                   );


    if( scroll_end_timeout ) clearTimeout( scroll_end_timeout );
scroll_end_timeout =   setTimeout(scroll_listener_scroll_changed_scroll_end_handler, SCROLL_DONE_COOLDOWN);


};


let t_scroll_is_scrolling = function()
{

let   caller = "t_scroll_is_scrolling";
let log_this = DOM_SCROLL_LOG;


    let result = (scroll_end_timeout != null);
if( log_this) log("➔ %c"+caller+" %c "+ result
                  ,  lbb+lbL+lf0 ,lbb+lbR+lf0         );
    return result;
};


let   scroll_listener_scroll_changed_scroll_end_handler     = function()
{

let   caller = "scroll_listener_scroll_changed_scroll_end_handler";
let log_this = DOM_SCROLL_LOG;
let tag_this = DOM_SCROLL_TAG || log_this;



    scroll_end_timeout = null;

    let                   this_scrollY  =          window.scrollY;
    let done_scrolling = (this_scrollY == scroll_end_last_scrollY);



    if(!done_scrolling )
    {
        scroll_end_last_scrollY = this_scrollY;
        scroll_end_timeout      = setTimeout(scroll_listener_scroll_changed_scroll_end_handler, SCROLL_DONE_COOLDOWN);
    }

    else {
        let scroll_details = "scrollY="+window.scrollY+" "+(scrollIntoView_EL ? t_util.get_id_or_tag(scrollIntoView_EL) : "");
if( tag_this) log("➔ %c"+caller+" %c "+ scroll_details
                  ,  lbb+lbL+lf0 ,lbb+lbR+lf0         );

        if( scrollIntoView_EL )
            on_scroll_end_scrollIntoViewIfNeeded();
    }
};




let t_scrollIntoViewIfNeeded_set_EL = function(el)
{

let   caller = "t_scrollIntoViewIfNeeded_set_EL";
let log_this = DOM_SCROLL_LOG;
let tag_this = DOM_SCROLL_TAG || log_this;

    if(!t_util) t_scroll_IMPORT(log_this);


    if(        scrollIntoView_EL
       &&      scrollIntoView_EL.scrolledIntoView_handled_MS)
        delete scrollIntoView_EL.scrolledIntoView_handled_MS;

    scrollIntoView_EL = el;

if( tag_this) log("%c "+caller+" %c "+t_util.get_id_or_tag(scrollIntoView_EL)
                  ,lbL+lf4      ,lbR+lf4                                       );
if( log_this) log_caller();

    if( scrollIntoView_EL ) on_scrollIntoView_EL();
};


let   on_scroll_end_scrollIntoViewIfNeeded = function(delay)
{
if( !scrollIntoView_EL ) return;

let   caller = "on_scroll_end_scrollIntoViewIfNeeded";
let log_this = DOM_SCROLL_LOG;

if( log_this) log("%c "+caller+" %c "+t_util.get_id_or_tag(scrollIntoView_EL)+     "%c scrollIntoView_EL.scrolledIntoView_handled_MS "+scrollIntoView_EL.scrolledIntoView_handled_MS+"%c delay "+delay
                  ,lbL+lf4      ,lbR+lf4                                      ,lbH+lfX[scrollIntoView_EL.scrolledIntoView_handled_MS ? 5 : 6]                                        ,lbH+lf9         );



    if(scroll_intoview_timer) clearTimeout( scroll_intoview_timer );
    scroll_intoview_timer = null;

    if( scrollIntoView_EL ) on_scrollIntoView_EL();
};


let   on_scrollIntoView_EL = function()
{

    if(!scrollIntoView_EL ) return;

    scrollIntoView_EL.scrollIntoView({ behavior : "smooth"
                                     , block    : "nearest"
                                     , inline   : "nearest"
    });
    scrollIntoView_EL = null;






};



let scrollIntoView_was_needed;


let   scrollIntoViewIfNeeded_handler = function()
{

let   caller = "scrollIntoViewIfNeeded_handler";
let log_this = DOM_SCROLL_LOG;

    scroll_intoview_timer = null;

    if(!scrollIntoView_EL) return;

    let el = scrollIntoView_EL;
if( log_this) log("%c "+caller+" %c "+t_util.get_id_or_tag(el)+"%c el.scrolledIntoView_handled_MS "+el.scrolledIntoView_handled_MS
                  ,lbL+lf4      ,lbR+lf4                       ,lbH+lfX[el.scrolledIntoView_handled_MS ? 5 : 6]                  );

    t_scrollIntoViewIfNeeded_set_EL( null );


    if( el.scrolledIntoView_handled_MS )
    {
        let      this_MS = new Date().getTime();
        let since_handled = this_MS - el.scrolledIntoView_handled_MS;
        let  just_handled = (since_handled < SCROLL_RECENTER_DELAY*3);

if( log_this) log("%c  just_handled=["+just_handled+"]", lbH+lfX[just_handled ? 8:7]);

        if( just_handled ) return;
    }


    let xy = scrollIntoViewIfNeeded_get_scrollXY( el );
    if(!xy) {

        return;
    }


    if((window.scrollX == xy.x) && (window.scrollY == xy.y))
    {


        scrollIntoView_was_needed = false;
if( log_this) log("%c scrollIntoView_was_needed=["+scrollIntoView_was_needed+"]", lbH+lf8);
    }


    else {
        scrollIntoView_was_needed = true;
if( log_this) log("%c scrollIntoView_was_needed=["+scrollIntoView_was_needed+"]", lbH+lf8);

if( log_this) log("SCROLL INTO VIEW %c DX=["+window.scrollX+" "+xy.x+"] %c DY=["+window.scrollY+" "+xy.y+"]"
                  ,                 lbL+lf9                            ,lbR+lf9                             );
        scrollIntoViewIfNeeded_then_recenter_handler_scrollTo(xy.x, xy.y);
    }



    if(scrollIntoView_was_needed)
    {
if( log_this) log("RECENTERING");

        if(scroll_recenter_timer) clearTimeout( scroll_recenter_timer );
        scroll_recenter_timer = setTimeout(scrollIntoViewIfNeeded_then_recenter_handler, SCROLL_RECENTER_DELAY);
    }
};


let   scrollIntoViewIfNeeded_get_scrollXY = function(el)
{
    return scrollIntoViewIfNeeded_get_scrollXY_with_options({ container:el , with_margin:false });
};


let   scrollIntoViewIfNeeded_get_scrollXY_with_options = function({ container })
{

let caller = "scrollIntoViewIfNeeded_get_scrollXY_with_options";
let log_this = DOM_SCROLL_LOG;



    w_W = window.innerWidth ;
    w_H = window.innerHeight;
    let view_rect
        = {   left   : window.scrollX       + 16
            , top    : window.scrollY       + 16
            , right  : window.scrollX + w_W - 32
            , bottom : window.scrollY + w_H - 32
        };

    view_rect.height
        = view_rect.bottom
        - view_rect.top
    ;


    let xy = t_util.get_el_xy(container, caller);

    if(!xy) return null;

    let e_W = container.clientWidth  || container.offsetWidth;
    let e_H = container.clientHeight || container.offsetHeight;

    let container_rect
        = { left   : xy.x
        ,   top    : xy.y
        ,   right  : xy.x + e_W
        ,   bottom : xy.y + e_H
    };

    container_rect.height
        = container_rect.bottom
        - container_rect.top
    ;


    container_rect.seekTop
        =  container_rect.top
    ;
    let over_top       = (container_rect.seekTop < view_rect.top   );
    let over_left      = (container_rect.left    < view_rect.left  );
    let over_bottom    = (container_rect.bottom  > view_rect.bottom);
    let over_right     = (container_rect.right   > view_rect.right );

    let over_something = ((over_top ? "T":"")+(over_left ? "L":"")+(over_right ? "R":"")+(over_bottom ? "B":""));

    let may_go_left    = (container_rect.right  < window.innerWidth);
if(log_this) {
    log_key_val_group("to_the_top .. over_something=["+over_something+"]"
                      , {   container
                          , container_rect
                          , e_H
                          , view_rect
                          , window_scrollY : window.scrollY
                          , over_something : ((over_top ? "T":"_")+(over_left ? "L":"_")+(over_right ? "R":"_")+(over_bottom ? "B":"_"))
                      }, lfX[over_something ? 7:8], false);
}



    if(!!!over_something) return null;



    let scrollX
        = (over_left  ) ? container_rect.left                         - 16
        : (over_right ) ? container_rect.right   - window.innerWidth  + 32
        : may_go_left   ?                          0
        :                                          window.scrollX;

    let scrollY
        = (over_top    ) ? container_rect.seekTop                     - 16
        : (over_bottom ) ? container_rect.bottom - window.innerHeight + 32
        :                                          window.scrollY;



    if(container.to_the_top && over_bottom)
    {
        let scroll_more
            = view_rect.height
            - container_rect.height;

if(log_this)
        log_key_val_group("to_the_top .. scroll_more=["+scroll_more+"]"
                          , {   container
                              , view_rect
                              , container_rect
                              , window_scrollY      : window.scrollY
                              , over_something      : ((over_top ? "T":"_")+(over_left ? "L":"_")+(over_right ? "R":"_")+(over_bottom ? "B":"_"))
                              , scrollY
                              , scroll_more
                              , scrollY_scroll_more : (scrollY + scroll_more)
                          }, lfX[over_something ? 7:8], false);


        scrollY += scroll_more;
    }

    return { x : scrollX , y : scrollY };
};


const CONTAINER_TOP_MARGIN = 64;
let   scrollIntoViewIfNeeded_then_recenter_handler = function()
{

let   caller = "scrollIntoViewIfNeeded_then_recenter_handler";
let log_this = DOM_SCROLL_LOG;

if( log_this) log("%c "+caller+" %c "+t_util.get_id_or_tag(scrollIntoView_EL), lbL+lf6,lbR+lf6);

    if( !scrollIntoView_EL) return;
    let el = scrollIntoView_EL;

    scroll_recenter_timer   = null;

    let recenter_dxy = t_util.get_el_xy(el, caller);
    if(!recenter_dxy ) return;

    let e_W = el.clientWidth  || el.offsetWidth;
    let e_H = el.clientHeight || el.offsetHeight;

    recenter_dxy.x    = recenter_dxy.x
        +     e_W/2
        -     w_W/2
    ;

    recenter_dxy.y    = recenter_dxy.y
        +     e_H/2
        -     w_H/2
        -     CONTAINER_TOP_MARGIN
    ;



    if((window.scrollX != recenter_dxy.x) || (window.scrollY != recenter_dxy.y))
    {
        scrollIntoView_was_needed = true;

        scrollIntoViewIfNeeded_then_recenter_handler_scrollTo(recenter_dxy.x, recenter_dxy.y);
    }


    else {
        scrollIntoView_was_needed = false;
if( log_this) log("%c SCROLL RECENTER NOT NEEDED %c "+window.scrollX+" "+window.scrollY, lbb+lbH+lf6, lbb+lbH+lf6);

    }

};


let   scrollIntoViewIfNeeded_then_recenter_handler_scrollTo = function(x, y)
{

let   caller = "scrollIntoViewIfNeeded_then_recenter_handler_scrollTo";
let log_this = DOM_SCROLL_LOG;

if( log_this) log("%c "+caller+"%c(x=["+x+"] , y=["+y+"])", lbL+lf6,lbR+lf6);


    scrollIntoViewIfNeeded_then_recenter_handler_scrollTo_set_scrollBehavior();


    window.scrollTo(x, y);


    if( scrollIntoView_EL ) {
        scrollIntoView_EL.scrolledIntoView_handled_MS = new Date().getTime();

if( log_this) log("%c scrollIntoView_EL.scrolledIntoView_handled_MS=["+scrollIntoView_EL.scrolledIntoView_handled_MS+"]", lbH+lf6);
    }


    if(scrollIntoViewIfNeeded_then_recenter_handler_scrollTo_clr_scrollBehavior_timeout) clearTimeout( scrollIntoViewIfNeeded_then_recenter_handler_scrollTo_clr_scrollBehavior_timeout );
    scrollIntoViewIfNeeded_then_recenter_handler_scrollTo_clr_scrollBehavior_timeout   =   setTimeout( scrollIntoViewIfNeeded_then_recenter_handler_scrollTo_clr_scrollBehavior, MAX_SCROLL_SMOOTH_DURATION);
};


let   scrollIntoViewIfNeeded_then_recenter_handler_scrollTo_set_scrollBehavior = function()
{
    let html  = document.getElementsByTagName("HTML")[0];

    html.classList.add( CSS_SCROLL_SMOOTH );
};


let   scrollIntoViewIfNeeded_then_recenter_handler_scrollTo_clr_scrollBehavior = function()
{

    scrollIntoViewIfNeeded_then_recenter_handler_scrollTo_clr_scrollBehavior_timeout = null;

    let html  = document.getElementsByTagName("HTML")[0];

    html.classList.remove( CSS_SCROLL_SMOOTH );
};





let t_store_set_state = function(label,state)
{
    if(    state != undefined)
    {
        if(state) localStorage_setItem(label, "true");
        else      localStorage_delItem(label        );
        return !!state;
    }
    else {
        return    localStorage_getItem   (label        );
    }
};

return { name : "dom_scroll"
    ,    logging : (state) => DOM_SCROLL_LOG = t_store_set_state("DOM_SCROLL_LOG",state)
    ,    tagging : (state) => DOM_SCROLL_TAG = t_store_set_state("DOM_SCROLL_TAG",state)
    ,    t_scroll_listener
    ,    t_scrollIntoViewIfNeeded_set_EL
    ,    t_scroll_is_scrolling
};
}());


/*INLINE}}}*/
//@ sourceURL=dom_scroll.js
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;

/*}}}*/
  /**   5 EVENT    JS dom_sentence_event_js_data .. ESCAPE case "#document"] {{{*/
/*
../script/stub/dom_sentence_event.js
*/
let dom_sentence_event_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
/*INLINE{{{*/














const DOM_SENTENCE_EVENT_JS_ID  = "dom_sentence_event";
const DOM_SENTENCE_EVENT_JS_TAG = DOM_SENTENCE_EVENT_JS_ID +" (230614:16h:50)";

let dom_sentence_event   = (function() {
"use strict";
let   DOM_SENTENCE_LOG  = false;






let { LF
    , dir
    , log
    , console_clear
    , log0
    , log1
    , log2
    , log3
    , log4
    , log5
    , log6
    , log7
    , log8
    , log9
    , lfX
}   = dom_log;


    let t_util
        = (typeof dom_util           != "undefined") ? dom_util
        : (typeof dom_sentence_util  != "undefined") ? dom_sentence_util
        :                                              undefined
    ;







const CLICK_DURATION       = 250;
const LONG_PRESS_ARM_DELAY = CLICK_DURATION;
const LONG_PRESS_DELAY     = CLICK_DURATION;

let   long_press_timer;
let   long_press_arm_timer;


let t_pointerdown_listener = function(e)
{
if(e.altKey ) { console_clear("t_pointerdown_listener"); return; }
if(e.ctrlKey) { log(e.type+" IGNORED .. f(e.ctrlKey)" ); return; }

    set_onDown_XY(e);

    t_pointerdown_handler(e);
};


let t_pointerdown_handler = function(e)
{
if( e.shiftKey ) console.log("t_pointerdown_handler: %c if( e.shiftKey ) return;", "background-color: #F008");
    if( e.shiftKey ) return;

let log_this = DOM_SENTENCE_LOG;

if( log_this) log1("→→ t_pointerdown_handler");

    let sentence_el = dom_sentence.t_SENTENCE_GET_EL_SENTENCE_CONTAINER(onDown_EL);
    if( sentence_el )
    {
if(log_this) log1("... ...sentence_el=["+sentence_el.tagName+"]"+LF);
        preventDefault(e);

        t_CURSOR_add_MOVE_LISTENER();
    }
    else {
if(log_this) log1("... NO sentence_el"+LF);

        add_long_press_arm_listener();
    }
};




let add_long_press_arm_listener = function()
{

let log_this = DOM_SENTENCE_LOG;

if( log_this) log6("→ add_long_press_arm_listener");


    if( long_press_timer     ) clearTimeout(long_press_timer      ); long_press_timer = null;

    if( long_press_arm_timer ) clearTimeout(long_press_arm_timer  );
long_press_arm_timer =   setTimeout(long_press_arm_handler , LONG_PRESS_ARM_DELAY);
};


let long_press_arm_handler = function()
{

let log_this = DOM_SENTENCE_LOG;

if(log_this) log6("→→ long_press_arm_handler");

    long_press_arm_timer = null;

    if( long_press_timer )     clearTimeout(long_press_timer      );
long_press_timer =       setTimeout(long_press_handler     , LONG_PRESS_DELAY);
};


const          MOVE_MIN = 5;
let long_press_handler  = function()
{

let   caller = "long_press_handler";
let log_this = DOM_SENTENCE_LOG;

    let is_scrolling = dom_scroll.t_scroll_is_scrolling();
if(     log_this && !is_scrolling) log6("→→→ long_press_handler: t_scroll_is_scrolling=["+is_scrolling+"] .. onDown_EL.className=["+onDown_EL.className+"]");
else if(log_this                 ) log8("→→→ long_press_handler: t_scroll_is_scrolling=["+is_scrolling+"] .. onDown_EL.className=["+onDown_EL.className+"]");

    long_press_timer = null;

    if( is_scrolling ) return;

    let has_moved = (Math.abs(onMoveDXY.x) >= MOVE_MIN)
        ||          (Math.abs(onMoveDXY.y) >= MOVE_MIN);
console.log(caller+": %c onMoveDXY=["+onMoveDXY.x+" "+onMoveDXY.y+"]", ("color: "+(has_moved ? "red" : "green")+";"));
    if( has_moved    ) return;

    let { container , cells } = dom_sentence.t_SENTENCE_GET_EL_CONTAINER(onDown_EL, log_this);
    if(   container )
    {
        if( cells ) for(let i=0; i < cells.length; ++i) dom_sentence.t_SENTENCE_SPLIT( cells[i]  );
        else                                            dom_sentence.t_SENTENCE_SPLIT( container );
    }

    dom_scroll.t_scrollIntoViewIfNeeded_set_EL( container );
};




let t_SENTENCE_drag_listener = function(e)
{
if(e.altKey ) return;
if(e.ctrlKey) return;

let   caller = "t_SENTENCE_drag_listener";
let log_this = DOM_SENTENCE_LOG;

    let sentence_container_dragged = t_util.is_el_or_child_of_class(onDown_EL, dom_sentence.CSS_SENTENCE_CONTAINER);
if(     log_this && sentence_container_dragged) log7(caller+": sentence_container_dragged=["+t_util.get_id_or_tag(sentence_container_dragged)+"]");
else if(log_this                              ) log8(caller+": sentence_container_dragged=["+t_util.get_id_or_tag(sentence_container_dragged)+"]");


    get_onMoveDXY(e, caller);

    if(sentence_container_dragged && dom_sentence.t_SENTENCE_drag_DXY(onMoveDXY) )
    {


        drag_cursor.move_drag_cursor(e);
        preventDefault(e);
    }
    else if( drag_cursor.get_mouseUP_display_state() )
    {
        drag_cursor.move_drag_cursor(e);
    }
};



const CSS_NOT_MOVED_ENOUGH = "not_moved_enough";



let t_add_NOT_MOVED_ENOUGH   = function()
{

    document.body.classList.add(      CSS_NOT_MOVED_ENOUGH );
    drag_cursor.add_drag_cursor_CSS_NOT_MOVED_ENOUGH();
};


let t_del_NOT_MOVED_ENOUGH   = function()
{

    document.body.classList.remove(   CSS_NOT_MOVED_ENOUGH);
    drag_cursor.del_drag_cursor_CSS_NOT_MOVED_ENOUGH();
};




const CSS_MOVE_ON_COOLDOWN = "move_on_cooldown";

let move_on_cooldown_timer;


let t_add_MOVE_ON_COOLDOWN   = function(time_left)
{
    if( move_on_cooldown_timer ) return;

let log_this = DOM_SENTENCE_LOG;


if(log_this) log9("t_add_MOVE_ON_COOLDOWN");

    if( move_on_cooldown_timer ) clearTimeout( move_on_cooldown_timer );
move_on_cooldown_timer =   setTimeout( t_del_MOVE_ON_COOLDOWN, time_left);
    document.body.classList.add(      CSS_MOVE_ON_COOLDOWN );
    drag_cursor.add_drag_cursor_CSS_MOVE_ON_COOLDOWN();
};


let t_del_MOVE_ON_COOLDOWN   = function()
{
    if(!move_on_cooldown_timer ) return;

let log_this = DOM_SENTENCE_LOG;

if( log_this) log0("t_del_MOVE_ON_COOLDOWN");

    if( move_on_cooldown_timer) clearTimeout( move_on_cooldown_timer );
move_on_cooldown_timer = null;
    document.body.classList.remove(   CSS_MOVE_ON_COOLDOWN );
    drag_cursor.del_drag_cursor_CSS_MOVE_ON_COOLDOWN();

    zap_onMoveDXY();
};





let t_pointerup_listener  = function(e)
{
if(e.button) return;

let log_this = DOM_SENTENCE_LOG;


if( log_this) log5(LF+"→ t_pointerup_listener");

    t_pointerup_handler(e);


    if(   e.ctrlKey
       && (typeof chrome != "undefined")
       &&         chrome.runtime
       &&         chrome.runtime.sendMessage
      ) {
        log("%c RELOADING EXTENSION: ("+DOM_SENTENCE_EVENT_JS_TAG+")", "background-color:red; border:1px; border-radius:1em; padding:0.5em;");

        setTimeout(function() { chrome.runtime.sendMessage({ cmd : "reload" }); }, 1000);


        let el = document.createElement("DIV");
        el.innerHTML
            = "<button"
            + " onclick='document.location.reload();'"
            + " style='"
            + "  position        : fixed; left:"+(e.x)+"px; top:"+(e.y)+"px;"
            + "  border          : 3px solid black;"
            + "  border-radius   : 1em;"
            + "  padding         : 0.5em;"
            + "  color           : white;"
            + "  background-color: red;"
            + "  font-size       : 24px;"
            + "'>"
            + "reload message sent to background script..."
            + "<hr>"
            + "<b>...click here to reload this page</b>"
            + "</button"
        ;

        setTimeout(() => { console.log("BUTTON"); document.body.appendChild(el); }, 1000);
    }

};


let t_pointerup_handler = function(e)
{

let   caller = "t_pointerup_handler";
let log_this = DOM_SENTENCE_LOG;

    let consumed_by                  = "";


    let was_theme_dark = dom_sentence.t_SENTENCE_get_theme_dark();



    let   this_MS                    = new Date().getTime();
    let   delayMS                    = onDown_MS ? (this_MS - onDown_MS) : 0;
    let   clicked                    = (delayMS < CLICK_DURATION);


    t_CURSOR_del_MOVE_LISTENER();



    let   onDown_sentence_container  = t_util.get_el_parent_with_class(onDown_EL, "sentence_container");
    let   some_sentence_container    =          document.querySelector(          ".sentence_container");
    if(     clicked && onDown_sentence_container)
    {
        consumed_by = "UP ➔ ... RESTORE [onDown_sentence_container]";

        dom_sentence.t_SENTENCE_RESTORE_EL(onDown_sentence_container, e);
    }


    else if(clicked)
    {
        if(some_sentence_container)
        {
            consumed_by = "UP ➔ ... CLICKED .. SENTENCE RESTORE ALL";

            dom_sentence.t_SENTENCE_RESTORE_ALL( e );
            some_sentence_container = document.querySelector(".sentence_container");
        }
        else {
            consumed_by = "UP ➔ ... CLICKED .. SENTENCE CLEAR ALL";

            dom_sentence.t_SENTENCE_restore_text_containers_outlined();
        }
    }


    else
    {
        consumed_by
            = "UP ➔ CLICKED=["+clicked+"]\n"
            +  " .. some_sentence_container  =["+ (some_sentence_container   ? some_sentence_container  .tagName : "")+"]\n"
            +  " .. onDown_EL                =["+ (onDown_EL                 ? onDown_EL                .tagName : "")+"]\n"
            +  " .. onDown_sentence_container=["+ (onDown_sentence_container ? onDown_sentence_container.tagName : "")+"]"
        ;

    }


    if( clicked )
    {



        if(      onDown_sentence_container ) dom_scroll.t_scrollIntoViewIfNeeded_set_EL( null                    );
        else if(   some_sentence_container ) dom_scroll.t_scrollIntoViewIfNeeded_set_EL( some_sentence_container );
    }



    if(long_press_timer    ) clearTimeout(long_press_timer    ); long_press_timer     = null;
    if(long_press_arm_timer) clearTimeout(long_press_arm_timer); long_press_arm_timer = null;



    clr_onWork_EL( caller );



    if(   (typeof chrome != "undefined")
       &&         chrome.runtime
       &&         chrome.runtime.sendMessage
      ) {
        let theme_dark  = dom_sentence.t_SENTENCE_get_theme_dark();
        if( theme_dark != was_theme_dark ) {
if( log_this) log("%c SETTING EXTENSION: ("+DOM_SENTENCE_EVENT_JS_TAG+") { theme_dark : "+theme_dark+" }", "background-color:red; border:1px; border-radius:1em; padding:0.5em;");

            setTimeout(function() { chrome.runtime.sendMessage({ theme_dark }); }, 1000);
        }
    }

if( log_this) log5("→→ "+caller+":"+ consumed_by);
};




let onDown_EL = null;
let onDown_MS = 0;
let onDown_XY = { x:0, y:0 };
let onMoveDXY = { x:0, y:0 };



let set_onDown_XY = function(e)
{
    onDown_EL   = t_util.t_get_event_target(e);
    onDown_MS   = new Date().getTime();

    let      xy = t_util.get_event_XY(e);
    onDown_XY.x = xy.x;
    onDown_XY.y = xy.y;

    onMoveDXY.x = 0;
    onMoveDXY.y = 0;
};


let get_onMoveDXY = function(e)
{
    if(e) {
        let      xy = t_util.get_event_XY(e);
        onMoveDXY.x = xy.x - onDown_XY.x;
        onMoveDXY.y = xy.y - onDown_XY.y;
    }
    return onMoveDXY;
};


let zap_onMoveDXY = function()
{
    onDown_XY.x += onMoveDXY.x;
    onDown_XY.y += onMoveDXY.y;
    drag_cursor.show_drag_cursor();
    onMoveDXY.x  = 0;
    onMoveDXY.y  = 0;
};


let clr_onWork_EL = function(_caller)
{

let   caller = "clr_onWork_EL";
let log_this = DOM_SENTENCE_LOG;

if( log_this) log8(caller+": CALLED BY "+ _caller);


    onDown_EL   = null;
    onDown_MS   = 0;
    onDown_XY.x = 0; onDown_XY.y = 0;
    onMoveDXY.x = 0; onMoveDXY.y = 0;
};




let CAPTURE_TRUE_PASSIVE_FALSE  = { capture:true , passive:false };



let t_SENTENCE_add_LISTENER = function(_log_this,_tag_this)
{

let   caller = "t_SENTENCE_add_LISTENER";
let log_this = DOM_SENTENCE_LOG;


if( log_this || _log_this || _tag_this) log5("➔ "+caller+LF);

    if( ("ontouchstart" in document.documentElement)) {
        add_listener_capture_active(   window, "touchstart", t_pointerdown_listener           );
        add_listener_capture_active(   window, "touchend"  , t_pointerup_listener             );
    }
    else {
        add_listener_capture_active(   window, "mousedown" , t_pointerdown_listener           );
        add_listener_capture_active(   window, "mouseup"   , t_pointerup_listener             );
    }

    add_listener_capture_active(       window, "scroll"    ,   dom_scroll.t_scroll_listener   );
    add_listener_capture_active(       window, "resize"    , dom_sentence.t_SENTENCE_onresize );
};


let t_SENTENCE_del_LISTENER = function(_log_this,_tag_this)
{

let   caller = "t_SENTENCE_del_LISTENER";
let log_this = DOM_SENTENCE_LOG;

if( log_this || _log_this || _tag_this) log0("➔ "+caller+LF);


    if( ("ontouchstart" in document.documentElement)) {
        remove_listener_capture_active(   window, "touchstart", t_pointerdown_listener);
        remove_listener_capture_active(   window, "touchend"  , t_pointerup_listener);
    }
    else {
        remove_listener_capture_active(   window, "mousedown" , t_pointerdown_listener);
        remove_listener_capture_active(   window, "mouseup"   , t_pointerup_listener);
    }

    remove_listener_capture_active(   window, "scroll"    , dom_scroll.t_scroll_listener);
};


let t_CURSOR_add_MOVE_LISTENER = function()
{

let   caller = "t_CURSOR_add_MOVE_LISTENER";
let log_this = DOM_SENTENCE_LOG;

if( log_this) log7(caller);

    if("ontouchmove"  in document.documentElement) {
        add_listener_capture_active(   window, "touchmove", t_SENTENCE_drag_listener);
    }
    else {
        add_listener_capture_active(   window, "mousemove", t_SENTENCE_drag_listener);
        add_listener_capture_active(   window, "wheel"    , t_SENTENCE_drag_listener);
    }
};


let t_CURSOR_del_MOVE_LISTENER = function()
{

let   caller = "t_CURSOR_del_MOVE_LISTENER";
let log_this = DOM_SENTENCE_LOG;

if(log_this) log0(caller);


    t_del_NOT_MOVED_ENOUGH();
    t_del_MOVE_ON_COOLDOWN();


    if( drag_cursor.get_mouseUP_display_state() )
        return;


    if("ontouchmove"  in document.documentElement) {
        remove_listener_capture_active(window, "touchmove", t_SENTENCE_drag_listener);
    }
    else {
        remove_listener_capture_active(window, "mousemove", t_SENTENCE_drag_listener);
        remove_listener_capture_active(window, "wheel"    , t_SENTENCE_drag_listener);
    }

    drag_cursor.hide_drag_cursor();
};


let add_listener_capture_active = function(el, ev, fn)
{
    el.   addEventListener(ev, fn, CAPTURE_TRUE_PASSIVE_FALSE);
};


let remove_listener_capture_active = function(el, ev, fn, uc)
{
    el.removeEventListener(ev, fn, CAPTURE_TRUE_PASSIVE_FALSE);
};


let preventDefault = function(e)
{

let log_this = DOM_SENTENCE_LOG;

if( log_this) log0("preventDefault");

    if(e.cancelable)
    {
        if( e.stopPropagation          ) e.stopPropagation         ();
        if( e.stopImmediatePropagation ) e.stopImmediatePropagation();
        if( e.preventDefault           ) e.preventDefault          ();
    }
};





const T_SCROLLINTOVIEW_DELAY = 500;

const SCROLLBAR_WIDTH = 16;
const VIEWPORT_MARGIN =
    {          top    : 16
        ,      left   : 16
        ,      right  : 16 + SCROLLBAR_WIDTH
        ,      bottom : 32 + SCROLLBAR_WIDTH
    };

let   scrollIntoViewIfNeeded_timer;

let t_scrollIntoViewIfNeeded = function(el)
{
    if(scrollIntoViewIfNeeded_timer) clearTimeout( scrollIntoViewIfNeeded_timer );
    scrollIntoViewIfNeeded_timer     = setTimeout(scrollIntoViewIfNeeded_handler, T_SCROLLINTOVIEW_DELAY, el);
};
let scrollIntoViewIfNeeded_handler = function(el)
{
    scrollIntoViewIfNeeded_timer = null;

    document.getElementsByTagName("HTML")[0].style.scrollBehavior = "smooth";

    let xy = scrollIntoViewIfNeeded_get_scrollXY(el);
    if( xy )
        window.scrollTo(xy.x, xy.y);

};


let   scrollIntoViewIfNeeded_get_scrollXY = function(el)
{

    let w_W = window.innerWidth ;
    let w_H = window.innerHeight;
    let view_rect
        = {   left   : window.scrollX       + VIEWPORT_MARGIN.left
            , top    : window.scrollY       + VIEWPORT_MARGIN.top
            , right  : window.scrollX + w_W - VIEWPORT_MARGIN.right
            , bottom : window.scrollY + w_H - VIEWPORT_MARGIN.bottom
        };

    view_rect.height
        = view_rect.bottom
        - view_rect.top;



    let cr
        = el.getBoundingClientRect();
    let el_rect
        = {   left   : cr.left   + window.scrollX
            , top    : cr.top    + window.scrollY
            , right  : cr.right  + window.scrollX
            , bottom : cr.bottom + window.scrollY
        };

    el_rect.height
        = el_rect.bottom
        - el_rect.top;



    let over_left      = (el_rect.left    < view_rect.left  ) && (window.scrollX > 0);
    let over_top       = (el_rect.top     < view_rect.top   ) && (window.scrollY > 0);
    let over_right     = (el_rect.left    > view_rect.right );
    let over_bottom    = (el_rect.top     > view_rect.bottom);

    let over_something
        = (over_top    ? "T":"")
        + (over_left   ? "L":"")
        + (over_right  ? "R":"")
        + (over_bottom ? "B":"");



    if(!!!over_something) return null;



    let may_go_left    = (el_rect.right  < window.innerWidth);

    let scrollX
        = (over_left  ) ? el_rect.left                         - VIEWPORT_MARGIN.left
        : (over_right ) ? el_rect.right   - window.innerWidth  + VIEWPORT_MARGIN.right
        : may_go_left   ?                   0
        :                                   window.scrollX;
    scrollX = Math.max(scrollX, 0);

    let scrollY
        = (over_top    ) ? el_rect.top                         - VIEWPORT_MARGIN.left
        : (over_bottom ) ? el_rect.bottom - window.innerHeight + VIEWPORT_MARGIN.right
        :                                   window.scrollY;
    scrollY = Math.max(scrollY, 0);


    let    result = { x: scrollX.toFixed(0) , y: scrollY.toFixed(0) };

    return result;
};





















const DRAG_CURSOR_JS_ID       = "drag_cursor" ;
const DRAG_CURSOR_JS_TAG      = DRAG_CURSOR_JS_ID +" (220221:19h:37)";

let drag_cursor  = (function() {
"use strict";


const CSS_DRAG_CURSOR_DIV_ONLOAD       = "onload";
const     DRAG_CURSOR_DIV_ONLOAD_DELAY =  1000;
let       drag_cursor_div;





let mouseUP_display_state = true;


let set_mouseUP_display_state = function(state=true)
{
    mouseUP_display_state = state;

    if(state) show_drag_cursor();

    if(state) t_CURSOR_add_MOVE_LISTENER();
    else      t_CURSOR_del_MOVE_LISTENER();
};

let get_mouseUP_display_state = function() { return mouseUP_display_state; };

let show_drag_cursor = function()
{

    if(!drag_cursor_div) {
        drag_cursor_div = document.createElement("DIV");

        drag_cursor_div.id                    =     "drag_cursor";
        drag_cursor_div.style.pointerEvents   =            "none";
        drag_cursor_div.style.position        =           "fixed";
        drag_cursor_div.style.margin          =             "0px";
        drag_cursor_div.style.padding         =            "16px";
        drag_cursor_div.style.backgroundColor =            "#FF0";
        drag_cursor_div.style.border          =  "3px solid #000";
        drag_cursor_div.style.borderRadius    = "1em 0em 1em 1em";
        drag_cursor_div.style.zIndex          =      "2147483647";
        drag_cursor_div.style.opacity         =             "0.5";

        document.documentElement.appendChild( drag_cursor_div );
    }
    if( drag_cursor_div.style.display != "block")
    {

        if(typeof dom_sentence_event != "undefined")
        {
            drag_cursor_div.classList.add( CSS_DRAG_CURSOR_DIV_ONLOAD );
            drag_cursor_div.style.left    = (window.innerWidth  / 2)+"px";
            drag_cursor_div.style.top     = (window.innerHeight / 2)+"px";

        }

        drag_cursor_div.style.display  = "block";
    }
};


let move_drag_cursor = function(e)
{
    if(!drag_cursor_div                         ) return;
    if(!drag_cursor_div.style.display == "block") return;

    if(                  drag_cursor_div.classList.contains( CSS_DRAG_CURSOR_DIV_ONLOAD ))
        setTimeout(() => drag_cursor_div.classList.remove  ( CSS_DRAG_CURSOR_DIV_ONLOAD ), DRAG_CURSOR_DIV_ONLOAD_DELAY);

    let      xy = t_util.get_event_XY(e);
    let offset_x = drag_cursor_div.className
        ? drag_cursor_div.offsetWidth / 2
        : drag_cursor_div.offsetWidth;
    drag_cursor_div.style.left    = (xy.x - offset_x)+"px";
    drag_cursor_div.style.top     = (xy.y           )+"px";
};

let hide_drag_cursor                     = function() { if(drag_cursor_div) drag_cursor_div.style.display = "none"; };
let add_drag_cursor_CSS_NOT_MOVED_ENOUGH = function() { if(drag_cursor_div) drag_cursor_div.classList.add   (CSS_NOT_MOVED_ENOUGH); };
let del_drag_cursor_CSS_NOT_MOVED_ENOUGH = function() { if(drag_cursor_div) drag_cursor_div.classList.remove(CSS_NOT_MOVED_ENOUGH); };
let add_drag_cursor_CSS_MOVE_ON_COOLDOWN = function() { if(drag_cursor_div) drag_cursor_div.classList.add   (CSS_MOVE_ON_COOLDOWN); };
let del_drag_cursor_CSS_MOVE_ON_COOLDOWN = function() { if(drag_cursor_div) drag_cursor_div.classList.remove(CSS_MOVE_ON_COOLDOWN); };


return { name : "drag_cursor"
    ,    set_mouseUP_display_state
    ,    get_mouseUP_display_state
    ,    show_drag_cursor
    ,    hide_drag_cursor
    ,    move_drag_cursor
    ,    add_drag_cursor_CSS_MOVE_ON_COOLDOWN
    ,    add_drag_cursor_CSS_NOT_MOVED_ENOUGH
    ,    del_drag_cursor_CSS_MOVE_ON_COOLDOWN
    ,    del_drag_cursor_CSS_NOT_MOVED_ENOUGH
};
}());






return { name : DOM_SENTENCE_EVENT_JS_ID
    ,    t_SENTENCE_add_LISTENER
    ,    t_SENTENCE_del_LISTENER
    ,    t_scrollIntoViewIfNeeded
    ,    t_add_MOVE_ON_COOLDOWN
    ,    t_del_MOVE_ON_COOLDOWN
    ,    t_add_NOT_MOVED_ENOUGH
    ,    t_del_NOT_MOVED_ENOUGH
    ,    set_mouseUP_display_state : drag_cursor.set_mouseUP_display_state

    ,    get_mouseUP_display_state : drag_cursor.get_mouseUP_display_state
    ,  show_drag_cursor            : drag_cursor.show_drag_cursor
    ,  hide_drag_cursor            : drag_cursor.hide_drag_cursor
    ,  move_drag_cursor            : drag_cursor.move_drag_cursor
};

}());





/*INLINE}}}*/
//@ sourceURL=dom_sentence_event.js
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;

/*}}}*/

  /**  6 SENTENCE JS dom_sentence_js_data .. ESCAPE=[t_data.LF +"Slot #"] {{{*/
/*
../script/dom_sentence.js
*/
let dom_sentence_js_data ="data:text/javascript;charset='utf-8',"+ escape(`
/*INLINE{{{*/























const DOM_SENTENCE_JS_ID      = "dom_sentence_js";
const DOM_SENTENCE_JS_TAG     = DOM_SENTENCE_JS_ID  +" (230706:19h:57)";

let dom_sentence            = (function() {
"use strict";
let   DOM_SENTENCE_LOG      = false;
let   DOM_SENTENCE_TAG      = false;







let t_util     ;
let t_tools    ;



let t_sentence_IMPORT  = function(_log_this,import_num)
{

    DOM_SENTENCE_LOG = DOM_SENTENCE_LOG || localStorage_getItem("DOM_SENTENCE_LOG");
    DOM_SENTENCE_TAG = DOM_SENTENCE_TAG || localStorage_getItem("DOM_SENTENCE_TAG");



    if     (typeof dom_util           != "undefined") t_util  = dom_util         ;
    else if(typeof dom_sentence_util  != "undefined") t_util  = dom_sentence_util;
    else console.warn("MISSING STUB FOR: [dom_util]");



    if     (typeof dom_tools          != "undefined") t_tools = dom_tools         ;
    else if(typeof dom_sentence_event != "undefined") t_tools = dom_sentence_event;
    else console.warn("MISSING STUB FOR: [dom_tools]");


    sentence_INTERN();
if(_log_this) log("➔ "+(import_num ? (import_num+" ") : "")+"t_sentence_IMPORT: "+t_util.name+", "+t_tools.name);
};




let LOG_MAP = false;

let lf1="", lf2="", lf3="", lf4="", lf5="", lf6="", lf7="", lf8="", lf9="", lf0="";
let lfX = [ lf1 ,lf2 ,lf3 ,lf4 ,lf5 ,lf6 ,lf7 ,lf8 ,lf9, lf0 ];

let lb1="", lb2="", lb3="", lb4="", lb5="", lb6="", lb7="", lb8="", lb9="", lb0="";
let lbX = [ lb1 ,lb2 ,lb3 ,lb4 ,lb5 ,lb6 ,lb7 ,lb8 ,lb9, lb0 ];

const lXX  = "border:1px solid gray; padding:0 .5em; border-radius:1em;";
let lbA=lXX, lbB=lXX, lbC=lXX, lbF=lXX, lbH=lXX, lbL=lXX, lbR=lXX, lbS=lXX, lbb=lXX;

let log                 = console.log;
let log_key_val_group   = console.log;

let console_dir         = (k,v) => { console.log("..."+k+":"); console.dir(v); };


let   sentence_INTERN   = function()
{

    if((typeof dom_log != "undefined") && (dom_log.LOG_BG_CSS))
    {
        LOG_MAP = dom_log.LOG_MAP;

        ({ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX } = dom_log.LOG_BG_CSS);
        ({ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX } = dom_log.LOG_FG_CSS);
        ({ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb           } = dom_log.LOG_XX_CSS);

        log                 = dom_log.log;
        log_key_val_group   = dom_log.log_key_val_group;
        console_dir         = dom_log.console_dir;
    }


    else if((typeof dom_log != "undefined") && dom_log.lfX)
    {
        lbH = dom_log.lbH;
        lbL = dom_log.lbL;
        lbR = dom_log.lbR;
        lbC = dom_log.lbC;
        lfX = dom_log.lfX;
        [ lf0 ,lf1 ,lf2 ,lf3 ,lf4 ,lf5 ,lf6 ,lf7 ,lf8 ,lf9 ] = lfX;
    }

};



let localStorage_setItem = function(key,val) {          try { if(val)  localStorage.setItem   (key,val); else localStorage.removeItem(key); } catch(ex) {} };
let localStorage_getItem = function(key    ) { let val; try {    val = localStorage.getItem   (key    );                                    } catch(ex) {} return val; };
let localStorage_delItem = function(key    ) {          try {  localStorage.removeItem(key    );                                    } catch(ex) {} };






const LF                = String.fromCharCode(10);
const UNICODE_BULLET    = "&#x2022;";

let sentence_containers = [];


const CSS_SENTENCE_CONTAINER = "sentence_container";
const CSS_SENTENCE           = "sentence";
const CSS_CLAUSE             = "clause";
const CSS_LAST_CLAUSE        = "last_clause";
const CSS_OUTLINED           = "outlined";
const CSS_DARK               = "dark";



const E12_FONT_SIZE_LIST = ["fs1", "fs2", "fs3", "fs4", "fs5", "fs6", "fs7", "fs8", "fs9", "fs10", "fs11", "fs12"];

let   e12_font_size      =  "fs8";









let t_SENTENCE_GET_EL_CONTAINER = function(el,_log_this)
{








let   caller = "t_SENTENCE_GET_EL_CONTAINER";
let log_this = _log_this || LOG_MAP.S2_SELECT;

    if(!t_util) console.warn("MISSING STUB FOR: [dom_util]");
    let container;



    if(!container)
    {
        container =  null





            || t_util.get_el_parent_with_tag  (el, "UL"             )
            || t_util.get_el_parent_with_tag  (el, "OL"             )


            || t_util.get_el_parent_with_tag  (el, "PRE"            )
            || t_util.get_el_parent_with_tag  (el, "P"              )



            || t_util.get_el_parent_with_tag  (el,  "TD"            )





            || t_util.get_el_parent_with_tag  (el, "TABLE"          )







            || t_util.get_el_parent_with_tag  (el, "BLOCKQUOTE"      )
            || t_util.get_el_parent_with_tag  (el, "DIR"             )
            || t_util.get_el_parent_with_tag  (el, "DIV"             )



            || t_util.get_el_parent_with_tag  (el, "DETAILS"        )
        ;

    }


    if(!container)
    {
        container
        =  t_util.get_el_parent_with_class(el,  CSS_OUTLINED    );

if(log_this && container) log(caller+": ...CSS_OUTLINED container=["+t_util.get_n_lbl(container)+"]");
    }



    let cells;
    if(container)
    {
        let c_next = container              .nextElementSibling;

        let p_next = container.parentElement
            ?        container.parentElement.nextElementSibling
            :        null
        ;

        let group
            = (!container)                          ? null


            :                                         null
        ;


        let dlist
            = (!container)                          ? null
            : ( container.nodeName == "DL"      )   ? container
            : ( container.nodeName == "DT"      )   ? container.parentElement
            :                                         null
        ;

        let table
            = (!container)                          ? null
            : ( container.nodeName ==  "THEAD"  )   ? container.parentElement
            : ( container.nodeName ==  "TFOOT"  )   ? container.parentElement
            : ( container.nodeName ==  "TBODY"  )   ? container.parentElement
            : ( container.nodeName ==  "CAPTION")   ? container.parentElement
            : ( container.nodeName == "TABLE"   )   ? container
            :                                         null
        ;

        cells
            =   group ?                        group


            :                                        null
        ;


if(log_this && (log_key_val_group != console.log))
    log_key_val_group(caller
                      , {   el
                          ,                   el_tagName : el.tagName
                          , container
                          , container_textContent_length : container.textContent.length
                          , table
                          , dlist
                          , group
                          , cells
                      }, lbH+lf4, false);

if(log_this) log(caller+": ...return container=["+t_util.get_n_lbl(container)+"] .. cells=["+(cells ? "x"+cells.length : "")+"]");


    }



    if(container)
    {
        return { container, cells };
    }
    else {
if(log_this) log(caller+": ...return NO container");
        return "";
    }

};


let t_SENTENCE_GET_EL_SENTENCE_CONTAINER = function(el)
{
    if( show_popup_container_shown )
    {
 let dom_popup_div = dom_popup.log_popup_div_get();
        if(t_util.is_el_or_child_of_parent_el(el, dom_popup_div))
        {
            return show_popup_container_shown;
        }
    }
    return t_util.get_el_parent_with_class(el, CSS_SENTENCE_CONTAINER);
};


let t_SENTENCE_GET_SENTENCE_CONTAINERS = function()
{
    return sentence_containers;
};


let t_SENTENCE_GET_SENTENCE_CONTAINERS_IN_VIEWPORT = function()
{
    if(typeof dom_view == "undefined") return [];

    let el_array = [];
    for(let i=0; i < sentence_containers.length; ++i)
    {
        if(dom_view.t_view1_is_el_topLeft_or_bottomRight_in_viewport(sentence_containers[i]))
            el_array.push( sentence_containers[i] );
    }

    return el_array;
};








const                 WORD = "\\s*(?:\\p{L}|_|\\(|-|\\))"    ;
const             BOUNDARY =     "[\\.,;:?\\n\\r]+(?!\\w)"   ;
const            LAST_WORD = WORD    +"{1,}";
const           FIRST_WORD = WORD    +"+";

const CAPTURING_PREV_END   = "("     + LAST_WORD  +")?"      ;
const CAPTURING_BOUNDARY   = "("     + BOUNDARY   +")"       ;
const CAPTURING_NEXT_START = "(\\n+|"+ FIRST_WORD +")?"      ;





const SYMBOL_GEAR          = "\u2699";
const SYMBOL_THEME         = "\u262F";
const SYMBOL_SCROLL        = "\u2933";

const MAGNIFIED_STYLE      = "font-size  : 200% !important;";
const LINE_HEIGHT_STYLE    = "line-height: 1em  !important;";

const THEME_STYLE_BG_DARK  = "rgba( 32, 32, 32,0.8)";
const THEME_STYLE_FG_DARK  = "rgba(255,255,255,0.8)";
const THEME_STYLE_BG_LIGHT = "rgba(255,255,255,0.8)";
const THEME_STYLE_DARK     = "color: #DDD !important; background-color: "+ THEME_STYLE_BG_DARK  +" !important; border-radius:1em;";
const THEME_STYLE_LIGHT    = "color: #222 !important; background-color: "+ THEME_STYLE_BG_LIGHT +" !important; border-radius:1em;";

let     theme_dark = false;
let     magnified  = false;
let     xpath_show = false;
let  scroll_smooth =  true;
let  last_container;
let regexp_SENTENCE;

let t_SENTENCE_SPLIT = function(container,e=null)
{

let   caller = "t_SENTENCE_SPLIT";
let log_this = DOM_SENTENCE_LOG || LOG_MAP.S2_SELECT;

let tag_this = DOM_SENTENCE_TAG || log_this;

if( tag_this) log("%c"+caller+"("+t_util.get_n_lbl(container)+")", lbH+lf1);
if( log_this) console_dir("container",container        );
if( log_this && e) log("%c type=["+e.type+"] e.target.id=["+e.target.id+"]", lbH+lf3);


    if( check_tool_event(e) ) return;



    if((typeof dom_prop) != "undefined") theme_dark = dom_prop.get        ("theme_dark");
    else                                 theme_dark = localStorage_getItem("theme_dark");




    document.getElementsByTagName("HTML")[0].style.scrollBehavior
        = scroll_smooth
        ? "smooth"
        : "auto"
    ;


    if(!sentence_containers.includes( container ))
        sentence_containers.push    ( container );



    if(container.nodeName == "DETAILS") container.open = true;



    if(!regexp_SENTENCE ) {
        try {
            regexp_SENTENCE = new RegExp(CAPTURING_PREV_END +  CAPTURING_BOUNDARY +  CAPTURING_NEXT_START,"gu");
        } catch(ex) {
            log(ex);
        }
        if(!regexp_SENTENCE)
            regexp_SENTENCE = new RegExp(             "(\\w*)"+CAPTURING_BOUNDARY+"(\\w*)"               ,"gu");
    }


    let   el;
    while(el = t_util.get_el_child_with_class(container, dom_sentence.CSS_SENTENCE_CONTAINER))
        t_SENTENCE_RESTORE_EL(el, e);

    t_SENTENCE_RESTORE_EL(container, e);



    sentence_color_next = 1;

if( log_this) {
    log("...LAST_WORD            %c"+LAST_WORD           , lbC+lf2);
    log("...BOUNDARY             %c"+BOUNDARY            , lbC+lf3);
    log("...FIRST_WORD           %c"+FIRST_WORD          , lbC+lf2);
    log("...CAPTURING_PREV_END   %c"+CAPTURING_PREV_END  , lbC+lf5);
    log("...CAPTURING_BOUNDARY   %c"+CAPTURING_BOUNDARY  , lbC+lf6);
    log("...CAPTURING_NEXT_START %c"+CAPTURING_NEXT_START, lbC+lf7);
}
if( tag_this) {
    log("regexp_SENTENCE %c prev_end %c boundary %c next_start %c"+LF+regexp_SENTENCE
        ,                lbL+lf5    ,lbC+lf6    ,lbR+lf7      ,"border:1px solid magenta;");
}


    let text = t_util.t_get_htmlEntities( container.textContent.trim() );


    text = strip_HTML( container.innerHTML );

    t_util.t_copy_to_CLIPBOARD( text );

    text = text.replace(regexp_SENTENCE, t_SENTENCE_SPLIT_replace) ;




    container.innerHTML_SAVED
        = container.innerHTML;



    t_util.add_el_class(container, CSS_SENTENCE_CONTAINER);
    if( theme_dark ) {
        t_util.add_el_class(    container, CSS_DARK);

    }

    container.style.touchAction = "none";

    let button_style
        =                " float: right;"
        +            " clear: right;"
        +           " border: none;"
        +           " margin: 0;"
        +          " padding: 0;"
        + " background-color: transparent;"
        +            " color: #A00;"
        +        " font-size: 24px;"
        +      " font-weight: 900;"
        +      " line-height: 1em;"
    ;
    let span_style
        = "pointer-events: none"
    ;



    let tools = ""
        +    "<button id='dom_sentence_theme_dark' title='THEME DARK'    style='"+button_style+"'><span style='"+span_style+"'>"+ SYMBOL_THEME     +"</span></button>"
        +    "<button id='dom_scroll_smooth'       title='SCROLL SMOOTH' style='"+button_style+"'><span style='"+span_style+"'>"+ SYMBOL_SCROLL    +"</span></button>"

        + ((typeof dom_popup != "undefined")
           ? "<button id='dom_sentence_xpath_show' title='XPATH SHOW'    style='"+button_style+"'><span style='"+span_style+"'>"+ SYMBOL_GEAR      +"</span></button>" : "")
    ;

    let   theme_style
        = theme_dark
        ? THEME_STYLE_DARK
        : THEME_STYLE_LIGHT
    ;

    let   magnified_style
        = magnified
        ? MAGNIFIED_STYLE
        : ""
    ;

    container.innerHTML = tools
        + "<pre class='"+CSS_SENTENCE+" bg1' style=' "+LINE_HEIGHT_STYLE+" "+theme_style+" "+magnified_style+"'>"
        +  text
        + "</pre>";

    if( theme_dark )
        t_SENTENCE_SPLIT_set_parent_theme_dark( container );
    else
        t_SENTENCE_SPLIT_clr_parent_theme_dark( container );



    let selector
        = "."+ CSS_CLAUSE   +"+."+ CSS_SENTENCE
        + ","
        + "."+ CSS_SENTENCE +"+."+ CSS_SENTENCE
    ;

    let sentence_array = container.querySelectorAll( selector );
if( tag_this) console_dir("sentence_array .. selector=["+selector+"]",sentence_array);

    for(let i=0; i < sentence_array.length; ++i)
    {
        let last_clause =   sentence_array[i].previousElementSibling;
        t_util.add_el_class(last_clause, CSS_LAST_CLAUSE);

if( log_this) console.log(last_clause);
    }


    t_util.add_el_class(container.lastElementChild.lastElementChild, CSS_LAST_CLAUSE);

    t_SENTENCE_FONTSIZE_APPLY( container );


    let innerHTML
        = container.outerHTML;

    if( xpath_show )
        innerHTML
            += "<hr>"
            + "<pre class='xpath'>"
            +  t_util.get_parent_tag_id_class_chain( container )
            + "</pre>";

if( tag_this) log("container.innerHTML.length: %c"+container.innerHTML.length, lb7);
if( log_this) log("container.innerHTML:%c"+LF+container.innerHTML, lb7);



if( log_this) log_key_val_group(            caller
                               , {              el
                                 , regexp_SENTENCE : String(regexp_SENTENCE)
                                 ,  sentence_array
                                 ,  last_container
                                 ,            text : "(length: "+        text.length+") "       + t_util.ellipsis(text               )
                                 ,       container : "(length: "+container.innerHTML.length+") "+ t_util.ellipsis(container.innerHTML)
                                 ,      theme_dark
                                 ,   scroll_smooth
                                 ,       magnified
                                 ,      xpath_show
                                 ,         callers : dom_log.get_callers && dom_log.get_callers()
                               }, lf4, true);


    show_popup(container, innerHTML);



    clear_popup();


    last_container = container;
    t_tools.t_scrollIntoViewIfNeeded( container );
};



const regexp_BRLI               = new RegExp("(<br>\\n*)+<\/li>"       , "gi");
const regexp_BR                 = new RegExp("<br>"                    , "gi");
const regexp_LI                 = new RegExp("\\s*([\\.,;]\\s*)*<\/li>", "gi");
const regexp_MULTI              = new RegExp("(\\s*:\\n*\\s*)+"        , "gms");

const regexp_HTML               = new RegExp("<[^>]*>"                 , "g" );
const regexp_PUNC               = new RegExp("\\s*([\\.,;]\\s*)"       , "g" );
const regexp_BLANK              = new RegExp("\\s+|(&nbsp;)+"          , "g" );


let strip_HTML = function(text)
{
    if(   !text) return "";


    text = text
        .   replace(regexp_BRLI  , "</li>")
        .   replace(regexp_LI    , "."+LF+UNICODE_BULLET)
        .   replace(regexp_BR    , ":"    )
        .   replace(regexp_MULTI , ":"+LF )
    ;

    text = text
        .   replace(regexp_HTML  , " "    )
        .   replace(regexp_PUNC  , "$1"   )
        .   replace(regexp_BLANK , " "    )
    ;

    return text.trim();
};


let t_SENTENCE_SPLIT_set_parent_theme_dark = function (container)
{

    let el_array = get_parent_chain(container);

    el_array.forEach((el) => {
        el.style.background_saved         = el.style.background;
        el.style.background               = THEME_STYLE_BG_DARK;

        el.style.color_saved              = el.style.color;
        el.style.color                    = THEME_STYLE_FG_DARK;
    });
};


let t_SENTENCE_SPLIT_clr_parent_theme_dark = function (container)
{

    let el_array = get_parent_chain(container);

    el_array.forEach((el) => {
        el.style.background               = el.style.background_saved || "";
        delete                              el.style.background_saved;

        el.style.color                    = el.style.color_saved      || "";
        delete                              el.style.color_saved;
    });
};



let sentence_color_next = 1;


let t_SENTENCE_SPLIT_replace = function(match, prev_end="", boundary="", next_start="")
{

let   caller = "t_SENTENCE_SPLIT_replace";
let log_this = DOM_SENTENCE_LOG || LOG_MAP.S2_SELECT;
let tag_this = DOM_SENTENCE_TAG || log_this;

if(next_start == LF) next_start = "";

if( tag_this) log(caller+" %c"+prev_end+"%c"+t_util.show_CR_LF(boundary)+"%c"+next_start
                  ,        lbL+lf5      ,lbC+lf6                         ,lbR+lf7       );



    let entering_a_clause
        =  boundary.includes(",")
        || boundary.includes(";")


    ;

    if(!entering_a_clause)
        sentence_color_next += 1;

    let className
        = (entering_a_clause ? CSS_CLAUSE : CSS_SENTENCE)
        + " bg"+(sentence_color_next % 10)
    ;

    return prev_end + boundary +"</span><span style='"+LINE_HEIGHT_STYLE+"' class='"+className+"'>"+ next_start;
};













let outline_text_containers_in_view = function(root=document.body)
{

let   caller = "outline_text_containers_in_view";
let log_this = DOM_SENTENCE_LOG || LOG_MAP.S2_SELECT;
let tag_this = DOM_SENTENCE_TAG || log_this;

if( tag_this) log("%c"+caller, lbH+lf7);

    t_SENTENCE_restore_text_containers_outlined();
    let { text_container_in_view_array } = get_el_text_container_in_view_array( root );
if(tag_this) console_dir("text_container_in_view_array", text_container_in_view_array);

if(log_this) log("...outlining "+text_container_in_view_array.length+" containers");
    text_container_in_view_array.forEach(
                                         (el) => {
                                             t_util.add_el_class(el, CSS_OUTLINED);
                                             el.addEventListener("transitionend", outlined_transitionend_handler);
                                         }
                                        );

};


let outlined_transitionend_handler = function(e)
{

let   caller = "outlined_transitionend_handler";
let log_this = DOM_SENTENCE_LOG || LOG_MAP.S2_SELECT;


if(log_this) console_dir(caller+": propertyName=["+e.propertyName+"] .. elapsedTime=["+e.elapsedTime+"]", e);
};


let t_SENTENCE_restore_text_containers_outlined = function()
{

let   caller = "t_SENTENCE_restore_text_containers_outlined";
let log_this = DOM_SENTENCE_LOG || LOG_MAP.S2_SELECT;
let tag_this = DOM_SENTENCE_TAG || log_this;

if( tag_this) log("%c"+caller, lbH+lf8);

    node_in_view_filter_clear();

    let outlined_containers = document.querySelectorAll("."+CSS_OUTLINED);
    if( outlined_containers.length)
    {
if(log_this) log("...restoring "+outlined_containers.length+" outlined containers");
        for(let i=0; i < outlined_containers.length; ++i)
        {
            let node = outlined_containers[i] ;

            node.classList.remove( CSS_OUTLINED );

            if(typeof node.title_saved != "undefined") { node.title = node.title_saved; delete       node.title_saved; }
        }
    }
    else {
if(log_this) log("...found no outlined containers to restore");
    }

};


let get_el_text_container_in_view_array = function(root=document.body)
{

let   caller = "get_el_text_container_in_view_array("+t_util.get_n_lbl(root)+")";
let log_this = DOM_SENTENCE_LOG || LOG_MAP.S2_SELECT;

if( log_this) console.time   (caller);
    let time_start = new Date().getTime();

    let text_container_in_view_array = [];
    let node;
    if(node_in_view_filter(root) == NodeFilter.FILTER_ACCEPT)
    {
if( log_this) log("root is a LEAF");
        text_container_in_view_array.push(root);
    }
    else {
        let treeWalker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, node_in_view_filter);
        let last_accepted_parent;
        while(node = treeWalker.nextNode())
        {
            if(!last_accepted_parent || !last_accepted_parent.contains(node))
            {
                last_accepted_parent = node;
                text_container_in_view_array.push(node);
            }
        }
    }
    let time_end = new Date().getTime();
if( log_this) console.timeEnd(caller);
if( log_this) console_dir("text_container_in_view_array", text_container_in_view_array);
    return { text_container_in_view_array , search_ms:(time_end - time_start) };
};



const CCS_REJECTED = "rejected";


let node_in_view_filter_clear = function()
{

let   caller = "node_in_view_filter_clear";
let log_this = DOM_SENTENCE_LOG || LOG_MAP.S2_SELECT;


    let node_array = document.querySelectorAll("."+CCS_REJECTED);
    if(!node_array.length) return;

if(log_this) log(caller+": restoring "+node_array.length+" rejected containers");
    for(let i=0; i < node_array.length; ++i)
    {
        let node = node_array[i];

        node.classList.remove( CCS_REJECTED);

        if(typeof node.title_saved != "undefined") { node.title = node.title_saved; delete       node.title_saved; }
    }
};



const FILTER_TAGS
    = [   "PRE"
        , "P"
        , "TD"
        , "TABLE"
        , "BLOCKQUOTE"
        , "DIR"
        , "DIV"
        , "DETAILS"
    ];

const NodeFilter_RETURN_VALUES
    = {   [NodeFilter.FILTER_ACCEPT] : "FILTER_ACCEPT"
        , [NodeFilter.FILTER_REJECT] : "FILTER_REJECT"
        , [NodeFilter.FILTER_SKIP  ] : "FILTER_SKIP"
    };

const TEXT_LEN_MAX = 1024;


let node_in_view_filter = function(node)
{

let log_this = DOM_SENTENCE_LOG || LOG_MAP.S2_SELECT;
let tag_this = DOM_SENTENCE_TAG || log_this;



    let why = NodeFilter.FILTER_ACCEPT;
    let why_not;



    if     ( node.style.display == "none"        ) { why = NodeFilter.FILTER_REJECT; why_not =     "DISPLAY_NONE"; }
    else if( node.tagName       == "SCRIPT"      ) { why = NodeFilter.FILTER_REJECT; why_not =      node.tagName ; }
    else if( node.tagName       == "STYLE"       ) { why = NodeFilter.FILTER_REJECT; why_not =      node.tagName ; }



    else if( node.tagName       == "TR"          ) { why = NodeFilter.FILTER_SKIP  ; why_not =      node.tagName ; }



    else if( node.style.position == "fixed"      ) { why = NodeFilter.FILTER_ACCEPT; }



    else if( node.children.length  > 0           ) {
        if(node.textContent.length > TEXT_LEN_MAX) { why = NodeFilter.FILTER_SKIP  ; why_not = "BIG_WITH_CHILDREN"; }
    }



    else if( FILTER_TAGS.includes(node.tagName)  ) { why = NodeFilter.FILTER_ACCEPT;                               }



    if(why != NodeFilter.FILTER_REJECT)
    {

        let bcr = node.getBoundingClientRect();
        if(node.children.length == 0)
        {
            if     (bcr.height < 1               ) { why = NodeFilter.FILTER_REJECT; why_not =        "NO HEIGHT"; }
            else if(bcr.width  < 1               ) { why = NodeFilter.FILTER_REJECT; why_not =         "NO WIDTH"; }
            else if(bcr.top > window.innerHeight ) { why = NodeFilter.FILTER_REJECT; why_not =           "BELLOW"; }
            else if(bcr.bottom < 0               ) { why = NodeFilter.FILTER_REJECT; why_not =            "ABOVE"; }
        }

        else if(    bcr.top > window.innerHeight ) { why = NodeFilter.FILTER_REJECT; why_not = "CONTAINER BELLOW"; }


        else if(    bcr.bottom < 0               ) { why = NodeFilter.FILTER_REJECT; why_not =  "CONTAINER ABOVE"; }


    }


if(log_this && why_not) log("node_in_view_filter("+t_util.get_n_lbl(node)+"): .. "+why_not);
if(log_this && why    ) log("node_in_view_filter("+t_util.get_n_lbl(node)+"): .. "+why    );
if(tag_this) {
    if(      why_not ) {
        t_util.add_el_class(node, CCS_REJECTED);
        node.title_saved = node.title || "";
        node.title       = node.tagName+" "+why_not;
    }
    else if( why ) {
        node.title_saved = node.title || "";
        node.title       = node.tagName+" "+NodeFilter_RETURN_VALUES[why];
    }
}

    return why;
};







const SENTENCE_DRAG_MOVED_ENOUGH =  64;
const SENTENCE_DRAG_COOLDOWN_MS  = 500;
let   sentence_drag_last_MS      =   0;

let was_on_cooldown;
let was_is_scrolling;

let t_SENTENCE_drag_DXY = function(dxy)
{

let   caller = "t_SENTENCE_drag_DXY";
let log_this = DOM_SENTENCE_LOG || LOG_MAP.EV0_LISTEN;

let tag_this = DOM_SENTENCE_TAG || log_this;


    let  this_MS = new Date().getTime();

    let time_ellapsed = (this_MS - sentence_drag_last_MS);
    let on_cooldown   = (time_ellapsed <  SENTENCE_DRAG_COOLDOWN_MS);
    let is_scrolling  = (typeof dom_scroll != "undefined") ? dom_scroll.t_scroll_is_scrolling()
        :               (typeof dom_tools  != "undefined") ? dom_tools .t_scroll_is_scrolling()
        :                                                    false;

if( tag_this && (was_on_cooldown  != on_cooldown )) log("%c  COOLDOWN", lbH+lfX[on_cooldown  ? 6:0]);
if( tag_this && (was_is_scrolling != is_scrolling)) log("%c SCROLLING", lbH+lfX[is_scrolling ? 7:0]);
    was_on_cooldown  = on_cooldown ;
    was_is_scrolling = is_scrolling;

    if( on_cooldown || is_scrolling) {
        t_tools.t_add_MOVE_ON_COOLDOWN(SENTENCE_DRAG_COOLDOWN_MS - time_ellapsed);
        sentence_drag_last_MS = this_MS;
        return  true;
    }


    let from_container = document.querySelector("."+CSS_SENTENCE_CONTAINER);

    if(!from_container)
        return false;



    let move_H_or_V  =  Math.abs(dxy.x     ) > Math.abs(dxy.y);
    let move_delta   = move_H_or_V ? dxy.x   :          dxy.y;
    let moved_enough = (Math.abs(move_delta) > SENTENCE_DRAG_MOVED_ENOUGH);

    if(!moved_enough ) {
        t_tools.t_add_NOT_MOVED_ENOUGH();
        return false;
    }
    else {
        t_tools.t_del_NOT_MOVED_ENOUGH();
    }


    let split_or_font = move_H_or_V;
    let split_delta   = (move_delta > 0) ? 1 : -1;


if( log_this) log_key_val_group(  caller
                                  , { move_delta
                                    , split_or_font
                                    , split_delta
                                  }
                                  , lfX[split_or_font ? ((split_delta > 0) ? 3:4) : ((split_delta > 0) ? 5:6)]
                                  , true);




    if( split_or_font )
    {
        t_SENTENCE_split_at_offset(from_container, split_delta);
    }


    else {
        t_SENTENCE_FONTSIZE_OFFSET( split_delta );
        t_tools.t_scrollIntoViewIfNeeded( from_container );
    }

if(tag_this) log("%c  DRAG DONE", lbb+lbH+lf3);
    t_tools.t_del_MOVE_ON_COOLDOWN();
    sentence_drag_last_MS = this_MS;
    return true;
};


let t_SENTENCE_split_at_offset = function(from_container,split_delta)
{

let   caller = "t_SENTENCE_split_at_offset";
let log_this = DOM_SENTENCE_LOG || LOG_MAP.EV0_LISTEN;




    let sibling_container = t_util.get_node_sibling_at_offset(from_container, split_delta);

if( log_this) log_key_val_group( caller+"(split_delta=["+split_delta+"])"
                                , {   from_container
                                  , sibling_container
                                });

    if( sibling_container )
    {
        t_SENTENCE_RESTORE_EL    ( from_container    );
        t_SENTENCE_SPLIT         ( sibling_container );
        t_SENTENCE_FONTSIZE_APPLY( sibling_container );
        t_SENTENCE_OUTLINE       ( sibling_container );

        t_tools.t_scrollIntoViewIfNeeded( sibling_container );
    }
};


let t_SENTENCE_OUTLINE = function(sentence_el)
{
    let sentence_container = t_util.get_el_parent_with_class(sentence_el, CSS_SENTENCE_CONTAINER);
    if( sentence_container ) sentence_container.classList.add(            CSS_OUTLINED          );
};


let t_SENTENCE_FONTSIZE_OFFSET = function(split_delta=0)
{

let   caller = "t_SENTENCE_FONTSIZE_OFFSET";
let log_this = DOM_SENTENCE_LOG || LOG_MAP.S2_SELECT;



    let num = split_delta + parseInt( e12_font_size.substring(2) );
    num     = Math.max( 1, num);
    num     = Math.min(12, num);

    e12_font_size = "fs"+num;

if( log_this) log(caller+": e12_font_size=["+e12_font_size+"]");


    let node_list = document.querySelectorAll("."+CSS_SENTENCE_CONTAINER);
    for(let i=0; i < node_list.length; ++i)
        t_SENTENCE_FONTSIZE_APPLY(node_list[i]);



    clear_popup();


    return node_list.length;
};


let t_SENTENCE_FONTSIZE_APPLY = function(container)
{
    t_util.clear_el_classList(container, E12_FONT_SIZE_LIST);

    container.classList.add( e12_font_size );

    if( container.parentElement )
        container.parentElement.style.maxHeight = "fit-content";
};







let t_SENTENCE_RESTORE_EL = function(el,e=null)
{

let   caller = "t_SENTENCE_RESTORE_EL";
let log_this = DOM_SENTENCE_LOG || LOG_MAP.S2_SELECT;
let tag_this = DOM_SENTENCE_TAG || log_this;
if( tag_this) log("%c"+caller+"("+t_util.get_n_lbl(el)+")", lbH+lf2);
if( log_this && e) log("%c type=["+e.type+"] e.target.id=["+e.target.id+"]", lbH+lf3);

    if(!el) return "";
    let consumed_by = "";

    if( check_tool_event(e) ) return consumed_by;

    let container = t_util.get_el_parent_with_class(el, CSS_SENTENCE_CONTAINER);
    if( container )
    {
        consumed_by = "RESTORING CONTAINER SPLIT SENTENCES";



        t_util.del_el_class(    container, CSS_SENTENCE_CONTAINER);
        t_util.add_el_class(    container, CSS_OUTLINED);
        t_util.del_el_class(    container, CSS_DARK);


        if( container.innerHTML_SAVED )
        {
if( tag_this) log("%c...innerHTML_SAVED=["+t_util.ellipsis(container.innerHTML_SAVED, 16)+"]", lf3);

            container.style.touchAction = "";

            container.innerHTML         =  container.innerHTML_SAVED;
            delete                         container.innerHTML_SAVED;

        }
        t_SENTENCE_SPLIT_clr_parent_theme_dark( container );

        sentence_containers.splice(sentence_containers.indexOf(container), 1);
    }


    t_util.clear_el_classList(el, E12_FONT_SIZE_LIST);

    hide_popup();


if( log_this) log_key_val_group(        caller
                               , {          el
                                 ,   container
                                 , consumed_by
                                 ,     callers : dom_log.get_callers && dom_log.get_callers()
                               }, lf8, true);

if( tag_this) log("...return ["+consumed_by+"]");
    return consumed_by;
};


let t_SENTENCE_RESTORE_ALL = function(e=null)
{

let   caller = "t_SENTENCE_RESTORE_ALL";
let log_this = DOM_SENTENCE_LOG || LOG_MAP.S2_SELECT;

let tag_this = DOM_SENTENCE_TAG || log_this;
if( tag_this) log("%c"+caller, lbH+lf2);
if( log_this && e) log("%c type=["+e.type+"] e.target.id=["+e.target.id+"]", lbH+lf3);

    if( check_tool_event(e) ) return;

    let node_list = document.querySelectorAll("."+CSS_SENTENCE_CONTAINER);
    for(let i = 0; i <      node_list.length; ++i)
        t_SENTENCE_RESTORE_EL(node_list[i], e);


};







const CHECK_TOOL_EVENT_DELAY = 250;

let check_tool_event_timer;

let t_SENTENCE_onresize = function(e=window.event)
{
    if( check_tool_event_timer ) clearTimeout( check_tool_event_timer );
check_tool_event_timer = setTimeout(check_tool_event, CHECK_TOOL_EVENT_DELAY, e);
};


let t_SENTENCE_set_theme_dark = function(state)
{
    localStorage_setItem("theme_dark", state);
};


let t_SENTENCE_get_theme_dark = function()
{
    return !!theme_dark;
};


let check_tool_event = function(e=window.event)
{

if(!e) return false;




    if(    last_container
       && (e.type == "resize")
      ) {
        t_SENTENCE_SPLIT( last_container );

        return true;
    }


    if(    last_container
       &&  e
       &&  e.target
       && (e.target.id == "dom_sentence_magnify")
      ) {
        magnified = !magnified;

        t_SENTENCE_SPLIT( last_container );

        return true;
    }


    if(    last_container
       &&  e
       &&  e.target
       && (e.target.id == "dom_sentence_theme_dark")
      ) {


        theme_dark = !theme_dark;


        localStorage_setItem("theme_dark", theme_dark);


        if((typeof dom_prop) != "undefined") dom_prop.set("theme_dark", theme_dark);


        t_SENTENCE_SPLIT( last_container );

        return true;
    }


    if(    last_container
       &&  e
       &&  e.target
       && (e.target.id == "dom_scroll_smooth")
      ) {


        scroll_smooth = !scroll_smooth;


        document.getElementsByTagName("HTML")[0] .style.scrollBehavior
            = scroll_smooth ? "smooth" : "auto";


        let distance = scroll_smooth ? 128 :  32;
        let delay    = scroll_smooth ? 500 : 250;
        window                   .scrollBy(0, distance);
        setTimeout(() => { window.scrollBy(0,-distance); }, delay);

        return true;
    }


    if(    last_container
       &&  e
       &&  e.target
       && (e.target.id == "dom_sentence_xpath_show")
      ) {
        xpath_show = !xpath_show;

        t_SENTENCE_SPLIT( last_container );

        return true;
    }

    return false;
};


let show_popup_container_shown;
let show_popup = function(container,innerHTML)
{
    if(typeof dom_popup == "undefined") return;

    if( xpath_show ) {
        show_popup_container_shown = container;
        dom_popup.log_popup({ message_HTML: innerHTML , options: "fixed" , theme_dark });
    }
    else
        show_popup_container_shown = null;
};


let clear_popup = function()
{
    if(typeof dom_popup == "undefined") return;

    let dom_popup_div = dom_popup.log_popup_div_get();
    if( dom_popup_div ) t_SENTENCE_FONTSIZE_APPLY( dom_popup_div );
};


let hide_popup = function()
{
    if(typeof dom_popup == "undefined") return;

    dom_popup.log_popup_hide();
};


let get_parent_chain = function(el)
{
    let array = [];

    while(          el.parentElement )
    {
        array.push( el.parentElement );
        el        = el.parentElement;
    }

    return array;
};





let t_store_set_state = function(label,state)
{
    if(    state != undefined)
    {
        if(state) localStorage_setItem(label, "true");
        else      localStorage_delItem(label        );
        return !!state;
    }
    else {
        return    localStorage_getItem   (label        );
    }
};

return { name : "dom_sentence"
    ,    logging : (state) => DOM_SENTENCE_LOG = t_store_set_state("DOM_SENTENCE_LOG",state)
    ,    tagging : (state) => DOM_SENTENCE_TAG = t_store_set_state("DOM_SENTENCE_TAG",state)
    ,    t_sentence_IMPORT
    ,    CSS_SENTENCE_CONTAINER

    ,    t_SENTENCE_SPLIT

    ,    t_SENTENCE_GET_SENTENCE_CONTAINERS
    ,    t_SENTENCE_GET_SENTENCE_CONTAINERS_IN_VIEWPORT
    ,    t_SENTENCE_GET_EL_CONTAINER


    ,    t_SENTENCE_RESTORE_EL
    ,    t_SENTENCE_RESTORE_ALL
    ,    t_SENTENCE_GET_EL_SENTENCE_CONTAINER
    ,    t_SENTENCE_drag_DXY
    ,    t_SENTENCE_onresize

    ,    t_SENTENCE_set_theme_dark
    ,    t_SENTENCE_get_theme_dark
    ,    t_SENTENCE_restore_text_containers_outlined


    ,    f : node_in_view_filter_clear
    ,    o : outline_text_containers_in_view
    ,    r : t_SENTENCE_restore_text_containers_outlined
};

}());




/*INLINE}}}*/
//@ sourceURL=dom_sentence.js
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

/*}}}*/
/*➔ dom_load {{{*/
let dom_load = function(_dom_load_id=DOM_LOAD_ID) /* eslint-disable-line complexity */
{
/*{{{*/
let log_this = IPC_LOG;
if( log_this) console.log(_dom_load_id+": LOADING DATA");
if( log_this) console.log(_dom_load_id+": document.contentType=["+document.contentType+"]");
/*}}}*/
    /* CHECK ALREADY LOADED CONTENT-SCRIPT {{{*/
    if(    typeof dom_log      != "undefined") {
        if(typeof dom_sentence != "undefined") console.log(_dom_load_id+": dom_sentence is already loaded");
        if(typeof dom_tools    != "undefined") console.log(_dom_load_id+   ": dom_tools is already loaded");
        return false;
    }
    /*}}}*/
/* Content-Security-Policy {{{
let csp = document.querySelectorAll("[http-equiv='Content-Security-Policy']")[0];
if( csp ) {
    console.log("%c"+csp.content, "font-size:200%; background-color:navy");
    csp.httpEquiv = "Content-Security-Policy";
    csp.content   = "default-src 'self' 'unsafe-inline' http://* https://* file://* data://*";
}
}}}*/
    let dom_load_success = true; /* the optimist at work */
    try {
/* log {{{*/
if( log_this) console.log(_dom_load_id+": LOADING DATA .. try");
if( log_this) window.addEventListener("error", load_onerror, false);
/*}}}*/
        /* LOAD CSS {{{*/
        if(    dom_load_success && document.contentType.includes("xml") ) {
            if(dom_load_success && !load_css_pi( DOM_HOST_CSS_ID        , dom_host_css_data         ) ) dom_load_success = false;
        }
        else {
            if(dom_load_success && !load_css   ( DOM_HOST_CSS_ID        , dom_host_css_data         ) ) dom_load_success = false;
        }
        /*}}}*/
        /* LOAD JS - log .. sentence {{{*/
        if(    dom_load_success && !load_js    ( "dom_log_js"           , dom_log_js_data           ) ) dom_load_success = false;
        if(    dom_load_success && !load_js    ( "dom_sentence_util_js" , dom_sentence_util_js_data ) ) dom_load_success = false;
        if(    dom_load_success && !load_js    ( "dom_scroll_js_data"   , dom_scroll_js_data        ) ) dom_load_success = false;
        if(    dom_load_success && !load_js    ( "dom_sentence_event_js", dom_sentence_event_js_data) ) dom_load_success = false;
        if(    dom_load_success && !load_js    ( "dom_sentence_js"      , dom_sentence_js_data      ) ) dom_load_success = false;
        /*}}}*/
    }
    catch(ex) {
/*{{{*/
if( log_this) console.log(_dom_load_id+": LOADING DATA .. catch");
        console.dir(ex);
        dom_load_success = false;
/*}}}*/
    }
    finally {
/*{{{*/
if( log_this) console.log(_dom_load_id+": LOADING DATA .. finally");
if( log_this) window.removeEventListener("error", load_onerror, false);
/*}}}*/
    }
/*{{{*/
if( log_this) console.log(_dom_load_id+": LOADING DATA .. [dom_load_success = "+dom_load_success+"]");
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
console.log("%c *** "+TOOLS2_SANITY_CHECK_FAILED+"%c on %c"+scheme_id+" ", lbb+lbL+lf2, lbL+lf8, lbR+lf3);

        return false;
    }
};
/*}}}*/
/*… load_js {{{*/
let load_js = function(id, scheme_arg) {
    if( !dom_check_scheme_arg("load_js", id, scheme_arg) ) { console.log("%c"+id+" %c BAD SCHEME ARG",lbL+lf2, lbR+lf2); return false; }
    if( document.getElementById(id)                      ) { console.log("%c"+id+" %c already loaded",lbL+lf3, lbR+lf3); return false; }
    let el           = document.createElement("script");
    el.id            = id;

    el.src           = scheme_arg;
    el.type          = "text/javascript";
    el.charset       = "utf-8";
    el.async         = false;
    el.defer         = true;
    el.addEventListener("error", load_onerror);

    document.getElementsByTagName("head")[0].appendChild(el);

    return true;
};
/*}}}*/
/*… load_css {{{*/
let load_css = function(id, scheme_arg) {
    if( !dom_check_scheme_arg("load_css", id, scheme_arg) ) { console.log("%c"+id+" %c BAD SCHEME ARG",lbL+lf2, lbR+lf2); return false; }
    if( document.getElementById(          id            ) ) { console.log("%c"+id+" %c already loaded",lbL+lf3, lbR+lf3); return false; }
    let el           = document.createElement("link");
    el.id            = id;

    el.href          = scheme_arg;
    el.type          = "text/css";
    el.charset       = "utf-8";
    el.rel           = "stylesheet";
    el.addEventListener("error", load_onerror);

    document.getElementsByTagName("head")[0].appendChild(el);

    return true;
};
/*}}}*/
/*… load_css_pi {{{*/
let load_css_pi = function(id, scheme_arg) {
    if( !dom_check_scheme_arg("load_css_pi", id, scheme_arg) ) { console.log("%c"+id+" %c BAD SCHEME ARG",lbL+lf2, lbR+lf2); return false; }
    if( document.getElementById(             id            ) ) { console.log("%c"+id+" %c already loaded",lbL+lf3, lbR+lf3); return false; }
    let el           = document.createProcessingInstruction("xml-stylesheet", "href='"+ scheme_arg +"' type='text/css'");
    el.id            = id;

    el.charset       = "utf-8";
    el.addEventListener("error", load_onerror);

    document.insertBefore(el, document.firstChild);

    return true;
};
/*}}}*/
/*… load_html {{{*/
let load_html = function(id, html) {
    if( !dom_check_scheme_arg("load_html", id, html) ) { console.log("%c"+id+" %c BAD SCHEME ARG",lbL+lf2, lbR+lf2); return false; }
    if( document.getElementById(           id      ) ) { console.log("%c"+id+" %c already loaded",lbL+lf3, lbR+lf3); return false; }
    let el           = document.createElement("DIV");
    el.id            = id;

    el.charset       = "utf-8";
    el.innerHTML     = unescape(html);
    el.style.display = "none";
    el.addEventListener("error", load_onerror);

    document.body.appendChild (el);

    return true;
};
/*}}}*/
/*… get_el_sheet_first_rule_text_content {{{*/
let get_el_sheet_first_rule_text_content = function(el)
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

/** LOADING */
/*{{{*/
let IPC_LOG  = false;
/*_ splitter_load {{{*/
let splitter_load_has_been_called;
let splitter_load = function(e)
{
    splitter_load_has_been_called = true;
    if(e) {
        console.log("%c "+DOM_LOAD_TAG+" HANDLING ["+e.type+"] EVENT"   , lbH+lf5);
     /* console.dir(e); */
    }
    else {
        console.log("%c "+DOM_LOAD_TAG+" HANDLING [setTimeout] CALLBACK", lbH+lf7);
    }

    /* LOAD */
    dom_load(DOM_LOAD_ID);

    /* EXEC */
    setTimeout(() => {
try {
/*{{{
    console.log("dom_sentence_js:"); console.dir(dom_sentence_js);
    console.log("dom_sentence   :"); console.dir(dom_sentence   );
}}}*/
    setTimeout(dom_sentence_event.set_mouseUP_display_state, 1000);
} catch(ex) {}
        dom_sentence      .t_sentence_IMPORT      ( IPC_LOG );
        dom_sentence_event.t_SENTENCE_add_LISTENER( IPC_LOG );
    }, 0);
};
/*}}}*/
/*_ splitter_load_check {{{*/
let splitter_load_check = function()
{
    if(!splitter_load_has_been_called)
    {
        splitter_load();
/*{{{
        window.splitter_load = splitter_load;
        console.dir( window.splitter_load );
        console.log("...you have to call %c window.splitter_load() ", lbF+lf3);
}}}*/
    }
};
/*}}}*/

if(IPC_LOG) console.log(DOM_LOAD_TAG+": LISTENING to [DOMContentLoaded] EVENT");
document.addEventListener("DOMContentLoaded", splitter_load            );

if(IPC_LOG) console.log(DOM_LOAD_TAG+": POSTING TIMEOUT [splitter_load_check]");
setTimeout(                                   splitter_load_check, 1000);

/*}}}*/

return null;
})();


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

"...           $RPROFILES/script/splitter.js
:e             $RPROFILES/script/dom_load.js

:!start /b explorer file:///C:/LOCAL/STORE/DEV/PROJECTS/RTabs/Util/RTabs_Profiles/DEV/splitter_embedded.html
"│                                                                             │
"└─────────────────────────────────────────────────────────────────────────────┘
}}}*/
