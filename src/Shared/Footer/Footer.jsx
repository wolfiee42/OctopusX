import { FaLinkedinIn } from "react-icons/fa";
import {  FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const list = [{
    href: '/',
    title: 'Home'
  },
  {
    href: '/',
    title: 'About Us'
  },
  {
    href: '/',
    title: 'Contact Us'
  },
  {
    href: '/',
    title: 'Projects'
  },
  {
    href: '/',
    title: 'Privacy Policy'
  },
  {
    href: '/',
    title: 'Terms & Conditions'
  },
  {
    href: '/',
    title: 'Refund Policy'
  },
  ]
  return (
    <div className="bg-primary text-white md:pt-16 pt-10">
      <div className="px-5 lg:max-w-screen-xl md:max-w-screen-md md:px-8 sm:max-w-screen-sm mx-auto flex flex-col md:flex-row gap-5 h-[600px]">
        {/* left side */}
        <div className="md:w-1/2 flex flex-row gap-5 md:flex-col">
          <div className="">
            <h1 className="font-bold md:text-lg">Subscribe to our newsletter</h1>
           <div className="mb-4 mt-6">
           <h1 className="md:text-lg">Email address</h1>
           <input className="md:w-2/3 w-full rounded-md px-4 py-3" type="email" name="email" id="email" placeholder="Your email address" />
           </div>
            <button className="bg-black md:w-32 text-white rounded-md px-4 py-3" type="submit">Submit</button>
          </div>
          <div className="flex items-center md:pt-14">
            <img className="rounded-md" src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=232,h=179,fit=crop/AE0vXBDGR7i4rb9l/we-accept-payment-sign-design-template-7822ce17e41fdaed6d48ce0249677617_screen-d95g479xRlUkBl10.jpg' alt="" />
          </div>
        </div>
        {/* right side */}
       <div className="md:w-1/2 md:text-lg">
       <div className="flex gap-10 mt-5">
          <div className="w-1/2">
            <h1 className="font-bold text-lg pb-2">Important Links</h1>
            <div>
              {list.map((item, index) => (
                <ul className="underline py-1 " key={index}><a href={item.href}>{item.title}</a></ul>
              ))}
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="font-bold text-lg pb-2">Social</h1>
            <div className="flex gap-2 py-2">
              <a href="https://x.com/OctopusXinc"><FaXTwitter className="hover:text-black text-2xl" /></a>
              <a href="https://x.com/OctopusXinc"><FaYoutube className="hover:text-black text-2xl" /></a>
              <a href="https://x.com/OctopusXinc"><FaLinkedinIn className="hover:text-black text-2xl" /></a>
            </div>
            <p className="py-2">x@octopusx.io</p>
            <p className="py-2">Call us: +13072892299</p>
            <p>Address: 30 N Gould ST STE R,<br /> Sheridan, Wyoming - 82801, United States.</p>
          </div>

        </div>
       </div>

      </div>

    </div>
  )
}

export default Footer
