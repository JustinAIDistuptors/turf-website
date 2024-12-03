import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Gallery from '@/components/Gallery'
import PricingSection from '@/components/PricingSection'
import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Benefits />
      <Gallery />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <ContactForm />
      <Footer />
    </main>
  )
}