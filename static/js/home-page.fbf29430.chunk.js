(this.webpackJsonpmodule4=this.webpackJsonpmodule4||[]).push([[3],{36:function(t,e,a){"use strict";var s=a(14),i=a(15),n=a(17),r=a(16),l=a(0),m=a.n(l),c=a(7),o=a(37),u=a.n(o),p=function(t){Object(n.a)(a,t);var e=Object(r.a)(a);function a(){var t;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={},t}return Object(i.a)(a,[{key:"render",value:function(){var t=this,e=this.props.films;return m.a.createElement("ul",{className:u.a.FilmsList},e.map((function(e){return m.a.createElement("li",{key:e.id,className:u.a.ListItem},e.poster_path&&m.a.createElement(c.b,{to:{pathname:"/films/".concat(e.id),state:{from:t.props.location}}}," ",m.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path),alt:"film_post",className:u.a.ListItemImage}),m.a.createElement("h5",{className:u.a.ListItemTitle},e.title),m.a.createElement("h6",{className:u.a.ListItemYear},e.release_date)))})))}}]),a}(l.Component);e.a=p},37:function(t,e,a){t.exports={FilmsList:"FilmsList_FilmsList__1PYYs",ListItem:"FilmsList_ListItem__3Vus-",ListItemImage:"FilmsList_ListItemImage__4TaJr",ListItemTitle:"FilmsList_ListItemTitle__3YI0q",ListItemYear:"FilmsList_ListItemYear__3ppXg"}},87:function(t,e,a){"use strict";a.r(e);var s=a(14),i=a(15),n=a(17),r=a(16),l=a(0),m=a.n(l),c=a(35),o=a.n(c),u=function(){return o.a.get("https://api.themoviedb.org/3/movie/popular?api_key=22604d7d4d6b8e16c79f6a5ba307d7e0&language=ru&page=1")},p=a(36),h=function(t){Object(n.a)(a,t);var e=Object(r.a)(a);function a(){var t;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={popularFilms:[]},t}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=this;u().then((function(e){return t.setState({popularFilms:e.data.results})}))}},{key:"render",value:function(){var t=this.state.popularFilms;return m.a.createElement(m.a.Fragment,null,t.length>0&&m.a.createElement(p.a,{films:t}))}}]),a}(l.Component);e.default=h}}]);
//# sourceMappingURL=home-page.fbf29430.chunk.js.map