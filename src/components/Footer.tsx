import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div>
<footer className="bg-blue-600 py-6 px-10 text-white flex flex-col justify-around">
<div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
    <h3 className="text-xl font-bold mb-4">Exclusive</h3>
    <ul className="space-y-2 text-lg">
        <li>Subscribe</li>
        <li>Get 10% Off on your first Order</li>
        <button> Enter your email address </button>
    </ul>
</div>
<div>
<h3 className="text-xl font-bold mb-4">Quick Link</h3>
    <ul className="space-y-2 text-lg">
        <li>Private Policy</li>
        <li>Terms of Use</li>
        <li>FAQ</li>  
        <li>Contact</li>
    </ul>
</div>

<div>
<h3 className="text-xl font-bold mb-4">Support</h3>
    <ul className="space-y-2 text-lg">
        <li>xyz road,khi</li>
        <li>www.Google.com</li>
    </ul>
</div>
<div>
<h3 className="text-xl font-bold mb-4">Social Links</h3>
<ul className="space-y-2 text-lg">
<li>facebook page</li>
<li>instagram page</li>
<li>Tweeter page</li>
</ul>

<div>
</div>
</div>
</div>

</footer>
        </div>
    )
}
export default Footer