(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(40)},20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(12),c=t.n(o),u=(t(6),t(13)),i=t(2),l=(t(20),t(3)),m=t.n(l),f="/api/persons",s=function(){return m.a.get(f).then(function(e){return e.data})},d=function(e){return m.a.post(f,e).then(function(e){return e.data})},h=function(e,n){return m.a.put("".concat(f,"/").concat(e),n).then(function(e){return e.data})},b=function(e){return m.a.delete("".concat(f,"/").concat(e)).then(function(e){return e.data})},v=function(e){var n=e.message,t=e.color;return null===n?null:r.a.createElement("div",{className:t},n)},w=function(e){var n=e.filterName,t=e.changeHandler;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{value:n,onChange:t}))},E=function(e){var n=e.submitHandler,t=e.newName,a=e.newNumber,o=e.nameChangeHandler,c=e.numberChangeHandler;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:t,onChange:o})),"number:",r.a.createElement("input",{value:a,onChange:c}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},g=function(e){var n=e.names;return r.a.createElement("div",null,n)},p=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),l=Object(i.a)(c,2),m=l[0],f=l[1],p=Object(a.useState)(""),j=Object(i.a)(p,2),O=j[0],C=j[1],k=Object(a.useState)(""),H=Object(i.a)(k,2),N=H[0],y=H[1],S=Object(a.useState)(null),T=Object(i.a)(S,2),L=T[0],D=T[1],I=Object(a.useState)(""),A=Object(i.a)(I,2),B=A[0],J=A[1];Object(a.useEffect)(function(){s().then(function(e){o(e)})},[]);var W=function(){d({name:m,number:O}).then(function(e){o(t.concat(e)),J("message"),D("Added ".concat(e.name)),setTimeout(function(){D(null)},5e3),f(""),C("")}).catch(function(e){J("error");var n=e.response.data.substr(121,200);n=n.split("<br>")[0],console.log(n),D(n),f(""),C(""),setTimeout(function(){D(null)},5e3)})},x=function(e){var n=t.filter(function(n){return n.name.toLowerCase()===e}),a=Object(u.a)({},n[0],{number:O}),r=a.id;h(r,a).then(function(e){o(t.map(function(n){return n.id!==r?n:e})),f(""),C(""),J("message"),D("Updated ".concat(a.name)),setTimeout(function(){D(null)},5e3)}).catch(function(e){J("error"),D("Information of ".concat(a.name," has already been removed from the server")),o(t.filter(function(e){return e.id!==r})),f(""),C(""),setTimeout(function(){D(null)},5e3)})};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:L,color:B}),r.a.createElement(w,{filterName:N,changeHandler:function(e){y(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(E,{submitHandler:function(e){e.preventDefault(),t.some(function(e){return e.name.toLowerCase()===m.toLowerCase()})?window.confirm("".concat(m," is already added to phonebook, replace the old number with a new one?"))&&x(m):W()},newName:m,nameChangeHandler:function(e){f(e.target.value)},newNumber:O,numberChangeHandler:function(e){C(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(g,{names:t.map(function(e){return e.name.toLowerCase().includes(N.toLowerCase())?r.a.createElement("div",{key:e.name},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return function(e){var n=t.filter(function(n){return n.id===e});window.confirm("Delete ".concat(n[0].name,"?"))&&b(e).then(function(a){J("message"),D("Deleted ".concat(n[0].name)),setTimeout(function(){D(null)},5e3),o(t.filter(function(n){return n.id!==e}))}).catch(function(a){J("error"),D("Information of ".concat(n[0].name," has already been moved from server")),o(t.filter(function(n){return n.id!==e})),setTimeout(function(){D(null)},5e3)})}(e.id)}},"Delete")):""})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,n,t){}},[[14,1,2]]]);
//# sourceMappingURL=main.da466d4d.chunk.js.map