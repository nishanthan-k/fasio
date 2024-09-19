import { ProductCardProps } from "@/lib/types";
import Image from "next/image";
import star from "@/assets/icons/svg/star.svg"
import rupees from "@/assets/icons/svg/rupees.svg"

export function ProductCard(props: ProductCardProps) {
  const { img, name, price, ratings } = props;

  return (
    <div className="w-[200px] flex-shrink-0 p-0">
      <div className="p-0">
        {img && <Image src={img} alt={name} width={200} height={200} />}
      </div>
      <div className="p-2 flex flex-col gap-1">
        <p>{name}</p>
        <p className="flex gap-1">
          {Array.from({ length: ratings ?? 0 }).map((_, index) => (
            <span key={index}>
              <Image src={star} width={16} height={16} alt="star" />
            </span>
          ))}
        </p>
        <p className="flex gap-0.5">
          <Image src={rupees} width={16} height={16} alt="rupees" />
          {price}
        </p>
      </div>
    </div>
  );
}

