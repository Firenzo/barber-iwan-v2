(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3],{391:function(e,t,n){var content=n(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(40).default)("68f7605c",content,!0,{sourceMap:!1})},392:function(e,t,n){e.exports=n.p+"img/logo.bd120c5.svg"},393:function(e,t,n){"use strict";n(391)},394:function(e,t,n){var d=n(39),r=n(395),o=n(396),c=d(!1),h=r(o);c.push([e.i,"header[data-v-78d89b8e]{width:100%;height:400px;background:linear-gradient(180deg,rgba(15,15,15,0) 40%,#0f0f0f 97%,#0f0f0f),url("+h+") no-repeat top;background-size:cover;display:flex;justify-content:center;margin-bottom:100px}@media screen and (min-width:1024px){header[data-v-78d89b8e]{height:600px;flex-direction:column}}@media screen and (min-width:1500px){header[data-v-78d89b8e]{height:800px}}header.no-homepage[data-v-78d89b8e]{height:300px;margin-bottom:50px}@media screen and (min-width:1024px){header.no-homepage[data-v-78d89b8e]{height:400px;margin-bottom:0;height:500px}}header div.container div.header-content[data-v-78d89b8e]{margin-top:70px;display:flex;flex-flow:column wrap;align-items:center}@media screen and (min-width:1024px){header div.container div.header-content[data-v-78d89b8e]{margin-top:120px;align-items:flex-start}}@media screen and (min-width:1500px){header div.container div.header-content[data-v-78d89b8e]{margin-top:0}}header div.container div.header-content div.image[data-v-78d89b8e]{display:flex;justify-content:center}@media screen and (min-width:1024px){header div.container div.header-content div.image[data-v-78d89b8e]{width:300px}}@media screen and (min-width:1500px){header div.container div.header-content div.image[data-v-78d89b8e]{width:400px}}header div.container div.header-content div.image img.logo-home[data-v-78d89b8e]{width:65%;max-height:200px}@media screen and (min-width:550px){header div.container div.header-content div.image img.logo-home[data-v-78d89b8e]{width:70%;max-height:400px}}@media screen and (min-width:750px){header div.container div.header-content div.image img.logo-home[data-v-78d89b8e]{width:80%}}@media screen and (min-width:1024px){header div.container div.header-content div.image img.logo-home[data-v-78d89b8e]{width:100%;max-height:none}}header div.container div.header-content p.header-text[data-v-78d89b8e]{margin-top:15px;text-align:center;max-width:250px;line-height:1.5}@media screen and (min-width:356px){header div.container div.header-content p.header-text[data-v-78d89b8e]{font-size:1.1rem;line-height:1.3}}@media screen and (min-width:550px){header div.container div.header-content p.header-text[data-v-78d89b8e]{font-size:1.2rem;line-height:1.3}}@media screen and (min-width:750px){header div.container div.header-content p.header-text[data-v-78d89b8e]{font-size:1.3rem}}@media screen and (min-width:1024px){header div.container div.header-content p.header-text[data-v-78d89b8e]{font-size:1.4rem;max-width:360px;text-align:left}}header div.container div.header-content a.button[data-v-78d89b8e]{margin-top:20px;max-width:none}@media screen and (min-width:356px){header div.container div.header-content a.button[data-v-78d89b8e]{font-size:1rem;padding:20px 30px}}@media screen and (min-width:1024px){header div.container div.header-content a.button[data-v-78d89b8e]{font-size:1.1rem;padding:23px 30px}}header div.container div.header-title h1[data-v-78d89b8e]{text-align:center;font-size:2.375rem}@media screen and (min-width:450px){header div.container div.header-title h1[data-v-78d89b8e]{font-size:3rem}}@media screen and (min-width:800px){header div.container div.header-title h1[data-v-78d89b8e]{font-size:3.75rem}}",""]),e.exports=c},395:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},396:function(e,t,n){e.exports=n.p+"img/hero-image-home.60f7a8b.jpg"},397:function(e,t,n){"use strict";n.r(t);var d=[function(){var e=this._self._c;this._self._setupProxy;return e("div",{staticClass:"image"},[e("img",{staticClass:"logo-home",attrs:{src:n(392),alt:"barber iwan logo"}})])}],r=(n(31),n(44),n(30),n(70),n(0).a.extend({props:{pageTitleProp:String,subTitle:String},computed:{isHomePage:function(){return"index"===this.$route.name},pageTitle:function(){return this.pageTitleProp&&"string"==typeof this.pageTitleProp?this.pageTitleProp.charAt(0).toUpperCase()+this.pageTitleProp.slice(1):"string"==typeof this.$route.name?this.$route.name.charAt(0).toUpperCase().replace("-"," ")+this.$route.name.replace("-"," ").slice(1).replace("-"," "):"???undefined???"}}})),o=(n(393),n(16)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("header",{class:{"no-homepage":!e.isHomePage}},[t("div",{staticClass:"container"},[e.isHomePage?t("div",{staticClass:"header-content"},[e._m(0),e._v(" "),t("div",[e.subTitle?t("p",{staticClass:"header-text bold-italic"},[e._v(e._s(e.subTitle))]):e._e()]),e._v(" "),t("a",{staticClass:"button",attrs:{href:"https://hairstudio-variaty.planetzelf.com/",target:"_blank"}},[e._v("Maak een afspraak")])]):e._e(),e._v(" "),e.isHomePage?e._e():t("div",{staticClass:"header-title"},[t("h1",[e._v(e._s(e.pageTitle))])])])])}),d,!1,null,"78d89b8e",null);t.default=component.exports},420:function(e,t,n){"use strict";n.r(t);var d=n(10),r=(n(45),n(0).a.extend({asyncData:function(e){return Object(d.a)(regeneratorRuntime.mark((function t(){var n,content,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,n=e.$axios,t.next=3,n.$get("".concat("http://localhost:1338/api","/privacy-verklaring"));case 3:return content=t.sent,d=content.data,t.abrupt("return",{contentData:d});case 6:case"end":return t.stop()}}),t)})))()}})),o=n(16),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"content-page privacy-verklaring"},[t("PageHeader",{attrs:{pageTitleProp:e.contentData.attributes.titel}}),e._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"content",domProps:{innerHTML:e._s(e.contentData.attributes.content)}})])],1)}),[],!1,null,"40c51436",null);t.default=component.exports;installComponents(component,{PageHeader:n(397).default})}}]);