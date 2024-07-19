export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-extrabold text-3xl lg:text-4xl tracking-tight md:-mb-4 text-center pt-20">
        Homemade Web Application,
        <br/>
        for fast deployment
      </h1>

      <p className="font-medium text-2xl text-center w-[650px] text-[20px] leading-[24px] z-20 absolute top-[45%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
      </p>

      <div className="font-light absolute bottom-0 top-[60%] z-30">
        <ul className="list-none">
          <li className="flex items-center"><span className="mr-2">✅</span> Lorem Ipsum</li>
          <li className="flex items-center"><span className="mr-2">✅</span> Lorem Ipsum</li>
          <li className="flex items-center"><span className="mr-2">✅</span> Lorem Ipsum</li>
        </ul>
      </div>

      <button className="bg-green-500 text-white font-semibold py-5 px-20 rounded-lg mt-4 absolute top-[80%]" style={{ borderRadius: '20px' }}>
          Get Lorem Ipsum
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
          <img src="/path/to/your/image.jpg" alt="Profile" className="w-16 h-16 rounded-full border-4 border-lime-500" />
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
          <img src="/path/to/your/image.jpg" alt="Profile" className="w-16 h-16 rounded-full border-4 border-lime-500" />
          <div>
            <h1 className="text-xl font-bold text-center">Mathhew B.</h1>
            <p className="text-base text-center">15.7k followers on X</p>
          </div>
        </div>
      </div>

      <button className="bg-violet-800 text-white font-semibold py-1 px-9 rounded-lg mt-4 absolute top-[300%]" style={{ borderRadius: '50px' }}>
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

    </main>
  );
}