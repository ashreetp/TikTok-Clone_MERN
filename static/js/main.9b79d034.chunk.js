(this.webpackJsonptiktok=this.webpackJsonptiktok||[]).push([[0],{105:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(18),r=n.n(a),i=(n(95),n(14)),o=n.n(i),l=n(20),j=n(21),u=(n(97),n(98),n(99),n(73)),d=n.n(u),b=n(72),h=n(2);var O=function(e){var t=e.channel,n=e.description,c=e.song;return Object(h.jsxs)("div",{className:"videoFooter",children:[Object(h.jsxs)("div",{className:"videoFooter_text",children:[Object(h.jsxs)("h3",{children:["@",t]}),Object(h.jsx)("p",{children:n}),Object(h.jsxs)("div",{className:"videoFooter_ticker",children:[Object(h.jsx)(d.a,{className:"videoFooter_icon"}),Object(h.jsx)(b.a,{mode:"smooth",children:function(e){e.index;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("p",{children:c})})}})]})]}),Object(h.jsx)("img",{className:"videoFooter_record",src:"https://static.thenounproject.com/png/934821-200.png",alt:""})]})},x=(n(105),n(78)),p=n.n(x).a.create({baseURL:"https://tiktok-mern9.herokuapp.com/"}),f=n(79),m=n.n(f),v=n(81),g=n.n(v),N=n(82),_=n.n(N),w=n(80),R=n.n(w);var k=function(e){var t=e.objid,n=e.likes,s=e.comments,a=e.shares,r=Object(c.useState)(!1),i=Object(j.a)(r,2),u=i[0],d=i[1];function b(){return(b=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!1),e.next=3,p.put("/v2/posts/likeoff",{objid:t}).then((function(){console.log("done")})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(!0),p.put("/v2/posts/likeon",{objid:t}).then((function(){console.log("done 2")})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:"videoSidebar",style:{cursor:"pointer"},children:[Object(h.jsxs)("div",{className:"videoSidebar_button",children:[u?Object(h.jsx)(m.a,{fontSize:"large",onClick:function(){return b.apply(this,arguments)}}):Object(h.jsx)(R.a,{fontSize:"large",onClick:function(){return O.apply(this,arguments)}}),Object(h.jsx)("p",{children:u?n+1:n})]}),Object(h.jsxs)("div",{className:"videoSidebar_button",children:[Object(h.jsx)(g.a,{fontSize:"large"}),Object(h.jsx)("p",{children:s})]}),Object(h.jsxs)("div",{className:"videoSidebar_button",children:[Object(h.jsx)(_.a,{fontSize:"large"}),Object(h.jsx)("p",{children:a})]})]})};var y=function(e){var t=e.objid,n=e.url,s=e.channel,a=e.description,r=e.song,i=e.likes,o=e.comments,l=e.shares,u=Object(c.useState)(!1),d=Object(j.a)(u,2),b=d[0],x=d[1],p=Object(c.useRef)(null),f=function(){b?(p.current.pause(),x(!1)):(p.current.play(),x(!0))};return Object(h.jsxs)("div",{className:"video",style:{cursor:"crosshair"},children:[Object(h.jsx)("video",{tabIndex:"1",onMouseOver:f,onMouseOut:f,ref:p,className:"video_player",loop:!0,src:n}),Object(h.jsx)(O,{channel:s,description:a,song:r}),Object(h.jsx)(k,{objid:t,likes:i,comments:o,shares:l})]})};var S=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:" ERROR "})})},F=(n(124),n(125),n(165)),C=n(38),U=n.n(C),E=n(8),L=n(22);var A=function(e){var t=e.login;return Object(h.jsx)("div",{children:t?Object(h.jsx)(E.d,{children:Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(U.a,{style:{width:50,height:50}}),Object(h.jsxs)("div",{className:"header_right",children:[Object(h.jsx)(L.b,{to:"/signin",children:Object(h.jsx)(F.a,{variant:"outlined",className:"header_but",children:"Sign in"})}),Object(h.jsx)(L.b,{to:"/signup",children:Object(h.jsx)(F.a,{variant:"outlined",className:"header_but",children:"Register"})})]})]})}):Object(h.jsx)(S,{})})},I=n(83),P=n.n(I),z=n(166);n(140);var D=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"sign_car",children:Object(h.jsx)(P.a,{children:["https://source.unsplash.com/1S1w1c4_VyA/1080x520","https://source.unsplash.com/oZqRqFlEXrw","https://source.unsplash.com/hAx-C1Klakw","https://source.unsplash.com/tAH2cA_BL5g","https://source.unsplash.com/16Axr46F1ng"].map((function(e,t){return Object(h.jsx)(z.a,{children:Object(h.jsx)("img",{src:e,className:"sign_img"})})}))})})})},B=(n(141),n(169)),M=n(168),T=Object(c.createContext)(),q=n(47),J=n.n(q);var W=function(e){var t=e.login,n=Object(c.useRef)(null),s=Object(c.useRef)(null),a=Object(c.useContext)(T),r=(a.user,a.setUser),i=Object(c.useState)(!0),u=Object(j.a)(i,2),d=u[0];return u[1],Object(h.jsx)("div",{children:t?Object(h.jsx)(E.a,{to:"/",exact:!0}):Object(h.jsx)("div",{className:"main3",children:Object(h.jsxs)("div",{maxWidth:"sm",className:"con3",children:[Object(h.jsx)(U.a,{style:{width:50,height:50},className:"icon3"}),Object(h.jsxs)("div",{className:"con_div3",children:[Object(h.jsx)(B.a,{className:"con_fields34",children:"Enter Username "}),Object(h.jsx)(M.a,{className:"con_fields34",inputRef:n}),Object(h.jsx)(B.a,{className:"con_fields34",children:"Enter Password "}),Object(h.jsx)(M.a,{className:"con_fields34",inputRef:s}),d?Object(h.jsx)(F.a,{onClick:function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={username:n.current.value,password:s.current.value},e.next=3,p.post("/login",t);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){"fail"==e.data?(console.log("failed to login"),window.alert("Login Failed")):(J.a.set("name","true"),r(!0))})).catch((function(e){console.log(e)}))},className:"con_but3",variant:"outlined",color:"secondary",children:" Login "}):Object(h.jsx)(E.a,{to:"/"})]})]})})})};n(142);var G=function(e){var t=e.login,n=Object(c.useRef)(null),s=Object(c.useRef)(null),a=Object(c.useRef)(null),r=Object(c.useRef)(null),i=Object(c.useRef)(null),u=Object(c.useState)(!0),d=Object(j.a)(u,2),b=d[0],O=d[1];return Object(h.jsx)("div",{children:t?Object(h.jsx)(E.a,{to:"/",exact:!0}):Object(h.jsx)("div",{className:"main2",children:Object(h.jsxs)("div",{maxWidth:"sm",className:"con2",children:[Object(h.jsx)(U.a,{style:{width:50,height:50},className:"icon"}),Object(h.jsxs)("div",{className:"con_div2",children:[Object(h.jsx)(B.a,{className:"con_fields2",children:"Full Name "}),Object(h.jsx)(M.a,{className:"con_fields2",inputRef:n}),Object(h.jsx)(B.a,{className:"con_fields2",children:"Phone Number "}),Object(h.jsx)(M.a,{className:"con_fields2",inputRef:s}),Object(h.jsx)(B.a,{className:"con_fields2",children:"Email "}),Object(h.jsx)(M.a,{className:"con_fields2",inputRef:a}),Object(h.jsx)(B.a,{className:"con_fields2",children:"Username "}),Object(h.jsx)(M.a,{className:"con_fields2",inputRef:r}),Object(h.jsx)(B.a,{className:"con_fields2",children:"Password "}),Object(h.jsx)(M.a,{className:"con_fields2",inputRef:i}),b?Object(h.jsx)(F.a,{onClick:function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={fullname:n.current.value,phonenumber:s.current.value,email:a.current.value,username:r.current.value,password:i.current.value},e.next=3,p.post("/register",t);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){"User Exists"==e.data?(console.log("User Exists"),window.alert("User Exists")):(console.log("Registered"),O(!1))})).catch((function(e){console.log(e)}))},className:"con_but2",variant:"outlined",color:"secondary",children:"Register"}):Object(h.jsx)(E.a,{to:"/signin",exact:!0})]})]})})})},H=function(e){var t=e.login;return Object(h.jsx)("div",{children:t?Object(h.jsx)(S,{}):Object(h.jsxs)("div",{className:"sign",children:[Object(h.jsx)(A,{login:!0}),Object(h.jsx)(D,{})]})})};n(143);var K=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),n=Object(c.useRef)(null),s=Object(c.useRef)(null);return Object(h.jsxs)("div",{className:"add",children:[Object(h.jsx)(M.a,{className:"add_ip",inputRef:e,placeholder:"URL"}),Object(h.jsx)(M.a,{className:"add_ip",inputRef:t,placeholder:"Channel"}),Object(h.jsx)(M.a,{className:"add_ip",inputRef:n,placeholder:"Description"}),Object(h.jsx)(M.a,{className:"add_ip",inputRef:s,placeholder:"Song"}),Object(h.jsx)(F.a,{onClick:function(){function c(){return(c=Object(l.a)(o.a.mark((function c(){var a,r;return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a={url:e.current.value,channel:t.current.value,description:n.current.value,song:s.current.value,likes:0,comments:0,shares:0},c.next=3,p.post("/upload",a);case 3:return r=c.sent,c.abrupt("return",r);case 5:case"end":return c.stop()}}),c)})))).apply(this,arguments)}(function(){return c.apply(this,arguments)})().then((function(e){"fail"==e.data?(console.log("Failed"),window.alert("Failed")):(console.log("Uploaded"),window.location.href="/")})).catch((function(e){console.log(e)}))},variant:"outlined",className:"add_but",children:"Upload"})]})};var V=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),r=Object(j.a)(a,2),i=r[0],u=r[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/v2/posts");case 2:return t=e.sent,s(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(h.jsx)(T.Provider,{value:{user:i,setUser:u},children:i||J.a.get("name")?Object(h.jsxs)(E.d,{children:[Object(h.jsx)(E.b,{path:"/signin",exact:!0,children:Object(h.jsx)(E.a,{to:"/",exact:!0})}),Object(h.jsx)(E.b,{path:"/add",exact:!0,children:Object(h.jsx)(K,{})}),Object(h.jsxs)(E.b,{path:"/",exact:!0,children:[Object(h.jsxs)("div",{className:"but",children:[Object(h.jsx)(L.b,{to:"/add",children:Object(h.jsx)(F.a,{variant:"outlined",className:"but_but",children:" ADD "})}),Object(h.jsx)(F.a,{variant:"outlined",className:"but_but",onClick:function(){J.a.remove("name"),window.location.href="/"},children:" LOGOUT "})]}),Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)("div",{className:"app_videos",children:[n.map((function(e){var t=e._id,n=e.url,c=e.channel,s=e.description,a=e.song,r=e.likes,i=e.comments,o=e.shares;return Object(h.jsx)(y,{login:!0,objid:t,url:n,channel:c,description:s,song:a,likes:parseInt(r),comments:parseInt(i),shares:parseInt(o)})})),";"]})})]}),Object(h.jsx)(E.b,{component:S})]}):Object(h.jsxs)(E.d,{children:[Object(h.jsx)(E.b,{path:"/signin",exact:!0,children:Object(h.jsx)(W,{login:!1})}),Object(h.jsx)(E.b,{path:"/signup",exact:!0,children:Object(h.jsx)(G,{login:!1})}),Object(h.jsx)(E.b,{path:"/",exact:!0,children:Object(h.jsx)(E.a,{to:"/welcome",exact:!0})}),Object(h.jsx)(E.b,{path:"/welcome",exact:!0,children:Object(h.jsx)(H,{login:!1})}),Object(h.jsx)(E.b,{component:S})]})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,171)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(L.a,{children:Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(V,{})})}),document.getElementById("root")),X()},95:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[144,1,2]]]);
//# sourceMappingURL=main.9b79d034.chunk.js.map