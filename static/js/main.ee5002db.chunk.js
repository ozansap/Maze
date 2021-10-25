(this.webpackJsonpmaze=this.webpackJsonpmaze||[]).push([[0],{12:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t);var a=i(2),s=i.n(a),n=i(5),r=i.n(n),c=(i(12),i(1)),d=i(3),l=i(6),o=i(7),h=function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,null,[{key:"new",value:function(e,t){var i={state:0,i:{x:0,y:0},j:{x:0,y:0},grid:[],stack:[]};i.width=e,i.height=t,i.size=e*t,i.visitedCount=1;for(var a=0,s=0;s<e;s++){i.grid.push([]);for(var n=0;n<t;n++)i.grid[s].push({id:a++,walls:31,visited:!1,head:!1,stacked:!1,start:!1,goal:!1})}return i}},{key:"clear",value:function(e){e.state=3;for(var t=0;t<e.width;t++)for(var i=0;i<e.height;i++)e.grid[t][i].visited=!1,e.grid[t][i].head=!1,e.grid[t][i].stacked=!1,e.grid[t][i].start=!1,e.grid[t][i].goal=!1;return e}},{key:"generate_full",value:function(t){var i=t.grid[t.i.x][t.i.y];for(i.visited=!0;t.visitedCount<t.size;){var a,s,n,r,c=[[null===(a=t.grid[t.i.x])||void 0===a?void 0:a[t.i.y-1],1,[0,-1]],[null===(s=t.grid[t.i.x+1])||void 0===s?void 0:s[t.i.y],2,[1,0]],[null===(n=t.grid[t.i.x])||void 0===n?void 0:n[t.i.y+1],4,[0,1]],[null===(r=t.grid[t.i.x-1])||void 0===r?void 0:r[t.i.y],8,[-1,0]]].filter((function(e){return e[0]&&!e[0].visited}));if(c.length){t.state=1;var d=c[Math.floor(Math.random()*c.length)],l=d[0],o=d[1],h=o<4?o<<2:o>>2;i.walls&=~o,l.walls&=~h,l.visited=!0,t.visitedCount++,i=l,t.stack.push(t.i),t.i={x:t.i.x+d[2][0],y:t.i.y+d[2][1]}}else t.state=2,t.i=t.stack.pop(),i=t.grid[t.i.x][t.i.y]}return e.clear(t)}},{key:"generate_step",value:function(t){var i,a,s,n;if(t.visitedCount===t.size)return e.clear(t);var r=t.grid[t.i.x][t.i.y];r.visited=!0,r.stacked=!0,r.head=!1;var c=[[null===(i=t.grid[t.i.x])||void 0===i?void 0:i[t.i.y-1],1,[0,-1]],[null===(a=t.grid[t.i.x+1])||void 0===a?void 0:a[t.i.y],2,[1,0]],[null===(s=t.grid[t.i.x])||void 0===s?void 0:s[t.i.y+1],4,[0,1]],[null===(n=t.grid[t.i.x-1])||void 0===n?void 0:n[t.i.y],8,[-1,0]]].filter((function(e){return e[0]&&!e[0].visited}));if(c.length){t.state=1;var d=c[Math.floor(Math.random()*c.length)],l=d[0],o=d[1],h=o<4?o<<2:o>>2;r.walls&=~o,l.walls&=~h,l.head=!0,l.visited=!0,t.visitedCount++,r=l,t.stack.push(t.i),t.i={x:t.i.x+d[2][0],y:t.i.y+d[2][1]}}else t.state=2,r.stacked=!1,t.i=t.stack.pop(),(r=t.grid[t.i.x][t.i.y]).head=!0;return t}},{key:"select_start",value:function(e,t){e.grid[e.i.x][e.i.y].start=!1;var i=Math.floor(t/e.height),a=t-i*e.height;return e.grid[i][a].start=!0,e.i={x:i,y:a},e.state=Math.max(4,e.state),e}},{key:"select_goal",value:function(e,t){e.grid[e.j.x][e.j.y].goal=!1;var i=Math.floor(t/e.height),a=t-i*e.height;return e.grid[i][a].goal=!0,e.j={x:i,y:a},e.state=5,e}},{key:"solve_full",value:function(t){for(;8!==t.state;)t=e.solve_step(t);return t}},{key:"solve_step",value:function(e){var t,i,a,s;if(e.i.x===e.j.x&&e.i.y===e.j.y)return e.state=8,e;var n=e.grid[e.i.x][e.i.y];n.visited=!0,n.stacked=!0,n.head=!1;var r=[[null===(t=e.grid[e.i.x])||void 0===t?void 0:t[e.i.y-1],1,[0,-1]],[null===(i=e.grid[e.i.x+1])||void 0===i?void 0:i[e.i.y],2,[1,0]],[null===(a=e.grid[e.i.x])||void 0===a?void 0:a[e.i.y+1],4,[0,1]],[null===(s=e.grid[e.i.x-1])||void 0===s?void 0:s[e.i.y],8,[-1,0]]].filter((function(e){return e[0]&&!e[0].visited&&!((e[1]<4?e[1]<<2:e[1]>>2)&e[0].walls)}));if(r.length){e.state=6;var c=r[Math.floor(Math.random()*r.length)],d=c[0];d.head=!0,d.visited=!0,n=d,e.stack.push(e.i),e.i={x:e.i.x+c[2][0],y:e.i.y+c[2][1]}}else e.state=7,n.stacked=!1,e.i=e.stack.pop(),(n=e.grid[e.i.x][e.i.y]).head=!0;return e}}]),e}(),u=i(0);function j(e){var t=e.mazeData,i=e.setMazeData,a=e.loop,s=e.setSelectStart,n=e.newMaze,r=e.anim_start,d=e.anim_stop,l=e.setSettingsMenu,o=a?Object(u.jsx)("p",{className:"button animButton",onClick:d,children:"Stop"}):Object(u.jsx)("p",{className:"button animButton",onClick:r,children:"Start"}),j=a?Object(u.jsx)("p",{className:"button animButton",onClick:d,children:"Stop"}):Object(u.jsx)("p",{className:"button animButton",onClick:r,children:"Start"});return Object(u.jsxs)("header",{id:"header",children:[Object(u.jsxs)("div",{className:"headerGroup",children:[Object(u.jsx)("div",{className:"headerGroup-top",children:Object(u.jsx)("h3",{children:"Maze"})}),Object(u.jsxs)("div",{className:"headerGroup-bottom",children:[0!==t.state&&Object(u.jsx)("div",{className:"headerGroup-bottom-button-wrapper",children:Object(u.jsx)("p",{className:"button",onClick:n,children:"New"})}),Object(u.jsx)("div",{className:"headerGroup-bottom-button-wrapper",children:Object(u.jsx)("p",{className:"button",onClick:function(){l(!0)},children:"Settings"})})]})]}),t.state<3&&Object(u.jsxs)("div",{className:"headerGroup",children:[Object(u.jsx)("div",{className:"headerGroup-top",children:Object(u.jsx)("h3",{children:"Generate"})}),Object(u.jsxs)("div",{className:"headerGroup-bottom",children:[Object(u.jsx)("div",{className:"headerGroup-bottom-button-wrapper",children:Object(u.jsx)("p",{className:"button",onClick:function(){d();var e=h.generate_full(t);i(Object(c.a)({},e))},children:"Complete"})}),Object(u.jsx)("div",{className:"headerGroup-bottom-button-wrapper",children:Object(u.jsx)("p",{className:"button",onClick:function(){d();var e=h.generate_step(t);i(Object(c.a)({},e))},children:"Step"})}),Object(u.jsx)("div",{className:"headerGroup-bottom-button-wrapper",children:o})]})]}),t.state>=3&&Object(u.jsxs)("div",{className:"headerGroup",children:[Object(u.jsx)("div",{className:"headerGroup-top",children:Object(u.jsx)("h3",{children:"Solve"})}),Object(u.jsxs)("div",{className:"headerGroup-bottom",children:[t.state<5&&Object(u.jsx)("p",{children:"Select two cells"}),t.state>=5&&t.state<8&&Object(u.jsx)("div",{className:"headerGroup-bottom-button-wrapper",children:Object(u.jsx)("p",{className:"button",onClick:function(){d();var e=h.solve_full(t);i(Object(c.a)({},e))},children:"Complete"})}),t.state>=5&&t.state<8&&Object(u.jsx)("div",{className:"headerGroup-bottom-button-wrapper",children:Object(u.jsx)("p",{className:"button",onClick:function(){d();var e=h.solve_step(t);i(Object(c.a)({},e))},children:"Step"})}),t.state>=5&&t.state<8&&Object(u.jsx)("div",{className:"headerGroup-bottom-button-wrapper",children:j}),t.state>=5&&8===t.state&&Object(u.jsx)("div",{className:"headerGroup-bottom-button-wrapper",children:Object(u.jsx)("p",{className:"button",onClick:function(){s(!0);var e=h.clear(t);i(Object(c.a)({},e))},children:"Clear"})})]})]})]})}var v=1,b=2,p=4,g=8;function m(e){var t=e.mazeData,i=e.size,a=e.id,s=e.walls,n=e.visited,r=e.head,d=e.stacked,l=e.start,o=e.goal,h=e.solve_select,j="/assets/cells/cell_";j+=s&v?"1":"0",j+=s&b?"1":"0",j+=s&p?"1":"0",j+=s&g?"1":"0",j+=".png";var m="";3<=t.state&&t.state<=5&&(m+=" selectable"),n&&(m+=" visited"),r&&(m+=" head"),d&&(m+=" stacked"),l&&(m+=" start"),o&&(m+=" goal");var x={};return 3<=t.state&&t.state<=5&&(x.onClick=function(){return h(a)}),Object(u.jsx)("img",Object(c.a)({id:a,style:{height:i+"px"},src:j,alt:"",className:m},x))}function x(e){var t=e.mazeData,i=e.setMazeData,s=e.settings,n=e.selectStart,r=e.setSelectStart,l=Object(a.useState)(0),o=Object(d.a)(l,2),j=o[0],v=o[1],b=O();Object(a.useEffect)((function(){var e=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),t=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),i=document.getElementById("maze").getBoundingClientRect(),a=Math.min(.9*e/s.width,.9*(t-i.top)/s.height);v(a)}),[s.width,s.height,b]);var p=function(e){var a=n?h.select_start(t,e):h.select_goal(t,e);i(Object(c.a)({},a)),r(!n)};return Object(u.jsx)("div",{className:"maze",id:"maze",children:Object(u.jsx)("div",{className:"maze-grid",children:t.grid.map((function(e,i){return Object(u.jsx)("div",{className:"maze-grid-column",children:e.map((function(e,i){return Object(u.jsx)(m,{mazeData:t,size:j,id:e.id,walls:e.walls,visited:e.visited,head:e.head,stacked:e.stacked,start:e.start,goal:e.goal,solve_select:p},e.id)}))},i)}))})})}var O=function(){var e=Object(a.useState)({width:void 0,height:void 0}),t=Object(d.a)(e,2),i=t[0],s=t[1];return Object(a.useEffect)((function(){function e(){s({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),i};function f(e){var t=e.settings,i=e.setSettings,s=e.settingsMenu,n=e.setSettingsMenu,r=e.newMaze,l=e.anim_restart,o=Object(a.useState)(t),h=Object(d.a)(o,2),j=h[0],v=h[1];return Object(u.jsxs)("div",{className:"settingsWindow",style:{display:s?"flex":"none"},children:[Object(u.jsx)("div",{className:"settingsWindow-bg",onClick:function(){n(!1);var e=Math.max(Math.floor(j.width),1),a=Math.max(Math.floor(j.height),1),s=Math.max(Math.floor(j.speed),1);e===t.width&&a===t.height||r({width:e,height:a}),s!==t.speed&&l({speed:s}),i({width:e,height:a,speed:s}),v({width:e,height:a,speed:s})}}),Object(u.jsxs)("div",{className:"settingsWindow-main",children:[Object(u.jsxs)("div",{className:"settingsWindow-main-setting_container",children:[Object(u.jsx)("label",{children:"Width"}),Object(u.jsx)("input",{type:"number",placeholder:t.width,value:j.width,onChange:function(e){v(Object(c.a)(Object(c.a)({},j),{},{width:parseInt(e.target.value)||""}))}})]}),Object(u.jsxs)("div",{className:"settingsWindow-main-setting_container",children:[Object(u.jsx)("label",{children:"Height"}),Object(u.jsx)("input",{type:"number",placeholder:t.height,value:j.height,onChange:function(e){v(Object(c.a)(Object(c.a)({},j),{},{height:parseInt(e.target.value)||""}))}})]}),Object(u.jsxs)("div",{className:"settingsWindow-main-setting_container",children:[Object(u.jsx)("label",{children:"Animation Speed"}),Object(u.jsx)("input",{type:"number",placeholder:t.speed,value:j.speed,onChange:function(e){v(Object(c.a)(Object(c.a)({},j),{},{speed:parseInt(e.target.value)||""}))}})]})]})]})}function w(){var e=Object(a.useState)({width:20,height:20,speed:50}),t=Object(d.a)(e,2),i=t[0],s=t[1],n=Object(a.useState)(h.new(i.width,i.height)),r=Object(d.a)(n,2),l=r[0],o=r[1],v=Object(a.useState)(!0),b=Object(d.a)(v,2),p=b[0],g=b[1],m=Object(a.useState)(),O=Object(d.a)(m,2),w=O[0],y=O[1],N=Object(a.useState)(!1),k=Object(d.a)(N,2),S=k[0],M=k[1],z=function(e){var t=e.width,a=e.height;C(),g(!0),o(h.new(t||i.width,a||i.width))},_=function(e){var t=e.speed,a=l.state<3?h.generate_step:h.solve_step,s=setInterval((function(){var e=a(l);o(Object(c.a)({},e)),3!==l.state&&8!==l.state||(clearInterval(s),y(void 0))}),1e3/(t||i.speed));y(s)},C=function(){clearInterval(w),y(void 0)};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{mazeData:l,setMazeData:o,loop:w,setSelectStart:g,newMaze:z,anim_start:_,anim_stop:C,setSettingsMenu:M}),Object(u.jsx)(x,{mazeData:l,setMazeData:o,settings:i,selectStart:p,setSelectStart:g}),Object(u.jsx)(f,{settings:i,setSettings:s,settingsMenu:S,setSettingsMenu:M,newMaze:z,anim_restart:function(e){var t=e.speed;w&&(clearInterval(w),_({speed:t}))}})]})}r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ee5002db.chunk.js.map