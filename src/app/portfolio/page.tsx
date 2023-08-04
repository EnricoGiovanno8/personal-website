"use client";

import { FC } from "react";

import { Avanz, Calendar, IAMI, Kanye, Pharmacie, YummySA } from "@/components/Portfolio";
import FAWeb from "@/components/Portfolio/FAWeb";

type WebsiteUrlType = {
  [key: string]: string;
};

const Portfolio: FC = () => {
  const openWebsite = (webName: string) => {
    const websitesUrl: WebsiteUrlType = {
      avanz: "https://enricogiovanno8.github.io/avanzequipment/",
      kanye: "https://enricogiovanno8.github.io/kanyequotegenerator/",
      faWeb: "https://farbodjahan.com/",
      calendar: "https://enricogiovanno8.github.io/calendar/",
    };

    return window.open(websitesUrl[webName]);
  };

  return (
    <div className="flex flex-col bg-light-taupe px-[15vw] !pt-[1vh] !pb-[5vh] lg:px-3 md:pb-3 gap-[3rem] sm:gap-[1.25rem]">
      <Avanz onClick={() => openWebsite("avanz")} />
      <FAWeb onClick={() => openWebsite("faWeb")} />
      <Calendar onClick={() => openWebsite("calendar")} />
      <IAMI />
      <YummySA />
      <Kanye onClick={() => openWebsite("kanye")} />
      <Pharmacie />
    </div>
  );
};

export default Portfolio;
