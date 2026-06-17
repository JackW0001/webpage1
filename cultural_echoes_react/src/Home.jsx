import { useState } from 'react';

const navItems = [
  { label: '首页', href: '#home' },
  { label: '关于音乐会', href: '#concert' },
  { label: '曲目亮点', href: '#highlights' },
  { label: '合唱团', href: '#choir' },
  { label: '支持我们', href: '#support' }
];

const reasons = [
  {
    icon: '↗',
    title: '投资未来',
    text: '帮助更多人实现长期成长与财务自由'
  },
  {
    icon: '♡',
    title: '传承文化',
    text: '让音乐连接不同时代与多元文化'
  },
  {
    icon: '◎',
    title: '丰富人生',
    text: '财富创造选择，艺术赋予意义'
  }
];

const concertDetails = [
  ['演出团体', 'The Cloud Chamber Singers'],
  ['特别演出', 'The Cloud Ladies'],
  ['地点', 'Auckland Town Hall, Great Hall'],
  ['时间', '23 August 2026']
];

const highlightCards = [
  { src: '/assets/highlight-1.jpg', alt: '丹中晓望', title: '丹中晓望' },
  { src: '/assets/highlight-2.jpg', alt: '敦煌歌', title: '敦煌歌' },
  { src: '/assets/highlight-3.jpg', alt: 'What Was I Made For', title: 'What Was I Made For' },
  { src: '/assets/highlight-4.jpg', alt: '海阔天空', title: '海阔天空' }
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Back to home">
        <img src="/assets/logo-strip.jpg" alt="Tiger Brokers and The Cloud logos" />
      </a>

      <nav className={`main-nav ${isOpen ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className={`menu-button ${isOpen ? 'is-open' : ''}`}
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="small-kicker">Tiger Brokers × The Cloud Chamber Singers</p>
        <h1>
          文化回响
          <span>CULTURAL ECHOES</span>
        </h1>
        <h2>理性与感性，在此相遇 —</h2>
        <p className="english-subtitle">WHERE LOGIC MEETS EMOTION</p>
        <p className="hero-text">
          Tiger Brokers 与 The Cloud Chamber Singers 联合呈现一场跨越文化、时间与心灵的合唱音乐会。
        </p>
        <p className="hero-text muted">
          当投资关注未来，音乐回应内心。在《文化回响》中，我们共同探索财富与精神世界的另一种连接。
        </p>
        <a className="soft-button" href="#concert">了解更多 →</a>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <img src="/assets/choir-people.png" alt="" />
      </div>
    </section>
  );
}

function ReasonStrip() {
  return (
    <section className="reason-section" id="support" aria-labelledby="reason-title">
      <h2 id="reason-title">为什么 Tiger 支持《文化回响》?</h2>
      <div className="reason-grid">
        {reasons.map((reason) => (
          <article className="reason-card" key={reason.title}>
            <div className="reason-icon" aria-hidden="true">{reason.icon}</div>
            <div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ConcertInfo() {
  return (
    <section className="concert-section" id="concert">
      <div className="concert-copy">
        <p className="section-label">关于音乐会</p>
        <h2>Cultural Echoes</h2>
        <p className="lead">一场关于和声、传承与心灵的合唱音乐会</p>

        <dl className="detail-list">
          {concertDetails.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <a className="soft-button small" href="#tickets">购票信息 →</a>
      </div>

      <div className="stage-image">
        <img src="/assets/choir-stage.png" alt="Concert hall stage" />
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="highlights-section" id="highlights" aria-labelledby="highlights-title">
      <h2 id="highlights-title">曲目亮点</h2>
      <div className="highlight-grid">
        {highlightCards.map((card) => (
          <article className="highlight-card" key={card.src}>
            <img src={card.src} alt={card.alt} />
            <h3>{card.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function ChoirIntro() {
  return (
    <section className="choir-section" id="choir">
      <div className="choir-photo">
        <img src="/assets/choir-people.png" alt="The Cloud Chamber Singers performing on stage" />
      </div>
      <div className="choir-copy">
        <p className="section-label">合唱团介绍</p>
        <h2>关于 The Cloud Chamber Singers</h2>
        <p>
          The Cloud Chamber Singers 致力于通过合唱连接文化、语言与世代。从中国古典作品到国际流行音乐，我们相信歌声能够跨越边界。
        </p>
        <p>
          让不同背景的人在同一个空间产生共鸣。
        </p>
        <a className="soft-button small" href="#home">了解更多 →</a>
      </div>
    </section>
  );
}

function TigerSection() {
  return (
    <section className="tiger-section" id="tickets">
      <div className="tiger-copy">
        <p className="section-label">特别呈现</p>
        <h2>Tiger Brokers</h2>
        <p>
          立足新西兰，连接全球市场。支持文化、支持教育、支持社区成长。
        </p>
        <a className="soft-button small" href="#home">了解更多 Tiger Brokers →</a>
      </div>
      <div className="network-image">
        <img src="/assets/globe.png" alt="Global network illustration" />
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="quote-section">
      <blockquote>
        <span>“</span>
        财富创造可能 · 文化留下回响
        <span>”</span>
      </blockquote>
      <p>Tiger Brokers × The Cloud Chamber Singers</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <img src="/assets/footer-left-logo.jpg" alt="Tiger Brokers" />
      <div className="socials" aria-label="Social links">
        <a href="#home" aria-label="Facebook">f</a>
        <a href="#home" aria-label="Instagram">◎</a>
        <a href="#home" aria-label="YouTube">▶</a>
        <a href="#home" aria-label="LinkedIn">in</a>
      </div>
      <img src="/assets/footer-cloud-logo.jpg" alt="The Cloud" />
    </footer>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <div className="poster-background" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <ReasonStrip />
        <ConcertInfo />
        <Highlights />
        <ChoirIntro />
        <TigerSection />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}
