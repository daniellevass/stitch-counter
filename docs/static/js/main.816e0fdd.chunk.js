(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(13),c=n.n(r),s=(n(23),n(24),n(14)),i=n(15),u=n(18),d=n(17),l=n(30),p=n(31),h=n(33),j=n(32),g=n(0),x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this)).increaseCounter1=function(){var e=a.state.counter1;e++,a.setState({counter1:e},(function(){a.saveToStorage()}))},a.decreaseCounter1=function(){var e=a.state.counter1;e>0&&(e--,a.setState({counter1:e},(function(){a.saveToStorage()})))},a.increaseCounter2=function(){var e=a.state.counter2;e++,a.setState({counter2:e},(function(){a.saveToStorage()}))},a.decreaseCounter2=function(){var e=a.state.counter2;e>0&&(e--,a.setState({counter2:e},(function(){a.saveToStorage()})))},a.handleNotesChanged=function(e){a.setState({notes:e.target.value},(function(){a.saveToStorage()}))},a.saveToStorage=function(){var e={counter1:a.state.counter1,counter2:a.state.counter2,notes:a.state.notes};localStorage.setItem("counter_component_1",JSON.stringify(e))},a.readFromStorage=function(){var e=localStorage.getItem("counter_component_1"),t=JSON.parse(e);null!=t&&a.setState({counter1:t.counter1,counter2:t.counter2,notes:t.notes})},a.props=e,a.state={counter1:0,counter2:0,notes:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.readFromStorage()}},{key:"render",value:function(){return Object(g.jsx)(l.a,{style:{padding:"0px"},children:Object(g.jsxs)(p.a,{style:{margin:"0px"},children:[Object(g.jsxs)(p.a,{style:{paddingTop:"20px",paddingBottom:"10px",background:"#FFCE54",margin:"0px"},children:[Object(g.jsx)("h1",{children:"Sweater"}),Object(g.jsx)(p.a,{children:Object(g.jsxs)("p",{style:{fontSize:"5em"},children:[Object(g.jsx)(h.a,{variant:"outline-dark",style:{marginRight:"30px",width:"40px",marginLeft:"30px"},onClick:this.decreaseCounter1,children:"-"}),"  ",this.state.counter1,Object(g.jsx)(h.a,{variant:"outline-dark",size:"lg",style:{fontSize:"0.5em",marginLeft:"30px",width:"70px"},onClick:this.increaseCounter1,children:"+"})]})})]}),Object(g.jsx)(p.a,{style:{paddingTop:"20px",paddingBottom:"10px",background:"#E6E9ED",margin:"0px"},children:Object(g.jsxs)("p",{style:{fontSize:"2em"},children:[Object(g.jsx)(h.a,{variant:"outline-dark",style:{fontSize:"1em",marginRight:"10px",width:"60px"},onClick:this.decreaseCounter2,children:"-"}),"  ",this.state.counter2,Object(g.jsx)(h.a,{variant:"outline-dark",size:"lg",style:{fontSize:"1em",marginLeft:"30px",width:"60px"},onClick:this.increaseCounter2,children:"+"}),"  "]})}),Object(g.jsx)(p.a,{style:{paddingTop:"20px",paddingBottom:"10px",margin:"0px"},children:Object(g.jsx)(j.a,{children:Object(g.jsxs)(j.a.Group,{className:"mb-3",children:[Object(g.jsx)(j.a.Label,{children:"Notes"}),Object(g.jsx)(j.a.Control,{as:"textarea",rows:3,onChange:this.handleNotesChanged,value:this.state.notes})]})})})]})})}}]),n}(a.Component);var b=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(x,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};c.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(b,{})}),document.getElementById("root")),f()}},[[28,1,2]]]);
//# sourceMappingURL=main.816e0fdd.chunk.js.map