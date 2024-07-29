import React from "react";
import { SignInForm } from "../_components/sign-in-form";

const SignInPage = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <SignInForm />
    </div>
  );
};

export default SignInPage;
