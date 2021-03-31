(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(107)),o={id:"features",title:"Features",sidebar_label:"Features",slug:"/usecase/features"},s={unversionedId:"usecase/features",id:"usecase/features",isDocsHomePage:!1,title:"Features",description:"Audit",source:"@site/docs/usecase/features.md",slug:"/usecase/features",permalink:"/docs/usecase/features",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/usecase/features.md",version:"current",sidebar_label:"Features",sidebar:"sidebar",previous:{title:"Getting started",permalink:"/docs/usecase/getting-started"},next:{title:"What's a entity?",permalink:"/docs/entity"}},c=[{value:"Audit",id:"audit",children:[]},{value:"Request Validation",id:"request-validation",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"audit"},"Audit"),Object(i.b)("p",null,"It is possible to retrieve the audit trail of an use case after its execution"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"uc.auditTrail"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"{\n    type: 'use case',\n    description: 'Add or Update an Item on a to-do List',\n    transactionId: '9985fb70-f56d-466a-b466-e200d1d4848c',\n    elapsedTime: 1981800n, // in nanosecods\n    user: { name: 'John', id: '923b8b9a', isAdmin: true },\n    authorized: true,\n    return: {\n        Ok: { item: { id: 100, name: 'Do not forget this', position: 9 } }\n    },\n    steps: [\n        { type: 'step', description: 'Check if the Item is valid', elapsedTime: 208201n , return: {} },\n        { type: 'step', description: 'Check if the List exists', elapsedTime: 114300n , return: {}  },\n        {\n            type: 'if else', \n            description: 'Add or Update the Item',\n            returnIf: { Ok: true },\n            returnThen: {}\n        }\n    ]\n}\n")),Object(i.b)("p",null,"TIP: If you need to audit the exceptions thrown by the use case use ",Object(i.b)("inlineCode",{parentName:"p"},'process.env.HERBS_EXCEPTION = "audit"'),". This will swallow the exceptions and return a Err on the step. Recommended for production environments."),Object(i.b)("h3",{id:"request-validation"},"Request Validation"),Object(i.b)("p",null,"A request can be validated against the field's type."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const addOrUpdateItem = (injection) =>\n\n    usecase('Add or Update an Item on a to-do List', {\n\n        // Input/Request type validation \n        request: { listId: Number, item: Object },\n\n    ...\n")),Object(i.b)("h4",{id:"request-types"},"Request types"),Object(i.b)("p",null,"A field in a request can be basic types from Javascript or entities created from gotu herbs lib:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Number"),": double-precision 64-bit binary format IEEE 754 value"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"String"),": a UTF\u201016 character sequence"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Boolean"),": true or false"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Date"),": represents a single moment in time in a platform-independent format."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Object"),": the Object class represents one of JavaScript's data types."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Array"),": the Array class is a object that is used in the construction of arrays."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Entity"),": entity object represents an gotu base entity."))}p.isMDXComponent=!0},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,f=l["".concat(o,".").concat(b)]||l[b]||d[b]||i;return n?a.a.createElement(f,s(s({ref:t},u),{},{components:n})):a.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);