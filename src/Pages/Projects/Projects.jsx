export default function Projects() {
  return (
    <div className="w-full px-10 md:px-10 lg:px-0 md:w-[max-w-5xl] lg:max-w-7xl mx-auto h-full py-10">
      <h1 className="mb-5 py-4 text-[48px] font-bold">Projects</h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mx-auto">
        <div className="w-full md:w-[600px]">
          <h5 className="text-2xl font-bold">Featured Product</h5>
          <p className="text-base my-8">
            <span className="font-bold">ytshops</span> — The Ultimate & Free
            Marketplace for Content Creators - Create Without Limits, Get
            millions of stock designs, photos, videos, tools, and resources, all
            in one platform - for FREE.
          </p>
          <p className="font-bold text-xl underline mt-5">Read More</p>
        </div>
        <div>
          <img
            className="w-full h-full"
            src="https://i.ibb.co/BzGSgzw/p1.png"
            alt=""
          />
        </div>
      </div>
      <div className="my-32 flex flex-col md:flex-row justify-between items-center gap-10 mx-auto">
        <div className="w-full md:w-[600px]">
          <h5 className="text-2xl font-bold">Featured Product</h5>
          <p className="text-base my-8">
            Muskonomy is the authoritative platform dedicated to <br />{" "}
            demystifying Elon Musk's ventures, offering in-depth analysis on{" "}
            <br /> his global economic impact and innovations.
          </p>
          <p className="font-bold text-xl underline mt-5">Read More</p>
        </div>
        <div>
          <img
            className="w-full md:w-[630px] h-full md:h-[280px]"
            src="https://i.ibb.co/pJVz9bY/Screenshot-2024-08-14-at-15-53-12.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
