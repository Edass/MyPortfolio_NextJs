import ContactMe from "@/components/contact-me/contact-me";
import MainExperience from "@/components/experience/main-experience";
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
      <MainExperience/>
      <ContactMe/>
      <WantToKnowMore/>

      
    </div>
  );
};

export default HomePage;
