(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,a){e.exports=a(299)},154:function(e,t,a){},156:function(e,t,a){},176:function(e,t,a){},292:function(e,t,a){e.exports={MovieList:"SearchList_MovieList__3udCY",ListElem:"SearchList_ListElem__-VQH9"}},297:function(e,t,a){e.exports={DetailContainer:"DetailView_DetailContainer__1iF6Q",Prev:"DetailView_Prev__2ZK33",Next:"DetailView_Next__-4Xf3",next:"DetailView_next__3Sfml",prev:"DetailView_prev__OTRSH"}},299:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(41),s=a.n(i),r=(a(154),a(23)),c=a(24),l=a(27),u=a(25),m=a(26),h=a(311),d=a(307),p=a(312),v=(a(155),a(156),a(89)),f=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:v.Home},o.a.createElement("h1",{className:v.HomeHeader},"Welcome to the MP2!"))}}]),t}(n.Component),g=a(310),b=a(140),E=a(33),_=a.n(E),y=(a(176),function(e){function t(){var e;Object(r.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={value:"",genres:[],selectedGenre:"",movies:[],filteredmovies:[]},e.baseUrl="https://api.themoviedb.org/3/genre/movie/list?api_key=",e.API_KEY="cf85a3c0ab8d5363ec6e2d139c08cdbb",e.suffix="&language=en-US",e.mbaseUrl="https://api.themoviedb.org/3/discover/movie?api_key=",e.msuffix="&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=";var a="".concat(e.baseUrl).concat(e.API_KEY).concat(e.suffix);_.a.get(a).then(function(t){console.log(t),e.setState({genres:t.data.genres}),console.log(e.state.genres)}).catch(function(e){console.log(e)});for(var n=1,o=[];n<21;){var i="".concat(e.mbaseUrl).concat(e.API_KEY).concat(e.msuffix).concat(n);_.a.get(i).then(function(t){console.log(t),o.push.apply(o,t.data.results),console.log(o),o.map(function(e){console.log("got movie",e.id)}),e.setState({movies:o,filteredmovies:o})}).catch(function(e){console.log(e)}),n++}return e.state.movies.map(function(e){console.log("got movie",e.id)}),console.log(e.state.movies),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"clickHandler",value:function(e){if(console.log("got new item id ".concat(e.target.id)),this.setState({selectedGenre:e.target.id}),this.state.movies.map(function(e,t){console.log("before filter movie",e.id,t)}),""===e.target.id)this.setState(function(e){return{filteredmovies:e.movies}});else{var t=parseInt(e.target.id);this.setState(function(e){return{filteredmovies:e.movies.filter(function(e){return console.log("movie genre ids",e.genre_ids,"id",t),console.log(e.genre_ids.includes(t)),e.genre_ids.includes(t)})}})}this.state.filteredmovies.map(function(e,t){console.log("after filter movie",e.id,t)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Gallery"},o.a.createElement("div",{className:"GenreContainer"},o.a.createElement("div",{id:"",onClick:this.clickHandler.bind(this),className:"genre"},o.a.createElement("p",null,"All")),this.state.genres.map(function(t){return o.a.createElement("div",{key:t.id,id:t.id,onClick:e.clickHandler.bind(e),className:"genre"},o.a.createElement("p",null,t.name))})),o.a.createElement("div",{className:"MovieContainer"},this.state.filteredmovies.map(function(t){return o.a.createElement(d.a,{key:t.id,to:{pathname:"/detail/"+t.id,state:{list:e.state.filteredmovies}}},o.a.createElement(g.a,null,o.a.createElement(g.a.Content,null,o.a.createElement(b.a,{src:"https://image.tmdb.org/t/p/w500"+t.poster_path}),o.a.createElement(g.a.Header,null,o.a.createElement("div",null,o.a.createElement("p",{className:"black"},t.original_title))))))})))}}]),t}(n.Component)),k=a(18),x=a(308),O=a(300),j=(a(292),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={value:"",movies:[],sortedmovies:[],sortfeature:"",showMenu:!1},e.baseUrl="https://api.themoviedb.org/3/search/movie?api_key=",e.API_KEY="cf85a3c0ab8d5363ec6e2d139c08cdbb",e.middle="&language=en-US&query=",e.suffix="&page=1&include_adult=false",e.inputChangeHandler=e.inputChangeHandler.bind(Object(k.a)(Object(k.a)(e))),e.clickHandler=e.clickHandler.bind(Object(k.a)(Object(k.a)(e))),e.sortByAsc=e.sortByAsc.bind(Object(k.a)(Object(k.a)(e))),e.sortByDec=e.sortByDec.bind(Object(k.a)(Object(k.a)(e))),e.showMenu=e.showMenu.bind(Object(k.a)(Object(k.a)(e))),e.changeFeature=e.changeFeature.bind(Object(k.a)(Object(k.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"clickHandler",value:function(){var e=this,t="".concat(this.baseUrl).concat(this.API_KEY).concat(this.middle).concat(this.state.value).concat(this.suffix);_.a.get(t).then(function(t){console.log(t),e.setState({movies:t.data.results,sortedmovies:t.data.results}),console.log(e.state.movies)}).catch(function(e){console.log(e)})}},{key:"inputChangeHandler",value:function(e){this.setState({value:e.target.value})}},{key:"showMenu",value:function(e){e.preventDefault(),this.setState({showMenu:!0})}},{key:"changeFeature",value:function(e){console.log("change feature"+e.target.id),this.setState({sortfeature:e.target.id}),this.setState(function(e){return{showMenu:!e.showMenu}})}},{key:"sortByAsc",value:function(){var e=[];console.log("this.state",this.state);var t=this.state.movies;null!==t&&("title"===this.state.sortfeature?e=t.sort(function(e,t){return console.log("movie title",e.title,t.title),e.title-t.title}):"count"===this.state.sortfeature?(e=t.sort(function(e,t){return console.log("movie count",e.vote_count,t.vote_count),console.log(e.vote_count-t.vote_count),e.vote_count-t.vote_count})).map(function(e){console.log("after sort",e.vote_count)}):"avg"===this.state.sortfeature&&(e=t.sort(function(e,t){return e.vote_average-t.vote_average})),this.setState({sortedmovies:e}))}},{key:"sortByDec",value:function(){var e=[];console.log("this.state",this.state);var t=this.state.movies;null!==t&&("title"===this.state.sortfeature?e=t.sort(function(e,t){return console.log("movie title",e.title,t.title),t.title-t.title}):"count"===this.state.sortfeature?e=t.sort(function(e,t){return t.vote_count-e.vote_count}):"avg"===this.state.sortfeature&&(e=t.sort(function(e,t){return t.vote_average-e.vote_average})),this.setState({sortedmovies:e}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(x.a,{onChange:this.inputChangeHandler,label:"Search movie",placeholder:"Input # here!",value:this.state.value}),o.a.createElement(O.a,{onClick:this.clickHandler},"GET"),o.a.createElement("div",{className:"SortFeature"},o.a.createElement(O.a,{onClick:this.showMenu},"Show menu"),o.a.createElement("div",null,this.state.showMenu?o.a.createElement("div",{className:"Menu"},o.a.createElement(O.a,{onClick:this.changeFeature,id:"title"}," Title "),o.a.createElement(O.a,{onClick:this.changeFeature,id:"count"}," Vote Count "),o.a.createElement(O.a,{onClick:this.changeFeature,id:"avg"}," Vote Average ")):null)),o.a.createElement(O.a,{onClick:this.sortByAsc},"Asc"),o.a.createElement(O.a,{onClick:this.sortByDec},"Dec"),o.a.createElement("div",{className:"MovieList"},this.state.sortedmovies.map(function(t){return o.a.createElement("div",{key:t.id},o.a.createElement(d.a,{to:{pathname:"/detail/"+t.id,state:{list:e.state.movies}}},o.a.createElement("div",{className:"ListElem"},o.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500"+t.poster_path}),o.a.createElement("p",null,t.title),o.a.createElement("p",null,"Vote Count: ",t.vote_count),o.a.createElement("p",null,"Vote Average: ",t.vote_average))))})))}}]),t}(n.Component)),w=a(309),S=(a(297),function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={properties:e.location.state.list,property:e.match.params.id,info:"",curidx:"",previd:"",nextid:""},a.baseUrl="https://api.themoviedb.org/3/movie/",a.API_KEY="?api_key=cf85a3c0ab8d5363ec6e2d139c08cdbb",a.suffix="&language=en-US";var n="".concat(a.baseUrl).concat(a.state.property).concat(a.API_KEY).concat(a.suffix);return _.a.get(n).then(function(e){a.setState({info:e.data}),console.log("in did mount????????????? properties"+a.state.properties+"property"+a.state.property)}).catch(function(e){console.log("error",e)}),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("will mount",this.state.property),this.state.properties.map(function(e){console.log("got elem in the list"+e.id)});var t=this.state.properties.findIndex(function(t){return e.state.property==t.id});this.setState({curidx:t}),console.log("cur idx",this.state.curidx),this.getPrevId(),this.getNextId()}},{key:"getPrevId",value:function(){var e=this,t=this.state.properties.findIndex(function(t){return e.state.property==t.id});console.log("cur Index",t);var a=0;if(0!==t&&-1!==t){var n=t-1;a=this.state.properties[n].id}else{var o=this.state.properties.length-1;a=this.state.properties[o].id}return console.log("prev id should be "+a),this.setState({previd:a}),a}},{key:"getNextId",value:function(){var e=this,t=this.state.properties.findIndex(function(t){return e.state.property==t.id});console.log("cur Index",t);var a=0;if(t!==this.state.properties.length-1&&-1!==t){var n=t+1;a=this.state.properties[n].id}else{a=this.state.properties[0].id}return console.log("next id should be "+a),this.setState({nextid:a}),a}},{key:"componentWillReceiveProps",value:function(e){var t=this;if(console.log("receive props"),this.props.match.params!==e.match.params){var a=e.match.params.id,n=e.location.state.list;this.setState({properties:n,property:a});var o=this.state.properties.findIndex(function(e){return t.state.property==e.id});this.setState({curidx:o}),console.log("cur idx in the will receive props ",this.state.curidx),this.getPrevId(),this.getNextId();var i="".concat(this.baseUrl).concat(a).concat(this.API_KEY).concat(this.suffix);_.a.get(i).then(function(e){console.log("respon"+e),t.setState({info:e.data}),console.log("already update property--------- property"+t.state.property)}).catch(function(e){console.log("error",e)})}}},{key:"render",value:function(){return o.a.createElement(w.a,{className:"DetailContainer"},o.a.createElement("div",{className:"ButtonContainer"},o.a.createElement(d.a,{className:"Prev",to:{pathname:"/detail/"+this.state.previd,state:{list:this.state.properties}}},"\u276e Prev"),o.a.createElement(d.a,{className:"Next",to:{pathname:"/detail/"+this.state.nextid,state:{list:this.state.properties}}},"Next \u276f")),o.a.createElement("h1",null,this.state.info.title),o.a.createElement("p",{className:"white",color:"white"},this.state.info.overview),o.a.createElement("p",{className:"white"},this.state.info.homepage),o.a.createElement("img",{className:"movie",src:"https://image.tmdb.org/t/p/w500"+this.state.info.backdrop_path}))}}]),t}(n.Component)),C=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("ul",{className:"nav"},o.a.createElement("li",null,o.a.createElement(d.a,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(d.a,{to:"/gallery"},"gallery")),o.a.createElement("li",null,o.a.createElement(d.a,{to:"/search"},"search")))),o.a.createElement("hr",null),o.a.createElement(p.a,{exact:!0,path:"/",component:f}),o.a.createElement(p.a,{path:"/gallery",component:y}),o.a.createElement(p.a,{path:"/search",component:j}),o.a.createElement(p.a,{path:"/detail/:id",component:S})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,a){e.exports={Home:"Home_Home__3rTom"}}},[[149,1,2]]]);
//# sourceMappingURL=main.783f0d40.chunk.js.map