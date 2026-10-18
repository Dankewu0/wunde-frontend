import Link from "next/link";
import Image from "next/image";

const BRANDS = [
  { id: 1, name: "Apple", href: "/brand/apple", src: "/apple.png" },
  { id: 2, name: "Samsung", href: "/brand/samsung", src: "/samsung.png" },
  { id: 3, name: "Xiaomi", href: "/brand/xiaomi", src: "/xiaomi.png" },
  { id: 4, name: "Sony", href: "/brand/sony", src: "/sony.png" },
  { id: 5, name: "Asus", href: "/brand/asus", src: "/asus.png" },
  { id: 6, name: "Lenovo", href: "/brand/lenovo", src: "/lenovo.png" },
  { id: 7, name: "Google", href: "/brand/google", src: "/google.png" },
  { id: 8, name: "OnePlus", href: "/brand/oneplus", src: "/oneplus.png" },
];

export default function BrandCarousel() {
  const duplicatedBrands = [...BRANDS, ...BRANDS];

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex w-max animate-marquee gap-8 hover:[animation-play-state:paused]">
        {duplicatedBrands.map((brand, index) => (
          <div key={`${brand.id}-${index}`} className="shrink-0">
            <Link href={brand.href}>
              <Image
                src={brand.src}
                alt={brand.name}
                width={100}
                height={50}
                className="object-contain opacity-50 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
