import React from 'react'
import Curso from '../components/curso'
import Banner from '../components/banner'
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


export const CursoPage = () => {
  return (
    <>
      <div>
        <Banner/>
      </div>

      <div>
        <Curso/>
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
