import "./globals.css";

export const metadata = {
  title: "Lassmann Group",
  description: "Оптовые поставки напитков, энергетиков и продуктов",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
