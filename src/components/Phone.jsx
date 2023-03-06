import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Phone = () => {
  const [get, setGet] = useState(false);
  const handleClick = () => {
    setGet((prev) => !prev);
  };
  return (
    <>
      <div className="py-4">
        <Card
          border="primary"
          style={{
            width: "28rem",
          }}
        >
          <Card.Header>
            <Card.Title>Name of the owner is Jagadish VR</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              In this Company which was Established in 2007. Its been 15 years
              since. It has been running at good profitable and without loss of
              the revenue.
            </Card.Text>
            <Card.Footer>
              <Card.Link>
                <Button
                  onClick={handleClick}
                  variant={get ? "success" : "primary"}
                  style={{
                    marginLeft: "-10px",
                  }}
                >
                  Get the Number by click
                </Button>
              </Card.Link>
              {get ? (
                <>
                  <Card.Text className="pt-4">Mobile NO: 9878978978</Card.Text>
                </>
              ) : null}
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Phone;
