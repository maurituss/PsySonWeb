import { Header } from "@/components/betterhelp/header"
import { Hero } from "@/components/betterhelp/hero"
import { TrustBar } from "@/components/betterhelp/trust-bar"
import { PainPoints } from "@/components/betterhelp/pain-points"
import { ValueProps } from "@/components/betterhelp/value-props"
import { Experience } from "@/components/betterhelp/experience"
import { DashboardPreview } from "@/components/betterhelp/dashboard-preview"
import { Steps } from "@/components/betterhelp/steps"
import { Testimonials } from "@/components/betterhelp/testimonials"
import { FAQ } from "@/components/betterhelp/faq"
import { CTASection } from "@/components/betterhelp/cta-section"
import { Footer } from "@/components/betterhelp/footer"
import { WhatsAppButton } from "@/components/betterhelp/whatsapp-button"

export default function PsySonLandingV2() {
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
