import type { Metadata } from "next";
import Header from "@/components/protegepsi/header";
import HeroSection from "@/components/protegepsi/hero";
import StatsCards from "@/components/protegepsi/stats-cards";
import SolutionIntro from "@/components/protegepsi/solution-intro";
import FeaturesGrid from "@/components/protegepsi/features-grid";
import BenefitsGrid from "@/components/protegepsi/benefits-grid";
import ImplementationTimeline from "@/components/protegepsi/implementation-timeline";
import ExpertsSection from "@/components/protegepsi/experts-section";
import PricingSection from "@/components/protegepsi/pricing-section";
import FAQAccordion from "@/components/protegepsi/faq-accordion";
import FinalCTA from "@/components/protegepsi/final-cta";
import Footer from "@/components/protegepsi/footer";

export const metadata: Metadata = {
  title: "ProtegePsi | Proteção Psicossocial Corporativa para empresas",
  description:
    "Solução da PsySon para diagnóstico, monitoramento e governança em saúde mental corporativa, com foco em riscos psicossociais e apoio à adequação à NR-1.",
};

export default function ProtegePsiLanding() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsCards />
      <SolutionIntro />
      <FeaturesGrid />
      <BenefitsGrid />
      <ImplementationTimeline />
      <ExpertsSection />
      <PricingSection />
      <FAQAccordion />
      <FinalCTA />
      <Footer />
    </main>
  );
}
