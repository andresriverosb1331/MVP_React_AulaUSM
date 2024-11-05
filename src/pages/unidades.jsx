import React from 'react'
import DocumentViewer from '../components/PDF_manager'
import Banner from '../components/banner'

export const UnidadPage = () => {
  return (
    <>
      <div>
        <Banner/>
      </div>

      <div>
        <DocumentViewer/>
      </div>
    </>
  )
}

export default UnidadPage
