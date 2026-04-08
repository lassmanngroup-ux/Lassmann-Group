export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        Lassmann Group
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Оптовые поставки напитков, энергетиков и продуктов
      </p>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "10px", width: "200px" }}>
          <h3>Энергетики</h3>
          <p>Red Bull, Monster и др.</p>
        </div>

        <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "10px", width: "200px" }}>
          <h3>Напитки</h3>
          <p>Соки, вода, газировка</p>
        </div>

        <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "10px", width: "200px" }}>
          <h3>Продукты</h3>
          <p>Снеки и товары оптом</p>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <a
          href="mailto:lassmanngroup@gmail.com"
          style={{
            background: "#22c55e",
            padding: "12px 24px",
            borderRadius: "8px",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Связаться с нами
        </a>
      </div>
    </main>
  );
}
