"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[923],{4951:(e,l,n)=>{n.d(l,{A:()=>r});var i=n(5043);const r=e=>{(0,i.useEffect)((()=>{document.title=e}),[e])}},6923:(e,l,n)=>{n.r(l),n.d(l,{default:()=>U});var i=n(6946),r=n(8903),s=n(5043),a=n(579);const t=e=>{let{loading:l,piece:n,handleClick:i,isValidMove:r,isPreviousAction:s}=e;return(0,a.jsx)("div",{className:["reversi-square",!l&&s?"reversi-previous-move":"",!l&&r?"reversi-valid-move":""].join(" "),onClick:i,children:n&&(0,a.jsx)("div",{className:`reversi-piece reversi-${n}`})})},c=e=>{let{loading:l,board:n,validBoard:i,handleClick:r,previousAction:s}=e;return(0,a.jsx)("div",{className:"board",children:n.map(((e,n)=>(0,a.jsx)("div",{children:e.map(((e,c)=>(0,a.jsx)(t,{loading:l,piece:e,handleClick:l?()=>{}:()=>r(n,c),isValidMove:i[n][c],isPreviousAction:s&&n===s.row&&c===s.col},c)))},n)))})};var o=n(5865),u=n(6992);const d=function(e){let{player:l,piecesNumber:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(u.A,{flexDirection:"row",gap:10,mb:1,children:[(0,a.jsx)("div",{className:"reversi-piece reversi-black-piece",children:(0,a.jsx)(o.A,{color:"white",variant:"h6",children:n.black})}),(0,a.jsxs)(u.A,{flexDirection:"row",children:[(0,a.jsx)(o.A,{variant:"h5",children:"Turns:"}),(0,a.jsx)("span",{className:`reversi-piece reversi-${l}-piece reversi-small`})]}),(0,a.jsx)("div",{className:"reversi-piece reversi-white-piece",children:(0,a.jsx)(o.A,{variant:"h6",children:n.white})})]})})};var h=n(3336),p=n(7392),x=n(5721),m=n(681),v=n(8968),j=n(9814),A=n(7891),f=n(7796),b=n(5742),w=n(2492);const g=function(e){let{loading:l,history:n,view:i,viewHistory:r}=e;return(0,a.jsxs)(h.A,{variant:"outlined",sx:{p:2},children:[(0,a.jsxs)(u.A,{direction:"row",gap:2,children:[(0,a.jsx)(p.A,{size:"small",onClick:()=>{r(i+1)},disabled:l||i===n.length-1,children:(0,a.jsx)(b.A,{fontSize:"small"})}),(0,a.jsx)(o.A,{variant:"h6",children:"History"}),(0,a.jsx)(p.A,{size:"small",onClick:()=>{r(i-1)},disabled:l||-1===i||0===i,children:(0,a.jsx)(w.A,{fontSize:"small"})})]}),(0,a.jsx)(x.A,{sx:{overflow:"auto",maxHeight:300},children:n.map(((e,n)=>(0,a.jsx)(m.Ay,{disablePadding:!0,secondaryAction:n===i?(0,a.jsx)(p.A,{size:"small",disabled:!0,children:(0,a.jsx)(f.A,{fontSize:"small"})}):(0,a.jsx)(p.A,{size:"small",disableRipple:!0,children:(0,a.jsx)(A.A,{fontSize:"small"})}),children:(0,a.jsxs)(v.A,{disabled:l,onClick:()=>r(n),selected:n===i,children:[(0,a.jsx)(j.A,{children:(0,a.jsx)("span",{className:`reversi-piece reversi-${e.action.player}-piece reversi-tiny`})}),(0,a.jsxs)(o.A,{variant:"subtitle",children:[e.action.row,", ",e.action.col]},n)]})},n)))})]})};var y=n(4493),k=n(4526);const S=function(e){let{predict:l,treeDeepth:n,handleDeepthChange:i}=e;return(0,a.jsxs)(h.A,{variant:"outlined",sx:{width:350,p:1.5,mt:1,mb:1},children:[null!==l&&0===l.score&&(0,a.jsx)(o.A,{children:"Prediciton: Draw"}),null!==l&&0!==l.score&&(0,a.jsxs)(o.A,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:["Prediciton:",(0,a.jsx)("span",{className:`reversi-tiny reversi-piece reversi-${l.score>0?"black":"white"}-piece`}),"win ",Math.abs(l.score)," pieces after ",l.treeDeepth," moves"]}),null!==l&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.A,{children:["Running time: ",l.time/1e3," s"]}),(0,a.jsx)(y.A,{sx:{mt:1}})]}),(0,a.jsx)(o.A,{mt:1,children:"AI Predict Moves:"}),(0,a.jsx)(k.Ay,{valueLabelDisplay:"off",min:1,max:15,marks:[{label:n,value:n}],value:n,onChange:e=>i(e.target.value)})]})},C="black",D=[[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,"white-piece","black-piece",null,null,null],[null,null,null,"black-piece","white-piece",null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null]],N=I(P(D,C)),E=G(D);function z(e,l){return e>=0&&e<8&&l>=0&&l<8}function $(e,l,n,i,r){const s=`${i}-piece`,a=`${function(e){return"black"===e?"white":"black"}(i)}-piece`,t=[];return[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]].forEach((i=>{const[c,o]=i,u=[];let d=l+c,h=n+o;if(z(d,h)&&e[d][h]===a)for(;z(d,h);){const l=e[d][h];if(l===a)u.push([d,h]);else{if(null===l)break;if(l===s){if(t.push(...u),r)return[t];break}}d+=c,h+=o}})),t}const M=(e,l,n,i)=>{const r=JSON.parse(JSON.stringify(e));return((e,l,n,i)=>{e[n][i]=`${l}-piece`})(r,l,n,i),((e,l,n,i)=>{$(e,n,i,l).forEach((n=>{let[i,r]=n;e[i][r]=`${l}-piece`}))})(r,l,n,i),r};function P(e,l){const n=[];return e.forEach(((i,r)=>{i.forEach(((i,s)=>{if(null===i){$(e,r,s,l,!0).length>0&&n.push([r,s])}}))})),n}function G(e){let l={black:0,white:0};return e.forEach((e=>{e.forEach((e=>{"black-piece"===e?l.black++:"white-piece"===e&&l.white++}))})),l}function I(e){const l=[...Array(8)].map((e=>[...Array(8)].map((e=>!1))));return e.forEach((e=>{let[n,i]=e;return l[n][i]=!0})),l}var R=n(4600),H=n(1637),B=n(3404),L=n(1823),W=n(2577),F=n(9280);const J=function(e){let{newGame:l,aiMove:n,stop:i,loading:r,isNewGame:s,gameState:t,toggleAdvance:c}=e;return(0,a.jsxs)(R.A,{flexDirection:"row",gap:2,sx:{mt:2,mb:1},children:[r&&(0,a.jsx)(H.A,{color:"secondary"}),(0,a.jsx)(B.A,{onClick:l,variant:"outlined",disabled:r||s,children:"New Game"}),(0,a.jsx)(B.A,{onClick:n,variant:"outlined",color:"secondary",disabled:r||0===P(t.board,t.player).length,children:"AI play"}),r&&(0,a.jsx)(L.A,{title:"Stop",children:(0,a.jsx)(p.A,{color:"error",onClick:i,children:(0,a.jsx)(F.A,{})})}),(0,a.jsx)(L.A,{title:"Settings",children:(0,a.jsx)(p.A,{onClick:c,children:(0,a.jsx)(W.A,{})})})]})};var O=n(4951);const U=function(){const[e,l]=(0,s.useState)(null),[t,o]=(0,s.useState)(!1),[u,h]=(0,s.useState)({board:D,player:C}),[p,x]=(0,s.useState)(N),[m,v]=(0,s.useState)(E),[j,A]=(0,s.useState)([]),[f,b]=(0,s.useState)(-1),[w,y]=(0,s.useState)(null),[k,z]=(0,s.useState)(8),[$,R]=(0,s.useState)(!1);(0,O.A)("Reversi");const H=(e,l,n)=>{if(Boolean(!u.board[e][l])&&p[e][l]){const i={board:M(u.board,u.player,e,l),player:"black"===u.player?"white":"black"};n||y(null),B(i,u.player,e,l),h(i)}},B=(e,l,n,i)=>{const r={gameState:e,action:{player:l,row:n,col:i}};A(-1===f?[r]:[r,...j.slice(f)]),b(0)};return(0,s.useEffect)((()=>{const e=new Worker(new URL(n.p+n.u(172),n.b));return l(e),()=>e.terminate()}),[]),(0,s.useEffect)((()=>{const e=P(u.board,u.player);x(I(e)),v(G(u.board))}),[u]),(0,a.jsxs)(i.A,{p:2,display:"flex",alignItems:"center",flexDirection:"column",children:[(0,a.jsx)(d,{player:u.player,piecesNumber:m}),(0,a.jsxs)(r.Ay,{container:!0,maxWidth:"sm",mt:2,children:[(0,a.jsxs)(r.Ay,{item:!0,xs:12,md:8,display:"flex",flexDirection:"column",alignItems:"center",children:[(0,a.jsx)(c,{loading:t,board:u.board,validBoard:p,handleClick:H,previousAction:-1!==f&&j[f].action}),(0,a.jsx)(J,{newGame:()=>{h({board:D,player:C}),A([]),b(-1)},aiMove:()=>{const l=new Date;e&&(e.postMessage([u.board,u.player,k]),o(!0),e.onmessage=e=>{const[n,i]=e.data,r=new Date-l;y({score:i,treeDeepth:k,time:r}),o(!1),H(n[0],n[1],!0)})},loading:t,stop:()=>{e.terminate();const i=new Worker(new URL(n.p+n.u(791),n.b));l(i),o(!1)},toggleAdvance:()=>R((e=>!e)),isNewGame:0===j.length,gameState:u}),$&&(0,a.jsx)(S,{predict:w,treeDeepth:k,handleDeepthChange:e=>{z(e)}})]}),(0,a.jsx)(r.Ay,{item:!0,xs:12,md:4,children:(0,a.jsx)(g,{loading:t,history:j,view:f,viewHistory:e=>{b(e),h(j[e].gameState)}})})]})]})}}}]);
//# sourceMappingURL=923.a8f86305.chunk.js.map