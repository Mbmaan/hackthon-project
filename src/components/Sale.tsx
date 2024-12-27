
function Sale (){
    return(
         <div className="w-full h[300px] flex justify-center items-center mt-10">
            <div className="w-[80%] h-full ">
                {/* top side */}
<div>
    <span className="border-l-8 border-black-500 text-red-500 pb-5">Today's</span>
    <h2 className="text-4xl font-bold mt-5">Flash Sales</h2>
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
        <span className="font-bold">MGI Stylish Chair</span>
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
    )
}
export default Sale