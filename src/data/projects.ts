import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "AI Video Assistant",
    href: "/projects",
    tags: [
      "Python",
      "Streamlit",
      "Whisper",
      "Mistral AI",
      "LangChain",
      "ChromaDB",
    ],
    image: {
      LIGHT: "/images/projects/ai-video-assistant.png",
      DARK: "/images/projects/ai-video-assistant.png",
    },
  },
  {
    index: 1,
    title: "ChatBot",
    href: "/projects",
    tags: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "Groq LLM",
      "Tavily API",
    ],
    image: {
      LIGHT: "/images/projects/chatbot.png",
      DARK: "/images/projects/chatbot.png",
    },
  },
  {
    index: 2,
    title: "API Rate Limiter",
    href: "/projects",
    tags: ["Node.js", "Redis", "MongoDB", "JWT", "REST API"],
    image: {
      LIGHT: "/images/projects/api-rate-limiter.png",
      DARK: "/images/projects/api-rate-limiter.png",
    },
  },
  {
    index: 3,
    title: "Split Trip",
    href: "/projects",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: {
      LIGHT: "/images/projects/split.png",
      DARK: "/images/projects/split.png",
    },
  },
  {
    index: 4,
    title: "Pokedex",
    href: "/projects",
    tags: ["JavaScript", "API", "HTML", "CSS"],
    image: {
      LIGHT: "/images/projects/pokedex.png",
      DARK: "/images/projects/pokedex.png",
    },
  },
  {
    index: 5,
    title: "Imagify",
    href: "/projects",
    tags: ["JavaScript", "Web Development", "Image Processing"],
    image: {
      LIGHT: "/images/projects/Imagify.webp",
      DARK: "/images/projects/Imagify.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "AI Video Assistant",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/ai-video-assistant.png"],
    description:
      "AI-powered video intelligence application that transforms YouTube videos and local media into searchable knowledge using Whisper transcription, LLM-based analysis, and RAG-powered question answering.",
    sourceCodeHref:
      "https://github.com/anujrj05/AI-Video-Assistant",
    liveWebsiteHref:
      "https://github.com/anujrj05/AI-Video-Assistant",
  },
  {
    name: "ChatBot",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/chatbot.png"],
    description:
      "LLM-powered chatbot with real-time web search capabilities built using Node.js, Express.js, Groq LLM, and Tavily API for context-aware AI responses.",
    sourceCodeHref: "https://github.com/anujrj05/ChatBot",
    liveWebsiteHref: "https://chatb-jsoe.onrender.com/",
  },
  {
    name: "API Rate Limiter",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/api-rate-limiter.png"],
    description:
      "Backend API rate-limiting and monitoring system built with Node.js, Redis, MongoDB, JWT authentication, and REST APIs, designed to handle and monitor high-volume API traffic.",
    sourceCodeHref:
      "https://github.com/anujrj05/API_rate_limiter",
    liveWebsiteHref:
      "https://github.com/anujrj05/API_rate_limiter",
  },
  {
    name: "Split Trip",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/split.png"],
    description:
      "Full-stack expense-sharing application for managing group trips, splitting expenses, and generating accurate settlement summaries.",
    sourceCodeHref: "https://github.com/anujrj05/Split_trip",
    liveWebsiteHref: "https://github.com/anujrj05/Split_trip",
  },
  {
    name: "Pokedex",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/pokedex.png"],
    description:
      "Interactive Pokedex web application that consumes public APIs to fetch, search, and display detailed Pokémon information.",
    sourceCodeHref: "https://github.com/anujrj05/pokedex",
    liveWebsiteHref: "https://github.com/anujrj05/pokedex",
  },
  {
    name: "Imagify",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/Imagify.webp"],
    description:
      "Web-based image application with a simple interface for working with and transforming images.",
    sourceCodeHref: "https://github.com/anujrj05/Imagify",
    liveWebsiteHref: "https://github.com/anujrj05/Imagify",
  },
];