import SummitHero from './components/SummitHero'
import SummitOverview from './components/SummitOverview'
import SummitSchedule from './components/SummitSchedule'
import SummitExperience from './components/SummitExperience'
import SummitRegistration from './components/SummitRegistration'
import { summitPageData } from '../../data/summitData'

export default function SummitSection() {
  return (
    <div className="w-full flex flex-col">
      <SummitHero data={summitPageData.hero} />
      <SummitOverview data={summitPageData.theSummit} />
      <SummitExperience data={summitPageData.theExperience} />
      <SummitSchedule data={summitPageData.theTwoDays} />

      <SummitRegistration data={summitPageData.registration} />
    </div>
  )
}

