(this.webpackJsonpsmartathome=this.webpackJsonpsmartathome||[]).push([[1],{114:function(e,t,s){"use strict";var c=s(79),a=s.n(c),n=s(89),r=s(80),i=s(90),l=s.n(i),d=s(107),o=s.n(d),j=s(83),m=s(76),b=s(82);o()(l.a,{retryDelay:o.a.exponentialDelay});var x=function(e){var t=e.split(",");return"https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t[0],"&lon=").concat(t[1],"&exclude=minutely,flags&lang=de&units=metric&cnt=7&appid=992c820be22089cd7521bb068ba020c2")},u=function(){var e=Object(r.a)(a.a.mark((function e(t){var s,c,r,i,d,o,u,h,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.latlong,c={},r={},i=[],d=null,!Object(b.a)(s)){e.next=17;break}return e.prev=6,e.next=9,l.a.get(x(s));case 9:o=e.sent.data,Object(b.a)(o)&&(u=o.timezone,c=Object(n.a)(Object(n.a)({timezone:u},o.current),{},{sunrise:o.daily[0].sunrise,sunset:o.daily[0].sunset}),h={},o.hourly.forEach((function(e){var t=Object(j.a)(e.dt,u,"MM/DD/YYYY");Object.keys(h).includes(t)?h[t].push(Object(n.a)({timezone:u},e)):h[t]=[Object(n.a)({timezone:u},e)]})),f={},o.daily.forEach((function(e){var t=Object(j.a)(e.dt,u,"MM/DD/YYYY");f[t]=Object(n.a)({timezone:u},e)})),r={timeFrames:h,days:f},Object(b.a)(o.alerts)&&o.alerts.forEach((function(e){i.push(Object(n.a)({timezone:u},e))}))),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(6),d=e.t0,m.a(e.t0);case 17:return e.abrupt("return",{weatherCurrent:c,weatherForecast:r,alerts:i,error:d});case 18:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(t){return e.apply(this,arguments)}}();t.a=u},115:function(e,t,s){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mobile";return{width:"100%",slidesToShow:"time"===e?"tablet"===t?8:3:1,slidesToScroll:"time"===e?"tablet"===t?8:3:1,initialSlideHeight:"time"===e?100:200,slideWidth:"time"===e?"tablet"===t?1:.95:1,speed:1e3,easing:"easeSinInOut",defaultControlsConfig:{prevButtonStyle:{display:"none"},nextButtonStyle:{display:"none"},pagingDotsStyle:{fill:"#cfd9df",display:"flex",position:"relative",top:"day"===e?"25px":"35px",margin:"10px 5px"}}}}},118:function(e,t,s){"use strict";var c=s(89),a=s(30),n=s(1),r=s(9),i=s(32),l=s.n(i),d=function(e,t,s){return"sunrise"===e||"sunset"===e?l()(1e3*t).tz(s).format("H:mm"):l()().tz(s).format("H:mm")},o=function(e,t){var s=e.split(":")[0],c=t.split(":")[0];return Number(s)===Number(c)-1||Number(s)===Number(c)},j=function(e){var t=e.timezone,s=e.sunrise,c=e.sunset,n=e.weather[0],r=n.icon,i=n.id,l=d("sunrise",s,t),j=d("sunset",c,t),m=d("hour",0,t),b=function(e,t,s){var c=e.split(":"),n=Object(a.a)(c,2),r=n[0],i=n[1],l=t.split(":"),d=Object(a.a)(l,2),o=d[0],j=d[1],m=s.split(":"),b=Object(a.a)(m,2),x=b[0],u=b[1];return r===o||r===x?Number(i)>=Number(j)||Number(i)<Number(u)?"day":"night":Number(r)>Number(o)&&Number(r)<Number(x)?"day":"night"}(m,l,j),x=o(m,l),u=o(m,j);if(r)switch(r){case"01d":return u?"dusk":x?"dawn":"clear-day";case"01n":return u?"dusk":x?"dawn":"clear-night";case"10d":case"09d":case"13d":return"overcast-".concat(b);case"wind":return"cloudy-".concat(b);case"04d":case"04n":return"cloudy-".concat(b);case"02d":case"03d":return"cloudy-".concat(b);case"02n":case"03n":return"cloudy-".concat(b);case"11d":return"thunderstorm";case"50d":return 781===i?"tornado":"cloudy-".concat(b);default:return"clear-day"}return"clear-day"},m=s(119),b=s(88),x=s(165),u=s(73),h=s(25),f=s(2),O=function(e){var t=e.address,s=e.latlong,c=e.weatherCurrent,r=Object(n.useContext)(b.a).updateFavorites,i=Object(n.useState)(""),d=Object(a.a)(i,2),o=d[0],j=d[1],O=Object(n.useState)(""),p=Object(a.a)(O,2),g=p[0],w=p[1],y=Object(n.useRef)(),v=function(){return!!localStorage.getItem("favorites")&&JSON.parse(localStorage.getItem("favorites")).filter((function(e){return e.address.cityName===t.cityName})).length>0},N=function(e){j(Object(x.a)(e)?"":e.format("dddd, DD. MMMM YYYY")),w(Object(x.a)(e)?"":e.format("HH:mm:ss")),y.current=e||null};return Object(n.useEffect)((function(){N(l()(1e3*c.dt).tz(c.timezone));var e=setInterval((function(){if(c.dt){var e=l.a.tz(y.current,c.timezone).add(1,"s");N(e)}}),1e3);return function(){clearInterval(e)}}),[c]),Object(f.jsxs)("div",{className:"flex justify-between items-start",children:[Object(f.jsxs)("div",{className:"pt-4 px-4",children:[Object(f.jsx)("p",{className:"font-bold",children:t.cityName}),Object(f.jsx)("div",{className:"sm:flex-col md:flex md:flex-row font-light",children:Object(u.a)(o)||Object(u.a)(g)?null:Object(f.jsxs)(n.Fragment,{children:[Object(f.jsxs)("p",{children:[o,Object(f.jsx)("span",{className:"invisible md:visible",children:"\xa0|\xa0"})]}),Object(f.jsx)("p",{children:g})]})})]}),Object(f.jsx)("div",{className:"mt-6 mr-6 cursor-pointer text-2xl",title:v()?"Favorite entfernen":"Stadt zu Favoriten hinzuf\xfcgen",onClick:function(){if(localStorage.getItem("favorites")){var e=JSON.parse(localStorage.getItem("favorites")),c=e.filter((function(e){return e.address.cityName===t.cityName}));if(c.length){var a=e.findIndex((function(e){return e.address.cityName===c[0].address.cityName}));if(-1!==a){var n=Object(m.a)(e);n.splice(a,1),localStorage.setItem("favorites",JSON.stringify(n)),r({favorites:n})}}else{var i=[].concat(Object(m.a)(e),[{address:t,latlong:s}]);localStorage.setItem("favorites",JSON.stringify(i)),r({favorites:i})}}else localStorage.setItem("favorites",JSON.stringify([{address:t,latlong:s}])),r({favorites:[{address:t,latlong:s}]})},children:v()?Object(f.jsx)(h.b,{}):Object(f.jsx)(h.d,{})})]})},p=s(86),g=function(e){return e>=0&&e<=45?"up":e>=46&&e<=90?"up-right":e>=91&&e<=135?"right":e>=136&&e<=180?"down-right":e>=181&&e<=225?"down":e>=226&&e<=270?"down-left":e>=271&&e<=315?"left":"up-left"},w=s(83);function y(e){var t=e.time,s=e.timezone,c=e.weather[0],a=c.icon,n=c.id,r=Object(w.a)(t,s,"H"),i=r>=6&&r<=18?"day":"night";if(a)switch(a){case"01d":return"day";case"01n":return"night";case"10d":return"".concat(i,"-rain");case"13d":return 611===n?"sleet":"".concat(i,"-snow");case"04d":case"04n":return"cloudy";case"02d":case"03d":return"day-cloudy";case"02n":case"03n":return"night-cloudy";case"hail":return"hail";case"11d":return"thunder";case"50d":return 781===n?"wi-tornado":"".concat(i,"-cloudy");default:return"wi-na"}return"wi-na"}var v=function(e){return Math.round(9*e/5+32)},N=s(113),C=s(151),k=function(e){var t=e.type;return{"wi-day-fog":Object(f.jsx)(C.b,{}),"wi-night-fog":Object(f.jsx)(C.m,{}),"wi-day-windy":Object(f.jsx)(C.a,{}),"wi-night-windy":Object(f.jsx)(C.l,{}),"wi-tornado":Object(f.jsx)(C.p,{}),"wi-na":Object(f.jsx)(C.k,{}),up:Object(f.jsx)(C.h,{}),"up-right":Object(f.jsx)(C.j,{}),right:Object(f.jsx)(C.g,{}),"down-right":Object(f.jsx)(C.e,{}),down:Object(f.jsx)(C.c,{}),"down-left":Object(f.jsx)(C.d,{}),left:Object(f.jsx)(C.f,{}),"up-left":Object(f.jsx)(C.i,{}),sunrise:Object(f.jsx)(C.n,{}),sunset:Object(f.jsx)(C.o,{})}[t]||Object(f.jsx)(C.k,{})},S=function(e){var t=e.weatherCurrent,s=Object(n.useContext)(p.a),c=s.weatherUnit,a=s.updateWeatherUnit,r=function(e){return"C"===c?Math.round(t["".concat(e)]):v(t["".concat(e)])};return Object(f.jsx)(n.Fragment,{children:Object(f.jsxs)("div",{className:"sm:flex-col md:flex md:flex-row justify-between my-2 px-6 sm:mt-5 sm:mb-5 sm:px-4",children:[Object(f.jsx)("div",{className:"flex-col sm:w-full lg:w-1/2",children:Object(f.jsxs)("div",{className:"flex flex-row justify-center sm:justify-start sm:items-center",children:[Object(f.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[Object(f.jsx)("div",{children:y(t).startsWith("wi")?Object(f.jsx)("p",{className:"text-6xl sm:mx-2 mt-2",title:t.description,children:Object(f.jsx)(k,{type:y(t)})}):Object(f.jsx)("img",{src:"/weather/".concat(y(t),".svg"),alt:"icon",title:t.description,className:"-mt-2 -ml-4 sm:mx-0 w-32 h-32 object-contain"})}),Object(f.jsx)("p",{className:"hidden sm:flex sm:flex-no-wrap font-medium -mt-2 ml-3 capitalize",children:t.weather[0].description})]}),Object(f.jsxs)("div",{className:"flex justify-start items-center sm:-mt-3 sm:ml-3",children:[Object(f.jsx)("div",{children:Object(f.jsxs)("span",{className:"text-6xl font-bold",children:[" ",r("temp")]})}),Object(f.jsx)("p",{className:"-mt-8 text-3xl",children:Object(f.jsx)("sup",{children:"o"})}),Object(f.jsxs)("div",{className:"-mt-10 mx-2 text-xl",children:[Object(f.jsx)("span",{className:"cursor-pointer ".concat("C"===c?"font-bold border-b border-light":"font-light opacity-75"),title:"Celsius",onClick:function(){return a("C")},children:"                  C"}),Object(f.jsx)("span",{className:"mx-1 opacity-25",children:"|"}),Object(f.jsx)("span",{className:"cursor-pointer ".concat("F"===c?"font-bold border-b border-light":"font-light opacity-75"),title:"Fahrenheit",onClick:function(){return a("F")},children:"F"})]})]})]})}),Object(f.jsxs)("div",{className:"flex flex-col justify-center items-center sm:mt-6 sm:w-full lg:w-1/2",children:[Object(f.jsx)("p",{className:"sm:hidden font-medium capitalize text-2xl -mt-2 mb-2",children:t.description}),Object(f.jsxs)("div",{className:"text-sm sm:text-lg ml-8 mt-3 sm:mt-0",children:[Object(f.jsxs)("div",{className:"flex flex-row sm:my-2",children:[Object(f.jsx)("p",{className:"font-light",children:"Feuchtigkeit:"}),"\xa0",Object(f.jsx)("p",{className:"mx-1 font-bold",children:Math.round(t.humidity)}),Object(f.jsx)("p",{className:"text-sm mt-1",children:Object(f.jsx)(N.a,{})})]}),Object(f.jsxs)("div",{className:"flex items-center sm:my-2",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{className:"font-light",children:"Wind:"}),"\xa0",Object(f.jsxs)("span",{className:"font-bold",children:[function(){return"C"===c?"".concat(Math.round(3.6*t.wind_speed)," kmph"):"".concat((e=3.6*t.wind_speed,Math.round(.6*e))," mph");var e}()," "]})]}),Object(f.jsx)("p",{className:"text-3xl",children:Object(f.jsx)(k,{type:g(t.wind_deg)})})]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{className:"font-light sm:my-2",children:"Gef\xfchlt:"}),"\xa0",Object(f.jsx)("span",{className:"font-bold",children:r("feels_like")}),Object(f.jsx)("sup",{children:"o"})]})]})]})]})})},z=s(31),F=s(93),M=function(e){var t=e.weatherCurrent,s=e.address,c=e.latlong;return Object(f.jsx)(F.a,{children:Object(f.jsx)(n.Fragment,{children:s&&t?Object(f.jsxs)("div",{children:[Object(f.jsx)(O,{address:s,latlong:c,weatherCurrent:t}),Object(f.jsx)(S,{weatherCurrent:t})]}):Object(f.jsx)(z.a,{})})})},D=s(79),Y=s.n(D),I=s(80),H=s(117),T=function(e){var t=e.day,s=e.index,c=e.selectedIndex,a=Object(n.useContext)(p.a).weatherUnit,i=Object(n.useContext)(r.a),l=i.theme,d=i.colorTheme,o=function(e){return"C"===a?Math.round("day"===e?t.temp.day:t.temp.night):v("day"===e?t.temp.day:t.temp.night)};return Object(f.jsx)("div",{className:"md:hover:bg-".concat(l," md:hover:text-").concat(d," items-center text-center sm:flex-1 sm:py-1 sm:pb-3 cursor-pointer  ").concat(s===c?"bg-".concat(l," text-").concat(d):""),onClick:function(){e.selectedDay({day:t})},children:Object(f.jsxs)("div",{className:"flex flex-row flex-no-wrap sm:flex-col sm:flex-wrap justify-around items-center px-2",children:[Object(f.jsx)("p",{className:"flex w-1/6 sm:w-full sm:justify-center text-base font-semibold",children:new Date(1e3*t.dt).toLocaleString("de-DE",{weekday:"short"})}),Object(f.jsx)("div",{className:"flex w-1/6 sm:w-full",children:y(t).startsWith("wi")?Object(f.jsx)("p",{className:"my-1 sm:mt-1 sm:mb-3 mx-auto text-3xl",title:t.description,children:Object(f.jsx)(k,{type:y(t)})}):Object(f.jsx)("img",{src:"/weather/".concat(y(t),".svg"),alt:"icon",title:t.description,className:"sm:-mt-2 sm:-mb-1 mx-auto w-12 h-12 sm:w-16 sm:h-16 object-contain"})}),Object(f.jsxs)("div",{className:"flex flex-row justify-center items-center font-light w-1/4 sm:w-full mt-1 sm:mt-0",children:[Object(f.jsxs)("p",{className:"mx-2 text-xs sm:text-sm",children:[o("day"),Object(f.jsx)("sup",{children:"o"})]}),Object(f.jsxs)("p",{className:"mx-2 text-xs",children:[o("night"),Object(f.jsx)("sup",{children:"o"})]})]}),Object(f.jsxs)("div",{className:"flex flex-row justify-around sm:justify-center sm:flex sm:flex-col w-5/12 sm:w-full font-light mt-1",children:[Object(f.jsxs)("div",{className:"flex flex-row justify-center items-center mx-2 sm:my-1 text-xs sm:text-sm",children:[Object(f.jsx)("p",{className:"text-xl lg:text-2xl text-sun mr-2 md:mr-3",title:"sunrise",children:Object(f.jsx)(k,{type:"sunrise"})}),Object(f.jsx)("p",{children:Object(w.a)(t.sunrise,t.timezone,"HH:mm")})]}),Object(f.jsxs)("div",{className:"flex flex-row justify-center items-center mx-2 sm:my-1 text-xs sm:text-sm",children:[Object(f.jsx)("p",{className:"text-xl lg:text-2xl text-sun mr-2 md:mr-3",title:"sunset",children:Object(f.jsx)(k,{type:"sunset"})}),Object(f.jsx)("p",{children:Object(w.a)(t.sunset,t.timezone,"HH:mm")})]})]})]})})},W=function(e){var t=e.Timeframe,s=Object(n.useContext)(p.a).weatherUnit,c=Object(n.useContext)(r.a),a=c.theme,i=(c.colorTheme,function(e){return"C"===s?Math.round(t["".concat(e)]):v(t["".concat(e)])});return Object(f.jsxs)("div",{className:"border-none flex flex-col justify-start items-center mx-3 mb-3 w-full font-light text-".concat(a," md:text-light"),children:[Object(f.jsx)("div",{children:y(t).startsWith("wi")?Object(f.jsx)("p",{className:"text-5xl mt-4",title:t.description,children:Object(f.jsx)(k,{type:y(t)})}):Object(f.jsx)("img",{src:"/weather/".concat(y(t),".svg"),alt:"icon",title:t.description,className:"w-16 h-16 object-contain"})}),Object(f.jsxs)("p",{className:"text-base pb-1",children:[i("temp"),Object(f.jsx)("sup",{children:"o"})]}),Object(f.jsxs)("p",{className:"text-xs pb-1",children:[i("feels_like"),Object(f.jsx)("sup",{children:"o"})]}),Object(f.jsx)("p",{className:"text-sm font-medium",children:Object(w.a)(t.dt,t.timezone,"HH:mm")})]})},J=s(115),E=s(85),_=function(e){var t=e.cityName,s=e.weatherCurrent,r=e.weatherForecast,i=Object(n.useState)(""),l=Object(a.a)(i,2),d=l[0],o=l[1],j=Object(n.useState)(0),m=Object(a.a)(j,2),b=m[0],h=m[1],O=s.dt,p=s.timezone,g=function(){var e=Object(I.a)(Y.a.mark((function e(){var t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(x.a)(s.dt)||(t=Object(w.a)(O,p,"MM/DD/YYYY"),Object(u.a)(r)||Object(x.a)(r)||(o(r.days[t]?t:""),y(r.days[t]?t:"")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e){var t=Object.keys(r.days).indexOf(e);h(-1!==t?t:0)};return Object(n.useEffect)((function(){g()}),[r]),Object(f.jsx)(F.a,{children:Object(f.jsx)(n.Fragment,{children:Object(u.a)(r.days)||Object(u.a)(d)?Object(f.jsx)("div",{className:"mb-3",children:Object(u.a)(r.days)?Object(f.jsx)(E.a,{errorMessage:"F\xfcr diese Stadt sind keine Vorhersagedaten verf\xfcgbar!",showCloseBtn:!1}):Object(f.jsx)(z.a,{loaderText:"Wettervorhersage f\xfcr ".concat(t," wird abgerufen.")})}):Object(f.jsxs)(n.Fragment,{children:[Object(f.jsx)("div",{className:"sm:hidden pb-3",children:r.timeFrames[d]?Object(f.jsx)(H.a,Object(c.a)(Object(c.a)({},Object(J.a)("time")),{},{children:r.timeFrames[d].map((function(e,t){return Object(f.jsx)(W,{Timeframe:e},t)}))})):Object(f.jsx)(E.a,{errorMessage:"Keine st\xfcndliche Vorhersage verf\xfcgbar f\xfcr ".concat(d)})}),Object(f.jsx)("div",{className:"hidden sm:flex sm:pb-3 sm:mb-4",children:r.timeFrames[d]?Object(f.jsx)(H.a,Object(c.a)(Object(c.a)({},Object(J.a)("time","tablet")),{},{children:r.timeFrames[d].map((function(e,t){return Object(f.jsx)(W,{Timeframe:e},t)}))})):Object(f.jsx)(E.a,{errorMessage:"Keine st\xfcndliche Vorhersage verf\xfcgbar f\xfcr ".concat(d)})}),Object(f.jsx)("div",{className:"flex flex-col mt-4 sm:mt-0 sm:flex-row w-full rounded",children:Object.keys(r.days).map((function(e,t){return Object(f.jsx)(T,{day:r.days[e],index:t,selectedIndex:b,selectedDay:function(){return function(e){o(e),y(e)}(e)}},t)}))})]})})})},R=(s(158),function(e){var t=e.alert,s=t.timezone,c=t.event,a=t.start,i=t.end,l=t.description,d=t.sender_name,o=Object(n.useContext)(r.a),j=o.theme,m=o.colorTheme,b=Object(w.a)(a,s,"dddd h:mm A"),x=Object(w.a)(i,s,"dddd h:mm A");return Object(f.jsx)("div",{className:"flex flex-col justify-center items-center",children:Object(f.jsx)("div",{className:"w-11/12 lg:w-3/4 xl:max-w-5xl",children:Object(f.jsx)("div",{className:"bg-".concat(j," border-t-4 border border-red-700 rounded-lg text-").concat(m," px-3 py-3 shadow-xl"),role:"alert",children:Object(f.jsxs)("div",{className:"flex",children:[Object(f.jsx)("div",{className:"pt-1 px-2",children:Object(f.jsx)(h.a,{className:"text-red-700 text-lg",title:"Warnung"})}),Object(f.jsxs)("div",{className:"w-full",children:[Object(f.jsxs)("div",{className:"flex flex-col sm:flex-row sm:justify-between sm:items-center",children:[Object(f.jsx)("p",{className:"sm:w-1/2 font-bold capitalize",children:c}),Object(f.jsxs)("p",{className:"sm:w-1/2 sm:text-right font-semibold text-xs",children:[Object(f.jsx)("span",{children:b}),"\xa0",Object(f.jsx)("span",{children:"-"}),"\xa0",Object(f.jsx)("span",{children:x})]})]}),Object(f.jsxs)("p",{className:"text-sm font-medium py-8",children:[Object(f.jsx)("b",{children:"Description:\xa0"}),l]}),Object(f.jsxs)("b",{children:["Sender: ",d]})]})]})})})})});t.a=function(e){var t=e.weatherCurrent,s=e.weatherForecast,i=e.alerts,l=e.address,d=e.latlong,o=Object(n.useContext)(r.a),m=o.theme,b=o.colorTheme,x={borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem"},h=Object(n.useState)(!0),O=Object(a.a)(h,2),p=O[0],g=O[1];return Object(f.jsxs)(n.Fragment,{children:[Object(f.jsx)("div",{className:"flex flex-col justify-center items-center lg:px-5 pt-10",children:Object(f.jsxs)("div",{className:"sm:w-full lg:w-5/6 xl:max-w-6xl bg-".concat(m," text-").concat(b," border border-").concat(b," md:border-none rounded-t-2xl shadow-lg"),children:[Object(f.jsxs)("div",{className:"relative overflow-hidden",children:[Object(f.jsx)("img",{src:"/weather-backgrounds/".concat(j(t),".jpg"),alt:"clear day",className:"w-full object-cover object-center weather-background",style:x}),Object(f.jsx)("div",{children:["10d","13d","09d"].includes(t.weather[0].icon)&&Object(f.jsx)("img",{src:"/weather-backgrounds/".concat("13d"===t.weather[0].icon?"snow":"rain",".svg"),alt:"clear day",className:"w-full object-cover object-center absolute top-0 right-0 bottom-0 left-0 weather-background",style:x})}),Object(f.jsx)("div",{className:"block md:hidden absolute top-0 bottom-0 left-0 right-0 my-auto mx-auto text-light",style:Object(c.a)({background:"rgba(0,0,0,0.2)"},x),children:Object(f.jsx)(M,{weatherCurrent:t,address:l,latlong:d})}),Object(f.jsxs)("div",{className:"hidden md:block absolute top-0 bottom-0 left-0 right-0 my-auto mx-auto text-light",style:Object(c.a)({background:"rgba(0,0,0,0.2)"},x),children:[Object(f.jsx)(M,{weatherCurrent:t,address:l,latlong:d}),Object(f.jsx)(_,{cityName:l.cityName,weatherCurrent:t,weatherForecast:s})]})]}),Object(f.jsx)("div",{className:"block md:hidden",children:Object(f.jsx)(_,{cityName:l.cityName,weatherCurrent:t,weatherForecast:s})})]})}),Object(f.jsx)("div",{className:"relative",children:Object(u.a)(i)?null:Object(f.jsxs)(n.Fragment,{children:[Object(f.jsx)("div",{className:"text-center pb-5",children:Object(f.jsx)("p",{children:Object(f.jsxs)("button",{className:"bg-".concat(b," text-").concat(m," font-semibold mt-6 py-3 px-6 rounded-full capitalize"),onClick:function(){g(!p)},children:[p?"Verstecke":"Anzeigen"," Wetter Warnungen"]})})}),Object(f.jsx)("div",{className:"pb-5",children:p?Object(f.jsx)(n.Fragment,{children:i.map((function(e,t){return Object(f.jsx)("div",{className:"my-2",children:Object(f.jsx)(R,{alert:e})},t)}))}):null})]})})]})}},158:function(e,t,s){},83:function(e,t,s){"use strict";var c=s(32),a=s.n(c);t.a=function(e,t,s){return a.a.tz(1e3*e,t).format(s)}}}]);
//# sourceMappingURL=1.ae943d26.chunk.js.map