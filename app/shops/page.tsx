const STORES = [
  { city: "Москва", address: "Lorem ipsum д. 15, ТРЦ Lorem 2 этаж" },
  { city: "Санкт-Петербург", address: "Lorem ipsum д. 8, ТЦ Ipsum 1 этаж" },
  { city: "Казань", address: "Lorem ipsum д. 42, ТРК Dolor 3 этаж" },
  { city: "Екатеринбург", address: "Lorem ipsum д. 7" },
  { city: "Новосибирск", address: "Lorem ipsum д. 21, ТЦ Sit 4 этаж" },
  { city: "Нижний Новгород", address: "Lorem ipsum д. 112, ТРЦ Amet 1 этаж" },
  { city: "Челябинск", address: "Lorem ipsum д. 5, ТРК Consectetur 2 этаж" },
  { city: "Самара", address: "Lorem ipsum д. 88" },
  { city: "Омск", address: "Lorem ipsum д. 33, ТЦ Adipiscing 1 этаж" },
  { city: "Ростов-на-Дону", address: "Lorem ipsum д. 14, ТРЦ Elit 3 этаж" },
  { city: "Уфа", address: "Lorem ipsum д. 9, ТЦ Sed 2 этаж" },
  { city: "Красноярск", address: "Lorem ipsum д. 56" },
  { city: "Воронеж", address: "Lorem ipsum д. 77, ТРК Do 1 этаж" },
  { city: "Пермь", address: "Lorem ipsum д. 19, ТЦ Eiusmod 3 этаж" },
  { city: "Волгоград", address: "Lorem ipsum д. 101" },
];

export default function ShopsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1A2222] mb-8">
        Наши магазины
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {STORES.map((store, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-[#DCE3E3] rounded-xl hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold text-[#1A2222] mb-2">
              {store.city}
            </h2>
            <p className="text-[#5A6666]">{store.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
