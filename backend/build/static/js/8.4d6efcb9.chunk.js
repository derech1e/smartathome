(this.webpackJsonpsmartathome=this.webpackJsonpsmartathome||[]).push([[8],{264:function(e,t,c){"use strict";c.r(t);var r=c(96),n=c.n(r),a=c(177),s=c(184),i=c(7),l=c(1),o=c(183),d=c(210),j=c(263),u=c(259),b=c(260),f=c(213),x=c(211),O=c(16),h=c(2),m=function(e){var t=e.favorite,c=e.favoriteSelected,r=e.index,n=e.selectedIndex,a=Object(l.useContext)(O.a),s=a.theme,i=a.colorTheme;return Object(h.jsx)("div",{className:"h-16 text-".concat(i," bg-").concat(s," hover:bg-").concat(i," hover:text-").concat(s," border ").concat(r===n?"sm:border-teal-600":"sm:border-".concat(i),"\n        } pt-5 lg:pt-1/2 font-semibold rounded-2xl cursor-pointer text-center justify-center"),onClick:c,children:t.address.cityName.split(", ")[0]})},v=c(214),p=c(97),w=c(181),g=c(261),N=c(179);t.default=function(){var e=Object(l.useContext)(o.a).favorites,t=Object(l.useContext)(O.a),c=t.theme,r=t.colorTheme,y=Object(l.useState)({}),S=Object(i.a)(y,2),k=S[0],C=S[1],F=Object(l.useState)({}),I=Object(i.a)(F,2),T=I[0],E=I[1],J=Object(l.useState)(!1),R=Object(i.a)(J,2),M=R[0],W=R[1],q=Object(l.useState)(null),z=Object(i.a)(q,2),A=z[0],B=z[1],D=Object(l.useRef)(),G=Object(l.useRef)(0),H=function(){if(Object(N.a)(k)){var e=k.address.cityName;return Object(N.a)(e)&&!e.includes("")&&!e.includes("null")}return!1},K=function(t){e[t]&&C(Object(s.a)({},e[t])),B(t)},L=function(){var e=Object(a.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(N.a)(k)){e.next=15;break}return e.prev=1,W(!0),e.next=5,Object(d.a)(k);case 5:t=e.sent,Object(N.a)(t)&&(E((function(e){return Object(s.a)(Object(s.a)({},e),t)})),P()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),g.a(e.t0);case 12:return e.prev=12,W(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e;e=D,Object(j.a)(e.current)&&window.scrollTo(0,e.current.offsetTop)};return Object(l.useEffect)((function(){L(),Object(N.a)(k)&&(Object(u.a)(Object(b.a)(e,(function(e){return e.address.cityName===k.address.cityName})))?K(A):e.length>G.current&&K(e.length-1)),G.current=e.length;var t=setInterval((function(){L()}),36e5);return function(){clearInterval(t)}}),[k,e]),Object(h.jsx)(l.Fragment,{children:e.length>0?Object(h.jsxs)("div",{className:"bg-".concat(c," pt-5 pb-24 mb-0"),children:[Object(h.jsx)("p",{className:"text-center font-bold text-2xl text-".concat(r),children:"Favoriten"}),Object(h.jsx)("div",{className:"sm:hidden px-5 py-5",children:Object(h.jsx)(f.a,Object(s.a)(Object(s.a)({},Object(x.a)("favorite")),{},{slideIndex:A,afterSlide:function(e){return K(e)},children:e.map((function(e,t){return Object(h.jsx)(m,{favorite:e,index:t,selectedIndex:A,favoriteSelected:function(){return K(t)}},t)}))}))}),Object(h.jsx)("div",{className:"hidden sm:flex justify-center items-center",children:Object(h.jsx)("div",{className:"sm:w-5/6 xl:max-w-6xl px-5 py-5",children:Object(h.jsx)("div",{className:"flex sm:flex-row flex-wrap justify-center",children:e.map((function(e,t){return Object(h.jsx)("div",{className:"m-2 sm:w-1/2 md:w-1/4",children:Object(h.jsx)(m,{favorite:e,index:t,selectedIndex:A,favoriteSelected:function(){return K(t)}},e.latlong)},t)}))})})}),Object(h.jsx)("div",{ref:D,children:Object(N.a)(T.weatherCurrent)?Object(h.jsx)(v.a,{weatherCurrent:T.weatherCurrent,weatherForecast:T.weatherForecast,alerts:T.alerts,address:k.address,latlong:k.latlong}):Object(h.jsx)(l.Fragment,{children:M?Object(h.jsx)(p.a,{loaderText:"Fetching weather forecast ".concat(H()?"for ".concat(k.address.cityName):""," \ud83d\ude0e")}):Object(h.jsx)("div",{children:H()?Object(h.jsx)("div",{className:"flex justify-center",children:Object(h.jsx)("div",{className:"sm:w-full lg:w-2/3 xl:w-1/2",children:Object(h.jsx)(w.a,{errorMessage:"Etwas ist schief gelaufen. Wettervorhersage konnte nicht abgerufen werden ".concat(H()?"for ".concat(k.address.cityName):"","! \ud83d\ude22")})})}):null})})})]}):null})}}}]);
//# sourceMappingURL=8.4d6efcb9.chunk.js.map