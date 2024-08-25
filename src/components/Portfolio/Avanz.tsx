import Image from "next/image";
import React, { FC } from "react";
import { Card } from "react-bootstrap";

import { Avanz as AvanzImage } from "@/assets";

import { PortfolioCardProps } from ".";

const Avanz: FC<PortfolioCardProps> = ({ onClick }) => {
  return (
    <Card className="!border-dark-taupe">
      <Image
        className="p-[48px] sm:p-3 border-dark-taupe border-b-[1px]"
        src={AvanzImage}
        alt="Avanz Equipment Web Project"
      />
      <div className="flex flex-col items-center py-[24px] sm:py-2 px-[48px] sm:px-3">
        <Card.Title className="!text-dark-taupe !font-bold mb-2 sm:!text-base">
          Avanz Equipment
        </Card.Title>
        <div
          className="bg-dark-taupe py-1 px-4 items-center mb-4 rounded-full hover:cursor-pointer"
          onClick={onClick}>
          <p className="font-bold mb-0 text-white sm:!text-base">Open Website</p>
        </div>
        <Card.Text className="self-start text-taupe text-justify mb-4 sm:!text-sm">
          This website serves as a comprehensive resource to acquaint visitors with Avanz. It
          encompasses a detailed depiction of Avanz&apos;s profile, elucidating their core services, and
          facilitating seamless communication through provided contact information.
        </Card.Text>
        <p className="self-start text-dark-taupe font-bold mb-0 sm:!text-sm">
          Tech Stack: React.JS, Typescript, CSS and React Bootstrap
        </p>
      </div>
    </Card>
  );
};

export default Avanz;
