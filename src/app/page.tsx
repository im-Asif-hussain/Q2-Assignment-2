import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="h-[calc(100vh-80px)] flex flex-col justify-around items-center gap-2 z-0">

<div className=" md:w-2/3 space-y-4 p-[40px] ">
<h5 className="text-center font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-left;
">Welcome</h5>
<h1 className="font-montserrat text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center">Selling on the <br /> Internet like a Pro</h1>
<p className="text-center">
We know how large objects will act, but things on a <br /> small scale just do not act that way.</p>

<div className="flex md:gap-3 gap-1 justify-center">
  <Link href={'/'} className="bg-[#23A6F0] px-3 md:px-[40px] py-[15px] rounded-[5px] hover:bg-[#23a5f0e8] transition-all duration-100">Get Quote Now</Link>
  <Link href={'/'} className="text-[#23A6F0] border border-[#23A6F0] px-3 md:px-[40px] py-[15px] rounded-[5px] font-bold">Learn More</Link>
</div>
</div>


{/* bottom div */}
<div className="flex gap-3 rounded-sm md:flex-row flex-col">

<div className="space-y-3 bg-[#ffff] text-[#252B42] py-[35px] px-[30px] rounded-sm">
<Image src={'/img1.png'} alt="Image" width={80} height={80}/>
<h1>TailwindCss Course</h1>
<p className="h-1 w-[10%] bg-red-500"></p>
<p>React.js is a powerful library for building user interfaces, and when combined with Tailwind CSS, Next.js, and TypeScript, it creates an efficient development stack.</p>
</div>

<div className="space-y-3 bg-[#ffff] text-[#252B42] py-[35px] px-[30px] rounded-sm">
<Image src={'/img3.png'} alt="Image" width={80} height={80}/>
<h1>Next.js Course</h1>
<p className="h-1 w-[10%] bg-red-500"></p>
<p>React.js is a powerful library for building user interfaces, and when combined with Tailwind CSS, Next.js, and TypeScript, it creates an efficient development stack.</p>
</div>

<div className="space-y-3 bg-[#ffff] text-[#252B42] py-[35px] px-[30px] rounded-sm">
<Image src={'/img2.png'} alt="Image" width={80} height={80}/>
<h1>TypeScript Course</h1>
<p className="h-1 w-[10%] bg-red-500"></p>
<p>React.js is a powerful library for building user interfaces, and when combined with Tailwind CSS, Next.js, and TypeScript, it creates an efficient development stack.</p>
</div>









</div>

   </div>
  );
}