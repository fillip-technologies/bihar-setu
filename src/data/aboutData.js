import stupaImage from '../assets/about_stupa.jpg'
import bridgeImage from '../assets/why_bridge.jpg'

export const aboutData = {
  about: {
    eyebrow: 'ABOUT BIHAR SETU',
    title: {
      line1: 'A Unified Platform',
      line2: 'For A Stronger Bihar',
    },
    description:
      'Bihar Setu is a multi-sector platform connecting ideas, institutions, industries, professionals and communities to build meaningful opportunities and create sustainable development across Bihar.',
    cta: {
      label: 'Learn More',
      path: '/about',
    },
    highlights: [
      {
        id: 'connect',
        title: 'Connect People',
        subtitle: 'Bringing together communities, institutions and industries.',
        icon: 'Users',
        color: '#E06222',
        bgTint: 'bg-[#FDF0E6]',
      },
      {
        id: 'opportunities',
        title: 'Create Opportunities',
        subtitle: 'Enabling collaboration and sustainable growth.',
        icon: 'TrendingUp',
        color: '#2E9D58',
        bgTint: 'bg-[#EAF7EE]',
      },
      {
        id: 'stronger',
        title: 'Stronger Bihar',
        subtitle: 'Working towards an inclusive and prosperous future.',
        icon: 'MapPin',
        color: '#1E88E5',
        bgTint: 'bg-[#EAF4FD]',
      },
    ],
  },
  impact: {
    eyebrow: 'OUR IMPACT',
    title: {
      line1: 'Driving Meaningful',
      line2: 'Change in Bihar',
    },
    stats: [
      {
        id: 'focus-areas',
        value: '9+',
        label: 'Focus Areas',
        caption: 'Key sectors for inclusive growth',
        icon: 'LayoutGrid',
      },
      {
        id: 'stakeholders',
        value: '100+',
        label: 'Stakeholders',
        caption: 'Institutions, industries and communities',
        icon: 'Users',
      },
      {
        id: 'purpose',
        value: '1',
        label: 'Shared Purpose',
        caption: 'Sustainable development for all',
        icon: 'Target',
      },
      {
        id: 'opportunities-stat',
        value: 'Opportunities',
        label: '',
        caption: 'For a stronger and brighter Bihar',
        isTitleStat: true,
        icon: 'Infinity',
      },
    ],
  },
}

// ─────────────────────────────────────────────
// About page (/about)
// ─────────────────────────────────────────────
import tourismImg from '../assets/sectors/tourism.jpg'
import educationImg from '../assets/sectors/education.jpg'
import agricultureImg from '../assets/sectors/agriculture.jpg'
import technologyImg from '../assets/sectors/technology.jpg'
import healthcareImg from '../assets/sectors/healthcare.jpg'

export const aboutPageData = {
  hero: {
    breadcrumb: [
      { label: 'Home', path: '/' },
      { label: 'About Us' },
    ],
    eyebrow: 'ABOUT BIHAR SETU',
    heading: {
      title: 'About Bihar Setu',
      subtitle: 'A Bridge Between Bihar’s Potential and Its Future',
      hindiMotto: 'बिहार सेतु — जन-जन का डिजिटल प्रवेशद्वार',
    },
    paragraphs: [
      'Bihar Setu is a multi-sector development and collaboration platform created to connect ideas, institutions, industries, professionals, communities and citizens.',
      'Bihar possesses immense potential across tourism, agriculture, education, healthcare, technology, culture, employment, entrepreneurship and rural development. Meaningful progress requires the right people, resources, knowledge and opportunities to be connected through a common platform.',
      'Bihar Setu identifies practical challenges, explores opportunities and brings relevant stakeholders together to develop structured, implementable and impact-oriented initiatives.',
      'The platform works across sectors through summits, campaigns, stakeholder consultations, research, training programmes, digital platforms and development-focused initiatives.',
      'Bihar Setu creates the connections required to transform opportunities into action.',
    ],
    sectors: [
      'Tourism',
      'Agriculture',
      'Education',
      'Healthcare',
      'Technology',
      'Culture',
      'Employment',
      'Entrepreneurship',
      'Rural Development',
    ],
    highlights: [
      {
        id: 'challenge-solution',
        title: 'Action-Oriented Initiatives',
        desc: 'Identifies practical challenges, explores opportunities, and unites stakeholders for structured, high-impact implementation.',
        icon: 'Target',
      },
      {
        id: 'cross-sector',
        title: 'Multi-Format Engagement',
        desc: 'Works through state summits, grassroots campaigns, policy consultations, research, and modern digital platforms.',
        icon: 'Sparkles',
      },
      {
        id: 'transform-action',
        title: 'Opportunities Into Action',
        desc: 'Creates the strategic conduits required to convert Bihar’s raw demographic and cultural potential into measurable progress.',
        icon: 'TrendingUp',
      },
    ],
    actions: [
      { label: 'Explore Our Mission', path: '#our-mission', variant: 'primary' },
      { label: 'Why Bihar Setu', path: '#why-bihar-setu', variant: 'secondary' },
      { label: 'Our Vision', path: '#our-vision', variant: 'outline' },
    ],
    images: {
      main: {
        src: stupaImage,
        alt: 'Ancient Great Stupa with carved torana gateway in Bihar',
        caption: 'Rooted in 2,500+ Years of Wisdom & Heritage',
      },
      secondary: {
        src: bridgeImage,
        alt: 'Cable-stayed bridge over Ganga river symbolizing Bihar Setu',
        caption: 'Connecting 38 Districts to Modern Progress',
      },
    },
    meaning: {
      term: 'सेतु',
      transliteration: 'Setu · noun',
      definition: 'A bridge — that which spans divides, connects aspirations, and turns ideas into reality.',
    },
    badge: {
      icon: 'Landmark',
      label: 'Civic Collaboration Platform',
    },
    stats: [
      { icon: 'MapPin', value: '38', label: 'Districts', caption: 'Statewide civic reach' },
      { icon: 'LayoutGrid', value: '9+', label: 'Focus Sectors', caption: 'Core growth domains' },
      { icon: 'Users', value: '100+', label: 'Stakeholder Groups', caption: 'Institutions & citizens' },
      { icon: 'Target', value: '1', label: 'Shared Vision', caption: 'Transforming Bihar together' },
    ],
  },

  whyBiharSetu: {
    eyebrow: 'WHY BIHAR SETU',
    headline: 'Every Gap Needs a Bridge',
    definition: [
      'The word Setu means a bridge. Bihar Setu represents an integrated, transformative bridge connecting grassroots challenges with practical solutions, visionary ideas with on-ground implementation, and civic institutions with local communities.',
      'Across all 38 districts, vast regional talent, cultural heritage, and economic potential often remain disconnected from institutional backing and modern market access. Bihar Setu unites innovators, administrators, entrepreneurs, and citizens on a single collaborative platform—breaking traditional barriers to turn collective aspirations into measurable growth and sustainable development.',
    ],
    quote: 'Bihar Setu is where connections begin and collective progress becomes possible.',
    bridges: [
      {
        id: 'ideas-to-implementation',
        step: '01',
        title: 'Ideas to Implementation',
        from: 'Ideas',
        to: 'Implementation',
        description:
          'Connecting innovative ideas with the people, institutions and resources required to implement them.',
        icon: 'Lightbulb',
        color: '#E06222',
        bgTint: 'bg-[#FDF0E6]',
        borderTint: 'border-[#E06222]/30',
        path: '/initiatives',
        ctaLabel: 'Explore Initiatives',
      },
      {
        id: 'challenges-to-solutions',
        step: '02',
        title: 'Challenges to Solutions',
        from: 'Challenges',
        to: 'Solutions',
        description:
          'Identifying real challenges and bringing relevant stakeholders together to develop practical solutions.',
        icon: 'ShieldCheck',
        color: '#2563EB',
        bgTint: 'bg-[#EBF3FE]',
        borderTint: 'border-[#2563EB]/30',
        path: '/contact#contact-form',
        ctaLabel: 'Submit Enquiry',
      },
      {
        id: 'institutions-to-communities',
        step: '03',
        title: 'Institutions to Communities',
        from: 'Institutions',
        to: 'Communities',
        description:
          'Creating stronger connections between organisations, professionals and the communities they serve.',
        icon: 'Users',
        color: '#16A34A',
        bgTint: 'bg-[#EAF7EE]',
        borderTint: 'border-[#16A34A]/30',
        path: '/#who-can-connect',
        ctaLabel: 'Connect With Us',
      },
      {
        id: 'skills-to-opportunities',
        step: '04',
        title: 'Skills to Opportunities',
        from: 'Skills',
        to: 'Opportunities',
        description:
          'Connecting talent, experience and knowledge with employment, entrepreneurship and development opportunities.',
        icon: 'Briefcase',
        color: '#D97706',
        bgTint: 'bg-[#FEF3E7]',
        borderTint: 'border-[#D97706]/30',
        path: '/partner-with-us#partnership-form',
        ctaLabel: 'Partner For Skills',
      },
      {
        id: 'tradition-to-technology',
        step: '05',
        title: 'Tradition to Technology',
        from: 'Tradition',
        to: 'Technology',
        description:
          'Preserving Bihar’s cultural identity while encouraging innovation, technology and modern development.',
        icon: 'Cpu',
        color: '#0D9488',
        bgTint: 'bg-[#E6F7F5]',
        borderTint: 'border-[#0D9488]/30',
        path: '/#focus-areas',
        ctaLabel: 'Explore Sectors',
      },
      {
        id: 'potential-to-progress',
        step: '06',
        title: 'Potential to Progress',
        from: 'Potential',
        to: 'Progress',
        description:
          'Transforming Bihar’s natural, cultural, human and economic potential into measurable progress.',
        icon: 'TrendingUp',
        color: '#0284C7',
        bgTint: 'bg-[#E0F2FE]',
        borderTint: 'border-[#0284C7]/30',
        path: '#our-vision',
        ctaLabel: 'View Vision Pillars',
      },
    ],
  },

  vision: {
    eyebrow: 'OUR VISION',
    headline: 'A Connected, Collaborative and Opportunity Driven Bihar',
    tagline: 'Empowering Every Citizen · Connecting Every District',
    description1:
      'Our vision is to become a trusted multi-sector platform that connects people, institutions, industries and ideas for the inclusive and sustainable development of Bihar.',
    description2:
      'We envision a Bihar where challenges are addressed through collaboration, local potential receives the right platform, young people gain access to meaningful opportunities, and institutions work together to create long-term impact.',
    pillars: [
      {
        id: 'collaborative-governance',
        title: 'Collaborative Problem-Solving',
        desc: 'Addressing systemic and regional challenges through active dialogue and cross-sector partnerships.',
        icon: 'Handshake',
        color: '#17382E',
        path: '#our-mission',
        actionLabel: 'View Mission',
      },
      {
        id: 'local-spotlight',
        title: 'Platform for Local Potential',
        desc: 'Giving visibility to indigenous crafts, district enterprises, cultural treasures, and grassroots innovators.',
        icon: 'Award',
        color: '#E06222',
        path: '/#focus-areas',
        actionLabel: 'Explore Sectors',
      },
      {
        id: 'youth-empowerment',
        title: 'Youth & Opportunity Access',
        desc: 'Opening gateways for youth to access mentorship, tech skills, venture capital, and career pathways.',
        icon: 'Sparkles',
        color: '#2563EB',
        path: '/contact#contact-form',
        actionLabel: 'Connect With Us',
      },
      {
        id: 'long-term-impact',
        title: 'Long-Term Impact & Continuity',
        desc: 'Ensuring state development initiatives generate compounding socioeconomic dividends over decades.',
        icon: 'Compass',
        color: '#16A34A',
        path: '#join-us',
        actionLabel: 'Join Bihar Setu',
      },
    ],
  },

  mission: {
    eyebrow: 'OUR MISSION',
    headline: 'Turning Connections Into Meaningful Action',
    subtitle:
      'Seven strategic mission objectives driving transformative, measurable outcomes across all communities in Bihar.',
    items: [
      {
        number: '01',
        id: 'build-connections',
        title: 'Build Meaningful Connections',
        description:
          'Connect institutions, industries, professionals, experts, communities and emerging talent.',
        icon: 'Users',
        image: tourismImg,
        color: '#E06222',
        tag: 'Networking & Synergy',
        path: '/#who-can-connect',
        ctaText: 'Connect With Us',
      },
      {
        number: '02',
        id: 'identify-opportunities',
        title: 'Identify Real Opportunities',
        description:
          'Understand sector-specific challenges and identify practical opportunities for growth and development.',
        icon: 'Lightbulb',
        image: educationImg,
        color: '#2563EB',
        tag: 'Research & Strategy',
        path: '/#focus-areas',
        ctaText: 'Explore Sectors',
      },
      {
        number: '03',
        id: 'implementable-initiatives',
        title: 'Develop Implementable Initiatives',
        description:
          'Create structured programmes, campaigns, summits and digital platforms with clear objectives.',
        icon: 'Settings2',
        image: technologyImg,
        color: '#16A34A',
        tag: 'Execution & Scale',
        path: '/initiatives',
        ctaText: 'View Initiatives',
      },
      {
        number: '04',
        id: 'encourage-collaboration',
        title: 'Encourage Collaboration',
        description:
          'Promote meaningful collaboration between public institutions, private organisations, professionals and communities.',
        icon: 'Handshake',
        image: agricultureImg,
        color: '#7C3AED',
        tag: 'Partnership Ecosystem',
        path: '#join-us',
        ctaText: 'Partner With Us',
      },
      {
        number: '05',
        id: 'support-local-potential',
        title: 'Support Local Potential',
        description:
          'Provide visibility and opportunities to Bihar’s districts, businesses, professionals, entrepreneurs and communities.',
        icon: 'Sparkles',
        image: healthcareImg,
        color: '#D97706',
        tag: 'District Empowerment',
        path: '/partner-with-us#partnership-form',
        ctaText: 'Partner With Us',
      },
      {
        number: '06',
        id: 'promote-skills',
        title: 'Promote Skills and Entrepreneurship',
        description:
          'Encourage professional development, employment, innovation, business growth and entrepreneurship.',
        icon: 'TrendingUp',
        image: stupaImage,
        color: '#0284C7',
        tag: 'Venture & Talent',
        path: '/initiatives',
        ctaText: 'Skill Initiatives',
      },
      {
        number: '07',
        id: 'measurable-impact',
        title: 'Create Measurable Impact',
        description:
          'Focus on outcomes that create long-term social, professional and economic value for Bihar.',
        icon: 'Target',
        image: bridgeImage,
        color: '#DC2626',
        tag: 'Accountability & Data',
        path: '#join-us',
        ctaText: 'Join Bihar Setu',
      },
    ],
  },

  cta: {
    eyebrow: 'BE PART OF THE CHANGE',
    title: 'Bridge the Gap. Build Bihar’s Tomorrow.',
    description:
      'Whether you are an institution, industry leader, researcher, entrepreneur, student, or proud citizen — your voice and collaboration can accelerate Bihar’s progress.',
    primaryAction: {
      label: 'Explore Focus Areas',
      path: '/#focus-areas',
    },
    secondaryAction: {
      label: 'Partner With Us',
      path: '/#who-can-connect',
    },
  },
}

export default aboutData


