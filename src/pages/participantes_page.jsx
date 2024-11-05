import React from 'react'
import Participantes from '../components/participantes'
import Banner from '../components/banner'
import SubHeader from '../components/SubHeader'


export const PartcipantPage = () => {
  return (
    <>
      <div>
        <Banner/>
      </div>

      <div>
        <SubHeader/>
      </div>
      <div>
        <Participantes/>
      </div>
    </>
  )
}

export default PartcipantPage
