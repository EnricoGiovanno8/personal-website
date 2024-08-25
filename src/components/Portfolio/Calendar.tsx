import Image from "next/image";
import React, { FC } from "react";
import { Card } from "react-bootstrap";

import { Calendar as CalendarImage } from "../../assets";
import { PortfolioCardProps } from ".";

const Calendar: FC<PortfolioCardProps> = ({ onClick }) => {
  return (
    <Card className="!border-dark-taupe">
      <Image
        className="p-[48px] sm:p-3 border-dark-taupe border-b-[1px]"
        src={CalendarImage}
        alt="Calendar Web Project"
      />
      <div className="flex flex-col items-center py-[24px] sm:py-2 px-[48px] sm:px-3">
        <Card.Title className="!text-dark-taupe !font-bold mb-2 sm:!text-base">Calendar</Card.Title>
        <div
          className="bg-dark-taupe py-1 px-4 items-center mb-4 rounded-full hover:cursor-pointer"
          onClick={onClick}>
          <p className="font-bold mb-0 text-white sm:!text-base">Open Website</p>
        </div>
        <Card.Text className="self-start text-taupe text-justify mb-4 sm:!text-sm">
          This website generates a calendar displaying the current month, allowing users to input a
          maximum of three daily activities. Each activity entry can include the activity's name,
          timing, and the people invited. All saved activities remain accessible even if the user
          refreshes the page.
        </Card.Text>
        <p className="self-start text-dark-taupe font-bold mb-0 sm:!text-sm">
          Tech Stack: React.JS, Typescript, and CSS
        </p>
      </div>
    </Card>
  );
};

export default Calendar;
