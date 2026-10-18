import Link from "next/link";
export default function CatalogCategories() {
  return (
    <div>
      <h1>Категории Каталога</h1>
      <section>
        <h2>Компьютеры и комплектующие</h2>
        <Link href="/">Ноутбуки</Link>
        <Link href="/">Мониторы</Link>
        <Link href="/">Системные блоки</Link>
        <Link href="/">Комплектующие для пк</Link>
        <Link href="/">Периферия</Link>
      </section>
      <section>
        <h2>ТВ, Игры и Аудио</h2>
        <Link href="/">Игровые консоли и геймпады</Link>
        <Link href="/">Телевизоры</Link>
        <Link href="/">Наушники</Link>
        <Link href="/">Аудиотехника</Link>
        <Link href="/">Саундбары</Link>
      </section>
      <section>
        <h2>Смартфоны и гаджеты</h2>
        <Link href="/">Смартфоны</Link>
        <Link href="/">Планшеты</Link>
        <Link href="/">Умные часы и браслеты</Link>
        <Link href="/">Аксессуары для гаджетов</Link>
      </section>
    </div>
  );
}
