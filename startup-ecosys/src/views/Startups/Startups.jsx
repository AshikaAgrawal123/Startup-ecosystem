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

import {
  credentials,
  signUp,
  getProfile,
  updateProfile,
  getAllProfiles
} from "../../helpers/helpers";
class Startups extends React.Component {
  state = {
    profiles: []
  };
  async componentDidMount() {
    let profiles = await getAllProfiles("startup");
    this.setState({ profiles: profiles.data });
  }

  renderProfiles = () => {
    return this.state.profiles.map(c => {
      let linkTo = `/startup/${c.id}`;
      return (
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
                  title={c.startupName}
                  // description="@chetfaker"
                />
              </Link>
              <p className="description text-center text-secondary">
                {c.description}
                <br />
                {c.city}
                <br />
                {c.industry} Industry
                <br />
              </p>
            </CardBody>
            <CardFooter>
              <hr />
              <div className="button-container">
                <Row>
                  <Col xs={6} sm={6} md={6} lg={4} className="mr-auto ml-auto">
                    <h5>
                      {c.employees[0].value}
                      <br />
                      <small>Employees</small>
                    </h5>
                  </Col>
                  <Col lg={4} className="mr-auto">
                    <h5>
                      {c.founded}
                      <br />
                      <small>Founded</small>
                    </h5>
                  </Col>
                </Row>
              </div>
            </CardFooter>
          </Card>
        </Col>
      );
    });
  };
  render() {
    if (this.state.profiles)
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
          <Row>{this.renderProfiles()}</Row>
        </div>
      );
    return <div />;
  }
}

export default Startups;
