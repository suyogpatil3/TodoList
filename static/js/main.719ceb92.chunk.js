(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(t,e,c){},17:function(t,e,c){"use strict";c.r(e);var o=c(1),s=c.n(o),n=c(8),a=c.n(n),i=(c(14),c(2)),r=(c(7),c(9)),d=c(0),l=function(t){var e=t.setTextInput,c=t.textInput,o=t.setStatus,s=t.setEditItem,n=t.todoArray,a=t.setTodoArray,i=t.editItem,l=t.setLocalStorage,j=t.counter;return Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{className:"formInput",children:[Object(d.jsx)("input",{value:c,type:"text",className:"input",onChange:function(t){e(t.target.value)},placeholder:"Add a todo!"}),Object(d.jsx)("button",{className:"add",type:"submit",onClick:function(t){if(o("All"),t.preventDefault(),""!==c)if(i)n.map((function(t){t.id===i&&(t.text=c,a(n),l(n))})),s(""),e("");else{var d=[].concat(Object(r.a)(n),[{text:c,completed:!1,id:Math.floor(8e5*Math.random())}]);a(d),l(d),e("")}},children:Object(d.jsx)("i",{className:i?"fas fa-edit ":"fas fa-plus-circle "})})]}),Object(d.jsxs)("div",{id:"selectTodo",children:[Object(d.jsxs)("select",{name:"todoOptions",id:"select",onChange:function(t){o(t.target.value)},children:[Object(d.jsx)("option",{id:"all",value:"All",children:"All "}),Object(d.jsx)("option",{value:"Completed",children:"Completed "}),Object(d.jsx)("option",{value:"Incomplete",children:"Incomplete "})]}),Object(d.jsx)("p",{className:"counter",children:1==j?"1 item":"".concat(j," items")})]})]})},j=c(6);function u(t){var e=t.text,c=t.todoArray,s=t.setTodoArray,n=t.todo,a=t.setEditItem,r=t.setTextInput,l=t.setLocalStorage,u=Object(o.useState)(!1),b=Object(i.a)(u,2),m=(b[0],b[1]);return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:n.completed?"todo_checked":"todo",children:[Object(d.jsxs)("div",{className:"todoText",children:[Object(d.jsx)("button",{onClick:function(){!0===n.completed?m(!0):m(!1);var t=c.map((function(t){return t.id===n.id?Object(j.a)(Object(j.a)({},t),{},{completed:!t.completed}):t}));s(t),l(t)},id:"check",children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("li",{className:"text",children:e})]}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{onClick:function(){a(n.id),r(n.text)},disabled:n.completed,id:"edit",className:"edit",children:Object(d.jsx)("i",{className:"fas fa-edit "})}),Object(d.jsx)("button",{onClick:function(){var t=c.filter((function(t){return t.id!==n.id}));s(t),l(t)},id:"trash",children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})]}),Object(d.jsx)("br",{})]})}var b=function(t){var e=t.todoArray,c=t.setTodoArray,o=t.filterTodo,s=t.setEditItem,n=t.setTextInput,a=t.setLocalStorage;return Object(d.jsx)("div",{className:"todoContainer",children:Object(d.jsx)("ul",{className:"todoList",children:o.map((function(t){return Object(d.jsx)(u,{todoArray:e,setTodoArray:c,todo:t,text:t.text,setEditItem:s,setTextInput:n,setLocalStorage:a},t.id)})).reverse()})})};c(16);var m=function(){var t=Object(o.useState)(""),e=Object(i.a)(t,2),c=e[0],s=e[1],n=JSON.parse(localStorage.getItem("todoArray")),a=Object(o.useState)(n||[]),r=Object(i.a)(a,2),j=r[0],u=r[1],m=Object(o.useState)("All"),O=Object(i.a)(m,2),f=O[0],x=O[1],p=Object(o.useState)([]),h=Object(i.a)(p,2),v=h[0],I=h[1],g=Object(o.useState)(""),A=Object(i.a)(g,2),S=A[0],y=A[1],T=Object(o.useState)(0),N=Object(i.a)(T,2),C=N[0],L=N[1];function k(t){localStorage.setItem("todoArray",JSON.stringify(t))}return Object(o.useEffect)((function(){!function(){var t=[];"Completed"===f?(j.filter((function(t){return t.completed})),L(t.length),I(t)):"Incomplete"===f?(t=j.filter((function(t){return!t.completed})),L(t.length),I(t)):(document.getElementById("select").value="All",L(j.length),I(j))}()}),[j,f]),Object(d.jsxs)("div",{className:"App ",children:[Object(d.jsx)("p",{id:"h1",children:"Todo List"}),Object(d.jsxs)("div",{class:"form",children:[Object(d.jsx)(l,{todoArray:j,setTodoArray:u,textInput:c,setTextInput:s,setStatus:x,status:f,editItem:S,setEditItem:y,setLocalStorage:k,counter:C}),Object(d.jsx)(b,{todoArray:j,filterTodo:v,setTodoArray:u,setEditItem:y,setTextInput:s,setLocalStorage:k})]})]})},O=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(e){var c=e.getCLS,o=e.getFID,s=e.getFCP,n=e.getLCP,a=e.getTTFB;c(t),o(t),s(t),n(t),a(t)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),O()},7:function(t,e,c){}},[[17,1,2]]]);
//# sourceMappingURL=main.719ceb92.chunk.js.map