(this["webpackJsonpparkrun-stats"]=this["webpackJsonpparkrun-stats"]||[]).push([[0],{177:function(e,t,n){},178:function(e,t,n){},197:function(e,t,n){},209:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),i=n(36),s=n.n(i),o=(n(177),n(178),n(6)),u=n.n(o),l=n(91),j=n(4),d=n(212),h=n(213),b=n(217),x=n(214),f=n(1),O=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],c=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/petehilljnr/parkrun-stats/master/data/results.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.sort((function(){return Math.random()-.5})),r(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(a.useEffect)((function(){c()}),[]),console.log(n),!n.length>0)return Object(f.jsx)(d.a,{children:Object(f.jsx)("h3",{children:"Loading data..."})});var i=function(e){return Object(f.jsx)(h.a,{style:{textAlign:"center"},children:Object(f.jsx)(b.a,{className:"mb-2",text:"white",style:{backgroundColor:"#28203A"},children:Object(f.jsxs)(b.a.Body,{children:[Object(f.jsx)(b.a.Title,{style:{fontSize:"3rem",marginBottom:"0px",textShadow:"0 0 15px yellow"},children:e.stat}),Object(f.jsx)(b.a.Subtitle,{className:"mb-2",style:{fontStyle:"italic"},children:e.units}),Object(f.jsxs)(b.a.Text,{children:[Object(f.jsx)("span",{style:{fontSize:"1.2rem"},children:e.description1}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{style:{color:"orange"},children:e.description2})]})]})})})};return Object(f.jsx)(d.a,{children:Object(f.jsx)(x.a,{xs:1,md:1,xl:2,className:"g-4",style:{paddingTop:"8px"},children:n&&n.length>0&&n.map((function(e,t){return Object(f.jsx)(i,{stat:e.stat,units:e.units,description1:e.description1,description2:e.description2},t)}))})})},v=n(30),g=n(21),m=n(15),p=n(16),y=n(48),k=n(50),w=(n(197),n(101)),I=c.a.createContext("CXContext"),_=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(e){var r;return Object(m.a)(this,n),(r=t.call(this,e)).state={loading:!1,hasNDX:!1},r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.state.hasNDX||this.state.loading||(this.setState({loading:!0}),g.a("https://raw.githubusercontent.com/petehilljnr/parkrun-stats/master/data/chart_data.csv").then((function(t){g.b("https://raw.githubusercontent.com/petehilljnr/parkrun-stats/master/data/lookups.json").then((function(n){t.forEach((function(e){e.actual_holiday=n.actual_holiday[+e.actual_holiday-1],e.age=n.age[+e.age-1],e.gender=n.gender[+e.gender-1],e.holiday_weekend=n.holiday_weekend[+e.holiday_weekend-1],e.tutu=n.tutu[+e.tutu-1],e.section=n.section[+e.section-1],e.age_grading=+e.age_grading,e.event_day=+e.event_day,e.event_month=+e.event_month,e.event_year=+e.event_year,e.finish_time=+e.finish_time})),e.ndx=Object(w.a)(t),e.setState({loading:!1,hasNDX:!0})}))})))}},{key:"render",value:function(){return this.state.hasNDX?Object(f.jsx)(I.Provider,{value:{ndx:this.ndx},children:Object(f.jsx)("div",{ref:this.parent,children:this.props.children})}):null}}]),n}(c.a.Component),A=function(e){return Object(f.jsx)("span",{style:{float:"right",padding:"0.1rem",cursor:"pointer",color:"white",fontSize:"0.65rem",textShadow:"0 0 15px red"},onClick:function(){e.chart.filterAll(),v.redrawAll()},children:"reset chart"})},P=function(e){var t=c.a.useContext(I),n=c.a.useState(null),r=Object(j.a)(n,2),a=r[0],i=r[1],s=t.ndx,o=c.a.useRef(null),u=e.chartFunction;return c.a.useEffect((function(){var e=u(o.current,s);e.render(),i(e)}),[s,u]),Object(f.jsxs)("div",{ref:o,children:[Object(f.jsx)(A,{chart:a}),Object(f.jsx)("label",{style:{fontSize:"1rem",color:"white",textShadow:"0 0 15px yellow"},children:e.title})]})},S=function(e,t){var n=v.rowChart(e),r=t.dimension((function(e){return e.event_year}));var a=r.group().reduce((function(e,t){var n=t.event_num;return e[n]=(e[n]||0)+1,e}),(function(e,t){var n=t.event_num;return e[n]=(e[n]||0)-1,0===e[n]&&delete e[n],e}),(function(){return{}}));return n.dimension(r).group(a).height(450).transitionDuration(300).valueAccessor((function(e){e.key;var t=e.value;return Math.round(g.c(Object.values(t))||0)})).colors("#fcba03").elasticX(!0).ordering((function(e){return-parseInt(e.key)})).title((function(e){var t=e.key,n=e.value;return"".concat(t,": ").concat(Math.round(g.c(Object.values(n))||0)," runners")})).xAxis().ticks(4),n},D=function(e){return Object(f.jsx)(P,{chartFunction:S,title:"Avg No. Parkrunners Per Event by Year"})},C=function(e,t){var n=v.rowChart(e),r=t.dimension((function(e){return e.event_month}));var a=r.group().reduce((function(e,t){var n=t.event_num;return e[n]=(e[n]||0)+1,e}),(function(e,t){var n=t.event_num;return e[n]=(e[n]||0)-1,0===e[n]&&delete e[n],e}),(function(){return{}}));return n.dimension(r).height(450).group(a).label((function(e){return new Date(2020,parseInt(e.key)-1,1).toLocaleDateString("en-us",{month:"long"})})).valueAccessor((function(e){e.key;var t=e.value;return Math.round(g.c(Object.values(t))||0)})).transitionDuration(300).colors("#fcba03").elasticX(!0).ordering((function(e){return parseInt(e.key)})).title((function(e){var t=e.key,n=e.value;return"".concat(t,": ").concat(Math.round(g.c(Object.values(n))||0)," runners")})).xAxis().ticks(4),n},T=function(e){return Object(f.jsx)(P,{chartFunction:C,title:"Avg No. Parkrunners Per Event by Month"})},N=function(e,t){var n=v.rowChart(e),r=t.dimension((function(e){return e.age}));var a=r.group().reduce((function(e,t){var n=t.event_num;return e[n]=(e[n]||0)+1,e}),(function(e,t){var n=t.event_num;return e[n]=(e[n]||0)-1,0===e[n]&&delete e[n],e}),(function(){return{}}));return n.dimension(r).height(450).group(a).valueAccessor((function(e){e.key;var t=e.value;return Math.round(g.c(Object.values(t))||0)})).transitionDuration(300).colors("#fcba03").elasticX(!0).title((function(e){var t=e.key,n=e.value;return"".concat(t,": ").concat(Math.round(g.c(Object.values(n))||0)," runners")})).xAxis().ticks(4),n},F=function(e){return Object(f.jsx)(P,{chartFunction:N,title:"Avg No. Parkrunners Per Event by Age"})},M=g.d("%H:%M:%S"),B=function(e,t){var n=v.rowChart(e),r=t.dimension((function(e){return e.age}));var a=r.group().reduce((function(e,t){return++e.count,e.total=e.total+ +t.finish_time/60,e}),(function(e,t){return--e.count,e.total=e.total-+t.finish_time/60,e}),(function(){return{total:0,count:0}}));return n.dimension(r).height(450).group(a).valueAccessor((function(e){e.key;var t=e.value;return 0===t.count?0:Math.round(t.total/t.count)})).transitionDuration(300).colors("#fcba03").elasticX(!0).title((function(e){var t,n=e.key,r=e.value;return 0===r.count?"No results":"".concat(n,": ").concat((t=r.total/r.count,console.log(t),M(new Date(1391166e6+60*t*1e3))||0))})).xAxis().ticks(4),n},X=function(e){return Object(f.jsx)(P,{chartFunction:B,title:"Avg Finishing Time by Age"})},E=function(e){return Object(f.jsx)("div",{children:Object(f.jsx)(_,{children:Object(f.jsxs)(d.a,{style:{paddingTop:"5px"},children:[Object(f.jsxs)(x.a,{children:[Object(f.jsx)(h.a,{children:Object(f.jsx)(D,{})}),Object(f.jsx)(h.a,{children:Object(f.jsx)(T,{})})]}),Object(f.jsxs)(x.a,{children:[Object(f.jsx)(h.a,{children:Object(f.jsx)(F,{})}),Object(f.jsx)(h.a,{children:Object(f.jsx)(X,{})})]})]})})})},z=function(){return Object(f.jsx)(d.a,{children:Object(f.jsx)(E,{})})},L=function(){return Object(f.jsx)(d.a,{style:{paddingTop:"5px"},children:Object(f.jsx)(x.a,{children:Object(f.jsx)(h.a,{children:Object(f.jsx)(b.a,{className:"mb-2",text:"white",style:{backgroundColor:"#28203A"},children:Object(f.jsxs)(b.a.Body,{children:[Object(f.jsx)(b.a.Title,{style:{fontSize:"2rem",marginBottom:"0px",textShadow:"0 0 15px yellow"},children:"About"}),Object(f.jsxs)(b.a.Text,{children:[Object(f.jsx)("p",{children:" "}),Object(f.jsxs)("p",{children:["During the COVID lockdown in August 2021, I got bored ... ",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"I was looking at Dunedin Parkrun results because I had managed to sneak in my 50th earlier in the year (between kid's Saturday football) ",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"Being the curious person I am, I decided to have a look at all of my results and immediately noticed a few things:",Object(f.jsx)("br",{}),"- There's no API for getting Parkrun results",Object(f.jsx)("br",{}),"- The default Parkrun interface is very utilitarian ",Object(f.jsx)("br",{}),"- There's a lot of follow on information",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"I decided I would attempt to web-scrape all of the results for Dunedin Parkrun and have a play with the data",Object(f.jsx)("br",{}),"This was reasonably simple - although I did manage to get myself temporarity banned from the Parkrun websites a few times  - sorry Parkrun, my intentions were geniune!",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"Now I've got ~38k individual results for Dunedin Parkrun from all 381 events ",Object(f.jsx)("br",{}),"On top of that - for the ~4.5k athletes that have completed Dunedin Parkrun, I've got the counts of all the other Parkrun events they've completed",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"All of this data can make for some great analyses but there's a couple of points to note:",Object(f.jsx)("br",{}),"- THIS IS ALL JUST A BIT OF FUN.  I'm not selling anything, advertising anything, and no - I won't give you the data outright. ",Object(f.jsx)("br",{}),"- I'm not affiliated with Parkrun or any of its partners",Object(f.jsx)("br",{}),'- I have excluded any results where the parkrunner didn\'t have a barcode - i.e. "Unknown"',Object(f.jsx)("br",{}),"- It's not complete - I've just got it in a state to do more fun facts and charts.  I'll add more when I get time",Object(f.jsx)("br",{}),"- I've been careful to not use any names to individually identify people",Object(f.jsx)("br",{}),"- The results are for any Parkrunner that has attended Dunedin Parkrun",Object(f.jsx)("br",{}),"- If you have ideas for stats to include or visualise, feel free to ",Object(f.jsx)("a",{href:"mailto: petehilljnr@gmail.com",children:"email"})," me",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"Pete"]})]})]})})})})})},H=n(13),J=n(92),U=n.p+"static/media/parkrun.23904815.png",R=n(93),V=n(215),Y=n(216),q=n(38),G=R.a.span(r||(r=Object(J.a)(["\n  margin-left: 1.5rem;\n  font-size: 1.2rem;\n  height: 80px;\n  align-items: center;\n  color: white;\n  width: 100%;\n"]))),K=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(V.a,{collapseOnSelect:!0,fixed:"top",bg:"dark",expand:"lg",variant:"dark",children:Object(f.jsxs)(d.a,{children:[Object(f.jsxs)(V.a.Brand,{href:"home",children:[Object(f.jsx)("img",{src:U,alt:"Parkrun",height:45,style:{transform:"rotate(90deg)"}}),Object(f.jsx)(G,{children:"Bunch o' Stats for Dunedin Parkrun"})]}),Object(f.jsx)(V.a.Toggle,{"aria-controls":"navbar-nav"}),Object(f.jsx)(V.a.Collapse,{id:"navbar-nav",style:{justifyContent:"flex-end"},children:Object(f.jsxs)(Y.a,{children:[Object(f.jsx)(q.b,{className:"nav-link",to:"/home",children:"Home"}),Object(f.jsx)(q.b,{className:"nav-link",to:"/charts",children:"Results Charts"}),Object(f.jsx)(q.b,{className:"nav-link",to:"/about",children:"About"})]})})]})})})};var Q=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(K,{}),Object(f.jsxs)(H.c,{children:[Object(f.jsx)(H.a,{path:"/about",exact:!0,children:Object(f.jsx)(L,{})}),Object(f.jsx)(H.a,{path:"/charts",exact:!0,children:Object(f.jsx)(z,{})}),Object(f.jsx)(H.a,{path:"/home",exact:!0,children:Object(f.jsx)(O,{})}),Object(f.jsx)(H.a,{children:Object(f.jsx)(O,{})})]})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,218)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(q.a,{children:Object(f.jsx)(Q,{})})}),document.getElementById("root")),W()}},[[209,1,2]]]);
//# sourceMappingURL=main.ae138811.chunk.js.map