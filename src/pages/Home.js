import React, { useEffect, useState } from "react";
import { Container, Row, Col, NavItem, Card, CardGroup } from "react-bootstrap";

const RESULTS_URL =
  "https://raw.githubusercontent.com/petehilljnr/parkrun-stats/master/data/results.json";

const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr];
  if (chunkSize <= 0) return cache;
  while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  return cache;
};

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
      const card = (<Card className="mx-1 my-2">
      <Card.Body>
        <Card.Title>{props.stat}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.units}
        </Card.Subtitle>
        <Card.Text>
          {props.description1}<br/>
          {props.description2}
        </Card.Text>
      </Card.Body>
    </Card>

      )
      return card;
  }


  return (
    <Container fluid>
        <CardGroup>
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <StatCard stat={item.stat} units={item.units} description1={item.description1} description2={item.description2} />
        ))}
        </CardGroup>
    </Container>
  );
};

export default Home;
