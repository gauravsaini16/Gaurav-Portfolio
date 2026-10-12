import PageShell from "@/components/PageShell";
import AboutPage from "@/views/about";

export const metadata = {
  title:       "About Gaurav Saini — Full-Stack Developer",
  description: "Meet Gaurav Saini, a full-stack developer from India building responsive websites, web applications, backend systems, and AI-powered solutions.",
  keywords:    ["Gaurav Saini", "full-stack developer India", "freelance web developer", "Next.js developer", "React developer", "backend developer"],
  openGraph: {
    title: "About Gaurav Saini — Full-Stack Developer",
    description: "Learn about Gaurav Saini and his work across frontend development, backend systems, databases, and AI-powered web solutions.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <style>{`.bottom-blur { display: none !important; }`}</style>
      <AboutPage />
    </PageShell>
  );
}
