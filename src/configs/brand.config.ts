import logoImage from "@/assets/images/brand-logo2.png";
import type { SocialLink } from "@/types/social";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

export const brandConfig = {
  nameKey: "brand_name",
  homePath: "/",
  logo: {
    src: logoImage,
    altKey: "brand_name",
  },
} as const;

export const socialLinkConfig: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Fonij2002",
    Icon: FaGithub,
  },
  {
    label: "Telegram",
    href: "https://t.me/the_builder_notes",
    Icon: FaTelegram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/foroozan-iraji",
    Icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fonij2002",
    Icon: FaInstagram,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/channel/UCLVGBHa2LaJsckKBl1cqK5Q",
    Icon: FaYoutube,
  },
].filter((social) => Boolean(social.href));
