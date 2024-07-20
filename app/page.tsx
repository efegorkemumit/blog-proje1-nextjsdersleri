import { Pacifico } from "next/font/google";
import Image from "next/image";

//const inter = Inter({ subsets: ["latin"] });

const pacifiko = Pacifico({ subsets: ["cyrillic"], weight: "400" });


export default function Home() {
  return (
    <>
      <header className="bg-mycolor3 p-4 border-b-2 border-b-red-600  shadow-2xl">
        <div className="container mx-auto flex flex-row justify-between items-center ">
          <div className="text-white text-lg md:text-xl  font-semibold">
            logo
          </div>

          <div className="hidden md:block md:w-1/3 lg:w-1/2">
            <input type="text" className="w-full" />
          </div>


          <div className="text-white text-lg font-semibold">
            login
          </div>

        </div>
      </header>
    </>
  );
}

