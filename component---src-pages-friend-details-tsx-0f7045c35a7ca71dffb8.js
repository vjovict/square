"use strict";(self.webpackChunksquare_friends=self.webpackChunksquare_friends||[]).push([[447],{2556:function(e,a,n){n.d(a,{q:function(){return c}});var t=n(7294),i=n(8334),r=JSON.parse('[{"id":1,"name":"Mayke Schuurs","social":"@maymayke","bio":"Not a Man but a Ghost 👻","date":"2021-03-02T20:07:07.134Z"},{"id":2,"name":"Tiontay Carroll","social":"@tatay","bio":"Interaction Designer | Coffe Addict | Part time Traveller | Full time Mom of Baby and Bayi.","date":"2021-03-01T14:07:07.134Z"},{"id":3,"name":"Ngô Hải Giang","social":"@ngohaitong","bio":"Pushing pixels and experiences in digital products for onetwothree | Coffee(nosugar)","date":"2020-03-02T20:07:07.134Z"},{"id":4,"name":"Chineze Uchechey","social":"@chinezeulala","bio":"Youtube Content Creator | Photography | Profesional Videographer","date":"2021-03-02T16:07:07.134Z"},{"id":5,"name":"Xian Zhou","social":"@Xianzon","bio":"Life is a Choice baby :)","date":"2019-03-02T20:07:07.134Z"},{"id":6,"name":"Anje Keizer","social":"@anjedrive","bio":"Not a Man but a Ghost 👻","date":"2020-04-02T20:07:07.134Z"},{"id":7,"name":"Njimoluh Ebua","social":"@njipanji","bio":"Student Educational Technology\'14 State University of Brooklyn 😉","date":"2020-08-02T20:07:07.134Z"},{"id":8,"name":"Isaac Hunt","social":"@isaachunt","bio":"Student Educational Technology\'14 State University of Brooklyn 😉","date":"2018-03-02T20:07:07.134Z"}]'),o=n(9395),l="__square_friends";function c(){var e=t.useState((function(){var e=o.Z.get(l);if(e)return e;var a=r.map((function(e){return Object.assign({},e,{following:!1})}));return o.Z.set(l,a),a})),a=e[0],n=e[1],c=t.useCallback((function(e){return function(a){a.stopPropagation();var t=!1;n((function(a){return a.map((function(a){return a.id!==e||a.following||(t=!0),a.id===e?Object.assign({},a,{following:!a.following}):a}))})),i.ZP.event({action:"Follow",category:"Social",label:t?"Yes":"No"})}}),[]);return t.useEffect((function(){o.Z.set(l,a)}),[a]),{friends:a,toggleFavorite:c,getFriend:function(e){return a.filter((function(a){return a.id===+e}))[0]}}}},2319:function(e,a,n){n.r(a),n.d(a,{default:function(){return u}});var t=n(7294),i=n(5444),r=n(5395),o=n(9069),l=n(8179),c=n(7615),s=n(2556),u=function(e){var a=e.params,n=(0,l.r)(),u=(0,s.q)().getFriend,d=(0,c.s)().dictionary,m=u(a["*"]),f=n.filter((function(e){return+e.name===(null==m?void 0:m.id)&&"covers"===e.relativeDirectory}))[0];return t.createElement("div",{className:"friend-details"},t.createElement(r.Z,{title:"Friend Details"}),t.createElement("div",{className:"go-back"},t.createElement(i.Link,{to:"/"},d.homeBackLink)),m?t.createElement(t.Fragment,null,t.createElement("div",{className:"images"},t.createElement("div",{className:"cover",style:{background:"url("+(null==f?void 0:f.publicURL)+") #ccc",backgroundSize:"cover"}}),t.createElement(o.Z,{className:"avatar",name:""+m.id,directory:"avatars"})),t.createElement("div",{className:"profile"},t.createElement("h2",null,m.name),t.createElement("p",null,m.social),t.createElement("span",null,d.connectedOn,": ",new Date(m.date).toUTCString())),t.createElement("div",{className:"divider"}),t.createElement("div",{className:"bio"},t.createElement("h2",null,d.bio),t.createElement("p",null,m.bio))):t.createElement("div",{className:"empty"},t.createElement("p",null,"No friend found!")))}}}]);
//# sourceMappingURL=component---src-pages-friend-details-tsx-0f7045c35a7ca71dffb8.js.map