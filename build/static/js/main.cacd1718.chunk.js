(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),i=n.n(s),r=(n(11),n(2)),l=n(0);var o=function(e){var t=e.currentPage,n=e.handlePageChange;return Object(l.jsxs)("ul",{className:"nav nav-tabs",children:[Object(l.jsx)("li",{className:"nav-item Stephanie",children:"Stephanie Anderson"}),Object(l.jsx)("li",{className:"nav-item tabs",children:Object(l.jsx)("a",{href:"#about",onClick:function(){return n("About")},className:"About"===t?"nav-link active":"nav-link",children:"About"})}),Object(l.jsx)("li",{className:"nav-item tabs",children:Object(l.jsx)("a",{href:"#contact",onClick:function(){return n("Contact")},className:"Contact"===t?"nav-link active":"nav-link",children:"Contact"})}),Object(l.jsx)("li",{className:"nav-item tabs",children:Object(l.jsx)("a",{href:"#portfolio",onClick:function(){return n("Portfolio")},className:"Portfolio"===t?"nav-link active":"nav-link",children:"Portfolio"})}),Object(l.jsx)("li",{className:"nav-item tabs",children:Object(l.jsx)("a",{href:"#resume",onClick:function(){return n("Resume")},className:"Resume"===t?"nav-link active":"nav-link",children:"Resume"})})]})},j=n.p+"static/media/avatar-image.e79b3af8.jpg";function b(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"About"}),Object(l.jsx)("img",{src:j,alt:"avatar"}),Object(l.jsx)("p",{children:"Hello, my name is Stephanie Anderson."})]})}var m=n(3),d=n(5);var u=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),o=i[0],j=i[1],b=n.name,u=n.email,h=n.message,O=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));o||(c(Object(d.a)(Object(d.a)({},n),{},Object(m.a)({},e.target.name,e.target.value))),console.log("Handle Form",n))};return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:" Contact Me "}),Object(l.jsx)("div",{className:"contact-fields",children:Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",n)},children:[Object(l.jsxs)("div",{className:"form-name",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:b,onBlur:O})]}),Object(l.jsxs)("div",{className:"form-email",children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:u,onBlur:O})]}),Object(l.jsxs)("div",{className:"form-message",children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:h,onBlur:O})]}),o&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:o})}),Object(l.jsx)("button",{className:"btn btn-dark","data-testid":"button",type:"submit",children:"Submit"})]})})]})};function h(){return Object(l.jsxs)("section",{id:"portfolio",className:"portfolio-content",children:[Object(l.jsx)("h2",{children:"Portfolio"}),Object(l.jsxs)("div",{className:"mainContainer",children:[Object(l.jsx)("div",{className:"smallContainer forcastFilms",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{href:"https://git6548.github.io/ForecastFilms/",children:"Forecast Films Delpoyed Site"}),Object(l.jsx)("a",{href:"https://github.com/git6548/ForecastFilms",children:"Forecast Films Repo"})]})}),Object(l.jsx)("div",{className:"smallContainer gameporium",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{href:"https://morning-lowlands-91275.herokuapp.com/",children:"GamePorium Deployed Site"}),Object(l.jsx)("a",{href:" https://github.com/git6548/Gameporium",children:"Gameporium Repo"})]})}),Object(l.jsx)("div",{className:"smallContainer project3",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{href:"#",children:"Project 3 Deployed Site"}),Object(l.jsx)("a",{href:"#",children:" Project 3 Repo"})]})})]})]})}function O(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Resume"}),Object(l.jsx)("p",{children:"This will be replaced with my resume"})]})}function x(){return Object(l.jsx)("footer",{children:Object(l.jsx)("p",{children:"Thank you for visiting my portfolio!"})})}function f(){var e=Object(a.useState)("Home"),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{currentPage:n,handlePageChange:function(e){return c(e)}}),"About"===n?Object(l.jsx)(b,{}):"Contact"===n?Object(l.jsx)(u,{}):"Portfolio"===n?Object(l.jsx)(h,{}):"Resume"===n?Object(l.jsx)(O,{}):Object(l.jsx)(b,{}),Object(l.jsx)(x,{})]})}var v=function(){return Object(l.jsx)(f,{})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};n(13);i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.cacd1718.chunk.js.map