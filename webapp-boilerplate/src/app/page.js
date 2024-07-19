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
        <p className="text-center">
          <span className="bg-yellow-200 font-medium">I don't want to spend more than an hour designing and coding a new website design every single time,</span>
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

    </main>
  );
}