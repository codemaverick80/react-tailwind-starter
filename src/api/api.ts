import axios from "axios";

export const sendApiRequest = async (url: string, params?: object) => {
  try {
    const header = { "Content-Type": "application/json" };

    const response = await axios.get(url, {
      headers: header,
      params: params,
    });
    ///#### axios will check is response status is in 200 range
    ///#### also it will serialize response to json format
    return response.data;

    // if (response.status === 200) {
    //   return response.data;
    // }
  } catch (err) {
    // if response status is not in 200 range
    console.log("Error calling api");
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
    throw err;
  }
};

export const getUserInfo = async (apiUrl: string) => {
  console.log(apiUrl);
  try {
    const data = await sendApiRequest(apiUrl);

    return data;
  } catch (err) {
    return {};
  }
};
