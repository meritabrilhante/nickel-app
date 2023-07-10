import React, { useEffect } from "react";
import MainLayout from "@/app/presentation/components/layout/main-layout/MainLayout.component";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/auth/login");
  };

  /*useEffect(() => {
    handleRedirect();
  }, []);*/

  return (
    <MainLayout
      width={"100%"}
      pageTitle={"Home"}
      mainButtonLabel={"+"}
      mainButton={true}
    ></MainLayout>
  );
};

export default Home;
