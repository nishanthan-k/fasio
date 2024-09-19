
import Image from "next/image";
import calvin from "@/assets/images/brands/calvin.webp";
import gucci from "@/assets/images/brands/gucci.webp";
import prada from "@/assets/images/brands/prada.webp";
import versace from "@/assets/images/brands/versace.webp";
import zara from "@/assets/images/brands/zara.webp";

const reviews = [
  {
    name: "Jane",
    username: "versace",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: versace,
  },

  {
    name: "Jenny",
    username: "zara",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: zara,
  },
  {
    name: "Jill",
    username: "gucci",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: gucci,
  },
  {
    name: "John",
    username: "prada",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: prada,
  },
  {
    name: "Jack",
    username: "calvin",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: calvin,
  },
];

export function BrandCarousel() {
  return (
    <section className="flex flex-wrap justify-center md:justify-evenly items-center gap-6 p-4 h-24 md:h-32 bg-black">
      {reviews.map((data) => (
        data.username === 'zara' ? (
          <Image 
            key={data.username} 
            src={data.img} 
            alt="" 
            className="object-contain w-16 md:w-[70px]"
          />
        ) : (
          <Image 
            key={data.username} 
            src={data.img} 
            alt="" 
            className="object-contain w-24 md:w-28" 
          />
        )
      ))}
    </section>
  );
}
