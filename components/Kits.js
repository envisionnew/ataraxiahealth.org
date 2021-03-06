import Image from "next/image";
import Kit1 from "../public/images/kit1.jpg"
import Kit2 from "../public/images/kit2.jpg"

export default function Kits() {
  return (
    <section id="kits" className="py-12">
      <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
          Take a look at our past drops.
        </h1>
        <p className="max-w-md mx-auto mb-10 text-lg text-gray-600 dark:text-gray-400 md:text-lg">
          We were hard at work during COVID-19, creating mental health kits &
          hygiene kits to deliver to the homeless population. Stay tuned to
          learn more about our drops and how you can help out!
        </p>
      </div>
      <div className="grid gap-6 lg:mx-auto lg:max-w-6xl lg:grid-cols-2">
        <div className="duration-150 bg-white dark:bg-black hover:shadow-3xl rounded-xl">
          <div className="box-border relative inline-block max-w-full m-0 overflow-hidden">
            <div className="box-border block max-w-full px-5 sm:px-0">
              <Image src={Kit1} className="rounded-lg" alt="An image of the contents of our kits" />
            </div>
          </div>
          <div className="p-5">
            <h3 className="mb-2 px-2.5 sm:px-0">
              <span className="font-bold text-gray-900 dark:text-gray-200">
                Completed Kit:&nbsp;
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                This is a completed look at the mental health kits that we
                created and delivered during COVID-19.
              </span>
            </h3>
          </div>
        </div>
        <div className="duration-150 bg-white dark:bg-black hover:shadow-3xl rounded-xl">
          <div className="box-border relative inline-block max-w-full m-0 overflow-hidden">
            <div className="box-border block max-w-full px-5 sm:px-0">
              <Image src={Kit2} className="rounded-lg" alt="An image of the contents of our kits" />
            </div>
          </div>
          <div className="p-5">
            <h3 className="px-2.5 sm:px-0 mb-2">
              <span className="font-bold text-gray-900 dark:text-gray-200">
                Our contents:&nbsp;
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                This image displays the content of the kit and the pamphlet that
                Ataraxia created.
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
