// src/pages/ParticipantesPage.jsx
import React, { useState } from 'react';

const Participantes = ({participantesData = []}) => {
  const [nombreFiltro, setNombreFiltro] = useState('');
  const [claseFiltro, setClaseFiltro] = useState('');

  // Filtra la lista de participantes según el nombre y clase ingresados
  const participantesFiltrados = participantesData.filter((participante) => {
    const coincideNombre = participante.nombre.toLowerCase().includes(nombreFiltro.toLowerCase());
    const coincideClase = claseFiltro ? participante.clase === claseFiltro : true;
    return coincideNombre && coincideClase;
  });

  return (
    <div className="participantes-page">
      <h1>Participantes</h1>

      {/* Buscador */}
      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={nombreFiltro}
          onChange={(e) => setNombreFiltro(e.target.value)}
          className="buscador__input"
        />
        <select
          value={claseFiltro}
          onChange={(e) => setClaseFiltro(e.target.value)}
          className="buscador__select"
        >
          <option value="">Todos los Roles</option>
          <option value="Profesor/a">Profesor/a</option>
          <option value="Ayudante">Ayudante</option>
          <option value="Estudiante">Estudiante</option>
          {/* Agrega más opciones según sea necesario */}
        </select>
      </div>

      {/* Lista de Participantes Filtrados */}
      <div className="participantes-list">
        {participantesFiltrados.map((participante) => (
          <div key={participante.id} className="participante">
            <h3>{participante.nombre}</h3>
            <p>{participante.clase}</p>
            <p>{participante.email}</p>
          </div>
        ))}
        {participantesFiltrados.length === 0 && <p>No se encontraron participantes.</p>}
      </div>
    </div>
  );
};

export default Participantes;
