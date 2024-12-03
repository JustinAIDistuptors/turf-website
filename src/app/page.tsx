import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <ContactForm />
      <Testimonials />
    </main>
  )
}