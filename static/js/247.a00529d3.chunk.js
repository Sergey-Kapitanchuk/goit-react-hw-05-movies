"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{3010:function(t,e,n){n.d(e,{V:function(){return h}});var r=n(5861),a=n(5671),c=n(3144),i=n(7757),s=n.n(i),u=n(4569),o=n.n(u),h=function(){function t(){(0,a.Z)(this,t),this.BASE_URL="https://api.themoviedb.org/3/",this.API_KEY="56ed7f4027b248926961d2ef400ff8bc"}return(0,c.Z)(t,[{key:"fetchTrending",value:function(){var t=(0,r.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(this.BASE_URL,"trending/movie/day?api_key=").concat(this.API_KEY));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"fetchDetails",value:function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(this.BASE_URL,"movie/").concat(e,"?api_key=").concat(this.API_KEY));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"fetchCast",value:function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(this.BASE_URL,"movie/").concat(e,"/credits?api_key=").concat(this.API_KEY));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"fetchReviews",value:function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(this.BASE_URL,"movie/").concat(e,"/reviews?api_key=").concat(this.API_KEY));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"fetchMovies",value:function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(this.BASE_URL,"search/movie?api_key=").concat(this.API_KEY,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}()},1247:function(t,e,n){n.r(e);var r=n(885),a=n(2791),c=n(6871),i=n(8401),s=n(3010),u=n(184),o=new s.V;e.default=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],s=e[1],h=(0,a.useState)(!1),p=(0,r.Z)(h,2),f=p[0],v=p[1],l=(0,c.UO)().movieId;return(0,a.useEffect)((function(){v(!0);try{o.fetchCast(l).then((function(t){var e=t.map((function(t){return t.profile_path&&(t.profile_path="https://www.themoviedb.org/t/p/w440_and_h660_face".concat(t.profile_path)),t}));s(e)}))}catch(t){console.log(t)}v(!1)}),[l]),(0,u.jsx)(u.Fragment,{children:f?(0,u.jsx)(i.Z,{}):(0,u.jsx)("ul",{children:n.map((function(t){return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:t.profile_path,alt:"actor",width:"150px"}),(0,u.jsx)("h4",{children:t.name}),(0,u.jsx)("p",{children:t.character})]},t.id)}))})})}}}]);
//# sourceMappingURL=247.a00529d3.chunk.js.map