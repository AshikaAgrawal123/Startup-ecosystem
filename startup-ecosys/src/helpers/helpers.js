const axios = require("axios");
let token = null,
  role = null,
  id = null;

const signUp = async (data, srole) => {
  console.log(data, srole);

  role = srole;
  let url = "http://localhost:8000/";
  switch (role) {
    case "individual":
      url = url + "signup";
      break;
    case "startup":
      // data["startupStage"] = [
      //   { value: data["startupStage"], timestamp: new Date().getTime() }
      // ];
      // data.founded = parseInt(data.founded);
      // data["employees"] = [
      //   { value: data["employees"], timestamp: new Date().getTime() }
      // ];
      // data["services"] = [
      //   { value: data["services"], timestamp: new Date().getTime() }
      // ];
      url = url + "startupregister";
      data.openToInvestment = data.openToInvestment != null ? true : false;
      data.dipprecognised = data.dipprecognised != null ? true : false;
      console.log(data);
      let kdata = data;
      kdata.employees = [
        {
          value: kdata.employees,
          timestamp: new Date().getTime()
        }
      ];
      kdata.startupStage = [
        {
          value: kdata.startupStage,
          timestamp: new Date().getTime()
        }
      ];
      kdata.valuation = [
        {
          value: kdata.valuation,
          timestamp: new Date().getTime()
        }
      ];
      kdata.revenue = [
        {
          value: kdata.revenue,
          timestamp: new Date().getTime()
        }
      ];
      kdata.upvotes = [
        {
          value: 0,
          timestamp: new Date().getTime()
        }
      ];
      console.log(JSON.stringify(kdata));
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
  return new Promise(async (resolve, reject) => {
    try {
      let user = await axios.post(url, data, {
        headers: { "Access-Control-Allow-Origin": "*", "x-auth": token }
      });
      console.log(user);
      token = user.headers["x-auth"];
      id = user.id;
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

const login = async (data, srole) => {
  console.log(data, srole);
  role = srole;
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
  return new Promise(async (resolve, reject) => {
    try {
      let user = await axios.post(url, data, {
        headers: { "Access-Control-Allow-Origin": "*" }
      });
      token = user.headers["x-auth"];
      id = user.data.id;
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

const getProfile = async (rid = id, srole) => {
  let url = "http://localhost:8000/";
  switch (srole) {
    case "individual":
      url = url + `user/${rid}`;
      break;
    case "startup":
      url = url + `startup/${rid}`;
      break;
    case "investor":
      url = url + `investor/${rid}`;
      break;
    case "mentor":
      url = url + `mentor/${rid}`;
      break;
    case "incubator":
      url = url + `incubator/${rid}`;
      break;
    case "gnc":
      url = url + `govtnodalcenter/${rid}`;
      break;

    default:
      break;
  }
  return new Promise(async (resolve, reject) => {
    try {
      let user = await axios.get(url);
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

const updateProfile = async (data, srole, id) => {
  let url = "http://localhost:8000/";
  switch (srole) {
    case "individual":
      url = url + `updateuser/${id}`;
      break;
    case "startup":
      url = url + `updatestartup/${id}`;
      break;
    case "investor":
      url = url + `updateinvestor/${id}`;
      break;
    case "mentor":
      url = url + `updatementor/${id}`;
      break;
    case "incubator":
      url = url + `updateincubator/${id}`;
      break;
    case "gnc":
      url = url + `updategovtnodalcenter/${id}`;
      break;
    default:
      break;
  }
  let user = await axios.patch(url, data, {
    headers: { "Access-Control-Allow-Origin": "*" }
  });
};

const credentials = () => ({ token, role, id });

const getAllProfiles = async srole => {
  let url = "http://localhost:8000/";
  switch (srole) {
    case "individual":
      url = url + `user/${id}`;
      break;
    case "startup":
      url = url + `allstartups`;
      break;
    case "investor":
      url = url + `investor/${id}`;
      break;
    case "mentor":
      url = url + `mentor/${id}`;
      break;
    case "incubator":
      url = url + `incubator/${id}`;
      break;
    case "gnc":
      url = url + `govtnodalcenter/${id}`;
      break;

    default:
      break;
  }
  return new Promise(async (resolve, reject) => {
    try {
      let allProfiles = await axios.get(url);
      console.log(allProfiles);
      resolve(allProfiles);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllStats = async () => {
  let url = "http://localhost:8000/allstats";
  return new Promise(async (resolve, reject) => {
    try {
      let allStats = await axios.get(url);
      resolve(allStats);
    } catch (error) {
      reject(error);
    }
  });
};

const getStartupStats = async () => {
  let url = "http://localhost:8000/";
  let startupStats = await axios.get(url);
  return startupStats;
};

export {
  login,
  signUp,
  getProfile,
  updateProfile,
  getAllProfiles,
  getAllStats,
  getStartupStats,
  credentials
};
