import React from "react";
import Claim from "@public/assets/Cards/claim.svg";
import Docs from "@public/assets/Cards/docs.svg";
import Emergency from "@public/assets/Cards/emergency.svg";
import Transparency from "@public/assets/Cards/transparency.svg";
import Simple from "@public/assets/Cards/simple.svg";
import Compotetive from "@public/assets/Cards/competetive.svg";
import ClaimCard from "../Reauseable/Cards";

const Cards = () => {
  return (
    <>
      <h1 className="text-center text-blue-500 font-sans font-extrabold text-3xl mt-4">
      <span className="text-neutral-500">Why</span> OneClickDigital?
      </h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 p-12">
        <ClaimCard
          imageSrc={Claim}
          title="Claims Assistance"
          description="Each OneClickDigital subscription includes comprehensive claims support at every stage, guaranteeing prompt assistance whenever necessary."
        />

        <ClaimCard
          imageSrc={Docs}
          title="Minimal Documentation"
          description="focuses on your ease and convenience, with minimal documents"
        />

        <ClaimCard
          imageSrc={Emergency}
          title="24/7 Emergency Help"
          description="Through our website and helpline team, we are always there to answer your questions and offer help"
        />
      </div>

      {/* 2  */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8  p-12">
        <ClaimCard
          imageSrc={Transparency}
          title="Transparent Work"
          description="We give clear, succinct and complete data to our clients"
        />

        <ClaimCard
          imageSrc={Simple}
          title="Simple and Easy To Use"
          description="Our quick and simple process is designed to ensure that you get your policy with the least amount of hassle"
        />

        <ClaimCard
          imageSrc={Compotetive}
          title="Reasonable Rates"
          description="The best market rates guarantee that our clients make out really well"
        />
      </div>
    </>
  );
};

export default Cards;
