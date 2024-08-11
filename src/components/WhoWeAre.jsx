import React from 'react'

const WhoWeAre = () => {
  return (
    <section className='container mx-auto max-w-[1200px] mt-10'>
     <div className='grid grid-cols-5 gap-6 grid-rows-2'>
     <div className='col-span-2 row-span-1'>
     <h1 className='text-4xl font-inter font-bold'>Who We Are</h1>
     <img className='w-[400px] h-[424px] mt-28' src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwzfHxzdGFydHVwfGVufDB8fHx8MTcwNjcxNDY3NHww&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=848" alt="" />
     </div>
     <div className='text-base font-inter font-normal space-y-8 mt-5 col-span-3'>
        <p >At <strong>OctopusX</strong>, we're more than just a startup; we're a team of innovators, storytellers, and dreamers. We started from a simple desire to help content creators shine. Through our cutting-edge  digital products, tools, assets, and resources, we open doors to endless creative possibilities.</p>
        <p >Our mission is to open up new opportunities for creativity, making it easier for creators to produce high-quality content, grow their audience, and monetize their work. We believe in the power of content  to change the world, and we're here to make creators more powerful then ever.</p>
        <p>The digital world keeps changing, and so do the hurdles for creators. At OctopusX, we're building a place where creativity and technology come together perfectly. We're focused on tackling the big problems—like earning money from content, making production process easier, or managing content and products. Our strategy covers everything, making sure every creator gets heard and has the space to thrive.</p>
        <button className='text-white bg-primary hover:bg-white border-primary hover:text-primary transition-colors duration-300 border-2 font-normal px-12 py-3 rounded-md'>Learn More</button>
     </div>
     <div></div>
     <div></div>
     <div className="w-[750px] h-[425px] relative">
        <img className="w-full h-full absolute -top-20" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTJDJTIwc2VydmljZXN8ZW58MHx8fHwxNzA2Njc5MTIzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=984&h=557" />
     </div>
     </div>
    </section>
  )
}

export default WhoWeAre
