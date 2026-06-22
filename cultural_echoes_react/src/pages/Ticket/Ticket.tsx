import PageLayout from '@/components/layout/PageLayout';

const BENEFITS = [
  { title: '礼遇一', deposit: 'NZD $1,000', tickets: 2 },
  { title: '礼遇二', deposit: 'NZD $2,000', tickets: 3 },
];

const STEPS = [
  {
    number: 1,
    icon: '♙+',
    text: '同意活动条款并通过活动链接进行注册并开户入金',
    qrLabel: '活动条款二维码',
    qrSrc: '/assets/highlight-1.jpg', // Replace with your first QR code
  },
  { number: 2, icon: '▣', text: '入金达标并进行任意买入交易' },
  {
    number: 3,
    icon: '⇧',
    text: '联系老虎官方微信客服完成审核',
    qrLabel: '官方客服微信二维码',
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
            <h1>购票方式</h1>
            <p className="tk-hero-en">TICKETING</p>
            <span className="tk-gold-rule" />
            <p className="tk-intro">
              您可以通过参与“老虎证券新西兰”的Cultural Echoes 2026活动享门票福利或前往官方购票平台购买Echoes of Culture 2026 演出门票。
            </p>
          </div>
          <div className="tk-hero-image">
            <img src="/assets/choir-people-2.JPG" alt="The Cloud Chamber Singers performing" />
          </div>
        </section>

        <section className="tk-section tk-benefits">
          <div className="tk-section-heading">
            <span className="tk-heading-icon">◇</span>
            <h2>方式一：参与“老虎证券新西兰”Cultural Echoes 2026活动，享门票福利</h2>
            <span className="tk-heading-line" />
          </div>
          <p className="tk-section-intro">
            通过活动成为“老虎证券新西兰”新客户并满足其一礼遇条件，即可领取 Echoes of Culture 2026 演出门票。
          </p>

          <div className="tk-benefit-grid">
            {BENEFITS.map((benefit) => (
              <article className="tk-benefit-card" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>新客户净入金满 <strong>{benefit.deposit}</strong>并进行买入交易，可获得：</p>
                <div className="tk-ticket-reward">
                  <span className="tk-ticket-icon">★</span>
                  <strong>{benefit.tickets}</strong>
                  <span>张</span>
                </div>
                <p className="tk-event-name">Echoes of Culture 2026<br />演出门票</p>
                {/*<div className="tk-conditions">
                  <h4>活动条件：</h4>
                  <p>✓ 完成开户</p>
                  <p>✓ 首次入金达到指定金额</p>
                  <p>✓ 完成任意 1 笔真实交易</p>
                </div>*/}
                
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
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7.2 3.5 10 7.8 8.3 9.5a15.5 15.5 0 0 0 6.2 6.2l1.7-1.7 4.3 2.8v2.1a2 2 0 0 1-2 2A15.4 15.4 0 0 1 3.1 5.5a2 2 0 0 1 2-2h2.1Z" />
              </svg>
              <span>官方客服电话：0800 884 437</span>
            </a>

            {/*<div className="tk-compliance">
              <span>i</span>
              <div>
                <strong>合规说明</strong>
                <p>两个活动不可同时参与，具体规则及奖励发放以官方活动条款为准。投资涉及风险，市场波动可能导致资产价值变化，请谨慎决策。</p>
              </div>
            </div>*/}
          </div>
        </section>

        <section className="tk-section">
          <div className="tk-section-heading">
            <span className="tk-heading-icon">◎</span>
            <h2>方式二：Auckland Live 官网购票</h2>
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
            <h2>方式三：Ticketmaster 官网购票</h2>
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

        <p className="tk-thanks">
          <strong>Tiger Fintech (NZ) Limited (“老虎证券新西兰”)免责声明：</strong>{' '}
          投资/交易金融工具有风险，包括损失超出您初始投资金额的风险。衍生品、杠杆、和虚拟资产交易具有高风险且并不适合所有投资者。这不是金融建议。
          任何被讨论、分享和评论的内容都没有考虑您的投资目标或财务需求。请阅读<a href="https://www.itiger.com/nz/" target="_blank" rel="noreferrer">我们网站</a>
          上的
          <a href="https://www.itiger.com/nz/" target="_blank" rel="noreferrer">披露声明</a>
          以及
          <a href="https://www.itiger.com/nz/" target="_blank" rel="noreferrer">条款</a>
          ，并在开户或作出投资决定之前考虑获取或继续持有金融产品是否适合你。图形和图表仅用于说明问题。过去的表现并不是未来结果的可靠指标。由 Tiger Fintech (NZ) Limited (NZCN: 8187510) 发布。
        </p>
      </div>
    </PageLayout>
  );
}
