import { IconType } from "react-icons";
import { FaCode, FaGithub, FaTwitter } from "react-icons/fa";

export const pages: Link[] = [
  { href: "/", name: "Home" },
  // ...
];

export const socials: LinkWithIcon[] = [
  { href: "/github", name: "GitHub", icon: FaGithub },
  { href: "/twitter", name: "Twitter", icon: FaTwitter },
  { href: "/source", name: "Source Code", icon: FaCode },
];

export const display: { name: string; data: LinkWithFile[] }[] = [
  {
    name: "Languages",
    data: [
      { href: "https://www.typescriptlang.org/", name: "TypeScript" },
      { href: "https://www.javascript.com/", name: "JavaScript" },
      { href: "https://go.dev/", name: "Go" },
      { href: "https://kotlinlang.org/", name: "Kotlin" },
      // { href: "https://www.java.com/", name: "Java" },
      { href: "https://www.w3schools.com/html/", name: "HTML" },
      { href: "https://www.w3schools.com/css/", name: "CSS" },
    ],
  },
  {
    name: "Tools",
    data: [
      { href: "https://en.wikipedia.org/wiki/Linux", name: "Linux" },
      { href: "https://git-scm.com/", name: "Git" },
      { href: "https://www.docker.com/", name: "Docker" },
      { href: "https://redis.com/", name: "Redis" },
      { href: "https://reactjs.org/", name: "React" },
    ],
  },
  {
    name: "Databases",
    data: [
      { href: "https://www.postgresql.org/", name: "PostgreSQL" },
      { href: "https://www.mongodb.com/", name: "MongoDB" },
    ],
  },
];

type Link<T = {}> = {
  href: string;
  name: string;
} & T;

export type LinkWithIcon = Link<{ icon: IconType }>;
export type LinkWithFile = Link<{ file?: string }>;
