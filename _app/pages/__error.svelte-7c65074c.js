import{S as t,i as e,s as r,j as s,k as n,P as a,m as $,d as o,n as m,o as c,f,v as i,r as u,w as g,t as l,g as p,h as d}from"../chunks/vendor-3096e885.js";import{H as h,a as x,A as w}from"../chunks/Article-3ca39da2.js";import{N as j,F as k}from"../chunks/Footer-c15cb8ae.js";import"../chunks/Button-0fba133b.js";function v(t){let e;return{c(){e=l("Error")},l(t){e=p(t,"Error")},m(t,r){f(t,e,r)},d(t){t&&o(e)}}}function E(t){let e;return{c(){e=l(t[0])},l(r){e=p(r,t[0])},m(t,r){f(t,e,r)},p(t,r){1&r&&d(e,t[0])},d(t){t&&o(e)}}}function b(t){let e,r,l,p,d,b,y,A,F,B;return e=new h({props:{title:"Responsive | Error",description:"If you're seeing this, someone decided to share an error page"}}),l=new j({}),d=new x({props:{$$slots:{default:[v]},$$scope:{ctx:t}}}),y=new w({props:{$$slots:{default:[E]},$$scope:{ctx:t}}}),F=new k({}),{c(){s(e.$$.fragment),r=n(),s(l.$$.fragment),p=n(),s(d.$$.fragment),b=n(),s(y.$$.fragment),A=n(),s(F.$$.fragment)},l(t){const s=a('[data-svelte="svelte-11me0n5"]',document.head);$(e.$$.fragment,s),s.forEach(o),r=m(t),$(l.$$.fragment,t),p=m(t),$(d.$$.fragment,t),b=m(t),$(y.$$.fragment,t),A=m(t),$(F.$$.fragment,t)},m(t,s){c(e,document.head,null),f(t,r,s),c(l,t,s),f(t,p,s),c(d,t,s),f(t,b,s),c(y,t,s),f(t,A,s),c(F,t,s),B=!0},p(t,[e]){const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),d.$set(r);const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),y.$set(s)},i(t){B||(i(e.$$.fragment,t),i(l.$$.fragment,t),i(d.$$.fragment,t),i(y.$$.fragment,t),i(F.$$.fragment,t),B=!0)},o(t){u(e.$$.fragment,t),u(l.$$.fragment,t),u(d.$$.fragment,t),u(y.$$.fragment,t),u(F.$$.fragment,t),B=!1},d(t){g(e),t&&o(r),g(l,t),t&&o(p),g(d,t),t&&o(b),g(y,t),t&&o(A),g(F,t)}}}function y({error:t,status:e}){return{props:{title:`${e}: ${t.message}`}}}function A(t,e,r){let{title:s}=e;return t.$$set=t=>{"title"in t&&r(0,s=t.title)},[s]}export default class extends t{constructor(t){super(),e(this,t,A,b,r,{title:0})}}export{y as load};
