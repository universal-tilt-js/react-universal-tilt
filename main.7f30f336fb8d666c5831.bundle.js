(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{234:function(module,exports,__webpack_require__){(function(global){"object"!=typeof window?global.window=global:window,module.exports=function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,s=(n=i(1))&&n.__esModule?n:{default:n},o=s.default;t.default=o,t.default=s.default,e.exports=t.default},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,s=(n=i(2))&&n.__esModule?n:{default:n};function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var a=function(){function e(t){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"onMouseEnter",function(){i.updateElementPosition(),i.transitions(),"function"==typeof i.callbacks.onMouseEnter&&i.callbacks.onMouseEnter(i.element)}),r(this,"onMouseMove",function(e){null!==i.updateCall&&cancelAnimationFrame(i.updateCall),i.event=e,i.updateElementPosition(),i.updateCall=requestAnimationFrame(function(){return i.update()}),"function"==typeof i.callbacks.onMouseMove&&i.callbacks.onMouseMove(i.element)}),r(this,"onMouseLeave",function(){i.transitions(),requestAnimationFrame(function(){return i.reset()}),"function"==typeof i.callbacks.onMouseLeave&&i.callbacks.onMouseLeave(i.element)}),r(this,"onDeviceMove",function(e){i.event=e,i.update(),i.updateElementPosition(),i.transitions(),"function"==typeof i.callbacks.onDeviceMove&&i.callbacks.onDeviceMove(i.element)}),this.element=t,this.callbacks=s,this.settings=this.extendSettings(n),"function"==typeof this.callbacks.onInit&&this.callbacks.onInit(this.element),this.reverse=this.settings.reverse?-1:1,this.settings.shine&&this.shine(),this.element.style.transform="perspective(".concat(this.settings.perspective,"px)"),this.reset(),this.addEventListeners()}var t,i,n;return t=e,n=[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.elements,n=t.settings,s=t.callbacks;i instanceof Node&&(i=[i]),i instanceof NodeList&&(i=[].slice.call(i));var o=!0,r=!1,a=void 0;try{for(var l,c=i[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){var u=l.value;if(!("universalTilt"in u))return u.universalTilt=new e(u,n,s)}}catch(e){r=!0,a=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}}}],(i=[{key:"isMobile",value:function(){return window.DeviceMotionEvent&&"ontouchstart"in document.documentElement}},{key:"addEventListeners",value:function(){var e;this.base=this.settings.base,s.default.name.match(this.settings.exclude)||(null===(e=s.default.product)||void 0===e?void 0:e.match(this.settings.exclude))||(this.isMobile()&&this.settings.gyroscope?window.addEventListener("devicemotion",this.onDeviceMove):(this.base.addEventListener("mouseenter",this.onMouseEnter),this.base.addEventListener("mousemove",this.onMouseMove),this.base.addEventListener("mouseleave",this.onMouseLeave)))}},{key:"removeEventListeners",value:function(){window.removeEventListener("devicemotion",this.onDeviceMove),this.base.removeEventListener("mouseenter",this.onMouseEnter),this.base.removeEventListener("mousemove",this.onMouseMove),this.base.removeEventListener("mouseleave",this.onMouseLeave)}},{key:"destroy",value:function(){clearTimeout(this.timeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),"function"==typeof this.callbacks.onDestroy&&this.callbacks.onDestroy(this.element),this.reset(),this.removeEventListeners(),this.element.universalTilt=null,delete this.element.universalTilt,this.element=null}},{key:"reset",value:function(){this.event={pageX:this.left+this.width/2,pageY:this.top+this.height/2},this.settings.reset&&(this.element.style.transform="perspective(".concat(this.settings.perspective,"px) rotateX(").concat(this.settings.startX,"deg) rotateY(").concat(this.settings.startY,"deg) scale3d(1, 1, 1)")),this.settings.shine&&!this.settings["shine-save"]&&Object.assign(this.shineElement.style,{transform:"rotate(180deg) translate3d(-50%, -50%, 0)",opacity:"0"})}},{key:"setValues",value:function(e,t){this.x=e,this.y=t}},{key:"getValues",value:function(){var e,t,i;this.x||this.y?(e=this.x,t=this.y):(this.isMobile()&&this.settings.gyroscope?(e=this.event.accelerationIncludingGravity.x/4,t=this.event.accelerationIncludingGravity.y/4,90===window.orientation?(i=(1-t)/2,t=(1+e)/2,e=i):-90===window.orientation?(i=(1+t)/2,t=(1-e)/2,e=i):0===window.orientation?(t=i=(1+t)/2,e=(1+e)/2):180===window.orientation&&(t=i=(1-t)/2,e=(1-e)/2)):(e=(this.event.clientX-this.left)/this.width,t=(this.event.clientY-this.top)/this.height),e=Math.min(Math.max(e,0),1),t=Math.min(Math.max(t,0),1));var n=(this.settings.max/2-e*this.settings.max).toFixed(2),s=(t*this.settings.max-this.settings.max/2).toFixed(2),o=Math.atan2(e-.5,.5-t)*(180/Math.PI);return{tiltX:this.reverse*n,tiltY:this.reverse*s,angle:o}}},{key:"updateElementPosition",value:function(){if(this.width=this.base.offsetWidth||this.base.innerWidth,this.height=this.base.offsetHeight||this.base.innerWidth,this.base.getBoundingClientRect){var e=this.base.getBoundingClientRect();this.left=e.left,this.top=e.top}else this.left=0,this.top=0}},{key:"update",value:function(){var e=this.getValues();this.element.style.transform="perspective(".concat(this.settings.perspective,"px)\n      rotateX(").concat(this.settings.disabled&&"X"===this.settings.disabled.toUpperCase()?0:e.tiltY,"deg)\n      rotateY(").concat(this.settings.disabled&&"Y"===this.settings.disabled.toUpperCase()?0:e.tiltX,"deg)\n      scale3d(").concat(this.settings.scale,", ").concat(this.settings.scale,", ").concat(this.settings.scale,")"),this.settings.shine&&Object.assign(this.shineElement.style,{transform:"rotate(".concat(e.angle,"deg) translate3d(-50%, -50%, 0)"),opacity:"".concat(this.settings["shine-opacity"])}),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:e})),this.updateCall=null}},{key:"shine",value:function(){if(!this.settings["shine-prerender"]){var e=document.createElement("div"),t=document.createElement("div");e.classList.add("shine"),t.classList.add("shine-inner"),e.appendChild(t),this.element.appendChild(e)}this.shineWrapper=this.element.querySelector(".shine"),this.shineElement=this.element.querySelector(".shine-inner"),this.settings["shine-prerender"]||(Object.assign(this.shineWrapper.style,{position:"absolute",top:"0",left:"0",height:"100%",width:"100%",overflow:"hidden"}),Object.assign(this.shineElement.style,{position:"absolute",top:"50%",left:"50%",pointerEvents:"none",backgroundImage:"radial-gradient(circle at top center, rgba(252,253,255,1) 20%,rgba(255,255,255,0) 60%)",width:"".concat(2*this.element.offsetWidth,"px"),height:"".concat(2*this.element.offsetWidth,"px"),transform:"rotate(180deg) translate3d(-50%, -50%, 0)",transformOrigin:"0% 0%",opacity:"0"}))}},{key:"transitions",value:function(){var e=this;clearTimeout(this.timeout),this.element.style.transition="all ".concat(this.settings.speed,"ms ").concat(this.settings.easing),this.settings.shine&&(this.shineElement.style.transition="opacity ".concat(this.settings.speed,"ms ").concat(this.settings.easing)),this.timeout=setTimeout(function(){e.element.style.transition="",e.settings.shine&&(e.shineElement.style.transition="")},this.settings.speed)}},{key:"extendSettings",value:function(e){var t={base:this.element,disabled:null,easing:"cubic-bezier(.03, .98, .52, .99)",exclude:null,gyroscope:!0,max:35,perspective:1e3,reset:!0,reverse:!1,scale:1,shine:!1,"shine-opacity":0,"shine-prerender":!1,"shine-save":!1,speed:300,startX:0,startY:0},i={};for(var n in t)if(n in e)i[n]=e[n];else if(this.element.getAttribute("data-".concat(n))){var s=this.element.getAttribute("data-".concat(n));try{i[n]=JSON.parse(s)}catch(e){i[n]=s}}else i[n]=t[n];return i}}])&&o(t.prototype,i),n&&o(t,n),e}();if(t.default=a,"undefined"!=typeof document){window.UniversalTilt=a;var l=document.querySelectorAll("[data-tilt]");l.length&&a.init({elements:l})}window.jQuery&&(window.jQuery.fn.universalTilt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.init({elements:this,settings:e.settings||{},callbacks:e.callbacks||{}})})},function(e,t,i){(function(e,n){var s;
/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <https://mths.be/mit>
 */
/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <https://mths.be/mit>
 */
(function(){"use strict";var o={function:!0,object:!0},r=o[typeof window]&&window||this,a=o[typeof t]&&t,l=o[typeof e]&&e&&!e.nodeType&&e,c=a&&l&&"object"==typeof n&&n;!c||c.global!==c&&c.window!==c&&c.self!==c||(r=c);var u=Math.pow(2,53)-1,d=/\bOpera/,b=Object.prototype,h=b.hasOwnProperty,p=b.toString;function f(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function m(e){return e=S(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:f(e)}function v(e,t){for(var i in e)h.call(e,i)&&t(e[i],i,e)}function g(e){return null==e?f(e):p.call(e).slice(8,-1)}function y(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function x(e,t){var i=null;return function(e,t){var i=-1,n=e?e.length:0;if("number"==typeof n&&n>-1&&n<=u)for(;++i<n;)t(e[i],i);else v(e,t)}(e,function(n,s){i=t(i,n,s,e)}),i}function S(e){return String(e).replace(/^ +| +$/g,"")}var M=function e(t){var i=r,n=t&&"object"==typeof t&&"String"!=g(t);n&&(i=t,t=null);var s=i.navigator||{},o=s.userAgent||"";t||(t=o);var a,l,c,u,b,h=n?!!s.likeChrome:/\bChrome\b/.test(t)&&!/internal|\n/i.test(p.toString()),f=n?"Object":"ScriptBridgingProxyObject",M=n?"Object":"Environment",w=n&&i.java?"JavaPackage":g(i.java),O=n?"Object":"RuntimeObject",E=/\bJava/.test(w)&&i.java,k=E&&g(i.environment)==M,P=E?"a":"α",C=E?"b":"β",T=i.document||{},W=i.operamini||i.opera,j=d.test(j=n&&W?W["[[Class]]"]:g(W))?j:W=null,A=t,B=[],I=null,F=t==o,R=F&&W&&"function"==typeof W.version&&W.version(),G=x([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],function(e,i){return e||RegExp("\\b"+(i.pattern||y(i))+"\\b","i").exec(t)&&(i.label||i)}),L=x(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Waterfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"],function(e,i){return e||RegExp("\\b"+(i.pattern||y(i))+"\\b","i").exec(t)&&(i.label||i)}),X=N([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),$=x({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1}},function(e,i,n){return e||(i[X]||i[/^[a-z]+(?: +[a-z]+\b)*/i.exec(X)]||RegExp("\\b"+y(n)+"(?:\\b|\\w*\\d)","i").exec(t))&&n}),_=x(["Windows Phone","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "],function(e,i){var n=i.pattern||y(i);return!e&&(e=RegExp("\\b"+n+"(?:/[\\d.]+|[ \\w.]*)","i").exec(t))&&(e=function(e,t,i){var n={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&i&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(n=n[/[\d.]+$/.exec(e)])&&(e="Windows "+n),e=String(e),t&&i&&(e=e.replace(RegExp(t,"i"),i)),m(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}(e,n,i.label||i)),e});function N(e){return x(e,function(e,i){var n=i.pattern||y(i);return!e&&(e=RegExp("\\b"+n+" *\\d+[.\\w_]*","i").exec(t)||RegExp("\\b"+n+" *\\w+-[\\w]*","i").exec(t)||RegExp("\\b"+n+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(t))&&((e=String(i.label&&!RegExp(n,"i").test(i.label)?i.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),i=i.label||i,e=m(e[0].replace(RegExp(n,"i"),i).replace(RegExp("; *(?:"+i+"[_-])?","i")," ").replace(RegExp("("+i+")[-_.]?(\\w)","i"),"$1 $2"))),e})}if(G&&(G=[G]),$&&!X&&(X=N([$])),(a=/\bGoogle TV\b/.exec(X))&&(X=a[0]),/\bSimulator\b/i.test(t)&&(X=(X?X+" ":"")+"Simulator"),"Opera Mini"==L&&/\bOPiOS\b/.test(t)&&B.push("running in Turbo/Uncompressed mode"),"IE"==L&&/\blike iPhone OS\b/.test(t)?($=(a=e(t.replace(/like iPhone OS/,""))).manufacturer,X=a.product):/^iP/.test(X)?(L||(L="Safari"),_="iOS"+((a=/ OS ([\d_]+)/i.exec(t))?" "+a[1].replace(/_/g,"."):"")):"Konqueror"!=L||/buntu/i.test(_)?$&&"Google"!=$&&(/Chrome/.test(L)&&!/\bMobile Safari\b/i.test(t)||/\bVita\b/.test(X))||/\bAndroid\b/.test(_)&&/^Chrome/.test(L)&&/\bVersion\//i.test(t)?(L="Android Browser",_=/\bAndroid\b/.test(_)?_:"Android"):"Silk"==L?(/\bMobi/i.test(t)||(_="Android",B.unshift("desktop mode")),/Accelerated *= *true/i.test(t)&&B.unshift("accelerated")):"PaleMoon"==L&&(a=/\bFirefox\/([\d.]+)\b/.exec(t))?B.push("identifying as Firefox "+a[1]):"Firefox"==L&&(a=/\b(Mobile|Tablet|TV)\b/i.exec(t))?(_||(_="Firefox OS"),X||(X=a[1])):!L||(a=!/\bMinefield\b/i.test(t)&&/\b(?:Firefox|Safari)\b/.exec(L))?(L&&!X&&/[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(a+"/")+8))&&(L=null),(a=X||$||_)&&(X||$||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(_))&&(L=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(_)?_:a)+" Browser")):"Electron"==L&&(a=(/\bChrome\/([\d.]+)\b/.exec(t)||0)[1])&&B.push("Chromium "+a):_="Kubuntu",R||(R=x(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))","Version",y(L),"(?:Firefox|Minefield|NetFront)"],function(e,i){return e||(RegExp(i+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(t)||0)[1]||null})),(a=("iCab"==G&&parseFloat(R)>3?"WebKit":/\bOpera\b/.test(L)&&(/\bOPR\b/.test(t)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(t)&&!/^(?:Trident|EdgeHTML)$/.test(G)&&"WebKit"||!G&&/\bMSIE\b/i.test(t)&&("Mac OS"==_?"Tasman":"Trident")||"WebKit"==G&&/\bPlayStation\b(?! Vita\b)/i.test(L)&&"NetFront")&&(G=[a]),"IE"==L&&(a=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t)||0)[1])?(L+=" Mobile",_="Windows Phone "+(/\+$/.test(a)?a:a+".x"),B.unshift("desktop mode")):/\bWPDesktop\b/i.test(t)?(L="IE Mobile",_="Windows Phone 8.x",B.unshift("desktop mode"),R||(R=(/\brv:([\d.]+)/.exec(t)||0)[1])):"IE"!=L&&"Trident"==G&&(a=/\brv:([\d.]+)/.exec(t))&&(L&&B.push("identifying as "+L+(R?" "+R:"")),L="IE",R=a[1]),F){if(u="global",b=null!=(c=i)?typeof c[u]:"number",/^(?:boolean|number|string|undefined)$/.test(b)||"object"==b&&!c[u])g(a=i.runtime)==f?(L="Adobe AIR",_=a.flash.system.Capabilities.os):g(a=i.phantom)==O?(L="PhantomJS",R=(a=a.version||null)&&a.major+"."+a.minor+"."+a.patch):"number"==typeof T.documentMode&&(a=/\bTrident\/(\d+)/i.exec(t))?(R=[R,T.documentMode],(a=+a[1]+4)!=R[1]&&(B.push("IE "+R[1]+" mode"),G&&(G[1]=""),R[1]=a),R="IE"==L?String(R[1].toFixed(1)):R[0]):"number"==typeof T.documentMode&&/^(?:Chrome|Firefox)\b/.test(L)&&(B.push("masking as "+L+" "+R),L="IE",R="11.0",G=["Trident"],_="Windows");else if(E&&(A=(a=E.lang.System).getProperty("os.arch"),_=_||a.getProperty("os.name")+" "+a.getProperty("os.version")),k){try{R=i.require("ringo/engine").version.join("."),L="RingoJS"}catch(e){(a=i.system)&&a.global.system==i.system&&(L="Narwhal",_||(_=a[0].os||null))}L||(L="Rhino")}else"object"==typeof i.process&&!i.process.browser&&(a=i.process)&&("object"==typeof a.versions&&("string"==typeof a.versions.electron?(B.push("Node "+a.versions.node),L="Electron",R=a.versions.electron):"string"==typeof a.versions.nw&&(B.push("Chromium "+R,"Node "+a.versions.node),L="NW.js",R=a.versions.nw)),L||(L="Node.js",A=a.arch,_=a.platform,R=(R=/[\d.]+/.exec(a.version))?R[0]:null));_=_&&m(_)}if(R&&(a=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(R)||/(?:alpha|beta)(?: ?\d)?/i.exec(t+";"+(F&&s.appMinorVersion))||/\bMinefield\b/i.test(t)&&"a")&&(I=/b/i.test(a)?"beta":"alpha",R=R.replace(RegExp(a+"\\+?$"),"")+("beta"==I?C:P)+(/\d+\+?/.exec(a)||"")),"Fennec"==L||"Firefox"==L&&/\b(?:Android|Firefox OS)\b/.test(_))L="Firefox Mobile";else if("Maxthon"==L&&R)R=R.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(X))"Xbox 360"==X&&(_=null),"Xbox 360"==X&&/\bIEMobile\b/.test(t)&&B.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(L)&&(!L||X||/Browser|Mobi/.test(L))||"Windows CE"!=_&&!/Mobi/i.test(t))if("IE"==L&&F)try{null===i.external&&B.unshift("platform preview")}catch(e){B.unshift("embedded")}else(/\bBlackBerry\b/.test(X)||/\bBB10\b/.test(t))&&(a=(RegExp(X.replace(/ +/g," *")+"/([.\\d]+)","i").exec(t)||0)[1]||R)?(_=((a=[a,/BB10/.test(t)])[1]?(X=null,$="BlackBerry"):"Device Software")+" "+a[0],R=null):this!=v&&"Wii"!=X&&(F&&W||/Opera/.test(L)&&/\b(?:MSIE|Firefox)\b/i.test(t)||"Firefox"==L&&/\bOS X (?:\d+\.){2,}/.test(_)||"IE"==L&&(_&&!/^Win/.test(_)&&R>5.5||/\bWindows XP\b/.test(_)&&R>8||8==R&&!/\bTrident\b/.test(t)))&&!d.test(a=e.call(v,t.replace(d,"")+";"))&&a.name&&(a="ing as "+a.name+((a=a.version)?" "+a:""),d.test(L)?(/\bIE\b/.test(a)&&"Mac OS"==_&&(_=null),a="identify"+a):(a="mask"+a,L=j?m(j.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(a)&&(_=null),F||(R=null)),G=["Presto"],B.push(a));else L+=" Mobile";(a=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(t)||0)[1])&&(a=[parseFloat(a.replace(/\.(\d)$/,".0$1")),a],"Safari"==L&&"+"==a[1].slice(-1)?(L="WebKit Nightly",I="alpha",R=a[1].slice(0,-1)):R!=a[1]&&R!=(a[2]=(/\bSafari\/([\d.]+\+?)/i.exec(t)||0)[1])||(R=null),a[1]=(/\bChrome\/([\d.]+)/i.exec(t)||0)[1],537.36==a[0]&&537.36==a[2]&&parseFloat(a[1])>=28&&"WebKit"==G&&(G=["Blink"]),F&&(h||a[1])?(G&&(G[1]="like Chrome"),a=a[1]||((a=a[0])<530?1:a<532?2:a<532.05?3:a<533?4:a<534.03?5:a<534.07?6:a<534.1?7:a<534.13?8:a<534.16?9:a<534.24?10:a<534.3?11:a<535.01?12:a<535.02?"13+":a<535.07?15:a<535.11?16:a<535.19?17:a<536.05?18:a<536.1?19:a<537.01?20:a<537.11?"21+":a<537.13?23:a<537.18?24:a<537.24?25:a<537.36?26:"Blink"!=G?"27":"28")):(G&&(G[1]="like Safari"),a=(a=a[0])<400?1:a<500?2:a<526?3:a<533?4:a<534?"4+":a<535?5:a<537?6:a<538?7:a<601?8:"8"),G&&(G[1]+=" "+(a+="number"==typeof a?".x":/[.+]/.test(a)?"":"+")),"Safari"==L&&(!R||parseInt(R)>45)&&(R=a)),"Opera"==L&&(a=/\bzbov|zvav$/.exec(_))?(L+=" ",B.unshift("desktop mode"),"zvav"==a?(L+="Mini",R=null):L+="Mobile",_=_.replace(RegExp(" *"+a+"$"),"")):"Safari"==L&&/\bChrome\b/.exec(G&&G[1])&&(B.unshift("desktop mode"),L="Chrome Mobile",R=null,/\bOS X\b/.test(_)?($="Apple",_="iOS 4.3+"):_=null),R&&0==R.indexOf(a=/[\d.]+$/.exec(_))&&t.indexOf("/"+a+"-")>-1&&(_=S(_.replace(a,""))),G&&!/\b(?:Avant|Nook)\b/.test(L)&&(/Browser|Lunascape|Maxthon/.test(L)||"Safari"!=L&&/^iOS/.test(_)&&/\bSafari\b/.test(G[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(L)&&G[1])&&(a=G[G.length-1])&&B.push(a),B.length&&(B=["("+B.join("; ")+")"]),$&&X&&X.indexOf($)<0&&B.push("on "+$),X&&B.push((/^on /.test(B[B.length-1])?"":"on ")+X),_&&(a=/ ([\d.+]+)$/.exec(_),l=a&&"/"==_.charAt(_.length-a[0].length-1),_={architecture:32,family:a&&!l?_.replace(a[0],""):_,version:a?a[1]:null,toString:function(){var e=this.version;return this.family+(e&&!l?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(a=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(A))&&!/\bi686\b/i.test(A)?(_&&(_.architecture=64,_.family=_.family.replace(RegExp(" *"+a),"")),L&&(/\bWOW64\b/i.test(t)||F&&/\w(?:86|32)$/.test(s.cpuClass||s.platform)&&!/\bWin64; x64\b/i.test(t))&&B.unshift("32-bit")):_&&/^OS X/.test(_.family)&&"Chrome"==L&&parseFloat(R)>=39&&(_.architecture=64),t||(t=null);var K={};return K.description=t,K.layout=G&&G[0],K.manufacturer=$,K.name=L,K.prerelease=I,K.product=X,K.ua=t,K.version=L&&R,K.os=_||{architecture:null,family:null,version:null,toString:function(){return"null"}},K.parse=e,K.toString=function(){return this.description||""},K.version&&B.unshift(R),K.name&&B.unshift(L),_&&L&&(_!=String(_).split(" ")[0]||_!=L.split(" ")[0]&&!X)&&B.push(X?"("+_+")":"on "+_),B.length&&(K.description=B.join(" ")),K}();r.platform=M,void 0===(s=function(){return M}.call(t,i,t,e))||(e.exports=s)}).call(this)}).call(this,i(3)(e),i(4))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i}])}).call(this,__webpack_require__(13))},235:function(module,exports,__webpack_require__){__webpack_require__(236),__webpack_require__(339),module.exports=__webpack_require__(340)},340:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(9),__webpack_require__(24),__webpack_require__(22),__webpack_require__(10),__webpack_require__(28);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(104),req=__webpack_require__(498);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(341)(module))},498:function(module,exports,__webpack_require__){var map={"./index.stories.js":523};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=498},523:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(16),__webpack_require__(75),__webpack_require__(9),__webpack_require__(146),__webpack_require__(0),__webpack_require__(123),__webpack_require__(499),__webpack_require__(17),__webpack_require__(10);var react=__webpack_require__(11),react_default=__webpack_require__.n(react),client=__webpack_require__(104),dist=__webpack_require__(233),addon_knobs_dist=__webpack_require__(18),universal_tilt_min=(__webpack_require__(102),__webpack_require__(29),__webpack_require__(234)),universal_tilt_min_default=__webpack_require__.n(universal_tilt_min);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ReactTilt(_ref){var settings=_ref.settings,callbacks=_ref.callbacks,tiltChange=_ref.tiltChange,className=_ref.className,children=_ref.children,props=_objectWithoutProperties(_ref,["settings","callbacks","tiltChange","className","children"]),el=Object(react.useRef)();return Object(react.useEffect)(function(){var current=el.current;return universal_tilt_min_default.a.init({elements:current,settings:settings,callbacks:callbacks}),tiltChange&&current.addEventListener("tiltChange",function output(e){return tiltChange(e.detail)}),function(){return current.universalTilt.destroy()}},[callbacks,settings,tiltChange]),react_default.a.createElement("div",_extends({},props,{ref:el,className:className}),children)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}ReactTilt.displayName="ReactTilt",ReactTilt.defaultProps={className:"tilt"},ReactTilt.__docgenInfo={description:"",methods:[],displayName:"ReactTilt",props:{className:{defaultValue:{value:"'tilt'",computed:!1},type:{name:"string"},required:!1,description:""},settings:{type:{name:"object"},required:!1,description:""},callbacks:{type:{name:"object"},required:!1,description:""},tiltChange:{type:{name:"func"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},props:{type:{name:"object"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.js"]={name:"ReactTilt",docgenInfo:ReactTilt.__docgenInfo,path:"src/index.js"});var stories=Object(client.storiesOf)("ReactUniversalTilt");stories.addDecorator(addon_knobs_dist.withKnobs);var wrapperStyles={display:"flex",minWidth:"100%",minHeight:"calc(100vh - 16px)",alignItems:"center",justifyContent:"center"},ContainerDecorator=function(storyFn){return react_default.a.createElement("div",{style:wrapperStyles},storyFn())};ContainerDecorator.displayName="ContainerDecorator";var tiltStyles={width:300,height:300,borderRadius:10};stories.addDecorator(ContainerDecorator).add("Default",function(){return react_default.a.createElement(ReactTilt,{style:_objectSpread({},tiltStyles,{background:"linear-gradient(45deg, #3c3aad, #f7c340)"}),settings:{reset:Object(addon_knobs_dist.boolean)("Reset",!0),reverse:Object(addon_knobs_dist.boolean)("Reverse",!1),scale:Object(addon_knobs_dist.number)("Set scale",1.1)}})}).add("Shine",function(){return react_default.a.createElement(ReactTilt,{style:_objectSpread({},tiltStyles,{background:"linear-gradient(135deg, #a90329, #eb8415)"}),settings:{shine:Object(addon_knobs_dist.boolean)("Add shine",!0),"shine-opacity":Object(addon_knobs_dist.number)("Opacity value",.5),"shine-save":Object(addon_knobs_dist.boolean)("Save shine effect",!0),"shine-prerender":Object(addon_knobs_dist.boolean)("Prerender shine",!1)}})}).add("Parallax",function(){return react_default.a.createElement(ReactTilt,{style:_objectSpread({},tiltStyles,{background:"linear-gradient(45deg, #ebceb7, #de21de)",display:"flex",alignItems:"center",justifyContent:"center",transformStyle:"preserve-3d"})},react_default.a.createElement("div",{style:{width:180,height:180,backgroundColor:"#fff",borderRadius:10,transform:"translateZ(80px)"}}))}).add("Base",function(){return react_default.a.createElement(ReactTilt,{style:_objectSpread({},tiltStyles,{background:"linear-gradient(135deg, #cb60b3, #a80077)"}),settings:{base:document.querySelector("#root")}})}).add("Startup values",function(){return react_default.a.createElement(ReactTilt,{style:_objectSpread({},tiltStyles,{background:"linear-gradient(45deg, #c5cf76, #49a5bf)"}),settings:{startX:Object(addon_knobs_dist.number)("Startup X value",20),startY:Object(addon_knobs_dist.number)("Startup Y value",-20),disabled:"X"}})}).add("Exclude user agents",function(){return react_default.a.createElement(ReactTilt,{style:_objectSpread({},tiltStyles,{background:"linear-gradient(45deg, #f1e767, #feb645)"}),settings:{exclude:"/(".concat(Object(addon_knobs_dist.text)("Exclule user agents","Firefox"),")/"),gyroscope:Object(addon_knobs_dist.boolean)("Gyroscope",!1)}})}).add("Change event",function(){return react_default.a.createElement(ReactTilt,{style:_objectSpread({},tiltStyles,{background:"linear-gradient(338deg, #696bff, #8cffe6)"}),tiltChange:Object(dist.action)("tiltChange")})})}},[[235,1,2]]]);
//# sourceMappingURL=main.7f30f336fb8d666c5831.bundle.js.map