(this.webpackJsonpmodule4=this.webpackJsonpmodule4||[]).push([[5],{36:function(t,e,a){"use strict";var r=a(14),n=a(15),s=a(17),c=a(16),i=a(0),o=a.n(i),m=a(7),u=a(37),l=a.n(u),h=function(t){Object(s.a)(a,t);var e=Object(c.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={},t}return Object(n.a)(a,[{key:"render",value:function(){var t=this,e=this.props.films;return o.a.createElement("ul",{className:l.a.FilmsList},e.map((function(e){return o.a.createElement(i.Fragment,{key:e.id},e.poster_path&&o.a.createElement("li",{key:e.id,className:l.a.ListItem},o.a.createElement(m.b,{to:{pathname:"/films/".concat(e.id),state:{from:t.props.location}}}," ",o.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path),alt:"film_post",className:l.a.ListItemImage}),o.a.createElement("h5",{className:l.a.ListItemTitle},e.title),o.a.createElement("h6",{className:l.a.ListItemYear},e.release_date))))})))}}]),a}(i.Component);e.a=h},37:function(t,e,a){t.exports={FilmsList:"FilmsList_FilmsList__1PYYs",ListItem:"FilmsList_ListItem__3Vus-",ListItemImage:"FilmsList_ListItemImage__4TaJr",ListItemTitle:"FilmsList_ListItemTitle__3YI0q",ListItemYear:"FilmsList_ListItemYear__3ppXg"}},82:function(t,e,a){t.exports={Searchbar:"SearchBar_Searchbar__1SxOw",SearchForm:"SearchBar_SearchForm__1RScY",SearchFormButton:"SearchBar_SearchFormButton__3HAwE",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__RGSqv",SearchFormInput:"SearchBar_SearchFormInput__1z0wR"}},88:function(t,e,a){"use strict";a.r(e);var r=a(40),n=a(14),s=a(15),c=a(17),i=a(16),o=a(0),m=a.n(o),u=a(35),l=a.n(u),h=function(t){return l.a.get("https://api.themoviedb.org/3/search/movie?api_key=22604d7d4d6b8e16c79f6a5ba307d7e0&query=".concat(t))},p=a(36),f=a(69),_=a.n(f),b=a(38),d=function(t,e){return l.a.get("https://api.themoviedb.org/3/search/movie?api_key=22604d7d4d6b8e16c79f6a5ba307d7e0&query=".concat(t,"&page=").concat(e))},L=a(82),S=a.n(L),y=0,g=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(n.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={query:"",filmsList:[]},t.onFormSubmit=function(e){e.preventDefault(),h(t.state.query).then((function(e){return t.setState({filmsList:e.data.results})})),t.props.history.push({pathname:t.props.location.pathname,search:"category=".concat(t.state.query)})},t.onInputChange=function(e){t.setState({query:e.target.value})},t.fetchMoreData=function(){d(t.state.query,y).then((function(e){return t.setState((function(t){return{filmsList:[].concat(Object(r.a)(t.filmsList),Object(r.a)(e.data.results))}}))}))},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var t=this;if(y=0,this.props.location.search){var e=_.a.parse(this.props.location.search);this.setState({query:e.category}),h(e.category).then((function(e){return t.setState({filmsList:e.data.results})}))}}},{key:"componentDidUpdate",value:function(t,e){e!==this.state&&(y+=1)}},{key:"render",value:function(){var t=this.state,e=t.query,a=t.filmsList;return m.a.createElement(m.a.Fragment,null,m.a.createElement("form",{onSubmit:this.onFormSubmit,className:S.a.SearchForm},m.a.createElement("input",{placeholder:"Type to search",value:e,onChange:this.onInputChange,required:!0,className:S.a.SearchFormInput}),m.a.createElement("button",{type:"submit",className:S.a.SearchFormButton})),a.length>0&&m.a.createElement(b.a,{dataLength:a.length,next:this.fetchMoreData,hasMore:!0},m.a.createElement(p.a,{films:a,location:e})))}}]),a}(o.Component);e.default=g}}]);
//# sourceMappingURL=movies-page.d8e2248e.chunk.js.map