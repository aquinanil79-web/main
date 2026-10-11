export type Project = {
  name: string
  url: string
  category: string
  description: string
  icon: string
}

export const projects: Project[] = [
  {
    name: 'Aquin Anil — Profile',
    url: 'https://v0-aquin.vercel.app',
    category: 'Portfolio',
    description: 'My personal profile, portfolio, skills, projects, and information.',
    icon: 'user',
  },
  {
    name: 'Vortex SMP',
    url: 'https://v0-vortex-smp.vercel.app',
    category: 'Minecraft',
    description: 'Minecraft SMP project and server community website.',
    icon: 'cube',
  },
  {
    name: 'SMM Store',
    url: 'https://followerig.lovable.app',
    category: 'SMM',
    description: 'Social media marketing and growth platform.',
    icon: 'store',
  },
  {
    name: 'YUGAM SMP',
    url: 'https://yugam-s2.lovable.app',
    category: 'Minecraft',
    description: 'Minecraft survival/anarchy server project and community.',
    icon: 'cube',
  },
  {
    name: 'AI Chat',
    url: 'https://chataivelora.vercel.app',
    category: 'AI',
    description: 'An AI-powered chat application.',
    icon: 'sparkles',
  },
  {
    name: 'Discord Bot Generator',
    url: 'https://dcbotgen.vercel.app',
    category: 'Developer Tool',
    description: 'A web application for creating and generating Discord bots.',
    icon: 'bot',
  },
  {
    name: 'More Projects',
    url: '#',
    category: 'Projects',
    description: 'More projects and experiments by Aquin Anil.',
    icon: 'layers',
  },
]

export const projectCategories = [
  'All',
  'Portfolio',
  'Minecraft',
  'SMM',
  'AI',
  'Developer Tool',
  'Projects',
]
