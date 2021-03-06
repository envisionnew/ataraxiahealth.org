import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Resources from "../components/Resources";
import Impact from "../components/Impact";
import Kits from "../components/Kits";
import Podcast from "../components/Podcast";
import Join from "../components/Join";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>Ataraxia – a non-profit organization.</title>
        <meta name="robots" content="follow, index" />
        <meta
          content="Ataraxia is a non-profit organization dedicated to promoting neurodiversity within our communities, while creating tangible impacts in the mental health of homeless populations."
          name="description"
        />
        <meta property="og:url" content="https://ataraxiahealth.org" />
        <link rel="canonical" href="https://ataraxiahealth.org" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Ataraxia – a non-profit organization."
        />
        <meta
          property="og:description"
          content="Ataraxia is a non-profit organization dedicated to promoting neurodiversity within our communities, while creating tangible impacts in the mental health of homeless populations."
        />
        <meta
          property="og:title"
          content="Ataraxia – a non-profit organization."
        />
        <meta property="og:image" content="/favicon/send.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ataraxiahealthh" />
        <meta
          name="twitter:title"
          content="Ataraxia – a non-profit organization."
        />
        <meta
          name="twitter:description"
          content="Ataraxia is a non-profit organization dedicated to promoting neurodiversity within our communities, while creating tangible impacts in the mental health of homeless populations."
        />
        <meta name="twitter:image" content="/favicon/send.png" />
      </Head>
      <Header />
      <section className="relative">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              Promoting
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-500 dark:via-purple-400 dark:to-indigo-500">
                neurodiversity
              </span>
              <br />
              in our communities.
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              Ataraxia is a non-profit organization dedicated to providing
              adequate <b>digital</b> resources to promote neurodiversity within
              our communities, while striving to create a tangible{" "}
              <b>material</b> effect. <br />
              <br />
              Our projects include the development of mental health kits,
              classes highlighting the neuroscience behind certain conditions,
              our own podcast revolving around neurodiversity, and webinars
              hosting professors, neurologists, and neurosurgeons.
            </p>
            <div className="mt-6 text-center md:ml-6">
              <a
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"
                aria-label="events"
                href="https://donorbox.org/ataraxia-project-envision-us/"
                rel="noreferrer"
              >
                Donate
              </a>
              <br className="sm:hidden" />
              <Link href="/#about">
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                  aria-label="learn more"
                >
                  Learn More
                </a>
              </Link>
            </div>
          </div>
          <div className="relative w-full py-10 mx-auto text-center md:py-16 md:w-10/12">
            <div className="relative">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://donorbox.org/ataraxia-project-envision-us/"
              >
                <div className="transition duration-700 md:hover:transform md:hover:scale-105">
                  <Image
                    src="/images/main.jpeg"
                    width={3840}
                    height={1920}
                    layout="responsive"
                    className="rounded-md shadow-2xl h-80 hover:shadow-3xl md:rounded-xl"
                    alt="A few kits that were delivered to a homeless shelter"
                  />
                </div>
              </a>
            </div>
            <p className="my-8 text-sm font-medium text-gray-500">
              A few kits that were delivered to a homeless shelter
            </p>
          </div>
        </div>
        {/* <div
          style={{ backgroundImage: "url(/images/blur.png)", zIndex: -1 }}
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover"
        ></div> */}
      </section>
      <Podcast />
      <About />
      <Resources />
      <Kits />
      <Impact />
      <Join />
      <Footer />
    </div>
  );
}
