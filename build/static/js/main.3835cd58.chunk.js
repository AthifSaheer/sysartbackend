(this.webpackJsonpsysartfrontend=this.webpackJsonpsysartfrontend||[]).push([[0],{106:function(e,t,c){},210:function(e,t,c){},211:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(75),r=c.n(a),o=(c(85),c(3)),i=c(4),l=(c.p,c(86),c(13)),j=c.n(l),d=(c(50),c(230)),b=(c(106),c(0));var u=function(e){return Object(d.a)(),Object(b.jsxs)("div",{className:"navbar__main",children:[Object(b.jsx)("div",{className:"comany_txt",children:Object(b.jsx)("h5",{children:"SYSART"})}),Object(b.jsx)("div",{className:"middle_div"}),Object(b.jsx)("div",{className:"logout_btn",children:Object(b.jsx)("button",{onClick:function(){i.reactLocalStorage.remove("logintoken"),i.reactLocalStorage.remove("code"),e.setComponent("login")},children:"Logout"})})]})},O=c(229),x=Object(O.a)({table:{minWidth:650}});function h(e,t,c,n,s){return{name:e,calories:t,fat:c,carbs:n,protein:s}}h("Frozen yoghurt",159,6,24,4),h("Ice cream sandwich",237,9,37,4.3),h("Eclair",262,16,24,6),h("Cupcake",305,3.7,67,4.3),h("Gingerbread",356,16,49,3.9);function m(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),r=Object(o.a)(a,2),l=r[0],d=r[1];Object(n.useEffect)((function(){var e=i.reactLocalStorage.get("code");j.a.get("http://127.0.0.1:8000/api/v1/home/".concat(e,"/")).then((function(e){console.log("----Succes-------",e.data),s(e.data)})).catch((function(e){console.log("---Error--------",e.data),d(!0)}))}),[]);x();return Object(b.jsx)("div",{className:"home_main_div",children:l?Object(b.jsx)("p",{className:"server_down_text_danger",children:"Server Down !"}):Object(b.jsxs)("div",{className:"main_div",children:[Object(b.jsx)("div",{className:"student_table_start"}),Object(b.jsxs)("div",{className:"student_table",children:[Object(b.jsx)("p",{children:"STUDENTS"}),Object(b.jsxs)("table",{style:{width:"99%"},children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"ID"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Age"}),Object(b.jsx)("th",{children:"Gender"}),Object(b.jsx)("th",{children:"Address"})]})}),Object(b.jsx)("tbody",{style:{textAlign:"center"},children:c.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.id}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.age}),Object(b.jsx)("td",{children:e.gender}),Object(b.jsx)("td",{children:e.address})]},e.id)}))})]})]})]})})}var p=c(22);p.a().shape({username:p.b().min(2,"Too Short!").max(50,"Too Long!").required("Required"),password:p.b().min(6,"Too Short!").max(50,"Too Long!").required("Required"),confirmPassword:p.b().min(6,"Too Short!").max(50,"Too Long!").required("Required")});var g=function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(!1),l=Object(o.a)(r,2),u=l[0],O=l[1],x=Object(n.useState)(!1),h=Object(o.a)(x,2),m=h[0],p=h[1],g=Object(n.useState)(""),f=Object(o.a)(g,2),v=f[0],S=f[1],N=Object(n.useState)(!1),y=Object(o.a)(N,2),w=y[0],C=y[1],_=Object(n.useState)(""),T=Object(o.a)(_,2),L=T[0],k=T[1],q=Object(n.useState)(!1),E=Object(o.a)(q,2),I=E[0],P=E[1],A=Object(n.useState)(""),B=Object(o.a)(A,2),D=B[0],R=B[1],U=Object(n.useState)(!1),z=Object(o.a)(U,2),F=z[0],G=z[1],J=Object(n.useState)(!1),M=Object(o.a)(J,2),W=M[0],Y=M[1],H=Object(n.useState)(""),K=Object(o.a)(H,2),Q=K[0],V=K[1],X=Object(n.useState)(!1),Z=Object(o.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)(!1),ce=Object(o.a)(te,2),ne=ce[0],se=ce[1],ae=Object(n.useState)(!1),re=Object(o.a)(ae,2),oe=re[0],ie=re[1];return Object(d.a)(),Object(n.useEffect)((function(){i.reactLocalStorage.get("logintoken")&&e.setComponent("home")}),[]),Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"main-div",children:Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"login_container",children:[Object(b.jsx)("h1",{className:"login-text",children:"Sign Up"}),ne?Object(b.jsx)("span",{className:"text-danger",style:{justifyContent:"center",alignItems:"center",display:"flex",marginBottom:"10px",fontSize:"22px"},children:"Server Down!"}):null,Object(b.jsxs)("div",{className:"login-div",children:[Object(b.jsx)("input",{type:"text",name:"username",className:"form-control username-input",placeholder:"Username",value:v,onChange:function(e){return S(e.target.value)}}),w?Object(b.jsx)("span",{className:"text-danger",children:"This field is required"}):null,Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"email",name:"email",className:"form-control username-input",placeholder:"Email",value:s,onChange:function(e){return a(e.target.value)}}),u?Object(b.jsx)("span",{className:"text-danger",children:"This field is required"}):null,m?Object(b.jsx)("span",{className:"text-danger",children:"This field must be an email !"}):null,Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"password",name:"password",className:"form-control password-input",id:"exampleInputPassword1",placeholder:"Password",value:L,onChange:function(e){return k(e.target.value)}}),I?Object(b.jsx)("span",{className:"text-danger",children:"This field is required"}):null,Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"password",name:"confirmPassword",className:"form-control password-input",id:"exampleInputPassword2",placeholder:"Confirm password",value:D,onChange:function(e){return R(e.target.value)}}),F?Object(b.jsx)("span",{className:"text-danger",children:"This field is required"}):null,oe?Object(b.jsx)("span",{className:"text-danger",children:"Username already exists!"}):null,W?Object(b.jsx)("span",{className:"text-danger",children:"Password did not match!"}):null,Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"code",children:"Choose Code:"}),Object(b.jsxs)("select",{name:"code",id:"code",onChange:function(e){return V(e.target.value)},className:"input-error",children:[Object(b.jsx)("option",{value:"",children:"-----------"}),Object(b.jsx)("option",{value:"sysarta",children:"A"}),Object(b.jsx)("option",{value:"sysartb",children:"B"})]}),Object(b.jsx)("br",{}),$?Object(b.jsx)("span",{className:"text-danger",children:"This field is required"}):null,Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:function(){if(""==s&&""==L&&""==D?(O(!0),P(!0),G(!0),C(!0),ee(!0)):(C(""==v),""==s?O(!0):s.includes("@")?(p(!1),O(!1)):p(!0),P(""==L),P(""==D),L!=D?(console.log("password:",L),console.log("confirmPassword:",D),Y(!0)):Y(!1),ee(""==Q)),v&&s&&L&&L&&Q&&L==D&&s.includes("@")){var t={username:v,email:s,password:L,code:Q};j.a.post("http://127.0.0.1:8000/api/v1/register/account/",t).then((function(t){t.data["already exist"]?ie(!0):(i.reactLocalStorage.set("logintoken",t.data.key),i.reactLocalStorage.set("code",Q),e.setComponent("home"))})).catch((function(e){return se(!0)}))}},type:"submit",className:"login-btn",children:"Register"}),Object(b.jsxs)("p",{className:"or_log_signup_txt",children:["or ",Object(b.jsx)("span",{style:{color:"#1890ff"},onClick:function(){return e.setComponent("login")},children:" login now!"})]})]})]})})})})};c(210);var f=function(){var e=Object(n.useState)("home"),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(d.a)(),Object(n.useEffect)((function(){i.reactLocalStorage.get("logintoken")||s("login")}),[]),Object(b.jsx)("div",{children:"home"==c?Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{setComponent:s}),Object(b.jsx)(m,{})]}):"login"==c?Object(b.jsx)(v,{setComponent:s}):"signup"==c?Object(b.jsx)(g,{setComponent:s}):null})};var v=function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(!1),l=Object(o.a)(r,2),d=l[0],u=l[1],O=Object(n.useState)(!1),x=Object(o.a)(O,2),h=x[0],m=x[1],p=Object(n.useState)(""),g=Object(o.a)(p,2),f=g[0],v=g[1],S=Object(n.useState)(!1),N=Object(o.a)(S,2),y=N[0],w=N[1],C=Object(n.useState)(!1),_=Object(o.a)(C,2),T=_[0],L=_[1],k=Object(n.useState)(""),q=Object(o.a)(k,2),E=q[0],I=q[1],P=Object(n.useState)(!1),A=Object(o.a)(P,2),B=A[0],D=A[1],R=Object(n.useState)(!1),U=Object(o.a)(R,2),z=U[0],F=U[1];return Object(n.useEffect)((function(){i.reactLocalStorage.get("logintoken")&&e.setComponent("home")}),[]),Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"main-div",children:Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"login_container",children:[Object(b.jsx)("h1",{className:"login-text",children:"Log In"}),z?Object(b.jsx)("span",{className:"text-danger",style:{justifyContent:"center",alignItems:"center",display:"flex",marginBottom:"10px",fontSize:"22px"},children:"Server Down!"}):null,Object(b.jsxs)("div",{className:"login-div",children:[Object(b.jsx)("input",{type:"email",className:"form-control username-input",placeholder:"Email",value:s,onChange:function(e){return a(e.target.value)},required:!0}),d?Object(b.jsx)("span",{className:"text-danger",children:"This field is required"}):null,h?Object(b.jsx)("span",{className:"text-danger",children:"This field must be an email !"}):null,Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"password",className:"form-control password-input",id:"exampleInputPassword1",placeholder:"Password",value:f,onChange:function(e){return v(e.target.value)}}),y?Object(b.jsx)("span",{className:"text-danger",children:"This field is required"}):null,Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"code",children:"Choose Code:"}),Object(b.jsxs)("select",{name:"code",id:"code",onChange:function(e){return I(e.target.value)},className:"input-error",children:[Object(b.jsx)("option",{value:"",children:"-------"}),Object(b.jsx)("option",{value:"sysarta",children:"A"}),Object(b.jsx)("option",{value:"sysartb",children:"B"})]}),Object(b.jsx)("br",{}),B?Object(b.jsx)("span",{className:"text-danger",children:"This field is required"}):null,Object(b.jsx)("br",{}),T?Object(b.jsx)("span",{className:"text-danger",children:"Invalid credentials !"}):null,Object(b.jsx)("button",{onClick:function(){if(""==s&&""==f&&""==E?(u(!0),w(!0),D(!0)):(""==s?u(!0):s.includes("@")?(m(!1),u(!1)):m(!0),w(""==f),D(""==E)),s&&f&&E&&s.includes("@")){var t={email:s,password:f,code:E};j.a.post("http://127.0.0.1:8000/api/v1/login/",t).then((function(t){console.log("-----------",t.data),t.data.nouser?L(!0):(i.reactLocalStorage.set("logintoken",t.data.key),i.reactLocalStorage.set("code",E),e.setComponent("home"))})).catch((function(e){return F(!0)}))}},type:"submit",className:"login-btn",children:"Login"}),Object(b.jsxs)("p",{className:"or_log_signup_txt",children:["or ",Object(b.jsx)("span",{style:{color:"#1890ff"},onClick:function(){return e.setComponent("signup")},children:" register now!"})]})]})]})})})})};var S=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=(t[0],t[1]);return Object(n.useEffect)((function(){c(i.reactLocalStorage.get("component"))}),[i.reactLocalStorage.get("component")]),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(f,{})})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))},50:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){}},[[211,1,2]]]);
//# sourceMappingURL=main.3835cd58.chunk.js.map