import PageLayout from '@/components/layout/PageLayout';

const STATS = [
  {
    type: 'nasdaq',
    label: 'NASDAQ\nLISTED',
    sub: '纳斯达克上市科技券商',
  },
  {
    type: 'number',
    label: '1000万+',
    sub: '全球用户信赖',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="28" height="28">
        <circle cx="9" cy="7" r="3" />
        <circle cx="16" cy="8" r="2.5" />
        <path d="M2 20c0-4 3-6 7-6s7 2 7 6" />
        <path d="M16 13c2.5 0 5 1.5 5 5" />
      </svg>
    ),
  },
  {
    type: 'icon',
    label: '全球市场覆盖',
    sub: '美股｜港股｜新西兰股｜澳洲等',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="28" height="28">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </svg>
    ),
  },
  {
    type: 'icon',
    label: '安全可靠',
    sub: '资金安全，多重监管保障',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="28" height="28">
        <path d="M12 3L4 7v5c0 5 3.5 9.74 8 11 4.5-1.26 8-6 8-11V7l-8-4z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="30" height="30">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </svg>
    ),
    title: '一个账户玩转全球市场',
    text: '支持美股24/5小时交易，港股、新西兰股、A股通、澳股、加密货币、ETF基金、期权、期货*',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="30" height="30">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 9.5c0-1.1.9-2 2-2h2a2 2 0 0 1 0 4h-2a2 2 0 0 0 0 4h2a2 2 0 0 0 2-2" />
        <path d="M12 6v2m0 8v2" />
      </svg>
    ),
    title: '超低费率，超值福利',
    text: '美股交易 1 美分/股；最低 2 美元起；支持碎股定投；最低 2 美元起投资特斯拉、苹果等众多热门股票；每月四次免佣*美股或澳股交易；每月2000组市免换汇里数度（适用于美元或澳元换汇）',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="30" height="30">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: '美股实时行情，深度买卖数据',
    text: '美港澳新A股、期货行情和新闻全球行情 24h 不间断播放，美股 40 档深度数据（L2）穿透盘口，助力洞悉未来走势。',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="30" height="30">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: '多语言系统和中英双语客服',
    text: 'APP支持多语言服务系统（中文简体/繁体、英文、印尼语、马来语、西班牙语等）；提供工作日 8 小时（9:30-17:30）中英双语专属客服。',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="30" height="30">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3-3a1 1 0 0 0-1.4-1.4L19 6.2l-.7-.7a1 1 0 0 0-1.4 0" />
        <path d="M9 8H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="13" y2="16" />
      </svg>
    ),
    title: '强大交易决策工具，轻松发掘投资机会',
    text: '提供多时间周期K线图、丰富技术指标及多种期权策略分析，结合公司财务数据、基本面信息与专业估值分析，帮助您更高效地发现交易机会，精准把握市场节奏。',
  },
];

export default function TigerFintech() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="tf-hero">
        <div className="tf-hero-copy">
          <h1 className="tf-hero-title">
            全球投资，<br />更简单一点
          </h1>
          <div className="tf-hero-rule" />
          <p className="tf-hero-sub">
            连接全球资本市场，为新西兰投资者<br />
            提供更高效、更便捷的投资体验。
          </p>
        </div>
        <div className="tf-hero-visual">
          <img src="/assets/globe.png" alt="Tiger Trade global investment platform" />
        </div>
      </section>

      {/* About */}
      <section className="tf-about">
        <div className="tf-about-copy">
          <h2 className="tf-about-heading">关于 Tiger Fintech NZ</h2>
          <p>
            Tiger Fintech NZ <strong>老虎证券</strong>新西兰是纳斯达克上市科技券商旗下品牌，服务全球超过千万用户，致力于通过金融科技降低全球投资门槛，让更多投资者轻松参与全球市场。
          </p>
          <p>
            无论是长期投资、全球资产配置，还是关注热门科技企业，Tiger Trade 都致力于为投资者提供更便捷、高效的全球投资体验。
          </p>
        </div>
        <div className="tf-stats-grid">
          {STATS.map((s) => (
            <div className={`tf-stat-card tf-stat-${s.type}`} key={s.label}>
              {s.icon && <div className="tf-stat-icon">{s.icon}</div>}
              <div className="tf-stat-label">{s.label}</div>
              <div className="tf-stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="tf-features">
        <h2 className="tf-features-heading">功能亮点</h2>
        <div className="tf-features-grid">
          {FEATURES.map((f) => (
            <article className="tf-feature-card" key={f.title}>
              <div className="tf-feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="tf-cta">
        <div className="tf-cta-mascot" aria-hidden="true">
          <img src="/assets/globe.png" alt="" />
        </div>
        <div className="tf-cta-center">
          <a
            className="tf-cta-btn"
            href="https://www.tigertrade.com/nz"
            target="_blank"
            rel="noreferrer"
          >
            了解更多 Tiger Trade 功能 →
          </a>
          <p className="tf-cta-sub">EXPLORE TIGER TRADE</p>
        </div>
      </section>
    </PageLayout>
  );
}
