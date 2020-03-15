import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Form,
  Button,
  Input
} from "reactstrap";
import { Line, Pie, Bar } from "react-chartjs-2";
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";

import {
  credentials,
  signUp,
  getProfile,
  updateProfile,
  getAllProfiles
} from "../../helpers/helpers";

const industryArray = ["AI", "Analytics", "Education"];
const serviceArray = ["Consulting", "Engineer", "Research"];
const sectorarray = {
  AI: ["ML", "NLP", "Others"],
  Analytics: ["Business Intelligence", "Big Data", "data science"],
  Education: ["E-learning", "skill Development", "coaching"]
};

const F1 = ["state", "employees", "industry", "sector"];

let allOption = array => {
  const option = array.map(element => <option>{element}</option>);
  return option;
};

class Insights extends React.Component {
  state = {
    showChart: false,
    profiles: [],
    f1: "",
    f2: "",
    chartData: {
      labels: [],
      datasets: [
        {
          label: "",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: []
        }
      ]
    }
  };

  async componentDidMount() {
    let profiles = await getAllProfiles("startup");
    this.setState({ profiles: profiles.data });
  }

  filterData = () => {
    let color = ["#6bd098", "#f17e5d", "#fcc468"];
    let labels = [];
    let data = [];
    this.state.profiles.forEach(x => {
      labels.push(x[this.state.f1]);
      data.push(x[this.state.f2][0].value);
    });
    console.log(labels, data);
    let i = 0;
    this.setState({
      showChart: true,
      chartData: {
        ...this.state.chartData,
        labels,
        datasets: [
          {
            label: "",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            data
          }
        ]
      },
      pieChartData: {
        ...this.state.chartData,
        labels,
        datasets: [
          {
            label: "",
            backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
            borderWidth: 0,
            data
          }
        ]
      },
      chartData: {
        ...this.state.chartData,
        labels,
        datasets: [
          {
            label: "Employees",
            backgroundColor: "rgba(252, 196, 104, 0.8)",
            borderColor: "rgba(252, 196, 104,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data
          }
        ]
      }
    });
  };

  render() {
    return (
      <div className="content">
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <CardTitle />
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md={5}>
                    <Input
                      type="select"
                      name="industry"
                      required
                      onChange={event =>
                        this.setState({
                          f1: event.target.value
                        })
                      }
                    >
                      {allOption(F1)}
                    </Input>
                  </Col>
                  <Col md={5}>
                    <Input
                      type="select"
                      name="select"
                      required
                      onChange={event =>
                        this.setState({
                          f2: event.target.value
                        })
                      }
                    >
                      {allOption(F1)}
                    </Input>
                  </Col>
                  <Col md={5}>
                    <Button
                      color="primary"
                      round
                      onClick={e => {
                        this.filterData();
                      }}
                    >
                      Go
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col md={5}>
                    {this.state.showChart && (
                      <Pie
                        data={this.state.pieChartData}
                        width={100}
                        height={500}
                        options={{
                          maintainAspectRatio: false,
                          tooltips: {
                            callbacks: {
                              label: function(tooltipItem, data) {
                                var dataset =
                                  data.datasets[tooltipItem.datasetIndex];
                                var meta =
                                  dataset._meta[Object.keys(dataset._meta)[0]];
                                var total = meta.total;
                                var currentValue =
                                  dataset.data[tooltipItem.index];
                                var percentage = parseFloat(
                                  ((currentValue / total) * 100).toFixed(1)
                                );
                                return currentValue + " (" + percentage + "%)";
                              },
                              title: function(tooltipItem, data) {
                                return data.labels[tooltipItem[0].index];
                              }
                            }
                          }
                        }}
                      />
                    )}
                  </Col>
                  <Col md={2} />
                  <Col md={5}>
                    {this.state.showChart && (
                      <Bar
                        data={this.state.chartData}
                        width={100}
                        height={500}
                        options={{
                          maintainAspectRatio: false
                        }}
                      />
                    )}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Insights;
