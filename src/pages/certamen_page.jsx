import React from 'react'
import Curso from '../components/curso'
import Banner from '../components/banner'
import DocumentManager from '../components/PDF_manager'


export const CursoPage = () => {
  return (
    <>
      <div>
        <Banner/>
      </div>

      <div>
        <Curso/>
        </div>
        <DocumentManager
        nombre="Certamenes Anteriores"
        documento="Certamen "
        />
      <div>

      </div>
    </>
  )
}

export default CursoPage
