/* dom_i18n_js */
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* globals Map       */
/* globals window    */

/* globals dom_data  */
/* globals dom_log   */
/* globals dom_util  */
/* globals dom_store */

/* exported dom_i18n, DOM_I18N_JS_TAG */

/*
:update|1,$y *
:!start explorer https://jshint.com/
:!start explorer https://cdn.jsdelivr.net/npm/vue/dist/vue.js
*/

const DOM_I18N_JS_ID        = "dom_i18n_js";
const DOM_I18N_JS_TAG       = DOM_I18N_JS_ID  +" (230820:21h:09)";
/*}}}*/
let dom_i18n    = (function() {
"use strict";
let   DOM_I18N_LOG          = false;
let   DOM_I18N_TAG          = false;

/** IMPORT */
/*{{{*/
/* const {{{*/
const LF    = String.fromCharCode(10);

/*}}}*/

/* eslint-disable no-unused-vars */
/*➔ t_i18n_IMPORT {{{*/
/*{{{*/
/*....................................*/
let t_data     = {}        ;    /* 05 */
let t_log      = {}        ;    /* 06 */
let t_util     = {}        ;    /* 07 */
/*  t_i18n     = {}        ; */ /* 08 */
/*  t_prop     = {}        ; */ /* 09 */
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
let t_i18n_IMPORT  = function(log_this)
{
/* LOAD {{{*/
/* ...................................*/
    t_data    = dom_data   ;    /* 05 */
    t_log     = dom_log    ;    /* 06 */
    t_util    = dom_util   ;    /* 07 */
/*  t_i18n    = dom_i18n   ; */ /* 08 */
/*  t_prop    = dom_prop   ; */ /* 09 */
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
    util_INTERN();
    /* MODULE LOGGING TAGGING {{{*/
    DOM_I18N_LOG = DOM_I18N_LOG || dom_store.t_store_getItem("DOM_I18N_LOG");
    DOM_I18N_TAG = DOM_I18N_TAG || dom_store.t_store_getItem("DOM_I18N_TAG");

    /*}}}*/
if(log_this) log("%c 07 util", lbH+lf7);
};
/*}}}*/
/*_   util_INTERN {{{*/
/*{{{*/

/* t_log */
let LOG_MAP;
let lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;
let log, logBIG, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;

/*}}}*/
let   util_INTERN = function()
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
};
/*}}}*/
/* eslint-enable  no-unused-vars */
/*}}}*/

/** CURRENT [user_lang] */
/*➔ i18n_set_args {{{*/
let i18n_set_args = function(args)
{
/*{{{*/
let   caller = "i18n_set_args";
let log_this = DOM_I18N_TAG || DOM_I18N_LOG || LOG_MAP.T1_DOM_LOAD;

if(log_this) log_caller();
/*}}}*/
    /*  args.lang {{{*/
    if(                args.lang ) {
        switch(        args.lang.substr(0,2).toUpperCase() )
        {
            case "FR": user_lang = "FR"     ; break;
            case "EN": user_lang = "EN"     ; break;
            default  : user_lang = args.lang; break;
        }
    }
    /*}}}*/
/*{{{*/
if(log_this)
    log_key_val(caller
        , { args
          , user_lang
        }, lf5);
/*}}}*/
};
/*}}}*/
/*➔ i18n_get_user_lang {{{*/
/*{{{*/
let user_lang;

/*}}}*/
let i18n_get_user_lang = function()
{
    if(!i18n_map_FR) i18n_map_LANGUAGES();

    return user_lang;
};
/*}}}*/
/*➔ i18n_get {{{*/
let user_lang_applied;

let i18n_get = function(key,el_id) /* ☀ el_id .. added to the end of a tooltip */
{
/*{{{*/
let   caller = "i18n_get";
let log_this = DOM_I18N_TAG || DOM_I18N_LOG || LOG_MAP.T1_DOM_LOAD;

/*}}}*/
    if(!i18n_map_FR) i18n_map_LANGUAGES();

    if( user_lang_applied == undefined)
        user_lang_applied  = user_lang;

    /* [user_lang] filter {{{*/
    let        value;
    switch(user_lang)
    {
    case "FR": value = i18n_map_FR.get(key); break;
    default  :                      /* key expected to be the [EN value] */
    case "EN": value =                 key ; break;
    }

    /*}}}*/
    /* fallback to key {{{*/
    if(!value)
    {
        value = key;

/*{{{*/
log("%c"+ caller +"%c"+ el_id  +"%c"+ key    +"%c"+ user_lang +"%c IS MISSING"
    ,lbb+lbH+lf8  ,lbb+lbL+lf4  ,lbb+lbC+lf7  ,lbb+lbC+lf8     ,lbb+lbR+lf3   );
log_caller(2);
/*}}}*/
    }
    /*}}}*/
    /* [el_id] .. (tooltip added line) {{{*/
    if( el_id )
        value += LF+ t_util.unicode_to_charCode(   t_data.SYMBOL_BLACK_SUN ) +" "+el_id;

    /*}}}*/
/*{{{
    value = t_get_htmlEntities( value );
}}}*/
if(log_this) log("%c"+caller+"("+el_id+" .. "+key+ ")%c...return "+ value, lbL+lf4, lbR+lf5);
    return value;
};
/*}}}*/

/** LITERALS */
/*_ I18N ID {{{*/

const PAT_BAG                        = "PAT bag";
const SEL_BAG                        = "SEL bag";
const HEADSUP_W                      = "Words options";
const HEADSUP                        = "Tools options";

const HEADSUP_DS                     = "Document tools";
const DOM_TRAVERSAL                  = "DOM traversal";
const HEADSUP_BW                     = "Body width";
const HEADSUP_BZ                     = "Body zoom";
const HEADSUP_FS                     = "Body font-size";

const TEST_PANEL                     = "Test PANEL";
const DEV_LOG_MAP                    = "DEV [LOG_MAP";
const TRANSCRIPT1                    = "Transcript 1";
const TRANSCRIPT2                    = "Transcript 2";

const DOM_LOAD_TAGS                  = "DOM [LOAD_TAGS";


const ALT_BAG                        = "ALT bag";
const BAK_BAG                        = "BAK bag";
const OFF_BAG                        = "OFF bag";

const BAGOPEN                        = "Open-Close BAGS";
const BAG_LOG                        = "Status details";
const BAG_ROT                        = "Rotate bags";

const CLEAR_PANEL                    = "Clear panel";
const CLOSE_PANEL                    = "Close panel";
const MAGNIFY_PANEL                  = "Magnify panel";
const PIN_PANEL                      = "Pin panel";

const FLY_LOG                        = "Flying tooltips";
const SORT_SELECTION                 = "Sort selection";


const SCROLL_SMOOTH                  = "Smooth or Instant scrolling";
const DOM_FREEZE                     = "DOM freeze (Remove All Event Listeners)";
const USER_LANG                      = "Interface language";
const ANCHOR_FREEZE                  = "Disable links navigation";
const CONTAINERS_HI                  = "Highlight paragraph containers";
const DENY_OR_ALLOW                  = "Deny or Allow (no-op at this time)";
const DOM_HIDE1_RESET                = "Reset all hidden containers";
const DOM_HIDE1_UNDO                 = "Revert to previous NODE TO HIDE STACK";
const EDIT_OR_STAGE                  = "Edit or Apply hidden containers";
const LOG_SEEKSPOT                   = "Log seekspot tool parameters";

const REMOVE_ADS                     = "Remove Ads Tags";
const SPLIT_WALL_OF_TEXT             = "Split Text Panels"+LF+"(i.e. Wall-of-Text)";
const LINES_WALL_OF_TEXT             = "Show Wall-of-Text line numbers";

const MASK_OR_HIDE                   = "Mask or Hide hidden containers";
const OVERFLOW_VISI                  = "Force text-overflow visibility";

const DETAILS_CLOSE                  = "DETAILS ➔ All closed";
const DETAILS_OPEN                   = "DETAILS ➔ All opened";
const DETAILS_RADIO                  = "DETAILS ➔ Only one opened at a time";

const PIN_SEEKSPOT                   = "Keep last seekspot visible";
const WORDS_RECYCLE                  = "Recycle";
const WORDS_RECYCLE_CLICK_TO_HIDE    = "Click to hide";
const WORDS_RECYCLE_CLICK_TO_DISCARD = "Click to discard all";
const STORED_PATTERNS                = "Stored patterns";
const SHOW_SEEKZONE                  = "Show lst seek zone area";
const SITE_OR_PAGE                   = "Hiding containers at SITE or PAGE level";
const THEME_DARK                     = "Dark Theme";
const TOOLS_TIER2                    =  "TIER-TWO TOOLS SELECTED"
    /*.................................*/ +LF+"✔ headsup"
    /*.................................*/ +LF+"✔ headsup_w"
    /*.................................*/ +LF+"✔ pat_bag"
    /*.................................*/ +LF+"☀ t_sync_tools_tier2"
    /*.................................*/ +LF
    /*.................................*/ +LF+"SEEKER MOVES FASTER"
    /*.................................*/ +LF+"☀ onMove_5_GRAB_SELECTION"
    /*.................................*/ +LF+"☀ onMove_6_GRAB_STICKY"
    /*.................................*/ +LF+"☀ t_seeker_onMove2_ON_NEXT_STICKY"
    /*.................................*/ +LF
    /*.................................*/ +LF+"SENTENCE POPUP ACTIVE"
    /*.................................*/ +LF
;
const TOOLS_SCROLL                   = "Tools fixed or scrolling with the page";
const TOOLS_TRAP                     = "Trap tools in their current quadrant while moving hotspot";

const WORDING                        = "Wording State: FREEZED LINKS and PAGE-COLOR-THEME";
const WORDS2_EXACT                   = "Select whole words only";
const WORDS3_SEGMENT                 = "Select word segment";
const WORDS4_HEAD_TAIL               = "Grab words prefix and suffix";
const WORDS5_OPCYCLE                 = "Auto-cycle:"+LF+"1 - whole words"+LF+"2 - word segments"+LF+"3 - head and tail"+LF+"4 .. unselected";
const WORDS6_DROP_CASE               = "Ignore case";
const WORDS7_DROP_ING                = "Drop [ing] word terminaisons";
const WORDS8_DROP_S                  = "Drop [s] word treminations";

/*}}}*/
/*_ I18N STRING {{{*/
const AS_SET_BY_USER                   = "As set by user";
const BAGS_CONTENT                     = "Current content";
const IS_EMPTY                         = " is empty";
const COPY_ALL_PARAGRAPHS_TO_CLIPBOARD = "Copy all paragraphs to clipboard";
const MONOSPACE                        = "SHOW (and COPY) HTML or TEXT Format";
const ADS_REMOVED                      = "ADS removed";
const COPY_PARAGRAPH_TO_CLIPBOARD      = "Copy paragraph to clipboard";
const CURRENTLY                        = "Currently";
const REVERSED_Z_TO_A                  = "Reversed Z..A";
const SCROLL_TO_THIS_PARAGRAPH         = "Scroll to this paragraph";
const SORTED_A_TO_Z                    = "Sorted A..Z";
const UNORDERED                        = "Unordered";
const MOVE_IN_GUTTER_TO_CLEAR_STORAGE
    = "No data worth storing about this page:"+LF
    + "---"+LF
    + "Drag hotspot into gutter"+LF
    + "to clear tools selection and layout."
;
const ALL_PAGE_LOCAL_STORAGE_REMOVED
    = "No stored information for this page."+LF
    +  t_data.SYMBOL_BLACK_SUN+" Local Storage is empty"
;

const NOT_FOUND                        = "not found";
const TOO_MANY                         = "too many";
/*}}}*/
/*_ I18N STICKY {{{*/
const STICKY_FIX_TOOLTIP               = "DELETE";
const STICKY_HAND_MOV_TOOLTIP          = "MOVE";
const STICKY_PAD_TOOLTIP               = "LONG PRESS EDIT";
const STICKY_PASTE_TOOLTIP             = "PASTE SELECTED TEXT";
const STICKY_PEN_TOOLTIP               = "EDIT";
const STICKY_REFLOW_TOOLTIP            = "RESIZE";
const STICKY_REFONT_TOOLTIP            = "RESIZE FONT";
const STICKY_ROTATE                    = "ROTATE";

/*}}}*/

/** LANGUAGES */
/*{{{*/
const LANGUAGES = [ "FR" , "EN" , "DE" , "GR" ];

const ARRAY_FR  = [
        /* ID {{{*/
        [   SEL_BAG                          , "Index des mots sélectionnés" ]
        , [ PAT_BAG                          , "Liste des mots sélectionnés" ]
        , [ ALT_BAG                          , "Liste ALT"                   ]
        , [ BAK_BAG                          , "Liste BAK"                   ]
        , [ OFF_BAG                          , "Liste OFF"                   ]

        , [ BAGOPEN                          , "Déployer-Replier les listes" ]
        , [ BAG_LOG                          , "Informations détaillées"     ]
        , [ BAG_ROT                          , "Rotation des listes"         ]

        , [ CLEAR_PANEL                      , "Vider le panneau"            ]
        , [ CLOSE_PANEL                      , "Déselectionner le panneau"   ]
        , [ MAGNIFY_PANEL                    , "Agrandir le panneau"         ]
        , [ PIN_PANEL                        , "Épingler le panneau"         ]

        , [ FLY_LOG                          , "Infos-bulles"                ]
        , [ SORT_SELECTION                   , "Classer la sélection"        ]

        , [ DOM_TRAVERSAL                    , "Exploration du DOM"          ]

        , [ HEADSUP                          , "Options des outils"          ]
        , [ HEADSUP_BW                       , "Body - largeur"              ]
        , [ HEADSUP_BZ                       , "Body - zoom"                 ]
        , [ HEADSUP_FS                       , "Body - font-size"            ]
        , [ HEADSUP_DS                       , "Opérations sur le document"  ]
        , [ HEADSUP_W                        , "Sélection des mots"          ]

        , [ DEV_LOG_MAP                      , "DEV [LOG_MAP]"               ]
        , [ DOM_LOAD_TAGS                    , "DOM [LOAD_TAGS]"             ]
        , [ TEST_PANEL                       , "Tests"                       ]
        , [ TRANSCRIPT1                      , "Panneau de test 1"           ]
        , [ TRANSCRIPT2                      , "Panneau de test 2"           ]

        /*}}}*/
        /* STRINGS {{{*/
        , [ AS_SET_BY_USER                   , "Positionné par l'utilisateur"                      ]
        , [ BAGS_CONTENT                     , "contenu actuel"                                    ]
        , [ IS_EMPTY                         , " est vide"                                         ]
        , [ COPY_ALL_PARAGRAPHS_TO_CLIPBOARD , "Copier tous les paragraphes dans le presse-papier" ]
        , [ MONOSPACE                        , "Affichage (et Copie) au format HTML ou TEXTE"      ]
        , [ ADS_REMOVED                      , "Annonces supprimées"                               ]
        , [ COPY_PARAGRAPH_TO_CLIPBOARD      , "Copier ce  paragraphe  dans le presse-papier"      ]
        , [ CURRENTLY                        , "Actuellement"                                      ]
        , [ REVERSED_Z_TO_A                  , "inversé Z..A"                                      ]
        , [ SCROLL_TO_THIS_PARAGRAPH         , "Recentrer sur ce paragraphe"                       ]
        , [ SORTED_A_TO_Z                    , "ordonné A..Z"                                      ]
        , [ UNORDERED                        , "non classé"                                        ]
        , [ NOT_FOUND                        , "pas trouvé"                                        ]
        , [ TOO_MANY                         , "dépacement"                                        ]
        , [ MOVE_IN_GUTTER_TO_CLEAR_STORAGE  , "Pas d'information à enregistrer pour cette page:"+LF
            /*...................................*/ + "---"+LF
            /*...................................*/ + "Glissez le panneau vers une bordure"+LF
            /*...................................*/ + "pour supprimer les paramètres associés."
        ]
        , [ ALL_PAGE_LOCAL_STORAGE_REMOVED   , "Aucune information enregistrée pour cette page."+LF
            /*...................................*/ +  t_data.SYMBOL_BLACK_SUN+" Local Storage est vide"]

        , [ STICKY_FIX_TOOLTIP               , "SUPPRIMER"                   ]
        , [ STICKY_HAND_MOV_TOOLTIP          , "DÉPLACER"                    ]
        , [ STICKY_PAD_TOOLTIP               , "ÉDITER AVEC UN APPUI LONG"   ]
        , [ STICKY_PASTE_TOOLTIP             , "COPIER LE TEXTE SÉLECTIONNÉ" ]
        , [ STICKY_PEN_TOOLTIP               , "ÉDITER"                      ]
        , [ STICKY_REFLOW_TOOLTIP            , "REDIMENSIONNER"              ]
        , [ STICKY_REFONT_TOOLTIP            , "TAILLE DES CARACTÈRES"       ]
        , [ STICKY_ROTATE                    , "ORIENTER"                    ]

        , [ SCROLL_SMOOTH                    , "Défilement progressif ou instantané"                                    ]
        , [ USER_LANG                        , "Language de l'interface"                                                ]
        , [ DOM_FREEZE                       , "DOM freeze (Suppression des Event Listeners)"                           ]
        , [ ANCHOR_FREEZE                    , "Blocage des liens de navigation"                                        ]
        , [ CONTAINERS_HI                    , "Coloration des paragraphes sélectionnés"                                ]
        , [ DENY_OR_ALLOW                    , "Deny or Allow (no-op pour le moment)"                                   ]
        , [ DOM_HIDE1_RESET                  , "Remise à zéro des sections cachées"                                     ]
        , [ DOM_HIDE1_UNDO                   , "Recul dans l'historique des sections cachées"                           ]
        , [ EDIT_OR_STAGE                    , "Édition ou Application des section cachées"                             ]
        , [ LOG_SEEKSPOT                     , "Log des paramètres du seekspot"                                         ]

        , [ REMOVE_ADS                       , "Suppression des Annonces"                                               ]
        , [ SPLIT_WALL_OF_TEXT               , "Partition des pages de texte"+LF+"(i.e. Wall-of-Text)"                  ]
        , [ LINES_WALL_OF_TEXT               , "Numérotation des lignes Wall-of-Text"                                   ]

        , [ MASK_OR_HIDE                     , "Masquer ou Cacher les sections à cacher"                                ]
        , [ OVERFLOW_VISI                    , "Rendre visible les textes en overflow"                                  ]

        , [ DETAILS_CLOSE                    , "DETAILS ➔ tous repliés"                                                 ]
        , [ DETAILS_OPEN                     , "DETAILS ➔ tous dépliés"                                                 ]
        , [ DETAILS_RADIO                    , "DETAILS ➔ un seul ouvert à la fois"                                     ]

        , [ PIN_SEEKSPOT                     , "Garder le dernier seekspot visible"                                     ]
        , [ WORDS_RECYCLE                    , "Recycler"                                                               ]
        , [ WORDS_RECYCLE_CLICK_TO_HIDE      , "Click pour les cacher"                                                  ]
        , [ WORDS_RECYCLE_CLICK_TO_DISCARD   , "Click pour les supprimer"                                               ]
        , [ STORED_PATTERNS                  , "Mots sélectionnés"                                                      ]
        , [ SHOW_SEEKZONE                    , "Afficher la dernière zone de sélection"                                 ]
        , [ SITE_OR_PAGE                     , "Cacher les containers au niveau SITE ou PAGE"                           ]
        , [ THEME_DARK                       , "Theme foncé"                                                            ]
        , [ TOOLS_TIER2                      , TOOLS_TIER2                                                              ]
        , [ TOOLS_SCROLL                     , "Outils fixes à l'écran ou sur la page"                                  ]
        , [ TOOLS_TRAP                       , "Outils confinés dans leur quadrant pendant les déplacements du hotspot" ]

        , [ WORDING                          , "Mode de sélection des mots-clés:"+LF+"- Navigation bloquée"+LF+"- Couleurs de la page" ]
        , [ WORDS2_EXACT                     , "Sélectionner des mots entiers"                                          ]
        , [ WORDS3_SEGMENT                   , "Sélectionner des segments de mot"                                       ]
        , [ WORDS4_HEAD_TAIL                 , "Sélectionner aussi les prefixes et suffixes"                            ]
        , [ WORDS5_OPCYCLE                   , "Cycle-auto:"+LF+"1 - mots entier"+LF+"2 - segments de mot"+LF+"3 - préfixes et suffixes"+LF+"4 .. désélectionner" ]
        , [ WORDS6_DROP_CASE                 , "Confondre majuscules et minuscules"                                          ]
        , [ WORDS7_DROP_ING                  , "Ignorer les terminaisons en [ing]"                                      ]
        , [ WORDS8_DROP_S                    , "Ignorer les terminaisons en [s]"                                        ]

        /*}}}*/
    ];
let i18n_map_FR;

/*}}}*/
/*_ i18n_map_LANGUAGES {{{*/
let i18n_map_LANGUAGES = function()
{
/*{{{*/
let   caller = "i18n_map_LANGUAGES";
let log_this = DOM_I18N_TAG || DOM_I18N_LOG || LOG_MAP.T1_DOM_LOAD;

if(log_this) log_caller();
/*}}}*/

    let i18n_object_FR             = new Object    ( ARRAY_FR                   ); /* OBJECT ..from.. LITERAL .. TO TEST  */ /* eslint-disable-line no-new-object */
    let i18n_object_FR_stringified = JSON.stringify( i18n_object_FR             ); /* STRING ..from.. OBJECT  .. TO STORE */
    let i18n_object_FR_parsed      = JSON.parse    ( i18n_object_FR_stringified ); /* OBJECT ..from.. STRING  .. TO LOAD  */
    /**/i18n_map_FR                = new Map       ( i18n_object_FR_parsed      ); /*    MAP ..from.. OBJECT  .. TO RUN   */

    if(user_lang == undefined)
        i18n_set_args({ lang: window.navigator.language , caller });

/*{{{*/
if(log_this) {
    log(caller);

    t_log.console_dir("ARRAY_FR", ARRAY_FR);

    t_log.console_dir("i18n_object_FR", i18n_object_FR   );
    log_key_val_group("i18n_object_FR"  , i18n_object_FR       ,     lf1, false);

    log("%c i18n_object_FR_stringified"+LF + "%c"+ i18n_object_FR_stringified, lbH+lf2, lbA);

    log_key_val_group("i18n_object_FR_parsed     " , i18n_object_FR_parsed           ,     lf3, false);
    t_log.console_dir("i18n_object_FR_parsed",   i18n_object_FR_parsed        );

    t_log.console_dir("i18n_map_FR",   i18n_map_FR      );
    log_key_val_group("i18n_map_FR"    , i18n_map_FR         ,     lf4, false);

    t_log.console_dir("i18n_map_FR",i18n_map_FR);
    i18n_map_FR.forEach(function(value, key) {
        log("%c"+key +"%c"+ value, lbL+lf4,lbR+lf5);
    });

}
/*}}}*/
};
/*}}}*/

/** EXPORT */
/*{{{*/
return { name : "dom_i18n"
    , logging : (state) => DOM_I18N_LOG = t_store.t_store_set_state("DOM_I18N_LOG",state)
    , tagging : (state) => DOM_I18N_TAG = t_store.t_store_set_state("DOM_I18N_TAG",state)
    , t_i18n_IMPORT

    /* I18N  */
    /* SET {{{*/
    , i18n_set_args

    /*}}}*/
    /* GET {{{*/
    , i18n_get
    , i18n_get_LANGUAGES         : () => LANGUAGES
    , i18n_get_user_lang
    , i18n_get_user_lang_applied : () => user_lang_applied

    /*}}}*/
    /*_ I18N ID {{{*/

    , PAT_BAG
    , SEL_BAG
    , HEADSUP_W
    , HEADSUP

    , HEADSUP_DS
    , DOM_TRAVERSAL
    , HEADSUP_BW
    , HEADSUP_BZ
    , HEADSUP_FS

    , TEST_PANEL
    , DEV_LOG_MAP
    , TRANSCRIPT1
    , TRANSCRIPT2

    , DOM_LOAD_TAGS


    , ALT_BAG
    , BAK_BAG
    , OFF_BAG

    , BAGOPEN
    , BAG_LOG
    , BAG_ROT

    , CLEAR_PANEL
    , CLOSE_PANEL
    , MAGNIFY_PANEL
    , PIN_PANEL

    , FLY_LOG
    , SORT_SELECTION


    , SCROLL_SMOOTH
    , DOM_FREEZE
    , USER_LANG
    , ANCHOR_FREEZE
    , CONTAINERS_HI
    , DENY_OR_ALLOW
    , DOM_HIDE1_RESET
    , DOM_HIDE1_UNDO
    , EDIT_OR_STAGE
    , LOG_SEEKSPOT

    , REMOVE_ADS
    , SPLIT_WALL_OF_TEXT
    , LINES_WALL_OF_TEXT

    , MASK_OR_HIDE
    , OVERFLOW_VISI

    , DETAILS_CLOSE
    , DETAILS_OPEN
    , DETAILS_RADIO

    , PIN_SEEKSPOT
    , WORDS_RECYCLE
    , WORDS_RECYCLE_CLICK_TO_HIDE
    , WORDS_RECYCLE_CLICK_TO_DISCARD
    , STORED_PATTERNS
    , SHOW_SEEKZONE
    , SITE_OR_PAGE
    , THEME_DARK
    , TOOLS_TIER2
    , TOOLS_SCROLL
    , TOOLS_TRAP

    , WORDING
    , WORDS2_EXACT
    , WORDS3_SEGMENT
    , WORDS4_HEAD_TAIL
    , WORDS5_OPCYCLE
    , WORDS6_DROP_CASE
    , WORDS7_DROP_ING
    , WORDS8_DROP_S

    /*}}}*/
    /*_ I18N STRING {{{*/
    , ADS_REMOVED
    , ALL_PAGE_LOCAL_STORAGE_REMOVED
    , AS_SET_BY_USER
    , BAGS_CONTENT
    , COPY_ALL_PARAGRAPHS_TO_CLIPBOARD
    , COPY_PARAGRAPH_TO_CLIPBOARD
    , CURRENTLY
    , IS_EMPTY
    , MONOSPACE
    , MOVE_IN_GUTTER_TO_CLEAR_STORAGE
    , REVERSED_Z_TO_A
    , SCROLL_TO_THIS_PARAGRAPH
    , SORTED_A_TO_Z
    , UNORDERED

    , NOT_FOUND
    , TOO_MANY
    /*}}}*/
    /*_ I18N TOOLTIP STICKY {{{*/
    , STICKY_FIX_TOOLTIP
    , STICKY_HAND_MOV_TOOLTIP
    , STICKY_PAD_TOOLTIP
    , STICKY_PASTE_TOOLTIP
    , STICKY_PEN_TOOLTIP
    , STICKY_REFLOW_TOOLTIP
    , STICKY_REFONT_TOOLTIP
    , STICKY_ROTATE

    /*}}}*/
/* DEBUG */
, ARRAY_FR
, i18n_map_LANGUAGES

};
/*}}}*/

}());

