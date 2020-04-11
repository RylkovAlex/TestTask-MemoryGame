(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{29:function(e,t,a){e.exports=a(46)},38:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n,r,l=a(0),s=a.n(l),c=a(13),i=a.n(c),u=a(3),o=a(7),m=a(2),d=a(1),E=a(5);!function(e){e.INCREMENT_ROUND="INCREMENT_STEP",e.INCREMENT_MISTAKES="INCREMENT_MISTAKES",e.RESET_GAME="RESET_GAME",e.TICK_TIMER="TICK_TIMER",e.FINISH_GAME="FINISH_GAME"}(n||(n={})),function(e){e.SET_USER="SET_USER",e.PUSH_NEW_RESULT="PUSH_NEW_RESULT",e.LOG_OUT="LOG_OUT"}(r||(r={}));var g,h={name:"Guest",results:[],isLogged:!1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SET_USER:return t.payload;case r.PUSH_NEW_RESULT:var a=[].concat(Object(E.a)(e.results),[t.payload]);return Object(d.a)({},e,{results:a});case r.LOG_OUT:return h}return e},p={round:0,mistakes:0,timer:0,isFinished:!1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.INCREMENT_ROUND:return Object.assign({},e,{round:e.round+t.payload});case n.INCREMENT_MISTAKES:return Object(d.a)({},e,{mistakes:e.mistakes+t.payload});case n.FINISH_GAME:return Object(d.a)({},e,{isFinished:!0});case n.RESET_GAME:return Object.assign({},p);case n.TICK_TIMER:return Object.assign({},e,{timer:e.timer+1})}return e},v=Object(o.c)({user:f,game:b}),N=(a(38),a(8)),y=a(15),O=a(18),k=a(17),S=a(12),T="MEMORY-GAME",I="https://rylkovalex.github.io/CDG-memory-game/",_=["angular","babel","react","npm","nodejs","redux","vue","ts"],j={width:4,height:4},R=new(function(){function e(t){if(Object(k.a)(this,e),this.storage=void 0,this.storage=t,!localStorage.getItem(t)){var a=[{name:"Aleksandr Rylkov",results:[{date:Date.now(),mistakes:0,time:5}],isLogged:!1}];localStorage.setItem(t,JSON.stringify(a))}}return Object(S.a)(e,[{key:"getUser",value:function(e){return JSON.parse(localStorage.getItem(this.storage)).find((function(t){return t.name===e}))}},{key:"getResults",value:function(){var e=this.getUsers(),t=[];return e.forEach((function(e){e.results.forEach((function(a){t.push({name:e.name,date:a.date,mistakes:a.mistakes,time:a.time})}))})),t}},{key:"getCurrentUser",value:function(e){return JSON.parse(localStorage.getItem(this.storage)).find((function(e){return e.isLogged}))}},{key:"addUser",value:function(e){var t=[].concat(Object(E.a)(this.getUsers()),[e]);this.setUsers(t)}},{key:"getUsers",value:function(){return JSON.parse(localStorage.getItem(this.storage))}},{key:"setUsers",value:function(e){localStorage.setItem(this.storage,JSON.stringify(e))}},{key:"logIn",value:function(e){var t=this.getUsers(),a=t.findIndex((function(t){return t.name===e.name}));t[a].isLogged=!0,this.setUsers(t)}},{key:"saveNewResult",value:function(e,t){var a=this.getUsers(),n=a.findIndex((function(t){return t.name===e.name}));a[n].results=[].concat(Object(E.a)(a[n].results),[t]),this.setUsers(a)}},{key:"logOut",value:function(){var e=this.getUsers().map((function(e){return Object(d.a)({},e,{isLogged:!1})}));this.setUsers(e)}},{key:"getLoggedUser",value:function(){return this.getUsers().find((function(e){return e.isLogged}))}}]),e}())(T),U=function(){return{type:n.INCREMENT_ROUND,payload:1}},M=function(){return{type:n.INCREMENT_MISTAKES,payload:1}},w=function(){return{type:n.TICK_TIMER,payload:1}},C=function(){return{type:n.FINISH_GAME}},L=function(){return{type:n.RESET_GAME}},G=function(e,t){return R.saveNewResult(e,t),{type:r.PUSH_NEW_RESULT,payload:t}},D=function(e){return{type:r.SET_USER,payload:e}},x=function(e){if(!R.getUsers().length){var t={name:e,results:[],isLogged:!0};return R.setUsers([t]),{type:r.SET_USER,payload:t}}var a=R.getUser(e);if(a)return a.isLogged=!0,R.logIn(a),{type:r.SET_USER,payload:a};var n={name:e,results:[],isLogged:!0};return R.addUser(n),{type:r.SET_USER,payload:n}},A=function(){return R.logOut(),{type:r.LOG_OUT}},F=Object(m.b)(null,(function(e){return{logIn:function(t){return e(x(t))}}}))((function(e){var t=e.logIn,a=Object(l.useState)({name:""}),n=Object(O.a)(a,2),r=n[0],c=n[1];return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s10"},s.a.createElement("h1",null,"Welcome to Game"),s.a.createElement("div",{className:"card blue darken-1"},s.a.createElement("div",{className:"card-content white-text",style:{paddingBottom:0}},s.a.createElement("span",{className:"card-title",style:{marginBottom:25}},"Remind me your name, please:"),s.a.createElement("div",null,s.a.createElement("div",{className:"input-field"},s.a.createElement("input",{className:"yellow-input",value:r.name,id:"name",type:"text",name:"name",minLength:3,maxLength:20,onChange:function(e){c(Object(d.a)({},r,Object(y.a)({},e.target.name,e.target.value)))}}),s.a.createElement("label",{htmlFor:"name"},"User Name:")))),s.a.createElement("div",{className:"card-action"},s.a.createElement("button",{className:"btn yellow darken-4",style:{marginRight:10},disabled:!r.name.trim(),onClick:function(e){var a=r.name.trim();t(a)}},"Log In!")))))})),H=Object(m.b)((function(e,t){return Object(d.a)({},t,{game:e.game,user:e.user})}),(function(e){return{logOut:function(){return e(A())}}}))((function(e){var t=e.logOut,a=Object(N.g)();return s.a.createElement("nav",{className:"nav-extended blue darken-1"},s.a.createElement("div",{className:"container nav-wrapper"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(u.c,{to:"/",className:"brand-logo left"},"Memory Game")),s.a.createElement("li",null,s.a.createElement(u.c,{to:"/",className:"brand-logo right",onClick:function(e){e.preventDefault(),t(),a.push("/")}},s.a.createElement("i",{className:"large material-icons"},"exit_to_app"))))),s.a.createElement("div",{className:"container nav-content blue darken-1"},s.a.createElement("ul",{className:"tabs tabs-transparent"},s.a.createElement("li",{className:"tab"},s.a.createElement(u.c,{to:"/"},"Game")),s.a.createElement("li",{className:"tab"},s.a.createElement(u.c,{to:"/results"},"Results")))))})),K=function(){return s.a.createElement("footer",{className:"page-footer blue darken-1"},s.a.createElement("footer",{className:"footer-copyright blue darken-1"},s.a.createElement("div",{className:"container"},"\xa9 ".concat((new Date).getFullYear()," all rights reserved"),s.a.createElement("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/RylkovAlex/"},"Made by Alexander Rylkov"))))},W=function(e){var t=e.children;return s.a.createElement(s.a.Fragment,null,s.a.createElement(H,null),s.a.createElement("div",{className:"container main"},t),s.a.createElement(K,null))},J=(a(40),["The gameplay is the sequence of rounds. In each round you should select 2\n  tiles.",'If you select 2 tiles with different images then they will flip to\n  "closed" state, and your mistakes will increase by 1.',"If you select 2 tiles with the same images, they will disappear, and\n  you proceed to the next round.","The game is considered over when all the tiles have disappeared."]),P=Object(m.b)((function(e,t){return Object(d.a)({},t,{user:e.user})}),null)((function(e){var t=e.user;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",{className:"center-align welcome"},"Hello, ",t.name,"!",s.a.createElement("br",null),"Are you ready to play?"),s.a.createElement("ul",{className:"collection with-header rules-list"},s.a.createElement("li",{className:"collection-header"},s.a.createElement("h4",{className:"center-align"},"Game Rules:")),J.map((function(e){return s.a.createElement("li",{className:"collection-item",key:e},s.a.createElement("div",{className:"secondary-content"},s.a.createElement("i",{className:"material-icons"},"mood")),e)}))),s.a.createElement(u.b,{to:"/play",href:"#!",className:"btn-large blue darken-1 pulse hoverable"},s.a.createElement("i",{className:"material-icons Large left"},"play_arrow"),"START GAME"))}));a(41);!function(e){e.Date="date",e.Mistakes="mistakes",e.TimeSpend="time",e.Default="default"}(g||(g={}));var B=function(){var e,t=Object(l.useState)("default"),a=Object(O.a)(t,2),n=a[0],r=a[1];switch(n){case g.Date:e=R.getResults().sort((function(e,t){return t.date-e.date}));break;case g.Mistakes:e=R.getResults().sort((function(e,t){return t.mistakes-e.mistakes}));break;case g.TimeSpend:e=R.getResults().sort((function(e,t){return t.time-e.time}));break;default:e=R.getResults().sort((function(e,t){return t.date-e.date}))}return s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",{className:"center-align results"},"Here you can see best results"),s.a.createElement("table",{className:"responsive-table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"User Name"),s.a.createElement("th",null,s.a.createElement("p",{className:"btn blue lighten-1 ".concat(n===g.Default||n===g.Date?"disabled":""),onClick:function(){return r(g.Date)}},"Game Date")),s.a.createElement("th",null,s.a.createElement("p",{className:"btn blue lighten-1 ".concat(n===g.TimeSpend?"disabled":""),onClick:function(){return r(g.TimeSpend)}},"Time spend")),s.a.createElement("th",null,s.a.createElement("p",{className:"btn blue lighten-1 ".concat(n===g.Mistakes?"disabled":""),onClick:function(){return r(g.Mistakes)}},"Mistakes")))),s.a.createElement("tbody",null,e.map((function(e){return function(e){return s.a.createElement("tr",{key:e.date},s.a.createElement("td",null,e.name),s.a.createElement("td",null,new Date(e.date).toLocaleString()),s.a.createElement("td",null,"".concat(e.time," sec")),s.a.createElement("td",null,e.mistakes))}(e)})))))},X=a(27),Y=a(28),q=(a(42),function(e){for(var t=Object(E.a)(e),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=[t[n],t[a]];t[a]=r[0],t[n]=r[1]}return t}),z=(a(43),{width:"".concat(Math.floor(100/j.width),"%"),height:"".concat(Math.floor(100/j.height),"%")}),V=function(e){var t=e.data,a=e.handleClick,n=t.isDone,r=t.isOpened,l=["game-card"];return n&&l.push("done"),r&&l.push("opened"),s.a.createElement("div",{className:l.join(" "),onClick:function(){return a(t)},style:z},r?s.a.createElement("div",{className:"back z-depth-5"},s.a.createElement("img",{src:"".concat(I,"/").concat(t.name,".png"),alt:t.name})):s.a.createElement("div",{className:"front z-depth-5"},s.a.createElement("img",{src:"".concat(I,"/question.png"),alt:t.name})))},$=function(e){Object(Y.a)(a,e);var t=Object(X.a)(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e)).gameTimerId=void 0,n.gameStateTimers=void 0,n.state={cards:q(a.createCards(_)),disabled:!1},n.gameTimerId=null,n.gameStateTimers=[],n}return Object(S.a)(a,null,[{key:"createCards",value:function(e){var t=0,a=function(e){return{isOpened:!1,isDone:!1,id:t++,name:e}};return[].concat(Object(E.a)(e.map(a)),Object(E.a)(e.map(a)))}}]),Object(S.a)(a,[{key:"componentDidMount",value:function(){this.props.resetGame(),this.gameTimerId=setInterval(this.props.tickTimer,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.gameTimerId),this.gameStateTimers.forEach((function(e){clearTimeout(e)}))}},{key:"componentDidUpdate",value:function(){if(this.props.game.round===this.state.cards.length/2){var e={date:Date.now(),mistakes:this.props.game.mistakes,time:this.props.game.timer};this.props.saveResult(this.props.user,e),this.props.finishGame(),this.props.history.push("win")}}},{key:"handleClick",value:function(e){this.state.disabled||this.setState((function(t){var a=Object(E.a)(t.cards);e.isOpened=!0;var n=a.findIndex((function(t){return t.id===e.id}));return a[n]=e,Object(d.a)({},t,{disabled:!0,cards:a})}),this.check)}},{key:"check",value:function(){var e=this,t=this.state.cards.filter((function(e){return e.isOpened&&!e.isDone}));if(2===t.length){var a=Object(d.a)({},t[0]),n=Object(d.a)({},t[1]),r=Object(E.a)(this.state.cards),l=r.findIndex((function(e){return e.id===a.id})),s=r.findIndex((function(e){return e.id===n.id}));a.name===n.name?(a.isDone=!0,n.isDone=!0,this.props.incrementRound(),this.gameStateTimers.push(setTimeout((function(){return e.setState((function(e){return r[l]=a,r[s]=n,Object(d.a)({},e,{cards:r,disabled:!1})}))}),800))):(a.isOpened=!1,n.isOpened=!1,this.props.incrementMistakes(),this.gameStateTimers.push(setTimeout((function(){return e.setState((function(e){return r[l]=a,r[s]=n,Object(d.a)({},e,{cards:r,disabled:!1})}))}),800)))}else this.setState({disabled:!1})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"game-board"},this.state.cards.map((function(t){return s.a.createElement(V,{key:t.id,data:t,handleClick:e.handleClick.bind(e)})})))}}]),a}(s.a.Component),Q=Object(N.h)(Object(m.b)((function(e){return{game:e.game,user:e.user}}),(function(e){return{incrementMistakes:function(){return e(M())},incrementRound:function(){return e(U())},tickTimer:function(){return e(w())},finishGame:function(){return e(C())},resetGame:function(){return e(L())},saveResult:function(t,a){return e(G(t,a))}}}))($)),Z=(a(44),a(45),Object(m.b)((function(e,t){return Object(d.a)({},t,{game:e.game})}),null)((function(e){var t=e.game;return s.a.createElement("div",{className:"game-info"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s6 mistakes"},s.a.createElement("p",null,"Mistakes:"),s.a.createElement("p",null,t.mistakes)),s.a.createElement("div",{className:"col s6 mistakes"},s.a.createElement("p",null,"Game Time:"),s.a.createElement("p",null,"".concat(t.timer," sec")))))}))),ee=function(){return s.a.createElement("div",{className:"game-screen"},s.a.createElement(Z,null),s.a.createElement(Q,null))},te=Object(m.b)((function(e,t){return Object(d.a)({},t,{user:e.user})}),null)((function(e){var t=e.user;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{className:"center-align welcome"},"Congratulations, ",t.name,"!",s.a.createElement("br",null),"You won the game!"),s.a.createElement("h2",null,"Your Results:"),s.a.createElement("h3",null,"Mistakes: ".concat(t.results[t.results.length-1].mistakes)),s.a.createElement("h3",null,"Game Time: ".concat(t.results[t.results.length-1].time)),s.a.createElement("hr",null),s.a.createElement(u.b,{to:"/results",className:"btn-large blue darken-1 hoverable"},"SEE ALL RESULTS"))})),ae=Object(m.b)((function(e,t){return Object(d.a)({},t,{user:e.user,isGameFinished:e.game.isFinished})}),(function(e){return{setUser:function(t){return e(D(t))}}}))((function(e){var t=e.setUser,a=e.isGameFinished;Object(l.useEffect)((function(){var e=R.getLoggedUser();e&&t(e)}),[t]);var n=function(e,t){return e?s.a.createElement(N.d,null,s.a.createElement(N.b,{path:"/",exact:!0},s.a.createElement(W,null,s.a.createElement(P,null))),s.a.createElement(N.b,{path:"/play",exact:!0},s.a.createElement(W,null,s.a.createElement(ee,null))),t&&s.a.createElement(N.b,{path:"/win",exact:!0},s.a.createElement(W,null,s.a.createElement(te,null))),s.a.createElement(N.b,{path:"/results",exact:!0},s.a.createElement(W,null,s.a.createElement(B,null))),s.a.createElement(N.a,{to:"/"})):s.a.createElement(N.d,null,s.a.createElement(N.b,{path:"/",exact:!0},s.a.createElement("div",{className:"container main"},s.a.createElement(F,null))),s.a.createElement(N.a,{to:"/"}))}(!!R.getLoggedUser(),a);return s.a.createElement(s.a.Fragment,null,n)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):o.d)(Object(o.a)()),re=Object(o.e)(v,ne);i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(m.a,{store:re},s.a.createElement(u.a,null,s.a.createElement(ae,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.468c4fb5.chunk.js.map