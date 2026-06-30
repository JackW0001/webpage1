import PageLayout from '@/components/layout/PageLayout';

const GALLERY = [
  { src: '/assets/song1.png', alt: '精彩瞬间 1', title: '敕勒歌' },
  { src: '/assets/song2.png', alt: '精彩瞬间 2', title: '舟中晓望' },
  { src: '/assets/song3.png', alt: '精彩瞬间 3', title: '那些年' },
  { src: '/assets/song4.png', alt: '精彩瞬间 4', title: '慢慢喜欢你' },
  { src: '/assets/song5.png', alt: '精彩瞬间 5', title: '唯一' },
  { src: '/assets/song6.png', alt: '精彩瞬间 6', title: '玉门关' },
  { src: '/assets/song7.png', alt: '精彩瞬间 7', title: '慢' },
  { src: '/assets/song8.png', alt: '精彩瞬间 8', title: '知足' },
  { src: '/assets/song9.png', alt: '精彩瞬间 9', title: '亲爱的你啊' },
  { src: '/assets/song10.png', alt: '精彩瞬间 10', title: '无名的人 ' },
  { src: '/assets/song11.png', alt: '精彩瞬间 11', title: '孤勇者' },
  { src: '/assets/song12.png', alt: '精彩瞬间 12', title: '海阔天空' },
  { src: '/assets/song13.png', alt: '精彩瞬间 13', title: '装满星星的口袋' },
];

function GalleryGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="ch-gallery-group" aria-hidden={duplicate || undefined}>
      {GALLERY.map((img) => (
        <article className="ch-gallery-item" key={`${duplicate ? 'copy-' : ''}${img.src}`}>
          <img src={img.src} alt={duplicate ? '' : img.alt} />
          <h3>{img.title}</h3>
        </article>
      ))}
    </div>
  );
}

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
            The Cloud Chamber Singers 合唱团由指挥魏昌慕巍博士（Dr. Changmuwei Wei）担任音乐总监，汇聚了来自新西兰及国际背景、具有丰富合唱经验的青年与成年歌者，致力于追求卓越的艺术表现和高质量的室内合唱演唱。
          </p>
        </div>
        <div className="ch-hero-visual">
          <img src="/assets/choir-people-3.JPG" alt="The Cloud Chamber Singers performing on stage" />
        </div>
      </section>

      {/* About */}
      <section className="ch-about" id="about">
        <div className="ch-about-copy">
          <h2 className="ch-about-heading">ABOUT US</h2>
          <p>
            合唱团以演绎不同文化背景和时代风格的合唱作品为特色，曲目涵盖文艺复兴、浪漫主义、现代与当代作品，以及中国和新西兰作曲家的优秀合唱音乐。通过高水平的音乐训练和富有创造力的艺术实践，The Cloud Chamber Singers 致力于促进跨文化交流，并为奥克兰多元文化社会贡献高品质的音乐演出。
          </p>
          <p>
            2024 年，The Cloud Chamber Singers 在于奥克兰举行的第十三届世界合唱比赛（World Choir Games）室内合唱组（Mixed Chamber Choirs）中荣获金奖（Gold Award），成为新西兰获得该组别最高荣誉的合唱团之一。
          </p>
          <p>
            作为 The Cloud Choir Group 旗下的旗舰成人合唱团，The Cloud Chamber Singers 经常与儿童合唱团、交响乐团及国际知名艺术家合作演出，并积极参与新西兰重要文化活动及国际交流项目。合唱团秉承“以音乐连接文化，以歌声传递美好”的理念，努力打造具有国际视野的优秀华人合唱艺术团体。
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
          <video
            controls
            playsInline
            preload="metadata"
            poster="/assets/choir1-poster.jpg"
            aria-label="The Cloud Chamber Singers 合唱团视频"
          >
            <source src="/assets/choir1.mp4" type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
        </div>
      </section>

      {/* Gallery */}
      <section className="ch-gallery-section">
        <h2 className="ch-section-heading">精彩瞬间</h2>
        <div className="ch-gallery-marquee">
          <div className="ch-gallery-track">
            <GalleryGroup />
            <GalleryGroup duplicate />
          </div>
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
