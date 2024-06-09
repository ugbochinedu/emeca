import RegisterSendIcon from "@/assets/icons/RegisterSendIcon";
import { FormControl, Button } from "@mui/material";
import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from "react";
import { MdOutlineArrowBack, MdOutlineVpnKey } from "react-icons/md";
import TextField from "@mui/material/TextField";

export default function EnterEmail() {
  const [state, setState] = useState({
    email: "",
    validEmail: true,
    isDisabled: true,
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    let isValid = true;

    if (id === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
    }

    if (isValid) {
      setState({
        ...state,
        isDisabled: false,
        [id]: value,
        [`valid${id.charAt(0).toUpperCase() + id.slice(1)}`]: isValid,
      });
    } else {
      setState({
        ...state,
        isDisabled: true,
        [id]: value,
        [`valid${id.charAt(0).toUpperCase() + id.slice(1)}`]: isValid,
      });
    }
  };

  return (
    <>
      <div className="border border-borderColor p-4 rounded-xl" id="keyIconDiv">
        <MdOutlineVpnKey
          size={24}
          className="text-meca-gray-500"
          id="keyIcon"
        />
      </div>
      <h2
        className="text-meca-black font-bold text-center text-3xl"
        id="forgotPasswordHeader"
      >
        Forgot password?
      </h2>
      <p
        className="text-meca-gray-600 text-center px-8"
        id="forgotPasswordText"
      >
        No worries, we’ll send you reset instructions.
      </p>
      <FormControl className="flex flex-col gap-8 w-full" id="form">
        <TextField
          id="email"
          label="Email"
          variant="filled"
          error={!state.validEmail}
          InputProps={{ disableUnderline: true }}
          onChange={handleOnChange}
          className="bg-meca-gray-100 w-full h-full"
        />
        <Button
          id="resetPasswordBtn"
          variant="contained"
          disabled={state.isDisabled}
          endIcon={<RegisterSendIcon />}
          className="bg-primary-meca-500 text-meca-white text-lg btn font-semibold rounded-[36px] disabled:bg-meca-gray-400 disabled:text-meca-white h-12 hover:bg-primary-meca-500"
        >
          Reset password
        </Button>
      </FormControl>
      <Link
        href="/login"
        id="loginLink"
        className="text-meca-gray-800 flex items-center text-sm gap-4"
      >
        <MdOutlineArrowBack
          size={24}
          className="text-meca-gray-500"
          id="arrowBackIcon"
        />
        Back to log in
      </Link>
    </>
  );
}
