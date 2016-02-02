var Hyphenator=function(e){"use strict";var t=e,n=function(){var e={},t=function(t,n,a,r){e[t]={file:n,script:a,prompt:r}};return t("be","be.js",1,"Мова гэтага сайта не можа быць вызначаны аўтаматычна. Калі ласка пакажыце мову:"),t("ca","ca.js",0,""),t("cs","cs.js",0,"Jazyk této internetové stránky nebyl automaticky rozpoznán. Určete prosím její jazyk:"),t("da","da.js",0,"Denne websides sprog kunne ikke bestemmes. Angiv venligst sprog:"),t("bn","bn.js",4,""),t("de","de.js",0,"Die Sprache dieser Webseite konnte nicht automatisch bestimmt werden. Bitte Sprache angeben:"),t("el","el-monoton.js",6,""),t("el-monoton","el-monoton.js",6,""),t("el-polyton","el-polyton.js",6,""),t("en","en-us.js",0,"The language of this website could not be determined automatically. Please indicate the main language:"),t("en-gb","en-gb.js",0,"The language of this website could not be determined automatically. Please indicate the main language:"),t("en-us","en-us.js",0,"The language of this website could not be determined automatically. Please indicate the main language:"),t("eo","eo.js",0,"La lingvo de ĉi tiu retpaĝo ne rekoneblas aŭtomate. Bonvolu indiki ĝian ĉeflingvon:"),t("es","es.js",0,"El idioma del sitio no pudo determinarse autom%E1ticamente. Por favor, indique el idioma principal:"),t("et","et.js",0,"Veebilehe keele tuvastamine ebaõnnestus, palun valige kasutatud keel:"),t("fi","fi.js",0,"Sivun kielt%E4 ei tunnistettu automaattisesti. M%E4%E4rit%E4 sivun p%E4%E4kieli:"),t("fr","fr.js",0,"La langue de ce site n%u2019a pas pu %EAtre d%E9termin%E9e automatiquement. Veuillez indiquer une langue, s.v.p.%A0:"),t("grc","grc.js",6,""),t("gu","gu.js",7,""),t("hi","hi.js",5,""),t("hu","hu.js",0,"A weboldal nyelvét nem sikerült automatikusan megállapítani. Kérem adja meg a nyelvet:"),t("hy","hy.js",3,"Չհաջողվեց հայտնաբերել այս կայքի լեզուն։ Խնդրում ենք նշեք հիմնական լեզուն՝"),t("it","it.js",0,"Lingua del sito sconosciuta. Indicare una lingua, per favore:"),t("kn","kn.js",8,"ಜಾಲ ತಾಣದ ಭಾಷೆಯನ್ನು ನಿರ್ಧರಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಮುಖ್ಯ ಭಾಷೆಯನ್ನು ಸೂಚಿಸಿ:"),t("la","la.js",0,""),t("lt","lt.js",0,"Nepavyko automatiškai nustatyti šios svetainės kalbos. Prašome įvesti kalbą:"),t("lv","lv.js",0,"Šīs lapas valodu nevarēja noteikt automātiski. Lūdzu norādiet pamata valodu:"),t("ml","ml.js",10,"ഈ വെ%u0D2C%u0D4D%u200Cസൈറ്റിന്റെ ഭാഷ കണ്ടുപിടിയ്ക്കാ%u0D28%u0D4D%u200D കഴിഞ്ഞില്ല. ഭാഷ ഏതാണെന്നു തിരഞ്ഞെടുക്കുക:"),t("nb","nb-no.js",0,"Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:"),t("no","nb-no.js",0,"Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:"),t("nb-no","nb-no.js",0,"Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:"),t("nl","nl.js",0,"De taal van deze website kan niet automatisch worden bepaald. Geef de hoofdtaal op:"),t("or","or.js",11,""),t("pa","pa.js",13,""),t("pl","pl.js",0,"Języka tej strony nie można ustalić automatycznie. Proszę wskazać język:"),t("pt","pt.js",0,"A língua deste site não pôde ser determinada automaticamente. Por favor indique a língua principal:"),t("ru","ru.js",1,"Язык этого сайта не может быть определен автоматически. Пожалуйста укажите язык:"),t("sk","sk.js",0,""),t("sl","sl.js",0,"Jezika te spletne strani ni bilo mogoče samodejno določiti. Prosim navedite jezik:"),t("sr-cyrl","sr-cyrl.js",1,"Језик овог сајта није детектован аутоматски. Молим вас наведите језик:"),t("sr-latn","sr-latn.js",0,"Jezika te spletne strani ni bilo mogoče samodejno določiti. Prosim navedite jezik:"),t("sv","sv.js",0,"Spr%E5ket p%E5 den h%E4r webbplatsen kunde inte avg%F6ras automatiskt. V%E4nligen ange:"),t("ta","ta.js",14,""),t("te","te.js",15,""),t("tr","tr.js",0,"Bu web sitesinin dili otomatik olarak tespit edilememiştir. Lütfen dökümanın dilini seçiniz%A0:"),t("uk","uk.js",1,"Мова цього веб-сайту не може бути визначена автоматично. Будь ласка, вкажіть головну мову:"),t("ro","ro.js",0,"Limba acestui sit nu a putut fi determinată automat. Alege limba principală:"),e}(),a=function(){for(var e=t.document.getElementsByTagName("script"),n=0,a,r,o=e[n],s="";o;)o.src&&(r=o.src,a=r.indexOf("Hyphenator.js"),-1!==a&&(s=r.substring(0,a))),n+=1,o=e[n];return s?s:"//mnater.github.io/Hyphenator/"}(),r=function(){var t=!1;return-1!==e.location.href.indexOf(a)&&(t=!0),t}(),o=!1,s=!1,i=!1,l={video:!0,audio:!0,script:!0,code:!0,pre:!0,img:!0,br:!0,samp:!0,kbd:!0,"var":!0,abbr:!0,acronym:!0,sub:!0,sup:!0,button:!0,option:!0,label:!0,textarea:!0,input:!0,math:!0,svg:!0,style:!0},c=!0,h="local",p,u=!1,d=!0,g=!1,y=function(t){e.alert("Hyphenator.js says:\n\nAn Error occurred:\n"+t.message)},f=function(t){e.console.log(t.message)},m=function(n,a){a=a||t;var r;return e.document.createElementNS?r=a.document.createElementNS("http://www.w3.org/1999/xhtml",n):e.document.createElement&&(r=a.document.createElement(n)),r},b=!1,v,w=function(){var t,a=function(t){var a=["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","абвгдеёжзийклмнопрстуфхцчшщъыьэюя","أبتثجحخدذرزسشصضطظعغفقكلمنهوي","աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆ","ঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ","ँंःअआइईउऊऋऌएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहऽािीुूृॄेैोौ्॒॑ॠॡॢॣ","αβγδεζηθικλμνξοπρσςτυφχψω","બહઅઆઇઈઉઊઋૠએઐઓઔાિીુૂૃૄૢૣેૈોૌકખગઘઙચછજઝઞટઠડઢણતથદધનપફસભમયરલળવશષ","ಂಃಅಆಇಈಉಊಋಌಎಏಐಒಓಔಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಱಲಳವಶಷಸಹಽಾಿೀುೂೃೄೆೇೈೊೋೌ್ೕೖೞೠೡ","ກຂຄງຈຊຍດຕຖທນບປຜຝພຟມຢຣລວສຫອຮະັາິີຶືຸູົຼເແໂໃໄ່້໊໋ໜໝ","ംഃഅആഇഈഉഊഋഌഎഏഐഒഓഔകഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരറലളഴവശഷസഹാിീുൂൃെേൈൊോൌ്ൗൠൡൺൻർൽൾൿ","ଁଂଃଅଆଇଈଉଊଋଌଏଐଓଔକଖଗଘଙଚଛଜଝଞଟଠଡଢଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହାିୀୁୂୃେୈୋୌ୍ୗୠୡ","أبتثجحخدذرزسشصضطظعغفقكلمنهوي","ਁਂਃਅਆਇਈਉਊਏਐਓਔਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਲ਼ਵਸ਼ਸਹਾਿੀੁੂੇੈੋੌ੍ੰੱ","ஃஅஆஇஈஉஊஎஏஐஒஓஔகஙசஜஞடணதநனபமயரறலளழவஷஸஹாிீுூெேைொோௌ்ௗ","ఁంఃఅఆఇఈఉఊఋఌఎఏఐఒఓఔకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరఱలళవశషసహాిీుూృౄెేైొోౌ్ౕౖౠౡ"],r=function(r){var o,s,i,l=!1;return this.supportedBrowserLangs.hasOwnProperty(r)?l=this.supportedBrowserLangs[r]:n.hasOwnProperty(r)?(i=e.document.getElementsByTagName("body")[0],o=m("div",e),o.id="Hyphenator_LanguageChecker",o.style.width="5em",o.style.padding="0",o.style.border="none",o.style[t]="auto",o.style.hyphens="auto",o.style.fontSize="12px",o.style.lineHeight="12px",o.style.wordWrap="normal",o.style.visibility="hidden",o.lang=r,o.style["-webkit-locale"]="'"+r+"'",o.innerHTML=a[n[r].script],i.appendChild(o),s=o.offsetHeight,i.removeChild(o),l=s>12?!0:!1,this.supportedBrowserLangs[r]=l):l=!1,l};return r},r={support:!1,supportedBrowserLangs:{},property:"",checkLangSupport:{}};return e.getComputedStyle?(t=e.getComputedStyle(e.document.getElementsByTagName("body")[0],null),void 0!==t.hyphens?(r.support=!0,r.property="hyphens",r.checkLangSupport=a("hyphens")):void 0!==t["-webkit-hyphens"]?(r.support=!0,r.property="-webkit-hyphens",r.checkLangSupport=a("-webkit-hyphens")):void 0!==t.MozHyphens?(r.support=!0,r.property="-moz-hyphens",r.checkLangSupport=a("MozHyphens")):void 0!==t["-ms-hyphens"]&&(r.support=!0,r.property="-ms-hyphens",r.checkLangSupport=a("-ms-hyphens")),void(v=r)):void(v=r)},k="hyphenate",C="urlhyphenate",x="Hyphenator"+Math.round(1e3*Math.random()),S=x+"hide",E=new RegExp("\\s?\\b"+S+"\\b","g"),O=x+"unhide",H=new RegExp("\\s?\\b"+O+"\\b","g"),j=x+"css3hyphenate",N,L="donthyphenate",A=6,P=3,T=function(){for(var e=null,n=!1,a=t.document.getElementsByTagName("script"),r=0,o=a.length;!n&&o>r;)e=a[r].getAttribute("src"),e&&-1!==e.indexOf("Hyphenator.js?bm=true")&&(n=!0),r+=1;return n}(),R=null,z="",B=function(){var e=function(e){this.element=e,this.hyphenated=!1,this.treated=!1},t=function(){this.count=0,this.hyCount=0,this.list={}};return t.prototype={add:function(t,n){var a=new e(t);return this.list.hasOwnProperty(n)||(this.list[n]=[]),this.list[n].push(a),this.count+=1,a},remove:function(e){var t,n,a,r;for(t in this.list)if(this.list.hasOwnProperty(t))for(n=0;n<this.list[t].length;n+=1)if(this.list[t][n].element===e){a=n,r=t;break}this.list[r].splice(a,1),this.count-=1,this.hyCount-=1},each:function(e){var t;for(t in this.list)this.list.hasOwnProperty(t)&&(2===e.length?e(t,this.list[t]):e(this.list[t]))}},new t}(),D={},M={},I="(?:\\w*://)?(?:(?:\\w*:)?(?:\\w*)@)?(?:(?:(?:[\\d]{1,3}\\.){3}(?:[\\d]{1,3}))|(?:(?:www\\.|[a-zA-Z]\\.)?[a-zA-Z0-9\\-\\.]+\\.(?:[a-z]{2,4})))(?::\\d*)?(?:/[\\w#!:\\.?\\+=&%@!\\-]*)*",F="[\\w-\\.]+@[\\w\\.]+",q=function(){var t,n=e.navigator.userAgent.toLowerCase();return t=String.fromCharCode(8203),-1!==n.indexOf("msie 6")&&(t=""),-1!==n.indexOf("opera")&&-1!==n.indexOf("version/10.00")&&(t=""),t}(),J=function(e){return e},U=function(e){return e},_=function(e){return e},V=!1,W=function(e){var t=[],n=0,a=0,r=!0;for(t.push(e[0]),n=1;n<e.length;n+=1){for(a=0;a<t.length;a+=1)if(t[a].contains(e[n])){r=!1;break}r&&t.push(e[n]),r=!0}return t},X=function(n){var a,r=[],o,s;if(e.document.getElementsByClassName)r=t.document.getElementsByClassName(n);else if(e.document.querySelectorAll)r=t.document.querySelectorAll("."+n);else for(a=t.document.getElementsByTagName("*"),s=a.length,o=0;s>o;o+=1)-1!==a[o].className.indexOf(n)&&-1===a[o].className.indexOf(L)&&r.push(a[o]);return r},Z=function(){var e;return e=V?V():X(k),0!==e.length&&(e=W(e)),e},G="hidden",K="wait",Y=[],Q=function(t){t=t||e;var n=t.document,a=function(){var e,t=n.styleSheets.length,a,r,o=!1;for(e=0;t>e;e+=1){a=n.styleSheets[e];try{if(a.cssRules){o=a;break}}catch(s){}}return o===!1&&(r=n.createElement("style"),r.type="text/css",n.getElementsByTagName("head")[0].appendChild(r),o=n.styleSheets[n.styleSheets.length-1]),o}(),r=[],o=function(e){var n,a,r=t.document.styleSheets,o,s,i,l=!1;for(s=0;s<r.length;s+=1){n=r[s];try{n.cssRules?o=n.cssRules:n.rules&&(o=n.rules)}catch(c){}if(o&&o.length)for(i=0;i<o.length;i+=1)a=o[i],a.selectorText===e&&(l={index:i,rule:a})}return l},s=function(e,t){var n,r;return a.insertRule?(n=a.cssRules?a.cssRules.length:0,r=a.insertRule(e+"{"+t+"}",n)):a.addRule&&(n=a.rules?a.rules.length:0,a.addRule(e,t,n),r=n),r},i=function(e,t){e.deleteRule?e.deleteRule(t):e.removeRule(t)};return{setRule:function(e,t){var n,i,l;i=o(e),i?(l=i.rule.cssText?i.rule.cssText:i.rule.style.cssText.toLowerCase(),l!==e+" { "+t+" }"&&(-1!==l.indexOf(t)&&(i.rule.style.visibility=""),n=s(e,t),r.push({sheet:a,index:n}))):(n=s(e,t),r.push({sheet:a,index:n}))},clearChanges:function(){for(var e=r.pop();e;)i(e.sheet,e.index),e=r.pop()}}},ee=String.fromCharCode(173),te=q,ne=function(e){var t=e.replace(/([:\/\.\?#&\-_,;!@]+)/gi,"$&"+te),n=t.split(te),a;for(a=0;a<n.length;a+=1)n[a].length>2*A&&(n[a]=n[a].replace(/(\w{3})(\w)/gi,"$1"+te+"$2"));return""===n[n.length-1]&&n.pop(),n.join(te)},ae=!0,re=function(){return e.postMessage&&e.addEventListener?function(){var t=[],n="Hyphenator_zeroTimeOut_message",a=function(a){t.push(a),e.postMessage(n,"*")},r=function(a){a.source===e&&a.data===n&&(a.stopPropagation(),t.length>0&&t.shift()())};return e.addEventListener("message",r,!0),a}():function(t){e.setTimeout(t,0)}}(),oe={},se=function(n,a){var r,s=e.document.addEventListener?"addEventListener":"attachEvent",l=e.document.addEventListener?"removeEventListener":"detachEvent",c=e.document.addEventListener?"":"on",h=function(n){oe[n.location.href]&&f(new Error("Warning: multiple execution of Hyphenator.run() – This may slow down the script!")),t=n||e,a(),oe[t.location.href]=!0},p=function(){try{n.document.documentElement.doScroll("left")}catch(t){return void e.setTimeout(p,1)}oe[n.location.href]||(o=!0,h(n))},u=function(e){var t,r,s;if(!e||"readystatechange"!==e.type||"interactive"===n.document.readyState||"complete"===n.document.readyState)if(n.document[l](c+"DOMContentLoaded",u,!1),n.document[l](c+"readystatechange",u,!1),r=n.frames.length,0!==r&&i){if(i&&r>0&&e&&"load"===e.type){for(n[l](c+"load",u,!1),t=0;r>t;t+=1){s=void 0;try{s=n.frames[t].document.toString()}catch(p){s=void 0}s&&se(n.frames[t],a)}h(n)}}else n[l](c+"load",u,!1),o=!0,h(n)};if(o||"complete"===n.document.readyState)o=!0,u({type:"load"});else{n.document[s](c+"DOMContentLoaded",u,!1),n.document[s](c+"readystatechange",u,!1),n[s](c+"load",u,!1),r=!1;try{r=!e.frameElement}catch(d){}r&&n.document.documentElement.doScroll&&p()}},ie=function(e,t){try{return e.getAttribute("lang")?e.getAttribute("lang").toLowerCase():e.getAttribute("xml:lang")?e.getAttribute("xml:lang").toLowerCase():"html"!==e.tagName.toLowerCase()?ie(e.parentNode,t):t?R:null}catch(n){}},le=function(r){r=r||t;var o=r.document.getElementsByTagName("html")[0],s=r.document.getElementsByTagName("meta"),l,c=function(){var t,o="",s=300,i=450,l=Math.floor((r.outerWidth-i)/2)+e.screenX,c=Math.floor((r.outerHeight-s)/2)+e.screenY,h="",p;return e.showModalDialog&&-1!==r.location.href.indexOf(a)?t=e.showModalDialog(a+"modalLangDialog.html",n,"dialogWidth: "+i+"px; dialogHeight: "+s+"px; dialogtop: "+c+"; dialogleft: "+l+"; center: on; resizable: off; scroll: off;"):(p=function(){var e,t="";for(e in n)n.hasOwnProperty(e)&&(t+=e+", ");return t=t.substring(0,t.length-2)}(),h=e.navigator.language||e.navigator.userLanguage,h=h.substring(0,2),o=n[h]&&""!==n[h].prompt?n[h].prompt:n.en.prompt,o+=" (ISO 639-1)\n\n"+p,t=e.prompt(e.unescape(o),h).toLowerCase()),t};if(R=ie(o,!1),!R)for(l=0;l<s.length;l+=1)s[l].getAttribute("http-equiv")&&"content-language"===s[l].getAttribute("http-equiv").toLowerCase()&&(R=s[l].getAttribute("content").toLowerCase()),s[l].getAttribute("name")&&"dc.language"===s[l].getAttribute("name").toLowerCase()&&(R=s[l].getAttribute("content").toLowerCase()),s[l].getAttribute("name")&&"language"===s[l].getAttribute("name").toLowerCase()&&(R=s[l].getAttribute("content").toLowerCase());!R&&i&&t.frameElement&&le(e.parent),R||""===z||(R=z),R||(R=c()),o.lang=R},ce=function(){var e,a,r,o=0,s=function(a,r,o){o=o||!1;var i,c=0,h=!0,p,u=function(){N=new Q(t),N.setRule("."+j,v.property+": auto;"),N.setRule("."+L,v.property+": manual;"),p!==r&&-1!==v.property.indexOf("webkit")&&N.setRule("."+j,"-webkit-locale : "+p+";"),a.className=a.className+" "+j},d=function(){T&&p!==R||(n.hasOwnProperty(p)?M[p]=!0:n.hasOwnProperty(p.split("-")[0])?(p=p.split("-")[0],M[p]=!0):T||(h=!1,y(new Error('Language "'+p+'" is not yet supported.'))),h&&("hidden"===G&&(a.className=a.className+" "+S),B.add(a,p)))};for(p=a.lang&&"string"==typeof a.lang?a.lang.toLowerCase():r&&""!==r?r.toLowerCase():ie(a,!0),o?p!==r?b&&v.support&&v.checkLangSupport(p)?u():d():b&&v.support&&v.checkLangSupport(p)||d():b&&v.support&&v.checkLangSupport(p)?u():d(),i=a.childNodes[c];i;)1!==i.nodeType||l[i.nodeName.toLowerCase()]||-1!==i.className.indexOf(L)||-1!==i.className.indexOf(C)||e[i]||s(i,p,!0),c+=1,i=a.childNodes[c]},i=function(e){var t,n=0;for(t=e.childNodes[n];t;)1!==t.nodeType||l[t.nodeName.toLowerCase()]||-1!==t.className.indexOf(L)||-1!==t.className.indexOf(k)||a[t]?3===t.nodeType&&(t.data=ne(t.data)):i(t),n+=1,t=e.childNodes[n]};if(b&&w(),T)e=t.document.getElementsByTagName("body")[0],s(e,R,!1);else{for(b||"hidden"!==G||(Y.push(new Q(t)),Y[Y.length-1].setRule("."+k,"visibility: hidden;"),Y[Y.length-1].setRule("."+S,"visibility: hidden;"),Y[Y.length-1].setRule("."+O,"visibility: visible;")),e=Z(),r=e[o];r;)s(r,"",!1),o+=1,r=e[o];for(a=X(C),o=0,r=a[o];r;)i(r),o+=1,r=a[o]}if(0===B.count){for(o=0;o<Y.length;o+=1)Y[o].clearChanges();_(t.location.href)}},he=function(){this.int2code=[],this.code2int={},this.add=function(e){this.code2int[e]||(this.int2code.push(e),this.code2int[e]=this.int2code.length-1)}},pe=function(t){var n=1,a=2,r=2;this.keys=function(){var n,a;if(Object.prototype.hasOwnProperty.call(e,"Uint8Array"))return new e.Uint8Array(t);for(a=[],a.length=t,n=a.length-1;n>=0;n-=1)a[n]=0;return a}(),this.add=function(e){this.keys[a]=e,r=a,a+=1},this.add0=function(){a+=1},this.finalize=function(){var e=n;return this.keys[e]=r-e,n=r+1,a=r+2,e}},ue=function(t){var n=0,a,r,o,s,i,l=function(e,t){var a=0,l=0,c=0,h=0,p=0,u=!1;for(a=0;a<t.length;a+=1)l=t.charCodeAt(a),(a+1)%e!==0?57>=l&&l>=49?(o.add(l-48),u=!0):(u||o.add0(),u=!1,-1===p&&(p=n+i,n=p,s[h+2*c]=p),c=r[l],h=p,p=s[h+2*c],0===p&&(s[h+2*c]=-1,p=-1)):(57>=l&&l>=49?(o.add(l-48),s[h+2*c+1]=o.finalize()):(u||o.add0(),o.add0(),-1===p&&(p=n+i,n=p,s[h+2*c]=p),c=r[l],h=p,0===s[h+2*c]&&(s[h+2*c]=-1),s[h+2*c+1]=o.finalize()),h=0,p=0,u=!1)};for(t.charMap=new he,a=0;a<t.patternChars.length;a+=1)t.charMap.add(t.patternChars.charCodeAt(a));if(r=t.charMap.code2int,t.valueStore=o=new pe(t.valueStoreLength),Object.prototype.hasOwnProperty.call(e,"Int32Array"))t.indexedTrie=new e.Int32Array(2*t.patternArrayLength);else for(t.indexedTrie=[],t.indexedTrie.length=2*t.patternArrayLength,a=t.indexedTrie.length-1;a>=0;a-=1)t.indexedTrie[a]=0;s=t.indexedTrie,i=2*t.charMap.int2code.length;for(a in t.patterns)t.patterns.hasOwnProperty(a)&&l(parseInt(a,10),t.patterns[a])},de=function(e,t){var n=[],a=e.split(""),r;for(r=0;r<=a.length;r+=1)t[r]&&0!==t[r]&&n.push(t[r]),a[r]&&n.push(a[r]);return n.join("")},ge=function(e){var t=e.split(", "),n={},a,r,o;for(a=0,r=t.length;r>a;a+=1)o=t[a].replace(/-/g,""),n.hasOwnProperty(o)||(n[o]=t[a]);return n},ye=function(t,o){var s,i,l,c,h=!1;if(n.hasOwnProperty(t)&&!Hyphenator.languages[t]){if(s=a+"patterns/"+n[t].file,r&&!T){i=null;try{i=new e.XMLHttpRequest}catch(p){try{i=new e.ActiveXObject("Microsoft.XMLHTTP")}catch(u){try{i=new e.ActiveXObject("Msxml2.XMLHTTP")}catch(d){i=null}}}i&&(i.open("HEAD",s,!0),i.setRequestHeader("Cache-Control","no-cache"),i.onreadystatechange=function(){if(2===i.readyState){if(i.status>=400)return y(new Error("Could not load\n"+s)),void delete M[t];i.abort()}},i.send(null))}m&&(l=e.document.getElementsByTagName("head").item(0),c=m("script",e),c.src=s,c.type="text/javascript",c.charset="utf8",c.onload=c.onreadystatechange=function(){h||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(h=!0,o(),c.onload=c.onreadystatechange=null,l&&c.parentNode&&l.removeChild(c))},l.appendChild(c))}},fe=function(e){var t=Hyphenator.languages[e],n;t.prepared||(c&&(t.cache={}),u&&(t.redPatSet={}),t.hasOwnProperty("exceptions")&&(Hyphenator.addExceptions(e,t.exceptions),delete t.exceptions),D.hasOwnProperty("global")&&(D.hasOwnProperty(e)?D[e]+=", "+D.global:D[e]=D.global),D.hasOwnProperty(e)?(t.exceptions=ge(D[e]),delete D[e]):t.exceptions={},ue(t),n=String.prototype.normalize?"[\\w"+t.specialChars+t.specialChars.normalize("NFD")+String.fromCharCode(173)+String.fromCharCode(8204)+"-]{"+A+",}":"[\\w"+t.specialChars+String.fromCharCode(173)+String.fromCharCode(8204)+"-]{"+A+",}",t.genRegExp=new RegExp("("+n+")|("+I+")|("+F+")","gi"),t.prepared=!0)},me=function(t){var n,a,r,o=function(){var n;for(n in M)M.hasOwnProperty(n)&&Hyphenator.languages.hasOwnProperty(n)&&(delete M[n],p&&p.setItem(n,e.JSON.stringify(Hyphenator.languages[n])),fe(n),t(n))};if(!d){for(n in Hyphenator.languages)Hyphenator.languages.hasOwnProperty(n)&&fe(n);return void t("*")}for(n in M)if(M.hasOwnProperty(n))if(p&&p.test(n)){if(Hyphenator.languages[n]=e.JSON.parse(p.getItem(n)),fe(n),D.hasOwnProperty("global")){a=ge(D.global);for(r in a)a.hasOwnProperty(r)&&(Hyphenator.languages[n].exceptions[r]=a[r])}if(D.hasOwnProperty(n)){a=ge(D[n]);for(r in a)a.hasOwnProperty(r)&&(Hyphenator.languages[n].exceptions[r]=a[r]);delete D[n]}a=String.prototype.normalize?"[\\w"+Hyphenator.languages[n].specialChars+Hyphenator.languages[n].specialChars.normalize("NFD")+String.fromCharCode(173)+String.fromCharCode(8204)+"-]{"+A+",}":"[\\w"+Hyphenator.languages[n].specialChars+String.fromCharCode(173)+String.fromCharCode(8204)+"-]{"+A+",}",Hyphenator.languages[n].genRegExp=new RegExp("("+a+")|("+I+")|("+F+")","gi"),c&&(Hyphenator.languages[n].cache||(Hyphenator.languages[n].cache={})),delete M[n],t(n)}else ye(n,o);o()},be=function(){var e,n,a=Hyphenator.doHyphenation?"Hy-phen-a-tion":"Hyphenation",r=t.document.getElementById("HyphenatorToggleBox");r?r.firstChild.data=a:(e=t.document.getElementsByTagName("body")[0],r=m("div",t),r.setAttribute("id","HyphenatorToggleBox"),r.setAttribute("class",L),n=t.document.createTextNode(a),r.appendChild(n),r.onclick=Hyphenator.toggleHyphenation,r.style.position="absolute",r.style.top="0px",r.style.right="0px",r.style.zIndex="1000",r.style.margin="0",r.style.backgroundColor="#AAAAAA",r.style.color="#FFFFFF",r.style.font="6pt Arial",r.style.letterSpacing="0.2em",r.style.padding="3px",r.style.cursor="pointer",r.style.WebkitBorderBottomLeftRadius="4px",r.style.MozBorderRadiusBottomleft="4px",r.style.borderBottomLeftRadius="4px",e.appendChild(r))},ve=function(e,t){var n,a;for(n in e)e.hasOwnProperty(n)&&(a=t.replace(new RegExp(n,"g"),e[n]));return a},we=function(){return Object.prototype.hasOwnProperty.call(e,"Int32Array")?new e.Int32Array(64):[]}(),ke=function(){var t;return t=Object.prototype.hasOwnProperty.call(e,"Uint8Array")?new e.Uint8Array(64):[]}(),Ce=function(e,t,n){var a,r,o="",s,i,l=ke,h,p,d,g=n.length,y="",f=e.charMap.code2int,m,b,v=0,w=0,k=0,C,x=e.indexedTrie,S=e.valueStore.keys,E=we;if(n=J(n,t),""===n)y="";else if(c&&e.cache&&e.cache.hasOwnProperty(n))y=e.cache[n];else if(-1!==n.indexOf(ee))y=n;else if(e.exceptions.hasOwnProperty(n))y=e.exceptions[n].replace(/-/g,ee);else if(-1!==n.indexOf("-")){for(a=n.split("-"),r=0;r<a.length;r+=1)a[r]=Ce(e,t,a[r]);y=a.join("-")}else{for(s=n.toLowerCase(),String.prototype.normalize&&(s=s.normalize("NFC")),e.hasOwnProperty("charSubstitution")&&(s=ve(e.charSubstitution,s)),-1!==n.indexOf("'")&&(s=s.replace(/'/g,"’")),s="_"+s+"_",i=s.length,h=0;i>h;h+=1)l[h]=0,m=s.charCodeAt(h),void 0!==f[m]?E[h]=f[m]:E[h]=-1;for(h=0;i>h;h+=1)for(v=0,o="",p=h;i>p&&(b=E[p],-1!==b);p+=1){if(u&&(o+=s.charAt(p)),w=x[v+2*b],k=x[v+2*b+1],k>0){for(d=S[k];d;)d-=1,S[k+1+d]>l[h+d]&&(l[h+d]=S[k+1+d]);u&&(e.redPatSet||(e.redPatSet={}),C=S.subarray?S.subarray(k+1,k+1+S[k]):S.slice(k+1,k+1+S[k]),e.redPatSet[o]=de(o,C))}if(!(w>0))break;v=w}for(d=0;g>d;d+=1)y+=d>=e.leftmin&&d<=g-e.rightmin&&l[d+1]%2!==0?ee+n.charAt(d):n.charAt(d)}return y=U(y,t),c&&(e.cache[n]=y),y},xe=function(e){var t,n,a=0,r;switch(ee){case"|":t="\\|";break;case"+":t="\\+";break;case"*":t="\\*";break;default:t=ee}switch(te){case"|":n="\\|";break;case"+":n="\\+";break;case"*":n="\\*";break;default:n=te}for(r=e.childNodes[a];r;)3===r.nodeType?(r.data=r.data.replace(new RegExp(t,"g"),""),r.data=r.data.replace(new RegExp(n,"g"),"")):1===r.nodeType&&xe(r),a+=1,r=e.childNodes[a]},Se=function(){var t=function(){this.oncopyHandler=function(t){t=t||e.event;var n,a,r,o,s,i=t.target||t.srcElement,c=i.ownerDocument,h=c.getElementsByTagName("body")[0],p=c.defaultView||c.parentWindow;i.tagName&&l[i.tagName.toLowerCase()]||(n=c.createElement("div"),n.style.color=e.getComputedStyle?p.getComputedStyle(h,null).backgroundColor:"#FFFFFF",n.style.fontSize="0px",h.appendChild(n),e.getSelection?(t.stopPropagation(),a=p.getSelection(),r=a.getRangeAt(0),n.appendChild(r.cloneContents()),xe(n),a.selectAllChildren(n),s=function(){n.parentNode.removeChild(n),a.removeAllRanges(),a.addRange(r)}):(t.cancelBubble=!0,a=p.document.selection,r=a.createRange(),n.innerHTML=r.htmlText,xe(n),o=h.createTextRange(),o.moveToElementText(n),o.select(),s=function(){n.parentNode.removeChild(n),""!==r.text&&r.select()}),re(s))},this.removeOnCopy=function(t){var n=t.ownerDocument.getElementsByTagName("body")[0];n&&(t=t||n,e.removeEventListener?t.removeEventListener("copy",this.oncopyHandler,!0):t.detachEvent("oncopy",this.oncopyHandler))},this.registerOnCopy=function(t){var n=t.ownerDocument.getElementsByTagName("body")[0];n&&(t=t||n,e.addEventListener?t.addEventListener("copy",this.oncopyHandler,!0):t.attachEvent("oncopy",this.oncopyHandler))}};return ae?new t:!1}(),Ee=function(){var e=!0,n,a={},r;if(B.each(function(t){var n,r=t.length;for(n=0;r>n;n+=1)e=e&&t[n].hyphenated,a.hasOwnProperty(t[n].element.baseURI)||(a[t[n].element.ownerDocument.location.href]=!0),a[t[n].element.ownerDocument.location.href]=a[t[n].element.ownerDocument.location.href]&&t[n].hyphenated}),e){for("hidden"===G&&"progressive"===K&&B.each(function(e){var t,n=e.length,a;for(t=0;n>t;t+=1)a=e[t].element,a.className=a.className.replace(H,""),""===a.className&&a.removeAttribute("class")}),n=0;n<Y.length;n+=1)Y[n].clearChanges();for(r in a)a.hasOwnProperty(r)&&r===t.location.href&&_(r);if(p&&p.deferred.length>0){for(n=0;n<p.deferred.length;n+=1)p.deferred[n].call();p.deferred=[]}}},Oe=function(e){var t,n;switch(ee){case"|":t="\\|";break;case"+":t="\\+";break;case"*":t="\\*";break;default:t=ee}return e=e.replace(/[\s]*$/,""),P>=2&&(n=e.split(" "),n[1]=n[1].replace(new RegExp(t,"g"),""),n[1]=n[1].replace(new RegExp(q,"g"),""),n=n.join(" ")),3===P&&(n=n.replace(/[ ]+/g,String.fromCharCode(160))),n},He=function(e,t){var n=t.element,a,r,o,s;if(Hyphenator.languages.hasOwnProperty(e)&&Hyphenator.doHyphenation)for(s=Hyphenator.languages[e],a=function(t,n,a,r){var o;return o=a||r?ne(t):Ce(s,e,n)},ae&&"body"!==n.tagName.toLowerCase()&&Se.registerOnCopy(n),o=0,r=n.childNodes[o];r;)3===r.nodeType&&/\S/.test(r.data)&&r.data.length>=A&&(r.data=r.data.replace(s.genRegExp,a),1!==P&&(r.data=r.data.replace(/[\S]+ [\S]+[\s]*$/,Oe))),o+=1,r=n.childNodes[o];"hidden"===G&&"wait"===K&&(n.className=n.className.replace(E,""),""===n.className&&n.removeAttribute("class")),"hidden"===G&&"progressive"===K&&(n.className=n.className.replace(E," "+O)),t.hyphenated=!0,B.hyCount+=1,B.count<=B.hyCount&&Ee()},je=function(e){var t,n;if("*"===e)B.each(function(e,t){var n,a=t.length;for(n=0;a>n;n+=1)He(e,t[n])});else if(B.list.hasOwnProperty(e))for(n=B.list[e].length,t=0;n>t;t+=1)He(e,B.list[e][t])},Ne=function(){B.each(function(e){var t,n=e.length;for(t=0;n>t;t+=1)xe(e[t].element),ae&&Se.removeOnCopy(e[t].element),e[t].hyphenated=!1})},Le=function(){var t;try{if("none"!==h&&void 0!==e.JSON&&void 0!==e.localStorage&&void 0!==e.sessionStorage&&void 0!==e.JSON.stringify&&void 0!==e.JSON.parse){switch(h){case"session":t=e.sessionStorage;break;case"local":t=e.localStorage;break;default:t=void 0}t.setItem("storageTest","1"),t.removeItem("storageTest")}}catch(n){t=void 0}p=t?{prefix:"Hyphenator_"+Hyphenator.version+"_",store:t,deferred:[],test:function(e){var t=this.store.getItem(this.prefix+e);return t?!0:!1},getItem:function(e){return this.store.getItem(this.prefix+e)},setItem:function(e,t){try{this.store.setItem(this.prefix+e,t)}catch(n){y(n)}}}:void 0},Ae=function(){if(p){var t={STORED:!0,classname:k,urlclassname:C,donthyphenateclassname:L,minwordlength:A,hyphenchar:ee,urlhyphenchar:te,togglebox:be,displaytogglebox:g,remoteloading:d,enablecache:c,enablereducedpatternset:u,onhyphenationdonecallback:_,onerrorhandler:y,onwarninghandler:f,intermediatestate:G,selectorfunction:V||X,safecopy:ae,doframes:i,storagetype:h,orphancontrol:P,dohyphenation:Hyphenator.doHyphenation,persistentconfig:s,defaultlanguage:z,useCSS3hyphenation:b,unhide:K,onbeforewordhyphenation:J,onafterwordhyphenation:U};p.setItem("config",e.JSON.stringify(t))}},Pe=function(){var t;p.test("config")&&(t=e.JSON.parse(p.getItem("config")),Hyphenator.config(t))};return{version:"5.2.0(devel)",doHyphenation:!0,languages:{},config:function(e){var t=function(t,n){var a,r;return r=typeof e[t],r===n?a=!0:(y(new Error("Config onError: "+t+" must be of type "+n)),a=!1),a},n;e.hasOwnProperty("storagetype")&&(t("storagetype","string")&&(h=e.storagetype),p||Le()),!e.hasOwnProperty("STORED")&&p&&e.hasOwnProperty("persistentconfig")&&e.persistentconfig===!0&&Pe();for(n in e)if(e.hasOwnProperty(n))switch(n){case"STORED":break;case"classname":t("classname","string")&&(k=e[n]);break;case"urlclassname":t("urlclassname","string")&&(C=e[n]);break;case"donthyphenateclassname":t("donthyphenateclassname","string")&&(L=e[n]);break;case"minwordlength":t("minwordlength","number")&&(A=e[n]);break;case"hyphenchar":t("hyphenchar","string")&&("&shy;"===e.hyphenchar&&(e.hyphenchar=String.fromCharCode(173)),ee=e[n]);break;case"urlhyphenchar":e.hasOwnProperty("urlhyphenchar")&&t("urlhyphenchar","string")&&(te=e[n]);break;case"togglebox":t("togglebox","function")&&(be=e[n]);break;case"displaytogglebox":t("displaytogglebox","boolean")&&(g=e[n]);break;case"remoteloading":t("remoteloading","boolean")&&(d=e[n]);break;case"enablecache":t("enablecache","boolean")&&(c=e[n]);break;case"enablereducedpatternset":t("enablereducedpatternset","boolean")&&(u=e[n]);break;case"onhyphenationdonecallback":t("onhyphenationdonecallback","function")&&(_=e[n]);break;case"onerrorhandler":t("onerrorhandler","function")&&(y=e[n]);break;case"onwarninghandler":t("onwarninghandler","function")&&(f=e[n]);break;case"intermediatestate":t("intermediatestate","string")&&(G=e[n]);break;case"selectorfunction":t("selectorfunction","function")&&(V=e[n]);break;case"safecopy":t("safecopy","boolean")&&(ae=e[n]);break;case"doframes":t("doframes","boolean")&&(i=e[n]);break;case"storagetype":t("storagetype","string")&&(h=e[n]);break;case"orphancontrol":t("orphancontrol","number")&&(P=e[n]);break;case"dohyphenation":t("dohyphenation","boolean")&&(Hyphenator.doHyphenation=e[n]);break;case"persistentconfig":t("persistentconfig","boolean")&&(s=e[n]);break;case"defaultlanguage":t("defaultlanguage","string")&&(z=e[n]);break;case"useCSS3hyphenation":t("useCSS3hyphenation","boolean")&&(b=e[n]);break;case"unhide":t("unhide","string")&&(K=e[n]);break;case"onbeforewordhyphenation":t("onbeforewordhyphenation","function")&&(J=e[n]);break;case"onafterwordhyphenation":t("onafterwordhyphenation","function")&&(U=e[n]);break;default:y(new Error("Hyphenator.config: property "+n+" not known."))}p&&s&&Ae()},run:function(){var n=function(){try{if(t.document.getElementsByTagName("frameset").length>0)return;le(void 0),ce(),g&&be(),me(je)}catch(e){y(e)}};p||Le(),se(e,n)},addExceptions:function(e,t){""===e&&(e="global"),D.hasOwnProperty(e)?D[e]+=", "+t:D[e]=t},hyphenate:function(e,t){var n,a,r,o;if(o=Hyphenator.languages[t],Hyphenator.languages.hasOwnProperty(t)){if(o.prepared||fe(t),n=function(e,n,a,r){var s;return s=a||r?ne(e):Ce(o,t,n)},"object"==typeof e&&"string"!=typeof e&&e.constructor!==String)for(r=0,a=e.childNodes[r];a;)3===a.nodeType&&/\S/.test(a.data)&&a.data.length>=A?a.data=a.data.replace(o.genRegExp,n):1===a.nodeType&&(""!==a.lang?Hyphenator.hyphenate(a,a.lang):Hyphenator.hyphenate(a,t)),r+=1,a=e.childNodes[r];else if("string"==typeof e||e.constructor===String)return e.replace(o.genRegExp,n)}else y(new Error('Language "'+t+'" is not loaded.'))},getRedPatternSet:function(e){return Hyphenator.languages[e].redPatSet},isBookmarklet:function(){return T},getConfigFromURI:function(){var e=null,n={},a=t.document.getElementsByTagName("script"),r,o,s,i,l,c;for(r=0,s=a.length;s>r;r+=1)if(a[r].getAttribute("src")&&(e=a[r].getAttribute("src")),e&&-1!==e.indexOf("Hyphenator.js?")){for(i=e.indexOf("Hyphenator.js?"),l=e.substring(i+14).split("&"),o=0;o<l.length;o+=1)c=l[o].split("="),"bm"!==c[0]&&("true"===c[1]?c[1]=!0:"false"===c[1]?c[1]=!1:isFinite(c[1])&&(c[1]=parseInt(c[1],10)),("togglebox"===c[0]||"onhyphenationdonecallback"===c[0]||"onerrorhandler"===c[0]||"selectorfunction"===c[0]||"onbeforewordhyphenation"===c[0]||"onafterwordhyphenation"===c[0])&&(c[1]=new Function("",c[1])),n[c[0]]=c[1]);break}return n},toggleHyphenation:function(){Hyphenator.doHyphenation?(N&&N.setRule("."+j,v.property+": none;"),Ne(),Hyphenator.doHyphenation=!1,Ae(),be()):(N&&N.setRule("."+j,v.property+": auto;"),Hyphenator.doHyphenation=!0,je("*"),Ae(),be())}}}(window);Hyphenator.isBookmarklet()&&(Hyphenator.config({displaytogglebox:!0,intermediatestate:"visible",storagetype:"local",doframes:!0,useCSS3hyphenation:!0}),Hyphenator.config(Hyphenator.getConfigFromURI()),Hyphenator.run()),Hyphenator.config({useCSS3hyphenation:!0}),Hyphenator.run();