(this["webpackJsonpEmployee-Directory"]=this["webpackJsonpEmployee-Directory"]||[]).push([[0],{31:function(e,t,a){e.exports=a(63)},36:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),s=a(9),o=a(6),m=a(24),i=a(25),u=a(30),E=a(29);a(36);var d=function(e){return r.a.createElement("div",Object.assign({className:"container cont ".concat(e.fluid?"-fluid":"")},e),e.children)};var f=function(e){return r.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e),e.children)};var h=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return r.a.createElement("div",Object.assign({className:t},e),e.children)},p=a(26),y=a.n(p),v=function(){return y.a.get("https://randomuser.me/api/?results=200&nat=us")};a(54);var b=function(e){return r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Search:"),r.a.createElement("input",{value:e.search,onChange:e.handleInputChange,name:"Employees",type:"text",className:"form-control",placeholder:"Type in a name to search...",id:"index"}),r.a.createElement("button",{type:"submit",onClick:e.handleFormSubmit,className:"btn btn-primary"},"Search")))},g=function(e){Object(u.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={Employees:[],sortDirection:"asc",filteredEmployees:[],search:""},e.sortName=function(){var t,a;"asc"===e.state.sortDirection?(t=e.state.Employees.sort((function(e,t){return e.name.last>t.name.last?1:-1})),a="dsc"):(t=e.state.Employees.sort((function(e,t){return e.name.last<t.name.last?1:-1})),a="asc"),e.setState({Employees:t,sortDirection:a})},e.sortAge=function(){var t,a;"asc"===e.state.sortDirection?(t=e.state.Employees.sort((function(e,t){return e.dob.age>t.dob.age?1:-1})),a="dsc"):(t=e.state.Employees.sort((function(e,t){return e.dob.age<t.dob.age?1:-1})),a="asc"),e.setState({Employees:t,sortDirection:a})},e.handleInputChange=function(t){var a;e.setState({search:t.target.value}),a=e.state.Employees.filter((function(e){return e===e.name.first.value})),e.setState({Employees:a})},e.handleFormSubmit=function(t){t.preventDefault(),v(e.state.search).then((function(t){if("error"===t.data.status)throw new Error(t.data.message);e.setState({randomEmp:t.data.message,error:""})})).catch((function(t){return e.setState({error:t.message})}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v().then((function(t){console.log(t),e.setState({Employees:t.data.results,filteredEmployees:t.data.results})}))}},{key:"render",value:function(){var e={wordBreak:"break-all"};return r.a.createElement("div",null,r.a.createElement(d,null,r.a.createElement(f,null,r.a.createElement(b,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,Employees:this.state.Employees})),r.a.createElement(f,null,r.a.createElement(h,{size:"md-3"},r.a.createElement("h3",null,"Image"),r.a.createElement("hr",null)),r.a.createElement(h,{size:"md-2"},r.a.createElement("h3",null,"Name ",r.a.createElement("button",{onClick:this.sortName},r.a.createElement("i",{className:"fas fa-caret-down"}))),r.a.createElement("hr",null)),r.a.createElement(h,{size:"md-2"},r.a.createElement("h3",null,"Phone"),r.a.createElement("hr",null)),r.a.createElement(h,{size:"md-3"},r.a.createElement("h3",null,"E-mail"),r.a.createElement("hr",null)),r.a.createElement(h,{size:"md-2"},r.a.createElement("h3",null,"Age ",r.a.createElement("button",{onClick:this.sortAge},r.a.createElement("i",{className:"fas fa-caret-down"}))),r.a.createElement("hr",null))),this.state.Employees.map((function(t,a){return r.a.createElement(f,{key:a},r.a.createElement(h,{size:"md-3"},r.a.createElement("img",{src:t.picture.medium,alt:"employee_image"})),r.a.createElement(h,{size:"md-2"},t.name.first," ",t.name.last),r.a.createElement(h,{size:"md-2"},t.phone),r.a.createElement(h,{style:e,size:"md-3"},r.a.createElement(s.b,{to:"/"},t.email)),r.a.createElement(h,{size:"md-2"},t.dob.age))}))))}}]),a}(n.Component);a(60);var N=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-expand-lg"},r.a.createElement("h1",{className:"display-4"},"Employee Directory ",r.a.createElement("i",{className:"fas fa-database"}))),r.a.createElement("h4",null," Welcome! View and sort your list of employees below. ")))};a(61);var S=function(){return r.a.createElement("footer",{className:"footer"},"\xa9 Employees Directory 2020")};a(62);var w=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))};var j=function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(w,null,r.a.createElement(o.a,{exact:!0,path:"/",component:g})),r.a.createElement(S,null)))};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.4cef200b.chunk.js.map