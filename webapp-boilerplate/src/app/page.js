"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate opacity based on scroll position (change 600 to whatever max scroll position you want)
  const navbarOpacity = Math.max(0.3, 1 - scrollPosition / 600);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <nav className="bg-gray-50 p-4 fixed top-0 left-0 w-full z-10" style={{ opacity: navbarOpacity }}>
        <div className="container mx-auto flex items-center justify-center relative">
          <div className="absolute left-0 text-black font-extrabold text-xl">
            Webapp Boilerplate
          </div>
          <ul className="flex space-x-10">
            <li>
              <a href="#home" className="font-bold hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="font-bold hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#pricing" className="font-bold hover:text-gray-400">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="font-bold hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <h1 className="font-extrabold text-5xl lg:text-5xl tracking-tight md:-mb-4 text-center pt-20">
        Homemade Web Application,
        <br/>
        for fast deployment
      </h1>

      <p className="font-medium text-2xl text-center w-[650px] text-[20px] leading-[24px] absolute top-[45%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
      </p>

      <div className="font-light absolute bottom-0 top-[60%]">
        <ul className="list-none">
          <li className="flex items-center"><span className="mr-2">✅</span> Lorem Ipsum</li>
          <li className="flex items-center"><span className="mr-2">✅</span> Lorem Ipsum</li>
          <li className="flex items-center"><span className="mr-2">✅</span> Lorem Ipsum</li>
        </ul>
      </div>

      <button className="bg-green-500 text-white font-semibold py-4 px-20 rounded-lg mt-4 absolute top-[80%]" style={{ borderRadius: '20px' }}>
          Get Webapp Boilerplate
      </button>

      <h1 className="font-extrabold text-5xl lg:text-5xl tracking-tight text-center absolute top-[100%]">
        Tired of wasting time,
        <br/>
        writing TailwindCSS classes ?
      </h1>

      <div className="flex space-x-4 mt-8 absolute top-[120%]">
        <div className="bg-red-200 p-10 rounded-lg">
            <h2 className="text-xl mb-2 text-center font-bold text-red-700">Making a web app without a boilerplate</h2>
            <ul className="list-none text-left">
              <li className="flex items-center font-medium"><span className="mr-2">❌</span> Positioning items manually</li>
              <li className="flex items-center font-medium"><span className="mr-2">❌</span> Procrastinating creating new design</li>
              <li className="flex items-center font-medium"><span className="mr-2">❌</span> Constantly changing layouts</li>
            </ul>
          </div>
          <div className="bg-green-200 p-10 rounded-lg">
            <h2 className="text-xl mb-2 text-center font-bold text-green-700">Making a web app + Boilerplate</h2>
            <ul className="list-none text-left">
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> Fast deployment and shipping</li>
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> Focus on creating the web application features</li>
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> A customisable colour palette and texts</li>
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> A classic design pattern</li>
            </ul>
          </div>
      </div>

      <div className="flex flex-col items-center space-y-4 mt-8 absolute top-[160%]">
        <p className="text-center">⭐⭐⭐⭐⭐</p>
        <p className="text-center font-medium">
          <span className="bg-yellow-200 font-bold">I don't want to spend more than an hour designing and coding a new website design every single time,</span>
          <br/>
          So I now use a website boilerplate to code my website with 2x work efficiency
          <br/>
          With this webapp boilerplate, I can now finish my tasks of creating a landing page in a few hours
          <br/>
          and focus on creating the features of web app for maximum customer retention
        </p>
        <div className="flex items-center space-x-4 mt-4">
          <img src="/path/to/your/image.jpg" alt="Profile" className="w-16 h-16 rounded-full border-4 border-emerald-500" />
          <div>
            <h1 className="text-xl font-bold text-center">R. Andrew</h1>
            <p className="text-base text-center">21.3k followers on X</p>
          </div>
        </div>
      </div>

      <h1 className="font-extrabold text-5xl lg:text-5xl tracking-tight text-center absolute top-[200%]">
        10x your productivity for every project onwards
      </h1>

      <section className="w-full flex flex-col items-start absolute top-[215%] left-[15%] space-y-8">
        <div>
          <h2 className="text-[18px] font-bold mb-2 w-[450px]">1️⃣ Download the source code from  the Git repo</h2>
          <p className="text-[14px] font-medium w-[550px]">Either clone or download the zip file of the source code into your system</p>
        </div>
        <div>
          <h2 className="text-[18px] font-bold mb-2 w-[450px]">2️⃣ Make the necessary changes to accomodate your own product / app</h2>
          <p className="text-[14px] font-medium w-[550px]">Change the site's name, description and other content to better suit your own project and system</p>
        </div>
        <div>
          <h2 className="text-[18px] font-bold mb-2 w-[450px]">3️⃣ Upload the code to a server / domain with the changes</h2>
          <p className="text-[14px] font-medium w-[550px]">After making the changes, upload your code to the domain or server of your choice with a new backend</p>
        </div>
      </section>

      <div className="flex flex-col items-center space-y-4 mt-8 absolute top-[260%]">
        <p className="text-center">⭐⭐⭐⭐⭐</p>
        <p className="text-center font-medium">
          I added this web app boilerplate to my work folder and,
          <br/>
          <span className="bg-yellow-200 font-bold">now I just don't have to worry about designing a new style every time, I just make a few changes</span>
          <br/>
          and have a great looking web app landing page ready in a few hours
        </p>
        <div className="flex items-center space-x-4 mt-4">
          <img src="/path/to/your/image.jpg" alt="Profile" className="w-16 h-16 rounded-full border-4 border-emerald-500" />
          <div>
            <h1 className="text-xl font-bold text-center">Mathhew B.</h1>
            <p className="text-base text-center">15.7k followers on X</p>
          </div>
        </div>
      </div>

      <button className="bg-violet-800 text-white font-semibold py-1 px-9 rounded-lg mt-4 absolute top-[300%] animate-fade" style={{ borderRadius: '50px' }}>
        ✨ Launch discount — $50 OFF ✨
      </button>

      <h1 className="font-extrabold text-5xl lg:text-5xl tracking-tight text-center absolute top-[310%]">
        Stop wasting hours
        <br/>
        managing designs
      </h1>

      <p className="font-semibold text-stone-900 text-base text-center absolute top-[327%]">
        Ditch wasting hours on design code, messing around with CSS classes,
        <br/>
        spending countless hours thinking of a new section style. 2-min download setup.
      </p>

      <button className="bg-green-500 text-white font-semibold py-4 px-20 rounded-lg mt-4 absolute top-[340%]" style={{ borderRadius: '20px' }}>
          Get Webapp Boilerplate
      </button>

      <div className="absolute top-[350%]">
        <div className="flex space-x-8 mt-8">
          <div className="bg-slate-50 p-6 rounded-lg relative">
          <h1 className="text-4xl font-extrabold mb-4 tracking-tight">
            <span className="line-through text-[15px] font-bold text-slate-600">$99</span> $49 <span className="text-[15px] font-bold text-slate-600">USD</span>
          </h1>
            <ul className="list-none text-left mb-4">
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> Fast deployment and shipping</li>
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> Focus on creating the web application features</li>
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> A customisable colour palette and texts</li>
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> A classic design pattern</li>
            </ul>
            <button className="bg-green-500 text-white font-semibold py-4 px-20 rounded-lg mb-4" style={{ borderRadius: '20px' }}>
              Get Webapp Boilerplate
            </button>
            <p className="text-center w-full font-bold text-[14px] text-slate-600">
              One-time purchase, then it's <span className="underline">yours forever</span>
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg relative border-[2.5px] border-emerald-500">
            <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2">
              <button className="bg-emerald-500 text-[12px] text-white font-semibold py-1 px-5 rounded-lg" style={{ borderRadius: '50px' }}>
                BUSY FOUNDERS' CHOICE
              </button>
            </div>
            <h1 className="text-4xl font-extrabold mb-4 tracking-tight">
              <span className="line-through text-[15px] font-bold text-slate-600">$119</span> $69 <span className="text-[15px] font-bol text-slate-600d">USD</span>
            </h1>
            <ul className="list-none text-left mb-4">
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> Fast deployment and shipping</li>
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> Focus on creating the web application features</li>
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> A customisable colour palette and texts</li>
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> A classic design pattern</li>
            </ul>
            <button className="bg-green-500 text-white font-semibold py-4 px-20 rounded-lg mb-4" style={{ borderRadius: '20px' }}>
              Get Webapp Boilerplate
            </button>
            <p className="text-center w-full font-bold text-[14px] text-slate-600">
              One-time purchase, then it's <span className="underline">yours forever</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 mt-8 absolute top-[400%]">
        <p className="text-center">⭐⭐⭐⭐⭐</p>
        <p className="text-center font-medium">
          Before using this webapp boileprlate I was spending more than what I wanted to spend
          <br/>
          designing my websites for my SaaS products. but now,<span className="bg-yellow-200 font-bold"> I only have to code for about 2 hours</span>
          <br/>
          and have a great looking web app landing page ready with all the necessary features
        </p>
        <div className="flex items-center space-x-4 mt-4">
          <img src="/path/to/your/image.jpg" alt="Profile" className="w-16 h-16 rounded-full border-4 border-emerald-500" />
          <div>
            <h1 className="text-xl font-bold text-center">Richard Brown</h1>
            <p className="text-base text-center">85.4k followers on X</p>
          </div>
        </div>
      </div>

      <section className="flex flex-col md:flex-row p-8 absolute top-[435%]">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-4 ml-6">Frequently Asked Questions</h1>
        </div>

        <div className="md:w-1/2">
          <div className="border-t border-b border-gray-300 py-4 mb-4">
            <h2 className="text-xl font-extrabold mb-2 text-green-600">What is your return policy?</h2>
            <p className="text-base font-bold text-slate-900">
              Our return policy allows returns within 30 days of purchase. Items must be in original condition and packaging.
            </p>
          </div>
          <div className="border-b border-gray-300 py-4 mb-4">
            <h2 className="text-xl font-extrabold mb-2 text-green-600">How do I contact support?</h2>
            <p className="text-base font-bold text-slate-900">
              You can contact our support team via email at support@example.com or through our contact form on the website.
            </p>
          </div>
          <div className="border-b border-gray-300 py-4 mb-4">
            <h2 className="text-xl font-extrabold mb-2 text-green-600">Do you offer international shipping?</h2>
            <p className="text-base font-bold text-slate-900">
              Yes, we offer international shipping to most countries. Shipping costs will be calculated at checkout.
            </p>
          </div>
          <div className="border-b border-gray-300 py-4 mb-4">
            <h2 className="text-xl font-extrabold mb-2 text-green-600">Do you offer international shipping?</h2>
            <p className="text-base font-bold text-slate-900">
              Yes, we offer international shipping to most countries. Shipping costs will be calculated at checkout.
            </p>
          </div>
          <div className="border-b border-gray-300 py-4 mb-4">
            <h2 className="text-xl font-extrabold mb-2 text-green-600">Do you offer international shipping?</h2>
            <p className="text-base font-bold text-slate-900">
              Yes, we offer international shipping to most countries. Shipping costs will be calculated at checkout.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center space-y-4 mt-8 absolute top-[530%]">
        <p className="text-center">⭐⭐⭐⭐⭐</p>
        <p className="text-center font-medium">
          <span className="bg-yellow-200 font-bold">I don't want to spend more than an hour designing and coding a new website design every single time,</span>
          <br/>
          So I now use a website boilerplate to code my website with 2x work efficiency
          <br/>
          With this webapp boilerplate, I can now finish my tasks of creating a landing page in a few hours
          <br/>
          and focus on creating the features of web app for maximum <span className="text-blue-600 font-bold">@customer</span> retention
        </p>
        <div className="flex items-center space-x-4 mt-4">
          <img src="/path/to/your/image.jpg" alt="Profile" className="w-16 h-16 rounded-full border-4 border-emerald-500" />
          <div>
            <h1 className="text-xl font-bold text-center">R. Andrew</h1>
            <p className="text-base text-center">21.3k followers on X</p>
          </div>
        </div>
      </div>

      <section className="bg-slate-300 py-8 absolute top-[580%]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Links & Contact</h2>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Links</h3>
                <ul className="list-none space-y-2">
                  <li>
                    <a href="#home" className="text-black hover:text-gray-600">Home</a>
                  </li>
                  <li>
                    <a href="#about" className="text-black hover:text-gray-600">About</a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-black hover:text-gray-600">Pricing</a>
                  </li>
                  <li>
                    <a href="#contact" className="text-black hover:text-gray-600">Contact</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Contact</h3>
                <p className="text-lg">
                  If you have any questions or need support, please reach out to us at <a href="mailto:support@example.com" className="text-blue-600 hover:underline">support@example.com</a>.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <img src="/path/to/your/profile-pic.jpg" alt="Developer Picture" className="w-8 h-8 rounded-full mr-2" />
            <p className="text-center text-sm text-gray-700">
              Made with ❤️ by [Your Name] - The Developer
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}