import React from "react";
import { CXContext } from "./cxContext";
import * as dc from "dc";

const ResetButton = props => {
  return (
    <span
      style={{float: "right", padding: "0.1rem", cursor: "pointer", color: "white", fontSize: "0.65rem", textShadow: "0 0 15px red",}}
      onClick={() => {
        props.chart.filterAll();
        dc.redrawAll();
      }}
    >
      reset chart
    </span>
  );
};
export const ChartTemplate = props => {
  const context = React.useContext(CXContext);
  const [chart,updateChart] = React.useState(null);
  const ndx = context.ndx;
  const div = React.useRef(null);
  
  React.useEffect(() => {
    const newChart = props.chartFunction(div.current, ndx); // chartfunction takes the ref and does something with it

    newChart.render();
    updateChart(newChart);
  },[]); 

  return (
    <div
      ref={div}
    >
    
     <ResetButton chart={chart} /> 
     <label style={{fontSize: "1rem", color: "white", textShadow: "0 0 15px yellow"}}>{props.title}</label>
    </div>
  );
};
