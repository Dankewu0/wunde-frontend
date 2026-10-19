export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 md:p-12 min-h-screen">
      <div className="relative overflow-hidden bg-[#F4F9F8] rounded-3xl p-10 md:p-16 mb-12 border border-[#E0EBE8]">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FFE5D9] rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#CBE3DF] rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A2928] mb-6">
            О проекте <span className="text-[#3A6B70]">Wunde</span>
          </h1>
          <p className="text-lg text-[#4A5D5C] leading-relaxed">
            Добро пожаловать в Wunde — это не настоящий магазин, а полностью
            самописный пет-проект, созданный для портфолио. Здесь вы не сможете
            купить технику, но зато можете оценить, как сверстан интерфейс, как
            работает логика.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-2xl border border-[#E0EBE8] shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-[#FFE5D9] rounded-xl flex items-center justify-center mb-6">
            <span className="text-2xl">🛠️</span>
          </div>
          <h3 className="text-xl font-bold text-[#1A2928] mb-3">
            Для портфолио
          </h3>
          <p className="text-[#4A5D5C] leading-relaxed text-sm">
            Проект создан для демонстрации навыков разработки. Никаких реальных
            заказов, только чистый интерес и практика.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-[#E0EBE8] shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-[#CBE3DF] rounded-xl flex items-center justify-center mb-6">
            <span className="text-2xl">💻</span>
          </div>
          <h3 className="text-xl font-bold text-[#1A2928] mb-3">
            Современный стек
          </h3>
          <p className="text-[#4A5D5C] leading-relaxed text-sm">
            В основе лежит Next.js и React. Дизайн написан с нуля без
            использования тяжелых UI-библиотек, только Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}
