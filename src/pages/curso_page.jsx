import React from 'react'
import Curso from '../components/curso'
import DocumentManager from '../components/PDF_manager'

const RuleSection = ({ title, rules }) => {
  return (
    <section>
      <h2>{title}</h2>
      <ol>
        {rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ol>
    </section>
  );
};

const rules = [
  "Nota promedio de Tareas ≥ 55.",
  "Todas las entregas del Proyecto son obligatorias.",
  "Nota por Certamen ≥ 40.",
  "Asistencia Anual ≥ 80%.",
];
import { useParams } from 'react-router-dom'


export const CursoPage = () => {
  const { param } = useParams()
  console.log(param)
  return (
    <>

      <div>
        <Curso p={param}/>
      </div>
      <RuleSection
      title="Reglas del Curso"
      rules={rules}
      />
      <div>
        <DocumentManager
        nombre="Documentos del Curso"
        documento="Documento "
        />
      </div>
    </>
  )
}

export default CursoPage
