import React, { useState } from 'react';
import '../stylesheets/Card/contenedor.scss';
import '../stylesheets/Card/card.scss';
import { NavLink } from 'react-router-dom'
const coursesData = {
  '2024-02': [    
    {
    id:1,
    subject: 'Informática',
    courseName: 'Seguridad de sistemas',
    parallel: '200/201/202',
    code: 'INF346',
    assignments: [
      { title: 'Entrega 1 proyecto', date: '11/09/2024' },
      { title: 'Tarea 1', date: '12/11/2024' },
      { title: 'Tarea 2', date: '26/11/2024' }
    ]
  },
  {
    id:2,
    subject: 'Física',
    courseName: 'Física 140',
    parallel: '200/201/202',
    code: 'FIS140',
    assignments: [
      { title: 'Certamen 1', date: '08/09/2024' },
      { title: 'Certamen 2', date: '11/11/2024' },
      { title: 'Certamen Recuperativo', date: '4/12/2024' }
    ]
  },
  {
    id:3,
    subject: 'Informática',
    courseName: 'Computación Gráfica',
    parallel: '200/201/202',
    code: 'INF3XX',
    assignments: [
      { title: 'Entrega 1 proyecto', date: '07/09/2024' },
      { title: 'Entrega 2 proyecto', date: '05/11/2024' },
      { title: 'Informe Final', date: '05/12/2024' },
    ]
  },
  {
    id:4,
    subject: 'Informática',
    courseName: 'Sistemas de gestión',
    parallel: '200/201/202',
    code: 'INF266',
    assignments: [
      { title: 'Certamen 1', date: '13/09/2024' },
      { title: 'Certamen 2', date: '06/11/2024' },
      { title: 'Informe', date: '01/12/2024' }
    ]
  }
],
  '2024-01': [    {
    id:5,
    subject: 'Informática',
    courseName: 'Computación Científica',
    parallel: '200/201/202',
    code: 'INF285',
    assignments: [
      { title: 'Entrega 1 proyecto', date: '07/09/2024' },
      { title: 'Entrega 2 proyecto', date: '05/11/2024' },
      { title: 'Entrega 3 proyecto', date: '27/11/2024' }
    ]
  },
  {
    id:6,
    subject: 'Informática',
    courseName: 'Diseño de interfaces usuarias',
    parallel: '200/201/202',
    code: 'INF322',
    assignments: [
      { title: 'Entrega 1 proyecto', date: '07/09/2024' },
      { title: 'Entrega 2 proyecto', date: '05/11/2024' },
      { title: 'Entrega 3 proyecto', date: '27/11/2024' }
    ]
  },
  {
    id:7,
    subject: 'Informática',
    courseName: 'Diseño de interfaces usuarias',
    parallel: '200/201/202',
    code: 'INF322',
    assignments: [
      { title: 'Entrega 1 proyecto', date: '07/09/2024' },
      { title: 'Entrega 2 proyecto', date: '05/11/2024' },
      { title: 'Entrega 3 proyecto', date: '27/11/2024' }
    ]
  },
  {
    id:8,
    subject: 'Informática',
    courseName: 'Diseño de interfaces usuarias',
    parallel: '200/201/202',
    code: 'INF322',
    assignments: [
      { title: 'Entrega 1 proyecto', date: '07/09/2024' },
      { title: 'Entrega 2 proyecto', date: '05/11/2024' },
      { title: 'Entrega 3 proyecto', date: '27/11/2024' }
    ]
  }
],
  '2023-02': [    
    {
      id:9,
      subject: 'Informática',
      courseName: 'Lenguajes en programación en WWW',
      parallel: '200',
      code: 'INF301',
      assignments: [
        { title: 'Entrega 1 proyecto', date: '07/09/2024' },
        { title: 'Entrega 2 proyecto', date: '05/11/2024' },
        { title: 'Entrega 3 proyecto', date: '27/11/2024' }
      ]
    },
    {
      id:10,
      subject: 'Informática',
      courseName: 'Diseño de interfaces usuarias',
      parallel: '200/201/202',
      code: 'INF322',
      assignments: [
        { title: 'Entrega 1 proyecto', date: '07/09/2024' },
        { title: 'Entrega 2 proyecto', date: '05/11/2024' },
        { title: 'Entrega 3 proyecto', date: '27/11/2024' }
      ]
    },
    {
      id:11,
      subject: 'Informática',
      courseName: 'Diseño de interfaces usuarias',
      parallel: '200/201/202',
      code: 'INF322',
      assignments: [
        { title: 'Entrega 1 proyecto', date: '07/09/2024' },
        { title: 'Entrega 2 proyecto', date: '05/11/2024' },
        { title: 'Entrega 3 proyecto', date: '27/11/2024' }
      ]
    },
    {
      id:12,
      subject: 'Informática',
      courseName: 'Diseño de interfaces usuarias',
      parallel: '200/201/202',
      code: 'INF322',
      assignments: [
        { title: 'Entrega 1 proyecto', date: '07/09/2024' },
        { title: 'Entrega 2 proyecto', date: '05/11/2024' },
        { title: 'Entrega 3 proyecto', date: '27/11/2024' }
      ]
    }
  ]
};

const Card = () => {
  const [activeSemester, setActiveSemester] = useState('2024-02');

  return (
    <div className="contenedor-ramos ">
      <div className="contenedor-mini-nav contenedor-ramos-interno nav-tabs">
        Mis Cursos:
        {Object.keys(coursesData).map((semester) => (
          <button
            key={semester}
            className={`nav-link ${activeSemester === semester ? 'active' : ''}`}
            onClick={() => setActiveSemester(semester)}
          >
            {semester}
          </button>
        ))}
      </div>

      <div className="Card1">
        {coursesData[activeSemester].map((course, index) => (
          <div key={index} className="info-ramo">
            {/* Link para acceder al ramo */}
            <NavLink to={`/curso_page/${course.id}`} className="info-ramo-link">
              
              <div className={course.subject === "Física" ? "rectanglefis1 nombre-ramo" : "rectangle1 nombre-ramo"}>
                <span className={course.subject === "Física" ? "rectanglefis2" : "rectangle2"}>
                  {course.subject}
                </span>
                <span className="course-info">
                  {course.courseName} | Paralelos: {course.parallel} ({activeSemester}) ({course.code})
                </span>
              </div>
            {/* Lista tareas */}
            <ul className="assignments-list">
              {course.assignments.map((assignment, idx) => (
                <li key={idx} className="assignment-item">
                  {/* Link para acceder a las tareas CAMBIAR */}
                  <NavLink
                    to={`/curso_page/${course.id}`}
                    className="assignment-link"
                  >
                    - {assignment.title} | {assignment.date}
                  </NavLink>
                </li>
              ))}
            </ul>
            </NavLink>
          </div>
          
        ))}
        
      </div>
    </div>
  );
};

export default Card;
