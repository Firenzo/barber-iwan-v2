(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(t,e,n){"use strict";var o=n(0),r=n(28),c=n(220),d=n(68),l=n(114);r.a.autoAddCss=!1,r.c.add(d.a,d.e,d.b,d.c,d.d,l.a,l.b,l.c),o.a.component("FaIcon",c.a)},147:function(t,e,n){"use strict";var o=n(0),r=n(221),c=n(227),d=n(224);o.a.use(c.a),o.a.use(d.a),o.a.use(r.a,{breakpoints:{min450:450,min700:700,min1024:1024,min1100:1100,min1200:1200,min1500:1500,min1501:1/0},defaultBreakpoint:"min450"}),e.a=function(t){var e=t.query;t.enablePreview;e.preview}},192:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("ea535186",content,!0,{sourceMap:!1})},193:function(t,e,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("f2d4b16e",content,!0,{sourceMap:!1})},194:function(t,e,n){var content=n(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("1dce4b1c",content,!0,{sourceMap:!1})},195:function(t,e,n){var content=n(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("3d9ae3ca",content,!0,{sourceMap:!1})},212:function(t,e,n){"use strict";n.r(e);n(116);var o=n(0).a.extend({computed:{currentYear:function(){return(new Date).getFullYear()},contactInfo:function(){return this.$store.state.contactInfo.attributes},openingHours:function(){return this.$store.state.openingHours},socialMedia:function(){return this.$store.state.socialMedia}}}),r=(n(307),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("footer",[e("div",{staticClass:"top-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"contact"},[e("h1",[t._v("Contact")]),t._v(" "),e("div",{staticClass:"address"},[e("FaIcon",{attrs:{icon:"fa-solid fa-location-dot"}}),t._v(" "),e("a",{attrs:{href:"https://www.google.nl/maps/place/Barber+Iwan+-+Kapper+%2F+barbier+Almere/@52.3687558,5.2693787,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6163463665555:0xbbf6017322aba99d!8m2!3d52.3687526!4d5.2738634",target:"_blank"}},[e("div",{staticClass:"address-text"},[e("p",[t._v(t._s(t.contactInfo.adres))]),t._v(" "),e("p",[t._v(t._s(t.contactInfo.postcode)+", "+t._s(t.contactInfo.stad))])])])],1),t._v(" "),e("div",{staticClass:"phone"},[e("FaIcon",{attrs:{icon:"fa-solid fa-phone"}}),t._v(" "),e("div",{staticClass:"phone-text"},[e("a",{attrs:{href:t.contactInfo.mobielLink,"aria-label":t.contactInfo.mobielAria}},[t._v(t._s(t.contactInfo.mobiel))]),t._v(" "),e("a",{attrs:{href:t.contactInfo.telefoonLink,"aria-label":t.contactInfo.telefoonAria}},[t._v(t._s(t.contactInfo.telefoon))])])],1)]),t._v(" "),e("div",{staticClass:"opening-hours"},[e("h1",[t._v("Openingstijden")]),t._v(" "),e("div",{staticClass:"opening-hours-text"},t._l(t.openingHours,(function(n){return e("div",{key:n.id,staticClass:"weekday"},[e("p",{staticClass:"day-name"},[t._v(t._s(n.attributes.dag)+":")]),t._v(" "),e("p",{staticClass:"hours"},[t._v(t._s(n.attributes.tijden))])])})),0)]),t._v(" "),e("div",{staticClass:"social-media"},[e("h1",[t._v("Social Media")]),t._v(" "),t._l(t.socialMedia,(function(n){return e("div",{key:n.id,staticClass:"social-media-type",class:n.attributes.platform.toLowerCase()},["Facebook"===n.attributes.platform?e("FaIcon",{attrs:{icon:"fa-brands fa-facebook-f"}}):t._e(),t._v(" "),"Instagram"===n.attributes.platform?e("FaIcon",{attrs:{icon:"fa-brands fa-instagram"}}):t._e(),t._v(" "),"TikTok"===n.attributes.platform?e("FaIcon",{attrs:{icon:"fa-brands fa-tiktok"}}):t._e(),t._v(" "),e("a",{attrs:{href:n.attributes.link,target:"_blank"}},[e("div",{staticClass:"social-media-text"},[e("p",{staticClass:"social-media-name"},[t._v(t._s(n.attributes.platform)+":")]),t._v(" "),e("p",{staticClass:"social-media-handle"},[t._v(t._s(n.attributes.gebruikersnaam))])])])],1)}))],2)])]),t._v(" "),e("div",{staticClass:"bottom-section"},[e("div",{staticClass:"container"},[e("span",{staticClass:"copyright"},[t._v("© Barber Iwan "+t._s(t.currentYear))]),t._v(" "),e("div",{staticClass:"footer-links"},[e("NuxtLink",{staticClass:"footer-link",attrs:{to:"/privacy-verklaring"}},[t._v("Privacy verklaring")]),t._v(" "),e("div",{staticClass:"seperator"}),t._v(" "),e("NuxtLink",{staticClass:"footer-link",attrs:{to:"/disclaimer"}},[t._v("Disclaimer")])],1)])])])}),[],!1,null,"395d36e7",null);e.default=component.exports;installComponents(component,{Footer:n(212).default})},228:function(t,e,n){"use strict";var o=n(0).a.extend({methods:{openMenu:function(){this.$store.dispatch("checkMobileMenuState")}}}),r=(n(299),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("client-only",[e("mq-layout",{attrs:{mq:"min1100+"}},[e("Navigation")],1),t._v(" "),e("mq-layout",{attrs:{mq:["min450","min700","min1024"]}},[e("div",{staticClass:"container"},[e("button",{staticClass:"menu-button",on:{click:function(e){return t.openMenu()}}},[this.$store.state.mobileMenuOpen?e("FaIcon",{attrs:{icon:"fa-solid fa-times"}}):e("FaIcon",{attrs:{icon:"fa-solid fa-bars"}})],1),t._v(" "),e("transition",{attrs:{name:"slideIn"}},[this.$store.state.mobileMenuOpen?e("MobileMenu"):t._e()],1)],1)])],1),t._v(" "),e("Nuxt"),t._v(" "),e("Footer")],1)}),[],!1,null,"4829415f",null);e.a=component.exports;installComponents(component,{Navigation:n(388).default,MobileMenu:n(389).default,Footer:n(212).default})},229:function(t,e,n){n(230),t.exports=n(231)},297:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("0e173161",content,!0,{sourceMap:!1})},298:function(t,e,n){var o=n(39)(!1);o.push([t.i,'*{margin:0;padding:0;box-sizing:border-box}body{background-color:#0f0f0f;font-family:"Rubik",sans-serif;font-size:.875rem;color:#fff}@media screen and (min-width:450px){body{font-size:1rem}}div.container{width:80%;margin:auto;max-width:1500px}h1,h2,h3,h4,h5,h6{font-family:"Oswald",sans-serif}p.bold-italic{font-style:italic}h1{font-size:2rem;margin-bottom:2rem}h1,h2{margin-top:3rem}h2{font-size:1.7rem;line-height:1.38732;margin-bottom:.75rem}h3{font-size:1.6rem;line-height:1.24859;margin-top:0;margin-bottom:.5rem}h4{font-size:1.5rem}h4,h5{line-height:1.15879;margin-top:0;margin-bottom:.5rem}h5{font-size:1.35rem}h6{font-size:1.2rem;line-height:1.15879;margin-bottom:.5rem}h6,p{margin-top:0}p{margin-bottom:1.25rem;line-height:1.8rem;max-width:700px}a{display:inline-block;color:#0093dd;text-decoration:none}a:hover{text-decoration:underline}img{display:block;width:100%;margin-top:15px;margin-bottom:15px;border-radius:3px}a.button,button{display:flex;justify-content:center;align-items:center;background:#ddbe65;border-radius:3px;font-style:italic;text-decoration:none;color:#fff;padding:20px 15px;max-width:300px;border:none;outline:none;text-shadow:0 2px 4px #000;transition:background .2s ease}a.button:focus,a.button:hover,button:focus,button:hover{background:#bf9f43}svg.button-icon-right{margin-left:5px}svg.shadow{filter:drop-shadow(0 2px 4px rgb(0,0,0))}div.content-page{margin-bottom:100px}',""]),t.exports=o},299:function(t,e,n){"use strict";n(192)},300:function(t,e,n){var o=n(39)(!1);o.push([t.i,".slideIn-enter-active[data-v-4829415f],.slideIn-leave-active[data-v-4829415f]{transition:transform .4s;transform:translateX(0)}.slideIn-enter[data-v-4829415f],.slideIn-leave-to[data-v-4829415f]{transform:translateX(-100vw)}button.menu-button[data-v-4829415f]{background:transparent;position:fixed;top:20px;z-index:2}button.menu-button svg[data-v-4829415f]{width:30px;height:30px}button.menu-button[data-v-4829415f]:hover{background:transparent;cursor:pointer}.page-enter-active[data-v-4829415f]{transition:transform .4s,opacity .4s;transform:translateX(3vw);opacity:0}.page-enter-to[data-v-4829415f],.page-leave-active[data-v-4829415f]{transform:translateX(0);opacity:1}.page-leave-active[data-v-4829415f]{transition:transform .4s,opacity .4s}.page-leave-to[data-v-4829415f]{transform:translateX(-3vw);opacity:0}",""]),t.exports=o},303:function(t,e,n){"use strict";n(193)},304:function(t,e,n){var o=n(39)(!1);o.push([t.i,"nav[data-v-08e488ab]{border-bottom:1px solid hsla(0,0%,100%,.7);background:rgba(0,0,0,.4);position:absolute;top:0;left:0;right:0;z-index:1}nav div.container>ul[data-v-08e488ab]{list-style:none;display:flex}nav div.container>ul li[data-v-08e488ab]{border-left:1px solid hsla(0,0%,100%,.7);display:flex;justify-content:center;align-items:center;text-align:center}nav div.container>ul li a.nav-link[data-v-08e488ab]{color:#fff;padding:33px 14px}@media screen and (min-width:1087px){nav div.container>ul li a.nav-link[data-v-08e488ab]{padding:33px 20px}}nav div.container>ul li a.nav-link[data-v-08e488ab]:hover{background:rgba(0,0,0,.7)}nav div.container>ul li>ul[data-v-08e488ab]{list-style:none;display:flex}nav div.container>ul li>ul li[data-v-08e488ab]{border:none}nav div.container>ul li>ul li a[data-v-08e488ab]{padding:30px 20px}@media screen and (min-width:1200px){nav div.container>ul li>ul li a[data-v-08e488ab]{padding:30px}}nav div.container>ul li>ul li a[data-v-08e488ab]:hover{background:rgba(0,0,0,.7)}nav div.container>ul li>ul li a:hover svg[data-v-08e488ab]{color:#fff}nav div.container>ul li>ul li a svg[data-v-08e488ab]{color:#fff;height:25px;width:25px}",""]),t.exports=o},305:function(t,e,n){"use strict";n(194)},306:function(t,e,n){var o=n(39)(!1);o.push([t.i,"nav[data-v-04b41914]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.97);overflow:scroll;z-index:1}nav>ul[data-v-04b41914]{margin-top:100px}nav>ul li[data-v-04b41914]{list-style:none}nav>ul li a[data-v-04b41914]{display:block;padding:40px 0;text-align:center;color:#fff;text-decoration:none;font-weight:600;transition:background .3s ease}nav>ul li a[data-v-04b41914]:hover{background:#ddbe65}nav>ul li>ul li svg[data-v-04b41914]{width:25px;height:25px}@media screen and (min-width:356px){nav>ul li>ul[data-v-04b41914]{display:flex;max-width:300px;margin:auto}nav>ul li>ul li[data-v-04b41914]{flex-basis:33.3333333333%}}",""]),t.exports=o},307:function(t,e,n){"use strict";n(195)},308:function(t,e,n){var o=n(39)(!1);o.push([t.i,'footer div.top-section[data-v-395d36e7]{background:#000;padding:30px 0}@media screen and (min-width:700px){footer div.top-section div.container[data-v-395d36e7]{display:flex;flex-flow:row wrap}}@media screen and (min-width:1100px){footer div.top-section div.container[data-v-395d36e7]{justify-content:space-between}}footer div.top-section div.container div.contact[data-v-395d36e7]{display:flex;flex-flow:column wrap}@media screen and (min-width:700px){footer div.top-section div.container div.contact[data-v-395d36e7]{flex-basis:calc(50% - 20px)}}@media screen and (min-width:1100px){footer div.top-section div.container div.contact[data-v-395d36e7]{flex-basis:220px}}footer div.top-section div.container div.contact h1[data-v-395d36e7]{margin-bottom:10px;margin-top:10px;color:#ccc}footer div.top-section div.container div.contact div.address[data-v-395d36e7]{display:flex;align-items:center}footer div.top-section div.container div.contact div.address a[data-v-395d36e7]{color:#ccc}footer div.top-section div.container div.contact div.address p[data-v-395d36e7]{margin-bottom:0}footer div.top-section div.container div.contact div.address svg[data-v-395d36e7]{width:30px;height:30px;flex-basis:70px;margin-left:-24px;color:#ccc}footer div.top-section div.container div.contact div.phone[data-v-395d36e7]{display:flex;align-items:center}footer div.top-section div.container div.contact div.phone a[data-v-395d36e7]{color:#ccc;display:block}footer div.top-section div.container div.contact div.phone a[data-v-395d36e7]:first-of-type{margin-bottom:5px}footer div.top-section div.container div.contact div.phone svg[data-v-395d36e7]{width:25px;height:25px;flex-basis:70px;margin-left:-22px;color:#ccc}footer div.top-section div.container div.opening-hours[data-v-395d36e7]{display:flex;flex-flow:column wrap}@media screen and (min-width:700px){footer div.top-section div.container div.opening-hours[data-v-395d36e7]{flex-basis:calc(50% - 20px)}}@media screen and (min-width:1100px){footer div.top-section div.container div.opening-hours[data-v-395d36e7]{flex-basis:300px}}footer div.top-section div.container div.opening-hours h1[data-v-395d36e7]{margin-bottom:10px;margin-top:10px;color:#ccc}footer div.top-section div.container div.opening-hours div.opening-hours-text div.weekday[data-v-395d36e7]{display:flex;margin-bottom:5px}footer div.top-section div.container div.opening-hours div.opening-hours-text div.weekday p[data-v-395d36e7]{margin-bottom:0;color:#ccc}footer div.top-section div.container div.opening-hours div.opening-hours-text div.weekday p.day-name[data-v-395d36e7]{width:110px}@media screen and (min-width:700px){footer div.top-section div.container div.social-media[data-v-395d36e7]{flex-basis:100%}}@media screen and (min-width:1100px){footer div.top-section div.container div.social-media[data-v-395d36e7]{flex-basis:300px}}footer div.top-section div.container div.social-media h1[data-v-395d36e7]{margin-bottom:10px;margin-top:10px;color:#ccc}footer div.top-section div.container div.social-media div.social-media-type[data-v-395d36e7]{display:flex;align-items:center}footer div.top-section div.container div.social-media div.social-media-type[data-v-395d36e7]:not(:last-of-type){margin-bottom:10px}footer div.top-section div.container div.social-media div.social-media-type svg[data-v-395d36e7]{height:30px;width:30px;flex-basis:70px;margin-left:-20px;color:#ccc}footer div.top-section div.container div.social-media div.social-media-type a[data-v-395d36e7]{color:#ccc}footer div.top-section div.container div.social-media div.social-media-type div.social-media-text p[data-v-395d36e7]{margin-bottom:0}footer div.top-section div.container div.social-media div.social-media-type div.social-media-text p.social-media-name[data-v-395d36e7]{font-weight:700}footer div.bottom-section[data-v-395d36e7]{background:#ddbe65;color:#553f00;font-size:.875rem;padding:10px 0}@media screen and (min-width:700px){footer div.bottom-section div.container[data-v-395d36e7]{display:flex;justify-content:space-between}}footer div.bottom-section div.container span.copyright[data-v-395d36e7]{display:flex;justify-content:center;margin-bottom:10px}footer div.bottom-section div.container div.footer-links[data-v-395d36e7]{display:flex;justify-content:center}footer div.bottom-section div.container div.footer-links div.seperator[data-v-395d36e7]:after{content:"|";margin:0 10px}footer div.bottom-section div.container a[data-v-395d36e7]{color:#553f00}footer div.bottom-section div.container a[data-v-395d36e7]:hover{text-decoration:underline}',""]),t.exports=o},309:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return d})),n.d(e,"getters",(function(){return l}));var o=n(10),r=(n(45),n(29),n(69),n(189),n(137),function(){return{mobileMenuOpen:!1,apiURL:"http://localhost:1338/api",contactInfo:null,openingHours:null,socialMedia:null}}),c={SET_MOBILE_MENU_STATUS:function(t){t.mobileMenuOpen=!t.mobileMenuOpen},SET_CONTACT_INFO:function(t,data){t.contactInfo=data.data;var e=t.contactInfo.attributes;e.telefoonLink="tel:".concat(e.telefoon.replace(/-|\s/g,"")),e.telefoonAria=e.telefoon.split("-")[0].charAt(0)+" "+e.telefoon.split("-")[0].substr(1)+e.telefoon.replace(/\s/g,"","").substring(e.telefoon.replace(/\s/g,"","").indexOf("-")+1).split("").join(" "),e.mobielLink="tel:".concat(e.mobiel.replace(/-|\s/g,"")),e.mobielAria=e.mobiel.split("-")[0].charAt(0)+" "+e.mobiel.split("-")[0].substr(1)+e.mobiel.replace(/\s/g,"","").substring(e.mobiel.replace(/\s/g,"","").indexOf("-")+1).split("").join(" ")},SET_OPENING_HOURS:function(t,data){t.openingHours=data.data,console.log(t.openingHours)},SET_SOCIAL_MEDIA:function(t,data){t.socialMedia=data.data,console.log(t.socialMedia)}},d={checkMobileMenuState:function(t){t.commit("SET_MOBILE_MENU_STATUS")},nuxtServerInit:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,c,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.commit,n.next=3,e.$axios.$get("".concat("http://localhost:1338/api","/contact-info"));case 3:return r=n.sent,n.next=6,e.$axios.$get("".concat("http://localhost:1338/api","/openingstijden"));case 6:return c=n.sent,n.next=9,e.$axios.$get("".concat("http://localhost:1338/api","/social-media"));case 9:d=n.sent,o("SET_CONTACT_INFO",r),o("SET_OPENING_HOURS",c),o("SET_SOCIAL_MEDIA",d);case 13:case"end":return n.stop()}}),n)})))()}},l={}},388:function(t,e,n){"use strict";n.r(e);n(116);var o=n(0).a.extend({computed:{socialMedia:function(){return this.$store.state.socialMedia}}}),r=(n(303),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("nav",[e("div",{staticClass:"container"},[e("ul",[e("li",[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t._m(0),t._v(" "),e("li",[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/haircuts"}},[t._v("Haircuts")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/behandelingen-en-prijzen"}},[t._v("Behandelingen & Prijzen")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),e("li",{staticClass:"social-media"},[e("ul",t._l(t.socialMedia,(function(n){return e("li",{key:n.id},[e("a",{attrs:{href:n.attributes.link,target:"_blank"}},["Facebook"===n.attributes.platform?e("FaIcon",{attrs:{icon:"fa-brands fa-facebook-f"}}):t._e(),t._v(" "),"Instagram"===n.attributes.platform?e("FaIcon",{attrs:{icon:"fa-brands fa-instagram"}}):t._e(),t._v(" "),"TikTok"===n.attributes.platform?e("FaIcon",{attrs:{icon:"fa-brands fa-tiktok"}}):t._e()],1)])})),0)])])])])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("li",[e("a",{staticClass:"nav-link",attrs:{href:"https://hairstudio-variaty.planetzelf.com/",target:"_blank"}},[t._v("Afspraak maken")])])}],!1,null,"08e488ab",null);e.default=component.exports},389:function(t,e,n){"use strict";n.r(e);n(116);var o=n(0).a.extend({computed:{socialMedia:function(){return this.$store.state.socialMedia}},methods:{closeMenu:function(){console.log("close menu"),this.$store.dispatch("checkMobileMenuState")}}}),r=(n(305),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("nav",[e("ul",{on:{click:function(e){return t.closeMenu()}}},[e("li",[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t._m(0),t._v(" "),e("li",[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/haircuts"}},[t._v("Haircuts")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/behandelingen-en-prijzen"}},[t._v("Behandelingen & Prijzen")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),e("li",{staticClass:"social-media"},[e("ul",t._l(t.socialMedia,(function(n){return e("li",{key:n.id},[e("a",{attrs:{href:n.attributes.link,target:"_blank"}},["Facebook"===n.attributes.platform?e("FaIcon",{attrs:{icon:"fa-brands fa-facebook-f"}}):t._e(),t._v(" "),"Instagram"===n.attributes.platform?e("FaIcon",{attrs:{icon:"fa-brands fa-instagram"}}):t._e(),t._v(" "),"TikTok"===n.attributes.platform?e("FaIcon",{attrs:{icon:"fa-brands fa-tiktok"}}):t._e()],1)])})),0)])])])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("li",[e("a",{staticClass:"nav-link",attrs:{href:"https://hairstudio-variaty.planetzelf.com/",target:"_blank"}},[t._v("Afspraak maken")])])}],!1,null,"04b41914",null);e.default=component.exports}},[[229,10,1,11]]]);