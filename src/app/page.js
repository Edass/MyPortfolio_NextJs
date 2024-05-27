import ContactMe from "@/components/contact-me/contact-me";
import Experience from "@/components/experience/experience";
import Home from "@/components/home/home";
import SkillsList from "@/components/skills/skillsList";
import WantToKnowMore from "@/components/wantToKnowMore/wantToKnowMore";
import WhoAmI from "@/components/whoAmI/who-am-ı";
import React from "react";

const HomePage = () => {
  return (
    <div style={{ height: "100%" }}>
      <Home />
      <WhoAmI/>
      <SkillsList/>
      <ContactMe/>
      <WantToKnowMore/>

      
    </div>
  );
};

export default HomePage;
