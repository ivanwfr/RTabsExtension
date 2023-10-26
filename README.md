<!-- README.md _TAG (231026:14h:52) -->
# RTabs - Web page words highlighting
● ***Browser extension*** version
● of a __Search-in-Page Highliter Toolset__
● built on ● HTML5 ● DOM3 ● JS and JSON

### ✔ [ZIP archive on GitHub](../../archive/master.zip)

### EXTENSION FEATURES:

● This is the ***Chrome Extension*** version of this [***Bookmarklet***](https://github.com/ivanwfr/dom_load)
which is all about web page content parsing and highlighting
of keywords or regular expressions (RegEx).

_● The content scripts provide a collection of tools_
_to start with a find in page selection to colorise_
_some interesting words and see all the other places_
_they are mentionned again._

> ![features](/images/features.png)

<hr>

● [ON-LINE INTRODUCTION PAGE (only in French at the moment)](https://remotetabs.com/dev/rtabs/intro.html)

● [SCREENSHOTS](https://remotetabs.com/dev/rtabs/screenshots.html)

 EXTENSION FILES <!-- ● README manifest background options popup {{{-->
```
     README.md
     manifest.json
     manifest_v2.json
     manifest_v3.json

     background.html
     options.html
     popup.html

     rules_REMOVE_CSP.json
     rules_SET_CHARSET_UTF8.json
     rules_SET_CSP.json

```
<!--}}}-->
 EXTENSION SCRIPT: <!-- ● javascript {{{-->
```
     javascript
     |-- background.js
     |-- bg_content.js
     |-- bg_csp.js
     |-- bg_event.js
     |-- bg_header.js
     |-- bg_message.js
     |-- bg_page.js
     |-- bg_settings.js
     |-- bg_store.js
     |-- bg_tabs.js
     |-- dom_load.js
     |-- log.js
     |-- options.js
     |-- popup.js
     └-- worker.js

```
<!--}}}-->
 EXTENSION IMAGES: <!-- ● rtabs png {{{-->
```
     images
     |-- rtabs128.png
     |-- rtabs144.png
     |-- rtabs16.png
     |-- rtabs16_1_b.png
     |-- rtabs16_1_brown.png
     |-- rtabs16_2_r.png
     |-- rtabs16_3_o.png
     |-- rtabs16_4_y.png
     |-- rtabs16_5_g.png
     |-- rtabs16_6_b.png
     |-- rtabs16_6_b_square.png
     |-- rtabs16_7_m.png
     |-- rtabs16_8_g.png
     |-- rtabs24.png
     |-- rtabs32.png
     |-- rtabs440x280.png
     |-- rtabs48.png
     |-- rtabs512.png
     |-- rtabs72.png
     |-- rtabs920x680.png
     └-- rtabs96.png
```
<!--}}}-->
EXTENSION CSS: <!-- ● options popup {{{-->
```
     stylesheet
     |-- options.css
     └-- popup.css
```
<!--}}}-->
 CONTENT SCRIPT: <!-- ● script {{{-->
```
     script
     |-- dom_data.js
     |-- dom_details.js
     |-- dom_fly.js
     |-- dom_grid.js
     |-- dom_gutter.js
     |-- dom_hide.js
     |-- dom_i18n.js
     |-- dom_ipc.js
     |-- dom_load.js
     |-- dom_log.js
     |-- dom_ondown.js
     |-- dom_pod.js
     |-- dom_popup.js
     |-- dom_prop.js
     |-- dom_seek.js
     |-- dom_select.js
     |-- dom_sentence.js
     |-- dom_share.js
     |-- dom_slot.js
     |-- dom_sticky.js
     |-- dom_store.js
     |-- dom_tools.js
     |-- dom_util.js
     |-- dom_view.js
     |-- dom_wording.js
     |-- dom_wot.js
     |-- dom_wot_log.js
     |-- dom_wot_util.js
     |-- drag_cursor.js
     |-- gifanim.js
     └-- splitter.js
```
<!--}}}-->
CONTENT CSS: <!-- ● checkbox dom_grid dom_host dom_tools {{{-->
```
     stylesheet
     |-- checkbox.css
     |-- dom_grid.css
     |-- dom_host.css
     |-- dom_tools.css
     |-- options.css
     └-- popup.css
```
<!--}}}-->
<hr>

<!-- tree {{{
:r !tree $APROJECTS/GITHUB/RTabsExtension | sed -e 's/^/    /'

https://github.com/ivanwfr/RTabsExtension

../../P.txt

https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

> ![features](https://remotetabs.com/dev/RTabsExtension/images/features.png)

}}}-->
