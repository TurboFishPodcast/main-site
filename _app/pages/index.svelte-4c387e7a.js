import{S as e,i as t,s,I as a,H as n,J as o,j as r,m as i,o as h,K as c,v as l,r as d,w as m,e as f,t as u,k as p,c as g,a as $,g as v,d as y,n as w,b,L as k,M as x,f as j,F as A,h as E,p as R,q as L,B as T,u as W,N as I,A as D,O as H}from"../chunks/vendor-5761e98d.js";import{B as P,H as z,N as S,a as B,F}from"../chunks/Header-352b804d.js";import{A as M}from"../chunks/Article-cb2d9f06.js";function N(e,t,s){const a=e.slice();return a[7]=t[s],a}function _(e){let t,s,a,n,o,c,T,W,I,H,z,S,B,F=e[7].title+"",M=e[7].description+"";const N=[e[7].button,{style:"margin-top: auto; font-size: 1.4rem;"}];let _={};for(let r=0;r<N.length;r+=1)_=D(_,N[r]);return H=new P({props:_}),{c(){t=f("div"),s=f("a"),a=f("h1"),n=u(F),c=p(),T=f("p"),W=p(),I=f("div"),r(H.$$.fragment),z=p(),this.h()},l(e){t=g(e,"DIV",{class:!0});var o=$(t);s=g(o,"A",{href:!0});var r=$(s);a=g(r,"H1",{class:!0});var h=$(a);n=v(h,F),h.forEach(y),r.forEach(y),c=w(o),T=g(o,"P",{}),$(T).forEach(y),W=w(o),I=g(o,"DIV",{style:!0});var l=$(I);i(H.$$.fragment,l),l.forEach(y),z=w(o),o.forEach(y),this.h()},h(){b(a,"class","svelte-1fdouop"),b(s,"href",o=e[7].href),k(I,"display","flex"),k(I,"flex","1"),k(I,"margin-top","1.3rem"),b(t,"class",S=x("card "+e[3]())+" svelte-1fdouop")},m(e,o){j(e,t,o),A(t,s),A(s,a),A(a,n),A(t,c),A(t,T),T.innerHTML=M,A(t,W),A(t,I),h(H,I,null),A(t,z),B=!0},p(e,a){(!B||1&a)&&F!==(F=e[7].title+"")&&E(n,F),(!B||1&a&&o!==(o=e[7].href))&&b(s,"href",o),(!B||1&a)&&M!==(M=e[7].description+"")&&(T.innerHTML=M);const r=1&a?R(N,[L(e[7].button),N[1]]):{};H.$set(r),(!B||8&a&&S!==(S=x("card "+e[3]())+" svelte-1fdouop"))&&b(t,"class",S)},i(e){B||(l(H.$$.fragment,e),B=!0)},o(e){d(H.$$.fragment,e),B=!1},d(e){e&&y(t),m(H)}}}function J(e){let t,s,a=e[0],n=[];for(let r=0;r<a.length;r+=1)n[r]=_(N(e,a,r));const o=e=>d(n[e],1,1,(()=>{n[e]=null}));return{c(){t=f("div");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){t=g(e,"DIV",{class:!0,xyz:!0});var s=$(t);for(let t=0;t<n.length;t+=1)n[t].l(s);s.forEach(y),this.h()},h(){b(t,"class","cards svelte-1fdouop"),b(t,"xyz","fade left-100 duration-6 stagger-3")},m(a,o){j(a,t,o);for(let e=0;e<n.length;e+=1)n[e].m(t,null);e[5](t),s=!0},p(e,s){if(9&s){let r;for(a=e[0],r=0;r<a.length;r+=1){const o=N(e,a,r);n[r]?(n[r].p(o,s),l(n[r],1)):(n[r]=_(o),n[r].c(),l(n[r],1),n[r].m(t,null))}for(T(),r=a.length;r<n.length;r+=1)o(r);W()}},i(e){if(!s){for(let e=0;e<a.length;e+=1)l(n[e]);s=!0}},o(e){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)d(n[t]);s=!1},d(s){s&&y(t),I(n,s),e[5](null)}}}function O(e){let t,s,f;function u(t){e[6](t)}let p={element:e[2],threshold:.3,$$slots:{default:[J]},$$scope:{ctx:e}};return void 0!==e[1]&&(p.intersecting=e[1]),t=new a({props:p}),n.push((()=>o(t,"intersecting",u))),{c(){r(t.$$.fragment)},l(e){i(t.$$.fragment,e)},m(e,s){h(t,e,s),f=!0},p(e,[a]){const n={};4&a&&(n.element=e[2]),1037&a&&(n.$$scope={dirty:a,ctx:e}),!s&&2&a&&(s=!0,n.intersecting=e[1],c((()=>s=!1))),t.$set(n)},i(e){f||(l(t.$$.fragment,e),f=!0)},o(e){d(t.$$.fragment,e),f=!1},d(e){m(t,e)}}}function U(e,t,s){let a,o,r,{cards:i=[]}=t,h=!0;return e.$$set=e=>{"cards"in e&&s(0,i=e.cards)},e.$$.update=()=>{18&e.$$.dirty&&s(3,a=()=>h&&r?(s(4,h=!1),"xyz-in"):h&&!r?"hidden":"xyz-in")},[i,r,o,a,h,function(e){n[e?"unshift":"push"]((()=>{o=e,s(2,o)}))},function(e){r=e,s(1,r)}]}class V extends e{constructor(e){super(),t(this,e,U,O,s,{cards:0})}}function q(e){let t;return{c(){t=u("Responsive is a community which is related to development and technology. Whether you need help, are looking to share a project, or are just looking to be in an active community, we are your north star!")},l(e){t=v(e,"Responsive is a community which is related to development and technology. Whether you need help, are looking to share a project, or are just looking to be in an active community, we are your north star!")},m(e,s){j(e,t,s)},d(e){e&&y(t)}}}function G(e){let t,s,a,n,o,r,i,h,c,l,d,m,p;return{c(){t=u("Welcome to Responsive, a "),s=f("a"),a=u("community"),n=u(" based on tech and development of all kinds! Whether you want to share your ideas, assist others in their coding endeavors, or just want to mingle amongst the masses, this is the place for you! At Responsive, we host many "),o=f("a"),r=u("events"),i=u(" that range in variety: from "),h=f("a"),c=u("livestreams"),l=u(" and "),d=f("a"),m=u("podcasts"),p=u(" to code jams and hackathons. Get comfy, settle in, and begin your journey with the Responsive community!"),this.h()},l(e){t=v(e,"Welcome to Responsive, a "),s=g(e,"A",{href:!0,target:!0});var f=$(s);a=v(f,"community"),f.forEach(y),n=v(e," based on tech and development of all kinds! Whether you want to share your ideas, assist others in their coding endeavors, or just want to mingle amongst the masses, this is the place for you! At Responsive, we host many "),o=g(e,"A",{href:!0});var u=$(o);r=v(u,"events"),u.forEach(y),i=v(e," that range in variety: from "),h=g(e,"A",{href:!0,target:!0});var w=$(h);c=v(w,"livestreams"),w.forEach(y),l=v(e," and "),d=g(e,"A",{href:!0});var b=$(d);m=v(b,"podcasts"),b.forEach(y),p=v(e," to code jams and hackathons. Get comfy, settle in, and begin your journey with the Responsive community!"),this.h()},h(){b(s,"href","https://discord.gg/semsxbP"),b(s,"target","_blank"),b(o,"href","/events"),b(h,"href","https://twitch.tv/vandesm14"),b(h,"target","_blank"),b(d,"href","/podcast")},m(e,f){j(e,t,f),j(e,s,f),A(s,a),j(e,n,f),j(e,o,f),A(o,r),j(e,i,f),j(e,h,f),A(h,c),j(e,l,f),j(e,d,f),A(d,m),j(e,p,f)},d(e){e&&y(t),e&&y(s),e&&y(n),e&&y(o),e&&y(i),e&&y(h),e&&y(l),e&&y(d),e&&y(p)}}}function K(e){let t,s,a,n,o,r,i,h,c,l,d,m,p;return{c(){t=u("The Responsive community started out as just a simple "),s=f("a"),a=u("Twitch channel"),n=u(". Leon (Leonski) and I (TheDevBird) created a "),o=f("a"),r=u("Discord server"),i=u(" to help grow my Twitch community. At that point, all I streamed was web development projects. Since then, the community has grown at an exponential scale. Now, we're not only hosting streams, but regular conversation, "),h=f("a"),c=u("events"),l=u(", and have even started a "),d=f("a"),m=u("podcast series"),p=u(". For the future of Responsive, Leon and I plan on growing much larger than this, with our own help station, multiple events running in parallel, and even a whole stream-team & podcast group!"),this.h()},l(e){t=v(e,"The Responsive community started out as just a simple "),s=g(e,"A",{href:!0,target:!0});var f=$(s);a=v(f,"Twitch channel"),f.forEach(y),n=v(e,". Leon (Leonski) and I (TheDevBird) created a "),o=g(e,"A",{href:!0,target:!0});var u=$(o);r=v(u,"Discord server"),u.forEach(y),i=v(e," to help grow my Twitch community. At that point, all I streamed was web development projects. Since then, the community has grown at an exponential scale. Now, we're not only hosting streams, but regular conversation, "),h=g(e,"A",{href:!0});var w=$(h);c=v(w,"events"),w.forEach(y),l=v(e,", and have even started a "),d=g(e,"A",{href:!0});var b=$(d);m=v(b,"podcast series"),b.forEach(y),p=v(e,". For the future of Responsive, Leon and I plan on growing much larger than this, with our own help station, multiple events running in parallel, and even a whole stream-team & podcast group!"),this.h()},h(){b(s,"href","https://twitch.tv/vandesm14"),b(s,"target","_blank"),b(o,"href","https://discord.gg/semsxbP"),b(o,"target","_blank"),b(h,"href","/events"),b(d,"href","/podcast")},m(e,f){j(e,t,f),j(e,s,f),A(s,a),j(e,n,f),j(e,o,f),A(o,r),j(e,i,f),j(e,h,f),A(h,c),j(e,l,f),j(e,d,f),A(d,m),j(e,p,f)},d(e){e&&y(t),e&&y(s),e&&y(n),e&&y(o),e&&y(i),e&&y(h),e&&y(l),e&&y(d),e&&y(p)}}}function C(e){let t,s,a,n,o,c,f,u,g,$,v,b,k,x;t=new z({props:{title:"Responsive",description:"Responsive is a community which is related to development and technology. Whether you need help, are looking to share a project, or are just looking to be in an active community, we are your north star!"}}),a=new S({});const A=[e[0]];let E={$$slots:{default:[q]},$$scope:{ctx:e}};for(let r=0;r<A.length;r+=1)E=D(E,A[r]);return o=new B({props:E}),f=new M({props:{title:"About Us",$$slots:{default:[G]},$$scope:{ctx:e}}}),g=new M({props:{title:"Our Story",$$slots:{default:[K]},$$scope:{ctx:e}}}),v=new V({props:{cards:e[1]}}),k=new F({}),{c(){r(t.$$.fragment),s=p(),r(a.$$.fragment),n=p(),r(o.$$.fragment),c=p(),r(f.$$.fragment),u=p(),r(g.$$.fragment),$=p(),r(v.$$.fragment),b=p(),r(k.$$.fragment),this.h()},l(e){const r=H('[data-svelte="svelte-1kqz1he"]',document.head);i(t.$$.fragment,r),r.forEach(y),s=w(e),i(a.$$.fragment,e),n=w(e),i(o.$$.fragment,e),c=w(e),i(f.$$.fragment,e),u=w(e),i(g.$$.fragment,e),$=w(e),i(v.$$.fragment,e),b=w(e),i(k.$$.fragment,e),this.h()},h(){document.title="Responsive - Home"},m(e,r){h(t,document.head,null),j(e,s,r),h(a,e,r),j(e,n,r),h(o,e,r),j(e,c,r),h(f,e,r),j(e,u,r),h(g,e,r),j(e,$,r),h(v,e,r),j(e,b,r),h(k,e,r),x=!0},p(e,[t]){const s=1&t?R(A,[L(e[0])]):{};4&t&&(s.$$scope={dirty:t,ctx:e}),o.$set(s);const a={};4&t&&(a.$$scope={dirty:t,ctx:e}),f.$set(a);const n={};4&t&&(n.$$scope={dirty:t,ctx:e}),g.$set(n)},i(e){x||(l(t.$$.fragment,e),l(a.$$.fragment,e),l(o.$$.fragment,e),l(f.$$.fragment,e),l(g.$$.fragment,e),l(v.$$.fragment,e),l(k.$$.fragment,e),x=!0)},o(e){d(t.$$.fragment,e),d(a.$$.fragment,e),d(o.$$.fragment,e),d(f.$$.fragment,e),d(g.$$.fragment,e),d(v.$$.fragment,e),d(k.$$.fragment,e),x=!1},d(e){m(t),e&&y(s),m(a,e),e&&y(n),m(o,e),e&&y(c),m(f,e),e&&y(u),m(g,e),e&&y($),m(v,e),e&&y(b),m(k,e)}}}function Q(e){return[{title:"Welcome to Responsive!",button:{href:"https://discord.gg/semsxbP",title:"Join Us",icon:"/social/discord.png"}},[{title:"Discord",description:"Our server is the main hub of our community with an active userbase of more than 100 members. We all are here if you need help and are always willing to give feedback! Feel free to pop in anytime and say hello!",href:"https://discord.gg/semsxbP",button:{href:"https://discord.gg/semsxbP",title:"Join",inverted:!0}},{title:"Events",description:"We host a variety of weekly events such as hackathons, code jams, and even open discussions! All of these events are open to everyone, even late-arrivals! Most of these events last for about a week, and the results come out 1-3 days after.",href:"/events",button:{href:"/events",title:"Sign Up",inverted:!0}},{title:"Podcasts & Streams",description:'We host a stream at least once per week and release a podcast episode twice per week. Learn more about the podcast <a href="/podcast">here</a> and check out our <a href="https://twitch.tv/vandesm14">Twitch</a> for our livestreams.',href:"/podcast",button:{href:"/podcast",title:"Listen",inverted:!0}}]]}export default class extends e{constructor(e){super(),t(this,e,Q,C,s,{})}}