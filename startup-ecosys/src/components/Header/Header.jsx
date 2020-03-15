import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  CustomInput,
  Row,
  Col
} from "reactstrap";
import Button from "components/CustomButton/CustomButton.jsx";

import dashboardRoutes from "routes/dashboard.jsx";

import { credentials, login, signUp } from "../../helpers/helpers";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent",
      loginModal: false,
      registerModal: false,
      login: {
        email: "",
        password: ""
      },
      loginRole: "individual",
      registerRole: "individual"
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
  }

  onLogin = async event => {
    event.preventDefault();
    await login(this.state.login, this.state.loginRole);
    setTimeout(() => {
      this.setState({ status: "success", loginModal: false });
    }, 1000);
  };

  signUp = async event => {
    event.preventDefault();
    switch (this.state.registerRole) {
      case "individual":
        await signUp(this.state.individual, this.state.registerRole);
        break;
      case "investor":
        await signUp(this.state.investor, this.state.registerRole);
        break;
      case "mentor":
        await signUp(this.state.mentor, this.state.registerRole);
        break;
    }
    setTimeout(() => {
      this.setState({ status: "success", registerModal: false });
    }, 1000);
  };

  toggleModal = modal => {
    this.setState(prevState => ({
      [modal]: !prevState[modal]
    }));
  };

  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent"
      });
    } else {
      this.setState({
        color: "dark"
      });
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  getBrand() {
    var name;
    dashboardRoutes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      } else {
        if (prop.redirect) {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        } else {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        }
      }
      return null;
    });
    return name;
  }
  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.refs.sidebarToggle.classList.toggle("toggled");
  }
  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "dark"
      });
    } else {
      this.setState({
        color: "transparent"
      });
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor.bind(this));
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      this.refs.sidebarToggle.classList.toggle("toggled");
    }
  }

  renderTopRight = () => {
    if (credentials().id) {
      return (
        <NavItem>
          <Link to="/dashboard">
            <Button color="primary" round>
              Dashboard
            </Button>
          </Link>
        </NavItem>
      );
    } else {
      return (
        <>
          <NavItem>
            <Button
              color="primary"
              round
              onClick={() => {
                this.setState({ loginModal: !this.state.loginModal });
              }}
            >
              Login
            </Button>
          </NavItem>

          <NavItem>
            <Button
              color="primary"
              round
              onClick={() => {
                this.setState({
                  registerModal: !this.state.registerModal,
                  registerRole: "individual"
                });
              }}
            >
              Sign Up
            </Button>
          </NavItem>
        </>
      );
    }
  };

  render() {
    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar
        color={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "dark"
            : this.state.color
        }
        expand="lg"
        className={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-absolute fixed-top"
            : "navbar-absolute fixed-top " +
              (this.state.color === "transparent" ? "navbar-transparent " : "")
        }
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref="sidebarToggle"
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand href="/">{this.getBrand()}</NavbarBrand>
          </div>
          <NavbarToggler onClick={this.toggle}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="justify-content-end"
          >
            {/* <form>
              <InputGroup className="no-border">
                <Input placeholder="Search..." />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </form> */}
            <Nav navbar>
              {this.renderTopRight()}
              <Modal
                isOpen={this.state.loginModal}
                toggle={() => this.toggleModal("loginModal")}
              >
                <ModalHeader toggle={() => this.toggleModal("loginModal")}>
                  Login
                </ModalHeader>
                <ModalBody>
                  <Form onSubmit={this.onLogin}>
                    <FormGroup>
                      <Label>Role</Label>
                      <Input
                        type="select"
                        name="select"
                        onChange={event => {
                          this.setState({
                            loginRole: event.target.value
                          });
                          console.log(event.target.value);
                        }}
                      >
                        <option value="individual">Individual</option>
                        <option value="startup">Startup</option>
                        <option value="incubator">Incubator</option>
                        <option value="investor">Investor</option>
                        <option value="mentor">Mentor</option>
                        <option value="gnc">GNC</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label>Email</Label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="john@gmail.com"
                        onChange={event =>
                          this.setState({
                            login: {
                              ...this.state.login,
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
                        placeholder="password"
                        required
                        onChange={event =>
                          this.setState({
                            login: {
                              ...this.state.login,
                              password: event.target.value
                            }
                          })
                        }
                      />
                    </FormGroup>
                    <Button color="primary" round>
                      Log in
                    </Button>
                  </Form>
                </ModalBody>
              </Modal>
              <Modal
                isOpen={this.state.registerModal}
                toggle={() => this.toggleModal("registerModal")}
              >
                <ModalHeader toggle={() => this.toggleModal("registerModal")}>
                  Register
                </ModalHeader>
                <ModalBody>
                  <Form onSubmit={this.signUp}>
                    {/*<FormGroup>
                       <Label>
                        <strong>Role</strong>
                      </Label>
                      <Input
                        type="select"
                        name="select"
                        id="registerRole"
                        onChange={event => {
                          this.setState({
                            registerRole: event.target.value
                          });
                        }}
                      >
                        <option value="individual">Individual</option>
                        <option value="investor">Investor</option>
                        <option value="mentor">Mentor</option>
                      </Input>
                    </FormGroup> */}
                    {/* {this.state.registerRole === "individual" && */}
                    <form>
                      <FormGroup>
                        <Label>
                          <strong>Name</strong>
                        </Label>
                        <Input
                          type="text"
                          name="name"
                          placeholder=""
                          onChange={event =>
                            this.setState({
                              individual: {
                                ...this.state.individual,
                                Name: event.target.value
                              }
                            })
                          }
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label>
                          <strong>Email</strong>
                        </Label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="E-mail address"
                          onChange={event =>
                            this.setState({
                              individual: {
                                ...this.state.individual,
                                email: event.target.value
                              }
                            })
                          }
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label>
                          <strong>Password</strong>
                        </Label>
                        <Input
                          type="password"
                          name="password"
                          placeholder="password "
                          onChange={event =>
                            this.setState({
                              individual: {
                                ...this.state.individual,
                                password: event.target.value
                              }
                            })
                          }
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label>
                          <strong>Phone No</strong>
                        </Label>
                        <Input
                          type="phone"
                          name="tel"
                          placeholder="Phone No"
                          onChange={event =>
                            this.setState({
                              individual: {
                                ...this.state.individual,
                                phoneNo: event.target.value
                              }
                            })
                          }
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label>
                          <strong>Address</strong>
                        </Label>
                        <Input
                          type="text"
                          name="address"
                          placeholder="1234 Main St"
                          onChange={event =>
                            this.setState({
                              individual: {
                                ...this.state.individual,
                                address: event.target.value
                              }
                            })
                          }
                          required
                        />
                      </FormGroup>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label>
                              <strong>City</strong>
                            </Label>
                            <Input
                              type="text"
                              name="city"
                              onChange={event =>
                                this.setState({
                                  individual: {
                                    ...this.state.individual,
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
                            <Label>
                              <strong>State</strong>
                            </Label>
                            <Input
                              type="text"
                              name="state"
                              onChange={event =>
                                this.setState({
                                  individual: {
                                    ...this.state.individual,
                                    state: event.target.value
                                  }
                                })
                              }
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup>
                            <Label>
                              <strong>Zip</strong>
                            </Label>
                            <Input
                              type="number"
                              name="zip"
                              onChange={event =>
                                this.setState({
                                  individual: {
                                    ...this.state.individual,
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
                        <Label>
                          <strong>Facebook Profile</strong>
                        </Label>
                        <Input
                          type="url"
                          name="url"
                          placeholder="https://"
                          onChange={event =>
                            this.setState({
                              individual: {
                                ...this.state.individual,
                                facebook: event.target.value
                              }
                            })
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label>
                          <strong>Linkedin Profile</strong>
                        </Label>
                        <Input
                          type="url"
                          name="url"
                          placeholder="https://"
                          onChange={event =>
                            this.setState({
                              individual: {
                                ...this.state.individual,
                                linkedin: event.target.value
                              }
                            })
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label>
                          <strong>Brief</strong>
                        </Label>
                        <Input
                          type="textarea"
                          name="text"
                          onChange={event =>
                            this.setState({
                              individual: {
                                ...this.state.individual,
                                brief: event.target.value
                              }
                            })
                          }
                          required
                        />
                      </FormGroup>
                      <Button color="primary" round>
                        Submit
                      </Button>
                    </form>
                  </Form>
                </ModalBody>
              </Modal>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
