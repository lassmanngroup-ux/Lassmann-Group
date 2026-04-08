"use client";

import { useMemo, useState } from "react";

export default function LassmannLanding() {
  const [lang, setLang] = useState<"en" | "ru" | "et">("en");

  const t = useMemo(() => {
    const content = {
      en: {
        topBadge: "Estonia • Wholesale beverages • Trade supply",
        companyType: "Wholesale trade in beverages and products",
        navCategories: "Categories",
        navAbout: "About",
        navDetails: "Company details",
        navContacts: "Contacts",
        heroTitle1: "Lassmann Group OÜ",
        heroTitle2: "Beverages, energy drinks and products for wholesale customers",
        heroText:
          "We supply beverages and related products for retail, horeca and business buyers. Professional communication, clear company details and convenient direct contact.",
        heroBtn1: "Contact us",
        heroBtn2: "Send email",
        mainActivity: "Main activity",
        activityName: "Retail sale of beverages",
        activityCode: "Economic Activities code: 47251",
        quickData: "Quick company data",
        catLabel: "Categories",
        catTitle: "Wholesale product directions",
        catText: "Suitable for retail stores, resellers, horeca and supply partners.",
        categories: [
          {
            title: "Beverages",
            desc: "Juices, water, soft drinks for retail, horeca and distribution.",
          },
          {
            title: "Energy Drinks",
            desc: "High-demand energy drink brands for wholesale supply and resale.",
          },
          {
            title: "Products",
            desc: "Snacks and grocery items for a complete trade assortment.",
          },
        ],
        advantagesLabel: "Advantages",
        advantagesTitle: "Why work with Lassmann Group OÜ",
        advantagesText:
          "Clear business identity, relevant wholesale positioning and direct access to contact information for buyers and partners.",
        advantages: [
          "Wholesale supply for shops, horeca and distributors",
          "Reliable assortment of beverages and related products",
          "Fast communication via phone, WhatsApp and email",
          "Registered company in Estonia with full company details",
        ],
        galleryLabel: "Products",
        galleryTitle: "Beverages and product assortment",
        galleryText: "Visual presentation of categories for partners and buyers.",
        aboutLabel: "About company",
        aboutTitle: "Registered Estonian trade company",
        aboutText:
          "Lassmann Group OÜ operates in the beverage trade segment and provides wholesale-oriented product supply. The company details, office address and registration data are presented openly for partners and customers.",
        detailsTitle: "Company details",
        company: "Company",
        office: "Office",
        reg: "Reg.nr. (EORI)",
        vat: "KMKR (VAT)",
        notice: "Economic activities notice",
        econCode: "Economic Activities code",
        contactsLabel: "Contacts",
        contactsTitle: "Get in touch with Lassmann Group OÜ",
        contactsText:
          "For information, business communication and supply requests, use the direct company contacts below.",
        emailBtn: "Email",
        whatsappBtn: "WhatsApp",
        phone: "Phone number",
        info: "Information",
        footer: "Wholesale beverages and trade supply.",
      },
      ru: {
        topBadge: "Эстония • Оптовые напитки • Торговые поставки",
        companyType: "Оптовая торговля напитками и продуктами",
        navCategories: "Категории",
        navAbout: "О компании",
        navDetails: "Реквизиты",
        navContacts: "Контакты",
        heroTitle1: "Lassmann Group OÜ",
        heroTitle2: "Напитки, энергетики и продукты для оптовых клиентов",
        heroText:
          "Мы поставляем напитки и сопутствующие товары для розницы, horeca и бизнес-покупателей. Профессиональная коммуникация, прозрачные реквизиты и удобная прямая связь.",
        heroBtn1: "Связаться с нами",
        heroBtn2: "Написать на email",
        mainActivity: "Основная деятельность",
        activityName: "Розничная продажа напитков",
        activityCode: "Код вида деятельности: 47251",
        quickData: "Краткие данные компании",
        catLabel: "Категории",
        catTitle: "Основные направления поставок",
        catText: "Подходит для магазинов, реселлеров, horeca и торговых партнеров.",
        categories: [
          {
            title: "Напитки",
            desc: "Соки, вода, газированные и безалкогольные напитки для розницы, horeca и дистрибуции.",
          },
          {
            title: "Энергетики",
            desc: "Популярные энергетические бренды для оптовых поставок и перепродажи.",
          },
          {
            title: "Продукты",
            desc: "Снеки и бакалея для полного торгового ассортимента.",
          },
        ],
        advantagesLabel: "Преимущества",
        advantagesTitle: "Почему работают с Lassmann Group OÜ",
        advantagesText:
          "Понятная бизнес-идентификация, правильное позиционирование для опта и быстрый доступ к контактам для покупателей и партнеров.",
        advantages: [
          "Оптовые поставки для магазинов, horeca и дистрибьюторов",
          "Надежный ассортимент напитков и сопутствующих товаров",
          "Быстрая связь по телефону, WhatsApp и email",
          "Зарегистрированная компания в Эстонии с полными реквизитами",
        ],
        galleryLabel: "Продукция",
        galleryTitle: "Ассортимент напитков и товаров",
        galleryText: "Визуальная презентация категорий для партнеров и покупателей.",
        aboutLabel: "О компании",
        aboutTitle: "Зарегистрированная эстонская торговая компания",
        aboutText:
          "Lassmann Group OÜ работает в сегменте торговли напитками и ориентирована на поставки для оптовых клиентов. Реквизиты, адрес офиса и регистрационные данные открыто представлены для партнеров и покупателей.",
        detailsTitle: "Реквизиты компании",
        company: "Компания",
        office: "Офис",
        reg: "Reg.nr. (EORI)",
        vat: "KMKR (VAT)",
        notice: "Номер уведомления о хозяйственной деятельности",
        econCode: "Код деятельности",
        contactsLabel: "Контакты",
        contactsTitle: "Связаться с Lassmann Group OÜ",
        contactsText:
          "Для информации, деловой связи и запросов на поставку используйте прямые контакты компании ниже.",
        emailBtn: "Email",
        whatsappBtn: "WhatsApp",
        phone: "Телефон",
        info: "Информация",
        footer: "Оптовые напитки и торговые поставки.",
      },
      et: {
        topBadge: "Eesti • Hulgimüük • Joogikaubandus",
        companyType: "Jookide ja toodete hulgikaubandus",
        navCategories: "Kategooriad",
        navAbout: "Ettevõttest",
        navDetails: "Ettevõtte andmed",
        navContacts: "Kontaktid",
        heroTitle1: "Lassmann Group OÜ",
        heroTitle2: "Joogid, energiajoogid ja tooted hulgiklientidele",
        heroText:
          "Tarnime jooke ja seotud tooteid jaekaubandusele, horeca-sektorile ja äriklientidele. Professionaalne suhtlus, selged ettevõtte andmed ja mugav otsekontakt.",
        heroBtn1: "Võta ühendust",
        heroBtn2: "Saada e-kiri",
        mainActivity: "Põhitegevus",
        activityName: "Jookide jaemüük",
        activityCode: "Tegevusala kood: 47251",
        quickData: "Ettevõtte põhiandmed",
        catLabel: "Kategooriad",
        catTitle: "Hulgimüügi põhisuunad",
        catText: "Sobib kauplustele, edasimüüjatele, horeca-sektorile ja tarnepartneritele.",
        categories: [
          {
            title: "Joogid",
            desc: "Mahlad, vesi, karastusjoogid ja muud joogid jaekaubandusele, horeca-sektorile ja jaotusele.",
          },
          {
            title: "Energiajoogid",
            desc: "Suure nõudlusega energiajoogid hulgimüügiks ja edasimüügiks.",
          },
          {
            title: "Tooted",
            desc: "Snäkid ja toidukaubad täieliku kaubavaliku jaoks.",
          },
        ],
        advantagesLabel: "Eelised",
        advantagesTitle: "Miks teha koostööd Lassmann Group OÜ-ga",
        advantagesText:
          "Selge äriline identiteet, sobiv hulgimüügi positsioneerimine ja otsene ligipääs kontaktandmetele ostjate ja partnerite jaoks.",
        advantages: [
          "Hulgitarne kauplustele, horeca-sektorile ja edasimüüjatele",
          "Usaldusväärne jookide ja seotud toodete valik",
          "Kiire suhtlus telefoni, WhatsAppi ja e-posti kaudu",
          "Eestis registreeritud ettevõte koos täielike andmetega",
        ],
        galleryLabel: "Tooted",
        galleryTitle: "Jookide ja toodete valik",
        galleryText: "Visuaalne esitlus partneritele ja ostjatele.",
        aboutLabel: "Ettevõttest",
        aboutTitle: "Eestis registreeritud kaubandusettevõte",
        aboutText:
          "Lassmann Group OÜ tegutseb joogikaubanduse valdkonnas ja pakub hulgimüügile suunatud tarneid. Ettevõtte andmed, kontori aadress ja registreerimisinfo on partneritele ja klientidele avalikult esitatud.",
        detailsTitle: "Ettevõtte andmed",
        company: "Ettevõte",
        office: "Kontor",
        reg: "Reg.nr. (EORI)",
        vat: "KMKR (VAT)",
        notice: "Majandustegevuse teate number",
        econCode: "Tegevusala kood",
        contactsLabel: "Kontaktid",
        contactsTitle: "Võta ühendust Lassmann Group OÜ-ga",
        contactsText:
          "Info, ärisuhtluse ja tarnepäringute jaoks kasuta allpool toodud otseseid kontakte.",
        emailBtn: "E-post",
        whatsappBtn: "WhatsApp",
        phone: "Telefon",
        info: "Info",
        footer: "Jookide hulgimüük ja kaubanduslik tarne.",
      },
    } as const;

    return content[lang];
  }, [lang]);

  const advantages = t.advantages;
  const categories = t.categories;

  const gallery = [
    {
      title: categories[0].title,
      image:
        "https://images.unsplash.com/photo-1622484212850-eb596d769edc?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: categories[1].title,
      image:
        "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: categories[2].title,
      image:
        "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const languages = [
    { key: "en", label: "EN" },
    { key: "ru", label: "RU" },
    { key: "et", label: "ET" },
  ] as const;

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.2),transparent_28%),radial-gradient(circle_at_left,rgba(59,130,246,0.16),transparent_25%),linear-gradient(to_bottom,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <header className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/5 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-green-400 to-cyan-500 shadow-lg shadow-emerald-500/20">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-black/80 text-sm font-extrabold tracking-[0.2em] text-white">
                  LG
                  <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-emerald-400" />
                </div>
              </div>
              <div>
                <div className="text-xl font-bold tracking-wide">Lassmann Group OÜ</div>
                <div className="text-sm text-white/60">{t.companyType}</div>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <div className="flex items-center gap-2 self-start md:self-auto">
                {languages.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setLang(item.key)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                      lang === item.key
                        ? "bg-white text-black"
                        : "border border-white/15 bg-white/5 text-white/75 hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <nav className="flex flex-wrap gap-4 text-sm text-white/75">
                <a href="#categories" className="transition hover:text-white">{t.navCategories}</a>
                <a href="#about" className="transition hover:text-white">{t.navAbout}</a>
                <a href="#details" className="transition hover:text-white">{t.navDetails}</a>
                <a href="#contacts" className="transition hover:text-white">{t.navContacts}</a>
              </nav>
            </div>
          </header>

          <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm text-green-300">
                {t.topBadge}
              </div>
              <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-6xl">
                {t.heroTitle1}
                <span className="mt-4 block text-2xl font-medium leading-snug text-white/75 md:text-3xl">
                  {t.heroTitle2}
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                {t.heroText}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contacts"
                  className="rounded-2xl bg-white px-6 py-3 font-semibold text-black shadow-2xl shadow-white/10 transition hover:-translate-y-0.5"
                >
                  {t.heroBtn1}
                </a>
                <a
                  href="mailto:lassmanngroup@gmail.com"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  {t.heroBtn2}
                </a>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl font-bold">12044675</div>
                  <div className="mt-1 text-sm text-white/60">Reg.nr. (EORI)</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl font-bold">EE101532367</div>
                  <div className="mt-1 text-sm text-white/60">VAT</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl font-bold">KJK056031</div>
                  <div className="mt-1 text-sm text-white/60">Notice</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-green-500/20 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="grid gap-4">
                  <div className="rounded-3xl bg-gradient-to-br from-green-400 to-lime-300 p-6 text-black">
                    <div className="text-sm font-medium uppercase tracking-wider">{t.mainActivity}</div>
                    <div className="mt-8 text-3xl font-bold">{t.activityName}</div>
                    <div className="mt-2 text-sm text-black/70">{t.activityCode}</div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
                    <div className="text-sm text-white/60">{t.quickData}</div>
                    <div className="mt-4 space-y-3 text-sm text-white/80">
                      <div className="rounded-2xl bg-white/5 p-3">Reg.nr. (EORI): 12044675</div>
                      <div className="rounded-2xl bg-white/5 p-3">KMKR (VAT): EE101532367</div>
                      <div className="rounded-2xl bg-white/5 p-3">KJK056031</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-green-400">{t.catLabel}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t.catTitle}</h2>
          </div>
          <p className="max-w-xl text-white/60">{t.catText}</p>
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
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white text-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-green-600">{t.advantagesLabel}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t.advantagesTitle}</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">{t.advantagesText}</p>
          </div>
          <div className="grid gap-4">
            {advantages.map((item) => (
              <div key={item} className="rounded-3xl border border-neutral-200 p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-green-500" />
                  <p className="text-lg font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">{t.galleryLabel}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t.galleryTitle}</h2>
          </div>
          <p className="max-w-xl text-white/60">{t.galleryText}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {gallery.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
              <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">{t.aboutLabel}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t.aboutTitle}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">{t.aboutText}</p>
          </div>

          <div id="details" className="rounded-[32px] border border-green-400/20 bg-gradient-to-br from-green-500/15 to-blue-500/10 p-8">
            <div className="text-sm text-white/60">{t.detailsTitle}</div>
            <div className="mt-5 space-y-4 text-base text-white/85">
              <div><span className="font-semibold text-white">{t.company}:</span> Lassmann Group OÜ</div>
              <div><span className="font-semibold text-white">{t.office}:</span> Kesk-Sõjamäe 2/1, EE-11415 Tallinn</div>
              <div><span className="font-semibold text-white">{t.reg}:</span> 12044675</div>
              <div><span className="font-semibold text-white">{t.vat}:</span> EE101532367</div>
              <div><span className="font-semibold text-white">{t.notice}:</span> KJK056031</div>
              <div><span className="font-semibold text-white">{t.econCode}:</span> 47251 - Retail sale of beverages</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-green-400">{t.contactsLabel}</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t.contactsTitle}</h2>
              <p className="mt-4 max-w-2xl text-white/65">{t.contactsText}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:lassmanngroup@gmail.com"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
              >
                {t.emailBtn}
              </a>
              <a
                href="https://wa.me/37254220209"
                className="rounded-2xl border border-green-400/30 bg-green-400/10 px-6 py-3 font-semibold text-green-300 transition hover:bg-green-400/15"
              >
                {t.whatsappBtn}
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-neutral-900 p-5">
              <div className="text-sm text-white/50">Email</div>
              <div className="mt-2 text-lg font-semibold">lassmanngroup@gmail.com</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-900 p-5">
              <div className="text-sm text-white/50">{t.phone}</div>
              <div className="mt-2 text-lg font-semibold">+37254220209</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-900 p-5 md:col-span-2">
              <div className="text-sm text-white/50">{t.office}</div>
              <div className="mt-2 text-lg font-semibold">Kesk-Sõjamäe 2/1, EE-11415 Tallinn</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-900 p-5 md:col-span-2">
              <div className="text-sm text-white/50">{t.info}</div>
              <div className="mt-2 text-lg font-semibold">lassmanngroup@gmail.com</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-white/55 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© 2026 Lassmann Group OÜ. {t.footer}</div>
          <div className="flex flex-wrap gap-6">
            <span>Reg.nr. 12044675</span>
            <span>VAT EE101532367</span>
            <span>KJK056031</span>
          </div>
        </div>
      </section>
    </div>
  );
}
