import{S as t,i as e,s,j as r,k as a,e as n,m as o,n as i,c as l,a as c,d as p,b as f,o as $,f as u,v as d,r as h,w as m,V as g,X as v,Y as b,Z as k,t as w,g as x,h as R,l as B,G as E,K as j}from"../../chunks/vendor-7a099990.js";import{d as A}from"../../chunks/posts-fddbdacc.js";import{H as L,a as y}from"../../chunks/Header-509bda2d.js";import{A as D}from"../../chunks/Article-d8525212.js";import"../../chunks/Button-f4a1baeb.js";function I(t){var e;let s,r=(null!=(e=t[0].title)?e:t[0].slug)+"";return{c(){s=w(r)},l(t){s=x(t,r)},m(t,e){u(t,s,e)},p(t,e){var a;1&e&&r!==(r=(null!=(a=t[0].title)?a:t[0].slug)+"")&&R(s,r)},d(t){t&&p(s)}}}function H(t){var e;let s,r,o,$,d,h,m,v,b,k,A,L,y,D,I,H,P,T=g(t[0].date).format("LLL")+"",V=(null!=(e=t[0].author)?e:"Responsive")+"",W=(t[0].content?t[1](t[0].content):"Error: Article is missing content")+"";return{c(){s=n("a"),r=w("<- Back"),o=n("br"),$=a(),d=n("i"),h=w("Posted: "),m=w(T),v=n("br"),b=a(),k=n("i"),A=w("Written by: "),L=n("a"),y=w(V),I=a(),P=B(),this.h()},l(t){s=l(t,"A",{href:!0});var e=c(s);r=x(e,"<- Back"),e.forEach(p),o=l(t,"BR",{}),$=i(t),d=l(t,"I",{});var a=c(d);h=x(a,"Posted: "),m=x(a,T),a.forEach(p),v=l(t,"BR",{}),b=i(t),k=l(t,"I",{});var n=c(k);A=x(n,"Written by: "),L=l(n,"A",{target:!0,rel:!0,href:!0});var f=c(L);y=x(f,V),f.forEach(p),n.forEach(p),I=i(t),P=B(),this.h()},h(){var e;f(s,"href","/blog"),f(L,"target","_blank"),f(L,"rel","external"),f(L,"href",D=null!=(e=t[0].link)?e:"https://twitter.com/RespDev"),H=new j(P)},m(t,e){u(t,s,e),E(s,r),u(t,o,e),u(t,$,e),u(t,d,e),E(d,h),E(d,m),u(t,v,e),u(t,b,e),u(t,k,e),E(k,A),E(k,L),E(L,y),u(t,I,e),H.m(W,t,e),u(t,P,e)},p(t,e){var s,r;1&e&&T!==(T=g(t[0].date).format("LLL")+"")&&R(m,T),1&e&&V!==(V=(null!=(s=t[0].author)?s:"Responsive")+"")&&R(y,V),1&e&&D!==(D=null!=(r=t[0].link)?r:"https://twitter.com/RespDev")&&f(L,"href",D),1&e&&W!==(W=(t[0].content?t[1](t[0].content):"Error: Article is missing content")+"")&&H.p(W)},d(t){t&&p(s),t&&p(o),t&&p($),t&&p(d),t&&p(v),t&&p(b),t&&p(k),t&&p(I),t&&p(P),t&&H.d()}}}function P(t){var e,s;let g,v,b,k,w,x,R;return g=new L({props:{title:(null!=(e=t[0].title)?e:t[0].slug)+" | Responsive Blog",description:null!=(s=t[0].description)?s:"The Responsive Blog, who knew this existed?"}}),b=new y({props:{$$slots:{default:[I]},$$scope:{ctx:t}}}),x=new D({props:{animate:!1,$$slots:{default:[H]},$$scope:{ctx:t}}}),{c(){r(g.$$.fragment),v=a(),r(b.$$.fragment),k=a(),w=n("div"),r(x.$$.fragment),this.h()},l(t){o(g.$$.fragment,t),v=i(t),o(b.$$.fragment,t),k=i(t),w=l(t,"DIV",{id:!0});var e=c(w);o(x.$$.fragment,e),e.forEach(p),this.h()},h(){f(w,"id","post")},m(t,e){$(g,t,e),u(t,v,e),$(b,t,e),u(t,k,e),u(t,w,e),$(x,w,null),R=!0},p(t,[e]){var s,r;const a={};1&e&&(a.title=(null!=(s=t[0].title)?s:t[0].slug)+" | Responsive Blog"),1&e&&(a.description=null!=(r=t[0].description)?r:"The Responsive Blog, who knew this existed?"),g.$set(a);const n={};17&e&&(n.$$scope={dirty:e,ctx:t}),b.$set(n);const o={};17&e&&(o.$$scope={dirty:e,ctx:t}),x.$set(o)},i(t){R||(d(g.$$.fragment,t),d(b.$$.fragment,t),d(x.$$.fragment,t),R=!0)},o(t){h(g.$$.fragment,t),h(b.$$.fragment,t),h(x.$$.fragment,t),R=!1},d(t){m(g,t),t&&p(v),m(b,t),t&&p(k),t&&p(w),m(x)}}}async function T({page:t}){const e=t.params,s=A.find((t=>t.slug===e.slug));if(s)return{props:{article:s,db:A}}}function V(t,e,s){g.extend(v);const r=new b,a=new k({softbreak:"<br>"});let{article:n}=e;return t.$$set=t=>{"article"in t&&s(0,n=t.article)},[n,t=>a.render(r.parse(t))]}export default class extends t{constructor(t){super(),e(this,t,V,P,s,{article:0})}}export{T as load};