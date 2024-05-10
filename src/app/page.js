import Home from "@/components/home/home";
import WhoAmI from "@/components/whoAmI/who-am-ı";
import SecondPage from "@/components/whoAmI/who-am-ı";
import React from "react";

const HomePage = () => {
  return (
    <div style={{ height: "100%" }}>
      <Home />
      <WhoAmI/>
    </div>
  );
};

export default HomePage;
