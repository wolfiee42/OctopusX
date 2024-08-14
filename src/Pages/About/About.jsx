import CoreValues from "../CoreValues/CoreValues";


export default function About() {
  return (
    <div>
      <div className="m-5 space-y-5 md:mx-40 ">
        <h1 className="text-4xl font-bold text-right md:text-5xl lg:text-5xl xl:text-5xl">What We Do</h1>
        <p className="text-lg  xl:text-justify lg:text-justify">This site, OctopusX, is a collection of our ideas and projects that inspire us. We are a team of content creators and creative minds dedicated to producing high-quality content, that what make us independent and bootstrapped. Creating content and working with creators allows us to develop digital products, tools, and resources for fellow creators. We're proud of creating <span className="font-bold underline">ytshops</span> and our commitment to supporting creators and the global creator economy. Explore all of our products <span className="underline">here!</span>
        </p>
      </div>
      <CoreValues />
    </div>
  )
}
