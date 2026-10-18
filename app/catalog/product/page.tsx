type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div>
      <nav>
        <span>Каталог</span> / <span>Категория</span> /{" "}
        <span>Товар {params.id}</span>
      </nav>

      <main>
        <section>
          <div>
            <div>
              <img src="" alt="Главное фото товара" />
            </div>
            <div>
              <img src="" alt="Миниатюра 1" />
              <img src="" alt="Миниатюра 2" />
              <img src="" alt="Миниатюра 3" />
            </div>
          </div>

          <div>
            <h1>Lorem ipsum dolor sit amet (ID: {params.id})</h1>

            <div>
              <span>★★★★★</span>
              <span>Lorem ipsum</span>
            </div>

            <div>Lorem ipsum</div>

            <button type="button">Добавить в корзину</button>

            <div>
              <h3>Описание</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Характеристики</h2>
          <ul>
            <li>
              <span>Бренд</span>
              <span>Lorem ipsum</span>
            </li>
            <li>
              <span>Модель</span>
              <span>Lorem ipsum</span>
            </li>
            <li>
              <span>Цвет</span>
              <span>Lorem ipsum</span>
            </li>
            <li>
              <span>Гарантия</span>
              <span>Lorem ipsum</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
