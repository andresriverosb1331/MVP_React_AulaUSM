import React from 'react';

const Calificaciones = ({param}) => {
  var c = parseInt(param)
  let participantes
  switch (c) {
    case 1:
      participantes = [
        { id: 1, nombre: 'Juan Pérez', u1: '12', u2:'80', proyecto: '69', promedio:'54' },
        { id: 2, nombre: 'María González', u1: '23', u2:'43', proyecto: '15', promedio:'27' },
        { id: 3, nombre: 'Laura Díaz', clase: 'Profesor/a', email: 'laura.diaz@usm.cl' },
        { id: 4, nombre: 'Carlos Ruiz', clase: 'Ayudante', email: 'carlos.ruiz@usm.cl' },
      ];
      break
    case 2:
      participantes = [
        { id: 5, nombre: 'Sofía Morales', u1: '76', u2:'12', proyecto: '23', promedio:'37' },
        { id: 6, nombre: 'Diego López',u1: '25', u2:'89', proyecto: '90', promedio:'68' },
        { id: 7, nombre: 'Ana Torres', clase: 'Profesor/a', email: 'ana.torres@usm.cl' },
        { id: 8, nombre: 'Pedro Sánchez', clase: 'Ayudante', email: 'pedro.sanchez@usm.cl' },
      ];
      break
    case 3:
      participantes = [
        { id: 9, nombre: 'Claudia Rojas', u1: '75', u2:'63', proyecto: '65', promedio:'68' },
        { id: 10, nombre: 'Javier Fernández', u1: '20', u2:'10', proyecto: '67', promedio:'32' },
        { id: 11, nombre: 'Patricia Herrera', clase: 'Profesor/a', email: 'patricia.herrera@usm.cl' },
        { id: 12, nombre: 'Lucas Méndez', clase: 'Ayudante', email: 'lucas.mendez@usm.cl' },
      ];
      break
    case 4:
      participantes = [
        { id: 13, nombre: 'María Silva', u1: '31', u2:'62', proyecto: '84', promedio:'59' },
        { id: 14, nombre: 'Fernando Gómez', u1: '33', u2:'79', proyecto: '35', promedio:'49' },
        { id: 15, nombre: 'Carmen López', clase: 'Profesor/a', email: 'carmen.lopez@usm.cl' },
        { id: 16, nombre: 'Ricardo Torres', clase: 'Ayudante', email: 'ricardo.torres@usm.cl' },
      ];
      break
    case 5:
      participantes = [
        { id: 17, nombre: 'Lucía Martínez', u1: '47', u2:'16', proyecto: '67', promedio:'43' },
        { id: 18, nombre: 'Andrés González', u1: '51', u2:'52', proyecto: '89', promedio:'64' },
        { id: 19, nombre: 'Verónica Castro', clase: 'Profesor/a', email: 'veronica.castro@usm.cl' },
        { id: 20, nombre: 'José Pérez', clase: 'Ayudante', email: 'jose.perez@usm.cl' },
      ];
      break
    case 6:
      participantes = [
        { id: 21, nombre: 'Nicolás Reyes', u1: '28', u2:'68', proyecto: '53', promedio:'50' },
        { id: 22, nombre: 'Sofia Paredes', u1: '12', u2:'25', proyecto: '35', promedio:'24' },
        { id: 23, nombre: 'Patricio Moya', clase: 'Profesor/a', email: 'patricio.moya@usm.cl' },
        { id: 24, nombre: 'Gabriela Ortiz', clase: 'Ayudante', email: 'gabriela.ortiz@usm.cl' },
      ];
      break
    case 7:
      participantes = [
        { id: 25, nombre: 'Esteban Navarro',u1: '29', u2:'74', proyecto: '7', promedio:'37' },
        { id: 26, nombre: 'Andrea Salazar', u1: '25', u2:'37', proyecto: '9', promedio:'24' },
        { id: 27, nombre: 'Ignacio Moreno', clase: 'Profesor/a', email: 'ignacio.moreno@usm.cl' },
        { id: 28, nombre: 'María José Soto', clase: 'Ayudante', email: 'mariajose.soto@usm.cl' },
      ];
      break
    case 8:
      participantes = [
        { id: 29, nombre: 'Claudio Vázquez', u1: '47', u2:'16', proyecto: '67', promedio:'43' },
        { id: 30, nombre: 'Rocío Fuentes', u1: '25', u2:'37', proyecto: '9', promedio:'24' },
        { id: 31, nombre: 'Felipe Álvarez', clase: 'Profesor/a', email: 'felipe.alvarez@usm.cl' },
        { id: 32, nombre: 'Ximena Cordero', clase: 'Ayudante', email: 'ximena.cordero@usm.cl' },
      ];
      break
    case 9:
      participantes = [
        { id: 33, nombre: 'Fernando Castro', u1: '31', u2:'62', proyecto: '84', promedio:'59' },
        { id: 34, nombre: 'Patricia Guzmán', u1: '25', u2:'37', proyecto: '9', promedio:'24' },
        { id: 35, nombre: 'Joaquín Delgado', clase: 'Profesor/a', email: 'joaquin.delgado@usm.cl' },
        { id: 36, nombre: 'Beatriz Rivas', clase: 'Ayudante', email: 'beatriz.rivas@usm.cl' },
      ];
      break
    case 10:
      participantes = [
        { id: 37, nombre: 'Cristóbal Valdés', u1: '25', u2:'89', proyecto: '90', promedio:'68' },
        { id: 38, nombre: 'Claudia Aguirre', u1: '12', u2:'80', proyecto: '69', promedio:'54' },
        { id: 39, nombre: 'Francisco Andrade', clase: 'Profesor/a', email: 'francisco.andrade@usm.cl' },
        { id: 40, nombre: 'Ana María López', clase: 'Ayudante', email: 'anamaria.lopez@usm.cl' },
      ];
      break
  }
  return (
    <div className="calificaciones-page">
      <h1>Calificaciones</h1>
      <p>Resumen de las calificaciones de cada participante.</p>

      <table className="calificaciones-table">
        <thead>
          <tr>
            <th>Participante</th>
            <th>Unidad 1</th>
            <th>Unidad 2</th>
            <th>Proyecto</th>
            <th>Promedio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{participantes[0].nombre}</td>
            <td>{participantes[0].u1}</td>
            <td>{participantes[0].u2}</td>
            <td>{participantes[0].proyecto}</td>
            <td>{participantes[0].promedio}</td>
          </tr>
          <tr>
            <td>{participantes[1].nombre}</td>
            <td>{participantes[1].u1}</td>
            <td>{participantes[1].u2}</td>
            <td>{participantes[1].proyecto}</td>
            <td>{participantes[1].promedio}</td>
          </tr>
          {/* Agrega más filas según sea necesario */}
        </tbody>
      </table>
    </div>
  );
};

export default Calificaciones;
