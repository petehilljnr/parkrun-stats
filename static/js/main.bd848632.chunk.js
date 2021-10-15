(this["webpackJsonpparkrun-stats"]=this["webpackJsonpparkrun-stats"]||[]).push([[0],{177:function(t,e,n){},178:function(t,e,n){},197:function(t,e,n){},209:function(t,e,n){"use strict";n.r(e);var r,c=n(0),a=n.n(c),i=n(36),s=n.n(i),o=(n(177),n(178),n(6)),u=n.n(o),l=n(91),j=n(4),h=n(212),d=n(213),b=n(217),x=n(214),f=n(1),v=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],r=e[1],a=function(){var t=Object(l.a)(u.a.mark((function t(){var e,n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://raw.githubusercontent.com/petehilljnr/parkrun-stats/master/data/results.json");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,c=n.sort((function(){return Math.random()-.5})),r(c);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();if(Object(c.useEffect)((function(){a()}),[]),console.log(n),!n.length>0)return Object(f.jsx)(h.a,{children:Object(f.jsx)("h3",{children:"Loading data..."})});var i=function(t){return Object(f.jsx)(d.a,{style:{textAlign:"center"},children:Object(f.jsx)(b.a,{className:"mb-2",text:"white",style:{backgroundColor:"#28203A"},children:Object(f.jsxs)(b.a.Body,{children:[Object(f.jsx)(b.a.Title,{style:{fontSize:"3rem",marginBottom:"0px",textShadow:"0 0 15px yellow"},children:t.stat}),Object(f.jsx)(b.a.Subtitle,{className:"mb-2",style:{fontStyle:"italic"},children:t.units}),Object(f.jsxs)(b.a.Text,{children:[Object(f.jsx)("span",{style:{fontSize:"1.2rem"},children:t.description1}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{style:{color:"orange"},children:t.description2})]})]})})})};return Object(f.jsx)(h.a,{children:Object(f.jsx)(x.a,{xs:1,md:1,xl:2,className:"g-4",style:{paddingTop:"8px"},children:n&&n.length>0&&n.map((function(t,e){return Object(f.jsx)(i,{stat:t.stat,units:t.units,description1:t.description1,description2:t.description2},e)}))})})},O=n(30),g=n(21),p=n(15),m=n(16),y=n(48),k=n(50),w=(n(197),n(101)),_=a.a.createContext("CXContext"),A=function(t){Object(y.a)(n,t);var e=Object(k.a)(n);function n(t){var r;return Object(p.a)(this,n),(r=e.call(this,t)).state={loading:!1,hasNDX:!1},r}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.state.hasNDX||this.state.loading||(this.setState({loading:!0}),g.a("https://raw.githubusercontent.com/petehilljnr/parkrun-stats/master/data/chart_data.csv").then((function(e){g.b("https://raw.githubusercontent.com/petehilljnr/parkrun-stats/master/data/lookups.json").then((function(n){e.forEach((function(t){t.actual_holiday=n.actual_holiday[+t.actual_holiday-1],t.age=n.age[+t.age-1],t.gender=n.gender[+t.gender-1],t.holiday_weekend=n.holiday_weekend[+t.holiday_weekend-1],t.tutu=n.tutu[+t.tutu-1],t.section=n.section[+t.section-1],t.age_grading=+t.age_grading,t.event_day=+t.event_day,t.event_month=+t.event_month,t.event_year=+t.event_year,t.finish_time=+t.finish_time})),t.ndx=Object(w.a)(e),t.setState({loading:!1,hasNDX:!0})}))})))}},{key:"render",value:function(){return this.state.hasNDX?Object(f.jsx)(_.Provider,{value:{ndx:this.ndx},children:Object(f.jsx)("div",{ref:this.parent,children:this.props.children})}):null}}]),n}(a.a.Component),S=function(t){return Object(f.jsx)("span",{style:{float:"right",padding:"0.1rem",cursor:"pointer",color:"white",fontSize:"0.65rem",textShadow:"0 0 15px red"},onClick:function(){t.chart.filterAll(),O.redrawAll()},children:"reset chart"})},C=function(t){var e=a.a.useContext(_),n=a.a.useState(null),r=Object(j.a)(n,2),c=r[0],i=r[1],s=e.ndx,o=a.a.useRef(null);return a.a.useEffect((function(){var e=t.chartFunction(o.current,s);e.render(),i(e)}),[]),Object(f.jsxs)("div",{ref:o,children:[Object(f.jsx)(S,{chart:c}),Object(f.jsx)("label",{style:{fontSize:"1rem",color:"white",textShadow:"0 0 15px yellow"},children:t.title})]})},D=function(t,e){var n=O.rowChart(t),r=(e.groupAll(),e.dimension((function(t){return t.event_year})));var c=r.group().reduce((function(t,e){var n=e.event_num;return t[n]=(t[n]||0)+1,t}),(function(t,e){var n=e.event_num;return t[n]=(t[n]||0)-1,0===t[n]&&delete t[n],t}),(function(){return{}}));return n.dimension(r).group(c).height(450).transitionDuration(300).valueAccessor((function(t){t.key;var e=t.value;return Math.round(g.c(Object.values(e))||0)})).colors("#fcba03").elasticX(!0).ordering((function(t){return-parseInt(t.key)})).title((function(t){var e=t.key,n=t.value;return"".concat(e,": ").concat(Math.round(g.c(Object.values(n))||0)," runners")})).xAxis().ticks(4),n},N=function(t){return Object(f.jsx)(C,{chartFunction:D,title:"Avg No. Parkrunners Per Event by Year"})},F=function(t,e){var n=O.rowChart(t),r=e.dimension((function(t){return t.event_month}));var c=r.group().reduce((function(t,e){var n=e.event_num;return t[n]=(t[n]||0)+1,t}),(function(t,e){var n=e.event_num;return t[n]=(t[n]||0)-1,0===t[n]&&delete t[n],t}),(function(){return{}}));return n.dimension(r).height(450).group(c).label((function(t){return new Date(2020,parseInt(t.key)-1,1).toLocaleDateString("en-us",{month:"long"})})).valueAccessor((function(t){t.key;var e=t.value;return Math.round(g.c(Object.values(e))||0)})).transitionDuration(300).colors("#fcba03").elasticX(!0).ordering((function(t){return parseInt(t.key)})).title((function(t){var e=t.key,n=t.value;return"".concat(e,": ").concat(Math.round(g.c(Object.values(n))||0)," runners")})).xAxis().ticks(4),n},M=function(t){return Object(f.jsx)(C,{chartFunction:F,title:"Avg No. Parkrunners Per Event by Month"})},P=function(t,e){var n=O.rowChart(t),r=e.dimension((function(t){return t.age}));var c=r.group().reduce((function(t,e){var n=e.event_num;return t[n]=(t[n]||0)+1,t}),(function(t,e){var n=e.event_num;return t[n]=(t[n]||0)-1,0===t[n]&&delete t[n],t}),(function(){return{}}));return n.dimension(r).height(450).group(c).valueAccessor((function(t){t.key;var e=t.value;return Math.round(g.c(Object.values(e))||0)})).transitionDuration(300).colors("#fcba03").elasticX(!0).title((function(t){var e=t.key,n=t.value;return"".concat(e,": ").concat(Math.round(g.c(Object.values(n))||0)," runners")})).xAxis().ticks(4),n},X=function(t){return Object(f.jsx)(C,{chartFunction:P,title:"Avg No. Parkrunners Per Event by Age"})},T=g.d("%H:%M:%S"),E=function(t,e){var n=O.rowChart(t),r=e.dimension((function(t){return t.age}));var c=r.group().reduce((function(t,e){return++t.count,t.total=t.total+ +e.finish_time/60,t}),(function(t,e){return--t.count,t.total=t.total-+e.finish_time/60,t}),(function(){return{total:0,count:0}}));return n.dimension(r).height(450).group(c).valueAccessor((function(t){t.key;var e=t.value;return 0==e.count?0:Math.round(e.total/e.count)})).transitionDuration(300).colors("#fcba03").elasticX(!0).title((function(t){var e,n=t.key,r=t.value;return 0==r.count?"No results":"".concat(n,": ").concat((e=r.total/r.count,console.log(e),T(new Date(1391166e6+60*e*1e3))||0))})).xAxis().ticks(4),n},B=function(t){return Object(f.jsx)(C,{chartFunction:E,title:"Avg Finishing Time by Age"})},z=function(t){return Object(f.jsx)("div",{children:Object(f.jsx)(A,{children:Object(f.jsxs)(h.a,{style:{paddingTop:"5px"},children:[Object(f.jsxs)(x.a,{children:[Object(f.jsx)(d.a,{children:Object(f.jsx)(N,{})}),Object(f.jsx)(d.a,{children:Object(f.jsx)(M,{})})]}),Object(f.jsxs)(x.a,{children:[Object(f.jsx)(d.a,{children:Object(f.jsx)(X,{})}),Object(f.jsx)(d.a,{children:Object(f.jsx)(B,{})})]})]})})})},I=function(){return Object(f.jsx)(h.a,{children:Object(f.jsx)(z,{})})},L=function(){return Object(f.jsx)(h.a,{children:Object(f.jsxs)("h1",{children:["About ",Date.now()]})})},H=n(13),J=n(92),R=n.p+"static/media/parkrun.23904815.png",Y=n(93),q=n(215),G=n(216),K=n(38),Q=Y.a.span(r||(r=Object(J.a)(["\n  margin-left: 1.5rem;\n  font-size: 1.2rem;\n  height: 80px;\n  align-items: center;\n  color: white;\n  width: 100%;\n"]))),U=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(q.a,{collapseOnSelect:!0,fixed:"top",bg:"dark",expand:"lg",variant:"dark",children:Object(f.jsxs)(h.a,{children:[Object(f.jsxs)(q.a.Brand,{href:"home",children:[Object(f.jsx)("img",{src:R,alt:"Parkrun",height:45,style:{transform:"rotate(90deg)"}}),Object(f.jsxs)(Q,{children:["Bunch o' Stats for Dunedin Parkrun ",Date.now()]})]}),Object(f.jsx)(q.a.Toggle,{"aria-controls":"navbar-nav"}),Object(f.jsx)(q.a.Collapse,{id:"navbar-nav",style:{justifyContent:"flex-end"},children:Object(f.jsxs)(G.a,{children:[Object(f.jsx)(K.b,{className:"nav-link",to:"/home",children:"Home"}),Object(f.jsx)(K.b,{className:"nav-link",to:"/charts",children:"Results Charts"}),Object(f.jsx)(K.b,{className:"nav-link",to:"/about",children:"About"})]})})]})})})};var V=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(U,{}),Object(f.jsxs)(H.c,{children:[Object(f.jsx)(H.a,{path:"/",exact:!0,children:Object(f.jsx)(v,{})}),Object(f.jsx)(H.a,{path:"/about",exact:!0,children:Object(f.jsx)(L,{})}),Object(f.jsx)(H.a,{path:"/charts",exact:!0,children:Object(f.jsx)(I,{})}),Object(f.jsx)(H.a,{path:"/home",exact:!0,children:Object(f.jsx)(v,{})})]})]})},W=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,218)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),c(t),a(t),i(t)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(K.a,{children:Object(f.jsx)(V,{})})}),document.getElementById("root")),W()}},[[209,1,2]]]);
//# sourceMappingURL=main.bd848632.chunk.js.map