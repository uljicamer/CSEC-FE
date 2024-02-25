import React, { useCallback } from "react";
import { LoginRequest } from "./Service/service";

const LogIn: React.FC = ({}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [token, setToken] = React.useState("");
  const [error, setError] = React.useState<string>("");

  const SetToken = (data: string) => {
    setToken(data);
  };

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const sendLoginRequest = useCallback(() => {
    LoginRequest({
      email: email,
      password: password,
    })
      .then((response: any) => {
        SetToken(response.data.token);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [token]);

  return (
    <>
      <label>
        Username:
        <input type="text" value={email} onChange={handleEmail} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePassword} />
      </label>
      <button
        type="submit"
        onClick={() => {
          sendLoginRequest();
          console.log(token);
        }}
      >
        LogIn
      </button>
      {error && <p>{error}</p>}
    </>
  );
};

export default LogIn;
