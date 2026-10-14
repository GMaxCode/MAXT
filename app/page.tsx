import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Differentials } from '@/components/sections/Differentials';
import { Process } from '@/components/sections/Process';
import { CTA } from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Differentials />
      <Process />
      <CTA />
    </>
  );
}
