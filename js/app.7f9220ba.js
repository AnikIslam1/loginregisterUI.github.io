(function(e){function t(t){for(var n,o,s=t[0],u=t[1],c=t[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("form",{on:{submit:function(t){return t.preventDefault(),e.SubmitForm.apply(null,arguments)}}},[r("div",{staticClass:"container"},[r("h1",[e._v("Register")]),r("p",[e._v("Please fill in this form to create an account.")]),r("hr"),e._m(0),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.name,expression:"register.name"}],attrs:{type:"text",placeholder:"Enter Name",required:""},domProps:{value:e.register.name},on:{input:function(t){t.target.composing||e.$set(e.register,"name",t.target.value)}}}),e._m(1),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.mail,expression:"register.mail"}],attrs:{type:"email",placeholder:"Enter Email",required:""},domProps:{value:e.register.mail},on:{input:function(t){t.target.composing||e.$set(e.register,"mail",t.target.value)}}}),r("hr"),e._m(2),r("button",{staticClass:"registerbtn",attrs:{type:"submit"}},[e._v("Register")])]),e._m(3)])])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{attrs:{for:"User_Name"}},[r("b",[e._v("Name")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{attrs:{for:"User_Email"}},[r("b",[e._v("Email")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("By creating an account you agree to our "),r("a",{attrs:{href:"#"}},[e._v("Terms & Privacy")]),e._v(".")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container signin"},[r("p",[e._v("Already have an account? "),r("a",{attrs:{href:"#"}},[e._v("Sign in")]),e._v(".")])])}],o=r("1da1"),s=(r("d3b7"),r("96cf"),{name:"App",data:function(){return{register:{name:"",mail:""},registers:[]}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getRegister();case 2:case"end":return t.stop()}}),t)})))()},methods:{getRegister:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://anik-backend001.herokuapp.com/api/register/");case 2:return r=t.sent,t.next=5,r.json();case 5:e.registers=t.sent;case 6:case"end":return t.stop()}}),t)})))()},SubmitForm:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getRegister();case 2:return t.next=4,fetch("https://anik-backend001.herokuapp.com/api/register/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.register)});case 4:return t.next=6,e.getRegister();case 6:case"end":return t.stop()}}),t)})))()}}}),u=s,c=(r("034f"),r("2877")),l=Object(c["a"])(u,a,i,!1,null,null,null),p=l.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.7f9220ba.js.map