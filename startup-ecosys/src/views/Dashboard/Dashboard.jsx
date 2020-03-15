import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  CardFooter,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import FormInputs from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import {
  credentials,
  signUp,
  updateProfile,
  getProfile
} from "../../helpers/helpers";

const industryArray = [
  "AI",
  "Analytics",
  "Education",
  "Art And Photgraphy",
  "Chemical",
  "Finance Technology",
  "fashion"
];
const serviceArray = ["Consulting", "Engineer", "Research"];
const sectorarray = {
  AI: ["ML", "NLP", "Others"],
  Analytics: ["Business Intelligence", "Big Data", "data science"],
  Education: ["E-learning", "skill Development", "coaching"],
  "Art And Photgraphy": ["Handicrafts", "Art", "Photography"],
  Chemical: [
    "Commodity chemicals",
    "Agricultural chemicals",
    "speciality chemicals"
  ],
  fashion: ["lifestyle", "apparel", "jewellery", "Fan Merchandise"],
  "Finance Technology": ["Crowdfunding", "Trading", "Insurance", "Advisory"]
};
let allOption = array => {
  const option = array.map(element => <option>{element}</option>);
  return option;
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startupModal: false,
      incubatorModal: false,
      mentorModal: false,
      investor: {
        email: "",
        phoneNo: "",
        password: "",
        Name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        brief: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        website: "",
        preferredStartupStages: "",
        industry: "AI",
        sector: "",
        investmentRange: "",
        designation: "",
        investorType: ""
      },
      mentor: {
        email: "",
        phoneNo: "",
        password: "",
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        about: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        website: "",
        preferredStartupStages: "",
        focusIndustries: "AI",
        sectors: "",
        designation: "",
        noOfStartups: "",
        mentorshipHours: ""
      },
      incubator: {
        incubatorName: "",
        email: "",
        password: "",
        mobileNo: "",
        address: "",
        state: "",
        city: "",
        zip: "",
        founded: "",
        progDuration: "",
        governmentFunded: "",
        otherLink: "",
        preferredStartupStages: "",
        dippNumber: "",
        focusIndustries: "AI",
        focusSectors: "",
        serviceAreas: "",
        description: "",
        facebook: "",
        twitter: "",
        website: "",
        contactPersonName: "",
        contactPersonDesignation: "",
        contactPersonEmail: "",
        contactPersonMobile: ""
      },
      startup: {
        startupName: "",
        email: "",
        password: "",
        website: "",
        phone: "",
        address: "",
        state: "",
        city: "",
        pin: "",
        founded: "",
        dipprecognised: "",
        dippId: "",
        startupStage: "",
        industry: "AI",
        sector: "",
        services: "",
        openToInvestment: "",
        preferredInvestment: "",
        description: "",
        youtube: "",
        linkedin: "",
        angelco: "",
        employees: "",
        featuredVideo: "",
        adhaar: "",
        OTP: ""
      },
      startupEdit: {},
      profile: null
    };
  }

  toggleModal = modal => {
    this.setState(prevState => ({
      [modal]: !prevState[modal]
    }));
  };

  onStartupRegister = async event => {
    event.preventDefault();
    console.log(this.state.startup);
    await signUp(this.state.startup, "startup");
    setTimeout(() => {
      this.setState({ status: "success", startupModal: false });
    }, 1000);
  };
  onIncubatorRegister = event => {
    event.preventDefault();
    alert("Incubator registered");
  };

  renderModal = () => {
    return (
      <>
        <Modal
          isOpen={this.state.investorModal}
          toggle={() => this.toggleModal("investorModal")}
        >
          <ModalHeader toggle={() => this.toggleModal("investorModal")}>
            Register Investor
          </ModalHeader>
          <ModalBody>
            <form>
              <FormGroup>
                <Label>
                  <strong>Name</strong>
                </Label>
                <Input
                  type="text"
                  name="name"
                  placeholder=""
                  required
                  onChange={event =>
                    this.setState({
                      investor: {
                        ...this.state.investor,
                        Name: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  <strong>Email</strong>
                </Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="e-mail address"
                  required
                  onChange={event =>
                    this.setState({
                      investor: {
                        ...this.state.investor,
                        email: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  <strong>Password</strong>
                </Label>
                <Input
                  type="password1"
                  name="password"
                  placeholder=""
                  required
                  onChange={event =>
                    this.setState({
                      investor: {
                        ...this.state.investor,
                        password: event.target.value
                      }
                    })
                  }
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
                  required
                  onChange={event =>
                    this.setState({
                      investor: {
                        ...this.state.investor,
                        phoneNo: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  <strong>Designation</strong>
                </Label>
                <Input
                  type="text"
                  name="designation"
                  required
                  onChange={event =>
                    this.setState({
                      investor: {
                        ...this.state.investor,
                        designation: event.target.value
                      }
                    })
                  }
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
                  required
                  onChange={event =>
                    this.setState({
                      investor: {
                        ...this.state.investor,
                        address: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <Row form>
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
                          investor: {
                            ...this.state.investor,
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
                      required
                      onChange={event =>
                        this.setState({
                          investor: {
                            ...this.state.investor,
                            state: event.target.value
                          }
                        })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label>
                      <strong>Zip</strong>
                    </Label>
                    <Input
                      type="text"
                      name="zip"
                      onChange={event =>
                        this.setState({
                          investor: {
                            ...this.state.investor,
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
                  <strong>Preferred Startup Stages</strong>
                </Label>
                <Input
                  type="select"
                  name="select"
                  required
                  onChange={event =>
                    this.setState({
                      investor: {
                        ...this.state.investor,
                        preferredStartupStages: event.target.value
                      }
                    })
                  }
                >
                  <option>Traction</option>
                  <option>Refinement</option>
                  <option>Scaling</option>
                  <option>Established</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>
                  <strong>investorType</strong>
                </Label>
                <Input
                  type="select"
                  name="select"
                  required
                  onChange={event =>
                    this.setState({
                      investor: {
                        ...this.state.investor,
                        investorType: event.target.value
                      }
                    })
                  }
                >
                  <option>Individual Investor</option>
                  <option>Industrial Investor</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>
                  <strong>Budget</strong>
                </Label>
                <Input
                  type="select"
                  name="select"
                  required
                  onChange={event =>
                    this.setState({
                      investor: {
                        ...this.state.investor,
                        investmentRange: event.target.value
                      }
                    })
                  }
                >
                  <option value="upto 25lakh">Rs 0-25,00,000</option>
                  <option value="25L to 50L">Rs 25,00,000-50,00,000</option>
                  <option value="50L to 1crore">
                    Rs 50,00,000-1,00,00,000
                  </option>
                  <option value="more than 1crore">Rs 1,00,00,000+</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>
                  <strong>Industries</strong>{" "}
                </Label>
                <Input
                  type="select"
                  name="select"
                  required
                  onChange={event =>
                    this.setState({
                      investor: {
                        ...this.state.investor,
                        industry: event.target.value
                      }
                    })
                  }
                >
                  {allOption(industryArray)}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>
                  <strong>Sectors</strong>
                </Label>
                <Input
                  type="select"
                  name="select"
                  required
                  onChange={event =>
                    this.setState({
                      investor: {
                        ...this.state.investor,
                        sector: event.target.value
                      }
                    })
                  }
                >
                  {allOption(sectorarray[this.state.investor.industry])}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>
                  <strong>Service Areas</strong>
                </Label>
                <Input
                  type="select"
                  name="select"
                  required
                  onChange={event =>
                    this.setState({
                      investor: {
                        ...this.state.investor,
                        area: event.target.value
                      }
                    })
                  }
                >
                  <option>Select</option>
                  {allOption(serviceArray)};
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>
                  <strong>Website</strong>
                </Label>
                <Input
                  type="url"
                  name="url"
                  placeholder=""
                  onChange={event =>
                    this.setState({
                      investor: {
                        ...this.state.investor,
                        website: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  <strong>Linkedin</strong>
                </Label>
                <Input
                  type="url"
                  name="url"
                  placeholder=""
                  onChange={event =>
                    this.setState({
                      investor: {
                        ...this.state.investor,
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
                      investor: {
                        ...this.state.investor,
                        brief: event.target.value
                      }
                    })
                  }
                  required
                />
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label>
                      <strong>Facebook</strong>
                    </Label>
                    <Input
                      type="url"
                      name="url"
                      placeholder=""
                      onChange={event =>
                        this.setState({
                          investor: {
                            ...this.state.investor,
                            facebook: event.target.value
                          }
                        })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>
                      <strong>Twitter</strong>
                    </Label>
                    <Input
                      type="url"
                      name="url"
                      placeholder=""
                      onChange={event =>
                        this.setState({
                          investor: {
                            ...this.state.investor,
                            twitter: event.target.value
                          }
                        })
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button color="primary" round>
                Submit
              </Button>
            </form>
          </ModalBody>
        </Modal>
        <Modal
          isOpen={this.state.mentorModal}
          toggle={() => this.toggleModal("mentorModal")}
        >
          <ModalHeader toggle={() => this.toggleModal("mentorModal")}>
            Mentor Register
          </ModalHeader>
          <ModalBody>
            <form>
              <FormGroup>
                <Label>
                  <strong>Name</strong>
                </Label>
                <Input
                  type="text"
                  name="name"
                  placeholder=""
                  required
                  onChange={event =>
                    this.setState({
                      mentor: {
                        ...this.state.mentor,
                        Name: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  <strong>Email</strong>
                </Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="e-mail address"
                  required
                  onChange={event =>
                    this.setState({
                      mentor: {
                        ...this.state.mentor,
                        email: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  <strong>Password</strong>
                </Label>
                <Input
                  type="password1"
                  name="password"
                  placeholder=""
                  required
                  onChange={event =>
                    this.setState({
                      mentor: {
                        ...this.state.mentor,
                        password: event.target.value
                      }
                    })
                  }
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
                  required
                  onChange={event =>
                    this.setState({
                      mentor: {
                        ...this.state.mentor,
                        phoneNo: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  <strong>Designation</strong>
                </Label>
                <Input
                  type="text"
                  name="designation"
                  required
                  onChange={event =>
                    this.setState({
                      mentor: {
                        ...this.state.mentor,
                        designation: event.target.value
                      }
                    })
                  }
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
                  required
                  onChange={event =>
                    this.setState({
                      mentor: {
                        ...this.state.mentor,
                        address: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <Row form>
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
                          mentor: {
                            ...this.state.mentor,
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
                      required
                      onChange={event =>
                        this.setState({
                          mentor: {
                            ...this.state.mentor,
                            state: event.target.value
                          }
                        })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label>
                      <strong>Zip</strong>
                    </Label>
                    <Input
                      type="text"
                      name="zip"
                      onChange={event =>
                        this.setState({
                          mentor: {
                            ...this.state.mentor,
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
                <label>
                  <strong>Preferred Startup Stage</strong>
                </label>
                <Input
                  type="select"
                  name="select"
                  onChange={event =>
                    this.setState({
                      mentor: {
                        ...this.state.mentor,
                        startupStage: event.target.value
                      }
                    })
                  }
                  required
                >
                  <option>Select</option>
                  <option>Traction</option>
                  <option>Refinement</option>
                  <option>Scaling</option>
                  <option>Established</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <label>
                  <strong>Industries</strong>
                </label>
                <Input
                  type="select"
                  name="select"
                  onChange={event =>
                    this.setState({
                      mentor: {
                        ...this.state.mentor,
                        focusIndustries: event.target.value
                      }
                    })
                  }
                  required
                >
                  {allOption(industryArray)}
                </Input>
              </FormGroup>
              <FormGroup>
                <label>
                  <strong>Sector</strong>
                </label>
                <Input
                  type="select"
                  name="select"
                  onChange={event =>
                    this.setState({
                      mentor: {
                        ...this.state.mentor,
                        sectors: event.target.value
                      }
                    })
                  }
                  required
                >
                  {allOption(sectorarray[this.state.mentor.focusIndustries])}
                </Input>
              </FormGroup>
              <FormGroup>
                <label>
                  <strong>Service Areas</strong>
                </label>
                <Input
                  type="select"
                  name="select"
                  onChange={event =>
                    this.setState({
                      mentor: {
                        ...this.state.mentor,
                        area: event.target.value
                      }
                    })
                  }
                  required
                >
                  <option>select</option>
                  {allOption(serviceArray)};
                </Input>
              </FormGroup>
              <FormGroup>
                <label>
                  <strong>Website</strong>
                </label>
                <Input
                  type="url"
                  name="url"
                  onChange={event =>
                    this.setState({
                      mentor: {
                        ...this.state.mentor,
                        website: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <label>
                  <strong>Linkedin</strong>
                </label>
                <Input
                  type="url"
                  name="url"
                  onChange={event =>
                    this.setState({
                      mentor: {
                        ...this.state.mentor,
                        linkedin: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <Row>
                <Col>
                  <FormGroup>
                    <label>
                      <strong>Facebook</strong>
                    </label>
                    <Input
                      type="url"
                      name="url"
                      onChange={event =>
                        this.setState({
                          mentor: {
                            ...this.state.mentor,
                            facebook: event.target.value
                          }
                        })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <label>
                      <strong>Twitter</strong>
                    </label>
                    <Input
                      type="url"
                      name="url"
                      onChange={event =>
                        this.setState({
                          mentor: {
                            ...this.state.mentor,
                            twitter: event.target.value
                          }
                        })
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <label>
                  <strong>About</strong>
                </label>
                <Input
                  type="textarea"
                  name="text"
                  onChange={event =>
                    this.setState({
                      mentor: {
                        ...this.state.mentor,
                        about: event.target.value
                      }
                    })
                  }
                  required
                />
              </FormGroup>
              <Row>
                <Col>
                  <FormGroup>
                    <label>
                      <strong>
                        Number of startups you are willing to undertake to
                        mentor on a weekly basis:
                      </strong>
                    </label>
                    <Input
                      type="number"
                      name="number"
                      onChange={event =>
                        this.setState({
                          mentor: {
                            ...this.state.mentor,
                            nostartup: event.target.value
                          }
                        })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <label>
                      <strong>
                        Number of mentorship hours you are willing to impart on
                        a weekly basis:
                      </strong>
                    </label>
                    <Input
                      type="number"
                      name="number"
                      onChange={event =>
                        this.setState({
                          mentor: {
                            ...this.state.mentor,
                            hourInWeek: event.target.value
                          }
                        })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button color="primary" round>
                Submit
              </Button>
            </form>
          </ModalBody>
        </Modal>

        <Modal
          isOpen={this.state.startupModal}
          toggle={() => this.toggleModal("startupModal")}
        >
          <ModalHeader toggle={() => this.toggleModal("startupModal")}>
            Register Startup
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onStartupRegister}>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={event =>
                    this.setState({
                      startup: {
                        ...this.state.startup,
                        startupName: event.target.value
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
                      startup: {
                        ...this.state.startup,
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
                      startup: {
                        ...this.state.startup,
                        password: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <label>Website</label>
                <Input
                  type="url"
                  name="web"
                  onChange={event =>
                    this.setState({
                      startup: {
                        ...this.state.startup,
                        website: event.target.value
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
                      startup: {
                        ...this.state.startup,
                        phone: event.target.value
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
                      startup: {
                        ...this.state.startup,
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
                          startup: {
                            ...this.state.startup,
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
                          startup: {
                            ...this.state.startup,
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
                          startup: {
                            ...this.state.startup,
                            pin: event.target.value
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
                    <Label>Founded</Label>
                    <Input
                      type="number"
                      name="date"
                      onChange={event =>
                        this.setState({
                          startup: {
                            ...this.state.startup,
                            founded: event.target.value
                          }
                        })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <label>Startup Stage</label>
                    <Input
                      type="select"
                      name="stage"
                      onChange={event =>
                        this.setState({
                          startup: {
                            ...this.state.startup,
                            startupStage: event.target.value
                          }
                        })
                      }
                      required
                    >
                      <option value="select">Select</option>
                      <option value="Traction">Traction</option>
                      <option value="refinement">Refinement</option>
                      <option value="scaling">Scaling</option>
                      <option value="established">Established</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <label>Number of Employee</label>
                <Input
                  type="number"
                  name="employ"
                  onChange={event =>
                    this.setState({
                      startup: {
                        ...this.state.startup,
                        employees: event.target.value
                      }
                    })
                  }
                  required
                />
              </FormGroup>
              <Row>
                <Col>
                  <FormGroup>
                    <label>DIPP Recognised</label>
                    <Input
                      type="select"
                      name="select"
                      onChange={event =>
                        this.setState({
                          startup: {
                            ...this.state.startup,
                            dipprecognised: event.target.value
                          }
                        })
                      }
                      required
                    >
                      <option value="select">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                  {this.state.startup.dipprecognised === "Yes" && (
                    <FormGroup>
                      <label>DIPP Number</label>
                      <Input
                        type="text"
                        name="dipp"
                        onChange={event =>
                          this.setState({
                            startup: {
                              ...this.state.startup,
                              dippId: event.target.value
                            }
                          })
                        }
                        required
                      />
                    </FormGroup>
                  )}
                </Col>
              </Row>
              <FormGroup>
                <label>Industry</label>
                <Input
                  type="select"
                  name="select"
                  onChange={event =>
                    this.setState({
                      startup: {
                        ...this.state.startup,
                        industry: event.target.value
                      }
                    })
                  }
                  required
                >
                  {allOption(industryArray)}
                </Input>
              </FormGroup>
              <FormGroup>
                <label>Sector</label>
                <Input
                  type="select"
                  name="select"
                  onChange={event =>
                    this.setState({
                      startup: {
                        ...this.state.startup,
                        sector: event.target.value
                      }
                    })
                  }
                  required
                >
                  {allOption(sectorarray[this.state.startup.industry])}
                </Input>
              </FormGroup>
              <FormGroup>
                <label>Service Area</label>
                <Input
                  type="select"
                  name="select"
                  onChange={event =>
                    this.setState({
                      startup: {
                        ...this.state.startup,
                        services: event.target.value
                      }
                    })
                  }
                  required
                >
                  <option>select</option>
                  {allOption(serviceArray)}
                </Input>
              </FormGroup>
              <Row>
                <Col>
                  <FormGroup>
                    <label>Open to Investment</label>
                    <Input
                      type="select"
                      name="inv"
                      onChange={event =>
                        this.setState({
                          startup: {
                            ...this.state.startup,
                            openToInvestment: event.target.value
                          }
                        })
                      }
                      required
                    >
                      <option value="select">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                  {this.state.startup.openToInvestment === "Yes" && (
                    <FormGroup>
                      <Label>Preferred Investment</Label>
                      <Input
                        type="select"
                        name="type"
                        onChange={event =>
                          this.setState({
                            startup: {
                              ...this.state.startup,
                              preferredInvestment: event.target.value
                            }
                          })
                        }
                      >
                        <option value="stock">Stocks</option>
                        <option value="Bonds">Bonds</option>
                        <option value="cashEquivalent">Cash Equivalent</option>
                      </Input>
                    </FormGroup>
                  )}
                </Col>
              </Row>
              <FormGroup>
                <Label>Description</Label>
                <Input
                  type="textarea"
                  name="brief"
                  onChange={event =>
                    this.setState({
                      startup: {
                        ...this.state.startup,
                        description: event.target.value
                      }
                    })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <label>YouTube</label>
                <Input
                  type="url"
                  name="youTube"
                  onChange={event =>
                    this.setState({
                      startup: {
                        ...this.state.startup,
                        youtube: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <Row>
                <Col>
                  <FormGroup>
                    <label>Linkedin</label>
                    <Input
                      type="url"
                      name="linkedin"
                      onChange={event =>
                        this.setState({
                          startup: {
                            ...this.state.startup,
                            linkedin: event.target.value
                          }
                        })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <label>Angel</label>
                    <Input
                      type="url"
                      name="angel"
                      onChange={event =>
                        this.setState({
                          startup: {
                            ...this.state.startup,
                            angelco: event.target.value
                          }
                        })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <label>Revenue</label>
                    <Input
                      type="text"
                      name="revenue"
                      onChange={event =>
                        this.setState({
                          startup: {
                            ...this.state.startup,
                            revenue: event.target.value
                          }
                        })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <label>Valuation</label>
                    <Input
                      type="text"
                      name="valuation"
                      onChange={event =>
                        this.setState({
                          startup: {
                            ...this.state.startup,
                            valuation: event.target.value
                          }
                        })
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <label>Adhaar Number</label>
                    <Input
                      type="number"
                      name="number"
                      onChange={event =>
                        this.setState({
                          startup: {
                            ...this.state.startup,
                            adhaar: event.target.value
                          }
                        })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  {this.state.startup.adhaar != "" && (
                    <FormGroup>
                      <label>OTP</label>
                      <Input
                        type="number"
                        name="OTP"
                        onChange={event =>
                          this.setState({
                            startup: {
                              ...this.state.startup,
                              OTP: event.target.value
                            }
                          })
                        }
                        required
                      />
                    </FormGroup>
                  )}
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

        <Modal
          isOpen={this.state.incubatorModal}
          toggle={() => this.toggleModal("incubatorModal")}
        >
          <ModalHeader toggle={() => this.toggleModal("incubatorModal")}>
            Incubator Register
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onIncubatorRegister}>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={event =>
                    this.setState({
                      incubator: {
                        ...this.state.incubator,
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
                      incubator: {
                        ...this.state.incubator,
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
                      incubator: {
                        ...this.state.incubator,
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
                      incubator: {
                        ...this.state.incubator,
                        mobileNo: event.target.value
                      }
                    })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <label>Website</label>
                <Input
                  type="url"
                  name="web"
                  onChange={event =>
                    this.setState({
                      incubator: {
                        ...this.state.incubator,
                        website: event.target.value
                      }
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Address</Label>
                <Input
                  type="text"
                  name="address"
                  onChange={event =>
                    this.setState({
                      incubator: {
                        ...this.state.incubator,
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
                          incubator: {
                            ...this.state.incubator,
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
                          incubator: {
                            ...this.state.incubator,
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
                          incubator: {
                            ...this.state.incubator,
                            zip: event.target.value
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
                    <Label>Founded</Label>
                    <Input
                      type="date"
                      name="date"
                      onChange={event =>
                        this.setState({
                          incubator: {
                            ...this.state.incubator,
                            founded: event.target.value
                          }
                        })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>Program Duration</Label>
                    <Input
                      type="number"
                      name="no"
                      onChange={event =>
                        this.setState({
                          incubator: {
                            ...this.state.incubator,
                            duration: event.target.value
                          }
                        })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <label>Government Funded</label>
                <Input
                  type="select"
                  name="select"
                  onChange={event =>
                    this.setState({
                      incubator: {
                        ...this.state.incubator,
                        govFunded: event.target.value
                      }
                    })
                  }
                  required
                >
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </Input>
              </FormGroup>
              <Row>
                <Col>
                  <FormGroup>
                    <label>DIPP Number</label>
                    <Input
                      type="number"
                      name="dipp"
                      onChange={event =>
                        this.setState({
                          incubator: {
                            ...this.state.incubator,
                            dippNo: event.target.value
                          }
                        })
                      }
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <label>Application Link</label>
                    <Input
                      type="url"
                      name="web"
                      onChange={event =>
                        this.setState({
                          incubator: {
                            ...this.state.incubator,
                            appLink: event.target.value
                          }
                        })
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <label>Preferred Startup Stage</label>
                <Input
                  type="select"
                  name="select"
                  onChange={event =>
                    this.setState({
                      incubator: {
                        ...this.state.incubator,
                        preferredStartup: event.target.value
                      }
                    })
                  }
                  required
                >
                  <option>Select</option>
                  <option>Traction</option>
                  <option>Refinement</option>
                  <option>Scaling</option>
                  <option>Established</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <label>Focus Industries</label>
                <Input
                  type="select"
                  name="select"
                  onChange={event =>
                    this.setState({
                      incubator: {
                        ...this.state.incubator,
                        focusIndustries: event.target.value
                      }
                    })
                  }
                  required
                >
                  {allOption(industryArray)}
                </Input>
              </FormGroup>
              <FormGroup>
                <label>focus Sectors</label>
                <Input
                  type="select"
                  name="select"
                  onChange={event =>
                    this.setState({
                      incubator: {
                        ...this.state.incubator,
                        sectors: event.target.value
                      }
                    })
                  }
                  required
                >
                  {allOption(sectorarray[this.state.incubator.focusIndustries])}
                </Input>
              </FormGroup>
              <FormGroup>
                <label>Service Areas</label>
                <Input
                  type="select"
                  name="select"
                  onChange={event =>
                    this.setState({
                      incubator: {
                        ...this.state.incubator,
                        serviceArea: event.target.value
                      }
                    })
                  }
                  required
                >
                  <option>select</option>
                  {allOption(serviceArray)}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input
                  type="textarea"
                  name="brief"
                  onChange={event =>
                    this.setState({
                      incubator: {
                        ...this.state.incubator,
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
                    <label>Facebook</label>
                    <Input
                      type="url"
                      name="url"
                      onChange={event =>
                        this.setState({
                          incubator: {
                            ...this.state.incubator,
                            facebook: event.target.value
                          }
                        })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <label>Twitter</label>
                    <Input
                      type="url"
                      name="url"
                      onChange={event =>
                        this.setState({
                          incubator: {
                            ...this.state.incubator,
                            twitter: event.target.value
                          }
                        })
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label>Contact Name</Label>
                    <Input
                      type="text"
                      name="cname"
                      onChange={event =>
                        this.setState({
                          incubator: {
                            ...this.state.incubator,
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
                    <Label>Contact Designation</Label>
                    <Input
                      type="text"
                      name="cRole"
                      onChange={event =>
                        this.setState({
                          incubator: {
                            ...this.state.incubator,
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
                          incubator: {
                            ...this.state.incubator,
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
                          incubator: {
                            ...this.state.incubator,
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
              {/*<FormGroup>
  <Label >Contact no</Label>
  <Input type="number" name="contact no" id="examplename" placeholder="Phone no"  required/>
</FormGroup>
<FormGroup>
  <Label for="examplename">Adhar no</Label>
  <Input type="number" name="Adhar no" id="examplename" placeholder="Adhar no" required />
</FormGroup>
<FormGroup>
  <Label for="examplename">Dipp no</Label>
  <Input type="number" name="dipp no" id="examplename" placeholder="Dipp no"  required/>
</FormGroup>
<Label for="exampleSelect">Preffered Startup Stages</Label>
<FormGroup>
  <Input type="select" name="select" id="exampleSelect" required>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </Input>
</FormGroup>
<FormGroup>
  <Label for="examplename">Program Duration</Label>
  <Input type="number" name="no" id="examplename"  required/>
</FormGroup>
<FormGroup>
  <Label for="exampleDate">Founded</Label>
  <Input
    type="date"
    name="date"
    id="exampleDate"
    required
  />
</FormGroup>
<FormGroup>
  <Label>
     Industries>
  </Label>
  <Input
    type="select"
    name="select"
    required
    onChange={event =>
      this.setState({
        investor: {
          ...this.state.investor,
          industries: event.target.value
        }
      })
    }
  >
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </Input>
</FormGroup>
<FormGroup>
  <Label>
      Sectors
  </Label>
  <Input
    type="select"
    name="select"
    required
    onChange={event =>
      this.setState({
        investor: {
          ...this.state.investor,
          sectors: event.target.value
        }
      })
    }
  >
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </Input>
</FormGroup>
<FormGroup>
  <Label>
       Service Areas
  </Label>
  <Input
    type="select"
    name="select"
    required
    onChange={event =>
      this.setState({
        investor: {
          ...this.state.investor,
          area: event.target.value
        }
      })
    }
  >
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </Input>
</FormGroup>
<FormGroup>
  <Label>
      Application Link
  </Label>
  <Input
    type="url"
    name="url"
    placeholder=""
    required
  />
  </FormGroup>
<FormGroup>
  <Label>
       Website
  </Label>
  <Input
    type="url"
    name="url"
    placeholder=""
    onChange={event =>
      this.setState({
        investor: {
          ...this.state.investor,
          website: event.target.value
        }
      })
    }
    required
  />
</FormGroup>
<FormGroup>
  <Label>
      Linkedin
  </Label>
  <Input
    type="url"
    name="url"
    placeholder=""
    onChange={event =>
      this.setState({
        investor: {
    ...this.state.investor,
          linkedin: event.target.value
        }
      })
    }
    required
  />
</FormGroup>
<FormGroup check>
    <Label check>
    <Input type="checkbox" />
     Government Funded
  </Label>
<FormGroup>
  <Label>
     description
  </Label>
  <Input
    type="textarea"
    name="text"
    onChange={event =>
      this.setState({
        investor: {
          ...this.state.investor,
          brief: event.target.value
        }
      })
    }
    required
  />
</FormGroup>
<Row form>
  <Col md={6}>
    <FormGroup>
      <Label>
           Facebook
      </Label>
      <Input
        type="url"
        name="url"
        placeholder=""
        onChange={event =>
          this.setState({
            investor: {
              ...this.state.investor,
              facebook: event.target.value
            }
          })
        }
        required
      />
    </FormGroup>
  </Col>
  <Col md={6}>
    <FormGroup>
      <Label>
        Twitter
      </Label>
      <Input
        type="url"
        name="url"
        placeholder=""
        onChange={event =>
          this.setState({
            investor: {
              ...this.state.investor,
              twitter: event.target.value
            }
          })
        }
        required
      />
    </FormGroup>
  </Col>
</Row>

<Row>
<Col >
    <FormGroup>
      <Label>
        Contact Name
      </Label>
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
  <Col >
    <FormGroup>
      <Label>
        Contact Designation
      </Label>
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
  <Col >
    <FormGroup>
      <Label>
        Contact Email
      </Label>
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
  <Col >
    <FormGroup>
      <Label>
        Contact Number
      </Label>
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
    <Button
        style={{ width: "100%" }}
        color="primary"
        round
    >
      Submit
    </Button>
  </div>
</Row>*/}
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  };

  renderButtons = () => {
    if (credentials().role === "individual") {
      return (
        <Row>
          <Col md={12} xs={12}>
            <Card>
              <CardBody>
                <Row>
                  <Col md={4} xs={12}>
                    <Link to="/requests">
                      <Button style={{ width: "100%" }} color="primary" round>
                        View Requests
                      </Button>
                    </Link>
                  </Col>
                  <Col md={4} xs={12}>
                    <Button
                      style={{ width: "100%" }}
                      color="primary"
                      round
                      onClick={() => {
                        this.setState({
                          startupModal: !this.state.startupModal,
                          registerRole: "startup"
                        });
                      }}
                    >
                      Register Startup
                    </Button>
                  </Col>
                  <Col md={4} xs={12}>
                    <Button
                      style={{ width: "100%" }}
                      color="primary"
                      round
                      onClick={() => {
                        this.setState({
                          incubatorModal: !this.state.incubatorModal,
                          registerRole: "incubator"
                        });
                      }}
                    >
                      Register Incubator
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} xs={12}>
                    <Button style={{ width: "100%" }} color="primary" round>
                      Register as GC
                    </Button>
                  </Col>
                  <Col md={4} xs={12}>
                    <Button
                      style={{ width: "100%" }}
                      color="primary"
                      round
                      onClick={() => {
                        this.setState({
                          investorModal: !this.state.investorModal,
                          registerRole: "startup"
                        });
                      }}
                    >
                      Register Investor
                    </Button>
                  </Col>
                  <Col md={4} xs={12}>
                    <Button
                      style={{ width: "100%" }}
                      color="primary"
                      round
                      onClick={() => {
                        this.setState({
                          mentorModal: !this.state.mentorModal,
                          registerRole: "incubator"
                        });
                      }}
                    >
                      Register Mentor
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      );
    }

    return (
      <Row>
        <Col md={12} xs={12}>
          <Card>
            <CardBody>
              <Row>
                <Col md={4} xs={12}>
                  <Link to="/requests">
                    <Button style={{ width: "100%" }} color="primary" round>
                      View Requests
                    </Button>
                  </Link>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };

  onStartupUpdate = async event => {
    event.preventDefault();
    let profile = await getProfile(this.props.match.params.id, "startup");
    setTimeout(async () => {
      let data = this.state.startupEdit;
      console.log(profile.data.startupStage);
      if (data.startupStage) {
        data.startupStage = profile.data.startupStage.unshift({
          value: data.startupStage,
          timestamp: new Date().getTime()
        });
      }
      let px = await updateProfile(data, "startup", profile.data.id);
      setTimeout(() => {
        console.log(px);
        this.setState({ status: "success" });
      }, 1000);
    }, 1000);
  };

  async componentDidMount() {}

  renderStartupProfileEdit = () => {
    if (credentials().role === "startup")
      return (
        <Row>
          <Col md={12} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.onStartupUpdate}>
                  <FormGroup>
                    <label>Startup Stage</label>
                    <Input
                      type="select"
                      name="stage"
                      onChange={event =>
                        this.setState({
                          startupEdit: {
                            ...this.state.startupEdit,
                            startupStage: event.target.value
                          }
                        })
                      }
                    >
                      <option value="select">Select</option>
                      <option value="Traction">Traction</option>
                      <option value="refinement">Refinement</option>
                      <option value="scaling">Scaling</option>
                      <option value="established">Established</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <label>Number of Employee</label>
                    <Input
                      type="number"
                      name="employ"
                      onChange={event =>
                        this.setState({
                          startupEdit: {
                            ...this.state.startupEdit,
                            employees: event.target.value
                          }
                        })
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Revenue</label>
                    <Input
                      type="text"
                      name="revenue"
                      onChange={event =>
                        this.setState({
                          startupEdit: {
                            ...this.state.startupEdit,
                            revenue: event.target.value
                          }
                        })
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Valuation</label>
                    <Input
                      type="text"
                      name="valuation"
                      onChange={event =>
                        this.setState({
                          startupEdit: {
                            ...this.state.startupEdit,
                            valuation: event.target.value
                          }
                        })
                      }
                    />
                  </FormGroup>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button style={{ width: "100%" }} color="primary" round>
                        Submit
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      );
  };

  render() {
    return (
      <div className="content">
        {this.renderModal()}
        {this.renderButtons()}
        {this.renderStartupProfileEdit()}
      </div>
    );
  }
}

export default Dashboard;
