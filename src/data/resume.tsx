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
  work: [
    {
      company: "Grupo Educacional Aqui Você Pode",
      href: "https://www.aquivocepode.com.br/",
      badges: ["developer"],
      location: "Presencial",
      title: "Programador júnior",
      logoUrl: "/avp.png",
      start: "Jul 2023",
      end: undefined,
      description: "Atualmente, atuo como Desenvolvedor Front-end, com foco em tecnologias como JavaScript, React.js e Next.js para desenvolver interfaces modernas, responsivas e de alto desempenho. Tenho experiência na construção de diversas aplicações, incluindo um sistema interno que atendeu a demandas estratégicas da empresa, agregando valor e eficiência aos processos internos.",
    },
    {
      company: "Grupo Educacional Aqui Você Pode",
      href: "https://www.aquivocepode.com.br/",
      badges: ["Estagiário"],
      location: "Presencial",
      title: "Estagiário de Programação",
      logoUrl: "/avp-01.png",
      start: "Out 2021",
      end: "Jul 2023",
      description: "Iniciei minha jornada como estagiário, com conhecimentos básicos em desenvolvimento, e tive a oportunidade de crescer significativamente como Desenvolvedor Front-end. Participar dos projetos da empresa foi fundamental para meu desenvolvimento técnico e profissional, permitindo que eu consolidasse habilidades em JavaScript, React.js e Next.js, e agregasse valor com interfaces modernas e eficientes.",
    },
    {
      company: "Instituto Dom José",
      href: "https://www.idj.com.br/",
      badges: ["Suporte"],
      location: "Presencial",
      title: "Suporte Técnico ti",
      logoUrl: "/idj.png",
      start: "Ago 2016",
      end: "Out 2021",
      description: "Atuei como suporte de TI, realizando manutenção em computadores e impressoras, além de oferecer suporte técnico para redes locais e Wi-Fi. Fui responsável pela elaboração de orçamentos de produtos e serviços, gestão do parque tecnológico e atendimento de chamados, tanto de forma remota quanto por telefone. Minha experiência abrangeu uma ampla variedade de dispositivos, incluindo computadores, notebooks, impressoras e projetores, garantindo sempre a agilidade e eficiência no atendimento e resolução de problemas.",
    },
  ],
} as const;
