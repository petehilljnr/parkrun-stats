import React, { useEffect, useState } from "react";
import { Container, Row, Col,  Card, CardGroup } from "react-bootstrap";

const RESULTS_URL =
  "https://raw.githubusercontent.com/petehilljnr/parkrun-stats/master/data/results.json";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(RESULTS_URL);
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

  const StatCard = (props) => {
      const card = (
          <Col style={{textAlign:"center"}}>

      <Card className="mb-2"text={"white"} style={{backgroundColor:"#28203A"}}>
      <Card.Body>
        <Card.Title style={{fontSize:"3rem", marginBottom:"0px", textShadow:"0 0 15px yellow"}}>{props.stat}</Card.Title>
        <Card.Subtitle className="mb-2" style={{fontStyle:"italic"}}>
          {props.units}
        </Card.Subtitle>
        <Card.Text>          
          <div style={{fontSize: "1.2rem"}}>{props.description1}</div>
          <div>{props.description2}</div>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
      )
      return card;
  }


  return (
    <Container>

        <Row xs={1} md={1} lg={2} className="g-4" style={{paddingTop:"8px"}}>
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <StatCard stat={item.stat} units={item.units} description1={item.description1} description2={item.description2} />
        ))}
        </Row>
    </Container>
  );
};

export default Home;
