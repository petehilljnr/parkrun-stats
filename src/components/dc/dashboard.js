import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { YearEventAvg } from "./yearEventAvg";
import { MonthEventAvg } from "./monthEventAvg";
import { AgeEventAvg } from "./ageEventAvg";
import { AgeFinishAvg } from "./ageFinishAvg";
import { DataContext } from "./cxContext";

export const Dashboard = (props) => {
  return (
    <div>
      <DataContext>
        <Container style={{paddingTop: "5px"}}>
          <Row>
            <Col>
              <YearEventAvg />
            </Col>
            <Col>
              <MonthEventAvg />
            </Col>
          </Row>
          <Row>
            <Col>
              <AgeEventAvg />
            </Col>
            <Col>
              <AgeFinishAvg />
            </Col>
          </Row>
        </Container>
      </DataContext>
    </div>
  );
}
