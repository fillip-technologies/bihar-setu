import tourismImg from '../assets/sectors/tourism.jpg'
import educationImg from '../assets/sectors/education.jpg'
import agricultureImg from '../assets/sectors/agriculture.jpg'
import technologyImg from '../assets/sectors/technology.jpg'
import healthcareImg from '../assets/sectors/healthcare.jpg'

export const focusAreasData = {
  eyebrow: 'OUR FOCUS AREAS',
  title: {
    line1: 'Building Opportunities',
    line2: 'Across Key Sectors',
  },
  description:
    'Bihar Setu brings together ideas, institutions and communities to drive growth, collaboration and sustainable development across multiple sectors.',
  cta: {
    label: 'Explore All Focus Areas',
    path: '/focus-areas',
  },
  quote: {
    text: 'A more prosperous, inclusive and stronger Bihar.',
  },
  sectors: [
    {
      id: 'tourism',
      title: 'Tourism',
      description: "Showcasing Bihar's rich heritage, culture and natural beauty.",
      icon: 'Landmark',
      color: '#C66922',
      bgTint: 'bg-[#FFF7EF]',
      borderColor: 'border-[#F8DCC4]',
      arrowBg: 'bg-[#C66922]',
      image: tourismImg,
      link: '/focus-areas/tourism',
    },
    {
      id: 'education',
      title: 'Education',
      description: 'Creating learning opportunities for a brighter future.',
      icon: 'BookOpen',
      color: '#1D70B8',
      bgTint: 'bg-[#F0F6FE]',
      borderColor: 'border-[#CCE2FC]',
      arrowBg: 'bg-[#1D70B8]',
      image: educationImg,
      link: '/focus-areas/education',
    },
    {
      id: 'agriculture',
      title: 'Agriculture',
      description: 'Empowering farmers with innovation and better opportunities.',
      icon: 'Sprout',
      color: '#2E7D32',
      bgTint: 'bg-[#F0F8F2]',
      borderColor: 'border-[#CFEBD4]',
      arrowBg: 'bg-[#2E7D32]',
      image: agricultureImg,
      link: '/focus-areas/agriculture',
    },
    {
      id: 'technology',
      title: 'Technology',
      description: 'Enabling digital transformation and modern infrastructure.',
      icon: 'Cpu',
      color: '#6B38A6',
      bgTint: 'bg-[#F7F2FD]',
      borderColor: 'border-[#E4D1FA]',
      arrowBg: 'bg-[#6B38A6]',
      image: technologyImg,
      link: '/focus-areas/technology',
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Improving access to quality and affordable health services.',
      icon: 'Plus',
      color: '#D9384E',
      bgTint: 'bg-[#FEF1F3]',
      borderColor: 'border-[#FACDD4]',
      arrowBg: 'bg-[#D9384E]',
      image: healthcareImg,
      link: '/focus-areas/healthcare',
    },
  ],
}

export default focusAreasData
