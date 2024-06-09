import CheckIcon from "@/assets/icons/checkIcon";
import RegisterSendIcon from "@/assets/icons/RegisterSendIcon";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function ResetConfirmation() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <CheckIcon />
      <h2
        className="text-meca-black font-bold text-center text-xl pt-8"
        id="resetConfirmationHeader"
      >
        Your password has been successfully reset
      </h2>
      <p
        className="text-meca-gray-600 text-center px-8 py-4"
        id="resetConfirmationText"
      >
        Log in to your account with your new password
      </p>
      <Button
        id="resetPasswordBtn"
        variant="contained"
        className="bg-primary-meca-500 text-meca-white text-lg my-8 font-semibold rounded-[36px] h-12 w-full hover:bg-primary-meca-500"
        onClick={() => router.push("/login")}
        endIcon={<RegisterSendIcon />}
      >
        Login
      </Button>
    </div>
  );
}
