import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import Button from "components/CustomButton/CustomButton.jsx";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

// button - register at nodal center then nodal center form will open
import Stats from "components/Stats/Stats.jsx";

import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";
import { login, getAllStats } from "../../helpers/helpers";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodalCenterModal: false,
      nodalCenter: {
        name: "",
        email: "",
        password: "",
        mobileNo: "",
        address: "",
        state: "",
        city: "",
        zip: "",
        brief: "",
        contactName: "",
        contactRole: "",
        contactEmail: "",
        contactNumber: "",
        website: ""
      },
      stats: {
        startups: 4
      }
    };
  }

  onRegister = event => {
    event.preventDefault();
    alert("registered");
  };

  toggleModal = modal => {
    this.setState(prevState => ({
      [modal]: !prevState[modal]
    }));
  };
  renderModal = () => {
    return (
      <div>
        <Modal
          isOpen={this.state.nodalCenterModal}
          toggle={() => this.toggleModal("nodalCenterModal")}
        >
          <ModalHeader toggle={() => this.toggleModal("nodalCenterModal")}>
            Nodal Center
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onRegister}>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={event =>
                    this.setState({
                      nodalCenter: {
                        ...this.state.nodalCenter,
                        name: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder=""
                  onChange={event =>
                    this.setState({
                      nodalCenter: {
                        ...this.state.nodalCenter,
                        email: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  required
                  onChange={event =>
                    this.setState({
                      nodalCenter: {
                        ...this.state.nodalCenter,
                        password: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>MobileNo.</Label>
                <Input
                  type="phone"
                  name="tel"
                  onChange={event =>
                    this.setState({
                      nodalCenter: {
                        ...this.state.nodalCenter,
                        mobileNo: event.target.value
                      }
                    })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Address</Label>
                <Input
                  type="text"
                  name="address"
                  onChange={event =>
                    this.setState({
                      nodalCenter: {
                        ...this.state.nodalCenter,
                        address: event.target.value
                      }
                    })
                  }
                  required
                />
              </FormGroup>
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label>City</Label>
                    <Input
                      type="text"
                      name="city"
                      onChange={event =>
                        this.setState({
                          nodalCenter: {
                            ...this.state.nodalCenter,
                            city: event.target.value
                          }
                        })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label>State</Label>
                    <Input
                      type="text"
                      name="state"
                      onChange={event =>
                        this.setState({
                          nodalCenter: {
                            ...this.state.nodalCenter,
                            state: event.target.value
                          }
                        })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label>Zip</Label>
                    <Input
                      type="number"
                      name="zip"
                      onChange={event =>
                        this.setState({
                          nodalCenter: {
                            ...this.state.nodalCenter,
                            zip: event.target.value
                          }
                        })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label>Website</Label>
                <Input
                  type="url"
                  name="url"
                  onChange={event =>
                    this.setState({
                      nodalCenter: {
                        ...this.state.nodalCenter,
                        website: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input
                  type="textarea"
                  name="brief"
                  onChange={event =>
                    this.setState({
                      nodalCenter: {
                        ...this.state.nodalCenter,
                        brief: event.target.value
                      }
                    })
                  }
                  required
                />
              </FormGroup>
              <Row>
                <Col>
                  <FormGroup>
                    <Label>Contact Name</Label>
                    <Input
                      type="text"
                      name="cname"
                      onChange={event =>
                        this.setState({
                          nodalCenter: {
                            ...this.state.nodalCenter,
                            contactName: event.target.value
                          }
                        })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>Contact Role</Label>
                    <Input
                      type="text"
                      name="cRole"
                      onChange={event =>
                        this.setState({
                          nodalCenter: {
                            ...this.state.nodalCenter,
                            contactRole: event.target.value
                          }
                        })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label>Contact Email</Label>
                    <Input
                      type="url"
                      name="cEmail"
                      onChange={event =>
                        this.setState({
                          nodalCenter: {
                            ...this.state.nodalCenter,
                            contactEmail: event.target.value
                          }
                        })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>Contact Number</Label>
                    <Input
                      type="number"
                      name="cNumber"
                      onChange={event =>
                        this.setState({
                          nodalCenter: {
                            ...this.state.nodalCenter,
                            contactNumber: event.target.value
                          }
                        })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <div className="update ml-auto mr-auto">
                  <Button style={{ width: "100%" }} color="primary" round>
                    Submit
                  </Button>
                </div>
              </Row>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  };

  async componentDidMount() {
    let stats = await getAllStats();
    this.setState({
      stats: stats.data
    });
    console.log(stats);
  }

  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Card className="card-hero">
              <CardBody>
                <img
                  style={{ width: "100%" }}
                  src="https://www.startupindia.gov.in/content/dam/invest-india/BannerImages/modi_ji(1380x410).png/_jcr_content/renditions/cq5dam.web.1280.1280.png"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={4}>
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col xs={7} md={8}>
                    <div className="numbers">
                      <p className="card-category">Startups Registered</p>
                      <CardTitle tag="p">{this.state.stats.startups}</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-sync-alt",
                      t: "Update Now"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={4}>
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-money-coins text-success" />
                    </div>
                  </Col>
                  <Col xs={7} md={8}>
                    <div className="numbers">
                      <p className="card-category">Investments</p>
                      <CardTitle tag="p">$ 0</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "far fa-calendar",
                      t: "Last day"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={4}>
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-vector text-danger" />
                    </div>
                  </Col>
                  <Col xs={7} md={8}>
                    <div className="numbers">
                      <p className="card-category">Mentors</p>
                      <CardTitle tag="p">0</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "far fa-clock",
                      t: "In the last hour"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={4}>
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-favourite-28 text-primary" />
                    </div>
                  </Col>
                  <Col xs={7} md={8}>
                    <div className="numbers">
                      <p className="card-category">Incubators</p>
                      <CardTitle tag="p">0</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-sync-alt",
                      t: "Update now"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        {/* <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle>Startups across Industries</CardTitle>
              </CardHeader>
              <CardBody>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                  width={200}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-history",
                      t: " Updated 3 minutes ago"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
        </Row> */}
        {this.renderModal()}
        {/* <Row>
          <div className="update ml-auto mr-auto">
            <Button
              style={{ width: "100%" }}
              color="primary"
              round
              onClick={() => {
                this.setState({
                  nodalCenterModal: !this.state.nodalCenterModal,
                  registerRole: "nodal Center"
                });
              }}
            >
              Register Nodal Center
            </Button>
          </div>
        </Row> */}
        {/* <Row>
          <Col xs={12} sm={12} md={4}>
            <Card>
              <CardHeader>
                <CardTitle>Email Statistics</CardTitle>
                <p className="card-category">Last Campaign Performance</p>
              </CardHeader>
              <CardBody>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Opened{" "}
                  <i className="fa fa-circle text-warning" /> Read{" "}
                  <i className="fa fa-circle text-danger" /> Deleted{" "}
                  <i className="fa fa-circle text-gray" /> Unopened
                </div>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-calendar-alt",
                      t: " Number of emails sent"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={8}>
            <Card className="card-chart">
              <CardHeader>
                <CardTitle>NASDAQ: AAPL</CardTitle>
                <p className="card-category">Line Chart With Points</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                  <i className="fa fa-circle text-warning" /> BMW 5 Series
                </div>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-check",
                      t: " Data information certified"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
        </Row> */}
      </div>
    );
  }
}

export default Home;
