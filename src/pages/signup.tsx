import * as React from "react";
import SignUpComponentLeft from "@/components/signup/SignUpCompLeft";
import SignUpComponentRight from "@/components/signup/SignUpCompRight";

const SignUp = () => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 840;
        setIsMobile(ismobile);
      }
    );
  }, [isMobile]);

  return (
    <>
      <div id="signUpPage" className="grid h-full sm:grid-cols-1 md:grid-cols-2">
        <SignUpComponentLeft />
        {!isMobile && <SignUpComponentRight />}
      </div>
    </>
  );
};
export default SignUp;
