import React from 'react'
import Image from 'next/image';

export default function Hero() {
  return (
  <section 
    className="flex items-centre justify-center space-x-8 p-10   bg-sky-300">

<div className='w-1/2' >
    <Image src='/b-3.webp'
    alt='burger'
    width={600}
    height={600}
    className='object-cover rounded-lg'
/> 
</div>  

      <div className="w-1/2" mt-4>
            <h1 className="text-4xl font-bold text-orange-500 ">
                Welcome to The World of Tasty Food 
            </h1>
            <h1 className="text-3xl font-bold text-yellow-500 ">
             Delicious Burger
           </h1>
           <p className='text-2xl font-semibold text-blue-700'>
            Eat fresh, stay healthy!
           </p>
        <p 
           className="text-lg text-slate-900 mt-2 ">
          - Freshly made burgers with locally sourced ingredients.<br/>
          - A variety of delicious sides including fries, salads, and shakes.<br/>
          - Vegetarian and vegan options available.<br/>
          - Special discounts on weekdays and weekends.<br/>
          - A comfortable dining experience for you and your family.
        </p>
        <h2 
           className="text-2xl font-semibold text-orange-500 mt-6">Contact Us
        </h2>
        <p className="text-lg text-slate-900 mt-2 font-serif">
          Address: 123 Burger Street, Taste City<br/>
          Phone: (123) 456-7890<br/>
          Email: info@worldoftaste.com<br/>
          Follow us on social media for updates and special offers.
        </p>
      </div>
      
      
  </section>
  
  
  
  
  )
}
