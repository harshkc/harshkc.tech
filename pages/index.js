import {LandingPage} from "../sections";
import {Separator,SectionLayout} from "../components";

export default function Home() {
  return (
    <>
      <section id='home'>
        <LandingPage />
      </section>
      <Separator />
      <SectionLayout id="about" spacing="pt-8 pb-2" name="About">
        <Introduction />
      </SectionLayout>
      <Separator />
    </>
  );
}
