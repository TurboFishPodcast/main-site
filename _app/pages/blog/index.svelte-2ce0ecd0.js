import{S as t,i as e,s,j as n,k as $,m as o,n as r,o as a,f as c,x as f,u as l,v as m,d as p,t as i,g,l as u,H as d}from"../../chunks/vendor-a4c26494.js";import{H as h,a as v,A as x}from"../../chunks/Article-ae05f6b3.js";import{B as w}from"../../chunks/Button-f1401b69.js";import{P as j}from"../../chunks/Loader.svelte_svelte&type=style&lang-21616104.js";import{L as k}from"../../chunks/Loader-297fa06e.js";function b(t){let e;return{c(){e=i("Blog")},l(t){e=g(t,"Blog")},m(t,s){c(t,e,s)},d(t){t&&p(e)}}}function y(t){let e,s;return e=new w({props:{$$slots:{default:[A]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){a(e,t,n),s=!0},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){m(e,t)}}}function B(t){let e,s;return e=new w({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){a(e,t,n),s=!0},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){m(e,t)}}}function A(t){let e;return{c(){e=i("Next")},l(t){e=g(t,"Next")},m(t,s){c(t,e,s)},d(t){t&&p(e)}}}function L(t){let e;return{c(){e=i("Prev")},l(t){e=g(t,"Prev")},m(t,s){c(t,e,s)},d(t){t&&p(e)}}}function P(t){let e,s,n,$;const o=[B,y],r=[];return~(e=-1)&&(s=r[-1]=o[-1](t)),{c(){s&&s.c(),n=u()},l(t){s&&s.l(t),n=u()},m(t,e){c(t,n,e),$=!0},p:d,i(t){$||(f(s),$=!0)},o(t){l(s),$=!1},d(t){t&&p(n)}}}function R(t){var e;let s,i,g,u;return s=new k({props:{bool:0===(null==(e=t[0])?void 0:e.length)}}),g=new j({props:{posts:t[0],$$slots:{default:[P]},$$scope:{ctx:t}}}),{c(){n(s.$$.fragment),i=$(),n(g.$$.fragment)},l(t){o(s.$$.fragment,t),i=r(t),o(g.$$.fragment,t)},m(t,e){a(s,t,e),c(t,i,e),a(g,t,e),u=!0},p(t,e){var n;const $={};1&e&&($.bool=0===(null==(n=t[0])?void 0:n.length)),s.$set($);const o={};1&e&&(o.posts=t[0]),2&e&&(o.$$scope={dirty:e,ctx:t}),g.$set(o)},i(t){u||(f(s.$$.fragment,t),f(g.$$.fragment,t),u=!0)},o(t){l(s.$$.fragment,t),l(g.$$.fragment,t),u=!1},d(t){m(s,t),t&&p(i),m(g,t)}}}function H(t){let e,s,i,g,u,d;return e=new h({props:{title:"Responsive | Blog",description:"The Responsive Blog, who knew this existed?"}}),i=new v({props:{$$slots:{default:[b]},$$scope:{ctx:t}}}),u=new x({props:{title:"Recent Articles",$$slots:{default:[R]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=$(),n(i.$$.fragment),g=$(),n(u.$$.fragment)},l(t){o(e.$$.fragment,t),s=r(t),o(i.$$.fragment,t),g=r(t),o(u.$$.fragment,t)},m(t,n){a(e,t,n),c(t,s,n),a(i,t,n),c(t,g,n),a(u,t,n),d=!0},p(t,[e]){const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),i.$set(s);const n={};3&e&&(n.$$scope={dirty:e,ctx:t}),u.$set(n)},i(t){d||(f(e.$$.fragment,t),f(i.$$.fragment,t),f(u.$$.fragment,t),d=!0)},o(t){l(e.$$.fragment,t),l(i.$$.fragment,t),l(u.$$.fragment,t),d=!1},d(t){m(e,t),t&&p(s),m(i,t),t&&p(g),m(u,t)}}}async function N({page:t,fetch:e}){t.params;const s=await e("https://responsivedev.github.io/blog/dist/feed-0.json"),n=await s.json();if(n)return{props:{posts:n.items}}}const S=!0;function T(t,e,s){let{posts:n}=e;return t.$$set=t=>{"posts"in t&&s(0,n=t.posts)},[n]}class _ extends t{constructor(t){super(),e(this,t,T,H,s,{posts:0})}}export{_ as default,N as load,S as prerender};
