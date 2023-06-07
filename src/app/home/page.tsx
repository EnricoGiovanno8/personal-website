"use client";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

import { Profile } from "@/assets";
import Button from "@/components/Button";

const Home: FC = () => {
  const router = useRouter();

  const onClickMyWork = () => {
    return router.push("/portfolio");
  };

  const onClickDownload = () => {
    return window.open(
      "https://drive.google.com/u/0/uc?id=1vDwEJ4ck1gDEmVDwiwJyXGZ6d2CY4ylx&export=download",
    );
  };

  return (
    <div className="bg-light-taupe h-[100vh] w-[100vw] mt-[-80px] md:mt-0 flex md:flex-col-reverse justify-between md:justify-end items-center px-[15vw] lg:px-3 md:pb-5 md:h-[120vh] sm:h-[80vh]">
      <div className="w-1/2 md:w-full">
        <p className="text-md sm:text-sm font-bold text-taupe mb-0">HELLO, MY NAME IS</p>
        <p className="text-4xl sm:text-2xl font-extrabold text-dark-taupe mb-3">ENRICO GIOVANNO</p>
        <p className="text-md sm:text-sm font-bold text-taupe !mb-5 text-justify">
          A dedicated Software Engineer driven by passion, close to 2 years of experience. Striving
          to create efficient and user-friendly software that makes a meaningful impact.
        </p>
        <div className="flex w-full gap-3">
          <Button
            className="!p-3 flex-1 !bg-dark-taupe !border-dark-taupe"
            labelclassname="text-md font-extrabold text-white mb-0"
            label="My Work"
            onClick={onClickMyWork}
          />
          <Button
            className="!flex flex-1 !bg-white items-center justify-center border-white !p-3"
            onClick={onClickDownload}>
            <p className="text-md font-extrabold text-dark-taupe mr-2 mb-0">Download CV</p>
            <FontAwesomeIcon width={20} icon={faDownload} color="#8C7760" />
          </Button>
        </div>
      </div>
      <div className="mr-[-5vw] w-1/2 sm:w-3/4 md:mt-[-5vh] md:mb-[5vh]">
        <Image src={Profile} alt="Website Owner's Icon" />
      </div>
    </div>
  );
};

export default Home;
