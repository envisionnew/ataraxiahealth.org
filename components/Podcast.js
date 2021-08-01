export default function Podcast() {
  return (
    <section id="podcast" className="py-6 md:py-12">
      <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
          Listen to the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-indigo-400">
            Speaking from Empathy
          </span>{" "}
          Podcast
        </h1>
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://open.spotify.com/embed/episode/67kDcgHiaGNleNow1l5EVM"
            width="100%"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
