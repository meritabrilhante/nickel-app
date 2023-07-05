import { useRouter } from "next/router";
import { BlitzPage, Routes } from "@blitzjs/next";
import SignupForm from "@/auth/components/signup/SignupForm";

const SignupPage: BlitzPage = () => {
  const router = useRouter();

  return <SignupForm onSuccess={() => router.push(Routes.Home())} />;
};

export default SignupPage;
