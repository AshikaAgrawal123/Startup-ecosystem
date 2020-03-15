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
import { Link } from "react-router-dom";

import CardAuthor from "components/CardElements/CardAuthor.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import damirBosnjak from "assets/img/damir-bosnjak.jpg";
import mike from "assets/img/mike.jpg";
import ayoOgunseinde2 from "assets/img/faces/ayo-ogunseinde-2.jpg";
import joeGardner2 from "assets/img/faces/joe-gardner-2.jpg";
import clemOnojeghuo2 from "assets/img/faces/clem-onojeghuo-2.jpg";

class Investors extends React.Component {
  render() {
    let linkTo = `/investor/id`;
    return (
      <div className="content">
        {/* <Row>
          <Col md={12} xs={12} className=" mx-auto">
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardBody style={{ fontSize: "16px" }}>Hello World!!</CardBody>
            </Card>
          </Col>
        </Row> */}
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
                  src="https://www.startupindia.gov.in/etc/designs/invest-india/investindialibs/images/user_default_pic.jpeg"
                  alt="..."
                  style={{
                    height: "250px",
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0
                  }}
                />
              </div>
              <CardBody>
                <Link to={linkTo}>
                  <CardAuthor
                    // avatar={mike}
                    // avatarAlt="..."
                    title="Investor 1"
                    // description="@chetfaker"
                  />
                </Link>
                <p className="description text-center text-secondary">
                  Angel Investor
                  <br />
                  Noida
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
                        1
                        <br />
                        <small>Investments</small>
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

export default Investors;
