import loginMainImg from "@/assets/images/login-main-img.webp";
import radixLogo from "@/assets/images/radix-logo.webp";
import LoginForm from "./components/LoginForm";
import { usePageTitle } from "@/hooks/usePageTitle";

const LoginPage = () => {
  usePageTitle("Login");

  return (
    <div className="flex min-h-screen">
      <div className="block basis-[70%]">
        <div className="relative flex h-full w-full items-center justify-center bg-[#000000ad]">
          <div className="absolute inset-0 z-[-1]">
            <img
              src={loginMainImg}
              alt="Login Background"
              className="size-full object-cover object-center"
            />
          </div>

          <div className="flex max-w-[65rem] flex-col items-center gap-[2rem] rounded-[1.4rem] p-[2rem] text-center text-white">
            <h1 className="text-[4rem] leading-[4.2rem] font-extrabold uppercase">
              PROJECT REPORTING AND INFORMATION MANAGEMENT SYSTEM
            </h1>

            <div className="max-w-[20rem]">
              <img
                src={radixLogo}
                alt="Brand Logo"
                className="size-full object-cover object-center"
              />
            </div>
          </div>

          <p className="absolute bottom-[2rem] left-1/2 w-full max-w-[65rem] -translate-x-1/2 text-center text-[1.3rem] font-normal text-white">
            Bringing technological ease to manage humanitarian and development
            work
          </p>
        </div>
      </div>

      <div className="flex basis-[30%] items-center justify-center bg-white p-[3rem]">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
