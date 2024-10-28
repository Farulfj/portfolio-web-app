import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="flex-flex-wrap">
    <div className="w-3/5">
        <h1 className="mt-24 text-6xl font-sans md:Apple Color Emoji">Hi, </h1>
        <h1 className=" text-6xl font-sans md:Apple Color Emoji text-blue-600/100 " > I am Farul Fahrijal </h1>
        <h1 className=" text-6xl font-sans md:Apple Color Emoji" >UI/UX Desaigner</h1>
     </div>
        <div className="w-2/5">
        <Image
          src="/"
          alt=""
          width={10}
          height={10}
          priority
        />
            </div>
     
        <div>
          <button className=" mt-20 rounded-lg bg-blue-500 w-48 min-h-12 text-white" >Get Started</button>
        </div>
      </div>
    </>
  );
}