"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[5677],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const o={version:1,submitted_by:"yelghali",published_date:"tbd",category:"cloud",description:"By default, Kubernetes scales workloads based on CPU and RAM utilization. In practice, however, it's difficult to correlate your application's demand drivers with CPU and RAM utilization. Scaling your workload based on relevant demand metrics that drive scaling of your applications, such as HTTP requests, queue length, and cloud alerting events can help reduce resource utilization, and therefore also your carbon emissions.",tags:["cloud","serverless","kubernetes","role:software-engineer","role:cloud-engineer","size:medium"]},s="Scale Kubernetes workloads based on relevent demand metrics",i={unversionedId:"catalog/cloud/scale-kubernetes-workloads-based-on-events",id:"catalog/cloud/scale-kubernetes-workloads-based-on-events",title:"Scale Kubernetes workloads based on relevent demand metrics",description:"By default, Kubernetes scales workloads based on CPU and RAM utilization. In practice, however, it's difficult to correlate your application's demand drivers with CPU and RAM utilization. Scaling your workload based on relevant demand metrics that drive scaling of your applications, such as HTTP requests, queue length, and cloud alerting events can help reduce resource utilization, and therefore also your carbon emissions.",source:"@site/docs/catalog/cloud/scale-kubernetes-workloads-based-on-events.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/scale-kubernetes-workloads-based-on-events",permalink:"/catalog/cloud/scale-kubernetes-workloads-based-on-events",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/scale-kubernetes-workloads-based-on-events.md",tags:[{label:"cloud",permalink:"/tags/cloud"},{label:"serverless",permalink:"/tags/serverless"},{label:"kubernetes",permalink:"/tags/kubernetes"},{label:"role:software-engineer",permalink:"/tags/role-software-engineer"},{label:"role:cloud-engineer",permalink:"/tags/role-cloud-engineer"},{label:"size:medium",permalink:"/tags/size-medium"}],version:"current",frontMatter:{version:1,submitted_by:"yelghali",published_date:"tbd",category:"cloud",description:"By default, Kubernetes scales workloads based on CPU and RAM utilization. In practice, however, it's difficult to correlate your application's demand drivers with CPU and RAM utilization. Scaling your workload based on relevant demand metrics that drive scaling of your applications, such as HTTP requests, queue length, and cloud alerting events can help reduce resource utilization, and therefore also your carbon emissions.",tags:["cloud","serverless","kubernetes","role:software-engineer","role:cloud-engineer","size:medium"]},sidebar:"tutorialSidebar",previous:{title:"Scale down kubernetes applications when not in use",permalink:"/catalog/cloud/scale-down-kubernetes-workloads"},next:{title:"Scan for vulnerabilities",permalink:"/catalog/cloud/scan-for-vulnerabilities"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scale-kubernetes-workloads-based-on-relevent-demand-metrics"},"Scale Kubernetes workloads based on relevent demand metrics"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"By default, Kubernetes scales workloads based on CPU and RAM utilization. In practice, however, it's difficult to correlate your application's demand drivers with CPU and RAM utilization."),(0,a.kt)("p",null,"Scaling your workload based on relevant demand metrics that drive scaling of your applications, such as HTTP requests, queue length, and cloud alerting events can help reduce resource utilization, and therefore also your carbon emissions."),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Implement a custom scaler for your application, or use ",(0,a.kt)("a",{parentName:"p",href:"https://keda.sh"},"KEDA")," to help you build event-driven Kubernetes applications, to allow scaling down to zero when there is no demand."),(0,a.kt)("p",null,"In addition to scaling Kubernetes applications based on relevent scaling metrics (or events), cluster auto-scaling and bursting capabilities are also used to scale infrastructure based on demand."),(0,a.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,a.kt)("p",null,"Scaling based on events will impact SCI as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"M"),": By scaling the workloads based on demand and reducing resource utilization, the total embodied carbon emissions by the Kubernetes cluster is lower.")),(0,a.kt)("h2",{id:"assumptions"},"Assumptions"),(0,a.kt)("p",null,"The metrics that drive application demand and scaling needs are known."),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("p",null,"If your workloads have predictable usage patterns, you could implement scaling based on time as an alternative to optimize utilization and reduce carbon emissions."))}d.isMDXComponent=!0}}]);