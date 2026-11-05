import gatewayImg from '../assets/summit-images/summit-6.png'
import heritageImg from '../assets/summit-images/summit-3.png'
import districtImg from '../assets/summit-images/summit-1.png'
import registrationImg from '../assets/summit-images/summit-2.png'
import posterImg from '../assets/summit-images/summit-4.png'
import stageImg from '../assets/summit-images/summit-5.png'
import archwayImg from '../assets/summit-images/summit-6.png'

export const summitPageData = {
  hero: {
    badge: 'SPONSORSHIP PROPOSAL · CHAPTER 1',
    title: 'Bihar Setu',
    summitTitle: 'Tourism Summit 2026',
    tagline: 'Tourism Preparedness Before Tourism Promotion',
    dates: '7th & 8th December 2026',
    dayNotice: 'Monday & Tuesday · 2-Day Summit',
    venue: 'Urja Auditorium, Patna, Bihar',
    organizer: 'Organised by 404 Experiences',
    association: 'In Association with Bihar Tourism',
    archwayImage: archwayImg,
    stats: [
      {
        value: '8',
        label: 'Panel Sessions',
        desc: '4 moderated discussions each day',
      },
      {
        value: '114',
        label: 'Dish Food Pavilion',
        desc: 'Regional cuisines & launches',
      },
      {
        value: '~1,600',
        label: 'Delegates Expected',
        desc: 'Across 2 power-packed days',
      },
    ],
  },

  theSummit: {
    eyebrow: 'THE SUMMIT',
    headline: 'A Summit Built on One Idea',
    lead:
      'Bihar Setu Tourism Summit – Chapter 1 – 2026 will be a 2-day tourism, hospitality and B2B summit in Patna. It will connect government officials, district administrations, hotels, travel businesses, chefs, investors and cultural stakeholders on one platform.',
    coreIdea: {
      title: 'THE CORE IDEA',
      quote: 'Tourism Preparedness Before Tourism Promotion.',
      body:
        'Before Bihar is promoted widely, its destinations, visitor information, hospitality services and stakeholders must be ready and well coordinated. The summit will be where that preparation happens, with practical solutions rather than speeches alone.',
    },
    quickFacts: [
      {
        title: '7TH & 8TH DEC 2026',
        subtitle: '2-day summit, Monday and Tuesday',
        icon: 'Calendar',
      },
      {
        title: 'URJA AUDITORIUM',
        subtitle: 'Patna, Bihar',
        icon: 'MapPin',
      },
      {
        title: '~1,600 DELEGATES',
        subtitle: 'Expected across the 2 days',
        icon: 'Users',
      },
      {
        title: '8 PANELS',
        subtitle: '4 moderated panel discussions each day',
        icon: 'ShieldCheck',
      },
    ],
    whoIsInTheRoom: [
      'Hotels & Resorts',
      'Travel Agencies & Tour Operators',
      'DMCs',
      'Government & Districts',
      'Chefs & F&B Teams',
      'Investors',
      'Institutes',
      'Media',
    ],
    invitationNotice:
      'Organised by 404 Experiences · In Association with Bihar Tourism. Government leadership has been invited. Names will be shown only after the respective offices confirm.',
  },

  theTwoDays: {
    eyebrow: 'THE TWO DAYS',
    headline: 'What Happens at the Summit',
    day1: {
      tag: 'DAY 1',
      date: 'Monday, 7th December 2026',
      timing: '4 panels of 60 minutes each, 10:45 AM to 4:45 PM. Government and industry speakers will share the same stage.',
      panels: [
        {
          num: 'Panel 1',
          title: 'Tourism Preparedness Before Tourism Promotion',
          desc: 'Addressing baseline readiness, tourist safety benchmarks, and coordination protocols required prior to mass promotional campaigns.',
        },
        {
          num: 'Panel 2',
          title: "Developing Bihar's Districts as Tourism Destinations",
          desc: 'Empowering district administrations, local entrepreneurs, and cultural custodians to cultivate distinct regional circuits.',
        },
        {
          num: 'Panel 3',
          title: 'Tourism Infrastructure, Investment and Transport Connectivity',
          desc: 'Enhancing roadways, air connections, rail hubs, and last-mile transport while creating structured pathways for private capital.',
        },
        {
          num: 'Panel 4',
          title: "Bihar's Culture, Cuisine and Local Tourism Experiences",
          desc: 'Transforming regional culinary traditions, folk arts, and historic narratives into experiential travel offerings.',
        },
      ],
    },
    day2: {
      tag: 'DAY 2',
      date: 'Tuesday, 8th December 2026',
      timing: '4 panels of 60 minutes each, 10:45 AM to 4:45 PM. Government and industry speakers will share the same stage.',
      panels: [
        {
          num: 'Panel 5',
          title: 'District Administration, Visitor Safety and Tourism',
          desc: 'Institutionalizing tourist policing, standardized emergency response, visitor dispute resolution, and district hospitality cells.',
        },
        {
          num: 'Panel 6',
          title: 'Tourism Infrastructure and Visitor Readiness',
          desc: 'Installing verified bilingual signage, clean highway amenities, certified homestay guidelines, and modernized tourist kiosks.',
        },
        {
          num: 'Panel 7',
          title: "Bihar's Food, Culture and Rural Tourism Experiences",
          desc: 'Bridging agrarian communities, farm stays, artisan clusters, and heritage villages with eco-conscious travelers.',
        },
        {
          num: 'Panel 8',
          title: 'Digital Tourism, Travel Businesses and Local Economic Opportunities',
          desc: 'Leveraging digital platforms, booking engines, travel tech, and influencer storytelling to drive local operator revenue.',
        },
      ],
    },
    eveningProgramme: {
      title: 'EVENING PROGRAMME AND LAUNCHES',
      desc:
        'Ministerial addresses and felicitations will take place each evening. The Bihar Tourism Promotional Video, the Bihar Tourism Theme Song and the Bihar Tourism Guide Book will be launched on stage, and the 114-Dish Bihar Food Pavilion will be inaugurated. Dinner, music and food pavilion experiences will follow.',
      launches: [
        'Bihar Tourism Promotional Video Launch',
        'Official Bihar Tourism Theme Song',
        'Comprehensive Bihar Tourism Guide Book',
        'Inauguration of the 114-Dish Bihar Food Pavilion',
        'Cultural Dinner & Musical Performances',
      ],
    },
    moderationNote:
      'Each panel will be moderated in a news-channel style (suitable for live streaming): 5 min introduction, 15 min government view, 20 min industry challenges, 15 min joint solutions and 5 min summary. Speaker names and timings are subject to confirmation.',
  },

  theExperience: {
    eyebrow: 'THE EXPERIENCE',
    headline: 'Where Your Brand Will Be Seen',
    subtitle: 'High-visibility experiential and branding spaces across the Urja Auditorium campus',
    spaces: [
      {
        id: 'gateway',
        title: 'Arrival Gateway with Sponsor Pillars',
        desc: 'Iconic entry arch welcoming every minister, VIP delegate, and industry leader with dedicated multi-tier sponsor branding.',
        image: gatewayImg,
      },
      {
        id: 'heritage',
        title: 'Cultural Walk: Heritage Panels',
        desc: 'Sprawling outdoor promenade featuring backlit exhibition panels tracing Bihar’s timeless historical and spiritual landmarks.',
        image: heritageImg,
      },
      {
        id: 'districts',
        title: 'District Storytelling Panels',
        desc: 'Dedicated architectural plaza displaying bespoke storytelling pillars representing each of Bihar’s 38 vibrant districts.',
        image: districtImg,
      },
      {
        id: 'registration',
        title: 'Registration Counters',
        desc: 'High-traffic indoor registration lobby where all 1,600+ delegates receive branded badge kits, guides, and credential lanyards.',
        image: registrationImg,
      },
      {
        id: 'corridor',
        title: 'Corridor Poster Exhibition',
        desc: 'Gallery-style indoor corridors illuminated by spotlight fixtures for sustained delegate engagement between panel sessions.',
        image: posterImg,
      },
      {
        id: 'stage',
        title: 'Main Stage and Backdrop',
        desc: 'Grand auditorium stage with 4K backdrop screens, ministerial lectern, and side display banners visible to the full plenary audience.',
        image: stageImg,
      },
    ],
    reservationNote:
      'Concept visuals and venue views. Sponsor space is reserved on the Gateway Pillars, Posters, LEDs, Stage, Registration and Food Pavilion according to category.',
  },

  registration: {
    eyebrow: 'PARTICIPATION & PARTNERSHIP',
    title: 'Register for Bihar Setu Tourism Summit 2026',
    subtitle:
      'Join tourism leaders, operators, hoteliers, district officers, chefs, investors, and civic delegates. Submit your registration or sponsorship inquiry below.',
    categories: [
      'Hotels, Homestays & Resorts',
      'Travel Agencies & Tour Operators',
      'DMCs & Destination Managers',
      'Government Officials & District Teams',
      'Chefs, F&B & Gastronomy Brands',
      'Investors & Tourism Infrastructure',
      'Institutes, Universities & Research',
      'Media, Press & Content Creators',
      'Individual Delegate & Civic Guide',
    ],
    roles: [
      'Summit Delegate (General Attendance)',
      'Sponsorship & Brand Partner',
      'Speaker / Panel Expert Contributor',
      'Exhibitor (114-Dish Food Pavilion / Craft)',
      'Accredited Media & Press Delegate',
    ],
    districts: [
      'Patna',
      'Gaya',
      'Bhagalpur',
      'Muzaffarpur',
      'Nalanda',
      'Darbhanga',
      'Purnia',
      'Rohtas',
      'Saran',
      'Begusarai',
      'Vaishali',
      'Madhubani',
      'Samastipur',
      'Munger',
      'Bhojpur',
      'West Champaran',
      'East Champaran',
      'Katihar',
      'Araria',
      'Arwal',
      'Aurangabad',
      'Banka',
      'Buxar',
      'Gopalganj',
      'Jamui',
      'Jehanabad',
      'Kaimur (Bhabua)',
      'Khagaria',
      'Kishanganj',
      'Lakhisarai',
      'Madhepura',
      'Nawada',
      'Saharsa',
      'Sheikhpura',
      'Sheohar',
      'Sitamarhi',
      'Siwan',
      'Supaul',
    ],
  },
}

