import { Pacifico } from "next/font/google";
import Image from "next/image";

//const inter = Inter({ subsets: ["latin"] });

const pacifiko = Pacifico({ subsets: ["cyrillic"], weight: "400" });


export default function Home() {
  return (
    <>
      <header className="bg-mycolor3 p-4">
        <div className="container mx-auto flex flex-row justify-between items-center ">
          <div className="text-white text-lg font-semibold">
            logo
          </div>

          <div>
            <input type="text" />
          </div>


          <div className="text-white text-lg font-semibold">
            login
          </div>

        </div>
      </header>
    </>
  );
}

