import axios from "axios";

export const getTestResultData = (data: any, authToken: string) => {
  return (
    axios.get("http://localhost/8080/test-result/get"),
    {
      Headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
};

export const LoginRequest = (data: any) => {
  return axios.get("http://localhost/8080/user/login", data);
};
