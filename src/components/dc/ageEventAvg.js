import React from "react";
import * as dc from "dc";
import * as d3 from "d3";
import { ChartTemplate } from "./chartTemplate";

const f = (divRef, ndx) => {
  const c = dc.rowChart(divRef);
  const dimension = ndx.dimension(function (d) {
    return d.age;
  });

  const subgroup = "event_num";

  function reduceAdd(p, v) {
    const grouping = v[subgroup];
    p[grouping] = (p[grouping] || 0) + 1;
    return p;
  }

  function reduceRemove(p, v) {
    const grouping = v[subgroup];
    p[grouping] = (p[grouping] || 0) - 1;
    if(p[grouping] === 0) {
        delete p[grouping];
    }
    return p;
  }

  function reduceInitial() {
    return {};
  }

  const group = dimension
    .group()
    .reduce(reduceAdd, reduceRemove, reduceInitial);

  c.dimension(dimension)
    .height(450)
    .group(group)
    .valueAccessor(({key, value}) => Math.round(d3.mean(Object.values(value)) || 0))
    .transitionDuration(300)
    .colors("#fcba03")
    .elasticX(true)
    .title(({key, value}) => `${key}: ${Math.round(d3.mean(Object.values(value)) || 0)} runners`)
    .xAxis()
    .ticks(4);

  return c;
};

export const AgeEventAvg = (props) => (
  <ChartTemplate
    chartFunction={f}
    title="Avg No. Parkrunners Per Event by Age"
  />
);
