import Link from "next/link";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import CatalogButton from "./CatalogButton";
export default function Header() {
  return (
    <header>
      <section>Wunde</section>
      <CatalogButton />
      <nav>
        <Link href="/shops">Магазины</Link>
        <Link href="/about">О нас</Link>
      </nav>
      <section>
        <Link href="/favourite">
          <HeartIcon weight="bold" />
        </Link>
        <Link href="/cart">
          <ShoppingCartIcon weight="bold" />
        </Link>
        <Link href="/profile">
          <UserCircleIcon weight="bold" />
        </Link>
      </section>
    </header>
  );
}
