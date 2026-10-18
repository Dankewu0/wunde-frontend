import Link from "next/link";
import HomeCard from "./_components/HomeCard";
import BrandCarousel from "./_components/BrandCarousel";
export default function Home() {
  return (
    <div>
      <section>
        <HomeCard text="" href="" width="" height="" />
        <HomeCard text="" href="" width="" height="" />
        <HomeCard text="" href="" width="" height="" />
        <HomeCard text="" href="" width="" height="" />
      </section>
      <section>
        <BrandCarousel />
      </section>
      <Link href="/support">Имеются какие то жалобы? Пишите нам!</Link>
    </div>
  );
}
