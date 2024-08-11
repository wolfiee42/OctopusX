

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-screen-xl mx-auto flex justify-around">
        {/* left side */}
        <div>
          <h1>Subscribe to our newsletter</h1>
          <h1>Email address</h1>
          <input className="border-1 rounded-md px-4 py-2" type="email" name="email" id="email" placeholder="Your email address" />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         <button className="bg-black w-32 text-white rounded-md px-4 py-3"  type="submit">Submit</button>
        </div>
        <div>This is right</div>

      </div>
      
    </div>
  )
}

export default Footer
