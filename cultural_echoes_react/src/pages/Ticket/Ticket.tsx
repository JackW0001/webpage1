import PageLayout from '@/components/layout/PageLayout';

const BENEFITS = [
  { title: '基础礼遇', deposit: 'USD $1,000', tickets: 2 },
  { title: '尊享礼遇', deposit: 'USD $2,000', tickets: 3 },
];

const STEPS = [
  {
    number: 1,
    icon: '♙+',
    text: '通过活动渠道码进行注册并完成开户',
    qrLabel: '活动渠道码',
    qrSrc: '/assets/highlight-1.jpg', // Replace with your first QR code
  },
  { number: 2, icon: '▣', text: '首次入金并完成任意 1 笔真实交易' },
  {
    number: 3,
    icon: '⇧',
    text: '提交相关截图至官方客服完成审核',
    qrLabel: '官方客服微信',
    qrSrc: '/assets/highlight-2.jpg', // Replace with your second QR code
  },
];

function QrCode({ label, src }: { label: string; src?: string }) {
  return (
    <div className="tk-qr-wrap">
      {src ? (
        <img className="tk-qr" src={src} alt={`${label}二维码`} />
      ) : (
        <div className="tk-qr tk-qr-empty">添加二维码</div>
      )}
      <span>{label}</span>
    </div>
  );
}

export default function Ticket() {
  return (
    <PageLayout>
      <div className="tk-page">
        <section className="tk-hero">
          <div className="tk-hero-copy">
            <h1>购票渠道</h1>
            <p className="tk-hero-en">TICKETING CHANNELS</p>
            <span className="tk-gold-rule" />
            <p className="tk-intro">
              您可以通过老虎证券赠票福利或官方购票平台<br />
              获取 Echoes of Culture 2026 演出门票。
            </p>
          </div>
          <div className="tk-hero-image">
            <img src="/assets/choir-people-2.JPG" alt="The Cloud Chamber Singers performing" />
          </div>
        </section>

        <section className="tk-section tk-benefits">
          <div className="tk-section-heading">
            <span className="tk-heading-icon">◇</span>
            <h2>渠道一：老虎证券赠票福利</h2>
            <span className="tk-heading-line" />
          </div>
          <p className="tk-section-intro">
            成为老虎证券新用户并满足活动条件，即有机会免费领取 Echoes of Culture 2026 演出门票。
          </p>

          <div className="tk-benefit-grid">
            {BENEFITS.map((benefit) => (
              <article className="tk-benefit-card" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>新用户首次入金满 <strong>{benefit.deposit}</strong>，可获得：</p>
                <div className="tk-ticket-reward">
                  <span className="tk-ticket-icon">★</span>
                  <strong>{benefit.tickets}</strong>
                  <span>张</span>
                </div>
                <p className="tk-event-name">Echoes of Culture 2026<br />演出门票</p>
                <div className="tk-conditions">
                  <h4>活动条件：</h4>
                  <p>✓ 完成开户</p>
                  <p>✓ 首次入金达到指定金额</p>
                  <p>✓ 完成任意 1 笔真实交易</p>
                </div>
              </article>
            ))}
          </div>

          <div className="tk-steps">
            <h3>活动参与步骤</h3>
            <div className="tk-step-grid">
              {STEPS.map((step, index) => (
                <article className="tk-step" key={step.number}>
                  <span className="tk-step-icon">{step.icon}</span>
                  <strong>STEP {step.number}</strong>
                  <p>{step.text}</p>
                  {step.qrLabel && <QrCode label={step.qrLabel} src={step.qrSrc} />}
                  {index < STEPS.length - 1 && <span className="tk-step-arrow">›</span>}
                </article>
              ))}
            </div>

            <a className="tk-phone" href="tel:0800884437">
              ☎ <span>官方客服电话：0800 884 437</span>
            </a>

            <div className="tk-compliance">
              <span>i</span>
              <div>
                <strong>合规说明</strong>
                <p>两个活动不可同时参与，具体规则及奖励发放以官方活动条款为准。投资涉及风险，市场波动可能导致资产价值变化，请谨慎决策。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tk-section">
          <div className="tk-section-heading">
            <span className="tk-heading-icon">◎</span>
            <h2>渠道二：Auckland Live 官网购票</h2>
            <span className="tk-heading-line" />
          </div>
          <div className="tk-purchase-card">
            <img src="/assets/venue-stage.jpg" alt="Auckland Live venue" />
            <div>
              <p>观众可通过 Auckland Live 官方网站进入演出页面，查看演出信息、票价、座位区域及购票安排。</p>
              <a href="https://www.aucklandlive.co.nz/" target="_blank" rel="noreferrer">
                前往 Auckland Live 官网购票 <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="tk-section">
          <div className="tk-section-heading">
            <span className="tk-heading-icon">◇</span>
            <h2>渠道三：Ticketmaster 官网购票</h2>
            <span className="tk-heading-line" />
          </div>
          <div className="tk-purchase-card">
            <div className="tk-ticketmaster-image">ticketmaster®</div>
            <div>
              <p>观众也可通过 Ticketmaster 官方网站搜索 Echoes of Culture 2026，并按照页面指引完成选座及购票。</p>
              <a href="https://www.ticketmaster.co.nz/" target="_blank" rel="noreferrer">
                前往 Ticketmaster 官网购票 <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <p className="tk-thanks">★ 感谢您的支持，期待与您共同见证 Echoes of Culture 2026 的精彩时刻！</p>
      </div>
    </PageLayout>
  );
}
