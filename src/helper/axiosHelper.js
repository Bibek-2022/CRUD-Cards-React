import axios from "axios";

const rootUrl = "http://localhost:8000/add";
const regUrl = "http://localhost:8000/reg-login";
const loginUrl = "http://localhost:8000/reg-login/login";

const apiProcessor = async (method, url, data) => {
  try {
    const result = await axios({
      method,
      url,
      data,
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCard = () => {
  return apiProcessor("get", rootUrl);
};

export const postCard = (obj) => {
  console.log(obj);
  return apiProcessor("post", rootUrl, obj);
};

export const deleteCard = (_id) => {
  console.log(_id);
  return apiProcessor("delete", rootUrl + "/" + _id);
};

export const updateCard = (obj) => {
  console.log(obj);
  return apiProcessor("put", rootUrl, obj);
};

// Registration

// Admin login
