import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Row,
  Col
} from "reactstrap";

import CardAuthor from "components/CardElements/CardAuthor.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import damirBosnjak from "assets/img/damir-bosnjak.jpg";
import mike from "assets/img/mike.jpg";
import ayoOgunseinde2 from "assets/img/faces/ayo-ogunseinde-2.jpg";
import joeGardner2 from "assets/img/faces/joe-gardner-2.jpg";
import clemOnojeghuo2 from "assets/img/faces/clem-onojeghuo-2.jpg";

class Mentors extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={3} xs={12}>
            <Card className="card-user">
              <div
                className="image"
                style={{
                  height: "250px",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0
                }}
              >
                <img
                  src={damirBosnjak}
                  alt="..."
                  style={{
                    height: "250px",
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0
                  }}
                />
              </div>
              <CardBody>
                <CardAuthor
                  // avatar={mike}
                  // avatarAlt="..."
                  title="Mentor 1"
                  // description="@chetfaker"
                />
                <p className="description text-center text-secondary">
                  Description
                  <br />
                  Location
                  <br />
                  Categories
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={5} className="ml-auto">
                      <h5>
                        12
                        <br />
                        <small>Upvotes</small>
                      </h5>
                    </Col>
                    <Col
                      xs={6}
                      sm={6}
                      md={6}
                      lg={5}
                      className="mr-auto ml-auto"
                    >
                      <h5>
                        24
                        <br />
                        <small>Mentees</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Mentors;
