(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,t,r){e.exports=r(297)},157:function(e,t,r){},162:function(e,t,r){},296:function(e,t,r){},297:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),l=r(6),u=r.n(l),i=(r(157),r(76)),c=(r(162),r(134)),s=r(135),o=r(147),d=r(136),v=r(149),h="APP_HANDLE_STATE",p="APP_GET_DATA",f="APP_SUCCESS_GET_DATA";function m(){return function(e,t){e({type:p})}}function y(e,t){return function(r,a){r({type:h,value:t,field:e})}}var g=r(303),E=r(299),b=r(300),w=r(301),_=r(302),S=r(163),O=g.a.Option,T=function(e){function t(){var e,r;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return(r=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).viewProduk=function(){var e=r.props.appState;return n.a.createElement("div",{className:"content"},e.viewProduct.map(function(e,t){return n.a.createElement("div",{key:t,className:"content-item"},n.a.createElement("div",{style:{margin:"30px"}},n.a.createElement("div",{className:"content-item-name"},e.name),n.a.createElement("div",{className:"content-item-price"},"IDR ",S(e.price).format("0,0")),n.a.createElement("p",null,e.description.substring(0,140)),n.a.createElement("div",{className:"content-item-furniture"},n.a.createElement("ul",null,e.furniture_style.map(function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("li",null,e))}))),n.a.createElement("p",{className:"content-item-desc"},"Delivery Days ",e.delivery_time)))}))},r.handleState=function(e,t){var a=r.props,n=a.handleState,l=a.appState;if("deliveryTime"==e){for(var u=[],i=0;l.deliveryTime.length>i;i++)for(var c=0;t.length>c;c++)if(l.deliveryTime[i].value==t[c]){u.push({value:l.deliveryTime[i].value,label:l.deliveryTime[i].label});break}n(e,u)}else n(e,t)},r}return Object(v.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){(0,this.props.getdata)()}},{key:"render",value:function(){var e=this,t=this.props.appState,r=this.props.form.getFieldDecorator;return n.a.createElement("div",null,n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"positionHeader"},n.a.createElement(E.a,null,n.a.createElement(b.a,{span:24},n.a.createElement(w.a.Item,{hasFeedback:!0},r("furniture",{initialValue:t.search.furniture,onChange:function(t){return e.handleState("furniture",t.currentTarget.value)},rules:[{required:!1,message:""}]})(n.a.createElement(_.a,{placeholder:"Search Furniture",size:"large",style:{width:"40%"},disabled:0!=t.search.furnitureStyle.length||0!=t.search.deliveryTime.length}))))),n.a.createElement(E.a,null,n.a.createElement(b.a,{span:12},n.a.createElement(w.a.Item,{hasFeedback:!0},r("branch_id",{initialValue:t.search.furnitureStyle,onChange:function(t){return e.handleState("furnitureStyle",t)},rules:[{required:!1,message:""}]})(n.a.createElement(g.a,{mode:"multiple",optionFilterProp:"children",style:{width:"80%"},placeholder:"Please select Furniture Style",size:"large",disabled:""!=t.search.furniture||0!=t.search.deliveryTime.length},t.furniture_styles.map(function(e,t){return n.a.createElement(O,{key:t,value:e},e)}))))),n.a.createElement(b.a,{span:12},n.a.createElement(w.a.Item,{hasFeedback:!0},r("deliveryTime",{initialValue:0!=t.search.deliveryTime.length?[]:t.search.deliveryTime,onChange:function(t){return e.handleState("deliveryTime",t)},rules:[{required:!1,message:""}]})(n.a.createElement(g.a,{mode:"multiple",optionFilterProp:"children",style:{width:"80%"},size:"large",placeholder:"Please select Delivery Time",disabled:""!=t.search.furniture||0!=t.search.furnitureStyle},t.deliveryTime.map(function(e,t){return n.a.createElement(O,{key:t,value:e.value},e.label)})))))))),this.viewProduk())}}]),t}(a.Component),k={getdata:m,handleState:y},P=w.a.create()(T),j=Object(i.b)(function(e){return{appState:e.App}},k)(P),N=r(52),A=r(34),D=r(148),x=r(75),I={search:{furniture:"",furnitureStyle:[],deliveryTime:[]},furniture_styles:[],deliveryTime:[{value:"7",label:"1 Week"},{value:"14",label:"2 Week"},{value:"31",label:"1 Month"},{value:"32",label:"1 Month >"}],products:[],viewProduct:[]};var C={App:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:var r,a=[];return"furniture"==t.field?function(){var r,n;if(r=t.value.toUpperCase(),0==e.search.furnitureStyle.length&&0==e.search.deliveryTime.length?""!=t.value&&e.search.furniture.length>t.value.length?n=e.products:""!=t.value&&e.search.furniture.length<t.value.length?n=e.viewProduct:e.products.map(function(e){a.push(e)}):n=e.viewProduct,0==a.length)for(var l=0;l<n.length;l++)n[l].name.toUpperCase().indexOf(r)>-1&&a.push(n[l])}():"furnitureStyle"==t.field?function(){if(0==e.search.furnitureStyle.length&&0!=t.value.length?r=e.viewProduct:e.search.furnitureStyle.length<t.value.length?r=e.viewProduct:e.search.furnitureStyle.length>t.value.length&&0!=t.value.length?r=e.products:1==e.search.furnitureStyle.length&&0==t.value.length&&e.products.map(function(e){a.push(e)}),0==a.length)for(var n=0;r.length>n;n++)for(var l=0;r[n].furniture_style.length>l;l++){!t.value.some(function(e){return!r[n].furniture_style.includes(e)})&&r[n].furniture_style.length>=t.value.length&&a.push(r[n]);break}}():0!=t.value.length?e.products.filter(function(e){for(var r=0;t.value.length>r;r++){if("32"!=t.value[r].value&&parseInt(e.delivery_time)<=parseInt(t.value[r].value))return a.push(e),!0;if("32"==t.value[r].value&&parseInt(e.delivery_time)>=parseInt(t.value[r].value))return a.push(e),!0}return!1}):e.products.map(function(e){a.push(e)}),Object(N.a)({},e,{search:Object(N.a)({},e.search,Object(x.a)({},t.field,t.value)),viewProduct:a});case f:return Object(N.a)({},e,{furniture_styles:t.furniture_styles,products:t.products,viewProduct:t.products})}return e}},F=r(37),M=r.n(F),U=r(43),V=r(145),W=r.n(V),L=M.a.mark(q),X=M.a.mark(z);function q(){var e;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(U.b)(function(){return W.a.get("https://www.mocky.io/v2/5c9105cb330000112b649af8").then(function(e){return e.data}).catch(function(e){return e})});case 3:return e=t.sent,t.next=6,Object(U.c)({type:f,furniture_styles:e.furniture_styles,products:e.products});case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Login error",t.t0);case 11:case"end":return t.stop()}},L,null,[[0,8]])}function z(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.a)([Object(U.d)(p,q)]);case 2:case"end":return e.stop()}},X)}var R=M.a.mark(B);function B(e){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.a)([z()]);case 2:case"end":return e.stop()}},R)}var G=r(146),H=Object(D.a)(),J=[G.a,H],$="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):A.d,K=Object(A.e)(Object(A.c)(Object(N.a)({},C)),$(A.a.apply(void 0,J)));H.run(B);r(296);var Q=function(){return n.a.createElement(i.a,{store:K},n.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(n.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[152,1,2]]]);
//# sourceMappingURL=main.d7af1955.chunk.js.map