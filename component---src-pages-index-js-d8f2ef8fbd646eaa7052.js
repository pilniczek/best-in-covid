(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7W2i":function(e,t,a){var n=a("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"92zt":function(e,t,a){var n=a("lwsE"),r=a("W8MJ"),c=a("7W2i"),l=a("a1gu"),o=a("Nsbk");function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=o(e);if(t){var r=o(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return l(this,a)}}var i=function(e){"use strict";c(a,e);var t=s(a);function a(){return n(this,a),t.apply(this,arguments)}return r(a,[{key:"connectedCallback",value:function(){var e=this;this.videoId=this.getAttribute("videoid");var t=this.querySelector(".lty-playbtn");if(this.playLabel=t&&t.textContent.trim()||this.getAttribute("playlabel")||"Play",this.style.backgroundImage||(this.posterUrl="https://i.ytimg.com/vi/".concat(this.videoId,"/hqdefault.jpg"),a.addPrefetch("preload",this.posterUrl,"image"),this.style.backgroundImage='url("'.concat(this.posterUrl,'")')),t||((t=document.createElement("button")).type="button",t.classList.add("lty-playbtn"),this.append(t)),!t.textContent){var n=document.createElement("span");n.className="lyt-visually-hidden",n.textContent=this.playLabel,t.append(n)}this.addEventListener("pointerover",a.warmConnections,{once:!0}),this.addEventListener("click",(function(t){return e.addIframe()}))}},{key:"addIframe",value:function(){var e=new URLSearchParams(this.getAttribute("params")||[]);e.append("autoplay","1");var t=document.createElement("iframe");t.width=560,t.height=315,t.title=this.playLabel,t.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",t.allowFullscreen=!0,t.src="https://www.youtube-nocookie.com/embed/".concat(encodeURIComponent(this.videoId),"?").concat(e.toString()),this.append(t),this.classList.add("lyt-activated"),this.querySelector("iframe").focus()}}],[{key:"addPrefetch",value:function(e,t,a){var n=document.createElement("link");n.rel=e,n.href=t,a&&(n.as=a),document.head.append(n)}},{key:"warmConnections",value:function(){a.preconnected||(a.addPrefetch("preconnect","https://www.youtube-nocookie.com"),a.addPrefetch("preconnect","https://www.google.com"),a.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),a.addPrefetch("preconnect","https://static.doubleclick.net"),a.preconnected=!0)}}]),a}(a("oShl")(HTMLElement));customElements.define("lite-youtube",i)},Nsbk:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return p}));var n=a("q1tI"),r=a.n(n),c=a("ciIH"),l=a.n(c),o=a("Zttt");a("qhky"),a("pGT4"),a("T3N7");a("egFB");a("92zt");var s=function(e){var t=e.videoid,a=e.playlabel;return r.a.createElement("div",{className:"i19ym9zf"},r.a.createElement("lite-youtube",{videoid:t,playlabel:a}))},i=function(e){var t=e.src,a=e.title;return r.a.createElement("div",{className:"i19ym9zf"},r.a.createElement("iframe",{title:a,src:t,allow:"fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,msallowfullscreen:"true",frameBorder:"0"}))};a("OnpJ");var m=function(e){var t=e.icon,a=e.title,n=e.children;return r.a.createElement("div",{className:"s1pp7ijc"},r.a.createElement("div",{className:"icon"},t),r.a.createElement("div",{className:"content"},r.a.createElement("h3",{className:"title"},a),n))};a("jDTy");var u=function(){return r.a.createElement("div",{className:"sjh2hbj"},r.a.createElement("div",{className:"g-col-wrap"},r.a.createElement("div",{className:"g-col"},r.a.createElement("div",{className:"g-box gb-h01"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 60 60",className:"cross"},r.a.createElement("path",{d:"M36.5 13V0h-13v13h-15v13h15v34h13V26h15V13z",fill:"white"}))),r.a.createElement("span",{className:"death-count"},"21 412"),r.a.createElement("span",{className:"country"},"Polsko")),r.a.createElement("div",{className:"g-col"},r.a.createElement("div",{className:"g-box gb-h02"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 60 60",className:"cross"},r.a.createElement("path",{d:"M36.5 13V0h-13v13h-15v13h15v34h13V26h15V13z",fill:"white"}))),r.a.createElement("span",{className:"death-count"},"9 252"),r.a.createElement("span",{className:"country"},"Srbsko")),r.a.createElement("div",{className:"g-col"},r.a.createElement("div",{className:"g-box gb-h03"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 60 60",className:"cross"},r.a.createElement("path",{d:"M36.5 13V0h-13v13h-15v13h15v34h13V26h15V13z",fill:"white"}))),r.a.createElement("span",{className:"death-count"},"11 881"),r.a.createElement("span",{className:"country"},"Německo")),r.a.createElement("div",{className:"g-col"},r.a.createElement("div",{className:"g-box gb-h04 gb-black"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 60 60",className:"cross big"},r.a.createElement("path",{d:"M36.5 13V0h-13v13h-15v13h15v34h13V26h15V13z",fill:"white"})),r.a.createElement("span",{className:"death-count"},"30 413")),r.a.createElement("div",{className:"g-box gb-h05"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 60 60",className:"cross"},r.a.createElement("path",{d:"M36.5 13V0h-13v13h-15v13h15v34h13V26h15V13z",fill:"white"})),r.a.createElement("span",{className:"death-count",style:{color:"white"}},"Ø",r.a.createElement("br",null),"14 264")),r.a.createElement("span",{className:"country"},"Česko")),r.a.createElement("div",{className:"g-col"},r.a.createElement("div",{className:"g-box gb-h06"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 60 60",className:"cross"},r.a.createElement("path",{d:"M36.5 13V0h-13v13h-15v13h15v34h13V26h15V13z",fill:"white"}))),r.a.createElement("span",{className:"death-count"},"12 826"),r.a.createElement("span",{className:"country"},"Rakousko")),r.a.createElement("div",{className:"g-col"},r.a.createElement("div",{className:"g-box gb-h07"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 60 60",className:"cross"},r.a.createElement("path",{d:"M36.5 13V0h-13v13h-15v13h15v34h13V26h15V13z",fill:"white"}))),r.a.createElement("span",{className:"death-count"},"10 582"),r.a.createElement("span",{className:"country"},"Estonsko")),r.a.createElement("div",{className:"g-col"},r.a.createElement("div",{className:"g-box gb-h08"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 60 60",className:"cross"},r.a.createElement("path",{d:"M36.5 13V0h-13v13h-15v13h15v34h13V26h15V13z",fill:"white"}))),r.a.createElement("span",{className:"death-count"},"19 630"),r.a.createElement("span",{className:"country"},"Rumunsko"))))},p=(t.default=function(e){var t=e.data;return r.a.createElement(o.a,{data:t,metaTitle:"Best in covid",metaDescription:"Češi musí být vždy ve všem nejlepší! A patřičně se pochlubit.",metaImage:t.meta_image.childImageSharp.fixed.src},r.a.createElement("div",{className:"bg-black u-full-width"},r.a.createElement("div",{className:"container"},r.a.createElement(s,{playlabel:"Best in Covid - Andrej Babiš",videoid:"HSH2dGRc_LE"}))),r.a.createElement("div",{className:"container"},r.a.createElement(m,{title:"Hvězdný výrok, který zraje",icon:"?"},r.a.createElement("p",null,"Zazněl na ",r.a.createElement("a",{href:"https://2020.bledstrategicforum.org/",target:"_blank",rel:"noopener noreferrer"},"Bled Strategic Forum 2020"),"."))),r.a.createElement("div",{className:"bg-black u-full-width"},r.a.createElement("div",{className:"container"},r.a.createElement(i,{title:"Koronavirová horská dráha Andreje Babiše! Změnu názorů premiéra shrnuje Veselovský",src:"https://video.aktualne.cz/embed_iframe/dvtv/best-in-covid-nebo-taky-ne-nazorovou-houpacku-premiera-babis/r~30f6c2ac0dab11ebaabd0cc47ab5f122/?media_external=1"}))),r.a.createElement("div",{className:"container"},r.a.createElement(m,{title:"28.1.2020 - Otázky bez odpovědí",icon:"!"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.psp.cz/sqw/detail.sqw?id=6007",target:"_blank",rel:"noopener noreferrer"},"Bohuslav Svoboda")," chtěl zařadit na pořad jednání PSP ",r.a.createElement("a",{href:"https://www.psp.cz/eknih/2017ps/stenprot/040schuz/s040160.htm#r10",target:"_blank",rel:"noopener noreferrer"},"informace vlády ČR k opatřením souvisejícím se šířením koronaviru"),". Bohužel ",r.a.createElement("a",{href:"https://www.psp.cz/sqw/hlasy.sqw?G=72072",target:"_blank",rel:"noopener noreferrer"},"marně"),"."))),r.a.createElement("div",{className:"bg-black u-full-width"},r.a.createElement("div",{className:"container"},r.a.createElement(s,{playlabel:"Jak šel čas s koronavirem - Milion chvilek",videoid:"B2a2m3CsiR0"}))),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Jak to dopadlo"),r.a.createElement(u,null),r.a.createElement(m,{title:"Drsné finále",icon:"?!"},r.a.createElement("p",null,"Za výsledkem řízení v době pandemie se ohlíží ",r.a.createElement("a",{href:"https://neschopnostzabiji.cz/",target:"_blank",rel:"noopener noreferrer"},"zde"),". A to jsme navíc měli i obří polní nemocnici."))),r.a.createElement("div",{className:"bg-black u-full-width"},r.a.createElement("div",{className:"container"},r.a.createElement(s,{playlabel:"Jak šel čas s koronavirem - Milion chvilek",videoid:"riIxagmRk7M"}))),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"A co lidi zajímalo nejvíc?"),r.a.createElement("p",null,"Následující post od ",r.a.createElement("a",{title:"Josef Šlerka - profil",target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/josef.slerka"},"Josef Šlerka")," publikovaný 28. října, naleznete ",r.a.createElement("a",{title:"Josef Šlerka - post",target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/760503155/posts/10158905368163156/"},"zde"),"."),r.a.createElement("div",{style:{border:"1px solid silver",borderRadius:"5px",padding:"20px 30px"}},r.a.createElement("p",null,"Na českém Facebooku nejúspěšnější články (a videa z YouTube) obsahující v nadpisu slovo COVID a Koronavirus za poslední měsíc dle Buzzsumo. Jo a to video je z Primy hovořící Lenka Zlámalová o údajné studii WHO. We are doomed."),r.a.createElement(l.a,{fluid:t.covid_share_slerka.childImageSharp.fluid}),r.a.createElement(l.a,{fluid:t.covid_share_slerka_2.childImageSharp.fluid}))))},"4008939450")},SksO:function(e,t){function a(t,n){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,n)}e.exports=a},W8MJ:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}},a1gu:function(e,t,a){var n=a("cDf5"),r=a("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},oShl:function(e,t,a){var n=a("Nsbk"),r=a("SksO"),c=a("xfeJ"),l=a("sXyB");function o(t){var a="function"==typeof Map?new Map:void 0;return e.exports=o=function(e){if(null===e||!c(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==a){if(a.has(e))return a.get(e);a.set(e,t)}function t(){return l(e,arguments,n(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),r(t,e)},o(t)}e.exports=o},pGT4:function(e,t,a){},sXyB:function(e,t,a){var n=a("SksO"),r=a("b48C");function c(t,a,l){return r()?e.exports=c=Reflect.construct:e.exports=c=function(e,t,a){var r=[null];r.push.apply(r,t);var c=new(Function.bind.apply(e,r));return a&&n(c,a.prototype),c},c.apply(null,arguments)}e.exports=c},xfeJ:function(e,t){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}}}]);
//# sourceMappingURL=component---src-pages-index-js-d8f2ef8fbd646eaa7052.js.map