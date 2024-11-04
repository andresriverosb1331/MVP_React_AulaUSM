import React from 'react'
import Noticias from '../components/Noticia_card'
import Banner from '../components/banner'
import Miga_de_pan from '../components/miga_de_pan'

export const Noticias_avisos = () => {
  return (
    <>
      <div>
        <Banner/>
      </div>
      <div>
        <Miga_de_pan/>
      </div>
      <div>
        <Noticias/>
      </div>


    </>
  )
}

export default Noticias_avisos
