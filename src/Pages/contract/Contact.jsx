import React from 'react'
import { FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod";
import { useForm } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
// import { i } from 'vite/dist/node/types.d-aGj9QkWt';


const Contact = () => {
  const formSchema = z.object({
    name: z.string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .regex(/^[a-zA-Z\s.]+$/, { message: "Name can only contain letters, spaces, hyphens, and apostrophes" }),
  email: z.string()
    .email({ message: "Invalid email address" })
    .regex(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, { message: "Invalid email address" }),
  message: z.string().min(1,{ message: "Please enter a message" }).refine((value) => /^[a-zA-Z\s.]+$/.test(value), "Invalid Message"),
  });
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className='container max-w-[1200px] mx-auto flex lg:flex-row flex-col justify-between py-10'>
        <div>
        <h1 className='text-5xl font-bold font-inter '>Contact Us</h1>
        <p className='text-base font-normal font-inter mt-4'>Have questions or need support? <br/> Get in touch with our team.</p>
        <p className='text-base font-normal font-inter mt-4'>x@octopusx.com</p>
        <div className='flex gap-x-4 text-2xl mt-2'>
            <FaXTwitter/>
            <FaYoutube/>
        </div>
        </div>
        <div className='lg:w-1/2 font-inter'>
        <Form>
  
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div>
        <Label className="text-xl font-normal" htmlFor="name">Name</Label>
        <Input className="outline-none mt-2" type="text" placeholder="Enter your name" id="name" {...register("name")} />
        {errors.name && <p className="text-red-500 ">{errors.name.message}</p>}
      </div>

      <div>
        <Label className="text-xl font-normal" htmlFor="email">Email</Label>
        <Input className="outline-none mt-2"  placeholder="Enter your email" id="email" {...register("email")} />
        {errors.email && <p className="text-red-500 ">{errors.email.message}</p>}
      </div>

      <div>
        <Label className="text-xl font-normal" htmlFor="message">Message</Label>
        <Textarea id="message" className="  mt-2" rows={5} placeholder="Enter your message" type="text" {...register("message")} />
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
      </div>

      <Button className="px-5 py-3 mt-3" type="submit">Submit</Button>
    </form>
        </Form>
        </div>
    </section>
  )
}

export default Contact
