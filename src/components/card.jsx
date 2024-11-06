import React, { useState } from 'react';
import '../stylesheets/Card/contenedor.scss';
import '../stylesheets/Card/card.scss';

const coursesData = {
  '2024-02': [    
    {
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
    subject: 'Física',
    courseName: 'Física 140',
    parallel: '200/201/202',
    code: 'FIS140',
    assignments: [
      { title: 'Entrega 1 proyecto', date: '07/09/2024' },
      { title: 'Entrega 2 proyecto', date: '05/11/2024' },
      { title: 'Entrega 3 proyecto', date: '27/11/2024' }
    ]
  },
  {
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
  '2024-01': [    {
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

const CoursesComponent = () => {
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
            <a href="/" className="info-ramo-link">
            {/* Cambia color del ramo según su subject: */}
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
                  {/* Link generado tarea: /CourseName/Assignment.title */}
                  <a href={`/${encodeURIComponent(course.courseName)}/${encodeURIComponent(assignment.title)}`} className="assignment-link">
                    - {assignment.title} | {assignment.date}
                  </a>
                </li>
              ))}
            </ul>
            </a>
          </div>
          
        ))}
        
      </div>
    </div>
  );
};

export default CoursesComponent;
