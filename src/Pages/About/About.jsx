export default function About() {
  return (
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
        <img
          className="my-28"
          src="https://i.ibb.co/gSNWmwn/office-Image.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between my-10 gap-8 md:gap-16">
        <div className="w-full md:w-[600px] h-full">
          <h1 className="mb-8 font-bold text-4xl">Why We're Here</h1>
          <p className="mb-8 text-base font-normal text-black">
            We're on a mission to fuel The Creator Economy by doing what we love
            most: creating. Whether it's content that change others life,
            digital products that solve real problems, or assets that creators
            can use to improve their work, we're all in. And the best part?
            We're always cooking up something new, driven by fresh ideas and the
            endless possibilities of what we can create together.
          </p>
        </div>
        <div className="w-full md:w-[600px] h-full">
          <h1 className="mb-8 font-bold text-4xl">Our vision</h1>
          <p className="mb-8 text-base font-normal text-black">
            At OctopusX, we've got a vision that guides us every day: to make
            the world a better place using content. We see a future where
            creating isn't just for the few but for everyone with a story to
            tell or an idea to share. Our dream is to break down the barriers
            that hold creators back, making it super easy for everyone to share
            their talents, reach people all over the world, and make a living
            doing what they love. We're here to build a community where
            creativity is limitless, and together, we can shape the future of
            The Creator Economy. Let's make something awesome happen.
          </p>
        </div>
      </div>
    </div>
  );
}
