import Link from "next/link";

type ProductCardProps = {
  id: string | number;
  title: string;
  price: number;
  oldPrice?: number;
  image?: string;
  href: string;
};

export default function ProductCard({
  title,
  price,
  oldPrice,
  image,
  href,
}: ProductCardProps) {
  const formatPrice = (val: number) =>
    new Intl.NumberFormat("ru-RU").format(val) + " ₽";

  return (
    <Link
      href={href}
      className="group flex flex-col border border-[#DCE3E3] rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow"
    >
      <div className="aspect-square bg-[#F3F6F6] relative overflow-hidden flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="text-[#9A9AA0] text-sm">Нет фото</span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-[#1A2222] font-medium line-clamp-2 mb-2 group-hover:text-[#3A6B70] transition-colors">
          {title}
        </h3>

        <div className="mt-auto flex items-end gap-2">
          <span className="text-lg font-bold text-[#1A2222]">
            {formatPrice(price)}
          </span>
          {oldPrice && (
            <span className="text-sm text-[#9A9AA0] line-through mb-0.5">
              {formatPrice(oldPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
