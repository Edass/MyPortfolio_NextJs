import ContactMe from "@/components/contact-me/contact-me";
import BackGroundList from "@/components/experience-education/backGroundList";
import Home from "@/components/home/home";
import SkillsList from "@/components/skills/skillsList";
import WantToKnowMore from "@/components/wantToKnowMore/wantToKnowMore";
import WhoAmI from "@/components/whoAmI/who-am-ı";
import SecondPage from "@/components/whoAmI/who-am-ı";
import React from "react";

const HomePage = () => {
  return (
    <div style={{ height: "100%" }}>
      <Home />
      <WhoAmI/>
      <SkillsList/>
      <BackGroundList/>
      <ContactMe/>
      <WantToKnowMore/>

      
    </div>
  );
};

export default HomePage;
