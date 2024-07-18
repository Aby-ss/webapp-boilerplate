export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight md:-mb-4 text-center pt-20">
        Homemade Web Application,
        <br/>
        for fast deployment
      </h1>

      <p className="font-medium text-2xl text-center w-[650px] text-[20px] leading-[24px] z-20 absolute top-[35%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
      </p>

      <div className="font-light absolute bottom-0 top-[50%] z-30">
        <ul className="list-none">
          <li className="flex items-center"><span className="mr-2">✅</span> Lorem Ipsum</li>
          <li className="flex items-center"><span className="mr-2">✅</span> Lorem Ipsum</li>
          <li className="flex items-center"><span className="mr-2">✅</span> Lorem Ipsum</li>
        </ul>
      </div>
    </main>
  );
}