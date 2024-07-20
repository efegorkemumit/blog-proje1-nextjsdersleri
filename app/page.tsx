import { Pacifico } from "next/font/google";
import Image from "next/image";

//const inter = Inter({ subsets: ["latin"] });

const pacifiko = Pacifico({subsets: ["cyrillic"], weight: "400"});


export default function Home() {
  return (
    <>
  <div className="p-8  bg-red-950">
    <h2 className={`text-mycolor2 text-7xl uppercase  ${pacifiko.className}`}>Text</h2>
    <h2 className={pacifiko.className}>deneme</h2>
    <h2 className="text-white font-black text-left"> deneme bir</h2>
  </div>
  <div>

  <article>
  <time>Mar 10, 2020</time>
  <h2>Boost your conversion rate</h2>
  <p class="line-clamp-3">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
  <div>
    <img src="..." />
    Lindsay Walton
  </div>
</article>

  </div>
  </>
  );
}

