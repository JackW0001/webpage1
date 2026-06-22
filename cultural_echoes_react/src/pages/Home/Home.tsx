import PageLayout from '@/components/layout/PageLayout';
import type { ReasonCard, HighlightCard, ConcertDetail } from '@/types';
import { Link } from 'react-router-dom';

const REASONS: ReasonCard[] = [
  { icon: '↗', title: '投资未来', text: '帮助更多人实现长期成长' },
  { icon: '♡', title: '传承文化', text: '让音乐连接不同时代与多元文化' },
  { icon: '◎', title: '丰富人生', text: '财富创造选择，艺术赋予意义' },
];

const CONCERT_DETAILS: ConcertDetail[] = [
  { label: '演出团体', value: 'The Cloud Chamber Singers' },
  { label: '特别演出', value: 'The Cloud Ladies' },
  { label: '演出地点', value: 'Auckland Town Hall, Great Hall' },
  { label: '演出时间', value: '23 August 2026' },
];

const HIGHLIGHT_CARDS: HighlightCard[] = [
  { src: '/assets/song1.png', alt: '敕勒歌', title: '敕勒歌', text: '草原文明的辽阔回响' },
  { src: '/assets/song2.png', alt: '舟中晓望', title: '舟中晓望', text: '古典诗意中的东方美学' },
  { src: '/assets/song3.png', alt: '那些年', title: '那些年', text: '关于成长与自我寻找' },
  { src: '/assets/song4.png', alt: '海阔天空', title: '海阔天空', text: '跨越时代的共同记忆' },
];

export default function Home() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="small-kicker">Tiger Fintech (NZ) Limited × The Cloud Chamber Singers</p>
          <h1>
            文化回响
            <span>CULTURAL ECHOES</span>
          </h1>
          <h2>理性与感性，在此相遇 —</h2>
          <p className="english-subtitle">WHERE LOGIC MEETS EMOTION</p>
          <p className="hero-text">
            Tiger Brokers 与 The Cloud Chamber Singers 联合呈现一场跨越文化、时间与心灵的合唱音乐会。
          </p>
          <p className="hero-text">
            当投资关注未来，音乐回应内心。
          </p>
          <p className="hero-text muted">
            在《文化回响》中，我们共同探索财富与精神世界的另一种连接。
          </p>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <img src="/assets/choir-people-2.JPG" alt="" />
        </div>
      </section>

      {/* Why Tiger */}
      <section className="reason-section" id="support" aria-labelledby="reason-title">
        <h2 id="reason-title">为什么 Tiger 支持《文化回响》?</h2>
        <div className="reason-grid">
          {REASONS.map((r) => (
            <article className="reason-card" key={r.title}>
              <div className="reason-icon" aria-hidden="true">{r.icon}</div>
              <div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Concert Info */}
      <section className="concert-section" id="concert">
        <div className="concert-copy">
          <p className="section-label">关于音乐会</p>
          <h2>Cultural Echoes</h2>
          <p className="lead">一场关于和声、传承与心灵的合唱音乐会</p>
          <dl className="detail-list">
            {CONCERT_DETAILS.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <Link className="soft-button small" to="/ticket">购票信息 →</Link>
        </div>
        <div className="stage-image">
          <img src="/assets/choir-stage.png" alt="Concert hall stage" />
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights-section" id="highlights" aria-labelledby="highlights-title">
        <h2 id="highlights-title">曲目亮点</h2>
        <div className="highlight-grid">
          {HIGHLIGHT_CARDS.map((card) => (
            <article className="highlight-card" key={card.src}>
              <img src={card.src} alt={card.alt} />
              <div className="highlight-content">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Choir Intro */}
      <section className="choir-section" id="choir">
        <div className="choir-photo">
          <img src="/assets/choir-people-2.JPG" alt="The Cloud Chamber Singers performing on stage" />
        </div>
        <div className="choir-copy">
          <p className="section-label">合唱团介绍</p>
          <h2>关于 The Cloud Chamber Singers</h2>
          <p>
            The Cloud Chamber Singers 致力于通过合唱连接文化、语言与世代。从中国古典作品到国际流行音乐，我们相信歌声能够跨越边界。
          </p>
          <p>让不同背景的人在同一个空间产生共鸣。</p>
          <Link className="soft-button small" to="/choir">了解更多 →</Link>
        </div>
      </section>

      {/* Tiger Brokers */}
      <section className="tiger-section" id="tickets">
        <div className="tiger-copy">
          <p className="section-label">特别呈现</p>
          <h2>
            Tiger Fintech (NZ) Limited
            <br />
            老虎证券新西兰
          </h2>
          <p>立足新西兰，连接全球市场。支持文化、支持教育、支持社区成长。</p>
          <Link className="soft-button small" to="/tiger-fintech">了解更多 Tiger Brokers →</Link>
        </div>
        <div className="network-image">
          <img src="/assets/globe.png" alt="Global network illustration" />
        </div>
      </section>

      {/* Quote */}
      <section className="quote-section">
        <blockquote>
          <span>"</span>财富创造可能 · 文化留下回响<span>"</span>
        </blockquote>
        <p>Tiger Brokers × The Cloud Chamber Singers</p>
      </section>
    </PageLayout>
  );
}
