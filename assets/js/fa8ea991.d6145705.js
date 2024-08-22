"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[51001],{29843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(74848),o=n(28453),a=n(49489),s=n(7227);const l={sidebar_position:3,description:"Create a DV alone"},i="Create a DV alone",c={id:"start/quickstart_alone",title:"Create a DV alone",description:"Create a DV alone",source:"@site/versioned_docs/version-v0.19.1/start/quickstart_alone.md",sourceDirName:"start",slug:"/start/quickstart_alone",permalink:"/docs/v0.19.1/start/quickstart_alone",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.1/start/quickstart_alone.md",tags:[],version:"v0.19.1",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Create a DV alone"},sidebar:"tutorialSidebar",previous:{title:"Quickstart Overview",permalink:"/docs/v0.19.1/start/quickstart_overview"},next:{title:"Create a DV with a group",permalink:"/docs/v0.19.1/start/quickstart_group"}},d={},u=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1: Create the key shares locally",id:"step-1-create-the-key-shares-locally",level:2},{value:"Step 2: Deploy and start the nodes",id:"step-2-deploy-and-start-the-nodes",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"create-a-dv-alone",children:"Create a DV alone"})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Charon is in a beta state and should be used with caution according to its ",(0,r.jsx)(t.a,{href:"https://obol.tech/terms.pdf",children:"Terms of Use"}),"."]})}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsx)(t.p,{children:"It is possible for a single operator to manage all of the nodes of a DV cluster. The nodes can be run on a single machine, which is only suitable for testing, or the nodes can be run on multiple machines, which is expected for a production setup."}),(0,r.jsxs)(t.p,{children:["The private key shares can be created centrally and distributed securely to each node. Alternatively, the private key shares can be created in a lower-trust manner with a ",(0,r.jsx)(t.a,{href:"/docs/v0.19.1/int/key-concepts#distributed-validator-key-generation-ceremony",children:"Distributed Key Generation"})," process, which avoids the validator private key being stored in full anywhere, at any point in its lifecycle. Follow the ",(0,r.jsx)(t.a,{href:"/docs/v0.19.1/start/quickstart_group",children:"group quickstart"})," instead for this latter case."]})]}),"\n",(0,r.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["A basic ",(0,r.jsx)("a",{href:"https://docs.ethstaker.cc/ethstaker-knowledge-base/",target:"_blank",children:"knowledge"})," of Ethereum nodes and validators."]}),(0,r.jsxs)("li",{children:["Ensure you have ",(0,r.jsx)("a",{href:"https://git-scm.com/downloads",target:"_blank",children:"git"})," installed."]}),(0,r.jsxs)("li",{children:["Ensure you have ",(0,r.jsx)("a",{href:"https://docs.docker.com/engine/install/",target:"_blank",children:"docker"})," installed."]}),(0,r.jsxs)("li",{children:["Make sure ",(0,r.jsx)("code",{children:"docker"})," is running before executing the commands below."]})]}),"\n",(0,r.jsx)(t.h2,{id:"step-1-create-the-key-shares-locally",children:"Step 1: Create the key shares locally"}),"\n",(0,r.jsxs)(a.A,{groupId:"Launchpad-other",children:[(0,r.jsxs)(s.A,{value:"Launchpad",label:"Launchpad",default:!0,children:[(0,r.jsxs)(t.p,{children:["Go to the the ",(0,r.jsx)("a",{href:"/docs/dvl/intro#dv-launchpad-links",children:"DV Launchpad"})," and select ",(0,r.jsx)("code",{children:"Create a distributed validator alone"}),". Follow the steps to configure your DV cluster. The Launchpad will give you a docker command to create your cluster. ",(0,r.jsx)("br",{}),"Before you run the command, checkout the ",(0,r.jsx)("a",{href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster.git",children:"Quickstart Alone"})," demo repo and ",(0,r.jsx)("code",{children:"cd"})," into the directory."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# Clone the repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-cluster.git\n\n# Change directory\ncd charon-distributed-validator-cluster/\n\n# Run the command provided in the DV Launchpad "Create a cluster alone" flow\ndocker run -u $(id -u):$(id -g) --rm -v "$(pwd)/:/opt/charon" obolnetwork/charon:v0.19.1 create cluster --definition-file=...\n'})})]}),(0,r.jsxs)(s.A,{value:"CLI",label:"CLI",children:[(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Clone the ",(0,r.jsx)("a",{href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster",children:"Quickstart Alone"})," demo repo and ",(0,r.jsx)("code",{children:"cd"})," into the directory."]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Clone the repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-cluster.git\n\n# Change directory\ncd charon-distributed-validator-cluster/\n"})}),(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"Run the cluster creation command, setting required flag values."}),"\n"]}),(0,r.jsxs)(t.p,{children:["Run the below command to create the validator private key shares and cluster artifacts locally, replacing the example values for ",(0,r.jsx)(t.code,{children:"nodes"}),", ",(0,r.jsx)(t.code,{children:"network"}),", ",(0,r.jsx)(t.code,{children:"num-validators"}),", ",(0,r.jsx)(t.code,{children:"fee-recipient-addresses"}),",  and ",(0,r.jsx)(t.code,{children:"withdrawal-addresses"}),".\nCheck the ",(0,r.jsx)(t.a,{href:"/docs/v0.19.1/charon/charon-cli-reference#create-a-full-cluster-locally",children:"Charon CLI reference"})," for additional, optional flags to set."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'  docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.19.1 create cluster --nodes=4 --network=holesky --num-validators=1 --name="Quickstart Guide Cluster" --cluster-dir="cluster" --fee-recipient-addresses=0x000000000000000000000000000000000000dead --withdrawal-addresses=0x000000000000000000000000000000000000dead\n'})}),(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["If you would like your cluster to appear on the ",(0,r.jsx)(t.a,{href:"../dvl/intro",children:"DV Launchpad"}),", add the ",(0,r.jsx)(t.code,{children:"--publish"})," flag to the command."]})})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.p,{children:["After the ",(0,r.jsx)(t.code,{children:"create cluster"})," command is run, you should have multiple subfolders within the newly created ",(0,r.jsx)(t.code,{children:"./cluster/"})," folder, one for each node created."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["Backup the ",(0,r.jsx)(t.code,{children:"./cluster/"})," folder, then move on to deploying the cluster."]})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"Make sure your backup is secure and private, someone with access to these files could get the validators slashed."})}),"\n",(0,r.jsx)(t.h2,{id:"step-2-deploy-and-start-the-nodes",children:"Step 2: Deploy and start the nodes"}),"\n",(0,r.jsxs)(a.A,{groupId:"Local nodes-distributed nodes",children:[(0,r.jsxs)(s.A,{value:"Run the nodes on a single machine",label:"Run the nodes on a single machine",default:!0,children:[(0,r.jsxs)(t.admonition,{type:"warning",children:[(0,r.jsxs)(t.p,{children:["This part of the guide only runs one Execution Client, one Consensus Client, and 6 Distributed Validator Charon Client + Validator Client pairs on a single docker instance, and ",(0,r.jsx)(t.strong,{children:"is not suitable for a mainnet deployment"}),". (If this machine fails, there will not be any fault tolerance - the cluster will also fail.)"]}),(0,r.jsx)(t.p,{children:"For a production deployment with fault tolerance, follow the part of the guide instructing you how to distribute the nodes across multiple machines."})]}),(0,r.jsx)(t.p,{children:"Run this command to start your cluster containers if you deployed using CDVC repo above."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"# Start the distributed validator cluster\ndocker compose up --build -d\n"})}),(0,r.jsx)(t.p,{children:"Check the monitoring dashboard and see if things look all right"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"# Open Grafana\nopen http://localhost:3000/d/laEp8vupp\n"})})]}),(0,r.jsxs)(s.A,{value:"Run the nodes on many machines",label:"Run the nodes on multiple machines",children:[(0,r.jsxs)(t.admonition,{type:"warning",children:[(0,r.jsxs)(t.p,{children:["To distribute your cluster across multiple machines, each node in the cluster needs one of the folders called ",(0,r.jsx)(t.code,{children:"node*/"})," to be copied to it. Each folder should be copied to a CDVN repo and renamed from ",(0,r.jsx)(t.code,{children:"node*"})," to ",(0,r.jsx)(t.code,{children:".charon"}),"."]}),(0,r.jsxs)(t.p,{children:["Right now, the ",(0,r.jsx)(t.code,{children:"charon create cluster"})," command ",(0,r.jsx)(t.a,{href:"./quickstart_alone#step-1-create-the-key-shares-locally",children:"used earlier to create the private keys"})," outputs a folder structure like ",(0,r.jsx)(t.code,{children:"cluster/node*/"}),". Make sure to grab the ",(0,r.jsx)(t.code,{children:"./node*/"})," folders, ",(0,r.jsx)(t.em,{children:"rename"})," them to ",(0,r.jsx)(t.code,{children:".charon"})," and then move them to one of the single node repos below. Once all nodes are online, synced, and connected, you will be ready to activate your validator."]})]}),(0,r.jsxs)(t.p,{children:["This is necessary for the folder to be found by the default ",(0,r.jsx)(t.code,{children:"charon run"})," command. Optionally, it is possible to override ",(0,r.jsx)(t.code,{children:"charon run"}),"'s default file locations by using ",(0,r.jsx)(t.code,{children:'charon run --private-key-file="node0/charon-enr-private-key" --lock-file="node0/cluster-lock.json"'})," for each instance of charon you start (substituting ",(0,r.jsx)(t.code,{children:"node0"})," for each node number in your cluster as needed)."]}),(0,r.jsxs)(t.p,{children:["\ud83d\udc49"," Use the single node ",(0,r.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-node",children:"docker compose"}),", the kubernetes ",(0,r.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-k8s-distributed-validator-node",children:"manifests"}),", or the ",(0,r.jsx)(t.a,{href:"https://github.com/ObolNetwork/helm-charts",children:"helm chart"})," example repos to get your nodes up and connected after loading the ",(0,r.jsx)(t.code,{children:".charon"})," folder artifacts into them appropriately."]}),(0,r.jsx)("br",{}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-log",metastring:'title="Output from create cluster"',children:"\ncluster\n\u251c\u2500\u2500 node0\n\u2502   \u251c\u2500\u2500 charon-enr-private-key\n\u2502   \u251c\u2500\u2500 cluster-lock.json\n\u2502   \u251c\u2500\u2500 deposit-data.json\n\u2502   \u2514\u2500\u2500 validator_keys\n\u2502       \u251c\u2500\u2500 keystore-0.json\n\u2502       \u2514\u2500\u2500 keystore-0.txt\n\u251c\u2500\u2500 node1\n\u2502   \u251c\u2500\u2500 charon-enr-private-key\n\u2502   \u251c\u2500\u2500 cluster-lock.json\n\u2502   \u251c\u2500\u2500 deposit-data.json\n\u2502   \u2514\u2500\u2500 validator_keys\n\u2502       \u251c\u2500\u2500 keystore-0.json\n\u2502       \u2514\u2500\u2500 keystore-0.txt\n\u251c\u2500\u2500 node2\n\u2502   \u251c\u2500\u2500 charon-enr-private-key\n\u2502   \u251c\u2500\u2500 cluster-lock.json\n\u2502   \u251c\u2500\u2500 deposit-data.json\n\u2502   \u2514\u2500\u2500 validator_keys\n\u2502       \u251c\u2500\u2500 keystore-0.json\n\u2502       \u2514\u2500\u2500 keystore-0.txt\n\u2514\u2500\u2500 node3\n    \u251c\u2500\u2500 charon-enr-private-key\n    \u251c\u2500\u2500 cluster-lock.json\n    \u251c\u2500\u2500 deposit-data.json\n    \u2514\u2500\u2500 validator_keys\n        \u251c\u2500\u2500 keystore-0.json\n        \u2514\u2500\u2500 keystore-0.txt\n        \u251c\u2500\u2500 keystore-N.json\n        \u2514\u2500\u2500 keystore-N.txt\n\n"})}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-log",metastring:'title="Folder structure to be placed on each DV node"',children:"\u2514\u2500\u2500 .charon\n    \u251c\u2500\u2500 charon-enr-private-key\n    \u251c\u2500\u2500 cluster-lock.json\n    \u251c\u2500\u2500 deposit-data.json\n    \u2514\u2500\u2500 validator_keys\n        \u251c\u2500\u2500 keystore-0.json\n        \u251c\u2500\u2500 keystore-0.txt\n        \u251c\u2500\u2500 ...\n        \u251c\u2500\u2500 keystore-N.json\n        \u2514\u2500\u2500 keystore-N.txt\n"})}),(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsxs)(t.p,{children:["Currently, the quickstart repo installs a node on the Holesky testnet. It is possible to choose a different network (another testnet, or mainnet) by overriding the ",(0,r.jsx)(t.code,{children:".env"})," file."]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:".env.sample"})," is a sample environment file that allows overriding default configuration defined in ",(0,r.jsx)(t.code,{children:"docker-compose.yml"}),". Uncomment and set any variable to override its value."]}),(0,r.jsxs)(t.p,{children:["Setup the desired inputs for the DV, including the network you wish to operate on. Check the ",(0,r.jsx)(t.a,{href:"/docs/v0.19.1/charon/charon-cli-reference",children:"Charon CLI reference"})," for additional optional flags to set. Once you have set the values you wish to use. Make a copy of this file called ",(0,r.jsx)(t.code,{children:".env"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# Copy ".env.sample", renaming it ".env"\ncp .env.sample .env\n'})})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const o={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:n,children:t})}},49489:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),o=n(34164),a=n(24245),s=n(56347),l=n(36494),i=n(62814),c=n(45167),d=n(69900);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=m({queryString:n,groupId:o}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,d.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),x=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=n(11062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),o=l[n].value;o!==r&&(c(t),s(o))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,o.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function g(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,v.jsx)(g,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);