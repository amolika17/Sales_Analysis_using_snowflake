(()=>{var e={349051:(e,t)=>{t.defaults={},t.set=function(e,n,r){var o=r||{},a=t.defaults,s=o.expires||a.expires,i=o.domain||a.domain,c=void 0!==o.path?o.path:void 0!==a.path?a.path:"/",l=void 0!==o.secure?o.secure:a.secure,u=void 0!==o.httponly?o.httponly:a.httponly,d=void 0!==o.samesite?o.samesite:a.samesite,f=s?new Date("number"==typeof s?(new Date).getTime()+864e5*s:s):0;document.cookie=e.replace(/[^+#$&^`|]/g,encodeURIComponent).replace("(","%28").replace(")","%29")+"="+n.replace(/[^+#$&/:<-\[\]-}]/g,encodeURIComponent)+(f&&f.getTime()>=0?";expires="+f.toUTCString():"")+(i?";domain="+i:"")+(c?";path="+c:"")+(l?";secure":"")+(u?";httponly":"")+(d?";samesite="+d:"")},t.get=function(e){for(var t=document.cookie.split(";");t.length;){var n=t.pop(),r=n.indexOf("=");if(r=r<0?n.length:r,decodeURIComponent(n.slice(0,r).replace(/^\s+/,""))===e)return decodeURIComponent(n.slice(r+1))}return null},t.erase=function(e,n){t.set(e,"",{expires:-1,domain:n&&n.domain,path:n&&n.path,secure:0,httponly:0})},t.all=function(){for(var e={},t=document.cookie.split(";");t.length;){var n=t.pop(),r=n.indexOf("=");r=r<0?n.length:r,e[decodeURIComponent(n.slice(0,r).replace(/^\s+/,""))]=decodeURIComponent(n.slice(r+1))}return e}},672774:function(e,t,n){"use strict";function r(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):e instanceof t}var o,a=this&&this.__extends||(o=function(e,t){return o=Object.setPrototypeOf||r({__proto__:[]},Array)&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},o(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(a,s){function i(e){try{l(o.next(e))}catch(e){s(e)}}function c(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,r(t,n)?t:new n((function(e){e(t)}))).then(i,c)}l((o=o.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.NotRetryableError=t.RetryError=t.notEmpty=t.customizeRetry=t.customizeDecorator=t.retryDecorator=t.retry=t.wait=t.defaultRetryConfig=void 0;var c=n(283699),l=function(e,t){return t},u=function(e,t){return e*t},d=function(e,t){return Math.pow(t,e)};function f(e){return s(this,void 0,void 0,(function(){return i(this,(function(t){return[2,new Promise((function(t){return setTimeout(t,e)}))]}))}))}function p(e,n){return s(this,void 0,void 0,(function(){var r;return i(this,(function(o){return r=Object.assign({},t.defaultRetryConfig,n),[2,c.timeout(r.timeout,(function(t){return function(e,t,n){return s(this,void 0,void 0,(function(){var r,o,a,s,c,p,v;return i(this,(function(i){switch(i.label){case 0:switch(t.backoff){case"EXPONENTIAL":o=d;break;case"FIXED":o=l;break;case"LINEAR":o=u;break;default:o=t.backoff}a="INFINITELY"===t.retries?Number.MAX_SAFE_INTEGER:t.retries,s=0,i.label=1;case 1:if(!(s<=a))return[3,8];i.label=2;case 2:return i.trys.push([2,4,,5]),[4,e()];case 3:return c=i.sent(),t.until(c)?[2,c]:(t.logger("Until condition not met by "+c),[3,5]);case 4:if(p=i.sent(),!t.retryIf(p))throw p;if(p.name===w.name)throw new m("Met not retryable error. Last error: "+p,p);return r=p,t.logger("Retry failed: "+p.message),[3,5];case 5:return[4,f((v=o(s+1,t.delay))>t.maxBackOff?t.maxBackOff:v)];case 6:if(i.sent(),n())return[3,8];i.label=7;case 7:return s++,[3,1];case 8:throw new m("All retries failed. Last error: "+r,r)}}))}))}(e,r,t)}))]}))}))}function v(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return p((function(){return e.apply(void 0,n)}),t)}}t.defaultRetryConfig={backoff:"FIXED",delay:100,logger:function(){},maxBackOff:3e5,retries:10,timeout:6e4,until:function(){return!0},retryIf:function(){return!0}},t.wait=f,t.retry=p,t.retryDecorator=v,t.customizeDecorator=function(e){return function(t,n){return v(t,Object.assign({},e,n))}},t.customizeRetry=function(e){return function(t,n){return p(t,Object.assign({},e,n))}},t.notEmpty=function(e){return Array.isArray(e)?e.length>0:null!=e};var m=function(e){function t(t,n){var r=e.call(this,t)||this;return r.lastError=n,r}return a(t,e),t}(Error);t.RetryError=m;var h=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];this.message=e,Error.apply(this,t)};h.prototype=new Error;var w=function(e){function t(t){var n=e.call(this,t)||this;return Object.defineProperty(n,"name",{value:n.constructor.name}),n}return a(t,e),t}(h);t.NotRetryableError=w},283699:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.timeout=void 0,t.timeout=function(e,t){if("INFINITELY"===e)return t((function(){return!1}));var n=!1,r=function(){return n};return new Promise((function(o,a){var s=setTimeout((function(){n=!0,a(new Error("Timeout after "+e+"ms"))}),e);t(r).then((function(e){o(e),clearTimeout(s)}),(function(e){a(e),clearTimeout(s)}))}))}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}(()=>{"use strict";var e=n(672774);const t="csrfToken",{setCsrfToken:r,getCsrfToken:o}=function(){const e=(()=>{try{const e=sessionStorage.getItem(t);return e?JSON.parse(e):{}}catch(e){return{}}})();return{setCsrfToken:function(n,r){e[n]=r,sessionStorage.setItem(t,JSON.stringify(e))},getCsrfToken:function(t){return e[t]}}}(),a=window.numeracy||{};Object.defineProperty(window,"numeracy",{get:()=>a,set:e=>(Object.assign(a,e),a),configurable:!0});const s=window.pageParams||{};Object.defineProperty(window,"pageParams",{get:()=>s,set:e=>(Object.assign(s,e),s),configurable:!0});const i={num:-1,time:"2024-10-21T14:36:08.784Z",version:"241021-2-19a5f77f18",appServerUrl:""}||{};window.build=i,a.clientVersion=i.version,a.appServerUrl=i.appServerUrl,a.injectableAfterLoad=!0;const c=e=>`1#${encodeURIComponent(e)}`,l=e=>!/[^\u0000-\u00ff]/g.test(e),u=[".privatelink.testdns.snowflakecomputing.com",".privatelink.snowflakecomputing.com",".privatelink.int.snowflakecomputing.com",".privatelink.int.snowflake.local",".privatelink.snowflake.local",".privatelink.snowflake.snowsaas.cn",".privatelink.snowflakecomputing.com.cn",".privatelink.snowflakecomputing.cn"];const d={userId:"X-Numeracy-UserId",clientVersion:"X-Numeracy-Client-Version",privateLinkHost:"X-Snowflake-Privatelink-Host",snowflakeContext:"X-Snowflake-Context",encodedSnowflakeContext:"X-Snowflake-Context-Encoded",snowflakeRole:"X-Snowflake-Role",encodedSnowflakeRole:"X-Snowflake-Role-Encoded",csrfToken:"X-CSRF-Token",encodedSnowflakeSecondaryRoles:"X-Snowflake-Secondary-Roles-Encoded"};function f(e,t,n,r){var o,s,i,f;const p=Object.assign({},null!=n?n:{}),v=Object.assign({},null!==(o=p.headers)&&void 0!==o?o:{});if(p.credentials="include",null!=t&&(v[d.userId]=`${t}`),a.clientVersion&&(v[d.clientVersion]=a.clientVersion),m=window.location.hostname,""!==(h=m,u.find((e=>null==h?void 0:h.endsWith(e)))||"")&&(v[d.privateLinkHost]=window.location.origin),e.userKey&&(v[d.snowflakeContext]=e.userKey),e.decodedUserKey)try{v[d.encodedSnowflakeContext]=c(e.decodedUserKey)}catch(e){null==r||r.error(e,{message:"Failed to generate x-snowflake-context-encoded"})}var m,h;if(e.role){l(e.role)&&(v[d.snowflakeRole]=e.role);try{v[d.encodedSnowflakeRole]=c(e.role)}catch(e){null==r||r.error(e,{message:"Failed to generate x-snowflake-role-encoded"})}}if("enabled"===(null===(f=null===(i=null===(s=a.stores)||void 0===s?void 0:s.user)||void 0===i?void 0:i.parameters)||void 0===f?void 0:f.UI_ENABLE_SECONDARY_ROLES_IN_PROVIDER_STUDIO)&&e.secondaryRoles)try{v[d.encodedSnowflakeSecondaryRoles]=c(e.secondaryRoles)}catch(e){null==r||r.error(e,{message:"Failed to generate X-Snowflake-Secondary-Roles-Encoded"})}return[p,v]}var p=n(349051);const v="snowflakeContext",m="authparams";function h(e,t){return`${e}::${t}`}const w=e=>h(e.username,e.url);function y(e){return h(decodeURIComponent(escape(e.username)),e.url)}const g="prefetch_bootstrap__";function b({args:e,observableName:t}){a.bootstrapFetches=a.bootstrapFetches||{},a.bootstrapFetches.observableFetches=a.bootstrapFetches.observableFetches||{fetches:[]};const n=fetch(...e);return a.bootstrapFetches.observableFetches.fetches.push({args:e,response:n,datadogName:`${g}${t}`,absolutePath:new URL(e[0].toString(),document.baseURI).href}),n}const S=/^([0-9a-z_]*[\w-]*-)?([df][0-9a-zA-Z]+(?::[^@]+)?)$/u;function k(e){var t;const n={appServerUrl:e.appServerUrl,userKey:w(e),decodedUserKey:y(e),role:null!==(t=sessionStorage.getItem("currentrole"))&&void 0!==t?t:void 0},r=`/bootstrap${function(){let e=window.location.pathname;if("/"===e&&(e=""),!window.location.hash||!window.location.hash.startsWith("#/"))return e;const t=window.location.hash.split("/");if(2!==t.length)return e;const[n,r]=t;return r&&S.test(r)&&(e+=(r||"").split("-").slice(-1)[0]),e}()+window.location.search}`,[o,a]=f(n,void 0,void 0,console);return{fetchResponse:b({args:[`${n.appServerUrl}${r}`,Object.assign(Object.assign({},o),{headers:a})],observableName:"app_bootstrap"}),path:r,requestContext:n}}var I;!function(e){e.DEFAULT="numeracy",e.POLARIS="polaris"}(I||(I={}));const E="bootstrapData",R=new class{set(e){this.data=e,sessionStorage.setItem(E,JSON.stringify(e))}get(){if(!this.data){const e=sessionStorage.getItem(E);e&&(this.data=JSON.parse(e))}return structuredClone(this.data)}setUser(e){const t=this.get();t&&(t.User=e,this.set(t))}},P={retries:1,delay:10,timeout:"INFINITELY"},O="404: Not Found";function _(e){var t;return(null===(t=e.Org)||void 0===t?void 0:t.settings.isPolaris)?I.POLARIS:I.DEFAULT}const j=({src:t,fetchPriority:n})=>(0,e.retry)((async()=>{var e;const r=document.createElement("script"),o=new Promise(((e,t)=>{r.onload=t=>e(t),r.onerror=(e,n,o,a,s)=>t(s||new Error("string"==typeof e?e:`Error loading ${r.src}`))}));r.src=t,r.defer=!0,n&&(r.fetchPriority=n),document.body.appendChild(r);try{await o}catch(t){throw null===(e=null==r?void 0:r.parentNode)||void 0===e||e.removeChild(r),t}}),P),U=({src:t})=>(0,e.retry)((async()=>{var e;const n=document.createElement("link"),r=new Promise(((e,t)=>{n.onload=e,n.onerror=(e,r,o,a,s)=>t(s||new Error("string"==typeof e?e:`Error loading ${n.href}`))}));n.rel="stylesheet",n.href=t,document.body.appendChild(n);try{await r}catch(t){throw null===(e=null==n?void 0:n.parentNode)||void 0===e||e.removeChild(n),t}}),P),C=async({version:t})=>{let n,r=!1;try{n=await(0,e.retry)((async()=>{const n=await b({args:[`/static/manifest-${t}.json`],observableName:"manifest"});if(!n.ok){if(404===n.status)throw new e.NotRetryableError(O);throw new Error(n.statusText)}return await n.json()}),P)}catch(e){const t=null==e?void 0:e.lastError;r=!!t&&t.message.includes(O),console.warn(`Failed to fetch build manifest: ${e}`)}if(void 0===n&&!r)throw new Error("Failed to load application");return void 0===n&&(n={[`numeracy.${t}.js`]:{file:`/static/numeracy.${t}.js`},[`styles.${t}.css`]:{file:`/static/styles.${t}.css`},[`polaris.${t}.js`]:{file:`/static/polaris.${t}.js`},entrypoints:{numeracy:[`numeracy.${t}.js`,`styles.${t}.css`],polaris:[`polaris.${t}.js`,`styles.${t}.css`]}}),n},N=({buildManifest:e,entrypoint:t})=>(e.entrypoints[t]||[]).map((e=>`/static/${e}`));function x(e){var t,n;return!1===(null===(t=e.PageParams)||void 0===t?void 0:t.enableIndexJsBootstrap)?"app":(null===(n=e.PageParams)||void 0===n?void 0:n.enablePrefetcherBootstrap)?"prefetcher":"indexjs"}const $=async(e,t)=>{const n=e.BuildVersion,r=_(e),o=!t&&/^\/?$/iu.test(window.location.pathname);a.bootstrapFetches=a.bootstrapFetches||{};try{o||(a.bootstrapFetches.application=((e,t)=>{const n=e.BuildVersion;if("indexjs"===x(e)&&"241021-2-19a5f77f18"===n&&null!==t)return Promise.resolve(k(t))})(e,t))}catch(e){a.bootstrapFetches.application=void 0,console.warn(`Failed to run bootstrap fetches: ${e}`)}const s=document.createComment(`License information for included third-party packages can be found at ${window.location.origin}/static/oss-licenses-${n}.json`);if(document.body.appendChild(s),"local"===n)return o?void await j({src:`/static/signin.${n}.js`}):void(I.POLARIS===r?await j({src:`/static/polaris.${n}.js`}):await Promise.all([j({src:`/static/prefetcher.${n}.js`}),j({src:`/static/numeracy.${n}.js`})]));const i=await C({version:n}),c=function(e,t){if("prefetcher"!==x(e))return[];const n=[],r=N({buildManifest:t,entrypoint:"prefetcher"});for(const e of r)if(e.endsWith(".js")){const t=j({src:e,fetchPriority:"high"});n.push(t)}return n}(e,i),l=N({buildManifest:i,entrypoint:o?"signin":I.POLARIS===r?"polaris":"numeracy"});for(const e of l){if(e.endsWith(".js")){const t=j({src:e});c.push(t)}if(e.endsWith(".css")){const t=U({src:e});c.push(t)}}return await Promise.all(c)};const A=async(t,n,o)=>{var a,s,i;const c=(e=>{var t,n;if("LOGIN_FAILED"===new URLSearchParams(window.location.search).get("error"))return null;const r=JSON.parse(null!==(t=localStorage.getItem("loggedInAccounts"))&&void 0!==t?t:"{}"),o=(e=>{var t,n;const r=null!==(t=sessionStorage.getItem(v))&&void 0!==t?t:p.get(v);return r&&null!==(n=e[r])&&void 0!==n?n:null})(r),a=null!==(n=(e=>{const t=e.searchParams.get(m),n=p.get(t||m);if(n)try{return JSON.parse(atob(n))}catch(e){return null}return null})(e))&&void 0!==n?n:function(e,t){return!e||t&&(r=t,(n=e).region===r.region&&n.account===r.account||n.snowflakeOrgName===r.snowflakeOrgName&&n.accountAlias===r.accountAlias)?t:e;var n,r}(((e,t)=>{var n;return null!==(n=((e,t)=>{var n,r,o;const[a,s]=(e=>{const[t,n,r]=e.pathname.split("/").map((e=>e.toLowerCase()));return[n,r]})(e);let i=null;for(const e in t){const c=t[e],l=null===(n=c.snowflakeOrgName)||void 0===n?void 0:n.toLowerCase(),u=null===(r=c.accountAlias)||void 0===r?void 0:r.toLowerCase();l===a&&u===s&&(!i||c.updated&&c.updated>(null!==(o=i.updated)&&void 0!==o?o:0))&&(i=c)}return i})(e,t))&&void 0!==n?n:((e,t)=>{var n,r,o;const[a,s]=(e=>{const[t,n,r]=e.pathname.split("/").map((e=>e.toLowerCase()));return[r,n]})(e);let i=null;for(const e in t){const c=t[e],l=null===(n=c.account)||void 0===n?void 0:n.toLowerCase(),u=null===(r=c.region)||void 0===r?void 0:r.toLowerCase();l===a&&u===s&&(!i||c.updated&&c.updated>(null!==(o=i.updated)&&void 0!==o?o:0))&&(i=c)}return i})(e,t)})(e,r),o);if(a){o!==a&&(sessionStorage.removeItem("currentrole"),sessionStorage.removeItem("currentsecondaryroles"));const e=w(a);sessionStorage.setItem(v,e),p.set(v,e)}return a})(null!=o?o:new URL(window.location.href)),l=(null==c?void 0:c.appServerUrl)?await(async t=>{var n;const r=t.appServerUrl,o={appServerUrl:t.appServerUrl,userKey:w(t),decodedUserKey:y(t),role:null!==(n=sessionStorage.getItem("currentrole"))&&void 0!==n?n:void 0};try{const t=await(0,e.retry)((async()=>{var e,t,n,a;const s=await b({args:[`${r}/bootstrap?deferSync=true`,{credentials:"include",headers:Object.assign({},f(o)[1])}],observableName:"deployment_bootstrap"});if(!s.ok)throw new Error(s.statusText);const i=await s.json();if(!i.BuildVersion)throw new Error("No build version specified");return window.sessionStorage.setItem("ddAppId",null!==(t=null===(e=i.PageParams)||void 0===e?void 0:e.ddAppId)&&void 0!==t?t:""),window.sessionStorage.setItem("ddClientToken",null!==(a=null===(n=i.PageParams)||void 0===n?void 0:n.ddClientToken)&&void 0!==a?a:""),R.set(i),i}),P);return t}catch(e){return console.error(`Failed to get version from deployment: ${e}`),null}})(c):null,u=await async function(e){var t,n,r;if(null==e)return!1;if(_(e)===I.POLARIS&&"enabled"===(null===(r=null===(n=null===(t=e.User)||void 0===t?void 0:t.settings)||void 0===n?void 0:n.snowflakeFeatures)||void 0===r?void 0:r.UI_ENABLE_APEX_FEATURE_55))try{const t=await b({args:[`/static/polaris.json?v=${Date.now()}`],observableName:"polaris_config"}),n=await t.json(),r=null==n?void 0:n.version;return e.BuildVersion=r,!0}catch(e){console.error(`Error retreiving Polaris override: ${e}`)}return!1}(l);if((null===(a=null==l?void 0:l.PageParams)||void 0===a?void 0:a.appServerUrl)&&(null===(s=null==l?void 0:l.PageParams)||void 0===s?void 0:s.csrfToken)&&r(l.PageParams.appServerUrl,l.PageParams.csrfToken),!t.startsWith("PR-")&&null==window.NUMERACY_VERSION_OVERRIDE||u){if(!(null==l?void 0:l.BuildVersion))return await n({BuildVersion:t},c);await n(l,c)}else await n(Object.assign(Object.assign({},l),{BuildVersion:null!==(i=window.NUMERACY_VERSION_OVERRIDE)&&void 0!==i?i:t,PageParams:Object.assign(Object.assign({},null==l?void 0:l.PageParams),{enableIndexJsBootstrap:!0,enablePrefetcherBootstrap:!0})}),c)};(async()=>{const e=Object.fromEntries(new URLSearchParams(window.location.search));if(e.numeracy_version_override&&(window.NUMERACY_VERSION_OVERRIDE=e.numeracy_version_override),"entrypoint_version_override"in e&&"241021-2-19a5f77f18"!==e.entrypoint_version_override){const t=await C({version:e.entrypoint_version_override});await j({src:t["index.js"].file})}else{const e=(t=$,async function(e,n){try{await t(e,n)}catch(e){console.error(`Failed to load application: ${e}`),(()=>{const e=document.getElementById("reactRoot");if(!e)throw new Error("Invalid page");e.innerHTML='\n  <style>\n    body {\n      margin: 0;\n    }\n\n    .global-app-error {\n      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n      height: 100vh;\n      background-color: #f7f7f7ff;\n    }\n\n    .primary-error-message {\n      color: #1e252fff;\n      font-size: 28px;\n      font-weight: 700;\n      margin-bottom: 0.5em;\n    }\n\n    .subtitle-error-message {\n      color: #5d6a85ff;\n      font-size: 16px;\n      font-weight: 300;\n      margin-top: 0;\n      margin-bottom: 2em;\n    }\n  </style>\n  <div class="global-app-error">\n    <h1 class="primary-error-message">Something went wrong</h1>\n    <h3 class="subtitle-error-message">Please refresh the page</h3>\n  </div>\n  '})()}});A("241021-2-19a5f77f18",e)}var t})()})()})();
//# sourceMappingURL=index-a1f7c9008bca05f5567c.js.map