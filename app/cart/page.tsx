import Link from "next/link";

export default function CartPage() {
  return (
    <div>
      <h1>Корзина</h1>
      <section>
        <Link href="/checkout">Оформить заказ</Link>
      </section>
    </div>
  );
}
