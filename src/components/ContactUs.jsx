"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/schema/Schema";

export default function ContactUs() {
  const form = useForm({
    resolver: zodResolver(contactSchema),
  });

  const { handleSubmit, formState: { errors } } = form;

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
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Full Name:</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Email Address:</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Your Email Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message:</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button variant="primary" type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
