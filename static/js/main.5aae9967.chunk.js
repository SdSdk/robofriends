(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{128:function(e,t,n){},428:function(e,t,n){},429:function(e,t,n){"use strict";n.r(t);var r=n(5),s=n(17),c=n.n(s),i=(n(128),n(50)),o=n(51),a=n(53),h=n(52),l=(n(129),n(426),n(1)),u=function(e){var t=e.name,n=e.email,r=e.id;return Object(l.jsxs)("div",{className:"tc bg-light-green dib br3 pd3 ma2 grow shadow-5 bw7",children:[Object(l.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:t}),Object(l.jsx)("p",{children:n})]})]})},b=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsx)(u,{id:e.id,name:e.name,email:e.username},e.id)}))})},d=function(e){var t=e.searchfun;return Object(l.jsx)("div",{className:"pa3",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},j=(n(428),function(e){return Object(l.jsx)("div",{style:{overflow:"scroll",height:"800px",border:"5px solid green"},children:e.children})}),f=function(e){Object(a.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasErrors?Object(l.jsx)("h1",{children:"OOPS......."}):this.props.children}}]),n}(r.Component),O=function(e){Object(a.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).searchingg=function(t){e.setState({searchfield:t.target.value}),console.log(t.target.value)},e.state={robotss:[],searchfield:""},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.robotss.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robotss.length?Object(l.jsx)("h1",{children:"Loading"}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(l.jsx)(d,{searchfun:this.searchingg}),Object(l.jsx)(j,{children:Object(l.jsx)(f,{children:Object(l.jsx)(b,{robots:t})})})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robotss:t})}))}}]),n}(r.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,430)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),c(e),i(e)}))};c.a.render(Object(l.jsx)("div",{children:Object(l.jsx)(O,{})}),document.getElementById("root")),g()}},[[429,1,2]]]);
//# sourceMappingURL=main.5aae9967.chunk.js.map