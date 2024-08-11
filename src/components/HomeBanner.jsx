import { useEffect } from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function HomeBanner() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="h-screen bg-[rgb(255,0,0)] text-white text-center flex flex-col gap-10 justify-center items-center">
      <h1
        className="max-w-4xl mx-auto text-6xl font-bold mb-4"
        data-aos="fade-up"
        data-aos-offset="100"
      >
        Innovating at the Heart of The Creator Economy
      </h1>
      <p
        className="max-w-3xl mx-auto text-[18px]"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="200"
      >
        <span className="font-bold">OctopusX</span> is a MediaTech startup that
        is building <span className="font-bold">The Creator Economy.</span>
        We are a team of content creators & creative people dedicated to
        producing high-quality content, innovating and developing digital
        products, assets, tools, and resources for fellow creators.
      </p>
      <Link to="/projects" target="_blank">
        <button
          className="bg-white text-black px-4 py-2 rounded mt-4"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="300"
        >
          Find Out More
        </button>
      </Link>
    </section>
  );
}
