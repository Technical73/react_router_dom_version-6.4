import React from "react";
import { Button, Card } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <Card.Header>
          <Card.Text>
            Hello Jagadish , This is the way for Working with New Version of
            Router v.6.4
          </Card.Text>
        </Card.Header>
        <Card.Body>
          <Card.Link>
            <Button variant="primary">Get More Information</Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Home;
