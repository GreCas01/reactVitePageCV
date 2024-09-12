import React, { useState } from 'react';
import './TrajectoryTimeComponent.css'; // Importa los estilos CSS aquí
import ExperienciaTimeComponent from './ExperienciaTimeComponent/ExperienciaTimeComponent';
import LoboralTimeComponent from './LoboralTimeComponent/LoboralTimeComponent';
 
const TrajectoryTimeComponent = () => {
  const [viewFormacion, setViewFormacion] = useState(true);

  const toggleView = (view) => {
    setViewFormacion(view);
  };

  return (
    <div>
      <div className="toggle">
        <input
          id="toggle-on"
          className="toggle toggle-left"
          name="toggle"
          value="false"
          type="radio"
          checked={viewFormacion}
          onChange={() => toggleView(true)}
        />
        <label htmlFor="toggle-on" className="btn">Formación</label>
        <input
          id="toggle-off"
          className="toggle toggle-right"
          name="toggle"
          value="true"
          type="radio"
          checked={!viewFormacion}
          onChange={() => toggleView(false)}
        />
        <label htmlFor="toggle-off" className="btn">Experiencia</label>
      </div>

      <h4 id="timeline-titulo">{viewFormacion ? 'Formación' : 'Experiencia'}</h4>

      {viewFormacion ? <ExperienciaTimeComponent /> : <LoboralTimeComponent />}
    </div>
  );
};

export default TrajectoryTimeComponent;
