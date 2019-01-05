"use strict";
/* ECC {{{*/
const lbA  = "background-color:inherit;   color:inherit;";

const lbF  = "font-size:120%; font-weight:500; border:2px solid white;";
const lbb  = "font-size:150%; font-weight:900; margin:0 0 0 0;";
const lbB  = "font-size:500%; font-weight:900; margin:0 0 0 0;";
const lbS  = "font-size:800%; font-weight:900; margin:0 0 0 0;";

const lbH  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0 1ex 1ex   0; padding:0 .5em 0 .5em; border-radius:1em 1em 1em 1em; background:linear-gradient(to bottom, #000 0%, #223 50%, #000 100%);";
const lbL  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0   0   0 1ex; padding:0 .5em 0 .5em; border-radius:1em   0   0 1em; background:linear-gradient(to   left, #333 0%           ,#445 100%);";
const lbR  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0 1ex   0   0; padding:0 .5em 0 .5em; border-radius:  0 1em 1em   0; background:linear-gradient(to  right, #333 0%           ,#544 100%);";
const lbC  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0   0   0   0; padding:0 .5em 0 .5em; border-radius:  0   0   0   0;";

const lb1  = "background-color:#964B00DD; color:black;";
const lb2  = "background-color:#FF0000DD; color:black;";
const lb3  = "background-color:#FFA500DD; color:black;";
const lb4  = "background-color:#FFFF00DD; color:black;";
const lb5  = "background-color:#9ACD32DD; color:black;";
const lb6  = "background-color:#6495EDDD; color:black;";
const lb7  = "background-color:#EE82EEDD; color:black;";
const lb8  = "background-color:#A0A0A0DD; color:black;";
const lb9  = "background-color:#FFFFFFDD; color:black;";
const lb0  = "background-color:#000000DD; color:gray;";
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
/* SYM {{{*/

let SAU = "\u2191"; /* &#x2191; .. SYMBOL ARROW UP       */
let SAR = "\u2192"; /* &#x2192; .. SYMBOL ARROW RIGHT    */
let SAD = "\u2193"; /* &#x2193; .. SYMBOL ARROW DOWN     */
let SAL = "\u21AA"; /* &#x21AA; .. SYMBOL ARROW LEFT     */

let SHV = "\u26A1"; /* &#x26A1; .. HIGH VOLTAGE SIGN     */
let SYN = "\u25CF"; /* &#x25CF; .. SYMBOL BLACK CIRCLE   */
let SBS = "\u2605"; /* &#x2605; .. SYMBOL BLACK STAR     */

let SD0 = "\u24EA"; /* &#x2775; ..       CIRCLED DIGIT 0 */
let SD1 = "\u2776"; /* &#x2776; .. BLACK CIRCLED DIGIT 1 */
let SD2 = "\u2777"; /* &#x2777; .. BLACK CIRCLED DIGIT 2 */
let SD3 = "\u2778"; /* &#x2778; .. BLACK CIRCLED DIGIT 3 */
let SD4 = "\u2779"; /* &#x2779; .. BLACK CIRCLED DIGIT 4 */
let SD5 = "\u277A"; /* &#x277A; .. BLACK CIRCLED DIGIT 5 */
let SD6 = "\u277B"; /* &#x277B; .. BLACK CIRCLED DIGIT 6 */
let SD7 = "\u277C"; /* &#x277C; .. BLACK CIRCLED DIGIT 7 */
let SD8 = "\u277D"; /* &#x277D; .. BLACK CIRCLED DIGIT 8 */
let SD9 = "\u277E"; /* &#x277E; .. BLACK CIRCLED DIGIT 9 */

/*}}}*/
/* MARK {{{*/
let SYMBOL_FUNCTION         = "\u0083"; /* ƒ */
let SYMBOL_CHECK_MARK       = "\u2714";
let SYMBOL_NOT_CHECKED      = "\u237B";

let SYMBOL_CONSTRUCTION     = "\uD83D\uDEA7";
let SYMBOL_ROCKET           = "\uD83D\uDE80";
let SYMBOL_ASSIGN           = "\u2049";  // SYMBOL_EXCLAM_QUESTION
let SYMBOL_GEAR             = "\u2699";
let SYMBOL_THUMBS_UP        = "\uD83D\uDC4D";

/*}}}*/
/* LOG_UTIL {{{*/
/* log {{{*/
let log = function()
{
/*{{{
- [arguments] variable is not an array
- it's an array-like structure.
- if full Array functionality is needed
- this can be achieved in the following way:
- var argumentsArray = Array.prototype.slice.apply( arguments );
}}}*/
    console.log.apply(console, Array.prototype.slice.call(arguments));
};
/*}}}*/
/* strip_QUOTE {{{*/
let regexp_QUOTE = new RegExp("[\\u0022\\u0027]", "g"); /* "' */
let strip_QUOTE = function(text)
{
    return text
        .   replace(regexp_QUOTE,  " ")
        .   trim()
    ;
};
/*}}}*/
/* logXXX {{{*/
let logXXX = function()
{
    arguments[0] = "XXX "+arguments[0];
    console.log.apply(console, Array.prototype.slice.call(arguments));
};
/*}}}*/
/* strip_CR_LF {{{*/
let regexp_CR     = new RegExp("\\r"  , "g");
let regexp_LF     = new RegExp("\\n *", "g");
let regexp_COMMA  = new RegExp(" *, *", "g");
let strip_CR_LF   = function(text)
{
    return text
        .   replace(regexp_CR,  "")
        .   replace(regexp_LF, " ")
        .   trim()
    ;
};
/*}}}*/
/* log_members {{{*/
let log_members = function(o_name, o, lxx=lb0, collapsed=true)
{
    if(!o) {
        log(o_name+": %c null object ", lxx);
        return "";
    }

  //log("%c"+o_name+" "+SAD, lbR+lxx);

    if(collapsed) console.groupCollapsed("%c"+o_name+" "+SAD, lbR+lxx);
    else          console.group         ("%c"+o_name+" "+SAD, lbR+lxx);

    //let tdata = "";

    Object.keys(o).forEach(
        function(key) {
            let val = o[key];
            let lbV =    (val == true            ) ? lb5
                :        (val == false           ) ? lb6
                : (String(val).indexOf("\n") >= 0) ? lbH+lf5
                :                                    lb0
            ;
            log(" %c|||%c "+key+"=%c"+log_object_val_format(o[key]), lb0,lxx,lbV);

            //tdata    += "["+key+"]=["+o[key]+"]";
        }
    );
  //log("%c"+o_name+" "+SAU, lbR+lxx);
    console.groupEnd("%c"+o_name+" "+SAU, lbR+lxx);

    //return tdata;
};
/*}}}*/
/* log_object {{{*/
let log_object = function(o_name, o,lxx=lb0)
{
    if(!o) {
        log(o_name+": %c null object ", lxx);
        return "";
    }

    let txt = "";
    txt += SAD+" "+o_name+"\n";
    Object.keys(o).forEach(
        function(key) {
            txt += " "+key+"="+log_object_val_format(o[key])+"\n";

          //tdata    += "["+key+"]=["+o[key]+"]";
        }
    );
    txt += SAU+" "+o_name+"\n";

    log("%c" + txt, lbR+lxx);
};
/*}}}*/
/*_ log_object_val_format {{{*/
let log_object_val_format = function(val)
{
    let                                  text = String(val);
    if     ( !text                     ) text = "[]";
    else if(  typeof val == "object"   ) text = log_json(val);
    else if(  typeof val == "function" ) text = SYMBOL_FUNCTION +" "+ (val.name || "anonymous");
    else if(  text.indexOf("\n") >= 0  ) text = text.replace(regexp_LF,"\n");
    return    text;
};
/*}}}*/
/* log_json {{{*/
let regexp_BRACES = new RegExp("^{|}$"                    , "g");
let regexp_BSLASH = new RegExp("\\\\"                     , "g");
let regexp_URL_64 = new RegExp('"url":"([^"]{1,64})[^"]*"', "g");
let log_json = function(val)
{
    if(val == null     ) return "null";
    if(val == undefined) return "undefined";
    if(val.id          ) return "#"+val.id;
    if(val.tagName     ) return     val.tagName;

    return JSON.stringify(val)
        .   replace(regexp_URL_64, '"url":"$1..."')
        .   replace(regexp_BRACES, "")
        .   replace(regexp_QUOTE , "")
        .   replace(regexp_BSLASH, "")
        .   trim()
        .   replace(regexp_COMMA ,"\n")
    ;
};

/*}}}*/

/*_ LOG_TAGS {{{*/
let  LOG_TAGS  = {
    "LOG1_TAG" : 1,  "1" : 1,
    "LOG2_TAG" : 2,  "2" : 2,
    "LOG3_TAG" : 3,  "3" : 3,
    "LOG4_TAG" : 4,  "4" : 4,
    "LOG5_TAG" : 5,  "5" : 5,
    "LOG6_TAG" : 6,  "6" : 6,
    "LOG7_TAG" : 7,  "7" : 7,
    "LOG8_TAG" : 8,  "8" : 8,
    "LOG9_TAG" : 9,  "9" : 9,
    "LOG0_TAG" : 0,  "0" : 0,
   };

/*}}}*/

/* STYLE_TOP STYLE_BOT {{{*/
/*{{{
const STYLE_TOP = "font-weight:900; border:1px #0ff3 solid; border-radius:3em 3em .1em .1em; padding:  0 80% 8em 2em; background:linear-gradient(to bottom, #00F2 0%, #0082 100%);";
const STYLE_BOT = "color:#0FF8;     border:1px #0ff3 solid; border-radius:.1em .1em 3em 3em; padding:8em 80% 0em 2em; background:linear-gradient(to    top, #0042 0%, #0040 100%);";
const STYLE_TOP = "font-weight:900; border:0px #000 solid; border-radius:2em 2em .1em .1em; padding:  0 1em 1em 2em; overflow:visible;";
const STYLE_BOT = "color:#0FF8;     border:0px #000 solid; border-radius:.1em .1em 2em 2em; padding:1em 1em 0em 2em; overflow:visible;";
const STYLE_TOP = "font-weight:900; border:1px #000 solid; border-radius:2em 2em .1em .1em; padding:  0 20% 8em 2em;";
const STYLE_BOT = "color:#0FF8;     border:1px #000 solid; border-radius:.1em .1em 2em 2em; padding:8em 20% 0em 2em;";
}}}*/
const STYLE_TOP = "font-weight:900; border:1px #000 solid; border-radius:2em 2em .1em .1em; padding:  0 20% 2em 2em;";
const STYLE_BOT = "color:#0FF8;     border:1px #000 solid; border-radius:.1em .1em 2em 2em; padding:2em 20% 0em 2em;";

const STYLE_BG_TOP=[];
      STYLE_BG_TOP [1] = " background:linear-gradient(to bottom, #964B0060 0%, #2222 100%); border-bottom: 2px solid #964B00;";
      STYLE_BG_TOP [2] = " background:linear-gradient(to bottom, #FF0000   0%, #2222 100%); border-bottom: 2px solid #FF0000;";
      STYLE_BG_TOP [3] = " background:linear-gradient(to bottom, #FFA50060 0%, #2222 100%); border-bottom: 2px solid #FFA500;";
      STYLE_BG_TOP [4] = " background:linear-gradient(to bottom, #FFFF0060 0%, #2222 100%); border-bottom: 2px solid #FFFF00;";
      STYLE_BG_TOP [5] = " background:linear-gradient(to bottom, #9ACD3260 0%, #2222 100%); border-bottom: 2px solid #9ACD32;";
      STYLE_BG_TOP [6] = " background:linear-gradient(to bottom, #6495ED60 0%, #2222 100%); border-bottom: 2px solid #6495ED;";
      STYLE_BG_TOP [7] = " background:linear-gradient(to bottom, #EE82EE60 0%, #2222 100%); border-bottom: 2px solid #EE82EE;";
      STYLE_BG_TOP [8] = " background:linear-gradient(to bottom, #A0A0A060 0%, #2222 100%); border-bottom: 2px solid #A0A0A0;";
      STYLE_BG_TOP [9] = " background:linear-gradient(to bottom, #FFFFFF   0%, #2222 100%); border-bottom: 2px solid #FFFFFF;";
      STYLE_BG_TOP [0] = " background:linear-gradient(to bottom, #000000   0%, #2222 100%); border-bottom: 2px solid #000000;";

const STYLE_BG_BOT=[];
      STYLE_BG_BOT [1] = " background:linear-gradient(to    top, #964B0060 0%, #2222 100%); border-top   : 2px solid #964B00;";
      STYLE_BG_BOT [2] = " background:linear-gradient(to    top, #FF0000   0%, #2222 100%); border-top   : 2px solid #FF0000;";
      STYLE_BG_BOT [3] = " background:linear-gradient(to    top, #FFA50060 0%, #2222 100%); border-top   : 2px solid #FFA500;";
      STYLE_BG_BOT [4] = " background:linear-gradient(to    top, #FFFF0060 0%, #2222 100%); border-top   : 2px solid #FFFF00;";
      STYLE_BG_BOT [5] = " background:linear-gradient(to    top, #9ACD3260 0%, #2222 100%); border-top   : 2px solid #9ACD32;";
      STYLE_BG_BOT [6] = " background:linear-gradient(to    top, #6495ED60 0%, #2222 100%); border-top   : 2px solid #6495ED;";
      STYLE_BG_BOT [7] = " background:linear-gradient(to    top, #EE82EE60 0%, #2222 100%); border-top   : 2px solid #EE82EE;";
      STYLE_BG_BOT [8] = " background:linear-gradient(to    top, #A0A0A060 0%, #2222 100%); border-top   : 2px solid #A0A0A0;";
      STYLE_BG_BOT [9] = " background:linear-gradient(to    top, #FFFFFF   0%, #2222 100%); border-top   : 2px solid #FFFFFF;";
      STYLE_BG_BOT [0] = " background:linear-gradient(to    top, #000000   0%, #2222 100%); border-top   : 2px solid #000000;";
/*}}}*/
/*_ log_sep_top log_sep_bot  {{{*/
let log_sep_top = function(arg_line="", log_tag)
{
//  console.time(arg_line);
    console.groupCollapsed("%c "+arg_line, STYLE_TOP + STYLE_BG_TOP[LOG_TAGS[log_tag]]);
};
let log_sep_bot = function(arg_line="", log_tag)
{
    console.groupEnd();
//  console.timeEnd(arg_line);
    console.log("%c "+arg_line, STYLE_BOT + STYLE_BG_BOT[LOG_TAGS[log_tag]]);
};

/*}}}*/

/*_ log_console_clear {{{*/
const CLEAR_CONSOLE_INTERVAL = 1000; /* ms */
let last_call_time    = 0;
let log_console_clear = function(_caller)
{
if(LOG_MAP.B_LOG3_PRESERVE) return;

    /* DEBOUNCING {{{*/
    let this_time = new Date().getTime() % 86400000;
    if((this_time - last_call_time) < CLEAR_CONSOLE_INTERVAL)
    {
        log("%c"+_caller+" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - CONSOLE CLEAR BURST PREVENTED"
            , "color:gray; font-style:italic;");

        last_call_time = this_time; // and start over from there
        return;
    }
    last_call_time = this_time;
    /*}}}*/
    console.clear();
    log("%c...cleared by "+_caller+"", "color:gray; font-style:italic;");
};
/*}}}*/
/*_ log_SYN {{{*/
let log_SYN = function(msg, val)
{
    if(val) log(SYN+" %c "+msg+" %c "+val+"", lb0, lb8);
    else    log(SYN+" %c "+msg              , lb0     );
};
/*}}}*/
/*_ log_permission {{{*/
let log_permission = function(script_id, namespace, functionality, permission)
{
    if(namespace != undefined)
    {
        log("%c "+script_id+"%c"+functionality+" ", lbH+lf9, lbH);
        return true;
    }
    log("%c "+script_id+': %c '+ functionality +' %c ...manifest permission required: %c "'+permission+'" ', lb5, lbR, lb0, lbR+lf2);
    return false;
};
/*}}}*/
/*_ ellipsis {{{*/
let HORIZONTAL_ELLLIPSIS = "\u2026";
let ellipsis = function(msg, length=64)
{
    msg = String(msg);
    return (msg.length <= length)
        ?   msg
        :   msg.substring(0, length-3)+HORIZONTAL_ELLLIPSIS
    ;
};
/*}}}*/
/*_ truncate {{{*/
let truncate = function(msg, length=80)
{
    msg = strip_CR_LF( String(msg) );
    return (msg.length <= length)
        ?   msg
        :   msg.substring(0, length-3)+"..."
    ;
};
/*}}}*/
/*_ mPadStart {{{*/
let mPadStart = function(s,l,c=" ") { s = String(s); while(s.length < l) s = c+s; return s; };
/*}}}*/
/*_ mPadEnd{{{*/
let mPadEnd   = function(s,l,c=" ") { s = String(s); while(s.length < l) s = s+c; return s; };
/*}}}*/
/*_ log_CSP {{{*/
const DIRECTIVE_REGISTRY = "\\w+-src|\\w+-uri|disown-opener|form-action|frame-ancestors|plugin-types|report-to|sandbox|block-all-mixed-content"
let regexp_DIRR = new RegExp("("+DIRECTIVE_REGISTRY+")(.*)","g");
let regexp_SEMI = new RegExp("\\s*;\\s*"                   ,"g");
let log_CSP = function(title, csp)
{
    log("%c "+ title +":\n", lbH);

    let lines = csp.replace(regexp_SEMI, "\n").match(/[^\r\n]+/g) || [];

    let num = 0;
    lines.forEach(function(line) {
            log((++num) +" "+ line.replace(regexp_DIRR, "%c $1 %c $2"), lb4, lb0);
        });
};
/*}}}*/
/*}}}*/
/* CONSOLE COMMANDS .. [clear pause reload] {{{*/
/*_ clear {{{*/
let clear = function()
{
    console.clear();

  //logn();

    if( l_paused )
        log_pause();

    return chrome.runtime.lastError
        ?  chrome.runtime.lastError.message
        :  SYMBOL_CHECK_MARK+" CLEARED";
    ;
};
/*}}}*/
/*_ pause {{{*/
let l_paused;
let pause = function()
{
    l_paused = !l_paused;

    log_pause();

    let sym = l_paused
        ?      SYMBOL_CHECK_MARK
        :      SYMBOL_NOT_CHECKED
    ;

    return chrome.runtime.lastError
        ?  chrome.runtime.lastError.message
        :  sym
    ;
};
let log_pause = function()
{
    if(l_paused) log(SYMBOL_CONSTRUCTION +"%c "+B_SCRIPT_ID+" PAUSED  ", lbb+lb0+lf3);
    else         log(SYMBOL_CONSTRUCTION +"%c "+B_SCRIPT_ID+" RUNNING ", lbb+lb0+lf5);
};
/*}}}*/
/*_ reload {{{*/
let reload = function()
{
    chrome.runtime.reload();
};
/*}}}*/
/*}}}*/

