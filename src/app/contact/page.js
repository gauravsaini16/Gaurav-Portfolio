import PageShell from "@/components/PageShell";
import ContactPage from "@/views/contact";

export const metadata = {
  title:       "Contact Gaurav Saini — Hire a Full-Stack Developer",
  description: "Contact Gaurav Saini for full-stack websites, web applications, backend systems, database development, and AI-powered solutions.",
  keywords:    ["hire full-stack developer", "hire website developer", "freelance web developer", "Next.js developer", "backend developer", "web application development"],
  openGraph: {
    title: "Contact Gaurav Saini — Full-Stack Developer",
    description: "Discuss your website, web application, backend, database, or AI integration project with Gaurav Saini.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <ContactPage />
    </PageShell>
  );
}
