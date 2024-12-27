function Bestsale (){
    return(
         <div className="w-full h[300px] flex justify-center items-center mt-10">
            <div className="w-[80%] h-full ">
                {/* top side */}
<div>
    <span className="sm:flex-col md:flex-row justify-between mt-7 border-l-8 border-black-500 text-red-500 pb-5">Hurry Up !</span>
    <h2 className="text-4xl font-bold mt-5"> Best Sale Items</h2>
</div>
{/* products */}
{/* container boxes */}
<div className="flex sm:flex-col md:flex-row justify-between mt-7">
    <div>
    <div className="w-[250px] h-[300px] bg-gray-300 flex justify-center items-center">
        <img src="/chair.png" alt="chair" width={170} height={128} />
    </div>
    {/*title */}
    <div className="flex flex-col">
        <span className="font-bold">Comfy cushion chair</span>
        <span className="font-bold">$820</span>
    </div>
    </div>
<div>
<div className="w-[250px] h-[300px] bg-gray-300 flex justify-center items-center">
    <img src="/chair3.png" alt="chair" width={169} height={126} />
    </div>
        {/*title */}
        <div className="flex flex-col">
        <span className="font-bold">Comfy stole chair</span>
        <span className="font-bold">$680</span>
    </div>
</div>
<div>
<div className="w-[250px] h-[300px] bg-gray-300 flex justify-center items-center">
    <img src="/chair 2.png" alt="chair" width={200} height={131} />
    </div>
            {/*title */}
            <div className="flex flex-col">
        <span className="font-bold">MGI Stylish Chair</span>
        <span className="font-bold">$1120</span>
    </div>
</div>
<div>
<div className="w-[250px] h-[300px] bg-gray-300 flex justify-center items-center">
    <img src="/chair4.png" alt="chair" width={170} height={112} />
    </div>
               {/*title */}
               <div className="flex flex-col">
        <span className="font-bold">Comfy Red chair</span>
        <span className="font-bold">$780</span>
    </div> 
</div>
</div>
            </div>
        </div>
    )
}
export default Bestsale