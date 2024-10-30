import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Pedro Henrique",
  initials: "PH",
  url: "https://www.pedrodeveloper.com.br/",
  location: "Fortaleza, CE",
  locationLink: "https://www.google.com/maps/place/Fortaleza",
  description:
    "Desenvolvedor apaixonado por tecnologia, focado em criar soluções eficientes e colaborativas.",
  summary:
    "Desenvolvedor com especialização em tecnologias modernas e criação de soluções escaláveis, focado em proporcionar uma experiência de usuário de alta qualidade. Aplicando as melhores práticas e inovações da indústria, busco constantemente aprimorar minhas habilidades e acompanhar as tendências do setor. Além das competências técnicas, valorizo a colaboração em equipe, com comunicação clara e organização, sempre focado em entregar resultados que agreguem valor ao negócio e mantenham a qualidade e os prazos.",
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
    email: "pedro25henrique@live.com",
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
