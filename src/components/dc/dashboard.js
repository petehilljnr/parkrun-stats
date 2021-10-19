import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
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
            <Card
          className="mb-2"
          text={"white"}
          style={{ backgroundColor: "#28203A" }}
        >
          <Card.Body>
            <Card.Title
              style={{
                fontSize: "2rem",
                marginBottom: "0px",
                textShadow: "0 0 15px yellow",
              }}
            >
              Results Charts
            </Card.Title>
            <Card.Subtitle >
              <br/>
              Click on any bar on the charts to filter all charts on that category (more charts to come!)
              </Card.Subtitle>
            <Card.Text style={{paddingTop: "10px"}}>

        
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
          </Card.Text>
          </Card.Body>
        </Card>

        </Container>
      </DataContext>
    </div>
  );
}
