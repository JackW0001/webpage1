import PageLayout from '@/components/layout/PageLayout';

const GALLERY = [
  { src: '/assets/choir-wide.jpg', alt: '合唱团演出' },
  { src: '/assets/choir-stage.png', alt: '舞台现场' },
  { src: '/assets/highlight-3.jpg', alt: '精彩瞬间' },
  { src: '/assets/choir-people.png', alt: '合唱团成员' },
  { src: '/assets/choir-people-3.JPG', alt: '合唱团合影' },
];

export default function Choir() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="ch-hero">
        <div className="ch-hero-copy">
          <h1 className="ch-hero-title">The Cloud<br />Chamber Singers</h1>
          <div className="ch-hero-rule" />
          <p className="ch-hero-tagline">以音乐连接文化，<br />以歌声传递美好</p>
          <p className="ch-hero-body">
            The Cloud Chamber Singers 合唱团由指挥常羲昌魏鹞博士（Dr. Changmuwei Wei）担任音乐总监，汇聚了来自新西兰及国际背景、具有丰富合唱经验的青年与成年歌者，致力于追求卓越的艺术表现和高质量的室内合唱演唱。
          </p>
        </div>
        <div className="ch-hero-visual">
          <img src="/assets/hero-choir.jpg" alt="The Cloud Chamber Singers performing on stage" />
        </div>
      </section>

      {/* About */}
      <section className="ch-about" id="about">
        <div className="ch-about-copy">
          <h2 className="ch-about-heading">ABOUT US</h2>
          <p>
            合唱团以演绎不同文化背景和时代风格的合唱作品为特色，曲目涵盖文艺复兴、浪漫主义、现代与当代作品，以及中国和新西兰作曲家的优秀合唱音乐。通过高水平的音乐训练和富有创造力的艺术实践，The Cloud Chamber Singers 致力于促进跨文化交流，并为听众带来多元文化全新颖和品质的音乐演出。
          </p>
          <p>
            2024 年，The Cloud Chamber Singers 在于奥克兰举行的第十三届世界合唱比赛（World Choir Games）室内合唱组（Mixed Chamber Choirs）中荣获金奖（Gold Award），成为新西兰获得该组别最高荣誉的合唱团之一。
          </p>
          <p>
            作为 The Cloud Choir Group 旗下的旗舰成人合唱团，The Cloud Chamber Singers 始终与儿童合唱团、交响乐团及国际知名艺术家合作演出，并积极参与新西兰地区文化活动及国际交流项目。合唱团秉承"以音乐连接文化，以歌声传递美好"的理念，努力打造具有国际视野的优秀华人合唱艺术团体。
          </p>
        </div>
        <div className="ch-about-photo">
          <img src="/assets/choir-people-2.JPG" alt="The Cloud Chamber Singers group photo" />
        </div>
      </section>

      {/* Video */}
      <section className="ch-video-section">
        <h2 className="ch-section-heading">合唱团视频</h2>
        <div className="ch-video-player">
          <button className="ch-play-btn" type="button" aria-label="播放合唱团视频">
            <span className="ch-play-icon" aria-hidden="true">▶</span>
          </button>
        </div>
      </section>

      {/* Gallery */}
      <section className="ch-gallery-section">
        <h2 className="ch-section-heading">精彩瞬间</h2>
        <div className="ch-gallery-grid">
          {GALLERY.map((img) => (
            <div className="ch-gallery-item" key={img.src}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="ch-vm-section">
        <article className="ch-vm-card">
          <div className="ch-vm-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
              <circle cx="12" cy="12" r="3.5" />
              <path d="M2 12C2 12 5.5 5 12 5s10 7 10 7-3.5 7-10 7S2 12 2 12z" />
            </svg>
          </div>
          <div>
            <h3>愿景 Vision</h3>
            <p>成为新西兰最具影响力的室内合唱团之一，通过卓越的音乐艺术与跨文化合作，向世界展现合唱音乐的魅力。</p>
          </div>
        </article>
        <article className="ch-vm-card">
          <div className="ch-vm-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
          </div>
          <div>
            <h3>使命 Mission</h3>
            <p>以高水平的合唱艺术促进文化交流，社区凝聚和个人成长，为观众带来富有感染力和艺术价值的音乐体验。</p>
          </div>
        </article>
      </section>
    </PageLayout>
  );
}
