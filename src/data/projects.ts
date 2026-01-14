import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Split Trip",
    href: "/projects",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: {
      LIGHT: "/images/projects/split.png",
      DARK: "/images/projects/split.png",
    },
  },
  {
    index: 1,
    title: "Conference Template",
    href: "/projects",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: {
      LIGHT: "/images/projects/conference.jpg",
      DARK: "/images/projects/conference.jpg",
    },
  },
  {
    index: 2,
    title: "Pokedex",
    href: "/projects",
    tags: ["JavaScript", "API", "HTML", "CSS"],
    image: {
      LIGHT: "/images/projects/pokedex.png",
      DARK: "/images/projects/pokedex.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Split Trip",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/split.png"],
    description:
      "Built a full-stack expense sharing application to manage group trips, enabling fair cost distribution and real-time expense summaries.",
    sourceCodeHref: "https://github.com/anujrj05/Split_trip",
    liveWebsiteHref: "https://github.com/anujrj05/Split_trip",
  },
  {
    name: "Conference Template",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/conference.jpg"],
    description:
      "Designed a responsive conference website template with reusable components for speakers, schedules, and announcements.",
    sourceCodeHref: "https://github.com/anujrj05/Conference_template",
    liveWebsiteHref: "https://github.com/anujrj05/Conference_template",
  },
  {
    name: "Pokedex",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/pokedex.png"],
    description:
      "Developed a Pokedex web app using public APIs to fetch and display Pokémon data with search and filter functionality.",
    sourceCodeHref: "https://github.com/anujrj05/pokedex",
    liveWebsiteHref: "https://github.com/anujrj05/pokedex",
  },
  {
    name: "Imagify",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/Imagify.webp"],
    description:
      "Created an image processing application that allows users to enhance and transform images through a simple interface.",
    sourceCodeHref: "https://github.com/anujrj05/Imagify",
    liveWebsiteHref: "https://github.com/anujrj05/Imagify",
  },
  {
    name: "Sharkie Game",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/sharke-image.png"],
    description:
      "Built a browser-based game using JavaScript featuring interactive gameplay mechanics and score tracking.",
    sourceCodeHref: "https://github.com/anujrj05/Sharkie_Game",
    liveWebsiteHref: "https://github.com/anujrj05/Sharkie_Game",
  },
];
