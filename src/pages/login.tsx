/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import RegisterSendIcon from "@/assets/icons/RegisterSendIcon";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {
  Button,
  FilledInput,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

export default function Login() {
  const [state, setState] = useState({
    showPassword: false,
    isDisabled: true,
    email: "",
    password: "",
    validEmail: true,
    validPassword: true,
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    let isValid = true;

    if (id === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
    } else if (id === "password") {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      isValid = passwordRegex.test(value);
    }

    if (state.validEmail && state.validPassword) {
      setState({
        ...state,
        [id]: value,
        [`valid${id.charAt(0).toUpperCase() + id.slice(1)}`]: isValid,
        isDisabled: false,
      });
    } else {
      setState({
        ...state,
        [id]: value,
        [`valid${id.charAt(0).toUpperCase() + id.slice(1)}`]: isValid,
        isDisabled: true,
      });
    }

    
  };

  const handleClickShowPassword = () =>
    setState({ ...state, showPassword: !state.showPassword });

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  console.log(state, "state");

  return (
    <div>
      <div className="absolute top-16 lg:left-16 left-8" id="eMecaLogin">
        <span className="font-bold lg:text-3xl text-2xl text-primary">
          e-meca
        </span>
      </div>
      <div
        className="flex flex-col lg:justify-center items-center mx-auto gap-8 h-screen w-fit px-6 lg:mt-0 mt-40"
        id="container"
      >
        <h2
          className="text-meca-black font-bold text-center text-3xl"
          id="forgotPasswordHeader"
        >
          Login to your account
        </h2>
        <p
          className="text-meca-gray-600 text-center px-8"
          id="forgotPasswordText"
        >
          Welcome back! Please input your correct details
        </p>
        <FormControl className="flex flex-col gap-8 w-full" id="form">
          <TextField
            id="email"
            error={!state.validEmail}
            label="Email"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            onChange={handleOnChange}
            className="bg-meca-gray-100 w-full"
          />

          <FormControl className="w-full" variant="filled">
            <InputLabel htmlFor="password">Password</InputLabel>
            <FilledInput
              id="password"
              type={state.showPassword ? "text" : "password"}
              disableUnderline
              onChange={handleOnChange}
              error={!state.validPassword}
              className="bg-meca-gray-100 w-full h-full"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            id="loginBtn"
            className="bg-primary-meca-500 text-meca-white text-lg font-semibold rounded-[36px] disabled:bg-meca-gray-400 disabled:text-meca-white h-12 hover:bg-primary-meca-500"
            variant="contained"
            endIcon={<RegisterSendIcon />}
            disabled={state.isDisabled}
          >
            Login
          </Button>
        </FormControl>

        <span className="flex items-center gap-1 text-meca-gray-600 text-sm">
          Don’t have an account?
          <Link
            href="/signup"
            id="resendEmailLink"
            className="text-primary-500 font-bold"
          >
            Register
          </Link>
        </span>
      </div>
    </div>
  );
}
