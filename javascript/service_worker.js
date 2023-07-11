/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ service_worker_js .............................. service_worker SCRIPT │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare              */

/* globals console, chrome                  */
/* globals importScripts                    */
/* globals log_js                           */
/* globals background_js, popup_js          */

/* exported S_SCRIPT_TAG,service_worker_js  */
/* globals  B_SCRIPT_TAG                    */
/* globals  BG_CONTENT_SCRIPT_TAG           */
/* globals  BG_CSP_SCRIPT_TAG               */
/* globals  BG_HEADER_SCRIPT_TAG            */
/* globals  BG_MESSAGE_SCRIPT_TAG           */
/* globals  BG_PAGE_SCRIPT_TAG              */
/* globals  BG_SETTINGS_SCRIPT_TAG          */
/* globals  BG_STORE_SCRIPT_TAG             */
/* globals  BG_TABS_SCRIPT_TAG              */

/* eslint-disable no-warning-comments       */
/* eslint-disable prefer-spread             */
/* eslint-disable prefer-rest-params        */
/* eslint-disable valid-jsdoc               */
/* eslint-enable  no-redeclare              */
/* eslint-enable  no-unused-vars */

const    S_SCRIPT_ID         = "service_worker_js";
const    S_SCRIPT_TAG        =  S_SCRIPT_ID +" (230711:17h:33)";
/*}}}*/

/* ┌─────────────────────────────┐
"● javascript/service_worker.js
:e javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_header.js
:e javascript/bg_message.js
:e javascript/bg_page.js
:e javascript/bg_settings.js
:e javascript/bg_store.js
:e javascript/bg_tabs.js
/* └─────────────────────────────┘*/

console.clear();

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ importScripts                                                             │
// └───────────────────────────────────────────────────────────────────────────┘
/*{{{*/
importScripts("log.js"        );

importScripts("background.js" );

importScripts("bg_content.js" );
importScripts("bg_csp.js"     );
importScripts("bg_header.js"  );
importScripts("bg_message.js"  );
importScripts("bg_page.js"    );
importScripts("bg_settings.js");
importScripts("bg_store.js"   );
importScripts("bg_tabs.js"    );

/*
┌───────────────────────────┐
:e javascript/log.js
:e javascript/background.js
:e javascript/bg_content.js
:e javascript/bg_csp.js
:e javascript/bg_header.js
:e javascript/bg_message.js
:e javascript/bg_page.js
:e javascript/bg_settings.js
:e javascript/bg_store.js
:e javascript/bg_tabs.js
└───────────────────────────┘
*/

/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ EXTENSION EVENTS                                                          │
// └───────────────────────────────────────────────────────────────────────────┘
//{{{
// ┌─────────────────────────────────────────────────┐
// │ 1 -> onBeforeNavigate                           │
// │ 2 -> onCommitted                                │
// │ 3 -> [onDOMContentLoaded]                       │
// │ 4 -> onCompleted                                │
// └─────────────────────────────────────────────────┘
console.log(S_SCRIPT_ID+" ● ADDING EXTENSION EVENTS LISTENERS:");

/* eslint-disable strict */
chrome.webNavigation.onBeforeNavigate          .addListener((       ) => log_js.log_console_clear(background_js.LOG_MAP.B_LOG3_PRESERVE," ● onBeforeNavigate"));
chrome.webNavigation.onBeforeNavigate          .addListener((details) => log_js.log_object(S_SCRIPT_ID+" ● onBeforeNavigate"          ,details));
chrome.webNavigation.onCommitted               .addListener((details) => log_js.log_object(S_SCRIPT_ID+" ● onCommitted"               ,details));
chrome.webNavigation.onDOMContentLoaded        .addListener((details) => log_js.log_object(S_SCRIPT_ID+" ● onDOMContentLoaded"        ,details));
chrome.webNavigation.onCompleted               .addListener((details) => log_js.log_object(S_SCRIPT_ID+" ● onCompleted"               ,details));

chrome.webNavigation.onErrorOccurred           .addListener((details) => log_js.log_object(S_SCRIPT_ID+" ● onErrorOccurred"           ,details));

chrome.webNavigation.onCreatedNavigationTarget .addListener((details) => log_js.log_object(S_SCRIPT_ID+" ● onCreatedNavigationTarget" ,details));
chrome.webNavigation.onHistoryStateUpdated     .addListener((details) => log_js.log_object(S_SCRIPT_ID+" ● onHistoryStateUpdated"     ,details));
chrome.webNavigation.onReferenceFragmentUpdated.addListener((details) => log_js.log_object(S_SCRIPT_ID+" ● onReferenceFragmentUpdated",details));
chrome.webNavigation.onTabReplaced             .addListener((details) => log_js.log_object(S_SCRIPT_ID+" ● onTabReplaced"             ,details));
/* eslint-enable strict */

/*}}}*/

// ┌───────────────────────────────────────────────────────────────────────────┐
// │ LOG SIGNATURE                                                             │
// └───────────────────────────────────────────────────────────────────────────┘
log_js.log_set_type("S");
log_js.log_sep_top(S_SCRIPT_TAG, "LOG0_TAG");

let service_worker_js = (function() {
"use strict";
/*{{{*/
//t log_init  = function(name,arg="") { console.info("%c➔ "+S_SCRIPT_ID+" INIT " +name+":\n  ","color:#FAA", arg); };
let log_event = function(name,arg="") { console.info("%c➔ "+S_SCRIPT_ID+" EVENT "+name+":\n  ","color:#AAF", arg); };
/*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ EVENTS [install]                                                       │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*{{{*/
//▼ UNUSED ▼
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
//    log_event("addResourcesToCache.resources", resources);
//
//    try {
///*{{{
//        let cache = await caches.open("v1");
//log_event("cache",cache);// FIXME
//        await cache.addAll(resources);
//}}}*/
//console.log("➔ RETURNING A FAKE FULFILLED STATUS");
//        await (() => true)();
//    }
//    catch(error) { console.log(error); }
//};
///*}}}*/
//▲ UNUSED ▲

//log_event("...self.addEventListener('install' , install_handler)" );
///*..........*/self.addEventListener("install" , install_handler);
///*}}}*/

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ EVENTS [activate]                                                      │ */
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
/* │ EVENTS [fetch]                                                         │ */
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

/* ┌────────────────────────────────────────────────────────────────────────┐ */
/* │ INIT                                                                   │ */
/* └────────────────────────────────────────────────────────────────────────┘ */
/*_ init {{{*/
const regexp_day = new RegExp(".*(\\d):.*", "");
let init = function()
{
/* eslint-disable no-unused-vars */
    let [ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX ] = log_js.LOG_BG_ARR;
    let [ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb           ] = log_js.LOG_XX_ARR;
    let [ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX ] = log_js.LOG_FG_ARR;
/* eslint-enable no-unused-vars */

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
                  , l_0, l_1, l_2, l_3, l_4, l_5, l_6, l_7, l_8, l_9
                  //lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9
                );
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
init();
setTimeout(() => log_js.log_sep_bot(S_SCRIPT_TAG, "LOG0_TAG"), 16);

//  return { init };
})();
//service_worker_js.init();
/* VIM SIGNS {{{
:so ~/VIM/signs.vim

 :sign place  2 line=37   name=SIGN2 file=C:/LOCAL/DATA/ANDROID/PROJECTS/Chrome_Web_Store/RTabsExtension/javascript/service_worker.js
 :sign place  1 line=45   name=SIGN1 file=C:/LOCAL/DATA/ANDROID/PROJECTS/Chrome_Web_Store/RTabsExtension/javascript/service_worker.js
/importScripts("log\.js"        );
/┌───────────────────────────┐

:SaveSigns
}}}*/
