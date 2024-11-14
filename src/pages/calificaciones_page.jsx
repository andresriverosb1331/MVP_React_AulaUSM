import React from 'react'
import Calificaciones from '../components/calificaciones'
import Banner from '../components/banner'
import SubHeader from '../components/SubHeader'
import { useParams } from 'react-router-dom'


export const CalificacionesPage = () => {
  const { param }  = useParams()
  console.log("califpage:"+param)
  
  return (
    <>

      <div>
        <SubHeader param={param}/>
      </div>

      <div>
        <Calificaciones param={param}/>
      </div>
    </>
  )
}

export default CalificacionesPage
