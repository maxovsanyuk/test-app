(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n(1),i=n(17),l=n(3),u=(n(28),n(5)),s=n(6),d=n(8),m=n(7),p=n(9),f=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).page,t=void 0===e?1:e;return function(e){e({type:"GET_USERS_PENDING"}),fetch("https://randomuser.me/api/?page=".concat(t,"&results=5")).then(function(e){return e.json()}).then(function(t){e({type:"GET_USERS_FULFILED",payload:t})}).catch(function(t){e({type:"GET_USERS_REJECTED",payload:t})})}};n(29),n(30);var E=function(e){var t=e.item;return r.a.createElement("div",{className:"item"},r.a.createElement("div",null,r.a.createElement("img",{src:t.picture.large,className:"photo"})),r.a.createElement("h2",{className:"full-name"},"Name: ",t.name.first.charAt(0).toUpperCase()+t.name.first.slice(1)),r.a.createElement("h3",{className:"user-age"},"Age: ",t.dob.age," years old"))},h=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onGetUsers()}},{key:"render",value:function(){var e=this.props,t=e.items;return e.loading?r.a.createElement("div",{className:"loading"}):r.a.createElement("div",{className:"items-container"},t.map(function(e){return r.a.createElement(E,{key:e.cell,item:e})}))}}]),t}(r.a.Component),g=Object(l.b)(function(e){return{items:e.users.items,loading:e.users.loading}},function(e){return{onGetUsers:function(t){return e(f(t))}}})(h),b=(n(31),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){return function(){var t=n.props,a=t.loading,r=(t.currentPage,t.onGetUsers);a||e<1||r({page:e})}},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.currentPage;return r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{id:"prevBtn",onClick:this.handleClick(e-1)},"Prev"),r.a.createElement("button",{id:"nextBtn",onClick:this.handleClick(e+1)},"Next"))}}]),t}(r.a.Component)),v=Object(l.b)(function(e){return{currentPage:e.users.info.page,loading:e.users.loading}},function(e){return{onGetUsers:function(t){return e(f(t))}}})(b);var j=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(g,null),r.a.createElement(v,null))},O=n(10),y={info:{},items:[],loaded:!1,loading:!1,error:null},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USERS_PENDING":return Object(O.a)({},e,{loading:!0});case"GET_USERS_FULFILED":return Object(O.a)({},e,{items:t.payload.results,info:t.payload.info,loading:!1,loaded:!0});case"GET_USERS_REJECTED":return Object(O.a)({},e,{loaded:!1,error:t.payload});default:return e}},U=Object(o.c)({users:N}),G=(n(32),Object(o.d)(U,Object(o.a)(i.a)));Object(c.render)(r.a.createElement(l.a,{store:G},r.a.createElement(j,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a6ade87a.chunk.js.map