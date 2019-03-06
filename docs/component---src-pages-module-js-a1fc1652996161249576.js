(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{170:function(e,t,n){"use strict";n.r(t);n(82),n(88),n(89),n(226);var r=n(36),i=n.n(r),o=n(6),a=n.n(o),s=n(0),d=n.n(s),l=n(227),u=n.n(l),c=n(174),h=n(177),f=n(205),p=n.n(f),m=n(253),g=n.n(m),b=n(256),w=n.n(b),x=(n(166),n(167),n(180),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return d.a.createElement("video",{key:this.props.name,width:"320",height:"240",controls:!0,controlsList:"nodownload"},d.a.createElement("source",{src:this.props.name,type:"video/mp4"}),"Your browser does not support the video tag.")},t}(d.a.Component)),v=n(171),k=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e="audio/"+this.props.type;return d.a.createElement("audio",{key:this.props.name,width:"320",height:"240",controls:!0,controlsList:"nodownload"},d.a.createElement("source",{src:Object(v.withPrefix)(this.props.name),type:e}),"Your browser does not support the video tag.")},t}(d.a.Component),y=(n(35),n(259)),C=n(172),E=C.b.button.withConfig({displayName:"button__ButtonComponent",componentId:"sc-1f6rgwj-0"})(["background-color:",";min-height:2rem;padding:10px 15px;border:none;text-transform:uppercase;border-radius:.25rem;font-size:0.8rem;outline:none;letter-spacing:1.3px;color:",";box-shadow:5px 5px 25px 0 rgba(46,61,73,.4);cursor:pointer;&:hover{box-shadow:0 0 4px 0 rgba(17,22,26,.16),0 2px 4px 0 rgba(17,22,26,.08),0 4px 8px 0 rgba(17,22,26,.08);}"],function(e){return e.theme.primaryColor},function(e){return e.theme.darkColorLight}),A=n(188),S=n.n(A),q=C.b.div.withConfig({displayName:"singlechoice__Quiz",componentId:"p4o8xv-0"})(["width:100%;margin:4rem 0;p{font-weight:bold;margin-bottom:10px;}ul{list-style:none;margin:0;padding:10px;border:1px solid #e6e6e6;margin-bottom:15px;}"]),L=C.b.label.withConfig({displayName:"singlechoice__Label",componentId:"p4o8xv-1"})(["display:block;position:relative;padding-left:35px;margin-bottom:12px;padding:10px 10px 10px 50px;cursor:pointer;font-size:0.9rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;input{position:absolute;opacity:0;cursor:pointer;}@media only screen and (min-width:","){font-size:1.1rem;}"],function(e){return e.theme.breakpointOne}),_=C.b.div.withConfig({displayName:"singlechoice__Answer",componentId:"p4o8xv-2"})(["margin-top:15px;width:100%;min-height:100px;padding:15px;border-radius:5px;background-color:",";box-shadow:5px 4px 25px 0 rgba(46,61,73,.4);"],function(e){return e.answerCorrect?"#c7efc7":"#ecbaba"}),z=C.b.span.withConfig({displayName:"singlechoice__Checkmark",componentId:"p4o8xv-3"})(['position:absolute;top:15px;left:5px;height:25px;width:25px;background-color:#eee;border-radius:50%;&:hover{background-color:#ccc;}&:checked{background-color:#ffefa2;}&:after{content:"";position:absolute;display:none;top:9px;left:9px;width:8px;height:8px;border-radius:50%;background:white;}']),M=C.b.input.withConfig({displayName:"singlechoice__Input",componentId:"p4o8xv-4"})(["position:absolute;cursor:pointer;&:checked ~ .checkmark{background-color:",";box-shadow:5px 4px 25px 0 rgba(46,61,73,.4);}"],function(e){return e.theme.primaryColor}),I=function(e){function t(t){var n;return(n=e.call(this,t)||this).questions=n.props.data.allSinglechoiceYaml.edges,n.question=n.questions.filter(function(e){return e.node.question===n.props.question})[0].node,n.state={size:"-1",answers:n.shuffleAnswers(n.question.answers),answerCorrect:null,showConfetti:!1,hint:"",buttonClicked:!1},n.confettiConfig={angle:90,spread:45,startVelocity:45,elementCount:50,dragFriction:.1,duration:3e3,delay:0,width:"10px",height:"10px",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]},n.getAnswer=n.getAnswer.bind(i()(n)),n.updateChecked=n.updateChecked.bind(i()(n)),n.shuffleAnswers=n.shuffleAnswers.bind(i()(n)),n}a()(t,e);var n=t.prototype;return n.render=function(){var e=this,t="";return this.state.buttonClicked&&(t=this.state.answerCorrect?d.a.createElement(_,{answerCorrect:!0},this.state.hint):d.a.createElement(_,{answerCorrect:!1},this.state.hint)),d.a.createElement(q,{key:this.question.name},d.a.createElement("p",null,this.question.question),d.a.createElement("ul",null,this.state.answers.map(function(t,n){return d.a.createElement("li",{key:n},d.a.createElement(L,{htmlFor:n+e.question.question},t.answer,d.a.createElement(M,{type:"radio",value:n,id:n+e.question.question,name:e.question.question,onClick:e.updateChecked}),d.a.createElement(S.a,{active:e.state.showConfetti,config:e.config}),d.a.createElement(z,{className:"checkmark"})))})),d.a.createElement(E,{onClick:this.getAnswer},"Submit Answer"),t)},n.shuffleAnswers=function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e},n.getAnswer=function(){var e=this;if(parseInt(this.state.size)>=0){var t=this.question.answers[this.state.size],n=t.correct;this.setState({hint:t.hint,buttonClicked:!0}),n?this.setState({showConfetti:n,answerCorrect:!0},function(){setTimeout(function(){e.setState({showConfetti:!1})},1e3)}):this.setState({answerCorrect:!1})}},n.updateChecked=function(e){e.target.checked=!0,this.setState({size:e.target.value,buttonClicked:!1})},t}(d.a.Component),D=(n(60),n(261),n(91),n(263)),N=(n(264),C.b.div.withConfig({displayName:"multiplechoice__Quiz",componentId:"ruvjso-0"})(["width:100%;margin:4rem 0;p{font-weight:bold;margin-bottom:10px;}@media only screen and (min-width:","){font-size:1.1rem;}ul{list-style:none;margin:0;padding:10px;border:1px solid #e6e6e6;margin-bottom:15px;}li{border-radius:5px;}"],function(e){return e.theme.breakpointOne})),O=C.b.label.withConfig({displayName:"multiplechoice__Label",componentId:"ruvjso-1"})(["display:block;position:relative;padding-left:35px;margin-bottom:12px;padding:10px 10px 10px 50px;cursor:pointer;font-size:0.9rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;input{position:absolute;opacity:0;cursor:pointer;}@media only screen and (min-width:","){font-size:1.1rem;}"],function(e){return e.theme.breakpointOne}),R=C.b.span.withConfig({displayName:"multiplechoice__Checkmark",componentId:"ruvjso-2"})(["position:absolute;top:13px;left:5px;height:25px;width:25px;background-color:#eee;&:hover{background-color:#ccc;}&:checked{background-color:#ffefa2;}&::after{left:9px;top:9px;width:8px;height:8px;border:solid blue;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}"]),P=C.b.input.withConfig({displayName:"multiplechoice__Input",componentId:"ruvjso-3"})(["position:absolute;cursor:pointer;&:checked ~ .checkmark{background-color:",";box-shadow:5px 4px 25px 0 rgba(46,61,73,.4);}"],function(e){return e.theme.primaryColor}),j=C.b.div.withConfig({displayName:"multiplechoice__Answer",componentId:"ruvjso-4"})(["margin-top:15px;width:100%;min-height:100px;padding:15px;border-radius:5px;background-color:",";box-shadow:5px 4px 25px 0 rgba(46,61,73,.4);"],function(e){return e.answerCorrect?"#c7efc7":"#ecbaba"}),F=function(e){function t(t){var n;(n=e.call(this,t)||this).questions=n.props.data.allMultiplechoiceYaml.edges,n.question=n.questions.filter(function(e){return e.node.question===n.props.question})[0].node,n.shuffleAnswers(n.question.answers);for(var r={},o={},a=0;a<n.question.answers.length;a++)r[n.question.answers[a].answer]=!1,o[n.question.answers[a].answer]=n.question.answers[a].correct;return n.confettiConfig={angle:90,spread:45,startVelocity:45,elementCount:50,dragFriction:.1,duration:3e3,delay:0,width:"10px",height:"10px",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]},n.state={size:"-1",answers:r,correctAnswers:o,showConfetti:!1,answerCorrect:null,hint:"",buttonClicked:!1},n.getAnswer=n.getAnswer.bind(i()(n)),n.updateChecked=n.updateChecked.bind(i()(n)),n.shuffleAnswers=n.shuffleAnswers.bind(i()(n)),n}a()(t,e);var n=t.prototype;return n.render=function(){var e=this,t="";return this.state.buttonClicked&&(t=this.state.answerCorrect?d.a.createElement(j,{answerCorrect:!0},"Well done!"):d.a.createElement(j,{answerCorrect:!1},this.state.hint)),console.log(this.state.answerCorrect),d.a.createElement(N,{key:this.question.name},d.a.createElement("p",null,this.question.question),d.a.createElement("ul",null,this.question.answers.map(function(t,n){return d.a.createElement("li",{key:n},d.a.createElement(O,{className:"mc"},t.answer,d.a.createElement(P,{type:"checkbox",name:t.answer,onClick:e.updateChecked}),d.a.createElement(S.a,{active:e.state.showConfetti,config:e.config}),d.a.createElement(R,{className:"checkmark"})))})),d.a.createElement(E,{onClick:this.getAnswer},"Submit Answer"),t)},n.shuffleAnswers=function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e},n.getAnswer=function(){var e=this,t=!0;Object.entries(this.state.answers).forEach(function(n){var r=n[0];return n[1]===e.state.correctAnswers[r]?"":t=!1}),this.setState({buttonClicked:!0}),t?this.setState({showConfetti:!0,answerCorrect:!0},function(){setTimeout(function(){e.setState({showConfetti:!1})},1e3)}):this.setState({answerCorrect:!1,hint:this.question.hint})},n.updateChecked=function(e){var t=this.state.answers;t[e.target.name]=e.target.checked,this.setState({answers:t,buttonClicked:!1})},t}(d.a.Component),T=(n(265),n(92),n(267),n(269)),G=n(314),V=C.b.div.withConfig({displayName:"orderquestion__Answer",componentId:"xdnl23-0"})(["margin-top:15px;width:100%;min-height:100px;padding:15px;border-radius:5px;background-color:",";box-shadow:5px 4px 25px 0 rgba(46,61,73,.4);"],function(e){return e.answerCorrect?"#c7efc7":"#ecbaba"}),W=C.b.div.withConfig({displayName:"orderquestion__DragDropContainer",componentId:"xdnl23-1"})(["margin:40px 0;"]),Q=C.b.p.withConfig({displayName:"orderquestion__QuestionP",componentId:"xdnl23-2"})(["font-weight:bold;margin-bottom:10px;"]),B=function(e){function t(t){var n;(n=e.call(this,t)||this).questions=n.props.data.allOrderYaml.edges,n.question=n.questions.filter(function(e){return e.node.question===n.props.question})[0].node;var r=n.question.answers.map(function(e){return e.answer});return n.confettiConfig={angle:90,spread:45,startVelocity:45,elementCount:50,dragFriction:.1,duration:3e3,delay:0,width:"10px",height:"10px",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]},n.state={correctItems:r.slice(0),items:n.shuffleArray(r),showConfetti:!1,answerCorrect:null,hint:"",buttonClicked:!1},n.onDragEnd=n.onDragEnd.bind(i()(n)),n.getAnswer=n.getAnswer.bind(i()(n)),n}a()(t,e);var n=t.prototype;return n.onDragEnd=function(e){if(e.destination){var t=function(e,t,n){var r=Array.from(e),i=r.splice(t,1)[0];return r.splice(n,0,i),r}(this.state.items,e.source.index,e.destination.index);this.setState({items:t,buttonClicked:!1})}},n.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e},n.getAnswer=function(){var e=this,t=this.state.items.toString()===this.state.correctItems.toString();this.setState({buttonClicked:!0}),t?this.setState({showConfetti:!0,answerCorrect:!0},function(){setTimeout(function(){e.setState({showConfetti:!1})},1e3)}):this.setState({answerCorrect:!1,hint:this.question.hint})},n.render=function(){var e=this,t="";return this.state.buttonClicked&&(t=this.state.answerCorrect?d.a.createElement(V,{answerCorrect:!0},"Well done!"):d.a.createElement(V,{answerCorrect:!1},this.state.hint)),d.a.createElement(W,null,d.a.createElement(G.a,{onDragEnd:this.onDragEnd},d.a.createElement(Q,null,this.props.question),d.a.createElement(G.c,{droppableId:"droppable",key:Math.floor(6e3*Math.random()+1)},function(t,n){return d.a.createElement("div",{ref:t.innerRef,style:(n.isDraggingOver,{padding:"10px 0",width:"100%",textAlign:"left",marginBottom:"20px"})},e.state.items.map(function(t,n){return d.a.createElement(G.b,{draggableId:t,index:n,key:n},function(r,i){return d.a.createElement("div",Object.assign({ref:r.innerRef,key:n+e.props.question},r.draggableProps,r.dragHandleProps,{style:(o=i.isDragging,a=r.draggableProps.style,Object.assign({userSelect:"none",padding:20,outline:"none",margin:"15px 0",borderRadius:"5px",boxShadow:"5px 4px 20px 0 rgba(46,61,73,.4)",background:o?"#fcf113":"#fefab8",color:"#000"},a))}),t);var o,a})}),t.placeholder)}),d.a.createElement(S.a,{active:this.state.showConfetti,config:this.config}),d.a.createElement(E,{onClick:this.getAnswer},"Überprüfe deine Antwort"),t))},t}(s.Component),Y=n(312),H=n(313),J=(C.b.input.withConfig({displayName:"subunit_styled__Checkbox",componentId:"sc-17cfarb-0"})(["position:absolute;left:-300px;top:-300px;"]),C.b.div.withConfig({displayName:"subunit_styled__Container",componentId:"sc-17cfarb-1"})(['height:100vh;max-width:100%;display:grid;grid-template-columns:25% 75%;grid-template-rows:40px auto;grid-template-areas:". ." "main main";transition:width 0.2s;@media only screen and (min-width:','){grid-template-areas:". main" ". main";width:',";margin:0 auto;grid-template-columns:",";}"],function(e){return e.theme.breakpointOne},function(e){return e.showAsideLeft?"100%":"60vw"},function(e){return e.showAsideLeft?"25% 75%":"0% 100%"})),U=C.b.div.withConfig({displayName:"subunit_styled__BottomNavigation",componentId:"sc-17cfarb-2"})(["z-index:88;@media only screen and (min-width:","){display:none;}position:fixed;display:flex;justify-content:space-between;bottom:0;left:0;height:60px;width:100vw;background-color:",";a{padding:0 20px;align-self:stretch;display:flex;align-items:center;svg{color:",";pointer-events:none;}}"],function(e){return e.theme.breakpointOne},function(e){return e.theme.darkColor},function(e){return e.theme.primaryColor}),K=C.b.div.withConfig({displayName:"subunit_styled__Aside",componentId:"sc-17cfarb-3"})(["position:fixed;z-index:1;bottom:",";height:100vh;width:",";overflow-y:scroll;box-sizing:border-box;background-color:",";padding-top:20px;transition:bottom 0.2s;padding:0px 0 80px 0;overflow-x:hidden;border-right:1px solid ",";@media only screen and (min-width:","){padding:70px 0 20px 0;position:fixed;z-index:1;left:0;top:0;height:100vh;transition:width 0.2s;width:",";}&::-webkit-scrollbar{display:none;}"],function(e){return e.showAside?"-100vh":"0vh"},function(e){return e.showAside,"100vw"},function(e){return e.theme.darkColorLight},function(e){return e.theme.darkColor},function(e){return e.theme.breakpointOne},function(e){return e.showAsideLeft?"25vw":"0vw"}),Z=C.b.ul.withConfig({displayName:"subunit_styled__UlAside",componentId:"sc-17cfarb-4"})(["list-style-type:none;margin:0;padding:1rem 1rem;color:#fff;@media only screen and (min-width:","){padding:1rem 1.8rem;}li{a{color:rgb(183,183,183);}ul{margin:0;padding-left:0.4rem;color:#000;li{padding-bottom:0.1rem;margin-bottom:0;display:flex;flex-direction:row;&:first-child{padding-top:0.2rem;}a{color:rgb(183,183,183);font-size:0.9rem;text-decoration:none;background-image:none;text-shadow:none;outline:none;&:hover{color:#7f7f7f;}li > &:hover{border-right:4px solid red;}&.active{font-weight:bold;color:#fff;}}svg{color:",";padding-right:6px;filter:sepia(0.4);height:18px;}}}}"],function(e){return e.theme.breakpointOne},function(e){return e.theme.primaryColorLight}),X=C.b.div.withConfig({displayName:"subunit_styled__ButtonLerneinheiten",componentId:"sc-17cfarb-5"})(["width:100%;height:80px;background-color:",";display:flex;flex-direction:row;justify-content:flex-start;transition:background-color 0.4s;font-size:0.9rem;font-style:italic;div:first-child{width:100vw;display:flex;flex-direction:row;justify-content:flex-start;align-self:stretch;border-bottom:none;border-right:none;transition:background-color 0.2s;a{padding:0 20px;align-self:stretch;display:flex;align-items:center;color:",";transition:color 0.2s;font-style:italic;}@media only screen and (min-width:","){background-color:",";border-right:1px solid #393f4b;border-bottom:1px solid #393f4b;a{color:rgb(183,183,183);}}a:first-child{flex-grow:1;align-self:stretch;display:flex;align-items:center;svg{display:block;margin:auto;}}a:nth-child(2){flex-grow:4;}&:hover{background-color:#313640;}}div:nth-child(2){display:none;text-align:center;align-self:center;color:rgb(183,183,183);position:relative;svg{position:absolute;top:0px;left:15px;height:25px;width:25px;color:",";cursor:pointer;&:hover{color:",";}}}@media only screen and (min-width:","){height:50px;position:fixed;top:0;left:0;width:100vw;transition:width display 0.2s;div:first-child{width:25vw;display:",";}div:nth-child(2){width:",";display:block;}}"],function(e){return e.theme.darkColor},function(e){return e.theme.primaryColorLight},function(e){return e.theme.breakpointOne},function(e){return e.theme.darkColor},function(e){return e.theme.primaryColor},function(e){return e.theme.primaryColorLight},function(e){return e.theme.breakpointOne},function(e){return e.showAsideLeft?"flex":"none"},function(e){return e.showAsideLeft?"75vw":"100vw"}),$=C.b.div.withConfig({displayName:"subunit_styled__VideoMain",componentId:"sc-17cfarb-6"})(["position:relative;left:0;top:-41px;grid-area:main;width:100%;height:100%;overflow-y:hidden;background-color:#000;@media only screen and (min-width:","){top:0px;}video,iframe{height:100%;width:100%;}"],function(e){return e.theme.breakpointOne}),ee=C.b.div.withConfig({displayName:"subunit_styled__Main",componentId:"sc-17cfarb-7"})(["grid-area:main;position:relative;padding-left:0;margin:0 auto;width:90%;font-size:1rem;margin-bottom:10vh;h1{margin-top:0;}h1:first-child{font-size:1.6rem;@media only screen and (min-width:","){font-size:2rem;}}h2{font-size:1.4rem;}input[type=checkbox]:checked ~ h1{color:red;}@media only screen and (min-width:","){width:80%;font-size:1rem;padding-top:90px;p,li{font-size:1.1rem;}h1{margin-top:2rem;}}@media only screen and (min-width:","){width:60%;}iframe{width:100%;height:50vh;box-shadow:5px 5px 25px 0 rgba(46,61,73,.2);padding:20px 0;}video{width:100%;height:100%;margin-bottom:2rem;box-shadow:5px 5px 25px 0 rgba(46,61,73,.2);}audio{width:100%;margin-bottom:2rem;}.gatsby-resp-image-link{margin:40px 0;box-shadow:none;border:none;box-shadow:5px 5px 25px 0 rgba(46,61,73,.2);}a{color:#000;text-decoration:none;transition:all 200ms cubic-bezier(0.4,0,0.2,1);border-bottom:1px solid ",";box-shadow:inset 0 -2px 0px 0px ",";font-weight:bold;&:hover{background:",";border-radius:5px;}}blockquote{margin-left:0;margin-right:1.6rem;margin-top:1.6rem;padding:0.8rem;margin-bottom:1.6rem;border-left:0.4rem solid #ffe564;color:hsla(291,0%,18%,0.8);background-color:rgba(255,229,100,0.3);font-style:italic;font-size:1rem;}img{width:100%;box-shadow:5px 5px 25px 0 rgba(46,61,73,.4);}.gatsby-resp-image-image{box-shadow:5px 5px 25px 0 rgba(46,61,73,.4);}"],function(e){return e.theme.breakpointOne},function(e){return e.theme.breakpointOne},function(e){return e.theme.breakpointTwo},function(e){return e.theme.primaryColor},function(e){return e.theme.primaryColor},function(e){return e.theme.primaryColorLight}),te=C.b.div.withConfig({displayName:"subunit_styled__PreviousButton",componentId:"sc-17cfarb-8"})(["display:",";position:fixed;height:100vh;left:0vw;align-items:stretch;cursor:pointer;a{height:100%;display:flex;svg{align-self:center;height:60px;pointer-events:none;width:100px;color:#ccc;}}&:hover{background-color:#f9f9f9;}"],function(e){return e.showAsideLeft?"none":"flex"}),ne=C.b.div.withConfig({displayName:"subunit_styled__NextButton",componentId:"sc-17cfarb-9"})(["display:",";position:fixed;height:100vh;right:0vw;align-items:stretch;cursor:pointer;a{height:100%;display:flex;svg{align-self:center;height:60px;pointer-events:none;width:100px;color:#ccc;}}&:hover{background-color:#f9f9f9;}"],function(e){return e.showAsideLeft?"none":"flex"});n.d(t,"query",function(){return ie});var re=function(e){function t(t){var n;return(n=e.call(this,t)||this).updateMainContent=function(e){var t=new g.a(e.target.href),r=w.a.parse(t.query);if(r.id&&r.subunit&&r.unit){var i=n.state.data.filter(function(e,t,n){return e.node.frontmatter.module==r.id}),o=i.filter(function(e,t,n){return e.node.frontmatter.subunit==r.subunit&&e.node.frontmatter.unit==r.unit});if(o.length>0){n.setState({currentSubunit:o[0].node,showAside:!0});var a=i.findIndex(function(e,t){return e.node.frontmatter.subunit==r.subunit&&e.node.frontmatter.unit==r.unit}),s=i.filter(function(e,t){return t==a+1}),d=i.filter(function(e,t){return t==a-1});n.setState({nextSubunit:s,previousSubunit:d})}}},n.state={showAside:!0,showAsideLeft:!0,data:n.props.data.allMarkdownRemark.edges,nextSubunit:[],previousSubunit:[],moduleId:null,title:""},n.showAside=n.showAside.bind(i()(n)),n.toggleAsideLeft=n.toggleAsideLeft.bind(i()(n)),n.updateMainContent=n.updateMainContent.bind(i()(n)),n.linkIsActive=n.linkIsActive.bind(i()(n)),n}a()(t,e);var n=t.prototype;return n.componentWillMount=function(){var e=this;if(this.props.location.href){var t=new g.a(this.props.location.href),n=w.a.parse(t.query);this.setState({moduleId:n.id});var r={instruction:d.a.createElement(Y.c,null),question:d.a.createElement(Y.j,null),poll:d.a.createElement(Y.g,null),video:d.a.createElement(Y.l,null),exercise:d.a.createElement(Y.k,null),reflection:d.a.createElement(Y.i,null),information:d.a.createElement(Y.h,null)};if(n.id&&n.subunit&&n.unit){var i=this.state.data.filter(function(e,t,r){return e.node.frontmatter.module==n.id}),o=i.filter(function(e,t,r){return e.node.frontmatter.subunit==n.subunit&&e.node.frontmatter.unit==n.unit});this.setState({title:i[0].node.frontmatter.title});var a=i.findIndex(function(e,t){return e.node.frontmatter.subunit==n.subunit&&e.node.frontmatter.unit==n.unit}),s=i.filter(function(e,t){return t===a+1}),l=i.filter(function(e,t){return t==a-1});if(this.setState({nextSubunit:s,previousSubunit:l}),o.length>0){o=o[0].node;var u={};i.map(function(e){return u[e.node.frontmatter.unit]=e.node.frontmatter.unitTitle});var h=[],f=function(){var t=i.filter(function(e){return e.node.frontmatter.unit==p}),o={};t.map(function(e){o[e.node.frontmatter.subunit]={frontmatter:{title:e.node.frontmatter.title,unitTitle:e.node.frontmatter.unitTitle,unit:e.node.frontmatter.unit,subunit:e.node.frontmatter.subunit},type:e.node.frontmatter.type,htmlAst:e.node.htmlAst}});var a=[];for(p in o){var s=r[o[p].type];a.push(d.a.createElement("li",{key:o[p].frontmatter.title},s,d.a.createElement(c.Link,{key:p,onClick:e.updateMainContent,to:"/module?id="+n.id+"&unit="+o[p].frontmatter.unit+"&subunit="+o[p].frontmatter.subunit,getProps:e.linkIsActive},o[p].frontmatter.title)))}h.push(d.a.createElement("li",{key:p},d.a.createElement("a",{key:p},o[p].frontmatter.unitTitle),d.a.createElement("ul",null,a)))};for(var p in u){f()}this.setState({subunits:i,currentSubunit:o,asideLi:h,showAside:!0})}}}},n.linkIsActive=function(e){return e.href.includes(this.props.location.search)?{className:"active"}:null},n.toggleAsideLeft=function(){var e=this.state.showAsideLeft;this.setState({showAsideLeft:!e})},n.render=function(){return d.a.createElement(h.a,null,this.state.currentSubunit?d.a.createElement(p.a,null,d.a.createElement("title",null,this.state.currentSubunit.frontmatter.title)):"",this.state.currentSubunit?d.a.createElement(J,{showAsideLeft:this.state.showAsideLeft?"showAsideLeft":null},0==this.state.nextSubunit.length?d.a.createElement("a",null):d.a.createElement(ne,{showAsideLeft:this.state.showAsideLeft?"showAsideLeft":null},d.a.createElement(c.Link,{onClick:this.updateMainContent,to:"/module?id="+this.state.moduleId+"&unit="+this.state.nextSubunit[0].node.frontmatter.unit+"&subunit="+this.state.nextSubunit[0].node.frontmatter.subunit},d.a.createElement(Y.b,null))),0==this.state.previousSubunit.length?d.a.createElement("a",null):d.a.createElement(te,{showAsideLeft:this.state.showAsideLeft?"showAsideLeft":null},d.a.createElement(c.Link,{onClick:this.updateMainContent,to:"/module?id="+this.state.moduleId+"&unit="+this.state.previousSubunit[0].node.frontmatter.unit+"&subunit="+this.state.previousSubunit[0].node.frontmatter.subunit},d.a.createElement(Y.a,null))),"video"==this.state.currentSubunit.frontmatter.type?d.a.createElement($,null,oe(this.state.currentSubunit.htmlAst)):d.a.createElement(ee,null,d.a.createElement("h1",null,this.state.currentSubunit.frontmatter.title),oe(this.state.currentSubunit.htmlAst)),d.a.createElement(K,{showAside:this.state.showAside,showAsideLeft:this.state.showAsideLeft?"showAsideLeft":null},d.a.createElement(X,{showAsideLeft:this.state.showAsideLeft?"showAsideLeft":null},d.a.createElement("div",null,d.a.createElement(c.Link,{to:"/modules"},d.a.createElement(Y.d,null)),d.a.createElement(c.Link,{to:"/modules"},"Lesson ",this.state.moduleId)),d.a.createElement("div",null,this.state.showAsideLeft?d.a.createElement(H.a,{onClick:this.toggleAsideLeft}):d.a.createElement(H.b,{onClick:this.toggleAsideLeft}),this.state.currentSubunit.frontmatter.moduleTitle," > ",this.state.currentSubunit.frontmatter.unitTitle)),d.a.createElement(Z,null,this.state.asideLi))):"",d.a.createElement(U,null,0==this.state.previousSubunit.length?d.a.createElement("a",null):d.a.createElement(c.Link,{onClick:this.updateMainContent,to:"/module?id="+this.state.moduleId+"&unit="+this.state.previousSubunit[0].node.frontmatter.unit+"&subunit="+this.state.previousSubunit[0].node.frontmatter.subunit},d.a.createElement(Y.d,null)),d.a.createElement("a",{onClick:this.showAside},0==this.state.showAside?d.a.createElement(Y.f,null):d.a.createElement(Y.g,null)),0==this.state.nextSubunit.length?d.a.createElement("a",null):d.a.createElement(c.Link,{onClick:this.updateMainContent,to:"/module?id="+this.state.moduleId+"&unit="+this.state.nextSubunit[0].node.frontmatter.unit+"&subunit="+this.state.nextSubunit[0].node.frontmatter.subunit},d.a.createElement(Y.e,null))))},n.showAside=function(){this.setState({showAside:!this.state.showAside})},t}(s.Component),ie="118164731",oe=new u.a({createElement:d.a.createElement,components:{video:x,audio:k,singlechoice:function(e){return d.a.createElement(c.StaticQuery,{query:"784395940",render:function(t){return d.a.createElement(I,Object.assign({data:t},e))},data:y})},multiplechoice:function(e){return d.a.createElement(c.StaticQuery,{query:"261639279",render:function(t){return d.a.createElement(F,Object.assign({data:t},e))},data:D})},orderquestion:function(e){return d.a.createElement(c.StaticQuery,{query:"719024954",render:function(t){return d.a.createElement(B,Object.assign({data:t},e))},data:T})}}}).Compiler;t.default=re},174:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return h}),n.d(t,"StaticQuery",function(){return f}),n.d(t,"useStaticQuery",function(){return p});var r=n(0),i=n.n(r),o=n(2),a=n.n(o),s=n(171),d=n.n(s);n.d(t,"Link",function(){return d.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(178),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var c=n(37);n.d(t,"parsePath",function(){return c.a});var h=i.a.createContext({}),f=function(e){return i.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})},p=function(e){i.a.useContext;var t=i.a.useContext(h);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},177:function(e,t,n){"use strict";var r=n(6),i=n.n(r),o=n(0),a=n.n(o),s=n(172),d={primaryColor:"#fcf113",primaryColorLight:"#fefab8",darkColor:"#1c1f25",darkColorLight:"#262c30",breakpointOne:"1100px",breakpointTwo:"1200px"},l=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return a.a.createElement(s.a,{theme:d},a.a.createElement("div",null,this.props.children))},t}(o.Component);t.a=l},178:function(e,t,n){var r;e.exports=(r=n(187))&&r.default||r},187:function(e,t,n){"use strict";n.r(t);n(35);var r=n(0),i=n.n(r),o=n(2),a=n.n(o),s=n(61),d=n(3),l=function(e){var t=e.location,n=d.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=l},259:function(e){e.exports={data:{allSinglechoiceYaml:{edges:[{node:{id:"4688943b-94d8-58cc-9533-37bf271cf65d",question:"Sind digitale Medien in der Regel schädlich für Lernen?",answers:[{answer:"Ja, digitale Medien lenken beim Lernen ab. Zwar lassen sich gute Lernumgebungen damit erstellen, aber durch die Möglichkeit, schnell auf andere Funktionen zu wechseln, sind Lernende abgelenkt.",correct:!1,hint:"Nein. Ob ein digitales Gerät lernförderlich ist, hängt sehr stark von der Nutzung ab. Zwar finden sich viele Studien, die negative Einflüsse auf das Lernen finden, allerdings spielen auch Lernenmerkmale wie die Fähigkeit zur Selbstregulation eine Rolle."},{answer:"Das kann man so nicht sagen. Es gibt für jedes digitale Geräte sowohl Vorteile als auch Nachteile.",correct:!0,hint:"Richtig. Beispielsweise kann man behaupten, dass sich die Dinge besser einprägt, wenn man in einer Vorlesung per Hand alles mitschreibt, allerdings hat der Laptop den Vorteil, dass das Geschriebene schnell gesucht und gefunden werden kann. Ähnlich verhält es sich mit den anderen Geräten. Der Kontext und der Inhalt des Produktes entscheidet, ob ein Produkt lernförderlich ist."},{answer:"Ganz im Gegenteil. Digitale Medien fördern das Lernen, da die heutige Generation Digital Natives sind und produktiv mit digitalen Medien umgehen können.",correct:!1,hint:"Das ist so nicht haltbar. Die Idee der Digital Natives ist mittlerweile überholt. Nur weil Menschen mit digitalen Medien aufwachsen, sind sie nicht per se besser im Umgang. Ob ein digitales Gerät lernförderlich ist, hängt sehr stark von der Nutzung ab. Zwar finden sich viele Studien, die negative Einflüsse auf das Lernen finden, allerdings spielen auch Lernenmerkmale wie die Fähigkeit zur Selbstregulation eine Rolle."}]}},{node:{id:"406343e9-a22b-5a8e-8528-111cc1fc3064",question:"Wie groß ist der Fehler für Mareike?",answers:[{answer:"-2",correct:!0,hint:"Sehr gut. Der Fehler ist ERROR = DATA - MODEL. Also ERROR = 84 - 86 = -2"},{answer:"2",correct:!1,hint:"Nicht ganz. Erinnere dich daran das der Fehler ERROR = DATA - MODEL ist"},{answer:"19",correct:!1,hint:"Nicht ganz. Erinnere dich daran das der Fehler ERROR = DATA - MODEL ist"},{answer:"-19",correct:!1,hint:"Nicht ganz. Erinnere dich daran das der Fehler ERROR = DATA - MODEL ist"},{answer:"4",correct:!1,hint:"Nicht ganz. Erinnere dich daran das der Fehler ERROR = DATA - MODEL ist"}]}},{node:{id:"e9341224-8428-54ff-bbba-4cb9a58f1af3",question:"Warum ist der Fehler beim erweiterten Modell kleiner als beim kompakten Modell?",answers:[{answer:"Da jeder weitere Parameter DATA besser erklären kann, unabhängig von der Größe des Einflusses.",correct:!0,hint:"Sehr gut. Das ist richtig."},{answer:"Da das erweiterte Modell Parameter hat, die Fehler stärker reduzieren als beim kompakten Modell",correct:!1,hint:"Nicht ganz. Es ist möglich, dass der Mittelwert beim kompakten Modell den Fehler bereits sehr klein hält und ein weiterer Parameter den Fehler nur minimal verkleinert."},{answer:"Da die Parameter im erweiterten Modell den Fehler substantiell reduzieren.",correct:!1,hint:"Nein. Die Größe der Fehlerreduzierung ist irrelevant für die Frage. Entscheidend ist, warum der Fehler beim erweiterten Modell immer kleiner ist."}]}}]}}}},263:function(e){e.exports={data:{allMultiplechoiceYaml:{edges:[{node:{id:"bd16bcb8-ac42-5954-bfac-c58c1416d5b3",question:"Wie alt ist günter?",hint:"Denk nochmal drüber nach",answers:[{answer:"ja",correct:!0},{answer:"Nicht ganz",correct:!1},{answer:"Ein Meter und 80",correct:!0}]}},{node:{id:"610ffb00-6e15-5d30-93a5-dbf96a846e23",question:"Welches dieser Tiere ist ein Säugetier?",hint:"Denk nochmal drüber nach",answers:[{answer:"Hund",correct:!0},{answer:"Spinne",correct:!1},{answer:"Maus",correct:!0},{answer:"Vogel",correct:!1}]}},{node:{id:"983b3c4a-5d87-5034-bb2c-8f8f7820e877",question:"Welches dieser Beispiele ist kein statistisches Modell?",hint:"Überlege dir, welches dieser Kennwerte mehrere Daten nicht zusammen fasst.",answers:[{answer:"Der Mittelwert einer Verteilung",correct:!1},{answer:"Der Modus einer Verteilung",correct:!1},{answer:"Die Einzelwerte einer Verteilung",correct:!0},{answer:"Die Standardabweichung einer Verteilung",correct:!1}]}},{node:{id:"a4680499-4534-593c-9734-c2754e3bc306",question:"Welche der folgenden Parameter würde den Fehler vermutlich substantiell reduzieren und wären es daher Wert, in das Modell aufgenommen zu werden?",hint:"Denke nochmal genauer nach. Überlege dir, was ein schlechter Parameter wäre. Sind die vorliegenden Parameter schlecht?",answers:[{answer:"Die Größe des Vaters",correct:!0},{answer:"Der ethnische Hintergrund einer Person",correct:!0},{answer:"Unterernährung während der Kinder- und Jugendzeit",correct:!0}]}}]}}}},269:function(e){e.exports={data:{allOrderYaml:{edges:[{node:{question:"Bring folgende Begriffe in die richtige Reihenfolge.",hint:"Versuche es weiter.",answers:[{answer:"Ja"},{answer:"Ich gehe in den Wald"},{answer:"Wir machen uns keinen Hel draus"}]}},{node:{question:"Ordne folgenden Gedankengang eines Statistikers in die richtige Reihenfolge.",hint:"Das stimmt noch nicht ganz. Denke weiter drüber nach.",answers:[{answer:"Ich möchte ein statistisches Modell für die Größe von Personen erstellen"},{answer:"Ich brauche genug Parameter, um den Fehler substantiell zu reduzieren, sollte aber nicht zu viele Parameter verwenden."},{answer:"Ein guter Parameter wäre die Größe der Eltern, da die Größe von Menschen hocherblich ist."},{answer:"Mein Modell hat daher zwei Parameter."}]}}]}}}}}]);
//# sourceMappingURL=component---src-pages-module-js-a1fc1652996161249576.js.map