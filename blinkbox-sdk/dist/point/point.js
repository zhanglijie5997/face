!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).point={})}(this,(function(e){"use strict";e.create=function(e,t){let n={appId:"ec38b4158c3d438fa38ec04d831029f4",name:"ta",sdkUrl:"https://web.oversea.blindbox.store/js/thinkingdata.min.js",serverUrl:"https://global-receiver-ta.thinkingdata.cn",loaded(t){const n=t.getDistinctId();console.log(n,"currentId"),null==e||e()}};if(n=Object.assign(Object.assign({},n),t),!window.ThinkingDataAnalyticalTool){const e=n.sdkUrl,t=n.name,i=window,r=document,s="script";let a=null,o=null;i.ThinkingDataAnalyticalTool=t;const l=["track","quick","login","identify","logout","trackLink","userSet","userSetOnce","userAdd","userDel","setPageProperty","setSuperProperties","setDynamicSuperProperties","clearSuperProperties","timeEvent","unsetSuperProperties","initInstance","trackFirstEvent","trackUpdate","trackOverwrite"];i[t]=function(e){return function(){if(this.name)(i[t]._q=i[t]._q||[]).push([e,arguments,this.name]);else if("initInstance"===e){const n=arguments[0];i[t][n]={name:n};for(let e=0;e<l.length;e++)i[t][n][l[e]]=i[t].call(i[t][n],l[e]);(i[t]._q1=i[t]._q1||[]).push([e,arguments])}else(i[t]._q=i[t]._q||[]).push([e,arguments])}};for(let e=0;e<l.length;e++)i[t][l[e]]=i[t].call(null,l[e]);i[t].param=n,i[t].__SV=1.1,a=r.createElement(s),o=r.getElementsByTagName(s)[0],a.async=1,a.src=e,o.parentNode.insertBefore(a,o)}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=point.js.map
