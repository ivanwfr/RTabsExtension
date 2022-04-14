/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* globals console, module, chrome */

/* exported DOM_LOG_JS_TAG */

/* eslint-disable no-warning-comments */
/* eslint-disable prefer-spread */
/* eslint-disable prefer-rest-params */

const LOG_JS_ID         = "log_js";
const LOG_JS_TAG        =  LOG_JS_ID +" (220414:17h:39)";
/*}}}*/
let log_js = (function() {
"use strict";

let log_this = false; /* eslint-disable-line no-unused-vars */

/* CSS {{{*/
const lbA  = "background-color:inherit;   color:inherit;";

const lbF  = "font-size:120%; font-weight:500; border:2px solid white;";
const lbb  = "font-size:150%; font-weight:100; margin:0 0 0 0;";
const lbB  = "font-size:300%; font-weight:100; margin:0 0 0 0;";
const lbS  = "font-size:500%; font-weight:100; margin:0 0 0 0;";

const lbH  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0 1ex 1ex   0; padding:0 .5em 0 .5em; border-radius:1em 1em 1em 1em; background:linear-gradient(to bottom, #555 0%, #223 80%, #454 100%);";
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
const lf0  = "color:#707070; text-shadow:#000 2px 2px 1px;"; /* offset-x offset-y blur-radius */
const lfX  = [ lf0 ,lf1 ,lf2 ,lf3 ,lf4 ,lf5 ,lf6 ,lf7 ,lf8 ,lf9 ];

const LOG_BG_ARR = [ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX ];
const LOG_FG_ARR = [ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX ];
const LOG_XX_ARR = [ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb           ];

/*}}}*/
/* SYM {{{*/

const SAU = "\u2191"; /* &#x2191; .. SYMBOL ARROW UP       */
const SAR = "\u2192"; /* &#x2192; .. SYMBOL ARROW RIGHT    */
const SAD = "\u2193"; /* &#x2193; .. SYMBOL ARROW DOWN     */
const SAL = "\u21AA"; /* &#x21AA; .. SYMBOL ARROW LEFT     */

const SHV = "\u26A1"; /* &#x26A1; .. HIGH VOLTAGE SIGN     */
const SYN = "\u25CF"; /* &#x25CF; .. SYMBOL BLACK CIRCLE   */
const SBS = "\u2605"; /* &#x2605; .. SYMBOL BLACK STAR     */

const SD0 = "\u24EA"; /* &#x2775; ..       CIRCLED DIGIT 0 */
const SD1 = "\u2776"; /* &#x2776; .. BLACK CIRCLED DIGIT 1 */
const SD2 = "\u2777"; /* &#x2777; .. BLACK CIRCLED DIGIT 2 */
const SD3 = "\u2778"; /* &#x2778; .. BLACK CIRCLED DIGIT 3 */
const SD4 = "\u2779"; /* &#x2779; .. BLACK CIRCLED DIGIT 4 */
const SD5 = "\u277A"; /* &#x277A; .. BLACK CIRCLED DIGIT 5 */
const SD6 = "\u277B"; /* &#x277B; .. BLACK CIRCLED DIGIT 6 */
const SD7 = "\u277C"; /* &#x277C; .. BLACK CIRCLED DIGIT 7 */
const SD8 = "\u277D"; /* &#x277D; .. BLACK CIRCLED DIGIT 8 */
const SD9 = "\u277E"; /* &#x277E; .. BLACK CIRCLED DIGIT 9 */

const L_CHK =         "✔ ";
const L_NEW =         "☀ ";

const L_ARD =         "↓ ";
const L_ARL =       "\t← ";
const L_ARR =         "→ ";
const L_ARU =         "↑ ";

const L_CLR =         "✘ ";
const L_FNC =         "f ";
const L_WRN =         "‼ ";

const SYMBOL_FUNCTION         = "\u0083"; /*  */
const SYMBOL_CHECK_MARK       = "\u2714";
const SYMBOL_NOT_CHECKED      = "\u237B";

const SYMBOL_CONSTRUCTION     = "\uD83D\uDEA7";
const SYMBOL_ROCKET           = "\uD83D\uDE80";
const SYMBOL_ASSIGN           = "\u2049";  // SYMBOL_EXCLAM_QUESTION
const SYMBOL_GEAR             = "\u2699";
const SYMBOL_THUMBS_UP        = "\uD83D\uDC4D";

const LOG_SXX = [SAU, SAR, SAD, SAL, SHV, SYN, SBS, SD0, SD1, SD2, SD3, SD4, SD5, SD6, SD7, SD8, SD9];
const LOG_CHR = [L_CHK, L_NEW, L_ARD, L_ARL, L_ARR, L_ARU, L_CLR, L_FNC, L_WRN];
const LOG_SYM = [SYMBOL_FUNCTION, SYMBOL_CHECK_MARK, SYMBOL_NOT_CHECKED, SYMBOL_CONSTRUCTION, SYMBOL_ROCKET, SYMBOL_ASSIGN, SYMBOL_GEAR, SYMBOL_THUMBS_UP];

/*}}}*/
/* CHAR {{{*/
const LF        = String.fromCharCode(10);

/*}}}*/
/* LOG_UTIL {{{*/
/*➔ log_socket {{{*/
let log_socket = function(socket)
{
    log(  "...WebSocket:\n"
        + "   ┌ socket.url                 .. "+ socket.url     +"\n"
        + "   └ socket.version             .. "+ socket.version +"\n"
       );

    if(             socket.request )
        log_request(socket.request);
};
/*}}}*/
/*➔ log_request {{{*/
/*{{{*/
const R_CAPITAL     = "\\s*[A-Z]\\S+";
const R_PARENTH     = "\\s+\\([^\\)]+\\)";
const regexp_UA     = new RegExp("(("+R_CAPITAL+")("+R_PARENTH+")*)", "g");

const R_LINE_INDENT = "   │ request.headers.user-agent  ➔";
/*}}}*/
let log_request = function(request)
{

    let user_agent = (" "+request.headers['user-agent']).replace(regexp_UA, "\n"+R_LINE_INDENT+"$&"); /* eslint-disable-line quotes */

    log(  "...request:\n"
        + "   ┌ request.url                .. "+ request.url                +"\n"
        + "   │ request.method             .. "+ request.method             +"\n"
        + "   │ request.headers.host       .. "+ request.headers.host       +"\n"
        + "   │ request.headers.origin     .. "+ request.headers.origin
        +       user_agent +"\n"
        + "   │ request.headers.connection .. "+ request.headers.connection +"\n"   // The Upgrade header field is used by clients to invite the server to switch to one of the listed protocols
        + "   └ request.headers.upgrade    .. "+ request.headers.upgrade
       );
};
/*}}}*/

/*➔ log_caller {{{*/
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
    return  ex_stack;
};
/*}}}*/
/*_ parse_ex_stack_FUNC_FILE_LINE_COL {{{*/
/*{{{
ReferenceError: exception is not defined
    at XXX1 (file:///.../XXX5.js:12558:38)
    at XXX2 (file:///.../XXX5.js:12497:5)
    at XXX3 (file:///.../XXX5.js:13273:5)
    at XXX4 (file:///.../XXX5.js:2697:5)

/\v\s*at\s*(\S+)\s+\((.+):(\d+):(\d+)
/\v\s*at\s*\zs(\S+)\ze\s+\((.+):(\d+):(\d+)
/\v\s*at\s*(\S+)\s+\(\zs(.+)\ze:(\d+):(\d+)
/\v\s*at\s*(\S+)\s+\((.+):\zs(\d+)\ze:(\d+)
/\v\s*at\s*(\S+)\s+\((.+):(\d+):\zs(\d+)\ze
}}}*/
/*.....................................................func.........file...............line....col..........*/

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
        sym = L_ARU; /* past first line arrow */
    }

    if( !result.includes(LF) ) result += LF + sym +" ... (async)";

    return result;
};
/*}}}*/
/*_ get_ex_stack_line_match {{{*/
/*................................................at    (FILE__).....\( FILE_PATH____).(\......(LINE ).(COL  )*/
const regexp_FUNC_FILE_LINE_COL = new RegExp("\\s*at\\s*([^\\(]+)\\s+\\((?:[^\\/]*\\/)*(\..+?):(\\d+?):(\\d+?)");
/*{{{
const regexp_FUNC_FILE_LINE_COL = new RegExp("\\s*at\\s*([^\\(]+)\\s+\\(([^\\/]*\\/)*(\\w+\\.\\w*):(\\d+):(\\d+)");
}}}*/

let get_ex_stack_line_match = function(ex_stack_line)
{
    let matches = regexp_FUNC_FILE_LINE_COL.exec(ex_stack_line);

    if(!matches ) return "";

    let func = matches[1].replace("Object.","");
    let file = matches[2];
    let line = matches[3];
    let col  = matches[4];
    let match= mPadStart(func, 48)+".. "+file+" "+line+":"+col;

/*{{{
log(ex_stack_line);
log("...... matches[1]=["+matches[1]+"]");
log("...... matches[2]=["+matches[2]+"]");
log("...... matches[3]=["+matches[3]+"]");
log("...... matches[4]=["+matches[4]+"]");
log("...... matches[5]=["+matches[5]+"]");
log("...... matches[6]=["+matches[6]+"]");
log("..match..........=["+match     +"]");
}}}*/
    return match;
};
/*}}}*/

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
    if(!o) log(o_name+": %c null object ", lxx);

    if(collapsed) console.groupCollapsed("%c"+o_name+" "+SAD, lbR+lxx);
    else          console.group         ("%c"+o_name+" "+SAD, lbR+lxx);

    //let tdata = "";

    if(typeof o != "object") { log("%c "+o_name+" %c IS NOT AN OBJECT ", lb4+lf2, lb2+lf4); return; }

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
    if(!o) log(o_name+": %c null object ", lxx);

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
/*➔ log_key_val {{{*/
let log_key_val       = function(name, o, lxx       ) { return log_key_val_group(name, o, lxx, true); };
let log_key_val_group = function(name, o, lxx, group)
{
    if(!o) {
        log(name+": %c null object ", (lxx || lb0));
        return "";
    }

/*{{{                  log("%c"+name, lbH+(lxx || lb0)); }}}*/

    if(group) console.groupCollapsed("  %c"+ name+" ...", (lxx || lb0));
    else      console.log           ("  %c"+ name       , (lxx || lb0));

    let result = "";

    if( Array.isArray(o) )
    {
        console.table(o);
/*{{{
        console.log(result);
        console.dir(o);
}}}*/
        Array.from(o).forEach(
                              (value,index) => {
                                  result += (index ? LF:"")
                                      +      index +" .. "
                                      +((value.key && value.val)
                                        ?    "{ key:"+mPadEnd(value.key,32)
                                        +    ", val:"+value.val
                                        +    "}"
                                        :    value.toString()
                                       );
                              });
    }
    else {

        let n = 1;
        Object.keys(o).forEach( /*..................... [OWN PROPERTY] NAMES */
                                function(key) {
                                    let val = o[key];
                                    let lbV =    (val          ==  null        ) ?     lb0 /* NULL      */
                                        :        (val          ==  undefined   ) ?     lb0 /* UNDEFINED */
                                        :        (val          ==  "null_node" ) ?     lb0 /* NULL_NODE */
                                        :        (val          ==  "NO"        ) ?     lf3 /* NOTHING   */
                                        :        (val          ==  "[]"        ) ?     lf3 /* NOTHING   */
                                        :        (val          ==  false       ) ?     lf3 /* FALSE     */
                                        :        (val          ==  true        ) ?     lb5 /* TRUE      */
                                        :        (typeof val   == "object"     ) ?     lb7 /* OBJECT    */
                                        :  String(val).startsWith( L_NEW       ) ? lbH+lf9 /* CHANGED   */
                                        :  String(val).startsWith( L_CHK       ) ?     lf8 /* CHECKED   */
                                        :  String(val).includes  ( LF          ) ? lbF+lf5 /* SUBSTANCE */
                                        :  String(val).includes  ( " "         ) ? lbH+lf5 /* ONE_LINER */
                                        :                                              lf4 /* SOMETHING */
                                    ;
                                    let ovf = log_object_val_format(o[key], true);

                                    let laa = ovf.includes("%c") ? lb0 : ""; /* f(log_object_val_format .. parse_ex_stack_FUNC_FILE_LINE_COL) */

                                    log(     " %c|||%c "+mPadStart(   key, 36) +" %c"+ovf, lb0,(lxx || lb0), lbV, laa);

                                    result +=   "||| "  +             key      +" <em class='cc"+(++n)+"'>"+ ovf   +"</em><br>"+LF       ;
                                }
                              );
    }
    if(group) console.groupEnd();
    return result;
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
let regexp_URL_64 = new RegExp('"url":"([^"]{1,64})[^"]*"', "g"); /* eslint-disable-line quotes */
let log_json = function(val)
{
    if(val == null     ) return "null";
    if(val == undefined) return "undefined";
    if(val.id          ) return "#"+val.id;
    if(val.tagName     ) return     val.tagName;

    return JSON.stringify(val)
        .   replace(regexp_URL_64, '"url":"$1..."') /* eslint-disable-line quotes */
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
    "LOG0_TAG" : 0,  "0" : 0
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
let log_sep_top = function(arg_line="", log_tag="")
{
//  console.time(arg_line);
    console.groupCollapsed("%c "+arg_line, STYLE_TOP + STYLE_BG_TOP[LOG_TAGS[log_tag]]);
};
let log_sep_bot = function(arg_line="", log_tag="")
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
let log_permission = function(script_id, namespace, functionality, permission, logging=true)
{
    if(namespace != undefined)
    {
if(logging) log("%c "+script_id+" %c "+functionality+' %c ... manifest permission specified %c "'+permission+'" ', lbL,lbC,     lbC+lf5,     lbR+lf5); /* eslint-disable-line quotes */ /* eslint-disable-line quotes */

        return true;
    }
    else {
log("%c "+script_id+" %c "+functionality+' %c *** manifest permission required  %c "'+permission+'" ', lbL,lbR, lbb+lbL+lf2, lbb+lbR+lf2); /* eslint-disable-line quotes */

        return false;
    }
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
const DIRECTIVE_REGISTRY = "\\w+-src|\\w+-uri|disown-opener|form-action|frame-ancestors|plugin-types|report-to|sandbox|block-all-mixed-content";
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
let clear = function(pausable)
{
    console.clear();

  //logn();

    if( pausable.l_paused )
        log_pause( pausable );

    return chrome.runtime.lastError
        ?  chrome.runtime.lastError.message
        :  SYMBOL_CHECK_MARK+" CLEARED";
};
/*}}}*/
/*_ pause {{{*/
let pause = function(pausable)
{
    pausable.l_paused = !pausable.l_paused;

    log_pause( pausable );

    let sym = pausable.l_paused
        ?      SYMBOL_CHECK_MARK
        :      SYMBOL_NOT_CHECKED
    ;

    return chrome.runtime.lastError
        ?  chrome.runtime.lastError.message
        :  sym
    ;
};
let log_pause = function( pausable )
{
    let id = pausable.id ? pausable.id :LOG_JS_ID;

    if(pausable.l_paused) log(SYMBOL_CONSTRUCTION +"%c "+ id +" PAUSED  ", lbb+lb0+lf3);
    else                  log(SYMBOL_CONSTRUCTION +"%c "+ id +" RUNNING ", lbb+lb0+lf5);
};
/*}}}*/
/*_ reload {{{*/
let reload = function()
{
    chrome.runtime.reload();
};
/*}}}*/
/*}}}*/
/* EXPORT {{{*/
return { clear
    ,    ellipsis
    ,    get_callers
    ,    get_ex_stack_line_match
    ,    log
    ,    logXXX
    ,    log_CSP
    ,    log_SYN
    ,    log_caller
    ,    log_console_clear
    ,    log_json
    ,    log_key_val
    ,    log_key_val_group
    ,    log_members
    ,    log_object
    ,    log_object_val_format
    ,    log_pause
    ,    log_permission
    ,    log_sep_bot
    ,    log_sep_top
    ,    log_socket
    ,    mPadEnd
    ,    mPadStart
    ,    parse_ex_stack_FUNC_FILE_LINE_COL
    ,    pause
    ,    reload
    ,    strip_CR_LF
    ,    strip_QUOTE
    ,    truncate

    ,    LOG_BG_ARR
    ,    LOG_FG_ARR
    ,    LOG_XX_ARR

    ,    LOG_SXX
    ,    LOG_CHR
    ,    LOG_SYM
};
/*}}}*/
})();

if(log_js.log_this) console.log("%c XXX LOADING "+LOG_JS_TAG, "color:lime; font-size:200%;");

try { module.exports = log_js; } catch(ex) { /*console.log(ex);*/ } /* server.js require */

// $LOCAL/STORE/DEV/PROJECTS/RTabs/Util/RTabs_Profiles/DEV/javascript/dom_log.js

