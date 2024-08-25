import Image from "next/image";
import React, { FC } from "react";
import { Card } from "react-bootstrap";

import { IAMI as IAMIImage } from "@/assets";

import { PortfolioCardProps } from ".";

const IAMI: FC<PortfolioCardProps> = () => {
  return (
    <Card className="!border-dark-taupe">
      <div className="p-[48px] sm:p-3 border-dark-taupe border-b-[1px] flex justify-center">
        <Image
          src={IAMIImage}
          height={500}
          alt="Isuzu Astra Motor Indonesia(IAMI) Dealer App Project"
        />
      </div>
      <div className="flex flex-col items-center py-[24px] sm:py-2 px-[48px] sm:px-3">
        <Card.Title className="!text-dark-taupe !font-bold mb-2 sm:!text-base">
          Isuzu Astra Motor Indonesia(IAMI) Dealer App
        </Card.Title>
        <Card.Text className="self-start text-taupe text-justify mb-4 sm:!text-sm">
          The IAMI dealer team utilizes this mobile app to effectively handle and organize
          prospective customer information, enabling them to convert these prospects into actual
          customers. Once converted, the app further serves as a tool for managing and overseeing
          customer orders.
        </Card.Text>
        <p className="self-start text-dark-taupe font-bold mb-0 sm:!text-sm">
          Tech Stack: React Native, Typescript, TailwindCSS, TanStack Query, C# and .Net Razor Page
        </p>
      </div>
    </Card>
  );
};

export default IAMI;
