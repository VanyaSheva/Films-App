(this.webpackJsonpmodule4=this.webpackJsonpmodule4||[]).push([[2],{36:function(e,t,a){"use strict";var n=a(14),i=a(15),l=a(17),r=a(16),o=a(0),s=a.n(o),m=a(7),c=a(37),p=a.n(c),u=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.films;return s.a.createElement("ul",{className:p.a.FilmsList},t.map((function(t){return s.a.createElement(o.Fragment,{key:t.id},t.poster_path&&s.a.createElement("li",{key:t.id,className:p.a.ListItem},s.a.createElement(m.b,{to:{pathname:"/films/".concat(t.id),state:{from:e.props.location}}},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(t.poster_path),alt:"film_post",className:p.a.ListItemImage}),s.a.createElement("h5",{className:p.a.ListItemTitle},t.title),s.a.createElement("h6",{className:p.a.ListItemYear},t.release_date))))})))}}]),a}(o.Component);t.a=u},37:function(e,t,a){e.exports={FilmsList:"FilmsList_FilmsList__1PYYs",ListItem:"FilmsList_ListItem__3Vus-",ListItemImage:"FilmsList_ListItemImage__4TaJr",ListItemTitle:"FilmsList_ListItemTitle__3YI0q",ListItemYear:"FilmsList_ListItemYear__3ppXg"}},67:function(e,t,a){e.exports={FilmWrapper:"FilmPage_FilmWrapper__-6qCy",FilmBackground:"FilmPage_FilmBackground__3cCEs",Title:"FilmPage_Title__l4q97",OriginanTitle:"FilmPage_OriginanTitle__1pvhI",FilmPosterImage:"FilmPage_FilmPosterImage__1e60J",FilmDetails:"FilmPage_FilmDetails__3YoxA",FilmDetail:"FilmPage_FilmDetail__1bLoM",FilmInfo:"FilmPage_FilmInfo__1_Qmd",GenresList:"FilmPage_GenresList__cplYP",GenresListItem:"FilmPage_GenresListItem__138Bo",AdditionalInfoWrapper:"FilmPage_AdditionalInfoWrapper__3jP9V",AdditionalInfoText:"FilmPage_AdditionalInfoText__1spS5",AdditionalInfo:"FilmPage_AdditionalInfo__1YbMO",Button:"FilmPage_Button__2Qdg3","hvr-push":"FilmPage_hvr-push__2l9pI",ActiveLink:"FilmPage_ActiveLink__2tUkz"}},68:function(e,t,a){e.exports={PageNotFoundWrapper:"PageNotFound_PageNotFoundWrapper__1sVj-",PageNotFound404:"PageNotFound_PageNotFound404__2rmpS",PageNotFoundOops:"PageNotFound_PageNotFoundOops__6NLJ2"}},87:function(e,t,a){"use strict";a.r(t);var n,i,l=a(14),r=a(15),o=a(17),s=a(16),m=a(0),c=a.n(m),p=a(7),u=a(5),d=a(35),_=a.n(d),h=function(e){return _.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=22604d7d4d6b8e16c79f6a5ba307d7e0&language=ru"))},g=a(67),f=a.n(g),F=a(68),E=a.n(F),v=function(){return c.a.createElement("div",{className:E.a.PageNotFoundWrapper},c.a.createElement("p",{className:E.a.PageNotFound404},"404"),c.a.createElement("p",{className:E.a.PageNotFoundOops},"Ooops! Something going wrong"),c.a.createElement("p",null,"Sorry, but this page not found, please make sure that you have good internet connection"))},I=a(36),N=function(e){return _.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/recommendations?api_key=22604d7d4d6b8e16c79f6a5ba307d7e0&language=en-US&page=1"))},b=Object(m.lazy)((function(){return a.e(6).then(a.bind(null,91))})),P=Object(m.lazy)((function(){return a.e(1).then(a.bind(null,90))})),L=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={filmData:null,showError:!1,recommended:null},e.handleGoBack=function(){i?e.props.history.push({pathname:"/films",search:"?category=".concat(i)}):e.props.history.push({pathname:"/Films-App"})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.location.state&&(i=this.props.location.state.from),n=this.props.match.params.id,h(n).then((function(t){return e.setState({filmData:t.data})})).catch((function(t){return e.setState({showError:!0})})),N(n).then((function(t){return e.setState({recommended:t.data.results.slice(0,5)})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;e.match.params.id!==this.props.match.params.id&&(n=this.props.match.params.id,this.setState({filmData:null,showError:!1,recommended:null}),h(n).then((function(e){return a.setState({filmData:e.data})})).catch((function(e){return a.setState({showError:!0})})),N(n).then((function(e){return a.setState({recommended:e.data.results.slice(0,5)})})))}},{key:"render",value:function(){var e=this.state,t=e.filmData,a=e.showError,i=e.recommended;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",onClick:this.handleGoBack,className:f.a.Button}),t&&c.a.createElement("div",{className:f.a.FilmWrapper},c.a.createElement("h1",{className:f.a.Title},t.title),c.a.createElement("p",{className:f.a.OriginanTitle},t.original_title),t.backdrop_path&&c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.backdrop_path),alt:"film_background_poster",className:f.a.FilmBackground}),c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:"film_background_poster",className:f.a.FilmPosterImage}),c.a.createElement("div",{className:f.a.FilmDetails},c.a.createElement("div",{className:f.a.FilmDetail},c.a.createElement("h2",{className:f.a.FilmInfo},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0444\u0438\u043b\u044c\u043c\u0435:"),t.overview&&c.a.createElement("p",null,t.overview),!t.overview&&c.a.createElement("p",null,"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043d\u0435\u0442:(")),c.a.createElement("div",{className:f.a.FilmDetail},c.a.createElement("h3",null,"\u0416\u0430\u043d\u0440\u044b:"),c.a.createElement("ul",{className:f.a.GenresList},t.genres.map((function(e){return c.a.createElement("li",{key:e.id,className:f.a.GenresListItem},e.name)}))))),c.a.createElement("h4",{className:f.a.AdditionalInfoText},"\u0422\u0430\u043a\u0436\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043a \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0443:"),i&&c.a.createElement(I.a,{films:i}),c.a.createElement("p",{className:f.a.AdditionalInfoText},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f:"),c.a.createElement("div",{className:f.a.AdditionalInfoWrapper},c.a.createElement(p.c,{to:"/films/".concat(n,"/reviews"),activeStyle:{fontWeight:"bold",color:"red"}},c.a.createElement("p",{className:f.a.AdditionalInfo},"\u041e\u0431\u0437\u043e\u0440\u044b")),c.a.createElement(p.c,{to:"/films/".concat(n,"/cast"),activeStyle:{fontWeight:"bold",color:"red"}},c.a.createElement("p",{className:f.a.AdditionalInfo},"\u0421\u043f\u0438\u0441\u043e\u043a \u0430\u043a\u0442\u0435\u0440\u043e\u0432"))),c.a.createElement(m.Suspense,{fallback:c.a.createElement("h1",null,"Loading...")},c.a.createElement(u.a,{path:"/films/:id/reviews",component:b}),c.a.createElement(u.a,{path:"/films/:id/cast",component:P}))),a&&c.a.createElement(v,null))}}]),a}(m.Component);t.default=L}}]);
//# sourceMappingURL=film-page.a3953260.chunk.js.map