(this.webpackJsonpmodule4=this.webpackJsonpmodule4||[]).push([[6],{84:function(e,t,n){e.exports={ReviewsList:"ReviewsPage_ReviewsList__n-Rkq",ButtonToTop:"ReviewsPage_ButtonToTop__3PEU_"}},91:function(e,t,n){"use strict";n.r(t);var o=n(14),a=n(15),i=n(17),l=n(16),s=n(0),r=n.n(s),c=n(35),u=n.n(c),m=function(e){return u.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=22604d7d4d6b8e16c79f6a5ba307d7e0&language=en-US&page=1"))},p=n(84),h=n.n(p),d=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={reviews:[]},e.onButtonClick=function(){window.scrollTo({top:0,behavior:"smooth"})},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;m(t).then((function(t){t.data.results.length>10?e.setState({reviews:t.data.results.slice(0,11)}):e.setState({reviews:t.data.results})}))}},{key:"componentDidUpdate",value:function(e,t){if(this.state.reviews.length>0){var n=getComputedStyle(document.querySelector("#list")).height.replace(/[^0-9]/gim,""),o=document.documentElement.scrollHeight-n;window.scrollTo({top:o,behavior:"smooth"})}else window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state.reviews;return r.a.createElement(r.a.Fragment,null,e.length>0&&r.a.createElement("ul",{className:h.a.ReviewsList,id:"list"},e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.author),r.a.createElement("p",null,e.content))}))),r.a.createElement("button",{onClick:this.onButtonClick,className:h.a.ButtonToTop}),0===e.length&&r.a.createElement("p",null,"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043e\u0431\u0437\u043e\u0440\u043e\u0432 \u043d\u0435\u0442"))}}]),n}(s.Component);t.default=d}}]);
//# sourceMappingURL=reviews-page.4d07fcaf.chunk.js.map