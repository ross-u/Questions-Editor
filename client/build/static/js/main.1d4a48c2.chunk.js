(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,n){e.exports=n(91)},56:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(39),i=n.n(o),l=n(19),s=n(20),c=n(6),u=n(10),p=n(13),d=n(11),m=n(14),h=n(96),f=n(97),b=n(95),g=(n(56),n(15)),w=n(8),v=n(2),x=n.n(v),E=n(3),y=n(93),O=n(17),j=n.n(O),I=n(23),k=n.n(I),S="http://localhost:3005",N={columns:7,rows:12},L=(n(86),n(24));var A={questionInput:{fontSize:"26px",width:"90%",margin:"10px",marginLeft:"10",resize:"none",maxHeight:"100px",overflow:"hidden",border:"none",borderBottom:"1px solid gray"}},q=function(e){var t=e.handleChange,n=e.value;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("label",{htmlFor:""},r.a.createElement(L.a,{type:"text",value:n,onChange:t,placeholder:"Question Title",style:A.questionInput}))))},C=n(12),Q=n.n(C),T=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selectedFile:null,currentLabel:{}},n.triggerFileInput=function(e){e.preventDefault(),n.fileInput.click()},n.fileSelectedHandler=function(){var e=Object(E.a)(x.a.mark(function e(t){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({selectedFile:t.target.files[0]});case 2:n.fileUploadHandler();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.fileUploadHandler=function(){var e="".concat(S,"/image/"),t=new FormData;t.append("image",n.state.selectedFile,n.state.selectedFile.name),j.a.post(e,t,{headers:{"Content-Type":"application/json"}}).then(function(e){var t=n.props.name.slice(0,3);n.props.updateImage(t,n.props.name,e.data)}).catch(function(e){return console.error("Image upload error",e)})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){Q.a.AutoInit()}},{key:"render",value:function(){var e=this,t=this.props.label;return r.a.createElement("div",null,r.a.createElement("form",{action:"/action_page.php"},r.a.createElement("input",{type:"file",onChange:this.fileSelectedHandler,style:{display:"none"},ref:function(t){return e.fileInput=t}}),t.image?r.a.createElement("img",{src:t.image,alt:"",style:_.labelImage}):r.a.createElement("a",{style:_.addBtnWrapper,href:"#!",onClick:this.triggerFileInput},r.a.createElement("button",{style:_.addImageBtn,className:"btn waves-effect waves-light teal lighten-2 add-question-btn center-align z-depth-2"},r.a.createElement("i",{className:"medium material-icons"},"add_photo_alternate")))))}}]),t}(a.Component),_={labelImage:{border:"0",background:"none",textDecoration:"none",width:"48px",height:"48px",margin:"0",marginBottom:"0px",boxShadow:"2px 3px 4px 1px rgba(0,0,0,0.18)"},addBtnWrapper:{textAlign:"center"},addImageBtn:{width:"48px",height:"48px",paddingTop:"5px",margin:"0",marginBottom:"5px"}},D=T;var R={deleteLabel:{row:{width:"13px",height:"13px",position:"relative",left:"-10px",color:"black",fontSize:"14px"},col:{width:"13px",height:"13px",position:"relative",top:"-2px",left:"6px",color:"black",fontSize:"14px"}},labelContainer:{row:{display:"flex",alignItems:"center",position:"relative",justifyContent:"space-evenly",flexDirection:"row",width:"90px",height:"auto",padding:"5px",marginTop:"15px",marginBottom:"15px"},col:{display:"flex",position:"relative",flexDirection:"column",width:"50px",height:"auto",marginLeft:"40px",padding:"10px 10px 10px 10px",textAlign:"center"}},labelInput:{row:{width:"100px",textAlign:"center",marginBottom:"0px",marginLeft:"10px",marginRight:"50px",fontSize:"12px",resize:"none",maxHeight:"100px",overflow:"hidden",verticalAlign:"middle",border:"none"},col:{marginTop:"5px",width:"70px",marginLeft:"-12px",textAlign:"center",resize:"none",maxHeight:"100px",overflow:"hidden",verticalAlign:"middle",border:"none"}}},U=function(e){var t=e.index,n=e.label,a=e.labelType,o=e.value,i=e.labelMethods,l=i.handleLabelChange,s=i.updateImage,c=i.deleteLabel;return Q.a.AutoInit(),r.a.createElement("div",{style:R.labelContainer[a]},r.a.createElement("a",{href:"#!",onClick:function(){return c(a,t)}},r.a.createElement("i",{className:"xsmall material-icons",style:R.deleteLabel[a]},"close")),r.a.createElement("div",null,r.a.createElement(D,{label:n,name:"".concat(a).concat(t),updateImage:s})),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("label",null,r.a.createElement(L.a,{name:"".concat(a).concat(t),type:"text",value:o||"",placeholder:"".concat(a).concat(t),onChange:function(e){return l(e,a)},style:R.labelInput[a]}))))},B=n(41),F=n.n(B),z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).renderRadioButtons=function(e,t,a,o){return r.a.createElement("div",{key:e,style:H.inputBox},r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("input",{type:"radio",style:H.radioInput,name:"group1",id:"choice_".concat(e),value:e,checked:n.state.answersArray[e]||!1,onChange:function(){return a(o,t.length,e,"col".concat(e))}}),r.a.createElement("span",null))))},n.updateState=function(){var e=Object(E.a)(x.a.mark(function e(t){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.row.answers.length){e.next=5;break}return e.next=3,n.setState({answersArray:new Array(t.columns.length).fill(!1)});case 3:e.next=7;break;case 5:return e.next=7,n.setState({answersArray:t.row.answers});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.state={answersArray:[]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){!F()(this.state.answersArray,this.props.row.answers)&&this.props.row.answers.length>0&&this.updateState(this.props)}},{key:"componentDidMount",value:function(){Q.a.AutoInit(),this.updateState(this.props)}},{key:"render",value:function(){var e=this,t=this.props,n=t.columns,a=t.updateRow,o=t.indexNum;return n=Object(w.a)(n),r.a.createElement("div",{style:H.inputFormWrapper},r.a.createElement("form",{action:"#",style:H.inputForm},n?n.map(function(t,r){return e.renderRadioButtons(r,n,a,o)}):null))}}]),t}(a.Component),H={inputFormWrapper:{display:"flex",alignItems:"center"},inputForm:{display:"flex",flexDirection:"row",alignItems:"center",height:"100px",width:"auto",marginLeft:"22px"},inputBox:{textAlign:"center",width:"50px",padding:"10px",marginLeft:"40px"},radioInput:{color:"red",height:"20px",width:"20px",opacity:"1 !important"}},M=z;var W={addButton:{row:{margin:"0",marginTop:"30px",marginLeft:"-50px"},column:{marginLeft:"35px",marginTop:"37px"}}},V=function(e){var t=e.labelType,n=e.addLabel;return Q.a.AutoInit(),r.a.createElement("button",{style:W.addButton[t],className:"btn-floating btn-medium waves-effect waves-light cyan darken-3 add-question-btn center-align",onClick:function(){return n(t)}},r.a.createElement("i",{className:"medium material-icons"},"playlist_add"))},P=function e(){Object(c.a)(this,e),this.id=0,this.question="",this.columns=[],this.rows=[],this.imagesUploaded=0,this.minCol=void 0,this.maxCol=void 0,this.minRow=void 0,this.maxRow=void 0},X=function e(){Object(c.a)(this,e),this.image=void 0,this.label=void 0},J=function e(){Object(c.a)(this,e),this.image=void 0,this.label=void 0,this.answer=void 0,this.answers=[]},Y=function(e){return isFinite(e)?e:""},G=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state=new P,n.handleTitleChange=function(){var e=Object(E.a)(x.a.mark(function e(t){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,n.setState({question:t.target.value});case 3:n.props.updateQuestion(n.state);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.handleLabelChange=function(){var e=Object(E.a)(x.a.mark(function e(t,a){var r,o,i;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.name.slice(3,t.target.name.length),o="row"===a?"rows":"columns",(i=Object(w.a)(n.state[o]))[r].label=t.target.value,e.next=7,n.setState(Object(g.a)({},o,i));case 7:n.props.updateQuestion(n.state),n.setLabelLengths(o);case 9:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n.addLabel=function(){var e=Object(E.a)(x.a.mark(function e(t){var a,r;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a="row"===t?"rows":"columns",(r=Object(w.a)(n.state[a])).length!==N[a]){e.next=4;break}return e.abrupt("return");case 4:return r.push("row"===t?new J:new X),e.next=7,n.setState(Object(g.a)({},a,r));case 7:n.props.updateQuestion(n.state);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.deleteLabel=function(){var e=Object(E.a)(x.a.mark(function e(t,a){var r,o,i,l;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o="row"===t?"rows":"columns",i=Object(w.a)(n.state[o]),l=n.state.imagesUploaded,i[a].image&&(l-=1),i.splice(a,1),e.next=7,n.setState((r={},Object(g.a)(r,o,i),Object(g.a)(r,"imagesUploaded",l),r));case 7:n.props.updateQuestion(n.state),n.setLabelLengths(o);case 9:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n.updateImage=function(){var e=Object(E.a)(x.a.mark(function e(t,a,r){var o,i,l,s,c;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.slice(3,a.length),l=n.state.imagesUploaded+1,s="row"===t?"rows":"columns",(c=Object(w.a)(n.state[s]))[i].image=r,e.next=7,n.setState((o={},Object(g.a)(o,s,c),Object(g.a)(o,"imagesUploaded",l),o));case 7:n.props.updateQuestion(n.state);case 8:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}(),n.setLabelLengths=function(){var e=Object(E.a)(x.a.mark(function e(t){var a,r;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,n.state[t].forEach(function(e){e.label&&e.label.length<a&&(a=e.label.length),e.label&&e.label.length>r&&(r=e.label.length)}),"columns"!==t){e.next=9;break}return e.next=7,n.setState({minCol:a,maxCol:r});case 7:e.next=11;break;case 9:return e.next=11,n.setState({minRow:a,maxRow:r});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.updateRow=function(){var e=Object(E.a)(x.a.mark(function e(t,a,r,o){var i;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(i=Object(w.a)(n.state.rows))[t].answers=new Array(a).fill(!1),i[t].answers[r]=!0,i[t].answer=o,e.next=6,n.setState({rows:i});case 6:n.props.updateQuestion(n.state);case 7:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),n.resetRows=Object(E.a)(x.a.mark(function e(){var t,a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(w.a)(n.state.rows),a=t.map(function(e){return e.answers=new Array(n.state.columns.length).fill(!1),e}),e.next=4,n.setState({rows:a});case 4:n.props.updateQuestion(n.state);case 5:case"end":return e.stop()}},e)})),n.saveQuestion=function(){j.a.post("".concat(S,"/question"),n.state).then(function(e){return n.props.history.push("/")}).catch(function(e){return console.error("Image upload error",e)})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.state;t?this.setState(t.question):Object(E.a)(x.a.mark(function t(){return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({id:k.a.generate()});case 2:e.addLabel("column"),e.addLabel("row"),e.props.createQuestion(e.state);case 5:case"end":return t.stop()}},t)}))()}},{key:"render",value:function(){var e=this,t=this.state,n=t.columns,a=t.rows,o=t.imagesUploaded,i=t.minCol,l=t.maxCol,s=t.minRow,c=t.maxRow,u={handleLabelChange:this.handleLabelChange,updateImage:this.updateImage,deleteLabel:this.deleteLabel};return r.a.createElement("div",{className:"container-main"},r.a.createElement("div",{id:"question"},r.a.createElement(q,{value:this.state.question||"",handleChange:this.handleTitleChange}),r.a.createElement("div",{id:"question-columns"},n?n.map(function(e,t){return r.a.createElement(U,{labelType:"col",index:t,key:t,label:e,value:n[t].label,labelMethods:u})}):null,r.a.createElement(V,{labelType:"column",addLabel:this.addLabel})),r.a.createElement("div",{id:"question-rows"},a?a.map(function(t,o){return r.a.createElement("div",{key:o,className:"row"},r.a.createElement(U,{labelType:"row",index:o,label:t,value:a[o].label,labelMethods:u}),r.a.createElement(M,{indexNum:o,columns:n,updateRow:e.updateRow,row:t}))}):null,r.a.createElement(V,{labelType:"row",addLabel:this.addLabel})),r.a.createElement("button",{className:"save-btn btn waves-effect waves-light",onClick:this.saveQuestion},"Save Question"),r.a.createElement("button",{className:"save-btn btn waves-effect cyan darken-3  waves-light",onClick:this.resetRows},"Reset Form")),r.a.createElement("div",{id:"summary"},r.a.createElement("h3",null,"Summary"),r.a.createElement("p",null," Number of rows: ",a.length," "),r.a.createElement("p",null," Number of columns: ",n.length," "),r.a.createElement("p",null," Number of images uploaded: ",o," "),r.a.createElement("p",null," Longest row label: ",Y(c)," "),r.a.createElement("p",null," Shortest row label: ",Y(s)," "),r.a.createElement("p",null," Longest column label: ",Y(l)," "),r.a.createElement("p",null," Shortest column label: ",Y(i)," ")))}}]),t}(a.Component),$=Object(y.a)(G),K=Object(s.b)(function(e){return{questions:e.questions}},function(e){return{createQuestion:function(t){return e(function(e){return{type:"CREATE_QUESTION",question:e}}(t))},updateQuestion:function(t){return e(function(e){return{type:"UPDATE_QUESTION",updatedQuestion:e}}(t))}}})($),Z=n(94),ee=(n(88),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).getAllQuestions=function(){j.a.get("".concat(S,"/questions")).then(function(e){return n.props.storeAllQuestions(e.data)}).catch(function(e){return console.error("Fetch All Question error",e)})},n.deleteQuestion=function(){var e=Object(E.a)(x.a.mark(function e(t){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:j.a.delete("".concat(S,"/question/").concat(t)).then(function(e){return n.props.storeAllQuestions(e.data)}).catch(function(e){return console.error("Delete question error",e)});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){Q.a.AutoInit(),this.getAllQuestions()}},{key:"render",value:function(){var e=this,t=this.props.questions||[];return r.a.createElement("div",{className:"container-dashboard"},r.a.createElement("h3",{className:"header"},"Dashboard"),r.a.createElement("button",{className:"btn-floating btn-large waves-effect waves-light green add-question-btn pulse z-depth-2",onClick:function(){return e.props.history.push("/question")}},r.a.createElement("i",{className:"material-icons"},"add")),0===t.length?r.a.createElement("h5",null,"Press",r.a.createElement("span",{className:"btn-floating btn-small waves-light green add-question-btn-sm"},r.a.createElement("i",{className:"material-icons"},"add")),"to add new Question"):t.map(function(t){return r.a.createElement("div",{className:"question-tab card z-depth-3",key:k.a.generate()},r.a.createElement("h6",null,"Question:"),r.a.createElement(Z.a,{to:{pathname:"/question",state:{question:t}}},r.a.createElement("h4",{className:"question-title-link"},t.question||"...")),r.a.createElement("div",{className:"buttons-wrapper"},r.a.createElement(Z.a,{to:{pathname:"/question",state:{question:t}},className:"dashboard-tab-btn btn-floating waves-effect waves-light btn"},r.a.createElement("i",{className:"material-icons left z-depth-3"},"edit")),r.a.createElement("div",{onClick:function(){return e.deleteQuestion(t.id)},className:"dashboard-tab-btn btn-floating waves-effect waves-light btn red"},r.a.createElement("i",{className:"material-icons left z-depth-3"},"delete"))))}))}}]),t}(a.Component)),te=Object(y.a)(ee),ne=Object(s.b)(function(e){return{questions:e.questions}},function(e){return{storeAllQuestions:function(t){return e(function(e){return{type:"STORE_ALL_QUESTIONS",questions:e}}(t))}}})(te),ae=(n(89),n(90),function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement(b.a,{exact:!0,path:"/",component:ne}),r.a.createElement(b.a,{path:"/question",component:K})))}}]),t}(a.Component)),re=n(44),oe=Object(l.b)({selectedQuestionId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_QUESTION_ID":return t.id;default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STORE_ALL_QUESTIONS":return Object(w.a)(t.questions);case"CREATE_QUESTION":return[].concat(Object(w.a)(e),[t.question]);case"UPDATE_QUESTION":var n=t.updatedQuestion.id,a=e.map(function(e){return e.id!==n?e:Object(re.a)({},e,t.updatedQuestion)});return Object(w.a)(a);default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=Object(l.c)(oe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());document.title="Question Editor",i.a.render(r.a.createElement(s.a,{store:ie},r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.1d4a48c2.chunk.js.map