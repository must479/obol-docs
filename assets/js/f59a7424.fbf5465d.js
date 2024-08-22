"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[94821],{71333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var s=n(74848),i=n(28453);const o={description:"Charon - The Distributed Validator Client",sidebar_position:1},r="Introduction",a={id:"charon/intro",title:"Introduction",description:"Charon - The Distributed Validator Client",source:"@site/versioned_docs/version-v0.17.1/charon/intro.md",sourceDirName:"charon",slug:"/charon/intro",permalink:"/docs/v0.17.1/charon/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.1/charon/intro.md",tags:[],version:"v0.17.1",sidebarPosition:1,frontMatter:{description:"Charon - The Distributed Validator Client",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Centralization risks and mitigation",permalink:"/docs/v0.17.1/int/faq/risks"},next:{title:"Distributed Key Generation",permalink:"/docs/v0.17.1/charon/dkg"}},d={},h=[{value:"What is Charon?",id:"what-is-charon",level:2},{value:"Charon Architecture",id:"charon-architecture",level:2},{value:"Determine <strong>when</strong> duties need to be performed",id:"determine-when-duties-need-to-be-performed",level:3},{value:"Fetch and come to consensus on <strong>what</strong> data to sign",id:"fetch-and-come-to-consensus-on-what-data-to-sign",level:3},{value:"<strong>Wait</strong> for the VC to sign",id:"wait-for-the-vc-to-sign",level:3},{value:"<strong>Share</strong> partial signatures",id:"share-partial-signatures",level:3},{value:"<strong>Threshold Aggregate</strong> partial signatures",id:"threshold-aggregate-partial-signatures",level:3},{value:"<strong>Broadcast</strong> final signature",id:"broadcast-final-signature",level:3},{value:"Ports",id:"ports",level:3},{value:"Getting started",id:"getting-started",level:2}];function c(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,s.jsxs)(t.p,{children:["This section introduces and outlines the Charon ",(0,s.jsx)(t.em,{children:"[kharon]"})," middleware, Obol's implementation of DVT. Please see the ",(0,s.jsx)(t.a,{href:"/docs/int/key-concepts",children:"key concepts"})," section as background and context."]}),"\n",(0,s.jsx)(t.h2,{id:"what-is-charon",children:"What is Charon?"}),"\n",(0,s.jsx)(t.p,{children:"Charon is a GoLang-based, HTTP middleware built by Obol to enable any existing Ethereum validator clients to operate together as part of a distributed validator."}),"\n",(0,s.jsxs)(t.p,{children:["Charon sits as a middleware between a normal validating client and its connected beacon node, intercepting and proxying API traffic. Multiple Charon clients are configured to communicate together to come to consensus on validator duties and behave as a single unified proof-of-stake validator together. The nodes form a cluster that is ",(0,s.jsx)(t.em,{children:"byzantine-fault tolerant"})," and continues to progress assuming a supermajority of working/honest nodes is met."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Charon Cluster",src:n(56629).A+"",width:"1200",height:"630"})}),"\n",(0,s.jsx)(t.h2,{id:"charon-architecture",children:"Charon Architecture"}),"\n",(0,s.jsx)(t.p,{children:"Charon is an Ethereum proof of stake distributed validator (DV) client. Like any validator client, its main purpose is to perform validation duties for the Beacon Chain, primarily attestations and block proposals. The beacon client handles a lot of the heavy lifting, leaving the validator client to focus on fetching duty data, signing that data, and submitting it back to the beacon client."}),"\n",(0,s.jsx)(t.p,{children:"Charon is designed as a generic event-driven workflow with different components coordinating to perform validation duties. All duties follow the same flow, the only difference being the signed data. The workflow can be divided into phases consisting of one or more components:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Charon Workflow",src:n(9354).A+"",width:"455",height:"540"})}),"\n",(0,s.jsxs)(t.h3,{id:"determine-when-duties-need-to-be-performed",children:["Determine ",(0,s.jsx)(t.strong,{children:"when"})," duties need to be performed"]}),"\n",(0,s.jsxs)(t.p,{children:["The beacon chain is divided into ",(0,s.jsx)(t.a,{href:"https://eth2book.info/bellatrix/part3/config/types/#slot",children:"slots"})," and ",(0,s.jsx)(t.a,{href:"https://eth2book.info/bellatrix/part3/config/types/#epoch",children:"epochs"}),", which divides it into deterministically fixed-size time chunks.\nThe first step is to determine when (which slot/epoch) duties need to be performed. This is done by the ",(0,s.jsx)(t.code,{children:"scheduler"})," component.\nIt queries the beacon node to detect which validators defined in the cluster lock are active, and what duties they need to perform for\nthe upcoming epoch and slots. When such a slot starts, the ",(0,s.jsx)(t.code,{children:"scheduler"})," emits an event indicating which validator needs to perform what duty."]}),"\n",(0,s.jsxs)(t.h3,{id:"fetch-and-come-to-consensus-on-what-data-to-sign",children:["Fetch and come to consensus on ",(0,s.jsx)(t.strong,{children:"what"})," data to sign"]}),"\n",(0,s.jsxs)(t.p,{children:["A DV cluster consists of multiple operators each provided with one of the M-of-N threshold BLS private key shares per validator.\nThe key shares are imported into the validator clients which produce partial signatures.\nCharon threshold aggregates these partial signatures before broadcasting them to the Beacon Chain.\n",(0,s.jsx)(t.em,{children:"But to threshold aggregate partial signatures, each validator must sign the same data."}),"\nThe cluster must therefore coordinate and come to a consensus on what data to sign."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Fetcher"})," fetches the unsigned duty data from the beacon node upon receiving an event from ",(0,s.jsx)(t.code,{children:"Scheduler"}),".",(0,s.jsx)(t.br,{}),"\n","For attestations, this is the unsigned attestation, for block proposals, this is the unsigned block."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Consensus"})," component listens to events from Fetcher and starts a ",(0,s.jsx)(t.a,{href:"https://docs.goquorum.consensys.net/configure-and-manage/configure/consensus-protocols/qbft/",children:"QBFT"})," consensus game with the other\nCharon nodes in the cluster for that specific duty and slot.\nWhen consensus is reached, the resulting unsigned duty data is stored in the ",(0,s.jsx)(t.code,{children:"DutyDB"}),"."]}),"\n",(0,s.jsxs)(t.h3,{id:"wait-for-the-vc-to-sign",children:[(0,s.jsx)(t.strong,{children:"Wait"})," for the VC to sign"]}),"\n",(0,s.jsxs)(t.p,{children:["Charon is a ",(0,s.jsx)(t.strong,{children:"middleware"})," distributed validator client. That means Charon doesn\u2019t have access to the\nvalidator private key shares and cannot sign anything on demand.\nInstead, operators import the key shares into industry-standard validator clients (VC)\nthat are configured to connect to their local Charon client instead of their local Beacon node directly."]}),"\n",(0,s.jsxs)(t.p,{children:["Charon, therefore, serves the ",(0,s.jsx)(t.a,{href:"https://ethereum.github.io/beacon-APIs/#/",children:"Ethereum Beacon Node API"})," from the ",(0,s.jsx)(t.code,{children:"ValidatorAPI"})," component and\nintercepts some endpoints while proxying other endpoints directly to the upstream Beacon node."]}),"\n",(0,s.jsxs)(t.p,{children:["The VC queries the ",(0,s.jsx)(t.code,{children:"ValidatorAPI"})," for unsigned data which is retrieved from the ",(0,s.jsx)(t.code,{children:"DutyDB"}),". It then signs it and submits it\nback to the ",(0,s.jsx)(t.code,{children:"ValidatorAPI"})," which stores it in the ",(0,s.jsx)(t.code,{children:"PartialSignatureDB"}),"."]}),"\n",(0,s.jsxs)(t.h3,{id:"share-partial-signatures",children:[(0,s.jsx)(t.strong,{children:"Share"})," partial signatures"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"PartialSignatureDB"})," stores the partially signed data submitted by the local Charon client\u2019s VC.\nBut it also stores all the partial signatures submitted by the VCs of other peers in the cluster.\nThis is achieved by the ",(0,s.jsx)(t.code,{children:"PartialSignatureExchange"})," component that exchanges partial signatures between all peers in the cluster.\nAll charon clients, therefore, store all partial signatures the cluster generates."]}),"\n",(0,s.jsxs)(t.h3,{id:"threshold-aggregate-partial-signatures",children:[(0,s.jsx)(t.strong,{children:"Threshold Aggregate"})," partial signatures"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"SignatureAggregator"})," is invoked as soon as sufficient (any M of N) partial signatures are stored in the ",(0,s.jsx)(t.code,{children:"PartialSignatureDB"}),".\nIt performs BLS threshold aggregation of the partial signatures resulting in a final signature that is valid for the beacon chain."]}),"\n",(0,s.jsxs)(t.h3,{id:"broadcast-final-signature",children:[(0,s.jsx)(t.strong,{children:"Broadcast"})," final signature"]}),"\n",(0,s.jsxs)(t.p,{children:["Finally, the ",(0,s.jsx)(t.code,{children:"Broadcaster"})," component broadcasts the final threshold aggregated signature to the Beacon client, thereby completing the duty."]}),"\n",(0,s.jsx)(t.h3,{id:"ports",children:"Ports"}),"\n",(0,s.jsx)(t.p,{children:"The following is an outline of the services that can be exposed by charon."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:":3600"})," - The validator REST API. This is the port that serves the consensus layer's ",(0,s.jsx)(t.a,{href:"https://ethereum.github.io/beacon-APIs/",children:"beacon node API"}),". This is the port validator clients should talk to instead of their standard consensus client REST API port. Charon subsequently proxies these requests to the upstream consensus client specified by ",(0,s.jsx)(t.code,{children:"--beacon-node-endpoints"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:":3610"})," - Charon P2P port. This is the port that charon clients use to communicate with one another via TCP. This endpoint should be port-forwarded on your router and exposed publicly, preferably on a static IP address. This IP address should then be set on the charon run command with ",(0,s.jsx)(t.code,{children:"--p2p-external-ip"})," or ",(0,s.jsx)(t.code,{children:"CHARON_P2P_EXTERNAL_IP"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:":3620"})," - Monitoring port. This port hosts a webserver that serves prometheus metrics on ",(0,s.jsx)(t.code,{children:"/metrics"}),", a readiness endpoint on ",(0,s.jsx)(t.code,{children:"/readyz"})," and a liveness endpoint on ",(0,s.jsx)(t.code,{children:"/livez"}),", and a pprof server on ",(0,s.jsx)(t.code,{children:"/debug/pprof"}),". This port should not be exposed publicly."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,s.jsxs)(t.p,{children:["For more information on running charon, take a look at our ",(0,s.jsx)(t.a,{href:"/docs/v0.17.1/int/quickstart/",children:"Quickstart Guides"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},56629:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/DVCluster-d161355b3dfd1808a86148c8fe28271e.png"},9354:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/workflow-de4700cb1dd4e2adf00f90bf14a2dd3a.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);