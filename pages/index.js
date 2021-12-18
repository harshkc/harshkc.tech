import Head from 'next/head';
import {LandingPage, Introduction, Projects, Work} from '../sections';
import {Separator, SectionLayout} from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Harsh Choudhary</title>
        <meta
          name="description"
          content="Come check out about Harsh Choudhary who is levelling up his career as a software engineer and sharing his journey to help you."
        />
        <meta
          name="keywords"
          content="Learn React,React blogs, Testing in JavaScript, Testing in React, Learn JavaScript, Learn TypeScript, kent c dodds, dan abramov, harsh choudhary."
        />
        <meta name="image" content="https://i.imgur.com/86GbLcC.png" />

        <meta property="og:url" content="https://harshkc.tech" />
        <meta property="og:title" content="Harsh Choudhary" />
        <meta
          property="og:description"
          content="Come check out about Harsh Choudhary who is levelling up his career as a software engineer and sharing his journey to help you."
        />
        <meta property="og:image" content="https://i.imgur.com/86GbLcC.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@harshkc99" />
        <meta name="twitter:title" content="Harsh Choudhary" />
        <meta name="twitter:site" content="@harshkc99" />
        <meta
          name="twitter:description"
          content="Come check out about Harsh Choudhary who is levelling up his career as a software engineer and sharing his journey to help you."
        />
        <meta name="twitter:image" content="https://i.imgur.com/86GbLcC.png" />
        <meta name="twitter:alt" content="Harsh Choudhary"></meta>

        <link rel="canonical" href="https://harshkc.tech"></link>
      </Head>

      <section id="home">
        <LandingPage />
      </section>
      <Separator />
      <SectionLayout id="about" spacing="pt-8 pb-2" name="About">
        <Introduction />
      </SectionLayout>
      <Separator />
      <SectionLayout id="projects" spacing="py-4" name="Projects">
        <Projects />
      </SectionLayout>
      <Separator />
      <SectionLayout id="work" spacing="pt-8" name="Work">
        <Work />
      </SectionLayout>
      <Separator />
    </>
  );
}
