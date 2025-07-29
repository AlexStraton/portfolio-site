import Footer from "../components/Footer"

export default function AboutMe() {
  return <>
<div className="flex flex-col min-h-screen w-full">
 <main className="flex-grow">
  <h1 className="flex flex-col justify-start items-start mt-24 mb-8 ml-12 text-5xl text-gray-900 md:text-6xl lg:text-7xl">
    <span className=" font-light bg-clip-text text-black">Alexandra </span>
        <span className="ml-8 font-light bg-clip-text text-black">Tincu Straton</span>
    <span className="ml-16 font-light bg-clip-text text-black"> </span>
    </h1>
<h2 className="mb-12 text-3xl font-extralight text-gray-900 md:text-4xl lg:text-5xl">Junior Software Developer</h2>

<div className="flex flex-col md:flex-row">
    <img className="rounded-xl h-auto w-2/3 sm:w-1/2 md:w-1/4 md:ml-8 lg:ml-8 mx-auto" src="src/assets/Me.png" alt="a girl wearing a red, long sleeved jumper and glasses facing sideways working on her laptop with a big screen behind her, both screens show colourful faded code">
    </img>
    <p className="m-8 flex-col  tracking-wider text-left leading-none">
     A linguist with a background in primary education, I am now a junior full-stack developer specializing in Python, TypeScript, React, and PostgreSQL with a strong focus on problem solving and a flare for design and styling.

I am currently in my first junior role developing and integrating the company's internal systems, as well as adding new features and working with UX/UI designers to implement user interface components and features that improve the user experience.

    </p>
</div>
 </main>
</div>
<Footer />
  </>

}
