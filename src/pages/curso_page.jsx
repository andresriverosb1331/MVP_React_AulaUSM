import React from 'react'
import Curso from '../components/curso'
import Banner from '../components/banner'
import { useParams } from 'react-router-dom'


export const CursoPage = () => {
  const { param } = useParams()
  console.log(param)
  return (
    <>

      <div>
        <Curso p={param}/>
      </div>
    </>
  )
}

export default CursoPage
