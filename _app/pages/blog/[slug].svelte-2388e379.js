import{S as t,i as e,s,j as r,k as a,e as n,m as o,n as i,c as l,a as c,d as p,b as $,o as f,f as u,v as d,r as h,w as m,Y as g,_ as v,$ as k,a0 as w,t as b,g as x,h as R,l as B,J as E,M as A}from"../../chunks/vendor-1d4a7f7a.js";import{d as L}from"../../chunks/posts-fddbdacc.js";import{H as j,a as y,A as D}from"../../chunks/Article-d8556d34.js";import"../../chunks/Button-0ca1a037.js";function I(t){var e;let s,r=(null!=(e=t[0].title)?e:t[0].slug)+"";return{c(){s=b(r)},l(t){s=x(t,r)},m(t,e){u(t,s,e)},p(t,e){var a;1&e&&r!==(r=(null!=(a=t[0].title)?a:t[0].slug)+"")&&R(s,r)},d(t){t&&p(s)}}}function P(t){var e;let s,r,o,f,d,h,m,v,k,w,L,j,y,D,I,P,T,W=g(t[0].date).format("LLL")+"",_=(null!=(e=t[0].author)?e:"Responsive")+"",H=(t[0].content?t[1](t[0].content):"Error: Article is missing content")+"";return{c(){s=n("a"),r=b("<- Back"),o=n("br"),f=a(),d=n("i"),h=b("Posted: "),m=b(W),v=n("br"),k=a(),w=n("i"),L=b("Written by: "),j=n("a"),y=b(_),I=a(),T=B(),this.h()},l(t){s=l(t,"A",{href:!0});var e=c(s);r=x(e,"<- Back"),e.forEach(p),o=l(t,"BR",{}),f=i(t),d=l(t,"I",{});var a=c(d);h=x(a,"Posted: "),m=x(a,W),a.forEach(p),v=l(t,"BR",{}),k=i(t),w=l(t,"I",{});var n=c(w);L=x(n,"Written by: "),j=l(n,"A",{target:!0,rel:!0,href:!0});var $=c(j);y=x($,_),$.forEach(p),n.forEach(p),I=i(t),T=B(),this.h()},h(){var e;$(s,"href","/blog"),$(j,"target","_blank"),$(j,"rel","external"),$(j,"href",D=null!=(e=t[0].link)?e:"https://twitter.com/RespDev"),P=new A(T)},m(t,e){u(t,s,e),E(s,r),u(t,o,e),u(t,f,e),u(t,d,e),E(d,h),E(d,m),u(t,v,e),u(t,k,e),u(t,w,e),E(w,L),E(w,j),E(j,y),u(t,I,e),P.m(H,t,e),u(t,T,e)},p(t,e){var s,r;1&e&&W!==(W=g(t[0].date).format("LLL")+"")&&R(m,W),1&e&&_!==(_=(null!=(s=t[0].author)?s:"Responsive")+"")&&R(y,_),1&e&&D!==(D=null!=(r=t[0].link)?r:"https://twitter.com/RespDev")&&$(j,"href",D),1&e&&H!==(H=(t[0].content?t[1](t[0].content):"Error: Article is missing content")+"")&&P.p(H)},d(t){t&&p(s),t&&p(o),t&&p(f),t&&p(d),t&&p(v),t&&p(k),t&&p(w),t&&p(I),t&&p(T),t&&P.d()}}}function T(t){var e,s;let g,v,k,w,b,x,R;return g=new j({props:{title:(null!=(e=t[0].title)?e:t[0].slug)+" | Responsive Blog",description:null!=(s=t[0].description)?s:"The Responsive Blog, who knew this existed?"}}),k=new y({props:{$$slots:{default:[I]},$$scope:{ctx:t}}}),x=new D({props:{animate:!1,$$slots:{default:[P]},$$scope:{ctx:t}}}),{c(){r(g.$$.fragment),v=a(),r(k.$$.fragment),w=a(),b=n("div"),r(x.$$.fragment),this.h()},l(t){o(g.$$.fragment,t),v=i(t),o(k.$$.fragment,t),w=i(t),b=l(t,"DIV",{id:!0});var e=c(b);o(x.$$.fragment,e),e.forEach(p),this.h()},h(){$(b,"id","post")},m(t,e){f(g,t,e),u(t,v,e),f(k,t,e),u(t,w,e),u(t,b,e),f(x,b,null),R=!0},p(t,[e]){var s,r;const a={};1&e&&(a.title=(null!=(s=t[0].title)?s:t[0].slug)+" | Responsive Blog"),1&e&&(a.description=null!=(r=t[0].description)?r:"The Responsive Blog, who knew this existed?"),g.$set(a);const n={};17&e&&(n.$$scope={dirty:e,ctx:t}),k.$set(n);const o={};17&e&&(o.$$scope={dirty:e,ctx:t}),x.$set(o)},i(t){R||(d(g.$$.fragment,t),d(k.$$.fragment,t),d(x.$$.fragment,t),R=!0)},o(t){h(g.$$.fragment,t),h(k.$$.fragment,t),h(x.$$.fragment,t),R=!1},d(t){m(g,t),t&&p(v),m(k,t),t&&p(w),t&&p(b),m(x)}}}async function W({page:t}){const e=t.params,s=L.find((t=>t.slug===e.slug));if(s)return{props:{article:s,db:L}}}function _(t,e,s){g.extend(v);const r=new k,a=new w({softbreak:"<br>"});let{article:n}=e;return t.$$set=t=>{"article"in t&&s(0,n=t.article)},[n,t=>a.render(r.parse(t))]}export default class extends t{constructor(t){super(),e(this,t,_,T,s,{article:0})}}export{W as load};
