(this.webpackJsonpsmartathome=this.webpackJsonpsmartathome||[]).push([[2],{31:function(e,t,c){"use strict";var n=c(1),s=(c(68),c(9)),a=c(2);t.a=function(e){var t=e.loaderText,c=Object(n.useContext)(s.a).theme;return Object(a.jsxs)("div",{className:"flex flex-col w-full justify-center items-center",children:[Object(a.jsxs)("div",{className:"spinner",children:[Object(a.jsx)("div",{className:"double-bounce1"}),Object(a.jsx)("div",{className:"double-bounce2"})]}),t&&Object(a.jsxs)("div",{className:"mx-auto text-center text-sm font-light text-".concat("light"===c?"dark":"light"),children:[t,Object(a.jsx)("span",{className:"text-2xl text-fade",children:"..."})]})]})}},55:function(e,t,c){},60:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(45),r=c.n(a),i=(c(55),c(9)),l=(c(60),c(48)),o=c(3),j=c(46),x=c.n(j),d=(c(67),c(25)),h=c(2),b=function(e){var t=e.iconType;return Object(h.jsx)("div",{children:"light"===t?Object(h.jsx)("p",{className:"text-toggle",children:Object(h.jsx)(d.e,{})}):Object(h.jsx)("p",{className:"text-toggle",children:Object(h.jsx)(d.c,{})})})},u=c(73),m=function(){var e=Object(n.useContext)(i.a),t=e.theme,c=e.toggleTheme;return Object(h.jsx)("div",{className:"flex justify-end items-center px-5 py-5",children:Object(h.jsx)("div",{children:Object(u.a)(t)?null:Object(h.jsx)(x.a,{checked:"light"===t,icons:{checked:Object(h.jsx)(b,{iconType:"light"}),unchecked:Object(h.jsx)(b,{iconType:"dark"})},onChange:c})})})},O=function(){var e=Object(n.useContext)(i.a),t=e.theme,c=e.colorTheme;return Object(h.jsxs)("div",{className:"text-".concat(c," pb-3"),style:{backgroundColor:"dark"===t?"#292929":"#e8ebee"},children:[Object(h.jsx)("div",{className:"flex flex-col text-center sm:flex sm:flex-row justify-around pt-5 text-".concat(c," text-sm"),children:Object(h.jsx)("p",{className:"flex flex-no-wrap justify-center items-center my-2 sm:my-0 w-full sm:w-1/2",children:(new Date).toLocaleTimeString()})}),Object(h.jsx)("p",{className:"mx-auto text-center text-sm",children:(new Date).toLocaleDateString()})]})},f=c(31),g=Object(n.lazy)((function(){return Promise.all([c.e(5),c.e(6)]).then(c.bind(null,168))}));var v=function(){var e=Object(n.useContext)(i.a).theme;return Object(h.jsx)(l.a,{children:Object(h.jsxs)("div",{className:" bg-".concat(e," tracking-wider border-box wrapper"),children:[Object(h.jsx)("div",{children:Object(h.jsx)(m,{})}),Object(h.jsx)("div",{children:Object(h.jsx)(n.Suspense,{fallback:Object(h.jsx)(f.a,{loaderText:"Loading components"}),children:Object(h.jsx)(o.c,{children:Object(h.jsx)(o.a,{path:"/",exact:!0,component:g})})})}),Object(h.jsx)("div",{children:Object(h.jsx)(O,{})})]})})};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(i.b,{children:Object(h.jsx)(v,{})})}),document.getElementById("root"))},9:function(e,t,c){"use strict";c.d(t,"a",(function(){return o})),c.d(t,"b",(function(){return j}));var n=c(30),s=c(1),a=c.n(s),r=c(32),i=c.n(r),l=c(2),o=a.a.createContext({theme:"light",toggleTheme:function(){}}),j=function(e){var t=e.children,c=Object(s.useState)(""),a=Object(n.a)(c,2),r=a[0],j=a[1],x="light"===r?"dark":"light",d=function(e){localStorage.setItem("theme",JSON.stringify(e))};return Object(s.useEffect)((function(){localStorage.getItem("theme")?j(JSON.parse(localStorage.getItem("theme"))):function(){var e=i()().format("H");e>=6&&e<18?(j("light"),d("light")):(j("dark"),d("dark"))}()}),[]),Object(l.jsx)(o.Provider,{value:{theme:r,colorTheme:x,toggleTheme:function(){var e="light"===r?"dark":"light";j(e),d(e)}},children:t})}}},[[71,3,4]]]);
//# sourceMappingURL=main.5768634e.chunk.js.map