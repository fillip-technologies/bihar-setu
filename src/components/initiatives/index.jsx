import InitiativesHero from './components/InitiativesHero'
import InitiativesTourismSummit from './components/InitiativesTourismSummit'
import TourismSummitForm from './components/TourismSummitForm'
import InitiativesCTA from './components/InitiativesCTA'
import { initiativesData, summitFormData } from '../../data/initiativesData'

export default function InitiativesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <InitiativesHero data={initiativesData.hero} />
      <InitiativesTourismSummit />
      <TourismSummitForm data={summitFormData} />
      <InitiativesCTA />
    </div>
  )
}
