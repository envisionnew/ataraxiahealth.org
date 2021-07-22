const volunteers = [
  {
    name: "Shehbaz Singh Virk",
    position: "Co-founder and Executive Director",
    image: "shehbaz.jpeg",
  },
  {
    name: "Saurish Srivastava",
    position: "Co-Founder and Director of Operations",
    website: "https://saurish.com",
    image: "saurish.jpeg",
  },
  {
    name: "Leah Altamirano",
    position: "Director of Outreach",
    image: "leah.jpeg",
  },
  {
    name: "Varun Bommaji",
    position: "Secretary",
    image: "varun.jpeg",
  },
];

export default function About() {
  return (
    <section id="about" className="py-6 md:py-12">
      <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
          About Us
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="mb-10 space-y-6">
            <h1 className="text-xl font-bold text-center text-rose-600 dark:text-rose-300 md:text-2xl">
              Definition
            </h1>
            <div className="h-auto">
              <img
                className="w-10 mx-auto transition duration-700 rounded shadow-2xl hover:shadow-3xl md:hover:transform md:hover:scale-105"
                src="../favicon/logo.png"
              />
            </div>
            <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              Definitionally, ataraxia is defined as a state of serene calmness.
              With countless challenges and difficulties – especially during
              COVID-19 – it is essential to understand that different people are
              experiencing different feelings and times. Our long-term goal is
              to create an environment, a community, that is cognizant of the
              situation of others – as well as up-to-date on the science behind
              conditions – in order to effectively achieve ataraxia within our
              community.
            </p>
          </div>
          <div className="mb-10 space-y-6">
            <h1 className="text-xl font-bold text-center text-rose-600 dark:text-rose-300 md:text-2xl">
              Mission Statement
            </h1>
            <div className="h-auto">
              <img
                className="w-10 mx-auto transition duration-700 rounded shadow-2xl hover:shadow-3xl md:hover:transform md:hover:scale-105"
                src="../favicon/logo.png"
              />
            </div>
            <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              Ataraxia is currently dedicated to providing resources in
              underprivileged populations and communities. Neurodiversity has
              been proven to have links to racial and socioeconomic trends. Our
              mission is to provide adequate resources to these populations,
              such as: the homeless population. We teach fruitful stress
              management techniques, so people can be in a better mental state
              to be more productive and deal with challenges effectively.
            </p>
          </div>
        </div>
        <div className="mb-10 space-y-6">
          <h1 className="text-xl font-bold text-center text-rose-600 dark:text-rose-300 md:text-2xl">
            Our Team
          </h1>
          <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-wrap -m-4">
              {volunteers.map((volunteer) => (
                <div className="p-4 lg:w-1/4 md:w-1/2" key={volunteer}>
                  <div className="flex flex-col items-center h-full text-center">
                    <img
                      alt={`Image of ${volunteer.name}`}
                      className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg h-80 md:h-60"
                      src={`/images/${volunteer.image}`}
                    />
                    <div className="w-full">
                      <a
                        className={
                          volunteer.website
                            ? "underline text-black dark:text-white hover:text-link-blue dark:hover:text-link-purple"
                            : "cursor-text"
                        }
                        href={volunteer.website ? "https://saurish.com" : null}
                      >
                        <h2
                          className={
                            volunteer.website
                              ? "text-lg font-medium text-black hover:text-link-blue dark:hover:text-link-purple title-font dark:text-gray-200"
                              : "text-lg font-medium text-black title-font dark:text-gray-200"
                          }
                        >
                          {volunteer.name}
                        </h2>
                      </a>
                      <h3 className="mb-3 text-gray-500">
                        {volunteer.position}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}