import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import axios from "axios";
import dashboardRoutes from "routes/dashboard.jsx";

var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      activeColor: "warning",
      token: "",
      success: false,
      error: false
    };
    this.signin = this.signin.bind(this);
    this.signup = this.signup.bind(this);
  }

  signin({ email, password, role }) {
    let root = this;
    let url = "http://localhost:8000/";
    switch (role) {
      case "individual":
        url = url + "login";
        break;
      case "startup":
        url = url + "startuplogin";
        break;
      case "investor":
        url = url + "investorlogin";
        break;
      case "mentor":
        url = url + "mentorlogin";
        break;
      case "incubator":
        url = url + "incubatorlogin";
        break;
      case "gnc":
        url = url + "govtnodalcenterlogin";
        break;

      default:
        break;
    }
    axios
      .post(
        url,
        {
          email,
          password
        },
        {
          headers: { "Access-Control-Allow-Origin": "*" }
        }
      )
      .then(function(response) {
        console.log(response);
        root.setState({
          success: true,
          token: response.headers["x-auth"],
          error: false
        });
      })
      .catch(function(error) {
        root.setState({
          error: true,
          success: false
        });
      });
  }

  signup(role, details) {
    let root = this;
    let url = "http://localhost:8000/";
    switch (role) {
      case "individual":
        url = url + "signup";
        break;
      case "startup":
        url = url + "startupregister";
        break;
      case "investor":
        url = url + "investorregister";
        break;
      case "mentor":
        url = url + "mentorregister";
        break;
      case "incubator":
        url = url + "incubatorregister";
        break;
      case "gnc":
        url = url + "govtnodalcenterregister";
        break;

      default:
        break;
    }
    axios
      .post(url, details, {
        headers: { "Access-Control-Allow-Origin": "*" }
      })
      .then(function(response) {
        root.setState({
          success: true,
          token: response.headers["x-auth"],
          error: false
        });
      })
      .catch(function(error) {
        root.setState({
          error: true,
          success: false
        });
      });
  }

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.refs.mainPanel.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  handleActiveClick = color => {
    this.setState({ activeColor: color });
  };
  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };
  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={dashboardRoutes}
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
        />
        <div className="main-panel" ref="mainPanel">
          <Header
            {...this.props}
            signin={this.signin}
            signup={this.signup}
            success={this.state.success}
            error={this.state.error}
          />
          <Switch>
            {dashboardRoutes.map((prop, key) => {
              if (prop.pro) {
                return null;
              }
              if (prop.redirect) {
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
              }
              return (
                <Route
                  path={prop.path}
                  render={props => (
                    <prop.component {...props} token={this.state.token} />
                  )}
                  key={key}
                />
              );
            })}
          </Switch>
          <Footer fluid />
        </div>
      </div>
    );
  }
}

export default Dashboard;
