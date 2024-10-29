import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Pedro Henrique",
  initials: "PH",
  url: "https://www.pedrodeveloper.com.br/",
  location: "Fortaleza, CE",
  locationLink: "https://www.google.com/maps/place/Fortaleza",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    "Tailwind CSS",
    "Shadcn UI",
    "JavaScript",
    "Bootstrap",
    "React Native",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Docker",
    "MySQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "hello@example.com",
    tel: "+55 85 99735 8507",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Peedrohenrique",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pedro-henrique-b09b64206/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
} as const;
