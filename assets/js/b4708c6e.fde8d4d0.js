"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[63244],{78936:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=n(74848),r=n(28453);const s={description:"Documenting a Distributed Validator Cluster in a standardised file format",sidebar_position:3},o="Cluster configuration",a={id:"charon/cluster-configuration",title:"Cluster configuration",description:"Documenting a Distributed Validator Cluster in a standardised file format",source:"@site/versioned_docs/version-v0.14.0/charon/cluster-configuration.md",sourceDirName:"charon",slug:"/charon/cluster-configuration",permalink:"/docs/v0.14.0/charon/cluster-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.14.0/charon/cluster-configuration.md",tags:[],version:"v0.14.0",sidebarPosition:3,frontMatter:{description:"Documenting a Distributed Validator Cluster in a standardised file format",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Distributed Key Generation",permalink:"/docs/v0.14.0/charon/dkg"},next:{title:"Charon networking",permalink:"/docs/v0.14.0/charon/networking"}},d={},c=[{value:"Cluster Definition File",id:"cluster-definition-file",level:2},{value:"Using the CLI",id:"using-the-cli",level:3},{value:"Using the DV Launchpad",id:"using-the-dv-launchpad",level:3},{value:"Cluster Lock File",id:"cluster-lock-file",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"cluster-configuration",children:"Cluster configuration"})}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsxs)(i.p,{children:["These cluster definition and cluster lock files are a work in progress. The intention is for the files to be standardised for operating distributed validators via the ",(0,t.jsx)(i.a,{href:"https://eips.ethereum.org/",children:"EIP process"})," when appropriate."]})}),"\n",(0,t.jsx)(i.p,{children:"This document describes the configuration options for running a charon client or cluster."}),"\n",(0,t.jsx)(i.p,{children:"A charon cluster is configured in two steps:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"cluster-definition.json"})," which defines the intended cluster configuration before keys have been created in a distributed key generation ceremony."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"cluster-lock.json"})," which includes and extends ",(0,t.jsx)(i.code,{children:"cluster-definition.json"})," with distributed validator BLS public key shares."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["In the case of a solo operator running a cluster, the ",(0,t.jsx)(i.a,{href:"/docs/v0.14.0/charon/charon-cli-reference#create-a-full-cluster-locally",children:(0,t.jsx)(i.code,{children:"charon create cluster"})})," command combines both steps into one and just outputs the final ",(0,t.jsx)(i.code,{children:"cluster-lock.json"})," without a DKG step."]}),"\n",(0,t.jsx)(i.h2,{id:"cluster-definition-file",children:"Cluster Definition File"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"cluster-definition.json"})," is provided as input to the DKG which generates keys and the ",(0,t.jsx)(i.code,{children:"cluster-lock.json"})," file."]}),"\n",(0,t.jsx)(i.h3,{id:"using-the-cli",children:"Using the CLI"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.a,{href:"/docs/v0.14.0/charon/charon-cli-reference#creating-the-configuration-for-a-dkg-ceremony",children:(0,t.jsx)(i.code,{children:"charon create dkg"})})," command is used to create the ",(0,t.jsx)(i.code,{children:"cluster-definition.json"})," file which is used as input to ",(0,t.jsx)(i.code,{children:"charon dkg"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["The schema of the ",(0,t.jsx)(i.code,{children:"cluster-definition.json"})," is defined as:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  "name": "best cluster", // Optional cosmetic identifier\n  "operators": [\n    {\n      "address": "0x123..abfc", // ETH1 address of the operator\n      "enr": "enr://abcdef...12345", // Charon node ENR\n      "config_signature": "0x123456...abcdef", // EIP712 Signature of config_hash by ETH1 address priv key\n      "enr_signature": "0x123654...abcedf" // EIP712 Signature of ENR by ETH1 address priv key\n    }\n  ],\n  "uuid": "1234-abcdef-1234-abcdef", // Random unique identifier.\n  "version": "v1.2.0", // Schema version\n  "timestamp": "2022-01-01T12:00:00+00:00", // Creation timestamp\n  "num_validators": 100, // Number of distributed validators to be created in cluster-lock.json\n  "threshold": 3, // Optional threshold required for signature reconstruction\n  "fee_recipient_address": "0x123..abfc", // ETH1 fee_recipient address\n  "withdrawal_address": "0x123..abfc", // ETH1 withdrawal address\n  "dkg_algorithm": "foo_dkg_v1", // Optional DKG algorithm for key generation\n  "fork_version": "0x00112233", // Chain/Network identifier\n  "config_hash": "abcfde...acbfed", // Hash of the static (non-changing) fields\n  "definition_hash": "abcdef...abcedef" // Final hash of all fields\n}\n'})}),"\n",(0,t.jsx)(i.h3,{id:"using-the-dv-launchpad",children:"Using the DV Launchpad"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["A ",(0,t.jsx)(i.a,{href:"/docs/v0.14.0/int/quickstart/group/",children:(0,t.jsx)(i.code,{children:"leader/creator"})}),', that wishes to coordinate the creation of a new Distributed Validator Cluster navigates to the launchpad and selects "Create new Cluster"']}),"\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(i.code,{children:"leader/creator"})," uses the user interface to configure all of the important details about the cluster including:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(i.code,{children:"Withdrawal Address"})," for the created validators"]}),"\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(i.code,{children:"Fee Recipient Address"})," for block proposals if it differs from the withdrawal address"]}),"\n",(0,t.jsx)(i.li,{children:"The number of distributed validators to create"}),"\n",(0,t.jsx)(i.li,{children:"The list of participants in the cluster specified by Ethereum address(/ENS)"}),"\n",(0,t.jsx)(i.li,{children:"The threshold of fault tolerance required"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["These key pieces of information form the basis of the cluster configuration. These fields (and some technical fields like DKG algorithm to use) are serialized and merklized to produce the definition's ",(0,t.jsx)(i.code,{children:"cluster_definition_hash"}),". This merkle root will be used to confirm that there is no ambiguity or deviation between definitions when they are provided to charon nodes."]}),"\n",(0,t.jsxs)(i.li,{children:["Once the ",(0,t.jsx)(i.code,{children:"leader/creator"})," is satisfied with the configuration they publish it to the launchpad's data availability layer for the other participants to access. (For early development the launchpad will use a centralized backend db to store the cluster configuration. Near production, solutions like IPFS or arweave may be more suitable for the long term decentralization of the launchpad.)"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"cluster-lock-file",children:"Cluster Lock File"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"cluster-lock.json"})," has the following schema:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  "cluster_definition": {...},                              // Cluster definiition json, identical schema to above,\n  "distributed_validators": [                               // Length equal to cluster_definition.num_validators.\n    {\n      "distributed_public_key":  "0x123..abfc",             // DV root pubkey\n      "public_shares": [ "abc...fed", "cfd...bfe"],         // Length equal to cluster_definition.operators\n      "fee_recipient": "0x123..abfc"                        // Defaults to withdrawal address if not set, can be edited manually\n    }\n  ],\n  "lock_hash": "abcdef...abcedef",                          // Config_hash plus distributed_validators\n  "signature_aggregate": "abcdef...abcedef"                 // BLS aggregate signature of the lock hash signed by each DV pubkey.\n}\n'})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var t=n(96540);const r={},s=t.createContext(r);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);