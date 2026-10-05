/**
 * How We Work - Centralized Data Structure
 * Bihar Setu (बिहार सेतु)
 * Single Source of Truth for /how-we-work route
 */

export const howWeWorkData = {
  hero: {
    badge: 'Operational Blueprint',
    title: 'From an Idea to',
    highlight: 'Measurable Impact',
    desc: 'Bihar Setu follows a structured approach to ensure that ideas move beyond discussion and develop into practical, collaborative and impact-oriented initiatives.',
    primaryCta: {
      label: 'Explore Our Methodology',
      href: '#process',
    },
    secondaryCta: {
      label: 'Partner With Us',
      href: '/partner-with-us',
    },
    metrics: [
      {
        value: '5-Stage',
        label: 'Structured Pipeline',
      },
      {
        value: '38',
        label: 'Districts Reach',
      },
      {
        value: '100%',
        label: 'Civic Accountability',
      },
    ],
  },

  process: {
    eyebrow: 'Our Approach',
    title: 'A Clear and Collaborative',
    highlight: 'Process',
    subtitle:
      'We follow a step-by-step approach that brings together people, ideas and resources to create real and lasting impact for Bihar.',
    steps: [
      {
        number: 1,
        title: 'Identify',
        desc: 'We identify a challenge, opportunity or development requirement within a particular sector or community.',
        icon: 'Search',
        image: 'step-1.jpg',
        align: 'left',
      },
      {
        number: 2,
        title: 'Understand',
        desc: 'We collect relevant information, stakeholder perspectives and ground-level insights to understand the subject properly.',
        icon: 'BookOpen',
        image: 'step-2.jpg',
        align: 'right',
      },
      {
        number: 3,
        title: 'Connect',
        desc: 'We bring together the institutions, industries, professionals, experts and communities relevant to the initiative.',
        icon: 'Users',
        image: 'step-3.jpg',
        align: 'left',
      },
      {
        number: 4,
        title: 'Design',
        desc: 'We develop a structured summit, campaign, programme, consultation, digital platform or implementation plan.',
        icon: 'Lightbulb',
        image: 'step-4.jpg',
        align: 'right',
      },
      {
        number: 5,
        title: 'Collaborate',
        desc: 'We build meaningful partnerships with organisations, experts, institutions and implementation partners.',
        icon: 'Handshake',
        image: 'step-5.jpg',
        align: 'left',
      },
      {
        number: 6,
        title: 'Implement',
        desc: 'We convert the plan into organised action with defined responsibilities, timelines and expected outcomes.',
        icon: 'Settings2',
        image: 'step-6.jpg',
        align: 'right',
      },
      {
        number: 7,
        title: 'Measure',
        desc: 'We evaluate participation, progress, outcomes and the long-term value created through the initiative.',
        icon: 'BarChart3',
        image: 'step-7.jpg',
        align: 'left',
      },
    ],
  },

  cta: {
    eyebrow: "Ready to Collaborate with Bihar Setu?",
    title: 'Partner With Us to Create',
    highlight: 'Lasting Impact',
    desc: 'Join hands with Bihar Setu to turn ideas into action. Whether you are an institution, business, professional, or community organisation — there is a meaningful role for you.',
    primaryCta: {
      label: 'Partner With Bihar Setu',
      href: '/partner-with-us',
    },
    secondaryCta: {
      label: 'Submit an Initiative',
      href: '/initiatives',
    },
  },
}
