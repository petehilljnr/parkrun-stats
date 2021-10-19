import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const About = () => {
   return (
    <Container style={{paddingTop: "5px"}}>
      <Row>
        <Col>
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
              About
            </Card.Title>
            <Card.Text>
              <p> </p>
              <p>
                During the COVID lockdown in August 2021, I got bored ... <br/>
                <br/>
                I was looking at Dunedin Parkrun results because I had managed to sneak in my 50th earlier in the year (between kid's Saturday football) <br/>  
                <br/>              
                Being the curious person I am, I decided to have a look at all of my results and immediately noticed a few things:<br/>
                - There's no API for getting Parkrun results<br/>
                - The default Parkrun interface is very utilitarian <br/>
                - There's a lot of follow on information<br/>
                <br/>
                I decided I would attempt to web-scrape all of the results for Dunedin Parkrun and have a play with the data<br/>
                This was reasonably simple - although I did manage to get myself temporarity banned from the Parkrun websites a few times  - sorry Parkrun, my intentions were geniune!<br/>
                <br/>
                Now I've got ~38k individual results for Dunedin Parkrun from all 381 events <br/>
                On top of that - for the ~4.5k athletes that have completed Dunedin Parkrun, I've got the counts of all the other Parkrun events they've completed<br/>
                <br/>
                All of this data can make for some great analyses but there's a couple of points to note:<br/>
                - THIS IS ALL JUST A BIT OF FUN.  I'm not selling anything, advertising anything, and no - I won't give you the data outright. <br/>
                - I'm not affiliated with Parkrun or any of its partners<br/>
                - I have excluded any results where the parkrunner didn't have a barcode - i.e. "Unknown"<br/>
                - It's not complete - I've just got it in a state to do more fun facts and charts.  I'll add more when I get time<br/>
                - I've been careful to not use any names to individually identify people<br/>
                - The results are for any Parkrunner that has attended Dunedin Parkrun<br/>
                - If you have ideas for stats to include or visualise, feel free to <a href="mailto: petehilljnr@gmail.com">email</a> me
                <br/>
                <br/>
                Pete
              </p>

            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
