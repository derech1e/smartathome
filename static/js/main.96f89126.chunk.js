(this.webpackJsonpsmartathome=this.webpackJsonpsmartathome||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},87:function(e){e.exports=JSON.parse("{}")},90:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(6),a=n.n(i),l=(n(43),n(44),n(45),n(46),n(4));n(103);n.p;n.p;n.p;n.p;n.p;n.p;n.p;n.p;var r=n(30),j=n(31),d=n.n(j),b=n(33),o=n.n(b),h=n(35),O=n.n(h),m=n(36),x=n.n(m),u=n(34),v=n.n(u),p=n(1);function f(e){return Object(p.jsxs)("div",{className:"loadingSpinner-div",children:[Object(p.jsx)("svg",{className:e.style+" svg-spinner",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("circle",{cx:"50",cy:"50",r:"45"})}),Object(p.jsxs)("h1",{className:"loadingSpinner-text",children:[Object(p.jsx)("span",{children:"L"}),Object(p.jsx)("span",{children:"a"}),Object(p.jsx)("span",{children:"d"}),Object(p.jsx)("span",{children:"e"}),Object(p.jsx)("span",{children:"n"}),Object(p.jsx)("span",{children:"."}),Object(p.jsx)("span",{children:"."}),Object(p.jsx)("span",{children:"."})]})]})}function N(e){var t=Object(c.useState)(null),n=Object(l.a)(t,2),s=n[0],i=n[1],a=Object(c.useState)(!1),j=Object(l.a)(a,2),d=j[0],b=j[1],o=Object(c.useState)([]),h=Object(l.a)(o,2),O=h[0],m=h[1],x=Object(c.useState)(-1),u=Object(l.a)(x,2),v=u[0],N=u[1];return Object(c.useEffect)((function(){var e=v>=0&&setInterval((function(){return N(v-1)}),1e3);return v<0&&(N(5),r.monitor("33000146",0,10).then((function(e){i(null),b(!0),m(e)}),(function(e){b(!0),i(e)}))),function(){return clearInterval(e)}}),[v]),s?Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"monitor-div",children:[Object(p.jsx)("h1",{children:"Fehler"}),Object(p.jsx)("div",{className:"main-div dropShadow",children:Object(p.jsx)("h2",{children:s.message})})]})}):d?Object(p.jsxs)("div",{className:"monitor-div",children:[Object(p.jsx)("h1",{children:e.name}),Object(p.jsx)("table",{className:"table-dvb",cellSpacing:"10",children:Object(p.jsx)("tbody",{children:O.map((function(e){return Object(p.jsxs)("tr",{id:e.id+e.scheduledTime.getTime(),children:[Object(p.jsx)("td",{className:"linie-tr",children:Object(p.jsx)(S,{name:e.mode.name,linie:e.line})}),Object(p.jsxs)("td",{children:[Object(p.jsx)("div",{children:e.direction}),Object(p.jsx)("small",{children:"Steig "})]}),Object(p.jsx)("td",{children:Object(p.jsx)(y,{linie:e})})]},e.id+e.scheduledTime.getTime())}))})}),Object(p.jsxs)("p",{children:["N\xe4chste Aktualisierung in ",v," sekunden."]})]}):Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"monitor-div",children:[Object(p.jsx)("h1",{children:e.name}),Object(p.jsx)("div",{className:"main-div dropShadow",children:Object(p.jsx)(f,{style:"spinner-pos"})})]})})}function S(e){return Object(p.jsx)("div",{className:e.name.toLowerCase(),children:e.linie})}function y(e){var t=e.linie.arrivalTime||e.linie.scheduledTime,n=e.linie.arrivalTimeRelative||e.linie.scheduledTimeRelative;return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:n>0?"in "+(n>90?Math.floor(n/60)+" St.":n+" Min."):"Jetzt"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"statusIcon",children:Object(p.jsx)(T,{state:e.linie.state,delayTime:e.linie.delayTime})}),"Canceled"!==e.linie.state&&Object(p.jsx)("small",{className:"Delayed"===e.linie.state?"delayedIcon":"",children:t.toLocaleTimeString([],{timeStyle:"short"})+" Uhr"})]})]})}function T(e){switch(e.state){case"InTime":return Object(p.jsx)(d.a,{className:"onTimeIcon",style:{fontSize:15}});case"Delayed":return Object(p.jsxs)("div",{className:"delayedIcon",children:[Object(p.jsx)(o.a,{style:{fontSize:15}}),Object(p.jsxs)("small",{className:"delayTime",children:["+",e.delayTime]}),Object(p.jsx)(v.a,{className:"delayCalenderIcon",style:{fontSize:15}})]});case"Canceled":return Object(p.jsxs)("div",{className:"cancelIcon",children:[Object(p.jsx)(O.a,{style:{fontSize:15}}),Object(p.jsx)("small",{className:"cancelText",children:"F\xe4llt aus"})]});case"Unknown":return Object(p.jsx)(x.a,{className:"unknownIcon",style:{fontSize:15}});default:return Object(p.jsx)("div",{children:"No State"})}}n(79),n(80),n(87);var g=function(){return Object(p.jsx)(N,{name:"Malterstra\xdfe"})};a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.96f89126.chunk.js.map