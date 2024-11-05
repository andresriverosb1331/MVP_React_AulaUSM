import React from 'react'
import Calificaciones from '../components/calificaciones'
import Banner from '../components/banner'
import SubHeader from '../components/SubHeader'


export const CalificacionesPage = () => {
  return (
    <>
      <div>
        <Banner/>
      </div>
      <div>
        <SubHeader/>
      </div>

      <div>
        <Calificaciones/>
      </div>
    </>
  )
}

export default CalificacionesPage
