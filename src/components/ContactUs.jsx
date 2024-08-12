import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function ContactUs() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="max-w-7xl mx-auto p-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-5 px-4">
        <div className="px-4 space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
          <div>
            <p className="text-xl">Have questions or need support?</p>
            <p className="text-xl">Get in touch with our team.</p>
          </div>
          <div>
            <p className="text-xl">x@octopusx.com</p>
            <div className="pt-2 flex gap-3 items-center">
              <Link to="https://x.com/OctopusXinc" target="_blank">
                <BsTwitterX className="text-2xl" />
              </Link>
              <Link to="https://www.youtube.com/@OctopusXHQ" target="_blank">
                <FaYoutube className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="px-4 space-y-4">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <label className="text-xl">Name</label>
              <Input type="text" placeholder="Your Name" {...register("name")} />
            </div>
            <div className="space-y-2">
              <label className="text-xl">Email</label>
              <Input type="email" placeholder="Your Email Address" {...register("email")} />
            </div>
            <div className="space-y-2">
              <label className="text-xl">Message</label>
              <Textarea placeholder="Type your message here." {...register("message")} />
            </div>
            <Button variant="primary" type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
