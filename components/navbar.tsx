import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaSquareUpwork, FaUpwork } from "react-icons/fa6";


export const Navbar = () => {

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Shortify</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Upwork" href={siteConfig.links.upwork}>
            <FaSquareUpwork className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Linkedin" href={siteConfig.links.linkedin}>
            <FaLinkedinIn className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <FaGithub className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Upwork" href={siteConfig.links.upwork}>
          <FaSquareUpwork className="text-default-500" />
        </Link>
        <Link isExternal aria-label="Linkedin" href={siteConfig.links.linkedin}>
          <FaLinkedinIn className="text-default-500" />
        </Link>
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <FaGithub className="text-default-500" />
        </Link>
        <ThemeSwitch />
      </NavbarContent>
    </HeroUINavbar>
  );
};
