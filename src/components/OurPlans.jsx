import React from 'react'

const OurPlans = () => {
  return (
    <section className='container mx-auto max-w-[1200px] flex gap-x-6 lg:flex-row flex-col lg:px-0 px-5'>
      <div className='hover:shadow-2xl shadow-slate-500 lg:p-4 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 group'>
        <img className='lg:h-[357px] group-hover:scale-105 transition-all duration-300 group-hover:rounded-md'  src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMXx8c3RhcnR1cHxlbnwwfHx8fDE3MDY3MTQ2NzR8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&h=1080'/>
        <h3 className='font-inter font-bold text-2xl text-black my-3'>Our Big Plan</h3>
        <div className='font-inter font-normal text-lg text-secondry '>
        <p>Our Present & Future</p>
        <p className='mt-3'>Mi Rayhan Chowdhury</p> 
        <p>4/1/20242 . min read</p>   
        </div>
        
      </div>
      <div className='hover:shadow-2xl shadow-slate-500 lg:p-4 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 group'>
        <img className='lg:h-[357px] group-hover:scale-105 transition-all duration-300 group-hover:rounded-md' src='https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxNHx8c3RhcnR1cHxlbnwwfHx8fDE3MDY3MTQ2NzR8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&h=1080'/>
        <p className='font-normal text-lg font-inter text-secondry my-3'>THE CREATOR ECONOMY</p>  
        <h3 className='text-2xl font-inter font-bold mb-3'>The Creator Economy | Everything in-depth</h3>
        <p className='font-normal text-lg font-inter text-secondry'>1/1/20242 min read</p>      
      </div>
    </section>
  )
}

export default OurPlans
7