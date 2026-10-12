import Link from "next/link";
import PageShell from "@/components/PageShell";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Full-Stack Development Services — Gaurav Saini",
  description: "Full-stack websites, web applications, backend APIs, database systems, and AI-powered solutions by Gaurav Saini.",
};

const services = [
  {
    title: "Full-Stack Web Applications",
    description: "Complete web applications built from the interface to the database, with clean architecture, responsive design, and reliable functionality.",
    deliverables: "User-facing applications, admin panels, authentication, dashboards, and deployment.",
  },
  {
    title: "Business Websites & Portfolios",
    description: "Modern, responsive websites that present your business, work, or personal brand clearly and perform smoothly across devices.",
    deliverables: "Landing pages, portfolio sites, business websites, content sections, SEO, and contact flows.",
  },
  {
    title: "Backend APIs & Database Systems",
    description: "Secure backend services and database structures that handle application data, business logic, and third-party integrations.",
    deliverables: "REST APIs, database design, authentication, CRUD systems, integrations, and testing.",
  },
  {
    title: "AI Features & Workflow Automation",
    description: "Practical AI capabilities added to websites and applications to improve search, content workflows, support, and productivity.",
    deliverables: "AI API integrations, smart assistants, content features, automated workflows, and custom tools.",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="relative min-h-screen overflow-hidden px-6 pb-28 pt-36 md:px-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#ff6b1a]/8 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.45em] text-[#ff6b1a]">Full-Stack Development · Freelance Services</p>
          <h1 className="mb-7 text-6xl font-black tracking-tighter text-white md:text-8xl">Services<span className="text-[#ff6b1a]">.</span></h1>
          <p className="max-w-3xl text-base font-light leading-8 text-white/45 md:text-lg">
            I build complete digital products—from responsive interfaces to backend systems and databases—with a focus on clear design, dependable functionality, and real-world usability.
          </p>

          <div className="mt-24">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-white/25">What I Can Build for You</p>
                <h2 className="text-3xl font-black tracking-tight md:text-5xl">Development Services</h2>
              </div>
              <Link href="/contact" className="self-start rounded-full bg-[#ff6b1a] px-7 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-black transition-colors hover:bg-white">Start a Project</Link>
            </div>

            <div className="divide-y divide-white/8 border-y border-white/8">
              {services.map((service, index) => (
                <article key={service.title} className="grid gap-6 py-10 md:grid-cols-[70px_1fr_1fr] md:py-14">
                  <span className="font-mono text-xs text-[#ff6b1a]">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-white/25">Custom Development</p>
                    <h3 className="text-2xl font-black tracking-tight">{service.title}</h3>
                    <p className="mt-4 max-w-xl text-sm font-light leading-7 text-white/40">{service.description}</p>
                  </div>
                  <div className="md:pt-7">
                    <p className="text-sm leading-6 text-white/45"><span className="text-white/70">— Deliverables:</span> {service.deliverables}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-28 rounded-[2rem] border border-white/8 bg-white/[0.025] p-8 text-center md:p-14">
            <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-[#ff6b1a]">Have an Idea?</p>
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">Let’s turn it into a working product.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40">Tell me what you want to build, and I’ll help shape it into a clear, functional, and polished web solution.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="rounded-full bg-[#ff6b1a] px-7 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-black hover:bg-white">Start a Project</Link>
              <Link href="/projects" className="rounded-full border border-white/10 px-7 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:bg-white/5">View My Work</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </PageShell>
  );
}
