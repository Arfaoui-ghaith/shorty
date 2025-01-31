export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Portfolio",
      href: "https://arfaoui-ghaith.github.io/portfolio-ghaith-arfaoui/",
      target: "_blank",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/Arfaoui-ghaith",
    upwork: "https://www.upwork.com/freelancers/~01120eca52fa98217a",
    linkedin: "https://www.linkedin.com/in/ghaith-arfaoui-7501aa180/",
    portfolio: "https://arfaoui-ghaith.github.io/portfolio-ghaith-arfaoui/",
  },
};
