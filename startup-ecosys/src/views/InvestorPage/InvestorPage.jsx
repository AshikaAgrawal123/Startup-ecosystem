import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Row,
  Col,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import CardAuthor from "components/CardElements/CardAuthor.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import damirBosnjak from "assets/img/damir-bosnjak.jpg";
import mike from "assets/img/mike.jpg";
import ayoOgunseinde2 from "assets/img/faces/ayo-ogunseinde-2.jpg";
import joeGardner2 from "assets/img/faces/joe-gardner-2.jpg";
import clemOnojeghuo2 from "assets/img/faces/clem-onojeghuo-2.jpg";
import { login } from "../../helpers/helpers";
import { Link } from "react-router-dom";

// button for request investment- only investment type and investment money

class InvestorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestCompleted: false,
      investorModal: false,
      investmentType: "",
      investmentRange: ""
    };
  }

  submitInvestor = event => {
    event.preventDefault();
    alert("submission of investor");
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  toggleModal = modal => {
    this.setState(prevState => ({
      [modal]: !prevState[modal]
    }));
  };

  renderModal = () => {
    return (
      <div>
        <Modal
          isOpen={this.state.investorModal}
          toggle={() => this.toggleModal("investorModal")}
        >
          <ModalHeader toggle={() => this.toggleModal("investorModal")}>
            Investor Modal
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.submitInvestor}>
              <FormGroup>
                <Label>Investment type</Label>
                <Input
                  type="select"
                  name="type"
                  onChange={event => {
                    this.setState({
                      investmentType: event.target.value
                    });
                  }}
                >
                  <option value="stock">Stocks</option>
                  <option value="Bonds">Bonds</option>
                  <option value="cashEquivalent">Cash Equivalent</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Investment Range</Label>
                <Input
                  type="select"
                  name="range"
                  onChange={event =>
                    this.setState({
                      investmentRange: event.target.value
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
              <Button color="primary" round>
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  };

  render() {
    return (
      <div className="content">
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
                      <strong>Zomato india Pvt. Ltd.</strong>
                      <br />
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nemo praesentium molestiae temporibus tenetur hic nobis
                      voluptate necessitatibus, in quos dolores animi quidem
                      quas vitae aspernatur aliquid accusantium eveniet
                      consequatur perspiciatis?
                      <br />
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col md={2} xs={2}>
                    <strong>Name</strong>
                  </Col>
                  <Col md={8} xs={8}>
                    Name
                  </Col>
                </Row>
                <Row>
                  <Col md={2} xs={2}>
                    <strong>Founded Date</strong>
                  </Col>
                  <Col md={8} xs={8}>
                    Name
                  </Col>
                </Row>
                <Row>
                  <Col md={2} xs={2}>
                    <strong>Name</strong>
                  </Col>
                  <Col md={8} xs={8}>
                    Name
                  </Col>
                </Row>
                <Row>
                  <Col md={2} xs={2}>
                    <strong>Name</strong>
                  </Col>
                  <Col md={8} xs={8}>
                    Name
                  </Col>
                </Row>
                <Row>
                  <Col md={2} xs={2}>
                    <strong>Name</strong>
                  </Col>
                  <Col md={8} xs={8}>
                    Name
                  </Col>
                </Row>
                <Row>
                  <Col md={2} xs={2}>
                    <strong>Name</strong>
                  </Col>
                  <Col md={8} xs={8}>
                    Name
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <div className="text-center">
          <Button
            color="primary"
            round
            onClick={() => {
              this.toggleModal("investorModal");
            }}
          >
            Request Investment
          </Button>
          {this.renderModal()}
        </div>
      </div>
    );
  }
}

export default InvestorPage;
