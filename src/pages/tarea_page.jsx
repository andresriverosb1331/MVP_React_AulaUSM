import React from 'react'
import Curso from '../components/curso'
import Banner from '../components/banner'
import DocumentManager from '../components/PDF_manager'


export const CursoPage = () => {
  return (
    <>


      <div>
        <Curso/>
        </div>
        <DocumentManager
        nombre="Enunciados de Tareas"
        documento="Tarea "
        />
      <div>

      </div>
    </>
  )
}

export default CursoPage
