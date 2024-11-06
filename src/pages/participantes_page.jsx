import React from 'react'
import Participantes from '../components/participantes'
import Banner from '../components/banner'
import SubHeader from '../components/SubHeader'
import { useParams } from 'react-router-dom'


export const PartcipantPage = () => {

  const { param } = useParams()
  
  let participantes

  var c = parseInt(param)
  switch (c) {
    case 1:
      participantes = [
        { id: 1, nombre: 'Juan Pérez', clase: 'Estudiante', email: 'juan.perez@usm.cl' },
        { id: 2, nombre: 'María González', clase: 'Estudiante', email: 'maria.gonzalez@usm.cl' },
        { id: 3, nombre: 'Laura Díaz', clase: 'Profesor/a', email: 'laura.diaz@usm.cl' },
        { id: 4, nombre: 'Carlos Ruiz', clase: 'Ayudante', email: 'carlos.ruiz@usm.cl' },
      ];
      break
    case 2:
      participantes = [
        { id: 5, nombre: 'Sofía Morales', clase: 'Estudiante', email: 'sofia.morales@usm.cl' },
        { id: 6, nombre: 'Diego López', clase: 'Estudiante', email: 'diego.lopez@usm.cl' },
        { id: 7, nombre: 'Ana Torres', clase: 'Profesor/a', email: 'ana.torres@usm.cl' },
        { id: 8, nombre: 'Pedro Sánchez', clase: 'Ayudante', email: 'pedro.sanchez@usm.cl' },
      ];
      break
    case 3:
      participantes = [
        { id: 9, nombre: 'Claudia Rojas', clase: 'Estudiante', email: 'claudia.rojas@usm.cl' },
        { id: 10, nombre: 'Javier Fernández', clase: 'Estudiante', email: 'javier.fernandez@usm.cl' },
        { id: 11, nombre: 'Patricia Herrera', clase: 'Profesor/a', email: 'patricia.herrera@usm.cl' },
        { id: 12, nombre: 'Lucas Méndez', clase: 'Ayudante', email: 'lucas.mendez@usm.cl' },
      ];
      break
    case 4:
      participantes = [
        { id: 13, nombre: 'María Silva', clase: 'Estudiante', email: 'maria.silva@usm.cl' },
        { id: 14, nombre: 'Fernando Gómez', clase: 'Estudiante', email: 'fernando.gomez@usm.cl' },
        { id: 15, nombre: 'Carmen López', clase: 'Profesor/a', email: 'carmen.lopez@usm.cl' },
        { id: 16, nombre: 'Ricardo Torres', clase: 'Ayudante', email: 'ricardo.torres@usm.cl' },
      ];
      break
    case 5:
      participantes = [
        { id: 17, nombre: 'Lucía Martínez', clase: 'Estudiante', email: 'lucia.martinez@usm.cl' },
        { id: 18, nombre: 'Andrés González', clase: 'Estudiante', email: 'andres.gonzalez@usm.cl' },
        { id: 19, nombre: 'Verónica Castro', clase: 'Profesor/a', email: 'veronica.castro@usm.cl' },
        { id: 20, nombre: 'José Pérez', clase: 'Ayudante', email: 'jose.perez@usm.cl' },
      ];
      break
    case 6:
      participantes = [
        { id: 21, nombre: 'Nicolás Reyes', clase: 'Estudiante', email: 'nicolas.reyes@usm.cl' },
        { id: 22, nombre: 'Sofia Paredes', clase: 'Estudiante', email: 'sofia.paredes@usm.cl' },
        { id: 23, nombre: 'Patricio Moya', clase: 'Profesor/a', email: 'patricio.moya@usm.cl' },
        { id: 24, nombre: 'Gabriela Ortiz', clase: 'Ayudante', email: 'gabriela.ortiz@usm.cl' },
      ];
      break
    case 7:
      participantes = [
        { id: 25, nombre: 'Esteban Navarro', clase: 'Estudiante', email: 'esteban.navarro@usm.cl' },
        { id: 26, nombre: 'Andrea Salazar', clase: 'Estudiante', email: 'andrea.salazar@usm.cl' },
        { id: 27, nombre: 'Ignacio Moreno', clase: 'Profesor/a', email: 'ignacio.moreno@usm.cl' },
        { id: 28, nombre: 'María José Soto', clase: 'Ayudante', email: 'mariajose.soto@usm.cl' },
      ];
      break
    case 8:
      participantes = [
        { id: 29, nombre: 'Claudio Vázquez', clase: 'Estudiante', email: 'claudio.vazquez@usm.cl' },
        { id: 30, nombre: 'Rocío Fuentes', clase: 'Estudiante', email: 'rocio.fuentes@usm.cl' },
        { id: 31, nombre: 'Felipe Álvarez', clase: 'Profesor/a', email: 'felipe.alvarez@usm.cl' },
        { id: 32, nombre: 'Ximena Cordero', clase: 'Ayudante', email: 'ximena.cordero@usm.cl' },
      ];
      break
    case 9:
      participantes = [
        { id: 33, nombre: 'Fernando Castro', clase: 'Estudiante', email: 'fernando.castro@usm.cl' },
        { id: 34, nombre: 'Patricia Guzmán', clase: 'Estudiante', email: 'patricia.guzman@usm.cl' },
        { id: 35, nombre: 'Joaquín Delgado', clase: 'Profesor/a', email: 'joaquin.delgado@usm.cl' },
        { id: 36, nombre: 'Beatriz Rivas', clase: 'Ayudante', email: 'beatriz.rivas@usm.cl' },
      ];
      break
    case 10:
      participantes = [
        { id: 37, nombre: 'Cristóbal Valdés', clase: 'Estudiante', email: 'cristobal.valdes@usm.cl' },
        { id: 38, nombre: 'Claudia Aguirre', clase: 'Estudiante', email: 'claudia.aguirre@usm.cl' },
        { id: 39, nombre: 'Francisco Andrade', clase: 'Profesor/a', email: 'francisco.andrade@usm.cl' },
        { id: 40, nombre: 'Ana María López', clase: 'Ayudante', email: 'anamaria.lopez@usm.cl' },
      ];
      break
  }
  

  return (
    <>
      <div>
        <Banner/>
      </div>

      <div>
        <SubHeader/>
      </div>
      <div>
        <Participantes
        participantesData={participantes}
        />
      </div>
    </>
  )
}

export default PartcipantPage
