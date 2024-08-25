import Image from "next/image";
import React, { FC } from "react";
import { Card } from "react-bootstrap";

import { FACooking, FASoundCloud, FATwitch } from "@/assets";

import { PortfolioCardProps } from ".";

const FAWeb: FC<PortfolioCardProps> = ({ onClick }) => {
  return (
    <Card className="!border-dark-taupe">
      <div className="p-[48px] sm:p-3 border-dark-taupe border-b-[1px] flex justify-center gap-5 flex-wrap">
        <Image src={FASoundCloud} width={400} alt="Farbodjahan SoundCloud Web Project" />
        <Image src={FATwitch} width={400} alt="Farbodjahan Twitch Web Project" />
        <Image src={FACooking} width={400} alt="Farbodjahan Cooking Web Project" />
      </div>
      <div className="flex flex-col items-center py-[24px] sm:py-2 px-[48px] sm:px-3">
        <Card.Title className="!text-dark-taupe !font-bold mb-2 sm:!text-base">
          Farbodjahan Personal Website
        </Card.Title>
        <div
          className="bg-dark-taupe py-1 px-4 items-center mb-4 rounded-full hover:cursor-pointer"
          onClick={onClick}>
          <p className="font-bold mb-0 text-white sm:!text-base">Open Website</p>
        </div>
        <Card.Text className="self-start text-taupe text-justify mb-3 sm:!text-sm">
          This is a side project where the client has requested the addition of several features to
          the interests section on his existing personal website:
        </Card.Text>
        <Card.Text className="self-start text-taupe text-justify mb-3 sm:!text-sm">
          1. Within the DJ Section, the client wants to display 3 embedded players featuring his
          latest tracks from SoundCloud.
        </Card.Text>
        <Card.Text className="self-start text-taupe text-justify mb-3 sm:!text-sm">
          2. Within the DJ Section, the client has a countdown that displays the remaining time
          until his next live stream on Twitch. To enhance this feature, he wants to integrate his
          website with his Twitch account, enabling an embedded player to automatically appear on
          the website when the countdown ends or when he starts streaming.
        </Card.Text>
        <Card.Text className="self-start text-taupe text-justify mb-4 sm:!text-sm">
          3. Moving to the Cooking Section, the client wishes to include a search feature in the
          recipes section. Additionally, he would like the code to be cleaned up so that each recipe
          has its own separate HTML file, as opposed to having all the recipes in one HTML file.
        </Card.Text>
        <p className="self-start text-dark-taupe font-bold mb-0 sm:!text-sm">
          Tech Stack: HTML, CSS and JQuery
        </p>
      </div>
    </Card>
  );
};

export default FAWeb;
