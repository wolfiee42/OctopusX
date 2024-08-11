import { useEffect } from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function HomeBanner() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="h-[calc(100vh-112px)] overflow-hidden w-full px-5 bg-[rgb(255,0,0)] text-white text-center flex flex-col gap-5 md:gap-10 justify-center items-center">
      <h1
        className="max-w-4xl mx-auto text-2xl md:text-6xl font-bold mb-4"
        data-aos="fade-up"
        data-aos-offset="100"
      >
        Innovating at the Heart of The Creator Economy
      </h1>
      <p
        className="max-w-3xl mx-auto text-sm md:text-[18px] leading-relaxed"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="100"
      >
        <span className="font-bold">OctopusX</span> is a MediaTech startup that
        is building <span className="font-bold">The Creator Economy.</span>
        We are a team of content creators & creative people dedicated to
        producing high-quality content, innovating and developing digital
        products, assets, tools, and resources for fellow creators.
      </p>
      <Link to="/projects" target="_blank">
        <button
          className="bg-white text-black hover:text-[rgb(255,0,0)] px-2 md:px-4 py-2 rounded md:mt-4"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="200"
        >
          Find Out More
        </button>
      </Link>
    </section>
  );
}
