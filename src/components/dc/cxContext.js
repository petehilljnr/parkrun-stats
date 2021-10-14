import React from "react";
import "./dc.css";
import crossfilter from "crossfilter2";
import * as d3 from "d3";

const CHARTDATA_URL =
  "https://raw.githubusercontent.com/petehilljnr/parkrun-stats/master/data/chart_data.csv";
const LOOKUPDATA_URL =
  "https://raw.githubusercontent.com/petehilljnr/parkrun-stats/master/data/lookups.json";

export const CXContext = React.createContext("CXContext");

export class DataContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, hasNDX: false };
  }

  componentDidMount() {
    if (this.state.hasNDX) {
      return;
    }
    if (this.state.loading) {
      return;
    }
    this.setState({ loading: true });

    d3.csv(CHARTDATA_URL).then((d) => {
      d3.json(LOOKUPDATA_URL).then((f) => {
        d.forEach((a) => {
          a.actual_holiday = f.actual_holiday[+a.actual_holiday - 1];
          a.age = f.age[+a.age - 1];
          a.gender = f.gender[+a.gender - 1];
          a.holiday_weekend = f.holiday_weekend[+a.holiday_weekend - 1];
          a.tutu = f.tutu[+a.tutu - 1];
          a.section = f.section[+a.section - 1];
          a.age_grading = +a.age_grading;
          a.event_day = +a.event_day;
          a.event_month = +a.event_month;
          a.event_year = +a.event_year;
          a.finish_time = +a.finish_time;
        });
        this.ndx = crossfilter(d); //TODO possibly need to update this
        this.setState({ loading: false, hasNDX: true });
      });

    });
  }

  render() {
    if (!this.state.hasNDX) {
      return null;
    }
    return (
      <CXContext.Provider value={{ ndx: this.ndx }}>
        <div ref={this.parent}>{this.props.children}</div>
      </CXContext.Provider>
    );
  }
}
