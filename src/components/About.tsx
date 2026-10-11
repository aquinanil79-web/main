export function About() {
  const focusAreas = [
    'Computer Science',
    'Cybersecurity',
    'Software Development',
    'AI',
    'Web Development',
    'Minecraft Communities',
    'Automation Tools',
    'Developer Projects',
  ]

  return (
    <section id="about" className="content-section about-section">
      <div className="section-heading-wrap">
        <p className="section-kicker">ABOUT ME</p>
        <h2>ABOUT ME</h2>
      </div>

      <div className="about-panel">
        <p>
          I'm Aquin Anil, a technology enthusiast and developer interested in computer science,
          cybersecurity, software development, AI, and web development. I enjoy building websites,
          Minecraft communities, automation tools, AI applications, and developer projects.
        </p>

        <div className="about-tags" aria-label="Areas of interest">
          {focusAreas.map((area) => (
            <span key={area} className="about-tag">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
