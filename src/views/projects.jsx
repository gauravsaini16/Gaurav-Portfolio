"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function isVideo(source) {
  return /\.(mp4|webm|mov)(\?.*)?$/i.test(source || "");
}

function isWebsiteProject(category) {
  const value = (category || "website").toLowerCase();
  return value.includes("web") || value.includes("site");
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("/api/works")
      .then((response) => (response.ok ? response.json() : []))
      .then((data) => {
        const websiteProjects = (Array.isArray(data) ? data : [])
          .filter((project) => isWebsiteProject(project.category))
          .map((project) => ({
            id: project.id,
            image: project.image_url,
            title: project.title,
            description: project.description,
          }));

        setProjects(websiteProjects);
      })
      .catch(() => setProjects([]));
  }, []);

  return (
    <section className="relative min-h-screen px-6 pb-28 pt-32 md:px-20 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <header className="mb-14 md:mb-20">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.5em] text-[#ff6b1a]">
            Selected Work
          </p>
          <h1 className="text-6xl font-black leading-none tracking-tighter text-white md:text-8xl">
            Projects<span className="text-[#ff6b1a]">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm font-light leading-7 text-white/45 md:text-base">
            A selection of websites and full-stack applications designed and developed for real-world use.
          </p>
        </header>

        {projects === null ? (
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
            {[0, 1, 2, 3].map((item) => (
              <div key={item} className="animate-pulse">
                <div className="aspect-[16/10] rounded-2xl bg-white/[0.04]" />
                <div className="mt-5 h-6 w-2/5 rounded bg-white/[0.04]" />
              </div>
            ))}
          </div>
        ) : projects.length > 0 ? (
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-20">
            {projects.map((project, index) => (
              <article key={project.id || project.title} className="group">
                <Link href={`/project/${project.id}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025]">
                    {project.image ? (
                      isVideo(project.image) ? (
                        <video
                          src={project.image}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          muted
                          loop
                          playsInline
                          autoPlay
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title || "Website project"}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      )
                    ) : (
                      <div className="flex h-full items-center justify-center text-[10px] uppercase tracking-[0.3em] text-white/20">
                        Project preview
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-6 border-b border-white/8 pb-6">
                    <div>
                      <p className="mb-2 text-[9px] uppercase tracking-[0.35em] text-[#ff6b1a]">
                        {String(index + 1).padStart(2, "0")} · Website
                      </p>
                      <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                        {project.title}
                      </h2>
                      {project.description && (
                        <p className="mt-3 line-clamp-2 max-w-lg text-sm font-light leading-6 text-white/40">
                          {project.description}
                        </p>
                      )}
                    </div>
                    <span className="mt-1 shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 transition-colors group-hover:text-[#ff6b1a]">
                      View ↗
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-6 py-20 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">No website projects added yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
