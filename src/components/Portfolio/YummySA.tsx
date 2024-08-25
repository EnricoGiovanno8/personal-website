import Image from "next/image";
import React, { FC } from "react";
import { Card } from "react-bootstrap";

import { YummySA as YummySAImage } from "@/assets";

import { PortfolioCardProps } from ".";

const YummySA: FC<PortfolioCardProps> = () => {
  return (
    <Card className="!border-dark-taupe">
      <Image
        className="p-[48px] sm:p-3 border-dark-taupe border-b-[1px]"
        src={YummySAImage}
        alt="Yummy Corp Smart Admin Web Project"
      />
      <div className="flex flex-col items-center py-[24px] sm:py-2 px-[48px] sm:px-3">
        <Card.Title className="!text-dark-taupe !font-bold mb-2 sm:!text-base">
          Yummy Corp Smart Admin
        </Card.Title>
        <Card.Text className="self-start text-taupe text-justify mb-4 sm:!text-sm">
          Smart Admin Web App is a comprehensive web application designed for Yummy Corp to
          efficiently handle various administrative tasks, including managing partnerships, outlets,
          sales channels, promotions, and cashiers within the company.
        </Card.Text>
        <p className="self-start text-dark-taupe font-bold mb-0 sm:!text-sm">
          Tech Stack: Next.JS, Typescript, TailwindCSS, and Apollo GraphQL
        </p>
      </div>
    </Card>
  );
};

export default YummySA;
