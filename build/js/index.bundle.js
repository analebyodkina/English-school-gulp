!function(){var e={711:function(e){e.exports=function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=(n(o(1)),o(6)),a=n(r),c=n(o(7)),u=n(o(8)),s=n(o(9)),d=n(o(10)),l=n(o(11)),f=n(o(14)),m=[],p=!1,v={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},b=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(p=!0),p)return m=(0,l.default)(m,v),(0,d.default)(m,v.once),m},y=function(){m=(0,f.default)(),b()};e.exports={init:function(e){v=i(v,e),m=(0,f.default)();var t=document.all&&!window.atob;return function(e){return!0===e||"mobile"===e&&s.default.mobile()||"phone"===e&&s.default.phone()||"tablet"===e&&s.default.tablet()||"function"==typeof e&&!0===e()}(v.disable)||t?void m.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})):(v.disableMutationObserver||u.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),v.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",v.easing),document.querySelector("body").setAttribute("data-aos-duration",v.duration),document.querySelector("body").setAttribute("data-aos-delay",v.delay),"DOMContentLoaded"===v.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?b(!0):"load"===v.startEvent?window.addEventListener(v.startEvent,(function(){b(!0)})):document.addEventListener(v.startEvent,(function(){b(!0)})),window.addEventListener("resize",(0,c.default)(b,v.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(b,v.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)((function(){(0,d.default)(m,v.once)}),v.throttleDelay)),v.disableMutationObserver||u.default.ready("[data-aos]",y),m)},refresh:b,refreshHard:y}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function o(e,t,o){function i(t){var o=l,n=f;return l=f=void 0,y=t,p=e.apply(n,o)}function a(e){var o=e-b;return void 0===b||o>=t||o<0||x&&e-y>=m}function u(){var e=k();return a(e)?s(e):void(v=setTimeout(u,function(e){var o=t-(e-b);return x?w(o,m-(e-y)):o}(e)))}function s(e){return v=void 0,j&&l?i(e):(l=f=void 0,p)}function d(){var e=k(),o=a(e);if(l=arguments,f=this,b=e,o){if(void 0===v)return function(e){return y=e,v=setTimeout(u,t),g?i(e):p}(b);if(x)return v=setTimeout(u,t),i(b)}return void 0===v&&(v=setTimeout(u,t)),p}var l,f,m,p,v,b,y=0,g=!1,x=!1,j=!0;if("function"!=typeof e)throw new TypeError(c);return t=r(t)||0,n(o)&&(g=!!o.leading,m=(x="maxWait"in o)?h(r(o.maxWait)||0,t):m,j="trailing"in o?!!o.trailing:j),d.cancel=function(){void 0!==v&&clearTimeout(v),y=0,l=b=f=v=void 0},d.flush=function(){return void 0===v?p:s(k())},d}function n(e){var t=void 0===e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}function i(e){return"symbol"==(void 0===e?"undefined":a(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":a(e))}(e)&&g.call(e)==s}function r(e){if("number"==typeof e)return e;if(i(e))return u;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var o=f.test(e);return o||m.test(e)?p(e.slice(2),o?2:8):l.test(e)?u:+e}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",u=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,m=/^0o[0-7]+$/i,p=parseInt,v="object"==(void 0===t?"undefined":a(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,y=v||b||Function("return this")(),g=Object.prototype.toString,h=Math.max,w=Math.min,k=function(){return y.Date.now()};e.exports=function(e,t,i){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(c);return n(i)&&(r="leading"in i?!!i.leading:r,a="trailing"in i?!!i.trailing:a),o(e,t,{leading:r,maxWait:t,trailing:a})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function o(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function n(e){return"symbol"==(void 0===e?"undefined":r(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":r(e))}(e)&&y.call(e)==u}function i(e){if("number"==typeof e)return e;if(n(e))return c;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var i=l.test(e);return i||f.test(e)?m(e.slice(2),i?2:8):d.test(e)?c:+e}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a="Expected a function",c=NaN,u="[object Symbol]",s=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,m=parseInt,p="object"==(void 0===t?"undefined":r(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,b=p||v||Function("return this")(),y=Object.prototype.toString,g=Math.max,h=Math.min,w=function(){return b.Date.now()};e.exports=function(e,t,n){function r(t){var o=l,n=f;return l=f=void 0,y=t,p=e.apply(n,o)}function c(e){var o=e-b;return void 0===b||o>=t||o<0||x&&e-y>=m}function u(){var e=w();return c(e)?s(e):void(v=setTimeout(u,function(e){var o=t-(e-b);return x?h(o,m-(e-y)):o}(e)))}function s(e){return v=void 0,j&&l?r(e):(l=f=void 0,p)}function d(){var e=w(),o=c(e);if(l=arguments,f=this,b=e,o){if(void 0===v)return function(e){return y=e,v=setTimeout(u,t),k?r(e):p}(b);if(x)return v=setTimeout(u,t),r(b)}return void 0===v&&(v=setTimeout(u,t)),p}var l,f,m,p,v,b,y=0,k=!1,x=!1,j=!0;if("function"!=typeof e)throw new TypeError(a);return t=i(t)||0,o(n)&&(k=!!n.leading,m=(x="maxWait"in n)?g(i(n.maxWait)||0,t):m,j="trailing"in n?!!n.trailing:j),d.cancel=function(){void 0!==v&&clearTimeout(v),y=0,l=b=f=v=void 0},d.flush=function(){return void 0===v?p:s(w())},d}}).call(t,function(){return this}())},function(e,t){"use strict";function o(e){var t=void 0,n=void 0;for(t=0;t<e.length;t+=1){if((n=e[t]).dataset&&n.dataset.aos)return!0;if(n.children&&o(n.children))return!0}return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(o(t.concat(n)))return r()}))}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){};t.default={isSupported:function(){return!!n()},ready:function(e,t){var o=window.document,a=new(n())(i);r=t,a.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"phone",value:function(){var e=o();return!(!i.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!a.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){var o=window.pageYOffset,n=window.innerHeight;e.forEach((function(e,i){!function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==n&&("false"===n||!o&&"true"!==n)&&e.node.classList.remove("aos-animate")}(e,n+o,t)}))}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(o(12));t.default=function(e,t){return e.forEach((function(e,o){e.node.classList.add("aos-init"),e.position=(0,n.default)(e.node,t.offset)})),e}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(o(13));t.default=function(e,t){var o=0,i=0,r=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(i=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),o=(0,n.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=r/2;break;case"bottom-center":o+=r/2+e.offsetHeight;break;case"center-center":o+=r/2+e.offsetHeight/2;break;case"top-top":o+=r;break;case"bottom-top":o+=e.offsetHeight+r;break;case"center-top":o+=e.offsetHeight/2+r}return a.anchorPlacement||a.offset||isNaN(t)||(i=t),o+i}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))}}])}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";const e=document.querySelector(".mobile-nav");var t=o(711),n=o.n(t);(function(){const t=document.querySelector(".mobile-nav-btn"),o=document.querySelector(".nav-icon"),n=document.querySelectorAll(".moving");t.onclick=function(){e.classList.toggle("mobile-nav--open"),o.classList.toggle("nav-icon--active")},n.forEach((function(t){t.onclick=function(){e.classList.remove("mobile-nav--open"),document.body.classList.remove("no-scroll"),o.classList.remove("nav-icon--active")}}))})(),function(){const e=document.querySelector(".factor-section__video"),t=document.getElementById("spinner");e.onclick=function(){t.classList.add("_active"),setTimeout((()=>{document.getElementById("spinner").classList.remove("_active")}),3e3)}}(),n().init();var i=(new Date).getFullYear();document.getElementById("footer-year").innerHTML=i,document.querySelector(".mobile-nav")}()}();