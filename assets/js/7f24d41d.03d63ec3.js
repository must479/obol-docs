"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[34057],{61089:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=o(74848),i=o(28453);const r={sidebar_position:5,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},s="Push Metrics to Obol Monitoring",a={id:"int/quickstart/advanced/obol-monitoring",title:"Push Metrics to Obol Monitoring",description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster",source:"@site/versioned_docs/version-v0.18.0/int/quickstart/advanced/obol-monitoring.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/obol-monitoring",permalink:"/docs/v0.18.0/int/quickstart/advanced/obol-monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.18.0/int/quickstart/advanced/obol-monitoring.md",tags:[],version:"v0.18.0",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},sidebar:"tutorialSidebar",previous:{title:"Getting Started Monitoring your Node",permalink:"/docs/v0.18.0/int/quickstart/advanced/monitoring"},next:{title:"Self-Host a Relay",permalink:"/docs/v0.18.0/int/quickstart/advanced/self-relay"}},d={},c=[];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"push-metrics-to-obol-monitoring",children:"Push Metrics to Obol Monitoring"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["This is ",(0,n.jsx)(t.strong,{children:"optional"})," and does not confer any special privileges within the Obol Network."]})}),"\n",(0,n.jsxs)(t.p,{children:["You may have been provided with ",(0,n.jsx)(t.strong,{children:"Monitoring Credentials"})," used to push distributed validator metrics to Obol's central prometheus cluster to monitor, analyze, and improve your Distributed Validator Cluster's performance."]}),"\n",(0,n.jsxs)(t.p,{children:["The provided credentials needs to be added in ",(0,n.jsx)(t.code,{children:"prometheus/prometheus.yml"})," replacing ",(0,n.jsx)(t.code,{children:"$PROM_REMOTE_WRITE_TOKEN"})," and will look like:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"obol20!tnt8U!C...\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The updated ",(0,n.jsx)(t.code,{children:"prometheus/prometheus.yml"})," file should look like:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"global:\n  scrape_interval:     30s # Set the scrape interval to every 30 seconds.\n  evaluation_interval: 30s # Evaluate rules every 30 seconds.\n\nremote_write:\n  - url: https://vm.monitoring.gcp.obol.tech/write\n    authorization:\n      credentials: obol20!tnt8U!C...\n\nscrape_configs:\n  - job_name: 'charon'\n    static_configs:\n      - targets: ['charon:3620']\n  - job_name: \"lodestar\"\n    static_configs:\n      - targets: [ \"lodestar:5064\" ]\n  - job_name: 'node-exporter'\n    static_configs:\n      - targets: ['node-exporter:9100']\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var n=o(96540);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);