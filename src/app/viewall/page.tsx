import React from "react";
export const metadata = {
    title: "Contact Us"
  }
const page = () => {
    return (
        <div className="bg-red-400">
            <h1 className="text-3xl text-center bold bg-red-400 space-y-50 space-x-3">
"Feel Freeee to select... Here you will get anything you ever wanted !!"

<div className='flex items-center space-x-2 mb-4 sm:mb-0'>
                   
                    </div>

            </h1>
            <div>
            <div className="bg-green-400 w-full h-full flex justify-center items-center mt-10">
            <div className="w-[80%] h-full ">
                {/* top side */}
<div>
    <h2 className="text-4xl font-bold text-center mt-5">Shop Here</h2>
</div>
{/* products */}
{/* container boxes */}
<div className="flex sm:flex-col md:flex-row justify-between mt-7">
    <div>
    <div className="w-[250px] h-[300px] bg-gray-300 flex justify-center items-center">
        <img src="/hp1.png" alt="headphones" width={170} height={128} />
    </div>
    {/*title */}
    <div className="flex flex-col">
        <span className="font-bold">HAVIT headphone</span>
        <span className="font-bold">$120</span>
    </div>
    </div>
<div>
<div className="w-[250px] h-[300px] bg-gray-300 flex justify-center items-center">
    <img src="/hp2.png" alt="headphones" width={169} height={126} />
    </div>
        {/*title */}
        <div className="flex flex-col">
        <span className="font-bold">Samsung headphone</span>
        <span className="font-bold">$180</span>
    </div>
</div>
<div>
<div className="w-[250px] h-[300px] bg-gray-300 flex justify-center items-center">
    <img src="/chair5.png" alt="chair" width={200} height={131} />
    </div>
            {/*title */}
            <div className="flex flex-col">
        <span className="font-bold">Comfy Stylish Chair</span>
        <span className="font-bold">$400</span>
    </div>
</div>
<div>
<div className="w-[250px] h-[300px] bg-gray-300 flex justify-center items-center">
    <img src="/w1.png" alt="watch" width={170} height={112} />
    </div>
               {/*title */}
               <div className="flex flex-col">
        <span className="font-bold">MT Watch (Digital)</span>
        <span className="font-bold">$80</span>
    </div>  
    </div>
    
</div>
</div>

</div>
</div>
  
        </div>
         
         
    )
}
export default page