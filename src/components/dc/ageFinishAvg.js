import React from "react";
import * as dc from "dc";
import * as d3 from "d3";
import { ChartTemplate } from "./chartTemplate";


const hoursandminsformat=d3.timeFormat("%H:%M:%S"); 

const format_time = (minutes) => {
  console.log(minutes)
  const seconds = minutes * 60
  const d = 1391166000000 + (seconds * 1000);
  return hoursandminsformat(new Date(d));
}
const f = (divRef, ndx) => {
  const c = dc.rowChart(divRef);
  const dimension = ndx.dimension(function (d) {
    return d.age;
  });

  function reduceAdd(p, v) {
    ++p.count;
    p.total = p.total + (+v.finish_time/60);
    return p;
  }

  function reduceRemove(p, v) {
    --p.count;
    p.total = p.total - (+v.finish_time/60);
    return p;
  }

  function reduceInitial() {
    return { total: 0, count: 0};
  }

  const group = dimension
    .group()
    .reduce(reduceAdd, reduceRemove, reduceInitial);

  c.dimension(dimension)
    .height(450)
    .group(group)
    .valueAccessor(({key, value}) => value.count === 0 ? 0 : Math.round(value.total / value.count))
    .transitionDuration(300)
    .colors("#fcba03")
    .elasticX(true)
    .title(({key, value}) => value.count === 0 ? 'No results' : `${key}: ${format_time(value.total / value.count) || 0}`)
    .xAxis()
    .ticks(4);

  return c;
};

export const AgeFinishAvg = (props) => (
  <ChartTemplate
    chartFunction={f}
    title="Avg Finishing Time by Age"
  />
);
