(this["webpackJsonpsam-db-project"]=this["webpackJsonpsam-db-project"]||[]).push([[0],{120:function(e,t,a){},122:function(e,t,a){},124:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},150:function(t,a,r){"use strict";r.r(a);var n=r(2),c=r(0),s=r.n(c),l=r(10),i=r.n(l),o=(r(120),r(40)),d=r.n(o),u=r(60),j=r(31),b=r(11),h=r(36),f=(r(122),r(68)),O=r(99),p=r(47),g=(r(124),r(206)),m=r(96),x=r.n(m),v=r(95),w=r.n(v),y=r(192),C=r(209),S=r(199),k=r(195),F=r(194),R=r(208),D=r(210),T=r(34),N=r.n(T),E=function(e){var t=e.addRow,a=e.add,r=e.data,l=e.id,i=e.setData,o=e.alertSetter,d=Object(c.useState)(a?{Class:"",Title:"",Link:"",Categories:"",Notes:""}:{Class:r[l].Class,Title:r[l].Title,Link:r[l].Link,Categories:r[l].Categories,Notes:r[l].Notes,_id:r[l]._id}),u=Object(h.a)(d,2),f=u[0],O=u[1],p=s.a.useState(!1),g=Object(h.a)(p,2),m=g[0],v=g[1],T=function(){v(!0)},E=function(){v(!1)},H=function(e){N.a.post("https://stark-anchorage-94670.herokuapp.com/addData",e).then((function(a){console.log("Add Data:",a.status);var r=a.data.ops[0]._id;e._id=r,t(e)})).catch((function(e){console.log(e),o(!0,"error","Error adding data")}))},A=function(e){return function(t){var a=t.target.value;O(Object(b.a)(Object(b.a)({},f),{},Object(j.a)({},e,a)))}};return Object(n.jsxs)("div",{children:[a?Object(n.jsx)(D.a,{title:"Add",children:Object(n.jsx)(y.a,{className:"addDataForm",onClick:T,variant:"outlined",color:"primary",size:"large",startIcon:Object(n.jsx)(w.a,{fontSize:"large"}),children:"Document"})}):Object(n.jsx)(D.a,{title:"Edit",children:Object(n.jsx)(y.a,{"aria-label":"edit",onClick:T,variant:"outlined",color:"secondary",children:Object(n.jsx)(x.a,{})})}),Object(n.jsxs)(C.a,{open:m,onClose:E,"aria-labelledby":"form-dialog-title",children:[Object(n.jsx)(F.a,{id:"form-dialog-title",children:a?"Add New Document":"Edit Document"}),Object(n.jsxs)(k.a,{children:[Object(n.jsx)(R.a,{autoFocus:!0,margin:"dense",label:"Class",type:"text",fullWidth:!0,value:f.Class,onChange:A("Class")}),Object(n.jsx)(R.a,{margin:"dense",label:"Title",type:"text",fullWidth:!0,value:f.Title,onChange:A("Title")}),Object(n.jsx)(R.a,{margin:"dense",label:"Notes",type:"text",fullWidth:!0,value:f.Notes,onChange:A("Notes"),multiline:!0}),Object(n.jsx)(R.a,{margin:"dense",label:"Link",type:"text",fullWidth:!0,value:f.Link,onChange:A("Link")}),Object(n.jsx)(R.a,{margin:"dense",label:"Categories",type:"text",fullWidth:!0,value:f.Categories,onChange:A("Categories")})]}),Object(n.jsxs)(S.a,{children:[Object(n.jsx)(y.a,{onClick:E,color:"primary",children:"Cancel"}),a?Object(n.jsx)(y.a,{onClick:function(e){E(),H(f)},color:"primary",children:"Save"}):Object(n.jsx)(y.a,{onClick:function(e){E(),i((function(e){return e.map((function(t,a){return a===l?Object(b.a)({},e[a]=f):t}))})),N.a.post("https://stark-anchorage-94670.herokuapp.com/updateData",f).then((function(e){console.log("Update Data:",e.status,e),200==e.status?o(!0,"success","Data successfully updated!"):o(!0,"error","Error updating data")})).catch((function(e){console.log(e),o(!0,"error","Error updating data")}))},color:"primary",children:"Save"})]})]})]})},H=r(4),A=r(66),L=r.n(A),P=r(202),_=r(200),I=r(13),M=r(201),B=r(101),W=r(98),U=Object(_.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.primary.main,backgroundColor:Object(I.d)(e.palette.primary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"},search:{position:"absolute",right:"0px"}}})),V=function(e){var t=U(),a=e.numSelected,r=e.deleteUserHandler,c=e.selectedRows,s=e.addRow,l=e.rows,i=e.handleFilterChange,o=e.filterInput,d=e.alertSetter;return Object(n.jsxs)(M.a,{className:Object(H.a)(t.root,Object(j.a)({},t.highlight,a>0)),children:[a>0?Object(n.jsxs)(B.a,{className:t.title,color:"inherit",variant:"subtitle1",children:[a," items selected"]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(E,{addRow:s,add:!0,alertSetter:d}),Object(n.jsx)(R.a,{id:"outlined-search",label:"Search ".concat(l.length," records..."),type:"search",variant:"outlined",name:"searchField",className:Object(H.a)(t.search),value:o,onChange:i})]}),a>0?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(D.a,{title:"Delete",children:Object(n.jsx)(P.a,{"aria-label":"delete",onClick:r,children:Object(n.jsx)(L.a,{color:"secondary"})})}),Object(n.jsx)(D.a,{title:"Share",children:Object(n.jsx)(P.a,{"aria-label":"share",children:Object(n.jsx)(W.a,{color:"#3F50B5"})})}),console.log("selectedRows",c)]}):null]})};function z(e){var t=e.columns,a=e.data,r=e.updateMyData,l=e.setData,i=e.setShowAlert,o=e.alertSetter,d=e.addRow,u=s.a.forwardRef((function(e,t){var a=e.indeterminate,r=Object(O.a)(e,["indeterminate"]),c=s.a.useRef(),l=t||c;return s.a.useEffect((function(){l.current.indeterminate=a}),[l,a]),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(g.a,Object(b.a)(Object(b.a)({ref:l},r),{},{color:"primary"}))})})),j=Object(c.useState)(""),m=Object(h.a)(j,2),x=m[0],v=m[1],w=Object(p.useTable)({columns:t,data:a,updateMyData:r},p.useFilters,p.useSortBy,p.useRowSelect,(function(e){e.allColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(n.jsx)("div",{maxwidth:"15px",children:Object(n.jsx)(u,Object(b.a)({},t()))})},Cell:function(e){var t=e.row;return Object(n.jsx)("div",{maxwidth:"15px",children:Object(n.jsx)(u,Object(b.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(f.a)(e))}))})),y=w.getTableProps,C=w.getTableBodyProps,S=w.headerGroups,k=w.rows,F=w.prepareRow,R=w.setFilter,D=w.selectedFlatRows,T=w.state.selectedRowIds;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(V,{numSelected:Object.keys(T).length,deleteUserHandler:function(e){if(window.confirm("Are you sure you wish to delete these items?")){var t=(c=a,s=Object.keys(T).map((function(e){return parseInt(e,10)})),c.filter((function(e,t){return!s.includes(t)})));l(t);var r=[];for(var n in D)r.push(D[n].original._id);console.log("list:",r),N.a.post("http://localhost:3000/deleteMany",r).then((function(e){200==e.status?(console.log("success deleting many"),i({show:!0,type:"success",message:"Success deleting items!"})):i({show:!0,type:"error",message:"Error deleting items!"})}))}var c,s},selectedRows:D,addRow:d,rows:k,filterInput:x,handleFilterChange:function(e){var t=e.target.value||void 0;R("Title",t),v(t)},alertSetter:o}),Object(n.jsxs)("table",Object(b.a)(Object(b.a)({},y()),{},{children:[Object(n.jsx)("thead",{children:S.map((function(e){return Object(n.jsx)("tr",Object(b.a)(Object(b.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(n.jsxs)("th",Object(b.a)(Object(b.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{className:e.isSorted?e.isSortedDesc?"sort-desc":"sort-asc":"",children:[e.render("Header"),Object(n.jsx)("div",{children:e.canFilter?e.render("Filter"):null})]}))}))}))}))}),Object(n.jsx)("tbody",Object(b.a)(Object(b.a)({},C()),{},{children:k.map((function(e,t){return F(e),Object(n.jsx)("tr",Object(b.a)(Object(b.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(n.jsx)("td",Object(b.a)(Object(b.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))]})}var G=function(e){var t=e.values;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("span",{className:t?"badge":"",children:t})})},J=r(205),q=r(203),K=(r(146),function(e){e.dog;var t=e.state;e.setter;return!0===t.show?Object(n.jsx)("div",{children:Object(n.jsxs)(J.a,{className:"alert",severity:t.type,variant:"filled",children:[Object(n.jsxs)(q.a,{children:[" ","success"==t.type?"Success":"Error"]}),t.message]})}):Object(n.jsx)(n.Fragment,{})}),Q=(r(147),r(204)),X=r(211),Y=r(198),Z=Object(_.a)((function(e){return{formControl:{margin:e.spacing(1),display:"flex"},selectEmpty:{marginTop:e.spacing(2)},Select:{maxwidth:20}}}));var $=function(e){var t=e.column,a=t.filterValue,r=t.setFilter,c=t.preFilteredRows,l=t.id,i=Z(),o=s.a.useMemo((function(){var e=new Set;return c.forEach((function(t){e.add(t.values[l])})),Object(f.a)(e.values())}),[l,c]);return Object(n.jsx)(Y.a,{className:i.formControl,children:Object(n.jsxs)(Q.a,{className:i.Select,value:a,defaultValue:"undefined",onChange:function(e){r(e.target.value||void 0)},children:[Object(n.jsx)(X.a,{defaultValue:"",children:"All"}),o.map((function(e,t){return Object(n.jsx)(X.a,{value:e,children:e},t)}))]})})},ee=r(97),te=r.n(ee);r(148);var ae=function(e){var t=e.value,a=e.removeRow,r=e.addRow,c=e.data,s=e.id,l=e.setData,i=e.alertSetter;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"actions",children:[Object(n.jsx)(E,{add:!1,addRow:r,data:c,id:s,setData:l,alertSetter:i}),Object(n.jsx)(D.a,{title:"Delete",children:Object(n.jsx)(y.a,{value:t,onClick:a,variant:"outlined",color:"primary",children:Object(n.jsx)(L.a,{})})})]})})};r(14),r(67);var re=function(){var t=Object(c.useState)([]),a=Object(h.a)(t,2),r=a[0],s=a[1],l=Object(c.useState)({show:!1,type:"",message:""}),i=Object(h.a)(l,2),o=i[0],f=i[1];function O(e,t,a){f({show:e,type:t,message:a})}function p(e){if(e.preventDefault(),window.confirm("Are you sure you wish to delete this?")){if(e.currentTarget.value){var t="_id="+e.currentTarget.value;N.a.post("https://stark-anchorage-94670.herokuapp.com/deleteData",t).then((function(e){200==e.status?(O(!0,"success","Success deleting item!"),console.log("Remove Data: ",e.status)):O(!0,"error","Error deleting item!")}))}var a=r.filter((function(t){return t._id!=e.currentTarget.value}));s(a)}}function g(e){s((function(t){return t.concat(e)})),O(!0,"success","Success adding row!")}Object(c.useEffect)((function(){if(1==o.show){var e=setTimeout((function(){O(!1)}),2e3);return function(){clearTimeout(e)}}}));var m=Object(c.useMemo)((function(){return[{Header:" ",columns:[{Header:"Row #",Cell:function(e){var t=e.row;return Object(n.jsx)("span",{children:t.index})},Filter:"",filter:"includes"},{Header:"",accessor:"Class",Filter:$,filter:"includes"},{Header:"Title",accessor:"Title",Filter:"",filter:"includes"},{Header:"Notes",accessor:"Notes",Filter:"",filter:"includes"},{Header:"Link",accessor:"Link",Cell:function(e){var t=e.cell.value;return Object(n.jsx)(y.a,{href:t,target:"_blank",variant:"outlined",color:"primary",children:Object(n.jsx)(te.a,{})})},Filter:"",filter:"includes"},{Header:"",accessor:"Categories",Cell:function(e){var t=e.cell.value;return Object(n.jsx)(G,{values:t})},Filter:$,filter:"includes"},{Header:"Actions",accessor:"_id",Cell:function(e){var t=e.cell,a=t.value,c=t.row;return Object(n.jsx)(ae,{value:a,removeRow:p,addRow:g,data:r,id:c.index,setData:s,alertSetter:O})},Filter:"",filter:"excludes"}]}]}),[r]);return Object(c.useEffect)((function(){Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()("https://stark-anchorage-94670.herokuapp.com/getData");case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(K,{state:o,setter:O,dog:"hello"}),Object(n.jsx)(z,{columns:m,data:r,updateMyData:function(t,a,r){e.preventDefault(),s((function(e){return e.map((function(n,c){return c===t?Object(b.a)(Object(b.a)({},e[t]),{},Object(j.a)({},a,r)):n}))}))},setData:s,setShowAlert:f,addRow:g,alertSetter:O})]})};var ne=r(71);i.a.render(Object(n.jsx)(ne.a,{children:Object(n.jsx)(re,{})}),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.9e5a0db9.chunk.js.map