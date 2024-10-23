
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Image from 'next/image';
export default function Home() {
  return (
    
    <div>
      <Header />
      <Hero /> 
      
    <section 
    id="hot-items"
    className="mt-16 bg-purple-200  ">
      <h2 
      className="text-4xl font-bold text-blue-500 text-center mb-12">Hot Items
      </h2>
      <div className="flex flex-row justify-center space-x-8">
          {/* Item 1 */}
          <div 
             className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Image
              src="/b-2.jpg"
              alt="Hot Burger"
              width={500}
              height={300}
              className="object-cover rounded-lg"
            />
            <h3 
            className="text-2xl font-semibold text-blue-600 mt-4">Hot Burger
            </h3>
            <p className="text-gray-600 mt-2">
              A spicy and juicy burger with our special sauce.
            </p>
          </div>
                {/* Item 2 */}
          <div 
           className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Image
              src="/fries.jpg"
              alt=" Fries"
              width={500}
              height={300}
              className="object-cover rounded-lg"
            />
            <h3 
            className="text-2xl font-semibold text-blue-600 mt-4">Crispy Fries
            </h3>
            <p className="text-gray-600 mt-2">
              Crispy fries loaded with melted cheese and herbs.
            </p>
          </div>
            {/* Item 3 */}
            <div 
            className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Image
              src="/pizza1.jpg"
              alt="Special Shake"
              width={500}
              height={300}
              className="object-cover rounded-lg"
            />
            <h3 
              className="text-2xl font-semibold text-blue-600 mt-4">Special Pizza
            </h3>
            <p className="text-gray-600 mt-2">
              Best pizza share with your friends.
            </p>
          </div>
      </div>
      </section>
      
      
      <section
        id="contact"  
         className="bg-yellow-200 p-8 mt-16">
      <h2 
      className="text-4xl font-bold text-blue-500 text-center mb-12">Contact Us
      </h2>
      
      <div 
         className="flex flex-col md:flex-row justify-center space-y-12 md:space-y-0 md:space-x-8">
        
        {/* Contact Information */}
        <div className="w-full md:w-1/2  p-6 rounded-lg shadow-lg bg-orange-400">
          <h3 
          className="text-2xl font-semibold text-blue-600 ">Get In Touch
          </h3>
          <p className="text-gray-800 mt-4">
          Address: 123 Burger Street, Taste City<br/>
          Phone: (123) 456-7890<br/>
          Email: info@worldoftaste.com<br/>
          Follow us on social media for updates and special offers. <br />
            We're here to answer your questions and help you with anything you need. 
          </p>
          </div>  
      </div>
      </section>

          
      <Footer />
    </div>
  );
}
