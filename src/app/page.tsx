import { About } from "./_components/about";
import { Depoimentos } from "./_components/depoimento";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";

export default function Home(){
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Depoimentos/>
      <Footer/>
    </main>
  )
}