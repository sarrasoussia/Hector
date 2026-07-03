const featureItems = [
  {
    title: 'Safe & Reliable Execution',
    description:
      'Every project is delivered with strict safety standards, zero compromise on quality, and complete reliability from start to finish.',
  },
  {
    title: 'Experienced Leadership',
    description:
      'Our skilled engineers and management team lead every project with precision, planning, and hands-on involvement.',
  },
  {
    title: 'Quality Materials',
    description:
      'We use only premium-grade materials to ensure long-lasting structural strength and superior finishing.',
  },
  {
    title: 'Client-Centric Approach',
    description:
      'We work closely with clients at every stage, ensuring transparency, communication, and satisfaction.',
  },
  {
    title: 'Smart Planning',
    description:
      'Detailed scheduling, value engineering, and risk management help us deliver projects on time and on budget.',
  },
  {
    title: 'Sustainable Practices',
    description:
      'We follow responsible construction practices that support sustainability and long-term environmental value.',
  },
];

export default function AboutSection() {
  return (
    <section className="about-page" id="about">
      <div className="about-page__hero">
        <div className="section__container">
          <span className="section__label">About Us</span>
          <div className="about-page__breadcrumbs">
            <a href="#/">Home</a>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1 className="about-page__title">About Us</h1>
        </div>
      </div>

      <div className="section section--about">
        <div className="section__container">
          <div className="about-story">
            <div className="about-story__intro">
              <span className="section__label">Our Story</span>
              <h2 className="section__title">These are the keys to HECTOR QATAR&apos;s success.</h2>
            </div>
            <div className="about-story__content">
              <p className="about-text about-text--left">
                HECTOR QATAR is one of the most respected civil &amp; structural construction
                organizations. No project is too challenging or difficult; too big or small. Our
                goals for every project are the same: build it safely, on time, on budget, and
                with no unexpectedness.
              </p>
              <p className="about-text about-text--left">
                As a Qatar local contractor with extraordinary national resources and support, our
                main goal is to look after our clients&apos; needs. We are intimately involved in
                every project from beginning to end and make it a point to visit every project
                personally to ensure that our clients&apos; needs are met. From design, value
                engineering, scheduling, and the construction process through completion and punch
                list, bringing the job in on time and within budget is always our primary concern.
              </p>
            </div>
          </div>

          <div className="about-features">
            <div className="section__header">
              <span className="section__label">Our Feature</span>
              <h2 className="section__title">Why Choose Hector Qatar</h2>
            </div>

            <div className="about-features__grid">
              {featureItems.map((feature) => (
                <article key={feature.title} className="about-feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="about-values">
            <div className="section__header">
              <span className="section__label">More About Us</span>
              <h2 className="section__title">We Build with Design Consistency</h2>
            </div>

            <div className="about-values__grid">
              <article className="about-value-card">
                <span className="about-value-card__icon" aria-hidden="true" />
                <h3>Our Mission</h3>
                <p>
                  Our mission is to deliver safe, efficient, and cost-effective construction
                  solutions that meet and exceed client expectations. We are committed to executing
                  every project with professionalism, integrity, and technical excellence. By
                  closely managing every phase, from design and value engineering to construction
                  and completion, we ensure projects are delivered on time, within budget, and
                  without unexpected challenges. Safety, quality control, and client satisfaction
                  remain at the core of everything we do. We strive to build not just structures,
                  but lasting relationships through transparency, accountability, and dependable
                  performance.
                </p>
              </article>

              <article className="about-value-card">
                <span className="about-value-card__icon" aria-hidden="true" />
                <h3>Our Vision</h3>
                <p>
                  Our vision is to become one of Qatar&apos;s most trusted and preferred construction
                  partners by consistently delivering high-quality projects and innovative
                  solutions. We aim to set benchmarks in construction standards through disciplined
                  execution and continuous improvement. We seek sustainable growth by embracing
                  modern construction practices, skilled workmanship, and responsible project
                  management. Honesty, integrity, and reliability guide our decisions and
                  interactions at every level. By focusing on long-term value rather than
                  short-term gains, we envision building a future defined by excellence, trust,
                  and enduring success.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
