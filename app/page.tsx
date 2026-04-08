export default function Home() {
  const categories = [
    {
      title: "Напитки",
      desc: "Соки, вода, газированные и негазированные напитки для магазинов, кафе и дистрибьюторов.",
    },
    {
      title: "Энергетики",
      desc: "Популярные энергетические бренды и позиции с высоким спросом для оптовых поставок.",
    },
    {
      title: "Продукты",
      desc: "Снеки, бакалея и сопутствующие товары для комплексных закупок в одном месте.",
    },
  ];

  const advantages = [
    "Оптовые цены и гибкие условия сотрудничества",
    "Быстрая обработка заказов и регулярные поставки",
    "Широкий ассортимент популярных товаров",
    "Индивидуальные предложения для постоянных клиентов",
  ];

  const stats = [
    { value: "500+", label: "товаров в ассортименте" },
    { value: "24/7", label: "прием заявок" },
    { value: "100+", label: "партнеров и клиентов" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.22),transparent_28%),radial-gradient(circle_at_left,rgba(59,130,246,0.18),transparent_25%),linear-gradient(to_bottom,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <div>
              <span className="text-lg font-semibold tracking-wide">
                Lassmann <span className="text-green-400">Group</span>
              </span>
            </div>

            <nav className="hidden gap-6 text-sm text-white/80 md:flex">
              <a href="#catalog" className="transition hover:text-white">
                Каталог
              </a>
              <a href="#about" className="transition hover:text-white">
                О нас
              </a>
              <a href="#advantages" className="transition hover:text-white">
                Преимущества
              </a>
              <a href="#contacts" className="transition hover:text-white">
                Контакты
              </a>
            </nav>

            <a
              href="mailto:lassmanngroup@gmail.com"
              className="rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-black transition hover:scale-105"
            >
              Оставить заявку
            </a>
          </header>

          <div className="grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm text-green-300">
                Оптовые поставки напитков и продуктов
              </div>

              <h1 className="max-w-2xl text-5xl font-bold leading-tight md:text-6xl">
                Lassmann Group — поставщик{" "}
                <span className="text-green-400">напитков</span>,
                <span className="text-blue-400"> энергетиков</span> и продуктов
                оптом
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                Помогаем магазинам, сетям, кафе и дистрибьюторам закупать
                востребованные товары оптом — быстро, удобно и по выгодным
                условиям.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#catalog"
                  className="rounded-2xl bg-white px-6 py-3 font-semibold text-black shadow-2xl shadow-white/10 transition hover:-translate-y-0.5"
                >
                  Смотреть каталог
                </a>
                <a
                  href="mailto:lassmanngroup@gmail.com"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Получить прайс
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >
                    <div className="text-2xl font-bold">{item.value}</div>
                    <div className="mt-1 text-sm text-white/60">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-green-500/20 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl bg-gradient-to-br from-green-400 to-lime-300 p-6 text-black">
                    <div className="text-sm font-medium uppercase tracking-wider">
                      Хит продаж
                    </div>
                    <div className="mt-12 text-3xl font-bold">Энергетики</div>
                    <div className="mt-2 text-sm text-black/70">
                      Высокий спрос, стабильные поставки, выгодные партии.
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
                    <div className="text-sm text-white/60">Ассортимент</div>
                    <div className="mt-4 space-y-3">
                      <div className="rounded-2xl bg-white/5 p-3">
                        Вода и прохладительные напитки
                      </div>
                      <div className="rounded-2xl bg-white/5 p-3">
                        Энергетики и холодный чай
                      </div>
                      <div className="rounded-2xl bg-white/5 p-3">
                        Снеки, бакалея, товары повседневного спроса
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-neutral-900 p-6 md:col-span-2">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="text-sm text-white/60">
                          Для кого мы работаем
                        </div>
                        <div className="mt-2 text-2xl font-semibold">
                          Магазины, кафе, сети, HoReCa, дистрибьюторы
                        </div>
                      </div>
                      <a
                        href="mailto:lassmanngroup@gmail.com"
                        className="rounded-2xl bg-white px-5 py-3 font-semibold text-black"
                      >
                        Запросить предложение
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-green-400">
              Категории
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Основные направления поставок
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            Подбираем ассортимент под формат вашего бизнеса и обеспечиваем
            поставки востребованных позиций.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((item) => (
            <div
              key={item.title}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-green-400/30 hover:bg-white/10"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-green-400 to-blue-500" />
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/65">{item.desc}</p>
              <div className="mt-8 text-sm font-medium text-green-300">
                Подробнее →
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="advantages" className="bg-white text-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-green-600">
              Преимущества
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Почему с нами удобно работать
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Мы делаем оптовые закупки понятными и удобными: от подбора
              ассортимента до быстрой логистики и персональных условий.
            </p>
          </div>

          <div className="grid gap-4">
            {advantages.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-neutral-200 p-5 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-green-500" />
                  <p className="text-lg font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
              О компании
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Надежный партнер для оптовых закупок
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Lassmann Group поставляет популярные напитки, энергетики и
              продукты оптом для бизнеса. Мы работаем с магазинами, кафе,
              маркетами и региональными партнерами, предлагая широкий
              ассортимент, конкурентные цены и стабильность поставок.
            </p>
          </div>

          <div className="rounded-[32px] border border-green-400/20 bg-gradient-to-br from-green-500/15 to-blue-500/10 p-8">
            <div className="text-sm text-white/60">Свяжитесь с нами</div>
            <div className="mt-5 space-y-4 text-lg">
              <div>📞 +372 XX XXX XXX</div>
              <div>✉️ lassmanngroup@gmail.com</div>
              <div>📍 Эстония / Европа</div>
            </div>
            <a
              href="mailto:lassmanngroup@gmail.com"
              className="mt-8 block w-full rounded-2xl bg-white px-6 py-3 text-center font-semibold text-black transition hover:opacity-90"
            >
              Получить консультацию
            </a>
          </div>
        </div>
      </section>

      <section id="contacts" className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-white/55 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            © 2026 Lassmann Group. Оптовые поставки напитков, энергетиков и
            продуктов.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white">
              Условия сотрудничества
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
