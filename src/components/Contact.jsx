const contactDetails = [
  {
    label: 'Company email',
    value: 'infocodecelix@gmail.com',
  },
  {
    label: 'Founder email',
    value: 'foundercodecelix@gmail.com',
  },
  {
    label: 'Phone',
    value: '+39 350 854 0334',
  },
  {
    label: 'Office address',
    value: 'Centro Direzionale, Is. A2, Scala B, 80143 Napoli NA, Italy',
  },
];

const whatsappUrl = 'https://wa.me/393508540334?text=Hi%20CodeCelix%2C%20I%27d%20like%20to%20discuss%20a%20project.';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact__grid">
        <div className="contact__aside">
          <h2 className="contact__title">Have a project in mind?</h2>
          <p className="contact__intro">Send us an email or message us on WhatsApp. We reply within one working day.</p>
          <div className="contact__actions">
            <a className="btn btn--solid" href="mailto:infocodecelix@gmail.com">Send email</a>
            <a
              className="contact__whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
        <div className="contact__info">
          {contactDetails.map((detail) => (
            <div className="contact-card" key={detail.label}>
              <div className="contact-card__body">
                <div className="contact-card__label">{detail.label}</div>
                <div className="contact-card__value">{detail.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
