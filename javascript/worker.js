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
const    S_SCRIPT_TAG        =  S_SCRIPT_ID +" (231007:15h:13)";
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
let worker_js;//FIXME
    worker_js = (function() {
"use strict";

/* IMPORT {{{*/
/* modules {{{*/
/* importScripts {{{*/
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
/*}}}*/
    log_js.log_set_type("S");
    log_js.log_sep_top(S_SCRIPT_TAG, "LOG0_TAG");

  log_js.log_object("chrome.windows API", chrome.windows);//FIXME
//log_js.log_object(    "chrome.app API", chrome.app    );//FIXME

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
//  [ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX ] = log_js.LOG_BG_ARR;
//  [ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb           ] = log_js.LOG_XX_ARR;
    [ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX ] = log_js.LOG_FG_ARR;
    /*}}}*/
    if(worker_js) log_js.log_import(worker_js, modules);//FIXME
};
/*}}}*/
/* log_init log_event {{{*/
/* eslint-disable no-unused-vars */

let log_init  = function(name,arg="") { if(WORKER_LOG) console.info("%c➔ "+S_SCRIPT_ID+" INIT " +name+":\n  ","color:#FAA", arg); };
let log_event = function(name,arg="") { if(WORKER_LOG) console.info("%c➔ "+S_SCRIPT_ID+" EVENT "+name+":\n  ","color:#AAF", arg); };

/* eslint-enable  no-unused-vars */
/*}}}*/
/*}}}*/
    setTimeout(_import,0);
/* LOGGING {{{*/
let WORKER_LOG  = false;
/*_ logging {{{*/
let logging = function(state)
{
    if(    state != undefined) {                WORKER_LOG = state;
        if(state) bg_store.bg_store_SAVE_items({WORKER_LOG           });
        else      bg_store.bg_store_SAVE_items({WORKER_LOG: undefined});
    }
    return WORKER_LOG;
};
/*}}}*/
/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ INIT                                                                      │
// └───────────────────────────────────────────────────────────────────────────┘
/*_ init {{{*/
const regexp_day = new RegExp(".*(\\d):.*", "");
let init = function()
{
    /* ┌────────────────────────────────────────────────────────────────────┐ */
    /* │ MODULE TAGS                                                        │ */
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

    let manifest = chrome.runtime.getManifest();
    console.info(     "%c "+manifest.name+" MODULE TAGS:"
                  + "\n%c ● "+ log_js.mPadStart(S_SCRIPT_TAG          , 33)
                  + "\n%c ● "+ log_js.mPadStart(B_SCRIPT_TAG          , 33)
                  + "\n%c ● "+ log_js.mPadStart(BG_CONTENT_SCRIPT_TAG , 33)
                  + "\n%c ● "+ log_js.mPadStart(BG_CSP_SCRIPT_TAG     , 33)
                  + "\n%c ● "+ log_js.mPadStart(BG_HEADER_SCRIPT_TAG  , 33)
                  + "\n%c ● "+ log_js.mPadStart(BG_MESSAGE_SCRIPT_TAG , 33)
                  + "\n%c ● "+ log_js.mPadStart(BG_PAGE_SCRIPT_TAG    , 33)
                  + "\n%c ● "+ log_js.mPadStart(BG_SETTINGS_SCRIPT_TAG, 33)
                  + "\n%c ● "+ log_js.mPadStart(BG_STORE_SCRIPT_TAG   , 33)
                  + "\n%c ● "+ log_js.mPadStart(BG_TABS_SCRIPT_TAG    , 33)
                  , lbb    , l_0, l_1, l_2, l_3, l_4, l_5, l_6, l_7, l_8, l_9
                );
    /*}}}*/

    /* ┌────────────────────────────────────────────────────────────────────┐ */
    /* │ onDOMContentLoaded                                        [UNUSED] │ */
    /* └────────────────────────────────────────────────────────────────────┘ */
///* [UNUSED] executeScript javascript/background.js  {{{*/
//    try {
//        chrome.webNavigation.onDOMContentLoaded.addListener(async ({ tabId }) => {
//            log_init ("onDOMContentLoaded: tabId=["+tabId+"]");
//            chrome.scripting.executeScript({
//                                           target: { tabId },
//                                           files: ["javascript/log.js", "javascript/background.js"],
//            });
//        });
//    } catch(ex) { log_init (ex); }
///*}}}*/
///* [UNUSED] call background_js.init() {{{*/
//    try {
//        chrome.webNavigation.onDOMContentLoaded.addListener(({ tabId }) => {
//            log_init ("onDOMContentLoaded: tabId=["+tabId+"]");
//            log_init ("calling background_js.init()");
//            background_js.init();
//        });
//        log_init ("chrome.webNavigation.onDOMContentLoaded.addListener");
//    } catch(ex) { log_init (ex); }
///*}}}*/

    /* ┌────────────────────────────────────────────────────────────────────┐ */
    /* │ onMessage                                                 [UNUSED] │ */
    /* └────────────────────────────────────────────────────────────────────┘ */
///* [UNUSED] storage.set .. tabs.create {{{*/
//    try {
//        chrome.runtime.onMessage.addListener(async (message) => {
//
//            // handle message
//            log_init ("chrome.runtime.onMessage");
//            log_init ("message", message);
//
//            // local.storage [options]
//            if(message.options)
//                await chrome.storage.sync.set( message.options );
//
//            // NEW TAB [url] .. "https://example.com/#inject-programmatic"
//            if(message.url)
//                await chrome.tabs.create( message.url );
//
//        });
//        log_init ("chrome.runtime.onMessage.addListener");
//    } catch(ex) { log_init (ex); }
///*}}}*/

};
/*}}}*/
    setTimeout(init, 0);

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ EVENT                                                                     │
// └───────────────────────────────────────────────────────────────────────────┘
/*_ webNavigation_addListeners {{{*/
let webNavigation_addListeners = function() /* eslint-disable-line no-unused-vars */
{
    log_event(S_SCRIPT_ID+" ● ADDING EXTENSION EVENT LISTENERS:");

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
//  if( chrome.webNavigation ) webNavigation_addListeners();//FIXME

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ EVENT [install]                                                        │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
//▼ UNUSED ▼
/*{{{*/
///*➔ install_handler {{{*/
//const RESOURCES_ARRAY = [ "javascript/background.js", "javascript/popup.js" ];
//let install_handler = function(event) /* eslint-disable-line no-unused-vars */
//{
//log_event("install_handler", event);
//
//    event.waitUntil( addResourcesToCache( RESOURCES_ARRAY) );
//};
///*}}}*/
///*_ addResourcesToCache {{{*/
//let addResourcesToCache = async function(resources)
//{
//log_event("addResourcesToCache.resources", resources);
//
//    try {
///*{{{
//        let cache = await caches.open("v1");
//log_event("cache",cache);
//        await cache.addAll(resources);
//}}}*/
//console.log("➔ RETURNING A FAKE FULFILLED STATUS");
//        await (() => true)();
//    }
//    catch(error) { console.log(error); }
//};
///*}}}*/

//log_event("...self.addEventListener('install' , install_handler)" );
///*..........*/self.addEventListener("install" , install_handler);
///*}}}*/
//▲ UNUSED ▲

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ EVENT [activate]                                                       │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*{{{*/
/*➔ activate_handler .. enableNavigationPreload {{{*/
let activate_handler = function(event) /* eslint-disable-line no-unused-vars */
{
/*{{{*/
//log_event("activate_handler",event);
//console.log("log_js:",log_js);
/*}}}*/

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
let enableNavigationPreload = async function() /* eslint-disable-line no-unused-vars */
{
log_event("enableNavigationPreload.self.registration.navigationPreload",self.registration.navigationPreload);

    // Enable navigation preloads!
    if(       self.registration.navigationPreload )
        await self.registration.navigationPreload.enable();
};
/*}}}*/

log_event("...self.addEventListener('activate', activate_handler)");
/*..........*/self.addEventListener("activate", activate_handler);
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ EVENT [fetch]                                                          │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*{{{*/
//▼ UNUSED ▼
/*➔ fetch_handler {{{*/
let fetch_handler = function(event) /* eslint-disable-line no-unused-vars */
{
log_event("fetch_handler",event);

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
log_event("responseFromCache",responseFromCache);

    if (responseFromCache) {
        return responseFromCache;
    }
    // Next try to use the preloaded response, if it's there
    else {
        let preloadResponse = await preloadResponsePromise;
        if (preloadResponse)
        {
log_event("using preload response", preloadResponse);
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
//▲ UNUSED ▲

//log_event("...self.addEventListener('fetch' , fetch_handler)");
///*..........*/self.addEventListener("fetch" , fetch_handler);
/*}}}*/

setTimeout(() => log_js.log_sep_bot(S_SCRIPT_TAG, "LOG0_TAG"), 16);

    return { name : S_SCRIPT_ID
        ,    logging
    };
})();
let       sw =  worker_js; /* @so that we can call sw.logging() from Devtools.console */

