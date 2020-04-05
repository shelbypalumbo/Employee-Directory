import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomEmployeeList: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
