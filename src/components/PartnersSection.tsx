const clients = [
  'WK Mens Salon',
  '100 Cafe',
  'GULF Exchange',
  'Retro Bites',
  'Pink Blossom chocolate',
  'Joe General',
  'La table',
  'AL Hajji Legal Consultant and Attorneys',
  'Hamda beauty Salon',
  'Brudore.qa',
  'Bonds',
  'Cotto by Bonds',
  'Shrimpy.qa',
  'Top Car Showroom',
  "Mort's",
];

export default function PartnersSection() {
  return (
    <section className="page-section" id="partners">
      <div className="page-hero">
        <div className="section__container">
          <span className="section__label">Clients</span>
          <h1 className="page-hero__title">Our Clients</h1>
        </div>
      </div>

      <div className="section section--partners">
        <div className="section__container">
        <div className="section__header">
          <span className="section__label">Clients</span>
          <h2 className="section__title">Our Clients</h2>
        </div>

        <div className="clients-grid">
          {clients.map((client) => (
            <article key={client} className="client-card">
              <h3>{client}</h3>
            </article>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
