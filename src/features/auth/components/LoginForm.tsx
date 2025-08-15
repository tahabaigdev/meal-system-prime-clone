import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  return (
    <div className="flex flex-col gap-[2.4rem]">
      <div>
        <h3 className="text-[2.4rem] leading-[3.8rem] font-medium text-black">
          Welcome to RadixTech!
        </h3>
        <p className="text-[1.5rem] leading-[2.1rem] font-normal text-[#6D6B77]">
          Please sign-in to your account and start the adventure
        </p>
      </div>

      <Button>Log in with Single Sign On</Button>

      <form className="flex flex-col gap-[2.4rem]">
        <div className="flex flex-col gap-[2.4rem]">
          <div className="flex flex-col gap-[.6rem]">
            <Label htmlFor="email">Email</Label>

            <Input type="email" name="email" placeholder="Enter your email" />
          </div>

          <div className="flex flex-col gap-[.6rem]">
            <Label htmlFor="password">Password</Label>

            <Input type="text" name="password" placeholder="Password" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[1rem]">
            <Checkbox
              id="remember-me"
              className="size-[1.6rem] rounded-[3px] border-[2px] border-[#545454] shadow-none"
            />

            <Label htmlFor="remember-me">Remember Me</Label>
          </div>

          <Button asChild variant="link">
            <a href="">Forgot Password?</a>
          </Button>
        </div>

        <Button variant="dark">Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
