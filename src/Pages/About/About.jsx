import CoreValues from "../CoreValues/CoreValues";



export default function About() {
  return (
    <>
      <div className="w-full px-10 md:w-[max-w-5xl] lg:max-w-7xl mx-auto h-full py-10">
        <div>
          <h1 className="mb:5 md:mb-8 py-4  font-bold text-[32px] md:text-40px] lg:text-[48px]">
            Who We Are
          </h1>
          <p className="mb-8 text-base">
            Welcome to OctopusX, A team build by Creators for Creators. Born from
            a simple yet profound desire to help creators, as well as by creating
            content create impact in the world, we started on our journey in 2022,
            aiming to revolutionize the Creator Economy. As creators ourselves, we
            understood the hurdles in creating meaningful content, growing an
            audience, and turning passion into livelihood. Thus, OctopusX was born
            - a haven for creativity, innovation, and growth.
          </p>
          <p className="mb-8 text-base">
            All started with a big dream: make it super easy for creators like you
            and us to share our work, reach more people, and actually make a
            living doing what we love.
          </p>
          <p className="mb-8 text-base">
            {" "}
            <span className="font-bold">OctopusX</span> is a media-tech startup;
            we're a team of innovators, storytellers, and dreamers. We started
            from a simple desire to help content creators shine. Through our
            cutting-edge digital products, tools, assets, and resources, we open
            doors to endless creative possibilities.
          </p>
          <p className="mb-8 text-base">
            Our mission is to open up new opportunities for creativity, making it
            easier for creators to produce high-quality content, grow their
            audience, and monetize their work. We believe in the power of content
            to change the world, and we're here to make creators more powerful
            then ever.
          </p>
          <p className="mb-8 text-base">
            The digital world keeps changing, and so do the hurdles for creators.
            At OctopusX, we're building a place where creativity and technology
            come together perfectly. We're focused on tackling the big
            problems—like earning money from content, making production process
            easier, or managing content and products. Our strategy covers
            everything, making sure every creator gets heard and has the space to
            thrive.
          </p>
        </div>
        <div>
          <div className="lg:flex justify-center items-center ">
            <div>
              <h1 className="text-4xl font-bold text-right md:text-5xl lg:text-5xl xl:text-5xl pb-9">What We Do</h1>
              <p className="text-lg text-slate-900  xl:text-justify lg:text-justify">This site, OctopusX, is a collection of our ideas and projects that inspire us. We are a team of content creators and creative minds dedicated to producing high-quality content, that what make us independent and bootstrapped. Creating content and working with creators allows us to develop digital products, tools, and resources for fellow creators. We're proud of creating <span className="font-bold underline">ytshops</span> and our commitment to supporting creators and the global creator economy. Explore all of our products <span className="underline">here!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white">
        <CoreValues />
      </div>
    </>
  )

}
