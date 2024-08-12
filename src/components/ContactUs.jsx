import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
import { Button } from "./ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";




const validationSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }).regex(/^[A-Za-z\s]+$/, "Name should only contain letters and spaces."),
  email: z
    .string()
    .min(3, "Email is required")
    .email("Invalid email address"),
  message: z
    .string()
    .min(1, "Message is required")
    .refine((value) => !/<.*?>/.test(value), "Scripting tags are not allowed"),
})

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data) => {
    
    console.log(errors, data);
  };
  return (
    <div className="lg:max-w-screen-xl px-5 lg:px-10  md:max-w-screen-md sm:max-w-screen-sm  mx-auto flex flex-col md:flex-row  gap-5 my-10">
      {/* left side */}
      <div className="md:w-1/2 py-4">
        <h1 className="text-5xl font-bold pb-10">Contact Us</h1>
        <p>Have questions or need support? Get <br /> in touch with our team.</p>
        <p className="pt-5">x@octopusx.com</p>
        <div className="flex gap-5 pt-2">
          <a href="https://x.com/OctopusXinc"><FaXTwitter className="hover:text-black text-2xl" /></a>
          <a href="https://x.com/OctopusXinc"><FaYoutube className="hover:text-black text-2xl" /></a>
        </div>
      </div>
      {/* right side contact form */}
      <div className="md:w-1/2">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* input 1 */}
        <div className="flex flex-col gap-2">
        <Label htmlFor="text">Name</Label>
        <Input {...register("name")} type="text" placeholder="Your name"></Input>
        {errors.name && <p className="text-red-600 font-medium text-sm">{errors.name.message}</p>}
        </div>
        {/* input 2 */}
         <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
         <Input {...register("email")} type="email" placeholder="Your email" />
         {errors.email && <p className="text-red-600 font-medium text-sm">{errors.email.message}</p>}
         </div>

         {/* input 3 */}
          <div>
          <Label htmlFor="email">Message</Label>
          <Textarea {...register("message")} placeholder="Type your message here." />
          {errors.message && <p className="text-red-600 font-medium text-sm">{errors.message.message}</p>}
          </div>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      {/* <form className="flex flex-col gap-5" action="" method="post">
        <div className="flex flex-col">
          <label className="" htmlFor="name">Name</label>
          <input className="border border-slate-400 rounded-md p-4" type="text" name="name" id="name" placeholder="Your name" />
        </div>
        <div className="flex flex-col">
          <label className="" htmlFor="name">Your email*</label>
          <input className="border border-slate-400 rounded-md p-4" type="email" name="email" id="email" placeholder="Your name" />
        </div>
        <div className="flex flex-col">
          <label className="" htmlFor="name">Message*</label>
          <textarea className="border border-slate-400 rounded-md p-4" name="message" id="message" placeholder="Enter your message"></textarea>
        </div>
        <div>
          <button className="bg-primary w-32 text-white rounded-md px-4 py-3" type="submit">Submit</button>
          <Button>Submit</Button>
        </div>
      </form> */}
      </div>
    </div>
  )
}

export default ContactUs
