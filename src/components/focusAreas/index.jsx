import FocusAreasHero from './components/FocusAreasHero'
import FocusTourism from './components/FocusTourism'
import FocusAgriculture from './components/FocusAgriculture'
import FocusHealthcare from './components/FocusHealthcare'
import FocusEducation from './components/FocusEducation'
import FocusEmployment from './components/FocusEmployment'
import FocusWomen from './components/FocusWomen'
import FocusTechnology from './components/FocusTechnology'
import FocusCulture from './components/FocusCulture'
import FocusInfrastructure from './components/FocusInfrastructure'
import { focusAreasPageData } from '../../data/focusAreasData'

export default function FocusAreasPage() {
  const getSector = (id) => focusAreasPageData.sectors.find((s) => s.id === id)

  const tourismData = getSector('tourism-hospitality')
  const agricultureData = getSector('agriculture-rural-development')
  const healthcareData = getSector('healthcare-wellness')
  const educationData = getSector('education-skill-development')
  const employmentData = getSector('employment-entrepreneurship')
  const womenData = getSector('women-youth-development')
  const technologyData = getSector('technology-innovation')
  const cultureData = getSector('culture-heritage')
  const infrastructureData = getSector('infrastructure-environment')

  return (
    <div className="flex flex-col w-full bg-[#FAF7F2]">
      {/* ── Section 1: Hero Section ── */}
      <FocusAreasHero data={focusAreasPageData.hero} />

      {/* ── Priority Sectors Catalog ── */}
      <div id="sectors-catalog">
        {/* ── Section 2: Sector 01 - Tourism and Hospitality (Left Text, Right Image) ── */}
        {tourismData && <FocusTourism data={{ ...tourismData, num: '01' }} />}

        {/* ── Section 3: Sector 02 - Agriculture and Rural Development (Left Image, Right Text) ── */}
        {agricultureData && <FocusAgriculture data={{ ...agricultureData, num: '02' }} />}

        {/* ── Section 4: Sector 03 - Healthcare and Wellness (Left Text, Right Image) ── */}
        {healthcareData && <FocusHealthcare data={{ ...healthcareData, num: '03' }} />}

        {/* ── Section 5: Sector 04 - Education and Skill Development (Left Image, Right Text) ── */}
        {educationData && <FocusEducation data={{ ...educationData, num: '04' }} />}

        {/* ── Section 6: Sector 05 - Employment and Entrepreneurship (Left Text, Right Image) ── */}
        {employmentData && <FocusEmployment data={{ ...employmentData, num: '05' }} />}

        {/* ── Section 7: Sector 06 - Women and Youth Development (Left Image, Right Text) ── */}
        {womenData && <FocusWomen data={{ ...womenData, num: '06' }} />}

        {/* ── Section 8: Sector 07 - Technology and Innovation (Left Text, Right Image) ── */}
        {technologyData && <FocusTechnology data={{ ...technologyData, num: '07' }} />}

        {/* ── Section 9: Sector 08 - Culture and Heritage (Left Image, Right Text) ── */}
        {cultureData && <FocusCulture data={{ ...cultureData, num: '08' }} />}

        {/* ── Section 10: Sector 09 - Infrastructure and Environment (Left Text, Right Image) ── */}
        {infrastructureData && <FocusInfrastructure data={{ ...infrastructureData, num: '09' }} />}
      </div>
    </div>
  )
}
