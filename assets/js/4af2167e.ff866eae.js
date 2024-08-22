"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[20071],{22182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=r(74848),n=r(28453);const o={description:"Deployment Architecture for a Distributed Validator Client"},a="Middleware Architecture",d={id:"dv/middleware-daemon",title:"Middleware Architecture",description:"Deployment Architecture for a Distributed Validator Client",source:"@site/versioned_docs/version-v0.8.1/dv/04_middleware-daemon.md",sourceDirName:"dv",slug:"/dv/middleware-daemon",permalink:"/docs/v0.8.1/dv/middleware-daemon",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.8.1/dv/04_middleware-daemon.md",tags:[],version:"v0.8.1",sidebarPosition:4,frontMatter:{description:"Deployment Architecture for a Distributed Validator Client"},sidebar:"tutorialSidebar",previous:{title:"Distributed validator creation",permalink:"/docs/v0.8.1/dv/validator-creation"},next:{title:"Peer discovery",permalink:"/docs/v0.8.1/dv/peer-discovery"}},s={},c=[{value:"Operation",id:"operation",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"middleware-architecture",children:"Middleware Architecture"})}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/DistributedValidatorCluster.svg"})}),"\n",(0,i.jsxs)(t.p,{children:["The Charon daemon sits as a middleware between the consensus layer's ",(0,i.jsx)(t.a,{href:"https://ethereum.github.io/beacon-APIs/",children:"beacon node API"})," and any downstream validator clients."]}),"\n",(0,i.jsx)(t.h3,{id:"operation",children:"Operation"}),"\n",(0,i.jsx)(t.p,{children:"The middleware strives to be stateless and statically configured through 777 file systems. The lack of a control-plane API for online reconfiguration is deliberate to keep operations simple and secure by default."}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"charon"})," package will initially be available as a Docker image and through binary builds. An APT package with a systemd integration is planned."]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>d});var i=r(96540);const n={},o=i.createContext(n);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);