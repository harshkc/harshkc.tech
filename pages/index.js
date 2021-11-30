import {LandingPage} from "../sections";
import {Separator, SectionLayout, Projects} from "../components";

export default function Home() {
  return (
    <>
      <section id='home'>
        <LandingPage />
      </section>
      <Separator />
      <SectionLayout id='about' spacing='pt-8 pb-2' name='About'>
        <Introduction />
      </SectionLayout>
      <Separator />
      <SectionLayout id='projects' spacing='py-4' name='Projects'>
        <Projects />
      </SectionLayout>
      <Separator />
      <SectionLayout id='work' spacing='pt-8' name='Work'>
        <Work />
      </SectionLayout>
      <Separator />
    </>
  );
}
