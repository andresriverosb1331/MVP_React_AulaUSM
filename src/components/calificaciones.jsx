import React from 'react';

const Calificaciones = () => {
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
            <td>Juan Pérez</td>
            <td>85</td>
            <td>90</td>
            <td>88</td>
            <td>87.6</td>
          </tr>
          <tr>
            <td>María González</td>
            <td>92</td>
            <td>89</td>
            <td>93</td>
            <td>91.3</td>
          </tr>
          <tr>
            <td>Laura Díaz</td>
            <td>90</td>
            <td>95</td>
            <td>91</td>
            <td>92</td>
          </tr>
          {/* Agrega más filas según sea necesario */}
        </tbody>
      </table>
    </div>
  );
};

export default Calificaciones;
