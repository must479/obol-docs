"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[59846],{34767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(74848),i=n(28453);const r={sidebar_position:4,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},s="Push metrics to Obol Monitoring",a={id:"int/quickstart/advanced/monitoring-credentials",title:"Push metrics to Obol Monitoring",description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster",source:"@site/versioned_docs/version-v0.16.0/int/quickstart/advanced/monitoring-credentials.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/monitoring-credentials",permalink:"/docs/v0.16.0/int/quickstart/advanced/monitoring-credentials",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.16.0/int/quickstart/advanced/monitoring-credentials.md",tags:[],version:"v0.16.0",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},sidebar:"tutorialSidebar",previous:{title:"Split existing validator private keys",permalink:"/docs/v0.16.0/int/quickstart/advanced/quickstart-split"},next:{title:"Advanced Docker Configs",permalink:"/docs/v0.16.0/int/quickstart/advanced/adv-docker-configs"}},d={},c=[];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"push-metrics-to-obol-monitoring",children:"Push metrics to Obol Monitoring"})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["This is ",(0,o.jsx)(t.strong,{children:"optional"})," and does not confer any special privileges within the Obol Network."]})}),"\n",(0,o.jsxs)(t.p,{children:["You may have been provided with ",(0,o.jsx)(t.strong,{children:"Monitoring Credentials"})," used to push distributed validator metrics to Obol's central prometheus cluster to monitor, analyze, and improve your Distributed Validator Cluster's performance."]}),"\n",(0,o.jsxs)(t.p,{children:["The provided credentials needs to be added in ",(0,o.jsx)(t.code,{children:"prometheus/prometheus.yml"})," replacing ",(0,o.jsx)(t.code,{children:"$PROM_REMOTE_WRITE_TOKEN"})," and will look like:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"obol20!tnt8U!C...\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The updated ",(0,o.jsx)(t.code,{children:"prometheus/prometheus.yml"})," file should look like:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"global:\n  scrape_interval:     30s # Set the scrape interval to every 30 seconds.\n  evaluation_interval: 30s # Evaluate rules every 30 seconds.\n\nremote_write:\n  - url: https://vm.monitoring.gcp.obol.tech/write\n    authorization:\n      credentials: obol20!tnt8U!C...\n\nscrape_configs:\n  - job_name: 'charon'\n    static_configs:\n      - targets: ['charon:3620']\n  - job_name: \"lodestar\"\n    static_configs:\n      - targets: [ \"lodestar:5064\" ]\n  - job_name: 'node-exporter'\n    static_configs:\n      - targets: ['node-exporter:9100']\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(96540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);