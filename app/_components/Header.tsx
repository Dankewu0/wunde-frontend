import Link from "next/link";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import CatalogButton from "./CatalogButton";
export default function Header() {
  <div>
    <section>Wunde</section>
    <section>
      <ul>
        <li>
          <Link href="">
            <CatalogButton />
          </Link>
        </li>
        <li>
          <Link href="/shops">Магазины</Link>
        </li>
        <li>
          <Link href="/about">О нас</Link>
        </li>
      </ul>
    </section>
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
  </div>;
}
