import axios from "axios";

// Function to get API headers
const getApiHeader = () => {
  return {
    Accept: "application/json",
    AcceptLanguage: "en",
    deviceType: "web",
  };
};

// Function to call a GET API
const callGetAPI = async (apiName, isToastParam, authHeaders = null) => {
  try {
    const response = await axios.get(apiName, {
      headers: authHeaders || getApiHeader(),
    });
    return response;
  } catch (error) {
    return error;
  }
};

// Exporting the functions
export { getApiHeader, callGetAPI };
