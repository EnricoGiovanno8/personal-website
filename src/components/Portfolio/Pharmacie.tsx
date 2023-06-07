import Image from "next/image";
import React, { FC } from "react";
import { Card } from "react-bootstrap";

import { Pharmacy } from "@/assets";

import { PortfolioCardProps } from ".";

const Pharmacie: FC<PortfolioCardProps> = () => {
  return (
    <Card className="!border-dark-taupe">
      <Image
        className="p-[48px] sm:p-3 border-dark-taupe border-b-[1px]"
        src={Pharmacy}
        alt="Pharmacie Web Project"
      />
      <div className="flex flex-col items-center py-[24px] sm:py-2 px-[48px] sm:px-3">
        <Card.Title className="!text-dark-taupe !font-bold mb-2 sm:!text-base">
          Pharmacie
        </Card.Title>
        <Card.Text className="self-start text-taupe text-justify mb-4 sm:!text-sm">
          This project allows users to purchase both nonprescription and prescription medicine
          through our website. Users can browse nonprescription medicine from the landing page,
          filter and sort their search results. Login is required for transactions; new users can
          register on the registration page. Once logged in, users can proceed with transactions and
          upload prescriptions through the user dashboard. Admins can log in and access the admin
          dashboard to view and manage user transactions, serve orders, and access sales reports.
          The admin dashboard also provides options to browse products, view medicine usage, and
          manage inventory.
        </Card.Text>
        <p className="self-start text-dark-taupe font-bold mb-0 sm:!text-sm">
          Tech Stack: React.JS, Redux, CSS, React Bootstrap, Express.JS, and MySQL
        </p>
      </div>
    </Card>
  );
};

export default Pharmacie;
