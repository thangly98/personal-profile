(this["webpackJsonppersonal-profile"]=this["webpackJsonppersonal-profile"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"main":{"name":"Ly Quoc Thang","occupation":"Front-end Developer","description":"Description Infomation (updating...)","image":"avatar.jpg","bio":"Bio Infomation (updating...)","contactmessage":"Glad you\'ve read this far. Currently the function of contacting through the form below is not working, I will improve it soon.","email":"lqthang98@gmail.com","phone":"0333170005","address":{"street":"K66/2 Luong The Vinh","city":"Da Nang","state":"Son Tra","zip":""},"website":"/","resumedownload":"/","social":[{"name":"facebook","url":"http://facebook.com/thanglyy98","className":"fa fa-facebook"},{"name":"instagram","url":"http://instagram.com/thangly98","className":"fa fa-instagram"},{"name":"github","url":"http://github.com/thangly98","className":"fa fa-github"}]},"resume":{"skillmessage":"Here are some of my skills","education":[{"school":"College?","degree":"Bachelor of Information Technology","graduated":"April 2019","description":"Actively participate in school and class activities. graduated with good grades with a score of 2.59/4.0 ."}],"work":[{"company":"ARCHISKETCH JOINT STOCK COMPANY","title":"Junior Front-end","years":"August 2020 - Present","description":"Participate in the company\'s projects. Working with ReactJs, NextJs."},{"company":"MINORI TECHNOLOGY COMPANY LIMITED","title":"Fresher Front-end","years":"July 20019 - April 2020","description":"Participate in the company\'s projects and outsource projects. Use ReactJs to do projects. Work with Git to manage source code."}],"skills":[{"name":"Git","level":"60%"},{"name":"ReactJs","level":"70%"},{"name":"ReactJs","level":"60%"},{"name":"CSS","level":"90%"},{"name":"HTML5","level":"80%"}]},"portfolio":{"projects":[{"title":"Minori","category":"Company introduction website","image":"minori.com.vn_.png","url":"https://minori.com.vn/"}]},"testimonials":{"testimonials":[{"text":"Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.","user":"Kareem Abdul Jabbar"},{"text":"That Tim Baker must be one of the most brilliant developers I\'ve ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!","user":"Steve Wozniak... impersonator"}]}}')},17:function(e,t,s){},19:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(9),i=s.n(c),n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var o=s(2),l=s(3),d=s(5),j=s(4),h=s(8),m=(s(17),s(0)),b=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.occupation,s=this.props.data.description,a=this.props.data.address.city,c=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(m.jsx)("i",{className:e.className})})},e.name)}));return Object(m.jsxs)("header",{id:"home",children:[Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsxs)("h1",{className:"responsive-headline",children:["I'm ",e,"."]}),Object(m.jsxs)("h3",{children:["I'm a ",a," based ",Object(m.jsx)("span",{children:t}),". ",s,"."]}),Object(m.jsx)("hr",{}),Object(m.jsx)("ul",{className:"social",children:c})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),p=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(m.jsx)("i",{className:e.className})})},e.name)}));return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("ul",{className:"social-links",children:e}),Object(m.jsxs)("ul",{className:"copyright",children:[Object(m.jsx)("li",{children:"\xa9 Copyright 2021 Thang Ly"}),Object(m.jsxs)("li",{children:["Design by"," ",Object(m.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",target:"_blank",rel:"noreferrer",children:"Styleshout"})]})]})]}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),u=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t="/personal-profile/images/"+this.props.data.image,s=this.props.data.bio,a=this.props.data.address.street,c=this.props.data.address.city,i=this.props.data.address.state,n=this.props.data.address.zip,r=this.props.data.phone,o=this.props.data.email;return Object(m.jsx)("section",{id:"about",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:t,alt:"Ly Quoc Thang Profile Pic"})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"About Me"}),Object(m.jsx)("p",{children:s}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:"Contact Details"}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsx)("span",{children:e}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:[a,Object(m.jsx)("br",{}),c," ",i,", ",n]}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:r}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:o})]})]}),Object(m.jsx)("div",{className:"columns download",children:Object(m.jsx)("p",{})})]})]})]})})}}]),s}(a.Component),O=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.school}),Object(m.jsxs)("p",{className:"info",children:[e.degree," ",Object(m.jsx)("span",{children:"\u2022"}),Object(m.jsx)("em",{className:"date",children:e.graduated})]}),Object(m.jsx)("p",{children:e.description})]},e.school)})),s=this.props.data.work.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.company}),Object(m.jsxs)("p",{className:"info",children:[e.title,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsx)("em",{className:"date",children:e.years})]}),Object(m.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.skills.map((function(e){var t="bar-expand "+e.name.toLowerCase();return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{style:{width:e.level},className:t}),Object(m.jsx)("em",{children:e.name})]},e.name)}));return Object(m.jsxs)("section",{id:"resume",children:[Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Education"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:Object(m.jsx)("div",{className:"row item",children:Object(m.jsx)("div",{className:"twelve columns",children:t})})})]}),Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Work"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:s})]}),Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Skills"})})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("p",{children:e}),Object(m.jsx)("div",{className:"bars",children:Object(m.jsx)("ul",{className:"skills",children:a})})]})]})]})}}]),s}(a.Component),x=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.address.street,s=this.props.data.address.city,a=this.props.data.address.state,c=this.props.data.address.zip,i=this.props.data.phone,n=this.props.data.email,r=this.props.data.contactmessage;return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsxs)("div",{className:"row section-head",children:[Object(m.jsx)("div",{className:"two columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Get In Touch."})})}),Object(m.jsx)("div",{className:"ten columns",children:Object(m.jsx)("p",{className:"lead",children:r})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"eight columns",children:[Object(m.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(m.jsxs)("fieldset",{children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(m.jsx)("div",{children:Object(m.jsx)("span",{id:"image-loader",children:Object(m.jsx)("img",{alt:"",src:"images/loader.gif"})})})]})}),Object(m.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(m.jsxs)("div",{id:"message-success",children:[Object(m.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(m.jsx)("br",{})]})]}),Object(m.jsx)("aside",{className:"four columns footer-widgets",children:Object(m.jsxs)("div",{className:"widget widget_contact",children:[Object(m.jsx)("h4",{children:"Address and Phone"}),Object(m.jsxs)("p",{className:"address",children:[e,Object(m.jsx)("br",{}),t," ",Object(m.jsx)("br",{}),s,", ",a," ",c,Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:i}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:n})]})]})})]})]})}}]),s}(a.Component),f=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="/personal-profile/images/portfolio/"+e.image;return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsx)("div",{className:"item-wrap",children:Object(m.jsxs)("a",{href:e.url,title:e.title,target:"_blank",rel:"noreferrer",children:[Object(m.jsx)("img",{alt:e.title,src:t}),Object(m.jsx)("div",{className:"overlay",children:Object(m.jsxs)("div",{className:"portfolio-item-meta",children:[Object(m.jsx)("h5",{children:e.title}),Object(m.jsx)("p",{children:e.category})]})}),Object(m.jsx)("div",{className:"link-icon",children:Object(m.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",children:[Object(m.jsx)("h1",{children:"Check Out Some of My Works."}),Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(a.Component),v=s(10),g=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:v},h.a.initialize("UA-110570651-1"),h.a.pageview(window.location.pathname),a}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(b,{data:this.state.resumeData.main}),Object(m.jsx)(u,{data:this.state.resumeData.main}),Object(m.jsx)(O,{data:this.state.resumeData.resume}),Object(m.jsx)(f,{data:this.state.resumeData.portfolio}),Object(m.jsx)(x,{data:this.state.resumeData.main}),Object(m.jsx)(p,{data:this.state.resumeData.main})]})}}]),s}(a.Component);s(19);i.a.render(Object(m.jsx)(g,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/personal-profile",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/personal-profile","/service-worker.js");n?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):r(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):r(e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.9eadf817.chunk.js.map