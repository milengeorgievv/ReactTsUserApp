import * as React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import { AuthContext } from "./AuthContext";

export interface DataType {
  name: string;
  password: string;
}

export function LoginScreen() {
  const { register, handleSubmit } = useForm();
  const { dispatch } = useContext(AuthContext);
  const onSubmit = (data: any) => {
    console.log(data);
    setTimeout(() => {
      dispatch({ type: "loggedIn", token: "d53t56fedtu67uyf6dt5t" });
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Log in!</h2>
      <TextField
        name="name"
        label="Name"
        variant="outlined"
        inputRef={register}
      />
      <TextField
        name="password"
        label="Password"
        variant="outlined"
        inputRef={register}
      />

      <div>
        <Button type="submit" variant="contained">
          LogIn
        </Button>
      </div>
    </form>
  );
}
