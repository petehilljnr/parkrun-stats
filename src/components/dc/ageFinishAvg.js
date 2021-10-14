import React from "react";
import * as dc from "dc";
import * as d3 from "d3";
import { ChartTemplate } from "./chartTemplate";

const f = (divRef, ndx) => {
  const c = dc.rowChart(divRef);
  const dimension = ndx.dimension(function (d) {
    return d.age;
  });

  function reduceAdd(p, v) {
    ++p.count;
    p.total = p.total + (+v.finish_time);
    return p;
  }

  function reduceRemove(p, v) {
    --p.count;
    p.total = p.total - (+v.finish_time);
    return p;
  }

  function reduceInitial() {
    return { total: 0, count: 0};
  }

  const group = dimension
    .group()
    .reduce(reduceAdd, reduceRemove, reduceInitial);

  console.log(group.top(Infinity))
  c.dimension(dimension)
    .height(450)
    .group(group)
    .valueAccessor(({key, value}) => Math.round(value.total / value.count) || 0)
    .transitionDuration(300)
    .colors("#fcba03")
    .elasticX(true)
    .title(({key, value}) => `${key}: ${Math.round(value.total / value.count) || 0} seconds`)
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
