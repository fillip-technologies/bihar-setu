import tourismImg from '../assets/sectors/tourism.jpg'
import educationImg from '../assets/sectors/education.jpg'
import agricultureImg from '../assets/sectors/agriculture.jpg'
import technologyImg from '../assets/sectors/technology.jpg'
import healthcareImg from '../assets/sectors/healthcare.jpg'

// ─────────────────────────────────────────────────────────────
// Home Page Focus Areas Section Data
// ─────────────────────────────────────────────────────────────
export const focusAreasData = {
  title: {
    line1: 'Strategic Focus Areas for',
    line2: 'Progress & Transformation',
  },
  description:
    'Dedicated action tracks aligning government welfare, grassroots implementation, and digital access across vital sectors.',
  cta: {
    label: 'Explore All 9 Focus Areas',
    path: '/focus-areas',
  },
  quote: {
    text: 'Building strong foundations across core pillars to empower every household in Bihar.',
  },
  sectors: [
    {
      id: 'tourism',
      title: 'Tourism & Heritage',
      description: 'Promoting historical sites, eco-trails, and cultural circuits.',
      icon: 'Landmark',
      color: '#B86A28',
      bgTint: 'bg-[#FCF8F3]',
      borderColor: 'border-[#EADCCF]',
      arrowBg: 'bg-[#B86A28]',
      image: tourismImg,
      link: '/focus-areas#tourism-hospitality',
    },
    {
      id: 'education',
      title: 'Education & Skills',
      description: 'Empowering future generations with knowledge and modern skills.',
      icon: 'BookOpen',
      color: '#1B6B93',
      bgTint: 'bg-[#F2F8FB]',
      borderColor: 'border-[#CCE2ED]',
      arrowBg: 'bg-[#1B6B93]',
      image: educationImg,
      link: '/focus-areas#education-skill-development',
    },
    {
      id: 'agriculture',
      title: 'Agriculture & Rural',
      description: 'Empowering farmers with innovation and better opportunities.',
      icon: 'Sprout',
      color: '#2E7D32',
      bgTint: 'bg-[#F0F8F2]',
      borderColor: 'border-[#CFEBD4]',
      arrowBg: 'bg-[#2E7D32]',
      image: agricultureImg,
      link: '/focus-areas#agriculture-rural-development',
    },
    {
      id: 'technology',
      title: 'Technology & Innovation',
      description: 'Enabling digital transformation and modern infrastructure.',
      icon: 'Cpu',
      color: '#6B38A6',
      bgTint: 'bg-[#F7F2FD]',
      borderColor: 'border-[#E4D1FA]',
      arrowBg: 'bg-[#6B38A6]',
      image: technologyImg,
      link: '/focus-areas#technology-innovation',
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Wellness',
      description: 'Improving access to quality and affordable health services.',
      icon: 'Plus',
      color: '#D9384E',
      bgTint: 'bg-[#FEF1F3]',
      borderColor: 'border-[#FACDD4]',
      arrowBg: 'bg-[#D9384E]',
      image: healthcareImg,
      link: '/focus-areas#healthcare-wellness',
    },
  ],
}

// ─────────────────────────────────────────────────────────────
// Dedicated Focus Areas Page (/focus-areas) Master Data
// ─────────────────────────────────────────────────────────────
export const focusAreasPageData = {
  hero: {
    eyebrow: 'Focus Areas • प्रमुख कार्यक्षेत्र',
    titleLine1: 'Different Sectors',
    titleLine2: 'One Shared Purpose',
    lead: 'Bihar Setu works across sectors that directly influence Bihar’s economic growth, social development, employment opportunities and quality of life.',
    stats: [
      {
        value: '09',
        label: 'Priority Sectors',
        hindiLabel: 'प्रमुख क्षेत्र',
        desc: 'Economic & social development drivers',
      },
      {
        value: '38',
        label: 'Districts Reached',
        hindiLabel: 'जिले आच्छादित',
        desc: 'Grassroots statewide connectivity',
      },
      {
        value: '100%',
        label: 'Shared Purpose',
        hindiLabel: 'साझा संकल्प',
        desc: 'Citizen-centric empowerment',
      },
    ],
    ctaPrimary: {
      label: 'Explore 9 Sectors',
      targetId: '#sectors-catalog',
    },
    ctaSecondary: {
      label: 'Partner With Us',
      path: '/partner-with-us#partnership-form',
    },
  },

  // 9 Priority Focus Sectors provided by the user
  sectors: [
    {
      id: 'tourism-hospitality',
      num: '01',
      title: 'Tourism and Hospitality',
      hindiTitle: 'पर्यटन एवं आतिथ्य सत्कार',
      tagline: 'Preserving Heritage, Welcoming the World',
      description:
        'Supporting tourism preparedness, destination development, hospitality standards, visitor experience and stakeholder connectivity.',
      icon: 'Palmtree',
      color: '#E06222',
      bgTint: '#FEF3EB',
      stats: 'Bodh Gaya, Nalanda, Rajgir, Vaishali Circuits',
      pillars: [
        {
          id: 'preparedness',
          title: 'Tourism Preparedness',
          hindiTitle: 'पर्यटन तैयारी',
          desc: 'Enhancing civic infrastructure readiness, seasonal capacity planning, safety benchmarks, and clean visitor facilities across all heritage sites.',
          icon: 'ShieldCheck',
          tag: 'Readiness & Safety',
        },
        {
          id: 'destination',
          title: 'Destination Development',
          hindiTitle: 'गंतव्य विकास',
          desc: 'Holistic master-planning for Buddhist, Jain, Sufi, Ramayana, and Eco-tourism circuits including Bodh Gaya, Nalanda, Rajgir, Vaishali, and Rohtas.',
          icon: 'Landmark',
          tag: 'Circuit Expansion',
        },
        {
          id: 'hospitality',
          title: 'Hospitality Standards',
          hindiTitle: 'आतिथ्य मानक',
          desc: 'Establishing hygiene ratings, professional service training, certified village homestays, and authentic culinary experiences across accommodations.',
          icon: 'Award',
          tag: 'Quality Benchmarks',
        },
        {
          id: 'experience',
          title: 'Visitor Experience',
          hindiTitle: 'पर्यटक अनुभव',
          desc: 'Implementing multilingual audio guides, QR-based historical interpretations, seamless inter-district transit, and memorable cultural immersion.',
          icon: 'MapPin',
          tag: 'Immersive Journey',
        },
        {
          id: 'stakeholders',
          title: 'Stakeholder Connectivity',
          hindiTitle: 'हितधारक समन्वय',
          desc: 'Uniting local certified guides, tour operators, transport guilds, artisans, hoteliers, and state administration into a collaborative ecosystem.',
          icon: 'Handshake',
          tag: 'Ecosystem Bridge',
        },
      ],
      circuits: [
        { name: 'Buddhist Circuit', sites: 'Bodh Gaya • Rajgir • Nalanda • Vaishali' },
        { name: 'Jain & Sufi Heritage', sites: 'Pawapuri • Champapuri • Maner Sharif' },
        { name: 'Ramayana & Cultural', sites: 'Sitamarhi • Buxar • Ahilya Sthan • Darbhanga' },
        { name: 'Eco & Adventure', sites: 'Valmiki Tiger Reserve • Kakolat • Bhimbandh' },
      ],
      ctaAction: {
        label: 'Register for Tourism Summit',
        path: '/initiatives#summit-registration-form',
      },
    },
    {
      id: 'agriculture-rural-development',
      num: '02',
      title: 'Agriculture and Rural Development',
      hindiTitle: 'कृषि एवं ग्रामीण विकास',
      tagline: 'Innovating Fields, Empowering Farmers',
      description:
        'Encouraging agricultural innovation, farmer connectivity, rural entrepreneurship, food processing and better market access.',
      icon: 'Sprout',
      color: '#15803D',
      bgTint: '#F0FDF4',
      stats: 'Makhana, Shahi Litchi, Zardalu Mango & Agro MSMEs',
      keyFocus: [
        'Agricultural innovation & climate-resilient farming',
        'Direct farmer connectivity & digital mandi linkages',
        'Rural entrepreneurship & FPO capacity building',
        'Food processing units & value-addition clusters',
        'Expanded domestic and global market access',
      ],
      ctaAction: {
        label: 'Submit Agriculture Proposal',
        path: '/initiatives#summit-registration-form',
      },
    },
    {
      id: 'education-skill-development',
      num: '03',
      title: 'Education and Skill Development',
      hindiTitle: 'शिक्षा एवं कौशल विकास',
      tagline: 'Bridging Classroom to Career',
      description:
        'Connecting education with industry requirements through training, professional development and institutional collaboration.',
      icon: 'GraduationCap',
      color: '#2563EB',
      bgTint: '#EFF6FF',
      stats: 'Industry-Aligned Vocational & Tech Curricula',
      keyFocus: [
        'Industry-aligned technical & vocational curricula',
        'Continuous professional development for educators',
        'Higher education & institutional collaboration',
        'Internship gateways & corporate apprenticeship',
        'Digital literacy in tier-2 and tier-3 towns',
      ],
      ctaAction: {
        label: 'Submit Education Proposal',
        path: '/initiatives#summit-registration-form',
      },
    },
    {
      id: 'healthcare-wellness',
      num: '04',
      title: 'Healthcare and Wellness',
      hindiTitle: 'स्वास्थ्य एवं कल्याण',
      tagline: 'Accessible Care, Resilient Communities',
      description:
        'Supporting healthcare awareness, accessibility, institutional collaboration, wellness initiatives and responsible development.',
      icon: 'HeartPulse',
      color: '#DC2626',
      bgTint: '#FEF2F2',
      stats: 'Telemedicine, Preventive Health & District Clinics',
      keyFocus: [
        'Public health awareness & maternal-child nutrition',
        'Equitable healthcare accessibility in rural blocks',
        'Institutional collaboration with medical colleges',
        'Traditional wellness, Ayurveda & holistic health',
        'Responsible medical infrastructure development',
      ],
      ctaAction: {
        label: 'Submit Healthcare Enquiry',
        path: '/initiatives#summit-registration-form',
      },
    },
    {
      id: 'employment-entrepreneurship',
      num: '05',
      title: 'Employment and Entrepreneurship',
      hindiTitle: 'रोज़गार एवं उद्यमिता',
      tagline: 'Igniting Local Enterprise & Jobs',
      description:
        'Creating connections that support employment, start-ups, MSMEs, mentorship, business networking and entrepreneurship.',
      icon: 'Briefcase',
      color: '#7C3AED',
      bgTint: '#F5F3FF',
      stats: 'Incubators, MSME Grants & Angel Networks',
      keyFocus: [
        'Start-up incubation & seed capital enablement',
        'MSME scaling, compliance & credit access',
        'Mentorship networks from Bihar diaspora leaders',
        'B2B business networking & supplier matchmaking',
        'Job matching fairs for local youth in districts',
      ],
      ctaAction: {
        label: 'Submit Employment Initiative',
        path: '/initiatives#summit-registration-form',
      },
    },
    {
      id: 'technology-innovation',
      num: '06',
      title: 'Technology and Innovation',
      hindiTitle: 'प्रौद्योगिकी एवं नवाचार',
      tagline: 'Digital Foundations for Modern Governance',
      description:
        'Promoting digital development, responsible technology adoption, innovative solutions and data-based planning.',
      icon: 'Cpu',
      color: '#0891B2',
      bgTint: '#ECFEFF',
      stats: 'Civic Tech, AI Governance & Open Data',
      keyFocus: [
        'Citizen-facing digital public infrastructure',
        'Responsible technology adoption & ethical AI',
        'Innovative civic-tech solutions for local bodies',
        'Data-based developmental tracking and planning',
        'Cybersecurity & digital rights awareness',
      ],
      ctaAction: {
        label: 'Submit Tech Collaboration',
        path: '/initiatives#summit-registration-form',
      },
    },
    {
      id: 'culture-heritage',
      num: '07',
      title: 'Culture and Heritage',
      hindiTitle: 'संस्कृति एवं विरासत',
      tagline: 'Living Traditions, Global Renaissance',
      description:
        'Preserving and promoting Bihar’s heritage, languages, cuisine, festivals, music, art, literature and traditions.',
      icon: 'Sparkles',
      color: '#D97706',
      bgTint: '#FFFBEB',
      stats: 'Madhubani Art, Manjusha, Bhojpuri, Maithili & Magahi',
      keyFocus: [
        'Preservation of classical & folk architectural sites',
        'Promotion of Maithili, Bhojpuri, Magahi & Angika',
        'Artisan guilds for Madhubani, Tikuli & Sikki crafts',
        'Traditional Bihari cuisine, festivals & musical heritage',
        'Digital archives for folk literature and oral histories',
      ],
      ctaAction: {
        label: 'Register for Cultural Summit',
        path: '/initiatives#summit-registration-form',
      },
    },
    {
      id: 'infrastructure-environment',
      num: '08',
      title: 'Infrastructure and Environment',
      hindiTitle: 'बुनियादी ढांचा एवं पर्यावरण',
      tagline: 'Sustainable Growth, Ecological Harmony',
      description:
        'Encouraging sustainable infrastructure, improved connectivity, responsible urban development and environmental awareness.',
      icon: 'Building2',
      color: '#0D9488',
      bgTint: '#F0FDFA',
      stats: 'Green Expressways, Solar Arrays & Clean Ganga',
      keyFocus: [
        'Sustainable, climate-resilient civil infrastructure',
        'Last-mile multimodal road & bridge connectivity',
        'Responsible urban planning for tier-2 towns',
        'Ganga river rejuvenation & groundwater recharge',
        'Community environmental & renewable energy awareness',
      ],
      ctaAction: {
        label: 'Submit Infrastructure Enquiry',
        path: '/initiatives#summit-registration-form',
      },
    },
    {
      id: 'women-youth-development',
      num: '09',
      title: 'Women and Youth Development',
      hindiTitle: 'महिला एवं युवा विकास',
      tagline: 'Empowered Leaders, Generational Transformation',
      description:
        'Supporting leadership, education, skills, entrepreneurship and meaningful participation among women and young people.',
      icon: 'Users',
      color: '#DB2777',
      bgTint: '#FDF2F8',
      stats: 'Jeevika SHGs, Girls Leadership & Youth Councils',
      keyFocus: [
        'Grassroots women leadership in Panchayati Raj',
        'Financial literacy & micro-enterprise for SHGs',
        'Girls education, STEM access & sports mentorship',
        'Youth civic councils for policy feedback',
        'Safe, inclusive spaces & equal opportunity pathways',
      ],
      ctaAction: {
        label: 'Submit Youth & Women Proposal',
        path: '/initiatives#summit-registration-form',
      },
    },
  ],
}

export default focusAreasData
