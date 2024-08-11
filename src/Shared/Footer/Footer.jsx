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
    <div className="bg-primary text-white pt-16">
      <div className="max-w-screen-xl mx-auto flex justify-between h-[624px]">
        {/* left side */}
        <div className="w-1/2">
          <div className="">
            <h1 className="font-bold text-lg">Subscribe to our newsletter</h1>
           <div className="mb-4 mt-6">
           <h1 className="text-lg">Email address</h1>
           <input className="w-2/3 rounded-md px-4 py-3" type="email" name="email" id="email" placeholder="Your email address" />
           </div>
            <button className="bg-black w-32 text-white rounded-md px-4 py-3" type="submit">Submit</button>
          </div>
          <div className="pt-14">
            <img className="rounded-md" src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=232,h=179,fit=crop/AE0vXBDGR7i4rb9l/we-accept-payment-sign-design-template-7822ce17e41fdaed6d48ce0249677617_screen-d95g479xRlUkBl10.jpg' alt="" />
          </div>
        </div>
        {/* right side */}
       <div className="w-1/2 text-lg">
       <div className="flex w-full justify-between gap-10">
          <div>
            <h1 className="font-bold text-lg pb-2">Important Links</h1>
            <div>
              {list.map((item, index) => (
                <ul className="underline py-1 " key={index}><a href={item.href}>{item.title}</a></ul>
              ))}
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg pb-2">Social</h1>
            <div className="flex gap-1 py-2">
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
