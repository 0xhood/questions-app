"use client";

import ForgotPasswordForm from "@/components/forgot-password-box/forgot-password-box";
import LoginForm from "@/components/login-box/login-box";
import ResetPasswordForm from "@/components/reset-password-box/reset-password";
import SignUpForm from "@/components/signup-box/signup-box";
import { useRouter } from "next/navigation";
import { useState } from "react";

type ComponentType = "login" | "register" | "forgot";

export default function AuthPage() {
  const [component, setComponent] = useState<ComponentType>("login");
  const router = useRouter()

  const render = () => {
    if (component === "login") return <LoginForm goNext={router.push.bind(null, 'questions')} register={setComponent.bind(null, 'register')} reset={setComponent.bind(null, 'forgot')}/>;
    if (component === "register") return <SignUpForm goNext={router.push.bind(null, 'questions')} goBack={setComponent.bind(null, 'login')}/>;
    if (component === "forgot") return <ForgotPasswordForm goBack={setComponent.bind(null, 'login')}/>;
  };

  return <div className="bg-[#27374D]">{render()}</div>;
}
