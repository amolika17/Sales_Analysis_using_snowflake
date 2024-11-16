"use strict";(self.webpackChunk_snowflake_nu_ui=self.webpackChunk_snowflake_nu_ui||[]).push([[70427],{643110:(e,o,n)=>{n.d(o,{e:()=>t});const t="authparams"},4269:(e,o,n)=>{n.d(o,{b:()=>t});const t="currentrole"},386413:(e,o,n)=>{n.d(o,{Q:()=>t});const t="currentsecondaryroles"},299905:(e,o,n)=>{n.d(o,{C:()=>t});const t=/^([0-9a-z_]*[\w-]*-)?([df][0-9a-zA-Z]+(?::[^@]+)?)$/u},930585:(e,o,n)=>{n.d(o,{l:()=>t});const t="snowflakeContext"},704194:(e,o,n)=>{n.d(o,{T:()=>r,X:()=>t});const t=window.numeracy||{};Object.defineProperty(window,"numeracy",{get:()=>t,set:e=>(Object.assign(t,e),t),configurable:!0});const r=window.pageParams||{};Object.defineProperty(window,"pageParams",{get:()=>r,set:e=>(Object.assign(r,e),r),configurable:!0});const a={num:-1,time:"2024-11-04T14:59:16.495Z",version:"241104-2-7177c086e8",appServerUrl:""}||{};window.build=a,t.clientVersion=a.version,t.appServerUrl=a.appServerUrl,t.injectableAfterLoad=!0},974620:(e,o,n)=>{n.d(o,{h:()=>i,x:()=>l});var t=n(704194);if(59625!=n.j)var r=n(958673);if(59625!=n.j)var a=n(807737);if(59625!=n.j)var s=n(527861);const l={userId:"X-Numeracy-UserId",clientVersion:"X-Numeracy-Client-Version",privateLinkHost:"X-Snowflake-Privatelink-Host",snowflakeContext:"X-Snowflake-Context",encodedSnowflakeContext:"X-Snowflake-Context-Encoded",snowflakeRole:"X-Snowflake-Role",encodedSnowflakeRole:"X-Snowflake-Role-Encoded",csrfToken:"X-CSRF-Token",encodedSnowflakeSecondaryRoles:"X-Snowflake-Secondary-Roles-Encoded"};function i(e,o,n,i){var c,d,u,v;const f=Object.assign({},null!=n?n:{}),p=Object.assign({},null!==(c=f.headers)&&void 0!==c?c:{});if(f.credentials="include",null!=o&&(p[l.userId]=`${o}`),t.X.clientVersion&&(p[l.clientVersion]=t.X.clientVersion),(0,s.r)(window.location.hostname)&&(p[l.privateLinkHost]=window.location.origin),e.userKey&&(p[l.snowflakeContext]=e.userKey),e.decodedUserKey)try{p[l.encodedSnowflakeContext]=(0,r.U)(e.decodedUserKey)}catch(e){null==i||i.error(e,{message:"Failed to generate x-snowflake-context-encoded"})}if(e.role){(0,a._)(e.role)&&(p[l.snowflakeRole]=e.role);try{p[l.encodedSnowflakeRole]=(0,r.U)(e.role)}catch(e){null==i||i.error(e,{message:"Failed to generate x-snowflake-role-encoded"})}}if("enabled"===(null===(v=null===(u=null===(d=t.X.stores)||void 0===d?void 0:d.user)||void 0===u?void 0:u.parameters)||void 0===v?void 0:v.UI_ENABLE_SECONDARY_ROLES_IN_PROVIDER_STUDIO)&&e.secondaryRoles)try{p[l.encodedSnowflakeSecondaryRoles]=(0,r.U)(e.secondaryRoles)}catch(e){null==i||i.error(e,{message:"Failed to generate X-Snowflake-Secondary-Roles-Encoded"})}return[f,p]}},958673:(e,o,n)=>{n.d(o,{U:()=>t});const t=e=>`1#${encodeURIComponent(e)}`},384561:(e,o,n)=>{n.d(o,{i:()=>a});var t=n(491798);if(93069==n.j)var r=n(643110);const a=e=>{const o=e.searchParams.get(r.e),n=t.get(o||r.e);if(n)try{return JSON.parse(atob(n))}catch(e){return null}return null}},547197:(e,o,n)=>{n.d(o,{j:()=>a});var t=n(491798);if(93069==n.j)var r=n(930585);const a=e=>{var o,n;const a=null!==(o=sessionStorage.getItem(r.l))&&void 0!==o?o:t.get(r.l);return a&&null!==(n=e[a])&&void 0!==n?n:null}},556248:(e,o,n)=>{if(n.d(o,{q:()=>r}),93069==n.j)var t=n(844074);const r=(e,o)=>{var n,r,a;const[s,l]=(0,t.v)(e);let i=null;for(const e in o){const t=o[e],c=null===(n=t.account)||void 0===n?void 0:n.toLowerCase(),d=null===(r=t.region)||void 0===r?void 0:r.toLowerCase();c===s&&d===l&&(!i||t.updated&&t.updated>(null!==(a=i.updated)&&void 0!==a?a:0))&&(i=t)}return i}},313586:(e,o,n)=>{if(n.d(o,{l:()=>r}),93069==n.j)var t=n(529708);const r=(e,o)=>{var n,r,a;const[s,l]=(0,t.r)(e);let i=null;for(const e in o){const t=o[e],c=null===(n=t.snowflakeOrgName)||void 0===n?void 0:n.toLowerCase(),d=null===(r=t.accountAlias)||void 0===r?void 0:r.toLowerCase();c===s&&d===l&&(!i||t.updated&&t.updated>(null!==(a=i.updated)&&void 0!==a?a:0))&&(i=t)}return i}},919978:(e,o,n)=>{if(n.d(o,{N:()=>a}),93069==n.j)var t=n(556248);if(93069==n.j)var r=n(313586);const a=(e,o)=>{var n;return null!==(n=(0,r.l)(e,o))&&void 0!==n?n:(0,t.q)(e,o)}},226993:(e,o,n)=>{function t(e,o){return!e||o&&(t=o,(n=e).region===t.region&&n.account===t.account||n.snowflakeOrgName===t.snowflakeOrgName&&n.accountAlias===t.accountAlias)?o:e;var n,t}n.d(o,{$:()=>t})},686285:(e,o,n)=>{n.d(o,{F:()=>v});var t=n(491798);if(93069==n.j)var r=n(4269);if(93069==n.j)var a=n(386413);if(93069==n.j)var s=n(930585);var l=n(384561),i=n(547197);if(93069==n.j)var c=n(919978);if(93069==n.j)var d=n(226993);if(93069==n.j)var u=n(852389);const v=e=>{var o,n;if("LOGIN_FAILED"===new URLSearchParams(window.location.search).get("error"))return null;const v=JSON.parse(null!==(o=localStorage.getItem("loggedInAccounts"))&&void 0!==o?o:"{}"),f=(0,i.j)(v),p=null!==(n=(0,l.i)(e))&&void 0!==n?n:(0,d.$)((0,c.N)(e,v),f);if(p){f!==p&&(sessionStorage.removeItem(r.b),sessionStorage.removeItem(a.Q));const e=(0,u.q)(p);sessionStorage.setItem(s.l,e),t.set(s.l,e)}return p}},59240:(e,o,n)=>{n.d(o,{O:()=>r});var t=n(471299);function r(e){const o=decodeURIComponent(escape(e.username));return(0,t.N)(o,e.url)}},852389:(e,o,n)=>{n.d(o,{q:()=>r});var t=n(471299);const r=e=>(0,t.N)(e.username,e.url)},529708:(e,o,n)=>{n.d(o,{r:()=>t});const t=e=>{const[o,n,t]=e.pathname.split("/").map((e=>e.toLowerCase()));return[n,t]}},565901:(e,o,n)=>{if(n.d(o,{s:()=>s}),/^(7673|9306)9$/.test(n.j))var t=n(299905);const r=e=>(e||"").split("-").slice(-1)[0],a=()=>!!window.location.hash&&window.location.hash.startsWith("#/");function s(){let e=window.location.pathname;if("/"===e&&(e=""),!a())return e;const o=window.location.hash.split("/");if(2!==o.length)return e;const[n,s]=o;return s&&t.C.test(s)&&(e+=r(s)),e}},844074:(e,o,n)=>{n.d(o,{v:()=>t});const t=e=>{const[o,n,t]=e.pathname.split("/").map((e=>e.toLowerCase()));return[t,n]}},807737:(e,o,n)=>{n.d(o,{_:()=>t});const t=e=>!/[^\u0000-\u00ff]/g.test(e)},527861:(e,o,n)=>{n.d(o,{r:()=>r});const t=[".privatelink.testdns.snowflakecomputing.com",".privatelink.snowflakecomputing.com",".privatelink.int.snowflakecomputing.com",".privatelink.int.snowflake.local",".privatelink.snowflake.local",".privatelink.snowflake.snowsaas.cn",".privatelink.snowflakecomputing.com.cn",".privatelink.snowflakecomputing.cn"];function r(e){return""!==(o=e,t.find((e=>null==o?void 0:o.endsWith(e)))||"");var o}},471814:(e,o,n)=>{n.d(o,{l:()=>a});var t=n(704194);const r="prefetch_bootstrap__";function a({args:e,observableName:o}){t.X.bootstrapFetches=t.X.bootstrapFetches||{},t.X.bootstrapFetches.observableFetches=t.X.bootstrapFetches.observableFetches||{fetches:[]};const n=fetch(...e);return t.X.bootstrapFetches.observableFetches.fetches.push({args:e,response:n,datadogName:`${r}${o}`,absolutePath:new URL(e[0].toString(),document.baseURI).href}),n}},539399:(e,o,n)=>{n.d(o,{C:()=>i});var t=n(974620);if(93069==n.j)var r=n(59240);if(93069==n.j)var a=n(852389);if(93069==n.j)var s=n(565901);var l=n(471814);function i(e){var o;const n={appServerUrl:e.appServerUrl,userKey:(0,a.q)(e),decodedUserKey:(0,r.O)(e),role:null!==(o=sessionStorage.getItem("currentrole"))&&void 0!==o?o:void 0},i=`/bootstrap${(0,s.s)()+window.location.search}`,[c,d]=(0,t.h)(n,void 0,void 0,console);return{fetchResponse:(0,l.l)({args:[`${n.appServerUrl}${i}`,Object.assign(Object.assign({},c),{headers:d})],observableName:"app_bootstrap"}),path:i,requestContext:n}}},471299:(e,o,n)=>{function t(e,o){return`${e}::${o}`}n.d(o,{N:()=>t})},302282:(e,o,n)=>{var t,r;n.d(o,{q:()=>r}),function(e){e.SUSPENDED="SUSPENDED",e.ACTIVE="ACTIVE",e.INACTIVE="INACTIVE"}(t||(t={})),function(e){e[e.local=1]="local",e[e.staging=2]="staging",e[e.production=3]="production"}(r||(r={}))}}]);
//# sourceMappingURL=initialization-3a2a3d236c389fcf02a1.js.map