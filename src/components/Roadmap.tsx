const roadmapStages = [
  {
    id: '01',
    title: 'Student & Builder',
    date: '2026',
    status: 'CURRENT',
    statusClass: 'status-current',
    description:
      'Building strong foundations while exploring programming, technology, AI, cybersecurity, and software development.',
    points: [
      'Class 11 — Computer Science & Mathematics',
      'Programming fundamentals',
      'Python',
      'Git & GitHub',
      'Linux',
      'Computer Science fundamentals',
      'Real-world projects',
      'Minecraft server & Discord development',
    ],
  },
  {
    id: '02',
    title: 'Programming & Computer Science',
    date: '2026–2027',
    status: 'LEARNING',
    statusClass: 'status-learning',
    description:
      'Strengthening the fundamentals required to become a confident software developer.',
    points: [
      'Python',
      'JavaScript / TypeScript',
      'HTML & CSS',
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Git & GitHub',
      'Linux & CLI',
      'SQL',
      'REST APIs',
    ],
  },
  {
    id: '03',
    title: 'Full-Stack Development',
    date: '2027',
    status: 'NEXT',
    statusClass: 'status-next',
    description:
      'Turning ideas into complete, functional and deployable applications.',
    points: [
      'React',
      'Next.js',
      'Backend Development',
      'FastAPI / Node.js',
      'PostgreSQL',
      'Supabase',
      'Authentication',
      'OAuth',
      'APIs',
      'Cloud Deployment',
      'Web Security',
    ],
  },
  {
    id: '04',
    title: 'AI Engineering',
    date: '2027–2028',
    status: 'FUTURE',
    statusClass: 'status-future',
    description:
      'Learning modern AI technologies and building practical AI-powered products.',
    points: [
      'Machine Learning fundamentals',
      'Generative AI',
      'Large Language Models',
      'AI APIs',
      'Prompt Engineering',
      'Embeddings',
      'Vector Databases',
      'RAG',
      'AI Agents',
      'AI Automation',
    ],
  },
  {
    id: '05',
    title: 'Cybersecurity',
    date: '2028–2029',
    status: 'FUTURE',
    statusClass: 'status-future',
    description:
      'Developing the knowledge required to understand, analyze and secure digital systems.',
    points: [
      'Computer Networking',
      'Linux Security',
      'Web Security',
      'Authentication & Authorization',
      'OWASP',
      'Secure Coding',
      'Vulnerability Analysis',
      'Ethical Hacking fundamentals',
      'Security Automation',
      'CTFs',
    ],
  },
  {
    id: '06',
    title: 'Cloud & DevOps',
    date: '2029–2030',
    status: 'FUTURE',
    statusClass: 'status-future',
    description:
      'Learning how real-world applications and infrastructure are deployed, maintained and scaled.',
    points: [
      'Cloud Computing',
      'Docker',
      'CI/CD',
      'Server Management',
      'Reverse Proxies',
      'Monitoring',
      'Logging',
      'Infrastructure',
      'Deployment Automation',
    ],
  },
  {
    id: '07',
    title: 'Technology & Cybersecurity Engineer',
    date: '2030+',
    status: 'GOAL',
    statusClass: 'status-goal',
    description:
      'Build a career combining software development, artificial intelligence, cybersecurity and cloud technologies.',
    points: [
      'Software Development',
      'AI',
      'Cybersecurity',
      'Cloud',
    ],
    final: 'Build real products, contribute to open source, gain industry experience, solve real-world problems and continuously learn new technologies.',
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="content-section roadmap-section">
      <div className="section-heading-wrap">
        <p className="section-kicker">MY ROADMAP</p>
        <h2>My Technology Roadmap</h2>
        <p className="section-subtitle">Learning. Building. Securing. Growing.</p>
        <p className="roadmap-supporting-text">
          My journey from learning the fundamentals to building real-world technology and
          cybersecurity solutions.
        </p>
      </div>

      <div className="roadmap" aria-label="Technology roadmap">
        {roadmapStages.map((stage, index) => {
          const isLeft = index % 2 === 0

          return (
            <article key={stage.id} className={`roadmap-item ${isLeft ? 'left' : 'right'}`}>
              <div className="roadmap-date">
                <span className="roadmap-date-label">ROADMAP</span>
                <time>{stage.date}</time>
              </div>

              <div className="roadmap-center" aria-hidden="true">
                <span className="roadmap-node" />
              </div>

              <div className="roadmap-card-wrap">
                <div className={`roadmap-card ${stage.statusClass}`}>
                  <div className="roadmap-card-header">
                    <div className="roadmap-stage-title">
                      {stage.id} — {stage.title}
                    </div>
                    <span className={`roadmap-status ${stage.statusClass}`}>{stage.status}</span>
                  </div>

                  <p className="roadmap-description">{stage.description}</p>

                  {stage.points.length > 0 && (
                    <ul className="roadmap-list" aria-label={`${stage.title} focus areas`}>
                      {stage.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {stage.final && <p className="roadmap-final">{stage.final}</p>}
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="roadmap-footer">
        <div className="roadmap-footer__line">Learn → Build → Secure → Improve</div>
        <p>The roadmap is not fixed. Technology evolves, and so will I.</p>
      </div>
    </section>
  )
}
