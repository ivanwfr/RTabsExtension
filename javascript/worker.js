// ┌───────────────────────────────────────────────────────────────────────────┐
// │ worker_js ................................. ....... SERVICE WORKER SCRIPT │
// └───────────────────────────────────────────────────────────────────────────┘
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare              */

/* globals console, chrome                  */
/* globals importScripts                    */
/* globals log_js                           */
/* globals background_js, popup_js          */
/* globals popup_js                         */
/* globals bg_store                         */

/* globals  B_SCRIPT_TAG                    */
/* globals  BG_CONTENT_SCRIPT_TAG           */
/* globals  BG_CSP_SCRIPT_TAG               */
/* globals  BG_HEADER_SCRIPT_TAG            */
/* globals  BG_MESSAGE_SCRIPT_TAG           */
/* globals  BG_PAGE_SCRIPT_TAG              */
/* globals  BG_SETTINGS_SCRIPT_TAG          */
/* globals  BG_STORE_SCRIPT_TAG             */
/* globals  BG_TABS_SCRIPT_TAG              */

/* exported S_SCRIPT_TAG                    */
/* exported worker_js, sw                   */

/* eslint-disable no-warning-comments       */
/* eslint-disable prefer-spread             */
/* eslint-disable prefer-rest-params        */
/* eslint-disable valid-jsdoc               */
/* eslint-enable  no-redeclare              */
/* eslint-enable  no-unused-vars */

const    S_SCRIPT_ID         = "worker_js";
const    S_SCRIPT_TAG        =  S_SCRIPT_ID +" (231026:19h:28)";
/*}}}*/
// ┌───────────────────────────────────────────────────────────────────────────┐
// │ SERVICE WORKER                                                            │
// └───────────────────────────────────────────────────────────────────────────┘
/* ┌─────────────────────────────┐
:e javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_event.js
:e javascript/bg_header.js
:e javascript/bg_message.js
:e javascript/bg_page.js
:e javascript/bg_settings.js
:e javascript/bg_store.js
:e javascript/bg_tabs.js
:e javascript/options.js
:e javascript/popup.js
"● javascript/worker.js
/* └─────────────────────────────┘*/
let worker_js;
    worker_js = (function() {
"use strict";
let WORKER_LOG  = true;//FIXME

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ [importScripts]                                                           │
// └───────────────────────────────────────────────────────────────────────────┘
/* IMPORT {{{*/
/* importScripts {{{*/
/*{{{*/
const WORKER_LOG_CSS
    = "font-size    : 200%;"
    + "border       : 1px solid white;"
    + "border-radius: 1em;"
    + "padding      : 0 0.5em;"
    + "background-color: black;"
    ;
if(WORKER_LOG) console.log("%c"+S_SCRIPT_TAG+" ● importScripts", WORKER_LOG_CSS);

/*}}}*/
importScripts("log.js"        );

importScripts("bg_content.js" );
importScripts("bg_csp.js"     );
importScripts("bg_event.js"   );
importScripts("bg_header.js"  );
importScripts("bg_message.js" ); /* will call <script>.logging() */
importScripts("bg_page.js"    );
importScripts("bg_settings.js");
importScripts("bg_store.js"   );
importScripts("bg_tabs.js"    );

importScripts("background.js" );
//(WORKER_LOG) console.log(S_SCRIPT_TAG+" ● importScripts: ...DONE");
/*}}}*/
/* modules {{{*/
/*_ log_js {{{*/
/* eslint-disable no-unused-vars */

let   LF;

let   lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let   lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let   lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;

//t   SD0 ,SD1 ,SD2 ,SD3 ,SD4 ,SD5 ,SD6 ,SD7 ,SD8 ,SD9;
//t   SAU, SAR, SAD, SAL, SHV, SYN, SBS;
//t   L_CHK, L_NEW, L_ARD, L_ARL, L_ARR, L_ARU, L_CLR, L_FNC, L_WRN;
//t   SYMBOL_FUNCTION, SYMBOL_CHECK_MARK, SYMBOL_NOT_CHECKED, SYMBOL_CONSTRUCTION, SYMBOL_ROCKET, SYMBOL_ASSIGN, SYMBOL_GEAR, SYMBOL_THUMBS_UP;

/* eslint-enable  no-unused-vars */
/*}}}*/
/*}}}*/
/*  _import {{{*/
let _import = function()
{
    let modules=[ log_js        ]; /*{{{*/
    [ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX ] = log_js.LOG_BG_ARR;
    [ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb           ] = log_js.LOG_XX_ARR;
    [ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX ] = log_js.LOG_FG_ARR;
    /*}}}*/
    log_js.log_import(worker_js, modules);
};
/*}}}*/
    setTimeout(_import,0);
/*}}}*/
/* LOGGING {{{*/
/*_ logging {{{*/
let logging = function(state)
{
    if(    state != undefined) {                WORKER_LOG = state;
        if(state) bg_store.bg_store_SAVE_items({WORKER_LOG           });
        else      bg_store.bg_store_SAVE_items({WORKER_LOG: undefined});

        if(state) log_modules();
    }
    return WORKER_LOG;
};
/*}}}*/
/*_ log_modules {{{*/
/*{{{*/
const regexp_day = new RegExp(".*(\\d):.*", "");

/*}}}*/
let log_modules = function()
{

    /* ┌────────────────────────────────────────────────────────────────────┐ */
    /* │ MODULES ● SCRIPT TAGS                                              │ */
    /* └────────────────────────────────────────────────────────────────────┘ */
    /*{{{*/
    let l_0 = lfX[ parseInt(S_SCRIPT_TAG           .replace(regexp_day,"$1")) ];
    let l_1 = lfX[ parseInt(B_SCRIPT_TAG           .replace(regexp_day,"$1")) ];
    let l_2 = lfX[ parseInt(BG_CONTENT_SCRIPT_TAG  .replace(regexp_day,"$1")) ];
    let l_3 = lfX[ parseInt(BG_CSP_SCRIPT_TAG      .replace(regexp_day,"$1")) ];
    let l_4 = lfX[ parseInt(BG_HEADER_SCRIPT_TAG   .replace(regexp_day,"$1")) ];
    let l_5 = lfX[ parseInt(BG_MESSAGE_SCRIPT_TAG  .replace(regexp_day,"$1")) ];
    let l_6 = lfX[ parseInt(BG_PAGE_SCRIPT_TAG     .replace(regexp_day,"$1")) ];
    let l_7 = lfX[ parseInt(BG_SETTINGS_SCRIPT_TAG .replace(regexp_day,"$1")) ];
    let l_8 = lfX[ parseInt(BG_STORE_SCRIPT_TAG    .replace(regexp_day,"$1")) ];
    let l_9 = lfX[ parseInt(BG_TABS_SCRIPT_TAG     .replace(regexp_day,"$1")) ];

    console.info(     "%c ● "+ log_js.mPadStart(S_SCRIPT_TAG          , 33)
                  + "\n%c ● "+ log_js.mPadStart(B_SCRIPT_TAG          , 33)
                  + "\n%c ● "+ log_js.mPadStart(BG_CONTENT_SCRIPT_TAG , 33)
                  + "\n%c ● "+ log_js.mPadStart(BG_CSP_SCRIPT_TAG     , 33)
                  + "\n%c ● "+ log_js.mPadStart(BG_HEADER_SCRIPT_TAG  , 33)
                  + "\n%c ● "+ log_js.mPadStart(BG_MESSAGE_SCRIPT_TAG , 33)
                  + "\n%c ● "+ log_js.mPadStart(BG_PAGE_SCRIPT_TAG    , 33)
                  + "\n%c ● "+ log_js.mPadStart(BG_SETTINGS_SCRIPT_TAG, 33)
                  + "\n%c ● "+ log_js.mPadStart(BG_STORE_SCRIPT_TAG   , 33)
                  + "\n%c ● "+ log_js.mPadStart(BG_TABS_SCRIPT_TAG    , 33)
                  ,      lbb+l_0, l_1, l_2, l_3, l_4, l_5, l_6, l_7, l_8, l_9
                );
    /*}}}*/

    /* ┌────────────────────────────────────────────────────────────────────┐ */
    /* │ BROWSER API                                                        │ */
    /* └────────────────────────────────────────────────────────────────────┘ */
    log_js.log_object("chrome.windows API", chrome.windows);

};
/*}}}*/
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ EVENT LISTENERS                                                           │
// └───────────────────────────────────────────────────────────────────────────┘
/* [activate] {{{*/
/* eslint-disable no-unused-vars */
/*➔ activate_handler .. enableNavigationPreload {{{*/
let activate_handler = function(event)
{
//console.log(S_SCRIPT_TAG+" activated",event);
if(WORKER_LOG) log_js.log_object(S_SCRIPT_TAG+" activated", event);

    /* ┌────────────────────────────────────────────────────────────────────┐ */
    /* │ NavigationPreloadManager                                           │ */
    /* └────────────────────────────────────────────────────────────────────┘ */
//▼ UNUSED ▼
 // event.waitUntil( enableNavigationPreload() );
 /* https://developer.mozilla.org/en-US/docs/Web/API/NavigationPreloadManager */
//▲ UNUSED ▲

    /* ┌────────────────────────────────────────────────────────────────────┐ */
    /* │ background script init                                             │ */
    /* └────────────────────────────────────────────────────────────────────┘ */
//▼ UNUSED ▼
//console.log("%c..."+S_SCRIPT_ID+": calling background_js.init()", "color:orange");
//  background_js.init();
//▲ UNUSED ▲

};
/*}}}*/
/*_ enableNavigationPreload {{{*/
let enableNavigationPreload = async function()
{
if(WORKER_LOG) console.log("enableNavigationPreload.self.registration.navigationPreload",self.registration.navigationPreload);

    // Enable navigation preloads!
    if(       self.registration.navigationPreload )
        await self.registration.navigationPreload.enable();
};
/*}}}*/
/* eslint-enable  no-unused-vars */
//  console.log("...self.addEventListener('activate'     , activate_handler)");
//  /*............*/self.addEventListener("activate"     , activate_handler);
/*}}}*/
/* [fetch] {{{*/
/* eslint-disable no-unused-vars */
/*➔ fetch_handler {{{*/
let fetch_handler = function(event)
{
if(WORKER_LOG) console.log("fetch_handler",event);

    event.respondWith( cacheFirst({                request : event.request
                                  , preloadResponsePromise : event.preloadResponse
                                  ,            fallbackUrl : "./gallery/myLittleVader.jpg" }
                                 ));

};
/*}}}*/
/*_ cacheFirst {{{*/
let cacheFirst = async function({ request, preloadResponsePromise, fallbackUrl })
{
    // First try to get the resource from the cache
    let responseFromCache = await caches.match(request);
if(WORKER_LOG) console.log("responseFromCache",responseFromCache);

    if (responseFromCache) {
        return responseFromCache;
    }
    // Next try to use the preloaded response, if it's there
    else {
        let preloadResponse = await preloadResponsePromise;
        if (preloadResponse)
        {
if(WORKER_LOG) console.log("using preload response", preloadResponse);
            putInCache(request, preloadResponse.clone());
            return preloadResponse;
        }
    }

    // Next try to get the resource from the network
    try {
        let responseFromNetwork = await fetch(request);
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        putInCache(request, responseFromNetwork.clone());
        return responseFromNetwork;
    } catch (error) {
        let fallbackResponse = await caches.match(fallbackUrl);
        if (fallbackResponse) {
            return fallbackResponse;
        }
        // when even the fallback response is not available,
        // there is nothing we can do, but we must always
        // return a Response object
        return new Response("Network error happened", {
            status: 408,
            headers: { "Content-Type": "text/plain" }
        });
    }
};
/*}}}*/
/*_ putInCache {{{*/
let putInCache = async function(request, response)
{
    let cache = await caches.open("v1");
    await cache.put(request, response);
};
/*}}}*/
//  console.log("...self.addEventListener('fetch'        , fetch_handler)");
//  /*............*/self.addEventListener("fetch"        , fetch_handler);
/* eslint-enable  no-unused-vars */
/*}}}*/
/* [webNavigation] {{{*/
/*_ webNavigation_addListeners {{{*/
let webNavigation_addListeners = function() /* eslint-disable-line no-unused-vars */
{
if(WORKER_LOG) console.log("...webNavigation_addListeners()");

    // ┌─────────────────────────────────────────────────┐
    // │ 1 -> onBeforeNavigate                           │
    // │ 2 -> onCommitted                                │
    // │ 3 -> [onDOMContentLoaded]                       │
    // │ 4 -> onCompleted                                │
    // └─────────────────────────────────────────────────┘

    let _lo = function(o_name,o) { if(background_js.LOG_MAP.B_LOG0_MORE) log_js.log_object(o_name, o); };

    chrome.webNavigation.onBeforeNavigate          .addListener(        () => log_js.log_console_clear(background_js.LOG_MAP.B_LOG3_PRESERVE, " ● onBeforeNavigate"));

    chrome.webNavigation.onBeforeNavigate          .addListener( (details) => _lo(S_SCRIPT_ID+" ● onBeforeNavigate"          , details) );
    chrome.webNavigation.onCommitted               .addListener( (details) => _lo(S_SCRIPT_ID+" ● onCommitted"               , details) );
    chrome.webNavigation.onDOMContentLoaded        .addListener( (details) => _lo(S_SCRIPT_ID+" ● onDOMContentLoaded"        , details) );
    chrome.webNavigation.onCompleted               .addListener( (details) => _lo(S_SCRIPT_ID+" ● onCompleted"               , details) );

    chrome.webNavigation.onErrorOccurred           .addListener( (details) => _lo(S_SCRIPT_ID+" ● onErrorOccurred"           , details) );

    chrome.webNavigation.onCreatedNavigationTarget .addListener( (details) => _lo(S_SCRIPT_ID+" ● onCreatedNavigationTarget" , details) );
    chrome.webNavigation.onHistoryStateUpdated     .addListener( (details) => _lo(S_SCRIPT_ID+" ● onHistoryStateUpdated"     , details) );
    chrome.webNavigation.onReferenceFragmentUpdated.addListener( (details) => _lo(S_SCRIPT_ID+" ● onReferenceFragmentUpdated", details) );
    chrome.webNavigation.onTabReplaced             .addListener( (details) => _lo(S_SCRIPT_ID+" ● onTabReplaced"             , details) );
};
/*}}}*/

    webNavigation_addListeners();
/*}}}*/
/* [install] {{{*/
/* eslint-disable no-unused-vars */
/*➔ install_handler {{{*/
/*{{{*/
const RESOURCES_ARRAY = [ "javascript/background.js", "javascript/popup.js" ];

/*}}}*/
let install_handler = function(event)
{
if(WORKER_LOG) log_js.log("install_handler", event);

//  event.waitUntil( addResourcesToCache( RESOURCES_ARRAY) );

};
/*}}}*/
/*_ addResourcesToCache {{{*/
let addResourcesToCache = async function(resources)
{
if(WORKER_LOG) console.log("addResourcesToCache.resources", resources);

    try {
/*{{{
        let cache = await caches.open("v1");
if(WORKER_LOG) console.log("cache",cache);
        await cache.addAll(resources);
}}}*/
if(WORKER_LOG) console.log("addResourcesToCache ➔ RETURNING A FAKE FULFILLED STATUS");
        await (() => true)();
    }
    catch(error) { console.log(error); }
};
/*}}}*/
/* eslint-enable  no-unused-vars */

    if(WORKER_LOG) console.log("...self.addEventListener('install'      , install_handler)");
    /*............*/self.addEventListener("install"      , install_handler);

///*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ EXPORT                                                            logging │
// └───────────────────────────────────────────────────────────────────────────┘
/* load-time logging {{{*/
if( WORKER_LOG )
{
               log_js.log_set_type("W", true);
               log_js.log_sep_top(S_SCRIPT_TAG+" ● IMPORT MODULES", "LOG0_TAG");
    setTimeout(log_js.log_sep_bot,0, S_SCRIPT_TAG, "LOG0_TAG");
}
/*}}}*/
    /* ● return {{{*/

    return { name : S_SCRIPT_ID
        ,    logging
    };
//}}}

})();

let sw =  worker_js; /* @so that we can call sw.logging() from Devtools.console */

