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
import { login } from "../../helpers/helpers";

class Requests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content">
        <Row>
          <Col md={3} xs={12}>
            <Card>
              <CardHeader />
              <CardBody className="text-center">
                Requestor : Aman Agrawal <br /> Type : Investment
              </CardBody>
              <CardFooter>
                <Row>
                  <Col xs={6} className="p-0 text-center">
                    <Button color="warning" round>
                      Accept
                    </Button>
                  </Col>
                  <Col xs={6} className="p-0 text-center">
                    <Button color="danger" round>
                      Reject
                    </Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Requests;
