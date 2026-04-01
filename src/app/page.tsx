import { Header } from "@/components/psyson/header"
import { Hero } from "@/components/psyson/hero"
import { TrustBar } from "@/components/psyson/trust-bar"
import { PainPoints } from "@/components/psyson/pain-points"
import { ValueProps } from "@/components/psyson/value-props"
import { Experience } from "@/components/psyson/experience"
import { DashboardPreview } from "@/components/psyson/dashboard-preview"
import { Steps } from "@/components/psyson/steps"
import { Testimonials } from "@/components/psyson/testimonials"
import { FAQ } from "@/components/psyson/faq"
import { CTASection } from "@/components/psyson/cta-section"
import { Footer } from "@/components/psyson/footer"
import { WhatsAppButton } from "@/components/psyson/whatsapp-button"

export default function PsySonLanding() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <PainPoints />
      <ValueProps />
      <Experience />
      <DashboardPreview />
      <Steps />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
