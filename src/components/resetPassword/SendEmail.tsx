import Link from "next/link";
import { MdOutlineArrowBack, MdOutlineMail, MdNorthEast } from "react-icons/md";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

export default function SendEmail() {
  const router = useRouter();

  return (
    <>
      <div className="border border-borderColor p-4 rounded-xl" id="keyIconDiv">
        <MdOutlineMail size={24} className="text-meca-gray-500" id="keyIcon" />
      </div>
      <h2
        className="text-meca-black font-bold text-center text-3xl"
        id="checkEmailHeader"
      >
        Check your email
      </h2>
      <p
        className="text-meca-gray-600 text-center px-8 flex flex-col"
        id="checkEmailText"
      >
        We sent a password reset link to
        <span className="font-bold">Camoly@gmail.com</span>
      </p>

      <Button
        id="resetPasswordBtn"
        className="bg-primary-meca-500 text-meca-white text-lg font-semibold rounded-[36px] h-12 w-full hover:bg-primary-meca-500"
        onClick={() => router.push("mailto:Camoly@gmail.com")}
        endIcon={<MdNorthEast size={24} />}
      >
        Open email app
      </Button>
      <span className="flex items-center gap-1 text-meca-gray-600 text-sm">
        Didn’t receive the email?
        <Link
          href="#"
          id="resendEmailLink"
          className="text-primary-500 font-bold"
        >
          Click to resend
        </Link>
      </span>
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
