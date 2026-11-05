import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import HomeSummitShowcase from './components/HomeSummitShowcase'
import FocusAreas from './components/FocusAreas'
import WhyBiharSetu from './components/WhyBiharSetu'
import OurMission from './components/OurMission'
import HowWeWork from './components/HowWeWork'
import WhoCanConnect from './components/WhoCanConnect'
import HomeFormsSection from './components/HomeFormsSection'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />

      <div id="about">
        <AboutSection />
      </div>

      <div id="tourism-summit">
        <HomeSummitShowcase />
      </div>

      <div id="focus-areas">
        <FocusAreas />
      </div>

      <div id="why-bihar-setu">
        <WhyBiharSetu />
      </div>

      <div id="our-mission">
        <OurMission />
      </div>

      <div id="how-we-work">
        <HowWeWork />
      </div>

      <div id="who-can-connect">
        <WhoCanConnect />
      </div>

      <div id="homepage-forms">
        <HomeFormsSection />
      </div>
    </div>
  )
}
