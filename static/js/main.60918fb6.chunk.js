(this.webpackJsonpfms=this.webpackJsonpfms||[]).push([[0],{39:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(21),j=c.n(n),i=c(5),a=c(4),r=c.n(a),d=c(8),l=c(13),b=(c(39),c(33)),O=c(14),h=c(16),x="POST_USER",o=c(31),m=c(32),u=c(0),p=Object(u.jsx)(o.a,{icon:m.a});function g(){Object(h.c)((function(e){return e.auto_info})),Object(h.b)();var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],j=Object(s.useState)(""),a=Object(l.a)(j,2),x=a[0],o=a[1],m=Object(i.f)();Object(s.useEffect)((function(){localStorage.getItem("user-info")&&m.push("/main-page")}),[]);var g=Object(b.a)(),v=g.register,f=(g.errors,g.handleSubmit),N=Object(s.useState)(!1),k=Object(l.a)(N,2),w=k[0],_=k[1];function S(){return(S=Object(d.a)(r.a.mark((function e(){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn(c,x),t={email:c,password:x},e.next=4,fetch("https://warm-escarpment-21852.herokuapp.com/account/api/token/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)});case 4:return s=e.sent,e.next=7,s.json();case 7:s=e.sent,localStorage.setItem("user-info",JSON.stringify(s));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"login_form",children:[Object(u.jsx)("span",{children:"LOGO"}),Object(u.jsx)("h2",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(u.jsxs)("form",{className:"inputs",onSubmit:f((function(){console.log("Submitted")})),children:[Object(u.jsx)("input",{type:"email",name:"email",placeholder:"\u041f\u043e\u0447\u0442\u0430",onChange:function(e){return n(e.target.value)},ref:v({required:"Enter your e-mail",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Enter a valid e-mail address"}})}),Object(u.jsxs)("div",{className:"passField",children:[Object(u.jsx)("input",{type:w?"text":"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){return o(e.target.value)},ref:v({required:"This is required."})}),Object(u.jsx)("i",{onClick:function(){_(!w)},children:p})]}),Object(u.jsx)(O.b,{to:"/forgotten",children:Object(u.jsx)("p",{id:"p",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"})})]}),Object(u.jsx)("button",{type:"submit",className:"login_form__button",onClick:function(){return S.apply(this,arguments)},children:"\u0412\u043e\u0439\u0442\u0438"})]})})})}c(49);function v(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"forgotten-container",children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("span",{children:"LOGO"}),Object(u.jsx)("h2",{id:"h2_forgotten",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"}),Object(u.jsxs)("div",{className:"text",children:[Object(u.jsx)("p",{id:"#p-forget",children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0443 \u0434\u043b\u044f \u0437\u0430\u043c\u0435\u043d\u044b \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0430\u0440\u043e\u043b\u044f."}),Object(u.jsx)("p",{id:"#p-forget",children:"\u0415\u0441\u043b\u0438 \u0432\u044b \u044f\u0432\u043b\u044f\u0435\u0442\u0435\u0441\u044c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c, \u0442\u043e \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043a \u0441\u0443\u043f\u0435\u0440 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0443"})]}),Object(u.jsx)(O.b,{to:"/",children:Object(u.jsx)("button",{children:"\u041d\u0430\u0437\u0430\u0434"})})]})})})}c(50);var f=c.p+"static/media/main.465f0970.svg",N=c.p+"static/media/settings.6bc400ba.svg",k=c.p+"static/media/analytics.6bc400ba.svg",w=c.p+"static/media/users.72569a77.svg",_=c.p+"static/media/exit.8f7749d4.svg",S=c.p+"static/media/up.58480812.svg",y=c.p+"static/media/down.f2388254.svg",B=(c.p,c.p+"static/media/gain.421ef177.svg"),C=c.p+"static/media/consumption.a39c1b52.svg",D=c.p+"static/media/transfer.69aba96c.svg",G=c.p+"static/media/dots.d8971efc.svg",E=c.p+"static/media/black-button.695bc8b7.svg",F=c.p+"static/media/red-button.2d38117f.svg",I=c.p+"static/media/green-button.bf84e898.svg",J=c.p+"static/media/export.b6c4040f.svg";function U(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"main-page",children:[Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsx)("div",{className:"h1",children:Object(u.jsx)("span",{children:"LOGO"})}),Object(u.jsxs)("div",{className:"userCard",children:[Object(u.jsx)("div",{className:"block"}),Object(u.jsx)("h3",{children:"\u0425\u0440\u0438\u0441\u0442\u043e\u0444\u043e\u0440\u0438\u0434\u0438 \u0414\u043c\u0438\u0442\u0440\u0438\u0439"}),Object(u.jsx)("p",{className:"email_user",children:"dimitios.khristoforidi@gmail.com"}),Object(u.jsx)("p",{className:"title_user",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"})]}),Object(u.jsxs)("button",{className:"user_button",children:[Object(u.jsx)("img",{src:f,alt:"main.svg"}),Object(u.jsx)("span",{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})]}),Object(u.jsxs)("button",{className:"user_button",children:[Object(u.jsx)("img",{src:N,alt:"main.svg"}),Object(u.jsx)("span",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})]}),Object(u.jsxs)("button",{className:"user_button",children:[Object(u.jsx)("img",{src:k,alt:"main.svg"}),Object(u.jsx)("span",{children:"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430"})]}),Object(u.jsxs)("button",{className:"user_button",children:[Object(u.jsx)("img",{src:w,alt:"main.svg"}),Object(u.jsx)("span",{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})]}),Object(u.jsxs)("button",{className:"exit_button",children:[Object(u.jsx)("img",{src:_,alt:"exit.svg"}),Object(u.jsx)("span",{children:"\u0412\u044b\u0439\u0442\u0438"})]})]}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsxs)("div",{className:"Info-prices",children:[Object(u.jsxs)("div",{className:"Gain",children:[Object(u.jsxs)("div",{className:"Gain-info",children:[Object(u.jsx)("h1",{children:"\u0414\u043e\u0445\u043e\u0434"}),Object(u.jsxs)("div",{className:"Gain-info-percent",children:[Object(u.jsx)("img",{src:S,alt:"vector.svg"}),Object(u.jsx)("p",{children:"12.3%"})]})]}),Object(u.jsx)("p",{id:"amount",children:"103 341,12"})]}),Object(u.jsxs)("div",{className:"Withdraw",children:[Object(u.jsxs)("div",{className:"Withdraw-info",children:[Object(u.jsx)("h1",{children:"\u0420\u0430\u0441\u0445\u043e\u0434"}),Object(u.jsxs)("div",{className:"Withdraw-info-percent",children:[Object(u.jsx)("img",{src:y,alt:"vector.svg"}),Object(u.jsx)("p",{children:"1.3%"})]})]}),Object(u.jsx)("p",{id:"amount",children:"13250,10"})]}),Object(u.jsxs)("div",{className:"Balance",children:[Object(u.jsxs)("div",{className:"Balance-info",children:[Object(u.jsx)("h1",{children:"\u0411\u0430\u043b\u0430\u043d\u0441"}),Object(u.jsxs)("div",{className:"Balance-info-percent",children:[Object(u.jsx)("img",{src:S,alt:"vector.svg"}),Object(u.jsx)("p",{children:"10.52%"})]})]}),Object(u.jsx)("p",{id:"amount",children:"+ 90 091,02"})]})]}),Object(u.jsxs)("div",{className:"transaction-general",children:[Object(u.jsx)("h1",{children:"\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438"}),Object(u.jsxs)("div",{className:"transaction-buttons",children:[Object(u.jsxs)("button",{className:"gain-button",children:[Object(u.jsx)("img",{src:B,alt:"gain-tr.svg"}),Object(u.jsx)("span",{children:"\u0414\u043e\u0445\u043e\u0434"})]}),Object(u.jsxs)("button",{className:"consumption-button",children:[Object(u.jsx)("img",{src:C,alt:"consumption.svg"}),Object(u.jsx)("span",{children:"\u0420\u0430\u0441\u0445\u043e\u0434"})]}),Object(u.jsxs)("button",{className:"transfer-button",children:[Object(u.jsx)("img",{src:D,alt:"transfer.svg"}),Object(u.jsx)("span",{children:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434"})]})]})]}),Object(u.jsxs)("div",{className:"transaction-main",children:[Object(u.jsxs)("div",{className:"tr-main-buttons",children:[Object(u.jsxs)("div",{className:"tr-buttons",children:[Object(u.jsxs)("button",{className:"tr-button set",children:[Object(u.jsx)("span",{children:"\u041a\u043e\u0448\u0435\u043b\u0451\u043a"}),Object(u.jsx)("img",{src:S,alt:"down.svg"})]}),Object(u.jsxs)("button",{className:"tr-button set2",children:[Object(u.jsx)("span",{children:"\u041a\u043e\u043d\u0442\u0440\u0430\u0433\u0435\u043d\u0442"}),Object(u.jsx)("img",{src:S,alt:"down.svg"})]}),Object(u.jsxs)("button",{className:"tr-button",children:[Object(u.jsx)("span",{children:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"}),Object(u.jsx)("img",{src:S,alt:"down.svg"})]}),Object(u.jsx)("img",{src:G,id:"dots",alt:"dots.svg"})]}),Object(u.jsxs)("button",{className:"export-button",children:[Object(u.jsx)("img",{src:J,alt:"export"}),Object(u.jsx)("span",{children:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442"})]})]}),Object(u.jsxs)("table",{id:"transaction-table",children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{id:"table-header",children:"\u0422\u0438\u043f"}),Object(u.jsx)("th",{id:"table-header",children:"\u0414\u0430\u0442\u0430"}),Object(u.jsx)("th",{id:"table-header",children:"\u0421\u0443\u043c\u043c\u0430"}),Object(u.jsx)("th",{id:"table-header",children:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"}),Object(u.jsx)("th",{id:"table-header",children:"\u041f\u0440\u043e\u0435\u043a\u0442"}),Object(u.jsx)("th",{id:"table-header",children:"\u041a\u043e\u043d\u0442\u0440\u0430\u0433\u0435\u043d\u0442"}),Object(u.jsx)("th",{className:"wallet",children:"\u041a\u043e\u0448\u0435\u043b\u0451\u043a"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:E,alt:"blackbutton.svg"})}),Object(u.jsx)("td",{children:"12.01.2021"}),Object(u.jsx)("td",{children:"1200"}),Object(u.jsx)("td",{children:"-"}),Object(u.jsx)("td",{children:"-"}),Object(u.jsx)("td",{children:"-"}),Object(u.jsx)("td",{children:"Demir Bank"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:I,alt:"blackbutton.svg"})}),Object(u.jsx)("td",{children:"12.01.2021"}),Object(u.jsx)("td",{children:"15389,12"}),Object(u.jsx)("td",{children:"Breez Pro"}),Object(u.jsx)("td",{children:"Finance Management System"}),Object(u.jsx)("td",{children:"\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432"}),Object(u.jsx)("td",{children:"Demir Bank"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:F,alt:"blackbutton.svg"})}),Object(u.jsx)("td",{children:"12.01.2021"}),Object(u.jsx)("td",{children:"1200"}),Object(u.jsx)("td",{children:"Neobis"}),Object(u.jsx)("td",{children:"\u0411\u0435\u0437 \u043f\u0440\u043e\u0435\u043a\u0442\u0430"}),Object(u.jsx)("td",{children:"\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432"}),Object(u.jsx)("td",{children:"Demir Bank"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:I,alt:"blackbutton.svg"})}),Object(u.jsx)("td",{children:"12.01.2021"}),Object(u.jsx)("td",{children:"1200"}),Object(u.jsx)("td",{children:"UmarCargo"}),Object(u.jsx)("td",{children:"\u0411\u0435\u0437 \u043f\u0440\u043e\u0435\u043a\u0442\u0430"}),Object(u.jsx)("td",{children:"\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432"}),Object(u.jsx)("td",{children:"Demir Bank"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:I,alt:"blackbutton.svg"})}),Object(u.jsx)("td",{children:"12.01.2021"}),Object(u.jsx)("td",{children:"1200"}),Object(u.jsx)("td",{children:"UmarCargo"}),Object(u.jsx)("td",{children:"\u0411\u0435\u0437 \u043f\u0440\u043e\u0435\u043a\u0442\u0430"}),Object(u.jsx)("td",{children:"\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432"}),Object(u.jsx)("td",{children:"Demir Bank"})]}),Object(u.jsxs)("tr",{id:"contr",children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:I,alt:"blackbutton.svg"})}),Object(u.jsx)("td",{children:"12.01.2021"}),Object(u.jsx)("td",{children:"1200"}),Object(u.jsx)("td",{children:"UmarCargo"}),Object(u.jsx)("td",{children:"\u0411\u0435\u0437 \u043f\u0440\u043e\u0435\u043a\u0442\u0430"}),Object(u.jsx)("td",{children:"\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432"}),Object(u.jsx)("td",{children:"Demir Bank"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{id:!0,src:I,alt:"blackbutton.svg"})}),Object(u.jsx)("td",{children:"12.01.2021"}),Object(u.jsx)("td",{children:"1200"}),Object(u.jsx)("td",{children:"UmarCargo"}),Object(u.jsx)("td",{children:"\u0411\u0435\u0437 \u043f\u0440\u043e\u0435\u043a\u0442\u0430"}),Object(u.jsx)("td",{children:"\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432"}),Object(u.jsx)("td",{children:"Demir Bank"})]})]})]})]})]})})}var A=function(){return Object(u.jsx)("main",{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"/",component:g,exact:!0}),Object(u.jsx)(i.a,{path:"/forgotten",component:v}),Object(u.jsx)(i.a,{path:"/main-page",component:U})]})})},T=c(23),q=c(6),L=c(29),P={auto_info:JSON.parse(localStorage.getItem("user-info"))||[]},W=Object(T.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(L.a)(Object(L.a)({},e),{},{auto_info:[].concat(Object(q.a)(e.auto_info),[t.payload])});default:return e}}));j.a.render(Object(u.jsx)(h.a,{store:W,children:Object(u.jsx)(O.a,{children:Object(u.jsx)(A,{})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.60918fb6.chunk.js.map