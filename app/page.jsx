import Blogs from '@/components/Blogs'
import Business from '@/components/Business'
import Clients from '@/components/Clients'
import Experience from '@/components/Experience'
import FAQ from '@/components/FAQ'
import FlipCard from '@/components/FlipCard'
import Hero from '@/components/Hero'
import Parallax from '@/components/Parallax'
import Services from '@/components/Services'
import Testimonial from '@/components/Testimonial'
import WhyChoose from '@/components/WhyChoose'
import Image from 'next/image'






export default function Home() {


  return (
    <main>
      <Hero />
      <Services />
      <Clients />
      <FlipCard />
      <Experience />
      {/* <Business /> */}
      <Parallax />
      <WhyChoose />
      <Blogs />
      <Testimonial />
      <FAQ />
      {/* <Demo /> */}
    </main>
  )
}
