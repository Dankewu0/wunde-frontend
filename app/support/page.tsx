export default function Support() {
  return (
    <div>
      <h1>Поддержка пользователей</h1>
      <p>есть какие то вопросы? пишите!</p>

      <form>
        <label htmlFor="issue-type">Тип проблемы:</label>
        <select id="issue-type" name="issue-type">
          <option value="shop">Проблема с магазином (заказ, доставка)</option>
          <option value="site">Техническая проблема (ошибка на сайте)</option>
        </select>
        <label htmlFor="subject">Тема:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Коротко о проблеме"
        />
        <label htmlFor="description">Описание проблемы:</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          placeholder="Опишите подробнее, что случилось..."
        ></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
