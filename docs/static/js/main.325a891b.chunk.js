(this["webpackJsonpgtmakery.github.io"]=this["webpackJsonpgtmakery.github.io"]||[]).push([[0],{15:function(e,t,s){var c={"./feb2.png":43,"./jan26.png":44};function a(e){var t=l(e);return s(t)}function l(e){if(!s.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=l,e.exports=a,a.id=15},32:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/feb2.9fc0e24b.png"},44:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/jan26.8e630f23.png"},45:function(e,t){var s;window.history.pushState=(s=window.history.pushState,function(){var e=s.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange")),e}),window.history.replaceState=(e=>function(){var t=e.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange")),t})(window.history.replaceState),window.addEventListener("popstate",(()=>{window.dispatchEvent(new Event("locationchange"))}))},46:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),l=s.n(a),n=s(18),o=s.n(n),r=s(3);var i=e=>{e&&e instanceof Function&&s.e(3).then(s.bind(null,47)).then((({getCLS:t,getFID:s,getFCP:c,getLCP:a,getTTFB:l})=>{t(e),s(e),c(e),a(e),l(e)}))},d=(s(32),s(4)),m=s(19),j=s(26);const b={bluejeans:{aliases:["meeting","bluejean"],longName:"Bluejeans",path:"bluejeans.com/172056840",showNav:!0,icon:["fas","video"],color:"text-blue-300"},rentals:{aliases:["rental"],longName:"Rentals",path:"gatech.co1.qualtrics.com/jfe/form/SV_6xo6Al2j4TEWru6",showNav:!0,icon:["fas","toolbox"],color:"text-yellow-400"},youtube:{aliases:["videos"],longName:"YouTube",path:"youtube.com/channel/UCzlfxJFgJsj0D2HhD94Mxsw/videos",social:!0,media:!0,showNav:!0,icon:["fab","youtube"],color:"text-red-500"},mailing:{aliases:["mailing-list"],longName:"Mailing List",path:"tinyurl.com/gtmakerysurvey2021",social:!0,icon:["far","envelope"],color:"text-black"},discord:{longName:"Discord",path:"discord.gg/mccRCsu",social:!0,chat:!0,icon:["fab","discord"],color:"text-blue-400"},slack:{longName:"Slack",path:"the-makery.slack.com/signup",social:!0,chat:!0,icon:["fab","slack"],color:"text-purple-600"},instagram:{aliases:["insta"],longName:"Instagram",path:"instagram.com/gtmakery",social:!0,media:!0,showNav:!0,icon:["fab","instagram"],color:"text-pink-500"},facebook:{aliases:["fb"],longName:"Facebook",path:"facebook.com/groups/2927249277306104/about",social:!0,media:!0,showNav:!0,icon:["fab","facebook"],color:"text-blue-500"},inkscape:{longName:"Inkscape",path:"inkscape.org/release/inkscape-1.0.2",software:!0},tinkercad:{aliases:["tinker"],longName:"TinkerCAD",path:"tinkercad.com",software:!0},fusion360:{aliases:["fusion"],longName:"Fusion 360",path:"autodesk.com/education/edu-software/overview#",software:!0}},x=(e,t=b)=>Object.fromEntries(Object.entries(b).filter((([,{[e]:t}])=>t)));var h=s.p+"static/media/makery-logo.577ace2b.png";const f=x("showNav");function p(e){const t=Object(a.useState)(!1),s=Object(j.a)(t,2),l=s[0],n=s[1],o=Object(a.useRef)(null);return Object(a.useEffect)((()=>{const e=e=>{l&&o.current&&e.target!==o.current&&n(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[l]),Object(c.jsxs)("nav",{ref:o,className:"flex items-center justify-between flex-wrap bg-black p-3 z-50",children:[Object(c.jsxs)(r.b,{to:"/",className:"flex items-center flex-shrink-0 text-white hover:text-yellow-400 mr-6",children:[Object(c.jsx)("img",{src:h,className:"fill-current h-14 mr-2",alt:"Makery logo"}),Object(c.jsx)("span",{className:"font-semibold text-2xl tracking-tight",children:"The Makery"})]}),Object(c.jsx)("div",{className:"block md:hidden",children:Object(c.jsx)("button",{onClick:()=>n(!l),className:"flex items-center z-50 px-3 py-2 border rounded text-white border-white hover:text-yellow-400 hover:border-yellow-400 outline-none",children:Object(c.jsxs)("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsx)("title",{children:"Menu"}),Object(c.jsx)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})}),Object(c.jsx)("div",{className:"w-full ".concat(l?"block z-50":"hidden"," flex-grow md:flex md:items-center md:w-auto absolute md:relative top-full md:top-0 bg-black -ml-3 md:ml-0 p-3 md:p-0 pt-0"),children:Object(c.jsxs)("div",{className:"text-base md:flex-grow",children:[Object(c.jsx)(r.b,{to:"/workshops",className:"block mt-4 mb-4 md:mb-0 md:inline-block md:mt-0 text-white hover:text-yellow-400 mr-4",children:"Workshops"}),Object.entries(f).map((([e,t])=>Object(c.jsx)(r.b,{to:"/".concat(e),className:"block mt-4 mb-4 md:mb-0 md:inline-block md:mt-0 text-white hover:text-yellow-400 mr-4",children:t.longName},e)))]})})]})}function u(){return Object(c.jsx)("header",{className:"w-full sticky top-0 z-50 print:hidden",children:Object(c.jsx)(p,{})})}function g(){return Object(c.jsx)("footer",{className:"w-full flex flex-col items-center z-0 bg-black py-3 flex-shrink-0 mt-auto print:hidden",children:Object(c.jsxs)("div",{className:"container d-flex flex-column align-items-center",children:[Object(c.jsx)("p",{className:"text-yellow-400 text-center block sm:hidden",children:"GT CoC - The Makery"}),Object(c.jsx)("p",{className:"text-yellow-400 text-center hidden sm:block md:hidden",children:"Georgia Tech College Of Computing - The Makery"}),Object(c.jsx)("p",{className:"text-yellow-400 text-center hidden md:block lg:hidden",children:"Georgia Tech College Of Computing - The Makery - Inspiring makers, one at a time"}),Object(c.jsx)("p",{className:"text-yellow-400 text-center hidden lg:block",children:"Georgia Tech College Of Computing - The Makery - Inspiring makers, one at a time. Updated Feb 5, 2021."})]})})}var w=s(8);const O=x("socials"),N=x("chat",O),v=x("media",O),k=b.mailing;var y=function(){return Object(c.jsxs)("div",{className:"w-full h-full flex flex-col p-2 items-center",children:[Object(c.jsxs)("div",{className:"w-full flex flex-row justify-center items-center",children:[Object(c.jsx)("h1",{className:"text-4xl font-bold text-center mr-2",children:"Get emails!"}),Object(c.jsx)(r.b,{to:{pathname:"https://".concat(k.path)},target:"_blank",className:"".concat(k.color," underline mt-1.5"),children:Object(c.jsx)(w.a,{icon:k.icon,size:"2x"})})]}),Object(c.jsxs)("div",{className:"w-full flex flex-row justify-evenly flex-wrap",children:[Object(c.jsxs)("div",{className:"w-fit flex flex-col",children:[Object(c.jsx)("h1",{className:"text-4xl font-bold text-center",children:"Join Us!"}),Object(c.jsx)("ul",{className:"p-2 flex flex-row items-center justify-around",children:Object.entries(N).map((([e,t])=>Object(c.jsx)("li",{className:"".concat(t.color," text-2xl"),children:Object(c.jsx)(r.b,{to:{pathname:"https://".concat(t.path)},target:"_blank",className:"underline",children:Object(c.jsx)(w.a,{icon:t.icon,size:"2x"})})},e)))})]}),Object(c.jsxs)("div",{className:"w-fit flex flex-col",children:[Object(c.jsx)("h1",{className:"text-4xl font-bold text-center",children:"Follow us!"}),Object(c.jsx)("ul",{className:"p-2 flex flex-row items-center justify-around",children:Object.entries(v).map((([e,t])=>Object(c.jsx)("li",{className:"".concat(t.color," text-2xl"),children:Object(c.jsx)(r.b,{to:{pathname:"https://".concat(t.path)},target:"_blank",className:"underline",children:Object(c.jsx)(w.a,{icon:t.icon,size:"2x"})})},e)))})]})]})]})};function S({target:e}){return window.location.replace(e),null}const E={spring21:{longName:"Spring 2021",workshops:{jan26:{semester:"spring21",dateString:"jan26",date:"1/26",title:"LED Face Mask",description:"Learn how to create your very own voice-controlled LED face mask!",concepts:["Arduino","Arduino Nano","Arduino microphone","LEDs","NeoPixel","NeoPixel Matrix","Wearable Tech"],slides:"gatech.box.com/v/gtmakery1-26",video:"youtu.be/TJ0sRLvHopQ",code:"github.com/gtmakery/Workshops/tree/master/2021-Spring/1-LED_Face_Mask",redirects:["slides","video","code"],flyer:"jan26"},feb2:{semester:"spring21",dateString:"feb2",date:"2/2",title:"Valentine's Day",description:"Learn how to laser cut a custom design and make it glow with LEDs!",software:["inkscape"],concepts:["Arduino","LEDs","Laser Cutting","Inkscape","Gifts"],slides:"gatech.box.com/v/gtmakery2-2",video:"",code:"",redirects:["slides","video","code"],flyer:"feb2",hasRental:!0}}}},C=Object.values(Object.values(E)[0].workshops).slice(-1)[0],L=e=>Object.values(E).map((e=>e.workshops)).reduce(((e,t)=>e.concat(Object.values(t))),[]).find((t=>e===t.semester+t.dateString||e===t.dateString||e===t.date||e===t.title||e.toLowerCase()===t.title.replace(/ /g,"-").toLowerCase()||t.aliases&&t.aliases.find((t=>t.toLowerCase()===e.toLowerCase()))));var T=E;const z=x("software"),M=["far","file-powerpoint"],D=["fab","youtube"];var _=function({semester:e,dateString:t}){const a=T[e],l=T[e].workshops[t],n=C===l,o=Object(d.g)({path:"/workshops/".concat(e,"/").concat(t)}),i=Object(d.g)({path:"/workshops/".concat(e,"/").concat(t,"/:dataName")});return i&&l.redirects.includes(i.params.dataName)&&l[i.params.dataName]?Object(c.jsx)(S,{target:"https://".concat(l[i.params.dataName])}):Object(c.jsxs)("div",{className:"w-full h-full flex flex-col p-2 items-center",children:[!!o&&Object(c.jsxs)(r.b,{to:"/workshops/".concat(e),className:"self-start p-2 flex flex-row items-center rounded-md border border-yellow-300 text-black hover:bg-yellow-300 outline-none",children:[Object(c.jsx)("div",{className:"",children:Object(c.jsx)(w.a,{icon:"chevron-left"})}),Object(c.jsxs)("p",{className:"ml-2",children:["Back to ",a.longName]})]}),Object(c.jsx)("h1",{className:"".concat(o?"text-6xl":"text-3xl"," font-bold text-center text-yellow-400 mb-3"),children:"".concat(l.title," (").concat(l.date,")")}),Object(c.jsxs)("div",{className:"w-full h-fit flex flex-row flex-wrap p-2 justify-around",children:[l.flyer&&(o?Object(c.jsx)("img",{src:s(15)("./".concat(l.flyer,".png")).default,alt:"workshop flyer",className:"w-11/12 md:w-5/12 object-contain object-bottom"}):Object(c.jsx)(r.b,{to:"/workshops/".concat(e,"/").concat(t),className:"w-11/12 md:w-5/12",children:Object(c.jsx)("img",{src:s(15)("./".concat(l.flyer,".png")).default,alt:"workshop flyer",className:"w-full h-full object-contain object-bottom"})},t)),Object(c.jsxs)("div",{className:"w-11/12 md:w-1/2 h-full p-3 flex flex-col justify-between",children:[!!l.description&&Object(c.jsx)("p",{className:"text-lg",children:l.description}),n&&l.hasRental&&Object(c.jsx)("div",{className:"",children:Object(c.jsx)(r.b,{to:{pathname:"/rentals"},target:"_blank",className:"underline flex flex-row items-center",children:Object(c.jsx)("p",{className:"text-lg font-bold mr-2",children:"Rentals"})})}),!!l.software&&!!l.software.length&&Object(c.jsxs)("div",{className:"flex flex-col",children:[Object(c.jsx)("p",{className:"text-lg font-bold",children:"Downloads:"}),Object(c.jsx)("ul",{className:"flex flex-col",children:l.software.map((e=>{const t=z[e];return t?Object(c.jsx)("li",{className:"".concat(t.color," text-base"),children:Object(c.jsxs)(r.b,{to:{pathname:"https://".concat(t.path)},target:"_blank",className:"underline flex flex-row items-center w-fit",children:[Object(c.jsx)(w.a,{icon:t.icon,size:"lg"}),Object(c.jsx)("p",{children:t.longName})]})},e):Object(c.jsx)("p",{className:"text-red-500",children:"oops! contact gtmakery@gmail.com to fix this"})}))})]}),!!l.concepts&&!!l.concepts.length&&Object(c.jsxs)("div",{className:"flex flex-col",children:[Object(c.jsx)("p",{className:"text-lg font-bold",children:"Concepts/Tags:"}),Object(c.jsx)("ul",{className:"flex flex-row flex-wrap w-fit",children:l.concepts.map((e=>Object(c.jsx)("li",{className:"w-fit p-1 px-2 m-1 rounded-full border border-yellow-300 text-black",children:Object(c.jsx)("p",{children:e})},e)))})]}),!!l.slides&&Object(c.jsx)("div",{className:"",children:Object(c.jsxs)(r.b,{to:{pathname:"https://".concat(l.slides)},target:"_blank",className:"underline flex flex-row items-center",children:[Object(c.jsx)("p",{className:"text-lg font-bold mr-2",children:"Slides"}),Object(c.jsx)(w.a,{icon:M,size:"lg"})]})}),!!l.video&&Object(c.jsx)("div",{className:"",children:Object(c.jsxs)(r.b,{to:{pathname:"https://".concat(l.video)},target:"_blank",className:"underline flex flex-row items-center",children:[Object(c.jsx)("p",{className:"text-lg font-bold mr-2",children:"Recording"}),Object(c.jsx)(w.a,{icon:D,size:"lg"})]})}),!!l.code&&Object(c.jsx)("div",{className:"",children:Object(c.jsxs)(r.b,{to:{pathname:"https://".concat(l.code)},target:"_blank",className:"underline flex flex-row items-center",children:[Object(c.jsx)("p",{className:"text-lg font-bold mr-2",children:"Code"}),Object(c.jsx)(w.a,{icon:"code",size:"lg"})]})}),Object(c.jsx)("div",{className:"flex-grow-0.5"})]})]})]})},F=s.p+"static/media/spring21schedule.1e8ed5d8.png";var R=function(){return Object(c.jsxs)("div",{className:"w-full h-full flex flex-col p-2 items-center",children:[Object(c.jsx)("h1",{className:"text-6xl font-bold text-center text-yellow-400 mb-3",children:"The Makery!"}),Object(c.jsxs)("div",{className:"container flex flex-col items-center text-lg",children:[Object(c.jsx)("p",{className:"",children:"The Makery is a Georgia Tech student organization dedicated to embedded systems. We teach all things from basic Ardiuno concepts to Raspberry Pi web hosting and even 3D-printing/laser-cutting!"}),Object(c.jsx)("p",{className:"",children:"Our mission is to enable individuals to prototype, build, and program their own electronic devices, be it as simple as a flashing LED sign or as complicated as a solar powered surveillance blimp. We provide support for aspiring makers to develop ideas by providing the necessary knowledge and equipment."})]}),Object(c.jsx)("div",{className:"w-full flex flex-col items-center",children:Object(c.jsx)(_,{semester:C.semester,dateString:C.dateString})}),Object(c.jsxs)("div",{className:"w-full flex flex-col items-center",children:[Object(c.jsx)("h2",{className:"text-4xl font-bold text-center text-black mb-3",children:"Schedule"}),Object(c.jsx)("img",{src:F,className:"w-124",alt:"schedule"})]}),Object(c.jsx)(y,{})]})};var A=function({semester:e}){let t=Object(d.g)({path:"/workshops/".concat(e)}),a=Object(d.g)({path:"/workshops/".concat(e,"/:dateString")});const l=a&&L(a.params.dateString);return l?Object(c.jsx)(_,{semester:l.semester,dateString:l.dateString}):a&&Object.keys(T[e].workshops).includes(a.params.dateString)?Object(c.jsx)(_,{semester:e,dateString:a.params.dateString}):Object(c.jsxs)("div",{className:"w-full h-full flex flex-col p-2 items-center",children:[t&&Object(c.jsxs)(r.b,{to:"/workshops",className:"self-start p-2 flex flex-row items-center rounded-md border border-yellow-300 text-black hover:bg-yellow-300 outline-none",children:[Object(c.jsx)("div",{className:"",children:Object(c.jsx)(w.a,{icon:"chevron-left"})}),Object(c.jsx)("p",{className:"ml-2",children:"Back to all workshops"})]}),Object(c.jsx)("div",{className:"w-full h-fill flex flex-row flex-wrap justify-evenly",children:Object.entries(T[e].workshops).map((([t,a])=>Object(c.jsxs)(r.b,{to:"/workshops/".concat(e,"/").concat(t),className:"flex flex-col items-center",children:[Object(c.jsx)("img",{src:s(15)("./".concat(a.flyer,".png")).default,alt:"workshop flyer",className:"w-48 h-72 object-contain object-bottom"}),Object(c.jsx)("p",{className:"text-lg",children:a.title})]},t)))})]})};var G=function(){let e=Object(d.g)({path:"/workshops/:semester"});const t=e&&L(e.params.semester);return t?Object(c.jsx)(_,{semester:t.semester,dateString:t.dateString}):e&&Object.keys(T).includes(e.params.semester)?Object(c.jsx)(A,{semester:e.params.semester}):Object(c.jsx)("div",{className:"w-full h-full flex flex-col p-2 items-center",children:Object.entries(T).map((([e,t])=>Object(c.jsxs)("div",{className:"w-full flex flex-col items-center my-4 first:mt-0 last:mb-0",children:[Object(c.jsx)(r.b,{to:"/workshops/".concat(e),className:"mb-2",children:Object(c.jsx)("p",{className:"text-2xl font-semibold",children:t.longName})}),Object(c.jsx)(A,{semester:e})]},e)))})};var I=s(11),B=s(23),J=s(24),W=s(25);function H(e){return Object(c.jsxs)("div",{className:"h-full flex flex-col",id:"app",children:[Object(c.jsx)(m.a,{children:Object(c.jsx)("title",{children:"The Makery"})}),Object(c.jsx)(u,{}),Object(c.jsx)("main",{className:"flex-grow z-10",children:Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.b,{exact:!0,path:["/","/landing"],children:Object(c.jsx)(R,{})}),Object(c.jsx)(d.b,{path:"/socials",children:Object(c.jsx)(y,{})}),Object(c.jsx)(d.b,{path:"/workshops",children:Object(c.jsx)(G,{})}),Object.entries(b).map((([e,t])=>{const s=[e].concat(t.aliases||[]).map((e=>"/"+e));return Object(c.jsx)(d.b,{path:s,children:Object(c.jsx)(S,{target:"https://".concat(t.path)})},e)})),Object(c.jsx)(d.b,{path:"/",children:Object(c.jsx)(d.a,{to:"/"})})]})}),Object(c.jsx)(g,{})]})}I.b.add(B.a,J.a,W.a),s(45),o.a.render(Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(r.a,{basename:"/",children:Object(c.jsx)(H,{})})}),document.getElementById("root")),i()}},[[46,1,2]]]);
//# sourceMappingURL=main.325a891b.chunk.js.map