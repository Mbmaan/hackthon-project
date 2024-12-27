import React from "react";
export const metadata = {
    title: "About Us"
  }
const page = () => {
    return (
        <div>
            <h1 className="text-2xl text-center border-l-2  bg-red-400 ">
"About us"
<br></br>
<br></br>
<br></br>

Elegant and beautifully designed, our decoration chairs add a touch of sophistication to any event.
<br></br>
<br></br>
Adorned with luxurious fabrics and intricate details, they blend style with comfort seamlessly.
<br></br>
<br></br>
Perfect for weddings, parties, or formal gatherings.
<br></br>
<br></br>
These chairs transform spaces into stunning venues.
            <div className='flex items-center space-x-2 mb-4 sm:mb-0'>
                    <img src='/chair3.png'
                    className='w-50 h-60 rounded-full'
                    /></div>
            </h1>

            <h2 className="text-2xl bg-orange-400 text-center border-l-2 bold mb-4">
            "Discover the latest in electronics at unbeatable prices! 
            From cutting-edge gadgets to reliable home appliances, 
            we bring you top-quality products designed to simplify and enhance your lifestyle.
             Shop now and experience innovation, performance, and style—all in one place. 
             Elevate your tech game today!"

             <div className='flex items-center space-x-4 mb-4 sm:mb-0'>
                    <img src='/hp3.jfif' 
                    className='w-50 h-60 rounded-full items-center' />

             </div>

            </h2>
        </div>

    )
    
}
export default page