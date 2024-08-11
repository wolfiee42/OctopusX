import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"


const ContactUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex gap-5 my-10">
      {/* left side */}
      <div className="w-1/2 py-4">
        <h1 className="text-5xl font-bold pb-10">Contact Us</h1>
        <p>Have questions or need support? Get <br /> in touch with our team.</p>
        <p className="pt-5">x@octopusx.com</p>
        <div className="flex gap-5 pt-2">
          <a href="https://x.com/OctopusXinc"><FaXTwitter className="hover:text-black text-2xl" /></a>
          <a href="https://x.com/OctopusXinc"><FaYoutube className="hover:text-black text-2xl" /></a>
        </div>
      </div>
      {/* right side */}
      <div className="w-1/2">
      <form className="flex flex-col gap-5" action="" method="post">
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
        </div>
      </form>
      </div>
    </div>
  )
}

export default ContactUs
