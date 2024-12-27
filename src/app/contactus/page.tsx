import React from "react";
export const metadata = {
    title: "Contact Us"
  }
const page = () => {
    return (
        <div>
            <h1 className="text-3xl text-center bold bg-yellow-300 space-y-50 space-x-3">
"Contact us"
<br></br>
<br></br>
<br></br>

<p>
Address: Governor IT Marque, Karachi.
<br></br>
<br></br>

Phone Number: +92123456789
<br></br>
<br></br>

Email Id: abcd@comfy.com
</p>

<div className='flex items-center space-x-2 mb-4 sm:mb-0'>
                    <img 
                    src='/chair 2.png'
                    className='w-50 h-50 rounded-full'
                    /></div>

            </h1>
        </div>
    )
}
export default page