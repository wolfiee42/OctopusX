import { Button } from "@/components/ui/button";

export default function ContactUs() {
  return (
    <section className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <div>
          <h1>Contact Us</h1>
          <p>Have questions or need support?</p>
          <p>Get in touch with out team.</p>
        </div>
        <div>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <Button>Click me</Button>
    </section>
  );
}
