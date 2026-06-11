const ticketLinks = [
  {
    icon: '/assets/gift-icon.png',
    title: 'Tiger Brokers 福利购票',
    text: '新用户专享演出票福利'
  },
  {
    icon: '/assets/small-ticket-icon.png',
    title: 'Auckland Live',
    text: '官方购票'
  },
  {
    icon: '/assets/small-ticket-icon.png',
    title: 'Ticketmaster',
    text: '官方购票'
  }
];

function Header() {
  return (
    <header className="site-header" aria-label="Header">
      <a className="brand" href="#top" aria-label="Tiger Brokers and Cloud">
        <img src="/assets/logo-strip.png" alt="Tiger Brokers × Cloud" />
      </a>

      <div className="event-name">Echoes of Culture 2026</div>

      <button className="menu-button" aria-label="Menu">
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-bg" />
      <div className="hero-shade" />

      <div className="hero-content">
        <p className="eyebrow">Tiger Brokers 与 The Cloud Chamber Singers 联袂呈现</p>
        <h1 id="hero-title">自由投资・自在聆听</h1>
        <p className="hero-subtitle">让金融与艺术在同一舞台相遇。</p>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro" aria-labelledby="intro-title">
      <h2 id="intro-title">一场关于文化与传承的合唱音乐会</h2>
      <p>
        Tiger Brokers 与 The Cloud Chamber Singers 携手，
        共同呈现一场跨越文化与心灵的音乐盛宴。
      </p>
    </section>
  );
}

function TigerCard() {
  return (
    <article className="info-card tiger-card">
      <img className="card-icon" src="/assets/tiger-icon.png" alt="Tiger Brokers" />
      <h3>Tiger Brokers</h3>
      <div className="card-line" />
      <p>立足本地，投资全球</p>
      <img className="card-image globe" src="/assets/globe-card.png" alt="Global market visual" />
      <a className="outline-button" href="#tiger-brokers">了解更多 →</a>
    </article>
  );
}

function TicketCard() {
  return (
    <article className="info-card ticket-card">
      <img className="card-icon" src="/assets/ticket-icon.png" alt="Ticket" />
      <h3>购票渠道</h3>
      <div className="card-line" />
      <p>官方渠道购票，安全便捷，安心观演。</p>

      <div className="ticket-list" aria-label="Ticket links">
        {ticketLinks.map((item) => (
          <a className="ticket-row" href="#tickets" key={item.title}>
            <img src={item.icon} alt="" aria-hidden="true" />
            <span>
              <strong>{item.title}</strong>
              <small>{item.text}</small>
            </span>
            <b aria-hidden="true">›</b>
          </a>
        ))}
      </div>

      <a className="outline-button" href="#tickets">立即购票 →</a>
    </article>
  );
}

function ChoirCard() {
  return (
    <article className="info-card choir-card">
      <img className="card-icon" src="/assets/group-icon.png" alt="Choir" />
      <h3>合唱团介绍</h3>
      <div className="card-line" />
      <p>
        关于 The Cloud Chamber Singers，
        我们用歌声讲述故事，传递情感。
      </p>
      <img className="card-image choir" src="/assets/choir-card.png" alt="The Cloud Chamber Singers" />
      <a className="outline-button" href="#choir">了解更多 →</a>
    </article>
  );
}

function Cards() {
  return (
    <section className="cards" aria-label="Main sections">
      <TigerCard />
      <TicketCard />
      <ChoirCard />
    </section>
  );
}

function Quote() {
  return (
    <section className="quote" aria-label="Slogan">
      <span aria-hidden="true">“</span>
      <p>投资让未来更自由　音乐让生活更丰富</p>
      <span aria-hidden="true">”</span>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <img src="/assets/footer-logo-strip.png" alt="Tiger Brokers and Cloud" />
    </footer>
  );
}

export default function App() {
  return (
    <div className="page">
      <div className="poster-background" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Cards />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}
