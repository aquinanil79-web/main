import { ArrowUpRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="content-section contact-section">
      <div className="section-heading-wrap">
        <p className="section-kicker">LET'S CONNECT</p>
        <h2>LET'S CONNECT</h2>
      </div>

      <div className="contact-panel">
        <p>Interested in my projects or want to connect? Explore my work and get in touch.</p>
        <div className="contact-actions">
          <a href="#projects" className="primary-button compact-button">
            Explore My Work
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
