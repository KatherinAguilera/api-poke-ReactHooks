(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],[,,,,,,,,function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),s=c(9),i=c.n(s),j=(c(15),c(2)),o=(c(16),r.a.createContext(null));function d(){var e=Object(a.useContext)(o),t=e.darkMode,c=e.setDarkMode;return Object(n.jsxs)("div",{className:"App-header ".concat(t?"HeaderDark":"HeaderLight"," "),children:[Object(n.jsx)("h1",{children:"Poke API"}),Object(n.jsx)("div",{className:"button",children:Object(n.jsx)("button",{type:"button",onClick:function(){c(!t)},children:t?"Dark \ud83c\udf11":"Light \ud83c\udf1e"})})]})}var l=c(7),u=c(4),b=(c(17),c(8),c(18),function(){return Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("div",{className:"loadingio-spinner-bean-eater-elz00pqdd3u",children:Object(n.jsxs)("div",{className:"ldio-2mentkvc9re",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})]})})})}),O=function(e){var t=e.searchTerm,c=e.searchInput,a=e.handleSearch;return Object(n.jsx)("div",{className:"search",children:Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{className:"searchTerm",id:"element",type:"text",placeholder:"Busca tu pokemon!",value:t,onChange:a,ref:c}),Object(n.jsx)("label",{htmlFor:"element",children:"Pokem\xf3n"})]})})},h=c.p+"static/media/noPokemon.6284722a.jpg",f=function(e){var t=e.searchResults,c=e.isCharacterInFavorites,a=e.handleFavorite;return Object(n.jsxs)("div",{className:"Characters",children:[t.map((function(e,t){return Object(n.jsx)("div",{id:e.id,children:Object(n.jsxs)("div",{className:"Character",children:[Object(n.jsx)("img",{src:e.sprites.front_default,alt:"pokemon"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"Character--name",children:e.name}),Object(n.jsxs)("p",{className:"Character--type",children:["Type: ",e.types[0].type.name]})]}),Object(n.jsx)("button",{className:"Character--buttonFav ".concat(c(e)?"btn-delete":"btn-add"," "),type:"button",onClick:function(){return a(e)},children:c(e)?"Eliminar de favoritos":"Agregar a favoritos"})]})},e.id)})),0===t.length?Object(n.jsxs)("div",{className:"no-found",children:[Object(n.jsx)("article",{children:Object(n.jsx)("p",{children:"Don't found Pokemon :("})}),Object(n.jsx)("img",{src:h,alt:"Pokemon no encontrado"})]}):null]})},v={favorites:[]},m=function(e,t){switch(t.type){case"ADD_TO_FAVORITE":return Object(u.a)(Object(u.a)({},e),{},{favorites:[].concat(Object(l.a)(e.favorites),[t.payload])});case"REMOVE_FROM_FAVORITES":return Object(u.a)(Object(u.a)({},e),{},{favorites:Object(l.a)(e.favorites.filter((function(e){return e!==t.payload})))});default:return e}},x=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=(t[0],t[1]),r=Object(a.useState)([]),s=Object(j.a)(r,2),i=s[0],o=s[1],d=Object(a.useState)("true"),l=Object(j.a)(d,2),u=l[0],h=l[1],x=Object(a.useReducer)(m,v),p=Object(j.a)(x,2),k=p[0],g=p[1],C=Object(a.useState)(""),F=Object(j.a)(C,2),N=F[0],_=F[1],y=Object(a.useState)([]),S=Object(j.a)(y,2),T=S[0],E=S[1],R=Object(a.useState)([]),D=Object(j.a)(R,2),I=(D[0],D[1],Object(a.useRef)(null)),P=Object(a.useCallback)((function(){_(I.current.value)}));Object(a.useEffect)((function(){var e=T.filter((function(e){return e.name.toLowerCase().includes(N)}));E(e),""===N&&E(i)}),[N]);var A=[];Object(a.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon/?limit=500").then((function(e){return e.json()})).then((function(e){return c(e.results.map((function(e){return fetch(e.url).then((function(e){return e.json()})).then((function(e){return A.push(e)})),o(A),E(A),g(A),e.url})))}))}),[]),setTimeout((function(){h(!1)}),1e3);var M=function(e){return k.favorites.find((function(t,c){return t.id===e.id}))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{searchTerm:N,searchInput:I,handleSearch:P}),Object(n.jsx)("div",{className:"",children:u?Object(n.jsx)(b,{}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"Characters__favorites",children:[Object(n.jsx)("p",{className:"Character__title",children:"Pokemones favoritos:"}),k.favorites.map((function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"Characters--favorite",children:Object(n.jsx)("img",{src:e.sprites.front_default,alt:"pokemon"})})},e.id)})}))]}),Object(n.jsx)(f,{searchResults:T,isCharacterInFavorites:M,handleFavorite:function(e){g({type:M(e)?"REMOVE_FROM_FAVORITES":"ADD_TO_FAVORITE",payload:e})}})]})})]})};var p=function(){var e=Object(a.useState)(!0),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(n.jsx)(o.Provider,{value:{darkMode:c,setDarkMode:r},children:Object(n.jsxs)("div",{className:c?"Dark":"Light",children:[Object(n.jsx)(d,{}),Object(n.jsx)("div",{className:"Content",children:Object(n.jsx)(x,{})})]})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(o.Provider,{value:"red",children:Object(n.jsx)(p,{})})}),document.getElementById("root")),k()}],[[19,1,2]]]);
//# sourceMappingURL=main.46efcee6.chunk.js.map