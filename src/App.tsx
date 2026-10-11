import { useMemo, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ProjectFilters } from './components/ProjectFilters'
import { ProjectGrid } from './components/ProjectGrid'
import { Roadmap } from './components/Roadmap'
import SplashCursor from './components/SplashCursor'
import { projectCategories, projects } from './data/projects'

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const visibleProjects = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory

      if (!matchesCategory) {
        return false
      }

      if (!normalizedSearch) {
        return true
      }

      const haystack = `${project.name} ${project.category} ${project.description}`.toLowerCase()
      return haystack.includes(normalizedSearch)
    })
  }, [activeCategory, searchTerm])

  return (
    <div className="site-shell">
      <SplashCursor />
      <Navbar />

      <main className="page-content">
          <Hero />

          <section id="projects" className="content-section">
            <div className="section-heading-wrap">
              <p className="section-kicker">MY PROJECTS</p>
              <h2>MY PROJECTS</h2>
              <p className="section-subtitle">
                A collection of websites, applications, communities, and experiments I've built.
              </p>
            </div>

            <ProjectFilters
              categories={projectCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />

            {visibleProjects.length > 0 ? (
              <ProjectGrid projects={visibleProjects} />
            ) : (
              <div className="empty-state" role="status">
                No projects match this search.
              </div>
            )}
          </section>

          <About />
          <Roadmap />
          <Contact />
        </main>

        <Footer />
    </div>
  )
}

export default App
