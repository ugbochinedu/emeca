import RegisterSendIcon from "@/assets/icons/RegisterSendIcon";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { MdOutlineArrowBack, MdOutlineVpnKey } from "react-icons/md";
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

export default function CreateNewPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState({
    new_password: "",
    confirm_password: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword({ ...password, [e.target.id]: e.target.value });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
        Set new password
      </h2>
      <p
        className="text-meca-gray-600 text-center px-8"
        id="forgotPasswordText"
      >
        Secure your account with a new password
      </p>
      <FormControl className="flex flex-col gap-8 w-full" id="form">
        <FormControl className="w-full" variant="filled">
          <InputLabel htmlFor="password">New password</InputLabel>
          <FilledInput
            id="newPassword"
            type={showNewPassword ? "text" : "password"}
            disableUnderline
            onChange={handleOnChange}
            className="bg-meca-gray-100 w-full h-full"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showNewPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className="w-full" variant="filled">
          <InputLabel htmlFor="password">Confirm new password</InputLabel>
          <FilledInput
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            disableUnderline
            onChange={handleOnChange}
            className="bg-meca-gray-100 w-full h-full"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button
          id="createPasswordBtn"
          variant="contained"
          disabled={!isLoading}
          endIcon={<RegisterSendIcon />}
          className="bg-primary-meca-500 text-meca-white h-12 text-lg font-semibold rounded-[36px] disabled:bg-meca-gray-400 disabled:text-meca-white hover:bg-primary-meca-500"
        >
          Set password
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
