(this.webpackJsonpmovies_search=this.webpackJsonpmovies_search||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),c=(a(14),a(1)),l=a(2),s=a(4),h=a(3),u=a(5),p=(a(15),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"viewMore",value:function(){var e="https://www.themoviedb.org/movie/"+this.props.movie.id;window.location.href=e}},{key:"render",value:function(){return r.a.createElement("table",{key:this.props.movie.id},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{alt:"poster",width:"120",src:this.props.movie.poster_src})),r.a.createElement("td",null,r.a.createElement("h3",null,this.props.movie.title," (User Rating: ",this.props.movie.vote_average,", Popularity: ",this.props.movie.popularity,")"),r.a.createElement("p",null,this.props.movie.overview),r.a.createElement("input",{type:"button",onClick:this.viewMore.bind(this),value:"View"})))))}}]),t}(r.a.Component)),m=a(8),d=a.n(m),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={},a.performSearch("Avengers"),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"performSearch",value:function(e){var t=this;console.log("Performing moviedb search...");var a="https://api.themoviedb.org/3/search/movie?&api_key=53795b69c777addc425c4a279bd3d4f5&query="+e;d.a.ajax({url:a,success:function(e){console.log("Fetched data successfully");var a=e.results,n=[];a.forEach((function(e){e.poster_src="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=r.a.createElement(p,{key:e.id,movie:e});n.push(t)})),t.setState({rows:n})},error:function(e,t,a){console.log("Failed to fetch data")}})}},{key:"searchChangeHandler",value:function(e){var t=e.target.value;this.performSearch(t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{className:"titleBar"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{alt:"app icon",width:"50",src:"green_app_icon.svg"})),r.a.createElement("td",{width:"8"}),r.a.createElement("td",null,r.a.createElement("h1",null,"Movies Search"))))),r.a.createElement("input",{style:{fontSize:24,display:"block",width:"99%",paddingTop:8,paddingBottom:8,paddingLeft:16},onChange:this.searchChangeHandler.bind(this),placeholder:"Enter a movie"}),this.state.rows)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.2bd13947.chunk.js.map