import { userData } from "./user-data";

export const profile = {
  name: userData.name, brand: "kelash", role: "Full Stack Developer · Node.js",
  email: userData.email, phone: userData.phone, location: "Karachi, Pakistan",
  intro: userData.about.split("\n\n")[0], about: userData.about.split("\n\n")[1], social: userData.social,
};
export const skills = [
  ...userData.skills,
  { name: "OpenAI API" },
  { name: "Retrieval-Augmented Generation (RAG)" },
  { name: "Semantic Search" },
  { name: "Hybrid Search" },
  { name: "LLM Integration" },
  { name: "Prompt Configuration" },
  { name: "Streaming AI Responses" },
  { name: "Document Ingestion & Source Citations" },
];
export const resume = userData.resumeData;
export const stats = userData.stats;
export const services = userData.services;
export const certifications = [
  { name: "AWS Cloud Technical Essentials", issuer: "Amazon Web Services · Coursera", year: "2025" },
  { name: "Hacktoberfest Participant", issuer: "AWS Cloud Club MUET", year: "2024" },
  { name: "Technplay Competitor", issuer: "Mehran UET · Software Engineering", year: "2023" },
  { name: "JavaScript Frontend to Backend", issuer: "Microsoft Learn Student Ambassador Event", year: "2022" },
];
export { projects, type Project, type ProjectTheme } from "./projects";

