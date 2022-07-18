import axios from "axios";

const rootUrl = "http://localhost:8000/add";

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

export const postCard = (obj) => {
  return apiProcessor("post", obj);
};
