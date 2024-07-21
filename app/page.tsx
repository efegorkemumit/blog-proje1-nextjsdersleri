import { Pacifico } from "next/font/google";
import Image from "next/image";

//const inter = Inter({ subsets: ["latin"] });

const pacifiko = Pacifico({ subsets: ["cyrillic"], weight: "400" });


export default function Home() {
  return (
    <>
      <header className="bg-mycolor3 p-4 ">
        <div className="container mx-auto flex flex-row justify-between items-center ">
          <div className="text-white text-lg md:text-xl  font-semibold">
            logo
          </div>

          <div className="hidden md:block md:w-1/3 lg:w-1/2">
            <input type="text" className="w-full focus:outline-none pl-2" />
          </div>


          <div className="text-white text-lg font-semibold">
            login
          </div>

        </div>
      </header>

      <div className="flex items-center p-3 space-x-8  justify-center bg-mycolor4 border-b-2 border-b-red-600  shadow-2xl">
        <a href="" className="text-white hover:text-black">Anasayfa</a>
        <a href="" className="text-white hover:text-black">Blog</a>
        <a href="" className="text-white hover:text-black">Contact</a>


      </div>

      <div className="flex items-center">
        <img src="/5.jpg"
         className="h-44 md:h-96 lg:h-[500px]  w-full object-cover
        blur-sm hover:blur-none   opacity-70 hover:opacity-90 transition duration-1000
         "
        />


      </div>
    </>
  );
}

