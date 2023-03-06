import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  const [user, setUser] = useState("Jagadish");
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <>
      <Card
        style={{
          width: "21rem",
        }}
      >
        <Card.Header>
          <Card.Img
            variant="top"
            style={{
              height: "300px",
            }}
            fluid
            src="https://images.pexels.com/photos/15415629/pexels-photo-15415629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></Card.Img>
        </Card.Header>
        <Card.Body>
          <Card.Title>Hello Jagadish</Card.Title>
          <Card.Text>
            Documentation and examples for opting images into responsive
            behavior so they never become wider than their parent and add
            lightweight styles to them—all via classes.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Text className="text-muted">
            We need to do more things over here
          </Card.Text>
          <Card.Link>
            <Button variant="primary" onClick={() => setUser(null)}>
              Get More About Us
            </Button>
          </Card.Link>
        </Card.Footer>
      </Card>
    </>
  );
};

export default About;
