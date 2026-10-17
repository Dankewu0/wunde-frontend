import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <strong>Wunde</strong>
      <small>Wunde - тестовый проект для портфолио на github</small>
      <nav>
        <Link href="/shops">Магазины</Link>
        <Link href="/about">О нас</Link>
        <Link href="/catalog">Каталог</Link>
        <Link href="/support">Поддержка</Link>
      </nav>
    </footer>
  );
}
