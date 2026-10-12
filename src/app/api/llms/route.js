import { NextResponse } from "next/server";

/**
 * GET /api/llms
 * Machine-readable portfolio profile for AI tools and other clients.
 */
export async function GET() {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

  const data = {
    name: "Gaurav Saini",
    title: "Full-Stack Developer",
    website: baseUrl,
    contact_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || null,
    location: "India",
    available_for_hire: true,
    summary: "Gaurav Saini builds responsive websites, full-stack web applications, backend systems, databases, and AI-powered solutions.",
    services: [
      {
        name: "Full-Stack Web Applications",
        description: "Responsive applications with frontend interfaces, backend services, authentication, dashboards, and deployment.",
      },
      {
        name: "Business Websites and Portfolios",
        description: "Modern websites and landing pages for businesses, professionals, and personal brands.",
      },
      {
        name: "Backend APIs and Database Systems",
        description: "REST APIs, authentication, database architecture, CRUD systems, and third-party integrations.",
      },
      {
        name: "AI Features and Workflow Automation",
        description: "AI API integrations, smart assistants, custom tools, and automated workflows.",
      },
    ],
    skills: {
      frontend: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
      backend: ["Node.js", "Express", "Laravel", "PHP", "Python"],
      database: ["MongoDB", "PostgreSQL", "MySQL"],
      tools: ["Git", "Vercel", "Netlify", "Postman"],
    },
    experience: [
      { role: "Junior Full-Stack Developer", period: "July 2026–Present" },
      { role: "SDE Intern", period: "February 2026–June 2026" },
    ],
    pages: {
      home: `${baseUrl}/`,
      projects: `${baseUrl}/projects`,
      services: `${baseUrl}/services`,
      about: `${baseUrl}/about`,
      contact: `${baseUrl}/contact`,
    },
    llms_txt: `${baseUrl}/llms.txt`,
  };

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "Content-Type": "application/json",
    },
  });
}
