import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="hero-panel"
      >
        <div className="eyebrow">
          <Sparkles size={14} />
          Digital portfolio
        </div>
        <h1>AQUIN ANIL</h1>
        <p className="hero-subheading">MY DIGITAL UNIVERSE</p>
        <p className="hero-tags">Websites • Projects • AI • Minecraft • Developer Tools</p>
        <p className="hero-description">
          Explore everything I'm building, experimenting with, and creating — all in one place.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-button">
            Explore Projects
            <ArrowRight size={16} />
          </a>
          <a href="#about" className="secondary-button">
            About Me
          </a>
        </div>
      </motion.div>
    </section>
  )
}
