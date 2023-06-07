import Image from "next/image";
import React, { FC } from "react";
import { Card } from "react-bootstrap";

import { Kanye as KanyeImage } from "@/assets";

import { PortfolioCardProps } from ".";

const Kanye: FC<PortfolioCardProps> = ({ onClick }) => {
  return (
    <Card className="!border-dark-taupe">
      <Image
        className="p-[48px] sm:p-3 border-dark-taupe border-b-[1px]"
        src={KanyeImage}
        alt="Kanye Web Project"
      />
      <div className="flex flex-col items-center py-[24px] sm:py-2 px-[48px] sm:px-3">
        <Card.Title className="!text-dark-taupe !font-bold mb-2 sm:!text-base">
          Kanye's Quote Generator
        </Card.Title>
        <div
          className="bg-dark-taupe py-1 px-4 items-center mb-4 rounded-full hover:cursor-pointer"
          onClick={onClick}>
          <p className="font-bold mb-0 text-white sm:!text-base">Open Website</p>
        </div>
        <Card.Text className="self-start text-taupe text-justify mb-4 sm:!text-sm">
          This website utilizes data from https://api.kanye.rest/ to generate random quotes from
          Kanye. Users can save their favorite quotes in their browser, and a table displaying the
          saved quotes will persist even if the page is refreshed. Additionally, users have the
          ability to edit or delete the quotes they have saved.
        </Card.Text>
        <p className="self-start text-dark-taupe font-bold mb-0 sm:!text-sm">
          Tech Stack: HTML, CSS and Bootstrap
        </p>
      </div>
    </Card>
  );
};

export default Kanye;
