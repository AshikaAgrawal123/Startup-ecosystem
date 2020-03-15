import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Row,
  Col,
  Table
} from "reactstrap";

import CardAuthor from "components/CardElements/CardAuthor.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import damirBosnjak from "assets/img/damir-bosnjak.jpg";
import mike from "assets/img/mike.jpg";
import ayoOgunseinde2 from "assets/img/faces/ayo-ogunseinde-2.jpg";
import joeGardner2 from "assets/img/faces/joe-gardner-2.jpg";
import clemOnojeghuo2 from "assets/img/faces/clem-onojeghuo-2.jpg";

import {
  credentials,
  signUp,
  getProfile,
  updateProfile
} from "../../helpers/helpers";

class StartupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestCompleted: false,
      profile: null
    };
  }
  async componentDidMount() {
    console.log(this.props.match.params.id);
    let profile = await getProfile(this.props.match.params.id, "startup");
    this.setState({ profile: profile.data });
  }
  renderButtons = () => {
    if (credentials().role === "investor") {
      return (
        <Row>
          <Button color="primary" round>
            Invest in this startup
          </Button>
        </Row>
      );
    }
    if (credentials().role === "mentor") {
      return (
        <Row>
          <Button color="primary" round>
            Mentor this startup
          </Button>
        </Row>
      );
    }
    if (credentials().role === "incubator") {
      return (
        <Row>
          <Button color="primary" round>
            Incubate this startup
          </Button>
        </Row>
      );
    }
  };

  getId = url => {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return "error";
    }
  };

  render() {
    var videoId, iframeMarkup, vsrc;
    if (this.state.profile) {
      videoId = this.getId(this.state.profile.youtube);
      vsrc = "//www.youtube.com/embed/" + videoId + "";
      iframeMarkup = (
        <iframe
          width="1180"
          height="615"
          src={vsrc}
          frameborder="0"
          allowfullscreen
        />
      );

      return (
        <div className="content">
          <Row>
            <Col md={12} xs={12} className=" mx-auto">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle />
                </CardHeader>
                <CardBody style={{ width: "100%" }}>{iframeMarkup}</CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12} className=" mx-auto">
              <Card className="card-user">
                <CardHeader />
                <CardBody style={{ fontSize: "16px" }}>
                  <Row className="mb-4">
                    <Col md={2} xs={2}>
                      <div className="image" style={{ height: "100%" }}>
                        <img
                          src={damirBosnjak}
                          alt="..."
                          style={{ borderRadius: "5px" }}
                        />
                      </div>
                    </Col>
                    <Col md={8} xs={8}>
                      <p style={{ fontSize: "20px" }}>
                        <strong>{this.state.profile.startupName}</strong>
                        <br />
                        {this.state.profile.description}
                        <br />
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} xs={2}>
                      <strong>Startup Stage</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.startupStage[0].value}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} xs={2}>
                      <strong>Angel.co Profile</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.angelco}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} xs={2}>
                      <strong>Website</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.website}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} xs={2}>
                      <strong>Phone</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.phone}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={2} xs={2}>
                      <strong>Email</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.email}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} xs={2}>
                      <strong>Location</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.city}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={2} xs={2}>
                      <strong>Pin Code</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.pin}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} xs={2}>
                      <strong>Founded</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.founded}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={2} xs={2}>
                      <strong>Employee</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.employees[0].employees}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} xs={2}>
                      <strong>Industry</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.industry}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={2} xs={2}>
                      <strong>Sector</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.sector}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} xs={2}>
                      <strong>Services</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.services}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={2} xs={2}>
                      <strong>DIPP Recognised</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.dipprecognised === true
                        ? "Yes"
                        : "No"}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} xs={2}>
                      <strong>Total Fundings</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.totalFunding[0].value}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={2} xs={2}>
                      <strong>Valuation</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.valuation[0].value}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} xs={2}>
                      <strong>Revenue</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.revenue[0].value}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={2} xs={2}>
                      <strong>Upvotes</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.upvotes[0].value}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} xs={2}>
                      <strong>Preferred Investment</strong>
                    </Col>
                    <Col md={8} xs={8}>
                      {this.state.profile.preferredInvestment}
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {this.renderButtons()}
          {/* <Row>
          <Col md={6} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Fundings</CardTitle>
              </CardHeader>
              <CardBody>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Key People</CardTitle>
              </CardHeader>
              <CardBody>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row> */}

          <div className="text-center">
            <Button color="primary" round>
              Upvote
            </Button>
          </div>
        </div>
      );
    }
    return <div />;
  }
}

export default StartupPage;
