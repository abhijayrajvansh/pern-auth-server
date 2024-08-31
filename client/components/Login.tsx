"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";

const page = () => {
  const handleOauthClick = (authProvider: string) => {
    console.log("clicked on:", authProvider);
  };

  return (
    <div className="space-y-5 bg-white p-10 rounded-lg  drop-shadow-lg mb-3">
      <h1 className="text-6xl font-semibold drop-shadow-lg text-center">
        Login
      </h1>

      {/* credentials options */}
      <LoginForm />


      {/* divider */}
      <div className="flex items-center gap-3">
        <Separator className="w-[190px]" />
        <p className="text-black/70">or</p>
        <Separator className="w-[190px]" />
      </div>


      {/* oAuth options */}
      <div className="flex items-center gap-3">
      {/* google sign in */}
        <Button
          onClick={() => handleOauthClick("google")}
          size={"lg"}
          variant={"outline"}
          className="w-full drop-shadow-md"
        >
          <FcGoogle size={25} />
        </Button>


      {/* github sign in */}
        <Button
          onClick={() => handleOauthClick("github")}
          size={"lg"}
          variant={"outline"}
          className="w-full drop-shadow-md"
        >
          <FaGithub size={25} />
        </Button>
      </div>

      {/* register route */}
      <p className="text-center">
        Don't have an account,{" "}
        <Link
          className="text-blue-500 hover:underline underline-offset-4 cursor-pointer"
          href={"/register"}
        >
          Register.
        </Link>
      </p>
    </div>
  );
};

export default page;
