(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(71)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(31),i=a.n(s),l=(a(41),a(2)),c=a(3),r=a(5),m=a(4),d=a(13),p=a(6),h=(a(42),a(43),a(32)),u=Object(n.createContext)(),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={landing:!0,content:{backgroundColor:"#EDFD5D"},label:"web developer"},a.toggleLanding=function(){a.setState({landing:!a.state.landing})},a.toggleLandingH3=function(){"web developer"===a.state.label?a.setState({label:"work",landingH3:{color:"#EDFD5D"}}):a.setState({label:"web developer",landingH3:{color:"white"}})},a.handleLandingTitle=function(e,t){console.log("handle from context"),a.setState({label:e,landingH3:{color:t}})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(u.Provider,{value:Object(h.a)({},this.state,{toggleLanding:this.toggleLanding,handleLabel:this.handleLabel,toggleLandingH3:this.toggleLandingH3,handleLandingTitle:this.handleLandingTitle})},this.props.children)}}]),t}(o.a.Component),v=a(11);a(44);var b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"nav",style:this.props.nav},o.a.createElement("div",{className:"work-tab",id:"#EDFD5D",label:"work"},o.a.createElement(v.b,{to:"/work"},o.a.createElement("div",{className:"nav-link"}))),o.a.createElement("div",{className:"about-tab",id:"#70DBFB",label:"about"},o.a.createElement(v.b,{to:"/about"},o.a.createElement("div",{className:"nav-link"}))),o.a.createElement("div",{className:"contact-tab",id:"#FF7DEE",label:"contact"},o.a.createElement(v.b,{to:"/contact"},o.a.createElement("div",{className:"nav-link"}))))}}]),t}(o.a.Component);b.contextType=u;var f=b;console.log("Projects loaded");var w=[{id:"1",data:{name:"E and E Automotive Services",description:"An information website for a local business that needed a web presence. I incorporated the Google Maps Embeded API and the Yelp Reviews API to dynamically display the most current Yelp user reviews.",technologies:"HTML, CSS, Javascript, Node.js, Express",images:["https://jasonrowland-portfolio-site-images.s3.amazonaws.com/eande-1.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/eande-2.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/eande-3.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/eande-4.png"],appLink:"https://eandeautomotiveservices.herokuapp.com/",githubLink:"https://github.com/jasonrowland86/eandeautomotiveservices"}},{id:"2",data:{name:"Whole Sky Healing Arts",description:"A personal business site.",technologies:"HTML, CSS, Javascript, React, Node.js, Express",images:["https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app-1.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app-2.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app-3.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app-4.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app-5.png"],appLink:"http://wholeskyhealingarts.com/",githubLink:"https://github.com/jasonrowland86/WholeSky-React-Express"}},{id:"3",data:{name:"UFC Fight Pick App",description:"A web app that uses the Express MVC and the isomorphic-fetch API to let users search for and compare two fighters. A user can make and save their fight picks for an up coming event.",technologies:"HTML, CSS, Javascript, Node.js, Express, PostgreSQL",images:["https://jasonrowland-portfolio-site-images.s3.amazonaws.com/fight-pick-app.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/fight-pick-app-1.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/fight-pick-app-2.png"],appLink:"https://fightpickapp.herokuapp.com/",githubLink:"https://github.com/jasonrowland86/Project-2-App"}},{id:"4",data:{name:"Aquarium App",description:"A Ruby on Rails CRUD web app that uses CSS animations to make an aquarium of fish swim around.",technologies:"HTML, CSS, Javascript, Ruby",images:["https://jasonrowland-portfolio-site-images.s3.amazonaws.com/aquarium-app-1.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/aquarium-app-2.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/aquarium-app-3.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/aquarium-app-4.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/aquarium-app-5.png"],appLink:"https://aquarium-app.herokuapp.com/",githubLink:"https://github.com/jasonrowland86/Aquarium"}},{id:"5",data:{name:"Okurio Project Managment",description:"A collaborative project I worked on to build a project management web app. Built with React and Express, an admin can create and manage a project by assigning tasks to project memebers.",technologies:"HTML, CSS, Javascript, React, Node.js, Express, PostgreSQL",images:["https://jasonrowland-portfolio-site-images.s3.amazonaws.com/okurio-app.png"],appLink:"",githubLink:"https://github.com/RajisteB/Occurio"}},{id:"6",data:{name:"Simon",description:"The classic game Simon. Made with Javascript.",technologies:"HTML, CSS, Javascript",images:["https://jasonrowland-portfolio-site-images.s3.amazonaws.com/simon-1.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/simon-2.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/simon-3.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/simon-4.png"],appLink:"https://polar-coast-40517.herokuapp.com/index.html",githubLink:"https://github.com/jasonrowland86/simon"}}];a(49);var E;E=w.map(function(e){return e.data.name});var k=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleLanding",value:function(){var e=this;this.context.landing?(this.context.toggleLanding(),this.setState({landingH1:{fontSize:"8vw"},landingH3:{fontSize:"5vw"}}),setTimeout(function(){e.setState({nav:{height:"1.3em",display:"flex",flexDirection:"row"},landingRight:{display:"block"},landingHeight:{height:"auto"}})},400)):(this.context.toggleLanding(),this.context.toggleLandingH3(),this.setState({landingRight:{display:"none"},landingHeight:{height:"auto"},landingH1:{fontSize:"23vw"},landingH3:{fontSize:"10vw"}}))}},{key:"handleArrow",value:function(){for(var e,t=0;t<E.length;t++)this.context.label===E[t]&&("Simon"===E[t]?(e=E[0],console.log("if "+e)):(e=E[t+1],console.log("else "+e)));return"web developer"!==this.context.label&&"work"!==this.context.label&&"about"!==this.context.label&&"contact"!==this.context.label?(console.log(e),o.a.createElement("div",{className:"landing-bottom-right",style:this.state.arrow},o.a.createElement("h2",{id:"#EDFD5D",label:e},o.a.createElement(v.b,{to:"/work/"+e.replace(/\s/g,"").toLowerCase()},">")))):o.a.createElement("div",{className:"landing-bottom-right"})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"landing",style:this.state.landingHeight},o.a.createElement("div",{className:"landing-top"},o.a.createElement("div",{className:"landing-left",label:"web developer",onClick:function(){e.handleLanding(),e.props.toggleLanding()}},o.a.createElement("h1",{style:this.state.landingH1},"jason"),o.a.createElement("h1",{style:this.state.landingH1},"rowland/")),o.a.createElement("div",{className:"landing-right",style:this.state.landingRight},o.a.createElement("div",null,o.a.createElement(f,{nav:this.state.nav})))),o.a.createElement("div",{className:"landing-bottom"},o.a.createElement("div",{className:"landing-bottom-left"},o.a.createElement("div",{style:this.context.landingH3},o.a.createElement("h3",{style:this.state.landingH3},this.context.label))),this.handleArrow()))}}]),t}(o.a.Component);k.contextType=u;var j=k;a(50);var y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={workSection:{opacity:0,transition:"all .3s ease-in"},label:"work",color:"#EDFD5D",prvwImg:{opacity:0}},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.context.handleLandingTitle(this.state.label,this.state.color),this.fadeIn()}},{key:"fadeIn",value:function(){var e=this;setTimeout(function(){e.setState({workSection:{opacity:1,transition:"all .3s ease-in",display:"flex",flexWrap:"wrap"}})},150)}},{key:"handleImageLoaded",value:function(){this.setState({prvwImg:{opacity:1}})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"work-section"},o.a.createElement("div",{style:this.state.workSection},w.map(function(t){return o.a.createElement("div",{key:t.data.name,className:"project-preview",id:"#EDFD5D",label:t.data.name},o.a.createElement(v.b,{to:"/work/"+t.data.name.replace(/\s/g,"").toLowerCase()},o.a.createElement("div",{className:"overlay",id:"#EDFD5D",label:t.data.name},o.a.createElement("div",{className:"project-preview-title",id:"#EDFD5D",label:t.data.name},o.a.createElement("h1",{id:"#EDFD5D",label:t.data.name},t.data.name),o.a.createElement("h2",{id:"#EDFD5D",label:t.data.name,onClick:e.context.handleLabel,className:"overlay-h2"},t.data.technologies)),o.a.createElement("div",{style:e.state.prvwImg,className:"project-preview-image",id:"#EDFD5D",label:t.data.name},o.a.createElement("img",{id:"#EDFD5D",label:t.data.name,className:"overlay-img",src:t.data.images[0],alt:"",onLoad:e.handleImageLoaded.bind(e)}))),o.a.createElement("div",{className:"under"},o.a.createElement("div",{className:"project-preview-title"},o.a.createElement("h1",null,t.data.name),o.a.createElement("h2",null,t.data.technologies)),o.a.createElement("div",{className:"project-preview-image"},o.a.createElement("img",{src:t.data.images[0],alt:""})))))})))}}]),t}(o.a.Component);y.contextType=u;var N=y;a(51);var S=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={aboutSection:{opacity:0,transition:"all .3s ease-in"},label:"about",color:"#70DBFB"},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.context.handleLandingTitle(this.state.label,this.state.color),this.fadeIn()}},{key:"fadeIn",value:function(){var e=this;setTimeout(function(){e.setState({aboutSection:{opacity:1,paddingBottom:"3em",transition:"all .3s ease-in"}})},150)}},{key:"render",value:function(){return o.a.createElement("div",{className:"about-section"},o.a.createElement("div",{className:"about-section-div",style:this.state.aboutSection},o.a.createElement("div",{className:"about-text"},o.a.createElement("p",null,"Born and raised in Houston Texas. I moved to New York City in 2009 where I was a bike messenger and kettlebell trainer before I found web development. I have a proclivity for efficiency and a love for design that create a natural passion for front-end development and user experience."),o.a.createElement("div",{className:"project-skills"},o.a.createElement("h2",null,"skill, skill, skill, skill, skill,")),o.a.createElement("div",{className:"project-links"},o.a.createElement("a",{href:"https://www.linkedin.com/in/jason-rowland86/",target:"blank"},o.a.createElement("div",null,"LinkedIn")),o.a.createElement("a",{href:"https://github.com/jasonrowland86",target:"blank"},o.a.createElement("div",null,"GitHub")))),o.a.createElement("div",{className:"about-image"},o.a.createElement("img",{className:"profile-img",src:"profile-pic.jpg",alt:"Profile"}))))}}]),t}(o.a.Component);S.contextType=u;var L=S,D=a(16),x=a(35),O=a.n(x);a(69);var C=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={contactSection:{opacity:0,transition:"all .3s ease-in"},label:"contact",color:"#FF7DEE",response:".",showResponse:{opacity:0},submitButton:!0},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.context.handleLandingTitle(this.state.label,this.state.color),this.fadeIn()}},{key:"fadeIn",value:function(){var e=this;setTimeout(function(){e.setState({contactSection:{opacity:1,transition:"all .3s ease-in",display:"flex",flexDirection:"column",flex:1},firstName:"",lastName:"",email:"",message:""})},150)}},{key:"handleChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"emailIsValid",value:function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}},{key:"handleSubmit",value:function(e){var t=this;if(console.log("handle submit"),e.preventDefault(),""!==this.state.firstName&&""!==this.state.email&&""!==this.state.message)if(this.emailIsValid(this.state.email))this.setState({submitButton:!1}),O()({method:"POST",url:"/",data:{firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,messsage:this.state.message}}).then(function(e){console.log(e),200===e.status?(t.clearForm(),t.showResponse(e)):(t.setState({submit:!0}),t.showResponse(e))}).catch(function(e){t.clearForm(),t.showResponse(e)});else{this.showResponse({data:{message:"Email format invalid"}})}else{this.showResponse({data:{message:"Missing field"}})}}},{key:"showResponse",value:function(e){var t=this;this.setState({response:e.data.message,showResponse:{opacity:1}}),setTimeout(function(){t.removeResponse()},3e3)}},{key:"removeResponse",value:function(){this.setState({showResponse:{opacity:0}})}},{key:"clearForm",value:function(){this.setState({firstName:"",lastName:"",email:"",message:"",submitButton:!0});var e=document.querySelectorAll(".input");console.log(e);for(var t=0;t<e.length;t++)e[t].value=""}},{key:"handleSubmitButton",value:function(){return this.state.submitButton?o.a.createElement("input",{className:"submit",type:"submit",value:"send"}):o.a.createElement("div",{className:"submit sub"},o.a.createElement("div",{className:"submit-loading"},o.a.createElement("div",null,"."),o.a.createElement("div",null,"."),o.a.createElement("div",null,".")))}},{key:"render",value:function(){return o.a.createElement("div",{className:"contact-section"},o.a.createElement("div",{style:this.state.contactSection},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-section"},o.a.createElement("div",{className:"form-section-inputs"},o.a.createElement("div",{className:"response",style:this.state.showResponse},this.state.response),o.a.createElement("label",null,"first name*"),o.a.createElement("input",{className:"input",type:"text",onChange:this.handleChange,name:"firstName"}),o.a.createElement("label",null,"last name"),o.a.createElement("input",{className:"input",type:"text",onChange:this.handleChange,name:"lastName"}),o.a.createElement("label",null,"email*"),o.a.createElement("input",{className:"input",type:"text",onChange:this.handleChange,name:"email"}),o.a.createElement("label",null,"message*"),o.a.createElement("textarea",{className:"input",onChange:this.handleChange,name:"message",ows:"8",cols:"80"})),o.a.createElement("div",{className:"form-section-submit"},this.handleSubmitButton())))))}}]),t}(o.a.Component);C.contextType=u;var I=C;a(70);var T=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={projectSection:{opacity:0,transition:"all .3s ease-in"},label:"work",color:"#EDFD5D",prvwImg:{opacity:0}},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.context.handleLandingTitle(this.props.project.data.name,this.state.color),window.scrollTo({top:0,left:0,behavior:"smooth"}),this.fadeIn()}},{key:"fadeIn",value:function(){var e=this;setTimeout(function(){e.setState({projectSection:{opacity:1,transition:"all .3s ease-in"}})},250)}},{key:"handleImageLoaded",value:function(){this.setState({prvwImg:{opacity:1}})}},{key:"render",value:function(){var e=this,t=w.filter(function(t){return t.data.name===e.props.project.data.name});console.log(t[0]);var a=0,n=t[0].data.images.map(function(t){return o.a.createElement("img",{style:e.state.prvwImg,key:a++,className:"project-img",src:t,alt:"",onLoad:e.handleImageLoaded.bind(e)})});return o.a.createElement("div",{className:"project-section"},o.a.createElement("div",{style:this.state.projectSection},o.a.createElement("div",{className:"project"},o.a.createElement("div",{className:"project-info"},o.a.createElement("div",{className:"project-description"},o.a.createElement("p",null,t[0].data.description)),o.a.createElement("div",{className:"project-skills"},o.a.createElement("h2",null,t[0].data.technologies)),o.a.createElement("div",{className:"project-links"},o.a.createElement("a",{href:t[0].data.appLink,target:"blank"},o.a.createElement("div",null,"View App")),o.a.createElement("a",{href:t[0].data.githubLink,target:"blank"},o.a.createElement("div",null,"View on GitHub")))),o.a.createElement("div",{className:"project-images"},n))))}}]),t}(o.a.Component);T.contextType=u;var H=T,z=a(12),R=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={landing:!1,subtitle:"web developer"},e.toggleLanding=e.toggleLanding.bind(Object(d.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){"/"===window.location.pathname?this.setState({subtitle:"web developer"}):this.setState({subtitle:window.location.pathname.slice(1)})}},{key:"toggleLanding",value:function(){this.setState({landing:!this.state.landing})}},{key:"handleContent",value:function(){return this.state.landing?o.a.createElement("div",{className:"content"},o.a.createElement(z.c,null,o.a.createElement(z.a,{path:"/",exact:!0,component:N}),o.a.createElement(z.a,{path:"/work",exact:!0,component:N}),o.a.createElement(z.a,{path:"/about",exact:!0,component:L}),o.a.createElement(z.a,{path:"/contact",exact:!0,component:I}),w.map(function(e){return o.a.createElement(z.a,{key:e.data.name,path:"/work/"+e.data.name.replace(/\s/g,"").toLowerCase(),render:function(t){return o.a.createElement(H,{project:e})}})}),o.a.createElement(z.a,{component:N}))):o.a.createElement("div",null)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v.a,null,o.a.createElement(g,null,o.a.createElement(j,{toggleLanding:this.toggleLanding}),this.handleContent())))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.73450224.chunk.js.map