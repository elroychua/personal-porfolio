import Image from "next/image";
import Typewriter from "typewriter-effect";
import useMediaQuery from "@mui/material/useMediaQuery";
const Hero = () => {
  const isInitialRequestGreaterThan700 = useMediaQuery("(min-width:700px)");
  return (
    <section>
      <div className="text-center">
        <h2 className="font-bold  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-5 text-5xl md:text-8xl">
          Hi, I am Elroy Chua
        </h2>
        <div style={{ minHeight: "75px" }}>
          {isInitialRequestGreaterThan700 ? (
            <Typewriter
              style={{ minHeight: "75px" }}
              options={{ loop: true, cursor: "🚀" }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="color: #FFF; font-size:3em; font-family: `Roboto, sans-serif;"><strong>Computer Science Undergraduate</strong>.</span>'
                  )
                  .pauseFor(500)
                  .deleteChars(31)
                  .typeString(
                    '<span style="color: #FFF; font-size:3em; font-family: system-ui;"><strong>Software Developer</strong>.</span>'
                  )
                  .pauseFor(500)
                  .deleteChars(19)
                  .typeString(
                    '<span style="color: #FFF; font-size:3em; font-family: system-ui;"><strong>UX Designer</strong>.</span>'
                  )
                  .pauseFor(500)
                  .deleteChars(15)
                  .start();
              }}
            />
          ) : (
            <Typewriter
              options={{ loop: true, cursor: "🚀" }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="color: #FFF; font-size: 1.5em ; font-family: `Roboto, sans-serif;"><strong>Computer Science Undergraduate</strong>.</span>'
                  )
                  .pauseFor(500)
                  .deleteChars(31)
                  .typeString(
                    '<span style="color: #FFF; font-size: 1.5em ; font-family: system-ui;"><strong>Software Developer</strong>.</span>'
                  )
                  .pauseFor(500)
                  .deleteChars(19)
                  .typeString(
                    '<span style="color: #FFF; font-size: 1.5em ; font-family: system-ui;"><strong>Designer</strong>.</span>'
                  )
                  .pauseFor(500)
                  .deleteChars(12)
                  .start();
              }}
            />
          )}
        </div>
        <p className="text-sm md:text-md text-left py-4 leading-8 text-white">
          {`I  have a strong interest in user experience and software development, enthusiastic about utilizing
          new technologies to drive positive change and solve problems. With over with over a year
          of hands-on experience in the `}
          <span className="font-bold">
            PostgreSQL, Express.js, React & Node.js
          </span>
          {` stack using `} <span className="font-bold">TypeScript</span>
          {`, I believe that I can be a valuable asset to any team. I am
          a committed team player with a strong empathetic ability and am
          dedicated to contributing to the success of future projects. Let's
          connect!`}
        </p>
      </div>
      <div className="py-5">
        <div className=" relative bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full w-60 h-60 md:w-70 md:h-70 overflow-hidden">
          <Image
            src={"/elroy_ai.png"}
            width="300"
            height="300"
            alt="elroy-ai-render"
          />
        </div>
      </div>
      <ul className="flex items-center justify-center mt-5">
        <li>
          {/* <button
            type="button"
            onClick={() => {
              const element = document.getElementById("social-links");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Contact me
          </button> */}
          <button
            className="text-gray-900 bg-white border border-gray-300 underline focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={() => {
              const element = document.getElementById("social-links");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact me
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Hero;