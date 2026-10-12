import { Suspense } from "react";
import Cursor from "../../components/Cursor";
import Navbar from "../../components/Navbar";
import ProjectsPage from "../../views/projects";

export const metadata = {
  title:       "Web Development Projects — Gaurav Saini",
  description: "Explore websites and full-stack applications designed and developed by Gaurav Saini.",
  keywords:    ["portfolio projects", "case studies", "freelance work", "client projects"],
  openGraph: {
    title: "Web Development Projects — Gaurav Saini",
    description: "Websites and full-stack application projects by Gaurav Saini.",
  },
};

export default function Page() {
  return (
    <main>
      <div className="grain-overlay" />
      <Cursor />
      <Navbar />
      <div className="relative z-10">
        <Suspense fallback={<div className="min-h-screen bg-[#060606]" />}>
          <ProjectsPage />
        </Suspense>
      </div>
    </main>
  );
}
