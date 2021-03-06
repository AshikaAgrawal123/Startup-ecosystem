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

class Nodal extends React.Component {
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
                  title="Chet Faker"
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
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Nodal;
