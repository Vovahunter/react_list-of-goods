(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n,r=s(3),c=s.n(r),o=s(4),a=s(5),i=s(8),l=s(6),u=s(7),b=s(1),h=s.n(b),d=(s(13),s(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var j=function(t){Object(i.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(o.a)(this,s);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={isStarted:!1,isReversed:!1,sortType:n.NONE},t.showElements=function(){t.setState((function(t){return{isStarted:!t.isStarted}}))},t.sortByABC=function(){t.setState({isReversed:!1,sortType:n.ALPABET})},t.sortByLength=function(){t.setState({isReversed:!1,sortType:n.LENGTH})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({isReversed:!1,sortType:n.NONE})},t}return Object(a.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isStarted,s=t.isReversed,r=t.sortType,c=function(t,e,s){var r=Object(u.a)(t);return r.sort((function(t,s){switch(e){case n.ALPABET:return t.localeCompare(s);case n.LENGTH:return t.length-s.length;default:return 0}})),s?r.reverse():r}(p,r,s);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"App__title",children:"List of goods"}),e?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"button__list",children:[Object(d.jsx)("button",{type:"button",className:"button",onClick:this.sortByABC,children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:"button",onClick:this.sortByLength,children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:"button",onClick:this.reverse,children:"Reverse"}),Object(d.jsx)("button",{type:"button",className:"button",onClick:this.reset,children:"Reset"})]}),Object(d.jsx)("ul",{className:"App__list",children:c.map((function(t){return Object(d.jsx)("li",{className:"App__item",children:t},t)}))})]}):Object(d.jsx)("button",{type:"button",className:"button",onClick:this.showElements,children:"Start"})]})}}]),s}(h.a.Component);c.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c7029f62.chunk.js.map