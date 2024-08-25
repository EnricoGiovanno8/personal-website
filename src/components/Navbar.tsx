"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Container, Nav, Navbar as NavbarBootstrap,NavDropdown } from "react-bootstrap";

import { Icon } from "@/assets";

const Navbar: FC = () => {
  const router = useRouter();

  return (
    <NavbarBootstrap
      className="bg-light-taupe h-20 text-lg fixed w-[100vw] z-[1] !justify-center"
      expand="lg">
      <Container className="px-0 mx-0 !max-w-full">
        <NavbarBootstrap.Brand
          className="rounded-full overflow-hidden py-0 ml-[15vw] lg:ml-3 hover:cursor-pointer"
          onClick={() => router.push("/")}>
          <Image src={Icon} width={50} height={50} alt="Website Owner's Icon" />
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle className="toggle lg:mr-3" aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse
          id="basic-navbar-nav"
          className="justify-end bg-light-taupe lg:px-3 lg:mt-1 mr-[15vw]">
          <Nav className="lg:w-[100vw]">
            <Nav.Link className="!text-taupe !font-semibold mr-10" onClick={() => router.push("/")}>
              Home
            </Nav.Link>
            <Nav.Link
              className="!text-taupe !font-semibold mr-10"
              onClick={() => router.push("/portfolio")}>
              Portfolio
            </Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item
                className="!text-taupe !font-semibold"
                href="mailto:genrico.dev@gmail.com">
                Email
              </NavDropdown.Item>
              <NavDropdown.Item
                className="!text-taupe !font-semibold"
                href="https://www.linkedin.com/in/enrico-giovanno-a4803717a"
                target="_blank">
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item
                className="!text-taupe !font-semibold"
                href="https://github.com/EnricoGiovanno8"
                target="_blank">
                Github
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
};

export default Navbar;
