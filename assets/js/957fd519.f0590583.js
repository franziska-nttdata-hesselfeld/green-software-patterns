"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[9275],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const i={version:1,submitted_by:"navveenb",published_date:"tbd",category:"ai",description:"Depending on the model parameters and training iterations, training an AI/ML model consumes a lot of power and requires many servers which contribute to embodied emissions.",tags:["ai","machine-learning","role:data-scientist","size:small"]},o="Use sustainable regions for AI/ML training",s={unversionedId:"catalog/ai/leverage-sustainable-regions",id:"catalog/ai/leverage-sustainable-regions",title:"Use sustainable regions for AI/ML training",description:"Depending on the model parameters and training iterations, training an AI/ML model consumes a lot of power and requires many servers which contribute to embodied emissions.",source:"@site/docs/catalog/ai/leverage-sustainable-regions.md",sourceDirName:"catalog/ai",slug:"/catalog/ai/leverage-sustainable-regions",permalink:"/catalog/ai/leverage-sustainable-regions",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/ai/leverage-sustainable-regions.md",tags:[{label:"ai",permalink:"/tags/ai"},{label:"machine-learning",permalink:"/tags/machine-learning"},{label:"role:data-scientist",permalink:"/tags/role-data-scientist"},{label:"size:small",permalink:"/tags/size-small"}],version:"current",frontMatter:{version:1,submitted_by:"navveenb",published_date:"tbd",category:"ai",description:"Depending on the model parameters and training iterations, training an AI/ML model consumes a lot of power and requires many servers which contribute to embodied emissions.",tags:["ai","machine-learning","role:data-scientist","size:small"]},sidebar:"tutorialSidebar",previous:{title:"Use energy efficient AI/ML models",permalink:"/catalog/ai/energy-efficent-models"},next:{title:"Leverage pre-trained models and transfer learning for AI/ML development",permalink:"/catalog/ai/pre-trained-transfer-learning"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-sustainable-regions-for-aiml-training"},"Use sustainable regions for AI/ML training"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Training an AI model has a significant carbon footprint. Depending on the model parameters and training iterations, training an AI/ML model consumes a lot of power and requires many servers which contribute to embodied emissions."),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Use a cloud region which has a lower carbon intensity value for running your AI/ML training workloads."),(0,a.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,a.kt)("p",null,"Using a lower carbon intensity region for AI/ML training impacts SCI as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"E"),": Using a lower carbon intensity region for ML training would reduce the carbon emissions of ML applications, therefore decreasing the amount of energy consumed.")),(0,a.kt)("h2",{id:"assumptions"},"Assumptions"),(0,a.kt)("p",null,"The migration of workloads to other regions assumes you have taken into consideration privacy, security, or data sovereignty based on your application requirements. "),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("p",null,"Consider the trade-offs between carbon footprint, cost, and latency when selecting a region. "),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/blog/topics/sustainability/google-cloud-region-picker-helps-you-make-the-green-choice"},"Faster, cheaper, greener? Pick the Google Cloud region that\u2019s right for you")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sustainability.aboutamazon.com/around-the-globe?energyType=true"},"Amazon\u2019s sustainability regions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/explore/global-infrastructure/sustainability/"},"Azure sustainability")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/sustainability/region-carbon"},"Google Cloud sustainability regions"))))}p.isMDXComponent=!0}}]);