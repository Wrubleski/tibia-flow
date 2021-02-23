import axios from "axios";

export default class RequestWrapper {
  constructor() {
    this.baseUrl = "https://tibia-flow-server-production.herokuapp.com/api/";
  }

  async postRequest(data, endpoint) {
    const response = await axios({
      method: "POST",
      url: this.baseUrl + endpoint,
      data: data,
    });

    return response;
  }
}
